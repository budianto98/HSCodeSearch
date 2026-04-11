import os

import httpx
from dotenv import load_dotenv
from mcp.server.fastmcp import FastMCP

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
    api_key = os.getenv("PERPLEXITY_API_KEY")
    if not api_key:
        return (
            "Missing PERPLEXITY_API_KEY. Add it to a .env file in the project root "
            "and restart the server."
        )

    if not product_description.strip():
        return "product_description cannot be empty."

    system_prompt = (
        "You are an international trade classification assistant. "
        "Given a product description, return possible HS codes with concise reasons "
        "why each code may match. Include uncertainty when applicable. "
        "Return plain markdown with this format:\n"
        "1) HS Code: <code>\n"
        "   Description: <official-like description>\n"
        "   Why it matches: <brief reason>\n"
        "   Confidence: <low|medium|high>\n"
        "Provide 3-7 candidate codes."
    )

    payload = {
        "model": "sonar",
        "messages": [
            {"role": "system", "content": system_prompt},
            {
                "role": "user",
                "content": f"Product Description: {product_description.strip()}",
            },
        ],
        "temperature": 0.2,
    }

    try:
        with httpx.Client(timeout=45.0) as client:
            response = client.post(
                "https://api.perplexity.ai/chat/completions",
                headers={
                    "Authorization": f"Bearer {api_key}",
                    "Content-Type": "application/json",
                },
                json=payload,
            )
            response.raise_for_status()
    except httpx.HTTPStatusError as exc:
        return f"Perplexity API request failed: {exc.response.status_code} {exc.response.text}"
    except httpx.HTTPError as exc:
        return f"Perplexity connection error: {exc}"

    data = response.json()
    choices = data.get("choices", [])
    if not choices:
        return "Perplexity returned no results."

    content = choices[0].get("message", {}).get("content", "").strip()
    if not content:
        return "Perplexity returned an empty response."

    return content


if __name__ == "__main__":
    print("HSCodeSearch MCP server is ready.", flush=True)
    mcp.run()
