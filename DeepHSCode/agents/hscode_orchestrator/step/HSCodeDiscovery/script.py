from loguru import logger
from typing import Any, Dict, List
# from DeepHSCode.agents.hscode_orchestrator.tools.tool_registry import tool_registry, generate_tool_call_plan, call_tool, generate_tool_input
from DeepHSCode.KGs.KGs import LightRAGWrapper
#######################################################################
# Script for HSCodeDiscovery step
#######################################################################


from DeepHSCode.tools.lightrag_query_tool import query_knowledge_base, list_knowledge_bases


from pydantic import BaseModel, Field, create_model
from typing import Any

def json_to_basemodel(name: str, data: dict) -> type[BaseModel]:
    """Infer a Pydantic BaseModel from a JSON example."""
    type_map = {
        str: (str, ...),
        int: (int, ...),
        float: (float, ...),
        bool: (bool, ...),
        list: (list[str], ...),  # simplification: assumes list of strings
        dict: (dict, ...),
    }

    fields = {}
    for key, value in data.items():
        python_type = type(value)
        fields[key] = type_map.get(python_type, (Any, ...))

    return create_model(name, **fields)


import json
def run(config: dict, toolregistry=None) -> Dict[str, Any]:
   
    step_name           = config.get("name", "HSCodeDiscovery")
    input_payload       = config.get("input", "")
    product             = config.get("product", "")
    goals               = config.get("goal", "")
    instructions        = config.get("instructions", [])
    exp_output          = config.get("expected_output", "")
    output_format       = json.loads(exp_output) if isinstance(exp_output, str) else exp_output
    out                 = output_format.copy()

    
    logger.opt(colors=True).info(f"<RED>=== HSCODE DISCOVERY STEP ===</RED>")
    logger.opt(colors=True).info(f"<cyan>Input:</cyan> {product}")
    logger.opt(colors=True).info(f"<cyan>Goals:</cyan> {goals}")
    logger.opt(colors=True).info(f"<cyan>Instructions:</cyan>\n{instructions}")
    logger.opt(colors=True).info(f"<cyan>Expected Output Format:</cyan>\n{output_format}")

    class OutputFormat(BaseModel):
        data: List[Dict[str, Any]] = Field(..., description="List of candidate HS codes with details")

    for currkey in output_format:
        print(f"{currkey}: {output_format[currkey]}")
        key_cfg = output_format.get(currkey, {})

        if isinstance(key_cfg, dict) and key_cfg.get("search_mode") == "rag":
            kb_name = key_cfg.get("kb", "WCO_2022")
            rag_mode = key_cfg.get("mode", "hybrid")
            queries = input_payload.get("query", f"HS Code for product:\n{product}")
            available_kbs = list_knowledge_bases()
            if kb_name not in available_kbs:
                kb_name = "WCO_2022B"  # defasult KB

            out[currkey] = []
            for q in queries:
                q +="\nPlease return in Short and Concise format."
                res = query_knowledge_base(kb_subfolder=kb_name, query=q, mode=rag_mode)
                if res is not None and res != "" and res != "None":
                    out[currkey].append(res)
        else:
            out[currkey] = key_cfg
        
    return out

    return {
        "step": step_name,
        "product_description": product_description,
        "goal": goals,
        "candidate_hs_codes": hs_codes,
        "evidence": evidence,
        "web_search_results": res_web_search,
        "instructions": instructions,
    }

