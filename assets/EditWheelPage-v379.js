const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/DesktopAd-v379.js", "assets/index-v379.js", "assets/index-KB94dk0I.css", "assets/AppFooter-v379.js", "assets/_plugin-vue_export-helper-v379.js", "assets/AppFooter-BhUctadA.css", "assets/DesktopAd-C603vRp3.css"]))) => i.map(i => d[i]);
import {q as it, j as h, s as A, am as Bt, ay as Rn, az as ja, al as ct, i as F, aA as Ha, aB as Nn, af as he, k as ll, B as De, A as O, aC as nt, x as _e, at as Qa, n as X, o as V, h as be, aD as Al, a6 as Oe, aE as jn, w as u, f as o, d as m, aF as At, m as E, O as v, a8 as ue, a9 as We, z as ye, e as Q, aG as rl, aH as J, aI as ul, aJ as Hn, aK as Ka, H as Ye, p as Ae, a7 as Zt, a as Z, I as dt, Q as at, R as ht, aL as ea, aM as ta, aN as la, aO as aa, aP as Ga, aQ as Qn, aR as na, aS as oa, aT as Tt, aU as ia, aV as Vl, aW as Ya, aX as yl, aY as Kn, aZ as ol, a_ as Xa, a$ as Kt, b0 as rt, b1 as Gn, b2 as Yn, b3 as Ja, ap as sa, b4 as Xn, b5 as Il, b6 as Za, b7 as ra, b8 as ql, b9 as Ql, ba as Jn, v as It, t as Ue, bb as Zn, C as lt, bc as en, F as ut, G as gt, bd as tn, ab as el, be as ua, bf as Kl, r as vl, bg as xt, bh as Ge, bi as eo, bj as ln, bk as an, bl as Gt, bm as yt, bn as Yt, bo as Dt, bp as tl, bq as nn, aj as fl, ak as ml, br as to, bs as Wl, bt as on, bu as ca, bv as lo, bw as wl, as as ao, bx as no, by as oo, bz as io, bA as so, bB as ro, an as sn, bC as uo, bD as co, bE as vo, bF as Xt, bG as fo, bH as rn, bI as Gl, bJ as mo, bK as go, bL as po, bM as un, bN as cn, bO as ho, bP as dn, bQ as vn, bR as fn, bS as bo, bT as yo, bU as Sa, bV as wo, ai as mn, bW as El, bX as _o, bY as Pl, bZ as Ca, b_ as ka, b$ as Fo, c0 as zl, c1 as xa, c2 as Da, c3 as gn, c4 as pn, c5 as hn, c6 as Aa, c7 as So, D as Co, Y as ko, c8 as xo, c9 as Do, u as Ao, ad as Vo, ca as Ll, cb as Eo, cc as $o, ax as Bo} from "./index-v379.js";
import {a as To, Q as Io} from "./QToolbar-v379.js";
import {Q as qo} from "./QPageContainer-v379.js";
import {_ as st, a as Yl, b as Wo, Q as Po} from "./_plugin-vue_export-helper-v379.js";
import {u as ft} from "./use-quasar-v379.js";
import {u as gl, A as zo} from "./AppFooter-v379.js";
import {Q as Lo} from "./QToolbarTitle-v379.js";
import {Q as Ct} from "./QSpace-v379.js";
import {Q as Vt, a as _l} from "./QChip-v379.js";
import {Q as $l, a as Mt, b as we, c as ne} from "./QMenu-v379.js";
import {C as Xe, D as qt} from "./DialogCloseIcon-v379.js";
import {W as Mo, p as Ml, g as Uo, s as Fl, a as Oo, b as bn, c as Sl, d as Ro, e as No, f as jo, h as Ho, S as Qo, i as Ko, l as Go} from "./ConfettiLauncher-v379.js";
import {s as $t, c as al, b as Ne, a as yn, y as da, e as Va, f as Xl} from "./Messenger-v379.js";
import {_ as Yo} from "./LoginDialog.vue_vue_type_script_setup_true_lang-v379.js";
import {W as Xo, u as wn} from "./WheelInfoCard-v379.js";
import {c as _n, u as Jo, a as Zo} from "./position-engine-v379.js";
import {Q as ei} from "./QImg-v379.js";
import {Q as Jl} from "./QBadge-v379.js";
import {A as Pt} from "./AboutCard-v379.js";
import {u as ti, b as li} from "./vue.BYLJNEcq-v379.js";
import "./AppLogin-v379.js";
import "./use-ratio-v379.js";
const va = ( () => {
    if (typeof self > "u")
        return !1;
    if ("top"in self && self !== top)
        try {
            top.window.document._ = 0
        } catch {
            return !1
        }
    return "showOpenFilePicker"in self
}
)()
  , ai = va ? Promise.resolve().then(function() {
    return ui
}) : Promise.resolve().then(function() {
    return gi
});
async function ni(...e) {
    return (await ai).default(...e)
}
va ? Promise.resolve().then(function() {
    return di
}) : Promise.resolve().then(function() {
    return hi
});
const oi = va ? Promise.resolve().then(function() {
    return fi
}) : Promise.resolve().then(function() {
    return yi
});
async function ii(...e) {
    return (await oi).default(...e)
}
const si = async e => {
    const s = await e.getFile();
    return s.handle = e,
    s
}
;
var ri = async (e=[{}]) => {
    Array.isArray(e) || (e = [e]);
    const s = [];
    e.forEach( (t, n) => {
        s[n] = {
            description: t.description || "Files",
            accept: {}
        },
        t.mimeTypes ? t.mimeTypes.map(i => {
            s[n].accept[i] = t.extensions || []
        }
        ) : s[n].accept["*/*"] = t.extensions || []
    }
    );
    const l = await window.showOpenFilePicker({
        id: e[0].id,
        startIn: e[0].startIn,
        types: s,
        multiple: e[0].multiple || !1,
        excludeAcceptAllOption: e[0].excludeAcceptAllOption || !1
    })
      , a = await Promise.all(l.map(si));
    return e[0].multiple ? a : a[0]
}
  , ui = {
    __proto__: null,
    default: ri
};
function bl(e) {
    function s(l) {
        if (Object(l) !== l)
            return Promise.reject(new TypeError(l + " is not an object."));
        var a = l.done;
        return Promise.resolve(l.value).then(function(t) {
            return {
                value: t,
                done: a
            }
        })
    }
    return bl = function(l) {
        this.s = l,
        this.n = l.next
    }
    ,
    bl.prototype = {
        s: null,
        n: null,
        next: function() {
            return s(this.n.apply(this.s, arguments))
        },
        return: function(l) {
            var a = this.s.return;
            return a === void 0 ? Promise.resolve({
                value: l,
                done: !0
            }) : s(a.apply(this.s, arguments))
        },
        throw: function(l) {
            var a = this.s.return;
            return a === void 0 ? Promise.reject(l) : s(a.apply(this.s, arguments))
        }
    },
    new bl(e)
}
const Fn = async (e, s, l=e.name, a) => {
    const t = []
      , n = [];
    var i, r = !1, f = !1;
    try {
        for (var c, d = function(g) {
            var p, y, x, w = 2;
            for (typeof Symbol < "u" && (y = Symbol.asyncIterator,
            x = Symbol.iterator); w--; ) {
                if (y && (p = g[y]) != null)
                    return p.call(g);
                if (x && (p = g[x]) != null)
                    return new bl(p.call(g));
                y = "@@asyncIterator",
                x = "@@iterator"
            }
            throw new TypeError("Object is not async iterable")
        }(e.values()); r = !(c = await d.next()).done; r = !1) {
            const g = c.value
              , p = `${l}/${g.name}`;
            g.kind === "file" ? n.push(g.getFile().then(y => (y.directoryHandle = e,
            y.handle = g,
            Object.defineProperty(y, "webkitRelativePath", {
                configurable: !0,
                enumerable: !0,
                get: () => p
            })))) : g.kind !== "directory" || !s || a && a(g) || t.push(Fn(g, s, p, a))
        }
    } catch (g) {
        f = !0,
        i = g
    } finally {
        try {
            r && d.return != null && await d.return()
        } finally {
            if (f)
                throw i
        }
    }
    return [...(await Promise.all(t)).flat(), ...await Promise.all(n)]
}
;
var ci = async (e={}) => {
    e.recursive = e.recursive || !1,
    e.mode = e.mode || "read";
    const s = await window.showDirectoryPicker({
        id: e.id,
        startIn: e.startIn,
        mode: e.mode
    });
    return (await (await s.values()).next()).done ? [s] : Fn(s, e.recursive, void 0, e.skipDirectory)
}
  , di = {
    __proto__: null,
    default: ci
}
  , vi = async (e, s=[{}], l=null, a=!1, t=null) => {
    Array.isArray(s) || (s = [s]),
    s[0].fileName = s[0].fileName || "Untitled";
    const n = [];
    let i = null;
    if (e instanceof Blob && e.type ? i = e.type : e.headers && e.headers.get("content-type") && (i = e.headers.get("content-type")),
    s.forEach( (c, d) => {
        n[d] = {
            description: c.description || "Files",
            accept: {}
        },
        c.mimeTypes ? (d === 0 && i && c.mimeTypes.push(i),
        c.mimeTypes.map(g => {
            n[d].accept[g] = c.extensions || []
        }
        )) : i ? n[d].accept[i] = c.extensions || [] : n[d].accept["*/*"] = c.extensions || []
    }
    ),
    l)
        try {
            await l.getFile()
        } catch (c) {
            if (l = null,
            a)
                throw c
        }
    const r = l || await window.showSaveFilePicker({
        suggestedName: s[0].fileName,
        id: s[0].id,
        startIn: s[0].startIn,
        types: n,
        excludeAcceptAllOption: s[0].excludeAcceptAllOption || !1
    });
    !l && t && t(r);
    const f = await r.createWritable();
    return "stream"in e ? (await e.stream().pipeTo(f),
    r) : "body"in e ? (await e.body.pipeTo(f),
    r) : (await f.write(await e),
    await f.close(),
    r)
}
  , fi = {
    __proto__: null,
    default: vi
}
  , mi = async (e=[{}]) => (Array.isArray(e) || (e = [e]),
new Promise( (s, l) => {
    const a = document.createElement("input");
    a.type = "file";
    const t = [...e.map(n => n.mimeTypes || []), ...e.map(n => n.extensions || [])].join();
    a.multiple = e[0].multiple || !1,
    a.accept = t || "",
    a.style.display = "none",
    document.body.append(a),
    a.addEventListener("cancel", () => {
        a.remove(),
        l(new DOMException("The user aborted a request.","AbortError"))
    }
    ),
    a.addEventListener("change", () => {
        a.remove(),
        s(a.multiple ? Array.from(a.files) : a.files[0])
    }
    ),
    "showPicker"in HTMLInputElement.prototype ? a.showPicker() : a.click()
}
))
  , gi = {
    __proto__: null,
    default: mi
}
  , pi = async (e=[{}]) => (Array.isArray(e) || (e = [e]),
e[0].recursive = e[0].recursive || !1,
new Promise( (s, l) => {
    const a = document.createElement("input");
    a.type = "file",
    a.webkitdirectory = !0,
    a.style.display = "none",
    document.body.append(a),
    a.addEventListener("cancel", () => {
        a.remove(),
        l(new DOMException("The user aborted a request.","AbortError"))
    }
    ),
    a.addEventListener("change", () => {
        a.remove();
        let t = Array.from(a.files);
        e[0].recursive ? e[0].recursive && e[0].skipDirectory && (t = t.filter(n => n.webkitRelativePath.split("/").every(i => !e[0].skipDirectory({
            name: i,
            kind: "directory"
        })))) : t = t.filter(n => n.webkitRelativePath.split("/").length === 2),
        s(t)
    }
    ),
    "showPicker"in HTMLInputElement.prototype ? a.showPicker() : a.click()
}
))
  , hi = {
    __proto__: null,
    default: pi
}
  , bi = async (e, s={}) => {
    Array.isArray(s) && (s = s[0]);
    const l = document.createElement("a");
    let a = e;
    "body"in e && (a = await async function(i, r) {
        const f = i.getReader()
          , c = new ReadableStream({
            start: p => async function y() {
                return f.read().then( ({done: x, value: w}) => {
                    if (!x)
                        return p.enqueue(w),
                        y();
                    p.close()
                }
                )
            }()
        })
          , d = new Response(c)
          , g = await d.blob();
        return f.releaseLock(),
        new Blob([g],{
            type: r
        })
    }(e.body, e.headers.get("content-type"))),
    l.download = s.fileName || "Untitled",
    l.href = URL.createObjectURL(await a);
    const t = () => {
        typeof n == "function" && n()
    }
      , n = s.legacySetup && s.legacySetup(t, () => n(), l);
    return l.addEventListener("click", () => {
        setTimeout( () => URL.revokeObjectURL(l.href), 3e4),
        t()
    }
    ),
    l.click(),
    null
}
  , yi = {
    __proto__: null,
    default: bi
};
const tt = it({
    name: "QItemLabel",
    props: {
        overline: Boolean,
        caption: Boolean,
        header: Boolean,
        lines: [Number, String]
    },
    setup(e, {slots: s}) {
        const l = h( () => parseInt(e.lines, 10))
          , a = h( () => "q-item__label" + (e.overline === !0 ? " q-item__label--overline text-overline" : "") + (e.caption === !0 ? " q-item__label--caption text-caption" : "") + (e.header === !0 ? " q-item__label--header" : "") + (l.value === 1 ? " ellipsis" : ""))
          , t = h( () => e.lines !== void 0 && l.value > 1 ? {
            overflow: "hidden",
            display: "-webkit-box",
            "-webkit-box-orient": "vertical",
            "-webkit-line-clamp": l.value
        } : null);
        return () => A("div", {
            style: t.value,
            class: a.value
        }, Bt(s.default))
    }
})
  , wi = it({
    name: "QBtnGroup",
    props: {
        unelevated: Boolean,
        outline: Boolean,
        flat: Boolean,
        rounded: Boolean,
        square: Boolean,
        push: Boolean,
        stretch: Boolean,
        glossy: Boolean,
        spread: Boolean
    },
    setup(e, {slots: s}) {
        const l = h( () => {
            const a = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter(t => e[t] === !0).map(t => `q-btn-group--${t}`).join(" ");
            return `q-btn-group row no-wrap${a.length !== 0 ? " " + a : ""}` + (e.spread === !0 ? " q-btn-group--spread" : " inline")
        }
        );
        return () => A("div", {
            class: l.value
        }, Bt(s.default))
    }
})
  , _i = Object.keys(ja);
function Fi(e) {
    return _i.reduce( (s, l) => {
        const a = e[l];
        return a !== void 0 && (s[l] = a),
        s
    }
    , {})
}
const St = it({
    name: "QBtnDropdown",
    props: {
        ...ja,
        ...Rn,
        modelValue: Boolean,
        split: Boolean,
        dropdownIcon: String,
        contentClass: [Array, String, Object],
        contentStyle: [Array, String, Object],
        cover: Boolean,
        persistent: Boolean,
        noEscDismiss: Boolean,
        noRouteDismiss: Boolean,
        autoClose: Boolean,
        noRefocus: Boolean,
        noFocus: Boolean,
        menuAnchor: {
            type: String,
            default: "bottom end"
        },
        menuSelf: {
            type: String,
            default: "top end"
        },
        menuOffset: Array,
        disableMainBtn: Boolean,
        disableDropdown: Boolean,
        noIconAnimation: Boolean,
        toggleAriaLabel: String
    },
    emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"],
    setup(e, {slots: s, emit: l}) {
        const {proxy: a} = ct()
          , t = F(e.modelValue)
          , n = F(null)
          , i = Ha()
          , r = h( () => {
            const D = {
                "aria-expanded": t.value === !0 ? "true" : "false",
                "aria-haspopup": "true",
                "aria-controls": i.value,
                "aria-label": e.toggleAriaLabel || a.$q.lang.label[t.value === !0 ? "collapse" : "expand"](e.label)
            };
            return (e.disable === !0 || e.split === !1 && e.disableMainBtn === !0 || e.disableDropdown === !0) && (D["aria-disabled"] = "true"),
            D
        }
        )
          , f = h( () => "q-btn-dropdown__arrow" + (t.value === !0 && e.noIconAnimation === !1 ? " rotate-180" : "") + (e.split === !1 ? " q-btn-dropdown__arrow-container" : ""))
          , c = h( () => Nn(e))
          , d = h( () => Fi(e));
        he( () => e.modelValue, D => {
            n.value?.[D ? "show" : "hide"]()
        }
        ),
        he( () => e.split, C);
        function g(D) {
            t.value = !0,
            l("beforeShow", D)
        }
        function p(D) {
            l("show", D),
            l("update:modelValue", !0)
        }
        function y(D) {
            t.value = !1,
            l("beforeHide", D)
        }
        function x(D) {
            l("hide", D),
            l("update:modelValue", !1)
        }
        function w(D) {
            l("click", D)
        }
        function T(D) {
            nt(D),
            C(),
            l("click", D)
        }
        function I(D) {
            n.value?.toggle(D)
        }
        function S(D) {
            n.value?.show(D)
        }
        function C(D) {
            n.value?.hide(D)
        }
        return Object.assign(a, {
            show: S,
            hide: C,
            toggle: I
        }),
        ll( () => {
            e.modelValue === !0 && S()
        }
        ),
        () => {
            const D = [A(De, {
                class: f.value,
                name: e.dropdownIcon || a.$q.iconSet.arrow.dropdown
            })];
            return e.disableDropdown !== !0 && D.push(A($l, {
                ref: n,
                id: i.value,
                class: e.contentClass,
                style: e.contentStyle,
                cover: e.cover,
                fit: !0,
                persistent: e.persistent,
                noEscDismiss: e.noEscDismiss,
                noRouteDismiss: e.noRouteDismiss,
                autoClose: e.autoClose,
                noFocus: e.noFocus,
                noRefocus: e.noRefocus,
                anchor: e.menuAnchor,
                self: e.menuSelf,
                offset: e.menuOffset,
                separateClosePopup: !0,
                transitionShow: e.transitionShow,
                transitionHide: e.transitionHide,
                transitionDuration: e.transitionDuration,
                onBeforeShow: g,
                onShow: p,
                onBeforeHide: y,
                onHide: x
            }, s.default)),
            e.split === !1 ? A(O, {
                class: "q-btn-dropdown q-btn-dropdown--simple",
                ...d.value,
                ...r.value,
                disable: e.disable === !0 || e.disableMainBtn === !0,
                noWrap: !0,
                round: !1,
                onClick: w
            }, {
                default: () => Bt(s.label, []).concat(D),
                loading: s.loading
            }) : A(wi, {
                class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",
                rounded: e.rounded,
                square: e.square,
                ...c.value,
                glossy: e.glossy,
                stretch: e.stretch
            }, () => [A(O, {
                class: "q-btn-dropdown--current",
                ...d.value,
                disable: e.disable === !0 || e.disableMainBtn === !0,
                noWrap: !0,
                round: !1,
                onClick: T
            }, {
                default: s.label,
                loading: s.loading
            }), A(O, {
                class: "q-btn-dropdown__arrow-container q-anchor--skip",
                ...r.value,
                ...c.value,
                disable: e.disable === !0 || e.disableDropdown === !0,
                rounded: e.rounded,
                color: e.color,
                textColor: e.textColor,
                dense: e.dense,
                size: e.size,
                padding: e.padding,
                ripple: e.ripple
            }, () => D)])
        }
    }
})
  , Si = {
    __name: "LanguagePicker",
    emits: ["open-languages"],
    setup(e, {emit: s}) {
        const {locale: l} = _e()
          , a = s
          , t = h( () => Qa().find(n => n.name === l.value)?.humanName);
        return (n, i) => (V(),
        X(O, {
            stretch: "",
            flat: "",
            "no-caps": "",
            icon: "fas fa-globe",
            label: t.value,
            "aria-label": "Language",
            onClick: i[0] || (i[0] = r => a("open-languages"))
        }, null, 8, ["label"]))
    }
}
  , Ci = {
    style: {
        "font-size": "1em",
        "line-height": "normal",
        margin: "0",
        "font-weight": "400"
    }
}
  , ki = {
    class: "toolbar"
}
  , xi = be({
    __name: "AppToolbar",
    emits: ["reset-wheel", "open-wheel", "save-wheel", "share-wheel", "customize-wheel", "link-sheet", "open-account-dialog", "open-languages", "open-preferences-dialog"],
    setup(e, {emit: s}) {
        const {t: l} = _e()
          , a = ft()
          , t = Al()
          , n = gl()
          , i = Oe()
          , r = s
          // edit
          , f = "wheelofnames.com" // window.location.host
          , c = h( () => a.fullscreen.isActive)
          , d = h( () => i.wheelIsBusy)
          , g = h( () => i.sheetLinked)
          , p = h( () => !c.value && !g.value)
          , y = h( () => !g.value)
          , x = h( () => !c.value)
          , w = h( () => !c.value)
          , T = h( () => !c.value)
          , I = h( () => !c.value)
          , S = h( () => !c.value && g.value)
          , C = h( () => !c.value)
          , D = h( () => !c.value)
          , R = h( () => jn(navigator.userAgent, t.version));
        function P() {
            a.fullscreen.isActive ? J("Wheel", "ExitFullscreen") : J("Wheel", "EnterFullscreen"),
            a.fullscreen.toggle()
        }
        function W() {
            r("save-wheel")
        }
        function U() {
            r("reset-wheel")
        }
        return (H, $) => (V(),
        X(To, {
            class: "q-px-none"
        }, {
            default: u( () => [o(O, {
                stretch: "",
                flat: "",
                "no-caps": "",
                to: {
                    name: "home"
                },
                color: "white"
            }, {
                default: u( () => [o(Lo, {
                    class: "flex no-wrap items-center gap-sm"
                }, {
                    default: u( () => [o(At, {
                        class: "desktop"
                    }, {
                        default: u( () => $[16] || ($[16] = [m("img", {
                            src: "/images/logo-dark-background-38.png",
                            alt: "logo",
                            width: "38",
                            height: "38",
                            loading: "lazy"
                        }, null, -1)])),
                        _: 1,
                        __: [16]
                    }), m("h1", Ci, E(v(f)), 1)]),
                    _: 1
                })]),
                _: 1
            }), o(Ct), m("div", ki, [ue(o(O, {
                stretch: "",
                flat: "",
                "no-caps": "",
                disable: d.value,
                icon: "fas fa-palette",
                label: v(l)("common.Customize"),
                "aria-label": "Customize",
                onClick: $[0] || ($[0] = M => r("customize-wheel"))
            }, null, 8, ["disable", "label"]), [[We, I.value]]), ue(o(O, {
                stretch: "",
                flat: "",
                "no-caps": "",
                disable: d.value,
                icon: "fas fa-file",
                label: v(l)("toolbar.New"),
                "aria-label": "New",
                onClick: U
            }, null, 8, ["disable", "label"]), [[We, p.value]]), ue(o(O, {
                stretch: "",
                flat: "",
                "no-caps": "",
                disable: d.value,
                icon: "fa fa-folder-open",
                label: c.value ? "" : v(l)("common.Open"),
                "aria-label": "Open",
                onClick: $[1] || ($[1] = M => r("open-wheel", M))
            }, {
                default: u( () => [c.value ? (V(),
                X(Vt, {
                    key: 0
                }, {
                    default: u( () => [Q(E(v(l)("common.Open")), 1)]),
                    _: 1
                })) : ye("", !0)]),
                _: 1
            }, 8, ["disable", "label"]), [[We, y.value]]), ue(o(O, {
                stretch: "",
                flat: "",
                "no-caps": "",
                disable: d.value || v(n).readOnlyMode,
                icon: "fa fa-save",
                label: v(l)("common.Save"),
                "aria-label": "Save",
                onClick: W
            }, null, 8, ["disable", "label"]), [[We, x.value]]), ue(o(O, {
                stretch: "",
                flat: "",
                "no-caps": "",
                disable: d.value || v(n).readOnlyMode,
                icon: "fa fa-share-alt",
                label: v(l)("toolbar.Share"),
                "aria-label": "Share",
                onClick: $[2] || ($[2] = M => r("share-wheel"))
            }, null, 8, ["disable", "label"]), [[We, w.value]]), ue(o(O, {
                stretch: "",
                flat: "",
                "no-caps": "",
                disable: d.value,
                color: "white",
                icon: "fa fa-search",
                label: v(l)("toolbar.Gallery"),
                "aria-label": "Gallery",
                to: {
                    name: "gallery"
                }
            }, null, 8, ["disable", "label"]), [[We, T.value]]), o(O, {
                stretch: "",
                flat: "",
                "no-caps": "",
                disable: d.value,
                "aria-label": "Fullscreen",
                onClick: P,
                icon: c.value ? "fa fa-compress" : "fa fa-expand"
            }, {
                default: u( () => [c.value ? (V(),
                X(Vt, {
                    key: 0
                }, {
                    default: u( () => [Q(E(v(l)("toolbar.Exit fullscreen")), 1)]),
                    _: 1
                })) : ye("", !0), c.value ? ye("", !0) : (V(),
                X(Vt, {
                    key: 1
                }, {
                    default: u( () => [Q(E(v(l)("toolbar.Fullscreen")), 1)]),
                    _: 1
                }))]),
                _: 1
            }, 8, ["disable", "icon"]), ue(o(O, {
                stretch: "",
                flat: "",
                "no-caps": "",
                disable: d.value,
                icon: "fa fa-unlink",
                label: v(l)("toolbar.Unlink Google Spreadsheet"),
                "aria-label": "Unlink Google Spreadsheet",
                onClick: v(i).unlinkSheet
            }, null, 8, ["disable", "label", "onClick"]), [[We, S.value]]), ue(o(St, {
                stretch: "",
                flat: "",
                "no-caps": "",
                disable: d.value,
                "aria-label": "More",
                label: v(l)("toolbar.More")
            }, {
                default: u( () => [o(Mt, null, {
                    default: u( () => [o(we, {
                        href: R.value,
                        style: {
                            color: "unset"
                        }
                    }, {
                        default: u( () => [o(ne, {
                            side: ""
                        }, {
                            default: u( () => [o(De, {
                                name: "fa fa-comment"
                            })]),
                            _: 1
                        }), o(ne, null, {
                            default: u( () => [o(tt, null, {
                                default: u( () => [Q(E(v(l)("toolbar.Feedback")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["href"]), o(we, {
                        to: "/faq",
                        style: {
                            color: "unset"
                        }
                    }, {
                        default: u( () => [o(ne, {
                            side: ""
                        }, {
                            default: u( () => [o(De, {
                                name: "fa fa-question-circle"
                            })]),
                            _: 1
                        }), o(ne, null, {
                            default: u( () => [o(tt, null, {
                                default: u( () => [Q(E(v(l)("toolbar.FAQ")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    }), o(rl), ue((V(),
                    X(we, {
                        clickable: "",
                        onClick: $[3] || ($[3] = M => r("link-sheet"))
                    }, {
                        default: u( () => [o(ne, {
                            side: ""
                        }, {
                            default: u( () => [o(De, {
                                name: "fa-solid fa-file-arrow-up"
                            })]),
                            _: 1
                        }), o(ne, null, {
                            default: u( () => [o(tt, null, {
                                default: u( () => [Q(E(v(l)("common.Import Google Spreadsheet")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    })), [[Xe]]), ue((V(),
                    X(we, {
                        clickable: "",
                        onClick: $[4] || ($[4] = M => r("open-account-dialog"))
                    }, {
                        default: u( () => [o(ne, {
                            side: ""
                        }, {
                            default: u( () => [o(De, {
                                name: "fas fa-user-alt"
                            })]),
                            _: 1
                        }), o(ne, null, {
                            default: u( () => [o(tt, null, {
                                default: u( () => [Q(E(v(l)("common.My account")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    })), [[Xe]]), ue((V(),
                    X(we, {
                        clickable: "",
                        onClick: $[5] || ($[5] = M => r("open-preferences-dialog"))
                    }, {
                        default: u( () => [o(ne, {
                            side: ""
                        }, {
                            default: u( () => [o(De, {
                                name: "fas fa-cog"
                            })]),
                            _: 1
                        }), o(ne, null, {
                            default: u( () => [Q(E(v(l)("preferences.Preferences")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })), [[Xe]])]),
                    _: 1
                })]),
                _: 1
            }, 8, ["disable", "label"]), [[We, C.value]]), ue(o(Si, {
                disable: d.value,
                onOpenLanguages: $[6] || ($[6] = M => r("open-languages"))
            }, null, 8, ["disable"]), [[We, D.value]])]), o(O, {
                class: "hamburger",
                round: "",
                unelevated: "",
                color: "primary",
                icon: "fas fa-bars"
            }, {
                default: u( () => [o($l, null, {
                    default: u( () => [o(Mt, null, {
                        default: u( () => [ue((V(),
                        X(we, {
                            clickable: "",
                            onClick: $[7] || ($[7] = M => r("customize-wheel"))
                        }, {
                            default: u( () => [o(ne, {
                                side: ""
                            }, {
                                default: u( () => [o(De, {
                                    name: "fas fa-palette"
                                })]),
                                _: 1
                            }), o(ne, null, {
                                default: u( () => [Q(E(v(l)("common.Customize")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        })), [[Xe]]), ue((V(),
                        X(we, {
                            clickable: "",
                            onClick: $[8] || ($[8] = M => r("reset-wheel"))
                        }, {
                            default: u( () => [o(ne, {
                                side: ""
                            }, {
                                default: u( () => [o(De, {
                                    name: "fas fa-file"
                                })]),
                                _: 1
                            }), o(ne, null, {
                                default: u( () => [Q(E(v(l)("toolbar.New")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        })), [[Xe]]), ue((V(),
                        X(we, {
                            clickable: "",
                            onClick: $[9] || ($[9] = M => r("open-wheel", M))
                        }, {
                            default: u( () => [o(ne, {
                                side: ""
                            }, {
                                default: u( () => [o(De, {
                                    name: "fa fa-folder-open"
                                })]),
                                _: 1
                            }), o(ne, null, {
                                default: u( () => [Q(E(v(l)("common.Open")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        })), [[Xe]]), ue((V(),
                        X(we, {
                            clickable: "",
                            disable: v(n).readOnlyMode,
                            onClick: $[10] || ($[10] = M => r("save-wheel"))
                        }, {
                            default: u( () => [o(ne, {
                                side: ""
                            }, {
                                default: u( () => [o(De, {
                                    name: "fa fa-save"
                                })]),
                                _: 1
                            }), o(ne, null, {
                                default: u( () => [Q(E(v(l)("common.Save")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        }, 8, ["disable"])), [[Xe]]), ue((V(),
                        X(we, {
                            clickable: "",
                            disable: v(n).readOnlyMode,
                            onClick: $[11] || ($[11] = M => r("share-wheel"))
                        }, {
                            default: u( () => [o(ne, {
                                side: ""
                            }, {
                                default: u( () => [o(De, {
                                    name: "fa fa-share-alt"
                                })]),
                                _: 1
                            }), o(ne, null, {
                                default: u( () => [Q(E(v(l)("toolbar.Share")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        }, 8, ["disable"])), [[Xe]]), o(we, {
                            to: {
                                name: "gallery"
                            },
                            style: {
                                color: "unset"
                            }
                        }, {
                            default: u( () => [o(ne, {
                                side: ""
                            }, {
                                default: u( () => [o(De, {
                                    name: "fa fa-search"
                                })]),
                                _: 1
                            }), o(ne, null, {
                                default: u( () => [Q(E(v(l)("toolbar.Gallery")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        }), ue((V(),
                        X(we, {
                            clickable: "",
                            onClick: P
                        }, {
                            default: u( () => [o(ne, {
                                side: ""
                            }, {
                                default: u( () => [o(De, {
                                    name: c.value ? "fa fa-compress" : "fa fa-expand"
                                }, null, 8, ["name"])]),
                                _: 1
                            }), c.value ? ye("", !0) : (V(),
                            X(ne, {
                                key: 0
                            }, {
                                default: u( () => [Q(E(v(l)("toolbar.Fullscreen")), 1)]),
                                _: 1
                            })), c.value ? (V(),
                            X(ne, {
                                key: 1
                            }, {
                                default: u( () => [Q(E(v(l)("toolbar.Exit fullscreen")), 1)]),
                                _: 1
                            })) : ye("", !0)]),
                            _: 1
                        })), [[Xe]]), ue((V(),
                        X(we, {
                            clickable: "",
                            onClick: $[12] || ($[12] = M => r("open-preferences-dialog"))
                        }, {
                            default: u( () => [o(ne, {
                                side: ""
                            }, {
                                default: u( () => [o(De, {
                                    name: "fas fa-cog"
                                })]),
                                _: 1
                            }), o(ne, null, {
                                default: u( () => [Q(E(v(l)("preferences.Preferences")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        })), [[Xe]]), o(we, {
                            clickable: "",
                            onClick: $[13] || ($[13] = M => r("open-languages"))
                        }, {
                            default: u( () => [o(ne, {
                                side: ""
                            }, {
                                default: u( () => [o(De, {
                                    name: "fas fa-globe"
                                })]),
                                _: 1
                            }), o(ne, null, {
                                default: u( () => [Q(E(v(l)("toolbar.Language")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        }), o(we, {
                            href: R.value,
                            style: {
                                color: "unset"
                            }
                        }, {
                            default: u( () => [o(ne, {
                                side: ""
                            }, {
                                default: u( () => [o(De, {
                                    name: "fa fa-comment"
                                })]),
                                _: 1
                            }), o(ne, null, {
                                default: u( () => [Q(E(v(l)("toolbar.Feedback")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        }, 8, ["href"]), o(we, {
                            to: "/faq",
                            style: {
                                color: "unset"
                            }
                        }, {
                            default: u( () => [o(ne, {
                                side: ""
                            }, {
                                default: u( () => [o(De, {
                                    name: "fa fa-question-circle"
                                })]),
                                _: 1
                            }), o(ne, null, {
                                default: u( () => [Q(E(v(l)("toolbar.FAQ")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        }), ue((V(),
                        X(we, {
                            clickable: "",
                            onClick: $[14] || ($[14] = M => r("link-sheet"))
                        }, {
                            default: u( () => [o(ne, {
                                side: ""
                            }, {
                                default: u( () => [o(De, {
                                    name: "fa-solid fa-file-arrow-up"
                                })]),
                                _: 1
                            }), o(ne, null, {
                                default: u( () => [o(tt, null, {
                                    default: u( () => [Q(E(v(l)("common.Import Google Spreadsheet")), 1)]),
                                    _: 1
                                })]),
                                _: 1
                            })]),
                            _: 1
                        })), [[Xe]]), ue((V(),
                        X(we, {
                            clickable: "",
                            onClick: $[15] || ($[15] = M => r("open-account-dialog"))
                        }, {
                            default: u( () => [o(ne, {
                                side: ""
                            }, {
                                default: u( () => [o(De, {
                                    name: "fas fa-user-alt"
                                })]),
                                _: 1
                            }), o(ne, null, {
                                default: u( () => [o(tt, null, {
                                    default: u( () => [Q(E(v(l)("common.My account")), 1)]),
                                    _: 1
                                })]),
                                _: 1
                            })]),
                            _: 1
                        })), [[Xe]])]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }))
    }
})
  , Di = st(xi, [["__scopeId", "data-v-580d1054"]])
  , Ai = {
    class: "text-h6"
}
  , Vi = {
    class: "flex gap items-center justify-center"
}
  , Ei = ["src"]
  , $i = be({
    __name: "WinnerDialog",
    setup(e, {expose: s}) {
        const {t: l} = _e()
          , a = Oe()
          , t = F(!1)
          , n = F({})
          , i = h( () => a.wheelConfig)
          , r = h( () => n.value?.message || i.value.winnerMessage || l("common.We have a winner!"))
          , f = h( () => i.value.entries.findIndex(R => R.id === n.value?.id))
          , c = h( () => {
            if (i.value.type === "color") {
                const R = n.value?.color || i.value.getEntryColor(f.value);
                return {
                    backgroundColor: R,
                    color: ul(R)
                }
            }
        }
        )
          , d = h( () => i.value.displayRemoveButton && !i.value.autoRemoveWinner)
          , g = h( () => {
            const R = Hn(i.value.getTexts(), n.value?.text);
            return i.value.displayRemoveButton && !i.value.autoRemoveWinner && R > 1
        }
        )
          , p = h( () => i.value.isAdvanced && i.value.displayHideButton && !i.value.autoRemoveWinner);
        ll( () => addEventListener("message", D)),
        Ka( () => removeEventListener("message", D));
        function y(R) {
            n.value = R,
            t.value = !0,
            T()
        }
        function x() {
            t.value = !1
        }
        const w = F(null);
        function T() {
            ht( () => {
                setTimeout( () => {
                    w && w.value.$el.focus()
                }
                , 100)
            }
            )
        }
        function I() {
            i.value.playClickWhenWinnerRemoved && Ml(i.value.afterSpinSoundVolume),
            a.removeEntry(n.value),
            $t(l("app.Removed", {
                name: n.value?.text
            })),
            x()
        }
        function S() {
            i.value.playClickWhenWinnerRemoved && Ml(i.value.afterSpinSoundVolume),
            a.removeEntryAll(n.value),
            $t(l("app.Removed", {
                name: n.value?.text
            })),
            x()
        }
        function C() {
            i.value.playClickWhenWinnerRemoved && Ml(i.value.afterSpinSoundVolume),
            a.hideEntry(n.value),
            x()
        }
        function D(R) {
            t.value && (R.data.name === "closeWinnerDialog" && x(),
            R.data.name === "removeWinner" && I(),
            R.data.name === "removeWinnerAll" && S(),
            R.data.name === "hideWinner" && C())
        }
        return s({
            show: y
        }),
        (R, P) => (V(),
        X(Ye, {
            modelValue: t.value,
            "onUpdate:modelValue": P[1] || (P[1] = W => t.value = W)
        }, {
            default: u( () => [o(at, {
                class: "winner-dialog"
            }, {
                default: u( () => [o(Ae, {
                    class: "flex gap justify-between",
                    style: Zt(c.value)
                }, {
                    default: u( () => [m("div", Ai, E(r.value), 1), o(qt)]),
                    _: 1
                }, 8, ["style"]), o(Ae, null, {
                    default: u( () => [m("div", Vi, [n.value.image ? (V(),
                    Z("img", {
                        key: 0,
                        src: n.value.image,
                        alt: "",
                        style: {
                            "max-height": "200px",
                            "max-width": "100%",
                            "vertical-align": "middle"
                        }
                    }, null, 8, Ei)) : ye("", !0), o(Mo, {
                        text: n.value.text || ""
                    }, null, 8, ["text"])])]),
                    _: 1
                }), o(dt, {
                    align: "right"
                }, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(l)("common.Close"),
                        onClick: P[0] || (P[0] = W => t.value = !1)
                    }, null, 8, ["label"]), d.value ? (V(),
                    X(O, {
                        key: 0,
                        ref_key: "removeButton",
                        ref: w,
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(l)("winnerdialog.Remove"),
                        onClick: I
                    }, null, 8, ["label"])) : ye("", !0), g.value ? (V(),
                    X(O, {
                        key: 1,
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(l)("winnerdialog.Remove all instances"),
                        onClick: S
                    }, null, 8, ["label"])) : ye("", !0), p.value ? (V(),
                    X(O, {
                        key: 2,
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(l)("winnerdialog.Hide"),
                        onClick: C
                    }, null, 8, ["label"])) : ye("", !0)]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , Bi = st($i, [["__scopeId", "data-v-987341d8"]])
  , Ti = it({
    name: "QField",
    inheritAttrs: !1,
    props: {
        ...ta,
        tag: {
            type: String,
            default: "label"
        }
    },
    emits: ea,
    setup() {
        return la(aa({
            tagProp: !0
        }))
    }
});
let cl = !1;
{
    const e = document.createElement("div");
    e.setAttribute("dir", "rtl"),
    Object.assign(e.style, {
        width: "1px",
        height: "1px",
        overflow: "auto"
    });
    const s = document.createElement("div");
    Object.assign(s.style, {
        width: "1000px",
        height: "1px"
    }),
    document.body.appendChild(e),
    e.appendChild(s),
    e.scrollLeft = -1e3,
    cl = e.scrollLeft >= 0,
    e.remove()
}
const bt = 1e3
  , Ii = ["start", "center", "end", "start-force", "center-force", "end-force"]
  , Sn = Array.prototype.filter
  , qi = window.getComputedStyle(document.body).overflowAnchor === void 0 ? ia : function(e, s) {
    e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame),
    e._qOverflowAnimationFrame = requestAnimationFrame( () => {
        if (e === null)
            return;
        e._qOverflowAnimationFrame = void 0;
        const l = e.children || [];
        Sn.call(l, t => t.dataset && t.dataset.qVsAnchor !== void 0).forEach(t => {
            delete t.dataset.qVsAnchor
        }
        );
        const a = l[s];
        a?.dataset && (a.dataset.qVsAnchor = "")
    }
    ))
}
;
function Jt(e, s) {
    return e + s
}
function Ul(e, s, l, a, t, n, i, r) {
    const f = e === window ? document.scrollingElement || document.documentElement : e
      , c = t === !0 ? "offsetWidth" : "offsetHeight"
      , d = {
        scrollStart: 0,
        scrollViewSize: -i - r,
        scrollMaxSize: 0,
        offsetStart: -i,
        offsetEnd: -r
    };
    if (t === !0 ? (e === window ? (d.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0,
    d.scrollViewSize += document.documentElement.clientWidth) : (d.scrollStart = f.scrollLeft,
    d.scrollViewSize += f.clientWidth),
    d.scrollMaxSize = f.scrollWidth,
    n === !0 && (d.scrollStart = (cl === !0 ? d.scrollMaxSize - d.scrollViewSize : 0) - d.scrollStart)) : (e === window ? (d.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0,
    d.scrollViewSize += document.documentElement.clientHeight) : (d.scrollStart = f.scrollTop,
    d.scrollViewSize += f.clientHeight),
    d.scrollMaxSize = f.scrollHeight),
    l !== null)
        for (let g = l.previousElementSibling; g !== null; g = g.previousElementSibling)
            g.classList.contains("q-virtual-scroll--skip") === !1 && (d.offsetStart += g[c]);
    if (a !== null)
        for (let g = a.nextElementSibling; g !== null; g = g.nextElementSibling)
            g.classList.contains("q-virtual-scroll--skip") === !1 && (d.offsetEnd += g[c]);
    if (s !== e) {
        const g = f.getBoundingClientRect()
          , p = s.getBoundingClientRect();
        t === !0 ? (d.offsetStart += p.left - g.left,
        d.offsetEnd -= p.width) : (d.offsetStart += p.top - g.top,
        d.offsetEnd -= p.height),
        e !== window && (d.offsetStart += d.scrollStart),
        d.offsetEnd += d.scrollMaxSize - d.offsetStart
    }
    return d
}
function Ea(e, s, l, a) {
    s === "end" && (s = (e === window ? document.body : e)[l === !0 ? "scrollWidth" : "scrollHeight"]),
    e === window ? l === !0 ? (a === !0 && (s = (cl === !0 ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - s),
    window.scrollTo(s, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, s) : l === !0 ? (a === !0 && (s = (cl === !0 ? e.scrollWidth - e.offsetWidth : 0) - s),
    e.scrollLeft = s) : e.scrollTop = s
}
function il(e, s, l, a) {
    if (l >= a)
        return 0;
    const t = s.length
      , n = Math.floor(l / bt)
      , i = Math.floor((a - 1) / bt) + 1;
    let r = e.slice(n, i).reduce(Jt, 0);
    return l % bt !== 0 && (r -= s.slice(n * bt, l).reduce(Jt, 0)),
    a % bt !== 0 && a !== t && (r -= s.slice(a, i * bt).reduce(Jt, 0)),
    r
}
const Wi = {
    virtualScrollSliceSize: {
        type: [Number, String],
        default: 10
    },
    virtualScrollSliceRatioBefore: {
        type: [Number, String],
        default: 1
    },
    virtualScrollSliceRatioAfter: {
        type: [Number, String],
        default: 1
    },
    virtualScrollItemSize: {
        type: [Number, String],
        default: 24
    },
    virtualScrollStickySizeStart: {
        type: [Number, String],
        default: 0
    },
    virtualScrollStickySizeEnd: {
        type: [Number, String],
        default: 0
    },
    tableColspan: [Number, String]
}
  , $a = {
    virtualScrollHorizontal: Boolean,
    onVirtualScroll: Function,
    ...Wi
};
function Pi({virtualScrollLength: e, getVirtualScrollTarget: s, getVirtualScrollEl: l, virtualScrollItemSizeComputed: a}) {
    const t = ct()
      , {props: n, emit: i, proxy: r} = t
      , {$q: f} = r;
    let c, d, g, p = [], y;
    const x = F(0)
      , w = F(0)
      , T = F({})
      , I = F(null)
      , S = F(null)
      , C = F(null)
      , D = F({
        from: 0,
        to: 0
    })
      , R = h( () => n.tableColspan !== void 0 ? n.tableColspan : 100);
    a === void 0 && (a = h( () => n.virtualScrollItemSize));
    const P = h( () => a.value + ";" + n.virtualScrollHorizontal)
      , W = h( () => P.value + ";" + n.virtualScrollSliceRatioBefore + ";" + n.virtualScrollSliceRatioAfter);
    he(W, () => {
        z()
    }
    ),
    he(P, U);
    function U() {
        k(d, !0)
    }
    function H(B) {
        k(B === void 0 ? d : B)
    }
    function $(B, G) {
        const ce = s();
        if (ce == null || ce.nodeType === 8)
            return;
        const Ve = Ul(ce, l(), I.value, S.value, n.virtualScrollHorizontal, f.lang.rtl, n.virtualScrollStickySizeStart, n.virtualScrollStickySizeEnd);
        g !== Ve.scrollViewSize && z(Ve.scrollViewSize),
        Y(ce, Ve, Math.min(e.value - 1, Math.max(0, parseInt(B, 10) || 0)), 0, Ii.indexOf(G) !== -1 ? G : d !== -1 && B > d ? "end" : "start")
    }
    function M() {
        const B = s();
        if (B == null || B.nodeType === 8)
            return;
        const G = Ul(B, l(), I.value, S.value, n.virtualScrollHorizontal, f.lang.rtl, n.virtualScrollStickySizeStart, n.virtualScrollStickySizeEnd)
          , ce = e.value - 1
          , Ve = G.scrollMaxSize - G.offsetStart - G.offsetEnd - w.value;
        if (c === G.scrollStart)
            return;
        if (G.scrollMaxSize <= 0) {
            Y(B, G, 0, 0);
            return
        }
        g !== G.scrollViewSize && z(G.scrollViewSize),
        ee(D.value.from);
        const $e = Math.floor(G.scrollMaxSize - Math.max(G.scrollViewSize, G.offsetEnd) - Math.min(y[ce], G.scrollViewSize / 2));
        if ($e > 0 && Math.ceil(G.scrollStart) >= $e) {
            Y(B, G, ce, G.scrollMaxSize - G.offsetEnd - p.reduce(Jt, 0));
            return
        }
        let se = 0
          , pe = G.scrollStart - G.offsetStart
          , Te = pe;
        if (pe <= Ve && pe + G.scrollViewSize >= x.value)
            pe -= x.value,
            se = D.value.from,
            Te = pe;
        else
            for (let ve = 0; pe >= p[ve] && se < ce; ve++)
                pe -= p[ve],
                se += bt;
        for (; pe > 0 && se < ce; )
            pe -= y[se],
            pe > -G.scrollViewSize ? (se++,
            Te = pe) : Te = y[se] + pe;
        Y(B, G, se, Te)
    }
    function Y(B, G, ce, Ve, $e) {
        const se = typeof $e == "string" && $e.indexOf("-force") !== -1
          , pe = se === !0 ? $e.replace("-force", "") : $e
          , Te = pe !== void 0 ? pe : "start";
        let ve = Math.max(0, ce - T.value[Te])
          , je = ve + T.value.total;
        je > e.value && (je = e.value,
        ve = Math.max(0, je - T.value.total)),
        c = G.scrollStart;
        const Je = ve !== D.value.from || je !== D.value.to;
        if (Je === !1 && pe === void 0) {
            re(ce);
            return
        }
        const {activeElement: q} = document
          , oe = C.value;
        Je === !0 && oe !== null && oe !== q && oe.contains(q) === !0 && (oe.addEventListener("focusout", b),
        setTimeout( () => {
            oe?.removeEventListener("focusout", b)
        }
        )),
        qi(oe, ce - ve);
        const fe = pe !== void 0 ? y.slice(ve, ce).reduce(Jt, 0) : 0;
        if (Je === !0) {
            const me = je >= D.value.from && ve <= D.value.to ? D.value.to : je;
            D.value = {
                from: ve,
                to: me
            },
            x.value = il(p, y, 0, ve),
            w.value = il(p, y, je, e.value),
            requestAnimationFrame( () => {
                D.value.to !== je && c === G.scrollStart && (D.value = {
                    from: D.value.from,
                    to: je
                },
                w.value = il(p, y, je, e.value))
            }
            )
        }
        requestAnimationFrame( () => {
            if (c !== G.scrollStart)
                return;
            Je === !0 && ee(ve);
            const me = y.slice(ve, ce).reduce(Jt, 0)
              , Be = me + G.offsetStart + x.value
              , ge = Be + y[ce];
            let Me = Be + Ve;
            if (pe !== void 0) {
                const Ie = me - fe
                  , Ze = G.scrollStart + Ie;
                Me = se !== !0 && Ze < Be && ge < Ze + G.scrollViewSize ? Ze : pe === "end" ? ge - G.scrollViewSize : Be - (pe === "start" ? 0 : Math.round((G.scrollViewSize - y[ce]) / 2))
            }
            c = Me,
            Ea(B, Me, n.virtualScrollHorizontal, f.lang.rtl),
            re(ce)
        }
        )
    }
    function ee(B) {
        const G = C.value;
        if (G) {
            const ce = Sn.call(G.children, ve => ve.classList && ve.classList.contains("q-virtual-scroll--skip") === !1)
              , Ve = ce.length
              , $e = n.virtualScrollHorizontal === !0 ? ve => ve.getBoundingClientRect().width : ve => ve.offsetHeight;
            let se = B, pe, Te;
            for (let ve = 0; ve < Ve; ) {
                for (pe = $e(ce[ve]),
                ve++; ve < Ve && ce[ve].classList.contains("q-virtual-scroll--with-prev") === !0; )
                    pe += $e(ce[ve]),
                    ve++;
                Te = pe - y[se],
                Te !== 0 && (y[se] += Te,
                p[Math.floor(se / bt)] += Te),
                se++
            }
        }
    }
    function b() {
        C.value?.focus()
    }
    function k(B, G) {
        const ce = 1 * a.value;
        (G === !0 || Array.isArray(y) === !1) && (y = []);
        const Ve = y.length;
        y.length = e.value;
        for (let se = e.value - 1; se >= Ve; se--)
            y[se] = ce;
        const $e = Math.floor((e.value - 1) / bt);
        p = [];
        for (let se = 0; se <= $e; se++) {
            let pe = 0;
            const Te = Math.min((se + 1) * bt, e.value);
            for (let ve = se * bt; ve < Te; ve++)
                pe += y[ve];
            p.push(pe)
        }
        d = -1,
        c = void 0,
        x.value = il(p, y, 0, D.value.from),
        w.value = il(p, y, D.value.to, e.value),
        B >= 0 ? (ee(D.value.from),
        ht( () => {
            $(B)
        }
        )) : ke()
    }
    function z(B) {
        if (B === void 0 && typeof window < "u") {
            const pe = s();
            pe != null && pe.nodeType !== 8 && (B = Ul(pe, l(), I.value, S.value, n.virtualScrollHorizontal, f.lang.rtl, n.virtualScrollStickySizeStart, n.virtualScrollStickySizeEnd).scrollViewSize)
        }
        g = B;
        const G = parseFloat(n.virtualScrollSliceRatioBefore) || 0
          , ce = parseFloat(n.virtualScrollSliceRatioAfter) || 0
          , Ve = 1 + G + ce
          , $e = B === void 0 || B <= 0 ? 1 : Math.ceil(B / a.value)
          , se = Math.max(1, $e, Math.ceil((n.virtualScrollSliceSize > 0 ? n.virtualScrollSliceSize : 10) / Ve));
        T.value = {
            total: Math.ceil(se * Ve),
            start: Math.ceil(se * G),
            center: Math.ceil(se * (.5 + G)),
            end: Math.ceil(se * (1 + G)),
            view: $e
        }
    }
    function L(B, G) {
        const ce = n.virtualScrollHorizontal === !0 ? "width" : "height"
          , Ve = {
            ["--q-virtual-scroll-item-" + ce]: a.value + "px"
        };
        return [B === "tbody" ? A(B, {
            class: "q-virtual-scroll__padding",
            key: "before",
            ref: I
        }, [A("tr", [A("td", {
            style: {
                [ce]: `${x.value}px`,
                ...Ve
            },
            colspan: R.value
        })])]) : A(B, {
            class: "q-virtual-scroll__padding",
            key: "before",
            ref: I,
            style: {
                [ce]: `${x.value}px`,
                ...Ve
            }
        }), A(B, {
            class: "q-virtual-scroll__content",
            key: "content",
            ref: C,
            tabindex: -1
        }, G.flat()), B === "tbody" ? A(B, {
            class: "q-virtual-scroll__padding",
            key: "after",
            ref: S
        }, [A("tr", [A("td", {
            style: {
                [ce]: `${w.value}px`,
                ...Ve
            },
            colspan: R.value
        })])]) : A(B, {
            class: "q-virtual-scroll__padding",
            key: "after",
            ref: S,
            style: {
                [ce]: `${w.value}px`,
                ...Ve
            }
        })]
    }
    function re(B) {
        d !== B && (n.onVirtualScroll !== void 0 && i("virtualScroll", {
            index: B,
            from: D.value.from,
            to: D.value.to - 1,
            direction: B < d ? "decrease" : "increase",
            ref: r
        }),
        d = B)
    }
    z();
    const ke = Ga(M, f.platform.is.ios === !0 ? 120 : 35);
    Qn( () => {
        z()
    }
    );
    let Le = !1;
    return na( () => {
        Le = !0
    }
    ),
    oa( () => {
        if (Le !== !0)
            return;
        const B = s();
        c !== void 0 && B !== void 0 && B !== null && B.nodeType !== 8 ? Ea(B, c, n.virtualScrollHorizontal, f.lang.rtl) : $(d)
    }
    ),
    Tt( () => {
        ke.cancel()
    }
    ),
    Object.assign(r, {
        scrollTo: $,
        reset: U,
        refresh: H
    }),
    {
        virtualScrollSliceRange: D,
        virtualScrollSliceSizeComputed: T,
        setVirtualScrollSize: z,
        onVirtualScrollEvt: ke,
        localResetVirtualScroll: k,
        padVirtualScroll: L,
        scrollTo: $,
        reset: U,
        refresh: H
    }
}
const Ba = ["B", "KB", "MB", "GB", "TB", "PB"];
function zi(e, s=1) {
    let l = 0;
    for (; parseInt(e, 10) >= 1024 && l < Ba.length - 1; )
        e /= 1024,
        ++l;
    return `${e.toFixed(s)}${Ba[l]}`
}
function wt(e, s, l) {
    return l <= s ? s : Math.min(l, Math.max(s, e))
}
function Ta(e, s, l) {
    if (l <= s)
        return s;
    const a = l - s + 1;
    let t = s + (e - s) % a;
    return t < s && (t = a + t),
    t === 0 ? 0 : t
}
const Ia = e => ["add", "add-unique", "toggle"].includes(e)
  , Li = ".*+?^${}()|[]\\"
  , Mi = Object.keys(ta);
function Ol(e, s) {
    if (typeof e == "function")
        return e;
    const l = e !== void 0 ? e : s;
    return a => a !== null && typeof a == "object" && l in a ? a[l] : a
}
const Ft = it({
    name: "QSelect",
    inheritAttrs: !1,
    props: {
        ...$a,
        ...Vl,
        ...ta,
        modelValue: {
            required: !0
        },
        multiple: Boolean,
        displayValue: [String, Number],
        displayValueHtml: Boolean,
        dropdownIcon: String,
        options: {
            type: Array,
            default: () => []
        },
        optionValue: [Function, String],
        optionLabel: [Function, String],
        optionDisable: [Function, String],
        hideSelected: Boolean,
        hideDropdownIcon: Boolean,
        fillInput: Boolean,
        maxValues: [Number, String],
        optionsDense: Boolean,
        optionsDark: {
            type: Boolean,
            default: null
        },
        optionsSelectedClass: String,
        optionsHtml: Boolean,
        optionsCover: Boolean,
        menuShrink: Boolean,
        menuAnchor: String,
        menuSelf: String,
        menuOffset: Array,
        popupContentClass: String,
        popupContentStyle: [String, Array, Object],
        popupNoRouteDismiss: Boolean,
        useInput: Boolean,
        useChips: Boolean,
        newValueMode: {
            type: String,
            validator: Ia
        },
        mapOptions: Boolean,
        emitValue: Boolean,
        disableTabSelection: Boolean,
        inputDebounce: {
            type: [Number, String],
            default: 500
        },
        inputClass: [Array, String, Object],
        inputStyle: [Array, String, Object],
        tabindex: {
            type: [String, Number],
            default: 0
        },
        autocomplete: String,
        transitionShow: {},
        transitionHide: {},
        transitionDuration: {},
        behavior: {
            type: String,
            validator: e => ["default", "menu", "dialog"].includes(e),
            default: "default"
        },
        virtualScrollItemSize: $a.virtualScrollItemSize.type,
        onNewValue: Function,
        onFilter: Function
    },
    emits: [...ea, "add", "remove", "inputValue", "keyup", "keypress", "keydown", "popupShow", "popupHide", "filterAbort"],
    setup(e, {slots: s, emit: l}) {
        const {proxy: a} = ct()
          , {$q: t} = a
          , n = F(!1)
          , i = F(!1)
          , r = F(-1)
          , f = F("")
          , c = F(!1)
          , d = F(!1);
        let g = null, p = null, y, x, w, T = null, I, S, C, D;
        const R = F(null)
          , P = F(null)
          , W = F(null)
          , U = F(null)
          , H = F(null)
          , $ = Ya(e)
          , M = Kn(ba)
          , Y = h( () => Array.isArray(e.options) ? e.options.length : 0)
          , ee = h( () => e.virtualScrollItemSize === void 0 ? e.optionsDense === !0 ? 24 : 48 : e.virtualScrollItemSize)
          , {virtualScrollSliceRange: b, virtualScrollSliceSizeComputed: k, localResetVirtualScroll: z, padVirtualScroll: L, onVirtualScrollEvt: re, scrollTo: ke, setVirtualScrollSize: Le} = Pi({
            virtualScrollLength: Y,
            getVirtualScrollTarget: En,
            getVirtualScrollEl: Ot,
            virtualScrollItemSizeComputed: ee
        })
          , B = aa()
          , G = h( () => {
            const _ = e.mapOptions === !0 && e.multiple !== !0
              , te = e.modelValue !== void 0 && (e.modelValue !== null || _ === !0) ? e.multiple === !0 && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
            if (e.mapOptions === !0 && Array.isArray(e.options) === !0) {
                const le = e.mapOptions === !0 && y !== void 0 ? y : []
                  , Ce = te.map(ze => N(ze, le));
                return e.modelValue === null && _ === !0 ? Ce.filter(ze => ze !== null) : Ce
            }
            return te
        }
        )
          , ce = h( () => {
            const _ = {};
            return Mi.forEach(te => {
                const le = e[te];
                le !== void 0 && (_[te] = le)
            }
            ),
            _
        }
        )
          , Ve = h( () => e.optionsDark === null ? B.isDark.value : e.optionsDark)
          , $e = h( () => yl(G.value))
          , se = h( () => {
            let _ = "q-field__input q-placeholder col";
            return e.hideSelected === !0 || G.value.length === 0 ? [_, e.inputClass] : (_ += " q-field__input--padding",
            e.inputClass === void 0 ? _ : [_, e.inputClass])
        }
        )
          , pe = h( () => (e.virtualScrollHorizontal === !0 ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : ""))
          , Te = h( () => Y.value === 0)
          , ve = h( () => G.value.map(_ => j.value(_)).join(", "))
          , je = h( () => e.displayValue !== void 0 ? e.displayValue : ve.value)
          , Je = h( () => e.optionsHtml === !0 ? () => !0 : _ => _?.html === !0)
          , q = h( () => e.displayValueHtml === !0 || e.displayValue === void 0 && (e.optionsHtml === !0 || G.value.some(Je.value)))
          , oe = h( () => B.focused.value === !0 ? e.tabindex : -1)
          , fe = h( () => {
            const _ = {
                tabindex: e.tabindex,
                role: "combobox",
                "aria-label": e.label,
                "aria-readonly": e.readonly === !0 ? "true" : "false",
                "aria-autocomplete": e.useInput === !0 ? "list" : "none",
                "aria-expanded": n.value === !0 ? "true" : "false",
                "aria-controls": `${B.targetUid.value}_lb`
            };
            return r.value >= 0 && (_["aria-activedescendant"] = `${B.targetUid.value}_${r.value}`),
            _
        }
        )
          , me = h( () => ({
            id: `${B.targetUid.value}_lb`,
            role: "listbox",
            "aria-multiselectable": e.multiple === !0 ? "true" : "false"
        }))
          , Be = h( () => G.value.map( (_, te) => ({
            index: te,
            opt: _,
            html: Je.value(_),
            selected: !0,
            removeAtIndex: xe,
            toggleOption: Qe,
            tabindex: oe.value
        })))
          , ge = h( () => {
            if (Y.value === 0)
                return [];
            const {from: _, to: te} = b.value;
            return e.options.slice(_, te).map( (le, Ce) => {
                const ze = ae.value(le) === !0
                  , qe = de(le) === !0
                  , ot = _ + Ce
                  , Ke = {
                    clickable: !0,
                    active: qe,
                    activeClass: Ze.value,
                    manualFocus: !0,
                    focused: !1,
                    disable: ze,
                    tabindex: -1,
                    dense: e.optionsDense,
                    dark: Ve.value,
                    role: "option",
                    "aria-selected": qe === !0 ? "true" : "false",
                    id: `${B.targetUid.value}_${ot}`,
                    onClick: () => {
                        Qe(le)
                    }
                };
                return ze !== !0 && (r.value === ot && (Ke.focused = !0),
                t.platform.is.desktop === !0 && (Ke.onMousemove = () => {
                    n.value === !0 && mt(ot)
                }
                )),
                {
                    index: ot,
                    opt: le,
                    html: Je.value(le),
                    label: j.value(le),
                    selected: Ke.active,
                    focused: Ke.focused,
                    toggleOption: Qe,
                    setOptionIndex: mt,
                    itemProps: Ke
                }
            }
            )
        }
        )
          , Me = h( () => e.dropdownIcon !== void 0 ? e.dropdownIcon : t.iconSet.arrow.dropdown)
          , Ie = h( () => e.optionsCover === !1 && e.outlined !== !0 && e.standout !== !0 && e.borderless !== !0 && e.rounded !== !0)
          , Ze = h( () => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : "")
          , Re = h( () => Ol(e.optionValue, "value"))
          , j = h( () => Ol(e.optionLabel, "label"))
          , ae = h( () => Ol(e.optionDisable, "disable"))
          , K = h( () => G.value.map(Re.value))
          , ie = h( () => {
            const _ = {
                onInput: ba,
                onChange: M,
                onKeydown: Ut,
                onKeyup: et,
                onKeypress: pt,
                onFocus: Se,
                onClick(te) {
                    x === !0 && nt(te)
                }
            };
            return _.onCompositionstart = _.onCompositionupdate = _.onCompositionend = M,
            _
        }
        );
        he(G, _ => {
            y = _,
            e.useInput === !0 && e.fillInput === !0 && e.multiple !== !0 && B.innerLoading.value !== !0 && (i.value !== !0 && n.value !== !0 || $e.value !== !0) && (w !== !0 && Ht(),
            (i.value === !0 || n.value === !0) && Rt(""))
        }
        , {
            immediate: !0
        }),
        he( () => e.fillInput, Ht),
        he(n, Bl),
        he(Y, On);
        function Ee(_) {
            return e.emitValue === !0 ? Re.value(_) : _
        }
        function Fe(_) {
            if (_ !== -1 && _ < G.value.length)
                if (e.multiple === !0) {
                    const te = e.modelValue.slice();
                    l("remove", {
                        index: _,
                        value: te.splice(_, 1)[0]
                    }),
                    l("update:modelValue", te)
                } else
                    l("update:modelValue", null)
        }
        function xe(_) {
            Fe(_),
            B.focus()
        }
        function He(_, te) {
            const le = Ee(_);
            if (e.multiple !== !0) {
                e.fillInput === !0 && nl(j.value(_), !0, !0),
                l("update:modelValue", le);
                return
            }
            if (G.value.length === 0) {
                l("add", {
                    index: 0,
                    value: le
                }),
                l("update:modelValue", e.multiple === !0 ? [le] : le);
                return
            }
            if (te === !0 && de(_) === !0 || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues)
                return;
            const Ce = e.modelValue.slice();
            l("add", {
                index: Ce.length,
                value: le
            }),
            Ce.push(le),
            l("update:modelValue", Ce)
        }
        function Qe(_, te) {
            if (B.editable.value !== !0 || _ === void 0 || ae.value(_) === !0)
                return;
            const le = Re.value(_);
            if (e.multiple !== !0) {
                te !== !0 && (nl(e.fillInput === !0 ? j.value(_) : "", !0, !0),
                Wt()),
                P.value?.focus(),
                (G.value.length === 0 || ol(Re.value(G.value[0]), le) !== !0) && l("update:modelValue", e.emitValue === !0 ? le : _);
                return
            }
            if ((x !== !0 || c.value === !0) && B.focus(),
            Se(),
            G.value.length === 0) {
                const qe = e.emitValue === !0 ? le : _;
                l("add", {
                    index: 0,
                    value: qe
                }),
                l("update:modelValue", e.multiple === !0 ? [qe] : qe);
                return
            }
            const Ce = e.modelValue.slice()
              , ze = K.value.findIndex(qe => ol(qe, le));
            if (ze !== -1)
                l("remove", {
                    index: ze,
                    value: Ce.splice(ze, 1)[0]
                });
            else {
                if (e.maxValues !== void 0 && Ce.length >= e.maxValues)
                    return;
                const qe = e.emitValue === !0 ? le : _;
                l("add", {
                    index: Ce.length,
                    value: qe
                }),
                Ce.push(qe)
            }
            l("update:modelValue", Ce)
        }
        function mt(_) {
            if (t.platform.is.desktop !== !0)
                return;
            const te = _ !== -1 && _ < Y.value ? _ : -1;
            r.value !== te && (r.value = te)
        }
        function kt(_=1, te) {
            if (n.value === !0) {
                let le = r.value;
                do
                    le = Ta(le + _, -1, Y.value - 1);
                while (le !== -1 && le !== r.value && ae.value(e.options[le]) === !0);
                r.value !== le && (mt(le),
                ke(le),
                te !== !0 && e.useInput === !0 && e.fillInput === !0 && pl(le >= 0 ? j.value(e.options[le]) : I, !0))
            }
        }
        function N(_, te) {
            const le = Ce => ol(Re.value(Ce), _);
            return e.options.find(le) || te.find(le) || _
        }
        function de(_) {
            const te = Re.value(_);
            return K.value.find(le => ol(le, te)) !== void 0
        }
        function Se(_) {
            e.useInput === !0 && P.value !== null && (_ === void 0 || P.value === _.target && _.target.value === ve.value) && P.value.select()
        }
        function Pe(_) {
            Ja(_, 27) === !0 && n.value === !0 && (nt(_),
            Wt(),
            Ht()),
            l("keyup", _)
        }
        function et(_) {
            const {value: te} = _.target;
            if (_.keyCode !== void 0) {
                Pe(_);
                return
            }
            if (_.target.value = "",
            g !== null && (clearTimeout(g),
            g = null),
            p !== null && (clearTimeout(p),
            p = null),
            Ht(),
            typeof te == "string" && te.length !== 0) {
                const le = te.toLocaleLowerCase()
                  , Ce = qe => {
                    const ot = e.options.find(Ke => String(qe.value(Ke)).toLocaleLowerCase() === le);
                    return ot === void 0 ? !1 : (G.value.indexOf(ot) === -1 ? Qe(ot) : Wt(),
                    !0)
                }
                  , ze = qe => {
                    Ce(Re) !== !0 && qe !== !0 && Ce(j) !== !0 && Rt(te, !0, () => ze(!0))
                }
                ;
                ze()
            } else
                B.clearValue(_)
        }
        function pt(_) {
            l("keypress", _)
        }
        function Ut(_) {
            if (l("keydown", _),
            Xa(_) === !0)
                return;
            const te = f.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0)
              , le = _.shiftKey !== !0 && e.disableTabSelection !== !0 && e.multiple !== !0 && (r.value !== -1 || te === !0);
            if (_.keyCode === 27) {
                Kt(_);
                return
            }
            if (_.keyCode === 9 && le === !1) {
                Nt();
                return
            }
            if (_.target === void 0 || _.target.id !== B.targetUid.value || B.editable.value !== !0)
                return;
            if (_.keyCode === 40 && B.innerLoading.value !== !0 && n.value === !1) {
                rt(_),
                jt();
                return
            }
            if (_.keyCode === 8 && (e.useChips === !0 || e.clearable === !0) && e.hideSelected !== !0 && f.value.length === 0) {
                e.multiple === !0 && Array.isArray(e.modelValue) === !0 ? Fe(e.modelValue.length - 1) : e.multiple !== !0 && e.modelValue !== null && l("update:modelValue", null);
                return
            }
            (_.keyCode === 35 || _.keyCode === 36) && (typeof f.value != "string" || f.value.length === 0) && (rt(_),
            r.value = -1,
            kt(_.keyCode === 36 ? 1 : -1, e.multiple)),
            (_.keyCode === 33 || _.keyCode === 34) && k.value !== void 0 && (rt(_),
            r.value = Math.max(-1, Math.min(Y.value, r.value + (_.keyCode === 33 ? -1 : 1) * k.value.view)),
            kt(_.keyCode === 33 ? 1 : -1, e.multiple)),
            (_.keyCode === 38 || _.keyCode === 40) && (rt(_),
            kt(_.keyCode === 38 ? -1 : 1, e.multiple));
            const Ce = Y.value;
            if ((C === void 0 || D < Date.now()) && (C = ""),
            Ce > 0 && e.useInput !== !0 && _.key !== void 0 && _.key.length === 1 && _.altKey === !1 && _.ctrlKey === !1 && _.metaKey === !1 && (_.keyCode !== 32 || C.length !== 0)) {
                n.value !== !0 && jt(_);
                const ze = _.key.toLocaleLowerCase()
                  , qe = C.length === 1 && C[0] === ze;
                D = Date.now() + 1500,
                qe === !1 && (rt(_),
                C += ze);
                const ot = new RegExp("^" + C.split("").map(Tl => Li.indexOf(Tl) !== -1 ? "\\" + Tl : Tl).join(".*"),"i");
                let Ke = r.value;
                if (qe === !0 || Ke < 0 || ot.test(j.value(e.options[Ke])) !== !0)
                    do
                        Ke = Ta(Ke + 1, -1, Ce - 1);
                    while (Ke !== r.value && (ae.value(e.options[Ke]) === !0 || ot.test(j.value(e.options[Ke])) !== !0));
                r.value !== Ke && ht( () => {
                    mt(Ke),
                    ke(Ke),
                    Ke >= 0 && e.useInput === !0 && e.fillInput === !0 && pl(j.value(e.options[Ke]), !0)
                }
                );
                return
            }
            if (!(_.keyCode !== 13 && (_.keyCode !== 32 || e.useInput === !0 || C !== "") && (_.keyCode !== 9 || le === !1))) {
                if (_.keyCode !== 9 && rt(_),
                r.value !== -1 && r.value < Ce) {
                    Qe(e.options[r.value]);
                    return
                }
                if (te === !0) {
                    const ze = (qe, ot) => {
                        if (ot) {
                            if (Ia(ot) !== !0)
                                return
                        } else
                            ot = e.newValueMode;
                        if (nl("", e.multiple !== !0, !0),
                        qe == null)
                            return;
                        (ot === "toggle" ? Qe : He)(qe, ot === "add-unique"),
                        e.multiple !== !0 && (P.value?.focus(),
                        Wt())
                    }
                    ;
                    if (e.onNewValue !== void 0 ? l("newValue", f.value, ze) : ze(f.value),
                    e.multiple !== !0)
                        return
                }
                n.value === !0 ? Nt() : B.innerLoading.value !== !0 && jt()
            }
        }
        function Ot() {
            return x === !0 ? H.value : W.value !== null && W.value.contentEl !== null ? W.value.contentEl : void 0
        }
        function En() {
            return Ot()
        }
        function $n() {
            return e.hideSelected === !0 ? [] : s["selected-item"] !== void 0 ? Be.value.map(_ => s["selected-item"](_)).slice() : s.selected !== void 0 ? [].concat(s.selected()) : e.useChips === !0 ? Be.value.map( (_, te) => A(_l, {
                key: "option-" + te,
                removable: B.editable.value === !0 && ae.value(_.opt) !== !0,
                dense: !0,
                textColor: e.color,
                tabindex: oe.value,
                onRemove() {
                    _.removeAtIndex(te)
                }
            }, () => A("span", {
                class: "ellipsis",
                [_.html === !0 ? "innerHTML" : "textContent"]: j.value(_.opt)
            }))) : [A("span", {
                class: "ellipsis",
                [q.value === !0 ? "innerHTML" : "textContent"]: je.value
            })]
        }
        function ha() {
            if (Te.value === !0)
                return s["no-option"] !== void 0 ? s["no-option"]({
                    inputValue: f.value
                }) : void 0;
            const _ = s.option !== void 0 ? s.option : le => A(we, {
                key: le.index,
                ...le.itemProps
            }, () => A(ne, () => A(tt, () => A("span", {
                [le.html === !0 ? "innerHTML" : "textContent"]: le.label
            }))));
            let te = L("div", ge.value.map(_));
            return s["before-options"] !== void 0 && (te = s["before-options"]().concat(te)),
            sa(s["after-options"], te)
        }
        function Bn(_, te) {
            const le = te === !0 ? {
                ...fe.value,
                ...B.splitAttrs.attributes.value
            } : void 0
              , Ce = {
                ref: te === !0 ? P : void 0,
                key: "i_t",
                class: se.value,
                style: e.inputStyle,
                value: f.value !== void 0 ? f.value : "",
                type: "search",
                ...le,
                id: te === !0 ? B.targetUid.value : void 0,
                maxlength: e.maxlength,
                autocomplete: e.autocomplete,
                "data-autofocus": _ === !0 || e.autofocus === !0 || void 0,
                disabled: e.disable === !0,
                readonly: e.readonly === !0,
                ...ie.value
            };
            return _ !== !0 && x === !0 && (Array.isArray(Ce.class) === !0 ? Ce.class = [...Ce.class, "no-pointer-events"] : Ce.class += " no-pointer-events"),
            A("input", Ce)
        }
        function ba(_) {
            g !== null && (clearTimeout(g),
            g = null),
            p !== null && (clearTimeout(p),
            p = null),
            !(_ && _.target && _.target.qComposing === !0) && (pl(_.target.value || ""),
            w = !0,
            I = f.value,
            B.focused.value !== !0 && (x !== !0 || c.value === !0) && B.focus(),
            e.onFilter !== void 0 && (g = setTimeout( () => {
                g = null,
                Rt(f.value)
            }
            , e.inputDebounce)))
        }
        function pl(_, te) {
            f.value !== _ && (f.value = _,
            te === !0 || e.inputDebounce === 0 || e.inputDebounce === "0" ? l("inputValue", _) : p = setTimeout( () => {
                p = null,
                l("inputValue", _)
            }
            , e.inputDebounce))
        }
        function nl(_, te, le) {
            w = le !== !0,
            e.useInput === !0 && (pl(_, !0),
            (te === !0 || le !== !0) && (I = _),
            te !== !0 && Rt(_))
        }
        function Rt(_, te, le) {
            if (e.onFilter === void 0 || te !== !0 && B.focused.value !== !0)
                return;
            B.innerLoading.value === !0 ? l("filterAbort") : (B.innerLoading.value = !0,
            d.value = !0),
            _ !== "" && e.multiple !== !0 && G.value.length !== 0 && w !== !0 && _ === j.value(G.value[0]) && (_ = "");
            const Ce = setTimeout( () => {
                n.value === !0 && (n.value = !1)
            }
            , 10);
            T !== null && clearTimeout(T),
            T = Ce,
            l("filter", _, (ze, qe) => {
                (te === !0 || B.focused.value === !0) && T === Ce && (clearTimeout(T),
                typeof ze == "function" && ze(),
                d.value = !1,
                ht( () => {
                    B.innerLoading.value = !1,
                    B.editable.value === !0 && (te === !0 ? n.value === !0 && Wt() : n.value === !0 ? Bl(!0) : n.value = !0),
                    typeof qe == "function" && ht( () => {
                        qe(a)
                    }
                    ),
                    typeof le == "function" && ht( () => {
                        le(a)
                    }
                    )
                }
                ))
            }
            , () => {
                B.focused.value === !0 && T === Ce && (clearTimeout(T),
                B.innerLoading.value = !1,
                d.value = !1),
                n.value === !0 && (n.value = !1)
            }
            )
        }
        function Tn() {
            return A($l, {
                ref: W,
                class: pe.value,
                style: e.popupContentStyle,
                modelValue: n.value,
                fit: e.menuShrink !== !0,
                cover: e.optionsCover === !0 && Te.value !== !0 && e.useInput !== !0,
                anchor: e.menuAnchor,
                self: e.menuSelf,
                offset: e.menuOffset,
                dark: Ve.value,
                noParentEvent: !0,
                noRefocus: !0,
                noFocus: !0,
                noRouteDismiss: e.popupNoRouteDismiss,
                square: Ie.value,
                transitionShow: e.transitionShow,
                transitionHide: e.transitionHide,
                transitionDuration: e.transitionDuration,
                separateClosePopup: !0,
                ...me.value,
                onScrollPassive: re,
                onBeforeShow: wa,
                onBeforeHide: In,
                onShow: qn
            }, ha)
        }
        function In(_) {
            _a(_),
            Nt()
        }
        function qn() {
            Le()
        }
        function Wn(_) {
            nt(_),
            P.value?.focus(),
            c.value = !0,
            window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0)
        }
        function Pn(_) {
            nt(_),
            ht( () => {
                c.value = !1
            }
            )
        }
        function zn() {
            const _ = [A(Ti, {
                class: `col-auto ${B.fieldClass.value}`,
                ...ce.value,
                for: B.targetUid.value,
                dark: Ve.value,
                square: !0,
                loading: d.value,
                itemAligned: !1,
                filled: !0,
                stackLabel: f.value.length !== 0,
                ...B.splitAttrs.listeners.value,
                onFocus: Wn,
                onBlur: Pn
            }, {
                ...s,
                rawControl: () => B.getControl(!0),
                before: void 0,
                after: void 0
            })];
            return n.value === !0 && _.push(A("div", {
                ref: H,
                class: pe.value + " scroll",
                style: e.popupContentStyle,
                ...me.value,
                onClick: Kt,
                onScrollPassive: re
            }, ha())),
            A(Ye, {
                ref: U,
                modelValue: i.value,
                position: e.useInput === !0 ? "top" : void 0,
                transitionShow: S,
                transitionHide: e.transitionHide,
                transitionDuration: e.transitionDuration,
                noRouteDismiss: e.popupNoRouteDismiss,
                onBeforeShow: wa,
                onBeforeHide: Ln,
                onHide: Mn,
                onShow: Un
            }, () => A("div", {
                class: "q-select__dialog" + (Ve.value === !0 ? " q-select__dialog--dark q-dark" : "") + (c.value === !0 ? " q-select__dialog--focused" : "")
            }, _))
        }
        function Ln(_) {
            _a(_),
            U.value !== null && U.value.__updateRefocusTarget(B.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),
            B.focused.value = !1
        }
        function Mn(_) {
            Wt(),
            B.focused.value === !1 && l("blur", _),
            Ht()
        }
        function Un() {
            const _ = document.activeElement;
            (_ === null || _.id !== B.targetUid.value) && P.value !== null && P.value !== _ && P.value.focus(),
            Le()
        }
        function Nt() {
            i.value !== !0 && (r.value = -1,
            n.value === !0 && (n.value = !1),
            B.focused.value === !1 && (T !== null && (clearTimeout(T),
            T = null),
            B.innerLoading.value === !0 && (l("filterAbort"),
            B.innerLoading.value = !1,
            d.value = !1)))
        }
        function jt(_) {
            B.editable.value === !0 && (x === !0 ? (B.onControlFocusin(_),
            i.value = !0,
            ht( () => {
                B.focus()
            }
            )) : B.focus(),
            e.onFilter !== void 0 ? Rt(f.value) : (Te.value !== !0 || s["no-option"] !== void 0) && (n.value = !0))
        }
        function Wt() {
            i.value = !1,
            Nt()
        }
        function Ht() {
            e.useInput === !0 && nl(e.multiple !== !0 && e.fillInput === !0 && G.value.length !== 0 && j.value(G.value[0]) || "", !0, !0)
        }
        function Bl(_) {
            let te = -1;
            if (_ === !0) {
                if (G.value.length !== 0) {
                    const le = Re.value(G.value[0]);
                    te = e.options.findIndex(Ce => ol(Re.value(Ce), le))
                }
                z(te)
            }
            mt(te)
        }
        function On(_, te) {
            n.value === !0 && B.innerLoading.value === !1 && (z(-1, !0),
            ht( () => {
                n.value === !0 && B.innerLoading.value === !1 && (_ > te ? z() : Bl(!0))
            }
            ))
        }
        function ya() {
            i.value === !1 && W.value !== null && W.value.updatePosition()
        }
        function wa(_) {
            _ !== void 0 && nt(_),
            l("popupShow", _),
            B.hasPopupOpen = !0,
            B.onControlFocusin(_)
        }
        function _a(_) {
            _ !== void 0 && nt(_),
            l("popupHide", _),
            B.hasPopupOpen = !1,
            B.onControlFocusout(_)
        }
        function Fa() {
            x = t.platform.is.mobile !== !0 && e.behavior !== "dialog" ? !1 : e.behavior !== "menu" && (e.useInput === !0 ? s["no-option"] !== void 0 || e.onFilter !== void 0 || Te.value === !1 : !0),
            S = t.platform.is.ios === !0 && x === !0 && e.useInput === !0 ? "fade" : e.transitionShow
        }
        return Gn(Fa),
        Yn(ya),
        Fa(),
        Tt( () => {
            g !== null && clearTimeout(g),
            p !== null && clearTimeout(p)
        }
        ),
        Object.assign(a, {
            showPopup: jt,
            hidePopup: Wt,
            removeAtIndex: Fe,
            add: He,
            toggleOption: Qe,
            getOptionIndex: () => r.value,
            setOptionIndex: mt,
            moveOptionSelection: kt,
            filter: Rt,
            updateMenuPosition: ya,
            updateInputValue: nl,
            isOptionSelected: de,
            getEmittingOptionValue: Ee,
            isOptionDisabled: (..._) => ae.value.apply(null, _) === !0,
            getOptionValue: (..._) => Re.value.apply(null, _),
            getOptionLabel: (..._) => j.value.apply(null, _)
        }),
        Object.assign(B, {
            innerValue: G,
            fieldClass: h( () => `q-select q-field--auto-height q-select--with${e.useInput !== !0 ? "out" : ""}-input q-select--with${e.useChips !== !0 ? "out" : ""}-chips q-select--${e.multiple === !0 ? "multiple" : "single"}`),
            inputRef: R,
            targetRef: P,
            hasValue: $e,
            showPopup: jt,
            floatingLabel: h( () => e.hideSelected !== !0 && $e.value === !0 || typeof f.value == "number" || f.value.length !== 0 || yl(e.displayValue)),
            getControlChild: () => {
                if (B.editable.value !== !1 && (i.value === !0 || Te.value !== !0 || s["no-option"] !== void 0))
                    return x === !0 ? zn() : Tn();
                B.hasPopupOpen === !0 && (B.hasPopupOpen = !1)
            }
            ,
            controlEvents: {
                onFocusin(_) {
                    B.onControlFocusin(_)
                },
                onFocusout(_) {
                    B.onControlFocusout(_, () => {
                        Ht(),
                        Nt()
                    }
                    )
                },
                onClick(_) {
                    if (Kt(_),
                    x !== !0 && n.value === !0) {
                        Nt(),
                        P.value?.focus();
                        return
                    }
                    jt(_)
                }
            },
            getControl: _ => {
                const te = $n()
                  , le = _ === !0 || i.value !== !0 || x !== !0;
                if (e.useInput === !0)
                    te.push(Bn(_, le));
                else if (B.editable.value === !0) {
                    const ze = le === !0 ? fe.value : void 0;
                    te.push(A("input", {
                        ref: le === !0 ? P : void 0,
                        key: "d_t",
                        class: "q-select__focus-target",
                        id: le === !0 ? B.targetUid.value : void 0,
                        value: je.value,
                        readonly: !0,
                        "data-autofocus": _ === !0 || e.autofocus === !0 || void 0,
                        ...ze,
                        onKeydown: Ut,
                        onKeyup: Pe,
                        onKeypress: pt
                    })),
                    le === !0 && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && te.push(A("input", {
                        class: "q-select__autocomplete-input",
                        autocomplete: e.autocomplete,
                        tabindex: -1,
                        onKeyup: et
                    }))
                }
                if ($.value !== void 0 && e.disable !== !0 && K.value.length !== 0) {
                    const ze = K.value.map(qe => A("option", {
                        value: qe,
                        selected: !0
                    }));
                    te.push(A("select", {
                        class: "hidden",
                        name: $.value,
                        multiple: e.multiple
                    }, ze))
                }
                const Ce = e.useInput === !0 || le !== !0 ? void 0 : B.splitAttrs.attributes.value;
                return A("div", {
                    class: "q-field__native row items-center",
                    ...Ce,
                    ...B.splitAttrs.listeners.value
                }, te)
            }
            ,
            getInnerAppend: () => e.loading !== !0 && d.value !== !0 && e.hideDropdownIcon !== !0 ? [A(De, {
                class: "q-select__dropdown-icon" + (n.value === !0 ? " rotate-180" : ""),
                name: Me.value
            })] : null
        }),
        la(B)
    }
});
let Ui = 0;
const Oi = ["click", "keydown"]
  , Ri = {
    icon: String,
    label: [Number, String],
    alert: [Boolean, String],
    alertIcon: String,
    name: {
        type: [Number, String],
        default: () => `t_${Ui++}`
    },
    noCaps: Boolean,
    tabindex: [String, Number],
    disable: Boolean,
    contentClass: String,
    ripple: {
        type: [Boolean, Object],
        default: !0
    }
};
function Ni(e, s, l, a) {
    const t = Xn(Za, Il);
    if (t === Il)
        return console.error("QTab/QRouteTab component needs to be child of QTabs"),
        Il;
    const {proxy: n} = ct()
      , i = F(null)
      , r = F(null)
      , f = F(null)
      , c = h( () => e.disable === !0 || e.ripple === !1 ? !1 : Object.assign({
        keyCodes: [13, 32],
        early: !0
    }, e.ripple === !0 ? {} : e.ripple))
      , d = h( () => t.currentModel.value === e.name)
      , g = h( () => "q-tab relative-position self-stretch flex flex-center text-center" + (d.value === !0 ? " q-tab--active" + (t.tabProps.value.activeClass ? " " + t.tabProps.value.activeClass : "") + (t.tabProps.value.activeColor ? ` text-${t.tabProps.value.activeColor}` : "") + (t.tabProps.value.activeBgColor ? ` bg-${t.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && t.tabProps.value.inlineLabel === !1 ? " q-tab--full" : "") + (e.noCaps === !0 || t.tabProps.value.noCaps === !0 ? " q-tab--no-caps" : "") + (e.disable === !0 ? " disabled" : " q-focusable q-hoverable cursor-pointer"))
      , p = h( () => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (t.tabProps.value.inlineLabel === !0 ? "row no-wrap q-tab__content--inline" : "column") + (e.contentClass !== void 0 ? ` ${e.contentClass}` : ""))
      , y = h( () => e.disable === !0 || t.hasFocus.value === !0 || d.value === !1 && t.hasActiveTab.value === !0 ? -1 : e.tabindex || 0);
    function x(C, D) {
        if (D !== !0 && C?.qAvoidFocus !== !0 && i.value?.focus(),
        e.disable !== !0) {
            t.updateModel({
                name: e.name
            }),
            l("click", C);
            return
        }
    }
    function w(C) {
        Ja(C, [13, 32]) ? x(C, !0) : Xa(C) !== !0 && C.keyCode >= 35 && C.keyCode <= 40 && C.altKey !== !0 && C.metaKey !== !0 && t.onKbdNavigate(C.keyCode, n.$el) === !0 && rt(C),
        l("keydown", C)
    }
    function T() {
        const C = t.tabProps.value.narrowIndicator
          , D = []
          , R = A("div", {
            ref: f,
            class: ["q-tab__indicator", t.tabProps.value.indicatorClass]
        });
        e.icon !== void 0 && D.push(A(De, {
            class: "q-tab__icon",
            name: e.icon
        })),
        e.label !== void 0 && D.push(A("div", {
            class: "q-tab__label"
        }, e.label)),
        e.alert !== !1 && D.push(e.alertIcon !== void 0 ? A(De, {
            class: "q-tab__alert-icon",
            color: e.alert !== !0 ? e.alert : void 0,
            name: e.alertIcon
        }) : A("div", {
            class: "q-tab__alert" + (e.alert !== !0 ? ` text-${e.alert}` : "")
        })),
        C === !0 && D.push(R);
        const P = [A("div", {
            class: "q-focus-helper",
            tabindex: -1,
            ref: i
        }), A("div", {
            class: p.value
        }, sa(s.default, D))];
        return C === !1 && P.push(R),
        P
    }
    const I = {
        name: h( () => e.name),
        rootRef: r,
        tabIndicatorRef: f,
        routeData: a
    };
    Tt( () => {
        t.unregisterTab(I)
    }
    ),
    ll( () => {
        t.registerTab(I)
    }
    );
    function S(C, D) {
        const R = {
            ref: r,
            class: g.value,
            tabindex: y.value,
            role: "tab",
            "aria-selected": d.value === !0 ? "true" : "false",
            "aria-disabled": e.disable === !0 ? "true" : void 0,
            onClick: x,
            onKeydown: w,
            ...D
        };
        return ue(A(C, R, T()), [[ra, c.value]])
    }
    return {
        renderTab: S,
        $tabs: t
    }
}
const vt = it({
    name: "QTab",
    props: Ri,
    emits: Oi,
    setup(e, {slots: s, emit: l}) {
        const {renderTab: a} = Ni(e, s, l);
        return () => a("div")
    }
});
function ji(e, s, l) {
    const a = l === !0 ? ["left", "right"] : ["top", "bottom"];
    return `absolute-${s === !0 ? a[0] : a[1]}${e ? ` text-${e}` : ""}`
}
const Hi = ["left", "center", "right", "justify"]
  , dl = it({
    name: "QTabs",
    props: {
        modelValue: [Number, String],
        align: {
            type: String,
            default: "center",
            validator: e => Hi.includes(e)
        },
        breakpoint: {
            type: [String, Number],
            default: 600
        },
        vertical: Boolean,
        shrink: Boolean,
        stretch: Boolean,
        activeClass: String,
        activeColor: String,
        activeBgColor: String,
        indicatorColor: String,
        leftIcon: String,
        rightIcon: String,
        outsideArrows: Boolean,
        mobileArrows: Boolean,
        switchIndicator: Boolean,
        narrowIndicator: Boolean,
        inlineLabel: Boolean,
        noCaps: Boolean,
        dense: Boolean,
        contentClass: String,
        "onUpdate:modelValue": [Function, Array]
    },
    setup(e, {slots: s, emit: l}) {
        const {proxy: a} = ct()
          , {$q: t} = a
          , {registerTick: n} = ql()
          , {registerTick: i} = ql()
          , {registerTick: r} = ql()
          , {registerTimeout: f, removeTimeout: c} = Ql()
          , {registerTimeout: d, removeTimeout: g} = Ql()
          , p = F(null)
          , y = F(null)
          , x = F(e.modelValue)
          , w = F(!1)
          , T = F(!0)
          , I = F(!1)
          , S = F(!1)
          , C = []
          , D = F(0)
          , R = F(!1);
        let P = null, W = null, U;
        const H = h( () => ({
            activeClass: e.activeClass,
            activeColor: e.activeColor,
            activeBgColor: e.activeBgColor,
            indicatorClass: ji(e.indicatorColor, e.switchIndicator, e.vertical),
            narrowIndicator: e.narrowIndicator,
            inlineLabel: e.inlineLabel,
            noCaps: e.noCaps
        }))
          , $ = h( () => {
            const j = D.value
              , ae = x.value;
            for (let K = 0; K < j; K++)
                if (C[K].name.value === ae)
                    return !0;
            return !1
        }
        )
          , M = h( () => `q-tabs__content--align-${w.value === !0 ? "left" : S.value === !0 ? "justify" : e.align}`)
          , Y = h( () => `q-tabs row no-wrap items-center q-tabs--${w.value === !0 ? "" : "not-"}scrollable q-tabs--${e.vertical === !0 ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows === !0 ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows === !0 ? "" : "out"}-arrows` + (e.dense === !0 ? " q-tabs--dense" : "") + (e.shrink === !0 ? " col-shrink" : "") + (e.stretch === !0 ? " self-stretch" : ""))
          , ee = h( () => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + M.value + (e.contentClass !== void 0 ? ` ${e.contentClass}` : ""))
          , b = h( () => e.vertical === !0 ? {
            container: "height",
            content: "offsetHeight",
            scroll: "scrollHeight"
        } : {
            container: "width",
            content: "offsetWidth",
            scroll: "scrollWidth"
        })
          , k = h( () => e.vertical !== !0 && t.lang.rtl === !0)
          , z = h( () => cl === !1 && k.value === !0);
        he(k, G),
        he( () => e.modelValue, j => {
            L({
                name: j,
                setCurrent: !0,
                skipEmit: !0
            })
        }
        ),
        he( () => e.outsideArrows, re);
        function L({name: j, setCurrent: ae, skipEmit: K}) {
            x.value !== j && (K !== !0 && e["onUpdate:modelValue"] !== void 0 && l("update:modelValue", j),
            (ae === !0 || e["onUpdate:modelValue"] === void 0) && (Le(x.value, j),
            x.value = j))
        }
        function re() {
            n( () => {
                p.value && ke({
                    width: p.value.offsetWidth,
                    height: p.value.offsetHeight
                })
            }
            )
        }
        function ke(j) {
            if (b.value === void 0 || y.value === null)
                return;
            const ae = j[b.value.container]
              , K = Math.min(y.value[b.value.scroll], Array.prototype.reduce.call(y.value.children, (Ee, Fe) => Ee + (Fe[b.value.content] || 0), 0))
              , ie = ae > 0 && K > ae;
            w.value = ie,
            ie === !0 && i(G),
            S.value = ae < parseInt(e.breakpoint, 10)
        }
        function Le(j, ae) {
            const K = j != null && j !== "" ? C.find(Ee => Ee.name.value === j) : null
              , ie = ae != null && ae !== "" ? C.find(Ee => Ee.name.value === ae) : null;
            if (Re === !0)
                Re = !1;
            else if (K && ie) {
                const Ee = K.tabIndicatorRef.value
                  , Fe = ie.tabIndicatorRef.value;
                P !== null && (clearTimeout(P),
                P = null),
                Ee.style.transition = "none",
                Ee.style.transform = "none",
                Fe.style.transition = "none",
                Fe.style.transform = "none";
                const xe = Ee.getBoundingClientRect()
                  , He = Fe.getBoundingClientRect();
                Fe.style.transform = e.vertical === !0 ? `translate3d(0,${xe.top - He.top}px,0) scale3d(1,${He.height ? xe.height / He.height : 1},1)` : `translate3d(${xe.left - He.left}px,0,0) scale3d(${He.width ? xe.width / He.width : 1},1,1)`,
                r( () => {
                    P = setTimeout( () => {
                        P = null,
                        Fe.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)",
                        Fe.style.transform = "none"
                    }
                    , 70)
                }
                )
            }
            ie && w.value === !0 && B(ie.rootRef.value)
        }
        function B(j) {
            const {left: ae, width: K, top: ie, height: Ee} = y.value.getBoundingClientRect()
              , Fe = j.getBoundingClientRect();
            let xe = e.vertical === !0 ? Fe.top - ie : Fe.left - ae;
            if (xe < 0) {
                y.value[e.vertical === !0 ? "scrollTop" : "scrollLeft"] += Math.floor(xe),
                G();
                return
            }
            xe += e.vertical === !0 ? Fe.height - Ee : Fe.width - K,
            xe > 0 && (y.value[e.vertical === !0 ? "scrollTop" : "scrollLeft"] += Math.ceil(xe),
            G())
        }
        function G() {
            const j = y.value;
            if (j === null)
                return;
            const ae = j.getBoundingClientRect()
              , K = e.vertical === !0 ? j.scrollTop : Math.abs(j.scrollLeft);
            k.value === !0 ? (T.value = Math.ceil(K + ae.width) < j.scrollWidth - 1,
            I.value = K > 0) : (T.value = K > 0,
            I.value = e.vertical === !0 ? Math.ceil(K + ae.height) < j.scrollHeight : Math.ceil(K + ae.width) < j.scrollWidth)
        }
        function ce(j) {
            W !== null && clearInterval(W),
            W = setInterval( () => {
                ve(j) === !0 && se()
            }
            , 5)
        }
        function Ve() {
            ce(z.value === !0 ? Number.MAX_SAFE_INTEGER : 0)
        }
        function $e() {
            ce(z.value === !0 ? 0 : Number.MAX_SAFE_INTEGER)
        }
        function se() {
            W !== null && (clearInterval(W),
            W = null)
        }
        function pe(j, ae) {
            const K = Array.prototype.filter.call(y.value.children, He => He === ae || He.matches && He.matches(".q-tab.q-focusable") === !0)
              , ie = K.length;
            if (ie === 0)
                return;
            if (j === 36)
                return B(K[0]),
                K[0].focus(),
                !0;
            if (j === 35)
                return B(K[ie - 1]),
                K[ie - 1].focus(),
                !0;
            const Ee = j === (e.vertical === !0 ? 38 : 37)
              , Fe = j === (e.vertical === !0 ? 40 : 39)
              , xe = Ee === !0 ? -1 : Fe === !0 ? 1 : void 0;
            if (xe !== void 0) {
                const He = k.value === !0 ? -1 : 1
                  , Qe = K.indexOf(ae) + xe * He;
                return Qe >= 0 && Qe < ie && (B(K[Qe]),
                K[Qe].focus({
                    preventScroll: !0
                })),
                !0
            }
        }
        const Te = h( () => z.value === !0 ? {
            get: j => Math.abs(j.scrollLeft),
            set: (j, ae) => {
                j.scrollLeft = -ae
            }
        } : e.vertical === !0 ? {
            get: j => j.scrollTop,
            set: (j, ae) => {
                j.scrollTop = ae
            }
        } : {
            get: j => j.scrollLeft,
            set: (j, ae) => {
                j.scrollLeft = ae
            }
        });
        function ve(j) {
            const ae = y.value
              , {get: K, set: ie} = Te.value;
            let Ee = !1
              , Fe = K(ae);
            const xe = j < Fe ? -1 : 1;
            return Fe += xe * 5,
            Fe < 0 ? (Ee = !0,
            Fe = 0) : (xe === -1 && Fe <= j || xe === 1 && Fe >= j) && (Ee = !0,
            Fe = j),
            ie(ae, Fe),
            G(),
            Ee
        }
        function je(j, ae) {
            for (const K in j)
                if (j[K] !== ae[K])
                    return !1;
            return !0
        }
        function Je() {
            let j = null
              , ae = {
                matchedLen: 0,
                queryDiff: 9999,
                hrefLen: 0
            };
            const K = C.filter(xe => xe.routeData?.hasRouterLink.value === !0)
              , {hash: ie, query: Ee} = a.$route
              , Fe = Object.keys(Ee).length;
            for (const xe of K) {
                const He = xe.routeData.exact.value === !0;
                if (xe.routeData[He === !0 ? "linkIsExactActive" : "linkIsActive"].value !== !0)
                    continue;
                const {hash: Qe, query: mt, matched: kt, href: N} = xe.routeData.resolvedLink.value
                  , de = Object.keys(mt).length;
                if (He === !0) {
                    if (Qe !== ie || de !== Fe || je(Ee, mt) === !1)
                        continue;
                    j = xe.name.value;
                    break
                }
                if (Qe !== "" && Qe !== ie || de !== 0 && je(mt, Ee) === !1)
                    continue;
                const Se = {
                    matchedLen: kt.length,
                    queryDiff: Fe - de,
                    hrefLen: N.length - Qe.length
                };
                if (Se.matchedLen > ae.matchedLen) {
                    j = xe.name.value,
                    ae = Se;
                    continue
                } else if (Se.matchedLen !== ae.matchedLen)
                    continue;
                if (Se.queryDiff < ae.queryDiff)
                    j = xe.name.value,
                    ae = Se;
                else if (Se.queryDiff !== ae.queryDiff)
                    continue;
                Se.hrefLen > ae.hrefLen && (j = xe.name.value,
                ae = Se)
            }
            if (j === null && C.some(xe => xe.routeData === void 0 && xe.name.value === x.value) === !0) {
                Re = !1;
                return
            }
            L({
                name: j,
                setCurrent: !0
            })
        }
        function q(j) {
            if (c(),
            R.value !== !0 && p.value !== null && j.target && typeof j.target.closest == "function") {
                const ae = j.target.closest(".q-tab");
                ae && p.value.contains(ae) === !0 && (R.value = !0,
                w.value === !0 && B(ae))
            }
        }
        function oe() {
            f( () => {
                R.value = !1
            }
            , 30)
        }
        function fe() {
            Me.avoidRouteWatcher === !1 ? d(Je) : g()
        }
        function me() {
            if (U === void 0) {
                const j = he( () => a.$route.fullPath, fe);
                U = () => {
                    j(),
                    U = void 0
                }
            }
        }
        function Be(j) {
            C.push(j),
            D.value++,
            re(),
            j.routeData === void 0 || a.$route === void 0 ? d( () => {
                if (w.value === !0) {
                    const ae = x.value
                      , K = ae != null && ae !== "" ? C.find(ie => ie.name.value === ae) : null;
                    K && B(K.rootRef.value)
                }
            }
            ) : (me(),
            j.routeData.hasRouterLink.value === !0 && fe())
        }
        function ge(j) {
            C.splice(C.indexOf(j), 1),
            D.value--,
            re(),
            U !== void 0 && j.routeData !== void 0 && (C.every(ae => ae.routeData === void 0) === !0 && U(),
            fe())
        }
        const Me = {
            currentModel: x,
            tabProps: H,
            hasFocus: R,
            hasActiveTab: $,
            registerTab: Be,
            unregisterTab: ge,
            verifyRouteModel: fe,
            updateModel: L,
            onKbdNavigate: pe,
            avoidRouteWatcher: !1
        };
        Jn(Za, Me);
        function Ie() {
            P !== null && clearTimeout(P),
            se(),
            U?.()
        }
        let Ze, Re;
        return Tt(Ie),
        na( () => {
            Ze = U !== void 0,
            Ie()
        }
        ),
        oa( () => {
            Ze === !0 && (me(),
            Re = !0,
            fe()),
            re()
        }
        ),
        () => A("div", {
            ref: p,
            class: Y.value,
            role: "tablist",
            onFocusin: q,
            onFocusout: oe
        }, [A(Yl, {
            onResize: ke
        }), A("div", {
            ref: y,
            class: ee.value,
            onScroll: G
        }, Bt(s.default)), A(De, {
            class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (T.value === !0 ? "" : " q-tabs__arrow--faded"),
            name: e.leftIcon || t.iconSet.tabs[e.vertical === !0 ? "up" : "left"],
            onMousedownPassive: Ve,
            onTouchstartPassive: Ve,
            onMouseupPassive: se,
            onMouseleavePassive: se,
            onTouchendPassive: se
        }), A(De, {
            class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (I.value === !0 ? "" : " q-tabs__arrow--faded"),
            name: e.rightIcon || t.iconSet.tabs[e.vertical === !0 ? "down" : "right"],
            onMousedownPassive: $e,
            onTouchstartPassive: $e,
            onMouseupPassive: se,
            onMouseleavePassive: se,
            onTouchendPassive: se
        })])
    }
})
  , Qi = ["src"]
  , Ki = {
    style: {
        opacity: ".8",
        "font-size": ".8em"
    }
}
  , fa = be({
    __name: "ProfileDropdown",
    emits: ["log-out"],
    setup(e, {emit: s}) {
        const {t: l} = _e()
          , a = ft()
          , t = It()
          , n = Oe()
          , i = s;
        function r() {
            t.logOut(),
            i("log-out")
        }
        async function f() {
            const c = l("profiledropdown.Are you sure you want to delete your account");
            if (await al(l, c)) {
                a.loading.show();
                try {
                    await t.deleteAccount(),
                    n.resetWheel();
                    const d = l("profiledropdown.Your account and your saved wheels have been deleted");
                    $t(d),
                    i("log-out")
                } catch (d) {
                    Ue("DeleteAccountError", d),
                    Ne(l, d)
                }
                a.loading.hide()
            }
        }
        return (c, d) => (V(),
        X(St, {
            flat: ""
        }, {
            label: u( () => [m("img", {
                style: {
                    "border-radius": "50%",
                    height: "30px"
                },
                src: v(t).userPhotoUrl,
                alt: ""
            }, null, 8, Qi)]),
            default: u( () => [o(Mt, null, {
                default: u( () => [o(we, null, {
                    default: u( () => [o(ne, null, {
                        default: u( () => [Q(E(v(l)("profiledropdown.Signed in as", {
                            name: v(t).userDisplayName
                        })) + " ", 1), m("span", Ki, " (" + E(v(t).loginProvider) + ") ", 1)]),
                        _: 1
                    })]),
                    _: 1
                }), o(rl), ue((V(),
                X(we, {
                    clickable: "",
                    onClick: r
                }, {
                    default: u( () => [o(ne, null, {
                        default: u( () => [o(tt, null, {
                            default: u( () => [Q(E(v(l)("profiledropdown.Sign out")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                })), [[Xe]]), o(we, {
                    to: "/export"
                }, {
                    default: u( () => [o(ne, null, {
                        default: u( () => [o(tt, null, {
                            default: u( () => [Q(E(v(l)("profiledropdown.Export my data")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                }), ue((V(),
                X(we, {
                    clickable: "",
                    onClick: f
                }, {
                    default: u( () => [o(ne, null, {
                        default: u( () => [o(tt, null, {
                            default: u( () => [Q(E(v(l)("profiledropdown.Delete my account")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                })), [[Xe]])]),
                _: 1
            })]),
            _: 1
        }))
    }
})
  , Gi = {
    class: "flex gap justify-between items-center"
}
  , Yi = {
    class: "text-h6"
}
  , Xi = {
    key: 0,
    class: "pad text-center"
}
  , Ji = {
    key: 1,
    class: "flex f-col no-wrap gap-sm",
    style: {
        "max-height": "60vh"
    }
}
  , Zi = {
    key: 0,
    class: "flex f-col gap-sm",
    style: {
        "max-width": "100%",
        "margin-top": "8px"
    }
}
  , es = {
    style: {
        display: "flex",
        gap: "8px 16px",
        "flex-wrap": "wrap"
    }
}
  , ts = {
    style: {
        overflow: "auto",
        "margin-top": "8px"
    }
}
  , ls = {
    class: "flex gap justify-between",
    style: {
        "margin-top": "12px"
    }
}
  , as = be({
    __name: "MyWheelsDialog",
    emits: ["reset-wheel-rotation", "reset-address-bar"],
    setup(e, {expose: s, emit: l}) {
        const a = ft()
          , {t} = _e()
          , n = It()
          , i = Oe()
          , r = l
          , f = F(!1)
          , c = F("allWheels")
          , d = F([])
          , g = h( () => d.value.length === 0)
          , p = F("")
          , y = h( () => p.value.toLowerCase())
          , x = h( () => d.value.filter($ => (c.value === "allWheels" || c.value === "savedWheels" && $.shareMode === "private" || c.value === "sharedWheels" && $.shareMode !== "private") && (!p.value || $.wheelConfig.title.toLowerCase().includes(y.value))))
          , w = F("title-asc")
          , T = h( () => {
            const [$,M] = w.value.split("-");
            return Zn(x.value, $, M)
        }
        );
        let I;
        async function S() {
            return J("", "MyWheelsDialogShow"),
            await P(),
            p.value = "",
            f.value = !0,
            new Promise($ => I = $)
        }
        async function C($) {
            a.loading.show();
            try {
                const M = await n.loadWheel($);
                i.setWheel(M),
                r("reset-wheel-rotation"),
                r("reset-address-bar"),
                J("", "MyWheelsDialogOpenWheel"),
                H(),
                I("open")
            } catch (M) {
                Ue("MyWheelsDialogOpenWheelError", M),
                Ne(t, M)
            }
            a.loading.hide()
        }
        async function D($, M) {
            try {
                await n.updateWheel($, M.wheelConfig, M.shareMode)
            } catch (Y) {
                Ue("MyWheelsDialogUpdateWheelError", Y),
                Ne(t, Y)
            }
        }
        async function R($, M) {
            const Y = t("opendialog.Are you sure", {
                wheelTitle: tn(M)
            });
            if (await al(t, Y))
                try {
                    J("", "MyWheelsDialogDeleteWheel"),
                    d.value = d.value.filter(ee => ee.path !== $),
                    await n.deleteWheel($)
                } catch (ee) {
                    Ue("MyWheelsDialogDeleteWheelError", ee),
                    Ne(t, ee)
                }
        }
        async function P() {
            try {
                a.loading.show(),
                d.value = await n.loadMyWheels("path,created,lastWrite,shareMode,wheelConfig.title")
            } catch ($) {
                Ne(t, $),
                Ue("MyWheelsDialogLoadWheelsError", $)
            } finally {
                a.loading.hide()
            }
        }
        function W() {
            H(),
            I("switch")
        }
        function U() {
            H(),
            I("cancel")
        }
        function H() {
            f.value = !1
        }
        return s({
            show: S
        }),
        ($, M) => (V(),
        X(Ye, {
            modelValue: f.value,
            "onUpdate:modelValue": M[3] || (M[3] = Y => f.value = Y)
        }, {
            default: u( () => [o(at, {
                style: {
                    width: "640px",
                    padding: "12px"
                }
            }, {
                default: u( () => [m("header", Gi, [m("div", Yi, [M[4] || (M[4] = m("i", {
                    class: "fa fa-folder-open"
                }, null, -1)), Q(" " + E(v(t)("mywheelsdialog.My wheels")), 1)]), o(fa, {
                    onLogOut: U
                })]), g.value ? (V(),
                Z("div", Xi, E(v(t)("opendialog.No wheels found")), 1)) : (V(),
                Z("div", Ji, [d.value.length > 5 ? (V(),
                Z("div", Zi, [m("div", es, [o(lt, {
                    dense: "",
                    filled: "",
                    modelValue: p.value,
                    "onUpdate:modelValue": M[0] || (M[0] = Y => p.value = Y),
                    placeholder: v(t)("common.Search"),
                    class: "flex-1",
                    style: {
                        "min-width": "200px"
                    }
                }, null, 8, ["modelValue", "placeholder"]), o(Ft, {
                    modelValue: w.value,
                    "onUpdate:modelValue": M[1] || (M[1] = Y => w.value = Y),
                    options: [{
                        label: v(t)("mywheelsdialog.Sort by title ascending"),
                        value: "title-asc"
                    }, {
                        label: v(t)("mywheelsdialog.Sort by title descending"),
                        value: "title-desc"
                    }, {
                        label: v(t)("mywheelsdialog.Sort by last updated first"),
                        value: "lastWrite-desc"
                    }, {
                        label: v(t)("mywheelsdialog.Sort by last updated last"),
                        value: "lastWrite-asc"
                    }, {
                        label: v(t)("mywheelsdialog.Sort by newest first"),
                        value: "created-desc"
                    }, {
                        label: v(t)("mywheelsdialog.Sort by oldest first"),
                        value: "created-asc"
                    }],
                    dense: "",
                    filled: "",
                    "emit-value": "",
                    "map-options": "",
                    class: "flex-1"
                }, null, 8, ["modelValue", "options"])]), o(dl, {
                    modelValue: c.value,
                    "onUpdate:modelValue": M[2] || (M[2] = Y => c.value = Y),
                    "no-caps": "",
                    style: {
                        "max-width": "100%"
                    }
                }, {
                    default: u( () => [o(vt, {
                        name: "allWheels",
                        label: v(t)("mywheelsdialog.All wheels")
                    }, null, 8, ["label"]), o(vt, {
                        name: "savedWheels",
                        label: v(t)("mywheelsdialog.Saved wheels")
                    }, null, 8, ["label"]), o(vt, {
                        name: "sharedWheels",
                        label: v(t)("mywheelsdialog.Shared wheels")
                    }, null, 8, ["label"])]),
                    _: 1
                }, 8, ["modelValue"])])) : ye("", !0), m("div", ts, [o(en, {
                    name: "animated-list",
                    tag: "ul",
                    class: "flex-1 flex f-col gap-sm",
                    style: {
                        "padding-left": "0",
                        margin: "0"
                    }
                }, {
                    default: u( () => [(V(!0),
                    Z(ut, null, gt(T.value, Y => (V(),
                    Z("li", {
                        key: Y.path,
                        class: "flex"
                    }, [o(Xo, {
                        wheel: Y,
                        "display-date": w.value.split("-")[0],
                        onOpenWheel: C,
                        onUpdateWheel: D,
                        onDeleteWheel: R
                    }, null, 8, ["wheel", "display-date"])]))), 128))]),
                    _: 1
                })])])), m("footer", ls, [o(O, {
                    unelevated: "",
                    "no-caps": "",
                    label: v(t)("opendialog.Open a local file instead"),
                    onClick: W
                }, null, 8, ["label"]), o(O, {
                    unelevated: "",
                    "no-caps": "",
                    label: v(t)("common.Cancel"),
                    onClick: U
                }, null, 8, ["label"])])]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , ns = {
    class: "text-h6"
}
  , os = {
    key: 0
}
  , is = {
    key: 1
}
  , ss = {
    style: {
        height: "50vh",
        overflow: "auto"
    }
}
  , rs = be({
    __name: "OpenDialog",
    emits: ["reset-wheel-rotation", "reset-address-bar"],
    setup(e, {expose: s, emit: l}) {
        const a = ft()
          , {t} = _e()
          , n = It()
          , i = Oe()
          , r = l
          , f = F(!1)
          , c = F([])
          , d = F("")
          , g = h( () => d.value.toLowerCase())
          , p = h( () => c.value.filter(D => !d.value || D.wheelConfig.title.toLowerCase().includes(g.value)));
        let y;
        async function x() {
            return J("Wheel", "ShowOpenDialog"),
            await I(),
            d.value = "",
            f.value = !0,
            new Promise(D => y = D)
        }
        async function w(D) {
            f.value = !1,
            y("open");
            const R = await n.loadWheel(D);
            i.setWheel(R),
            r("reset-wheel-rotation"),
            r("reset-address-bar"),
            J("Wheel", "OpenWheel")
        }
        async function T(D, R) {
            const P = t("opendialog.Are you sure", {
                wheelTitle: tn(R)
            });
            if (await al(t, P))
                try {
                    J("Wheel", "DeleteWheel"),
                    c.value = c.value.filter(W => W.path !== D),
                    await n.deleteWheel(D)
                } catch (W) {
                    Ue("DeleteWheelError", W),
                    Ne(t, W)
                }
        }
        async function I() {
            try {
                a.loading.show(),
                c.value = await n.getSavedWheels("path,wheelConfig.title")
            } catch (D) {
                Ne(t, D),
                Ue("LoadSavedWheelsError (Open dialog)", D)
            } finally {
                a.loading.hide()
            }
        }
        function S() {
            f.value = !1,
            y("cancel")
        }
        function C() {
            f.value = !1,
            y("switch")
        }
        return s({
            show: x
        }),
        (D, R) => (V(),
        X(Ye, {
            modelValue: f.value,
            "onUpdate:modelValue": R[1] || (R[1] = P => f.value = P)
        }, {
            default: u( () => [o(at, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [o(Ae, {
                    class: "row items-center",
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", ns, [R[2] || (R[2] = m("i", {
                        class: "fa fa-folder-open"
                    }, null, -1)), Q(" " + E(v(t)("opendialog.Open wheel")), 1)]), o(Ct), o(fa, {
                        onLogOut: S
                    })]),
                    _: 1
                }), o(Ae, null, {
                    default: u( () => [c.value.length ? (V(),
                    Z("div", is, [c.value.length > 5 ? (V(),
                    X(lt, {
                        key: 0,
                        dense: "",
                        filled: "",
                        modelValue: d.value,
                        "onUpdate:modelValue": R[0] || (R[0] = P => d.value = P),
                        placeholder: v(t)("common.Search")
                    }, null, 8, ["modelValue", "placeholder"])) : ye("", !0), m("div", ss, [o(en, {
                        name: "animated-list",
                        tag: "q-list"
                    }, {
                        default: u( () => [(V(!0),
                        Z(ut, null, gt(p.value, P => (V(),
                        X(we, {
                            key: P.wheelConfig.title,
                            class: "q-px-none"
                        }, {
                            default: u( () => [o(ne, {
                                side: ""
                            }, {
                                default: u( () => [o(O, {
                                    flat: "",
                                    color: "primary",
                                    icon: "fa fa-folder-open",
                                    onClick: W => w(P.path)
                                }, null, 8, ["onClick"])]),
                                _: 2
                            }, 1024), o(ne, {
                                onClick: W => w(P.path),
                                style: {
                                    cursor: "pointer"
                                }
                            }, {
                                default: u( () => [Q(E(P.wheelConfig.title), 1)]),
                                _: 2
                            }, 1032, ["onClick"]), o(ne, {
                                side: ""
                            }, {
                                default: u( () => [o(O, {
                                    icon: "far fa-trash-alt",
                                    flat: "",
                                    color: "negative",
                                    onClick: W => T(P.path, P.wheelConfig.title)
                                }, null, 8, ["onClick"])]),
                                _: 2
                            }, 1024)]),
                            _: 2
                        }, 1024))), 128))]),
                        _: 1
                    })])])) : (V(),
                    Z("div", os, E(v(t)("opendialog.No wheels found")), 1))]),
                    _: 1
                }), o(dt, {
                    align: "between"
                }, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(t)("opendialog.Open a local file instead"),
                        onClick: C
                    }, null, 8, ["label"]), o(O, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(t)("common.Cancel"),
                        onClick: S
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , us = {
    class: "text-h6"
}
  , cs = {
    class: "row q-gutter-md items-center"
}
  , ds = {
    class: "col-3"
}
  , vs = {
    class: "col"
}
  , fs = {
    class: "row q-gutter-md items-center"
}
  , ms = {
    class: "col-3"
}
  , gs = {
    class: "col"
}
  , ps = be({
    __name: "SaveCloudDialog",
    setup(e, {expose: s}) {
        const l = ft()
          , {t: a} = _e()
          , t = It()
          , n = Oe()
          , i = F(!1)
          , r = F(null)
          , f = F([])
          , c = h( () => f.value.map(W => ({
            value: W.wheelConfig.title,
            label: W.wheelConfig.title
        })))
          , d = h( () => n.wheelConfig)
          , g = F("")
          , p = F("")
          , y = F("")
          , x = h( () => y.value !== g.value && f.value.some(W => W.wheelConfig.title === g.value))
          , w = F(!1);
        let T;
        async function I() {
            return J("Wheel", "ShowSaveDialog"),
            D(),
            g.value = d.value.title,
            y.value = d.value.title,
            p.value = "",
            i.value = !0,
            new Promise(W => T = W)
        }
        he(p, W => g.value = W);
        async function S() {
            if (g.value)
                if (x.value) {
                    const W = a("savedialog.You are about to overwrite");
                    await al(a, W) && C()
                } else
                    C()
        }
        async function C() {
            l.loading.show();
            try {
                J("Wheel", "SaveWheel"),
                n.setWheelTitle(g.value);
                const W = await t.saveWheel(d.value.clone());
                n.setPath(W),
                n.setShareMode("private"),
                n.unsavedChanges = !1,
                l.loading.hide();
                const U = a("savedialog.Wheel saved successfully", {
                    wheelTitle: ua(g.value)
                });
                $t(U)
            } catch (W) {
                l.loading.hide(),
                Ne(a, W),
                Ue("SaveWheelError", W)
            }
            i.value = !1,
            T("save")
        }
        async function D() {
            try {
                w.value = !0,
                f.value = await t.getSavedWheels("wheelConfig.title")
            } catch (W) {
                Ne(a, W),
                Ue("LoadSavedWheelsError (Save dialog)", W)
            } finally {
                w.value = !1
            }
        }
        function R() {
            i.value = !1,
            T("cancel")
        }
        function P() {
            i.value = !1,
            T("switch")
        }
        return s({
            show: I
        }),
        (W, U) => (V(),
        X(Ye, {
            modelValue: i.value,
            "onUpdate:modelValue": U[2] || (U[2] = H => i.value = H),
            onShow: U[3] || (U[3] = H => r.value.select())
        }, {
            default: u( () => [o(at, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [o(Ae, {
                    class: "row items-center",
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", us, [U[4] || (U[4] = m("i", {
                        class: "fa fa-save"
                    }, null, -1)), Q(" " + E(v(a)("savedialog.Save wheel to the cloud")), 1)]), o(Ct), o(fa, {
                        onLogOut: R
                    })]),
                    _: 1
                }), o(Ae, {
                    class: "q-gutter-md"
                }, {
                    default: u( () => [m("div", cs, [m("div", ds, E(v(a)("savedialog.Save as")), 1), m("div", vs, [o(lt, {
                        modelValue: g.value,
                        "onUpdate:modelValue": U[0] || (U[0] = H => g.value = H),
                        filled: "",
                        dense: "",
                        onKeyup: el(S, ["native", "enter"]),
                        ref_key: "saveAsField",
                        ref: r,
                        required: "",
                        maxlength: "50"
                    }, null, 8, ["modelValue"])])]), m("div", fs, [m("div", ms, E(v(a)("savedialog.Your existing wheels")), 1), m("div", gs, [o(Ft, {
                        filled: "",
                        dense: "",
                        label: v(a)("savedialog.Select a wheel"),
                        modelValue: p.value,
                        "onUpdate:modelValue": U[1] || (U[1] = H => p.value = H),
                        options: c.value,
                        "map-options": "",
                        "emit-value": "",
                        loading: w.value
                    }, null, 8, ["label", "modelValue", "options", "loading"])])]), m("div", null, E(v(a)("savedialog.You will always be able to access")), 1), o(O, {
                        outline: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(a)("savedialog.Save to a local file instead"),
                        onClick: P
                    }, null, 8, ["label"])]),
                    _: 1
                }), o(dt, {
                    align: "right"
                }, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(a)("common.Cancel"),
                        onClick: R
                    }, null, 8, ["label"]), o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(a)("common.Save"),
                        onClick: S
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , hs = {
    class: "text-h6"
}
  , bs = {
    class: "row items-center"
}
  , ys = {
    class: "col-shrink q-mr-md q-mb-md"
}
  , ws = {
    class: "col-12 col-md-grow q-mb-md"
}
  , _s = be({
    __name: "SaveLocalDialog",
    setup(e, {expose: s}) {
        const {t: l} = _e()
          , a = ft()
          , t = Oe()
          , n = F(!1)
          , i = F(null)
          , r = h( () => t.wheelConfig)
          , f = F("")
          , c = a.platform.is.ios ? ".json" : ".wheel";
        let d;
        async function g() {
            return J("Wheel", "ShowSaveLocalDialog"),
            f.value = r.value.title,
            n.value = !0,
            new Promise(w => d = w)
        }
        async function p() {
            t.setWheelTitle(f.value);
            try {
                await ii(new Blob([JSON.stringify(Kl(r.value.clone()))]), {
                    fileName: `${r.value.title || "Untitled"}${c}`,
                    extensions: [c],
                    mimeTypes: ["application/json"]
                });
                const w = l("savedialog.Wheel saved successfully", {
                    wheelTitle: ua(r.value.title)
                });
                $t(w)
            } catch (w) {
                if (w instanceof DOMException && w.message.includes("abort"))
                    return;
                Ue("SaveLocalError", w),
                Ne(l, w)
            }
            n.value = !1,
            d("save")
        }
        function y() {
            n.value = !1,
            d("cancel")
        }
        function x() {
            n.value = !1,
            d("switch")
        }
        return s({
            show: g
        }),
        (w, T) => (V(),
        X(Ye, {
            modelValue: n.value,
            "onUpdate:modelValue": T[1] || (T[1] = I => n.value = I),
            onShow: T[2] || (T[2] = I => i.value.select())
        }, {
            default: u( () => [o(at, null, {
                default: u( () => [o(Ae, {
                    class: "row items-center",
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", hs, [T[3] || (T[3] = m("i", {
                        class: "fa fa-save"
                    }, null, -1)), Q(" " + E(v(l)("savedialog.Save to a local file")), 1)])]),
                    _: 1
                }), o(Ae, null, {
                    default: u( () => [m("div", bs, [m("div", ys, E(v(l)("savedialog.File name")), 1), m("div", ws, [o(lt, {
                        modelValue: f.value,
                        "onUpdate:modelValue": T[0] || (T[0] = I => f.value = I),
                        filled: "",
                        dense: "",
                        onKeyup: el(p, ["native", "enter"]),
                        ref_key: "saveAsField",
                        ref: i,
                        required: "",
                        maxlength: "50",
                        suffix: v(c)
                    }, null, 8, ["modelValue", "suffix"])])]), o(O, {
                        outline: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(l)("savedialog.Save to the cloud instead"),
                        onClick: x
                    }, null, 8, ["label"])]),
                    _: 1
                }), o(dt, {
                    align: "right"
                }, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(l)("common.Cancel"),
                        onClick: y
                    }, null, 8, ["label"]), o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(l)("common.Save"),
                        onClick: p
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , Fs = {
    class: "q-mt-sm"
}
  , Ss = {
    class: "q-gutter-x-md"
}
  , Cs = {
    class: "q-mt-md"
}
  , ks = be({
    __name: "SaveOrShareChoiceDialog",
    setup(e, {expose: s}) {
        const {t: l} = _e()
          , a = F(!1);
        let t;
        function n() {
            return a.value = !0,
            J("", "ShowSaveOrShareChoice"),
            new Promise(r => {
                t = r
            }
            )
        }
        function i(r) {
            J("", "MakeSaveOrShareChoice", r),
            t(r),
            a.value = !1
        }
        return s({
            choose: n
        }),
        (r, f) => (V(),
        X(Ye, {
            modelValue: a.value,
            "onUpdate:modelValue": f[2] || (f[2] = c => a.value = c)
        }, {
            default: u( () => [o(at, {
                style: {
                    width: "400px"
                }
            }, {
                default: u( () => [o(Ae, {
                    class: "row items-center justify-between text-h6",
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", null, [f[3] || (f[3] = m("i", {
                        class: "fas fa-save"
                    }, null, -1)), Q(" " + E(v(l)("savedialog.Save wheel")), 1)]), o(qt)]),
                    _: 1
                }), o(Ae, {
                    class: "q-gutter-y-md"
                }, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        padding: "lg",
                        onClick: f[0] || (f[0] = c => i("share")),
                        style: {
                            width: "100%"
                        }
                    }, {
                        default: u( () => [m("div", null, [o(De, {
                            name: "fas fa-share-alt",
                            size: "4em"
                        }), m("div", Fs, E(v(l)("savedialog.Update your shared wheel")), 1)])]),
                        _: 1
                    }), o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "grey-7",
                        padding: "sm",
                        onClick: f[1] || (f[1] = c => i("save")),
                        style: {
                            width: "100%"
                        }
                    }, {
                        default: u( () => [m("div", Ss, [o(De, {
                            name: "fas fa-save",
                            size: "4em"
                        }), m("span", Cs, E(v(l)("savedialog.Save as a private wheel")), 1)])]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , xs = {
    class: "text-h6"
}
  , Ds = {
    __name: "ShareDialogInfo",
    setup(e, {expose: s}) {
        const {t: l} = _e()
          , a = F(!1);
        let t;
        async function n() {
            return J("Wheel", "ShowShareDialog"),
            a.value = !0,
            new Promise( (f, c) => {
                t = f
            }
            )
        }
        function i() {
            t({
                openShareSettings: !0
            }),
            a.value = !1
        }
        function r() {
            t({
                openShareSettings: !1
            }),
            a.value = !1
        }
        return s({
            show: n
        }),
        (f, c) => {
            const d = vl("router-link");
            return V(),
            X(Ye, {
                modelValue: a.value,
                "onUpdate:modelValue": c[0] || (c[0] = g => a.value = g)
            }, {
                default: u( () => [o(at, {
                    style: {
                        width: "640px"
                    }
                }, {
                    default: u( () => [o(Ae, {
                        style: {
                            "background-color": "#00000020"
                        }
                    }, {
                        default: u( () => [m("div", xs, [c[1] || (c[1] = m("i", {
                            class: "fa fa-share-alt"
                        }, null, -1)), Q(" " + E(v(l)("sharedialog.Shareable link")), 1)])]),
                        _: 1
                    }), o(Ae, {
                        class: "q-gutter-md"
                    }, {
                        default: u( () => [m("div", null, E(v(l)("sharedialog.If you continue")), 1), m("div", null, E(v(l)("sharedialog.This link will work for anyone")), 1), m("div", null, E(v(l)("sharedialog.We want this website to be safe place for everyone")), 1), m("div", null, [o(d, {
                            to: "/terms"
                        }, {
                            default: u( () => [Q(E(v(l)("appInfo.Terms of service")), 1)]),
                            _: 1
                        })])]),
                        _: 1
                    }), o(dt, {
                        align: "right"
                    }, {
                        default: u( () => [o(O, {
                            unelevated: "",
                            "no-caps": "",
                            label: v(l)("common.Cancel"),
                            onClick: r
                        }, null, 8, ["label"]), o(O, {
                            unelevated: "",
                            "no-caps": "",
                            color: "primary",
                            label: v(l)("common.Continue"),
                            onClick: i
                        }, null, 8, ["label"])]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            }, 8, ["modelValue"])
        }
    }
}
  , As = {
    class: "text-h6"
}
  , Vs = {
    key: 0,
    class: "flex f-col gap-sm"
}
  , Es = {
    class: "flex f-col gap-sm"
}
  , $s = {
    class: "flex f-col gap-sm"
}
  , Bs = {
    key: 1,
    class: "q-gutter-y-sm"
}
  , Ts = {
    for: "wheelDescriptionField"
}
  , Is = be({
    __name: "ShareDialogSettings",
    setup(e, {expose: s}) {
        const l = Oe()
          , {t: a} = _e()
          , t = F(!1)
          , n = F(null)
          , i = F("")
          , r = F("")
          , f = F(!1)
          , c = h({
            get: () => l.showTitle,
            set: S => l.setShowTitle(S)
        })
          , d = h( () => `${window.location.origin}/${l.path}`)
          , g = F("copyable");
        let p;
        async function y() {
            return f.value = !!(l.path && l.shareMode !== "private"),
            i.value = l.wheelTitle,
            r.value = l.wheelDescription,
            g.value = "copyable",
            t.value = !0,
            new Promise(S => {
                p = S
            }
            )
        }
        async function x() {
            if (I())
                if (g.value === "gallery") {
                    const S = a("sharedialog.You are about to publish your wheel to the public gallery");
                    await al(a, S) && w()
                } else
                    w()
        }
        function w() {
            p({
                shareMode: g.value,
                updateExistingWheel: f.value,
                wheelTitle: i.value,
                wheelDescription: r.value
            }),
            t.value = !1
        }
        function T() {
            p(null),
            t.value = !1
        }
        function I() {
            return n.value.validate(),
            !n.value.hasError
        }
        return s({
            askUserForSettings: y
        }),
        (S, C) => (V(),
        X(Ye, {
            modelValue: t.value,
            "onUpdate:modelValue": C[8] || (C[8] = D => t.value = D),
            onShow: C[9] || (C[9] = D => n.value.select())
        }, {
            default: u( () => [o(at, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [o(Ae, {
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", As, [C[10] || (C[10] = m("i", {
                        class: "fa fa-share-alt"
                    }, null, -1)), Q(" " + E(v(a)("sharedialog.Shareable link")), 1)])]),
                    _: 1
                }), o(Ae, {
                    class: "flex f-col gap"
                }, {
                    default: u( () => [v(l).path && v(l).shareMode !== "private" ? (V(),
                    Z("div", Vs, [m("div", null, E(v(a)("sharedialog.Update your existing shared wheel")), 1), o(xt, {
                        modelValue: f.value,
                        "onUpdate:modelValue": C[0] || (C[0] = D => f.value = D),
                        dense: "",
                        val: !0,
                        label: v(a)("sharedialog.Update my existing shared wheel at", {
                            url: d.value
                        })
                    }, null, 8, ["modelValue", "label"]), o(xt, {
                        modelValue: f.value,
                        "onUpdate:modelValue": C[1] || (C[1] = D => f.value = D),
                        dense: "",
                        val: !1,
                        label: v(a)("sharedialog.Create a new shared wheel")
                    }, null, 8, ["modelValue", "label"])])) : ye("", !0), m("div", Es, [o(lt, {
                        id: "wheelTitleField",
                        modelValue: i.value,
                        "onUpdate:modelValue": C[2] || (C[2] = D => i.value = D),
                        filled: "",
                        dense: "",
                        label: v(a)("common.Wheel title"),
                        "hide-bottom-space": "",
                        rules: [D => D.length > 0 || v(a)("sharedialog.Your wheel must have a title")],
                        ref_key: "wheelTitleField",
                        ref: n,
                        maxlength: "50",
                        onKeyup: el(x, ["native", "enter"])
                    }, null, 8, ["modelValue", "label", "rules"]), o(Ge, {
                        modelValue: c.value,
                        "onUpdate:modelValue": C[3] || (C[3] = D => c.value = D)
                    }, {
                        default: u( () => [Q(E(v(a)("sharedialog.Show title to people")), 1)]),
                        _: 1
                    }, 8, ["modelValue"])]), m("div", $s, [m("div", null, E(v(a)("sharedialog.Visibility")), 1), o(xt, {
                        modelValue: g.value,
                        "onUpdate:modelValue": C[4] || (C[4] = D => g.value = D),
                        dense: "",
                        val: "spin-only",
                        label: v(a)("sharedialog.Anyone with the link can spin the wheel")
                    }, null, 8, ["modelValue", "label"]), o(xt, {
                        modelValue: g.value,
                        "onUpdate:modelValue": C[5] || (C[5] = D => g.value = D),
                        dense: "",
                        val: "copyable",
                        label: v(a)("sharedialog.Anyone with the link can spin and copy the wheel")
                    }, null, 8, ["modelValue", "label"]), o(xt, {
                        modelValue: g.value,
                        "onUpdate:modelValue": C[6] || (C[6] = D => g.value = D),
                        dense: "",
                        val: "gallery",
                        label: v(a)("sharedialog.This wheel would be useful")
                    }, null, 8, ["modelValue", "label"])]), g.value === "gallery" ? (V(),
                    Z("div", Bs, [m("label", Ts, E(v(a)("common.Wheel description")), 1), o(lt, {
                        type: "textarea",
                        modelValue: r.value,
                        "onUpdate:modelValue": C[7] || (C[7] = D => r.value = D),
                        filled: "",
                        dense: "",
                        maxlength: "200",
                        rows: "3",
                        id: "wheelDescriptionField"
                    }, null, 8, ["modelValue"])])) : ye("", !0)]),
                    _: 1
                }), o(dt, {
                    align: "right"
                }, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(a)("common.Cancel"),
                        onClick: T
                    }, null, 8, ["label"]), o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(a)("common.Continue"),
                        onClick: x
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , qs = {
    class: "text-h6"
}
  , Ws = {
    class: "row q-gutter-sm"
}
  , Ps = {
    class: "col-grow"
}
  , zs = {
    class: "col-shrink"
}
  , Ls = be({
    __name: "ShareDialogLink",
    setup(e, {expose: s}) {
        const l = ft()
          , {t: a, locale: t} = _e()
          , n = It()
          , i = Oe()
          , r = F(!1)
          , f = F("");
        async function c(p, y) {
            l.loading.show();
            try {
                await n.userIsLoggedIn() || await n.logInAnonymously();
                let x = i.path;
                y ? await n.updateWheel(i.path, Kl(i.wheelConfig.clone()), p) : (x = await n.shareWheel(Kl(i.wheelConfig.clone()), p),
                i.setPath(x)),
                i.setShareMode(p),
                i.unsavedChanges = !1;
                const w = eo(location.host, t.value, x);
                f.value = `${location.protocol}//${w}`,
                J("Wheel", "CreateSharableLink"),
                r.value = !0
            } catch (x) {
                if (ln(x).includes("family")) {
                    const w = a("sharedialog.The wheel includes text that");
                    yn(a, w)
                } else
                    Ne(a, x);
                Ue("CreateSharableLinkError", x)
            }
            l.loading.hide()
        }
        async function d() {
            await navigator.clipboard.writeText(f.value),
            J("Wheel", "CopySharableLink");
            const p = a("sharedialog.Link copied to the clipboard");
            $t(p)
        }
        function g() {
            r.value = !1
        }
        return s({
            share: c
        }),
        (p, y) => (V(),
        X(Ye, {
            modelValue: r.value,
            "onUpdate:modelValue": y[1] || (y[1] = x => r.value = x)
        }, {
            default: u( () => [o(at, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [o(Ae, {
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", qs, [y[2] || (y[2] = m("i", {
                        class: "fa fa-share-alt"
                    }, null, -1)), Q(" " + E(v(a)("sharedialog.Shareable link")), 1)])]),
                    _: 1
                }), o(Ae, {
                    class: "q-gutter-y-md"
                }, {
                    default: u( () => [m("div", null, E(v(a)("sharedialog.Link to this wheel")), 1), m("div", Ws, [m("div", Ps, [o(lt, {
                        id: "sharableLinkText",
                        modelValue: f.value,
                        "onUpdate:modelValue": y[0] || (y[0] = x => f.value = x),
                        readonly: "",
                        dense: "",
                        standout: "",
                        style: {
                            "min-width": "300px"
                        }
                    }, null, 8, ["modelValue"])]), m("div", zs, [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "positive",
                        label: v(a)("sharedialog.Copy link"),
                        onClick: d
                    }, null, 8, ["label"])])]), m("div", null, E(v(a)("sharedialog.This link will work for anyone")), 1)]),
                    _: 1
                }), o(dt, {
                    align: "right"
                }, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(a)("common.Close"),
                        onClick: g
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , ma = {
    left: !0,
    right: !0,
    up: !0,
    down: !0,
    horizontal: !0,
    vertical: !0
}
  , Ms = Object.keys(ma);
ma.all = !0;
function Cl(e) {
    const s = {};
    for (const l of Ms)
        e[l] === !0 && (s[l] = !0);
    return Object.keys(s).length === 0 ? ma : (s.horizontal === !0 ? s.left = s.right = !0 : s.left === !0 && s.right === !0 && (s.horizontal = !0),
    s.vertical === !0 ? s.up = s.down = !0 : s.up === !0 && s.down === !0 && (s.vertical = !0),
    s.horizontal === !0 && s.vertical === !0 && (s.all = !0),
    s)
}
const Us = ["INPUT", "TEXTAREA"];
function kl(e, s) {
    return s.event === void 0 && e.target !== void 0 && e.target.draggable !== !0 && typeof s.handler == "function" && Us.includes(e.target.nodeName.toUpperCase()) === !1 && (e.qClonedBy === void 0 || e.qClonedBy.indexOf(s.uid) === -1)
}
function Rl(e, s, l) {
    const a = tl(e);
    let t, n = a.left - s.event.x, i = a.top - s.event.y, r = Math.abs(n), f = Math.abs(i);
    const c = s.direction;
    c.horizontal === !0 && c.vertical !== !0 ? t = n < 0 ? "left" : "right" : c.horizontal !== !0 && c.vertical === !0 ? t = i < 0 ? "up" : "down" : c.up === !0 && i < 0 ? (t = "up",
    r > f && (c.left === !0 && n < 0 ? t = "left" : c.right === !0 && n > 0 && (t = "right"))) : c.down === !0 && i > 0 ? (t = "down",
    r > f && (c.left === !0 && n < 0 ? t = "left" : c.right === !0 && n > 0 && (t = "right"))) : c.left === !0 && n < 0 ? (t = "left",
    r < f && (c.up === !0 && i < 0 ? t = "up" : c.down === !0 && i > 0 && (t = "down"))) : c.right === !0 && n > 0 && (t = "right",
    r < f && (c.up === !0 && i < 0 ? t = "up" : c.down === !0 && i > 0 && (t = "down")));
    let d = !1;
    if (t === void 0 && l === !1) {
        if (s.event.isFirst === !0 || s.event.lastDir === void 0)
            return {};
        t = s.event.lastDir,
        d = !0,
        t === "left" || t === "right" ? (a.left -= n,
        r = 0,
        n = 0) : (a.top -= i,
        f = 0,
        i = 0)
    }
    return {
        synthetic: d,
        payload: {
            evt: e,
            touch: s.event.mouse !== !0,
            mouse: s.event.mouse === !0,
            position: a,
            direction: t,
            isFirst: s.event.isFirst,
            isFinal: l === !0,
            duration: Date.now() - s.event.time,
            distance: {
                x: r,
                y: f
            },
            offset: {
                x: n,
                y: i
            },
            delta: {
                x: a.left - s.event.lastX,
                y: a.top - s.event.lastY
            }
        }
    }
}
let Os = 0;
const xl = an({
    name: "touch-pan",
    beforeMount(e, {value: s, modifiers: l}) {
        if (l.mouse !== !0 && yt.has.touch !== !0)
            return;
        function a(n, i) {
            l.mouse === !0 && i === !0 ? rt(n) : (l.stop === !0 && nt(n),
            l.prevent === !0 && Kt(n))
        }
        const t = {
            uid: "qvtp_" + Os++,
            handler: s,
            modifiers: l,
            direction: Cl(l),
            noop: ia,
            mouseStart(n) {
                kl(n, t) && nn(n) && (Dt(t, "temp", [[document, "mousemove", "move", "notPassiveCapture"], [document, "mouseup", "end", "passiveCapture"]]),
                t.start(n, !0))
            },
            touchStart(n) {
                if (kl(n, t)) {
                    const i = n.target;
                    Dt(t, "temp", [[i, "touchmove", "move", "notPassiveCapture"], [i, "touchcancel", "end", "passiveCapture"], [i, "touchend", "end", "passiveCapture"]]),
                    t.start(n)
                }
            },
            start(n, i) {
                if (yt.is.firefox === !0 && Yt(e, !0),
                t.lastEvt = n,
                i === !0 || l.stop === !0) {
                    if (t.direction.all !== !0 && (i !== !0 || t.modifiers.mouseAllDir !== !0 && t.modifiers.mousealldir !== !0)) {
                        const c = n.type.indexOf("mouse") !== -1 ? new MouseEvent(n.type,n) : new TouchEvent(n.type,n);
                        n.defaultPrevented === !0 && Kt(c),
                        n.cancelBubble === !0 && nt(c),
                        Object.assign(c, {
                            qKeyEvent: n.qKeyEvent,
                            qClickOutside: n.qClickOutside,
                            qAnchorHandled: n.qAnchorHandled,
                            qClonedBy: n.qClonedBy === void 0 ? [t.uid] : n.qClonedBy.concat(t.uid)
                        }),
                        t.initialEvent = {
                            target: n.target,
                            event: c
                        }
                    }
                    nt(n)
                }
                const {left: r, top: f} = tl(n);
                t.event = {
                    x: r,
                    y: f,
                    time: Date.now(),
                    mouse: i === !0,
                    detected: !1,
                    isFirst: !0,
                    isFinal: !1,
                    lastX: r,
                    lastY: f
                }
            },
            move(n) {
                if (t.event === void 0)
                    return;
                const i = tl(n)
                  , r = i.left - t.event.x
                  , f = i.top - t.event.y;
                if (r === 0 && f === 0)
                    return;
                t.lastEvt = n;
                const c = t.event.mouse === !0
                  , d = () => {
                    a(n, c);
                    let y;
                    l.preserveCursor !== !0 && l.preservecursor !== !0 && (y = document.documentElement.style.cursor || "",
                    document.documentElement.style.cursor = "grabbing"),
                    c === !0 && document.body.classList.add("no-pointer-events--children"),
                    document.body.classList.add("non-selectable"),
                    _n(),
                    t.styleCleanup = x => {
                        if (t.styleCleanup = void 0,
                        y !== void 0 && (document.documentElement.style.cursor = y),
                        document.body.classList.remove("non-selectable"),
                        c === !0) {
                            const w = () => {
                                document.body.classList.remove("no-pointer-events--children")
                            }
                            ;
                            x !== void 0 ? setTimeout( () => {
                                w(),
                                x()
                            }
                            , 50) : w()
                        } else
                            x !== void 0 && x()
                    }
                }
                ;
                if (t.event.detected === !0) {
                    t.event.isFirst !== !0 && a(n, t.event.mouse);
                    const {payload: y, synthetic: x} = Rl(n, t, !1);
                    y !== void 0 && (t.handler(y) === !1 ? t.end(n) : (t.styleCleanup === void 0 && t.event.isFirst === !0 && d(),
                    t.event.lastX = y.position.left,
                    t.event.lastY = y.position.top,
                    t.event.lastDir = x === !0 ? void 0 : y.direction,
                    t.event.isFirst = !1));
                    return
                }
                if (t.direction.all === !0 || c === !0 && (t.modifiers.mouseAllDir === !0 || t.modifiers.mousealldir === !0)) {
                    d(),
                    t.event.detected = !0,
                    t.move(n);
                    return
                }
                const g = Math.abs(r)
                  , p = Math.abs(f);
                g !== p && (t.direction.horizontal === !0 && g > p || t.direction.vertical === !0 && g < p || t.direction.up === !0 && g < p && f < 0 || t.direction.down === !0 && g < p && f > 0 || t.direction.left === !0 && g > p && r < 0 || t.direction.right === !0 && g > p && r > 0 ? (t.event.detected = !0,
                t.move(n)) : t.end(n, !0))
            },
            end(n, i) {
                if (t.event !== void 0) {
                    if (Gt(t, "temp"),
                    yt.is.firefox === !0 && Yt(e, !1),
                    i === !0)
                        t.styleCleanup?.(),
                        t.event.detected !== !0 && t.initialEvent !== void 0 && t.initialEvent.target.dispatchEvent(t.initialEvent.event);
                    else if (t.event.detected === !0) {
                        t.event.isFirst === !0 && t.handler(Rl(n === void 0 ? t.lastEvt : n, t).payload);
                        const {payload: r} = Rl(n === void 0 ? t.lastEvt : n, t, !0)
                          , f = () => {
                            t.handler(r)
                        }
                        ;
                        t.styleCleanup !== void 0 ? t.styleCleanup(f) : f()
                    }
                    t.event = void 0,
                    t.initialEvent = void 0,
                    t.lastEvt = void 0
                }
            }
        };
        if (e.__qtouchpan = t,
        l.mouse === !0) {
            const n = l.mouseCapture === !0 || l.mousecapture === !0 ? "Capture" : "";
            Dt(t, "main", [[e, "mousedown", "mouseStart", `passive${n}`]])
        }
        yt.has.touch === !0 && Dt(t, "main", [[e, "touchstart", "touchStart", `passive${l.capture === !0 ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]])
    },
    updated(e, s) {
        const l = e.__qtouchpan;
        l !== void 0 && (s.oldValue !== s.value && (typeof value != "function" && l.end(),
        l.handler = s.value),
        l.direction = Cl(s.modifiers))
    },
    beforeUnmount(e) {
        const s = e.__qtouchpan;
        s !== void 0 && (s.event !== void 0 && s.end(),
        Gt(s, "main"),
        Gt(s, "temp"),
        yt.is.firefox === !0 && Yt(e, !1),
        s.styleCleanup?.(),
        delete e.__qtouchpan)
    }
})
  , qa = "q-slider__marker-labels"
  , Rs = e => ({
    value: e
})
  , Ns = ({marker: e}) => A("div", {
    key: e.value,
    style: e.style,
    class: e.classes
}, e.label)
  , Cn = [34, 37, 40, 33, 39, 38]
  , js = {
    ...fl,
    ...Vl,
    min: {
        type: Number,
        default: 0
    },
    max: {
        type: Number,
        default: 100
    },
    innerMin: Number,
    innerMax: Number,
    step: {
        type: Number,
        default: 1,
        validator: e => e >= 0
    },
    snap: Boolean,
    vertical: Boolean,
    reverse: Boolean,
    color: String,
    markerLabelsClass: String,
    label: Boolean,
    labelColor: String,
    labelTextColor: String,
    labelAlways: Boolean,
    switchLabelSide: Boolean,
    markers: [Boolean, Number],
    markerLabels: [Boolean, Array, Object, Function],
    switchMarkerLabelsSide: Boolean,
    trackImg: String,
    trackColor: String,
    innerTrackImg: String,
    innerTrackColor: String,
    selectionColor: String,
    selectionImg: String,
    thumbSize: {
        type: String,
        default: "20px"
    },
    trackSize: {
        type: String,
        default: "4px"
    },
    disable: Boolean,
    readonly: Boolean,
    dense: Boolean,
    tabindex: [String, Number],
    thumbColor: String,
    thumbPath: {
        type: String,
        default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"
    }
}
  , Hs = ["pan", "update:modelValue", "change"];
function Qs({updateValue: e, updatePosition: s, getDragging: l, formAttrs: a}) {
    const {props: t, emit: n, slots: i, proxy: {$q: r}} = ct()
      , f = ml(t, r)
      , c = on(a)
      , d = F(!1)
      , g = F(!1)
      , p = F(!1)
      , y = F(!1)
      , x = h( () => t.vertical === !0 ? "--v" : "--h")
      , w = h( () => "-" + (t.switchLabelSide === !0 ? "switched" : "standard"))
      , T = h( () => t.vertical === !0 ? t.reverse === !0 : t.reverse !== (r.lang.rtl === !0))
      , I = h( () => isNaN(t.innerMin) === !0 || t.innerMin < t.min ? t.min : t.innerMin)
      , S = h( () => isNaN(t.innerMax) === !0 || t.innerMax > t.max ? t.max : t.innerMax)
      , C = h( () => t.disable !== !0 && t.readonly !== !0 && I.value < S.value)
      , D = h( () => {
        if (t.step === 0)
            return de => de;
        const N = (String(t.step).trim().split(".")[1] || "").length;
        return de => parseFloat(de.toFixed(N))
    }
    )
      , R = h( () => t.step === 0 ? 1 : t.step)
      , P = h( () => C.value === !0 ? t.tabindex || 0 : -1)
      , W = h( () => t.max - t.min)
      , U = h( () => S.value - I.value)
      , H = h( () => Je(I.value))
      , $ = h( () => Je(S.value))
      , M = h( () => t.vertical === !0 ? T.value === !0 ? "bottom" : "top" : T.value === !0 ? "right" : "left")
      , Y = h( () => t.vertical === !0 ? "height" : "width")
      , ee = h( () => t.vertical === !0 ? "width" : "height")
      , b = h( () => t.vertical === !0 ? "vertical" : "horizontal")
      , k = h( () => {
        const N = {
            role: "slider",
            "aria-valuemin": I.value,
            "aria-valuemax": S.value,
            "aria-orientation": b.value,
            "data-step": t.step
        };
        return t.disable === !0 ? N["aria-disabled"] = "true" : t.readonly === !0 && (N["aria-readonly"] = "true"),
        N
    }
    )
      , z = h( () => `q-slider q-slider${x.value} q-slider--${d.value === !0 ? "" : "in"}active inline no-wrap ` + (t.vertical === !0 ? "row" : "column") + (t.disable === !0 ? " disabled" : " q-slider--enabled" + (C.value === !0 ? " q-slider--editable" : "")) + (p.value === "both" ? " q-slider--focus" : "") + (t.label || t.labelAlways === !0 ? " q-slider--label" : "") + (t.labelAlways === !0 ? " q-slider--label-always" : "") + (f.value === !0 ? " q-slider--dark" : "") + (t.dense === !0 ? " q-slider--dense q-slider--dense" + x.value : ""));
    function L(N) {
        const de = "q-slider__" + N;
        return `${de} ${de}${x.value} ${de}${x.value}${w.value}`
    }
    function re(N) {
        const de = "q-slider__" + N;
        return `${de} ${de}${x.value}`
    }
    const ke = h( () => {
        const N = t.selectionColor || t.color;
        return "q-slider__selection absolute" + (N !== void 0 ? ` text-${N}` : "")
    }
    )
      , Le = h( () => re("markers") + " absolute overflow-hidden")
      , B = h( () => re("track-container"))
      , G = h( () => L("pin"))
      , ce = h( () => L("label"))
      , Ve = h( () => L("text-container"))
      , $e = h( () => L("marker-labels-container") + (t.markerLabelsClass !== void 0 ? ` ${t.markerLabelsClass}` : ""))
      , se = h( () => "q-slider__track relative-position no-outline" + (t.trackColor !== void 0 ? ` bg-${t.trackColor}` : ""))
      , pe = h( () => {
        const N = {
            [ee.value]: t.trackSize
        };
        return t.trackImg !== void 0 && (N.backgroundImage = `url(${t.trackImg}) !important`),
        N
    }
    )
      , Te = h( () => "q-slider__inner absolute" + (t.innerTrackColor !== void 0 ? ` bg-${t.innerTrackColor}` : ""))
      , ve = h( () => {
        const N = $.value - H.value
          , de = {
            [M.value]: `${100 * H.value}%`,
            [Y.value]: N === 0 ? "2px" : `${100 * N}%`
        };
        return t.innerTrackImg !== void 0 && (de.backgroundImage = `url(${t.innerTrackImg}) !important`),
        de
    }
    );
    function je(N) {
        const {min: de, max: Se, step: Pe} = t;
        let et = de + N * (Se - de);
        if (Pe > 0) {
            const pt = (et - I.value) % Pe;
            et += (Math.abs(pt) >= Pe / 2 ? (pt < 0 ? -1 : 1) * Pe : 0) - pt
        }
        return et = D.value(et),
        wt(et, I.value, S.value)
    }
    function Je(N) {
        return W.value === 0 ? 0 : (N - t.min) / W.value
    }
    function q(N, de) {
        const Se = tl(N)
          , Pe = t.vertical === !0 ? wt((Se.top - de.top) / de.height, 0, 1) : wt((Se.left - de.left) / de.width, 0, 1);
        return wt(T.value === !0 ? 1 - Pe : Pe, H.value, $.value)
    }
    const oe = h( () => to(t.markers) === !0 ? t.markers : R.value)
      , fe = h( () => {
        const N = []
          , de = oe.value
          , Se = t.max;
        let Pe = t.min;
        do
            N.push(Pe),
            Pe += de;
        while (Pe < Se);
        return N.push(Se),
        N
    }
    )
      , me = h( () => {
        const N = ` ${qa}${x.value}-`;
        return qa + `${N}${t.switchMarkerLabelsSide === !0 ? "switched" : "standard"}${N}${T.value === !0 ? "rtl" : "ltr"}`
    }
    )
      , Be = h( () => t.markerLabels === !1 ? null : Ie(t.markerLabels).map( (N, de) => ({
        index: de,
        value: N.value,
        label: N.label || N.value,
        classes: me.value + (N.classes !== void 0 ? " " + N.classes : ""),
        style: {
            ...Ze(N.value),
            ...N.style || {}
        }
    })))
      , ge = h( () => ({
        markerList: Be.value,
        markerMap: Re.value,
        classes: me.value,
        getStyle: Ze
    }))
      , Me = h( () => {
        const N = U.value === 0 ? "2px" : 100 * oe.value / U.value;
        return {
            ...ve.value,
            backgroundSize: t.vertical === !0 ? `2px ${N}%` : `${N}% 2px`
        }
    }
    );
    function Ie(N) {
        if (N === !1)
            return null;
        if (N === !0)
            return fe.value.map(Rs);
        if (typeof N == "function")
            return fe.value.map(Se => {
                const Pe = N(Se);
                return Wl(Pe) === !0 ? {
                    ...Pe,
                    value: Se
                } : {
                    value: Se,
                    label: Pe
                }
            }
            );
        const de = ({value: Se}) => Se >= t.min && Se <= t.max;
        return Array.isArray(N) === !0 ? N.map(Se => Wl(Se) === !0 ? Se : {
            value: Se
        }).filter(de) : Object.keys(N).map(Se => {
            const Pe = N[Se]
              , et = Number(Se);
            return Wl(Pe) === !0 ? {
                ...Pe,
                value: et
            } : {
                value: et,
                label: Pe
            }
        }
        ).filter(de)
    }
    function Ze(N) {
        return {
            [M.value]: `${100 * (N - t.min) / W.value}%`
        }
    }
    const Re = h( () => {
        if (t.markerLabels === !1)
            return null;
        const N = {};
        return Be.value.forEach(de => {
            N[de.value] = de
        }
        ),
        N
    }
    );
    function j() {
        if (i["marker-label-group"] !== void 0)
            return i["marker-label-group"](ge.value);
        const N = i["marker-label"] || Ns;
        return Be.value.map(de => N({
            marker: de,
            ...ge.value
        }))
    }
    const ae = h( () => [[xl, K, void 0, {
        [b.value]: !0,
        prevent: !0,
        stop: !0,
        mouse: !0,
        mouseAllDir: !0
    }]]);
    function K(N) {
        N.isFinal === !0 ? (y.value !== void 0 && (s(N.evt),
        N.touch === !0 && e(!0),
        y.value = void 0,
        n("pan", "end")),
        d.value = !1,
        p.value = !1) : N.isFirst === !0 ? (y.value = l(N.evt),
        s(N.evt),
        e(),
        d.value = !0,
        n("pan", "start")) : (s(N.evt),
        e())
    }
    function ie() {
        p.value = !1
    }
    function Ee(N) {
        s(N, l(N)),
        e(),
        g.value = !0,
        d.value = !0,
        document.addEventListener("mouseup", Fe, !0)
    }
    function Fe() {
        g.value = !1,
        d.value = !1,
        e(!0),
        ie(),
        document.removeEventListener("mouseup", Fe, !0)
    }
    function xe(N) {
        s(N, l(N)),
        e(!0)
    }
    function He(N) {
        Cn.includes(N.keyCode) && e(!0)
    }
    function Qe(N) {
        if (t.vertical === !0)
            return null;
        const de = r.lang.rtl !== t.reverse ? 1 - N : N;
        return {
            transform: `translateX(calc(${2 * de - 1} * ${t.thumbSize} / 2 + ${50 - 100 * de}%))`
        }
    }
    function mt(N) {
        const de = h( () => g.value === !1 && (p.value === N.focusValue || p.value === "both") ? " q-slider--focus" : "")
          , Se = h( () => `q-slider__thumb q-slider__thumb${x.value} q-slider__thumb${x.value}-${T.value === !0 ? "rtl" : "ltr"} absolute non-selectable` + de.value + (N.thumbColor.value !== void 0 ? ` text-${N.thumbColor.value}` : ""))
          , Pe = h( () => ({
            width: t.thumbSize,
            height: t.thumbSize,
            [M.value]: `${100 * N.ratio.value}%`,
            zIndex: p.value === N.focusValue ? 2 : void 0
        }))
          , et = h( () => N.labelColor.value !== void 0 ? ` text-${N.labelColor.value}` : "")
          , pt = h( () => Qe(N.ratio.value))
          , Ut = h( () => "q-slider__text" + (N.labelTextColor.value !== void 0 ? ` text-${N.labelTextColor.value}` : ""));
        return () => {
            const Ot = [A("svg", {
                class: "q-slider__thumb-shape absolute-full",
                viewBox: "0 0 20 20",
                "aria-hidden": "true"
            }, [A("path", {
                d: t.thumbPath
            })]), A("div", {
                class: "q-slider__focus-ring fit"
            })];
            return (t.label === !0 || t.labelAlways === !0) && (Ot.push(A("div", {
                class: G.value + " absolute fit no-pointer-events" + et.value
            }, [A("div", {
                class: ce.value,
                style: {
                    minWidth: t.thumbSize
                }
            }, [A("div", {
                class: Ve.value,
                style: pt.value
            }, [A("span", {
                class: Ut.value
            }, N.label.value)])])])),
            t.name !== void 0 && t.disable !== !0 && c(Ot, "push")),
            A("div", {
                class: Se.value,
                style: Pe.value,
                ...N.getNodeData()
            }, Ot)
        }
    }
    function kt(N, de, Se, Pe) {
        const et = [];
        t.innerTrackColor !== "transparent" && et.push(A("div", {
            key: "inner",
            class: Te.value,
            style: ve.value
        })),
        t.selectionColor !== "transparent" && et.push(A("div", {
            key: "selection",
            class: ke.value,
            style: N.value
        })),
        t.markers !== !1 && et.push(A("div", {
            key: "marker",
            class: Le.value,
            style: Me.value
        })),
        Pe(et);
        const pt = [ca("div", {
            key: "trackC",
            class: B.value,
            tabindex: de.value,
            ...Se.value
        }, [A("div", {
            class: se.value,
            style: pe.value
        }, et)], "slide", C.value, () => ae.value)];
        if (t.markerLabels !== !1) {
            const Ut = t.switchMarkerLabelsSide === !0 ? "unshift" : "push";
            pt[Ut](A("div", {
                key: "markerL",
                class: $e.value
            }, j()))
        }
        return pt
    }
    return Tt( () => {
        document.removeEventListener("mouseup", Fe, !0)
    }
    ),
    {
        state: {
            active: d,
            focus: p,
            preventFocus: g,
            dragging: y,
            editable: C,
            classes: z,
            tabindex: P,
            attributes: k,
            roundValueFn: D,
            keyStep: R,
            trackLen: W,
            innerMin: I,
            innerMinRatio: H,
            innerMax: S,
            innerMaxRatio: $,
            positionProp: M,
            sizeProp: Y,
            isReversed: T
        },
        methods: {
            onActivate: Ee,
            onMobileClick: xe,
            onBlur: ie,
            onKeyup: He,
            getContent: kt,
            getThumbRenderFn: mt,
            convertRatioToModel: je,
            convertModelToRatio: Je,
            getDraggingRatio: q
        }
    }
}
const Ks = () => ({})
  , _t = it({
    name: "QSlider",
    props: {
        ...js,
        modelValue: {
            required: !0,
            default: null,
            validator: e => typeof e == "number" || e === null
        },
        labelValue: [String, Number]
    },
    emits: Hs,
    setup(e, {emit: s}) {
        const {proxy: {$q: l}} = ct()
          , {state: a, methods: t} = Qs({
            updateValue: x,
            updatePosition: T,
            getDragging: w,
            formAttrs: lo(e)
        })
          , n = F(null)
          , i = F(0)
          , r = F(0);
        function f() {
            r.value = e.modelValue === null ? a.innerMin.value : wt(e.modelValue, a.innerMin.value, a.innerMax.value)
        }
        he( () => `${e.modelValue}|${a.innerMin.value}|${a.innerMax.value}`, f),
        f();
        const c = h( () => t.convertModelToRatio(r.value))
          , d = h( () => a.active.value === !0 ? i.value : c.value)
          , g = h( () => {
            const C = {
                [a.positionProp.value]: `${100 * a.innerMinRatio.value}%`,
                [a.sizeProp.value]: `${100 * (d.value - a.innerMinRatio.value)}%`
            };
            return e.selectionImg !== void 0 && (C.backgroundImage = `url(${e.selectionImg}) !important`),
            C
        }
        )
          , p = t.getThumbRenderFn({
            focusValue: !0,
            getNodeData: Ks,
            ratio: d,
            label: h( () => e.labelValue !== void 0 ? e.labelValue : r.value),
            thumbColor: h( () => e.thumbColor || e.color),
            labelColor: h( () => e.labelColor),
            labelTextColor: h( () => e.labelTextColor)
        })
          , y = h( () => a.editable.value !== !0 ? {} : l.platform.is.mobile === !0 ? {
            onClick: t.onMobileClick
        } : {
            onMousedown: t.onActivate,
            onFocus: I,
            onBlur: t.onBlur,
            onKeydown: S,
            onKeyup: t.onKeyup
        });
        function x(C) {
            r.value !== e.modelValue && s("update:modelValue", r.value),
            C === !0 && s("change", r.value)
        }
        function w() {
            return n.value.getBoundingClientRect()
        }
        function T(C, D=a.dragging.value) {
            const R = t.getDraggingRatio(C, D);
            r.value = t.convertRatioToModel(R),
            i.value = e.snap !== !0 || e.step === 0 ? R : t.convertModelToRatio(r.value)
        }
        function I() {
            a.focus.value = !0
        }
        function S(C) {
            if (Cn.includes(C.keyCode) === !1)
                return;
            rt(C);
            const D = ([34, 33].includes(C.keyCode) ? 10 : 1) * a.keyStep.value
              , R = ([34, 37, 40].includes(C.keyCode) ? -1 : 1) * (a.isReversed.value === !0 ? -1 : 1) * (e.vertical === !0 ? -1 : 1) * D;
            r.value = wt(a.roundValueFn.value(r.value + R), a.innerMin.value, a.innerMax.value),
            x()
        }
        return () => {
            const C = t.getContent(g, a.tabindex, y, D => {
                D.push(p())
            }
            );
            return A("div", {
                ref: n,
                class: a.classes.value + (e.modelValue === null ? " q-slider--no-value" : ""),
                ...a.attributes.value,
                "aria-valuenow": e.modelValue
            }, C)
        }
    }
});
function Gs(e) {
    const s = [.06, 6, 50];
    return typeof e == "string" && e.length && e.split(":").forEach( (l, a) => {
        const t = parseFloat(l);
        t && (s[a] = t)
    }
    ),
    s
}
const Ys = an({
    name: "touch-swipe",
    beforeMount(e, {value: s, arg: l, modifiers: a}) {
        if (a.mouse !== !0 && yt.has.touch !== !0)
            return;
        const t = a.mouseCapture === !0 ? "Capture" : ""
          , n = {
            handler: s,
            sensitivity: Gs(l),
            direction: Cl(a),
            noop: ia,
            mouseStart(i) {
                kl(i, n) && nn(i) && (Dt(n, "temp", [[document, "mousemove", "move", `notPassive${t}`], [document, "mouseup", "end", "notPassiveCapture"]]),
                n.start(i, !0))
            },
            touchStart(i) {
                if (kl(i, n)) {
                    const r = i.target;
                    Dt(n, "temp", [[r, "touchmove", "move", "notPassiveCapture"], [r, "touchcancel", "end", "notPassiveCapture"], [r, "touchend", "end", "notPassiveCapture"]]),
                    n.start(i)
                }
            },
            start(i, r) {
                yt.is.firefox === !0 && Yt(e, !0);
                const f = tl(i);
                n.event = {
                    x: f.left,
                    y: f.top,
                    time: Date.now(),
                    mouse: r === !0,
                    dir: !1
                }
            },
            move(i) {
                if (n.event === void 0)
                    return;
                if (n.event.dir !== !1) {
                    rt(i);
                    return
                }
                const r = Date.now() - n.event.time;
                if (r === 0)
                    return;
                const f = tl(i)
                  , c = f.left - n.event.x
                  , d = Math.abs(c)
                  , g = f.top - n.event.y
                  , p = Math.abs(g);
                if (n.event.mouse !== !0) {
                    if (d < n.sensitivity[1] && p < n.sensitivity[1]) {
                        n.end(i);
                        return
                    }
                } else if (window.getSelection().toString() !== "") {
                    n.end(i);
                    return
                } else if (d < n.sensitivity[2] && p < n.sensitivity[2])
                    return;
                const y = d / r
                  , x = p / r;
                n.direction.vertical === !0 && d < p && d < 100 && x > n.sensitivity[0] && (n.event.dir = g < 0 ? "up" : "down"),
                n.direction.horizontal === !0 && d > p && p < 100 && y > n.sensitivity[0] && (n.event.dir = c < 0 ? "left" : "right"),
                n.direction.up === !0 && d < p && g < 0 && d < 100 && x > n.sensitivity[0] && (n.event.dir = "up"),
                n.direction.down === !0 && d < p && g > 0 && d < 100 && x > n.sensitivity[0] && (n.event.dir = "down"),
                n.direction.left === !0 && d > p && c < 0 && p < 100 && y > n.sensitivity[0] && (n.event.dir = "left"),
                n.direction.right === !0 && d > p && c > 0 && p < 100 && y > n.sensitivity[0] && (n.event.dir = "right"),
                n.event.dir !== !1 ? (rt(i),
                n.event.mouse === !0 && (document.body.classList.add("no-pointer-events--children"),
                document.body.classList.add("non-selectable"),
                _n(),
                n.styleCleanup = w => {
                    n.styleCleanup = void 0,
                    document.body.classList.remove("non-selectable");
                    const T = () => {
                        document.body.classList.remove("no-pointer-events--children")
                    }
                    ;
                    w === !0 ? setTimeout(T, 50) : T()
                }
                ),
                n.handler({
                    evt: i,
                    touch: n.event.mouse !== !0,
                    mouse: n.event.mouse,
                    direction: n.event.dir,
                    duration: r,
                    distance: {
                        x: d,
                        y: p
                    }
                })) : n.end(i)
            },
            end(i) {
                n.event !== void 0 && (Gt(n, "temp"),
                yt.is.firefox === !0 && Yt(e, !1),
                n.styleCleanup?.(!0),
                i !== void 0 && n.event.dir !== !1 && rt(i),
                n.event = void 0)
            }
        };
        if (e.__qtouchswipe = n,
        a.mouse === !0) {
            const i = a.mouseCapture === !0 || a.mousecapture === !0 ? "Capture" : "";
            Dt(n, "main", [[e, "mousedown", "mouseStart", `passive${i}`]])
        }
        yt.has.touch === !0 && Dt(n, "main", [[e, "touchstart", "touchStart", `passive${a.capture === !0 ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]])
    },
    updated(e, s) {
        const l = e.__qtouchswipe;
        l !== void 0 && (s.oldValue !== s.value && (typeof s.value != "function" && l.end(),
        l.handler = s.value),
        l.direction = Cl(s.modifiers))
    },
    beforeUnmount(e) {
        const s = e.__qtouchswipe;
        s !== void 0 && (Gt(s, "main"),
        Gt(s, "temp"),
        yt.is.firefox === !0 && Yt(e, !1),
        s.styleCleanup?.(),
        delete e.__qtouchswipe)
    }
});
function kn() {
    let e = Object.create(null);
    return {
        getCache: (s, l) => e[s] === void 0 ? e[s] = typeof l == "function" ? l() : l : e[s],
        setCache(s, l) {
            e[s] = l
        },
        hasCache(s) {
            return Object.hasOwnProperty.call(e, s)
        },
        clearCache(s) {
            s !== void 0 ? delete e[s] : e = Object.create(null)
        }
    }
}
const Xs = {
    name: {
        required: !0
    },
    disable: Boolean
}
  , Wa = {
    setup(e, {slots: s}) {
        return () => A("div", {
            class: "q-panel scroll",
            role: "tabpanel"
        }, Bt(s.default))
    }
}
  , Js = {
    modelValue: {
        required: !0
    },
    animated: Boolean,
    infinite: Boolean,
    swipeable: Boolean,
    vertical: Boolean,
    transitionPrev: String,
    transitionNext: String,
    transitionDuration: {
        type: [String, Number],
        default: 300
    },
    keepAlive: Boolean,
    keepAliveInclude: [String, Array, RegExp],
    keepAliveExclude: [String, Array, RegExp],
    keepAliveMax: Number
}
  , Zs = ["update:modelValue", "beforeTransition", "transition"];
function er() {
    const {props: e, emit: s, proxy: l} = ct()
      , {getCache: a} = kn()
      , {registerTimeout: t} = Ql();
    let n, i;
    const r = F(null)
      , f = {
        value: null
    };
    function c(b) {
        const k = e.vertical === !0 ? "up" : "left";
        U((l.$q.lang.rtl === !0 ? -1 : 1) * (b.direction === k ? 1 : -1))
    }
    const d = h( () => [[Ys, c, void 0, {
        horizontal: e.vertical !== !0,
        vertical: e.vertical,
        mouse: !0
    }]])
      , g = h( () => e.transitionPrev || `slide-${e.vertical === !0 ? "down" : "right"}`)
      , p = h( () => e.transitionNext || `slide-${e.vertical === !0 ? "up" : "left"}`)
      , y = h( () => `--q-transition-duration: ${e.transitionDuration}ms`)
      , x = h( () => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue))
      , w = h( () => ({
        include: e.keepAliveInclude,
        exclude: e.keepAliveExclude,
        max: e.keepAliveMax
    }))
      , T = h( () => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
    he( () => e.modelValue, (b, k) => {
        const z = D(b) === !0 ? R(b) : -1;
        i !== !0 && W(z === -1 ? 0 : z < R(k) ? -1 : 1),
        f.value !== z && (f.value = z,
        s("beforeTransition", b, k),
        t( () => {
            s("transition", b, k)
        }
        , e.transitionDuration))
    }
    );
    function I() {
        U(1)
    }
    function S() {
        U(-1)
    }
    function C(b) {
        s("update:modelValue", b)
    }
    function D(b) {
        return b != null && b !== ""
    }
    function R(b) {
        return n.findIndex(k => k.props.name === b && k.props.disable !== "" && k.props.disable !== !0)
    }
    function P() {
        return n.filter(b => b.props.disable !== "" && b.props.disable !== !0)
    }
    function W(b) {
        const k = b !== 0 && e.animated === !0 && f.value !== -1 ? "q-transition--" + (b === -1 ? g.value : p.value) : null;
        r.value !== k && (r.value = k)
    }
    function U(b, k=f.value) {
        let z = k + b;
        for (; z !== -1 && z < n.length; ) {
            const L = n[z];
            if (L !== void 0 && L.props.disable !== "" && L.props.disable !== !0) {
                W(b),
                i = !0,
                s("update:modelValue", L.props.name),
                setTimeout( () => {
                    i = !1
                }
                );
                return
            }
            z += b
        }
        e.infinite === !0 && n.length !== 0 && k !== -1 && k !== n.length && U(b, b === -1 ? n.length : -1)
    }
    function H() {
        const b = R(e.modelValue);
        return f.value !== b && (f.value = b),
        !0
    }
    function $() {
        const b = D(e.modelValue) === !0 && H() && n[f.value];
        return e.keepAlive === !0 ? [A(no, w.value, [A(T.value === !0 ? a(x.value, () => ({
            ...Wa,
            name: x.value
        })) : Wa, {
            key: x.value,
            style: y.value
        }, () => b)])] : [A("div", {
            class: "q-panel scroll",
            style: y.value,
            key: x.value,
            role: "tabpanel"
        }, [b])]
    }
    function M() {
        if (n.length !== 0)
            return e.animated === !0 ? [A(wl, {
                name: r.value
            }, $)] : $()
    }
    function Y(b) {
        return n = ao(Bt(b.default, [])).filter(k => k.props !== null && k.props.slot === void 0 && D(k.props.name) === !0),
        n.length
    }
    function ee() {
        return n
    }
    return Object.assign(l, {
        next: I,
        previous: S,
        goTo: C
    }),
    {
        panelIndex: f,
        panelDirectives: d,
        updatePanelsList: Y,
        updatePanelIndex: H,
        getPanelContent: M,
        getEnabledPanels: P,
        getPanels: ee,
        isValidPanelName: D,
        keepAliveProps: w,
        needsUniqueKeepAliveWrapper: T,
        goToPanelByOffset: U,
        goToPanel: C,
        nextPanel: I,
        previousPanel: S
    }
}
const Et = it({
    name: "QTabPanel",
    props: Xs,
    setup(e, {slots: s}) {
        return () => A("div", {
            class: "q-tab-panel",
            role: "tabpanel"
        }, Bt(s.default))
    }
})
  , ga = it({
    name: "QTabPanels",
    props: {
        ...Js,
        ...fl
    },
    emits: Zs,
    setup(e, {slots: s}) {
        const l = ct()
          , a = ml(e, l.proxy.$q)
          , {updatePanelsList: t, getPanelContent: n, panelDirectives: i} = er()
          , r = h( () => "q-tab-panels q-panel-parent" + (a.value === !0 ? " q-tab-panels--dark q-dark" : ""));
        return () => (t(s),
        ca("div", {
            class: r.value
        }, n(), "pan", e.swipeable, () => i.value))
    }
})
  , tr = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function Pa({r: e, g: s, b: l, a}) {
    const t = a !== void 0;
    if (e = Math.round(e),
    s = Math.round(s),
    l = Math.round(l),
    e > 255 || s > 255 || l > 255 || t && a > 100)
        throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
    return a = t ? (Math.round(255 * a / 100) | 256).toString(16).slice(1) : "",
    "#" + (l | s << 8 | e << 16 | 1 << 24).toString(16).slice(1) + a
}
function za({r: e, g: s, b: l, a}) {
    return `rgb${a !== void 0 ? "a" : ""}(${e},${s},${l}${a !== void 0 ? "," + a / 100 : ""})`
}
function xn(e) {
    if (typeof e != "string")
        throw new TypeError("Expected a string");
    e = e.replace(/^#/, ""),
    e.length === 3 ? e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] : e.length === 4 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
    const s = parseInt(e, 16);
    return e.length > 6 ? {
        r: s >> 24 & 255,
        g: s >> 16 & 255,
        b: s >> 8 & 255,
        a: Math.round((s & 255) / 2.55)
    } : {
        r: s >> 16,
        g: s >> 8 & 255,
        b: s & 255
    }
}
function La({h: e, s, v: l, a}) {
    let t, n, i;
    s = s / 100,
    l = l / 100,
    e = e / 360;
    const r = Math.floor(e * 6)
      , f = e * 6 - r
      , c = l * (1 - s)
      , d = l * (1 - f * s)
      , g = l * (1 - (1 - f) * s);
    switch (r % 6) {
    case 0:
        t = l,
        n = g,
        i = c;
        break;
    case 1:
        t = d,
        n = l,
        i = c;
        break;
    case 2:
        t = c,
        n = l,
        i = g;
        break;
    case 3:
        t = c,
        n = d,
        i = l;
        break;
    case 4:
        t = g,
        n = c,
        i = l;
        break;
    case 5:
        t = l,
        n = c,
        i = d;
        break
    }
    return {
        r: Math.round(t * 255),
        g: Math.round(n * 255),
        b: Math.round(i * 255),
        a
    }
}
function Nl({r: e, g: s, b: l, a}) {
    const t = Math.max(e, s, l)
      , n = Math.min(e, s, l)
      , i = t - n
      , r = t === 0 ? 0 : i / t
      , f = t / 255;
    let c;
    switch (t) {
    case n:
        c = 0;
        break;
    case e:
        c = s - l + i * (s < l ? 6 : 0),
        c /= 6 * i;
        break;
    case s:
        c = l - e + i * 2,
        c /= 6 * i;
        break;
    case l:
        c = e - s + i * 4,
        c /= 6 * i;
        break
    }
    return {
        h: Math.round(c * 360),
        s: Math.round(r * 100),
        v: Math.round(f * 100),
        a
    }
}
function Dn(e) {
    if (typeof e != "string")
        throw new TypeError("Expected a string");
    const s = e.replace(/ /g, "")
      , l = tr.exec(s);
    if (l === null)
        return xn(s);
    const a = {
        r: Math.min(255, parseInt(l[2], 10)),
        g: Math.min(255, parseInt(l[3], 10)),
        b: Math.min(255, parseInt(l[4], 10))
    };
    if (l[1]) {
        const t = parseFloat(l[5]);
        a.a = Math.min(1, isNaN(t) === !0 ? 1 : t) * 100
    }
    return a
}
function lr(e) {
    if (typeof e != "string" && (!e || e.r === void 0))
        throw new TypeError("Expected a string or a {r, g, b} object as color");
    const s = typeof e == "string" ? Dn(e) : e
      , l = s.r / 255
      , a = s.g / 255
      , t = s.b / 255
      , n = l <= .03928 ? l / 12.92 : Math.pow((l + .055) / 1.055, 2.4)
      , i = a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
      , r = t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
    return .2126 * n + .7152 * i + .0722 * r
}
const ar = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"]
  , Ma = "M5 5 h10 v10 h-10 v-10 z"
  , nr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg=="
  , Dl = it({
    name: "QColor",
    props: {
        ...fl,
        ...Vl,
        modelValue: String,
        defaultValue: String,
        defaultView: {
            type: String,
            default: "spectrum",
            validator: e => ["spectrum", "tune", "palette"].includes(e)
        },
        formatModel: {
            type: String,
            default: "auto",
            validator: e => ["auto", "hex", "rgb", "hexa", "rgba"].includes(e)
        },
        palette: Array,
        noHeader: Boolean,
        noHeaderTabs: Boolean,
        noFooter: Boolean,
        square: Boolean,
        flat: Boolean,
        bordered: Boolean,
        disable: Boolean,
        readonly: Boolean
    },
    emits: ["update:modelValue", "change"],
    setup(e, {emit: s}) {
        const {proxy: l} = ct()
          , {$q: a} = l
          , t = ml(e, a)
          , {getCache: n} = kn()
          , i = F(null)
          , r = F(null)
          , f = h( () => e.formatModel === "auto" ? null : e.formatModel.indexOf("hex") !== -1)
          , c = h( () => e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1)
          , d = F(e.formatModel === "auto" ? e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb")
          , g = F(e.defaultView)
          , p = F(Y(e.modelValue || e.defaultValue))
          , y = h( () => e.disable !== !0 && e.readonly !== !0)
          , x = h( () => e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#"))
          , w = h( () => f.value !== null ? f.value : x.value)
          , T = h( () => ({
            type: "hidden",
            name: e.name,
            value: p.value[w.value === !0 ? "hex" : "rgb"]
        }))
          , I = on(T)
          , S = h( () => c.value !== null ? c.value : p.value.a !== void 0)
          , C = h( () => ({
            backgroundColor: p.value.rgb || "#000"
        }))
          , D = h( () => `q-color-picker__header-content q-color-picker__header-content--${(p.value.a !== void 0 && p.value.a < 65 ? !0 : lr(p.value) > .4) ? "light" : "dark"}`)
          , R = h( () => ({
            background: `hsl(${p.value.h},100%,50%)`
        }))
          , P = h( () => ({
            top: `${100 - p.value.v}%`,
            [a.lang.rtl === !0 ? "right" : "left"]: `${p.value.s}%`
        }))
          , W = h( () => e.palette !== void 0 && e.palette.length !== 0 ? e.palette : ar)
          , U = h( () => "q-color-picker" + (e.bordered === !0 ? " q-color-picker--bordered" : "") + (e.square === !0 ? " q-color-picker--square no-border-radius" : "") + (e.flat === !0 ? " q-color-picker--flat no-shadow" : "") + (e.disable === !0 ? " disabled" : "") + (t.value === !0 ? " q-color-picker--dark q-dark" : ""))
          , H = h( () => e.disable === !0 ? {
            "aria-disabled": "true"
        } : {})
          , $ = h( () => [[xl, ke, void 0, {
            prevent: !0,
            stop: !0,
            mouse: !0
        }]]);
        he( () => e.modelValue, q => {
            const oe = Y(q || e.defaultValue);
            oe.hex !== p.value.hex && (p.value = oe)
        }
        ),
        he( () => e.defaultValue, q => {
            if (!e.modelValue && q) {
                const oe = Y(q);
                oe.hex !== p.value.hex && (p.value = oe)
            }
        }
        );
        function M(q, oe) {
            p.value.hex = Pa(q),
            p.value.rgb = za(q),
            p.value.r = q.r,
            p.value.g = q.g,
            p.value.b = q.b,
            p.value.a = q.a;
            const fe = p.value[w.value === !0 ? "hex" : "rgb"];
            s("update:modelValue", fe),
            oe === !0 && s("change", fe)
        }
        function Y(q) {
            const oe = c.value !== void 0 ? c.value : e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1;
            if (typeof q != "string" || q.length === 0 || oo.anyColor(q.replace(/ /g, "")) !== !0)
                return {
                    h: 0,
                    s: 0,
                    v: 0,
                    r: 0,
                    g: 0,
                    b: 0,
                    a: oe === !0 ? 100 : void 0,
                    hex: void 0,
                    rgb: void 0
                };
            const fe = Dn(q);
            return oe === !0 && fe.a === void 0 && (fe.a = 100),
            fe.hex = Pa(fe),
            fe.rgb = za(fe),
            Object.assign(fe, Nl(fe))
        }
        function ee(q, oe, fe) {
            const me = i.value;
            if (me === null)
                return;
            const Be = me.clientWidth
              , ge = me.clientHeight
              , Me = me.getBoundingClientRect();
            let Ie = Math.min(Be, Math.max(0, q - Me.left));
            a.lang.rtl === !0 && (Ie = Be - Ie);
            const Ze = Math.min(ge, Math.max(0, oe - Me.top))
              , Re = Math.round(100 * Ie / Be)
              , j = Math.round(100 * Math.max(0, Math.min(1, -(Ze / ge) + 1)))
              , ae = La({
                h: p.value.h,
                s: Re,
                v: j,
                a: S.value === !0 ? p.value.a : void 0
            });
            p.value.s = Re,
            p.value.v = j,
            M(ae, fe)
        }
        function b(q, oe) {
            const fe = Math.round(q)
              , me = La({
                h: fe,
                s: p.value.s,
                v: p.value.v,
                a: S.value === !0 ? p.value.a : void 0
            });
            p.value.h = fe,
            M(me, oe)
        }
        function k(q) {
            b(q, !0)
        }
        function z(q, oe, fe, me, Be) {
            if (me !== void 0 && nt(me),
            !/^[0-9]+$/.test(q)) {
                Be === !0 && l.$forceUpdate();
                return
            }
            const ge = Math.floor(Number(q));
            if (ge < 0 || ge > fe) {
                Be === !0 && l.$forceUpdate();
                return
            }
            const Me = {
                r: oe === "r" ? ge : p.value.r,
                g: oe === "g" ? ge : p.value.g,
                b: oe === "b" ? ge : p.value.b,
                a: S.value === !0 ? oe === "a" ? ge : p.value.a : void 0
            };
            if (oe !== "a") {
                const Ie = Nl(Me);
                p.value.h = Ie.h,
                p.value.s = Ie.s,
                p.value.v = Ie.v
            }
            if (M(Me, Be),
            Be !== !0 && me?.target.selectionEnd !== void 0) {
                const Ie = me.target.selectionEnd;
                ht( () => {
                    me.target.setSelectionRange(Ie, Ie)
                }
                )
            }
        }
        function L(q, oe) {
            let fe;
            const me = q.target.value;
            if (nt(q),
            d.value === "hex") {
                if (me.length !== (S.value === !0 ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(me))
                    return !0;
                fe = xn(me)
            } else {
                let ge;
                if (me.endsWith(")"))
                    if (S.value !== !0 && me.startsWith("rgb(")) {
                        if (ge = me.substring(4, me.length - 1).split(",").map(Me => parseInt(Me, 10)),
                        ge.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(me))
                            return !0
                    } else if (S.value === !0 && me.startsWith("rgba(")) {
                        if (ge = me.substring(5, me.length - 1).split(","),
                        ge.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(me))
                            return !0;
                        for (let Ie = 0; Ie < 3; Ie++) {
                            const Ze = parseInt(ge[Ie], 10);
                            if (Ze < 0 || Ze > 255)
                                return !0;
                            ge[Ie] = Ze
                        }
                        const Me = parseFloat(ge[3]);
                        if (Me < 0 || Me > 1)
                            return !0;
                        ge[3] = Me
                    } else
                        return !0;
                else
                    return !0;
                if (ge[0] < 0 || ge[0] > 255 || ge[1] < 0 || ge[1] > 255 || ge[2] < 0 || ge[2] > 255 || S.value === !0 && (ge[3] < 0 || ge[3] > 1))
                    return !0;
                fe = {
                    r: ge[0],
                    g: ge[1],
                    b: ge[2],
                    a: S.value === !0 ? ge[3] * 100 : void 0
                }
            }
            const Be = Nl(fe);
            if (p.value.h = Be.h,
            p.value.s = Be.s,
            p.value.v = Be.v,
            M(fe, oe),
            oe !== !0) {
                const ge = q.target.selectionEnd;
                ht( () => {
                    q.target.setSelectionRange(ge, ge)
                }
                )
            }
        }
        function re(q) {
            const oe = Y(q)
              , fe = {
                r: oe.r,
                g: oe.g,
                b: oe.b,
                a: oe.a
            };
            fe.a === void 0 && (fe.a = p.value.a),
            p.value.h = oe.h,
            p.value.s = oe.s,
            p.value.v = oe.v,
            M(fe, !0)
        }
        function ke(q) {
            q.isFinal ? ee(q.position.left, q.position.top, !0) : Le(q)
        }
        const Le = io(q => {
            ee(q.position.left, q.position.top)
        }
        , 20);
        function B(q) {
            ee(q.pageX - window.pageXOffset, q.pageY - window.pageYOffset, !0)
        }
        function G(q) {
            ee(q.pageX - window.pageXOffset, q.pageY - window.pageYOffset)
        }
        function ce(q) {
            r.value !== null && (r.value.$el.style.opacity = q ? 1 : 0)
        }
        function Ve(q) {
            d.value = q
        }
        function $e() {
            const q = [];
            return e.noHeaderTabs !== !0 && q.push(A(dl, {
                class: "q-color-picker__header-tabs",
                modelValue: d.value,
                dense: !0,
                align: "justify",
                "onUpdate:modelValue": Ve
            }, () => [A(vt, {
                label: "HEX" + (S.value === !0 ? "A" : ""),
                name: "hex",
                ripple: !1
            }), A(vt, {
                label: "RGB" + (S.value === !0 ? "A" : ""),
                name: "rgb",
                ripple: !1
            })])),
            q.push(A("div", {
                class: "q-color-picker__header-banner row flex-center no-wrap"
            }, [A("input", {
                class: "fit",
                value: p.value[d.value],
                ...y.value !== !0 ? {
                    readonly: !0
                } : {},
                ...n("topIn", {
                    onInput: oe => {
                        ce(L(oe) === !0)
                    }
                    ,
                    onChange: nt,
                    onBlur: oe => {
                        L(oe, !0) === !0 && l.$forceUpdate(),
                        ce(!1)
                    }
                })
            }), A(De, {
                ref: r,
                class: "q-color-picker__error-icon absolute no-pointer-events",
                name: a.iconSet.type.negative
            })])),
            A("div", {
                class: "q-color-picker__header relative-position overflow-hidden"
            }, [A("div", {
                class: "q-color-picker__header-bg absolute-full"
            }), A("div", {
                class: D.value,
                style: C.value
            }, q)])
        }
        function se() {
            return A(ga, {
                modelValue: g.value,
                animated: !0
            }, () => [A(Et, {
                class: "q-color-picker__spectrum-tab overflow-hidden",
                name: "spectrum"
            }, ve), A(Et, {
                class: "q-pa-md q-color-picker__tune-tab",
                name: "tune"
            }, je), A(Et, {
                class: "q-color-picker__palette-tab",
                name: "palette"
            }, Je)])
        }
        function pe(q) {
            g.value = q
        }
        function Te() {
            return A("div", {
                class: "q-color-picker__footer relative-position overflow-hidden"
            }, [A(dl, {
                class: "absolute-full",
                modelValue: g.value,
                dense: !0,
                align: "justify",
                "onUpdate:modelValue": pe
            }, () => [A(vt, {
                icon: a.iconSet.colorPicker.spectrum,
                name: "spectrum",
                ripple: !1
            }), A(vt, {
                icon: a.iconSet.colorPicker.tune,
                name: "tune",
                ripple: !1
            }), A(vt, {
                icon: a.iconSet.colorPicker.palette,
                name: "palette",
                ripple: !1
            })])])
        }
        function ve() {
            const q = {
                ref: i,
                class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (y.value !== !0 ? " readonly" : ""),
                style: R.value,
                ...y.value === !0 ? {
                    onClick: B,
                    onMousedown: G
                } : {}
            }
              , oe = [A("div", {
                style: {
                    paddingBottom: "100%"
                }
            }), A("div", {
                class: "q-color-picker__spectrum-white absolute-full"
            }), A("div", {
                class: "q-color-picker__spectrum-black absolute-full"
            }), A("div", {
                class: "absolute",
                style: P.value
            }, [p.value.hex !== void 0 ? A("div", {
                class: "q-color-picker__spectrum-circle"
            }) : null])]
              , fe = [A(_t, {
                class: "q-color-picker__hue non-selectable",
                modelValue: p.value.h,
                min: 0,
                max: 360,
                trackSize: "8px",
                innerTrackColor: "transparent",
                selectionColor: "transparent",
                readonly: y.value !== !0,
                thumbPath: Ma,
                "onUpdate:modelValue": b,
                onChange: k
            })];
            return S.value === !0 && fe.push(A(_t, {
                class: "q-color-picker__alpha non-selectable",
                modelValue: p.value.a,
                min: 0,
                max: 100,
                trackSize: "8px",
                trackColor: "white",
                innerTrackColor: "transparent",
                selectionColor: "transparent",
                trackImg: nr,
                readonly: y.value !== !0,
                hideSelection: !0,
                thumbPath: Ma,
                ...n("alphaSlide", {
                    "onUpdate:modelValue": me => z(me, "a", 100),
                    onChange: me => z(me, "a", 100, void 0, !0)
                })
            })),
            [ca("div", q, oe, "spec", y.value, () => $.value), A("div", {
                class: "q-color-picker__sliders"
            }, fe)]
        }
        function je() {
            return [A("div", {
                class: "row items-center no-wrap"
            }, [A("div", "R"), A(_t, {
                modelValue: p.value.r,
                min: 0,
                max: 255,
                color: "red",
                dark: t.value,
                readonly: y.value !== !0,
                ...n("rSlide", {
                    "onUpdate:modelValue": q => z(q, "r", 255),
                    onChange: q => z(q, "r", 255, void 0, !0)
                })
            }), A("input", {
                value: p.value.r,
                maxlength: 3,
                readonly: y.value !== !0,
                onChange: nt,
                ...n("rIn", {
                    onInput: q => z(q.target.value, "r", 255, q),
                    onBlur: q => z(q.target.value, "r", 255, q, !0)
                })
            })]), A("div", {
                class: "row items-center no-wrap"
            }, [A("div", "G"), A(_t, {
                modelValue: p.value.g,
                min: 0,
                max: 255,
                color: "green",
                dark: t.value,
                readonly: y.value !== !0,
                ...n("gSlide", {
                    "onUpdate:modelValue": q => z(q, "g", 255),
                    onChange: q => z(q, "g", 255, void 0, !0)
                })
            }), A("input", {
                value: p.value.g,
                maxlength: 3,
                readonly: y.value !== !0,
                onChange: nt,
                ...n("gIn", {
                    onInput: q => z(q.target.value, "g", 255, q),
                    onBlur: q => z(q.target.value, "g", 255, q, !0)
                })
            })]), A("div", {
                class: "row items-center no-wrap"
            }, [A("div", "B"), A(_t, {
                modelValue: p.value.b,
                min: 0,
                max: 255,
                color: "blue",
                readonly: y.value !== !0,
                dark: t.value,
                ...n("bSlide", {
                    "onUpdate:modelValue": q => z(q, "b", 255),
                    onChange: q => z(q, "b", 255, void 0, !0)
                })
            }), A("input", {
                value: p.value.b,
                maxlength: 3,
                readonly: y.value !== !0,
                onChange: nt,
                ...n("bIn", {
                    onInput: q => z(q.target.value, "b", 255, q),
                    onBlur: q => z(q.target.value, "b", 255, q, !0)
                })
            })]), S.value === !0 ? A("div", {
                class: "row items-center no-wrap"
            }, [A("div", "A"), A(_t, {
                modelValue: p.value.a,
                color: "grey",
                readonly: y.value !== !0,
                dark: t.value,
                ...n("aSlide", {
                    "onUpdate:modelValue": q => z(q, "a", 100),
                    onChange: q => z(q, "a", 100, void 0, !0)
                })
            }), A("input", {
                value: p.value.a,
                maxlength: 3,
                readonly: y.value !== !0,
                onChange: nt,
                ...n("aIn", {
                    onInput: q => z(q.target.value, "a", 100, q),
                    onBlur: q => z(q.target.value, "a", 100, q, !0)
                })
            })]) : null]
        }
        function Je() {
            const q = oe => A("div", {
                class: "q-color-picker__cube col-auto",
                style: {
                    backgroundColor: oe
                },
                ...y.value === !0 ? n("palette#" + oe, {
                    onClick: () => {
                        re(oe)
                    }
                }) : {}
            });
            return [A("div", {
                class: "row items-center q-color-picker__palette-rows" + (y.value === !0 ? " q-color-picker__palette-rows--editable" : "")
            }, W.value.map(q))]
        }
        return () => {
            const q = [se()];
            return e.name !== void 0 && e.disable !== !0 && I(q, "push"),
            e.noHeader !== !0 && q.unshift($e()),
            e.noFooter !== !0 && q.push(Te()),
            A("div", {
                class: U.value,
                ...H.value
            }, q)
        }
    }
})
  , or = {
    style: {
        opacity: "0.67"
    }
}
  , sl = be({
    __name: "AppTooltip",
    props: {
        title: {
            type: String,
            required: !0
        }
    },
    setup(e) {
        const s = e
          , l = F(null)
          , a = ft();
        function t() {
            a.platform.is.mobile && l.value.toggle()
        }
        return (n, i) => (V(),
        Z("span", or, [o(O, {
            round: "",
            flat: "",
            dense: "",
            icon: "fas fa-question-circle",
            onClick: t
        }, {
            default: u( () => [o(Vt, {
                "max-width": "320px",
                ref_key: "tooltip",
                ref: l,
                "no-parent-event": v(a).platform.is.mobile
            }, {
                default: u( () => [Q(E(s.title), 1)]),
                _: 1
            }, 8, ["no-parent-event"])]),
            _: 1
        })]))
    }
})
  , ir = it({
    name: "QSlideTransition",
    props: {
        appear: Boolean,
        duration: {
            type: Number,
            default: 300
        }
    },
    emits: ["show", "hide"],
    setup(e, {slots: s, emit: l}) {
        let a = !1, t, n, i = null, r = null, f, c;
        function d() {
            t?.(),
            t = null,
            a = !1,
            i !== null && (clearTimeout(i),
            i = null),
            r !== null && (clearTimeout(r),
            r = null),
            n?.removeEventListener("transitionend", f),
            f = null
        }
        function g(w, T, I) {
            T !== void 0 && (w.style.height = `${T}px`),
            w.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,
            a = !0,
            t = I
        }
        function p(w, T) {
            w.style.overflowY = null,
            w.style.height = null,
            w.style.transition = null,
            d(),
            T !== c && l(T)
        }
        function y(w, T) {
            let I = 0;
            n = w,
            a === !0 ? (d(),
            I = w.offsetHeight === w.scrollHeight ? 0 : void 0) : (c = "hide",
            w.style.overflowY = "hidden"),
            g(w, I, T),
            i = setTimeout( () => {
                i = null,
                w.style.height = `${w.scrollHeight}px`,
                f = S => {
                    r = null,
                    (Object(S) !== S || S.target === w) && p(w, "show")
                }
                ,
                w.addEventListener("transitionend", f),
                r = setTimeout(f, e.duration * 1.1)
            }
            , 100)
        }
        function x(w, T) {
            let I;
            n = w,
            a === !0 ? d() : (c = "show",
            w.style.overflowY = "hidden",
            I = w.scrollHeight),
            g(w, I, T),
            i = setTimeout( () => {
                i = null,
                w.style.height = 0,
                f = S => {
                    r = null,
                    (Object(S) !== S || S.target === w) && p(w, "hide")
                }
                ,
                w.addEventListener("transitionend", f),
                r = setTimeout(f, e.duration * 1.1)
            }
            , 100)
        }
        return Tt( () => {
            a === !0 && d()
        }
        ),
        () => A(wl, {
            css: !1,
            appear: e.appear,
            onEnter: y,
            onLeave: x
        }, s.default)
    }
})
  , zt = vo({})
  , sr = Object.keys(sn)
  , rr = it({
    name: "QExpansionItem",
    props: {
        ...sn,
        ...ro,
        ...fl,
        icon: String,
        label: String,
        labelLines: [Number, String],
        caption: String,
        captionLines: [Number, String],
        dense: Boolean,
        toggleAriaLabel: String,
        expandIcon: String,
        expandedIcon: String,
        expandIconClass: [Array, String, Object],
        duration: {},
        headerInsetLevel: Number,
        contentInsetLevel: Number,
        expandSeparator: Boolean,
        defaultOpened: Boolean,
        hideExpandIcon: Boolean,
        expandIconToggle: Boolean,
        switchToggleSide: Boolean,
        denseToggle: Boolean,
        group: String,
        popup: Boolean,
        headerStyle: [Array, String, Object],
        headerClass: [Array, String, Object]
    },
    emits: [...so, "click", "afterShow", "afterHide"],
    setup(e, {slots: s, emit: l}) {
        const {proxy: {$q: a}} = ct()
          , t = ml(e, a)
          , n = F(e.modelValue !== null ? e.modelValue : e.defaultOpened)
          , i = F(null)
          , r = Ha()
          , {show: f, hide: c, toggle: d} = uo({
            showing: n
        });
        let g, p;
        const y = h( () => `q-expansion-item q-item-type q-expansion-item--${n.value === !0 ? "expanded" : "collapsed"} q-expansion-item--${e.popup === !0 ? "popup" : "standard"}`)
          , x = h( () => e.contentInsetLevel === void 0 ? null : {
            ["padding" + (a.lang.rtl === !0 ? "Right" : "Left")]: e.contentInsetLevel * 56 + "px"
        })
          , w = h( () => e.disable !== !0 && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== ""))
          , T = h( () => {
            const L = {};
            return sr.forEach(re => {
                L[re] = e[re]
            }
            ),
            L
        }
        )
          , I = h( () => w.value === !0 || e.expandIconToggle !== !0)
          , S = h( () => e.expandedIcon !== void 0 && n.value === !0 ? e.expandedIcon : e.expandIcon || a.iconSet.expansionItem[e.denseToggle === !0 ? "denseIcon" : "icon"])
          , C = h( () => e.disable !== !0 && (w.value === !0 || e.expandIconToggle === !0))
          , D = h( () => ({
            expanded: n.value === !0,
            detailsId: r.value,
            toggle: d,
            show: f,
            hide: c
        }))
          , R = h( () => {
            const L = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : a.lang.label[n.value === !0 ? "collapse" : "expand"](e.label);
            return {
                role: "button",
                "aria-expanded": n.value === !0 ? "true" : "false",
                "aria-controls": r.value,
                "aria-label": L
            }
        }
        );
        he( () => e.group, L => {
            p?.(),
            L !== void 0 && M()
        }
        );
        function P(L) {
            w.value !== !0 && d(L),
            l("click", L)
        }
        function W(L) {
            L.keyCode === 13 && U(L, !0)
        }
        function U(L, re) {
            re !== !0 && L.qAvoidFocus !== !0 && i.value?.focus(),
            d(L),
            rt(L)
        }
        function H() {
            l("afterShow")
        }
        function $() {
            l("afterHide")
        }
        function M() {
            g === void 0 && (g = co()),
            n.value === !0 && (zt[e.group] = g);
            const L = he(n, ke => {
                ke === !0 ? zt[e.group] = g : zt[e.group] === g && delete zt[e.group]
            }
            )
              , re = he( () => zt[e.group], (ke, Le) => {
                Le === g && ke !== void 0 && ke !== g && c()
            }
            );
            p = () => {
                L(),
                re(),
                zt[e.group] === g && delete zt[e.group],
                p = void 0
            }
        }
        function Y() {
            const L = {
                class: [`q-focusable relative-position cursor-pointer${e.denseToggle === !0 && e.switchToggleSide === !0 ? " items-end" : ""}`, e.expandIconClass],
                side: e.switchToggleSide !== !0,
                avatar: e.switchToggleSide
            }
              , re = [A(De, {
                class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && n.value === !0 ? " q-expansion-item__toggle-icon--rotated" : ""),
                name: S.value
            })];
            return C.value === !0 && (Object.assign(L, {
                tabindex: 0,
                ...R.value,
                onClick: U,
                onKeyup: W
            }),
            re.unshift(A("div", {
                ref: i,
                class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",
                tabindex: -1
            }))),
            A(ne, L, () => re)
        }
        function ee() {
            let L;
            return s.header !== void 0 ? L = [].concat(s.header(D.value)) : (L = [A(ne, () => [A(tt, {
                lines: e.labelLines
            }, () => e.label || ""), e.caption ? A(tt, {
                lines: e.captionLines,
                caption: !0
            }, () => e.caption) : null])],
            e.icon && L[e.switchToggleSide === !0 ? "push" : "unshift"](A(ne, {
                side: e.switchToggleSide === !0,
                avatar: e.switchToggleSide !== !0
            }, () => A(De, {
                name: e.icon
            })))),
            e.disable !== !0 && e.hideExpandIcon !== !0 && L[e.switchToggleSide === !0 ? "unshift" : "push"](Y()),
            L
        }
        function b() {
            const L = {
                ref: "item",
                style: e.headerStyle,
                class: e.headerClass,
                dark: t.value,
                disable: e.disable,
                dense: e.dense,
                insetLevel: e.headerInsetLevel
            };
            return I.value === !0 && (L.clickable = !0,
            L.onClick = P,
            Object.assign(L, w.value === !0 ? T.value : R.value)),
            A(we, L, ee)
        }
        function k() {
            return ue(A("div", {
                key: "e-content",
                class: "q-expansion-item__content relative-position",
                style: x.value,
                id: r.value
            }, Bt(s.default)), [[We, n.value]])
        }
        function z() {
            const L = [b(), A(ir, {
                duration: e.duration,
                onShow: H,
                onHide: $
            }, k)];
            return e.expandSeparator === !0 && L.push(A(rl, {
                class: "q-expansion-item__border q-expansion-item__border--top absolute-top",
                dark: t.value
            }), A(rl, {
                class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",
                dark: t.value
            })),
            L
        }
        return e.group !== void 0 && M(),
        Tt( () => {
            p?.()
        }
        ),
        () => A("div", {
            class: y.value
        }, [A("div", {
            class: "q-expansion-item__container relative-position"
        }, z())])
    }
})
  , ur = {
    class: "q-gutter-y-md"
}
  , cr = {
    class: "row q-gutter-x-sm items-center"
}
  , dr = {
    class: "col-2"
}
  , vr = {
    class: "col-grow"
}
  , fr = {
    class: "col-shrink q-gutter-x-sm"
}
  , mr = {
    class: "row q-gutter-sm"
}
  , gr = {
    class: "col-2"
}
  , pr = {
    class: "col"
}
  , hr = be({
    __name: "CustomizeDialogDuringSpinSoundPicker",
    props: {
        duringSpinSound: {
            type: String,
            required: !0
        },
        duringSpinSoundVolume: {
            type: Number,
            required: !0
        }
    },
    emits: ["set-during-spin-sound", "set-during-spin-sound-volume"],
    setup(e, {emit: s}) {
        const {t: l} = _e()
          , a = e
          , t = s
          , n = F(a.duringSpinSound)
          , i = F(a.duringSpinSoundVolume)
          , r = Uo()
          , f = ["no-sound", "ticking-sound", "random-music"]
          , c = h( () => !f.includes(n.value));
        he( () => n.value, S => {
            t("set-during-spin-sound", S)
        }
        ),
        he( () => i.value, S => {
            t("set-during-spin-sound-volume", S)
        }
        );
        function d(S) {
            return S.includes(".") ? l(S) : S
        }
        function g() {
            J("Wheel", "PlayDuringSpinSoundInOptionsDialog", ""),
            Fl(),
            Oo(n.value, i.value)
        }
        function p() {
            J("Wheel", "StopDuringSpinSoundInOptionsDialog", ""),
            Fl()
        }
        const y = Object.keys(r).map(S => ({
            label: d(S),
            children: Object.keys(r[S]).map(C => ({
                label: d(C),
                value: r[S][C].value
            }))
        }));
        function x(S) {
            return S.opt.children.some(C => C.value === T.value.value)
        }
        function w(S) {
            let C = "sounds.No sound", D;
            for (let R = 0; R < y.length; R++)
                if (D = y[R]?.children.find(P => P.value === S),
                D) {
                    C = D.label;
                    break
                }
            return C
        }
        const T = F({
            label: w(n.value),
            value: n.value
        });
        function I(S) {
            T.value = S,
            n.value = S.value
        }
        return (S, C) => (V(),
        Z("div", ur, [m("div", cr, [m("div", dr, E(v(l)("optionsdialog.Sound")), 1), m("div", vr, [o(Ft, {
            filled: "",
            dense: "",
            modelValue: n.value,
            "onUpdate:modelValue": C[0] || (C[0] = D => n.value = D),
            options: v(y),
            "display-value": T.value.label
        }, {
            option: u(D => [o(rr, {
                "expand-separator": "",
                group: "somegroup",
                "default-opened": x(D),
                "header-class": "text-weight-bold",
                label: D.opt.label
            }, {
                default: u( () => [(V(!0),
                Z(ut, null, gt(D.opt.children, R => ue((V(),
                X(we, {
                    key: R.label,
                    clickable: "",
                    onClick: P => I(R),
                    class: Xt(T.value.value === R.value ? "selected-item" : "")
                }, {
                    default: u( () => [o(ne, null, {
                        default: u( () => [o(tt, {
                            innerHTML: R.label,
                            class: "q-ml-md"
                        }, null, 8, ["innerHTML"])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1032, ["onClick", "class"])), [[ra], [Xe]])), 128))]),
                _: 2
            }, 1032, ["default-opened", "label"])]),
            _: 1
        }, 8, ["modelValue", "options", "display-value"])]), m("div", fr, [o(O, {
            unelevated: "",
            onClick: g,
            disable: !c.value,
            icon: "fas fa-play"
        }, null, 8, ["disable"]), o(O, {
            unelevated: "",
            onClick: p,
            disable: !c.value,
            icon: "fas fa-stop"
        }, null, 8, ["disable"])])]), m("div", mr, [m("div", gr, E(v(l)("optionsdialog.Volume")), 1), m("div", pr, [o(_t, {
            modelValue: i.value,
            "onUpdate:modelValue": C[1] || (C[1] = D => i.value = D),
            min: 0,
            max: 100,
            label: "",
            "label-value": i.value + "%",
            "marker-labels": {
                0: "0%",
                25: "25%",
                50: "50%",
                75: "75%",
                100: "100%"
            },
            class: "customize-slider"
        }, null, 8, ["modelValue", "label-value"])])])]))
    }
})
  , br = st(hr, [["__scopeId", "data-v-39005f14"]])
  , yr = {
    class: "q-gutter-y-md"
}
  , wr = {
    class: "row q-gutter-x-sm items-center"
}
  , _r = {
    class: "col-2"
}
  , Fr = {
    class: "col-grow"
}
  , Sr = {
    class: "col-shrink q-gutter-x-sm"
}
  , Cr = {
    class: "row q-gutter-sm"
}
  , kr = {
    class: "col-2"
}
  , xr = {
    class: "col"
}
  , Dr = be({
    __name: "CustomizeDialogAfterSpinSoundPicker",
    props: {
        afterSpinSound: {
            type: String,
            required: !0
        },
        afterSpinSoundVolume: {
            type: Number,
            required: !0
        },
        firstTextOnWheel: String
    },
    emits: ["set-after-spin-sound", "set-after-spin-sound-volume"],
    setup(e, {emit: s}) {
        const {t: l, locale: a} = _e()
          , t = e
          , n = s
          , i = F(t.afterSpinSound)
          , r = F(t.afterSpinSoundVolume)
          , f = bn()
          , c = h( () => i.value !== "no-sound");
        he( () => i.value, x => {
            n("set-after-spin-sound", x)
        }
        ),
        he( () => r.value, x => {
            n("set-after-spin-sound-volume", x)
        }
        );
        function d(x) {
            return x.includes(".") ? l(x) : x
        }
        function g() {
            J("Wheel", "PlayAfterSpinSoundInOptionsDialog", ""),
            Sl(),
            i.value && Ro(i.value, t.firstTextOnWheel || l("optionsdialog.Sound"), r.value, a.value)
        }
        function p() {
            J("Wheel", "StopAfterSpinSoundInOptionsDialog", ""),
            Sl()
        }
        const y = f.map(x => ({
            value: x.value,
            label: d(x.name)
        }));
        return (x, w) => (V(),
        Z("div", yr, [m("div", wr, [m("div", _r, E(v(l)("optionsdialog.Sound")), 1), m("div", Fr, [o(Ft, {
            filled: "",
            dense: "",
            modelValue: i.value,
            "onUpdate:modelValue": w[0] || (w[0] = T => i.value = T),
            options: v(y),
            "emit-value": "",
            "map-options": ""
        }, null, 8, ["modelValue", "options"])]), m("div", Sr, [o(O, {
            unelevated: "",
            onClick: g,
            disable: !c.value,
            icon: "fas fa-play"
        }, null, 8, ["disable"]), o(O, {
            unelevated: "",
            onClick: p,
            disable: !c.value,
            icon: "fas fa-stop"
        }, null, 8, ["disable"])])]), m("div", Cr, [m("div", kr, E(v(l)("optionsdialog.Volume")), 1), m("div", xr, [o(_t, {
            modelValue: r.value,
            "onUpdate:modelValue": w[1] || (w[1] = T => r.value = T),
            min: 0,
            max: 100,
            label: "",
            "label-value": r.value + "%",
            class: "customize-slider",
            "marker-labels": {
                0: "0%",
                25: "25%",
                50: "50%",
                75: "75%",
                100: "100%"
            }
        }, null, 8, ["modelValue", "label-value"])])])]))
    }
})
  , Ar = st(Dr, [["__scopeId", "data-v-7b54716c"]])
  , Vr = {
    "Default:": ["#3369E8", "#D50F25", "#EEB211", "#009925"],
    "The world stands with Ukraine": ["#0057B8", "#FFD700"]
}
  , Er = {
    "Antarctica evening": ["#F4D3C4", "#F2AEBB", "#D895DA", "#A091D6", "#696FC7", "#A7AAE1"],
    "Beach sunset": ["#3C47C6", "#656CDE", "#DE6CC8", "#F8A091", "#F7E392", "#F7A55D"],
    "Desert scene": ["#FAD381", "#D79F62", "#2E4647", "#518D6A", "#9BC692"],
    "Evening sky": ["#001F38", "#526079", "#9A7E8E", "#E3757F", "#FD997F", "#FFD0AA"],
    "Fresh meadow": ["#84A013", "#A8BB2E", "#D4DA5E", "#EBEF90", "#FBFDBC", "#FAC703"],
    "Fruit tones": ["#E9692C", "#ED9121", "#FFC324", "#FFF000", "#66B447", "#8EE53F"],
    Giraffe: ["#F0ECE1", "#EDCF8F", "#C97F4E", "#6F4A38", "#977359"],
    Jellyfish: ["#3EA1B6", "#0E6B8C", "#133855", "#6B669E", "#BB90C8", "#EFD8EC"],
    Jungle: ["#135E46", "#478966", "#73A788", "#E3C6AD", "#D09D7B", "#B67B65"],
    "Koi fish": ["#F16323", "#F2F3F4", "#FFD021", "#E34427"],
    Monsoon: ["#01A8CA", "#32D1EC", "#F1F1F1", "#AFDFF3"],
    Moon: ["#31302E", "#94908D", "#DAD9D7", "#F0F0F0", "#C3C2BE"],
    "Purple horizon": ["#b7b8f9", "#3a1f8a", "#2c1357", "#462867", "#593b6a"],
    Rainbow: ["#5E02E9", "#3C70EF", "#30D800", "#E7E200", "#FD8B00", "#F20800"],
    "Red desert": ["#99857A", "#C67B5C", "#E27B58", "#FF9D6F", "#663926", "#8E6A5A"],
    "Red sunset": ["#761000", "#C10900", "#E92100", "#FFDB53", "#FFA93D", "#FF7A29"],
    "Sandy beach": ["#9FE2BF", "#FFE5C6", "#EFCDB4", "#4BC7CF", "#5CF5FF"],
    Sun: ["#FFFFFF", "#FFE484", "#FFCC33", "#FC9601", "#D14009"],
    Underwater: ["#4F42B5", "#82E1E3", "#D4F1F9", "#E3FFFA", "#4CC395"],
    "Water lilies": ["#448036", "#5C9550", "#FBBA37", "#EE6BA4", "#F192B5", "#F4B0C7"]
}
  , $r = {
    "Fall green": ["#529106", "#61A307", "#86B71B", "#B9BD00", "#8EA202", "#799203"],
    "Fall leaves": ["#BA4634", "#D85C4E", "#EAA250", "#F5DD8B", "#CEC218", "#5F7818"],
    "Fall road": ["#A05A48", "#563633", "#6D463C", "#D6BD9D", "#D19E6D", "#C57D56"],
    "Fall yellow": ["#DC7C00", "#FF9705", "#FEB20A", "#FFCB00", "#FEDF05"],
    "Spring gentle": ["#C3D4C1", "#FFFFE5", "#B4D2A4", "#95BC83", "#F6EAD3"],
    "Spring green beauty": ["#F99825", "#F5C527", "#CFFA6B", "#9EEC1C", "#89DF42", "#75CB00"],
    "Spring pastels": ["#94DE8B", "#B19CD9", "#F4A8CF", "#F4C3D7", "#FDFD96", "#B6E7B9"],
    "Spring pink": ["#E25157", "#F5808F", "#FFACCC", "#FFCBDF", "#EBF0EA", "#93C64E"],
    "Summer buzz": ["#3BAED5", "#5CC8E2", "#FDE683", "#E66C1E", "#D52210"],
    "Summer carnival": ["#01A7EC", "#FFFF46", "#FFC94B", "#FE8F5D", "#FE47B3", "#80DA65"],
    "Summer is hot": ["#BF221C", "#E8681F", "#FBC44F", "#FFE67F", "#FDFFD2", "#F9F500"],
    "Summer pool party": ["#0198F1", "#49C2FF", "#A9EEFF", "#0067D4", "#E999DE", "#7C62C4"],
    "Winter blues": ["#2377A4", "#50A3C6", "#79C0D7", "#F8F8F8", "#DDDFDF", "#C2C2C2"],
    "Winter camouflage": ["#7C7C7C", "#0E1317", "#ACDEF8", "#344A78", "#FDFAFC", "#D6D6D6"],
    "Winter growth": ["#383159", "#656DA6", "#C5E1F2", "#52734F"],
    "Winter wonderland": ["#23644D", "#D3F1F3", "#FFFFFF", "#E22A45", "#C7102E"]
}
  , Br = {
    "Anonymous citation": ["#9DC3CA", "#B7D4C6", "#B7D4C6", "#EFECE1", "#EDD5C8", "#F2C0C5"],
    "Black to blue": ["#010101", "#011926", "#003E5C", "#016293", "#007BB8"],
    "Centered truth": ["#775E56", "#E4E1AF", "#FF9263", "#FF6455", "#7C687D"],
    "Cool blues & oranges": ["#3C8BEC", "#7EBEF6", "#FED8B1", "#F88102", "#F95701"],
    "Dead ennui": ["#85A18C", "#F6FDDF", "#FFECCD", "#F2B783"],
    "Information blues": ["#90B0AB", "#CBCAC0", "#DEDAD6", "#5F729A"],
    "Lavender to dark blue": ["#FFBAFF", "#DE87FF", "#A455FF", "#681DFF", "#1000CA", "#000098"],
    "Offbeat recognition": ["#F1647A", "#F3F1DB", "#74CBCC", "#27ABB2", "#C1D765", "#80C544"],
    "Office hours": ["#DE7373", "#F0DC9F", "#DEBB89", "#7787AE", "#43487B"],
    "Party fun": ["#891180", "#EA27A2", "#FB9390", "#F6C892", "#FFF5BD", "#FDFFDE"],
    "Pastel tones": ["#E0BBE4", "#957DAD", "#D291BC", "#FEC8D8", "#FFDFD3"],
    "Perfect feminine": ["#C09BE3", "#F6E0C7", "#F0C589", "#EA9A5D", "#EA6D63", "#E33F64"],
    "Slumber party": ["#278DF0", "#FFEF93", "#FF96E1", "#9B78FC"],
    "Teasing questions": ["#C75589", "#E369A4", "#F5CC22", "#F6EF2D", "#B2E792", "#82D07B"],
    "Turquoise to blue": ["#00FEEF", "#09EBEE", "#19CEEB", "#28ACEA", "#388EE9", "#3D76E0"]
}
  , Tr = {
    Afghanistan: ["#000000", "#D32011", "#FFFFFF", "#007A36"],
    Algeria: ["#006633", "#FFFFFF", "#D21034"],
    Angola: ["#CC092F", "#000000", "#FFCB00"],
    Argentina: ["#6CACE4", "#FFB81C", "#FFFFFF"],
    Australia: ["#012169", "#E4002B", "#FFFFFF"],
    "Australia-Aboriginal": ["#000000", "#CC0000", "#FFFF00"],
    Bangladesh: ["#F42A41", "#006A4E"],
    Belgium: ["#2D2926", "#FFCD00", "#C8102E"],
    Brazil: ["#009739", "#FEDD00", "#012169"],
    "Burkina Faso": ["#EF3340", "#FFCD00", "#009739"],
    Cambodia: ["#032EA1", "#E00025", "#FFFFFF", "#000000"],
    Cameroon: ["#007A5E", "#CE1126", "#FCD116"],
    Canada: ["#D80621", "#FFFFFF"],
    Chile: ["#0033A0", "#DA291C", "#FFFFFF"],
    China: ["#EE1C25", "#FFFF00"],
    Colombia: ["#FFCD00", "#003087", "#C8102E"],
    'Côte d"Ivoire': ["#FF8200", "#FFFFFF", "#009A44"],
    Denmark: ["#C8102E", "#FFFFFF"],
    "DR Congo": ["#0085CA", "#EF3340", "#FFD100"],
    Ecuador: ["#FFD100", "#0072CE", "#EF3340"],
    Egypt: ["#C8102E", "#FFFFFF", "#C09300", "#000000"],
    Ethiopia: ["#009A44", "#FEDD00", "#EF3340", "#0645B1"],
    Finland: ["#002F6C", "#FFFFFF"],
    France: ["#002395", "#FFFFFF", "#ED2939"],
    Germany: ["#000000", "#DD0000", "#FFCE00"],
    Ghana: ["#EF3340", "#FFD100", "#009739", "#000000"],
    Greece: ["#001489", "#FFFFFF"],
    Guatemala: ["#4997D0", "#FFFFFF"],
    "Hong Kong": ["#DE2910", "#FFFFFF"],
    India: ["#FF9933", "#FFFFFF", "#138808", "#000080"],
    Indonesia: ["#FF0000", "#FFFFFF"],
    Iran: ["#009639", "#FFFFFF", "#C8102E"],
    Iraq: ["#CE1126", "#FFFFFF", "#007A3D", "#000000"],
    Ireland: ["#169B62", "#FFFFFF", "#FF883E"],
    Israel: ["#005EB8", "#FFFFFF"],
    Italy: ["#008C45", "#F4F5F0", "#CD212A"],
    Japan: ["#FFFFFF", "#BC002D"],
    Kazakhstan: ["#00AEC7", "#F6E500"],
    Kenya: ["#BE3A34", "#009A44", "#000000"],
    Lithuania: ["#FDB913", "#006A44", "#C1272D"],
    Madagascar: ["#FFFFFF", "#F9423A", "#00843D"],
    Malawi: ["#C8102E", "#007A33", "#000000"],
    Malaysia: ["#010066", "#CC0001", "#FFFFFF", "#FFCC00"],
    Mali: ["#009639", "#FFD100", "#EF3340"],
    Maori: ["#000000", "#FFFFFF", "#D40000"],
    Mexico: ["#006341", "#FFFFFF", "#CE1126"],
    Morocco: ["#C1272D", "#006233"],
    Mozambique: ["#009639", "#E4002B", "#FFD100", "#000000"],
    Myanmar: ["#FFCD00", "#43B02A", "#EE2737", "#FFFFFF"],
    Nepal: ["#C8102E", "#003087", "#FFFFFF"],
    Netherlands: ["#AE1C28", "#FFFFFF", "#21468B"],
    "New Zealand": ["#00247D", "#FFFFFF", "#CC142B"],
    Niger: ["#FFB25B", "#FFFFFF", "#009639"],
    Nigeria: ["#009639", "#FFFFFF"],
    "North Korea": ["#BF0D3E", "#005EB8", "#FFFFFF"],
    Norway: ["#C8102E", "#FFFFFF", "#003087"],
    Pakistan: ["#115740", "#FFFFFF"],
    Palestine: ["#E4312B", "#000000", "#FFFFFF", "#149954"],
    "Pan-Africa": ["#E31B23", "#000000", "#12853F"],
    Peru: ["#C8102E", "#FFFFFF"],
    Philippines: ["#FCD116", "#0038A8", "#CE1126", "#FFFFFF"],
    Poland: ["#FFFFFF", "#D22630"],
    Rasta: ["#078930", "#FCDD09", "#DA121A"],
    Romania: ["#012169", "#FFCD00", "#C8102E"],
    Russia: ["#FFFFFF", "#0072CE", "#EF3340"],
    "Saudi Arabia": ["#006C35", "#FFFFFF"],
    Senegal: ["#009639", "#FFD100", "#EF3340"],
    Singapore: ["#EF3340", "#FFFFFF"],
    "South Africa": ["#007749", "#000000", "#FFFFFF", "#FFB81C", "#E03C31", "#001489"],
    "South Korea": ["#FFFFFF", "#C8102E", "#002F6C", "#000000"],
    Spain: ["#AA151B", "#F1BF00"],
    "Sri Lanka": ["#FFD100", "#43B02A", "#FFB25B", "#9B2743"],
    Sudan: ["#EF3340", "#009639", "#FFFFFF", "#000000"],
    Sweden: ["#004B87", "#FFCD00"],
    Syria: ["#EF3340", "#FFFFFF", "#009639", "#000000"],
    Taiwan: ["#000097", "#FFFFFF", "#FE0000"],
    Tanzania: ["#43B02A", "#FFCD00", "#00A3E0", "#000000"],
    Thailand: ["#A51931", "#F4F5F8", "#2D2A4A"],
    Turkey: ["#C8102E", "#FFFFFF"],
    Uganda: ["#000000", "#FFD100", "#EF3340"],
    Ukraine: ["#0057B8", "#FFD700"],
    "United Arab Emirates": ["#FF0000", "#00732F", "#FFFFFF", "#000000"],
    "United Kingdom": ["#00247D", "#FFFFFF", "#CF142B"],
    "United States": ["#3C3B6E", "#FFFFFF", "#B22234"],
    Uzbekistan: ["#0072CE", "#DA291C", "#FFFFFF", "#43B02A"],
    Venezuela: ["#FCE300", "#003DA5", "#EF3340", "#FFFFFF"],
    Vietnam: ["#DA251D", "#FFCD00"],
    Yemen: ["#EF3340", "#FFFFFF", "#000000"],
    Zambia: ["#198A00", "#DE2010", "#000000", "#EF7D00"]
}
  , Ir = {
    "Classic Rainbow": ["#D12229", "#F68A1E", "#FDE01A", "#007940", "#24408E", "#732982"],
    Aromantic: ["#3BA740", "#A8D47A", "#FFFFFF", "#ABABAB", "#000000"],
    Asexual: ["#000000", "#A4A4A4", "#FFFFFF", "#810081"],
    Bisexual: ["#D60270", "#9B4F96", "#0038A8"],
    Demisexual: ["#000000", "#FFFFFF", "#6E0071", "#D3D3D3"],
    Gay: ["#078D70", "#98E8C1", "#FFFFFF", "#7BADE2", "#3D1A78"],
    Lesbian: ["#D62800", "#FF9B56", "#FFFFFF", "#D462A6", "#A40062"],
    Pansexual: ["#FF1C8D", "#FFD700", "#1AB3FF"],
    Agender: ["#000000", "#BABABA", "#FFFFFF", "#BAF484"],
    Genderfluid: ["#FE76A2", "#FFFFFF", "#BF12D7", "#000000", "#303CBE"],
    Genderqueer: ["#B57FDD", "#FFFFFF", "#49821E"],
    Intersex: ["#7902AA", "#FFD800"],
    "Non-binary": ["#FcF431", "#FCFCFC", "#9D59D2", "#282828"],
    Transgender: ["#5BCFFB", "#F5ABB9", "#FFFFFF", "#F5ABB9"]
}
  , qr = {
    Christmas: ["#348228", "#469A47", "#DAF7FF", "#FFFAFA", "#EB2029", "#D70816"],
    "Earth Day": ["#11205B", "#E9E9E9", "#8F705E", "#BF9269", "#F0C951", "#3C6F36"],
    Easter: ["#367D83", "#BADBD2", "#F47A97", "#F3EB9A", "#E9C05F"],
    Halloween: ["#F36A1F", "#F3861F", "#000000"],
    "New Year": ["#FFDF00", "#FFCC00", "#ECBD00", "#CC9900", "#B8860B"],
    'Saint Patrick"s Day': ["#008001", "#228B22", "#00AD43"],
    Thanksgiving: ["#FDC149", "#E7A755", "#873826", "#61782A", "#D64F06", "#BBB300"]
}
  , Wr = {
    "Candy Crush": ["#D98121", "#EDB23F", "#F5D346", "#F7E1B4", "#FAF4DC", "#D3151C"],
    Candyland: ["#FBD7E7", "#EEDDEC", "#E1E3F1", "#D4E9F6", "#C7EFFB"],
    Fortnite: ["#E98F5C", "#B448F0", "#2AC9FA", "#F9E36E", "#C7C9D6"],
    "Mario & Luigi": ["#5A98E1", "#139334", "#CEA900", "#FE130F", "#095CD4", "#16B65C"],
    Minecraft: ["#477A1E", "#70B237", "#8FCA5C", "#61371F", "#854F2B", "#C28340"],
    Monopoly: ["#C70000", "#BFDBAE", "#8FBC72", "#FFFFFF", "#D7BAAA"],
    Overwatch: ["#F79F11", "#3E474B", "#FFFFFF"],
    Pikachu: ["#FAD61D", "#E19720", "#F62D14", "#811E09", "#000000"],
    Pokémon: ["#0A285F", "#0075BE", "#D5A100", "#FFCC00"],
    "Rocket League": ["#008BFF", "#FF8B00"]
}
  , Pr = {
    Default: Vr,
    Nature: Er,
    Seasons: $r,
    Abstract: Br,
    Flags: Tr,
    Pride: Ir,
    Holidays: qr,
    Games: Wr
}
  , zr = {
    width: "12",
    height: "12",
    style: {
        "margin-left": "5px"
    }
}
  , Lr = be({
    __name: "CustomizeDialogThemeSelector",
    emits: ["set-color-theme"],
    setup(e, {emit: s}) {
        const l = s
          , {t: a} = _e()
          , t = Pr;
        function n(i) {
            if (!i)
                return;
            const r = i.split(",");
            if (r.length === 2) {
                const f = r[0].trim()
                  , c = r[1].trim()
                  , d = t[f][c];
                l("set-color-theme", {
                    name: i,
                    colors: d
                })
            }
        }
        return (i, r) => (V(),
        X(St, {
            label: v(a)("optionsdialog.Apply a theme"),
            unelevated: "",
            "no-caps": "",
            color: "primary",
            style: {
                width: "200px"
            }
        }, {
            default: u( () => [o(Mt, null, {
                default: u( () => [(V(!0),
                Z(ut, null, gt(Object.keys(v(t)), f => (V(),
                Z(ut, {
                    key: f
                }, [o(we, null, {
                    default: u( () => [o(ne, null, {
                        default: u( () => [o(tt, null, {
                            default: u( () => [Q(E(f), 1)]),
                            _: 2
                        }, 1024)]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024), (V(!0),
                Z(ut, null, gt(Object.keys(v(t)[f]), c => ue((V(),
                X(we, {
                    key: c,
                    value: f + ", " + c,
                    clickable: "",
                    onClick: d => n(f + ", " + c)
                }, {
                    default: u( () => [o(ne, null, {
                        default: u( () => [o(tt, {
                            class: "q-pl-md"
                        }, {
                            default: u( () => [Q(E(c), 1)]),
                            _: 2
                        }, 1024)]),
                        _: 2
                    }, 1024), o(ne, null, {
                        default: u( () => [o(tt, null, {
                            default: u( () => [(V(!0),
                            Z(ut, null, gt(v(t)[f][c], d => (V(),
                            Z("svg", zr, [m("rect", {
                                width: "12",
                                height: "12",
                                style: Zt(`fill: ${d}; stroke-width: 1; stroke: #000`)
                            }, null, 4)]))), 256))]),
                            _: 2
                        }, 1024)]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1032, ["value", "onClick"])), [[Xe]])), 128))], 64))), 128))]),
                _: 1
            })]),
            _: 1
        }, 8, ["label"]))
    }
})
  , Mr = {
    class: "flex gap-lg items-center"
}
  , Ur = {
    class: "flex-1 flex justify-end"
}
  , Or = {
    class: "flex-0"
}
  , Rr = {
    class: "flex-1 flex"
}
  , An = be({
    __name: "BinarySelector",
    props: fo({
        leftValue: {},
        rightValue: {}
    }, {
        modelValue: {
            required: !0
        },
        modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e) {
        const s = rn(e, "modelValue")
          , l = e
          , a = h({
            get: () => s.value === l.rightValue,
            set: t => s.value = t ? l.rightValue : l.leftValue
        });
        return (t, n) => (V(),
        Z("div", Mr, [m("div", Ur, [Gl(t.$slots, "left")]), m("div", Or, [o(mo, {
            class: "fancy-toggle",
            color: "primary",
            modelValue: a.value,
            "onUpdate:modelValue": n[0] || (n[0] = i => a.value = i)
        }, null, 8, ["modelValue"])]), m("div", Rr, [Gl(t.$slots, "right")])]))
    }
})
  , Nr = {
    class: "flex gap-lg items-center",
    style: {
        "margin-top": "6px"
    }
}
  , jr = {
    class: "flex-1 text-right"
}
  , Hr = {
    class: "flex-1"
}
  , Qr = be({
    __name: "CustomizeDialogWheelTypePicker",
    props: {
        modelValue: {
            required: !0
        },
        modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(e) {
        const {t: s} = _e()
          , l = rn(e, "modelValue");
        return (a, t) => (V(),
        Z(ut, null, [o(An, {
            modelValue: l.value,
            "onUpdate:modelValue": t[2] || (t[2] = n => l.value = n),
            leftValue: "color",
            rightValue: "image"
        }, {
            left: u( () => [m("img", {
                src: "/images/color-wheel.png",
                width: "50",
                height: "50",
                alt: "Wheel with colored sections",
                class: "wheel-type-image shadow-1",
                onClick: t[0] || (t[0] = n => l.value = "color")
            })]),
            right: u( () => [m("img", {
                src: "/images/chocolate-chip-cookie.jpg",
                width: "50",
                height: "50",
                alt: "Wheel with cookie background",
                class: "wheel-type-image shadow-1",
                onClick: t[1] || (t[1] = n => l.value = "image")
            })]),
            _: 1
        }, 8, ["modelValue"]), m("div", Nr, [m("span", jr, E(v(s)("optionsdialog.One color")), 1), m("span", Hr, E(v(s)("optionsdialog.Wheel background image")), 1)])], 64))
    }
})
  , Kr = st(Qr, [["__scopeId", "data-v-00b6ea9f"]]);
function Qt(e, s, l, a) {
    const t = [];
    return e.forEach(n => {
        a(n) === !0 ? t.push(n) : s.push({
            failedPropValidation: l,
            file: n
        })
    }
    ),
    t
}
function hl(e) {
    e?.dataTransfer && (e.dataTransfer.dropEffect = "copy"),
    rt(e)
}
const Gr = {
    multiple: Boolean,
    accept: String,
    capture: String,
    maxFileSize: [Number, String],
    maxTotalSize: [Number, String],
    maxFiles: [Number, String],
    filter: Function
}
  , Yr = ["rejected"];
function Xr({editable: e, dnd: s, getFileInput: l, addFilesToQueue: a}) {
    const {props: t, emit: n, proxy: i} = ct()
      , r = F(null)
      , f = h( () => t.accept !== void 0 ? t.accept.split(",").map(S => (S = S.trim(),
    S === "*" ? "*/" : (S.endsWith("/*") && (S = S.slice(0, S.length - 1)),
    S.toUpperCase()))) : null)
      , c = h( () => parseInt(t.maxFiles, 10))
      , d = h( () => parseInt(t.maxTotalSize, 10));
    function g(S) {
        if (e.value)
            if (S !== Object(S) && (S = {
                target: null
            }),
            S.target?.matches('input[type="file"]') === !0)
                S.clientX === 0 && S.clientY === 0 && nt(S);
            else {
                const C = l();
                C !== S.target && C?.click(S)
            }
    }
    function p(S) {
        e.value && S && a(null, S)
    }
    function y(S, C, D, R) {
        let P = Array.from(C || S.target.files);
        const W = []
          , U = () => {
            W.length !== 0 && n("rejected", W)
        }
        ;
        if (t.accept !== void 0 && f.value.indexOf("*/") === -1 && (P = Qt(P, W, "accept", H => f.value.some($ => H.type.toUpperCase().startsWith($) || H.name.toUpperCase().endsWith($))),
        P.length === 0))
            return U();
        if (t.maxFileSize !== void 0) {
            const H = parseInt(t.maxFileSize, 10);
            if (P = Qt(P, W, "max-file-size", $ => $.size <= H),
            P.length === 0)
                return U()
        }
        if (t.multiple !== !0 && P.length !== 0 && (P = [P[0]]),
        P.forEach(H => {
            H.__key = H.webkitRelativePath + H.lastModified + H.name + H.size
        }
        ),
        R === !0) {
            const H = D.map($ => $.__key);
            P = Qt(P, W, "duplicate", $ => H.includes($.__key) === !1)
        }
        if (P.length === 0)
            return U();
        if (t.maxTotalSize !== void 0) {
            let H = R === !0 ? D.reduce( ($, M) => $ + M.size, 0) : 0;
            if (P = Qt(P, W, "max-total-size", $ => (H += $.size,
            H <= d.value)),
            P.length === 0)
                return U()
        }
        if (typeof t.filter == "function") {
            const H = t.filter(P);
            P = Qt(P, W, "filter", $ => H.includes($))
        }
        if (t.maxFiles !== void 0) {
            let H = R === !0 ? D.length : 0;
            if (P = Qt(P, W, "max-files", () => (H++,
            H <= c.value)),
            P.length === 0)
                return U()
        }
        if (U(),
        P.length !== 0)
            return P
    }
    function x(S) {
        hl(S),
        s.value !== !0 && (s.value = !0)
    }
    function w(S) {
        rt(S),
        (S.relatedTarget !== null || yt.is.safari !== !0 ? S.relatedTarget !== r.value : document.elementsFromPoint(S.clientX, S.clientY).includes(r.value) === !1) === !0 && (s.value = !1)
    }
    function T(S) {
        hl(S);
        const C = S.dataTransfer.files;
        C.length !== 0 && a(null, C),
        s.value = !1
    }
    function I(S) {
        if (s.value === !0)
            return A("div", {
                ref: r,
                class: `q-${S}__dnd absolute-full`,
                onDragenter: hl,
                onDragover: hl,
                onDragleave: w,
                onDrop: T
            })
    }
    return Object.assign(i, {
        pickFiles: g,
        addFiles: p
    }),
    {
        pickFiles: g,
        addFiles: p,
        onDragover: x,
        onDragleave: w,
        processFiles: y,
        getDndNode: I,
        maxFilesNumber: c,
        maxTotalSizeNumber: d
    }
}
const Lt = it({
    name: "QFile",
    inheritAttrs: !1,
    props: {
        ...go,
        ...Vl,
        ...Gr,
        modelValue: [File, FileList, Array],
        append: Boolean,
        useChips: Boolean,
        displayValue: [String, Number],
        tabindex: {
            type: [String, Number],
            default: 0
        },
        counterLabel: Function,
        inputClass: [Array, String, Object],
        inputStyle: [Array, String, Object]
    },
    emits: [...ea, ...Yr],
    setup(e, {slots: s, emit: l, attrs: a}) {
        const {proxy: t} = ct()
          , n = aa()
          , i = F(null)
          , r = F(!1)
          , f = Ya(e)
          , {pickFiles: c, onDragover: d, onDragleave: g, processFiles: p, getDndNode: y} = Xr({
            editable: n.editable,
            dnd: r,
            getFileInput: Y,
            addFilesToQueue: ee
        })
          , x = po(e)
          , w = h( () => Object(e.modelValue) === e.modelValue ? "length"in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : [])
          , T = h( () => yl(w.value))
          , I = h( () => w.value.map(L => L.name).join(", "))
          , S = h( () => zi(w.value.reduce( (L, re) => L + re.size, 0)))
          , C = h( () => ({
            totalSize: S.value,
            filesNumber: w.value.length,
            maxFiles: e.maxFiles
        }))
          , D = h( () => ({
            tabindex: -1,
            type: "file",
            title: "",
            accept: e.accept,
            capture: e.capture,
            name: f.value,
            ...a,
            id: n.targetUid.value,
            disabled: n.editable.value !== !0
        }))
          , R = h( () => "q-file q-field--auto-height" + (r.value === !0 ? " q-file--dnd" : ""))
          , P = h( () => e.multiple === !0 && e.append === !0);
        function W(L) {
            const re = w.value.slice();
            re.splice(L, 1),
            H(re)
        }
        function U(L) {
            const re = w.value.indexOf(L);
            re !== -1 && W(re)
        }
        function H(L) {
            l("update:modelValue", e.multiple === !0 ? L : L[0])
        }
        function $(L) {
            L.keyCode === 13 && Kt(L)
        }
        function M(L) {
            (L.keyCode === 13 || L.keyCode === 32) && c(L)
        }
        function Y() {
            return i.value
        }
        function ee(L, re) {
            const ke = p(L, re, w.value, P.value)
              , Le = Y();
            Le != null && (Le.value = ""),
            ke !== void 0 && ((e.multiple === !0 ? e.modelValue && ke.every(B => w.value.includes(B)) : e.modelValue === ke[0]) || H(P.value === !0 ? w.value.concat(ke) : ke))
        }
        function b() {
            return [A("input", {
                class: [e.inputClass, "q-file__filler"],
                style: e.inputStyle
            })]
        }
        function k() {
            if (s.file !== void 0)
                return w.value.length === 0 ? b() : w.value.map( (re, ke) => s.file({
                    index: ke,
                    file: re,
                    ref: this
                }));
            if (s.selected !== void 0)
                return w.value.length === 0 ? b() : s.selected({
                    files: w.value,
                    ref: this
                });
            if (e.useChips === !0)
                return w.value.length === 0 ? b() : w.value.map( (re, ke) => A(_l, {
                    key: "file-" + ke,
                    removable: n.editable.value,
                    dense: !0,
                    textColor: e.color,
                    tabindex: e.tabindex,
                    onRemove: () => {
                        W(ke)
                    }
                }, () => A("span", {
                    class: "ellipsis",
                    textContent: re.name
                })));
            const L = e.displayValue !== void 0 ? e.displayValue : I.value;
            return L.length !== 0 ? [A("div", {
                class: e.inputClass,
                style: e.inputStyle,
                textContent: L
            })] : b()
        }
        function z() {
            const L = {
                ref: i,
                ...D.value,
                ...x.value,
                class: "q-field__input fit absolute-full cursor-pointer",
                onChange: ee
            };
            return e.multiple === !0 && (L.multiple = !0),
            A("input", L)
        }
        return Object.assign(n, {
            fieldClass: R,
            emitValue: H,
            hasValue: T,
            inputRef: i,
            innerValue: w,
            floatingLabel: h( () => T.value === !0 || yl(e.displayValue)),
            computedCounter: h( () => {
                if (e.counterLabel !== void 0)
                    return e.counterLabel(C.value);
                const L = e.maxFiles;
                return `${w.value.length}${L !== void 0 ? " / " + L : ""} (${S.value})`
            }
            ),
            getControlChild: () => y("file"),
            getControl: () => {
                const L = {
                    ref: n.targetRef,
                    class: "q-field__native row items-center cursor-pointer",
                    tabindex: e.tabindex
                };
                return n.editable.value === !0 && Object.assign(L, {
                    onDragover: d,
                    onDragleave: g,
                    onKeydown: $,
                    onKeyup: M
                }),
                A("div", L, [z()].concat(k()))
            }
        }),
        Object.assign(t, {
            removeAtIndex: W,
            removeFile: U,
            getNativeElement: () => i.value
        }),
        un(t, "nativeEl", () => i.value),
        la(n)
    }
});
async function jl(e, s) {
    const l = cn(`api/v2/unsplash-proxy/search/photos?per_page=30&page=${s}&query=${e}`)
      , t = await (await fetch(l)).json();
    return {
        total: t.total,
        totalPages: t.total_pages,
        page: s,
        results: t.results.map(n => ({
            url: `${n.urls.raw}&q=80&fm=jpg&cs=tinysrgb&fit=crop&w=700&h=700`,
            thumbnailUrl: `${n.urls.raw}&q=60&fm=jpg&cs=tinysrgb&fit=crop&w=272&h=272`,
            blur_hash: n.blur_hash,
            userName: n.user.name,
            userLink: `${n.user.links.html}?utm_source=Wheel+of+Names&utm_medium=referral`,
            photoLink: `${n.links.html}?utm_source=Wheel+of+Names&utm_medium=referral`,
            downloadLocationLink: n.links.download_location
        }))
    }
}
async function Jr(e) {
    const s = e.replace("https://api.unsplash.com", "")
      , l = cn(`api/v2/unsplash-proxy${s}`);
    fetch(l)
}
const Zr = {
    class: "text-h6"
}
  , eu = {
    class: "row wrap images-grid"
}
  , tu = {
    class: "q-mt-xs"
}
  , lu = ["href"]
  , au = ["href"]
  , nu = {
    key: 0,
    style: {
        margin: "auto"
    },
    class: "q-pt-md"
}
  , ou = {
    __name: "UnsplashDialog",
    emits: ["picked-unsplash-image"],
    setup(e, {expose: s, emit: l}) {
        const a = l
          , {t} = _e()
          , n = F(!1)
          , i = F([])
          , r = F(1)
          , f = F(1)
          , c = F({});
        function d(I) {
            c.value = I
        }
        const g = F("")
          , p = F("");
        he( () => g.value, async () => {
            if (g.value && g.value !== p.value)
                try {
                    r.value = 1,
                    p.value = g.value;
                    const I = await jl(g.value, 1);
                    i.value = I.results,
                    f.value = I.totalPages
                } catch (I) {
                    Ue("SearchUnsplashError", I),
                    Ne(t, I)
                }
        }
        );
        function y() {
            n.value = !1
        }
        function x() {
            c.value?.url && (a("picked-unsplash-image", c.value.url),
            Jr(c.value.downloadLocationLink),
            J("Wheel", "AddUnsplashImage")),
            n.value = !1
        }
        async function w() {
            J("Wheel", "ShowUnsplashDialog"),
            c.value = {},
            g.value = "",
            p.value = "",
            i.value = [],
            r.value = 1,
            f.value = 1,
            n.value = !0;
            const I = ho(["puppy", "kitten", "colors", "candy", "rainbow", "sunset", "umbrellas", "sunflowers", "ball pit", "balloons", "fruit", "lights", "ice cream", "golden gate bridge", "fish", "holi", "cloud", "textures", "fireworks", "colors", "lemons", "galaxy", "spiral", "tie dye"]);
            try {
                const S = await jl(I, 1);
                i.value = S.results
            } catch (S) {
                Ue("SearchUnsplashError", S),
                Ne(t, S)
            }
        }
        async function T() {
            try {
                r.value++;
                const I = await jl(g.value, r.value);
                i.value = i.value.concat(I.results)
            } catch (I) {
                Ue("SearchUnsplashError", I),
                Ne(t, I)
            }
        }
        return s({
            show: w
        }),
        (I, S) => (V(),
        X(Ye, {
            modelValue: n.value,
            "onUpdate:modelValue": S[4] || (S[4] = C => n.value = C)
        }, {
            default: u( () => [o(at, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [o(Ae, {
                    class: "row items-center",
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", Zr, [S[5] || (S[5] = m("i", {
                        class: "fas fa-image"
                    }, null, -1)), Q(" " + E(v(t)("unsplashdialog.Search the gallery")) + " — ", 1), S[6] || (S[6] = m("a", {
                        href: "https://unsplash.com/?utm_source=Wheel+of+Names&utm_medium=referral",
                        target: "_new"
                    }, " Unsplash ", -1))]), o(Ct), o(qt)]),
                    _: 1
                }), o(Ae, {
                    class: "q-gutter-y-md"
                }, {
                    default: u( () => [o(lt, {
                        dense: "",
                        filled: "",
                        autofocus: "",
                        placeholder: v(t)("common.Search"),
                        modelValue: g.value,
                        "onUpdate:modelValue": S[0] || (S[0] = C => g.value = C),
                        debounce: 600
                    }, {
                        prepend: u( () => [o(De, {
                            name: "fas fa-search"
                        })]),
                        _: 1
                    }, 8, ["placeholder", "modelValue"]), m("div", eu, [(V(!0),
                    Z(ut, null, gt(i.value, C => (V(),
                    Z("div", {
                        class: Xt(["col-auto q-pa-md", C == c.value ? "selected-image" : ""]),
                        style: {
                            "text-align": "center",
                            width: "50%",
                            overflow: "hidden"
                        }
                    }, [o(ei, {
                        src: C.thumbnailUrl,
                        class: "unsplash-image",
                        onClick: D => d(C)
                    }, null, 8, ["src", "onClick"]), m("div", tu, [m("a", {
                        href: C.photoLink,
                        target: "_new"
                    }, "Photo", 8, lu), S[7] || (S[7] = Q(" by ", -1)), m("a", {
                        href: C.userLink,
                        target: "_new"
                    }, E(C.userName), 9, au)])], 2))), 256)), i.value.length > 0 && g.value && r.value < f.value ? (V(),
                    Z("div", nu, [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(t)("common.Load more"),
                        onClick: S[1] || (S[1] = C => T())
                    }, null, 8, ["label"])])) : ye("", !0)])]),
                    _: 1
                }), o(dt, {
                    align: "right"
                }, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(t)("common.Cancel"),
                        onClick: S[2] || (S[2] = C => y())
                    }, null, 8, ["label"]), o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(t)("common.OK"),
                        onClick: S[3] || (S[3] = C => x())
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
}
  , pa = st(ou, [["__scopeId", "data-v-53e97679"]])
  , iu = ["src"]
  , su = be({
    __name: "CustomizeDialogCenterImagePicker",
    props: ["imageSrc", "centerText", "isAdvanced"],
    emits: ["set-center-gallery-image", "set-center-uploaded-image", "set-center-no-image", "set-center-text", "set-color-values"],
    setup(e, {emit: s}) {
        const {t: l} = _e()
          , a = e
          , t = s
          , n = F()
          , i = F(a.centerText)
          , r = h( () => a.imageSrc && a.imageSrc !== "/images/none.png")
          , f = F(!1);
        function c() {
            f.value = !1,
            i.value = "",
            t("set-center-no-image")
        }
        const d = F(null);
        function g() {
            d.value.pickFiles()
        }
        he( () => n.value, I => {
            f.value = !1;
            const S = new FileReader;
            S.onload = async C => {
                if (!C.target?.result)
                    return;
                J("Wheel", "UploadCenterImage", "Customize dialog");
                const D = await dn(C.target.result.toString());
                t("set-center-uploaded-image", {
                    fileName: I.name,
                    dataUri: D
                }),
                p(I.name, D)
            }
            ,
            S.readAsDataURL(I)
        }
        );
        async function p(I, S) {
            if (!a.isAdvanced) {
                const C = l("optionsdialog.Adjust colors on the wheel")
                  , D = l("optionsdialog.Your image has been uploaded", {
                    fileName: I
                });
                if (await da(l, C, D)) {
                    J("Wheel", "SetColorsFromCustomPicture", "");
                    const R = await vn(S);
                    t("set-color-values", R)
                }
            }
        }
        function y() {
            f.value = !1,
            t("set-center-text", i.value)
        }
        const x = F(null);
        function w() {
            x.value.show(),
            f.value = !1
        }
        function T(I) {
            t("set-center-gallery-image", I)
        }
        return (I, S) => (V(),
        Z("div", null, [o(St, {
            unelevated: "",
            color: "primary",
            modelValue: f.value,
            "onUpdate:modelValue": S[2] || (S[2] = C => f.value = C)
        }, {
            label: u( () => [o(At, null, {
                default: u( () => [r.value ? (V(),
                Z("img", {
                    key: 1,
                    src: e.imageSrc,
                    alt: ""
                }, null, 8, iu)) : (V(),
                X(De, {
                    key: 0,
                    name: "fas fa-image"
                }))]),
                _: 1
            })]),
            default: u( () => [o(Mt, null, {
                default: u( () => [r.value ? (V(),
                X(we, {
                    key: 0
                }, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        dense: "",
                        "no-caps": "",
                        color: "warning",
                        "text-color": "black",
                        icon: "fas fa-ban",
                        label: v(l)("optionsdialog.Remove image"),
                        onClick: c
                    }, null, 8, ["label"])]),
                    _: 1
                })) : ye("", !0), o(we, null, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        dense: "",
                        "no-caps": "",
                        color: "primary",
                        "text-color": "white",
                        icon: "fas fa-search",
                        label: v(l)("unsplashdialog.Search the gallery"),
                        onClick: w
                    }, null, 8, ["label"])]),
                    _: 1
                }), o(we, null, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        dense: "",
                        "no-caps": "",
                        color: "primary",
                        "text-color": "white",
                        icon: "fas fa-upload",
                        label: v(l)("optionsdialog.Upload image"),
                        onClick: g
                    }, null, 8, ["label"]), ue(o(Lt, {
                        ref_key: "filePicker",
                        ref: d,
                        accept: "image/*",
                        modelValue: n.value,
                        "onUpdate:modelValue": S[0] || (S[0] = C => n.value = C)
                    }, null, 8, ["modelValue"]), [[We, !1]])]),
                    _: 1
                }), o(we, null, {
                    default: u( () => [o(ne, null, {
                        default: u( () => [o(lt, {
                            dense: "",
                            filled: "",
                            placeholder: v(l)("optionsdialog.Center text"),
                            onKeyup: el(y, ["native", "enter"]),
                            maxlength: "20",
                            modelValue: i.value,
                            "onUpdate:modelValue": S[1] || (S[1] = C => i.value = C)
                        }, null, 8, ["placeholder", "modelValue"])]),
                        _: 1
                    }), o(ne, {
                        side: ""
                    }, {
                        default: u( () => [o(O, {
                            unelevated: "",
                            dense: "",
                            "no-caps": "",
                            color: "primary",
                            label: v(l)("common.Save"),
                            onClick: y
                        }, null, 8, ["label"])]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]), o(pa, {
            ref_key: "unsplashDialog",
            ref: x,
            onPickedUnsplashImage: T
        }, null, 512)]))
    }
})
  , ru = [{
    fileName: "/images/autumn-leaves.jpg",
    title: "Autumn leaves"
}, {
    fileName: "/images/beach-ball.jpg",
    title: "Beach ball"
}, {
    fileName: "/images/birth-of-the-universe.jpg",
    title: "Birth of the universe"
}, {
    fileName: "/images/blue-frost-pattern.jpg",
    title: "Blue frost pattern"
}, {
    fileName: "/images/blue-glowing-vortex.jpg",
    title: "Blue glowing vortex"
}, {
    fileName: "/images/blue-swirl.jpg",
    title: "Blue swirl"
}, {
    fileName: "/images/caffe-latte.jpg",
    title: "Caffe latte"
}, {
    fileName: "/images/cat-portrait.jpg",
    title: "Cat portrait"
}, {
    fileName: "/images/chocolate-chip-cookie.jpg",
    title: "Chocolate chip cookie"
}, {
    fileName: "/images/christmas-wrapping-paper.jpg",
    title: "Christmas wrapping paper"
}, {
    fileName: "/images/disco-ball.jpg",
    title: "Disco ball"
}, {
    fileName: "/images/dog-portrait.jpg",
    title: "Dog portrait"
}, {
    fileName: "/images/donut.jpg",
    title: "Donut"
}, {
    fileName: "/images/gerbera-flower.jpg",
    title: "Gerbera flower"
}, {
    fileName: "/images/globe.jpg",
    title: "Globe"
}, {
    fileName: "/images/green-grass.jpg",
    title: "Green grass"
}, {
    fileName: "/images/green-leaves.jpg",
    title: "Green leaves"
}, {
    fileName: "/images/halloween.jpg",
    title: "Halloween"
}, {
    fileName: "/images/moon.jpg",
    title: "Moon"
}, {
    fileName: "/images/night-sky.jpg",
    title: "Night sky"
}, {
    fileName: "/images/orange-slice.jpg",
    title: "Orange slice"
}, {
    fileName: "/images/palm-trees.jpg",
    title: "Palm trees"
}, {
    fileName: "/images/rainbow.jpg",
    title: "Rainbow"
}, {
    fileName: "/images/soccer-ball.jpg",
    title: "Soccer ball"
}, {
    fileName: "/images/spiral-nebula.jpg",
    title: "Spiral nebula"
}, {
    fileName: "/images/spiral-tie-dye.jpg",
    title: "Spiral tie-dye"
}, {
    fileName: "/images/star-trails.jpg",
    title: "Star trails"
}, {
    fileName: "/images/water-in-pool.jpg",
    title: "Water in pool"
}, {
    fileName: "/images/water-swirl.jpg",
    title: "Water swirl"
}, {
    fileName: "/images/whirlpool.jpg",
    title: "Whirlpool"
}, {
    fileName: "/images/wood.jpg",
    title: "Wood"
}, {
    fileName: "/images/year-of-the-tiger.jpg",
    title: "Year of the Tiger"
}]
  , uu = ["src"]
  , cu = ["src"]
  , du = be({
    __name: "CustomizeDialogBackgroundImagePicker",
    props: ["imageSrc"],
    emits: ["set-background-gallery-image", "set-background-uploaded-image"],
    setup(e, {emit: s}) {
        const {t: l} = _e()
          , a = s
          , t = F(null)
          , n = F(!1)
          , i = F(null);
        function r() {
            i.value.pickFiles()
        }
        he(t, g => {
            if (!g)
                return;
            n.value = !1;
            const p = new FileReader;
            p.onload = async y => {
                if (!y.target?.result)
                    return;
                J("Wheel", "UploadBackgroundImage", "Customize dialog");
                const x = await fn(y.target.result.toString());
                a("set-background-uploaded-image", {
                    fileName: g.name,
                    dataUri: x
                })
            }
            ,
            p.readAsDataURL(g)
        }
        );
        const f = F(null);
        function c() {
            f.value.show(),
            n.value = !1
        }
        function d(g) {
            a("set-background-gallery-image", g)
        }
        return (g, p) => (V(),
        Z("div", null, [o(St, {
            unelevated: "",
            color: "primary",
            modelValue: n.value,
            "onUpdate:modelValue": p[1] || (p[1] = y => n.value = y)
        }, {
            label: u( () => [o(At, null, {
                default: u( () => [m("img", {
                    src: e.imageSrc,
                    alt: ""
                }, null, 8, uu)]),
                _: 1
            })]),
            default: u( () => [o(Mt, null, {
                default: u( () => [o(we, null, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        dense: "",
                        "no-caps": "",
                        color: "primary",
                        "text-color": "white",
                        icon: "fas fa-search",
                        label: v(l)("unsplashdialog.Search the gallery"),
                        onClick: c
                    }, null, 8, ["label"])]),
                    _: 1
                }), o(we, null, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        dense: "",
                        "no-caps": "",
                        color: "primary",
                        "text-color": "white",
                        icon: "fas fa-upload",
                        label: v(l)("optionsdialog.Upload image"),
                        onClick: r
                    }, null, 8, ["label"]), ue(o(Lt, {
                        ref_key: "filePicker",
                        ref: i,
                        accept: "image/*",
                        modelValue: t.value,
                        "onUpdate:modelValue": p[0] || (p[0] = y => t.value = y)
                    }, null, 8, ["modelValue"]), [[We, !1]])]),
                    _: 1
                }), (V(!0),
                Z(ut, null, gt(v(ru), y => ue((V(),
                X(we, {
                    key: y.fileName,
                    clickable: "",
                    onClick: x => d(y.fileName)
                }, {
                    default: u( () => [o(ne, {
                        avatar: ""
                    }, {
                        default: u( () => [o(At, null, {
                            default: u( () => [m("img", {
                                src: y.fileName
                            }, null, 8, cu)]),
                            _: 2
                        }, 1024)]),
                        _: 2
                    }, 1024), o(ne, null, {
                        default: u( () => [Q(E(y.title), 1)]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1032, ["onClick"])), [[ra], [Xe]])), 128))]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]), o(pa, {
            ref_key: "unsplashDialog",
            ref: f,
            onPickedUnsplashImage: d
        }, null, 512)]))
    }
})
  , vu = {
    class: "q-gutter-x-md"
}
  , fu = {
    class: "q-gutter-x-md"
}
  , mu = {
    class: "row q-gutter-x-md"
}
  , gu = {
    class: "col-shrink"
}
  , pu = {
    class: "col-grow"
}
  , hu = {
    class: "q-ml-md q-gutter-md"
}
  , bu = {
    class: "q-gutter-y-md"
}
  , yu = {
    class: "row wrap"
}
  , wu = {
    class: "row q-gutter-sm items-center"
}
  , _u = {
    class: "col-xs-6 col-md-auto"
}
  , Fu = {
    class: "col-xs-5 col-md-2"
}
  , Su = {
    class: "col-xs-6 col-md-auto"
}
  , Cu = {
    class: "col-xs-5 col-md-2"
}
  , ku = {
    class: "row items-center q-gutter-md"
}
  , xu = {
    class: "col-shrink"
}
  , Du = {
    class: "col-shrink"
}
  , Au = {
    class: "row items-center"
}
  , Vu = {
    class: "col"
}
  , Eu = {
    class: "col"
}
  , $u = {
    class: "col"
}
  , Bu = be({
    __name: "CustomizeDialog",
    setup(e, {expose: s}) {
        const {t: l} = _e()
          , a = Oe()
          , t = F(!1)
          , n = F("duringSpin")
          , i = F(null)
          , r = h( () => i.value.entries.some(ee => "weight"in ee && ee.weight !== 1))
          , f = h( () => {
            if (i.value.getFirstText)
                return i.value.getFirstText()
        }
        )
          , c = h({
            get: () => i.value.type,
            set: ee => {
                ee === "image" ? (i.value.type = "image",
                i.value.coverImageType || (i.value.coverImageType = "gallery",
                i.value.coverImageName = "/images/chocolate-chip-cookie.jpg")) : i.value.type = "color"
            }
        })
          , d = Object.keys(bo)
          , g = h( () => {
            if (i.value.getWheelImage)
                return i.value.getWheelImage()
        }
        )
          , p = h( () => i.value.coverImageType === "gallery" ? i.value.coverImageName : i.value.coverImageType === "uploaded" ? i.value.customCoverImageDataUri : "/images/none.png");
        function y() {
            i.value = a.wheelConfig.clone(),
            D = "",
            J("Wheel", "ShowCustomizeDialog"),
            t.value = !0
        }
        function x() {
            Fl(),
            Sl(),
            D && J("Wheel", "SelectedTheme", D),
            a.setWheelConfig(i.value.clone()),
            a.unsavedChanges = !0,
            t.value = !1
        }
        function w() {
            Fl(),
            Sl(),
            t.value = !1
        }
        function T(ee) {
            i.value.duringSpinSound = ee
        }
        function I(ee) {
            i.value.duringSpinSoundVolume = ee
        }
        function S(ee) {
            i.value.afterSpinSound = ee
        }
        function C(ee) {
            i.value.afterSpinSoundVolume = ee
        }
        let D = "";
        function R(ee) {
            D = ee.name,
            P(ee.colors)
        }
        function P(ee) {
            i.value.setColorValues(ee)
        }
        function W() {
            i.value.pictureType = "none",
            i.value.galleryPicture = "",
            i.value.customPictureName = "",
            i.value.customPictureDataUri = "",
            i.value.centerText = ""
        }
        function U(ee) {
            i.value.pictureType = "gallery",
            i.value.galleryPicture = ee,
            i.value.customPictureName = "",
            i.value.customPictureDataUri = "",
            i.value.centerText = ""
        }
        function H(ee) {
            i.value.pictureType = "text",
            i.value.galleryPicture = "",
            i.value.customPictureName = "",
            i.value.customPictureDataUri = "",
            i.value.centerText = ee,
            i.value.customPictureDataUri = yo(ee)
        }
        function $({fileName: ee, dataUri: b}) {
            i.value.setUploadedCenterImage(ee, b)
        }
        function M(ee) {
            i.value.coverImageType = "gallery",
            i.value.coverImageName = ee,
            i.value.customCoverImageDataUri = ""
        }
        function Y({fileName: ee, dataUri: b}) {
            i.value.setUploadedBackgroundImage(ee, b)
        }
        return s({
            show: y
        }),
        (ee, b) => (V(),
        X(Ye, {
            modelValue: t.value,
            "onUpdate:modelValue": b[21] || (b[21] = k => t.value = k)
        }, {
            default: u( () => [o(at, {
                style: {
                    width: "800px"
                }
            }, {
                default: u( () => [o(Ae, {
                    style: {
                        "max-height": "74vh"
                    },
                    class: "scroll"
                }, {
                    default: u( () => [o(dl, {
                        modelValue: n.value,
                        "onUpdate:modelValue": b[0] || (b[0] = k => n.value = k),
                        "no-caps": ""
                    }, {
                        default: u( () => [o(vt, {
                            name: "duringSpin",
                            label: v(l)("optionsdialog.During spin")
                        }, null, 8, ["label"]), o(vt, {
                            name: "afterSpin",
                            label: v(l)("optionsdialog.After spin")
                        }, null, 8, ["label"]), o(vt, {
                            name: "appearance",
                            label: v(l)("optionsdialog.Appearance")
                        }, null, 8, ["label"])]),
                        _: 1
                    }, 8, ["modelValue"]), o(ga, {
                        modelValue: n.value,
                        "onUpdate:modelValue": b[20] || (b[20] = k => n.value = k),
                        animated: ""
                    }, {
                        default: u( () => [o(Et, {
                            name: "duringSpin",
                            class: "q-gutter-y-md no-scroll q-pt-lg tab-panel"
                        }, {
                            default: u( () => [o(br, {
                                duringSpinSound: i.value.duringSpinSound,
                                duringSpinSoundVolume: i.value.duringSpinSoundVolume,
                                onSetDuringSpinSound: T,
                                onSetDuringSpinSoundVolume: I
                            }, null, 8, ["duringSpinSound", "duringSpinSoundVolume"]), b[23] || (b[23] = m("hr", {
                                class: "low-opacity"
                            }, null, -1)), m("div", vu, [m("span", null, [o(Ge, {
                                modelValue: i.value.allowDuplicates,
                                "onUpdate:modelValue": b[1] || (b[1] = k => i.value.allowDuplicates = k),
                                label: v(l)("optionsdialog.Display duplicates")
                            }, null, 8, ["modelValue", "label"]), o(sl, {
                                title: v(l)("optionsdialog.Display every entry")
                            }, null, 8, ["title"])]), o(Ge, {
                                modelValue: i.value.slowSpin,
                                "onUpdate:modelValue": b[2] || (b[2] = k => i.value.slowSpin = k),
                                label: v(l)("optionsdialog.Spin slowly")
                            }, null, 8, ["modelValue", "label"]), o(Ge, {
                                modelValue: i.value.showTitle,
                                "onUpdate:modelValue": b[3] || (b[3] = k => i.value.showTitle = k),
                                label: v(l)("optionsdialog.Show title")
                            }, null, 8, ["modelValue", "label"])]), b[24] || (b[24] = m("hr", {
                                class: "low-opacity"
                            }, null, -1)), m("div", null, [m("div", null, E(v(l)("optionsdialog.Spin time (seconds)")), 1), o(_t, {
                                modelValue: i.value.spinTime,
                                "onUpdate:modelValue": b[4] || (b[4] = k => i.value.spinTime = k),
                                min: 1,
                                max: 60,
                                label: "",
                                "marker-labels": [1, 10, 20, 30, 40, 50, 60],
                                class: "customize-slider"
                            }, null, 8, ["modelValue"])]), b[25] || (b[25] = m("hr", {
                                class: "low-opacity"
                            }, null, -1)), m("div", null, [m("b", null, E(v(l)("optionsdialog.Max names on wheel")), 1), r.value ? (V(),
                            X(sl, {
                                key: 0,
                                title: v(l)("optionsdialog.Disabled because the entries")
                            }, null, 8, ["title"])) : ye("", !0), b[22] || (b[22] = m("br", null, null, -1)), m("small", null, E(v(l)("optionsdialog.All names in the text-box")), 1), o(_t, {
                                modelValue: i.value.maxNames,
                                "onUpdate:modelValue": b[5] || (b[5] = k => i.value.maxNames = k),
                                min: 4,
                                max: 1e3,
                                label: "",
                                "marker-labels": [4, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3],
                                disable: r.value,
                                class: "customize-slider"
                            }, null, 8, ["modelValue", "disable"])])]),
                            _: 1,
                            __: [23, 24, 25]
                        }), o(Et, {
                            name: "afterSpin",
                            class: "q-gutter-y-md no-scroll q-pt-lg tab-panel"
                        }, {
                            default: u( () => [o(Ar, {
                                afterSpinSound: i.value.afterSpinSound,
                                afterSpinSoundVolume: i.value.afterSpinSoundVolume,
                                firstTextOnWheel: f.value,
                                onSetAfterSpinSound: S,
                                onSetAfterSpinSoundVolume: C
                            }, null, 8, ["afterSpinSound", "afterSpinSoundVolume", "firstTextOnWheel"]), b[26] || (b[26] = m("hr", {
                                class: "low-opacity"
                            }, null, -1)), m("div", fu, [o(Ge, {
                                modelValue: i.value.animateWinner,
                                "onUpdate:modelValue": b[6] || (b[6] = k => i.value.animateWinner = k),
                                label: v(l)("optionsdialog.Animate winning entry")
                            }, null, 8, ["modelValue", "label"]), o(Ge, {
                                modelValue: i.value.launchConfetti,
                                "onUpdate:modelValue": b[7] || (b[7] = k => i.value.launchConfetti = k),
                                label: v(l)("optionsdialog.Launch confetti")
                            }, null, 8, ["modelValue", "label"]), o(Ge, {
                                modelValue: i.value.autoRemoveWinner,
                                "onUpdate:modelValue": b[8] || (b[8] = k => i.value.autoRemoveWinner = k),
                                label: v(l)("optionsdialog.Auto-remove winner after 5 seconds")
                            }, null, 8, ["modelValue", "label"])]), b[27] || (b[27] = m("hr", {
                                class: "low-opacity"
                            }, null, -1)), m("div", null, [m("div", mu, [m("div", gu, [o(Ge, {
                                modelValue: i.value.displayWinnerDialog,
                                "onUpdate:modelValue": b[9] || (b[9] = k => i.value.displayWinnerDialog = k),
                                label: v(l)("optionsdialog.Display popup with message:")
                            }, null, 8, ["modelValue", "label"])]), m("div", pu, [o(lt, {
                                modelValue: i.value.winnerMessage,
                                "onUpdate:modelValue": b[10] || (b[10] = k => i.value.winnerMessage = k),
                                dense: "",
                                filled: "",
                                disable: !i.value.displayWinnerDialog,
                                maxlength: "100",
                                placeholder: v(l)("common.We have a winner!")
                            }, null, 8, ["modelValue", "disable", "placeholder"])])]), m("div", hu, [o(Ge, {
                                modelValue: i.value.displayRemoveButton,
                                "onUpdate:modelValue": b[11] || (b[11] = k => i.value.displayRemoveButton = k),
                                label: v(l)("optionsdialog.Display Remove button"),
                                disable: !i.value.displayWinnerDialog
                            }, null, 8, ["modelValue", "label", "disable"]), i.value.isAdvanced ? (V(),
                            X(Ge, {
                                key: 0,
                                modelValue: i.value.displayHideButton,
                                "onUpdate:modelValue": b[12] || (b[12] = k => i.value.displayHideButton = k),
                                label: v(l)("optionsdialog.Display Hide button"),
                                disable: !i.value.displayWinnerDialog
                            }, null, 8, ["modelValue", "label", "disable"])) : ye("", !0)])]), o(Ge, {
                                modelValue: i.value.playClickWhenWinnerRemoved,
                                "onUpdate:modelValue": b[13] || (b[13] = k => i.value.playClickWhenWinnerRemoved = k),
                                label: v(l)("optionsdialog.Play click sound when the winner is removed")
                            }, null, 8, ["modelValue", "label"])]),
                            _: 1,
                            __: [26, 27]
                        }), o(Et, {
                            name: "appearance",
                            class: "q-gutter-y-md q-pt-lg tab-panel"
                        }, {
                            default: u( () => [o(Kr, {
                                modelValue: c.value,
                                "onUpdate:modelValue": b[14] || (b[14] = k => c.value = k)
                            }, null, 8, ["modelValue"]), b[29] || (b[29] = m("hr", {
                                class: "low-opacity"
                            }, null, -1)), ue(m("div", bu, [o(Lr, {
                                onSetColorTheme: R
                            }), m("div", null, [Q(E(v(l)("optionsdialog.Customize colors")) + " ", 1), o(sl, {
                                title: v(l)("optionsdialog.Colors tooltip")
                            }, null, 8, ["title"])]), m("div", yu, [(V(!0),
                            Z(ut, null, gt(i.value.colorSettings, (k, z) => (V(),
                            Z("div", {
                                key: z,
                                class: "col"
                            }, [o(Ge, {
                                modelValue: k.enabled,
                                "onUpdate:modelValue": L => k.enabled = L
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]), o(St, {
                                "dropdown-icon": "fas fa-palette",
                                style: Zt({
                                    width: "48px",
                                    background: k.color,
                                    color: v(ul)(k.color)
                                }),
                                dense: "",
                                disable: !k.enabled
                            }, {
                                default: u( () => [o(Dl, {
                                    modelValue: k.color,
                                    "onUpdate:modelValue": L => k.color = L,
                                    "default-view": "palette"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                                _: 2
                            }, 1032, ["style", "disable"])]))), 128))]), b[28] || (b[28] = m("hr", {
                                class: "low-opacity"
                            }, null, -1)), m("div", wu, [m("div", _u, E(v(l)("optionsdialog.Image in the center of the wheel")), 1), m("div", Fu, [o(su, {
                                imageSrc: g.value,
                                centerText: i.value.centerText,
                                isAdvanced: i.value.isAdvanced,
                                onSetCenterNoImage: W,
                                onSetCenterGalleryImage: U,
                                onSetCenterText: H,
                                onSetCenterUploadedImage: $,
                                onSetColorValues: P
                            }, null, 8, ["imageSrc", "centerText", "isAdvanced"])]), m("div", Su, E(v(l)("optionsdialog.Image size")), 1), m("div", Cu, [o(Ft, {
                                filled: "",
                                dense: "",
                                modelValue: i.value.hubSize,
                                "onUpdate:modelValue": b[15] || (b[15] = k => i.value.hubSize = k),
                                options: v(d)
                            }, null, 8, ["modelValue", "options"])])])], 512), [[We, i.value.type === "color"]]), ue(m("div", null, [m("div", ku, [m("div", xu, E(v(l)("optionsdialog.Wheel background image")), 1), m("div", Du, [o(du, {
                                imageSrc: p.value,
                                onSetBackgroundGalleryImage: M,
                                onSetBackgroundUploadedImage: Y
                            }, null, 8, ["imageSrc"])])])], 512), [[We, i.value.type === "image"]]), b[30] || (b[30] = m("hr", {
                                class: "low-opacity"
                            }, null, -1)), m("div", Au, [m("div", Vu, E(v(l)("optionsdialog.Background color")), 1), m("div", Eu, [o(St, {
                                "dropdown-icon": "fas fa-palette",
                                style: Zt({
                                    background: i.value.pageBackgroundColor,
                                    color: v(ul)(i.value.pageBackgroundColor)
                                }),
                                class: "col q-mr-sm"
                            }, {
                                default: u( () => [o(Dl, {
                                    modelValue: i.value.pageBackgroundColor,
                                    "onUpdate:modelValue": b[16] || (b[16] = k => i.value.pageBackgroundColor = k),
                                    "default-view": "palette"
                                }, null, 8, ["modelValue"])]),
                                _: 1
                            }, 8, ["style"])]), m("div", $u, [o(Ge, {
                                modelValue: i.value.drawOutlines,
                                "onUpdate:modelValue": b[17] || (b[17] = k => i.value.drawOutlines = k),
                                label: v(l)("optionsdialog.Contours")
                            }, null, 8, ["modelValue", "label"]), o(Ge, {
                                modelValue: i.value.drawShadow,
                                "onUpdate:modelValue": b[18] || (b[18] = k => i.value.drawShadow = k),
                                label: v(l)("optionsdialog.Wheel shadow")
                            }, null, 8, ["modelValue", "label"]), i.value.type === "color" ? (V(),
                            X(Ge, {
                                key: 0,
                                modelValue: i.value.pointerChangesColor,
                                "onUpdate:modelValue": b[19] || (b[19] = k => i.value.pointerChangesColor = k),
                                label: v(l)("optionsdialog.Pointer changes color")
                            }, null, 8, ["modelValue", "label"])) : ye("", !0)])])]),
                            _: 1,
                            __: [29, 30]
                        })]),
                        _: 1
                    }, 8, ["modelValue"])]),
                    _: 1
                }), o(dt, {
                    align: "right"
                }, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(l)("common.Cancel"),
                        onClick: w
                    }, null, 8, ["label"]), o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(l)("common.OK"),
                        onClick: x
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , Tu = st(Bu, [["__scopeId", "data-v-a7f825fb"]])
  , Iu = {
    class: "text-h6"
}
  , qu = {
    class: "q-ma-none"
}
  , Wu = be({
    __name: "SheetLoginDialog",
    setup(e, {expose: s}) {
        const {t: l, locale: a} = _e()
          , t = It()
          , n = F(!1);
        let i, r;
        async function f() {
            return J("Wheel", "ShowSpreadsheetDialog"),
            n.value = !0,
            new Promise( (g, p) => {
                i = g,
                r = p
            }
            )
        }
        async function c() {
            n.value = !1;
            try {
                J("Wheel", "LoginForSheetAttempt", "");
                const g = await t.logInToSheets(a.value);
                J("Wheel", "LoginForSheetSuccess", ""),
                i(g)
            } catch (g) {
                Ue("LoginForSheetError", g),
                J("Wheel", "LoginForSheetFailure", ln(g)),
                Ne(l, g),
                r()
            }
        }
        function d() {
            n.value = !1,
            i()
        }
        return s({
            askUserToLogIn: f
        }),
        (g, p) => (V(),
        X(Ye, {
            modelValue: n.value,
            "onUpdate:modelValue": p[0] || (p[0] = y => n.value = y)
        }, {
            default: u( () => [o(at, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [o(Ae, {
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", Iu, [p[1] || (p[1] = m("i", {
                        class: "fa-solid fa-file-arrow-up"
                    }, null, -1)), Q(" " + E(v(l)("common.Import Google Spreadsheet")), 1)])]),
                    _: 1
                }), o(Ae, {
                    class: "flex f-col gap"
                }, {
                    default: u( () => [m("p", qu, E(v(l)("sheetdialog.To import sheets")), 1)]),
                    _: 1
                }), o(dt, {
                    align: "right"
                }, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(l)("common.Cancel"),
                        onClick: d
                    }, null, 8, ["label"]), m("input", {
                        type: "image",
                        style: {
                            height: "40px"
                        },
                        alt: "Sign in with Google",
                        src: "/images/btn_google_signin_dark_normal_web@2x.png",
                        onClick: c
                    })]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
});
async function Pu(e) {
    return (await gapi.client.sheets.spreadsheets.get({
        spreadsheetId: e
    })).result.properties.title
}
async function zu(e) {
    return (await gapi.client.sheets.spreadsheets.get({
        spreadsheetId: e
    })).result.sheets.map(l => l.properties.title)
}
async function Lu(e, s) {
    const l = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: e,
        range: s
    })
      , a = []
      , t = l.result;
    if (t.values && t.values.length > 0) {
        const n = Vn(t.values)[0];
        for (let i = 0; i < n.length && i < 27; i++)
            a.push({
                value: String.fromCharCode(i + 65),
                label: n[i]
            })
    }
    return a
}
async function Mu(e, s) {
    const {result: l} = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: e,
        range: s,
        valueRenderOption: "UNFORMATTED_VALUE"
    })
      , a = [];
    if (l.values && l.values.length > 0) {
        const t = Vn(l.values);
        for (let n = 0; n < t[0].length && n < 27; n++)
            t.every( (i, r) => r === 0 || !Number.isNaN(Number(i[n])) && i[n] > 0) && a.push({
                value: String.fromCharCode(n + 65),
                label: t[0][n]
            })
    }
    return a
}
async function Uu(e, s, l, a, t) {
    const n = (await Ou(e, s, l, t)).filter(c => c.text).filter( (c, d) => d !== 0 || !a)
      , {parsedRows: i, rowIndiciesWithInvalidWeights: r} = Ru(n);
    return {
        entries: i.map( ({text: c, weight: d}) => t ? {
            text: c,
            weight: d,
            enabled: !0
        } : {
            text: c
        }),
        rowIndiciesWithInvalidWeights: r
    }
}
async function Ou(e, s, l, a) {
    const {result: t} = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: e,
        range: `${s}!${l}:${l}`
    })
      , {result: n} = a ? await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: e,
        range: `${s}!${a}:${a}`,
        valueRenderOption: "UNFORMATTED_VALUE"
    }) : {
        result: {
            values: []
        }
    };
    return t.values.map( (i, r) => ({
        text: ua(i[0] || ""),
        weight: n.values[r]?.[0] || null
    }))
}
function Ru(e) {
    if (!e.some(a => a.weight))
        return {
            parsedRows: e,
            rowIndiciesWithInvalidWeights: []
        };
    const s = [];
    return {
        parsedRows: e.map( (a, t) => Number.isNaN(Number(a.weight)) || a.weight <= 0 ? (s.push(t),
        {
            text: a.text,
            weight: 1
        }) : {
            text: a.text,
            weight: Number(a.weight)
        }),
        rowIndiciesWithInvalidWeights: s
    }
}
function Vn(e) {
    return e.filter(s => s.length > 0)
}
const Nu = {
    class: "text-h6"
}
  , ju = {
    class: "flex items-center"
}
  , Hu = {
    class: "row items-center"
}
  , Qu = {
    class: "col-4"
}
  , Ku = {
    class: "col"
}
  , Gu = {
    class: "row items-center"
}
  , Yu = {
    class: "col-4"
}
  , Xu = {
    class: "col"
}
  , Ju = {
    class: "row items-center"
}
  , Zu = {
    class: "col-4"
}
  , ec = {
    class: "col"
}
  , tc = {
    class: "row items-center"
}
  , lc = {
    class: "col-4"
}
  , ac = {
    class: "col"
}
  , nc = {
    key: 0,
    class: "row items-center"
}
  , oc = {
    class: "col-4"
}
  , ic = {
    class: "col flex gap-sm"
}
  , sc = be({
    __name: "SheetConfigDialog",
    setup(e, {expose: s}) {
        const {t: l} = _e()
          , a = F(!1)
          , t = F("")
          , n = F("")
          , i = F("")
          , r = F("")
          , f = F("once")
          , c = F(null)
          , d = F([])
          , g = F([])
          , p = F([])
          , y = F(!0);
        let x;
        async function w(S) {
            return a.value = !0,
            t.value = S,
            n.value = "",
            i.value = "",
            d.value = [],
            r.value = "",
            c.value = null,
            g.value = [],
            p.value = [{
                value: null,
                label: l("sheetdialog.Do not import weights")
            }],
            n.value = await Pu(t.value),
            d.value = await zu(t.value),
            d.value.length > 0 && d.value[0] && (i.value = d.value[0]),
            new Promise(C => {
                x = C
            }
            )
        }
        he(i, async S => {
            i.value && (g.value = [],
            p.value = [{
                value: null,
                label: l("sheetdialog.Do not import weights")
            }],
            c.value = null,
            r.value = "",
            g.value = await Lu(t.value, S),
            g.value.length > 0 && g.value[0] && (r.value = g.value[0].value,
            p.value.push(...await Mu(t.value, S))))
        }
        ),
        he(f, S => {
            S === "live" && (c.value = null)
        }
        );
        function T() {
            J("Wheel", "LinkSpreadsheet"),
            a.value = !1,
            x({
                tab: i.value,
                column: r.value,
                skipFirstRow: y.value,
                doLiveImport: f.value === "live",
                weightsColumn: c.value
            })
        }
        function I() {
            a.value = !1,
            x({
                tab: "",
                column: "",
                skipFirstRow: !1,
                doLiveImport: !1,
                weightsColumn: null
            })
        }
        return s({
            askUserToConfigure: w
        }),
        (S, C) => (V(),
        X(Ye, {
            modelValue: a.value,
            "onUpdate:modelValue": C[6] || (C[6] = D => a.value = D)
        }, {
            default: u( () => [o(at, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [o(Ae, {
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", Nu, [C[7] || (C[7] = m("i", {
                        class: "fa-solid fa-file-arrow-up"
                    }, null, -1)), Q(" " + E(v(l)("common.Import Google Spreadsheet")), 1)])]),
                    _: 1
                }), o(Ae, {
                    class: "q-gutter-md"
                }, {
                    default: u( () => [o(An, {
                        modelValue: f.value,
                        "onUpdate:modelValue": C[0] || (C[0] = D => f.value = D),
                        leftValue: "once",
                        rightValue: "live"
                    }, {
                        left: u( () => [Q(E(v(l)("sheetdialog.Import data once")), 1)]),
                        right: u( () => [m("span", ju, [Q(E(v(l)("sheetdialog.Live link")) + " ", 1), o(sl, {
                            title: v(l)("sheetdialog.When you link a spreadsheet")
                        }, null, 8, ["title"])])]),
                        _: 1
                    }, 8, ["modelValue"]), m("div", Hu, [m("div", Qu, E(v(l)("sheetdialog.Selected spreadsheet")), 1), m("div", Ku, [o(lt, {
                        dense: "",
                        filled: "",
                        modelValue: n.value,
                        "onUpdate:modelValue": C[1] || (C[1] = D => n.value = D),
                        readonly: ""
                    }, null, 8, ["modelValue"])])]), m("div", Gu, [m("div", Yu, E(v(l)("sheetdialog.Tab")), 1), m("div", Xu, [o(Ft, {
                        modelValue: i.value,
                        "onUpdate:modelValue": C[2] || (C[2] = D => i.value = D),
                        options: d.value,
                        filled: "",
                        dense: ""
                    }, null, 8, ["modelValue", "options"])])]), m("div", Ju, [m("div", Zu, E(v(l)("sheetdialog.Column")), 1), m("div", ec, [o(Ft, {
                        modelValue: r.value,
                        "onUpdate:modelValue": C[3] || (C[3] = D => r.value = D),
                        options: g.value,
                        filled: "",
                        dense: "",
                        "emit-value": "",
                        "map-options": ""
                    }, null, 8, ["modelValue", "options"])])]), m("div", tc, [m("div", lc, E(v(l)("sheetdialog.First row")), 1), m("div", ac, [o(Ge, {
                        modelValue: y.value,
                        "onUpdate:modelValue": C[4] || (C[4] = D => y.value = D),
                        label: v(l)("sheetdialog.Is a header and should not be imported")
                    }, null, 8, ["modelValue", "label"])])]), f.value === "once" ? (V(),
                    Z("div", nc, [m("div", oc, E(v(l)("sheetdialog.Weights column")), 1), m("div", ic, [o(Ft, {
                        modelValue: c.value,
                        "onUpdate:modelValue": C[5] || (C[5] = D => c.value = D),
                        options: p.value,
                        filled: "",
                        dense: "",
                        "emit-value": "",
                        "map-options": "",
                        class: "flex-1"
                    }, null, 8, ["modelValue", "options"]), o(sl, {
                        title: v(l)("sheetdialog.Select the column containing")
                    }, null, 8, ["title"])])])) : ye("", !0)]),
                    _: 1
                }), o(dt, {
                    align: "right"
                }, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(l)("common.Cancel"),
                        onClick: I
                    }, null, 8, ["label"]), o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(l)("common.OK"),
                        disable: !i.value || !r.value,
                        onClick: T
                    }, null, 8, ["label", "disable"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , rc = {
    class: "text-h6"
}
  , uc = {
    class: "row items-center q-gutter-x-md"
}
  , cc = {
    class: "col-shrink"
}
  , dc = ["src"]
  , vc = {
    class: "col text-h5"
}
  , fc = {
    style: {
        opacity: ".8",
        "font-size": ".8em"
    }
}
  , mc = {
    class: "col-shrink"
}
  , gc = {
    class: "q-gutter-x-md"
}
  , pc = be({
    __name: "AccountDialog",
    setup(e, {expose: s}) {
        const l = It()
          , a = Oe()
          , {t} = _e()
          , n = ft()
          , i = F(!1);
        function r() {
            J("Wheel", "ShowAccountDialog"),
            i.value = !0
        }
        function f() {
            l.logOut(),
            i.value = !1
        }
        async function c() {
            const d = t("profiledropdown.Are you sure you want to delete your account");
            if (await al(t, d)) {
                n.loading.show();
                try {
                    J("Wheel", "DeleteAccount"),
                    await l.deleteAccount(),
                    a.resetWheel(),
                    $t(t("profiledropdown.Your account and your saved wheels have been deleted"))
                } catch (g) {
                    Ne(t, g),
                    Ue("DeleteAccountError", g)
                }
                n.loading.hide(),
                i.value = !1
            }
        }
        return s({
            show: r
        }),
        (d, g) => (V(),
        X(Ye, {
            modelValue: i.value,
            "onUpdate:modelValue": g[1] || (g[1] = p => i.value = p)
        }, {
            default: u( () => [o(at, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [o(Ae, {
                    class: "row items-center",
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", rc, [g[2] || (g[2] = m("i", {
                        class: "fas fa-user-alt"
                    }, null, -1)), Q(" " + E(v(t)("common.My account")), 1)]), o(Ct), o(qt)]),
                    _: 1
                }), o(Ae, {
                    class: "q-gutter-y-md"
                }, {
                    default: u( () => [m("div", uc, [m("div", cc, [o(At, {
                        size: "64px"
                    }, {
                        default: u( () => [m("img", {
                            src: v(l).userPhotoUrl,
                            alt: ""
                        }, null, 8, dc)]),
                        _: 1
                    })]), m("div", vc, [Q(E(v(t)("profiledropdown.Signed in as", {
                        name: v(l).userDisplayName
                    })) + " ", 1), m("span", fc, " (" + E(v(l).loginProvider) + ") ", 1)]), m("div", mc, [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "warning",
                        "text-color": "black",
                        label: v(t)("profiledropdown.Sign out"),
                        onClick: f
                    }, null, 8, ["label"])])]), m("div", gc, [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(t)("accountmigration.Migrate account"),
                        to: {
                            name: "migrate-account"
                        }
                    }, null, 8, ["label"]), o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(t)("profiledropdown.Export my data"),
                        to: "/export"
                    }, null, 8, ["label"]), o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "negative",
                        label: v(t)("profiledropdown.Delete my account"),
                        onClick: c
                    }, null, 8, ["label"])])]),
                    _: 1
                }), o(dt, {
                    align: "right"
                }, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(t)("common.Close"),
                        onClick: g[0] || (g[0] = p => i.value = !1)
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , hc = {
    class: "text-h6"
}
  , bc = {
    class: "text-h6",
    style: {
        "margin-top": "16px"
    }
}
  , yc = {
    class: "q-py-md"
}
  , wc = {
    class: "row items-start q-gutter-md"
}
  , _c = ["onClick"]
  , Fc = {
    class: "text-h6",
    style: {
        "margin-top": "16px"
    }
}
  , Sc = {
    class: "q-py-md",
    style: {
        height: "40vh",
        overflow: "auto"
    }
}
  , Cc = {
    class: "row items-start q-gutter-md"
}
  , kc = ["onClick"]
  , xc = {
    __name: "LanguageDialog",
    emits: ["language-changed"],
    setup(e, {expose: s, emit: l}) {
        const {t: a} = _e()
          , t = l
          , n = F(!1)
          , i = F([])
          , r = F([])
          , f = F("")
          , c = h( () => f.value.toLowerCase())
          , d = h( () => i.value.filter(y => !f.value || y.humanName.toLowerCase().includes(c.value)));
        async function g() {
            J("Wheel", "ShowLanguageDialog"),
            f.value = "",
            n.value = !0,
            i.value = Qa(),
            r.value = Sa(navigator.languages);
            try {
                const y = await wo()
                  , x = [...navigator.languages, ...y];
                r.value = Sa(x)
            } catch (y) {
                Ue("GetLangsForMyAddressError", y)
            }
        }
        function p(y) {
            J("Wheel", "ChangeLanguageFromNewDialog"),
            t("language-changed", y),
            n.value = !1
        }
        return s({
            show: g
        }),
        (y, x) => (V(),
        X(Ye, {
            modelValue: n.value,
            "onUpdate:modelValue": x[2] || (x[2] = w => n.value = w)
        }, {
            default: u( () => [o(at, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [o(Ae, {
                    class: "row items-center",
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", hc, [x[3] || (x[3] = m("i", {
                        class: "fas fa-globe"
                    }, null, -1)), Q(" " + E(v(a)("toolbar.Language")), 1)]), o(Ct), o(qt)]),
                    _: 1
                }), o(Ae, null, {
                    default: u( () => [m("div", bc, E(v(a)("languagedialog.Suggested languages")), 1), m("div", yc, [m("div", wc, [(V(!0),
                    Z(ut, null, gt(r.value, w => (V(),
                    Z("div", {
                        key: "locale.name",
                        onClick: T => p(w.name),
                        class: "language"
                    }, E(w.humanName), 9, _c))), 128))])]), m("div", Fc, E(v(a)("languagedialog.All languages")), 1), o(lt, {
                        dense: "",
                        filled: "",
                        modelValue: f.value,
                        "onUpdate:modelValue": x[0] || (x[0] = w => f.value = w),
                        placeholder: v(a)("common.Search"),
                        style: {
                            "margin-top": "16px"
                        }
                    }, null, 8, ["modelValue", "placeholder"]), m("div", Sc, [m("div", Cc, [(V(!0),
                    Z(ut, null, gt(d.value, w => (V(),
                    Z("div", {
                        key: "locale.name",
                        onClick: T => p(w.name),
                        class: "language"
                    }, E(w.humanName), 9, kc))), 128))])])]),
                    _: 1
                }), o(dt, {
                    align: "right"
                }, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(a)("common.Close"),
                        onClick: x[1] || (x[1] = w => n.value = !1)
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
}
  , Dc = st(xc, [["__scopeId", "data-v-9ca18b08"]])
  , Ac = be({
    __name: "TitleAndDescriptionDialog",
    setup(e, {expose: s}) {
        const {t: l} = _e()
          , a = Oe()
          , t = F(!1)
          , n = h( () => a.wheelConfig)
          , i = F("")
          , r = F("");
        function f() {
            J("Wheel", "ShowTitleAndDescriptionDialog"),
            i.value = n.value.title,
            r.value = n.value.description,
            t.value = !0
        }
        function c() {
            J("Wheel", "SetTitleAndDescription"),
            a.setWheelTitle(i.value),
            a.setWheelDescription(r.value),
            d()
        }
        function d() {
            t.value = !1
        }
        function g(p) {
            p.preventDefault(),
            c()
        }
        return s({
            show: f
        }),
        (p, y) => (V(),
        X(Ye, {
            modelValue: t.value,
            "onUpdate:modelValue": y[2] || (y[2] = x => t.value = x)
        }, {
            default: u( () => [o(at, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [o(Ae, {
                    class: "text-h6"
                }, {
                    default: u( () => [y[3] || (y[3] = m("i", {
                        class: "fas fa-pencil-alt"
                    }, null, -1)), Q(" " + E(v(l)("common.Edit title and description")), 1)]),
                    _: 1,
                    __: [3]
                }), o(Ae, {
                    class: "q-gutter-y-md"
                }, {
                    default: u( () => [o(lt, {
                        autofocus: "",
                        filled: "",
                        dense: "",
                        modelValue: i.value,
                        "onUpdate:modelValue": y[0] || (y[0] = x => i.value = x),
                        ref: "wheelTitleInput",
                        onKeydown: el(g, ["native", "enter"]),
                        maxlength: "50",
                        placeholder: v(l)("common.Wheel title")
                    }, null, 8, ["modelValue", "placeholder"]), o(lt, {
                        filled: "",
                        dense: "",
                        type: "textarea",
                        modelValue: r.value,
                        "onUpdate:modelValue": y[1] || (y[1] = x => r.value = x),
                        onKeydown: el(g, ["native", "enter"]),
                        maxlength: "200",
                        placeholder: v(l)("common.Wheel description")
                    }, null, 8, ["modelValue", "placeholder"])]),
                    _: 1
                }), o(dt, {
                    align: "right"
                }, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(l)("common.Cancel"),
                        onClick: d
                    }, null, 8, ["label"]), o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(l)("common.OK"),
                        onClick: c
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , Vc = be({
    __name: "AppDialog",
    setup(e, {expose: s}) {
        const l = F(null);
        function a(i) {
            const r = l.value.getBoundingClientRect();
            (i.clientX < r.left || i.clientX > r.right || i.clientY < r.top || i.clientY > r.bottom) && n()
        }
        function t() {
            l.value.showModal()
        }
        function n() {
            l.value.close()
        }
        return s({
            show: t,
            close: n
        }),
        (i, r) => (V(),
        Z("dialog", {
            onClick: a,
            onKeydown: r[0] || (r[0] = f => f.key === "Escape" && n()),
            ref_key: "dialog",
            ref: l
        }, [Gl(i.$slots, "default", {}, void 0, !0)], 544))
    }
})
  , Ec = st(Vc, [["__scopeId", "data-v-842064af"]])
  , $c = {
    class: "flex f-col gap"
}
  , Bc = {
    class: "flex items-center gap-sm text-h5"
}
  , Tc = {
    class: "flex f-col gap"
}
  , Ic = {
    class: "flex f-col gap-sm"
}
  , qc = {
    class: "flex f-col"
}
  , Wc = {
    class: "flex justify-end"
}
  , Pc = be({
    __name: "PreferencesDialog",
    setup(e, {expose: s}) {
        const {t: l} = _e()
          , a = Al()
          , t = F(null)
          , n = h({
            get: () => a.darkMode,
            set: c => a.setDarkMode(c)
        })
          , i = h({
            get: () => a.showWheelOverlay,
            set: c => a.setShowWheelOverlay(c)
        });
        function r() {
            t.value.show()
        }
        function f() {
            t.value.close()
        }
        return s({
            show: r
        }),
        (c, d) => (V(),
        X(Ec, {
            ref_key: "dialog",
            ref: t
        }, {
            default: u( () => [m("div", $c, [m("section", Bc, [d[4] || (d[4] = m("i", {
                class: "fa fa-cog fa-fw"
            }, null, -1)), m("span", null, E(v(l)("preferences.Preferences")), 1)]), m("section", Tc, [m("div", Ic, [m("div", null, E(v(l)("preferences.App color scheme")), 1), m("div", qc, [o(xt, {
                modelValue: n.value,
                "onUpdate:modelValue": d[0] || (d[0] = g => n.value = g),
                val: !1,
                label: v(l)("preferences.Light"),
                "checked-icon": "fas fa-sun",
                "unchecked-icon": "far fa-sun"
            }, null, 8, ["modelValue", "label"]), o(xt, {
                modelValue: n.value,
                "onUpdate:modelValue": d[1] || (d[1] = g => n.value = g),
                val: "auto",
                label: v(l)("preferences.System"),
                "checked-icon": "fas fa-circle-half-stroke",
                "unchecked-icon": "far fa-circle"
            }, null, 8, ["modelValue", "label"]), o(xt, {
                modelValue: n.value,
                "onUpdate:modelValue": d[2] || (d[2] = g => n.value = g),
                val: !0,
                label: v(l)("preferences.Dark"),
                "checked-icon": "fas fa-moon",
                "unchecked-icon": "far fa-moon"
            }, null, 8, ["modelValue", "label"])])]), o(Ge, {
                modelValue: i.value,
                "onUpdate:modelValue": d[3] || (d[3] = g => i.value = g)
            }, {
                default: u( () => [Q(E(v(l)("preferences.Show Click to spin text")), 1)]),
                _: 1
            }, 8, ["modelValue"])]), m("section", Wc, [o(O, {
                "no-caps": "",
                unelevated: "",
                onClick: f
            }, {
                default: u( () => [Q(E(v(l)("common.Close")), 1)]),
                _: 1
            })])])]),
            _: 1
        }, 512))
    }
})
  , zc = be({
    __name: "SheetDataPump",
    setup(e, {expose: s}) {
        const {t: l} = _e()
          , a = Oe();
        let t = 0;
        function n(f, c, d, g, p, y) {
            t = Date.now(),
            p && a.linkSheet(),
            i(f, c, d, g, p, y)
        }
        async function i(f, c, d, g, p, y) {
            if (p && (r() || !a.sheetLinked)) {
                a.unlinkSheet();
                return
            }
            try {
                const {entries: x, rowIndiciesWithInvalidWeights: w} = await Uu(f, c, d, g, y);
                y ? (a.setAdvanced(!0),
                w.length > 0 && $t(l("sheetdialog.Some weights are invalid"))) : a.wheelIsAdvanced && a.setAdvanced(!1),
                a.setEntries(x),
                p && setTimeout( () => i(f, c, d, g, p, y), 5e3)
            } catch (x) {
                a.unlinkSheet(),
                Ue("ImportDataFromSpreadsheetError", x),
                Ne(l, x)
            }
        }
        function r() {
            return Date.now() - t > 36e5
        }
        return s({
            start: n
        }),
        (f, c) => null
    }
})
  , Lc = ["contentEditable"]
  , Mc = be({
    __name: "EntriesTextbox",
    setup(e) {
        const s = F(null)
          , l = Oe();
        he( () => l.entries, () => {
            a ? a = !1 : f(l.entries)
        }
        , {
            deep: !0
        });
        let a = !1;
        ll( () => f(l.entries));
        function t(d) {
            d instanceof InputEvent && ["formatBold", "formatItalic", "formatUnderline"].includes(d.inputType) && d.preventDefault()
        }
        function n() {
            a = !0,
            l.setEntries(r())
        }
        function i(d) {
            d.preventDefault();
            for (const g of d.dataTransfer?.files || []) {
                if (!g.type.startsWith("image/"))
                    continue;
                const p = new FileReader;
                p.onload = y => {
                    y.target?.result && (g.type === "image/gif" ? l.addImageEntry(y.target.result.toString()) : El(y.target.result.toString()).then(x => l.addImageEntry(x)))
                }
                ,
                p.readAsDataURL(g)
            }
        }
        function r() {
            return _o(s.value.innerHTML)
        }
        function f(d) {
            s.value.innerHTML = d.map(g => mn(g)).join("")
        }
        function c(d) {
            if (d.preventDefault(),
            J("Wheel", "PasteIntoTextbox", ""),
            d.clipboardData) {
                const p = d.clipboardData.getData("text/html").match(/(<.*?src="data:image.*?>)/);
                if (p)
                    document.execCommand("insertHtml", !1, p[1]);
                else {
                    const y = d.clipboardData.getData("text/plain");
                    document.execCommand("insertText", !1, y)
                }
            }
        }
        return (d, g) => (V(),
        Z("div", {
            ref_key: "editableDiv",
            ref: s,
            class: Xt(["basic-editor", v(l).sheetLinked ? "sheet-linked" : ""]),
            spellcheck: "false",
            autocomplete: "off",
            translate: "no",
            contentEditable: !v(l).wheelIsBusy && !v(l).sheetLinked,
            onPaste: c,
            onBeforeinput: t,
            onInput: n,
            onDrop: i,
            role: "textbox"
        }, null, 42, Lc))
    }
})
  , Uc = st(Mc, [["__scopeId", "data-v-4e20fe94"]])
  , Oc = be({
    __name: "ResultsTextbox",
    setup(e) {
        const s = Oe()
          , l = F(null);
        he( () => s.winners, a, {
            deep: !0
        }),
        ll(a);
        function a() {
            l.value.innerHTML = s.winners.map(mn).join("")
        }
        return (t, n) => (V(),
        Z("div", {
            ref_key: "resultsDiv",
            ref: l,
            class: "results-textbox",
            spellcheck: "false",
            translate: "no"
        }, null, 512))
    }
})
  , Rc = st(Oc, [["__scopeId", "data-v-b54ed956"]])
  , Nc = {
    class: "text-h6"
}
  , jc = {
    class: "row justify-center q-gutter-md"
}
  , Hc = {
    class: "col-shrink"
}
  , Qc = {
    class: "q-mt-md"
}
  , Kc = {
    class: "col-shrink"
}
  , Gc = {
    class: "q-mt-md"
}
  , Yc = be({
    __name: "AddImageDialog",
    setup(e, {expose: s}) {
        const {t: l} = _e()
          , a = F(!1);
        let t;
        function n() {
            return a.value = !0,
            new Promise(f => {
                t = f
            }
            )
        }
        function i() {
            J("Wheel", "AddImageDialog", "Upload"),
            t("upload"),
            a.value = !1
        }
        function r() {
            J("Wheel", "AddImageDialog", "Search"),
            t("search"),
            a.value = !1
        }
        return s({
            show: n
        }),
        (f, c) => (V(),
        X(Ye, {
            modelValue: a.value,
            "onUpdate:modelValue": c[0] || (c[0] = d => a.value = d)
        }, {
            default: u( () => [o(at, null, {
                default: u( () => [o(Ae, {
                    class: "row items-center",
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", Nc, [c[1] || (c[1] = m("i", {
                        class: "fas fa-image"
                    }, null, -1)), Q(" " + E(v(l)("textboxbuttons.Add image")), 1)]), o(Ct), o(qt)]),
                    _: 1
                }), o(Ae, null, {
                    default: u( () => [m("div", jc, [m("div", Hc, [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        padding: "lg",
                        onClick: r
                    }, {
                        default: u( () => [m("div", null, [o(De, {
                            name: "fas fa-search",
                            size: "8em"
                        }), m("div", Qc, E(v(l)("unsplashdialog.Search the gallery")), 1)])]),
                        _: 1
                    })]), m("div", Kc, [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        padding: "lg",
                        onClick: i
                    }, {
                        default: u( () => [m("div", null, [o(De, {
                            name: "fas fa-upload",
                            size: "8em"
                        }), m("div", Gc, E(v(l)("optionsdialog.Upload image")), 1)])]),
                        _: 1
                    })])])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , Xc = {
    class: "q-gutter-sm q-mb-md"
}
  , Jc = be({
    __name: "EditorButtons",
    setup(e) {
        const s = Oe()
          , l = ft()
          , {t: a} = _e()
          , t = h( () => l.dark.isActive ? "grey-9" : "grey-3")
          , n = h( () => l.dark.isActive ? "grey-3" : "grey-9")
          , i = h( () => s.sheetLinked)
          , r = h( () => s.wheelIsBusy)
          , f = h( () => i.value || r.value)
          , c = h({
            get: () => s.wheelIsAdvanced === !0,
            set: $ => {
                $ ? Va(a, a("textboxbuttons.Are you sure you want to switch to advanced"), async () => {
                    s.setAdvanced($),
                    J("Wheel", "ConvertToAdvanced")
                }
                ) : Va(a, a("textboxbuttons.Reverting will reset"), async () => {
                    s.setAdvanced($),
                    J("Wheel", "RevertFromAdvanced")
                }
                )
            }
        })
          , d = F([])
          , g = F(null)
          , p = F(null);
        async function y() {
            g.value.pickFiles()
        }
        he(d, $ => {
            if ($.length !== 0) {
                J("Wheel", "UploadPieSliceImage", $.length);
                for (const M of $) {
                    const Y = new FileReader;
                    Y.onload = async ee => {
                        if (ee.target?.result) {
                            const b = await El(ee.target.result.toString());
                            s.addImageEntry(b)
                        }
                    }
                    ,
                    Y.readAsDataURL(M)
                }
                d.value = []
            }
        }
        );
        const x = F(null)
          , w = F(null)
          , T = F(null);
        let I = "";
        async function S() {
            J("Wheel", "ShowAddImageDialog", "Center");
            const $ = await T.value.show();
            $ === "upload" && w.value.pickFiles(),
            $ === "search" && (I = "center",
            p.value.show())
        }
        he(x, $ => {
            if (!$)
                return;
            const M = new FileReader;
            M.onload = async Y => {
                if (Y.target?.result) {
                    J("Wheel", "UploadCenterImage", "Add Image button"),
                    s.saveWheelConfigForUndo();
                    const ee = await dn(Y.target.result.toString());
                    s.setUploadedCenterImage($.name, ee),
                    s.hubSize === "S" && s.setHubSize("L"),
                    await C($.name, ee),
                    Xl(a, a("textboxbuttons.Updated the wheel center image"), () => {
                        J("Wheel", "UndoUploadCenterImage"),
                        s.undoWheelConfigChange()
                    }
                    )
                }
            }
            ,
            M.readAsDataURL($),
            x.value = null
        }
        );
        async function C($, M) {
            if (!c.value && await da(a, a("optionsdialog.Adjust colors on the wheel"), a("optionsdialog.Your image has been uploaded", {
                fileName: $
            }))) {
                J("Wheel", "SetColorsFromCustomPicture", "");
                const Y = await vn(M);
                s.setColorValues(Y)
            }
        }
        const D = F(null)
          , R = F(null);
        async function P() {
            J("Wheel", "ShowAddImageDialog", "Background");
            const $ = await T.value.show();
            $ === "upload" && R.value.pickFiles(),
            $ === "search" && (I = "background",
            p.value.show())
        }
        he(D, $ => {
            if (!$)
                return;
            const M = new FileReader;
            M.onload = async Y => {
                if (Y.target?.result) {
                    J("Wheel", "UploadBackgroundImage", "Add Image button"),
                    s.saveWheelConfigForUndo();
                    const ee = await fn(Y.target.result.toString());
                    s.setUploadedBackgroundImage($.name, ee),
                    Xl(a, a("textboxbuttons.Updated the wheel background image"), () => {
                        J("Wheel", "UndoUploadBackgroundImage"),
                        s.undoWheelConfigChange()
                    }
                    )
                }
            }
            ,
            M.readAsDataURL($),
            D.value = null
        }
        );
        function W() {
            try {
                J("Wheel", "ShuffleEntries", ""),
                s.shuffleEntries()
            } catch ($) {
                Ne(a, $),
                Ue("ShuffleEntriesError", $)
            }
        }
        function U() {
            J("Wheel", "SortEntries", ""),
            s.sortEntries()
        }
        function H($) {
            I === "background" && s.setGalleryBackgroundImage($),
            I === "center" && (s.setGalleryCenterImage($),
            s.hubSize === "S" && s.setHubSize("L"))
        }
        return ($, M) => (V(),
        Z("div", Xc, [o(O, {
            size: "12px",
            padding: "xs sm",
            unelevated: "",
            "no-caps": "",
            color: t.value,
            "text-color": n.value,
            icon: "fas fa-random",
            label: v(a)("textboxbuttons.Shuffle"),
            disable: f.value,
            onClick: W
        }, null, 8, ["color", "text-color", "label", "disable"]), o(O, {
            size: "12px",
            padding: "xs sm",
            unelevated: "",
            "no-caps": "",
            color: t.value,
            "text-color": n.value,
            icon: "fas fa-sort-alpha-up",
            label: v(a)("textboxbuttons.Sort"),
            disable: f.value,
            onClick: U
        }, null, 8, ["color", "text-color", "label", "disable"]), o(St, {
            dense: "",
            size: "12px",
            padding: "xs sm",
            unelevated: "",
            "no-caps": "",
            color: t.value,
            "text-color": n.value,
            icon: "fas fa-image",
            label: v(a)("textboxbuttons.Add image"),
            disable: f.value
        }, {
            default: u( () => [o(Mt, null, {
                default: u( () => [ue((V(),
                X(we, {
                    clickable: "",
                    onClick: P
                }, {
                    default: u( () => [o(ne, {
                        avatar: ""
                    }, {
                        default: u( () => [o(At, null, {
                            default: u( () => M[4] || (M[4] = [m("img", {
                                src: "/images/background-image-icon.png",
                                alt: ""
                            }, null, -1)])),
                            _: 1,
                            __: [4]
                        })]),
                        _: 1
                    }), o(ne, null, {
                        default: u( () => [o(tt, null, {
                            default: u( () => [Q(E(v(a)("textboxbuttons.Add background image")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                })), [[Xe]]), ue((V(),
                X(we, {
                    clickable: "",
                    onClick: S
                }, {
                    default: u( () => [o(ne, {
                        avatar: ""
                    }, {
                        default: u( () => [o(At, null, {
                            default: u( () => M[5] || (M[5] = [m("img", {
                                src: "/images/center-image-icon.png",
                                alt: ""
                            }, null, -1)])),
                            _: 1,
                            __: [5]
                        })]),
                        _: 1
                    }), o(ne, null, {
                        default: u( () => [o(tt, null, {
                            default: u( () => [Q(E(v(a)("textboxbuttons.Add center image")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                })), [[Xe]]), ue((V(),
                X(we, {
                    clickable: "",
                    onClick: y
                }, {
                    default: u( () => [o(ne, {
                        avatar: ""
                    }, {
                        default: u( () => [o(At, null, {
                            default: u( () => M[6] || (M[6] = [m("img", {
                                src: "/images/slice-image-icon.png",
                                alt: ""
                            }, null, -1)])),
                            _: 1,
                            __: [6]
                        })]),
                        _: 1
                    }), o(ne, null, {
                        default: u( () => [o(tt, null, {
                            default: u( () => [Q(E(v(a)("textboxbuttons.Add image as entry")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                })), [[Xe]])]),
                _: 1
            })]),
            _: 1
        }, 8, ["color", "text-color", "label", "disable"]), ue(o(Lt, {
            ref_key: "sliceImagePicker",
            ref: g,
            multiple: "",
            accept: "image/*",
            modelValue: d.value,
            "onUpdate:modelValue": M[0] || (M[0] = Y => d.value = Y)
        }, null, 8, ["modelValue"]), [[We, !1]]), ue(o(Lt, {
            ref_key: "centerImagePicker",
            ref: w,
            accept: "image/*",
            modelValue: x.value,
            "onUpdate:modelValue": M[1] || (M[1] = Y => x.value = Y)
        }, null, 8, ["modelValue"]), [[We, !1]]), ue(o(Lt, {
            ref_key: "backgroundImagePicker",
            ref: R,
            accept: "image/*",
            modelValue: D.value,
            "onUpdate:modelValue": M[2] || (M[2] = Y => D.value = Y)
        }, null, 8, ["modelValue"]), [[We, !1]]), ue(o(Ge, {
            modelValue: c.value,
            "onUpdate:modelValue": M[3] || (M[3] = Y => c.value = Y),
            size: "xs",
            label: v(a)("textboxbuttons.Advanced"),
            style: {
                "font-size": "12px"
            },
            disable: f.value
        }, null, 8, ["modelValue", "label", "disable"]), [[We, v(s).entryCount < 200 || c.value]]), o(Yc, {
            ref_key: "addImageDialog",
            ref: T
        }, null, 512), o(pa, {
            ref_key: "unsplashDialog",
            ref: p,
            onPickedUnsplashImage: H
        }, null, 512)]))
    }
})
  , Zc = {
    class: "q-gutter-sm",
    style: {
        "margin-bottom": "16px"
    }
}
  , ed = be({
    __name: "ResultsButtons",
    setup(e) {
        const s = ft()
          , {t: l} = _e()
          , a = Oe()
          , t = h( () => s.dark.isActive ? "grey-9" : "grey-3")
          , n = h( () => s.dark.isActive ? "grey-3" : "grey-9");
        function i() {
            J("Wheel", "SortResults", ""),
            a.sortWinners()
        }
        function r() {
            J("Wheel", "ClearResults", ""),
            a.clearWinners()
        }
        return (f, c) => (V(),
        Z("div", Zc, [o(O, {
            size: "12px",
            padding: "xs sm",
            unelevated: "",
            "no-caps": "",
            color: t.value,
            "text-color": n.value,
            icon: "fas fa-sort-alpha-up",
            label: v(l)("textboxbuttons.Sort"),
            onClick: i
        }, null, 8, ["color", "text-color", "label"]), o(O, {
            size: "12px",
            padding: "xs sm",
            unelevated: "",
            "no-caps": "",
            color: t.value,
            "text-color": n.value,
            icon: "fas fa-times",
            label: v(l)("nameTabs.Clear the list"),
            onClick: r
        }, null, 8, ["color", "text-color", "label"])]))
    }
})
  , td = it({
    props: ["store", "barStyle", "verticalBarStyle", "horizontalBarStyle"],
    setup(e) {
        return () => [A("div", {
            class: e.store.scroll.vertical.barClass.value,
            style: [e.barStyle, e.verticalBarStyle],
            "aria-hidden": "true",
            onMousedown: e.store.onVerticalMousedown
        }), A("div", {
            class: e.store.scroll.horizontal.barClass.value,
            style: [e.barStyle, e.horizontalBarStyle],
            "aria-hidden": "true",
            onMousedown: e.store.onHorizontalMousedown
        }), ue(A("div", {
            ref: e.store.scroll.vertical.ref,
            class: e.store.scroll.vertical.thumbClass.value,
            style: e.store.scroll.vertical.style.value,
            "aria-hidden": "true"
        }), e.store.thumbVertDir), ue(A("div", {
            ref: e.store.scroll.horizontal.ref,
            class: e.store.scroll.horizontal.thumbClass.value,
            style: e.store.scroll.horizontal.style.value,
            "aria-hidden": "true"
        }), e.store.thumbHorizDir)]
    }
})
  , Ua = ["vertical", "horizontal"]
  , Hl = {
    vertical: {
        offset: "offsetY",
        scroll: "scrollTop",
        dir: "down",
        dist: "y"
    },
    horizontal: {
        offset: "offsetX",
        scroll: "scrollLeft",
        dir: "right",
        dist: "x"
    }
}
  , Oa = {
    prevent: !0,
    mouse: !0,
    mouseAllDir: !0
}
  , Ra = e => e >= 250 ? 50 : Math.ceil(e / 5)
  , ld = it({
    name: "QScrollArea",
    props: {
        ...fl,
        thumbStyle: Object,
        verticalThumbStyle: Object,
        horizontalThumbStyle: Object,
        barStyle: [Array, String, Object],
        verticalBarStyle: [Array, String, Object],
        horizontalBarStyle: [Array, String, Object],
        verticalOffset: {
            type: Array,
            default: [0, 0]
        },
        horizontalOffset: {
            type: Array,
            default: [0, 0]
        },
        contentStyle: [Array, String, Object],
        contentActiveStyle: [Array, String, Object],
        delay: {
            type: [String, Number],
            default: 1e3
        },
        visible: {
            type: Boolean,
            default: null
        },
        tabindex: [String, Number],
        onScroll: Function
    },
    setup(e, {slots: s, emit: l}) {
        const a = F(!1)
          , t = F(!1)
          , n = F(!1)
          , i = {
            vertical: F(0),
            horizontal: F(0)
        }
          , r = {
            vertical: {
                ref: F(null),
                position: F(0),
                size: F(0)
            },
            horizontal: {
                ref: F(null),
                position: F(0),
                size: F(0)
            }
        }
          , {proxy: f} = ct()
          , c = ml(e, f.$q);
        let d = null, g;
        const p = F(null)
          , y = h( () => "q-scrollarea" + (c.value === !0 ? " q-scrollarea--dark" : ""));
        Object.assign(i, {
            verticalInner: h( () => i.vertical.value - e.verticalOffset[0] - e.verticalOffset[1]),
            horizontalInner: h( () => i.horizontal.value - e.horizontalOffset[0] - e.horizontalOffset[1])
        }),
        r.vertical.percentage = h( () => {
            const b = r.vertical.size.value - i.vertical.value;
            if (b <= 0)
                return 0;
            const k = wt(r.vertical.position.value / b, 0, 1);
            return Math.round(k * 1e4) / 1e4
        }
        ),
        r.vertical.thumbHidden = h( () => (e.visible === null ? n.value : e.visible) !== !0 && a.value === !1 && t.value === !1 || r.vertical.size.value <= i.vertical.value + 1),
        r.vertical.thumbStart = h( () => e.verticalOffset[0] + r.vertical.percentage.value * (i.verticalInner.value - r.vertical.thumbSize.value)),
        r.vertical.thumbSize = h( () => Math.round(wt(i.verticalInner.value * i.verticalInner.value / r.vertical.size.value, Ra(i.verticalInner.value), i.verticalInner.value))),
        r.vertical.style = h( () => ({
            ...e.thumbStyle,
            ...e.verticalThumbStyle,
            top: `${r.vertical.thumbStart.value}px`,
            height: `${r.vertical.thumbSize.value}px`,
            right: `${e.horizontalOffset[1]}px`
        })),
        r.vertical.thumbClass = h( () => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (r.vertical.thumbHidden.value === !0 ? " q-scrollarea__thumb--invisible" : "")),
        r.vertical.barClass = h( () => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (r.vertical.thumbHidden.value === !0 ? " q-scrollarea__bar--invisible" : "")),
        r.horizontal.percentage = h( () => {
            const b = r.horizontal.size.value - i.horizontal.value;
            if (b <= 0)
                return 0;
            const k = wt(Math.abs(r.horizontal.position.value) / b, 0, 1);
            return Math.round(k * 1e4) / 1e4
        }
        ),
        r.horizontal.thumbHidden = h( () => (e.visible === null ? n.value : e.visible) !== !0 && a.value === !1 && t.value === !1 || r.horizontal.size.value <= i.horizontal.value + 1),
        r.horizontal.thumbStart = h( () => e.horizontalOffset[0] + r.horizontal.percentage.value * (i.horizontalInner.value - r.horizontal.thumbSize.value)),
        r.horizontal.thumbSize = h( () => Math.round(wt(i.horizontalInner.value * i.horizontalInner.value / r.horizontal.size.value, Ra(i.horizontalInner.value), i.horizontalInner.value))),
        r.horizontal.style = h( () => ({
            ...e.thumbStyle,
            ...e.horizontalThumbStyle,
            [f.$q.lang.rtl === !0 ? "right" : "left"]: `${r.horizontal.thumbStart.value}px`,
            width: `${r.horizontal.thumbSize.value}px`,
            bottom: `${e.verticalOffset[1]}px`
        })),
        r.horizontal.thumbClass = h( () => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (r.horizontal.thumbHidden.value === !0 ? " q-scrollarea__thumb--invisible" : "")),
        r.horizontal.barClass = h( () => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (r.horizontal.thumbHidden.value === !0 ? " q-scrollarea__bar--invisible" : ""));
        const x = h( () => r.vertical.thumbHidden.value === !0 && r.horizontal.thumbHidden.value === !0 ? e.contentStyle : e.contentActiveStyle);
        function w() {
            const b = {};
            return Ua.forEach(k => {
                const z = r[k];
                Object.assign(b, {
                    [k + "Position"]: z.position.value,
                    [k + "Percentage"]: z.percentage.value,
                    [k + "Size"]: z.size.value,
                    [k + "ContainerSize"]: i[k].value,
                    [k + "ContainerInnerSize"]: i[k + "Inner"].value
                })
            }
            ),
            b
        }
        const T = Ga( () => {
            const b = w();
            b.ref = f,
            l("scroll", b)
        }
        , 0);
        function I(b, k, z) {
            if (Ua.includes(b) === !1) {
                console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
                return
            }
            (b === "vertical" ? Ca : Pl)(p.value, k, z)
        }
        function S({height: b, width: k}) {
            let z = !1;
            i.vertical.value !== b && (i.vertical.value = b,
            z = !0),
            i.horizontal.value !== k && (i.horizontal.value = k,
            z = !0),
            z === !0 && W()
        }
        function C({position: b}) {
            let k = !1;
            r.vertical.position.value !== b.top && (r.vertical.position.value = b.top,
            k = !0),
            r.horizontal.position.value !== b.left && (r.horizontal.position.value = b.left,
            k = !0),
            k === !0 && W()
        }
        function D({height: b, width: k}) {
            r.horizontal.size.value !== k && (r.horizontal.size.value = k,
            W()),
            r.vertical.size.value !== b && (r.vertical.size.value = b,
            W())
        }
        function R(b, k) {
            const z = r[k];
            if (b.isFirst === !0) {
                if (z.thumbHidden.value === !0)
                    return;
                g = z.position.value,
                t.value = !0
            } else if (t.value !== !0)
                return;
            b.isFinal === !0 && (t.value = !1);
            const L = Hl[k]
              , re = (z.size.value - i[k].value) / (i[k + "Inner"].value - z.thumbSize.value)
              , ke = b.distance[L.dist]
              , Le = g + (b.direction === L.dir ? 1 : -1) * ke * re;
            U(Le, k)
        }
        function P(b, k) {
            const z = r[k];
            if (z.thumbHidden.value !== !0) {
                const L = k === "vertical" ? e.verticalOffset[0] : e.horizontalOffset[0]
                  , re = b[Hl[k].offset] - L
                  , ke = z.thumbStart.value - L;
                if (re < ke || re > ke + z.thumbSize.value) {
                    const Le = re - z.thumbSize.value / 2
                      , B = wt(Le / (i[k + "Inner"].value - z.thumbSize.value), 0, 1);
                    U(B * Math.max(0, z.size.value - i[k].value), k)
                }
                z.ref.value !== null && z.ref.value.dispatchEvent(new MouseEvent(b.type,b))
            }
        }
        function W() {
            a.value = !0,
            d !== null && clearTimeout(d),
            d = setTimeout( () => {
                d = null,
                a.value = !1
            }
            , e.delay),
            e.onScroll !== void 0 && T()
        }
        function U(b, k) {
            p.value[Hl[k].scroll] = b
        }
        let H = null;
        function $() {
            H !== null && clearTimeout(H),
            H = setTimeout( () => {
                H = null,
                n.value = !0
            }
            , f.$q.platform.is.ios ? 50 : 0)
        }
        function M() {
            H !== null && (clearTimeout(H),
            H = null),
            n.value = !1
        }
        let Y = null;
        he( () => f.$q.lang.rtl, b => {
            p.value !== null && Pl(p.value, Math.abs(r.horizontal.position.value) * (b === !0 ? -1 : 1))
        }
        ),
        na( () => {
            Y = {
                top: r.vertical.position.value,
                left: r.horizontal.position.value
            }
        }
        ),
        oa( () => {
            if (Y === null)
                return;
            const b = p.value;
            b !== null && (Pl(b, Y.left),
            Ca(b, Y.top))
        }
        ),
        Tt(T.cancel),
        Object.assign(f, {
            getScrollTarget: () => p.value,
            getScroll: w,
            getScrollPosition: () => ({
                top: r.vertical.position.value,
                left: r.horizontal.position.value
            }),
            getScrollPercentage: () => ({
                top: r.vertical.percentage.value,
                left: r.horizontal.percentage.value
            }),
            setScrollPosition: I,
            setScrollPercentage(b, k, z) {
                I(b, k * (r[b].size.value - i[b].value) * (b === "horizontal" && f.$q.lang.rtl === !0 ? -1 : 1), z)
            }
        });
        const ee = {
            scroll: r,
            thumbVertDir: [[xl, b => {
                R(b, "vertical")
            }
            , void 0, {
                vertical: !0,
                ...Oa
            }]],
            thumbHorizDir: [[xl, b => {
                R(b, "horizontal")
            }
            , void 0, {
                horizontal: !0,
                ...Oa
            }]],
            onVerticalMousedown(b) {
                P(b, "vertical")
            },
            onHorizontalMousedown(b) {
                P(b, "horizontal")
            }
        };
        return () => A("div", {
            class: y.value,
            onMouseenter: $,
            onMouseleave: M
        }, [A("div", {
            ref: p,
            class: "q-scrollarea__container scroll relative-position fit hide-scrollbar",
            tabindex: e.tabindex !== void 0 ? e.tabindex : void 0
        }, [A("div", {
            class: "q-scrollarea__content absolute",
            style: x.value
        }, sa(s.default, [A(Yl, {
            debounce: 0,
            onResize: D
        })])), A(Wo, {
            axis: "both",
            onScroll: C
        })]), A(Yl, {
            debounce: 0,
            onResize: S
        }), A(td, {
            store: ee,
            barStyle: e.barStyle,
            verticalBarStyle: e.verticalBarStyle,
            horizontalBarStyle: e.horizontalBarStyle
        })])
    }
})
  , ad = it({
    name: "QPopupProxy",
    props: {
        ...Jo,
        breakpoint: {
            type: [String, Number],
            default: 450
        }
    },
    emits: ["show", "hide"],
    setup(e, {slots: s, emit: l, attrs: a}) {
        const {proxy: t} = ct()
          , {$q: n} = t
          , i = F(!1)
          , r = F(null)
          , f = h( () => parseInt(e.breakpoint, 10))
          , {canShow: c} = Zo({
            showing: i
        });
        function d() {
            return n.screen.width < f.value || n.screen.height < f.value ? "dialog" : "menu"
        }
        const g = F(d())
          , p = h( () => g.value === "menu" ? {
            maxHeight: "99vh"
        } : {});
        he( () => d(), w => {
            i.value !== !0 && (g.value = w)
        }
        );
        function y(w) {
            i.value = !0,
            l("show", w)
        }
        function x(w) {
            i.value = !1,
            g.value = d(),
            l("hide", w)
        }
        return Object.assign(t, {
            show(w) {
                c(w) === !0 && r.value.show(w)
            },
            hide(w) {
                r.value.hide(w)
            },
            toggle(w) {
                r.value.toggle(w)
            }
        }),
        un(t, "currentComponent", () => ({
            type: g.value,
            ref: r.value
        })),
        () => {
            const w = {
                ref: r,
                ...p.value,
                ...a,
                onShow: y,
                onHide: x
            };
            let T;
            return g.value === "dialog" ? T = Ye : (T = $l,
            Object.assign(w, {
                target: e.target,
                contextMenu: e.contextMenu,
                noParentEvent: !0,
                separateClosePopup: !0
            })),
            A(T, w, s.default)
        }
    }
})
  , nd = {
    class: "text-h6"
}
  , od = {
    class: "row justify-between"
}
  , id = {
    class: "row justify-center items-center"
}
  , sd = {
    class: "col-shrink q-px-md"
}
  , rd = {
    class: "col-shrink"
}
  , ud = {
    class: "row items-center justify-between"
}
  , cd = {
    class: "col-shrink"
}
  , dd = {
    class: "col-shrink q-gutter-md"
}
  , vd = {
    class: "row items-center"
}
  , fd = {
    class: "col-12 col-md-3"
}
  , md = {
    class: "col-12 col-md"
}
  , gd = {
    key: 0,
    class: "row items-center"
}
  , pd = {
    for: "entry-color-input",
    class: "col-12 col-md-3"
}
  , hd = {
    class: "col-grow row justify-end"
}
  , bd = {
    key: 0,
    class: "relative-position",
    style: {
        "max-width": "fit-content"
    }
}
  , yd = ["src", "alt"]
  , wd = {
    key: 1
}
  , _d = {
    class: "row items-center"
}
  , Fd = {
    class: "col-12 col-md-3"
}
  , Sd = {
    class: "col-12 col-md"
}
  , Cd = {
    class: "row items-center"
}
  , kd = {
    class: "col-12 col-md-3"
}
  , xd = {
    class: "col-12 col-md"
}
  , Dd = {
    class: "row items-center"
}
  , Ad = {
    class: "col-12 col-md-3"
}
  , Vd = {
    class: "col-12 col-md row items-center"
}
  , Ed = {
    class: "col-shrink q-ml-md"
}
  , $d = be({
    __name: "AdvancedDialog",
    setup(e, {expose: s}) {
        const l = Oe()
          , {t: a} = _e()
          , t = ft()
          , n = F(!1)
          , i = F(new ka)
          , r = F([])
          , f = F(0)
          , c = h( () => r.value[f.value])
          , d = h( () => c.value.weight ?? 1)
          , g = h( () => c.value.color || i.value.getEntryColor(f.value))
          , p = Fo(async () => c.value.image ? xa(await zl(c.value.image)) : null, null)
          , y = F(null)
          , x = F();
        function w(b) {
            J("Wheel", "ShowAdvancedDialog"),
            i.value = new ka(l.wheelConfig.getValues()),
            r.value = i.value.entries,
            f.value = r.value.findIndex(k => k.id === b.id),
            f.value === -1 && (f.value = 0),
            n.value = !0
        }
        function T() {
            J("Wheel", "DuplicateEntry");
            const b = {
                ...c.value
            };
            b.id = Aa(),
            r.value.splice(f.value + 1, 0, b),
            f.value++
        }
        function I() {
            J("Wheel", "DeleteEntry"),
            r.value.splice(f.value, 1),
            f.value >= r.value.length && (f.value = r.value.length - 1),
            f.value < 0 && (f.value = 0)
        }
        function S(b=0) {
            J("Wheel", "AddEntry");
            const k = {
                id: Aa(),
                text: "",
                weight: 1,
                enabled: !0
            };
            r.value.splice(b, 0, k),
            f.value = b
        }
        async function C() {
            if (!c.value.image)
                return;
            J("Wheel", "SetColorFromImage");
            const b = await zl(c.value.image);
            c.value.color = Da(b).slice(0, 7)
        }
        function D() {
            y.value.pickFiles()
        }
        function R() {
            J("Wheel", "RemoveImageFromEntry"),
            delete c.value.image
        }
        function P() {
            l.setEntries(r.value),
            n.value = !1
        }
        const W = h( () => t.dark.isActive ? "grey-9" : "grey-3")
          , U = h( () => t.dark.isActive ? "grey-3" : "grey-9")
          , H = h({
            get: () => c.value.sound ?? "",
            set: b => c.value.sound = b
        })
          , $ = [{
            label: a("advancededitor.Inherit from wheel"),
            value: ""
        }].concat(bn().map(b => ({
            label: M(b.name),
            value: b.value
        })));
        function M(b) {
            return b.includes(".") ? a(b) : b
        }
        he( () => x.value, b => {
            if (!b)
                return;
            J("Wheel", "AttachImageToEntry");
            const k = new FileReader;
            k.onload = async z => {
                if (z.target?.result) {
                    const L = await El(z.target.result.toString())
                      , re = await zl(L);
                    xa(re) || (c.value.color = Da(re).slice(0, 7)),
                    c.value.image = L
                }
            }
            ,
            k.readAsDataURL(b)
        }
        );
        function Y(b) {
            c.value.weight = d.value + b,
            d.value < 1 && (c.value.weight = 1)
        }
        const ee = h( () => {
            if (!c.value.enabled)
                return 0;
            let b = r.value.slice();
            if (!i.value.allowDuplicates) {
                if (gn(b, c.value))
                    return 0;
                b = pn(i.value.allowDuplicates, b)
            }
            const k = hn(b);
            return +(100 * d.value / k).toFixed(1)
        }
        );
        return s({
            show: w
        }),
        (b, k) => (V(),
        X(Ye, {
            modelValue: n.value,
            "onUpdate:modelValue": k[15] || (k[15] = z => n.value = z)
        }, {
            default: u( () => [o(at, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [o(Ae, {
                    class: "row items-center",
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", nd, [k[16] || (k[16] = m("i", {
                        class: "fas fa-sliders"
                    }, null, -1)), Q(" " + E(v(a)("textboxbuttons.Advanced")), 1)]), o(Ct), o(qt)]),
                    _: 1
                }), r.value.length > 0 ? (V(),
                X(Ae, {
                    key: 0,
                    class: "q-gutter-y-md"
                }, {
                    default: u( () => [m("div", od, [m("div", id, [o(O, {
                        unelevated: "",
                        round: "",
                        dense: "",
                        color: W.value,
                        "text-color": U.value,
                        icon: "fas fa-arrow-left",
                        disable: f.value === 0,
                        onClick: k[0] || (k[0] = z => f.value--),
                        "aria-label": "Previous entry"
                    }, null, 8, ["color", "text-color", "disable"]), m("div", sd, E(v(a)("advancededitor.Entry")) + " " + E(f.value + 1) + " / " + E(r.value.length), 1), o(O, {
                        unelevated: "",
                        round: "",
                        dense: "",
                        color: W.value,
                        "text-color": U.value,
                        icon: "fas fa-arrow-right",
                        disable: f.value === r.value.length - 1,
                        onClick: k[1] || (k[1] = z => f.value++),
                        "aria-label": "Next entry"
                    }, null, 8, ["color", "text-color", "disable"])]), m("div", rd, [o(O, {
                        unelevated: "",
                        round: "",
                        dense: "",
                        color: W.value,
                        "text-color": U.value,
                        icon: "fas fa-plus",
                        onClick: k[2] || (k[2] = z => S(f.value + 1)),
                        "aria-label": v(a)("advancededitor.Add entry")
                    }, null, 8, ["color", "text-color", "aria-label"])])]), k[17] || (k[17] = m("hr", null, null, -1)), m("div", ud, [m("div", cd, [o(Ge, {
                        modelValue: c.value.enabled,
                        "onUpdate:modelValue": k[3] || (k[3] = z => c.value.enabled = z),
                        label: v(a)("advancededitor.Visible")
                    }, null, 8, ["modelValue", "label"])]), m("div", dd, [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: W.value,
                        "text-color": U.value,
                        icon: "fas fa-clone",
                        onClick: T,
                        label: v(a)("advancededitor.Duplicate")
                    }, null, 8, ["color", "text-color", "label"]), o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "negative",
                        icon: "fas fa-trash",
                        onClick: I,
                        label: v(a)("common.Delete")
                    }, null, 8, ["label"])])]), m("label", vd, [m("div", fd, E(v(a)("advancededitor.Text")), 1), m("div", md, [o(lt, {
                        filled: "",
                        dense: "",
                        modelValue: c.value.text,
                        "onUpdate:modelValue": k[4] || (k[4] = z => c.value.text = z)
                    }, null, 8, ["modelValue"])])]), i.value.type !== "image" ? (V(),
                    Z("div", gd, [m("label", pd, E(v(a)("advancededitor.Color")), 1), o(O, {
                        id: "entry-color-input",
                        icon: c.value.color ? "fas fa-paint-roller" : "fas fa-palette",
                        style: Zt({
                            background: g.value,
                            color: v(ul)(g.value)
                        })
                    }, {
                        default: u( () => [o(Vt, null, {
                            default: u( () => [Q(E(c.value.color ? v(a)("advancededitor.This color has been manually assigned") : v(a)("advancededitor.This color is inherited from the theme")), 1)]),
                            _: 1
                        }), o(ad, null, {
                            default: u( () => [o(Dl, {
                                modelValue: c.value.color,
                                "onUpdate:modelValue": k[5] || (k[5] = z => c.value.color = z),
                                "default-view": "palette"
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["icon", "style"]), c.value.color ? (V(),
                    X(O, {
                        key: 0,
                        flat: "",
                        "no-caps": "",
                        color: "negative",
                        icon: "fas fa-x",
                        onClick: k[6] || (k[6] = z => delete c.value.color),
                        style: {
                            "margin-left": "0.5em"
                        },
                        "aria-label": v(a)("advancededitor.Reset color")
                    }, {
                        default: u( () => [o(Vt, null, {
                            default: u( () => [Q(E(v(a)("advancededitor.Reset color")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["aria-label"])) : ye("", !0), !c.value.color && c.value.image && v(p) === !1 ? (V(),
                    X(O, {
                        key: 1,
                        flat: "",
                        "no-caps": "",
                        color: "primary",
                        icon: "fas fa-arrow-left",
                        onClick: C,
                        style: {
                            "margin-left": "0.5em"
                        },
                        "aria-label": v(a)("advancededitor.Use color from image")
                    }, {
                        default: u( () => [o(Vt, null, {
                            default: u( () => [Q(E(v(a)("advancededitor.Use color from image")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["aria-label"])) : ye("", !0), m("div", hd, [c.value.image ? (V(),
                    Z("div", bd, [m("img", {
                        src: c.value.image,
                        alt: v(a)("advancededitor.Image attached"),
                        style: {
                            "max-height": "10em"
                        }
                    }, null, 8, yd), o(O, {
                        round: "",
                        flat: "",
                        dense: "",
                        icon: "fas fa-times",
                        onClick: R,
                        class: "absolute-top-right",
                        "aria-label": v(a)("optionsdialog.Remove image")
                    }, null, 8, ["aria-label"])])) : (V(),
                    Z("div", wd, [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: W.value,
                        "text-color": U.value,
                        icon: "far fa-image",
                        label: v(a)("textboxbuttons.Add image"),
                        onClick: D
                    }, null, 8, ["color", "text-color", "label"]), ue(o(v(Lt), {
                        ref_key: "filePicker",
                        ref: y,
                        accept: "image/*",
                        modelValue: x.value,
                        "onUpdate:modelValue": k[7] || (k[7] = z => x.value = z)
                    }, null, 8, ["modelValue"]), [[We, !1]])]))])])) : ye("", !0), m("label", _d, [m("div", Fd, E(v(a)("optionsdialog.Sound")), 1), m("div", Sd, [o(Ft, {
                        filled: "",
                        dense: "",
                        "map-options": "",
                        "emit-value": "",
                        modelValue: H.value,
                        "onUpdate:modelValue": k[8] || (k[8] = z => H.value = z),
                        options: v($)
                    }, null, 8, ["modelValue", "options"])])]), m("label", Cd, [m("div", kd, E(v(a)("advancededitor.Popup message")), 1), m("div", xd, [i.value.displayWinnerDialog ? (V(),
                    X(lt, {
                        key: 0,
                        filled: "",
                        dense: "",
                        modelValue: c.value.message,
                        "onUpdate:modelValue": k[9] || (k[9] = z => c.value.message = z)
                    }, null, 8, ["modelValue"])) : ye("", !0)])]), m("label", Dd, [m("div", Ad, E(v(a)("advancededitor.Weight")), 1), m("div", Vd, [o(lt, {
                        filled: "",
                        dense: "",
                        type: "number",
                        modelValue: c.value.weight,
                        "onUpdate:modelValue": k[12] || (k[12] = z => c.value.weight = z),
                        modelModifiers: {
                            number: !0
                        },
                        class: "col"
                    }, {
                        append: u( () => [o(O, {
                            flat: "",
                            round: "",
                            dense: "",
                            icon: "fas fa-minus",
                            onClick: k[10] || (k[10] = z => Y(-1)),
                            disable: d.value <= 1
                        }, null, 8, ["disable"]), o(O, {
                            flat: "",
                            round: "",
                            dense: "",
                            icon: "fas fa-plus",
                            onClick: k[11] || (k[11] = z => Y(1))
                        })]),
                        _: 1
                    }, 8, ["modelValue"]), m("div", Ed, E(v(a)("advancededitor.Probability")) + ": " + E(ee.value) + "% ", 1)])])]),
                    _: 1,
                    __: [17]
                })) : (V(),
                X(Ae, {
                    key: 1,
                    class: "q-gutter-y-md text-center"
                }, {
                    default: u( () => [m("div", null, E(v(a)("advancededitor.No entries")), 1), o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(a)("advancededitor.Add entry"),
                        onClick: k[13] || (k[13] = z => S())
                    }, null, 8, ["label"])]),
                    _: 1
                })), o(dt, {
                    align: "right"
                }, {
                    default: u( () => [o(O, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(a)("common.Cancel"),
                        onClick: k[14] || (k[14] = z => n.value = !1)
                    }, null, 8, ["label"]), o(O, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(a)("common.OK"),
                        onClick: P
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , Bd = {
    class: "row no-wrap q-gutter-x-sm items-center"
}
  , Td = {
    class: "col q-gutter-y-sm"
}
  , Id = {
    class: "row no-wrap q-gutter-x-md"
}
  , qd = {
    key: 0,
    class: "col-shrink"
}
  , Wd = {
    key: 1,
    class: "relative-position"
}
  , Pd = ["src", "alt"]
  , zd = {
    key: 2,
    class: "col-shrink"
}
  , Ld = {
    key: 3,
    class: "col"
}
  , Md = {
    key: 0
}
  , Ud = {
    style: {
        "font-size": "16px"
    }
}
  , Od = be({
    __name: "AdvancedEntry",
    props: {
        i: {
            type: Number,
            required: !0
        }
    },
    emits: ["open-advanced-dialog"],
    setup(e, {emit: s}) {
        const l = Oe()
          , {t: a} = _e()
          , t = e
          , n = s
          , {layout: i} = wn()
          , r = F(null)
          , f = h( () => l.wheelConfig)
          , c = h( () => f.value.entries)
          , d = h( () => c.value[t.i])
          , g = h( () => l.wheelIsBusy)
          , p = F(null)
          , y = F();
        he(y, W => {
            if (W) {
                J("Wheel", "AttachImageToEntry");
                const U = new FileReader;
                U.onload = async H => {
                    if (H.target?.result) {
                        const $ = await El(H.target.result.toString());
                        l.addImageToEntry($, t.i)
                    }
                }
                ,
                U.readAsDataURL(W)
            }
        }
        );
        const x = h({
            get: () => d.value.text,
            set: W => l.setEntryText(t.i, W ?? "")
        })
          , w = h({
            get: () => d.value.color || f.value.getEntryColor(t.i),
            set: W => l.setEntryColor(t.i, W)
        })
          , T = h({
            get: () => d.value.enabled ?? !0,
            set: W => l.setEntryEnabled(t.i, W)
        })
          , I = h({
            get: () => d.value.weight ?? 1,
            set: W => {
                Number(W) > 0 && l.setEntryWeight(t.i, Math.min(Number(W), 9999))
            }
        })
          , S = h( () => {
            if (!d.value.enabled)
                return 0;
            let W = c.value;
            if (!f.value.allowDuplicates) {
                if (gn(c.value, d.value))
                    return 0;
                W = pn(!1, c.value)
            }
            const U = hn(W);
            return Math.round(100 * I.value / U)
        }
        );
        function C(W) {
            g.value || (J("Wheel", "RemoveAdvancedEntry"),
            l.removeEntryByIndex(W))
        }
        function D(W) {
            g.value || (J("Wheel", "MoveAdvancedEntry", W),
            l.moveEntry(t.i, W))
        }
        function R() {
            g.value || p.value.pickFiles()
        }
        function P() {
            g.value || l.removeImageFromEntry(t.i)
        }
        return (W, U) => (V(),
        Z(ut, null, [o(we, null, {
            default: u( () => [o(ne, {
                side: "",
                class: Xt({
                    faded: d.value.enabled === !1
                }),
                style: {
                    "margin-left": "-16px",
                    "margin-right": "-8px"
                }
            }, {
                default: u( () => [t.i > 0 ? (V(),
                X(O, {
                    key: 0,
                    round: "",
                    flat: "",
                    dense: "",
                    size: "sm",
                    icon: "fas fa-arrow-up",
                    disable: g.value,
                    onClick: U[0] || (U[0] = H => D(-1))
                }, null, 8, ["disable"])) : ye("", !0), t.i < c.value.length - 1 ? (V(),
                X(O, {
                    key: 1,
                    round: "",
                    flat: "",
                    dense: "",
                    size: "sm",
                    icon: "fas fa-arrow-down",
                    disable: g.value,
                    onClick: U[1] || (U[1] = H => D(1))
                }, null, 8, ["disable"])) : ye("", !0)]),
                _: 1
            }, 8, ["class"]), o(ne, {
                class: Xt({
                    faded: d.value.enabled === !1
                })
            }, {
                default: u( () => [m("div", Bd, [m("div", Td, [o(lt, {
                    filled: "",
                    dense: "",
                    modelValue: x.value,
                    "onUpdate:modelValue": U[2] || (U[2] = H => x.value = H),
                    ref_key: "textbox",
                    ref: r,
                    disable: g.value
                }, null, 8, ["modelValue", "disable"]), m("div", Id, [f.value.type !== "image" ? (V(),
                Z("div", qd, [o(St, {
                    "dropdown-icon": d.value.color ? "fas fa-paint-roller" : "fas fa-palette",
                    style: Zt({
                        background: w.value,
                        color: v(ul)(w.value)
                    }),
                    disable: g.value,
                    "aria-label": v(a)("advancededitor.Color")
                }, {
                    default: u( () => [o(Dl, {
                        modelValue: w.value,
                        "onUpdate:modelValue": U[3] || (U[3] = H => w.value = H),
                        "default-view": "palette"
                    }, null, 8, ["modelValue"])]),
                    _: 1
                }, 8, ["dropdown-icon", "style", "disable", "aria-label"])])) : ye("", !0), d.value.image ? (V(),
                Z("div", Wd, [m("img", {
                    src: d.value.image,
                    alt: v(a)("advancededitor.Image attached"),
                    style: {
                        "border-radius": "4px",
                        "max-height": "40px"
                    }
                }, null, 8, Pd), o(O, {
                    round: "",
                    flat: "",
                    dense: "",
                    size: "sm",
                    icon: "fas fa-times",
                    disable: g.value,
                    onClick: P,
                    class: "absolute-top-right"
                }, null, 8, ["disable"])])) : (V(),
                Z("div", zd, [o(O, {
                    round: "",
                    flat: "",
                    dense: "",
                    icon: "fas fa-image",
                    disable: g.value,
                    onClick: R
                }, null, 8, ["disable"]), ue(o(Lt, {
                    ref_key: "filePicker",
                    ref: p,
                    accept: "image/*",
                    modelValue: y.value,
                    "onUpdate:modelValue": U[4] || (U[4] = H => y.value = H),
                    disable: g.value
                }, null, 8, ["modelValue", "disable"]), [[We, !1]])])), v(i).columnWidth > 356 ? (V(),
                Z("div", Ld, [o(lt, {
                    type: "number",
                    filled: "",
                    dense: "",
                    modelValue: I.value,
                    "onUpdate:modelValue": U[7] || (U[7] = H => I.value = H),
                    disable: g.value,
                    ref: "weightInput"
                }, So({
                    append: u( () => [v(i).columnWidth > 436 ? (V(),
                    Z("div", Md, [o(O, {
                        flat: "",
                        round: "",
                        dense: "",
                        size: "sm",
                        icon: "fas fa-minus",
                        disable: g.value,
                        onClick: U[5] || (U[5] = H => I.value -= 1)
                    }, null, 8, ["disable"]), o(O, {
                        flat: "",
                        round: "",
                        dense: "",
                        size: "sm",
                        icon: "fas fa-plus",
                        disable: g.value,
                        onClick: U[6] || (U[6] = H => I.value += 1)
                    }, null, 8, ["disable"])])) : ye("", !0), m("div", Ud, E(S.value) + "% ", 1)]),
                    _: 2
                }, [v(i).columnWidth > 390 ? {
                    name: "prepend",
                    fn: u( () => [o(De, {
                        name: "fas fa-balance-scale-left",
                        style: {
                            "font-size": "16px",
                            "margin-right": "8px"
                        }
                    })]),
                    key: "0"
                } : void 0]), 1032, ["modelValue", "disable"])])) : ye("", !0)])]), o(O, {
                    unelevated: "",
                    dense: "",
                    round: "",
                    icon: "fas fa-sliders",
                    color: "primary",
                    "aria-label": v(a)("common.Edit"),
                    disable: g.value,
                    onClick: U[8] || (U[8] = H => n("open-advanced-dialog"))
                }, null, 8, ["aria-label", "disable"])])]),
                _: 1
            }, 8, ["class"]), o(ne, {
                side: "",
                style: {
                    "margin-left": "-16px"
                }
            }, {
                default: u( () => [m("div", null, [o(O, {
                    round: "",
                    flat: "",
                    dense: "",
                    size: "sm",
                    icon: "fas fa-times",
                    disable: g.value,
                    class: Xt({
                        faded: d.value.enabled === !1
                    }),
                    onClick: U[9] || (U[9] = H => C(t.i)),
                    style: {
                        "margin-right": "2px"
                    }
                }, null, 8, ["disable", "class"])]), m("div", null, [o(Ge, {
                    modelValue: T.value,
                    "onUpdate:modelValue": U[10] || (U[10] = H => T.value = H),
                    size: "xs",
                    disable: g.value
                }, null, 8, ["modelValue", "disable"])])]),
                _: 1
            })]),
            _: 1
        }), t.i < c.value.length - 1 ? (V(),
        X(rl, {
            key: 0,
            class: "q-mr-md"
        })) : ye("", !0)], 64))
    }
})
  , Rd = st(Od, [["__scopeId", "data-v-68fef0a0"]])
  , Nd = {
    class: "flex f-col flex-1 q-gutter-y-sm"
}
  , jd = be({
    __name: "AdvancedEditor",
    setup(e) {
        const s = Oe()
          , {t: l} = _e()
          , a = F(null)
          , t = h( () => s.wheelConfig)
          , n = h( () => t.value.entries)
          , i = h( () => s.wheelIsBusy);
        function r() {
            J("Wheel", "AddAdvancedEntry"),
            s.addEntry({
                text: "",
                weight: 1,
                enabled: !0
            })
        }
        he( () => n.value, (g, p) => {
            g.length > 0 && p.length > 0 && g.at(-1)?.id !== p.at(-1)?.id && c()
        }
        );
        const f = F(null);
        async function c() {
            await Co(200),
            f.value.setScrollPercentage("vertical", 1, 200)
        }
        function d(g) {
            a.value.show(g)
        }
        return (g, p) => (V(),
        Z("div", Nd, [o(ld, {
            style: {
                flex: "1"
            },
            visible: "",
            ref_key: "scrollArea",
            ref: f
        }, {
            default: u( () => [(V(!0),
            Z(ut, null, gt(n.value, (y, x) => (V(),
            X(Rd, {
                i: x,
                key: y.id,
                onOpenAdvancedDialog: w => d(y)
            }, null, 8, ["i", "onOpenAdvancedDialog"]))), 128))]),
            _: 1
        }, 512), o(O, {
            unelevated: "",
            "no-caps": "",
            color: "primary",
            label: v(l)("advancededitor.Add entry"),
            class: "full-width",
            disable: i.value,
            onClick: r
        }, null, 8, ["label", "disable"]), o($d, {
            ref_key: "advancedDialog",
            ref: a
        }, null, 512)]))
    }
})
  , Hd = {
    class: "flex justify-between items-center gap-sm"
}
  , Qd = {
    class: "flex items-center gap-sm"
}
  , Kd = be({
    __name: "AppInfo",
    setup(e) {
        const {t: s} = _e()
          , l = Al();
        return (a, t) => {
            const n = vl("router-link");
            return V(),
            Z("div", Hd, [m("div", Qd, [m("span", null, E(`${v(s)("appInfo.Version")} ${v(l).version}`), 1), v(l).userHasSeenCurrentVersion ? ye("", !0) : (V(),
            X(O, {
                key: 0,
                "no-caps": "",
                dense: "",
                rounded: "",
                color: "primary",
                to: "/changelog",
                style: {
                    "font-size": "0.75em",
                    padding: "0 0.5em"
                }
            }, {
                default: u( () => t[0] || (t[0] = [Q(" New! ", -1)])),
                _: 1,
                __: [0]
            }))]), o(n, {
                to: "/changelog"
            }, {
                default: u( () => [Q(E(v(s)("common.Changelog")), 1)]),
                _: 1
            })])
        }
    }
})
  , Gd = {
    class: "full-height flex f-col"
}
  , Yd = be({
    __name: "EditorColumn",
    setup(e) {
        const {t: s} = _e()
          , l = Oe()
          , a = F("entries")
          , t = F(!1);
        return (n, i) => (V(),
        Z("div", Gd, [o(dl, {
            modelValue: a.value,
            "onUpdate:modelValue": i[1] || (i[1] = r => a.value = r),
            dense: "",
            "no-caps": "",
            "inline-label": "",
            align: "left",
            breakpoint: "450",
            style: {
                "max-width": "100%"
            }
        }, {
            default: u( () => [ue(o(vt, {
                name: "entries",
                label: v(s)("nameTabs.Entries")
            }, {
                default: u( () => [o(Jl, {
                    rounded: "",
                    color: "grey-7",
                    label: v(l).wheelConfig.entries.length,
                    style: {
                        "margin-left": "6px"
                    }
                }, null, 8, ["label"])]),
                _: 1
            }, 8, ["label"]), [[We, !t.value]]), ue(o(vt, {
                name: "results",
                label: v(s)("nameTabs.Results")
            }, {
                default: u( () => [o(Jl, {
                    rounded: "",
                    color: "grey-7",
                    label: v(l).winners.length,
                    style: {
                        "margin-left": "6px"
                    }
                }, null, 8, ["label"])]),
                _: 1
            }, 8, ["label"]), [[We, !t.value]]), o(Ct), o(Ge, {
                label: v(s)("nameTabs.Hide"),
                modelValue: t.value,
                "onUpdate:modelValue": i[0] || (i[0] = r => t.value = r),
                size: "xs",
                class: "q-pr-md",
                style: {
                    "font-size": "14px",
                    height: "36px"
                }
            }, null, 8, ["label", "modelValue"])]),
            _: 1
        }, 8, ["modelValue"]), ue(o(ga, {
            modelValue: a.value,
            "onUpdate:modelValue": i[2] || (i[2] = r => a.value = r),
            animated: "",
            class: "shadow-1 rounded-borders flex-1",
            style: {
                "min-height": "312px"
            }
        }, {
            default: u( () => [o(Et, {
                name: "entries",
                class: "flex f-col no-wrap"
            }, {
                default: u( () => [o(Jc), v(l).wheelIsAdvanced ? (V(),
                X(jd, {
                    key: 1
                })) : (V(),
                X(Uc, {
                    key: 0
                })), o(Kd, {
                    class: "q-mt-md"
                })]),
                _: 1
            }), o(Et, {
                name: "results",
                class: "flex f-col no-wrap"
            }, {
                default: u( () => [o(ed), o(Rc)]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]), [[We, !t.value]])]))
    }
})
  , Xd = {
    style: {
        height: "4em"
    }
}
  , Jd = {
    key: 0,
    class: "text-h3",
    style: {
        position: "absolute",
        color: "#34a853"
    }
}
  , Zd = {
    key: 0,
    class: "text-h3",
    style: {
        position: "absolute",
        color: "#34a853"
    }
}
  , ev = {
    __name: "YearlyStatsCounter",
    props: {
        title: String,
        increment: Number,
        fps: Number
    },
    setup(e) {
        const s = e
          , l = F(0)
          , a = F("")
          , t = F(!0);
        return ko( () => {
            const n = new Date(new Date().getFullYear(),0,1)
              , i = new Date;
            l.value = (i - n) / 1e3 * s.increment,
            a.value = Math.round(l.value).toLocaleString(),
            t.value = !t.value
        }
        , 1e3 / s.fps, {
            immediateCallback: !0
        }),
        (n, i) => (V(),
        Z("div", Xd, [Q(E(e.title) + " ", 1), o(wl, {
            name: "fade",
            mode: "in-out"
        }, {
            default: u( () => [t.value ? (V(),
            Z("p", Jd, E(a.value), 1)) : ye("", !0)]),
            _: 1
        }), o(wl, {
            name: "fade",
            mode: "in-out"
        }, {
            default: u( () => [t.value ? ye("", !0) : (V(),
            Z("p", Zd, E(a.value), 1))]),
            _: 1
        })]))
    }
}
  , Na = st(ev, [["__scopeId", "data-v-9a50a4a0"]])
  , tv = {
    class: "q-pa-md about-card-row"
}
  , lv = {
    class: "about-card-column"
}
  , av = {
    class: "about-card-column"
}
  , nv = {
    class: "about-card-column"
}
  , ov = be({
    __name: "AboutCards",
    setup(e) {
        const s = gl();
        return (l, a) => {
            const t = vl("router-link");
            return V(),
            Z("div", tv, [m("div", lv, [o(Pt, null, {
                header: u( () => a[0] || (a[0] = [Q(" What is the wheel spinner for? ", -1)])),
                main: u( () => [a[8] || (a[8] = Q(" Every day we hear from people who use our website in new ways: ", -1)), m("ul", null, [m("li", null, [a[2] || (a[2] = Q(" Random name picker in the classroom: pick which student will answer the next question. ", -1)), o(t, {
                    to: "/how-to-use-in-the-classroom"
                }, {
                    default: u( () => a[1] || (a[1] = [Q(" How to use it in the classroom ", -1)])),
                    _: 1,
                    __: [1]
                })]), a[3] || (a[3] = m("li", null, " If you are a retailer, spin the wheel to pick which loyal customer will get the monthly giveaway. ", -1)), a[4] || (a[4] = m("li", null, " When you give a presentation, use the wheel spinner to pick a lucky winner among the attendees who turned in the survey. ", -1)), a[5] || (a[5] = m("li", null, " Random name picker at work: in your daily standup meeting at work, randomize who speaks first. ", -1)), a[6] || (a[6] = m("li", null, " If you are overwhelmed by your to do items, put them on a wheel and spin to find which one to start with. ", -1)), a[7] || (a[7] = m("li", null, " If you can't agree on what to have for dinner, put the alternatives on the wheel and spin. ", -1))])]),
                _: 1
            }), o(Pt, null, {
                header: u( () => a[9] || (a[9] = [Q(" Can the wheel be rigged? ", -1)])),
                main: u( () => [a[12] || (a[12] = m("p", null, " There is no functionality to determine which entry will win ahead of time. When you click the wheel, it accelerates for exactly one second, then it is set to a random rotation between 0 and 360 degrees, and finally it decelerates to a stop. The setting of a random rotation is not visible to the naked eye as it happens when the wheel is spinning quite fast. ", -1)), m("p", null, [o(t, {
                    to: "/faq#randomness"
                }, {
                    default: u( () => a[10] || (a[10] = [Q("Randomness of the wheel", -1)])),
                    _: 1,
                    __: [10]
                }), a[11] || (a[11] = Q(". ", -1))])]),
                _: 1
            })]), m("div", av, [o(Pt, null, {
                header: u( () => a[13] || (a[13] = [Q(" How to use the wheel spinner ", -1)])),
                main: u( () => [m("p", null, [a[15] || (a[15] = Q(" It's easy: type in your entries in the textbox to the right of the wheel, then click the wheel to spin it and get a random winner. To make the wheel your own by customizing the colors, sounds, and spin time, click ", -1)), o(Jl, {
                    color: "primary"
                }, {
                    default: u( () => a[14] || (a[14] = [m("i", {
                        class: "fas fa-palette"
                    }, null, -1), Q(" Customize", -1)])),
                    _: 1,
                    __: [14]
                }), a[16] || (a[16] = Q(" at the top of the page. ", -1))]), m("p", null, [o(t, {
                    to: "/user-reviews-and-tutorials"
                }, {
                    default: u( () => a[17] || (a[17] = [Q(" Video reviews and tutorials by users ", -1)])),
                    _: 1,
                    __: [17]
                })])]),
                _: 1
            }), o(Pt, null, {
                header: u( () => a[18] || (a[18] = [Q(" Is my data private? ", -1)])),
                main: u( () => [a[20] || (a[20] = m("p", null, " We are committed to protecting and respecting your privacy and the security of your data. We comply with GDPR, CCPA, SB 190, SB 1392, and we closely monitor changes to them. We follow industry best practices for data encryption and backups. ", -1)), m("p", null, [o(t, {
                    to: "/privacy-policy"
                }, {
                    default: u( () => a[19] || (a[19] = [Q(" How we safeguard your privacy ", -1)])),
                    _: 1,
                    __: [19]
                })])]),
                _: 1
            }), o(Pt, null, {
                header: u( () => a[21] || (a[21] = [Q(" Does it use renewable energy? ", -1)])),
                main: u( () => [a[23] || (a[23] = m("p", null, " We are proud to share that 100% of the electricity that powers our servers is renewable, and 93% comes from carbon-free energy sources. ", -1)), m("p", null, [o(t, {
                    to: "/faq#sustainability"
                }, {
                    default: u( () => a[22] || (a[22] = [Q("Sustainability", -1)])),
                    _: 1,
                    __: [22]
                })])]),
                _: 1
            })]), m("div", nv, [o(Pt, null, {
                header: u( () => a[24] || (a[24] = [Q(" Try our Discord bot ", -1)])),
                main: u( () => [a[26] || (a[26] = m("p", null, " Use our Discord bot to spin the wheel directly in your Discord server. You can use the bot's commands to spin all kinds of different wheels. ", -1)), a[27] || (a[27] = m("ul", null, [m("li", null, "Spin with the members of your server"), m("li", null, "Spin with members that have a specific role"), m("li", null, "Spin with members that reacted to a message"), m("li", null, "Spin any of your shared wheels"), m("li", null, "Or spin with any entries you want!")], -1)), m("p", null, [o(t, {
                    to: "/faq#discordbot"
                }, {
                    default: u( () => a[25] || (a[25] = [Q("Add the Discord bot", -1)])),
                    _: 1,
                    __: [25]
                })])]),
                _: 1
            }), o(Pt, null, {
                header: u( () => [Q(" Activity in " + E(new Date().getFullYear()), 1)]),
                main: u( () => [o(Na, {
                    title: "Wheel spins",
                    increment: v(s).spinsPerSecond,
                    fps: .333333
                }, null, 8, ["increment"]), a[28] || (a[28] = m("br", null, null, -1)), o(Na, {
                    title: "Hours of spinning",
                    increment: v(s).hoursSpunPerSecond,
                    fps: v(s).hoursSpunPerSecond
                }, null, 8, ["increment", "fps"]), a[29] || (a[29] = m("br", null, null, -1))]),
                _: 1
            })])])
        }
    }
})
  , iv = st(ov, [["__scopeId", "data-v-4b7d40af"]])
  , sv = {
    class: "q-gutter-y-sm"
}
  , rv = {
    class: "row items-center q-gutter-x-md"
}
  , uv = {
    key: 0,
    style: {
        "font-size": "32px"
    },
    class: "break-long-words"
}
  , cv = {
    key: 0,
    class: "break-long-words"
}
  , dv = be({
    __name: "TitleAndDescription",
    props: {
        editable: Boolean
    },
    emits: ["edit-title-and-description"],
    setup(e, {emit: s}) {
        const l = Oe()
          , {t: a} = _e()
          , t = e
          , n = s
          , i = h( () => l.wheelConfig)
          , r = h( () => i.value.title)
          , f = h( () => i.value.description);
        return (c, d) => (V(),
        Z("div", sv, [m("div", rv, [r.value ? (V(),
        Z("span", uv, E(r.value), 1)) : ye("", !0), ue(o(O, {
            round: "",
            unelevated: "",
            dense: "",
            color: "primary",
            icon: "fas fa-pencil-alt",
            onClick: d[0] || (d[0] = g => n("edit-title-and-description"))
        }, {
            default: u( () => [o(Vt, null, {
                default: u( () => [Q(E(v(a)("common.Edit title and description")), 1)]),
                _: 1
            })]),
            _: 1
        }, 512), [[We, t.editable]])]), f.value ? (V(),
        Z("div", cv, E(f.value), 1)) : ye("", !0), d[1] || (d[1] = m("div", {
            class: "q-pb-sm desktop-only"
        }, null, -1))]))
    }
})
  , vv = st(dv, [["__scopeId", "data-v-cd99b46d"]])
  , fv = {
    class: "q-gutter-y-sm"
}
  , mv = {
    key: 0
}
  , gv = {
    key: 0
}
  , pv = {
    key: 1
}
  , hv = be({
    __name: "SaveStateChips",
    setup(e) {
        const s = Oe()
          , {t: l} = _e();
        return (a, t) => {
            const n = vl("router-link");
            return V(),
            Z("div", fv, [v(s).path ? (V(),
            Z("div", mv, [o(_l, null, {
                default: u( () => [v(s).shareMode === "private" ? (V(),
                Z("span", gv, [t[1] || (t[1] = m("i", {
                    class: "fas fa-lock"
                }, null, -1)), Q(" " + E(v(l)("wheelinfocard.Private")), 1)])) : (V(),
                Z("span", pv, [t[2] || (t[2] = m("i", {
                    class: "fas fa-share-alt"
                }, null, -1)), Q(" " + E(v(l)("wheelinfocard.Shared")) + ": ", 1), o(n, {
                    to: {
                        name: "shared-wheel",
                        params: {
                            wheelPath: v(s).path
                        }
                    },
                    onClick: t[0] || (t[0] = xo( () => {}
                    , ["stop"]))
                }, {
                    default: u( () => [Q(E(v(s).path), 1)]),
                    _: 1
                }, 8, ["to"])]))]),
                _: 1
            }), v(s).unsavedChanges ? (V(),
            X(_l, {
                key: 0
            }, {
                default: u( () => [Q(E(v(l)("app.Unsaved changes")), 1)]),
                _: 1
            })) : ye("", !0)])) : ye("", !0), t[3] || (t[3] = m("div", {
                class: "q-pb-sm desktop-only"
            }, null, -1))])
        }
    }
})
  , bv = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
let Zl;
function yv(e) {
    return Zl = e,
    new Promise(s => {
        gapi.load("auth2:client:picker", () => {
            gapi.client.init({
                apiKey: "AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g",
                discoveryDocs: bv,
                clientId: "1096958520212-sbdisrtnfpeuk96lbi0cfspj7pspgk38.apps.googleusercontent.com",
                scope: Do.join(" ")
            }).then( () => {
                gapi.client.setToken({
                    access_token: Zl
                }),
                s()
            }
            )
        }
        )
    }
    )
}
function wv() {
    return new Promise( (e, s) => {
        const l = new google.picker.DocsView(google.picker.ViewId.SPREADSHEETS);
        new google.picker.PickerBuilder().enableFeature(google.picker.Feature.NAV_HIDDEN).setAppId("1096958520212").setOAuthToken(Zl).addView(l).setDeveloperKey("AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g").setCallback(t => {
            if (t.action === "cancel" && s("No spreadsheet picked"),
            t.action === "picked" && t.docs.length > 0) {
                const n = t.docs[0].id;
                e(n)
            }
        }
        ).setTitle("Select a spreadsheet").build().setVisible(!0)
    }
    )
}
const _v = {
    key: 0,
    style: {
        "text-align": "center"
    }
}
  , Fv = {
    class: "banner-text"
}
  , Sv = be({
    __name: "MaintenanceBanner",
    setup(e) {
        const s = gl()
          , l = F(!0)
          , a = () => {
            l.value = !1
        }
        ;
        return (t, n) => l.value && v(s).maintenanceMessage ? (V(),
        Z("div", _v, [n[0] || (n[0] = m("span", {
            class: "banner-left"
        }, "    ", -1)), m("span", Fv, E(v(s).maintenanceMessage), 1), n[1] || (n[1] = m("span", {
            class: "banner-right"
        }, "    ", -1)), m("span", null, [m("i", {
            class: "fas fa-times close-icon",
            onClick: a
        })])])) : ye("", !0)
    }
})
  , Cv = st(Sv, [["__scopeId", "data-v-9407ca08"]])
  , kv = {
    key: 0
}
  , xv = {
    key: 1
}
  , Dv = {
    class: "q-mt-md"
}
  , Av = {
    key: 0
}
  , Vv = {
    key: 1
}
  , Ev = {
    class: "q-gutter-x-md"
}
  , $v = {
    class: "q-mt-md"
}
  , Bv = {
    key: 0
}
  , Tv = {
    key: 1
}
  , Iv = be({
    __name: "WheelLocationDialog",
    setup(e, {expose: s}) {
        const {t: l} = _e()
          , a = F(!1)
          , t = F();
        let n;
        function i(f) {
            return t.value = f,
            a.value = !0,
            new Promise(c => {
                n = c
            }
            )
        }
        function r(f) {
            J("", "WheelLocationDialog", f),
            n(f),
            a.value = !1
        }
        return s({
            askUserForLocation: i
        }),
        (f, c) => {
            const d = vl("router-link");
            return V(),
            X(Ye, {
                modelValue: a.value,
                "onUpdate:modelValue": c[2] || (c[2] = g => a.value = g)
            }, {
                default: u( () => [o(at, {
                    style: {
                        width: "400px"
                    }
                }, {
                    default: u( () => [o(Ae, {
                        class: "row items-center justify-between text-h6",
                        style: {
                            "background-color": "#00000020"
                        }
                    }, {
                        default: u( () => [t.value === "save" ? (V(),
                        Z("div", kv, [c[3] || (c[3] = m("i", {
                            class: "fas fa-save"
                        }, null, -1)), Q(" " + E(v(l)("savedialog.Save wheel")), 1)])) : (V(),
                        Z("div", xv, [c[4] || (c[4] = m("i", {
                            class: "fas fa-folder-open"
                        }, null, -1)), Q(" " + E(v(l)("opendialog.Open wheel")), 1)])), o(qt)]),
                        _: 1
                    }), o(Ae, {
                        class: "q-gutter-y-md"
                    }, {
                        default: u( () => [o(O, {
                            unelevated: "",
                            "no-caps": "",
                            color: "primary",
                            padding: "lg",
                            onClick: c[0] || (c[0] = g => r("cloud")),
                            style: {
                                width: "100%"
                            }
                        }, {
                            default: u( () => [m("div", null, [o(De, {
                                name: "fas fa-cloud",
                                size: "8em"
                            }), m("div", Dv, [t.value === "save" ? (V(),
                            Z("span", Av, E(v(l)("savedialog.Save to the cloud (recommended)")), 1)) : (V(),
                            Z("span", Vv, E(v(l)("opendialog.Open from the cloud (recommended)")), 1))])])]),
                            _: 1
                        }), o(O, {
                            unelevated: "",
                            "no-caps": "",
                            color: "grey-7",
                            padding: "sm",
                            onClick: c[1] || (c[1] = g => r("local")),
                            style: {
                                width: "100%"
                            }
                        }, {
                            default: u( () => [m("div", Ev, [o(De, {
                                name: "fas fa-hard-drive",
                                size: "4em"
                            }), m("span", $v, [t.value === "save" ? (V(),
                            Z("span", Bv, E(v(l)("savedialog.Save to a local file")), 1)) : (V(),
                            Z("span", Tv, E(v(l)("opendialog.Open a local file")), 1))])])]),
                            _: 1
                        }), m("div", null, [c[5] || (c[5] = m("i", {
                            class: "fa-regular fa-circle-question q-mr-sm"
                        }, null, -1)), o(d, {
                            target: "_blank",
                            to: "/faq#saving-2"
                        }, {
                            default: u( () => [Q(E(v(l)("app.Help me choose")), 1)]),
                            _: 1
                        })])]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            }, 8, ["modelValue"])
        }
    }
});
function qv(e) {
    const s = gl();
    he( () => s.advertiser, l => {
        l === "freestar" && Wv(e)
    }
    , {
        immediate: !0
    })
}
function Wv(e) {
    console.log("Initializing Freestar ad(s)"),
    ti({
        link: [{
            href: "https://a.pub.network/",
            crossorigin: "",
            type: "text/javascript"
        }, {
            rel: "preconnect",
            href: "https://b.pub.network/",
            crossorigin: ""
        }, {
            rel: "preconnect",
            href: "https://c.pub.network/",
            crossorigin: ""
        }, {
            rel: "preconnect",
            href: "https://d.pub.network/",
            crossorigin: ""
        }, {
            rel: "preconnect",
            href: "https://c.amazon-adsystem.com",
            crossorigin: ""
        }, {
            rel: "preconnect",
            href: "https://s.amazon-adsystem.com",
            crossorigin: ""
        }, {
            rel: "preconnect",
            href: "https://btloader.com/",
            crossorigin: ""
        }, {
            rel: "preconnect",
            href: "https://api.btloader.com/",
            crossorigin: ""
        }, {
            rel: "preconnect",
            href: "https://cdn.confiant-integrations.net",
            crossorigin: ""
        }],
        script: [{
            src: "https://a.pub.network/wheelofnames-com/pubfig.min.js",
            crossorigin: "",
            async: !0,
            "data-cfasync": !1
        }]
    }, {
        head: e
    }),
    window.freestar ??= {};
    const s = window.freestar;
    s.queue ??= [],
    s.config ??= {},
    s.config.enabled_slots ??= [],
    s.initCallback = () => {
        s.config.enabled_slots.length === 0 ? s.initCallbackCalled = !1 : s.newAdSlots(s.config.enabled_slots)
    }
}
const Pv = {
    class: "page-content"
}
  , zv = {
    class: "left-column"
}
  , Lv = {
    class: "center-column"
}
  , Mv = {
    class: "wheel-container"
}
  , Uv = {
    class: "right-column"
}
  , Ov = {
    key: 0
}
  , Rv = be({
    __name: "EditWheelPage",
    setup(e) {
        const s = Ao()
          , l = Vo()
          , a = ft()
          , {t} = _e()
          , n = li()
          , {layout: i} = wn()
          , r = Al()
          , f = gl()
          , c = It()
          , d = Oe();
        ll( () => {
            f.loadServerSettings(),
            Ll(w.value.pageBackgroundColor),
            D(),
            R(),
            addEventListener("message", ae)
        }
        ),
        Ka( () => {
            Ll(),
            removeEventListener("message", ae)
        }
        );
        async function g(K) {
            J("Wheel", "ChangeLanguage"),
            s.push({
                params: {
                    lang: K
                }
            })
        }
        const p = F(null)
          , y = F(null)
          , x = F(null)
          , w = h( () => d.wheelConfig);
        function T() {
            J("Wheel", "NewWheel"),
            d.saveWheelConfigForUndo(),
            d.resetWheel(),
            I(),
            Xl(t, t("app.Loaded default names and options"), () => {
                J("Wheel", "UndoNewWheel"),
                d.undoWheelConfigChange()
            }
            ),
            S()
        }
        function I() {
            p.value.resetRotation()
        }
        function S() {
            s.replace({
                name: "home",
                query: {}
            })
        }
        function C(K) {
            w.value.displayWinnerDialog && y.value.show(K),
            w.value.animateWinner && x.value.show(K),
            w.value.launchConfetti && Go(w.value.getCoalescedColors())
        }
        he(w, () => {
            No(w.value.duringSpinSound, w.value.afterSpinSound)
        }
        ),
        he( () => w.value.pageBackgroundColor, Ll);
        function D() {
            Object.keys(l.query).length > 0 && (J("", "SetConfigFromUrl", "view"),
            d.setWheelConfig(jo(l.query)),
            S())
        }
        function R() {
            setTimeout( () => {
                d.wheelIsAdvanced && !w.value.usesAdvancedFeatures() && (J("Wheel", "AdvancedWheelAutoDowngraded"),
                d.setAdvanced(!1))
            }
            , 200)
        }
        const P = F(null)
          , W = F(null)
          , U = F(null);
        async function H(K) {
            let ie;
            do
                (r.wheelLocation === "cloud" ? r.wheelLocation : await ee("open")) === "local" ? ie = await Y() : ie = await $(K.shiftKey),
                ie === "switch" && r.switchWheelLocation();
            while (ie === "switch")
        }
        async function $(K) {
            try {
                if (!await M() && await P.value.askUserToLogIn("open") === "switch")
                    return r.switchWheelLocation(),
                    Y();
                if (await M())
                    return K ? await W.value.show() : await U.value.show()
            } catch (ie) {
                Ne(t, ie),
                Ue("OpenWheelError", ie)
            }
            return "cancel"
        }
        async function M() {
            return await c.userIsLoggedIn()
        }
        async function Y() {
            try {
                const ie = await (await ni({
                    extensions: [".json", ".wheel"]
                })).text()
                  , Ee = JSON.parse(ie);
                d.setWheelConfig(Ee),
                d.unsavedChanges = !1
            } catch (K) {
                if (K instanceof DOMException && K.message.includes("abort"))
                    return "cancel";
                Ne(t, K),
                Ue("OpenWheelFromLocalFileError", K)
            }
            return "cancel"
        }
        async function ee(K) {
            const ie = await z.value.askUserForLocation(K);
            return r.setWheelLocation(ie),
            ie
        }
        const b = F(null)
          , k = F(null)
          , z = F(null)
          , L = F(null);
        async function re() {
            if (d.shareMode && d.shareMode !== "private" && await L.value.choose() === "share")
                return await ce.value.share(d.shareMode, !0);
            let K;
            do
                (r.wheelLocation ?? await ee("save")) === "local" ? K = await Le() : K = await ke(),
                K === "switch" && r.switchWheelLocation();
            while (K === "switch")
        }
        async function ke() {
            if (w.value.isTooBigForDatabase())
                return J("Wheel", "WheelTooBigForDatabase", ""),
                await da(t, t("savedialog.Thats a lot of images"), t("savedialog.Do you want to save it as a local file instead?")) ? Le() : "cancel";
            try {
                if (!await M() && await P.value.askUserToLogIn("save") === "switch")
                    return r.switchWheelLocation(),
                    Le();
                if (await M()) {
                    const K = await b.value.show();
                    return S(),
                    K
                }
            } catch (K) {
                Ne(t, K),
                Ue("SaveWheelError", K)
            }
            return "cancel"
        }
        function Le() {
            return k.value.show()
        }
        const B = F(null)
          , G = F(null)
          , ce = F(null);
        async function Ve() {
            if (w.value.isTooBigForDatabase()) {
                J("Wheel", "WheelTooBigForDatabase", ""),
                yn(t, t("savedialog.Sorry, too many images"));
                return
            }
            try {
                const {openShareSettings: K} = await B.value.show();
                if (K) {
                    const ie = await G.value.askUserForSettings();
                    if (!ie)
                        return;
                    d.setWheelTitle(ie.wheelTitle),
                    d.setWheelDescription(ie.wheelDescription),
                    await ce.value.share(ie.shareMode, ie.updateExistingWheel)
                }
            } catch (K) {
                Ne(t, K),
                Ue("ShareWheelError", K)
            }
        }
        const $e = $o( () => Bo( () => import("./DesktopAd-v379.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])))
          , se = h( () => a.fullscreen.isActive)
          , pe = h( () => !se.value && !Eo());
        c.premium || qv(n);
        const Te = h( () => i.value.orientation === "landscape" && !c.premium)
          , ve = F(null);
        function je() {
            ve.value.show()
        }
        const Je = F(null)
          , q = F(null)
          , oe = F(null);
        async function fe() {
            d.unlinkSheet();
            const K = await Je.value.askUserToLogIn();
            if (K) {
                await yv(K);
                const ie = await wv();
                if (ie) {
                    const {tab: Ee, column: Fe, skipFirstRow: xe, doLiveImport: He, weightsColumn: Qe} = await q.value.askUserToConfigure(ie);
                    Ee && Fe && oe.value.start(ie, Ee, Fe, xe, He, Qe)
                }
            }
        }
        const me = F(null);
        async function Be() {
            try {
                await M() || await P.value.askUserToLogIn(),
                await M() && me.value.show()
            } catch (K) {
                Ne(t, K),
                Ue("AccountDialogError", K)
            }
        }
        const ge = F(null);
        function Me() {
            ge.value.show()
        }
        const Ie = F(null);
        function Ze() {
            Ie.value.show()
        }
        const Re = F(null);
        function j() {
            Re.value.show()
        }
        function ae(K) {
            K.data.name === "setEntries" && !d.wheelIsBusy && Array.isArray(K.data.entries) && d.setWheelConfig(Ho(K, w.value))
        }
        return (K, ie) => (V(),
        X(Po, {
            view: "hhh lpr fff"
        }, {
            default: u( () => [o(Io, {
                reveal: "",
                elevated: "",
                class: "bg-primary text-white"
            }, {
                default: u( () => [o(Cv), o(Di, {
                    onResetWheel: T,
                    onOpenWheel: H,
                    onSaveWheel: re,
                    onShareWheel: Ve,
                    onCustomizeWheel: je,
                    onLinkSheet: fe,
                    onOpenAccountDialog: Be,
                    onLanguageChanged: g,
                    onOpenLanguages: Me,
                    onOpenPreferencesDialog: j
                })]),
                _: 1
            }), o(qo, null, {
                default: u( () => [m("div", Pv, [m("div", zv, [ue(o(vv, {
                    editable: !se.value,
                    onEditTitleAndDescription: Ze
                }, null, 8, ["editable"]), [[We, w.value.showTitle]]), se.value ? ye("", !0) : (V(),
                X(hv, {
                    key: 0
                })), Te.value ? ue((V(),
                X(v($e), {
                    key: 1
                }, null, 512)), [[We, !se.value]]) : ye("", !0)]), m("div", Lv, [m("div", Mv, [o(Qo, {
                    ref_key: "spinningWheel",
                    ref: p,
                    wheelConfig: w.value,
                    onWheelStopped: C,
                    onRemoveEntry: v(d).removeEntry
                }, null, 8, ["wheelConfig", "onRemoveEntry"])])]), m("div", Uv, [ue(o(Yd, null, null, 512), [[We, !se.value]])])]), pe.value ? (V(),
                Z("div", Ov, [ie[0] || (ie[0] = m("hr", null, null, -1)), o(iv), ie[1] || (ie[1] = m("hr", null, null, -1)), o(zo)])) : ye("", !0)]),
                _: 1
            }), o(Bi, {
                ref_key: "winnerDialog",
                ref: y
            }, null, 512), o(Yo, {
                ref_key: "loginDialog",
                ref: P
            }, null, 512), o(as, {
                ref_key: "myWheelsDialog",
                ref: U,
                onResetWheelRotation: I,
                onResetAddressBar: S
            }, null, 512), o(rs, {
                ref_key: "openDialog",
                ref: W,
                onResetWheelRotation: I,
                onResetAddressBar: S
            }, null, 512), o(ps, {
                ref_key: "saveCloudDialog",
                ref: b
            }, null, 512), o(_s, {
                ref_key: "saveLocalDialog",
                ref: k
            }, null, 512), o(ks, {
                ref_key: "saveOrShareChoiceDialog",
                ref: L
            }, null, 512), o(Ds, {
                ref_key: "shareDialogInfo",
                ref: B
            }, null, 512), o(Is, {
                ref_key: "shareDialogSettings",
                ref: G
            }, null, 512), o(Ls, {
                ref_key: "shareDialogLink",
                ref: ce
            }, null, 512), o(Tu, {
                ref_key: "customizeDialog",
                ref: ve
            }, null, 512), o(Wu, {
                ref_key: "sheetLoginDialog",
                ref: Je
            }, null, 512), o(sc, {
                ref_key: "sheetConfigDialog",
                ref: q
            }, null, 512), o(zc, {
                ref_key: "sheetDataPump",
                ref: oe
            }, null, 512), o(pc, {
                ref_key: "accountDialog",
                ref: me
            }, null, 512), o(Dc, {
                ref_key: "languageDialog",
                ref: ge,
                onLanguageChanged: g
            }, null, 512), o(Ac, {
                ref_key: "titleAndDescriptionDialog",
                ref: Ie
            }, null, 512), o(Iv, {
                ref_key: "wheelLocationDialog",
                ref: z
            }, null, 512), o(Pc, {
                ref_key: "preferencesDialog",
                ref: Re
            }, null, 512), o(Ko, {
                ref_key: "winnerAnimation",
                ref: x
            }, null, 512)]),
            _: 1
        }))
    }
})
  , ff = st(Rv, [["__scopeId", "data-v-d20e446d"]]);
export {ff as default};
