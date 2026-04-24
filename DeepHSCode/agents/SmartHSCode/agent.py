"""SmartHSCodeAgent —  agentic runner for HS6 classification.

Structure
---------
  CLAUDE.md            Core system context (loaded once at init)
  skills/<phase>/SKILL.md  Phase-specific prompt instructions (loaded per call)
  mcp/server/tools/    MCP tools used for web search (no tools/ subfolder here)

Loop
----
  Observe → Plan → Act → Learn  (repeat up to max_loops or time_limit_seconds)
  Summary  (deterministic, always runs once at the end)
"""
from __future__ import annotations

import asyncio
import json
import sys
import time
from pathlib import Path
from typing import Any, AsyncGenerator, Awaitable, Callable

from loguru import logger

LLMCompleteCallable = Callable[..., Awaitable[str]]
WebSearchCallable = Callable[..., Awaitable[dict[str, Any]]]

_AGENT_DIR = Path(__file__).parent


# ---------------------------------------------------------------------------
# Skill / context loaders
# ---------------------------------------------------------------------------

def _load_text(path: Path) -> str:
    """Read a text file; return empty string if it does not exist."""
    return path.read_text(encoding="utf-8") if path.exists() else ""


def _load_claude_md() -> str:
    """Load the CLAUDE.md system context for this agent."""
    return _load_text(_AGENT_DIR / "CLAUDE.md")


def _load_skill(phase: str) -> str:
    """Load skills/<phase>/SKILL.md prompt instructions."""
    return _load_text(_AGENT_DIR / "skills" / phase / "SKILL.md")


# ---------------------------------------------------------------------------
# MCP web_search bridge
# ---------------------------------------------------------------------------

def _make_mcp_web_search() -> WebSearchCallable | None:
    """Build an async web_search callable that delegates to the MCP tool.

    The MCP search module lives at mcp/server/search/ and exposes a synchronous
    ``web_search()`` function.  We wrap it with asyncio.to_thread so it can be
    awaited from the async agent loop without blocking the event loop.

    Returns None (with a warning) if the MCP package cannot be imported, so the
    agent degrades gracefully to LLM-only mode.
    """
    mcp_server_path = str(_AGENT_DIR.parents[2] / "mcp" / "server")
    if mcp_server_path not in sys.path:
        sys.path.insert(0, mcp_server_path)

    try:
        from tools.web_search import web_search as _sync_search  # type: ignore[import]
    except Exception as exc:
        logger.warning(f"MCP web_search unavailable — running without web search: {exc}")
        return None

    async def _async_search(
        query: str,
        provider: str = "perplexity",
        max_results: int = 5,
        verbose: bool = False,
        **kwargs: Any,
    ) -> dict[str, Any]:
        result = await asyncio.to_thread(
            _sync_search,
            query,
            provider=provider,
            max_results=max_results,
            verbose=verbose,
            **kwargs,
        )
        # Normalise response: MCP returns `search_results`, legacy code used `results`
        if isinstance(result, dict):
            if "search_results" in result and "results" not in result:
                result = dict(result, results=result["search_results"])
            return result
        return {"results": []}

    return _async_search


# ---------------------------------------------------------------------------
# JSON extraction helper
# ---------------------------------------------------------------------------

def _extract_json_object(text: str) -> dict[str, Any]:
    """Return the first valid JSON object found in *text*, or {}."""
    text = text.strip()
    try:
        parsed = json.loads(text)
        return parsed if isinstance(parsed, dict) else {}
    except json.JSONDecodeError:
        pass
    start, end = text.find("{"), text.rfind("}")
    if start == -1 or end <= start:
        return {}
    try:
        parsed = json.loads(text[start : end + 1])
        return parsed if isinstance(parsed, dict) else {}
    except json.JSONDecodeError:
        return {}


# ---------------------------------------------------------------------------
# SmartHSCodeAgent
# ---------------------------------------------------------------------------

class SmartHSCodeAgent:
    """Agentic HS6 classification pipeline using an Observe-Plan-Act-Learn loop.

    Skills are loaded from ``skills/<phase>/SKILL.md``.
    System context is loaded from ``CLAUDE.md``.
    Web search is delegated to the MCP tools in ``mcp/server/``.

    Parameters
    ----------
    llm_complete:
        Async callable with signature
        ``(*, prompt, system_prompt, model, api_key, base_url,
           temperature, max_tokens) -> str``.
    api_key, base_url, model:
        LLM connection settings (forwarded to *llm_complete*).
    language:
        Response language — ``"en"`` or ``"zh"``.
    web_search_tool:
        Optional override for the async web-search callable.  When omitted
        the agent tries to load the MCP tool automatically.
    max_loops:
        Maximum number of Observe-Plan-Act-Learn iterations.
    time_limit_seconds:
        Hard wall-clock limit for the whole pipeline.
    """

    def __init__(
        self,
        llm_complete: LLMCompleteCallable,
        api_key: str = "",
        base_url: str = "",
        model: str = "",
        language: str = "en",
        web_search_tool: WebSearchCallable | None = None,
        max_loops: int = 3,
        time_limit_seconds: int = 45,
    ) -> None:
        logger.info(
            f"SmartHSCodeAgent init: model={model}, language={language}, "
            f"max_loops={max_loops}, time_limit={time_limit_seconds}s"
        )
        self._llm_complete = llm_complete
        self.api_key = api_key
        self.base_url = base_url
        self.model = model
        self.language = language
        self._web_search = web_search_tool or _make_mcp_web_search()
        self.max_loops = max(1, max_loops)
        self.time_limit_seconds = max(5, time_limit_seconds)
        self._claude_md = _load_claude_md()

    # ------------------------------------------------------------------
    # LLM helper
    # ------------------------------------------------------------------

    async def _call_llm(
        self,
        *,
        system_prompt: str,
        user_prompt: str,
        temperature: float,
        max_tokens: int,
    ) -> str:
        return await self._llm_complete(
            prompt=user_prompt,
            system_prompt=system_prompt,
            model=self.model,
            api_key=self.api_key,
            base_url=self.base_url,
            temperature=temperature,
            max_tokens=max_tokens,
        )

    def _system(self, phase: str, extra: str = "") -> str:
        """Build a system prompt from CLAUDE.md + skill + optional extra."""
        parts = [self._claude_md, _load_skill(phase)]
        if extra:
            parts.append(extra)
        return "\n\n".join(p for p in parts if p)

    # ------------------------------------------------------------------
    # Observe phase
    # ------------------------------------------------------------------

    async def _observe(
        self,
        product_description: str,
        *,
        loop_index: int,
        extra_queries: list[str],
        temperature: float,
        max_tokens: int,
    ) -> dict[str, Any]:
        queries: list[str] = [
            f"{product_description} HS code WCO explanatory notes",
            f"{product_description} customs ruling tariff classification",
            f"{product_description} declaration elements import",
            f"{product_description} HS classification example data",
        ]
        if extra_queries:
            queries.extend(q for q in extra_queries if q)

        evidence: list[dict[str, Any]] = []
        logger.opt(colors=True).info(
            f"<yellow>OBSERVE</yellow>: web_search={'Yes' if self._web_search else 'NO'}, "
            f"queries={queries[:3]}"
        )

        if self._web_search is not None:
            for query in queries[:6]:
                try:
                    logger.opt(colors=True).info(f"<yellow>WEB SEARCH</yellow>: query={query!r} (starting)")
                    result = await self._web_search(
                        query=query,
                        provider="perplexity",
                        max_results=5,
                        verbose=False,
                    )
                    items = result.get("results", []) if isinstance(result, dict) else []
                    evidence.append(
                        {"query": query, "items": items[:5] if isinstance(items, list) else []}
                    )
                    logger.opt(colors=True).info(f"<yellow>WEB SEARCH</yellow>: query={query!r}, results={len(items) if isinstance(items, list) else 0}")
                except Exception as exc:
                    logger.opt(colors=True).info(f"<yellow>WEB SEARCH</yellow>: query={query!r}, error={str(exc)}")
                    evidence.append({"query": query, "error": str(exc), "items": []})

        raw = await self._call_llm(
            system_prompt=self._system("observe", "You are the OBSERVE phase. Return JSON only."),
            user_prompt=(
                "Analyze the product and evidence. Return JSON with keys: "
                "is_information_complete (bool), missing_information (list[str]), "
                "product_profile (dict), confidence (low|medium|high), "
                "recommended_queries (list[str]).\n\n"
                f"Loop: {loop_index}\n"
                f"Product Description:\n{product_description}\n\n"
                f"Evidence:\n{json.dumps(evidence, ensure_ascii=True)}"
            ),
            temperature=temperature,
            max_tokens=max_tokens,
        )
        parsed = _extract_json_object(raw)

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

    # ------------------------------------------------------------------
    # Plan phase
    # ------------------------------------------------------------------

    async def _plan(
        self,
        product_description: str,
        observation: dict[str, Any],
        *,
        loop_index: int,
        elapsed_seconds: float,
        temperature: float,
        max_tokens: int,
    ) -> dict[str, Any]:
        loops_left = self.max_loops - loop_index
        seconds_left = max(0, self.time_limit_seconds - int(elapsed_seconds))

        raw = await self._call_llm(
            system_prompt=self._system("plan", "You are the PLAN phase. Return JSON only."),
            user_prompt=(
                "Return JSON keys: should_continue (bool), stop_reason (string), "
                "next_queries (list[str]), focus_points (list[str]), "
                "plan_steps (list[str]).\n\n"
                f"Product Description:\n{product_description}\n\n"
                f"Observation:\n{json.dumps(observation, ensure_ascii=True)}\n\n"
                f"Loop Index: {loop_index}\n"
                f"Max Loops: {self.max_loops}\n"
                f"Loops Left: {loops_left}\n"
                f"Seconds Left: {seconds_left}"
            ),
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

    # ------------------------------------------------------------------
    # Act phase
    # ------------------------------------------------------------------

    async def _act(
        self,
        product_description: str,
        observation: dict[str, Any],
        plan: dict[str, Any],
        *,
        temperature: float,
        max_tokens: int,
    ) -> dict[str, Any]:
        raw = await self._call_llm(
            system_prompt=self._system(
                "act",
                "You are the ACT phase. Apply GIR logic. Return ONE HS6 code. Return JSON only.",
            ),
            user_prompt=(
                "Return JSON keys: hs6_code (string), hs_description (string), "
                "is_ambiguous (bool), ambiguity_reason (string), "
                "gir_analysis (list[str]), declaration_elements (list[object]), "
                "reasoning (string), confidence (low|medium|high).\n\n"
                "Each declaration_elements item: name, value, source, required(bool).\n\n"
                f"Product Description:\n{product_description}\n\n"
                f"Observation:\n{json.dumps(observation, ensure_ascii=True)}\n\n"
                f"Plan:\n{json.dumps(plan, ensure_ascii=True)}"
            ),
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

    # ------------------------------------------------------------------
    # Learn phase — deterministic, no LLM call
    # ------------------------------------------------------------------

    def _learn(
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
        return {
            "loop": loop_index,
            "what_worked": (
                "GIR-aligned decision generated"
                if not ambiguous
                else "Need more specific product attributes"
            ),
            "what_missing": missing if isinstance(missing, list) else [],
            "next_focus": next_queries[:3] if isinstance(next_queries, list) else [],
            "ready_to_exit": (not ambiguous) and not missing,
        }

    # ------------------------------------------------------------------
    # Summary phase — deterministic, no LLM call
    # ------------------------------------------------------------------

    def _summarize(
        self,
        *,
        product_description: str,
        observation: dict[str, Any],
        action: dict[str, Any],
    ) -> dict[str, Any]:
        declaration_elements = (
            action.get("declaration_elements")
            or observation.get("declaration_elements")
            or []
        )
        if declaration_elements and isinstance(declaration_elements, list):
            declaration_text = "\n".join(
                f"- {e}" if isinstance(e, str)
                else f"- {e.get('name', 'Unknown')}: {e.get('value', '')}"
                for e in declaration_elements
                if e
            )
        else:
            declaration_text = "N/A"

        hs6_code = action.get("hs6_code", "")
        is_ambiguous = bool(action.get("is_ambiguous", True))
        confidence = action.get("confidence", "low")
        ambiguity_reason = action.get("ambiguity_reason", "")
        gir_analysis = action.get("gir_analysis", [])
        reasoning = action.get("reasoning", "")

        candidates_section = ""
        if hs6_code:
            candidates_section += f"**Primary Candidate:** `{hs6_code}`\n\n"
            candidates_section += f"**Confidence:** {confidence}\n\n"

        if is_ambiguous:
            candidates_section += "**Ambiguity Status:** ⚠️ Ambiguous\n\n"
            if ambiguity_reason:
                candidates_section += f"**Reason:** {ambiguity_reason}\n\n"
        else:
            candidates_section += "**Ambiguity Status:** ✅ Unambiguous\n\n"

        if reasoning:
            candidates_section += f"**Reasoning:** {reasoning}\n\n"

        if gir_analysis and isinstance(gir_analysis, list):
            candidates_section += "**GIR Analysis:**\n"
            for rule in gir_analysis:
                if isinstance(rule, str):
                    candidates_section += f"- {rule}\n"
                elif isinstance(rule, dict) and "rule" in rule:
                    candidates_section += f"- {rule['rule']}\n"
            candidates_section += "\n"

        markdown_report = (
            "# HS Code Classification Report\n\n"
            f"## Product Description\n{product_description}\n\n"
            f"### Declaration Elements\n{declaration_text}\n\n"
            f"## HS Code Candidates\n{candidates_section}"
            "---\n*Generated by SmartHSCodeAgent*\n"
        )

        return {
            "markdown": markdown_report,
            "product_description": product_description,
            "declaration_elements": declaration_elements,
            "hs6_code": hs6_code,
            "is_ambiguous": is_ambiguous,
            "confidence": confidence,
        }

    # ------------------------------------------------------------------
    # Output helpers
    # ------------------------------------------------------------------

    def _build_output(
        self,
        *,
        description: str,
        final_action: dict[str, Any],
        final_observation: dict[str, Any],
        final_stop_reason: str,
        history: list[dict[str, Any]],
    ) -> dict[str, Any]:
        return {
            "product_description": description,
            "final": {
                "hs6_code": final_action.get("hs6_code", ""),
                "matched_declaration_elements": final_action.get("declaration_elements", []),
                "hs_description": final_action.get("hs_description", ""),
                "is_ambiguous": bool(final_action.get("is_ambiguous", True)),
                "ambiguity_reason": final_action.get("ambiguity_reason", ""),
                "gir_analysis": final_action.get("gir_analysis", []),
                "confidence": final_action.get("confidence", "low"),
            },
            "criteria_check": {
                "information_complete": bool(final_observation.get("is_information_complete", False)),
                "gir_followed": bool(final_action.get("gir_analysis")),
                "hs6_unambiguous": not bool(final_action.get("is_ambiguous", True)),
            },
            "stop_reason": final_stop_reason,
            "loops_used": len(history),
            "time_limit_seconds": self.time_limit_seconds,
            "history": history,
        }

    def _format_output(self, state: dict[str, Any]) -> str:
        return json.dumps(state, ensure_ascii=True, indent=2)

    # ------------------------------------------------------------------
    # Public API
    # ------------------------------------------------------------------

    async def stream_finding_from_proddesc(
        self,
        product_description: str,
        language: str = "en",
        temperature: float = 0.2,
        max_tokens: int = 1000,
    ) -> AsyncGenerator[dict[str, Any], None]:
        """Stream pipeline progress events and final output for a product description.

        Yields dicts with ``event`` and ``data`` keys:
          start | loop_started | observation | plan | action | lesson | summary | final
        """
        description = product_description.strip()
        if not description:
            raise ValueError("product_description cannot be empty")

        logger.info(
            f"stream_finding_from_proddesc: description={description!r}, "
            f"language={language}, temperature={temperature}, max_tokens={max_tokens}"
        )

        started = time.monotonic()
        history: list[dict[str, Any]] = []
        extra_queries: list[str] = []

        final_action: dict[str, Any] = {
            "hs6_code": "",
            "hs_description": "",
            "is_ambiguous": True,
            "ambiguity_reason": "no_decision",
            "gir_analysis": [],
            "declaration_elements": [],
            "reasoning": "",
            "confidence": "low",
        }
        final_observation: dict[str, Any] = {}
        final_stop_reason = "max_loops_reached"

        yield {
            "event": "start",
            "data": {
                "product_description": description,
                "max_loops": self.max_loops,
                "time_limit_seconds": self.time_limit_seconds,
                "language": language,
            },
        }

        for loop_idx in range(1, self.max_loops + 1):
            elapsed = time.monotonic() - started
            if elapsed >= self.time_limit_seconds:
                final_stop_reason = "time_limit_reached"
                break

            yield {"event": "loop_started", "data": {"loop": loop_idx, "elapsed_seconds": elapsed}}

            # ---- Observe ----
            observation = await self._observe(
                description,
                loop_index=loop_idx,
                extra_queries=extra_queries,
                temperature=temperature,
                max_tokens=min(max_tokens, 900),
            )
            yield {
                "event": "observation",
                "data": {
                    "loop": loop_idx,
                    "is_information_complete": bool(observation.get("is_information_complete", False)),
                    "missing_information": observation.get("missing_information", []),
                },
            }
            logger.opt(colors=True).info(
                f"<yellow>OBSERVATION</yellow>: complete={observation.get('is_information_complete')}, "
                f"missing={observation.get('missing_information', [])}"
            )

            # ---- Plan ----
            plan = await self._plan(
                description,
                observation,
                loop_index=loop_idx,
                elapsed_seconds=elapsed,
                temperature=temperature,
                max_tokens=min(max_tokens, 800),
            )
            yield {
                "event": "plan",
                "data": {
                    "loop": loop_idx,
                    "should_continue": bool(plan.get("should_continue", True)),
                    "stop_reason": plan.get("stop_reason", ""),
                },
            }
            logger.opt(colors=True).info(
                f"<red>PLANNING</red>: continue={plan.get('should_continue')}, "
                f"reason={plan.get('stop_reason', '')}"
            )

            # ---- Act ----
            action = await self._act(
                description,
                observation,
                plan,
                temperature=temperature,
                max_tokens=max_tokens,
            )
            yield {
                "event": "action",
                "data": {
                    "loop": loop_idx,
                    "hs6_code": action.get("hs6_code", ""),
                    "is_ambiguous": bool(action.get("is_ambiguous", True)),
                    "confidence": action.get("confidence", "low"),
                },
            }
            logger.opt(colors=True).info(
                f"<green>ACTION</green>: hs6={action.get('hs6_code', '')}, "
                f"ambiguous={action.get('is_ambiguous', True)}, "
                f"conf={action.get('confidence', 'low')}"
            )

            # ---- Learn ----
            lesson = self._learn(
                loop_index=loop_idx,
                observation=observation,
                plan=plan,
                action=action,
            )
            yield {"event": "lesson", "data": {"loop": loop_idx, **lesson}}
            logger.opt(colors=True).info(f"<blue>LESSON</blue>: {lesson}")

            history.append(
                {"loop": loop_idx, "observation": observation, "plan": plan,
                 "action": action, "lesson": lesson}
            )
            final_action = action
            final_observation = observation

            is_complete = bool(observation.get("is_information_complete", False))
            is_ambiguous = bool(action.get("is_ambiguous", True))
            has_hs6 = isinstance(action.get("hs6_code"), str) and len(action.get("hs6_code", "")) == 6

            if is_complete and has_hs6 and not is_ambiguous:
                final_stop_reason = "success"
                break
            if loop_idx >= self.max_loops:
                final_stop_reason = "max_loops_reached"
                break
            if not bool(plan.get("should_continue", True)):
                final_stop_reason = str(plan.get("stop_reason", "planner_stopped"))
                break

            extra_queries = [q for q in plan.get("next_queries", []) if isinstance(q, str)]

        # ---- Summary ----
        summary = self._summarize(
            product_description=description,
            observation=final_observation,
            action=final_action,
        )
        yield {"event": "summary", "data": summary}

        output = self._build_output(
            description=description,
            final_action=final_action,
            final_observation=final_observation,
            final_stop_reason=final_stop_reason,
            history=history,
        )
        output["summary_markdown"] = summary.get("markdown", "")
        yield {"event": "final", "data": output}

    async def finding_from_proddesc(
        self,
        product_description: str,
        language: str = "en",
        temperature: float = 0.2,
        max_tokens: int = 1000,
    ) -> str:
        """Non-streaming mode — run the full pipeline and return final JSON string."""
        final_output: dict[str, Any] | None = None
        async for event in self.stream_finding_from_proddesc(
            product_description=product_description,
            language=language,
            temperature=temperature,
            max_tokens=max_tokens,
        ):
            if event.get("event") == "final":
                data = event.get("data")
                if isinstance(data, dict):
                    final_output = data

        if final_output is None:
            raise RuntimeError("stream_finding_from_proddesc did not emit a final output")
        return self._format_output(final_output)
