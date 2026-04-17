"""
Configuration Service
=====================

Provides project-level constants and utilities shared across DeepHSCode services.
"""

from pathlib import Path

# PROJECT_ROOT: the workspace root (four levels up from this file:
#   DeepHSCode/services/config/__init__.py → services/config → services → DeepHSCode → root)
PROJECT_ROOT: Path = Path(__file__).resolve().parent.parent.parent.parent

_LANG_ALIASES: dict[str, str] = {
    "zh": "zh",
    "cn": "zh",
    "chinese": "zh",
    "en": "en",
    "english": "en",
}


def parse_language(language: str) -> str:
    """Normalise a language string to a canonical code ('zh' or 'en')."""
    return _LANG_ALIASES.get(language.lower().strip(), "en")


__all__ = ["PROJECT_ROOT", "parse_language"]
