
Read [](file:///Users/lscm/Project/PCS/HSCodeSearch/DeepHSCode/agents/SmartHSCode/skills)

Read [](file:///Users/lscm/Project/PCS/HSCodeSearch/DeepHSCode/agents/SmartHSCode/skills/observe/SKILL.md#1-1), lines 1 to 40

Read [](file:///Users/lscm/Project/PCS/HSCodeSearch/DeepHSCode/agents/SmartHSCode/skills/plan/SKILL.md#1-1), lines 1 to 40

Read [](file:///Users/lscm/Project/PCS/HSCodeSearch/DeepHSCode/agents/SmartHSCode/skills/act/SKILL.md#1-1), lines 1 to 40

Read [](file:///Users/lscm/Project/PCS/HSCodeSearch/DeepHSCode/agents/SmartHSCode/skills/learn/SKILL.md)

Read [](file:///Users/lscm/Project/PCS/HSCodeSearch/DeepHSCode/agents/SmartHSCode/skills/summary/SKILL.md#1-1), lines 1 to 40

**SmartHSCodeAgent — Component Overview**

- **Observe**: Information Assessment & Evidence Gathering  
  *Purpose*: Checks if the product description has enough detail for unambiguous HS6 classification using GIR rules. Builds targeted search queries and gathers supporting evidence via the MCP web search tool.  
  *How*:  
    - Generates up to 6 queries (base + recommended from previous loop).
    - Calls the MCP `web_search` tool for each query.
    - Collects search results and assesses if all required product attributes (like material composition) are covered.

- **Plan**: Decide Next Actions  
  *Purpose*: Decides whether to continue gathering information or proceed to classification.  
  *How*:  
    - Reviews the output from Observe (completeness, confidence, missing info).
    - If information is complete and confidence is medium or higher, or if out of loops/time, proceeds to Act.
    - Otherwise, selects new queries for the next Observe phase.

- **Act**: HS6 Classification Decision  
  *Purpose*: Applies GIR logic to the evidence and product profile to select a single, definitive 6-digit HS code.  
  *How*:  
    - Sequentially applies GIR rules (1, 3a, 3b, 3c, 6).
    - Assesses ambiguity (multiple possible headings, missing key info, or conflicting rulings).
    - Extracts and records declaration elements that influenced the decision.

- **Learn**: Loop Reflection  
  *Purpose*: Summarizes what was achieved in the current loop and provides guidance for the next iteration.  
  *How*:  
    - Programmatically (no LLM) summarizes what worked, what’s missing, and what to focus on next.
    - Signals if the pipeline is ready to exit (unambiguous code and no missing info).

- **Summary**: Classification Report Generation  
  *Purpose*: Formats the final result as a human-readable Markdown report.  
  *How*:  
    - Programmatically (no LLM) assembles a report from the Act and Observe outputs, including product description, declaration elements, HS code, confidence, ambiguity status, reasoning, and GIR analysis.

Let me know if you want a deeper explanation of any specific component.