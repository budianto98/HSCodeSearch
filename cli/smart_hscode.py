"""CLI for SmartHSCodeAgent — generate HS code candidates from a product description."""

from __future__ import annotations

import asyncio
import json
import sys
from pathlib import Path

# ---------------------------------------------------------------------------
# .env loading — must happen before any DeepHSCode import so env vars are set
# ---------------------------------------------------------------------------
try:
    from dotenv import load_dotenv
    load_dotenv(Path(__file__).resolve().parents[1] / ".env", override=True)
except ImportError:
    pass


def _bootstrap_venv_site_packages() -> None:
    root = Path(__file__).resolve().parents[1]
    # Ensure project root is importable (for DeepHSCode, modules, etc.)
    root_str = str(root)
    if root_str not in sys.path:
        sys.path.insert(0, root_str)
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
    _bootstrap_venv_site_packages()
    import typer

try:
    import httpx
except ModuleNotFoundError:
    _bootstrap_venv_site_packages()
    import httpx

try:
    from DeepHSCode.agents.SmartHSCode.hscode_pipeline import SmartHSCodeAgent
    from DeepHSCode.services.llm.config import get_llm_config_from_env
except ModuleNotFoundError:
    _bootstrap_venv_site_packages()
    from DeepHSCode.agents.SmartHSCode.hscode_pipeline import SmartHSCodeAgent
    from DeepHSCode.services.llm.config import get_llm_config_from_env


# ---------------------------------------------------------------------------
# OpenAI-compatible llm_complete callable (uses httpx, no openai package needed)
# ---------------------------------------------------------------------------

async def _openai_complete(
    *,
    prompt: str,
    system_prompt: str,
    model: str,
    api_key: str,
    base_url: str,
    temperature: float,
    max_tokens: int,
) -> str:
    url = base_url.rstrip("/") + "/chat/completions"
    headers = {"Content-Type": "application/json"}
    if api_key:
        headers["Authorization"] = f"Bearer {api_key}"

    payload = {
        "model": model,
        "temperature": temperature,
        "max_tokens": max_tokens,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": prompt},
        ],
    }

    async with httpx.AsyncClient(timeout=120) as client:
        response = await client.post(url, headers=headers, json=payload)
        response.raise_for_status()
        data = response.json()

    return data["choices"][0]["message"]["content"]


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

app = typer.Typer(
    name="smart-hscode",
    help="Generate HS code candidates for a product description using SmartHSCodeAgent.",
    no_args_is_help=True,
)


@app.command()
def generate(
    description: str = typer.Argument(
        ...,
        help="Product description to classify (wrap in quotes if it contains spaces).",
    ),
    language: str = typer.Option(
        "en",
        "--language", "-l",
        help="Prompt language: 'en' or 'zh'.",
    ),
    temperature: float = typer.Option(
        0.2,
        "--temperature", "-t",
        help="LLM sampling temperature (0–1).",
        min=0.0,
        max=1.0,
    ),
    max_tokens: int = typer.Option(
        1000,
        "--max-tokens", "-m",
        help="Maximum tokens in the LLM response.",
    ),
    stream: bool = typer.Option(
        False,
        "--stream",
        help="Stream pipeline events (Observe/Plan/Act/Learn) before final output.",
    ),
) -> None:
    """Generate HS code candidates for DESCRIPTION."""
    try:
        config = get_llm_config_from_env()
    except Exception as exc:
        typer.echo(f"Configuration error: {exc}", err=True)
        raise typer.Exit(code=1)

    agent = SmartHSCodeAgent(
        api_key=config.api_key,
        base_url=config.base_url,
        model=config.model,
        language=language,
        llm_complete=_openai_complete,
    )

    typer.echo(f"Model : {config.model}")
    typer.echo(f"Host  : {config.base_url}")
    typer.echo(f"Input : {description}\n")

    try:
        if stream:
            async def _run_stream() -> tuple[str | None, dict | None]:
                final_output: dict | None = None
                summary_markdown: str | None = None
                async for event in agent.stream_finding_from_proddesc(
                    product_description=description,
                    language=language,
                    temperature=temperature,
                    max_tokens=max_tokens,
                ):
                    event_name = event.get("event", "unknown")
                    typer.echo(f"[event] {event_name}")
                    
                    if event_name == "summary" and isinstance(event.get("data"), dict):
                        summary_markdown = event["data"].get("markdown")
                    elif event_name == "final" and isinstance(event.get("data"), dict):
                        final_output = event["data"]

                if final_output is None:
                    raise RuntimeError("No final event received from stream")
                return summary_markdown, final_output

            summary_md, final_json = asyncio.run(_run_stream())
        else:
            result = asyncio.run(
                agent.finding_from_proddesc(
                    product_description=description,
                    language=language,
                    temperature=temperature,
                    max_tokens=max_tokens,
                )
            )
            summary_md = None
            final_json = json.loads(result) if result else None
    except Exception as exc:
        typer.echo(f"Error: {exc}", err=True)
        raise typer.Exit(code=1)

    # Print final HS Code Classification Report
    typer.echo("\n" + "=" * 80)
    typer.secho("📋 HS CODE CLASSIFICATION REPORT", bold=True, fg=typer.colors.BLUE)
    typer.echo("=" * 80 + "\n")
    
    if summary_md:
        typer.echo(summary_md)
    else:
        typer.echo("(No summary available)")


@app.command()
def interactive(
    language: str = typer.Option("en", "--language", "-l", help="Prompt language: 'en' or 'zh'."),
    temperature: float = typer.Option(0.2, "--temperature", "-t", min=0.0, max=1.0),
    max_tokens: int = typer.Option(1000, "--max-tokens", "-m"),
) -> None:
    """Enter an interactive loop — type a product description at each prompt."""
    try:
        config = get_llm_config_from_env()
    except Exception as exc:
        typer.echo(f"Configuration error: {exc}", err=True)
        raise typer.Exit(code=1)

    agent = SmartHSCodeAgent(
        api_key=config.api_key,
        base_url=config.base_url,
        model=config.model,
        language=language,
        llm_complete=_openai_complete,
    )

    typer.echo(f"SmartHSCode interactive mode  (model: {config.model})")
    typer.echo("Type a product description and press Enter. Ctrl-C or empty line to quit.\n")

    while True:
        try:
            description = typer.prompt("Description")
        except (KeyboardInterrupt, EOFError):
            typer.echo("\nBye.")
            break

        if not description.strip():
            typer.echo("Bye.")
            break

        try:
            result = asyncio.run(
                agent.finding_from_proddesc(
                    product_description=description,
                    language=language,
                    temperature=temperature,
                    max_tokens=max_tokens,
                )
            )
            typer.echo(f"\n{result}\n")
        except Exception as exc:
            typer.echo(f"Error: {exc}\n", err=True)


if __name__ == "__main__":
    app()
