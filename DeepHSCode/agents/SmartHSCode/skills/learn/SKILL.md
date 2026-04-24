# SKILL: Learn — Loop Reflection

## Purpose

Summarize what was achieved in this iteration of the Observe → Plan → Act
loop and produce actionable guidance for the **next** iteration.

## Note: Deterministic Phase — No LLM Call Required

This phase is computed programmatically from the Observe and Act outputs.
No LLM call is made. The logic below describes what is calculated.

## Logic

| Input field | What it drives |
|-------------|----------------|
| `action.is_ambiguous` | `what_worked`: "GIR-aligned decision" vs "Need more attributes" |
| `observation.missing_information` | `what_missing`: carries forward the gaps |
| `plan.next_queries[:3]` | `next_focus`: top queries for the next loop |
| `(not is_ambiguous) AND (not missing_information)` | `ready_to_exit: true` |

## Output Structure

```json
{
  "loop": 1,
  "what_worked": "GIR-aligned decision generated",
  "what_missing": ["list of missing attributes, or empty"],
  "next_focus": ["top query 1", "top query 2", "top query 3"],
  "ready_to_exit": false
}
```

`ready_to_exit: true` signals that the pipeline can terminate early on the
next check — the Act phase produced an unambiguous code and no information
gaps remain.
