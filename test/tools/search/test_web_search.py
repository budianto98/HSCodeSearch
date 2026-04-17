"""Unified tests for web_search() across all supported providers.

All network I/O is monkeypatched by replacing ``search.get_provider`` (the
registry lookup used internally by web_search) with a mock that returns a
pre-built WebSearchResponse.  No real HTTP calls are made.

Providers covered:
  duckduckgo, serper, tavily, perplexity, jina, brave, searxng, webcrawler
"""

from __future__ import annotations

import sys
from pathlib import Path
from unittest.mock import MagicMock, patch

import pytest

# -- Path setup (mirrors conftest.py) -----------------------------------------
SEARCH_ROOT = Path(__file__).resolve().parents[3] / "mcp" / "server"
if str(SEARCH_ROOT) not in sys.path:
    sys.path.insert(0, str(SEARCH_ROOT))

from search.types import Citation, SearchResult, WebSearchResponse  # noqa: E402
from tools.web_search import web_search  # noqa: E402

# -- Shared helpers -----------------------------------------------------------

QUERY = "HS code Samsung Galaxy S8"


def _fake_response(provider: str, answer: str = "") -> WebSearchResponse:
    """Build a minimal WebSearchResponse for a given provider."""
    return WebSearchResponse(
        query=QUERY,
        answer=answer,
        provider=provider,
        model=f"{provider}-model",
        citations=[Citation(id=1, reference="[1]", url="https://example.com", title="T", snippet="S")],
        search_results=[SearchResult(title="T", url="https://example.com", snippet="S")],
        usage={},
        metadata={"finish_reason": "stop"},
    )


def _mock_provider(provider_name: str, fake: WebSearchResponse, supports_answer: bool = True) -> MagicMock:
    """Return a mock provider instance whose .search() returns *fake*."""
    m = MagicMock()
    m.search.return_value = fake
    m.supports_answer = supports_answer
    m.name = provider_name
    return m


# web_search() calls get_provider() as a name in search.__init__'s globals.
# Patching search.get_provider replaces that name for the duration of the test.
PATCH_TARGET = "search.get_provider"


# =============================================================================
# 1. DuckDuckGo — no API key required
# =============================================================================

def test_web_search_duckduckgo():
    fake = _fake_response("duckduckgo")
    mock = _mock_provider("duckduckgo", fake)

    with patch(PATCH_TARGET, return_value=mock):
        result = web_search(QUERY, provider="duckduckgo")

    assert result["provider"] == "duckduckgo"
    assert result["query"] == QUERY
    assert len(result["search_results"]) == 1


# =============================================================================
# 2. Serper — Google SERP
# =============================================================================

def test_web_search_serper(monkeypatch):
    monkeypatch.setenv("SERPER_API_KEY", "dummy-serper-key")
    fake = _fake_response("serper")
    mock = _mock_provider("serper", fake)

    with patch(PATCH_TARGET, return_value=mock):
        result = web_search(QUERY, provider="serper")

    assert result["provider"] == "serper"
    assert len(result["citations"]) == 1
    assert len(result["search_results"]) == 1


# =============================================================================
# 3. Tavily AI Search
# =============================================================================

def test_web_search_tavily(monkeypatch):
    monkeypatch.setenv("TAVILY_API_KEY", "dummy-tavily-key")
    fake = _fake_response("tavily", answer="HS code is 851713.")
    mock = _mock_provider("tavily", fake)

    with patch(PATCH_TARGET, return_value=mock):
        result = web_search(QUERY, provider="tavily")

    assert result["provider"] == "tavily"
    assert result["answer"] == "HS code is 851713."


# =============================================================================
# 4. Perplexity AI
# =============================================================================

def test_web_search_perplexity(monkeypatch):
    monkeypatch.setenv("PERPLEXITY_API_KEY", "dummy-pplx-key")
    fake = _fake_response("perplexity", answer="The 6-digit HS code is 851713.")
    mock = _mock_provider("perplexity", fake)

    with patch(PATCH_TARGET, return_value=mock):
        result = web_search(QUERY, provider="perplexity")

    assert result["provider"] == "perplexity"
    assert "851713" in result["answer"]


# =============================================================================
# 5. Jina AI Reader
# =============================================================================

def test_web_search_jina(monkeypatch):
    monkeypatch.setenv("JINA_API_KEY", "dummy-jina-key")
    fake = _fake_response("jina")
    mock = _mock_provider("jina", fake)

    with patch(PATCH_TARGET, return_value=mock):
        result = web_search(QUERY, provider="jina")

    assert result["provider"] == "jina"
    assert len(result["search_results"]) == 1


# =============================================================================
# 6. Brave Search
# =============================================================================

def test_web_search_brave(monkeypatch):
    monkeypatch.setenv("BRAVE_API_KEY", "dummy-brave-key")
    fake = _fake_response("brave")
    mock = _mock_provider("brave", fake)

    with patch(PATCH_TARGET, return_value=mock):
        result = web_search(QUERY, provider="brave")

    assert result["provider"] == "brave"
    assert len(result["search_results"]) == 1


# =============================================================================
# 7. SearXNG (self-hosted)
# =============================================================================

def test_web_search_searxng(monkeypatch):
    monkeypatch.setenv("SEARXNG_BASE_URL", "http://localhost:8080")
    fake = _fake_response("searxng")
    mock = _mock_provider("searxng", fake)

    with patch(PATCH_TARGET, return_value=mock):
        result = web_search(QUERY, provider="searxng")

    assert result["provider"] == "searxng"
    assert len(result["search_results"]) == 1


# =============================================================================
# 8. WebCrawler (Playwright)
# =============================================================================

def test_web_search_webcrawler():
    url = "https://www.i5a6.com/hscode/key/%E7%83%98%E5%B9%B2%E6%9C%BA"
    page_text = "烘干机 HS编码: 84193990.20"
    fake = WebSearchResponse(
        query=url,
        answer=page_text,
        provider="webcrawler",
        model="playwright-chromium",
        citations=[Citation(id=1, reference="[1]", url=url, title=url, snippet=page_text[:120])],
        search_results=[SearchResult(title=url, url=url, snippet=page_text[:120], content=page_text)],
        usage={},
        metadata={"finish_reason": "stop", "crawl_success": True, "selector": None},
    )
    mock = _mock_provider("webcrawler", fake)

    with patch(PATCH_TARGET, return_value=mock):
        result = web_search(url, provider="webcrawler")

    assert result["provider"] == "webcrawler"
    assert "84193990" in result["answer"]
    assert len(result["search_results"]) == 1


# =============================================================================
# Edge cases
# =============================================================================

def test_web_search_unknown_provider():
    """Requesting an unsupported provider raises ValueError."""
    with pytest.raises(ValueError, match="Unknown search provider"):
        web_search(QUERY, provider="nonexistent")


def test_web_search_deprecated_provider():
    """Requesting a deprecated provider (exa/baidu/openrouter) raises ValueError."""
    with pytest.raises(ValueError, match="deprecated"):
        web_search(QUERY, provider="exa")


def test_web_search_result_shape(monkeypatch):
    """Result dict always contains the required top-level keys."""
    monkeypatch.setenv("SERPER_API_KEY", "dummy")
    fake = _fake_response("serper")
    mock = _mock_provider("serper", fake)

    with patch(PATCH_TARGET, return_value=mock):
        result = web_search(QUERY, provider="serper")

    for key in ("query", "answer", "provider", "timestamp", "citations", "search_results"):
        assert key in result, f"missing key: {key}"
    assert isinstance(result["citations"], list)
    assert isinstance(result["search_results"], list)
