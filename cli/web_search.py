"""Simple Typer CLI for mcp/server search.web_search()."""

from __future__ import annotations

import asyncio
import json
import sys
from pathlib import Path

# Load .env file if it exists
try:
    from dotenv import load_dotenv
    env_path = Path(__file__).resolve().parents[1] / ".env"
    load_dotenv(env_path)
except ImportError:
    # dotenv not available, skip loading .env
    pass


def _bootstrap_venv_site_packages() -> None:
    """Add project .venv site-packages to sys.path when using non-venv Python."""
    root = Path(__file__).resolve().parents[1]
    venv_lib = root / ".venv" / "lib"
    if not venv_lib.exists():
        return

    for site in sorted(venv_lib.glob("python*/site-packages")):
        site_str = str(site)
        if site_str not in sys.path:
            sys.path.insert(0, site_str)


try:
    import typer
except ModuleNotFoundError:
    # Allow `python cli/web_search_cli.py ...` even when `python` is system Python.
    _bootstrap_venv_site_packages()
    import typer


try:
    from mcp import ClientSession
    from mcp.client.stdio import StdioServerParameters, stdio_client
except ModuleNotFoundError:
    _bootstrap_venv_site_packages()
    from mcp import ClientSession
    from mcp.client.stdio import StdioServerParameters, stdio_client


def _server_parameters() -> StdioServerParameters:
    """Build stdio server launch parameters for local MCP server."""
    root = Path(__file__).resolve().parents[1]
    python_path = root / ".venv" / "bin" / "python"
    command = str(python_path if python_path.exists() else Path(sys.executable))
    return StdioServerParameters(
        command=command,
        args=[str(root / "mcp" / "server" / "server.py")],
        cwd=str(root),
    )


def _extract_text_content(tool_result: object) -> str:
    parts = []
    content = getattr(tool_result, "content", [])
    for item in content:
        text = getattr(item, "text", None)
        if text:
            parts.append(text)
    return "\n".join(parts).strip()


async def _call_tool(name: str, arguments: dict | None = None) -> object:
    params = _server_parameters()
    async with stdio_client(params) as (read_stream, write_stream):
        async with ClientSession(read_stream, write_stream) as session:
            await session.initialize()
            return await session.call_tool(name, arguments or {})


def _list_providers_via_mcp() -> list[str]:
    result = asyncio.run(_call_tool("list_search_providers"))
    if getattr(result, "isError", False):
        message = _extract_text_content(result) or "MCP tool list_search_providers failed"
        raise RuntimeError(message)

    content = getattr(result, "content", [])
    providers = [str(getattr(item, "text", "")).strip() for item in content]
    providers = [name for name in providers if name]
    if providers:
        return providers

    text_payload = _extract_text_content(result)
    if text_payload:
        try:
            parsed = json.loads(text_payload)
        except json.JSONDecodeError:
            parsed = None
        if isinstance(parsed, list):
            return [str(item) for item in parsed]

    structured = getattr(result, "structuredContent", None)
    if isinstance(structured, dict) and isinstance(structured.get("result"), list):
        return [str(item) for item in structured["result"]]
    if isinstance(structured, list):
        return [str(item) for item in structured]

    raise RuntimeError("MCP list_search_providers returned no provider list")


def _web_search_via_mcp(query: str, provider: str, max_results: int, verbose: bool) -> dict:
    result = asyncio.run(
        _call_tool(
            "web_search",
            {
                "query": query,
                "provider": provider,
                "max_results": max_results,
                "verbose": verbose,
            },
        )
    )

    if getattr(result, "isError", False):
        message = _extract_text_content(result) or "MCP tool web_search failed"
        raise RuntimeError(message)

    text_payload = _extract_text_content(result)
    if text_payload:
        parsed = json.loads(text_payload)
        if isinstance(parsed, dict):
            return parsed

    structured = getattr(result, "structuredContent", None)
    if isinstance(structured, dict):
        return structured

    raise RuntimeError("MCP web_search returned no JSON payload")


app = typer.Typer(
    add_completion=False,
    no_args_is_help=True,
    help="Run web search providers from the command line.",
)


@app.command("websearch")
def websearch_command(
    query: str | None = typer.Argument(None, help="Search query or URL (for webcrawler provider)."),
    provider: str = typer.Option(
        "duckduckgo",
        "--provider",
        "-p",
        help="Provider name. Use --list-providers to see available values.",
    ),
    max_results: int = typer.Option(10, "--max-results", "-n", min=1, help="Max number of results."),
    verbose: bool = typer.Option(False, "--verbose", "-v", help="Enable verbose search logging."),
    list_only: bool = typer.Option(False, "--list-providers", help="List providers and exit."),
) -> None:
    """Execute web_search and print JSON output."""
    if list_only:
        for name in _list_providers_via_mcp():
            typer.echo(name)
        return

    if not query:
        typer.secho("Error: QUERY is required when not using --list-providers", fg=typer.colors.RED, err=True)
        raise typer.Exit(code=1)

    try:
        result = _web_search_via_mcp(query=query, provider=provider, max_results=max_results, verbose=verbose)
    except Exception as exc:
        typer.secho(f"Error: {exc}", fg=typer.colors.RED, err=True)
        raise typer.Exit(code=1) from exc

    typer.echo(json.dumps(result, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    app()
