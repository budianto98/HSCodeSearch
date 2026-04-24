(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Mermaid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mermaid",
    ()=>Mermaid,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
let mermaidLoader = null;
async function loadMermaid() {
    if (!mermaidLoader) {
        mermaidLoader = __turbopack_context__.A("[project]/node_modules/mermaid/dist/mermaid.core.mjs [app-client] (ecmascript, async loader)").then((module)=>{
            const mermaid = module.default;
            mermaid.initialize({
                startOnLoad: false,
                theme: "neutral",
                securityLevel: "strict",
                fontFamily: "ui-sans-serif, system-ui, sans-serif",
                flowchart: {
                    useMaxWidth: true,
                    htmlLabels: false,
                    curve: "basis"
                },
                themeVariables: {
                    primaryColor: "#6366f1",
                    primaryTextColor: "#1e293b",
                    primaryBorderColor: "#c7d2fe",
                    lineColor: "#94a3b8",
                    secondaryColor: "#f1f5f9",
                    tertiaryColor: "#f8fafc"
                }
            });
            return mermaid;
        });
    }
    return mermaidLoader;
}
function cleanupMermaidOrphans(id) {
    try {
        document.getElementById(id)?.remove();
        document.getElementById(`d${id}`)?.remove();
    } catch  {
    /* ignore */ }
}
let mermaidIdCounter = 0;
const DEBOUNCE_MS = 600;
const Mermaid = ({ chart, className = "" })=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [svg, setSvg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stable, setStable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Mermaid.useState": ()=>`mermaid-${++mermaidIdCounter}`
    }["Mermaid.useState"]);
    const lastChartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(chart);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Mermaid.useEffect": ()=>{
            lastChartRef.current = chart;
            setStable(false);
            const timer = window.setTimeout({
                "Mermaid.useEffect.timer": ()=>{
                    if (lastChartRef.current === chart) setStable(true);
                }
            }["Mermaid.useEffect.timer"], DEBOUNCE_MS);
            return ({
                "Mermaid.useEffect": ()=>window.clearTimeout(timer)
            })["Mermaid.useEffect"];
        }
    }["Mermaid.useEffect"], [
        chart
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Mermaid.useEffect": ()=>{
            if (!stable) return;
            let cancelled = false;
            const renderChart = {
                "Mermaid.useEffect.renderChart": async ()=>{
                    if (!chart.trim() || !containerRef.current) return;
                    try {
                        const mermaid = await loadMermaid();
                        cleanupMermaidOrphans(id);
                        const { svg: renderedSvg } = await mermaid.render(id, chart.trim());
                        if (!cancelled) {
                            setSvg(renderedSvg);
                            setError(null);
                        }
                    } catch (err) {
                        cleanupMermaidOrphans(id);
                        if (!cancelled) {
                            setError(err instanceof Error ? err.message : "Failed to render diagram");
                        }
                    }
                }
            }["Mermaid.useEffect.renderChart"];
            void renderChart();
            return ({
                "Mermaid.useEffect": ()=>{
                    cancelled = true;
                }
            })["Mermaid.useEffect"];
        }
    }["Mermaid.useEffect"], [
        stable,
        chart,
        id
    ]);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `my-4 p-4 bg-red-50 border border-red-200 rounded-lg ${className}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-600 text-sm font-medium mb-2",
                    children: t("Diagram rendering error")
                }, void 0, false, {
                    fileName: "[project]/components/Mermaid.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    className: "text-xs text-red-500 whitespace-pre-wrap",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/components/Mermaid.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                    className: "mt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                            className: "text-xs text-[var(--muted-foreground)] cursor-pointer",
                            children: t("Show source")
                        }, void 0, false, {
                            fileName: "[project]/components/Mermaid.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "mt-2 p-2 bg-[var(--muted)] rounded text-xs overflow-x-auto text-[var(--foreground)]",
                            children: chart
                        }, void 0, false, {
                            fileName: "[project]/components/Mermaid.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Mermaid.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Mermaid.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!stable && !svg) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `my-4 rounded-xl border border-[var(--border)] bg-[var(--muted)]/50 px-4 py-3 text-sm text-[var(--muted-foreground)] ${className}`,
            children: t("Rendering diagram...")
        }, void 0, false, {
            fileName: "[project]/components/Mermaid.tsx",
            lineNumber: 128,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `my-6 flex justify-center overflow-x-auto ${className}`,
        dangerouslySetInnerHTML: {
            __html: svg
        }
    }, void 0, false, {
        fileName: "[project]/components/Mermaid.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Mermaid, "LRoKrfEB1D6ePGA5mD3QRK3LgBM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Mermaid;
const __TURBOPACK__default__export__ = Mermaid;
var _c;
__turbopack_context__.k.register(_c, "Mermaid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Mermaid.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/Mermaid.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_Mermaid_tsx_26af24c8._.js.map