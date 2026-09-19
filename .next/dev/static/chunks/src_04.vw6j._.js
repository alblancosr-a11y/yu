(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_SETTINGS",
    ()=>DEFAULT_SETTINGS,
    "defaultPoemStats",
    ()=>defaultPoemStats,
    "defaultVerseStats",
    ()=>defaultVerseStats,
    "loadState",
    ()=>loadState,
    "saveState",
    ()=>saveState
]);
const STORAGE_KEY = 'diwan_hafiz_v1';
const DEFAULT_SETTINGS = {
    darkMode: false,
    fontSize: 2,
    requireTashkeel: false,
    showVerseNumbers: true,
    speechRate: 0.85,
    speechPitch: 1.0
};
function defaultVerseStats(verseIndex) {
    return {
        verseIndex,
        attempts: 0,
        correct: 0,
        errors: 0,
        lastReviewed: null,
        memory: {
            standalone: 'new',
            contextual: 'new',
            transition: 'new',
            positional: 'new'
        },
        easeFactor: 2.5,
        interval: 1,
        repetitions: 0,
        nextReviewAt: Date.now(),
        sessionCorrect: 0,
        sessionErrors: 0,
        exerciseHistory: {}
    };
}
function defaultPoemStats(poemId) {
    return {
        poemId,
        verses: {},
        totalSessions: 0,
        totalCorrect: 0,
        totalErrors: 0,
        lastSession: null
    };
}
function getDefaultState() {
    return {
        poems: [],
        stats: {},
        settings: DEFAULT_SETTINGS,
        activeSessionPoemId: null,
        errorLog: [],
        successLog: []
    };
}
function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return getDefaultState();
        const parsed = JSON.parse(raw);
        return {
            ...getDefaultState(),
            ...parsed,
            settings: {
                ...DEFAULT_SETTINGS,
                ...parsed.settings || {}
            },
            errorLog: parsed.errorLog || [],
            successLog: parsed.successLog || []
        };
    } catch  {
        return getDefaultState();
    }
}
function saveState(state) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
        console.error('Failed to save state', e);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useAppState.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppState",
    ()=>useAppState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useAppState() {
    _s();
    const [state, setStateInternal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const saveTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAppState.useEffect": ()=>{
            const loaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadState"])();
            setStateInternal(loaded);
        }
    }["useAppState.useEffect"], []);
    const setState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAppState.useCallback[setState]": (updater)=>{
            setStateInternal({
                "useAppState.useCallback[setState]": (prev)=>{
                    if (!prev) return prev;
                    const next = updater(prev);
                    if (saveTimer.current) clearTimeout(saveTimer.current);
                    saveTimer.current = setTimeout({
                        "useAppState.useCallback[setState]": ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveState"])(next);
                        }
                    }["useAppState.useCallback[setState]"], 300);
                    return next;
                }
            }["useAppState.useCallback[setState]"]);
        }
    }["useAppState.useCallback[setState]"], []);
    const updateSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAppState.useCallback[updateSettings]": (settings)=>{
            setState({
                "useAppState.useCallback[updateSettings]": (prev)=>({
                        ...prev,
                        settings: {
                            ...prev.settings,
                            ...settings
                        }
                    })
            }["useAppState.useCallback[updateSettings]"]);
        }
    }["useAppState.useCallback[updateSettings]"], [
        setState
    ]);
    const addPoem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAppState.useCallback[addPoem]": (poem)=>{
            setState({
                "useAppState.useCallback[addPoem]": (prev)=>({
                        ...prev,
                        poems: [
                            ...prev.poems,
                            poem
                        ],
                        stats: {
                            ...prev.stats,
                            [poem.id]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPoemStats"])(poem.id)
                        }
                    })
            }["useAppState.useCallback[addPoem]"]);
        }
    }["useAppState.useCallback[addPoem]"], [
        setState
    ]);
    const updatePoem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAppState.useCallback[updatePoem]": (poem)=>{
            setState({
                "useAppState.useCallback[updatePoem]": (prev)=>({
                        ...prev,
                        poems: prev.poems.map({
                            "useAppState.useCallback[updatePoem]": (p)=>p.id === poem.id ? poem : p
                        }["useAppState.useCallback[updatePoem]"])
                    })
            }["useAppState.useCallback[updatePoem]"]);
        }
    }["useAppState.useCallback[updatePoem]"], [
        setState
    ]);
    const deletePoem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAppState.useCallback[deletePoem]": (poemId)=>{
            setState({
                "useAppState.useCallback[deletePoem]": (prev)=>{
                    const stats = {
                        ...prev.stats
                    };
                    delete stats[poemId];
                    return {
                        ...prev,
                        poems: prev.poems.filter({
                            "useAppState.useCallback[deletePoem]": (p)=>p.id !== poemId
                        }["useAppState.useCallback[deletePoem]"]),
                        stats,
                        activeSessionPoemId: prev.activeSessionPoemId === poemId ? null : prev.activeSessionPoemId,
                        errorLog: prev.errorLog.filter({
                            "useAppState.useCallback[deletePoem]": (e)=>e.poemId !== poemId
                        }["useAppState.useCallback[deletePoem]"]),
                        successLog: prev.successLog.filter({
                            "useAppState.useCallback[deletePoem]": (s)=>s.poemId !== poemId
                        }["useAppState.useCallback[deletePoem]"])
                    };
                }
            }["useAppState.useCallback[deletePoem]"]);
        }
    }["useAppState.useCallback[deletePoem]"], [
        setState
    ]);
    const updateVerseStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAppState.useCallback[updateVerseStats]": (poemId, verseStats)=>{
            setState({
                "useAppState.useCallback[updateVerseStats]": (prev)=>{
                    const poemStats = prev.stats[poemId] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPoemStats"])(poemId);
                    return {
                        ...prev,
                        stats: {
                            ...prev.stats,
                            [poemId]: {
                                ...poemStats,
                                verses: {
                                    ...poemStats.verses,
                                    [verseStats.verseIndex]: verseStats
                                }
                            }
                        }
                    };
                }
            }["useAppState.useCallback[updateVerseStats]"]);
        }
    }["useAppState.useCallback[updateVerseStats]"], [
        setState
    ]);
    const updateSessionStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAppState.useCallback[updateSessionStats]": (poemId, correct, errors)=>{
            setState({
                "useAppState.useCallback[updateSessionStats]": (prev)=>{
                    const poemStats = prev.stats[poemId] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPoemStats"])(poemId);
                    const today = new Date().toISOString().split('T')[0];
                    const poem = prev.poems.find({
                        "useAppState.useCallback[updateSessionStats].poem": (p)=>p.id === poemId
                    }["useAppState.useCallback[updateSessionStats].poem"]);
                    const updatedPoem = poem ? {
                        ...poem,
                        lastSession: Date.now(),
                        studyDays: poem.studyDays.includes(today) ? poem.studyDays : [
                            ...poem.studyDays,
                            today
                        ]
                    } : poem;
                    return {
                        ...prev,
                        poems: updatedPoem ? prev.poems.map({
                            "useAppState.useCallback[updateSessionStats]": (p)=>p.id === poemId ? updatedPoem : p
                        }["useAppState.useCallback[updateSessionStats]"]) : prev.poems,
                        stats: {
                            ...prev.stats,
                            [poemId]: {
                                ...poemStats,
                                totalSessions: poemStats.totalSessions + 1,
                                totalCorrect: poemStats.totalCorrect + correct,
                                totalErrors: poemStats.totalErrors + errors,
                                lastSession: Date.now()
                            }
                        }
                    };
                }
            }["useAppState.useCallback[updateSessionStats]"]);
        }
    }["useAppState.useCallback[updateSessionStats]"], [
        setState
    ]);
    const updateCurrentVerse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAppState.useCallback[updateCurrentVerse]": (poemId, verseIndex, markCompleted = false)=>{
            setState({
                "useAppState.useCallback[updateCurrentVerse]": (prev)=>({
                        ...prev,
                        poems: prev.poems.map({
                            "useAppState.useCallback[updateCurrentVerse]": (p)=>{
                                if (p.id !== poemId) return p;
                                const prevCompleted = p.lastCompletedVerseIndex ?? -1;
                                return {
                                    ...p,
                                    currentVerseIndex: Math.max(p.currentVerseIndex, verseIndex),
                                    lastCompletedVerseIndex: markCompleted ? Math.max(prevCompleted, verseIndex) : p.lastCompletedVerseIndex
                                };
                            }
                        }["useAppState.useCallback[updateCurrentVerse]"])
                    })
            }["useAppState.useCallback[updateCurrentVerse]"]);
        }
    }["useAppState.useCallback[updateCurrentVerse]"], [
        setState
    ]);
    const setActiveSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAppState.useCallback[setActiveSession]": (poemId)=>{
            setState({
                "useAppState.useCallback[setActiveSession]": (prev)=>({
                        ...prev,
                        activeSessionPoemId: poemId
                    })
            }["useAppState.useCallback[setActiveSession]"]);
        }
    }["useAppState.useCallback[setActiveSession]"], [
        setState
    ]);
    // ===== سجل الأخطاء =====
    const addErrorLogEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAppState.useCallback[addErrorLogEntry]": (entry)=>{
            setState({
                "useAppState.useCallback[addErrorLogEntry]": (prev)=>({
                        ...prev,
                        errorLog: [
                            ...prev.errorLog,
                            entry
                        ]
                    })
            }["useAppState.useCallback[addErrorLogEntry]"]);
        }
    }["useAppState.useCallback[addErrorLogEntry]"], [
        setState
    ]);
    const addSuccessLogEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAppState.useCallback[addSuccessLogEntry]": (entry)=>{
            setState({
                "useAppState.useCallback[addSuccessLogEntry]": (prev)=>({
                        ...prev,
                        successLog: [
                            ...prev.successLog,
                            entry
                        ]
                    })
            }["useAppState.useCallback[addSuccessLogEntry]"]);
        }
    }["useAppState.useCallback[addSuccessLogEntry]"], [
        setState
    ]);
    const forceSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAppState.useCallback[forceSave]": ()=>{
            if (state) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveState"])(state);
        }
    }["useAppState.useCallback[forceSave]"], [
        state
    ]);
    return {
        state,
        updateSettings,
        addPoem,
        updatePoem,
        deletePoem,
        updateVerseStats,
        updateSessionStats,
        updateCurrentVerse,
        setActiveSession,
        addErrorLogEntry,
        addSuccessLogEntry,
        forceSave
    };
}
_s(useAppState, "aH3Oq/H50d+nzL5UUaXudTtKVlg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GazelleIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * أيقونة فَطين — غزال أنيق وذكي (SVG بسيط، غير كرتوني)
 * ملف مشترك يُستخدم في جميع شاشات تحدي فطين
 */ __turbopack_context__.s([
    "default",
    ()=>GazelleIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function GazelleIcon({ size = 20, className = '', strokeWidth = 1.3 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 14Q7 7 4 2",
                stroke: "currentColor",
                strokeWidth: strokeWidth,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/GazelleIcon.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 14Q25 7 28 2",
                stroke: "currentColor",
                strokeWidth: strokeWidth,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/GazelleIcon.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.6 9.5Q6 8.8 5 7.4",
                stroke: "currentColor",
                strokeWidth: "1",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/GazelleIcon.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24.4 9.5Q26 8.8 27 7.4",
                stroke: "currentColor",
                strokeWidth: "1",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/GazelleIcon.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 17Q16 11 23 17Q21 23 16 25Q11 23 9 17Z",
                fill: "currentColor",
                opacity: "0.1"
            }, void 0, false, {
                fileName: "[project]/src/components/GazelleIcon.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 17Q16 11 23 17Q21 23 16 25Q11 23 9 17Z",
                stroke: "currentColor",
                strokeWidth: strokeWidth,
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/GazelleIcon.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12.6",
                cy: "16.8",
                r: "0.75",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/GazelleIcon.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16",
                cy: "22.6",
                r: "0.6",
                fill: "currentColor",
                opacity: "0.55"
            }, void 0, false, {
                fileName: "[project]/src/components/GazelleIcon.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GazelleIcon.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = GazelleIcon;
var _c;
__turbopack_context__.k.register(_c, "GazelleIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.mjs [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GazelleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GazelleIcon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const navItems = [
    {
        id: 'home',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        label: 'الرئيسية'
    },
    {
        id: 'poems',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        label: 'قصائدي'
    },
    {
        id: 'fateen',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GazelleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        label: 'تحدي فَطين',
        hint: 'جديد',
        separated: true
    },
    {
        id: 'stats',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        label: 'الإحصائيات',
        separated: true
    },
    {
        id: 'settings',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        label: 'الإعدادات'
    }
];
function Layout({ currentPage, onNavigate, darkMode, onToggleDark, children }) {
    _s();
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "hidden lg:flex flex-col w-56 shrink-0 glass-sidebar border-l border-[var(--border-0)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 pb-7",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-xl gradient-accent flex items-center justify-center shadow-sm shadow-[var(--accent)]/30",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                        size: 15,
                                        className: "text-white",
                                        strokeWidth: 1.8
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-lg font-bold leading-tight gradient-accent-text",
                                            style: {
                                                fontFamily: 'var(--font-brand)'
                                            },
                                            children: "مَدَارِج"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-[var(--text-3)] -mt-0.5",
                                            children: "حفظُ القصائد العربية"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Layout.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Layout.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 px-3 space-y-1",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    item.separated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "my-3 border-t border-[var(--border-0)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onNavigate(item.id),
                                        className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${currentPage === item.id ? 'bg-[var(--accent-light)] text-[var(--accent-text)] font-medium shadow-sm shadow-[var(--accent)]/10' : 'text-[var(--text-2)] hover:text-[var(--text-0)] hover:bg-[var(--bg-2)]'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                size: 16,
                                                strokeWidth: currentPage === item.id ? 2 : 1.5
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `flex-1 text-right ${item.id === 'fateen' ? 'font-bold' : ''}`,
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            item.hint && currentPage !== item.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-1.5 py-0.5 rounded-md text-[9px] font-medium bg-[var(--accent-light)] text-[var(--accent-text)] border border-[var(--border-1)]",
                                                children: item.hint
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout.tsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Layout.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/components/Layout.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 border-t border-[var(--border-0)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onToggleDark,
                            className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[var(--text-2)] hover:text-[var(--text-0)] hover:bg-[var(--bg-2)] transition-all duration-200",
                            children: [
                                darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                    size: 16,
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout.tsx",
                                    lineNumber: 89,
                                    columnNumber: 25
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                    size: 16,
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout.tsx",
                                    lineNumber: 89,
                                    columnNumber: 63
                                }, this),
                                darkMode ? 'وضع نهاري' : 'وضع ليلي'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Layout.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Layout.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden fixed inset-0 z-40 flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-64 glass-modal flex flex-col animate-slide-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-7 h-7 rounded-lg gradient-accent flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                                    size: 13,
                                                    className: "text-white",
                                                    strokeWidth: 1.8
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Layout.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-base font-bold gradient-accent-text",
                                                style: {
                                                    fontFamily: 'var(--font-brand)'
                                                },
                                                children: "مَدَارِج"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Layout.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSidebarOpen(false),
                                        className: "p-1 rounded-lg text-[var(--text-2)] hover:text-[var(--text-0)] hover:bg-[var(--bg-2)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 18,
                                            strokeWidth: 1.5
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Layout.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex-1 px-3 space-y-1",
                                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            item.separated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "my-3 border-t border-[var(--border-0)]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout.tsx",
                                                lineNumber: 114,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    onNavigate(item.id);
                                                    setSidebarOpen(false);
                                                },
                                                className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${currentPage === item.id ? 'bg-[var(--accent-light)] text-[var(--accent-text)] font-medium' : 'text-[var(--text-2)] hover:text-[var(--text-0)] hover:bg-[var(--bg-2)]'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                        size: 16,
                                                        strokeWidth: 1.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Layout.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `flex-1 text-right ${item.id === 'fateen' ? 'font-bold' : ''}`,
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Layout.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 21
                                                    }, this),
                                                    item.hint && currentPage !== item.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-1.5 py-0.5 rounded-md text-[9px] font-medium bg-[var(--accent-light)] text-[var(--accent-text)] border border-[var(--border-1)]",
                                                        children: item.hint
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Layout.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Layout.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/src/components/Layout.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 border-t border-[var(--border-0)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onToggleDark,
                                    className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[var(--text-2)] hover:bg-[var(--bg-2)]",
                                    children: [
                                        darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                            size: 16,
                                            strokeWidth: 1.5
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout.tsx",
                                            lineNumber: 139,
                                            columnNumber: 29
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                            size: 16,
                                            strokeWidth: 1.5
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout.tsx",
                                            lineNumber: 139,
                                            columnNumber: 67
                                        }, this),
                                        darkMode ? 'وضع نهاري' : 'وضع ليلي'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Layout.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Layout.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-black/30 backdrop-blur-sm",
                        onClick: ()=>setSidebarOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Layout.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "lg:hidden glass-header flex items-center border-b border-[var(--border-0)] px-1 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSidebarOpen(true),
                                className: "w-11 h-11 flex items-center justify-center rounded-lg text-[var(--text-1)] hover:text-[var(--text-0)] hover:bg-[var(--bg-2)] shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 24,
                                    strokeWidth: 1.8
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout.tsx",
                                    lineNumber: 158,
                                    columnNumber: 5
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout.tsx",
                                lineNumber: 154,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-bold gradient-accent-text",
                                    style: {
                                        fontFamily: 'var(--font-brand)'
                                    },
                                    children: "مَدَارج"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout.tsx",
                                    lineNumber: 163,
                                    columnNumber: 5
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout.tsx",
                                lineNumber: 162,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onToggleDark,
                                className: "w-11 h-11 flex items-center justify-center rounded-lg text-[var(--text-2)] hover:text-[var(--text-0)] hover:bg-[var(--bg-2)] shrink-0",
                                children: darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                    size: 24,
                                    strokeWidth: 1.8
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout.tsx",
                                    lineNumber: 177,
                                    columnNumber: 7
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                    size: 24,
                                    strokeWidth: 1.8
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout.tsx",
                                    lineNumber: 179,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout.tsx",
                                lineNumber: 172,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Layout.tsx",
                        lineNumber: 151,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 overflow-y-auto page-container py-6 lg:py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/components/Layout.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Layout.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Layout.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(Layout, "5rGDkYpGQ8fHM9RkMWnKOwsxadk=");
_c = Layout;
var _c;
__turbopack_context__.k.register(_c, "Layout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/algorithm.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applySM2",
    ()=>applySM2,
    "buildChainQueue",
    ()=>buildChainQueue,
    "buildCumulativeQueue",
    ()=>buildCumulativeQueue,
    "buildReviewQueue",
    ()=>buildReviewQueue,
    "buildWhereAmIQueue",
    ()=>buildWhereAmIQueue,
    "calcLearnDays",
    ()=>calcLearnDays,
    "calcMemorizationRate",
    ()=>calcMemorizationRate,
    "calcStreak",
    ()=>calcStreak,
    "detectWeakTransitions",
    ()=>detectWeakTransitions,
    "formatTimeSince",
    ()=>formatTimeSince,
    "getEligibleExercises",
    ()=>getEligibleExercises,
    "getOverallProgress",
    ()=>getOverallProgress,
    "getStabilityLabel",
    ()=>getStabilityLabel,
    "getStabilityOrder",
    ()=>getStabilityOrder,
    "getWeakVerseIndices",
    ()=>getWeakVerseIndices,
    "isDueForReview",
    ()=>isDueForReview,
    "requeueError",
    ()=>requeueError,
    "selectExerciseType",
    ()=>selectExerciseType,
    "updateStability",
    ()=>updateStability,
    "updateVerseStatsAfterAnswer",
    ()=>updateVerseStatsAfterAnswer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage.ts [app-client] (ecmascript)");
;
const REPS_TO_PROMOTE = {
    new: 1,
    learning: 2,
    weak: 3,
    medium: 4,
    strong: 5,
    mastered: 999
};
function getStabilityLabel(level) {
    const labels = {
        new: 'جديد',
        learning: 'قيد الحفظ',
        weak: 'ضعيف',
        medium: 'متوسط',
        strong: 'ثابت',
        mastered: 'متقن'
    };
    return labels[level];
}
function getStabilityOrder(level) {
    const order = {
        new: 0,
        learning: 1,
        weak: 2,
        medium: 3,
        strong: 4,
        mastered: 5
    };
    return order[level];
}
function qualityToNumber(quality) {
    switch(quality){
        case 'mastered':
            return 5;
        case 'correct':
            return 4;
        case 'review':
            return 2;
        case 'wrong':
            return 0;
    }
}
function promoteLevel(level) {
    const levels = [
        'new',
        'learning',
        'weak',
        'medium',
        'strong',
        'mastered'
    ];
    const idx = levels.indexOf(level);
    return levels[Math.min(idx + 1, levels.length - 1)];
}
function demoteLevel(level, steps) {
    const levels = [
        'new',
        'learning',
        'weak',
        'medium',
        'strong',
        'mastered'
    ];
    const idx = levels.indexOf(level);
    return levels[Math.max(idx - steps, 0)];
}
function applySM2(stats, quality) {
    const qualityNum = qualityToNumber(quality);
    let { easeFactor, interval, repetitions } = stats;
    if (qualityNum < 3) {
        repetitions = 0;
        interval = 1;
    } else {
        repetitions += 1;
        if (repetitions === 1) {
            interval = 1;
        } else if (repetitions === 2) {
            interval = 6;
        } else {
            interval = Math.round(interval * easeFactor);
        }
    }
    easeFactor = easeFactor + (0.1 - (5 - qualityNum) * (0.08 + (5 - qualityNum) * 0.02));
    if (easeFactor < 1.3) easeFactor = 1.3;
    if (easeFactor > 4.0) easeFactor = 4.0;
    const nextReviewAt = Date.now() + interval * 60 * 1000;
    return {
        ...stats,
        easeFactor,
        interval,
        repetitions,
        nextReviewAt,
        lastReviewed: Date.now()
    };
}
function updateStability(stats, quality) {
    const current = stats.memory.standalone;
    if (quality === 'mastered' || quality === 'correct') {
        const newReps = stats.repetitions + 1;
        if (newReps >= REPS_TO_PROMOTE[current]) {
            return promoteLevel(current);
        }
        return current;
    } else if (quality === 'review') {
        return demoteLevel(current, 1);
    } else {
        return demoteLevel(current, 2);
    }
}
function getEligibleExercises(stability, hasAjar, verseIndex, totalVerses) {
    const exercises = [];
    switch(stability){
        case 'new':
        case 'learning':
            exercises.push('complete_verse');
            if (hasAjar) {
                exercises.push('sadr_to_ajar');
                exercises.push('fill_blank');
            }
            break;
        case 'weak':
            exercises.push('complete_verse');
            exercises.push('fill_blank');
            if (hasAjar) {
                exercises.push('sadr_to_ajar');
                exercises.push('ajar_to_sadr');
                exercises.push('fill_blanks');
            }
            break;
        case 'medium':
            exercises.push('fill_blank');
            exercises.push('fill_blanks');
            if (hasAjar) {
                exercises.push('sadr_to_ajar');
                exercises.push('ajar_to_sadr');
            }
            exercises.push('word_order');
            if (verseIndex > 0) exercises.push('prev_verse');
            if (verseIndex < totalVerses - 1) exercises.push('next_verse');
            break;
        case 'strong':
            if (hasAjar) {
                exercises.push('sadr_to_ajar');
                exercises.push('ajar_to_sadr');
            }
            exercises.push('first_word');
            exercises.push('word_order');
            exercises.push('write_all');
            if (verseIndex > 0) exercises.push('prev_verse');
            if (verseIndex < totalVerses - 1) exercises.push('next_verse');
            break;
        case 'mastered':
            exercises.push('first_word');
            exercises.push('write_all');
            if (verseIndex > 0) exercises.push('prev_verse');
            if (verseIndex < totalVerses - 1) exercises.push('next_verse');
            break;
    }
    return exercises.length > 0 ? exercises : [
        'complete_verse'
    ];
}
function selectExerciseType(stats, verses, verseIndex) {
    const verse = verses[verseIndex];
    const hasAjar = Boolean(verse?.ajar?.trim());
    const eligible = getEligibleExercises(stats.memory.standalone, hasAjar, verseIndex, verses.length);
    const weights = eligible.map((type)=>{
        const history = stats.exerciseHistory[type];
        if (!history) return 1;
        const errorRate = history.errors / Math.max(history.correct + history.errors, 1);
        return 1 + errorRate * 2;
    });
    const totalWeight = weights.reduce((a, b)=>a + b, 0);
    let rand = Math.random() * totalWeight;
    for(let i = 0; i < eligible.length; i++){
        rand -= weights[i];
        if (rand <= 0) return eligible[i];
    }
    return eligible[0];
}
function buildCumulativeQueue(verses, statsMap, maxVerseReached, newVerseIndex) {
    const queue = [];
    const now = Date.now();
    if (newVerseIndex !== null && newVerseIndex < verses.length) {
        const verse = verses[newVerseIndex];
        const hasAjar = Boolean(verse.ajar.trim());
        queue.push({
            verseIndex: newVerseIndex,
            exerciseType: 'complete_verse',
            priority: 3,
            attempts: 0
        });
        if (hasAjar) {
            queue.push({
                verseIndex: newVerseIndex,
                exerciseType: 'sadr_to_ajar',
                priority: 3,
                attempts: 0
            });
        }
        queue.push({
            verseIndex: newVerseIndex,
            exerciseType: 'fill_blank',
            priority: 3,
            attempts: 0
        });
    }
    const dueVerses = [];
    for(let i = 0; i <= Math.min(maxVerseReached, verses.length - 1); i++){
        const stats = statsMap[i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultVerseStats"])(i);
        const overdue = now - stats.nextReviewAt;
        if (overdue >= 0 || stats.memory.standalone === 'new') {
            if (i === newVerseIndex) continue;
            dueVerses.push({
                index: i,
                stats,
                overdue: Math.max(overdue, 0)
            });
        }
    }
    dueVerses.sort((a, b)=>{
        const aScore = a.stats.memory.standalone === 'new' ? 100 : a.overdue + (a.stats.errors - a.stats.correct) * 0.1;
        const bScore = b.stats.memory.standalone === 'new' ? 100 : b.overdue + (b.stats.errors - b.stats.correct) * 0.1;
        return bScore - aScore;
    });
    const sessionVerses = dueVerses.slice(0, 14);
    for (const { index, stats } of sessionVerses){
        const exerciseType = selectExerciseType(stats, verses, index);
        queue.push({
            verseIndex: index,
            exerciseType,
            priority: stats.memory.standalone === 'new' ? 2 : 1,
            attempts: 0
        });
    }
    if (maxVerseReached >= 4) {
        const chainVerses = selectChainVerses(verses, statsMap, maxVerseReached);
        for (const idx of chainVerses){
            if (!queue.find((q)=>q.verseIndex === idx)) {
                queue.push({
                    verseIndex: idx,
                    exerciseType: 'next_verse',
                    priority: 0,
                    attempts: 0
                });
            }
        }
    }
    return queue;
}
function selectChainVerses(verses, _statsMap, maxVerse) {
    const count = Math.min(maxVerse + 1, verses.length);
    if (count <= 1) return [];
    const selected = [
        0
    ];
    if (maxVerse > 0) selected.push(maxVerse);
    const mid = Math.floor(maxVerse / 2);
    if (!selected.includes(mid)) selected.push(mid);
    const rand = Math.floor(Math.random() * (maxVerse + 1));
    if (!selected.includes(rand)) selected.push(rand);
    return selected.sort((a, b)=>a - b);
}
function buildChainQueue(verses, statsMap, maxVerseReached) {
    const queue = [];
    const exerciseTypes = [
        'complete_verse',
        'sadr_to_ajar',
        'fill_blank',
        'next_verse',
        'write_all'
    ];
    for(let i = 0; i <= Math.min(maxVerseReached, verses.length - 1); i++){
        const stats = statsMap[i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultVerseStats"])(i);
        const verse = verses[i];
        const hasAjar = Boolean(verse.ajar.trim());
        let type = exerciseTypes[i % exerciseTypes.length];
        if (!hasAjar && (type === 'sadr_to_ajar' || type === 'ajar_to_sadr')) {
            type = 'complete_verse';
        }
        if (type === 'next_verse' && i >= verses.length - 1) {
            type = 'write_all';
        }
        queue.push({
            verseIndex: i,
            exerciseType: type,
            priority: stats.errors > stats.correct ? 2 : 1,
            attempts: 0
        });
    }
    return queue;
}
function buildWhereAmIQueue(verses, statsMap, maxVerseReached) {
    const queue = [];
    const candidates = Array.from({
        length: Math.min(maxVerseReached + 1, verses.length)
    }, (_, i)=>i).filter((i)=>{
        const stats = statsMap[i];
        return stats && stats.memory.standalone !== 'new';
    });
    for(let i = candidates.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [candidates[i], candidates[j]] = [
            candidates[j],
            candidates[i]
        ];
    }
    const selected = candidates.slice(0, 8);
    for (const idx of selected){
        if (idx > 0) queue.push({
            verseIndex: idx,
            exerciseType: 'prev_verse',
            priority: 1,
            attempts: 0
        });
        if (idx < verses.length - 1) queue.push({
            verseIndex: idx,
            exerciseType: 'next_verse',
            priority: 1,
            attempts: 0
        });
    }
    return queue;
}
function buildReviewQueue(verses, statsMap, maxVerseReached) {
    const queue = [];
    const now = Date.now();
    for(let i = 0; i <= Math.min(maxVerseReached, verses.length - 1); i++){
        const stats = statsMap[i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultVerseStats"])(i);
        if (stats.memory.standalone === 'new') continue;
        const overdue = now - stats.nextReviewAt;
        if (overdue >= 0) {
            const exerciseType = selectExerciseType(stats, verses, i);
            queue.push({
                verseIndex: i,
                exerciseType,
                priority: stats.errors > stats.correct ? 2 : 1,
                attempts: 0
            });
        }
    }
    queue.sort((a, b)=>b.priority - a.priority);
    return queue;
}
function updateVerseStatsAfterAnswer(stats, quality, exerciseType) {
    const isCorrect = quality === 'mastered' || quality === 'correct';
    const newSM2 = applySM2(stats, quality);
    const newStandaloneLevel = updateStability(stats, quality);
    const exHistory = {
        ...stats.exerciseHistory
    };
    const prev = exHistory[exerciseType] || {
        correct: 0,
        errors: 0
    };
    exHistory[exerciseType] = {
        correct: prev.correct + (isCorrect ? 1 : 0),
        errors: prev.errors + (isCorrect ? 0 : 1)
    };
    const memory = {
        ...stats.memory,
        standalone: newStandaloneLevel
    };
    const newStats = {
        ...newSM2
    };
    return {
        ...newStats,
        attempts: stats.attempts + 1,
        correct: stats.correct + (isCorrect ? 1 : 0),
        errors: stats.errors + (isCorrect ? 0 : 1),
        sessionCorrect: stats.sessionCorrect + (isCorrect ? 1 : 0),
        sessionErrors: stats.sessionErrors + (isCorrect ? 0 : 1),
        exerciseHistory: exHistory,
        memory
    };
}
function requeueError(queue, item, verses, _stats) {
    const verse = verses[item.verseIndex];
    const hasAjar = Boolean(verse?.ajar?.trim());
    const currentType = item.exerciseType;
    const alternatives = [
        'complete_verse',
        'fill_blank',
        'sadr_to_ajar',
        'write_all'
    ].filter((t)=>t !== currentType && (hasAjar || t !== 'sadr_to_ajar' && t !== 'ajar_to_sadr'));
    const newType = alternatives[Math.floor(Math.random() * alternatives.length)] || 'complete_verse';
    const insertAt = Math.min(queue.length, 2);
    const newQueue = [
        ...queue
    ];
    newQueue.splice(insertAt, 0, {
        verseIndex: item.verseIndex,
        exerciseType: newType,
        priority: 2,
        attempts: item.attempts + 1
    });
    return newQueue;
}
function detectWeakTransitions(statsMap, maxVerse) {
    const weak = [];
    for(let i = 0; i <= maxVerse; i++){
        const s = statsMap[i];
        if (!s || s.memory.transition === 'new' || s.memory.transition === 'weak') {
            weak.push(i);
        }
    }
    return weak;
}
function isDueForReview(stats) {
    if (!stats) return true;
    return Date.now() >= stats.nextReviewAt || stats.memory.standalone === 'new';
}
function getOverallProgress(statsMap, totalVerses) {
    let mastered = 0, strong = 0, medium = 0, weak = 0, learning = 0, newCount = 0;
    for(let i = 0; i < totalVerses; i++){
        const stats = statsMap[i];
        const level = stats?.memory.standalone || 'new';
        switch(level){
            case 'mastered':
                mastered++;
                break;
            case 'strong':
                strong++;
                break;
            case 'medium':
                medium++;
                break;
            case 'weak':
                weak++;
                break;
            case 'learning':
                learning++;
                break;
            default:
                newCount++;
                break;
        }
    }
    return {
        mastered,
        strong,
        medium,
        weak,
        learning,
        newCount
    };
}
function getWeakVerseIndices(statsMap, totalVerses) {
    const weakIndices = [];
    for(let i = 0; i < totalVerses; i++){
        const stats = statsMap[i];
        if (!stats) continue;
        // البيت ضعيف إذا كان لديه خطأ فعلي مسجل ومستواه لم يتعافَ بعد
        if (stats.errors === 0) continue;
        const level = stats.memory.standalone;
        // إذا وصل إلى strong أو mastered رغم الأخطاء يعتبر تعافى
        if (level === 'strong' || level === 'mastered') continue;
        // الأولوية: الأكثر خطأً أولًا، ثم الأضعف مستوىً
        const levelPriority = {
            weak: 0,
            learning: 1,
            medium: 2,
            new: 3,
            strong: 10,
            mastered: 10
        };
        const priority = levelPriority[level] + (stats.errors > stats.correct ? 0 : 5);
        weakIndices.push({
            index: i,
            priority
        });
    }
    weakIndices.sort((a, b)=>a.priority - b.priority);
    return weakIndices.map((w)=>w.index);
}
function calcMemorizationRate(statsMap, totalVerses) {
    if (totalVerses === 0) return 0;
    let memorized = 0;
    for(let i = 0; i < totalVerses; i++){
        const stats = statsMap[i];
        const level = stats?.memory.standalone || 'new';
        if (level === 'medium' || level === 'strong' || level === 'mastered') {
            memorized++;
        }
    }
    return Math.round(memorized / totalVerses * 100);
}
function calcStreak(days) {
    if (!days.length) return 0;
    const sorted = [
        ...new Set(days)
    ].sort().reverse();
    const today = new Date().toISOString().split('T')[0];
    let streak = 0;
    let check = today;
    for (const d of sorted){
        if (d === check) {
            streak++;
            const dt = new Date(check);
            dt.setDate(dt.getDate() - 1);
            check = dt.toISOString().split('T')[0];
        } else if (d < check) {
            break;
        }
    }
    return streak;
}
function calcLearnDays(days) {
    return new Set(days).size;
}
function formatTimeSince(timestamp) {
    if (!timestamp) return 'لم تبدأ جلسة بعد';
    const diffMs = Date.now() - timestamp;
    const diffMin = Math.floor(diffMs / 60000);
    const diffH = Math.floor(diffMs / 3600000);
    const diffD = Math.floor(diffMs / 86400000);
    if (diffMin < 2) return 'منذ لحظات';
    if (diffMin < 60) return `منذ ${diffMin} دقيقة`;
    if (diffH < 24) return `منذ ${diffH} ساعة`;
    if (diffD === 1) return 'منذ يوم';
    if (diffD < 30) return `منذ ${diffD} يومًا`;
    const diffM = Math.floor(diffD / 30);
    return `منذ ${diffM} شهر`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "Button",
    ()=>Button,
    "Card",
    ()=>Card,
    "Input",
    ()=>Input,
    "ProgressBar",
    ()=>ProgressBar,
    "TextArea",
    ()=>TextArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Button({ variant = 'primary', size = 'md', className = '', children, ...props }) {
    const base = 'inline-flex items-center justify-center gap-2 font-bold transition-all duration-200 cursor-pointer rounded-xl disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap px-6 shrink-0';
    const variants = {
        primary: `bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] active:scale-[0.95] shadow-md shadow-[var(--accent)]/10`,
        secondary: `bg-[var(--accent-light)] text-[var(--accent-text)] border border-[var(--border-1)] hover:bg-[var(--accent-glow)]`,
        ghost: `bg-transparent text-[var(--text-2)] hover:text-[var(--text-0)] hover:bg-[var(--bg-2)]`,
        danger: `bg-[var(--error)] text-white hover:opacity-90 shadow-md shadow-[var(--error)]/10`
    };
    const sizes = {
        sm: 'h-9 text-xs',
        md: 'h-11 text-sm',
        lg: 'h-14 text-base px-8'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `${base} ${variants[variant]} ${sizes[size]} ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/ui.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c = Button;
function Card({ children, className = '', hover = false, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: `glass-card rounded-2xl ${hover ? 'hover:border-[var(--border-2)] hover:shadow-[0_2px_8px_rgba(30,27,58,0.07),0_8px_32px_rgba(99,102,241,0.06)] transition-all duration-200 cursor-pointer' : ''} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/ui.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c1 = Card;
function Badge({ children, variant = 'default' }) {
    const variants = {
        default: 'bg-[var(--bg-2)] text-[var(--text-2)] border border-[var(--border-0)]',
        accent: 'bg-[var(--accent-light)] text-[var(--accent-text)] border border-[var(--border-1)]',
        success: 'bg-[var(--success-light)] text-[var(--success)] border border-[var(--success)]/20',
        warning: 'bg-[var(--warning-light)] text-[var(--warning)] border border-[var(--warning)]/20',
        error: 'bg-[var(--error-light)] text-[var(--error)] border border-[var(--error)]/20'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold whitespace-nowrap leading-none ${variants[variant]}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/ui.tsx",
        lineNumber: 41,
        columnNumber: 10
    }, this);
}
_c2 = Badge;
function ProgressBar({ value, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `h-1.5 rounded-full bg-[var(--bg-3)] overflow-hidden ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full rounded-full gradient-accent transition-all duration-500 ease-out",
            style: {
                width: `${Math.min(100, Math.max(0, value))}%`
            }
        }, void 0, false, {
            fileName: "[project]/src/ui.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/ui.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c3 = ProgressBar;
function Input({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        className: `w-full px-4 py-3 rounded-2xl border border-[var(--border-1)] bg-white/10 dark:bg-black/10 text-[var(--text-0)] text-sm font-bold placeholder:text-[var(--text-3)] placeholder:font-normal focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/10 transition-all duration-200 outline-none ${className || ''}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/ui.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c4 = Input;
function TextArea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: `w-full px-4 py-3 pr-[26px] rounded-2xl border border-[var(--border-1)] bg-white/10 dark:bg-black/10 text-[var(--text-0)] text-sm font-bold placeholder:text-[var(--text-3)] placeholder:font-normal focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/10 transition-all duration-200 outline-none resize-none ${className || ''}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/ui.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c5 = TextArea;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Button");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "Badge");
__turbopack_context__.k.register(_c3, "ProgressBar");
__turbopack_context__.k.register(_c4, "Input");
__turbopack_context__.k.register(_c5, "TextArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/algorithm.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GazelleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GazelleIcon.tsx [app-client] (ecmascript)");
;
;
;
;
;
function Dashboard({ state, onStudy, onNavigate, todaySection }) {
    const { poems, stats } = state;
    const now = Date.now();
    let totalVerses = 0;
    let masteredVerses = 0;
    let dueForReview = 0;
    for (const poem of poems){
        totalVerses += poem.verses.length;
        const pStats = stats[poem.id];
        if (pStats) {
            const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverallProgress"])(pStats.verses, poem.verses.length);
            masteredVerses += p.mastered + p.strong;
            if (Object.values(pStats.verses).some((v)=>now >= v.nextReviewAt)) dueForReview++;
        }
    }
    const masteryRate = totalVerses > 0 ? Math.round(masteredVerses / totalVerses * 100) : 0;
    const lastStudied = [
        ...poems
    ].sort((a, b)=>(b.lastSession || 0) - (a.lastSession || 0))[0];
    const greeting = ()=>{
        const h = new Date().getHours();
        if (h < 12) return 'صباح الخير';
        if (h < 18) return 'مساء الخير';
        return 'مساء الخير';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 lg:gap-5 pb-20 pt-2 lg:pt-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-0 px-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl lg:text-2xl font-bold text-[var(--text-0)] leading-tight",
                        children: greeting()
                    }, void 0, false, {
                        fileName: "[project]/src/components/Dashboard.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--text-2)] leading-tight -mt-0.5",
                        children: poems.length === 0 ? 'أضيفي قصيدة وابدئي رحلة الحفظ' : 'واصلي رحلة حفظ القصائد العربية'
                    }, void 0, false, {
                        fileName: "[project]/src/components/Dashboard.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Dashboard.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            todaySection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: todaySection
            }, void 0, false, {
                fileName: "[project]/src/components/Dashboard.tsx",
                lineNumber: 53,
                columnNumber: 18
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5",
                children: [
                    {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
                        label: 'القصائد',
                        value: poems.length
                    },
                    {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
                        label: 'أبيات متقنة',
                        value: masteredVerses
                    },
                    {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                        label: 'للمراجعة',
                        value: dueForReview
                    },
                    {
                        icon: null,
                        label: 'معدل الإتقان',
                        value: `${masteryRate}%`
                    }
                ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "py-5 px-5 flex flex-col items-center justify-center gap-2.5 min-w-0 shadow-sm text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-2 min-w-0 w-full pt-1 relative top-1",
                                children: [
                                    stat.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                        size: 16,
                                        className: "text-[var(--text-3)] shrink-0",
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-[var(--text-3)] font-bold uppercase tracking-tight truncate leading-normal",
                                        children: stat.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 71,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 63,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-extrabold text-[var(--text-0)] tabular-nums leading-[1.2] py-0.5 truncate",
                                children: stat.value
                            }, void 0, false, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 75,
                                columnNumber: 8
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/Dashboard.tsx",
                        lineNumber: 62,
                        columnNumber: 7
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Dashboard.tsx",
                lineNumber: 55,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                hover: true,
                className: "px-8 h-[80px] overflow-hidden shadow-md flex items-center",
                onClick: ()=>onNavigate('fateen'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-5 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-2xl bg-[var(--accent-light)] flex items-center justify-center shrink-0 shadow-sm border border-[var(--accent)]/10 relative right-[12px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GazelleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                size: 28,
                                className: "text-[var(--accent)] shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 86,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Dashboard.tsx",
                            lineNumber: 85,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0 flex flex-col gap-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-[var(--text-0)] leading-none",
                                            children: "تحدي فَطين"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Dashboard.tsx",
                                            lineNumber: 91,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "accent",
                                            children: "جديد"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Dashboard.tsx",
                                            lineNumber: 92,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Dashboard.tsx",
                                    lineNumber: 90,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[var(--text-2)] font-medium leading-tight -mt-0.5",
                                    children: "كلمةٌ واحدة من كل بيت... فهل تستحضرين البيت كاملًا؟"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Dashboard.tsx",
                                    lineNumber: 94,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Dashboard.tsx",
                            lineNumber: 89,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "shrink-0 mr-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full bg-[var(--accent)] text-white flex items-center justify-center shadow-lg shadow-[var(--accent)]/30 relative left-[12px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    size: 20,
                                    strokeWidth: 3
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Dashboard.tsx",
                                    lineNumber: 101,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 100,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Dashboard.tsx",
                            lineNumber: 99,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Dashboard.tsx",
                    lineNumber: 84,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Dashboard.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            lastStudied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-bold text-[var(--text-2)] uppercase tracking-wider px-1",
                        children: "متابعة الحفظ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Dashboard.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        hover: true,
                        className: "p-5 flex flex-col gap-4",
                        onClick: ()=>onStudy(lastStudied),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0 flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-[var(--text-0)] text-base truncate leading-tight",
                                                children: lastStudied.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Dashboard.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-[var(--text-2)] truncate leading-tight",
                                                children: lastStudied.poet
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Dashboard.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            onStudy(lastStudied);
                                        },
                                        className: "shrink-0 rounded-full w-10 h-10 p-0 min-h-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            size: 16,
                                            strokeWidth: 2.5,
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Dashboard.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressBar"], {
                                            value: (()=>{
                                                const pStats = stats[lastStudied.id];
                                                if (!pStats) return 0;
                                                const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverallProgress"])(pStats.verses, lastStudied.verses.length);
                                                return Math.round((p.mastered + p.strong) / lastStudied.verses.length * 100);
                                            })(),
                                            className: "flex-1 h-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Dashboard.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-[var(--text-3)] font-medium tabular-nums text-left",
                                        children: [
                                            Math.min(lastStudied.currentVerseIndex + 1, lastStudied.verses.length),
                                            " من ",
                                            lastStudied.verses.length,
                                            " بيت"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Dashboard.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Dashboard.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-1 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-extrabold text-[var(--text-3)] uppercase tracking-[0.1em]",
                                children: "قصائدك"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onNavigate('poems'),
                                className: "text-xs font-extrabold text-[var(--accent)] hover:underline underline-offset-4",
                                children: "عرض الكل ←"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Dashboard.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    poems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-10 flex flex-col items-center gap-4 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-0.5 relative top-[4px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base font-bold text-[var(--text-1)]",
                                        children: "لم تضيفي أي قصيدة بعد"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[var(--text-3)] leading-tight",
                                        children: "أضيفي أول قصيدة وابدئي رحلة حفظها"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "primary",
                                onClick: ()=>onNavigate('poems'),
                                className: "!px-[30px] relative -top-[6px]",
                                children: "إضافة قصيدة"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Dashboard.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3",
                        children: poems.slice(0, 5).map((poem)=>{
                            const pStats = stats[poem.id];
                            const progress = pStats ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverallProgress"])(pStats.verses, poem.verses.length) : null;
                            const learnedPct = progress ? Math.round((progress.mastered + progress.strong) / poem.verses.length * 100) : 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                hover: true,
                                className: "p-4",
                                onClick: ()=>onStudy(poem),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0 flex flex-col gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-[var(--text-0)] text-sm truncate leading-tight",
                                                    children: poem.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Dashboard.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-[var(--text-3)] truncate leading-tight",
                                                    children: poem.poet
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Dashboard.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Dashboard.tsx",
                                            lineNumber: 162,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-end gap-1.5 shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        progress && progress.mastered > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "success",
                                                            children: "متقن"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Dashboard.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 63
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-bold text-[var(--text-2)] tabular-nums",
                                                            children: [
                                                                learnedPct,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Dashboard.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Dashboard.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressBar"], {
                                                    value: learnedPct,
                                                    className: "w-24 h-1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Dashboard.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Dashboard.tsx",
                                            lineNumber: 166,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Dashboard.tsx",
                                    lineNumber: 161,
                                    columnNumber: 19
                                }, this)
                            }, poem.id, false, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 160,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/Dashboard.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Dashboard.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Dashboard.tsx",
        lineNumber: 43,
        columnNumber: 4
    }, this);
}
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PoemsPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PoemsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.mjs [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/algorithm.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function PoemsPage({ state, onAdd, onStudy, onRead, onStats, onDelete }) {
    _s();
    const { poems, stats } = state;
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6 lg:gap-10 pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-1 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-[var(--text-0)] leading-tight",
                                children: "قصائدي"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PoemsPage.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[var(--text-3)] font-bold mt-1 uppercase tracking-tight",
                                children: [
                                    poems.length,
                                    " ",
                                    poems.length === 1 ? 'قصيدة' : 'قصائد',
                                    " في مكتبتك"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PoemsPage.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PoemsPage.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "primary",
                        onClick: onAdd,
                        className: "shrink-0 shadow-lg shadow-[var(--accent)]/20 !px-[30px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 16,
                                strokeWidth: 3
                            }, void 0, false, {
                                fileName: "[project]/src/components/PoemsPage.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "إضافة قصيدة"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PoemsPage.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PoemsPage.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PoemsPage.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            poems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--text-1)] mb-1",
                        children: "لم تضيفي أي قصيدة بعد"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PoemsPage.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-[var(--text-3)] mb-6",
                        children: "أضيفي قصيدة وابدئي حفظها بالتكرار المتباعد"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PoemsPage.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "primary",
                        onClick: onAdd,
                        className: "!px-[30px]",
                        children: "إضافة قصيدة"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PoemsPage.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PoemsPage.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: poems.map((poem)=>{
                    const pStats = stats[poem.id];
                    const progress = pStats ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverallProgress"])(pStats.verses, poem.verses.length) : null;
                    const learnedPct = progress ? Math.round((progress.mastered + progress.strong) / poem.verses.length * 100) : 0;
                    const currentVerse = Math.min(poem.currentVerseIndex + 1, poem.verses.length);
                    const isDue = pStats && Object.values(pStats.verses).some((v)=>Date.now() >= v.nextReviewAt);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-6 shadow-sm flex flex-col gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0 flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold text-[var(--text-0)] truncate leading-none",
                                                        children: poem.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PoemsPage.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 23
                                                    }, this),
                                                    isDue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "warning",
                                                        children: "للمراجعة"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PoemsPage.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PoemsPage.tsx",
                                                lineNumber: 54,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-[var(--text-3)] font-bold truncate leading-tight uppercase tracking-tight",
                                                children: [
                                                    poem.poet,
                                                    " · ",
                                                    poem.verses.length,
                                                    " بيت"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PoemsPage.tsx",
                                                lineNumber: 58,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PoemsPage.tsx",
                                        lineNumber: 53,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "primary",
                                                size: "sm",
                                                onClick: ()=>onStudy(poem),
                                                className: "h-9 px-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        size: 14,
                                                        strokeWidth: 3,
                                                        fill: "currentColor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PoemsPage.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "hidden sm:inline",
                                                        children: "ابدئي الحفظ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PoemsPage.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PoemsPage.tsx",
                                                lineNumber: 63,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setMenuOpen(menuOpen === poem.id ? null : poem.id),
                                                className: "w-9 h-9 rounded-xl flex items-center justify-center text-[var(--text-3)] hover:text-[var(--text-0)] hover:bg-[var(--bg-2)] transition-all border border-[var(--border-0)]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                    size: 18,
                                                    strokeWidth: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PoemsPage.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PoemsPage.tsx",
                                                lineNumber: 67,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PoemsPage.tsx",
                                        lineNumber: 62,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PoemsPage.tsx",
                                lineNumber: 52,
                                columnNumber: 17
                            }, this),
                            poem.verses[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-2xl bg-[var(--bg-2)] border border-[var(--border-0)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[var(--text-1)] font-bold truncate text-center leading-relaxed",
                                    style: {
                                        fontFamily: 'var(--font-poem)'
                                    },
                                    children: [
                                        poem.verses[0].sadr,
                                        poem.verses[0].ajar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--text-3)] mx-3",
                                            children: "◇"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PoemsPage.tsx",
                                            lineNumber: 81,
                                            columnNumber: 47
                                        }, this),
                                        poem.verses[0].ajar
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PoemsPage.tsx",
                                    lineNumber: 79,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PoemsPage.tsx",
                                lineNumber: 78,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-6 px-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 flex items-center gap-3 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressBar"], {
                                                value: learnedPct,
                                                className: "flex-1 h-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PoemsPage.tsx",
                                                lineNumber: 89,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-extrabold text-[var(--text-2)] tabular-nums",
                                                children: [
                                                    learnedPct,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PoemsPage.tsx",
                                                lineNumber: 90,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PoemsPage.tsx",
                                        lineNumber: 88,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 shrink-0",
                                        children: [
                                            progress && progress.mastered > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "success",
                                                children: [
                                                    progress.mastered,
                                                    " متقن"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PoemsPage.tsx",
                                                lineNumber: 93,
                                                columnNumber: 59
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] text-[var(--text-3)] font-bold opacity-60 tabular-nums",
                                                children: [
                                                    "البيت ",
                                                    currentVerse
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PoemsPage.tsx",
                                                lineNumber: 94,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PoemsPage.tsx",
                                        lineNumber: 92,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PoemsPage.tsx",
                                lineNumber: 87,
                                columnNumber: 17
                            }, this),
                            menuOpen === poem.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 pt-3 border-t border-[var(--border-0)] flex items-center gap-2 animate-fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: ()=>{
                                            onRead(poem);
                                            setMenuOpen(null);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                size: 12,
                                                strokeWidth: 1.5
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PoemsPage.tsx",
                                                lineNumber: 102,
                                                columnNumber: 23
                                            }, this),
                                            "قراءة"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PoemsPage.tsx",
                                        lineNumber: 101,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: ()=>{
                                            onStats(poem);
                                            setMenuOpen(null);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                size: 12,
                                                strokeWidth: 1.5
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PoemsPage.tsx",
                                                lineNumber: 106,
                                                columnNumber: 23
                                            }, this),
                                            "إحصائيات"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PoemsPage.tsx",
                                        lineNumber: 105,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: ()=>{
                                            onDelete(poem);
                                            setMenuOpen(null);
                                        },
                                        className: "text-[var(--error)] hover:text-[var(--error)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                size: 12,
                                                strokeWidth: 1.5
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PoemsPage.tsx",
                                                lineNumber: 110,
                                                columnNumber: 23
                                            }, this),
                                            "حذف"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PoemsPage.tsx",
                                        lineNumber: 109,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PoemsPage.tsx",
                                lineNumber: 100,
                                columnNumber: 19
                            }, this)
                        ]
                    }, poem.id, true, {
                        fileName: "[project]/src/components/PoemsPage.tsx",
                        lineNumber: 51,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/PoemsPage.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PoemsPage.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(PoemsPage, "u3B5o4jLaxSJSiAffhOYYQzMIHQ=");
_c = PoemsPage;
var _c;
__turbopack_context__.k.register(_c, "PoemsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/poem-parser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareAnswers",
    ()=>compareAnswers,
    "normalizeForComparison",
    ()=>normalizeForComparison,
    "parsePoem",
    ()=>parsePoem,
    "removeTashkeel",
    ()=>removeTashkeel,
    "splitVerse",
    ()=>splitVerse
]);
function parsePoem(rawText) {
    const lines = rawText.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n').map((line)=>line.trim()).filter((line)=>line.length > 0);
    const cleanedLines = lines.map((line)=>line.replace(/^[\d٠-٩]+[.\-)] \s*/, '').trim()).filter((line)=>line.length > 0);
    if (cleanedLines.length === 0) return [];
    const verses = [];
    const explicitSeparators = [
        ' | ',
        ' / ',
        ' // ',
        ' *** ',
        ' --- ',
        '|',
        '/'
    ];
    let i = 0;
    while(i < cleanedLines.length){
        const line = cleanedLines[i];
        const separatorResult = trySplitBySeparator(line, explicitSeparators);
        if (separatorResult) {
            verses.push({
                index: verses.length,
                text: line,
                sadr: separatorResult.sadr,
                ajar: separatorResult.ajar
            });
            i++;
        } else if (i + 1 < cleanedLines.length) {
            const sadr = cleanedLines[i];
            const ajar = cleanedLines[i + 1];
            const nextHasSeparator = trySplitBySeparator(ajar, explicitSeparators);
            if (nextHasSeparator) {
                verses.push({
                    index: verses.length,
                    text: sadr,
                    sadr,
                    ajar: ''
                });
                i++;
            } else {
                verses.push({
                    index: verses.length,
                    text: `${sadr}  ${ajar}`,
                    sadr,
                    ajar
                });
                i += 2;
            }
        } else {
            verses.push({
                index: verses.length,
                text: line,
                sadr: line,
                ajar: ''
            });
            i++;
        }
    }
    return verses;
}
function trySplitBySeparator(text, separators) {
    for (const sep of separators){
        const parts = text.split(sep);
        if (parts.length === 2) {
            const sadr = parts[0].trim();
            const ajar = parts[1].trim();
            if (sadr.length > 0 && ajar.length > 0) {
                return {
                    sadr,
                    ajar
                };
            }
        }
    }
    const commaIdx = text.indexOf('،');
    if (commaIdx > 0 && commaIdx < text.length - 2) {
        const before = text.slice(0, commaIdx).trim();
        const after = text.slice(commaIdx + 1).trim();
        const beforeWords = before.split(/\s+/).length;
        const afterWords = after.split(/\s+/).length;
        if (beforeWords >= 2 && afterWords >= 2) {
            return {
                sadr: before,
                ajar: after
            };
        }
    }
    return null;
}
function splitVerse(text, index) {
    const explicitSeparators = [
        ' | ',
        ' / ',
        ' // ',
        ' *** ',
        ' --- ',
        '|',
        '/'
    ];
    const result = trySplitBySeparator(text, explicitSeparators);
    if (result) {
        return {
            index,
            text,
            sadr: result.sadr,
            ajar: result.ajar
        };
    }
    const words = text.split(/\s+/);
    if (words.length >= 4) {
        const mid = Math.ceil(words.length / 2);
        return {
            index,
            text,
            sadr: words.slice(0, mid).join(' '),
            ajar: words.slice(mid).join(' ')
        };
    }
    return {
        index,
        text,
        sadr: text,
        ajar: ''
    };
}
function removeTashkeel(text) {
    return text.replace(/[\u064B-\u065F\u0670]/g, '');
}
function normalizeForComparison(text, options = {}) {
    let t = text;
    if (options.ignoreTashkeel) {
        t = removeTashkeel(t);
    }
    if (options.ignorePunctuation) {
        t = t.replace(/[،؛؟!.،;?!'"«»()\[\]{}\-_ـ]/g, ' ');
    }
    if (options.ignoreSpaces) {
        t = t.replace(/\s+/g, '');
    } else {
        t = t.replace(/\s+/g, ' ').trim();
    }
    t = t.replace(/[أإآ]/g, 'ا');
    t = t.replace(/[ى]/g, 'ي');
    t = t.replace(/ة/g, 'ه');
    t = t.replace(/ؤ/g, 'و');
    t = t.replace(/ئ/g, 'ي');
    t = t.replace(/لا/g, 'لا');
    return t.trim();
}
function compareAnswers(userAnswer, correctAnswer, options) {
    const normOpts = {
        ignoreTashkeel: !options.requireTashkeel,
        ignorePunctuation: true
    };
    const userNorm = normalizeForComparison(userAnswer, normOpts);
    const correctNorm = normalizeForComparison(correctAnswer, normOpts);
    if (userNorm === correctNorm) {
        return {
            isCorrect: true,
            similarity: 1,
            quality: 'mastered',
            diffTokens: correctAnswer.split(/\s+/).filter(Boolean).map((w)=>({
                    text: w,
                    type: 'correct'
                }))
        };
    }
    const userWords = userNorm.split(/\s+/).filter(Boolean);
    const correctWords = correctNorm.split(/\s+/).filter(Boolean);
    const originalWords = correctAnswer.split(/\s+/).filter(Boolean);
    if (correctWords.length === 0) {
        return {
            isCorrect: false,
            similarity: 0,
            quality: 'wrong',
            diffTokens: []
        };
    }
    const diffTokens = computeDiff(userWords, correctWords, originalWords);
    const correctCount = diffTokens.filter((t)=>t.type === 'correct').length;
    const total = Math.max(diffTokens.length, 1);
    const similarity = correctCount / total;
    let quality;
    if (similarity >= 0.95) {
        quality = 'mastered';
    } else if (similarity >= 0.8) {
        quality = 'correct';
    } else if (similarity >= 0.5) {
        quality = 'review';
    } else {
        quality = 'wrong';
    }
    if (quality === 'wrong' || quality === 'review') {
        const userWordSet = new Set(userWords);
        const matchCount = correctWords.filter((w)=>userWordSet.has(w)).length;
        const setSimilarity = matchCount / correctWords.length;
        if (setSimilarity >= 0.9 && similarity < 0.8) {
            quality = 'correct';
            return {
                isCorrect: true,
                similarity: setSimilarity,
                quality,
                diffTokens
            };
        }
    }
    return {
        isCorrect: similarity >= 0.8,
        similarity,
        quality,
        diffTokens
    };
}
function computeDiff(userWords, correctWords, originalWords) {
    const m = userWords.length;
    const n = correctWords.length;
    const dp = Array.from({
        length: m + 1
    }, ()=>new Array(n + 1).fill(0));
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if (userWords[i - 1] === correctWords[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    const tokens = [];
    let i = m, j = n;
    while(i > 0 || j > 0){
        if (i > 0 && j > 0 && userWords[i - 1] === correctWords[j - 1]) {
            tokens.unshift({
                text: originalWords[j - 1] || correctWords[j - 1],
                type: 'correct'
            });
            i--;
            j--;
        } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
            tokens.unshift({
                text: originalWords[j - 1] || correctWords[j - 1],
                type: 'missing'
            });
            j--;
        } else {
            tokens.unshift({
                text: userWords[i - 1],
                type: 'extra'
            });
            i--;
        }
    }
    return tokens;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AddPoemModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddPoemModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/poem-parser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function AddPoemModal({ onClose, onAdd, editPoem }) {
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editPoem?.title || '');
    const [poet, setPoet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editPoem?.poet || '');
    const [rawText, setRawText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editPoem?.rawText || '');
    const [verses, setVerses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editPoem?.verses || []);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddPoemModal.useEffect": ()=>{
            setVerses(rawText.trim() ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePoem"])(rawText) : []);
        }
    }["AddPoemModal.useEffect"], [
        rawText
    ]);
    const handleSubmit = ()=>{
        if (!rawText.trim()) {
            setError('أدخلي نص القصيدة');
            return;
        }
        if (!verses.length) {
            setError('لم يُتعرف على أبيات — كل سطرين بيت');
            return;
        }
        onAdd({
            id: editPoem?.id || crypto.randomUUID(),
            title: title.trim() || 'قصيدة بدون عنوان',
            poet: poet.trim() || 'شاعر غير معروف',
            rawText: rawText.trim(),
            verses,
            createdAt: editPoem?.createdAt || Date.now(),
            updatedAt: Date.now(),
            currentVerseIndex: editPoem?.currentVerseIndex || 0,
            lastCompletedVerseIndex: editPoem?.lastCompletedVerseIndex ?? -1,
            lastSession: editPoem?.lastSession || null,
            studyDays: editPoem?.studyDays || []
        });
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg glass-modal rounded-2xl overflow-hidden animate-scale-in",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-5 py-4 border-b border-[var(--border-0)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm font-semibold text-[var(--text-0)] me-8 relative -left-[10px]",
                            children: editPoem ? 'تعديل القصيدة' : 'إضافة قصيدة'
                        }, void 0, false, {
                            fileName: "[project]/src/components/AddPoemModal.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1.5 rounded-lg text-[var(--text-1)] hover:text-[var(--text-0)] hover:bg-[var(--bg-2)] transition-colors relative left-[8px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 16,
                                strokeWidth: 1.5
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddPoemModal.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/AddPoemModal.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AddPoemModal.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-8 flex flex-col gap-6 max-h-[75vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold text-[var(--text-1)] px-1 uppercase tracking-wider relative -left-[10px]",
                                    children: "اسم القصيدة"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AddPoemModal.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            size: 16,
                                            className: "absolute right-[6px] top-[6px] text-[var(--text-3)] pointer-events-none opacity-40",
                                            strokeWidth: 2.5
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddPoemModal.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            value: title,
                                            onChange: (e)=>setTitle(e.target.value),
                                            placeholder: "مثال: قصيدة بمَ التعلّل",
                                            className: "pr-[80px] [text-indent:22px]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddPoemModal.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AddPoemModal.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AddPoemModal.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold text-[var(--text-1)] px-1 uppercase tracking-wider relative -left-[10px]",
                                    children: "الشاعر"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AddPoemModal.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            size: 16,
                                            className: "absolute right-[6px] top-[6px] text-[var(--text-3)] pointer-events-none opacity-40",
                                            strokeWidth: 2.5
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddPoemModal.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            value: poet,
                                            onChange: (e)=>setPoet(e.target.value),
                                            placeholder: "مثال: المتنبي",
                                            className: "pr-[80px] [text-indent:22px]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddPoemModal.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AddPoemModal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AddPoemModal.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-end px-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold text-[var(--text-1)] uppercase tracking-wider relative -left-[10px]",
                                            children: "نص القصيدة"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddPoemModal.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[12px] text-[var(--text-1)] font-bold opacity-60 relative left-[10px]",
                                            children: "كل سطرين = بيت واحد"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddPoemModal.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AddPoemModal.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextArea"], {
                                    value: rawText,
                                    onChange: (e)=>{
                                        setRawText(e.target.value);
                                        setError('');
                                    },
                                    placeholder: "بمَ التعلّلُ لا أهلٌ وَلا وَطَنُ\nولا ندِيمٌ وَلا كأسٌ وَلا سكَنُ",
                                    rows: 8,
                                    dir: "rtl",
                                    style: {
                                        fontFamily: 'var(--font-poem)',
                                        fontSize: '1rem',
                                        lineHeight: '2',
                                        paddingRight: '16px',
                                        paddingTop: '10px'
                                    },
                                    className: "bg-white/5 dark:bg-black/20"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AddPoemModal.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AddPoemModal.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AddPoemModal.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-5 py-4 border-t border-[var(--border-0)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "sm",
                            className: "w-auto px-4 relative -left-[10px]",
                            onClick: onClose,
                            children: "إلغاء"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AddPoemModal.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "primary",
                            size: "sm",
                            className: "!w-[70px] !min-w-[70px] !h-[26px] !px-0 relative -right-[10px]",
                            onClick: handleSubmit,
                            children: editPoem ? 'حفظ' : 'إضافة'
                        }, void 0, false, {
                            fileName: "[project]/src/components/AddPoemModal.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AddPoemModal.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AddPoemModal.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/AddPoemModal.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(AddPoemModal, "YoBmkqvlKsR1AU0BZuHvRvigUGg=");
_c = AddPoemModal;
var _c;
__turbopack_context__.k.register(_c, "AddPoemModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/exercises.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateComprehensiveReview",
    ()=>generateComprehensiveReview,
    "generateLevel1",
    ()=>generateLevel1,
    "generateLevel2",
    ()=>generateLevel2,
    "generateLevel3",
    ()=>generateLevel3,
    "generateLevel4Phase1",
    ()=>generateLevel4Phase1,
    "generateLevel4Phase2",
    ()=>generateLevel4Phase2,
    "generateLevel5",
    ()=>generateLevel5,
    "generateLevel6",
    ()=>generateLevel6,
    "generateLevelExercises",
    ()=>generateLevelExercises,
    "generatePairReview",
    ()=>generatePairReview,
    "getArabicVerseOrdinal",
    ()=>getArabicVerseOrdinal,
    "getExerciseLabel",
    ()=>getExerciseLabel,
    "getLevelLabel",
    ()=>getLevelLabel,
    "getSegmentLabel",
    ()=>getSegmentLabel,
    "getVerseSegments",
    ()=>getVerseSegments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/poem-parser.ts [app-client] (ecmascript)");
;
// ===== تسميات الأبيات الترتيبية («البيت الأول»، «البيت الثاني»، إلخ) =====
const ARABIC_ORDINALS = [
    'الأول',
    'الثاني',
    'الثالث',
    'الرابع',
    'الخامس',
    'السادس',
    'السابع',
    'الثامن',
    'التاسع',
    'العاشر',
    'الحادي عشر',
    'الثاني عشر',
    'الثالث عشر',
    'الرابع عشر',
    'الخامس عشر',
    'السادس عشر',
    'السابع عشر',
    'الثامن عشر',
    'التاسع عشر',
    'العشرون',
    'الحادي والعشرون',
    'الثاني والعشرون',
    'الثالث والعشرون',
    'الرابع والعشرون',
    'الخامس والعشرون',
    'السادس والعشرون',
    'السابع والعشرون',
    'الثامن والعشرون',
    'التاسع والعشرون',
    'الثلاثون'
];
function getArabicVerseOrdinal(index) {
    if (index >= 0 && index < ARABIC_ORDINALS.length) {
        return `البيت ${ARABIC_ORDINALS[index]}`;
    }
    return `البيت ${index + 1}`;
}
const SEGMENT_ORDINALS = [
    'الأول',
    'الثاني',
    'الثالث',
    'الرابع',
    'الخامس',
    'السادس',
    'السابع',
    'الثامن',
    'التاسع',
    'العاشر',
    'الحادي عشر',
    'الثاني عشر',
    'الثالث عشر',
    'الرابع عشر',
    'الخامس عشر'
];
function getSegmentLabel(groupIdx) {
    if (groupIdx >= 0 && groupIdx < SEGMENT_ORDINALS.length) {
        return `المقطع ${SEGMENT_ORDINALS[groupIdx]}`;
    }
    return `المقطع ${groupIdx + 1}`;
}
function getVerseSegments(verses) {
    const segments = [];
    for(let i = 0; i < verses.length; i += 4){
        const group = verses.slice(i, i + 4);
        const groupIdx = segments.length;
        const title = getSegmentLabel(groupIdx);
        const firstNum = group[0].index + 1;
        const lastNum = group[group.length - 1].index + 1;
        const range = firstNum === lastNum ? `البيت ${firstNum}` : `الأبيات ${firstNum} – ${lastNum}`;
        segments.push({
            verses: group,
            title,
            range
        });
    }
    return segments;
}
// ===== كلمات سهلة يجب تجنبها عند اختيار الكلمات المحذوفة =====
const EASY_WORDS = new Set([
    'في',
    'من',
    'إلى',
    'على',
    'عن',
    'مع',
    'حتى',
    'لدى',
    'بين',
    'و',
    'أو',
    'ثم',
    'ف',
    'ب',
    'ل',
    'ك',
    'التي',
    'الذي',
    'اللذان',
    'اللتيا',
    'هل',
    'لا',
    'لم',
    'لن',
    'قد',
    'ما',
    'من',
    'إن',
    'أن',
    'هذا',
    'هذه',
    'ذلك',
    'تلك',
    'هو',
    'هي',
    'هم',
    'هن',
    'يا',
    'أي',
    'كل',
    'بعض'
]);
function isSignificantWord(word) {
    const clean = word.replace(/[\u064B-\u065F\u0670]/g, '').replace(/[،؛؟!.،;?!'"«»()\[\]{}\-_ـ]/g, '');
    return clean.length >= 2 && !EASY_WORDS.has(clean);
}
/** تقسيم البيت المعروض مع الفراغات إلى شطرين (صدر وعجز) */ function buildDisplayedHalves(verse, words, removedPositions) {
    const sadrWords = verse.sadr.split(/\s+/).filter(Boolean);
    const sadrCount = sadrWords.length;
    const hasAjar = Boolean(verse.ajar && verse.ajar.trim().length > 0 && words.length > sadrCount);
    if (!hasAjar) {
        const line = words.map((w, i)=>removedPositions.includes(i) ? '______' : w).join(' ');
        return {
            displayedSadr: line,
            displayedAjar: ''
        };
    }
    const displayedSadr = words.slice(0, sadrCount).map((w, i)=>removedPositions.includes(i) ? '______' : w).join(' ');
    const displayedAjar = words.slice(sadrCount).map((w, j)=>removedPositions.includes(sadrCount + j) ? '______' : w).join(' ');
    return {
        displayedSadr,
        displayedAjar
    };
}
function generateLevel1(verse, allVerses) {
    const distractorVerses = [];
    const otherVerses = allVerses.filter((v)=>v.index !== verse.index);
    const shuffled = [
        ...otherVerses
    ];
    for(let i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [
            shuffled[j],
            shuffled[i]
        ];
    }
    for (const v of shuffled){
        if (distractorVerses.length >= 3) break;
        distractorVerses.push({
            text: v.text,
            sadr: v.sadr,
            ajar: v.ajar
        });
    }
    // إذا لم تكفِ الأبيات، أضف أبياتًا مقلوبة
    while(distractorVerses.length < 3){
        const words = verse.text.split(/\s+/).filter(Boolean);
        const shuffledWords = [
            ...words
        ];
        for(let i = shuffledWords.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledWords[i], shuffledWords[j]] = [
                shuffledWords[j],
                shuffledWords[i]
            ];
        }
        const fake = shuffledWords.join(' ');
        if (fake !== verse.text && !distractorVerses.some((d)=>d.text === fake)) {
            const sp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitVerse"])(fake, 0);
            distractorVerses.push({
                text: fake,
                sadr: sp.sadr,
                ajar: sp.ajar
            });
        } else {
            distractorVerses.push({
                text: '...',
                sadr: '...',
                ajar: ''
            });
        }
    }
    const choiceVerses = [
        {
            text: verse.text,
            sadr: verse.sadr,
            ajar: verse.ajar
        },
        ...distractorVerses
    ];
    for(let i = choiceVerses.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [choiceVerses[i], choiceVerses[j]] = [
            choiceVerses[j],
            choiceVerses[i]
        ];
    }
    return {
        type: 'where_am_i',
        verseIndex: verse.index,
        prompt: `أي من هذه الأبيات هو البيت رقم ${verse.index + 1}؟`,
        answer: verse.text,
        choices: choiceVerses.map((c)=>c.text),
        choiceVerses,
        level: 1
    };
}
function generateLevel2(verse) {
    const words = verse.text.split(/\s+/).filter(Boolean);
    if (words.length < 4) {
        return {
            type: 'complete_verse',
            verseIndex: verse.index,
            prompt: `أكملي البيت:`,
            answer: verse.text,
            level: 2
        };
    }
    const scrambled = shuffleArray([
        ...words
    ]);
    // إذا الترتيب العشوائي مطابق، أجرِ إزاحة دائرية
    if (scrambled.join(' ') === words.join(' ') && words.length > 2) {
        const shift = Math.floor(Math.random() * (words.length - 1)) + 1;
        for(let i = 0; i < scrambled.length; i++){
            scrambled[i] = words[(i + shift) % words.length];
        }
    }
    return {
        type: 'word_order',
        verseIndex: verse.index,
        prompt: `رتّبي كلمات البيت ${verse.index + 1}:`,
        answer: words.join(' '),
        scrambledWords: scrambled,
        level: 2
    };
}
function generateLevel3(verse) {
    const words = verse.text.split(/\s+/).filter(Boolean);
    if (words.length < 4) {
        return {
            type: 'fill_blank',
            verseIndex: verse.index,
            prompt: `أكملي البيت:`,
            answer: verse.text,
            level: 3
        };
    }
    const [pos1, pos2] = selectTwoMissingWords(verse, words);
    const blankWord1 = words[pos1];
    const blankWord2 = words[pos2];
    const { displayedSadr, displayedAjar } = buildDisplayedHalves(verse, words, [
        pos1,
        pos2
    ]);
    return {
        type: 'fill_blanks',
        verseIndex: verse.index,
        prompt: `أكملي الكلمتين الناقصتين (اكتبي الكلمتين مفصولتين بفراغ):`,
        displayedSadr,
        displayedAjar,
        blankCount: 2,
        answer: `${blankWord1} ${blankWord2}`,
        level: 3,
        hint: `الحرف الأول: ${blankWord1[0]} ، ${blankWord2[0]}`
    };
}
function generateLevel4Phase1(verse) {
    const words = verse.text.split(/\s+/).filter(Boolean);
    if (words.length < 8) {
        return generateLevel4ShortPhase1(verse, words);
    }
    const removedPositions = selectSmartMissingWords(verse, words);
    const removedWords = removedPositions.map((p)=>words[p]);
    const { displayedSadr, displayedAjar } = buildDisplayedHalves(verse, words, removedPositions);
    const scrambledRemoved = shuffleArray([
        ...removedWords
    ]);
    return {
        type: 'word_order',
        verseIndex: verse.index,
        prompt: `أكملي الفراغات باختيار الكلمات بالترتيب الصحيح:`,
        displayedSadr,
        displayedAjar,
        blankCount: removedWords.length,
        answer: removedWords.join(' '),
        scrambledWords: scrambledRemoved,
        level: 4,
        subPhase: 1,
        hint: `اضغطي على الكلمات بالترتيب الصحيح للفراغات`
    };
}
function generateLevel4Phase2(verse) {
    const words = verse.text.split(/\s+/).filter(Boolean);
    if (words.length < 8) {
        return generateLevel4ShortPhase2(verse, words);
    }
    const removedPositions = selectSmartMissingWords(verse, words, true);
    const removedWords = removedPositions.map((p)=>words[p]);
    const { displayedSadr, displayedAjar } = buildDisplayedHalves(verse, words, removedPositions);
    return {
        type: 'fill_blanks',
        verseIndex: verse.index,
        prompt: `أكملي الفراغات من الذاكرة (اكتبي الكلمات بالترتيب مفصولة بفراغات):`,
        displayedSadr,
        displayedAjar,
        blankCount: removedWords.length,
        answer: removedWords.join(' '),
        level: 4,
        subPhase: 2,
        hint: `${removedWords.length} كلمات مفقودة`
    };
}
/** للبيت القصير — المرحلة 4A */ function generateLevel4ShortPhase1(verse, words) {
    const removedPositions = selectShortMissingWords(verse, words);
    const removedWords = removedPositions.map((p)=>words[p]);
    const { displayedSadr, displayedAjar } = buildDisplayedHalves(verse, words, removedPositions);
    const scrambledRemoved = shuffleArray([
        ...removedWords
    ]);
    return {
        type: 'word_order',
        verseIndex: verse.index,
        prompt: `أكملي الفراغات باختيار الكلمات بالترتيب الصحيح:`,
        displayedSadr,
        displayedAjar,
        blankCount: removedWords.length,
        answer: removedWords.join(' '),
        scrambledWords: scrambledRemoved,
        level: 4,
        subPhase: 1,
        hint: `اضغطي على الكلمات بالترتيب الصحيح للفراغات`
    };
}
/** للبيت القصير — المرحلة 4B */ function generateLevel4ShortPhase2(verse, words) {
    const removedPositions = selectShortMissingWords(verse, words, true);
    const removedWords = removedPositions.map((p)=>words[p]);
    const { displayedSadr, displayedAjar } = buildDisplayedHalves(verse, words, removedPositions);
    return {
        type: 'fill_blanks',
        verseIndex: verse.index,
        prompt: `أكملي الفراغات من الذاكرة (اكتبي الكلمات بالترتيب مفصولة بفراغات):`,
        displayedSadr,
        displayedAjar,
        blankCount: removedWords.length,
        answer: removedWords.join(' '),
        level: 4,
        subPhase: 2,
        hint: `${removedWords.length} كلمات مفقودة`
    };
}
/** اختيار كلمات للبيت القصير */ function selectShortMissingWords(verse, words, differentSeed = false) {
    const target = Math.min(words.length - 1, Math.max(3, Math.round(words.length * 0.4)));
    const sadrWordCount = verse.sadr.split(/\s+/).filter(Boolean).length;
    const sadrSignificant = [];
    const ajarSignificant = [];
    for(let i = 0; i < words.length; i++){
        if (isSignificantWord(words[i])) {
            if (i < sadrWordCount) sadrSignificant.push(i);
            else ajarSignificant.push(i);
        }
    }
    const allSignificant = [
        ...sadrSignificant,
        ...ajarSignificant
    ];
    const selected = [];
    const sadrTarget = Math.max(1, Math.round(target * sadrWordCount / words.length));
    const ajarTarget = target - sadrTarget;
    const pool1 = differentSeed ? shuffleArray(shuffleArray(sadrSignificant.length > 0 ? sadrSignificant : Array.from({
        length: sadrWordCount
    }, (_, i)=>i).filter((i)=>i > 0))) : shuffleArray(sadrSignificant.length > 0 ? sadrSignificant : Array.from({
        length: sadrWordCount
    }, (_, i)=>i).filter((i)=>i > 0));
    const pool2 = differentSeed ? shuffleArray(shuffleArray(ajarSignificant.length > 0 ? ajarSignificant : Array.from({
        length: words.length - sadrWordCount
    }, (_, i)=>sadrWordCount + i).filter((i)=>i < words.length - 1))) : shuffleArray(ajarSignificant.length > 0 ? ajarSignificant : Array.from({
        length: words.length - sadrWordCount
    }, (_, i)=>sadrWordCount + i).filter((i)=>i < words.length - 1));
    for(let i = 0; i < Math.min(sadrTarget, pool1.length); i++)selected.push(pool1[i]);
    for(let i = 0; i < Math.min(ajarTarget, pool2.length); i++)selected.push(pool2[i]);
    while(selected.length < target && allSignificant.length > 0){
        const remaining = allSignificant.filter((i)=>!selected.includes(i));
        if (remaining.length === 0) break;
        selected.push(remaining[Math.floor(Math.random() * remaining.length)]);
    }
    if (selected.length < 2) {
        for(let i = 0; i < Math.min(target, words.length); i++){
            if (!selected.includes(i)) selected.push(i);
        }
    }
    return selected.sort((a, b)=>a - b);
}
function generateLevel5(verse) {
    if (!verse.ajar || verse.ajar.trim() === '') {
        return {
            type: 'write_all',
            verseIndex: verse.index,
            prompt: `اكتبي البيت كاملًا من الذاكرة`,
            answer: verse.text,
            level: 5
        };
    }
    const showSadr = Math.random() < 0.5;
    if (showSadr) {
        return {
            type: 'sadr_to_ajar',
            verseIndex: verse.index,
            prompt: `أكملي عجز البيت:`,
            displayedSadr: verse.sadr,
            displayedAjar: '______',
            answer: verse.ajar,
            shownPart: verse.sadr,
            level: 5,
            hint: `عجز البيت`
        };
    } else {
        return {
            type: 'ajar_to_sadr',
            verseIndex: verse.index,
            prompt: `أكملي صدر البيت:`,
            displayedSadr: '______',
            displayedAjar: verse.ajar,
            answer: verse.sadr,
            shownPart: verse.ajar,
            level: 5,
            hint: `صدر البيت`
        };
    }
}
function generateLevel6(verse) {
    return {
        type: 'write_all',
        verseIndex: verse.index,
        prompt: `اكتبي البيت ${verse.index + 1} كاملًا من الذاكرة`,
        answer: verse.text,
        level: 6
    };
}
function generateLevelExercises(level, verse, allVerses) {
    switch(level){
        case 1:
            return [
                generateLevel1(verse, allVerses)
            ];
        case 2:
            return [
                generateLevel2(verse)
            ];
        case 3:
            return [
                generateLevel3(verse)
            ];
        case 4:
            return [
                generateLevel4Phase1(verse),
                generateLevel4Phase2(verse)
            ];
        case 5:
            return [
                generateLevel5(verse)
            ];
        case 6:
            return [
                generateLevel6(verse)
            ];
        default:
            return [
                generateLevel6(verse)
            ];
    }
}
function generatePairReview(verse1, verse2, _allVerses) {
    const exercises = [];
    exercises.push({
        ...generateLevel2(verse1),
        prompt: `[مراجعة] رتّبي كلمات البيت ${verse1.index + 1}:`,
        isMultiVerse: true
    });
    exercises.push({
        ...generateLevel2(verse2),
        prompt: `[مراجعة] رتّبي كلمات البيت ${verse2.index + 1}:`,
        isMultiVerse: true
    });
    exercises.push({
        type: 'next_verse',
        verseIndex: verse1.index,
        prompt: `ما البيت الذي يلي هذا البيت؟ (اكتبيه كاملًا)`,
        displayedSadr: verse1.sadr,
        displayedAjar: verse1.ajar,
        answer: verse2.text,
        relatedVerseIndex: verse2.index,
        isMultiVerse: true
    });
    exercises.push({
        type: 'prev_verse',
        verseIndex: verse2.index,
        prompt: `ما البيت الذي يسبق هذا البيت؟ (اكتبيه كاملًا)`,
        displayedSadr: verse2.sadr,
        displayedAjar: verse2.ajar,
        answer: verse1.text,
        relatedVerseIndex: verse1.index,
        isMultiVerse: true
    });
    return exercises;
}
function generateComprehensiveReview(verses, _maxVerseReached, segmentIndex) {
    const exercises = [];
    if (!verses || verses.length === 0) return exercises;
    const segments = getVerseSegments(verses);
    const targetSegments = segmentIndex !== undefined && segmentIndex >= 0 && segmentIndex < segments.length ? [
        segments[segmentIndex]
    ] : segments;
    for (const seg of targetSegments){
        const group = seg.verses;
        // ترتيب الأبيات عشوائيًا داخل المقطع الواحد فقط
        let shuffledGroup = shuffleArray([
            ...group
        ]);
        if (shuffledGroup.length > 1) {
            const isSameOrder = shuffledGroup.every((v, idx)=>v.index === group[idx].index);
            if (isSameOrder) {
                const last = shuffledGroup.length - 1;
                [shuffledGroup[0], shuffledGroup[last]] = [
                    shuffledGroup[last],
                    shuffledGroup[0]
                ];
            }
        }
        for (const v of shuffledGroup){
            exercises.push({
                ...generateLevel6(v),
                prompt: `اكتبي ${getArabicVerseOrdinal(v.index)} (البيت ${v.index + 1}) كاملًا:`,
                segmentTitle: seg.title,
                segmentRange: seg.range,
                isMultiVerse: true
            });
        }
    }
    return exercises;
}
// ===== دوال مساعدة =====
function shuffleArray(arr) {
    const result = [
        ...arr
    ];
    for(let i = result.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [
            result[j],
            result[i]
        ];
    }
    return result;
}
/** اختيار كلمتين لهما قيمة لحذفهما */ function selectTwoMissingWords(verse, words) {
    const sadrWordCount = verse.sadr.split(/\s+/).filter(Boolean).length;
    const sadrSignificant = [];
    for(let i = 0; i < sadrWordCount; i++){
        if (isSignificantWord(words[i])) sadrSignificant.push(i);
    }
    const ajarSignificant = [];
    for(let i = sadrWordCount; i < words.length; i++){
        if (isSignificantWord(words[i])) ajarSignificant.push(i);
    }
    const allSignificant = [
        ...sadrSignificant,
        ...ajarSignificant
    ];
    let pos1, pos2;
    if (sadrSignificant.length > 0 && ajarSignificant.length > 0) {
        pos1 = sadrSignificant[Math.floor(Math.random() * sadrSignificant.length)];
        pos2 = ajarSignificant[Math.floor(Math.random() * ajarSignificant.length)];
    } else if (allSignificant.length >= 2) {
        const shuffled = shuffleArray(allSignificant);
        pos1 = shuffled[0];
        pos2 = shuffled[1];
    } else {
        const candidates = words.map((_, i)=>i).filter((i)=>i > 0 && i < words.length - 1);
        if (candidates.length >= 2) {
            const shuffled = shuffleArray(candidates);
            pos1 = shuffled[0];
            pos2 = shuffled[1];
        } else {
            pos1 = 0;
            pos2 = Math.min(1, words.length - 1);
        }
    }
    if (pos1 > pos2) [pos1, pos2] = [
        pos2,
        pos1
    ];
    return [
        pos1,
        pos2
    ];
}
/**
 * اختيار ٤-٥ كلمات من البيت للحذف في المستوى الرابع
 * الكلمات موزعة على صدر البيت وعجزه
 * تُفضل الكلمات الدلالية/الشعرية على كلمات الوصل والجر
 */ function selectSmartMissingWords(verse, words, differentSeed = false) {
    const sadrWordCount = verse.sadr.split(/\s+/).filter(Boolean).length;
    const ajarWordCount = words.length - sadrWordCount;
    const totalTarget = Math.min(words.length - 2, Math.max(4, Math.round(words.length * 0.4)));
    const sadrRatio = sadrWordCount / words.length;
    let sadrRemove = Math.max(1, Math.round(totalTarget * sadrRatio));
    let ajarRemove = Math.max(1, totalTarget - sadrRemove);
    sadrRemove = Math.min(sadrRemove, sadrWordCount - 1);
    ajarRemove = Math.min(ajarRemove, Math.max(0, ajarWordCount - 1));
    const removed = [];
    // ===== اختيار من الصدر =====
    const sadrSignificant = [];
    const sadrOther = [];
    for(let i = 0; i < sadrWordCount; i++){
        if (isSignificantWord(words[i])) sadrSignificant.push(i);
        else sadrOther.push(i);
    }
    const shuffledSadrSig = differentSeed ? shuffleArray(shuffleArray(sadrSignificant)) : shuffleArray(sadrSignificant);
    for(let i = 0; i < Math.min(sadrRemove, shuffledSadrSig.length); i++){
        removed.push(shuffledSadrSig[i]);
    }
    if (removed.length < sadrRemove) {
        const pool = sadrOther.filter((i)=>!removed.includes(i));
        const shuffledSadrOther = differentSeed ? shuffleArray(shuffleArray(pool)) : shuffleArray(pool);
        for(let i = 0; i < Math.min(sadrRemove - removed.length, shuffledSadrOther.length); i++){
            removed.push(shuffledSadrOther[i]);
        }
    }
    // ===== اختيار من العجز =====
    const ajarSignificant = [];
    const ajarOther = [];
    for(let i = sadrWordCount; i < words.length; i++){
        if (isSignificantWord(words[i])) ajarSignificant.push(i);
        else ajarOther.push(i);
    }
    const shuffledAjarSig = differentSeed ? shuffleArray(shuffleArray(ajarSignificant)) : shuffleArray(ajarSignificant);
    const ajarSelected = [];
    for(let i = 0; i < Math.min(ajarRemove, shuffledAjarSig.length); i++){
        ajarSelected.push(shuffledAjarSig[i]);
    }
    if (ajarSelected.length < ajarRemove) {
        const pool = ajarOther.filter((i)=>!ajarSelected.includes(i));
        const shuffledAjarOther = differentSeed ? shuffleArray(shuffleArray(pool)) : shuffleArray(pool);
        for(let i = 0; i < Math.min(ajarRemove - ajarSelected.length, shuffledAjarOther.length); i++){
            ajarSelected.push(shuffledAjarOther[i]);
        }
    }
    removed.push(...ajarSelected);
    while(removed.length < 3 && removed.length < words.length - 1){
        const remaining = words.map((_, i)=>i).filter((i)=>!removed.includes(i) && i > 0 && i < words.length - 1);
        if (remaining.length === 0) break;
        const sigRemaining = remaining.filter((i)=>isSignificantWord(words[i]));
        const pool = sigRemaining.length > 0 ? sigRemaining : remaining;
        removed.push(pool[Math.floor(Math.random() * pool.length)]);
    }
    return removed.sort((a, b)=>a - b);
}
function getExerciseLabel(type) {
    const labels = {
        complete_verse: 'إكمال البيت',
        fill_blank: 'كلمة ناقصة',
        fill_blanks: 'كلمات ناقصة',
        sadr_to_ajar: 'صدر ← عجز',
        ajar_to_sadr: 'عجز ← صدر',
        first_word: 'حروف أولى',
        write_all: 'استحضار حر',
        word_order: 'ترتيب الكلمات',
        next_verse: 'البيت التالي',
        prev_verse: 'البيت السابق',
        continue_from: 'أكمل من هنا',
        where_am_i: 'أين أنا؟'
    };
    return labels[type] || type;
}
function getLevelLabel(level, subPhase) {
    const labels = {
        1: 'التعرف على البيت',
        2: 'ترتيب الكلمات',
        3: 'كلمتان مفقودتان',
        4: subPhase === 1 ? 'نصف البيت — كلمات مساعدة' : 'نصف البيت — استحضار يدوي',
        5: 'استرجاع نصف البيت',
        6: 'كتابة البيت كاملًا'
    };
    return labels[level] || '';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SessionStartModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SessionStartModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.mjs [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/algorithm.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exercises.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function SessionStartModal({ poem, stats, onStart, onFateen, onClose }) {
    _s();
    const total = poem.verses.length;
    const maxVerse = poem.currentVerseIndex;
    const progress = stats ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverallProgress"])(stats.verses, total) : {
        mastered: 0,
        strong: 0,
        medium: 0,
        weak: 0,
        learning: 0,
        newCount: total
    };
    const learnedPct = Math.round((progress.mastered + progress.strong) / Math.max(total, 1) * 100);
    const weakIndices = stats ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeakVerseIndices"])(stats.verses, total) : [];
    const segments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVerseSegments"])(poem.verses);
    // آخر بيت متقن: نستخدم lastCompletedVerseIndex أو currentVerseIndex
    const lastCompletedIdx = typeof poem.lastCompletedVerseIndex === 'number' && poem.lastCompletedVerseIndex >= 0 ? poem.lastCompletedVerseIndex : poem.currentVerseIndex > 0 ? poem.currentVerseIndex : -1;
    const canResume = lastCompletedIdx >= 0 && lastCompletedIdx + 1 < total;
    const [subScreen, setSubScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('main');
    const modes = [
        {
            id: 'cumulative',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"],
            title: 'حفظ تراكمي',
            desc: 'النظام الأساسي لحفظ الأبيات واختبارات المستويات',
            primary: true
        },
        {
            id: 'review',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"],
            title: 'مراجعة شاملة',
            desc: 'مراجعة القصيدة بنظام المقاطع',
            disabled: total < 1
        },
        {
            id: 'where_am_i',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
            title: 'أين أنا؟',
            desc: 'معرفة آخر بيت تم حفظه وعرض التقدم والأبيات المتبقية',
            disabled: false
        },
        {
            id: 'weak_verses',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
            title: 'الأبيات الضعيفة',
            desc: weakIndices.length > 0 ? `${weakIndices.length} بيت يحتاج تقوية` : 'لا توجد أبيات ضعيفة حاليًا',
            disabled: weakIndices.length === 0,
            badge: weakIndices.length > 0 ? `${weakIndices.length}` : undefined
        },
        ...onFateen ? [
            {
                id: 'fateen',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                title: 'تحدي فَطين',
                desc: 'استحضري البيت من كلمة واحدة فقط',
                disabled: false,
                primary: false
            }
        ] : []
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md glass-modal rounded-xl overflow-hidden animate-scale-in",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-4 border-b border-[var(--border-0)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-sm font-semibold text-[var(--text-0)]",
                                    children: subScreen === 'cumulative_options' ? 'الحفظ التراكمي' : subScreen === 'review_options' ? 'المراجعة الشاملة' : subScreen === 'weak_verses_list' ? 'الأبيات الضعيفة' : 'ابدئي جلسة الحفظ'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-[var(--text-3)]",
                                    children: [
                                        poem.title,
                                        " · البيت ",
                                        Math.min(maxVerse + 1, total),
                                        "/",
                                        total
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SessionStartModal.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1 rounded-md text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[var(--bg-2)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 14,
                                strokeWidth: 1.5
                            }, void 0, false, {
                                fileName: "[project]/src/components/SessionStartModal.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/SessionStartModal.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SessionStartModal.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-3 border-b border-[var(--border-0)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressBar"], {
                            value: learnedPct,
                            className: "mb-1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SessionStartModal.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 text-[11px] text-[var(--text-3)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "متقن: ",
                                        progress.mastered
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "ثابت: ",
                                        progress.strong
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "جديد: ",
                                        progress.newCount
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SessionStartModal.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SessionStartModal.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                subScreen === 'main' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 flex flex-col gap-3",
                    children: modes.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                if (m.id === 'cumulative') {
                                    setSubScreen('cumulative_options');
                                } else if (m.id === 'review') {
                                    setSubScreen('review_options');
                                } else if (m.id === 'weak_verses') {
                                    setSubScreen('weak_verses_list');
                                } else {
                                    onStart(m.id);
                                }
                            },
                            disabled: m.disabled,
                            className: `w-full flex items-center gap-4 p-4 rounded-2xl border text-right transition-all group ${m.disabled ? 'opacity-30 cursor-not-allowed grayscale' : 'hover:border-[var(--accent)]/30 hover:bg-[var(--accent-light)]/50 cursor-pointer active:scale-[0.98]'} ${m.primary ? 'border-[var(--accent)]/40 bg-[var(--accent-light)]' : 'border-[var(--border-1)] bg-white/20'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${m.primary ? 'bg-[var(--accent)] text-white' : 'bg-[var(--bg-2)] text-[var(--text-2)]'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(m.icon, {
                                        size: 18,
                                        strokeWidth: 2.5
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SessionStartModal.tsx",
                                        lineNumber: 148,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 147,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0 flex flex-col gap-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-sm font-bold ${m.primary ? 'text-[var(--accent-text)]' : 'text-[var(--text-0)]'}`,
                                                    children: m.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 21
                                                }, this),
                                                m.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "warning",
                                                    children: m.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SessionStartModal.tsx",
                                            lineNumber: 154,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-[var(--text-3)] font-medium leading-tight truncate",
                                            children: m.desc
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SessionStartModal.tsx",
                                            lineNumber: 160,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 153,
                                    columnNumber: 17
                                }, this),
                                !m.disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    size: 16,
                                    className: "text-[var(--text-3)] opacity-40 group-hover:opacity-100 group-hover:translate-x-[-2px] transition-all",
                                    strokeWidth: 2.5
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 163,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, m.id, true, {
                            fileName: "[project]/src/components/SessionStartModal.tsx",
                            lineNumber: 123,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/SessionStartModal.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, this),
                subScreen === 'cumulative_options' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onStart('cumulative', {
                                    startFromVerse: 0
                                }),
                            className: "w-full flex items-center gap-3 p-3 rounded-lg border border-[var(--accent)] bg-[var(--accent-light)] text-right transition-all hover:bg-[var(--accent-light)] cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    size: 16,
                                    className: "text-[var(--accent)]",
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-[var(--accent-text)]",
                                            children: "الحفظ من البداية"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SessionStartModal.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-[var(--text-3)]",
                                            children: "يبدأ من البيت الأول"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SessionStartModal.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 14,
                                    className: "text-[var(--text-3)]",
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SessionStartModal.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onStart('cumulative', {
                                    startFromVerse: canResume ? lastCompletedIdx + 1 : 0
                                }),
                            disabled: !canResume,
                            className: `w-full flex items-center gap-3 p-3 rounded-lg border text-right transition-all ${canResume ? 'border-[var(--border-0)] hover:border-[var(--border-1)] hover:bg-[var(--bg-2)] cursor-pointer' : 'opacity-30 cursor-not-allowed border-[var(--border-0)]'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    size: 16,
                                    className: canResume ? 'text-[var(--success)]' : 'text-[var(--text-3)]',
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-[var(--text-0)]",
                                            children: "الحفظ من آخر بيت متقن"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SessionStartModal.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-[var(--text-3)]",
                                            children: canResume ? `يبدأ من ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArabicVerseOrdinal"])(lastCompletedIdx + 1)} (البيت ${lastCompletedIdx + 2})` : 'لم تكملي حفظ أي بيت بعد'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SessionStartModal.tsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this),
                                canResume && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 14,
                                    className: "text-[var(--text-3)]",
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 203,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SessionStartModal.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSubScreen('main'),
                            className: "w-full text-center text-xs text-[var(--text-3)] hover:text-[var(--text-1)] py-2",
                            children: "← رجوع"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SessionStartModal.tsx",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SessionStartModal.tsx",
                    lineNumber: 172,
                    columnNumber: 11
                }, this),
                subScreen === 'review_options' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onStart('review', {
                                    segmentIndex: -1
                                }),
                            className: "w-full flex items-center gap-3 p-3 rounded-lg border border-[var(--accent)] bg-[var(--accent-light)] text-right transition-all hover:bg-[var(--accent-light)] cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                    size: 16,
                                    className: "text-[var(--accent)]",
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-[var(--accent-text)]",
                                            children: "مراجعة القصيدة كاملة"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SessionStartModal.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-[var(--text-3)]",
                                            children: [
                                                "جميع المقاطع (",
                                                segments.length,
                                                " مقطع)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SessionStartModal.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 14,
                                    className: "text-[var(--text-3)]",
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SessionStartModal.tsx",
                            lineNumber: 218,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 border-t border-[var(--border-0)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-[var(--text-3)] mb-2",
                                    children: "أو اختاري مقطعًا محددًا:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: segments.map((seg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onStart('review', {
                                                    segmentIndex: idx
                                                }),
                                            className: "w-full flex items-center gap-3 p-2.5 rounded-lg border border-[var(--border-0)] text-right transition-all hover:border-[var(--border-1)] hover:bg-[var(--bg-2)] cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                    size: 14,
                                                    className: "text-[var(--text-3)]",
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-medium text-[var(--text-0)]",
                                                            children: seg.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SessionStartModal.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-[var(--text-3)]",
                                                            children: [
                                                                seg.range,
                                                                " · ",
                                                                seg.verses.length,
                                                                " بيت"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/SessionStartModal.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    size: 12,
                                                    className: "text-[var(--text-3)]",
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/components/SessionStartModal.tsx",
                                            lineNumber: 234,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SessionStartModal.tsx",
                            lineNumber: 230,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSubScreen('main'),
                            className: "w-full text-center text-xs text-[var(--text-3)] hover:text-[var(--text-1)] py-2",
                            children: "← رجوع"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SessionStartModal.tsx",
                            lineNumber: 250,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SessionStartModal.tsx",
                    lineNumber: 217,
                    columnNumber: 11
                }, this),
                subScreen === 'weak_verses_list' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 space-y-2 max-h-[60vh] overflow-y-auto",
                    children: [
                        weakIndices.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[var(--text-1)] mb-1",
                                    children: "لا توجد أبيات ضعيفة حاليًا"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 264,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-[var(--text-3)]",
                                    children: "جميع الأبيات المحفوظة في حالة جيدة بحمد الله"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 265,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SessionStartModal.tsx",
                            lineNumber: 263,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: weakIndices.map((idx)=>{
                                const verse = poem.verses[idx];
                                const vs = stats?.verses[idx];
                                if (!verse) return null;
                                const stability = vs?.memory.standalone || 'new';
                                const errorCount = vs?.errors || 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onStart('weak_verses', {
                                            weakVerseIndex: idx
                                        }),
                                    className: "w-full flex items-center gap-3 p-3 rounded-lg border border-[var(--border-0)] text-right transition-all hover:border-[var(--warning)] hover:bg-[var(--warning-light)] cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            size: 14,
                                            className: "text-[var(--warning)]",
                                            strokeWidth: 1.5
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SessionStartModal.tsx",
                                            lineNumber: 281,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-medium text-[var(--text-0)]",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArabicVerseOrdinal"])(idx)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-[var(--text-3)] truncate",
                                                    style: {
                                                        fontFamily: 'var(--font-poem)'
                                                    },
                                                    children: [
                                                        verse.sadr,
                                                        verse.ajar ? ' ◇ ' : '',
                                                        verse.ajar
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SessionStartModal.tsx",
                                            lineNumber: 282,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: stability === 'weak' ? 'error' : stability === 'learning' ? 'warning' : 'default',
                                                    children: stability === 'weak' ? 'ضعيف' : stability === 'learning' ? 'قيد الحفظ' : 'متوسط'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 25
                                                }, this),
                                                errorCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-[var(--error)]",
                                                    children: [
                                                        errorCount,
                                                        " ✗"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 44
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SessionStartModal.tsx",
                                            lineNumber: 288,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/src/components/SessionStartModal.tsx",
                                    lineNumber: 276,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/SessionStartModal.tsx",
                            lineNumber: 268,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSubScreen('main'),
                            className: "w-full text-center text-xs text-[var(--text-3)] hover:text-[var(--text-1)] py-2",
                            children: "← رجوع"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SessionStartModal.tsx",
                            lineNumber: 300,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SessionStartModal.tsx",
                    lineNumber: 261,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SessionStartModal.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SessionStartModal.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(SessionStartModal, "41s2J4zI4/FV2Rm2kgtlZaI3BMk=");
_c = SessionStartModal;
var _c;
__turbopack_context__.k.register(_c, "SessionStartModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/errorLog.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createErrorEntry",
    ()=>createErrorEntry,
    "createSuccessEntry",
    ()=>createSuccessEntry,
    "detectErrorType",
    ()=>detectErrorType,
    "getErrorTypeLabel",
    ()=>getErrorTypeLabel,
    "getSourceLabel",
    ()=>getSourceLabel,
    "getVerseErrorLog",
    ()=>getVerseErrorLog,
    "isErrorQuality",
    ()=>isErrorQuality
]);
function detectErrorType(exerciseType, diffTokens, verseHasAjar) {
    if (exerciseType === 'where_am_i' || exerciseType === 'continue_from') {
        return 'wrong_choice';
    }
    if (exerciseType === 'word_order') {
        return 'wrong_order_l2';
    }
    if (exerciseType === 'fill_blank' || exerciseType === 'fill_blanks') {
        return 'fill_error';
    }
    if (!diffTokens || diffTokens.length === 0) {
        return 'general';
    }
    const correctCount = diffTokens.filter((t)=>t.type === 'correct').length;
    const total = diffTokens.length;
    // إذا كانت الإجابة خاطئة تمامًا
    if (correctCount === 0) return 'full_miss';
    const missingCount = diffTokens.filter((t)=>t.type === 'missing').length;
    const extraCount = diffTokens.filter((t)=>t.type === 'extra').length;
    if (missingCount > 0 && extraCount === 0) return 'missing_word';
    if (extraCount > 0 && missingCount === 0) return 'extra_word';
    // تحديد ما إذا كان الخطأ في الصدر أو العجز
    if (verseHasAjar && diffTokens.length > 2) {
        const half = Math.floor(diffTokens.length / 2);
        const sadrErrors = diffTokens.slice(0, half).filter((t)=>t.type !== 'correct').length;
        const ajarErrors = diffTokens.slice(half).filter((t)=>t.type !== 'correct').length;
        if (sadrErrors > ajarErrors * 2) return 'sadr_error';
        if (ajarErrors > sadrErrors * 2) return 'ajar_error';
    }
    if (correctCount / total >= 0.5 && (missingCount > 0 || extraCount > 0)) {
        return 'wrong_word';
    }
    return 'general';
}
function createErrorEntry(params) {
    const now = Date.now();
    return {
        id: `err_${now}_${params.verseIndex}_${Math.random().toString(36).slice(2, 7)}`,
        poemId: params.poemId,
        verseIndex: params.verseIndex,
        verseText: params.verseText,
        timestamp: now,
        date: new Date(now).toISOString().split('T')[0],
        level: params.level,
        exerciseType: params.exerciseType,
        source: params.source,
        errorType: params.errorType,
        userAnswer: params.userAnswer
    };
}
function createSuccessEntry(params) {
    const now = Date.now();
    return {
        id: `suc_${now}_${params.verseIndex}_${Math.random().toString(36).slice(2, 7)}`,
        poemId: params.poemId,
        verseIndex: params.verseIndex,
        timestamp: now,
        date: new Date(now).toISOString().split('T')[0],
        level: params.level,
        exerciseType: params.exerciseType,
        source: params.source
    };
}
function getErrorTypeLabel(errorType) {
    const labels = {
        missing_word: 'كلمة ناقصة',
        wrong_word: 'كلمة خاطئة',
        extra_word: 'كلمة زائدة',
        wrong_order: 'ترتيب خاطئ',
        sadr_error: 'خطأ في الصدر',
        ajar_error: 'خطأ في العجز',
        full_miss: 'لم يُسترجع البيت',
        wrong_choice: 'اختيار خاطئ',
        wrong_order_l2: 'ترتيب كلمات خاطئ',
        fill_error: 'كلمات ناقصة خاطئة',
        general: 'إجابة خاطئة'
    };
    return labels[errorType] || 'إجابة خاطئة';
}
function getSourceLabel(source) {
    const labels = {
        cumulative: 'الحفظ التراكمي',
        review: 'المراجعة الشاملة',
        weak_verses: 'الأبيات الضعيفة',
        today_session: 'جلسة اليوم',
        chain: 'مراجعة متسلسلة',
        where_am_i: 'أين أنا؟',
        fateen: 'تحدي فَطين',
        other: 'أخرى'
    };
    return labels[source] || 'أخرى';
}
function getVerseErrorLog(errorLog, poemId, verseIndex) {
    return errorLog.filter((e)=>e.poemId === poemId && e.verseIndex === verseIndex).sort((a, b)=>b.timestamp - a.timestamp);
}
function isErrorQuality(quality) {
    return quality === 'wrong' || quality === 'review';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SessionView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PoeticVerseLines",
    ()=>PoeticVerseLines,
    "default",
    ()=>SessionView,
    "getLastCompletedVerseIndex",
    ()=>getLastCompletedVerseIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.mjs [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.mjs [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exercises.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/poem-parser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/algorithm.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/errorLog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function PoeticVerseLines({ sadr, ajar, text, showTashkeel = true, fontSize = '1.25rem' }) {
    let finalSadr = sadr ?? '';
    let finalAjar = ajar ?? '';
    if (!finalSadr && text) {
        const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitVerse"])(text, 0);
        finalSadr = parsed.sadr;
        finalAjar = parsed.ajar;
    }
    const formatText = (t)=>showTashkeel ? t : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeTashkeel"])(t);
    if (!finalAjar || !finalAjar.trim()) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "poetic-verse",
            style: {
                fontFamily: 'var(--font-poem)',
                fontSize,
                lineHeight: '2.1',
                color: 'var(--text-0)'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "poetic-sadr",
                children: formatText(finalSadr || text || '')
            }, void 0, false, {
                fileName: "[project]/src/components/SessionView.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SessionView.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "poetic-verse",
        style: {
            fontFamily: 'var(--font-poem)',
            fontSize,
            lineHeight: '2.1',
            color: 'var(--text-0)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "poetic-sadr",
                children: formatText(finalSadr)
            }, void 0, false, {
                fileName: "[project]/src/components/SessionView.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "poetic-ajar",
                children: formatText(finalAjar)
            }, void 0, false, {
                fileName: "[project]/src/components/SessionView.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SessionView.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_c = PoeticVerseLines;
function getLastCompletedVerseIndex(poem, stats) {
    if (typeof poem.lastCompletedVerseIndex === 'number') {
        if (poem.lastCompletedVerseIndex >= 0) {
            return Math.min(poem.lastCompletedVerseIndex, poem.verses.length - 1);
        }
        // إذا كان -1 ولكن هناك currentVerseIndex محفوظ سابقًا > 0
        if (poem.currentVerseIndex > 0) {
            return Math.min(poem.currentVerseIndex, poem.verses.length - 1);
        }
        return -1;
    }
    // توافق مع البيانات المحفوظة مسبقًا
    const practicedIndices = stats?.verses ? Object.values(stats.verses).filter((v)=>v.correct > 0 || v.attempts > 0).map((v)=>v.verseIndex) : [];
    if (poem.currentVerseIndex > 0) {
        return Math.min(poem.currentVerseIndex, poem.verses.length - 1);
    }
    if (practicedIndices.length > 0) {
        return Math.min(Math.max(...practicedIndices), poem.verses.length - 1);
    }
    return -1;
}
function SessionView({ poem, stats, settings, mode, source, startFromVerse, segmentIndex, weakVerseIndex, onClose, onVerseUpdate, onSessionComplete, onCurrentVerseUpdate, onErrorLog, onSuccessLog }) {
    _s();
    const sessionSource = source || (mode === 'cumulative' ? 'cumulative' : mode === 'review' ? 'review' : mode === 'weak_verses' ? 'weak_verses' : mode === 'chain' ? 'chain' : mode === 'where_am_i' ? 'where_am_i' : 'other');
    const statsMap = stats?.verses || {};
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const totalVerses = poem.verses.length;
    const lastCompletedIdx = getLastCompletedVerseIndex(poem, stats);
    const initialVerseIdx = (()=>{
        if (mode === 'continue_from' && startFromVerse !== undefined) return startFromVerse;
        if (mode === 'weak_verses' && weakVerseIndex !== undefined) return weakVerseIndex;
        if (mode === 'review' || mode === 'chain' || mode === 'where_am_i') return 0;
        // في الوضع التراكمي: نحترم startFromVerse إن حُدد (من بوابة الخيارات)
        if (mode === 'cumulative' && startFromVerse !== undefined) return startFromVerse;
        // افتراضي: نبدأ من البيت الذي يلي آخر بيت مكتمل
        if (lastCompletedIdx >= 0 && lastCompletedIdx + 1 < totalVerses) {
            return lastCompletedIdx + 1;
        }
        return 0;
    })();
    const initialPhase = mode === 'review' || mode === 'chain' ? 'comprehensive_review' : 'preview';
    const [currentVerseIdx, setCurrentVerseIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialVerseIdx);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPhase);
    const [exerciseSet, setExerciseSet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [exIdx, setExIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [correctCount, setCorrectCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [errorCount, setErrorCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [userAnswer, setUserAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showResult, setShowResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resultQuality, setResultQuality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('correct');
    const [diffTokens, setDiffTokens] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedWordIndices, setSelectedWordIndices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showHint, setShowHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [versesCompleted, setVersesCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showTashkeel, setShowTashkeel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentLevel, setCurrentLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const currentVerse = poem.verses[currentVerseIdx];
    const currentExercise = exerciseSet[exIdx] || null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SessionView.useEffect": ()=>{
            if (!showResult && phase === 'practice' && textareaRef.current) {
                textareaRef.current.focus();
            }
        }
    }["SessionView.useEffect"], [
        exIdx,
        showResult,
        phase
    ]);
    // ===== بدء تمرين مستوى محدد =====
    const startVersePractice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SessionView.useCallback[startVersePractice]": (idx, level = 1)=>{
            const verse = poem.verses[idx];
            if (!verse) return;
            const exercises = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateLevelExercises"])(level, verse, poem.verses);
            setExerciseSet(exercises);
            setCurrentLevel(level);
            setExIdx(0);
            setUserAnswer('');
            setSelectedWordIndices([]);
            setShowResult(false);
            setShowHint(false);
            setDiffTokens([]);
            setPhase('practice');
        }
    }["SessionView.useCallback[startVersePractice]"], [
        poem
    ]);
    const startComprehensiveReview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SessionView.useCallback[startComprehensiveReview]": ()=>{
            if (poem.verses.length === 0) return;
            setExerciseSet((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateComprehensiveReview"])(poem.verses, poem.currentVerseIndex, segmentIndex));
            setExIdx(0);
            setUserAnswer('');
            setSelectedWordIndices([]);
            setShowResult(false);
            setShowHint(false);
            setDiffTokens([]);
            setPhase('comprehensive_review');
        }
    }["SessionView.useCallback[startComprehensiveReview]"], [
        poem
    ]);
    // ===== التحقق من الإجابة =====
    const checkAnswer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SessionView.useCallback[checkAnswer]": ()=>{
            if (!currentExercise) return;
            let answer = userAnswer;
            if (currentExercise.scrambledWords && selectedWordIndices.length > 0) {
                answer = selectedWordIndices.map({
                    "SessionView.useCallback[checkAnswer]": (idx)=>currentExercise.scrambledWords[idx]
                }["SessionView.useCallback[checkAnswer]"]).join(' ');
            }
            if (currentExercise.choices && userAnswer) {
                answer = userAnswer;
            }
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareAnswers"])(answer, currentExercise.answer, {
                requireTashkeel: settings.requireTashkeel
            });
            setResultQuality(result.quality);
            setDiffTokens(result.diffTokens);
            setShowResult(true);
            const isCorrect = result.isCorrect;
            if (isCorrect) {
                setCorrectCount({
                    "SessionView.useCallback[checkAnswer]": (c)=>c + 1
                }["SessionView.useCallback[checkAnswer]"]);
            } else {
                setErrorCount({
                    "SessionView.useCallback[checkAnswer]": (e)=>e + 1
                }["SessionView.useCallback[checkAnswer]"]);
            }
            // تحديث إحصائيات البيت
            const verseIdx = currentExercise.verseIndex;
            const existingStats = statsMap[verseIdx] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultVerseStats"])(verseIdx);
            const updatedStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateVerseStatsAfterAnswer"])(existingStats, result.quality, currentExercise.type);
            onVerseUpdate(poem.id, updatedStats);
            // ===== تسجيل الخطأ أو النجاح في السجل =====
            const verse = poem.verses[verseIdx];
            const level = currentExercise.level ?? null;
            if (!isCorrect && onErrorLog && verse) {
                const hasAjar = Boolean(verse.ajar?.trim());
                const errorType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectErrorType"])(currentExercise.type, result.diffTokens, hasAjar);
                onErrorLog((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createErrorEntry"])({
                    poemId: poem.id,
                    verseIndex: verseIdx,
                    verseText: verse.text,
                    exerciseType: currentExercise.type,
                    source: sessionSource,
                    level,
                    errorType,
                    userAnswer: userAnswer
                }));
            } else if (isCorrect && onSuccessLog) {
                onSuccessLog((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSuccessEntry"])({
                    poemId: poem.id,
                    verseIndex: verseIdx,
                    exerciseType: currentExercise.type,
                    source: sessionSource,
                    level
                }));
            }
        }
    }["SessionView.useCallback[checkAnswer]"], [
        currentExercise,
        userAnswer,
        selectedWordIndices,
        settings,
        statsMap,
        poem,
        onVerseUpdate,
        onErrorLog,
        onSuccessLog,
        sessionSource
    ]);
    // ===== الانتقال إلى البيت التالي أو المراجعة الثنائية =====
    const advanceToNextVerse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SessionView.useCallback[advanceToNextVerse]": ()=>{
            // تسجيل إتمام حفظ البيت الحالي رسميًا
            onCurrentVerseUpdate(poem.id, currentVerseIdx, true);
            const nextIdx = currentVerseIdx + 1;
            // بعد إتمام حفظ بيتين جديدين (فهرس فردي 0-indexed = بيت زوجي 1-indexed) → مراجعة البيتين
            if (currentVerseIdx % 2 === 1) {
                const i1 = currentVerseIdx - 1;
                const i2 = currentVerseIdx;
                const v1 = poem.verses[i1];
                const v2 = poem.verses[i2];
                if (v1 && v2) {
                    setExerciseSet((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatePairReview"])(v1, v2, poem.verses));
                    setExIdx(0);
                    setUserAnswer('');
                    setSelectedWordIndices([]);
                    setShowResult(false);
                    setShowHint(false);
                    setDiffTokens([]);
                    setPhase('pair_review');
                } else {
                    if (nextIdx >= totalVerses) {
                        setVersesCompleted({
                            "SessionView.useCallback[advanceToNextVerse]": (v)=>v + 1
                        }["SessionView.useCallback[advanceToNextVerse]"]);
                        setPhase('session_complete');
                        onSessionComplete(poem.id, correctCount, errorCount);
                        return;
                    }
                    setCurrentVerseIdx(nextIdx);
                    setCurrentLevel(1);
                    setPhase('preview');
                    setExerciseSet([]);
                    setExIdx(0);
                    setUserAnswer('');
                    setSelectedWordIndices([]);
                    setShowResult(false);
                    setShowHint(false);
                    setDiffTokens([]);
                    setVersesCompleted({
                        "SessionView.useCallback[advanceToNextVerse]": (v)=>v + 1
                    }["SessionView.useCallback[advanceToNextVerse]"]);
                }
                return;
            }
            if (nextIdx >= totalVerses) {
                setVersesCompleted({
                    "SessionView.useCallback[advanceToNextVerse]": (v)=>v + 1
                }["SessionView.useCallback[advanceToNextVerse]"]);
                setPhase('session_complete');
                onSessionComplete(poem.id, correctCount, errorCount);
                return;
            }
            setCurrentVerseIdx(nextIdx);
            setCurrentLevel(1);
            setPhase('preview');
            setExerciseSet([]);
            setExIdx(0);
            setUserAnswer('');
            setSelectedWordIndices([]);
            setShowResult(false);
            setShowHint(false);
            setDiffTokens([]);
            setVersesCompleted({
                "SessionView.useCallback[advanceToNextVerse]": (v)=>v + 1
            }["SessionView.useCallback[advanceToNextVerse]"]);
        }
    }["SessionView.useCallback[advanceToNextVerse]"], [
        currentVerseIdx,
        totalVerses,
        poem,
        correctCount,
        errorCount,
        onSessionComplete,
        onCurrentVerseUpdate
    ]);
    // ===== الانتقال بعد إكمال المراجعة الثنائية =====
    const advanceAfterPairReview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SessionView.useCallback[advanceAfterPairReview]": ()=>{
            const nextIdx = currentVerseIdx + 1;
            if (nextIdx >= totalVerses) {
                setPhase('session_complete');
                onSessionComplete(poem.id, correctCount, errorCount);
                return;
            }
            setCurrentVerseIdx(nextIdx);
            setCurrentLevel(1);
            setPhase('preview');
            setExerciseSet([]);
            setExIdx(0);
            setUserAnswer('');
            setSelectedWordIndices([]);
            setShowResult(false);
            setShowHint(false);
            setDiffTokens([]);
        }
    }["SessionView.useCallback[advanceAfterPairReview]"], [
        currentVerseIdx,
        totalVerses,
        poem,
        correctCount,
        errorCount,
        onSessionComplete
    ]);
    // ===== الانتقال بعد الإجابة =====
    const handleNextExercise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SessionView.useCallback[handleNextExercise]": ()=>{
            if (!currentExercise) return;
            const isCorrect = resultQuality === 'mastered' || resultQuality === 'correct';
            // في وضع التدرج (practice phase مع مستويات)
            if (phase === 'practice' && currentExercise.level) {
                const actualLevel = currentExercise.level;
                if (isCorrect) {
                    if (exIdx < exerciseSet.length - 1) {
                        setExIdx(exIdx + 1);
                        setUserAnswer('');
                        setSelectedWordIndices([]);
                        setShowResult(false);
                        setShowHint(false);
                        setDiffTokens([]);
                    } else {
                        const nextLevel = actualLevel + 1;
                        if (nextLevel > 6) {
                            advanceToNextVerse();
                        } else {
                            startVersePractice(currentVerseIdx, nextLevel);
                        }
                    }
                } else {
                    // عند الخطأ: الرجوع مستوى واحدًا فقط (6→5، 5→4، 4→3، 3→2، 2→1، 1→1)
                    const prevLevel = Math.max(1, actualLevel - 1);
                    startVersePractice(currentVerseIdx, prevLevel);
                }
                return;
            }
            // في وضع المراجعة الثنائية أو الشاملة
            if (exIdx < exerciseSet.length - 1) {
                setExIdx(exIdx + 1);
                setUserAnswer('');
                setSelectedWordIndices([]);
                setShowResult(false);
                setShowHint(false);
                setDiffTokens([]);
            } else {
                if (phase === 'pair_review') {
                    advanceAfterPairReview();
                } else if (phase === 'comprehensive_review') {
                    setPhase('session_complete');
                    onSessionComplete(poem.id, correctCount, errorCount);
                }
            }
        }
    }["SessionView.useCallback[handleNextExercise]"], [
        currentExercise,
        resultQuality,
        phase,
        currentVerseIdx,
        exIdx,
        exerciseSet,
        correctCount,
        errorCount,
        poem,
        onSessionComplete,
        startVersePractice,
        advanceToNextVerse,
        advanceAfterPairReview
    ]);
    // بدء المراجعة الشاملة عند التحميل
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SessionView.useEffect": ()=>{
            if (phase === 'comprehensive_review' && exerciseSet.length === 0 && mode !== 'where_am_i') {
                startComprehensiveReview();
            }
        }
    }["SessionView.useEffect"], [
        phase,
        exerciseSet.length,
        mode,
        startComprehensiveReview
    ]);
    // معالجة اختيار كلمة
    const handleWordSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SessionView.useCallback[handleWordSelect]": (wordIdx)=>{
            if (selectedWordIndices.includes(wordIdx)) return;
            setSelectedWordIndices({
                "SessionView.useCallback[handleWordSelect]": (prev)=>[
                        ...prev,
                        wordIdx
                    ]
            }["SessionView.useCallback[handleWordSelect]"]);
        }
    }["SessionView.useCallback[handleWordSelect]"], [
        selectedWordIndices
    ]);
    // إزالة آخر كلمة مختارة
    const handleWordDeselect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SessionView.useCallback[handleWordDeselect]": ()=>{
            setSelectedWordIndices({
                "SessionView.useCallback[handleWordDeselect]": (prev)=>prev.slice(0, -1)
            }["SessionView.useCallback[handleWordDeselect]"]);
        }
    }["SessionView.useCallback[handleWordDeselect]"], []);
    // التحقق التلقائي عند اكتمال الكلمات المختارة
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SessionView.useEffect": ()=>{
            if (!currentExercise?.scrambledWords || !selectedWordIndices.length) return;
            if (currentExercise.level === 4 && currentExercise.subPhase === 1) {
                const blankCount = currentExercise.blankCount || (`${currentExercise.displayedSadr || ''} ${currentExercise.displayedAjar || ''} ${currentExercise.prompt}`.match(/______/g) || []).length;
                if (blankCount > 0 && selectedWordIndices.length === blankCount && !showResult) {
                    const timer = setTimeout({
                        "SessionView.useEffect.timer": ()=>checkAnswer()
                    }["SessionView.useEffect.timer"], 300);
                    return ({
                        "SessionView.useEffect": ()=>clearTimeout(timer)
                    })["SessionView.useEffect"];
                }
            }
            if (currentExercise.level === 2 && selectedWordIndices.length === currentExercise.scrambledWords.length && !showResult) {
                const timer = setTimeout({
                    "SessionView.useEffect.timer": ()=>checkAnswer()
                }["SessionView.useEffect.timer"], 300);
                return ({
                    "SessionView.useEffect": ()=>clearTimeout(timer)
                })["SessionView.useEffect"];
            }
        }
    }["SessionView.useEffect"], [
        selectedWordIndices,
        currentExercise,
        showResult,
        checkAnswer
    ]);
    // ===== شاشة «الأبيات الضعيفة» — قائمة الأبيات التي تحتاج إلى تقوية =====
    if (mode === 'weak_verses') {
        // إذا حُدد بيت ضعيف، نبدأ اختباراته مباشرة باستخدام نفس نظام الحفظ التراكمي
        if (weakVerseIndex !== undefined && weakVerseIndex >= 0 && weakVerseIndex < totalVerses) {
        // هذا السقوط يُنزل إلى عرض الجلسة القياسية أدناه مع initialVerseIdx = weakVerseIndex
        // وبالتالي ي! نحتاج فقط للتأكد أن phase هي 'preview' و currentVerseIdx صحيح
        // وهذا يحدث افتراضيًا بفضل initialVerseIdx أعلاه
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 app-bg flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between session-content py-3 border-b border-[var(--border-0)] glass-header shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-1.5 rounded-md text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[var(--bg-2)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 16,
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 490,
                                    columnNumber: 139
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SessionView.tsx",
                                lineNumber: 490,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-medium text-[var(--text-0)]",
                                        children: poem.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SessionView.tsx",
                                        lineNumber: 492,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-[var(--text-3)]",
                                        children: "الأبيات الضعيفة"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SessionView.tsx",
                                        lineNumber: 493,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SessionView.tsx",
                                lineNumber: 491,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                fileName: "[project]/src/components/SessionView.tsx",
                                lineNumber: 495,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SessionView.tsx",
                        lineNumber: 489,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[var(--text-2)]",
                            children: "اختاري بيتًا ضعيفًا من القائمة"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SessionView.tsx",
                            lineNumber: 498,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SessionView.tsx",
                        lineNumber: 497,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SessionView.tsx",
                lineNumber: 488,
                columnNumber: 9
            }, this);
        }
    }
    // ===== شاشة «أين أنا؟» (معرفة آخر بيت تم حفظه + عرض نصه + التقدم + الأبيات المتبقية) =====
    if (mode === 'where_am_i') {
        const completedVerses = lastCompletedIdx >= 0 ? poem.verses.slice(0, lastCompletedIdx + 1) : [];
        const remainingVerses = lastCompletedIdx >= 0 ? poem.verses.slice(lastCompletedIdx + 1) : poem.verses;
        const lastCompletedVerse = lastCompletedIdx >= 0 ? poem.verses[lastCompletedIdx] : null;
        const progressPct = totalVerses > 0 ? Math.round(completedVerses.length / totalVerses * 100) : 0;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 app-bg flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between session-content py-3 border-b border-[var(--border-0)] glass-header shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1.5 rounded-md text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[var(--bg-2)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 16,
                                strokeWidth: 1.5
                            }, void 0, false, {
                                fileName: "[project]/src/components/SessionView.tsx",
                                lineNumber: 523,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/SessionView.tsx",
                            lineNumber: 519,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-medium text-[var(--text-0)]",
                                    children: poem.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 526,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-[var(--text-3)]",
                                    children: "أين أنا؟ — موضعك الحالي وتقدمك في القصيدة"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 527,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SessionView.tsx",
                            lineNumber: 525,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowTashkeel((s)=>!s),
                                className: "p-1 rounded text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[var(--bg-2)]",
                                children: showTashkeel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 534,
                                    columnNumber: 31
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 534,
                                    columnNumber: 54
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SessionView.tsx",
                                lineNumber: 530,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/SessionView.tsx",
                            lineNumber: 529,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SessionView.tsx",
                    lineNumber: 518,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "session-content py-2 border-b border-[var(--border-0)] glass-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressBar"], {
                            value: progressPct
                        }, void 0, false, {
                            fileName: "[project]/src/components/SessionView.tsx",
                            lineNumber: 541,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-[10px] text-[var(--text-3)] mt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "المحفوظ: ",
                                        completedVerses.length,
                                        " من ",
                                        totalVerses
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 543,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "المتبقي: ",
                                        remainingVerses.length,
                                        " بيت"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 546,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SessionView.tsx",
                            lineNumber: 542,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SessionView.tsx",
                    lineNumber: 540,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto session-content py-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl mx-auto space-y-6 animate-fade-in",
                        children: [
                            lastCompletedVerse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-xl glass-inner border border-[var(--accent)]/30 text-center space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-light)] text-[var(--accent-text)] text-sm font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                                size: 14,
                                                strokeWidth: 2
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SessionView.tsx",
                                                lineNumber: 557,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "أكملتِ ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArabicVerseOrdinal"])(lastCompletedIdx)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SessionView.tsx",
                                                lineNumber: 558,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SessionView.tsx",
                                        lineNumber: 556,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-xl glass-inner border border-[var(--border-0)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PoeticVerseLines, {
                                            sadr: lastCompletedVerse.sadr,
                                            ajar: lastCompletedVerse.ajar,
                                            text: lastCompletedVerse.text,
                                            showTashkeel: showTashkeel,
                                            fontSize: "1.35rem"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SessionView.tsx",
                                            lineNumber: 562,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SessionView.tsx",
                                        lineNumber: 561,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SessionView.tsx",
                                lineNumber: 555,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-xl glass-inner border border-[var(--border-0)] text-center space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-2)] text-[var(--text-1)] text-sm font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                                size: 14,
                                                strokeWidth: 1.8
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SessionView.tsx",
                                                lineNumber: 574,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "لم تكملي حفظ أي بيت بعد"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SessionView.tsx",
                                                lineNumber: 575,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SessionView.tsx",
                                        lineNumber: 573,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[var(--text-2)]",
                                        children: "ابدئي جلسة «الحفظ التراكمي» لحفظ البيت الأول، وسيتحدث موضعك هنا تلقائيًا."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SessionView.tsx",
                                        lineNumber: 577,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SessionView.tsx",
                                lineNumber: 572,
                                columnNumber: 15
                            }, this),
                            completedVerses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-xl glass-inner border border-[var(--border-0)] space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold text-[var(--text-0)]",
                                                children: "ما أتممتِ حفظه:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SessionView.tsx",
                                                lineNumber: 587,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "success",
                                                children: [
                                                    completedVerses.length,
                                                    " مكتمل"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SessionView.tsx",
                                                lineNumber: 588,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SessionView.tsx",
                                        lineNumber: 586,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: completedVerses.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-3 p-3 rounded-lg glass-inner border border-[var(--border-0)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2.5 shrink-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--success-light)] text-[var(--success)] text-xs font-bold",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SessionView.tsx",
                                                                lineNumber: 597,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-semibold text-[var(--text-0)]",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArabicVerseOrdinal"])(v.index)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SessionView.tsx",
                                                                lineNumber: 600,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SessionView.tsx",
                                                        lineNumber: 596,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-[var(--text-2)] truncate flex-1 text-left",
                                                        style: {
                                                            fontFamily: 'var(--font-poem)'
                                                        },
                                                        children: [
                                                            showTashkeel ? v.sadr : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeTashkeel"])(v.sadr),
                                                            v.ajar ? ' ...' : ''
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SessionView.tsx",
                                                        lineNumber: 604,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, v.index, true, {
                                                fileName: "[project]/src/components/SessionView.tsx",
                                                lineNumber: 592,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SessionView.tsx",
                                        lineNumber: 590,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SessionView.tsx",
                                lineNumber: 585,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-xl glass-inner border border-[var(--border-0)] space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold text-[var(--text-0)]",
                                                children: "الأبيات المتبقية:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SessionView.tsx",
                                                lineNumber: 620,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "default",
                                                children: [
                                                    remainingVerses.length,
                                                    " متبقٍ"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SessionView.tsx",
                                                lineNumber: 621,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SessionView.tsx",
                                        lineNumber: 619,
                                        columnNumber: 15
                                    }, this),
                                    remainingVerses.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-2 py-6 text-[var(--success)] text-sm font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SessionView.tsx",
                                                lineNumber: 626,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "أتممتِ حفظ جميع أبيات القصيدة بحمد الله!"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SessionView.tsx",
                                                lineNumber: 627,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SessionView.tsx",
                                        lineNumber: 625,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: remainingVerses.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-3 p-3 rounded-lg glass-inner border border-[var(--border-0)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-[var(--text-1)] shrink-0",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArabicVerseOrdinal"])(v.index)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SessionView.tsx",
                                                        lineNumber: 636,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-[var(--text-3)] truncate flex-1 text-left",
                                                        style: {
                                                            fontFamily: 'var(--font-poem)'
                                                        },
                                                        children: [
                                                            showTashkeel ? v.sadr : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeTashkeel"])(v.sadr),
                                                            v.ajar ? ' ...' : ''
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SessionView.tsx",
                                                        lineNumber: 639,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, v.index, true, {
                                                fileName: "[project]/src/components/SessionView.tsx",
                                                lineNumber: 632,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SessionView.tsx",
                                        lineNumber: 630,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SessionView.tsx",
                                lineNumber: 618,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center pt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "primary",
                                    onClick: onClose,
                                    children: "عودة"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 653,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SessionView.tsx",
                                lineNumber: 652,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SessionView.tsx",
                        lineNumber: 552,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/SessionView.tsx",
                    lineNumber: 551,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SessionView.tsx",
            lineNumber: 516,
            columnNumber: 7
        }, this);
    }
    // ===== العرض القياسي للجلسات (الحفظ التراكمي / مراجعة البيتين / المراجعة الشاملة بنظام الرباعيات) =====
    const verseProgress = Math.round(versesCompleted / Math.max(totalVerses, 1) * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 app-bg flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between session-content py-3 border-b border-[var(--border-0)] glass-header shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "p-1.5 rounded-md text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[var(--bg-2)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 16,
                            strokeWidth: 1.5
                        }, void 0, false, {
                            fileName: "[project]/src/components/SessionView.tsx",
                            lineNumber: 674,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SessionView.tsx",
                        lineNumber: 670,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium text-[var(--text-0)]",
                                children: poem.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/SessionView.tsx",
                                lineNumber: 677,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-[var(--text-3)]",
                                children: [
                                    phase === 'practice' && currentExercise?.level === 4 && currentExercise?.subPhase === 1 && `المستوى 4A من 6`,
                                    phase === 'practice' && currentExercise?.level === 4 && currentExercise?.subPhase === 2 && `المستوى 4B من 6`,
                                    phase === 'practice' && currentExercise?.level !== 4 && `المستوى ${currentLevel} من 6`,
                                    phase === 'preview' && `البيت ${currentVerseIdx + 1} من ${totalVerses}`,
                                    phase === 'pair_review' && 'مراجعة البيتين',
                                    phase === 'comprehensive_review' && (currentExercise?.segmentTitle ? `المراجعة الشاملة · ${currentExercise.segmentTitle}` : 'المراجعة الشاملة'),
                                    phase === 'session_complete' && 'اكتملت الجلسة'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SessionView.tsx",
                                lineNumber: 678,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SessionView.tsx",
                        lineNumber: 676,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowTashkeel((s)=>!s),
                            className: "p-1 rounded text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[var(--bg-2)]",
                            children: showTashkeel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/SessionView.tsx",
                                lineNumber: 696,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/SessionView.tsx",
                                lineNumber: 696,
                                columnNumber: 52
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/SessionView.tsx",
                            lineNumber: 692,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SessionView.tsx",
                        lineNumber: 691,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SessionView.tsx",
                lineNumber: 669,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "session-content py-2 border-b border-[var(--border-0)] glass-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressBar"], {
                        value: phase === 'comprehensive_review' && exerciseSet.length > 0 ? Math.round(exIdx / exerciseSet.length * 100) : verseProgress
                    }, void 0, false, {
                        fileName: "[project]/src/components/SessionView.tsx",
                        lineNumber: 703,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-[10px] text-[var(--text-3)] mt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: phase === 'comprehensive_review' && currentExercise ? `${currentExercise.segmentTitle || 'المراجعة'} (${exIdx + 1} / ${exerciseSet.length})` : `البيت ${currentVerseIdx + 1} / ${totalVerses}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/SessionView.tsx",
                                lineNumber: 711,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "✓ ",
                                    correctCount,
                                    " · ✗ ",
                                    errorCount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SessionView.tsx",
                                lineNumber: 716,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SessionView.tsx",
                        lineNumber: 710,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SessionView.tsx",
                lineNumber: 702,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto session-content py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto",
                    children: [
                        phase === 'preview' && currentVerse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[var(--text-3)]",
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArabicVerseOrdinal"])(currentVerseIdx),
                                            " (",
                                            currentVerseIdx + 1,
                                            " من ",
                                            totalVerses,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SessionView.tsx",
                                        lineNumber: 729,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 728,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 p-6 rounded-xl glass-inner border border-[var(--border-0)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PoeticVerseLines, {
                                        sadr: currentVerse.sadr,
                                        ajar: currentVerse.ajar,
                                        text: currentVerse.text,
                                        showTashkeel: showTashkeel,
                                        fontSize: "1.4rem"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SessionView.tsx",
                                        lineNumber: 735,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 734,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "primary",
                                        onClick: ()=>startVersePractice(currentVerseIdx, 1),
                                        children: "ابدئي التمرين"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SessionView.tsx",
                                        lineNumber: 745,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 744,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SessionView.tsx",
                            lineNumber: 727,
                            columnNumber: 13
                        }, this),
                        (phase === 'practice' || phase === 'pair_review' || phase === 'comprehensive_review') && currentExercise && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-fade-in",
                            children: [
                                phase === 'comprehensive_review' && currentExercise.segmentTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-2 mb-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "accent",
                                        children: [
                                            currentExercise.segmentTitle,
                                            currentExercise.segmentRange ? ` · ${currentExercise.segmentRange}` : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SessionView.tsx",
                                        lineNumber: 759,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 758,
                                    columnNumber: 19
                                }, this),
                                phase === 'practice' && currentExercise.level && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-1.5 mb-4",
                                    children: [
                                        [
                                            1,
                                            2,
                                            3,
                                            4,
                                            5,
                                            6
                                        ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-8 h-2 rounded-full transition-all duration-300 ${l < currentLevel ? 'bg-[var(--success)]' : l === currentLevel ? 'bg-[var(--accent)]' : 'bg-[var(--bg-3)]'}`
                                            }, l, false, {
                                                fileName: "[project]/src/components/SessionView.tsx",
                                                lineNumber: 770,
                                                columnNumber: 23
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] text-[var(--text-2)] mr-2",
                                            children: [
                                                "المستوى ",
                                                currentLevel,
                                                currentExercise?.level === 4 && currentExercise?.subPhase === 1 ? 'A' : '',
                                                currentExercise?.level === 4 && currentExercise?.subPhase === 2 ? 'B' : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SessionView.tsx",
                                            lineNumber: 781,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 768,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-2 mb-4 text-xs text-[var(--text-2)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExerciseLabel"])(currentExercise.type)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SessionView.tsx",
                                            lineNumber: 791,
                                            columnNumber: 19
                                        }, this),
                                        phase === 'pair_review' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "· مراجعة البيتين"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SessionView.tsx",
                                            lineNumber: 792,
                                            columnNumber: 47
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "· ",
                                                exIdx + 1,
                                                "/",
                                                exerciseSet.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SessionView.tsx",
                                            lineNumber: 793,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 790,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 p-5 rounded-xl glass-inner border border-[var(--border-0)] space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center text-sm font-medium text-[var(--text-1)]",
                                            children: currentExercise.prompt.split('\n').map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: line
                                                }, i, false, {
                                                    fileName: "[project]/src/components/SessionView.tsx",
                                                    lineNumber: 805,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SessionView.tsx",
                                            lineNumber: 800,
                                            columnNumber: 19
                                        }, this),
                                        (currentExercise.displayedSadr || currentExercise.displayedAjar) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-2 border-t border-[var(--border-0)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PoeticVerseLines, {
                                                sadr: currentExercise.displayedSadr,
                                                ajar: currentExercise.displayedAjar,
                                                showTashkeel: showTashkeel,
                                                fontSize: "1.25rem"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SessionView.tsx",
                                                lineNumber: 811,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SessionView.tsx",
                                            lineNumber: 810,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 799,
                                    columnNumber: 17
                                }, this),
                                !showResult ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        currentExercise.choices && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2.5",
                                            children: currentExercise.choices.map((choice, i)=>{
                                                const cv = currentExercise.choiceVerses?.[i];
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setUserAnswer(choice);
                                                        setSelectedWordIndices([]);
                                                    },
                                                    className: `w-full p-4 rounded-xl border transition-all ${userAnswer === choice ? 'border-[var(--accent)] bg-[var(--accent-light)] text-[var(--accent-text)]' : 'border-[var(--border-0)] glass-inner text-[var(--text-0)] hover:border-[var(--border-1)]'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PoeticVerseLines, {
                                                        sadr: cv?.sadr,
                                                        ajar: cv?.ajar,
                                                        text: choice,
                                                        showTashkeel: showTashkeel,
                                                        fontSize: "1.05rem"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SessionView.tsx",
                                                        lineNumber: 841,
                                                        columnNumber: 31
                                                    }, this)
                                                }, i, false, {
                                                    fileName: "[project]/src/components/SessionView.tsx",
                                                    lineNumber: 829,
                                                    columnNumber: 29
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SessionView.tsx",
                                            lineNumber: 825,
                                            columnNumber: 23
                                        }, this),
                                        currentExercise.scrambledWords && !(currentExercise.level === 4 && currentExercise.subPhase === 2) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2 justify-center",
                                                    children: currentExercise.scrambledWords.map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleWordSelect(i),
                                                            className: `word-tag ${selectedWordIndices.includes(i) ? 'selected' : ''}`,
                                                            disabled: selectedWordIndices.includes(i),
                                                            children: showTashkeel ? word : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeTashkeel"])(word)
                                                        }, i, false, {
                                                            fileName: "[project]/src/components/SessionView.tsx",
                                                            lineNumber: 860,
                                                            columnNumber: 31
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SessionView.tsx",
                                                    lineNumber: 858,
                                                    columnNumber: 27
                                                }, this),
                                                selectedWordIndices.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-[var(--text-2)] mb-2",
                                                            children: "ترتيبك:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SessionView.tsx",
                                                            lineNumber: 873,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2 justify-center",
                                                            children: selectedWordIndices.map((idx, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[var(--accent-light)] text-[var(--accent-text)] text-sm",
                                                                    style: {
                                                                        fontFamily: 'var(--font-poem)'
                                                                    },
                                                                    children: [
                                                                        currentExercise.scrambledWords[idx],
                                                                        i === selectedWordIndices.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: handleWordDeselect,
                                                                            className: "text-[var(--text-3)] hover:text-[var(--error)] text-xs",
                                                                            children: "✕"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/SessionView.tsx",
                                                                            lineNumber: 883,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    ]
                                                                }, i, true, {
                                                                    fileName: "[project]/src/components/SessionView.tsx",
                                                                    lineNumber: 876,
                                                                    columnNumber: 35
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SessionView.tsx",
                                                            lineNumber: 874,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleWordDeselect,
                                                            className: "text-xs text-[var(--text-3)] hover:text-[var(--error)] mt-2",
                                                            children: "← تراجع عن آخر كلمة"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SessionView.tsx",
                                                            lineNumber: 893,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SessionView.tsx",
                                                    lineNumber: 872,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SessionView.tsx",
                                            lineNumber: 857,
                                            columnNumber: 25
                                        }, this),
                                        !currentExercise.choices && !(currentExercise.scrambledWords && (currentExercise.level === 2 || currentExercise.level === 4 && currentExercise.subPhase === 1)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                ref: textareaRef,
                                                value: userAnswer,
                                                onChange: (e)=>setUserAnswer(e.target.value),
                                                onKeyDown: (e)=>{
                                                    if (e.key === 'Enter' && !e.shiftKey) {
                                                        e.preventDefault();
                                                        if (userAnswer.trim()) checkAnswer();
                                                    }
                                                },
                                                className: "w-full px-4 py-3 rounded-xl border border-[var(--border-1)] bg-[var(--glass-bg)] backdrop-blur-[8px] text-[var(--text-0)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors outline-none resize-none",
                                                style: {
                                                    fontFamily: 'var(--font-poem)',
                                                    fontSize: '1rem',
                                                    lineHeight: '2',
                                                    minHeight: '80px'
                                                },
                                                placeholder: "اكتبي إجابتك هنا...",
                                                dir: "rtl"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SessionView.tsx",
                                                lineNumber: 912,
                                                columnNumber: 27
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SessionView.tsx",
                                            lineNumber: 911,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-3",
                                            children: [
                                                currentExercise.hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "sm",
                                                    onClick: ()=>setShowHint((h)=>!h),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SessionView.tsx",
                                                            lineNumber: 939,
                                                            columnNumber: 27
                                                        }, this),
                                                        "تلميح"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SessionView.tsx",
                                                    lineNumber: 938,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "primary",
                                                    onClick: checkAnswer,
                                                    disabled: !currentExercise.choices && !(currentExercise.scrambledWords && selectedWordIndices.length > 0) && !userAnswer.trim(),
                                                    children: "تحقق"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SessionView.tsx",
                                                    lineNumber: 943,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SessionView.tsx",
                                            lineNumber: 936,
                                            columnNumber: 21
                                        }, this),
                                        showHint && currentExercise.hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center text-sm text-[var(--text-2)] p-3 rounded-lg glass-inner animate-fade-in",
                                            children: [
                                                "💡 ",
                                                currentExercise.hint
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SessionView.tsx",
                                            lineNumber: 958,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 822,
                                    columnNumber: 19
                                }, this) : /* ===== النتيجة ===== */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-fade-in text-center space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${resultQuality === 'mastered' ? 'bg-[var(--success-light)] text-[var(--success)]' : resultQuality === 'correct' ? 'bg-[var(--success-light)] text-[var(--success)]' : resultQuality === 'review' ? 'bg-[var(--warning-light)] text-[var(--warning)]' : 'bg-[var(--error-light)] text-[var(--error)]'}`,
                                            children: [
                                                resultQuality === 'mastered' && '✓ متقن!',
                                                resultQuality === 'correct' && '✓ صحيح',
                                                resultQuality === 'review' && '~ يحتاج مراجعة',
                                                resultQuality === 'wrong' && '✗ خطأ'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SessionView.tsx",
                                            lineNumber: 966,
                                            columnNumber: 21
                                        }, this),
                                        diffTokens.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 rounded-xl glass-inner border border-[var(--border-0)]",
                                            style: {
                                                fontFamily: 'var(--font-poem)',
                                                fontSize: '1rem',
                                                lineHeight: '2'
                                            },
                                            children: diffTokens.map((token, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: token.type === 'correct' ? 'diff-correct' : token.type === 'missing' ? 'diff-missing' : token.type === 'extra' ? 'diff-error' : 'diff-error',
                                                    children: [
                                                        token.text,
                                                        ' '
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/components/SessionView.tsx",
                                                    lineNumber: 990,
                                                    columnNumber: 27
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SessionView.tsx",
                                            lineNumber: 985,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 rounded-xl glass-inner border border-[var(--border-0)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-[var(--text-3)] mb-2",
                                                    children: "الإجابة الصحيحة:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SessionView.tsx",
                                                    lineNumber: 1010,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PoeticVerseLines, {
                                                    text: currentExercise.answer,
                                                    showTashkeel: showTashkeel,
                                                    fontSize: "1.1rem"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SessionView.tsx",
                                                    lineNumber: 1011,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SessionView.tsx",
                                            lineNumber: 1009,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "primary",
                                            onClick: handleNextExercise,
                                            children: "التالي ←"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SessionView.tsx",
                                            lineNumber: 1018,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 965,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SessionView.tsx",
                            lineNumber: 755,
                            columnNumber: 15
                        }, this),
                        phase === 'session_complete' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-fade-in text-center py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 rounded-full bg-[var(--success-light)] flex items-center justify-center mx-auto mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SessionView.tsx",
                                        lineNumber: 1030,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 1029,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-[var(--text-0)] mb-2",
                                    children: "اكتملت الجلسة!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 1032,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[var(--text-2)] mb-6",
                                    children: poem.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 1033,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-6 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-[var(--success)]",
                                                    children: correctCount
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SessionView.tsx",
                                                    lineNumber: 1037,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-[var(--text-3)]",
                                                    children: "صحيح"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SessionView.tsx",
                                                    lineNumber: 1038,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SessionView.tsx",
                                            lineNumber: 1036,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-[var(--error)]",
                                                    children: errorCount
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SessionView.tsx",
                                                    lineNumber: 1041,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-[var(--text-3)]",
                                                    children: "خطأ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SessionView.tsx",
                                                    lineNumber: 1042,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SessionView.tsx",
                                            lineNumber: 1040,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-[var(--text-0)]",
                                                    children: versesCompleted
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SessionView.tsx",
                                                    lineNumber: 1045,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-[var(--text-3)]",
                                                    children: "أبيات"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SessionView.tsx",
                                                    lineNumber: 1046,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SessionView.tsx",
                                            lineNumber: 1044,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 1035,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "primary",
                                    onClick: onClose,
                                    children: "عودة"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SessionView.tsx",
                                    lineNumber: 1050,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SessionView.tsx",
                            lineNumber: 1028,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SessionView.tsx",
                    lineNumber: 724,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SessionView.tsx",
                lineNumber: 723,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SessionView.tsx",
        lineNumber: 667,
        columnNumber: 5
    }, this);
}
_s(SessionView, "zaV0x3nKvkCXJFrGuoVZLQHV6V0=");
_c1 = SessionView;
var _c, _c1;
__turbopack_context__.k.register(_c, "PoeticVerseLines");
__turbopack_context__.k.register(_c1, "SessionView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ReadingView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReadingView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.mjs [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.mjs [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.mjs [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.mjs [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/poem-parser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/algorithm.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function findArabicVoice() {
    if (!('speechSynthesis' in window)) return null;
    const v = window.speechSynthesis.getVoices();
    return v.find((x)=>x.lang === 'ar-SA') || v.find((x)=>x.lang === 'ar-EG') || v.find((x)=>x.lang.startsWith('ar')) || null;
}
function ReadingView({ poem, stats, settings, onClose }) {
    _s();
    const [fontSize, setFontSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings.fontSize);
    const [showTashkeel, setShowTashkeel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showNumbers, setShowNumbers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings.showVerseNumbers);
    const [showStability, setShowStability] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [speaking, setSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ttsAvailable, setTtsAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fontSizes = [
        '1.1rem',
        '1.4rem',
        '1.7rem'
    ];
    const fs = fontSizes[fontSize - 1] || '1.4rem';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReadingView.useEffect": ()=>{
            if (!('speechSynthesis' in window)) {
                setTtsAvailable(false);
                return;
            }
            const check = {
                "ReadingView.useEffect.check": ()=>setTtsAvailable(Boolean(findArabicVoice()))
            }["ReadingView.useEffect.check"];
            check();
            window.speechSynthesis.onvoiceschanged = check;
            setTimeout(check, 500);
        }
    }["ReadingView.useEffect"], []);
    const speak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReadingView.useCallback[speak]": (text)=>{
            if (!('speechSynthesis' in window)) return;
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(text);
            u.lang = 'ar-SA';
            u.rate = settings.speechRate;
            u.pitch = settings.speechPitch;
            u.volume = 1;
            const v = findArabicVoice();
            if (v) u.voice = v;
            u.onstart = ({
                "ReadingView.useCallback[speak]": ()=>setSpeaking(true)
            })["ReadingView.useCallback[speak]"];
            u.onend = ({
                "ReadingView.useCallback[speak]": ()=>setSpeaking(false)
            })["ReadingView.useCallback[speak]"];
            u.onerror = ({
                "ReadingView.useCallback[speak]": ()=>setSpeaking(false)
            })["ReadingView.useCallback[speak]"];
            try {
                window.speechSynthesis.speak(u);
            } catch  {}
        }
    }["ReadingView.useCallback[speak]"], [
        settings
    ]);
    const stopSpeaking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReadingView.useCallback[stopSpeaking]": ()=>{
            if ('speechSynthesis' in window) window.speechSynthesis.cancel();
            setSpeaking(false);
        }
    }["ReadingView.useCallback[stopSpeaking]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReadingView.useEffect": ()=>{
            return ({
                "ReadingView.useEffect": ()=>{
                    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                }
            })["ReadingView.useEffect"];
        }
    }["ReadingView.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 app-bg flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-2.5 border-b border-[var(--border-0)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "p-1.5 rounded-md text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[var(--bg-2)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 16,
                            strokeWidth: 1.5
                        }, void 0, false, {
                            fileName: "[project]/src/components/ReadingView.tsx",
                            lineNumber: 42,
                            columnNumber: 135
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReadingView.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium text-[var(--text-0)]",
                                children: poem.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReadingView.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-[var(--text-3)]",
                                children: poem.poet
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReadingView.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReadingView.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFontSize((f)=>Math.max(1, f - 1)),
                                className: "p-1 rounded text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[var(--bg-2)] disabled:opacity-30",
                                disabled: fontSize <= 1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReadingView.tsx",
                                    lineNumber: 48,
                                    columnNumber: 212
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReadingView.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFontSize((f)=>Math.min(3, f + 1)),
                                className: "p-1 rounded text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[var(--bg-2)] disabled:opacity-30",
                                disabled: fontSize >= 3,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReadingView.tsx",
                                    lineNumber: 49,
                                    columnNumber: 212
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReadingView.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowTashkeel((s)=>!s),
                                className: "p-1 rounded text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[var(--bg-2)]",
                                children: showTashkeel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReadingView.tsx",
                                    lineNumber: 50,
                                    columnNumber: 171
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReadingView.tsx",
                                    lineNumber: 50,
                                    columnNumber: 194
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReadingView.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowNumbers((s)=>!s),
                                className: "p-1 rounded text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[var(--bg-2)] text-[10px]",
                                children: "#"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReadingView.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowStability((s)=>!s),
                                className: "p-1 rounded text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[var(--bg-2)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                    size: 12,
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReadingView.tsx",
                                    lineNumber: 52,
                                    columnNumber: 156
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReadingView.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            ttsAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>speaking ? stopSpeaking() : speak(poem.verses.map((v)=>v.text).join('. ')),
                                className: "p-1 rounded text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[var(--bg-2)]",
                                children: speaking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReadingView.tsx",
                                    lineNumber: 53,
                                    columnNumber: 234
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReadingView.tsx",
                                    lineNumber: 53,
                                    columnNumber: 258
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReadingView.tsx",
                                lineNumber: 53,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReadingView.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReadingView.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto session-content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto py-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-bold text-[var(--text-0)] mb-1",
                                    children: poem.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReadingView.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[var(--text-2)]",
                                    children: poem.poet
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReadingView.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-4 my-6 text-[var(--border-1)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-px flex-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReadingView.tsx",
                                            lineNumber: 62,
                                            columnNumber: 97
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs",
                                            children: "✦"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReadingView.tsx",
                                            lineNumber: 62,
                                            columnNumber: 129
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-px flex-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReadingView.tsx",
                                            lineNumber: 62,
                                            columnNumber: 163
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ReadingView.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ReadingView.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: poem.verses.map((verse)=>{
                                const vs = stats?.verses[verse.index];
                                const stability = vs?.memory.standalone || 'new';
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 py-2 px-3 rounded-lg transition-colors hover:bg-[var(--bg-1)]",
                                    children: [
                                        showNumbers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "verse-num",
                                            children: verse.index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReadingView.tsx",
                                            lineNumber: 71,
                                            columnNumber: 35
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 text-center",
                                            style: {
                                                fontFamily: 'var(--font-poem)',
                                                fontSize: fs,
                                                lineHeight: '2.2',
                                                color: 'var(--text-0)'
                                            },
                                            children: verse.ajar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    showTashkeel ? verse.sadr : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeTashkeel"])(verse.sadr),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--border-1)] mx-3 text-sm",
                                                        children: "✦"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ReadingView.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 81
                                                    }, this),
                                                    showTashkeel ? verse.ajar : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeTashkeel"])(verse.ajar)
                                                ]
                                            }, void 0, true) : showTashkeel ? verse.text : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeTashkeel"])(verse.text)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReadingView.tsx",
                                            lineNumber: 72,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 shrink-0",
                                            children: showStability && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-[var(--text-3)]",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStabilityLabel"])(stability)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ReadingView.tsx",
                                                lineNumber: 78,
                                                columnNumber: 39
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReadingView.tsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, verse.index, true, {
                                    fileName: "[project]/src/components/ReadingView.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/ReadingView.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ReadingView.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ReadingView.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ReadingView.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(ReadingView, "d7e6NFZSV7HRmxnrw9ib/DV04r0=");
_c = ReadingView;
var _c;
__turbopack_context__.k.register(_c, "ReadingView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/StatsView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.mjs [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/algorithm.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/errorLog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function StatsView({ poem, stats, errorLog, onClose }) {
    const total = poem.verses.length;
    // ===== مستويات الحفظ =====
    const progress = stats ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverallProgress"])(stats.verses, total) : {
        mastered: 0,
        strong: 0,
        medium: 0,
        weak: 0,
        learning: 0,
        newCount: total
    };
    // ===== نسبة الحفظ الحقيقية (medium + strong + mastered) =====
    const memorizationRate = stats ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcMemorizationRate"])(stats.verses, total) : 0;
    // ===== الجلسات الفعلية =====
    const totalSessions = stats?.totalSessions || 0;
    // ===== الصحيح والخطأ الفعلي =====
    const totalCorrect = stats?.totalCorrect || 0;
    const totalErrors = stats?.totalErrors || 0;
    // ===== أيام التعلم (الأيام التقويمية الفريدة) =====
    const learnDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLearnDays"])(poem.studyDays);
    // ===== يوم متتالي =====
    const streak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcStreak"])(poem.studyDays);
    // ===== منذ آخر جلسة =====
    const lastSessionLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeSince"])(stats?.lastSession ?? null);
    // ===== الأبيات الضعيفة (خطأ فعلي) =====
    const weakIndices = stats ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeakVerseIndices"])(stats.verses, total) : [];
    // ===== سجل الأخطاء لهذه القصيدة =====
    const poemErrors = errorLog.filter((e)=>e.poemId === poem.id).sort((a, b)=>b.timestamp - a.timestamp).slice(0, 10);
    // ===== الأبيات الأصعب (من stats) =====
    const hardestVerses = stats ? Object.values(stats.verses).filter((vs)=>vs.errors > 0).sort((a, b)=>b.errors - a.errors).slice(0, 5) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg max-h-[92vh] glass-modal rounded-xl overflow-hidden animate-scale-in flex flex-col",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-4 border-b border-[var(--border-0)] shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-sm font-semibold text-[var(--text-0)]",
                                    children: "إحصائيات"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StatsView.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-[var(--text-3)]",
                                    children: [
                                        poem.title,
                                        " — ",
                                        poem.poet
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StatsView.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StatsView.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1 rounded-md text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[var(--bg-2)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 14,
                                strokeWidth: 1.5
                            }, void 0, false, {
                                fileName: "[project]/src/components/StatsView.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/StatsView.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StatsView.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 overflow-y-auto flex-1 flex flex-col gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-end px-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold text-[var(--text-1)]",
                                            children: "نسبة الحفظ الحقيقية"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StatsView.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-extrabold text-[var(--accent)] tabular-nums",
                                            children: [
                                                memorizationRate,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StatsView.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StatsView.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressBar"], {
                                    value: memorizationRate,
                                    className: "h-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StatsView.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-[var(--text-3)] text-center font-bold opacity-60",
                                    children: [
                                        "(",
                                        progress.medium + progress.strong + progress.mastered,
                                        " من ",
                                        total,
                                        " بيت متقن أو ثابت)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StatsView.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StatsView.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                {
                                    label: 'جلسات',
                                    value: totalSessions,
                                    color: 'text-[var(--text-0)]'
                                },
                                {
                                    label: 'أيام التعلم',
                                    value: learnDays,
                                    color: 'text-[var(--text-0)]'
                                },
                                {
                                    label: 'إجابة صحيحة',
                                    value: totalCorrect,
                                    color: 'text-[var(--success)]'
                                },
                                {
                                    label: 'أخطاء',
                                    value: totalErrors,
                                    color: 'text-[var(--error)]'
                                }
                            ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 glass-inner rounded-2xl flex flex-col items-center gap-1 border border-[var(--border-0)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-xl font-extrabold ${s.color} tabular-nums`,
                                            children: s.value
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StatsView.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-[var(--text-3)] font-bold uppercase tracking-wider",
                                            children: s.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StatsView.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/StatsView.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/StatsView.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 justify-center items-center py-2",
                            children: [
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
                                    value: streak,
                                    label: 'يوم متتالي',
                                    color: 'text-orange-500'
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                                    value: learnDays,
                                    label: 'يوم تعلم',
                                    color: 'text-blue-500'
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                                    value: stats?.lastSession ? lastSessionLabel : '—',
                                    label: 'آخر جلسة',
                                    color: 'text-purple-500'
                                }
                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-9 h-9 rounded-full bg-white/40 dark:bg-black/20 flex items-center justify-center ${item.color}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                size: 18,
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StatsView.tsx",
                                                lineNumber: 127,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StatsView.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-extrabold text-[var(--text-0)] leading-none truncate max-w-[80px]",
                                                    children: item.value
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StatsView.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[9px] text-[var(--text-3)] font-bold uppercase tracking-tight mt-1 opacity-60",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StatsView.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StatsView.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/StatsView.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/StatsView.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xs font-bold text-[var(--text-1)] px-1 uppercase tracking-widest flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            size: 14,
                                            strokeWidth: 2.5
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StatsView.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        "مستويات الحفظ"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StatsView.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2 glass-inner rounded-3xl p-5 border border-[var(--border-0)]",
                                    children: [
                                        {
                                            l: 'متقن',
                                            c: progress.mastered,
                                            color: 'bg-amber-500',
                                            cl: 'text-amber-600'
                                        },
                                        {
                                            l: 'ثابت',
                                            c: progress.strong,
                                            color: 'bg-emerald-500',
                                            cl: 'text-emerald-600'
                                        },
                                        {
                                            l: 'متوسط',
                                            c: progress.medium,
                                            color: 'bg-violet-500',
                                            cl: 'text-violet-600'
                                        },
                                        {
                                            l: 'ضعيف',
                                            c: progress.weak,
                                            color: 'bg-orange-500',
                                            cl: 'text-orange-600'
                                        },
                                        {
                                            l: 'جديد',
                                            c: progress.learning + progress.newCount,
                                            color: 'bg-gray-400',
                                            cl: 'text-gray-500'
                                        }
                                    ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-bold w-10 shrink-0 ${x.cl}`,
                                                    children: x.l
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StatsView.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 h-2.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden relative border border-black/5 shadow-inner",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `absolute top-0 bottom-0 right-0 rounded-full transition-all duration-1000 ease-out ${x.color}`,
                                                        style: {
                                                            width: total > 0 ? `${Math.round(x.c / total * 100)}%` : '0%'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/StatsView.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StatsView.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-extrabold text-[var(--text-2)] w-8 text-left tabular-nums",
                                                    children: x.c
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StatsView.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, x.l, true, {
                                            fileName: "[project]/src/components/StatsView.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StatsView.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StatsView.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        weakIndices.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xs font-medium text-[var(--text-1)] mb-2 flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            size: 13,
                                            strokeWidth: 1.5,
                                            className: "text-[var(--warning)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StatsView.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        "الأبيات الضعيفة (",
                                        weakIndices.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StatsView.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: weakIndices.slice(0, 5).map((vIdx)=>{
                                        const v = poem.verses[vIdx];
                                        const vs = stats?.verses[vIdx];
                                        if (!v || !vs) return null;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2.5 rounded-lg bg-[var(--error-light)] border border-[var(--error)]/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-[var(--text-1)] truncate",
                                                    style: {
                                                        fontFamily: 'var(--font-poem)'
                                                    },
                                                    children: [
                                                        vIdx + 1,
                                                        ". ",
                                                        v.sadr
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/StatsView.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "error",
                                                            children: [
                                                                vs.errors,
                                                                " خطأ"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/StatsView.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-[var(--text-3)]",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStabilityLabel"])(vs.memory.standalone)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/StatsView.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/StatsView.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, vIdx, true, {
                                            fileName: "[project]/src/components/StatsView.tsx",
                                            lineNumber: 178,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StatsView.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StatsView.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this),
                        poemErrors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xs font-medium text-[var(--text-1)] mb-2",
                                    children: "آخر الأخطاء"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StatsView.tsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: poemErrors.map((err)=>{
                                        const verse = poem.verses[err.verseIndex];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 rounded-lg glass-inner text-[11px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-2 mb-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-[var(--text-0)]",
                                                            children: [
                                                                "البيت ",
                                                                err.verseIndex + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/StatsView.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[var(--text-3)]",
                                                            children: err.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/StatsView.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/StatsView.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 23
                                                }, this),
                                                verse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[var(--text-2)] truncate",
                                                    style: {
                                                        fontFamily: 'var(--font-poem)'
                                                    },
                                                    children: verse.sadr
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StatsView.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "error",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getErrorTypeLabel"])(err.errorType)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/StatsView.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 25
                                                        }, this),
                                                        err.level && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[var(--text-3)]",
                                                            children: [
                                                                "م",
                                                                err.level
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/StatsView.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 39
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/StatsView.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, err.id, true, {
                                            fileName: "[project]/src/components/StatsView.tsx",
                                            lineNumber: 201,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StatsView.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StatsView.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this),
                        hardestVerses.length > 0 && poemErrors.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xs font-medium text-[var(--text-1)] mb-2",
                                    children: "الأبيات الأصعب"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StatsView.tsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: hardestVerses.map((vs)=>{
                                        const v = poem.verses[vs.verseIndex];
                                        if (!v) return null;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 rounded-lg glass-inner",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-[var(--text-1)] truncate",
                                                    style: {
                                                        fontFamily: 'var(--font-poem)'
                                                    },
                                                    children: [
                                                        vs.verseIndex + 1,
                                                        ". ",
                                                        v.text
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/StatsView.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "error",
                                                            children: [
                                                                vs.errors,
                                                                " خطأ"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/StatsView.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-[var(--text-3)]",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStabilityLabel"])(vs.memory.standalone)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/StatsView.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/StatsView.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, vs.verseIndex, true, {
                                            fileName: "[project]/src/components/StatsView.tsx",
                                            lineNumber: 231,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StatsView.tsx",
                                    lineNumber: 226,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StatsView.tsx",
                            lineNumber: 224,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StatsView.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/StatsView.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/StatsView.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c = StatsView;
var _c;
__turbopack_context__.k.register(_c, "StatsView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SettingsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui.tsx [app-client] (ecmascript)");
;
;
function Toggle({ value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>onChange(!value),
        className: `relative inline-flex w-9 h-5 rounded-full transition-all duration-200 shrink-0 ${value ? 'bg-[var(--accent)]' : 'bg-[var(--bg-3)]'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-200 ${value ? 'right-0.5' : 'right-auto left-0.5'}`
        }, void 0, false, {
            fileName: "[project]/src/components/SettingsPanel.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SettingsPanel.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Toggle;
function Setting({ label, desc, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between gap-4 py-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--text-0)]",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 17,
                        columnNumber: 12
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-[var(--text-3)]",
                        children: desc
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 17,
                        columnNumber: 67
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SettingsPanel.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c1 = Setting;
function SettingsPanel({ settings, onUpdate, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md glass-modal rounded-3xl overflow-hidden animate-scale-in",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 flex flex-col gap-1 border-b border-[var(--border-0)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-[var(--text-0)]",
                            children: "الإعدادات"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SettingsPanel.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-[var(--text-3)] font-bold uppercase tracking-tight opacity-60",
                            children: "تخصيص تجربة القراءة والحفظ"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SettingsPanel.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SettingsPanel.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-0 divide-y divide-[var(--border-0)] glass-inner rounded-3xl overflow-hidden border border-[var(--border-0)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 flex items-center justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-bold text-[var(--text-0)]",
                                                    children: "الوضع الليلي"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-[var(--text-3)] font-medium",
                                                    children: "تصميم داكن مريح للعينين"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                            value: settings.darkMode,
                                            onChange: (v)=>onUpdate({
                                                    darkMode: v
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 flex items-center justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-bold text-[var(--text-0)]",
                                                    children: "حجم الخط"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-[var(--text-3)] font-medium",
                                                    children: "تغيير مقاس نص الأبيات"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1 bg-[var(--bg-2)] p-1 rounded-xl",
                                            children: [
                                                1,
                                                2,
                                                3
                                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onUpdate({
                                                            fontSize: s
                                                        }),
                                                    className: `px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${settings.fontSize === s ? 'bg-[var(--accent)] text-white shadow-sm' : 'text-[var(--text-2)] hover:text-[var(--text-0)]'}`,
                                                    children: s === 1 ? 'صغير' : s === 2 ? 'وسط' : 'كبير'
                                                }, s, false, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 flex items-center justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-bold text-[var(--text-0)]",
                                                    children: "التشكيل إلزامي"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-[var(--text-3)] font-medium",
                                                    children: "مطابقة الحركات في الاختبارات"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                            value: settings.requireTashkeel,
                                            onChange: (v)=>onUpdate({
                                                    requireTashkeel: v
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 flex items-center justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-bold text-[var(--text-0)]",
                                                    children: "أرقام الأبيات"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-[var(--text-3)] font-medium",
                                                    children: "عرض تسلسل الأبيات في القراءة"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                            value: settings.showVerseNumbers,
                                            onChange: (v)=>onUpdate({
                                                    showVerseNumbers: v
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SettingsPanel.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 glass-inner rounded-3xl p-5 border border-[var(--border-0)] flex flex-col gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-bold text-[var(--text-1)]",
                                                    children: "سرعة القراءة الصوتيّة"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-extrabold text-[var(--accent)] tabular-nums bg-[var(--accent-light)] px-2 py-0.5 rounded-full",
                                                    children: [
                                                        settings.speechRate,
                                                        "x"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "0.5",
                                            max: "1.5",
                                            step: "0.1",
                                            value: settings.speechRate,
                                            onChange: (e)=>onUpdate({
                                                    speechRate: Number(e.target.value)
                                                }),
                                            className: "w-full accent-[var(--accent)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-bold text-[var(--text-1)]",
                                                    children: "نبرة الصوت"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-extrabold text-[var(--accent)] tabular-nums bg-[var(--accent-light)] px-2 py-0.5 rounded-full",
                                                    children: settings.speechPitch
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "0.5",
                                            max: "2",
                                            step: "0.1",
                                            value: settings.speechPitch,
                                            onChange: (e)=>onUpdate({
                                                    speechPitch: Number(e.target.value)
                                                }),
                                            className: "w-full accent-[var(--accent)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SettingsPanel.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SettingsPanel.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t border-[var(--border-0)] flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        onClick: onClose,
                        className: "text-xs font-bold",
                        children: "إغلاق الإعدادات"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/SettingsPanel.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SettingsPanel.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SettingsPanel.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c2 = SettingsPanel;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Toggle");
__turbopack_context__.k.register(_c1, "Setting");
__turbopack_context__.k.register(_c2, "SettingsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/todaySession.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildTodaySession",
    ()=>buildTodaySession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/algorithm.ts [app-client] (ecmascript)");
;
function getReasonLabel(reason) {
    switch(reason){
        case 'needs_strengthening':
            return 'يحتاج إلى تقوية';
        case 'due_for_review':
            return 'مراجعة مستحقة';
        case 'new_verse':
            return 'بيت جديد';
    }
}
function buildTodaySession(poems, stats, errorLog) {
    const now = Date.now();
    // مجموعة لمنع التكرار: `${poemId}:${verseIndex}`
    const seen = new Set();
    const tasks = [];
    let hasWeakVerses = false;
    let hasDueReviews = false;
    let hasNewVerses = false;
    // ===== المرور الأول: الأبيات الضعيفة (خطأ فعلي) =====
    for (const poem of poems){
        const pStats = stats[poem.id];
        if (!pStats) continue;
        const weakIndices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeakVerseIndices"])(pStats.verses, poem.verses.length);
        for (const vIdx of weakIndices){
            const key = `${poem.id}:${vIdx}`;
            if (seen.has(key)) continue;
            seen.add(key);
            hasWeakVerses = true;
            const verse = poem.verses[vIdx];
            if (!verse) continue;
            tasks.push({
                poemId: poem.id,
                poemTitle: poem.title,
                poemPoet: poem.poet,
                verseIndex: vIdx,
                verseText: verse.text,
                reason: 'needs_strengthening',
                reasonLabel: getReasonLabel('needs_strengthening')
            });
        }
    }
    // ===== المرور الثاني: المراجعات المستحقة (حان موعدها) =====
    for (const poem of poems){
        const pStats = stats[poem.id];
        if (!pStats) continue;
        for(let vIdx = 0; vIdx < poem.verses.length; vIdx++){
            const key = `${poem.id}:${vIdx}`;
            if (seen.has(key)) continue;
            const vStats = pStats.verses[vIdx];
            if (!vStats) continue;
            if (vStats.memory.standalone === 'new') continue;
            // تجاهل الأبيات التي حان موعد مراجعتها بسبب الضعف (تم تضمينها أعلاه)
            if (now >= vStats.nextReviewAt) {
                seen.add(key);
                hasDueReviews = true;
                const verse = poem.verses[vIdx];
                if (!verse) continue;
                tasks.push({
                    poemId: poem.id,
                    poemTitle: poem.title,
                    poemPoet: poem.poet,
                    verseIndex: vIdx,
                    verseText: verse.text,
                    reason: 'due_for_review',
                    reasonLabel: getReasonLabel('due_for_review')
                });
            }
        }
    }
    // ===== المرور الثالث: الأبيات الجديدة التي لم تُبدأ =====
    for (const poem of poems){
        const pStats = stats[poem.id];
        // الأبيات الجديدة = التي لم يتم حفظها بعد (ما بعد آخر بيت مكتمل)
        const lastCompleted = typeof poem.lastCompletedVerseIndex === 'number' && poem.lastCompletedVerseIndex >= 0 ? poem.lastCompletedVerseIndex : -1;
        const nextNewIdx = lastCompleted + 1;
        if (nextNewIdx >= poem.verses.length) continue;
        for(let vIdx = nextNewIdx; vIdx < poem.verses.length; vIdx++){
            const key = `${poem.id}:${vIdx}`;
            if (seen.has(key)) continue;
            const vStats = pStats?.verses[vIdx];
            // بيت جديد = لم يُبدأ حفظه بعد
            if (!vStats || vStats.memory.standalone === 'new') {
                seen.add(key);
                hasNewVerses = true;
                const verse = poem.verses[vIdx];
                if (!verse) continue;
                tasks.push({
                    poemId: poem.id,
                    poemTitle: poem.title,
                    poemPoet: poem.poet,
                    verseIndex: vIdx,
                    verseText: verse.text,
                    reason: 'new_verse',
                    reasonLabel: getReasonLabel('new_verse')
                });
                break;
            }
        }
    }
    return {
        tasks,
        hasWeakVerses,
        hasDueReviews,
        hasNewVerses,
        totalCount: tasks.length
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TodaySessionView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TodaySessionView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$todaySession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/todaySession.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function getReasonBadge(reason) {
    switch(reason){
        case 'needs_strengthening':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "error",
                children: "يحتاج إلى تقوية"
            }, void 0, false, {
                fileName: "[project]/src/components/TodaySessionView.tsx",
                lineNumber: 17,
                columnNumber: 14
            }, this);
        case 'due_for_review':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "warning",
                children: "مراجعة مستحقة"
            }, void 0, false, {
                fileName: "[project]/src/components/TodaySessionView.tsx",
                lineNumber: 19,
                columnNumber: 14
            }, this);
        case 'new_verse':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "accent",
                children: "بيت جديد"
            }, void 0, false, {
                fileName: "[project]/src/components/TodaySessionView.tsx",
                lineNumber: 21,
                columnNumber: 14
            }, this);
    }
}
function getReasonIcon(reason) {
    switch(reason){
        case 'needs_strengthening':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                size: 14,
                className: "text-[var(--error)]",
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/src/components/TodaySessionView.tsx",
                lineNumber: 28,
                columnNumber: 14
            }, this);
        case 'due_for_review':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                size: 14,
                className: "text-[var(--warning)]",
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/src/components/TodaySessionView.tsx",
                lineNumber: 30,
                columnNumber: 14
            }, this);
        case 'new_verse':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                size: 14,
                className: "text-[var(--accent)]",
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/src/components/TodaySessionView.tsx",
                lineNumber: 32,
                columnNumber: 14
            }, this);
    }
}
function getPoemFromState(state, poemId) {
    return state.poems.find((p)=>p.id === poemId);
}
function TodaySessionView({ state, onStudy, onStartWeakVerse, onStartCumulative }) {
    const todayData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$todaySession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTodaySession"])(state.poems, state.stats, state.errorLog);
    const { tasks, hasWeakVerses, hasDueReviews, hasNewVerses } = todayData;
    const greeting = ()=>{
        const h = new Date().getHours();
        if (h < 12) return 'صباح الخير';
        if (h < 18) return 'مساء الخير';
        return 'مساء الخير';
    };
    if (state.poems.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "px-8 !h-[80px] !min-h-0 !max-h-[80px] overflow-hidden shadow-md flex items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-xl bg-[var(--accent-light)] flex items-center justify-center shrink-0 shadow-sm border border-[var(--accent)]/10 relative right-[12px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            size: 24,
                            className: "text-[var(--accent)] shrink-0",
                            strokeWidth: 2.2
                        }, void 0, false, {
                            fileName: "[project]/src/components/TodaySessionView.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/TodaySessionView.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0 flex flex-col gap-0 relative top-[2px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-[var(--text-0)] leading-none",
                                children: "جلسة اليوم"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TodaySessionView.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-[var(--text-2)] font-medium leading-none relative -top-[3px]",
                                children: "أضيفي قصيدة وابدئي رحلة الحفظ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TodaySessionView.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TodaySessionView.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TodaySessionView.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TodaySessionView.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "px-8 !h-[80px] overflow-hidden shadow-md flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 rounded-2xl bg-[var(--accent-light)] flex items-center justify-center shrink-0 shadow-sm border border-[var(--accent)]/10 relative right-[12px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            size: 28,
                            className: "text-[var(--accent)] shrink-0",
                            strokeWidth: 2.2
                        }, void 0, false, {
                            fileName: "[project]/src/components/TodaySessionView.tsx",
                            lineNumber: 72,
                            columnNumber: 3
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/TodaySessionView.tsx",
                        lineNumber: 71,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0 flex flex-col gap-0 relative top-[2px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-[var(--text-0)] leading-none",
                                children: "جلسة اليوم"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TodaySessionView.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-[var(--text-3)] font-bold opacity-60 uppercase tracking-wider leading-none -mt-0.5",
                                children: [
                                    greeting(),
                                    " • ",
                                    tasks.length === 0 ? 'لا توجد مهام' : `${tasks.length} مهمة`
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TodaySessionView.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TodaySessionView.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TodaySessionView.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            tasks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 flex-wrap",
                children: [
                    hasWeakVerses && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--error-light)] text-[var(--error)] text-[11px] font-bold border border-[var(--error)]/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                size: 10,
                                strokeWidth: 3
                            }, void 0, false, {
                                fileName: "[project]/src/components/TodaySessionView.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "تقوية"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TodaySessionView.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TodaySessionView.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, this),
                    hasDueReviews && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--warning-light)] text-[var(--warning)] text-[11px] font-bold border border-[var(--warning)]/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                size: 10,
                                strokeWidth: 3
                            }, void 0, false, {
                                fileName: "[project]/src/components/TodaySessionView.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "مراجعة"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TodaySessionView.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TodaySessionView.tsx",
                        lineNumber: 92,
                        columnNumber: 13
                    }, this),
                    hasNewVerses && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent-light)] text-[var(--accent-text)] text-[11px] font-bold border border-[var(--accent)]/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                size: 10,
                                strokeWidth: 3
                            }, void 0, false, {
                                fileName: "[project]/src/components/TodaySessionView.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "جديد"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TodaySessionView.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TodaySessionView.tsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TodaySessionView.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this),
            tasks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-4 flex flex-col items-center gap-4 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-0 relative top-[2px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold text-[var(--text-1)]",
                                children: "لا توجد مهام مستحقة الآن"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TodaySessionView.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[var(--text-3)] leading-tight -mt-0.5",
                                children: "يمكنك المتابعة يدويًا عبر قصائدك"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TodaySessionView.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TodaySessionView.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        onClick: ()=>{
                            const firstPoem = state.poems[0];
                            if (firstPoem) onStudy(firstPoem);
                        },
                        className: "text-xs",
                        children: "ابدئي جلسة يدوية"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TodaySessionView.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TodaySessionView.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3",
                children: [
                    tasks.slice(0, 3).map((task, idx)=>{
                        const poem = getPoemFromState(state, task.poemId);
                        if (!poem) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskItem, {
                            task: task,
                            poem: poem,
                            onStart: ()=>{
                                if (task.reason === 'needs_strengthening') {
                                    onStartWeakVerse(poem, task.verseIndex);
                                } else if (task.reason === 'due_for_review') {
                                    onStartCumulative(poem, task.verseIndex);
                                } else {
                                    onStartCumulative(poem, task.verseIndex);
                                }
                            }
                        }, `${task.poemId}:${task.verseIndex}:${idx}`, false, {
                            fileName: "[project]/src/components/TodaySessionView.tsx",
                            lineNumber: 126,
                            columnNumber: 15
                        }, this);
                    }),
                    tasks.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-[var(--text-3)] text-center font-medium mt-1",
                        children: [
                            "و ",
                            tasks.length - 3,
                            " مهام أخرى..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TodaySessionView.tsx",
                        lineNumber: 143,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TodaySessionView.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TodaySessionView.tsx",
        lineNumber: 68,
        columnNumber: 4
    }, this);
}
_c = TodaySessionView;
function TaskItem({ task, poem: _poem, onStart }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onStart,
        className: "w-full flex items-center gap-3 p-3.5 rounded-xl bg-[var(--bg-2)] hover:bg-[var(--bg-3)] border border-[var(--border-0)] transition-all text-right group min-w-0 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white/30 shadow-sm border border-white/20",
                children: getReasonIcon(task.reason)
            }, void 0, false, {
                fileName: "[project]/src/components/TodaySessionView.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0 flex flex-col gap-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-[var(--text-3)] font-bold truncate shrink-0",
                                children: task.reasonLabel
                            }, void 0, false, {
                                fileName: "[project]/src/components/TodaySessionView.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] text-[var(--text-3)] opacity-60 truncate",
                                children: [
                                    "| ",
                                    task.poemTitle
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TodaySessionView.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TodaySessionView.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-[var(--text-1)] font-bold truncate leading-tight",
                        style: {
                            fontFamily: 'var(--font-poem)'
                        },
                        children: task.verseText
                    }, void 0, false, {
                        fileName: "[project]/src/components/TodaySessionView.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TodaySessionView.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                size: 14,
                className: "text-[var(--text-3)] opacity-40 group-hover:opacity-100 group-hover:translate-x-[-2px] transition-all shrink-0",
                strokeWidth: 2.5
            }, void 0, false, {
                fileName: "[project]/src/components/TodaySessionView.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TodaySessionView.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
_c1 = TaskItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "TodaySessionView");
__turbopack_context__.k.register(_c1, "TaskItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ErrorLogView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ErrorLogView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.mjs [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/errorLog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function formatTime(ts) {
    const d = new Date(ts);
    const time = d.toLocaleTimeString('ar-SA', {
        hour: '2-digit',
        minute: '2-digit'
    });
    const date = d.toLocaleDateString('ar-SA', {
        month: 'short',
        day: 'numeric'
    });
    return `${date} ${time}`;
}
function ErrorLogView({ errorLog, successLog, poems, onClose }) {
    _s();
    const [filterPoemId, setFilterPoemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('errors');
    const getPoemTitle = (id)=>poems.find((p)=>p.id === id)?.title || 'قصيدة';
    const getPoemVerse = (poemId, verseIndex)=>{
        const poem = poems.find((p)=>p.id === poemId);
        return poem?.verses[verseIndex]?.sadr || '';
    };
    const filteredErrors = errorLog.filter((e)=>filterPoemId === 'all' || e.poemId === filterPoemId).sort((a, b)=>b.timestamp - a.timestamp);
    const filteredSuccess = successLog.filter((s)=>filterPoemId === 'all' || s.poemId === filterPoemId).sort((a, b)=>b.timestamp - a.timestamp);
    const allEvents = viewMode === 'all' ? [
        ...filteredErrors.map((e)=>({
                kind: 'error',
                ...e
            })),
        ...filteredSuccess.map((s)=>({
                kind: 'success',
                ...s
            }))
    ].sort((a, b)=>b.timestamp - a.timestamp).slice(0, 50) : filteredErrors.slice(0, 50).map((e)=>({
            kind: 'error',
            ...e
        }));
    const poemsWithErrors = [
        ...new Set(errorLog.map((e)=>e.poemId))
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg max-h-[92vh] glass-modal rounded-xl overflow-hidden animate-scale-in flex flex-col",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-4 border-b border-[var(--border-0)] shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-sm font-semibold text-[var(--text-0)]",
                                    children: "سجل الأخطاء"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ErrorLogView.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-[var(--text-3)]",
                                    children: [
                                        errorLog.length,
                                        " خطأ · ",
                                        successLog.length,
                                        " نجاح"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ErrorLogView.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ErrorLogView.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1 rounded-md text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[var(--bg-2)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 14,
                                strokeWidth: 1.5
                            }, void 0, false, {
                                fileName: "[project]/src/components/ErrorLogView.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ErrorLogView.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ErrorLogView.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 border-b border-[var(--border-0)] space-y-2 shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setViewMode('errors'),
                                    className: `flex-1 py-1.5 rounded-lg text-xs font-medium transition-all ${viewMode === 'errors' ? 'bg-[var(--error-light)] text-[var(--error)]' : 'bg-[var(--bg-2)] text-[var(--text-2)] hover:text-[var(--text-1)]'}`,
                                    children: [
                                        "الأخطاء فقط (",
                                        filteredErrors.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ErrorLogView.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setViewMode('all'),
                                    className: `flex-1 py-1.5 rounded-lg text-xs font-medium transition-all ${viewMode === 'all' ? 'bg-[var(--accent-light)] text-[var(--accent-text)]' : 'bg-[var(--bg-2)] text-[var(--text-2)] hover:text-[var(--text-1)]'}`,
                                    children: "جميع الأحداث"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ErrorLogView.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ErrorLogView.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        poemsWithErrors.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                    size: 12,
                                    className: "text-[var(--text-3)] shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ErrorLogView.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: filterPoemId,
                                    onChange: (e)=>setFilterPoemId(e.target.value),
                                    className: "flex-1 text-xs bg-[var(--bg-2)] border border-[var(--border-0)] rounded-lg px-2 py-1 text-[var(--text-1)] outline-none focus:border-[var(--accent)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "all",
                                            children: "جميع القصائد"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ErrorLogView.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this),
                                        poemsWithErrors.map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: id,
                                                children: getPoemTitle(id)
                                            }, id, false, {
                                                fileName: "[project]/src/components/ErrorLogView.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ErrorLogView.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ErrorLogView.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ErrorLogView.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-4 space-y-3",
                    children: allEvents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-full bg-[var(--success-light)] flex items-center justify-center mx-auto mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 32,
                                    className: "text-[var(--success)]",
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ErrorLogView.tsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ErrorLogView.tsx",
                                lineNumber: 116,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-bold text-[var(--text-1)]",
                                children: "لا توجد سجلات حاليًا"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ErrorLogView.tsx",
                                lineNumber: 119,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-[var(--text-3)] mt-1 px-10",
                                children: "ستظهر الأخطاء والنجاحات هنا أثناء مراجعة القصائد"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ErrorLogView.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ErrorLogView.tsx",
                        lineNumber: 115,
                        columnNumber: 13
                    }, this) : allEvents.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-3.5 rounded-2xl border transition-all ${event.kind === 'error' ? 'bg-[var(--error-light)] border-[var(--error)]/10' : 'bg-[var(--success-light)] border-[var(--success)]/10'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shrink-0",
                                        children: event.kind === 'error' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg bg-[var(--error)]/10 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                size: 16,
                                                className: "text-[var(--error)]",
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ErrorLogView.tsx",
                                                lineNumber: 136,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ErrorLogView.tsx",
                                            lineNumber: 135,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg bg-[var(--success)]/10 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 16,
                                                className: "text-[var(--success)]",
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ErrorLogView.tsx",
                                                lineNumber: 140,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ErrorLogView.tsx",
                                            lineNumber: 139,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ErrorLogView.tsx",
                                        lineNumber: 133,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0 flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-2 overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-[var(--text-0)] text-sm truncate",
                                                        children: [
                                                            getPoemTitle(event.poemId),
                                                            " • البيت ",
                                                            event.verseIndex + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ErrorLogView.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-[var(--text-3)] font-bold opacity-60 tabular-nums shrink-0",
                                                        children: formatTime(event.timestamp)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ErrorLogView.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ErrorLogView.tsx",
                                                lineNumber: 145,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-[var(--text-2)] font-bold truncate leading-tight",
                                                style: {
                                                    fontFamily: 'var(--font-poem)'
                                                },
                                                children: getPoemVerse(event.poemId, event.verseIndex)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ErrorLogView.tsx",
                                                lineNumber: 152,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mt-0.5",
                                                children: [
                                                    event.kind === 'error' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "error",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getErrorTypeLabel"])(event.errorType)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ErrorLogView.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "success",
                                                        children: "نجاح"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ErrorLogView.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] text-[var(--text-3)] font-bold uppercase tracking-wider opacity-60",
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSourceLabel"])(event.source),
                                                            event.level && ` • م${event.level}`
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ErrorLogView.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ErrorLogView.tsx",
                                                lineNumber: 156,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ErrorLogView.tsx",
                                        lineNumber: 144,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ErrorLogView.tsx",
                                lineNumber: 132,
                                columnNumber: 17
                            }, this)
                        }, event.id, false, {
                            fileName: "[project]/src/components/ErrorLogView.tsx",
                            lineNumber: 124,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ErrorLogView.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 border-t border-[var(--border-0)] shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-[var(--text-3)] text-center",
                        children: "السجل تاريخي — لا تُحذف الأخطاء عند التحسن · يُعرض آخر 50 حدث"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ErrorLogView.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ErrorLogView.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ErrorLogView.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ErrorLogView.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(ErrorLogView, "jZv+AZrcGQ+OBCQ0IN3Di00Uio0=");
_c = ErrorLogView;
var _c;
__turbopack_context__.k.register(_c, "ErrorLogView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/fateenChallenge.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * محرك تحدي فطين — المرحلة الأولى: المنطق الأساسي
 *
 * يُنشئ جولة تحدي تأخذ قصيدة وتُنشئ ترتيبًا عشوائيًا لأبياتها
 * مع كلمة مفتاح فريدة لكل بيت، ويُدير سير الجولة.
 *
 * هذا ملف مستقل لا يُعدّل أي نظام موجود.
 */ __turbopack_context__.s([
    "cleanWordForDisplay",
    ()=>cleanWordForDisplay,
    "createFateenRound",
    ()=>createFateenRound,
    "getCurrentKeyword",
    ()=>getCurrentKeyword,
    "getCurrentVerseIndex",
    ()=>getCurrentVerseIndex,
    "getProgressPercent",
    ()=>getProgressPercent,
    "getRemainingCount",
    ()=>getRemainingCount,
    "getTotalCount",
    ()=>getTotalCount,
    "getVerseKeyword",
    ()=>getVerseKeyword,
    "hasKeywordForVerse",
    ()=>hasKeywordForVerse,
    "selectKeywords",
    ()=>selectKeywords,
    "submitAnswer",
    ()=>submitAnswer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/poem-parser.ts [app-client] (ecmascript)");
;
// ===== قائمة الكلمات الوظيفية =====
// كلمات لا تصلح كمفتاح دلالي لأنها لا تحمل معنى مستقلًا كافيًا
// أو لأنها شائعة جدًا في الشعر العربي وتظهر في أبيات كثيرة
const FUNCTIONAL_WORDS = new Set([
    // ─── حروف الجر ───
    'من',
    'إلى',
    'عن',
    'على',
    'في',
    'ب',
    'ك',
    'ل',
    'حتى',
    'منذ',
    'لدى',
    'لدن',
    'خلا',
    'عدا',
    'حاشا',
    'مذ',
    'مد',
    'رب',
    'باء',
    'كاف',
    'لام',
    // ─── أدوات العطف والربط ───
    'و',
    'ف',
    'ثم',
    'أو',
    'أم',
    'بل',
    'لكن',
    'لا',
    'إما',
    'ولا',
    'أوما',
    'وإن',
    'فإن',
    // ─── أسماء الإشارة ───
    'هذا',
    'هذه',
    'ذلك',
    'تلك',
    'هذان',
    'هاتان',
    'هؤلاء',
    'أولئك',
    'هنا',
    'هناك',
    'هنالك',
    // ─── الأسماء الموصولة ───
    'الذي',
    'التي',
    'اللذان',
    'اللتان',
    'اللذين',
    'اللاتي',
    'اللائي',
    'اللوان',
    'اللواتي',
    'اللاء',
    // ─── الضمائر المنفصلة ───
    'أنا',
    'نحن',
    'أنت',
    'أنتما',
    'أنتم',
    'أنتن',
    'هو',
    'هي',
    'هما',
    'هم',
    'هن',
    'إياي',
    'إيانا',
    'إياك',
    'إياكما',
    'إياكم',
    'إياكن',
    'إياه',
    'إياها',
    'إياهما',
    'إياهم',
    'إياهن',
    // ─── أفعال كَان وأخواتها (كان، صار، أصبح، أمسى، ظل، بات، ما زال، ما برح...) ───
    'كان',
    'كانت',
    'كانا',
    'كانوا',
    'كنا',
    'كنتم',
    'كنتن',
    'يكون',
    'تكون',
    'صار',
    'صارت',
    'صاروا',
    'يصير',
    'تصير',
    'أصبح',
    'أصبحت',
    'أصبحوا',
    'أمسى',
    'أمسى',
    'أمسوا',
    'ظل',
    'ظلت',
    'ظلوا',
    'يظل',
    'تظل',
    'بات',
    'باتت',
    'باتوا',
    'يبيت',
    'تبيت',
    'مازال',
    'مازالت',
    'مازالا',
    'مازالوا',
    'مالبث',
    'مالبثت',
    'ماانفك',
    'ماانفكت',
    'مافتئ',
    'مافتأت',
    'مابرح',
    'مابرحت',
    'دام',
    'دامت',
    'داموا',
    'يدوم',
    'تدوم',
    'ليس',
    'ليست',
    'ليسا',
    'ليسوا',
    'لست',
    'لستما',
    'لستم',
    'لستن',
    'لسنا',
    // ─── أدوات نحوية ───
    'إن',
    'أن',
    'إنما',
    'أنما',
    'لن',
    'لم',
    'لا',
    'قد',
    'س',
    'سوف',
    'ما',
    'من',
    'هل',
    'ليت',
    'لعل',
    'لوت',
    'كأن',
    'ليتما',
    'لعلما',
    'كأنما',
    'لولا',
    'لوما',
    'لو',
    // ─── أدوات الاستفهام ───
    'هل',
    'أ',
    'هل',
    'متى',
    'أين',
    'كيف',
    'كم',
    'أي',
    'أنى',
    'هلا',
    // ─── أدوات الشرط ───
    'إن',
    'من',
    'ما',
    'متى',
    'أين',
    'أي',
    'حيثما',
    'أنى',
    'إذما',
    // ─── أدوات الاستثناء ───
    'إلا',
    'غير',
    'سوى',
    'عدا',
    'خلا',
    'حاشا',
    // ─── ظروف وأسماء شائعة ───
    'بين',
    'عند',
    'بعد',
    'قبل',
    'مع',
    'دون',
    'كل',
    'بعض',
    'جميع',
    'معظم',
    'أكثر',
    'أقل',
    'أول',
    'آخر',
    'حق',
    'أيضا',
    'كذلك',
    'هكذا',
    'فقط',
    'وحسب',
    'إذا',
    'إذ',
    'حين',
    'حيث',
    'حينما',
    'كلما',
    'أما',
    'إما',
    'فأما',
    'وأما',
    'مما',
    'لما',
    'فما',
    'وما',
    // ─── كلمات ربط ───
    'لذلك',
    'بذلك',
    'فذلك',
    'ولذلك',
    'فلذلك',
    // ─── أسماء النداء ───
    'يا',
    'أيها',
    'أيتها',
    'آيها',
    // ─── حروف الجواب ───
    'نعم',
    'بلى',
    'كلا',
    // ─── أسماء مبنية شائعة ───
    'ذات',
    'ذو',
    'ذي',
    // ─── أعداد ───
    'أحد',
    'إحدى',
    'واحد',
    'واحدة',
    'اثنان',
    'اثنتان',
    'اثنين',
    'اثنتين',
    'ثلاث',
    'ثلاثة',
    'أربع',
    'أربعة',
    'خمس',
    'خمسة',
    'ست',
    'ستة',
    'سبع',
    'سبعة',
    'ثمان',
    'ثمانية',
    'تسع',
    'تسعة',
    'عشر',
    'عشرة',
    // ─── أفعال شائعة جدًا ───
    'قال',
    'قالت',
    'قالوا',
    'يقول',
    'تقول',
    'فعل',
    'فعلت',
    'فعلوا',
    'يفعل',
    'تفعل',
    'جاء',
    'جاءت',
    'جاءوا',
    'يجيء',
    'تجيء',
    'ذهب',
    'ذهبت',
    'ذهبوا',
    'يذهب',
    'تذهب',
    'علم',
    'علمت',
    'يعلم',
    'تعلم',
    'رأى',
    'رأت',
    'يري',
    'تري',
    'أخذ',
    'أخذت',
    'يأخذ',
    'تأخذ',
    'جعل',
    'جعلت',
    'يجعل',
    'تجعل',
    'وجد',
    'وجدت',
    'يجد',
    'تجد',
    'علم',
    'علمت',
    'يعلم',
    'تعلم',
    'شاء',
    'شاءت',
    'يشاء',
    'تشاء',
    'شاء',
    'شاءت',
    'أراد',
    'أرادت',
    'أرادوا',
    'يريد',
    'تريد',
    'استطاع',
    'استطاعت',
    'يستطيع',
    'تستطيع',
    'امر',
    'امرأت',
    'امرؤ',
    // ─── صفات شائعة جدًا ───
    'كبير',
    'كبيرة',
    'كبار',
    'صغير',
    'صغيرة',
    'صغار',
    'طويل',
    'طويلة',
    'طوال',
    'قصير',
    'قصيرة',
    'حسن',
    'حسنة',
    'حسان',
    'سيء',
    'سيئة',
    'سيات',
    'جديد',
    'جديدة',
    'جداد',
    'قديم',
    'قديمة',
    'قدامي',
    'أول',
    'أولي',
    'اخر',
    'اخرة',
    // ─── تراكيب شائعة ───
    'لانه',
    'لانها',
    'لانهما',
    'لانهم',
    'بانه',
    'بانها',
    'بانهما',
    'بانهم',
    'فانه',
    'فانها',
    'فانهما',
    'فانهم',
    'وانه',
    'وانها',
    'وانهما',
    'وانهم'
]);
// ===== الدوال الداخلية =====
/**
 * تطبيع كلمة لمقارنة التفرد
 * يزيل التشكيل وعلامات الترقيم ويوحّد الألفات والهاءات
 */ function normalizeForUniqueness(word) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeForComparison"])(word, {
        ignoreTashkeel: true,
        ignorePunctuation: true,
        ignoreSpaces: true
    });
}
/**
 * هل الكلمة وظيفية (لا تصلح كمفتاح دلالي)؟
 *
 * تُحقّق الكلمة ضد قائمة شاملة من الكلمات الوظيفية العربية،
 * وتستبعد أيضًا الكلمات القصيرة جدًا (حرف أو حرفان بعد التطبيع).
 */ function isFunctionalWord(word) {
    const normalized = normalizeForUniqueness(word);
    // كلمات من حرف واحد لا تصلح أبدًا
    if (normalized.length <= 1) return true;
    // فحص مباشر في القائمة (بعد التطبيع)
    if (FUNCTIONAL_WORDS.has(normalized)) return true;
    // فحص بعد إزالة التشكيل والترقيم فقط (بدون توحيد الألفات)
    const cleaned = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeTashkeel"])(word).replace(/[،؛؟!.،;?!'"«»()\[\]{}\-_ـ]/g, '').trim();
    if (FUNCTIONAL_WORDS.has(cleaned)) return true;
    // كلمات من حرفين فقط بعد التطبيع — شائعة وغير دلالية
    if (normalized.length <= 2) return true;
    return false;
}
function cleanWordForDisplay(word) {
    return word.replace(/^[،؛؟!.،;?!'"«»()\[\]{}\-_ـ]+/, '').replace(/[،؛؟!.،;?!'"«»()\[\]{}\-_ـ]+$/, '').trim();
}
/**
 * تقسيم بيت إلى كلمات مع الاحتفاظ بالنص الأصلي
 */ function splitVerseToWords(verse) {
    return verse.text.split(/\s+/).filter((w)=>w.trim().length > 0).map((original, index)=>({
            original,
            index
        }));
}
/**
 * خلط مصفوفة أعداد عشوائيًا في مكانها (Fisher-Yates shuffle)
 */ function shuffleArrayInPlace(arr) {
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [
            arr[j],
            arr[i]
        ];
    }
}
// ===== اختيار كلمات المفتاح =====
/**
 * حساب ظهور كل كلمة مطعّمة في الأبيات
 * يعيد خريطة: الكلمة المطعّمة → مجموعة أرقام الأبيات التي تظهر فيها
 *
 * كل كلمة تُطعّم (إزالة تشكيل + ترقيم + توحيد ألفات)
 * ويُسجّل أي بيت تظهر فيه. كلمة تظهر في عدة أبيات
 * ليست فريدة ولا تصلح كمفتاح.
 */ function computeWordVerseOccurrences(verses) {
    const wordVerseMap = new Map();
    for (const verse of verses){
        const words = splitVerseToWords(verse);
        for (const { original } of words){
            const normalized = normalizeForUniqueness(original);
            if (!normalized) continue;
            if (!wordVerseMap.has(normalized)) {
                wordVerseMap.set(normalized, new Set());
            }
            wordVerseMap.get(normalized).add(verse.index);
        }
    }
    return wordVerseMap;
}
function selectKeywords(verses) {
    const keywords = {};
    const noKeywordVerses = [];
    if (verses.length === 0) {
        return {
            keywords,
            noKeywordVerses
        };
    }
    const wordVerseMap = computeWordVerseOccurrences(verses);
    for (const verse of verses){
        const words = splitVerseToWords(verse);
        // جمع المرشحين: كلمات فريدة صالحة لهذا البيت
        const candidates = [];
        for (const { original } of words){
            const normalized = normalizeForUniqueness(original);
            if (!normalized) continue;
            // ─── شرط التفرد: الكلمة تظهر في بيت واحد فقط ───
            const verseSet = wordVerseMap.get(normalized);
            if (!verseSet || verseSet.size !== 1) continue;
            if (!verseSet.has(verse.index)) continue;
            // ─── شرط الدلالية: ليست كلمة وظيفية ───
            if (isFunctionalWord(original)) continue;
            // ─── شرط الطول: 3 أحرف أو أكثر بعد التطبيع ───
            if (normalized.length < 3) continue;
            // ─── نقاط التفضيل ───
            // الأطول أفضل، والكلمات ذات 5+ أحرف أفضل بكثير
            const score = normalized.length + (normalized.length >= 5 ? 5 : 0) + (normalized.length >= 4 ? 2 : 0);
            candidates.push({
                original: cleanWordForDisplay(original),
                score
            });
        }
        if (candidates.length > 0) {
            // ترتيب حسب النقاط تنازليًا
            candidates.sort((a, b)=>b.score - a.score);
            // اختيار عشوائي مرجّح من الأعلى نقاطًا
            // نأخذ المرشحين ذوي النقاط القريبة من الأعلى (فرق ≤ 2)
            const topScore = candidates[0].score;
            const topCandidates = candidates.filter((c)=>c.score >= topScore - 2);
            const selected = topCandidates[Math.floor(Math.random() * topCandidates.length)];
            keywords[verse.index] = selected.original;
        } else {
            // لا توجد كلمة فريدة صالحة — حالة خاصة
            // **لا نستخدم كلمة مشتركة — لا نكسر شرط التفرد**
            noKeywordVerses.push(verse.index);
        }
    }
    return {
        keywords,
        noKeywordVerses
    };
}
function createFateenRound(poem) {
    const verseCount = poem.verses.length;
    // اختيار كلمات المفتاح (ثابتة طوال الجولة)
    const { keywords, noKeywordVerses } = selectKeywords(poem.verses);
    // إنشاء ترتيب عشوائي ثابت — فقط الأبيات التي لها كلمة مفتاح فريدة
    // الأبيات بلا كلمة مفتاح لا تُضمَن في الجولة ولا تُحسب كأخطاء
    const noKeywordSet = new Set(noKeywordVerses);
    const verseOrder = Array.from({
        length: verseCount
    }, (_, i)=>i).filter((i)=>!noKeywordSet.has(i));
    shuffleArrayInPlace(verseOrder);
    return {
        poemId: poem.id,
        verseOrder,
        currentStep: 0,
        keywords,
        tested: [],
        correct: [],
        errors: [],
        isComplete: false,
        noKeywordVerses
    };
}
function getCurrentVerseIndex(round) {
    if (round.isComplete) return null;
    if (round.currentStep >= round.verseOrder.length) return null;
    return round.verseOrder[round.currentStep];
}
function getCurrentKeyword(round) {
    const verseIndex = getCurrentVerseIndex(round);
    if (verseIndex === null) return null;
    return round.keywords[verseIndex] ?? null;
}
function getVerseKeyword(round, verseIndex) {
    return round.keywords[verseIndex] ?? null;
}
function hasKeywordForVerse(round, verseIndex) {
    return round.keywords[verseIndex] !== undefined;
}
function submitAnswer(round, isCorrect) {
    const verseIndex = getCurrentVerseIndex(round);
    if (verseIndex === null) return round;
    const newTested = [
        ...round.tested,
        verseIndex
    ];
    const newCorrect = isCorrect ? [
        ...round.correct,
        verseIndex
    ] : round.correct;
    const newErrors = isCorrect ? round.errors : [
        ...round.errors,
        verseIndex
    ];
    const newStep = round.currentStep + 1;
    const isComplete = newStep >= round.verseOrder.length;
    return {
        ...round,
        currentStep: newStep,
        tested: newTested,
        correct: newCorrect,
        errors: newErrors,
        isComplete
    };
}
function getRemainingCount(round) {
    return round.verseOrder.length - round.tested.length;
}
function getTotalCount(round) {
    return round.verseOrder.length;
}
function getProgressPercent(round) {
    if (round.verseOrder.length === 0) return 0;
    return Math.round(round.tested.length / round.verseOrder.length * 100);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FateenChallengeView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FateenChallengeView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.mjs [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fateenChallenge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fateenChallenge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/poem-parser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/errorLog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GazelleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GazelleIcon.tsx [app-client] (ecmascript)");
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
// ===== رسائل فطين الافتتاحية =====
const FATEEN_INTROS = [
    "مرحبًا! أنا فَطين.\nأحضرتِ قصيدتكِ، وأنا أحضرتُ لكِ تحديًا صغيرًا...\nسأتنقّل بين أبياتها على غير ترتيب، وأعطيكِ من كل بيت كلمةً واحدة فقط.\nإن استطعتِ أن تستحضري البيت من تلك الكلمة، فلكِ الجولة.\nلكن انتبهي... لن تعرفي أيَّ بيت سأختار بعد ذلك!\nهل تستطيعين أن تسبقي فطين؟",
    "أهلًا! أنا فَطين.\nتحدي اليوم بسيط: من كل بيت أعطيكِ كلمة واحدة فقط، وعليكِ أن تستحضري البيت كاملًا.\nالأبيات مختلطة، والكلمات منتقاة بعناية... فهل ذاكرتكِ أقوى من حيلتي؟",
    "مرحبًا! أنا فَطين، غزالُ التحديات.\nاخترتُ لكِ من كل بيت كلمةً واحدة، وتركتُ الباقي لكِ...\nلن تأتي الأبيات بالترتيب، ولن تكون الكلمة سهلة.\nهيّا نرى ما في ذاكرتكِ!"
];
// ===== رسائل فطين أثناء الجولة =====
// صياغات متنوعة (اعتراف، تعليق ذكي، مزاح خفيف، إحاطة بالبيت)
// قصيرة، أدبية، وفي شخصية فطين: ذكي، واثق، لطيف، مشاكس بخفة.
const FATEEN_CORRECT_MSGS = [
    'أحسنتِ! هذا البيت كان في جيبي، لكنه خرج إلى ذاكرتكِ.',
    'صحيح — الكلمة كانت خيطًا، وأنتِ نسجتِ منها البيتَ كلَّه.',
    'لم أظنّ أن هذه الكلمة ستفتحُ البيتَ بهذه السرعة.',
    'واحدةٌ لكِ... لكن لا تفرحي بعدُ، فالأبياتُ الباقية أدقّ.',
    'أصبتِ! ذاكرتكِ أسرعُ من حيلتي هذه المرة.',
    'وجدتِه! هيا، فسأرمي لكِ بكلمةٍ أدهى.',
    'إجابةٌ سليمة... أعترف، كدتُ أنسى أن هذا البيت لي.',
    'بنيتِ البيتَ كلمةً كلمة، ولم يتردّد حرفٌ واحد.',
    'ممتاز! لكنّ البيتَ التالي أخفى ملامحَ في ذاكرتكِ.',
    'حسبتُ أني أخبّأتُ هذه الكلمة جيدًا، فما كانت إلّا مفتاحًا في يدكِ.',
    'صحيح! ذاكرةُ حافظةِ الشعر لا تسقطُ في حيلة.',
    'أحسنتِ! بقيت لي كلماتٌ لم أرمِها بعد.',
    'ضربةُ معلم — استحضرتِ الصدرَ والعجزَ معًا بلا تردّد.',
    'هذه كانت لكِ من أوّلها... لكنّ الجولاتِ تُحسب في الآخر.'
];
const FATEEN_WRONG_MSGS = [
    'هاه! أمسكتُ بهذا البيت... لكنّكِ ستعودين إليه أقوى.',
    'هذا البيت كان معي قبل أن تُكملي الكلمة الأخيرة.',
    'وجدتُ ثغرةً صغيرة — لا بأس، الذاكرةُ تُبنى على التكرار.',
    'أفلت منكِ هذا... وقد أعددتُ له مكانًا عندكِ في التقوية.',
    'أمسكتُ به! الكلمةُ أراوغتكِ عند آخر حرف.',
    'خطوةٌ واحدة أبعدتْكِ عن البيت، وما زالت أمامكِ أن تدوسيها.',
    'هذا لي هذه المرة... لكنّ الجولةَ أطولُ من بيت.',
    'كاد يكون لكِ! الحرفُ الأخير خائَنكِ، وأنا لستُ بذيّ.',
    'أمسكتُ بهذا البيت... وسيبقى عندكِ حتى تثبّتي عليه.',
    'هذه لي! لكنّ ذاكرتكِ أقربُ إلى الصواب مما تظنّين.',
    'رأيتكِ تتذكّرين الصدرَ ثم تلتفتين... والعجزُ كان قد ذهب معي.',
    'أمسكتُ به قبل أن تكتمل الكلمة! اجمعي قواكِ فالحكايةُ طويلة.',
    'هذه المرة لي. لا تملّي، فالأبياتُ الصعبة هي التي تصنعُ الحافِظين.',
    'كاد بيتُكِ يتصدّع عند آخر سطر — وأنا أمسكتُه قبل أن يسقط.'
];
/** عدد الرسائل الأخيرة التي يُجنَّب فطين إعادةَ أيٍّ منها ما دام يوجد بدائل كافية */ const FATEEN_MSG_RECENT_LIMIT = 5;
// ===== رسائل فطين الختامية =====
const FATEEN_WIN_MSGS = [
    "لااا... هزمتِ فطين!\n\nلم أستطع أن أفلت منكِ بيتًا واحدًا.\nأقرّ بهزيمتي هذه المرة...\nذاكرتكِ كانت أسرع مني!\n\nأحسنتِ يا حافظة الشعر.",
    "هزيمة... لم أستطع أن أخدعكِ ولو ببيت واحد!\n\nأنتِ أثبتِّ أن ذاكرتكِ لا تُخطئ.\nفطين يرفع قرنيه احترامًا لكِ.\n\nجولة رائعة!",
    "اعترف... هذه الجولة كانت لكِ بالكامل.\n\nكل بيت استحضرتِه من كلمة واحدة —\nهذا ليس سهلًا كما يبدو!\n\nفطين مهزوم هذه المرة. أحسنتِ!"
];
const FATEEN_LOSS_MSGS = [
    "هذه الجولة لي!\n\nأمسكتُ ببعض أبياتكِ، لكن لا تفرحي كثيرًا...\nالأبيات التي أخطأتِ فيها ما زالت أمامكِ.\n\nقوّيها، ثم عودي إليّ،\nولنرَ من سيفوز في الجولة القادمة.",
    "ها! هذه المرة تفوّقتُ عليكِ.\n\nلكنني أعرف أنكِ لن تتركي الأمر هكذا...\nالأبيات التي خانت ذاكرتكِ تحتاج فقط إلى مزيد من التكرار.\n\nعودي عندما تكوني مستعدة!",
    "فطين يفوز هذه الجولة!\n\nلكن لا تحزني — كل بيت أخطأتِ فيه\nهو دعوة لمزيد من التمرين، لا نهاية.\n\nهيّا، جولة جديدة وذاكرة أقوى!"
];
/** اختيار رسالة عشوائية من مصفوفة */ function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
// ===== عرض البيت الشعري =====
function PoeticVerseDisplay({ sadr, ajar, showTashkeel = true, fontSize = '1.25rem' }) {
    const fmt = (t)=>showTashkeel ? t : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeTashkeel"])(t);
    if (!ajar || !ajar.trim()) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "poetic-verse",
            style: {
                fontFamily: 'var(--font-poem)',
                fontSize,
                lineHeight: '2.1',
                color: 'var(--text-0)'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "poetic-sadr",
                children: fmt(sadr)
            }, void 0, false, {
                fileName: "[project]/src/components/FateenChallengeView.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/FateenChallengeView.tsx",
            lineNumber: 129,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "poetic-verse",
        style: {
            fontFamily: 'var(--font-poem)',
            fontSize,
            lineHeight: '2.1',
            color: 'var(--text-0)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "poetic-sadr",
                children: fmt(sadr)
            }, void 0, false, {
                fileName: "[project]/src/components/FateenChallengeView.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "poetic-ajar",
                children: fmt(ajar)
            }, void 0, false, {
                fileName: "[project]/src/components/FateenChallengeView.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FateenChallengeView.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_c = PoeticVerseDisplay;
// ===== عرض الفروق =====
function DiffDisplay({ tokens }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-sm leading-loose",
        style: {
            fontFamily: 'var(--font-poem)'
        },
        children: tokens.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: t.type === 'correct' ? 'diff-correct' : t.type === 'missing' ? 'diff-missing' : 'diff-error',
                children: [
                    t.text,
                    ' '
                ]
            }, i, true, {
                fileName: "[project]/src/components/FateenChallengeView.tsx",
                lineNumber: 149,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/FateenChallengeView.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_c1 = DiffDisplay;
function FateenChallengeView({ poem, settings, poemStats, onClose, onVerseUpdate, onErrorLog, onSuccessLog }) {
    _s();
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('intro');
    const [round, setRound] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userAnswer, setUserAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showTashkeel, setShowTashkeel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastResult, setLastResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lastVerseIndex, setLastVerseIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fateenMsg, setFateenMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // سجل الرسائل الأخيرة المعروضة — لمنع التكرار المتتالي
    const msgHistoryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [introMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "FateenChallengeView.useState": ()=>FATEEN_INTROS[Math.floor(Math.random() * FATEEN_INTROS.length)]
    }["FateenChallengeView.useState"]);
    const [endMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "FateenChallengeView.useState": ()=>null
    }["FateenChallengeView.useState"]); // ستُختار عند الإكمال
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fontSizes = [
        '1.1rem',
        '1.4rem',
        '1.7rem'
    ];
    const verseFontSize = fontSizes[settings.fontSize - 1] || '1.4rem';
    // ─── فحص صلاحية القصيدة للتحدي ───
    // تُحسب مرة واحدة فقط. لا تُستخدم الكلمات المحسوبة هنا في الجولة،
    // بل العدد فقط — لأن الجولة تختار كلماتها الخاصة وتُثبّتها عند البدء.
    const availability = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FateenChallengeView.useMemo[availability]": ()=>{
            const { keywords, noKeywordVerses } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fateenChallenge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectKeywords"])(poem.verses);
            return {
                playable: Object.keys(keywords).length,
                total: poem.verses.length,
                unavailable: noKeywordVerses.length
            };
        }
    }["FateenChallengeView.useMemo[availability]"], [
        poem.verses
    ]);
    const isPlayable = availability.playable > 0;
    // ─── تجاوز الأبيات بدون كلمة مفتاح ───
    const skipNoKeywordVerses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FateenChallengeView.useCallback[skipNoKeywordVerses]": (r)=>{
            let current = r;
            while(!current.isComplete && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fateenChallenge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentVerseIndex"])(current) !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fateenChallenge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasKeywordForVerse"])(current, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fateenChallenge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentVerseIndex"])(current))){
                current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fateenChallenge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitAnswer"])(current, false);
            }
            return current;
        }
    }["FateenChallengeView.useCallback[skipNoKeywordVerses]"], []);
    /**
   * اختيار رسالة فطين مع التنويع:
   * - القاعدة الحتمية: لا تُكرر الرسالة نفسها في بيتين متتاليين.
   * - ما دام يوجد بدائل كافية: يُجنَّب فطين إعادة أيٍّ من آخر
   *   FATEEN_MSG_RECENT_LIMIT رسائل ظهر بها (من المجموعتين معًا).
   */ const pickFateenMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FateenChallengeView.useCallback[pickFateenMsg]": (isCorrect)=>{
            const pool = isCorrect ? FATEEN_CORRECT_MSGS : FATEEN_WRONG_MSGS;
            const history = msgHistoryRef.current;
            const recent = history.slice(-FATEEN_MSG_RECENT_LIMIT);
            let candidates = pool.filter({
                "FateenChallengeView.useCallback[pickFateenMsg].candidates": (m)=>!recent.includes(m)
            }["FateenChallengeView.useCallback[pickFateenMsg].candidates"]);
            if (candidates.length === 0) {
                // fallback: تُطبَّق القاعدة الحتمية فقط — لا تكرر الرسالة السابقة
                const last = history[history.length - 1];
                candidates = pool.filter({
                    "FateenChallengeView.useCallback[pickFateenMsg]": (m)=>m !== last
                }["FateenChallengeView.useCallback[pickFateenMsg]"]);
            }
            if (candidates.length === 0) candidates = pool;
            const msg = candidates[Math.floor(Math.random() * candidates.length)];
            msgHistoryRef.current = [
                ...history,
                msg
            ].slice(-24);
            return msg;
        }
    }["FateenChallengeView.useCallback[pickFateenMsg]"], []);
    // ─── بدء الجولة ───
    const startRound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FateenChallengeView.useCallback[startRound]": ()=>{
            // بداية جولة جديدة = بداية جديدة لرسائل فطين أيضًا
            msgHistoryRef.current = [];
            const newRound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fateenChallenge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFateenRound"])(poem);
            const adjusted = skipNoKeywordVerses(newRound);
            setRound(adjusted);
            if (adjusted.isComplete) {
                setPhase('complete');
            } else {
                setUserAnswer('');
                setLastResult(null);
                setLastVerseIndex(null);
                setFateenMsg(null);
                setPhase('question');
            }
        }
    }["FateenChallengeView.useCallback[startRound]"], [
        poem,
        skipNoKeywordVerses
    ]);
    // ─── التحقق من الإجابة ───
    const checkAnswer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FateenChallengeView.useCallback[checkAnswer]": ()=>{
            if (!round) return;
            const verseIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fateenChallenge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentVerseIndex"])(round);
            if (verseIndex === null) return;
            const verse = poem.verses[verseIndex];
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poem$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareAnswers"])(userAnswer, verse.text, {
                requireTashkeel: settings.requireTashkeel
            });
            const newRound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fateenChallenge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitAnswer"])(round, result.isCorrect);
            setLastResult(result);
            setLastVerseIndex(verseIndex);
            setRound(newRound);
            // رد فطين يظهر بعد كل إجابة — دائمًا، مع تنويع وبدون تكرار متتالٍ
            setFateenMsg(pickFateenMsg(result.isCorrect));
            // ─── تسجيل الخطأ/النجاح في سجل التطبيق ───
            const targetVerse = poem.verses[verseIndex];
            if (targetVerse) {
                if (!result.isCorrect) {
                    // تسجيل الخطأ في سجل الأخطاء العام
                    const hasAjar = Boolean(targetVerse.ajar?.trim());
                    const errorType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectErrorType"])('write_all', result.diffTokens, hasAjar);
                    onErrorLog((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createErrorEntry"])({
                        poemId: poem.id,
                        verseIndex,
                        verseText: targetVerse.text,
                        exerciseType: 'write_all',
                        source: 'fateen',
                        level: null,
                        errorType,
                        userAnswer
                    }));
                    // تحديث إحصائيات البيت جزئيًا: نزيد errors فقط
                    // دون تشغيل SM-2 أو تغيير مستوى الثبات
                    const existingStats = poemStats?.verses[verseIndex] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultVerseStats"])(verseIndex);
                    onVerseUpdate(poem.id, {
                        ...existingStats,
                        attempts: existingStats.attempts + 1,
                        errors: existingStats.errors + 1,
                        sessionErrors: existingStats.sessionErrors + 1
                    });
                } else {
                    // تسجيل النجاح في سجل النجاحات العام
                    onSuccessLog((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSuccessEntry"])({
                        poemId: poem.id,
                        verseIndex,
                        exerciseType: 'write_all',
                        source: 'fateen',
                        level: null
                    }));
                    // تحديث إحصائيات البيت جزئيًا: نزيد correct فقط
                    // دون تشغيل SM-2 أو تغيير مستوى الثبات
                    const existingStats = poemStats?.verses[verseIndex] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultVerseStats"])(verseIndex);
                    onVerseUpdate(poem.id, {
                        ...existingStats,
                        attempts: existingStats.attempts + 1,
                        correct: existingStats.correct + 1,
                        sessionCorrect: existingStats.sessionCorrect + 1
                    });
                }
            }
            setPhase('feedback');
        }
    }["FateenChallengeView.useCallback[checkAnswer]"], [
        round,
        userAnswer,
        poem,
        settings,
        poemStats,
        onVerseUpdate,
        onErrorLog,
        onSuccessLog,
        pickFateenMsg
    ]);
    // ─── الانتقال للسؤال التالي ───
    const nextQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FateenChallengeView.useCallback[nextQuestion]": ()=>{
            if (!round) return;
            if (round.isComplete) {
                setPhase('complete');
                return;
            }
            const adjusted = skipNoKeywordVerses(round);
            setRound(adjusted);
            if (adjusted.isComplete) {
                setPhase('complete');
            } else {
                setUserAnswer('');
                setLastResult(null);
                setLastVerseIndex(null);
                setFateenMsg(null);
                setPhase('question');
            }
        }
    }["FateenChallengeView.useCallback[nextQuestion]"], [
        round,
        skipNoKeywordVerses
    ]);
    // ─── التركيز على حقل الإدخال ───
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FateenChallengeView.useEffect": ()=>{
            if (phase === 'question' && textareaRef.current) {
                textareaRef.current.focus();
            }
        }
    }["FateenChallengeView.useEffect"], [
        phase
    ]);
    // ===== الحصول على البيانات الحالية =====
    const currentVerseIndex = round ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fateenChallenge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentVerseIndex"])(round) : null;
    const currentKeyword = round && currentVerseIndex !== null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fateenChallenge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentKeyword"])(round) : null;
    const lastVerse = lastVerseIndex !== null ? poem.verses[lastVerseIndex] : null;
    // ===== التصيير =====
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 app-bg flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass-header flex items-center justify-between session-content py-3 border-b border-[var(--border-0)] shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "p-1.5 rounded-lg text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[var(--bg-2)] transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 16,
                            strokeWidth: 1.5
                        }, void 0, false, {
                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                            lineNumber: 376,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FateenChallengeView.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GazelleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        size: 14,
                                        className: "text-[var(--accent)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FateenChallengeView.tsx",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold text-[var(--text-0)]",
                                        children: "تحدي فَطين"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FateenChallengeView.tsx",
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-[var(--text-3)]",
                                children: [
                                    poem.title,
                                    " · ",
                                    poem.verses.length,
                                    " بيت"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FateenChallengeView.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowTashkeel((s)=>!s),
                            className: "p-1.5 rounded-lg text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[var(--bg-2)] transition-colors",
                            title: showTashkeel ? 'إخفاء التشكيل' : 'إظهار التشكيل',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                size: 14,
                                strokeWidth: 1.5
                            }, void 0, false, {
                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                lineNumber: 391,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                            lineNumber: 386,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FateenChallengeView.tsx",
                        lineNumber: 385,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FateenChallengeView.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this),
            round && (phase === 'question' || phase === 'feedback' || phase === 'complete') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "session-content py-2.5 border-b border-[var(--border-0)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressBar"], {
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fateenChallenge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProgressPercent"])(round)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FateenChallengeView.tsx",
                        lineNumber: 399,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-[10px] text-[var(--text-3)] mt-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    round.tested.length,
                                    " / ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fateenChallenge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalCount"])(round)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                lineNumber: 401,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fateenChallenge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRemainingCount"])(round),
                                    " متبقٍ"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                lineNumber: 402,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FateenChallengeView.tsx",
                        lineNumber: 400,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FateenChallengeView.tsx",
                lineNumber: 398,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto session-content py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto space-y-6 animate-fade-in",
                    children: [
                        phase === 'intro' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center mb-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center shadow-lg shadow-[var(--accent)]/25 accent-glow",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GazelleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: 30,
                                            className: "text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 416,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FateenChallengeView.tsx",
                                        lineNumber: 415,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                    lineNumber: 414,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: introMsg.split('\n').map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-sm leading-7 ${i === 0 ? 'font-medium text-[var(--text-0)]' : 'text-[var(--text-1)]'}`,
                                                children: line
                                            }, i, false, {
                                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                lineNumber: 423,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FateenChallengeView.tsx",
                                        lineNumber: 421,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                    lineNumber: 420,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-4 text-[11px] text-[var(--text-3)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: poem.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 435,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "·"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 436,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                poem.verses.length,
                                                " بيت"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 437,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "·"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 438,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                availability.playable,
                                                " كلمة مفتاح"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 439,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                    lineNumber: 434,
                                    columnNumber: 15
                                }, this),
                                isPlayable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        availability.unavailable > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-2.5 p-3.5 rounded-xl bg-[var(--warning-light)] border border-[var(--warning)]/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    size: 14,
                                                    className: "text-[var(--warning)] shrink-0 mt-0.5",
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-[var(--text-1)] leading-5",
                                                    children: [
                                                        availability.unavailable,
                                                        " من أبيات هذه القصيدة لا تتوفر له كلمة مفتاح فريدة، لذا سيتخطّاه فَطين تلقائيًا."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 445,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center pt-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "primary",
                                                size: "lg",
                                                onClick: startRound,
                                                children: "هيّا نبدأ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                lineNumber: 455,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 454,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-2.5 p-4 rounded-xl bg-[var(--warning-light)] border border-[var(--warning)]/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    size: 15,
                                                    className: "text-[var(--warning)] shrink-0 mt-0.5",
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-medium text-[var(--text-0)]",
                                                            children: "هذه القصيدة لا تصلح للتحدي حاليًا"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                            lineNumber: 465,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-[var(--text-1)] leading-5",
                                                            children: "لم يجد فَطين كلمةً فريدةً في أي بيت منها — فالكلمات إما مشتركة بين أبيات القصيدة أو وظيفية لا تصلح مفتاحًا. اختاري قصيدة أخرى."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                    lineNumber: 464,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 462,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "md",
                                                onClick: onClose,
                                                children: "عودة لاختيار قصيدة"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                lineNumber: 476,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 475,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                    lineNumber: 461,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true),
                        phase === 'question' && round && currentKeyword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2 text-xs text-[var(--text-3)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GazelleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    size: 13,
                                                    className: "text-[var(--accent)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    children: "كلمة فَطين"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 489,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-card inline-flex items-center justify-center min-w-[12rem] px-8 py-5 rounded-2xl accent-glow border-[var(--accent)]/25",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-medium gradient-accent-text",
                                                    style: {
                                                        fontFamily: 'var(--font-poem)',
                                                        lineHeight: '2'
                                                    },
                                                    children: currentKeyword
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                    lineNumber: 496,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                lineNumber: 495,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 494,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center text-sm text-[var(--text-2)]",
                                            children: "استحضري البيت كاملًا"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 505,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                    lineNumber: 488,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            ref: textareaRef,
                                            value: userAnswer,
                                            onChange: (e)=>setUserAnswer(e.target.value),
                                            placeholder: "اكتبي البيت كاملًا...",
                                            dir: "rtl",
                                            rows: 3,
                                            style: {
                                                fontFamily: 'var(--font-poem)',
                                                lineHeight: '2',
                                                fontSize: verseFontSize
                                            },
                                            className: "w-full px-4 py-3 rounded-xl border border-[var(--border-0)] bg-[var(--glass-bg)] backdrop-blur-[8px] text-[var(--text-0)] text-sm placeholder:text-[var(--text-3)] focus:border-[var(--accent-soft)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all duration-200 outline-none resize-none text-center"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 511,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "primary",
                                                size: "md",
                                                onClick: checkAnswer,
                                                disabled: !userAnswer.trim(),
                                                children: "أجيبي"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                lineNumber: 523,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 522,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                    lineNumber: 510,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        phase === 'feedback' && round && lastVerse && lastResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-3 py-2",
                                    children: lastResult.isCorrect ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-full bg-[var(--success-light)] flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    size: 20,
                                                    className: "text-[var(--success)]",
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                    lineNumber: 543,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                lineNumber: 542,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-[var(--success)]",
                                                children: "استحضرتِ البيت بنجاح"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                lineNumber: 545,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-full bg-[var(--error-light)] flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                    size: 20,
                                                    className: "text-[var(--error)]",
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                    lineNumber: 552,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                lineNumber: 551,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-[var(--error)]",
                                                children: "لم تتمي استحضار البيت"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                lineNumber: 554,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                    lineNumber: 539,
                                    columnNumber: 15
                                }, this),
                                fateenMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-inner flex items-start gap-2.5 p-3.5 rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GazelleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: 14,
                                            className: "text-[var(--accent)] shrink-0 mt-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 564,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-[var(--text-1)] leading-6",
                                            children: fateenMsg
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 565,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                    lineNumber: 563,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-[var(--text-3)] mb-3 text-center",
                                            children: "البيت الصحيح:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 572,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PoeticVerseDisplay, {
                                            sadr: lastVerse.sadr,
                                            ajar: lastVerse.ajar,
                                            showTashkeel: showTashkeel,
                                            fontSize: verseFontSize
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 575,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                    lineNumber: 571,
                                    columnNumber: 15
                                }, this),
                                !lastResult.isCorrect && lastResult.diffTokens.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-[var(--text-3)] mb-2 text-center",
                                            children: "إجابتكِ:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 585,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DiffDisplay, {
                                                tokens: lastResult.diffTokens
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                lineNumber: 589,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 588,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                    lineNumber: 584,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center pt-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "primary",
                                        size: "md",
                                        onClick: nextQuestion,
                                        children: round.isComplete ? 'أنهي الجولة' : 'التالي'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FateenChallengeView.tsx",
                                        lineNumber: 595,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                    lineNumber: 594,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        phase === 'complete' && round && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: (()=>{
                                const userWins = round.errors.length === 0;
                                const endMessage = userWins ? pickRandom(FATEEN_WIN_MSGS) : pickRandom(FATEEN_LOSS_MSGS);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center gap-4 py-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-16 h-16 rounded-2xl flex items-center justify-center ${userWins ? 'bg-[var(--success-light)]' : 'gradient-accent shadow-lg shadow-[var(--accent)]/25'}`,
                                                    children: userWins ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        size: 32,
                                                        className: "text-[var(--success)]",
                                                        strokeWidth: 1.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                        lineNumber: 617,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GazelleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        size: 32,
                                                        className: "text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                        lineNumber: 619,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center space-y-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg font-bold text-[var(--text-0)]",
                                                            children: userWins ? 'أنتِ الفائزة!' : 'فَطين هو الفائز'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                            lineNumber: 624,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-[var(--text-2)]",
                                                            children: userWins ? 'لم يستطع فَطين أن يفلت منكِ ببيت واحد' : 'أمسكَ فَطين ببعض أبياتكِ'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                            lineNumber: 627,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                    lineNumber: 623,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 614,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "p-5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GazelleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        size: 18,
                                                        className: `shrink-0 mt-0.5 ${userWins ? 'text-[var(--success)]' : 'text-[var(--accent)]'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                        lineNumber: 638,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: endMessage.split('\n').map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-sm leading-7 ${i === 0 ? 'font-medium text-[var(--text-0)]' : 'text-[var(--text-1)]'}`,
                                                                children: line
                                                            }, i, false, {
                                                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                                lineNumber: 641,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                        lineNumber: 639,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                lineNumber: 637,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 636,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    className: "p-4 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl font-bold text-[var(--text-0)]",
                                                            children: round.verseOrder.length
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                            lineNumber: 656,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-[var(--text-3)]",
                                                            children: "إجمالي الأبيات"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                            lineNumber: 657,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                    lineNumber: 655,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    className: "p-4 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl font-bold text-[var(--success)]",
                                                            children: round.correct.length
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                            lineNumber: 660,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-[var(--text-3)]",
                                                            children: "صحيح"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                            lineNumber: 661,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                    lineNumber: 659,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    className: "p-4 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl font-bold text-[var(--error)]",
                                                            children: round.errors.length
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                            lineNumber: 664,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-[var(--text-3)]",
                                                            children: "خطأ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                            lineNumber: 665,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                    lineNumber: 663,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 654,
                                            columnNumber: 21
                                        }, this),
                                        !userWins && round.errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-medium text-[var(--text-1)] mb-3",
                                                    children: "الأبيات التي أخطأتِ فيها:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                    lineNumber: 672,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: round.errors.map((verseIdx, i)=>{
                                                        const v = poem.verses[verseIdx];
                                                        if (!v) return null;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                            className: "p-3.5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--error-light)] text-[var(--error)] text-[10px] font-bold shrink-0",
                                                                        children: i + 1
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                                        lineNumber: 682,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[10px] text-[var(--text-3)] mb-1",
                                                                                children: [
                                                                                    "البيت ",
                                                                                    verseIdx + 1
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                                                lineNumber: 686,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PoeticVerseDisplay, {
                                                                                sadr: v.sadr,
                                                                                ajar: v.ajar,
                                                                                showTashkeel: showTashkeel,
                                                                                fontSize: "1rem"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                                                lineNumber: 689,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                                        lineNumber: 685,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                                lineNumber: 681,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, verseIdx, false, {
                                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                            lineNumber: 680,
                                                            columnNumber: 31
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 671,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center gap-3 pt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "md",
                                                    onClick: onClose,
                                                    children: "عودة"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                    lineNumber: 706,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "primary",
                                                    size: "md",
                                                    onClick: startRound,
                                                    children: "جولة جديدة"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                                                    lineNumber: 709,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FateenChallengeView.tsx",
                                            lineNumber: 705,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true);
                            })()
                        }, void 0, false)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FateenChallengeView.tsx",
                    lineNumber: 409,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FateenChallengeView.tsx",
                lineNumber: 408,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FateenChallengeView.tsx",
        lineNumber: 369,
        columnNumber: 5
    }, this);
}
_s(FateenChallengeView, "dMI9RJU066o39tOg1WkGnHwqaqE=");
_c2 = FateenChallengeView;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PoeticVerseDisplay");
__turbopack_context__.k.register(_c1, "DiffDisplay");
__turbopack_context__.k.register(_c2, "FateenChallengeView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FateenSelectPoem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FateenSelectPoem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/algorithm.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GazelleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GazelleIcon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function FateenSelectPoem({ state, onSelectPoem, onAddPoem }) {
    _s();
    const { poems, stats } = state;
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const filtered = search.trim() ? poems.filter((p)=>p.title.includes(search.trim()) || p.poet.includes(search.trim())) : poems;
    // القصائد الصالحة للتحدي = التي لها بيت واحد على الأقل
    const eligible = filtered.filter((p)=>p.verses.length > 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-3xl mx-auto py-8 lg:py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-4 mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-11 h-11 rounded-2xl bg-[var(--accent-light)] flex items-center justify-center shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GazelleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                size: 24,
                                className: "text-[var(--accent)]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/FateenSelectPoem.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-[var(--text-0)] mb-1.5",
                                    children: "تحدي فَطين"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[var(--text-2)] leading-6",
                                    children: "كلمةٌ واحدة من كل بيت... فهل تستحضرين البيت كاملًا؟"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FateenSelectPoem.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FateenSelectPoem.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FateenSelectPoem.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "p-4 mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid sm:grid-cols-3 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center justify-center w-5 h-5 rounded-md bg-[var(--bg-3)] text-[var(--text-2)] text-[10px] font-semibold shrink-0 mt-0.5",
                                    children: "١"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px] text-[var(--text-1)] leading-6",
                                    children: [
                                        "يختار ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-[var(--text-0)]",
                                            children: "فَطين"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                            lineNumber: 71,
                                            columnNumber: 21
                                        }, this),
                                        " أبيات قصيدتك على غير ترتيب"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FateenSelectPoem.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center justify-center w-5 h-5 rounded-md bg-[var(--bg-3)] text-[var(--text-2)] text-[10px] font-semibold shrink-0 mt-0.5",
                                    children: "٢"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px] text-[var(--text-1)] leading-6",
                                    children: "يعطيكِ من كل بيت كلمةً واحدة فقط"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FateenSelectPoem.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center justify-center w-5 h-5 rounded-md bg-[var(--bg-3)] text-[var(--text-2)] text-[10px] font-semibold shrink-0 mt-0.5",
                                    children: "٣"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px] text-[var(--text-1)] leading-6",
                                    children: "عليكِ أن تستحضري البيت كاملًا من الذاكرة"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FateenSelectPoem.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FateenSelectPoem.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FateenSelectPoem.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            poems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 rounded-xl bg-[var(--bg-2)] flex items-center justify-center mx-auto mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                            size: 20,
                            className: "text-[var(--text-3)]",
                            strokeWidth: 1.5
                        }, void 0, false, {
                            fileName: "[project]/src/components/FateenSelectPoem.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FateenSelectPoem.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--text-1)] mb-1",
                        children: "لا توجد قصائد بعد"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FateenSelectPoem.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-[var(--text-3)] mb-6",
                        children: [
                            "أضيفي قصيدة أولًا ليبدأ ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-[var(--text-1)]",
                                children: "فَطين"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                lineNumber: 101,
                                columnNumber: 37
                            }, this),
                            " تحديه"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FateenSelectPoem.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "primary",
                        onClick: onAddPoem,
                        className: "!px-[30px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 16,
                                strokeWidth: 3
                            }, void 0, false, {
                                fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            "إضافة قصيدة"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FateenSelectPoem.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FateenSelectPoem.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-3 mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-medium text-[var(--text-1)]",
                            children: [
                                "اختاري قصيدة للتحدي",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[var(--text-3)] font-normal mr-1.5",
                                    children: [
                                        "(",
                                        eligible.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FateenSelectPoem.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FateenSelectPoem.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    poems.length > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: search,
                            onChange: (e)=>setSearch(e.target.value),
                            placeholder: "ابحثي بالعنوان أو اسم الشاعر...",
                            className: "w-full px-3 py-2 rounded-lg border border-[var(--border-1)] bg-[var(--glass-bg)] backdrop-blur-[8px] text-[var(--text-0)] text-sm placeholder:text-[var(--text-3)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors duration-150 outline-none "
                        }, void 0, false, {
                            fileName: "[project]/src/components/FateenSelectPoem.tsx",
                            lineNumber: 120,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FateenSelectPoem.tsx",
                        lineNumber: 119,
                        columnNumber: 13
                    }, this),
                    eligible.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-8 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[var(--text-2)]",
                            children: "لا توجد قصيدة مطابقة"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FateenSelectPoem.tsx",
                            lineNumber: 133,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FateenSelectPoem.tsx",
                        lineNumber: 132,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: eligible.map((poem)=>{
                            const pStats = stats[poem.id];
                            const progress = pStats ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverallProgress"])(pStats.verses, poem.verses.length) : null;
                            const memorizationRate = pStats ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcMemorizationRate"])(pStats.verses, poem.verses.length) : 0;
                            const hasMemorized = progress ? progress.medium + progress.strong + progress.mastered > 0 : false;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                hover: true,
                                className: "p-4",
                                onClick: ()=>onSelectPoem(poem),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-xl bg-[var(--accent-light)] flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GazelleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    size: 18,
                                                    className: "text-[var(--accent)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                                lineNumber: 158,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-0.5 flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-sm font-medium text-[var(--text-0)] truncate",
                                                                children: poem.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 27
                                                            }, this),
                                                            hasMemorized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: "success",
                                                                children: [
                                                                    "حفظتِ ",
                                                                    memorizationRate,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                                                lineNumber: 169,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: "default",
                                                                children: "لم تبدئي حفظها"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-[var(--text-2)] mb-2",
                                                        children: [
                                                            poem.poet,
                                                            " · ",
                                                            poem.verses.length,
                                                            " بيت ·",
                                                            ' ',
                                                            poem.verses.length,
                                                            " سؤال"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 25
                                                    }, this),
                                                    poem.verses[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-[var(--text-3)] truncate leading-loose",
                                                        style: {
                                                            fontFamily: 'var(--font-poem)'
                                                        },
                                                        children: poem.verses[0].sadr
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                                lineNumber: 163,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "hidden sm:inline text-xs text-[var(--accent-text)] font-medium",
                                                        children: "ابدئي التحدي"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                        size: 15,
                                                        className: "text-[var(--text-3)]",
                                                        strokeWidth: 1.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                                lineNumber: 191,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                        lineNumber: 156,
                                        columnNumber: 21
                                    }, this),
                                    progress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 pt-3 border-t border-[var(--border-0)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressBar"], {
                                            value: memorizationRate
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                            lineNumber: 202,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                        lineNumber: 201,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, poem.id, true, {
                                fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                lineNumber: 150,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/FateenSelectPoem.tsx",
                        lineNumber: 136,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 pt-6 border-t border-[var(--border-0)] flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-[var(--text-3)]",
                                children: "لا تجدين قصيدتكِ؟ أضيفيها أولًا"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                onClick: onAddPoem,
                                className: "!px-[30px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 16,
                                        strokeWidth: 3
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this),
                                    "إضافة قصيدة"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FateenSelectPoem.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FateenSelectPoem.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FateenSelectPoem.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(FateenSelectPoem, "xMSft3/sbCidYXUzqinUsZIh+qY=");
_c = FateenSelectPoem;
var _c;
__turbopack_context__.k.register(_c, "FateenSelectPoem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/App.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAppState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAppState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Dashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PoemsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PoemsPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddPoemModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AddPoemModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SessionStartModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SessionStartModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SessionView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SessionView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReadingView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReadingView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatsView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SettingsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TodaySessionView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TodaySessionView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ErrorLogView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ErrorLogView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FateenChallengeView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FateenChallengeView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FateenSelectPoem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FateenSelectPoem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
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
;
;
;
;
;
;
;
function App() {
    _s();
    const { state, updateSettings, addPoem, updatePoem, deletePoem, updateVerseStats, updateSessionStats, updateCurrentVerse, setActiveSession, addErrorLogEntry, addSuccessLogEntry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAppState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"])();
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('home');
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        type: 'none'
    });
    // Dark mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!state) return;
            document.body.classList.toggle('dark', state.settings.darkMode);
        }
    }["App.useEffect"], [
        state?.settings.darkMode
    ]);
    const handleAddPoem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[handleAddPoem]": (poem)=>{
            addPoem(poem);
        }
    }["App.useCallback[handleAddPoem]"], [
        addPoem
    ]);
    const handleEditPoem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[handleEditPoem]": (poem)=>{
            updatePoem(poem);
        }
    }["App.useCallback[handleEditPoem]"], [
        updatePoem
    ]);
    const handleDeletePoem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[handleDeletePoem]": (poemId)=>{
            deletePoem(poemId);
            setModal({
                type: 'none'
            });
        }
    }["App.useCallback[handleDeletePoem]"], [
        deletePoem
    ]);
    const handleStartSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[handleStartSession]": (poem, mode, opts)=>{
            setActiveSession(poem.id);
            setModal({
                type: 'session',
                poem,
                mode,
                source: opts?.source,
                startFromVerse: opts?.startFromVerse,
                newVerseIndex: opts?.newVerseIndex,
                segmentIndex: opts?.segmentIndex,
                weakVerseIndex: opts?.weakVerseIndex
            });
        }
    }["App.useCallback[handleStartSession]"], [
        setActiveSession
    ]);
    const handleVerseUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[handleVerseUpdate]": (poemId, vs)=>{
            updateVerseStats(poemId, vs);
        }
    }["App.useCallback[handleVerseUpdate]"], [
        updateVerseStats
    ]);
    const handleSessionComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[handleSessionComplete]": (poemId, correct, errors)=>{
            updateSessionStats(poemId, correct, errors);
            setActiveSession(null);
            setModal({
                type: 'none'
            });
        }
    }["App.useCallback[handleSessionComplete]"], [
        updateSessionStats,
        setActiveSession
    ]);
    const handleCurrentVerseUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[handleCurrentVerseUpdate]": (poemId, idx, markCompleted = false)=>{
            updateCurrentVerse(poemId, idx, markCompleted);
        }
    }["App.useCallback[handleCurrentVerseUpdate]"], [
        updateCurrentVerse
    ]);
    const handleErrorLog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[handleErrorLog]": (entry)=>{
            addErrorLogEntry(entry);
        }
    }["App.useCallback[handleErrorLog]"], [
        addErrorLogEntry
    ]);
    const handleSuccessLog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[handleSuccessLog]": (entry)=>{
            addSuccessLogEntry(entry);
        }
    }["App.useCallback[handleSuccessLog]"], [
        addSuccessLogEntry
    ]);
    const openStudy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[openStudy]": (poem)=>{
            setModal({
                type: 'session_start',
                poem
            });
        }
    }["App.useCallback[openStudy]"], []);
    // فتح بيت ضعيف من جلسة اليوم
    const handleStartWeakVerse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[handleStartWeakVerse]": (poem, verseIndex)=>{
            const latestPoem = state?.poems.find({
                "App.useCallback[handleStartWeakVerse]": (p)=>p.id === poem.id
            }["App.useCallback[handleStartWeakVerse]"]) || poem;
            handleStartSession(latestPoem, 'weak_verses', {
                weakVerseIndex: verseIndex,
                source: 'today_session'
            });
        }
    }["App.useCallback[handleStartWeakVerse]"], [
        state,
        handleStartSession
    ]);
    // فتح بيت تراكمي من جلسة اليوم
    const handleStartCumulative = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[handleStartCumulative]": (poem, verseIndex)=>{
            const latestPoem = state?.poems.find({
                "App.useCallback[handleStartCumulative]": (p)=>p.id === poem.id
            }["App.useCallback[handleStartCumulative]"]) || poem;
            handleStartSession(latestPoem, 'cumulative', {
                startFromVerse: verseIndex,
                source: 'today_session'
            });
        }
    }["App.useCallback[handleStartCumulative]"], [
        state,
        handleStartSession
    ]);
    if (!state) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-[var(--bg-0)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-[var(--text-3)]",
                children: "جارٍ التحميل..."
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 157,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/App.tsx",
            lineNumber: 156,
            columnNumber: 7
        }, this);
    }
    const { poems, stats, settings } = state;
    const getLatestPoem = (p)=>poems.find((item)=>item.id === p.id) || p;
    const renderPage = ()=>{
        switch(page){
            case 'home':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    state: state,
                    onStudy: openStudy,
                    onNavigate: (p)=>setPage(p),
                    todaySection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TodaySessionView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        state: state,
                        onStudy: openStudy,
                        onStartWeakVerse: handleStartWeakVerse,
                        onStartCumulative: handleStartCumulative
                    }, void 0, false, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 175,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/App.tsx",
                    lineNumber: 170,
                    columnNumber: 11
                }, this);
            case 'poems':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PoemsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    state: state,
                    onAdd: ()=>setModal({
                            type: 'add'
                        }),
                    onStudy: openStudy,
                    onRead: (poem)=>setModal({
                            type: 'reading',
                            poem
                        }),
                    onStats: (poem)=>setModal({
                            type: 'stats',
                            poem
                        }),
                    onDelete: (poem)=>setModal({
                            type: 'delete_confirm',
                            poem
                        })
                }, void 0, false, {
                    fileName: "[project]/src/App.tsx",
                    lineNumber: 187,
                    columnNumber: 11
                }, this);
            case 'fateen':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FateenSelectPoem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    state: state,
                    onSelectPoem: (poem)=>setModal({
                            type: 'fateen',
                            poem
                        }),
                    onAddPoem: ()=>setModal({
                            type: 'add'
                        })
                }, void 0, false, {
                    fileName: "[project]/src/App.tsx",
                    lineNumber: 198,
                    columnNumber: 11
                }, this);
            case 'stats':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-bold text-[var(--text-0)]",
                                            children: "الإحصائيات"
                                        }, void 0, false, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-[var(--text-3)] font-medium",
                                            children: [
                                                poems.length,
                                                " قصيدة · إجمالي الجلسات:",
                                                ' ',
                                                Object.values(stats).reduce((s, p)=>s + p.totalSessions, 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setModal({
                                            type: 'error_log'
                                        }),
                                    className: "flex items-center gap-2 px-3 py-2 rounded-xl border border-[var(--border-0)] bg-[var(--bg-2)] text-xs font-bold text-[var(--text-2)] hover:text-[var(--text-0)] transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            size: 14,
                                            strokeWidth: 2.5
                                        }, void 0, false, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 219,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "سجل الأخطاء"
                                        }, void 0, false, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 220,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tabular-nums",
                                            children: [
                                                "(",
                                                state.errorLog.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this),
                        poems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "p-10 text-center text-sm text-[var(--text-3)] font-medium",
                            children: "أضيفي قصيدة أولًا لرؤية الإحصائيات"
                        }, void 0, false, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 225,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: poems.map((poem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    hover: true,
                                    className: "p-4 flex items-center justify-between gap-4",
                                    onClick: ()=>setModal({
                                            type: 'stats',
                                            poem
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0 flex flex-col gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-[var(--text-0)] text-sm truncate",
                                                    children: poem.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-[var(--text-3)] truncate",
                                                    children: [
                                                        poem.poet,
                                                        " · ",
                                                        stats[poem.id]?.totalSessions || 0,
                                                        " جلسة"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 235,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            size: 16,
                                            className: "text-[var(--text-3)] opacity-40"
                                        }, void 0, false, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 241,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, poem.id, true, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 229,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 227,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/App.tsx",
                    lineNumber: 206,
                    columnNumber: 11
                }, this);
            case 'settings':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-1 flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold text-[var(--text-0)]",
                                    children: "الإعدادات"
                                }, void 0, false, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-[var(--text-3)] font-medium",
                                    children: "تُحفظ تفضيلاتك تلقائيًا في المتصفح"
                                }, void 0, false, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 251,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-0 divide-y divide-[var(--border-0)] glass-card rounded-2xl overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-4 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-[var(--text-0)]",
                                                    children: "الوضع الليلي"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-[var(--text-3)]",
                                                    children: "تصميم داكن مريح للعينين"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 257,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>updateSettings({
                                                    darkMode: !settings.darkMode
                                                }),
                                            className: `relative inline-flex w-9 h-5 rounded-full transition-all duration-200 shrink-0 ${settings.darkMode ? 'bg-[var(--accent)]' : 'bg-[var(--bg-3)]'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `absol
                      ute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-200 ${settings.darkMode ? 'right-0.5' : 'right-auto left-0.5'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 267,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 261,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 256,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-4 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-[var(--text-0)]",
                                                    children: "حجم الخط"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-[var(--text-3)]",
                                                    children: "حجم نص الأبيات"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            children: [
                                                1,
                                                2,
                                                3
                                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>updateSettings({
                                                            fontSize: s
                                                        }),
                                                    className: `px-2.5 py-1 rounded-md text-xs transition-all ${settings.fontSize === s ? 'bg-[var(--accent)] text-white' : 'bg-[var(--bg-2)] text-[var(--text-2)]'}`,
                                                    children: s === 1 ? 'ص' : s === 2 ? 'م' : 'ك'
                                                }, s, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 280,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-4 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-[var(--text-0)]",
                                                    children: "التشكيل إلزامي"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-[var(--text-3)]",
                                                    children: "مطابقة التشكيل في الاختبارات"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>updateSettings({
                                                    requireTashkeel: !settings.requireTashkeel
                                                }),
                                            className: `relative inline-flex w-9 h-5 rounded-full transition-all duration-200 shrink-0 ${settings.requireTashkeel ? 'bg-[var(--accent)]' : 'bg-[var(--bg-3)]'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-200 ${settings.requireTashkeel ? 'right-0.5' : 'right-auto left-0.5'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 307,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 301,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 296,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-4 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-[var(--text-0)]",
                                                    children: "أرقام الأبيات"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-[var(--text-3)]",
                                                    children: "إظهار رقم البيت في وضع القراءة"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 315,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>updateSettings({
                                                    showVerseNumbers: !settings.showVerseNumbers
                                                }),
                                            className: `relative inline-flex w-9 h-5 rounded-full transition-all duration-200 shrink-0 ${settings.showVerseNumbers ? 'bg-[var(--accent)]' : 'bg-[var(--bg-3)]'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-200 ${settings.showVerseNumbers ? 'right-0.5' : 'right-auto left-0.5'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 325,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 314,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-4 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-[var(--text-0)]",
                                                    children: "سرعة القراءة"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-[var(--text-3)]",
                                                    children: [
                                                        settings.speechRate,
                                                        "x"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "0.5",
                                            max: "1.5",
                                            step: "0.1",
                                            value: settings.speechRate,
                                            onChange: (e)=>updateSettings({
                                                    speechRate: Number(e.target.value)
                                                }),
                                            className: "w-20 accent-[var(--accent)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 332,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-4 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-[var(--text-0)]",
                                                    children: "نبرة الصوت"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-[var(--text-3)]",
                                                    children: settings.speechPitch
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 345,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "0.5",
                                            max: "2",
                                            step: "0.1",
                                            value: settings.speechPitch,
                                            onChange: (e)=>updateSettings({
                                                    speechPitch: Number(e.target.value)
                                                }),
                                            className: "w-20 accent-[var(--accent)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 349,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 344,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/App.tsx",
                    lineNumber: 250,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        currentPage: page,
        onNavigate: setPage,
        darkMode: settings.darkMode,
        onToggleDark: ()=>updateSettings({
                darkMode: !settings.darkMode
            }),
        children: [
            renderPage(),
            (modal.type === 'add' || modal.type === 'edit') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddPoemModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setModal({
                        type: 'none'
                    }),
                onAdd: modal.type === 'add' ? handleAddPoem : handleEditPoem,
                editPoem: modal.type === 'edit' ? modal.poem : undefined
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 375,
                columnNumber: 9
            }, this),
            modal.type === 'session_start' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SessionStartModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                poem: getLatestPoem(modal.poem),
                stats: stats[modal.poem.id],
                onStart: (mode, opts)=>{
                    if (mode === 'fateen') {
                        setModal({
                            type: 'fateen',
                            poem: getLatestPoem(modal.poem)
                        });
                    } else {
                        handleStartSession(getLatestPoem(modal.poem), mode, opts);
                    }
                },
                onFateen: ()=>setModal({
                        type: 'fateen',
                        poem: getLatestPoem(modal.poem)
                    }),
                onClose: ()=>setModal({
                        type: 'none'
                    })
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 384,
                columnNumber: 9
            }, this),
            modal.type === 'session' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SessionView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                poem: getLatestPoem(modal.poem),
                stats: stats[modal.poem.id],
                settings: settings,
                mode: modal.mode,
                source: modal.source,
                startFromVerse: modal.startFromVerse,
                newVerseIndex: modal.newVerseIndex,
                segmentIndex: modal.segmentIndex,
                weakVerseIndex: modal.weakVerseIndex,
                onClose: ()=>{
                    setActiveSession(null);
                    setModal({
                        type: 'none'
                    });
                },
                onVerseUpdate: handleVerseUpdate,
                onSessionComplete: handleSessionComplete,
                onCurrentVerseUpdate: handleCurrentVerseUpdate,
                onErrorLog: handleErrorLog,
                onSuccessLog: handleSuccessLog
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 401,
                columnNumber: 9
            }, this),
            modal.type === 'reading' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReadingView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                poem: getLatestPoem(modal.poem),
                stats: stats[modal.poem.id],
                settings: settings,
                onClose: ()=>setModal({
                        type: 'none'
                    })
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 425,
                columnNumber: 9
            }, this),
            modal.type === 'stats' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                poem: getLatestPoem(modal.poem),
                stats: stats[modal.poem.id],
                errorLog: state.errorLog,
                onClose: ()=>setModal({
                        type: 'none'
                    })
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 435,
                columnNumber: 9
            }, this),
            modal.type === 'settings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                settings: settings,
                onUpdate: updateSettings,
                onClose: ()=>setModal({
                        type: 'none'
                    })
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 445,
                columnNumber: 9
            }, this),
            modal.type === 'delete_confirm' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay",
                onClick: ()=>setModal({
                        type: 'none'
                    }),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-sm glass-modal rounded-xl p-6 animate-scale-in",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-semibold text-[var(--text-0)] mb-2",
                            children: "حذف القصيدة"
                        }, void 0, false, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 459,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-[var(--text-2)] mb-6",
                            children: [
                                "هل تريدين حذف «",
                                modal.poem.title,
                                "»؟ لن يمكن التراجع."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 460,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 justify-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: ()=>setModal({
                                            type: 'none'
                                        }),
                                    children: "إلغاء"
                                }, void 0, false, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 464,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "danger",
                                    size: "sm",
                                    onClick: ()=>handleDeletePoem(modal.poem.id),
                                    children: "حذف"
                                }, void 0, false, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 465,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 463,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/App.tsx",
                    lineNumber: 455,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 454,
                columnNumber: 9
            }, this),
            modal.type === 'error_log' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ErrorLogView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                errorLog: state.errorLog,
                successLog: state.successLog,
                poems: poems,
                onClose: ()=>setModal({
                        type: 'none'
                    })
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 473,
                columnNumber: 9
            }, this),
            modal.type === 'fateen' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FateenChallengeView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                poem: getLatestPoem(modal.poem),
                settings: settings,
                poemStats: stats[modal.poem.id],
                onClose: ()=>setModal({
                        type: 'none'
                    }),
                onVerseUpdate: handleVerseUpdate,
                onErrorLog: handleErrorLog,
                onSuccessLog: handleSuccessLog
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 483,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/App.tsx",
        lineNumber: 365,
        columnNumber: 5
    }, this);
}
_s(App, "X03zDSyiKRn7Lpx8QtiWlPFw9IY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAppState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"]
    ];
});
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_04.vw6j._.js.map