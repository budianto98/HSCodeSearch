from __future__ import annotations
from dataclasses import dataclass, replace
import os
from typing import TypedDict

class LLMConfigError(RuntimeError):
    pass

class LLMConfigUpdate(TypedDict, total=False):
    model: str
    api_key: str
    base_url: str | None
    effective_url: str | None
    binding: str
    api_version: str | None
    extra_headers: dict[str, str] | None
    reasoning_effort: str | None
    max_tokens: int
    temperature: float

def _strip(value: str | None) -> str | None:
    return value.strip().strip("\"'") if value is not None else None

@dataclass(frozen=True, slots=True)
class LLMConfig:
    model: str
    api_key: str
    base_url: str | None = None
    effective_url: str | None = None
    binding: str = "openai"
    api_version: str | None = None
    extra_headers: dict[str, str] | None = None
    reasoning_effort: str | None = None
    max_tokens: int = 4096
    temperature: float = 0.7

    def __post_init__(self) -> None:
        # dataclasses with frozen=True need object.__setattr__
        if self.effective_url is None:
            object.__setattr__(self, "effective_url", self.base_url)

    def model_copy(self, update: LLMConfigUpdate | None = None) -> "LLMConfig":
        return replace(self, **(update or {}))

_CACHE: LLMConfig | None = None

def get_llm_config_from_env(*, use_cache: bool = True) -> LLMConfig:
    global _CACHE
    if use_cache and _CACHE is not None:
        return _CACHE

    binding     = _strip(os.getenv("LLM_BINDING")) or "openai"
    model       = _strip(os.getenv("LLM_MODEL"))
    api_key     = _strip(os.getenv("LLM_API_KEY")) or ""
    base_url    = _strip(os.getenv("LLM_HOST"))
    api_version = _strip(os.getenv("LLM_API_VERSION"))

    if not model:
        raise LLMConfigError("LLM_MODEL not set")
    if not base_url:
        raise LLMConfigError("LLM_HOST not set")

    _CACHE = LLMConfig(
        binding=binding,
        model=model,
        api_key=api_key,
        base_url=base_url,
        api_version=api_version,
    )
    return _CACHE

def clear_llm_config_cache() -> None:
    global _CACHE
    _CACHE = None