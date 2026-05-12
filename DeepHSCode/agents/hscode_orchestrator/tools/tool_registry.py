import pprint

from toolregistry import ToolRegistry
from toolregistry.tool_discovery import ToolDiscoveryTool
from loguru import logger
from DeepHSCode.tools.lightrag_query_tool import query_knowledge_base, list_knowledge_bases
# from DeepHSCode.KGs.rag_module import LightRAGModule, _make_ollama_backend
from DeepHSCode.KGs.KGs import LightRAGWrapper
from DeepHSCode.agents.hscode_orchestrator.tools.LLM.openai_llm import llm_prompt, llm_prompt_with_structuredformat

tool_registry = ToolRegistry()

@tool_registry.register
def print_cli(message: str) -> None:
    """Print to message to CLI with styling"""
    # print(message)
    logger.opt(colors=True).info(f"<magenta>{message}</magenta>")


## HSCode-specific tools
#####################################################################
import os
# DEFAULT_OLLAMA_HOST = os.getenv("OLLAMA_HOST", "http://10.103.1.23:11434")
# DEFAULT_EMBED_MODEL = os.getenv("OLLAMA_EMBEDDING_MODEL", "qwen3-embedding:4b")
# DEFAULT_LLM_MODEL_INGEST = os.getenv("OLLAMA_LLM_MODEL", "qwen3:32b-q4_K_M")
# DEFAULT_LLM_MODEL_QUERY = os.getenv("OLLAMA_LLM_MODEL_QUERY", DEFAULT_LLM_MODEL_INGEST)
KB_DIR = "data/knowledge_bases"


Light_RAG = LightRAGWrapper(
        working_dir = KB_DIR,
        ollama_host = os.getenv("OLLAMA_HOST", "http://10.103.1.23:11434"),
        embed_model = os.getenv("OLLAMA_EMBEDDING_MODEL", "qwen3-embedding:4b"),
        llm_model   = os.getenv("OLLAMA_LLM_MODEL_QUERY", "llama3.1:8b"),
    )

from pathlib import Path
from DeepHSCode.KGs.KGs import LightRAGWrapper



@tool_registry.register
def list_kbs() -> list:
    """List all available knowledge bases"""
    KB_DIR_PATH = Path(KB_DIR)
    if not KB_DIR_PATH.exists():
        return []
    return sorted([
        d.name
        for d in KB_DIR_PATH.iterdir()
        if d.is_dir() and (d / "rag_storage").exists()
    ])

@tool_registry.register
def lightrag_query(KB: str, query: str, mode: str = "naive") -> str:
    """Search a named LightRAG knowledge base using advanced retrieval (vector + graph).

    Args:
        KB (str): Name or identifier of the LightRAG knowledge base to search (default "WCO_2022").
        query (str): Natural‑language search question or statement.
        mode (str, optional): Retrieval strategy:
            - "naive": basic vector search without graph traversal.
            - "local": focused search around entities in the query.
            - "global": broader search using global graph structure.
            - "hybrid": combines local and global approaches.
            - "mix": fuses vector retrieval with knowledge‑graph traversal for better accuracy.
            Default is "naive".

    Returns:
        str: A natural‑language answer generated from the knowledge base, based on the specified mode.
    """
    available_kbs = list_knowledge_bases()
    if KB not in available_kbs:
        if not available_kbs:
            raise ValueError("No knowledge bases are available.")
        fallback = available_kbs[0]
        logger.warning(f"KB '{KB}' not found. Falling back to '{fallback}'. Available: {available_kbs}")
        KB = fallback
    return Light_RAG.query_knowledge(KB, query, mode)
    


    
    
# import re
# from typing import Any, Dict, List
# from pydantic import BaseModel, Field

# @tool_registry.register
# def extract_hs_codes(text: str) -> list[str]:
#     """Extract all HS Code numbers (4–12 digits) found in a given text"""

#     prompt = f"""Extract all HS Codes (2 to 12 digit numbers), e.g., Chapter (2-digit, 10, etc.), Heading (4-digit, 90.19, 0110, etc.), subHeading (6-digit, 901900, 9019.12, etc.), etc.  mentioned in the following text. 
#     text: '''{text}'''
# Return a JSON array of strings."""
    
    
#     class HSCodeExtractionResult(BaseModel):
#         hs_codes: list[str] = Field(..., description="List of extracted HS Codes (only the number and dot)"    )
#     # res = llm_prompt(prompt, model_name="OLLAMA_LLM_MODEL_TOOL", system_prompt="You are a helpful assistant that extracts HS Codes from text.")
#     res = llm_prompt_with_structuredformat(prompt, model_cls=HSCodeExtractionResult, model_name="OLLAMA_LLM_MODEL_TOOL", system_prompt="You are a helpful assistant that extracts HS Codes from text.")
#     return res
    

## LLM Tools

# @tool_registry.register
# def call_llm(prompt: str) -> str:
#     """Call the configured LLM with a plain prompt and return text output."""
#     return llm_prompt(prompt, model_name="LLM_MODEL")

# from pydantic import BaseModel, Field
# from typing import Type, get_args, get_origin

# @tool_registry.register
# def call_llm_with_structured(prompt: str, model_cls: Type[BaseModel],) -> list[str]:
#     """Extract all HS Code numbers (4–12 digits) found in a given text"""

#     res = llm_prompt_with_structuredformat(prompt, model_cls=model_cls, model_name="OLLAMA_LLM_MODEL_TOOL", system_prompt="You are a helpful assistant that extracts HS Codes from text.")
#     return res

# @tool_registry.register
# def call_pplx_llm(prompt: str) -> str:
#     """Call the Perplexity LLM with a plain prompt and return text output."""
#     return llm_prompt(prompt, model_name="PERPLEXITY_LLM_MODEL")


# @tool_registry.register
# def call_slm(prompt: str) -> str:
#     """Call the Ollama LLM with a plain prompt and return text output. It use Small model which is faster and cheaper, suitable for less complex tasks."""
#     return llm_prompt(prompt, model_name="OLLAMA_LLM_MODEL_SLM")


# @tool_registry.register
# def call_llm_tool(prompt: str) -> str:
#     """Call the Ollama LLM specialized for Tool use with a plain prompt and return text output."""
#     return llm_prompt(prompt, model_name="OLLAMA_LLM_MODEL_TOOL")


# discoverer = ToolDiscoveryTool(tool_registry)










# ─────────────────────────────────────────────
# Tool call planner
# ─────────────────────────────────────────────
import json
from typing import Union

def generate_tool_call_plan(
    instruction: str,
    input: str

) -> dict:
    

    # ── 1. Normalise instructions ──────────────────────────────────────────
    # instruction_text = ""
    # if isinstance(instruction, str):
    #     instruction_text = instruction
    # else:
    #     instruction_text = "\n".join(
    #         f"{i + 1}. {step}" for i, step in enumerate(instruction)
    #     )

    # ── 2. Build the tools catalogue from the registry ────────────────────
    tools_catalogue = _build_tools_catalogue()

    # ── 3. Compose the planning prompt ────────────────────────────────────
    planning_prompt = f"""
Given the following functions, please respond with a JSON for a function call.
Respond in the format {{"tool": function name, "args": dictionary}}.


## Available tools
{tools_catalogue}

Query: {instruction}

""".strip()

    # pprint.pprint(planning_prompt)
    print("Instruction: ", instruction)
    # ── 4. Call the LLM ───────────────────────────────────────────────────
    raw_response: str = llm_prompt(prompt=planning_prompt, 
                                   model_name="OLLAMA_LLM_MODEL_TOOL",
                                    #   model_name="LLM_MODEL",
                                   system_prompt= "You are a helpful assistant with tool calling capabilities.")
    # raw_response: str = llm_prompt(planning_prompt, model_name="OLLAMA_LLM_MODEL_LLM")
    print(type(raw_response))
    pprint.pprint(raw_response)
    # ── 5. Parse and validate the response ───────────────────────────────
    tool_call_plan = _parse_tool_call_plan(raw_response)

    # llm_prompt(prompt=planning_prompt, 
    #             model_name="OLLAMA_LLM_MODEL_TOOL",
    #             system_prompt= "You are a helpful assistant with tool calling capabilities.")

    return tool_call_plan

def generate_tool_input(tool_name: str, input: str) -> dict:
    # For simplicity, we just pass the input as-is. In a real implementation, this could involve more complex transformations.
    prompt = f"""Generate input for the tool '{tool_name}' based on the following payload. Select which part of payload suitable for the input. Return only the input in text format.
    input payload: '''{input}'''
"""
    res = llm_prompt(prompt=prompt, model_name="OLLAMA_LLM_MODEL_TOOL", system_prompt="You are a helpful assistant that generates input for tool")
    return {"input": res}

# ─────────────────────────────────────────────
# Helpers
# ─────────────────────────────────────────────
def get_tool_info(tool_name: str) -> dict:
    """Return metadata (description, parameters) for a registered tool."""
    tools = tool_registry.get_tools_json()
    for entry in tools:
        fn = entry.get("function", {})
        if fn.get("name") == tool_name:
            return {
                "name": fn["name"],
                "description": fn.get("description", "").strip(),
                "parameters": fn.get("parameters", {}).get("properties", {}),
                "required": fn.get("parameters", {}).get("required", []),
            }
    raise KeyError(f"Tool '{tool_name}' not found in registry.")

def _build_tools_catalogue() -> str:
    """Build a human-readable catalogue of all registered tools."""
    def fmt_param(k: str, v: dict, required: list) -> str:
        if k in required:
            label = "required"
        elif "default" in v:
            label = f"default={v['default']!r}"
        else:
            label = "optional"
        return f"{k}: {v.get('type', 'any')} ({label})"

    def fmt_tool(fn: dict) -> str:
        props = fn.get("parameters", {}).get("properties", {})
        required = fn.get("parameters", {}).get("required", [])
        params = ", ".join(fmt_param(k, v, required) for k, v in props.items()) or "no parameters"
        desc = f" — {fn['description'].strip()}" if fn.get("description") else ""
        return f"- {fn['name']}({params}){desc}"

    return "\n".join(
        fmt_tool(entry["function"])
        for entry in tool_registry.get_tools_json()
        if "function" in entry
    )


def parse_llm_json(raw: str) -> dict:
    cleaned = re.sub(r"<think>.*?</think>", "", raw, flags=re.DOTALL)
    
    # Strip surrounding whitespace/newlines
    cleaned = cleaned.strip()
    
    return json.loads(cleaned)

import inspect
import json
import re
from typing import get_type_hints

def call_tool(tool_name: str, input: dict | str, instruction: str = "") -> any:
    """
    Resolve and call a registered tool by name with robust multi-parameter support.

    Resolution order:
      1. No-param tools → call directly
      2. If input is a dict and all required keys are present → unpack as **kwargs (fast path)
      3. If tool takes exactly one str param → collapse payload into a descriptive string
      4. Otherwise → use LLM to derive structured kwargs from the payload dict
         using the tool's schema + optional instruction context
    """
    # ── 0. Retrieve tool function and schema ─────────────────────────────
    fn = tool_registry[tool_name]
    tool_info = get_tool_info(tool_name)
    params: dict = tool_info["parameters"]       # {param_name: {"type": ..., ...}}
    required: list = tool_info["required"]       # list of required param names

    logger.debug(f"call_tool: '{tool_name}' | params={list(params.keys())} | required={required}")

    # ── 1. No-parameter tool ──────────────────────────────────────────────
    if not params:
        return fn()

    # ── 2. Fast path: input dict keys cover all required params ───────────
    if isinstance(input, dict) and all(k in input for k in required):
        # Only pass params that the tool actually accepts
        accepted = {k: v for k, v in input.items() if k in params}
        logger.debug(f"call_tool fast-path kwargs: {list(accepted.keys())}")
        return fn(**accepted)

    # ── 3. Single-string-param shortcut ───────────────────────────────────
    if len(params) == 1:
        only_param = next(iter(params))
        param_type = params[only_param].get("type", "string")
        if param_type == "string":
            if isinstance(input, str):
                value = input
            else:
                # Collapse dict payload into a structured text string for the tool
                value = "\n".join(f"{k}: {v}" for k, v in input.items())
            logger.debug(f"call_tool single-param path: {only_param}=<str>")
            return fn(**{only_param: value})

    # ── 4. LLM-derived kwargs ─────────────────────────────────────────────
    # Build a compact JSON representation of the payload
    payload_text = json.dumps(input, ensure_ascii=False, indent=2) if isinstance(input, dict) else str(input)

    # Describe what each param expects
    param_descriptions = "\n".join(
        f"  - {k} ({v.get('type','any')}, {'required' if k in required else 'optional'}): {v.get('description', '')}"
        for k, v in params.items()
    )

    derive_prompt = f"""You are preparing arguments to call the tool '{tool_name}'.

Tool description: {tool_info['description']}

Required parameters:
{param_descriptions}

The following payload was collected from previous steps:
```json
{payload_text}
```
{f"Additional instruction: {instruction}" if instruction else ""}

Return ONLY a valid JSON object whose keys are the parameter names and values are derived from the payload.
For any parameter that represents a search query or question (e.g. 'query', 'prompt', 'text'), synthesise a concise, focused value from the payload context.
Example: {{"KB": "WCO_HS_2022", "query": "smart watch heart rate monitor GPS HS code", "mode": "naive"}}"""

    raw = llm_prompt(
        prompt=derive_prompt,
        model_name="OLLAMA_LLM_MODEL_TOOL",
        system_prompt="You are a precise parameter extraction assistant. Return only JSON.",
    )

    # Strip <think> blocks and code fences
    cleaned = re.sub(r"<think>.*?</think>", "", raw, flags=re.DOTALL).strip()
    if cleaned.startswith("```"):
        cleaned = cleaned.split("```", 2)[1]
        if cleaned.startswith("json"):
            cleaned = cleaned[4:]
        if "```" in cleaned:
            cleaned = cleaned[: cleaned.rfind("```")]
    cleaned = cleaned.strip()

    try:
        kwargs = json.loads(cleaned)
    except json.JSONDecodeError as exc:
        logger.error(f"call_tool: LLM returned invalid JSON for '{tool_name}': {exc}\nRaw:\n{raw}")
        raise ValueError(f"Failed to derive kwargs for tool '{tool_name}': {exc}") from exc

    if not isinstance(kwargs, dict):
        raise ValueError(f"LLM returned non-dict kwargs for tool '{tool_name}': {kwargs}")

    # Filter to accepted params only
    kwargs = {k: v for k, v in kwargs.items() if k in params}
    logger.debug(f"call_tool LLM-derived kwargs: {kwargs}")
    return fn(**kwargs)


def _parse_tool_call_plan(raw: str) -> list[dict]:
    """
    Robustly extract a JSON array from the LLM response.
    Strips <think>...</think> blocks and markdown code fences if present.
    """
    import re

    text = raw.strip()

    # ── 1. Strip <think>...</think> blocks (including empty ones) ─────────
    text = re.sub(r"<think>.*?</think>", "", text, flags=re.DOTALL).strip()

    # ── 2. Strip optional ```json … ``` fences ────────────────────────────
    if text.startswith("```"):
        text = text.split("```", 2)[1]
        if text.startswith("json"):
            text = text[4:]
        if "```" in text:
            text = text[: text.rfind("```")]

    text = text.strip()

    # ── 3. Parse JSON ─────────────────────────────────────────────────────
    try:
        plan = json.loads(text)
    except json.JSONDecodeError as exc:
        logger.error(f"Failed to parse tool-call plan JSON: {exc}\nRaw:\n{raw}")
        raise ValueError(
            f"LLM returned invalid JSON for tool-call plan: {exc}"
        ) from exc

    if isinstance(plan, list):
        raise ValueError(
            f"Expected a JSON of a tool call, got {type(plan).__name__}"
        )

    print(plan)
    # ── 4. Light validation ───────────────────────────────────────────────
    if "tool" not in plan:
        raise ValueError(f"Tool call is missing the 'tool' key: {plan}")
    if "args" not in plan:
        plan["args"] = {}

    return plan







def main():
    res = tool_registry["call_llm"]("What is the capital of France?")
    print(res)


if __name__ == "__main__":
    main()