(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/common/SimpleMarkdownRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SimpleMarkdownRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$markdown$2d$display$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/markdown-display.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
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
function SimpleMarkdownRenderer({ content, className = "", variant = "default" }) {
    _s();
    const normalizedContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SimpleMarkdownRenderer.useMemo[normalizedContent]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$markdown$2d$display$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeMarkdownForDisplay"])(content)
    }["SimpleMarkdownRenderer.useMemo[normalizedContent]"], [
        content
    ]);
    const isTrace = variant === "trace";
    const gap = isTrace ? "my-1" : variant === "compact" ? "my-2" : "my-4";
    const cellPad = isTrace ? "px-1.5 py-1" : variant === "compact" ? "px-2 py-1.5" : "px-3 py-2";
    const headingSpacing = variant === "compact" ? "mt-4 mb-2" : "mt-6 mb-3";
    const textColor = "text-[var(--foreground)]";
    const traceComponents = {
        p: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 last:mb-0",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 75,
                columnNumber: 37
            }, this),
        h1: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 76,
                columnNumber: 38
            }, this),
        h2: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 77,
                columnNumber: 38
            }, this),
        h3: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 78,
                columnNumber: 38
            }, this),
        h4: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 79,
                columnNumber: 38
            }, this),
        h5: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 80,
                columnNumber: 38
            }, this),
        h6: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 81,
                columnNumber: 38
            }, this),
        strong: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                className: "font-semibold text-[var(--foreground)]",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
        em: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                className: "italic",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 85,
                columnNumber: 38
            }, this),
        a: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "underline underline-offset-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
        blockquote: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-l border-current/20 pl-3 opacity-80",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
        pre: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: children
            }, void 0, false),
        code: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                className: "rounded bg-[var(--muted)] px-1 py-0.5 font-mono text-[0.95em] text-[var(--foreground)]",
                children: String(children).replace(/\n$/, "")
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
        img: ()=>null,
        hr: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-1 h-px bg-current opacity-10"
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 99,
                columnNumber: 15
            }, this),
        ul: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "my-1 ml-4 list-disc",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 100,
                columnNumber: 38
            }, this),
        ol: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "my-1 ml-4 list-decimal",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 101,
                columnNumber: 38
            }, this),
        li: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "my-0.5 pl-0",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 102,
                columnNumber: 38
            }, this),
        table: ({ node, children, ...props })=>hasRenderableChildren(children) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-1 overflow-x-auto rounded border border-[var(--border)]/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full text-[inherit]",
                    ...props,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                    lineNumber: 106,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this) : null,
        thead: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                className: "bg-[var(--muted)]/50",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 111,
                columnNumber: 41
            }, this),
        th: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                className: "border-b border-[var(--border)]/50 px-1.5 py-0.5 text-left font-medium",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
        tbody: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 118,
                columnNumber: 41
            }, this),
        td: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "border-b border-[var(--border)]/30 px-1.5 py-0.5",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
        tr: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 122,
                columnNumber: 38
            }, this),
        input: ({ node, type, ...props })=>type === "checkbox" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "checkbox",
                readOnly: true,
                className: "mr-1 align-middle",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 125,
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
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 134,
                columnNumber: 44
            }, this) : null,
        summary: ({ node, children })=>hasRenderableChildren(children) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 136,
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
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 143,
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
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 157,
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
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 171,
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
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 185,
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
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 199,
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
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 213,
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
                    fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                    lineNumber: 231,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 230,
                columnNumber: 9
            }, this) : null,
        thead: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                className: "bg-[var(--muted)]",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 236,
                columnNumber: 41
            }, this),
        th: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                className: `border-b border-[var(--border)] text-left font-semibold text-[var(--foreground)] ${cellPad}`,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
        tbody: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                className: "divide-y divide-[var(--border)] bg-[var(--card)]",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
        td: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: `border-b border-[var(--border)] text-[var(--muted-foreground)] ${cellPad}`,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
        tr: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                className: "transition-colors hover:bg-[var(--muted)]/60",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
        pre: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: children
            }, void 0, false),
        code: ({ node, children, ...props })=>{
            const raw = String(children).replace(/\n$/, "");
            if (raw.includes("\n")) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `md-code-block ${gap} overflow-hidden rounded-xl border border-[var(--border)] bg-[#292524]`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "overflow-x-auto p-4 text-sm leading-relaxed text-[#D6D3D1]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                            ...props,
                            children: raw
                        }, void 0, false, {
                            fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                            lineNumber: 265,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                        lineNumber: 264,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                    lineNumber: 261,
                    columnNumber: 11
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                className: "md-inline-code rounded bg-[var(--muted)] px-1.5 py-0.5 font-mono text-[0.875em] text-[var(--foreground)]",
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 272,
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
                                                    fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 33
                                                }, this),
                                                num
                                            ]
                                        }, void 0, true) : num
                                    }, void 0, false, {
                                        fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                                        lineNumber: 303,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, id, true, {
                                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                                lineNumber: 301,
                                columnNumber: 17
                            }, this);
                        }),
                        "]"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                    lineNumber: 294,
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
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 319,
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
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, this),
        blockquote: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                className: `${gap} border-l-[3px] border-[var(--muted-foreground)] pl-4 italic text-[var(--muted-foreground)] [&>p]:mb-1`,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
        hr: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: `${gap} h-px border-none bg-[var(--border)]`,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this),
        input: ({ node, type, checked, ...props })=>type === "checkbox" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "checkbox",
                checked: checked,
                readOnly: true,
                className: "mr-2 h-4 w-4 rounded border-[var(--border)] align-middle accent-[var(--primary)]",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 357,
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
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 373,
                columnNumber: 9
            }, this) : null,
        summary: ({ node, children, ...props })=>hasRenderableChildren(children) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                className: "cursor-pointer select-none font-medium text-[var(--foreground)]",
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 382,
                columnNumber: 9
            }, this) : null
    };
    const components = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SimpleMarkdownRenderer.useMemo[components]": ()=>isTrace ? traceComponents : normalComponents
    }["SimpleMarkdownRenderer.useMemo[components]"], // eslint-disable-next-line react-hooks/exhaustive-deps -- components only change with variant
    [
        isTrace,
        variant
    ]);
    const remarkPlugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SimpleMarkdownRenderer.useMemo[remarkPlugins]": ()=>[
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            ]
    }["SimpleMarkdownRenderer.useMemo[remarkPlugins]"], []);
    const rootClasses = isTrace ? "md-renderer max-w-none font-sans text-[11px] leading-[1.55] text-[var(--muted-foreground)]" : variant === "prose" ? "md-renderer prose max-w-none font-serif" : "md-renderer prose prose-sm max-w-none font-serif";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${rootClasses} ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
            remarkPlugins: remarkPlugins,
            components: components,
            children: normalizedContent
        }, void 0, false, {
            fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
            lineNumber: 407,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
        lineNumber: 406,
        columnNumber: 5
    }, this);
}
_s(SimpleMarkdownRenderer, "vpnwTR16CfINMnhPc2xJauYpBUM=");
_c = SimpleMarkdownRenderer;
var _c;
__turbopack_context__.k.register(_c, "SimpleMarkdownRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/common/MarkdownRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarkdownRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$SimpleMarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/SimpleMarkdownRenderer.tsx [app-client] (ecmascript)");
;
"use client";
;
;
;
const RichMarkdownRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/common/RichMarkdownRenderer.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/common/RichMarkdownRenderer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = RichMarkdownRenderer;
function detectMathContent(content) {
    if (/(^|[^\\])\$\$[\s\S]+?\$\$/.test(content)) return true;
    if (/\\\(|\\\[/.test(content)) return true;
    // Single-dollar inline math containing LaTeX commands (\cmd) or math operators ({}_^)
    if (/(?:^|[^$\\])\$(?!\$|\s)(?:[^$\n]*(?:\\[a-zA-Z]+|[{}_^]))[^$\n]*\$(?!\$)/m.test(content)) return true;
    return false;
}
function detectCodeContent(content) {
    return /```[A-Za-z0-9_+#.-]+/.test(content);
}
function detectMermaidContent(content) {
    return /```mermaid/i.test(content);
}
function detectHtmlContent(content) {
    return /<\/?[A-Za-z][\w:-]*(\s|>)/.test(content);
}
function MarkdownRenderer({ content, className = "", variant = "default", enableMath, enableCode, enableMermaid, allowHtml }) {
    const resolvedEnableMath = enableMath ?? detectMathContent(content);
    const resolvedEnableCode = enableCode ?? detectCodeContent(content);
    const resolvedEnableMermaid = enableMermaid ?? detectMermaidContent(content);
    const resolvedAllowHtml = allowHtml ?? detectHtmlContent(content);
    const shouldUseRich = variant !== "trace" && (resolvedEnableMath || resolvedEnableCode || resolvedEnableMermaid || resolvedAllowHtml);
    if (!shouldUseRich) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$SimpleMarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            content: content,
            className: className,
            variant: variant
        }, void 0, false, {
            fileName: "[project]/components/common/MarkdownRenderer.tsx",
            lineNumber: 59,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RichMarkdownRenderer, {
        content: content,
        className: className,
        variant: variant,
        enableMath: resolvedEnableMath,
        enableCode: resolvedEnableCode,
        enableMermaid: resolvedEnableMermaid,
        allowHtml: resolvedAllowHtml
    }, void 0, false, {
        fileName: "[project]/components/common/MarkdownRenderer.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_c1 = MarkdownRenderer;
var _c, _c1;
__turbopack_context__.k.register(_c, "RichMarkdownRenderer");
__turbopack_context__.k.register(_c1, "MarkdownRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/common/MarkdownRenderer.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/common/MarkdownRenderer.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_common_6c53dad2._.js.map