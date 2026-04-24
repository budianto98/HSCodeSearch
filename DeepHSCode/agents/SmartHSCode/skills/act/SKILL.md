# SKILL: Act — HS6 Classification Decision

## Purpose

Apply GIR logic to the collected evidence and product profile to produce a
**single, definitive 6-digit HS code** classification decision.

## Instructions

### Step 1 — Apply GIR Sequentially

Work through the GIR rules in order until one heading is selected:

1. **GIR 1** — Match the product to a specific heading via its text and the
   relevant section/chapter legal notes.  If a note explicitly includes or
   excludes the product, follow it.
2. **GIR 3(a)** — If two or more headings apply, choose the most specific
   description over the more general one.
3. **GIR 3(b)** — For composite goods or sets, classify by the component
   that gives the goods their **essential character** (function, value, bulk,
   weight, role in the use of the goods).
4. **GIR 3(c)** — If still unresolved, take the heading that appears **last**
   in numerical order among the equally applicable ones.
5. **GIR 6** — Apply rules 1–5 at the subheading level to select the
   4-digit → 6-digit code.

### Step 2 — Assess Ambiguity

Set `is_ambiguous: true` if:
- Two or more headings remain equally applicable after applying all GIR rules
- Material composition is genuinely unknown and would change the heading
- Official WCO notes or national rulings contradict each other

Explain clearly in `ambiguity_reason`.

### Step 3 — Extract Declaration Elements

For each attribute that drove the classification decision, record:

```json
{
  "name": "material",
  "value": "polycarbonate",
  "source": "https://example.com/ruling",
  "required": true
}
```

Include at minimum: material, function, form.  Add brand/model if relevant.

### Step 4 — Return Structured JSON

```json
{
  "hs6_code": "847130",
  "hs_description": "Portable automatic data processing machines, weighing not more than 10 kg",
  "is_ambiguous": false,
  "ambiguity_reason": "",
  "gir_analysis": [
    "GIR 1: Heading 8471 covers automatic data-processing machines; laptop meets this description.",
    "GIR 6: Subheading 8471.30 covers portable ADPs weighing ≤ 10 kg — matched."
  ],
  "declaration_elements": [
    {"name": "function", "value": "automatic data processing", "source": "product description", "required": true},
    {"name": "form",     "value": "portable laptop",           "source": "product description", "required": true},
    {"name": "weight",   "value": "≤ 10 kg",                   "source": "inferred",            "required": true}
  ],
  "reasoning": "The product is a portable laptop computer. GIR 1 directs to heading 8471. GIR 6 narrows to subheading 8471.30 for portables ≤ 10 kg.",
  "confidence": "high"
}
```

`confidence` values:
- `"high"` — single heading, strong evidence, no ambiguity
- `"medium"` — best candidate with minor uncertainty
- `"low"` — forced decision under incomplete information

## Fallback

If the LLM output is not valid JSON, return:
```json
{
  "hs6_code": "",
  "hs_description": "",
  "is_ambiguous": true,
  "ambiguity_reason": "model_output_not_json",
  "gir_analysis": [],
  "declaration_elements": [],
  "reasoning": "<raw model output>",
  "confidence": "low"
}
```
