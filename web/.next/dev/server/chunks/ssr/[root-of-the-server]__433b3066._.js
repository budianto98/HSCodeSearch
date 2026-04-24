module.exports = [
"[project]/components/chat/AtMentionPopup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AtMentionPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
"use client";
;
;
function AtMentionPopup({ open, onSelectNotebook, onSelectHistory }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-full left-0 z-[70] mb-2 w-56 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-2 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onSelectNotebook,
                className: "w-full rounded-xl px-3 py-2.5 text-left text-[14px] font-medium text-[var(--foreground)] transition hover:bg-[var(--muted)]/70",
                children: t("Notebook")
            }, void 0, false, {
                fileName: "[project]/components/chat/AtMentionPopup.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onSelectHistory,
                className: "w-full rounded-xl px-3 py-2.5 text-left text-[14px] font-medium text-[var(--foreground)] transition hover:bg-[var(--muted)]/70",
                children: t("Chat History")
            }, void 0, false, {
                fileName: "[project]/components/chat/AtMentionPopup.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/AtMentionPopup.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs) <export default as minpath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minpath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs) <export default as minproc>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minproc",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "urlToPath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
}),
"[project]/components/common/SimpleMarkdownRenderer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SimpleMarkdownRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-ssr] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$markdown$2d$display$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/markdown-display.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function extractText(children) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.toArray(children).map((child)=>{
        if (typeof child === "string" || typeof child === "number") {
            return String(child);
        }
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(child)) {
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.toArray(children).some((child)=>{
        if (typeof child === "string" || typeof child === "number") {
            return String(child).replace(/[\s\u200B-\u200D\uFEFF]/g, "").length > 0;
        }
        if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(child)) return false;
        if (typeof child.type === "string" && child.type.toLowerCase() === "summary") {
            return false;
        }
        return true;
    });
}
function stripLeadingHashes(children) {
    const arr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.toArray(children);
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
    const normalizedContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$markdown$2d$display$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeMarkdownForDisplay"])(content), [
        content
    ]);
    const isTrace = variant === "trace";
    const gap = isTrace ? "my-1" : variant === "compact" ? "my-2" : "my-4";
    const cellPad = isTrace ? "px-1.5 py-1" : variant === "compact" ? "px-2 py-1.5" : "px-3 py-2";
    const headingSpacing = variant === "compact" ? "mt-4 mb-2" : "mt-6 mb-3";
    const textColor = "text-[var(--foreground)]";
    const traceComponents = {
        p: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 last:mb-0",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 75,
                columnNumber: 37
            }, this),
        h1: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 76,
                columnNumber: 38
            }, this),
        h2: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 77,
                columnNumber: 38
            }, this),
        h3: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 78,
                columnNumber: 38
            }, this),
        h4: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 79,
                columnNumber: 38
            }, this),
        h5: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 80,
                columnNumber: 38
            }, this),
        h6: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 81,
                columnNumber: 38
            }, this),
        strong: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                className: "font-semibold text-[var(--foreground)]",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
        em: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                className: "italic",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 85,
                columnNumber: 38
            }, this),
        a: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "underline underline-offset-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
        blockquote: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-l border-current/20 pl-3 opacity-80",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
        pre: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: children
            }, void 0, false),
        code: ({ node, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                className: "rounded bg-[var(--muted)] px-1 py-0.5 font-mono text-[0.95em] text-[var(--foreground)]",
                children: String(children).replace(/\n$/, "")
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
        img: ()=>null,
        hr: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-1 h-px bg-current opacity-10"
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 99,
                columnNumber: 15
            }, this),
        ul: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "my-1 ml-4 list-disc",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 100,
                columnNumber: 38
            }, this),
        ol: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "my-1 ml-4 list-decimal",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 101,
                columnNumber: 38
            }, this),
        li: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "my-0.5 pl-0",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 102,
                columnNumber: 38
            }, this),
        table: ({ node, children, ...props })=>hasRenderableChildren(children) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-1 overflow-x-auto rounded border border-[var(--border)]/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
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
        thead: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                className: "bg-[var(--muted)]/50",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 111,
                columnNumber: 41
            }, this),
        th: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                className: "border-b border-[var(--border)]/50 px-1.5 py-0.5 text-left font-medium",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
        tbody: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 118,
                columnNumber: 41
            }, this),
        td: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "border-b border-[var(--border)]/30 px-1.5 py-0.5",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
        tr: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 122,
                columnNumber: 38
            }, this),
        input: ({ node, type, ...props })=>type === "checkbox" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
        details: ({ node, children })=>hasRenderableDetailsBody(children) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 134,
                columnNumber: 44
            }, this) : null,
        summary: ({ node, children })=>hasRenderableChildren(children) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
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
        table: ({ node, children, ...props })=>hasRenderableChildren(children) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `overflow-x-auto rounded-lg border border-[var(--border)] shadow-sm ${gap}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
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
        thead: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                className: "bg-[var(--muted)]",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 236,
                columnNumber: 41
            }, this),
        th: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                className: `border-b border-[var(--border)] text-left font-semibold text-[var(--foreground)] ${cellPad}`,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
        tbody: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                className: "divide-y divide-[var(--border)] bg-[var(--card)]",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
        td: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: `border-b border-[var(--border)] text-[var(--muted-foreground)] ${cellPad}`,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
        tr: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                className: "transition-colors hover:bg-[var(--muted)]/60",
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
        pre: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: children
            }, void 0, false),
        code: ({ node, children, ...props })=>{
            const raw = String(children).replace(/\n$/, "");
            if (raw.includes("\n")) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `md-code-block ${gap} overflow-hidden rounded-xl border border-[var(--border)] bg-[#292524]`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "overflow-x-auto p-4 text-sm leading-relaxed text-[#D6D3D1]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "citation-group mx-0.5 text-[0.78em] leading-snug text-[var(--muted-foreground)]",
                    ...props,
                    children: [
                        "[",
                        ids.map((id, idx)=>{
                            const prefixMatch = id.match(/^(web|rag|code|src)-/);
                            const prefix = prefixMatch?.[1] ?? "";
                            const num = prefix && prefixMatch ? id.slice(prefixMatch[0].length) : id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                children: [
                                    idx > 0 && ", ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: href,
                                        onClick: scrollToRef,
                                        className: "cursor-pointer text-[var(--primary)] no-underline transition-colors hover:text-[var(--primary)]/70 hover:underline",
                                        children: prefix ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
        img: ({ node, src, alt, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
        blockquote: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                className: `${gap} border-l-[3px] border-[var(--muted-foreground)] pl-4 italic text-[var(--muted-foreground)] [&>p]:mb-1`,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
        hr: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: `${gap} h-px border-none bg-[var(--border)]`,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this),
        input: ({ node, type, checked, ...props })=>type === "checkbox" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
        details: ({ node, children, ...props })=>hasRenderableDetailsBody(children) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: `${gap} rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2`,
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 373,
                columnNumber: 9
            }, this) : null,
        summary: ({ node, children, ...props })=>hasRenderableChildren(children) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                className: "cursor-pointer select-none font-medium text-[var(--foreground)]",
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/SimpleMarkdownRenderer.tsx",
                lineNumber: 382,
                columnNumber: 9
            }, this) : null
    };
    const components = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>isTrace ? traceComponents : normalComponents, // eslint-disable-next-line react-hooks/exhaustive-deps -- components only change with variant
    [
        isTrace,
        variant
    ]);
    const remarkPlugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
        ], []);
    const rootClasses = isTrace ? "md-renderer max-w-none font-sans text-[11px] leading-[1.55] text-[var(--muted-foreground)]" : variant === "prose" ? "md-renderer prose max-w-none font-serif" : "md-renderer prose prose-sm max-w-none font-serif";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${rootClasses} ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
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
}),
"[project]/components/common/MarkdownRenderer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarkdownRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$SimpleMarkdownRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/SimpleMarkdownRenderer.tsx [app-ssr] (ecmascript)");
;
"use client";
;
;
;
const RichMarkdownRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/common/RichMarkdownRenderer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$SimpleMarkdownRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            content: content,
            className: className,
            variant: variant
        }, void 0, false, {
            fileName: "[project]/components/common/MarkdownRenderer.tsx",
            lineNumber: 59,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RichMarkdownRenderer, {
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
}),
"[project]/components/common/AssistantResponse.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AssistantResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/MarkdownRenderer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$markdown$2d$display$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/markdown-display.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function AssistantResponse({ content, className = "text-[14px] leading-[1.75]" }) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$markdown$2d$display$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasVisibleMarkdownContent"])(content)) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            content: content,
            variant: "prose",
            className: "text-[var(--foreground)]"
        }, void 0, false, {
            fileName: "[project]/components/common/AssistantResponse.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/common/AssistantResponse.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/math-animator-types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_MATH_ANIMATOR_CONFIG",
    ()=>DEFAULT_MATH_ANIMATOR_CONFIG,
    "buildMathAnimatorWSConfig",
    ()=>buildMathAnimatorWSConfig,
    "extractMathAnimatorResult",
    ()=>extractMathAnimatorResult
]);
const DEFAULT_MATH_ANIMATOR_CONFIG = {
    output_mode: "video",
    quality: "medium",
    style_hint: ""
};
function buildMathAnimatorWSConfig(cfg) {
    return {
        output_mode: cfg.output_mode,
        quality: cfg.quality,
        style_hint: cfg.style_hint.trim()
    };
}
function extractMathAnimatorResult(resultMetadata) {
    if (!resultMetadata) return null;
    const artifacts = Array.isArray(resultMetadata.artifacts) ? resultMetadata.artifacts.filter((item)=>{
        return Boolean(item && typeof item === "object" && "type" in item && "url" in item && "filename" in item);
    }) : [];
    const codeRaw = resultMetadata.code && typeof resultMetadata.code === "object" ? resultMetadata.code : {};
    const hasOutputMode = resultMetadata.output_mode === "image" || resultMetadata.output_mode === "video";
    const timings = resultMetadata.timings && typeof resultMetadata.timings === "object" ? resultMetadata.timings : {};
    const render = resultMetadata.render && typeof resultMetadata.render === "object" ? resultMetadata.render : {};
    const outputMode = resultMetadata.output_mode === "image" ? "image" : "video";
    // A plain `response` field is common across capabilities. Only treat the
    // payload as a math-animator result when it carries math-animator-specific
    // artifacts or render metadata.
    if (!artifacts.length && !codeRaw.content && !hasOutputMode && Object.keys(timings).length === 0 && Object.keys(render).length === 0) {
        return null;
    }
    return {
        response: String(resultMetadata.response ?? ""),
        output_mode: outputMode,
        code: {
            language: String(codeRaw.language ?? "python"),
            content: String(codeRaw.content ?? "")
        },
        artifacts,
        timings,
        render,
        summary: resultMetadata.summary && typeof resultMetadata.summary === "object" ? resultMetadata.summary : undefined
    };
}
}),
"[project]/lib/quiz-types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Shared types for Quiz Generation (deep_question capability).
 */ __turbopack_context__.s([
    "DEFAULT_QUIZ_CONFIG",
    ()=>DEFAULT_QUIZ_CONFIG,
    "buildQuizFollowupConfig",
    ()=>buildQuizFollowupConfig,
    "buildQuizWSConfig",
    ()=>buildQuizWSConfig,
    "extractQuizQuestions",
    ()=>extractQuizQuestions
]);
const DEFAULT_QUIZ_CONFIG = {
    mode: "custom",
    topic: "",
    num_questions: 3,
    difficulty: "auto",
    question_type: "auto",
    preference: "",
    paper_path: "",
    max_questions: 10
};
function extractQuizQuestions(resultMetadata) {
    if (!resultMetadata) return null;
    const summary = resultMetadata.summary;
    if (!summary) return null;
    const results = summary.results;
    if (!Array.isArray(results) || results.length === 0) return null;
    const parsed = results.map((item)=>{
        const qa = item.qa_pair ?? item;
        if (!qa.question) return null;
        const question = {
            question_id: String(qa.question_id ?? ""),
            question: String(qa.question ?? ""),
            question_type: qa.question_type ?? "written",
            options: qa.options,
            correct_answer: String(qa.correct_answer ?? ""),
            explanation: String(qa.explanation ?? ""),
            difficulty: qa.difficulty ? String(qa.difficulty) : undefined,
            concentration: qa.concentration ? String(qa.concentration) : undefined,
            knowledge_context: qa.metadata && typeof qa.metadata === "object" && "knowledge_context" in qa.metadata && qa.metadata.knowledge_context ? String(qa.metadata.knowledge_context) : undefined
        };
        return question;
    });
    return parsed.filter((question)=>question !== null);
}
function buildQuizFollowupConfig(question, userAnswer, isCorrect, parentQuizSessionId) {
    const context = {
        question_id: question.question_id,
        question: question.question,
        question_type: question.question_type,
        options: question.options,
        correct_answer: question.correct_answer,
        explanation: question.explanation,
        difficulty: question.difficulty,
        concentration: question.concentration,
        knowledge_context: question.knowledge_context,
        user_answer: userAnswer || undefined,
        is_correct: typeof isCorrect === "boolean" ? isCorrect : undefined,
        parent_quiz_session_id: parentQuizSessionId || undefined
    };
    return {
        followup_question_context: context
    };
}
function buildQuizWSConfig(cfg) {
    if (cfg.mode === "mimic") {
        return {
            mode: "mimic",
            paper_path: cfg.paper_path.trim(),
            max_questions: cfg.max_questions
        };
    }
    return {
        mode: "custom",
        num_questions: cfg.num_questions,
        difficulty: cfg.difficulty === "auto" ? "" : cfg.difficulty,
        question_type: cfg.question_type === "auto" ? "" : cfg.question_type,
        preference: cfg.preference.trim()
    };
}
}),
"[project]/lib/visualize-types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_VISUALIZE_CONFIG",
    ()=>DEFAULT_VISUALIZE_CONFIG,
    "buildVisualizeWSConfig",
    ()=>buildVisualizeWSConfig,
    "extractVisualizeResult",
    ()=>extractVisualizeResult
]);
const DEFAULT_VISUALIZE_CONFIG = {
    render_mode: "auto"
};
function buildVisualizeWSConfig(cfg) {
    return {
        render_mode: cfg.render_mode
    };
}
function extractVisualizeResult(resultMetadata) {
    if (!resultMetadata) return null;
    const renderType = resultMetadata.render_type;
    if (renderType !== "svg" && renderType !== "chartjs" && renderType !== "mermaid") return null;
    const codeRaw = resultMetadata.code && typeof resultMetadata.code === "object" ? resultMetadata.code : {};
    if (!codeRaw.content) return null;
    return {
        response: String(resultMetadata.response ?? ""),
        render_type: renderType,
        code: {
            language: String(codeRaw.language ?? ""),
            content: String(codeRaw.content ?? "")
        },
        analysis: resultMetadata.analysis && typeof resultMetadata.analysis === "object" ? resultMetadata.analysis : {
            render_type: renderType,
            description: "",
            data_description: "",
            chart_type: "",
            visual_elements: [],
            rationale: ""
        },
        review: resultMetadata.review && typeof resultMetadata.review === "object" ? resultMetadata.review : {
            optimized_code: "",
            changed: false,
            review_notes: ""
        }
    };
}
}),
"[project]/components/chat/home/TracePanels.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CallTracePanel",
    ()=>CallTracePanel,
    "ResearchStagePanel",
    ()=>ResearchStagePanel,
    "getTraceMeta",
    ()=>getTraceMeta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-ssr] (ecmascript) <export default as BrainCircuit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-ssr] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-ssr] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/MarkdownRenderer.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const RESEARCH_STAGE_SPECS = [
    {
        id: "understand",
        title: "理解问题",
        hint: "先澄清主题与研究目标。"
    },
    {
        id: "decompose",
        title: "拆解主题",
        hint: "把问题拆成可检索、可学习的子主题。"
    },
    {
        id: "evidence",
        title: "检索证据",
        hint: "结合所选 sources 收集和整理证据。"
    },
    {
        id: "result",
        title: "形成结果",
        hint: "把证据整理成最终输出。"
    }
];
/* ------------------------------------------------------------------ */ /*  Helpers                                                            */ /* ------------------------------------------------------------------ */ function titleCase(value) {
    return value.replaceAll("_", " ").replace(/\b\w/g, (c)=>c.toUpperCase());
}
function humanizeQuestionId(value) {
    return value.replace(/\bq_(\d+)\b/gi, "Question $1");
}
function getTraceMeta(event) {
    return event.metadata ?? {};
}
function getTraceLabel(events) {
    for (const event of events){
        const meta = getTraceMeta(event);
        if (meta.label) return humanizeQuestionId(String(meta.label));
    }
    const fallback = events[0]?.stage || "trace";
    return humanizeQuestionId(titleCase(fallback));
}
function getTraceCallKind(events) {
    for (const event of events){
        const meta = getTraceMeta(event);
        if (meta.call_kind) return String(meta.call_kind);
    }
    return "";
}
function getTraceRole(events) {
    for (const event of events){
        const meta = getTraceMeta(event);
        if (meta.trace_role) return String(meta.trace_role);
    }
    return "";
}
function getTraceGroup(events) {
    for (const event of events){
        const meta = getTraceMeta(event);
        if (meta.trace_group) return String(meta.trace_group);
    }
    return "";
}
function getTraceDurationLabel(events) {
    let start = null;
    let end = null;
    for (const event of events){
        const state = String(getTraceMeta(event).call_state || "");
        if (state === "running" && start === null) start = event.timestamp;
        if ((state === "complete" || state === "error") && end === null) end = event.timestamp;
    }
    if (start === null || end === null) return "";
    const seconds = Math.max(1, Math.round(end - start));
    return `${seconds}s`;
}
function getTraceStartTimestamp(events) {
    for (const event of events){
        const state = String(getTraceMeta(event).call_state || "");
        if (state === "running") return event.timestamp;
    }
    return null;
}
function getActiveTraceDurationSeconds(events, nowSeconds) {
    const start = getTraceStartTimestamp(events);
    if (start === null) return null;
    return Math.max(1, Math.round(nowSeconds - start));
}
function isTracePending(events) {
    let hasRunning = false;
    let hasTerminal = false;
    for (const event of events){
        const state = String(getTraceMeta(event).call_state || "");
        if (state === "running") hasRunning = true;
        if (state === "complete" || state === "error") hasTerminal = true;
    }
    return hasRunning && !hasTerminal;
}
function getTraceHeader(events, nowSeconds, nested, t = (k)=>k) {
    const label = getTraceLabel(events);
    const role = getTraceRole(events);
    const group = getTraceGroup(events);
    const kind = getTraceCallKind(events);
    const meta = getTraceMeta(events[0]);
    const duration = kind === "math_render_output" && isTracePending(events) && nowSeconds ? `${getActiveTraceDurationSeconds(events, nowSeconds) ?? 1}s` : getTraceDurationLabel(events);
    let title = label;
    if ([
        "math_concept_analysis",
        "math_concept_design",
        "math_code_generation",
        "math_code_retry",
        "math_summary",
        "math_render_output"
    ].includes(kind)) {
        title = label;
    } else if (role === "retrieve") {
        title = t("Retrieve");
    } else if (kind === "tool_planning") {
        title = t("Tool call");
    } else if (group === "react_round") {
        if (nested) {
            title = meta.round ? `Round ${meta.round}` : label;
        } else {
            const step = meta.step_id ? `Step ${meta.step_id}` : "";
            const round = meta.round ? `Round ${meta.round}` : label;
            title = [
                step,
                round
            ].filter(Boolean).join(" · ");
        }
    } else if (role === "plan" && kind === "llm_planning") {
        title = t("Plan");
    } else if (role === "observe" || kind === "llm_observation") {
        title = t("Observe");
    } else if (role === "response" || kind === "llm_final_response") {
        title = t("Response");
    } else if (role === "thought" || kind === "llm_reasoning") {
        title = t("Thought");
    } else if (kind === "llm_generation") {
        if (/^generate\s+/i.test(label)) title = label.replace(/^generate\s+/i, "Generating ");
        else if (/^write\s+/i.test(label)) title = label.replace(/^write\s+/i, "Writing ");
    }
    return duration ? `${title} for ${duration}` : title;
}
function getTraceText(events, eventTypes) {
    const textEvents = events.filter((event)=>eventTypes.includes(event.type) && event.content.trim().length > 0);
    if (!textEvents.length) return "";
    const explicitOutputs = textEvents.filter((event)=>String(getTraceMeta(event).trace_kind || "") === "llm_output");
    if (explicitOutputs.length > 0) {
        return explicitOutputs[explicitOutputs.length - 1].content;
    }
    return textEvents.map((event)=>event.content).join("");
}
function formatTraceArgs(args) {
    if (args == null) return "";
    try {
        return JSON.stringify(args, null, 2);
    } catch  {
        return String(args);
    }
}
/* ------------------------------------------------------------------ */ /*  Display-item grouping (step-level)                                 */ /* ------------------------------------------------------------------ */ function buildDisplayItems(traceGroups) {
    const items = [];
    let stepId_ = null;
    let stepTraces = [];
    function flushStep() {
        if (stepId_ !== null && stepTraces.length > 0) {
            items.push({
                kind: "step",
                stepId: stepId_,
                traces: stepTraces
            });
        }
        stepId_ = null;
        stepTraces = [];
    }
    for (const group of traceGroups){
        const meta = getTraceMeta(group.events[0]);
        const groupType = getTraceGroup(group.events);
        const stepId = meta.step_id ? String(meta.step_id) : "";
        const kind = getTraceCallKind(group.events);
        if (kind === "llm_final_response") continue;
        if (groupType === "react_round" && stepId) {
            if (stepId_ === stepId) {
                stepTraces.push(group);
            } else {
                flushStep();
                stepId_ = stepId;
                stepTraces = [
                    group
                ];
            }
        } else if (stepId_ !== null && kind !== "llm_generation") {
            stepTraces.push(group);
        } else {
            flushStep();
            items.push({
                kind: "trace",
                trace: group
            });
        }
    }
    flushStep();
    return items;
}
function getStepGroupDuration(traces) {
    let start = null;
    let end = null;
    for (const trace of traces){
        for (const event of trace.events){
            const state = String(getTraceMeta(event).call_state || "");
            if (state === "running" && (start === null || event.timestamp < start)) start = event.timestamp;
            if ((state === "complete" || state === "error") && (end === null || event.timestamp > end)) end = event.timestamp;
        }
    }
    if (start === null || end === null) return "";
    return `${Math.max(1, Math.round(end - start))}s`;
}
/* ------------------------------------------------------------------ */ /*  Primitive UI pieces                                                */ /* ------------------------------------------------------------------ */ function ScrollableTraceBody({ children, autoScroll, className = "ml-5 mr-3 mt-0.5 max-h-[180px] overflow-y-auto px-3 py-1" }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stickRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!autoScroll || !stickRef.current) return;
        const el = ref.current;
        if (el) el.scrollTop = el.scrollHeight;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (autoScroll) stickRef.current = true;
    }, [
        autoScroll
    ]);
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const el = ref.current;
        if (!el) return;
        stickRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < 30;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        onScroll: handleScroll,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/chat/home/TracePanels.tsx",
        lineNumber: 314,
        columnNumber: 5
    }, this);
}
function TraceIcon({ kind, phase }) {
    const Icon = kind === "rag_retrieval" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"] : kind === "llm_final_response" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"] : kind === "llm_observation" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"] : kind === "llm_generation" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"] : phase === "writing" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"] : phase === "planning" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"] : phase === "acting" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        size: 12,
        strokeWidth: 1.6,
        className: "shrink-0"
    }, void 0, false, {
        fileName: "[project]/components/chat/home/TracePanels.tsx",
        lineNumber: 337,
        columnNumber: 10
    }, this);
}
function TraceSection({ title, children }) {
    if (!children) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-0.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "not-italic text-[10px] font-semibold tracking-[0.04em] text-[var(--muted-foreground)]/70",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/chat/home/TracePanels.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/home/TracePanels.tsx",
        lineNumber: 349,
        columnNumber: 5
    }, this);
}
/* ------------------------------------------------------------------ */ /*  Per-trace rendering                                                */ /* ------------------------------------------------------------------ */ function TraceRowBody({ callId, callEvents, group, role, kind, t }) {
    const progressEvents = callEvents.filter((event)=>{
        if (event.type !== "progress") return false;
        const traceKind = String(getTraceMeta(event).trace_kind || "");
        if (traceKind === "call_status") return false;
        return event.content.trim().length > 0;
    });
    const toolEvents = callEvents.filter((event)=>event.type === "tool_call" || event.type === "tool_result");
    const summaryProgressEvents = progressEvents.filter((event)=>String(getTraceMeta(event).trace_layer || "summary") !== "raw");
    const rawProgressEvents = progressEvents.filter((event)=>String(getTraceMeta(event).trace_layer || "") === "raw");
    const errorEvents = callEvents.filter((event)=>event.type === "error" && event.content.trim().length > 0);
    const thoughtText = getTraceText(callEvents, [
        "thinking"
    ]);
    const observationText = getTraceText(callEvents, [
        "observation"
    ]);
    const contentText = getTraceText(callEvents, [
        "content"
    ]);
    const genericBodyText = role === "observe" ? observationText : role === "retrieve" ? "" : thoughtText || contentText;
    const inlineSources = callEvents.flatMap((event)=>getTraceMeta(event).sources ?? []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-[11px] italic leading-[1.6] text-[var(--muted-foreground)]",
        children: [
            group === "react_round" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TraceSection, {
                        title: t("Thought"),
                        children: thoughtText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            content: thoughtText,
                            variant: "trace"
                        }, void 0, false, {
                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                            lineNumber: 411,
                            columnNumber: 28
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                        lineNumber: 410,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TraceSection, {
                        title: t("Tool"),
                        children: toolEvents.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-0.5",
                            children: toolEvents.map((event, idx)=>{
                                if (event.type === "tool_call") {
                                    const formattedArgs = formatTraceArgs(event.metadata?.args);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "opacity-50",
                                                children: "→ "
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                lineNumber: 421,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: event.content
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                lineNumber: 422,
                                                columnNumber: 25
                                            }, this),
                                            formattedArgs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                className: "ml-3 mt-0.5 whitespace-pre-wrap break-words rounded-md bg-[var(--muted)] px-2 py-1 font-mono text-[10px] not-italic leading-[1.5] text-[var(--muted-foreground)]",
                                                children: formattedArgs
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                lineNumber: 424,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, `${callId}-tool-call-${idx}`, true, {
                                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                                        lineNumber: 420,
                                        columnNumber: 23
                                    }, this);
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "opacity-50",
                                            children: "✓ "
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                                            lineNumber: 433,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: String(event.metadata?.tool ?? "result")
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                                            lineNumber: 434,
                                            columnNumber: 23
                                        }, this),
                                        event.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-3 mt-0.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                content: event.content,
                                                variant: "trace"
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                lineNumber: 437,
                                                columnNumber: 27
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                                            lineNumber: 436,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, `${callId}-tool-result-${idx}`, true, {
                                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                                    lineNumber: 432,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                            lineNumber: 415,
                            columnNumber: 15
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                        lineNumber: 413,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TraceSection, {
                        title: t("Observe"),
                        children: observationText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            content: observationText,
                            variant: "trace"
                        }, void 0, false, {
                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                            lineNumber: 447,
                            columnNumber: 32
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                        lineNumber: 446,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/home/TracePanels.tsx",
                lineNumber: 409,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    summaryProgressEvents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-0.5",
                        children: summaryProgressEvents.map((event, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "opacity-70",
                                children: event.content
                            }, `${callId}-progress-${idx}`, false, {
                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                lineNumber: 455,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                        lineNumber: 453,
                        columnNumber: 13
                    }, this),
                    (role === "retrieve" || kind === "math_render_output") && rawProgressEvents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "not-italic text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--muted-foreground)]",
                                children: t("Raw logs")
                            }, void 0, false, {
                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                lineNumber: 464,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-h-[200px] overflow-y-auto rounded-md border border-[var(--border)] bg-[#292524] px-3 py-2 font-mono text-[10px] leading-[1.55] text-[#D6D3D1] shadow-inner",
                                children: rawProgressEvents.map((event, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "whitespace-pre-wrap break-words",
                                        children: event.content
                                    }, `${callId}-raw-${idx}`, false, {
                                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                                        lineNumber: 469,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                lineNumber: 467,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                        lineNumber: 463,
                        columnNumber: 13
                    }, this),
                    toolEvents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-0.5",
                        children: toolEvents.map((event, idx)=>{
                            if (event.type === "tool_call") {
                                const formattedArgs = formatTraceArgs(event.metadata?.args);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "opacity-50",
                                            children: "→ "
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                                            lineNumber: 484,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: event.content
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                                            lineNumber: 485,
                                            columnNumber: 23
                                        }, this),
                                        formattedArgs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: "ml-3 mt-0.5 whitespace-pre-wrap break-words rounded-md bg-[var(--muted)] px-2 py-1 font-mono text-[10px] not-italic leading-[1.5] text-[var(--muted-foreground)]",
                                            children: formattedArgs
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                                            lineNumber: 487,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, `${callId}-tool-call-${idx}`, true, {
                                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                                    lineNumber: 483,
                                    columnNumber: 21
                                }, this);
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "opacity-50",
                                        children: "✓ "
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                                        lineNumber: 496,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: String(event.metadata?.tool ?? "result")
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                                        lineNumber: 497,
                                        columnNumber: 21
                                    }, this),
                                    event.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-3 mt-0.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            content: event.content,
                                            variant: "trace"
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                                            lineNumber: 500,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                                        lineNumber: 499,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, `${callId}-tool-result-${idx}`, true, {
                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                lineNumber: 495,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                        lineNumber: 478,
                        columnNumber: 13
                    }, this),
                    genericBodyText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            content: genericBodyText,
                            variant: "trace"
                        }, void 0, false, {
                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                            lineNumber: 511,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                        lineNumber: 510,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/home/TracePanels.tsx",
                lineNumber: 451,
                columnNumber: 9
            }, this),
            inlineSources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 opacity-50",
                children: [
                    t("Sources"),
                    ":",
                    " ",
                    inlineSources.map((source, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                idx > 0 && " · ",
                                String(source.title || source.query || source.type || "source")
                            ]
                        }, `${callId}-source-${idx}`, true, {
                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                            lineNumber: 521,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/home/TracePanels.tsx",
                lineNumber: 518,
                columnNumber: 9
            }, this),
            errorEvents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 space-y-0.5",
                children: errorEvents.map((event, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-400/80",
                        children: [
                            "✗ ",
                            event.content
                        ]
                    }, `${callId}-error-${idx}`, true, {
                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                        lineNumber: 532,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/chat/home/TracePanels.tsx",
                lineNumber: 530,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/home/TracePanels.tsx",
        lineNumber: 407,
        columnNumber: 5
    }, this);
}
function hasExpandableContent(callEvents, group, role) {
    const progressEvents = callEvents.filter((event)=>{
        if (event.type !== "progress") return false;
        const traceKind = String(getTraceMeta(event).trace_kind || "");
        if (traceKind === "call_status") return false;
        return event.content.trim().length > 0;
    });
    const toolEvents = callEvents.filter((event)=>event.type === "tool_call" || event.type === "tool_result");
    const summaryProgressEvents = progressEvents.filter((event)=>String(getTraceMeta(event).trace_layer || "summary") !== "raw");
    const rawProgressEvents = progressEvents.filter((event)=>String(getTraceMeta(event).trace_layer || "") === "raw");
    const errorEvents = callEvents.filter((event)=>event.type === "error" && event.content.trim().length > 0);
    const thoughtText = getTraceText(callEvents, [
        "thinking"
    ]);
    const observationText = getTraceText(callEvents, [
        "observation"
    ]);
    const contentText = getTraceText(callEvents, [
        "content"
    ]);
    const genericBodyText = role === "observe" ? observationText : role === "retrieve" ? "" : thoughtText || contentText;
    const inlineSources = callEvents.flatMap((event)=>getTraceMeta(event).sources ?? []);
    return toolEvents.length > 0 || summaryProgressEvents.length > 0 || rawProgressEvents.length > 0 || errorEvents.length > 0 || Boolean(genericBodyText) || inlineSources.length > 0 || group === "react_round" && (Boolean(thoughtText) || Boolean(observationText));
}
function CallTracePanel({ events, isStreaming }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [nowSeconds, setNowSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>Date.now() / 1000);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isStreaming) return;
        const timer = window.setInterval(()=>setNowSeconds(Date.now() / 1000), 1000);
        return ()=>window.clearInterval(timer);
    }, [
        isStreaming
    ]);
    const traceGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const groups = [];
        const indexById = new Map();
        for (const event of events){
            const callId = String(getTraceMeta(event).call_id || "");
            if (!callId) continue;
            const existingIndex = indexById.get(callId);
            if (existingIndex === undefined) {
                indexById.set(callId, groups.length);
                groups.push({
                    callId,
                    events: [
                        event
                    ]
                });
            } else {
                groups[existingIndex].events.push(event);
            }
        }
        return groups;
    }, [
        events
    ]);
    const displayItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>buildDisplayItems(traceGroups), [
        traceGroups
    ]);
    if (!traceGroups.length) return null;
    function renderTraceRow({ callId, events: callEvents }, isGloballyLast, nested) {
        const first = callEvents[0];
        const meta = getTraceMeta(first);
        const phase = String(meta.phase || first.stage || "");
        const role = getTraceRole(callEvents);
        const group = getTraceGroup(callEvents);
        const kind = getTraceCallKind(callEvents);
        const header = getTraceHeader(callEvents, nowSeconds, nested, t);
        const active = Boolean(isStreaming) && isGloballyLast && isTracePending(callEvents);
        const isFinalResponse = kind === "llm_final_response";
        if (isFinalResponse) return null;
        const expandable = hasExpandableContent(callEvents, group, role);
        if (!expandable && !active) return null;
        const summaryRow = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex list-none items-center gap-2 py-0.5 not-italic text-[12px] font-medium text-[var(--muted-foreground)]",
            children: [
                expandable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    size: 12,
                    className: "shrink-0 transition-transform group-open:rotate-180"
                }, void 0, false, {
                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                    lineNumber: 649,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-3 shrink-0"
                }, void 0, false, {
                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                    lineNumber: 654,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TraceIcon, {
                    kind: kind,
                    phase: phase
                }, void 0, false, {
                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                    lineNumber: 656,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: header
                }, void 0, false, {
                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                    lineNumber: 657,
                    columnNumber: 9
                }, this),
                active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    size: 11,
                    className: "animate-spin"
                }, void 0, false, {
                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                    lineNumber: 658,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/chat/home/TracePanels.tsx",
            lineNumber: 647,
            columnNumber: 7
        }, this);
        if (!expandable) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: summaryRow
            }, callId, false, {
                fileName: "[project]/components/chat/home/TracePanels.tsx",
                lineNumber: 663,
                columnNumber: 14
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
            open: active,
            className: "group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                    className: "list-none cursor-pointer hover:text-[var(--foreground)] [&::-webkit-details-marker]:hidden",
                    children: summaryRow
                }, void 0, false, {
                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                    lineNumber: 668,
                    columnNumber: 9
                }, this),
                nested ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ml-5 mr-3 mt-0.5 px-3 py-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TraceRowBody, {
                        callId: callId,
                        callEvents: callEvents,
                        group: group,
                        role: role,
                        kind: kind,
                        t: t
                    }, void 0, false, {
                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                        lineNumber: 673,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                    lineNumber: 672,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollableTraceBody, {
                    autoScroll: active,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TraceRowBody, {
                        callId: callId,
                        callEvents: callEvents,
                        group: group,
                        role: role,
                        kind: kind,
                        t: t
                    }, void 0, false, {
                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                        lineNumber: 677,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                    lineNumber: 676,
                    columnNumber: 11
                }, this)
            ]
        }, callId, true, {
            fileName: "[project]/components/chat/home/TracePanels.tsx",
            lineNumber: 667,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3 space-y-0.5",
        children: displayItems.map((item, displayIdx)=>{
            const isLastDisplayItem = displayIdx === displayItems.length - 1;
            if (item.kind === "step") {
                const roundCount = item.traces.filter((tr)=>getTraceGroup(tr.events) === "react_round").length;
                const lastTrace = item.traces[item.traces.length - 1];
                const isActiveStep = Boolean(isStreaming) && isLastDisplayItem && isTracePending(lastTrace.events);
                const stepDuration = isActiveStep ? "" : getStepGroupDuration(item.traces);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                    open: isActiveStep || undefined,
                    className: "group/step",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                            className: "list-none cursor-pointer hover:text-[var(--foreground)] [&::-webkit-details-marker]:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 py-0.5 not-italic text-[12px] font-medium text-[var(--muted-foreground)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        size: 12,
                                        className: "shrink-0 transition-transform group-open/step:rotate-180"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                                        lineNumber: 700,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        size: 12,
                                        strokeWidth: 1.6,
                                        className: "shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                                        lineNumber: 704,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Step ",
                                            item.stepId
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                                        lineNumber: 705,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] opacity-60",
                                        children: [
                                            roundCount,
                                            " ",
                                            roundCount === 1 ? "round" : "rounds",
                                            stepDuration ? ` · ${stepDuration}` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                                        lineNumber: 706,
                                        columnNumber: 19
                                    }, this),
                                    isActiveStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        size: 11,
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                                        lineNumber: 710,
                                        columnNumber: 36
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                lineNumber: 699,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                            lineNumber: 698,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollableTraceBody, {
                            autoScroll: isActiveStep,
                            className: "ml-5 mr-3 mt-0.5 max-h-[280px] overflow-y-auto px-3 py-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] italic leading-[1.6] text-[var(--muted-foreground)]",
                                children: item.traces.map((trace, idx)=>{
                                    const trGroup = getTraceGroup(trace.events);
                                    const trKind = getTraceCallKind(trace.events);
                                    const trRole = getTraceRole(trace.events);
                                    const trMeta = getTraceMeta(trace.events[0]);
                                    if (trKind === "llm_final_response") return null;
                                    if (trGroup === "react_round") {
                                        const roundNum = trMeta.round;
                                        const duration = getTraceDurationLabel(trace.events);
                                        const thoughtText = getTraceText(trace.events, [
                                            "thinking"
                                        ]);
                                        const observationText = getTraceText(trace.events, [
                                            "observation"
                                        ]);
                                        const traceToolEvents = trace.events.filter((e)=>e.type === "tool_call" || e.type === "tool_result");
                                        const isLastInStep = idx === item.traces.length - 1;
                                        const roundActive = Boolean(isStreaming) && isLastDisplayItem && isLastInStep && isTracePending(trace.events);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                idx > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "my-1.5 h-px bg-[var(--border)]/30"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                    lineNumber: 740,
                                                    columnNumber: 39
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-1 flex items-center gap-1.5 not-italic text-[11px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold uppercase tracking-[0.08em] text-[var(--muted-foreground)]",
                                                            children: [
                                                                "Round ",
                                                                roundNum
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                            lineNumber: 742,
                                                            columnNumber: 29
                                                        }, this),
                                                        duration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-normal text-[var(--muted-foreground)]/40",
                                                            children: duration
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                            lineNumber: 746,
                                                            columnNumber: 31
                                                        }, this),
                                                        roundActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            size: 10,
                                                            className: "animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                            lineNumber: 748,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                    lineNumber: 741,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1.5 pl-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TraceSection, {
                                                            title: t("Thought"),
                                                            children: thoughtText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                content: thoughtText,
                                                                variant: "trace"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                                lineNumber: 753,
                                                                columnNumber: 33
                                                            }, this) : null
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                            lineNumber: 751,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TraceSection, {
                                                            title: t("Tool"),
                                                            children: traceToolEvents.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-0.5",
                                                                children: traceToolEvents.map((ev, ei)=>{
                                                                    if (ev.type === "tool_call") {
                                                                        const fa = formatTraceArgs(ev.metadata?.args);
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "opacity-50",
                                                                                    children: "→ "
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                                                    lineNumber: 764,
                                                                                    columnNumber: 43
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: ev.content
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                                                    lineNumber: 765,
                                                                                    columnNumber: 43
                                                                                }, this),
                                                                                fa && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                                    className: "ml-3 mt-0.5 whitespace-pre-wrap break-words rounded-md bg-[var(--muted)] px-2 py-1 font-mono text-[10px] not-italic leading-[1.5] text-[var(--muted-foreground)]",
                                                                                    children: fa
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                                                    lineNumber: 767,
                                                                                    columnNumber: 45
                                                                                }, this)
                                                                            ]
                                                                        }, `${trace.callId}-tc-${ei}`, true, {
                                                                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                                            lineNumber: 763,
                                                                            columnNumber: 41
                                                                        }, this);
                                                                    }
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "opacity-50",
                                                                                children: "✓ "
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                                                lineNumber: 776,
                                                                                columnNumber: 41
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: String(ev.metadata?.tool ?? "result")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                                                lineNumber: 777,
                                                                                columnNumber: 41
                                                                            }, this),
                                                                            ev.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "ml-3 mt-0.5",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    content: ev.content,
                                                                                    variant: "trace"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                                                    lineNumber: 780,
                                                                                    columnNumber: 45
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                                                lineNumber: 779,
                                                                                columnNumber: 43
                                                                            }, this)
                                                                        ]
                                                                    }, `${trace.callId}-tr-${ei}`, true, {
                                                                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                                        lineNumber: 775,
                                                                        columnNumber: 39
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                                lineNumber: 758,
                                                                columnNumber: 33
                                                            }, this) : null
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                            lineNumber: 756,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TraceSection, {
                                                            title: t("Observe"),
                                                            children: observationText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                content: observationText,
                                                                variant: "trace"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                                lineNumber: 791,
                                                                columnNumber: 33
                                                            }, this) : null
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                            lineNumber: 789,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                    lineNumber: 750,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, trace.callId, true, {
                                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                                            lineNumber: 739,
                                            columnNumber: 25
                                        }, this);
                                    }
                                    /* Non-round trace (retrieve, tool, etc.) — inline within the step */ const inlineHeader = getTraceHeader(trace.events, nowSeconds, true, t);
                                    const progressEvts = trace.events.filter((e)=>e.type === "progress" && String(getTraceMeta(e).trace_kind || "") !== "call_status" && e.content.trim().length > 0);
                                    const rawEvts = progressEvts.filter((e)=>String(getTraceMeta(e).trace_layer || "") === "raw");
                                    const summaryEvts = progressEvts.filter((e)=>String(getTraceMeta(e).trace_layer || "summary") !== "raw");
                                    const inlineToolEvts = trace.events.filter((e)=>e.type === "tool_call" || e.type === "tool_result");
                                    const genericText = trRole === "observe" ? getTraceText(trace.events, [
                                        "observation"
                                    ]) : trRole === "retrieve" ? "" : getTraceText(trace.events, [
                                        "thinking"
                                    ]) || getTraceText(trace.events, [
                                        "content"
                                    ]);
                                    const hasContent = summaryEvts.length > 0 || rawEvts.length > 0 || inlineToolEvts.length > 0 || Boolean(genericText);
                                    if (!hasContent) return null;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1.5 pl-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "not-italic text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--muted-foreground)]",
                                                children: inlineHeader
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                lineNumber: 832,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-0.5 space-y-0.5",
                                                children: [
                                                    summaryEvts.map((ev, ei)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "opacity-70",
                                                            children: ev.content
                                                        }, `${trace.callId}-sp-${ei}`, false, {
                                                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                            lineNumber: 837,
                                                            columnNumber: 29
                                                        }, this)),
                                                    (trRole === "retrieve" || trKind === "math_render_output") && rawEvts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "max-h-[160px] overflow-y-auto rounded-md border border-[var(--border)] bg-[#292524] px-3 py-2 font-mono text-[10px] not-italic leading-[1.55] text-[#D6D3D1] shadow-inner",
                                                        children: rawEvts.map((ev, ei)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "whitespace-pre-wrap break-words",
                                                                children: ev.content
                                                            }, `${trace.callId}-rw-${ei}`, false, {
                                                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                                lineNumber: 844,
                                                                columnNumber: 33
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                        lineNumber: 842,
                                                        columnNumber: 29
                                                    }, this),
                                                    inlineToolEvts.map((ev, ei)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "opacity-50",
                                                                    children: ev.type === "tool_call" ? "→ " : "✓ "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                                    lineNumber: 852,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: ev.type === "tool_call" ? ev.content : String(ev.metadata?.tool ?? "result")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                                    lineNumber: 853,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, `${trace.callId}-it-${ei}`, true, {
                                                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                            lineNumber: 851,
                                                            columnNumber: 29
                                                        }, this)),
                                                    genericText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            content: genericText,
                                                            variant: "trace"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                            lineNumber: 858,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                        lineNumber: 857,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                                lineNumber: 835,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, trace.callId, true, {
                                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                                        lineNumber: 831,
                                        columnNumber: 23
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                lineNumber: 717,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/chat/home/TracePanels.tsx",
                            lineNumber: 713,
                            columnNumber: 15
                        }, this)
                    ]
                }, item.stepId, true, {
                    fileName: "[project]/components/chat/home/TracePanels.tsx",
                    lineNumber: 697,
                    columnNumber: 13
                }, this);
            }
            return renderTraceRow(item.trace, isLastDisplayItem, false);
        })
    }, void 0, false, {
        fileName: "[project]/components/chat/home/TracePanels.tsx",
        lineNumber: 685,
        columnNumber: 5
    }, this);
}
/* ------------------------------------------------------------------ */ /*  ResearchStagePanel                                                 */ /* ------------------------------------------------------------------ */ function getResearchStageId(event) {
    const meta = getTraceMeta(event);
    const explicitStage = String(event.metadata?.research_stage_card || "");
    if (explicitStage === "understand" || explicitStage === "decompose" || explicitStage === "evidence" || explicitStage === "result") {
        return explicitStage;
    }
    const stage = String(event.stage || meta.phase || "");
    const text = String(event.content || "").toLowerCase();
    const agent = String(event.metadata?.agent_name || "");
    if (stage === "reporting") return "result";
    if (stage === "decomposing" || agent === "decompose_agent") return "decompose";
    if (stage === "rephrasing" || agent === "rephrase_agent") return "understand";
    if (stage === "planning") {
        if (text.includes("decompose") || text.includes("queue")) return "decompose";
        return "understand";
    }
    return "evidence";
}
function formatResearchStageSummary(events, fallback) {
    const progressEvents = events.filter((event)=>event.type === "progress" && event.content.trim().length > 0);
    const lastProgress = progressEvents.at(-1)?.content.trim();
    if (lastProgress) {
        return humanizeQuestionId(titleCase(lastProgress.replaceAll("-", "_")));
    }
    const thought = getTraceText(events, [
        "thinking"
    ]);
    if (thought) return thought.slice(0, 120);
    const content = getTraceText(events, [
        "content"
    ]);
    if (content) return content.slice(0, 120);
    return fallback;
}
function ResearchStagePanel({ events, isStreaming }) {
    const cards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return RESEARCH_STAGE_SPECS.map((spec)=>({
                ...spec,
                events: events.filter((event)=>getResearchStageId(event) === spec.id)
            })).filter((card)=>card.events.length > 0);
    }, [
        events
    ]);
    if (!cards.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3 space-y-0.5",
        children: cards.map((card, index)=>{
            const hasTrace = card.events.some((event)=>Boolean(getTraceMeta(event).call_id));
            const active = Boolean(isStreaming) && index === cards.length - 1 && card.events.some((event)=>isTracePending([
                    event
                ]) || event.type === "progress");
            const summary = formatResearchStageSummary(card.events, card.hint);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 py-1 text-[12px] text-[var(--muted-foreground)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: card.title
                            }, void 0, false, {
                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                lineNumber: 953,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] opacity-60",
                                children: summary
                            }, void 0, false, {
                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                lineNumber: 954,
                                columnNumber: 15
                            }, this),
                            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                size: 11,
                                className: "animate-spin text-[var(--primary)]"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/home/TracePanels.tsx",
                                lineNumber: 955,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                        lineNumber: 952,
                        columnNumber: 13
                    }, this),
                    hasTrace ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CallTracePanel, {
                        events: card.events,
                        isStreaming: isStreaming
                    }, void 0, false, {
                        fileName: "[project]/components/chat/home/TracePanels.tsx",
                        lineNumber: 957,
                        columnNumber: 25
                    }, this) : null
                ]
            }, card.id, true, {
                fileName: "[project]/components/chat/home/TracePanels.tsx",
                lineNumber: 951,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/chat/home/TracePanels.tsx",
        lineNumber: 941,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/chat/home/ChatMessages.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatMessageList",
    ()=>ChatMessageList,
    "ReferenceChips",
    ()=>ReferenceChips
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coins.js [app-ssr] (ecmascript) <export default as Coins>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-ssr] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$AssistantResponse$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/AssistantResponse.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$math$2d$animator$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/math-animator-types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quiz$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/quiz-types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$visualize$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/visualize-types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$markdown$2d$display$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/markdown-display.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$home$2f$TracePanels$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/home/TracePanels.tsx [app-ssr] (ecmascript)");
;
;
;
;
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const MathAnimatorViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/math-animator/MathAnimatorViewer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const QuizViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/quiz/QuizViewer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const ResearchOutlineEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/research/ResearchOutlineEditor.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const VisualizationViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/visualize/VisualizationViewer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function getModeBadgeLabel(capability) {
    if (!capability || capability === "chat") return "Chat";
    if (capability === "deep_solve") return "Deep Solve";
    if (capability === "deep_question") return "Quiz Generation";
    if (capability === "deep_research") return "Deep Research";
    if (capability === "math_animator") return "Math Animator";
    if (capability === "visualize") return "Visualize";
    return capability;
}
const AssistantMessage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function AssistantMessage({ msg, isStreaming, outlineStatus, sessionId, language, onConfirmOutline }) {
    const events = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>msg.events ?? [], [
        msg.events
    ]);
    const hasCallTrace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>events.some((event)=>Boolean(event.metadata?.call_id)), [
        events
    ]);
    const resultEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>msg.events?.find((event)=>event.type === "result") ?? null, [
        msg.events
    ]);
    const outlinePreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (msg.capability !== "deep_research" || !resultEvent) return null;
        const meta = resultEvent.metadata;
        if (!meta?.outline_preview) return null;
        return {
            sub_topics: meta.sub_topics ?? [],
            topic: String(meta.topic ?? ""),
            research_config: meta.research_config ?? null
        };
    }, [
        msg.capability,
        resultEvent
    ]);
    const quizQuestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (msg.capability !== "deep_question" || !resultEvent) return null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quiz$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractQuizQuestions"])(resultEvent.metadata);
    }, [
        msg.capability,
        resultEvent
    ]);
    const mathAnimatorResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (msg.capability !== "math_animator" || !resultEvent) return null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$math$2d$animator$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractMathAnimatorResult"])(resultEvent.metadata);
    }, [
        msg.capability,
        resultEvent
    ]);
    const visualizeResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (msg.capability !== "visualize" || !resultEvent) return null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$visualize$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractVisualizeResult"])(resultEvent.metadata);
    }, [
        msg.capability,
        resultEvent
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            hasCallTrace ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$home$2f$TracePanels$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CallTracePanel"], {
                events: events,
                isStreaming: isStreaming
            }, void 0, false, {
                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this) : null,
            outlinePreview && outlinePreview.sub_topics.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResearchOutlineEditor, {
                outline: outlinePreview.sub_topics,
                topic: outlinePreview.topic,
                onConfirm: (items)=>onConfirmOutline?.(items, outlinePreview.topic, outlinePreview.research_config),
                status: outlineStatus
            }, void 0, false, {
                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this) : mathAnimatorResult ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MathAnimatorViewer, {
                result: mathAnimatorResult
            }, void 0, false, {
                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, this) : visualizeResult ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VisualizationViewer, {
                result: visualizeResult
            }, void 0, false, {
                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                lineNumber: 137,
                columnNumber: 9
            }, this) : quizQuestions && quizQuestions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QuizViewer, {
                questions: quizQuestions,
                sessionId: sessionId,
                language: language
            }, void 0, false, {
                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$AssistantResponse$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                content: msg.content
            }, void 0, false, {
                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
});
AssistantMessage.displayName = "AssistantMessage";
function CostFooter({ cost, tokens, calls }) {
    const formatCost = (usd)=>{
        if (usd < 0.01) return `$${usd.toFixed(4)}`;
        return `$${usd.toFixed(2)}`;
    };
    const formatTokens = (n)=>{
        if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
        return String(n);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 text-[10px] text-[var(--muted-foreground)]/40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                size: 10,
                strokeWidth: 1.5,
                className: "shrink-0"
            }, void 0, false, {
                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: formatCost(cost)
            }, void 0, false, {
                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "opacity-40",
                children: "·"
            }, void 0, false, {
                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    formatTokens(tokens),
                    " tokens"
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "opacity-40",
                children: "·"
            }, void 0, false, {
                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    calls,
                    " calls"
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/home/ChatMessages.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
function RoughActionButton({ icon: Icon, label, onClick, disabled }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        disabled: disabled,
        className: "inline-flex items-center gap-1 px-0.5 py-0.5 text-[11px] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)] disabled:cursor-not-allowed disabled:opacity-35",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                size: 11,
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/home/ChatMessages.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
const UserMessage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function UserMessage({ msg, index, showInlineControls, onCancelStreaming, onAnswerNow, activeAssistantMessage }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    if (msg.content.startsWith("[Quiz Performance]")) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-end",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[75%] space-y-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end pr-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] tracking-wide text-[var(--muted-foreground)]",
                        children: getModeBadgeLabel(msg.capability)
                    }, void 0, false, {
                        fileName: "[project]/components/chat/home/ChatMessages.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/chat/home/ChatMessages.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this),
                msg.attachments?.some((a)=>a.type === "image") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-end gap-2",
                    children: msg.attachments.filter((a)=>a.type === "image" && a.base64).map((a, ai)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden rounded-2xl border border-[var(--border)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: `data:image/png;base64,${a.base64}`,
                                alt: a.filename || t("image"),
                                width: 280,
                                height: 192,
                                unoptimized: true,
                                className: "max-h-48 max-w-[280px] rounded-2xl object-contain"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                                lineNumber: 229,
                                columnNumber: 19
                            }, this)
                        }, `img-${ai}`, false, {
                            fileName: "[project]/components/chat/home/ChatMessages.tsx",
                            lineNumber: 228,
                            columnNumber: 17
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/chat/home/ChatMessages.tsx",
                    lineNumber: 224,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl bg-[var(--secondary)] px-4 py-2.5 text-[14px] leading-relaxed text-[var(--foreground)] shadow-sm",
                    children: [
                        (()=>{
                            const snap = msg.requestSnapshot;
                            const hasNotebook = Boolean(snap?.notebookReferences?.length);
                            const hasHistory = Boolean(snap?.historyReferences?.length);
                            if (!hasNotebook && !hasHistory) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex flex-wrap gap-1.5",
                                children: [
                                    snap?.notebookReferences?.map((ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--background)]/60 px-2 py-1 text-[11px] font-medium text-[var(--muted-foreground)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                    size: 11,
                                                    strokeWidth: 1.8
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/home/ChatMessages.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 21
                                                }, this),
                                                t("Notebook"),
                                                " · ",
                                                ref.record_ids.length,
                                                " ",
                                                t("records")
                                            ]
                                        }, ref.notebook_id, true, {
                                            fileName: "[project]/components/chat/home/ChatMessages.tsx",
                                            lineNumber: 250,
                                            columnNumber: 19
                                        }, this)),
                                    snap?.historyReferences?.map((sid)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--background)]/60 px-2 py-1 text-[11px] font-medium text-[var(--muted-foreground)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                    size: 11,
                                                    strokeWidth: 1.8
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/home/ChatMessages.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 21
                                                }, this),
                                                t("Chat History")
                                            ]
                                        }, sid, true, {
                                            fileName: "[project]/components/chat/home/ChatMessages.tsx",
                                            lineNumber: 259,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                                lineNumber: 248,
                                columnNumber: 15
                            }, this);
                        })(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: msg.content
                        }, void 0, false, {
                            fileName: "[project]/components/chat/home/ChatMessages.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat/home/ChatMessages.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, this),
                showInlineControls ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RoughActionButton, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"],
                            label: "Stop",
                            onClick: onCancelStreaming
                        }, void 0, false, {
                            fileName: "[project]/components/chat/home/ChatMessages.tsx",
                            lineNumber: 274,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RoughActionButton, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                            label: "Answer now",
                            onClick: ()=>onAnswerNow(msg.requestSnapshot, activeAssistantMessage?.role === "assistant" ? {
                                    content: activeAssistantMessage.content,
                                    events: activeAssistantMessage.events
                                } : undefined)
                        }, void 0, false, {
                            fileName: "[project]/components/chat/home/ChatMessages.tsx",
                            lineNumber: 279,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat/home/ChatMessages.tsx",
                    lineNumber: 273,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/components/chat/home/ChatMessages.tsx",
            lineNumber: 217,
            columnNumber: 7
        }, this)
    }, `${msg.role}-${index}`, false, {
        fileName: "[project]/components/chat/home/ChatMessages.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, this);
});
UserMessage.displayName = "UserMessage";
const ReferenceChips = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function ReferenceChips({ historySessions, notebookGroups, onRemoveHistory, onRemoveNotebook }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    if (historySessions.length === 0 && notebookGroups.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3 flex flex-wrap gap-2",
        children: [
            historySessions.map((session)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex max-w-full items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-3 py-1.5 text-[12px] text-sky-800 shadow-sm dark:border-sky-900/60 dark:bg-sky-950/30 dark:text-sky-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                            size: 12,
                            strokeWidth: 1.8,
                            className: "shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/components/chat/home/ChatMessages.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "shrink-0 font-medium",
                            children: t("Chat History")
                        }, void 0, false, {
                            fileName: "[project]/components/chat/home/ChatMessages.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "truncate text-sky-700/90 dark:text-sky-200/90",
                            children: session.title
                        }, void 0, false, {
                            fileName: "[project]/components/chat/home/ChatMessages.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onRemoveHistory(session.sessionId),
                            className: "shrink-0 opacity-60 transition hover:opacity-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                                lineNumber: 331,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/chat/home/ChatMessages.tsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this)
                    ]
                }, session.sessionId, true, {
                    fileName: "[project]/components/chat/home/ChatMessages.tsx",
                    lineNumber: 320,
                    columnNumber: 9
                }, this)),
            notebookGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex max-w-full items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-[12px] text-[var(--foreground)] shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                            size: 12,
                            strokeWidth: 1.8,
                            className: "shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/components/chat/home/ChatMessages.tsx",
                            lineNumber: 340,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "shrink-0 font-medium",
                            children: t("Notebook")
                        }, void 0, false, {
                            fileName: "[project]/components/chat/home/ChatMessages.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "truncate text-[var(--muted-foreground)]",
                            children: [
                                group.notebookName,
                                " (",
                                group.count,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chat/home/ChatMessages.tsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onRemoveNotebook(group.notebookId),
                            className: "shrink-0 opacity-60 transition hover:opacity-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                                lineNumber: 349,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/chat/home/ChatMessages.tsx",
                            lineNumber: 345,
                            columnNumber: 11
                        }, this)
                    ]
                }, group.notebookId, true, {
                    fileName: "[project]/components/chat/home/ChatMessages.tsx",
                    lineNumber: 336,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/home/ChatMessages.tsx",
        lineNumber: 318,
        columnNumber: 5
    }, this);
});
ReferenceChips.displayName = "ReferenceChips";
const ChatMessageList = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function ChatMessageList({ messages, isStreaming, activeUserIndex, activeAssistantMessage, sessionId, language, onCancelStreaming, onAnswerNow, onCopyAssistantMessage, onRetryMessage, onConfirmOutline }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const outlineStatusByIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        for(let i = 0; i < messages.length; i++){
            const msg = messages[i];
            if (msg.role !== "assistant" || msg.capability !== "deep_research") continue;
            const resultEv = msg.events?.find((e)=>e.type === "result");
            const meta = resultEv?.metadata;
            if (!meta?.outline_preview) continue;
            const hasFollowup = messages.slice(i + 1).some((m)=>m.role === "assistant" && m.capability === "deep_research");
            if (hasFollowup) {
                const followup = messages.slice(i + 1).find((m)=>m.role === "assistant" && m.capability === "deep_research");
                const followupResult = followup?.events?.find((e)=>e.type === "result");
                map.set(i, followupResult ? "done" : "researching");
            } else if (isStreaming) {
                map.set(i, "researching");
            } else {
                map.set(i, "editing");
            }
        }
        return map;
    }, [
        messages,
        isStreaming
    ]);
    const messageRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return messages.map((msg, index)=>{
            if (msg.role === "user") {
                return {
                    msg,
                    pairedUserMessage: null
                };
            }
            const pairedUserMessage = [
                ...messages.slice(0, index)
            ].reverse().find((previous)=>previous.role === "user") ?? null;
            return {
                msg,
                pairedUserMessage
            };
        });
    }, [
        messages
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: messageRows.map(({ msg, pairedUserMessage }, i)=>{
            if (msg.role === "user") {
                const showInlineControls = i === activeUserIndex && (!msg.capability || msg.capability === "chat") && Boolean(msg.requestSnapshot) && activeAssistantMessage?.role === "assistant";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UserMessage, {
                    msg: msg,
                    index: i,
                    showInlineControls: showInlineControls,
                    onCancelStreaming: onCancelStreaming,
                    onAnswerNow: onAnswerNow,
                    activeAssistantMessage: activeAssistantMessage
                }, `${msg.role}-${i}`, false, {
                    fileName: "[project]/components/chat/home/ChatMessages.tsx",
                    lineNumber: 435,
                    columnNumber: 13
                }, this);
            }
            const msgDone = !isStreaming || i !== messages.length - 1;
            const showActions = msgDone && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$markdown$2d$display$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasVisibleMarkdownContent"])(msg.content);
            const showRetry = showActions && (!pairedUserMessage?.capability || pairedUserMessage?.capability === "chat") && Boolean(pairedUserMessage?.requestSnapshot);
            const costSummary = (()=>{
                if (!msgDone) return null;
                const resultEv = msg.events?.find((e)=>e.type === "result");
                if (!resultEv) return null;
                const meta = resultEv.metadata?.metadata;
                const cs = meta?.cost_summary;
                if (!cs || !cs.total_calls) return null;
                return cs;
            })();
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AssistantMessage, {
                        msg: msg,
                        isStreaming: isStreaming && i === messages.length - 1,
                        outlineStatus: outlineStatusByIndex.get(i),
                        sessionId: sessionId,
                        language: language,
                        onConfirmOutline: onConfirmOutline
                    }, void 0, false, {
                        fileName: "[project]/components/chat/home/ChatMessages.tsx",
                        lineNumber: 467,
                        columnNumber: 13
                    }, this),
                    (showActions || costSummary) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex items-center",
                        children: [
                            showActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RoughActionButton, {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"],
                                        label: "Copy",
                                        onClick: ()=>void onCopyAssistantMessage(msg.content)
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/home/ChatMessages.tsx",
                                        lineNumber: 479,
                                        columnNumber: 21
                                    }, this),
                                    showRetry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RoughActionButton, {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"],
                                        label: "Retry",
                                        onClick: ()=>onRetryMessage(pairedUserMessage?.requestSnapshot)
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/home/ChatMessages.tsx",
                                        lineNumber: 485,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                                lineNumber: 478,
                                columnNumber: 19
                            }, this),
                            costSummary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CostFooter, {
                                    cost: costSummary.total_cost_usd ?? 0,
                                    tokens: costSummary.total_tokens ?? 0,
                                    calls: costSummary.total_calls ?? 0
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/home/ChatMessages.tsx",
                                    lineNumber: 495,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                                lineNumber: 494,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/home/ChatMessages.tsx",
                        lineNumber: 476,
                        columnNumber: 15
                    }, this)
                ]
            }, `${msg.role}-${i}`, true, {
                fileName: "[project]/components/chat/home/ChatMessages.tsx",
                lineNumber: 466,
                columnNumber: 11
            }, this);
        })
    }, void 0, false);
});
ChatMessageList.displayName = "ChatMessageList";
}),
"[project]/components/chat/home/ChatComposer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$at$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AtSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/at-sign.js [app-ssr] (ecmascript) <export default as AtSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$plus$2d$corner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePlus2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-plus-corner.js [app-ssr] (ecmascript) <export default as FilePlus2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-ssr] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$AtMentionPopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/AtMentionPopup.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$home$2f$ChatMessages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/home/ChatMessages.tsx [app-ssr] (ecmascript)");
;
;
;
;
"use client";
;
;
;
;
;
;
;
;
const QuizConfigPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/quiz/QuizConfigPanel.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const MathAnimatorConfigPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/math-animator/MathAnimatorConfigPanel.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const ResearchConfigPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/research/ResearchConfigPanel.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const VisualizeConfigPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/visualize/VisualizeConfigPanel.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function shouldOpenAtPopup(value, cursorPos) {
    const prefix = value.slice(0, cursorPos);
    return /(^|\s)@[^\s]*$/.test(prefix);
}
function stripTrailingAtMention(value) {
    return value.replace(/(^|\s)@[^\s]*$/, "$1").replace(/\s+$/, "");
}
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function ChatComposer({ composerRef, capMenuRef, capBtnRef, toolMenuRef, toolBtnRef, refMenuRef, refBtnRef, dragCounter, dragging, capMenuOpen, toolMenuOpen, refMenuOpen, hasMessages, attachments, activeCap, visibleTools, selectedTools, ragActive, knowledgeBases, selectedNotebookRecords, selectedHistorySessions, notebookReferenceGroups, stateKnowledgeBase, isStreaming, isResearchMode, isQuizMode, isMathAnimatorMode, isVisualizeMode, quizConfig, quizPdf, mathAnimatorConfig, visualizeConfig, researchConfig, researchValidationErrors, researchPanelCollapsed, capabilities, researchSources, onSetCapMenuOpen, onSetToolMenuOpen, onSetRefMenuOpen, onSetKB, onSelectNotebookPicker, onSelectHistoryPicker, onToggleTool, onToggleResearchSource, onSend, onRemoveAttachment, onRemoveHistory, onRemoveNotebook, onDragEnter, onDragLeave, onDragOver, onDrop, onPaste, onSelectCapability, onChangeQuizConfig, onUploadQuizPdf, onChangeMathAnimatorConfig, onChangeVisualizeConfig, onChangeResearchConfig, onToggleResearchCollapsed }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const CapIcon = activeCap.icon;
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showAtPopup, setShowAtPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeCapabilityKey = activeCap.value || "chat";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hasMessages) textareaRef.current?.focus();
    }, [
        hasMessages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const el = textareaRef.current;
        if (!el) return;
        el.style.height = "28px";
        const next = Math.max(el.scrollHeight, 28);
        const bounded = Math.min(next, 200);
        el.style.height = `${bounded}px`;
        el.style.overflowY = next > 200 ? "auto" : "hidden";
    }, [
        input,
        activeCapabilityKey
    ]);
    const handleInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const value = e.target.value;
        const cursorPos = e.target.selectionStart ?? value.length;
        setInput(value);
        setShowAtPopup(shouldOpenAtPopup(value, cursorPos));
    }, []);
    const handleTextareaClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const target = e.currentTarget;
        setShowAtPopup(shouldOpenAtPopup(target.value, target.selectionStart ?? target.value.length));
    }, []);
    const doSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const content = input.trim();
        onSend(content);
        setInput("");
        setShowAtPopup(false);
    }, [
        input,
        onSend
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            doSend();
        } else if (e.key === "Escape") {
            setShowAtPopup(false);
        }
    }, [
        doSend
    ]);
    const handleSelectNotebook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setInput((prev)=>stripTrailingAtMention(prev));
        setShowAtPopup(false);
        onSelectNotebookPicker();
    }, [
        onSelectNotebookPicker
    ]);
    const handleSelectHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setInput((prev)=>stripTrailingAtMention(prev));
        setShowAtPopup(false);
        onSelectHistoryPicker();
    }, [
        onSelectHistoryPicker
    ]);
    const canSend = (!!input.trim() || !!attachments.length || !!selectedNotebookRecords.length || !!selectedHistorySessions.length) && !isStreaming && !(isResearchMode && Object.keys(researchValidationErrors).length > 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: composerRef,
        className: `relative z-20 mx-auto w-full shrink-0 pb-5 ${hasMessages ? "pt-4" : ""}`,
        children: [
            hasMessages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-transparent to-[var(--background)]/72"
            }, void 0, false, {
                fileName: "[project]/components/chat/home/ChatComposer.tsx",
                lineNumber: 284,
                columnNumber: 9
            }, this),
            capMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: capMenuRef,
                className: "absolute bottom-full left-0 right-0 z-50 mb-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[280px] rounded-xl border border-[var(--border)] bg-[var(--card)] py-1.5 shadow-lg",
                        children: capabilities.map((cap)=>{
                            const Icon = cap.icon;
                            const selected = activeCap.value === cap.value;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onSelectCapability(cap.value),
                                className: `flex w-full items-center gap-3 px-3.5 py-2 text-left transition-colors ${selected ? "bg-[var(--muted)]" : "hover:bg-[var(--muted)]/50"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 16,
                                        strokeWidth: 1.6,
                                        className: `shrink-0 ${selected ? "text-[var(--primary)]" : "text-[var(--muted-foreground)]"}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                        lineNumber: 305,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[13px] font-medium text-[var(--foreground)]",
                                                children: t(cap.label)
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                lineNumber: 311,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "truncate text-[11px] text-[var(--muted-foreground)]",
                                                children: t(cap.description)
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                lineNumber: 312,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                        lineNumber: 310,
                                        columnNumber: 21
                                    }, this),
                                    selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                        lineNumber: 314,
                                        columnNumber: 34
                                    }, this)
                                ]
                            }, cap.value, true, {
                                fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                lineNumber: 298,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/chat/home/ChatComposer.tsx",
                        lineNumber: 293,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                    lineNumber: 292,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat/home/ChatComposer.tsx",
                lineNumber: 288,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$AtMentionPopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        open: showAtPopup,
                        onSelectNotebook: handleSelectNotebook,
                        onSelectHistory: handleSelectHistory
                    }, void 0, false, {
                        fileName: "[project]/components/chat/home/ChatComposer.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative rounded-2xl border bg-[var(--card)] shadow-[0_1px_8px_rgba(0,0,0,0.03)] transition-colors ${dragging ? "border-[var(--primary)] bg-[var(--primary)]/[0.03]" : "border-[var(--border)]"}`,
                        onDragEnter: onDragEnter,
                        onDragLeave: onDragLeave,
                        onDragOver: onDragOver,
                        onDrop: onDrop,
                        "data-drag-counter": dragCounter.current,
                        children: [
                            dragging && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-2xl border-2 border-dashed border-[var(--primary)]/50 bg-[var(--primary)]/[0.04]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-1.5 text-[var(--primary)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                            size: 22,
                                            strokeWidth: 1.6
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                            lineNumber: 345,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[13px] font-medium",
                                            children: t("Drop images here")
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                            lineNumber: 346,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                    lineNumber: 344,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                lineNumber: 343,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 pt-3.5 pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$home$2f$ChatMessages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReferenceChips"], {
                                        historySessions: selectedHistorySessions,
                                        notebookGroups: notebookReferenceGroups,
                                        onRemoveHistory: onRemoveHistory,
                                        onRemoveNotebook: onRemoveNotebook
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                        lineNumber: 352,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        ref: textareaRef,
                                        value: input,
                                        onChange: handleInputChange,
                                        onKeyDown: handleKeyDown,
                                        onClick: handleTextareaClick,
                                        onPaste: onPaste,
                                        rows: 1,
                                        suppressHydrationWarning: true,
                                        placeholder: isMathAnimatorMode ? t("Describe the math animation or storyboard you want...") : isVisualizeMode ? t("Describe the chart or diagram you want to visualize...") : t("How can I help you today?"),
                                        className: "w-full resize-none overflow-hidden bg-transparent text-[15px] leading-relaxed text-[var(--foreground)] outline-none placeholder:text-[var(--muted-foreground)]",
                                        style: {
                                            transition: "height 0.15s ease-out",
                                            minHeight: 28
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                        lineNumber: 358,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this),
                            !!attachments.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 px-4 pb-2",
                                children: attachments.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group relative",
                                        children: a.type === "image" && a.previewUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-16 w-16 overflow-hidden rounded-lg border border-[var(--border)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: a.previewUrl,
                                                    alt: a.filename || t("Attachment preview"),
                                                    fill: true,
                                                    unoptimized: true,
                                                    className: "object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onRemoveAttachment(i),
                                                    className: "absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)] opacity-0 shadow-sm transition-opacity group-hover:opacity-100",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        size: 10
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                            lineNumber: 384,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-1 rounded-md bg-[var(--muted)] px-2 py-0.5 text-[11px] text-[var(--muted-foreground)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$plus$2d$corner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePlus2$3e$__["FilePlus2"], {
                                                    size: 10
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 23
                                                }, this),
                                                " ",
                                                a.filename,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onRemoveAttachment(i),
                                                    className: "ml-0.5 opacity-60 hover:opacity-100",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        size: 10
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                            lineNumber: 400,
                                            columnNumber: 21
                                        }, this)
                                    }, `${a.filename}-${i}`, false, {
                                        fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                        lineNumber: 382,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                lineNumber: 380,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-[var(--border)]/35 px-3 py-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            ref: capBtnRef,
                                            onClick: ()=>onSetCapMenuOpen((v)=>!v),
                                            className: `inline-flex shrink-0 items-center gap-1.5 py-1.5 px-1 text-[12px] transition-colors ${capMenuOpen ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CapIcon, {
                                                    size: 14,
                                                    strokeWidth: 1.6
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: t(activeCap.label)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 11,
                                                    className: `transition-transform ${capMenuOpen ? "rotate-180" : ""}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                            lineNumber: 414,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-3.5 w-px bg-[var(--border)]/30"
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                            lineNumber: 428,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex min-w-0 flex-1 items-center gap-1",
                                            children: [
                                                isResearchMode ? researchSources.map((source)=>{
                                                    const active = researchConfig.sources.includes(source.name);
                                                    const Icon = source.icon;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onToggleResearchSource(source.name),
                                                        className: `inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-[3px] text-[10px] font-medium transition-all ${active ? "border-[var(--primary)]/25 bg-[var(--primary)]/8 text-[var(--primary)]" : "border-[var(--border)]/30 text-[var(--muted-foreground)]/60 hover:border-[var(--border)]/50 hover:text-[var(--foreground)]"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                size: 11,
                                                                strokeWidth: 1.7
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                lineNumber: 445,
                                                                columnNumber: 25
                                                            }, this),
                                                            t(source.label)
                                                        ]
                                                    }, source.name, true, {
                                                        fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 23
                                                    }, this);
                                                }) : visibleTools.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative flex items-center gap-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            ref: toolBtnRef,
                                                            onClick: ()=>onSetToolMenuOpen((v)=>!v),
                                                            className: "inline-flex shrink-0 items-center gap-1 py-1 px-1.5 text-[11px] font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                    size: 12,
                                                                    strokeWidth: 1.7
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                    lineNumber: 457,
                                                                    columnNumber: 23
                                                                }, this),
                                                                t("Tools"),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    size: 10,
                                                                    className: `transition-transform ${toolMenuOpen ? "rotate-180" : ""}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                    lineNumber: 459,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                            lineNumber: 452,
                                                            columnNumber: 21
                                                        }, this),
                                                        selectedTools.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-[3px] overflow-hidden",
                                                            children: visibleTools.filter((vt)=>selectedTools.has(vt.name)).map((vt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "shrink-0 text-[10px] text-[var(--muted-foreground)]/35",
                                                                    children: [
                                                                        i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[12px] leading-none",
                                                                            children: "·"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                            lineNumber: 465,
                                                                            columnNumber: 39
                                                                        }, this),
                                                                        t(vt.label)
                                                                    ]
                                                                }, vt.name, true, {
                                                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                    lineNumber: 464,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                            lineNumber: 462,
                                                            columnNumber: 23
                                                        }, this),
                                                        toolMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            ref: toolMenuRef,
                                                            className: "absolute bottom-full left-0 z-50 mb-1.5 min-w-[180px] rounded-lg border border-[var(--border)] bg-[var(--card)] py-1 shadow-lg",
                                                            children: visibleTools.map((tool)=>{
                                                                const active = selectedTools.has(tool.name);
                                                                const Icon = tool.icon;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>onToggleTool(tool.name),
                                                                    className: `flex w-full items-center gap-2.5 px-3 py-1.5 text-left text-[12px] transition-colors ${active ? "text-[var(--primary)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"} hover:bg-[var(--muted)]/40`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                            size: 13,
                                                                            strokeWidth: 1.7
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                            lineNumber: 489,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "flex-1 font-medium",
                                                                            children: t(tool.label)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                            lineNumber: 490,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-1.5 w-1.5 rounded-full bg-[var(--primary)]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                            lineNumber: 491,
                                                                            columnNumber: 42
                                                                        }, this)
                                                                    ]
                                                                }, tool.name, true, {
                                                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                    lineNumber: 480,
                                                                    columnNumber: 29
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                            lineNumber: 472,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 19
                                                }, this) : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative flex items-center gap-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            ref: refBtnRef,
                                                            onClick: ()=>onSetRefMenuOpen((v)=>!v),
                                                            className: "inline-flex shrink-0 items-center gap-1 py-1 px-1.5 text-[11px] font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$at$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AtSign$3e$__["AtSign"], {
                                                                    size: 12,
                                                                    strokeWidth: 1.7
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 21
                                                                }, this),
                                                                t("Reference"),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    size: 10,
                                                                    className: `transition-transform ${refMenuOpen ? "rotate-180" : ""}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                    lineNumber: 508,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                            lineNumber: 501,
                                                            columnNumber: 19
                                                        }, this),
                                                        (selectedNotebookRecords.length > 0 || selectedHistorySessions.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "shrink-0 rounded-full bg-[var(--primary)]/10 px-1.5 py-px text-[9px] font-semibold text-[var(--primary)]",
                                                            children: selectedNotebookRecords.length + selectedHistorySessions.length
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                            lineNumber: 511,
                                                            columnNumber: 21
                                                        }, this),
                                                        refMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            ref: refMenuRef,
                                                            className: "absolute bottom-full left-0 z-50 mb-1.5 min-w-[180px] rounded-lg border border-[var(--border)] bg-[var(--card)] py-1 shadow-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        onSetRefMenuOpen(false);
                                                                        onSelectNotebookPicker();
                                                                    },
                                                                    className: "flex w-full items-center gap-2.5 px-3 py-1.5 text-left text-[12px] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)] hover:bg-[var(--muted)]/40",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                            size: 13,
                                                                            strokeWidth: 1.7
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                            lineNumber: 527,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "flex-1 font-medium",
                                                                            children: t("Notebook")
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                            lineNumber: 528,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        selectedNotebookRecords.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-[var(--primary)]",
                                                                            children: selectedNotebookRecords.length
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                            lineNumber: 530,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                    lineNumber: 520,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        onSetRefMenuOpen(false);
                                                                        onSelectHistoryPicker();
                                                                    },
                                                                    className: "flex w-full items-center gap-2.5 px-3 py-1.5 text-left text-[12px] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)] hover:bg-[var(--muted)]/40",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                            size: 13,
                                                                            strokeWidth: 1.7
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                            lineNumber: 540,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "flex-1 font-medium",
                                                                            children: t("Chat History")
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                            lineNumber: 541,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        selectedHistorySessions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-[var(--primary)]",
                                                                            children: selectedHistorySessions.length
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                            lineNumber: 543,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                    lineNumber: 533,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                            lineNumber: 516,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                            lineNumber: 430,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-auto flex shrink-0 items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: stateKnowledgeBase,
                                                    onChange: (e)=>onSetKB(e.target.value),
                                                    disabled: !ragActive,
                                                    title: ragActive ? t("Select Knowledge Base") : t("Enable Knowledge Base source first"),
                                                    className: `h-[28px] appearance-none rounded-full border bg-transparent py-0 pl-2.5 pr-5 text-[11px] outline-none transition-colors ${ragActive ? "cursor-pointer border-[var(--border)]/40 text-[var(--muted-foreground)] hover:border-[var(--border)] hover:text-[var(--foreground)]" : "cursor-not-allowed border-transparent text-[var(--border)]"}`,
                                                    style: {
                                                        backgroundImage: ragActive ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")" : "none",
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundPosition: "right 6px center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: ragActive ? t("No KB") : "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                            lineNumber: 564,
                                                            columnNumber: 19
                                                        }, this),
                                                        knowledgeBases.map((kb)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: kb.name,
                                                                children: kb.name
                                                            }, kb.name, false, {
                                                                fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                                lineNumber: 566,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                    lineNumber: 552,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: doSend,
                                                    disabled: !canSend,
                                                    className: "rounded-full bg-[var(--primary)] p-[7px] text-white shadow-[0_4px_12px_rgba(195,90,44,0.15)] transition-[transform,opacity,box-shadow] hover:shadow-[0_6px_16px_rgba(195,90,44,0.22)] disabled:opacity-25 disabled:shadow-none",
                                                    "aria-label": t("Send"),
                                                    children: isStreaming ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        size: 15,
                                                        className: "animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                        lineNumber: 577,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                                        size: 15,
                                                        strokeWidth: 2.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                        lineNumber: 579,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                                    lineNumber: 570,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                            lineNumber: 551,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                    lineNumber: 413,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                lineNumber: 412,
                                columnNumber: 11
                            }, this),
                            (isQuizMode || isMathAnimatorMode || isVisualizeMode || isResearchMode) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-[var(--border)]/15",
                                children: isQuizMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QuizConfigPanel, {
                                    value: quizConfig,
                                    onChange: onChangeQuizConfig,
                                    uploadedPdf: quizPdf,
                                    onUploadPdf: onUploadQuizPdf
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                    lineNumber: 589,
                                    columnNumber: 17
                                }, this) : isMathAnimatorMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MathAnimatorConfigPanel, {
                                    value: mathAnimatorConfig,
                                    onChange: onChangeMathAnimatorConfig
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                    lineNumber: 596,
                                    columnNumber: 17
                                }, this) : isVisualizeMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VisualizeConfigPanel, {
                                    value: visualizeConfig,
                                    onChange: onChangeVisualizeConfig
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                    lineNumber: 601,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResearchConfigPanel, {
                                    value: researchConfig,
                                    errors: researchValidationErrors,
                                    collapsed: researchPanelCollapsed,
                                    onChange: onChangeResearchConfig,
                                    onToggleCollapsed: onToggleResearchCollapsed
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                    lineNumber: 606,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/chat/home/ChatComposer.tsx",
                                lineNumber: 587,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/home/ChatComposer.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/home/ChatComposer.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/home/ChatComposer.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
});
}),
"[project]/lib/file-attachments.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractBase64FromDataUrl",
    ()=>extractBase64FromDataUrl,
    "readFileAsDataUrl",
    ()=>readFileAsDataUrl
]);
"use client";
async function readFileAsDataUrl(file) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = ()=>resolve(String(reader.result || ""));
        reader.onerror = ()=>reject(reader.error);
        reader.readAsDataURL(file);
    });
}
function extractBase64FromDataUrl(dataUrl) {
    return dataUrl.includes(",") ? dataUrl.split(",")[1] : dataUrl;
}
}),
"[project]/hooks/useChatAutoScroll.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatAutoScroll",
    ()=>useChatAutoScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const THROTTLE_MS = 80;
function useChatAutoScroll({ hasMessages, isStreaming, composerHeight, messageCount, lastMessageContent, lastEventCount }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const endRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shouldAutoScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const lastScrollTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const pendingRafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollToBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((behavior)=>{
        const container = containerRef.current;
        if (!container) return;
        container.scrollTo({
            top: container.scrollHeight,
            behavior
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!shouldAutoScrollRef.current) return;
        const now = performance.now();
        const elapsed = now - lastScrollTimeRef.current;
        if (isStreaming && elapsed < THROTTLE_MS) {
            if (pendingRafRef.current) return;
            pendingRafRef.current = window.setTimeout(()=>{
                pendingRafRef.current = 0;
                if (shouldAutoScrollRef.current) {
                    scrollToBottom("instant");
                    lastScrollTimeRef.current = performance.now();
                }
            }, THROTTLE_MS - elapsed);
            return ()=>{
                if (pendingRafRef.current) {
                    clearTimeout(pendingRafRef.current);
                    pendingRafRef.current = 0;
                }
            };
        }
        const raf = window.requestAnimationFrame(()=>{
            scrollToBottom(isStreaming ? "instant" : "smooth");
            lastScrollTimeRef.current = performance.now();
        });
        return ()=>{
            window.cancelAnimationFrame(raf);
            if (pendingRafRef.current) {
                clearTimeout(pendingRafRef.current);
                pendingRafRef.current = 0;
            }
        };
    }, [
        isStreaming,
        lastEventCount,
        lastMessageContent,
        messageCount,
        scrollToBottom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hasMessages || !shouldAutoScrollRef.current) return;
        const raf = window.requestAnimationFrame(()=>{
            scrollToBottom("instant");
        });
        return ()=>window.cancelAnimationFrame(raf);
    }, [
        composerHeight,
        hasMessages,
        scrollToBottom
    ]);
    // After streaming ends, dynamically-loaded components (e.g. MathAnimatorViewer
    // via next/dynamic) may render and grow the content height. Detect that and
    // scroll to bottom so the user can see the full result.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isStreaming) return;
        const container = containerRef.current;
        if (!container) return;
        let prevHeight = container.scrollHeight;
        let rafId = 0;
        const check = ()=>{
            if (rafId) return;
            rafId = requestAnimationFrame(()=>{
                rafId = 0;
                const curHeight = container.scrollHeight;
                if (curHeight > prevHeight && shouldAutoScrollRef.current) {
                    scrollToBottom("instant");
                }
                prevHeight = curHeight;
            });
        };
        const mo = new MutationObserver(check);
        mo.observe(container, {
            childList: true,
            subtree: true
        });
        return ()=>{
            mo.disconnect();
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [
        isStreaming,
        scrollToBottom
    ]);
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const container = containerRef.current;
        if (!container) return;
        const distanceFromBottom = container.scrollHeight - container.scrollTop - container.clientHeight;
        shouldAutoScrollRef.current = distanceFromBottom < 80;
    }, []);
    return {
        containerRef,
        endRef,
        shouldAutoScrollRef,
        scrollToBottom,
        handleScroll
    };
}
}),
"[project]/hooks/useMeasuredHeight.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMeasuredHeight",
    ()=>useMeasuredHeight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useMeasuredHeight() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const element = ref.current;
        if (!element || typeof ResizeObserver === "undefined") return;
        const updateHeight = ()=>setHeight(element.getBoundingClientRect().height);
        updateHeight();
        const observer = new ResizeObserver(()=>updateHeight());
        observer.observe(element);
        return ()=>observer.disconnect();
    }, []);
    return {
        ref,
        height
    };
}
}),
"[project]/lib/persistence.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EXCLUDE_FIELDS",
    ()=>EXCLUDE_FIELDS,
    "STORAGE_KEYS",
    ()=>STORAGE_KEYS,
    "clearAllStorage",
    ()=>clearAllStorage,
    "getStorageStats",
    ()=>getStorageStats,
    "loadFromStorage",
    ()=>loadFromStorage,
    "mergeWithDefaults",
    ()=>mergeWithDefaults,
    "persistState",
    ()=>persistState,
    "removeFromStorage",
    ()=>removeFromStorage,
    "saveToStorage",
    ()=>saveToStorage
]);
/**
 * Persistence utility library for localStorage operations
 * Provides safe read/write operations with error handling, versioning, and selective persistence
 */ // Storage key prefix to avoid conflicts with other apps
const STORAGE_PREFIX = "deeptutor_";
// Current storage version for data migration support
const STORAGE_VERSION = 1;
// Version key suffix
const VERSION_SUFFIX = "_version";
function loadFromStorage(key, defaultValue) {
    if ("TURBOPACK compile-time truthy", 1) {
        return defaultValue;
    }
    //TURBOPACK unreachable
    ;
}
function saveToStorage(key, value) {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
}
function removeFromStorage(key) {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
}
function clearAllStorage() {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
}
function persistState(state, exclude) {
    const result = {};
    for (const key of Object.keys(state)){
        if (!exclude.includes(key)) {
            result[key] = state[key];
        }
    }
    return result;
}
function mergeWithDefaults(persistedState, defaultState, exclude = []) {
    if (!persistedState) {
        return defaultState;
    }
    const result = {
        ...defaultState
    };
    for (const key of Object.keys(persistedState)){
        // Skip excluded fields - always use defaults
        if (exclude.includes(key)) {
            continue;
        }
        // Only copy if value is not undefined
        if (persistedState[key] !== undefined) {
            result[key] = persistedState[key];
        }
    }
    return result;
}
function getStorageStats() {
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            totalSize: 0,
            items: []
        };
    }
    //TURBOPACK unreachable
    ;
    const items = undefined;
    let totalSize;
}
const STORAGE_KEYS = {
    CHAT_STATE: "chat_state",
    SOLVER_STATE: "solver_state",
    QUESTION_STATE: "question_state",
    RESEARCH_STATE: "research_state",
    GUIDE_SESSION: "guide_session",
    COWRITER_CONTENT: "cowriter_content"
};
const EXCLUDE_FIELDS = {
    CHAT: [
        "isLoading",
        "currentStage"
    ],
    SOLVER: [
        "isSolving",
        "logs",
        "agentStatus",
        "tokenStats",
        "progress"
    ],
    QUESTION: [
        "logs",
        "progress",
        "agentStatus",
        "tokenStats",
        "uploadedFile"
    ],
    RESEARCH: [
        "status",
        "logs",
        "progress"
    ],
    GUIDE: [
        "isLoading",
        "loadingMessage"
    ]
};
}),
"[project]/lib/playground-config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FRONTEND_HIDDEN_TOOLS",
    ()=>FRONTEND_HIDDEN_TOOLS,
    "filterFrontendTools",
    ()=>filterFrontendTools,
    "loadCapabilityPlaygroundConfigs",
    ()=>loadCapabilityPlaygroundConfigs,
    "resolveCapabilityPlaygroundConfig",
    ()=>resolveCapabilityPlaygroundConfig,
    "saveCapabilityPlaygroundConfig",
    ()=>saveCapabilityPlaygroundConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/persistence.ts [app-ssr] (ecmascript)");
;
const STORAGE_KEY = "playground_capability_configs";
const FRONTEND_HIDDEN_TOOLS = new Set([
    "geogebra_analysis"
]);
function filterFrontendTools(tools) {
    return tools.filter((tool)=>!FRONTEND_HIDDEN_TOOLS.has(tool));
}
function loadCapabilityPlaygroundConfigs() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadFromStorage"])(STORAGE_KEY, {});
}
function resolveCapabilityPlaygroundConfig(configs, capabilityName, defaultTools) {
    const stored = configs[capabilityName];
    return {
        enabledTools: Array.from(new Set(filterFrontendTools(stored?.enabledTools ?? defaultTools))),
        knowledgeBase: stored?.knowledgeBase ?? "",
        config: stored?.config && typeof stored.config === "object" ? stored.config : {}
    };
}
function saveCapabilityPlaygroundConfig(configs, capabilityName, config) {
    const next = {
        ...configs,
        [capabilityName]: {
            enabledTools: Array.from(new Set(filterFrontendTools(config.enabledTools))),
            knowledgeBase: config.knowledgeBase,
            config: config.config && typeof config.config === "object" ? config.config : {}
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveToStorage"])(STORAGE_KEY, next);
    return next;
}
}),
"[project]/lib/research-types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildResearchWSConfig",
    ()=>buildResearchWSConfig,
    "createEmptyResearchConfig",
    ()=>createEmptyResearchConfig,
    "normalizeResearchConfig",
    ()=>normalizeResearchConfig,
    "summarizeResearchConfig",
    ()=>summarizeResearchConfig,
    "validateResearchConfig",
    ()=>validateResearchConfig
]);
function createEmptyResearchConfig() {
    return {
        mode: "",
        depth: "",
        sources: []
    };
}
function normalizeResearchConfig(raw) {
    const empty = createEmptyResearchConfig();
    return {
        mode: raw?.mode === "notes" || raw?.mode === "report" || raw?.mode === "comparison" || raw?.mode === "learning_path" ? raw.mode : empty.mode,
        depth: raw?.depth === "quick" || raw?.depth === "standard" || raw?.depth === "deep" || raw?.depth === "manual" ? raw.depth : empty.depth,
        sources: Array.isArray(raw?.sources) ? raw.sources.filter((source)=>source === "kb" || source === "web" || source === "papers") : empty.sources
    };
}
function validateResearchConfig(cfg) {
    const errors = {};
    if (!cfg.mode) {
        errors.mode = "Required";
    }
    if (!cfg.depth) {
        errors.depth = "Required";
    }
    return {
        valid: Object.keys(errors).length === 0,
        errors
    };
}
function buildResearchWSConfig(cfg, confirmedOutline) {
    const validation = validateResearchConfig(cfg);
    if (!validation.valid) {
        throw new Error("Deep research settings are incomplete.");
    }
    const result = {
        mode: cfg.mode,
        depth: cfg.depth,
        sources: [
            ...cfg.sources
        ]
    };
    if (cfg.depth === "manual") {
        if (cfg.manual_subtopics != null) result.manual_subtopics = cfg.manual_subtopics;
        if (cfg.manual_max_iterations != null) result.manual_max_iterations = cfg.manual_max_iterations;
    }
    const outline = confirmedOutline ?? cfg.confirmed_outline;
    if (outline && outline.length > 0) {
        result.confirmed_outline = outline;
    }
    return result;
}
function summarizeResearchConfig(cfg) {
    const validation = validateResearchConfig(cfg);
    if (!validation.valid) return "Incomplete settings";
    const sourceSummary = cfg.sources.length ? cfg.sources.join("+") : "llm-only";
    return [
        cfg.mode.replace("_", " "),
        cfg.depth,
        sourceSummary
    ].join(" · ");
}
}),
"[project]/lib/knowledge-api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invalidateKnowledgeCaches",
    ()=>invalidateKnowledgeCaches,
    "listKnowledgeBases",
    ()=>listKnowledgeBases,
    "listRagProviders",
    ()=>listRagProviders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2d$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/client-cache.ts [app-ssr] (ecmascript)");
;
;
const KNOWLEDGE_CACHE_PREFIX = "knowledge:";
async function listKnowledgeBases(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2d$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withClientCache"])(`${KNOWLEDGE_CACHE_PREFIX}list`, async ()=>{
        const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/knowledge/list"), {
            cache: "no-store"
        });
        const data = await response.json();
        return Array.isArray(data) ? data : Array.isArray(data?.knowledge_bases) ? data.knowledge_bases : [];
    }, {
        force: options?.force
    });
}
async function listRagProviders(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2d$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withClientCache"])(`${KNOWLEDGE_CACHE_PREFIX}providers`, async ()=>{
        const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/knowledge/rag-providers"), {
            cache: "no-store"
        });
        const data = await response.json();
        return Array.isArray(data?.providers) ? data.providers : [];
    }, {
        force: options?.force
    });
}
function invalidateKnowledgeCaches() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2d$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invalidateClientCache"])(KNOWLEDGE_CACHE_PREFIX);
}
}),
"[project]/app/(workspace)/chat/[[...sessionId]]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-ssr] (ecmascript) <export default as BrainCircuit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clapperboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clapperboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clapperboard.js [app-ssr] (ecmascript) <export default as Clapperboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-ssr] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-search.js [app-ssr] (ecmascript) <export default as FileSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/microscope.js [app-ssr] (ecmascript) <export default as Microscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-ssr] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$home$2f$ChatComposer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/home/ChatComposer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$home$2f$ChatMessages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/home/ChatMessages.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$UnifiedChatContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/UnifiedChatContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$file$2d$attachments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/file-attachments.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useChatAutoScroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useChatAutoScroll.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMeasuredHeight$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useMeasuredHeight.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$playground$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/playground-config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quiz$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/quiz-types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$math$2d$animator$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/math-animator-types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$visualize$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/visualize-types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$research$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/research-types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$knowledge$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/knowledge-api.ts [app-ssr] (ecmascript)");
;
;
;
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const NotebookRecordPicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/notebook/NotebookRecordPicker.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const HistorySessionPicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/chat/HistorySessionPicker.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const SaveToNotebookModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/notebook/SaveToNotebookModal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const ALL_TOOLS = [
    {
        name: "brainstorm",
        label: "Brainstorm",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"]
    },
    {
        name: "rag",
        label: "RAG",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"]
    },
    {
        name: "web_search",
        label: "Web Search",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
    },
    {
        name: "code_execution",
        label: "Code",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"]
    },
    {
        name: "reason",
        label: "Reason",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
    },
    {
        name: "paper_search",
        label: "Arxiv Search",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"]
    }
];
const RESEARCH_SOURCES = [
    {
        name: "kb",
        label: "Knowledge Base",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"]
    },
    {
        name: "web",
        label: "Web",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
    },
    {
        name: "papers",
        label: "Papers",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"]
    }
];
const CAPABILITIES = [
    {
        value: "",
        label: "Chat",
        description: "Flexible conversation with any tool",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
        allowedTools: [
            "brainstorm",
            "rag",
            "web_search",
            "code_execution",
            "reason",
            "paper_search"
        ],
        defaultTools: []
    },
    {
        value: "deep_solve",
        label: "Deep Solve",
        description: "Multi-step reasoning & problem solving",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"],
        allowedTools: [
            "rag",
            "web_search",
            "code_execution",
            "reason"
        ],
        defaultTools: [
            "rag",
            "web_search",
            "code_execution",
            "reason"
        ]
    },
    {
        value: "deep_question",
        label: "Quiz Generation",
        description: "Auto-validated question generation",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"],
        allowedTools: [
            "rag",
            "web_search",
            "code_execution"
        ],
        defaultTools: [
            "rag",
            "web_search",
            "code_execution"
        ]
    },
    {
        value: "deep_research",
        label: "Deep Research",
        description: "Comprehensive multi-agent research",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__["Microscope"],
        allowedTools: [],
        defaultTools: []
    },
    {
        value: "math_animator",
        label: "Math Animator",
        description: "Generate math videos or storyboard images",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clapperboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clapperboard$3e$__["Clapperboard"],
        allowedTools: [],
        defaultTools: []
    },
    {
        value: "visualize",
        label: "Visualize",
        description: "Generate SVG, Chart.js, or Mermaid visualizations",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        allowedTools: [],
        defaultTools: []
    }
];
/* ------------------------------------------------------------------ */ /*  Helpers                                                           */ /* ------------------------------------------------------------------ */ function getCapability(value) {
    return CAPABILITIES.find((c)=>c.value === (value || "")) ?? CAPABILITIES[0];
}
function ChatPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const sessionIdParam = params.sessionId?.[0] ?? null;
    const { state, setTools, setCapability, setKBs, sendMessage, cancelStreamingTurn, newSession, loadSession } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$UnifiedChatContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUnifiedChat"])();
    const [knowledgeBases, setKnowledgeBases] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [capabilityConfigs, setCapabilityConfigs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [attachments, setAttachments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [capMenuOpen, setCapMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [quizConfig, setQuizConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quiz$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_QUIZ_CONFIG"]
    });
    const [quizPdf, setQuizPdf] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mathAnimatorConfig, setMathAnimatorConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$math$2d$animator$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_MATH_ANIMATOR_CONFIG"]
    });
    const [visualizeConfig, setVisualizeConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$visualize$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_VISUALIZE_CONFIG"]
    });
    const [researchConfig, setResearchConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$research$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEmptyResearchConfig"])());
    const [researchPanelCollapsed, setResearchPanelCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showSaveModal, setShowSaveModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showNotebookPicker, setShowNotebookPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showHistoryPicker, setShowHistoryPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toolMenuOpen, setToolMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [refMenuOpen, setRefMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedNotebookRecords, setSelectedNotebookRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedHistorySessions, setSelectedHistorySessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const dragCounter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const capMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const capBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toolMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toolBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initialLoadRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const activeCap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>getCapability(state.activeCapability), [
        state.activeCapability
    ]);
    const isQuizMode = activeCap.value === "deep_question";
    const isMathAnimatorMode = activeCap.value === "math_animator";
    const isVisualizeMode = activeCap.value === "visualize";
    const isResearchMode = activeCap.value === "deep_research";
    const selectedTools = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new Set(state.enabledTools), [
        state.enabledTools
    ]);
    const ragActive = isResearchMode ? researchConfig.sources.includes("kb") : selectedTools.has("rag");
    const hasMessages = state.messages.length > 0;
    const { ref: composerRef, height: composerHeight } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMeasuredHeight$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMeasuredHeight"])();
    const visibleTools = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>ALL_TOOLS.filter((t)=>activeCap.allowedTools.includes(t.name)), [
        activeCap.allowedTools
    ]);
    const researchValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$research$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateResearchConfig"])(researchConfig), [
        researchConfig
    ]);
    const notebookReferenceGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const groups = new Map();
        selectedNotebookRecords.forEach((record)=>{
            const existing = groups.get(record.notebookId);
            if (existing) {
                existing.count += 1;
            } else {
                groups.set(record.notebookId, {
                    notebookName: record.notebookName,
                    count: 1
                });
            }
        });
        return Array.from(groups.entries()).map(([notebookId, value])=>({
                notebookId,
                ...value
            }));
    }, [
        selectedNotebookRecords
    ]);
    const notebookReferencesPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const grouped = new Map();
        selectedNotebookRecords.forEach((record)=>{
            const current = grouped.get(record.notebookId) || [];
            current.push(record.id);
            grouped.set(record.notebookId, current);
        });
        return Array.from(grouped.entries()).map(([notebook_id, record_ids])=>({
                notebook_id,
                record_ids
            }));
    }, [
        selectedNotebookRecords
    ]);
    const historyReferencesPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>selectedHistorySessions.map((session)=>session.sessionId), [
        selectedHistorySessions
    ]);
    const chatSavePayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!state.messages.length) return null;
        const title = state.messages.find((msg)=>msg.role === "user")?.content.trim().slice(0, 80) || "Chat Session";
        const transcript = state.messages.map((msg)=>{
            const role = msg.role === "user" ? "User" : msg.role === "assistant" ? "Assistant" : "System";
            return `## ${role}\n${msg.content}`;
        }).join("\n\n");
        return {
            recordType: "chat",
            title,
            userQuery: state.messages.filter((msg)=>msg.role === "user").map((msg)=>msg.content).join("\n\n"),
            output: transcript,
            metadata: {
                source: "chat",
                capability: state.activeCapability || "chat",
                message_count: state.messages.length,
                ui_language: state.language,
                session_id: state.sessionId
            }
        };
    }, [
        state.activeCapability,
        state.language,
        state.messages,
        state.sessionId
    ]);
    const activeAssistantMessage = state.isStreaming ? state.messages[state.messages.length - 1] : null;
    const activeUserIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!state.isStreaming) return -1;
        for(let index = state.messages.length - 2; index >= 0; index -= 1){
            if (state.messages[index]?.role === "user") return index;
        }
        return -1;
    }, [
        state.isStreaming,
        state.messages
    ]);
    const lastMessage = state.messages[state.messages.length - 1];
    const { containerRef: messagesContainerRef, endRef: messagesEndRef, shouldAutoScrollRef, handleScroll: handleMessagesScroll } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useChatAutoScroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatAutoScroll"])({
        hasMessages,
        isStreaming: state.isStreaming,
        composerHeight,
        messageCount: state.messages.length,
        lastMessageContent: lastMessage?.content,
        lastEventCount: lastMessage?.events?.length
    });
    const copyAssistantMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (content)=>{
        if (!content.trim()) return;
        try {
            await navigator.clipboard.writeText(content);
        } catch (error) {
            console.error("Failed to copy assistant message:", error);
        }
    }, []);
    const replaySnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((snapshot, configOverride)=>{
        if (!snapshot || state.isStreaming) return;
        sendMessage(snapshot.content, snapshot.attachments, configOverride ?? snapshot.config, snapshot.notebookReferences, snapshot.historyReferences, {
            displayUserMessage: false,
            persistUserMessage: false,
            requestSnapshotOverride: snapshot
        });
        shouldAutoScrollRef.current = true;
    }, [
        sendMessage,
        shouldAutoScrollRef,
        state.isStreaming
    ]);
    const handleAnswerNow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((snapshot, assistantMsg)=>{
        if (!snapshot || !state.isStreaming) return;
        const answerNowEvents = (assistantMsg?.events ?? []).map((event)=>({
                type: event.type,
                stage: event.stage,
                content: event.content,
                metadata: event.metadata ?? {}
            }));
        cancelStreamingTurn();
        window.setTimeout(()=>{
            sendMessage(snapshot.content, snapshot.attachments, {
                ...snapshot.config || {},
                answer_now_context: {
                    original_user_message: snapshot.content,
                    partial_response: assistantMsg?.content || "",
                    events: answerNowEvents
                }
            }, snapshot.notebookReferences, snapshot.historyReferences, {
                displayUserMessage: false,
                persistUserMessage: false,
                requestSnapshotOverride: snapshot
            });
            shouldAutoScrollRef.current = true;
        }, 0);
    }, [
        cancelStreamingTurn,
        sendMessage,
        shouldAutoScrollRef,
        state.isStreaming
    ]);
    /* ---- URL-driven session loading ---- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialLoadRef.current) return;
        initialLoadRef.current = true;
        if (sessionIdParam) {
            void loadSession(sessionIdParam).catch(()=>{
                router.replace("/chat", {
                    scroll: false
                });
            });
        } else {
            newSession();
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    // When URL param changes (sidebar navigation), load the corresponding session
    const prevSessionIdParam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(sessionIdParam);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (sessionIdParam === prevSessionIdParam.current) return;
        prevSessionIdParam.current = sessionIdParam;
        if (sessionIdParam) {
            void loadSession(sessionIdParam).catch(()=>{
                router.replace("/chat", {
                    scroll: false
                });
            });
        } else {
            newSession();
        }
    }, [
        sessionIdParam,
        loadSession,
        newSession,
        router
    ]);
    // When a new session_id is assigned by the server, update the URL
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (state.sessionId && !sessionIdParam) {
            router.replace(`/chat/${state.sessionId}`, {
                scroll: false
            });
        }
    }, [
        state.sessionId,
        sessionIdParam,
        router
    ]);
    /* Load KBs */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (async ()=>{
            try {
                const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$knowledge$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listKnowledgeBases"])();
                setKnowledgeBases(list);
                if (!state.knowledgeBases.length && list.length) {
                    const def = list.find((k)=>k.is_default);
                    setKBs([
                        def?.name || list[0].name
                    ]);
                }
            } catch  {
                setKnowledgeBases([]);
            }
        })();
    }, [
        setKBs,
        state.knowledgeBases.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCapabilityConfigs((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$playground$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadCapabilityPlaygroundConfigs"])());
    }, []);
    /* URL query params (capability, tool) */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const p = undefined;
        const qc = undefined;
        const qt = undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (e)=>{
            const t = e.target;
            if (capMenuRef.current && !capMenuRef.current.contains(t) && capBtnRef.current && !capBtnRef.current.contains(t)) setCapMenuOpen(false);
            if (toolMenuRef.current && !toolMenuRef.current.contains(t) && toolBtnRef.current && !toolBtnRef.current.contains(t)) setToolMenuOpen(false);
            if (refMenuRef.current && !refMenuRef.current.contains(t) && refBtnRef.current && !refBtnRef.current.contains(t)) setRefMenuOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return ()=>document.removeEventListener("mousedown", handler);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const allowed = new Set(visibleTools.map((tool)=>tool.name));
        const nextTools = state.enabledTools.filter((tool)=>allowed.has(tool));
        if (nextTools.length !== state.enabledTools.length) setTools(nextTools);
    }, [
        setTools,
        state.enabledTools,
        visibleTools
    ]);
    /* ---- handlers ---- */ const handleSelectCapability = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        const cap = CAPABILITIES.find((c)=>c.value === value) ?? CAPABILITIES[0];
        const storageKey = cap.value || "chat";
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$playground$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveCapabilityPlaygroundConfig"])(capabilityConfigs, storageKey, cap.allowedTools);
        setCapability(cap.value || null);
        setTools(config.enabledTools.length > 0 || capabilityConfigs[storageKey] ? [
            ...config.enabledTools
        ] : [
            ...cap.defaultTools
        ]);
        if (config.enabledTools.includes("rag") && config.knowledgeBase) setKBs([
            config.knowledgeBase
        ]);
        setResearchPanelCollapsed(cap.value !== "deep_research");
        setCapMenuOpen(false);
    }, [
        capabilityConfigs,
        setCapability,
        setKBs,
        setTools
    ]);
    const toggleTool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((tool)=>{
        if (!activeCap.allowedTools.includes(tool)) return;
        if (selectedTools.has(tool)) {
            setTools(state.enabledTools.filter((t)=>t !== tool));
        } else {
            setTools([
                ...state.enabledTools,
                tool
            ]);
        }
    }, [
        activeCap.allowedTools,
        selectedTools,
        setTools,
        state.enabledTools
    ]);
    const toggleResearchSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((source)=>{
        setResearchConfig((current)=>({
                ...current,
                sources: current.sources.includes(source) ? current.sources.filter((item)=>item !== source) : [
                    ...current.sources,
                    source
                ]
            }));
    }, []);
    const fileToAttachment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((f)=>new Promise((resolve, reject)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$file$2d$attachments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readFileAsDataUrl"])(f).then((raw)=>{
                const isImage = f.type.startsWith("image/");
                const b64 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$file$2d$attachments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractBase64FromDataUrl"])(raw);
                resolve({
                    type: isImage ? "image" : "file",
                    filename: f.name,
                    base64: b64,
                    previewUrl: isImage ? raw : undefined
                });
            }).catch(reject);
        }), []);
    const handlePaste = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (event)=>{
        const items = Array.from(event.clipboardData.items);
        const imageFiles = items.filter((item)=>item.type.startsWith("image/")).map((item)=>item.getAsFile()).filter((f)=>f !== null);
        if (!imageFiles.length) return;
        event.preventDefault();
        const next = await Promise.all(imageFiles.map(fileToAttachment));
        setAttachments((prev)=>[
                ...prev,
                ...next
            ]);
    }, [
        fileToAttachment
    ]);
    const removeAttachment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>{
        setAttachments((prev)=>prev.filter((_, i)=>i !== index));
    }, []);
    const handleDragEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        e.stopPropagation();
        dragCounter.current += 1;
        if (e.dataTransfer.types.includes("Files")) setDragging(true);
    }, []);
    const handleDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        e.stopPropagation();
        dragCounter.current -= 1;
        if (dragCounter.current === 0) setDragging(false);
    }, []);
    const handleDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        e.stopPropagation();
    }, []);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        dragCounter.current = 0;
        const files = Array.from(e.dataTransfer.files).filter((f)=>f.type.startsWith("image/"));
        if (!files.length) return;
        const next = await Promise.all(files.map(fileToAttachment));
        setAttachments((prev)=>[
                ...prev,
                ...next
            ]);
    }, [
        fileToAttachment
    ]);
    const handleSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (content)=>{
        if (!content && !attachments.length && !selectedNotebookRecords.length && !selectedHistorySessions.length || state.isStreaming) return;
        let extraAttachments = attachments.map((a)=>({
                type: a.type,
                filename: a.filename,
                base64: a.base64
            }));
        let config;
        if (isQuizMode) {
            config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quiz$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildQuizWSConfig"])(quizConfig);
            if (quizConfig.mode === "mimic" && quizPdf) {
                const b64 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$file$2d$attachments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractBase64FromDataUrl"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$file$2d$attachments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readFileAsDataUrl"])(quizPdf));
                extraAttachments = [
                    ...extraAttachments,
                    {
                        type: "pdf",
                        filename: quizPdf.name,
                        base64: b64
                    }
                ];
            }
        }
        if (isMathAnimatorMode) config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$math$2d$animator$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMathAnimatorWSConfig"])(mathAnimatorConfig);
        if (isVisualizeMode) config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$visualize$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildVisualizeWSConfig"])(visualizeConfig);
        if (isResearchMode) config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$research$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildResearchWSConfig"])(researchConfig);
        sendMessage(content || (selectedNotebookRecords.length || selectedHistorySessions.length ? "Please use the selected context to help with this request." : "") || (isMathAnimatorMode ? attachments.some((a)=>a.type === "image") ? "Generate a math animation from the attached reference image(s)." : "" : attachments.some((a)=>a.type === "image") ? "Please analyze the attached image(s)." : ""), extraAttachments, config, notebookReferencesPayload, historyReferencesPayload);
        shouldAutoScrollRef.current = true;
        if (isResearchMode) setResearchPanelCollapsed(true);
        setAttachments([]);
        setSelectedNotebookRecords([]);
        setSelectedHistorySessions([]);
    }, [
        attachments,
        historyReferencesPayload,
        isMathAnimatorMode,
        isQuizMode,
        isResearchMode,
        isVisualizeMode,
        mathAnimatorConfig,
        notebookReferencesPayload,
        quizConfig,
        quizPdf,
        researchConfig,
        selectedHistorySessions.length,
        selectedNotebookRecords.length,
        sendMessage,
        shouldAutoScrollRef,
        state.isStreaming,
        visualizeConfig
    ]);
    const handleConfirmOutline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((outline, _topic, originalConfig)=>{
        const config = {
            ...originalConfig ?? {
                mode: researchConfig.mode,
                depth: researchConfig.depth,
                sources: [
                    ...researchConfig.sources
                ]
            },
            confirmed_outline: outline
        };
        sendMessage(_topic, [], config, undefined, undefined, {
            displayUserMessage: false,
            persistUserMessage: false
        });
        shouldAutoScrollRef.current = true;
    }, [
        researchConfig,
        sendMessage,
        shouldAutoScrollRef
    ]);
    const handleRetryMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((snapshot)=>{
        replaySnapshot(snapshot);
    }, [
        replaySnapshot
    ]);
    const handleSetKB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((kb)=>{
        setKBs(kb ? [
            kb
        ] : []);
    }, [
        setKBs
    ]);
    const handleSelectNotebookPicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setShowNotebookPicker(true);
    }, []);
    const handleSelectHistoryPicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setShowHistoryPicker(true);
    }, []);
    const handleRemoveHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((sessionId)=>{
        setSelectedHistorySessions((prev)=>prev.filter((item)=>item.sessionId !== sessionId));
    }, []);
    const handleRemoveNotebook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((notebookId)=>{
        setSelectedNotebookRecords((prev)=>prev.filter((record)=>record.notebookId !== notebookId));
    }, []);
    const handleToggleResearchCollapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setResearchPanelCollapsed((prev)=>!prev);
    }, []);
    const handleCloseNotebookPicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setShowNotebookPicker(false);
    }, []);
    const handleApplyNotebookRecords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((records)=>{
        setSelectedNotebookRecords(records);
    }, []);
    const handleCloseHistoryPicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setShowHistoryPicker(false);
    }, []);
    const handleApplyHistorySessions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((sessions)=>{
        setSelectedHistorySessions(sessions);
    }, []);
    const handleCloseSaveModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setShowSaveModal(false);
    }, []);
    const handleNewChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        router.push("/chat");
    }, [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col overflow-hidden bg-[var(--background)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex w-full max-w-[960px] flex-1 min-h-0 flex-col overflow-hidden px-6",
                children: [
                    !hasMessages ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 min-h-0 flex-col items-center justify-center animate-fade-in",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-serif text-[36px] font-medium tracking-[-0.01em] text-[var(--foreground)]",
                                    children: t("What would you like to learn?")
                                }, void 0, false, {
                                    fileName: "[project]/app/(workspace)/chat/[[...sessionId]]/page.tsx",
                                    lineNumber: 615,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-[15px] text-[var(--muted-foreground)]",
                                    children: t("Ask anything — I'm here to help you understand.")
                                }, void 0, false, {
                                    fileName: "[project]/app/(workspace)/chat/[[...sessionId]]/page.tsx",
                                    lineNumber: 618,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(workspace)/chat/[[...sessionId]]/page.tsx",
                            lineNumber: 614,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(workspace)/chat/[[...sessionId]]/page.tsx",
                        lineNumber: 613,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesContainerRef,
                        "data-chat-scroll-root": "true",
                        onScroll: handleMessagesScroll,
                        className: `mx-auto w-full flex-1 min-h-0 space-y-7 overflow-y-auto pt-6 pr-4 [scrollbar-gutter:stable] ${hasMessages ? "" : "pb-6"}`,
                        style: hasMessages ? {
                            paddingBottom: `${Math.max(composerHeight + 24, 120)}px`
                        } : undefined,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[13px] font-medium text-[var(--muted-foreground)]",
                                        children: t(activeCap.label)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(workspace)/chat/[[...sessionId]]/page.tsx",
                                        lineNumber: 632,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            chatSavePayload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowSaveModal(true),
                                                className: "rounded-lg border border-[var(--border)]/50 px-3 py-1.5 text-[12px] font-medium text-[var(--muted-foreground)] transition-colors hover:border-[var(--border)] hover:text-[var(--foreground)]",
                                                children: t("Save to Notebook")
                                            }, void 0, false, {
                                                fileName: "[project]/app/(workspace)/chat/[[...sessionId]]/page.tsx",
                                                lineNumber: 635,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleNewChat,
                                                className: "rounded-lg border border-[var(--border)]/50 px-3 py-1.5 text-[12px] font-medium text-[var(--muted-foreground)] transition-colors hover:border-[var(--border)] hover:text-[var(--foreground)]",
                                                children: t("New chat")
                                            }, void 0, false, {
                                                fileName: "[project]/app/(workspace)/chat/[[...sessionId]]/page.tsx",
                                                lineNumber: 642,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(workspace)/chat/[[...sessionId]]/page.tsx",
                                        lineNumber: 633,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(workspace)/chat/[[...sessionId]]/page.tsx",
                                lineNumber: 631,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$home$2f$ChatMessages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatMessageList"], {
                                messages: state.messages,
                                isStreaming: state.isStreaming,
                                activeUserIndex: activeUserIndex,
                                activeAssistantMessage: activeAssistantMessage?.role === "assistant" ? activeAssistantMessage : null,
                                sessionId: state.sessionId,
                                language: state.language,
                                onCancelStreaming: cancelStreamingTurn,
                                onAnswerNow: handleAnswerNow,
                                onCopyAssistantMessage: copyAssistantMessage,
                                onRetryMessage: handleRetryMessage,
                                onConfirmOutline: handleConfirmOutline
                            }, void 0, false, {
                                fileName: "[project]/app/(workspace)/chat/[[...sessionId]]/page.tsx",
                                lineNumber: 651,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef,
                                className: "h-px w-full shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/app/(workspace)/chat/[[...sessionId]]/page.tsx",
                                lineNumber: 664,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(workspace)/chat/[[...sessionId]]/page.tsx",
                        lineNumber: 624,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$home$2f$ChatComposer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        composerRef: composerRef,
                        capMenuRef: capMenuRef,
                        capBtnRef: capBtnRef,
                        toolMenuRef: toolMenuRef,
                        toolBtnRef: toolBtnRef,
                        refMenuRef: refMenuRef,
                        refBtnRef: refBtnRef,
                        dragCounter: dragCounter,
                        dragging: dragging,
                        capMenuOpen: capMenuOpen,
                        toolMenuOpen: toolMenuOpen,
                        refMenuOpen: refMenuOpen,
                        hasMessages: hasMessages,
                        attachments: attachments,
                        activeCap: activeCap,
                        visibleTools: visibleTools,
                        selectedTools: selectedTools,
                        ragActive: ragActive,
                        knowledgeBases: knowledgeBases,
                        selectedNotebookRecords: selectedNotebookRecords,
                        selectedHistorySessions: selectedHistorySessions,
                        notebookReferenceGroups: notebookReferenceGroups,
                        stateKnowledgeBase: state.knowledgeBases[0] || "",
                        isStreaming: state.isStreaming,
                        isResearchMode: isResearchMode,
                        isQuizMode: isQuizMode,
                        isMathAnimatorMode: isMathAnimatorMode,
                        isVisualizeMode: isVisualizeMode,
                        quizConfig: quizConfig,
                        quizPdf: quizPdf,
                        mathAnimatorConfig: mathAnimatorConfig,
                        visualizeConfig: visualizeConfig,
                        researchConfig: researchConfig,
                        researchValidationErrors: researchValidation.errors,
                        researchPanelCollapsed: researchPanelCollapsed,
                        capabilities: CAPABILITIES,
                        researchSources: RESEARCH_SOURCES,
                        onSetCapMenuOpen: setCapMenuOpen,
                        onSetToolMenuOpen: setToolMenuOpen,
                        onSetRefMenuOpen: setRefMenuOpen,
                        onSetKB: handleSetKB,
                        onSelectNotebookPicker: handleSelectNotebookPicker,
                        onSelectHistoryPicker: handleSelectHistoryPicker,
                        onToggleTool: toggleTool,
                        onToggleResearchSource: toggleResearchSource,
                        onSend: handleSend,
                        onRemoveAttachment: removeAttachment,
                        onRemoveHistory: handleRemoveHistory,
                        onRemoveNotebook: handleRemoveNotebook,
                        onDragEnter: handleDragEnter,
                        onDragLeave: handleDragLeave,
                        onDragOver: handleDragOver,
                        onDrop: handleDrop,
                        onPaste: handlePaste,
                        onSelectCapability: handleSelectCapability,
                        onChangeQuizConfig: setQuizConfig,
                        onUploadQuizPdf: setQuizPdf,
                        onChangeMathAnimatorConfig: setMathAnimatorConfig,
                        onChangeVisualizeConfig: setVisualizeConfig,
                        onChangeResearchConfig: setResearchConfig,
                        onToggleResearchCollapsed: handleToggleResearchCollapsed
                    }, void 0, false, {
                        fileName: "[project]/app/(workspace)/chat/[[...sessionId]]/page.tsx",
                        lineNumber: 668,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(workspace)/chat/[[...sessionId]]/page.tsx",
                lineNumber: 610,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NotebookRecordPicker, {
                open: showNotebookPicker,
                onClose: handleCloseNotebookPicker,
                onApply: handleApplyNotebookRecords
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/chat/[[...sessionId]]/page.tsx",
                lineNumber: 732,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HistorySessionPicker, {
                open: showHistoryPicker,
                onClose: handleCloseHistoryPicker,
                onApply: handleApplyHistorySessions
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/chat/[[...sessionId]]/page.tsx",
                lineNumber: 737,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SaveToNotebookModal, {
                open: showSaveModal,
                payload: chatSavePayload,
                onClose: handleCloseSaveModal
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/chat/[[...sessionId]]/page.tsx",
                lineNumber: 742,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(workspace)/chat/[[...sessionId]]/page.tsx",
        lineNumber: 609,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__433b3066._.js.map