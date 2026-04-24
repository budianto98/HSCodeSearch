module.exports = [
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
"[project]/lib/notebook-api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-ssr] (ecmascript)");
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
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/question-notebook/entries${query ? `?${query}` : ""}`), {
        cache: "no-store"
    });
    return expectJson(response);
}
async function getNotebookEntry(entryId) {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/question-notebook/entries/${entryId}`), {
        cache: "no-store"
    });
    return expectJson(response);
}
async function lookupNotebookEntry(sessionId, questionId) {
    const params = new URLSearchParams({
        session_id: sessionId,
        question_id: questionId
    });
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/question-notebook/entries/lookup/by-question?${params}`));
    if (response.status === 404) return null;
    return expectJson(response);
}
async function updateNotebookEntry(entryId, updates) {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/question-notebook/entries/${entryId}`), {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updates)
    });
    await expectJson(response);
}
async function upsertNotebookEntry(data) {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/question-notebook/entries/upsert"), {
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
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/question-notebook/entries/${entryId}`), {
        method: "DELETE"
    });
    await expectJson(response);
}
async function addEntryToCategory(entryId, categoryId) {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/question-notebook/entries/${entryId}/categories`), {
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
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/question-notebook/entries/${entryId}/categories/${categoryId}`), {
        method: "DELETE"
    });
    await expectJson(response);
}
async function listCategories() {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/question-notebook/categories"), {
        cache: "no-store"
    });
    return expectJson(response);
}
async function createCategory(name) {
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/question-notebook/categories"), {
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
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/question-notebook/categories/${categoryId}`), {
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
    const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/question-notebook/categories/${categoryId}`), {
        method: "DELETE"
    });
    await expectJson(response);
}
}),
"[project]/app/(utility)/knowledge/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KnowledgePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-ssr] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-ssr] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-up.js [app-ssr] (ecmascript) <export default as FileUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-ssr] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NotebookPen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/notebook-pen.js [app-ssr] (ecmascript) <export default as NotebookPen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-ssr] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-ssr] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$knowledge$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/knowledge-api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/notebook-api.ts [app-ssr] (ecmascript)");
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
const MarkdownRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/common/MarkdownRenderer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const ProcessLogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/common/ProcessLogs.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const EMPTY_PROCESS_STATE = {
    taskId: null,
    label: "",
    logs: [],
    executing: false,
    error: null
};
const resolveKbStatus = (kb)=>kb.status ?? kb.statistics?.status ?? "unknown";
const kbNeedsReindex = (kb)=>Boolean(kb.statistics?.needs_reindex) || resolveKbStatus(kb) === "needs_reindex";
const kbIsUploadable = (kb)=>resolveKbStatus(kb) === "ready" && !kbNeedsReindex(kb);
function KnowledgePageContent() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const initialTab = searchParams.get("tab") || "knowledge";
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialTab);
    const [knowledgeBases, setKnowledgeBases] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [notebooks, setNotebooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [providers, setProviders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [pageError, setPageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [creating, setCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadingKb, setUploadingKb] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [progressMap, setProgressMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [newKbName, setNewKbName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [newKbFiles, setNewKbFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedProvider, setSelectedProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("llamaindex");
    const [uploadTarget, setUploadTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [uploadFiles, setUploadFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newNotebookName, setNewNotebookName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [newNotebookDescription, setNewNotebookDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedNotebookId, setSelectedNotebookId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedNotebook, setSelectedNotebook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingNotebookDetail, setLoadingNotebookDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedRecordId, setExpandedRecordId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [createProcess, setCreateProcess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(EMPTY_PROCESS_STATE);
    const [uploadProcess, setUploadProcess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(EMPTY_PROCESS_STATE);
    const socketsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const logSourcesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        create: null,
        upload: null
    });
    const createFileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const uploadFileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [qItems, setQItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [qTotal, setQTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [qLoading, setQLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [qError, setQError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [qRefreshing, setQRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [qFilter, setQFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [qActiveCategoryId, setQActiveCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [qCategories, setQCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [qPendingId, setQPendingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [qShowCategoryManager, setQShowCategoryManager] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [qNewCatName, setQNewCatName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [qRenamingCat, setQRenamingCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // ── Question Notebook handlers ──
    const loadQCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setQCategories(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listCategories"])());
        } catch  {}
    }, []);
    const loadQItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (mode, catId)=>{
        setQRefreshing(true);
        setQError(null);
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listNotebookEntries"])({
                bookmarked: mode === "bookmarked" ? true : undefined,
                is_correct: mode === "wrong" ? false : undefined,
                category_id: catId ?? undefined,
                limit: 200
            });
            setQItems(response.items);
            setQTotal(response.total);
        } catch (err) {
            setQError(String(err instanceof Error ? err.message : err));
        } finally{
            setQLoading(false);
            setQRefreshing(false);
        }
    }, []);
    const handleQToggleBookmark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (item)=>{
        const next = !item.bookmarked;
        setQPendingId(item.id);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateNotebookEntry"])(item.id, {
                bookmarked: next
            });
            setQItems((prev)=>qFilter === "bookmarked" && !next ? prev.filter((e)=>e.id !== item.id) : prev.map((e)=>e.id === item.id ? {
                        ...e,
                        bookmarked: next
                    } : e));
            if (qFilter === "bookmarked" && !next) setQTotal((p)=>Math.max(0, p - 1));
        } catch  {}
        setQPendingId(null);
    }, [
        qFilter
    ]);
    const handleQDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (item)=>{
        if (!window.confirm(t("Delete this entry?"))) return;
        setQPendingId(item.id);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteNotebookEntry"])(item.id);
            setQItems((prev)=>prev.filter((e)=>e.id !== item.id));
            setQTotal((p)=>Math.max(0, p - 1));
        } catch  {}
        setQPendingId(null);
    }, [
        t
    ]);
    const handleQRemoveFromCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (item)=>{
        if (qActiveCategoryId === null) return;
        setQPendingId(item.id);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeEntryFromCategory"])(item.id, qActiveCategoryId);
            setQItems((prev)=>prev.filter((e)=>e.id !== item.id));
            setQTotal((p)=>Math.max(0, p - 1));
        } catch  {}
        setQPendingId(null);
    }, [
        qActiveCategoryId
    ]);
    const handleQCreateCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!qNewCatName.trim()) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCategory"])(qNewCatName.trim());
            setQNewCatName("");
            await loadQCategories();
        } catch  {}
    }, [
        loadQCategories,
        qNewCatName
    ]);
    const handleQRenameCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!qRenamingCat || !qRenamingCat.name.trim()) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renameCategory"])(qRenamingCat.id, qRenamingCat.name.trim());
            setQRenamingCat(null);
            await loadQCategories();
        } catch  {}
    }, [
        loadQCategories,
        qRenamingCat
    ]);
    const handleQDeleteCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (catId)=>{
        if (!window.confirm(t("Delete this category?"))) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteCategory"])(catId);
            if (qActiveCategoryId === catId) setQActiveCategoryId(null);
            await loadQCategories();
        } catch  {}
    }, [
        qActiveCategoryId,
        loadQCategories,
        t
    ]);
    const Q_FILTERS = [
        {
            mode: "all",
            label: "All"
        },
        {
            mode: "bookmarked",
            label: "Bookmarked"
        },
        {
            mode: "wrong",
            label: "Wrong Only"
        }
    ];
    const getProcessSetter = (kind)=>kind === "create" ? setCreateProcess : setUploadProcess;
    const closeTaskLogStream = (kind)=>{
        logSourcesRef.current[kind]?.close();
        logSourcesRef.current[kind] = null;
    };
    const closeProgressSocket = (kbName)=>{
        socketsRef.current[kbName]?.close();
        delete socketsRef.current[kbName];
    };
    const closeAllProgressSockets = ()=>{
        Object.values(socketsRef.current).forEach((socket)=>socket.close());
        socketsRef.current = {};
    };
    const openTaskLogStream = (kind, taskId, label)=>{
        closeTaskLogStream(kind);
        const setProcess = getProcessSetter(kind);
        setProcess({
            taskId,
            label,
            logs: [],
            executing: true,
            error: null
        });
        const source = new EventSource((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/knowledge/tasks/${taskId}/stream`));
        logSourcesRef.current[kind] = source;
        let settled = false;
        source.addEventListener("log", (event)=>{
            try {
                const payload = JSON.parse(event.data);
                if (!payload.line) return;
                setProcess((prev)=>({
                        ...prev,
                        taskId,
                        label,
                        logs: [
                            ...prev.logs,
                            payload.line
                        ]
                    }));
            } catch  {
            // Ignore malformed log events.
            }
        });
        source.addEventListener("complete", ()=>{
            settled = true;
            setProcess((prev)=>({
                    ...prev,
                    taskId,
                    label,
                    executing: false
                }));
            closeTaskLogStream(kind);
        });
        source.addEventListener("failed", (event)=>{
            settled = true;
            let detail = "Task failed";
            try {
                const payload = JSON.parse(event.data);
                detail = payload.detail || detail;
            } catch  {
            // Ignore malformed failure events.
            }
            setProcess((prev)=>({
                    ...prev,
                    taskId,
                    label,
                    executing: false,
                    error: detail
                }));
            closeTaskLogStream(kind);
        });
        source.onerror = ()=>{
            if (settled) return;
            setProcess((prev)=>{
                if (!prev.executing) return prev;
                return {
                    ...prev,
                    taskId,
                    label,
                    executing: false,
                    error: prev.error || "Process log stream disconnected."
                };
            });
            closeTaskLogStream(kind);
        };
    };
    const loadAll = async ()=>{
        setLoading(true);
        setPageError(null);
        try {
            const [kbs, providerData, cats] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$knowledge$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listKnowledgeBases"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$knowledge$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listRagProviders"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listCategories"])()
            ]);
            setKnowledgeBases(kbs);
            setProviders(providerData.length ? providerData : [
                {
                    id: "llamaindex",
                    name: "LlamaIndex",
                    description: "Pure vector retrieval, fastest processing speed."
                }
            ]);
            const nextNotebooks = cats.map((c)=>({
                    id: String(c.id),
                    name: c.name,
                    record_count: c.entry_count ?? 0
                }));
            setNotebooks(nextNotebooks);
            if (!selectedNotebookId && nextNotebooks.length > 0) {
                void loadNotebookDetail(nextNotebooks[0].id);
            } else if (selectedNotebookId) {
                const stillExists = nextNotebooks.some((item)=>item.id === selectedNotebookId);
                if (stillExists) {
                    void loadNotebookDetail(selectedNotebookId);
                } else {
                    setSelectedNotebookId(null);
                    setSelectedNotebook(null);
                }
            }
            const preferredUploadTarget = kbs.find((kb)=>kb.is_default && kbIsUploadable(kb))?.name ?? kbs.find((kb)=>kbIsUploadable(kb))?.name ?? "";
            setUploadTarget((prev)=>{
                if (prev && kbs.some((kb)=>kb.name === prev && kbIsUploadable(kb))) {
                    return prev;
                }
                return preferredUploadTarget;
            });
            for (const kb of kbs){
                const status = kb.status ?? kb.statistics?.status;
                const progress = kb.progress ?? kb.statistics?.progress;
                const progressStage = progress?.stage;
                if (status && status !== "ready" && status !== "error" && progressStage !== "completed" && progressStage !== "error") {
                    setProgressMap((prev)=>({
                            ...prev,
                            [kb.name]: progress || prev[kb.name] || {}
                        }));
                    const taskId = progress?.task_id;
                    subscribeProgress(kb.name, taskId || undefined);
                }
            }
        } catch (error) {
            setPageError(error instanceof Error ? error.message : String(error));
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadAll();
        return ()=>{
            closeAllProgressSockets();
            closeTaskLogStream("create");
            closeTaskLogStream("upload");
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (tab === "questions") {
            void loadQItems(qFilter, qActiveCategoryId);
            void loadQCategories();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        tab,
        qFilter,
        qActiveCategoryId
    ]);
    const subscribeProgress = (kbName, expectedTaskId)=>{
        closeProgressSocket(kbName);
        const query = expectedTaskId ? `?task_id=${encodeURIComponent(expectedTaskId)}` : "";
        const socket = new WebSocket((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wsUrl"])(`/api/v1/knowledge/${kbName}/progress/ws${query}`));
        socketsRef.current[kbName] = socket;
        socket.onmessage = (event)=>{
            try {
                const rawData = JSON.parse(event.data);
                const progress = rawData?.type === "progress" && rawData.data ? rawData.data : rawData;
                if (!progress || typeof progress !== "object") return;
                if (expectedTaskId && progress.task_id && progress.task_id !== expectedTaskId) return;
                setProgressMap((prev)=>({
                        ...prev,
                        [kbName]: progress
                    }));
                const stage = progress.stage;
                if (stage === "completed" || stage === "error") {
                    closeProgressSocket(kbName);
                    if (expectedTaskId) {
                        void loadAll();
                    }
                }
            } catch  {
            // Ignore malformed progress events.
            }
        };
        socket.onerror = ()=>{
            closeProgressSocket(kbName);
        };
        socket.onclose = ()=>{
            delete socketsRef.current[kbName];
        };
    };
    const createKnowledgeBase = async ()=>{
        if (!newKbName.trim() || !newKbFiles.length) return;
        const kbName = newKbName.trim();
        const fileCount = newKbFiles.length;
        setCreating(true);
        try {
            const form = new FormData();
            form.append("name", kbName);
            form.append("rag_provider", selectedProvider);
            newKbFiles.forEach((file)=>form.append("files", file));
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])("/api/v1/knowledge/create"), {
                method: "POST",
                body: form
            });
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.detail || "Failed to create knowledge base");
            }
            const data = await res.json();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$knowledge$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invalidateKnowledgeCaches"])();
            if (data.task_id) {
                openTaskLogStream("create", data.task_id, `Create ${kbName}`);
                subscribeProgress(kbName, data.task_id);
                setProgressMap((prev)=>({
                        ...prev,
                        [kbName]: {
                            task_id: data.task_id,
                            stage: "initializing",
                            message: "Initializing knowledge base...",
                            current: 0,
                            total: fileCount,
                            progress_percent: 0
                        }
                    }));
            } else {
                subscribeProgress(kbName);
            }
            setNewKbName("");
            setNewKbFiles([]);
            if (createFileRef.current) createFileRef.current.value = "";
            await loadAll();
        } catch (error) {
            setCreateProcess((prev)=>({
                    ...prev,
                    executing: false,
                    error: error instanceof Error ? error.message : String(error),
                    label: prev.label || `Create ${kbName}`
                }));
        } finally{
            setCreating(false);
        }
    };
    const uploadToKnowledgeBase = async ()=>{
        if (!uploadTarget || !uploadFiles.length) return;
        const targetKb = uploadTarget;
        const fileCount = uploadFiles.length;
        setUploadingKb(uploadTarget);
        try {
            const form = new FormData();
            uploadFiles.forEach((file)=>form.append("files", file));
            if (selectedProvider) form.append("rag_provider", selectedProvider);
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/knowledge/${targetKb}/upload`), {
                method: "POST",
                body: form
            });
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.detail || "Failed to upload files");
            }
            const data = await res.json();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$knowledge$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invalidateKnowledgeCaches"])();
            if (data.task_id) {
                openTaskLogStream("upload", data.task_id, `Upload to ${targetKb}`);
                subscribeProgress(targetKb, data.task_id);
                setProgressMap((prev)=>({
                        ...prev,
                        [targetKb]: {
                            task_id: data.task_id,
                            stage: "processing_documents",
                            message: `Processing ${fileCount} files...`,
                            current: 0,
                            total: fileCount,
                            progress_percent: 0
                        }
                    }));
            } else {
                subscribeProgress(targetKb);
            }
            setUploadFiles([]);
            if (uploadFileRef.current) uploadFileRef.current.value = "";
            await loadAll();
        } catch (error) {
            setUploadProcess((prev)=>({
                    ...prev,
                    executing: false,
                    error: error instanceof Error ? error.message : String(error),
                    label: prev.label || `Upload to ${targetKb}`
                }));
        } finally{
            setUploadingKb(null);
        }
    };
    const setDefaultKnowledgeBase = async (kbName)=>{
        await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/knowledge/default/${kbName}`), {
            method: "PUT"
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$knowledge$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invalidateKnowledgeCaches"])();
        await loadAll();
    };
    const deleteKnowledgeBase = async (kbName)=>{
        if (!window.confirm(t('Delete knowledge base "{{name}}"?', {
            name: kbName
        }))) return;
        await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/v1/knowledge/${kbName}`), {
            method: "DELETE"
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$knowledge$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invalidateKnowledgeCaches"])();
        await loadAll();
    };
    const createNotebook = async ()=>{
        if (!newNotebookName.trim()) return;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCategory"])(newNotebookName.trim());
        setNewNotebookName("");
        setNewNotebookDescription("");
        await loadAll();
    };
    const loadNotebookDetail = async (notebookId)=>{
        setSelectedNotebookId(notebookId);
        setExpandedRecordId(null);
        setLoadingNotebookDetail(true);
        try {
            const info = notebooks.find((n)=>n.id === notebookId);
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notebook$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listNotebookEntries"])({
                category_id: Number(notebookId)
            });
            const records = (data.items || []).map((e)=>({
                    id: String(e.id),
                    type: e.question_type,
                    title: e.question,
                    summary: e.explanation,
                    user_query: e.question,
                    output: e.correct_answer,
                    created_at: e.created_at
                }));
            setSelectedNotebook({
                id: notebookId,
                name: info?.name ?? "",
                description: info?.description,
                record_count: data.total,
                color: info?.color,
                records
            });
        } catch  {
            setSelectedNotebook(null);
        } finally{
            setLoadingNotebookDetail(false);
        }
    };
    const openNotebookRecord = (record)=>{
        const sessionId = String(record.metadata?.session_id || "");
        if (!sessionId) return;
        if (record.type === "chat") {
            router.push(`/?session=${encodeURIComponent(sessionId)}`);
            return;
        }
        if (record.type === "guided_learning") {
            router.push(`/guide?session=${encodeURIComponent(sessionId)}`);
        }
    };
    const formatTimestamp = (value)=>{
        if (!value) return t("Unknown time");
        return new Date(value * 1000).toLocaleString();
    };
    const getRecordBadge = (type)=>{
        switch(type){
            case "chat":
                return {
                    label: t("Chat"),
                    color: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"]
                };
            case "guided_learning":
                return {
                    label: t("Guided Learning"),
                    color: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
                };
            case "co_writer":
                return {
                    label: t("Co-Writer"),
                    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"]
                };
            case "research":
                return {
                    label: t("Research"),
                    color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"]
                };
            default:
                return {
                    label: type,
                    color: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NotebookPen$3e$__["NotebookPen"]
                };
        }
    };
    const combinedKbs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>knowledgeBases.map((kb)=>({
                ...kb,
                status: kb.status ?? kb.statistics?.status,
                progress: progressMap[kb.name] || kb.progress || kb.statistics?.progress
            })), [
        knowledgeBases,
        progressMap
    ]);
    const hasUploadableKb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>combinedKbs.some((kb)=>kbIsUploadable(kb)), [
        combinedKbs
    ]);
    const uploadTargetKb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>combinedKbs.find((kb)=>kb.name === uploadTarget) ?? null, [
        combinedKbs,
        uploadTarget
    ]);
    const uploadBlockedReason = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!uploadTargetKb) return null;
        if (kbNeedsReindex(uploadTargetKb)) {
            return t("This knowledge base is in legacy index format and needs reindex before upload.");
        }
        const status = resolveKbStatus(uploadTargetKb);
        if (status !== "ready") {
            return t("This knowledge base is currently {{status}} and cannot accept uploads yet.", {
                status: status.replaceAll("_", " ")
            });
        }
        return null;
    }, [
        uploadTargetKb
    ]);
    const uploadDisabled = !uploadTarget || !uploadFiles.length || !!uploadingKb || Boolean(uploadBlockedReason);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full overflow-y-auto bg-[var(--background)] [scrollbar-gutter:stable]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-6 py-8 pb-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex items-start justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold tracking-tight text-[var(--foreground)]",
                                    children: t("Knowledge")
                                }, void 0, false, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 763,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[13px] text-[var(--muted-foreground)]",
                                    children: t("Manage your knowledge bases and notebooks in one place.")
                                }, void 0, false, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 766,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                            lineNumber: 762,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex shrink-0 rounded-lg border border-[var(--border)] bg-[var(--muted)] p-0.5",
                            children: [
                                {
                                    key: "knowledge",
                                    label: t("Knowledge Bases"),
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"]
                                },
                                {
                                    key: "notebooks",
                                    label: t("Notebooks"),
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NotebookPen$3e$__["NotebookPen"]
                                },
                                {
                                    key: "questions",
                                    label: t("Question Notebook"),
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"]
                                }
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setTab(item.key),
                                    className: `inline-flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-[13px] font-medium transition-all ${tab === item.key ? "bg-[var(--card)] text-[var(--foreground)] shadow-sm" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 786,
                                            columnNumber: 17
                                        }, this),
                                        item.label
                                    ]
                                }, item.key, true, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 777,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                            lineNumber: 771,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                    lineNumber: 761,
                    columnNumber: 9
                }, this),
                pageError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300",
                    children: pageError
                }, void 0, false, {
                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                    lineNumber: 794,
                    columnNumber: 11
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center py-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-5 w-5 animate-spin text-[var(--muted-foreground)]"
                    }, void 0, false, {
                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                        lineNumber: 801,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                    lineNumber: 800,
                    columnNumber: 11
                }, this) : tab === "knowledge" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-5 lg:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    size: 15,
                                                    className: "text-[var(--muted-foreground)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 809,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-[14px] font-semibold text-[var(--foreground)]",
                                                    children: t("Create knowledge base")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 810,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 808,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: newKbName,
                                                    onChange: (event)=>setNewKbName(event.target.value),
                                                    placeholder: t("Knowledge base name"),
                                                    className: "w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[13px] text-[var(--foreground)] outline-none transition-colors focus:border-[var(--foreground)]/25"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 816,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: selectedProvider,
                                                    onChange: (event)=>setSelectedProvider(event.target.value),
                                                    className: "w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[13px] text-[var(--foreground)] outline-none",
                                                    children: providers.map((provider)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: provider.id,
                                                            children: provider.name
                                                        }, provider.id, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 829,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 823,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>createFileRef.current?.click(),
                                                    className: "flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[13px] text-[var(--muted-foreground)] transition-colors hover:border-[var(--foreground)]/25 hover:text-[var(--foreground)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileUp$3e$__["FileUp"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 841,
                                                            columnNumber: 21
                                                        }, this),
                                                        newKbFiles.length ? newKbFiles.length > 1 ? t("{n} files selected", {
                                                            n: newKbFiles.length
                                                        }) : t("{n} file selected", {
                                                            n: newKbFiles.length
                                                        }) : t("Choose files...")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 836,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ref: createFileRef,
                                                    type: "file",
                                                    multiple: true,
                                                    className: "hidden",
                                                    onChange: (event)=>setNewKbFiles(Array.from(event.target.files || []))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 848,
                                                    columnNumber: 19
                                                }, this),
                                                !!newKbFiles.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1.5",
                                                    children: newKbFiles.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-md bg-[var(--muted)] px-2 py-0.5 text-[11px] text-[var(--muted-foreground)]",
                                                            children: file.name
                                                        }, file.name, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 861,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 859,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: createKnowledgeBase,
                                                    disabled: creating || !newKbName.trim() || !newKbFiles.length,
                                                    className: "inline-flex items-center gap-1.5 rounded-lg bg-[var(--primary)] px-3.5 py-1.5 text-[13px] font-medium text-[var(--primary-foreground)] transition-opacity disabled:cursor-not-allowed disabled:opacity-40",
                                                    children: [
                                                        creating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "h-3.5 w-3.5 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 876,
                                                            columnNumber: 33
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 876,
                                                            columnNumber: 84
                                                        }, this),
                                                        t("Create")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 871,
                                                    columnNumber: 19
                                                }, this),
                                                (createProcess.taskId || createProcess.logs.length > 0 || createProcess.executing) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        createProcess.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[11px] text-[var(--muted-foreground)]",
                                                            children: [
                                                                createProcess.label,
                                                                createProcess.taskId ? ` · ${createProcess.taskId}` : ""
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 883,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProcessLogs, {
                                                            logs: createProcess.logs,
                                                            executing: createProcess.executing,
                                                            title: t("Create Process")
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 888,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 881,
                                                    columnNumber: 21
                                                }, this),
                                                createProcess.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[12px] text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300",
                                                    children: createProcess.error
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 897,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 815,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 807,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                    size: 15,
                                                    className: "text-[var(--muted-foreground)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 907,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-[14px] font-semibold text-[var(--foreground)]",
                                                    children: t("Upload documents")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 908,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 906,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: uploadTarget,
                                                    onChange: (event)=>setUploadTarget(event.target.value),
                                                    className: "w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[13px] text-[var(--foreground)] outline-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: t("Select a knowledge base")
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 919,
                                                            columnNumber: 21
                                                        }, this),
                                                        combinedKbs.map((kb)=>{
                                                            const status = resolveKbStatus(kb);
                                                            const needsReindex = kbNeedsReindex(kb);
                                                            const uploadable = kbIsUploadable(kb);
                                                            let suffix = "";
                                                            if (needsReindex) {
                                                                suffix = ` (${t("needs reindex")})`;
                                                            } else if (status !== "ready") {
                                                                suffix = ` (${status.replaceAll("_", " ")})`;
                                                            }
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: kb.name,
                                                                disabled: !uploadable,
                                                                children: [
                                                                    kb.name,
                                                                    suffix
                                                                ]
                                                            }, kb.name, true, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 931,
                                                                columnNumber: 25
                                                            }, this);
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 914,
                                                    columnNumber: 19
                                                }, this),
                                                !hasUploadableKb && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[12px] text-amber-700 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-300",
                                                    children: t("No ready knowledge base is available for upload. Create a new KB or reindex legacy KBs first.")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 940,
                                                    columnNumber: 21
                                                }, this),
                                                uploadBlockedReason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[12px] text-amber-700 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-300",
                                                    children: uploadBlockedReason
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 946,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>uploadFileRef.current?.click(),
                                                    className: "flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[13px] text-[var(--muted-foreground)] transition-colors hover:border-[var(--foreground)]/25 hover:text-[var(--foreground)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileUp$3e$__["FileUp"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 956,
                                                            columnNumber: 21
                                                        }, this),
                                                        uploadFiles.length ? uploadFiles.length > 1 ? t("{n} files selected", {
                                                            n: uploadFiles.length
                                                        }) : t("{n} file selected", {
                                                            n: uploadFiles.length
                                                        }) : t("Choose files...")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 951,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ref: uploadFileRef,
                                                    type: "file",
                                                    multiple: true,
                                                    className: "hidden",
                                                    onChange: (event)=>setUploadFiles(Array.from(event.target.files || []))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 963,
                                                    columnNumber: 19
                                                }, this),
                                                !!uploadFiles.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1.5",
                                                    children: uploadFiles.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-md bg-[var(--muted)] px-2 py-0.5 text-[11px] text-[var(--muted-foreground)]",
                                                            children: file.name
                                                        }, file.name, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 976,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 974,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: uploadToKnowledgeBase,
                                                    disabled: uploadDisabled,
                                                    className: "inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3.5 py-1.5 text-[13px] font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--muted)] disabled:cursor-not-allowed disabled:opacity-40",
                                                    children: [
                                                        uploadingKb ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "h-3.5 w-3.5 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 992,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 994,
                                                            columnNumber: 23
                                                        }, this),
                                                        t("Upload")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 986,
                                                    columnNumber: 19
                                                }, this),
                                                (uploadProcess.taskId || uploadProcess.logs.length > 0 || uploadProcess.executing) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        uploadProcess.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[11px] text-[var(--muted-foreground)]",
                                                            children: [
                                                                uploadProcess.label,
                                                                uploadProcess.taskId ? ` · ${uploadProcess.taskId}` : ""
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 1002,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProcessLogs, {
                                                            logs: uploadProcess.logs,
                                                            executing: uploadProcess.executing,
                                                            title: t("Upload Process")
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 1007,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 1000,
                                                    columnNumber: 21
                                                }, this),
                                                uploadProcess.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[12px] text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300",
                                                    children: uploadProcess.error
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 1016,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 913,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 905,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                            lineNumber: 805,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                            size: 15,
                                            className: "text-[var(--muted-foreground)]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1027,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-[14px] font-semibold text-[var(--foreground)]",
                                            children: t("Knowledge bases")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1028,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 1026,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        combinedKbs.map((kb)=>{
                                            const progress = kb.progress;
                                            const status = resolveKbStatus(kb);
                                            const needsReindex = kbNeedsReindex(kb);
                                            const displayStatus = needsReindex ? t("needs reindex") : status !== "ready" ? status.replaceAll("_", " ") : null;
                                            const percent = progress?.progress_percent ?? progress?.percent ?? ((progress?.current ?? 0) && (progress?.total ?? 0) ? Math.round((progress?.current ?? 0) / (progress?.total ?? 1) * 100) : 0);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "group rounded-lg border border-[var(--border)] bg-[var(--background)] p-4 transition-colors hover:border-[var(--foreground)]/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap items-start justify-between gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "text-[14px] font-medium text-[var(--foreground)]",
                                                                                children: kb.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                lineNumber: 1059,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            kb.is_default && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "inline-flex items-center gap-1 rounded-md bg-[var(--muted)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--muted-foreground)]",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                                        size: 10
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                        lineNumber: 1064,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    " ",
                                                                                    t("Default")
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                lineNumber: 1063,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                        lineNumber: 1058,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-[var(--muted-foreground)]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    t("Provider"),
                                                                                    ": ",
                                                                                    kb.statistics?.rag_provider || "llamaindex"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                lineNumber: 1069,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    t("Documents"),
                                                                                    ": ",
                                                                                    kb.statistics?.raw_documents ?? 0
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                lineNumber: 1070,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            displayStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: needsReindex ? "font-medium text-amber-600 dark:text-amber-400" : "capitalize",
                                                                                children: [
                                                                                    t("Status"),
                                                                                    ": ",
                                                                                    displayStatus
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                lineNumber: 1072,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                        lineNumber: 1068,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 1057,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5",
                                                                children: [
                                                                    !kb.is_default && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setDefaultKnowledgeBase(kb.name),
                                                                        className: "rounded-md border border-[var(--border)] px-2.5 py-1 text-[12px] text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]",
                                                                        children: t("Set default")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                        lineNumber: 1087,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>deleteKnowledgeBase(kb.name),
                                                                        className: "rounded-md border border-[var(--border)] p-1.5 text-[var(--muted-foreground)] transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:hover:border-red-900 dark:hover:bg-red-950/30 dark:hover:text-red-400",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            size: 13
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                            lineNumber: 1098,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                        lineNumber: 1094,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 1085,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                        lineNumber: 1056,
                                                        columnNumber: 23
                                                    }, this),
                                                    progress?.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 rounded-lg bg-[var(--muted)] p-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[12px] text-[var(--foreground)]",
                                                                children: progress.message
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 1105,
                                                                columnNumber: 27
                                                            }, this),
                                                            percent > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 h-1 overflow-hidden rounded-full bg-[var(--border)]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-full rounded-full bg-[var(--primary)] transition-all duration-300",
                                                                    style: {
                                                                        width: `${percent}%`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                    lineNumber: 1110,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 1109,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                        lineNumber: 1104,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, kb.name, true, {
                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                lineNumber: 1052,
                                                columnNumber: 21
                                            }, this);
                                        }),
                                        !combinedKbs.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-dashed border-[var(--border)] px-6 py-10 text-center text-[13px] text-[var(--muted-foreground)]",
                                            children: t("No knowledge bases yet. Create one to get started.")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1123,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 1033,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                            lineNumber: 1025,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                    lineNumber: 804,
                    columnNumber: 11
                }, this) : tab === "notebooks" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 15,
                                            className: "text-[var(--muted-foreground)]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1135,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-[14px] font-semibold text-[var(--foreground)]",
                                            children: t("Create notebook")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1136,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 1134,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-3 md:grid-cols-[1fr_1fr_auto]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: newNotebookName,
                                            onChange: (event)=>setNewNotebookName(event.target.value),
                                            placeholder: t("Notebook name"),
                                            className: "rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[13px] text-[var(--foreground)] outline-none transition-colors focus:border-[var(--foreground)]/25"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1142,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: newNotebookDescription,
                                            onChange: (event)=>setNewNotebookDescription(event.target.value),
                                            placeholder: t("Description"),
                                            className: "rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[13px] text-[var(--foreground)] outline-none transition-colors focus:border-[var(--foreground)]/25"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1148,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: createNotebook,
                                            disabled: !newNotebookName.trim(),
                                            className: "rounded-lg bg-[var(--primary)] px-3.5 py-2 text-[13px] font-medium text-[var(--primary-foreground)] disabled:cursor-not-allowed disabled:opacity-40",
                                            children: t("Create")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1154,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 1141,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                            lineNumber: 1133,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NotebookPen$3e$__["NotebookPen"], {
                                            size: 15,
                                            className: "text-[var(--muted-foreground)]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-[14px] font-semibold text-[var(--foreground)]",
                                            children: t("Notebooks")
                                        }, void 0, false, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1168,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 1166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-5 xl:grid-cols-[280px_minmax(0,1fr)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "xl:sticky xl:top-8 xl:max-h-[calc(100vh-12rem)] space-y-3 overflow-y-auto pr-1",
                                            children: [
                                                notebooks.map((notebook)=>{
                                                    const active = selectedNotebookId === notebook.id;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>void loadNotebookDetail(notebook.id),
                                                        className: `w-full rounded-xl border p-4 text-left transition-all ${active ? "border-indigo-200 bg-indigo-50/70 shadow-[0_8px_24px_rgba(99,102,241,0.08)] dark:border-indigo-800 dark:bg-indigo-950/25" : "border-[var(--border)] bg-[var(--background)] hover:border-[var(--foreground)]/12 hover:bg-[var(--muted)]/18"}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-1 h-3 w-3 rounded-full",
                                                                    style: {
                                                                        backgroundColor: notebook.color || "#6366f1"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                    lineNumber: 1188,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[14px] font-semibold text-[var(--foreground)]",
                                                                            children: notebook.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                            lineNumber: 1193,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        notebook.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-1 line-clamp-2 text-[12px] leading-relaxed text-[var(--muted-foreground)]",
                                                                            children: notebook.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                            lineNumber: 1197,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mt-3 flex items-center justify-between text-[11px] text-[var(--muted-foreground)]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: [
                                                                                        notebook.record_count ?? 0,
                                                                                        " ",
                                                                                        t("records")
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                    lineNumber: 1202,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: notebook.updated_at ? formatTimestamp(notebook.updated_at) : ""
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                    lineNumber: 1203,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                            lineNumber: 1201,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                    lineNumber: 1192,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 1187,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, notebook.id, false, {
                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                        lineNumber: 1178,
                                                        columnNumber: 23
                                                    }, this);
                                                }),
                                                !notebooks.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-xl border border-dashed border-[var(--border)] px-6 py-10 text-center text-[13px] text-[var(--muted-foreground)]",
                                                    children: t("No notebooks yet. Create one to organize outputs.")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 1212,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1174,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex min-h-[560px] flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 xl:h-[calc(100vh-12rem)]",
                                            children: loadingNotebookDetail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex min-h-[320px] items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-5 w-5 animate-spin text-[var(--muted-foreground)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 1221,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                lineNumber: 1220,
                                                columnNumber: 21
                                            }, this) : selectedNotebook ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex min-h-0 flex-1 flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-3 flex shrink-0 items-center justify-between gap-4 pb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-2.5 w-2.5 rounded-full",
                                                                        style: {
                                                                            backgroundColor: selectedNotebook.color || "#6366f1"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                        lineNumber: 1227,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-[15px] font-semibold text-[var(--foreground)]",
                                                                        children: selectedNotebook.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                        lineNumber: 1231,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    selectedNotebook.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[12px] text-[var(--muted-foreground)]",
                                                                        children: [
                                                                            "— ",
                                                                            selectedNotebook.description
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                        lineNumber: 1235,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 1226,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] tabular-nums text-[var(--muted-foreground)]",
                                                                children: [
                                                                    selectedNotebook.records?.length || 0,
                                                                    " ",
                                                                    t("records")
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 1240,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                        lineNumber: 1225,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-h-0 flex-1 overflow-y-auto pr-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "divide-y divide-[var(--border)]",
                                                            children: [
                                                                selectedNotebook.records?.map((record)=>{
                                                                    const badge = getRecordBadge(record.type);
                                                                    const BadgeIcon = badge.icon;
                                                                    const expanded = expandedRecordId === record.id;
                                                                    const canOpenSession = (record.type === "chat" || record.type === "guided_learning") && Boolean(record.metadata?.session_id);
                                                                    const sessionLabel = record.type === "chat" ? t("Open chat session") : t("Open guided learning session");
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "group",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setExpandedRecordId(expanded ? null : record.id),
                                                                                className: "flex w-full items-center gap-3 px-1 py-3.5 text-left transition-colors hover:bg-[var(--muted)]/30",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "shrink-0 text-[var(--muted-foreground)]",
                                                                                        children: expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                            size: 14
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                            lineNumber: 1265,
                                                                                            columnNumber: 47
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                                            size: 14
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                            lineNumber: 1265,
                                                                                            columnNumber: 75
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                        lineNumber: 1264,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: `inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium ${badge.color}`,
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BadgeIcon, {
                                                                                                size: 11
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                                lineNumber: 1268,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            badge.label
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                        lineNumber: 1267,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "min-w-0 flex-1 truncate text-[13px] font-medium text-[var(--foreground)]",
                                                                                        children: record.title
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                        lineNumber: 1271,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "shrink-0 text-[11px] tabular-nums text-[var(--muted-foreground)]",
                                                                                        children: formatTimestamp(record.created_at)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                        lineNumber: 1274,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                lineNumber: 1260,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "pb-4 pl-8 pr-1",
                                                                                children: [
                                                                                    record.summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "mb-3 text-[13px] leading-6 text-[var(--foreground)]/85",
                                                                                        children: record.summary
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                        lineNumber: 1283,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    record.type !== "chat" && record.user_query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mb-3 flex items-baseline gap-2 text-[12px]",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "shrink-0 font-medium text-[var(--muted-foreground)]",
                                                                                                children: t("Query:")
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                                lineNumber: 1289,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-[var(--foreground)]/70",
                                                                                                children: record.user_query
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                                lineNumber: 1290,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                        lineNumber: 1288,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    canOpenSession && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>openNotebookRecord(record),
                                                                                        className: "mb-3 inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3.5 py-2 text-[12px] font-medium text-[var(--foreground)] transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 dark:hover:border-indigo-700 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-300",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                                size: 13
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                                lineNumber: 1299,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            sessionLabel,
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                                                size: 13
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                                lineNumber: 1301,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                        lineNumber: 1295,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "max-h-[320px] overflow-y-auto rounded-lg border border-[var(--border)] bg-[var(--muted)]/30 p-3",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MarkdownRenderer, {
                                                                                            content: record.output || "",
                                                                                            variant: "prose",
                                                                                            className: "text-[12px] leading-5 text-[var(--foreground)]"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                            lineNumber: 1306,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                        lineNumber: 1305,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                                lineNumber: 1281,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, record.id, true, {
                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                        lineNumber: 1258,
                                                                        columnNumber: 29
                                                                    }, this);
                                                                }),
                                                                !selectedNotebook.records?.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-6 py-12 text-center text-[13px] text-[var(--muted-foreground)]",
                                                                    children: t("This notebook is empty for now.")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                    lineNumber: 1319,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 1246,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                        lineNumber: 1245,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                lineNumber: 1224,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-[var(--border)] text-[13px] text-[var(--muted-foreground)]",
                                                children: t("Select a notebook to inspect its saved records.")
                                            }, void 0, false, {
                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                lineNumber: 1327,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1218,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 1173,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                            lineNumber: 1165,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                    lineNumber: 1131,
                    columnNumber: 11
                }, this) : /* ── Questions tab content ── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mb-4 overflow-hidden rounded-xl border transition-colors ${qShowCategoryManager ? "border-[var(--border)] bg-[var(--card)]" : "border-[var(--border)]/50 bg-transparent"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setQShowCategoryManager((v)=>!v),
                                    className: "flex w-full items-center justify-between px-4 py-2.5 text-[13px] font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]/40",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                                    className: "h-3.5 w-3.5 text-[var(--muted-foreground)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 1345,
                                                    columnNumber: 19
                                                }, this),
                                                t("Manage Categories"),
                                                qCategories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full bg-[var(--muted)] px-1.5 py-0.5 text-[10px] text-[var(--muted-foreground)]",
                                                    children: qCategories.length
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 1348,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1344,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: `h-3.5 w-3.5 text-[var(--muted-foreground)] transition-transform duration-200 ${qShowCategoryManager ? "rotate-180" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1353,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 1340,
                                    columnNumber: 15
                                }, this),
                                qShowCategoryManager && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-[var(--border)] px-4 pb-4 pt-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1.5",
                                            children: [
                                                qCategories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-2 rounded-lg bg-[var(--muted)]/30 px-3 py-2",
                                                        children: [
                                                            qRenamingCat?.id === cat.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                autoFocus: true,
                                                                value: qRenamingCat.name,
                                                                onChange: (e)=>setQRenamingCat({
                                                                        ...qRenamingCat,
                                                                        name: e.target.value
                                                                    }),
                                                                onKeyDown: (e)=>{
                                                                    if (e.key === "Enter") void handleQRenameCategory();
                                                                    if (e.key === "Escape") setQRenamingCat(null);
                                                                },
                                                                onBlur: ()=>void handleQRenameCategory(),
                                                                className: "flex-1 rounded border border-[var(--border)] bg-[var(--background)] px-2 py-0.5 text-[12px] text-[var(--foreground)] outline-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 1362,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[12px] text-[var(--foreground)]",
                                                                children: [
                                                                    cat.name,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-1.5 text-[var(--muted-foreground)]",
                                                                        children: [
                                                                            "(",
                                                                            cat.entry_count,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                        lineNumber: 1373,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 1371,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setQRenamingCat({
                                                                                id: cat.id,
                                                                                name: cat.name
                                                                            }),
                                                                        className: "rounded p-1 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                            lineNumber: 1378,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                        lineNumber: 1377,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>void handleQDeleteCategory(cat.id),
                                                                        className: "rounded p-1 text-[var(--muted-foreground)] transition-colors hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-950/30",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                            lineNumber: 1381,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                        lineNumber: 1380,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 1376,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, cat.id, true, {
                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                        lineNumber: 1360,
                                                        columnNumber: 23
                                                    }, this)),
                                                !qCategories.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "py-2 text-center text-[12px] text-[var(--muted-foreground)]",
                                                    children: t("No categories yet.")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 1387,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1358,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: qNewCatName,
                                                    onChange: (e)=>setQNewCatName(e.target.value),
                                                    onKeyDown: (e)=>e.key === "Enter" && void handleQCreateCategory(),
                                                    placeholder: t("New category name..."),
                                                    className: "flex-1 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-[12px] text-[var(--foreground)] outline-none placeholder:text-[var(--muted-foreground)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 1393,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>void handleQCreateCategory(),
                                                    disabled: !qNewCatName.trim(),
                                                    className: "rounded-lg bg-[var(--primary)] px-3 py-1.5 text-[12px] font-medium text-white disabled:opacity-30",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        size: 13
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                        lineNumber: 1405,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 1400,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1392,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 1357,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                            lineNumber: 1339,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-5 flex items-center justify-between border-b border-[var(--border)]/50 pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 overflow-x-auto",
                                    children: [
                                        Q_FILTERS.map(({ mode, label })=>{
                                            const active = qFilter === mode && qActiveCategoryId === null;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setQFilter(mode);
                                                    setQActiveCategoryId(null);
                                                },
                                                className: `inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-[13px] transition-colors ${active ? "bg-[var(--muted)] font-medium text-[var(--foreground)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`,
                                                children: t(label)
                                            }, mode, false, {
                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                lineNumber: 1418,
                                                columnNumber: 21
                                            }, this);
                                        }),
                                        qCategories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mx-1 text-[var(--border)]",
                                            children: "|"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1432,
                                            columnNumber: 19
                                        }, this),
                                        qCategories.map((cat)=>{
                                            const active = qActiveCategoryId === cat.id;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setQActiveCategoryId(cat.id);
                                                    setQFilter("all");
                                                },
                                                className: `inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-[13px] transition-colors ${active ? "bg-[var(--muted)] font-medium text-[var(--foreground)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                        lineNumber: 1446,
                                                        columnNumber: 23
                                                    }, this),
                                                    cat.name
                                                ]
                                            }, cat.id, true, {
                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                lineNumber: 1437,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 1414,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shrink-0 text-[12px] text-[var(--muted-foreground)]",
                                    children: [
                                        t("Total"),
                                        ": ",
                                        qTotal
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 1452,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                            lineNumber: 1413,
                            columnNumber: 13
                        }, this),
                        qLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-h-[420px] items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-5 w-5 animate-spin text-[var(--muted-foreground)]"
                            }, void 0, false, {
                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                lineNumber: 1460,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                            lineNumber: 1459,
                            columnNumber: 15
                        }, this) : qError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-h-[320px] flex-col items-center justify-center rounded-xl border border-dashed border-red-300 text-center dark:border-red-900",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 rounded-xl bg-red-50 p-2.5 text-red-500 dark:bg-red-950/30",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                        lineNumber: 1465,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 1464,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[14px] font-medium text-[var(--foreground)]",
                                    children: t("Failed to load entries")
                                }, void 0, false, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 1467,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1.5 max-w-xs text-[13px] text-[var(--muted-foreground)]",
                                    children: qError
                                }, void 0, false, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 1470,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>void loadQItems(qFilter, qActiveCategoryId),
                                    className: "mt-3 rounded-lg bg-[var(--primary)] px-4 py-1.5 text-[12px] font-medium text-white",
                                    children: t("Retry")
                                }, void 0, false, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 1471,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                            lineNumber: 1463,
                            columnNumber: 15
                        }, this) : qItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-h-[320px] flex-col items-center justify-center rounded-xl border border-dashed border-[var(--border)] text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 rounded-xl bg-[var(--muted)] p-2.5 text-[var(--muted-foreground)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                        lineNumber: 1481,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 1480,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[14px] font-medium text-[var(--foreground)]",
                                    children: t("No entries yet")
                                }, void 0, false, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 1483,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1.5 max-w-xs text-[13px] text-[var(--muted-foreground)]",
                                    children: t("Questions from your quizzes will appear here.")
                                }, void 0, false, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 1486,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                            lineNumber: 1479,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex flex-col gap-3",
                            children: qItems.map((item)=>{
                                const disabled = qPendingId === item.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: `rounded-xl border border-[var(--border)] px-5 py-4 transition-opacity ${disabled ? "opacity-60" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 flex items-start justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-1.5 flex flex-wrap items-center gap-1.5",
                                                            children: [
                                                                item.difficulty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `rounded-md px-1.5 py-0.5 text-[10px] font-medium uppercase ${item.difficulty === "hard" ? "bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400" : item.difficulty === "medium" ? "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400" : "bg-green-50 text-green-600 dark:bg-green-950/30 dark:text-green-400"}`,
                                                                    children: item.difficulty
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                    lineNumber: 1506,
                                                                    columnNumber: 31
                                                                }, this),
                                                                item.question_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-md bg-[var(--muted)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--muted-foreground)]",
                                                                    children: item.question_type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                    lineNumber: 1515,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${item.is_correct ? "bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400"}`,
                                                                    children: item.is_correct ? t("Correct") : t("Incorrect")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                    lineNumber: 1519,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 1504,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[14px] font-medium text-[var(--foreground)]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MarkdownRenderer, {
                                                                content: item.question,
                                                                variant: "prose",
                                                                className: "text-[14px] leading-relaxed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 1528,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 1527,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 1503,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>void handleQToggleBookmark(item),
                                                            disabled: disabled,
                                                            title: item.bookmarked ? t("Remove Bookmark") : t("Bookmark"),
                                                            className: `rounded-lg p-1.5 transition-colors disabled:opacity-40 ${item.bookmarked ? "text-[var(--primary)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                                                className: "h-4 w-4",
                                                                fill: item.bookmarked ? "currentColor" : "none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 1546,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 1536,
                                                            columnNumber: 27
                                                        }, this),
                                                        qActiveCategoryId !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>void handleQRemoveFromCategory(item),
                                                            disabled: disabled,
                                                            title: t("Remove from category"),
                                                            className: "rounded-lg p-1.5 text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)] disabled:opacity-40",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 1555,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 1549,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>void handleQDelete(item),
                                                            disabled: disabled,
                                                            title: t("Delete"),
                                                            className: "rounded-lg p-1.5 text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)] disabled:opacity-40",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 1564,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 1558,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 1535,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1502,
                                            columnNumber: 23
                                        }, this),
                                        item.options && Object.keys(item.options).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 space-y-1.5",
                                            children: Object.entries(item.options).map(([key, text])=>{
                                                const isUserAnswer = item.user_answer?.toUpperCase() === key.toUpperCase();
                                                const isCorrectAnswer = item.correct_answer?.toUpperCase() === key.toUpperCase();
                                                const isWrongPick = isUserAnswer && !item.is_correct;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex items-start gap-2.5 rounded-lg border px-3 py-2 text-[13px] transition-colors ${isCorrectAnswer ? "border-green-200 bg-green-50/60 dark:border-green-900 dark:bg-green-950/20" : isWrongPick ? "border-red-200 bg-red-50/60 dark:border-red-900 dark:bg-red-950/20" : "border-transparent bg-[var(--muted)]/30"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `mt-px shrink-0 font-semibold ${isCorrectAnswer ? "text-green-600 dark:text-green-400" : isWrongPick ? "text-red-600 dark:text-red-400" : "text-[var(--muted-foreground)]"}`,
                                                            children: [
                                                                key,
                                                                "."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 1587,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `flex-1 ${isCorrectAnswer || isWrongPick ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"}`,
                                                            children: text
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 1596,
                                                            columnNumber: 33
                                                        }, this),
                                                        isCorrectAnswer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mt-px shrink-0 text-[10px] font-medium text-green-600 dark:text-green-400",
                                                            children: [
                                                                "✓ ",
                                                                t("Correct")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 1602,
                                                            columnNumber: 35
                                                        }, this),
                                                        isWrongPick && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mt-px shrink-0 text-[10px] font-medium text-red-600 dark:text-red-400",
                                                            children: [
                                                                "✗ ",
                                                                t("Your pick")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 1605,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, key, true, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 1577,
                                                    columnNumber: 31
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1571,
                                            columnNumber: 25
                                        }, this),
                                        (!item.options || Object.keys(item.options).length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 space-y-2 text-[13px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `rounded-lg border px-3 py-2.5 ${!item.is_correct ? "border-red-200/60 bg-red-50/40 dark:border-red-900/40 dark:bg-red-950/15" : "border-green-200/60 bg-green-50/40 dark:border-green-900/40 dark:bg-green-950/15"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `mb-1 text-[11px] font-medium uppercase tracking-wide ${!item.is_correct ? "text-red-500 dark:text-red-400" : "text-green-600 dark:text-green-400"}`,
                                                            children: [
                                                                t("Your Answer"),
                                                                " ",
                                                                item.is_correct ? "✓" : "✗"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 1621,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[var(--foreground)]",
                                                            children: item.user_answer ? item.question_type === "coding" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MarkdownRenderer, {
                                                                content: `\`\`\`python\n${item.user_answer}\n\`\`\``,
                                                                variant: "prose",
                                                                className: "text-[13px]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 1631,
                                                                columnNumber: 35
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MarkdownRenderer, {
                                                                content: item.user_answer,
                                                                variant: "prose",
                                                                className: "text-[13px] leading-relaxed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 1633,
                                                                columnNumber: 35
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[var(--muted-foreground)]",
                                                                children: "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 1636,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 1628,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 1616,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg border border-green-200/60 bg-green-50/40 px-3 py-2.5 dark:border-green-900/40 dark:bg-green-950/15",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-1 text-[11px] font-medium uppercase tracking-wide text-green-600 dark:text-green-400",
                                                            children: t("Reference Answer")
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 1641,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[var(--foreground)]",
                                                            children: item.correct_answer ? item.question_type === "coding" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MarkdownRenderer, {
                                                                content: item.correct_answer.trimStart().startsWith("```") ? item.correct_answer : `\`\`\`python\n${item.correct_answer}\n\`\`\``,
                                                                variant: "prose",
                                                                className: "text-[13px]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 1647,
                                                                columnNumber: 35
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MarkdownRenderer, {
                                                                content: item.correct_answer,
                                                                variant: "prose",
                                                                className: "text-[13px] leading-relaxed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 1649,
                                                                columnNumber: 35
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[var(--muted-foreground)]",
                                                                children: "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                lineNumber: 1652,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 1644,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 1640,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1615,
                                            columnNumber: 25
                                        }, this),
                                        item.explanation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 rounded-lg border border-blue-200/60 bg-blue-50/30 px-3 py-2.5 dark:border-blue-900/40 dark:bg-blue-950/15",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-1 text-[11px] font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400",
                                                    children: t("Explanation")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 1662,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[13px] leading-relaxed text-[var(--foreground)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MarkdownRenderer, {
                                                        content: item.explanation,
                                                        variant: "prose",
                                                        className: "text-[13px] leading-relaxed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                        lineNumber: 1666,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 1665,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1661,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/?session=${encodeURIComponent(item.session_id)}`,
                                                            className: "inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--muted)]/40 px-2.5 py-1 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                    size: 10
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                    lineNumber: 1678,
                                                                    columnNumber: 29
                                                                }, this),
                                                                item.session_title || t("Original Session")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 1674,
                                                            columnNumber: 27
                                                        }, this),
                                                        item.followup_session_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/?session=${encodeURIComponent(item.followup_session_id)}`,
                                                            className: "inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--muted)]/40 px-2.5 py-1 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                    size: 10
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                                    lineNumber: 1686,
                                                                    columnNumber: 31
                                                                }, this),
                                                                t("Follow-up")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                            lineNumber: 1682,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 1673,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[var(--muted-foreground)]",
                                                    children: new Date(item.created_at * 1000).toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                                    lineNumber: 1691,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                            lineNumber: 1672,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                                    lineNumber: 1495,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/(utility)/knowledge/page.tsx",
                            lineNumber: 1491,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(utility)/knowledge/page.tsx",
                    lineNumber: 1337,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(utility)/knowledge/page.tsx",
            lineNumber: 759,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(utility)/knowledge/page.tsx",
        lineNumber: 758,
        columnNumber: 5
    }, this);
}
function KnowledgePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-[50vh] items-center justify-center text-[13px] text-[var(--muted-foreground)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-5 w-5 animate-spin"
            }, void 0, false, {
                fileName: "[project]/app/(utility)/knowledge/page.tsx",
                lineNumber: 1710,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(utility)/knowledge/page.tsx",
            lineNumber: 1709,
            columnNumber: 9
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KnowledgePageContent, {}, void 0, false, {
            fileName: "[project]/app/(utility)/knowledge/page.tsx",
            lineNumber: 1714,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(utility)/knowledge/page.tsx",
        lineNumber: 1707,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_0-d_6rx._.js.map