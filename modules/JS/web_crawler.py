"""
Web crawler module using Playwright to extract text from a single webpage.

This module provides functionality to:
- Navigate to a given URL using Playwright
- Extract all visible text from the page
- Handle JavaScript-rendered content
"""

from playwright.sync_api import sync_playwright
from typing import Optional


class WebCrawler:
    """A simple web crawler that extracts text from a single webpage using Playwright."""

    def __init__(self, timeout: int = 30000):
        """
        Initialize the WebCrawler.

        Args:
            timeout: Maximum time to wait for page load in milliseconds (default: 30s)
        """
        self.timeout = timeout

    def crawl(self, url: str, headless: bool = True) -> Optional[str]:
        """
        Crawl a single webpage and extract all visible text.

        Args:
            url: The URL to crawl
            headless: Whether to run browser in headless mode (default: True)

        Returns:
            Extracted text from the webpage, or None if crawling fails
        """
        try:
            with sync_playwright() as p:
                browser = p.chromium.launch(headless=headless)
                page = browser.new_page()

                # Navigate to URL
                page.goto(url, wait_until="networkidle", timeout=self.timeout)

                # Extract all text content
                text_content = page.evaluate(
                    """
                    () => {
                        return document.body.innerText;
                    }
                    """
                )

                browser.close()
                return text_content

        except Exception as e:
            print(f"Error crawling URL '{url}': {str(e)}")
            return None

    def crawl_with_css_selector(
        self, url: str, selector: str = "body", headless: bool = True
    ) -> Optional[str]:
        """
        Crawl a webpage and extract text from a specific CSS selector.

        Args:
            url: The URL to crawl
            selector: CSS selector for the element to extract text from (default: "body")
            headless: Whether to run browser in headless mode (default: True)

        Returns:
            Extracted text from the selected element, or None if crawling fails
        """
        try:
            with sync_playwright() as p:
                browser = p.chromium.launch(headless=headless)
                page = browser.new_page()

                # Navigate to URL
                page.goto(url, wait_until="networkidle", timeout=self.timeout)

                # Extract text from specific selector
                text_content = page.evaluate(
                    f"""
                    () => {{
                        const element = document.querySelector('{selector}');
                        return element ? element.innerText : null;
                    }}
                    """
                )

                browser.close()
                return text_content

        except Exception as e:
            print(f"Error crawling URL '{url}' with selector '{selector}': {str(e)}")
            return None


def crawl_page(url: str, headless: bool = True, timeout: int = 30000) -> Optional[str]:
    """
    Convenience function to crawl a single page and extract text.

    Args:
        url: The URL to crawl
        headless: Whether to run browser in headless mode (default: True)
        timeout: Maximum time to wait for page load in milliseconds (default: 30s)

    Returns:
        Extracted text from the webpage, or None if crawling fails

    Example:
        text = crawl_page("https://example.com")
        print(text)
    """
    crawler = WebCrawler(timeout=timeout)
    return crawler.crawl(url, headless=headless)


