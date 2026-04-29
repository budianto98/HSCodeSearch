#!/usr/bin/env python3
"""CLI for LightRAGWrapper knowledge-base ingestion and querying.

Examples:
    python cli/rag_kb.py add data/user/data_sources/test hs_code_test
    python cli/rag_kb.py query hs_code_test "What products are under chapter 84?"
"""

from __future__ import annotations

import argparse
import os
import sys
from pathlib import Path

from dotenv import load_dotenv


def _project_root() -> Path:
    return Path(__file__).resolve().parents[1]


def _load_env() -> None:
    env_path = _project_root() / ".env"
    load_dotenv(env_path, override=True)


def _bootstrap_project_path() -> None:
    root = _project_root()
    root_str = str(root)
    if root_str not in sys.path:
        sys.path.insert(0, root_str)


def _build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="rag_kb",
        description="Manage LightRAG knowledge bases (add/query).",
    )
    parser.add_argument(
        "--working-dir",
        default="data/knowledge_bases",
        help="Base directory for knowledge bases (default: data/knowledge_bases).",
    )

    subparsers = parser.add_subparsers(dest="command", required=True)

    add_parser = subparsers.add_parser("add", help="Ingest documents into a knowledge base.")
    add_parser.add_argument("folder_path", help="Folder path containing documents.")
    add_parser.add_argument("knowledge_base_name", help="Target knowledge base name.")

    query_parser = subparsers.add_parser("query", help="Query a knowledge base.")
    query_parser.add_argument("knowledge_base_name", help="Knowledge base name.")
    query_parser.add_argument("query", help="Question to query.")
    query_parser.add_argument(
        "--mode",
        default="hybrid",
        help="LightRAG query mode (default: hybrid).",
    )
    return parser


def main() -> None:
    _load_env()
    _bootstrap_project_path()

    from DeepHSCode.KGs.KGs import LightRAGWrapper

    parser = _build_parser()
    args = parser.parse_args()

    ollama_host = os.getenv("OLLAMA_HOST", "http://10.103.1.23:11434")
    embed_model = os.getenv("OLLAMA_EMBEDDING_MODEL", "qwen3-embedding:4b")
    llm_model_ingest = os.getenv("OLLAMA_LLM_MODEL", "qwen3:32b-q4_K_M")
    llm_model_query = os.getenv("OLLAMA_LLM_MODEL_QUERY", llm_model_ingest)

    if args.command == "add":
        folder = Path(args.folder_path)
        if not folder.exists():
            raise SystemExit(f"Folder not found: {folder}")

        rag = LightRAGWrapper(
            working_dir=args.working_dir,
            ollama_host=ollama_host,
            embed_model=embed_model,
            llm_model=llm_model_ingest,
        )
        print(f"[ADD] host={ollama_host}")
        print(f"[ADD] embed_model={embed_model}")
        print(f"[ADD] llm_model={llm_model_ingest}")
        report = rag.add_documents(str(folder), args.knowledge_base_name)
        print(report)
        return

    rag = LightRAGWrapper(
        working_dir=args.working_dir,
        ollama_host=ollama_host,
        embed_model=embed_model,
        llm_model=llm_model_query,
    )
    print(f"[QUERY] host={ollama_host}")
    print(f"[QUERY] embed_model={embed_model}")
    print(f"[QUERY] llm_model={llm_model_query}")
    answer = rag.query_knowledge(args.knowledge_base_name, args.query, mode=args.mode)
    print(answer)


if __name__ == "__main__":
    main()
