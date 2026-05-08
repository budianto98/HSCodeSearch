from loguru import logger
import re
from typing import Any, Dict, List

#######################################################################
# Script for HSCodeDiscovery step
#######################################################################


def _normalize_input(input_payload: Any) -> Dict[str, Any]:
    if isinstance(input_payload, dict):
        return {
            "product_description": input_payload.get("product_description", ""),
            "plan": input_payload.get("plan", ""),
        }

    return {
        "product_description": str(input_payload),
        "plan": "",
    }


def _extract_hs_candidates(text: str, toolregistry=None) -> List[str]:
    candidates: List[str] = []
    if toolregistry is not None:
        extract_tool = toolregistry.get_tool("extract_hs_codes")
        if extract_tool is not None:
            result = extract_tool.run({"text": text})
            if isinstance(result, list):
                candidates.extend(str(code) for code in result)

    if not candidates:
        candidates.extend(re.findall(r"\b\d{4}(?:\.\d{2}){0,4}\b", text))

    deduped = []
    seen = set()
    for code in candidates:
        normalized = code.strip()
        if normalized and normalized not in seen:
            deduped.append(normalized)
            seen.add(normalized)
    return deduped


def _get_primary_kb(toolregistry=None) -> str:
    if toolregistry is None:
        return "WCO_2022B"

    list_kbs_tool = toolregistry.get_tool("list_kbs")
    if list_kbs_tool is None:
        return "WCO_2022B"

    try:
        kbs = list_kbs_tool.run({})
    except Exception:
        return "WCO_2022B"

    if not isinstance(kbs, list) or not kbs:
        return "WCO_2022B"

    for kb in kbs:
        if "WCO" in str(kb).upper():
            return str(kb)
    return str(kbs[0])


def _discover_by_llm(product_description: str, toolregistry=None) -> List[str]:
    if toolregistry is None:
        return []
    llm_tool = toolregistry.get_tool("call_llm")
    if llm_tool is None:
        return []

    prompt = (
        "Identify plausible HS code candidates from the product description below. "
        "Return only a plain list of HS codes (one per line, 4-10 digits with optional dots).\n\n"
        f"Product: {product_description}"
    )
    text = llm_tool.run({"prompt": prompt})
    matches = re.findall(r"\b\d{4}(?:\.\d{2}){0,4}\b", str(text))

    deduped = []
    seen = set()
    for code in matches:
        if code not in seen:
            deduped.append(code)
            seen.add(code)
    return deduped


# This one for WEb search
#################################################
import asyncio
from mcp import ClientSession
from mcp.client.sse import sse_client

SERVER_URL = "http://localhost:6274/"
AUTH_TOKEN = "0409d6eedaa29bbfa77c975fb09fb40e198cd5a285f93614dc3c052d3fcb77be"

async def _call_tool(tool_name: str, args: dict):
    headers = {"MCP_PROXY_AUTH_TOKEN": AUTH_TOKEN}
    async with sse_client(SERVER_URL, headers=headers) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()
            result = await session.call_tool(tool_name, args)
            return result.content[0].text

async def search_web(query: str, provider: str = "duckduckgo", max_results: int = 10):
    return await _call_tool("web_search", {"query": query, "provider": provider, "max_results": max_results})

async def search_perplexity(product_description: str):
    return await _call_tool("PPLX_HSCodeAgent", {"product_description": product_description})

def run_async(coro):
    try:
        loop = asyncio.get_running_loop()
        # If a loop is already running, use nest_asyncio
        import nest_asyncio
        nest_asyncio.apply()
        return loop.run_until_complete(coro)
    except RuntimeError:
        return asyncio.run(coro)
    

# Run it
if __name__ == "__main__":
    print(asyncio.run(search_web("latest AI news")))
    print(asyncio.run(search_perplexity("steel flat-rolled coils")))

def run(config: dict, toolregistry=None) -> None:
    step_name           = config.get("name", "HSCodeDiscovery")
    input_payload       = _normalize_input(config.get("input", ""))
    product_description = input_payload.get("product_description", "")
    plan_text           = input_payload.get("plan", "")
    goals               = config.get("goal", "")
    instructions        = config.get("instructions", [])
    output_format       = config.get("expected_output", "")

    logger.opt(colors=True).info(f"<RED>=== HSCODE DISCOVERY STEP ===</RED>")
    logger.opt(colors=True).info(f"<cyan>Input:</cyan> {product_description}")
    logger.opt(colors=True).info(f"<cyan>Goals:</cyan> {goals}")
    logger.opt(colors=True).info(f"<cyan>Instructions:</cyan>\n{instructions}")
    logger.opt(colors=True).info(f"<cyan>Expected Output Format:</cyan>\n{output_format}")

    # Find all possible HS Code in previous Text
    combined_text = f"{product_description}\n{plan_text}".strip()
    hs_codes = _extract_hs_candidates(combined_text, toolregistry=toolregistry)

    # res_web_search = List[Dict[str, Any]]()
    res_web_search = run_async(search_web(f"HS code candidates for: {product_description}", provider="tavily", max_results=5))
    # res_web_search["web_search"] = result

    if not hs_codes:
        hs_codes = _discover_by_llm(product_description, toolregistry=toolregistry)

    kb_name = _get_primary_kb(toolregistry=toolregistry)
    evidence: List[Dict[str, Any]] = []

    rag_tool = toolregistry.get_tool("lightrag_query") if toolregistry is not None else None
    for code in hs_codes:
        ref_text = ""
        if rag_tool is not None:
            query = (
                f"HS {code}: heading scope, key classification criteria, and examples "
                "for the given product domain."
            )
            try:
                ref_text = rag_tool.run({"KB": kb_name, "query": query, "mode": "naive"})
            except Exception as exc:
                ref_text = f"RAG lookup failed: {exc}"

        evidence.append(
            {
                "hs_code": code,
                "knowledge_base": kb_name,
                "reference": ref_text,
            }
        )

    return {
        "step": step_name,
        "product_description": product_description,
        "goal": goals,
        "candidate_hs_codes": hs_codes,
        "evidence": evidence,
        "web_search_results": res_web_search,
        "instructions": instructions,
    }

