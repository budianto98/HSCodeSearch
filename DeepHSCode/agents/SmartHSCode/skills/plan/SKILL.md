# SKILL: Plan — Decide Next Actions

## Purpose

Given the current Observe output, decide whether to **continue** the loop
(gather more information) or **commit** to classification (proceed to Act
without further search).

## Stop Conditions — Commit to Classification Immediately

Stop the loop and proceed to Act if **any** of the following is true:

| Condition | Reason |
|-----------|--------|
| `is_information_complete = true` AND `confidence >= "medium"` | Ready to classify |
| `loops_left = 0` | No more iterations available |
| `seconds_left <= 5` | Time budget exhausted |
| Evidence strongly converges on a single heading | Early exit |

## Continue Conditions

Continue the loop (request more search) if **all** of these hold:

- `is_information_complete = false`
- `loops_left > 0`
- `seconds_left > 5`
- New queries in `recommended_queries` are meaningfully different from
  already-used queries

## Instructions

### Step 1 — Evaluate the Observation

Review these fields from the Observe output:
- `is_information_complete`
- `missing_information`
- `confidence`
- `recommended_queries`

### Step 2 — Select `next_queries`

Pick up to 3 queries from `recommended_queries` that are most likely to
resolve the `missing_information` items.  Prefer queries that:
1. Target specific HS chapters mentioned in evidence
2. Ask for official customs rulings or WCO binding opinions
3. Narrow ambiguity between the top two candidate headings

### Step 3 — Return Structured JSON

```json
{
  "should_continue": true,
  "stop_reason": "need_more_information | ready_to_classify | max_loops_reached | time_limit",
  "next_queries": ["query 1", "query 2", "query 3"],
  "focus_points": ["attribute still missing 1", "attribute still missing 2"],
  "plan_steps": [
    "Verify product composition via WCO notes",
    "Map top two headings to GIR 3 rationale",
    "Confirm required declaration elements"
  ]
}
```

## Fallback

If LLM output is not valid JSON, derive the decision deterministically:
- `should_continue = (not is_information_complete) AND loops_left > 0 AND seconds_left > 5`
- `stop_reason = "need_more_information"` if continuing, else `"ready_or_limited"`
- `next_queries` = first 3 items from `recommended_queries`
