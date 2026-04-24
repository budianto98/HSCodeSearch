"""Reusable LightRAG module for document ingestion and retrieval."""

from __future__ import annotations

import asyncio
import concurrent.futures
import inspect
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Protocol


SUPPORTED_SUFFIXES = (".pdf", ".md", ".txt")


@dataclass(frozen=True)
class DocumentChunk:
    """Text extracted from a source file."""

    source_path: Path
    text: str
    doc_id: str


@dataclass(frozen=True)
class IngestionReport:
    """Ingestion summary."""

    scanned_count: int
    ingested_count: int
    skipped_count: int
    ingested_files: list[Path]
    skipped_files: list[Path]


class RAGBackend(Protocol):
    """Backend contract so callers can swap implementations."""

    def insert_documents(
        self, *, texts: list[str], ids: list[str], file_paths: list[str]
    ) -> Any:
        """Insert document strings into the knowledge store."""

    def query(self, question: str, *, mode: str) -> str:
        """Query the knowledge store."""

    def close(self) -> None:
        """Release backend resources."""


class LightRAGBackend:
    """Adapter over LightRAG core package."""

    def __init__(self, working_dir: str | Path, **kwargs: Any) -> None:
        try:
            from lightrag import LightRAG, QueryParam  # type: ignore
        except ImportError as exc:
            raise RuntimeError(
                "LightRAG Python package not found. Install it in this project env, for example:\n"
                "  uv add lightrag-hku"
            ) from exc

        self._query_param_cls = QueryParam
        self._rag = LightRAG(working_dir=str(Path(working_dir)), **kwargs)
        self._initialize_if_needed()

    def _initialize_if_needed(self) -> None:
        initialize = getattr(self._rag, "initialize_storages", None)
        if callable(initialize):
            _run_maybe_awaitable(initialize())

        try:
            from lightrag.kg.shared_storage import (  # type: ignore
                initialize_pipeline_status,
            )
        except ImportError:
            return
        _run_maybe_awaitable(initialize_pipeline_status())

    def insert_documents(
        self, *, texts: list[str], ids: list[str], file_paths: list[str]
    ) -> Any:
        async_insert = getattr(self._rag, "ainsert", None)
        if callable(async_insert):
            return _run_maybe_awaitable(
                async_insert(texts, ids=ids, file_paths=file_paths)
            )
        return self._rag.insert(texts, ids=ids, file_paths=file_paths)

    def query(self, question: str, *, mode: str) -> str:
        param = self._query_param_cls(mode=mode)
        query_fn = getattr(self._rag, "aquery", None)
        if not callable(query_fn):
            query_fn = getattr(self._rag, "query")
        result = query_fn(question, param=param)
        final = _run_maybe_awaitable(result)
        return str(final)

    def close(self) -> None:
        finalize = getattr(self._rag, "finalize_storages", None)
        if callable(finalize):
            _run_maybe_awaitable(finalize())


class LightRAGModule:
    """Reusable module for indexing and querying local documents."""

    def __init__(
        self,
        *,
        working_dir: str | Path,
        backend: RAGBackend | None = None,
        allowed_suffixes: tuple[str, ...] = SUPPORTED_SUFFIXES,
    ) -> None:
        self.working_dir = Path(working_dir)
        self.working_dir.mkdir(parents=True, exist_ok=True)
        self.allowed_suffixes = tuple(s.lower() for s in allowed_suffixes)
        self.backend = backend or LightRAGBackend(working_dir=self.working_dir)

    def discover_documents(
        self,
        source_dir: str | Path,
        *,
        recursive: bool = True,
        max_files: int | None = None,
    ) -> list[Path]:
        base = Path(source_dir)
        if not base.exists():
            raise FileNotFoundError(f"Source directory does not exist: {base}")

        pattern = "**/*" if recursive else "*"
        files = [
            p
            for p in sorted(base.glob(pattern))
            if p.is_file() and p.suffix.lower() in self.allowed_suffixes
        ]
        if max_files is not None:
            files = files[:max_files]
        return files

    def ingest_directory(
        self,
        source_dir: str | Path,
        *,
        recursive: bool = True,
        max_files: int | None = None,
    ) -> IngestionReport:
        files = self.discover_documents(
            source_dir, recursive=recursive, max_files=max_files
        )
        chunks: list[DocumentChunk] = []
        skipped: list[Path] = []
        for file_path in files:
            text = self._read_supported_document(file_path)
            if not text:
                skipped.append(file_path)
                continue
            chunks.append(
                DocumentChunk(
                    source_path=file_path,
                    text=text,
                    doc_id=self._build_doc_id(file_path),
                )
            )

        if chunks:
            self.backend.insert_documents(
                texts=[c.text for c in chunks],
                ids=[c.doc_id for c in chunks],
                file_paths=[str(c.source_path) for c in chunks],
            )

        return IngestionReport(
            scanned_count=len(files),
            ingested_count=len(chunks),
            skipped_count=len(skipped),
            ingested_files=[c.source_path for c in chunks],
            skipped_files=skipped,
        )

    def query(self, question: str, *, mode: str = "hybrid") -> str:
        if not question.strip():
            raise ValueError("Question cannot be empty.")
        return self.backend.query(question, mode=mode)

    def close(self) -> None:
        self.backend.close()

    def _read_supported_document(self, path: Path) -> str:
        suffix = path.suffix.lower()
        if suffix in {".txt", ".md"}:
            return self._read_text(path)
        if suffix == ".pdf":
            return self._extract_pdf_text(path)
        return ""

    @staticmethod
    def _build_doc_id(path: Path) -> str:
        return str(path.as_posix())

    @staticmethod
    def _read_text(path: Path) -> str:
        return path.read_text(encoding="utf-8", errors="ignore").strip()

    @staticmethod
    def _extract_pdf_text(path: Path) -> str:
        try:
            from pypdf import PdfReader  # type: ignore
        except ImportError as exc:
            raise RuntimeError(
                "PDF ingestion requires pypdf. Install it with:\n"
                "  uv add pypdf"
            ) from exc

        reader = PdfReader(str(path))
        pages = [page.extract_text() or "" for page in reader.pages]
        return "\n".join(pages).strip()


def _run_maybe_awaitable(value: Any) -> Any:
    if not inspect.isawaitable(value):
        return value

    try:
        loop = asyncio.get_running_loop()
    except RuntimeError:
        return asyncio.run(value)

    if loop.is_running():
        # Notebook/REPL case: run coroutine in a worker thread with its own event loop.
        # Running another loop in the same thread raises:
        # "Cannot run the event loop while another loop is running".
        with concurrent.futures.ThreadPoolExecutor(max_workers=1) as executor:
            future = executor.submit(asyncio.run, value)
            return future.result()
    return loop.run_until_complete(value)
