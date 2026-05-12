from __future__ import annotations

import os
from pathlib import Path
from typing import Optional

from dotenv import dotenv_values, load_dotenv
from langchain_openai import ChatOpenAI
from langchain_ollama import ChatOllama
from langchain_core.messages import HumanMessage, SystemMessage
from loguru import logger
from pydantic import BaseModel, Field
from typing import Type, get_args, get_origin

def _load_env() -> None:
    project_root = Path(__file__).resolve().parents[5]
    load_dotenv(project_root / ".env", override=False)


def _strip_inline_comment(value: str) -> str:
    """Strip inline shell comments (# ...) from an env var value."""
    import re
    # Don't touch quoted values
    stripped = value.strip()
    if stripped.startswith('"') or stripped.startswith("'"):
        return stripped
    return re.sub(r'\s+#.*$', '', stripped).strip()


def _env_value(name: str, default: str = "") -> str:
    """Return env value; if set but empty, fall back to .env file value."""
    value = os.getenv(name)
    if value is not None and value.strip():
        return _strip_inline_comment(value)
    
    project_root = Path(__file__).resolve().parents[5]
    env_path = project_root / ".env"
    if env_path.exists():
        file_val: Optional[str] = dotenv_values(env_path).get(name)
        if file_val is not None and str(file_val).strip():
            return str(file_val).strip()

    return default


def create_llm(MODEL_NAME_ENV: str, prefix: str = "") -> ChatOpenAI:
    """Create a ChatOpenAI instance from .env configuration."""
    _load_env()

    BINDING = f"{prefix}LLM_BINDING"
    HOST = f"{prefix}LLM_HOST"
    API = f"{prefix}LLM_API_KEY"

    binding = _env_value(BINDING, "openai").lower()
    if binding != "openai":
        raise ValueError("LLM_BINDING must be 'openai' for this tool.")

    base_url = _env_value(HOST, "")
    model = _env_value(MODEL_NAME_ENV, "")
    api_key = _env_value(API, "")

    if not base_url:
        raise ValueError(f"{HOST} is missing in .env")
    if not model:
        raise ValueError(f"{MODEL_NAME_ENV} is missing in .env")
    if not api_key:
        raise ValueError(f"{API} is missing in .env")

    return ChatOpenAI(
        model=model,
        base_url=base_url,
        api_key=api_key,
        temperature=0,
    )


def create_ollama_llm(MODEL_NAME_ENV: str) -> ChatOllama:
    """Create a ChatOllama instance connected to remote Ollama server."""
    _load_env()

    # Read host from env — supports http://host:11434 (no /v1 needed for ChatOllama)
    base_url = _env_value("OLLAMA_HOST", "http://localhost:11434").rstrip("/")
    model = _env_value(MODEL_NAME_ENV, "")

    if not model:
        raise ValueError(f"{MODEL_NAME_ENV} is missing in .env")

    logger.info(f"Ollama connecting to {base_url} with model '{model}'")

    return ChatOllama(
        model=model,
        base_url=base_url,
        temperature=0,
    )


def llm_prompt(prompt: str, model_name: str = "LLM_MODEL", system_prompt: str = None) -> str:
    """Call the configured LLM with a plain prompt and return text output."""
    text = prompt.strip()
    if not text:
        raise ValueError("prompt cannot be empty")

    SystemPrompt = SystemMessage(content=system_prompt) if system_prompt else SystemMessage(content="You are a helpful assistant.")

    logger.opt(colors=True).info(f"LLM MODEL: <b><cyan>{model_name}</cyan></b>")
    messages = [SystemPrompt, HumanMessage(content=text)]
    result = LLM[model_name].invoke(messages)
    content = result.content
    if isinstance(content, str):
        return content
    return str(content)


def llm_prompt_with_structuredformat(prompt: str, model_cls: Type[BaseModel], model_name: str = "LLM_MODEL",  system_prompt: str = None) -> str:
    """Call the configured LLM with a plain prompt and return text output."""
    text = prompt.strip()
    if not text:
        raise ValueError("prompt cannot be empty")

    SystemPrompt = SystemMessage(content=system_prompt) if system_prompt else SystemMessage(content="You are a helpful assistant.")

    logger.opt(colors=True).info(f"LLM MODEL: <b><cyan>{model_name}</cyan></b>")
    messages = [SystemPrompt, HumanMessage(content=text)]
    LLM2 = LLM[model_name].with_structured_output(model_cls)
    # result = LLM[model_name].invoke(messages)
    res = LLM2.invoke(messages)
    
    return res.model_dump()


# --- Safe module-level initialization ---
LLM = {}
_llm_factories = {
    "LLM_MODEL":             lambda: create_llm("LLM_MODEL"),
    "OLLAMA_LLM_MODEL_LLM":  lambda: create_ollama_llm("OLLAMA_LLM_MODEL_LLM"),
    "OLLAMA_LLM_MODEL_SLM":  lambda: create_ollama_llm("OLLAMA_LLM_MODEL_SLM"),
    "OLLAMA_LLM_MODEL_TOOL": lambda: create_ollama_llm("OLLAMA_LLM_MODEL_TOOL"),
    "OLLAMA_LLM_MODEL_QUERY": lambda: create_ollama_llm("OLLAMA_LLM_MODEL_QUERY"),
    "PERPLEXITY_LLM_MODEL":  lambda: create_llm("PERPLEXITY_LLM_MODEL", prefix="PERPLEXITY_"),
}

for _key, _factory in _llm_factories.items():
    try:
        LLM[_key] = _factory()
        logger.success(f"✅ Loaded: {_key}")
    except Exception as e:
        logger.warning(f"⚠️  Skipped {_key}: {e}")


if __name__ == "__main__":
    prompt = "Reply with: OK. Then tell me your model name (one short sentence)."
    results = {}

    print("\n=== LLM Health Check ===")
    for name in LLM:
        try:
            response = llm_prompt(prompt, model_name=name)
            results[name] = f"✅ {response.strip()[:80]}"
        except Exception as e:
            results[name] = f"❌ {e}"
        print(f"{name:<35} {results[name]}")