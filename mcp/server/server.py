from dotenv import load_dotenv
from mcp.server.fastmcp import FastMCP

from tools.PPLX_SearchAgent import PPLX_SearchAgent

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


if __name__ == "__main__":
    print("HSCodeSearch MCP server is ready.", flush=True)
    mcp.run()
