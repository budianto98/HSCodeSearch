from __future__ import annotations

from typing import Any


class LearnAgent:
    """Learn phase: summarize outcomes and derive next-step improvements."""

    def run(
        self,
        *,
        loop_index: int,
        observation: dict[str, Any],
        plan: dict[str, Any],
        action: dict[str, Any],
    ) -> dict[str, Any]:
        missing = observation.get("missing_information", [])
        next_queries = plan.get("next_queries", [])
        ambiguous = bool(action.get("is_ambiguous", True))

        lesson = {
            "loop": loop_index,
            "what_worked": "GIR-aligned decision generated" if not ambiguous else "Need more specific product attributes",
            "what_missing": missing if isinstance(missing, list) else [],
            "next_focus": next_queries[:3] if isinstance(next_queries, list) else [],
            "ready_to_exit": (not ambiguous) and not missing,
        }
        return lesson
