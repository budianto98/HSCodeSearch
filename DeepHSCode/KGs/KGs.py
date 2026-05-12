from functools import partial
from pathlib import Path
import importlib
import sys
import numpy as np

import json
import shutil
from datetime import datetime, timezone

sys.path.append("/Users/lscm/Project/PCS/HSCodeSearch")

# Initialization imports
from lightrag.llm.ollama import ollama_embed, ollama_model_complete
from lightrag.utils import EmbeddingFunc
import DeepHSCode.KGs.rag_module as rag_module

# Force reload
importlib.reload(rag_module)
LightRAGBackend = rag_module.LightRAGBackend
LightRAGModule = rag_module.LightRAGModule
run_maybe_awaitable = rag_module._run_maybe_awaitable


class LightRAGWrapper:
    def __init__(
        self,
        working_dir: str,
        ollama_host: str = "http://10.103.1.23:11434",
        embed_model: str = "qwen3-embedding:4b",
        llm_model: str = "qwen3:32b-q4_K_M",
    ):
        """
        Initialize the LightRAG wrapper.

        Args:
            working_dir: Base directory to store all knowledge bases
            ollama_host: Ollama server host
            embed_model: Embedding model name
            llm_model: LLM model name
        """
        self.working_dir = Path(working_dir)
        self.working_dir.mkdir(parents=True, exist_ok=True)
        self.ollama_host = ollama_host
        self.embed_model = embed_model
        self.llm_model = llm_model
        self.embedding_dim = None
        self.embedding_func = None
        self.llm_model_func = None
        print("Initializing models...")
        self._init_models()
        print("LightRAGWrapper initialized successfully!")

    @staticmethod
    def _utc_now_iso() -> str:
        return (
            datetime.now(timezone.utc).replace(microsecond=0).strftime("%Y-%m-%dT%H:%M:%SZ")
        )

    def _get_kb_paths(self, knowledge_base_name: str):
        kb_dir = self.working_dir / knowledge_base_name
        raw_dir = kb_dir / "raw"
        rag_storage_dir = kb_dir / "rag_storage"
        metadata_path = kb_dir / "metadata.json"
        return kb_dir, raw_dir, rag_storage_dir, metadata_path

    def _ensure_kb_structure(self, knowledge_base_name: str):
        kb_dir, raw_dir, rag_storage_dir, metadata_path = self._get_kb_paths(
            knowledge_base_name
        )
        kb_dir.mkdir(parents=True, exist_ok=True)
        raw_dir.mkdir(parents=True, exist_ok=True)
        rag_storage_dir.mkdir(parents=True, exist_ok=True)
        return kb_dir, raw_dir, rag_storage_dir, metadata_path

    @staticmethod
    def _copy_source_to_raw(source_dir: Path, raw_dir: Path, source_files: list[Path]):
        copied_files = []
        for file_path in source_files:
            relative_path = file_path.relative_to(source_dir)
            target = raw_dir / relative_path
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(file_path, target)
            copied_files.append(relative_path.as_posix())
        return copied_files

    @staticmethod
    def _split_new_documents(
        rag: LightRAGModule, source_dir: Path, raw_dir: Path
    ) -> tuple[list[Path], list[Path], list[Path]]:
        discovered_files = rag.discover_documents(source_dir, recursive=True, max_files=None)
        new_files: list[Path] = []
        existing_files: list[Path] = []
        for file_path in discovered_files:
            relative_path = file_path.relative_to(source_dir)
            if (raw_dir / relative_path).exists():
                existing_files.append(file_path)
            else:
                new_files.append(file_path)
        return discovered_files, new_files, existing_files

    def _write_kb_metadata(
        self, metadata_path: Path, knowledge_base_name: str, filenames: list[str]
    ):
        metadata = {}
        if metadata_path.exists():
            try:
                metadata = json.loads(metadata_path.read_text(encoding="utf-8"))
            except json.JSONDecodeError:
                metadata = {}

        now = self._utc_now_iso()
        created_at = metadata.get("created_at", now)

        update_history = metadata.get("update_history", [])
        if not isinstance(update_history, list):
            update_history = []

        if not metadata_path.exists():
            update_history.append(
                {
                    "timestamp": now,
                    "action": "created",
                    "filenames": [],
                }
            )

        update_history.append(
            {
                "timestamp": now,
                "action": "documents_added",
                "filenames": sorted(set(filenames)),
            }
        )

        metadata = {
            "name": knowledge_base_name,
            "created_at": created_at,
            "update_history": update_history,
        }
        metadata_path.write_text(
            json.dumps(metadata, indent=2, ensure_ascii=True) + "\n",
            encoding="utf-8",
        )

    def _init_models(self):
        """Initialize embedding and LLM models."""
        # Test embedding dimension
        probe = run_maybe_awaitable(self._robust_ollama_embed(["dimension probe"]))
        self.embedding_dim = int(probe.shape[1])
        print(f"Using embedding dimension: {self.embedding_dim}")

        self.embedding_func = EmbeddingFunc(
            embedding_dim=self.embedding_dim,
            max_token_size=getattr(ollama_embed, "max_token_size", 8192),
            func=self._robust_ollama_embed,
            model_name=self.embed_model,
        )
        # Keep model selection in LightRAG via llm_model_name to avoid passing `model` twice.
        self.llm_model_func = partial(ollama_model_complete, host=self.ollama_host)

    @staticmethod
    def _normalize_embeddings_array(base, expected_rows: int):
        arr = np.asarray(base)
        if arr.size == 0 or arr.ndim == 0:
            raise RuntimeError("Embedding model returned an empty/scalar response.")
        if arr.ndim == 1:
            arr = arr.reshape(1, -1)
        elif arr.ndim > 2:
            arr = arr.reshape(arr.shape[0], -1)
        if arr.shape[0] != expected_rows:
            raise ValueError(
                f"Embedding row mismatch: expected {expected_rows}, got {arr.shape[0]}"
            )
        return arr

    async def _robust_ollama_embed(self, texts, max_token_size=None, **kwargs):
        """Robust embedding with fallback for batch issues."""
        base = ollama_embed.func(
            texts,
            host=self.ollama_host,
            embed_model=self.embed_model,
            max_token_size=max_token_size,
            **kwargs,
        )
        if hasattr(base, "__await__"):
            base = await base
        try:
            return self._normalize_embeddings_array(base, expected_rows=len(texts))
        except Exception:
            pass

        # Fallback to individual embeddings
        vectors = []
        for text in texts:
            single = ollama_embed.func(
                [text],
                host=self.ollama_host,
                embed_model=self.embed_model,
                max_token_size=max_token_size,
                **kwargs,
            )
            if hasattr(single, "__await__"):
                single = await single
            single_arr = self._normalize_embeddings_array(single, expected_rows=1)
            vectors.append(np.asarray(single_arr[0]))
        return np.vstack(vectors)

    def add_documents(self, folder_path: str, knowledge_base_name: str):
        """
        Add documents from folder to specified knowledge base.

        Args:
            folder_path: Path to source directory (recursive)
            knowledge_base_name: Name of the knowledge base (subfolder)

        Returns:
            Ingestion report
        """
        source_dir = Path(folder_path)
        print(f"Source directory: {source_dir}")
        assert source_dir.exists(), f"Missing source directory: {source_dir}"

        kb_dir, raw_dir, rag_storage_dir, metadata_path = self._ensure_kb_structure(
            knowledge_base_name
        )
        print(
            f"Adding documents from {source_dir} to knowledge base '{knowledge_base_name}' at {kb_dir}"
        )
        
        backend = LightRAGBackend(
            working_dir=rag_storage_dir,
            embedding_func=self.embedding_func,
            llm_model_func=self.llm_model_func,
            llm_model_name=self.llm_model,
            chunk_token_size=512,
            chunk_overlap_token_size=50
        ) 
        rag = LightRAGModule(working_dir=rag_storage_dir, backend=backend)

        discovered_files, new_files, existing_files = self._split_new_documents(
            rag, source_dir, raw_dir
        )

        if existing_files:
            print(f"Skipping {len(existing_files)} file(s) already in raw/: {raw_dir}")

        if not new_files:
            report = rag_module.IngestionReport(
                scanned_count=len(discovered_files),
                ingested_count=0,
                skipped_count=len(existing_files),
                ingested_files=[],
                skipped_files=existing_files,
            )
            print("No new documents to ingest.")
            return report

        # Ingest only documents not already present in raw/.
        report = rag.ingest_files(new_files)

        copied_files = self._copy_source_to_raw(source_dir, raw_dir, new_files)
        print(f"Copied {len(copied_files)} files into raw storage: {raw_dir}")
        self._write_kb_metadata(metadata_path, knowledge_base_name, copied_files)
        print(f"✅ Ingestion completed for '{knowledge_base_name}': {report}")

        return report

    def query_knowledge(self, knowledge_base_name: str, query: str, mode: str = "naive"):
        """
        Query the specified knowledge base.

        Args:
            knowledge_base_name: Name of the knowledge base
            query: Search query
            mode: Query mode ('hybrid', 'embedding', etc.)

        Returns:
            Query result
        """
        kb_dir, _, rag_storage_dir, _ = self._get_kb_paths(knowledge_base_name)
        assert kb_dir.exists(), f"Knowledge base '{knowledge_base_name}' not found at {kb_dir}"

        print(f"🔍 Querying '{knowledge_base_name}' with: {query}")

        backend = LightRAGBackend(
            working_dir=rag_storage_dir,
            embedding_func=self.embedding_func,
            llm_model_func=self.llm_model_func,
            llm_model_name=self.llm_model,
        )
        rag = LightRAGModule(working_dir=rag_storage_dir, backend=backend)

        result = rag.query(query, mode=mode)
        print("📄 Answer:")
        print(result)
        print("-" * 80)
        return result


def main():
    """Test the LightRAGWrapper functionality."""
    print("🚀 Starting LightRAGWrapper test...")

    # Configuration
    WORKING_DIR = "data/knowledge_bases"

    SOURCE_DIR = "data/user/data_sources/test"

    # Test 1: Initialize wrapper
    rag_wrapper = LightRAGWrapper(
        working_dir=WORKING_DIR,
        ollama_host="http://10.103.1.31:11434",
        embed_model="qwen3-embedding:4b",
        llm_model="qwen3:32b-q4_K_M",
    )

    # Test 2: Add documents to knowledge base
    kb_name = "WCO_2022B"
    # report = rag_wrapper.add_documents(SOURCE_DIR, kb_name)

    # Test 3: Query knowledge base
    test_queries = [
        "HS Code for Smart Watch"
    ]

    print("\n" + "=" * 80)
    print("TESTING QUERIES")
    print("=" * 80)

    for query in test_queries:
        rag_wrapper.query_knowledge(kb_name, query)

    print("✅ All tests completed successfully!")
    print(f"Knowledge bases created in: {WORKING_DIR}/{kb_name}")


if __name__ == "__main__":
    main()
