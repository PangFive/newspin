import {g as ut, h, i as V, m as Tt, am as Kn, c5 as Ga, y as vt, n as F, c6 as Ya, c7 as Gn, v as we, q as zt, aA as Ve, af as z, c8 as it, aP as Se, aT as Zl, c as Z, o as E, B as ye, aO as Ke, aS as Xa, a_ as Yn, w as u, a as n, d as m, c9 as Et, t as A, aQ as v, aM as ue, aZ as We, b0 as _e, f as H, ca as ul, C as X, bC as Xe, e as Fe, aR as ct, Q as Ye, by as Ja, bz as Me, cb as ea, cc as ta, cd as la, ce as aa, bd as St, cf as Za, cg as Xn, bY as na, bZ as oa, as as $t, bs as ia, ch as Dl, ci as en, cj as bl, ck as Jn, cl as il, cm as tn, bi as Yt, aw as dt, cn as Zn, co as eo, b4 as ln, j as sa, T as yl, ak as to, z as vl, an as lo, aD as an, A as fl, aq as ao, cp as no, cq as oo, cr as io, k as J, cs as so, ah as ml, a$ as Nl, ct as ro, aW as nt, cu as ra, F as rt, r as gt, $ as uo, cv as ua, aX as ll, cw as ca, cx as co, bO as vo, cy as Hl, cz as Je, cA as Xt, G as nn, H as fo, I as Bl, cB as on, aC as da, ao as Ll, u as Ql, bt as mo, b_ as sn, at as Jt, bl as yt, cC as Zt, au as Dt, b8 as al, cD as rn, cE as go, cF as ql, cG as un, az as va, cH as po, aH as ho, cI as bo, cJ as yo, cK as _o, cL as el, bf as cl, cM as wo, cN as cn, l as Kl, D as Fo, cO as So, cP as Co, cQ as dn, cR as vn, cS as ko, cT as fn, cU as mn, cV as gn, bV as _l, cW as xo, cX as Ao, aK as pn, cY as ka, cZ as Do, bB as hn, c_ as El, c$ as Eo, d0 as Pl, d1 as xa, bn as Aa, d2 as Vo, d3 as Wl, d4 as Da, d5 as Ea, d6 as bn, d7 as yn, d8 as _n, d9 as Va, da as Io, db as To, b1 as $o, bN as Bo, bx as Lo, c3 as qo, dc as Po, aJ as Wo, dd as Oo, aU as zo, aV as ie, de as Ia} from "./index-v344.js";
import {_ as Mo} from "./dynamic-import-helper-v344.js";
import {a as Ro, Q as Uo} from "./QToolbar-v344.js";
import {_ as ot, b as Gl, c as jo, Q as No, a as Ho} from "./_plugin-vue_export-helper-v344.js";
import {a as mt, u as Vl} from "./use-quasar-v344.js";
import {u as nl, A as Qo} from "./AppFooter-v344.js";
import {u as wt} from "./user-store-v344.js";
import {Q as Ko} from "./QToolbarTitle-v344.js";
import {Q as pt} from "./QSpace-v344.js";
import {Q as Vt, a as wn} from "./QChip-v344.js";
import {Q as Il, a as Ot, b as Ce, c as te} from "./QMenu-v344.js";
import {C as Ze, D as Mt, g as Go, s as wl, a as Yo, b as Fn, c as Fl, d as Xo, e as Jo, S as Zo} from "./DialogCloseIcon-v344.js";
import {u as ei, W as ti, a as li, l as ai} from "./vue.-sixQ7xP-v344.js";
import {b as Ue, c as Rt, s as Bt, a as Sn, y as fa, d as Ta, e as Yl} from "./Messenger-v344.js";
import {Q as ni} from "./QMarkupTable-v344.js";
import {e as Cn, f as oi, c as ii} from "./position-engine-v344.js";
import {Q as si} from "./QImg-v344.js";
import {Q as Xl} from "./QBadge-v344.js";
import {A as qt} from "./AboutCard-v344.js";
import "./_commonjsHelpers-v344.js";
import "./vue.ziyDaVMR-v344.js";
import "./use-ratio-v344.js";
const ma = ( () => {
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
  , ri = ma ? Promise.resolve().then(function() {
    return mi
}) : Promise.resolve().then(function() {
    return _i
});
async function ui(...e) {
    return (await ri).default(...e)
}
ma ? Promise.resolve().then(function() {
    return pi
}) : Promise.resolve().then(function() {
    return Fi
});
const ci = ma ? Promise.resolve().then(function() {
    return bi
}) : Promise.resolve().then(function() {
    return Ci
});
async function di(...e) {
    return (await ci).default(...e)
}
const vi = async e => {
    const s = await e.getFile();
    return s.handle = e,
    s
}
;
var fi = async (e=[{}]) => {
    Array.isArray(e) || (e = [e]);
    const s = [];
    e.forEach( (t, o) => {
        s[o] = {
            description: t.description || "Files",
            accept: {}
        },
        t.mimeTypes ? t.mimeTypes.map(i => {
            s[o].accept[i] = t.extensions || []
        }
        ) : s[o].accept["*/*"] = t.extensions || []
    }
    );
    const a = await window.showOpenFilePicker({
        id: e[0].id,
        startIn: e[0].startIn,
        types: s,
        multiple: e[0].multiple || !1,
        excludeAcceptAllOption: e[0].excludeAcceptAllOption || !1
    })
      , l = await Promise.all(a.map(vi));
    return e[0].multiple ? l : l[0]
}
  , mi = {
    __proto__: null,
    default: fi
};
function hl(e) {
    function s(a) {
        if (Object(a) !== a)
            return Promise.reject(new TypeError(a + " is not an object."));
        var l = a.done;
        return Promise.resolve(a.value).then(function(t) {
            return {
                value: t,
                done: l
            }
        })
    }
    return hl = function(a) {
        this.s = a,
        this.n = a.next
    }
    ,
    hl.prototype = {
        s: null,
        n: null,
        next: function() {
            return s(this.n.apply(this.s, arguments))
        },
        return: function(a) {
            var l = this.s.return;
            return l === void 0 ? Promise.resolve({
                value: a,
                done: !0
            }) : s(l.apply(this.s, arguments))
        },
        throw: function(a) {
            var l = this.s.return;
            return l === void 0 ? Promise.reject(a) : s(l.apply(this.s, arguments))
        }
    },
    new hl(e)
}
const kn = async (e, s, a=e.name, l) => {
    const t = []
      , o = [];
    var i, r = !1, c = !1;
    try {
        for (var f, g = function(p) {
            var d, b, k, C = 2;
            for (typeof Symbol < "u" && (b = Symbol.asyncIterator,
            k = Symbol.iterator); C--; ) {
                if (b && (d = p[b]) != null)
                    return d.call(p);
                if (k && (d = p[k]) != null)
                    return new hl(d.call(p));
                b = "@@asyncIterator",
                k = "@@iterator"
            }
            throw new TypeError("Object is not async iterable")
        }(e.values()); r = !(f = await g.next()).done; r = !1) {
            const p = f.value
              , d = `${a}/${p.name}`;
            p.kind === "file" ? o.push(p.getFile().then(b => (b.directoryHandle = e,
            b.handle = p,
            Object.defineProperty(b, "webkitRelativePath", {
                configurable: !0,
                enumerable: !0,
                get: () => d
            })))) : p.kind !== "directory" || !s || l && l(p) || t.push(kn(p, s, d, l))
        }
    } catch (p) {
        c = !0,
        i = p
    } finally {
        try {
            r && g.return != null && await g.return()
        } finally {
            if (c)
                throw i
        }
    }
    return [...(await Promise.all(t)).flat(), ...await Promise.all(o)]
}
;
var gi = async (e={}) => {
    e.recursive = e.recursive || !1,
    e.mode = e.mode || "read";
    const s = await window.showDirectoryPicker({
        id: e.id,
        startIn: e.startIn,
        mode: e.mode
    });
    return (await (await s.values()).next()).done ? [s] : kn(s, e.recursive, void 0, e.skipDirectory)
}
  , pi = {
    __proto__: null,
    default: gi
}
  , hi = async (e, s=[{}], a=null, l=!1, t=null) => {
    Array.isArray(s) || (s = [s]),
    s[0].fileName = s[0].fileName || "Untitled";
    const o = [];
    let i = null;
    if (e instanceof Blob && e.type ? i = e.type : e.headers && e.headers.get("content-type") && (i = e.headers.get("content-type")),
    s.forEach( (f, g) => {
        o[g] = {
            description: f.description || "Files",
            accept: {}
        },
        f.mimeTypes ? (g === 0 && i && f.mimeTypes.push(i),
        f.mimeTypes.map(p => {
            o[g].accept[p] = f.extensions || []
        }
        )) : i ? o[g].accept[i] = f.extensions || [] : o[g].accept["*/*"] = f.extensions || []
    }
    ),
    a)
        try {
            await a.getFile()
        } catch (f) {
            if (a = null,
            l)
                throw f
        }
    const r = a || await window.showSaveFilePicker({
        suggestedName: s[0].fileName,
        id: s[0].id,
        startIn: s[0].startIn,
        types: o,
        excludeAcceptAllOption: s[0].excludeAcceptAllOption || !1
    });
    !a && t && t(r);
    const c = await r.createWritable();
    return "stream"in e ? (await e.stream().pipeTo(c),
    r) : "body"in e ? (await e.body.pipeTo(c),
    r) : (await c.write(await e),
    await c.close(),
    r)
}
  , bi = {
    __proto__: null,
    default: hi
}
  , yi = async (e=[{}]) => (Array.isArray(e) || (e = [e]),
new Promise( (s, a) => {
    const l = document.createElement("input");
    l.type = "file";
    const t = [...e.map(c => c.mimeTypes || []), ...e.map(c => c.extensions || [])].join();
    l.multiple = e[0].multiple || !1,
    l.accept = t || "",
    l.style.display = "none",
    document.body.append(l);
    const o = c => {
        typeof i == "function" && i(),
        s(c)
    }
      , i = e[0].legacySetup && e[0].legacySetup(o, () => i(a), l)
      , r = () => {
        window.removeEventListener("focus", r),
        l.remove()
    }
    ;
    l.addEventListener("click", () => {
        window.addEventListener("focus", r)
    }
    ),
    l.addEventListener("change", () => {
        window.removeEventListener("focus", r),
        l.remove(),
        o(l.multiple ? Array.from(l.files) : l.files[0])
    }
    ),
    "showPicker"in HTMLInputElement.prototype ? l.showPicker() : l.click()
}
))
  , _i = {
    __proto__: null,
    default: yi
}
  , wi = async (e=[{}]) => (Array.isArray(e) || (e = [e]),
e[0].recursive = e[0].recursive || !1,
new Promise( (s, a) => {
    const l = document.createElement("input");
    l.type = "file",
    l.webkitdirectory = !0;
    const t = i => {
        typeof o == "function" && o(),
        s(i)
    }
      , o = e[0].legacySetup && e[0].legacySetup(t, () => o(a), l);
    l.addEventListener("change", () => {
        let i = Array.from(l.files);
        e[0].recursive ? e[0].recursive && e[0].skipDirectory && (i = i.filter(r => r.webkitRelativePath.split("/").every(c => !e[0].skipDirectory({
            name: c,
            kind: "directory"
        })))) : i = i.filter(r => r.webkitRelativePath.split("/").length === 2),
        t(i)
    }
    ),
    "showPicker"in HTMLInputElement.prototype ? l.showPicker() : l.click()
}
))
  , Fi = {
    __proto__: null,
    default: wi
}
  , Si = async (e, s={}) => {
    Array.isArray(s) && (s = s[0]);
    const a = document.createElement("a");
    let l = e;
    "body"in e && (l = await async function(i, r) {
        const c = i.getReader()
          , f = new ReadableStream({
            start: d => async function b() {
                return c.read().then( ({done: k, value: C}) => {
                    if (!k)
                        return d.enqueue(C),
                        b();
                    d.close()
                }
                )
            }()
        })
          , g = new Response(f)
          , p = await g.blob();
        return c.releaseLock(),
        new Blob([p],{
            type: r
        })
    }(e.body, e.headers.get("content-type"))),
    a.download = s.fileName || "Untitled",
    a.href = URL.createObjectURL(await l);
    const t = () => {
        typeof o == "function" && o()
    }
      , o = s.legacySetup && s.legacySetup(t, () => o(), a);
    return a.addEventListener("click", () => {
        setTimeout( () => URL.revokeObjectURL(a.href), 3e4),
        t()
    }
    ),
    a.click(),
    null
}
  , Ci = {
    __proto__: null,
    default: Si
};
const at = ut({
    name: "QItemLabel",
    props: {
        overline: Boolean,
        caption: Boolean,
        header: Boolean,
        lines: [Number, String]
    },
    setup(e, {slots: s}) {
        const a = h( () => parseInt(e.lines, 10))
          , l = h( () => "q-item__label" + (e.overline === !0 ? " q-item__label--overline text-overline" : "") + (e.caption === !0 ? " q-item__label--caption text-caption" : "") + (e.header === !0 ? " q-item__label--header" : "") + (a.value === 1 ? " ellipsis" : ""))
          , t = h( () => e.lines !== void 0 && a.value > 1 ? {
            overflow: "hidden",
            display: "-webkit-box",
            "-webkit-box-orient": "vertical",
            "-webkit-line-clamp": a.value
        } : null);
        return () => V("div", {
            style: t.value,
            class: l.value
        }, Tt(s.default))
    }
})
  , ki = ut({
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
        const a = h( () => {
            const l = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter(t => e[t] === !0).map(t => `q-btn-group--${t}`).join(" ");
            return `q-btn-group row no-wrap${l.length !== 0 ? " " + l : ""}` + (e.spread === !0 ? " q-btn-group--spread" : " inline")
        }
        );
        return () => V("div", {
            class: a.value
        }, Tt(s.default))
    }
})
  , xi = Object.keys(Ga);
function Ai(e) {
    return xi.reduce( (s, a) => {
        const l = e[a];
        return l !== void 0 && (s[a] = l),
        s
    }
    , {})
}
const At = ut({
    name: "QBtnDropdown",
    props: {
        ...Ga,
        ...Kn,
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
    setup(e, {slots: s, emit: a}) {
        const {proxy: l} = vt()
          , t = F(e.modelValue)
          , o = F(null)
          , i = Ya()
          , r = h( () => {
            const D = {
                "aria-expanded": t.value === !0 ? "true" : "false",
                "aria-haspopup": "true",
                "aria-controls": i.value,
                "aria-label": e.toggleAriaLabel || l.$q.lang.label[t.value === !0 ? "collapse" : "expand"](e.label)
            };
            return (e.disable === !0 || e.split === !1 && e.disableMainBtn === !0 || e.disableDropdown === !0) && (D["aria-disabled"] = "true"),
            D
        }
        )
          , c = h( () => "q-btn-dropdown__arrow" + (t.value === !0 && e.noIconAnimation === !1 ? " rotate-180" : "") + (e.split === !1 ? " q-btn-dropdown__arrow-container" : ""))
          , f = h( () => Gn(e))
          , g = h( () => Ai(e));
        we( () => e.modelValue, D => {
            o.value?.[D ? "show" : "hide"]()
        }
        ),
        we( () => e.split, x);
        function p(D) {
            t.value = !0,
            a("beforeShow", D)
        }
        function d(D) {
            a("show", D),
            a("update:modelValue", !0)
        }
        function b(D) {
            t.value = !1,
            a("beforeHide", D)
        }
        function k(D) {
            a("hide", D),
            a("update:modelValue", !1)
        }
        function C(D) {
            a("click", D)
        }
        function I(D) {
            it(D),
            x(),
            a("click", D)
        }
        function T(D) {
            o.value?.toggle(D)
        }
        function y(D) {
            o.value?.show(D)
        }
        function x(D) {
            o.value?.hide(D)
        }
        return Object.assign(l, {
            show: y,
            hide: x,
            toggle: T
        }),
        zt( () => {
            e.modelValue === !0 && y()
        }
        ),
        () => {
            const D = [V(Ve, {
                class: c.value,
                name: e.dropdownIcon || l.$q.iconSet.arrow.dropdown
            })];
            return e.disableDropdown !== !0 && D.push(V(Il, {
                ref: o,
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
                onBeforeShow: p,
                onShow: d,
                onBeforeHide: b,
                onHide: k
            }, s.default)),
            e.split === !1 ? V(z, {
                class: "q-btn-dropdown q-btn-dropdown--simple",
                ...g.value,
                ...r.value,
                disable: e.disable === !0 || e.disableMainBtn === !0,
                noWrap: !0,
                round: !1,
                onClick: C
            }, {
                default: () => Tt(s.label, []).concat(D),
                loading: s.loading
            }) : V(ki, {
                class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",
                rounded: e.rounded,
                square: e.square,
                ...f.value,
                glossy: e.glossy,
                stretch: e.stretch
            }, () => [V(z, {
                class: "q-btn-dropdown--current",
                ...g.value,
                disable: e.disable === !0 || e.disableMainBtn === !0,
                noWrap: !0,
                round: !1,
                onClick: I
            }, {
                default: s.label,
                loading: s.loading
            }), V(z, {
                class: "q-btn-dropdown__arrow-container q-anchor--skip",
                ...r.value,
                ...f.value,
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
  , Di = {
    __name: "LanguagePicker",
    emits: ["open-languages"],
    setup(e, {emit: s}) {
        const {locale: a} = Se()
          , l = s
          , t = h( () => Zl().find(o => o.name == a.value)?.humanName);
        return (o, i) => (E(),
        Z(z, {
            stretch: "",
            flat: "",
            "no-caps": "",
            icon: "fas fa-globe",
            label: t.value,
            "aria-label": "Language",
            onClick: i[0] || (i[0] = r => l("open-languages"))
        }, null, 8, ["label"]))
    }
}
  , Ei = {
    style: {
        "font-size": "1em",
        "line-height": "normal",
        margin: "0",
        "font-weight": "400"
    }
}
  , Vi = {
    class: "toolbar"
}
  , Ii = ye({
    __name: "AppToolbar",
    emits: ["reset-wheel", "open-wheel", "save-wheel", "share-wheel", "customize-wheel", "link-sheet", "open-account-dialog", "open-languages", "open-preferences-dialog"],
    setup(e, {emit: s}) {
        const {t: a, locale: l} = Se()
          , t = mt()
          , o = Vl()
          , i = nl()
          , r = Ke()
          , c = s
          // edit
          , f = "wheelofnames.com" // window.location.host
          , g = h( () => "/" + Xa(l.value))
          , p = h( () => t.fullscreen.isActive)
          , d = h( () => r.wheelIsBusy)
          , b = h( () => r.sheetLinked)
          , k = h( () => !p.value && !b.value)
          , C = h( () => !b.value)
          , I = h( () => !p.value)
          , T = h( () => !p.value)
          , y = h( () => !p.value)
          , x = h( () => !p.value)
          , D = h( () => !p.value && b.value)
          , G = h( () => !p.value)
          , R = h( () => !p.value)
          , M = h( () => Yn(navigator.userAgent, o.version));
        function q() {
            t.fullscreen.isActive ? X("Wheel", "ExitFullscreen") : X("Wheel", "EnterFullscreen"),
            t.fullscreen.toggle()
        }
        function B() {
            c("save-wheel")
        }
        function P() {
            c("reset-wheel")
        }
        return (ee, j) => (E(),
        Z(Ro, {
            class: "q-px-none"
        }, {
            default: u( () => [n(z, {
                stretch: "",
                flat: "",
                "no-caps": "",
                to: g.value,
                color: "white"
            }, {
                default: u( () => [n(Ko, {
                    class: "flex no-wrap items-center gap-sm"
                }, {
                    default: u( () => [n(Et, {
                        class: "desktop"
                    }, {
                        default: u( () => j[16] || (j[16] = [m("img", {
                            src: "/images/logo-dark-background-38.png",
                            alt: "logo",
                            width: "38",
                            height: "38",
                            loading: "lazy"
                        }, null, -1)])),
                        _: 1
                    }), m("h1", Ei, A(v(f)), 1)]),
                    _: 1
                })]),
                _: 1
            }, 8, ["to"]), n(pt), m("div", Vi, [ue(n(z, {
                stretch: "",
                flat: "",
                "no-caps": "",
                disable: d.value,
                icon: "fas fa-palette",
                label: v(a)("common.Customize"),
                "aria-label": "Customize",
                onClick: j[0] || (j[0] = K => c("customize-wheel"))
            }, null, 8, ["disable", "label"]), [[We, x.value]]), ue(n(z, {
                stretch: "",
                flat: "",
                "no-caps": "",
                disable: d.value,
                icon: "fas fa-file",
                label: v(a)("toolbar.New"),
                "aria-label": "New",
                onClick: P
            }, null, 8, ["disable", "label"]), [[We, k.value]]), ue(n(z, {
                stretch: "",
                flat: "",
                "no-caps": "",
                disable: d.value,
                icon: "fa fa-folder-open",
                label: p.value ? "" : v(a)("common.Open"),
                "aria-label": "Open",
                onClick: j[1] || (j[1] = K => c("open-wheel", K))
            }, {
                default: u( () => [p.value ? (E(),
                Z(Vt, {
                    key: 0
                }, {
                    default: u( () => [H(A(v(a)("common.Open")), 1)]),
                    _: 1
                })) : _e("", !0)]),
                _: 1
            }, 8, ["disable", "label"]), [[We, C.value]]), ue(n(z, {
                stretch: "",
                flat: "",
                "no-caps": "",
                disable: d.value || v(i).readOnlyMode,
                icon: "fa fa-save",
                label: v(a)("common.Save"),
                "aria-label": "Save",
                onClick: B
            }, null, 8, ["disable", "label"]), [[We, I.value]]), ue(n(z, {
                stretch: "",
                flat: "",
                "no-caps": "",
                disable: d.value || v(i).readOnlyMode,
                icon: "fa fa-share-alt",
                label: v(a)("toolbar.Share"),
                "aria-label": "Share",
                onClick: j[2] || (j[2] = K => c("share-wheel"))
            }, null, 8, ["disable", "label"]), [[We, T.value]]), ue(n(z, {
                stretch: "",
                flat: "",
                "no-caps": "",
                disable: d.value,
                color: "white",
                icon: "fa fa-search",
                label: v(a)("toolbar.Gallery"),
                "aria-label": "Gallery",
                to: "/gallery"
            }, null, 8, ["disable", "label"]), [[We, y.value]]), n(z, {
                stretch: "",
                flat: "",
                "no-caps": "",
                disable: d.value,
                "aria-label": "Fullscreen",
                onClick: q,
                icon: p.value ? "fa fa-compress" : "fa fa-expand"
            }, {
                default: u( () => [p.value ? (E(),
                Z(Vt, {
                    key: 0
                }, {
                    default: u( () => [H(A(v(a)("toolbar.Exit fullscreen")), 1)]),
                    _: 1
                })) : _e("", !0), p.value ? _e("", !0) : (E(),
                Z(Vt, {
                    key: 1
                }, {
                    default: u( () => [H(A(v(a)("toolbar.Fullscreen")), 1)]),
                    _: 1
                }))]),
                _: 1
            }, 8, ["disable", "icon"]), ue(n(z, {
                stretch: "",
                flat: "",
                "no-caps": "",
                disable: d.value,
                icon: "fa fa-unlink",
                label: v(a)("toolbar.Unlink Google Spreadsheet"),
                "aria-label": "Unlink Google Spreadsheet",
                onClick: v(r).unlinkSheet
            }, null, 8, ["disable", "label", "onClick"]), [[We, D.value]]), ue(n(At, {
                stretch: "",
                flat: "",
                "no-caps": "",
                disable: d.value,
                "aria-label": "More",
                label: v(a)("toolbar.More")
            }, {
                default: u( () => [n(Ot, null, {
                    default: u( () => [n(Ce, {
                        href: M.value,
                        style: {
                            color: "unset"
                        }
                    }, {
                        default: u( () => [n(te, {
                            side: ""
                        }, {
                            default: u( () => [n(Ve, {
                                name: "fa fa-comment"
                            })]),
                            _: 1
                        }), n(te, null, {
                            default: u( () => [n(at, null, {
                                default: u( () => [H(A(v(a)("toolbar.Feedback")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["href"]), n(Ce, {
                        to: "/faq",
                        style: {
                            color: "unset"
                        }
                    }, {
                        default: u( () => [n(te, {
                            side: ""
                        }, {
                            default: u( () => [n(Ve, {
                                name: "fa fa-question-circle"
                            })]),
                            _: 1
                        }), n(te, null, {
                            default: u( () => [n(at, null, {
                                default: u( () => [H(A(v(a)("toolbar.FAQ")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    }), n(ul), ue((E(),
                    Z(Ce, {
                        clickable: "",
                        onClick: j[3] || (j[3] = K => c("link-sheet"))
                    }, {
                        default: u( () => [n(te, {
                            side: ""
                        }, {
                            default: u( () => [n(Ve, {
                                name: "fa-solid fa-file-arrow-up"
                            })]),
                            _: 1
                        }), n(te, null, {
                            default: u( () => [n(at, null, {
                                default: u( () => [H(A(v(a)("common.Import Google Spreadsheet")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    })), [[Ze]]), ue((E(),
                    Z(Ce, {
                        clickable: "",
                        onClick: j[4] || (j[4] = K => c("open-account-dialog"))
                    }, {
                        default: u( () => [n(te, {
                            side: ""
                        }, {
                            default: u( () => [n(Ve, {
                                name: "fas fa-user-alt"
                            })]),
                            _: 1
                        }), n(te, null, {
                            default: u( () => [n(at, null, {
                                default: u( () => [H(A(v(a)("common.My account")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    })), [[Ze]]), ue((E(),
                    Z(Ce, {
                        clickable: "",
                        onClick: j[5] || (j[5] = K => c("open-preferences-dialog"))
                    }, {
                        default: u( () => [n(te, {
                            side: ""
                        }, {
                            default: u( () => [n(Ve, {
                                name: "fas fa-cog"
                            })]),
                            _: 1
                        }), n(te, null, {
                            default: u( () => [H(A(v(a)("preferences.Preferences")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })), [[Ze]])]),
                    _: 1
                })]),
                _: 1
            }, 8, ["disable", "label"]), [[We, G.value]]), ue(n(Di, {
                disable: d.value,
                onOpenLanguages: j[6] || (j[6] = K => c("open-languages"))
            }, null, 8, ["disable"]), [[We, R.value]])]), n(z, {
                class: "hamburger",
                round: "",
                unelevated: "",
                color: "primary",
                icon: "fas fa-bars"
            }, {
                default: u( () => [n(Il, null, {
                    default: u( () => [n(Ot, null, {
                        default: u( () => [ue((E(),
                        Z(Ce, {
                            clickable: "",
                            onClick: j[7] || (j[7] = K => c("customize-wheel"))
                        }, {
                            default: u( () => [n(te, {
                                side: ""
                            }, {
                                default: u( () => [n(Ve, {
                                    name: "fas fa-palette"
                                })]),
                                _: 1
                            }), n(te, null, {
                                default: u( () => [H(A(v(a)("common.Customize")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        })), [[Ze]]), ue((E(),
                        Z(Ce, {
                            clickable: "",
                            onClick: j[8] || (j[8] = K => c("reset-wheel"))
                        }, {
                            default: u( () => [n(te, {
                                side: ""
                            }, {
                                default: u( () => [n(Ve, {
                                    name: "fas fa-file"
                                })]),
                                _: 1
                            }), n(te, null, {
                                default: u( () => [H(A(v(a)("toolbar.New")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        })), [[Ze]]), ue((E(),
                        Z(Ce, {
                            clickable: "",
                            onClick: j[9] || (j[9] = K => c("open-wheel", K))
                        }, {
                            default: u( () => [n(te, {
                                side: ""
                            }, {
                                default: u( () => [n(Ve, {
                                    name: "fa fa-folder-open"
                                })]),
                                _: 1
                            }), n(te, null, {
                                default: u( () => [H(A(v(a)("common.Open")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        })), [[Ze]]), ue((E(),
                        Z(Ce, {
                            clickable: "",
                            disable: v(i).readOnlyMode,
                            onClick: j[10] || (j[10] = K => c("save-wheel"))
                        }, {
                            default: u( () => [n(te, {
                                side: ""
                            }, {
                                default: u( () => [n(Ve, {
                                    name: "fa fa-save"
                                })]),
                                _: 1
                            }), n(te, null, {
                                default: u( () => [H(A(v(a)("common.Save")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        }, 8, ["disable"])), [[Ze]]), ue((E(),
                        Z(Ce, {
                            clickable: "",
                            disable: v(i).readOnlyMode,
                            onClick: j[11] || (j[11] = K => c("share-wheel"))
                        }, {
                            default: u( () => [n(te, {
                                side: ""
                            }, {
                                default: u( () => [n(Ve, {
                                    name: "fa fa-share-alt"
                                })]),
                                _: 1
                            }), n(te, null, {
                                default: u( () => [H(A(v(a)("toolbar.Share")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        }, 8, ["disable"])), [[Ze]]), n(Ce, {
                            to: "/gallery",
                            style: {
                                color: "unset"
                            }
                        }, {
                            default: u( () => [n(te, {
                                side: ""
                            }, {
                                default: u( () => [n(Ve, {
                                    name: "fa fa-search"
                                })]),
                                _: 1
                            }), n(te, null, {
                                default: u( () => [H(A(v(a)("toolbar.Gallery")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        }), ue((E(),
                        Z(Ce, {
                            clickable: "",
                            onClick: q
                        }, {
                            default: u( () => [n(te, {
                                side: ""
                            }, {
                                default: u( () => [n(Ve, {
                                    name: p.value ? "fa fa-compress" : "fa fa-expand"
                                }, null, 8, ["name"])]),
                                _: 1
                            }), p.value ? _e("", !0) : (E(),
                            Z(te, {
                                key: 0
                            }, {
                                default: u( () => [H(A(v(a)("toolbar.Fullscreen")), 1)]),
                                _: 1
                            })), p.value ? (E(),
                            Z(te, {
                                key: 1
                            }, {
                                default: u( () => [H(A(v(a)("toolbar.Exit fullscreen")), 1)]),
                                _: 1
                            })) : _e("", !0)]),
                            _: 1
                        })), [[Ze]]), ue((E(),
                        Z(Ce, {
                            clickable: "",
                            onClick: j[12] || (j[12] = K => c("open-preferences-dialog"))
                        }, {
                            default: u( () => [n(te, {
                                side: ""
                            }, {
                                default: u( () => [n(Ve, {
                                    name: "fas fa-cog"
                                })]),
                                _: 1
                            }), n(te, null, {
                                default: u( () => [H(A(v(a)("preferences.Preferences")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        })), [[Ze]]), n(Ce, {
                            clickable: "",
                            onClick: j[13] || (j[13] = K => c("open-languages"))
                        }, {
                            default: u( () => [n(te, {
                                side: ""
                            }, {
                                default: u( () => [n(Ve, {
                                    name: "fas fa-globe"
                                })]),
                                _: 1
                            }), n(te, null, {
                                default: u( () => [H(A(v(a)("toolbar.Language")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        }), n(Ce, {
                            href: M.value,
                            style: {
                                color: "unset"
                            }
                        }, {
                            default: u( () => [n(te, {
                                side: ""
                            }, {
                                default: u( () => [n(Ve, {
                                    name: "fa fa-comment"
                                })]),
                                _: 1
                            }), n(te, null, {
                                default: u( () => [H(A(v(a)("toolbar.Feedback")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        }, 8, ["href"]), n(Ce, {
                            to: "/faq",
                            style: {
                                color: "unset"
                            }
                        }, {
                            default: u( () => [n(te, {
                                side: ""
                            }, {
                                default: u( () => [n(Ve, {
                                    name: "fa fa-question-circle"
                                })]),
                                _: 1
                            }), n(te, null, {
                                default: u( () => [H(A(v(a)("toolbar.FAQ")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        }), ue((E(),
                        Z(Ce, {
                            clickable: "",
                            onClick: j[14] || (j[14] = K => c("link-sheet"))
                        }, {
                            default: u( () => [n(te, {
                                side: ""
                            }, {
                                default: u( () => [n(Ve, {
                                    name: "fa-solid fa-file-arrow-up"
                                })]),
                                _: 1
                            }), n(te, null, {
                                default: u( () => [n(at, null, {
                                    default: u( () => [H(A(v(a)("common.Import Google Spreadsheet")), 1)]),
                                    _: 1
                                })]),
                                _: 1
                            })]),
                            _: 1
                        })), [[Ze]]), ue((E(),
                        Z(Ce, {
                            clickable: "",
                            onClick: j[15] || (j[15] = K => c("open-account-dialog"))
                        }, {
                            default: u( () => [n(te, {
                                side: ""
                            }, {
                                default: u( () => [n(Ve, {
                                    name: "fas fa-user-alt"
                                })]),
                                _: 1
                            }), n(te, null, {
                                default: u( () => [n(at, null, {
                                    default: u( () => [H(A(v(a)("common.My account")), 1)]),
                                    _: 1
                                })]),
                                _: 1
                            })]),
                            _: 1
                        })), [[Ze]])]),
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
  , Ti = ot(Ii, [["__scopeId", "data-v-6b5fd440"]])
  , $i = {
    class: "text-h6"
}
  , Bi = ye({
    __name: "LoginDialog",
    setup(e, {expose: s}) {
        const a = wt()
          , {t: l} = Se()
          , t = F()
          , o = F(!1);
        let i;
        async function r(p) {
            if (!Ja()) {
                t.value = p,
                o.value = !0;
                try {
                    X("Wheel", "LoginAttempt", ""),
                    c()
                } catch (d) {
                    o.value = !1,
                    Ue(l, d),
                    X("Wheel", "LoginFailure", d?.toString()),
                    Me("LoginFailure", d)
                }
                return new Promise(d => i = d)
            }
        }
        async function c() {
            await a.logInWithUi("auth-container"),
            X("Wheel", "LoginSuccess", ""),
            o.value = !1,
            i("login")
        }
        function f() {
            o.value = !1,
            i("cancel")
        }
        function g() {
            o.value = !1,
            i("switch")
        }
        return s({
            askUserToLogIn: r
        }),
        (p, d) => (E(),
        Z(Xe, {
            modelValue: o.value,
            "onUpdate:modelValue": d[0] || (d[0] = b => o.value = b)
        }, {
            default: u( () => [n(Ye, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [n(Fe, {
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", $i, [d[1] || (d[1] = m("i", {
                        class: "fas fa-user"
                    }, null, -1)), H(" " + A(v(l)("common.Log in")), 1)])]),
                    _: 1
                }), n(Fe, null, {
                    default: u( () => [H(A(v(l)("common.Please choose your sign-in method")), 1)]),
                    _: 1
                }), n(Fe, null, {
                    default: u( () => d[2] || (d[2] = [m("div", {
                        id: "auth-container"
                    }, null, -1)])),
                    _: 1
                }), n(ct, {
                    align: t.value ? "between" : "right"
                }, {
                    default: u( () => [t.value === "save" ? (E(),
                    Z(z, {
                        key: 0,
                        "no-caps": "",
                        unelevated: "",
                        label: v(l)("savedialog.Save to a local file instead"),
                        onClick: g
                    }, null, 8, ["label"])) : _e("", !0), t.value === "open" ? (E(),
                    Z(z, {
                        key: 1,
                        "no-caps": "",
                        unelevated: "",
                        label: v(l)("opendialog.Open a local file instead"),
                        onClick: g
                    }, null, 8, ["label"])) : _e("", !0), n(z, {
                        "no-caps": "",
                        unelevated: "",
                        label: v(l)("common.Cancel"),
                        onClick: f
                    }, null, 8, ["label"])]),
                    _: 1
                }, 8, ["align"])]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , Li = ut({
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
let dl = !1;
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
    dl = e.scrollLeft >= 0,
    e.remove()
}
const bt = 1e3
  , qi = ["start", "center", "end", "start-force", "center-force", "end-force"]
  , xn = Array.prototype.filter
  , Pi = window.getComputedStyle(document.body).overflowAnchor === void 0 ? ia : function(e, s) {
    e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame),
    e._qOverflowAnimationFrame = requestAnimationFrame( () => {
        if (e === null)
            return;
        e._qOverflowAnimationFrame = void 0;
        const a = e.children || [];
        xn.call(a, t => t.dataset && t.dataset.qVsAnchor !== void 0).forEach(t => {
            delete t.dataset.qVsAnchor
        }
        );
        const l = a[s];
        l?.dataset && (l.dataset.qVsAnchor = "")
    }
    ))
}
;
function tl(e, s) {
    return e + s
}
function Ol(e, s, a, l, t, o, i, r) {
    const c = e === window ? document.scrollingElement || document.documentElement : e
      , f = t === !0 ? "offsetWidth" : "offsetHeight"
      , g = {
        scrollStart: 0,
        scrollViewSize: -i - r,
        scrollMaxSize: 0,
        offsetStart: -i,
        offsetEnd: -r
    };
    if (t === !0 ? (e === window ? (g.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0,
    g.scrollViewSize += document.documentElement.clientWidth) : (g.scrollStart = c.scrollLeft,
    g.scrollViewSize += c.clientWidth),
    g.scrollMaxSize = c.scrollWidth,
    o === !0 && (g.scrollStart = (dl === !0 ? g.scrollMaxSize - g.scrollViewSize : 0) - g.scrollStart)) : (e === window ? (g.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0,
    g.scrollViewSize += document.documentElement.clientHeight) : (g.scrollStart = c.scrollTop,
    g.scrollViewSize += c.clientHeight),
    g.scrollMaxSize = c.scrollHeight),
    a !== null)
        for (let p = a.previousElementSibling; p !== null; p = p.previousElementSibling)
            p.classList.contains("q-virtual-scroll--skip") === !1 && (g.offsetStart += p[f]);
    if (l !== null)
        for (let p = l.nextElementSibling; p !== null; p = p.nextElementSibling)
            p.classList.contains("q-virtual-scroll--skip") === !1 && (g.offsetEnd += p[f]);
    if (s !== e) {
        const p = c.getBoundingClientRect()
          , d = s.getBoundingClientRect();
        t === !0 ? (g.offsetStart += d.left - p.left,
        g.offsetEnd -= d.width) : (g.offsetStart += d.top - p.top,
        g.offsetEnd -= d.height),
        e !== window && (g.offsetStart += g.scrollStart),
        g.offsetEnd += g.scrollMaxSize - g.offsetStart
    }
    return g
}
function $a(e, s, a, l) {
    s === "end" && (s = (e === window ? document.body : e)[a === !0 ? "scrollWidth" : "scrollHeight"]),
    e === window ? a === !0 ? (l === !0 && (s = (dl === !0 ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - s),
    window.scrollTo(s, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, s) : a === !0 ? (l === !0 && (s = (dl === !0 ? e.scrollWidth - e.offsetWidth : 0) - s),
    e.scrollLeft = s) : e.scrollTop = s
}
function sl(e, s, a, l) {
    if (a >= l)
        return 0;
    const t = s.length
      , o = Math.floor(a / bt)
      , i = Math.floor((l - 1) / bt) + 1;
    let r = e.slice(o, i).reduce(tl, 0);
    return a % bt !== 0 && (r -= s.slice(o * bt, a).reduce(tl, 0)),
    l % bt !== 0 && l !== t && (r -= s.slice(l, i * bt).reduce(tl, 0)),
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
  , Ba = {
    virtualScrollHorizontal: Boolean,
    onVirtualScroll: Function,
    ...Wi
};
function Oi({virtualScrollLength: e, getVirtualScrollTarget: s, getVirtualScrollEl: a, virtualScrollItemSizeComputed: l}) {
    const t = vt()
      , {props: o, emit: i, proxy: r} = t
      , {$q: c} = r;
    let f, g, p, d = [], b;
    const k = F(0)
      , C = F(0)
      , I = F({})
      , T = F(null)
      , y = F(null)
      , x = F(null)
      , D = F({
        from: 0,
        to: 0
    })
      , G = h( () => o.tableColspan !== void 0 ? o.tableColspan : 100);
    l === void 0 && (l = h( () => o.virtualScrollItemSize));
    const R = h( () => l.value + ";" + o.virtualScrollHorizontal)
      , M = h( () => R.value + ";" + o.virtualScrollSliceRatioBefore + ";" + o.virtualScrollSliceRatioAfter);
    we(M, () => {
        W()
    }
    ),
    we(R, q);
    function q() {
        S(g, !0)
    }
    function B($) {
        S($ === void 0 ? g : $)
    }
    function P($, Y) {
        const ce = s();
        if (ce == null || ce.nodeType === 8)
            return;
        const Ee = Ol(ce, a(), T.value, y.value, o.virtualScrollHorizontal, c.lang.rtl, o.virtualScrollStickySizeStart, o.virtualScrollStickySizeEnd);
        p !== Ee.scrollViewSize && W(Ee.scrollViewSize),
        j(ce, Ee, Math.min(e.value - 1, Math.max(0, parseInt($, 10) || 0)), 0, qi.indexOf(Y) !== -1 ? Y : g !== -1 && $ > g ? "end" : "start")
    }
    function ee() {
        const $ = s();
        if ($ == null || $.nodeType === 8)
            return;
        const Y = Ol($, a(), T.value, y.value, o.virtualScrollHorizontal, c.lang.rtl, o.virtualScrollStickySizeStart, o.virtualScrollStickySizeEnd)
          , ce = e.value - 1
          , Ee = Y.scrollMaxSize - Y.offsetStart - Y.offsetEnd - C.value;
        if (f === Y.scrollStart)
            return;
        if (Y.scrollMaxSize <= 0) {
            j($, Y, 0, 0);
            return
        }
        p !== Y.scrollViewSize && W(Y.scrollViewSize),
        K(D.value.from);
        const Ie = Math.floor(Y.scrollMaxSize - Math.max(Y.scrollViewSize, Y.offsetEnd) - Math.min(b[ce], Y.scrollViewSize / 2));
        if (Ie > 0 && Math.ceil(Y.scrollStart) >= Ie) {
            j($, Y, ce, Y.scrollMaxSize - Y.offsetEnd - d.reduce(tl, 0));
            return
        }
        let de = 0
          , be = Y.scrollStart - Y.offsetStart
          , Le = be;
        if (be <= Ee && be + Y.scrollViewSize >= k.value)
            be -= k.value,
            de = D.value.from,
            Le = be;
        else
            for (let ve = 0; be >= d[ve] && de < ce; ve++)
                be -= d[ve],
                de += bt;
        for (; be > 0 && de < ce; )
            be -= b[de],
            be > -Y.scrollViewSize ? (de++,
            Le = be) : Le = b[de] + be;
        j($, Y, de, Le)
    }
    function j($, Y, ce, Ee, Ie) {
        const de = typeof Ie == "string" && Ie.indexOf("-force") !== -1
          , be = de === !0 ? Ie.replace("-force", "") : Ie
          , Le = be !== void 0 ? be : "start";
        let ve = Math.max(0, ce - I.value[Le])
          , He = ve + I.value.total;
        He > e.value && (He = e.value,
        ve = Math.max(0, He - I.value.total)),
        f = Y.scrollStart;
        const et = ve !== D.value.from || He !== D.value.to;
        if (et === !1 && be === void 0) {
            re(ce);
            return
        }
        const {activeElement: L} = document
          , se = x.value;
        et === !0 && se !== null && se !== L && se.contains(L) === !0 && (se.addEventListener("focusout", _),
        setTimeout( () => {
            se?.removeEventListener("focusout", _)
        }
        )),
        Pi(se, ce - ve);
        const me = be !== void 0 ? b.slice(ve, ce).reduce(tl, 0) : 0;
        if (et === !0) {
            const ge = He >= D.value.from && ve <= D.value.to ? D.value.to : He;
            D.value = {
                from: ve,
                to: ge
            },
            k.value = sl(d, b, 0, ve),
            C.value = sl(d, b, He, e.value),
            requestAnimationFrame( () => {
                D.value.to !== He && f === Y.scrollStart && (D.value = {
                    from: D.value.from,
                    to: He
                },
                C.value = sl(d, b, He, e.value))
            }
            )
        }
        requestAnimationFrame( () => {
            if (f !== Y.scrollStart)
                return;
            et === !0 && K(ve);
            const ge = b.slice(ve, ce).reduce(tl, 0)
              , Te = ge + Y.offsetStart + k.value
              , pe = Te + b[ce];
            let je = Te + Ee;
            if (be !== void 0) {
                const qe = ge - me
                  , tt = Y.scrollStart + qe;
                je = de !== !0 && tt < Te && pe < tt + Y.scrollViewSize ? tt : be === "end" ? pe - Y.scrollViewSize : Te - (be === "start" ? 0 : Math.round((Y.scrollViewSize - b[ce]) / 2))
            }
            f = je,
            $a($, je, o.virtualScrollHorizontal, c.lang.rtl),
            re(ce)
        }
        )
    }
    function K($) {
        const Y = x.value;
        if (Y) {
            const ce = xn.call(Y.children, ve => ve.classList && ve.classList.contains("q-virtual-scroll--skip") === !1)
              , Ee = ce.length
              , Ie = o.virtualScrollHorizontal === !0 ? ve => ve.getBoundingClientRect().width : ve => ve.offsetHeight;
            let de = $, be, Le;
            for (let ve = 0; ve < Ee; ) {
                for (be = Ie(ce[ve]),
                ve++; ve < Ee && ce[ve].classList.contains("q-virtual-scroll--with-prev") === !0; )
                    be += Ie(ce[ve]),
                    ve++;
                Le = be - b[de],
                Le !== 0 && (b[de] += Le,
                d[Math.floor(de / bt)] += Le),
                de++
            }
        }
    }
    function _() {
        x.value?.focus()
    }
    function S($, Y) {
        const ce = 1 * l.value;
        (Y === !0 || Array.isArray(b) === !1) && (b = []);
        const Ee = b.length;
        b.length = e.value;
        for (let de = e.value - 1; de >= Ee; de--)
            b[de] = ce;
        const Ie = Math.floor((e.value - 1) / bt);
        d = [];
        for (let de = 0; de <= Ie; de++) {
            let be = 0;
            const Le = Math.min((de + 1) * bt, e.value);
            for (let ve = de * bt; ve < Le; ve++)
                be += b[ve];
            d.push(be)
        }
        g = -1,
        f = void 0,
        k.value = sl(d, b, 0, D.value.from),
        C.value = sl(d, b, D.value.to, e.value),
        $ >= 0 ? (K(D.value.from),
        St( () => {
            P($)
        }
        )) : ke()
    }
    function W($) {
        if ($ === void 0 && typeof window < "u") {
            const be = s();
            be != null && be.nodeType !== 8 && ($ = Ol(be, a(), T.value, y.value, o.virtualScrollHorizontal, c.lang.rtl, o.virtualScrollStickySizeStart, o.virtualScrollStickySizeEnd).scrollViewSize)
        }
        p = $;
        const Y = parseFloat(o.virtualScrollSliceRatioBefore) || 0
          , ce = parseFloat(o.virtualScrollSliceRatioAfter) || 0
          , Ee = 1 + Y + ce
          , Ie = $ === void 0 || $ <= 0 ? 1 : Math.ceil($ / l.value)
          , de = Math.max(1, Ie, Math.ceil((o.virtualScrollSliceSize > 0 ? o.virtualScrollSliceSize : 10) / Ee));
        I.value = {
            total: Math.ceil(de * Ee),
            start: Math.ceil(de * Y),
            center: Math.ceil(de * (.5 + Y)),
            end: Math.ceil(de * (1 + Y)),
            view: Ie
        }
    }
    function O($, Y) {
        const ce = o.virtualScrollHorizontal === !0 ? "width" : "height"
          , Ee = {
            ["--q-virtual-scroll-item-" + ce]: l.value + "px"
        };
        return [$ === "tbody" ? V($, {
            class: "q-virtual-scroll__padding",
            key: "before",
            ref: T
        }, [V("tr", [V("td", {
            style: {
                [ce]: `${k.value}px`,
                ...Ee
            },
            colspan: G.value
        })])]) : V($, {
            class: "q-virtual-scroll__padding",
            key: "before",
            ref: T,
            style: {
                [ce]: `${k.value}px`,
                ...Ee
            }
        }), V($, {
            class: "q-virtual-scroll__content",
            key: "content",
            ref: x,
            tabindex: -1
        }, Y.flat()), $ === "tbody" ? V($, {
            class: "q-virtual-scroll__padding",
            key: "after",
            ref: y
        }, [V("tr", [V("td", {
            style: {
                [ce]: `${C.value}px`,
                ...Ee
            },
            colspan: G.value
        })])]) : V($, {
            class: "q-virtual-scroll__padding",
            key: "after",
            ref: y,
            style: {
                [ce]: `${C.value}px`,
                ...Ee
            }
        })]
    }
    function re($) {
        g !== $ && (o.onVirtualScroll !== void 0 && i("virtualScroll", {
            index: $,
            from: D.value.from,
            to: D.value.to - 1,
            direction: $ < g ? "decrease" : "increase",
            ref: r
        }),
        g = $)
    }
    W();
    const ke = Za(ee, c.platform.is.ios === !0 ? 120 : 35);
    Xn( () => {
        W()
    }
    );
    let Re = !1;
    return na( () => {
        Re = !0
    }
    ),
    oa( () => {
        if (Re !== !0)
            return;
        const $ = s();
        f !== void 0 && $ !== void 0 && $ !== null && $.nodeType !== 8 ? $a($, f, o.virtualScrollHorizontal, c.lang.rtl) : P(g)
    }
    ),
    $t( () => {
        ke.cancel()
    }
    ),
    Object.assign(r, {
        scrollTo: P,
        reset: q,
        refresh: B
    }),
    {
        virtualScrollSliceRange: D,
        virtualScrollSliceSizeComputed: I,
        setVirtualScrollSize: W,
        onVirtualScrollEvt: ke,
        localResetVirtualScroll: S,
        padVirtualScroll: O,
        scrollTo: P,
        reset: q,
        refresh: B
    }
}
const La = ["B", "KB", "MB", "GB", "TB", "PB"];
function zi(e, s=1) {
    let a = 0;
    for (; parseInt(e, 10) >= 1024 && a < La.length - 1; )
        e /= 1024,
        ++a;
    return `${e.toFixed(s)}${La[a]}`
}
function _t(e, s, a) {
    return a <= s ? s : Math.min(a, Math.max(s, e))
}
function qa(e, s, a) {
    if (a <= s)
        return s;
    const l = a - s + 1;
    let t = s + (e - s) % l;
    return t < s && (t = l + t),
    t === 0 ? 0 : t
}
const Pa = e => ["add", "add-unique", "toggle"].includes(e)
  , Mi = ".*+?^${}()|[]\\"
  , Ri = Object.keys(ta);
function zl(e, s) {
    if (typeof e == "function")
        return e;
    const a = e !== void 0 ? e : s;
    return l => l !== null && typeof l == "object" && a in l ? l[a] : l
}
const xt = ut({
    name: "QSelect",
    inheritAttrs: !1,
    props: {
        ...Ba,
        ...Dl,
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
            validator: Pa
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
        virtualScrollItemSize: Ba.virtualScrollItemSize.type,
        onNewValue: Function,
        onFilter: Function
    },
    emits: [...ea, "add", "remove", "inputValue", "keyup", "keypress", "keydown", "popupShow", "popupHide", "filterAbort"],
    setup(e, {slots: s, emit: a}) {
        const {proxy: l} = vt()
          , {$q: t} = l
          , o = F(!1)
          , i = F(!1)
          , r = F(-1)
          , c = F("")
          , f = F(!1)
          , g = F(!1);
        let p = null, d = null, b, k, C, I = null, T, y, x, D;
        const G = F(null)
          , R = F(null)
          , M = F(null)
          , q = F(null)
          , B = F(null)
          , P = en(e)
          , ee = Jn(_a)
          , j = h( () => Array.isArray(e.options) ? e.options.length : 0)
          , K = h( () => e.virtualScrollItemSize === void 0 ? e.optionsDense === !0 ? 24 : 48 : e.virtualScrollItemSize)
          , {virtualScrollSliceRange: _, virtualScrollSliceSizeComputed: S, localResetVirtualScroll: W, padVirtualScroll: O, onVirtualScrollEvt: re, scrollTo: ke, setVirtualScrollSize: Re} = Oi({
            virtualScrollLength: j,
            getVirtualScrollTarget: Ln,
            getVirtualScrollEl: jt,
            virtualScrollItemSizeComputed: K
        })
          , $ = aa()
          , Y = h( () => {
            const w = e.mapOptions === !0 && e.multiple !== !0
              , ae = e.modelValue !== void 0 && (e.modelValue !== null || w === !0) ? e.multiple === !0 && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
            if (e.mapOptions === !0 && Array.isArray(e.options) === !0) {
                const ne = e.mapOptions === !0 && b !== void 0 ? b : []
                  , Ae = ae.map(ze => U(ze, ne));
                return e.modelValue === null && w === !0 ? Ae.filter(ze => ze !== null) : Ae
            }
            return ae
        }
        )
          , ce = h( () => {
            const w = {};
            return Ri.forEach(ae => {
                const ne = e[ae];
                ne !== void 0 && (w[ae] = ne)
            }
            ),
            w
        }
        )
          , Ee = h( () => e.optionsDark === null ? $.isDark.value : e.optionsDark)
          , Ie = h( () => bl(Y.value))
          , de = h( () => {
            let w = "q-field__input q-placeholder col";
            return e.hideSelected === !0 || Y.value.length === 0 ? [w, e.inputClass] : (w += " q-field__input--padding",
            e.inputClass === void 0 ? w : [w, e.inputClass])
        }
        )
          , be = h( () => (e.virtualScrollHorizontal === !0 ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : ""))
          , Le = h( () => j.value === 0)
          , ve = h( () => Y.value.map(w => N.value(w)).join(", "))
          , He = h( () => e.displayValue !== void 0 ? e.displayValue : ve.value)
          , et = h( () => e.optionsHtml === !0 ? () => !0 : w => w?.html === !0)
          , L = h( () => e.displayValueHtml === !0 || e.displayValue === void 0 && (e.optionsHtml === !0 || Y.value.some(et.value)))
          , se = h( () => $.focused.value === !0 ? e.tabindex : -1)
          , me = h( () => {
            const w = {
                tabindex: e.tabindex,
                role: "combobox",
                "aria-label": e.label,
                "aria-readonly": e.readonly === !0 ? "true" : "false",
                "aria-autocomplete": e.useInput === !0 ? "list" : "none",
                "aria-expanded": o.value === !0 ? "true" : "false",
                "aria-controls": `${$.targetUid.value}_lb`
            };
            return r.value >= 0 && (w["aria-activedescendant"] = `${$.targetUid.value}_${r.value}`),
            w
        }
        )
          , ge = h( () => ({
            id: `${$.targetUid.value}_lb`,
            role: "listbox",
            "aria-multiselectable": e.multiple === !0 ? "true" : "false"
        }))
          , Te = h( () => Y.value.map( (w, ae) => ({
            index: ae,
            opt: w,
            html: et.value(w),
            selected: !0,
            removeAtIndex: le,
            toggleOption: Qe,
            tabindex: se.value
        })))
          , pe = h( () => {
            if (j.value === 0)
                return [];
            const {from: w, to: ae} = _.value;
            return e.options.slice(w, ae).map( (ne, Ae) => {
                const ze = oe.value(ne) === !0
                  , Pe = fe(ne) === !0
                  , st = w + Ae
                  , Ge = {
                    clickable: !0,
                    active: Pe,
                    activeClass: tt.value,
                    manualFocus: !0,
                    focused: !1,
                    disable: ze,
                    tabindex: -1,
                    dense: e.optionsDense,
                    dark: Ee.value,
                    role: "option",
                    "aria-selected": Pe === !0 ? "true" : "false",
                    id: `${$.targetUid.value}_${st}`,
                    onClick: () => {
                        Qe(ne)
                    }
                };
                return ze !== !0 && (r.value === st && (Ge.focused = !0),
                t.platform.is.desktop === !0 && (Ge.onMousemove = () => {
                    o.value === !0 && ft(st)
                }
                )),
                {
                    index: st,
                    opt: ne,
                    html: et.value(ne),
                    label: N.value(ne),
                    selected: Ge.active,
                    focused: Ge.focused,
                    toggleOption: Qe,
                    setOptionIndex: ft,
                    itemProps: Ge
                }
            }
            )
        }
        )
          , je = h( () => e.dropdownIcon !== void 0 ? e.dropdownIcon : t.iconSet.arrow.dropdown)
          , qe = h( () => e.optionsCover === !1 && e.outlined !== !0 && e.standout !== !0 && e.borderless !== !0 && e.rounded !== !0)
          , tt = h( () => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : "")
          , Ne = h( () => zl(e.optionValue, "value"))
          , N = h( () => zl(e.optionLabel, "label"))
          , oe = h( () => zl(e.optionDisable, "disable"))
          , he = h( () => Y.value.map(Ne.value))
          , $e = h( () => {
            const w = {
                onInput: _a,
                onChange: ee,
                onKeydown: Ut,
                onKeyup: lt,
                onKeypress: ht,
                onFocus: xe,
                onClick(ae) {
                    k === !0 && it(ae)
                }
            };
            return w.onCompositionstart = w.onCompositionupdate = w.onCompositionend = ee,
            w
        }
        );
        we(Y, w => {
            b = w,
            e.useInput === !0 && e.fillInput === !0 && e.multiple !== !0 && $.innerLoading.value !== !0 && (i.value !== !0 && o.value !== !0 || Ie.value !== !0) && (C !== !0 && Kt(),
            (i.value === !0 || o.value === !0) && Nt(""))
        }
        , {
            immediate: !0
        }),
        we( () => e.fillInput, Kt),
        we(o, Tl),
        we(j, Qn);
        function Be(w) {
            return e.emitValue === !0 ? Ne.value(w) : w
        }
        function Q(w) {
            if (w !== -1 && w < Y.value.length)
                if (e.multiple === !0) {
                    const ae = e.modelValue.slice();
                    a("remove", {
                        index: w,
                        value: ae.splice(w, 1)[0]
                    }),
                    a("update:modelValue", ae)
                } else
                    a("update:modelValue", null)
        }
        function le(w) {
            Q(w),
            $.focus()
        }
        function De(w, ae) {
            const ne = Be(w);
            if (e.multiple !== !0) {
                e.fillInput === !0 && ol(N.value(w), !0, !0),
                a("update:modelValue", ne);
                return
            }
            if (Y.value.length === 0) {
                a("add", {
                    index: 0,
                    value: ne
                }),
                a("update:modelValue", e.multiple === !0 ? [ne] : ne);
                return
            }
            if (ae === !0 && fe(w) === !0 || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues)
                return;
            const Ae = e.modelValue.slice();
            a("add", {
                index: Ae.length,
                value: ne
            }),
            Ae.push(ne),
            a("update:modelValue", Ae)
        }
        function Qe(w, ae) {
            if ($.editable.value !== !0 || w === void 0 || oe.value(w) === !0)
                return;
            const ne = Ne.value(w);
            if (e.multiple !== !0) {
                ae !== !0 && (ol(e.fillInput === !0 ? N.value(w) : "", !0, !0),
                Lt()),
                R.value?.focus(),
                (Y.value.length === 0 || il(Ne.value(Y.value[0]), ne) !== !0) && a("update:modelValue", e.emitValue === !0 ? ne : w);
                return
            }
            if ((k !== !0 || f.value === !0) && $.focus(),
            xe(),
            Y.value.length === 0) {
                const Pe = e.emitValue === !0 ? ne : w;
                a("add", {
                    index: 0,
                    value: Pe
                }),
                a("update:modelValue", e.multiple === !0 ? [Pe] : Pe);
                return
            }
            const Ae = e.modelValue.slice()
              , ze = he.value.findIndex(Pe => il(Pe, ne));
            if (ze !== -1)
                a("remove", {
                    index: ze,
                    value: Ae.splice(ze, 1)[0]
                });
            else {
                if (e.maxValues !== void 0 && Ae.length >= e.maxValues)
                    return;
                const Pe = e.emitValue === !0 ? ne : w;
                a("add", {
                    index: Ae.length,
                    value: Pe
                }),
                Ae.push(Pe)
            }
            a("update:modelValue", Ae)
        }
        function ft(w) {
            if (t.platform.is.desktop !== !0)
                return;
            const ae = w !== -1 && w < j.value ? w : -1;
            r.value !== ae && (r.value = ae)
        }
        function Ft(w=1, ae) {
            if (o.value === !0) {
                let ne = r.value;
                do
                    ne = qa(ne + w, -1, j.value - 1);
                while (ne !== -1 && ne !== r.value && oe.value(e.options[ne]) === !0);
                r.value !== ne && (ft(ne),
                ke(ne),
                ae !== !0 && e.useInput === !0 && e.fillInput === !0 && gl(ne >= 0 ? N.value(e.options[ne]) : T, !0))
            }
        }
        function U(w, ae) {
            const ne = Ae => il(Ne.value(Ae), w);
            return e.options.find(ne) || ae.find(ne) || w
        }
        function fe(w) {
            const ae = Ne.value(w);
            return he.value.find(ne => il(ne, ae)) !== void 0
        }
        function xe(w) {
            e.useInput === !0 && R.value !== null && (w === void 0 || R.value === w.target && w.target.value === ve.value) && R.value.select()
        }
        function Oe(w) {
            ln(w, 27) === !0 && o.value === !0 && (it(w),
            Lt(),
            Kt()),
            a("keyup", w)
        }
        function lt(w) {
            const {value: ae} = w.target;
            if (w.keyCode !== void 0) {
                Oe(w);
                return
            }
            if (w.target.value = "",
            p !== null && (clearTimeout(p),
            p = null),
            d !== null && (clearTimeout(d),
            d = null),
            Kt(),
            typeof ae == "string" && ae.length !== 0) {
                const ne = ae.toLocaleLowerCase()
                  , Ae = Pe => {
                    const st = e.options.find(Ge => String(Pe.value(Ge)).toLocaleLowerCase() === ne);
                    return st === void 0 ? !1 : (Y.value.indexOf(st) === -1 ? Qe(st) : Lt(),
                    !0)
                }
                  , ze = Pe => {
                    Ae(Ne) !== !0 && Pe !== !0 && Ae(N) !== !0 && Nt(ae, !0, () => ze(!0))
                }
                ;
                ze()
            } else
                $.clearValue(w)
        }
        function ht(w) {
            a("keypress", w)
        }
        function Ut(w) {
            if (a("keydown", w),
            tn(w) === !0)
                return;
            const ae = c.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0)
              , ne = w.shiftKey !== !0 && e.disableTabSelection !== !0 && e.multiple !== !0 && (r.value !== -1 || ae === !0);
            if (w.keyCode === 27) {
                Yt(w);
                return
            }
            if (w.keyCode === 9 && ne === !1) {
                Ht();
                return
            }
            if (w.target === void 0 || w.target.id !== $.targetUid.value || $.editable.value !== !0)
                return;
            if (w.keyCode === 40 && $.innerLoading.value !== !0 && o.value === !1) {
                dt(w),
                Qt();
                return
            }
            if (w.keyCode === 8 && (e.useChips === !0 || e.clearable === !0) && e.hideSelected !== !0 && c.value.length === 0) {
                e.multiple === !0 && Array.isArray(e.modelValue) === !0 ? Q(e.modelValue.length - 1) : e.multiple !== !0 && e.modelValue !== null && a("update:modelValue", null);
                return
            }
            (w.keyCode === 35 || w.keyCode === 36) && (typeof c.value != "string" || c.value.length === 0) && (dt(w),
            r.value = -1,
            Ft(w.keyCode === 36 ? 1 : -1, e.multiple)),
            (w.keyCode === 33 || w.keyCode === 34) && S.value !== void 0 && (dt(w),
            r.value = Math.max(-1, Math.min(j.value, r.value + (w.keyCode === 33 ? -1 : 1) * S.value.view)),
            Ft(w.keyCode === 33 ? 1 : -1, e.multiple)),
            (w.keyCode === 38 || w.keyCode === 40) && (dt(w),
            Ft(w.keyCode === 38 ? -1 : 1, e.multiple));
            const Ae = j.value;
            if ((x === void 0 || D < Date.now()) && (x = ""),
            Ae > 0 && e.useInput !== !0 && w.key !== void 0 && w.key.length === 1 && w.altKey === !1 && w.ctrlKey === !1 && w.metaKey === !1 && (w.keyCode !== 32 || x.length !== 0)) {
                o.value !== !0 && Qt(w);
                const ze = w.key.toLocaleLowerCase()
                  , Pe = x.length === 1 && x[0] === ze;
                D = Date.now() + 1500,
                Pe === !1 && (dt(w),
                x += ze);
                const st = new RegExp("^" + x.split("").map($l => Mi.indexOf($l) !== -1 ? "\\" + $l : $l).join(".*"),"i");
                let Ge = r.value;
                if (Pe === !0 || Ge < 0 || st.test(N.value(e.options[Ge])) !== !0)
                    do
                        Ge = qa(Ge + 1, -1, Ae - 1);
                    while (Ge !== r.value && (oe.value(e.options[Ge]) === !0 || st.test(N.value(e.options[Ge])) !== !0));
                r.value !== Ge && St( () => {
                    ft(Ge),
                    ke(Ge),
                    Ge >= 0 && e.useInput === !0 && e.fillInput === !0 && gl(N.value(e.options[Ge]), !0)
                }
                );
                return
            }
            if (!(w.keyCode !== 13 && (w.keyCode !== 32 || e.useInput === !0 || x !== "") && (w.keyCode !== 9 || ne === !1))) {
                if (w.keyCode !== 9 && dt(w),
                r.value !== -1 && r.value < Ae) {
                    Qe(e.options[r.value]);
                    return
                }
                if (ae === !0) {
                    const ze = (Pe, st) => {
                        if (st) {
                            if (Pa(st) !== !0)
                                return
                        } else
                            st = e.newValueMode;
                        if (ol("", e.multiple !== !0, !0),
                        Pe == null)
                            return;
                        (st === "toggle" ? Qe : De)(Pe, st === "add-unique"),
                        e.multiple !== !0 && (R.value?.focus(),
                        Lt())
                    }
                    ;
                    if (e.onNewValue !== void 0 ? a("newValue", c.value, ze) : ze(c.value),
                    e.multiple !== !0)
                        return
                }
                o.value === !0 ? Ht() : $.innerLoading.value !== !0 && Qt()
            }
        }
        function jt() {
            return k === !0 ? B.value : M.value !== null && M.value.contentEl !== null ? M.value.contentEl : void 0
        }
        function Ln() {
            return jt()
        }
        function qn() {
            return e.hideSelected === !0 ? [] : s["selected-item"] !== void 0 ? Te.value.map(w => s["selected-item"](w)).slice() : s.selected !== void 0 ? [].concat(s.selected()) : e.useChips === !0 ? Te.value.map( (w, ae) => V(wn, {
                key: "option-" + ae,
                removable: $.editable.value === !0 && oe.value(w.opt) !== !0,
                dense: !0,
                textColor: e.color,
                tabindex: se.value,
                onRemove() {
                    w.removeAtIndex(ae)
                }
            }, () => V("span", {
                class: "ellipsis",
                [w.html === !0 ? "innerHTML" : "textContent"]: N.value(w.opt)
            }))) : [V("span", {
                class: "ellipsis",
                [L.value === !0 ? "innerHTML" : "textContent"]: He.value
            })]
        }
        function ya() {
            if (Le.value === !0)
                return s["no-option"] !== void 0 ? s["no-option"]({
                    inputValue: c.value
                }) : void 0;
            const w = s.option !== void 0 ? s.option : ne => V(Ce, {
                key: ne.index,
                ...ne.itemProps
            }, () => V(te, () => V(at, () => V("span", {
                [ne.html === !0 ? "innerHTML" : "textContent"]: ne.label
            }))));
            let ae = O("div", pe.value.map(w));
            return s["before-options"] !== void 0 && (ae = s["before-options"]().concat(ae)),
            sa(s["after-options"], ae)
        }
        function Pn(w, ae) {
            const ne = ae === !0 ? {
                ...me.value,
                ...$.splitAttrs.attributes.value
            } : void 0
              , Ae = {
                ref: ae === !0 ? R : void 0,
                key: "i_t",
                class: de.value,
                style: e.inputStyle,
                value: c.value !== void 0 ? c.value : "",
                type: "search",
                ...ne,
                id: ae === !0 ? $.targetUid.value : void 0,
                maxlength: e.maxlength,
                autocomplete: e.autocomplete,
                "data-autofocus": w === !0 || e.autofocus === !0 || void 0,
                disabled: e.disable === !0,
                readonly: e.readonly === !0,
                ...$e.value
            };
            return w !== !0 && k === !0 && (Array.isArray(Ae.class) === !0 ? Ae.class = [...Ae.class, "no-pointer-events"] : Ae.class += " no-pointer-events"),
            V("input", Ae)
        }
        function _a(w) {
            p !== null && (clearTimeout(p),
            p = null),
            d !== null && (clearTimeout(d),
            d = null),
            !(w && w.target && w.target.qComposing === !0) && (gl(w.target.value || ""),
            C = !0,
            T = c.value,
            $.focused.value !== !0 && (k !== !0 || f.value === !0) && $.focus(),
            e.onFilter !== void 0 && (p = setTimeout( () => {
                p = null,
                Nt(c.value)
            }
            , e.inputDebounce)))
        }
        function gl(w, ae) {
            c.value !== w && (c.value = w,
            ae === !0 || e.inputDebounce === 0 || e.inputDebounce === "0" ? a("inputValue", w) : d = setTimeout( () => {
                d = null,
                a("inputValue", w)
            }
            , e.inputDebounce))
        }
        function ol(w, ae, ne) {
            C = ne !== !0,
            e.useInput === !0 && (gl(w, !0),
            (ae === !0 || ne !== !0) && (T = w),
            ae !== !0 && Nt(w))
        }
        function Nt(w, ae, ne) {
            if (e.onFilter === void 0 || ae !== !0 && $.focused.value !== !0)
                return;
            $.innerLoading.value === !0 ? a("filterAbort") : ($.innerLoading.value = !0,
            g.value = !0),
            w !== "" && e.multiple !== !0 && Y.value.length !== 0 && C !== !0 && w === N.value(Y.value[0]) && (w = "");
            const Ae = setTimeout( () => {
                o.value === !0 && (o.value = !1)
            }
            , 10);
            I !== null && clearTimeout(I),
            I = Ae,
            a("filter", w, (ze, Pe) => {
                (ae === !0 || $.focused.value === !0) && I === Ae && (clearTimeout(I),
                typeof ze == "function" && ze(),
                g.value = !1,
                St( () => {
                    $.innerLoading.value = !1,
                    $.editable.value === !0 && (ae === !0 ? o.value === !0 && Lt() : o.value === !0 ? Tl(!0) : o.value = !0),
                    typeof Pe == "function" && St( () => {
                        Pe(l)
                    }
                    ),
                    typeof ne == "function" && St( () => {
                        ne(l)
                    }
                    )
                }
                ))
            }
            , () => {
                $.focused.value === !0 && I === Ae && (clearTimeout(I),
                $.innerLoading.value = !1,
                g.value = !1),
                o.value === !0 && (o.value = !1)
            }
            )
        }
        function Wn() {
            return V(Il, {
                ref: M,
                class: be.value,
                style: e.popupContentStyle,
                modelValue: o.value,
                fit: e.menuShrink !== !0,
                cover: e.optionsCover === !0 && Le.value !== !0 && e.useInput !== !0,
                anchor: e.menuAnchor,
                self: e.menuSelf,
                offset: e.menuOffset,
                dark: Ee.value,
                noParentEvent: !0,
                noRefocus: !0,
                noFocus: !0,
                noRouteDismiss: e.popupNoRouteDismiss,
                square: qe.value,
                transitionShow: e.transitionShow,
                transitionHide: e.transitionHide,
                transitionDuration: e.transitionDuration,
                separateClosePopup: !0,
                ...ge.value,
                onScrollPassive: re,
                onBeforeShow: Fa,
                onBeforeHide: On,
                onShow: zn
            }, ya)
        }
        function On(w) {
            Sa(w),
            Ht()
        }
        function zn() {
            Re()
        }
        function Mn(w) {
            it(w),
            R.value?.focus(),
            f.value = !0,
            window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0)
        }
        function Rn(w) {
            it(w),
            St( () => {
                f.value = !1
            }
            )
        }
        function Un() {
            const w = [V(Li, {
                class: `col-auto ${$.fieldClass.value}`,
                ...ce.value,
                for: $.targetUid.value,
                dark: Ee.value,
                square: !0,
                loading: g.value,
                itemAligned: !1,
                filled: !0,
                stackLabel: c.value.length !== 0,
                ...$.splitAttrs.listeners.value,
                onFocus: Mn,
                onBlur: Rn
            }, {
                ...s,
                rawControl: () => $.getControl(!0),
                before: void 0,
                after: void 0
            })];
            return o.value === !0 && w.push(V("div", {
                ref: B,
                class: be.value + " scroll",
                style: e.popupContentStyle,
                ...ge.value,
                onClick: Yt,
                onScrollPassive: re
            }, ya())),
            V(Xe, {
                ref: q,
                modelValue: i.value,
                position: e.useInput === !0 ? "top" : void 0,
                transitionShow: y,
                transitionHide: e.transitionHide,
                transitionDuration: e.transitionDuration,
                noRouteDismiss: e.popupNoRouteDismiss,
                onBeforeShow: Fa,
                onBeforeHide: jn,
                onHide: Nn,
                onShow: Hn
            }, () => V("div", {
                class: "q-select__dialog" + (Ee.value === !0 ? " q-select__dialog--dark q-dark" : "") + (f.value === !0 ? " q-select__dialog--focused" : "")
            }, w))
        }
        function jn(w) {
            Sa(w),
            q.value !== null && q.value.__updateRefocusTarget($.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),
            $.focused.value = !1
        }
        function Nn(w) {
            Lt(),
            $.focused.value === !1 && a("blur", w),
            Kt()
        }
        function Hn() {
            const w = document.activeElement;
            (w === null || w.id !== $.targetUid.value) && R.value !== null && R.value !== w && R.value.focus(),
            Re()
        }
        function Ht() {
            i.value !== !0 && (r.value = -1,
            o.value === !0 && (o.value = !1),
            $.focused.value === !1 && (I !== null && (clearTimeout(I),
            I = null),
            $.innerLoading.value === !0 && (a("filterAbort"),
            $.innerLoading.value = !1,
            g.value = !1)))
        }
        function Qt(w) {
            $.editable.value === !0 && (k === !0 ? ($.onControlFocusin(w),
            i.value = !0,
            St( () => {
                $.focus()
            }
            )) : $.focus(),
            e.onFilter !== void 0 ? Nt(c.value) : (Le.value !== !0 || s["no-option"] !== void 0) && (o.value = !0))
        }
        function Lt() {
            i.value = !1,
            Ht()
        }
        function Kt() {
            e.useInput === !0 && ol(e.multiple !== !0 && e.fillInput === !0 && Y.value.length !== 0 && N.value(Y.value[0]) || "", !0, !0)
        }
        function Tl(w) {
            let ae = -1;
            if (w === !0) {
                if (Y.value.length !== 0) {
                    const ne = Ne.value(Y.value[0]);
                    ae = e.options.findIndex(Ae => il(Ne.value(Ae), ne))
                }
                W(ae)
            }
            ft(ae)
        }
        function Qn(w, ae) {
            o.value === !0 && $.innerLoading.value === !1 && (W(-1, !0),
            St( () => {
                o.value === !0 && $.innerLoading.value === !1 && (w > ae ? W() : Tl(!0))
            }
            ))
        }
        function wa() {
            i.value === !1 && M.value !== null && M.value.updatePosition()
        }
        function Fa(w) {
            w !== void 0 && it(w),
            a("popupShow", w),
            $.hasPopupOpen = !0,
            $.onControlFocusin(w)
        }
        function Sa(w) {
            w !== void 0 && it(w),
            a("popupHide", w),
            $.hasPopupOpen = !1,
            $.onControlFocusout(w)
        }
        function Ca() {
            k = t.platform.is.mobile !== !0 && e.behavior !== "dialog" ? !1 : e.behavior !== "menu" && (e.useInput === !0 ? s["no-option"] !== void 0 || e.onFilter !== void 0 || Le.value === !1 : !0),
            y = t.platform.is.ios === !0 && k === !0 && e.useInput === !0 ? "fade" : e.transitionShow
        }
        return Zn(Ca),
        eo(wa),
        Ca(),
        $t( () => {
            p !== null && clearTimeout(p),
            d !== null && clearTimeout(d)
        }
        ),
        Object.assign(l, {
            showPopup: Qt,
            hidePopup: Lt,
            removeAtIndex: Q,
            add: De,
            toggleOption: Qe,
            getOptionIndex: () => r.value,
            setOptionIndex: ft,
            moveOptionSelection: Ft,
            filter: Nt,
            updateMenuPosition: wa,
            updateInputValue: ol,
            isOptionSelected: fe,
            getEmittingOptionValue: Be,
            isOptionDisabled: (...w) => oe.value.apply(null, w) === !0,
            getOptionValue: (...w) => Ne.value.apply(null, w),
            getOptionLabel: (...w) => N.value.apply(null, w)
        }),
        Object.assign($, {
            innerValue: Y,
            fieldClass: h( () => `q-select q-field--auto-height q-select--with${e.useInput !== !0 ? "out" : ""}-input q-select--with${e.useChips !== !0 ? "out" : ""}-chips q-select--${e.multiple === !0 ? "multiple" : "single"}`),
            inputRef: G,
            targetRef: R,
            hasValue: Ie,
            showPopup: Qt,
            floatingLabel: h( () => e.hideSelected !== !0 && Ie.value === !0 || typeof c.value == "number" || c.value.length !== 0 || bl(e.displayValue)),
            getControlChild: () => {
                if ($.editable.value !== !1 && (i.value === !0 || Le.value !== !0 || s["no-option"] !== void 0))
                    return k === !0 ? Un() : Wn();
                $.hasPopupOpen === !0 && ($.hasPopupOpen = !1)
            }
            ,
            controlEvents: {
                onFocusin(w) {
                    $.onControlFocusin(w)
                },
                onFocusout(w) {
                    $.onControlFocusout(w, () => {
                        Kt(),
                        Ht()
                    }
                    )
                },
                onClick(w) {
                    if (Yt(w),
                    k !== !0 && o.value === !0) {
                        Ht(),
                        R.value?.focus();
                        return
                    }
                    Qt(w)
                }
            },
            getControl: w => {
                const ae = qn()
                  , ne = w === !0 || i.value !== !0 || k !== !0;
                if (e.useInput === !0)
                    ae.push(Pn(w, ne));
                else if ($.editable.value === !0) {
                    const ze = ne === !0 ? me.value : void 0;
                    ae.push(V("input", {
                        ref: ne === !0 ? R : void 0,
                        key: "d_t",
                        class: "q-select__focus-target",
                        id: ne === !0 ? $.targetUid.value : void 0,
                        value: He.value,
                        readonly: !0,
                        "data-autofocus": w === !0 || e.autofocus === !0 || void 0,
                        ...ze,
                        onKeydown: Ut,
                        onKeyup: Oe,
                        onKeypress: ht
                    })),
                    ne === !0 && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && ae.push(V("input", {
                        class: "q-select__autocomplete-input",
                        autocomplete: e.autocomplete,
                        tabindex: -1,
                        onKeyup: lt
                    }))
                }
                if (P.value !== void 0 && e.disable !== !0 && he.value.length !== 0) {
                    const ze = he.value.map(Pe => V("option", {
                        value: Pe,
                        selected: !0
                    }));
                    ae.push(V("select", {
                        class: "hidden",
                        name: P.value,
                        multiple: e.multiple
                    }, ze))
                }
                const Ae = e.useInput === !0 || ne !== !0 ? void 0 : $.splitAttrs.attributes.value;
                return V("div", {
                    class: "q-field__native row items-center",
                    ...Ae,
                    ...$.splitAttrs.listeners.value
                }, ae)
            }
            ,
            getInnerAppend: () => e.loading !== !0 && g.value !== !0 && e.hideDropdownIcon !== !0 ? [V(Ve, {
                class: "q-select__dropdown-icon" + (o.value === !0 ? " rotate-180" : ""),
                name: je.value
            })] : null
        }),
        la($)
    }
})
  , Ui = ["src"]
  , ga = ye({
    __name: "ProfileDropdown",
    emits: ["log-out"],
    setup(e, {emit: s}) {
        const {t: a} = Se()
          , l = mt()
          , t = wt()
          , o = Ke()
          , i = s;
        function r() {
            t.logOut(),
            i("log-out")
        }
        async function c() {
            const f = a("profiledropdown.Are you sure you want to delete your account");
            if (await Rt(a, f)) {
                l.loading.show();
                try {
                    await t.deleteAccount(),
                    o.resetWheel();
                    const g = a("profiledropdown.Your account and your saved wheels have been deleted");
                    Bt(g),
                    i("log-out")
                } catch (g) {
                    Me("DeleteAccountError", g),
                    Ue(a, g)
                }
                l.loading.hide()
            }
        }
        return (f, g) => (E(),
        Z(At, null, {
            label: u( () => [m("img", {
                style: {
                    "border-radius": "50%",
                    height: "30px"
                },
                src: v(t).userPhotoUrl,
                alt: ""
            }, null, 8, Ui)]),
            default: u( () => [n(Ot, null, {
                default: u( () => [n(Ce, null, {
                    default: u( () => [n(te, null, {
                        default: u( () => [H(A(v(a)("profiledropdown.Signed in as", {
                            name: v(t).userDisplayName
                        })), 1)]),
                        _: 1
                    })]),
                    _: 1
                }), n(ul), ue((E(),
                Z(Ce, {
                    clickable: "",
                    onClick: r
                }, {
                    default: u( () => [n(te, null, {
                        default: u( () => [n(at, null, {
                            default: u( () => [H(A(v(a)("profiledropdown.Sign out")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                })), [[Ze]]), n(Ce, {
                    to: "/export"
                }, {
                    default: u( () => [n(te, null, {
                        default: u( () => [n(at, null, {
                            default: u( () => [H(A(v(a)("profiledropdown.Export my data")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                }), ue((E(),
                Z(Ce, {
                    clickable: "",
                    onClick: c
                }, {
                    default: u( () => [n(te, null, {
                        default: u( () => [n(at, null, {
                            default: u( () => [H(A(v(a)("profiledropdown.Delete my account")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                })), [[Ze]])]),
                _: 1
            })]),
            _: 1
        }))
    }
})
  , ji = ut({
    name: "QSlideTransition",
    props: {
        appear: Boolean,
        duration: {
            type: Number,
            default: 300
        }
    },
    emits: ["show", "hide"],
    setup(e, {slots: s, emit: a}) {
        let l = !1, t, o, i = null, r = null, c, f;
        function g() {
            t?.(),
            t = null,
            l = !1,
            i !== null && (clearTimeout(i),
            i = null),
            r !== null && (clearTimeout(r),
            r = null),
            o?.removeEventListener("transitionend", c),
            c = null
        }
        function p(C, I, T) {
            I !== void 0 && (C.style.height = `${I}px`),
            C.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,
            l = !0,
            t = T
        }
        function d(C, I) {
            C.style.overflowY = null,
            C.style.height = null,
            C.style.transition = null,
            g(),
            I !== f && a(I)
        }
        function b(C, I) {
            let T = 0;
            o = C,
            l === !0 ? (g(),
            T = C.offsetHeight === C.scrollHeight ? 0 : void 0) : (f = "hide",
            C.style.overflowY = "hidden"),
            p(C, T, I),
            i = setTimeout( () => {
                i = null,
                C.style.height = `${C.scrollHeight}px`,
                c = y => {
                    r = null,
                    (Object(y) !== y || y.target === C) && d(C, "show")
                }
                ,
                C.addEventListener("transitionend", c),
                r = setTimeout(c, e.duration * 1.1)
            }
            , 100)
        }
        function k(C, I) {
            let T;
            o = C,
            l === !0 ? g() : (f = "show",
            C.style.overflowY = "hidden",
            T = C.scrollHeight),
            p(C, T, I),
            i = setTimeout( () => {
                i = null,
                C.style.height = 0,
                c = y => {
                    r = null,
                    (Object(y) !== y || y.target === C) && d(C, "hide")
                }
                ,
                C.addEventListener("transitionend", c),
                r = setTimeout(c, e.duration * 1.1)
            }
            , 100)
        }
        return $t( () => {
            l === !0 && g()
        }
        ),
        () => V(yl, {
            css: !1,
            appear: e.appear,
            onEnter: b,
            onLeave: k
        }, s.default)
    }
})
  , Pt = oo({})
  , Ni = Object.keys(an)
  , An = ut({
    name: "QExpansionItem",
    props: {
        ...an,
        ...lo,
        ...vl,
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
    emits: [...to, "click", "afterShow", "afterHide"],
    setup(e, {slots: s, emit: a}) {
        const {proxy: {$q: l}} = vt()
          , t = fl(e, l)
          , o = F(e.modelValue !== null ? e.modelValue : e.defaultOpened)
          , i = F(null)
          , r = Ya()
          , {show: c, hide: f, toggle: g} = ao({
            showing: o
        });
        let p, d;
        const b = h( () => `q-expansion-item q-item-type q-expansion-item--${o.value === !0 ? "expanded" : "collapsed"} q-expansion-item--${e.popup === !0 ? "popup" : "standard"}`)
          , k = h( () => e.contentInsetLevel === void 0 ? null : {
            ["padding" + (l.lang.rtl === !0 ? "Right" : "Left")]: e.contentInsetLevel * 56 + "px"
        })
          , C = h( () => e.disable !== !0 && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== ""))
          , I = h( () => {
            const O = {};
            return Ni.forEach(re => {
                O[re] = e[re]
            }
            ),
            O
        }
        )
          , T = h( () => C.value === !0 || e.expandIconToggle !== !0)
          , y = h( () => e.expandedIcon !== void 0 && o.value === !0 ? e.expandedIcon : e.expandIcon || l.iconSet.expansionItem[e.denseToggle === !0 ? "denseIcon" : "icon"])
          , x = h( () => e.disable !== !0 && (C.value === !0 || e.expandIconToggle === !0))
          , D = h( () => ({
            expanded: o.value === !0,
            detailsId: r.value,
            toggle: g,
            show: c,
            hide: f
        }))
          , G = h( () => {
            const O = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : l.lang.label[o.value === !0 ? "collapse" : "expand"](e.label);
            return {
                role: "button",
                "aria-expanded": o.value === !0 ? "true" : "false",
                "aria-controls": r.value,
                "aria-label": O
            }
        }
        );
        we( () => e.group, O => {
            d?.(),
            O !== void 0 && ee()
        }
        );
        function R(O) {
            C.value !== !0 && g(O),
            a("click", O)
        }
        function M(O) {
            O.keyCode === 13 && q(O, !0)
        }
        function q(O, re) {
            re !== !0 && O.qAvoidFocus !== !0 && i.value?.focus(),
            g(O),
            dt(O)
        }
        function B() {
            a("afterShow")
        }
        function P() {
            a("afterHide")
        }
        function ee() {
            p === void 0 && (p = no()),
            o.value === !0 && (Pt[e.group] = p);
            const O = we(o, ke => {
                ke === !0 ? Pt[e.group] = p : Pt[e.group] === p && delete Pt[e.group]
            }
            )
              , re = we( () => Pt[e.group], (ke, Re) => {
                Re === p && ke !== void 0 && ke !== p && f()
            }
            );
            d = () => {
                O(),
                re(),
                Pt[e.group] === p && delete Pt[e.group],
                d = void 0
            }
        }
        function j() {
            const O = {
                class: [`q-focusable relative-position cursor-pointer${e.denseToggle === !0 && e.switchToggleSide === !0 ? " items-end" : ""}`, e.expandIconClass],
                side: e.switchToggleSide !== !0,
                avatar: e.switchToggleSide
            }
              , re = [V(Ve, {
                class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && o.value === !0 ? " q-expansion-item__toggle-icon--rotated" : ""),
                name: y.value
            })];
            return x.value === !0 && (Object.assign(O, {
                tabindex: 0,
                ...G.value,
                onClick: q,
                onKeyup: M
            }),
            re.unshift(V("div", {
                ref: i,
                class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",
                tabindex: -1
            }))),
            V(te, O, () => re)
        }
        function K() {
            let O;
            return s.header !== void 0 ? O = [].concat(s.header(D.value)) : (O = [V(te, () => [V(at, {
                lines: e.labelLines
            }, () => e.label || ""), e.caption ? V(at, {
                lines: e.captionLines,
                caption: !0
            }, () => e.caption) : null])],
            e.icon && O[e.switchToggleSide === !0 ? "push" : "unshift"](V(te, {
                side: e.switchToggleSide === !0,
                avatar: e.switchToggleSide !== !0
            }, () => V(Ve, {
                name: e.icon
            })))),
            e.disable !== !0 && e.hideExpandIcon !== !0 && O[e.switchToggleSide === !0 ? "unshift" : "push"](j()),
            O
        }
        function _() {
            const O = {
                ref: "item",
                style: e.headerStyle,
                class: e.headerClass,
                dark: t.value,
                disable: e.disable,
                dense: e.dense,
                insetLevel: e.headerInsetLevel
            };
            return T.value === !0 && (O.clickable = !0,
            O.onClick = R,
            Object.assign(O, C.value === !0 ? I.value : G.value)),
            V(Ce, O, K)
        }
        function S() {
            return ue(V("div", {
                key: "e-content",
                class: "q-expansion-item__content relative-position",
                style: k.value,
                id: r.value
            }, Tt(s.default)), [[We, o.value]])
        }
        function W() {
            const O = [_(), V(ji, {
                duration: e.duration,
                onShow: B,
                onHide: P
            }, S)];
            return e.expandSeparator === !0 && O.push(V(ul, {
                class: "q-expansion-item__border q-expansion-item__border--top absolute-top",
                dark: t.value
            }), V(ul, {
                class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",
                dark: t.value
            })),
            O
        }
        return e.group !== void 0 && ee(),
        $t( () => {
            d?.()
        }
        ),
        () => V("div", {
            class: b.value
        }, [V("div", {
            class: "q-expansion-item__container relative-position"
        }, W())])
    }
})
  , Hi = ["src", "width", "height"]
  , Wa = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
  , Qi = ye({
    __name: "WheelThumbnail",
    props: {
        path: {
            type: String,
            required: !0
        },
        size: {
            type: Number,
            default: 200
        }
    },
    setup(e) {
        const s = wt()
          , a = e
          , l = F(null)
          , t = F(Wa);
        zt( () => {
            setTimeout( () => {
                const {stop: i} = io(l, r => {
                    r[0]?.isIntersecting && (o(),
                    i())
                }
                )
            }
            , 100)
        }
        );
        async function o() {
            if (t.value !== Wa)
                return;
            const i = await s.getWheelThumbnail(a.path);
            t.value = URL.createObjectURL(i)
        }
        return (i, r) => (E(),
        J("img", {
            src: t.value,
            width: a.size,
            height: a.size,
            alt: "",
            ref_key: "img",
            ref: l
        }, null, 8, Hi))
    }
})
  , Ki = {
    class: "text-bold"
}
  , Gi = {
    key: 0
}
  , Yi = {
    class: "col q-pr-sm"
}
  , Xi = {
    key: 0
}
  , Ji = {
    key: 1
}
  , Zi = {
    class: "col-shrink q-gutter-y-sm"
}
  , es = {
    class: "text-right"
}
  , ts = ye({
    __name: "WheelInfoCard",
    props: {
        wheel: {
            type: Object,
            required: !0
        }
    },
    emits: ["open-wheel", "update-wheel", "delete-wheel"],
    setup(e, {emit: s}) {
        const a = e
          , l = s
          , {t, locale: o} = Se()
          , i = h( () => so(a.wheel.shareMode));
        async function r() {
            l("update-wheel", a.wheel.path, {
                shareMode: a.wheel.shareMode
            })
        }
        function c() {
            l("delete-wheel", a.wheel.path, a.wheel.wheelConfig.title)
        }
        return (f, g) => {
            const p = ml("router-link");
            return E(),
            Z(Ye, {
                flat: ""
            }, {
                default: u( () => [n(An, null, {
                    header: u( () => [n(te, {
                        avatar: ""
                    }, {
                        default: u( () => [n(Qi, {
                            path: e.wheel.path,
                            size: 50
                        }, null, 8, ["path"])]),
                        _: 1
                    }), n(te, null, {
                        default: u( () => [m("div", Ki, A(e.wheel.wheelConfig.title), 1), i.value ? (E(),
                        J("div", Gi, [g[2] || (g[2] = H(" Link: ")), n(p, {
                            to: `/${e.wheel.path}`
                        }, {
                            default: u( () => [H(A(e.wheel.path), 1)]),
                            _: 1
                        }, 8, ["to"])])) : _e("", !0)]),
                        _: 1
                    }), n(te, {
                        side: ""
                    }, {
                        default: u( () => [n(z, {
                            icon: "fas fa-folder-open",
                            label: v(t)("common.Open"),
                            unelevated: "",
                            "no-caps": "",
                            color: "primary",
                            onClick: g[0] || (g[0] = d => l("open-wheel", e.wheel.path))
                        }, null, 8, ["label"])]),
                        _: 1
                    })]),
                    default: u( () => [n(Ye, null, {
                        default: u( () => [n(Fe, {
                            class: "row"
                        }, {
                            default: u( () => [m("div", Yi, [e.wheel.wheelConfig.description ? (E(),
                            J("p", Xi, A(e.wheel.wheelConfig.description), 1)) : _e("", !0), m("div", null, A(v(t)("sharedialog.Created")) + ": " + A(Nl(e.wheel.created, v(o))), 1), m("div", null, A(v(t)("sharedialog.Last viewed")) + ": " + A(Nl(e.wheel.lastRead, v(o))), 1), e.wheel.shareMode ? (E(),
                            J("div", Ji, A(v(t)("sharedialog.Visits")) + ": " + A(e.wheel.readCount), 1)) : _e("", !0)]), m("div", Zi, [n(xt, {
                                label: v(t)("sharedialog.Visibility"),
                                modelValue: e.wheel.shareMode,
                                "onUpdate:modelValue": [g[1] || (g[1] = d => e.wheel.shareMode = d), r],
                                options: [{
                                    label: v(t)("mywheelsdialog.Private"),
                                    value: "private"
                                }, {
                                    label: v(t)("mywheelsdialog.Spin-only"),
                                    value: "spin-only"
                                }, {
                                    label: v(t)("mywheelsdialog.Copyable"),
                                    value: "copyable"
                                }, {
                                    label: v(t)("mywheelsdialog.Gallery"),
                                    value: "gallery"
                                }],
                                "emit-value": "",
                                "map-options": ""
                            }, null, 8, ["label", "modelValue", "options"]), m("div", es, [n(z, {
                                label: v(t)("common.Delete"),
                                icon: "far fa-trash-alt",
                                unelevated: "",
                                "no-caps": "",
                                color: "negative",
                                onClick: c
                            }, null, 8, ["label"])])])]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            })
        }
    }
})
  , ls = {
    class: "text-h6"
}
  , as = {
    key: 0
}
  , ns = {
    key: 1
}
  , os = {
    key: 0,
    class: "flex gap"
}
  , is = {
    style: {
        height: "50vh",
        overflow: "auto"
    }
}
  , ss = ye({
    __name: "MyWheelsDialog",
    emits: ["reset-wheel-rotation", "reset-address-bar"],
    setup(e, {expose: s, emit: a}) {
        const l = mt()
          , {t} = Se()
          , o = wt()
          , i = Ke()
          , r = a
          , c = F(!1)
          , f = F([])
          , g = h( () => f.value.length === 0)
          , p = F("")
          , d = h( () => p.value.toLowerCase())
          , b = h( () => f.value.filter(q => !p.value || q.wheelConfig.title.toLowerCase().includes(d.value)))
          , k = F("title-asc")
          , C = h( () => {
            const [q,B] = k.value.split("-");
            return ro(b.value, q, B)
        }
        );
        let I;
        async function T() {
            return await uo(),
            X("Wheel", "ShowOpenDialog"),
            await G(),
            p.value = "",
            c.value = !0,
            new Promise(q => I = q)
        }
        async function y(q) {
            c.value = !1,
            I("open");
            const B = await o.loadWheel(q);
            i.setWheelConfig(B.wheelConfig),
            i.clearWinners(),
            r("reset-wheel-rotation"),
            r("reset-address-bar"),
            X("Wheel", "OpenWheel")
        }
        async function x(q, B) {
            try {
                await o.updateWheel(q, B.wheelConfig, B.shareMode)
            } catch (P) {
                Me("UpdateWheelError", P),
                Ue(t, P)
            }
        }
        async function D(q, B) {
            const P = t("opendialog.Are you sure", {
                wheelTitle: ua(B)
            });
            if (await Rt(t, P))
                try {
                    X("Wheel", "DeleteWheel"),
                    f.value = f.value.filter(ee => ee.path !== q),
                    await o.deleteWheel(q)
                } catch (ee) {
                    Me("DeleteWheelError", ee),
                    Ue(t, ee)
                }
        }
        async function G() {
            try {
                l.loading.show(),
                f.value = await o.loadMyWheels("path,created,lastRead,readCount,shareMode,wheelConfig.title")
            } catch (q) {
                Ue(t, q),
                Me("LoadSavedWheelsError (My Wheels dialog)", q)
            } finally {
                l.loading.hide()
            }
        }
        function R() {
            c.value = !1,
            I("switch")
        }
        function M() {
            c.value = !1,
            I("cancel")
        }
        return s({
            show: T
        }),
        (q, B) => (E(),
        Z(Xe, {
            modelValue: c.value,
            "onUpdate:modelValue": B[3] || (B[3] = P => c.value = P)
        }, {
            default: u( () => [n(Ye, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [n(Fe, {
                    class: "row items-center",
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", ls, [B[4] || (B[4] = m("i", {
                        class: "fa fa-folder-open"
                    }, null, -1)), H(" " + A(v(t)("mywheelsdialog.My wheels")), 1)]), n(pt), n(ga, {
                        onLogOut: B[0] || (B[0] = P => M())
                    })]),
                    _: 1
                }), n(Fe, null, {
                    default: u( () => [g.value ? (E(),
                    J("div", as, A(v(t)("opendialog.No wheels found")), 1)) : (E(),
                    J("div", ns, [f.value.length > 5 ? (E(),
                    J("div", os, [n(nt, {
                        dense: "",
                        filled: "",
                        modelValue: p.value,
                        "onUpdate:modelValue": B[1] || (B[1] = P => p.value = P),
                        placeholder: v(t)("common.Search"),
                        class: "flex-1",
                        style: {
                            "min-width": "200px"
                        }
                    }, null, 8, ["modelValue", "placeholder"]), n(xt, {
                        modelValue: k.value,
                        "onUpdate:modelValue": B[2] || (B[2] = P => k.value = P),
                        options: [{
                            label: v(t)("mywheelsdialog.Sort by title ascending"),
                            value: "title-asc"
                        }, {
                            label: v(t)("mywheelsdialog.Sort by title descending"),
                            value: "title-desc"
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
                    }, null, 8, ["modelValue", "options"])])) : _e("", !0), m("div", is, [n(ra, {
                        name: "animated-list",
                        tag: "ul",
                        style: {
                            "padding-left": "0"
                        }
                    }, {
                        default: u( () => [(E(!0),
                        J(rt, null, gt(C.value, P => (E(),
                        J("li", {
                            key: P.path
                        }, [n(ts, {
                            wheel: P,
                            onOpenWheel: y,
                            onUpdateWheel: x,
                            onDeleteWheel: D
                        }, null, 8, ["wheel"])]))), 128))]),
                        _: 1
                    })])]))]),
                    _: 1
                }), n(ct, {
                    align: "between"
                }, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(t)("opendialog.Open a local file instead"),
                        onClick: R
                    }, null, 8, ["label"]), n(z, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(t)("common.Cancel"),
                        onClick: M
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , rs = {
    class: "text-h6"
}
  , us = {
    key: 0
}
  , cs = {
    key: 1
}
  , ds = {
    style: {
        height: "50vh",
        overflow: "auto"
    }
}
  , vs = ye({
    __name: "OpenDialog",
    emits: ["reset-wheel-rotation", "reset-address-bar"],
    setup(e, {expose: s, emit: a}) {
        const l = mt()
          , {t} = Se()
          , o = wt()
          , i = Ke()
          , r = a
          , c = F(!1)
          , f = F([])
          , g = h( () => f.value.length == 0)
          , p = F("")
          , d = h( () => p.value.toLowerCase())
          , b = h( () => f.value.filter(G => !p.value || G.wheelConfig.title.toLowerCase().includes(d.value)));
        let k;
        async function C() {
            return X("Wheel", "ShowOpenDialog"),
            await y(),
            p.value = "",
            c.value = !0,
            new Promise(G => k = G)
        }
        async function I(G) {
            c.value = !1,
            k("open");
            const R = await o.loadWheel(G);
            i.setWheelConfig(R.wheelConfig),
            i.clearWinners(),
            r("reset-wheel-rotation"),
            r("reset-address-bar"),
            X("Wheel", "OpenWheel")
        }
        async function T(G, R) {
            const M = t("opendialog.Are you sure", {
                wheelTitle: ua(R)
            });
            if (await Rt(t, M))
                try {
                    X("Wheel", "DeleteWheel"),
                    f.value = f.value.filter(q => q.path !== G),
                    await o.deleteWheel(G)
                } catch (q) {
                    Me("DeleteWheelError", q),
                    Ue(t, q)
                }
        }
        async function y() {
            try {
                l.loading.show(),
                f.value = await o.getSavedWheels("path,wheelConfig.title")
            } catch (G) {
                Ue(t, G),
                Me("LoadSavedWheelsError (Open dialog)", G)
            } finally {
                l.loading.hide()
            }
        }
        function x() {
            c.value = !1,
            k("cancel")
        }
        function D() {
            c.value = !1,
            k("switch")
        }
        return s({
            show: C
        }),
        (G, R) => (E(),
        Z(Xe, {
            modelValue: c.value,
            "onUpdate:modelValue": R[1] || (R[1] = M => c.value = M)
        }, {
            default: u( () => [n(Ye, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [n(Fe, {
                    class: "row items-center",
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", rs, [R[2] || (R[2] = m("i", {
                        class: "fa fa-folder-open"
                    }, null, -1)), H(" " + A(v(t)("opendialog.Open wheel")), 1)]), n(pt), n(ga, {
                        onLogOut: x
                    })]),
                    _: 1
                }), n(Fe, null, {
                    default: u( () => [g.value ? (E(),
                    J("div", us, A(v(t)("opendialog.No wheels found")), 1)) : (E(),
                    J("div", cs, [f.value.length > 5 ? (E(),
                    Z(nt, {
                        key: 0,
                        dense: "",
                        filled: "",
                        modelValue: p.value,
                        "onUpdate:modelValue": R[0] || (R[0] = M => p.value = M),
                        placeholder: v(t)("common.Search")
                    }, null, 8, ["modelValue", "placeholder"])) : _e("", !0), m("div", ds, [n(ra, {
                        name: "animated-list",
                        tag: "q-list"
                    }, {
                        default: u( () => [(E(!0),
                        J(rt, null, gt(b.value, M => (E(),
                        Z(Ce, {
                            key: M.wheelConfig.title,
                            class: "q-px-none"
                        }, {
                            default: u( () => [n(te, {
                                side: ""
                            }, {
                                default: u( () => [n(z, {
                                    flat: "",
                                    color: "primary",
                                    icon: "fa fa-folder-open",
                                    onClick: q => I(M.path)
                                }, null, 8, ["onClick"])]),
                                _: 2
                            }, 1024), n(te, {
                                onClick: q => I(M.path),
                                style: {
                                    cursor: "pointer"
                                }
                            }, {
                                default: u( () => [H(A(M.wheelConfig.title), 1)]),
                                _: 2
                            }, 1032, ["onClick"]), n(te, {
                                side: ""
                            }, {
                                default: u( () => [n(z, {
                                    icon: "far fa-trash-alt",
                                    flat: "",
                                    color: "negative",
                                    onClick: q => T(M.path, M.wheelConfig.title)
                                }, null, 8, ["onClick"])]),
                                _: 2
                            }, 1024)]),
                            _: 2
                        }, 1024))), 128))]),
                        _: 1
                    })])]))]),
                    _: 1
                }), n(ct, {
                    align: "between"
                }, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(t)("opendialog.Open a local file instead"),
                        onClick: D
                    }, null, 8, ["label"]), n(z, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(t)("common.Cancel"),
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
  , fs = {
    class: "text-h6"
}
  , ms = {
    class: "row q-gutter-md items-center"
}
  , gs = {
    class: "col-3"
}
  , ps = {
    class: "col"
}
  , hs = {
    class: "row q-gutter-md items-center"
}
  , bs = {
    class: "col-3"
}
  , ys = {
    class: "col"
}
  , _s = ye({
    __name: "SaveCloudDialog",
    setup(e, {expose: s}) {
        const a = mt()
          , {t: l} = Se()
          , t = wt()
          , o = Ke()
          , i = F(!1)
          , r = F(null)
          , c = F([])
          , f = h( () => c.value.map(M => ({
            value: M.wheelConfig.title,
            label: M.wheelConfig.title
        })))
          , g = h( () => o.wheelConfig)
          , p = F("")
          , d = F("")
          , b = F("")
          , k = h( () => b.value != p.value && c.value.some(M => M.wheelConfig.title === p.value))
          , C = F(!1);
        let I;
        async function T() {
            return X("Wheel", "ShowSaveDialog"),
            D(),
            p.value = g.value.title,
            b.value = g.value.title,
            d.value = "",
            i.value = !0,
            new Promise(M => I = M)
        }
        we(d, M => p.value = M);
        async function y() {
            if (p.value)
                if (k.value) {
                    const M = l("savedialog.You are about to overwrite");
                    await Rt(l, M) && x()
                } else
                    x()
        }
        async function x() {
            a.loading.show();
            try {
                X("Wheel", "SaveWheel"),
                o.setWheelTitle(p.value),
                await t.saveWheel(g.value.clone()),
                a.loading.hide();
                const M = l("savedialog.Wheel saved successfully", {
                    wheelTitle: ca(p.value)
                });
                Bt(M)
            } catch (M) {
                a.loading.hide(),
                Ue(l, M),
                Me("SaveWheelError", M)
            }
            i.value = !1,
            I("save")
        }
        async function D() {
            try {
                C.value = !0,
                c.value = await t.getSavedWheels("wheelConfig.title")
            } catch (M) {
                Ue(l, M),
                Me("LoadSavedWheelsError (Save dialog)", M)
            } finally {
                C.value = !1
            }
        }
        function G() {
            i.value = !1,
            I("cancel")
        }
        function R() {
            i.value = !1,
            I("switch")
        }
        return s({
            show: T
        }),
        (M, q) => (E(),
        Z(Xe, {
            modelValue: i.value,
            "onUpdate:modelValue": q[2] || (q[2] = B => i.value = B),
            onShow: q[3] || (q[3] = B => r.value.select())
        }, {
            default: u( () => [n(Ye, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [n(Fe, {
                    class: "row items-center",
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", fs, [q[4] || (q[4] = m("i", {
                        class: "fa fa-save"
                    }, null, -1)), H(" " + A(v(l)("savedialog.Save wheel to the cloud")), 1)]), n(pt), n(ga, {
                        onLogOut: G
                    })]),
                    _: 1
                }), n(Fe, {
                    class: "q-gutter-md"
                }, {
                    default: u( () => [m("div", ms, [m("div", gs, A(v(l)("savedialog.Save as")), 1), m("div", ps, [n(nt, {
                        modelValue: p.value,
                        "onUpdate:modelValue": q[0] || (q[0] = B => p.value = B),
                        filled: "",
                        dense: "",
                        onKeyup: ll(y, ["native", "enter"]),
                        ref_key: "saveAsField",
                        ref: r,
                        required: "",
                        maxlength: "50"
                    }, null, 8, ["modelValue"])])]), m("div", hs, [m("div", bs, A(v(l)("savedialog.Your existing wheels")), 1), m("div", ys, [n(xt, {
                        filled: "",
                        dense: "",
                        label: v(l)("savedialog.Select a wheel"),
                        modelValue: d.value,
                        "onUpdate:modelValue": q[1] || (q[1] = B => d.value = B),
                        options: f.value,
                        "map-options": "",
                        "emit-value": "",
                        loading: C.value
                    }, null, 8, ["label", "modelValue", "options", "loading"])])]), m("div", null, A(v(l)("savedialog.You will always be able to access")), 1), n(z, {
                        outline: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(l)("savedialog.Save to a local file instead"),
                        onClick: R
                    }, null, 8, ["label"])]),
                    _: 1
                }), n(ct, {
                    align: "right"
                }, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(l)("common.Cancel"),
                        onClick: G
                    }, null, 8, ["label"]), n(z, {
                        unelevated: "",
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
        }, 8, ["modelValue"]))
    }
})
  , ws = {
    class: "text-h6"
}
  , Fs = {
    class: "row items-center"
}
  , Ss = {
    class: "col-shrink q-mr-md q-mb-md"
}
  , Cs = {
    class: "col-12 col-md-grow q-mb-md"
}
  , ks = ye({
    __name: "SaveLocalDialog",
    setup(e, {expose: s}) {
        const {t: a} = Se()
          , l = mt()
          , t = Ke()
          , o = F(!1)
          , i = F(null)
          , r = h( () => t.wheelConfig)
          , c = F("")
          , f = l.platform.is.ios ? ".json" : ".wheel";
        let g;
        async function p() {
            return X("Wheel", "ShowSaveLocalDialog"),
            c.value = r.value.title,
            o.value = !0,
            new Promise(C => g = C)
        }
        async function d() {
            t.setWheelTitle(c.value);
            try {
                await di(new Blob([JSON.stringify(co(r.value.clone()))]), {
                    fileName: `${r.value.title || "Untitled"}${f}`,
                    extensions: [f],
                    mimeTypes: ["application/json"]
                });
                const C = a("savedialog.Wheel saved successfully", {
                    wheelTitle: ca(r.value.title)
                });
                Bt(C)
            } catch (C) {
                if (C instanceof DOMException && C.message.includes("abort"))
                    return;
                Me("SaveLocalError", C),
                Ue(a, C)
            }
            o.value = !1,
            g("save")
        }
        function b() {
            o.value = !1,
            g("cancel")
        }
        function k() {
            o.value = !1,
            g("switch")
        }
        return s({
            show: p
        }),
        (C, I) => (E(),
        Z(Xe, {
            modelValue: o.value,
            "onUpdate:modelValue": I[1] || (I[1] = T => o.value = T),
            onShow: I[2] || (I[2] = T => i.value.select())
        }, {
            default: u( () => [n(Ye, null, {
                default: u( () => [n(Fe, {
                    class: "row items-center",
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", ws, [I[3] || (I[3] = m("i", {
                        class: "fa fa-save"
                    }, null, -1)), H(" " + A(v(a)("savedialog.Save to a local file")), 1)])]),
                    _: 1
                }), n(Fe, null, {
                    default: u( () => [m("div", Fs, [m("div", Ss, A(v(a)("savedialog.File name")), 1), m("div", Cs, [n(nt, {
                        modelValue: c.value,
                        "onUpdate:modelValue": I[0] || (I[0] = T => c.value = T),
                        filled: "",
                        dense: "",
                        onKeyup: ll(d, ["native", "enter"]),
                        ref_key: "saveAsField",
                        ref: i,
                        required: "",
                        maxlength: "50",
                        suffix: v(f)
                    }, null, 8, ["modelValue", "suffix"])])]), n(z, {
                        outline: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(a)("savedialog.Save to the cloud instead"),
                        onClick: k
                    }, null, 8, ["label"])]),
                    _: 1
                }), n(ct, {
                    align: "right"
                }, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(a)("common.Cancel"),
                        onClick: b
                    }, null, 8, ["label"]), n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(a)("common.Save"),
                        onClick: d
                    }, null, 8, ["label"])]),
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
  , As = {
    __name: "ShareDialogInfo",
    setup(e, {expose: s}) {
        const {t: a} = Se()
          , l = F(!1);
        let t;
        async function o() {
            return X("Wheel", "ShowShareDialog"),
            l.value = !0,
            new Promise( (f, g) => {
                t = f
            }
            )
        }
        function i() {
            t({
                openMySharedWheels: !0,
                openShareSettings: !1
            }),
            l.value = !1
        }
        function r() {
            t({
                openMySharedWheels: !1,
                openShareSettings: !0
            }),
            l.value = !1
        }
        function c() {
            t({
                openMySharedWheels: !1,
                openShareSettings: !1
            }),
            l.value = !1
        }
        return s({
            show: o
        }),
        (f, g) => {
            const p = ml("router-link");
            return E(),
            Z(Xe, {
                modelValue: l.value,
                "onUpdate:modelValue": g[0] || (g[0] = d => l.value = d)
            }, {
                default: u( () => [n(Ye, {
                    style: {
                        width: "640px"
                    }
                }, {
                    default: u( () => [n(Fe, {
                        style: {
                            "background-color": "#00000020"
                        }
                    }, {
                        default: u( () => [m("div", xs, [g[1] || (g[1] = m("i", {
                            class: "fa fa-share-alt"
                        }, null, -1)), H(" " + A(v(a)("sharedialog.Shareable link")), 1)])]),
                        _: 1
                    }), n(Fe, {
                        class: "q-gutter-md"
                    }, {
                        default: u( () => [m("div", null, A(v(a)("sharedialog.If you continue")), 1), m("div", null, A(v(a)("sharedialog.This link will work for anyone")), 1), m("div", null, A(v(a)("sharedialog.We want this website to be safe place for everyone")), 1), m("div", null, [n(p, {
                            to: "/terms"
                        }, {
                            default: u( () => [H(A(v(a)("appInfo.Terms of service")), 1)]),
                            _: 1
                        })]), n(z, {
                            unelevated: "",
                            "no-caps": "",
                            color: "primary",
                            label: v(a)("sharedialog.See my shared wheels"),
                            onClick: i
                        }, null, 8, ["label"])]),
                        _: 1
                    }), n(ct, {
                        align: "right"
                    }, {
                        default: u( () => [n(z, {
                            unelevated: "",
                            "no-caps": "",
                            label: v(a)("common.Cancel"),
                            onClick: c
                        }, null, 8, ["label"]), n(z, {
                            unelevated: "",
                            "no-caps": "",
                            color: "primary",
                            label: v(a)("common.Continue"),
                            onClick: r
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
  , Ds = {
    class: "text-h6"
}
  , Es = {
    key: 0
}
  , Vs = {
    class: "text-left"
}
  , Is = {
    class: "text-left"
}
  , Ts = {
    class: "text-left created-column"
}
  , $s = {
    class: "text-right views-column"
}
  , Bs = {
    class: "break-long-words"
}
  , Ls = ["href"]
  , qs = {
    class: "copy-column"
}
  , Ps = {
    class: "created-column"
}
  , Ws = {
    class: "text-right views-column"
}
  , Os = {
    class: "delete-column"
}
  , zs = {
    key: 0
}
  , Ms = ye({
    __name: "ShareDialogMySharedWheels",
    setup(e, {expose: s}) {
        const a = mt()
          , {t: l, locale: t} = Se()
          , o = wt()
          , i = F(!1)
          , r = F([])
          , c = h( () => r.value.length == 0);
        async function f() {
            X("Wheel", "ViewSharedWheelsAttempt"),
            await C(),
            X("Wheel", "ViewSharedWheelsSuccess"),
            i.value = !0
        }
        function g() {
            i.value = !1
        }
        function p(I) {
            return location.protocol + "//" + Hl(location.host, t.value, I)
        }
        function d(I) {
            return Hl(location.host, t.value, I)
        }
        async function b(I) {
            await navigator.clipboard.writeText(I);
            const T = l("sharedialog.Link copied to the clipboard");
            Bt(T)
        }
        async function k(I) {
            const T = l("opendialog.Are you sure", {
                wheelTitle: ua(I)
            });
            if (await Rt(l, T))
                try {
                    r.value = r.value.filter(y => y.path != I),
                    await o.deleteWheel(I)
                } catch (y) {
                    Me("DeleteSharedWheelError", y),
                    Ue(l, y)
                }
        }
        async function C() {
            try {
                a.loading.show(),
                await o.userIsLoggedIn() || await o.logInAnonymously(),
                r.value = await o.getSharedWheels("path,config.title,created,readCount")
            } catch (I) {
                Ue(l, I),
                Me("ViewSharedWheelsError", I)
            } finally {
                a.loading.hide()
            }
        }
        return s({
            show: f
        }),
        (I, T) => (E(),
        Z(Xe, {
            modelValue: i.value,
            "onUpdate:modelValue": T[0] || (T[0] = y => i.value = y),
            maximized: v(a).platform.is.mobile,
            style: {
                "max-width": "900px"
            }
        }, {
            default: u( () => [n(Ye, {
                style: {
                    width: "900px"
                }
            }, {
                default: u( () => [n(Fe, {
                    class: "row items-center",
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", Ds, [T[1] || (T[1] = m("i", {
                        class: "fa fa-share-alt"
                    }, null, -1)), H(" " + A(v(l)("sharedialog.My shared wheels")), 1)]), n(pt), n(Mt)]),
                    _: 1
                }), n(Fe, {
                    style: {
                        "max-height": "75vh",
                        overflow: "auto"
                    }
                }, {
                    default: u( () => [n(ni, {
                        flat: ""
                    }, {
                        default: u( () => [m("thead", null, [c.value ? _e("", !0) : (E(),
                        J("tr", Es, [m("th", Vs, A(v(l)("common.Wheel title")), 1), m("th", Is, A(v(l)("sharedialog.Link")), 1), T[2] || (T[2] = m("th", {
                            class: "copy-column"
                        }, null, -1)), m("th", Ts, A(v(l)("sharedialog.Created")), 1), m("th", $s, A(v(l)("sharedialog.Visits")), 1), T[3] || (T[3] = m("th", {
                            class: "delete-column"
                        }, null, -1))]))]), n(ra, {
                            name: "animated-list",
                            tag: "tbody"
                        }, {
                            default: u( () => [(E(!0),
                            J(rt, null, gt(r.value, y => (E(),
                            J("tr", {
                                key: y.path
                            }, [m("td", Bs, A(y.config.title), 1), m("td", null, [m("a", {
                                href: p(y.path)
                            }, A(d(y.path)), 9, Ls)]), m("td", qs, [n(z, {
                                icon: "far fa-clipboard",
                                flat: "",
                                round: "",
                                dense: "",
                                size: "sm",
                                onClick: x => b(p(y.path))
                            }, null, 8, ["onClick"])]), m("td", Ps, A(v(Nl)(y.created, v(t))), 1), m("td", Ws, A(v(vo)(y.readCount)), 1), m("td", Os, [n(z, {
                                icon: "far fa-trash-alt",
                                flat: "",
                                round: "",
                                dense: "",
                                size: "sm",
                                color: "negative",
                                onClick: x => k(y.path)
                            }, null, 8, ["onClick"])])]))), 128)), c.value ? (E(),
                            J("tr", zs, [m("td", null, A(v(l)("sharedialog.No wheels found")), 1)])) : _e("", !0)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                }), n(ct, {
                    align: "right"
                }, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(l)("common.Close"),
                        onClick: g
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue", "maximized"]))
    }
})
  , Rs = ot(Ms, [["__scopeId", "data-v-ceca635d"]])
  , Us = {
    class: "text-h6"
}
  , js = {
    class: "q-gutter-y-sm"
}
  , Ns = {
    for: "wheelTitleField"
}
  , Hs = {
    class: "q-gutter-y-sm"
}
  , Qs = {
    class: "q-gutter-y-sm"
}
  , Ks = {
    key: 0,
    class: "q-gutter-y-sm"
}
  , Gs = {
    for: "wheelDescriptionField"
}
  , Ys = ye({
    __name: "ShareDialogSettings",
    setup(e, {expose: s}) {
        const a = Ke()
          , {t: l} = Se()
          , t = F(!1)
          , o = F(null)
          , i = F("")
          , r = F("")
          , c = h({
            get: () => a.showTitle,
            set: I => a.setShowTitle(I)
        })
          , f = F("copyable");
        let g;
        async function p() {
            return i.value = a.wheelTitle,
            r.value = a.wheelDescription,
            f.value = "copyable",
            t.value = !0,
            new Promise(I => {
                g = I
            }
            )
        }
        async function d() {
            if (C())
                if (f.value === "gallery") {
                    const I = l("sharedialog.You are about to publish your wheel to the public gallery");
                    await Rt(l, I) && b()
                } else
                    b()
        }
        function b() {
            a.setWheelTitle(i.value),
            a.setWheelDescription(r.value),
            g(f.value),
            t.value = !1
        }
        function k() {
            g(null),
            t.value = !1
        }
        function C() {
            return o.value.validate(),
            !o.value.hasError
        }
        return s({
            askUserForSettings: p
        }),
        (I, T) => (E(),
        Z(Xe, {
            modelValue: t.value,
            "onUpdate:modelValue": T[6] || (T[6] = y => t.value = y),
            onShow: T[7] || (T[7] = y => o.value.select())
        }, {
            default: u( () => [n(Ye, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [n(Fe, {
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", Us, [T[8] || (T[8] = m("i", {
                        class: "fa fa-share-alt"
                    }, null, -1)), H(" " + A(v(l)("sharedialog.Shareable link")), 1)])]),
                    _: 1
                }), n(Fe, {
                    class: "q-gutter-y-md"
                }, {
                    default: u( () => [m("div", js, [m("label", Ns, A(v(l)("common.Wheel title")), 1), n(nt, {
                        id: "wheelTitleField",
                        modelValue: i.value,
                        "onUpdate:modelValue": T[0] || (T[0] = y => i.value = y),
                        filled: "",
                        dense: "",
                        "bottom-slots": "",
                        rules: [y => y.length > 0 || v(l)("sharedialog.Your wheel must have a title")],
                        ref_key: "wheelTitleField",
                        ref: o,
                        maxlength: "50",
                        onKeyup: ll(d, ["native", "enter"])
                    }, null, 8, ["modelValue", "rules"]), n(Je, {
                        modelValue: c.value,
                        "onUpdate:modelValue": T[1] || (T[1] = y => c.value = y)
                    }, {
                        default: u( () => [H(A(v(l)("sharedialog.Show title to people")), 1)]),
                        _: 1
                    }, 8, ["modelValue"])]), m("div", Hs, [m("div", null, A(v(l)("sharedialog.Visibility")), 1), m("div", Qs, [n(Xt, {
                        modelValue: f.value,
                        "onUpdate:modelValue": T[2] || (T[2] = y => f.value = y),
                        dense: "",
                        val: "spin-only",
                        label: v(l)("sharedialog.Anyone with the link can spin the wheel")
                    }, null, 8, ["modelValue", "label"]), n(Xt, {
                        modelValue: f.value,
                        "onUpdate:modelValue": T[3] || (T[3] = y => f.value = y),
                        dense: "",
                        val: "copyable",
                        label: v(l)("sharedialog.Anyone with the link can spin and copy the wheel")
                    }, null, 8, ["modelValue", "label"]), n(Xt, {
                        modelValue: f.value,
                        "onUpdate:modelValue": T[4] || (T[4] = y => f.value = y),
                        dense: "",
                        val: "gallery",
                        label: v(l)("sharedialog.This wheel would be useful")
                    }, null, 8, ["modelValue", "label"])])]), f.value === "gallery" ? (E(),
                    J("div", Ks, [m("label", Gs, A(v(l)("common.Wheel description")), 1), n(nt, {
                        type: "textarea",
                        modelValue: r.value,
                        "onUpdate:modelValue": T[5] || (T[5] = y => r.value = y),
                        filled: "",
                        dense: "",
                        maxlength: "200",
                        rows: "3",
                        id: "wheelDescriptionField"
                    }, null, 8, ["modelValue"])])) : _e("", !0)]),
                    _: 1
                }), n(ct, {
                    align: "right"
                }, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(l)("common.Cancel"),
                        onClick: k
                    }, null, 8, ["label"]), n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(l)("common.Continue"),
                        onClick: d
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , Xs = {
    class: "text-h6"
}
  , Js = {
    class: "row q-gutter-sm"
}
  , Zs = {
    class: "col-grow"
}
  , er = {
    class: "col-shrink"
}
  , tr = ye({
    __name: "ShareDialogLink",
    setup(e, {expose: s}) {
        const a = mt()
          , {t: l, locale: t} = Se()
          , o = wt()
          , i = Ke()
          , r = F(!1)
          , c = F("");
        async function f(d) {
            a.loading.show();
            try {
                await o.userIsLoggedIn() || await o.logInAnonymously();
                const b = window.location.host
                  , k = await o.shareWheel(i.wheelConfig.clone(), d)
                  , C = Hl(b, t.value, k);
                c.value = window.location.protocol + "//" + C,
                X("Wheel", "CreateSharableLink"),
                r.value = !0
            } catch (b) {
                if (nn(b).includes("family")) {
                    const k = l("sharedialog.The wheel includes text that");
                    Sn(l, k)
                } else
                    Ue(l, b);
                Me("CreateSharableLinkError", b)
            }
            a.loading.hide()
        }
        async function g() {
            await navigator.clipboard.writeText(c.value),
            X("Wheel", "CopySharableLink");
            const d = l("sharedialog.Link copied to the clipboard");
            Bt(d)
        }
        function p() {
            r.value = !1
        }
        return s({
            share: f
        }),
        (d, b) => (E(),
        Z(Xe, {
            modelValue: r.value,
            "onUpdate:modelValue": b[1] || (b[1] = k => r.value = k)
        }, {
            default: u( () => [n(Ye, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [n(Fe, {
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", Xs, [b[2] || (b[2] = m("i", {
                        class: "fa fa-share-alt"
                    }, null, -1)), H(" " + A(v(l)("sharedialog.Shareable link")), 1)])]),
                    _: 1
                }), n(Fe, {
                    class: "q-gutter-y-md"
                }, {
                    default: u( () => [m("div", null, A(v(l)("sharedialog.Link to this wheel")), 1), m("div", Js, [m("div", Zs, [n(nt, {
                        id: "sharableLinkText",
                        modelValue: c.value,
                        "onUpdate:modelValue": b[0] || (b[0] = k => c.value = k),
                        readonly: "",
                        dense: "",
                        standout: "",
                        style: {
                            "min-width": "300px"
                        }
                    }, null, 8, ["modelValue"])]), m("div", er, [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: "positive",
                        label: v(l)("sharedialog.Copy link"),
                        onClick: g
                    }, null, 8, ["label"])])]), m("div", null, A(v(l)("sharedialog.This link will work for anyone")), 1)]),
                    _: 1
                }), n(ct, {
                    align: "right"
                }, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(l)("common.Close"),
                        onClick: p
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
});
let lr = 0;
const ar = ["click", "keydown"]
  , nr = {
    icon: String,
    label: [Number, String],
    alert: [Boolean, String],
    alertIcon: String,
    name: {
        type: [Number, String],
        default: () => `t_${lr++}`
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
function or(e, s, a, l) {
    const t = fo(on, Bl);
    if (t === Bl)
        return console.error("QTab/QRouteTab component needs to be child of QTabs"),
        Bl;
    const {proxy: o} = vt()
      , i = F(null)
      , r = F(null)
      , c = F(null)
      , f = h( () => e.disable === !0 || e.ripple === !1 ? !1 : Object.assign({
        keyCodes: [13, 32],
        early: !0
    }, e.ripple === !0 ? {} : e.ripple))
      , g = h( () => t.currentModel.value === e.name)
      , p = h( () => "q-tab relative-position self-stretch flex flex-center text-center" + (g.value === !0 ? " q-tab--active" + (t.tabProps.value.activeClass ? " " + t.tabProps.value.activeClass : "") + (t.tabProps.value.activeColor ? ` text-${t.tabProps.value.activeColor}` : "") + (t.tabProps.value.activeBgColor ? ` bg-${t.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && t.tabProps.value.inlineLabel === !1 ? " q-tab--full" : "") + (e.noCaps === !0 || t.tabProps.value.noCaps === !0 ? " q-tab--no-caps" : "") + (e.disable === !0 ? " disabled" : " q-focusable q-hoverable cursor-pointer"))
      , d = h( () => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (t.tabProps.value.inlineLabel === !0 ? "row no-wrap q-tab__content--inline" : "column") + (e.contentClass !== void 0 ? ` ${e.contentClass}` : ""))
      , b = h( () => e.disable === !0 || t.hasFocus.value === !0 || g.value === !1 && t.hasActiveTab.value === !0 ? -1 : e.tabindex || 0);
    function k(x, D) {
        if (D !== !0 && x?.qAvoidFocus !== !0 && i.value?.focus(),
        e.disable !== !0) {
            t.updateModel({
                name: e.name
            }),
            a("click", x);
            return
        }
    }
    function C(x) {
        ln(x, [13, 32]) ? k(x, !0) : tn(x) !== !0 && x.keyCode >= 35 && x.keyCode <= 40 && x.altKey !== !0 && x.metaKey !== !0 && t.onKbdNavigate(x.keyCode, o.$el) === !0 && dt(x),
        a("keydown", x)
    }
    function I() {
        const x = t.tabProps.value.narrowIndicator
          , D = []
          , G = V("div", {
            ref: c,
            class: ["q-tab__indicator", t.tabProps.value.indicatorClass]
        });
        e.icon !== void 0 && D.push(V(Ve, {
            class: "q-tab__icon",
            name: e.icon
        })),
        e.label !== void 0 && D.push(V("div", {
            class: "q-tab__label"
        }, e.label)),
        e.alert !== !1 && D.push(e.alertIcon !== void 0 ? V(Ve, {
            class: "q-tab__alert-icon",
            color: e.alert !== !0 ? e.alert : void 0,
            name: e.alertIcon
        }) : V("div", {
            class: "q-tab__alert" + (e.alert !== !0 ? ` text-${e.alert}` : "")
        })),
        x === !0 && D.push(G);
        const R = [V("div", {
            class: "q-focus-helper",
            tabindex: -1,
            ref: i
        }), V("div", {
            class: d.value
        }, sa(s.default, D))];
        return x === !1 && R.push(G),
        R
    }
    const T = {
        name: h( () => e.name),
        rootRef: r,
        tabIndicatorRef: c,
        routeData: l
    };
    $t( () => {
        t.unregisterTab(T)
    }
    ),
    zt( () => {
        t.registerTab(T)
    }
    );
    function y(x, D) {
        const G = {
            ref: r,
            class: p.value,
            tabindex: b.value,
            role: "tab",
            "aria-selected": g.value === !0 ? "true" : "false",
            "aria-disabled": e.disable === !0 ? "true" : void 0,
            onClick: k,
            onKeydown: C,
            ...D
        };
        return ue(V(x, G, I()), [[da, f.value]])
    }
    return {
        renderTab: y,
        $tabs: t
    }
}
const kt = ut({
    name: "QTab",
    props: nr,
    emits: ar,
    setup(e, {slots: s, emit: a}) {
        const {renderTab: l} = or(e, s, a);
        return () => l("div")
    }
});
function ir(e, s, a) {
    const l = a === !0 ? ["left", "right"] : ["top", "bottom"];
    return `absolute-${s === !0 ? l[0] : l[1]}${e ? ` text-${e}` : ""}`
}
const sr = ["left", "center", "right", "justify"]
  , Sl = ut({
    name: "QTabs",
    props: {
        modelValue: [Number, String],
        align: {
            type: String,
            default: "center",
            validator: e => sr.includes(e)
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
    setup(e, {slots: s, emit: a}) {
        const {proxy: l} = vt()
          , {$q: t} = l
          , {registerTick: o} = Ll()
          , {registerTick: i} = Ll()
          , {registerTick: r} = Ll()
          , {registerTimeout: c, removeTimeout: f} = Ql()
          , {registerTimeout: g, removeTimeout: p} = Ql()
          , d = F(null)
          , b = F(null)
          , k = F(e.modelValue)
          , C = F(!1)
          , I = F(!0)
          , T = F(!1)
          , y = F(!1)
          , x = []
          , D = F(0)
          , G = F(!1);
        let R = null, M = null, q;
        const B = h( () => ({
            activeClass: e.activeClass,
            activeColor: e.activeColor,
            activeBgColor: e.activeBgColor,
            indicatorClass: ir(e.indicatorColor, e.switchIndicator, e.vertical),
            narrowIndicator: e.narrowIndicator,
            inlineLabel: e.inlineLabel,
            noCaps: e.noCaps
        }))
          , P = h( () => {
            const N = D.value
              , oe = k.value;
            for (let he = 0; he < N; he++)
                if (x[he].name.value === oe)
                    return !0;
            return !1
        }
        )
          , ee = h( () => `q-tabs__content--align-${C.value === !0 ? "left" : y.value === !0 ? "justify" : e.align}`)
          , j = h( () => `q-tabs row no-wrap items-center q-tabs--${C.value === !0 ? "" : "not-"}scrollable q-tabs--${e.vertical === !0 ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows === !0 ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows === !0 ? "" : "out"}-arrows` + (e.dense === !0 ? " q-tabs--dense" : "") + (e.shrink === !0 ? " col-shrink" : "") + (e.stretch === !0 ? " self-stretch" : ""))
          , K = h( () => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + ee.value + (e.contentClass !== void 0 ? ` ${e.contentClass}` : ""))
          , _ = h( () => e.vertical === !0 ? {
            container: "height",
            content: "offsetHeight",
            scroll: "scrollHeight"
        } : {
            container: "width",
            content: "offsetWidth",
            scroll: "scrollWidth"
        })
          , S = h( () => e.vertical !== !0 && t.lang.rtl === !0)
          , W = h( () => dl === !1 && S.value === !0);
        we(S, Y),
        we( () => e.modelValue, N => {
            O({
                name: N,
                setCurrent: !0,
                skipEmit: !0
            })
        }
        ),
        we( () => e.outsideArrows, re);
        function O({name: N, setCurrent: oe, skipEmit: he}) {
            k.value !== N && (he !== !0 && e["onUpdate:modelValue"] !== void 0 && a("update:modelValue", N),
            (oe === !0 || e["onUpdate:modelValue"] === void 0) && (Re(k.value, N),
            k.value = N))
        }
        function re() {
            o( () => {
                d.value && ke({
                    width: d.value.offsetWidth,
                    height: d.value.offsetHeight
                })
            }
            )
        }
        function ke(N) {
            if (_.value === void 0 || b.value === null)
                return;
            const oe = N[_.value.container]
              , he = Math.min(b.value[_.value.scroll], Array.prototype.reduce.call(b.value.children, (Be, Q) => Be + (Q[_.value.content] || 0), 0))
              , $e = oe > 0 && he > oe;
            C.value = $e,
            $e === !0 && i(Y),
            y.value = oe < parseInt(e.breakpoint, 10)
        }
        function Re(N, oe) {
            const he = N != null && N !== "" ? x.find(Be => Be.name.value === N) : null
              , $e = oe != null && oe !== "" ? x.find(Be => Be.name.value === oe) : null;
            if (Ne === !0)
                Ne = !1;
            else if (he && $e) {
                const Be = he.tabIndicatorRef.value
                  , Q = $e.tabIndicatorRef.value;
                R !== null && (clearTimeout(R),
                R = null),
                Be.style.transition = "none",
                Be.style.transform = "none",
                Q.style.transition = "none",
                Q.style.transform = "none";
                const le = Be.getBoundingClientRect()
                  , De = Q.getBoundingClientRect();
                Q.style.transform = e.vertical === !0 ? `translate3d(0,${le.top - De.top}px,0) scale3d(1,${De.height ? le.height / De.height : 1},1)` : `translate3d(${le.left - De.left}px,0,0) scale3d(${De.width ? le.width / De.width : 1},1,1)`,
                r( () => {
                    R = setTimeout( () => {
                        R = null,
                        Q.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)",
                        Q.style.transform = "none"
                    }
                    , 70)
                }
                )
            }
            $e && C.value === !0 && $($e.rootRef.value)
        }
        function $(N) {
            const {left: oe, width: he, top: $e, height: Be} = b.value.getBoundingClientRect()
              , Q = N.getBoundingClientRect();
            let le = e.vertical === !0 ? Q.top - $e : Q.left - oe;
            if (le < 0) {
                b.value[e.vertical === !0 ? "scrollTop" : "scrollLeft"] += Math.floor(le),
                Y();
                return
            }
            le += e.vertical === !0 ? Q.height - Be : Q.width - he,
            le > 0 && (b.value[e.vertical === !0 ? "scrollTop" : "scrollLeft"] += Math.ceil(le),
            Y())
        }
        function Y() {
            const N = b.value;
            if (N === null)
                return;
            const oe = N.getBoundingClientRect()
              , he = e.vertical === !0 ? N.scrollTop : Math.abs(N.scrollLeft);
            S.value === !0 ? (I.value = Math.ceil(he + oe.width) < N.scrollWidth - 1,
            T.value = he > 0) : (I.value = he > 0,
            T.value = e.vertical === !0 ? Math.ceil(he + oe.height) < N.scrollHeight : Math.ceil(he + oe.width) < N.scrollWidth)
        }
        function ce(N) {
            M !== null && clearInterval(M),
            M = setInterval( () => {
                ve(N) === !0 && de()
            }
            , 5)
        }
        function Ee() {
            ce(W.value === !0 ? Number.MAX_SAFE_INTEGER : 0)
        }
        function Ie() {
            ce(W.value === !0 ? 0 : Number.MAX_SAFE_INTEGER)
        }
        function de() {
            M !== null && (clearInterval(M),
            M = null)
        }
        function be(N, oe) {
            const he = Array.prototype.filter.call(b.value.children, De => De === oe || De.matches && De.matches(".q-tab.q-focusable") === !0)
              , $e = he.length;
            if ($e === 0)
                return;
            if (N === 36)
                return $(he[0]),
                he[0].focus(),
                !0;
            if (N === 35)
                return $(he[$e - 1]),
                he[$e - 1].focus(),
                !0;
            const Be = N === (e.vertical === !0 ? 38 : 37)
              , Q = N === (e.vertical === !0 ? 40 : 39)
              , le = Be === !0 ? -1 : Q === !0 ? 1 : void 0;
            if (le !== void 0) {
                const De = S.value === !0 ? -1 : 1
                  , Qe = he.indexOf(oe) + le * De;
                return Qe >= 0 && Qe < $e && ($(he[Qe]),
                he[Qe].focus({
                    preventScroll: !0
                })),
                !0
            }
        }
        const Le = h( () => W.value === !0 ? {
            get: N => Math.abs(N.scrollLeft),
            set: (N, oe) => {
                N.scrollLeft = -oe
            }
        } : e.vertical === !0 ? {
            get: N => N.scrollTop,
            set: (N, oe) => {
                N.scrollTop = oe
            }
        } : {
            get: N => N.scrollLeft,
            set: (N, oe) => {
                N.scrollLeft = oe
            }
        });
        function ve(N) {
            const oe = b.value
              , {get: he, set: $e} = Le.value;
            let Be = !1
              , Q = he(oe);
            const le = N < Q ? -1 : 1;
            return Q += le * 5,
            Q < 0 ? (Be = !0,
            Q = 0) : (le === -1 && Q <= N || le === 1 && Q >= N) && (Be = !0,
            Q = N),
            $e(oe, Q),
            Y(),
            Be
        }
        function He(N, oe) {
            for (const he in N)
                if (N[he] !== oe[he])
                    return !1;
            return !0
        }
        function et() {
            let N = null
              , oe = {
                matchedLen: 0,
                queryDiff: 9999,
                hrefLen: 0
            };
            const he = x.filter(le => le.routeData?.hasRouterLink.value === !0)
              , {hash: $e, query: Be} = l.$route
              , Q = Object.keys(Be).length;
            for (const le of he) {
                const De = le.routeData.exact.value === !0;
                if (le.routeData[De === !0 ? "linkIsExactActive" : "linkIsActive"].value !== !0)
                    continue;
                const {hash: Qe, query: ft, matched: Ft, href: U} = le.routeData.resolvedLink.value
                  , fe = Object.keys(ft).length;
                if (De === !0) {
                    if (Qe !== $e || fe !== Q || He(Be, ft) === !1)
                        continue;
                    N = le.name.value;
                    break
                }
                if (Qe !== "" && Qe !== $e || fe !== 0 && He(ft, Be) === !1)
                    continue;
                const xe = {
                    matchedLen: Ft.length,
                    queryDiff: Q - fe,
                    hrefLen: U.length - Qe.length
                };
                if (xe.matchedLen > oe.matchedLen) {
                    N = le.name.value,
                    oe = xe;
                    continue
                } else if (xe.matchedLen !== oe.matchedLen)
                    continue;
                if (xe.queryDiff < oe.queryDiff)
                    N = le.name.value,
                    oe = xe;
                else if (xe.queryDiff !== oe.queryDiff)
                    continue;
                xe.hrefLen > oe.hrefLen && (N = le.name.value,
                oe = xe)
            }
            if (N === null && x.some(le => le.routeData === void 0 && le.name.value === k.value) === !0) {
                Ne = !1;
                return
            }
            O({
                name: N,
                setCurrent: !0
            })
        }
        function L(N) {
            if (f(),
            G.value !== !0 && d.value !== null && N.target && typeof N.target.closest == "function") {
                const oe = N.target.closest(".q-tab");
                oe && d.value.contains(oe) === !0 && (G.value = !0,
                C.value === !0 && $(oe))
            }
        }
        function se() {
            c( () => {
                G.value = !1
            }
            , 30)
        }
        function me() {
            je.avoidRouteWatcher === !1 ? g(et) : p()
        }
        function ge() {
            if (q === void 0) {
                const N = we( () => l.$route.fullPath, me);
                q = () => {
                    N(),
                    q = void 0
                }
            }
        }
        function Te(N) {
            x.push(N),
            D.value++,
            re(),
            N.routeData === void 0 || l.$route === void 0 ? g( () => {
                if (C.value === !0) {
                    const oe = k.value
                      , he = oe != null && oe !== "" ? x.find($e => $e.name.value === oe) : null;
                    he && $(he.rootRef.value)
                }
            }
            ) : (ge(),
            N.routeData.hasRouterLink.value === !0 && me())
        }
        function pe(N) {
            x.splice(x.indexOf(N), 1),
            D.value--,
            re(),
            q !== void 0 && N.routeData !== void 0 && (x.every(oe => oe.routeData === void 0) === !0 && q(),
            me())
        }
        const je = {
            currentModel: k,
            tabProps: B,
            hasFocus: G,
            hasActiveTab: P,
            registerTab: Te,
            unregisterTab: pe,
            verifyRouteModel: me,
            updateModel: O,
            onKbdNavigate: be,
            avoidRouteWatcher: !1
        };
        mo(on, je);
        function qe() {
            R !== null && clearTimeout(R),
            de(),
            q?.()
        }
        let tt, Ne;
        return $t(qe),
        na( () => {
            tt = q !== void 0,
            qe()
        }
        ),
        oa( () => {
            tt === !0 && (ge(),
            Ne = !0,
            me()),
            re()
        }
        ),
        () => V("div", {
            ref: d,
            class: j.value,
            role: "tablist",
            onFocusin: L,
            onFocusout: se
        }, [V(Gl, {
            onResize: ke
        }), V("div", {
            ref: b,
            class: K.value,
            onScroll: Y
        }, Tt(s.default)), V(Ve, {
            class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (I.value === !0 ? "" : " q-tabs__arrow--faded"),
            name: e.leftIcon || t.iconSet.tabs[e.vertical === !0 ? "up" : "left"],
            onMousedownPassive: Ee,
            onTouchstartPassive: Ee,
            onMouseupPassive: de,
            onMouseleavePassive: de,
            onTouchendPassive: de
        }), V(Ve, {
            class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (T.value === !0 ? "" : " q-tabs__arrow--faded"),
            name: e.rightIcon || t.iconSet.tabs[e.vertical === !0 ? "down" : "right"],
            onMousedownPassive: Ie,
            onTouchstartPassive: Ie,
            onMouseupPassive: de,
            onMouseleavePassive: de,
            onTouchendPassive: de
        })])
    }
})
  , pa = {
    left: !0,
    right: !0,
    up: !0,
    down: !0,
    horizontal: !0,
    vertical: !0
}
  , rr = Object.keys(pa);
pa.all = !0;
function Cl(e) {
    const s = {};
    for (const a of rr)
        e[a] === !0 && (s[a] = !0);
    return Object.keys(s).length === 0 ? pa : (s.horizontal === !0 ? s.left = s.right = !0 : s.left === !0 && s.right === !0 && (s.horizontal = !0),
    s.vertical === !0 ? s.up = s.down = !0 : s.up === !0 && s.down === !0 && (s.vertical = !0),
    s.horizontal === !0 && s.vertical === !0 && (s.all = !0),
    s)
}
const ur = ["INPUT", "TEXTAREA"];
function kl(e, s) {
    return s.event === void 0 && e.target !== void 0 && e.target.draggable !== !0 && typeof s.handler == "function" && ur.includes(e.target.nodeName.toUpperCase()) === !1 && (e.qClonedBy === void 0 || e.qClonedBy.indexOf(s.uid) === -1)
}
function Ml(e, s, a) {
    const l = al(e);
    let t, o = l.left - s.event.x, i = l.top - s.event.y, r = Math.abs(o), c = Math.abs(i);
    const f = s.direction;
    f.horizontal === !0 && f.vertical !== !0 ? t = o < 0 ? "left" : "right" : f.horizontal !== !0 && f.vertical === !0 ? t = i < 0 ? "up" : "down" : f.up === !0 && i < 0 ? (t = "up",
    r > c && (f.left === !0 && o < 0 ? t = "left" : f.right === !0 && o > 0 && (t = "right"))) : f.down === !0 && i > 0 ? (t = "down",
    r > c && (f.left === !0 && o < 0 ? t = "left" : f.right === !0 && o > 0 && (t = "right"))) : f.left === !0 && o < 0 ? (t = "left",
    r < c && (f.up === !0 && i < 0 ? t = "up" : f.down === !0 && i > 0 && (t = "down"))) : f.right === !0 && o > 0 && (t = "right",
    r < c && (f.up === !0 && i < 0 ? t = "up" : f.down === !0 && i > 0 && (t = "down")));
    let g = !1;
    if (t === void 0 && a === !1) {
        if (s.event.isFirst === !0 || s.event.lastDir === void 0)
            return {};
        t = s.event.lastDir,
        g = !0,
        t === "left" || t === "right" ? (l.left -= o,
        r = 0,
        o = 0) : (l.top -= i,
        c = 0,
        i = 0)
    }
    return {
        synthetic: g,
        payload: {
            evt: e,
            touch: s.event.mouse !== !0,
            mouse: s.event.mouse === !0,
            position: l,
            direction: t,
            isFirst: s.event.isFirst,
            isFinal: a === !0,
            duration: Date.now() - s.event.time,
            distance: {
                x: r,
                y: c
            },
            offset: {
                x: o,
                y: i
            },
            delta: {
                x: l.left - s.event.lastX,
                y: l.top - s.event.lastY
            }
        }
    }
}
let cr = 0;
const xl = sn({
    name: "touch-pan",
    beforeMount(e, {value: s, modifiers: a}) {
        if (a.mouse !== !0 && yt.has.touch !== !0)
            return;
        function l(o, i) {
            a.mouse === !0 && i === !0 ? dt(o) : (a.stop === !0 && it(o),
            a.prevent === !0 && Yt(o))
        }
        const t = {
            uid: "qvtp_" + cr++,
            handler: s,
            modifiers: a,
            direction: Cl(a),
            noop: ia,
            mouseStart(o) {
                kl(o, t) && rn(o) && (Dt(t, "temp", [[document, "mousemove", "move", "notPassiveCapture"], [document, "mouseup", "end", "passiveCapture"]]),
                t.start(o, !0))
            },
            touchStart(o) {
                if (kl(o, t)) {
                    const i = o.target;
                    Dt(t, "temp", [[i, "touchmove", "move", "notPassiveCapture"], [i, "touchcancel", "end", "passiveCapture"], [i, "touchend", "end", "passiveCapture"]]),
                    t.start(o)
                }
            },
            start(o, i) {
                if (yt.is.firefox === !0 && Zt(e, !0),
                t.lastEvt = o,
                i === !0 || a.stop === !0) {
                    if (t.direction.all !== !0 && (i !== !0 || t.modifiers.mouseAllDir !== !0 && t.modifiers.mousealldir !== !0)) {
                        const f = o.type.indexOf("mouse") !== -1 ? new MouseEvent(o.type,o) : new TouchEvent(o.type,o);
                        o.defaultPrevented === !0 && Yt(f),
                        o.cancelBubble === !0 && it(f),
                        Object.assign(f, {
                            qKeyEvent: o.qKeyEvent,
                            qClickOutside: o.qClickOutside,
                            qAnchorHandled: o.qAnchorHandled,
                            qClonedBy: o.qClonedBy === void 0 ? [t.uid] : o.qClonedBy.concat(t.uid)
                        }),
                        t.initialEvent = {
                            target: o.target,
                            event: f
                        }
                    }
                    it(o)
                }
                const {left: r, top: c} = al(o);
                t.event = {
                    x: r,
                    y: c,
                    time: Date.now(),
                    mouse: i === !0,
                    detected: !1,
                    isFirst: !0,
                    isFinal: !1,
                    lastX: r,
                    lastY: c
                }
            },
            move(o) {
                if (t.event === void 0)
                    return;
                const i = al(o)
                  , r = i.left - t.event.x
                  , c = i.top - t.event.y;
                if (r === 0 && c === 0)
                    return;
                t.lastEvt = o;
                const f = t.event.mouse === !0
                  , g = () => {
                    l(o, f);
                    let b;
                    a.preserveCursor !== !0 && a.preservecursor !== !0 && (b = document.documentElement.style.cursor || "",
                    document.documentElement.style.cursor = "grabbing"),
                    f === !0 && document.body.classList.add("no-pointer-events--children"),
                    document.body.classList.add("non-selectable"),
                    Cn(),
                    t.styleCleanup = k => {
                        if (t.styleCleanup = void 0,
                        b !== void 0 && (document.documentElement.style.cursor = b),
                        document.body.classList.remove("non-selectable"),
                        f === !0) {
                            const C = () => {
                                document.body.classList.remove("no-pointer-events--children")
                            }
                            ;
                            k !== void 0 ? setTimeout( () => {
                                C(),
                                k()
                            }
                            , 50) : C()
                        } else
                            k !== void 0 && k()
                    }
                }
                ;
                if (t.event.detected === !0) {
                    t.event.isFirst !== !0 && l(o, t.event.mouse);
                    const {payload: b, synthetic: k} = Ml(o, t, !1);
                    b !== void 0 && (t.handler(b) === !1 ? t.end(o) : (t.styleCleanup === void 0 && t.event.isFirst === !0 && g(),
                    t.event.lastX = b.position.left,
                    t.event.lastY = b.position.top,
                    t.event.lastDir = k === !0 ? void 0 : b.direction,
                    t.event.isFirst = !1));
                    return
                }
                if (t.direction.all === !0 || f === !0 && (t.modifiers.mouseAllDir === !0 || t.modifiers.mousealldir === !0)) {
                    g(),
                    t.event.detected = !0,
                    t.move(o);
                    return
                }
                const p = Math.abs(r)
                  , d = Math.abs(c);
                p !== d && (t.direction.horizontal === !0 && p > d || t.direction.vertical === !0 && p < d || t.direction.up === !0 && p < d && c < 0 || t.direction.down === !0 && p < d && c > 0 || t.direction.left === !0 && p > d && r < 0 || t.direction.right === !0 && p > d && r > 0 ? (t.event.detected = !0,
                t.move(o)) : t.end(o, !0))
            },
            end(o, i) {
                if (t.event !== void 0) {
                    if (Jt(t, "temp"),
                    yt.is.firefox === !0 && Zt(e, !1),
                    i === !0)
                        t.styleCleanup?.(),
                        t.event.detected !== !0 && t.initialEvent !== void 0 && t.initialEvent.target.dispatchEvent(t.initialEvent.event);
                    else if (t.event.detected === !0) {
                        t.event.isFirst === !0 && t.handler(Ml(o === void 0 ? t.lastEvt : o, t).payload);
                        const {payload: r} = Ml(o === void 0 ? t.lastEvt : o, t, !0)
                          , c = () => {
                            t.handler(r)
                        }
                        ;
                        t.styleCleanup !== void 0 ? t.styleCleanup(c) : c()
                    }
                    t.event = void 0,
                    t.initialEvent = void 0,
                    t.lastEvt = void 0
                }
            }
        };
        if (e.__qtouchpan = t,
        a.mouse === !0) {
            const o = a.mouseCapture === !0 || a.mousecapture === !0 ? "Capture" : "";
            Dt(t, "main", [[e, "mousedown", "mouseStart", `passive${o}`]])
        }
        yt.has.touch === !0 && Dt(t, "main", [[e, "touchstart", "touchStart", `passive${a.capture === !0 ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]])
    },
    updated(e, s) {
        const a = e.__qtouchpan;
        a !== void 0 && (s.oldValue !== s.value && (typeof value != "function" && a.end(),
        a.handler = s.value),
        a.direction = Cl(s.modifiers))
    },
    beforeUnmount(e) {
        const s = e.__qtouchpan;
        s !== void 0 && (s.event !== void 0 && s.end(),
        Jt(s, "main"),
        Jt(s, "temp"),
        yt.is.firefox === !0 && Zt(e, !1),
        s.styleCleanup?.(),
        delete e.__qtouchpan)
    }
})
  , Oa = "q-slider__marker-labels"
  , dr = e => ({
    value: e
})
  , vr = ({marker: e}) => V("div", {
    key: e.value,
    style: e.style,
    class: e.classes
}, e.label)
  , Dn = [34, 37, 40, 33, 39, 38]
  , fr = {
    ...vl,
    ...Dl,
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
  , mr = ["pan", "update:modelValue", "change"];
function gr({updateValue: e, updatePosition: s, getDragging: a, formAttrs: l}) {
    const {props: t, emit: o, slots: i, proxy: {$q: r}} = vt()
      , c = fl(t, r)
      , f = un(l)
      , g = F(!1)
      , p = F(!1)
      , d = F(!1)
      , b = F(!1)
      , k = h( () => t.vertical === !0 ? "--v" : "--h")
      , C = h( () => "-" + (t.switchLabelSide === !0 ? "switched" : "standard"))
      , I = h( () => t.vertical === !0 ? t.reverse === !0 : t.reverse !== (r.lang.rtl === !0))
      , T = h( () => isNaN(t.innerMin) === !0 || t.innerMin < t.min ? t.min : t.innerMin)
      , y = h( () => isNaN(t.innerMax) === !0 || t.innerMax > t.max ? t.max : t.innerMax)
      , x = h( () => t.disable !== !0 && t.readonly !== !0 && T.value < y.value)
      , D = h( () => {
        if (t.step === 0)
            return fe => fe;
        const U = (String(t.step).trim().split(".")[1] || "").length;
        return fe => parseFloat(fe.toFixed(U))
    }
    )
      , G = h( () => t.step === 0 ? 1 : t.step)
      , R = h( () => x.value === !0 ? t.tabindex || 0 : -1)
      , M = h( () => t.max - t.min)
      , q = h( () => y.value - T.value)
      , B = h( () => et(T.value))
      , P = h( () => et(y.value))
      , ee = h( () => t.vertical === !0 ? I.value === !0 ? "bottom" : "top" : I.value === !0 ? "right" : "left")
      , j = h( () => t.vertical === !0 ? "height" : "width")
      , K = h( () => t.vertical === !0 ? "width" : "height")
      , _ = h( () => t.vertical === !0 ? "vertical" : "horizontal")
      , S = h( () => {
        const U = {
            role: "slider",
            "aria-valuemin": T.value,
            "aria-valuemax": y.value,
            "aria-orientation": _.value,
            "data-step": t.step
        };
        return t.disable === !0 ? U["aria-disabled"] = "true" : t.readonly === !0 && (U["aria-readonly"] = "true"),
        U
    }
    )
      , W = h( () => `q-slider q-slider${k.value} q-slider--${g.value === !0 ? "" : "in"}active inline no-wrap ` + (t.vertical === !0 ? "row" : "column") + (t.disable === !0 ? " disabled" : " q-slider--enabled" + (x.value === !0 ? " q-slider--editable" : "")) + (d.value === "both" ? " q-slider--focus" : "") + (t.label || t.labelAlways === !0 ? " q-slider--label" : "") + (t.labelAlways === !0 ? " q-slider--label-always" : "") + (c.value === !0 ? " q-slider--dark" : "") + (t.dense === !0 ? " q-slider--dense q-slider--dense" + k.value : ""));
    function O(U) {
        const fe = "q-slider__" + U;
        return `${fe} ${fe}${k.value} ${fe}${k.value}${C.value}`
    }
    function re(U) {
        const fe = "q-slider__" + U;
        return `${fe} ${fe}${k.value}`
    }
    const ke = h( () => {
        const U = t.selectionColor || t.color;
        return "q-slider__selection absolute" + (U !== void 0 ? ` text-${U}` : "")
    }
    )
      , Re = h( () => re("markers") + " absolute overflow-hidden")
      , $ = h( () => re("track-container"))
      , Y = h( () => O("pin"))
      , ce = h( () => O("label"))
      , Ee = h( () => O("text-container"))
      , Ie = h( () => O("marker-labels-container") + (t.markerLabelsClass !== void 0 ? ` ${t.markerLabelsClass}` : ""))
      , de = h( () => "q-slider__track relative-position no-outline" + (t.trackColor !== void 0 ? ` bg-${t.trackColor}` : ""))
      , be = h( () => {
        const U = {
            [K.value]: t.trackSize
        };
        return t.trackImg !== void 0 && (U.backgroundImage = `url(${t.trackImg}) !important`),
        U
    }
    )
      , Le = h( () => "q-slider__inner absolute" + (t.innerTrackColor !== void 0 ? ` bg-${t.innerTrackColor}` : ""))
      , ve = h( () => {
        const U = P.value - B.value
          , fe = {
            [ee.value]: `${100 * B.value}%`,
            [j.value]: U === 0 ? "2px" : `${100 * U}%`
        };
        return t.innerTrackImg !== void 0 && (fe.backgroundImage = `url(${t.innerTrackImg}) !important`),
        fe
    }
    );
    function He(U) {
        const {min: fe, max: xe, step: Oe} = t;
        let lt = fe + U * (xe - fe);
        if (Oe > 0) {
            const ht = (lt - T.value) % Oe;
            lt += (Math.abs(ht) >= Oe / 2 ? (ht < 0 ? -1 : 1) * Oe : 0) - ht
        }
        return lt = D.value(lt),
        _t(lt, T.value, y.value)
    }
    function et(U) {
        return M.value === 0 ? 0 : (U - t.min) / M.value
    }
    function L(U, fe) {
        const xe = al(U)
          , Oe = t.vertical === !0 ? _t((xe.top - fe.top) / fe.height, 0, 1) : _t((xe.left - fe.left) / fe.width, 0, 1);
        return _t(I.value === !0 ? 1 - Oe : Oe, B.value, P.value)
    }
    const se = h( () => go(t.markers) === !0 ? t.markers : G.value)
      , me = h( () => {
        const U = []
          , fe = se.value
          , xe = t.max;
        let Oe = t.min;
        do
            U.push(Oe),
            Oe += fe;
        while (Oe < xe);
        return U.push(xe),
        U
    }
    )
      , ge = h( () => {
        const U = ` ${Oa}${k.value}-`;
        return Oa + `${U}${t.switchMarkerLabelsSide === !0 ? "switched" : "standard"}${U}${I.value === !0 ? "rtl" : "ltr"}`
    }
    )
      , Te = h( () => t.markerLabels === !1 ? null : qe(t.markerLabels).map( (U, fe) => ({
        index: fe,
        value: U.value,
        label: U.label || U.value,
        classes: ge.value + (U.classes !== void 0 ? " " + U.classes : ""),
        style: {
            ...tt(U.value),
            ...U.style || {}
        }
    })))
      , pe = h( () => ({
        markerList: Te.value,
        markerMap: Ne.value,
        classes: ge.value,
        getStyle: tt
    }))
      , je = h( () => {
        const U = q.value === 0 ? "2px" : 100 * se.value / q.value;
        return {
            ...ve.value,
            backgroundSize: t.vertical === !0 ? `2px ${U}%` : `${U}% 2px`
        }
    }
    );
    function qe(U) {
        if (U === !1)
            return null;
        if (U === !0)
            return me.value.map(dr);
        if (typeof U == "function")
            return me.value.map(xe => {
                const Oe = U(xe);
                return ql(Oe) === !0 ? {
                    ...Oe,
                    value: xe
                } : {
                    value: xe,
                    label: Oe
                }
            }
            );
        const fe = ({value: xe}) => xe >= t.min && xe <= t.max;
        return Array.isArray(U) === !0 ? U.map(xe => ql(xe) === !0 ? xe : {
            value: xe
        }).filter(fe) : Object.keys(U).map(xe => {
            const Oe = U[xe]
              , lt = Number(xe);
            return ql(Oe) === !0 ? {
                ...Oe,
                value: lt
            } : {
                value: lt,
                label: Oe
            }
        }
        ).filter(fe)
    }
    function tt(U) {
        return {
            [ee.value]: `${100 * (U - t.min) / M.value}%`
        }
    }
    const Ne = h( () => {
        if (t.markerLabels === !1)
            return null;
        const U = {};
        return Te.value.forEach(fe => {
            U[fe.value] = fe
        }
        ),
        U
    }
    );
    function N() {
        if (i["marker-label-group"] !== void 0)
            return i["marker-label-group"](pe.value);
        const U = i["marker-label"] || vr;
        return Te.value.map(fe => U({
            marker: fe,
            ...pe.value
        }))
    }
    const oe = h( () => [[xl, he, void 0, {
        [_.value]: !0,
        prevent: !0,
        stop: !0,
        mouse: !0,
        mouseAllDir: !0
    }]]);
    function he(U) {
        U.isFinal === !0 ? (b.value !== void 0 && (s(U.evt),
        U.touch === !0 && e(!0),
        b.value = void 0,
        o("pan", "end")),
        g.value = !1,
        d.value = !1) : U.isFirst === !0 ? (b.value = a(U.evt),
        s(U.evt),
        e(),
        g.value = !0,
        o("pan", "start")) : (s(U.evt),
        e())
    }
    function $e() {
        d.value = !1
    }
    function Be(U) {
        s(U, a(U)),
        e(),
        p.value = !0,
        g.value = !0,
        document.addEventListener("mouseup", Q, !0)
    }
    function Q() {
        p.value = !1,
        g.value = !1,
        e(!0),
        $e(),
        document.removeEventListener("mouseup", Q, !0)
    }
    function le(U) {
        s(U, a(U)),
        e(!0)
    }
    function De(U) {
        Dn.includes(U.keyCode) && e(!0)
    }
    function Qe(U) {
        if (t.vertical === !0)
            return null;
        const fe = r.lang.rtl !== t.reverse ? 1 - U : U;
        return {
            transform: `translateX(calc(${2 * fe - 1} * ${t.thumbSize} / 2 + ${50 - 100 * fe}%))`
        }
    }
    function ft(U) {
        const fe = h( () => p.value === !1 && (d.value === U.focusValue || d.value === "both") ? " q-slider--focus" : "")
          , xe = h( () => `q-slider__thumb q-slider__thumb${k.value} q-slider__thumb${k.value}-${I.value === !0 ? "rtl" : "ltr"} absolute non-selectable` + fe.value + (U.thumbColor.value !== void 0 ? ` text-${U.thumbColor.value}` : ""))
          , Oe = h( () => ({
            width: t.thumbSize,
            height: t.thumbSize,
            [ee.value]: `${100 * U.ratio.value}%`,
            zIndex: d.value === U.focusValue ? 2 : void 0
        }))
          , lt = h( () => U.labelColor.value !== void 0 ? ` text-${U.labelColor.value}` : "")
          , ht = h( () => Qe(U.ratio.value))
          , Ut = h( () => "q-slider__text" + (U.labelTextColor.value !== void 0 ? ` text-${U.labelTextColor.value}` : ""));
        return () => {
            const jt = [V("svg", {
                class: "q-slider__thumb-shape absolute-full",
                viewBox: "0 0 20 20",
                "aria-hidden": "true"
            }, [V("path", {
                d: t.thumbPath
            })]), V("div", {
                class: "q-slider__focus-ring fit"
            })];
            return (t.label === !0 || t.labelAlways === !0) && (jt.push(V("div", {
                class: Y.value + " absolute fit no-pointer-events" + lt.value
            }, [V("div", {
                class: ce.value,
                style: {
                    minWidth: t.thumbSize
                }
            }, [V("div", {
                class: Ee.value,
                style: ht.value
            }, [V("span", {
                class: Ut.value
            }, U.label.value)])])])),
            t.name !== void 0 && t.disable !== !0 && f(jt, "push")),
            V("div", {
                class: xe.value,
                style: Oe.value,
                ...U.getNodeData()
            }, jt)
        }
    }
    function Ft(U, fe, xe, Oe) {
        const lt = [];
        t.innerTrackColor !== "transparent" && lt.push(V("div", {
            key: "inner",
            class: Le.value,
            style: ve.value
        })),
        t.selectionColor !== "transparent" && lt.push(V("div", {
            key: "selection",
            class: ke.value,
            style: U.value
        })),
        t.markers !== !1 && lt.push(V("div", {
            key: "marker",
            class: Re.value,
            style: je.value
        })),
        Oe(lt);
        const ht = [va("div", {
            key: "trackC",
            class: $.value,
            tabindex: fe.value,
            ...xe.value
        }, [V("div", {
            class: de.value,
            style: be.value
        }, lt)], "slide", x.value, () => oe.value)];
        if (t.markerLabels !== !1) {
            const Ut = t.switchMarkerLabelsSide === !0 ? "unshift" : "push";
            ht[Ut](V("div", {
                key: "markerL",
                class: Ie.value
            }, N()))
        }
        return ht
    }
    return $t( () => {
        document.removeEventListener("mouseup", Q, !0)
    }
    ),
    {
        state: {
            active: g,
            focus: d,
            preventFocus: p,
            dragging: b,
            editable: x,
            classes: W,
            tabindex: R,
            attributes: S,
            roundValueFn: D,
            keyStep: G,
            trackLen: M,
            innerMin: T,
            innerMinRatio: B,
            innerMax: y,
            innerMaxRatio: P,
            positionProp: ee,
            sizeProp: j,
            isReversed: I
        },
        methods: {
            onActivate: Be,
            onMobileClick: le,
            onBlur: $e,
            onKeyup: De,
            getContent: Ft,
            getThumbRenderFn: ft,
            convertRatioToModel: He,
            convertModelToRatio: et,
            getDraggingRatio: L
        }
    }
}
const pr = () => ({})
  , Ct = ut({
    name: "QSlider",
    props: {
        ...fr,
        modelValue: {
            required: !0,
            default: null,
            validator: e => typeof e == "number" || e === null
        },
        labelValue: [String, Number]
    },
    emits: mr,
    setup(e, {emit: s}) {
        const {proxy: {$q: a}} = vt()
          , {state: l, methods: t} = gr({
            updateValue: k,
            updatePosition: I,
            getDragging: C,
            formAttrs: po(e)
        })
          , o = F(null)
          , i = F(0)
          , r = F(0);
        function c() {
            r.value = e.modelValue === null ? l.innerMin.value : _t(e.modelValue, l.innerMin.value, l.innerMax.value)
        }
        we( () => `${e.modelValue}|${l.innerMin.value}|${l.innerMax.value}`, c),
        c();
        const f = h( () => t.convertModelToRatio(r.value))
          , g = h( () => l.active.value === !0 ? i.value : f.value)
          , p = h( () => {
            const x = {
                [l.positionProp.value]: `${100 * l.innerMinRatio.value}%`,
                [l.sizeProp.value]: `${100 * (g.value - l.innerMinRatio.value)}%`
            };
            return e.selectionImg !== void 0 && (x.backgroundImage = `url(${e.selectionImg}) !important`),
            x
        }
        )
          , d = t.getThumbRenderFn({
            focusValue: !0,
            getNodeData: pr,
            ratio: g,
            label: h( () => e.labelValue !== void 0 ? e.labelValue : r.value),
            thumbColor: h( () => e.thumbColor || e.color),
            labelColor: h( () => e.labelColor),
            labelTextColor: h( () => e.labelTextColor)
        })
          , b = h( () => l.editable.value !== !0 ? {} : a.platform.is.mobile === !0 ? {
            onClick: t.onMobileClick
        } : {
            onMousedown: t.onActivate,
            onFocus: T,
            onBlur: t.onBlur,
            onKeydown: y,
            onKeyup: t.onKeyup
        });
        function k(x) {
            r.value !== e.modelValue && s("update:modelValue", r.value),
            x === !0 && s("change", r.value)
        }
        function C() {
            return o.value.getBoundingClientRect()
        }
        function I(x, D=l.dragging.value) {
            const G = t.getDraggingRatio(x, D);
            r.value = t.convertRatioToModel(G),
            i.value = e.snap !== !0 || e.step === 0 ? G : t.convertModelToRatio(r.value)
        }
        function T() {
            l.focus.value = !0
        }
        function y(x) {
            if (Dn.includes(x.keyCode) === !1)
                return;
            dt(x);
            const D = ([34, 33].includes(x.keyCode) ? 10 : 1) * l.keyStep.value
              , G = ([34, 37, 40].includes(x.keyCode) ? -1 : 1) * (l.isReversed.value === !0 ? -1 : 1) * (e.vertical === !0 ? -1 : 1) * D;
            r.value = _t(l.roundValueFn.value(r.value + G), l.innerMin.value, l.innerMax.value),
            k()
        }
        return () => {
            const x = t.getContent(p, l.tabindex, b, D => {
                D.push(d())
            }
            );
            return V("div", {
                ref: o,
                class: l.classes.value + (e.modelValue === null ? " q-slider--no-value" : ""),
                ...l.attributes.value,
                "aria-valuenow": e.modelValue
            }, x)
        }
    }
});
function hr(e) {
    const s = [.06, 6, 50];
    return typeof e == "string" && e.length && e.split(":").forEach( (a, l) => {
        const t = parseFloat(a);
        t && (s[l] = t)
    }
    ),
    s
}
const br = sn({
    name: "touch-swipe",
    beforeMount(e, {value: s, arg: a, modifiers: l}) {
        if (l.mouse !== !0 && yt.has.touch !== !0)
            return;
        const t = l.mouseCapture === !0 ? "Capture" : ""
          , o = {
            handler: s,
            sensitivity: hr(a),
            direction: Cl(l),
            noop: ia,
            mouseStart(i) {
                kl(i, o) && rn(i) && (Dt(o, "temp", [[document, "mousemove", "move", `notPassive${t}`], [document, "mouseup", "end", "notPassiveCapture"]]),
                o.start(i, !0))
            },
            touchStart(i) {
                if (kl(i, o)) {
                    const r = i.target;
                    Dt(o, "temp", [[r, "touchmove", "move", "notPassiveCapture"], [r, "touchcancel", "end", "notPassiveCapture"], [r, "touchend", "end", "notPassiveCapture"]]),
                    o.start(i)
                }
            },
            start(i, r) {
                yt.is.firefox === !0 && Zt(e, !0);
                const c = al(i);
                o.event = {
                    x: c.left,
                    y: c.top,
                    time: Date.now(),
                    mouse: r === !0,
                    dir: !1
                }
            },
            move(i) {
                if (o.event === void 0)
                    return;
                if (o.event.dir !== !1) {
                    dt(i);
                    return
                }
                const r = Date.now() - o.event.time;
                if (r === 0)
                    return;
                const c = al(i)
                  , f = c.left - o.event.x
                  , g = Math.abs(f)
                  , p = c.top - o.event.y
                  , d = Math.abs(p);
                if (o.event.mouse !== !0) {
                    if (g < o.sensitivity[1] && d < o.sensitivity[1]) {
                        o.end(i);
                        return
                    }
                } else if (window.getSelection().toString() !== "") {
                    o.end(i);
                    return
                } else if (g < o.sensitivity[2] && d < o.sensitivity[2])
                    return;
                const b = g / r
                  , k = d / r;
                o.direction.vertical === !0 && g < d && g < 100 && k > o.sensitivity[0] && (o.event.dir = p < 0 ? "up" : "down"),
                o.direction.horizontal === !0 && g > d && d < 100 && b > o.sensitivity[0] && (o.event.dir = f < 0 ? "left" : "right"),
                o.direction.up === !0 && g < d && p < 0 && g < 100 && k > o.sensitivity[0] && (o.event.dir = "up"),
                o.direction.down === !0 && g < d && p > 0 && g < 100 && k > o.sensitivity[0] && (o.event.dir = "down"),
                o.direction.left === !0 && g > d && f < 0 && d < 100 && b > o.sensitivity[0] && (o.event.dir = "left"),
                o.direction.right === !0 && g > d && f > 0 && d < 100 && b > o.sensitivity[0] && (o.event.dir = "right"),
                o.event.dir !== !1 ? (dt(i),
                o.event.mouse === !0 && (document.body.classList.add("no-pointer-events--children"),
                document.body.classList.add("non-selectable"),
                Cn(),
                o.styleCleanup = C => {
                    o.styleCleanup = void 0,
                    document.body.classList.remove("non-selectable");
                    const I = () => {
                        document.body.classList.remove("no-pointer-events--children")
                    }
                    ;
                    C === !0 ? setTimeout(I, 50) : I()
                }
                ),
                o.handler({
                    evt: i,
                    touch: o.event.mouse !== !0,
                    mouse: o.event.mouse,
                    direction: o.event.dir,
                    duration: r,
                    distance: {
                        x: g,
                        y: d
                    }
                })) : o.end(i)
            },
            end(i) {
                o.event !== void 0 && (Jt(o, "temp"),
                yt.is.firefox === !0 && Zt(e, !1),
                o.styleCleanup?.(!0),
                i !== void 0 && o.event.dir !== !1 && dt(i),
                o.event = void 0)
            }
        };
        if (e.__qtouchswipe = o,
        l.mouse === !0) {
            const i = l.mouseCapture === !0 || l.mousecapture === !0 ? "Capture" : "";
            Dt(o, "main", [[e, "mousedown", "mouseStart", `passive${i}`]])
        }
        yt.has.touch === !0 && Dt(o, "main", [[e, "touchstart", "touchStart", `passive${l.capture === !0 ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]])
    },
    updated(e, s) {
        const a = e.__qtouchswipe;
        a !== void 0 && (s.oldValue !== s.value && (typeof s.value != "function" && a.end(),
        a.handler = s.value),
        a.direction = Cl(s.modifiers))
    },
    beforeUnmount(e) {
        const s = e.__qtouchswipe;
        s !== void 0 && (Jt(s, "main"),
        Jt(s, "temp"),
        yt.is.firefox === !0 && Zt(e, !1),
        s.styleCleanup?.(),
        delete e.__qtouchswipe)
    }
});
function En() {
    let e = Object.create(null);
    return {
        getCache: (s, a) => e[s] === void 0 ? e[s] = typeof a == "function" ? a() : a : e[s],
        setCache(s, a) {
            e[s] = a
        },
        hasCache(s) {
            return Object.hasOwnProperty.call(e, s)
        },
        clearCache(s) {
            s !== void 0 ? delete e[s] : e = Object.create(null)
        }
    }
}
const yr = {
    name: {
        required: !0
    },
    disable: Boolean
}
  , za = {
    setup(e, {slots: s}) {
        return () => V("div", {
            class: "q-panel scroll",
            role: "tabpanel"
        }, Tt(s.default))
    }
}
  , _r = {
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
  , wr = ["update:modelValue", "beforeTransition", "transition"];
function Fr() {
    const {props: e, emit: s, proxy: a} = vt()
      , {getCache: l} = En()
      , {registerTimeout: t} = Ql();
    let o, i;
    const r = F(null)
      , c = {
        value: null
    };
    function f(_) {
        const S = e.vertical === !0 ? "up" : "left";
        q((a.$q.lang.rtl === !0 ? -1 : 1) * (_.direction === S ? 1 : -1))
    }
    const g = h( () => [[br, f, void 0, {
        horizontal: e.vertical !== !0,
        vertical: e.vertical,
        mouse: !0
    }]])
      , p = h( () => e.transitionPrev || `slide-${e.vertical === !0 ? "down" : "right"}`)
      , d = h( () => e.transitionNext || `slide-${e.vertical === !0 ? "up" : "left"}`)
      , b = h( () => `--q-transition-duration: ${e.transitionDuration}ms`)
      , k = h( () => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue))
      , C = h( () => ({
        include: e.keepAliveInclude,
        exclude: e.keepAliveExclude,
        max: e.keepAliveMax
    }))
      , I = h( () => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
    we( () => e.modelValue, (_, S) => {
        const W = D(_) === !0 ? G(_) : -1;
        i !== !0 && M(W === -1 ? 0 : W < G(S) ? -1 : 1),
        c.value !== W && (c.value = W,
        s("beforeTransition", _, S),
        t( () => {
            s("transition", _, S)
        }
        , e.transitionDuration))
    }
    );
    function T() {
        q(1)
    }
    function y() {
        q(-1)
    }
    function x(_) {
        s("update:modelValue", _)
    }
    function D(_) {
        return _ != null && _ !== ""
    }
    function G(_) {
        return o.findIndex(S => S.props.name === _ && S.props.disable !== "" && S.props.disable !== !0)
    }
    function R() {
        return o.filter(_ => _.props.disable !== "" && _.props.disable !== !0)
    }
    function M(_) {
        const S = _ !== 0 && e.animated === !0 && c.value !== -1 ? "q-transition--" + (_ === -1 ? p.value : d.value) : null;
        r.value !== S && (r.value = S)
    }
    function q(_, S=c.value) {
        let W = S + _;
        for (; W !== -1 && W < o.length; ) {
            const O = o[W];
            if (O !== void 0 && O.props.disable !== "" && O.props.disable !== !0) {
                M(_),
                i = !0,
                s("update:modelValue", O.props.name),
                setTimeout( () => {
                    i = !1
                }
                );
                return
            }
            W += _
        }
        e.infinite === !0 && o.length !== 0 && S !== -1 && S !== o.length && q(_, _ === -1 ? o.length : -1)
    }
    function B() {
        const _ = G(e.modelValue);
        return c.value !== _ && (c.value = _),
        !0
    }
    function P() {
        const _ = D(e.modelValue) === !0 && B() && o[c.value];
        return e.keepAlive === !0 ? [V(bo, C.value, [V(I.value === !0 ? l(k.value, () => ({
            ...za,
            name: k.value
        })) : za, {
            key: k.value,
            style: b.value
        }, () => _)])] : [V("div", {
            class: "q-panel scroll",
            style: b.value,
            key: k.value,
            role: "tabpanel"
        }, [_])]
    }
    function ee() {
        if (o.length !== 0)
            return e.animated === !0 ? [V(yl, {
                name: r.value
            }, P)] : P()
    }
    function j(_) {
        return o = ho(Tt(_.default, [])).filter(S => S.props !== null && S.props.slot === void 0 && D(S.props.name) === !0),
        o.length
    }
    function K() {
        return o
    }
    return Object.assign(a, {
        next: T,
        previous: y,
        goTo: x
    }),
    {
        panelIndex: c,
        panelDirectives: g,
        updatePanelsList: j,
        updatePanelIndex: B,
        getPanelContent: ee,
        getEnabledPanels: R,
        getPanels: K,
        isValidPanelName: D,
        keepAliveProps: C,
        needsUniqueKeepAliveWrapper: I,
        goToPanelByOffset: q,
        goToPanel: x,
        nextPanel: T,
        previousPanel: y
    }
}
const It = ut({
    name: "QTabPanel",
    props: yr,
    setup(e, {slots: s}) {
        return () => V("div", {
            class: "q-tab-panel",
            role: "tabpanel"
        }, Tt(s.default))
    }
})
  , ha = ut({
    name: "QTabPanels",
    props: {
        ..._r,
        ...vl
    },
    emits: wr,
    setup(e, {slots: s}) {
        const a = vt()
          , l = fl(e, a.proxy.$q)
          , {updatePanelsList: t, getPanelContent: o, panelDirectives: i} = Fr()
          , r = h( () => "q-tab-panels q-panel-parent" + (l.value === !0 ? " q-tab-panels--dark q-dark" : ""));
        return () => (t(s),
        va("div", {
            class: r.value
        }, o(), "pan", e.swipeable, () => i.value))
    }
})
  , Sr = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function Ma({r: e, g: s, b: a, a: l}) {
    const t = l !== void 0;
    if (e = Math.round(e),
    s = Math.round(s),
    a = Math.round(a),
    e > 255 || s > 255 || a > 255 || t && l > 100)
        throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
    return l = t ? (Math.round(255 * l / 100) | 256).toString(16).slice(1) : "",
    "#" + (a | s << 8 | e << 16 | 1 << 24).toString(16).slice(1) + l
}
function Ra({r: e, g: s, b: a, a: l}) {
    return `rgb${l !== void 0 ? "a" : ""}(${e},${s},${a}${l !== void 0 ? "," + l / 100 : ""})`
}
function Vn(e) {
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
function Ua({h: e, s, v: a, a: l}) {
    let t, o, i;
    s = s / 100,
    a = a / 100,
    e = e / 360;
    const r = Math.floor(e * 6)
      , c = e * 6 - r
      , f = a * (1 - s)
      , g = a * (1 - c * s)
      , p = a * (1 - (1 - c) * s);
    switch (r % 6) {
    case 0:
        t = a,
        o = p,
        i = f;
        break;
    case 1:
        t = g,
        o = a,
        i = f;
        break;
    case 2:
        t = f,
        o = a,
        i = p;
        break;
    case 3:
        t = f,
        o = g,
        i = a;
        break;
    case 4:
        t = p,
        o = f,
        i = a;
        break;
    case 5:
        t = a,
        o = f,
        i = g;
        break
    }
    return {
        r: Math.round(t * 255),
        g: Math.round(o * 255),
        b: Math.round(i * 255),
        a: l
    }
}
function Rl({r: e, g: s, b: a, a: l}) {
    const t = Math.max(e, s, a)
      , o = Math.min(e, s, a)
      , i = t - o
      , r = t === 0 ? 0 : i / t
      , c = t / 255;
    let f;
    switch (t) {
    case o:
        f = 0;
        break;
    case e:
        f = s - a + i * (s < a ? 6 : 0),
        f /= 6 * i;
        break;
    case s:
        f = a - e + i * 2,
        f /= 6 * i;
        break;
    case a:
        f = e - s + i * 4,
        f /= 6 * i;
        break
    }
    return {
        h: Math.round(f * 360),
        s: Math.round(r * 100),
        v: Math.round(c * 100),
        a: l
    }
}
function In(e) {
    if (typeof e != "string")
        throw new TypeError("Expected a string");
    const s = e.replace(/ /g, "")
      , a = Sr.exec(s);
    if (a === null)
        return Vn(s);
    const l = {
        r: Math.min(255, parseInt(a[2], 10)),
        g: Math.min(255, parseInt(a[3], 10)),
        b: Math.min(255, parseInt(a[4], 10))
    };
    if (a[1]) {
        const t = parseFloat(a[5]);
        l.a = Math.min(1, isNaN(t) === !0 ? 1 : t) * 100
    }
    return l
}
function Cr(e) {
    if (typeof e != "string" && (!e || e.r === void 0))
        throw new TypeError("Expected a string or a {r, g, b} object as color");
    const s = typeof e == "string" ? In(e) : e
      , a = s.r / 255
      , l = s.g / 255
      , t = s.b / 255
      , o = a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
      , i = l <= .03928 ? l / 12.92 : Math.pow((l + .055) / 1.055, 2.4)
      , r = t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
    return .2126 * o + .7152 * i + .0722 * r
}
const kr = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"]
  , ja = "M5 5 h10 v10 h-10 v-10 z"
  , xr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg=="
  , Al = ut({
    name: "QColor",
    props: {
        ...vl,
        ...Dl,
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
        const {proxy: a} = vt()
          , {$q: l} = a
          , t = fl(e, l)
          , {getCache: o} = En()
          , i = F(null)
          , r = F(null)
          , c = h( () => e.formatModel === "auto" ? null : e.formatModel.indexOf("hex") !== -1)
          , f = h( () => e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1)
          , g = F(e.formatModel === "auto" ? e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb")
          , p = F(e.defaultView)
          , d = F(j(e.modelValue || e.defaultValue))
          , b = h( () => e.disable !== !0 && e.readonly !== !0)
          , k = h( () => e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#"))
          , C = h( () => c.value !== null ? c.value : k.value)
          , I = h( () => ({
            type: "hidden",
            name: e.name,
            value: d.value[C.value === !0 ? "hex" : "rgb"]
        }))
          , T = un(I)
          , y = h( () => f.value !== null ? f.value : d.value.a !== void 0)
          , x = h( () => ({
            backgroundColor: d.value.rgb || "#000"
        }))
          , D = h( () => `q-color-picker__header-content q-color-picker__header-content--${(d.value.a !== void 0 && d.value.a < 65 ? !0 : Cr(d.value) > .4) ? "light" : "dark"}`)
          , G = h( () => ({
            background: `hsl(${d.value.h},100%,50%)`
        }))
          , R = h( () => ({
            top: `${100 - d.value.v}%`,
            [l.lang.rtl === !0 ? "right" : "left"]: `${d.value.s}%`
        }))
          , M = h( () => e.palette !== void 0 && e.palette.length !== 0 ? e.palette : kr)
          , q = h( () => "q-color-picker" + (e.bordered === !0 ? " q-color-picker--bordered" : "") + (e.square === !0 ? " q-color-picker--square no-border-radius" : "") + (e.flat === !0 ? " q-color-picker--flat no-shadow" : "") + (e.disable === !0 ? " disabled" : "") + (t.value === !0 ? " q-color-picker--dark q-dark" : ""))
          , B = h( () => e.disable === !0 ? {
            "aria-disabled": "true"
        } : {})
          , P = h( () => [[xl, ke, void 0, {
            prevent: !0,
            stop: !0,
            mouse: !0
        }]]);
        we( () => e.modelValue, L => {
            const se = j(L || e.defaultValue);
            se.hex !== d.value.hex && (d.value = se)
        }
        ),
        we( () => e.defaultValue, L => {
            if (!e.modelValue && L) {
                const se = j(L);
                se.hex !== d.value.hex && (d.value = se)
            }
        }
        );
        function ee(L, se) {
            d.value.hex = Ma(L),
            d.value.rgb = Ra(L),
            d.value.r = L.r,
            d.value.g = L.g,
            d.value.b = L.b,
            d.value.a = L.a;
            const me = d.value[C.value === !0 ? "hex" : "rgb"];
            s("update:modelValue", me),
            se === !0 && s("change", me)
        }
        function j(L) {
            const se = f.value !== void 0 ? f.value : e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1;
            if (typeof L != "string" || L.length === 0 || yo.anyColor(L.replace(/ /g, "")) !== !0)
                return {
                    h: 0,
                    s: 0,
                    v: 0,
                    r: 0,
                    g: 0,
                    b: 0,
                    a: se === !0 ? 100 : void 0,
                    hex: void 0,
                    rgb: void 0
                };
            const me = In(L);
            return se === !0 && me.a === void 0 && (me.a = 100),
            me.hex = Ma(me),
            me.rgb = Ra(me),
            Object.assign(me, Rl(me))
        }
        function K(L, se, me) {
            const ge = i.value;
            if (ge === null)
                return;
            const Te = ge.clientWidth
              , pe = ge.clientHeight
              , je = ge.getBoundingClientRect();
            let qe = Math.min(Te, Math.max(0, L - je.left));
            l.lang.rtl === !0 && (qe = Te - qe);
            const tt = Math.min(pe, Math.max(0, se - je.top))
              , Ne = Math.round(100 * qe / Te)
              , N = Math.round(100 * Math.max(0, Math.min(1, -(tt / pe) + 1)))
              , oe = Ua({
                h: d.value.h,
                s: Ne,
                v: N,
                a: y.value === !0 ? d.value.a : void 0
            });
            d.value.s = Ne,
            d.value.v = N,
            ee(oe, me)
        }
        function _(L, se) {
            const me = Math.round(L)
              , ge = Ua({
                h: me,
                s: d.value.s,
                v: d.value.v,
                a: y.value === !0 ? d.value.a : void 0
            });
            d.value.h = me,
            ee(ge, se)
        }
        function S(L) {
            _(L, !0)
        }
        function W(L, se, me, ge, Te) {
            if (ge !== void 0 && it(ge),
            !/^[0-9]+$/.test(L)) {
                Te === !0 && a.$forceUpdate();
                return
            }
            const pe = Math.floor(Number(L));
            if (pe < 0 || pe > me) {
                Te === !0 && a.$forceUpdate();
                return
            }
            const je = {
                r: se === "r" ? pe : d.value.r,
                g: se === "g" ? pe : d.value.g,
                b: se === "b" ? pe : d.value.b,
                a: y.value === !0 ? se === "a" ? pe : d.value.a : void 0
            };
            if (se !== "a") {
                const qe = Rl(je);
                d.value.h = qe.h,
                d.value.s = qe.s,
                d.value.v = qe.v
            }
            if (ee(je, Te),
            Te !== !0 && ge?.target.selectionEnd !== void 0) {
                const qe = ge.target.selectionEnd;
                St( () => {
                    ge.target.setSelectionRange(qe, qe)
                }
                )
            }
        }
        function O(L, se) {
            let me;
            const ge = L.target.value;
            if (it(L),
            g.value === "hex") {
                if (ge.length !== (y.value === !0 ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(ge))
                    return !0;
                me = Vn(ge)
            } else {
                let pe;
                if (ge.endsWith(")"))
                    if (y.value !== !0 && ge.startsWith("rgb(")) {
                        if (pe = ge.substring(4, ge.length - 1).split(",").map(je => parseInt(je, 10)),
                        pe.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(ge))
                            return !0
                    } else if (y.value === !0 && ge.startsWith("rgba(")) {
                        if (pe = ge.substring(5, ge.length - 1).split(","),
                        pe.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(ge))
                            return !0;
                        for (let qe = 0; qe < 3; qe++) {
                            const tt = parseInt(pe[qe], 10);
                            if (tt < 0 || tt > 255)
                                return !0;
                            pe[qe] = tt
                        }
                        const je = parseFloat(pe[3]);
                        if (je < 0 || je > 1)
                            return !0;
                        pe[3] = je
                    } else
                        return !0;
                else
                    return !0;
                if (pe[0] < 0 || pe[0] > 255 || pe[1] < 0 || pe[1] > 255 || pe[2] < 0 || pe[2] > 255 || y.value === !0 && (pe[3] < 0 || pe[3] > 1))
                    return !0;
                me = {
                    r: pe[0],
                    g: pe[1],
                    b: pe[2],
                    a: y.value === !0 ? pe[3] * 100 : void 0
                }
            }
            const Te = Rl(me);
            if (d.value.h = Te.h,
            d.value.s = Te.s,
            d.value.v = Te.v,
            ee(me, se),
            se !== !0) {
                const pe = L.target.selectionEnd;
                St( () => {
                    L.target.setSelectionRange(pe, pe)
                }
                )
            }
        }
        function re(L) {
            const se = j(L)
              , me = {
                r: se.r,
                g: se.g,
                b: se.b,
                a: se.a
            };
            me.a === void 0 && (me.a = d.value.a),
            d.value.h = se.h,
            d.value.s = se.s,
            d.value.v = se.v,
            ee(me, !0)
        }
        function ke(L) {
            L.isFinal ? K(L.position.left, L.position.top, !0) : Re(L)
        }
        const Re = _o(L => {
            K(L.position.left, L.position.top)
        }
        , 20);
        function $(L) {
            K(L.pageX - window.pageXOffset, L.pageY - window.pageYOffset, !0)
        }
        function Y(L) {
            K(L.pageX - window.pageXOffset, L.pageY - window.pageYOffset)
        }
        function ce(L) {
            r.value !== null && (r.value.$el.style.opacity = L ? 1 : 0)
        }
        function Ee(L) {
            g.value = L
        }
        function Ie() {
            const L = [];
            return e.noHeaderTabs !== !0 && L.push(V(Sl, {
                class: "q-color-picker__header-tabs",
                modelValue: g.value,
                dense: !0,
                align: "justify",
                "onUpdate:modelValue": Ee
            }, () => [V(kt, {
                label: "HEX" + (y.value === !0 ? "A" : ""),
                name: "hex",
                ripple: !1
            }), V(kt, {
                label: "RGB" + (y.value === !0 ? "A" : ""),
                name: "rgb",
                ripple: !1
            })])),
            L.push(V("div", {
                class: "q-color-picker__header-banner row flex-center no-wrap"
            }, [V("input", {
                class: "fit",
                value: d.value[g.value],
                ...b.value !== !0 ? {
                    readonly: !0
                } : {},
                ...o("topIn", {
                    onInput: se => {
                        ce(O(se) === !0)
                    }
                    ,
                    onChange: it,
                    onBlur: se => {
                        O(se, !0) === !0 && a.$forceUpdate(),
                        ce(!1)
                    }
                })
            }), V(Ve, {
                ref: r,
                class: "q-color-picker__error-icon absolute no-pointer-events",
                name: l.iconSet.type.negative
            })])),
            V("div", {
                class: "q-color-picker__header relative-position overflow-hidden"
            }, [V("div", {
                class: "q-color-picker__header-bg absolute-full"
            }), V("div", {
                class: D.value,
                style: x.value
            }, L)])
        }
        function de() {
            return V(ha, {
                modelValue: p.value,
                animated: !0
            }, () => [V(It, {
                class: "q-color-picker__spectrum-tab overflow-hidden",
                name: "spectrum"
            }, ve), V(It, {
                class: "q-pa-md q-color-picker__tune-tab",
                name: "tune"
            }, He), V(It, {
                class: "q-color-picker__palette-tab",
                name: "palette"
            }, et)])
        }
        function be(L) {
            p.value = L
        }
        function Le() {
            return V("div", {
                class: "q-color-picker__footer relative-position overflow-hidden"
            }, [V(Sl, {
                class: "absolute-full",
                modelValue: p.value,
                dense: !0,
                align: "justify",
                "onUpdate:modelValue": be
            }, () => [V(kt, {
                icon: l.iconSet.colorPicker.spectrum,
                name: "spectrum",
                ripple: !1
            }), V(kt, {
                icon: l.iconSet.colorPicker.tune,
                name: "tune",
                ripple: !1
            }), V(kt, {
                icon: l.iconSet.colorPicker.palette,
                name: "palette",
                ripple: !1
            })])])
        }
        function ve() {
            const L = {
                ref: i,
                class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (b.value !== !0 ? " readonly" : ""),
                style: G.value,
                ...b.value === !0 ? {
                    onClick: $,
                    onMousedown: Y
                } : {}
            }
              , se = [V("div", {
                style: {
                    paddingBottom: "100%"
                }
            }), V("div", {
                class: "q-color-picker__spectrum-white absolute-full"
            }), V("div", {
                class: "q-color-picker__spectrum-black absolute-full"
            }), V("div", {
                class: "absolute",
                style: R.value
            }, [d.value.hex !== void 0 ? V("div", {
                class: "q-color-picker__spectrum-circle"
            }) : null])]
              , me = [V(Ct, {
                class: "q-color-picker__hue non-selectable",
                modelValue: d.value.h,
                min: 0,
                max: 360,
                trackSize: "8px",
                innerTrackColor: "transparent",
                selectionColor: "transparent",
                readonly: b.value !== !0,
                thumbPath: ja,
                "onUpdate:modelValue": _,
                onChange: S
            })];
            return y.value === !0 && me.push(V(Ct, {
                class: "q-color-picker__alpha non-selectable",
                modelValue: d.value.a,
                min: 0,
                max: 100,
                trackSize: "8px",
                trackColor: "white",
                innerTrackColor: "transparent",
                selectionColor: "transparent",
                trackImg: xr,
                readonly: b.value !== !0,
                hideSelection: !0,
                thumbPath: ja,
                ...o("alphaSlide", {
                    "onUpdate:modelValue": ge => W(ge, "a", 100),
                    onChange: ge => W(ge, "a", 100, void 0, !0)
                })
            })),
            [va("div", L, se, "spec", b.value, () => P.value), V("div", {
                class: "q-color-picker__sliders"
            }, me)]
        }
        function He() {
            return [V("div", {
                class: "row items-center no-wrap"
            }, [V("div", "R"), V(Ct, {
                modelValue: d.value.r,
                min: 0,
                max: 255,
                color: "red",
                dark: t.value,
                readonly: b.value !== !0,
                ...o("rSlide", {
                    "onUpdate:modelValue": L => W(L, "r", 255),
                    onChange: L => W(L, "r", 255, void 0, !0)
                })
            }), V("input", {
                value: d.value.r,
                maxlength: 3,
                readonly: b.value !== !0,
                onChange: it,
                ...o("rIn", {
                    onInput: L => W(L.target.value, "r", 255, L),
                    onBlur: L => W(L.target.value, "r", 255, L, !0)
                })
            })]), V("div", {
                class: "row items-center no-wrap"
            }, [V("div", "G"), V(Ct, {
                modelValue: d.value.g,
                min: 0,
                max: 255,
                color: "green",
                dark: t.value,
                readonly: b.value !== !0,
                ...o("gSlide", {
                    "onUpdate:modelValue": L => W(L, "g", 255),
                    onChange: L => W(L, "g", 255, void 0, !0)
                })
            }), V("input", {
                value: d.value.g,
                maxlength: 3,
                readonly: b.value !== !0,
                onChange: it,
                ...o("gIn", {
                    onInput: L => W(L.target.value, "g", 255, L),
                    onBlur: L => W(L.target.value, "g", 255, L, !0)
                })
            })]), V("div", {
                class: "row items-center no-wrap"
            }, [V("div", "B"), V(Ct, {
                modelValue: d.value.b,
                min: 0,
                max: 255,
                color: "blue",
                readonly: b.value !== !0,
                dark: t.value,
                ...o("bSlide", {
                    "onUpdate:modelValue": L => W(L, "b", 255),
                    onChange: L => W(L, "b", 255, void 0, !0)
                })
            }), V("input", {
                value: d.value.b,
                maxlength: 3,
                readonly: b.value !== !0,
                onChange: it,
                ...o("bIn", {
                    onInput: L => W(L.target.value, "b", 255, L),
                    onBlur: L => W(L.target.value, "b", 255, L, !0)
                })
            })]), y.value === !0 ? V("div", {
                class: "row items-center no-wrap"
            }, [V("div", "A"), V(Ct, {
                modelValue: d.value.a,
                color: "grey",
                readonly: b.value !== !0,
                dark: t.value,
                ...o("aSlide", {
                    "onUpdate:modelValue": L => W(L, "a", 100),
                    onChange: L => W(L, "a", 100, void 0, !0)
                })
            }), V("input", {
                value: d.value.a,
                maxlength: 3,
                readonly: b.value !== !0,
                onChange: it,
                ...o("aIn", {
                    onInput: L => W(L.target.value, "a", 100, L),
                    onBlur: L => W(L.target.value, "a", 100, L, !0)
                })
            })]) : null]
        }
        function et() {
            const L = se => V("div", {
                class: "q-color-picker__cube col-auto",
                style: {
                    backgroundColor: se
                },
                ...b.value === !0 ? o("palette#" + se, {
                    onClick: () => {
                        re(se)
                    }
                }) : {}
            });
            return [V("div", {
                class: "row items-center q-color-picker__palette-rows" + (b.value === !0 ? " q-color-picker__palette-rows--editable" : "")
            }, M.value.map(L))]
        }
        return () => {
            const L = [de()];
            return e.name !== void 0 && e.disable !== !0 && T(L, "push"),
            e.noHeader !== !0 && L.unshift(Ie()),
            e.noFooter !== !0 && L.push(Le()),
            V("div", {
                class: q.value,
                ...B.value
            }, L)
        }
    }
})
  , Ar = {
    style: {
        opacity: "0.67"
    }
}
  , rl = ye({
    __name: "AppTooltip",
    props: {
        title: {
            type: String,
            required: !0
        }
    },
    setup(e) {
        const s = e
          , a = F(null)
          , l = mt();
        function t() {
            l.platform.is.mobile && a.value.toggle()
        }
        return (o, i) => (E(),
        J("span", Ar, [n(z, {
            round: "",
            flat: "",
            dense: "",
            icon: "fas fa-question-circle",
            onClick: t
        }, {
            default: u( () => [n(Vt, {
                "max-width": "320px",
                ref_key: "tooltip",
                ref: a,
                "no-parent-event": v(l).platform.is.mobile
            }, {
                default: u( () => [H(A(s.title), 1)]),
                _: 1
            }, 8, ["no-parent-event"])]),
            _: 1
        })]))
    }
})
  , Dr = {
    class: "q-gutter-y-md"
}
  , Er = {
    class: "row q-gutter-x-sm items-center"
}
  , Vr = {
    class: "col-2"
}
  , Ir = {
    class: "col-grow"
}
  , Tr = {
    class: "col-shrink q-gutter-x-sm"
}
  , $r = {
    class: "row q-gutter-sm"
}
  , Br = {
    class: "col-2"
}
  , Lr = {
    class: "col"
}
  , qr = ye({
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
        const {t: a} = Se()
          , l = e
          , t = s
          , o = F(l.duringSpinSound)
          , i = F(l.duringSpinSoundVolume)
          , r = Go()
          , c = ["no-sound", "ticking-sound", "random-music"]
          , f = h( () => !c.includes(o.value));
        we( () => o.value, y => {
            t("set-during-spin-sound", y)
        }
        ),
        we( () => i.value, y => {
            t("set-during-spin-sound-volume", y)
        }
        );
        function g(y) {
            return y.includes(".") ? a(y) : y
        }
        function p() {
            X("Wheel", "PlayDuringSpinSoundInOptionsDialog", ""),
            wl(),
            Yo(o.value, i.value)
        }
        function d() {
            X("Wheel", "StopDuringSpinSoundInOptionsDialog", ""),
            wl()
        }
        const b = Object.keys(r).map(y => ({
            label: g(y),
            children: Object.keys(r[y]).map(x => ({
                label: g(x),
                value: r[y][x].value
            }))
        }));
        function k(y) {
            return y.opt.children.some(x => x.value === I.value.value)
        }
        function C(y) {
            let x, D;
            for (let G = 0; G < b.length; G++)
                if (D = b[G].children.find(R => R.value == y),
                D) {
                    x = D.label;
                    break
                }
            return x
        }
        const I = F({
            label: C(o.value),
            value: o.value
        });
        function T(y) {
            I.value = y,
            o.value = y.value
        }
        return (y, x) => (E(),
        J("div", Dr, [m("div", Er, [m("div", Vr, A(v(a)("optionsdialog.Sound")), 1), m("div", Ir, [n(xt, {
            filled: "",
            dense: "",
            modelValue: o.value,
            "onUpdate:modelValue": x[0] || (x[0] = D => o.value = D),
            options: v(b),
            "display-value": I.value.label
        }, {
            option: u(D => [n(An, {
                "expand-separator": "",
                group: "somegroup",
                "default-opened": k(D),
                "header-class": "text-weight-bold",
                label: D.opt.label
            }, {
                default: u( () => [(E(!0),
                J(rt, null, gt(D.opt.children, G => ue((E(),
                Z(Ce, {
                    key: G.label,
                    clickable: "",
                    onClick: R => T(G),
                    class: el(I.value.value === G.value ? "selected-item" : "")
                }, {
                    default: u( () => [n(te, null, {
                        default: u( () => [n(at, {
                            innerHTML: G.label,
                            class: "q-ml-md"
                        }, null, 8, ["innerHTML"])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1032, ["onClick", "class"])), [[da], [Ze]])), 128))]),
                _: 2
            }, 1032, ["default-opened", "label"])]),
            _: 1
        }, 8, ["modelValue", "options", "display-value"])]), m("div", Tr, [n(z, {
            unelevated: "",
            onClick: p,
            disable: !f.value,
            icon: "fas fa-play"
        }, null, 8, ["disable"]), n(z, {
            unelevated: "",
            onClick: d,
            disable: !f.value,
            icon: "fas fa-stop"
        }, null, 8, ["disable"])])]), m("div", $r, [m("div", Br, A(v(a)("optionsdialog.Volume")), 1), m("div", Lr, [n(Ct, {
            modelValue: i.value,
            "onUpdate:modelValue": x[1] || (x[1] = D => i.value = D),
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
  , Pr = ot(qr, [["__scopeId", "data-v-b270e308"]])
  , Wr = {
    class: "q-gutter-y-md"
}
  , Or = {
    class: "row q-gutter-x-sm items-center"
}
  , zr = {
    class: "col-2"
}
  , Mr = {
    class: "col-grow"
}
  , Rr = {
    class: "col-shrink q-gutter-x-sm"
}
  , Ur = {
    class: "row q-gutter-sm"
}
  , jr = {
    class: "col-2"
}
  , Nr = {
    class: "col"
}
  , Hr = ye({
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
        const {t: a, locale: l} = Se()
          , t = e
          , o = s
          , i = F(t.afterSpinSound)
          , r = F(t.afterSpinSoundVolume)
          , c = Fn()
          , f = h( () => i.value !== "no-sound");
        we( () => i.value, k => {
            o("set-after-spin-sound", k)
        }
        ),
        we( () => r.value, k => {
            o("set-after-spin-sound-volume", k)
        }
        );
        function g(k) {
            return k.includes(".") ? a(k) : k
        }
        function p() {
            X("Wheel", "PlayAfterSpinSoundInOptionsDialog", ""),
            Fl(),
            i.value && Xo(i.value, t.firstTextOnWheel || a("optionsdialog.Sound"), r.value, l.value)
        }
        function d() {
            X("Wheel", "StopAfterSpinSoundInOptionsDialog", ""),
            Fl()
        }
        const b = c.map(k => ({
            value: k.value,
            label: g(k.name)
        }));
        return (k, C) => (E(),
        J("div", Wr, [m("div", Or, [m("div", zr, A(v(a)("optionsdialog.Sound")), 1), m("div", Mr, [n(xt, {
            filled: "",
            dense: "",
            modelValue: i.value,
            "onUpdate:modelValue": C[0] || (C[0] = I => i.value = I),
            options: v(b),
            "emit-value": "",
            "map-options": ""
        }, null, 8, ["modelValue", "options"])]), m("div", Rr, [n(z, {
            unelevated: "",
            onClick: p,
            disable: !f.value,
            icon: "fas fa-play"
        }, null, 8, ["disable"]), n(z, {
            unelevated: "",
            onClick: d,
            disable: !f.value,
            icon: "fas fa-stop"
        }, null, 8, ["disable"])])]), m("div", Ur, [m("div", jr, A(v(a)("optionsdialog.Volume")), 1), m("div", Nr, [n(Ct, {
            modelValue: r.value,
            "onUpdate:modelValue": C[1] || (C[1] = I => r.value = I),
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
  , Qr = ot(Hr, [["__scopeId", "data-v-7b54716c"]])
  , Kr = {
    "Default:": ["#3369E8", "#D50F25", "#EEB211", "#009925"],
    "The world stands with Ukraine": ["#0057B8", "#FFD700"]
}
  , Gr = {
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
  , Yr = {
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
  , Xr = {
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
  , Jr = {
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
  , Zr = {
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
  , eu = {
    Christmas: ["#348228", "#469A47", "#DAF7FF", "#FFFAFA", "#EB2029", "#D70816"],
    "Earth Day": ["#11205B", "#E9E9E9", "#8F705E", "#BF9269", "#F0C951", "#3C6F36"],
    Easter: ["#367D83", "#BADBD2", "#F47A97", "#F3EB9A", "#E9C05F"],
    Halloween: ["#F36A1F", "#F3861F", "#000000"],
    "New Year": ["#FFDF00", "#FFCC00", "#ECBD00", "#CC9900", "#B8860B"],
    'Saint Patrick"s Day': ["#008001", "#228B22", "#00AD43"],
    Thanksgiving: ["#FDC149", "#E7A755", "#873826", "#61782A", "#D64F06", "#BBB300"]
}
  , tu = {
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
  , lu = {
    Default: Kr,
    Nature: Gr,
    Seasons: Yr,
    Abstract: Xr,
    Flags: Jr,
    Pride: Zr,
    Holidays: eu,
    Games: tu
}
  , au = {
    width: "12",
    height: "12",
    style: {
        "margin-left": "5px"
    }
}
  , nu = ye({
    __name: "CustomizeDialogThemeSelector",
    emits: ["set-color-theme"],
    setup(e, {emit: s}) {
        const a = s
          , {t: l} = Se()
          , t = lu;
        function o(i) {
            if (!i)
                return;
            const r = i.split(",");
            if (r.length === 2) {
                const c = r[0].trim()
                  , f = r[1].trim()
                  , g = t[c][f];
                a("set-color-theme", {
                    name: i,
                    colors: g
                })
            }
        }
        return (i, r) => (E(),
        Z(At, {
            label: v(l)("optionsdialog.Apply a theme"),
            unelevated: "",
            "no-caps": "",
            color: "primary",
            style: {
                width: "200px"
            }
        }, {
            default: u( () => [n(Ot, null, {
                default: u( () => [(E(!0),
                J(rt, null, gt(Object.keys(v(t)), c => (E(),
                J(rt, {
                    key: c
                }, [n(Ce, null, {
                    default: u( () => [n(te, null, {
                        default: u( () => [n(at, null, {
                            default: u( () => [H(A(c), 1)]),
                            _: 2
                        }, 1024)]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024), (E(!0),
                J(rt, null, gt(Object.keys(v(t)[c]), f => ue((E(),
                Z(Ce, {
                    key: f,
                    value: c + ", " + f,
                    clickable: "",
                    onClick: g => o(c + ", " + f)
                }, {
                    default: u( () => [n(te, null, {
                        default: u( () => [n(at, {
                            class: "q-pl-md"
                        }, {
                            default: u( () => [H(A(f), 1)]),
                            _: 2
                        }, 1024)]),
                        _: 2
                    }, 1024), n(te, null, {
                        default: u( () => [n(at, null, {
                            default: u( () => [(E(!0),
                            J(rt, null, gt(v(t)[c][f], g => (E(),
                            J("svg", au, [m("rect", {
                                width: "12",
                                height: "12",
                                style: cl(`fill: ${g}; stroke-width: 1; stroke: #000`)
                            }, null, 4)]))), 256))]),
                            _: 2
                        }, 1024)]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1032, ["value", "onClick"])), [[Ze]])), 128))], 64))), 128))]),
                _: 1
            })]),
            _: 1
        }, 8, ["label"]))
    }
})
  , ou = {
    class: "flex gap-lg items-center"
}
  , iu = {
    class: "flex-1 flex justify-end"
}
  , su = {
    class: "flex-0"
}
  , ru = {
    class: "flex-1 flex"
}
  , Tn = ye({
    __name: "BinarySelector",
    props: wo({
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
        const s = cn(e, "modelValue")
          , a = e
          , l = h({
            get: () => s.value === a.rightValue,
            set: t => s.value = t ? a.rightValue : a.leftValue
        });
        return (t, o) => (E(),
        J("div", ou, [m("div", iu, [Kl(t.$slots, "left")]), m("div", su, [n(Fo, {
            class: "fancy-toggle",
            color: "primary",
            modelValue: l.value,
            "onUpdate:modelValue": o[0] || (o[0] = i => l.value = i)
        }, null, 8, ["modelValue"])]), m("div", ru, [Kl(t.$slots, "right")])]))
    }
})
  , uu = {
    class: "flex gap-lg items-center",
    style: {
        "margin-top": "6px"
    }
}
  , cu = {
    class: "flex-1 text-right"
}
  , du = {
    class: "flex-1"
}
  , vu = ye({
    __name: "CustomizeDialogWheelTypePicker",
    props: {
        modelValue: {
            required: !0
        },
        modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(e) {
        const {t: s} = Se()
          , a = cn(e, "modelValue");
        return (l, t) => (E(),
        J(rt, null, [n(Tn, {
            modelValue: a.value,
            "onUpdate:modelValue": t[2] || (t[2] = o => a.value = o),
            leftValue: "color",
            rightValue: "image"
        }, {
            left: u( () => [m("img", {
                src: "/images/color-wheel.png",
                width: "50",
                height: "50",
                alt: "Wheel with colored sections",
                class: "wheel-type-image shadow-1",
                onClick: t[0] || (t[0] = o => a.value = "color")
            })]),
            right: u( () => [m("img", {
                src: "/images/chocolate-chip-cookie.jpg",
                width: "50",
                height: "50",
                alt: "Wheel with cookie background",
                class: "wheel-type-image shadow-1",
                onClick: t[1] || (t[1] = o => a.value = "image")
            })]),
            _: 1
        }, 8, ["modelValue"]), m("div", uu, [m("span", cu, A(v(s)("optionsdialog.One color")), 1), m("span", du, A(v(s)("optionsdialog.Wheel background image")), 1)])], 64))
    }
})
  , fu = ot(vu, [["__scopeId", "data-v-00b6ea9f"]]);
function Gt(e, s, a, l) {
    const t = [];
    return e.forEach(o => {
        l(o) === !0 ? t.push(o) : s.push({
            failedPropValidation: a,
            file: o
        })
    }
    ),
    t
}
function pl(e) {
    e?.dataTransfer && (e.dataTransfer.dropEffect = "copy"),
    dt(e)
}
const mu = {
    multiple: Boolean,
    accept: String,
    capture: String,
    maxFileSize: [Number, String],
    maxTotalSize: [Number, String],
    maxFiles: [Number, String],
    filter: Function
}
  , gu = ["rejected"];
function pu({editable: e, dnd: s, getFileInput: a, addFilesToQueue: l}) {
    const {props: t, emit: o, proxy: i} = vt()
      , r = F(null)
      , c = h( () => t.accept !== void 0 ? t.accept.split(",").map(y => (y = y.trim(),
    y === "*" ? "*/" : (y.endsWith("/*") && (y = y.slice(0, y.length - 1)),
    y.toUpperCase()))) : null)
      , f = h( () => parseInt(t.maxFiles, 10))
      , g = h( () => parseInt(t.maxTotalSize, 10));
    function p(y) {
        if (e.value)
            if (y !== Object(y) && (y = {
                target: null
            }),
            y.target?.matches('input[type="file"]') === !0)
                y.clientX === 0 && y.clientY === 0 && it(y);
            else {
                const x = a();
                x !== y.target && x?.click(y)
            }
    }
    function d(y) {
        e.value && y && l(null, y)
    }
    function b(y, x, D, G) {
        let R = Array.from(x || y.target.files);
        const M = []
          , q = () => {
            M.length !== 0 && o("rejected", M)
        }
        ;
        if (t.accept !== void 0 && c.value.indexOf("*/") === -1 && (R = Gt(R, M, "accept", B => c.value.some(P => B.type.toUpperCase().startsWith(P) || B.name.toUpperCase().endsWith(P))),
        R.length === 0))
            return q();
        if (t.maxFileSize !== void 0) {
            const B = parseInt(t.maxFileSize, 10);
            if (R = Gt(R, M, "max-file-size", P => P.size <= B),
            R.length === 0)
                return q()
        }
        if (t.multiple !== !0 && R.length !== 0 && (R = [R[0]]),
        R.forEach(B => {
            B.__key = B.webkitRelativePath + B.lastModified + B.name + B.size
        }
        ),
        G === !0) {
            const B = D.map(P => P.__key);
            R = Gt(R, M, "duplicate", P => B.includes(P.__key) === !1)
        }
        if (R.length === 0)
            return q();
        if (t.maxTotalSize !== void 0) {
            let B = G === !0 ? D.reduce( (P, ee) => P + ee.size, 0) : 0;
            if (R = Gt(R, M, "max-total-size", P => (B += P.size,
            B <= g.value)),
            R.length === 0)
                return q()
        }
        if (typeof t.filter == "function") {
            const B = t.filter(R);
            R = Gt(R, M, "filter", P => B.includes(P))
        }
        if (t.maxFiles !== void 0) {
            let B = G === !0 ? D.length : 0;
            if (R = Gt(R, M, "max-files", () => (B++,
            B <= f.value)),
            R.length === 0)
                return q()
        }
        if (q(),
        R.length !== 0)
            return R
    }
    function k(y) {
        pl(y),
        s.value !== !0 && (s.value = !0)
    }
    function C(y) {
        dt(y),
        (y.relatedTarget !== null || yt.is.safari !== !0 ? y.relatedTarget !== r.value : document.elementsFromPoint(y.clientX, y.clientY).includes(r.value) === !1) === !0 && (s.value = !1)
    }
    function I(y) {
        pl(y);
        const x = y.dataTransfer.files;
        x.length !== 0 && l(null, x),
        s.value = !1
    }
    function T(y) {
        if (s.value === !0)
            return V("div", {
                ref: r,
                class: `q-${y}__dnd absolute-full`,
                onDragenter: pl,
                onDragover: pl,
                onDragleave: C,
                onDrop: I
            })
    }
    return Object.assign(i, {
        pickFiles: p,
        addFiles: d
    }),
    {
        pickFiles: p,
        addFiles: d,
        onDragover: k,
        onDragleave: C,
        processFiles: b,
        getDndNode: T,
        maxFilesNumber: f,
        maxTotalSizeNumber: g
    }
}
const Wt = ut({
    name: "QFile",
    inheritAttrs: !1,
    props: {
        ...So,
        ...Dl,
        ...mu,
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
    emits: [...ea, ...gu],
    setup(e, {slots: s, emit: a, attrs: l}) {
        const {proxy: t} = vt()
          , o = aa()
          , i = F(null)
          , r = F(!1)
          , c = en(e)
          , {pickFiles: f, onDragover: g, onDragleave: p, processFiles: d, getDndNode: b} = pu({
            editable: o.editable,
            dnd: r,
            getFileInput: j,
            addFilesToQueue: K
        })
          , k = Co(e)
          , C = h( () => Object(e.modelValue) === e.modelValue ? "length"in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : [])
          , I = h( () => bl(C.value))
          , T = h( () => C.value.map(O => O.name).join(", "))
          , y = h( () => zi(C.value.reduce( (O, re) => O + re.size, 0)))
          , x = h( () => ({
            totalSize: y.value,
            filesNumber: C.value.length,
            maxFiles: e.maxFiles
        }))
          , D = h( () => ({
            tabindex: -1,
            type: "file",
            title: "",
            accept: e.accept,
            capture: e.capture,
            name: c.value,
            ...l,
            id: o.targetUid.value,
            disabled: o.editable.value !== !0
        }))
          , G = h( () => "q-file q-field--auto-height" + (r.value === !0 ? " q-file--dnd" : ""))
          , R = h( () => e.multiple === !0 && e.append === !0);
        function M(O) {
            const re = C.value.slice();
            re.splice(O, 1),
            B(re)
        }
        function q(O) {
            const re = C.value.indexOf(O);
            re !== -1 && M(re)
        }
        function B(O) {
            a("update:modelValue", e.multiple === !0 ? O : O[0])
        }
        function P(O) {
            O.keyCode === 13 && Yt(O)
        }
        function ee(O) {
            (O.keyCode === 13 || O.keyCode === 32) && f(O)
        }
        function j() {
            return i.value
        }
        function K(O, re) {
            const ke = d(O, re, C.value, R.value)
              , Re = j();
            Re != null && (Re.value = ""),
            ke !== void 0 && ((e.multiple === !0 ? e.modelValue && ke.every($ => C.value.includes($)) : e.modelValue === ke[0]) || B(R.value === !0 ? C.value.concat(ke) : ke))
        }
        function _() {
            return [V("input", {
                class: [e.inputClass, "q-file__filler"],
                style: e.inputStyle
            })]
        }
        function S() {
            if (s.file !== void 0)
                return C.value.length === 0 ? _() : C.value.map( (re, ke) => s.file({
                    index: ke,
                    file: re,
                    ref: this
                }));
            if (s.selected !== void 0)
                return C.value.length === 0 ? _() : s.selected({
                    files: C.value,
                    ref: this
                });
            if (e.useChips === !0)
                return C.value.length === 0 ? _() : C.value.map( (re, ke) => V(wn, {
                    key: "file-" + ke,
                    removable: o.editable.value,
                    dense: !0,
                    textColor: e.color,
                    tabindex: e.tabindex,
                    onRemove: () => {
                        M(ke)
                    }
                }, () => V("span", {
                    class: "ellipsis",
                    textContent: re.name
                })));
            const O = e.displayValue !== void 0 ? e.displayValue : T.value;
            return O.length !== 0 ? [V("div", {
                class: e.inputClass,
                style: e.inputStyle,
                textContent: O
            })] : _()
        }
        function W() {
            const O = {
                ref: i,
                ...D.value,
                ...k.value,
                class: "q-field__input fit absolute-full cursor-pointer",
                onChange: K
            };
            return e.multiple === !0 && (O.multiple = !0),
            V("input", O)
        }
        return Object.assign(o, {
            fieldClass: G,
            emitValue: B,
            hasValue: I,
            inputRef: i,
            innerValue: C,
            floatingLabel: h( () => I.value === !0 || bl(e.displayValue)),
            computedCounter: h( () => {
                if (e.counterLabel !== void 0)
                    return e.counterLabel(x.value);
                const O = e.maxFiles;
                return `${C.value.length}${O !== void 0 ? " / " + O : ""} (${y.value})`
            }
            ),
            getControlChild: () => b("file"),
            getControl: () => {
                const O = {
                    ref: o.targetRef,
                    class: "q-field__native row items-center cursor-pointer",
                    tabindex: e.tabindex
                };
                return o.editable.value === !0 && Object.assign(O, {
                    onDragover: g,
                    onDragleave: p,
                    onKeydown: P,
                    onKeyup: ee
                }),
                V("div", O, [W()].concat(S()))
            }
        }),
        Object.assign(t, {
            removeAtIndex: M,
            removeFile: q,
            getNativeElement: () => i.value
        }),
        dn(t, "nativeEl", () => i.value),
        la(o)
    }
});
async function Ul(e, s) {
    const a = vn(`api/v1/unsplash-proxy/search/photos?per_page=30&page=${s}&query=${e}`)
      , t = await (await fetch(a)).json();
    return {
        total: t.total,
        totalPages: t.total_pages,
        page: s,
        results: t.results.map(o => ({
            url: o.urls.raw + "&q=80&fm=jpg&cs=tinysrgb&fit=crop&w=700&h=700",
            thumbnailUrl: o.urls.raw + "&q=60&fm=jpg&cs=tinysrgb&fit=crop&w=272&h=272",
            blur_hash: o.blur_hash,
            userName: o.user.name,
            userLink: o.user.links.html + "?utm_source=Wheel+of+Names&utm_medium=referral",
            photoLink: o.links.html + "?utm_source=Wheel+of+Names&utm_medium=referral",
            downloadLocationLink: o.links.download_location
        }))
    }
}
async function hu(e) {
    e = e.replace("https://api.unsplash.com", "");
    const s = vn("api/v1/unsplash-proxy" + e);
    fetch(s)
}
const bu = {
    class: "text-h6"
}
  , yu = {
    class: "row wrap images-grid"
}
  , _u = {
    class: "q-mt-xs"
}
  , wu = ["href"]
  , Fu = ["href"]
  , Su = {
    key: 0,
    style: {
        margin: "auto"
    },
    class: "q-pt-md"
}
  , Cu = {
    __name: "UnsplashDialog",
    emits: ["picked-unsplash-image"],
    setup(e, {expose: s, emit: a}) {
        const l = a
          , {t} = Se()
          , o = F(!1)
          , i = F([])
          , r = F(1)
          , c = F(1)
          , f = F({});
        function g(T) {
            f.value = T
        }
        const p = F("")
          , d = F("");
        we( () => p.value, async () => {
            if (p.value && p.value != d.value)
                try {
                    r.value = 1,
                    d.value = p.value;
                    const T = await Ul(p.value, 1);
                    i.value = T.results,
                    c.value = T.totalPages
                } catch (T) {
                    Me("SearchUnsplashError", T),
                    Ue(t, T)
                }
        }
        );
        function b() {
            o.value = !1
        }
        function k() {
            f.value?.url && (l("picked-unsplash-image", f.value.url),
            hu(f.value.downloadLocationLink),
            X("Wheel", "AddUnsplashImage")),
            o.value = !1
        }
        async function C() {
            X("Wheel", "ShowUnsplashDialog"),
            f.value = {},
            p.value = "",
            d.value = "",
            i.value = [],
            r.value = 1,
            c.value = 1,
            o.value = !0;
            const T = ko(["puppy", "kitten", "colors", "candy", "rainbow", "sunset", "umbrellas", "sunflowers", "ball pit", "balloons", "fruit", "lights", "ice cream", "golden gate bridge", "fish", "holi", "cloud", "textures", "fireworks", "colors", "lemons", "galaxy", "spiral", "tie dye"]);
            try {
                const y = await Ul(T, 1);
                i.value = y.results
            } catch (y) {
                Me("SearchUnsplashError", y),
                Ue(t, y)
            }
        }
        async function I() {
            try {
                r.value++;
                const T = await Ul(p.value, r.value);
                i.value = i.value.concat(T.results)
            } catch (T) {
                Me("SearchUnsplashError", T),
                Ue(t, T)
            }
        }
        return s({
            show: C
        }),
        (T, y) => (E(),
        Z(Xe, {
            modelValue: o.value,
            "onUpdate:modelValue": y[4] || (y[4] = x => o.value = x)
        }, {
            default: u( () => [n(Ye, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [n(Fe, {
                    class: "row items-center",
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", bu, [y[5] || (y[5] = m("i", {
                        class: "fas fa-image"
                    }, null, -1)), H(" " + A(v(t)("unsplashdialog.Search the gallery")) + " — ", 1), y[6] || (y[6] = m("a", {
                        href: "https://unsplash.com/?utm_source=Wheel+of+Names&utm_medium=referral",
                        target: "_new"
                    }, " Unsplash ", -1))]), n(pt), n(Mt)]),
                    _: 1
                }), n(Fe, {
                    class: "q-gutter-y-md"
                }, {
                    default: u( () => [n(nt, {
                        dense: "",
                        filled: "",
                        autofocus: "",
                        placeholder: v(t)("common.Search"),
                        modelValue: p.value,
                        "onUpdate:modelValue": y[0] || (y[0] = x => p.value = x),
                        debounce: 600
                    }, {
                        prepend: u( () => [n(Ve, {
                            name: "fas fa-search"
                        })]),
                        _: 1
                    }, 8, ["placeholder", "modelValue"]), m("div", yu, [(E(!0),
                    J(rt, null, gt(i.value, x => (E(),
                    J("div", {
                        class: el(["col-auto q-pa-md", x == f.value ? "selected-image" : ""]),
                        style: {
                            "text-align": "center",
                            width: "50%",
                            overflow: "hidden"
                        }
                    }, [n(si, {
                        src: x.thumbnailUrl,
                        class: "unsplash-image",
                        onClick: D => g(x)
                    }, null, 8, ["src", "onClick"]), m("div", _u, [m("a", {
                        href: x.photoLink,
                        target: "_new"
                    }, "Photo", 8, wu), y[7] || (y[7] = H(" by ")), m("a", {
                        href: x.userLink,
                        target: "_new"
                    }, A(x.userName), 9, Fu)])], 2))), 256)), i.value.length > 0 && p.value && r.value < c.value ? (E(),
                    J("div", Su, [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(t)("common.Load more"),
                        onClick: y[1] || (y[1] = x => I())
                    }, null, 8, ["label"])])) : _e("", !0)])]),
                    _: 1
                }), n(ct, {
                    align: "right"
                }, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(t)("common.Cancel"),
                        onClick: y[2] || (y[2] = x => b())
                    }, null, 8, ["label"]), n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(t)("common.OK"),
                        onClick: y[3] || (y[3] = x => k())
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
}
  , ba = ot(Cu, [["__scopeId", "data-v-33ef5296"]])
  , ku = ["src"]
  , xu = ye({
    __name: "CustomizeDialogCenterImagePicker",
    props: ["imageSrc", "centerText", "isAdvanced"],
    emits: ["set-center-gallery-image", "set-center-uploaded-image", "set-center-no-image", "set-center-text", "set-color-values"],
    setup(e, {emit: s}) {
        const {t: a} = Se()
          , l = e
          , t = s
          , o = F()
          , i = F(l.centerText)
          , r = h( () => l.imageSrc && l.imageSrc !== "/images/none.png")
          , c = F(!1);
        function f() {
            c.value = !1,
            i.value = "",
            t("set-center-no-image")
        }
        const g = F(null);
        function p() {
            g.value.pickFiles()
        }
        we( () => o.value, T => {
            c.value = !1;
            const y = new FileReader;
            y.onload = async x => {
                if (!x.target?.result)
                    return;
                X("Wheel", "UploadCenterImage", "Customize dialog");
                const D = await fn(x.target.result.toString());
                t("set-center-uploaded-image", {
                    fileName: T.name,
                    dataUri: D
                }),
                d(T.name, D)
            }
            ,
            y.readAsDataURL(T)
        }
        );
        async function d(T, y) {
            if (!l.isAdvanced) {
                const x = a("optionsdialog.Adjust colors on the wheel")
                  , D = a("optionsdialog.Your image has been uploaded", {
                    fileName: T
                });
                if (await fa(a, x, D)) {
                    X("Wheel", "SetColorsFromCustomPicture", "");
                    const G = await mn(y);
                    t("set-color-values", G)
                }
            }
        }
        function b() {
            c.value = !1,
            t("set-center-text", i.value)
        }
        const k = F(null);
        function C() {
            k.value.show(),
            c.value = !1
        }
        function I(T) {
            t("set-center-gallery-image", T)
        }
        return (T, y) => (E(),
        J("div", null, [n(At, {
            unelevated: "",
            color: "primary",
            modelValue: c.value,
            "onUpdate:modelValue": y[2] || (y[2] = x => c.value = x)
        }, {
            label: u( () => [n(Et, null, {
                default: u( () => [r.value ? (E(),
                J("img", {
                    key: 1,
                    src: e.imageSrc,
                    alt: ""
                }, null, 8, ku)) : (E(),
                Z(Ve, {
                    key: 0,
                    name: "fas fa-image"
                }))]),
                _: 1
            })]),
            default: u( () => [n(Ot, null, {
                default: u( () => [r.value ? (E(),
                Z(Ce, {
                    key: 0
                }, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        dense: "",
                        "no-caps": "",
                        color: "warning",
                        "text-color": "black",
                        icon: "fas fa-ban",
                        label: v(a)("optionsdialog.Remove image"),
                        onClick: f
                    }, null, 8, ["label"])]),
                    _: 1
                })) : _e("", !0), n(Ce, null, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        dense: "",
                        "no-caps": "",
                        color: "primary",
                        "text-color": "white",
                        icon: "fas fa-search",
                        label: v(a)("unsplashdialog.Search the gallery"),
                        onClick: C
                    }, null, 8, ["label"])]),
                    _: 1
                }), n(Ce, null, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        dense: "",
                        "no-caps": "",
                        color: "primary",
                        "text-color": "white",
                        icon: "fas fa-upload",
                        label: v(a)("optionsdialog.Upload image"),
                        onClick: p
                    }, null, 8, ["label"]), ue(n(Wt, {
                        ref_key: "filePicker",
                        ref: g,
                        accept: "image/*",
                        modelValue: o.value,
                        "onUpdate:modelValue": y[0] || (y[0] = x => o.value = x)
                    }, null, 8, ["modelValue"]), [[We, !1]])]),
                    _: 1
                }), n(Ce, null, {
                    default: u( () => [n(te, null, {
                        default: u( () => [n(nt, {
                            dense: "",
                            filled: "",
                            placeholder: v(a)("optionsdialog.Center text"),
                            onKeyup: ll(b, ["native", "enter"]),
                            maxlength: "20",
                            modelValue: i.value,
                            "onUpdate:modelValue": y[1] || (y[1] = x => i.value = x)
                        }, null, 8, ["placeholder", "modelValue"])]),
                        _: 1
                    }), n(te, {
                        side: ""
                    }, {
                        default: u( () => [n(z, {
                            unelevated: "",
                            dense: "",
                            "no-caps": "",
                            color: "primary",
                            label: v(a)("common.Save"),
                            onClick: b
                        }, null, 8, ["label"])]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]), n(ba, {
            ref_key: "unsplashDialog",
            ref: k,
            onPickedUnsplashImage: I
        }, null, 512)]))
    }
})
  , Au = [{
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
  , Du = ["src"]
  , Eu = ["src"]
  , Vu = ye({
    __name: "CustomizeDialogBackgroundImagePicker",
    props: ["imageSrc"],
    emits: ["set-background-gallery-image", "set-background-uploaded-image"],
    setup(e, {emit: s}) {
        const {t: a} = Se()
          , l = s
          , t = F(null)
          , o = F(!1)
          , i = F(null);
        function r() {
            i.value.pickFiles()
        }
        we(t, p => {
            if (!p)
                return;
            o.value = !1;
            const d = new FileReader;
            d.onload = async b => {
                if (!b.target?.result)
                    return;
                X("Wheel", "UploadBackgroundImage", "Customize dialog");
                const k = await gn(b.target.result.toString());
                l("set-background-uploaded-image", {
                    fileName: p.name,
                    dataUri: k
                })
            }
            ,
            d.readAsDataURL(p)
        }
        );
        const c = F(null);
        function f() {
            c.value.show(),
            o.value = !1
        }
        function g(p) {
            l("set-background-gallery-image", p)
        }
        return (p, d) => (E(),
        J("div", null, [n(At, {
            unelevated: "",
            color: "primary",
            modelValue: o.value,
            "onUpdate:modelValue": d[1] || (d[1] = b => o.value = b)
        }, {
            label: u( () => [n(Et, null, {
                default: u( () => [m("img", {
                    src: e.imageSrc,
                    alt: ""
                }, null, 8, Du)]),
                _: 1
            })]),
            default: u( () => [n(Ot, null, {
                default: u( () => [n(Ce, null, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        dense: "",
                        "no-caps": "",
                        color: "primary",
                        "text-color": "white",
                        icon: "fas fa-search",
                        label: v(a)("unsplashdialog.Search the gallery"),
                        onClick: f
                    }, null, 8, ["label"])]),
                    _: 1
                }), n(Ce, null, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        dense: "",
                        "no-caps": "",
                        color: "primary",
                        "text-color": "white",
                        icon: "fas fa-upload",
                        label: v(a)("optionsdialog.Upload image"),
                        onClick: r
                    }, null, 8, ["label"]), ue(n(Wt, {
                        ref_key: "filePicker",
                        ref: i,
                        accept: "image/*",
                        modelValue: t.value,
                        "onUpdate:modelValue": d[0] || (d[0] = b => t.value = b)
                    }, null, 8, ["modelValue"]), [[We, !1]])]),
                    _: 1
                }), (E(!0),
                J(rt, null, gt(v(Au), b => ue((E(),
                Z(Ce, {
                    key: b.fileName,
                    clickable: "",
                    onClick: k => g(b.fileName)
                }, {
                    default: u( () => [n(te, {
                        avatar: ""
                    }, {
                        default: u( () => [n(Et, null, {
                            default: u( () => [m("img", {
                                src: b.fileName
                            }, null, 8, Eu)]),
                            _: 2
                        }, 1024)]),
                        _: 2
                    }, 1024), n(te, null, {
                        default: u( () => [H(A(b.title), 1)]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1032, ["onClick"])), [[da], [Ze]])), 128))]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]), n(ba, {
            ref_key: "unsplashDialog",
            ref: c,
            onPickedUnsplashImage: g
        }, null, 512)]))
    }
})
  , Iu = {
    class: "q-gutter-x-md"
}
  , Tu = {
    class: "q-gutter-x-md"
}
  , $u = {
    class: "row q-gutter-x-md"
}
  , Bu = {
    class: "col-shrink"
}
  , Lu = {
    class: "col-grow"
}
  , qu = {
    class: "q-ml-md q-gutter-md"
}
  , Pu = {
    class: "q-gutter-y-md"
}
  , Wu = {
    class: "row wrap"
}
  , Ou = {
    class: "row q-gutter-sm items-center"
}
  , zu = {
    class: "col-xs-6 col-md-auto"
}
  , Mu = {
    class: "col-xs-5 col-md-2"
}
  , Ru = {
    class: "col-xs-6 col-md-auto"
}
  , Uu = {
    class: "col-xs-5 col-md-2"
}
  , ju = {
    class: "row items-center q-gutter-md"
}
  , Nu = {
    class: "col-shrink"
}
  , Hu = {
    class: "col-shrink"
}
  , Qu = {
    class: "row items-center"
}
  , Ku = {
    class: "col"
}
  , Gu = {
    class: "col"
}
  , Yu = {
    class: "col"
}
  , Xu = ye({
    __name: "CustomizeDialog",
    setup(e, {expose: s}) {
        const {t: a} = Se()
          , l = Ke()
          , t = F(!1)
          , o = F("duringSpin")
          , i = F(null)
          , r = h( () => !i.value.entries || i.value.entries.length == 0 || !i.value.entries[0]?.weight ? !1 : !!i.value.entries.find(K => K.weight != 1))
          , c = h( () => {
            if (i.value.getFirstText)
                return i.value.getFirstText()
        }
        )
          , f = h({
            get: () => i.value.type,
            set: K => {
                K === "image" ? (i.value.type = "image",
                i.value.coverImageType || (i.value.coverImageType = "gallery",
                i.value.coverImageName = "/images/chocolate-chip-cookie.jpg")) : i.value.type = "color"
            }
        })
          , g = Object.keys(xo)
          , p = h( () => {
            if (i.value.getWheelImage)
                return i.value.getWheelImage()
        }
        )
          , d = h( () => i.value.coverImageType === "gallery" ? i.value.coverImageName : i.value.coverImageType === "uploaded" ? i.value.customCoverImageDataUri : "/images/none.png");
        function b() {
            i.value = l.wheelConfig.clone(),
            D = "",
            X("Wheel", "ShowCustomizeDialog"),
            t.value = !0
        }
        function k() {
            wl(),
            Fl(),
            D && X("Wheel", "SelectedTheme", D),
            l.setWheelConfig(i.value.clone()),
            t.value = !1
        }
        function C() {
            wl(),
            Fl(),
            t.value = !1
        }
        function I(K) {
            i.value.duringSpinSound = K
        }
        function T(K) {
            i.value.duringSpinSoundVolume = K
        }
        function y(K) {
            i.value.afterSpinSound = K
        }
        function x(K) {
            i.value.afterSpinSoundVolume = K
        }
        let D = "";
        function G(K) {
            D = K.name,
            R(K.colors)
        }
        function R(K) {
            i.value.setColorValues(K)
        }
        function M() {
            i.value.pictureType = "none",
            i.value.galleryPicture = "",
            i.value.customPictureName = "",
            i.value.customPictureDataUri = "",
            i.value.centerText = ""
        }
        function q(K) {
            i.value.pictureType = "gallery",
            i.value.galleryPicture = K,
            i.value.customPictureName = "",
            i.value.customPictureDataUri = "",
            i.value.centerText = ""
        }
        function B(K) {
            i.value.pictureType = "text",
            i.value.galleryPicture = "",
            i.value.customPictureName = "",
            i.value.customPictureDataUri = "",
            i.value.centerText = K,
            i.value.customPictureDataUri = Ao(K)
        }
        function P({fileName: K, dataUri: _}) {
            i.value.setUploadedCenterImage(K, _)
        }
        function ee(K) {
            i.value.coverImageType = "gallery",
            i.value.coverImageName = K,
            i.value.customCoverImageDataUri = ""
        }
        function j({fileName: K, dataUri: _}) {
            i.value.setUploadedBackgroundImage(K, _)
        }
        return s({
            show: b
        }),
        (K, _) => (E(),
        Z(Xe, {
            modelValue: t.value,
            "onUpdate:modelValue": _[20] || (_[20] = S => t.value = S)
        }, {
            default: u( () => [n(Ye, {
                style: {
                    width: "800px"
                }
            }, {
                default: u( () => [n(Fe, {
                    style: {
                        "max-height": "74vh"
                    },
                    class: "scroll"
                }, {
                    default: u( () => [n(Sl, {
                        modelValue: o.value,
                        "onUpdate:modelValue": _[0] || (_[0] = S => o.value = S),
                        "no-caps": ""
                    }, {
                        default: u( () => [n(kt, {
                            name: "duringSpin",
                            label: v(a)("optionsdialog.During spin")
                        }, null, 8, ["label"]), n(kt, {
                            name: "afterSpin",
                            label: v(a)("optionsdialog.After spin")
                        }, null, 8, ["label"]), n(kt, {
                            name: "appearance",
                            label: v(a)("optionsdialog.Appearance")
                        }, null, 8, ["label"])]),
                        _: 1
                    }, 8, ["modelValue"]), n(ha, {
                        modelValue: o.value,
                        "onUpdate:modelValue": _[19] || (_[19] = S => o.value = S),
                        animated: ""
                    }, {
                        default: u( () => [n(It, {
                            name: "duringSpin",
                            class: "q-gutter-y-md no-scroll q-pt-lg tab-panel"
                        }, {
                            default: u( () => [n(Pr, {
                                duringSpinSound: i.value.duringSpinSound,
                                duringSpinSoundVolume: i.value.duringSpinSoundVolume,
                                onSetDuringSpinSound: I,
                                onSetDuringSpinSoundVolume: T
                            }, null, 8, ["duringSpinSound", "duringSpinSoundVolume"]), _[22] || (_[22] = m("hr", {
                                class: "low-opacity"
                            }, null, -1)), m("div", Iu, [m("span", null, [n(Je, {
                                modelValue: i.value.allowDuplicates,
                                "onUpdate:modelValue": _[1] || (_[1] = S => i.value.allowDuplicates = S),
                                label: v(a)("optionsdialog.Display duplicates")
                            }, null, 8, ["modelValue", "label"]), n(rl, {
                                title: v(a)("optionsdialog.Display every entry")
                            }, null, 8, ["title"])]), n(Je, {
                                modelValue: i.value.slowSpin,
                                "onUpdate:modelValue": _[2] || (_[2] = S => i.value.slowSpin = S),
                                label: v(a)("optionsdialog.Spin slowly")
                            }, null, 8, ["modelValue", "label"]), n(Je, {
                                modelValue: i.value.showTitle,
                                "onUpdate:modelValue": _[3] || (_[3] = S => i.value.showTitle = S),
                                label: v(a)("optionsdialog.Show title")
                            }, null, 8, ["modelValue", "label"])]), _[23] || (_[23] = m("hr", {
                                class: "low-opacity"
                            }, null, -1)), m("div", null, [m("div", null, A(v(a)("optionsdialog.Spin time (seconds)")), 1), n(Ct, {
                                modelValue: i.value.spinTime,
                                "onUpdate:modelValue": _[4] || (_[4] = S => i.value.spinTime = S),
                                min: 1,
                                max: 60,
                                label: "",
                                "marker-labels": [1, 10, 20, 30, 40, 50, 60],
                                class: "customize-slider"
                            }, null, 8, ["modelValue"])]), _[24] || (_[24] = m("hr", {
                                class: "low-opacity"
                            }, null, -1)), m("div", null, [m("b", null, A(v(a)("optionsdialog.Max names on wheel")), 1), r.value ? (E(),
                            Z(rl, {
                                key: 0,
                                title: v(a)("optionsdialog.Disabled because the entries")
                            }, null, 8, ["title"])) : _e("", !0), _[21] || (_[21] = m("br", null, null, -1)), m("small", null, A(v(a)("optionsdialog.All names in the text-box")), 1), n(Ct, {
                                modelValue: i.value.maxNames,
                                "onUpdate:modelValue": _[5] || (_[5] = S => i.value.maxNames = S),
                                min: 4,
                                max: 1e3,
                                label: "",
                                "marker-labels": [4, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3],
                                disable: r.value,
                                class: "customize-slider"
                            }, null, 8, ["modelValue", "disable"])])]),
                            _: 1
                        }), n(It, {
                            name: "afterSpin",
                            class: "q-gutter-y-md no-scroll q-pt-lg tab-panel"
                        }, {
                            default: u( () => [n(Qr, {
                                afterSpinSound: i.value.afterSpinSound,
                                afterSpinSoundVolume: i.value.afterSpinSoundVolume,
                                firstTextOnWheel: c.value,
                                onSetAfterSpinSound: y,
                                onSetAfterSpinSoundVolume: x
                            }, null, 8, ["afterSpinSound", "afterSpinSoundVolume", "firstTextOnWheel"]), _[25] || (_[25] = m("hr", {
                                class: "low-opacity"
                            }, null, -1)), m("div", Tu, [n(Je, {
                                modelValue: i.value.animateWinner,
                                "onUpdate:modelValue": _[6] || (_[6] = S => i.value.animateWinner = S),
                                label: v(a)("optionsdialog.Animate winning entry")
                            }, null, 8, ["modelValue", "label"]), n(Je, {
                                modelValue: i.value.launchConfetti,
                                "onUpdate:modelValue": _[7] || (_[7] = S => i.value.launchConfetti = S),
                                label: v(a)("optionsdialog.Launch confetti")
                            }, null, 8, ["modelValue", "label"]), n(Je, {
                                modelValue: i.value.autoRemoveWinner,
                                "onUpdate:modelValue": _[8] || (_[8] = S => i.value.autoRemoveWinner = S),
                                label: v(a)("optionsdialog.Auto-remove winner after 5 seconds")
                            }, null, 8, ["modelValue", "label"])]), _[26] || (_[26] = m("hr", {
                                class: "low-opacity"
                            }, null, -1)), m("div", null, [m("div", $u, [m("div", Bu, [n(Je, {
                                modelValue: i.value.displayWinnerDialog,
                                "onUpdate:modelValue": _[9] || (_[9] = S => i.value.displayWinnerDialog = S),
                                label: v(a)("optionsdialog.Display popup with message:")
                            }, null, 8, ["modelValue", "label"])]), m("div", Lu, [n(nt, {
                                modelValue: i.value.winnerMessage,
                                "onUpdate:modelValue": _[10] || (_[10] = S => i.value.winnerMessage = S),
                                dense: "",
                                filled: "",
                                disable: !i.value.displayWinnerDialog,
                                maxlength: "100",
                                placeholder: v(a)("common.We have a winner!")
                            }, null, 8, ["modelValue", "disable", "placeholder"])])]), m("div", qu, [n(Je, {
                                modelValue: i.value.displayRemoveButton,
                                "onUpdate:modelValue": _[11] || (_[11] = S => i.value.displayRemoveButton = S),
                                label: v(a)("optionsdialog.Display Remove button"),
                                disable: !i.value.displayWinnerDialog
                            }, null, 8, ["modelValue", "label", "disable"]), i.value.isAdvanced ? (E(),
                            Z(Je, {
                                key: 0,
                                modelValue: i.value.displayHideButton,
                                "onUpdate:modelValue": _[12] || (_[12] = S => i.value.displayHideButton = S),
                                label: v(a)("optionsdialog.Display Hide button"),
                                disable: !i.value.displayWinnerDialog
                            }, null, 8, ["modelValue", "label", "disable"])) : _e("", !0)])]), n(Je, {
                                modelValue: i.value.playClickWhenWinnerRemoved,
                                "onUpdate:modelValue": _[13] || (_[13] = S => i.value.playClickWhenWinnerRemoved = S),
                                label: v(a)("optionsdialog.Play click sound when the winner is removed")
                            }, null, 8, ["modelValue", "label"])]),
                            _: 1
                        }), n(It, {
                            name: "appearance",
                            class: "q-gutter-y-md q-pt-lg tab-panel"
                        }, {
                            default: u( () => [n(fu, {
                                modelValue: f.value,
                                "onUpdate:modelValue": _[14] || (_[14] = S => f.value = S)
                            }, null, 8, ["modelValue"]), _[28] || (_[28] = m("hr", {
                                class: "low-opacity"
                            }, null, -1)), ue(m("div", Pu, [n(nu, {
                                onSetColorTheme: G
                            }), m("div", null, [H(A(v(a)("optionsdialog.Customize colors")) + " ", 1), n(rl, {
                                title: v(a)("optionsdialog.Colors tooltip")
                            }, null, 8, ["title"])]), m("div", Wu, [(E(!0),
                            J(rt, null, gt(i.value.colorSettings, (S, W) => (E(),
                            J("div", {
                                key: W,
                                class: "col"
                            }, [n(Je, {
                                modelValue: S.enabled,
                                "onUpdate:modelValue": O => S.enabled = O
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]), n(At, {
                                "dropdown-icon": "fas fa-palette",
                                style: cl({
                                    width: "48px",
                                    background: S.color,
                                    color: v(_l)(S.color)
                                }),
                                dense: "",
                                disable: !S.enabled
                            }, {
                                default: u( () => [n(Al, {
                                    modelValue: S.color,
                                    "onUpdate:modelValue": O => S.color = O,
                                    "default-view": "palette"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                                _: 2
                            }, 1032, ["style", "disable"])]))), 128))]), _[27] || (_[27] = m("hr", {
                                class: "low-opacity"
                            }, null, -1)), m("div", Ou, [m("div", zu, A(v(a)("optionsdialog.Image in the center of the wheel")), 1), m("div", Mu, [n(xu, {
                                imageSrc: p.value,
                                centerText: i.value.centerText,
                                isAdvanced: i.value.isAdvanced,
                                onSetCenterNoImage: M,
                                onSetCenterGalleryImage: q,
                                onSetCenterText: B,
                                onSetCenterUploadedImage: P,
                                onSetColorValues: R
                            }, null, 8, ["imageSrc", "centerText", "isAdvanced"])]), m("div", Ru, A(v(a)("optionsdialog.Image size")), 1), m("div", Uu, [n(xt, {
                                filled: "",
                                dense: "",
                                modelValue: i.value.hubSize,
                                "onUpdate:modelValue": _[15] || (_[15] = S => i.value.hubSize = S),
                                options: v(g)
                            }, null, 8, ["modelValue", "options"])])])], 512), [[We, i.value.type === "color"]]), ue(m("div", null, [m("div", ju, [m("div", Nu, A(v(a)("optionsdialog.Wheel background image")), 1), m("div", Hu, [n(Vu, {
                                imageSrc: d.value,
                                onSetBackgroundGalleryImage: ee,
                                onSetBackgroundUploadedImage: j
                            }, null, 8, ["imageSrc"])])])], 512), [[We, i.value.type === "image"]]), _[29] || (_[29] = m("hr", {
                                class: "low-opacity"
                            }, null, -1)), m("div", Qu, [m("div", Ku, A(v(a)("optionsdialog.Background color")), 1), m("div", Gu, [n(At, {
                                "dropdown-icon": "fas fa-palette",
                                style: cl({
                                    background: i.value.pageBackgroundColor,
                                    color: v(_l)(i.value.pageBackgroundColor)
                                }),
                                class: "col q-mr-sm"
                            }, {
                                default: u( () => [n(Al, {
                                    modelValue: i.value.pageBackgroundColor,
                                    "onUpdate:modelValue": _[16] || (_[16] = S => i.value.pageBackgroundColor = S),
                                    "default-view": "palette"
                                }, null, 8, ["modelValue"])]),
                                _: 1
                            }, 8, ["style"])]), m("div", Yu, [n(Je, {
                                modelValue: i.value.drawOutlines,
                                "onUpdate:modelValue": _[17] || (_[17] = S => i.value.drawOutlines = S),
                                label: v(a)("optionsdialog.Contours")
                            }, null, 8, ["modelValue", "label"]), n(Je, {
                                modelValue: i.value.drawShadow,
                                "onUpdate:modelValue": _[18] || (_[18] = S => i.value.drawShadow = S),
                                label: v(a)("optionsdialog.Wheel shadow")
                            }, null, 8, ["modelValue", "label"])])])]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["modelValue"])]),
                    _: 1
                }), n(ct, {
                    align: "right"
                }, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(a)("common.Cancel"),
                        onClick: C
                    }, null, 8, ["label"]), n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(a)("common.OK"),
                        onClick: k
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , Ju = ot(Xu, [["__scopeId", "data-v-2a734a25"]])
  , Zu = {
    class: "text-h6"
}
  , ec = {
    class: "q-ma-none"
}
  , tc = ye({
    __name: "SheetLoginDialog",
    setup(e, {expose: s}) {
        const {t: a, locale: l} = Se()
          , t = wt()
          , o = F(!1);
        let i, r;
        async function c() {
            return X("Wheel", "ShowSpreadsheetDialog"),
            o.value = !0,
            new Promise( (p, d) => {
                i = p,
                r = d
            }
            )
        }
        async function f() {
            o.value = !1;
            try {
                X("Wheel", "LoginForSheetAttempt", "");
                const p = await t.logInToSheets(l.value);
                X("Wheel", "LoginForSheetSuccess", ""),
                i(p)
            } catch (p) {
                Me("LoginForSheetError", p),
                X("Wheel", "LoginForSheetFailure", nn(p)),
                Ue(a, p),
                r()
            }
        }
        function g() {
            o.value = !1,
            i()
        }
        return s({
            askUserToLogIn: c
        }),
        (p, d) => (E(),
        Z(Xe, {
            modelValue: o.value,
            "onUpdate:modelValue": d[0] || (d[0] = b => o.value = b)
        }, {
            default: u( () => [n(Ye, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [n(Fe, {
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", Zu, [d[1] || (d[1] = m("i", {
                        class: "fa-solid fa-file-arrow-up"
                    }, null, -1)), H(" " + A(v(a)("common.Import Google Spreadsheet")), 1)])]),
                    _: 1
                }), n(Fe, {
                    class: "flex f-col gap"
                }, {
                    default: u( () => [m("p", ec, A(v(a)("sheetdialog.To import sheets")), 1)]),
                    _: 1
                }), n(ct, {
                    align: "right"
                }, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(a)("common.Cancel"),
                        onClick: g
                    }, null, 8, ["label"]), m("input", {
                        type: "image",
                        style: {
                            height: "40px"
                        },
                        alt: "Sign in with Google",
                        src: "/images/btn_google_signin_dark_normal_web@2x.png",
                        onClick: f
                    })]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
});
async function lc(e) {
    return (await gapi.client.sheets.spreadsheets.get({
        spreadsheetId: e
    })).result.properties.title
}
async function ac(e) {
    return (await gapi.client.sheets.spreadsheets.get({
        spreadsheetId: e
    })).result.sheets.map(a => a.properties.title)
}
async function nc(e, s) {
    const a = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: e,
        range: s
    })
      , l = []
      , t = a.result;
    if (t.values && t.values.length > 0) {
        const o = $n(t.values)[0];
        for (let i = 0; i < o.length && i < 27; i++)
            l.push({
                value: String.fromCharCode(i + 65),
                label: o[i]
            })
    }
    return l
}
async function oc(e, s) {
    const {result: a} = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: e,
        range: s,
        valueRenderOption: "UNFORMATTED_VALUE"
    })
      , l = [];
    if (a.values && a.values.length > 0) {
        const t = $n(a.values);
        for (let o = 0; o < t[0].length && o < 27; o++)
            t.every( (i, r) => r === 0 || !isNaN(i[o]) && i[o] > 0) && l.push({
                value: String.fromCharCode(o + 65),
                label: t[0][o]
            })
    }
    return l
}
async function ic(e, s, a, l, t) {
    const o = (await sc(e, s, a, t)).filter(f => f.text).filter( (f, g) => g !== 0 || !l)
      , {parsedRows: i, rowIndiciesWithInvalidWeights: r} = rc(o);
    return {
        entries: i.map( ({text: f, weight: g}) => t ? {
            text: f,
            weight: g,
            enabled: !0
        } : {
            text: f
        }),
        rowIndiciesWithInvalidWeights: r
    }
}
async function sc(e, s, a, l) {
    const {result: t} = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: e,
        range: s + "!" + a + ":" + a
    })
      , {result: o} = l ? await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: e,
        range: s + "!" + l + ":" + l,
        valueRenderOption: "UNFORMATTED_VALUE"
    }) : {
        result: {
            values: []
        }
    };
    return t.values.map( (i, r) => ({
        text: ca(i[0] || ""),
        weight: o.values[r]?.[0] || null
    }))
}
function rc(e) {
    if (!e.some(l => l.weight))
        return {
            parsedRows: e,
            rowIndiciesWithInvalidWeights: []
        };
    const s = [];
    return {
        parsedRows: e.map( (l, t) => isNaN(l.weight) || l.weight <= 0 ? (s.push(t),
        {
            text: l.text,
            weight: 1
        }) : {
            text: l.text,
            weight: Number(l.weight)
        }),
        rowIndiciesWithInvalidWeights: s
    }
}
function $n(e) {
    return e.filter(s => s.length > 0)
}
const uc = {
    class: "text-h6"
}
  , cc = {
    class: "flex items-center"
}
  , dc = {
    class: "row items-center"
}
  , vc = {
    class: "col-4"
}
  , fc = {
    class: "col"
}
  , mc = {
    class: "row items-center"
}
  , gc = {
    class: "col-4"
}
  , pc = {
    class: "col"
}
  , hc = {
    class: "row items-center"
}
  , bc = {
    class: "col-4"
}
  , yc = {
    class: "col"
}
  , _c = {
    class: "row items-center"
}
  , wc = {
    class: "col-4"
}
  , Fc = {
    class: "col"
}
  , Sc = {
    key: 0,
    class: "row items-center"
}
  , Cc = {
    class: "col-4"
}
  , kc = {
    class: "col flex gap-sm"
}
  , xc = ye({
    __name: "SheetConfigDialog",
    setup(e, {expose: s}) {
        const {t: a} = Se()
          , l = F(!1)
          , t = F("")
          , o = F("")
          , i = F("")
          , r = F("")
          , c = F("once")
          , f = F(null)
          , g = F([])
          , p = F([])
          , d = F([])
          , b = F(!0);
        let k;
        async function C(y) {
            return l.value = !0,
            t.value = y,
            new Promise(async x => {
                k = x,
                o.value = "",
                i.value = "",
                g.value = [],
                r.value = "",
                f.value = null,
                p.value = [],
                d.value = [{
                    value: null,
                    label: a("sheetdialog.Do not import weights")
                }],
                o.value = await lc(t.value),
                g.value = await ac(t.value),
                g.value.length > 0 && g.value[0] && (i.value = g.value[0])
            }
            )
        }
        we(i, async y => {
            i.value && (p.value = [],
            d.value = [{
                value: null,
                label: a("sheetdialog.Do not import weights")
            }],
            f.value = null,
            r.value = "",
            p.value = await nc(t.value, y),
            p.value.length > 0 && p.value[0] && (r.value = p.value[0].value,
            d.value.push(...await oc(t.value, y))))
        }
        ),
        we(c, y => {
            y === "live" && (f.value = null)
        }
        );
        function I() {
            X("Wheel", "LinkSpreadsheet"),
            l.value = !1,
            k({
                tab: i.value,
                column: r.value,
                skipFirstRow: b.value,
                doLiveImport: c.value === "live",
                weightsColumn: f.value
            })
        }
        function T() {
            l.value = !1,
            k({
                tab: "",
                column: "",
                skipFirstRow: !1,
                doLiveImport: !1,
                weightsColumn: null
            })
        }
        return s({
            askUserToConfigure: C
        }),
        (y, x) => (E(),
        Z(Xe, {
            modelValue: l.value,
            "onUpdate:modelValue": x[6] || (x[6] = D => l.value = D)
        }, {
            default: u( () => [n(Ye, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [n(Fe, {
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", uc, [x[7] || (x[7] = m("i", {
                        class: "fa-solid fa-file-arrow-up"
                    }, null, -1)), H(" " + A(v(a)("common.Import Google Spreadsheet")), 1)])]),
                    _: 1
                }), n(Fe, {
                    class: "q-gutter-md"
                }, {
                    default: u( () => [n(Tn, {
                        modelValue: c.value,
                        "onUpdate:modelValue": x[0] || (x[0] = D => c.value = D),
                        leftValue: "once",
                        rightValue: "live"
                    }, {
                        left: u( () => [H(A(v(a)("sheetdialog.Import data once")), 1)]),
                        right: u( () => [m("span", cc, [H(A(v(a)("sheetdialog.Live link")) + " ", 1), n(rl, {
                            title: v(a)("sheetdialog.When you link a spreadsheet")
                        }, null, 8, ["title"])])]),
                        _: 1
                    }, 8, ["modelValue"]), m("div", dc, [m("div", vc, A(v(a)("sheetdialog.Selected spreadsheet")), 1), m("div", fc, [n(nt, {
                        dense: "",
                        filled: "",
                        modelValue: o.value,
                        "onUpdate:modelValue": x[1] || (x[1] = D => o.value = D),
                        readonly: ""
                    }, null, 8, ["modelValue"])])]), m("div", mc, [m("div", gc, A(v(a)("sheetdialog.Tab")), 1), m("div", pc, [n(xt, {
                        modelValue: i.value,
                        "onUpdate:modelValue": x[2] || (x[2] = D => i.value = D),
                        options: g.value,
                        filled: "",
                        dense: ""
                    }, null, 8, ["modelValue", "options"])])]), m("div", hc, [m("div", bc, A(v(a)("sheetdialog.Column")), 1), m("div", yc, [n(xt, {
                        modelValue: r.value,
                        "onUpdate:modelValue": x[3] || (x[3] = D => r.value = D),
                        options: p.value,
                        filled: "",
                        dense: "",
                        "emit-value": "",
                        "map-options": ""
                    }, null, 8, ["modelValue", "options"])])]), m("div", _c, [m("div", wc, A(v(a)("sheetdialog.First row")), 1), m("div", Fc, [n(Je, {
                        modelValue: b.value,
                        "onUpdate:modelValue": x[4] || (x[4] = D => b.value = D),
                        label: v(a)("sheetdialog.Is a header and should not be imported")
                    }, null, 8, ["modelValue", "label"])])]), c.value === "once" ? (E(),
                    J("div", Sc, [m("div", Cc, A(v(a)("sheetdialog.Weights column")), 1), m("div", kc, [n(xt, {
                        modelValue: f.value,
                        "onUpdate:modelValue": x[5] || (x[5] = D => f.value = D),
                        options: d.value,
                        filled: "",
                        dense: "",
                        "emit-value": "",
                        "map-options": "",
                        class: "flex-1"
                    }, null, 8, ["modelValue", "options"]), n(rl, {
                        title: v(a)("sheetdialog.Select the column containing")
                    }, null, 8, ["title"])])])) : _e("", !0)]),
                    _: 1
                }), n(ct, {
                    align: "right"
                }, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(a)("common.Cancel"),
                        onClick: T
                    }, null, 8, ["label"]), n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(a)("common.OK"),
                        disable: !i.value || !r.value,
                        onClick: I
                    }, null, 8, ["label", "disable"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , Ac = {
    class: "text-h6"
}
  , Dc = {
    class: "row items-center q-gutter-x-md"
}
  , Ec = {
    class: "col-shrink"
}
  , Vc = ["src"]
  , Ic = {
    class: "col text-h5"
}
  , Tc = {
    class: "col-shrink"
}
  , $c = {
    class: "q-gutter-x-md"
}
  , Bc = ye({
    __name: "AccountDialog",
    setup(e, {expose: s}) {
        const a = wt()
          , l = Ke()
          , t = pn()
          , {t: o} = Se()
          , i = mt()
          , r = F(!1);
        function c() {
            X("Wheel", "ShowAccountDialog"),
            r.value = !0
        }
        function f() {
            a.logOut(),
            r.value = !1
        }
        async function g() {
            const p = o("profiledropdown.Are you sure you want to delete your account");
            if (await Rt(o, p)) {
                i.loading.show();
                try {
                    X("Wheel", "DeleteAccount"),
                    await a.deleteAccount(),
                    l.resetWheel(),
                    Bt(o("profiledropdown.Your account and your saved wheels have been deleted"))
                } catch (d) {
                    Ue(o, d),
                    Me("DeleteAccountError", d)
                }
                i.loading.hide(),
                r.value = !1
            }
        }
        return s({
            show: c
        }),
        (p, d) => (E(),
        Z(Xe, {
            modelValue: r.value,
            "onUpdate:modelValue": d[4] || (d[4] = b => r.value = b)
        }, {
            default: u( () => [n(Ye, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [n(Fe, {
                    class: "row items-center",
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", Ac, [d[5] || (d[5] = m("i", {
                        class: "fas fa-user-alt"
                    }, null, -1)), H(" " + A(v(o)("common.My account")), 1)]), n(pt), n(Mt)]),
                    _: 1
                }), n(Fe, {
                    class: "q-gutter-y-md"
                }, {
                    default: u( () => [m("div", Dc, [m("div", Ec, [n(Et, {
                        size: "64px"
                    }, {
                        default: u( () => [m("img", {
                            src: v(a).userPhotoUrl,
                            alt: ""
                        }, null, 8, Vc)]),
                        _: 1
                    })]), m("div", Ic, A(v(o)("profiledropdown.Signed in as", {
                        name: v(a).userDisplayName
                    })), 1), m("div", Tc, [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: "warning",
                        "text-color": "black",
                        label: v(o)("profiledropdown.Sign out"),
                        onClick: d[0] || (d[0] = b => f())
                    }, null, 8, ["label"])])]), m("div", $c, [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(o)("profiledropdown.Export my data"),
                        onClick: d[1] || (d[1] = b => v(t).push("/export"))
                    }, null, 8, ["label"]), n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: "negative",
                        label: v(o)("profiledropdown.Delete my account"),
                        onClick: d[2] || (d[2] = b => g())
                    }, null, 8, ["label"])])]),
                    _: 1
                }), n(ct, {
                    align: "right"
                }, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(o)("common.Close"),
                        onClick: d[3] || (d[3] = b => r.value = !1)
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , Lc = {
    class: "text-h6"
}
  , qc = {
    class: "text-h6",
    style: {
        "margin-top": "16px"
    }
}
  , Pc = {
    class: "q-py-md"
}
  , Wc = {
    class: "row items-start q-gutter-md"
}
  , Oc = ["onClick"]
  , zc = {
    class: "text-h6",
    style: {
        "margin-top": "16px"
    }
}
  , Mc = {
    class: "q-py-md",
    style: {
        height: "40vh",
        overflow: "auto"
    }
}
  , Rc = {
    class: "row items-start q-gutter-md"
}
  , Uc = ["onClick"]
  , jc = {
    __name: "LanguageDialog",
    emits: ["language-changed"],
    setup(e, {expose: s, emit: a}) {
        const {t: l} = Se()
          , t = a
          , o = F(!1)
          , i = F([])
          , r = F([])
          , c = F("")
          , f = h( () => c.value.toLowerCase())
          , g = h( () => i.value.filter(b => !c.value || b.humanName.toLowerCase().includes(f.value)));
        async function p() {
            X("Wheel", "ShowLanguageDialog"),
            c.value = "",
            o.value = !0,
            i.value = Zl(),
            r.value = ka(navigator.languages);
            try {
                const b = await Do()
                  , k = [...navigator.languages, ...b];
                r.value = ka(k)
            } catch (b) {
                Me("GetLangsForMyAddressError", b)
            }
        }
        function d(b) {
            X("Wheel", "ChangeLanguageFromNewDialog"),
            t("language-changed", b),
            o.value = !1
        }
        return s({
            show: p
        }),
        (b, k) => (E(),
        Z(Xe, {
            modelValue: o.value,
            "onUpdate:modelValue": k[2] || (k[2] = C => o.value = C)
        }, {
            default: u( () => [n(Ye, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [n(Fe, {
                    class: "row items-center",
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", Lc, [k[3] || (k[3] = m("i", {
                        class: "fas fa-globe"
                    }, null, -1)), H(" " + A(v(l)("toolbar.Language")), 1)]), n(pt), n(Mt)]),
                    _: 1
                }), n(Fe, null, {
                    default: u( () => [m("div", qc, A(v(l)("languagedialog.Suggested languages")), 1), m("div", Pc, [m("div", Wc, [(E(!0),
                    J(rt, null, gt(r.value, C => (E(),
                    J("div", {
                        key: "locale.name",
                        onClick: I => d(C.name),
                        class: "language"
                    }, A(C.humanName), 9, Oc))), 128))])]), m("div", zc, A(v(l)("languagedialog.All languages")), 1), n(nt, {
                        dense: "",
                        filled: "",
                        modelValue: c.value,
                        "onUpdate:modelValue": k[0] || (k[0] = C => c.value = C),
                        placeholder: v(l)("common.Search"),
                        style: {
                            "margin-top": "16px"
                        }
                    }, null, 8, ["modelValue", "placeholder"]), m("div", Mc, [m("div", Rc, [(E(!0),
                    J(rt, null, gt(g.value, C => (E(),
                    J("div", {
                        key: "locale.name",
                        onClick: I => d(C.name),
                        class: "language"
                    }, A(C.humanName), 9, Uc))), 128))])])]),
                    _: 1
                }), n(ct, {
                    align: "right"
                }, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(l)("common.Close"),
                        onClick: k[1] || (k[1] = C => o.value = !1)
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
}
  , Nc = ot(jc, [["__scopeId", "data-v-9ca18b08"]])
  , Hc = ye({
    __name: "TitleAndDescriptionDialog",
    setup(e, {expose: s}) {
        const {t: a} = Se()
          , l = Ke()
          , t = F(!1)
          , o = h( () => l.wheelConfig)
          , i = F("")
          , r = F("");
        function c() {
            X("Wheel", "ShowTitleAndDescriptionDialog"),
            i.value = o.value.title,
            r.value = o.value.description,
            t.value = !0
        }
        function f() {
            X("Wheel", "SetTitleAndDescription"),
            l.setWheelTitle(i.value),
            l.setWheelDescription(r.value),
            g()
        }
        function g() {
            t.value = !1
        }
        function p(d) {
            d.preventDefault(),
            f()
        }
        return s({
            show: c
        }),
        (d, b) => (E(),
        Z(Xe, {
            modelValue: t.value,
            "onUpdate:modelValue": b[2] || (b[2] = k => t.value = k)
        }, {
            default: u( () => [n(Ye, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [n(Fe, {
                    class: "text-h6"
                }, {
                    default: u( () => [b[3] || (b[3] = m("i", {
                        class: "fas fa-pencil-alt"
                    }, null, -1)), H(" " + A(v(a)("common.Edit title and description")), 1)]),
                    _: 1
                }), n(Fe, {
                    class: "q-gutter-y-md"
                }, {
                    default: u( () => [n(nt, {
                        autofocus: "",
                        filled: "",
                        dense: "",
                        modelValue: i.value,
                        "onUpdate:modelValue": b[0] || (b[0] = k => i.value = k),
                        ref: "wheelTitleInput",
                        onKeydown: ll(p, ["native", "enter"]),
                        maxlength: "50",
                        placeholder: v(a)("common.Wheel title")
                    }, null, 8, ["modelValue", "placeholder"]), n(nt, {
                        filled: "",
                        dense: "",
                        type: "textarea",
                        modelValue: r.value,
                        "onUpdate:modelValue": b[1] || (b[1] = k => r.value = k),
                        onKeydown: ll(p, ["native", "enter"]),
                        maxlength: "200",
                        placeholder: v(a)("common.Wheel description")
                    }, null, 8, ["modelValue", "placeholder"])]),
                    _: 1
                }), n(ct, {
                    align: "right"
                }, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(a)("common.Cancel"),
                        onClick: g
                    }, null, 8, ["label"]), n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(a)("common.OK"),
                        onClick: f
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
})
  , Qc = ye({
    __name: "AppDialog",
    setup(e, {expose: s}) {
        const a = F(null);
        function l(i) {
            const r = a.value.getBoundingClientRect();
            (i.clientX < r.left || i.clientX > r.right || i.clientY < r.top || i.clientY > r.bottom) && o()
        }
        function t() {
            a.value.showModal()
        }
        function o() {
            a.value.close()
        }
        return s({
            show: t,
            close: o
        }),
        (i, r) => (E(),
        J("dialog", {
            onClick: l,
            onKeydown: r[0] || (r[0] = c => c.key === "Escape" && o()),
            ref_key: "dialog",
            ref: a
        }, [Kl(i.$slots, "default", {}, void 0, !0)], 544))
    }
})
  , Kc = ot(Qc, [["__scopeId", "data-v-842064af"]])
  , Gc = {
    class: "flex f-col gap"
}
  , Yc = {
    class: "flex items-center gap-sm text-h5"
}
  , Xc = {
    class: "flex f-col gap"
}
  , Jc = {
    class: "flex f-col gap-sm"
}
  , Zc = {
    class: "flex f-col"
}
  , ed = {
    class: "flex justify-end"
}
  , td = ye({
    __name: "PreferencesDialog",
    setup(e, {expose: s}) {
        const {t: a} = Se()
          , l = Vl()
          , t = F(null)
          , o = h({
            get: () => l.darkMode,
            set: f => l.setDarkMode(f)
        })
          , i = h({
            get: () => l.showWheelOverlay,
            set: f => l.setShowWheelOverlay(f)
        });
        function r() {
            t.value.show()
        }
        function c() {
            t.value.close()
        }
        return s({
            show: r
        }),
        (f, g) => (E(),
        Z(Kc, {
            ref_key: "dialog",
            ref: t
        }, {
            default: u( () => [m("div", Gc, [m("section", Yc, [g[4] || (g[4] = m("i", {
                class: "fa fa-cog fa-fw"
            }, null, -1)), m("span", null, A(v(a)("preferences.Preferences")), 1)]), m("section", Xc, [m("div", Jc, [m("div", null, A(v(a)("preferences.App color scheme")), 1), m("div", Zc, [n(Xt, {
                modelValue: o.value,
                "onUpdate:modelValue": g[0] || (g[0] = p => o.value = p),
                val: !1,
                label: v(a)("preferences.Light"),
                "checked-icon": "fas fa-sun",
                "unchecked-icon": "far fa-sun"
            }, null, 8, ["modelValue", "label"]), n(Xt, {
                modelValue: o.value,
                "onUpdate:modelValue": g[1] || (g[1] = p => o.value = p),
                val: "auto",
                label: v(a)("preferences.System"),
                "checked-icon": "fas fa-circle-half-stroke",
                "unchecked-icon": "far fa-circle"
            }, null, 8, ["modelValue", "label"]), n(Xt, {
                modelValue: o.value,
                "onUpdate:modelValue": g[2] || (g[2] = p => o.value = p),
                val: !0,
                label: v(a)("preferences.Dark"),
                "checked-icon": "fas fa-moon",
                "unchecked-icon": "far fa-moon"
            }, null, 8, ["modelValue", "label"])])]), n(Je, {
                modelValue: i.value,
                "onUpdate:modelValue": g[3] || (g[3] = p => i.value = p)
            }, {
                default: u( () => [H(A(v(a)("preferences.Show Click to spin text")), 1)]),
                _: 1
            }, 8, ["modelValue"])]), m("section", ed, [n(z, {
                "no-caps": "",
                unelevated: "",
                onClick: c
            }, {
                default: u( () => [H(A(v(a)("common.Close")), 1)]),
                _: 1
            })])])]),
            _: 1
        }, 512))
    }
})
  , ld = ye({
    __name: "SheetDataPump",
    setup(e, {expose: s}) {
        const {t: a} = Se()
          , l = Ke();
        let t = 0;
        function o(c, f, g, p, d, b) {
            t = new Date().getTime(),
            d && l.linkSheet(),
            i(c, f, g, p, d, b)
        }
        async function i(c, f, g, p, d, b) {
            if (d && (r() || !l.sheetLinked)) {
                l.unlinkSheet();
                return
            }
            try {
                const {entries: k, rowIndiciesWithInvalidWeights: C} = await ic(c, f, g, p, b);
                b ? (l.setAdvanced(!0),
                C.length > 0 && Bt(a("sheetdialog.Some weights are invalid"))) : l.wheelIsAdvanced && l.setAdvanced(!1),
                l.setEntries(k),
                d && setTimeout( () => i(c, f, g, p, d, b), 5e3)
            } catch (k) {
                l.unlinkSheet(),
                Me("ImportDataFromSpreadsheetError", k),
                Ue(a, k)
            }
        }
        function r() {
            return new Date().getTime() - t > 36e5
        }
        return s({
            start: o
        }),
        (c, f) => null
    }
})
  , ad = ["contentEditable"]
  , nd = ye({
    __name: "EntriesTextbox",
    setup(e) {
        const s = F(null)
          , a = Ke();
        we( () => a.entries, () => {
            l ? l = !1 : c(a.entries)
        }
        , {
            deep: !0
        });
        let l = !1;
        zt( () => c(a.entries));
        function t(g) {
            g instanceof InputEvent && ["formatBold", "formatItalic", "formatUnderline"].includes(g.inputType) && g.preventDefault()
        }
        function o() {
            l = !0,
            a.setEntries(r())
        }
        function i(g) {
            g.preventDefault();
            for (const p of g.dataTransfer?.files || []) {
                if (!p.type.startsWith("image/"))
                    continue;
                const d = new FileReader;
                d.onload = b => {
                    b.target?.result && (p.type === "image/gif" ? a.addImageEntry(b.target.result.toString()) : El(b.target.result.toString()).then(k => a.addImageEntry(k)))
                }
                ,
                d.readAsDataURL(p)
            }
        }
        function r() {
            return Eo(s.value.innerHTML)
        }
        function c(g) {
            s.value.innerHTML = g.map(p => hn(p)).join("")
        }
        function f(g) {
            if (g.preventDefault(),
            X("Wheel", "PasteIntoTextbox", ""),
            g.clipboardData) {
                const d = g.clipboardData.getData("text/html").match(/(<.*?src="data:image.*?>)/);
                if (d)
                    document.execCommand("insertHtml", !1, d[1]);
                else {
                    const b = g.clipboardData.getData("text/plain");
                    document.execCommand("insertText", !1, b)
                }
            }
        }
        return (g, p) => (E(),
        J("div", {
            ref_key: "editableDiv",
            ref: s,
            class: el(["basic-editor", v(a).sheetLinked ? "sheet-linked" : ""]),
            spellcheck: "false",
            autocomplete: "off",
            translate: "no",
            contentEditable: !v(a).wheelIsBusy && !v(a).sheetLinked,
            onPaste: f,
            onBeforeinput: t,
            onInput: o,
            onDrop: i,
            role: "textbox"
        }, null, 42, ad))
    }
})
  , od = ot(nd, [["__scopeId", "data-v-4e20fe94"]])
  , id = ye({
    __name: "ResultsTextbox",
    setup(e) {
        const s = Ke()
          , a = F(null);
        we( () => s.winners, l, {
            deep: !0
        }),
        zt(l);
        function l() {
            a.value.innerHTML = s.winners.map(hn).join("")
        }
        return (t, o) => (E(),
        J("div", {
            ref_key: "resultsDiv",
            ref: a,
            class: "results-textbox",
            spellcheck: "false",
            translate: "no"
        }, null, 512))
    }
})
  , sd = ot(id, [["__scopeId", "data-v-b54ed956"]])
  , rd = {
    class: "text-h6"
}
  , ud = {
    class: "row justify-center q-gutter-md"
}
  , cd = {
    class: "col-shrink"
}
  , dd = {
    class: "q-mt-md"
}
  , vd = {
    class: "col-shrink"
}
  , fd = {
    class: "q-mt-md"
}
  , md = ye({
    __name: "AddImageDialog",
    setup(e, {expose: s}) {
        const {t: a} = Se()
          , l = F(!1);
        let t;
        function o() {
            return l.value = !0,
            new Promise(c => {
                t = c
            }
            )
        }
        function i() {
            X("Wheel", "AddImageDialog", "Upload"),
            t("upload"),
            l.value = !1
        }
        function r() {
            X("Wheel", "AddImageDialog", "Search"),
            t("search"),
            l.value = !1
        }
        return s({
            show: o
        }),
        (c, f) => (E(),
        Z(Xe, {
            modelValue: l.value,
            "onUpdate:modelValue": f[0] || (f[0] = g => l.value = g)
        }, {
            default: u( () => [n(Ye, null, {
                default: u( () => [n(Fe, {
                    class: "row items-center",
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", rd, [f[1] || (f[1] = m("i", {
                        class: "fas fa-image"
                    }, null, -1)), H(" " + A(v(a)("textboxbuttons.Add image")), 1)]), n(pt), n(Mt)]),
                    _: 1
                }), n(Fe, null, {
                    default: u( () => [m("div", ud, [m("div", cd, [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        padding: "lg",
                        onClick: r
                    }, {
                        default: u( () => [m("div", null, [n(Ve, {
                            name: "fas fa-search",
                            size: "8em"
                        }), m("div", dd, A(v(a)("unsplashdialog.Search the gallery")), 1)])]),
                        _: 1
                    })]), m("div", vd, [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        padding: "lg",
                        onClick: i
                    }, {
                        default: u( () => [m("div", null, [n(Ve, {
                            name: "fas fa-upload",
                            size: "8em"
                        }), m("div", fd, A(v(a)("optionsdialog.Upload image")), 1)])]),
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
  , gd = {
    class: "q-gutter-sm q-mb-md"
}
  , pd = ye({
    __name: "EditorButtons",
    setup(e) {
        const s = Ke()
          , a = mt()
          , {t: l} = Se()
          , t = h( () => a.dark.isActive ? "grey-9" : "grey-3")
          , o = h( () => a.dark.isActive ? "grey-3" : "grey-9")
          , i = h( () => s.sheetLinked)
          , r = h( () => s.wheelIsBusy)
          , c = h( () => i.value || r.value)
          , f = h({
            get: () => s.wheelIsAdvanced === !0,
            set: P => {
                P ? Ta(l, l("textboxbuttons.Are you sure you want to switch to advanced"), async () => {
                    s.setAdvanced(P),
                    X("Wheel", "ConvertToAdvanced")
                }
                ) : Ta(l, l("textboxbuttons.Reverting will reset"), async () => {
                    s.setAdvanced(P),
                    X("Wheel", "RevertFromAdvanced")
                }
                )
            }
        })
          , g = F([])
          , p = F(null)
          , d = F(null);
        async function b() {
            p.value.pickFiles()
        }
        we( () => g.value, P => {
            if (P.length != 0) {
                X("Wheel", "UploadPieSliceImage", P.length);
                for (const ee of P) {
                    const j = new FileReader;
                    j.onload = async K => {
                        if (K.target?.result) {
                            const _ = await El(K.target.result.toString());
                            s.addImageEntry(_)
                        }
                    }
                    ,
                    j.readAsDataURL(ee)
                }
                g.value = []
            }
        }
        );
        const k = F(null)
          , C = F(null)
          , I = F(null);
        let T = "";
        async function y() {
            X("Wheel", "ShowAddImageDialog", "Center");
            const P = await I.value.show();
            P === "upload" && C.value.pickFiles(),
            P === "search" && (T = "center",
            d.value.show())
        }
        we( () => k.value, P => {
            if (!P)
                return;
            const ee = new FileReader;
            ee.onload = async j => {
                if (j.target?.result) {
                    X("Wheel", "UploadCenterImage", "Add Image button"),
                    s.saveWheelConfigForUndo();
                    const K = await fn(j.target.result.toString());
                    s.setUploadedCenterImage(P.name, K),
                    s.hubSize == "S" && s.setHubSize("L"),
                    await x(P.name, K),
                    Yl(l, l("textboxbuttons.Updated the wheel center image"), () => {
                        X("Wheel", "UndoUploadCenterImage"),
                        s.undoWheelConfigChange()
                    }
                    )
                }
            }
            ,
            ee.readAsDataURL(P),
            k.value = null
        }
        );
        async function x(P, ee) {
            if (!f.value)
                return new Promise(async j => {
                    if (await fa(l, l("optionsdialog.Adjust colors on the wheel"), l("optionsdialog.Your image has been uploaded", {
                        fileName: P
                    }))) {
                        X("Wheel", "SetColorsFromCustomPicture", "");
                        const K = await mn(ee);
                        s.setColorValues(K),
                        j()
                    }
                }
                )
        }
        const D = F(null)
          , G = F(null);
        async function R() {
            X("Wheel", "ShowAddImageDialog", "Background");
            const P = await I.value.show();
            P === "upload" && G.value.pickFiles(),
            P === "search" && (T = "background",
            d.value.show())
        }
        we( () => D.value, P => {
            if (!P)
                return;
            const ee = new FileReader;
            ee.onload = async function(j) {
                if (j.target?.result) {
                    X("Wheel", "UploadBackgroundImage", "Add Image button"),
                    s.saveWheelConfigForUndo();
                    const K = await gn(j.target.result.toString());
                    s.setUploadedBackgroundImage(P.name, K),
                    Yl(l, l("textboxbuttons.Updated the wheel background image"), () => {
                        X("Wheel", "UndoUploadBackgroundImage"),
                        s.undoWheelConfigChange()
                    }
                    )
                }
            }
            ,
            ee.readAsDataURL(P),
            D.value = null
        }
        );
        function M() {
            try {
                X("Wheel", "ShuffleEntries", ""),
                s.shuffleEntries()
            } catch (P) {
                Ue(l, P),
                Me("ShuffleEntriesError", P)
            }
        }
        function q() {
            X("Wheel", "SortEntries", ""),
            s.sortEntries()
        }
        function B(P) {
            T === "background" && s.setGalleryBackgroundImage(P),
            T === "center" && (s.setGalleryCenterImage(P),
            s.hubSize === "S" && s.setHubSize("L"))
        }
        return (P, ee) => (E(),
        J("div", gd, [n(z, {
            size: "12px",
            padding: "xs sm",
            unelevated: "",
            "no-caps": "",
            color: t.value,
            "text-color": o.value,
            icon: "fas fa-random",
            label: v(l)("textboxbuttons.Shuffle"),
            disable: c.value,
            onClick: M
        }, null, 8, ["color", "text-color", "label", "disable"]), n(z, {
            size: "12px",
            padding: "xs sm",
            unelevated: "",
            "no-caps": "",
            color: t.value,
            "text-color": o.value,
            icon: "fas fa-sort-alpha-up",
            label: v(l)("textboxbuttons.Sort"),
            disable: c.value,
            onClick: q
        }, null, 8, ["color", "text-color", "label", "disable"]), n(At, {
            dense: "",
            size: "12px",
            padding: "xs sm",
            unelevated: "",
            "no-caps": "",
            color: t.value,
            "text-color": o.value,
            icon: "fas fa-image",
            label: v(l)("textboxbuttons.Add image"),
            disable: c.value
        }, {
            default: u( () => [n(Ot, null, {
                default: u( () => [ue((E(),
                Z(Ce, {
                    clickable: "",
                    onClick: R
                }, {
                    default: u( () => [n(te, {
                        avatar: ""
                    }, {
                        default: u( () => [n(Et, null, {
                            default: u( () => ee[4] || (ee[4] = [m("img", {
                                src: "/images/background-image-icon.png",
                                alt: ""
                            }, null, -1)])),
                            _: 1
                        })]),
                        _: 1
                    }), n(te, null, {
                        default: u( () => [n(at, null, {
                            default: u( () => [H(A(v(l)("textboxbuttons.Add background image")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                })), [[Ze]]), ue((E(),
                Z(Ce, {
                    clickable: "",
                    onClick: y
                }, {
                    default: u( () => [n(te, {
                        avatar: ""
                    }, {
                        default: u( () => [n(Et, null, {
                            default: u( () => ee[5] || (ee[5] = [m("img", {
                                src: "/images/center-image-icon.png",
                                alt: ""
                            }, null, -1)])),
                            _: 1
                        })]),
                        _: 1
                    }), n(te, null, {
                        default: u( () => [n(at, null, {
                            default: u( () => [H(A(v(l)("textboxbuttons.Add center image")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                })), [[Ze]]), ue((E(),
                Z(Ce, {
                    clickable: "",
                    onClick: b
                }, {
                    default: u( () => [n(te, {
                        avatar: ""
                    }, {
                        default: u( () => [n(Et, null, {
                            default: u( () => ee[6] || (ee[6] = [m("img", {
                                src: "/images/slice-image-icon.png",
                                alt: ""
                            }, null, -1)])),
                            _: 1
                        })]),
                        _: 1
                    }), n(te, null, {
                        default: u( () => [n(at, null, {
                            default: u( () => [H(A(v(l)("textboxbuttons.Add image as entry")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                })), [[Ze]])]),
                _: 1
            })]),
            _: 1
        }, 8, ["color", "text-color", "label", "disable"]), ue(n(Wt, {
            ref_key: "sliceImagePicker",
            ref: p,
            multiple: "",
            accept: "image/*",
            modelValue: g.value,
            "onUpdate:modelValue": ee[0] || (ee[0] = j => g.value = j)
        }, null, 8, ["modelValue"]), [[We, !1]]), ue(n(Wt, {
            ref_key: "centerImagePicker",
            ref: C,
            accept: "image/*",
            modelValue: k.value,
            "onUpdate:modelValue": ee[1] || (ee[1] = j => k.value = j)
        }, null, 8, ["modelValue"]), [[We, !1]]), ue(n(Wt, {
            ref_key: "backgroundImagePicker",
            ref: G,
            accept: "image/*",
            modelValue: D.value,
            "onUpdate:modelValue": ee[2] || (ee[2] = j => D.value = j)
        }, null, 8, ["modelValue"]), [[We, !1]]), ue(n(Je, {
            modelValue: f.value,
            "onUpdate:modelValue": ee[3] || (ee[3] = j => f.value = j),
            size: "xs",
            label: v(l)("textboxbuttons.Advanced"),
            style: {
                "font-size": "12px"
            },
            disable: c.value
        }, null, 8, ["modelValue", "label", "disable"]), [[We, v(s).entryCount < 200 || f.value]]), n(md, {
            ref_key: "addImageDialog",
            ref: I
        }, null, 512), n(ba, {
            ref_key: "unsplashDialog",
            ref: d,
            onPickedUnsplashImage: B
        }, null, 512)]))
    }
})
  , hd = {
    class: "q-gutter-sm",
    style: {
        "margin-bottom": "16px"
    }
}
  , bd = ye({
    __name: "ResultsButtons",
    setup(e) {
        const s = mt()
          , {t: a} = Se()
          , l = Ke()
          , t = h( () => s.dark.isActive ? "grey-9" : "grey-3")
          , o = h( () => s.dark.isActive ? "grey-3" : "grey-9");
        function i() {
            X("Wheel", "SortResults", ""),
            l.sortWinners()
        }
        function r() {
            X("Wheel", "ClearResults", ""),
            l.clearWinners()
        }
        return (c, f) => (E(),
        J("div", hd, [n(z, {
            size: "12px",
            padding: "xs sm",
            unelevated: "",
            "no-caps": "",
            color: t.value,
            "text-color": o.value,
            icon: "fas fa-sort-alpha-up",
            label: v(a)("textboxbuttons.Sort"),
            onClick: i
        }, null, 8, ["color", "text-color", "label"]), n(z, {
            size: "12px",
            padding: "xs sm",
            unelevated: "",
            "no-caps": "",
            color: t.value,
            "text-color": o.value,
            icon: "fas fa-times",
            label: v(a)("nameTabs.Clear the list"),
            onClick: r
        }, null, 8, ["color", "text-color", "label"])]))
    }
})
  , yd = ut({
    props: ["store", "barStyle", "verticalBarStyle", "horizontalBarStyle"],
    setup(e) {
        return () => [V("div", {
            class: e.store.scroll.vertical.barClass.value,
            style: [e.barStyle, e.verticalBarStyle],
            "aria-hidden": "true",
            onMousedown: e.store.onVerticalMousedown
        }), V("div", {
            class: e.store.scroll.horizontal.barClass.value,
            style: [e.barStyle, e.horizontalBarStyle],
            "aria-hidden": "true",
            onMousedown: e.store.onHorizontalMousedown
        }), ue(V("div", {
            ref: e.store.scroll.vertical.ref,
            class: e.store.scroll.vertical.thumbClass.value,
            style: e.store.scroll.vertical.style.value,
            "aria-hidden": "true"
        }), e.store.thumbVertDir), ue(V("div", {
            ref: e.store.scroll.horizontal.ref,
            class: e.store.scroll.horizontal.thumbClass.value,
            style: e.store.scroll.horizontal.style.value,
            "aria-hidden": "true"
        }), e.store.thumbHorizDir)]
    }
})
  , Na = ["vertical", "horizontal"]
  , jl = {
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
  , Ha = {
    prevent: !0,
    mouse: !0,
    mouseAllDir: !0
}
  , Qa = e => e >= 250 ? 50 : Math.ceil(e / 5)
  , _d = ut({
    name: "QScrollArea",
    props: {
        ...vl,
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
    setup(e, {slots: s, emit: a}) {
        const l = F(!1)
          , t = F(!1)
          , o = F(!1)
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
          , {proxy: c} = vt()
          , f = fl(e, c.$q);
        let g = null, p;
        const d = F(null)
          , b = h( () => "q-scrollarea" + (f.value === !0 ? " q-scrollarea--dark" : ""));
        Object.assign(i, {
            verticalInner: h( () => i.vertical.value - e.verticalOffset[0] - e.verticalOffset[1]),
            horizontalInner: h( () => i.horizontal.value - e.horizontalOffset[0] - e.horizontalOffset[1])
        }),
        r.vertical.percentage = h( () => {
            const _ = r.vertical.size.value - i.vertical.value;
            if (_ <= 0)
                return 0;
            const S = _t(r.vertical.position.value / _, 0, 1);
            return Math.round(S * 1e4) / 1e4
        }
        ),
        r.vertical.thumbHidden = h( () => (e.visible === null ? o.value : e.visible) !== !0 && l.value === !1 && t.value === !1 || r.vertical.size.value <= i.vertical.value + 1),
        r.vertical.thumbStart = h( () => e.verticalOffset[0] + r.vertical.percentage.value * (i.verticalInner.value - r.vertical.thumbSize.value)),
        r.vertical.thumbSize = h( () => Math.round(_t(i.verticalInner.value * i.verticalInner.value / r.vertical.size.value, Qa(i.verticalInner.value), i.verticalInner.value))),
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
            const _ = r.horizontal.size.value - i.horizontal.value;
            if (_ <= 0)
                return 0;
            const S = _t(Math.abs(r.horizontal.position.value) / _, 0, 1);
            return Math.round(S * 1e4) / 1e4
        }
        ),
        r.horizontal.thumbHidden = h( () => (e.visible === null ? o.value : e.visible) !== !0 && l.value === !1 && t.value === !1 || r.horizontal.size.value <= i.horizontal.value + 1),
        r.horizontal.thumbStart = h( () => e.horizontalOffset[0] + r.horizontal.percentage.value * (i.horizontalInner.value - r.horizontal.thumbSize.value)),
        r.horizontal.thumbSize = h( () => Math.round(_t(i.horizontalInner.value * i.horizontalInner.value / r.horizontal.size.value, Qa(i.horizontalInner.value), i.horizontalInner.value))),
        r.horizontal.style = h( () => ({
            ...e.thumbStyle,
            ...e.horizontalThumbStyle,
            [c.$q.lang.rtl === !0 ? "right" : "left"]: `${r.horizontal.thumbStart.value}px`,
            width: `${r.horizontal.thumbSize.value}px`,
            bottom: `${e.verticalOffset[1]}px`
        })),
        r.horizontal.thumbClass = h( () => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (r.horizontal.thumbHidden.value === !0 ? " q-scrollarea__thumb--invisible" : "")),
        r.horizontal.barClass = h( () => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (r.horizontal.thumbHidden.value === !0 ? " q-scrollarea__bar--invisible" : ""));
        const k = h( () => r.vertical.thumbHidden.value === !0 && r.horizontal.thumbHidden.value === !0 ? e.contentStyle : e.contentActiveStyle);
        function C() {
            const _ = {};
            return Na.forEach(S => {
                const W = r[S];
                Object.assign(_, {
                    [S + "Position"]: W.position.value,
                    [S + "Percentage"]: W.percentage.value,
                    [S + "Size"]: W.size.value,
                    [S + "ContainerSize"]: i[S].value,
                    [S + "ContainerInnerSize"]: i[S + "Inner"].value
                })
            }
            ),
            _
        }
        const I = Za( () => {
            const _ = C();
            _.ref = c,
            a("scroll", _)
        }
        , 0);
        function T(_, S, W) {
            if (Na.includes(_) === !1) {
                console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
                return
            }
            (_ === "vertical" ? xa : Pl)(d.value, S, W)
        }
        function y({height: _, width: S}) {
            let W = !1;
            i.vertical.value !== _ && (i.vertical.value = _,
            W = !0),
            i.horizontal.value !== S && (i.horizontal.value = S,
            W = !0),
            W === !0 && M()
        }
        function x({position: _}) {
            let S = !1;
            r.vertical.position.value !== _.top && (r.vertical.position.value = _.top,
            S = !0),
            r.horizontal.position.value !== _.left && (r.horizontal.position.value = _.left,
            S = !0),
            S === !0 && M()
        }
        function D({height: _, width: S}) {
            r.horizontal.size.value !== S && (r.horizontal.size.value = S,
            M()),
            r.vertical.size.value !== _ && (r.vertical.size.value = _,
            M())
        }
        function G(_, S) {
            const W = r[S];
            if (_.isFirst === !0) {
                if (W.thumbHidden.value === !0)
                    return;
                p = W.position.value,
                t.value = !0
            } else if (t.value !== !0)
                return;
            _.isFinal === !0 && (t.value = !1);
            const O = jl[S]
              , re = (W.size.value - i[S].value) / (i[S + "Inner"].value - W.thumbSize.value)
              , ke = _.distance[O.dist]
              , Re = p + (_.direction === O.dir ? 1 : -1) * ke * re;
            q(Re, S)
        }
        function R(_, S) {
            const W = r[S];
            if (W.thumbHidden.value !== !0) {
                const O = S === "vertical" ? e.verticalOffset[0] : e.horizontalOffset[0]
                  , re = _[jl[S].offset] - O
                  , ke = W.thumbStart.value - O;
                if (re < ke || re > ke + W.thumbSize.value) {
                    const Re = re - W.thumbSize.value / 2
                      , $ = _t(Re / (i[S + "Inner"].value - W.thumbSize.value), 0, 1);
                    q($ * Math.max(0, W.size.value - i[S].value), S)
                }
                W.ref.value !== null && W.ref.value.dispatchEvent(new MouseEvent(_.type,_))
            }
        }
        function M() {
            l.value = !0,
            g !== null && clearTimeout(g),
            g = setTimeout( () => {
                g = null,
                l.value = !1
            }
            , e.delay),
            e.onScroll !== void 0 && I()
        }
        function q(_, S) {
            d.value[jl[S].scroll] = _
        }
        let B = null;
        function P() {
            B !== null && clearTimeout(B),
            B = setTimeout( () => {
                B = null,
                o.value = !0
            }
            , c.$q.platform.is.ios ? 50 : 0)
        }
        function ee() {
            B !== null && (clearTimeout(B),
            B = null),
            o.value = !1
        }
        let j = null;
        we( () => c.$q.lang.rtl, _ => {
            d.value !== null && Pl(d.value, Math.abs(r.horizontal.position.value) * (_ === !0 ? -1 : 1))
        }
        ),
        na( () => {
            j = {
                top: r.vertical.position.value,
                left: r.horizontal.position.value
            }
        }
        ),
        oa( () => {
            if (j === null)
                return;
            const _ = d.value;
            _ !== null && (Pl(_, j.left),
            xa(_, j.top))
        }
        ),
        $t(I.cancel),
        Object.assign(c, {
            getScrollTarget: () => d.value,
            getScroll: C,
            getScrollPosition: () => ({
                top: r.vertical.position.value,
                left: r.horizontal.position.value
            }),
            getScrollPercentage: () => ({
                top: r.vertical.percentage.value,
                left: r.horizontal.percentage.value
            }),
            setScrollPosition: T,
            setScrollPercentage(_, S, W) {
                T(_, S * (r[_].size.value - i[_].value) * (_ === "horizontal" && c.$q.lang.rtl === !0 ? -1 : 1), W)
            }
        });
        const K = {
            scroll: r,
            thumbVertDir: [[xl, _ => {
                G(_, "vertical")
            }
            , void 0, {
                vertical: !0,
                ...Ha
            }]],
            thumbHorizDir: [[xl, _ => {
                G(_, "horizontal")
            }
            , void 0, {
                horizontal: !0,
                ...Ha
            }]],
            onVerticalMousedown(_) {
                R(_, "vertical")
            },
            onHorizontalMousedown(_) {
                R(_, "horizontal")
            }
        };
        return () => V("div", {
            class: b.value,
            onMouseenter: P,
            onMouseleave: ee
        }, [V("div", {
            ref: d,
            class: "q-scrollarea__container scroll relative-position fit hide-scrollbar",
            tabindex: e.tabindex !== void 0 ? e.tabindex : void 0
        }, [V("div", {
            class: "q-scrollarea__content absolute",
            style: k.value
        }, sa(s.default, [V(Gl, {
            debounce: 0,
            onResize: D
        })])), V(jo, {
            axis: "both",
            onScroll: x
        })]), V(Gl, {
            debounce: 0,
            onResize: y
        }), V(yd, {
            store: K,
            barStyle: e.barStyle,
            verticalBarStyle: e.verticalBarStyle,
            horizontalBarStyle: e.horizontalBarStyle
        })])
    }
})
  , wd = ut({
    name: "QPopupProxy",
    props: {
        ...oi,
        breakpoint: {
            type: [String, Number],
            default: 450
        }
    },
    emits: ["show", "hide"],
    setup(e, {slots: s, emit: a, attrs: l}) {
        const {proxy: t} = vt()
          , {$q: o} = t
          , i = F(!1)
          , r = F(null)
          , c = h( () => parseInt(e.breakpoint, 10))
          , {canShow: f} = ii({
            showing: i
        });
        function g() {
            return o.screen.width < c.value || o.screen.height < c.value ? "dialog" : "menu"
        }
        const p = F(g())
          , d = h( () => p.value === "menu" ? {
            maxHeight: "99vh"
        } : {});
        we( () => g(), C => {
            i.value !== !0 && (p.value = C)
        }
        );
        function b(C) {
            i.value = !0,
            a("show", C)
        }
        function k(C) {
            i.value = !1,
            p.value = g(),
            a("hide", C)
        }
        return Object.assign(t, {
            show(C) {
                f(C) === !0 && r.value.show(C)
            },
            hide(C) {
                r.value.hide(C)
            },
            toggle(C) {
                r.value.toggle(C)
            }
        }),
        dn(t, "currentComponent", () => ({
            type: p.value,
            ref: r.value
        })),
        () => {
            const C = {
                ref: r,
                ...d.value,
                ...l,
                onShow: b,
                onHide: k
            };
            let I;
            return p.value === "dialog" ? I = Xe : (I = Il,
            Object.assign(C, {
                target: e.target,
                contextMenu: e.contextMenu,
                noParentEvent: !0,
                separateClosePopup: !0
            })),
            V(I, C, s.default)
        }
    }
})
  , Fd = {
    class: "text-h6"
}
  , Sd = {
    class: "row justify-between"
}
  , Cd = {
    class: "row justify-center items-center"
}
  , kd = {
    class: "col-shrink q-px-md"
}
  , xd = {
    class: "col-shrink"
}
  , Ad = {
    class: "row items-center justify-between"
}
  , Dd = {
    class: "col-shrink"
}
  , Ed = {
    class: "col-shrink q-gutter-md"
}
  , Vd = {
    class: "row items-center"
}
  , Id = {
    class: "col-12 col-md-3"
}
  , Td = {
    class: "col-12 col-md"
}
  , $d = {
    key: 0,
    class: "row items-center"
}
  , Bd = {
    for: "entry-color-input",
    class: "col-12 col-md-3"
}
  , Ld = {
    class: "col-grow row justify-end"
}
  , qd = {
    key: 0,
    class: "relative-position",
    style: {
        "max-width": "fit-content"
    }
}
  , Pd = ["src", "alt"]
  , Wd = {
    key: 1
}
  , Od = {
    class: "row items-center"
}
  , zd = {
    class: "col-12 col-md-3"
}
  , Md = {
    class: "col-12 col-md"
}
  , Rd = {
    class: "row items-center"
}
  , Ud = {
    class: "col-12 col-md-3"
}
  , jd = {
    class: "col-12 col-md"
}
  , Nd = {
    class: "row items-center"
}
  , Hd = {
    class: "col-12 col-md-3"
}
  , Qd = {
    class: "col-12 col-md row items-center"
}
  , Kd = {
    class: "col-shrink q-ml-md"
}
  , Gd = ye({
    __name: "AdvancedDialog",
    setup(e, {expose: s}) {
        const a = Ke()
          , {t: l} = Se()
          , t = mt()
          , o = F(!1)
          , i = F(new Aa)
          , r = F([])
          , c = F(0)
          , f = h( () => r.value[c.value])
          , g = h( () => f.value.weight ?? 1)
          , p = h( () => f.value.color || i.value.getEntryColor(c.value))
          , d = Vo(async () => f.value.image ? Da(await Wl(f.value.image)) : null, null)
          , b = F(null)
          , k = F();
        function C(_) {
            X("Wheel", "ShowAdvancedDialog"),
            i.value = new Aa(a.wheelConfig.getValues()),
            r.value = i.value.entries,
            c.value = r.value.findIndex(S => S.id === _.id),
            c.value === -1 && (c.value = 0),
            o.value = !0
        }
        function I() {
            X("Wheel", "DuplicateEntry");
            const _ = {
                ...f.value
            };
            _.id = Va(),
            r.value.splice(c.value + 1, 0, _),
            c.value++
        }
        function T() {
            X("Wheel", "DeleteEntry"),
            r.value.splice(c.value, 1),
            c.value >= r.value.length && (c.value = r.value.length - 1),
            c.value < 0 && (c.value = 0)
        }
        function y(_=0) {
            X("Wheel", "AddEntry");
            const S = {
                id: Va(),
                text: "",
                weight: 1,
                enabled: !0
            };
            r.value.splice(_, 0, S),
            c.value = _
        }
        async function x() {
            if (!f.value.image)
                return;
            X("Wheel", "SetColorFromImage");
            const _ = await Wl(f.value.image);
            f.value.color = Ea(_).slice(0, 7)
        }
        function D() {
            b.value.pickFiles()
        }
        function G() {
            X("Wheel", "RemoveImageFromEntry"),
            delete f.value.image
        }
        function R() {
            a.setEntries(r.value),
            o.value = !1
        }
        const M = h( () => t.dark.isActive ? "grey-9" : "grey-3")
          , q = h( () => t.dark.isActive ? "grey-3" : "grey-9")
          , B = h({
            get: () => f.value.sound ?? "",
            set: _ => f.value.sound = _
        })
          , P = [{
            label: l("advancededitor.Inherit from wheel"),
            value: ""
        }].concat(Fn().map(_ => ({
            label: ee(_.name),
            value: _.value
        })));
        function ee(_) {
            return _.includes(".") ? l(_) : _
        }
        we( () => k.value, _ => {
            if (!_)
                return;
            X("Wheel", "AttachImageToEntry");
            const S = new FileReader;
            S.onload = async W => {
                if (W.target?.result) {
                    const O = await El(W.target.result.toString())
                      , re = await Wl(O);
                    Da(re) || (f.value.color = Ea(re).slice(0, 7)),
                    f.value.image = O
                }
            }
            ,
            S.readAsDataURL(_)
        }
        );
        function j(_) {
            f.value.weight = g.value + _,
            g.value < 1 && (f.value.weight = 1)
        }
        const K = h( () => {
            if (!f.value.enabled)
                return 0;
            let _ = r.value.slice();
            if (!i.value.allowDuplicates) {
                if (bn(_, f.value))
                    return 0;
                _ = yn(i.value.allowDuplicates, _)
            }
            const S = _n(_);
            return +(100 * g.value / S).toFixed(1)
        }
        );
        return s({
            show: C
        }),
        (_, S) => (E(),
        Z(Xe, {
            modelValue: o.value,
            "onUpdate:modelValue": S[15] || (S[15] = W => o.value = W)
        }, {
            default: u( () => [n(Ye, {
                style: {
                    width: "640px"
                }
            }, {
                default: u( () => [n(Fe, {
                    class: "row items-center",
                    style: {
                        "background-color": "#00000020"
                    }
                }, {
                    default: u( () => [m("div", Fd, [S[16] || (S[16] = m("i", {
                        class: "fas fa-sliders"
                    }, null, -1)), H(" " + A(v(l)("textboxbuttons.Advanced")), 1)]), n(pt), n(Mt)]),
                    _: 1
                }), r.value.length > 0 ? (E(),
                Z(Fe, {
                    key: 0,
                    class: "q-gutter-y-md"
                }, {
                    default: u( () => [m("div", Sd, [m("div", Cd, [n(z, {
                        unelevated: "",
                        round: "",
                        dense: "",
                        color: M.value,
                        "text-color": q.value,
                        icon: "fas fa-arrow-left",
                        disable: c.value === 0,
                        onClick: S[0] || (S[0] = W => c.value--),
                        "aria-label": "Previous entry"
                    }, null, 8, ["color", "text-color", "disable"]), m("div", kd, A(v(l)("advancededitor.Entry")) + " " + A(c.value + 1) + " / " + A(r.value.length), 1), n(z, {
                        unelevated: "",
                        round: "",
                        dense: "",
                        color: M.value,
                        "text-color": q.value,
                        icon: "fas fa-arrow-right",
                        disable: c.value === r.value.length - 1,
                        onClick: S[1] || (S[1] = W => c.value++),
                        "aria-label": "Next entry"
                    }, null, 8, ["color", "text-color", "disable"])]), m("div", xd, [n(z, {
                        unelevated: "",
                        round: "",
                        dense: "",
                        color: M.value,
                        "text-color": q.value,
                        icon: "fas fa-plus",
                        onClick: S[2] || (S[2] = W => y(c.value + 1)),
                        "aria-label": v(l)("advancededitor.Add entry")
                    }, null, 8, ["color", "text-color", "aria-label"])])]), S[17] || (S[17] = m("hr", null, null, -1)), m("div", Ad, [m("div", Dd, [n(Je, {
                        modelValue: f.value.enabled,
                        "onUpdate:modelValue": S[3] || (S[3] = W => f.value.enabled = W),
                        label: v(l)("advancededitor.Visible")
                    }, null, 8, ["modelValue", "label"])]), m("div", Ed, [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: M.value,
                        "text-color": q.value,
                        icon: "fas fa-clone",
                        onClick: I,
                        label: v(l)("advancededitor.Duplicate")
                    }, null, 8, ["color", "text-color", "label"]), n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: "negative",
                        icon: "fas fa-trash",
                        onClick: T,
                        label: v(l)("common.Delete")
                    }, null, 8, ["label"])])]), m("label", Vd, [m("div", Id, A(v(l)("advancededitor.Text")), 1), m("div", Td, [n(nt, {
                        filled: "",
                        dense: "",
                        modelValue: f.value.text,
                        "onUpdate:modelValue": S[4] || (S[4] = W => f.value.text = W)
                    }, null, 8, ["modelValue"])])]), i.value.type !== "image" ? (E(),
                    J("div", $d, [m("label", Bd, A(v(l)("advancededitor.Color")), 1), n(z, {
                        id: "entry-color-input",
                        icon: f.value.color ? "fas fa-paint-roller" : "fas fa-palette",
                        style: cl({
                            background: p.value,
                            color: v(_l)(p.value)
                        })
                    }, {
                        default: u( () => [n(Vt, null, {
                            default: u( () => [H(A(f.value.color ? v(l)("advancededitor.This color has been manually assigned") : v(l)("advancededitor.This color is inherited from the theme")), 1)]),
                            _: 1
                        }), n(wd, null, {
                            default: u( () => [n(Al, {
                                modelValue: f.value.color,
                                "onUpdate:modelValue": S[5] || (S[5] = W => f.value.color = W),
                                "default-view": "palette"
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["icon", "style"]), f.value.color ? (E(),
                    Z(z, {
                        key: 0,
                        flat: "",
                        "no-caps": "",
                        color: "negative",
                        icon: "fas fa-x",
                        onClick: S[6] || (S[6] = W => delete f.value.color),
                        style: {
                            "margin-left": "0.5em"
                        },
                        "aria-label": v(l)("advancededitor.Reset color")
                    }, {
                        default: u( () => [n(Vt, null, {
                            default: u( () => [H(A(v(l)("advancededitor.Reset color")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["aria-label"])) : _e("", !0), !f.value.color && f.value.image && v(d) === !1 ? (E(),
                    Z(z, {
                        key: 1,
                        flat: "",
                        "no-caps": "",
                        color: "primary",
                        icon: "fas fa-arrow-left",
                        onClick: x,
                        style: {
                            "margin-left": "0.5em"
                        },
                        "aria-label": v(l)("advancededitor.Use color from image")
                    }, {
                        default: u( () => [n(Vt, null, {
                            default: u( () => [H(A(v(l)("advancededitor.Use color from image")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["aria-label"])) : _e("", !0), m("div", Ld, [f.value.image ? (E(),
                    J("div", qd, [m("img", {
                        src: f.value.image,
                        alt: v(l)("advancededitor.Image attached"),
                        style: {
                            "max-height": "10em"
                        }
                    }, null, 8, Pd), n(z, {
                        round: "",
                        flat: "",
                        dense: "",
                        icon: "fas fa-times",
                        onClick: G,
                        class: "absolute-top-right",
                        "aria-label": v(l)("optionsdialog.Remove image")
                    }, null, 8, ["aria-label"])])) : (E(),
                    J("div", Wd, [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: M.value,
                        "text-color": q.value,
                        icon: "far fa-image",
                        label: v(l)("textboxbuttons.Add image"),
                        onClick: D
                    }, null, 8, ["color", "text-color", "label"]), ue(n(v(Wt), {
                        ref_key: "filePicker",
                        ref: b,
                        accept: "image/*",
                        modelValue: k.value,
                        "onUpdate:modelValue": S[7] || (S[7] = W => k.value = W)
                    }, null, 8, ["modelValue"]), [[We, !1]])]))])])) : _e("", !0), m("label", Od, [m("div", zd, A(v(l)("optionsdialog.Sound")), 1), m("div", Md, [n(xt, {
                        filled: "",
                        dense: "",
                        "map-options": "",
                        "emit-value": "",
                        modelValue: B.value,
                        "onUpdate:modelValue": S[8] || (S[8] = W => B.value = W),
                        options: v(P)
                    }, null, 8, ["modelValue", "options"])])]), m("label", Rd, [m("div", Ud, A(v(l)("advancededitor.Popup message")), 1), m("div", jd, [i.value.displayWinnerDialog ? (E(),
                    Z(nt, {
                        key: 0,
                        filled: "",
                        dense: "",
                        modelValue: f.value.message,
                        "onUpdate:modelValue": S[9] || (S[9] = W => f.value.message = W)
                    }, null, 8, ["modelValue"])) : _e("", !0)])]), m("label", Nd, [m("div", Hd, A(v(l)("advancededitor.Weight")), 1), m("div", Qd, [n(nt, {
                        filled: "",
                        dense: "",
                        type: "number",
                        modelValue: f.value.weight,
                        "onUpdate:modelValue": S[12] || (S[12] = W => f.value.weight = W),
                        modelModifiers: {
                            number: !0
                        },
                        class: "col"
                    }, {
                        append: u( () => [n(z, {
                            flat: "",
                            round: "",
                            dense: "",
                            icon: "fas fa-minus",
                            onClick: S[10] || (S[10] = W => j(-1)),
                            disable: g.value <= 1
                        }, null, 8, ["disable"]), n(z, {
                            flat: "",
                            round: "",
                            dense: "",
                            icon: "fas fa-plus",
                            onClick: S[11] || (S[11] = W => j(1))
                        })]),
                        _: 1
                    }, 8, ["modelValue"]), m("div", Kd, A(v(l)("advancededitor.Probability")) + ": " + A(K.value) + "% ", 1)])])]),
                    _: 1
                })) : (E(),
                Z(Fe, {
                    key: 1,
                    class: "q-gutter-y-md text-center"
                }, {
                    default: u( () => [m("div", null, A(v(l)("advancededitor.No entries")), 1), n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(l)("advancededitor.Add entry"),
                        onClick: S[13] || (S[13] = W => y())
                    }, null, 8, ["label"])]),
                    _: 1
                })), n(ct, {
                    align: "right"
                }, {
                    default: u( () => [n(z, {
                        unelevated: "",
                        "no-caps": "",
                        label: v(l)("common.Cancel"),
                        onClick: S[14] || (S[14] = W => o.value = !1)
                    }, null, 8, ["label"]), n(z, {
                        unelevated: "",
                        "no-caps": "",
                        color: "primary",
                        label: v(l)("common.OK"),
                        onClick: R
                    }, null, 8, ["label"])]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]))
    }
});
function Bn() {
    const {width: e, height: s} = Io();
    return {
        shouldUseMobileLayout: h( () => e.value < 900 || s.value < 450 || e.value < s.value),
        windowWidth: e,
        windowHeight: s
    }
}
const Yd = {
    class: "row no-wrap q-gutter-x-sm items-center"
}
  , Xd = {
    class: "col q-gutter-y-sm"
}
  , Jd = {
    class: "row no-wrap q-gutter-x-md"
}
  , Zd = {
    key: 0,
    class: "col-shrink"
}
  , ev = {
    key: 1,
    class: "relative-position"
}
  , tv = ["src", "alt"]
  , lv = {
    key: 2,
    class: "col-shrink"
}
  , av = {
    key: 3,
    class: "col"
}
  , nv = {
    key: 0
}
  , ov = {
    style: {
        "font-size": "16px"
    }
}
  , iv = ye({
    __name: "AdvancedEntry",
    props: {
        i: {
            type: Number,
            required: !0
        }
    },
    emits: ["open-advanced-dialog"],
    setup(e, {emit: s}) {
        const a = Ke()
          , {t: l} = Se()
          , t = e
          , o = s
          , {shouldUseMobileLayout: i, windowWidth: r} = Bn()
          , c = F(null)
          , f = h( () => a.wheelConfig)
          , g = h( () => f.value.entries)
          , p = h( () => g.value[t.i])
          , d = h( () => a.wheelIsBusy)
          , b = F(null)
          , k = F();
        we(k, q => {
            if (q) {
                X("Wheel", "AttachImageToEntry");
                const B = new FileReader;
                B.onload = async P => {
                    if (P.target?.result) {
                        const ee = await El(P.target.result.toString());
                        a.addImageToEntry(ee, t.i)
                    }
                }
                ,
                B.readAsDataURL(q)
            }
        }
        );
        const C = h({
            get: () => p.value.text,
            set: q => a.setEntryText(t.i, q ?? "")
        })
          , I = h({
            get: () => p.value.color || f.value.getEntryColor(t.i),
            set: q => a.setEntryColor(t.i, q)
        })
          , T = h({
            get: () => p.value.enabled ?? !0,
            set: q => a.setEntryEnabled(t.i, q)
        })
          , y = h({
            get: () => p.value.weight ?? 1,
            set: q => {
                Number(q) > 0 && a.setEntryWeight(t.i, Math.min(Number(q), 9999))
            }
        })
          , x = h( () => {
            if (!p.value.enabled)
                return 0;
            let q = g.value;
            if (!f.value.allowDuplicates) {
                if (bn(g.value, p.value))
                    return 0;
                q = yn(!1, g.value)
            }
            const B = _n(q);
            return Math.round(100 * y.value / B)
        }
        );
        function D(q) {
            d.value || (X("Wheel", "RemoveAdvancedEntry"),
            a.removeEntryByIndex(q))
        }
        function G(q) {
            d.value || (X("Wheel", "MoveAdvancedEntry", q),
            a.moveEntry(t.i, q))
        }
        function R() {
            d.value || b.value.pickFiles()
        }
        function M() {
            d.value || a.removeImageFromEntry(t.i)
        }
        return (q, B) => (E(),
        J(rt, null, [n(Ce, null, {
            default: u( () => [n(te, {
                side: "",
                class: el({
                    faded: p.value.enabled === !1
                }),
                style: {
                    "margin-left": "-16px",
                    "margin-right": "-8px"
                }
            }, {
                default: u( () => [t.i > 0 ? (E(),
                Z(z, {
                    key: 0,
                    round: "",
                    flat: "",
                    dense: "",
                    size: "sm",
                    icon: "fas fa-arrow-up",
                    disable: d.value,
                    onClick: B[0] || (B[0] = P => G(-1))
                }, null, 8, ["disable"])) : _e("", !0), t.i < g.value.length - 1 ? (E(),
                Z(z, {
                    key: 1,
                    round: "",
                    flat: "",
                    dense: "",
                    size: "sm",
                    icon: "fas fa-arrow-down",
                    disable: d.value,
                    onClick: B[1] || (B[1] = P => G(1))
                }, null, 8, ["disable"])) : _e("", !0)]),
                _: 1
            }, 8, ["class"]), n(te, {
                class: el({
                    faded: p.value.enabled === !1
                })
            }, {
                default: u( () => [m("div", Yd, [m("div", Xd, [n(nt, {
                    filled: "",
                    dense: "",
                    modelValue: C.value,
                    "onUpdate:modelValue": B[2] || (B[2] = P => C.value = P),
                    ref_key: "textbox",
                    ref: c,
                    disable: d.value
                }, null, 8, ["modelValue", "disable"]), m("div", Jd, [f.value.type !== "image" ? (E(),
                J("div", Zd, [n(At, {
                    "dropdown-icon": p.value.color ? "fas fa-paint-roller" : "fas fa-palette",
                    style: cl({
                        background: I.value,
                        color: v(_l)(I.value)
                    }),
                    disable: d.value,
                    "aria-label": v(l)("advancededitor.Color")
                }, {
                    default: u( () => [n(Al, {
                        modelValue: I.value,
                        "onUpdate:modelValue": B[3] || (B[3] = P => I.value = P),
                        "default-view": "palette"
                    }, null, 8, ["modelValue"])]),
                    _: 1
                }, 8, ["dropdown-icon", "style", "disable", "aria-label"])])) : _e("", !0), p.value.image ? (E(),
                J("div", ev, [m("img", {
                    src: p.value.image,
                    alt: v(l)("advancededitor.Image attached"),
                    style: {
                        "border-radius": "4px",
                        "max-height": "40px"
                    }
                }, null, 8, tv), n(z, {
                    round: "",
                    flat: "",
                    dense: "",
                    size: "sm",
                    icon: "fas fa-times",
                    disable: d.value,
                    onClick: M,
                    class: "absolute-top-right"
                }, null, 8, ["disable"])])) : (E(),
                J("div", lv, [n(z, {
                    round: "",
                    flat: "",
                    dense: "",
                    icon: "fas fa-image",
                    disable: d.value,
                    onClick: R
                }, null, 8, ["disable"]), ue(n(Wt, {
                    ref_key: "filePicker",
                    ref: b,
                    accept: "image/*",
                    modelValue: k.value,
                    "onUpdate:modelValue": B[4] || (B[4] = P => k.value = P),
                    disable: d.value
                }, null, 8, ["modelValue", "disable"]), [[We, !1]])])), v(i) ? _e("", !0) : (E(),
                J("div", av, [n(nt, {
                    type: "number",
                    filled: "",
                    dense: "",
                    modelValue: y.value,
                    "onUpdate:modelValue": B[7] || (B[7] = P => y.value = P),
                    disable: d.value,
                    ref: "weightInput"
                }, To({
                    append: u( () => [v(r) > 1750 ? (E(),
                    J("div", nv, [n(z, {
                        flat: "",
                        round: "",
                        dense: "",
                        size: "sm",
                        icon: "fas fa-minus",
                        disable: d.value,
                        onClick: B[5] || (B[5] = P => y.value -= 1)
                    }, null, 8, ["disable"]), n(z, {
                        flat: "",
                        round: "",
                        dense: "",
                        size: "sm",
                        icon: "fas fa-plus",
                        disable: d.value,
                        onClick: B[6] || (B[6] = P => y.value += 1)
                    }, null, 8, ["disable"])])) : _e("", !0), m("div", ov, A(x.value) + "% ", 1)]),
                    _: 2
                }, [v(r) > 1550 ? {
                    name: "prepend",
                    fn: u( () => [n(Ve, {
                        name: "fas fa-balance-scale-left",
                        style: {
                            "font-size": "16px",
                            "margin-right": "8px"
                        }
                    })]),
                    key: "0"
                } : void 0]), 1032, ["modelValue", "disable"])]))])]), n(z, {
                    unelevated: "",
                    dense: "",
                    round: "",
                    icon: "fas fa-sliders",
                    color: "primary",
                    "aria-label": v(l)("common.Edit"),
                    disable: d.value,
                    onClick: B[8] || (B[8] = P => o("open-advanced-dialog"))
                }, null, 8, ["aria-label", "disable"])])]),
                _: 1
            }, 8, ["class"]), n(te, {
                side: "",
                style: {
                    "margin-left": "-16px"
                }
            }, {
                default: u( () => [m("div", null, [n(z, {
                    round: "",
                    flat: "",
                    dense: "",
                    size: "sm",
                    icon: "fas fa-times",
                    disable: d.value,
                    class: el({
                        faded: p.value.enabled === !1
                    }),
                    onClick: B[9] || (B[9] = P => D(t.i)),
                    style: {
                        "margin-right": "2px"
                    }
                }, null, 8, ["disable", "class"])]), m("div", null, [n(Je, {
                    modelValue: T.value,
                    "onUpdate:modelValue": B[10] || (B[10] = P => T.value = P),
                    size: "xs",
                    disable: d.value
                }, null, 8, ["modelValue", "disable"])])]),
                _: 1
            })]),
            _: 1
        }), t.i < g.value.length - 1 ? (E(),
        Z(ul, {
            key: 0,
            class: "q-mr-md"
        })) : _e("", !0)], 64))
    }
})
  , sv = ot(iv, [["__scopeId", "data-v-fe2adaa3"]])
  , rv = {
    style: {
        display: "flex",
        "flex-direction": "column",
        flex: "1"
    },
    class: "q-gutter-y-sm"
}
  , uv = ye({
    __name: "AdvancedEditor",
    setup(e) {
        const s = Ke()
          , {t: a} = Se()
          , l = F(null)
          , t = h( () => s.wheelConfig)
          , o = h( () => t.value.entries)
          , i = h( () => s.wheelIsBusy);
        function r() {
            X("Wheel", "AddAdvancedEntry"),
            s.addEntry({
                text: "",
                weight: 1,
                enabled: !0
            })
        }
        we( () => o.value, (p, d) => {
            p.length > 0 && d.length > 0 && p.at(-1)?.id !== d.at(-1)?.id && f()
        }
        );
        const c = F(null);
        async function f() {
            await $o(200),
            c.value.setScrollPercentage("vertical", 1, 200)
        }
        function g(p) {
            l.value.show(p)
        }
        return (p, d) => (E(),
        J("div", rv, [n(_d, {
            style: {
                flex: "1"
            },
            visible: "",
            ref_key: "scrollArea",
            ref: c
        }, {
            default: u( () => [(E(!0),
            J(rt, null, gt(o.value, (b, k) => (E(),
            Z(sv, {
                i: k,
                key: b.id,
                onOpenAdvancedDialog: C => g(b)
            }, null, 8, ["i", "onOpenAdvancedDialog"]))), 128))]),
            _: 1
        }, 512), n(z, {
            unelevated: "",
            "no-caps": "",
            color: "primary",
            label: v(a)("advancededitor.Add entry"),
            class: "full-width",
            disable: i.value,
            onClick: r
        }, null, 8, ["label", "disable"]), n(Gd, {
            ref_key: "advancedDialog",
            ref: l
        }, null, 512)]))
    }
})
  , cv = {
    class: "flex justify-between items-center gap-sm"
}
  , dv = {
    class: "flex items-center gap-sm"
}
  , vv = ye({
    __name: "AppInfo",
    setup(e) {
        const {t: s} = Se()
          , a = Vl();
        return (l, t) => {
            const o = ml("router-link");
            return E(),
            J("div", cv, [m("div", dv, [m("span", null, A(`${v(s)("appInfo.Version")} ${v(a).version}`), 1), v(a).userHasSeenCurrentVersion ? _e("", !0) : (E(),
            Z(z, {
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
                default: u( () => t[0] || (t[0] = [H(" New! ")])),
                _: 1
            }))]), n(o, {
                to: "/changelog"
            }, {
                default: u( () => [H(A(v(s)("common.Changelog")), 1)]),
                _: 1
            })])
        }
    }
})
  , fv = {
    class: "full-height flex f-col"
}
  , mv = ye({
    __name: "EditorColumn",
    setup(e) {
        const {t: s} = Se()
          , a = Ke()
          , l = F("entries")
          , t = F(!1);
        return (o, i) => (E(),
        J("div", fv, [n(Sl, {
            modelValue: l.value,
            "onUpdate:modelValue": i[1] || (i[1] = r => l.value = r),
            dense: "",
            "no-caps": "",
            "inline-label": "",
            align: "left",
            breakpoint: "450",
            style: {
                "max-width": "100%"
            }
        }, {
            default: u( () => [ue(n(kt, {
                name: "entries",
                label: v(s)("nameTabs.Entries")
            }, {
                default: u( () => [n(Xl, {
                    rounded: "",
                    color: "grey-7",
                    label: v(a).wheelConfig.entries.length,
                    style: {
                        "margin-left": "6px"
                    }
                }, null, 8, ["label"])]),
                _: 1
            }, 8, ["label"]), [[We, !t.value]]), ue(n(kt, {
                name: "results",
                label: v(s)("nameTabs.Results")
            }, {
                default: u( () => [n(Xl, {
                    rounded: "",
                    color: "grey-7",
                    label: v(a).winners.length,
                    style: {
                        "margin-left": "6px"
                    }
                }, null, 8, ["label"])]),
                _: 1
            }, 8, ["label"]), [[We, !t.value]]), n(pt), n(Je, {
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
        }, 8, ["modelValue"]), ue(n(ha, {
            modelValue: l.value,
            "onUpdate:modelValue": i[2] || (i[2] = r => l.value = r),
            animated: "",
            class: "shadow-1 rounded-borders flex-1",
            style: {
                "min-height": "312px"
            }
        }, {
            default: u( () => [n(It, {
                name: "entries",
                class: "flex f-col"
            }, {
                default: u( () => [n(pd), v(a).wheelIsAdvanced ? (E(),
                Z(uv, {
                    key: 1
                })) : (E(),
                Z(od, {
                    key: 0
                })), n(vv, {
                    class: "q-mt-md"
                })]),
                _: 1
            }), n(It, {
                name: "results",
                class: "flex f-col"
            }, {
                default: u( () => [n(bd), n(sd)]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]), [[We, !t.value]])]))
    }
})
  , gv = {
    style: {
        height: "4em"
    }
}
  , pv = {
    key: 0,
    class: "text-h3",
    style: {
        position: "absolute",
        color: "#34a853"
    }
}
  , hv = {
    key: 0,
    class: "text-h3",
    style: {
        position: "absolute",
        color: "#34a853"
    }
}
  , bv = {
    __name: "YearlyStatsCounter",
    props: {
        title: String,
        increment: Number,
        fps: Number
    },
    setup(e) {
        const s = e
          , a = F(0)
          , l = F("")
          , t = F(!0);
        return Bo( () => {
            const o = new Date(new Date().getFullYear(),0,1)
              , i = new Date;
            a.value = (i - o) / 1e3 * s.increment,
            l.value = Math.round(a.value).toLocaleString(),
            t.value = !t.value
        }
        , 1e3 / s.fps, {
            immediateCallback: !0
        }),
        (o, i) => (E(),
        J("div", gv, [H(A(e.title) + " ", 1), n(yl, {
            name: "fade",
            mode: "in-out"
        }, {
            default: u( () => [t.value ? (E(),
            J("p", pv, A(l.value), 1)) : _e("", !0)]),
            _: 1
        }), n(yl, {
            name: "fade",
            mode: "in-out"
        }, {
            default: u( () => [t.value ? _e("", !0) : (E(),
            J("p", hv, A(l.value), 1))]),
            _: 1
        })]))
    }
}
  , Ka = ot(bv, [["__scopeId", "data-v-9a50a4a0"]])
  , yv = {
    class: "q-pa-md about-card-row"
}
  , _v = {
    class: "about-card-column"
}
  , wv = {
    class: "about-card-column"
}
  , Fv = {
    class: "about-card-column"
}
  , Sv = ye({
    __name: "AboutCards",
    setup(e) {
        const s = nl();
        return (a, l) => {
            const t = ml("router-link");
            return E(),
            J("div", yv, [m("div", _v, [n(qt, null, {
                header: u( () => l[0] || (l[0] = [H(" What is the wheel spinner for? ")])),
                main: u( () => [l[8] || (l[8] = H(" Every day we hear from people who use our website in new ways: ")), m("ul", null, [m("li", null, [l[2] || (l[2] = H(" Random name picker in the classroom: pick which student will answer the next question. ")), n(t, {
                    to: "/how-to-use-in-the-classroom"
                }, {
                    default: u( () => l[1] || (l[1] = [H(" How to use it in the classroom ")])),
                    _: 1
                })]), l[3] || (l[3] = m("li", null, " If you are a retailer, spin the wheel to pick which loyal customer will get the monthly giveaway. ", -1)), l[4] || (l[4] = m("li", null, " When you give a presentation, use the wheel spinner to pick a lucky winner among the attendees who turned in the survey. ", -1)), l[5] || (l[5] = m("li", null, " Random name picker at work: in your daily standup meeting at work, randomize who speaks first. ", -1)), l[6] || (l[6] = m("li", null, " If you are overwhelmed by your to do items, put them on a wheel and spin to find which one to start with. ", -1)), l[7] || (l[7] = m("li", null, " If you can't agree on what to have for dinner, put the alternatives on the wheel and spin. ", -1))])]),
                _: 1
            }), n(qt, null, {
                header: u( () => l[9] || (l[9] = [H(" Can the wheel be rigged? ")])),
                main: u( () => [l[12] || (l[12] = m("p", null, " There is no functionality to determine which entry will win ahead of time. When you click the wheel, it accelerates for exactly one second, then it is set to a random rotation between 0 and 360 degrees, and finally it decelerates to a stop. The setting of a random rotation is not visible to the naked eye as it happens when the wheel is spinning quite fast. ", -1)), m("p", null, [n(t, {
                    to: "/faq#randomness"
                }, {
                    default: u( () => l[10] || (l[10] = [H("Randomness of the wheel")])),
                    _: 1
                }), l[11] || (l[11] = H(". "))])]),
                _: 1
            })]), m("div", wv, [n(qt, null, {
                header: u( () => l[13] || (l[13] = [H(" How to use the wheel spinner ")])),
                main: u( () => [m("p", null, [l[15] || (l[15] = H(" It's easy: type in your entries in the textbox to the right of the wheel, then click the wheel to spin it and get a random winner. To make the wheel your own by customizing the colors, sounds, and spin time, click ")), n(Xl, {
                    color: "primary"
                }, {
                    default: u( () => l[14] || (l[14] = [m("i", {
                        class: "fas fa-palette"
                    }, null, -1), H(" Customize")])),
                    _: 1
                }), l[16] || (l[16] = H(" at the top of the page. "))]), m("p", null, [n(t, {
                    to: "/user-reviews-and-tutorials"
                }, {
                    default: u( () => l[17] || (l[17] = [H(" Video reviews and tutorials by users ")])),
                    _: 1
                })])]),
                _: 1
            }), n(qt, null, {
                header: u( () => l[18] || (l[18] = [H(" Is my data private? ")])),
                main: u( () => [l[20] || (l[20] = m("p", null, " We are committed to protecting and respecting your privacy and the security of your data. We comply with GDPR, CCPA, SB 190, SB 1392, and we closely monitor changes to them. We follow industry best practices for data encryption and backups. ", -1)), m("p", null, [n(t, {
                    to: "/privacy-policy"
                }, {
                    default: u( () => l[19] || (l[19] = [H(" How we safeguard your privacy ")])),
                    _: 1
                })])]),
                _: 1
            }), n(qt, null, {
                header: u( () => l[21] || (l[21] = [H(" Does it use renewable energy? ")])),
                main: u( () => [l[23] || (l[23] = m("p", null, " We are proud to share that 100% of the electricity that powers our servers is renewable, and 93% comes from carbon-free energy sources. ", -1)), m("p", null, [n(t, {
                    to: "/faq#sustainability"
                }, {
                    default: u( () => l[22] || (l[22] = [H("Sustainability")])),
                    _: 1
                })])]),
                _: 1
            })]), m("div", Fv, [n(qt, null, {
                header: u( () => l[24] || (l[24] = [H(" Try our Discord bot ")])),
                main: u( () => [l[26] || (l[26] = m("p", null, " Use our Discord bot to spin the wheel directly in your Discord server. You can use the bot's commands to spin all kinds of different wheels. ", -1)), l[27] || (l[27] = m("ul", null, [m("li", null, "Spin with the members of your server"), m("li", null, "Spin with members that have a specific role"), m("li", null, "Spin with members that reacted to a message"), m("li", null, "Spin any of your shared wheels"), m("li", null, "Or spin with any entries you want!")], -1)), m("p", null, [n(t, {
                    to: "/faq#discordbot"
                }, {
                    default: u( () => l[25] || (l[25] = [H("Add the Discord bot")])),
                    _: 1
                })])]),
                _: 1
            }), n(qt, null, {
                header: u( () => [H(" Activity in " + A(new Date().getFullYear()), 1)]),
                main: u( () => [n(Ka, {
                    title: "Wheel spins",
                    increment: v(s).spinsPerSecond,
                    fps: .333333
                }, null, 8, ["increment"]), l[28] || (l[28] = m("br", null, null, -1)), n(Ka, {
                    title: "Hours of spinning",
                    increment: v(s).hoursSpunPerSecond,
                    fps: v(s).hoursSpunPerSecond
                }, null, 8, ["increment", "fps"]), l[29] || (l[29] = m("br", null, null, -1))]),
                _: 1
            })])])
        }
    }
})
  , Cv = ot(Sv, [["__scopeId", "data-v-4b7d40af"]])
  , kv = {
    class: "q-gutter-y-sm"
}
  , xv = {
    class: "row items-center q-gutter-x-md"
}
  , Av = {
    key: 0,
    style: {
        "font-size": "32px"
    },
    class: "break-long-words"
}
  , Dv = {
    key: 0,
    class: "break-long-words"
}
  , Ev = ye({
    __name: "TitleAndDescription",
    props: {
        editable: Boolean
    },
    emits: ["edit-title-and-description"],
    setup(e, {emit: s}) {
        const a = Ke()
          , {t: l} = Se()
          , t = e
          , o = s
          , i = h( () => a.wheelConfig)
          , r = h( () => i.value.title)
          , c = h( () => i.value.description);
        return (f, g) => (E(),
        J("div", kv, [m("div", xv, [r.value ? (E(),
        J("span", Av, A(r.value), 1)) : _e("", !0), ue(n(z, {
            round: "",
            unelevated: "",
            dense: "",
            color: "primary",
            icon: "fas fa-pencil-alt",
            onClick: g[0] || (g[0] = p => o("edit-title-and-description"))
        }, {
            default: u( () => [n(Vt, null, {
                default: u( () => [H(A(v(l)("common.Edit title and description")), 1)]),
                _: 1
            })]),
            _: 1
        }, 512), [[We, t.editable]])]), c.value ? (E(),
        J("div", Dv, A(c.value), 1)) : _e("", !0), g[1] || (g[1] = m("div", {
            class: "q-pb-sm desktop-only"
        }, null, -1))]))
    }
})
  , Vv = ot(Ev, [["__scopeId", "data-v-cd99b46d"]])
  , Iv = ye({
    __name: "DesktopAdFreestar",
    setup(e) {
        const s = window.freestar;
        return zt( () => {
            console.log("Initializing desktop Freestar ads"),
            s.config.enabled_slots.push({
                placementName: "wheelofnames_siderail_left",
                slotId: "wheelofnames_siderail_left"
            }),
            s.queue.push( () => {
                s.newVideo("FreeStarVideoAdContainer_slider")
            }
            )
        }
        ),
        Lo( () => {
            console.log("Destroying desktop Freestar ads"),
            s.queue.push( () => {
                s.deleteAdSlots(),
                s.deleteVideo("FreeStarVideoAdContainer_slider")
            }
            )
        }
        ),
        (a, l) => (E(),
        J(rt, null, [l[0] || (l[0] = m("div", {
            id: "wheelofnames_siderail_left",
            "data-freestar-ad": "__336x280"
        }, null, -1)), l[1] || (l[1] = m("button", {
            id: "pmLink"
        }, "Privacy Manager", -1))], 64))
    }
})
  , Tv = ot(Iv, [["__scopeId", "data-v-c1d09494"]])
  , $v = {
    key: 0,
    class: "root"
}
  , Bv = {
    class: "ad-declaration"
}
  , Lv = {
    style: {
        display: "flex",
        "align-items": "center"
    }
}
  , qv = {
    style: {
        display: "flex",
        "align-items": "center"
    }
}
  , Pv = {
    key: 0,
    class: "ad-declaration"
}
  , Wv = ye({
    __name: "DesktopAd",
    setup(e) {
        const s = nl()
          , {t: a} = Se()
          , l = h( () => s.advertiser)
          , t = h( () => !o.value && l.value && l.value !== "none")
          , o = F(!1)
          , i = F(!1);
        function r() {
            X("Wheel", "HideDesktopAd", ""),
            o.value = !0
        }
        function c() {
            i.value = !i.value,
            X("Wheel", "ToggleBadAdInstructions", i.value ? "Show" : "Hide")
        }
        return (f, g) => t.value ? (E(),
        J("div", $v, [m("div", Bv, [m("span", Lv, [H(A(v(a)("app.Report bad ad")) + " ", 1), n(z, {
            onClick: g[0] || (g[0] = p => c()),
            icon: "fas fa-flag",
            flat: "",
            round: "",
            size: "sm"
        })]), m("span", qv, [H(A(v(a)("app.Close ads")) + " ", 1), n(z, {
            onClick: g[1] || (g[1] = p => r()),
            icon: "fas fa-times-circle",
            flat: "",
            round: "",
            size: "sm"
        })])]), i.value ? (E(),
        J("div", Pv, g[2] || (g[2] = [qo('<div class="card" data-v-443f1c49><div class="card-header" data-v-443f1c49><div class="card-header-title" data-v-443f1c49> How to report an inappropriate ad </div></div><div class="card-content" data-v-443f1c49><ol data-v-443f1c49><li data-v-443f1c49> Take a screenshot of this page. (Unsure how to take a screenshot? <a target="_new" href="https://www.take-a-screenshot.org/" data-v-443f1c49>See instructions here</a>.) </li><li data-v-443f1c49> Create an email with the subject line <b data-v-443f1c49>Bad ad</b></li><li data-v-443f1c49> Attach the screenshot to the email and send it to admin@wheelofnames.com. </li></ol></div></div>', 1)]))) : _e("", !0), l.value === "freestar" && !o.value ? (E(),
        Z(Tv, {
            key: 1
        })) : _e("", !0)])) : _e("", !0)
    }
})
  , Ov = ot(Wv, [["__scopeId", "data-v-443f1c49"]])
  , zv = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
let Jl;
function Mv(e) {
    return Jl = e,
    new Promise(s => {
        gapi.load("auth2:client:picker", () => {
            gapi.client.init({
                apiKey: "AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g",
                discoveryDocs: zv,
                clientId: "1096958520212-sbdisrtnfpeuk96lbi0cfspj7pspgk38.apps.googleusercontent.com",
                scope: Po.join(" ")
            }).then( () => {
                gapi.client.setToken({
                    access_token: Jl
                }),
                s()
            }
            )
        }
        )
    }
    )
}
function Rv() {
    return new Promise( (e, s) => {
        const a = new google.picker.DocsView(google.picker.ViewId.SPREADSHEETS);
        new google.picker.PickerBuilder().enableFeature(google.picker.Feature.NAV_HIDDEN).setAppId("1096958520212").setOAuthToken(Jl).addView(a).setDeveloperKey("AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g").setCallback(t => {
            if (t.action === "cancel" && s("No spreadsheet picked"),
            t.action === "picked" && t.docs.length > 0) {
                const o = t.docs[0].id;
                e(o)
            }
        }
        ).setTitle("Select a spreadsheet").build().setVisible(!0)
    }
    )
}
const Uv = {
    key: 0,
    style: {
        "text-align": "center"
    }
}
  , jv = {
    class: "banner-text"
}
  , Nv = ye({
    __name: "MaintenanceBanner",
    setup(e) {
        const s = nl()
          , a = F(!0)
          , l = () => {
            a.value = !1
        }
        ;
        return (t, o) => a.value && v(s).maintenanceMessage ? (E(),
        J("div", Uv, [o[0] || (o[0] = m("span", {
            class: "banner-left"
        }, "    ", -1)), m("span", jv, A(v(s).maintenanceMessage), 1), o[1] || (o[1] = m("span", {
            class: "banner-right"
        }, "    ", -1)), m("span", null, [m("i", {
            class: "fas fa-times close-icon",
            onClick: l
        })])])) : _e("", !0)
    }
})
  , Hv = ot(Nv, [["__scopeId", "data-v-9407ca08"]])
  , Qv = {
    key: 0
}
  , Kv = {
    key: 1
}
  , Gv = {
    class: "q-mt-md"
}
  , Yv = {
    key: 0
}
  , Xv = {
    key: 1
}
  , Jv = {
    class: "q-gutter-x-md"
}
  , Zv = {
    class: "q-mt-md"
}
  , ef = {
    key: 0
}
  , tf = {
    key: 1
}
  , lf = {
    __name: "WheelLocationDialog",
    setup(e, {expose: s}) {
        const {t: a} = Se()
          , l = F(!1)
          , t = F("");
        let o;
        function i(c) {
            return t.value = c,
            l.value = !0,
            new Promise( (f, g) => {
                o = f
            }
            )
        }
        function r(c) {
            X("Wheel", "WheelLocationDialog", c),
            o(c),
            l.value = !1
        }
        return s({
            askUserForLocation: i
        }),
        (c, f) => {
            const g = ml("router-link");
            return E(),
            Z(Xe, {
                modelValue: l.value,
                "onUpdate:modelValue": f[2] || (f[2] = p => l.value = p)
            }, {
                default: u( () => [n(Ye, {
                    style: {
                        width: "400px"
                    }
                }, {
                    default: u( () => [n(Fe, {
                        class: "row items-center text-h6",
                        style: {
                            "background-color": "#00000020"
                        }
                    }, {
                        default: u( () => [t.value === "save" ? (E(),
                        J("div", Qv, [f[3] || (f[3] = m("i", {
                            class: "fas fa-save"
                        }, null, -1)), H(" " + A(v(a)("savedialog.Save wheel")), 1)])) : (E(),
                        J("div", Kv, [f[4] || (f[4] = m("i", {
                            class: "fas fa-folder-open"
                        }, null, -1)), H(" " + A(v(a)("opendialog.Open wheel")), 1)])), n(pt), n(Mt)]),
                        _: 1
                    }), n(Fe, {
                        class: "q-gutter-y-md"
                    }, {
                        default: u( () => [n(z, {
                            unelevated: "",
                            "no-caps": "",
                            color: "primary",
                            padding: "lg",
                            onClick: f[0] || (f[0] = p => r("cloud")),
                            style: {
                                width: "100%"
                            }
                        }, {
                            default: u( () => [m("div", null, [n(Ve, {
                                name: "fas fa-cloud",
                                size: "8em"
                            }), m("div", Gv, [t.value === "save" ? (E(),
                            J("span", Yv, A(v(a)("savedialog.Save to the cloud (recommended)")), 1)) : (E(),
                            J("span", Xv, A(v(a)("opendialog.Open from the cloud (recommended)")), 1))])])]),
                            _: 1
                        }), n(z, {
                            unelevated: "",
                            "no-caps": "",
                            color: "grey-7",
                            padding: "sm",
                            onClick: f[1] || (f[1] = p => r("local")),
                            style: {
                                width: "100%"
                            }
                        }, {
                            default: u( () => [m("div", Jv, [n(Ve, {
                                name: "fas fa-hard-drive",
                                size: "4em"
                            }), m("span", Zv, [t.value === "save" ? (E(),
                            J("span", ef, A(v(a)("savedialog.Save to a local file")), 1)) : (E(),
                            J("span", tf, A(v(a)("opendialog.Open a local file")), 1))])])]),
                            _: 1
                        }), m("div", null, [f[5] || (f[5] = m("i", {
                            class: "fa-regular fa-circle-question q-mr-sm"
                        }, null, -1)), n(g, {
                            target: "_blank",
                            to: "/faq#saving"
                        }, {
                            default: u( () => [H(A(v(a)("app.Help me choose")), 1)]),
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
};
function af() {
    const e = nl();
    we( () => e.advertiser, s => {
        s === "freestar" && nf()
    }
    , {
        immediate: !0
    })
}
function nf() {
    console.log("Initializing Freestar ad(s)"),
    ei({
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
    }),
    window.freestar ??= {};
    const e = window.freestar;
    e.queue ??= [],
    e.config ??= {},
    e.config.enabled_slots ??= [],
    e.initCallback = () => {
        e.config.enabled_slots.length === 0 ? e.initCallbackCalled = !1 : e.newAdSlots(e.config.enabled_slots)
    }
}
const of = {
    class: "page-content"
}
  , sf = {
    class: "left-column"
}
  , rf = {
    class: "center-column"
}
  , uf = {
    class: "wheel-container"
}
  , cf = {
    class: "right-column"
}
  , df = {
    key: 0
}
  , vf = ye({
    __name: "EditWheelPage",
    setup(e) {
        const s = pn()
          , a = Wo()
          , l = mt()
          , {t, locale: o, setLocaleMessage: i} = Se()
          , {shouldUseMobileLayout: r} = Bn()
          , c = Vl()
          , f = nl()
          , g = wt()
          , p = Ke();
        zt( () => {
            b(a.params.lang?.toString() || "en"),
            p.loadInitialEditableWheel(),
            f.loadServerSettings(),
            c.loadPreferences(),
            l.dark.set(c.darkMode),
            B(),
            P()
        }
        );
        async function d(Q) {
            X("Wheel", "ChangeLanguage"),
            b(Q),
            s.push(`/${Xa(Q)}`)
        }
        async function b(Q) {
            if (!Q || !k(Q))
                return;
            C(Q);
            const le = await I(Q);
            i(Q, le),
            o.value = Q
        }
        function k(Q) {
            return Zl().find(le => le.name === Q)
        }
        function C(Q) {
            const le = Oo(Q, navigator.languages.slice());
            le && setTimeout(async () => {
                const De = await I(le);
                Bt(De.app["Click the Language menu"])
            }
            , 3e3)
        }
        async function I(Q) {
            const le = zo(Q);
            return (await Mo(Object.assign({
                "../i18n/am-ET.json": () => ie( () => import("./am-ET-v344.js"), []),
                "../i18n/ar-EG.json": () => ie( () => import("./ar-EG-v344.js"), []),
                "../i18n/az-Latn-AZ.json": () => ie( () => import("./az-Latn-AZ-v344.js"), []),
                "../i18n/bg-BG.json": () => ie( () => import("./bg-BG-v344.js"), []),
                "../i18n/bn-IN.json": () => ie( () => import("./bn-IN-v344.js"), []),
                "../i18n/bs-Latn-BA.json": () => ie( () => import("./bs-Latn-BA-v344.js"), []),
                "../i18n/ca-ES.json": () => ie( () => import("./ca-ES-v344.js"), []),
                "../i18n/cs-CZ.json": () => ie( () => import("./cs-CZ-v344.js"), []),
                "../i18n/cy-GB.json": () => ie( () => import("./cy-GB-v344.js"), []),
                "../i18n/da-DK.json": () => ie( () => import("./da-DK-v344.js"), []),
                "../i18n/de-DE.json": () => ie( () => import("./de-DE-v344.js"), []),
                "../i18n/el-GR.json": () => ie( () => import("./el-GR-v344.js"), []),
                "../i18n/en-PI.json": () => ie( () => import("./en-PI-v344.js"), []),
                "../i18n/en-US.json": () => ie( () => import("./en-US-v344.js"), []),
                "../i18n/es-ES.json": () => ie( () => import("./es-ES-v344.js"), []),
                "../i18n/et-EE.json": () => ie( () => import("./et-EE-v344.js"), []),
                "../i18n/fa-IR.json": () => ie( () => import("./fa-IR-v344.js"), []),
                "../i18n/fi-FI.json": () => ie( () => import("./fi-FI-v344.js"), []),
                "../i18n/fil-PH.json": () => ie( () => import("./fil-PH-v344.js"), []),
                "../i18n/fr-FR.json": () => ie( () => import("./fr-FR-v344.js"), []),
                "../i18n/gl-ES.json": () => ie( () => import("./gl-ES-v344.js"), []),
                "../i18n/gu-IN.json": () => ie( () => import("./gu-IN-v344.js"), []),
                "../i18n/he-IL.json": () => ie( () => import("./he-IL-v344.js"), []),
                "../i18n/hi-IN.json": () => ie( () => import("./hi-IN-v344.js"), []),
                "../i18n/hr-HR.json": () => ie( () => import("./hr-HR-v344.js"), []),
                "../i18n/hu-HU.json": () => ie( () => import("./hu-HU-v344.js"), []),
                "../i18n/hy-AM.json": () => ie( () => import("./hy-AM-v344.js"), []),
                "../i18n/id-ID.json": () => ie( () => import("./id-ID-v344.js"), []),
                "../i18n/is-IS.json": () => ie( () => import("./is-IS-v344.js"), []),
                "../i18n/it-IT.json": () => ie( () => import("./it-IT-v344.js"), []),
                "../i18n/ja-JP.json": () => ie( () => import("./ja-JP-v344.js"), []),
                "../i18n/ka-GE.json": () => ie( () => import("./ka-GE-v344.js"), []),
                "../i18n/kk-KZ.json": () => ie( () => import("./kk-KZ-v344.js"), []),
                "../i18n/kn-IN.json": () => ie( () => import("./kn-IN-v344.js"), []),
                "../i18n/ko-KR.json": () => ie( () => import("./ko-KR-v344.js"), []),
                "../i18n/lo-LA.json": () => ie( () => import("./lo-LA-v344.js"), []),
                "../i18n/lt-LT.json": () => ie( () => import("./lt-LT-v344.js"), []),
                "../i18n/lv-LV.json": () => ie( () => import("./lv-LV-v344.js"), []),
                "../i18n/mk-MK.json": () => ie( () => import("./mk-MK-v344.js"), []),
                "../i18n/ml-IN.json": () => ie( () => import("./ml-IN-v344.js"), []),
                "../i18n/mn-MN.json": () => ie( () => import("./mn-MN-v344.js"), []),
                "../i18n/ms-MY.json": () => ie( () => import("./ms-MY-v344.js"), []),
                "../i18n/my-MM.json": () => ie( () => import("./my-MM-v344.js"), []),
                "../i18n/nb-NO.json": () => ie( () => import("./nb-NO-v344.js"), []),
                "../i18n/nl-NL.json": () => ie( () => import("./nl-NL-v344.js"), []),
                "../i18n/pa-IN.json": () => ie( () => import("./pa-IN-v344.js"), []),
                "../i18n/pl-PL.json": () => ie( () => import("./pl-PL-v344.js"), []),
                "../i18n/pt-PT.json": () => ie( () => import("./pt-PT-v344.js"), []),
                "../i18n/ro-RO.json": () => ie( () => import("./ro-RO-v344.js"), []),
                "../i18n/ru-RU.json": () => ie( () => import("./ru-RU-v344.js"), []),
                "../i18n/sd-PK.json": () => ie( () => import("./sd-PK-v344.js"), []),
                "../i18n/sl-SI.json": () => ie( () => import("./sl-SI-v344.js"), []),
                "../i18n/so-SO.json": () => ie( () => import("./so-SO-v344.js"), []),
                "../i18n/sq-AL.json": () => ie( () => import("./sq-AL-v344.js"), []),
                "../i18n/sr-Latn-RS.json": () => ie( () => import("./sr-Latn-RS-v344.js"), []),
                "../i18n/sv-SE.json": () => ie( () => import("./sv-SE-v344.js"), []),
                "../i18n/ta-IN.json": () => ie( () => import("./ta-IN-v344.js"), []),
                "../i18n/th-TH.json": () => ie( () => import("./th-TH-v344.js"), []),
                "../i18n/tr-TR.json": () => ie( () => import("./tr-TR-v344.js"), []),
                "../i18n/uk-UA.json": () => ie( () => import("./uk-UA-v344.js"), []),
                "../i18n/ur-PK.json": () => ie( () => import("./ur-PK-v344.js"), []),
                "../i18n/uz-Latn-UZ.json": () => ie( () => import("./uz-Latn-UZ-v344.js"), []),
                "../i18n/vi-VN.json": () => ie( () => import("./vi-VN-v344.js"), []),
                "../i18n/zh-CN.json": () => ie( () => import("./zh-CN-v344.js"), []),
                "../i18n/zh-HK.json": () => ie( () => import("./zh-HK-v344.js"), [])
            }), `../i18n/${le}.json`, 3)).default
        }
        const T = F(null)
          , y = F(null)
          , x = F(null)
          , D = h( () => p.wheelConfig);
        function G() {
            X("Wheel", "NewWheel"),
            p.saveWheelConfigForUndo(),
            p.resetWheel(),
            R(),
            Yl(t, t("app.Loaded default names and options"), () => {
                X("Wheel", "UndoNewWheel"),
                p.undoWheelConfigChange()
            }
            );
            const Q = Ia(location.hostname, o.value);
            s.replace(Q)
        }
        function R() {
            T.value.resetRotation()
        }
        function M() {
            const Q = Ia(location.hostname, o.value);
            window.history.replaceState({}, "", Q)
        }
        function q(Q) {
            D.value.displayWinnerDialog && y.value.show(Q),
            D.value.animateWinner && x.value.show(Q),
            D.value.launchConfetti && ai(D.value.getCoalescedColors())
        }
        we(D, () => {
            Jo(D.value.duringSpinSound, D.value.afterSpinSound)
        }
        );
        function B() {
            a.query.entries && (X("Wheel", "SetEntriesFromUrl"),
            p.setTextEntries(a.query.entries.toString().split(",")),
            s.replace({
                query: {}
            }))
        }
        function P() {
            setTimeout( () => {
                p.wheelIsAdvanced && !D.value.usesAdvancedFeatures() && (X("Wheel", "AdvancedWheelAutoDowngraded"),
                p.setAdvanced(!1))
            }
            , 200)
        }
        const ee = F(null)
          , j = F(null)
          , K = F(null);
        async function _(Q) {
            let le;
            do {
                let De = c.wheelLocation;
                De !== "cloud" && (De = await Re.value.askUserForLocation("open"),
                c.setWheelLocation(De)),
                le = await (De === "local" ? O() : S(Q.shiftKey)),
                le === "switch" && c.switchWheelLocation()
            } while (le === "switch")
        }
        async function S(Q) {
            try {
                if (!await W() && await ee.value.askUserToLogIn("open") === "switch")
                    return c.switchWheelLocation(),
                    O();
                if (await W())
                    return Q ? await K.value.show() : await j.value.show()
            } catch (le) {
                Ue(t, le),
                Me("OpenWheelError", le)
            }
        }
        async function W() {
            return await g.userIsLoggedIn()
        }
        async function O() {
            try {
                const le = await (await ui({
                    extensions: [".json", ".wheel"]
                })).text()
                  , De = JSON.parse(le);
                p.setWheelConfig(De)
            } catch (Q) {
                if (Q instanceof DOMException && Q.message.includes("abort"))
                    return;
                Ue(t, Q),
                Me("OpenWheelFromLocalFileError", Q)
            }
        }
        const re = F(null)
          , ke = F(null)
          , Re = F(null);
        async function $() {
            let Q;
            do {
                const le = c.wheelLocation || await Re.value.askUserForLocation("save");
                c.setWheelLocation(le),
                Q = await (le === "local" ? ce() : Y()),
                Q === "switch" && c.switchWheelLocation()
            } while (Q === "switch")
        }
        async function Y() {
            if (D.value.isTooBigForDatabase())
                return X("Wheel", "WheelTooBigForDatabase", ""),
                await fa(t, t("savedialog.Thats a lot of images"), t("savedialog.Do you want to save it as a local file instead?")) ? ce() : void 0;
            try {
                if (!await W() && await ee.value.askUserToLogIn("save") === "switch")
                    return c.switchWheelLocation(),
                    ce();
                if (await W()) {
                    const Q = await re.value.show();
                    return M(),
                    Q
                }
            } catch (Q) {
                Ue(t, Q),
                Me("SaveWheelError", Q)
            }
        }
        function ce() {
            return ke.value.show()
        }
        const Ee = F(null)
          , Ie = F(null)
          , de = F(null)
          , be = F(null);
        async function Le() {
            if (D.value.isTooBigForDatabase()) {
                X("Wheel", "WheelTooBigForDatabase", ""),
                Sn(t, t("savedialog.Sorry, too many images"));
                return
            }
            try {
                const {openMySharedWheels: Q, openShareSettings: le} = await Ee.value.show();
                if (Q && Ie.value.show(),
                le) {
                    const De = await de.value.askUserForSettings();
                    if (!De)
                        return;
                    await be.value.share(De)
                }
            } catch (Q) {
                Ue(t, Q),
                Me("ShareWheelError", Q)
            }
        }
        const ve = h( () => l.fullscreen.isActive)
          , He = h( () => !ve.value && !Ja())
          , et = window.location.pathname.includes("/noads");
        et || af();
        const L = h( () => !r.value && !et)
          , se = F(null);
        function me() {
            se.value.show()
        }
        const ge = F(null)
          , Te = F(null)
          , pe = F(null);
        async function je() {
            p.unlinkSheet();
            const Q = await ge.value.askUserToLogIn();
            if (Q) {
                await Mv(Q);
                const le = await Rv();
                if (le) {
                    const {tab: De, column: Qe, skipFirstRow: ft, doLiveImport: Ft, weightsColumn: U} = await Te.value.askUserToConfigure(le);
                    De && Qe && pe.value.start(le, De, Qe, ft, Ft, U)
                }
            }
        }
        const qe = F(null);
        async function tt() {
            try {
                await W() || await ee.value.askUserToLogIn(),
                await W() && qe.value.show()
            } catch (Q) {
                Ue(t, Q),
                Me("AccountDialogError", Q)
            }
        }
        const Ne = F(null);
        function N() {
            Ne.value.show()
        }
        const oe = F(null);
        function he() {
            oe.value.show()
        }
        const $e = F(null);
        function Be() {
            $e.value.show()
        }
        return (Q, le) => (E(),
        Z(Ho, {
            view: "hhh lpr fff"
        }, {
            default: u( () => [n(Uo, {
                reveal: "",
                elevated: "",
                class: "bg-primary text-white"
            }, {
                default: u( () => [n(Hv), n(Ti, {
                    onResetWheel: G,
                    onOpenWheel: _,
                    onSaveWheel: $,
                    onShareWheel: Le,
                    onCustomizeWheel: me,
                    onLinkSheet: je,
                    onOpenAccountDialog: tt,
                    onLanguageChanged: d,
                    onOpenLanguages: N,
                    onOpenPreferencesDialog: Be
                })]),
                _: 1
            }), n(No, null, {
                default: u( () => [m("div", of, [m("div", sf, [ue(n(Vv, {
                    editable: !ve.value,
                    onEditTitleAndDescription: he
                }, null, 8, ["editable"]), [[We, D.value.showTitle]]), L.value ? ue((E(),
                Z(Ov, {
                    key: 0
                }, null, 512)), [[We, !ve.value]]) : _e("", !0)]), m("div", rf, [m("div", uf, [n(Zo, {
                    ref_key: "spinningWheel",
                    ref: T,
                    onWheelStopped: q
                }, null, 512)])]), m("div", cf, [ue(n(mv, null, null, 512), [[We, !ve.value]])])]), He.value ? (E(),
                J("div", df, [le[0] || (le[0] = m("hr", null, null, -1)), n(Cv), le[1] || (le[1] = m("hr", null, null, -1)), n(Qo)])) : _e("", !0)]),
                _: 1
            }), n(ti, {
                ref_key: "winnerDialog",
                ref: y
            }, null, 512), n(Bi, {
                ref_key: "loginDialog",
                ref: ee
            }, null, 512), n(ss, {
                ref_key: "myWheelsDialog",
                ref: K,
                onResetWheelRotation: R,
                onResetAddressBar: M
            }, null, 512), n(vs, {
                ref_key: "openDialog",
                ref: j,
                onResetWheelRotation: R,
                onResetAddressBar: M
            }, null, 512), n(_s, {
                ref_key: "saveCloudDialog",
                ref: re
            }, null, 512), n(ks, {
                ref_key: "saveLocalDialog",
                ref: ke
            }, null, 512), n(As, {
                ref_key: "shareDialogInfo",
                ref: Ee
            }, null, 512), n(Rs, {
                ref_key: "shareDialogMySharedWheels",
                ref: Ie
            }, null, 512), n(Ys, {
                ref_key: "shareDialogSettings",
                ref: de
            }, null, 512), n(tr, {
                ref_key: "shareDialogLink",
                ref: be
            }, null, 512), n(Ju, {
                ref_key: "customizeDialog",
                ref: se
            }, null, 512), n(tc, {
                ref_key: "sheetLoginDialog",
                ref: ge
            }, null, 512), n(xc, {
                ref_key: "sheetConfigDialog",
                ref: Te
            }, null, 512), n(ld, {
                ref_key: "sheetDataPump",
                ref: pe
            }, null, 512), n(Bc, {
                ref_key: "accountDialog",
                ref: qe
            }, null, 512), n(Nc, {
                ref_key: "languageDialog",
                ref: Ne,
                onLanguageChanged: d
            }, null, 512), n(Hc, {
                ref_key: "titleAndDescriptionDialog",
                ref: oe
            }, null, 512), n(lf, {
                ref_key: "wheelLocationDialog",
                ref: Re
            }, null, 512), n(td, {
                ref_key: "preferencesDialog",
                ref: $e
            }, null, 512), n(li, {
                ref_key: "winnerAnimation",
                ref: x
            }, null, 512)]),
            _: 1
        }))
    }
})
  , Lf = ot(vf, [["__scopeId", "data-v-2c23afff"]]);
export {Lf as default};
