from typing import Any, Dict, List


def _confidence_label(score: float) -> str:
    if score >= 0.8:
        return "high"
    if score >= 0.6:
        return "medium"
    return "low"


def run(config: dict, toolregistry=None) -> None:
    step_name = config.get("name", "HSCodeProductMatching")
    input_payload = config.get("input", {})
    if not isinstance(input_payload, dict):
        input_payload = {"product_description": str(input_payload), "product_elements": []}

    product_description = input_payload.get("product_description", "")
    product_elements = input_payload.get("product_elements", [])

    matched_candidates: List[Dict[str, Any]] = []
    unresolved_questions: List[str] = []

    for item in product_elements:
        required = item.get("required_elements", []) or []
        missing = item.get("missing_elements", []) or []
        provided = item.get("provided_elements", {}) or {}

        required_count = len(required)
        missing_count = len(missing)
        provided_count = len(provided) if isinstance(provided, dict) else 0

        if required_count > 0:
            coverage = max(0.0, min(1.0, (required_count - missing_count) / required_count))
        else:
            coverage = 0.5 if provided_count > 0 else 0.2

        score = round(0.35 + 0.55 * coverage + (0.1 if provided_count > 0 else 0.0), 3)
        score = min(1.0, max(0.0, score))

        for question in missing:
            if question not in unresolved_questions:
                unresolved_questions.append(question)

        matched_candidates.append(
            {
                "hs_code": item.get("hs_code", ""),
                "confidence_score": score,
                "confidence": _confidence_label(score),
                "matched_elements": provided,
                "missing_elements": missing,
                "rationale": item.get("rationale", ""),
                "reference": item.get("reference", ""),
            }
        )

    matched_candidates.sort(key=lambda x: x.get("confidence_score", 0.0), reverse=True)

    return {
        "step": step_name,
        "product_description": product_description,
        "matched_candidates": matched_candidates,
        "incomplete_information": unresolved_questions,
    }

