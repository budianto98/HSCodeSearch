"""Configuration helpers backed by runtime YAML and the project `.env` file."""

from .loader import (
    PROJECT_ROOT,
    get_agent_params,
    get_path_from_config,
    get_runtime_settings_dir,
    load_config_with_main,
    parse_language,
    resolve_config_path,
)

__all__ = [
    "PROJECT_ROOT",
    "get_runtime_settings_dir",
    "load_config_with_main",
    "resolve_config_path",
    "get_path_from_config",
    "parse_language",
    "get_agent_params",
    "ResolvedLLMConfig",
    "ResolvedEmbeddingConfig",
    "ResolvedSearchConfig",
    "resolve_llm_runtime_config",
    "resolve_embedding_runtime_config",
    "resolve_search_runtime_config",
    "search_provider_state",
    "NANOBOT_LLM_PROVIDERS",
    "SUPPORTED_SEARCH_PROVIDERS",
    "DEPRECATED_SEARCH_PROVIDERS",
]


def __getattr__(name: str):
    """Lazy-load provider_runtime exports to avoid eager import coupling."""
    if name in {
        "DEPRECATED_SEARCH_PROVIDERS",
        "NANOBOT_LLM_PROVIDERS",
        "SUPPORTED_SEARCH_PROVIDERS",
        "ResolvedLLMConfig",
        "ResolvedEmbeddingConfig",
        "ResolvedSearchConfig",
        "resolve_embedding_runtime_config",
        "resolve_llm_runtime_config",
        "resolve_search_runtime_config",
        "search_provider_state",
    }:
        import importlib

        provider_runtime = importlib.import_module(f"{__name__}.provider_runtime")
        return getattr(provider_runtime, name)
    raise AttributeError(f"module {__name__!r} has no attribute {name!r}")
