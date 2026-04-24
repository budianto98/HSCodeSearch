from __future__ import annotations

from pathlib import Path

from modules.lightrag import LightRAGModule, RAGBackend


class FakeRAGBackend(RAGBackend):
    def __init__(self) -> None:
        self.insert_calls: list[dict] = []
        self.closed = False

    def insert_documents(
        self, *, texts: list[str], ids: list[str], file_paths: list[str]
    ) -> dict:
        payload = {"texts": texts, "ids": ids, "file_paths": file_paths}
        self.insert_calls.append(payload)
        return {"inserted": len(texts)}

    def query(self, question: str, *, mode: str) -> str:
        inserted = self.insert_calls[-1]["texts"] if self.insert_calls else []
        return f"{mode}:{question}:docs={len(inserted)}"

    def close(self) -> None:
        self.closed = True


def test_ingest_and_query_uses_ruling_directory(monkeypatch) -> None:
    source_dir = Path("data/user/ruling")
    assert source_dir.exists(), "Expected ruling test corpus to exist."

    backend = FakeRAGBackend()
    module = LightRAGModule(working_dir="data/user/rag-work", backend=backend)

    monkeypatch.setattr(
        LightRAGModule,
        "_extract_pdf_text",
        staticmethod(lambda path: f"Extracted text from {Path(path).name}"),
    )

    report = module.ingest_directory(source_dir, max_files=3)
    answer = module.query("What is this ruling about?", mode="hybrid")
    module.close()

    assert report.scanned_count == 3
    assert report.ingested_count == 3
    assert report.skipped_count == 0
    assert len(backend.insert_calls) == 1
    assert all(
        str(Path(file_path)).startswith("data/user/ruling")
        for file_path in backend.insert_calls[0]["file_paths"]
    )
    assert answer.startswith("hybrid:What is this ruling about?:docs=3")
    assert backend.closed is True


def test_discover_documents_filters_supported_suffixes() -> None:
    backend = FakeRAGBackend()
    module = LightRAGModule(working_dir="data/user/rag-work", backend=backend)
    paths = module.discover_documents("data/user/ruling", max_files=5)

    assert paths
    assert all(path.suffix.lower() in {".pdf", ".md", ".txt"} for path in paths)
