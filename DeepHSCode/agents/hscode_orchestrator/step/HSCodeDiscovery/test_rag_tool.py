from __future__ import annotations

import argparse
import json

from DeepHSCode.agents.hscode_orchestrator.tools.tool_registry import tool_registry
from DeepHSCode.tools.lightrag_query_tool import query_knowledge_base, list_knowledge_bases

def main() -> None:
    parser = argparse.ArgumentParser(description="Run a simple LightRAG tool query.")
    parser.add_argument(
        "--kb",
        default="WCO_2022B",
        help="Knowledge base name to query.",
    )
    parser.add_argument(
        "--query",
        default="what is hs code of live pig?",
        help="Query text to send to the LightRAG tool.",
    )
    parser.add_argument(
        "--mode",
        default="naive",
        help="LightRAG query mode.",
    )
    args = parser.parse_args()

    # print(list_knowledge_bases())
    kbs_tool = tool_registry.get_tool("list_kbs") # Test listing available knowledge bases
    kbs = kbs_tool.run({})
    print("Available Knowledge Bases: ", kbs)
    
    rag_tool = tool_registry.get_tool("lightrag_query")

    
    if rag_tool is None:
        raise RuntimeError("Tool 'lightrag_query' is not registered.")

    print(
        json.dumps(
            {
                "tool_found": True,
                "kb": args.kb,
                "query": args.query,
                "mode": args.mode,
            },
            indent=2,
        )
    )
    result = rag_tool.run({"KB": args.kb, "query": args.query, "mode": args.mode})
    print("\n=== Tool Output ===")
    print(result)


if __name__ == "__main__":
    main()