"""
Web Search Tool — simple interface to mcp/server/search/ providers.

All search logic lives in ``mcp/server/search/``.  This module is a
thin re-export layer so agents and other tools can import from a single,
stable path without knowing the internal package structure.

Usage::

    from tools.web_search import web_search, get_provider, list_providers

    # Simple search with the default provider (env: SEARCH_PROVIDER)
    result = web_search("HS code for Samsung Galaxy S8")

    # Explicit provider
    result = web_search("HS code for Samsung Galaxy S8", provider="serper")

    # Crawl a URL
    result = web_search("https://example.com/page", provider="webcrawler")

    # With LLM-based answer synthesis
    result = web_search("…", provider="serper", consolidation_llm_model="gpt-4o-mini")

Environment variables
---------------------
SEARCH_PROVIDER     Default provider name          (default: duckduckgo)
SEARCH_API_KEY      Fallback API key for all providers
SEARCH_MAX_RESULTS  Default result count           (default: 10)
SEARCH_PROXY        HTTP/HTTPS proxy URL
SEARXNG_BASE_URL    Required when provider=searxng

Provider-specific keys (take priority over SEARCH_API_KEY)
-----------------------------------------------------------
BRAVE_API_KEY       Brave Search
TAVILY_API_KEY      Tavily AI Search
JINA_API_KEY        Jina AI Reader
SERPER_API_KEY      Serper Google SERP
PERPLEXITY_API_KEY  Perplexity AI

Available providers
-------------------
duckduckgo   Free, no key required
webcrawler   Playwright page crawler, no key required
serper       Google SERP (SERPER_API_KEY)
tavily       AI-enhanced search (TAVILY_API_KEY)
jina         SERP + full content (JINA_API_KEY)
brave        Brave Search (BRAVE_API_KEY)
searxng      Self-hosted SearXNG (SEARXNG_BASE_URL)
perplexity   AI-powered search with LLM answers (PERPLEXITY_API_KEY)
"""

from __future__ import annotations

# ---------------------------------------------------------------------------
# Re-export everything from mcp/server/search/
# ---------------------------------------------------------------------------
from search import (  # type: ignore[import]
    PROVIDER_TEMPLATES,
    SEARCH_API_KEY_ENV,
    AnswerConsolidator,
    BaseSearchProvider,
    Citation,
    SearchResult,
    WebSearchResponse,
    get_available_providers,
    get_current_config,
    get_default_provider,
    get_provider,
    get_providers_info,
    list_providers,
    web_search,
)

__all__ = [
    # Main entry point
    "web_search",
    "get_current_config",
    # Provider management
    "get_provider",
    "get_default_provider",
    "list_providers",
    "get_available_providers",
    "get_providers_info",
    # Types
    "WebSearchResponse",
    "Citation",
    "SearchResult",
    # Consolidation
    "AnswerConsolidator",
    "PROVIDER_TEMPLATES",
    # Base class / constants
    "BaseSearchProvider",
    "SEARCH_API_KEY_ENV",
]
