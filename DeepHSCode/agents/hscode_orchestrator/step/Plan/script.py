from loguru import logger
import re

#######################################################################
# Script for Plan step
#######################################################################


def run(config: dict, toolregistry=None) -> None:
    input_payload = config.get("input", "")
    product_description = input_payload if isinstance(input_payload, str) else str(input_payload)
    goals = config.get("goal", "")
    instruction_template = "\n".join(config.get("instructions", []))
    output_format = config.get("expected_output", "")

    logger.opt(colors=True).info(f"<RED>=== PLAN STEP ===</RED>")
    logger.opt(colors=True).info(f"<cyan>Input:</cyan> {product_description}")
    logger.opt(colors=True).info(f"<cyan>Goals:</cyan> {goals}")
    logger.opt(colors=True).info(f"<cyan>Instruction Template:</cyan>\n{instruction_template}")
    logger.opt(colors=True).info(f"<cyan>Expected Output Format:</cyan>\n{output_format}")

    prompt = instruction_template.format(
        input=product_description,
        goal=goals,
        output_format=output_format,
    )

    plan_text = ""
    if toolregistry is not None:
        llm_tool = toolregistry.get_tool("call_llm")
        if llm_tool is not None:
            plan_text = llm_tool.run({"prompt": prompt})
            plan_text = re.sub(r"<think>.*?</think>", "", str(plan_text), flags=re.DOTALL).strip()

    return {
        "step": config.get("name", "Plan"),
        "product_description": product_description,
        "goal": goals,
        "plan": plan_text,
        "expected_output": output_format,
    }

    
    

    


    