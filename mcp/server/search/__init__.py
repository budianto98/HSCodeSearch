"""Web Search Service — provider-agnostic search with optional answer consolidation."""

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
import json
import logging
import os
from pathlib import Path
from typing import Any

from .base import SEARCH_API_KEY_ENV, BaseSearchProvider
from .consolidation import PROVIDER_TEMPLATES, AnswerConsolidator
from .providers import (
    _DEPRECATED_UNSUPPORTED,
    get_available_providers,
    get_default_provider,
    get_provider,
    get_providers_info,
    list_providers,
)
from .types import Citation, SearchResult, WebSearchResponse

_logger = logging.getLogger("Search")

_PROVIDER_KEY_ENV = {
    "brave": "BRAVE_API_KEY",
    "tavily": "TAVILY_API_KEY",
    "jina": "JINA_API_KEY",
    "perplexity": "PERPLEXITY_API_KEY",
    "serper": "SERPER_API_KEY",
}


# ---------------------------------------------------------------------------
# Runtime configuration (env-driven; no external config files required)
# ---------------------------------------------------------------------------

@dataclass
class _RuntimeConfig:
    provider: str
    api_key: str
    base_url: str
    max_results: int
    proxy: str


def _resolve_runtime_config() -> _RuntimeConfig:
    return _RuntimeConfig(
        provider=os.getenv("SEARCH_PROVIDER", "duckduckgo").lower(),
        api_key=os.getenv("SEARCH_API_KEY", ""),
        base_url=os.getenv("SEARXNG_BASE_URL", ""),
        max_results=int(os.getenv("SEARCH_MAX_RESULTS") or "10"),
        proxy=os.getenv("SEARCH_PROXY", ""),
    )


def _save_results(result: dict[str, Any], output_dir: str, provider: str) -> str:
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"search_{provider}_{timestamp}.json"
    file_path = output_path / filename
    with open(file_path, "w", encoding="utf-8") as handle:
        json.dump(result, handle, indent=2, ensure_ascii=False)
    return str(file_path)


def _resolve_provider_key(provider_name: str, default_api_key: str) -> str:
    if default_api_key:
        return default_api_key
    env_key = _PROVIDER_KEY_ENV.get(provider_name)
    if not env_key:
        return ""
    return os.getenv(env_key, "").strip()


def _assert_provider_supported(provider_name: str) -> None:
    if provider_name in _DEPRECATED_UNSUPPORTED:
        raise ValueError(
            f"Search provider `{provider_name}` is deprecated/unsupported. "
            "Please switch to brave, tavily, jina, searxng, duckduckgo, perplexity, or serper."
        )
    available = list_providers()
    if provider_name not in available:
        raise ValueError(
            f"Unknown search provider `{provider_name}`. "
            f"Supported: {', '.join(sorted(available))}"
        )


def web_search(
    query: str,
    output_dir: str | None = None,
    verbose: bool = False,
    provider: str | None = None,
    consolidation_custom_template: str | None = None,
    consolidation_llm_model: str | None = None,
    **provider_kwargs: Any,
) -> dict[str, Any]:
    """Execute a web search and return a standardised result dict.

    Consolidation is automatic for providers that return raw SERP results
    (``supports_answer=False``).  Pass ``consolidation_llm_model`` to
    upgrade from template formatting to LLM synthesis.

    Args:
        query: Search query string.
        output_dir: Optional directory to persist the JSON result.
        verbose: Log query and answer summary.
        provider: Override the active provider (env: SEARCH_PROVIDER).
        consolidation_custom_template: Custom Jinja2 template for consolidation.
        consolidation_llm_model: LLM model name for LLM-based consolidation.
        **provider_kwargs: Extra options forwarded to the provider.

    Returns:
        dict with keys: query, answer, provider, citations, search_results, timestamp, …
    """
    resolved = _resolve_runtime_config()
    provider_name = (provider or resolved.provider).strip().lower()
    _assert_provider_supported(provider_name)

    if provider_name in {"brave", "tavily", "jina"}:
        api_key = _resolve_provider_key(provider_name, resolved.api_key)
        if not api_key:
            _logger.warning("%s missing API key, falling back to duckduckgo.", provider_name)
            provider_name = "duckduckgo"
        else:
            provider_kwargs.setdefault("api_key", api_key)
    elif provider_name in {"perplexity", "serper"}:
        api_key = _resolve_provider_key(provider_name, resolved.api_key)
        if not api_key:
            env_hint = _PROVIDER_KEY_ENV.get(provider_name, "SEARCH_API_KEY")
            raise ValueError(
                f"{provider_name} requires an API key. "
                f"Set {env_hint} or SEARCH_API_KEY in your environment."
            )
        provider_kwargs.setdefault("api_key", api_key)
    elif provider_name == "searxng":
        base_url = provider_kwargs.get("base_url") or resolved.base_url
        if not base_url:
            _logger.warning("searxng missing base_url, falling back to duckduckgo.")
            provider_name = "duckduckgo"
        else:
            provider_kwargs.setdefault("base_url", base_url)

    provider_kwargs.setdefault("max_results", resolved.max_results)
    if resolved.proxy and "proxy" not in provider_kwargs:
        provider_kwargs["proxy"] = resolved.proxy

    search_provider = get_provider(provider_name, **provider_kwargs)
    _logger.info("[%s] Searching: %s", search_provider.name, query[:60])

    try:
        response = search_provider.search(query, **provider_kwargs)
    except Exception as exc:
        _logger.error("[%s] Search failed: %s", search_provider.name, exc)
        raise RuntimeError(f"{search_provider.name} search failed: {exc}") from exc

    # Auto-consolidate for providers that don't generate their own answers.
    if not search_provider.supports_answer:
        use_llm = bool(consolidation_llm_model)
        llm_config: dict[str, Any] = {"model": consolidation_llm_model} if consolidation_llm_model else {}
        consolidator = AnswerConsolidator(
            use_llm=use_llm,
            custom_template=consolidation_custom_template,
            llm_config=llm_config,
        )
        response = consolidator.consolidate(response)

    result = response.to_dict()

    if output_dir:
        result["result_file"] = _save_results(result, output_dir, provider_name)

    if verbose:
        answer = result.get("answer", "")
        _logger.info("Query: %s", query)
        if answer:
            _logger.info("Answer: %s", answer[:200] + "..." if len(answer) > 200 else answer)
        _logger.info("Citations: %d", len(result.get("citations", [])))

    return result


def get_current_config() -> dict[str, Any]:
    """Return effective web search configuration (useful for debugging/CLI)."""
    resolved = _resolve_runtime_config()
    return {
        "provider": resolved.provider,
        "api_key_set": bool(resolved.api_key),
        "base_url": resolved.base_url,
        "max_results": resolved.max_results,
        "proxy": resolved.proxy,
        "providers": get_providers_info(),
        "available_providers": get_available_providers(),
        "template_providers": list(PROVIDER_TEMPLATES.keys()),
    }


SearchProvider = BaseSearchProvider

__all__ = [
    "web_search",
    "get_current_config",
    "get_provider",
    "list_providers",
    "get_available_providers",
    "get_default_provider",
    "get_providers_info",
    "WebSearchResponse",
    "Citation",
    "SearchResult",
    "AnswerConsolidator",
    "PROVIDER_TEMPLATES",
    "BaseSearchProvider",
    "SearchProvider",
    "SEARCH_API_KEY_ENV",
]
