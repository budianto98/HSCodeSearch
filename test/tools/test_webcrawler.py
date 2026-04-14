"""Pytest tests for the Playwright web crawler module."""

import pytest
from modules.JS.web_crawler import WebCrawler, crawl_page

EXAMPLE_URL = "https://example.com"
HS_CODE_URL = "https://www.i5a6.com/hscode/key/烘干机"


def test_crawl_example_com():
    """crawl_page() should return non-empty text from example.com."""
    text = crawl_page(EXAMPLE_URL)
    assert text is not None, "Expected text but got None"
    assert len(text) > 0, "Expected non-empty text"
    print(f"\nExtracted {len(text)} chars: {text[:200].replace(chr(10), ' ')}")


def test_crawl_hs_code_url():
    """crawl_page() should return non-empty text from i5a6 HS code page."""
    text = crawl_page(HS_CODE_URL)
    assert text is not None, f"Expected text from {HS_CODE_URL} but got None"
    assert len(text) > 0, "Expected non-empty text"
    print(f"\nExtracted {len(text)} chars: {text[:200].replace(chr(10), ' ')}")


def test_webcrawler_class_crawl():
    """WebCrawler.crawl() should return non-empty text."""
    crawler = WebCrawler(timeout=45000)
    text = crawler.crawl(EXAMPLE_URL)
    assert text is not None
    assert len(text) > 0
    print(f"\nExtracted {len(text)} chars")

