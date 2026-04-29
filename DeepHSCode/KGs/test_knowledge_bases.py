"""Test KnowledgeBases module with sample folder and query."""

from __future__ import annotations

import sys
import requests
from pathlib import Path

# Add project root to path (handles running from any directory)
project_root = Path(__file__).resolve().parents[2]
if str(project_root) not in sys.path:
    sys.path.insert(0, str(project_root))

from DeepHSCode.KGs import KnowledgeBases


# Configuration - adjust these for your Ollama setup
OLLAMA_HOST = "http://10.103.1.23:11434"  # Change to your Ollama host
LLM_MODEL = "qwen3:32b-q4_K_M"  # LLM for answering queries
EMBED_MODEL = "qwen3-embedding:4b"  # Embedding model for indexing


def check_ollama_models(host: str) -> list[str]:
    """Check which models are available on Ollama server."""
    try:
        resp = requests.get(f"{host}/api/tags", timeout=5)
        if resp.status_code == 200:
            models = resp.json().get("models", [])
            return [m.get("name", m.get("model", "unknown")) for m in models]
    except Exception as e:
        print(f"  Cannot connect to Ollama: {e}")
    return []


def test_knowledge_bases():
    """Test ingesting docs from folder and querying."""

    print(f"Using Ollama at: {OLLAMA_HOST}")
    print(f"LLM Model: {LLM_MODEL}")
    print(f"Embedding Model: {EMBED_MODEL}")

    # Check available models
    print("\n--- Checking available models ---")
    available = check_ollama_models(OLLAMA_HOST)
    if available:
        print(f"Available models: {available}")
        if LLM_MODEL not in available:
            print(f"WARNING: {LLM_MODEL} not found!")
            print(f"Using first available: {available[0]}")
            llm_model = available[0]
        else:
            llm_model = LLM_MODEL
    else:
        print("Could not fetch models. Will try with configured model.")
        llm_model = LLM_MODEL

    # Create KnowledgeBases with custom Ollama host and models
    kb = KnowledgeBases(
        base_dir="data/test_knowledge_bases",
        llm_model_name=llm_model,
        embedding_model_name=EMBED_MODEL,
        ollama_host=OLLAMA_HOST,
    )

    # Test folder
    test_folder = "data/user/data_sources/test"
    kb_name = "test"

    if not Path(test_folder).exists():
        print(f"Creating test folder: {test_folder}")
        Path(test_folder).mkdir(parents=True, exist_ok=True)
        (Path(test_folder) / "sample.txt").write_text(
            "HS Code 0204: Meat of sheep, fresh or chilled.\n"
            "HS Code 0205: Meat of sheep, frozen.\n"
            "Sheep meat classification for customs purposes."
        )

    # Track progress
    progress_updates = []

    def on_progress(update: dict):
        progress_updates.append(update)
        print(f"Progress: {update['stage']} - {update['message']}")

    # Add documents
    print(f"\n=== Adding documents from {test_folder} ===")
    result = kb.add_documents(test_folder, kb_name, progress_callback=on_progress)
    print(f"Result: {result}")

    # List knowledge bases
    print(f"\n=== Knowledge Bases ===")
    print(kb.list_knowledge_bases())

    # Search specific KB (handle errors gracefully)
    print(f"\n=== Search in '{kb_name}' ===")
    query = "What is the HS code for meat of sheep?"
    print(f"Query: {query}")

    try:
        results = kb.search(query, kb_name=kb_name)
        for r in results:
            if 'error' in r:
                print(f"KB: {r['kb_name']}, Error: {r['error']}")
            else:
                answer = r.get('answer', 'No answer')
                preview = answer[:300] if answer else "Empty"
                print(f"KB: {r['kb_name']}, Answer: {preview}...")
    except Exception as e:
        print(f"Search error: {e}")
        print("Tip: Check if Ollama is running and model is available:")
        print(f"  curl {OLLAMA_HOST}/api/tags | grep name")

    print(f"\n=== Test Complete ===")
    if available:
        print(f"Available models on {OLLAMA_HOST}: {available}")
    else:
        print(f"Could not connect to {OLLAMA_HOST}")
        print("To pull the required model, run:")
        print(f"  ollama pull {LLM_MODEL}")


if __name__ == "__main__":
    test_knowledge_bases()
