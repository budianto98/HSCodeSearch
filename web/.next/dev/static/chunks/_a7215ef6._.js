(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/latex.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utility functions for LaTeX processing
 *
 * remark-math only supports $...$ and $$...$$ delimiters by default.
 * Many LLMs output LaTeX using \(...\) and \[...\] delimiters.
 * This utility converts between formats.
 */ /**
 * Convert LaTeX delimiters from \(...\) and \[...\] to $...$ and $$...$$
 * This makes the content compatible with remark-math for ReactMarkdown rendering.
 *
 * @param content - The content containing LaTeX with \(...\) or \[...\] delimiters
 * @returns Content with $...$ and $$...$$ delimiters
 */ __turbopack_context__.s([
    "convertLatexDelimiters",
    ()=>convertLatexDelimiters,
    "processLatexContent",
    ()=>processLatexContent,
    "processMarkdownContent",
    ()=>processMarkdownContent
]);
function convertLatexDelimiters(content) {
    if (!content) return content;
    let result = content;
    // editor.md examples sometimes wrap \( ... \) inside $$ ... $$.
    // In that case the inner delimiters should be stripped rather than rewrapped.
    result = result.replace(/\$\$\s*\\\(([\s\S]*?)\\\)\s*\$\$/g, (_match, expr)=>{
        return `\n$$\n${expr}\n$$\n`;
    });
    // Convert \[...\] to $$...$$ (block math).
    // Use a regex that handles multiline content
    // Note: In JSON strings, \[ becomes \\[ which in JS becomes \[
    result = result.replace(/\\\[([\s\S]*?)\\\]/g, (_match, expr)=>{
        return `\n$$\n${expr}\n$$\n`;
    });
    // Convert \(...\) to $...$ (inline math).
    // Be careful not to match escaped parentheses in other contexts
    result = result.replace(/\\\(([\s\S]*?)\\\)/g, (_match, expr)=>{
        return ` $${expr}$ `;
    });
    // Also handle cases where LaTeX is directly in the text without proper delimiters
    // e.g., standalone \lim, \frac, etc. that should be wrapped
    // This is a common issue with LLM outputs
    // Clean up multiple consecutive newlines
    result = result.replace(/\n{3,}/g, "\n\n");
    return result;
}
function normalizeEditorMdHeadings(content) {
    return content.replace(/^(#{1,6})([^#\s])/gm, "$1 $2");
}
const LIKELY_LATEX_BLOCK_RE = /\\[A-Za-z]+|\\\\|[_^&]/;
function looksLikeLatexBlock(lines) {
    const block = lines.map((line)=>line.trim()).filter(Boolean).join("\n");
    return block.length > 0 && LIKELY_LATEX_BLOCK_RE.test(block);
}
function normalizeEditorMdInlineMath(content) {
    const lines = content.split("\n");
    const result = [];
    for(let i = 0; i < lines.length; i++){
        const line = lines[i];
        const trimmed = line.trim();
        if (trimmed === "$" && i + 1 < lines.length) {
            let endIdx = -1;
            for(let j = i + 1; j < lines.length; j++){
                if (lines[j].trim() === "$") {
                    endIdx = j;
                    break;
                }
            }
            if (endIdx > i + 1 && looksLikeLatexBlock(lines.slice(i + 1, endIdx))) {
                result.push("$$");
                for(let j = i + 1; j < endIdx; j++){
                    result.push(lines[j]);
                }
                result.push("$$");
                i = endIdx;
                continue;
            }
        }
        if (/^\$\$[\s\S]+\$\$$/.test(trimmed) && (trimmed.match(/\$\$/g)?.length ?? 0) === 2) {
            const inner = trimmed.slice(2, -2).trim();
            result.push(`$$\n${inner}\n$$`);
            continue;
        }
        // editor.md commonly uses $...$ for inline math.
        result.push(line.replace(/\$\$([^$\n]+?)\$\$/g, (_match, expr)=>{
            return `$${expr.trim()}$`;
        }));
    }
    return result.join("\n");
}
function slugifyHeading(text) {
    return text.trim().toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
}
function collectMarkdownHeadings(content) {
    const lines = content.split("\n");
    const headings = [];
    let inFence = false;
    for(let i = 0; i < lines.length; i += 1){
        const line = lines[i];
        const trimmed = line.trim();
        if (/^```/.test(trimmed)) {
            inFence = !inFence;
            continue;
        }
        if (inFence) continue;
        const atxMatch = /^(#{1,6})\s+(.+?)\s*$/.exec(line);
        if (atxMatch) {
            const text = atxMatch[2].replace(/\s+#+\s*$/, "").trim();
            const slug = slugifyHeading(text);
            if (slug) headings.push({
                level: atxMatch[1].length,
                text,
                slug
            });
            continue;
        }
        const next = lines[i + 1]?.trim();
        if (!trimmed || !next) continue;
        if (/^=+$/.test(next)) {
            const slug = slugifyHeading(trimmed);
            if (slug) headings.push({
                level: 1,
                text: trimmed,
                slug
            });
            i += 1;
            continue;
        }
        if (/^-+$/.test(next)) {
            const slug = slugifyHeading(trimmed);
            if (slug) headings.push({
                level: 2,
                text: trimmed,
                slug
            });
            i += 1;
        }
    }
    return headings;
}
function buildTableOfContents(headings) {
    if (headings.length === 0) return "";
    return headings.map(({ level, text, slug })=>{
        const indent = "  ".repeat(Math.max(level - 1, 0));
        return `${indent}- [${text}](#${slug})`;
    }).join("\n");
}
function injectEditorMdTableOfContents(content) {
    const headings = collectMarkdownHeadings(content);
    if (headings.length === 0) {
        return content.replace(/^\[TOCM?\]\s*$/gim, "");
    }
    const toc = buildTableOfContents(headings);
    return content.replace(/^\[TOCM?\]\s*$/gim, toc);
}
function convertFlowFenceToMermaid(source) {
    const lines = source.split("\n").map((line)=>line.trim()).filter(Boolean);
    if (lines.length === 0) return null;
    const nodeDefs = [];
    const edges = [];
    const renderNode = (id, type, label)=>{
        const safeLabel = label.replace(/\|/g, "\\|");
        switch(type){
            case "start":
            case "end":
                return `${id}([${safeLabel}])`;
            case "condition":
                return `${id}{${safeLabel}}`;
            case "inputoutput":
                return `${id}[/${safeLabel}/]`;
            case "subroutine":
                return `${id}[[${safeLabel}]]`;
            case "database":
                return `${id}[(${safeLabel})]`;
            default:
                return `${id}[${safeLabel}]`;
        }
    };
    for (const line of lines){
        const defMatch = /^([A-Za-z][\w-]*)(?:=>|=)(start|end|operation|condition|inputoutput|subroutine|database):\s*(.+)$/.exec(line);
        if (defMatch) {
            const [, id, type, label] = defMatch;
            nodeDefs.push(`  ${renderNode(id, type, label)}`);
            continue;
        }
        if (!line.includes("->")) continue;
        const parts = line.split("->").map((part)=>part.trim()).filter(Boolean);
        for(let i = 0; i < parts.length - 1; i += 1){
            const fromMatch = /^([A-Za-z][\w-]*)(?:\(([^)]+)\))?$/.exec(parts[i]);
            const toMatch = /^([A-Za-z][\w-]*)(?:\(([^)]+)\))?$/.exec(parts[i + 1]);
            if (!fromMatch || !toMatch) continue;
            const [, fromId] = fromMatch;
            const [, toId, edgeLabel] = toMatch;
            const label = edgeLabel ? `|${edgeLabel}|` : "";
            edges.push(`  ${fromId} -->${label} ${toId}`);
        }
    }
    if (nodeDefs.length === 0 || edges.length === 0) return null;
    return [
        "flowchart TD",
        ...nodeDefs,
        ...edges
    ].join("\n");
}
function convertSequenceFenceToMermaid(source) {
    const lines = source.split("\n").map((line)=>line.trim()).filter(Boolean);
    if (lines.length === 0) return null;
    const isSequenceDirective = (line)=>{
        return /^Note\s+(left|right)\s+of\s+/i.test(line) || /^participant\s+/i.test(line) || /^(title|autonumber|activate|deactivate|loop|rect|opt|alt|par|critical|break|box|create|destroy)\b/i.test(line) || /^([A-Za-z][\w.-]*)(?:-{1,2}>>?|--?>)([A-Za-z][\w.-]*)\s*:\s*.+$/.test(line);
    };
    const normalizedLines = [];
    for(let i = 0; i < lines.length; i += 1){
        const line = lines[i];
        if (/^Note\s+(left|right)\s+of\s+/i.test(line)) {
            let combined = line;
            while(i + 1 < lines.length && !isSequenceDirective(lines[i + 1])){
                combined += `\\n${lines[i + 1]}`;
                i += 1;
            }
            normalizedLines.push(combined);
            continue;
        }
        normalizedLines.push(line);
    }
    const converted = normalizedLines.map((line)=>{
        if (/^Note\s+(left|right)\s+of\s+/i.test(line)) {
            return `  ${line.replace(/\\n/g, "<br/>")}`;
        }
        const messageMatch = /^([A-Za-z][\w.-]*)(-{1,2}>>?|--?>)([A-Za-z][\w.-]*)\s*:\s*(.+)$/.exec(line);
        if (messageMatch) {
            const [, from, operator, to, message] = messageMatch;
            const arrow = operator === "--" || operator === "-->" ? "-->>" : operator === "->>" || operator === "-->>" ? operator : "->>";
            return `  ${from}${arrow}${to}: ${message}`;
        }
        return `  ${line}`;
    });
    return [
        "sequenceDiagram",
        ...converted
    ].join("\n");
}
function convertEditorMdFences(content) {
    return content.replace(/```(flow|seq|sequence)\s*\n([\s\S]*?)```/g, (_match, lang, body)=>{
        const converted = lang === "flow" ? convertFlowFenceToMermaid(body) : convertSequenceFenceToMermaid(body);
        if (!converted) return `\`\`\`${lang}\n${body}\`\`\``;
        return `\`\`\`mermaid\n${converted}\n\`\`\``;
    });
}
function processLatexContent(content) {
    if (!content) return "";
    // Convert to string if not already
    const str = String(content);
    // Apply delimiter conversion
    return convertLatexDelimiters(str);
}
function processMarkdownContent(content) {
    if (!content) return "";
    let result = String(content);
    result = normalizeEditorMdHeadings(result);
    result = normalizeEditorMdInlineMath(result);
    result = convertEditorMdFences(result);
    result = injectEditorMdTableOfContents(result);
    result = convertLatexDelimiters(result);
    result = result.replace(/\n{3,}/g, "\n\n");
    return result;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/markdown-display.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasVisibleMarkdownContent",
    ()=>hasVisibleMarkdownContent,
    "normalizeMarkdownForDisplay",
    ()=>normalizeMarkdownForDisplay
]);
"use client";
const ZERO_WIDTH_REGEX = /[\u200B-\u200D\uFEFF]/g;
const EMPTY_DETAILS_REGEX = /<details(?:\s[^>]*)?>\s*(<summary(?:\s[^>]*)?>\s*(?:&nbsp;|\s|<br\s*\/?>)*\s*<\/summary>\s*)?<\/details>/gi;
const EMPTY_SUMMARY_REGEX = /<summary(?:\s[^>]*)?>\s*(?:&nbsp;|\s|<br\s*\/?>)*\s*<\/summary>/gi;
const EMPTY_PROGRESS_REGEX = /<progress(?:\s[^>]*)?>\s*(?:&nbsp;|\s|<br\s*\/?>)*\s*<\/progress>/gi;
const RAW_INPUT_REGEX = /<input(?:\s[^>]*)?>/gi;
const EMPTY_FORM_CONTROL_REGEX = /<(textarea|select|button|meter)(?:\s[^>]*)?>\s*(?:&nbsp;|\s|<br\s*\/?>)*\s*<\/\1>/gi;
const EMPTY_FENCED_CODE_BLOCK_REGEX = /```[^\n`]*\n?\s*```/g;
const EMPTY_HTML_BLOCK_REGEX = /<(p|div|section|article|aside|blockquote)(?:\s[^>]*)?>\s*(?:&nbsp;|\s|<br\s*\/?>)*\s*<\/\1>/gi;
const HTML_TABLE_REGEX = /<table(?:\s[^>]*)?>[\s\S]*?<\/table>/gi;
function stripInvisibleCharacters(value) {
    return value.replace(ZERO_WIDTH_REGEX, "");
}
function stripDisplaySyntax(value) {
    return stripInvisibleCharacters(String(value)).replace(/&nbsp;/gi, " ").replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, "").replace(/!\[(.*?)\]\([^)]+\)/g, "$1").replace(/\[(.*?)\]\([^)]+\)/g, "$1").replace(/[`*_~]/g, "").trim();
}
function splitMarkdownTableCells(line) {
    const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
    if (!trimmed) return [
        ""
    ];
    return trimmed.split("|");
}
function isMarkdownTableSeparator(line) {
    const trimmed = line.trim();
    if (!trimmed.includes("|")) return false;
    const cells = splitMarkdownTableCells(trimmed);
    return cells.length > 0 && cells.every((cell)=>/^:?-{3,}:?$/.test(cell.trim()));
}
function isMarkdownTableStart(lines, index) {
    if (index + 1 >= lines.length) return false;
    const header = lines[index]?.trim() || "";
    const separator = lines[index + 1]?.trim() || "";
    if (!header || !separator || !header.includes("|") || !isMarkdownTableSeparator(separator)) {
        return false;
    }
    return splitMarkdownTableCells(header).length === splitMarkdownTableCells(separator).length;
}
function isMarkdownTableBodyRow(line, columnCount) {
    const trimmed = line.trim();
    if (!trimmed || !trimmed.includes("|")) return false;
    return splitMarkdownTableCells(trimmed).length === columnCount;
}
function isEmptyMarkdownTable(lines) {
    return lines.filter((_, index)=>index !== 1).every((line)=>splitMarkdownTableCells(line).every((cell)=>stripDisplaySyntax(cell).length === 0));
}
function removeEmptyMarkdownTables(content) {
    const lines = content.split("\n");
    const cleaned = [];
    for(let index = 0; index < lines.length;){
        if (!isMarkdownTableStart(lines, index)) {
            cleaned.push(lines[index]);
            index += 1;
            continue;
        }
        const columnCount = splitMarkdownTableCells(lines[index]).length;
        let end = index + 2;
        while(end < lines.length && isMarkdownTableBodyRow(lines[end], columnCount)){
            end += 1;
        }
        const tableLines = lines.slice(index, end);
        if (!isEmptyMarkdownTable(tableLines)) {
            cleaned.push(...tableLines);
        }
        index = end;
    }
    return cleaned.join("\n");
}
function removeEmptyHtmlTables(content) {
    return content.replace(HTML_TABLE_REGEX, (block)=>stripDisplaySyntax(block) ? block : "");
}
const PREFIXED_CIT = String.raw`(?:web|rag|code|src)-\d+`;
const NUMERIC_CIT = String.raw`\d+`;
const SINGLE_CIT = `(?:${PREFIXED_CIT}|${NUMERIC_CIT})`;
const MULTI_CIT = `${SINGLE_CIT}(?:\\s*,\\s*${SINGLE_CIT})*`;
const INLINE_CITATION_REGEX = new RegExp(String.raw`(?<!\*\*|\[)\[(${MULTI_CIT})\](?!\(|:)`, "g");
const ESCAPED_CITATION_LINK_REGEX = new RegExp(String.raw`\\?\[(${SINGLE_CIT})\\?\]\s*\(#references\s+["` + "\u201c" + String.raw`]citation["` + "\u201d" + String.raw`]\)`, "g");
function unwrapBacktickedCitations(content) {
    return content.replace(new RegExp("`(\\[" + MULTI_CIT + "\\](?:\\s*\\(#references\\s+[\"\\u201c]citation[\"\\u201d]\\))?)`", "g"), "$1");
}
function linkifyCitations(content) {
    const refSectionIdx = content.search(/^##\s+(References|参考文献)/m);
    const body = refSectionIdx >= 0 ? content.slice(0, refSectionIdx) : content;
    const tail = refSectionIdx >= 0 ? content.slice(refSectionIdx) : "";
    // Normalize existing citation links that may have escaped brackets or smart quotes
    let linked = body.replace(ESCAPED_CITATION_LINK_REGEX, (_match, id)=>`[${id.trim()}](#references "citation")`);
    // Convert bare [web-1] / [rag-1] / [1] / [1, 3] references to a single citation link
    linked = linked.replace(INLINE_CITATION_REGEX, (_match, refs)=>{
        return `[${refs.trim()}](#references "citation")`;
    });
    // Handle escaped bare citations like \[web-1\] or \[1\] that linkifyCitations missed
    linked = linked.replace(new RegExp(String.raw`\\\[(${MULTI_CIT})\\\](?!\s*\()`, "g"), (_match, refs)=>{
        return `[${refs.trim()}](#references "citation")`;
    });
    // Remove stray space before trailing punctuation after citations
    linked = linked.replace(/(\(#references\s+"citation"\))\s+([.。,，;:!?])/g, "$1$2");
    return linked + tail;
}
function normalizeMarkdownForDisplay(content) {
    if (!content) return "";
    const normalized = stripInvisibleCharacters(String(content)).replace(/\r\n/g, "\n").replace(EMPTY_DETAILS_REGEX, "").replace(EMPTY_SUMMARY_REGEX, "").replace(EMPTY_PROGRESS_REGEX, "").replace(RAW_INPUT_REGEX, "").replace(EMPTY_FORM_CONTROL_REGEX, "").replace(EMPTY_HTML_BLOCK_REGEX, "").replace(/\n{3,}/g, "\n\n").replace(/^\n+|\n+$/g, "");
    const cleaned = removeEmptyMarkdownTables(removeEmptyHtmlTables(normalized)).replace(/\n{3,}/g, "\n\n");
    return linkifyCitations(unwrapBacktickedCitations(cleaned));
}
function hasVisibleMarkdownContent(content) {
    const normalized = normalizeMarkdownForDisplay(content);
    if (!normalized.trim()) return false;
    const withoutEmptyBlocks = normalized.replace(EMPTY_FENCED_CODE_BLOCK_REGEX, "").replace(/<[^>]+>/g, "").replace(/\[(.*?)\]\([^)]+\)/g, "$1").replace(/!\[(.*?)\]\([^)]+\)/g, "$1").replace(/^[\s>*\-+|#`]+$/gm, "");
    return stripInvisibleCharacters(withoutEmptyBlocks).trim().length > 0;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/common/RichMarkdownRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RichMarkdownRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$latex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/latex.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$markdown$2d$display$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/markdown-display.ts [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function MermaidLoading() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-4 rounded-xl border border-[var(--border)] bg-[var(--muted)]/50 px-4 py-3 text-sm text-[var(--muted-foreground)]",
        children: t("Rendering diagram...")
    }, void 0, false, {
        fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(MermaidLoading, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = MermaidLoading;
const LazyMermaid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/Mermaid.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/Mermaid.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MermaidLoading, {}, void 0, false, {
            fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
            lineNumber: 24,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c1 = LazyMermaid;
const LazyCodeBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/common/RichCodeBlock.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/common/RichCodeBlock.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>null
});
_c2 = LazyCodeBlock;
function extractText(children) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.toArray(children).map((child)=>{
        if (typeof child === "string" || typeof child === "number") {
            return String(child);
        }
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(child)) {
            return extractText(child.props.children);
        }
        return "";
    }).join("");
}
function headingId(children) {
    const text = extractText(children).toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
    return text || undefined;
}
function hasRenderableChildren(children) {
    return extractText(children).replace(/[\s\u200B-\u200D\uFEFF]/g, "").length > 0;
}
function hasRenderableDetailsBody(children) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.toArray(children).some((child)=>{
        if (typeof child === "string" || typeof child === "number") {
            return String(child).replace(/[\s\u200B-\u200D\uFEFF]/g, "").length > 0;
        }
        if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(child)) return false;
        if (typeof child.type === "string" && child.type.toLowerCase() === "summary") {
            return false;
        }
        return true;
    });
}
function stripLeadingHashes(children) {
    const arr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.toArray(children);
    if (arr.length > 0 && typeof arr[0] === "string") {
        const cleaned = arr[0].replace(/^#{1,6}\s+/, "");
        if (cleaned !== arr[0]) return [
            cleaned,
            ...arr.slice(1)
        ];
    }
    return children;
}
function RichMarkdownRenderer({ content, className = "", variant = "default", enableMath = false, enableCode = false, enableMermaid = false, allowHtml = false }) {
    _s1();
    const normalizedContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RichMarkdownRenderer.useMemo[normalizedContent]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$markdown$2d$display$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeMarkdownForDisplay"])(content)
    }["RichMarkdownRenderer.useMemo[normalizedContent]"], [
        content
    ]);
    const [plugins, setPlugins] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const isTrace = variant === "trace";
    const gap = isTrace ? "my-1" : variant === "compact" ? "my-2" : "my-4";
    const cellPad = isTrace ? "px-1.5 py-1" : variant === "compact" ? "px-2 py-1.5" : "px-3 py-2";
    const headingSpacing = variant === "compact" ? "mt-4 mb-2" : "mt-6 mb-3";
    const textColor = "text-[var(--foreground)]";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RichMarkdownRenderer.useEffect": ()=>{
            let cancelled = false;
            async function loadPlugins() {
                const nextPlugins = {};
                if (enableMath) {
                    const [remarkMathModule, rehypeKatexModule] = await Promise.all([
                        __turbopack_context__.A("[project]/node_modules/remark-math/index.js [app-client] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/rehype-katex/index.js [app-client] (ecmascript, async loader)")
                    ]);
                    nextPlugins.remarkMath = remarkMathModule.default;
                    nextPlugins.rehypeKatex = rehypeKatexModule.default;
                }
                if (allowHtml) {
                    const rehypeRawModule = await __turbopack_context__.A("[project]/node_modules/rehype-raw/index.js [app-client] (ecmascript, async loader)");
                    nextPlugins.rehypeRaw = rehypeRawModule.default;
                }
                if (!cancelled) {
                    setPlugins(nextPlugins);
                }
            }
            void loadPlugins();
            return ({
                "RichMarkdownRenderer.useEffect": ()=>{
                    cancelled = true;
                }
            })["RichMarkdownRenderer.useEffect"];
        }
    }["RichMarkdownRenderer.useEffect"], [
        allowHtml,
        enableMath
    ]);
    const processedContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RichMarkdownRenderer.useMemo[processedContent]": ()=>{
            return enableMath || enableMermaid ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$latex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processMarkdownContent"])(normalizedContent) : normalizedContent;
        }
    }["RichMarkdownRenderer.useMemo[processedContent]"], [
        enableMath,
        enableMermaid,
        normalizedContent
    ]);
    const traceComponents = {
        p: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 last:mb-0",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 145,
                columnNumber: 37
            }, this),
        h1: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 146,
                columnNumber: 38
            }, this),
        h2: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 147,
                columnNumber: 38
            }, this),
        h3: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 148,
                columnNumber: 38
            }, this),
        h4: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 149,
                columnNumber: 38
            }, this),
        h5: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 150,
                columnNumber: 38
            }, this),
        h6: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 151,
                columnNumber: 38
            }, this),
        strong: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                className: "font-semibold text-[var(--foreground)]",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
        em: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                className: "italic",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 155,
                columnNumber: 38
            }, this),
        a: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "underline underline-offset-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
        blockquote: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-l border-current/20 pl-3 opacity-80",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
        pre: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: children
            }, void 0, false),
        code: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                className: "rounded bg-[var(--muted)] px-1 py-0.5 font-mono text-[0.95em] text-[var(--foreground)]/90",
                children: String(children).replace(/\n$/, "")
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
        img: ()=>null,
        hr: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-1 h-px bg-current opacity-10"
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 169,
                columnNumber: 15
            }, this),
        ul: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "my-1 ml-4 list-disc",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 170,
                columnNumber: 38
            }, this),
        ol: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "my-1 ml-4 list-decimal",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 171,
                columnNumber: 38
            }, this),
        li: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "my-0.5 pl-0",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 172,
                columnNumber: 38
            }, this),
        table: ({ node, children, ...props })=>hasRenderableChildren(children) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-1 overflow-x-auto rounded border border-[var(--border)]/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full text-[inherit]",
                    ...props,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                    lineNumber: 176,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 175,
                columnNumber: 9
            }, this) : null,
        thead: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                className: "bg-[var(--muted)]/50",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 181,
                columnNumber: 41
            }, this),
        th: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                className: "border-b border-[var(--border)]/50 px-1.5 py-0.5 text-left font-medium",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
        tbody: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 188,
                columnNumber: 41
            }, this),
        td: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "border-b border-[var(--border)]/30 px-1.5 py-0.5",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
        tr: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 192,
                columnNumber: 38
            }, this),
        input: ({ node, type, ...props })=>type === "checkbox" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "checkbox",
                readOnly: true,
                className: "mr-1 align-middle",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 195,
                columnNumber: 9
            }, this) : null,
        progress: ()=>null,
        meter: ()=>null,
        button: ()=>null,
        select: ()=>null,
        option: ()=>null,
        textarea: ()=>null,
        details: ({ node, children })=>hasRenderableDetailsBody(children) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 204,
                columnNumber: 44
            }, this) : null,
        summary: ({ node, children })=>hasRenderableChildren(children) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 206,
                columnNumber: 41
            }, this) : null
    };
    const headingComponents = {
        h1: ({ node, children, className: headingClassName, ...props })=>{
            const clean = stripLeadingHashes(children);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                id: headingId(clean),
                className: `scroll-mt-20 font-sans text-2xl font-bold tracking-tight ${textColor} ${variant === "compact" ? "mt-5 mb-2" : "mt-8 mb-4"} ${headingClassName || ""}`,
                ...props,
                children: clean
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 213,
                columnNumber: 9
            }, this);
        },
        h2: ({ node, children, className: headingClassName, ...props })=>{
            const clean = stripLeadingHashes(children);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: headingId(clean),
                className: `scroll-mt-20 font-sans text-xl font-semibold tracking-tight ${textColor} ${variant === "compact" ? "mt-4 mb-2" : "mt-7 mb-3"} ${headingClassName || ""}`,
                ...props,
                children: clean
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 227,
                columnNumber: 9
            }, this);
        },
        h3: ({ node, children, className: headingClassName, ...props })=>{
            const clean = stripLeadingHashes(children);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                id: headingId(clean),
                className: `scroll-mt-20 font-sans text-lg font-semibold tracking-tight ${textColor} ${variant === "compact" ? "mt-4 mb-1.5" : "mt-6 mb-2.5"} ${headingClassName || ""}`,
                ...props,
                children: clean
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 241,
                columnNumber: 9
            }, this);
        },
        h4: ({ node, children, className: headingClassName, ...props })=>{
            const clean = stripLeadingHashes(children);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                id: headingId(clean),
                className: `scroll-mt-20 font-sans text-base font-semibold ${textColor} ${variant === "compact" ? "mt-3 mb-1.5" : "mt-5 mb-2"} ${headingClassName || ""}`,
                ...props,
                children: clean
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 255,
                columnNumber: 9
            }, this);
        },
        h5: ({ node, children, className: headingClassName, ...props })=>{
            const clean = stripLeadingHashes(children);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                id: headingId(clean),
                className: `scroll-mt-20 font-sans text-sm font-semibold ${textColor} ${variant === "compact" ? "mt-3 mb-1.5" : "mt-4 mb-2"} ${headingClassName || ""}`,
                ...props,
                children: clean
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 269,
                columnNumber: 9
            }, this);
        },
        h6: ({ node, children, className: headingClassName, ...props })=>{
            const clean = stripLeadingHashes(children);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                id: headingId(clean),
                className: `scroll-mt-20 font-sans text-sm font-semibold uppercase tracking-wide text-[var(--muted-foreground)] ${variant === "compact" ? "mt-3 mb-1.5" : "mt-4 mb-2"} ${headingClassName || ""}`,
                ...props,
                children: clean
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 283,
                columnNumber: 9
            }, this);
        }
    };
    const normalComponents = {
        ...headingComponents,
        table: ({ node, children, ...props })=>hasRenderableChildren(children) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `overflow-x-auto rounded-lg border border-[var(--border)] shadow-sm ${gap}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full divide-y divide-[var(--border)] text-sm",
                    ...props,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                    lineNumber: 301,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 300,
                columnNumber: 9
            }, this) : null,
        thead: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                className: "bg-[var(--muted)]",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 306,
                columnNumber: 41
            }, this),
        th: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                className: `border-b border-[var(--border)] text-left font-semibold text-[var(--foreground)] ${cellPad}`,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this),
        tbody: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                className: "divide-y divide-[var(--border)] bg-[var(--card)]",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this),
        td: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: `border-b border-[var(--border)] text-[var(--muted-foreground)] ${cellPad}`,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
        tr: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                className: "transition-colors hover:bg-[var(--muted)]/60",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this),
        pre: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: children
            }, void 0, false),
        code: ({ node, className: blockClassName, children, ...props })=>{
            const raw = String(children).replace(/\n$/, "");
            const langMatch = /language-([A-Za-z0-9_+#.-]+)/.exec(blockClassName || "");
            const lang = langMatch?.[1]?.toLowerCase() || "";
            if (lang === "mermaid" && enableMermaid) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LazyMermaid, {
                    chart: raw,
                    className: gap
                }, void 0, false, {
                    fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                    lineNumber: 332,
                    columnNumber: 16
                }, this);
            }
            if (lang && enableCode) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LazyCodeBlock, {
                    raw: raw,
                    lang: lang,
                    className: gap
                }, void 0, false, {
                    fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                    lineNumber: 336,
                    columnNumber: 16
                }, this);
            }
            if (raw.includes("\n")) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `md-code-block ${gap} overflow-hidden rounded-xl border border-[var(--border)] bg-[#292524]`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "overflow-x-auto p-4 text-sm leading-relaxed text-[#D6D3D1]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                            ...props,
                            children: raw
                        }, void 0, false, {
                            fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                            lineNumber: 345,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                        lineNumber: 344,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                    lineNumber: 341,
                    columnNumber: 11
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                className: "md-inline-code rounded bg-[var(--muted)] px-1.5 py-0.5 font-mono text-[0.875em] text-[var(--foreground)]",
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 352,
                columnNumber: 9
            }, this);
        },
        a: ({ node, href, children, title, ...props })=>{
            const isCitation = title === "citation";
            const isHashLink = href?.startsWith("#");
            const external = href?.startsWith("http://") || href?.startsWith("https://");
            if (isCitation) {
                const label = extractText(children);
                const ids = label.split(/\s*,\s*/);
                const scrollToRef = (event)=>{
                    event.preventDefault();
                    const target = document.getElementById("references");
                    target?.scrollIntoView({
                        block: "start",
                        behavior: "smooth"
                    });
                };
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "citation-group mx-0.5 text-[0.78em] leading-snug text-[var(--muted-foreground)]",
                    ...props,
                    children: [
                        "[",
                        ids.map((id, idx)=>{
                            const prefixMatch = id.match(/^(web|rag|code|src)-/);
                            const prefix = prefixMatch?.[1] ?? "";
                            const num = prefix && prefixMatch ? id.slice(prefixMatch[0].length) : id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                children: [
                                    idx > 0 && ", ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: href,
                                        onClick: scrollToRef,
                                        className: "cursor-pointer text-[var(--primary)] no-underline transition-colors hover:text-[var(--primary)]/70 hover:underline",
                                        children: prefix ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[0.85em] font-semibold uppercase tracking-wide",
                                                    children: prefix
                                                }, void 0, false, {
                                                    fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 33
                                                }, this),
                                                num
                                            ]
                                        }, void 0, true) : num
                                    }, void 0, false, {
                                        fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                                        lineNumber: 383,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, id, true, {
                                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                                lineNumber: 381,
                                columnNumber: 17
                            }, this);
                        }),
                        "]"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                    lineNumber: 374,
                    columnNumber: 11
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: href,
                ...external ? {
                    target: "_blank",
                    rel: "noopener noreferrer"
                } : {},
                onClick: (event)=>{
                    if (!isHashLink || !href) return;
                    event.preventDefault();
                    const targetId = decodeURIComponent(href.slice(1));
                    const target = document.getElementById(targetId);
                    target?.scrollIntoView({
                        block: "start",
                        behavior: "smooth"
                    });
                },
                className: "text-[var(--primary)] underline decoration-[var(--primary)]/40 underline-offset-2 transition-colors hover:decoration-[var(--primary)]",
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 399,
                columnNumber: 9
            }, this);
        },
        img: ({ node, src, alt, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src,
                alt: alt || "",
                loading: "lazy",
                className: `${gap} inline-block max-w-full rounded-lg border border-[var(--border)]`,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 418,
                columnNumber: 7
            }, this),
        blockquote: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                className: `${gap} border-l-[3px] border-[var(--muted-foreground)] pl-4 italic text-[var(--muted-foreground)] [&>p]:mb-1`,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 427,
                columnNumber: 7
            }, this),
        hr: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: `${gap} h-px border-none bg-[var(--border)]`,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 433,
                columnNumber: 7
            }, this),
        input: ({ node, type, checked, ...props })=>type === "checkbox" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "checkbox",
                checked: checked ?? false,
                readOnly: true,
                className: "mr-2 h-4 w-4 rounded border-[var(--border)] align-middle accent-[var(--primary)]",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 437,
                columnNumber: 9
            }, this) : null,
        progress: ()=>null,
        meter: ()=>null,
        button: ()=>null,
        select: ()=>null,
        option: ()=>null,
        textarea: ()=>null,
        details: ({ node, children, ...props })=>hasRenderableDetailsBody(children) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: `${gap} rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2`,
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 453,
                columnNumber: 9
            }, this) : null,
        summary: ({ node, children, ...props })=>hasRenderableChildren(children) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                className: "cursor-pointer select-none font-medium text-[var(--foreground)]",
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
                lineNumber: 462,
                columnNumber: 9
            }, this) : null
    };
    const components = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RichMarkdownRenderer.useMemo[components]": ()=>isTrace ? traceComponents : normalComponents
    }["RichMarkdownRenderer.useMemo[components]"], // eslint-disable-next-line react-hooks/exhaustive-deps -- components only change with variant/feature flags
    [
        isTrace,
        variant,
        enableMermaid,
        enableCode
    ]);
    const rootClasses = isTrace ? "md-renderer max-w-none font-sans text-[11px] leading-[1.55] text-[var(--muted-foreground)]" : variant === "prose" ? "md-renderer prose max-w-none font-serif" : "md-renderer prose prose-sm max-w-none font-serif";
    const remarkPlugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RichMarkdownRenderer.useMemo[remarkPlugins]": ()=>{
            const p = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            ];
            if (plugins.remarkMath) p.push(plugins.remarkMath);
            return p;
        }
    }["RichMarkdownRenderer.useMemo[remarkPlugins]"], [
        plugins.remarkMath
    ]);
    const rehypePlugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RichMarkdownRenderer.useMemo[rehypePlugins]": ()=>{
            const p = [];
            if (allowHtml && plugins.rehypeRaw) p.push(plugins.rehypeRaw);
            if (enableMath && plugins.rehypeKatex) p.push(plugins.rehypeKatex);
            return p;
        }
    }["RichMarkdownRenderer.useMemo[rehypePlugins]"], [
        allowHtml,
        enableMath,
        plugins.rehypeRaw,
        plugins.rehypeKatex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${rootClasses} ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
            remarkPlugins: remarkPlugins,
            rehypePlugins: rehypePlugins,
            components: components,
            children: processedContent
        }, void 0, false, {
            fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
            lineNumber: 498,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/common/RichMarkdownRenderer.tsx",
        lineNumber: 497,
        columnNumber: 5
    }, this);
}
_s1(RichMarkdownRenderer, "g9+/4JBHT9kD5dYYNYRDTWRR45c=");
_c3 = RichMarkdownRenderer;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "MermaidLoading");
__turbopack_context__.k.register(_c1, "LazyMermaid");
__turbopack_context__.k.register(_c2, "LazyCodeBlock");
__turbopack_context__.k.register(_c3, "RichMarkdownRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/common/RichMarkdownRenderer.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/common/RichMarkdownRenderer.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_a7215ef6._.js.map