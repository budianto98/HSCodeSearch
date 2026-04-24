"""Public entry points for the tool layer."""

from __future__ import annotations

import importlib

_LAZY_EXPORTS = {
    "rag_search": (".rag_tool", "rag_search"),
    "web_search": (".web_search", "web_search"),
    "RAGTool": (".builtin", "RAGTool"),
    "WebSearchTool": (".builtin", "WebSearchTool"),
    "ToolPromptComposer": (".prompting", "ToolPromptComposer"),
    "load_prompt_hints": (".prompting", "load_prompt_hints"),
}

__all__ = sorted(_LAZY_EXPORTS)


def __getattr__(name: str):
    if name not in _LAZY_EXPORTS:
        raise AttributeError(f"module {__name__!r} has no attribute {name!r}")

    module_name, attr_name = _LAZY_EXPORTS[name]
    module = importlib.import_module(module_name, __name__)
    value = getattr(module, attr_name)
    globals()[name] = value
    return value

# For HSCodeSearch project, available tools are:
# - RAGTool/rag_search: Search knowledge bases
# - WebSearchTool/web_search: Search the web
