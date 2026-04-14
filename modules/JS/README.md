# Web Crawler Module

A Python module using Playwright to crawl and extract text from a single webpage.

## Features

- **Single Page Crawling**: Crawls only one URL at a time
- **Text Extraction**: Extracts all visible text from the page
- **JavaScript Support**: Uses Playwright to handle JavaScript-rendered content
- **CSS Selector Support**: Extract text from specific page elements
- **Configurable Timeouts**: Set custom timeout values for page loads

## Installation

Ensure Playwright is installed:

```bash
pip install playwright
playwright install chromium
```

## Usage

### Method 1: Using Convenience Functions

```python
from modules.JS.web_crawler import crawl_page

# Crawl a page and extract all text
text = crawl_page("https://example.com")
print(text)
```

### Method 2: Using CSS Selector

```python
from modules.JS.web_crawler import crawl_page_by_selector

# Extract text from a specific element
text = crawl_page_by_selector("https://example.com", selector=".main-content")
print(text)
```

### Method 3: Using the WebCrawler Class

```python
from modules.JS.web_crawler import WebCrawler

crawler = WebCrawler(timeout=30000)  # 30 second timeout
text = crawler.crawl("https://example.com", headless=True)
print(text)
```

### Method 4: Custom CSS Selector with Class

```python
from modules.JS.web_crawler import WebCrawler

crawler = WebCrawler(timeout=45000)  # 45 second timeout
text = crawler.crawl_with_css_selector(
    "https://example.com",
    selector="article",
    headless=True
)
print(text)
```

## API Reference

### `WebCrawler` Class

#### `__init__(timeout: int = 30000)`
Initialize the crawler with optional timeout.

- **timeout**: Maximum wait time in milliseconds (default: 30000ms)

#### `crawl(url: str, headless: bool = True) -> Optional[str]`
Crawl a webpage and extract all visible text.

- **url**: URL to crawl
- **headless**: Run browser in headless mode (default: True)
- **Returns**: Extracted text or None if error occurs

#### `crawl_with_css_selector(url: str, selector: str = "body", headless: bool = True) -> Optional[str]`
Crawl a webpage and extract text from a specific CSS selector.

- **url**: URL to crawl
- **selector**: CSS selector for target element (default: "body")
- **headless**: Run browser in headless mode (default: True)
- **Returns**: Extracted text or None if error occurs

### Convenience Functions

#### `crawl_page(url: str, headless: bool = True, timeout: int = 30000) -> Optional[str]`
Quick function to crawl a page.

#### `crawl_page_by_selector(url: str, selector: str = "body", headless: bool = True, timeout: int = 30000) -> Optional[str]`
Quick function to crawl and extract from a CSS selector.

## Error Handling

The module returns `None` and prints error messages if:
- The URL is invalid
- The page fails to load within the timeout
- Network issues occur
- The selector doesn't match any elements

## Performance Notes

- **Network Idle Wait**: Uses `wait_until="networkidle"` for reliable page loading
- **Browser Reuse**: Create a single WebCrawler instance for multiple crawl operations to reuse resources
- **Memory**: Browser is closed after each crawl to prevent memory leaks
