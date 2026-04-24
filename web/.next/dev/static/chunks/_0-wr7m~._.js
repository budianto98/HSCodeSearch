(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-search.js [app-client] (ecmascript) <export default as FileSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftClose$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left-close.js [app-client] (ecmascript) <export default as PanelLeftClose>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left-open.js [app-client] (ecmascript) <export default as PanelLeftOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SessionList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SessionList.tsx [app-client] (ecmascript)");
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
const PRIMARY_NAV = [
    {
        href: "/chat",
        label: "Chat",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"]
    },
    {
        href: "/hscode-finder",
        label: "HSCode Finder",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"]
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
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                    lineNumber: 80,
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
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex flex-col items-center gap-px pt-1",
                    children: PRIMARY_NAV.map((item)=>{
                        const active = pathname.startsWith(item.href);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: `rounded-lg p-2 transition-colors ${active ? "bg-[var(--background)]/70 text-[var(--foreground)]" : "text-[var(--muted-foreground)] hover:bg-[var(--background)]/50 hover:text-[var(--foreground)]"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                    size: 16,
                                    strokeWidth: active ? 1.9 : 1.5
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                    lineNumber: 109,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                lineNumber: 101,
                                columnNumber: 17
                            }, this)
                        }, item.href, false, {
                            fileName: "[project]/components/sidebar/SidebarShell.tsx",
                            lineNumber: 100,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1"
                }, void 0, false, {
                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                    lineNumber: 116,
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
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this)
                            }, item.href, false, {
                                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                lineNumber: 122,
                                columnNumber: 15
                            }, this);
                        }),
                        footerSlot
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sidebar/SidebarShell.tsx",
            lineNumber: 79,
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
                                alt: "DeepHSCode",
                                width: 20,
                                height: 20
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[15px] font-semibold tracking-tight text-[var(--foreground)]",
                                children: "DeepHSCode"
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sidebar/SidebarShell.tsx",
                        lineNumber: 146,
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
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar/SidebarShell.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                lineNumber: 145,
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
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: t("New Chat")
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sidebar/SidebarShell.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        PRIMARY_NAV.map((item)=>{
                            const active = pathname.startsWith(item.href);
                            const hasSessionsBelow = item.href === "/chat" && showSessions && onSelectSession && onRenameSession && onDeleteSession;
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
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t(item.label)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                                lineNumber: 187,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                        lineNumber: 178,
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
                                            lineNumber: 191,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                        lineNumber: 190,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, item.href, true, {
                                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                lineNumber: 177,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1"
            }, void 0, false, {
                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                lineNumber: 209,
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
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: t(item.label)
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar/SidebarShell.tsx",
                                    lineNumber: 226,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.href, true, {
                            fileName: "[project]/components/sidebar/SidebarShell.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, this);
                    }),
                    footerSlot
                ]
            }, void 0, true, {
                fileName: "[project]/components/sidebar/SidebarShell.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sidebar/SidebarShell.tsx",
        lineNumber: 143,
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
"[project]/lib/unified-ws.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnifiedWSClient",
    ()=>UnifiedWSClient
]);
/**
 * Unified WebSocket Client
 *
 * Connects to the single `/api/v1/ws` endpoint and provides
 * a typed streaming interface for the new ChatOrchestrator protocol.
 *
 * Features:
 * - Client-side heartbeat (30s ping / 45s dead-connection detection)
 * - Auto-reconnect with exponential backoff (max 5 attempts)
 * - resume_from after reconnection to continue a streaming turn
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
;
const HEARTBEAT_INTERVAL_MS = 30_000;
const HEARTBEAT_TIMEOUT_MS = 45_000;
const MAX_RECONNECT_ATTEMPTS = 5;
const BASE_RECONNECT_DELAY_MS = 200;
class UnifiedWSClient {
    ws = null;
    onEvent;
    onClose;
    heartbeatTimer = null;
    lastReceivedAt = 0;
    reconnectAttempt = 0;
    reconnectTimer = null;
    intentionalClose = false;
    activeTurnId = null;
    lastSeq = 0;
    constructor(onEvent, onClose){
        this.onEvent = onEvent;
        this.onClose = onClose;
    }
    /** Provide the current turn/seq so reconnection can resume the stream. */ setResumeState(turnId, seq) {
        this.activeTurnId = turnId;
        this.lastSeq = seq;
    }
    connect() {
        if (this.ws && this.ws.readyState <= WebSocket.OPEN) return;
        this.intentionalClose = false;
        const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wsUrl"])("/api/v1/ws");
        this.ws = new WebSocket(url);
        this.ws.onopen = ()=>{
            this.reconnectAttempt = 0;
            this.lastReceivedAt = Date.now();
            this.startHeartbeat();
            if (this.activeTurnId) {
                this.send({
                    type: "resume_from",
                    turn_id: this.activeTurnId,
                    seq: this.lastSeq
                });
            }
        };
        this.ws.onmessage = (ev)=>{
            this.lastReceivedAt = Date.now();
            try {
                const event = JSON.parse(ev.data);
                if (event.turn_id) this.activeTurnId = event.turn_id;
                if (event.seq != null) this.lastSeq = Math.max(this.lastSeq, event.seq);
                this.onEvent(event);
            } catch  {
                console.warn("Unparseable WS message:", ev.data);
            }
        };
        this.ws.onclose = ()=>{
            this.ws = null;
            this.stopHeartbeat();
            if (!this.intentionalClose) {
                this.attemptReconnect();
            }
        };
        this.ws.onerror = (err)=>{
            console.error("WS error:", err);
        };
    }
    send(msg) {
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            console.error("WebSocket not connected");
            return;
        }
        this.ws.send(JSON.stringify(msg));
    }
    disconnect() {
        this.intentionalClose = true;
        this.stopHeartbeat();
        this.clearReconnectTimer();
        this.ws?.close();
        this.ws = null;
        this.resetResumeState();
    }
    get connected() {
        return this.ws?.readyState === WebSocket.OPEN;
    }
    // ---- Heartbeat ----
    startHeartbeat() {
        this.stopHeartbeat();
        this.heartbeatTimer = setInterval(()=>{
            if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
            if (Date.now() - this.lastReceivedAt > HEARTBEAT_TIMEOUT_MS) {
                this.ws.close();
                return;
            }
            try {
                this.ws.send(JSON.stringify({
                    type: "ping"
                }));
            } catch  {
            // send may fail if socket is closing
            }
        }, HEARTBEAT_INTERVAL_MS);
    }
    stopHeartbeat() {
        if (this.heartbeatTimer) {
            clearInterval(this.heartbeatTimer);
            this.heartbeatTimer = null;
        }
    }
    // ---- Reconnect ----
    attemptReconnect() {
        if (this.reconnectAttempt >= MAX_RECONNECT_ATTEMPTS) {
            this.resetResumeState();
            this.onClose?.();
            return;
        }
        const delay = BASE_RECONNECT_DELAY_MS * Math.pow(2, this.reconnectAttempt);
        this.reconnectAttempt += 1;
        this.reconnectTimer = setTimeout(()=>{
            this.reconnectTimer = null;
            this.connect();
        }, delay);
    }
    clearReconnectTimer() {
        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
            this.reconnectTimer = null;
        }
    }
    resetResumeState() {
        this.activeTurnId = null;
        this.lastSeq = 0;
        this.reconnectAttempt = 0;
    }
}
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
"[project]/lib/stream.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shouldAppendEventContent",
    ()=>shouldAppendEventContent
]);
function shouldAppendEventContent(event) {
    if (event.type !== "content") return false;
    const metadata = event.metadata ?? {};
    if (!metadata.call_id) return true;
    return metadata.call_kind === "llm_final_response";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/context/UnifiedChatContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnifiedChatProvider",
    ()=>UnifiedChatProvider,
    "useUnifiedChat",
    ()=>useUnifiedChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AppShellContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AppShellContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$unified$2d$ws$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/unified-ws.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session-api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$markdown$2d$display$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/markdown-display.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stream$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stream.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function createSessionEntry(key, sessionId = null) {
    return {
        key,
        sessionId,
        enabledTools: [],
        activeCapability: null,
        knowledgeBases: [],
        messages: [],
        isStreaming: false,
        currentStage: "",
        language: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AppShellContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readStoredLanguage"])(),
        status: "idle",
        activeTurnId: null,
        lastSeq: 0,
        updatedAt: Date.now()
    };
}
function ensureSelectedSession(state) {
    if (state.selectedKey && state.sessions[state.selectedKey]) {
        return state.sessions[state.selectedKey];
    }
    return createSessionEntry("draft");
}
function updateSelectedSession(state, updater) {
    const current = ensureSelectedSession(state);
    const key = state.selectedKey || current.key;
    const nextSession = updater(current);
    return {
        ...state,
        selectedKey: key,
        sessions: {
            ...state.sessions,
            [key]: nextSession
        }
    };
}
function reducer(state, action) {
    switch(action.type){
        case "SET_TOOLS":
            return updateSelectedSession(state, (session)=>({
                    ...session,
                    enabledTools: action.tools
                }));
        case "SET_CAPABILITY":
            return updateSelectedSession(state, (session)=>({
                    ...session,
                    activeCapability: action.cap
                }));
        case "SET_KB":
            return updateSelectedSession(state, (session)=>({
                    ...session,
                    knowledgeBases: action.kbs
                }));
        case "SET_LANGUAGE":
            return updateSelectedSession(state, (session)=>({
                    ...session,
                    language: action.lang
                }));
        case "ADD_USER_MSG":
            {
                const session = state.sessions[action.key] ?? createSessionEntry(action.key);
                return {
                    ...state,
                    sessions: {
                        ...state.sessions,
                        [action.key]: {
                            ...session,
                            messages: [
                                ...session.messages,
                                {
                                    role: "user",
                                    content: action.content,
                                    capability: action.capability || "",
                                    ...action.attachments?.length ? {
                                        attachments: action.attachments
                                    } : {},
                                    ...action.requestSnapshot ? {
                                        requestSnapshot: action.requestSnapshot
                                    } : {}
                                }
                            ],
                            updatedAt: Date.now()
                        }
                    }
                };
            }
        case "STREAM_START":
            return {
                ...state,
                sessions: {
                    ...state.sessions,
                    [action.key]: {
                        ...state.sessions[action.key] ?? createSessionEntry(action.key),
                        isStreaming: true,
                        status: "running",
                        messages: [
                            ...state.sessions[action.key]?.messages ?? [],
                            {
                                role: "assistant",
                                content: "",
                                events: [],
                                capability: (state.sessions[action.key] ?? createSessionEntry(action.key)).activeCapability || ""
                            }
                        ],
                        updatedAt: Date.now()
                    }
                }
            };
        case "STREAM_EVENT":
            {
                const session = state.sessions[action.key] ?? createSessionEntry(action.key);
                const msgs = [
                    ...session.messages
                ];
                let last = msgs[msgs.length - 1];
                if (last?.role !== "assistant") {
                    msgs.push({
                        role: "assistant",
                        content: "",
                        events: [],
                        capability: session.activeCapability || ""
                    });
                    last = msgs[msgs.length - 1];
                }
                const events = [
                    ...last?.events || [],
                    action.event
                ];
                let content = last?.content || "";
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stream$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldAppendEventContent"])(action.event)) content += action.event.content;
                const capability = last?.capability || session.activeCapability || "";
                msgs[msgs.length - 1] = {
                    ...last || {
                        role: "assistant",
                        content: ""
                    },
                    content,
                    events,
                    capability
                };
                return {
                    ...state,
                    sessions: {
                        ...state.sessions,
                        [action.key]: {
                            ...session,
                            messages: msgs,
                            currentStage: action.event.type === "stage_start" ? action.event.stage : action.event.type === "stage_end" ? "" : session.currentStage,
                            activeTurnId: action.event.turn_id || session.activeTurnId,
                            lastSeq: Math.max(session.lastSeq, action.event.seq || 0),
                            updatedAt: Date.now()
                        }
                    }
                };
            }
        case "STREAM_END":
            return {
                ...state,
                sessions: {
                    ...state.sessions,
                    [action.key]: {
                        ...state.sessions[action.key] ?? createSessionEntry(action.key),
                        isStreaming: false,
                        currentStage: "",
                        status: action.status ?? "completed",
                        activeTurnId: action.status === "running" ? action.turnId || state.sessions[action.key]?.activeTurnId || null : null,
                        updatedAt: Date.now()
                    }
                },
                sidebarRefreshToken: state.sidebarRefreshToken + 1
            };
        case "BIND_SERVER_SESSION":
            {
                const current = state.sessions[action.key] ?? createSessionEntry(action.key);
                const targetKey = action.sessionId;
                const existing = state.sessions[targetKey];
                const merged = {
                    ...existing ?? current,
                    ...current,
                    key: targetKey,
                    sessionId: action.sessionId,
                    activeTurnId: action.turnId || current.activeTurnId,
                    status: current.isStreaming ? "running" : current.status,
                    updatedAt: Date.now()
                };
                const nextSessions = {
                    ...state.sessions
                };
                delete nextSessions[action.key];
                nextSessions[targetKey] = merged;
                return {
                    ...state,
                    selectedKey: state.selectedKey === action.key ? targetKey : state.selectedKey,
                    sessions: nextSessions,
                    sidebarRefreshToken: state.sidebarRefreshToken + 1
                };
            }
        case "LOAD_SESSION":
            {
                const existing = state.sessions[action.key] ?? createSessionEntry(action.key, action.sessionId);
                return {
                    ...state,
                    selectedKey: action.key,
                    sessions: {
                        ...state.sessions,
                        [action.key]: {
                            ...existing,
                            key: action.key,
                            sessionId: action.sessionId,
                            enabledTools: action.tools ?? existing.enabledTools,
                            activeCapability: action.capability !== undefined ? action.capability : existing.activeCapability,
                            knowledgeBases: action.knowledgeBases ?? existing.knowledgeBases,
                            messages: action.messages,
                            isStreaming: (action.status || "idle") === "running",
                            currentStage: "",
                            activeTurnId: action.activeTurnId || null,
                            status: action.status || "idle",
                            language: action.language ?? existing.language,
                            updatedAt: Date.now()
                        }
                    }
                };
            }
        case "NEW_SESSION":
            {
                const MAX_CACHED_SESSIONS = 20;
                let nextSessions = {
                    ...state.sessions,
                    [action.key]: createSessionEntry(action.key)
                };
                const keys = Object.keys(nextSessions);
                if (keys.length > MAX_CACHED_SESSIONS) {
                    const evictable = keys.filter((k)=>k !== action.key && nextSessions[k].status !== "running").sort((a, b)=>nextSessions[a].updatedAt - nextSessions[b].updatedAt);
                    const toRemove = evictable.slice(0, keys.length - MAX_CACHED_SESSIONS);
                    for (const k of toRemove)delete nextSessions[k];
                }
                return {
                    ...state,
                    selectedKey: action.key,
                    sessions: nextSessions
                };
            }
        default:
            return state;
    }
}
const initialState = {
    selectedKey: null,
    sessions: {},
    sidebarRefreshToken: 0
};
const ChatCtx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function UnifiedChatProvider({ children }) {
    _s();
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(reducer, initialState);
    const stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(initialState);
    const runnersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const draftCounterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const retryTimersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UnifiedChatProvider.useEffect": ()=>{
            stateRef.current = state;
        }
    }["UnifiedChatProvider.useEffect"], [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UnifiedChatProvider.useEffect": ()=>({
                "UnifiedChatProvider.useEffect": ()=>{
                    runnersRef.current.forEach({
                        "UnifiedChatProvider.useEffect": ({ client })=>client.disconnect()
                    }["UnifiedChatProvider.useEffect"]);
                    runnersRef.current.clear();
                    retryTimersRef.current.forEach({
                        "UnifiedChatProvider.useEffect": (id)=>clearTimeout(id)
                    }["UnifiedChatProvider.useEffect"]);
                    retryTimersRef.current.clear();
                }
            })["UnifiedChatProvider.useEffect"]
    }["UnifiedChatProvider.useEffect"], []);
    const makeDraftKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UnifiedChatProvider.useCallback[makeDraftKey]": ()=>{
            draftCounterRef.current += 1;
            return `draft_${Date.now()}_${draftCounterRef.current}`;
        }
    }["UnifiedChatProvider.useCallback[makeDraftKey]"], []);
    const hydrateMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UnifiedChatProvider.useCallback[hydrateMessages]": (messages)=>{
            return messages.map({
                "UnifiedChatProvider.useCallback[hydrateMessages]": (message)=>({
                        role: message.role,
                        content: message.role === "assistant" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$markdown$2d$display$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeMarkdownForDisplay"])(message.content) : message.content,
                        capability: message.capability || "",
                        events: Array.isArray(message.events) ? message.events : [],
                        attachments: Array.isArray(message.attachments) ? message.attachments.map({
                            "UnifiedChatProvider.useCallback[hydrateMessages]": (item)=>({
                                    type: item.type,
                                    filename: item.filename,
                                    base64: item.base64,
                                    url: item.url,
                                    mime_type: item.mime_type
                                })
                        }["UnifiedChatProvider.useCallback[hydrateMessages]"]) : []
                    })
            }["UnifiedChatProvider.useCallback[hydrateMessages]"]);
        }
    }["UnifiedChatProvider.useCallback[hydrateMessages]"], []);
    const moveRunner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UnifiedChatProvider.useCallback[moveRunner]": (oldKey, newKey)=>{
            if (oldKey === newKey) return;
            const runner = runnersRef.current.get(oldKey);
            if (!runner) return;
            runnersRef.current.delete(oldKey);
            runner.key = newKey;
            runnersRef.current.set(newKey, runner);
        }
    }["UnifiedChatProvider.useCallback[moveRunner]"], []);
    const handleRunnerEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UnifiedChatProvider.useCallback[handleRunnerEvent]": (runnerKey, event)=>{
            const runner = runnersRef.current.get(runnerKey);
            const effectiveKey = runner?.key || runnerKey;
            if (event.type === "session") {
                const sessionId = event.metadata?.session_id || event.session_id || "";
                const turnId = event.metadata?.turn_id || event.turn_id || null;
                if (sessionId) {
                    dispatch({
                        type: "BIND_SERVER_SESSION",
                        key: effectiveKey,
                        sessionId,
                        turnId
                    });
                    moveRunner(effectiveKey, sessionId);
                }
                return;
            }
            if (event.type === "done") {
                const status = String(event.metadata?.status || "completed");
                dispatch({
                    type: "STREAM_END",
                    key: effectiveKey,
                    status: status || "completed",
                    turnId: event.turn_id || null
                });
                const runner = runnersRef.current.get(effectiveKey);
                runner?.client.disconnect();
                runnersRef.current.delete(effectiveKey);
                return;
            }
            dispatch({
                type: "STREAM_EVENT",
                key: effectiveKey,
                event
            });
            if (event.type === "error" && Boolean(event.metadata?.turn_terminal)) {
                const status = String(event.metadata?.status || "failed");
                dispatch({
                    type: "STREAM_END",
                    key: effectiveKey,
                    status: status,
                    turnId: event.turn_id || null
                });
            }
        }
    }["UnifiedChatProvider.useCallback[handleRunnerEvent]"], [
        moveRunner
    ]);
    const ensureRunner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UnifiedChatProvider.useCallback[ensureRunner]": (key)=>{
            const existing = runnersRef.current.get(key);
            if (existing) {
                const session = stateRef.current.sessions[key];
                if (session) {
                    existing.client.setResumeState(session.activeTurnId, session.lastSeq);
                }
                if (!existing.client.connected) existing.client.connect();
                return existing;
            }
            const record = {
                key,
                client: new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$unified$2d$ws$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedWSClient"]({
                    "UnifiedChatProvider.useCallback[ensureRunner]": (event)=>handleRunnerEvent(record.key, event)
                }["UnifiedChatProvider.useCallback[ensureRunner]"], {
                    "UnifiedChatProvider.useCallback[ensureRunner]": ()=>{
                        const session = stateRef.current.sessions[record.key];
                        if (session?.isStreaming) {
                            dispatch({
                                type: "STREAM_END",
                                key: record.key,
                                status: "failed"
                            });
                        }
                    }
                }["UnifiedChatProvider.useCallback[ensureRunner]"])
            };
            runnersRef.current.set(key, record);
            record.client.connect();
            return record;
        }
    }["UnifiedChatProvider.useCallback[ensureRunner]"], [
        handleRunnerEvent
    ]);
    const sendThroughRunner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function dispatchToRunner(key, msg, attempt = 0) {
        const runner = ensureRunner(key);
        if (!runner.client.connected) {
            if (attempt >= 10) {
                console.error("WebSocket failed to connect after retries");
                dispatch({
                    type: "STREAM_END",
                    key,
                    status: "failed"
                });
                return;
            }
            const timerId = setTimeout({
                "UnifiedChatProvider.useCallback[sendThroughRunner].dispatchToRunner.timerId": ()=>{
                    retryTimersRef.current.delete(timerId);
                    dispatchToRunner(key, msg, attempt + 1);
                }
            }["UnifiedChatProvider.useCallback[sendThroughRunner].dispatchToRunner.timerId"], 200);
            retryTimersRef.current.add(timerId);
            return;
        }
        runner.client.send(msg);
    }, [
        ensureRunner
    ]);
    const loadSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UnifiedChatProvider.useCallback[loadSession]": async (sessionId)=>{
            const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSession"])(sessionId);
            const activeTurn = Array.isArray(session.active_turns) ? session.active_turns[0] : undefined;
            dispatch({
                type: "LOAD_SESSION",
                key: session.session_id || session.id,
                sessionId: session.session_id || session.id,
                messages: hydrateMessages(session.messages ?? []),
                activeTurnId: activeTurn?.turn_id || activeTurn?.id || null,
                status: session.status || (activeTurn ? "running" : "idle"),
                tools: Array.isArray(session.preferences?.tools) ? session.preferences.tools : [],
                capability: session.preferences?.capability || null,
                knowledgeBases: Array.isArray(session.preferences?.knowledge_bases) ? session.preferences.knowledge_bases : [],
                language: session.preferences?.language || "en"
            });
            if (activeTurn?.turn_id || activeTurn?.id) {
                const key = session.session_id || session.id;
                sendThroughRunner(key, {
                    type: "subscribe_turn",
                    turn_id: activeTurn.turn_id || activeTurn.id,
                    after_seq: 0
                });
            }
        }
    }["UnifiedChatProvider.useCallback[loadSession]"], [
        hydrateMessages,
        sendThroughRunner
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UnifiedChatProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const current = state.selectedKey ? state.sessions[state.selectedKey] : null;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AppShellContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeStoredActiveSessionId"])(current?.sessionId ?? null);
        }
    }["UnifiedChatProvider.useEffect"], [
        state.selectedKey,
        state.sessions
    ]);
    // URL is now the source of truth for session loading.
    // Chat pages load sessions based on URL params; no sessionStorage restore needed.
    // Initialize a draft session so the provider always has a selected key.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UnifiedChatProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (!state.selectedKey) {
                dispatch({
                    type: "NEW_SESSION",
                    key: makeDraftKey()
                });
            }
        }
    }["UnifiedChatProvider.useEffect"], []); // eslint-disable-line react-hooks/exhaustive-deps
    // Idle timeout: if a streaming session receives no events for 60s, auto-fail it.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UnifiedChatProvider.useEffect": ()=>{
            const IDLE_TIMEOUT_MS = 60_000;
            const CHECK_INTERVAL_MS = 10_000;
            const timer = setInterval({
                "UnifiedChatProvider.useEffect.timer": ()=>{
                    const current = stateRef.current;
                    for (const [key, session] of Object.entries(current.sessions)){
                        if (!session.isStreaming) continue;
                        if (Date.now() - session.updatedAt <= IDLE_TIMEOUT_MS) continue;
                        dispatch({
                            type: "STREAM_EVENT",
                            key,
                            event: {
                                type: "error",
                                source: "client",
                                stage: "",
                                content: "Connection timed out — no response received for 60 seconds.",
                                metadata: {
                                    turn_terminal: true,
                                    status: "failed"
                                },
                                timestamp: Date.now() / 1000
                            }
                        });
                        dispatch({
                            type: "STREAM_END",
                            key,
                            status: "failed"
                        });
                        const runner = runnersRef.current.get(key);
                        if (runner) {
                            runner.client.disconnect();
                            runnersRef.current.delete(key);
                        }
                    }
                }
            }["UnifiedChatProvider.useEffect.timer"], CHECK_INTERVAL_MS);
            return ({
                "UnifiedChatProvider.useEffect": ()=>clearInterval(timer)
            })["UnifiedChatProvider.useEffect"];
        }
    }["UnifiedChatProvider.useEffect"], []);
    const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UnifiedChatProvider.useCallback[sendMessage]": (content, attachments, config, notebookReferences, historyReferences, options)=>{
            const msgAttachments = attachments?.map({
                "UnifiedChatProvider.useCallback[sendMessage]": (a)=>({
                        type: a.type,
                        filename: a.filename,
                        base64: a.base64,
                        url: a.url,
                        mime_type: a.mime_type
                    })
            }["UnifiedChatProvider.useCallback[sendMessage]"]);
            const currentState = stateRef.current;
            let key = currentState.selectedKey;
            if (!key) {
                key = makeDraftKey();
                dispatch({
                    type: "NEW_SESSION",
                    key
                });
            }
            const session = currentState.sessions[key] ?? createSessionEntry(key);
            const replaySnapshot = options?.requestSnapshotOverride;
            const effectiveCapability = replaySnapshot?.capability ?? session.activeCapability;
            const effectiveTools = replaySnapshot?.enabledTools ?? session.enabledTools;
            const effectiveKnowledgeBases = replaySnapshot?.knowledgeBases ?? session.knowledgeBases;
            const effectiveLanguage = replaySnapshot?.language ?? session.language;
            const researchSources = Array.isArray(config?.sources) ? config.sources.filter({
                "UnifiedChatProvider.useCallback[sendMessage]": (value)=>typeof value === "string"
            }["UnifiedChatProvider.useCallback[sendMessage]"]) : [];
            const shouldSendKnowledgeBases = effectiveTools.includes("rag") || effectiveCapability === "deep_research" && researchSources.includes("kb");
            const requestSnapshot = replaySnapshot ?? {
                content,
                capability: effectiveCapability,
                enabledTools: [
                    ...effectiveTools
                ],
                knowledgeBases: shouldSendKnowledgeBases ? [
                    ...effectiveKnowledgeBases
                ] : [],
                language: effectiveLanguage,
                ...msgAttachments?.length ? {
                    attachments: msgAttachments
                } : {},
                ...config && Object.keys(config).length > 0 ? {
                    config
                } : {},
                ...notebookReferences?.length ? {
                    notebookReferences
                } : {},
                ...historyReferences?.length ? {
                    historyReferences: [
                        ...historyReferences
                    ]
                } : {}
            };
            if (options?.displayUserMessage !== false) {
                dispatch({
                    type: "ADD_USER_MSG",
                    key,
                    content,
                    capability: effectiveCapability,
                    attachments: msgAttachments,
                    requestSnapshot
                });
            }
            dispatch({
                type: "STREAM_START",
                key
            });
            const effectiveConfig = options?.persistUserMessage === false ? {
                ...config || {},
                _persist_user_message: false
            } : config;
            sendThroughRunner(key, {
                type: "start_turn",
                content,
                tools: effectiveTools,
                capability: effectiveCapability,
                knowledge_bases: shouldSendKnowledgeBases ? effectiveKnowledgeBases : [],
                session_id: session.sessionId,
                attachments,
                language: effectiveLanguage,
                ...notebookReferences?.length ? {
                    notebook_references: notebookReferences
                } : {},
                ...historyReferences?.length ? {
                    history_references: historyReferences
                } : {},
                ...effectiveConfig && Object.keys(effectiveConfig).length > 0 ? {
                    config: effectiveConfig
                } : {}
            });
        }
    }["UnifiedChatProvider.useCallback[sendMessage]"], [
        makeDraftKey,
        sendThroughRunner
    ]);
    const cancelStreamingTurn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UnifiedChatProvider.useCallback[cancelStreamingTurn]": ()=>{
            const currentState = stateRef.current;
            const key = currentState.selectedKey;
            if (!key) return;
            const session = currentState.sessions[key];
            const turnId = session?.activeTurnId;
            if (!session || !turnId) return;
            const runner = runnersRef.current.get(key);
            if (runner?.client.connected) {
                runner.client.send({
                    type: "cancel_turn",
                    turn_id: turnId
                });
                runner.client.disconnect();
                runnersRef.current.delete(key);
            }
            dispatch({
                type: "STREAM_END",
                key,
                status: "cancelled"
            });
        }
    }["UnifiedChatProvider.useCallback[cancelStreamingTurn]"], []);
    const derivedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UnifiedChatProvider.useMemo[derivedState]": ()=>{
            const current = ensureSelectedSession(state);
            return {
                sessionId: current.sessionId,
                enabledTools: current.enabledTools,
                activeCapability: current.activeCapability,
                knowledgeBases: current.knowledgeBases,
                messages: current.messages,
                isStreaming: current.isStreaming,
                currentStage: current.currentStage,
                language: current.language
            };
        }
    }["UnifiedChatProvider.useMemo[derivedState]"], [
        state
    ]);
    const sessionStatuses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UnifiedChatProvider.useMemo[sessionStatuses]": ()=>{
            const entries = {};
            for (const session of Object.values(state.sessions)){
                if (!session.sessionId || session.status !== "running") continue;
                entries[session.sessionId] = {
                    sessionId: session.sessionId,
                    status: session.status,
                    activeTurnId: session.activeTurnId,
                    updatedAt: session.updatedAt
                };
            }
            return entries;
        }
    }["UnifiedChatProvider.useMemo[sessionStatuses]"], [
        state.sessions
    ]);
    const setTools = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UnifiedChatProvider.useCallback[setTools]": (tools)=>{
            dispatch({
                type: "SET_TOOLS",
                tools
            });
        }
    }["UnifiedChatProvider.useCallback[setTools]"], []);
    const setCapability = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UnifiedChatProvider.useCallback[setCapability]": (cap)=>{
            dispatch({
                type: "SET_CAPABILITY",
                cap
            });
        }
    }["UnifiedChatProvider.useCallback[setCapability]"], []);
    const setKBs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UnifiedChatProvider.useCallback[setKBs]": (kbs)=>{
            dispatch({
                type: "SET_KB",
                kbs
            });
        }
    }["UnifiedChatProvider.useCallback[setKBs]"], []);
    const setLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UnifiedChatProvider.useCallback[setLanguage]": (lang)=>{
            dispatch({
                type: "SET_LANGUAGE",
                lang
            });
        }
    }["UnifiedChatProvider.useCallback[setLanguage]"], []);
    const newSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UnifiedChatProvider.useCallback[newSession]": ()=>{
            dispatch({
                type: "NEW_SESSION",
                key: makeDraftKey()
            });
        }
    }["UnifiedChatProvider.useCallback[newSession]"], [
        makeDraftKey
    ]);
    const value = {
        state: derivedState,
        setTools,
        setCapability,
        setKBs,
        setLanguage,
        sendMessage,
        cancelStreamingTurn,
        newSession,
        loadSession,
        selectedSessionId: derivedState.sessionId,
        sessionStatuses,
        sidebarRefreshToken: state.sidebarRefreshToken
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatCtx.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/context/UnifiedChatContext.tsx",
        lineNumber: 812,
        columnNumber: 10
    }, this);
}
_s(UnifiedChatProvider, "42jtvpYxQdWnjbg/5HK0SRLJtLc=");
_c = UnifiedChatProvider;
function useUnifiedChat() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ChatCtx);
    if (!ctx) throw new Error("useUnifiedChat must be inside UnifiedChatProvider");
    return ctx;
}
_s1(useUnifiedChat, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "UnifiedChatProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sidebar/WorkspaceSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkspaceSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2f$SidebarShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sidebar/SidebarShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$UnifiedChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/UnifiedChatContext.tsx [app-client] (ecmascript)");
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
function WorkspaceSidebar() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { newSession, selectedSessionId, sessionStatuses, sidebarRefreshToken } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$UnifiedChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnifiedChat"])();
    const [sessions, setSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingSessions, setLoadingSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasLoadedSessionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const refreshSessions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WorkspaceSidebar.useCallback[refreshSessions]": async ()=>{
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
    }["WorkspaceSidebar.useCallback[refreshSessions]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkspaceSidebar.useEffect": ()=>{
            void refreshSessions();
        }
    }["WorkspaceSidebar.useEffect"], [
        refreshSessions,
        sidebarRefreshToken
    ]);
    const orderedSessions = sessions.map((session, index)=>{
        const runtime = sessionStatuses[session.session_id];
        return {
            index,
            session: runtime ? {
                ...session,
                status: runtime.status,
                active_turn_id: runtime.activeTurnId || session.active_turn_id
            } : session
        };
    }).sort((a, b)=>{
        const aPriority = a.session.status === "running" ? 0 : 1;
        const bPriority = b.session.status === "running" ? 0 : 1;
        if (aPriority !== bPriority) return aPriority - bPriority;
        return a.index - b.index;
    }).map(({ session })=>session);
    const handleNewChat = ()=>{
        newSession();
        router.push("/chat");
    };
    const handleSelectSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WorkspaceSidebar.useCallback[handleSelectSession]": async (sessionId)=>{
            router.push(`/chat/${sessionId}`);
        }
    }["WorkspaceSidebar.useCallback[handleSelectSession]"], [
        router
    ]);
    const handleRenameSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WorkspaceSidebar.useCallback[handleRenameSession]": async (sessionId, title)=>{
            const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSessionTitle"])(sessionId, title);
            setSessions({
                "WorkspaceSidebar.useCallback[handleRenameSession]": (prev)=>prev.map({
                        "WorkspaceSidebar.useCallback[handleRenameSession]": (session)=>session.session_id === sessionId ? {
                                ...session,
                                title: updated.title,
                                updated_at: updated.updated_at
                            } : session
                    }["WorkspaceSidebar.useCallback[handleRenameSession]"])
            }["WorkspaceSidebar.useCallback[handleRenameSession]"]);
        }
    }["WorkspaceSidebar.useCallback[handleRenameSession]"], []);
    const handleDeleteSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WorkspaceSidebar.useCallback[handleDeleteSession]": async (sessionId)=>{
            if (!window.confirm(t("Delete this chat history?"))) return;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteSession"])(sessionId);
            setSessions({
                "WorkspaceSidebar.useCallback[handleDeleteSession]": (prev)=>prev.filter({
                        "WorkspaceSidebar.useCallback[handleDeleteSession]": (session)=>session.session_id !== sessionId
                    }["WorkspaceSidebar.useCallback[handleDeleteSession]"])
            }["WorkspaceSidebar.useCallback[handleDeleteSession]"]);
            if (selectedSessionId === sessionId) {
                newSession();
                router.push("/chat");
            }
        }
    }["WorkspaceSidebar.useCallback[handleDeleteSession]"], [
        newSession,
        router,
        selectedSessionId,
        t
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2f$SidebarShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarShell"], {
        showSessions: true,
        sessions: orderedSessions,
        activeSessionId: selectedSessionId,
        loadingSessions: loadingSessions,
        onNewChat: handleNewChat,
        onSelectSession: handleSelectSession,
        onRenameSession: handleRenameSession,
        onDeleteSession: handleDeleteSession
    }, void 0, false, {
        fileName: "[project]/components/sidebar/WorkspaceSidebar.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(WorkspaceSidebar, "l9CkuZRbY4/mrPbFebIuOox+e14=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$UnifiedChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnifiedChat"]
    ];
});
_c = WorkspaceSidebar;
var _c;
__turbopack_context__.k.register(_c, "WorkspaceSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0-wr7m~._.js.map