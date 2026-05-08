from typing import Any, Dict, List
import json
import re


def _extract_json(text: str) -> Dict[str, Any]:
    cleaned = str(text).strip()
    cleaned = re.sub(r"<think>.*?</think>", "", cleaned, flags=re.DOTALL).strip()
    cleaned = re.sub(r"^```(?:json)?", "", cleaned).strip()
    cleaned = re.sub(r"```$", "", cleaned).strip()
    try:
        return json.loads(cleaned)
    except Exception:
        pass

    first_brace = cleaned.find("{")
    last_brace = cleaned.rfind("}")
    if first_brace != -1 and last_brace != -1 and last_brace > first_brace:
        try:
            return json.loads(cleaned[first_brace:last_brace + 1])
        except Exception:
            return {}
    return {}


def run(config: dict, toolregistry=None) -> None:
    step_name = config.get("name", "ProductElementDiscovery")
    input_payload = config.get("input", {})
    if not isinstance(input_payload, dict):
        input_payload = {"product_description": str(input_payload)}

    product_description = input_payload.get("product_description", "")
    hs_codes = input_payload.get("candidate_hs_codes", [])
    evidence = input_payload.get("evidence", [])

    rag_tool = toolregistry.get_tool("lightrag_query") if toolregistry is not None else None
    llm_tool = toolregistry.get_tool("call_llm") if toolregistry is not None else None

    product_elements: List[Dict[str, Any]] = []
    for item in evidence:
        code = item.get("hs_code", "")
        kb_name = item.get("knowledge_base", "WCO_2022B")
        ref_text = item.get("reference", "")

        if rag_tool is not None and not ref_text:
            try:
                ref_text = rag_tool.run(
                    {
                        "KB": kb_name,
                        "query": f"HS {code}: required classification elements and inclusion/exclusion notes.",
                        "mode": "naive",
                    }
                )
            except Exception as exc:
                ref_text = f"RAG lookup failed: {exc}"

        analysis = {}
        if llm_tool is not None:
            prompt = (
                "From the product description and HS reference, extract required product elements for classification. "
                "Return STRICT JSON with keys: required_elements (list), provided_elements (object), "
                "missing_elements (list), rationale (string).\n\n"
                f"HS Code: {code}\n"
                f"Product Description: {product_description}\n"
                f"HS Reference: {ref_text}"
            )
            raw = llm_tool.run({"prompt": prompt})
            analysis = _extract_json(raw)

        product_elements.append(
            {
                "hs_code": code,
                "required_elements": analysis.get("required_elements", []),
                "provided_elements": analysis.get("provided_elements", {}),
                "missing_elements": analysis.get("missing_elements", []),
                "rationale": analysis.get("rationale", ""),
                "reference": ref_text,
            }
        )

    return {
        "step": step_name,
        "product_description": product_description,
        "candidate_hs_codes": hs_codes,
        "product_elements": product_elements,
    }