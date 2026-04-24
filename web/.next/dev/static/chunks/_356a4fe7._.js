(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/(workspace)/guide/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Guide page types
__turbopack_context__.s([
    "INITIAL_SESSION_STATE",
    ()=>INITIAL_SESSION_STATE,
    "getTypeColor",
    ()=>getTypeColor
]);
const INITIAL_SESSION_STATE = {
    session_id: null,
    topic: "",
    knowledge_points: [],
    current_index: -1,
    html_pages: {},
    page_statuses: {},
    page_errors: {},
    status: "idle",
    progress: 0,
    summary: ""
};
function getTypeColor(type) {
    switch(type){
        case "solve":
            return "bg-blue-100 text-blue-700 border-blue-200";
        case "question":
            return "bg-purple-100 text-purple-700 border-purple-200";
        case "research":
            return "bg-emerald-100 text-emerald-700 border-emerald-200";
        case "co_writer":
            return "bg-amber-100 text-amber-700 border-amber-200";
        case "chat":
            return "bg-cyan-100 text-cyan-700 border-cyan-200";
        case "guided_learning":
            return "bg-rose-100 text-rose-700 border-rose-200";
        default:
            return "bg-slate-100 text-slate-700 border-slate-200";
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(workspace)/guide/components/NotebookSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotebookSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NotebookSelector({ notebooks, expandedNotebooks, notebookRecordsMap, selectedRecords, loadingNotebooks, loadingRecordsFor, isLoading, onToggleExpanded, onToggleRecord, onSelectAll, onDeselectAll, onClearAll, onCreateSession, actionLabel }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-slate-100 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100",
                        children: t("Select Source (Cross-Notebook)")
                    }, void 0, false, {
                        fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    selectedRecords.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClearAll,
                        className: "text-xs text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400",
                        children: [
                            t("Clear"),
                            " (",
                            selectedRecords.size,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto max-h-[460px] px-2 py-2",
                children: loadingNotebooks ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-5 w-5 animate-spin text-slate-400"
                    }, void 0, false, {
                        fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this) : notebooks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 text-center text-sm text-slate-400 dark:text-slate-500",
                    children: t("No notebooks with records found")
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: notebooks.map((notebook)=>{
                        const isExpanded = expandedNotebooks.has(notebook.id);
                        const records = notebookRecordsMap.get(notebook.id) || [];
                        const isLoadingRecords = loadingRecordsFor.has(notebook.id);
                        const selectedFromThis = records.filter((r)=>selectedRecords.has(r.id)).length;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex cursor-pointer items-center gap-2 px-3 py-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/70",
                                    onClick: ()=>onToggleExpanded(notebook.id),
                                    children: [
                                        isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "w-4 h-4 text-slate-400 dark:text-slate-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                            lineNumber: 102,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "w-4 h-4 text-slate-400 dark:text-slate-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                            lineNumber: 104,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex-1 text-sm font-medium text-slate-700 dark:text-slate-200 truncate",
                                            children: notebook.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                            lineNumber: 106,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-400 dark:text-slate-500",
                                            children: [
                                                selectedFromThis > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-slate-700 dark:text-slate-300",
                                                    children: [
                                                        selectedFromThis,
                                                        "/"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 25
                                                }, this),
                                                notebook.record_count
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                            lineNumber: 109,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                    lineNumber: 97,
                                    columnNumber: 19
                                }, this),
                                isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50/70 pb-3 pl-6 pr-3 dark:bg-slate-950/30",
                                    children: isLoadingRecords ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center py-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-4 w-4 animate-spin text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                            lineNumber: 124,
                                            columnNumber: 27
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                        lineNumber: 123,
                                        columnNumber: 25
                                    }, this) : records.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-2 text-xs text-slate-400 dark:text-slate-500 text-center",
                                        children: t("No records")
                                    }, void 0, false, {
                                        fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                        lineNumber: 127,
                                        columnNumber: 25
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            onSelectAll(notebook.id, notebook.name);
                                                        },
                                                        className: "text-xs text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200",
                                                        children: t("Select All")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            onDeselectAll(notebook.id);
                                                        },
                                                        className: "text-xs text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300",
                                                        children: t("Deselect")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                                lineNumber: 132,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: records.map((record)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            onToggleRecord(record, notebook.id, notebook.name);
                                                        },
                                                        className: `cursor-pointer rounded-lg border p-3 transition-all ${selectedRecords.has(record.id) ? "border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/60" : "border-transparent hover:border-slate-200 hover:bg-white dark:hover:border-slate-700 dark:hover:bg-slate-800/75"}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `w-4 h-4 rounded border flex items-center justify-center shrink-0 ${selectedRecords.has(record.id) ? "border-slate-700 bg-slate-700 text-white dark:border-slate-200 dark:bg-slate-200 dark:text-slate-900" : "border-slate-300 dark:border-slate-500"}`,
                                                                    children: selectedRecords.has(record.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "w-2.5 h-2.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                                                        lineNumber: 179,
                                                                        columnNumber: 39
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 35
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `rounded border px-1.5 py-0.5 text-[10px] font-bold uppercase ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTypeColor"])(record.type)}`,
                                                                            children: record.type
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                                                            lineNumber: 183,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "ml-2 truncate text-xs text-slate-700 dark:text-slate-200",
                                                                            children: record.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                                                            lineNumber: 188,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        record.summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-2 line-clamp-2 text-[11px] leading-5 text-slate-500 dark:text-slate-400",
                                                                            children: record.summary
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                                                            lineNumber: 192,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                                                    lineNumber: 182,
                                                                    columnNumber: 35
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 33
                                                        }, this)
                                                    }, record.id, false, {
                                                        fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 31
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                                lineNumber: 152,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                    lineNumber: 121,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, notebook.id, true, {
                            fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                            lineNumber: 92,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-slate-100 bg-white p-4 dark:border-slate-800 dark:bg-slate-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onCreateSession,
                    disabled: isLoading || selectedRecords.size === 0,
                    className: "flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-2.5 font-medium text-[var(--primary-foreground)] transition disabled:cursor-not-allowed disabled:opacity-50",
                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-4 h-4 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, this),
                            t("Generating...")
                        ]
                    }, void 0, true) : (actionLabel || t("Generate Learning Plan ({n} items)")).replace("{n}", String(selectedRecords.size))
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(workspace)/guide/components/NotebookSelector.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(NotebookSelector, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = NotebookSelector;
var _c;
__turbopack_context__.k.register(_c, "NotebookSelector");
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
"[project]/app/(workspace)/guide/hooks/useNotebookSelection.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNotebookSelection",
    ()=>useNotebookSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/notebook-api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useNotebookSelection() {
    _s();
    const [notebooks, setNotebooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [expandedNotebooks, setExpandedNotebooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [notebookRecordsMap, setNotebookRecordsMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const [selectedRecords, setSelectedRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const [loadingNotebooks, setLoadingNotebooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingRecordsFor, setLoadingRecordsFor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const fetchNotebooks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNotebookSelection.useCallback[fetchNotebooks]": async ()=>{
            try {
                const categories = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listCategories"])();
                const notebooksWithRecords = categories.filter({
                    "useNotebookSelection.useCallback[fetchNotebooks].notebooksWithRecords": (cat)=>(cat.entry_count ?? 0) > 0
                }["useNotebookSelection.useCallback[fetchNotebooks].notebooksWithRecords"]).map({
                    "useNotebookSelection.useCallback[fetchNotebooks].notebooksWithRecords": (cat)=>({
                            id: String(cat.id),
                            name: cat.name,
                            description: "",
                            record_count: cat.entry_count ?? 0,
                            color: ""
                        })
                }["useNotebookSelection.useCallback[fetchNotebooks].notebooksWithRecords"]);
                setNotebooks(notebooksWithRecords);
                setLoadingNotebooks(false);
            } catch (err) {
                console.error("Failed to fetch notebooks:", err);
                setLoadingNotebooks(false);
            }
        }
    }["useNotebookSelection.useCallback[fetchNotebooks]"], []);
    const fetchNotebookRecords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNotebookSelection.useCallback[fetchNotebookRecords]": async (notebookId)=>{
            if (notebookRecordsMap.has(notebookId)) return;
            setLoadingRecordsFor({
                "useNotebookSelection.useCallback[fetchNotebookRecords]": (prev)=>{
                    const newSet = new Set(prev);
                    newSet.add(notebookId);
                    return newSet;
                }
            }["useNotebookSelection.useCallback[fetchNotebookRecords]"]);
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listNotebookEntries"])({
                    category_id: Number(notebookId)
                });
                const records = (data.items || []).map({
                    "useNotebookSelection.useCallback[fetchNotebookRecords].records": (entry)=>({
                            id: String(entry.id),
                            title: entry.question,
                            summary: entry.explanation,
                            user_query: entry.question,
                            output: entry.correct_answer,
                            type: entry.question_type
                        })
                }["useNotebookSelection.useCallback[fetchNotebookRecords].records"]);
                setNotebookRecordsMap({
                    "useNotebookSelection.useCallback[fetchNotebookRecords]": (prev)=>new Map(prev).set(notebookId, records)
                }["useNotebookSelection.useCallback[fetchNotebookRecords]"]);
            } catch (err) {
                console.error("Failed to fetch notebook records:", err);
            } finally{
                setLoadingRecordsFor({
                    "useNotebookSelection.useCallback[fetchNotebookRecords]": (prev)=>{
                        const newSet = new Set(prev);
                        newSet.delete(notebookId);
                        return newSet;
                    }
                }["useNotebookSelection.useCallback[fetchNotebookRecords]"]);
            }
        }
    }["useNotebookSelection.useCallback[fetchNotebookRecords]"], [
        notebookRecordsMap
    ]);
    const toggleNotebookExpanded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNotebookSelection.useCallback[toggleNotebookExpanded]": (notebookId)=>{
            const notebook = notebooks.find({
                "useNotebookSelection.useCallback[toggleNotebookExpanded].notebook": (nb)=>nb.id === notebookId
            }["useNotebookSelection.useCallback[toggleNotebookExpanded].notebook"]);
            if (!notebook) return;
            setExpandedNotebooks({
                "useNotebookSelection.useCallback[toggleNotebookExpanded]": (prev)=>{
                    const newSet = new Set(prev);
                    if (newSet.has(notebookId)) {
                        newSet.delete(notebookId);
                    } else {
                        newSet.add(notebookId);
                        fetchNotebookRecords(notebookId);
                    }
                    return newSet;
                }
            }["useNotebookSelection.useCallback[toggleNotebookExpanded]"]);
        }
    }["useNotebookSelection.useCallback[toggleNotebookExpanded]"], [
        notebooks,
        fetchNotebookRecords
    ]);
    const toggleRecordSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNotebookSelection.useCallback[toggleRecordSelection]": (record, notebookId, notebookName)=>{
            setSelectedRecords({
                "useNotebookSelection.useCallback[toggleRecordSelection]": (prev)=>{
                    const newMap = new Map(prev);
                    if (newMap.has(record.id)) {
                        newMap.delete(record.id);
                    } else {
                        newMap.set(record.id, {
                            ...record,
                            notebookId,
                            notebookName
                        });
                    }
                    return newMap;
                }
            }["useNotebookSelection.useCallback[toggleRecordSelection]"]);
        }
    }["useNotebookSelection.useCallback[toggleRecordSelection]"], []);
    const selectAllFromNotebook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNotebookSelection.useCallback[selectAllFromNotebook]": (notebookId, notebookName)=>{
            const records = notebookRecordsMap.get(notebookId) || [];
            setSelectedRecords({
                "useNotebookSelection.useCallback[selectAllFromNotebook]": (prev)=>{
                    const newMap = new Map(prev);
                    records.forEach({
                        "useNotebookSelection.useCallback[selectAllFromNotebook]": (r)=>newMap.set(r.id, {
                                ...r,
                                notebookId,
                                notebookName
                            })
                    }["useNotebookSelection.useCallback[selectAllFromNotebook]"]);
                    return newMap;
                }
            }["useNotebookSelection.useCallback[selectAllFromNotebook]"]);
        }
    }["useNotebookSelection.useCallback[selectAllFromNotebook]"], [
        notebookRecordsMap
    ]);
    const deselectAllFromNotebook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNotebookSelection.useCallback[deselectAllFromNotebook]": (notebookId)=>{
            const records = notebookRecordsMap.get(notebookId) || [];
            const recordIds = new Set(records.map({
                "useNotebookSelection.useCallback[deselectAllFromNotebook]": (r)=>r.id
            }["useNotebookSelection.useCallback[deselectAllFromNotebook]"]));
            setSelectedRecords({
                "useNotebookSelection.useCallback[deselectAllFromNotebook]": (prev)=>{
                    const newMap = new Map(prev);
                    recordIds.forEach({
                        "useNotebookSelection.useCallback[deselectAllFromNotebook]": (id)=>newMap.delete(id)
                    }["useNotebookSelection.useCallback[deselectAllFromNotebook]"]);
                    return newMap;
                }
            }["useNotebookSelection.useCallback[deselectAllFromNotebook]"]);
        }
    }["useNotebookSelection.useCallback[deselectAllFromNotebook]"], [
        notebookRecordsMap
    ]);
    const clearAllSelections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNotebookSelection.useCallback[clearAllSelections]": ()=>{
            setSelectedRecords(new Map());
        }
    }["useNotebookSelection.useCallback[clearAllSelections]"], []);
    return {
        notebooks,
        expandedNotebooks,
        notebookRecordsMap,
        selectedRecords,
        loadingNotebooks,
        loadingRecordsFor,
        fetchNotebooks,
        toggleNotebookExpanded,
        toggleRecordSelection,
        selectAllFromNotebook,
        deselectAllFromNotebook,
        clearAllSelections
    };
}
_s(useNotebookSelection, "LDe+MuBlvNDv2uoJwOjNJLvTDtA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/notebook/NotebookRecordPicker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotebookRecordPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$NotebookSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/NotebookSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$hooks$2f$useNotebookSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/hooks/useNotebookSelection.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function NotebookRecordPicker({ open, onClose, onApply, actionLabel = "Use Selected Records ({n})" }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { notebooks, expandedNotebooks, notebookRecordsMap, selectedRecords, loadingNotebooks, loadingRecordsFor, fetchNotebooks, toggleNotebookExpanded, toggleRecordSelection, selectAllFromNotebook, deselectAllFromNotebook, clearAllSelections } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$hooks$2f$useNotebookSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotebookSelection"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotebookRecordPicker.useEffect": ()=>{
            if (!open) return;
            void fetchNotebooks();
        }
    }["NotebookRecordPicker.useEffect"], [
        fetchNotebooks,
        open
    ]);
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[85] flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-4xl overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.24)] dark:border-slate-800 dark:bg-slate-900",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold text-slate-900 dark:text-slate-100",
                                    children: t("Select Notebook Records")
                                }, void 0, false, {
                                    fileName: "[project]/components/notebook/NotebookRecordPicker.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-slate-500 dark:text-slate-400",
                                    children: t("Choose records across one or more notebooks to ground the next request.")
                                }, void 0, false, {
                                    fileName: "[project]/components/notebook/NotebookRecordPicker.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/notebook/NotebookRecordPicker.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/notebook/NotebookRecordPicker.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/notebook/NotebookRecordPicker.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/notebook/NotebookRecordPicker.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-50/70 p-5 dark:bg-slate-950/40",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$NotebookSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        notebooks: notebooks,
                        expandedNotebooks: expandedNotebooks,
                        notebookRecordsMap: notebookRecordsMap,
                        selectedRecords: selectedRecords,
                        loadingNotebooks: loadingNotebooks,
                        loadingRecordsFor: loadingRecordsFor,
                        isLoading: false,
                        onToggleExpanded: toggleNotebookExpanded,
                        onToggleRecord: toggleRecordSelection,
                        onSelectAll: selectAllFromNotebook,
                        onDeselectAll: deselectAllFromNotebook,
                        onClearAll: clearAllSelections,
                        onCreateSession: ()=>{
                            onApply(Array.from(selectedRecords.values()));
                            onClose();
                        },
                        actionLabel: actionLabel
                    }, void 0, false, {
                        fileName: "[project]/components/notebook/NotebookRecordPicker.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/notebook/NotebookRecordPicker.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/notebook/NotebookRecordPicker.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/notebook/NotebookRecordPicker.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(NotebookRecordPicker, "ByVLitvMNjLQiI+J3rLH0PDHsJk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$hooks$2f$useNotebookSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotebookSelection"]
    ];
});
_c = NotebookRecordPicker;
var _c;
__turbopack_context__.k.register(_c, "NotebookRecordPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/notebook/SaveToNotebookModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SaveToNotebookModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function parseSseEvents(buffer) {
    const events = [];
    const chunks = buffer.split("\n\n");
    for(let i = 0; i < chunks.length - 1; i += 1){
        const lines = chunks[i].split("\n").map((line)=>line.trim()).filter(Boolean);
        const dataLine = lines.find((line)=>line.startsWith("data:"));
        if (!dataLine) continue;
        try {
            const payload = JSON.parse(dataLine.slice(5).trim());
            events.push({
                payload
            });
        } catch  {
            continue;
        }
    }
    return events;
}
function SaveToNotebookModal({ open, payload, onClose, onSaved }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [notebooks, setNotebooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [summaryPreview, setSummaryPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const abortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SaveToNotebookModal.useEffect": ()=>{
            if (!open) {
                abortRef.current?.abort();
                return;
            }
            setTitle(payload?.title || "");
            setSummaryPreview("");
            setError("");
            setSelectedIds([]);
            void ({
                "SaveToNotebookModal.useEffect": async ()=>{
                    try {
                        const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/notebook/list"), {
                            cache: "no-store"
                        });
                        if (!res.ok) throw new Error("Failed to fetch notebooks");
                        const data = await res.json();
                        setNotebooks(data.notebooks.map({
                            "SaveToNotebookModal.useEffect": (nb)=>({
                                    id: nb.id,
                                    name: nb.name,
                                    color: nb.color,
                                    description: nb.description
                                })
                        }["SaveToNotebookModal.useEffect"]));
                    } catch  {
                        setNotebooks([]);
                    }
                }
            })["SaveToNotebookModal.useEffect"]();
        }
    }["SaveToNotebookModal.useEffect"], [
        open,
        payload
    ]);
    const canSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SaveToNotebookModal.useMemo[canSave]": ()=>Boolean(payload && title.trim() && selectedIds.length > 0 && payload.output.trim())
    }["SaveToNotebookModal.useMemo[canSave]"], [
        payload,
        selectedIds.length,
        title
    ]);
    const toggleNotebook = (id)=>{
        setSelectedIds((prev)=>prev.includes(id) ? prev.filter((item)=>item !== id) : [
                ...prev,
                id
            ]);
    };
    const handleSave = async ()=>{
        if (!payload || !canSave) return;
        abortRef.current?.abort();
        const controller = new AbortController();
        abortRef.current = controller;
        setIsLoading(true);
        setError("");
        setSummaryPreview("");
        try {
            const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/notebook/add_record_with_summary"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    notebook_ids: selectedIds,
                    record_type: payload.recordType,
                    title: title.trim(),
                    user_query: payload.userQuery,
                    output: payload.output,
                    metadata: payload.metadata || {},
                    kb_name: payload.kbName || null
                }),
                signal: controller.signal
            });
            if (!response.ok || !response.body) {
                throw new Error("Failed to save to notebook.");
            }
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let buffer = "";
            let finalSummary = "";
            while(true){
                const { done, value } = await reader.read();
                if (done) break;
                buffer += decoder.decode(value, {
                    stream: true
                });
                const lastSeparator = buffer.lastIndexOf("\n\n");
                if (lastSeparator === -1) continue;
                const consumable = buffer.slice(0, lastSeparator + 2);
                buffer = buffer.slice(lastSeparator + 2);
                for (const event of parseSseEvents(consumable)){
                    const type = String(event.payload.type || "");
                    if (type === "summary_chunk") {
                        const chunk = String(event.payload.content || "");
                        finalSummary += chunk;
                        setSummaryPreview(finalSummary);
                    } else if (type === "error") {
                        throw new Error(String(event.payload.detail || "Failed to save to notebook."));
                    } else if (type === "result") {
                        const summary = String(event.payload.summary || finalSummary);
                        setSummaryPreview(summary);
                        onSaved?.({
                            summary
                        });
                        setIsLoading(false);
                        onClose();
                        return;
                    }
                }
            }
            throw new Error("Notebook save stream ended unexpectedly.");
        } catch (err) {
            if (controller.signal.aborted) return;
            setError(err instanceof Error ? err.message : "Failed to save to notebook.");
            setIsLoading(false);
        }
    };
    if (!open || !payload) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-2xl rounded-[22px] border border-slate-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.24)] dark:border-slate-800 dark:bg-slate-900",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-500",
                                    children: t("Notebook Output")
                                }, void 0, false, {
                                    fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold text-slate-900 dark:text-slate-100",
                                    children: t("Save to Notebook")
                                }, void 0, false, {
                                    fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-500 dark:text-slate-400",
                                    children: t("Select one or more notebooks. A summary will be generated automatically.")
                                }, void 0, false, {
                                    fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5 bg-slate-50/70 px-5 py-5 dark:bg-slate-950/35",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200",
                                    children: t("Title")
                                }, void 0, false, {
                                    fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: title,
                                    onChange: (e)=>setTitle(e.target.value),
                                    className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-indigo-900/40"
                                }, void 0, false, {
                                    fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-slate-700 dark:text-slate-200",
                                            children: t("Notebooks")
                                        }, void 0, false, {
                                            fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this),
                                        selectedIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-500 dark:text-slate-400",
                                            children: [
                                                selectedIds.length,
                                                " selected"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                            lineNumber: 228,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-h-64 space-y-2 overflow-y-auto rounded-xl border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-900",
                                    children: notebooks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-3 py-6 text-center text-sm text-slate-400 dark:text-slate-500",
                                        children: t("No notebooks found.")
                                    }, void 0, false, {
                                        fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                        lineNumber: 235,
                                        columnNumber: 17
                                    }, this) : notebooks.map((notebook)=>{
                                        const selected = selectedIds.includes(notebook.id);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>toggleNotebook(notebook.id),
                                            className: `flex w-full items-start gap-3 rounded-lg border px-3 py-2.5 text-left transition ${selected ? "border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-950/25" : "border-transparent hover:border-slate-200 hover:bg-slate-50 dark:hover:border-slate-700 dark:hover:bg-slate-800/70"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 h-3 w-3 rounded-full",
                                                    style: {
                                                        backgroundColor: notebook.color || "#6366f1"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-medium text-slate-800 dark:text-slate-100",
                                                            children: notebook.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 25
                                                        }, this),
                                                        notebook.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-xs text-slate-500 dark:text-slate-400",
                                                            children: notebook.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, notebook.id, true, {
                                            fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                            lineNumber: 242,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 text-sm font-medium text-slate-700 dark:text-slate-200",
                                    children: t("Summary preview")
                                }, void 0, false, {
                                    fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-h-24 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300",
                                    children: summaryPreview || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400 dark:text-slate-500",
                                        children: t("The generated summary will appear here during saving.")
                                    }, void 0, false, {
                                        fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                        lineNumber: 278,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-end gap-3 border-t border-slate-200 px-5 py-4 dark:border-slate-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "rounded-xl px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
                            children: t("Cancel")
                        }, void 0, false, {
                            fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSave,
                            disabled: !canSave || isLoading,
                            className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-400 to-fuchsia-400 px-4 py-2 text-sm font-medium text-white transition hover:from-indigo-500 hover:to-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-60",
                            children: [
                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-4 w-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                                    lineNumber: 304,
                                    columnNumber: 27
                                }, this),
                                t("Save")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
                    lineNumber: 292,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
            lineNumber: 189,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/notebook/SaveToNotebookModal.tsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
_s(SaveToNotebookModal, "Kg1eY6R4XzsrGqvvX7DYuEbYJ6w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = SaveToNotebookModal;
var _c;
__turbopack_context__.k.register(_c, "SaveToNotebookModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(workspace)/guide/components/ProgressPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgressPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ProgressPanel({ sessionState, isLoading, canStart, readyCount, allPagesReady, onStartLearning, onNavigate, onRetryPage, onCompleteLearning, onResetSession }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const totalCount = sessionState.knowledge_points.length;
    const renderStatusIcon = (knowledgeIndex)=>{
        const status = sessionState.page_statuses[knowledgeIndex];
        if (status === "ready") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                className: "w-4 h-4 text-emerald-500"
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                lineNumber: 48,
                columnNumber: 14
            }, this);
        }
        if (status === "generating") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-4 h-4 text-indigo-500 animate-spin"
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                lineNumber: 51,
                columnNumber: 14
            }, this);
        }
        if (status === "failed") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                className: "w-4 h-4 text-rose-500"
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                lineNumber: 54,
                columnNumber: 14
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
            className: "w-4 h-4 text-slate-400"
        }, void 0, false, {
            fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
            lineNumber: 56,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-2 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider",
                        children: t("Learning Progress")
                    }, void 0, false, {
                        fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-slate-400 dark:text-slate-500",
                        children: [
                            readyCount,
                            "/",
                            totalCount,
                            " ",
                            t("pages ready")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500",
                    style: {
                        width: `${sessionState.progress}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            totalCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-slate-400 dark:text-slate-500 mb-4",
                children: t("Open any page once it is ready. Early stages are prioritized.")
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 mb-4",
                children: sessionState.knowledge_points.map((knowledge, index)=>{
                    const status = sessionState.page_statuses[index] || "pending";
                    const isCurrent = sessionState.current_index === index;
                    const isReady = status === "ready";
                    const isFailed = status === "failed";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `rounded-xl border px-3 py-3 transition ${isCurrent ? "border-indigo-300 bg-indigo-50 dark:border-indigo-600 dark:bg-indigo-950/30" : "border-slate-200 bg-slate-50/70 dark:border-slate-700 dark:bg-slate-900/50"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onNavigate(index),
                                    className: "flex-1 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-sm font-medium text-slate-800 dark:text-slate-100",
                                            children: [
                                                renderStatusIcon(index),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        index + 1,
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "line-clamp-2",
                                                    children: knowledge.knowledge_title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs text-slate-500 dark:text-slate-400",
                                            children: status === "ready" ? t("Ready to open") : status === "generating" ? t("Generating interactive page...") : status === "failed" ? t("Generation failed") : t("Waiting in queue")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                                            lineNumber: 107,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                                    lineNumber: 98,
                                    columnNumber: 17
                                }, this),
                                isFailed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onRetryPage(index),
                                    className: "inline-flex items-center gap-1 rounded-lg border border-rose-200 px-2 py-1 text-xs text-rose-600 hover:bg-rose-50 dark:border-rose-800 dark:text-rose-300 dark:hover:bg-rose-950/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                                            lineNumber: 123,
                                            columnNumber: 21
                                        }, this),
                                        t("Retry")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                                    lineNumber: 119,
                                    columnNumber: 19
                                }, this),
                                isReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onNavigate(index),
                                    className: "inline-flex items-center gap-1 rounded-lg border border-emerald-200 px-2 py-1 text-xs text-emerald-600 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-950/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                                            lineNumber: 132,
                                            columnNumber: 21
                                        }, this),
                                        t("Open")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                                    lineNumber: 128,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                            lineNumber: 97,
                            columnNumber: 15
                        }, this)
                    }, `${knowledge.knowledge_title}-${index}`, false, {
                        fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                        lineNumber: 89,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: [
                    canStart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onStartLearning,
                        disabled: isLoading,
                        className: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm font-medium",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-4 h-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                                    lineNumber: 151,
                                    columnNumber: 17
                                }, this),
                                t("Starting...")
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                                    lineNumber: 156,
                                    columnNumber: 17
                                }, this),
                                t("Start Learning")
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    !canStart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onResetSession,
                        className: "flex-1 px-4 py-2 bg-slate-200 text-slate-800 rounded-lg hover:bg-slate-300 transition-colors flex items-center justify-center gap-2 text-sm font-medium dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            t("New Session")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    !canStart && sessionState.status !== "completed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCompleteLearning,
                        disabled: isLoading || !allPagesReady,
                        className: "flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm font-medium",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-4 h-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                                    lineNumber: 181,
                                    columnNumber: 17
                                }, this),
                                t("Generating Summary...")
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                                    lineNumber: 186,
                                    columnNumber: 17
                                }, this),
                                t("Complete Learning")
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(workspace)/guide/components/ProgressPanel.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(ProgressPanel, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = ProgressPanel;
var _c;
__turbopack_context__.k.register(_c, "ProgressPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KnowledgeTabBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function KnowledgeTabBar({ sessionState, isLoading, canStart, readyCount, allPagesReady, isCompleted, onStartLearning, onNavigate, onRetryPage, onCompleteLearning, onResetSession, onShowSummary }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const totalCount = sessionState.knowledge_points.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KnowledgeTabBar.useEffect": ()=>{
            if (activeRef.current) {
                activeRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center"
                });
            }
        }
    }["KnowledgeTabBar.useEffect"], [
        sessionState.current_index
    ]);
    const renderStatusIcon = (index)=>{
        const status = sessionState.page_statuses[index];
        if (status === "ready") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
            className: "w-3.5 h-3.5 text-emerald-500"
        }, void 0, false, {
            fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
            lineNumber: 62,
            columnNumber: 14
        }, this);
        if (status === "generating") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "w-3.5 h-3.5 text-indigo-500 animate-spin"
        }, void 0, false, {
            fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
            lineNumber: 64,
            columnNumber: 14
        }, this);
        if (status === "failed") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
            className: "w-3.5 h-3.5 text-rose-500"
        }, void 0, false, {
            fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
            lineNumber: 66,
            columnNumber: 14
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
            className: "w-3.5 h-3.5 text-slate-400"
        }, void 0, false, {
            fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
            lineNumber: 67,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-slate-800 rounded-t-2xl border border-b-0 border-slate-200 dark:border-slate-700 flex flex-col shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 px-3 pt-2 pb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: scrollRef,
                        className: "flex-1 flex items-center gap-1 overflow-x-auto scrollbar-hide",
                        children: [
                            sessionState.knowledge_points.map((knowledge, index)=>{
                                const isCurrent = sessionState.current_index === index;
                                const status = sessionState.page_statuses[index] || "pending";
                                const isReady = status === "ready";
                                const isFailed = status === "failed";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ref: isCurrent && !isCompleted ? activeRef : null,
                                    onClick: ()=>{
                                        if (isFailed) {
                                            onRetryPage(index);
                                        } else {
                                            onNavigate(index);
                                        }
                                    },
                                    disabled: !isReady && !isFailed,
                                    title: knowledge.knowledge_title,
                                    className: `shrink-0 inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition whitespace-nowrap ${isCurrent && !isCompleted ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200" : isReady ? "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600" : "bg-slate-50 text-slate-400 dark:bg-slate-800 dark:text-slate-500 cursor-default"}`,
                                    children: [
                                        renderStatusIcon(index),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, `tab-${index}`, true, {
                                    fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this);
                            }),
                            sessionState.status === "completed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: isCompleted ? activeRef : null,
                                onClick: onShowSummary,
                                className: `shrink-0 inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition whitespace-nowrap ${isCompleted ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200" : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "w-3.5 h-3.5 text-emerald-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t("Summary")
                                    }, void 0, false, {
                                        fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shrink-0 flex items-center gap-1.5 pl-2 border-l border-slate-200 dark:border-slate-700",
                        children: [
                            canStart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onStartLearning,
                                disabled: isLoading,
                                className: "inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-700 disabled:opacity-50 transition",
                                children: [
                                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-3.5 h-3.5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this),
                                    t("Start")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this),
                            !canStart && sessionState.status !== "completed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onCompleteLearning,
                                disabled: isLoading || !allPagesReady,
                                className: "inline-flex items-center gap-1 rounded-lg bg-purple-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-purple-700 disabled:opacity-50 transition",
                                children: [
                                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-3.5 h-3.5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, this),
                                    t("Complete")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onResetSession,
                                className: "inline-flex items-center gap-1 rounded-lg bg-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1 bg-slate-100 dark:bg-slate-700 mx-3 mb-1 rounded-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500",
                    style: {
                        width: `${totalCount > 0 ? readyCount / totalCount * 100 : 0}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(KnowledgeTabBar, "A64XDJz0tz1fEuN+9arZS3A0N0Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = KnowledgeTabBar;
var _c;
__turbopack_context__.k.register(_c, "KnowledgeTabBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(workspace)/guide/components/SessionSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SessionSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function StatusBadge({ status }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    if (status === "completed") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                t("Completed")
            ]
        }, void 0, true, {
            fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this);
    }
    if (status === "learning") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                t("In Progress")
            ]
        }, void 0, true, {
            fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                className: "w-3 h-3"
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            t("Planned")
        ]
    }, void 0, true, {
        fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(StatusBadge, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = StatusBadge;
function SessionSwitcher({ currentSessionId, currentTopic, currentStatus, sessions, onLoadSession, onNewSession }) {
    _s1();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SessionSwitcher.useEffect": ()=>{
            const handleClickOutside = {
                "SessionSwitcher.useEffect.handleClickOutside": (e)=>{
                    if (containerRef.current && !containerRef.current.contains(e.target)) {
                        setOpen(false);
                    }
                }
            }["SessionSwitcher.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "SessionSwitcher.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["SessionSwitcher.useEffect"];
        }
    }["SessionSwitcher.useEffect"], []);
    const otherSessions = sessions.filter((s)=>s.session_id !== currentSessionId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen(!open),
                className: "w-full flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-left transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-slate-800 dark:text-slate-100 truncate",
                                children: currentTopic || t("Untitled Session")
                            }, void 0, false, {
                                fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                status: currentStatus
                            }, void 0, false, {
                                fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: `w-4 h-4 text-slate-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`
                    }, void 0, false, {
                        fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 right-0 top-full mt-1 z-30 rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 max-h-64 overflow-y-auto",
                children: [
                    otherSessions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-1",
                        children: otherSessions.map((session)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    onLoadSession(session.session_id);
                                    setOpen(false);
                                },
                                className: "w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-slate-700 dark:text-slate-200 truncate",
                                            children: session.topic || t("Untitled")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                                            lineNumber: 110,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                                    status: session.status
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-400 flex items-center gap-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 25
                                                        }, this),
                                                        new Date(session.created_at * 1000).toLocaleDateString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                                            lineNumber: 113,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                                    lineNumber: 109,
                                    columnNumber: 19
                                }, this)
                            }, session.session_id, false, {
                                fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                                lineNumber: 101,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                        lineNumber: 99,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-slate-200 dark:border-slate-700 p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                onNewSession();
                                setOpen(false);
                            },
                            className: "w-full flex items-center justify-center gap-1.5 rounded-lg bg-indigo-50 px-3 py-2 text-xs font-medium text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                t("New Session")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(workspace)/guide/components/SessionSwitcher.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s1(SessionSwitcher, "H0a+LEdJkhgXisqstXODgWxq8TA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c1 = SessionSwitcher;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatusBadge");
__turbopack_context__.k.register(_c1, "SessionSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(workspace)/guide/components/SessionHistoryList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SessionHistoryList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
function StatusBadge({ status }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    if (status === "completed") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                t("Completed")
            ]
        }, void 0, true, {
            fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    if (status === "learning") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                t("In Progress")
            ]
        }, void 0, true, {
            fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                className: "w-3 h-3"
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            t("Planned")
        ]
    }, void 0, true, {
        fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(StatusBadge, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = StatusBadge;
function SessionHistoryList({ sessions, loading, onLoadSession }) {
    _s1();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-8 h-8 animate-spin mb-3"
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm",
                    children: t("Loading history...")
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this);
    }
    if (sessions.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center text-slate-300 dark:text-slate-600 p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                    className: "w-20 h-20 mb-4"
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-base font-medium text-slate-500 dark:text-slate-400 mb-1",
                    children: t("No learning history yet")
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-400 dark:text-slate-500 text-center max-w-sm",
                    children: t("Describe what you want to learn on the left, and your guided learning sessions will appear here.")
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 overflow-y-auto p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3",
                children: t("Learning History")
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 grid-cols-1 sm:grid-cols-2",
                children: sessions.map((session)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onLoadSession(session.session_id),
                        className: "text-left rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:border-indigo-200 transition dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-slate-800 dark:text-slate-100 line-clamp-2 mb-2",
                                children: session.topic || t("Untitled")
                            }, void 0, false, {
                                fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                        status: session.status
                                    }, void 0, false, {
                                        fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            new Date(session.created_at * 1000).toLocaleDateString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full",
                                            style: {
                                                width: `${session.progress}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-slate-400 dark:text-slate-500 shrink-0",
                                        children: [
                                            session.ready_count,
                                            "/",
                                            session.total_points
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        ]
                    }, session.session_id, true, {
                        fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(workspace)/guide/components/SessionHistoryList.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s1(SessionHistoryList, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c1 = SessionHistoryList;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatusBadge");
__turbopack_context__.k.register(_c1, "SessionHistoryList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/app/(workspace)/guide/components/ChatPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/MarkdownRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ChatPanel({ messages, isLearning, currentKnowledgeTitle, currentKnowledgeIndex, onSendMessage }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [inputMessage, setInputMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sendingMessage, setSendingMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const chatContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPanel.useEffect": ()=>{
            if (chatContainerRef.current) {
                chatContainerRef.current.scrollTo({
                    top: chatContainerRef.current.scrollHeight,
                    behavior: "smooth"
                });
            }
        }
    }["ChatPanel.useEffect"], [
        messages
    ]);
    const handleSendMessage = async ()=>{
        if (!inputMessage.trim() || sendingMessage) return;
        setSendingMessage(true);
        const message = inputMessage;
        setInputMessage("");
        try {
            await onSendMessage(message);
        } finally{
            setSendingMessage(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/app/(workspace)/guide/components/ChatPanel.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    t("Learning Assistant")
                ]
            }, void 0, true, {
                fileName: "[project]/app/(workspace)/guide/components/ChatPanel.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            isLearning && currentKnowledgeTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 border-b border-slate-100 dark:border-slate-700 bg-indigo-50/60 text-xs text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-200",
                children: [
                    t("Current page"),
                    ": ",
                    currentKnowledgeIndex !== undefined ? currentKnowledgeIndex + 1 : "",
                    currentKnowledgeIndex !== undefined ? ". " : "",
                    currentKnowledgeTitle
                ]
            }, void 0, true, {
                fileName: "[project]/app/(workspace)/guide/components/ChatPanel.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: chatContainerRef,
                className: "flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/30 dark:bg-slate-800/30",
                children: messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `max-w-[90%] rounded-2xl px-4 py-3 text-sm ${msg.role === "user" ? "bg-indigo-600 text-white rounded-tr-none shadow-md shadow-indigo-500/20" : msg.role === "system" && msg.content.includes("⏳") ? "bg-amber-50 border border-amber-200 text-amber-900 rounded-tl-none" : msg.role === "system" ? "bg-blue-50 border border-blue-200 text-blue-900 rounded-tl-none" : "bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm"}`,
                            children: [
                                typeof msg.knowledge_index === "number" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 text-[11px] font-semibold opacity-70",
                                    children: [
                                        t("Knowledge Point"),
                                        " ",
                                        msg.knowledge_index + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(workspace)/guide/components/ChatPanel.tsx",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, this),
                                msg.role === "system" || msg.role === "assistant" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    content: msg.content,
                                    variant: "compact",
                                    className: "prose-slate text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/app/(workspace)/guide/components/ChatPanel.tsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: msg.content
                                }, void 0, false, {
                                    fileName: "[project]/app/(workspace)/guide/components/ChatPanel.tsx",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(workspace)/guide/components/ChatPanel.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this)
                    }, msg.id, false, {
                        fileName: "[project]/app/(workspace)/guide/components/ChatPanel.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/components/ChatPanel.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            isLearning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: inputMessage,
                            onChange: (e)=>setInputMessage(e.target.value),
                            onKeyDown: (e)=>e.key === "Enter" && !e.shiftKey && handleSendMessage(),
                            placeholder: t("Have any questions? Feel free to ask..."),
                            disabled: sendingMessage,
                            className: "flex-1 pl-4 pr-10 py-2.5 bg-slate-100 dark:bg-slate-700 border-transparent focus:bg-white dark:focus:bg-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                        }, void 0, false, {
                            fileName: "[project]/app/(workspace)/guide/components/ChatPanel.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSendMessage,
                            disabled: !inputMessage.trim() || sendingMessage,
                            className: "p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/20",
                            children: sendingMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-4 h-4 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/app/(workspace)/guide/components/ChatPanel.tsx",
                                lineNumber: 127,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/app/(workspace)/guide/components/ChatPanel.tsx",
                                lineNumber: 129,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(workspace)/guide/components/ChatPanel.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(workspace)/guide/components/ChatPanel.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/components/ChatPanel.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(workspace)/guide/components/ChatPanel.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(ChatPanel, "/TOhY0c5yDBQMW5Be7WNIv3toUE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = ChatPanel;
var _c;
__turbopack_context__.k.register(_c, "ChatPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/persistence.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const prefixedKey = STORAGE_PREFIX + key;
        const raw = localStorage.getItem(prefixedKey);
        if (!raw) {
            return defaultValue;
        }
        const wrapper = JSON.parse(raw);
        // Version check - if version mismatch, return default (can add migration logic here)
        if (wrapper.version !== STORAGE_VERSION) {
            console.warn(`Storage version mismatch for ${key}. Expected ${STORAGE_VERSION}, got ${wrapper.version}. Using default value.`);
            return defaultValue;
        }
        return wrapper.data;
    } catch (error) {
        // Handle JSON parse errors or other issues
        console.warn(`Failed to load ${key} from localStorage:`, error);
        return defaultValue;
    }
}
function saveToStorage(key, value) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const prefixedKey = STORAGE_PREFIX + key;
        const wrapper = {
            version: STORAGE_VERSION,
            data: value,
            timestamp: Date.now()
        };
        localStorage.setItem(prefixedKey, JSON.stringify(wrapper));
    } catch (error) {
        // Handle quota exceeded or other storage errors
        if (error instanceof Error && error.name === "QuotaExceededError") {
            console.error(`localStorage quota exceeded when saving ${key}. Consider clearing old data.`);
        } else {
            console.warn(`Failed to save ${key} to localStorage:`, error);
        }
    }
}
function removeFromStorage(key) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const prefixedKey = STORAGE_PREFIX + key;
        localStorage.removeItem(prefixedKey);
    } catch (error) {
        console.warn(`Failed to remove ${key} from localStorage:`, error);
    }
}
function clearAllStorage() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const keysToRemove = [];
        for(let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i);
            if (key && key.startsWith(STORAGE_PREFIX)) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach((key)=>localStorage.removeItem(key));
        console.info(`Cleared ${keysToRemove.length} DeepTutor storage items`);
    } catch (error) {
        console.warn("Failed to clear localStorage:", error);
    }
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const items = [];
    let totalSize = 0;
    try {
        for(let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i);
            if (key && key.startsWith(STORAGE_PREFIX)) {
                const value = localStorage.getItem(key) || "";
                const size = new Blob([
                    key + value
                ]).size;
                items.push({
                    key: key.replace(STORAGE_PREFIX, ""),
                    size
                });
                totalSize += size;
            }
        }
    } catch (error) {
        console.warn("Failed to get storage stats:", error);
    }
    return {
        totalSize,
        items
    };
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/debounce.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Debounce utility
 * Delays function execution until after wait milliseconds have elapsed since the last call
 */ __turbopack_context__.s([
    "debounce",
    ()=>debounce
]);
function debounce(func, wait) {
    let timeout = null;
    return function executedFunction(...args) {
        const later = ()=>{
            timeout = null;
            func(...args);
        };
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(later, wait);
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(workspace)/guide/hooks/useGuideSession.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGuideSession",
    ()=>useGuideSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/persistence.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$debounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/debounce.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const GUIDE_CHAT_KEY = "guide_chat_messages";
const GUIDE_SESSION_EXCLUDE = [
    "html_pages"
];
function useGuideSession() {
    _s();
    const isHydrated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const pollingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [sessionState, setSessionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_SESSION_STATE"]);
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingMessage, setLoadingMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const hasUnresolvedPages = Object.values(sessionState.page_statuses).some((status)=>status === "pending" || status === "generating");
    const stopPolling = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuideSession.useCallback[stopPolling]": ()=>{
            if (pollingRef.current !== null) {
                window.clearInterval(pollingRef.current);
                pollingRef.current = null;
            }
        }
    }["useGuideSession.useCallback[stopPolling]"], []);
    const clearPersistedGuideState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuideSession.useCallback[clearPersistedGuideState]": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFromStorage"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].GUIDE_SESSION);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFromStorage"])(GUIDE_CHAT_KEY);
        }
    }["useGuideSession.useCallback[clearPersistedGuideState]"], []);
    const resetGuideState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuideSession.useCallback[resetGuideState]": (message)=>{
            stopPolling();
            clearPersistedGuideState();
            setSessionState(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_SESSION_STATE"]);
            setIsLoading(false);
            setLoadingMessage("");
            setChatMessages(message ? [
                {
                    id: `reset-${Date.now()}`,
                    role: "system",
                    content: message,
                    timestamp: Date.now()
                }
            ] : []);
        }
    }["useGuideSession.useCallback[resetGuideState]"], [
        clearPersistedGuideState,
        stopPolling
    ]);
    const isSessionMissingResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuideSession.useCallback[isSessionMissingResponse]": (status, data)=>{
            if (status === 404) return true;
            if (!data || typeof data !== "object") return false;
            const payload = data;
            const error = typeof payload.error === "string" ? payload.error : "";
            const detail = typeof payload.detail === "string" ? payload.detail : "";
            return error === "Session does not exist" || detail === "Session not found" || detail === "Session not found or no HTML content";
        }
    }["useGuideSession.useCallback[isSessionMissingResponse]"], []);
    const saveSessionState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useGuideSession.useMemo[saveSessionState]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$debounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debounce"])({
                "useGuideSession.useMemo[saveSessionState]": (state)=>{
                    const toSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persistState"])(state, GUIDE_SESSION_EXCLUDE);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveToStorage"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].GUIDE_SESSION, toSave);
                }
            }["useGuideSession.useMemo[saveSessionState]"], 500)
    }["useGuideSession.useMemo[saveSessionState]"], []);
    const saveChatMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useGuideSession.useMemo[saveChatMessages]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$debounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debounce"])({
                "useGuideSession.useMemo[saveChatMessages]": (messages)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveToStorage"])(GUIDE_CHAT_KEY, messages);
                }
            }["useGuideSession.useMemo[saveChatMessages]"], 500)
    }["useGuideSession.useMemo[saveChatMessages]"], []);
    const addLoadingMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuideSession.useCallback[addLoadingMessage]": (message)=>{
            const loadingMsg = {
                id: `loading-${Date.now()}`,
                role: "system",
                content: `⏳ ${message}`,
                timestamp: Date.now()
            };
            setChatMessages({
                "useGuideSession.useCallback[addLoadingMessage]": (prev)=>[
                        ...prev,
                        loadingMsg
                    ]
            }["useGuideSession.useCallback[addLoadingMessage]"]);
            return loadingMsg.id;
        }
    }["useGuideSession.useCallback[addLoadingMessage]"], []);
    const removeLoadingMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuideSession.useCallback[removeLoadingMessage]": (id)=>{
            setChatMessages({
                "useGuideSession.useCallback[removeLoadingMessage]": (prev)=>prev.filter({
                        "useGuideSession.useCallback[removeLoadingMessage]": (msg)=>msg.id !== id
                    }["useGuideSession.useCallback[removeLoadingMessage]"])
            }["useGuideSession.useCallback[removeLoadingMessage]"]);
        }
    }["useGuideSession.useCallback[removeLoadingMessage]"], []);
    const addChatMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuideSession.useCallback[addChatMessage]": (role, content, id, knowledge_index)=>{
            setChatMessages({
                "useGuideSession.useCallback[addChatMessage]": (prev)=>[
                        ...prev,
                        {
                            id: id || `${role}-${Date.now()}`,
                            role,
                            content,
                            timestamp: Date.now(),
                            knowledge_index
                        }
                    ]
            }["useGuideSession.useCallback[addChatMessage]"]);
        }
    }["useGuideSession.useCallback[addChatMessage]"], []);
    const mergePageState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuideSession.useCallback[mergePageState]": (payload)=>{
            setSessionState({
                "useGuideSession.useCallback[mergePageState]": (prev)=>{
                    const mergedHtmlPages = {
                        ...prev.html_pages,
                        ...payload.html_pages || {}
                    };
                    const mergedStatuses = {
                        ...prev.page_statuses,
                        ...payload.page_statuses || {}
                    };
                    const mergedErrors = {
                        ...prev.page_errors,
                        ...payload.page_errors || {}
                    };
                    let currentIndex = prev.current_index;
                    // Only accept current_index from server/payload if user hasn't navigated yet.
                    // This prevents polling from overwriting the user's tab selection.
                    if (typeof payload.current_index === "number" && prev.current_index < 0) {
                        currentIndex = payload.current_index;
                    }
                    if (currentIndex < 0) {
                        const firstReadyKey = Object.keys(mergedStatuses).find({
                            "useGuideSession.useCallback[mergePageState].firstReadyKey": (key)=>mergedStatuses[Number(key)] === "ready"
                        }["useGuideSession.useCallback[mergePageState].firstReadyKey"]);
                        if (firstReadyKey !== undefined) {
                            currentIndex = Number(firstReadyKey);
                        }
                    }
                    return {
                        ...prev,
                        html_pages: mergedHtmlPages,
                        page_statuses: mergedStatuses,
                        page_errors: mergedErrors,
                        current_index: currentIndex,
                        progress: payload.progress ?? prev.progress,
                        status: payload.status ?? prev.status
                    };
                }
            }["useGuideSession.useCallback[mergePageState]"]);
        }
    }["useGuideSession.useCallback[mergePageState]"], []);
    const fetchPageStatuses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuideSession.useCallback[fetchPageStatuses]": async ()=>{
            if (!sessionState.session_id) return;
            try {
                const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/guide/session/${sessionState.session_id}/pages`));
                let data = null;
                try {
                    data = await res.json();
                } catch  {
                    data = null;
                }
                if (!res.ok && isSessionMissingResponse(res.status, data)) {
                    resetGuideState("⚠️ Guided learning session expired. Please generate a new learning plan.");
                    return;
                }
                if (!res.ok || !data || typeof data !== "object") {
                    return;
                }
                const payload = data;
                const pageStatuses = payload.page_statuses || {};
                const allStatuses = Object.values(pageStatuses);
                const resolved = allStatuses.length > 0 && allStatuses.every({
                    "useGuideSession.useCallback[fetchPageStatuses]": (status)=>status === "ready" || status === "failed"
                }["useGuideSession.useCallback[fetchPageStatuses]"]);
                mergePageState({
                    page_statuses: pageStatuses,
                    page_errors: payload.page_errors || {},
                    html_pages: payload.html_pages || {},
                    progress: typeof payload.progress === "number" ? payload.progress : 0,
                    current_index: typeof payload.current_index === "number" ? payload.current_index : undefined,
                    status: typeof payload.status === "string" ? payload.status : undefined
                });
                if (resolved) {
                    stopPolling();
                }
            } catch (err) {
                console.error("Failed to fetch page statuses:", err);
            }
        }
    }["useGuideSession.useCallback[fetchPageStatuses]"], [
        isSessionMissingResponse,
        mergePageState,
        resetGuideState,
        sessionState.session_id,
        stopPolling
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGuideSession.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            let cancelled = false;
            const restoreSession = {
                "useGuideSession.useEffect.restoreSession": async ()=>{
                    const persistedSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadFromStorage"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].GUIDE_SESSION, {});
                    const persistedChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadFromStorage"])(GUIDE_CHAT_KEY, []);
                    const persistedSessionId = typeof persistedSession.session_id === "string" ? persistedSession.session_id : null;
                    if (!persistedSessionId) {
                        if (Object.keys(persistedSession).length > 0 || persistedChat.length > 0) {
                            clearPersistedGuideState();
                        }
                        isHydrated.current = true;
                        return;
                    }
                    try {
                        const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/guide/session/${persistedSessionId}`));
                        let data = null;
                        try {
                            data = await res.json();
                        } catch  {
                            data = null;
                        }
                        if (!res.ok && isSessionMissingResponse(res.status, data)) {
                            if (!cancelled) {
                                resetGuideState("⚠️ Previous guided learning session expired. Please generate a new learning plan.");
                            }
                            return;
                        }
                        if (!cancelled) {
                            setSessionState({
                                "useGuideSession.useEffect.restoreSession": (prev)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeWithDefaults"])(persistedSession, prev, GUIDE_SESSION_EXCLUDE)
                            }["useGuideSession.useEffect.restoreSession"]);
                            if (persistedChat.length > 0) {
                                setChatMessages(persistedChat);
                            }
                        }
                    } catch  {
                        if (!cancelled) {
                            setSessionState({
                                "useGuideSession.useEffect.restoreSession": (prev)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeWithDefaults"])(persistedSession, prev, GUIDE_SESSION_EXCLUDE)
                            }["useGuideSession.useEffect.restoreSession"]);
                            if (persistedChat.length > 0) {
                                setChatMessages(persistedChat);
                            }
                        }
                    } finally{
                        isHydrated.current = true;
                    }
                }
            }["useGuideSession.useEffect.restoreSession"];
            void restoreSession();
            return ({
                "useGuideSession.useEffect": ()=>{
                    cancelled = true;
                }
            })["useGuideSession.useEffect"];
        }
    }["useGuideSession.useEffect"], [
        clearPersistedGuideState,
        isSessionMissingResponse,
        resetGuideState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGuideSession.useEffect": ()=>{
            if (isHydrated.current) {
                saveSessionState(sessionState);
            }
        }
    }["useGuideSession.useEffect"], [
        sessionState,
        saveSessionState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGuideSession.useEffect": ()=>{
            if (isHydrated.current) {
                saveChatMessages(chatMessages);
            }
        }
    }["useGuideSession.useEffect"], [
        chatMessages,
        saveChatMessages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGuideSession.useEffect": ()=>{
            if (sessionState.status !== "learning" || !sessionState.session_id || !hasUnresolvedPages) {
                stopPolling();
                return;
            }
            void fetchPageStatuses();
            if (pollingRef.current === null) {
                pollingRef.current = window.setInterval({
                    "useGuideSession.useEffect": ()=>{
                        void fetchPageStatuses();
                    }
                }["useGuideSession.useEffect"], 2000);
            }
            return ({
                "useGuideSession.useEffect": ()=>{
                    stopPolling();
                }
            })["useGuideSession.useEffect"];
        }
    }["useGuideSession.useEffect"], [
        fetchPageStatuses,
        hasUnresolvedPages,
        sessionState.session_id,
        sessionState.status,
        stopPolling
    ]);
    const createSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuideSession.useCallback[createSession]": async (userInput, notebookReferences)=>{
            const trimmedInput = userInput.trim();
            if (!trimmedInput) return;
            stopPolling();
            setIsLoading(true);
            setLoadingMessage("Designing your guided learning plan...");
            const loadingId = addLoadingMessage("Designing your guided learning plan...");
            try {
                const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/guide/create_session"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        user_input: trimmedInput,
                        ...notebookReferences?.length ? {
                            notebook_references: notebookReferences
                        } : {}
                    })
                });
                const data = await res.json();
                removeLoadingMessage(loadingId);
                setIsLoading(false);
                setLoadingMessage("");
                if (data.success) {
                    const initialStatuses = {};
                    (data.knowledge_points || []).forEach({
                        "useGuideSession.useCallback[createSession]": (_kp, idx)=>{
                            initialStatuses[idx] = "pending";
                        }
                    }["useGuideSession.useCallback[createSession]"]);
                    setSessionState({
                        session_id: data.session_id,
                        topic: trimmedInput,
                        knowledge_points: data.knowledge_points || [],
                        current_index: -1,
                        html_pages: {},
                        page_statuses: initialStatuses,
                        page_errors: {},
                        status: "initialized",
                        progress: 0,
                        summary: ""
                    });
                    const planMessage = `📚 Learning plan generated with **${data.total_points}** knowledge points:\n\n${data.knowledge_points.map({
                        "useGuideSession.useCallback[createSession]": (kp, idx)=>`${idx + 1}. ${kp.knowledge_title}`
                    }["useGuideSession.useCallback[createSession]"]).join("\n")}\n\nClick "Start Learning" to generate all interactive pages in parallel.`;
                    setChatMessages([
                        {
                            id: "plan",
                            role: "system",
                            content: planMessage,
                            timestamp: Date.now()
                        }
                    ]);
                } else {
                    addChatMessage("system", `❌ Failed to create session: ${data.error}`, `error-${Date.now()}`);
                }
            } catch (err) {
                removeLoadingMessage(loadingId);
                setIsLoading(false);
                setLoadingMessage("");
                console.error("Failed to create session:", err);
                addChatMessage("system", "❌ Failed to create session, please try again later", `error-${Date.now()}`);
            }
        }
    }["useGuideSession.useCallback[createSession]"], [
        addChatMessage,
        addLoadingMessage,
        removeLoadingMessage,
        stopPolling
    ]);
    const startLearning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuideSession.useCallback[startLearning]": async ()=>{
            if (!sessionState.session_id) return;
            setIsLoading(true);
            setLoadingMessage("Generating interactive learning pages...");
            const loadingId = addLoadingMessage("Generating interactive learning pages...");
            try {
                const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/guide/start"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        session_id: sessionState.session_id
                    })
                });
                const data = await res.json();
                removeLoadingMessage(loadingId);
                if (isSessionMissingResponse(res.status, data)) {
                    resetGuideState("⚠️ Guided learning session expired. Please generate a new learning plan.");
                    return;
                }
                setIsLoading(false);
                setLoadingMessage("");
                if (data.success) {
                    setSessionState({
                        "useGuideSession.useCallback[startLearning]": (prev)=>({
                                ...prev,
                                current_index: typeof data.current_index === "number" ? data.current_index : 0,
                                html_pages: data.html ? {
                                    ...prev.html_pages,
                                    0: data.html
                                } : prev.html_pages,
                                page_statuses: {
                                    ...prev.page_statuses,
                                    ...data.page_statuses || {}
                                },
                                status: "learning",
                                progress: data.progress || 0
                            })
                    }["useGuideSession.useCallback[startLearning]"]);
                    addChatMessage("system", data.message || "Interactive pages are generating in parallel. Open any page once it becomes ready.", `start-${Date.now()}`);
                } else {
                    addChatMessage("system", `❌ Failed to start learning: ${data.error || "Unknown error"}`, `error-${Date.now()}`);
                }
            } catch (err) {
                removeLoadingMessage(loadingId);
                setIsLoading(false);
                setLoadingMessage("");
                console.error("Failed to start learning:", err);
                addChatMessage("system", "❌ Failed to start learning, please try again later", `error-${Date.now()}`);
            }
        }
    }["useGuideSession.useCallback[startLearning]"], [
        addChatMessage,
        addLoadingMessage,
        isSessionMissingResponse,
        removeLoadingMessage,
        resetGuideState,
        sessionState.session_id
    ]);
    const navigateTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuideSession.useCallback[navigateTo]": async (knowledgeIndex)=>{
            if (!sessionState.session_id) return;
            setSessionState({
                "useGuideSession.useCallback[navigateTo]": (prev)=>({
                        ...prev,
                        current_index: knowledgeIndex
                    })
            }["useGuideSession.useCallback[navigateTo]"]);
            if (sessionState.page_statuses[knowledgeIndex] === "ready" && sessionState.html_pages[knowledgeIndex]) {
                return;
            }
            try {
                const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/guide/navigate"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        session_id: sessionState.session_id,
                        knowledge_index: knowledgeIndex
                    })
                });
                const data = await res.json();
                if (isSessionMissingResponse(res.status, data)) {
                    resetGuideState("⚠️ Guided learning session expired. Please generate a new learning plan.");
                    return;
                }
                if (data.success) {
                    mergePageState({
                        current_index: knowledgeIndex,
                        html_pages: data.html ? {
                            [knowledgeIndex]: data.html
                        } : {},
                        page_statuses: data.page_status ? {
                            [knowledgeIndex]: data.page_status
                        } : {},
                        page_errors: data.page_error ? {
                            [knowledgeIndex]: data.page_error
                        } : {},
                        progress: typeof data.progress === "number" ? data.progress : undefined
                    });
                } else {
                    addChatMessage("system", `❌ Failed to open page: ${data.error || "Unknown error"}`, `error-${Date.now()}`);
                }
            } catch (err) {
                console.error("Failed to navigate knowledge point:", err);
            }
        }
    }["useGuideSession.useCallback[navigateTo]"], [
        addChatMessage,
        isSessionMissingResponse,
        mergePageState,
        resetGuideState,
        sessionState.html_pages,
        sessionState.page_statuses,
        sessionState.session_id
    ]);
    const retryPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuideSession.useCallback[retryPage]": async (pageIndex)=>{
            if (!sessionState.session_id) return;
            try {
                const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/guide/retry_page"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        session_id: sessionState.session_id,
                        page_index: pageIndex
                    })
                });
                const data = await res.json();
                if (isSessionMissingResponse(res.status, data)) {
                    resetGuideState("⚠️ Guided learning session expired. Please generate a new learning plan.");
                    return;
                }
                if (data.success) {
                    mergePageState({
                        page_statuses: {
                            [pageIndex]: "pending"
                        },
                        page_errors: {
                            [pageIndex]: ""
                        }
                    });
                    addChatMessage("system", data.message || `Retrying page ${pageIndex + 1}.`, `retry-${Date.now()}`, pageIndex);
                }
            } catch (err) {
                console.error("Failed to retry page:", err);
            }
        }
    }["useGuideSession.useCallback[retryPage]"], [
        addChatMessage,
        isSessionMissingResponse,
        mergePageState,
        resetGuideState,
        sessionState.session_id
    ]);
    const completeLearning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuideSession.useCallback[completeLearning]": async ()=>{
            if (!sessionState.session_id) return;
            setIsLoading(true);
            setLoadingMessage("Generating learning summary...");
            const loadingId = addLoadingMessage("Generating learning summary...");
            try {
                const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/guide/complete"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        session_id: sessionState.session_id
                    })
                });
                const data = await res.json();
                removeLoadingMessage(loadingId);
                setIsLoading(false);
                setLoadingMessage("");
                if (isSessionMissingResponse(res.status, data)) {
                    resetGuideState("⚠️ Guided learning session expired. Please generate a new learning plan.");
                    return;
                }
                if (data.success) {
                    stopPolling();
                    setSessionState({
                        "useGuideSession.useCallback[completeLearning]": (prev)=>({
                                ...prev,
                                status: "completed",
                                summary: data.summary || "",
                                progress: 100
                            })
                    }["useGuideSession.useCallback[completeLearning]"]);
                    addChatMessage("system", data.message || "Guided learning completed.", `complete-${Date.now()}`);
                }
            } catch (err) {
                removeLoadingMessage(loadingId);
                setIsLoading(false);
                setLoadingMessage("");
                console.error("Failed to complete learning:", err);
            }
        }
    }["useGuideSession.useCallback[completeLearning]"], [
        addChatMessage,
        addLoadingMessage,
        isSessionMissingResponse,
        removeLoadingMessage,
        resetGuideState,
        sessionState.session_id,
        stopPolling
    ]);
    const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuideSession.useCallback[sendMessage]": async (message)=>{
            if (!message.trim() || !sessionState.session_id || sessionState.current_index < 0 || sessionState.page_statuses[sessionState.current_index] !== "ready") {
                return;
            }
            const knowledgeIndex = sessionState.current_index;
            addChatMessage("user", message, `user-${Date.now()}`, knowledgeIndex);
            const loadingId = addLoadingMessage("Thinking...");
            try {
                const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/guide/chat"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        session_id: sessionState.session_id,
                        message,
                        knowledge_index: knowledgeIndex
                    })
                });
                const data = await res.json();
                removeLoadingMessage(loadingId);
                if (isSessionMissingResponse(res.status, data)) {
                    resetGuideState("⚠️ Guided learning session expired. Please generate a new learning plan.");
                    return;
                }
                if (data.success) {
                    addChatMessage("assistant", data.answer || "", `assistant-${Date.now()}`, typeof data.knowledge_index === "number" ? data.knowledge_index : knowledgeIndex);
                } else {
                    addChatMessage("assistant", `❌ Error: ${data.error || "Failed to respond"}`, `error-${Date.now()}`, knowledgeIndex);
                }
            } catch (err) {
                removeLoadingMessage(loadingId);
                console.error("Failed to send message:", err);
                addChatMessage("assistant", "❌ Failed to send message, please try again later", `error-${Date.now()}`, knowledgeIndex);
            }
        }
    }["useGuideSession.useCallback[sendMessage]"], [
        addChatMessage,
        addLoadingMessage,
        isSessionMissingResponse,
        removeLoadingMessage,
        resetGuideState,
        sessionState.current_index,
        sessionState.page_statuses,
        sessionState.session_id
    ]);
    const fixHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuideSession.useCallback[fixHtml]": async (bugDescription)=>{
            if (!sessionState.session_id || !bugDescription.trim() || sessionState.current_index < 0) {
                return false;
            }
            const currentIndex = sessionState.current_index;
            const loadingId = addLoadingMessage("Fixing HTML page...");
            try {
                const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/guide/fix_html"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        session_id: sessionState.session_id,
                        bug_description: bugDescription
                    })
                });
                const data = await res.json();
                removeLoadingMessage(loadingId);
                if (isSessionMissingResponse(res.status, data)) {
                    resetGuideState("⚠️ Guided learning session expired. Please generate a new learning plan.");
                    return false;
                }
                if (data.success) {
                    mergePageState({
                        html_pages: {
                            [currentIndex]: data.html || sessionState.html_pages[currentIndex]
                        },
                        page_statuses: {
                            [currentIndex]: "ready"
                        }
                    });
                    addChatMessage("system", "✅ HTML page has been fixed!", `fix-${Date.now()}`, currentIndex);
                    return true;
                }
                addChatMessage("system", `❌ Fix failed: ${data.error || "Unknown error"}`, `error-${Date.now()}`, currentIndex);
                return false;
            } catch (err) {
                removeLoadingMessage(loadingId);
                console.error("Failed to fix HTML:", err);
                addChatMessage("system", "❌ Fix failed, please try again later", `error-${Date.now()}`, currentIndex);
                return false;
            }
        }
    }["useGuideSession.useCallback[fixHtml]"], [
        addChatMessage,
        addLoadingMessage,
        isSessionMissingResponse,
        mergePageState,
        removeLoadingMessage,
        resetGuideState,
        sessionState.current_index,
        sessionState.html_pages,
        sessionState.session_id
    ]);
    const resetSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuideSession.useCallback[resetSession]": async ()=>{
            const sessionId = sessionState.session_id;
            resetGuideState();
            if (!sessionId) return;
            try {
                await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/guide/reset"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        session_id: sessionId
                    })
                });
            } catch (err) {
                console.error("Failed to reset session on backend:", err);
            }
        }
    }["useGuideSession.useCallback[resetSession]"], [
        resetGuideState,
        sessionState.session_id
    ]);
    const loadSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuideSession.useCallback[loadSession]": async (sessionId)=>{
            stopPolling();
            setIsLoading(true);
            setLoadingMessage("Loading session...");
            try {
                const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/guide/session/${sessionId}`));
                if (!res.ok) {
                    setIsLoading(false);
                    setLoadingMessage("");
                    addChatMessage("system", "Failed to load session.", `error-${Date.now()}`);
                    return;
                }
                const data = await res.json();
                const knowledgePoints = data.knowledge_points || [];
                const htmlPages = {};
                const pageStatuses = {};
                const pageErrors = {};
                if (data.html_pages && typeof data.html_pages === "object") {
                    for (const [key, val] of Object.entries(data.html_pages)){
                        htmlPages[Number(key)] = val;
                    }
                }
                if (data.page_statuses && typeof data.page_statuses === "object") {
                    for (const [key, val] of Object.entries(data.page_statuses)){
                        pageStatuses[Number(key)] = val;
                    }
                }
                if (data.page_errors && typeof data.page_errors === "object") {
                    for (const [key, val] of Object.entries(data.page_errors)){
                        pageErrors[Number(key)] = val;
                    }
                }
                const restoredMessages = [];
                if (Array.isArray(data.chat_history)) {
                    for (const msg of data.chat_history){
                        if (msg.role && msg.content) {
                            restoredMessages.push({
                                id: `restored-${msg.timestamp || Date.now()}-${Math.random()}`,
                                role: msg.role,
                                content: msg.content,
                                timestamp: msg.timestamp ? msg.timestamp * 1000 : Date.now(),
                                knowledge_index: typeof msg.knowledge_index === "number" ? msg.knowledge_index : undefined
                            });
                        }
                    }
                }
                setSessionState({
                    session_id: data.session_id || sessionId,
                    topic: data.notebook_name || "",
                    knowledge_points: knowledgePoints,
                    current_index: typeof data.current_index === "number" ? data.current_index : -1,
                    html_pages: htmlPages,
                    page_statuses: pageStatuses,
                    page_errors: pageErrors,
                    status: data.status || "initialized",
                    progress: typeof data.progress === "number" ? data.progress : knowledgePoints.length > 0 ? Math.round(Object.values(pageStatuses).filter({
                        "useGuideSession.useCallback[loadSession]": (s)=>s === "ready"
                    }["useGuideSession.useCallback[loadSession]"]).length / knowledgePoints.length * 100) : 0,
                    summary: data.summary || ""
                });
                setChatMessages(restoredMessages);
                setIsLoading(false);
                setLoadingMessage("");
            } catch (err) {
                console.error("Failed to load session:", err);
                setIsLoading(false);
                setLoadingMessage("");
                addChatMessage("system", "Failed to load session, please try again later.", `error-${Date.now()}`);
            }
        }
    }["useGuideSession.useCallback[loadSession]"], [
        addChatMessage,
        stopPolling
    ]);
    const canStart = sessionState.status === "initialized" && sessionState.knowledge_points.length > 0;
    const isCompleted = sessionState.status === "completed";
    const readyCount = Object.values(sessionState.page_statuses).filter((status)=>status === "ready").length;
    const allPagesReady = sessionState.knowledge_points.length > 0 && readyCount === sessionState.knowledge_points.length;
    const currentPageStatus = sessionState.current_index >= 0 ? sessionState.page_statuses[sessionState.current_index] : undefined;
    const currentPageReady = currentPageStatus === "ready";
    return {
        sessionState,
        chatMessages,
        isLoading,
        loadingMessage,
        canStart,
        isCompleted,
        readyCount,
        allPagesReady,
        currentPageStatus,
        currentPageReady,
        createSession,
        startLearning,
        navigateTo,
        retryPage,
        completeLearning,
        sendMessage,
        fixHtml,
        resetSession,
        loadSession
    };
}
_s(useGuideSession, "IySj48NbK/y7t6DQgdF1OVNtUeE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(workspace)/guide/hooks/useGuideHistory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGuideHistory",
    ()=>useGuideHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useGuideHistory() {
    _s();
    const [sessions, setSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuideHistory.useCallback[fetchHistory]": async ()=>{
            setLoading(true);
            try {
                const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/guide/sessions"));
                if (!res.ok) {
                    setSessions([]);
                    return;
                }
                const data = await res.json();
                setSessions(Array.isArray(data.sessions) ? data.sessions : []);
            } catch  {
                setSessions([]);
            } finally{
                setLoading(false);
            }
        }
    }["useGuideHistory.useCallback[fetchHistory]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGuideHistory.useEffect": ()=>{
            void fetchHistory();
        }
    }["useGuideHistory.useEffect"], [
        fetchHistory
    ]);
    return {
        sessions,
        loading,
        refresh: fetchHistory
    };
}
_s(useGuideHistory, "T0zSlCDRrHKQEyX6zDRY430cy8s=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(workspace)/guide/hooks/useKaTeXInjection.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Hook for injecting KaTeX resources + render script into HTML content.
 *
 * Strategy: inject CDN resources into <head> + a small inline init script
 * that polls for renderMathInElement availability. HTMLViewer also has
 * a parent-window fallback in case the inline script gets corrupted by
 * page content containing "</script>" strings.
 */ __turbopack_context__.s([
    "useKaTeXInjection",
    ()=>useKaTeXInjection
]);
function useKaTeXInjection() {
    const injectKaTeX = (html)=>{
        const htmlLower = html.toLowerCase();
        const hasKaTeX = htmlLower.includes("katex.min.css") || htmlLower.includes("katex.min.js") || htmlLower.includes("katex@") || htmlLower.includes("cdn.jsdelivr.net/npm/katex") || htmlLower.includes("unpkg.com/katex");
        if (hasKaTeX) {
            console.log("[KaTeX] Already included, skipping injection");
            return html;
        }
        // CDN resources (no SRI hash to avoid mismatch)
        const katexResources = [
            '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" crossorigin="anonymous">',
            '<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js" crossorigin="anonymous"><' + "/script>",
            '<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" crossorigin="anonymous"><' + "/script>"
        ].join("\n  ");
        // Inline render script — placed in <head> with DOMContentLoaded listener.
        // Uses data-katex-init attr so sanitizer preserves it (contains "katex").
        // Polls every 100ms up to 5s for auto-render to load via defer.
        // eslint-disable-next-line no-template-curly-in-string
        const katexInit = '<script data-katex-init>' + 'document.addEventListener("DOMContentLoaded",function(){var t=0,i=setInterval(function(){if(typeof renderMathInElement==="function"){clearInterval(i);try{renderMathInElement(document.body,{delimiters:[{left:"$$",right:"$$",display:true},{left:"$",right:"$",display:false},{left:"\\\\(",right:"\\\\)",display:false},{left:"\\\\[",right:"\\\\]",display:true}],throwOnError:false});console.log("[KaTeX] Rendered "+document.querySelectorAll(".katex").length+" formulas")}catch(e){console.error("[KaTeX] Error:",e)}}else if(++t>50){clearInterval(i);console.warn("[KaTeX] Timeout")}},100)});' + "<" + "/script>";
        const headContent = katexResources + "\n  " + katexInit;
        // Inject into <head>
        if (html.includes("</head>")) {
            return html.replace("</head>", headContent + "\n</head>");
        }
        if (html.includes("<head>")) {
            return html.replace(/<head([^>]*)>/i, "<head$1>\n" + headContent);
        }
        if (html.includes("<html")) {
            return html.replace(/(<html[^>]*>)/i, "$1\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" + headContent + "\n</head>");
        }
        // Wrap bare content
        return "<!DOCTYPE html>\n<html lang=\"zh\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" + headContent + "\n</head>\n<body>\n" + html + "\n</body>\n</html>";
    };
    return {
        injectKaTeX
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(workspace)/guide/hooks/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$hooks$2f$useGuideSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/hooks/useGuideSession.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$hooks$2f$useGuideHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/hooks/useGuideHistory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$hooks$2f$useNotebookSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/hooks/useNotebookSelection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$hooks$2f$useKaTeXInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/hooks/useKaTeXInjection.ts [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(workspace)/guide/components/HTMLViewer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HTMLViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-client] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$hooks$2f$useKaTeXInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/hooks/useKaTeXInjection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/**
 * Regex that matches common LaTeX patterns NOT already wrapped in $..$ or $$..$$.
 * Used to detect bare LaTeX commands in text nodes.
 */ const BARE_LATEX_RE = RegExp("(?<![\\\\$])(?:\\\\(?:underbrace|mathbb|frac|text|sqrt|subseteq|supseteq|notsubset|mid|pmod|leq|geq|Rightarrow|Leftarrow|Rightarrow|neq|approx|infty|partial|nabla|forall|exists|emptyset|varnothing|in|notin|alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega|vec|hat|bar|dot|tilde|overline|overbrace|boldsymbol|mathrm|mathit|mathbf|mathcal|mathfrak|mathscr|mathsf|mathtt|quad|qquad|ldots|cdots|vdots|ddots|prime|limits|sum|int|prod|oint|bigcup|bigcap|bigvee|bigwedge|bigoplus|bigotimes|binom|choose)[\\s{])|\\{[^}]*\\\\(?:underbrace|mathbb|frac|text|sqrt)");
function HTMLViewer({ html, currentIndex, loadingMessage, onOpenDebugModal }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const htmlFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastWrittenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const lastIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(currentIndex);
    const { injectKaTeX } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$hooks$2f$useKaTeXInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKaTeXInjection"])();
    const sanitizeHtml = (rawHtml)=>rawHtml.replace(/<script(?![^>]*katex)[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(['"]).*?\1/gi, (match)=>{
            if (/onload\s*=\s*(['"])renderMathInElement/i.test(match)) return match;
            return "";
        }).replace(/\s(href|src)\s*=\s*(['"])javascript:[\s\S]*?\2/gi, "");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HTMLViewer.useEffect": ()=>{
            if (currentIndex !== lastIndexRef.current) {
                lastWrittenRef.current = "";
                lastIndexRef.current = currentIndex;
            }
        }
    }["HTMLViewer.useEffect"], [
        currentIndex
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HTMLViewer.useEffect": ()=>{
            if (!html) return;
            const injected = injectKaTeX(html);
            const htmlWithKaTeX = sanitizeHtml(injected);
            if (lastWrittenRef.current === htmlWithKaTeX) {
                return;
            }
            const timer = setTimeout({
                "HTMLViewer.useEffect.timer": ()=>{
                    if (htmlFrameRef.current) {
                        const iframe = htmlFrameRef.current;
                        // Set srcdoc
                        iframe.srcdoc = htmlWithKaTeX;
                        lastWrittenRef.current = htmlWithKaTeX;
                        /**
         * Fallback rendering strategy:
         * 1. Wait for CDN scripts to load
         * 2. Find text nodes with bare LaTeX (no $ wrapping)
         * 3. Wrap them in $...$ delimiters
         * 4. Call renderMathInElement to render everything
         */ const fallbackDelays = [
                            1500,
                            3000
                        ];
                        const fallbackTimers = fallbackDelays.map({
                            "HTMLViewer.useEffect.timer.fallbackTimers": (delay)=>setTimeout({
                                    "HTMLViewer.useEffect.timer.fallbackTimers": ()=>{
                                        try {
                                            const doc = iframe.contentDocument;
                                            if (!doc || !doc.body) return;
                                            const win = doc.defaultView;
                                            if (typeof win?.renderMathInElement !== "function") return;
                                            let wrappedCount = 0;
                                            // Step 1: Find text nodes with bare LaTeX and fix them
                                            const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT);
                                            const nodesToProcess = [];
                                            let node;
                                            while(node = walker.nextNode()){
                                                // Skip if inside a .katex element (already rendered)
                                                const parent = node.parentElement;
                                                if (parent && parent.closest(".katex")) continue;
                                                const text = node.textContent || "";
                                                // Check for bare LaTeX patterns not already delimited
                                                if (BARE_LATEX_RE.test(text) && !/^\$.*\$$/.test(text.trim())) {
                                                    nodesToProcess.push(node);
                                                }
                                            }
                                            // Process each bare LaTeX text node
                                            for (const textNode of nodesToProcess){
                                                const originalText = textNode.textContent || "";
                                                const trimmed = originalText.trim();
                                                // Skip already-delimited content
                                                if (trimmed.startsWith("$") || trimmed.endsWith("$") || trimmed.startsWith("\\(") || trimmed.startsWith("\\[")) continue;
                                                // Wrap the entire text node content in $...$
                                                // KaTeX handles non-math parts gracefully (renders them as \text{})
                                                const span = doc.createElement("span");
                                                span.textContent = `$${originalText}$`;
                                                textNode.parentNode?.replaceChild(span, textNode);
                                                wrappedCount++;
                                            }
                                            // Step 2: Render all math (including newly wrapped)
                                            win.renderMathInElement(doc.body, {
                                                delimiters: [
                                                    {
                                                        left: "$$",
                                                        right: "$$",
                                                        display: true
                                                    },
                                                    {
                                                        left: "$",
                                                        right: "$",
                                                        display: false
                                                    },
                                                    {
                                                        left: "\\(",
                                                        right: "\\)",
                                                        display: false
                                                    },
                                                    {
                                                        left: "\\[",
                                                        right: "\\]",
                                                        display: true
                                                    }
                                                ],
                                                throwOnError: false
                                            });
                                            if (wrappedCount > 0) {
                                                console.log(`[KaTeX] Auto-wrapped ${wrappedCount} bare LaTeX nodes`);
                                            }
                                        } catch (_e) {
                                        // Silently ignore fallback errors
                                        }
                                    }
                                }["HTMLViewer.useEffect.timer.fallbackTimers"], delay)
                        }["HTMLViewer.useEffect.timer.fallbackTimers"]);
                        // Store cleanup refs
                        iframe.__fallbackTimers = fallbackTimers;
                    }
                }
            }["HTMLViewer.useEffect.timer"], 100);
            return ({
                "HTMLViewer.useEffect": ()=>{
                    clearTimeout(timer);
                    // Clear any pending fallback timers from previous render
                    const prev = htmlFrameRef.current;
                    if (prev?.__fallbackTimers) {
                        prev.__fallbackTimers.forEach(clearTimeout);
                    }
                }
            })["HTMLViewer.useEffect"];
        }
    }["HTMLViewer.useEffect"], [
        html,
        currentIndex,
        injectKaTeX
    ]);
    if (!html) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center bg-white dark:bg-slate-800 rounded-b-2xl border border-t-0 border-slate-200 dark:border-slate-700",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-12 h-12 text-indigo-400 dark:text-indigo-500 animate-spin mb-4"
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/HTMLViewer.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-500 dark:text-slate-400",
                    children: loadingMessage || t("Loading learning content...")
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/HTMLViewer.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(workspace)/guide/components/HTMLViewer.tsx",
            lineNumber: 161,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 bg-white dark:bg-slate-800 rounded-b-2xl shadow-sm border border-t-0 border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onOpenDebugModal,
                className: "absolute top-4 right-4 z-10 p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors shadow-sm",
                title: t("Fix HTML"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"], {
                    className: "w-4 h-4 text-slate-600 dark:text-slate-300"
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/HTMLViewer.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/components/HTMLViewer.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                ref: htmlFrameRef,
                className: "w-full flex-1 border-0",
                title: t("Interactive Learning Content"),
                sandbox: "allow-scripts allow-same-origin"
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/components/HTMLViewer.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(workspace)/guide/components/HTMLViewer.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_s(HTMLViewer, "ENN5pbY+UBxtSI52GS4ofCFlp8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$hooks$2f$useKaTeXInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKaTeXInjection"]
    ];
});
_c = HTMLViewer;
var _c;
__turbopack_context__.k.register(_c, "HTMLViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(workspace)/guide/components/DebugModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DebugModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-client] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function DebugModal({ isOpen, onClose, onFix }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fixing, setFixing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!isOpen) return null;
    const handleFix = async ()=>{
        if (!description.trim() || fixing) return;
        setFixing(true);
        const success = await onFix(description);
        setFixing(false);
        if (success) {
            setDescription("");
            onClose();
        }
    };
    const handleClose = ()=>{
        setDescription("");
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-[500px] animate-in zoom-in-95",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"], {
                                    className: "w-5 h-5 text-amber-600 dark:text-amber-400"
                                }, void 0, false, {
                                    fileName: "[project]/app/(workspace)/guide/components/DebugModal.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                t("Fix HTML Issue")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(workspace)/guide/components/DebugModal.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5 text-slate-500 dark:text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/app/(workspace)/guide/components/DebugModal.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(workspace)/guide/components/DebugModal.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(workspace)/guide/components/DebugModal.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2",
                                children: t("Issue Description")
                            }, void 0, false, {
                                fileName: "[project]/app/(workspace)/guide/components/DebugModal.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: description,
                                onChange: (e)=>setDescription(e.target.value),
                                placeholder: t("Describe the HTML issue, e.g.: button not clickable, style display error, interaction not working..."),
                                rows: 6,
                                className: "w-full px-4 py-2 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none resize-none"
                            }, void 0, false, {
                                fileName: "[project]/app/(workspace)/guide/components/DebugModal.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(workspace)/guide/components/DebugModal.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/DebugModal.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors",
                            children: t("Cancel")
                        }, void 0, false, {
                            fileName: "[project]/app/(workspace)/guide/components/DebugModal.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleFix,
                            disabled: !description.trim() || fixing,
                            className: "px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors disabled:opacity-50 flex items-center gap-2",
                            children: fixing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-4 h-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(workspace)/guide/components/DebugModal.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this),
                                    t("Fixing...")
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(workspace)/guide/components/DebugModal.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this),
                                    t("Fix")
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/app/(workspace)/guide/components/DebugModal.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(workspace)/guide/components/DebugModal.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(workspace)/guide/components/DebugModal.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(workspace)/guide/components/DebugModal.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(DebugModal, "M242FEhuZ6IQPpmXtuk0phlAHmg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = DebugModal;
var _c;
__turbopack_context__.k.register(_c, "DebugModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(workspace)/guide/components/CompletionSummary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompletionSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/MarkdownRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CompletionSummary({ summary }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-slate-100 dark:border-slate-700 bg-gradient-to-r from-emerald-50 to-indigo-50 dark:from-emerald-900/20 dark:to-indigo-900/20 flex items-center justify-between shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "w-5 h-5 text-emerald-600 dark:text-emerald-400"
                        }, void 0, false, {
                            fileName: "[project]/app/(workspace)/guide/components/CompletionSummary.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        t("Learning Summary")
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(workspace)/guide/components/CompletionSummary.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/components/CompletionSummary.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-8 bg-white dark:bg-slate-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    content: summary || "",
                    variant: "prose",
                    className: "prose-slate dark:prose-invert"
                }, void 0, false, {
                    fileName: "[project]/app/(workspace)/guide/components/CompletionSummary.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/components/CompletionSummary.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(workspace)/guide/components/CompletionSummary.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(CompletionSummary, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = CompletionSummary;
var _c;
__turbopack_context__.k.register(_c, "CompletionSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(workspace)/guide/components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$NotebookSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/NotebookSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$ProgressPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/ProgressPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$KnowledgeTabBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$SessionSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/SessionSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$SessionHistoryList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/SessionHistoryList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$ChatPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/ChatPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$HTMLViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/HTMLViewer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$DebugModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/DebugModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$CompletionSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/CompletionSummary.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(workspace)/guide/components/ChatPanel.tsx [app-client] (ecmascript) <export default as ChatPanel>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatPanel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$ChatPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$ChatPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/ChatPanel.tsx [app-client] (ecmascript)");
}),
"[project]/app/(workspace)/guide/components/HTMLViewer.tsx [app-client] (ecmascript) <export default as HTMLViewer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTMLViewer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$HTMLViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$HTMLViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/HTMLViewer.tsx [app-client] (ecmascript)");
}),
"[project]/app/(workspace)/guide/components/DebugModal.tsx [app-client] (ecmascript) <export default as DebugModal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DebugModal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$DebugModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$DebugModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/DebugModal.tsx [app-client] (ecmascript)");
}),
"[project]/app/(workspace)/guide/components/CompletionSummary.tsx [app-client] (ecmascript) <export default as CompletionSummary>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompletionSummary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$CompletionSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$CompletionSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/CompletionSummary.tsx [app-client] (ecmascript)");
}),
"[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx [app-client] (ecmascript) <export default as KnowledgeTabBar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KnowledgeTabBar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$KnowledgeTabBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$KnowledgeTabBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx [app-client] (ecmascript)");
}),
"[project]/app/(workspace)/guide/components/SessionSwitcher.tsx [app-client] (ecmascript) <export default as SessionSwitcher>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SessionSwitcher",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$SessionSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$SessionSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/SessionSwitcher.tsx [app-client] (ecmascript)");
}),
"[project]/app/(workspace)/guide/components/SessionHistoryList.tsx [app-client] (ecmascript) <export default as SessionHistoryList>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SessionHistoryList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$SessionHistoryList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$SessionHistoryList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/SessionHistoryList.tsx [app-client] (ecmascript)");
}),
"[project]/app/(workspace)/guide/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GuidePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$notebook$2f$NotebookRecordPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/notebook/NotebookRecordPicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$notebook$2f$SaveToNotebookModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/notebook/SaveToNotebookModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$ChatPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatPanel$3e$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/ChatPanel.tsx [app-client] (ecmascript) <export default as ChatPanel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$HTMLViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HTMLViewer$3e$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/HTMLViewer.tsx [app-client] (ecmascript) <export default as HTMLViewer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$DebugModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DebugModal$3e$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/DebugModal.tsx [app-client] (ecmascript) <export default as DebugModal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$CompletionSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CompletionSummary$3e$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/CompletionSummary.tsx [app-client] (ecmascript) <export default as CompletionSummary>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$KnowledgeTabBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KnowledgeTabBar$3e$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/KnowledgeTabBar.tsx [app-client] (ecmascript) <export default as KnowledgeTabBar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$SessionSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SessionSwitcher$3e$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/SessionSwitcher.tsx [app-client] (ecmascript) <export default as SessionSwitcher>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$SessionHistoryList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SessionHistoryList$3e$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/components/SessionHistoryList.tsx [app-client] (ecmascript) <export default as SessionHistoryList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$hooks$2f$useGuideSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/hooks/useGuideSession.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$hooks$2f$useGuideHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(workspace)/guide/hooks/useGuideHistory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
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
function GuidePage() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { sessionState, chatMessages, isLoading, loadingMessage, canStart, isCompleted, readyCount, allPagesReady, currentPageReady, createSession, startLearning, navigateTo, retryPage, completeLearning, sendMessage, fixHtml, resetSession, loadSession } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$hooks$2f$useGuideSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuideSession"])();
    const { sessions, loading: historyLoading, refresh: refreshHistory } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$hooks$2f$useGuideHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuideHistory"])();
    const [showDebugModal, setShowDebugModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sidebarCollapsed, setSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sidebarWide, setSidebarWide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [topicInput, setTopicInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showNotebookPicker, setShowNotebookPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedNotebookRecords, setSelectedNotebookRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showSaveModal, setShowSaveModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hiddenSummaryBySession, setHiddenSummaryBySession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const leftWidthPercent = sidebarCollapsed ? 0 : sidebarWide ? 75 : 25;
    const rightWidthPercent = sidebarCollapsed ? 100 : sidebarWide ? 25 : 75;
    const isIdle = sessionState.status === "idle";
    const currentSessionKey = sessionState.session_id || "__guide__";
    const showingSummary = sessionState.status === "completed" && Boolean(sessionState.summary) && !hiddenSummaryBySession[currentSessionKey];
    const notebookReferenceGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GuidePage.useMemo[notebookReferenceGroups]": ()=>{
            const groups = new Map();
            selectedNotebookRecords.forEach({
                "GuidePage.useMemo[notebookReferenceGroups]": (record)=>{
                    const existing = groups.get(record.notebookId);
                    if (existing) {
                        existing.count += 1;
                    } else {
                        groups.set(record.notebookId, {
                            notebookName: record.notebookName,
                            count: 1
                        });
                    }
                }
            }["GuidePage.useMemo[notebookReferenceGroups]"]);
            return Array.from(groups.entries()).map({
                "GuidePage.useMemo[notebookReferenceGroups]": ([notebookId, value])=>({
                        notebookId,
                        ...value
                    })
            }["GuidePage.useMemo[notebookReferenceGroups]"]);
        }
    }["GuidePage.useMemo[notebookReferenceGroups]"], [
        selectedNotebookRecords
    ]);
    const notebookReferencesPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GuidePage.useMemo[notebookReferencesPayload]": ()=>{
            const grouped = new Map();
            selectedNotebookRecords.forEach({
                "GuidePage.useMemo[notebookReferencesPayload]": (record)=>{
                    const current = grouped.get(record.notebookId) || [];
                    current.push(record.id);
                    grouped.set(record.notebookId, current);
                }
            }["GuidePage.useMemo[notebookReferencesPayload]"]);
            return Array.from(grouped.entries()).map({
                "GuidePage.useMemo[notebookReferencesPayload]": ([notebook_id, record_ids])=>({
                        notebook_id,
                        record_ids
                    })
            }["GuidePage.useMemo[notebookReferencesPayload]"]);
        }
    }["GuidePage.useMemo[notebookReferencesPayload]"], [
        selectedNotebookRecords
    ]);
    const guideSavePayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GuidePage.useMemo[guideSavePayload]": ()=>{
            if (sessionState.status === "idle" || !sessionState.session_id) return null;
            return {
                recordType: "guided_learning",
                title: sessionState.topic || "Guided Learning Session",
                userQuery: sessionState.topic || "",
                output: JSON.stringify({
                    topic: sessionState.topic,
                    status: sessionState.status,
                    knowledge_points: sessionState.knowledge_points,
                    current_index: sessionState.current_index,
                    html_pages: sessionState.html_pages,
                    page_statuses: sessionState.page_statuses,
                    summary: sessionState.summary
                }, null, 2),
                metadata: {
                    source: "guided_learning",
                    progress: sessionState.progress,
                    session_id: sessionState.session_id
                }
            };
        }
    }["GuidePage.useMemo[guideSavePayload]"], [
        sessionState
    ]);
    const handleCreateSession = ()=>{
        createSession(topicInput, notebookReferencesPayload);
    };
    const handleResetSession = async ()=>{
        await resetSession();
        refreshHistory();
    };
    const handleLoadSession = async (sessionId)=>{
        await loadSession(sessionId);
    };
    const handleFixHtml = async (description)=>{
        return await fixHtml(description);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GuidePage.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const params = new URLSearchParams(window.location.search);
            const session = params.get("session");
            if (session) {
                void loadSession(session);
            }
        }
    }["GuidePage.useEffect"], [
        loadSession
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen flex gap-0 p-4 animate-fade-in relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-col gap-3 h-full transition-all duration-300 flex-shrink-0 mr-4 ${sidebarCollapsed ? "overflow-hidden" : ""}`,
                style: {
                    width: sidebarCollapsed ? 0 : `${leftWidthPercent}%`,
                    minWidth: sidebarCollapsed ? 0 : `${Math.max(leftWidthPercent * 0.01 * 1200, 300)}px`,
                    maxWidth: sidebarCollapsed ? 0 : `${leftWidthPercent}%`
                },
                children: isIdle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-5 h-5 text-indigo-600 dark:text-indigo-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(workspace)/guide/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this),
                                        t("Describe what you want to learn")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(workspace)/guide/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-slate-500 dark:text-slate-400",
                                    children: t("Write a short learning request, and the system will design a progressive guided learning plan for you.")
                                }, void 0, false, {
                                    fileName: "[project]/app/(workspace)/guide/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(workspace)/guide/page.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: topicInput,
                                    onChange: (e)=>setTopicInput(e.target.value),
                                    placeholder: t("For example: Teach me linear algebra from the basics, with intuition, key formulas, and common mistakes."),
                                    rows: 8,
                                    className: "w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-indigo-900/40"
                                }, void 0, false, {
                                    fileName: "[project]/app/(workspace)/guide/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-700 dark:bg-slate-900/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-medium text-slate-800 dark:text-slate-100",
                                                            children: t("Notebook Context")
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(workspace)/guide/page.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-xs text-slate-500 dark:text-slate-400",
                                                            children: t("Optionally ground the learning plan with saved notebook records.")
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(workspace)/guide/page.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(workspace)/guide/page.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowNotebookPicker(true),
                                                    className: "inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(workspace)/guide/page.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 21
                                                        }, this),
                                                        t("Select Records")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(workspace)/guide/page.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(workspace)/guide/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this),
                                        notebookReferenceGroups.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex flex-wrap gap-2",
                                            children: notebookReferenceGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200",
                                                    children: [
                                                        group.notebookName,
                                                        " (",
                                                        group.count,
                                                        ")"
                                                    ]
                                                }, group.notebookId, true, {
                                                    fileName: "[project]/app/(workspace)/guide/page.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(workspace)/guide/page.tsx",
                                            lineNumber: 217,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(workspace)/guide/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCreateSession,
                                    disabled: isLoading || !topicInput.trim(),
                                    className: "inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60",
                                    children: [
                                        isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(workspace)/guide/page.tsx",
                                            lineNumber: 236,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(workspace)/guide/page.tsx",
                                            lineNumber: 238,
                                            columnNumber: 19
                                        }, this),
                                        t("Generate learning plan")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(workspace)/guide/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(workspace)/guide/page.tsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(workspace)/guide/page.tsx",
                    lineNumber: 174,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowSaveModal(true),
                                className: "inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(workspace)/guide/page.tsx",
                                        lineNumber: 251,
                                        columnNumber: 17
                                    }, this),
                                    t("Add to Notebook")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(workspace)/guide/page.tsx",
                                lineNumber: 247,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(workspace)/guide/page.tsx",
                            lineNumber: 246,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$SessionSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SessionSwitcher$3e$__["SessionSwitcher"], {
                            currentSessionId: sessionState.session_id,
                            currentTopic: sessionState.topic,
                            currentStatus: sessionState.status,
                            sessions: sessions,
                            onLoadSession: handleLoadSession,
                            onNewSession: handleResetSession
                        }, void 0, false, {
                            fileName: "[project]/app/(workspace)/guide/page.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$ChatPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatPanel$3e$__["ChatPanel"], {
                            messages: chatMessages,
                            isLearning: sessionState.status === "learning" && currentPageReady,
                            currentKnowledgeTitle: sessionState.current_index >= 0 ? sessionState.knowledge_points[sessionState.current_index]?.knowledge_title : undefined,
                            currentKnowledgeIndex: sessionState.current_index >= 0 ? sessionState.current_index : undefined,
                            onSendMessage: sendMessage
                        }, void 0, false, {
                            fileName: "[project]/app/(workspace)/guide/page.tsx",
                            lineNumber: 263,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/page.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col h-full overflow-hidden transition-all duration-300 flex-1 relative",
                style: {
                    width: `${rightWidthPercent}%`
                },
                children: [
                    isIdle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 z-20 flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSidebarCollapsed(!sidebarCollapsed),
                                className: "p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all",
                                title: sidebarCollapsed ? t("Expand sidebar") : t("Collapse sidebar"),
                                children: sidebarCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-4 h-4 text-slate-600 dark:text-slate-300"
                                }, void 0, false, {
                                    fileName: "[project]/app/(workspace)/guide/page.tsx",
                                    lineNumber: 299,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "w-4 h-4 text-slate-600 dark:text-slate-300"
                                }, void 0, false, {
                                    fileName: "[project]/app/(workspace)/guide/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(workspace)/guide/page.tsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this),
                            !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSidebarWide(!sidebarWide),
                                className: "p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all",
                                title: sidebarWide ? t("Switch to narrow sidebar (1:3)") : t("Switch to wide sidebar (3:1)"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: `w-4 h-4 text-slate-600 dark:text-slate-300 transition-transform ${sidebarWide ? "rotate-180" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/app/(workspace)/guide/page.tsx",
                                    lineNumber: 314,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(workspace)/guide/page.tsx",
                                lineNumber: 305,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(workspace)/guide/page.tsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this),
                    isIdle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$SessionHistoryList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SessionHistoryList$3e$__["SessionHistoryList"], {
                            sessions: sessions,
                            loading: historyLoading,
                            onLoadSession: handleLoadSession
                        }, void 0, false, {
                            fileName: "[project]/app/(workspace)/guide/page.tsx",
                            lineNumber: 324,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(workspace)/guide/page.tsx",
                        lineNumber: 323,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$KnowledgeTabBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KnowledgeTabBar$3e$__["KnowledgeTabBar"], {
                                sessionState: sessionState,
                                isLoading: isLoading,
                                canStart: canStart,
                                readyCount: readyCount,
                                allPagesReady: allPagesReady,
                                isCompleted: showingSummary,
                                onStartLearning: startLearning,
                                onNavigate: (index)=>{
                                    setHiddenSummaryBySession((prev)=>({
                                            ...prev,
                                            [currentSessionKey]: true
                                        }));
                                    navigateTo(index);
                                },
                                onRetryPage: retryPage,
                                onCompleteLearning: ()=>{
                                    completeLearning();
                                    setHiddenSummaryBySession((prev)=>({
                                            ...prev,
                                            [currentSessionKey]: false
                                        }));
                                },
                                onResetSession: handleResetSession,
                                onShowSummary: ()=>setHiddenSummaryBySession((prev)=>({
                                            ...prev,
                                            [currentSessionKey]: false
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/app/(workspace)/guide/page.tsx",
                                lineNumber: 333,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-h-0 flex flex-col",
                                children: showingSummary && sessionState.summary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$CompletionSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CompletionSummary$3e$__["CompletionSummary"], {
                                    summary: sessionState.summary
                                }, void 0, false, {
                                    fileName: "[project]/app/(workspace)/guide/page.tsx",
                                    lineNumber: 368,
                                    columnNumber: 17
                                }, this) : sessionState.status === "learning" || isCompleted && !showingSummary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$HTMLViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HTMLViewer$3e$__["HTMLViewer"], {
                                    html: sessionState.current_index >= 0 ? sessionState.html_pages[sessionState.current_index] || "" : "",
                                    currentIndex: sessionState.current_index,
                                    loadingMessage: sessionState.current_index >= 0 && sessionState.page_statuses[sessionState.current_index] === "failed" ? t("This page failed to generate. You can retry it from the tab bar.") : loadingMessage || t("Waiting for the selected interactive page..."),
                                    onOpenDebugModal: ()=>setShowDebugModal(true)
                                }, void 0, false, {
                                    fileName: "[project]/app/(workspace)/guide/page.tsx",
                                    lineNumber: 370,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-white dark:bg-slate-800 rounded-b-2xl border border-t-0 border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-slate-300 dark:text-slate-600 p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-12 h-12 text-indigo-400 dark:text-indigo-500 animate-spin mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(workspace)/guide/page.tsx",
                                            lineNumber: 392,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 dark:text-slate-400",
                                            children: loadingMessage || t("Loading learning content...")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(workspace)/guide/page.tsx",
                                            lineNumber: 393,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(workspace)/guide/page.tsx",
                                    lineNumber: 391,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(workspace)/guide/page.tsx",
                                lineNumber: 366,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(workspace)/guide/page.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$components$2f$DebugModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DebugModal$3e$__["DebugModal"], {
                isOpen: showDebugModal,
                onClose: ()=>setShowDebugModal(false),
                onFix: handleFixHtml
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/page.tsx",
                lineNumber: 403,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$notebook$2f$NotebookRecordPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: showNotebookPicker,
                onClose: ()=>setShowNotebookPicker(false),
                onApply: (records)=>setSelectedNotebookRecords(records)
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/page.tsx",
                lineNumber: 408,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$notebook$2f$SaveToNotebookModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: showSaveModal,
                payload: guideSavePayload,
                onClose: ()=>setShowSaveModal(false)
            }, void 0, false, {
                fileName: "[project]/app/(workspace)/guide/page.tsx",
                lineNumber: 413,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(workspace)/guide/page.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_s(GuidePage, "6hVAfo5jQWlQQSE7GDQMzEeqjpw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$hooks$2f$useGuideSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuideSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$workspace$292f$guide$2f$hooks$2f$useGuideHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuideHistory"]
    ];
});
_c = GuidePage;
var _c;
__turbopack_context__.k.register(_c, "GuidePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_356a4fe7._.js.map