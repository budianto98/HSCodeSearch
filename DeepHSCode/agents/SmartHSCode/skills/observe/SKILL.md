# SKILL: Observe — Information Assessment & Evidence Gathering

## Purpose

Assess whether the product description contains **sufficient information** for
unambiguous HS6 classification under GIR principles, and collect supporting
evidence via web search tools.

## Instructions

### Step 1 — Build Search Queries

Generate targeted queries. Always include at least these four base queries:

1. `{product} HS code WCO explanatory notes`
2. `{product} customs ruling tariff classification`
3. `{product} declaration elements import`
4. `{product} HS classification example data`

Extend the list with any `recommended_queries` carried forward from the
previous loop's Observe output (up to 6 queries total).

### Step 2 — Execute Web Searches (MCP Tool)

For each query (up to 6), call the `web_search` MCP tool:

```
web_search(query=<query>, provider="perplexity", max_results=5, verbose=False)
```

Collect the `search_results` list from each response.  If a call fails, record
the error and continue with the remaining queries.

### Step 3 — Assess Information Completeness

Evaluate whether the combined product description + evidence covers:

| Attribute            | Required for unambiguous HS6? |
|----------------------|-------------------------------|
| Material composition | Yes — drives chapter selection |
| Primary function / end-use | Yes — resolves heading ties |
| Physical form (solid, liquid, finished, semi-finished) | Yes — affects GIR 2 |
| Applicable HS chapter cues from WCO explanatory notes | Yes |
| Brand / model (for electronics, vehicles) | Helpful but not always required |

Mark `is_information_complete: true` only when you can apply GIR 1 or GIR 3
with reasonable certainty.

### Step 4 — Return Structured JSON

```json
{
  "is_information_complete": true,
  "missing_information": ["list of attributes still needed, or empty"],
  "product_profile": {
    "material": "...",
    "function": "...",
    "form": "...",
    "other_key_attributes": "..."
  },
  "confidence": "low | medium | high",
  "recommended_queries": ["query for next loop 1", "query for next loop 2"],
  "evidence": [
    {
      "query": "...",
      "items": [{"title": "...", "url": "...", "snippet": "..."}]
    }
  ],
  "queries_used": ["...", "..."]
}
```

## Fallback (No LLM / No Evidence)

If no evidence is available and the product description has ≥ 3 words:
- Set `is_information_complete: true`
- Set `confidence: "low"`
- Set `missing_information: []`

If the description has < 3 words, mark incomplete with
`missing_information: ["material", "use", "form"]`.
