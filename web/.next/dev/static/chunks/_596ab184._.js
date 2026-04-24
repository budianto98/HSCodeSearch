(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/quiz/QuestionFollowupPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuestionFollowupPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquarePlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square-plus.js [app-client] (ecmascript) <export default as MessageSquarePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendHorizonal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send-horizontal.js [app-client] (ecmascript) <export default as SendHorizonal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/MarkdownRenderer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function titleCase(value) {
    return value.replaceAll("_", " ").replace(/\b\w/g, (char)=>char.toUpperCase());
}
function QuestionFollowupPanel({ question, questionNumber, thread, onToggle, onInputChange, onSend }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const visibleMessages = thread.messages.filter((message)=>message.role !== "system");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-t border-[var(--border)] bg-[var(--card)]/30 px-3 py-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-hidden rounded-lg border border-[var(--border)]/80 bg-[var(--background)]/88 shadow-[0_1px_2px_rgba(0,0,0,0.02)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onToggle,
                    className: "flex w-full items-center justify-between gap-3 px-3 py-2 text-left transition-colors hover:bg-[var(--muted)]/14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 flex items-center gap-2 text-[12px] font-medium text-[var(--foreground)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquarePlus$3e$__["MessageSquarePlus"], {
                                    size: 13,
                                    className: "text-[var(--primary)]"
                                }, void 0, false, {
                                    fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: t("Follow-up Chat")
                                }, void 0, false, {
                                    fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-auto flex min-w-0 items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full bg-[var(--muted)] px-1.5 py-0.5 text-[10px] uppercase tracking-[0.08em] text-[var(--muted-foreground)]",
                                    children: [
                                        "Q",
                                        questionNumber
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                question.question_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full bg-[var(--muted)] px-1.5 py-0.5 text-[10px] uppercase tracking-[0.08em] text-[var(--muted-foreground)]",
                                    children: question.question_type
                                }, void 0, false, {
                                    fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this),
                                question.difficulty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full bg-[var(--muted)] px-1.5 py-0.5 text-[10px] uppercase tracking-[0.08em] text-[var(--muted-foreground)]",
                                    children: question.difficulty
                                }, void 0, false, {
                                    fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                thread.isStreaming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 11,
                                    className: "animate-spin text-[var(--primary)]"
                                }, void 0, false, {
                                    fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    size: 14,
                                    className: `shrink-0 text-[var(--muted-foreground)] transition-transform ${thread.isOpen ? "rotate-180" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                thread.isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[220px] space-y-2 overflow-y-auto border-t border-[var(--border)]/60 px-3 py-2.5",
                            children: visibleMessages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-md border border-dashed border-[var(--border)]/80 bg-[var(--muted)]/14 px-3 py-2.5 text-[12px] leading-[1.55] text-[var(--muted-foreground)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-1 flex items-center gap-1.5 font-medium text-[var(--foreground)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                size: 11,
                                                className: "text-[var(--primary)]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                                lineNumber: 97,
                                                columnNumber: 21
                                            }, this),
                                            t("Ask anything about this question")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                        lineNumber: 96,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: t("Try: why this answer is correct, where your reasoning went wrong, or ask for a cleaner explanation.")
                                    }, void 0, false, {
                                        fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                        lineNumber: 100,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                lineNumber: 95,
                                columnNumber: 17
                            }, this) : visibleMessages.map((message, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: message.role === "user" ? "flex justify-end" : "flex justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `max-w-[88%] rounded-[16px] px-3 py-2 text-[13px] leading-[1.7] ${message.role === "user" ? "rounded-br-md bg-[var(--primary)] text-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]" : "rounded-bl-md border border-[var(--border)]/80 bg-[var(--card)] text-[var(--foreground)]"}`,
                                        children: message.role === "assistant" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            content: message.content,
                                            variant: "compact"
                                        }, void 0, false, {
                                            fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                            lineNumber: 118,
                                            columnNumber: 25
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "whitespace-pre-wrap break-words",
                                            children: message.content
                                        }, void 0, false, {
                                            fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                            lineNumber: 120,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                        lineNumber: 110,
                                        columnNumber: 21
                                    }, this)
                                }, `${message.role}-${index}`, false, {
                                    fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                    lineNumber: 106,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-[var(--border)]/70 bg-[var(--card)]/45 px-3 py-2",
                            children: [
                                thread.currentStage && thread.isStreaming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-1 text-[10px] text-[var(--muted-foreground)]",
                                    children: [
                                        titleCase(thread.currentStage),
                                        "..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this),
                                thread.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-1 rounded-md border border-red-200 bg-red-50 px-2 py-1 text-[10px] text-red-700 dark:border-red-950/50 dark:bg-red-950/20 dark:text-red-300",
                                    children: thread.error
                                }, void 0, false, {
                                    fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-end gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: thread.input,
                                            onChange: (event)=>onInputChange(event.target.value),
                                            rows: 2,
                                            disabled: thread.isStreaming,
                                            placeholder: t("Ask a follow-up question about this item..."),
                                            className: "min-h-[56px] flex-1 resize-none rounded-md border border-[var(--border)]/80 bg-[var(--background)] px-3 py-2 text-[13px] text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted-foreground)] focus:border-[var(--primary)]/35"
                                        }, void 0, false, {
                                            fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onSend,
                                            disabled: !thread.input.trim() || thread.isStreaming,
                                            className: "inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md bg-[var(--primary)] px-3 text-[12px] font-medium text-white transition-opacity disabled:opacity-35",
                                            children: [
                                                thread.isStreaming ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    size: 11,
                                                    className: "animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendHorizonal$3e$__["SendHorizonal"], {
                                                    size: 11
                                                }, void 0, false, {
                                                    fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 21
                                                }, this),
                                                t("Send")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/quiz/QuestionFollowupPanel.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(QuestionFollowupPanel, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = QuestionFollowupPanel;
var _c;
__turbopack_context__.k.register(_c, "QuestionFollowupPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/notebook-api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addEntryToCategory",
    ()=>addEntryToCategory,
    "createCategory",
    ()=>createCategory,
    "deleteCategory",
    ()=>deleteCategory,
    "deleteNotebookEntry",
    ()=>deleteNotebookEntry,
    "getNotebookEntry",
    ()=>getNotebookEntry,
    "listCategories",
    ()=>listCategories,
    "listNotebookEntries",
    ()=>listNotebookEntries,
    "lookupNotebookEntry",
    ()=>lookupNotebookEntry,
    "removeEntryFromCategory",
    ()=>removeEntryFromCategory,
    "renameCategory",
    ()=>renameCategory,
    "updateNotebookEntry",
    ()=>updateNotebookEntry,
    "upsertNotebookEntry",
    ()=>upsertNotebookEntry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
;
async function expectJson(response) {
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }
    return response.json();
}
async function listNotebookEntries(filter = {}) {
    const params = new URLSearchParams();
    if (filter.category_id !== undefined) params.set("category_id", String(filter.category_id));
    if (filter.bookmarked !== undefined) params.set("bookmarked", String(filter.bookmarked));
    if (filter.is_correct !== undefined) params.set("is_correct", String(filter.is_correct));
    if (filter.limit !== undefined) params.set("limit", String(filter.limit));
    if (filter.offset !== undefined) params.set("offset", String(filter.offset));
    const query = params.toString();
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/question-notebook/entries${query ? `?${query}` : ""}`), {
        cache: "no-store"
    });
    return expectJson(response);
}
async function getNotebookEntry(entryId) {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/question-notebook/entries/${entryId}`), {
        cache: "no-store"
    });
    return expectJson(response);
}
async function lookupNotebookEntry(sessionId, questionId) {
    const params = new URLSearchParams({
        session_id: sessionId,
        question_id: questionId
    });
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/question-notebook/entries/lookup/by-question?${params}`));
    if (response.status === 404) return null;
    return expectJson(response);
}
async function updateNotebookEntry(entryId, updates) {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/question-notebook/entries/${entryId}`), {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updates)
    });
    await expectJson(response);
}
async function upsertNotebookEntry(data) {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/question-notebook/entries/upsert"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ...data,
            options: data.options || {},
            explanation: data.explanation || "",
            difficulty: data.difficulty || ""
        })
    });
    return expectJson(response);
}
async function deleteNotebookEntry(entryId) {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/question-notebook/entries/${entryId}`), {
        method: "DELETE"
    });
    await expectJson(response);
}
async function addEntryToCategory(entryId, categoryId) {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/question-notebook/entries/${entryId}/categories`), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            category_id: categoryId
        })
    });
    await expectJson(response);
}
async function removeEntryFromCategory(entryId, categoryId) {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/question-notebook/entries/${entryId}/categories/${categoryId}`), {
        method: "DELETE"
    });
    await expectJson(response);
}
async function listCategories() {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/question-notebook/categories"), {
        cache: "no-store"
    });
    return expectJson(response);
}
async function createCategory(name) {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/question-notebook/categories"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name
        })
    });
    return expectJson(response);
}
async function renameCategory(categoryId, name) {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/question-notebook/categories/${categoryId}`), {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name
        })
    });
    await expectJson(response);
}
async function deleteCategory(categoryId) {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/question-notebook/categories/${categoryId}`), {
        method: "DELETE"
    });
    await expectJson(response);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/quiz/QuizViewer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuizViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-plus.js [app-client] (ecmascript) <export default as FolderPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/MarkdownRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$quiz$2f$QuestionFollowupPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/quiz/QuestionFollowupPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quiz$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/quiz-types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/notebook-api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session-api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stream$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stream.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$unified$2d$ws$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/unified-ws.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const EMPTY_ANSWER = {
    selected: null,
    typed: "",
    submitted: false
};
function createEmptyThreadState() {
    return {
        isOpen: false,
        input: "",
        isStreaming: false,
        currentStage: "",
        sessionId: null,
        activeTurnId: null,
        messages: [],
        error: null
    };
}
function getQuestionKey(question, index) {
    return question.question_id || `question_${index + 1}`;
}
function getUserAnswer(question, answer) {
    if (question.question_type === "choice" && question.options && Object.keys(question.options).length > 0) {
        return answer.selected ?? "";
    }
    return answer.typed.trim();
}
function isAnswerCorrect(question, answer) {
    const userAnswer = getUserAnswer(question, answer);
    if (!userAnswer) return false;
    const correct = question.correct_answer.trim();
    const isChoice = question.question_type === "choice" && question.options && Object.keys(question.options).length > 0;
    if (isChoice) {
        return userAnswer.toUpperCase() === correct.toUpperCase() || userAnswer.toUpperCase() === correct.charAt(0).toUpperCase();
    }
    return userAnswer.toLowerCase() === correct.toLowerCase();
}
function QuizViewer({ questions, sessionId, language = "en" }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [idx, setIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [threads, setThreads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const lastReportedSignatureRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const threadsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const threadRunnersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const [entryIds, setEntryIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [bookmarked, setBookmarked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categoryDropdownKey, setCategoryDropdownKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newCategoryName, setNewCategoryName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [categoryBusy, setCategoryBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const q = questions[idx];
    const ans = answers[idx] ?? EMPTY_ANSWER;
    const total = questions.length;
    const navigationProgress = total > 0 ? (idx + 1) / total * 100 : 0;
    const questionKey = q ? getQuestionKey(q, idx) : "";
    const thread = questionKey ? threads[questionKey] ?? createEmptyThreadState() : createEmptyThreadState();
    const completedCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuizViewer.useMemo[completedCount]": ()=>Object.values(answers).filter({
                "QuizViewer.useMemo[completedCount]": (answer)=>answer.submitted
            }["QuizViewer.useMemo[completedCount]"]).length
    }["QuizViewer.useMemo[completedCount]"], [
        answers
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuizViewer.useEffect": ()=>{
            threadsRef.current = threads;
        }
    }["QuizViewer.useEffect"], [
        threads
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuizViewer.useEffect": ()=>({
                "QuizViewer.useEffect": ()=>{
                    threadRunnersRef.current.forEach({
                        "QuizViewer.useEffect": ({ client })=>client.disconnect()
                    }["QuizViewer.useEffect"]);
                    threadRunnersRef.current.clear();
                }
            })["QuizViewer.useEffect"]
    }["QuizViewer.useEffect"], []);
    const updateAnswer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizViewer.useCallback[updateAnswer]": (patch)=>setAnswers({
                "QuizViewer.useCallback[updateAnswer]": (prev)=>({
                        ...prev,
                        [idx]: {
                            ...prev[idx] ?? EMPTY_ANSWER,
                            ...patch
                        }
                    })
            }["QuizViewer.useCallback[updateAnswer]"])
    }["QuizViewer.useCallback[updateAnswer]"], [
        idx
    ]);
    const updateThread = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizViewer.useCallback[updateThread]": (key, updater)=>{
            setThreads({
                "QuizViewer.useCallback[updateThread]": (prev)=>({
                        ...prev,
                        [key]: updater(prev[key] ?? createEmptyThreadState())
                    })
            }["QuizViewer.useCallback[updateThread]"]);
        }
    }["QuizViewer.useCallback[updateThread]"], []);
    // ── Notebook integration ──────────────────────────────────────
    const refreshEntryId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizViewer.useCallback[refreshEntryId]": async (qKey, sId, questionIndex)=>{
            try {
                const entry = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookupNotebookEntry"])(sId, qKey);
                if (entry) {
                    setEntryIds({
                        "QuizViewer.useCallback[refreshEntryId]": (prev)=>({
                                ...prev,
                                [qKey]: entry.id
                            })
                    }["QuizViewer.useCallback[refreshEntryId]"]);
                    setBookmarked({
                        "QuizViewer.useCallback[refreshEntryId]": (prev)=>({
                                ...prev,
                                [qKey]: entry.bookmarked
                            })
                    }["QuizViewer.useCallback[refreshEntryId]"]);
                    if (questionIndex !== undefined && entry.user_answer) {
                        setAnswers({
                            "QuizViewer.useCallback[refreshEntryId]": (prev)=>{
                                if (prev[questionIndex]?.submitted) return prev;
                                return {
                                    ...prev,
                                    [questionIndex]: {
                                        selected: entry.user_answer || null,
                                        typed: entry.user_answer || "",
                                        submitted: true
                                    }
                                };
                            }
                        }["QuizViewer.useCallback[refreshEntryId]"]);
                    }
                }
            } catch  {
            /* entry may not exist yet */ }
        }
    }["QuizViewer.useCallback[refreshEntryId]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuizViewer.useEffect": ()=>{
            if (!sessionId) return;
            questions.forEach({
                "QuizViewer.useEffect": (question, i)=>{
                    const key = getQuestionKey(question, i);
                    void refreshEntryId(key, sessionId, i);
                }
            }["QuizViewer.useEffect"]);
        }
    }["QuizViewer.useEffect"], [
        sessionId,
        questions,
        refreshEntryId
    ]);
    const handleToggleBookmark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizViewer.useCallback[handleToggleBookmark]": async ()=>{
            if (!q || !sessionId) return;
            const key = getQuestionKey(q, idx);
            const eId = entryIds[key];
            if (!eId) return;
            const next = !bookmarked[key];
            setBookmarked({
                "QuizViewer.useCallback[handleToggleBookmark]": (prev)=>({
                        ...prev,
                        [key]: next
                    })
            }["QuizViewer.useCallback[handleToggleBookmark]"]);
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateNotebookEntry"])(eId, {
                    bookmarked: next
                });
            } catch  {
                setBookmarked({
                    "QuizViewer.useCallback[handleToggleBookmark]": (prev)=>({
                            ...prev,
                            [key]: !next
                        })
                }["QuizViewer.useCallback[handleToggleBookmark]"]);
            }
        }
    }["QuizViewer.useCallback[handleToggleBookmark]"], [
        bookmarked,
        entryIds,
        idx,
        q,
        sessionId
    ]);
    const loadCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizViewer.useCallback[loadCategories]": async ()=>{
            try {
                setCategories(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listCategories"])());
            } catch  {}
        }
    }["QuizViewer.useCallback[loadCategories]"], []);
    const handleOpenCategoryDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizViewer.useCallback[handleOpenCategoryDropdown]": ()=>{
            if (!q) return;
            const key = getQuestionKey(q, idx);
            if (categoryDropdownKey === key) {
                setCategoryDropdownKey(null);
                return;
            }
            setCategoryDropdownKey(key);
            void loadCategories();
        }
    }["QuizViewer.useCallback[handleOpenCategoryDropdown]"], [
        categoryDropdownKey,
        idx,
        loadCategories,
        q
    ]);
    const handleAddToCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizViewer.useCallback[handleAddToCategory]": async (catId)=>{
            if (!q) return;
            const key = getQuestionKey(q, idx);
            const eId = entryIds[key];
            if (!eId) return;
            setCategoryBusy(true);
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addEntryToCategory"])(eId, catId);
                setCategoryDropdownKey(null);
            } catch  {}
            setCategoryBusy(false);
        }
    }["QuizViewer.useCallback[handleAddToCategory]"], [
        entryIds,
        idx,
        q
    ]);
    const handleCreateAndAdd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizViewer.useCallback[handleCreateAndAdd]": async ()=>{
            if (!q || !newCategoryName.trim()) return;
            const key = getQuestionKey(q, idx);
            const eId = entryIds[key];
            if (!eId) return;
            setCategoryBusy(true);
            try {
                const cat = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCategory"])(newCategoryName.trim());
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addEntryToCategory"])(eId, cat.id);
                setNewCategoryName("");
                setCategoryDropdownKey(null);
            } catch  {}
            setCategoryBusy(false);
        }
    }["QuizViewer.useCallback[handleCreateAndAdd]"], [
        entryIds,
        idx,
        newCategoryName,
        q
    ]);
    // ── Follow-up thread event handling ───────────────────────────
    const handleThreadEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizViewer.useCallback[handleThreadEvent]": (key, event)=>{
            if (event.type === "session") {
                const metadata = event.metadata ?? {};
                const nextSessionId = metadata.session_id || event.session_id || "";
                const nextTurnId = metadata.turn_id || event.turn_id || null;
                if (!nextSessionId) return;
                updateThread(key, {
                    "QuizViewer.useCallback[handleThreadEvent]": (prev)=>({
                            ...prev,
                            sessionId: nextSessionId,
                            activeTurnId: nextTurnId
                        })
                }["QuizViewer.useCallback[handleThreadEvent]"]);
                const runner = threadRunnersRef.current.get(key);
                if (runner) runner.questionKey = nextSessionId;
                const eId = entryIds[key];
                if (eId) {
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateNotebookEntry"])(eId, {
                        followup_session_id: nextSessionId
                    }).catch({
                        "QuizViewer.useCallback[handleThreadEvent]": ()=>{}
                    }["QuizViewer.useCallback[handleThreadEvent]"]);
                }
                return;
            }
            if (event.type === "done") {
                updateThread(key, {
                    "QuizViewer.useCallback[handleThreadEvent]": (prev)=>({
                            ...prev,
                            isStreaming: false,
                            currentStage: "",
                            activeTurnId: null
                        })
                }["QuizViewer.useCallback[handleThreadEvent]"]);
                const runner = threadRunnersRef.current.get(key);
                runner?.client.disconnect();
                threadRunnersRef.current.delete(key);
                return;
            }
            updateThread(key, {
                "QuizViewer.useCallback[handleThreadEvent]": (prev)=>{
                    const next = {
                        ...prev,
                        activeTurnId: event.turn_id || prev.activeTurnId
                    };
                    if (event.type === "stage_start") {
                        next.currentStage = event.stage;
                        return next;
                    }
                    if (event.type === "stage_end") {
                        next.currentStage = "";
                        return next;
                    }
                    if (event.type === "error") {
                        next.error = event.content || prev.error;
                        const terminal = Boolean((event.metadata ?? {}).turn_terminal);
                        if (terminal) {
                            next.isStreaming = false;
                            next.currentStage = "";
                            next.activeTurnId = null;
                        }
                        return next;
                    }
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stream$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldAppendEventContent"])(event)) {
                        const messages = [
                            ...prev.messages
                        ];
                        const last = messages[messages.length - 1];
                        if (!last || last.role !== "assistant") {
                            messages.push({
                                role: "assistant",
                                content: event.content
                            });
                        } else {
                            messages[messages.length - 1] = {
                                ...last,
                                content: `${last.content}${event.content}`
                            };
                        }
                        next.messages = messages;
                    }
                    return next;
                }
            }["QuizViewer.useCallback[handleThreadEvent]"]);
        }
    }["QuizViewer.useCallback[handleThreadEvent]"], [
        entryIds,
        updateThread
    ]);
    const ensureThreadRunner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizViewer.useCallback[ensureThreadRunner]": (key)=>{
            const existing = threadRunnersRef.current.get(key);
            if (existing) {
                if (!existing.client.connected) existing.client.connect();
                return existing;
            }
            const record = {
                questionKey: key,
                client: new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$unified$2d$ws$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedWSClient"]({
                    "QuizViewer.useCallback[ensureThreadRunner]": (event)=>handleThreadEvent(key, event)
                }["QuizViewer.useCallback[ensureThreadRunner]"], {
                    "QuizViewer.useCallback[ensureThreadRunner]": ()=>{
                        const current = threadsRef.current[key];
                        if (current?.isStreaming) {
                            updateThread(key, {
                                "QuizViewer.useCallback[ensureThreadRunner]": (prev)=>({
                                        ...prev,
                                        isStreaming: false,
                                        currentStage: "",
                                        activeTurnId: null,
                                        error: prev.error || "Follow-up chat failed because the connection closed."
                                    })
                            }["QuizViewer.useCallback[ensureThreadRunner]"]);
                        }
                    }
                }["QuizViewer.useCallback[ensureThreadRunner]"])
            };
            threadRunnersRef.current.set(key, record);
            record.client.connect();
            return record;
        }
    }["QuizViewer.useCallback[ensureThreadRunner]"], [
        handleThreadEvent,
        updateThread
    ]);
    const sendThroughThreadRunner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function sendThroughThreadRunner(key, message, attempt = 0) {
        const runner = ensureThreadRunner(key);
        if (!runner.client.connected) {
            if (attempt >= 10) {
                updateThread(key, {
                    "QuizViewer.useCallback[sendThroughThreadRunner].sendThroughThreadRunner": (prev)=>({
                            ...prev,
                            isStreaming: false,
                            currentStage: "",
                            error: "Follow-up chat failed to connect."
                        })
                }["QuizViewer.useCallback[sendThroughThreadRunner].sendThroughThreadRunner"]);
                return;
            }
            window.setTimeout({
                "QuizViewer.useCallback[sendThroughThreadRunner].sendThroughThreadRunner": ()=>sendThroughThreadRunner(key, message, attempt + 1)
            }["QuizViewer.useCallback[sendThroughThreadRunner].sendThroughThreadRunner"], 200);
            return;
        }
        runner.client.send(message);
    }, [
        ensureThreadRunner,
        updateThread
    ]);
    const isChoice = q?.question_type === "choice" && q.options && Object.keys(q.options).length > 0;
    const currentUserAnswer = q ? getUserAnswer(q, ans) : "";
    const isCorrect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuizViewer.useMemo[isCorrect]": ()=>{
            if (!q || !ans.submitted) return null;
            return isAnswerCorrect(q, ans);
        }
    }["QuizViewer.useMemo[isCorrect]"], [
        ans,
        q
    ]);
    const submittedResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuizViewer.useMemo[submittedResults]": ()=>questions.flatMap({
                "QuizViewer.useMemo[submittedResults]": (question, questionIdx)=>{
                    const answer = answers[questionIdx];
                    if (!answer?.submitted) return [];
                    return [
                        {
                            question_id: question.question_id,
                            question: question.question,
                            question_type: question.question_type,
                            options: question.options ?? {},
                            user_answer: getUserAnswer(question, answer),
                            correct_answer: question.correct_answer,
                            explanation: question.explanation ?? "",
                            difficulty: question.difficulty ?? "",
                            is_correct: isAnswerCorrect(question, answer)
                        }
                    ];
                }
            }["QuizViewer.useMemo[submittedResults]"])
    }["QuizViewer.useMemo[submittedResults]"], [
        answers,
        questions
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuizViewer.useEffect": ()=>{
            if (!sessionId || total === 0 || completedCount !== total) return;
            const signature = JSON.stringify(submittedResults);
            if (!signature || signature === lastReportedSignatureRef.current) return;
            lastReportedSignatureRef.current = signature;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordQuizResults"])(sessionId, submittedResults).then({
                "QuizViewer.useEffect": ()=>{
                    questions.forEach({
                        "QuizViewer.useEffect": (question, i)=>{
                            void refreshEntryId(getQuestionKey(question, i), sessionId);
                        }
                    }["QuizViewer.useEffect"]);
                }
            }["QuizViewer.useEffect"]).catch({
                "QuizViewer.useEffect": (error)=>{
                    console.error("Failed to record quiz results:", error);
                    if (lastReportedSignatureRef.current === signature) {
                        lastReportedSignatureRef.current = "";
                    }
                }
            }["QuizViewer.useEffect"]);
        }
    }["QuizViewer.useEffect"], [
        completedCount,
        questions,
        refreshEntryId,
        sessionId,
        submittedResults,
        total
    ]);
    const upsertSingleQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizViewer.useCallback[upsertSingleQuestion]": async (question, answer)=>{
            if (!sessionId) return;
            const key = getQuestionKey(question, questions.indexOf(question));
            try {
                const entry = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upsertNotebookEntry"])({
                    session_id: sessionId,
                    question_id: question.question_id,
                    question: question.question,
                    question_type: question.question_type,
                    options: question.options ?? {},
                    correct_answer: question.correct_answer,
                    explanation: question.explanation ?? "",
                    difficulty: question.difficulty ?? "",
                    user_answer: getUserAnswer(question, answer),
                    is_correct: isAnswerCorrect(question, answer)
                });
                setEntryIds({
                    "QuizViewer.useCallback[upsertSingleQuestion]": (prev)=>({
                            ...prev,
                            [key]: entry.id
                        })
                }["QuizViewer.useCallback[upsertSingleQuestion]"]);
                setBookmarked({
                    "QuizViewer.useCallback[upsertSingleQuestion]": (prev)=>({
                            ...prev,
                            [key]: entry.bookmarked
                        })
                }["QuizViewer.useCallback[upsertSingleQuestion]"]);
            } catch  {
            /* best-effort */ }
        }
    }["QuizViewer.useCallback[upsertSingleQuestion]"], [
        questions,
        sessionId
    ]);
    const handleSubmit = ()=>{
        if (ans.submitted || !q) return;
        const newAnswer = {
            ...answers[idx] ?? EMPTY_ANSWER,
            submitted: true
        };
        updateAnswer({
            submitted: true
        });
        void upsertSingleQuestion(q, newAnswer);
    };
    const handleReset = ()=>{
        updateAnswer({
            selected: null,
            typed: "",
            submitted: false
        });
    };
    const handleToggleFollowup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizViewer.useCallback[handleToggleFollowup]": ()=>{
            if (!q) return;
            const key = getQuestionKey(q, idx);
            updateThread(key, {
                "QuizViewer.useCallback[handleToggleFollowup]": (prev)=>({
                        ...prev,
                        isOpen: !prev.isOpen
                    })
            }["QuizViewer.useCallback[handleToggleFollowup]"]);
        }
    }["QuizViewer.useCallback[handleToggleFollowup]"], [
        idx,
        q,
        updateThread
    ]);
    const handleFollowupInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizViewer.useCallback[handleFollowupInputChange]": (value)=>{
            if (!q) return;
            const key = getQuestionKey(q, idx);
            updateThread(key, {
                "QuizViewer.useCallback[handleFollowupInputChange]": (prev)=>({
                        ...prev,
                        input: value
                    })
            }["QuizViewer.useCallback[handleFollowupInputChange]"]);
        }
    }["QuizViewer.useCallback[handleFollowupInputChange]"], [
        idx,
        q,
        updateThread
    ]);
    const handleSendFollowup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizViewer.useCallback[handleSendFollowup]": ()=>{
            if (!q) return;
            const key = getQuestionKey(q, idx);
            const currentThread = threadsRef.current[key] ?? createEmptyThreadState();
            const content = currentThread.input.trim();
            if (!content || currentThread.isStreaming) return;
            const answer = answers[idx] ?? EMPTY_ANSWER;
            const followupConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quiz$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildQuizFollowupConfig"])(q, getUserAnswer(q, answer), isAnswerCorrect(q, answer), sessionId);
            updateThread(key, {
                "QuizViewer.useCallback[handleSendFollowup]": (prev)=>({
                        ...prev,
                        isOpen: true,
                        input: "",
                        isStreaming: true,
                        error: null,
                        messages: [
                            ...prev.messages,
                            {
                                role: "user",
                                content
                            }
                        ]
                    })
            }["QuizViewer.useCallback[handleSendFollowup]"]);
            sendThroughThreadRunner(key, {
                type: "start_turn",
                content,
                tools: [],
                capability: "deep_question",
                knowledge_bases: [],
                session_id: currentThread.sessionId,
                attachments: [],
                language,
                config: followupConfig
            });
        }
    }["QuizViewer.useCallback[handleSendFollowup]"], [
        answers,
        idx,
        language,
        q,
        sendThroughThreadRunner,
        sessionId,
        updateThread
    ]);
    if (!q) return null;
    const currentEntryId = entryIds[questionKey];
    const currentBookmarked = bookmarked[questionKey] ?? false;
    const showCategoryDropdown = categoryDropdownKey === questionKey;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 border-b border-[var(--border)] px-3 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mr-2 text-[11px] font-semibold text-[var(--muted-foreground)]",
                        children: [
                            completedCount,
                            "/",
                            total
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                        lineNumber: 548,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1",
                        children: questions.map((question, questionIndex)=>{
                            const answer = answers[questionIndex];
                            const isCurrent = questionIndex === idx;
                            const done = answer?.submitted;
                            const hasThread = Boolean(threads[getQuestionKey(question, questionIndex)]?.sessionId) || Boolean(threads[getQuestionKey(question, questionIndex)]?.messages.length);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIdx(questionIndex),
                                className: `flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold transition-all ${isCurrent ? "bg-[var(--primary)] text-white shadow-sm" : done ? "bg-[var(--primary)]/15 text-[var(--primary)]" : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--border)]"}`,
                                children: done && !isCurrent ? hasThread ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative inline-flex",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            size: 10
                                        }, void 0, false, {
                                            fileName: "[project]/components/quiz/QuizViewer.tsx",
                                            lineNumber: 578,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-[var(--primary)]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/quiz/QuizViewer.tsx",
                                            lineNumber: 579,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/quiz/QuizViewer.tsx",
                                    lineNumber: 577,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    size: 10
                                }, void 0, false, {
                                    fileName: "[project]/components/quiz/QuizViewer.tsx",
                                    lineNumber: 582,
                                    columnNumber: 21
                                }, this) : questionIndex + 1
                            }, question.question_id || questionIndex, false, {
                                fileName: "[project]/components/quiz/QuizViewer.tsx",
                                lineNumber: 564,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                        lineNumber: 551,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/quiz/QuizViewer.tsx",
                lineNumber: 547,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-md bg-[var(--muted)] px-1.5 py-0.5 text-[10px] font-medium uppercase text-[var(--muted-foreground)]",
                                        children: [
                                            "Q",
                                            idx + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                                        lineNumber: 596,
                                        columnNumber: 13
                                    }, this),
                                    q.difficulty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `rounded-md px-1.5 py-0.5 text-[10px] font-medium uppercase ${q.difficulty === "hard" ? "bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400" : q.difficulty === "medium" ? "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400" : "bg-green-50 text-green-600 dark:bg-green-950/30 dark:text-green-400"}`,
                                        children: q.difficulty
                                    }, void 0, false, {
                                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                                        lineNumber: 600,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-md bg-[var(--muted)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--muted-foreground)]",
                                        children: q.question_type
                                    }, void 0, false, {
                                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                                        lineNumber: 612,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/quiz/QuizViewer.tsx",
                                lineNumber: 595,
                                columnNumber: 11
                            }, this),
                            ans.submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleToggleBookmark,
                                        disabled: !currentEntryId,
                                        title: currentBookmarked ? t("Remove Bookmark") : t("Bookmark"),
                                        className: `rounded-lg p-1.5 transition-all disabled:opacity-30 ${currentBookmarked ? "scale-110 text-amber-500 dark:text-amber-400" : "text-[var(--muted-foreground)] hover:text-amber-500 dark:hover:text-amber-400"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                            size: 18,
                                            strokeWidth: currentBookmarked ? 2.5 : 1.8,
                                            fill: currentBookmarked ? "currentColor" : "none"
                                        }, void 0, false, {
                                            fileName: "[project]/components/quiz/QuizViewer.tsx",
                                            lineNumber: 629,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                                        lineNumber: 619,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleOpenCategoryDropdown,
                                        disabled: !currentEntryId,
                                        title: t("Add to Category"),
                                        className: "rounded-lg p-1.5 text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)] disabled:opacity-30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderPlus$3e$__["FolderPlus"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/quiz/QuizViewer.tsx",
                                            lineNumber: 637,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                                        lineNumber: 631,
                                        columnNumber: 15
                                    }, this),
                                    showCategoryDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 top-8 z-20 w-48 rounded-lg border border-[var(--border)] bg-[var(--card)] py-1 shadow-lg",
                                        children: [
                                            categories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-h-[160px] overflow-y-auto",
                                                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        disabled: categoryBusy,
                                                        onClick: ()=>void handleAddToCategory(cat.id),
                                                        className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-[12px] text-[var(--foreground)] transition-colors hover:bg-[var(--muted)] disabled:opacity-40",
                                                        children: cat.name
                                                    }, cat.id, false, {
                                                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                                                        lineNumber: 645,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/quiz/QuizViewer.tsx",
                                                lineNumber: 643,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t border-[var(--border)] px-2 py-1.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: newCategoryName,
                                                            onChange: (e)=>setNewCategoryName(e.target.value),
                                                            onKeyDown: (e)=>e.key === "Enter" && void handleCreateAndAdd(),
                                                            placeholder: t("New category..."),
                                                            className: "flex-1 rounded border border-[var(--border)] bg-[var(--background)] px-2 py-1 text-[11px] text-[var(--foreground)] outline-none placeholder:text-[var(--muted-foreground)]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/quiz/QuizViewer.tsx",
                                                            lineNumber: 658,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            disabled: !newCategoryName.trim() || categoryBusy,
                                                            onClick: ()=>void handleCreateAndAdd(),
                                                            className: "rounded p-1 text-[var(--primary)] disabled:opacity-30",
                                                            children: categoryBusy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                size: 12,
                                                                className: "animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/quiz/QuizViewer.tsx",
                                                                lineNumber: 670,
                                                                columnNumber: 41
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/quiz/QuizViewer.tsx",
                                                                lineNumber: 670,
                                                                columnNumber: 90
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/quiz/QuizViewer.tsx",
                                                            lineNumber: 665,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/quiz/QuizViewer.tsx",
                                                    lineNumber: 657,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/quiz/QuizViewer.tsx",
                                                lineNumber: 656,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                                        lineNumber: 641,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/quiz/QuizViewer.tsx",
                                lineNumber: 618,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                        lineNumber: 594,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 text-[14px] leading-relaxed",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            content: q.question,
                            variant: "prose",
                            className: "text-[var(--foreground)]"
                        }, void 0, false, {
                            fileName: "[project]/components/quiz/QuizViewer.tsx",
                            lineNumber: 681,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                        lineNumber: 680,
                        columnNumber: 9
                    }, this),
                    isChoice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: Object.entries(q.options).map(([key, text])=>{
                            const isSelected = ans.selected === key;
                            const correctKey = q.correct_answer.trim().charAt(0).toUpperCase();
                            const isCorrectOption = key.toUpperCase() === correctKey;
                            const showFeedback = ans.submitted;
                            let optionClass = "border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/[0.02]";
                            if (isSelected && !showFeedback) {
                                optionClass = "border-[var(--primary)] bg-[var(--primary)]/[0.06] text-[var(--foreground)] ring-1 ring-[var(--primary)]/20";
                            } else if (showFeedback && isCorrectOption) {
                                optionClass = "border-green-500 bg-green-50 text-green-800 dark:bg-green-950/20 dark:text-green-300 dark:border-green-700";
                            } else if (showFeedback && isSelected && !isCorrectOption) {
                                optionClass = "border-red-400 bg-red-50 text-red-700 dark:bg-red-950/20 dark:text-red-300 dark:border-red-700";
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: ans.submitted,
                                onClick: ()=>updateAnswer({
                                        selected: key
                                    }),
                                className: `flex w-full items-start gap-2.5 rounded-lg border px-3 py-2 text-left text-[13px] transition-all ${optionClass}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold ${isSelected && !showFeedback ? "border-[var(--primary)] bg-[var(--primary)] text-white" : showFeedback && isCorrectOption ? "border-green-500 bg-green-500 text-white" : showFeedback && isSelected && !isCorrectOption ? "border-red-400 bg-red-400 text-white" : "border-[var(--border)] text-[var(--muted-foreground)]"}`,
                                        children: showFeedback && isCorrectOption ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            size: 11
                                        }, void 0, false, {
                                            fileName: "[project]/components/quiz/QuizViewer.tsx",
                                            lineNumber: 728,
                                            columnNumber: 56
                                        }, this) : key
                                    }, void 0, false, {
                                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                                        lineNumber: 717,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "leading-relaxed",
                                        children: text
                                    }, void 0, false, {
                                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                                        lineNumber: 730,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, key, true, {
                                fileName: "[project]/components/quiz/QuizViewer.tsx",
                                lineNumber: 711,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                        lineNumber: 689,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: ans.typed,
                            onChange: (event)=>updateAnswer({
                                    typed: event.target.value
                                }),
                            disabled: ans.submitted,
                            rows: 3,
                            placeholder: q.question_type === "coding" ? t("Write your code here...") : t("Type your answer..."),
                            className: `w-full resize-none rounded-lg border px-3 py-2 text-[13px] outline-none transition-colors placeholder:text-[var(--muted-foreground)] ${ans.submitted ? "border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)]" : "border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--primary)]/40"} ${q.question_type === "coding" ? "font-mono" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/components/quiz/QuizViewer.tsx",
                            lineNumber: 737,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                        lineNumber: 736,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex items-center gap-2",
                        children: !ans.submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSubmit,
                            disabled: isChoice ? !ans.selected : !ans.typed.trim(),
                            className: "inline-flex items-center gap-1.5 rounded-lg bg-[var(--primary)] px-3 py-1.5 text-[12px] font-medium text-white transition-opacity disabled:opacity-30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                    size: 13
                                }, void 0, false, {
                                    fileName: "[project]/components/quiz/QuizViewer.tsx",
                                    lineNumber: 761,
                                    columnNumber: 15
                                }, this),
                                t("Check Answer")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/quiz/QuizViewer.tsx",
                            lineNumber: 756,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                isChoice && isCorrect !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `rounded-md px-2 py-0.5 text-[11px] font-semibold ${isCorrect ? "bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400"}`,
                                    children: isCorrect ? t("Correct") : t("Incorrect")
                                }, void 0, false, {
                                    fileName: "[project]/components/quiz/QuizViewer.tsx",
                                    lineNumber: 767,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleReset,
                                    className: "inline-flex items-center gap-1 rounded-lg bg-[var(--muted)] px-2.5 py-1.5 text-[12px] font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            size: 11
                                        }, void 0, false, {
                                            fileName: "[project]/components/quiz/QuizViewer.tsx",
                                            lineNumber: 781,
                                            columnNumber: 17
                                        }, this),
                                        t("Retry")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/quiz/QuizViewer.tsx",
                                    lineNumber: 777,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                        lineNumber: 754,
                        columnNumber: 9
                    }, this),
                    ans.submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 space-y-2 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2.5",
                        children: [
                            !isChoice && q.correct_answer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]",
                                        children: t("Reference Answer")
                                    }, void 0, false, {
                                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                                        lineNumber: 792,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[13px] leading-relaxed text-[var(--foreground)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            content: q.question_type === "coding" && !q.correct_answer.trimStart().startsWith("```") ? `\`\`\`python\n${q.correct_answer}\n\`\`\`` : q.correct_answer,
                                            variant: "prose"
                                        }, void 0, false, {
                                            fileName: "[project]/components/quiz/QuizViewer.tsx",
                                            lineNumber: 796,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                                        lineNumber: 795,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/quiz/QuizViewer.tsx",
                                lineNumber: 791,
                                columnNumber: 15
                            }, this),
                            q.explanation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]",
                                        children: t("Explanation")
                                    }, void 0, false, {
                                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                                        lineNumber: 809,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[13px] leading-relaxed text-[var(--muted-foreground)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            content: q.explanation,
                                            variant: "prose"
                                        }, void 0, false, {
                                            fileName: "[project]/components/quiz/QuizViewer.tsx",
                                            lineNumber: 813,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                                        lineNumber: 812,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/quiz/QuizViewer.tsx",
                                lineNumber: 808,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                        lineNumber: 789,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/quiz/QuizViewer.tsx",
                lineNumber: 593,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-t border-[var(--border)] px-3 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIdx((value)=>Math.max(0, value - 1)),
                        disabled: idx === 0,
                        className: "inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[12px] font-medium text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)] disabled:opacity-30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/components/quiz/QuizViewer.tsx",
                                lineNumber: 827,
                                columnNumber: 11
                            }, this),
                            t("Previous")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                        lineNumber: 822,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-3 h-1 flex-1 overflow-hidden rounded-full bg-[var(--muted)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-full bg-[var(--primary)] transition-all duration-300",
                            style: {
                                width: `${navigationProgress}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/quiz/QuizViewer.tsx",
                            lineNumber: 832,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                        lineNumber: 831,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIdx((value)=>Math.min(total - 1, value + 1)),
                        disabled: idx === total - 1,
                        className: "inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[12px] font-medium text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)] disabled:opacity-30",
                        children: [
                            t("Next"),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/components/quiz/QuizViewer.tsx",
                                lineNumber: 844,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/quiz/QuizViewer.tsx",
                        lineNumber: 838,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/quiz/QuizViewer.tsx",
                lineNumber: 821,
                columnNumber: 7
            }, this),
            ans.submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$quiz$2f$QuestionFollowupPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                question: q,
                questionNumber: idx + 1,
                thread: thread,
                onToggle: handleToggleFollowup,
                onInputChange: handleFollowupInputChange,
                onSend: handleSendFollowup
            }, void 0, false, {
                fileName: "[project]/components/quiz/QuizViewer.tsx",
                lineNumber: 849,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/quiz/QuizViewer.tsx",
        lineNumber: 546,
        columnNumber: 5
    }, this);
}
_s(QuizViewer, "VX07Oc5L1hfgSoh5x4/gLEH+yo8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = QuizViewer;
var _c;
__turbopack_context__.k.register(_c, "QuizViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/quiz/QuizViewer.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/quiz/QuizViewer.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Bookmark
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
            key: "1fy3hk"
        }
    ]
];
const Bookmark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("bookmark", __iconNode);
;
 //# sourceMappingURL=bookmark.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bookmark",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronLeft
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
];
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-left", __iconNode);
;
 //# sourceMappingURL=chevron-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronRight
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
];
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-right", __iconNode);
;
 //# sourceMappingURL=chevron-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Eye
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
];
const Eye = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("eye", __iconNode);
;
 //# sourceMappingURL=eye.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Eye",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/folder-plus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>FolderPlus
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 10v6",
            key: "1bos4e"
        }
    ],
    [
        "path",
        {
            d: "M9 13h6",
            key: "1uhe8q"
        }
    ],
    [
        "path",
        {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
            key: "1kt360"
        }
    ]
];
const FolderPlus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("folder-plus", __iconNode);
;
 //# sourceMappingURL=folder-plus.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/folder-plus.js [app-client] (ecmascript) <export default as FolderPlus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FolderPlus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-plus.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/message-square-plus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>MessageSquarePlus
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
            key: "18887p"
        }
    ],
    [
        "path",
        {
            d: "M12 8v6",
            key: "1ib9pf"
        }
    ],
    [
        "path",
        {
            d: "M9 11h6",
            key: "1fldmi"
        }
    ]
];
const MessageSquarePlus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("message-square-plus", __iconNode);
;
 //# sourceMappingURL=message-square-plus.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/message-square-plus.js [app-client] (ecmascript) <export default as MessageSquarePlus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageSquarePlus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square-plus.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/send-horizontal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>SendHorizontal
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",
            key: "117uat"
        }
    ],
    [
        "path",
        {
            d: "M6 12h16",
            key: "s4cdu5"
        }
    ]
];
const SendHorizontal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("send-horizontal", __iconNode);
;
 //# sourceMappingURL=send-horizontal.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/send-horizontal.js [app-client] (ecmascript) <export default as SendHorizonal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SendHorizonal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send-horizontal.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_596ab184._.js.map