from pathlib import Path
from typing import Any, Dict, List
import importlib.util
import re

from ruamel.yaml import YAML


class StagesLoader:
    """Load one stage directory of markdown files with workflow and step definitions."""

    STEP_FILES = {
        "plan": ["plan.md"],
        "hscode_discovery": ["hscode_discovery.md"],
        "product_element_discovery": ["product_element_discovery.md"],
        "hscode_matching": ["hscode_matching.md"],
        "review": ["review.md", "review.me"],
    }

    def __init__(self, stage_md_path: str | Path) -> None:
        self.stage_md_path = Path(stage_md_path)
        self.stage_dir = self.stage_md_path.parent
        # .../hscode_orchestrator/stages/INITIAL/stage.md -> .../hscode_orchestrator/step
        self.steps_dir = self.stage_md_path.parents[2] / "step"
        self.yaml = YAML(typ="safe")

    @staticmethod
    def _normalize_key(text: str) -> str:
        return "".join(ch for ch in text.lower() if ch.isalnum())

    def _split_frontmatter(self, text: str) -> tuple[str, str]:
        lines = text.strip().splitlines()
        if not lines:
            return "", ""

        if lines[0].strip() != "---":
            return "", text.strip()

        sep_idx = -1
        for i, line in enumerate(lines):
            if i > 0 and line.strip() == "---":
                sep_idx = i
                break

        if sep_idx <= 0:
            raise ValueError("invalid frontmatter: missing second '---'")

        frontmatter_text = "\n".join(lines[1:sep_idx]).strip()
        body = "\n".join(lines[sep_idx + 1 :]).strip()
        return frontmatter_text, body

    def _parse_sections(self, body: str) -> Dict[str, str]:
        sections: Dict[str, str] = {}
        matches = list(re.finditer(r"(?m)^#{1,6}\s+(.+?)\s*$", body))
        if not matches:
            return sections

        for i, match in enumerate(matches):
            heading = match.group(1).strip().lower()
            content_start = match.end()
            content_end = matches[i + 1].start() if i + 1 < len(matches) else len(body)
            content = body[content_start:content_end].strip()
            sections[heading] = content

        return sections

    @staticmethod
    def _as_lines(content: str) -> List[str]:
        return [line.strip() for line in content.splitlines() if line.strip()]

    def parse_skill_like_md(self, text: str) -> Dict[str, Any]:
        frontmatter_text, body = self._split_frontmatter(text)

        meta: Dict[str, Any] = {}
        if frontmatter_text:
            loaded = self.yaml.load(frontmatter_text)
            if isinstance(loaded, dict):
                meta = dict(loaded)

        parsed = {
            "meta": meta,
            "overview": "",
            "prerequisites": "",
            "workflow": [],
            "guardrails": [],
            "expected_output": "",
        }

        sections = self._parse_sections(body)
        for heading, content in sections.items():
            if "overview" in heading:
                parsed["overview"] = content
            elif "prerequisites" in heading or "when to activate" in heading:
                parsed["prerequisites"] = content
            elif "workflow" in heading or "steps" in heading or "process" in heading:
                parsed["workflow"] = self._as_lines(content)
            elif "guardrails" in heading or "constraints" in heading:
                parsed["guardrails"] = self._as_lines(content)
            elif "expected output" in heading:
                parsed["expected_output"] = content
            else:
                key = heading.strip()
                parsed[key] = self._as_lines(content)

        return parsed

    def _parse_file(self, path: Path) -> Dict[str, Any]:
        text = path.read_text(encoding="utf-8")
        return self.parse_skill_like_md(text)

    def load(self) -> Dict[str, Any]:
        data: Dict[str, Any] = {
            "stage": self._parse_file(self.stage_md_path),
        }
        for key, candidates in self.STEP_FILES.items():
            file_path = None
            for filename in candidates:
                candidate = self.stage_dir / filename
                if candidate.exists():
                    file_path = candidate
                    break

            if file_path is None:
                expected = ", ".join(candidates)
                raise FileNotFoundError(
                    f"Missing stage step markdown file for '{key}'. Expected one of: {expected}"
                )

            data[key] = self._parse_file(file_path)
        return data

    def load_script(self, step_name: str):
        """Load script.py from step/<step_name>/script.py and return module."""
        script_path = self.steps_dir / step_name / "script.py"
        if not script_path.exists():
            raise FileNotFoundError(f"Missing step script: {script_path}")

        module_name = f"stage_step_script_{step_name}"
        spec = importlib.util.spec_from_file_location(module_name, script_path)
        if spec is None or spec.loader is None:
            raise ImportError(f"Cannot load step script module from: {script_path}")

        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)

        if not hasattr(module, "run") or not callable(module.run):
            raise AttributeError(f"Step script must define callable run(config): {script_path}")

        return module
