from pathlib import Path
from typing import Any, Dict, List
import re
import json
import uuid
from datetime import datetime, UTC
from loguru import logger
import pprint
try:
    from .stages_loader import StagesLoader
except ImportError:
    from stages_loader import StagesLoader

# from .tools import load_tools, call_tool
from DeepHSCode.agents.hscode_orchestrator.tools.tool_registry import tool_registry


class RunTracer:
    """Write agent run events as JSONL for step-level input/output tracing."""

    def __init__(self, agent_name: str, traces_dir: Path) -> None:
        self.agent_name = agent_name
        self.agent_run_id = uuid.uuid4().hex
        self.started_at = datetime.now(UTC)
        self.date_str = self.started_at.strftime("%Y%m%d")
        self.traces_dir = traces_dir
        self.traces_dir.mkdir(parents=True, exist_ok=True)
        self.file_path = self.traces_dir / f"{self.date_str}_{self.agent_run_id}.jsonl"

    def write_event(self, event: Dict[str, Any]) -> None:
        payload = {
            "timestamp": datetime.now(UTC).isoformat(timespec="milliseconds").replace("+00:00", "Z"),
            "agent_name": self.agent_name,
            "agent_run_id": self.agent_run_id,
            **event,
        }
        with self.file_path.open("a", encoding="utf-8") as fh:
            fh.write(json.dumps(payload, ensure_ascii=False, default=str) + "\n")


class PipelineAgent:
    """Pipeline agent that loads INITIAL stage and prints step names in workflow order."""

    def __init__(self) -> None:
        self.base_dir   = Path(__file__).resolve().parent
        self.stage_file = self.base_dir / "stages" / "INITIAL" / "stage.md"
        self.loader     = StagesLoader(self.stage_file)
        self.stage_data = self.loader.load()
        self.project_root = self.base_dir.parents[2]
        self.traces_dir = self.project_root / "traces"
        # print("============ DATA LOADED ============")
        # pprint.pprint(self.stage_data["stage"])
        # print()
        # pprint.pprint(self.stage_data["plan"])

        # self.tools_registry = ToolRegistry()

    

    def process(self, input_text: str) -> Dict[str, Any]:
        """Run INITIAL stage workflow and return a structured report context."""
        tracer = RunTracer(agent_name=self.__class__.__name__, traces_dir=self.traces_dir)

        stage = self.stage_data.get("stage", {})
        context: Dict[str, Any] = {
            "input": input_text,
            "name": stage.get("meta", {}).get("name", ""),
            "description": stage.get("meta", {}).get("description", ""),
            "workflow": stage.get("workflow", []),
            "output": stage.get("output", []),
            "agent_run_id": tracer.agent_run_id,
            "trace_file": str(tracer.file_path),
        }

        tracer.write_event(
            {
                "event": "run_start",
                "stage_name": context["name"],
                "stage_description": context["description"],
                "pipeline_input": input_text,
            }
        )

        # print(f"Starting PipelineAgent: stage={context['stage']!r} workflow={context['workflow']!r}")

        ctx_details = {
            "Plan": self.stage_data.get("plan", {}),
            "HSCodeDiscovery": self.stage_data.get("hscode_discovery", {}),
            "ProductElementDiscovery": self.stage_data.get("product_element_discovery", {}),
            "HSCodeMatching": self.stage_data.get("hscode_matching", {}),
            "HSCodeProductMatching": self.stage_data.get("hscode_matching", {}),
            "Review": self.stage_data.get("review", {}),
        }

        messages: List[Dict[str, Any]] = []
        previous_output: Any = context["input"]

        for step_index, workflow_line in enumerate(context["workflow"], start=1):
            match       = re.search(r"\[(.+?)\]", workflow_line)
            step_name   = match.group(1).strip() if match else workflow_line
            step_script = self.loader.load_script(step_name)

            step_ctx = ctx_details.get(step_name, {})

            msg: Dict[str, Any] = {
                "input": previous_output,
                "name": step_name,
                "goal": step_ctx.get("goal", ""),
                "instructions": step_ctx.get("instructions", []),
                "expected_output": step_ctx.get("expected_output", ""),
            }

            tracer.write_event(
                {
                    "event": "step_start",
                    "step_index": step_index,
                    "step_name": step_name,
                    "input": msg["input"],
                }
            )

            try:
                msg["output"] = step_script.run(msg, toolregistry=tool_registry)
                tracer.write_event(
                    {
                        "event": "step_end",
                        "step_index": step_index,
                        "step_name": step_name,
                        "input": msg["input"],
                        "output": msg["output"],
                    }
                )
            except Exception as exc:
                logger.exception(f"Step '{step_name}' failed")
                msg["output"] = {
                    "step": step_name,
                    "error": str(exc),
                }
                tracer.write_event(
                    {
                        "event": "step_error",
                        "step_index": step_index,
                        "step_name": step_name,
                        "input": msg["input"],
                        "error": str(exc),
                    }
                )

            logger.opt(colors=True).info(f"<RED>Output from step '{step_name}':</RED>\n")
            # pprint.pprint(msg["output"])

            messages.append(msg)
            previous_output = msg["output"]

        context["steps"] = messages
        context["final_report"] = messages[-1]["output"] if messages else {}

        tracer.write_event(
            {
                "event": "run_end",
                "total_steps": len(messages),
                "final_report": context["final_report"],
            }
        )

        return context


if __name__ == "__main__":
    agent = PipelineAgent()
    # output = agent.process("Live Pig 50kg")
    output = agent.process("Smart watch with heart rate monitor and GPS features")
    print(output)
