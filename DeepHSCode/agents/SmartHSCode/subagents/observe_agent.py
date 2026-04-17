from __future__ import annotations

import json
from typing import Any, Awaitable, Callable

from DeepHSCode.agents.base_agent import BaseAgent


WebSearchCallable = Callable[..., Awaitable[dict[str, Any]]]


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


class ObserveAgent(BaseAgent):
    """Observe phase: validate product information and collect evidence via web search."""

    def __init__(self, *, web_search: WebSearchCallable | None = None, **kwargs) -> None:
        super().__init__(**kwargs)
        self._web_search = web_search

    async def run(
        self,
        product_description: str,
        *,
        loop_index: int,
        extra_queries: list[str] | None = None,
        temperature: float = 0.2,
        max_tokens: int = 800,
    ) -> dict[str, Any]:
        queries = [
            f"{product_description} HS code WCO explanatory notes",
            f"{product_description} customs ruling tariff classification",
            f"{product_description} declaration elements import",
            f"{product_description} HS classification example data",
        ]
        if extra_queries:
            queries.extend([q for q in extra_queries if q])

        evidence: list[dict[str, Any]] = []
        if self._web_search is not None:
            for query in queries[:6]:
                try:
                    result = await self._web_search(
                        query=query,
                        provider="duckduckgo",
                        max_results=5,
                        verbose=False,
                    )
                except Exception as exc:
                    evidence.append({"query": query, "error": str(exc), "items": []})
                    continue

                items = result.get("results", []) if isinstance(result, dict) else []
                evidence.append(
                    {
                        "query": query,
                        "items": items[:5] if isinstance(items, list) else [],
                    }
                )

        system_prompt = (
            "You are the OBSERVE module in an HS6 classification agent. "
            "Assess whether product information is complete enough for unambiguous HS6 classification "
            "under GIR principles. Return JSON only."
        )
        user_prompt = (
            "Analyze the product and evidence. Return JSON with keys: "
            "is_information_complete (bool), missing_information (list[str]), "
            "product_profile (dict), confidence (low|medium|high), "
            "recommended_queries (list[str]).\n\n"
            f"Loop: {loop_index}\n"
            f"Product Description:\n{product_description}\n\n"
            f"Evidence:\n{json.dumps(evidence, ensure_ascii=True)}"
        )

        raw = await self.call_llm(
            user_prompt=user_prompt,
            system_prompt=system_prompt,
            temperature=temperature,
            max_tokens=max_tokens,
        )
        parsed = _extract_json_object(raw)

        # Deterministic fallback if model returns non-JSON.
        if not parsed:
            words = product_description.split()
            parsed = {
                "is_information_complete": len(words) >= 3,
                "missing_information": [] if len(words) >= 3 else ["material", "use", "form"],
                "product_profile": {"raw": product_description.strip()},
                "confidence": "low",
                "recommended_queries": queries[:3],
            }

        parsed["evidence"] = evidence
        parsed["queries_used"] = queries
        return parsed

    async def process(self, *args, **kwargs):
        """Satisfy BaseAgent contract — delegates to run()."""
        return await self.run(*args, **kwargs)
