from loguru import logger
from DeepHSCode.agents.hscode_orchestrator.tools import generate_tool_call_plan
import pprint

#######################################################################
# Script for Plan step
#######################################################################
from DeepHSCode.agents.hscode_orchestrator.tools.LLM.openai_llm import llm_prompt, llm_prompt_with_structuredformat

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
def run(config: dict, toolregistry=None) -> None:
    
    input_payload           = config.get("product", "")
    goals                   = config.get("goal", "")
    instruction_template    = config.get("instructions", [])
    exp_output              = config.get("expected_output", "")
    output_format           = json.loads(exp_output)
    out  = output_format.copy()
        
    logger.opt(colors=True).info(f"<RED>=== PLAN STEP ===</RED>")
    logger.opt(colors=True).info(f"<cyan>Input:</cyan> {input_payload}")
    logger.opt(colors=True).info(f"<cyan>Goals:</cyan> {goals}")
    logger.opt(colors=True).info(f"<cyan>Instruction Template:</cyan>\n{instruction_template}")
    logger.opt(colors=True).info(f"<cyan>Expected Output Format:</cyan>\n{output_format}")

    prompt_template = """
    Product: {input}

    Instruction: 
    {instructions}
"""
    
    for currkey in output_format:
        print(f"{currkey}: {output_format[currkey]}")
        my_cls = create_model("OutputFormat",
                                data=(list[str], Field(..., description=f"{output_format[currkey]}")) 
                              )
        curr_input = output_format[currkey]["data"]["description"]
        type_lookup = {"list[str]": list[str], "str": str, "int": int, "float": float}

        fields = {
            key: (
                type_lookup[val["type"]],
                Field(..., description=val["description"])
            )
            for key, val in output_format[currkey].items()
        }

        OutputFormat = create_model("OutputFormat", **fields)
        prompt = prompt_template.format(input=input_payload, instructions=curr_input)
        res = llm_prompt_with_structuredformat(prompt=prompt, model_cls=OutputFormat, model_name="OLLAMA_LLM_MODEL_TOOL", system_prompt="You are a helpful assistant that creates a plan with the given instruction template and input.")
        out[currkey] = res["data"]
        
    return out

    
    

    


    