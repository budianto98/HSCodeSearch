from __future__ import annotations

import json
from typing import Any

from DeepHSCode.agents.base_agent import BaseAgent


def _extract_json_object(text: str) -> dict[str, Any]:
    text = text.strip()
    try:
        parsed = json.loads(text)
        return parsed if isinstance(parsed, dict) else {}
    except json.JSONDecodeError:
        pass

    start = text.find("{")
    end = text.rfind("}")
    if start == -1 or end == -1 or end <= start:
        return {}
    try:
        parsed = json.loads(text[start : end + 1])
        return parsed if isinstance(parsed, dict) else {}
    except json.JSONDecodeError:
        return {}


class PlanAgent(BaseAgent):
    """Plan phase: decide next actions and stopping strategy."""

    def __init__(self, **kwargs) -> None:
        super().__init__(**kwargs)

    async def run(
        self,
        product_description: str,
        observation: dict[str, Any],
        *,
        loop_index: int,
        max_loops: int,
        elapsed_seconds: float,
        time_limit_seconds: int,
        temperature: float = 0.2,
        max_tokens: int = 700,
    ) -> dict[str, Any]:
        loops_left = max_loops - loop_index
        seconds_left = max(0, time_limit_seconds - int(elapsed_seconds))

        system_prompt = (
            "You are the PLAN module in an HS6 classification agent. "
            "Plan according to GIR and stop rules: complete information, unambiguous HS6, "
            "max loop reached, or time exceeded. Return JSON only."
        )
        user_prompt = (
            "Return JSON keys: should_continue (bool), stop_reason (string), "
            "next_queries (list[str]), focus_points (list[str]), "
            "plan_steps (list[str]).\n\n"
            f"Product Description:\n{product_description}\n\n"
            f"Observation:\n{json.dumps(observation, ensure_ascii=True)}\n\n"
            f"Loop Index: {loop_index}\n"
            f"Max Loops: {max_loops}\n"
            f"Loops Left: {loops_left}\n"
            f"Seconds Left: {seconds_left}"
        )

        raw = await self.call_llm(
            user_prompt=user_prompt,
            system_prompt=system_prompt,
            temperature=temperature,
            max_tokens=max_tokens,
        )
        parsed = _extract_json_object(raw)

        if not parsed:
            missing = observation.get("missing_information", [])
            is_complete = bool(observation.get("is_information_complete", False))
            should_continue = (not is_complete) and loops_left > 0 and seconds_left > 0
            parsed = {
                "should_continue": should_continue,
                "stop_reason": "need_more_information" if should_continue else "ready_or_limited",
                "next_queries": observation.get("recommended_queries", [])[:3],
                "focus_points": missing if isinstance(missing, list) else [],
                "plan_steps": [
                    "Verify product composition and function",
                    "Map candidates to GIR rationale",
                    "Confirm declaration elements",
                ],
            }

        return parsed

    async def process(self, *args, **kwargs):
        """Satisfy BaseAgent contract — delegates to run()."""
        return await self.run(*args, **kwargs)