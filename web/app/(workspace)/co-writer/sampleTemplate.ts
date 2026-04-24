const FENCE = "```";

export const CO_WRITER_SAMPLE_TEMPLATE = `# DeepHSCode Co-Writer

> DeepHSCode's built-in writing canvas for notes, reports, tutorials, and AI-assisted drafts.

### Features

- Support Standard Markdown / CommonMark / GFM for everyday writing
- Real-time preview for headings, tables, code, math, flowchart, and sequence diagrams
- AI editing workflows for rewrite, shorten, and expand
- HTML tag decoding for tags like <sub>, <sup>, <abbr>, and <mark>
- A practical starter draft for DeepHSCode product docs and learning content

## Table of Contents

[TOCM]

[TOC]

#DeepHSCode Mission
##DeepHSCode Product Surface
###DeepHSCode Learning Experience
####DeepHSCode Co-Writer
#####DeepHSCode Knowledge Layer
######DeepHSCode Agent Runtime

#DeepHSCode Docs [Project Overview](#deephscode-mission "Jump to project overview")
##DeepHSCode Authoring [Co-Writer Section](#deephscode-co-writer "Jump to co-writer section")
###DeepHSCode Research [Learning Note](#deephscode-learning-note "Jump to learning note")

## Headers (Underline)

DeepHSCode Learning Note
=============

DeepHSCode Study Outline
-------------

### Characters

----

~~Deprecated behavior~~ <s>Legacy formatting path</s>
*Italic* _Italic_
**Emphasis** __Emphasis__
***Emphasis Italic*** ___Emphasis Italic___

Superscript: X<sub>2</sub>, Subscript: O<sup>2</sup>

**Abbreviation(link HTML abbr tag)**

The <abbr title="Large Language Model">LLM</abbr> layer powers DeepHSCode while the <abbr title="Retrieval Augmented Generation">RAG</abbr> layer provides grounded knowledge support.

### Blockquotes

> DeepHSCode helps students turn questions into structured understanding.
>
> "Learn deeply, write clearly.", [DeepTutor](#deephscode-co-writer)

### Links

[DeepHSCode Overview](#deephscode-mission)

[DeepHSCode Co-Writer](#deephscode-co-writer "co-writer section")

[DeepHSCode Runtime](#deephscode-agent-runtime)

[Reference link][deephscode-doc]

[deephscode-doc]: #deephscode-learning-note

### Code Blocks

#### Inline code

\`deeptutor chat --once "Summarize this section"\`

#### Code Blocks (Indented style)

    from deeptutor.runtime.orchestrator import ChatOrchestrator
    orchestrator = ChatOrchestrator()
    print("DeepTutor is ready.")

#### Python

${FENCE}python
from DeepHSCode.runtime.orchestrator import ChatOrchestrator
from DeepHSCode.core.context import UnifiedContext


async def run_demo() -> str:
    orchestrator = ChatOrchestrator()
    context = UnifiedContext(
        user_query="Explain Newton's second law",
        capability="chat",
    )
    result = await orchestrator.run(context)
    return result.get("response", "")
${FENCE}

#### JSON config

${FENCE}json
{
  "app_name": "DeepHSCode",
  "default_capability": "chat",
  "enabled_tools": ["rag", "web_search", "code_execution", "reason"],
  "ui": {
    "co_writer_template": true,
    "notebook_export": true
  }
}
${FENCE}

#### HTML code

${FENCE}html
<section class="deeptutor-card">
  <h1>DeepTutor</h1>
  <p>Write, revise, and organize learning content with AI.</p>
</section>
${FENCE}

### Images

![](/logo-ver2.png)

> DeepTutor brand mark used inside the co-writer template.

### Lists

- DeepHSCode Chat
- DeepHSCode Co-Writer
- DeepHSCode Research

1. Draft a concept note
2. Ask AI to refine it
3. Save it to a notebook

### Tables

Feature       | Description
------------- | -------------
Co-Writer     | Draft and refine Markdown content
Notebook      | Save and organize outputs
Research      | Build structured multi-step reports

| Capability    | Primary Use Case                     |
| ------------- | ------------------------------------ |
| \`chat\`       | General tutoring and guidance        |
| \`deep_solve\` | Structured problem solving           |
| \`deep_question\` | Question generation and validation |

### Markdown extras

- [x] Draft a DeepTutor product note
- [x] Add references and structure
- [ ] Polish the final explanation
  - [ ] Check headings
  - [ ] Check citations

### TeX (LaTeX)

$$ E=mc^2 $$

Inline $$E=mc^2$$ appears in physics notes, and Inline $$a^2+b^2=c^2$$ appears in geometry notes.

$$\(\sqrt{3x-1}+(1+x)^2\)$$

$$ \sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$

### FlowChart

${FENCE}flow
st=>start: Student asks a question
op=>operation: DeepTutor analyzes intent
cond=>condition: Need deep workflow?
chat=>operation: Answer with chat capability
solve=>operation: Route to deep solve
e=>end: Return structured response

st->op->cond
cond(no)->chat
cond(yes)->solve
chat->e
solve->e
${FENCE}

### Sequence Diagram

${FENCE}seq
Student->DeepTutor: Ask for help
DeepTutor->Notebook: Load context
Note right of DeepTutor: Collect memory\nand relevant knowledge
DeepTutor-->Student: Return guided response
Student->>DeepTutor: Request rewrite in co-writer
${FENCE}

### End
`;
