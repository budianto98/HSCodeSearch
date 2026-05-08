import pprint

from toolregistry import ToolRegistry
from toolregistry.tool_discovery import ToolDiscoveryTool
from loguru import logger
from DeepHSCode.tools.lightrag_query_tool import query_knowledge_base, list_knowledge_bases
# from DeepHSCode.KGs.rag_module import LightRAGModule, _make_ollama_backend
from DeepHSCode.KGs.KGs import LightRAGWrapper
from DeepHSCode.agents.hscode_orchestrator.tools.LLM.openai_llm import llm_prompt

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
def lightrag_query(KB: str, query: str, mode: str = "naive") -> str:
    """Query a knowledge base using LightRAG, e.g., WCO References"""
    return Light_RAG.query_knowledge(KB, query, mode)
    

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

    
    
import re

@tool_registry.register
def extract_hs_codes(text: str) -> list[str]:
    """Extract all HS Code numbers (4–12 digits) found in a given text"""
    re_list = [r'\b\d{4}(?:\.\d{2}(?:\.\d{4})?)?\b',
               r'\b\d{4}(?:\.\d{2}){0,4}\b']
    res = []
    for re_pattern in re_list:
        res += re.findall(re_pattern, text)
    
    return list(set(res))  # Deduplicate results

## LLM Tools

@tool_registry.register
def call_llm(prompt: str) -> str:
    """Call the configured LLM with a plain prompt and return text output."""
    return llm_prompt(prompt, model_name="LLM_MODEL")


@tool_registry.register
def call_pplx_llm(prompt: str) -> str:
    """Call the Perplexity LLM with a plain prompt and return text output."""
    return llm_prompt(prompt, model_name="PERPLEXITY_LLM_MODEL")


@tool_registry.register
def call_slm(prompt: str) -> str:
    """Call the Ollama LLM with a plain prompt and return text output. It use Small model which is faster and cheaper, suitable for less complex tasks."""
    return llm_prompt(prompt, model_name="OLLAMA_LLM_MODEL_SLM")


@tool_registry.register
def call_llm_tool(prompt: str) -> str:
    """Call the Ollama LLM specialized for Tool use with a plain prompt and return text output."""
    return llm_prompt(prompt, model_name="OLLAMA_LLM_MODEL_TOOL")


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
                                   system_prompt= "You are a helpful assistant with tool calling capabilities.")
    # raw_response: str = llm_prompt(planning_prompt, model_name="OLLAMA_LLM_MODEL_LLM")
    print(type(raw_response))
    pprint.pprint(raw_response)
    # ── 5. Parse and validate the response ───────────────────────────────
    tool_call_plan = _parse_tool_call_plan(raw_response)

    llm_prompt(prompt=planning_prompt, 
                model_name="OLLAMA_LLM_MODEL_TOOL",
                system_prompt= "You are a helpful assistant with tool calling capabilities.")

    return tool_call_plan


# ─────────────────────────────────────────────
# Helpers
# ─────────────────────────────────────────────

def _build_tools_catalogue() -> str:
    
    tools: list[dict] = tool_registry.get_tools_json()
    lines = []

    for entry in tools:
        fn = entry.get("function", {})
        name: str = fn.get("name", "<unknown>")
        description: str = fn.get("description", "").strip()
        parameters: dict = fn.get("parameters", {})
        properties: dict = parameters.get("properties", {})
        required: list = parameters.get("required", [])

        # Build param list
        param_parts = []
        for param_name, param_schema in properties.items():
            param_type = param_schema.get("type", "any")
            is_nullable = param_schema.get("nullable", False)
            has_default = "default" in param_schema
            default_val = param_schema.get("default")

            if param_name in required:
                label = f"{param_name}: {param_type} (required)"
            elif has_default:
                label = f"{param_name}: {param_type} (default={default_val!r})"
            elif is_nullable:
                label = f"{param_name}: {param_type} (optional)"
            else:
                label = f"{param_name}: {param_type}"

            param_parts.append(label)

        param_str = ", ".join(param_parts) if param_parts else "no parameters"
        doc_str = f" — {description}" if description else ""
        lines.append(f"- {name}({param_str}){doc_str}")

    return "\n".join(lines)


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