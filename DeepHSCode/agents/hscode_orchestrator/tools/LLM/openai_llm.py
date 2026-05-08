from __future__ import annotations

import os
from pathlib import Path
from typing import Optional

from dotenv import dotenv_values, load_dotenv
from langchain_openai import ChatOpenAI
from langchain_ollama import ChatOllama




def _load_env() -> None:
    project_root = Path(__file__).resolve().parents[5]
    load_dotenv(project_root / ".env", override=False)


def _env_value(name: str, default: str = "") -> str:
    """Return env value; if set but empty, fall back to .env file value."""
    value = os.getenv(name)
    if value is not None and value.strip():
        return value.strip()

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
        raise ValueError("LLM_HOST is missing in .env")
    if not model:
        raise ValueError("LLM_MODEL is missing in .env")
    if not api_key:
        raise ValueError("LLM_API_KEY is missing in .env")

    return ChatOpenAI(
        model=model,
        base_url=base_url,
        api_key=api_key,
        temperature=0,
    )

def create_ollama_llm(MODEL_NAME_ENV: str) -> ChatOllama:
    """Create a ChatOpenAI instance connected to Ollama."""
    _load_env()

    # Ollama host requires the /v1 suffix for OpenAI-compatible client libraries.
    # Accept both styles in env: http://host:11434 and http://host:11434/v1.
    base_url = _env_value("OLLAMA_HOST", "http://localhost:11434").rstrip("/")
    # base_url = host if base_url.endswith("/v1") else f"{base_url}/v1"
    
    # Using the specific model from your environment configuration
    model = _env_value(MODEL_NAME_ENV, "")
        
        # Ollama local instances do not strictly require an API key, 
    # but the client requires a dummy value to initialize.
    api_key = _env_value("OLLAMA_API_KEY", "ollama")

    # if not host:
    #     raise ValueError("OLLAMA_HOST is missing in .env")
    if not model:
        raise ValueError(f"{MODEL_NAME_ENV} is missing in .env")

    return ChatOllama(
        model=model,
        base_url=base_url,
        temperature=0,
    )


LLM = {}
LLM["LLM_MODEL"] = create_llm("LLM_MODEL")
LLM["OLLAMA_LLM_MODEL_LLM"] = create_ollama_llm("OLLAMA_LLM_MODEL_LLM")
LLM["OLLAMA_LLM_MODEL_SLM"] = create_ollama_llm("OLLAMA_LLM_MODEL_SLM")
LLM["OLLAMA_LLM_MODEL_TOOL"] = create_ollama_llm("OLLAMA_LLM_MODEL_TOOL")
LLM["PERPLEXITY_LLM_MODEL"] = create_llm("PERPLEXITY_LLM_MODEL", prefix="PERPLEXITY_")

from langchain_core.messages import HumanMessage, SystemMessage

from loguru import logger

def llm_prompt(prompt: str, model_name: str = "LLM_MODEL", system_prompt: str = None) -> str:
    """Call the configured LLM with a plain prompt and return text output."""
    text = prompt.strip()
    # print("LLM Prompt: ", text)
    # return text
    if not text:
        raise ValueError("prompt cannot be empty")
    
    SystemPrompt = SystemMessage(content=system_prompt) if system_prompt else SystemMessage(content="You are a helpful assistant. ")

    logger.opt(colors=True).info(f"LLM MODEL: <b><CYAN>{model_name}</CYAN></b>")
    messages = [SystemPrompt, 
                HumanMessage(content=text)]
    result = LLM[model_name].invoke(messages)
    content = result.content
    if isinstance(content, str):
        return content
    return str(content)
