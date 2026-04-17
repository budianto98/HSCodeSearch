from __future__ import annotations

import asyncio
import json

import pytest

from DeepHSCode.agents.SmartHSCode.hscode_pipeline import SmartHSCodeAgent


def _set_llm_env(monkeypatch: pytest.MonkeyPatch) -> None:
    monkeypatch.setenv("LLM_MODEL", "test-model")
    monkeypatch.setenv("LLM_HOST", "http://localhost")
    monkeypatch.setenv("LLM_API_KEY", "test-key")


def test_smart_hscode_agent_instantiates(monkeypatch: pytest.MonkeyPatch) -> None:
    async def dummy_llm_complete(**kwargs):
        return "ok"

    agent = SmartHSCodeAgent(llm_complete=dummy_llm_complete, model="m", base_url="http://x")

    assert agent.model == "m"
    assert agent.base_url == "http://x"
    assert agent.max_loops == 3
    assert agent.time_limit_seconds == 45


def test_process_calls_llm_with_formatted_prompt(monkeypatch: pytest.MonkeyPatch) -> None:
    _set_llm_env(monkeypatch)
    call_count = {"n": 0}

    async def fake_llm_complete(**kwargs):
        call_count["n"] += 1
        prompt = kwargs.get("prompt", "")
        if "OBSERVE module" in kwargs.get("system_prompt", ""):
            return '{"is_information_complete": true, "missing_information": [], "product_profile": {"name": "phone"}, "confidence": "high", "recommended_queries": []}'
        if "PLAN module" in kwargs.get("system_prompt", ""):
            return '{"should_continue": false, "stop_reason": "ready", "next_queries": [], "focus_points": [], "plan_steps": ["done"]}'
        if "ACT module" in kwargs.get("system_prompt", ""):
            assert "Samsung Galaxy S8 smartphone" in prompt
            return '{"hs6_code": "851713", "hs_description": "Smartphones", "is_ambiguous": false, "ambiguity_reason": "", "gir_analysis": ["GIR1"], "declaration_elements": [{"name": "product_name", "value": "Samsung Galaxy S8 smartphone", "source": "input", "required": true}], "reasoning": "fit", "confidence": "high"}'
        return "{}"

    agent = SmartHSCodeAgent(llm_complete=fake_llm_complete, model="m", base_url="http://x")
    raw = asyncio.run(
        agent.finding_from_proddesc(
            "  Samsung Galaxy S8 smartphone  ",
            temperature=0.3,
            max_tokens=321,
        )
    )
    result = json.loads(raw)

    assert result["final"]["hs6_code"] == "851713"
    assert result["final"]["is_ambiguous"] is False
    assert result["criteria_check"]["information_complete"] is True
    assert result["stop_reason"] == "success"
    assert call_count["n"] >= 3


def test_process_rejects_empty_product_description(monkeypatch: pytest.MonkeyPatch) -> None:
    _set_llm_env(monkeypatch)

    async def dummy_llm_complete(**kwargs):
        return "ok"

    agent = SmartHSCodeAgent(llm_complete=dummy_llm_complete, model="m", base_url="http://x")

    with pytest.raises(ValueError, match="product_description cannot be empty"):
        asyncio.run(agent.finding_from_proddesc("   "))


def test_process_uses_fallback_template_when_missing(monkeypatch: pytest.MonkeyPatch) -> None:
    _set_llm_env(monkeypatch)
    calls: list[dict] = []

    async def fake_llm_complete(**kwargs):
        calls.append(kwargs)
        if "OBSERVE module" in kwargs.get("system_prompt", ""):
            return "not-json"
        if "PLAN module" in kwargs.get("system_prompt", ""):
            return "not-json"
        if "ACT module" in kwargs.get("system_prompt", ""):
            return '{"hs6_code": "", "hs_description": "", "is_ambiguous": true, "ambiguity_reason": "insufficient data", "gir_analysis": [], "declaration_elements": [], "reasoning": "n/a", "confidence": "low"}'
        return "{}"

    agent = SmartHSCodeAgent(llm_complete=fake_llm_complete, model="m", base_url="http://x")
    # No .prompts attribute on plain class; fallback path exercised via non-JSON LLM responses.

    raw = asyncio.run(agent.finding_from_proddesc("Widget"))
    result = json.loads(raw)

    assert result["product_description"] == "Widget"
    assert result["final"]["is_ambiguous"] is True
    assert result["loops_used"] >= 1
    assert len(calls) >= 3


def test_process_stops_after_max_loops(monkeypatch: pytest.MonkeyPatch) -> None:
    _set_llm_env(monkeypatch)

    async def fake_llm_complete(**kwargs):
        if "OBSERVE module" in kwargs.get("system_prompt", ""):
            return '{"is_information_complete": false, "missing_information": ["material"], "product_profile": {}, "confidence": "low", "recommended_queries": ["query"]}'
        if "PLAN module" in kwargs.get("system_prompt", ""):
            return '{"should_continue": true, "stop_reason": "need_more_information", "next_queries": ["q1"], "focus_points": ["material"], "plan_steps": ["step"]}'
        if "ACT module" in kwargs.get("system_prompt", ""):
            return '{"hs6_code": "", "hs_description": "", "is_ambiguous": true, "ambiguity_reason": "missing data", "gir_analysis": [], "declaration_elements": [], "reasoning": "", "confidence": "low"}'
        return "{}"

    agent = SmartHSCodeAgent(llm_complete=fake_llm_complete, model="m", base_url="http://x", max_loops=2)
    raw = asyncio.run(agent.finding_from_proddesc("generic machine"))
    result = json.loads(raw)

    assert result["loops_used"] == 2
    assert result["stop_reason"] == "max_loops_reached"


def test_stream_finding_from_proddesc_emits_events() -> None:
    async def fake_llm_complete(**kwargs):
        if "OBSERVE module" in kwargs.get("system_prompt", ""):
            return '{"is_information_complete": true, "missing_information": [], "product_profile": {"name": "widget"}, "confidence": "high", "recommended_queries": []}'
        if "PLAN module" in kwargs.get("system_prompt", ""):
            return '{"should_continue": false, "stop_reason": "ready", "next_queries": [], "focus_points": [], "plan_steps": ["done"]}'
        if "ACT module" in kwargs.get("system_prompt", ""):
            return '{"hs6_code": "851713", "hs_description": "Smartphones", "is_ambiguous": false, "ambiguity_reason": "", "gir_analysis": ["GIR1"], "declaration_elements": [{"name": "product_name", "value": "widget", "source": "input", "required": true}], "reasoning": "fit", "confidence": "high"}'
        return "{}"

    async def _collect_events() -> list[dict]:
        agent = SmartHSCodeAgent(llm_complete=fake_llm_complete, model="m", base_url="http://x")
        events: list[dict] = []
        async for event in agent.stream_finding_from_proddesc("widget"):
            events.append(event)
        return events

    events = asyncio.run(_collect_events())
    event_names = [event.get("event") for event in events]

    assert event_names[0] == "start"
    assert "observation" in event_names
    assert "plan" in event_names
    assert "action" in event_names
    assert event_names[-1] == "final"
    assert events[-1]["data"]["final"]["hs6_code"] == "851713"
