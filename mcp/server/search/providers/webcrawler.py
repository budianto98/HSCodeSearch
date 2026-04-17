"""WebCrawler Search Provider

Wraps modules.JS.web_crawler (Playwright-based) so a single URL can be
"searched" (crawled) through the unified search-provider interface.

No API key is required; Playwright must be installed with its browsers:
    uv pip install playwright && playwright install chromium
"""

from __future__ import annotations

import sys
from datetime import datetime
from pathlib import Path
from typing import Any, Optional

from ..base import BaseSearchProvider
from ..types import Citation, SearchResult, WebSearchResponse
from . import register_provider


def _get_crawl_page():
    """Lazily import crawl_page, adding the project root to sys.path if needed."""
    try:
        from modules.JS.web_crawler import crawl_page  # type: ignore[import]

        return crawl_page
    except ImportError:
        # Locate project root (four levels up from this file: providers/search/server/mcp/<root>)
        project_root = str(Path(__file__).resolve().parents[4])
        if project_root not in sys.path:
            sys.path.insert(0, project_root)
        try:
            from modules.JS.web_crawler import crawl_page  # type: ignore[import]

            return crawl_page
        except ImportError as exc:
            raise ImportError(
                "modules.JS.web_crawler could not be imported. "
                "Make sure the project root is accessible and Playwright is installed "
                "(`playwright install chromium`)."
            ) from exc


@register_provider("webcrawler")
class WebCrawlerProvider(BaseSearchProvider):
    """Playwright-based web-page crawler exposed as a search provider.

    The ``query`` argument to :meth:`search` is treated as the URL to crawl.
    A CSS selector can be supplied via ``selector`` to narrow the extracted text.
    """

    display_name = "WebCrawler"
    description = "Crawl a URL and extract visible text (Playwright)"
    supports_answer = False
    requires_api_key = False
    BASE_URL = ""  # No fixed endpoint; URL comes from the query

    def search(
        self,
        query: str,  # Treated as a URL for this provider
        selector: Optional[str] = None,
        headless: bool = True,
        timeout: int = 30_000,
        **kwargs: Any,
    ) -> WebSearchResponse:
        """
        Crawl *query* (a URL) and return its visible text wrapped in a
        :class:`WebSearchResponse`.

        Args:
            query: URL of the page to crawl.
            selector: Optional CSS selector to narrow extraction.
            headless: Run browser in headless mode (default True).
            timeout: Page-load timeout in milliseconds (default 30 000).
            **kwargs: Ignored; kept for interface compatibility.

        Returns:
            WebSearchResponse: Crawled text in ``answer`` and one
            :class:`SearchResult` / :class:`Citation` entry.
        """
        url = query
        self.logger.debug(f"WebCrawlerProvider crawling url={url!r}")

        crawl_page = _get_crawl_page()

        if selector:
            # Use the selector-aware variant
            from modules.JS.web_crawler import WebCrawler  # type: ignore[import]

            crawler = WebCrawler(timeout=timeout)
            text = crawler.crawl_with_css_selector(url, selector=selector, headless=headless)
        else:
            text = crawl_page(url, headless=headless, timeout=timeout)

        content = text or ""
        snippet = content[:300].replace("\n", " ").strip()

        search_result = SearchResult(
            title=url,
            url=url,
            snippet=snippet,
            content=content,
            source="webcrawler",
        )
        citation = Citation(
            id=1,
            reference="[1]",
            url=url,
            title=url,
            snippet=snippet,
            content=content,
            source="webcrawler",
        )

        return WebSearchResponse(
            query=query,
            answer=content,
            provider="webcrawler",
            timestamp=datetime.now().isoformat(),
            model="playwright-chromium",
            citations=[citation],
            search_results=[search_result],
            usage={},
            metadata={
                "finish_reason": "stop",
                "selector": selector,
                "crawl_success": bool(text),
            },
        )
