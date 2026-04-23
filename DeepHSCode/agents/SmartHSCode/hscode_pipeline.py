from __future__ import annotations

import json
import time
from typing import Any, AsyncGenerator, Awaitable, Callable

from DeepHSCode.agents.SmartHSCode.subagents.act_agent import ActAgent
from DeepHSCode.agents.SmartHSCode.subagents.learn_agent import LearnAgent
from DeepHSCode.agents.SmartHSCode.subagents.observe_agent import ObserveAgent
from DeepHSCode.agents.SmartHSCode.subagents.plan_agent import PlanAgent
from DeepHSCode.agents.SmartHSCode.subagents.summary_agent import SummaryAgent


LLMCompleteCallable = Callable[..., Awaitable[str]]
WebSearchCallable = Callable[..., Awaitable[dict[str, Any]]]


from loguru import logger

class SmartHSCodeAgent:
    """Agentic HS6 classification pipeline using Observe-Plan-Act-Learn loops."""

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
        logger.info(f"Entered SmartHSCodeAgent.__init__ with model={model}, base_url={base_url}, language={language}, max_loops={max_loops}, time_limit_seconds={time_limit_seconds}")
        self._llm_complete = llm_complete
        self.api_key = api_key
        self.base_url = base_url
        self.model = model
        self.language = language
        self._web_search_tool = web_search_tool
        self.max_loops = max(1, max_loops)
        self.time_limit_seconds = max(5, time_limit_seconds)

    def _format_output(self, state: dict[str, Any]) -> str:
        logger.info("Entered _format_output")
        return json.dumps(state, ensure_ascii=True, indent=2)

    def _build_output(
        self,
        *,
        description: str,
        final_action: dict[str, Any],
        final_observation: dict[str, Any],
        final_stop_reason: str,
        history: list[dict[str, Any]],
    ) -> dict[str, Any]:
        logger.info("Entered _build_output")
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

    def _create_subagents(self) -> tuple[ObserveAgent, PlanAgent, ActAgent, LearnAgent, SummaryAgent]:
        logger.info("Entered _create_subagents")
        _agent_kwargs = dict(
            llm_complete=self._llm_complete,
            api_key=self.api_key,
            base_url=self.base_url,
            model=self.model,
        )
        observe_agent = ObserveAgent(web_search=self._web_search_tool, **_agent_kwargs)
        plan_agent = PlanAgent(**_agent_kwargs)
        act_agent = ActAgent(**_agent_kwargs)
        learn_agent = LearnAgent()
        summary_agent = SummaryAgent()
        return observe_agent, plan_agent, act_agent, learn_agent, summary_agent

    async def stream_finding_from_proddesc(
        self,
        product_description: str,
        language: str = "en",
        temperature: float = 0.2,
        max_tokens: int = 1000,
    ) -> AsyncGenerator[dict[str, Any], None]:
        logger.info(f"Entered stream_finding_from_proddesc with product_description={product_description}, language={language}, temperature={temperature}, max_tokens={max_tokens}")
        """Stream pipeline progress events and final output for a product description."""
        description = product_description.strip()
        if not description:
            raise ValueError("product_description cannot be empty")

        observe_agent, plan_agent, act_agent, learn_agent, summary_agent = self._create_subagents()

        logger.info("Starting Observe-Plan-Act-Learn loop")
        
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

        logger.info(f"Max loops: {self.max_loops}, Time limit: {self.time_limit_seconds} seconds")


        for loop_idx in range(1, self.max_loops + 1):
            elapsed = time.monotonic() - started
            if elapsed >= self.time_limit_seconds:
                final_stop_reason = "time_limit_reached"
                break

            yield {"event": "loop_started", "data": {"loop": loop_idx, "elapsed_seconds": elapsed}}

            observation = await observe_agent.run(
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

            logger.opt(colors=True).info(f"<yellow>OBSERVATION</yellow>: is_information_complete={observation.get('is_information_complete', False)}, missing_information={observation.get('missing_information', [])}, recommended_queries={observation.get('recommended_queries', [])}")

            plan = await plan_agent.run(
                description,
                observation,
                loop_index=loop_idx,
                max_loops=self.max_loops,
                elapsed_seconds=elapsed,
                time_limit_seconds=self.time_limit_seconds,
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

            logger.opt(colors=True).info(f"<red>PLANNING</red>: should_continue={plan.get('should_continue', True)}, stop_reason={plan.get('stop_reason', '')}, next_queries={plan.get('next_queries', [])}")
           

            action = await act_agent.run(
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

            logger.opt(colors=True).info(f"<green>ACTION</green>: hs6_code={action.get('hs6_code', '')}, is_ambiguous={bool(action.get('is_ambiguous', True))}, confidence={action.get('confidence', 'low')}")  

            lesson = learn_agent.run(
                loop_index=loop_idx,
                observation=observation,
                plan=plan,
                action=action,
            )
            yield {"event": "lesson", "data": {"loop": loop_idx, **lesson}}

            logger.opt(colors=True).info(f"<blue>LESSON</blue>: {lesson}")

            step = {
                "loop": loop_idx,
                "observation": observation,
                "plan": plan,
                "action": action,
                "lesson": lesson,
            }
            history.append(step)

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

            should_continue = bool(plan.get("should_continue", True))
            if not should_continue:
                final_stop_reason = str(plan.get("stop_reason", "planner_stopped"))
                break

            next_queries = plan.get("next_queries", [])
            extra_queries = [q for q in next_queries if isinstance(q, str)]

        # Generate summary report
        summary = summary_agent.run(
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
        logger.info(f"Entered finding_from_proddesc with product_description={product_description}, language={language}, temperature={temperature}, max_tokens={max_tokens}")
        """Run non-streaming mode and return final output JSON text."""
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
