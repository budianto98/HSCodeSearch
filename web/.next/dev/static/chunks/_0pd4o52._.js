(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/components/notebook/NotebookRecordPicker.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/notebook/NotebookRecordPicker.tsx [app-client] (ecmascript)"));
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
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_0pd4o52._.js.map