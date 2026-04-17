from __future__ import annotations

import json
from pathlib import Path

import httpx
from fastapi import APIRouter, HTTPException
from mcp import ClientSession
from mcp.client.stdio import StdioServerParameters, stdio_client
from pydantic import BaseModel, Field

from DeepHSCode.agents.SmartHSCode import SmartHSCodeAgent
from DeepHSCode.services.llm.config import LLMConfig, get_llm_config_from_env


router = APIRouter(prefix="/hscode")


# ---------------------------------------------------------------------------
# LLM config helper
# ---------------------------------------------------------------------------

def _get_llm_config() -> LLMConfig:
    return get_llm_config_from_env()


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
    """OpenAI-compatible chat completion via httpx."""
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


class HSCodeRequest(BaseModel):
    product_description: str = Field(..., min_length=1)
    language: str = "en"
    temperature: float = 0.2
    max_tokens: int = 1000


class HSCodeResponse(BaseModel):
    result: str


def _server_parameters() -> StdioServerParameters:
    root = Path(__file__).resolve().parents[3]
    python_path = root / ".venv" / "bin" / "python"
    command = str(python_path if python_path.exists() else "python3")
    return StdioServerParameters(
        command=command,
        args=[str(root / "mcp" / "server" / "server.py")],
        cwd=str(root),
    )


async def _call_mcp_tool(name: str, arguments: dict | None = None) -> object:
    params = _server_parameters()
    async with stdio_client(params) as (read_stream, write_stream):
        async with ClientSession(read_stream, write_stream) as session:
            await session.initialize()
            return await session.call_tool(name, arguments or {})


def _extract_text_content(tool_result: object) -> str:
    parts: list[str] = []
    content = getattr(tool_result, "content", [])
    for item in content:
        text = getattr(item, "text", None)
        if text:
            parts.append(text)
    return "\n".join(parts).strip()


async def _web_search_tool(
    query: str,
    provider: str = "duckduckgo",
    max_results: int = 10,
    verbose: bool = False,
) -> dict:
    """Async wrapper calling MCP HSCodeSearch web_search tool."""
    result = await _call_mcp_tool(
        "web_search",
        {
            "query": query,
            "provider": provider,
            "max_results": max_results,
            "verbose": verbose,
        },
    )
    if getattr(result, "isError", False):
        message = _extract_text_content(result) or "MCP tool web_search failed"
        raise RuntimeError(message)

    text_payload = _extract_text_content(result)
    if text_payload:
        try:
            import json

            parsed = json.loads(text_payload)
            if isinstance(parsed, dict):
                return parsed
        except Exception:
            pass

    structured = getattr(result, "structuredContent", None)
    if isinstance(structured, dict):
        return structured

    return {"query": query, "results": []}


@router.post("/generate", response_model=HSCodeResponse)
async def generate_hscode(payload: HSCodeRequest) -> HSCodeResponse:
    try:
        config = _get_llm_config()
        agent = SmartHSCodeAgent(
            llm_complete=_openai_complete,
            api_key=config.api_key,
            base_url=config.base_url,
            model=config.model,
            language=payload.language,
            web_search_tool=_web_search_tool,
        )
        result = await agent.finding_from_proddesc(
            product_description=payload.product_description,
            language=payload.language,
            temperature=payload.temperature,
            max_tokens=payload.max_tokens,
        )
        return HSCodeResponse(result=result)
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc)) from exc
