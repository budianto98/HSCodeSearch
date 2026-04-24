(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/SessionList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SessionList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function statusColor(status) {
    switch(status){
        case "running":
            return "bg-blue-500";
        case "completed":
            return "bg-emerald-400";
        case "failed":
            return "bg-rose-500";
        case "rejected":
            return "bg-fuchsia-500";
        case "cancelled":
            return "bg-amber-500";
        default:
            return "bg-[var(--muted-foreground)]/25";
    }
}
function StatusIndicator({ status }) {
    if (!status || status === "idle") return null;
    if (status === "running") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative ml-1.5 inline-flex shrink-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "session-pulse absolute inline-flex h-2 w-2 rounded-full bg-blue-400/60"
                }, void 0, false, {
                    fileName: "[project]/components/SessionList.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "relative inline-flex h-2 w-2 rounded-full bg-blue-500"
                }, void 0, false, {
                    fileName: "[project]/components/SessionList.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/SessionList.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this);
    }
    if (status === "completed") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ml-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-emerald-400/50 ring-1 ring-emerald-400/10"
        }, void 0, false, {
            fileName: "[project]/components/SessionList.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this);
    }
    if (status === "failed") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ml-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-rose-500/80 ring-1 ring-rose-500/20"
        }, void 0, false, {
            fileName: "[project]/components/SessionList.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this);
    }
    if (status === "rejected") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ml-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-fuchsia-500/80 ring-1 ring-fuchsia-500/20"
        }, void 0, false, {
            fileName: "[project]/components/SessionList.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this);
    }
    if (status === "cancelled") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ml-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-amber-500/70 ring-1 ring-amber-500/20"
        }, void 0, false, {
            fileName: "[project]/components/SessionList.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this);
    }
    return null;
}
_c = StatusIndicator;
function groupLabel(timestamp) {
    const now = new Date();
    const date = new Date(timestamp * 1000);
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const startOfItemDay = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
    const diffDays = Math.floor((startOfToday - startOfItemDay) / 86400000);
    if (diffDays <= 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return "Last 7 days";
    return "Earlier";
}
function relativeTime(timestamp) {
    const diffSeconds = Math.round(timestamp - Date.now() / 1000);
    const formatter = new Intl.RelativeTimeFormat("en", {
        numeric: "auto"
    });
    const abs = Math.abs(diffSeconds);
    if (abs < 60) return formatter.format(diffSeconds, "second");
    if (abs < 3600) return formatter.format(Math.round(diffSeconds / 60), "minute");
    if (abs < 86400) return formatter.format(Math.round(diffSeconds / 3600), "hour");
    return formatter.format(Math.round(diffSeconds / 86400), "day");
}
function SessionList({ sessions, activeSessionId, loading = false, compact = false, onSelect, onRename, onDelete }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draftTitle, setDraftTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const grouped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SessionList.useMemo[grouped]": ()=>{
            const buckets = new Map();
            for (const session of sessions){
                const label = groupLabel(session.updated_at);
                const current = buckets.get(label) ?? [];
                current.push(session);
                buckets.set(label, current);
            }
            return Array.from(buckets.entries());
        }
    }["SessionList.useMemo[grouped]"], [
        sessions
    ]);
    const startEdit = (session)=>{
        setEditingId(session.session_id);
        setDraftTitle(session.title);
    };
    const commitEdit = async ()=>{
        if (!editingId) return;
        const nextTitle = draftTitle.trim();
        if (!nextTitle) {
            setEditingId(null);
            setDraftTitle("");
            return;
        }
        await onRename(editingId, nextTitle);
        setEditingId(null);
        setDraftTitle("");
    };
    if (loading) {
        if (compact) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-5 space-y-1.5 border-l border-[var(--border)]/30 py-1 pl-3",
                children: [
                    1,
                    2,
                    3
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 w-3/4 animate-pulse rounded bg-[var(--muted)]/40"
                    }, i, false, {
                        fileName: "[project]/components/SessionList.tsx",
                        lineNumber: 151,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/SessionList.tsx",
                lineNumber: 149,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2 px-1.5 py-2",
            children: [
                1,
                2,
                3
            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-10 animate-pulse rounded-md bg-[var(--muted)]/60"
                }, i, false, {
                    fileName: "[project]/components/SessionList.tsx",
                    lineNumber: 159,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/SessionList.tsx",
            lineNumber: 157,
            columnNumber: 7
        }, this);
    }
    if (sessions.length === 0) {
        if (compact) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-3 py-4 text-center text-[11px] text-[var(--muted-foreground)]/70",
            children: t("No conversations yet")
        }, void 0, false, {
            fileName: "[project]/components/SessionList.tsx",
            lineNumber: 168,
            columnNumber: 7
        }, this);
    }
    /* ---- Compact tree-line style (under Chat nav item) ---- */ if (compact) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ml-5 border-l border-[var(--border)]/30 py-1",
            children: grouped.map(([label, items], groupIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        groupIdx > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "my-1 ml-3 mr-2 border-t border-[var(--border)]/20"
                        }, void 0, false, {
                            fileName: "[project]/components/SessionList.tsx",
                            lineNumber: 181,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--muted-foreground)]/40",
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/components/SessionList.tsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this),
                        items.map((session)=>{
                            const active = activeSessionId === session.session_id;
                            const isEditing = editingId === session.session_id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>void onSelect(session.session_id),
                                onKeyDown: (event)=>{
                                    if (event.key === "Enter" || event.key === " ") {
                                        event.preventDefault();
                                        void onSelect(session.session_id);
                                    }
                                },
                                role: "button",
                                tabIndex: 0,
                                className: `group flex items-center gap-2 rounded-r-lg py-1 pl-3 pr-2 transition-colors ${active ? "bg-[var(--background)]/50 text-[var(--foreground)]" : "text-[var(--muted-foreground)] hover:bg-[var(--background)]/40 hover:text-[var(--foreground)]"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block h-1.5 w-1.5 shrink-0 rounded-full ${active ? "bg-[var(--foreground)]/60" : statusColor(session.status)}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/SessionList.tsx",
                                        lineNumber: 207,
                                        columnNumber: 19
                                    }, this),
                                    isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: draftTitle,
                                        autoFocus: true,
                                        onChange: (event)=>setDraftTitle(event.target.value),
                                        onBlur: ()=>void commitEdit(),
                                        onKeyDown: (event)=>{
                                            if (event.key === "Enter") void commitEdit();
                                            if (event.key === "Escape") {
                                                setEditingId(null);
                                                setDraftTitle("");
                                            }
                                        },
                                        onClick: (event)=>event.stopPropagation(),
                                        className: "min-w-0 flex-1 rounded border border-[var(--border)] bg-[var(--background)] px-1.5 py-px text-[12px] text-[var(--foreground)] outline-none focus:ring-1 focus:ring-[var(--primary)]/40"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SessionList.tsx",
                                        lineNumber: 211,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `min-w-0 flex-1 truncate text-[13px] ${active ? "font-medium" : ""}`,
                                        children: session.title || "Untitled chat"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SessionList.tsx",
                                        lineNumber: 227,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex shrink-0 items-center gap-px opacity-0 transition-opacity group-hover:opacity-100",
                                        children: [
                                            isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (event)=>{
                                                    event.stopPropagation();
                                                    void commitEdit();
                                                },
                                                className: "rounded p-0.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
                                                "aria-label": t("Save title"),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 10
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SessionList.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SessionList.tsx",
                                                lineNumber: 233,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (event)=>{
                                                    event.stopPropagation();
                                                    startEdit(session);
                                                },
                                                className: "rounded p-0.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
                                                "aria-label": t("Rename chat"),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                    size: 10
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SessionList.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SessionList.tsx",
                                                lineNumber: 241,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (event)=>{
                                                    event.stopPropagation();
                                                    void onDelete(session.session_id);
                                                },
                                                className: "rounded p-0.5 text-[var(--muted-foreground)] hover:text-[var(--destructive)]",
                                                "aria-label": t("Delete chat"),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 10
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SessionList.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SessionList.tsx",
                                                lineNumber: 249,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SessionList.tsx",
                                        lineNumber: 231,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, session.session_id, true, {
                                fileName: "[project]/components/SessionList.tsx",
                                lineNumber: 190,
                                columnNumber: 17
                            }, this);
                        })
                    ]
                }, label, true, {
                    fileName: "[project]/components/SessionList.tsx",
                    lineNumber: 179,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/SessionList.tsx",
            lineNumber: 177,
            columnNumber: 7
        }, this);
    }
    /* ---- Classic style ---- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: grouped.map(([label, items])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-1 px-2 text-[11px] font-semibold uppercase tracking-widest text-[var(--muted-foreground)]",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/SessionList.tsx",
                        lineNumber: 271,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-px",
                        children: items.map((session)=>{
                            const active = activeSessionId === session.session_id;
                            const isEditing = editingId === session.session_id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>void onSelect(session.session_id),
                                onKeyDown: (event)=>{
                                    if (event.key === "Enter" || event.key === " ") {
                                        event.preventDefault();
                                        void onSelect(session.session_id);
                                    }
                                },
                                role: "button",
                                tabIndex: 0,
                                className: `group relative w-full rounded-lg px-2.5 py-2 text-left transition-all duration-150 ${active ? "bg-[var(--background)]/70 text-[var(--foreground)]" : "text-[var(--muted-foreground)] hover:bg-[var(--background)]/50 hover:text-[var(--foreground)]"}`,
                                children: [
                                    active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute left-0 top-1/2 h-4 w-[3px] -translate-y-1/2 rounded-r-full bg-[var(--primary)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SessionList.tsx",
                                        lineNumber: 297,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: draftTitle,
                                                        autoFocus: true,
                                                        onChange: (event)=>setDraftTitle(event.target.value),
                                                        onBlur: ()=>void commitEdit(),
                                                        onKeyDown: (event)=>{
                                                            if (event.key === "Enter") void commitEdit();
                                                            if (event.key === "Escape") {
                                                                setEditingId(null);
                                                                setDraftTitle("");
                                                            }
                                                        },
                                                        onClick: (event)=>event.stopPropagation(),
                                                        className: "w-full rounded border border-[var(--border)] bg-[var(--background)] px-2 py-0.5 text-[12px] text-[var(--foreground)] outline-none focus:ring-1 focus:ring-[var(--primary)]/40"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SessionList.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `line-clamp-1 min-w-0 flex-1 text-[12px] leading-snug ${active ? "font-medium" : "font-normal"}`,
                                                                children: session.title || "Untitled chat"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/SessionList.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusIndicator, {
                                                                status: session.status
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/SessionList.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/SessionList.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 25
                                                    }, this),
                                                    !isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-0.5 line-clamp-1 text-[11px] leading-tight text-[var(--muted-foreground)]",
                                                        children: session.last_message || relativeTime(session.updated_at)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SessionList.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SessionList.tsx",
                                                lineNumber: 300,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex shrink-0 items-center gap-0.5 pt-px opacity-0 transition-opacity group-hover:opacity-100",
                                                children: [
                                                    isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (event)=>{
                                                            event.stopPropagation();
                                                            void commitEdit();
                                                        },
                                                        className: "rounded p-0.5 text-[var(--muted-foreground)] hover:bg-[var(--background)] hover:text-[var(--foreground)]",
                                                        "aria-label": t("Save title"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SessionList.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SessionList.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (event)=>{
                                                            event.stopPropagation();
                                                            startEdit(session);
                                                        },
                                                        className: "rounded p-0.5 text-[var(--muted-foreground)] hover:bg-[var(--background)] hover:text-[var(--foreground)]",
                                                        "aria-label": t("Rename chat"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                            size: 11
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SessionList.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SessionList.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (event)=>{
                                                            event.stopPropagation();
                                                            void onDelete(session.session_id);
                                                        },
                                                        className: "rounded p-0.5 text-[var(--muted-foreground)] hover:bg-[var(--background)] hover:text-[var(--destructive)]",
                                                        "aria-label": t("Delete chat"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            size: 11
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SessionList.tsx",
                                                            lineNumber: 367,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SessionList.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SessionList.tsx",
                                                lineNumber: 335,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SessionList.tsx",
                                        lineNumber: 299,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, session.session_id, true, {
                                fileName: "[project]/components/SessionList.tsx",
                                lineNumber: 279,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/SessionList.tsx",
                        lineNumber: 274,
                        columnNumber: 11
                    }, this)
                ]
            }, label, true, {
                fileName: "[project]/components/SessionList.tsx",
                lineNumber: 270,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/SessionList.tsx",
        lineNumber: 268,
        columnNumber: 5
    }, this);
}
_s(SessionList, "6eYuxZZUen1GffFA1O7gIgGqGeM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c1 = SessionList;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatusIndicator");
__turbopack_context__.k.register(_c1, "SessionList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// API configuration and utility functions
// Get API base URL from environment variable.
// The launcher injects NEXT_PUBLIC_API_BASE from the canonical project-root `.env`.
__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL,
    "apiUrl",
    ()=>apiUrl,
    "wsUrl",
    ()=>wsUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8001") || (()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        console.error("NEXT_PUBLIC_API_BASE is not set.");
        console.error("Please configure NEXT_PUBLIC_API_BASE in your environment and restart the application.");
        console.error("Run python scripts/start_tour.py to rebuild your local setup if needed.");
    }
    throw new Error("NEXT_PUBLIC_API_BASE is not configured. Please set it in your environment and restart.");
})();
function apiUrl(path) {
    // Remove leading slash if present to avoid double slashes
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    // Remove trailing slash from base URL if present
    const base = API_BASE_URL.endsWith("/") ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
    return `${base}${normalizedPath}`;
}
function wsUrl(path) {
    // Security Hardening: Convert http to ws and https to wss.
    // In production environments (where API_BASE_URL starts with https), this ensures secure websockets.
    const base = API_BASE_URL.replace(/^http:/, "ws:").replace(/^https:/, "wss:");
    // Remove leading slash if present to avoid double slashes
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    // Remove trailing slash from base URL if present
    const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
    return `${normalizedBase}${normalizedPath}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sidebar/TutorBotRecent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TutorBotRecent",
    ()=>TutorBotRecent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function relativeTime(iso) {
    const diff = Date.now() - new Date(iso).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return `${mins}m`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h`;
    const days = Math.floor(hrs / 24);
    return `${days}d`;
}
function TutorBotRecent({ collapsed = false }) {
    _s();
    const [bots, setBots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TutorBotRecent.useEffect": ()=>{
            let cancelled = false;
            ({
                "TutorBotRecent.useEffect": async ()=>{
                    try {
                        const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/tutorbot/recent?limit=3"));
                        if (!res.ok) return;
                        const data = await res.json();
                        if (!cancelled) setBots(data);
                    } catch  {
                    /* ignore */ }
                }
            })["TutorBotRecent.useEffect"]();
            return ({
                "TutorBotRecent.useEffect": ()=>{
                    cancelled = true;
                }
            })["TutorBotRecent.useEffect"];
        }
    }["TutorBotRecent.useEffect"], []);
    if (bots.length === 0) return null;
    if (collapsed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-0.5 pb-0.5 pt-px",
            children: bots.map((bot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: `/agents/${bot.bot_id}/chat`,
                    title: bot.name,
                    className: "relative rounded-md p-1.5 text-[var(--muted-foreground)]/70 transition-colors hover:bg-[var(--background)]/50 hover:text-[var(--foreground)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                            size: 12,
                            strokeWidth: 1.5
                        }, void 0, false, {
                            fileName: "[project]/components/sidebar/TutorBotRecent.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this),
                        bot.running && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400 ring-1 ring-[var(--secondary)]"
                        }, void 0, false, {
                            fileName: "[project]/components/sidebar/TutorBotRecent.tsx",
                            lineNumber: 59,
                            columnNumber: 15
                        }, this)
                    ]
                }, bot.bot_id, true, {
                    fileName: "[project]/components/sidebar/TutorBotRecent.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/sidebar/TutorBotRecent.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ml-5 border-l border-[var(--border)]/30 py-1",
        children: bots.map((bot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/agents/${bot.bot_id}/chat`,
                className: "group flex items-center gap-2 rounded-r-lg py-1 pl-3 pr-2 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--background)]/40 hover:text-[var(--foreground)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative shrink-0",
                        children: bot.running ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block h-1.5 w-1.5 rounded-full bg-emerald-400"
                        }, void 0, false, {
                            fileName: "[project]/components/sidebar/TutorBotRecent.tsx",
                            lineNumber: 77,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block h-1.5 w-1.5 rounded-full bg-[var(--muted-foreground)]/25"
                        }, void 0, false, {
                            fileName: "[project]/components/sidebar/TutorBotRecent.tsx",
                            lineNumber: 79,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar/TutorBotRecent.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "min-w-0 flex-1 truncate text-[13px]",
                        children: bot.name
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar/TutorBotRecent.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "shrink-0 text-[10px] tabular-nums text-[var(--muted-foreground)]/40",
                        children: relativeTime(bot.updated_at)
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar/TutorBotRecent.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, bot.bot_id, true, {
                fileName: "[project]/components/sidebar/TutorBotRecent.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/sidebar/TutorBotRecent.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(TutorBotRecent, "HLWYdwhjlsHzdjlYtqtFyxxPKrE=");
_c = TutorBotRecent;
var _c;
__turbopack_context__.k.register(_c, "TutorBotRecent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sidebar/SidebarShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarShell",
    ()=>SidebarShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftClose$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left-close.js [app-client] (ecmascript) <export default as PanelLeftClose>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left-open.js [app-client] (ecmascript) <export default as PanelLeftOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SessionList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SessionList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2f$TutorBotRecent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sidebar/TutorBotRecent.tsx [app-client] (ecmascript)");
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
const PRIMARY_NAV = [
    {
        href: "/chat",
        label: "Chat",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"]
    },
    {
        href: "/agents",
        label: "TutorBot",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"]
    },
    {
        href: "/co-writer",
        label: "Co-Writer",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"]
    },
    {
        href: "/guide",
        label: "Guided Learning",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
    },
    {
        href: "/knowledge",
        label: "Knowledge",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
    },
    {
        href: "/memory",
        label: "Memory",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"]
    }
];
const SECONDARY_NAV = [
    {
        href: "/settings",
        label: "Settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    }
];
const DEFAULT_SESSION_VIEWPORT_CLASS_NAME = "max-h-[112px]";
function SidebarShell({ sessions = [], activeSessionId = null, loadingSessions = false, showSessions = false, sessionViewportClassName = DEFAULT_SESSION_VIEWPORT_CLASS_NAME, onNewChat, onSelectSession, onRenameSession, onDeleteSession, footerSlot }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleNewChat = ()=>{
        if (onNewChat) {
            onNewChat();
            return;
        }
        router.push("/chat");
    };
    /* ---- Collapsed state ---- */ if (collapsed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "flex w-[56px] h-screen shrink-0 flex-col items-center bg-[var(--secondary)] py-3 transition-all duration-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setCollapsed(false),
                    className: "mb-4 rounded-md p-1.5 text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]",
                    "aria-label": t("Expand sidebar"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftOpen$3e$__["PanelLeftOpen"], {
                        size: 15
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar/SidebarShell.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleNewChat,
                    className: "mb-3 rounded-lg p-2 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--background)]/60 hover:text-[var(--foreground)]",
                    "aria-label": t("New Chat"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        size: 16,
                        strokeWidth: 2
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar/SidebarShell.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex flex-col items-center gap-px pt-1",
                    children: PRIMARY_NAV.map((item)=>{
                        const active = pathname.startsWith(item.href);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: `rounded-lg p-2 transition-colors ${active ? "bg-[var(--background)]/70 text-[var(--foreground)]" : "text-[var(--muted-foreground)] hover:bg-[var(--background)]/50 hover:text-[var(--foreground)]"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                        size: 16,
                                        strokeWidth: active ? 1.9 : 1.5
                                    }, void 0, false, {
                                        fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                        lineNumber: 114,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this),
                                item.href === "/agents" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2f$TutorBotRecent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TutorBotRecent"], {
                                    collapsed: true
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                    lineNumber: 116,
                                    columnNumber: 45
                                }, this)
                            ]
                        }, item.href, true, {
                            fileName: "[project]/components/sidebar/SidebarShell.tsx",
                            lineNumber: 105,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1"
                }, void 0, false, {
                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-px pb-1",
                    children: [
                        SECONDARY_NAV.map((item)=>{
                            const active = pathname.startsWith(item.href);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: `rounded-lg p-2 transition-colors ${active ? "bg-[var(--background)]/70 text-[var(--foreground)]" : "text-[var(--muted-foreground)] hover:bg-[var(--background)]/50 hover:text-[var(--foreground)]"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                    size: 16,
                                    strokeWidth: active ? 1.9 : 1.5
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                    lineNumber: 138,
                                    columnNumber: 17
                                }, this)
                            }, item.href, false, {
                                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this);
                        }),
                        footerSlot
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sidebar/SidebarShell.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this);
    }
    /* ---- Expanded state ---- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "flex w-[220px] h-screen shrink-0 flex-col bg-[var(--secondary)] transition-all duration-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-12 items-center justify-between px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo-ver2.png",
                                alt: "DeepTutor",
                                width: 20,
                                height: 20
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[15px] font-semibold tracking-tight text-[var(--foreground)]",
                                children: "DeepTutor"
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sidebar/SidebarShell.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCollapsed(true),
                        className: "rounded-md p-1 text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]",
                        "aria-label": t("Collapse sidebar"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftClose$3e$__["PanelLeftClose"], {
                            size: 15
                        }, void 0, false, {
                            fileName: "[project]/components/sidebar/SidebarShell.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar/SidebarShell.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "px-2 pt-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-px",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleNewChat,
                            className: "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[13.5px] text-[var(--muted-foreground)] transition-colors hover:bg-[var(--background)]/60 hover:text-[var(--foreground)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 16,
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: t("New Chat")
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sidebar/SidebarShell.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        PRIMARY_NAV.map((item)=>{
                            const active = pathname.startsWith(item.href);
                            const hasSessionsBelow = item.href === "/chat" && showSessions && onSelectSession && onRenameSession && onDeleteSession;
                            const hasBots = item.href === "/agents";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: `flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13.5px] transition-colors ${active ? "bg-[var(--background)]/70 font-medium text-[var(--foreground)]" : "text-[var(--muted-foreground)] hover:bg-[var(--background)]/50 hover:text-[var(--foreground)]"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                size: 16,
                                                strokeWidth: active ? 1.9 : 1.5
                                            }, void 0, false, {
                                                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t(item.label)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                        lineNumber: 186,
                                        columnNumber: 17
                                    }, this),
                                    hasSessionsBelow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${sessionViewportClassName} overflow-y-auto`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SessionList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            sessions: sessions,
                                            activeSessionId: activeSessionId,
                                            loading: loadingSessions,
                                            onSelect: onSelectSession,
                                            onRename: onRenameSession,
                                            onDelete: onDeleteSession,
                                            compact: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                            lineNumber: 199,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                        lineNumber: 198,
                                        columnNumber: 19
                                    }, this),
                                    hasBots && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2f$TutorBotRecent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TutorBotRecent"], {}, void 0, false, {
                                        fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                        lineNumber: 210,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, item.href, true, {
                                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                lineNumber: 185,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1"
            }, void 0, false, {
                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[var(--border)]/40 px-2 py-2",
                children: [
                    SECONDARY_NAV.map((item)=>{
                        const active = pathname.startsWith(item.href);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: `flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13.5px] transition-colors ${active ? "bg-[var(--background)]/70 font-medium text-[var(--foreground)]" : "text-[var(--muted-foreground)] hover:bg-[var(--background)]/50 hover:text-[var(--foreground)]"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                    size: 16,
                                    strokeWidth: active ? 1.9 : 1.5
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                    lineNumber: 234,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: t(item.label)
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.href, true, {
                            fileName: "[project]/components/sidebar/SidebarShell.tsx",
                            lineNumber: 225,
                            columnNumber: 13
                        }, this);
                    }),
                    footerSlot
                ]
            }, void 0, true, {
                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sidebar/SidebarShell.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
_s(SidebarShell, "cqjqgwfQzOSQN0ekReSwpudCiMg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = SidebarShell;
var _c;
__turbopack_context__.k.register(_c, "SidebarShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/client-cache.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invalidateClientCache",
    ()=>invalidateClientCache,
    "withClientCache",
    ()=>withClientCache
]);
const clientCache = new Map();
async function withClientCache(key, loader, options = {}) {
    const { ttlMs = 30_000, force = false } = options;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const now = Date.now();
    const cached = clientCache.get(key);
    if (!force && cached) {
        if (cached.data !== undefined && cached.expiresAt > now) {
            return cached.data;
        }
        if (cached.promise) {
            return cached.promise;
        }
    }
    const promise = loader().then((value)=>{
        clientCache.set(key, {
            data: value,
            expiresAt: Date.now() + ttlMs
        });
        return value;
    }).catch((error)=>{
        clientCache.delete(key);
        throw error;
    });
    clientCache.set(key, {
        promise,
        expiresAt: now + ttlMs
    });
    return promise;
}
function invalidateClientCache(prefix) {
    for (const key of clientCache.keys()){
        if (key.startsWith(prefix)) {
            clientCache.delete(key);
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/session-api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteSession",
    ()=>deleteSession,
    "getSession",
    ()=>getSession,
    "listSessions",
    ()=>listSessions,
    "recordQuizResults",
    ()=>recordQuizResults,
    "updateSessionTitle",
    ()=>updateSessionTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2d$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/client-cache.ts [app-client] (ecmascript)");
;
;
async function expectJson(response) {
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }
    return response.json();
}
async function listSessions(limit = 50, offset = 0, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2d$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withClientCache"])(`sessions:${limit}:${offset}`, async ()=>{
        const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/sessions?limit=${limit}&offset=${offset}`), {
            cache: "no-store"
        });
        const data = await expectJson(response);
        return data.sessions ?? [];
    }, {
        force: options?.force,
        ttlMs: 15_000
    });
}
async function getSession(sessionId) {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/sessions/${sessionId}`), {
        cache: "no-store"
    });
    return expectJson(response);
}
async function updateSessionTitle(sessionId, title) {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/sessions/${sessionId}`), {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title
        })
    });
    const data = await expectJson(response);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2d$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invalidateClientCache"])("sessions:");
    return data.session;
}
async function deleteSession(sessionId) {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/sessions/${sessionId}`), {
        method: "DELETE"
    });
    await expectJson(response);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2d$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invalidateClientCache"])("sessions:");
}
async function recordQuizResults(sessionId, answers) {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/sessions/${sessionId}/quiz-results`), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            answers
        })
    });
    await expectJson(response);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sidebar/UtilitySidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UtilitySidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2f$SidebarShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sidebar/SidebarShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AppShellContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AppShellContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session-api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function UtilitySidebar() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { activeSessionId, setActiveSessionId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AppShellContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppShell"])();
    const [sessions, setSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingSessions, setLoadingSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasLoadedSessionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const refreshSessions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UtilitySidebar.useCallback[refreshSessions]": async ()=>{
            if (!hasLoadedSessionsRef.current) {
                setLoadingSessions(true);
            }
            try {
                setSessions(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listSessions"])(50, 0, {
                    force: true
                }));
                hasLoadedSessionsRef.current = true;
            } catch (error) {
                console.error("Failed to load sessions", error);
            } finally{
                setLoadingSessions(false);
            }
        }
    }["UtilitySidebar.useCallback[refreshSessions]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UtilitySidebar.useEffect": ()=>{
            void refreshSessions();
        }
    }["UtilitySidebar.useEffect"], [
        refreshSessions
    ]);
    const handleNewChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UtilitySidebar.useCallback[handleNewChat]": ()=>{
            setActiveSessionId(null);
            router.push("/chat");
        }
    }["UtilitySidebar.useCallback[handleNewChat]"], [
        router,
        setActiveSessionId
    ]);
    const handleSelectSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UtilitySidebar.useCallback[handleSelectSession]": async (sessionId)=>{
            setActiveSessionId(sessionId);
            router.push(`/chat/${sessionId}`);
        }
    }["UtilitySidebar.useCallback[handleSelectSession]"], [
        router,
        setActiveSessionId
    ]);
    const handleRenameSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UtilitySidebar.useCallback[handleRenameSession]": async (sessionId, title)=>{
            const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSessionTitle"])(sessionId, title);
            setSessions({
                "UtilitySidebar.useCallback[handleRenameSession]": (prev)=>prev.map({
                        "UtilitySidebar.useCallback[handleRenameSession]": (session)=>session.session_id === sessionId ? {
                                ...session,
                                title: updated.title,
                                updated_at: updated.updated_at
                            } : session
                    }["UtilitySidebar.useCallback[handleRenameSession]"])
            }["UtilitySidebar.useCallback[handleRenameSession]"]);
        }
    }["UtilitySidebar.useCallback[handleRenameSession]"], []);
    const handleDeleteSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UtilitySidebar.useCallback[handleDeleteSession]": async (sessionId)=>{
            if (!window.confirm(t("Delete this chat history?"))) return;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteSession"])(sessionId);
            setSessions({
                "UtilitySidebar.useCallback[handleDeleteSession]": (prev)=>prev.filter({
                        "UtilitySidebar.useCallback[handleDeleteSession]": (session)=>session.session_id !== sessionId
                    }["UtilitySidebar.useCallback[handleDeleteSession]"])
            }["UtilitySidebar.useCallback[handleDeleteSession]"]);
            if (activeSessionId === sessionId) {
                setActiveSessionId(null);
            }
        }
    }["UtilitySidebar.useCallback[handleDeleteSession]"], [
        activeSessionId,
        setActiveSessionId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2f$SidebarShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarShell"], {
        showSessions: true,
        sessions: sessions,
        activeSessionId: activeSessionId,
        loadingSessions: loadingSessions,
        onNewChat: handleNewChat,
        onSelectSession: handleSelectSession,
        onRenameSession: handleRenameSession,
        onDeleteSession: handleDeleteSession
    }, void 0, false, {
        fileName: "[project]/components/sidebar/UtilitySidebar.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(UtilitySidebar, "6SRu7P4LgjWTaeDZQ2vzJ+NhaoE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AppShellContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppShell"]
    ];
});
_c = UtilitySidebar;
var _c;
__turbopack_context__.k.register(_c, "UtilitySidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_2693fd46._.js.map