#!/usr/bin/env python3
"""CLI for LightRAGWrapper knowledge-base ingestion and querying using Typer.

Examples:
    python cli/rag_kbv2.py add data/user/data_sources/test hs_code_test
    python cli/rag_kbv2.py query hs_code_test "What products are under chapter 84?"
"""

from __future__ import annotations

import os
import sys
from pathlib import Path
from typing import Annotated

import typer
from dotenv import load_dotenv

# ---------------------------------------------------------------------------
# Environment and path setup
# ---------------------------------------------------------------------------

project_root = Path(__file__).resolve().parents[1]
if str(project_root) not in sys.path:
    sys.path.insert(0, str(project_root))

env_path = project_root / ".env"
load_dotenv(env_path, override=True)

from DeepHSCode.KGs.KGs import LightRAGWrapper

# ---------------------------------------------------------------------------
# Default configuration from environment
# ---------------------------------------------------------------------------

DEFAULT_OLLAMA_HOST = os.getenv("OLLAMA_HOST", "http://10.103.1.23:11434")
DEFAULT_EMBED_MODEL = os.getenv("OLLAMA_EMBEDDING_MODEL", "qwen3-embedding:4b")
DEFAULT_LLM_MODEL_INGEST = os.getenv("OLLAMA_LLM_MODEL", "qwen3:32b-q4_K_M")
DEFAULT_LLM_MODEL_QUERY = os.getenv("OLLAMA_LLM_MODEL_QUERY", DEFAULT_LLM_MODEL_INGEST)
DEFAULT_WORKING_DIR = "data/knowledge_bases"

# ---------------------------------------------------------------------------
# Typer app
# ---------------------------------------------------------------------------

app = typer.Typer(
    name="rag-kbv2",
    help="LightRAG Knowledge Base CLI - Manage and query knowledge bases",
    no_args_is_help=True,
)


def create_wrapper(
    working_dir: str,
    ollama_host: str,
    embed_model: str,
    llm_model: str,
) -> LightRAGWrapper:
    """Create a LightRAGWrapper instance."""
    return LightRAGWrapper(
        working_dir=working_dir,
        ollama_host=ollama_host,
        embed_model=embed_model,
        llm_model=llm_model,
    )


@app.command()
def add(
    folder_path: Annotated[str, typer.Argument(help="Folder path containing documents.")],
    knowledge_base_name: Annotated[str, typer.Argument(help="Target knowledge base name.")],
    working_dir: Annotated[str, typer.Option(help="Base directory for knowledge bases.")] = DEFAULT_WORKING_DIR,
    host: Annotated[str, typer.Option("--host", "-h", help="Ollama server URL.")] = DEFAULT_OLLAMA_HOST,
    embed_model: Annotated[str, typer.Option("--embed", "-e", help="Embedding model name.")] = DEFAULT_EMBED_MODEL,
    llm_model: Annotated[str, typer.Option("--llm", "-l", help="LLM model name for ingestion.")] = DEFAULT_LLM_MODEL_INGEST,
) -> None:
    """Ingest documents into a knowledge base."""
    folder = Path(folder_path)
    if not folder.exists():
        typer.echo(f"Error: Folder not found: {folder}", err=True)
        raise typer.Exit(1)

    rag = create_wrapper(
        working_dir=working_dir,
        ollama_host=host,
        embed_model=embed_model,
        llm_model=llm_model,
    )

    typer.echo(f"[ADD] host={host}")
    typer.echo(f"[ADD] embed_model={embed_model}")
    typer.echo(f"[ADD] llm_model={llm_model}")

    report = rag.add_documents(str(folder), knowledge_base_name)
    typer.echo(report)


@app.command()
def query(
    knowledge_base_name: Annotated[str, typer.Argument(help="Knowledge base name.")],
    query_text: Annotated[str, typer.Argument(help="Question to query.")],
    working_dir: Annotated[str, typer.Option(help="Base directory for knowledge bases.")] = DEFAULT_WORKING_DIR,
    host: Annotated[str, typer.Option("--host", "-h", help="Ollama server URL.")] = DEFAULT_OLLAMA_HOST,
    embed_model: Annotated[str, typer.Option("--embed", "-e", help="Embedding model name.")] = DEFAULT_EMBED_MODEL,
    llm_model: Annotated[str, typer.Option("--llm", "-l", help="LLM model name for query.")] = DEFAULT_LLM_MODEL_QUERY,
    mode: Annotated[str, typer.Option("--mode", "-m", help="LightRAG query mode.")] = "hybrid",
) -> None:
    """Query a knowledge base."""
    rag = create_wrapper(
        working_dir=working_dir,
        ollama_host=host,
        embed_model=embed_model,
        llm_model=llm_model,
    )

    print(f"RAG is ready, now querying the knowledge base...")
    typer.echo(f"[QUERY] host={host}")
    typer.echo(f"[QUERY] embed_model={embed_model}")
    typer.echo(f"[QUERY] llm_model={llm_model}")
    typer.echo(f"[QUERY] mode={mode}")

    answer = rag.query_knowledge(knowledge_base_name, query_text, mode=mode)
    typer.echo(answer)


if __name__ == "__main__":
    app()
