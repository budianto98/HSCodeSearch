import sys

from dotenv import load_dotenv
from mcp.server.fastmcp import FastMCP

from tools.PPLX_SearchAgent import PPLX_SearchAgent
from tools.web_search import list_providers, web_search

load_dotenv()

mcp = FastMCP("HSCodeSearch")


@mcp.tool()
def ping() -> str:
    """Simple health check tool."""
    return "pong"


@mcp.tool()
def search_hs_code(query: str) -> str:
    """Placeholder tool for future HS code lookup logic."""
    return f"HS code search is not implemented yet. Query received: {query}"


@mcp.tool(name="PPLX_HSCodeAgent")
def PPLX_HSCodeAgent(product_description: str) -> str:
    """Query Perplexity for possible HS codes and matching rationale."""
    return PPLX_SearchAgent().SearchHSCode(product_description)


@mcp.tool(name="web_search")
def web_search_tool(
    query: str,
    provider: str = "duckduckgo",
    max_results: int = 10,
    verbose: bool = False,
) -> dict:
    """Run a web search for the given query using the configured provider."""
    return web_search(
        query=query,
        provider=provider,
        max_results=max_results,
        verbose=verbose,
    )


@mcp.tool(name="list_search_providers")
def list_search_providers_tool() -> list[str]:
    """List available web search providers."""
    return list_providers()


if __name__ == "__main__":
    print("HSCodeSearch MCP server is ready.", file=sys.stderr, flush=True)
    mcp.run()
