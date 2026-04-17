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


class ActAgent(BaseAgent):
    """Act phase: produce HS6 decision and matched declaration elements."""

    def __init__(self, **kwargs) -> None:
        super().__init__(**kwargs)

    async def run(
        self,
        product_description: str,
        observation: dict[str, Any],
        plan: dict[str, Any],
        *,
        temperature: float = 0.2,
        max_tokens: int = 1200,
    ) -> dict[str, Any]:
        system_prompt = (
            "You are the ACT module for HS classification. Apply GIR logic. "
            "Return ONE unambiguous HS6 code if possible. "
            "If ambiguous, set is_ambiguous=true and explain why. Return JSON only."
        )
        user_prompt = (
            "Return JSON keys: hs6_code (string), hs_description (string), "
            "is_ambiguous (bool), ambiguity_reason (string), "
            "gir_analysis (list[str]), declaration_elements (list[object]), "
            "reasoning (string), confidence (low|medium|high).\n\n"
            "Each declaration_elements item should contain: "
            "name, value, source, required(bool).\n\n"
            f"Product Description:\n{product_description}\n\n"
            f"Observation:\n{json.dumps(observation, ensure_ascii=True)}\n\n"
            f"Plan:\n{json.dumps(plan, ensure_ascii=True)}"
        )

        raw = await self.call_llm(
            user_prompt=user_prompt,
            system_prompt=system_prompt,
            temperature=temperature,
            max_tokens=max_tokens,
        )
        parsed = _extract_json_object(raw)

        if not parsed:
            parsed = {
                "hs6_code": "",
                "hs_description": "",
                "is_ambiguous": True,
                "ambiguity_reason": "model_output_not_json",
                "gir_analysis": [],
                "declaration_elements": [],
                "reasoning": raw.strip(),
                "confidence": "low",
            }

        return parsed

    async def process(self, *args, **kwargs):
        """Satisfy BaseAgent contract — delegates to run()."""
        return await self.run(*args, **kwargs)