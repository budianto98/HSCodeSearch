from typing import Any, Dict, List


def run(config: dict, toolregistry=None) -> None:
    step_name = config.get("name", "Review")
    input_payload = config.get("input", {})
    if not isinstance(input_payload, dict):
        input_payload = {"product_description": str(input_payload), "matched_candidates": []}

    product_description = input_payload.get("product_description", "")
    matched_candidates = input_payload.get("matched_candidates", [])
    incomplete_info = input_payload.get("incomplete_information", [])

    hs_code_candidate = []
    product_element = []
    alternative_hs_codes = []

    for idx, candidate in enumerate(matched_candidates):
        code = candidate.get("hs_code", "")
        score = candidate.get("confidence_score", 0.0)
        hs_code_candidate.append(
            {
                "rank": idx + 1,
                "hs_code": code,
                "confidence_score": score,
                "confidence": candidate.get("confidence", ""),
            }
        )
        product_element.append(
            {
                "hs_code": code,
                "matched_elements": candidate.get("matched_elements", {}),
                "missing_elements": candidate.get("missing_elements", []),
                "comment": candidate.get("rationale", ""),
            }
        )

    if len(hs_code_candidate) > 1:
        alternative_hs_codes = [item["hs_code"] for item in hs_code_candidate[1:4]]

    report_lines: List[str] = []
    report_lines.append("# Initial HS Code Report")
    report_lines.append("")
    report_lines.append(f"Product: {product_description}")
    report_lines.append("")
    report_lines.append("## HS Code Candidate")
    if hs_code_candidate:
        for item in hs_code_candidate:
            report_lines.append(
                f"{item['rank']}. {item['hs_code']} (confidence={item['confidence']}, score={item['confidence_score']})"
            )
    else:
        report_lines.append("No candidate identified.")

    report_lines.append("")
    report_lines.append("## Product Element")
    if product_element:
        for item in product_element:
            report_lines.append(f"- HS {item['hs_code']}: matched={item['matched_elements']}")
            if item["missing_elements"]:
                report_lines.append(f"  missing={item['missing_elements']}")
    else:
        report_lines.append("No product element mapping available.")

    report_lines.append("")
    report_lines.append("## Review Notes")
    if incomplete_info:
        for note in incomplete_info:
            report_lines.append(f"- {note}")
    else:
        report_lines.append("- No critical missing information identified.")

    if alternative_hs_codes:
        report_lines.append("")
        report_lines.append("## Alternative HS Code for Consideration")
        for code in alternative_hs_codes:
            report_lines.append(f"- {code}")

    return {
        "step": step_name,
        "product_description": product_description,
        "product_element": product_element,
        "hs_code_candidate": hs_code_candidate,
        "issues": incomplete_info,
        "alternative_hs_codes": alternative_hs_codes,
        "report": "\n".join(report_lines),
    }
