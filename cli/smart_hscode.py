"""CLI for SmartHSCodeAgent — classify a product description into an HS6 code."""

from __future__ import annotations

import asyncio
import json
import sys
from pathlib import Path

from loguru import logger

# ---------------------------------------------------------------------------
# .env loading — must happen before any DeepHSCode import so env vars are set
# ---------------------------------------------------------------------------
try:
    env_path = Path(__file__).resolve().parents[1] / ".env"
    from dotenv import load_dotenv
    if load_dotenv(env_path, override=True):
        logger.debug(".env loaded from {}", env_path)
    else:
        logger.warning(".env not found or empty at {}", env_path)
except ImportError:
    logger.warning("python-dotenv not installed — skipping .env loading")


def _bootstrap_venv_site_packages() -> None:
    """Add the project venv to sys.path when running outside of it."""
    root = Path(__file__).resolve().parents[1]
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
    from DeepHSCode.agents.SmartHSCode.agent import SmartHSCodeAgent
    from DeepHSCode.services.llm.config import get_llm_config_from_env
except ModuleNotFoundError:
    _bootstrap_venv_site_packages()
    from DeepHSCode.agents.SmartHSCode.agent import SmartHSCodeAgent
    from DeepHSCode.services.llm.config import get_llm_config_from_env


# ---------------------------------------------------------------------------
# OpenAI-compatible llm_complete callable (httpx, no openai package required)
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
    logger.debug("LLM call: model={}, base_url={}, temperature={}, max_tokens={}",
                 model, base_url, temperature, max_tokens)
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

    try:
        async with httpx.AsyncClient(timeout=120) as client:
            response = await client.post(url, headers=headers, json=payload)
            response.raise_for_status()
            data = response.json()
    except httpx.HTTPStatusError as exc:
        body = (exc.response.text or "")[:800]
        raise RuntimeError(
            f"LLM returned HTTP {exc.response.status_code} for {url}\n{body}"
        ) from exc
    except httpx.RequestError as exc:
        # ConnectError: "All connection attempts failed" — host unreachable, wrong IP, or VPN off
        raise RuntimeError(
            f"Cannot connect to LLM at {url}\n"
            f"  ({type(exc).__name__}: {exc})\n"
            "  Check LLM_HOST in .env, that the API server is running, and that this machine "
            "can reach the host (VPN / same LAN if using a private IP like 10.x)."
        ) from exc

    return data["choices"][0]["message"]["content"]


# ---------------------------------------------------------------------------
# Output helpers
# ---------------------------------------------------------------------------

_DIVIDER = "=" * 80


def _print_report(summary_md: str | None, final_json: dict | None) -> None:
    """Print the classification report to stdout."""
    typer.echo(f"\n{_DIVIDER}")
    typer.secho("  HS CODE CLASSIFICATION REPORT", bold=True, fg=typer.colors.CYAN)
    typer.echo(f"{_DIVIDER}\n")

    if summary_md:
        typer.echo(summary_md)
    elif final_json:
        # Fallback: render from the final JSON directly
        f = final_json.get("final", {})
        typer.secho(f"HS6 Code   : {f.get('hs6_code', 'N/A')}", bold=True)
        typer.echo(f"Description: {f.get('hs_description', '')}")
        typer.echo(f"Confidence : {f.get('confidence', 'low')}")
        typer.echo(f"Ambiguous  : {f.get('is_ambiguous', True)}")
        if f.get("ambiguity_reason"):
            typer.echo(f"Reason     : {f['ambiguity_reason']}")
        typer.echo(f"Stop reason: {final_json.get('stop_reason', '')}")
        typer.echo(f"Loops used : {final_json.get('loops_used', 0)}")
    else:
        typer.secho("(No output produced)", fg=typer.colors.RED)


def _print_stream_event(event_name: str, data: dict) -> None:
    """Print a single streaming event with structured detail."""
    if event_name == "loop_started":
        typer.secho(
            f"\n--- Loop {data.get('loop')} "
            f"(elapsed {data.get('elapsed_seconds', 0):.1f}s) ---",
            fg=typer.colors.YELLOW, bold=True,
        )
    elif event_name == "observation":
        complete = data.get("is_information_complete", False)
        missing = data.get("missing_information", [])
        status = "complete" if complete else f"incomplete — missing: {', '.join(missing) or 'unknown'}"
        typer.echo(f"  [observe] information {status}")
    elif event_name == "plan":
        cont = data.get("should_continue", True)
        reason = data.get("stop_reason", "")
        typer.echo(f"  [plan]    continue={cont}  reason={reason or '-'}")
    elif event_name == "action":
        code = data.get("hs6_code") or "–"
        conf = data.get("confidence", "low")
        ambig = data.get("is_ambiguous", True)
        mark = "✅" if (not ambig and len(code) == 6) else "⚠️"
        typer.secho(f"  [act]     {mark} hs6={code}  confidence={conf}", bold=not ambig)
    elif event_name == "lesson":
        typer.echo(f"  [learn]   ready_to_exit={data.get('ready_to_exit', False)}")
    elif event_name == "summary":
        typer.secho("\n[summary received]", fg=typer.colors.GREEN)
    elif event_name == "final":
        loops = data.get("loops_used", 0)
        stop = data.get("stop_reason", "")
        typer.secho(f"\n[done] loops={loops}  stop_reason={stop}", fg=typer.colors.GREEN, bold=True)
    else:
        typer.echo(f"  [{event_name}]")


# ---------------------------------------------------------------------------
# CLI app
# ---------------------------------------------------------------------------

app = typer.Typer(
    name="smart-hscode",
    help="Classify a product description into an HS6 code using SmartHSCodeAgent.",
    no_args_is_help=True,
)


@app.command()
def generate(
    description: str = typer.Argument(
        ...,
        help="Product description to classify (wrap in quotes if it contains spaces).",
    ),
    language: str = typer.Option(
        "en", "--language", "-l",
        help="Prompt language: 'en' or 'zh'.",
    ),
    temperature: float = typer.Option(
        0.2, "--temperature", "-t",
        help="LLM sampling temperature (0–1).",
        min=0.0, max=1.0,
    ),
    max_tokens: int = typer.Option(
        1000, "--max-tokens", "-m",
        help="Maximum tokens per LLM response.",
    ),
    max_loops: int = typer.Option(
        3, "--max-loops", "-n",
        help="Maximum Observe-Plan-Act-Learn iterations.",
        min=1, max=10,
    ),
    time_limit: int = typer.Option(
        45, "--time-limit",
        help="Hard wall-clock limit for the whole pipeline (seconds).",
        min=5,
    ),
    stream: bool = typer.Option(
        False, "--stream", "-s",
        help="Print per-phase events as they arrive (Observe / Plan / Act / Learn).",
    ),
    json_out: bool = typer.Option(
        False, "--json",
        help="Print the full JSON result after the report.",
    ),
) -> None:
    """Classify DESCRIPTION and print the HS Code Classification Report."""
    try:
        config = get_llm_config_from_env()
    except Exception as exc:
        typer.echo(f"Configuration error: {exc}", err=True)
        raise typer.Exit(code=1)

    typer.echo(f"Model : {config.model}")
    typer.echo(f"Host  : {config.base_url}")
    typer.echo(f"Input : {description}")
    typer.echo(f"Loops : max={max_loops}  time_limit={time_limit}s\n")
    logger.info("SmartHSCodeAgent: model={}, language={}, max_loops={}, time_limit={}s",
                config.model, language, max_loops, time_limit)

    agent = SmartHSCodeAgent(
        llm_complete=_openai_complete,
        api_key=config.api_key,
        base_url=config.base_url,
        model=config.model,
        language=language,
        max_loops=max_loops,
        time_limit_seconds=time_limit,
    )

    summary_md: str | None = None
    final_json: dict | None = None

    try:
        if stream:
            async def _run_stream() -> tuple[str | None, dict | None]:
                _summary_md: str | None = None
                _final_json: dict | None = None
                async for event in agent.stream_finding_from_proddesc(
                    product_description=description,
                    language=language,
                    temperature=temperature,
                    max_tokens=max_tokens,
                ):
                    event_name = event.get("event", "unknown")
                    data = event.get("data") or {}
                    _print_stream_event(event_name, data)
                    if event_name == "summary":
                        _summary_md = data.get("markdown")
                    elif event_name == "final":
                        _final_json = data
                if _final_json is None:
                    raise RuntimeError("Stream ended without a 'final' event")
                return _summary_md, _final_json

            summary_md, final_json = asyncio.run(_run_stream())
        else:
            raw = asyncio.run(
                agent.finding_from_proddesc(
                    product_description=description,
                    language=language,
                    temperature=temperature,
                    max_tokens=max_tokens,
                )
            )
            final_json = json.loads(raw) if raw else None
            if final_json:
                summary_md = final_json.get("summary_markdown")

    except Exception as exc:
        typer.echo(f"\nError: {exc}", err=True)
        raise typer.Exit(code=1)

    _print_report(summary_md, final_json)

    if json_out and final_json:
        typer.echo(f"\n{_DIVIDER}")
        typer.secho("  FULL JSON OUTPUT", bold=True)
        typer.echo(_DIVIDER)
        typer.echo(json.dumps(final_json, indent=2, ensure_ascii=True))


@app.command()
def interactive(
    language: str = typer.Option("en", "--language", "-l", help="Prompt language: 'en' or 'zh'."),
    temperature: float = typer.Option(0.2, "--temperature", "-t", min=0.0, max=1.0),
    max_tokens: int = typer.Option(1000, "--max-tokens", "-m"),
    max_loops: int = typer.Option(3, "--max-loops", "-n", min=1, max=10,
                                   help="Maximum Observe-Plan-Act-Learn iterations."),
    time_limit: int = typer.Option(45, "--time-limit", min=5,
                                    help="Wall-clock limit per query (seconds)."),
    stream: bool = typer.Option(False, "--stream", "-s",
                                 help="Print per-phase events while classifying."),
) -> None:
    """Enter an interactive loop — type a product description at each prompt."""
    try:
        config = get_llm_config_from_env()
    except Exception as exc:
        typer.echo(f"Configuration error: {exc}", err=True)
        raise typer.Exit(code=1)

    agent = SmartHSCodeAgent(
        llm_complete=_openai_complete,
        api_key=config.api_key,
        base_url=config.base_url,
        model=config.model,
        language=language,
        max_loops=max_loops,
        time_limit_seconds=time_limit,
    )

    typer.secho(
        f"\nSmartHSCode interactive mode  (model: {config.model}, "
        f"max_loops={max_loops}, time_limit={time_limit}s)",
        bold=True,
    )
    typer.echo("Type a product description and press Enter.  Empty line or Ctrl-C to quit.\n")

    while True:
        try:
            desc = typer.prompt("Description")
        except (KeyboardInterrupt, EOFError):
            typer.echo("\nBye.")
            break

        if not desc.strip():
            typer.echo("Bye.")
            break

        summary_md: str | None = None
        final_json: dict | None = None

        try:
            if stream:
                async def _run_stream_interactive() -> tuple[str | None, dict | None]:
                    _summary_md: str | None = None
                    _final_json: dict | None = None
                    async for event in agent.stream_finding_from_proddesc(
                        product_description=desc,
                        language=language,
                        temperature=temperature,
                        max_tokens=max_tokens,
                    ):
                        event_name = event.get("event", "unknown")
                        data = event.get("data") or {}
                        _print_stream_event(event_name, data)
                        if event_name == "summary":
                            _summary_md = data.get("markdown")
                        elif event_name == "final":
                            _final_json = data
                    return _summary_md, _final_json

                summary_md, final_json = asyncio.run(_run_stream_interactive())
            else:
                raw = asyncio.run(
                    agent.finding_from_proddesc(
                        product_description=desc,
                        language=language,
                        temperature=temperature,
                        max_tokens=max_tokens,
                    )
                )
                final_json = json.loads(raw) if raw else None
                if final_json:
                    summary_md = final_json.get("summary_markdown")

        except Exception as exc:
            typer.echo(f"Error: {exc}\n", err=True)
            continue

        _print_report(summary_md, final_json)
        typer.echo()


if __name__ == "__main__":
    app()
