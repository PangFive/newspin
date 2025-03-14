const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/index.esm-v344.js", "assets/index.esm2017-v344.js", "assets/index.esm-v3443.js", "assets/index.esm-v3442.js", "assets/esm-v344.js", "assets/_commonjsHelpers-v344.js", "assets/FaqPage-v344.js", "assets/QToolbar-v344.js", "assets/_plugin-vue_export-helper-v344.js", "assets/QPage-v344.js", "assets/AppFooter-v344.js", "assets/use-quasar-v344.js", "assets/AppFooter-BhUctadA.css", "assets/AppToolbarSimple-v344.js", "assets/QToolbarTitle-v344.js", "assets/DarkModeToggle.vue_vue_type_script_setup_true_lang-v344.js", "assets/AppToolbarSimple-DNBlmxEN.css", "assets/QBadge-v344.js", "assets/FaqPage-D-eJH_Al.css", "assets/TutorialsPage-v344.js", "assets/QVideo-v344.js", "assets/use-ratio-v344.js", "assets/ClassroomPage-v344.js", "assets/PrivacyPolicyPage-v344.js", "assets/QMarkupTable-v344.js", "assets/PrivacyPolicyPage-cuqVKRk3.css", "assets/TermsOfServicePage-v344.js", "assets/ChangelogPage-v344.js", "assets/ChangelogPage-DTAvl9XI.css", "assets/GalleryPage-v344.js", "assets/dynamic-import-helper-v344.js", "assets/GallerySearch-v344.js", "assets/QSpace-v344.js", "assets/QChip-v344.js", "assets/position-engine-v344.js", "assets/Messenger-v344.js", "assets/GallerySearch-bMFmiIxA.css", "assets/ApiPage-v344.js", "assets/AboutCard-v344.js", "assets/user-store-v344.js", "assets/ApiPage-67p9aTe_.css", "assets/EditWheelPage-v344.js", "assets/QMenu-v344.js", "assets/DialogCloseIcon-v344.js", "assets/DialogCloseIcon-BYLDWWr0.css", "assets/vue.-sixQ7xP-v344.js", "assets/vue.ziyDaVMR-v344.js", "assets/vue-c31_9dLQ.css", "assets/QImg-v344.js", "assets/EditWheelPage-DlLGnSHj.css", "assets/SharedWheelPage-v344.js", "assets/SharedWheelPage-Dnv5p35Z.css", "assets/ExportPage-v344.js", "assets/ExportPage-0sRgMNOB.css", "assets/TranslationPage-v344.js", "assets/AdminPage-v344.js", "assets/QBreadcrumbs-v344.js", "assets/AdminPage-Cp1v64oL.css", "assets/ReviewWheelPage-v344.js", "assets/ReviewWheelPage-DMgnrINq.css", "assets/GalleryReviewPage-v344.js", "assets/GalleryReviewPage-CkulyH81.css", "assets/AdminAccountPage-v344.js", "assets/i18n-v344.js", "assets/en-US-v344.js", "assets/head-v344.js"]))) => i.map(i => d[i]);
const Rh = function() {
    const t = typeof document < "u" && document.createElement("link").relList;
    return t && t.supports && t.supports("modulepreload") ? "modulepreload" : "preload"
}()
  , Mh = function(e) {
    return "/" + e
}
  , il = {}
  , ke = function(t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const o = document.querySelector("meta[property=csp-nonce]")
          , a = o?.nonce || o?.getAttribute("nonce");
        s = Promise.allSettled(n.map(l => {
            if (l = Mh(l),
            l in il)
                return;
            il[l] = !0;
            const c = l.endsWith(".css")
              , u = c ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${l}"]${u}`))
                return;
            const f = document.createElement("link");
            if (f.rel = c ? "stylesheet" : Rh,
            c || (f.as = "script"),
            f.crossOrigin = "",
            f.href = l,
            a && f.setAttribute("nonce", a),
            document.head.appendChild(f),
            c)
                return new Promise( (d, h) => {
                    f.addEventListener("load", d),
                    f.addEventListener("error", () => h(new Error(`Unable to preload CSS for ${l}`)))
                }
                )
        }
        ))
    }
    function i(o) {
        const a = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (a.payload = o,
        window.dispatchEvent(a),
        !a.defaultPrevented)
            throw o
    }
    return s.then(o => {
        for (const a of o || [])
            a.status === "rejected" && i(a.reason);
        return t().catch(i)
    }
    )
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function fa(e) {
    const t = Object.create(null);
    for (const n of e.split(","))
        t[n] = 1;
    return n => n in t
}
const be = {}
  , rr = []
  , Vt = () => {}
  , Fh = () => !1
  , di = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , da = e => e.startsWith("onUpdate:")
  , $e = Object.assign
  , ha = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Dh = Object.prototype.hasOwnProperty
  , Ce = (e, t) => Dh.call(e, t)
  , oe = Array.isArray
  , sr = e => us(e) === "[object Map]"
  , ku = e => us(e) === "[object Set]"
  , $h = e => us(e) === "[object RegExp]"
  , le = e => typeof e == "function"
  , Oe = e => typeof e == "string"
  , en = e => typeof e == "symbol"
  , Ae = e => e !== null && typeof e == "object"
  , xu = e => (Ae(e) || le(e)) && le(e.then) && le(e.catch)
  , Tu = Object.prototype.toString
  , us = e => Tu.call(e)
  , jh = e => us(e).slice(8, -1)
  , Au = e => us(e) === "[object Object]"
  , ma = e => Oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , Dr = fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , hi = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
}
  , qh = /-(\w)/g
  , mt = hi(e => e.replace(qh, (t, n) => n ? n.toUpperCase() : ""))
  , Vh = /\B([A-Z])/g
  , tn = hi(e => e.replace(Vh, "-$1").toLowerCase())
  , mi = hi(e => e.charAt(0).toUpperCase() + e.slice(1))
  , Di = hi(e => e ? `on${mi(e)}` : "")
  , ut = (e, t) => !Object.is(e, t)
  , ir = (e, ...t) => {
    for (let n = 0; n < e.length; n++)
        e[n](...t)
}
  , Iu = (e, t, n, r=!1) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: r,
        value: n
    })
}
  , So = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , Wh = e => {
    const t = Oe(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let ol;
const gi = () => ol || (ol = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ga(e) {
    if (oe(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , s = Oe(r) ? zh(r) : ga(r);
            if (s)
                for (const i in s)
                    t[i] = s[i]
        }
        return t
    } else if (Oe(e) || Ae(e))
        return e
}
const Bh = /;(?![^(]*\))/g
  , Uh = /:([^]+)/
  , Hh = /\/\*[^]*?\*\//g;
function zh(e) {
    const t = {};
    return e.replace(Hh, "").split(Bh).forEach(n => {
        if (n) {
            const r = n.split(Uh);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
    t
}
function pa(e) {
    let t = "";
    if (Oe(e))
        t = e;
    else if (oe(e))
        for (let n = 0; n < e.length; n++) {
            const r = pa(e[n]);
            r && (t += r + " ")
        }
    else if (Ae(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const Kh = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Gh = fa(Kh);
function Nu(e) {
    return !!e || e === ""
}
const Pu = e => !!(e && e.__v_isRef === !0)
  , Qh = e => Oe(e) ? e : e == null ? "" : oe(e) || Ae(e) && (e.toString === Tu || !le(e.toString)) ? Pu(e) ? Qh(e.value) : JSON.stringify(e, Lu, 2) : String(e)
  , Lu = (e, t) => Pu(t) ? Lu(e, t.value) : sr(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (n, [r,s], i) => (n[$i(r, i) + " =>"] = s,
    n), {})
} : ku(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => $i(n))
} : en(t) ? $i(t) : Ae(t) && !oe(t) && !Au(t) ? String(t) : t
  , $i = (e, t="") => {
    var n;
    return en(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let it;
class Ou {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this._isPaused = !1,
        this.parent = it,
        !t && it && (this.index = (it.scopes || (it.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].pause();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].resume();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = it;
            try {
                return it = this,
                t()
            } finally {
                it = n
            }
        }
    }
    on() {
        it = this
    }
    off() {
        it = this.parent
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, r;
            for (n = 0,
            r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (this.effects.length = 0,
            n = 0,
            r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.cleanups.length = 0,
            this.scopes) {
                for (n = 0,
                r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s,
                s.index = this.index)
            }
            this.parent = void 0
        }
    }
}
function va(e) {
    return new Ou(e)
}
function ya() {
    return it
}
function Ru(e, t=!1) {
    it && it.cleanups.push(e)
}
let Te;
const ji = new WeakSet;
class Mu {
    constructor(t) {
        this.fn = t,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 5,
        this.next = void 0,
        this.cleanup = void 0,
        this.scheduler = void 0,
        it && it.active && it.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65,
        ji.has(this) && (ji.delete(this),
        this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Du(this)
    }
    run() {
        if (!(this.flags & 1))
            return this.fn();
        this.flags |= 2,
        al(this),
        $u(this);
        const t = Te
          , n = Pt;
        Te = this,
        Pt = !0;
        try {
            return this.fn()
        } finally {
            ju(this),
            Te = t,
            Pt = n,
            this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep)
                wa(t);
            this.deps = this.depsTail = void 0,
            al(this),
            this.onStop && this.onStop(),
            this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? ji.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        ko(this) && this.run()
    }
    get dirty() {
        return ko(this)
    }
}
let Fu = 0, $r, jr;
function Du(e, t=!1) {
    if (e.flags |= 8,
    t) {
        e.next = jr,
        jr = e;
        return
    }
    e.next = $r,
    $r = e
}
function ba() {
    Fu++
}
function _a() {
    if (--Fu > 0)
        return;
    if (jr) {
        let t = jr;
        for (jr = void 0; t; ) {
            const n = t.next;
            t.next = void 0,
            t.flags &= -9,
            t = n
        }
    }
    let e;
    for (; $r; ) {
        let t = $r;
        for ($r = void 0; t; ) {
            const n = t.next;
            if (t.next = void 0,
            t.flags &= -9,
            t.flags & 1)
                try {
                    t.trigger()
                } catch (r) {
                    e || (e = r)
                }
            t = n
        }
    }
    if (e)
        throw e
}
function $u(e) {
    for (let t = e.deps; t; t = t.nextDep)
        t.version = -1,
        t.prevActiveLink = t.dep.activeLink,
        t.dep.activeLink = t
}
function ju(e) {
    let t, n = e.depsTail, r = n;
    for (; r; ) {
        const s = r.prevDep;
        r.version === -1 ? (r === n && (n = s),
        wa(r),
        Xh(r)) : t = r,
        r.dep.activeLink = r.prevActiveLink,
        r.prevActiveLink = void 0,
        r = s
    }
    e.deps = t,
    e.depsTail = n
}
function ko(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (qu(t.dep.computed) || t.dep.version !== t.version))
            return !0;
    return !!e._dirty
}
function qu(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17,
    e.globalVersion === Xr))
        return;
    e.globalVersion = Xr;
    const t = e.dep;
    if (e.flags |= 2,
    t.version > 0 && !e.isSSR && e.deps && !ko(e)) {
        e.flags &= -3;
        return
    }
    const n = Te
      , r = Pt;
    Te = e,
    Pt = !0;
    try {
        $u(e);
        const s = e.fn(e._value);
        (t.version === 0 || ut(s, e._value)) && (e._value = s,
        t.version++)
    } catch (s) {
        throw t.version++,
        s
    } finally {
        Te = n,
        Pt = r,
        ju(e),
        e.flags &= -3
    }
}
function wa(e, t=!1) {
    const {dep: n, prevSub: r, nextSub: s} = e;
    if (r && (r.nextSub = s,
    e.prevSub = void 0),
    s && (s.prevSub = r,
    e.nextSub = void 0),
    n.subs === e && (n.subs = r,
    !r && n.computed)) {
        n.computed.flags &= -5;
        for (let i = n.computed.deps; i; i = i.nextDep)
            wa(i, !0)
    }
    !t && !--n.sc && n.map && n.map.delete(n.key)
}
function Xh(e) {
    const {prevDep: t, nextDep: n} = e;
    t && (t.nextDep = n,
    e.prevDep = void 0),
    n && (n.prevDep = t,
    e.nextDep = void 0)
}
let Pt = !0;
const Vu = [];
function wn() {
    Vu.push(Pt),
    Pt = !1
}
function Cn() {
    const e = Vu.pop();
    Pt = e === void 0 ? !0 : e
}
function al(e) {
    const {cleanup: t} = e;
    if (e.cleanup = void 0,
    t) {
        const n = Te;
        Te = void 0;
        try {
            t()
        } finally {
            Te = n
        }
    }
}
let Xr = 0;
class Yh {
    constructor(t, n) {
        this.sub = t,
        this.dep = n,
        this.version = n.version,
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class pi {
    constructor(t) {
        this.computed = t,
        this.version = 0,
        this.activeLink = void 0,
        this.subs = void 0,
        this.map = void 0,
        this.key = void 0,
        this.sc = 0
    }
    track(t) {
        if (!Te || !Pt || Te === this.computed)
            return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== Te)
            n = this.activeLink = new Yh(Te,this),
            Te.deps ? (n.prevDep = Te.depsTail,
            Te.depsTail.nextDep = n,
            Te.depsTail = n) : Te.deps = Te.depsTail = n,
            Wu(n);
        else if (n.version === -1 && (n.version = this.version,
        n.nextDep)) {
            const r = n.nextDep;
            r.prevDep = n.prevDep,
            n.prevDep && (n.prevDep.nextDep = r),
            n.prevDep = Te.depsTail,
            n.nextDep = void 0,
            Te.depsTail.nextDep = n,
            Te.depsTail = n,
            Te.deps === n && (Te.deps = r)
        }
        return n
    }
    trigger(t) {
        this.version++,
        Xr++,
        this.notify(t)
    }
    notify(t) {
        ba();
        try {
            for (let n = this.subs; n; n = n.prevSub)
                n.sub.notify() && n.sub.dep.notify()
        } finally {
            _a()
        }
    }
}
function Wu(e) {
    if (e.dep.sc++,
    e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let r = t.deps; r; r = r.nextDep)
                Wu(r)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n,
        n && (n.nextSub = e)),
        e.dep.subs = e
    }
}
const Bs = new WeakMap
  , Mn = Symbol("")
  , xo = Symbol("")
  , Yr = Symbol("");
function Ze(e, t, n) {
    if (Pt && Te) {
        let r = Bs.get(e);
        r || Bs.set(e, r = new Map);
        let s = r.get(n);
        s || (r.set(n, s = new pi),
        s.map = r,
        s.key = n),
        s.track()
    }
}
function zt(e, t, n, r, s, i) {
    const o = Bs.get(e);
    if (!o) {
        Xr++;
        return
    }
    const a = l => {
        l && l.trigger()
    }
    ;
    if (ba(),
    t === "clear")
        o.forEach(a);
    else {
        const l = oe(e)
          , c = l && ma(n);
        if (l && n === "length") {
            const u = Number(r);
            o.forEach( (f, d) => {
                (d === "length" || d === Yr || !en(d) && d >= u) && a(f)
            }
            )
        } else
            switch ((n !== void 0 || o.has(void 0)) && a(o.get(n)),
            c && a(o.get(Yr)),
            t) {
            case "add":
                l ? c && a(o.get("length")) : (a(o.get(Mn)),
                sr(e) && a(o.get(xo)));
                break;
            case "delete":
                l || (a(o.get(Mn)),
                sr(e) && a(o.get(xo)));
                break;
            case "set":
                sr(e) && a(o.get(Mn));
                break
            }
    }
    _a()
}
function Jh(e, t) {
    const n = Bs.get(e);
    return n && n.get(t)
}
function zn(e) {
    const t = ue(e);
    return t === e ? t : (Ze(t, "iterate", Yr),
    wt(e) ? t : t.map(et))
}
function vi(e) {
    return Ze(e = ue(e), "iterate", Yr),
    e
}
const Zh = {
    __proto__: null,
    [Symbol.iterator]() {
        return qi(this, Symbol.iterator, et)
    },
    concat(...e) {
        return zn(this).concat(...e.map(t => oe(t) ? zn(t) : t))
    },
    entries() {
        return qi(this, "entries", e => (e[1] = et(e[1]),
        e))
    },
    every(e, t) {
        return Wt(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return Wt(this, "filter", e, t, n => n.map(et), arguments)
    },
    find(e, t) {
        return Wt(this, "find", e, t, et, arguments)
    },
    findIndex(e, t) {
        return Wt(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return Wt(this, "findLast", e, t, et, arguments)
    },
    findLastIndex(e, t) {
        return Wt(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return Wt(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return Vi(this, "includes", e)
    },
    indexOf(...e) {
        return Vi(this, "indexOf", e)
    },
    join(e) {
        return zn(this).join(e)
    },
    lastIndexOf(...e) {
        return Vi(this, "lastIndexOf", e)
    },
    map(e, t) {
        return Wt(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return Cr(this, "pop")
    },
    push(...e) {
        return Cr(this, "push", e)
    },
    reduce(e, ...t) {
        return ll(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return ll(this, "reduceRight", e, t)
    },
    shift() {
        return Cr(this, "shift")
    },
    some(e, t) {
        return Wt(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return Cr(this, "splice", e)
    },
    toReversed() {
        return zn(this).toReversed()
    },
    toSorted(e) {
        return zn(this).toSorted(e)
    },
    toSpliced(...e) {
        return zn(this).toSpliced(...e)
    },
    unshift(...e) {
        return Cr(this, "unshift", e)
    },
    values() {
        return qi(this, "values", et)
    }
};
function qi(e, t, n) {
    const r = vi(e)
      , s = r[t]();
    return r !== e && !wt(e) && (s._next = s.next,
    s.next = () => {
        const i = s._next();
        return i.value && (i.value = n(i.value)),
        i
    }
    ),
    s
}
const em = Array.prototype;
function Wt(e, t, n, r, s, i) {
    const o = vi(e)
      , a = o !== e && !wt(e)
      , l = o[t];
    if (l !== em[t]) {
        const f = l.apply(e, i);
        return a ? et(f) : f
    }
    let c = n;
    o !== e && (a ? c = function(f, d) {
        return n.call(this, et(f), d, e)
    }
    : n.length > 2 && (c = function(f, d) {
        return n.call(this, f, d, e)
    }
    ));
    const u = l.call(o, c, r);
    return a && s ? s(u) : u
}
function ll(e, t, n, r) {
    const s = vi(e);
    let i = n;
    return s !== e && (wt(e) ? n.length > 3 && (i = function(o, a, l) {
        return n.call(this, o, a, l, e)
    }
    ) : i = function(o, a, l) {
        return n.call(this, o, et(a), l, e)
    }
    ),
    s[t](i, ...r)
}
function Vi(e, t, n) {
    const r = ue(e);
    Ze(r, "iterate", Yr);
    const s = r[t](...n);
    return (s === -1 || s === !1) && ka(n[0]) ? (n[0] = ue(n[0]),
    r[t](...n)) : s
}
function Cr(e, t, n=[]) {
    wn(),
    ba();
    const r = ue(e)[t].apply(e, n);
    return _a(),
    Cn(),
    r
}
const tm = fa("__proto__,__v_isRef,__isVue")
  , Bu = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(en));
function nm(e) {
    en(e) || (e = String(e));
    const t = ue(this);
    return Ze(t, "has", e),
    t.hasOwnProperty(e)
}
class Uu {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, r) {
        if (n === "__v_skip")
            return t.__v_skip;
        const s = this._isReadonly
          , i = this._isShallow;
        if (n === "__v_isReactive")
            return !s;
        if (n === "__v_isReadonly")
            return s;
        if (n === "__v_isShallow")
            return i;
        if (n === "__v_raw")
            return r === (s ? i ? dm : Gu : i ? Ku : zu).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const o = oe(t);
        if (!s) {
            let l;
            if (o && (l = Zh[n]))
                return l;
            if (n === "hasOwnProperty")
                return nm
        }
        const a = Reflect.get(t, n, Ie(t) ? t : r);
        return (en(n) ? Bu.has(n) : tm(n)) || (s || Ze(t, "get", n),
        i) ? a : Ie(a) ? o && ma(n) ? a : a.value : Ae(a) ? s ? Ea(a) : Vn(a) : a
    }
}
class Hu extends Uu {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, r, s) {
        let i = t[n];
        if (!this._isShallow) {
            const l = qn(i);
            if (!wt(r) && !qn(r) && (i = ue(i),
            r = ue(r)),
            !oe(t) && Ie(i) && !Ie(r))
                return l ? !1 : (i.value = r,
                !0)
        }
        const o = oe(t) && ma(n) ? Number(n) < t.length : Ce(t, n)
          , a = Reflect.set(t, n, r, Ie(t) ? t : s);
        return t === ue(s) && (o ? ut(r, i) && zt(t, "set", n, r) : zt(t, "add", n, r)),
        a
    }
    deleteProperty(t, n) {
        const r = Ce(t, n);
        t[n];
        const s = Reflect.deleteProperty(t, n);
        return s && r && zt(t, "delete", n, void 0),
        s
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!en(n) || !Bu.has(n)) && Ze(t, "has", n),
        r
    }
    ownKeys(t) {
        return Ze(t, "iterate", oe(t) ? "length" : Mn),
        Reflect.ownKeys(t)
    }
}
class rm extends Uu {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const sm = new Hu
  , im = new rm
  , om = new Hu(!0);
const To = e => e
  , ps = e => Reflect.getPrototypeOf(e);
function am(e, t, n) {
    return function(...r) {
        const s = this.__v_raw
          , i = ue(s)
          , o = sr(i)
          , a = e === "entries" || e === Symbol.iterator && o
          , l = e === "keys" && o
          , c = s[e](...r)
          , u = n ? To : t ? Ao : et;
        return !t && Ze(i, "iterate", l ? xo : Mn),
        {
            next() {
                const {value: f, done: d} = c.next();
                return d ? {
                    value: f,
                    done: d
                } : {
                    value: a ? [u(f[0]), u(f[1])] : u(f),
                    done: d
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function vs(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function lm(e, t) {
    const n = {
        get(s) {
            const i = this.__v_raw
              , o = ue(i)
              , a = ue(s);
            e || (ut(s, a) && Ze(o, "get", s),
            Ze(o, "get", a));
            const {has: l} = ps(o)
              , c = t ? To : e ? Ao : et;
            if (l.call(o, s))
                return c(i.get(s));
            if (l.call(o, a))
                return c(i.get(a));
            i !== o && i.get(s)
        },
        get size() {
            const s = this.__v_raw;
            return !e && Ze(ue(s), "iterate", Mn),
            Reflect.get(s, "size", s)
        },
        has(s) {
            const i = this.__v_raw
              , o = ue(i)
              , a = ue(s);
            return e || (ut(s, a) && Ze(o, "has", s),
            Ze(o, "has", a)),
            s === a ? i.has(s) : i.has(s) || i.has(a)
        },
        forEach(s, i) {
            const o = this
              , a = o.__v_raw
              , l = ue(a)
              , c = t ? To : e ? Ao : et;
            return !e && Ze(l, "iterate", Mn),
            a.forEach( (u, f) => s.call(i, c(u), c(f), o))
        }
    };
    return $e(n, e ? {
        add: vs("add"),
        set: vs("set"),
        delete: vs("delete"),
        clear: vs("clear")
    } : {
        add(s) {
            !t && !wt(s) && !qn(s) && (s = ue(s));
            const i = ue(this);
            return ps(i).has.call(i, s) || (i.add(s),
            zt(i, "add", s, s)),
            this
        },
        set(s, i) {
            !t && !wt(i) && !qn(i) && (i = ue(i));
            const o = ue(this)
              , {has: a, get: l} = ps(o);
            let c = a.call(o, s);
            c || (s = ue(s),
            c = a.call(o, s));
            const u = l.call(o, s);
            return o.set(s, i),
            c ? ut(i, u) && zt(o, "set", s, i) : zt(o, "add", s, i),
            this
        },
        delete(s) {
            const i = ue(this)
              , {has: o, get: a} = ps(i);
            let l = o.call(i, s);
            l || (s = ue(s),
            l = o.call(i, s)),
            a && a.call(i, s);
            const c = i.delete(s);
            return l && zt(i, "delete", s, void 0),
            c
        },
        clear() {
            const s = ue(this)
              , i = s.size !== 0
              , o = s.clear();
            return i && zt(s, "clear", void 0, void 0),
            o
        }
    }),
    ["keys", "values", "entries", Symbol.iterator].forEach(s => {
        n[s] = am(s, e, t)
    }
    ),
    n
}
function Ca(e, t) {
    const n = lm(e, t);
    return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(Ce(n, s) && s in r ? n : r, s, i)
}
const cm = {
    get: Ca(!1, !1)
}
  , um = {
    get: Ca(!1, !0)
}
  , fm = {
    get: Ca(!0, !1)
};
const zu = new WeakMap
  , Ku = new WeakMap
  , Gu = new WeakMap
  , dm = new WeakMap;
function hm(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function mm(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : hm(jh(e))
}
function Vn(e) {
    return qn(e) ? e : Sa(e, !1, sm, cm, zu)
}
function Qu(e) {
    return Sa(e, !1, om, um, Ku)
}
function Ea(e) {
    return Sa(e, !0, im, fm, Gu)
}
function Sa(e, t, n, r, s) {
    if (!Ae(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const i = s.get(e);
    if (i)
        return i;
    const o = mm(e);
    if (o === 0)
        return e;
    const a = new Proxy(e,o === 2 ? r : n);
    return s.set(e, a),
    a
}
function yn(e) {
    return qn(e) ? yn(e.__v_raw) : !!(e && e.__v_isReactive)
}
function qn(e) {
    return !!(e && e.__v_isReadonly)
}
function wt(e) {
    return !!(e && e.__v_isShallow)
}
function ka(e) {
    return e ? !!e.__v_raw : !1
}
function ue(e) {
    const t = e && e.__v_raw;
    return t ? ue(t) : e
}
function Wn(e) {
    return !Ce(e, "__v_skip") && Object.isExtensible(e) && Iu(e, "__v_skip", !0),
    e
}
const et = e => Ae(e) ? Vn(e) : e
  , Ao = e => Ae(e) ? Ea(e) : e;
function Ie(e) {
    return e ? e.__v_isRef === !0 : !1
}
function he(e) {
    return Xu(e, !1)
}
function Ct(e) {
    return Xu(e, !0)
}
function Xu(e, t) {
    return Ie(e) ? e : new gm(e,t)
}
class gm {
    constructor(t, n) {
        this.dep = new pi,
        this.__v_isRef = !0,
        this.__v_isShallow = !1,
        this._rawValue = n ? t : ue(t),
        this._value = n ? t : et(t),
        this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(),
        this._value
    }
    set value(t) {
        const n = this._rawValue
          , r = this.__v_isShallow || wt(t) || qn(t);
        t = r ? t : ue(t),
        ut(t, n) && (this._rawValue = t,
        this._value = r ? t : et(t),
        this.dep.trigger())
    }
}
function Xt(e) {
    return Ie(e) ? e.value : e
}
function Lt(e) {
    return le(e) ? e() : Xt(e)
}
const pm = {
    get: (e, t, n) => t === "__v_raw" ? e : Xt(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const s = e[t];
        return Ie(s) && !Ie(n) ? (s.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function Yu(e) {
    return yn(e) ? e : new Proxy(e,pm)
}
class vm {
    constructor(t) {
        this.__v_isRef = !0,
        this._value = void 0;
        const n = this.dep = new pi
          , {get: r, set: s} = t(n.track.bind(n), n.trigger.bind(n));
        this._get = r,
        this._set = s
    }
    get value() {
        return this._value = this._get()
    }
    set value(t) {
        this._set(t)
    }
}
function Ju(e) {
    return new vm(e)
}
function ym(e) {
    const t = oe(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = Zu(e, n);
    return t
}
class bm {
    constructor(t, n, r) {
        this._object = t,
        this._key = n,
        this._defaultValue = r,
        this.__v_isRef = !0,
        this._value = void 0
    }
    get value() {
        const t = this._object[this._key];
        return this._value = t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return Jh(ue(this._object), this._key)
    }
}
class _m {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0,
        this._value = void 0
    }
    get value() {
        return this._value = this._getter()
    }
}
function wm(e, t, n) {
    return Ie(e) ? e : le(e) ? new _m(e) : Ae(e) && arguments.length > 1 ? Zu(e, t, n) : he(e)
}
function Zu(e, t, n) {
    const r = e[t];
    return Ie(r) ? r : new bm(e,t,n)
}
class Cm {
    constructor(t, n, r) {
        this.fn = t,
        this.setter = n,
        this._value = void 0,
        this.dep = new pi(this),
        this.__v_isRef = !0,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 16,
        this.globalVersion = Xr - 1,
        this.next = void 0,
        this.effect = this,
        this.__v_isReadonly = !n,
        this.isSSR = r
    }
    notify() {
        if (this.flags |= 16,
        !(this.flags & 8) && Te !== this)
            return Du(this, !0),
            !0
    }
    get value() {
        const t = this.dep.track();
        return qu(this),
        t && (t.version = this.dep.version),
        this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}
function Em(e, t, n=!1) {
    let r, s;
    return le(e) ? r = e : (r = e.get,
    s = e.set),
    new Cm(r,s,n)
}
const ys = {}
  , Us = new WeakMap;
let Pn;
function Sm(e, t=!1, n=Pn) {
    if (n) {
        let r = Us.get(n);
        r || Us.set(n, r = []),
        r.push(e)
    }
}
function km(e, t, n=be) {
    const {immediate: r, deep: s, once: i, scheduler: o, augmentJob: a, call: l} = n
      , c = y => s ? y : wt(y) || s === !1 || s === 0 ? Kt(y, 1) : Kt(y);
    let u, f, d, h, p = !1, E = !1;
    if (Ie(e) ? (f = () => e.value,
    p = wt(e)) : yn(e) ? (f = () => c(e),
    p = !0) : oe(e) ? (E = !0,
    p = e.some(y => yn(y) || wt(y)),
    f = () => e.map(y => {
        if (Ie(y))
            return y.value;
        if (yn(y))
            return c(y);
        if (le(y))
            return l ? l(y, 2) : y()
    }
    )) : le(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
        if (d) {
            wn();
            try {
                d()
            } finally {
                Cn()
            }
        }
        const y = Pn;
        Pn = u;
        try {
            return l ? l(e, 3, [h]) : e(h)
        } finally {
            Pn = y
        }
    }
    : f = Vt,
    t && s) {
        const y = f
          , x = s === !0 ? 1 / 0 : s;
        f = () => Kt(y(), x)
    }
    const I = ya()
      , b = () => {
        u.stop(),
        I && I.active && ha(I.effects, u)
    }
    ;
    if (i && t) {
        const y = t;
        t = (...x) => {
            y(...x),
            b()
        }
    }
    let m = E ? new Array(e.length).fill(ys) : ys;
    const C = y => {
        if (!(!(u.flags & 1) || !u.dirty && !y))
            if (t) {
                const x = u.run();
                if (s || p || (E ? x.some( (L, N) => ut(L, m[N])) : ut(x, m))) {
                    d && d();
                    const L = Pn;
                    Pn = u;
                    try {
                        const N = [x, m === ys ? void 0 : E && m[0] === ys ? [] : m, h];
                        l ? l(t, 3, N) : t(...N),
                        m = x
                    } finally {
                        Pn = L
                    }
                }
            } else
                u.run()
    }
    ;
    return a && a(C),
    u = new Mu(f),
    u.scheduler = o ? () => o(C, !1) : C,
    h = y => Sm(y, !1, u),
    d = u.onStop = () => {
        const y = Us.get(u);
        if (y) {
            if (l)
                l(y, 4);
            else
                for (const x of y)
                    x();
            Us.delete(u)
        }
    }
    ,
    t ? r ? C(!0) : m = u.run() : o ? o(C.bind(null, !0), !0) : u.run(),
    b.pause = u.pause.bind(u),
    b.resume = u.resume.bind(u),
    b.stop = b,
    b
}
function Kt(e, t=1 / 0, n) {
    if (t <= 0 || !Ae(e) || e.__v_skip || (n = n || new Set,
    n.has(e)))
        return e;
    if (n.add(e),
    t--,
    Ie(e))
        Kt(e.value, t, n);
    else if (oe(e))
        for (let r = 0; r < e.length; r++)
            Kt(e[r], t, n);
    else if (ku(e) || sr(e))
        e.forEach(r => {
            Kt(r, t, n)
        }
        );
    else if (Au(e)) {
        for (const r in e)
            Kt(e[r], t, n);
        for (const r of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, r) && Kt(e[r], t, n)
    }
    return e
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function fs(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (s) {
        yi(s, t, n)
    }
}
function Ot(e, t, n, r) {
    if (le(e)) {
        const s = fs(e, t, n, r);
        return s && xu(s) && s.catch(i => {
            yi(i, t, n)
        }
        ),
        s
    }
    if (oe(e)) {
        const s = [];
        for (let i = 0; i < e.length; i++)
            s.push(Ot(e[i], t, n, r));
        return s
    }
}
function yi(e, t, n, r=!0) {
    const s = t ? t.vnode : null
      , {errorHandler: i, throwUnhandledErrorInProduction: o} = t && t.appContext.config || be;
    if (t) {
        let a = t.parent;
        const l = t.proxy
          , c = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; a; ) {
            const u = a.ec;
            if (u) {
                for (let f = 0; f < u.length; f++)
                    if (u[f](e, l, c) === !1)
                        return
            }
            a = a.parent
        }
        if (i) {
            wn(),
            fs(i, null, 10, [e, l, c]),
            Cn();
            return
        }
    }
    xm(e, n, s, r, o)
}
function xm(e, t, n, r=!0, s=!1) {
    if (s)
        throw e;
    console.error(e)
}
const ot = [];
let jt = -1;
const or = [];
let fn = null
  , Jn = 0;
const ef = Promise.resolve();
let Hs = null;
function at(e) {
    const t = Hs || ef;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function Tm(e) {
    let t = jt + 1
      , n = ot.length;
    for (; t < n; ) {
        const r = t + n >>> 1
          , s = ot[r]
          , i = Jr(s);
        i < e || i === e && s.flags & 2 ? t = r + 1 : n = r
    }
    return t
}
function xa(e) {
    if (!(e.flags & 1)) {
        const t = Jr(e)
          , n = ot[ot.length - 1];
        !n || !(e.flags & 2) && t >= Jr(n) ? ot.push(e) : ot.splice(Tm(t), 0, e),
        e.flags |= 1,
        tf()
    }
}
function tf() {
    Hs || (Hs = ef.then(rf))
}
function Am(e) {
    oe(e) ? or.push(...e) : fn && e.id === -1 ? fn.splice(Jn + 1, 0, e) : e.flags & 1 || (or.push(e),
    e.flags |= 1),
    tf()
}
function cl(e, t, n=jt + 1) {
    for (; n < ot.length; n++) {
        const r = ot[n];
        if (r && r.flags & 2) {
            if (e && r.id !== e.uid)
                continue;
            ot.splice(n, 1),
            n--,
            r.flags & 4 && (r.flags &= -2),
            r(),
            r.flags & 4 || (r.flags &= -2)
        }
    }
}
function nf(e) {
    if (or.length) {
        const t = [...new Set(or)].sort( (n, r) => Jr(n) - Jr(r));
        if (or.length = 0,
        fn) {
            fn.push(...t);
            return
        }
        for (fn = t,
        Jn = 0; Jn < fn.length; Jn++) {
            const n = fn[Jn];
            n.flags & 4 && (n.flags &= -2),
            n.flags & 8 || n(),
            n.flags &= -2
        }
        fn = null,
        Jn = 0
    }
}
const Jr = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function rf(e) {
    try {
        for (jt = 0; jt < ot.length; jt++) {
            const t = ot[jt];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2),
            fs(t, t.i, t.i ? 15 : 14),
            t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; jt < ot.length; jt++) {
            const t = ot[jt];
            t && (t.flags &= -2)
        }
        jt = -1,
        ot.length = 0,
        nf(),
        Hs = null,
        (ot.length || or.length) && rf()
    }
}
let qe = null
  , sf = null;
function zs(e) {
    const t = qe;
    return qe = e,
    sf = e && e.type.__scopeId || null,
    t
}
function Im(e, t=qe, n) {
    if (!t || e._n)
        return e;
    const r = (...s) => {
        r._d && wl(-1);
        const i = zs(t);
        let o;
        try {
            o = e(...s)
        } finally {
            zs(i),
            r._d && wl(1)
        }
        return o
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function of(e, t) {
    if (qe === null)
        return e;
    const n = ki(qe)
      , r = e.dirs || (e.dirs = []);
    for (let s = 0; s < t.length; s++) {
        let[i,o,a,l=be] = t[s];
        i && (le(i) && (i = {
            mounted: i,
            updated: i
        }),
        i.deep && Kt(o),
        r.push({
            dir: i,
            instance: n,
            value: o,
            oldValue: void 0,
            arg: a,
            modifiers: l
        }))
    }
    return e
}
function xn(e, t, n, r) {
    const s = e.dirs
      , i = t && t.dirs;
    for (let o = 0; o < s.length; o++) {
        const a = s[o];
        i && (a.oldValue = i[o].value);
        let l = a.dir[r];
        l && (wn(),
        Ot(l, n, 8, [e.el, a, e, t]),
        Cn())
    }
}
const af = Symbol("_vte")
  , lf = e => e.__isTeleport
  , qr = e => e && (e.disabled || e.disabled === "")
  , ul = e => e && (e.defer || e.defer === "")
  , fl = e => typeof SVGElement < "u" && e instanceof SVGElement
  , dl = e => typeof MathMLElement == "function" && e instanceof MathMLElement
  , Io = (e, t) => {
    const n = e && e.to;
    return Oe(n) ? t ? t(n) : null : n
}
  , cf = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, s, i, o, a, l, c) {
        const {mc: u, pc: f, pbc: d, o: {insert: h, querySelector: p, createText: E, createComment: I}} = c
          , b = qr(t.props);
        let {shapeFlag: m, children: C, dynamicChildren: y} = t;
        if (e == null) {
            const x = t.el = E("")
              , L = t.anchor = E("");
            h(x, n, r),
            h(L, n, r);
            const N = (k, O) => {
                m & 16 && (s && s.isCE && (s.ce._teleportTarget = k),
                u(C, k, O, s, i, o, a, l))
            }
              , W = () => {
                const k = t.target = Io(t.props, p)
                  , O = uf(k, t, E, h);
                k && (o !== "svg" && fl(k) ? o = "svg" : o !== "mathml" && dl(k) && (o = "mathml"),
                b || (N(k, O),
                Ls(t, !1)))
            }
            ;
            b && (N(n, L),
            Ls(t, !0)),
            ul(t.props) ? je( () => {
                W(),
                t.el.__isMounted = !0
            }
            , i) : W()
        } else {
            if (ul(t.props) && !e.el.__isMounted) {
                je( () => {
                    cf.process(e, t, n, r, s, i, o, a, l, c),
                    delete e.el.__isMounted
                }
                , i);
                return
            }
            t.el = e.el,
            t.targetStart = e.targetStart;
            const x = t.anchor = e.anchor
              , L = t.target = e.target
              , N = t.targetAnchor = e.targetAnchor
              , W = qr(e.props)
              , k = W ? n : L
              , O = W ? x : N;
            if (o === "svg" || fl(L) ? o = "svg" : (o === "mathml" || dl(L)) && (o = "mathml"),
            y ? (d(e.dynamicChildren, y, k, s, i, o, a),
            Pa(e, t, !0)) : l || f(e, t, k, O, s, i, o, a, !1),
            b)
                W ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : bs(t, n, x, c, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const q = t.target = Io(t.props, p);
                q && bs(t, q, null, c, 0)
            } else
                W && bs(t, L, N, c, 1);
            Ls(t, b)
        }
    },
    remove(e, t, n, {um: r, o: {remove: s}}, i) {
        const {shapeFlag: o, children: a, anchor: l, targetStart: c, targetAnchor: u, target: f, props: d} = e;
        if (f && (s(c),
        s(u)),
        i && s(l),
        o & 16) {
            const h = i || !qr(d);
            for (let p = 0; p < a.length; p++) {
                const E = a[p];
                r(E, t, n, h, !!E.dynamicChildren)
            }
        }
    },
    move: bs,
    hydrate: Nm
};
function bs(e, t, n, {o: {insert: r}, m: s}, i=2) {
    i === 0 && r(e.targetAnchor, t, n);
    const {el: o, anchor: a, shapeFlag: l, children: c, props: u} = e
      , f = i === 2;
    if (f && r(o, t, n),
    (!f || qr(u)) && l & 16)
        for (let d = 0; d < c.length; d++)
            s(c[d], t, n, 2);
    f && r(a, t, n)
}
function Nm(e, t, n, r, s, i, {o: {nextSibling: o, parentNode: a, querySelector: l, insert: c, createText: u}}, f) {
    const d = t.target = Io(t.props, l);
    if (d) {
        const h = qr(t.props)
          , p = d._lpa || d.firstChild;
        if (t.shapeFlag & 16)
            if (h)
                t.anchor = f(o(e), t, a(e), n, r, s, i),
                t.targetStart = p,
                t.targetAnchor = p && o(p);
            else {
                t.anchor = o(e);
                let E = p;
                for (; E; ) {
                    if (E && E.nodeType === 8) {
                        if (E.data === "teleport start anchor")
                            t.targetStart = E;
                        else if (E.data === "teleport anchor") {
                            t.targetAnchor = E,
                            d._lpa = t.targetAnchor && o(t.targetAnchor);
                            break
                        }
                    }
                    E = o(E)
                }
                t.targetAnchor || uf(d, t, u, c),
                f(p && o(p), t, d, n, r, s, i)
            }
        Ls(t, h)
    }
    return t.anchor && o(t.anchor)
}
const Pm = cf;
function Ls(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
        let r, s;
        for (t ? (r = e.el,
        s = e.anchor) : (r = e.targetStart,
        s = e.targetAnchor); r && r !== s; )
            r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid),
            r = r.nextSibling;
        n.ut()
    }
}
function uf(e, t, n, r) {
    const s = t.targetStart = n("")
      , i = t.targetAnchor = n("");
    return s[af] = i,
    e && (r(s, e),
    r(i, e)),
    i
}
const dn = Symbol("_leaveCb")
  , _s = Symbol("_enterCb");
function ff() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return St( () => {
        e.isMounted = !0
    }
    ),
    kt( () => {
        e.isUnmounting = !0
    }
    ),
    e
}
const pt = [Function, Array]
  , df = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: pt,
    onEnter: pt,
    onAfterEnter: pt,
    onEnterCancelled: pt,
    onBeforeLeave: pt,
    onLeave: pt,
    onAfterLeave: pt,
    onLeaveCancelled: pt,
    onBeforeAppear: pt,
    onAppear: pt,
    onAfterAppear: pt,
    onAppearCancelled: pt
}
  , hf = e => {
    const t = e.subTree;
    return t.component ? hf(t.component) : t
}
  , Lm = {
    name: "BaseTransition",
    props: df,
    setup(e, {slots: t}) {
        const n = Se()
          , r = ff();
        return () => {
            const s = t.default && Ta(t.default(), !0);
            if (!s || !s.length)
                return;
            const i = mf(s)
              , o = ue(e)
              , {mode: a} = o;
            if (r.isLeaving)
                return Wi(i);
            const l = hl(i);
            if (!l)
                return Wi(i);
            let c = Zr(l, o, r, n, f => c = f);
            l.type !== nt && bn(l, c);
            let u = n.subTree && hl(n.subTree);
            if (u && u.type !== nt && !pn(l, u) && hf(n).type !== nt) {
                let f = Zr(u, o, r, n);
                if (bn(u, f),
                a === "out-in" && l.type !== nt)
                    return r.isLeaving = !0,
                    f.afterLeave = () => {
                        r.isLeaving = !1,
                        n.job.flags & 8 || n.update(),
                        delete f.afterLeave,
                        u = void 0
                    }
                    ,
                    Wi(i);
                a === "in-out" && l.type !== nt ? f.delayLeave = (d, h, p) => {
                    const E = gf(r, u);
                    E[String(u.key)] = u,
                    d[dn] = () => {
                        h(),
                        d[dn] = void 0,
                        delete c.delayedLeave,
                        u = void 0
                    }
                    ,
                    c.delayedLeave = () => {
                        p(),
                        delete c.delayedLeave,
                        u = void 0
                    }
                }
                : u = void 0
            } else
                u && (u = void 0);
            return i
        }
    }
};
function mf(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e)
            if (n.type !== nt) {
                t = n;
                break
            }
    }
    return t
}
const Om = Lm;
function gf(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null),
    n.set(t.type, r)),
    r
}
function Zr(e, t, n, r, s) {
    const {appear: i, mode: o, persisted: a=!1, onBeforeEnter: l, onEnter: c, onAfterEnter: u, onEnterCancelled: f, onBeforeLeave: d, onLeave: h, onAfterLeave: p, onLeaveCancelled: E, onBeforeAppear: I, onAppear: b, onAfterAppear: m, onAppearCancelled: C} = t
      , y = String(e.key)
      , x = gf(n, e)
      , L = (k, O) => {
        k && Ot(k, r, 9, O)
    }
      , N = (k, O) => {
        const q = O[1];
        L(k, O),
        oe(k) ? k.every(S => S.length <= 1) && q() : k.length <= 1 && q()
    }
      , W = {
        mode: o,
        persisted: a,
        beforeEnter(k) {
            let O = l;
            if (!n.isMounted)
                if (i)
                    O = I || l;
                else
                    return;
            k[dn] && k[dn](!0);
            const q = x[y];
            q && pn(e, q) && q.el[dn] && q.el[dn](),
            L(O, [k])
        },
        enter(k) {
            let O = c
              , q = u
              , S = f;
            if (!n.isMounted)
                if (i)
                    O = b || c,
                    q = m || u,
                    S = C || f;
                else
                    return;
            let G = !1;
            const D = k[_s] = ee => {
                G || (G = !0,
                ee ? L(S, [k]) : L(q, [k]),
                W.delayedLeave && W.delayedLeave(),
                k[_s] = void 0)
            }
            ;
            O ? N(O, [k, D]) : D()
        },
        leave(k, O) {
            const q = String(e.key);
            if (k[_s] && k[_s](!0),
            n.isUnmounting)
                return O();
            L(d, [k]);
            let S = !1;
            const G = k[dn] = D => {
                S || (S = !0,
                O(),
                D ? L(E, [k]) : L(p, [k]),
                k[dn] = void 0,
                x[q] === e && delete x[q])
            }
            ;
            x[q] = e,
            h ? N(h, [k, G]) : G()
        },
        clone(k) {
            const O = Zr(k, t, n, r, s);
            return s && s(O),
            O
        }
    };
    return W
}
function Wi(e) {
    if (bi(e))
        return e = Jt(e),
        e.children = null,
        e
}
function hl(e) {
    if (!bi(e))
        return lf(e.type) && e.children ? mf(e.children) : e;
    const {shapeFlag: t, children: n} = e;
    if (n) {
        if (t & 16)
            return n[0];
        if (t & 32 && le(n.default))
            return n.default()
    }
}
function bn(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t,
    bn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Ta(e, t=!1, n) {
    let r = []
      , s = 0;
    for (let i = 0; i < e.length; i++) {
        let o = e[i];
        const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
        o.type === tt ? (o.patchFlag & 128 && s++,
        r = r.concat(Ta(o.children, t, a))) : (t || o.type !== nt) && r.push(a != null ? Jt(o, {
            key: a
        }) : o)
    }
    if (s > 1)
        for (let i = 0; i < r.length; i++)
            r[i].patchFlag = -2;
    return r
}
/*! #__NO_SIDE_EFFECTS__ */
function Bn(e, t) {
    return le(e) ? $e({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
function pf(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
function Ks(e, t, n, r, s=!1) {
    if (oe(e)) {
        e.forEach( (p, E) => Ks(p, t && (oe(t) ? t[E] : t), n, r, s));
        return
    }
    if (Fn(r) && !s) {
        r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ks(e, t, n, r.component.subTree);
        return
    }
    const i = r.shapeFlag & 4 ? ki(r.component) : r.el
      , o = s ? null : i
      , {i: a, r: l} = e
      , c = t && t.r
      , u = a.refs === be ? a.refs = {} : a.refs
      , f = a.setupState
      , d = ue(f)
      , h = f === be ? () => !1 : p => Ce(d, p);
    if (c != null && c !== l && (Oe(c) ? (u[c] = null,
    h(c) && (f[c] = null)) : Ie(c) && (c.value = null)),
    le(l))
        fs(l, a, 12, [o, u]);
    else {
        const p = Oe(l)
          , E = Ie(l);
        if (p || E) {
            const I = () => {
                if (e.f) {
                    const b = p ? h(l) ? f[l] : u[l] : l.value;
                    s ? oe(b) && ha(b, i) : oe(b) ? b.includes(i) || b.push(i) : p ? (u[l] = [i],
                    h(l) && (f[l] = u[l])) : (l.value = [i],
                    e.k && (u[e.k] = l.value))
                } else
                    p ? (u[l] = o,
                    h(l) && (f[l] = o)) : E && (l.value = o,
                    e.k && (u[e.k] = o))
            }
            ;
            o ? (I.id = -1,
            je(I, n)) : I()
        }
    }
}
gi().requestIdleCallback;
gi().cancelIdleCallback;
const Fn = e => !!e.type.__asyncLoader
  , bi = e => e.type.__isKeepAlive
  , Rm = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(e, {slots: t}) {
        const n = Se()
          , r = n.ctx;
        if (!r.renderer)
            return () => {
                const m = t.default && t.default();
                return m && m.length === 1 ? m[0] : m
            }
            ;
        const s = new Map
          , i = new Set;
        let o = null;
        const a = n.suspense
          , {renderer: {p: l, m: c, um: u, o: {createElement: f}}} = r
          , d = f("div");
        r.activate = (m, C, y, x, L) => {
            const N = m.component;
            c(m, C, y, 0, a),
            l(N.vnode, m, C, y, N, a, x, m.slotScopeIds, L),
            je( () => {
                N.isDeactivated = !1,
                N.a && ir(N.a);
                const W = m.props && m.props.onVnodeMounted;
                W && yt(W, N.parent, m)
            }
            , a)
        }
        ,
        r.deactivate = m => {
            const C = m.component;
            Xs(C.m),
            Xs(C.a),
            c(m, d, null, 1, a),
            je( () => {
                C.da && ir(C.da);
                const y = m.props && m.props.onVnodeUnmounted;
                y && yt(y, C.parent, m),
                C.isDeactivated = !0
            }
            , a)
        }
        ;
        function h(m) {
            Bi(m),
            u(m, n, a, !0)
        }
        function p(m) {
            s.forEach( (C, y) => {
                const x = Mo(C.type);
                x && !m(x) && E(y)
            }
            )
        }
        function E(m) {
            const C = s.get(m);
            C && (!o || !pn(C, o)) ? h(C) : o && Bi(o),
            s.delete(m),
            i.delete(m)
        }
        de( () => [e.include, e.exclude], ([m,C]) => {
            m && p(y => Or(m, y)),
            C && p(y => !Or(C, y))
        }
        , {
            flush: "post",
            deep: !0
        });
        let I = null;
        const b = () => {
            I != null && (Ys(n.subTree.type) ? je( () => {
                s.set(I, ws(n.subTree))
            }
            , n.subTree.suspense) : s.set(I, ws(n.subTree)))
        }
        ;
        return St(b),
        Aa(b),
        kt( () => {
            s.forEach(m => {
                const {subTree: C, suspense: y} = n
                  , x = ws(C);
                if (m.type === x.type && m.key === x.key) {
                    Bi(x);
                    const L = x.component.da;
                    L && je(L, y);
                    return
                }
                h(m)
            }
            )
        }
        ),
        () => {
            if (I = null,
            !t.default)
                return o = null;
            const m = t.default()
              , C = m[0];
            if (m.length > 1)
                return o = null,
                m;
            if (!cr(C) || !(C.shapeFlag & 4) && !(C.shapeFlag & 128))
                return o = null,
                C;
            let y = ws(C);
            if (y.type === nt)
                return o = null,
                y;
            const x = y.type
              , L = Mo(Fn(y) ? y.type.__asyncResolved || {} : x)
              , {include: N, exclude: W, max: k} = e;
            if (N && (!L || !Or(N, L)) || W && L && Or(W, L))
                return y.shapeFlag &= -257,
                o = y,
                C;
            const O = y.key == null ? x : y.key
              , q = s.get(O);
            return y.el && (y = Jt(y),
            C.shapeFlag & 128 && (C.ssContent = y)),
            I = O,
            q ? (y.el = q.el,
            y.component = q.component,
            y.transition && bn(y, y.transition),
            y.shapeFlag |= 512,
            i.delete(O),
            i.add(O)) : (i.add(O),
            k && i.size > parseInt(k, 10) && E(i.values().next().value)),
            y.shapeFlag |= 256,
            o = y,
            Ys(C.type) ? C : y
        }
    }
}
  , OC = Rm;
function Or(e, t) {
    return oe(e) ? e.some(n => Or(n, t)) : Oe(e) ? e.split(",").includes(t) : $h(e) ? (e.lastIndex = 0,
    e.test(t)) : !1
}
function vf(e, t) {
    yf(e, "a", t)
}
function _i(e, t) {
    yf(e, "da", t)
}
function yf(e, t, n=He) {
    const r = e.__wdc || (e.__wdc = () => {
        let s = n;
        for (; s; ) {
            if (s.isDeactivated)
                return;
            s = s.parent
        }
        return e()
    }
    );
    if (wi(t, r, n),
    n) {
        let s = n.parent;
        for (; s && s.parent; )
            bi(s.parent.vnode) && Mm(r, t, n, s),
            s = s.parent
    }
}
function Mm(e, t, n, r) {
    const s = wi(t, e, r, !0);
    Ci( () => {
        ha(r[t], s)
    }
    , n)
}
function Bi(e) {
    e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function ws(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}
function wi(e, t, n=He, r=!1) {
    if (n) {
        const s = n[e] || (n[e] = [])
          , i = t.__weh || (t.__weh = (...o) => {
            wn();
            const a = hs(n)
              , l = Ot(t, n, e, o);
            return a(),
            Cn(),
            l
        }
        );
        return r ? s.unshift(i) : s.push(i),
        i
    }
}
const nn = e => (t, n=He) => {
    (!ts || e === "sp") && wi(e, (...r) => t(...r), n)
}
  , Fm = nn("bm")
  , St = nn("m")
  , bf = nn("bu")
  , Aa = nn("u")
  , kt = nn("bum")
  , Ci = nn("um")
  , Dm = nn("sp")
  , $m = nn("rtg")
  , jm = nn("rtc");
function qm(e, t=He) {
    wi("ec", e, t)
}
const Vm = "components";
function Wm(e, t) {
    return Um(Vm, e, !0, t) || e
}
const Bm = Symbol.for("v-ndc");
function Um(e, t, n=!0, r=!1) {
    const s = qe || He;
    if (s) {
        const i = s.type;
        {
            const a = Mo(i, !1);
            if (a && (a === t || a === mt(t) || a === mi(mt(t))))
                return i
        }
        const o = ml(s[e] || i[e], t) || ml(s.appContext[e], t);
        return !o && r ? i : o
    }
}
function ml(e, t) {
    return e && (e[t] || e[mt(t)] || e[mi(mt(t))])
}
function RC(e, t, n, r) {
    let s;
    const i = n
      , o = oe(e);
    if (o || Oe(e)) {
        const a = o && yn(e);
        let l = !1;
        a && (l = !wt(e),
        e = vi(e)),
        s = new Array(e.length);
        for (let c = 0, u = e.length; c < u; c++)
            s[c] = t(l ? et(e[c]) : e[c], c, void 0, i)
    } else if (typeof e == "number") {
        s = new Array(e);
        for (let a = 0; a < e; a++)
            s[a] = t(a + 1, a, void 0, i)
    } else if (Ae(e))
        if (e[Symbol.iterator])
            s = Array.from(e, (a, l) => t(a, l, void 0, i));
        else {
            const a = Object.keys(e);
            s = new Array(a.length);
            for (let l = 0, c = a.length; l < c; l++) {
                const u = a[l];
                s[l] = t(e[u], u, l, i)
            }
        }
    else
        s = [];
    return s
}
function MC(e, t) {
    for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (oe(r))
            for (let s = 0; s < r.length; s++)
                e[r[s].name] = r[s].fn;
        else
            r && (e[r.name] = r.key ? (...s) => {
                const i = r.fn(...s);
                return i && (i.key = r.key),
                i
            }
            : r.fn)
    }
    return e
}
function FC(e, t, n={}, r, s) {
    if (qe.ce || qe.parent && Fn(qe.parent) && qe.parent.ce)
        return t !== "default" && (n.name = t),
        Js(),
        Zs(tt, null, [Qe("slot", n, r)], 64);
    let i = e[t];
    i && i._c && (i._d = !1),
    Js();
    const o = i && _f(i(n))
      , a = n.key || o && o.key
      , l = Zs(tt, {
        key: (a && !en(a) ? a : `_${t}`) + ""
    }, o || [], o && e._ === 1 ? 64 : -2);
    return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    l
}
function _f(e) {
    return e.some(t => cr(t) ? !(t.type === nt || t.type === tt && !_f(t.children)) : !0) ? e : null
}
const No = e => e ? Vf(e) ? ki(e) : No(e.parent) : null
  , Vr = $e(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => No(e.parent),
    $root: e => No(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => Cf(e),
    $forceUpdate: e => e.f || (e.f = () => {
        xa(e.update)
    }
    ),
    $nextTick: e => e.n || (e.n = at.bind(e.proxy)),
    $watch: e => dg.bind(e)
})
  , Ui = (e, t) => e !== be && !e.__isScriptSetup && Ce(e, t)
  , Hm = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: n, setupState: r, data: s, props: i, accessCache: o, type: a, appContext: l} = e;
        let c;
        if (t[0] !== "$") {
            const h = o[t];
            if (h !== void 0)
                switch (h) {
                case 1:
                    return r[t];
                case 2:
                    return s[t];
                case 4:
                    return n[t];
                case 3:
                    return i[t]
                }
            else {
                if (Ui(r, t))
                    return o[t] = 1,
                    r[t];
                if (s !== be && Ce(s, t))
                    return o[t] = 2,
                    s[t];
                if ((c = e.propsOptions[0]) && Ce(c, t))
                    return o[t] = 3,
                    i[t];
                if (n !== be && Ce(n, t))
                    return o[t] = 4,
                    n[t];
                Po && (o[t] = 0)
            }
        }
        const u = Vr[t];
        let f, d;
        if (u)
            return t === "$attrs" && Ze(e.attrs, "get", ""),
            u(e);
        if ((f = a.__cssModules) && (f = f[t]))
            return f;
        if (n !== be && Ce(n, t))
            return o[t] = 4,
            n[t];
        if (d = l.config.globalProperties,
        Ce(d, t))
            return d[t]
    },
    set({_: e}, t, n) {
        const {data: r, setupState: s, ctx: i} = e;
        return Ui(s, t) ? (s[t] = n,
        !0) : r !== be && Ce(r, t) ? (r[t] = n,
        !0) : Ce(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (i[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: i}}, o) {
        let a;
        return !!n[o] || e !== be && Ce(e, o) || Ui(t, o) || (a = i[0]) && Ce(a, o) || Ce(r, o) || Ce(Vr, o) || Ce(s.config.globalProperties, o)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : Ce(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function Gs(e) {
    return oe(e) ? e.reduce( (t, n) => (t[n] = null,
    t), {}) : e
}
function DC(e, t) {
    return !e || !t ? e || t : oe(e) && oe(t) ? e.concat(t) : $e({}, Gs(e), Gs(t))
}
let Po = !0;
function zm(e) {
    const t = Cf(e)
      , n = e.proxy
      , r = e.ctx;
    Po = !1,
    t.beforeCreate && gl(t.beforeCreate, e, "bc");
    const {data: s, computed: i, methods: o, watch: a, provide: l, inject: c, created: u, beforeMount: f, mounted: d, beforeUpdate: h, updated: p, activated: E, deactivated: I, beforeDestroy: b, beforeUnmount: m, destroyed: C, unmounted: y, render: x, renderTracked: L, renderTriggered: N, errorCaptured: W, serverPrefetch: k, expose: O, inheritAttrs: q, components: S, directives: G, filters: D} = t;
    if (c && Km(c, r, null),
    o)
        for (const Q in o) {
            const K = o[Q];
            le(K) && (r[Q] = K.bind(n))
        }
    if (s) {
        const Q = s.call(n, n);
        Ae(Q) && (e.data = Vn(Q))
    }
    if (Po = !0,
    i)
        for (const Q in i) {
            const K = i[Q]
              , ie = le(K) ? K.bind(n, n) : le(K.get) ? K.get.bind(n, n) : Vt
              , ce = !le(K) && le(K.set) ? K.set.bind(n) : Vt
              , fe = M({
                get: ie,
                set: ce
            });
            Object.defineProperty(r, Q, {
                enumerable: !0,
                configurable: !0,
                get: () => fe.value,
                set: z => fe.value = z
            })
        }
    if (a)
        for (const Q in a)
            wf(a[Q], r, n, Q);
    if (l) {
        const Q = le(l) ? l.call(n) : l;
        Reflect.ownKeys(Q).forEach(K => {
            Os(K, Q[K])
        }
        )
    }
    u && gl(u, e, "c");
    function J(Q, K) {
        oe(K) ? K.forEach(ie => Q(ie.bind(n))) : K && Q(K.bind(n))
    }
    if (J(Fm, f),
    J(St, d),
    J(bf, h),
    J(Aa, p),
    J(vf, E),
    J(_i, I),
    J(qm, W),
    J(jm, L),
    J($m, N),
    J(kt, m),
    J(Ci, y),
    J(Dm, k),
    oe(O))
        if (O.length) {
            const Q = e.exposed || (e.exposed = {});
            O.forEach(K => {
                Object.defineProperty(Q, K, {
                    get: () => n[K],
                    set: ie => n[K] = ie
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    x && e.render === Vt && (e.render = x),
    q != null && (e.inheritAttrs = q),
    S && (e.components = S),
    G && (e.directives = G),
    k && pf(e)
}
function Km(e, t, n=Vt) {
    oe(e) && (e = Lo(e));
    for (const r in e) {
        const s = e[r];
        let i;
        Ae(s) ? "default"in s ? i = lt(s.from || r, s.default, !0) : i = lt(s.from || r) : i = lt(s),
        Ie(i) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: o => i.value = o
        }) : t[r] = i
    }
}
function gl(e, t, n) {
    Ot(oe(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function wf(e, t, n, r) {
    let s = r.includes(".") ? Mf(n, r) : () => n[r];
    if (Oe(e)) {
        const i = t[e];
        le(i) && de(s, i)
    } else if (le(e))
        de(s, e.bind(n));
    else if (Ae(e))
        if (oe(e))
            e.forEach(i => wf(i, t, n, r));
        else {
            const i = le(e.handler) ? e.handler.bind(n) : t[e.handler];
            le(i) && de(s, i, e)
        }
}
function Cf(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: s, optionsCache: i, config: {optionMergeStrategies: o}} = e.appContext
      , a = i.get(t);
    let l;
    return a ? l = a : !s.length && !n && !r ? l = t : (l = {},
    s.length && s.forEach(c => Qs(l, c, o, !0)),
    Qs(l, t, o)),
    Ae(t) && i.set(t, l),
    l
}
function Qs(e, t, n, r=!1) {
    const {mixins: s, extends: i} = t;
    i && Qs(e, i, n, !0),
    s && s.forEach(o => Qs(e, o, n, !0));
    for (const o in t)
        if (!(r && o === "expose")) {
            const a = Gm[o] || n && n[o];
            e[o] = a ? a(e[o], t[o]) : t[o]
        }
    return e
}
const Gm = {
    data: pl,
    props: vl,
    emits: vl,
    methods: Rr,
    computed: Rr,
    beforeCreate: rt,
    created: rt,
    beforeMount: rt,
    mounted: rt,
    beforeUpdate: rt,
    updated: rt,
    beforeDestroy: rt,
    beforeUnmount: rt,
    destroyed: rt,
    unmounted: rt,
    activated: rt,
    deactivated: rt,
    errorCaptured: rt,
    serverPrefetch: rt,
    components: Rr,
    directives: Rr,
    watch: Xm,
    provide: pl,
    inject: Qm
};
function pl(e, t) {
    return t ? e ? function() {
        return $e(le(e) ? e.call(this, this) : e, le(t) ? t.call(this, this) : t)
    }
    : t : e
}
function Qm(e, t) {
    return Rr(Lo(e), Lo(t))
}
function Lo(e) {
    if (oe(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function rt(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function Rr(e, t) {
    return e ? $e(Object.create(null), e, t) : t
}
function vl(e, t) {
    return e ? oe(e) && oe(t) ? [...new Set([...e, ...t])] : $e(Object.create(null), Gs(e), Gs(t ?? {})) : t
}
function Xm(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = $e(Object.create(null), e);
    for (const r in t)
        n[r] = rt(e[r], t[r]);
    return n
}
function Ef() {
    return {
        app: null,
        config: {
            isNativeTag: Fh,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Ym = 0;
function Jm(e, t) {
    return function(r, s=null) {
        le(r) || (r = $e({}, r)),
        s != null && !Ae(s) && (s = null);
        const i = Ef()
          , o = new WeakSet
          , a = [];
        let l = !1;
        const c = i.app = {
            _uid: Ym++,
            _component: r,
            _props: s,
            _container: null,
            _context: i,
            _instance: null,
            version: Lg,
            get config() {
                return i.config
            },
            set config(u) {},
            use(u, ...f) {
                return o.has(u) || (u && le(u.install) ? (o.add(u),
                u.install(c, ...f)) : le(u) && (o.add(u),
                u(c, ...f))),
                c
            },
            mixin(u) {
                return i.mixins.includes(u) || i.mixins.push(u),
                c
            },
            component(u, f) {
                return f ? (i.components[u] = f,
                c) : i.components[u]
            },
            directive(u, f) {
                return f ? (i.directives[u] = f,
                c) : i.directives[u]
            },
            mount(u, f, d) {
                if (!l) {
                    const h = c._ceVNode || Qe(r, s);
                    return h.appContext = i,
                    d === !0 ? d = "svg" : d === !1 && (d = void 0),
                    e(h, u, d),
                    l = !0,
                    c._container = u,
                    u.__vue_app__ = c,
                    ki(h.component)
                }
            },
            onUnmount(u) {
                a.push(u)
            },
            unmount() {
                l && (Ot(a, c._instance, 16),
                e(null, c._container),
                delete c._container.__vue_app__)
            },
            provide(u, f) {
                return i.provides[u] = f,
                c
            },
            runWithContext(u) {
                const f = Dn;
                Dn = c;
                try {
                    return u()
                } finally {
                    Dn = f
                }
            }
        };
        return c
    }
}
let Dn = null;
function Os(e, t) {
    if (He) {
        let n = He.provides;
        const r = He.parent && He.parent.provides;
        r === n && (n = He.provides = Object.create(r)),
        n[e] = t
    }
}
function lt(e, t, n=!1) {
    const r = He || qe;
    if (r || Dn) {
        const s = Dn ? Dn._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
        if (s && e in s)
            return s[e];
        if (arguments.length > 1)
            return n && le(t) ? t.call(r && r.proxy) : t
    }
}
function Ia() {
    return !!(He || qe || Dn)
}
const Sf = {}
  , kf = () => Object.create(Sf)
  , xf = e => Object.getPrototypeOf(e) === Sf;
function Zm(e, t, n, r=!1) {
    const s = {}
      , i = kf();
    e.propsDefaults = Object.create(null),
    Tf(e, t, s, i);
    for (const o in e.propsOptions[0])
        o in s || (s[o] = void 0);
    n ? e.props = r ? s : Qu(s) : e.type.props ? e.props = s : e.props = i,
    e.attrs = i
}
function eg(e, t, n, r) {
    const {props: s, attrs: i, vnode: {patchFlag: o}} = e
      , a = ue(s)
      , [l] = e.propsOptions;
    let c = !1;
    if ((r || o > 0) && !(o & 16)) {
        if (o & 8) {
            const u = e.vnode.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                let d = u[f];
                if (Si(e.emitsOptions, d))
                    continue;
                const h = t[d];
                if (l)
                    if (Ce(i, d))
                        h !== i[d] && (i[d] = h,
                        c = !0);
                    else {
                        const p = mt(d);
                        s[p] = Oo(l, a, p, h, e, !1)
                    }
                else
                    h !== i[d] && (i[d] = h,
                    c = !0)
            }
        }
    } else {
        Tf(e, t, s, i) && (c = !0);
        let u;
        for (const f in a)
            (!t || !Ce(t, f) && ((u = tn(f)) === f || !Ce(t, u))) && (l ? n && (n[f] !== void 0 || n[u] !== void 0) && (s[f] = Oo(l, a, f, void 0, e, !0)) : delete s[f]);
        if (i !== a)
            for (const f in i)
                (!t || !Ce(t, f)) && (delete i[f],
                c = !0)
    }
    c && zt(e.attrs, "set", "")
}
function Tf(e, t, n, r) {
    const [s,i] = e.propsOptions;
    let o = !1, a;
    if (t)
        for (let l in t) {
            if (Dr(l))
                continue;
            const c = t[l];
            let u;
            s && Ce(s, u = mt(l)) ? !i || !i.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : Si(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c,
            o = !0)
        }
    if (i) {
        const l = ue(n)
          , c = a || be;
        for (let u = 0; u < i.length; u++) {
            const f = i[u];
            n[f] = Oo(s, l, f, c[f], e, !Ce(c, f))
        }
    }
    return o
}
function Oo(e, t, n, r, s, i) {
    const o = e[n];
    if (o != null) {
        const a = Ce(o, "default");
        if (a && r === void 0) {
            const l = o.default;
            if (o.type !== Function && !o.skipFactory && le(l)) {
                const {propsDefaults: c} = s;
                if (n in c)
                    r = c[n];
                else {
                    const u = hs(s);
                    r = c[n] = l.call(null, t),
                    u()
                }
            } else
                r = l;
            s.ce && s.ce._setProp(n, r)
        }
        o[0] && (i && !a ? r = !1 : o[1] && (r === "" || r === tn(n)) && (r = !0))
    }
    return r
}
const tg = new WeakMap;
function Af(e, t, n=!1) {
    const r = n ? tg : t.propsCache
      , s = r.get(e);
    if (s)
        return s;
    const i = e.props
      , o = {}
      , a = [];
    let l = !1;
    if (!le(e)) {
        const u = f => {
            l = !0;
            const [d,h] = Af(f, t, !0);
            $e(o, d),
            h && a.push(...h)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(u),
        e.extends && u(e.extends),
        e.mixins && e.mixins.forEach(u)
    }
    if (!i && !l)
        return Ae(e) && r.set(e, rr),
        rr;
    if (oe(i))
        for (let u = 0; u < i.length; u++) {
            const f = mt(i[u]);
            yl(f) && (o[f] = be)
        }
    else if (i)
        for (const u in i) {
            const f = mt(u);
            if (yl(f)) {
                const d = i[u]
                  , h = o[f] = oe(d) || le(d) ? {
                    type: d
                } : $e({}, d)
                  , p = h.type;
                let E = !1
                  , I = !0;
                if (oe(p))
                    for (let b = 0; b < p.length; ++b) {
                        const m = p[b]
                          , C = le(m) && m.name;
                        if (C === "Boolean") {
                            E = !0;
                            break
                        } else
                            C === "String" && (I = !1)
                    }
                else
                    E = le(p) && p.name === "Boolean";
                h[0] = E,
                h[1] = I,
                (E || Ce(h, "default")) && a.push(f)
            }
        }
    const c = [o, a];
    return Ae(e) && r.set(e, c),
    c
}
function yl(e) {
    return e[0] !== "$" && !Dr(e)
}
const If = e => e[0] === "_" || e === "$stable"
  , Na = e => oe(e) ? e.map(qt) : [qt(e)]
  , ng = (e, t, n) => {
    if (t._n)
        return t;
    const r = Im( (...s) => Na(t(...s)), n);
    return r._c = !1,
    r
}
  , Nf = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
        if (If(s))
            continue;
        const i = e[s];
        if (le(i))
            t[s] = ng(s, i, r);
        else if (i != null) {
            const o = Na(i);
            t[s] = () => o
        }
    }
}
  , Pf = (e, t) => {
    const n = Na(t);
    e.slots.default = () => n
}
  , Lf = (e, t, n) => {
    for (const r in t)
        (n || r !== "_") && (e[r] = t[r])
}
  , rg = (e, t, n) => {
    const r = e.slots = kf();
    if (e.vnode.shapeFlag & 32) {
        const s = t._;
        s ? (Lf(r, t, n),
        n && Iu(r, "_", s, !0)) : Nf(t, r)
    } else
        t && Pf(e, t)
}
  , sg = (e, t, n) => {
    const {vnode: r, slots: s} = e;
    let i = !0
      , o = be;
    if (r.shapeFlag & 32) {
        const a = t._;
        a ? n && a === 1 ? i = !1 : Lf(s, t, n) : (i = !t.$stable,
        Nf(t, s)),
        o = t
    } else
        t && (Pf(e, t),
        o = {
            default: 1
        });
    if (i)
        for (const a in s)
            !If(a) && o[a] == null && delete s[a]
}
  , je = yg;
function ig(e) {
    return og(e)
}
function og(e, t) {
    const n = gi();
    n.__VUE__ = !0;
    const {insert: r, remove: s, patchProp: i, createElement: o, createText: a, createComment: l, setText: c, setElementText: u, parentNode: f, nextSibling: d, setScopeId: h=Vt, insertStaticContent: p} = e
      , E = (_, w, P, V=null, U=null, B=null, g=void 0, v=null, A=!!w.dynamicChildren) => {
        if (_ === w)
            return;
        _ && !pn(_, w) && (V = F(_),
        z(_, U, B, !0),
        _ = null),
        w.patchFlag === -2 && (A = !1,
        w.dynamicChildren = null);
        const {type: R, ref: Z, shapeFlag: H} = w;
        switch (R) {
        case ds:
            I(_, w, P, V);
            break;
        case nt:
            b(_, w, P, V);
            break;
        case Rs:
            _ == null && m(w, P, V, g);
            break;
        case tt:
            S(_, w, P, V, U, B, g, v, A);
            break;
        default:
            H & 1 ? x(_, w, P, V, U, B, g, v, A) : H & 6 ? G(_, w, P, V, U, B, g, v, A) : (H & 64 || H & 128) && R.process(_, w, P, V, U, B, g, v, A, te)
        }
        Z != null && U && Ks(Z, _ && _.ref, B, w || _, !w)
    }
      , I = (_, w, P, V) => {
        if (_ == null)
            r(w.el = a(w.children), P, V);
        else {
            const U = w.el = _.el;
            w.children !== _.children && c(U, w.children)
        }
    }
      , b = (_, w, P, V) => {
        _ == null ? r(w.el = l(w.children || ""), P, V) : w.el = _.el
    }
      , m = (_, w, P, V) => {
        [_.el,_.anchor] = p(_.children, w, P, V, _.el, _.anchor)
    }
      , C = ({el: _, anchor: w}, P, V) => {
        let U;
        for (; _ && _ !== w; )
            U = d(_),
            r(_, P, V),
            _ = U;
        r(w, P, V)
    }
      , y = ({el: _, anchor: w}) => {
        let P;
        for (; _ && _ !== w; )
            P = d(_),
            s(_),
            _ = P;
        s(w)
    }
      , x = (_, w, P, V, U, B, g, v, A) => {
        w.type === "svg" ? g = "svg" : w.type === "math" && (g = "mathml"),
        _ == null ? L(w, P, V, U, B, g, v, A) : k(_, w, U, B, g, v, A)
    }
      , L = (_, w, P, V, U, B, g, v) => {
        let A, R;
        const {props: Z, shapeFlag: H, transition: T, dirs: $} = _;
        if (A = _.el = o(_.type, B, Z && Z.is, Z),
        H & 8 ? u(A, _.children) : H & 16 && W(_.children, A, null, V, U, Hi(_, B), g, v),
        $ && xn(_, null, V, "created"),
        N(A, _, _.scopeId, g, V),
        Z) {
            for (const ae in Z)
                ae !== "value" && !Dr(ae) && i(A, ae, null, Z[ae], B, V);
            "value"in Z && i(A, "value", null, Z.value, B),
            (R = Z.onVnodeBeforeMount) && yt(R, V, _)
        }
        $ && xn(_, null, V, "beforeMount");
        const re = ag(U, T);
        re && T.beforeEnter(A),
        r(A, w, P),
        ((R = Z && Z.onVnodeMounted) || re || $) && je( () => {
            R && yt(R, V, _),
            re && T.enter(A),
            $ && xn(_, null, V, "mounted")
        }
        , U)
    }
      , N = (_, w, P, V, U) => {
        if (P && h(_, P),
        V)
            for (let B = 0; B < V.length; B++)
                h(_, V[B]);
        if (U) {
            let B = U.subTree;
            if (w === B || Ys(B.type) && (B.ssContent === w || B.ssFallback === w)) {
                const g = U.vnode;
                N(_, g, g.scopeId, g.slotScopeIds, U.parent)
            }
        }
    }
      , W = (_, w, P, V, U, B, g, v, A=0) => {
        for (let R = A; R < _.length; R++) {
            const Z = _[R] = v ? hn(_[R]) : qt(_[R]);
            E(null, Z, w, P, V, U, B, g, v)
        }
    }
      , k = (_, w, P, V, U, B, g) => {
        const v = w.el = _.el;
        let {patchFlag: A, dynamicChildren: R, dirs: Z} = w;
        A |= _.patchFlag & 16;
        const H = _.props || be
          , T = w.props || be;
        let $;
        if (P && Tn(P, !1),
        ($ = T.onVnodeBeforeUpdate) && yt($, P, w, _),
        Z && xn(w, _, P, "beforeUpdate"),
        P && Tn(P, !0),
        (H.innerHTML && T.innerHTML == null || H.textContent && T.textContent == null) && u(v, ""),
        R ? O(_.dynamicChildren, R, v, P, V, Hi(w, U), B) : g || K(_, w, v, null, P, V, Hi(w, U), B, !1),
        A > 0) {
            if (A & 16)
                q(v, H, T, P, U);
            else if (A & 2 && H.class !== T.class && i(v, "class", null, T.class, U),
            A & 4 && i(v, "style", H.style, T.style, U),
            A & 8) {
                const re = w.dynamicProps;
                for (let ae = 0; ae < re.length; ae++) {
                    const me = re[ae]
                      , Be = H[me]
                      , Me = T[me];
                    (Me !== Be || me === "value") && i(v, me, Be, Me, U, P)
                }
            }
            A & 1 && _.children !== w.children && u(v, w.children)
        } else
            !g && R == null && q(v, H, T, P, U);
        (($ = T.onVnodeUpdated) || Z) && je( () => {
            $ && yt($, P, w, _),
            Z && xn(w, _, P, "updated")
        }
        , V)
    }
      , O = (_, w, P, V, U, B, g) => {
        for (let v = 0; v < w.length; v++) {
            const A = _[v]
              , R = w[v]
              , Z = A.el && (A.type === tt || !pn(A, R) || A.shapeFlag & 70) ? f(A.el) : P;
            E(A, R, Z, null, V, U, B, g, !0)
        }
    }
      , q = (_, w, P, V, U) => {
        if (w !== P) {
            if (w !== be)
                for (const B in w)
                    !Dr(B) && !(B in P) && i(_, B, w[B], null, U, V);
            for (const B in P) {
                if (Dr(B))
                    continue;
                const g = P[B]
                  , v = w[B];
                g !== v && B !== "value" && i(_, B, v, g, U, V)
            }
            "value"in P && i(_, "value", w.value, P.value, U)
        }
    }
      , S = (_, w, P, V, U, B, g, v, A) => {
        const R = w.el = _ ? _.el : a("")
          , Z = w.anchor = _ ? _.anchor : a("");
        let {patchFlag: H, dynamicChildren: T, slotScopeIds: $} = w;
        $ && (v = v ? v.concat($) : $),
        _ == null ? (r(R, P, V),
        r(Z, P, V),
        W(w.children || [], P, Z, U, B, g, v, A)) : H > 0 && H & 64 && T && _.dynamicChildren ? (O(_.dynamicChildren, T, P, U, B, g, v),
        (w.key != null || U && w === U.subTree) && Pa(_, w, !0)) : K(_, w, P, Z, U, B, g, v, A)
    }
      , G = (_, w, P, V, U, B, g, v, A) => {
        w.slotScopeIds = v,
        _ == null ? w.shapeFlag & 512 ? U.ctx.activate(w, P, V, g, A) : D(w, P, V, U, B, g, A) : ee(_, w, A)
    }
      , D = (_, w, P, V, U, B, g) => {
        const v = _.component = xg(_, V, U);
        if (bi(_) && (v.ctx.renderer = te),
        Tg(v, !1, g),
        v.asyncDep) {
            if (U && U.registerDep(v, J, g),
            !_.el) {
                const A = v.subTree = Qe(nt);
                b(null, A, w, P)
            }
        } else
            J(v, _, w, P, U, B, g)
    }
      , ee = (_, w, P) => {
        const V = w.component = _.component;
        if (pg(_, w, P))
            if (V.asyncDep && !V.asyncResolved) {
                Q(V, w, P);
                return
            } else
                V.next = w,
                V.update();
        else
            w.el = _.el,
            V.vnode = w
    }
      , J = (_, w, P, V, U, B, g) => {
        const v = () => {
            if (_.isMounted) {
                let {next: H, bu: T, u: $, parent: re, vnode: ae} = _;
                {
                    const xt = Of(_);
                    if (xt) {
                        H && (H.el = ae.el,
                        Q(_, H, g)),
                        xt.asyncDep.then( () => {
                            _.isUnmounted || v()
                        }
                        );
                        return
                    }
                }
                let me = H, Be;
                Tn(_, !1),
                H ? (H.el = ae.el,
                Q(_, H, g)) : H = ae,
                T && ir(T),
                (Be = H.props && H.props.onVnodeBeforeUpdate) && yt(Be, re, H, ae),
                Tn(_, !0);
                const Me = bl(_)
                  , gt = _.subTree;
                _.subTree = Me,
                E(gt, Me, f(gt.el), F(gt), _, U, B),
                H.el = Me.el,
                me === null && vg(_, Me.el),
                $ && je($, U),
                (Be = H.props && H.props.onVnodeUpdated) && je( () => yt(Be, re, H, ae), U)
            } else {
                let H;
                const {el: T, props: $} = w
                  , {bm: re, m: ae, parent: me, root: Be, type: Me} = _
                  , gt = Fn(w);
                Tn(_, !1),
                re && ir(re),
                !gt && (H = $ && $.onVnodeBeforeMount) && yt(H, me, w),
                Tn(_, !0);
                {
                    Be.ce && Be.ce._injectChildStyle(Me);
                    const xt = _.subTree = bl(_);
                    E(null, xt, P, V, _, U, B),
                    w.el = xt.el
                }
                if (ae && je(ae, U),
                !gt && (H = $ && $.onVnodeMounted)) {
                    const xt = w;
                    je( () => yt(H, me, xt), U)
                }
                (w.shapeFlag & 256 || me && Fn(me.vnode) && me.vnode.shapeFlag & 256) && _.a && je(_.a, U),
                _.isMounted = !0,
                w = P = V = null
            }
        }
        ;
        _.scope.on();
        const A = _.effect = new Mu(v);
        _.scope.off();
        const R = _.update = A.run.bind(A)
          , Z = _.job = A.runIfDirty.bind(A);
        Z.i = _,
        Z.id = _.uid,
        A.scheduler = () => xa(Z),
        Tn(_, !0),
        R()
    }
      , Q = (_, w, P) => {
        w.component = _;
        const V = _.vnode.props;
        _.vnode = w,
        _.next = null,
        eg(_, w.props, V, P),
        sg(_, w.children, P),
        wn(),
        cl(_),
        Cn()
    }
      , K = (_, w, P, V, U, B, g, v, A=!1) => {
        const R = _ && _.children
          , Z = _ ? _.shapeFlag : 0
          , H = w.children
          , {patchFlag: T, shapeFlag: $} = w;
        if (T > 0) {
            if (T & 128) {
                ce(R, H, P, V, U, B, g, v, A);
                return
            } else if (T & 256) {
                ie(R, H, P, V, U, B, g, v, A);
                return
            }
        }
        $ & 8 ? (Z & 16 && ne(R, U, B),
        H !== R && u(P, H)) : Z & 16 ? $ & 16 ? ce(R, H, P, V, U, B, g, v, A) : ne(R, U, B, !0) : (Z & 8 && u(P, ""),
        $ & 16 && W(H, P, V, U, B, g, v, A))
    }
      , ie = (_, w, P, V, U, B, g, v, A) => {
        _ = _ || rr,
        w = w || rr;
        const R = _.length
          , Z = w.length
          , H = Math.min(R, Z);
        let T;
        for (T = 0; T < H; T++) {
            const $ = w[T] = A ? hn(w[T]) : qt(w[T]);
            E(_[T], $, P, null, U, B, g, v, A)
        }
        R > Z ? ne(_, U, B, !0, !1, H) : W(w, P, V, U, B, g, v, A, H)
    }
      , ce = (_, w, P, V, U, B, g, v, A) => {
        let R = 0;
        const Z = w.length;
        let H = _.length - 1
          , T = Z - 1;
        for (; R <= H && R <= T; ) {
            const $ = _[R]
              , re = w[R] = A ? hn(w[R]) : qt(w[R]);
            if (pn($, re))
                E($, re, P, null, U, B, g, v, A);
            else
                break;
            R++
        }
        for (; R <= H && R <= T; ) {
            const $ = _[H]
              , re = w[T] = A ? hn(w[T]) : qt(w[T]);
            if (pn($, re))
                E($, re, P, null, U, B, g, v, A);
            else
                break;
            H--,
            T--
        }
        if (R > H) {
            if (R <= T) {
                const $ = T + 1
                  , re = $ < Z ? w[$].el : V;
                for (; R <= T; )
                    E(null, w[R] = A ? hn(w[R]) : qt(w[R]), P, re, U, B, g, v, A),
                    R++
            }
        } else if (R > T)
            for (; R <= H; )
                z(_[R], U, B, !0),
                R++;
        else {
            const $ = R
              , re = R
              , ae = new Map;
            for (R = re; R <= T; R++) {
                const ft = w[R] = A ? hn(w[R]) : qt(w[R]);
                ft.key != null && ae.set(ft.key, R)
            }
            let me, Be = 0;
            const Me = T - re + 1;
            let gt = !1
              , xt = 0;
            const wr = new Array(Me);
            for (R = 0; R < Me; R++)
                wr[R] = 0;
            for (R = $; R <= H; R++) {
                const ft = _[R];
                if (Be >= Me) {
                    z(ft, U, B, !0);
                    continue
                }
                let Ft;
                if (ft.key != null)
                    Ft = ae.get(ft.key);
                else
                    for (me = re; me <= T; me++)
                        if (wr[me - re] === 0 && pn(ft, w[me])) {
                            Ft = me;
                            break
                        }
                Ft === void 0 ? z(ft, U, B, !0) : (wr[Ft - re] = R + 1,
                Ft >= xt ? xt = Ft : gt = !0,
                E(ft, w[Ft], P, null, U, B, g, v, A),
                Be++)
            }
            const rl = gt ? lg(wr) : rr;
            for (me = rl.length - 1,
            R = Me - 1; R >= 0; R--) {
                const ft = re + R
                  , Ft = w[ft]
                  , sl = ft + 1 < Z ? w[ft + 1].el : V;
                wr[R] === 0 ? E(null, Ft, P, sl, U, B, g, v, A) : gt && (me < 0 || R !== rl[me] ? fe(Ft, P, sl, 2) : me--)
            }
        }
    }
      , fe = (_, w, P, V, U=null) => {
        const {el: B, type: g, transition: v, children: A, shapeFlag: R} = _;
        if (R & 6) {
            fe(_.component.subTree, w, P, V);
            return
        }
        if (R & 128) {
            _.suspense.move(w, P, V);
            return
        }
        if (R & 64) {
            g.move(_, w, P, te);
            return
        }
        if (g === tt) {
            r(B, w, P);
            for (let H = 0; H < A.length; H++)
                fe(A[H], w, P, V);
            r(_.anchor, w, P);
            return
        }
        if (g === Rs) {
            C(_, w, P);
            return
        }
        if (V !== 2 && R & 1 && v)
            if (V === 0)
                v.beforeEnter(B),
                r(B, w, P),
                je( () => v.enter(B), U);
            else {
                const {leave: H, delayLeave: T, afterLeave: $} = v
                  , re = () => r(B, w, P)
                  , ae = () => {
                    H(B, () => {
                        re(),
                        $ && $()
                    }
                    )
                }
                ;
                T ? T(B, re, ae) : ae()
            }
        else
            r(B, w, P)
    }
      , z = (_, w, P, V=!1, U=!1) => {
        const {type: B, props: g, ref: v, children: A, dynamicChildren: R, shapeFlag: Z, patchFlag: H, dirs: T, cacheIndex: $} = _;
        if (H === -2 && (U = !1),
        v != null && Ks(v, null, P, _, !0),
        $ != null && (w.renderCache[$] = void 0),
        Z & 256) {
            w.ctx.deactivate(_);
            return
        }
        const re = Z & 1 && T
          , ae = !Fn(_);
        let me;
        if (ae && (me = g && g.onVnodeBeforeUnmount) && yt(me, w, _),
        Z & 6)
            Re(_.component, P, V);
        else {
            if (Z & 128) {
                _.suspense.unmount(P, V);
                return
            }
            re && xn(_, null, w, "beforeUnmount"),
            Z & 64 ? _.type.remove(_, w, P, te, V) : R && !R.hasOnce && (B !== tt || H > 0 && H & 64) ? ne(R, w, P, !1, !0) : (B === tt && H & 384 || !U && Z & 16) && ne(A, w, P),
            V && ge(_)
        }
        (ae && (me = g && g.onVnodeUnmounted) || re) && je( () => {
            me && yt(me, w, _),
            re && xn(_, null, w, "unmounted")
        }
        , P)
    }
      , ge = _ => {
        const {type: w, el: P, anchor: V, transition: U} = _;
        if (w === tt) {
            Ne(P, V);
            return
        }
        if (w === Rs) {
            y(_);
            return
        }
        const B = () => {
            s(P),
            U && !U.persisted && U.afterLeave && U.afterLeave()
        }
        ;
        if (_.shapeFlag & 1 && U && !U.persisted) {
            const {leave: g, delayLeave: v} = U
              , A = () => g(P, B);
            v ? v(_.el, B, A) : A()
        } else
            B()
    }
      , Ne = (_, w) => {
        let P;
        for (; _ !== w; )
            P = d(_),
            s(_),
            _ = P;
        s(w)
    }
      , Re = (_, w, P) => {
        const {bum: V, scope: U, job: B, subTree: g, um: v, m: A, a: R} = _;
        Xs(A),
        Xs(R),
        V && ir(V),
        U.stop(),
        B && (B.flags |= 8,
        z(g, _, w, P)),
        v && je(v, w),
        je( () => {
            _.isUnmounted = !0
        }
        , w),
        w && w.pendingBranch && !w.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === w.pendingId && (w.deps--,
        w.deps === 0 && w.resolve())
    }
      , ne = (_, w, P, V=!1, U=!1, B=0) => {
        for (let g = B; g < _.length; g++)
            z(_[g], w, P, V, U)
    }
      , F = _ => {
        if (_.shapeFlag & 6)
            return F(_.component.subTree);
        if (_.shapeFlag & 128)
            return _.suspense.next();
        const w = d(_.anchor || _.el)
          , P = w && w[af];
        return P ? d(P) : w
    }
    ;
    let Y = !1;
    const X = (_, w, P) => {
        _ == null ? w._vnode && z(w._vnode, null, null, !0) : E(w._vnode || null, _, w, null, null, null, P),
        w._vnode = _,
        Y || (Y = !0,
        cl(),
        nf(),
        Y = !1)
    }
      , te = {
        p: E,
        um: z,
        m: fe,
        r: ge,
        mt: D,
        mc: W,
        pc: K,
        pbc: O,
        n: F,
        o: e
    };
    return {
        render: X,
        hydrate: void 0,
        createApp: Jm(X)
    }
}
function Hi({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function Tn({effect: e, job: t}, n) {
    n ? (e.flags |= 32,
    t.flags |= 4) : (e.flags &= -33,
    t.flags &= -5)
}
function ag(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function Pa(e, t, n=!1) {
    const r = e.children
      , s = t.children;
    if (oe(r) && oe(s))
        for (let i = 0; i < r.length; i++) {
            const o = r[i];
            let a = s[i];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[i] = hn(s[i]),
            a.el = o.el),
            !n && a.patchFlag !== -2 && Pa(o, a)),
            a.type === ds && (a.el = o.el)
        }
}
function lg(e) {
    const t = e.slice()
      , n = [0];
    let r, s, i, o, a;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const c = e[r];
        if (c !== 0) {
            if (s = n[n.length - 1],
            e[s] < c) {
                t[r] = s,
                n.push(r);
                continue
            }
            for (i = 0,
            o = n.length - 1; i < o; )
                a = i + o >> 1,
                e[n[a]] < c ? i = a + 1 : o = a;
            c < e[n[i]] && (i > 0 && (t[r] = n[i - 1]),
            n[i] = r)
        }
    }
    for (i = n.length,
    o = n[i - 1]; i-- > 0; )
        n[i] = o,
        o = t[o];
    return n
}
function Of(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : Of(t)
}
function Xs(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].flags |= 8
}
const cg = Symbol.for("v-scx")
  , ug = () => lt(cg);
function Rf(e, t) {
    return Ei(e, null, t)
}
function fg(e, t) {
    return Ei(e, null, {
        flush: "sync"
    })
}
function de(e, t, n) {
    return Ei(e, t, n)
}
function Ei(e, t, n=be) {
    const {immediate: r, deep: s, flush: i, once: o} = n
      , a = $e({}, n)
      , l = t && r || !t && i !== "post";
    let c;
    if (ts) {
        if (i === "sync") {
            const h = ug();
            c = h.__watcherHandles || (h.__watcherHandles = [])
        } else if (!l) {
            const h = () => {}
            ;
            return h.stop = Vt,
            h.resume = Vt,
            h.pause = Vt,
            h
        }
    }
    const u = He;
    a.call = (h, p, E) => Ot(h, u, p, E);
    let f = !1;
    i === "post" ? a.scheduler = h => {
        je(h, u && u.suspense)
    }
    : i !== "sync" && (f = !0,
    a.scheduler = (h, p) => {
        p ? h() : xa(h)
    }
    ),
    a.augmentJob = h => {
        t && (h.flags |= 4),
        f && (h.flags |= 2,
        u && (h.id = u.uid,
        h.i = u))
    }
    ;
    const d = km(e, t, a);
    return ts && (c ? c.push(d) : l && d()),
    d
}
function dg(e, t, n) {
    const r = this.proxy
      , s = Oe(e) ? e.includes(".") ? Mf(r, e) : () => r[e] : e.bind(r, r);
    let i;
    le(t) ? i = t : (i = t.handler,
    n = t);
    const o = hs(this)
      , a = Ei(s, i.bind(r), n);
    return o(),
    a
}
function Mf(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let s = 0; s < n.length && r; s++)
            r = r[n[s]];
        return r
    }
}
function $C(e, t, n=be) {
    const r = Se()
      , s = mt(t)
      , i = tn(t)
      , o = Ff(e, s)
      , a = Ju( (l, c) => {
        let u, f = be, d;
        return fg( () => {
            const h = e[s];
            ut(u, h) && (u = h,
            c())
        }
        ),
        {
            get() {
                return l(),
                n.get ? n.get(u) : u
            },
            set(h) {
                const p = n.set ? n.set(h) : h;
                if (!ut(p, u) && !(f !== be && ut(h, f)))
                    return;
                const E = r.vnode.props;
                E && (t in E || s in E || i in E) && (`onUpdate:${t}`in E || `onUpdate:${s}`in E || `onUpdate:${i}`in E) || (u = h,
                c()),
                r.emit(`update:${t}`, p),
                ut(h, p) && ut(h, f) && !ut(p, d) && c(),
                f = h,
                d = p
            }
        }
    }
    );
    return a[Symbol.iterator] = () => {
        let l = 0;
        return {
            next() {
                return l < 2 ? {
                    value: l++ ? o || be : a,
                    done: !1
                } : {
                    done: !0
                }
            }
        }
    }
    ,
    a
}
const Ff = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${mt(t)}Modifiers`] || e[`${tn(t)}Modifiers`];
function hg(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || be;
    let s = n;
    const i = t.startsWith("update:")
      , o = i && Ff(r, t.slice(7));
    o && (o.trim && (s = n.map(u => Oe(u) ? u.trim() : u)),
    o.number && (s = n.map(So)));
    let a, l = r[a = Di(t)] || r[a = Di(mt(t))];
    !l && i && (l = r[a = Di(tn(t))]),
    l && Ot(l, e, 6, s);
    const c = r[a + "Once"];
    if (c) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[a])
            return;
        e.emitted[a] = !0,
        Ot(c, e, 6, s)
    }
}
function Df(e, t, n=!1) {
    const r = t.emitsCache
      , s = r.get(e);
    if (s !== void 0)
        return s;
    const i = e.emits;
    let o = {}
      , a = !1;
    if (!le(e)) {
        const l = c => {
            const u = Df(c, t, !0);
            u && (a = !0,
            $e(o, u))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    return !i && !a ? (Ae(e) && r.set(e, null),
    null) : (oe(i) ? i.forEach(l => o[l] = null) : $e(o, i),
    Ae(e) && r.set(e, o),
    o)
}
function Si(e, t) {
    return !e || !di(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    Ce(e, t[0].toLowerCase() + t.slice(1)) || Ce(e, tn(t)) || Ce(e, t))
}
function bl(e) {
    const {type: t, vnode: n, proxy: r, withProxy: s, propsOptions: [i], slots: o, attrs: a, emit: l, render: c, renderCache: u, props: f, data: d, setupState: h, ctx: p, inheritAttrs: E} = e
      , I = zs(e);
    let b, m;
    try {
        if (n.shapeFlag & 4) {
            const y = s || r
              , x = y;
            b = qt(c.call(x, y, u, f, h, d, p)),
            m = a
        } else {
            const y = t;
            b = qt(y.length > 1 ? y(f, {
                attrs: a,
                slots: o,
                emit: l
            }) : y(f, null)),
            m = t.props ? a : mg(a)
        }
    } catch (y) {
        Wr.length = 0,
        yi(y, e, 1),
        b = Qe(nt)
    }
    let C = b;
    if (m && E !== !1) {
        const y = Object.keys(m)
          , {shapeFlag: x} = C;
        y.length && x & 7 && (i && y.some(da) && (m = gg(m, i)),
        C = Jt(C, m, !1, !0))
    }
    return n.dirs && (C = Jt(C, null, !1, !0),
    C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs),
    n.transition && bn(C, n.transition),
    b = C,
    zs(I),
    b
}
const mg = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || di(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , gg = (e, t) => {
    const n = {};
    for (const r in e)
        (!da(r) || !(r.slice(9)in t)) && (n[r] = e[r]);
    return n
}
;
function pg(e, t, n) {
    const {props: r, children: s, component: i} = e
      , {props: o, children: a, patchFlag: l} = t
      , c = i.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return r ? _l(r, o, c) : !!o;
        if (l & 8) {
            const u = t.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                const d = u[f];
                if (o[d] !== r[d] && !Si(c, d))
                    return !0
            }
        }
    } else
        return (s || a) && (!a || !a.$stable) ? !0 : r === o ? !1 : r ? o ? _l(r, o, c) : !0 : !!o;
    return !1
}
function _l(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let s = 0; s < r.length; s++) {
        const i = r[s];
        if (t[i] !== e[i] && !Si(n, i))
            return !0
    }
    return !1
}
function vg({vnode: e, parent: t}, n) {
    for (; t; ) {
        const r = t.subTree;
        if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el),
        r === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const Ys = e => e.__isSuspense;
function yg(e, t) {
    t && t.pendingBranch ? oe(e) ? t.effects.push(...e) : t.effects.push(e) : Am(e)
}
const tt = Symbol.for("v-fgt")
  , ds = Symbol.for("v-txt")
  , nt = Symbol.for("v-cmt")
  , Rs = Symbol.for("v-stc")
  , Wr = [];
let ht = null;
function Js(e=!1) {
    Wr.push(ht = e ? null : [])
}
function bg() {
    Wr.pop(),
    ht = Wr[Wr.length - 1] || null
}
let es = 1;
function wl(e, t=!1) {
    es += e,
    e < 0 && ht && t && (ht.hasOnce = !0)
}
function $f(e) {
    return e.dynamicChildren = es > 0 ? ht || rr : null,
    bg(),
    es > 0 && ht && ht.push(e),
    e
}
function jC(e, t, n, r, s, i) {
    return $f(qf(e, t, n, r, s, i, !0))
}
function Zs(e, t, n, r, s) {
    return $f(Qe(e, t, n, r, s, !0))
}
function cr(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function pn(e, t) {
    return e.type === t.type && e.key === t.key
}
const jf = ({key: e}) => e ?? null
  , Ms = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == "number" && (e = "" + e),
e != null ? Oe(e) || Ie(e) || le(e) ? {
    i: qe,
    r: e,
    k: t,
    f: !!n
} : e : null);
function qf(e, t=null, n=null, r=0, s=null, i=e === tt ? 0 : 1, o=!1, a=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && jf(t),
        ref: t && Ms(t),
        scopeId: sf,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: r,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
        ctx: qe
    };
    return a ? (La(l, n),
    i & 128 && e.normalize(l)) : n && (l.shapeFlag |= Oe(n) ? 8 : 16),
    es > 0 && !o && ht && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && ht.push(l),
    l
}
const Qe = _g;
function _g(e, t=null, n=null, r=0, s=null, i=!1) {
    if ((!e || e === Bm) && (e = nt),
    cr(e)) {
        const a = Jt(e, t, !0);
        return n && La(a, n),
        es > 0 && !i && ht && (a.shapeFlag & 6 ? ht[ht.indexOf(e)] = a : ht.push(a)),
        a.patchFlag = -2,
        a
    }
    if (Pg(e) && (e = e.__vccOpts),
    t) {
        t = wg(t);
        let {class: a, style: l} = t;
        a && !Oe(a) && (t.class = pa(a)),
        Ae(l) && (ka(l) && !oe(l) && (l = $e({}, l)),
        t.style = ga(l))
    }
    const o = Oe(e) ? 1 : Ys(e) ? 128 : lf(e) ? 64 : Ae(e) ? 4 : le(e) ? 2 : 0;
    return qf(e, t, n, r, s, o, i, !0)
}
function wg(e) {
    return e ? ka(e) || xf(e) ? $e({}, e) : e : null
}
function Jt(e, t, n=!1, r=!1) {
    const {props: s, ref: i, patchFlag: o, children: a, transition: l} = e
      , c = t ? Eg(s || {}, t) : s
      , u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: c,
        key: c && jf(c),
        ref: t && t.ref ? n && i ? oe(i) ? i.concat(Ms(t)) : [i, Ms(t)] : Ms(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: a,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== tt ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: l,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Jt(e.ssContent),
        ssFallback: e.ssFallback && Jt(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return l && r && bn(u, l.clone(u)),
    u
}
function Cg(e=" ", t=0) {
    return Qe(ds, null, e, t)
}
function qC(e, t) {
    const n = Qe(Rs, null, e);
    return n.staticCount = t,
    n
}
function VC(e="", t=!1) {
    return t ? (Js(),
    Zs(nt, null, e)) : Qe(nt, null, e)
}
function qt(e) {
    return e == null || typeof e == "boolean" ? Qe(nt) : oe(e) ? Qe(tt, null, e.slice()) : cr(e) ? hn(e) : Qe(ds, null, String(e))
}
function hn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Jt(e)
}
function La(e, t) {
    let n = 0;
    const {shapeFlag: r} = e;
    if (t == null)
        t = null;
    else if (oe(t))
        n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const s = t.default;
            s && (s._c && (s._d = !1),
            La(e, s()),
            s._c && (s._d = !0));
            return
        } else {
            n = 32;
            const s = t._;
            !s && !xf(t) ? t._ctx = qe : s === 3 && qe && (qe.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        le(t) ? (t = {
            default: t,
            _ctx: qe
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [Cg(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function Eg(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const s in r)
            if (s === "class")
                t.class !== r.class && (t.class = pa([t.class, r.class]));
            else if (s === "style")
                t.style = ga([t.style, r.style]);
            else if (di(s)) {
                const i = t[s]
                  , o = r[s];
                o && i !== o && !(oe(i) && i.includes(o)) && (t[s] = i ? [].concat(i, o) : o)
            } else
                s !== "" && (t[s] = r[s])
    }
    return t
}
function yt(e, t, n, r=null) {
    Ot(e, t, 7, [n, r])
}
const Sg = Ef();
let kg = 0;
function xg(e, t, n) {
    const r = e.type
      , s = (t ? t.appContext : e.appContext) || Sg
      , i = {
        uid: kg++,
        vnode: e,
        type: r,
        parent: t,
        appContext: s,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new Ou(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(s.provides),
        ids: t ? t.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Af(r, s),
        emitsOptions: Df(r, s),
        emit: null,
        emitted: null,
        propsDefaults: be,
        inheritAttrs: r.inheritAttrs,
        ctx: be,
        data: be,
        props: be,
        attrs: be,
        slots: be,
        refs: be,
        setupState: be,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return i.ctx = {
        _: i
    },
    i.root = t ? t.root : i,
    i.emit = hg.bind(null, i),
    e.ce && e.ce(i),
    i
}
let He = null;
const Se = () => He || qe;
let ei, Ro;
{
    const e = gi()
      , t = (n, r) => {
        let s;
        return (s = e[n]) || (s = e[n] = []),
        s.push(r),
        i => {
            s.length > 1 ? s.forEach(o => o(i)) : s[0](i)
        }
    }
    ;
    ei = t("__VUE_INSTANCE_SETTERS__", n => He = n),
    Ro = t("__VUE_SSR_SETTERS__", n => ts = n)
}
const hs = e => {
    const t = He;
    return ei(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        ei(t)
    }
}
  , Cl = () => {
    He && He.scope.off(),
    ei(null)
}
;
function Vf(e) {
    return e.vnode.shapeFlag & 4
}
let ts = !1;
function Tg(e, t=!1, n=!1) {
    t && Ro(t);
    const {props: r, children: s} = e.vnode
      , i = Vf(e);
    Zm(e, r, i, t),
    rg(e, s, n);
    const o = i ? Ag(e, t) : void 0;
    return t && Ro(!1),
    o
}
function Ag(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,Hm);
    const {setup: r} = n;
    if (r) {
        wn();
        const s = e.setupContext = r.length > 1 ? Ng(e) : null
          , i = hs(e)
          , o = fs(r, e, 0, [e.props, s])
          , a = xu(o);
        if (Cn(),
        i(),
        (a || e.sp) && !Fn(e) && pf(e),
        a) {
            if (o.then(Cl, Cl),
            t)
                return o.then(l => {
                    El(e, l)
                }
                ).catch(l => {
                    yi(l, e, 0)
                }
                );
            e.asyncDep = o
        } else
            El(e, o)
    } else
        Wf(e)
}
function El(e, t, n) {
    le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ae(t) && (e.setupState = Yu(t)),
    Wf(e)
}
function Wf(e, t, n) {
    const r = e.type;
    e.render || (e.render = r.render || Vt);
    {
        const s = hs(e);
        wn();
        try {
            zm(e)
        } finally {
            Cn(),
            s()
        }
    }
}
const Ig = {
    get(e, t) {
        return Ze(e, "get", ""),
        e[t]
    }
};
function Ng(e) {
    const t = n => {
        e.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,Ig),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function ki(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Yu(Wn(e.exposed)),{
        get(t, n) {
            if (n in t)
                return t[n];
            if (n in Vr)
                return Vr[n](e)
        },
        has(t, n) {
            return n in t || n in Vr
        }
    })) : e.proxy
}
function Mo(e, t=!0) {
    return le(e) ? e.displayName || e.name : e.name || t && e.__name
}
function Pg(e) {
    return le(e) && "__vccOpts"in e
}
const M = (e, t) => Em(e, t, ts);
function j(e, t, n) {
    const r = arguments.length;
    return r === 2 ? Ae(t) && !oe(t) ? cr(t) ? Qe(e, null, [t]) : Qe(e, t) : Qe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && cr(n) && (n = [n]),
    Qe(e, t, n))
}
const Lg = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Fo;
const Sl = typeof window < "u" && window.trustedTypes;
if (Sl)
    try {
        Fo = Sl.createPolicy("vue", {
            createHTML: e => e
        })
    } catch {}
const Bf = Fo ? e => Fo.createHTML(e) : e => e
  , Og = "http://www.w3.org/2000/svg"
  , Rg = "http://www.w3.org/1998/Math/MathML"
  , Ht = typeof document < "u" ? document : null
  , kl = Ht && Ht.createElement("template")
  , Mg = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, r) => {
        const s = t === "svg" ? Ht.createElementNS(Og, e) : t === "mathml" ? Ht.createElementNS(Rg, e) : n ? Ht.createElement(e, {
            is: n
        }) : Ht.createElement(e);
        return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple),
        s
    }
    ,
    createText: e => Ht.createTextNode(e),
    createComment: e => Ht.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Ht.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, s, i) {
        const o = n ? n.previousSibling : t.lastChild;
        if (s && (s === i || s.nextSibling))
            for (; t.insertBefore(s.cloneNode(!0), n),
            !(s === i || !(s = s.nextSibling)); )
                ;
        else {
            kl.innerHTML = Bf(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
            const a = kl.content;
            if (r === "svg" || r === "mathml") {
                const l = a.firstChild;
                for (; l.firstChild; )
                    a.appendChild(l.firstChild);
                a.removeChild(l)
            }
            t.insertBefore(a, n)
        }
        return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , sn = "transition"
  , Er = "animation"
  , ur = Symbol("_vtc")
  , Uf = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}
  , Hf = $e({}, df, Uf)
  , Fg = e => (e.displayName = "Transition",
e.props = Hf,
e)
  , ns = Fg( (e, {slots: t}) => j(Om, zf(e), t))
  , An = (e, t=[]) => {
    oe(e) ? e.forEach(n => n(...t)) : e && e(...t)
}
  , xl = e => e ? oe(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;
function zf(e) {
    const t = {};
    for (const S in e)
        S in Uf || (t[S] = e[S]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: r, duration: s, enterFromClass: i=`${n}-enter-from`, enterActiveClass: o=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: l=i, appearActiveClass: c=o, appearToClass: u=a, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: d=`${n}-leave-active`, leaveToClass: h=`${n}-leave-to`} = e
      , p = Dg(s)
      , E = p && p[0]
      , I = p && p[1]
      , {onBeforeEnter: b, onEnter: m, onEnterCancelled: C, onLeave: y, onLeaveCancelled: x, onBeforeAppear: L=b, onAppear: N=m, onAppearCancelled: W=C} = t
      , k = (S, G, D, ee) => {
        S._enterCancelled = ee,
        ln(S, G ? u : a),
        ln(S, G ? c : o),
        D && D()
    }
      , O = (S, G) => {
        S._isLeaving = !1,
        ln(S, f),
        ln(S, h),
        ln(S, d),
        G && G()
    }
      , q = S => (G, D) => {
        const ee = S ? N : m
          , J = () => k(G, S, D);
        An(ee, [G, J]),
        Tl( () => {
            ln(G, S ? l : i),
            $t(G, S ? u : a),
            xl(ee) || Al(G, r, E, J)
        }
        )
    }
    ;
    return $e(t, {
        onBeforeEnter(S) {
            An(b, [S]),
            $t(S, i),
            $t(S, o)
        },
        onBeforeAppear(S) {
            An(L, [S]),
            $t(S, l),
            $t(S, c)
        },
        onEnter: q(!1),
        onAppear: q(!0),
        onLeave(S, G) {
            S._isLeaving = !0;
            const D = () => O(S, G);
            $t(S, f),
            S._enterCancelled ? ($t(S, d),
            Do()) : (Do(),
            $t(S, d)),
            Tl( () => {
                S._isLeaving && (ln(S, f),
                $t(S, h),
                xl(y) || Al(S, r, I, D))
            }
            ),
            An(y, [S, D])
        },
        onEnterCancelled(S) {
            k(S, !1, void 0, !0),
            An(C, [S])
        },
        onAppearCancelled(S) {
            k(S, !0, void 0, !0),
            An(W, [S])
        },
        onLeaveCancelled(S) {
            O(S),
            An(x, [S])
        }
    })
}
function Dg(e) {
    if (e == null)
        return null;
    if (Ae(e))
        return [zi(e.enter), zi(e.leave)];
    {
        const t = zi(e);
        return [t, t]
    }
}
function zi(e) {
    return Wh(e)
}
function $t(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)),
    (e[ur] || (e[ur] = new Set)).add(t)
}
function ln(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const n = e[ur];
    n && (n.delete(t),
    n.size || (e[ur] = void 0))
}
function Tl(e) {
    requestAnimationFrame( () => {
        requestAnimationFrame(e)
    }
    )
}
let $g = 0;
function Al(e, t, n, r) {
    const s = e._endId = ++$g
      , i = () => {
        s === e._endId && r()
    }
    ;
    if (n != null)
        return setTimeout(i, n);
    const {type: o, timeout: a, propCount: l} = Kf(e, t);
    if (!o)
        return r();
    const c = o + "end";
    let u = 0;
    const f = () => {
        e.removeEventListener(c, d),
        i()
    }
      , d = h => {
        h.target === e && ++u >= l && f()
    }
    ;
    setTimeout( () => {
        u < l && f()
    }
    , a + 1),
    e.addEventListener(c, d)
}
function Kf(e, t) {
    const n = window.getComputedStyle(e)
      , r = p => (n[p] || "").split(", ")
      , s = r(`${sn}Delay`)
      , i = r(`${sn}Duration`)
      , o = Il(s, i)
      , a = r(`${Er}Delay`)
      , l = r(`${Er}Duration`)
      , c = Il(a, l);
    let u = null
      , f = 0
      , d = 0;
    t === sn ? o > 0 && (u = sn,
    f = o,
    d = i.length) : t === Er ? c > 0 && (u = Er,
    f = c,
    d = l.length) : (f = Math.max(o, c),
    u = f > 0 ? o > c ? sn : Er : null,
    d = u ? u === sn ? i.length : l.length : 0);
    const h = u === sn && /\b(transform|all)(,|$)/.test(r(`${sn}Property`).toString());
    return {
        type: u,
        timeout: f,
        propCount: d,
        hasTransform: h
    }
}
function Il(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map( (n, r) => Nl(n) + Nl(e[r])))
}
function Nl(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function Do() {
    return document.body.offsetHeight
}
function jg(e, t, n) {
    const r = e[ur];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const ti = Symbol("_vod")
  , Gf = Symbol("_vsh")
  , WC = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[ti] = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : Sr(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: r}) {
        !t != !n && (r ? t ? (r.beforeEnter(e),
        Sr(e, !0),
        r.enter(e)) : r.leave(e, () => {
            Sr(e, !1)
        }
        ) : Sr(e, t))
    },
    beforeUnmount(e, {value: t}) {
        Sr(e, t)
    }
};
function Sr(e, t) {
    e.style.display = t ? e[ti] : "none",
    e[Gf] = !t
}
const qg = Symbol("")
  , Vg = /(^|;)\s*display\s*:/;
function Wg(e, t, n) {
    const r = e.style
      , s = Oe(n);
    let i = !1;
    if (n && !s) {
        if (t)
            if (Oe(t))
                for (const o of t.split(";")) {
                    const a = o.slice(0, o.indexOf(":")).trim();
                    n[a] == null && Fs(r, a, "")
                }
            else
                for (const o in t)
                    n[o] == null && Fs(r, o, "");
        for (const o in n)
            o === "display" && (i = !0),
            Fs(r, o, n[o])
    } else if (s) {
        if (t !== n) {
            const o = r[qg];
            o && (n += ";" + o),
            r.cssText = n,
            i = Vg.test(n)
        }
    } else
        t && e.removeAttribute("style");
    ti in e && (e[ti] = i ? r.display : "",
    e[Gf] && (r.display = "none"))
}
const Pl = /\s*!important$/;
function Fs(e, t, n) {
    if (oe(n))
        n.forEach(r => Fs(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = Bg(e, t);
        Pl.test(n) ? e.setProperty(tn(r), n.replace(Pl, ""), "important") : e[r] = n
    }
}
const Ll = ["Webkit", "Moz", "ms"]
  , Ki = {};
function Bg(e, t) {
    const n = Ki[t];
    if (n)
        return n;
    let r = mt(t);
    if (r !== "filter" && r in e)
        return Ki[t] = r;
    r = mi(r);
    for (let s = 0; s < Ll.length; s++) {
        const i = Ll[s] + r;
        if (i in e)
            return Ki[t] = i
    }
    return t
}
const Ol = "http://www.w3.org/1999/xlink";
function Rl(e, t, n, r, s, i=Gh(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ol, t.slice(6, t.length)) : e.setAttributeNS(Ol, t, n) : n == null || i && !Nu(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : en(n) ? String(n) : n)
}
function Ml(e, t, n, r, s) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? Bf(n) : n);
        return
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
        const a = i === "OPTION" ? e.getAttribute("value") || "" : e.value
          , l = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (a !== l || !("_value"in e)) && (e.value = l),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let o = !1;
    if (n === "" || n == null) {
        const a = typeof e[t];
        a === "boolean" ? n = Nu(n) : n == null && a === "string" ? (n = "",
        o = !0) : a === "number" && (n = 0,
        o = !0)
    }
    try {
        e[t] = n
    } catch {}
    o && e.removeAttribute(s || t)
}
function Zn(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function Ug(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const Fl = Symbol("_vei");
function Hg(e, t, n, r, s=null) {
    const i = e[Fl] || (e[Fl] = {})
      , o = i[t];
    if (r && o)
        o.value = r;
    else {
        const [a,l] = zg(t);
        if (r) {
            const c = i[t] = Qg(r, s);
            Zn(e, a, c, l)
        } else
            o && (Ug(e, a, o, l),
            i[t] = void 0)
    }
}
const Dl = /(?:Once|Passive|Capture)$/;
function zg(e) {
    let t;
    if (Dl.test(e)) {
        t = {};
        let r;
        for (; r = e.match(Dl); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : tn(e.slice(2)), t]
}
let Gi = 0;
const Kg = Promise.resolve()
  , Gg = () => Gi || (Kg.then( () => Gi = 0),
Gi = Date.now());
function Qg(e, t) {
    const n = r => {
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        Ot(Xg(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = Gg(),
    n
}
function Xg(e, t) {
    if (oe(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(r => s => !s._stopped && r && r(s))
    } else
        return t
}
const $l = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , Yg = (e, t, n, r, s, i) => {
    const o = s === "svg";
    t === "class" ? jg(e, r, o) : t === "style" ? Wg(e, n, r) : di(t) ? da(t) || Hg(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : Jg(e, t, r, o)) ? (Ml(e, t, r),
    !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Rl(e, t, r, o, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Oe(r)) ? Ml(e, mt(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    Rl(e, t, r, o))
}
;
function Jg(e, t, n, r) {
    if (r)
        return !!(t === "innerHTML" || t === "textContent" || t in e && $l(t) && le(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const s = e.tagName;
        if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
            return !1
    }
    return $l(t) && Oe(n) ? !1 : t in e
}
const Qf = new WeakMap
  , Xf = new WeakMap
  , ni = Symbol("_moveCb")
  , jl = Symbol("_enterCb")
  , Zg = e => (delete e.props.mode,
e)
  , ep = Zg({
    name: "TransitionGroup",
    props: $e({}, Hf, {
        tag: String,
        moveClass: String
    }),
    setup(e, {slots: t}) {
        const n = Se()
          , r = ff();
        let s, i;
        return Aa( () => {
            if (!s.length)
                return;
            const o = e.moveClass || `${e.name || "v"}-move`;
            if (!ip(s[0].el, n.vnode.el, o))
                return;
            s.forEach(np),
            s.forEach(rp);
            const a = s.filter(sp);
            Do(),
            a.forEach(l => {
                const c = l.el
                  , u = c.style;
                $t(c, o),
                u.transform = u.webkitTransform = u.transitionDuration = "";
                const f = c[ni] = d => {
                    d && d.target !== c || (!d || /transform$/.test(d.propertyName)) && (c.removeEventListener("transitionend", f),
                    c[ni] = null,
                    ln(c, o))
                }
                ;
                c.addEventListener("transitionend", f)
            }
            )
        }
        ),
        () => {
            const o = ue(e)
              , a = zf(o);
            let l = o.tag || tt;
            if (s = [],
            i)
                for (let c = 0; c < i.length; c++) {
                    const u = i[c];
                    u.el && u.el instanceof Element && (s.push(u),
                    bn(u, Zr(u, a, r, n)),
                    Qf.set(u, u.el.getBoundingClientRect()))
                }
            i = t.default ? Ta(t.default()) : [];
            for (let c = 0; c < i.length; c++) {
                const u = i[c];
                u.key != null && bn(u, Zr(u, a, r, n))
            }
            return Qe(l, null, i)
        }
    }
})
  , tp = ep;
function np(e) {
    const t = e.el;
    t[ni] && t[ni](),
    t[jl] && t[jl]()
}
function rp(e) {
    Xf.set(e, e.el.getBoundingClientRect())
}
function sp(e) {
    const t = Qf.get(e)
      , n = Xf.get(e)
      , r = t.left - n.left
      , s = t.top - n.top;
    if (r || s) {
        const i = e.el.style;
        return i.transform = i.webkitTransform = `translate(${r}px,${s}px)`,
        i.transitionDuration = "0s",
        e
    }
}
function ip(e, t, n) {
    const r = e.cloneNode()
      , s = e[ur];
    s && s.forEach(a => {
        a.split(/\s+/).forEach(l => l && r.classList.remove(l))
    }
    ),
    n.split(/\s+/).forEach(a => a && r.classList.add(a)),
    r.style.display = "none";
    const i = t.nodeType === 1 ? t : t.parentNode;
    i.appendChild(r);
    const {hasTransform: o} = Kf(r);
    return i.removeChild(r),
    o
}
const ql = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return oe(t) ? n => ir(t, n) : t
}
;
function op(e) {
    e.target.composing = !0
}
function Vl(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const Qi = Symbol("_assign")
  , BC = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, s) {
        e[Qi] = ql(s);
        const i = r || s.props && s.props.type === "number";
        Zn(e, t ? "change" : "input", o => {
            if (o.target.composing)
                return;
            let a = e.value;
            n && (a = a.trim()),
            i && (a = So(a)),
            e[Qi](a)
        }
        ),
        n && Zn(e, "change", () => {
            e.value = e.value.trim()
        }
        ),
        t || (Zn(e, "compositionstart", op),
        Zn(e, "compositionend", Vl),
        Zn(e, "change", Vl))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, oldValue: n, modifiers: {lazy: r, trim: s, number: i}}, o) {
        if (e[Qi] = ql(o),
        e.composing)
            return;
        const a = (i || e.type === "number") && !/^0\d/.test(e.value) ? So(e.value) : e.value
          , l = t ?? "";
        a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === l) || (e.value = l))
    }
}
  , ap = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , UC = (e, t) => {
    const n = e._withKeys || (e._withKeys = {})
      , r = t.join(".");
    return n[r] || (n[r] = s => {
        if (!("key"in s))
            return;
        const i = tn(s.key);
        if (t.some(o => o === i || ap[o] === i))
            return e(s)
    }
    )
}
  , lp = $e({
    patchProp: Yg
}, Mg);
let Wl;
function cp() {
    return Wl || (Wl = ig(lp))
}
const Yf = (...e) => {
    const t = cp().createApp(...e)
      , {mount: n} = t;
    return t.mount = r => {
        const s = fp(r);
        if (!s)
            return;
        const i = t._component;
        !le(i) && !i.render && !i.template && (i.template = s.innerHTML),
        s.nodeType === 1 && (s.textContent = "");
        const o = n(s, !1, up(s));
        return s instanceof Element && (s.removeAttribute("v-cloak"),
        s.setAttribute("data-v-app", "")),
        o
    }
    ,
    t
}
;
function up(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function fp(e) {
    return Oe(e) ? document.querySelector(e) : e
}
function yr(e, t, n, r) {
    return Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0
    }),
    e
}
const _n = he(!1);
let $o;
function dp(e, t) {
    const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
    return {
        browser: n[5] || n[3] || n[1] || "",
        version: n[4] || n[2] || "0",
        platform: t[0] || ""
    }
}
function hp(e) {
    return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || []
}
const Jf = "ontouchstart"in window || window.navigator.maxTouchPoints > 0;
function mp(e) {
    const t = e.toLowerCase()
      , n = hp(t)
      , r = dp(t, n)
      , s = {
        mobile: !1,
        desktop: !1,
        cordova: !1,
        capacitor: !1,
        nativeMobile: !1,
        electron: !1,
        bex: !1,
        linux: !1,
        mac: !1,
        win: !1,
        cros: !1,
        chrome: !1,
        firefox: !1,
        opera: !1,
        safari: !1,
        vivaldi: !1,
        edge: !1,
        edgeChromium: !1,
        ie: !1,
        webkit: !1,
        android: !1,
        ios: !1,
        ipad: !1,
        iphone: !1,
        ipod: !1,
        kindle: !1,
        winphone: !1,
        blackberry: !1,
        playbook: !1,
        silk: !1
    };
    r.browser && (s[r.browser] = !0,
    s.version = r.version,
    s.versionNumber = parseInt(r.version, 10)),
    r.platform && (s[r.platform] = !0);
    const i = s.android || s.ios || s.bb || s.blackberry || s.ipad || s.iphone || s.ipod || s.kindle || s.playbook || s.silk || s["windows phone"];
    if (i === !0 || t.indexOf("mobile") !== -1 ? s.mobile = !0 : s.desktop = !0,
    s["windows phone"] && (s.winphone = !0,
    delete s["windows phone"]),
    s.edga || s.edgios || s.edg ? (s.edge = !0,
    r.browser = "edge") : s.crios ? (s.chrome = !0,
    r.browser = "chrome") : s.fxios && (s.firefox = !0,
    r.browser = "firefox"),
    (s.ipod || s.ipad || s.iphone) && (s.ios = !0),
    s.vivaldi && (r.browser = "vivaldi",
    s.vivaldi = !0),
    (s.chrome || s.opr || s.safari || s.vivaldi || s.mobile === !0 && s.ios !== !0 && i !== !0) && (s.webkit = !0),
    s.opr && (r.browser = "opera",
    s.opera = !0),
    s.safari && (s.blackberry || s.bb ? (r.browser = "blackberry",
    s.blackberry = !0) : s.playbook ? (r.browser = "playbook",
    s.playbook = !0) : s.android ? (r.browser = "android",
    s.android = !0) : s.kindle ? (r.browser = "kindle",
    s.kindle = !0) : s.silk && (r.browser = "silk",
    s.silk = !0)),
    s.name = r.browser,
    s.platform = r.platform,
    t.indexOf("electron") !== -1)
        s.electron = !0;
    else if (document.location.href.indexOf("-extension://") !== -1)
        s.bex = !0;
    else {
        if (window.Capacitor !== void 0 ? (s.capacitor = !0,
        s.nativeMobile = !0,
        s.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (s.cordova = !0,
        s.nativeMobile = !0,
        s.nativeMobileWrapper = "cordova"),
        _n.value === !0 && ($o = {
            is: {
                ...s
            }
        }),
        Jf === !0 && s.mac === !0 && (s.desktop === !0 && s.safari === !0 || s.nativeMobile === !0 && s.android !== !0 && s.ios !== !0 && s.ipad !== !0)) {
            delete s.mac,
            delete s.desktop;
            const o = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
            Object.assign(s, {
                mobile: !0,
                ios: !0,
                platform: o,
                [o]: !0
            })
        }
        s.mobile !== !0 && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete s.desktop,
        s.mobile = !0)
    }
    return s
}
const Bl = navigator.userAgent || navigator.vendor || window.opera
  , gp = {
    has: {
        touch: !1,
        webStorage: !1
    },
    within: {
        iframe: !1
    }
}
  , Ve = {
    userAgent: Bl,
    is: mp(Bl),
    has: {
        touch: Jf
    },
    within: {
        iframe: window.self !== window.top
    }
}
  , jo = {
    install(e) {
        const {$q: t} = e;
        _n.value === !0 ? (e.onSSRHydrated.push( () => {
            Object.assign(t.platform, Ve),
            _n.value = !1
        }
        ),
        t.platform = Vn(this)) : t.platform = this
    }
};
{
    let e;
    yr(Ve.has, "webStorage", () => {
        if (e !== void 0)
            return e;
        try {
            if (window.localStorage)
                return e = !0,
                !0
        } catch {}
        return e = !1,
        !1
    }
    ),
    Object.assign(jo, Ve),
    _n.value === !0 && (Object.assign(jo, $o, gp),
    $o = null)
}
function Ye(e) {
    return Wn(Bn(e))
}
function pp(e) {
    return Wn(e)
}
const br = (e, t) => {
    const n = Vn(e);
    for (const r in e)
        yr(t, r, () => n[r], s => {
            n[r] = s
        }
        );
    return t
}
  , ct = {
    hasPassive: !1,
    passiveCapture: !0,
    notPassiveCapture: !0
};
try {
    const e = Object.defineProperty({}, "passive", {
        get() {
            Object.assign(ct, {
                hasPassive: !0,
                passive: {
                    passive: !0
                },
                notPassive: {
                    passive: !1
                },
                passiveCapture: {
                    passive: !0,
                    capture: !0
                },
                notPassiveCapture: {
                    passive: !1,
                    capture: !0
                }
            })
        }
    });
    window.addEventListener("qtest", null, e),
    window.removeEventListener("qtest", null, e)
} catch {}
function rs() {}
function HC(e) {
    return e.button === 0
}
function vp(e) {
    return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]),
    {
        top: e.clientY,
        left: e.clientX
    }
}
function yp(e) {
    if (e.path)
        return e.path;
    if (e.composedPath)
        return e.composedPath();
    const t = [];
    let n = e.target;
    for (; n; ) {
        if (t.push(n),
        n.tagName === "HTML")
            return t.push(document),
            t.push(window),
            t;
        n = n.parentElement
    }
}
function ri(e) {
    e.stopPropagation()
}
function vn(e) {
    e.cancelable !== !1 && e.preventDefault()
}
function bt(e) {
    e.cancelable !== !1 && e.preventDefault(),
    e.stopPropagation()
}
function zC(e, t) {
    if (e === void 0 || t === !0 && e.__dragPrevented === !0)
        return;
    const n = t === !0 ? r => {
        r.__dragPrevented = !0,
        r.addEventListener("dragstart", vn, ct.notPassiveCapture)
    }
    : r => {
        delete r.__dragPrevented,
        r.removeEventListener("dragstart", vn, ct.notPassiveCapture)
    }
    ;
    e.querySelectorAll("a, img").forEach(n)
}
function bp(e, t, n) {
    const r = `__q_${t}_evt`;
    e[r] = e[r] !== void 0 ? e[r].concat(n) : n,
    n.forEach(s => {
        s[0].addEventListener(s[1], e[s[2]], ct[s[3]])
    }
    )
}
function _p(e, t) {
    const n = `__q_${t}_evt`;
    e[n] !== void 0 && (e[n].forEach(r => {
        r[0].removeEventListener(r[1], e[r[2]], ct[r[3]])
    }
    ),
    e[n] = void 0)
}
function Zf(e, t=250, n) {
    let r = null;
    function s() {
        const i = arguments
          , o = () => {
            r = null,
            e.apply(this, i)
        }
        ;
        r !== null && clearTimeout(r),
        r = setTimeout(o, t)
    }
    return s.cancel = () => {
        r !== null && clearTimeout(r)
    }
    ,
    s
}
const Xi = ["sm", "md", "lg", "xl"]
  , {passive: Ul} = ct
  , wp = br({
    width: 0,
    height: 0,
    name: "xs",
    sizes: {
        sm: 600,
        md: 1024,
        lg: 1440,
        xl: 1920
    },
    lt: {
        sm: !0,
        md: !0,
        lg: !0,
        xl: !0
    },
    gt: {
        xs: !1,
        sm: !1,
        md: !1,
        lg: !1
    },
    xs: !0,
    sm: !1,
    md: !1,
    lg: !1,
    xl: !1
}, {
    setSizes: rs,
    setDebounce: rs,
    install({$q: e, onSSRHydrated: t}) {
        if (e.screen = this,
        this.__installed === !0) {
            e.config.screen !== void 0 && (e.config.screen.bodyClasses === !1 ? document.body.classList.remove(`screen--${this.name}`) : this.__update(!0));
            return
        }
        const {visualViewport: n} = window
          , r = n || window
          , s = document.scrollingElement || document.documentElement
          , i = n === void 0 || Ve.is.mobile === !0 ? () => [Math.max(window.innerWidth, s.clientWidth), Math.max(window.innerHeight, s.clientHeight)] : () => [n.width * n.scale + window.innerWidth - s.clientWidth, n.height * n.scale + window.innerHeight - s.clientHeight]
          , o = e.config.screen?.bodyClasses === !0;
        this.__update = f => {
            const [d,h] = i();
            if (h !== this.height && (this.height = h),
            d !== this.width)
                this.width = d;
            else if (f !== !0)
                return;
            let p = this.sizes;
            this.gt.xs = d >= p.sm,
            this.gt.sm = d >= p.md,
            this.gt.md = d >= p.lg,
            this.gt.lg = d >= p.xl,
            this.lt.sm = d < p.sm,
            this.lt.md = d < p.md,
            this.lt.lg = d < p.lg,
            this.lt.xl = d < p.xl,
            this.xs = this.lt.sm,
            this.sm = this.gt.xs === !0 && this.lt.md === !0,
            this.md = this.gt.sm === !0 && this.lt.lg === !0,
            this.lg = this.gt.md === !0 && this.lt.xl === !0,
            this.xl = this.gt.lg,
            p = this.xs === !0 && "xs" || this.sm === !0 && "sm" || this.md === !0 && "md" || this.lg === !0 && "lg" || "xl",
            p !== this.name && (o === !0 && (document.body.classList.remove(`screen--${this.name}`),
            document.body.classList.add(`screen--${p}`)),
            this.name = p)
        }
        ;
        let a, l = {}, c = 16;
        this.setSizes = f => {
            Xi.forEach(d => {
                f[d] !== void 0 && (l[d] = f[d])
            }
            )
        }
        ,
        this.setDebounce = f => {
            c = f
        }
        ;
        const u = () => {
            const f = getComputedStyle(document.body);
            f.getPropertyValue("--q-size-sm") && Xi.forEach(d => {
                this.sizes[d] = parseInt(f.getPropertyValue(`--q-size-${d}`), 10)
            }
            ),
            this.setSizes = d => {
                Xi.forEach(h => {
                    d[h] && (this.sizes[h] = d[h])
                }
                ),
                this.__update(!0)
            }
            ,
            this.setDebounce = d => {
                a !== void 0 && r.removeEventListener("resize", a, Ul),
                a = d > 0 ? Zf(this.__update, d) : this.__update,
                r.addEventListener("resize", a, Ul)
            }
            ,
            this.setDebounce(c),
            Object.keys(l).length !== 0 ? (this.setSizes(l),
            l = void 0) : this.__update(),
            o === !0 && this.name === "xs" && document.body.classList.add("screen--xs")
        }
        ;
        _n.value === !0 ? t.push(u) : u()
    }
})
  , Je = br({
    isActive: !1,
    mode: !1
}, {
    __media: void 0,
    set(e) {
        Je.mode = e,
        e === "auto" ? (Je.__media === void 0 && (Je.__media = window.matchMedia("(prefers-color-scheme: dark)"),
        Je.__updateMedia = () => {
            Je.set("auto")
        }
        ,
        Je.__media.addListener(Je.__updateMedia)),
        e = Je.__media.matches) : Je.__media !== void 0 && (Je.__media.removeListener(Je.__updateMedia),
        Je.__media = void 0),
        Je.isActive = e === !0,
        document.body.classList.remove(`body--${e === !0 ? "light" : "dark"}`),
        document.body.classList.add(`body--${e === !0 ? "dark" : "light"}`)
    },
    toggle() {
        Je.set(Je.isActive === !1)
    },
    install({$q: e, ssrContext: t}) {
        const {dark: n} = e.config;
        e.dark = this,
        this.__installed !== !0 && this.set(n !== void 0 ? n : !1)
    }
});
function Cp(e, t, n=document.body) {
    if (typeof e != "string")
        throw new TypeError("Expected a string as propName");
    if (typeof t != "string")
        throw new TypeError("Expected a string as value");
    if (!(n instanceof Element))
        throw new TypeError("Expected a DOM element");
    n.style.setProperty(`--q-${e}`, t)
}
let ed = !1;
function Ep(e) {
    ed = e.isComposing === !0
}
function td(e) {
    return ed === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0
}
function ss(e, t) {
    return td(e) === !0 ? !1 : [].concat(t).includes(e.keyCode)
}
function nd(e) {
    if (e.ios === !0)
        return "ios";
    if (e.android === !0)
        return "android"
}
function Sp({is: e, has: t, within: n}, r) {
    const s = [e.desktop === !0 ? "desktop" : "mobile", `${t.touch === !1 ? "no-" : ""}touch`];
    if (e.mobile === !0) {
        const i = nd(e);
        i !== void 0 && s.push("platform-" + i)
    }
    if (e.nativeMobile === !0) {
        const i = e.nativeMobileWrapper;
        s.push(i),
        s.push("native-mobile"),
        e.ios === !0 && (r[i] === void 0 || r[i].iosStatusBarPadding !== !1) && s.push("q-ios-padding")
    } else
        e.electron === !0 ? s.push("electron") : e.bex === !0 && s.push("bex");
    return n.iframe === !0 && s.push("within-iframe"),
    s
}
function kp() {
    const {is: e} = Ve
      , t = document.body.className
      , n = new Set(t.replace(/ {2}/g, " ").split(" "));
    if (e.nativeMobile !== !0 && e.electron !== !0 && e.bex !== !0) {
        if (e.desktop === !0)
            n.delete("mobile"),
            n.delete("platform-ios"),
            n.delete("platform-android"),
            n.add("desktop");
        else if (e.mobile === !0) {
            n.delete("desktop"),
            n.add("mobile"),
            n.delete("platform-ios"),
            n.delete("platform-android");
            const s = nd(e);
            s !== void 0 && n.add(`platform-${s}`)
        }
    }
    Ve.has.touch === !0 && (n.delete("no-touch"),
    n.add("touch")),
    Ve.within.iframe === !0 && n.add("within-iframe");
    const r = Array.from(n).join(" ");
    t !== r && (document.body.className = r)
}
function xp(e) {
    for (const t in e)
        Cp(t, e[t])
}
const Tp = {
    install(e) {
        if (this.__installed !== !0) {
            if (_n.value === !0)
                kp();
            else {
                const {$q: t} = e;
                t.config.brand !== void 0 && xp(t.config.brand);
                const n = Sp(Ve, t.config);
                document.body.classList.add.apply(document.body.classList, n)
            }
            Ve.is.ios === !0 && document.body.addEventListener("touchstart", rs),
            window.addEventListener("keydown", Ep, !0)
        }
    }
}
  , rd = () => !0;
function Ap(e) {
    return typeof e == "string" && e !== "" && e !== "/" && e !== "#/"
}
function Ip(e) {
    return e.startsWith("#") === !0 && (e = e.substring(1)),
    e.startsWith("/") === !1 && (e = "/" + e),
    e.endsWith("/") === !0 && (e = e.substring(0, e.length - 1)),
    "#" + e
}
function Np(e) {
    if (e.backButtonExit === !1)
        return () => !1;
    if (e.backButtonExit === "*")
        return rd;
    const t = ["#/"];
    return Array.isArray(e.backButtonExit) === !0 && t.push(...e.backButtonExit.filter(Ap).map(Ip)),
    () => t.includes(window.location.hash)
}
const qo = {
    __history: [],
    add: rs,
    remove: rs,
    install({$q: e}) {
        if (this.__installed === !0)
            return;
        const {cordova: t, capacitor: n} = Ve.is;
        if (t !== !0 && n !== !0)
            return;
        const r = e.config[t === !0 ? "cordova" : "capacitor"];
        if (r?.backButton === !1 || n === !0 && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0))
            return;
        this.add = o => {
            o.condition === void 0 && (o.condition = rd),
            this.__history.push(o)
        }
        ,
        this.remove = o => {
            const a = this.__history.indexOf(o);
            a >= 0 && this.__history.splice(a, 1)
        }
        ;
        const s = Np(Object.assign({
            backButtonExit: !0
        }, r))
          , i = () => {
            if (this.__history.length) {
                const o = this.__history[this.__history.length - 1];
                o.condition() === !0 && (this.__history.pop(),
                o.handler())
            } else
                s() === !0 ? navigator.app.exitApp() : window.history.back()
        }
        ;
        t === !0 ? document.addEventListener("deviceready", () => {
            document.addEventListener("backbutton", i, !1)
        }
        ) : window.Capacitor.Plugins.App.addListener("backButton", i)
    }
}
  , Hl = {
    isoName: "en-US",
    nativeName: "English (US)",
    label: {
        clear: "Clear",
        ok: "OK",
        cancel: "Cancel",
        close: "Close",
        set: "Set",
        select: "Select",
        reset: "Reset",
        remove: "Remove",
        update: "Update",
        create: "Create",
        search: "Search",
        filter: "Filter",
        refresh: "Refresh",
        expand: e => e ? `Expand "${e}"` : "Expand",
        collapse: e => e ? `Collapse "${e}"` : "Collapse"
    },
    date: {
        days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        firstDayOfWeek: 0,
        format24h: !1,
        pluralDay: "days",
        prevMonth: "Previous month",
        nextMonth: "Next month",
        prevYear: "Previous year",
        nextYear: "Next year",
        today: "Today",
        prevRangeYears: e => `Previous ${e} years`,
        nextRangeYears: e => `Next ${e} years`
    },
    table: {
        noData: "No data available",
        noResults: "No matching records found",
        loading: "Loading...",
        selectedRecords: e => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.",
        recordsPerPage: "Records per page:",
        allRows: "All",
        pagination: (e, t, n) => e + "-" + t + " of " + n,
        columns: "Columns"
    },
    pagination: {
        first: "First page",
        prev: "Previous page",
        next: "Next page",
        last: "Last page"
    },
    editor: {
        url: "URL",
        bold: "Bold",
        italic: "Italic",
        strikethrough: "Strikethrough",
        underline: "Underline",
        unorderedList: "Unordered List",
        orderedList: "Ordered List",
        subscript: "Subscript",
        superscript: "Superscript",
        hyperlink: "Hyperlink",
        toggleFullscreen: "Toggle Fullscreen",
        quote: "Quote",
        left: "Left align",
        center: "Center align",
        right: "Right align",
        justify: "Justify align",
        print: "Print",
        outdent: "Decrease indentation",
        indent: "Increase indentation",
        removeFormat: "Remove formatting",
        formatting: "Formatting",
        fontSize: "Font Size",
        align: "Align",
        hr: "Insert Horizontal Rule",
        undo: "Undo",
        redo: "Redo",
        heading1: "Heading 1",
        heading2: "Heading 2",
        heading3: "Heading 3",
        heading4: "Heading 4",
        heading5: "Heading 5",
        heading6: "Heading 6",
        paragraph: "Paragraph",
        code: "Code",
        size1: "Very small",
        size2: "A bit small",
        size3: "Normal",
        size4: "Medium-large",
        size5: "Big",
        size6: "Very big",
        size7: "Maximum",
        defaultFont: "Default Font",
        viewSource: "View Source"
    },
    tree: {
        noNodes: "No nodes available",
        noResults: "No matching nodes found"
    }
};
function zl() {
    const e = Array.isArray(navigator.languages) === !0 && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
    if (typeof e == "string")
        return e.split(/[-_]/).map( (t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-")
}
const mn = br({
    __qLang: {}
}, {
    getLocale: zl,
    set(e=Hl, t) {
        const n = {
            ...e,
            rtl: e.rtl === !0,
            getLocale: zl
        };
        {
            if (n.set = mn.set,
            mn.__langConfig === void 0 || mn.__langConfig.noHtmlAttrs !== !0) {
                const r = document.documentElement;
                r.setAttribute("dir", n.rtl === !0 ? "rtl" : "ltr"),
                r.setAttribute("lang", n.isoName)
            }
            Object.assign(mn.__qLang, n)
        }
    },
    install({$q: e, lang: t, ssrContext: n}) {
        e.lang = mn.__qLang,
        mn.__langConfig = e.config.lang,
        this.__installed === !0 ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qLang,{
            get() {
                return Reflect.get(...arguments)
            },
            ownKeys(r) {
                return Reflect.ownKeys(r).filter(s => s !== "set" && s !== "getLocale")
            }
        }),
        this.set(t || Hl))
    }
})
  , Pp = {
    name: "material-icons",
    type: {
        positive: "check_circle",
        negative: "warning",
        info: "info",
        warning: "priority_high"
    },
    arrow: {
        up: "arrow_upward",
        right: "arrow_forward",
        down: "arrow_downward",
        left: "arrow_back",
        dropdown: "arrow_drop_down"
    },
    chevron: {
        left: "chevron_left",
        right: "chevron_right"
    },
    colorPicker: {
        spectrum: "gradient",
        tune: "tune",
        palette: "style"
    },
    pullToRefresh: {
        icon: "refresh"
    },
    carousel: {
        left: "chevron_left",
        right: "chevron_right",
        up: "keyboard_arrow_up",
        down: "keyboard_arrow_down",
        navigationIcon: "lens"
    },
    chip: {
        remove: "cancel",
        selected: "check"
    },
    datetime: {
        arrowLeft: "chevron_left",
        arrowRight: "chevron_right",
        now: "access_time",
        today: "today"
    },
    editor: {
        bold: "format_bold",
        italic: "format_italic",
        strikethrough: "strikethrough_s",
        underline: "format_underlined",
        unorderedList: "format_list_bulleted",
        orderedList: "format_list_numbered",
        subscript: "vertical_align_bottom",
        superscript: "vertical_align_top",
        hyperlink: "link",
        toggleFullscreen: "fullscreen",
        quote: "format_quote",
        left: "format_align_left",
        center: "format_align_center",
        right: "format_align_right",
        justify: "format_align_justify",
        print: "print",
        outdent: "format_indent_decrease",
        indent: "format_indent_increase",
        removeFormat: "format_clear",
        formatting: "text_format",
        fontSize: "format_size",
        align: "format_align_left",
        hr: "remove",
        undo: "undo",
        redo: "redo",
        heading: "format_size",
        code: "code",
        size: "format_size",
        font: "font_download",
        viewSource: "code"
    },
    expansionItem: {
        icon: "keyboard_arrow_down",
        denseIcon: "arrow_drop_down"
    },
    fab: {
        icon: "add",
        activeIcon: "close"
    },
    field: {
        clear: "cancel",
        error: "error"
    },
    pagination: {
        first: "first_page",
        prev: "keyboard_arrow_left",
        next: "keyboard_arrow_right",
        last: "last_page"
    },
    rating: {
        icon: "grade"
    },
    stepper: {
        done: "check",
        active: "edit",
        error: "warning"
    },
    tabs: {
        left: "chevron_left",
        right: "chevron_right",
        up: "keyboard_arrow_up",
        down: "keyboard_arrow_down"
    },
    table: {
        arrowUp: "arrow_upward",
        warning: "warning",
        firstPage: "first_page",
        prevPage: "chevron_left",
        nextPage: "chevron_right",
        lastPage: "last_page"
    },
    tree: {
        icon: "play_arrow"
    },
    uploader: {
        done: "done",
        clear: "clear",
        add: "add_box",
        upload: "cloud_upload",
        removeQueue: "clear_all",
        removeUploaded: "done_all"
    }
}
  , si = br({
    iconMapFn: null,
    __qIconSet: {}
}, {
    set(e, t) {
        const n = {
            ...e
        };
        n.set = si.set,
        Object.assign(si.__qIconSet, n)
    },
    install({$q: e, iconSet: t, ssrContext: n}) {
        e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn),
        e.iconSet = this.__qIconSet,
        yr(e, "iconMapFn", () => this.iconMapFn, r => {
            this.iconMapFn = r
        }
        ),
        this.__installed === !0 ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qIconSet,{
            get() {
                return Reflect.get(...arguments)
            },
            ownKeys(r) {
                return Reflect.ownKeys(r).filter(s => s !== "set")
            }
        }),
        this.set(t || Pp))
    }
})
  , Lp = "_q_"
  , KC = "_q_l_"
  , GC = "_q_pc_"
  , Op = "_q_fo_"
  , QC = "_q_tabs_";
function XC() {}
const ii = {};
let sd = !1;
function Rp() {
    sd = !0
}
function Yi(e, t) {
    if (e === t)
        return !0;
    if (e !== null && t !== null && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor)
            return !1;
        let n, r;
        if (e.constructor === Array) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (Yi(e[r], t[r]) !== !0)
                    return !1;
            return !0
        }
        if (e.constructor === Map) {
            if (e.size !== t.size)
                return !1;
            let i = e.entries();
            for (r = i.next(); r.done !== !0; ) {
                if (t.has(r.value[0]) !== !0)
                    return !1;
                r = i.next()
            }
            for (i = e.entries(),
            r = i.next(); r.done !== !0; ) {
                if (Yi(r.value[1], t.get(r.value[0])) !== !0)
                    return !1;
                r = i.next()
            }
            return !0
        }
        if (e.constructor === Set) {
            if (e.size !== t.size)
                return !1;
            const i = e.entries();
            for (r = i.next(); r.done !== !0; ) {
                if (t.has(r.value[0]) !== !0)
                    return !1;
                r = i.next()
            }
            return !0
        }
        if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (e[r] !== t[r])
                    return !1;
            return !0
        }
        if (e.constructor === RegExp)
            return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString)
            return e.toString() === t.toString();
        const s = Object.keys(e).filter(i => e[i] !== void 0);
        if (n = s.length,
        n !== Object.keys(t).filter(i => t[i] !== void 0).length)
            return !1;
        for (r = n; r-- !== 0; ) {
            const i = s[r];
            if (Yi(e[i], t[i]) !== !0)
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function dt(e) {
    return e !== null && typeof e == "object" && Array.isArray(e) !== !0
}
function YC(e) {
    return typeof e == "number" && isFinite(e)
}
const Kl = [jo, Tp, Je, wp, qo, mn, si];
function Oa(e, t) {
    const n = Yf(e);
    n.config.globalProperties = t.config.globalProperties;
    const {reload: r, ...s} = t._context;
    return Object.assign(n._context, s),
    n
}
function Gl(e, t) {
    t.forEach(n => {
        n.install(e),
        n.__installed = !0
    }
    )
}
function Mp(e, t, n) {
    e.config.globalProperties.$q = n.$q,
    e.provide(Lp, n.$q),
    Gl(n, Kl),
    t.components !== void 0 && Object.values(t.components).forEach(r => {
        dt(r) === !0 && r.name !== void 0 && e.component(r.name, r)
    }
    ),
    t.directives !== void 0 && Object.values(t.directives).forEach(r => {
        dt(r) === !0 && r.name !== void 0 && e.directive(r.name, r)
    }
    ),
    t.plugins !== void 0 && Gl(n, Object.values(t.plugins).filter(r => typeof r.install == "function" && Kl.includes(r) === !1)),
    _n.value === !0 && (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach(r => {
            r()
        }
        ),
        n.$q.onSSRHydrated = () => {}
    }
    )
}
const Fp = function(e, t={}) {
    const n = {
        version: "2.18.1"
    };
    sd === !1 ? (t.config !== void 0 && Object.assign(ii, t.config),
    n.config = {
        ...ii
    },
    Rp()) : n.config = t.config || {},
    Mp(e, t, {
        parentApp: e,
        $q: n,
        lang: t.lang,
        iconSet: t.iconSet,
        onSSRHydrated: []
    })
}
  , Dp = {
    name: "Quasar",
    version: "2.18.1",
    install: Fp,
    lang: mn,
    iconSet: si
};
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const er = typeof document < "u";
function id(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function $p(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && id(e.default)
}
const we = Object.assign;
function Ji(e, t) {
    const n = {};
    for (const r in t) {
        const s = t[r];
        n[r] = Rt(s) ? s.map(e) : e(s)
    }
    return n
}
const Br = () => {}
  , Rt = Array.isArray
  , od = /#/g
  , jp = /&/g
  , qp = /\//g
  , Vp = /=/g
  , Wp = /\?/g
  , ad = /\+/g
  , Bp = /%5B/g
  , Up = /%5D/g
  , ld = /%5E/g
  , Hp = /%60/g
  , cd = /%7B/g
  , zp = /%7C/g
  , ud = /%7D/g
  , Kp = /%20/g;
function Ra(e) {
    return encodeURI("" + e).replace(zp, "|").replace(Bp, "[").replace(Up, "]")
}
function Gp(e) {
    return Ra(e).replace(cd, "{").replace(ud, "}").replace(ld, "^")
}
function Vo(e) {
    return Ra(e).replace(ad, "%2B").replace(Kp, "+").replace(od, "%23").replace(jp, "%26").replace(Hp, "`").replace(cd, "{").replace(ud, "}").replace(ld, "^")
}
function Qp(e) {
    return Vo(e).replace(Vp, "%3D")
}
function Xp(e) {
    return Ra(e).replace(od, "%23").replace(Wp, "%3F")
}
function Yp(e) {
    return e == null ? "" : Xp(e).replace(qp, "%2F")
}
function is(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const Jp = /\/$/
  , Zp = e => e.replace(Jp, "");
function Zi(e, t, n="/") {
    let r, s = {}, i = "", o = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1),
    l > -1 && (r = t.slice(0, l),
    i = t.slice(l + 1, a > -1 ? a : t.length),
    s = e(i)),
    a > -1 && (r = r || t.slice(0, a),
    o = t.slice(a, t.length)),
    r = rv(r ?? t, n),
    {
        fullPath: r + (i && "?") + i + o,
        path: r,
        query: s,
        hash: is(o)
    }
}
function ev(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function Ql(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function tv(e, t, n) {
    const r = t.matched.length - 1
      , s = n.matched.length - 1;
    return r > -1 && r === s && fr(t.matched[r], n.matched[s]) && fd(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function fr(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function fd(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!nv(e[n], t[n]))
            return !1;
    return !0
}
function nv(e, t) {
    return Rt(e) ? Xl(e, t) : Rt(t) ? Xl(t, e) : e === t
}
function Xl(e, t) {
    return Rt(t) ? e.length === t.length && e.every( (n, r) => n === t[r]) : e.length === 1 && e[0] === t
}
function rv(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , r = e.split("/")
      , s = r[r.length - 1];
    (s === ".." || s === ".") && r.push("");
    let i = n.length - 1, o, a;
    for (o = 0; o < r.length; o++)
        if (a = r[o],
        a !== ".")
            if (a === "..")
                i > 1 && i--;
            else
                break;
    return n.slice(0, i).join("/") + "/" + r.slice(o).join("/")
}
const on = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var os;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(os || (os = {}));
var Ur;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(Ur || (Ur = {}));
function sv(e) {
    if (!e)
        if (er) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    Zp(e)
}
const iv = /^[^#]+#/;
function ov(e, t) {
    return e.replace(iv, "#") + t
}
function av(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const xi = () => ({
    left: window.scrollX,
    top: window.scrollY
});
function lv(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , r = typeof n == "string" && n.startsWith("#")
          , s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!s)
            return;
        t = av(s, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function Yl(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Wo = new Map;
function cv(e, t) {
    Wo.set(e, t)
}
function uv(e) {
    const t = Wo.get(e);
    return Wo.delete(e),
    t
}
let fv = () => location.protocol + "//" + location.host;
function dd(e, t) {
    const {pathname: n, search: r, hash: s} = t
      , i = e.indexOf("#");
    if (i > -1) {
        let a = s.includes(e.slice(i)) ? e.slice(i).length : 1
          , l = s.slice(a);
        return l[0] !== "/" && (l = "/" + l),
        Ql(l, "")
    }
    return Ql(n, e) + r + s
}
function dv(e, t, n, r) {
    let s = []
      , i = []
      , o = null;
    const a = ({state: d}) => {
        const h = dd(e, location)
          , p = n.value
          , E = t.value;
        let I = 0;
        if (d) {
            if (n.value = h,
            t.value = d,
            o && o === p) {
                o = null;
                return
            }
            I = E ? d.position - E.position : 0
        } else
            r(h);
        s.forEach(b => {
            b(n.value, p, {
                delta: I,
                type: os.pop,
                direction: I ? I > 0 ? Ur.forward : Ur.back : Ur.unknown
            })
        }
        )
    }
    ;
    function l() {
        o = n.value
    }
    function c(d) {
        s.push(d);
        const h = () => {
            const p = s.indexOf(d);
            p > -1 && s.splice(p, 1)
        }
        ;
        return i.push(h),
        h
    }
    function u() {
        const {history: d} = window;
        d.state && d.replaceState(we({}, d.state, {
            scroll: xi()
        }), "")
    }
    function f() {
        for (const d of i)
            d();
        i = [],
        window.removeEventListener("popstate", a),
        window.removeEventListener("beforeunload", u)
    }
    return window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", u, {
        passive: !0
    }),
    {
        pauseListeners: l,
        listen: c,
        destroy: f
    }
}
function Jl(e, t, n, r=!1, s=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: s ? xi() : null
    }
}
function hv(e) {
    const {history: t, location: n} = window
      , r = {
        value: dd(e, n)
    }
      , s = {
        value: t.state
    };
    s.value || i(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function i(l, c, u) {
        const f = e.indexOf("#")
          , d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : fv() + e + l;
        try {
            t[u ? "replaceState" : "pushState"](c, "", d),
            s.value = c
        } catch (h) {
            console.error(h),
            n[u ? "replace" : "assign"](d)
        }
    }
    function o(l, c) {
        const u = we({}, t.state, Jl(s.value.back, l, s.value.forward, !0), c, {
            position: s.value.position
        });
        i(l, u, !0),
        r.value = l
    }
    function a(l, c) {
        const u = we({}, s.value, t.state, {
            forward: l,
            scroll: xi()
        });
        i(u.current, u, !0);
        const f = we({}, Jl(r.value, l, null), {
            position: u.position + 1
        }, c);
        i(l, f, !1),
        r.value = l
    }
    return {
        location: r,
        state: s,
        push: a,
        replace: o
    }
}
function mv(e) {
    e = sv(e);
    const t = hv(e)
      , n = dv(e, t.state, t.location, t.replace);
    function r(i, o=!0) {
        o || n.pauseListeners(),
        history.go(i)
    }
    const s = we({
        location: "",
        base: e,
        go: r,
        createHref: ov.bind(null, e)
    }, t, n);
    return Object.defineProperty(s, "location", {
        enumerable: !0,
        get: () => t.location.value
    }),
    Object.defineProperty(s, "state", {
        enumerable: !0,
        get: () => t.state.value
    }),
    s
}
function gv(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function hd(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const md = Symbol("");
var Zl;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(Zl || (Zl = {}));
function dr(e, t) {
    return we(new Error, {
        type: e,
        [md]: !0
    }, t)
}
function Bt(e, t) {
    return e instanceof Error && md in e && (t == null || !!(e.type & t))
}
const ec = "[^/]+?"
  , pv = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , vv = /[.+*?^${}()[\]/\\]/g;
function yv(e, t) {
    const n = we({}, pv, t)
      , r = [];
    let s = n.start ? "^" : "";
    const i = [];
    for (const c of e) {
        const u = c.length ? [] : [90];
        n.strict && !c.length && (s += "/");
        for (let f = 0; f < c.length; f++) {
            const d = c[f];
            let h = 40 + (n.sensitive ? .25 : 0);
            if (d.type === 0)
                f || (s += "/"),
                s += d.value.replace(vv, "\\$&"),
                h += 40;
            else if (d.type === 1) {
                const {value: p, repeatable: E, optional: I, regexp: b} = d;
                i.push({
                    name: p,
                    repeatable: E,
                    optional: I
                });
                const m = b || ec;
                if (m !== ec) {
                    h += 10;
                    try {
                        new RegExp(`(${m})`)
                    } catch (y) {
                        throw new Error(`Invalid custom RegExp for param "${p}" (${m}): ` + y.message)
                    }
                }
                let C = E ? `((?:${m})(?:/(?:${m}))*)` : `(${m})`;
                f || (C = I && c.length < 2 ? `(?:/${C})` : "/" + C),
                I && (C += "?"),
                s += C,
                h += 20,
                I && (h += -8),
                E && (h += -20),
                m === ".*" && (h += -50)
            }
            u.push(h)
        }
        r.push(u)
    }
    if (n.strict && n.end) {
        const c = r.length - 1;
        r[c][r[c].length - 1] += .7000000000000001
    }
    n.strict || (s += "/?"),
    n.end ? s += "$" : n.strict && !s.endsWith("/") && (s += "(?:/|$)");
    const o = new RegExp(s,n.sensitive ? "" : "i");
    function a(c) {
        const u = c.match(o)
          , f = {};
        if (!u)
            return null;
        for (let d = 1; d < u.length; d++) {
            const h = u[d] || ""
              , p = i[d - 1];
            f[p.name] = h && p.repeatable ? h.split("/") : h
        }
        return f
    }
    function l(c) {
        let u = ""
          , f = !1;
        for (const d of e) {
            (!f || !u.endsWith("/")) && (u += "/"),
            f = !1;
            for (const h of d)
                if (h.type === 0)
                    u += h.value;
                else if (h.type === 1) {
                    const {value: p, repeatable: E, optional: I} = h
                      , b = p in c ? c[p] : "";
                    if (Rt(b) && !E)
                        throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
                    const m = Rt(b) ? b.join("/") : b;
                    if (!m)
                        if (I)
                            d.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : f = !0);
                        else
                            throw new Error(`Missing required param "${p}"`);
                    u += m
                }
        }
        return u || "/"
    }
    return {
        re: o,
        score: r,
        keys: i,
        parse: a,
        stringify: l
    }
}
function bv(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r)
            return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function gd(e, t) {
    let n = 0;
    const r = e.score
      , s = t.score;
    for (; n < r.length && n < s.length; ) {
        const i = bv(r[n], s[n]);
        if (i)
            return i;
        n++
    }
    if (Math.abs(s.length - r.length) === 1) {
        if (tc(r))
            return 1;
        if (tc(s))
            return -1
    }
    return s.length - r.length
}
function tc(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const _v = {
    type: 0,
    value: ""
}
  , wv = /[a-zA-Z0-9_]/;
function Cv(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[_v]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(h) {
        throw new Error(`ERR (${n})/"${c}": ${h}`)
    }
    let n = 0
      , r = n;
    const s = [];
    let i;
    function o() {
        i && s.push(i),
        i = []
    }
    let a = 0, l, c = "", u = "";
    function f() {
        c && (n === 0 ? i.push({
            type: 0,
            value: c
        }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
        i.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"),
        c = "")
    }
    function d() {
        c += l
    }
    for (; a < e.length; ) {
        if (l = e[a++],
        l === "\\" && n !== 2) {
            r = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            l === "/" ? (c && f(),
            o()) : l === ":" ? (f(),
            n = 1) : d();
            break;
        case 4:
            d(),
            n = r;
            break;
        case 1:
            l === "(" ? n = 2 : wv.test(l) ? d() : (f(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--);
            break;
        case 2:
            l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = 3 : u += l;
            break;
        case 3:
            f(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--,
            u = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${c}"`),
    f(),
    o(),
    s
}
function Ev(e, t, n) {
    const r = yv(Cv(e.path), n)
      , s = we(r, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s),
    s
}
function Sv(e, t) {
    const n = []
      , r = new Map;
    t = ic({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function s(f) {
        return r.get(f)
    }
    function i(f, d, h) {
        const p = !h
          , E = rc(f);
        E.aliasOf = h && h.record;
        const I = ic(t, f)
          , b = [E];
        if ("alias"in f) {
            const y = typeof f.alias == "string" ? [f.alias] : f.alias;
            for (const x of y)
                b.push(rc(we({}, E, {
                    components: h ? h.record.components : E.components,
                    path: x,
                    aliasOf: h ? h.record : E
                })))
        }
        let m, C;
        for (const y of b) {
            const {path: x} = y;
            if (d && x[0] !== "/") {
                const L = d.record.path
                  , N = L[L.length - 1] === "/" ? "" : "/";
                y.path = d.record.path + (x && N + x)
            }
            if (m = Ev(y, d, I),
            h ? h.alias.push(m) : (C = C || m,
            C !== m && C.alias.push(m),
            p && f.name && !sc(m) && o(f.name)),
            pd(m) && l(m),
            E.children) {
                const L = E.children;
                for (let N = 0; N < L.length; N++)
                    i(L[N], m, h && h.children[N])
            }
            h = h || m
        }
        return C ? () => {
            o(C)
        }
        : Br
    }
    function o(f) {
        if (hd(f)) {
            const d = r.get(f);
            d && (r.delete(f),
            n.splice(n.indexOf(d), 1),
            d.children.forEach(o),
            d.alias.forEach(o))
        } else {
            const d = n.indexOf(f);
            d > -1 && (n.splice(d, 1),
            f.record.name && r.delete(f.record.name),
            f.children.forEach(o),
            f.alias.forEach(o))
        }
    }
    function a() {
        return n
    }
    function l(f) {
        const d = Tv(f, n);
        n.splice(d, 0, f),
        f.record.name && !sc(f) && r.set(f.record.name, f)
    }
    function c(f, d) {
        let h, p = {}, E, I;
        if ("name"in f && f.name) {
            if (h = r.get(f.name),
            !h)
                throw dr(1, {
                    location: f
                });
            I = h.record.name,
            p = we(nc(d.params, h.keys.filter(C => !C.optional).concat(h.parent ? h.parent.keys.filter(C => C.optional) : []).map(C => C.name)), f.params && nc(f.params, h.keys.map(C => C.name))),
            E = h.stringify(p)
        } else if (f.path != null)
            E = f.path,
            h = n.find(C => C.re.test(E)),
            h && (p = h.parse(E),
            I = h.record.name);
        else {
            if (h = d.name ? r.get(d.name) : n.find(C => C.re.test(d.path)),
            !h)
                throw dr(1, {
                    location: f,
                    currentLocation: d
                });
            I = h.record.name,
            p = we({}, d.params, f.params),
            E = h.stringify(p)
        }
        const b = [];
        let m = h;
        for (; m; )
            b.unshift(m.record),
            m = m.parent;
        return {
            name: I,
            path: E,
            params: p,
            matched: b,
            meta: xv(b)
        }
    }
    e.forEach(f => i(f));
    function u() {
        n.length = 0,
        r.clear()
    }
    return {
        addRoute: i,
        resolve: c,
        removeRoute: o,
        clearRoutes: u,
        getRoutes: a,
        getRecordMatcher: s
    }
}
function nc(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
function rc(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: kv(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
            default: e.component
        }
    };
    return Object.defineProperty(t, "mods", {
        value: {}
    }),
    t
}
function kv(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const r in e.components)
            t[r] = typeof n == "object" ? n[r] : n;
    return t
}
function sc(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function xv(e) {
    return e.reduce( (t, n) => we(t, n.meta), {})
}
function ic(e, t) {
    const n = {};
    for (const r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
function Tv(e, t) {
    let n = 0
      , r = t.length;
    for (; n !== r; ) {
        const i = n + r >> 1;
        gd(e, t[i]) < 0 ? r = i : n = i + 1
    }
    const s = Av(e);
    return s && (r = t.lastIndexOf(s, r - 1)),
    r
}
function Av(e) {
    let t = e;
    for (; t = t.parent; )
        if (pd(t) && gd(e, t) === 0)
            return t
}
function pd({record: e}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}
function Iv(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let s = 0; s < r.length; ++s) {
        const i = r[s].replace(ad, " ")
          , o = i.indexOf("=")
          , a = is(o < 0 ? i : i.slice(0, o))
          , l = o < 0 ? null : is(i.slice(o + 1));
        if (a in t) {
            let c = t[a];
            Rt(c) || (c = t[a] = [c]),
            c.push(l)
        } else
            t[a] = l
    }
    return t
}
function oc(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = Qp(n),
        r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (Rt(r) ? r.map(i => i && Vo(i)) : [r && Vo(r)]).forEach(i => {
            i !== void 0 && (t += (t.length ? "&" : "") + n,
            i != null && (t += "=" + i))
        }
        )
    }
    return t
}
function Nv(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = Rt(r) ? r.map(s => s == null ? null : "" + s) : r == null ? r : "" + r)
    }
    return t
}
const Pv = Symbol("")
  , ac = Symbol("")
  , Ti = Symbol("")
  , Ma = Symbol("")
  , Bo = Symbol("");
function kr() {
    let e = [];
    function t(r) {
        return e.push(r),
        () => {
            const s = e.indexOf(r);
            s > -1 && e.splice(s, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}
function gn(e, t, n, r, s, i=o => o()) {
    const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
    return () => new Promise( (a, l) => {
        const c = d => {
            d === !1 ? l(dr(4, {
                from: n,
                to: t
            })) : d instanceof Error ? l(d) : gv(d) ? l(dr(2, {
                from: t,
                to: d
            })) : (o && r.enterCallbacks[s] === o && typeof d == "function" && o.push(d),
            a())
        }
          , u = i( () => e.call(r && r.instances[s], t, n, c));
        let f = Promise.resolve(u);
        e.length < 3 && (f = f.then(c)),
        f.catch(d => l(d))
    }
    )
}
function eo(e, t, n, r, s=i => i()) {
    const i = [];
    for (const o of e)
        for (const a in o.components) {
            let l = o.components[a];
            if (!(t !== "beforeRouteEnter" && !o.instances[a]))
                if (id(l)) {
                    const u = (l.__vccOpts || l)[t];
                    u && i.push(gn(u, n, r, o, a, s))
                } else {
                    let c = l();
                    i.push( () => c.then(u => {
                        if (!u)
                            throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);
                        const f = $p(u) ? u.default : u;
                        o.mods[a] = u,
                        o.components[a] = f;
                        const h = (f.__vccOpts || f)[t];
                        return h && gn(h, n, r, o, a, s)()
                    }
                    ))
                }
        }
    return i
}
function lc(e) {
    const t = lt(Ti)
      , n = lt(Ma)
      , r = M( () => {
        const l = Xt(e.to);
        return t.resolve(l)
    }
    )
      , s = M( () => {
        const {matched: l} = r.value
          , {length: c} = l
          , u = l[c - 1]
          , f = n.matched;
        if (!u || !f.length)
            return -1;
        const d = f.findIndex(fr.bind(null, u));
        if (d > -1)
            return d;
        const h = cc(l[c - 2]);
        return c > 1 && cc(u) === h && f[f.length - 1].path !== h ? f.findIndex(fr.bind(null, l[c - 2])) : d
    }
    )
      , i = M( () => s.value > -1 && Fv(n.params, r.value.params))
      , o = M( () => s.value > -1 && s.value === n.matched.length - 1 && fd(n.params, r.value.params));
    function a(l={}) {
        if (Mv(l)) {
            const c = t[Xt(e.replace) ? "replace" : "push"](Xt(e.to)).catch(Br);
            return e.viewTransition && typeof document < "u" && "startViewTransition"in document && document.startViewTransition( () => c),
            c
        }
        return Promise.resolve()
    }
    return {
        route: r,
        href: M( () => r.value.href),
        isActive: i,
        isExactActive: o,
        navigate: a
    }
}
function Lv(e) {
    return e.length === 1 ? e[0] : e
}
const Ov = Bn({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: lc,
    setup(e, {slots: t}) {
        const n = Vn(lc(e))
          , {options: r} = lt(Ti)
          , s = M( () => ({
            [uc(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [uc(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const i = t.default && Lv(t.default(n));
            return e.custom ? i : j("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value
            }, i)
        }
    }
})
  , Rv = Ov;
function Mv(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function Fv(e, t) {
    for (const n in t) {
        const r = t[n]
          , s = e[n];
        if (typeof r == "string") {
            if (r !== s)
                return !1
        } else if (!Rt(s) || s.length !== r.length || r.some( (i, o) => i !== s[o]))
            return !1
    }
    return !0
}
function cc(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const uc = (e, t, n) => e ?? t ?? n
  , Dv = Bn({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const r = lt(Bo)
          , s = M( () => e.route || r.value)
          , i = lt(ac, 0)
          , o = M( () => {
            let c = Xt(i);
            const {matched: u} = s.value;
            let f;
            for (; (f = u[c]) && !f.components; )
                c++;
            return c
        }
        )
          , a = M( () => s.value.matched[o.value]);
        Os(ac, M( () => o.value + 1)),
        Os(Pv, a),
        Os(Bo, s);
        const l = he();
        return de( () => [l.value, a.value, e.name], ([c,u,f], [d,h,p]) => {
            u && (u.instances[f] = c,
            h && h !== u && c && c === d && (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards),
            u.updateGuards.size || (u.updateGuards = h.updateGuards))),
            c && u && (!h || !fr(u, h) || !d) && (u.enterCallbacks[f] || []).forEach(E => E(c))
        }
        , {
            flush: "post"
        }),
        () => {
            const c = s.value
              , u = e.name
              , f = a.value
              , d = f && f.components[u];
            if (!d)
                return fc(n.default, {
                    Component: d,
                    route: c
                });
            const h = f.props[u]
              , p = h ? h === !0 ? c.params : typeof h == "function" ? h(c) : h : null
              , I = j(d, we({}, p, t, {
                onVnodeUnmounted: b => {
                    b.component.isUnmounted && (f.instances[u] = null)
                }
                ,
                ref: l
            }));
            return fc(n.default, {
                Component: I,
                route: c
            }) || I
        }
    }
});
function fc(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const $v = Dv;
function jv(e) {
    const t = Sv(e.routes, e)
      , n = e.parseQuery || Iv
      , r = e.stringifyQuery || oc
      , s = e.history
      , i = kr()
      , o = kr()
      , a = kr()
      , l = Ct(on);
    let c = on;
    er && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const u = Ji.bind(null, F => "" + F)
      , f = Ji.bind(null, Yp)
      , d = Ji.bind(null, is);
    function h(F, Y) {
        let X, te;
        return hd(F) ? (X = t.getRecordMatcher(F),
        te = Y) : te = F,
        t.addRoute(te, X)
    }
    function p(F) {
        const Y = t.getRecordMatcher(F);
        Y && t.removeRoute(Y)
    }
    function E() {
        return t.getRoutes().map(F => F.record)
    }
    function I(F) {
        return !!t.getRecordMatcher(F)
    }
    function b(F, Y) {
        if (Y = we({}, Y || l.value),
        typeof F == "string") {
            const P = Zi(n, F, Y.path)
              , V = t.resolve({
                path: P.path
            }, Y)
              , U = s.createHref(P.fullPath);
            return we(P, V, {
                params: d(V.params),
                hash: is(P.hash),
                redirectedFrom: void 0,
                href: U
            })
        }
        let X;
        if (F.path != null)
            X = we({}, F, {
                path: Zi(n, F.path, Y.path).path
            });
        else {
            const P = we({}, F.params);
            for (const V in P)
                P[V] == null && delete P[V];
            X = we({}, F, {
                params: f(P)
            }),
            Y.params = f(Y.params)
        }
        const te = t.resolve(X, Y)
          , ye = F.hash || "";
        te.params = u(d(te.params));
        const _ = ev(r, we({}, F, {
            hash: Gp(ye),
            path: te.path
        }))
          , w = s.createHref(_);
        return we({
            fullPath: _,
            hash: ye,
            query: r === oc ? Nv(F.query) : F.query || {}
        }, te, {
            redirectedFrom: void 0,
            href: w
        })
    }
    function m(F) {
        return typeof F == "string" ? Zi(n, F, l.value.path) : we({}, F)
    }
    function C(F, Y) {
        if (c !== F)
            return dr(8, {
                from: Y,
                to: F
            })
    }
    function y(F) {
        return N(F)
    }
    function x(F) {
        return y(we(m(F), {
            replace: !0
        }))
    }
    function L(F) {
        const Y = F.matched[F.matched.length - 1];
        if (Y && Y.redirect) {
            const {redirect: X} = Y;
            let te = typeof X == "function" ? X(F) : X;
            return typeof te == "string" && (te = te.includes("?") || te.includes("#") ? te = m(te) : {
                path: te
            },
            te.params = {}),
            we({
                query: F.query,
                hash: F.hash,
                params: te.path != null ? {} : F.params
            }, te)
        }
    }
    function N(F, Y) {
        const X = c = b(F)
          , te = l.value
          , ye = F.state
          , _ = F.force
          , w = F.replace === !0
          , P = L(X);
        if (P)
            return N(we(m(P), {
                state: typeof P == "object" ? we({}, ye, P.state) : ye,
                force: _,
                replace: w
            }), Y || X);
        const V = X;
        V.redirectedFrom = Y;
        let U;
        return !_ && tv(r, te, X) && (U = dr(16, {
            to: V,
            from: te
        }),
        fe(te, te, !0, !1)),
        (U ? Promise.resolve(U) : O(V, te)).catch(B => Bt(B) ? Bt(B, 2) ? B : ce(B) : K(B, V, te)).then(B => {
            if (B) {
                if (Bt(B, 2))
                    return N(we({
                        replace: w
                    }, m(B.to), {
                        state: typeof B.to == "object" ? we({}, ye, B.to.state) : ye,
                        force: _
                    }), Y || V)
            } else
                B = S(V, te, !0, w, ye);
            return q(V, te, B),
            B
        }
        )
    }
    function W(F, Y) {
        const X = C(F, Y);
        return X ? Promise.reject(X) : Promise.resolve()
    }
    function k(F) {
        const Y = Ne.values().next().value;
        return Y && typeof Y.runWithContext == "function" ? Y.runWithContext(F) : F()
    }
    function O(F, Y) {
        let X;
        const [te,ye,_] = qv(F, Y);
        X = eo(te.reverse(), "beforeRouteLeave", F, Y);
        for (const P of te)
            P.leaveGuards.forEach(V => {
                X.push(gn(V, F, Y))
            }
            );
        const w = W.bind(null, F, Y);
        return X.push(w),
        ne(X).then( () => {
            X = [];
            for (const P of i.list())
                X.push(gn(P, F, Y));
            return X.push(w),
            ne(X)
        }
        ).then( () => {
            X = eo(ye, "beforeRouteUpdate", F, Y);
            for (const P of ye)
                P.updateGuards.forEach(V => {
                    X.push(gn(V, F, Y))
                }
                );
            return X.push(w),
            ne(X)
        }
        ).then( () => {
            X = [];
            for (const P of _)
                if (P.beforeEnter)
                    if (Rt(P.beforeEnter))
                        for (const V of P.beforeEnter)
                            X.push(gn(V, F, Y));
                    else
                        X.push(gn(P.beforeEnter, F, Y));
            return X.push(w),
            ne(X)
        }
        ).then( () => (F.matched.forEach(P => P.enterCallbacks = {}),
        X = eo(_, "beforeRouteEnter", F, Y, k),
        X.push(w),
        ne(X))).then( () => {
            X = [];
            for (const P of o.list())
                X.push(gn(P, F, Y));
            return X.push(w),
            ne(X)
        }
        ).catch(P => Bt(P, 8) ? P : Promise.reject(P))
    }
    function q(F, Y, X) {
        a.list().forEach(te => k( () => te(F, Y, X)))
    }
    function S(F, Y, X, te, ye) {
        const _ = C(F, Y);
        if (_)
            return _;
        const w = Y === on
          , P = er ? history.state : {};
        X && (te || w ? s.replace(F.fullPath, we({
            scroll: w && P && P.scroll
        }, ye)) : s.push(F.fullPath, ye)),
        l.value = F,
        fe(F, Y, X, w),
        ce()
    }
    let G;
    function D() {
        G || (G = s.listen( (F, Y, X) => {
            if (!Re.listening)
                return;
            const te = b(F)
              , ye = L(te);
            if (ye) {
                N(we(ye, {
                    replace: !0,
                    force: !0
                }), te).catch(Br);
                return
            }
            c = te;
            const _ = l.value;
            er && cv(Yl(_.fullPath, X.delta), xi()),
            O(te, _).catch(w => Bt(w, 12) ? w : Bt(w, 2) ? (N(we(m(w.to), {
                force: !0
            }), te).then(P => {
                Bt(P, 20) && !X.delta && X.type === os.pop && s.go(-1, !1)
            }
            ).catch(Br),
            Promise.reject()) : (X.delta && s.go(-X.delta, !1),
            K(w, te, _))).then(w => {
                w = w || S(te, _, !1),
                w && (X.delta && !Bt(w, 8) ? s.go(-X.delta, !1) : X.type === os.pop && Bt(w, 20) && s.go(-1, !1)),
                q(te, _, w)
            }
            ).catch(Br)
        }
        ))
    }
    let ee = kr(), J = kr(), Q;
    function K(F, Y, X) {
        ce(F);
        const te = J.list();
        return te.length ? te.forEach(ye => ye(F, Y, X)) : console.error(F),
        Promise.reject(F)
    }
    function ie() {
        return Q && l.value !== on ? Promise.resolve() : new Promise( (F, Y) => {
            ee.add([F, Y])
        }
        )
    }
    function ce(F) {
        return Q || (Q = !F,
        D(),
        ee.list().forEach( ([Y,X]) => F ? X(F) : Y()),
        ee.reset()),
        F
    }
    function fe(F, Y, X, te) {
        const {scrollBehavior: ye} = e;
        if (!er || !ye)
            return Promise.resolve();
        const _ = !X && uv(Yl(F.fullPath, 0)) || (te || !X) && history.state && history.state.scroll || null;
        return at().then( () => ye(F, Y, _)).then(w => w && lv(w)).catch(w => K(w, F, Y))
    }
    const z = F => s.go(F);
    let ge;
    const Ne = new Set
      , Re = {
        currentRoute: l,
        listening: !0,
        addRoute: h,
        removeRoute: p,
        clearRoutes: t.clearRoutes,
        hasRoute: I,
        getRoutes: E,
        resolve: b,
        options: e,
        push: y,
        replace: x,
        go: z,
        back: () => z(-1),
        forward: () => z(1),
        beforeEach: i.add,
        beforeResolve: o.add,
        afterEach: a.add,
        onError: J.add,
        isReady: ie,
        install(F) {
            const Y = this;
            F.component("RouterLink", Rv),
            F.component("RouterView", $v),
            F.config.globalProperties.$router = Y,
            Object.defineProperty(F.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => Xt(l)
            }),
            er && !ge && l.value === on && (ge = !0,
            y(s.location).catch(ye => {}
            ));
            const X = {};
            for (const ye in on)
                Object.defineProperty(X, ye, {
                    get: () => l.value[ye],
                    enumerable: !0
                });
            F.provide(Ti, Y),
            F.provide(Ma, Qu(X)),
            F.provide(Bo, l);
            const te = F.unmount;
            Ne.add(F),
            F.unmount = function() {
                Ne.delete(F),
                Ne.size < 1 && (c = on,
                G && G(),
                G = null,
                l.value = on,
                ge = !1,
                Q = !1),
                te()
            }
        }
    };
    function ne(F) {
        return F.reduce( (Y, X) => Y.then( () => k(X)), Promise.resolve())
    }
    return Re
}
function qv(e, t) {
    const n = []
      , r = []
      , s = []
      , i = Math.max(t.matched.length, e.matched.length);
    for (let o = 0; o < i; o++) {
        const a = t.matched[o];
        a && (e.matched.find(c => fr(c, a)) ? r.push(a) : n.push(a));
        const l = e.matched[o];
        l && (t.matched.find(c => fr(c, l)) || s.push(l))
    }
    return [n, r, s]
}
function JC() {
    return lt(Ti)
}
function Vv(e) {
    return lt(Ma)
}
/*!
  * shared v11.1.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const oi = typeof window < "u"
  , En = (e, t=!1) => t ? Symbol.for(e) : Symbol(e)
  , Wv = (e, t, n) => Bv({
    l: e,
    k: t,
    s: n
})
  , Bv = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027")
  , De = e => typeof e == "number" && isFinite(e)
  , Uv = e => Fa(e) === "[object Date]"
  , ai = e => Fa(e) === "[object RegExp]"
  , Ai = e => ve(e) && Object.keys(e).length === 0
  , Xe = Object.assign
  , Hv = Object.create
  , xe = (e=null) => Hv(e);
function dc(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const zv = Object.prototype.hasOwnProperty;
function It(e, t) {
    return zv.call(e, t)
}
const We = Array.isArray
  , Pe = e => typeof e == "function"
  , se = e => typeof e == "string"
  , Le = e => typeof e == "boolean"
  , _e = e => e !== null && typeof e == "object"
  , Kv = e => _e(e) && Pe(e.then) && Pe(e.catch)
  , vd = Object.prototype.toString
  , Fa = e => vd.call(e)
  , ve = e => Fa(e) === "[object Object]"
  , Gv = e => e == null ? "" : We(e) || ve(e) && e.toString === vd ? JSON.stringify(e, null, 2) : String(e);
function Da(e, t="") {
    return e.reduce( (n, r, s) => s === 0 ? n + r : n + t + r, "")
}
function Qv(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e),
    t && console.warn(t.stack))
}
const Cs = e => !_e(e) || We(e);
function Ds(e, t) {
    if (Cs(e) || Cs(t))
        throw new Error("Invalid value");
    const n = [{
        src: e,
        des: t
    }];
    for (; n.length; ) {
        const {src: r, des: s} = n.pop();
        Object.keys(r).forEach(i => {
            i !== "__proto__" && (_e(r[i]) && !_e(s[i]) && (s[i] = Array.isArray(r[i]) ? [] : xe()),
            Cs(s[i]) || Cs(r[i]) ? s[i] = r[i] : n.push({
                src: r[i],
                des: s[i]
            }))
        }
        )
    }
}
/*!
  * message-compiler v11.1.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Xv(e, t, n) {
    return {
        line: e,
        column: t,
        offset: n
    }
}
function Uo(e, t, n) {
    return {
        start: e,
        end: t
    }
}
const Ee = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14
}
  , Yv = 17;
function Ii(e, t, n={}) {
    const {domain: r, messages: s, args: i} = n
      , o = e
      , a = new SyntaxError(String(o));
    return a.code = e,
    t && (a.location = t),
    a.domain = r,
    a
}
function Jv(e) {
    throw e
}
const Ut = " "
  , Zv = "\r"
  , st = `
`
  , ey = "\u2028"
  , ty = "\u2029";
function ny(e) {
    const t = e;
    let n = 0
      , r = 1
      , s = 1
      , i = 0;
    const o = N => t[N] === Zv && t[N + 1] === st
      , a = N => t[N] === st
      , l = N => t[N] === ty
      , c = N => t[N] === ey
      , u = N => o(N) || a(N) || l(N) || c(N)
      , f = () => n
      , d = () => r
      , h = () => s
      , p = () => i
      , E = N => o(N) || l(N) || c(N) ? st : t[N]
      , I = () => E(n)
      , b = () => E(n + i);
    function m() {
        return i = 0,
        u(n) && (r++,
        s = 0),
        o(n) && n++,
        n++,
        s++,
        t[n]
    }
    function C() {
        return o(n + i) && i++,
        i++,
        t[n + i]
    }
    function y() {
        n = 0,
        r = 1,
        s = 1,
        i = 0
    }
    function x(N=0) {
        i = N
    }
    function L() {
        const N = n + i;
        for (; N !== n; )
            m();
        i = 0
    }
    return {
        index: f,
        line: d,
        column: h,
        peekOffset: p,
        charAt: E,
        currentChar: I,
        currentPeek: b,
        next: m,
        peek: C,
        reset: y,
        resetPeek: x,
        skipToPeek: L
    }
}
const an = void 0
  , ry = "."
  , hc = "'"
  , sy = "tokenizer";
function iy(e, t={}) {
    const n = t.location !== !1
      , r = ny(e)
      , s = () => r.index()
      , i = () => Xv(r.line(), r.column(), r.index())
      , o = i()
      , a = s()
      , l = {
        currentType: 13,
        offset: a,
        startLoc: o,
        endLoc: o,
        lastType: 13,
        lastOffset: a,
        lastStartLoc: o,
        lastEndLoc: o,
        braceNest: 0,
        inLinked: !1,
        text: ""
    }
      , c = () => l
      , {onError: u} = t;
    function f(g, v, A, ...R) {
        const Z = c();
        if (v.column += A,
        v.offset += A,
        u) {
            const H = n ? Uo(Z.startLoc, v) : null
              , T = Ii(g, H, {
                domain: sy,
                args: R
            });
            u(T)
        }
    }
    function d(g, v, A) {
        g.endLoc = i(),
        g.currentType = v;
        const R = {
            type: v
        };
        return n && (R.loc = Uo(g.startLoc, g.endLoc)),
        A != null && (R.value = A),
        R
    }
    const h = g => d(g, 13);
    function p(g, v) {
        return g.currentChar() === v ? (g.next(),
        v) : (f(Ee.EXPECTED_TOKEN, i(), 0, v),
        "")
    }
    function E(g) {
        let v = "";
        for (; g.currentPeek() === Ut || g.currentPeek() === st; )
            v += g.currentPeek(),
            g.peek();
        return v
    }
    function I(g) {
        const v = E(g);
        return g.skipToPeek(),
        v
    }
    function b(g) {
        if (g === an)
            return !1;
        const v = g.charCodeAt(0);
        return v >= 97 && v <= 122 || v >= 65 && v <= 90 || v === 95
    }
    function m(g) {
        if (g === an)
            return !1;
        const v = g.charCodeAt(0);
        return v >= 48 && v <= 57
    }
    function C(g, v) {
        const {currentType: A} = v;
        if (A !== 2)
            return !1;
        E(g);
        const R = b(g.currentPeek());
        return g.resetPeek(),
        R
    }
    function y(g, v) {
        const {currentType: A} = v;
        if (A !== 2)
            return !1;
        E(g);
        const R = g.currentPeek() === "-" ? g.peek() : g.currentPeek()
          , Z = m(R);
        return g.resetPeek(),
        Z
    }
    function x(g, v) {
        const {currentType: A} = v;
        if (A !== 2)
            return !1;
        E(g);
        const R = g.currentPeek() === hc;
        return g.resetPeek(),
        R
    }
    function L(g, v) {
        const {currentType: A} = v;
        if (A !== 7)
            return !1;
        E(g);
        const R = g.currentPeek() === ".";
        return g.resetPeek(),
        R
    }
    function N(g, v) {
        const {currentType: A} = v;
        if (A !== 8)
            return !1;
        E(g);
        const R = b(g.currentPeek());
        return g.resetPeek(),
        R
    }
    function W(g, v) {
        const {currentType: A} = v;
        if (!(A === 7 || A === 11))
            return !1;
        E(g);
        const R = g.currentPeek() === ":";
        return g.resetPeek(),
        R
    }
    function k(g, v) {
        const {currentType: A} = v;
        if (A !== 9)
            return !1;
        const R = () => {
            const H = g.currentPeek();
            return H === "{" ? b(g.peek()) : H === "@" || H === "|" || H === ":" || H === "." || H === Ut || !H ? !1 : H === st ? (g.peek(),
            R()) : q(g, !1)
        }
          , Z = R();
        return g.resetPeek(),
        Z
    }
    function O(g) {
        E(g);
        const v = g.currentPeek() === "|";
        return g.resetPeek(),
        v
    }
    function q(g, v=!0) {
        const A = (Z=!1, H="") => {
            const T = g.currentPeek();
            return T === "{" || T === "@" || !T ? Z : T === "|" ? !(H === Ut || H === st) : T === Ut ? (g.peek(),
            A(!0, Ut)) : T === st ? (g.peek(),
            A(!0, st)) : !0
        }
          , R = A();
        return v && g.resetPeek(),
        R
    }
    function S(g, v) {
        const A = g.currentChar();
        return A === an ? an : v(A) ? (g.next(),
        A) : null
    }
    function G(g) {
        const v = g.charCodeAt(0);
        return v >= 97 && v <= 122 || v >= 65 && v <= 90 || v >= 48 && v <= 57 || v === 95 || v === 36
    }
    function D(g) {
        return S(g, G)
    }
    function ee(g) {
        const v = g.charCodeAt(0);
        return v >= 97 && v <= 122 || v >= 65 && v <= 90 || v >= 48 && v <= 57 || v === 95 || v === 36 || v === 45
    }
    function J(g) {
        return S(g, ee)
    }
    function Q(g) {
        const v = g.charCodeAt(0);
        return v >= 48 && v <= 57
    }
    function K(g) {
        return S(g, Q)
    }
    function ie(g) {
        const v = g.charCodeAt(0);
        return v >= 48 && v <= 57 || v >= 65 && v <= 70 || v >= 97 && v <= 102
    }
    function ce(g) {
        return S(g, ie)
    }
    function fe(g) {
        let v = ""
          , A = "";
        for (; v = K(g); )
            A += v;
        return A
    }
    function z(g) {
        let v = "";
        for (; ; ) {
            const A = g.currentChar();
            if (A === "{" || A === "}" || A === "@" || A === "|" || !A)
                break;
            if (A === Ut || A === st)
                if (q(g))
                    v += A,
                    g.next();
                else {
                    if (O(g))
                        break;
                    v += A,
                    g.next()
                }
            else
                v += A,
                g.next()
        }
        return v
    }
    function ge(g) {
        I(g);
        let v = ""
          , A = "";
        for (; v = J(g); )
            A += v;
        return g.currentChar() === an && f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0),
        A
    }
    function Ne(g) {
        I(g);
        let v = "";
        return g.currentChar() === "-" ? (g.next(),
        v += `-${fe(g)}`) : v += fe(g),
        g.currentChar() === an && f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0),
        v
    }
    function Re(g) {
        return g !== hc && g !== st
    }
    function ne(g) {
        I(g),
        p(g, "'");
        let v = ""
          , A = "";
        for (; v = S(g, Re); )
            v === "\\" ? A += F(g) : A += v;
        const R = g.currentChar();
        return R === st || R === an ? (f(Ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0),
        R === st && (g.next(),
        p(g, "'")),
        A) : (p(g, "'"),
        A)
    }
    function F(g) {
        const v = g.currentChar();
        switch (v) {
        case "\\":
        case "'":
            return g.next(),
            `\\${v}`;
        case "u":
            return Y(g, v, 4);
        case "U":
            return Y(g, v, 6);
        default:
            return f(Ee.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, v),
            ""
        }
    }
    function Y(g, v, A) {
        p(g, v);
        let R = "";
        for (let Z = 0; Z < A; Z++) {
            const H = ce(g);
            if (!H) {
                f(Ee.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, `\\${v}${R}${g.currentChar()}`);
                break
            }
            R += H
        }
        return `\\${v}${R}`
    }
    function X(g) {
        return g !== "{" && g !== "}" && g !== Ut && g !== st
    }
    function te(g) {
        I(g);
        let v = ""
          , A = "";
        for (; v = S(g, X); )
            A += v;
        return A
    }
    function ye(g) {
        let v = ""
          , A = "";
        for (; v = D(g); )
            A += v;
        return A
    }
    function _(g) {
        const v = A => {
            const R = g.currentChar();
            return R === "{" || R === "@" || R === "|" || R === "(" || R === ")" || !R || R === Ut ? A : (A += R,
            g.next(),
            v(A))
        }
        ;
        return v("")
    }
    function w(g) {
        I(g);
        const v = p(g, "|");
        return I(g),
        v
    }
    function P(g, v) {
        let A = null;
        switch (g.currentChar()) {
        case "{":
            return v.braceNest >= 1 && f(Ee.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0),
            g.next(),
            A = d(v, 2, "{"),
            I(g),
            v.braceNest++,
            A;
        case "}":
            return v.braceNest > 0 && v.currentType === 2 && f(Ee.EMPTY_PLACEHOLDER, i(), 0),
            g.next(),
            A = d(v, 3, "}"),
            v.braceNest--,
            v.braceNest > 0 && I(g),
            v.inLinked && v.braceNest === 0 && (v.inLinked = !1),
            A;
        case "@":
            return v.braceNest > 0 && f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0),
            A = V(g, v) || h(v),
            v.braceNest = 0,
            A;
        default:
            {
                let Z = !0
                  , H = !0
                  , T = !0;
                if (O(g))
                    return v.braceNest > 0 && f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0),
                    A = d(v, 1, w(g)),
                    v.braceNest = 0,
                    v.inLinked = !1,
                    A;
                if (v.braceNest > 0 && (v.currentType === 4 || v.currentType === 5 || v.currentType === 6))
                    return f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0),
                    v.braceNest = 0,
                    U(g, v);
                if (Z = C(g, v))
                    return A = d(v, 4, ge(g)),
                    I(g),
                    A;
                if (H = y(g, v))
                    return A = d(v, 5, Ne(g)),
                    I(g),
                    A;
                if (T = x(g, v))
                    return A = d(v, 6, ne(g)),
                    I(g),
                    A;
                if (!Z && !H && !T)
                    return A = d(v, 12, te(g)),
                    f(Ee.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, A.value),
                    I(g),
                    A;
                break
            }
        }
        return A
    }
    function V(g, v) {
        const {currentType: A} = v;
        let R = null;
        const Z = g.currentChar();
        switch ((A === 7 || A === 8 || A === 11 || A === 9) && (Z === st || Z === Ut) && f(Ee.INVALID_LINKED_FORMAT, i(), 0),
        Z) {
        case "@":
            return g.next(),
            R = d(v, 7, "@"),
            v.inLinked = !0,
            R;
        case ".":
            return I(g),
            g.next(),
            d(v, 8, ".");
        case ":":
            return I(g),
            g.next(),
            d(v, 9, ":");
        default:
            return O(g) ? (R = d(v, 1, w(g)),
            v.braceNest = 0,
            v.inLinked = !1,
            R) : L(g, v) || W(g, v) ? (I(g),
            V(g, v)) : N(g, v) ? (I(g),
            d(v, 11, ye(g))) : k(g, v) ? (I(g),
            Z === "{" ? P(g, v) || R : d(v, 10, _(g))) : (A === 7 && f(Ee.INVALID_LINKED_FORMAT, i(), 0),
            v.braceNest = 0,
            v.inLinked = !1,
            U(g, v))
        }
    }
    function U(g, v) {
        let A = {
            type: 13
        };
        if (v.braceNest > 0)
            return P(g, v) || h(v);
        if (v.inLinked)
            return V(g, v) || h(v);
        switch (g.currentChar()) {
        case "{":
            return P(g, v) || h(v);
        case "}":
            return f(Ee.UNBALANCED_CLOSING_BRACE, i(), 0),
            g.next(),
            d(v, 3, "}");
        case "@":
            return V(g, v) || h(v);
        default:
            {
                if (O(g))
                    return A = d(v, 1, w(g)),
                    v.braceNest = 0,
                    v.inLinked = !1,
                    A;
                if (q(g))
                    return d(v, 0, z(g));
                break
            }
        }
        return A
    }
    function B() {
        const {currentType: g, offset: v, startLoc: A, endLoc: R} = l;
        return l.lastType = g,
        l.lastOffset = v,
        l.lastStartLoc = A,
        l.lastEndLoc = R,
        l.offset = s(),
        l.startLoc = i(),
        r.currentChar() === an ? d(l, 13) : U(r, l)
    }
    return {
        nextToken: B,
        currentOffset: s,
        currentPosition: i,
        context: c
    }
}
const oy = "parser"
  , ay = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function ly(e, t, n) {
    switch (e) {
    case "\\\\":
        return "\\";
    case "\\'":
        return "'";
    default:
        {
            const r = parseInt(t || n, 16);
            return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�"
        }
    }
}
function cy(e={}) {
    const t = e.location !== !1
      , {onError: n} = e;
    function r(b, m, C, y, ...x) {
        const L = b.currentPosition();
        if (L.offset += y,
        L.column += y,
        n) {
            const N = t ? Uo(C, L) : null
              , W = Ii(m, N, {
                domain: oy,
                args: x
            });
            n(W)
        }
    }
    function s(b, m, C) {
        const y = {
            type: b
        };
        return t && (y.start = m,
        y.end = m,
        y.loc = {
            start: C,
            end: C
        }),
        y
    }
    function i(b, m, C, y) {
        t && (b.end = m,
        b.loc && (b.loc.end = C))
    }
    function o(b, m) {
        const C = b.context()
          , y = s(3, C.offset, C.startLoc);
        return y.value = m,
        i(y, b.currentOffset(), b.currentPosition()),
        y
    }
    function a(b, m) {
        const C = b.context()
          , {lastOffset: y, lastStartLoc: x} = C
          , L = s(5, y, x);
        return L.index = parseInt(m, 10),
        b.nextToken(),
        i(L, b.currentOffset(), b.currentPosition()),
        L
    }
    function l(b, m) {
        const C = b.context()
          , {lastOffset: y, lastStartLoc: x} = C
          , L = s(4, y, x);
        return L.key = m,
        b.nextToken(),
        i(L, b.currentOffset(), b.currentPosition()),
        L
    }
    function c(b, m) {
        const C = b.context()
          , {lastOffset: y, lastStartLoc: x} = C
          , L = s(9, y, x);
        return L.value = m.replace(ay, ly),
        b.nextToken(),
        i(L, b.currentOffset(), b.currentPosition()),
        L
    }
    function u(b) {
        const m = b.nextToken()
          , C = b.context()
          , {lastOffset: y, lastStartLoc: x} = C
          , L = s(8, y, x);
        return m.type !== 11 ? (r(b, Ee.UNEXPECTED_EMPTY_LINKED_MODIFIER, C.lastStartLoc, 0),
        L.value = "",
        i(L, y, x),
        {
            nextConsumeToken: m,
            node: L
        }) : (m.value == null && r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Dt(m)),
        L.value = m.value || "",
        i(L, b.currentOffset(), b.currentPosition()),
        {
            node: L
        })
    }
    function f(b, m) {
        const C = b.context()
          , y = s(7, C.offset, C.startLoc);
        return y.value = m,
        i(y, b.currentOffset(), b.currentPosition()),
        y
    }
    function d(b) {
        const m = b.context()
          , C = s(6, m.offset, m.startLoc);
        let y = b.nextToken();
        if (y.type === 8) {
            const x = u(b);
            C.modifier = x.node,
            y = x.nextConsumeToken || b.nextToken()
        }
        switch (y.type !== 9 && r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Dt(y)),
        y = b.nextToken(),
        y.type === 2 && (y = b.nextToken()),
        y.type) {
        case 10:
            y.value == null && r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Dt(y)),
            C.key = f(b, y.value || "");
            break;
        case 4:
            y.value == null && r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Dt(y)),
            C.key = l(b, y.value || "");
            break;
        case 5:
            y.value == null && r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Dt(y)),
            C.key = a(b, y.value || "");
            break;
        case 6:
            y.value == null && r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Dt(y)),
            C.key = c(b, y.value || "");
            break;
        default:
            {
                r(b, Ee.UNEXPECTED_EMPTY_LINKED_KEY, m.lastStartLoc, 0);
                const x = b.context()
                  , L = s(7, x.offset, x.startLoc);
                return L.value = "",
                i(L, x.offset, x.startLoc),
                C.key = L,
                i(C, x.offset, x.startLoc),
                {
                    nextConsumeToken: y,
                    node: C
                }
            }
        }
        return i(C, b.currentOffset(), b.currentPosition()),
        {
            node: C
        }
    }
    function h(b) {
        const m = b.context()
          , C = m.currentType === 1 ? b.currentOffset() : m.offset
          , y = m.currentType === 1 ? m.endLoc : m.startLoc
          , x = s(2, C, y);
        x.items = [];
        let L = null;
        do {
            const k = L || b.nextToken();
            switch (L = null,
            k.type) {
            case 0:
                k.value == null && r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Dt(k)),
                x.items.push(o(b, k.value || ""));
                break;
            case 5:
                k.value == null && r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Dt(k)),
                x.items.push(a(b, k.value || ""));
                break;
            case 4:
                k.value == null && r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Dt(k)),
                x.items.push(l(b, k.value || ""));
                break;
            case 6:
                k.value == null && r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Dt(k)),
                x.items.push(c(b, k.value || ""));
                break;
            case 7:
                {
                    const O = d(b);
                    x.items.push(O.node),
                    L = O.nextConsumeToken || null;
                    break
                }
            }
        } while (m.currentType !== 13 && m.currentType !== 1);
        const N = m.currentType === 1 ? m.lastOffset : b.currentOffset()
          , W = m.currentType === 1 ? m.lastEndLoc : b.currentPosition();
        return i(x, N, W),
        x
    }
    function p(b, m, C, y) {
        const x = b.context();
        let L = y.items.length === 0;
        const N = s(1, m, C);
        N.cases = [],
        N.cases.push(y);
        do {
            const W = h(b);
            L || (L = W.items.length === 0),
            N.cases.push(W)
        } while (x.currentType !== 13);
        return L && r(b, Ee.MUST_HAVE_MESSAGES_IN_PLURAL, C, 0),
        i(N, b.currentOffset(), b.currentPosition()),
        N
    }
    function E(b) {
        const m = b.context()
          , {offset: C, startLoc: y} = m
          , x = h(b);
        return m.currentType === 13 ? x : p(b, C, y, x)
    }
    function I(b) {
        const m = iy(b, Xe({}, e))
          , C = m.context()
          , y = s(0, C.offset, C.startLoc);
        return t && y.loc && (y.loc.source = b),
        y.body = E(m),
        e.onCacheKey && (y.cacheKey = e.onCacheKey(b)),
        C.currentType !== 13 && r(m, Ee.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, b[C.offset] || ""),
        i(y, m.currentOffset(), m.currentPosition()),
        y
    }
    return {
        parse: I
    }
}
function Dt(e) {
    if (e.type === 13)
        return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "…" : t
}
function uy(e, t={}) {
    const n = {
        ast: e,
        helpers: new Set
    };
    return {
        context: () => n,
        helper: i => (n.helpers.add(i),
        i)
    }
}
function mc(e, t) {
    for (let n = 0; n < e.length; n++)
        $a(e[n], t)
}
function $a(e, t) {
    switch (e.type) {
    case 1:
        mc(e.cases, t),
        t.helper("plural");
        break;
    case 2:
        mc(e.items, t);
        break;
    case 6:
        {
            $a(e.key, t),
            t.helper("linked"),
            t.helper("type");
            break
        }
    case 5:
        t.helper("interpolate"),
        t.helper("list");
        break;
    case 4:
        t.helper("interpolate"),
        t.helper("named");
        break
    }
}
function fy(e, t={}) {
    const n = uy(e);
    n.helper("normalize"),
    e.body && $a(e.body, n);
    const r = n.context();
    e.helpers = Array.from(r.helpers)
}
function dy(e) {
    const t = e.body;
    return t.type === 2 ? gc(t) : t.cases.forEach(n => gc(n)),
    e
}
function gc(e) {
    if (e.items.length === 1) {
        const t = e.items[0];
        (t.type === 3 || t.type === 9) && (e.static = t.value,
        delete t.value)
    } else {
        const t = [];
        for (let n = 0; n < e.items.length; n++) {
            const r = e.items[n];
            if (!(r.type === 3 || r.type === 9) || r.value == null)
                break;
            t.push(r.value)
        }
        if (t.length === e.items.length) {
            e.static = Da(t);
            for (let n = 0; n < e.items.length; n++) {
                const r = e.items[n];
                (r.type === 3 || r.type === 9) && delete r.value
            }
        }
    }
}
function tr(e) {
    switch (e.t = e.type,
    e.type) {
    case 0:
        {
            const t = e;
            tr(t.body),
            t.b = t.body,
            delete t.body;
            break
        }
    case 1:
        {
            const t = e
              , n = t.cases;
            for (let r = 0; r < n.length; r++)
                tr(n[r]);
            t.c = n,
            delete t.cases;
            break
        }
    case 2:
        {
            const t = e
              , n = t.items;
            for (let r = 0; r < n.length; r++)
                tr(n[r]);
            t.i = n,
            delete t.items,
            t.static && (t.s = t.static,
            delete t.static);
            break
        }
    case 3:
    case 9:
    case 8:
    case 7:
        {
            const t = e;
            t.value && (t.v = t.value,
            delete t.value);
            break
        }
    case 6:
        {
            const t = e;
            tr(t.key),
            t.k = t.key,
            delete t.key,
            t.modifier && (tr(t.modifier),
            t.m = t.modifier,
            delete t.modifier);
            break
        }
    case 5:
        {
            const t = e;
            t.i = t.index,
            delete t.index;
            break
        }
    case 4:
        {
            const t = e;
            t.k = t.key,
            delete t.key;
            break
        }
    }
    delete e.type
}
function hy(e, t) {
    const {filename: n, breakLineCode: r, needIndent: s} = t
      , i = t.location !== !1
      , o = {
        filename: n,
        code: "",
        column: 1,
        line: 1,
        offset: 0,
        map: void 0,
        breakLineCode: r,
        needIndent: s,
        indentLevel: 0
    };
    i && e.loc && (o.source = e.loc.source);
    const a = () => o;
    function l(E, I) {
        o.code += E
    }
    function c(E, I=!0) {
        const b = I ? r : "";
        l(s ? b + "  ".repeat(E) : b)
    }
    function u(E=!0) {
        const I = ++o.indentLevel;
        E && c(I)
    }
    function f(E=!0) {
        const I = --o.indentLevel;
        E && c(I)
    }
    function d() {
        c(o.indentLevel)
    }
    return {
        context: a,
        push: l,
        indent: u,
        deindent: f,
        newline: d,
        helper: E => `_${E}`,
        needIndent: () => o.needIndent
    }
}
function my(e, t) {
    const {helper: n} = e;
    e.push(`${n("linked")}(`),
    hr(e, t.key),
    t.modifier ? (e.push(", "),
    hr(e, t.modifier),
    e.push(", _type")) : e.push(", undefined, _type"),
    e.push(")")
}
function gy(e, t) {
    const {helper: n, needIndent: r} = e;
    e.push(`${n("normalize")}([`),
    e.indent(r());
    const s = t.items.length;
    for (let i = 0; i < s && (hr(e, t.items[i]),
    i !== s - 1); i++)
        e.push(", ");
    e.deindent(r()),
    e.push("])")
}
function py(e, t) {
    const {helper: n, needIndent: r} = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`),
        e.indent(r());
        const s = t.cases.length;
        for (let i = 0; i < s && (hr(e, t.cases[i]),
        i !== s - 1); i++)
            e.push(", ");
        e.deindent(r()),
        e.push("])")
    }
}
function vy(e, t) {
    t.body ? hr(e, t.body) : e.push("null")
}
function hr(e, t) {
    const {helper: n} = e;
    switch (t.type) {
    case 0:
        vy(e, t);
        break;
    case 1:
        py(e, t);
        break;
    case 2:
        gy(e, t);
        break;
    case 6:
        my(e, t);
        break;
    case 8:
        e.push(JSON.stringify(t.value), t);
        break;
    case 7:
        e.push(JSON.stringify(t.value), t);
        break;
    case 5:
        e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
        break;
    case 4:
        e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
        break;
    case 9:
        e.push(JSON.stringify(t.value), t);
        break;
    case 3:
        e.push(JSON.stringify(t.value), t);
        break
    }
}
const yy = (e, t={}) => {
    const n = se(t.mode) ? t.mode : "normal"
      , r = se(t.filename) ? t.filename : "message.intl";
    t.sourceMap;
    const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`
      , i = t.needIndent ? t.needIndent : n !== "arrow"
      , o = e.helpers || []
      , a = hy(e, {
        filename: r,
        breakLineCode: s,
        needIndent: i
    });
    a.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    a.indent(i),
    o.length > 0 && (a.push(`const { ${Da(o.map(u => `${u}: _${u}`), ", ")} } = ctx`),
    a.newline()),
    a.push("return "),
    hr(a, e),
    a.deindent(i),
    a.push("}"),
    delete e.helpers;
    const {code: l, map: c} = a.context();
    return {
        ast: e,
        code: l,
        map: c ? c.toJSON() : void 0
    }
}
;
function by(e, t={}) {
    const n = Xe({}, t)
      , r = !!n.jit
      , s = !!n.minify
      , i = n.optimize == null ? !0 : n.optimize
      , a = cy(n).parse(e);
    return r ? (i && dy(a),
    s && tr(a),
    {
        ast: a,
        code: ""
    }) : (fy(a, n),
    yy(a, n))
}
/*!
  * core-base v11.1.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function to(e) {
    return n => _y(n, e)
}
function _y(e, t) {
    const n = Cy(t);
    if (n == null)
        throw as(0);
    if (ja(n) === 1) {
        const i = Sy(n);
        return e.plural(i.reduce( (o, a) => [...o, pc(e, a)], []))
    } else
        return pc(e, n)
}
const wy = ["b", "body"];
function Cy(e) {
    return Sn(e, wy)
}
const Ey = ["c", "cases"];
function Sy(e) {
    return Sn(e, Ey, [])
}
function pc(e, t) {
    const n = xy(t);
    if (n != null)
        return e.type === "text" ? n : e.normalize([n]);
    {
        const r = Ay(t).reduce( (s, i) => [...s, Ho(e, i)], []);
        return e.normalize(r)
    }
}
const ky = ["s", "static"];
function xy(e) {
    return Sn(e, ky)
}
const Ty = ["i", "items"];
function Ay(e) {
    return Sn(e, Ty, [])
}
function Ho(e, t) {
    const n = ja(t);
    switch (n) {
    case 3:
        return Es(t, n);
    case 9:
        return Es(t, n);
    case 4:
        {
            const r = t;
            if (It(r, "k") && r.k)
                return e.interpolate(e.named(r.k));
            if (It(r, "key") && r.key)
                return e.interpolate(e.named(r.key));
            throw as(n)
        }
    case 5:
        {
            const r = t;
            if (It(r, "i") && De(r.i))
                return e.interpolate(e.list(r.i));
            if (It(r, "index") && De(r.index))
                return e.interpolate(e.list(r.index));
            throw as(n)
        }
    case 6:
        {
            const r = t
              , s = Ly(r)
              , i = Ry(r);
            return e.linked(Ho(e, i), s ? Ho(e, s) : void 0, e.type)
        }
    case 7:
        return Es(t, n);
    case 8:
        return Es(t, n);
    default:
        throw new Error(`unhandled node on format message part: ${n}`)
    }
}
const Iy = ["t", "type"];
function ja(e) {
    return Sn(e, Iy)
}
const Ny = ["v", "value"];
function Es(e, t) {
    const n = Sn(e, Ny);
    if (n)
        return n;
    throw as(t)
}
const Py = ["m", "modifier"];
function Ly(e) {
    return Sn(e, Py)
}
const Oy = ["k", "key"];
function Ry(e) {
    const t = Sn(e, Oy);
    if (t)
        return t;
    throw as(6)
}
function Sn(e, t, n) {
    for (let r = 0; r < t.length; r++) {
        const s = t[r];
        if (It(e, s) && e[s] != null)
            return e[s]
    }
    return n
}
function as(e) {
    return new Error(`unhandled node type: ${e}`)
}
const My = e => e;
let Ss = xe();
function mr(e) {
    return _e(e) && ja(e) === 0 && (It(e, "b") || It(e, "body"))
}
function Fy(e, t={}) {
    let n = !1;
    const r = t.onError || Jv;
    return t.onError = s => {
        n = !0,
        r(s)
    }
    ,
    {
        ...by(e, t),
        detectError: n
    }
}
function Dy(e, t) {
    if (se(e)) {
        Le(t.warnHtmlMessage) && t.warnHtmlMessage;
        const r = (t.onCacheKey || My)(e)
          , s = Ss[r];
        if (s)
            return s;
        const {ast: i, detectError: o} = Fy(e, {
            ...t,
            location: !1,
            jit: !0
        })
          , a = to(i);
        return o ? a : Ss[r] = a
    } else {
        const n = e.cacheKey;
        if (n) {
            const r = Ss[n];
            return r || (Ss[n] = to(e))
        } else
            return to(e)
    }
}
const Gt = {
    INVALID_ARGUMENT: Yv,
    INVALID_DATE_ARGUMENT: 18,
    INVALID_ISO_DATE_ARGUMENT: 19,
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
    NOT_SUPPORT_LOCALE_TYPE: 23
}
  , $y = 24;
function Qt(e) {
    return Ii(e, null, void 0)
}
function qa(e, t) {
    return t.locale != null ? vc(t.locale) : vc(e.locale)
}
let no;
function vc(e) {
    if (se(e))
        return e;
    if (Pe(e)) {
        if (e.resolvedOnce && no != null)
            return no;
        if (e.constructor.name === "Function") {
            const t = e();
            if (Kv(t))
                throw Qt(Gt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
            return no = t
        } else
            throw Qt(Gt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
    } else
        throw Qt(Gt.NOT_SUPPORT_LOCALE_TYPE)
}
function jy(e, t, n) {
    return [...new Set([n, ...We(t) ? t : _e(t) ? Object.keys(t) : se(t) ? [t] : [n]])]
}
function yd(e, t, n) {
    const r = se(n) ? n : li
      , s = e;
    s.__localeChainCache || (s.__localeChainCache = new Map);
    let i = s.__localeChainCache.get(r);
    if (!i) {
        i = [];
        let o = [n];
        for (; We(o); )
            o = yc(i, o, t);
        const a = We(t) || !ve(t) ? t : t.default ? t.default : null;
        o = se(a) ? [a] : a,
        We(o) && yc(i, o, !1),
        s.__localeChainCache.set(r, i)
    }
    return i
}
function yc(e, t, n) {
    let r = !0;
    for (let s = 0; s < t.length && Le(r); s++) {
        const i = t[s];
        se(i) && (r = qy(e, t[s], n))
    }
    return r
}
function qy(e, t, n) {
    let r;
    const s = t.split("-");
    do {
        const i = s.join("-");
        r = Vy(e, i, n),
        s.splice(-1, 1)
    } while (s.length && r === !0);
    return r
}
function Vy(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0,
    t)) {
        r = t[t.length - 1] !== "!";
        const s = t.replace(/!/g, "");
        e.push(s),
        (We(n) || ve(n)) && n[s] && (r = n[s])
    }
    return r
}
const kn = [];
kn[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
};
kn[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
};
kn[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
};
kn[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1]
};
kn[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
};
kn[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
};
kn[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const Wy = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function By(e) {
    return Wy.test(e)
}
function Uy(e) {
    const t = e.charCodeAt(0)
      , n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}
function Hy(e) {
    if (e == null)
        return "o";
    switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
        return e;
    case 95:
    case 36:
    case 45:
        return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
        return "w"
    }
    return "i"
}
function zy(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : By(t) ? Uy(t) : "*" + t
}
function Ky(e) {
    const t = [];
    let n = -1, r = 0, s = 0, i, o, a, l, c, u, f;
    const d = [];
    d[0] = () => {
        o === void 0 ? o = a : o += a
    }
    ,
    d[1] = () => {
        o !== void 0 && (t.push(o),
        o = void 0)
    }
    ,
    d[2] = () => {
        d[0](),
        s++
    }
    ,
    d[3] = () => {
        if (s > 0)
            s--,
            r = 4,
            d[0]();
        else {
            if (s = 0,
            o === void 0 || (o = zy(o),
            o === !1))
                return !1;
            d[1]()
        }
    }
    ;
    function h() {
        const p = e[n + 1];
        if (r === 5 && p === "'" || r === 6 && p === '"')
            return n++,
            a = "\\" + p,
            d[0](),
            !0
    }
    for (; r !== null; )
        if (n++,
        i = e[n],
        !(i === "\\" && h())) {
            if (l = Hy(i),
            f = kn[r],
            c = f[l] || f.l || 8,
            c === 8 || (r = c[0],
            c[1] !== void 0 && (u = d[c[1]],
            u && (a = i,
            u() === !1))))
                return;
            if (r === 7)
                return t
        }
}
const bc = new Map;
function Gy(e, t) {
    return _e(e) ? e[t] : null
}
function Qy(e, t) {
    if (!_e(e))
        return null;
    let n = bc.get(t);
    if (n || (n = Ky(t),
    n && bc.set(t, n)),
    !n)
        return null;
    const r = n.length;
    let s = e
      , i = 0;
    for (; i < r; ) {
        const o = s[n[i]];
        if (o === void 0 || Pe(s))
            return null;
        s = o,
        i++
    }
    return s
}
const Xy = "11.1.2"
  , Ni = -1
  , li = "en-US"
  , _c = ""
  , wc = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Yy() {
    return {
        upper: (e, t) => t === "text" && se(e) ? e.toUpperCase() : t === "vnode" && _e(e) && "__v_isVNode"in e ? e.children.toUpperCase() : e,
        lower: (e, t) => t === "text" && se(e) ? e.toLowerCase() : t === "vnode" && _e(e) && "__v_isVNode"in e ? e.children.toLowerCase() : e,
        capitalize: (e, t) => t === "text" && se(e) ? wc(e) : t === "vnode" && _e(e) && "__v_isVNode"in e ? wc(e.children) : e
    }
}
let bd;
function Jy(e) {
    bd = e
}
let _d;
function Zy(e) {
    _d = e
}
let wd;
function eb(e) {
    wd = e
}
let Cd = null;
const Cc = e => {
    Cd = e
}
  , tb = () => Cd;
let Ec = 0;
function nb(e={}) {
    const t = Pe(e.onWarn) ? e.onWarn : Qv
      , n = se(e.version) ? e.version : Xy
      , r = se(e.locale) || Pe(e.locale) ? e.locale : li
      , s = Pe(r) ? li : r
      , i = We(e.fallbackLocale) || ve(e.fallbackLocale) || se(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s
      , o = ve(e.messages) ? e.messages : ro(s)
      , a = ve(e.datetimeFormats) ? e.datetimeFormats : ro(s)
      , l = ve(e.numberFormats) ? e.numberFormats : ro(s)
      , c = Xe(xe(), e.modifiers, Yy())
      , u = e.pluralRules || xe()
      , f = Pe(e.missing) ? e.missing : null
      , d = Le(e.missingWarn) || ai(e.missingWarn) ? e.missingWarn : !0
      , h = Le(e.fallbackWarn) || ai(e.fallbackWarn) ? e.fallbackWarn : !0
      , p = !!e.fallbackFormat
      , E = !!e.unresolving
      , I = Pe(e.postTranslation) ? e.postTranslation : null
      , b = ve(e.processor) ? e.processor : null
      , m = Le(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , C = !!e.escapeParameter
      , y = Pe(e.messageCompiler) ? e.messageCompiler : bd
      , x = Pe(e.messageResolver) ? e.messageResolver : _d || Gy
      , L = Pe(e.localeFallbacker) ? e.localeFallbacker : wd || jy
      , N = _e(e.fallbackContext) ? e.fallbackContext : void 0
      , W = e
      , k = _e(W.__datetimeFormatters) ? W.__datetimeFormatters : new Map
      , O = _e(W.__numberFormatters) ? W.__numberFormatters : new Map
      , q = _e(W.__meta) ? W.__meta : {};
    Ec++;
    const S = {
        version: n,
        cid: Ec,
        locale: r,
        fallbackLocale: i,
        messages: o,
        modifiers: c,
        pluralRules: u,
        missing: f,
        missingWarn: d,
        fallbackWarn: h,
        fallbackFormat: p,
        unresolving: E,
        postTranslation: I,
        processor: b,
        warnHtmlMessage: m,
        escapeParameter: C,
        messageCompiler: y,
        messageResolver: x,
        localeFallbacker: L,
        fallbackContext: N,
        onWarn: t,
        __meta: q
    };
    return S.datetimeFormats = a,
    S.numberFormats = l,
    S.__datetimeFormatters = k,
    S.__numberFormatters = O,
    S
}
const ro = e => ({
    [e]: xe()
});
function Va(e, t, n, r, s) {
    const {missing: i, onWarn: o} = e;
    if (i !== null) {
        const a = i(e, n, t, s);
        return se(a) ? a : t
    } else
        return t
}
function xr(e, t, n) {
    const r = e;
    r.__localeChainCache = new Map,
    e.localeFallbacker(e, n, t)
}
function rb(e, t) {
    return e === t ? !1 : e.split("-")[0] === t.split("-")[0]
}
function sb(e, t) {
    const n = t.indexOf(e);
    if (n === -1)
        return !1;
    for (let r = n + 1; r < t.length; r++)
        if (rb(e, t[r]))
            return !0;
    return !1
}
function Sc(e, ...t) {
    const {datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: i, localeFallbacker: o} = e
      , {__datetimeFormatters: a} = e
      , [l,c,u,f] = zo(...t)
      , d = Le(u.missingWarn) ? u.missingWarn : e.missingWarn;
    Le(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const h = !!u.part
      , p = qa(e, u)
      , E = o(e, s, p);
    if (!se(l) || l === "")
        return new Intl.DateTimeFormat(p,f).format(c);
    let I = {}, b, m = null;
    const C = "datetime format";
    for (let L = 0; L < E.length && (b = E[L],
    I = n[b] || {},
    m = I[l],
    !ve(m)); L++)
        Va(e, l, b, d, C);
    if (!ve(m) || !se(b))
        return r ? Ni : l;
    let y = `${b}__${l}`;
    Ai(f) || (y = `${y}__${JSON.stringify(f)}`);
    let x = a.get(y);
    return x || (x = new Intl.DateTimeFormat(b,Xe({}, m, f)),
    a.set(y, x)),
    h ? x.formatToParts(c) : x.format(c)
}
const Ed = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];
function zo(...e) {
    const [t,n,r,s] = e
      , i = xe();
    let o = xe(), a;
    if (se(t)) {
        const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!l)
            throw Qt(Gt.INVALID_ISO_DATE_ARGUMENT);
        const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
        a = new Date(c);
        try {
            a.toISOString()
        } catch {
            throw Qt(Gt.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (Uv(t)) {
        if (isNaN(t.getTime()))
            throw Qt(Gt.INVALID_DATE_ARGUMENT);
        a = t
    } else if (De(t))
        a = t;
    else
        throw Qt(Gt.INVALID_ARGUMENT);
    return se(n) ? i.key = n : ve(n) && Object.keys(n).forEach(l => {
        Ed.includes(l) ? o[l] = n[l] : i[l] = n[l]
    }
    ),
    se(r) ? i.locale = r : ve(r) && (o = r),
    ve(s) && (o = s),
    [i.key || "", a, i, o]
}
function kc(e, t, n) {
    const r = e;
    for (const s in n) {
        const i = `${t}__${s}`;
        r.__datetimeFormatters.has(i) && r.__datetimeFormatters.delete(i)
    }
}
function xc(e, ...t) {
    const {numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: i, localeFallbacker: o} = e
      , {__numberFormatters: a} = e
      , [l,c,u,f] = Ko(...t)
      , d = Le(u.missingWarn) ? u.missingWarn : e.missingWarn;
    Le(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const h = !!u.part
      , p = qa(e, u)
      , E = o(e, s, p);
    if (!se(l) || l === "")
        return new Intl.NumberFormat(p,f).format(c);
    let I = {}, b, m = null;
    const C = "number format";
    for (let L = 0; L < E.length && (b = E[L],
    I = n[b] || {},
    m = I[l],
    !ve(m)); L++)
        Va(e, l, b, d, C);
    if (!ve(m) || !se(b))
        return r ? Ni : l;
    let y = `${b}__${l}`;
    Ai(f) || (y = `${y}__${JSON.stringify(f)}`);
    let x = a.get(y);
    return x || (x = new Intl.NumberFormat(b,Xe({}, m, f)),
    a.set(y, x)),
    h ? x.formatToParts(c) : x.format(c)
}
const Sd = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];
function Ko(...e) {
    const [t,n,r,s] = e
      , i = xe();
    let o = xe();
    if (!De(t))
        throw Qt(Gt.INVALID_ARGUMENT);
    const a = t;
    return se(n) ? i.key = n : ve(n) && Object.keys(n).forEach(l => {
        Sd.includes(l) ? o[l] = n[l] : i[l] = n[l]
    }
    ),
    se(r) ? i.locale = r : ve(r) && (o = r),
    ve(s) && (o = s),
    [i.key || "", a, i, o]
}
function Tc(e, t, n) {
    const r = e;
    for (const s in n) {
        const i = `${t}__${s}`;
        r.__numberFormatters.has(i) && r.__numberFormatters.delete(i)
    }
}
const ib = e => e
  , ob = e => ""
  , ab = "text"
  , lb = e => e.length === 0 ? "" : Da(e)
  , cb = Gv;
function Ac(e, t) {
    return e = Math.abs(e),
    t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}
function ub(e) {
    const t = De(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (De(e.named.count) || De(e.named.n)) ? De(e.named.count) ? e.named.count : De(e.named.n) ? e.named.n : t : t
}
function fb(e, t) {
    t.count || (t.count = e),
    t.n || (t.n = e)
}
function db(e={}) {
    const t = e.locale
      , n = ub(e)
      , r = _e(e.pluralRules) && se(t) && Pe(e.pluralRules[t]) ? e.pluralRules[t] : Ac
      , s = _e(e.pluralRules) && se(t) && Pe(e.pluralRules[t]) ? Ac : void 0
      , i = b => b[r(n, b.length, s)]
      , o = e.list || []
      , a = b => o[b]
      , l = e.named || xe();
    De(e.pluralIndex) && fb(n, l);
    const c = b => l[b];
    function u(b, m) {
        const C = Pe(e.messages) ? e.messages(b, !!m) : _e(e.messages) ? e.messages[b] : !1;
        return C || (e.parent ? e.parent.message(b) : ob)
    }
    const f = b => e.modifiers ? e.modifiers[b] : ib
      , d = ve(e.processor) && Pe(e.processor.normalize) ? e.processor.normalize : lb
      , h = ve(e.processor) && Pe(e.processor.interpolate) ? e.processor.interpolate : cb
      , p = ve(e.processor) && se(e.processor.type) ? e.processor.type : ab
      , I = {
        list: a,
        named: c,
        plural: i,
        linked: (b, ...m) => {
            const [C,y] = m;
            let x = "text"
              , L = "";
            m.length === 1 ? _e(C) ? (L = C.modifier || L,
            x = C.type || x) : se(C) && (L = C || L) : m.length === 2 && (se(C) && (L = C || L),
            se(y) && (x = y || x));
            const N = u(b, !0)(I)
              , W = x === "vnode" && We(N) && L ? N[0] : N;
            return L ? f(L)(W, x) : W
        }
        ,
        message: u,
        type: p,
        interpolate: h,
        normalize: d,
        values: Xe(xe(), o, l)
    };
    return I
}
const Ic = () => ""
  , Yt = e => Pe(e);
function Nc(e, ...t) {
    const {fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: i, fallbackLocale: o, messages: a} = e
      , [l,c] = Go(...t)
      , u = Le(c.missingWarn) ? c.missingWarn : e.missingWarn
      , f = Le(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn
      , d = Le(c.escapeParameter) ? c.escapeParameter : e.escapeParameter
      , h = !!c.resolvedMessage
      , p = se(c.default) || Le(c.default) ? Le(c.default) ? i ? l : () => l : c.default : n ? i ? l : () => l : null
      , E = n || p != null && (se(p) || Pe(p))
      , I = qa(e, c);
    d && hb(c);
    let[b,m,C] = h ? [l, I, a[I] || xe()] : kd(e, l, I, o, f, u)
      , y = b
      , x = l;
    if (!h && !(se(y) || mr(y) || Yt(y)) && E && (y = p,
    x = y),
    !h && (!(se(y) || mr(y) || Yt(y)) || !se(m)))
        return s ? Ni : l;
    let L = !1;
    const N = () => {
        L = !0
    }
      , W = Yt(y) ? y : xd(e, l, m, y, x, N);
    if (L)
        return y;
    const k = pb(e, m, C, c)
      , O = db(k)
      , q = mb(e, W, O);
    return r ? r(q, l) : q
}
function hb(e) {
    We(e.list) ? e.list = e.list.map(t => se(t) ? dc(t) : t) : _e(e.named) && Object.keys(e.named).forEach(t => {
        se(e.named[t]) && (e.named[t] = dc(e.named[t]))
    }
    )
}
function kd(e, t, n, r, s, i) {
    const {messages: o, onWarn: a, messageResolver: l, localeFallbacker: c} = e
      , u = c(e, r, n);
    let f = xe(), d, h = null;
    const p = "translate";
    for (let E = 0; E < u.length && (d = u[E],
    f = o[d] || xe(),
    (h = l(f, t)) === null && (h = f[t]),
    !(se(h) || mr(h) || Yt(h))); E++)
        if (!sb(d, u)) {
            const I = Va(e, t, d, i, p);
            I !== t && (h = I)
        }
    return [h, d, f]
}
function xd(e, t, n, r, s, i) {
    const {messageCompiler: o, warnHtmlMessage: a} = e;
    if (Yt(r)) {
        const c = r;
        return c.locale = c.locale || n,
        c.key = c.key || t,
        c
    }
    if (o == null) {
        const c = () => r;
        return c.locale = n,
        c.key = t,
        c
    }
    const l = o(r, gb(e, n, s, r, a, i));
    return l.locale = n,
    l.key = t,
    l.source = r,
    l
}
function mb(e, t, n) {
    return t(n)
}
function Go(...e) {
    const [t,n,r] = e
      , s = xe();
    if (!se(t) && !De(t) && !Yt(t) && !mr(t))
        throw Qt(Gt.INVALID_ARGUMENT);
    const i = De(t) ? String(t) : (Yt(t),
    t);
    return De(n) ? s.plural = n : se(n) ? s.default = n : ve(n) && !Ai(n) ? s.named = n : We(n) && (s.list = n),
    De(r) ? s.plural = r : se(r) ? s.default = r : ve(r) && Xe(s, r),
    [i, s]
}
function gb(e, t, n, r, s, i) {
    return {
        locale: t,
        key: n,
        warnHtmlMessage: s,
        onError: o => {
            throw i && i(o),
            o
        }
        ,
        onCacheKey: o => Wv(t, n, o)
    }
}
function pb(e, t, n, r) {
    const {modifiers: s, pluralRules: i, messageResolver: o, fallbackLocale: a, fallbackWarn: l, missingWarn: c, fallbackContext: u} = e
      , d = {
        locale: t,
        modifiers: s,
        pluralRules: i,
        messages: (h, p) => {
            let E = o(n, h);
            if (E == null && (u || p)) {
                const [,,I] = kd(u || e, h, t, a, l, c);
                E = o(I, h)
            }
            if (se(E) || mr(E)) {
                let I = !1;
                const m = xd(e, h, t, E, h, () => {
                    I = !0
                }
                );
                return I ? Ic : m
            } else
                return Yt(E) ? E : Ic
        }
    };
    return e.processor && (d.processor = e.processor),
    r.list && (d.list = r.list),
    r.named && (d.named = r.named),
    De(r.plural) && (d.pluralIndex = r.plural),
    d
}
/*!
  * vue-i18n v11.1.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const vb = "11.1.2"
  , Et = {
    UNEXPECTED_RETURN_TYPE: $y,
    INVALID_ARGUMENT: 25,
    MUST_BE_CALL_SETUP_TOP: 26,
    NOT_INSTALLED: 27,
    REQUIRED_VALUE: 28,
    INVALID_VALUE: 29,
    NOT_INSTALLED_WITH_PROVIDE: 31,
    UNEXPECTED_ERROR: 32
};
function Mt(e, ...t) {
    return Ii(e, null, void 0)
}
const Qo = En("__translateVNode")
  , Xo = En("__datetimeParts")
  , Yo = En("__numberParts")
  , yb = En("__setPluralRules")
  , bb = En("__injectWithOption")
  , Jo = En("__dispose");
function ls(e) {
    if (!_e(e))
        return e;
    for (const t in e)
        if (It(e, t))
            if (!t.includes("."))
                _e(e[t]) && ls(e[t]);
            else {
                const n = t.split(".")
                  , r = n.length - 1;
                let s = e
                  , i = !1;
                for (let o = 0; o < r; o++) {
                    if (n[o] === "__proto__")
                        throw new Error(`unsafe key: ${n[o]}`);
                    if (n[o]in s || (s[n[o]] = xe()),
                    !_e(s[n[o]])) {
                        i = !0;
                        break
                    }
                    s = s[n[o]]
                }
                i || (s[n[r]] = e[t],
                delete e[t]),
                _e(s[n[r]]) && ls(s[n[r]])
            }
    return e
}
function Td(e, t) {
    const {messages: n, __i18n: r, messageResolver: s, flatJson: i} = t
      , o = ve(n) ? n : We(r) ? xe() : {
        [e]: xe()
    };
    if (We(r) && r.forEach(a => {
        if ("locale"in a && "resource"in a) {
            const {locale: l, resource: c} = a;
            l ? (o[l] = o[l] || xe(),
            Ds(c, o[l])) : Ds(c, o)
        } else
            se(a) && Ds(JSON.parse(a), o)
    }
    ),
    s == null && i)
        for (const a in o)
            It(o, a) && ls(o[a]);
    return o
}
function _b(e) {
    return e.type
}
function wb(e, t, n) {
    let r = _e(t.messages) ? t.messages : xe();
    "__i18nGlobal"in n && (r = Td(e.locale.value, {
        messages: r,
        __i18n: n.__i18nGlobal
    }));
    const s = Object.keys(r);
    s.length && s.forEach(i => {
        e.mergeLocaleMessage(i, r[i])
    }
    );
    {
        if (_e(t.datetimeFormats)) {
            const i = Object.keys(t.datetimeFormats);
            i.length && i.forEach(o => {
                e.mergeDateTimeFormat(o, t.datetimeFormats[o])
            }
            )
        }
        if (_e(t.numberFormats)) {
            const i = Object.keys(t.numberFormats);
            i.length && i.forEach(o => {
                e.mergeNumberFormat(o, t.numberFormats[o])
            }
            )
        }
    }
}
function Pc(e) {
    return Qe(ds, null, e, 0)
}
const Lc = () => []
  , Cb = () => !1;
let Oc = 0;
function Rc(e) {
    return (t, n, r, s) => e(n, r, Se() || void 0, s)
}
function Ad(e={}) {
    const {__root: t, __injectWithOption: n} = e
      , r = t === void 0
      , s = e.flatJson
      , i = oi ? he : Ct;
    let o = Le(e.inheritLocale) ? e.inheritLocale : !0;
    const a = i(t && o ? t.locale.value : se(e.locale) ? e.locale : li)
      , l = i(t && o ? t.fallbackLocale.value : se(e.fallbackLocale) || We(e.fallbackLocale) || ve(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a.value)
      , c = i(Td(a.value, e))
      , u = i(ve(e.datetimeFormats) ? e.datetimeFormats : {
        [a.value]: {}
    })
      , f = i(ve(e.numberFormats) ? e.numberFormats : {
        [a.value]: {}
    });
    let d = t ? t.missingWarn : Le(e.missingWarn) || ai(e.missingWarn) ? e.missingWarn : !0
      , h = t ? t.fallbackWarn : Le(e.fallbackWarn) || ai(e.fallbackWarn) ? e.fallbackWarn : !0
      , p = t ? t.fallbackRoot : Le(e.fallbackRoot) ? e.fallbackRoot : !0
      , E = !!e.fallbackFormat
      , I = Pe(e.missing) ? e.missing : null
      , b = Pe(e.missing) ? Rc(e.missing) : null
      , m = Pe(e.postTranslation) ? e.postTranslation : null
      , C = t ? t.warnHtmlMessage : Le(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , y = !!e.escapeParameter;
    const x = t ? t.modifiers : ve(e.modifiers) ? e.modifiers : {};
    let L = e.pluralRules || t && t.pluralRules, N;
    N = ( () => {
        r && Cc(null);
        const T = {
            version: vb,
            locale: a.value,
            fallbackLocale: l.value,
            messages: c.value,
            modifiers: x,
            pluralRules: L,
            missing: b === null ? void 0 : b,
            missingWarn: d,
            fallbackWarn: h,
            fallbackFormat: E,
            unresolving: !0,
            postTranslation: m === null ? void 0 : m,
            warnHtmlMessage: C,
            escapeParameter: y,
            messageResolver: e.messageResolver,
            messageCompiler: e.messageCompiler,
            __meta: {
                framework: "vue"
            }
        };
        T.datetimeFormats = u.value,
        T.numberFormats = f.value,
        T.__datetimeFormatters = ve(N) ? N.__datetimeFormatters : void 0,
        T.__numberFormatters = ve(N) ? N.__numberFormatters : void 0;
        const $ = nb(T);
        return r && Cc($),
        $
    }
    )(),
    xr(N, a.value, l.value);
    function k() {
        return [a.value, l.value, c.value, u.value, f.value]
    }
    const O = M({
        get: () => a.value,
        set: T => {
            N.locale = T,
            a.value = T
        }
    })
      , q = M({
        get: () => l.value,
        set: T => {
            N.fallbackLocale = T,
            l.value = T,
            xr(N, a.value, T)
        }
    })
      , S = M( () => c.value)
      , G = M( () => u.value)
      , D = M( () => f.value);
    function ee() {
        return Pe(m) ? m : null
    }
    function J(T) {
        m = T,
        N.postTranslation = T
    }
    function Q() {
        return I
    }
    function K(T) {
        T !== null && (b = Rc(T)),
        I = T,
        N.missing = b
    }
    const ie = (T, $, re, ae, me, Be) => {
        k();
        let Me;
        try {
            r || (N.fallbackContext = t ? tb() : void 0),
            Me = T(N)
        } finally {
            r || (N.fallbackContext = void 0)
        }
        if (re !== "translate exists" && De(Me) && Me === Ni || re === "translate exists" && !Me) {
            const [gt,xt] = $();
            return t && p ? ae(t) : me(gt)
        } else {
            if (Be(Me))
                return Me;
            throw Mt(Et.UNEXPECTED_RETURN_TYPE)
        }
    }
    ;
    function ce(...T) {
        return ie($ => Reflect.apply(Nc, null, [$, ...T]), () => Go(...T), "translate", $ => Reflect.apply($.t, $, [...T]), $ => $, $ => se($))
    }
    function fe(...T) {
        const [$,re,ae] = T;
        if (ae && !_e(ae))
            throw Mt(Et.INVALID_ARGUMENT);
        return ce($, re, Xe({
            resolvedMessage: !0
        }, ae || {}))
    }
    function z(...T) {
        return ie($ => Reflect.apply(Sc, null, [$, ...T]), () => zo(...T), "datetime format", $ => Reflect.apply($.d, $, [...T]), () => _c, $ => se($))
    }
    function ge(...T) {
        return ie($ => Reflect.apply(xc, null, [$, ...T]), () => Ko(...T), "number format", $ => Reflect.apply($.n, $, [...T]), () => _c, $ => se($))
    }
    function Ne(T) {
        return T.map($ => se($) || De($) || Le($) ? Pc(String($)) : $)
    }
    const ne = {
        normalize: Ne,
        interpolate: T => T,
        type: "vnode"
    };
    function F(...T) {
        return ie($ => {
            let re;
            const ae = $;
            try {
                ae.processor = ne,
                re = Reflect.apply(Nc, null, [ae, ...T])
            } finally {
                ae.processor = null
            }
            return re
        }
        , () => Go(...T), "translate", $ => $[Qo](...T), $ => [Pc($)], $ => We($))
    }
    function Y(...T) {
        return ie($ => Reflect.apply(xc, null, [$, ...T]), () => Ko(...T), "number format", $ => $[Yo](...T), Lc, $ => se($) || We($))
    }
    function X(...T) {
        return ie($ => Reflect.apply(Sc, null, [$, ...T]), () => zo(...T), "datetime format", $ => $[Xo](...T), Lc, $ => se($) || We($))
    }
    function te(T) {
        L = T,
        N.pluralRules = L
    }
    function ye(T, $) {
        return ie( () => {
            if (!T)
                return !1;
            const re = se($) ? $ : a.value
              , ae = P(re)
              , me = N.messageResolver(ae, T);
            return mr(me) || Yt(me) || se(me)
        }
        , () => [T], "translate exists", re => Reflect.apply(re.te, re, [T, $]), Cb, re => Le(re))
    }
    function _(T) {
        let $ = null;
        const re = yd(N, l.value, a.value);
        for (let ae = 0; ae < re.length; ae++) {
            const me = c.value[re[ae]] || {}
              , Be = N.messageResolver(me, T);
            if (Be != null) {
                $ = Be;
                break
            }
        }
        return $
    }
    function w(T) {
        const $ = _(T);
        return $ ?? (t ? t.tm(T) || {} : {})
    }
    function P(T) {
        return c.value[T] || {}
    }
    function V(T, $) {
        if (s) {
            const re = {
                [T]: $
            };
            for (const ae in re)
                It(re, ae) && ls(re[ae]);
            $ = re[T]
        }
        c.value[T] = $,
        N.messages = c.value
    }
    function U(T, $) {
        c.value[T] = c.value[T] || {};
        const re = {
            [T]: $
        };
        if (s)
            for (const ae in re)
                It(re, ae) && ls(re[ae]);
        $ = re[T],
        Ds($, c.value[T]),
        N.messages = c.value
    }
    function B(T) {
        return u.value[T] || {}
    }
    function g(T, $) {
        u.value[T] = $,
        N.datetimeFormats = u.value,
        kc(N, T, $)
    }
    function v(T, $) {
        u.value[T] = Xe(u.value[T] || {}, $),
        N.datetimeFormats = u.value,
        kc(N, T, $)
    }
    function A(T) {
        return f.value[T] || {}
    }
    function R(T, $) {
        f.value[T] = $,
        N.numberFormats = f.value,
        Tc(N, T, $)
    }
    function Z(T, $) {
        f.value[T] = Xe(f.value[T] || {}, $),
        N.numberFormats = f.value,
        Tc(N, T, $)
    }
    Oc++,
    t && oi && (de(t.locale, T => {
        o && (a.value = T,
        N.locale = T,
        xr(N, a.value, l.value))
    }
    ),
    de(t.fallbackLocale, T => {
        o && (l.value = T,
        N.fallbackLocale = T,
        xr(N, a.value, l.value))
    }
    ));
    const H = {
        id: Oc,
        locale: O,
        fallbackLocale: q,
        get inheritLocale() {
            return o
        },
        set inheritLocale(T) {
            o = T,
            T && t && (a.value = t.locale.value,
            l.value = t.fallbackLocale.value,
            xr(N, a.value, l.value))
        },
        get availableLocales() {
            return Object.keys(c.value).sort()
        },
        messages: S,
        get modifiers() {
            return x
        },
        get pluralRules() {
            return L || {}
        },
        get isGlobal() {
            return r
        },
        get missingWarn() {
            return d
        },
        set missingWarn(T) {
            d = T,
            N.missingWarn = d
        },
        get fallbackWarn() {
            return h
        },
        set fallbackWarn(T) {
            h = T,
            N.fallbackWarn = h
        },
        get fallbackRoot() {
            return p
        },
        set fallbackRoot(T) {
            p = T
        },
        get fallbackFormat() {
            return E
        },
        set fallbackFormat(T) {
            E = T,
            N.fallbackFormat = E
        },
        get warnHtmlMessage() {
            return C
        },
        set warnHtmlMessage(T) {
            C = T,
            N.warnHtmlMessage = T
        },
        get escapeParameter() {
            return y
        },
        set escapeParameter(T) {
            y = T,
            N.escapeParameter = T
        },
        t: ce,
        getLocaleMessage: P,
        setLocaleMessage: V,
        mergeLocaleMessage: U,
        getPostTranslationHandler: ee,
        setPostTranslationHandler: J,
        getMissingHandler: Q,
        setMissingHandler: K,
        [yb]: te
    };
    return H.datetimeFormats = G,
    H.numberFormats = D,
    H.rt = fe,
    H.te = ye,
    H.tm = w,
    H.d = z,
    H.n = ge,
    H.getDateTimeFormat = B,
    H.setDateTimeFormat = g,
    H.mergeDateTimeFormat = v,
    H.getNumberFormat = A,
    H.setNumberFormat = R,
    H.mergeNumberFormat = Z,
    H[bb] = n,
    H[Qo] = F,
    H[Xo] = X,
    H[Yo] = Y,
    H
}
const Wa = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        validator: e => e === "parent" || e === "global",
        default: "parent"
    },
    i18n: {
        type: Object
    }
};
function Eb({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce( (r, s) => [...r, ...s.type === tt ? s.children : [s]], []) : t.reduce( (n, r) => {
        const s = e[r];
        return s && (n[r] = s()),
        n
    }
    , xe())
}
function Id() {
    return tt
}
const Sb = Bn({
    name: "i18n-t",
    props: Xe({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: e => De(e) || !isNaN(e)
        }
    }, Wa),
    setup(e, t) {
        const {slots: n, attrs: r} = t
          , s = e.i18n || Pi({
            useScope: e.scope,
            __useComponent: !0
        });
        return () => {
            const i = Object.keys(n).filter(f => f !== "_")
              , o = xe();
            e.locale && (o.locale = e.locale),
            e.plural !== void 0 && (o.plural = se(e.plural) ? +e.plural : e.plural);
            const a = Eb(t, i)
              , l = s[Qo](e.keypath, a, o)
              , c = Xe(xe(), r)
              , u = se(e.tag) || _e(e.tag) ? e.tag : Id();
            return j(u, c, l)
        }
    }
})
  , Mc = Sb;
function kb(e) {
    return We(e) && !se(e[0])
}
function Nd(e, t, n, r) {
    const {slots: s, attrs: i} = t;
    return () => {
        const o = {
            part: !0
        };
        let a = xe();
        e.locale && (o.locale = e.locale),
        se(e.format) ? o.key = e.format : _e(e.format) && (se(e.format.key) && (o.key = e.format.key),
        a = Object.keys(e.format).reduce( (d, h) => n.includes(h) ? Xe(xe(), d, {
            [h]: e.format[h]
        }) : d, xe()));
        const l = r(e.value, o, a);
        let c = [o.key];
        We(l) ? c = l.map( (d, h) => {
            const p = s[d.type]
              , E = p ? p({
                [d.type]: d.value,
                index: h,
                parts: l
            }) : [d.value];
            return kb(E) && (E[0].key = `${d.type}-${h}`),
            E
        }
        ) : se(l) && (c = [l]);
        const u = Xe(xe(), i)
          , f = se(e.tag) || _e(e.tag) ? e.tag : Id();
        return j(f, u, c)
    }
}
const xb = Bn({
    name: "i18n-n",
    props: Xe({
        value: {
            type: Number,
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, Wa),
    setup(e, t) {
        const n = e.i18n || Pi({
            useScope: e.scope,
            __useComponent: !0
        });
        return Nd(e, t, Sd, (...r) => n[Yo](...r))
    }
})
  , Fc = xb;
function Tb(e, t) {
    const n = e;
    if (e.mode === "composition")
        return n.__getInstance(t) || e.global;
    {
        const r = n.__getInstance(t);
        return r != null ? r.__composer : e.global.__composer
    }
}
function Ab(e) {
    const t = o => {
        const {instance: a, value: l} = o;
        if (!a || !a.$)
            throw Mt(Et.UNEXPECTED_ERROR);
        const c = Tb(e, a.$)
          , u = Dc(l);
        return [Reflect.apply(c.t, c, [...$c(u)]), c]
    }
    ;
    return {
        created: (o, a) => {
            const [l,c] = t(a);
            oi && e.global === c && (o.__i18nWatcher = de(c.locale, () => {
                a.instance && a.instance.$forceUpdate()
            }
            )),
            o.__composer = c,
            o.textContent = l
        }
        ,
        unmounted: o => {
            oi && o.__i18nWatcher && (o.__i18nWatcher(),
            o.__i18nWatcher = void 0,
            delete o.__i18nWatcher),
            o.__composer && (o.__composer = void 0,
            delete o.__composer)
        }
        ,
        beforeUpdate: (o, {value: a}) => {
            if (o.__composer) {
                const l = o.__composer
                  , c = Dc(a);
                o.textContent = Reflect.apply(l.t, l, [...$c(c)])
            }
        }
        ,
        getSSRProps: o => {
            const [a] = t(o);
            return {
                textContent: a
            }
        }
    }
}
function Dc(e) {
    if (se(e))
        return {
            path: e
        };
    if (ve(e)) {
        if (!("path"in e))
            throw Mt(Et.REQUIRED_VALUE, "path");
        return e
    } else
        throw Mt(Et.INVALID_VALUE)
}
function $c(e) {
    const {path: t, locale: n, args: r, choice: s, plural: i} = e
      , o = {}
      , a = r || {};
    return se(n) && (o.locale = n),
    De(s) && (o.plural = s),
    De(i) && (o.plural = i),
    [t, a, o]
}
function Ib(e, t, ...n) {
    const r = ve(n[0]) ? n[0] : {};
    (Le(r.globalInstall) ? r.globalInstall : !0) && ([Mc.name, "I18nT"].forEach(i => e.component(i, Mc)),
    [Fc.name, "I18nN"].forEach(i => e.component(i, Fc)),
    [qc.name, "I18nD"].forEach(i => e.component(i, qc))),
    e.directive("t", Ab(t))
}
const Nb = En("global-vue-i18n");
function ZC(e={}) {
    const t = Le(e.globalInjection) ? e.globalInjection : !0
      , n = new Map
      , [r,s] = Pb(e)
      , i = En("");
    function o(u) {
        return n.get(u) || null
    }
    function a(u, f) {
        n.set(u, f)
    }
    function l(u) {
        n.delete(u)
    }
    const c = {
        get mode() {
            return "composition"
        },
        async install(u, ...f) {
            if (u.__VUE_I18N_SYMBOL__ = i,
            u.provide(u.__VUE_I18N_SYMBOL__, c),
            ve(f[0])) {
                const p = f[0];
                c.__composerExtend = p.__composerExtend,
                c.__vueI18nExtend = p.__vueI18nExtend
            }
            let d = null;
            t && (d = jb(u, c.global)),
            Ib(u, c, ...f);
            const h = u.unmount;
            u.unmount = () => {
                d && d(),
                c.dispose(),
                h()
            }
        },
        get global() {
            return s
        },
        dispose() {
            r.stop()
        },
        __instances: n,
        __getInstance: o,
        __setInstance: a,
        __deleteInstance: l
    };
    return c
}
function Pi(e={}) {
    const t = Se();
    if (t == null)
        throw Mt(Et.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
        throw Mt(Et.NOT_INSTALLED);
    const n = Lb(t)
      , r = Rb(n)
      , s = _b(t)
      , i = Ob(e, s);
    if (i === "global")
        return wb(r, e, s),
        r;
    if (i === "parent") {
        let l = Mb(n, t, e.__useComponent);
        return l == null && (l = r),
        l
    }
    const o = n;
    let a = o.__getInstance(t);
    if (a == null) {
        const l = Xe({}, e);
        "__i18n"in s && (l.__i18n = s.__i18n),
        r && (l.__root = r),
        a = Ad(l),
        o.__composerExtend && (a[Jo] = o.__composerExtend(a)),
        Db(o, t, a),
        o.__setInstance(t, a)
    }
    return a
}
function Pb(e, t) {
    const n = va()
      , r = n.run( () => Ad(e));
    if (r == null)
        throw Mt(Et.UNEXPECTED_ERROR);
    return [n, r]
}
function Lb(e) {
    const t = lt(e.isCE ? Nb : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
        throw Mt(e.isCE ? Et.NOT_INSTALLED_WITH_PROVIDE : Et.UNEXPECTED_ERROR);
    return t
}
function Ob(e, t) {
    return Ai(e) ? "__i18n"in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}
function Rb(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}
function Mb(e, t, n=!1) {
    let r = null;
    const s = t.root;
    let i = Fb(t, n);
    for (; i != null; ) {
        const o = e;
        if (e.mode === "composition" && (r = o.__getInstance(i)),
        r != null || s === i)
            break;
        i = i.parent
    }
    return r
}
function Fb(e, t=!1) {
    return e == null ? null : t && e.vnode.ctx || e.parent
}
function Db(e, t, n) {
    St( () => {}
    , t),
    Ci( () => {
        const r = n;
        e.__deleteInstance(t);
        const s = r[Jo];
        s && (s(),
        delete r[Jo])
    }
    , t)
}
const $b = ["locale", "fallbackLocale", "availableLocales"]
  , jc = ["t", "rt", "d", "n", "tm", "te"];
function jb(e, t) {
    const n = Object.create(null);
    return $b.forEach(s => {
        const i = Object.getOwnPropertyDescriptor(t, s);
        if (!i)
            throw Mt(Et.UNEXPECTED_ERROR);
        const o = Ie(i.value) ? {
            get() {
                return i.value.value
            },
            set(a) {
                i.value.value = a
            }
        } : {
            get() {
                return i.get && i.get()
            }
        };
        Object.defineProperty(n, s, o)
    }
    ),
    e.config.globalProperties.$i18n = n,
    jc.forEach(s => {
        const i = Object.getOwnPropertyDescriptor(t, s);
        if (!i || !i.value)
            throw Mt(Et.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${s}`, i)
    }
    ),
    () => {
        delete e.config.globalProperties.$i18n,
        jc.forEach(s => {
            delete e.config.globalProperties[`$${s}`]
        }
        )
    }
}
const qb = Bn({
    name: "i18n-d",
    props: Xe({
        value: {
            type: [Number, Date],
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, Wa),
    setup(e, t) {
        const n = e.i18n || Pi({
            useScope: e.scope,
            __useComponent: !0
        });
        return Nd(e, t, Ed, (...r) => n[Xo](...r))
    }
})
  , qc = qb;
Jy(Dy);
Zy(Qy);
eb(yd);
function gr(e) {
    return ya() ? (Ru(e),
    !0) : !1
}
const so = new WeakMap
  , Vb = (...e) => {
    var t;
    const n = e[0]
      , r = (t = Se()) == null ? void 0 : t.proxy;
    if (r == null && !Ia())
        throw new Error("injectLocal must be called in setup");
    return r && so.has(r) && n in so.get(r) ? so.get(r)[n] : lt(...e)
}
  , ci = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Pd = e => e != null
  , Wb = Object.prototype.toString
  , Bb = e => Wb.call(e) === "[object Object]"
  , Hr = () => {}
;
function Vc(e) {
    return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e)
}
function Ub(e) {
    return Se()
}
function zr(e) {
    return Array.isArray(e) ? e : [e]
}
function Hb(...e) {
    if (e.length !== 1)
        return wm(...e);
    const t = e[0];
    return typeof t == "function" ? Ea(Ju( () => ({
        get: t,
        set: Hr
    }))) : he(t)
}
function zb(e, t=!0, n) {
    Ub() ? St(e, n) : t ? e() : at(e)
}
function eE(e, t=1e3, n={}) {
    const {immediate: r=!0, immediateCallback: s=!1} = n;
    let i = null;
    const o = Ct(!1);
    function a() {
        i && (clearInterval(i),
        i = null)
    }
    function l() {
        o.value = !1,
        a()
    }
    function c() {
        const u = Lt(t);
        u <= 0 || (o.value = !0,
        s && e(),
        a(),
        o.value && (i = setInterval(e, u)))
    }
    if (r && ci && c(),
    Ie(t) || typeof t == "function") {
        const u = de(t, () => {
            o.value && ci && c()
        }
        );
        gr(u)
    }
    return gr(l),
    {
        isActive: o,
        pause: l,
        resume: c
    }
}
function Kb(e, t, n) {
    return de(e, t, {
        ...n,
        immediate: !0
    })
}
function tE(e, t, n) {
    let r;
    Ie(n) ? r = {
        evaluating: n
    } : r = {};
    const {lazy: s=!1, evaluating: i=void 0, shallow: o=!0, onError: a=Hr} = r
      , l = Ct(!s)
      , c = o ? Ct(t) : he(t);
    let u = 0;
    return Rf(async f => {
        if (!l.value)
            return;
        u++;
        const d = u;
        let h = !1;
        i && Promise.resolve().then( () => {
            i.value = !0
        }
        );
        try {
            const p = await e(E => {
                f( () => {
                    i && (i.value = !1),
                    h || E()
                }
                )
            }
            );
            d === u && (c.value = p)
        } catch (p) {
            a(p)
        } finally {
            i && d === u && (i.value = !1),
            h = !0
        }
    }
    ),
    s ? M( () => (l.value = !0,
    c.value)) : c
}
const _r = ci ? window : void 0
  , Gb = ci ? window.document : void 0;
function Kr(e) {
    var t;
    const n = Lt(e);
    return (t = n?.$el) != null ? t : n
}
function ui(...e) {
    const t = []
      , n = () => {
        t.forEach(a => a()),
        t.length = 0
    }
      , r = (a, l, c, u) => (a.addEventListener(l, c, u),
    () => a.removeEventListener(l, c, u))
      , s = M( () => {
        const a = zr(Lt(e[0])).filter(l => l != null);
        return a.every(l => typeof l != "string") ? a : void 0
    }
    )
      , i = Kb( () => {
        var a, l;
        return [(l = (a = s.value) == null ? void 0 : a.map(c => Kr(c))) != null ? l : [_r].filter(c => c != null), zr(Lt(s.value ? e[1] : e[0])), zr(Xt(s.value ? e[2] : e[1])), Lt(s.value ? e[3] : e[2])]
    }
    , ([a,l,c,u]) => {
        if (n(),
        !a?.length || !l?.length || !c?.length)
            return;
        const f = Bb(u) ? {
            ...u
        } : u;
        t.push(...a.flatMap(d => l.flatMap(h => c.map(p => r(d, h, p, f)))))
    }
    , {
        flush: "post"
    })
      , o = () => {
        i(),
        n()
    }
    ;
    return gr(n),
    o
}
function Qb() {
    const e = Ct(!1)
      , t = Se();
    return t && St( () => {
        e.value = !0
    }
    , t),
    e
}
function Ba(e) {
    const t = Qb();
    return M( () => (t.value,
    !!e()))
}
function Xb(e, t, n={}) {
    const {window: r=_r, ...s} = n;
    let i;
    const o = Ba( () => r && "MutationObserver"in r)
      , a = () => {
        i && (i.disconnect(),
        i = void 0)
    }
      , l = M( () => {
        const d = Lt(e)
          , h = zr(d).map(Kr).filter(Pd);
        return new Set(h)
    }
    )
      , c = de( () => l.value, d => {
        a(),
        o.value && d.size && (i = new MutationObserver(t),
        d.forEach(h => i.observe(h, s)))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , u = () => i?.takeRecords()
      , f = () => {
        c(),
        a()
    }
    ;
    return gr(f),
    {
        isSupported: o,
        stop: f,
        takeRecords: u
    }
}
function Yb(e) {
    return typeof e == "function" ? e : typeof e == "string" ? t => t.key === e : Array.isArray(e) ? t => e.includes(t.key) : () => !0
}
function nE(...e) {
    let t, n, r = {};
    e.length === 3 ? (t = e[0],
    n = e[1],
    r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0,
    n = e[0],
    r = e[1]) : (t = e[0],
    n = e[1]) : (t = !0,
    n = e[0]);
    const {target: s=_r, eventName: i="keydown", passive: o=!1, dedupe: a=!1} = r
      , l = Yb(t);
    return ui(s, i, u => {
        u.repeat && Lt(a) || l(u) && n(u)
    }
    , o)
}
const Jb = Symbol("vueuse-ssr-width");
function Zb() {
    const e = Ia() ? Vb(Jb, null) : null;
    return typeof e == "number" ? e : void 0
}
function e_(e, t={}) {
    const {window: n=_r, ssrWidth: r=Zb()} = t
      , s = Ba( () => n && "matchMedia"in n && typeof n.matchMedia == "function")
      , i = Ct(typeof r == "number")
      , o = Ct()
      , a = Ct(!1)
      , l = c => {
        a.value = c.matches
    }
    ;
    return Rf( () => {
        if (i.value) {
            i.value = !s.value;
            const c = Lt(e).split(",");
            a.value = c.some(u => {
                const f = u.includes("not all")
                  , d = u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/)
                  , h = u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
                let p = !!(d || h);
                return d && p && (p = r >= Vc(d[1])),
                h && p && (p = r <= Vc(h[1])),
                f ? !p : p
            }
            );
            return
        }
        s.value && (o.value = n.matchMedia(Lt(e)),
        a.value = o.value.matches)
    }
    ),
    ui(o, "change", l, {
        passive: !0
    }),
    M( () => a.value)
}
function rE(e, t, n={}) {
    const {root: r, rootMargin: s="0px", threshold: i=0, window: o=_r, immediate: a=!0} = n
      , l = Ba( () => o && "IntersectionObserver"in o)
      , c = M( () => {
        const p = Lt(e);
        return zr(p).map(Kr).filter(Pd)
    }
    );
    let u = Hr;
    const f = Ct(a)
      , d = l.value ? de( () => [c.value, Kr(r), f.value], ([p,E]) => {
        if (u(),
        !f.value || !p.length)
            return;
        const I = new IntersectionObserver(t,{
            root: Kr(E),
            rootMargin: s,
            threshold: i
        });
        p.forEach(b => b && I.observe(b)),
        u = () => {
            I.disconnect(),
            u = Hr
        }
    }
    , {
        immediate: a,
        flush: "post"
    }) : Hr
      , h = () => {
        u(),
        d(),
        f.value = !1
    }
    ;
    return gr(h),
    {
        isSupported: l,
        isActive: f,
        pause() {
            u(),
            f.value = !1
        },
        resume() {
            f.value = !0
        },
        stop: h
    }
}
function t_(e=null, t={}) {
    var n, r, s;
    const {document: i=Gb, restoreOnUnmount: o=f => f} = t
      , a = (n = i?.title) != null ? n : ""
      , l = Hb((r = e ?? i?.title) != null ? r : null)
      , c = !!(e && typeof e == "function");
    function u(f) {
        if (!("titleTemplate"in t))
            return f;
        const d = t.titleTemplate || "%s";
        return typeof d == "function" ? d(f) : Lt(d).replace(/%s/g, f)
    }
    return de(l, (f, d) => {
        f !== d && i && (i.title = u(f ?? ""))
    }
    , {
        immediate: !0
    }),
    t.observe && !t.titleTemplate && i && !c && Xb((s = i.head) == null ? void 0 : s.querySelector("title"), () => {
        i && i.title !== l.value && (l.value = u(i.title))
    }
    , {
        childList: !0
    }),
    gr( () => {
        if (o) {
            const f = o(a, l.value || "");
            f != null && i && (i.title = f)
        }
    }
    ),
    l
}
function sE(e={}) {
    const {window: t=_r, initialWidth: n=Number.POSITIVE_INFINITY, initialHeight: r=Number.POSITIVE_INFINITY, listenOrientation: s=!0, includeScrollbar: i=!0, type: o="inner"} = e
      , a = Ct(n)
      , l = Ct(r)
      , c = () => {
        if (t)
            if (o === "outer")
                a.value = t.outerWidth,
                l.value = t.outerHeight;
            else if (o === "visual" && t.visualViewport) {
                const {width: f, height: d, scale: h} = t.visualViewport;
                a.value = Math.round(f * h),
                l.value = Math.round(d * h)
            } else
                i ? (a.value = t.innerWidth,
                l.value = t.innerHeight) : (a.value = t.document.documentElement.clientWidth,
                l.value = t.document.documentElement.clientHeight)
    }
    ;
    c(),
    zb(c);
    const u = {
        passive: !0
    };
    if (ui("resize", c, u),
    t && o === "visual" && t.visualViewport && ui(t.visualViewport, "resize", c, u),
    s) {
        const f = e_("(orientation: portrait)");
        de(f, () => c())
    }
    return {
        width: a,
        height: l
    }
}
const n_ = e => e
  , r_ = n_;
/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Ld;
const Li = e => Ld = e
  , Od = Symbol();
function Zo(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var Gr;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(Gr || (Gr = {}));
function s_() {
    const e = va(!0)
      , t = e.run( () => he({}));
    let n = []
      , r = [];
    const s = Wn({
        install(i) {
            Li(s),
            s._a = i,
            i.provide(Od, s),
            i.config.globalProperties.$pinia = s,
            r.forEach(o => n.push(o)),
            r = []
        },
        use(i) {
            return this._a ? n.push(i) : r.push(i),
            this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return s
}
const Rd = () => {}
;
function Wc(e, t, n, r=Rd) {
    e.push(t);
    const s = () => {
        const i = e.indexOf(t);
        i > -1 && (e.splice(i, 1),
        r())
    }
    ;
    return !n && ya() && Ru(s),
    s
}
function Kn(e, ...t) {
    e.slice().forEach(n => {
        n(...t)
    }
    )
}
const i_ = e => e()
  , Bc = Symbol()
  , io = Symbol();
function ea(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach( (n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n))
            continue;
        const r = t[n]
          , s = e[n];
        Zo(s) && Zo(r) && e.hasOwnProperty(n) && !Ie(r) && !yn(r) ? e[n] = ea(s, r) : e[n] = r
    }
    return e
}
const o_ = Symbol();
function a_(e) {
    return !Zo(e) || !e.hasOwnProperty(o_)
}
const {assign: cn} = Object;
function l_(e) {
    return !!(Ie(e) && e.effect)
}
function c_(e, t, n, r) {
    const {state: s, actions: i, getters: o} = t
      , a = n.state.value[e];
    let l;
    function c() {
        a || (n.state.value[e] = s ? s() : {});
        const u = ym(n.state.value[e]);
        return cn(u, i, Object.keys(o || {}).reduce( (f, d) => (f[d] = Wn(M( () => {
            Li(n);
            const h = n._s.get(e);
            return o[d].call(h, h)
        }
        )),
        f), {}))
    }
    return l = Md(e, c, t, n, r, !0),
    l
}
function Md(e, t, n={}, r, s, i) {
    let o;
    const a = cn({
        actions: {}
    }, n)
      , l = {
        deep: !0
    };
    let c, u, f = [], d = [], h;
    const p = r.state.value[e];
    !i && !p && (r.state.value[e] = {}),
    he({});
    let E;
    function I(W) {
        let k;
        c = u = !1,
        typeof W == "function" ? (W(r.state.value[e]),
        k = {
            type: Gr.patchFunction,
            storeId: e,
            events: h
        }) : (ea(r.state.value[e], W),
        k = {
            type: Gr.patchObject,
            payload: W,
            storeId: e,
            events: h
        });
        const O = E = Symbol();
        at().then( () => {
            E === O && (c = !0)
        }
        ),
        u = !0,
        Kn(f, k, r.state.value[e])
    }
    const b = i ? function() {
        const {state: k} = n
          , O = k ? k() : {};
        this.$patch(q => {
            cn(q, O)
        }
        )
    }
    : Rd;
    function m() {
        o.stop(),
        f = [],
        d = [],
        r._s.delete(e)
    }
    const C = (W, k="") => {
        if (Bc in W)
            return W[io] = k,
            W;
        const O = function() {
            Li(r);
            const q = Array.from(arguments)
              , S = []
              , G = [];
            function D(Q) {
                S.push(Q)
            }
            function ee(Q) {
                G.push(Q)
            }
            Kn(d, {
                args: q,
                name: O[io],
                store: x,
                after: D,
                onError: ee
            });
            let J;
            try {
                J = W.apply(this && this.$id === e ? this : x, q)
            } catch (Q) {
                throw Kn(G, Q),
                Q
            }
            return J instanceof Promise ? J.then(Q => (Kn(S, Q),
            Q)).catch(Q => (Kn(G, Q),
            Promise.reject(Q))) : (Kn(S, J),
            J)
        };
        return O[Bc] = !0,
        O[io] = k,
        O
    }
      , y = {
        _p: r,
        $id: e,
        $onAction: Wc.bind(null, d),
        $patch: I,
        $reset: b,
        $subscribe(W, k={}) {
            const O = Wc(f, W, k.detached, () => q())
              , q = o.run( () => de( () => r.state.value[e], S => {
                (k.flush === "sync" ? u : c) && W({
                    storeId: e,
                    type: Gr.direct,
                    events: h
                }, S)
            }
            , cn({}, l, k)));
            return O
        },
        $dispose: m
    }
      , x = Vn(y);
    r._s.set(e, x);
    const N = (r._a && r._a.runWithContext || i_)( () => r._e.run( () => (o = va()).run( () => t({
        action: C
    }))));
    for (const W in N) {
        const k = N[W];
        if (Ie(k) && !l_(k) || yn(k))
            i || (p && a_(k) && (Ie(k) ? k.value = p[W] : ea(k, p[W])),
            r.state.value[e][W] = k);
        else if (typeof k == "function") {
            const O = C(k, W);
            N[W] = O,
            a.actions[W] = k
        }
    }
    return cn(x, N),
    cn(ue(x), N),
    Object.defineProperty(x, "$state", {
        get: () => r.state.value[e],
        set: W => {
            I(k => {
                cn(k, W)
            }
            )
        }
    }),
    r._p.forEach(W => {
        cn(x, o.run( () => W({
            store: x,
            app: r._a,
            pinia: r,
            options: a
        })))
    }
    ),
    p && i && n.hydrate && n.hydrate(x.$state, p),
    c = !0,
    u = !0,
    x
}
/*! #__NO_SIDE_EFFECTS__ */
function u_(e, t, n) {
    let r;
    const s = typeof t == "function";
    r = s ? n : t;
    function i(o, a) {
        const l = Ia();
        return o = o || (l ? lt(Od, null) : null),
        o && Li(o),
        o = Ld,
        o._s.has(e) || (s ? Md(e, t, r, o) : c_(e, r, o)),
        o._s.get(e)
    }
    return i.$id = e,
    i
}
function f_(e, t) {
    if (e === t)
        return !0;
    if (e === null || t === null || e.length !== t.length)
        return !1;
    for (let n = 0; n < e.length; ++n)
        if (e[n] !== t[n])
            return !1;
    return !0
}
function Fd(e, t, n, r, s) {
    return (t ** 2 - (s / 2) ** 2) ** .5 - Math.max(s * Math.cos(e) / (2 * Math.sin(e)), n) >= r
}
function d_(e) {
    if (!e)
        return "";
    const t = e.match(/<img.*?src="(.*?)".*?>/);
    return t && (e = e.replace(t[0], "")),
    y_(e)
}
function Dd(e) {
    let t = "";
    if (e) {
        t = e;
        const n = 18;
        t.length > n && (t = t.substring(0, n - 1) + "…")
    }
    return t
}
function h_(e, t) {
    if (e)
        return t;
    {
        const n = []
          , r = [];
        for (let s of t) {
            const i = m_(s);
            n.includes(i) || (n.push(i),
            r.push(s))
        }
        return r
    }
}
function m_(e) {
    const t = {};
    return e.text && (t.text = e.text),
    e.image && (t.image = e.image),
    JSON.stringify(t)
}
function g_(e) {
    let t = "";
    if (e) {
        const n = e.match(/<img.*?src="(.*?)".*?>/);
        n && (t = n[1])
    }
    return t
}
function p_(e, t, n, r, s, i) {
    const o = {};
    return e && (o.text = e),
    t && (o.image = t),
    o
}
function v_(e) {
    const t = [...e];
    let n;
    for (let r = t.length - 1; r > 0; r--)
        n = Math.floor(Math.random() * (r + 1)),
        [t[r],t[n]] = [t[n], t[r]];
    return t
}
function Uc(e) {
    return e.slice(0).sort( (t, n) => {
        const r = t.text || ""
          , s = n.text || "";
        return r.localeCompare(s, "en", {
            numeric: !0,
            sensitivity: "base"
        })
    }
    )
}
function y_(e) {
    return e.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&nbsp;/g, " ")
}
function $s() {
    let t = "";
    const n = "abcdefghjkmnpqrstuvwxyz23456789";
    for (let r = 0; r < 10; r++)
        t += n.charAt(Math.floor(Math.random() * n.length));
    return t
}
function nr(e) {
    return !e || !e.map ? [] : e.map(t => (t.id = t.id || $s(),
    t))
}
function iE(e, t) {
    return e = Math.ceil(e),
    t = Math.floor(t),
    Math.floor(Math.random() * (t - e + 1) + e)
}
function $d(e) {
    return e.reduce( (t, n) => n.weight && (n.enabled === !0 || !("enabled"in n)) ? t + n.weight : t, 0)
}
function b_(e, t) {
    let n = 0;
    if (e.length === 0)
        return 0;
    if (e[0].weight) {
        const r = $d(e)
          , s = e.map(a => 2 * Math.PI * (a.weight ?? 1) / r)
          , i = [];
        n = 0;
        let o = s[0] / 2;
        for (e.forEach( (a, l) => {
            i.push(o),
            o += s[l + 1]
        }
        ),
        n = 0; !(t < i[n] || (n++,
        n > i.length - 1)); )
            ;
    } else {
        const r = 2 * Math.PI / e.length;
        n = Math.round(t / r)
    }
    return n >= e.length && (n = 0),
    n
}
function jd(e) {
    if (!e)
        return "#000000";
    const t = e.charAt(0) === "#" ? e.substring(1, 7) : e
      , n = parseInt(t.substring(0, 2), 16)
      , r = parseInt(t.substring(2, 4), 16)
      , s = parseInt(t.substring(4, 6), 16)
      , o = [n / 255, r / 255, s / 255].map(l => l <= .03928 ? l / 12.92 : ((l + .055) / 1.055) ** 2.4);
    return .2126 * o[0] + .7152 * o[1] + .0722 * o[2] > .179 ? "#000000" : "#FFFFFF"
}
function oE(e) {
    return new Promise(t => setTimeout(t, e))
}
function __(e) {
    return ["spin-only", "copyable", "gallery"].includes(e)
}
function w_(e) {
    return e instanceof Error ? e.message : typeof e == "string" ? e : e instanceof Object ? e.toString() : "An unknown error occurred"
}
function qd(...e) {
    return t => e.reduce( (n, r) => r(n), t)
}
async function aE(e) {
    return new Promise(t => {
        const n = new Image;
        n.onload = function() {
            const r = S_(n.width, n.height, 200);
            Vd(r, n),
            t(Ha(r, e, .5))
        }
        ,
        n.src = e
    }
    )
}
async function lE(e) {
    return new Promise(t => {
        const n = new Image;
        n.onload = () => {
            const r = Ua(370);
            k_(n) || Vd(r, n, "blur(4px)"),
            Wd(r, n, !0),
            t(Ha(r, null, .5))
        }
        ,
        n.src = e
    }
    )
}
async function cE(e) {
    return new Promise(t => {
        const n = new Image;
        n.onload = () => {
            const r = Ua(700);
            Wd(r, n, !1),
            t(Ha(r, null, .7))
        }
        ,
        n.src = e
    }
    )
}
function Tr(e) {
    const t = document.createElement("canvas");
    return t.width = e.canvas.width,
    t.height = e.canvas.height,
    t
}
function ar(e) {
    const t = document.createElement("canvas").getContext("2d");
    t.drawImage(e, 0, 0);
    const n = t.getImageData(0, 0, 1, 1).data;
    return T_(n[0], n[1], n[2]) ? "#FFFFFFFF" : A_(n[0], n[1], n[2], n[3])
}
function C_(e) {
    const t = e.match(/#\w\w\w\w\w\w(\w\w)/);
    return t ? parseInt(t[1], 16) / 255 * 100 < 50 : !1
}
function uE(e) {
    const n = Ua(300)
      , r = n.getContext("2d");
    r.fillStyle = "white",
    r.fillRect(0, 0, 300, 300),
    r.fillStyle = "black",
    r.textBaseline = "middle",
    r.textAlign = "center";
    const s = 300 * .9;
    return E_(r, e, s),
    r.fillText(e, 300 / 2, 300 / 2, s),
    n.toDataURL("image/webp", .5)
}
function oo(e) {
    return new Promise(async t => {
        const n = new Image;
        n.setAttribute("crossOrigin", "anonymous"),
        n.onload = () => t(n),
        n.src = e
    }
    )
}
function ao(e) {
    return ar(e).slice(7) === "00"
}
function E_(e, t, n) {
    for (let r = Math.round(n / 2); r >= n / 20 && (e.font = `${r}px Quicksand, sans-serif`,
    !(e.measureText(t).width <= n)); r--)
        ;
}
function S_(e, t, n) {
    const r = n / e
      , s = n / t
      , i = Math.max(r, s)
      , o = document.createElement("canvas");
    return o.width = e * i,
    o.height = t * i,
    o
}
function Ua(e) {
    const t = document.createElement("canvas");
    return t.width = e,
    t.height = e,
    t
}
function k_(e) {
    const t = ar(e);
    return t === "#FFFFFFFF" || t.slice(7) === "FF"
}
function x_(e) {
    return e.getImageData(0, 0, 1, 1).data[3] < 5
}
function T_(e, t, n) {
    return e === t && e === n && e > 230
}
function A_(e, t, n, r) {
    return `#${ks(e)}${ks(t)}${ks(n)}${ks(r)}`
}
const ks = e => e.toString(16).padStart(2, "0");
function Vd(e, t, n) {
    const r = e.getContext("2d");
    r.save(),
    n && (r.filter = n),
    r.drawImage(t, -2, -2, e.width + 4, e.height + 4),
    r.restore()
}
function Wd(e, t, n) {
    const r = e.width;
    let s = r / Math.min(t.width, t.height);
    n && (s = r / Math.max(t.width, t.height));
    const i = t.width * s
      , o = (r - i) / 2
      , a = t.height * s
      , l = (r - a) / 2;
    e.getContext("2d").drawImage(t, o, l, i, a)
}
function Ha(e, t, n) {
    let r;
    return x_(e.getContext("2d")) ? r = e.toDataURL("image/webp", .5) : r = e.toDataURL("image/jpeg", n),
    t && t.length < r.length ? t : r
}
function I_(e, t, n, r, s, i) {
    const o = N_(e, n, r, s, i)
      , a = P_(e, t, r, s, i);
    return `${L_(o, a)}px Quicksand, sans-serif`
}
const lo = new Map;
function N_(e, t, n, r, s) {
    const i = JSON.stringify({
        texts: t,
        wheelRadius: n,
        hubRadius: r,
        smallestAngle: s
    });
    if (lo.get(i))
        return lo.get(i) || [10];
    let o = "Quicksand, sans-serif";
    const a = t.map(c => Bd(e, c, o, n, r, s))
      , l = F_(a);
    return lo.set(i, l),
    l
}
function P_(e, t, n, r, s) {
    return Bd(e, t, "Quicksand, sans-serif", n, r, s)
}
function L_(e, t) {
    for (let n = e.length - 1; n >= 0; n--)
        if (e[n] <= t)
            return e[n];
    return e[0]
}
const co = new Map;
function Bd(e, t, n, r, s, i) {
    const o = JSON.stringify({
        displayText: t,
        fontName: n,
        wheelRadius: r,
        hubRadius: s,
        smallestAngle: i
    });
    if (co.get(o))
        return co.get(o) || 10;
    const a = O_(e, t, n, r, s, i);
    return co.set(o, a),
    a
}
function O_(e, t, n, r, s, i) {
    return R_(e, r, s, i, n, t, 3, 200)
}
function R_(e, t, n, r, s, i, o, a) {
    let l;
    for (; ; ) {
        l = Math.round((o + a) / 2);
        let c = l + "px " + s;
        if (M_(e, t, n, r / 2, i, c, l) ? o = l : a = l,
        Math.abs(a - o) < 2)
            break
    }
    return l
}
function M_(e, t, n, r, s, i, o) {
    if (!s)
        return !0;
    e.font = i;
    const a = e.measureText(` ${Dd(s)} `).width;
    return Fd(r, t, n, a, o)
}
function F_(e) {
    const t = [...e].sort( (s, i) => s - i)
      , n = [];
    let r = t[0];
    n.push(r);
    for (let s = 1; s < t.length; s++) {
        const i = t[s];
        i > r * 2 && (n.push(i),
        r = i)
    }
    return n
}
function Hc(e) {
    const t = e.context;
    t.save(),
    e.wheelConfig.type === "image" && D_(e),
    e.wheelConfig.type === "color" && (e.image ? W_(e.image) ? $_(e) : j_(e) : q_(e)),
    t.restore()
}
function D_(e) {
    Ka(e),
    Oi(e, {
        fill: "white",
        outline: "black"
    }),
    Ri(e)
}
function $_(e) {
    za(e),
    Ka(e),
    Oi(e, {
        fill: "white",
        outline: "black"
    }),
    Ri(e)
}
function j_(e) {
    if (!e.image)
        return;
    const t = Ud(e.image);
    za({
        ...e,
        color: e.entry.color || t
    }),
    Ka(e),
    Oi(e, {
        fill: "white",
        outline: "black"
    }),
    Ri(e)
}
function q_(e) {
    za(e);
    const t = {
        fill: jd(e.color),
        outline: ""
    };
    Oi(e, t),
    Ri(e)
}
function za(e) {
    const t = e.context;
    t.beginPath(),
    t.moveTo(0, 0),
    t.arc(0, 0, e.wheelRadius, -e.radians / 2, e.radians / 2),
    t.lineTo(0, 0),
    t.fillStyle = e.color,
    t.fill()
}
function Oi(e, t) {
    if (!e.entry.text)
        return;
    const n = e.context
      , r = Dd(e.entry.text ?? "");
    n.font = I_(n, r, e.displayEntries.map(s => s.text || ""), e.wheelRadius, e.hubRadius, e.radians),
    n.lineJoin = "round",
    n.textBaseline = "middle",
    n.textAlign = "end",
    t.outline && (n.lineWidth = 4,
    n.strokeStyle = t.outline,
    n.strokeText(` ${r} `, e.wheelRadius, 0)),
    n.fillStyle = t.fill,
    n.fillText(` ${r} `, e.wheelRadius, 0)
}
function Ka(e) {
    if (!e.image)
        return;
    const t = e.radians / 2
      , n = e.wheelRadius
      , r = e.hubRadius;
    let s = V_(t, n, r, e.image.height / e.image.width);
    e.context.drawImage(e.image, s.x, s.y, s.w, s.h)
}
function Ri(e) {
    if (!e.wheelConfig.drawOutlines)
        return;
    const t = e.context;
    t.beginPath(),
    t.moveTo(0, 0),
    t.arc(0, 0, e.wheelRadius, -e.radians / 2, e.radians / 2),
    t.lineTo(0, 0),
    t.lineWidth = 1,
    t.strokeStyle = "#333333",
    t.stroke()
}
function V_(e, t, n, r) {
    let s, i = 0;
    for (s = t; s > 0 && (i = s * r,
    !Fd(e, t, n, s, i)); s--)
        ;
    return {
        x: Math.max(i * Math.cos(e) / (2 * Math.sin(e)), n),
        y: -i / 2,
        w: s,
        h: i
    }
}
function Ud(e) {
    return ar(e)
}
function W_(e) {
    return C_(Ud(e))
}
const B_ = {
    XS: .01,
    S: .2,
    M: .3,
    L: .4,
    XL: .5,
    XXL: .6
};
class U_ {
    images = {};
    emptyImage = new Image;
    constructor() {
        this.emptyImage.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    }
    addImage(t) {
        this.images[t] = new Image,
        this.images[t].src = t
    }
    getImage(t) {
        if (t)
            return t in this.images || this.addImage(t),
            this.images[t] && this.images[t].naturalHeight > 0 ? this.images[t] : this.emptyImage
    }
}
class H_ {
    imageCache = new U_;
    entries = [];
    imageDataCache = {};
    wheelImage = null;
    pointerImage = null;
    coverPlateImage = null;
    wheelShadowImage = null;
    watermarkImage = null;
    draw(t, n, r, s, i, o="") {
        const a = t.canvas.width * .44
          , l = this.getHubRadius(i, a);
        this.drawBackground(t),
        i.drawShadow && this.drawWheelShadow(t, a),
        this.drawCoverImage(t, i, n, a),
        this.drawWheel(t, i, n, a, l, s, r),
        this.drawPointer(t, i, a),
        this.drawCenterImage(t, i, n, l);
        try {
            this.drawCoverPlate(t, a, l, s, r)
        } catch {}
        o && this.drawWatermark(t, o, i)
    }
    getHubRadius(t, n) {
        if (t.type === "image")
            return 0;
        const r = B_[t.hubSize] || .2;
        return Math.round(r * n)
    }
    refresh() {
        this.wheelImage = null,
        this.pointerImage = null,
        this.coverPlateImage = null
    }
    drawBackground(t) {
        t.clearRect(0, 0, t.canvas.width, t.canvas.height)
    }
    drawWheelShadow(t, n) {
        this.wheelShadowImage || (this.wheelShadowImage = Tr(t),
        this.drawWheelShadowNoCache(this.wheelShadowImage.getContext("2d"), n)),
        t.drawImage(this.wheelShadowImage, 0, 0)
    }
    drawWheelShadowNoCache(t, n) {
        const r = t.canvas.width / 2
          , s = t.canvas.height / 2
          , i = t.createRadialGradient(r, s, n, r, s + 4, n + 8);
        i.addColorStop(0, "#00000034"),
        i.addColorStop(1, "#00000000"),
        t.fillStyle = i,
        t.fillRect(0, 0, t.canvas.width, t.canvas.height)
    }
    drawWheel(t, n, r, s, i, o, a) {
        this.wheelImage || (this.wheelImage = Tr(t),
        this.entries = a.slice(0),
        this.drawWheelNoCache({
            context: this.wheelImage.getContext("2d"),
            wheelConfig: n,
            wheelRadius: s,
            hubRadius: i,
            allEntries: o,
            displayEntries: a
        }));
        const l = t.canvas.width
          , c = t.canvas.height;
        t.save(),
        t.translate(l / 2, c / 2),
        t.rotate(r),
        t.translate(-l / 2, -c / 2),
        t.drawImage(this.wheelImage, 0, 0),
        t.restore()
    }
    drawWheelNoCache(t) {
        this.drawSlices(t),
        this.drawCenterCircle(t.context, t.wheelConfig, t.hubRadius)
    }
    drawCoverImage(t, n, r, s) {
        if (n.type === "color")
            return;
        const i = this.imageCache.getImage(n.getCoverImage());
        i && (t.save(),
        t.translate(t.canvas.width / 2, t.canvas.height / 2),
        t.rotate(r),
        t.beginPath(),
        t.arc(0, 0, s - 1, 0, Math.PI * 2, !0),
        t.clip(),
        t.drawImage(i, -s, -s, s * 2, s * 2),
        t.restore())
    }
    drawSlices(t) {
        const n = t.context;
        n.save(),
        n.translate(n.canvas.width / 2, n.canvas.height / 2),
        t.wheelConfig.isAdvanced ? this.drawAdvancedSlices(t) : this.drawBasicSlices(t),
        n.restore()
    }
    drawBasicSlices(t) {
        const n = 2 * Math.PI / t.displayEntries.length;
        for (const [r,s] of t.displayEntries.entries()) {
            const i = t.wheelConfig.getEntryColor(r);
            Hc({
                ...t,
                entry: s,
                color: i,
                radians: n,
                image: this.getImageFromData(s.image)
            }),
            t.context.rotate(-n)
        }
    }
    drawAdvancedSlices(t) {
        const n = $d(this.entries)
          , r = [];
        this.entries.forEach( (s, i) => {
            r[i] = 2 * Math.PI * (s.weight || 1) / n
        }
        );
        for (const [s,i] of t.displayEntries.entries()) {
            const o = r[s] / 2 + r[s + 1] / 2
              , a = i.color || t.wheelConfig.getEntryColor(s);
            Hc({
                ...t,
                entry: i,
                color: a,
                radians: r[s],
                image: this.getImageFromData(i.image)
            }),
            t.context.rotate(-o)
        }
    }
    drawCenterCircle(t, n, r) {
        n.type !== "image" && (t.save(),
        t.translate(t.canvas.width / 2, t.canvas.height / 2),
        t.fillStyle = "white",
        t.beginPath(),
        t.arc(0, 0, r, 0, Math.PI * 2),
        t.fill(),
        n.drawOutlines && (t.lineWidth = 2,
        t.strokeStyle = "#333333",
        t.stroke()),
        t.restore())
    }
    drawPointer(t, n, r) {
        t.canvas.width < 200 || (this.pointerImage || (this.pointerImage = Tr(t),
        this.drawPointerNoCache(this.pointerImage.getContext("2d"), n, r)),
        t.drawImage(this.pointerImage, 0, 0))
    }
    drawPointerNoCache(t, n, r) {
        t.save(),
        t.translate(t.canvas.width / 2, t.canvas.height / 2),
        n.drawShadow && (t.shadowColor = "#444",
        t.shadowOffsetY = 4,
        t.shadowBlur = 10),
        t.beginPath(),
        t.moveTo(r - 15, 0),
        t.lineTo(r + 25, -20),
        t.lineTo(r + 25, 20),
        t.lineTo(r - 15, 0),
        t.lineWidth = n.drawOutlines ? 2 : 1,
        t.strokeStyle = "#333333",
        t.stroke(),
        t.fillStyle = "#BBB",
        t.fill(),
        t.restore()
    }
    drawCoverPlate(t, n, r, s, i) {
        i.length !== s.length && (!this.coverPlateImage && i.length > 0 && (this.coverPlateImage = Tr(t),
        this.drawCoverPlateNoCache(this.coverPlateImage.getContext("2d"), n, r, i)),
        this.coverPlateImage && t.drawImage(this.coverPlateImage, 0, 0))
    }
    drawCoverPlateNoCache(t, n, r, s) {
        const i = this.imageCache.getImage("/images/brushed-metal.png");
        if (!i)
            return;
        const o = s.length
          , a = Math.max(4 * Math.PI / o, Math.PI / 4);
        t.save(),
        t.translate(t.canvas.width / 2, t.canvas.height / 2),
        t.scale(-1, 1),
        t.shadowColor = "#444",
        t.shadowOffsetY = 4,
        t.shadowBlur = 10,
        t.lineWidth = n - r + 10,
        t.strokeStyle = t.createPattern(i, "repeat"),
        t.beginPath(),
        t.arc(0, 0, (n + r) / 2, -a / 2, a / 2),
        t.stroke(),
        t.restore()
    }
    drawCenterImage(t, n, r, s) {
        if (n.type === "image")
            return;
        const i = this.imageCache.getImage(n.getWheelImage());
        i && (t.save(),
        t.translate(t.canvas.width / 2, t.canvas.height / 2),
        t.rotate(r),
        t.beginPath(),
        t.arc(0, 0, s - 1, 0, Math.PI * 2, !0),
        t.clip(),
        t.drawImage(i, -s, -s, s * 2, s * 2),
        t.restore())
    }
    drawWatermark(t, n, r) {
        n && (this.watermarkImage || (this.watermarkImage = Tr(t),
        this.drawWatermarkNoCache(this.watermarkImage.getContext("2d"), n, r)),
        t.drawImage(this.watermarkImage, 0, 0))
    }
    drawWatermarkNoCache(t, n, r) {
        t.save(),
        t.textAlign = "end",
        t.font = "14px Quicksand, sans-serif",
        t.fillStyle = jd(r.pageBackgroundColor),
        t.fillText(n, t.canvas.width - 10, t.canvas.height - 10),
        t.restore()
    }
    getImageFromData(t) {
        if (t) {
            if (!this.imageDataCache[t]) {
                const n = new Image
                  , r = this;
                n.onload = () => r.clearCachedWheelImage(),
                n.setAttribute("crossOrigin", "anonymous"),
                n.src = t,
                this.imageDataCache[t] = n
            }
            return this.imageDataCache[t]
        }
    }
    clearCachedWheelImage() {
        this.wheelImage = null
    }
}
class _t {
    afterSpinSound = "applause-sound-soft";
    afterSpinSoundVolume = 50;
    allowDuplicates = !0;
    animateWinner = !1;
    autoRemoveWinner = !1;
    centerText = "";
    colorSettings = [{
        color: "#3369E8",
        enabled: !0
    }, {
        color: "#D50F25",
        enabled: !0
    }, {
        color: "#EEB211",
        enabled: !0
    }, {
        color: "#009925",
        enabled: !0
    }, {
        color: "#000000",
        enabled: !1
    }, {
        color: "#000000",
        enabled: !1
    }];
    coverImageName = "";
    coverImageType = "";
    customCoverImageDataUri = "";
    customPictureDataUri = "";
    customPictureName = "";
    description = "";
    displayHideButton = !0;
    displayRemoveButton = !0;
    displayWinnerDialog = !0;
    drawOutlines = !1;
    drawShadow = !0;
    duringSpinSound = "ticking-sound";
    duringSpinSoundVolume = 50;
    entries = [{
        text: "Ali"
    }, {
        text: "Beatriz"
    }, {
        text: "Charles"
    }, {
        text: "Diya"
    }, {
        text: "Eric"
    }, {
        text: "Fatima"
    }, {
        text: "Gabriel"
    }, {
        text: "Hanna"
    }];
    galleryPicture = "/images/none.png";
    hubSize = "S";
    isAdvanced = !1;
    launchConfetti = !0;
    maxNames = 1e3;
    pageBackgroundColor = "#FFFFFF";
    pictureType = "none";
    playClickWhenWinnerRemoved = !1;
    showTitle = !0;
    slowSpin = !1;
    spinTime = 10;
    title = "";
    type = "color";
    winnerMessage = "";
    constructor(t) {
        t && this.copyPropertiesFrom(t)
    }
    loadJson(t) {
        try {
            const n = JSON.parse(t);
            n.entries?.length > 0 && this.copyPropertiesFrom(n)
        } catch (n) {
            console.error(n)
        }
    }
    getJson() {
        return JSON.stringify(this)
    }
    getValues() {
        return JSON.parse(this.getJson())
    }
    loadValues(t) {
        this.copyPropertiesFrom(JSON.parse(JSON.stringify(t)))
    }
    clone() {
        const t = new _t;
        return t.loadValues(this.getValues()),
        t
    }
    hasOnlyDefaultEntries() {
        return f_(this.getTexts(), new _t().getTexts())
    }
    setUploadedCenterImage(t, n) {
        this.customPictureName = t,
        this.customPictureDataUri = n,
        this.pictureType = "uploaded",
        this.centerText = ""
    }
    setUploadedBackgroundImage(t, n) {
        this.coverImageName = t,
        this.customCoverImageDataUri = n,
        this.coverImageType = "uploaded"
    }
    setGalleryBackgroundImage(t) {
        this.coverImageType = "gallery",
        this.coverImageName = t
    }
    setGalleryCenterImage(t) {
        this.centerText = "",
        this.pictureType = "gallery",
        this.galleryPicture = t,
        this.customPictureName = "",
        this.customPictureDataUri = ""
    }
    getWheelImage() {
        return this.pictureType === "none" ? null : this.pictureType === "gallery" && this.galleryPicture ? this.galleryPicture : (this.pictureType === "uploaded" || this.pictureType === "text") && this.customPictureDataUri ? this.customPictureDataUri : null
    }
    getCoverImage() {
        return this.coverImageType === "gallery" && this.coverImageName ? this.coverImageName : this.coverImageType === "uploaded" && this.customCoverImageDataUri ? this.customCoverImageDataUri : null
    }
    shouldPlayTicks() {
        return this.duringSpinSound === "ticking-sound"
    }
    setColorValues(t) {
        if (t)
            for (this.colorSettings = t.map(n => ({
                color: n,
                enabled: !0
            })); this.colorSettings.length < 6; )
                this.colorSettings.push({
                    color: "#000000",
                    enabled: !1
                })
    }
    getCoalescedColors() {
        const t = this.colorSettings.filter(n => n.enabled).map(n => n.color);
        return t.length > 0 ? t : ["#CCCCCC"]
    }
    isTooBigForDatabase() {
        return this.getJson().length > 99e4
    }
    getTexts() {
        return this.entries.map(t => t.text).filter(t => t)
    }
    getFirstText() {
        const t = this.getTexts();
        return t.length > 0 ? t[0] : ""
    }
    copyPropertiesFrom(t) {
        Object.assign(this, t),
        this.convertOldData()
    }
    usesAdvancedFeatures() {
        for (const [t,n] of this.entries.entries())
            if (n.color && n.color !== this.getEntryColor(t) || "weight"in n && n.weight !== 1 || n.enabled === !1 || n.sound || n.message)
                return !0;
        return !1
    }
    getEntryColor(t) {
        const n = this.getCoalescedColors();
        return this.entries.length > 1 && this.isLastSliceAndSameColorAsFirstSlice(t) && n.length > 2 ? n[1] : n[t % n.length]
    }
    isLastSliceAndSameColorAsFirstSlice(t) {
        if (t === this.entries.length - 1) {
            const n = this.getCoalescedColors();
            return t % n.length === 0
        }
        return !1
    }
    convertOldData() {
        const t = this;
        Array.isArray(t.names) && (t.entries = t.names.map(n => p_(d_(n), g_(n))),
        delete t.names),
        t.maxNames = Number(t.maxNames),
        t.spinTime = Number(t.spinTime),
        delete t.displayHat,
        t.playTicks === !1 && (t.duringSpinSound = "no-sound"),
        delete t.playTicks,
        t.playCheers === !1 && (t.afterSpinSound = "no-sound"),
        delete t.playCheers,
        t.hasOwnProperty("showTitle") || (t.showTitle = !0),
        t.type === "image" && !t.coverImageType && (t.coverImageType = "gallery"),
        t.isAdvanced && t.entries.length > 0 && (t.entries[0].hasOwnProperty("enabled") || t.entries.forEach(n => {
            n.enabled = !0
        }
        )),
        t.drawShadow === void 0 && (t.drawShadow = !0),
        t.entries.forEach(n => {
            n.text && (n.text = n.text.replace(`
`, "").replace("\r", ""))
        }
        ),
        nr(t.entries),
        t.entries = t.entries.filter(n => n.text || n.image || "enabled"in n)
    }
    removeImages() {
        for (const t of this.entries)
            if ("image"in t) {
                if (!t.text?.trim())
                    return !1;
                delete t.image
            }
        return this.type === "image" && (this.type = "color"),
        this.customPictureDataUri = "",
        this.customCoverImageDataUri = "",
        !0
    }
}
const zc = Object.fromEntries(Object.entries(new _t().getValues()).map( ([e,t]) => [e, typeof t]));
function Hd(e) {
    const t = new _t(Object.fromEntries(Object.entries(structuredClone(e)).filter( ([n,r]) => n in zc && typeof r === zc[n])));
    for (const n of t.entries)
        delete n.id;
    for (const n of t.colorSettings)
        n.color.length === 4 && (n.color = `#${n.color[1]}${n.color[1]}${n.color[2]}${n.color[2]}${n.color[3]}${n.color[3]}`);
    return t
}
class Ar {
    array;
    length;
    elementJsonCache;
    constructor(t) {
        this.array = t.slice(0),
        this.length = t.length,
        this.elementJsonCache = null
    }
    getElement(t) {
        for (; t < 0; )
            t += this.array.length;
        for (; t >= this.array.length; )
            t -= this.array.length;
        return this.array[t]
    }
    setElement(t, n) {
        for (; t < 0; )
            t += this.array.length;
        for (; t >= this.array.length; )
            t -= this.array.length;
        this.array[t] = n,
        this.elementJsonCache = null
    }
    // edit
    getArray() {
        // return this.array
        const cleanedData = this.array.map(item => ({
            ...item,
            text: item.text.replace(/[\r\n]+/g, '').trim()
        }));
        return cleanedData;
    }
    slice(t, n) {
        const r = [];
        for (let s = t; s < n; s++)
            r.push(this.getElement(s));
        return r
    }
    getNextElement(t) {
        this.elementJsonCache || (this.elementJsonCache = this.getElementJson());
        const n = JSON.stringify(t)
          , r = this.elementJsonCache.findIndex(s => s === n);
        return this.getElement(r + 1)
    }
    getElementJson() {
        return this.array.map(t => JSON.stringify(t))
    }
}
class z_ {
    startIndex;
    endIndex;
    length;
    index;
    constructor(t, n, r) {
        this.startIndex = t,
        this.endIndex = n,
        this.length = r,
        this.index = this.startIndex
    }
    isDone() {
        return this.index === this.endIndex
    }
    getIndex() {
        return this.index
    }
    increment() {
        this.index += 1,
        this.index >= this.length && (this.index -= this.length)
    }
}
class K_ {
    allEntries;
    maxSlices;
    prevIndexAtPointer;
    displayEntries;
    constructor() {
        this.allEntries = new Ar([]),
        this.maxSlices = 1e6,
        this.prevIndexAtPointer = -1,
        this.displayEntries = new Ar([])
    }
    setEntries(t, n, r) {
        this.maxSlices = n,
        this.allEntries = new Ar(h_(r, t)),
        this.allEntries.length <= n || this.entriesHaveUnequalWeight(t) ? this.displayEntries = this.allEntries : this.displayEntries = new Ar(this.allEntries.slice(0, n))
    }
    getDisplayEntries() {
        return this.displayEntries.getArray()
    }
    getNumberOfDisplayEntries() {
        return this.getDisplayEntries().length
    }
    getAllEntries() {
        return this.allEntries.getArray()
    }
    tick(t) {
        if (this.maxSlices >= this.allEntries.length || t === this.prevIndexAtPointer)
            return !1;
        {
            const n = new z_(this.prevIndexAtPointer,t,this.displayEntries.length);
            for (; !n.isDone(); ) {
                n.increment();
                const r = n.getIndex()
                  , s = Math.floor(r + this.maxSlices / 2) % this.maxSlices
                  , i = this.displayEntries.getElement(s - 1)
                  , o = this.allEntries.getNextElement(i);
                this.displayEntries.setElement(s, o)
            }
            return this.prevIndexAtPointer = t,
            !0
        }
    }
    entriesHaveUnequalWeight(t) {
        return t.length === 0 || !t[0].weight ? !1 : t.find(n => n.weight !== 1)
    }
    calculateFinalAngle(initialAngle, maxAngle, stateTime, initialSpeed) {
        const deceleration = Math.exp(Math.log(15e-5 / initialSpeed) / stateTime);
        let speed = initialSpeed;
        let angle = initialAngle;

        for (let i = 0; i < stateTime; i++) {
                angle += speed;
                speed *= deceleration;
                if (angle >= maxAngle) {
                        angle -= maxAngle;
                }
        }

        return angle;
    }
    findInitialAngle(targetAngle, initialSpeed, stateTime, tolerance = 1e-15, maxIterations = 1000) {
        const maxAngle = 2 * Math.PI;
        let initialAngle = 0;  // Starting guess
        let currentIteration = 0;

        while (currentIteration < maxIterations) {
                let currentAngle = this.calculateFinalAngle(initialAngle, maxAngle, stateTime, initialSpeed);
                let angleDifference = currentAngle - targetAngle;

                if (Math.abs(angleDifference) < tolerance) {
                        break;
                }

                let delta = 1e-10;
                let anglePlusDelta = this.calculateFinalAngle(initialAngle + delta, maxAngle, stateTime, initialSpeed);
                let derivative = (anglePlusDelta - currentAngle) / delta;

                initialAngle -= angleDifference / derivative;

                if (initialAngle >= maxAngle) {
                        initialAngle -= maxAngle;
                } else if (initialAngle < 0) {
                        initialAngle += maxAngle;
                }

                currentIteration++;
        }

        if (currentIteration >= maxIterations) {
                console.log("Warning: Maximum iterations reached");
        }

        return initialAngle;
    }
    getAngleForName(names) {
        const entries = this.getDisplayEntries();
        const results = [];

        names.forEach(name => {
                const lowerCaseName = name.toLowerCase();
                const resultName = []

                const indices = entries
                                    .map((entry, index) => entry.text.toLowerCase() === lowerCaseName ? index : -1)
                                    .filter(index => index !== -1);
                if (indices.length === 0) return null;
                
                const totalEntries = entries.length;
                const anglePerEntry = 2 * Math.PI / totalEntries;
                const variableX = 0.01 * 10 / totalEntries;
                
                indices.forEach(index => {
                    const indexResult = []

                    if (index == 0) {
                        let startAngle = 2 * Math.PI - anglePerEntry / 2 + variableX;
                        let endAngle = 2 * Math.PI;
                        let ranAngle = Math.random() * (endAngle - startAngle) + startAngle;

                        indexResult.push({ name, startAngle, endAngle, ranAngle });

                        startAngle = 0;
                        endAngle = index * anglePerEntry + anglePerEntry / 2 - variableX;
                        ranAngle = Math.random() * (endAngle - startAngle) + startAngle;

                        indexResult.push({ name, startAngle, endAngle, ranAngle });
                    } else {
                        const startAngle = index * anglePerEntry - anglePerEntry / 2 + variableX;
                        const endAngle = index * anglePerEntry + anglePerEntry / 2 - variableX;
                        const ranAngle = Math.random() * (endAngle - startAngle) + startAngle;

                        indexResult.push({ name, startAngle, endAngle, ranAngle });
                    }

                    resultName.push(indexResult[Math.floor(Math.random() * indexResult.length)]);
                })

                const randomIndex = Math.floor(Math.random() * resultName.length);

                results.push(resultName[randomIndex])
        });

        if (results.length === 0) return null;

        for (let i = results.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [results[i], results[j]] = [results[j], results[i]];
        }

        const randomIndex = Math.floor(Math.random() * results.length);
        return results[randomIndex];
    }
    // edit
    setRandomPosition(t) {
        // if (this.maxSlices < this.allEntries.length) {
        //     const n = this.getRandomInt(t, 0, this.allEntries.length - 1);
        //     this.displayEntries = new Ar(this.allEntries.slice(n, n + this.maxSlices))
        // }

        saveAllEntries(this.getDisplayEntries());
        const stateTime = t.getStateTimeLengths();
        const randomTarget = 2 * Math.random() * Math.PI;
        const targetAngle = statusSpin && dataSpin ? this.getAngleForName(dataSpin)?.ranAngle ?? randomTarget : randomTarget;
        // console.log(targetAngle);
        // console.log(this.getAngleForName(dataSpin));
        t.angle = this.findInitialAngle(targetAngle, t.speed, stateTime.decelerating);
    }
    getRandomInt(t, n, r) {
        return n = Math.ceil(n),
        r = Math.floor(r),
        Math.floor(t() * (r - n + 1) + n)
    }
}
let fE = class {
    angle = 0;
    speed = 0;
    fps = 60;
    watermark = "";
    wheelConfig = new _t;
    state;
    wheelPainter = new H_;
    entryPicker = new K_;
    indexFromLastTick = 0;
    indexFromThisTick = 0;
    nameChangedCallback;
    doneSpinningCallback;
    onStateChangeCallback;
    constructor(t, n, r) {
        this.state = new zd(this),
        this.nameChangedCallback = t || ( () => {}
        ),
        this.doneSpinningCallback = n || (s => {}
        ),
        this.onStateChangeCallback = r || (s => {}
        )
    }
    setEntries(t, n, r) {
        if (!this.state.isSpinning()) {
            const s = t.filter(i => i.enabled !== !1);
            this.entryPicker.setEntries(s, n, r),
            this.refresh()
        }
    }
    refresh() {
        this.wheelPainter.refresh()
    }
    configure(t, n, r) {
        this.state.isSpinning() || (this.wheelConfig = t,
        n && (this.fps = n),
        r && (this.watermark = r),
        this.refresh())
    }
    tick(t) {
        return this.state.tick(this, t),
        this.angle > Math.PI * 2 && (this.angle -= Math.PI * 2),
        this.indexFromLastTick = this.indexFromThisTick,
        this.indexFromThisTick = this.getIndexAtPointer(),
        this.indexFromThisTick != this.indexFromLastTick && this.nameChangedCallback(),
        this.entryPicker.tick(this.getIndexAtPointer()) && this.refresh(),
        {
            state: this.state.constructor.name,
            angle: this.angle
        }
    }
    setNewState(t) {
        this.state = t
    }
    click() {
        this.state.click(this)
    }
    spinIsDone() {
        this.doneSpinningCallback(this.getEntryAtPointer())
    }
    isSpinning() {
        return this.state.isSpinning()
    }
    setSpinState(t) {
        this.state.receiveFromNetwork(this, t)
    }
    setAngle(t) {
        this.angle = t,
        this.entryPicker.setRandomPosition(Math.random)
    }
    getIndexAtPointer() {
        return b_(this.entryPicker.getDisplayEntries(), this.angle)
    }
    getEntryAtPointer() {
        return this.entryPicker.getDisplayEntries()[this.getIndexAtPointer()]
    }
    getDisplayEntries() {
        return this.entryPicker.getDisplayEntries()
    }
    resetRotation() {
        this.angle = 0
    }
    getStateTimeLengths() {
        const t = this.wheelConfig.spinTime * this.fps
          , n = Math.min(this.fps, t / 3);
        return {
            accelerating: n,
            decelerating: t - n
        }
    }
    draw(t) {
        this.wheelConfig && this.wheelPainter.draw(t, this.angle, this.entryPicker.getDisplayEntries(), this.entryPicker.getAllEntries(), this.wheelConfig, this.watermark)
    }
}
;
class rn {
    name = "NullSpinState";
    tick(t, ...n) {}
    click(t) {}
    receiveFromNetwork(t, n) {}
    isSpinning() {
        return !1
    }
}
class zd extends rn {
    name = "InitialDemoSpinState";
    constructor(t) {
        super(),
        t.speed = .005
    }
    tick(t) {
        t.angle += t.speed
    }
    click(t) {
        t.setNewState(new Ga(t))
    }
    receiveFromNetwork(t, n) {
        n.name === "Spinning" && t.setNewState(new Qa(t,n.decelAngle)),
        n.name === "Stopped" && t.setNewState(new Gd(t,n.position))
    }
}
class Ga extends rn {
    name = "AcceleratingState";
    age;
    MAX_AGE;
    constructor(t) {
        super(),
        this.age = 0,
        this.MAX_AGE = t.getStateTimeLengths().accelerating,
        t.onStateChangeCallback({
            name: "Spinning"
        })
    }
    tick(t, n) {
        if (t.angle += t.speed,
        this.age <= this.MAX_AGE) {
            const r = t.wheelConfig.slowSpin ? .001 : .6 / t.fps;
            t.speed += r,
            this.age += 1
        } else
            t.setNewState(new G_(t,n))
    }
    isSpinning() {
        return !0
    }
}
class Qa extends rn {
    name = "SpectatorAcceleratingState";
    age;
    MAX_AGE;
    decelAngle;
    constructor(t, n) {
        super(),
        this.age = 0,
        this.MAX_AGE = t.getStateTimeLengths().accelerating,
        this.decelAngle = n
    }
    tick(t) {
        if (t.angle += t.speed,
        this.age <= this.MAX_AGE) {
            const n = t.wheelConfig.slowSpin ? .001 : .6 / t.fps;
            t.speed += n,
            this.age += 1
        } else
            t.setNewState(new Q_(t,this.decelAngle))
    }
    receiveFromNetwork(t, n) {
        n.name === "AnnounceWinner" && t.setNewState(new Kd(t,n.position))
    }
    isSpinning() {
        return !0
    }
}
class G_ extends rn {
    name = "DeceleratingState";
    age;
    MAX_AGE;
    deceleration;
    constructor(t, n) {
        super(),
        t.angle = Math.PI * 2 * n(),
        // edit
        t.entryPicker.setRandomPosition(t),
        this.age = 0,
        this.MAX_AGE = t.getStateTimeLengths().decelerating;
        const r = this.MAX_AGE
          , s = t.speed
          , i = 15e-5;
        this.deceleration = Math.exp(Math.log(i / s) / r)
    }
    tick(t) {
        t.angle += t.speed,
        this.age <= this.MAX_AGE ? (t.speed = t.speed * this.deceleration,
        this.age += 1) : (t.speed = 0,
        t.setNewState(new X_(t,t.angle)))
    }
    isSpinning() {
        return !0
    }
}
class Q_ extends rn {
    name = "SpectatorDeceleratingState";
    age;
    MAX_AGE;
    deceleration;
    constructor(t, n) {
        super(),
        t.setAngle(n),
        this.age = 0,
        this.MAX_AGE = t.getStateTimeLengths().decelerating;
        const r = this.MAX_AGE
          , s = t.speed
          , i = 15e-5;
        this.deceleration = Math.exp(Math.log(i / s) / r)
    }
    tick(t) {
        t.angle += t.speed,
        this.age <= this.MAX_AGE && (t.speed = t.speed * this.deceleration),
        this.age > this.MAX_AGE && (t.speed = 0),
        this.age > this.MAX_AGE + 180 && t.setNewState(new zd(t)),
        this.age += 1
    }
    receiveFromNetwork(t, n) {
        n.name === "AnnounceWinner" && t.setNewState(new Kd(t,n.position))
    }
    isSpinning() {
        return !0
    }
}
class X_ extends rn {
    name = "AnnounceWinnerState";
    constructor(t, n) {
        super(),
        t.angle = n,
        t.onStateChangeCallback({
            name: "AnnounceWinner",
            position: t.angle
        })
    }
    tick(t) {
        t.spinIsDone(),
        t.setNewState(new Y_(t,t.angle))
    }
}
class Kd extends rn {
    name = "SpectatorAnnounceWinnerState";
    constructor(t, n) {
        super(),
        t.angle = n
    }
    tick(t) {
        t.spinIsDone(),
        t.setNewState(new Gd(t,t.angle))
    }
}
class Y_ extends rn {
    name = "StoppedState";
    constructor(t, n) {
        super(),
        t.angle = n,
        t.speed = 0,
        t.onStateChangeCallback({
            name: "Stopped",
            position: t.angle
        })
    }
    click(t) {
        t.setNewState(new Ga(t))
    }
    receiveFromNetwork(t, n) {
        n.name === "Spinning" && t.setNewState(new Qa(t,n.decelAngle))
    }
}
class Gd extends rn {
    name = "SpectatorStoppedState";
    constructor(t, n) {
        super(),
        t.angle = n,
        t.speed = 0
    }
    click(t) {
        t.setNewState(new Ga(t))
    }
    receiveFromNetwork(t, n) {
        n.name === "Spinning" && t.setNewState(new Qa(t,n.decelAngle))
    }
}
const J_ = ["https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/spreadsheets.readonly"];
function Z_(e) {
    if (e) {
        let n = e.match(/<img.*?src="(.*?)".*?>/);
        n && (e = e.replace(n[0], ""))
    }
    let t = "";
    return e && (t = sw(e)),
    t
}
function hE(e, t) {
    if (e)
        return t;
    {
        const n = []
          , r = [];
        for (let s of t) {
            const i = ta(s);
            n.includes(i) || (n.push(i),
            r.push(s))
        }
        return r
    }
}
function ta(e) {
    const t = {};
    return e.text && (t.text = e.text),
    e.image && (t.image = e.image),
    JSON.stringify(t)
}
function mE(e, t) {
    const n = [];
    for (let r = 0; r < e.length; r++)
        if (ta(t) == ta(e[r]) && n.push(r),
        t.id == e[r].id)
            return n[0] != r;
    return !1
}
function gE(e) {
    if (!e)
        return [];
    let t = e.split(/<div>|<\/div>|<br>|<p>/)
      , n = [/<div.*?>/g, /<\/div>/g, /<p.*?>/g, /<\/p>/g, /<span.*?>/g, /<\/span>/g, /<font.*?>/g, /<\/font>/g, /<!--.*?>/g, /<br.*?>/g];
    return t.map(r => {
        let s = r;
        return n.forEach(i => {
            s = s.replace(i, "")
        }
        ),
        tw(Z_(s), ew(s))
    }
    ).filter(r => r.text || r.image)
}
function ew(e) {
    let t = "";
    if (e) {
        let n = e.match(/<img.*?src="(.*?)".*?>/);
        n && (t = n[1])
    }
    return t
}
function tw(e, t, n, r, s, i) {
    const o = {};
    return e && (o.text = e),
    t && (o.image = t),
    o
}
function pE(e) {
    return e[Math.floor(Math.random() * e.length)]
}
function vE(e, t) {
    return t ? e.reduce( (n, r) => n + (r.trim() === t.trim() ? 1 : 0), 0) : 0
}
function nw(e, t, n) {
    location.host.startsWith("localhost") || location.host.startsWith("test") || typeof gtag < "u" && gtag("event", t, {
        event_label: n
    })
}
function rw(e, t) {
    const n = w_(t);
    nw(e, n, navigator.userAgent),
    console.error(n)
}
function Qd(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
}
function yE(e) {
    let t = e.replace(/<mark>/g, "||mark||").replace(/<\/mark>/g, "||/mark||");
    return Qd(t).replace(/\|\|mark\|\|/g, "<mark>").replace(/\|\|\/mark\|\|/g, "</mark>")
}
function sw(e) {
    return e.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&nbsp;/g, " ")
}
function bE(e) {
    return e.replace(/<.*?>/g, "")
}
function _E() {
    let t = "";
    const n = "abcdefghjkmnpqrstuvwxyz23456789";
    for (let r = 0; r < 10; r++)
        t += n.charAt(Math.floor(Math.random() * n.length));
    return t
}
function wE(e) {
    let t = ""
      , n = "";
    return e && (e.image && (t = `<img src="${e.image}" style="height:25px" style="font-size:1rem;">`),
    e.text && (n = Qd(e.text),
    n = n.replace(/^ +$/g, "&nbsp;"))),
    "<div>" + t + n + "</div>"
}
function CE(e) {
    return e === "en" ? "" : e
}
function EE(e, t) {
    return "https://docs.google.com/forms/d/e/1FAIpQLSeryxMCuDjQUGawpgIeMwSY-81fqwdbpVTIOyh1-WJG5LCeeQ/viewform?entry.1064273724=" + encodeURIComponent(e) + "&entry.558479038=" + t
}
function SE(e, t) {
    return iw(ow(e), t)
}
function iw(e, t, n=Date.now()) {
    if (!e)
        return "-";
    t || (t = "en");
    const r = Math.floor((n - e) / 1e3)
      , s = [Math.floor(r / 31536e3), Math.floor(r / 2592e3), Math.floor(r / 604800), Math.floor(r / 86400), Math.floor(r / 3600), Math.floor(r / 60), r]
      , i = ["year", "month", "week", "day", "hour", "minute", "second"]
      , o = new Intl.RelativeTimeFormat(t,{
        numeric: "auto"
    });
    for (const a in s)
        if (s[a] >= 1)
            return o.format(-s[a], i[a]);
    return "moments ago"
}
function ow(e) {
    if (e && e._seconds)
        return e._seconds * 1e3;
    if (e && e.seconds)
        return e.seconds * 1e3;
    if (e && Number.isInteger(e))
        return e
}
function kE(e) {
    if (Xd(e))
        return "$" + e.toFixed(2)
}
function xE(e) {
    if ((e || e === 0) && e.toLocaleString)
        return e.toLocaleString()
}
function TE(e) {
    return Xd(e) && e >= 0 ? Math.round(e * 100) + "%" : "?"
}
function Xd(e) {
    return Number.isFinite(e)
}
function AE() {
    return window.self !== window.top
}
function Xa(e) {
    return location.host.startsWith("localhost") ? `http://localhost:8081/${e}` : `/${e}`
}
function IE(e, t) {
    return Object.entries(e).sort( (r, s) => r[0] === "sounds.Sound effects" ? -1 : s[0] === "sounds.Sound effects" ? 1 : r[0] === "sounds.Winter holidays" && t > 9 ? -1 : s[0] === "sounds.Winter holidays" && t > 9 ? 1 : 0).reduce( (r, s) => (r[s[0]] = s[1],
    r), {})
}
async function NE(e) {
    const {extractColors: t} = await ke(async () => {
        const {extractColors: r} = await import("./extract-colors-v344.js");
        return {
            extractColors: r
        }
    }
    , [])
      , n = new Image;
    return n.src = e,
    new Promise(r => {
        n.onload = async () => {
            const s = await t(n);
            r(s.map(i => i.hex).slice(0, 6))
        }
    }
    )
}
function PE(e, t, n) {
    const r = [...e];
    return r.sort( (s, i) => {
        if (t === "title")
            return s.wheelConfig.title || i.wheelConfig.title ? aw(s, i, n) : Kc(s, i, n);
        if (t === "created")
            return Kc(s, i, n)
    }
    ),
    r
}
function aw(e, t, n) {
    return e.wheelConfig.title ? t.wheelConfig.title ? n === "desc" ? t.wheelConfig.title.localeCompare(e.wheelConfig.title, "en", {
        numeric: !0,
        sensitivity: "base"
    }) : e.wheelConfig.title.localeCompare(t.wheelConfig.title, "en", {
        numeric: !0,
        sensitivity: "base"
    }) : -1 : 1
}
function Kc(e, t, n) {
    return n === "desc" ? t.created - e.created : e.created - t.created
}
async function LE({wheelConfig: e, idToken: t, shareMode: n}) {
    const r = {
        wheelConfig: Hd(e),
        shareMode: n
    };
    return (await pe("POST", "api/v2/wheels", t, r)).data.path
}
async function OE(e, t) {
    let n = "api/v1/wheels/shared";
    return t && t.length > 0 && (n += `?fields=${t}`),
    (await pe("GET", n, e)).data.wheels
}
async function RE(e, t) {
    let n = "api/v2/wheels/private";
    return t && t.length > 0 && (n += `?fields=${t}`),
    (await pe("GET", n, e)).data.wheels
}
async function ME(e, t) {
    return (await pe("GET", `api/v2/wheels/${e}`, t)).data
}
async function FE(e, t) {
    let n = "api/v2/wheels";
    return t && t.length > 0 && (n += `?fields=${t}`),
    (await pe("GET", n, e)).data.wheels
}
async function DE(e, t) {
    const n = "api/v1/wheels/private"
      , r = {
        config: Hd(t)
    };
    return (await pe("PUT", n, e, r)).data.path
}
async function $E(e, t, n) {
    await pe("PUT", `api/v2/wheels/${t}`, e, n)
}
async function jE(e, t) {
    await pe("DELETE", `api/v2/wheels/${t}`, e)
}
async function qE(e) {
    await pe("POST", "api/v2/users", e)
}
async function VE(e, t) {
    await pe("POST", "api/v2/wheels/change-owner", t, {
        oldIdToken: e
    })
}
async function WE(e) {
    await pe("DELETE", "api/v2/users", e)
}
async function BE(e, t) {
    const n = `api/v2/admin/accounts/${t}`;
    return (await pe("GET", n, e)).data
}
async function UE(e) {
    return (await pe("GET", "api/v2/admin/review-queue", e)).data
}
async function HE(e, t) {
    return (await pe("POST", "api/v2/admin/translate", e, {
        texts: t
    })).data.translations
}
async function lw(e) {
    try {
        return (await pe("GET", "api/v2/admin", e)).data.isAdmin
    } catch {
        return !1
    }
}
async function zE(e, t) {
    const n = new URLSearchParams;
    e && n.append("search", e),
    t && n.append("pageNumber", String(t));
    const r = "api/v2/gallery?" + n.toString();
    return (await pe("GET", r)).data
}
async function KE() {
    return (await pe("GET", "api/v2/gallery/suggestions")).data.suggestions
}
async function GE() {
    // edit
    // return (await pe("GET", "api/v2/client-settings")).data
    return {
        "hoursSpunPerSecond": 0.085169963134431,
        "spinsPerSecond": 30.661186728395062,
        "readOnlyMode": false,
        "carouselSlides": [
            {
                "html": "<div class=\"text-center\"><a href=\"https://discord.gg/bKCTfCZwnP\">Join our Discord server</a> to get support or to give us your feedback!</div>"
            },
            {
                "html": "<div class=\"text-center\"><a href=\"https://wheelofnames.com/faq/discordbot\">Add our bot</a> to your Discord server and spin wheels from within Discord!</div>"
            }
        ],
        "advertiserWeights": {
            "freestar": 1,
            "playwire": 0
        },
        "commitHash": "2f3d"
    }
}
async function QE(e) {
    return (await pe("POST", "api/v2/api-keys", e)).data.apiKey
}
async function XE(e) {
    await pe("DELETE", "api/v2/api-keys", e)
}
async function YE(e) {
    return (await pe("GET", "api/v2/api-keys", e)).data
}
async function JE(e) {
    const t = {
        method: "GET",
        mode: "cors",
        headers: {
            "x-api-key": e
        }
    }
      , n = await fetch(Xa("api/v2/api-keys"), t);
    return (await Ya(n)).data
}
async function ZE(e, t, n) {
    await pe("PUT", "api/v2/admin/administrators", e, {
        uid: t,
        totalReviews: n
    })
}
async function eS(e, t, n) {
    await pe("PUT", "api/v2/admin/administrators", e, {
        uid: t,
        sessionReviews: n
    })
}
async function tS(e) {
    return (await pe("GET", "api/v2/admin/dirty-words", e)).data.dirtyWords
}
async function nS(e, t) {
    await pe("PUT", "api/v2/admin/dirty-words", e, {
        dirtyWords: t
    })
}
async function rS(e) {
    return (await pe("GET", "api/v2/admin/administrators", e)).data.administrators
}
async function sS(e, t, n) {
    await pe("POST", "api/v2/admin/administrators", e, {
        uid: t,
        name: n
    })
}
async function iS(e, t) {
    await pe("DELETE", "api/v2/admin/administrators", e, {
        uid: t
    })
}
async function oS(e, t) {
    const n = `api/v2/admin/wheels/${t}`;
    await pe("PUT", n, e, {
        shareMode: "copyable"
    })
}
async function aS(e, t) {
    await pe("DELETE", `api/v2/admin/wheels/${t}`, e)
}
async function lS(e) {
    return (await pe("GET", "api/v2/admin/review-queue/next-shared-wheel", e)).data.wheel
}
async function cS(e) {
    return (await pe("GET", "api/v2/admin/review-queue/next-gallery-wheel", e)).data.wheel
}
async function uS(e, t) {
    const n = `api/v2/admin/review-queue/approve/${t}`;
    await pe("POST", n, e)
}
async function fS(e, t) {
    await pe("POST", `api/v2/admin/review-queue/reject/${t}`, e)
}
async function dS() {
    return (await pe("GET", "api/v2/languages")).data.languages
}
async function hS() {
    const n = await fetch("https://discord-bot-wada35rq7a-uc.a.run.app/guild-count", {
        method: "GET",
        mode: "cors"
    })
      , r = await Ya(n);
    if ("guildCount"in r)
        return r.guildCount;
    throw new Error("No guildCount property in response")
}
async function mS(e, t) {
    const n = `api/v2/wheels/thumbnails/${t}`;
    return await cw("GET", n, e)
}
async function pe(e, t, n, r) {
    const s = {
        method: e,
        mode: "cors",
        headers: {}
    };
    n && (s.headers.Authorization = n),
    r && (s.headers["Content-Type"] = "application/json",
    s.body = JSON.stringify(r));
    const i = await fetch(Xa(t), s);
    return await Ya(i)
}
async function cw(e, t, n, r) {
    const s = {
        method: e,
        mode: "cors",
        headers: {}
    };
    return n && (s.headers.Authorization = n),
    await (await fetch(Xa(t), s)).blob()
}
async function Ya(e) {
    const t = await e.text();
    if (t.startsWith("<"))
        throw new Error(t);
    const n = JSON.parse(t);
    if ("error"in n)
        throw new Error(n.error);
    return n
}
async function uw(e) {
    const t = await Yd(e);
    return !!t && !t.isAnonymous
}
async function Yd(e) {
    return e.currentUser ? e.currentUser : new Promise(t => {
        e.onAuthStateChanged(n => t(n))
    }
    )
}
async function fw(e) {
    return await e.signInAnonymously(),
    e.currentUser
}
async function dw(e, t) {
    for (const r of J_)
        t.addScope(r);
    return t.setCustomParameters({
        prompt: "select_account"
    }),
    (await e.signInWithPopup(t)).credential?.accessToken ?? null
}
const hw = [{
    partialName: "noms",
    locale: "fr"
}]
  , Mi = [{
    name: "am",
    googleName: "am_ET",
    twitterName: "am",
    file: "am-ET.json",
    humanName: "አማርኛ"
}, {
    name: "ar",
    googleName: "ar_AR",
    twitterName: "ar",
    file: "ar-EG.json",
    humanName: "العربية"
}, {
    name: "az",
    googleName: "az_AZ",
    twitterName: "az",
    file: "az-Latn-AZ.json",
    humanName: "Azərbaycanca"
}, {
    name: "bg",
    googleName: "bg_BG",
    twitterName: "bg",
    file: "bg-BG.json",
    humanName: "български"
}, {
    name: "bn",
    googleName: "bn_IN",
    twitterName: "bn",
    file: "bn-IN.json",
    humanName: "বাংলা"
}, {
    name: "bs",
    googleName: "bs_BA",
    twitterName: "bs",
    file: "bs-Latn-BA.json",
    humanName: "Bosanski"
}, {
    name: "ca",
    googleName: "ca_ES",
    twitterName: "ca",
    file: "ca-ES.json",
    humanName: "Català"
}, {
    name: "cs",
    googleName: "cs_CZ",
    twitterName: "cs",
    file: "cs-CZ.json",
    humanName: "Čeština"
}, {
    name: "cy",
    googleName: "cy_GB",
    twitterName: "cy",
    file: "cy-GB.json",
    humanName: "Cymraeg"
}, {
    name: "da",
    googleName: "da_DK",
    twitterName: "da",
    file: "da-DK.json",
    humanName: "Dansk"
}, {
    name: "de",
    googleName: "de_DE",
    twitterName: "de",
    file: "de-DE.json",
    humanName: "Deutsch"
}, {
    name: "el",
    googleName: "el_GR",
    twitterName: "el",
    file: "el-GR.json",
    humanName: "Eλληνικά"
}, {
    name: "en-PI",
    googleName: "en_US",
    twitterName: "en",
    file: "en-PI.json",
    humanName: "English (Pirate)"
}, {
    name: "en",
    googleName: "en_US",
    twitterName: "en",
    file: "en-US.json",
    humanName: "English"
}, {
    name: "es",
    googleName: "es_ES",
    twitterName: "es",
    file: "es-ES.json",
    humanName: "Español"
}, {
    name: "et",
    googleName: "et_EE",
    twitterName: "et",
    file: "et-EE.json",
    humanName: "Estonian"
}, {
    name: "fa",
    googleName: "fa_IR",
    twitterName: "fa",
    file: "fa-IR.json",
    humanName: "فارسی"
}, {
    name: "fi",
    googleName: "fi_FI",
    twitterName: "fi",
    file: "fi-FI.json",
    humanName: "Suomi"
}, {
    name: "fil",
    googleName: "fil_PH",
    twitterName: "fil",
    file: "fil-PH.json",
    humanName: "Filipino"
}, {
    name: "fr",
    googleName: "fr_FR",
    twitterName: "fr",
    file: "fr-FR.json",
    humanName: "Français"
}, {
    name: "gl",
    googleName: "gl_ES",
    twitterName: "gl",
    file: "gl-ES.json",
    humanName: "Galego"
}, {
    name: "gu",
    googleName: "gu_IN",
    twitterName: "gu",
    file: "gu-IN.json",
    humanName: "ગુજરાતી"
}, {
    name: "he",
    googleName: "he_IL",
    twitterName: "he",
    file: "he-IL.json",
    humanName: "עברית"
}, {
    name: "hi",
    googleName: "hi_IN",
    twitterName: "hi",
    file: "hi-IN.json",
    humanName: "हिंदी"
}, {
    name: "hr",
    googleName: "hr_HR",
    twitterName: "hr",
    file: "hr-HR.json",
    humanName: "Hrvatski"
}, {
    name: "hu",
    googleName: "hu_HU",
    twitterName: "hu",
    file: "hu-HU.json",
    humanName: "Magyar"
}, {
    name: "hy",
    googleName: "hy_AM",
    twitterName: "hy",
    file: "hy-AM.json",
    humanName: "Հայերեն"
}, {
    name: "id",
    googleName: "id_ID",
    twitterName: "id",
    file: "id-ID.json",
    humanName: "Bahasa Indonesia"
}, {
    name: "is",
    googleName: "is_IS",
    twitterName: "is",
    file: "is-IS.json",
    humanName: "Íslenskur"
}, {
    name: "it",
    googleName: "it_IT",
    twitterName: "it",
    file: "it-IT.json",
    humanName: "Italiano"
}, {
    name: "ja",
    googleName: "ja_JP",
    twitterName: "ja",
    file: "ja-JP.json",
    humanName: "日本語"
}, {
    name: "ka",
    googleName: "ka_GE",
    twitterName: "ka",
    file: "ka-GE.json",
    humanName: "ქართული"
}, {
    name: "kk",
    googleName: "kk_KZ",
    twitterName: "kk",
    file: "kk-KZ.json",
    humanName: "Қазақ тілі"
}, {
    name: "kn",
    googleName: "kn_IN",
    twitterName: "kn",
    file: "kn-IN.json",
    humanName: "ಕನ್ನಡ"
}, {
    name: "ko",
    googleName: "ko_KR",
    twitterName: "ko",
    file: "ko-KR.json",
    humanName: "한국어"
}, {
    name: "lo",
    googleName: "lo_LA",
    twitterName: "lo",
    file: "lo-LA.json",
    humanName: "ພາສາລາວ"
}, {
    name: "lt",
    googleName: "lt_LT",
    twitterName: "lt",
    file: "lt-LT.json",
    humanName: "Lietuvių"
}, {
    name: "lv",
    googleName: "lv_LV",
    twitterName: "lv",
    file: "lv-LV.json",
    humanName: "Latviešu"
}, {
    name: "mk",
    googleName: "mk_MK",
    twitterName: "mk",
    file: "mk-MK.json",
    humanName: "Mакедонски"
}, {
    name: "ml",
    googleName: "ml_IN",
    twitterName: "ml",
    file: "ml-IN.json",
    humanName: "മലയാളം"
}, {
    name: "mn",
    googleName: "mn_MN",
    twitterName: "mn",
    file: "mn-MN.json",
    humanName: "Mонгол"
}, {
    name: "ms",
    googleName: "ms_MY",
    twitterName: "ms",
    file: "ms-MY.json",
    humanName: "Bahasa Melayu"
}, {
    name: "my",
    googleName: "my_MM",
    twitterName: "my",
    file: "my-MM.json",
    humanName: "မြန်မာစာ"
}, {
    name: "nl",
    googleName: "nl_NL",
    twitterName: "nl",
    file: "nl-NL.json",
    humanName: "Nederlands"
}, {
    name: "no",
    googleName: "nb_NO",
    twitterName: "no",
    file: "nb-NO.json",
    humanName: "Norsk"
}, {
    name: "pa",
    googleName: "pa_IN",
    twitterName: "pa",
    file: "pa-IN.json",
    humanName: "ਪੰਜਾਬੀ"
}, {
    name: "pl",
    googleName: "pl_PL",
    twitterName: "pl",
    file: "pl-PL.json",
    humanName: "Polski"
}, {
    name: "pt",
    googleName: "pt_BR",
    twitterName: "pt",
    file: "pt-PT.json",
    humanName: "Português"
}, {
    name: "ro",
    googleName: "ro_RO",
    twitterName: "ro",
    file: "ro-RO.json",
    humanName: "Română"
}, {
    name: "ru",
    googleName: "ru_RU",
    twitterName: "ru",
    file: "ru-RU.json",
    humanName: "Pусский"
}, {
    name: "sd",
    googleName: "sd_PK",
    twitterName: "sd",
    file: "sd-PK.json",
    humanName: "سنڌي"
}, {
    name: "sl",
    googleName: "sl_SL",
    twitterName: "sl",
    file: "sl-SI.json",
    humanName: "Slovenščina"
}, {
    name: "so",
    googleName: "so_SO",
    twitterName: "so",
    file: "so-SO.json",
    humanName: "Soomaali"
}, {
    name: "sq",
    googleName: "sq_AL",
    twitterName: "sq",
    file: "sq-AL.json",
    humanName: "Shqip"
}, {
    name: "sr",
    googleName: "sr_SP",
    twitterName: "sr",
    file: "sr-Latn-RS.json",
    humanName: "Srpski"
}, {
    name: "sv",
    googleName: "sv_SE",
    twitterName: "sv",
    file: "sv-SE.json",
    humanName: "Svenska"
}, {
    name: "ta",
    googleName: "ta_IN",
    twitterName: "ta",
    file: "ta-IN.json",
    humanName: "தமிழ்"
}, {
    name: "th",
    googleName: "th_TH",
    twitterName: "th",
    file: "th-TH.json",
    humanName: "ไทย"
}, {
    name: "tr",
    googleName: "tr_TR",
    twitterName: "tr",
    file: "tr-TR.json",
    humanName: "Türkçe"
}, {
    name: "uk",
    googleName: "uk_UA",
    twitterName: "uk",
    file: "uk-UA.json",
    humanName: "Українська"
}, {
    name: "ur",
    googleName: "ur-PK",
    twitterName: "ur",
    file: "ur-PK.json",
    humanName: "اردو"
}, {
    name: "uz",
    googleName: "uz-UZ",
    twitterName: "uz",
    file: "uz-Latn-UZ.json",
    humanName: "Oʻzbekcha"
}, {
    name: "vi",
    googleName: "vi_VN",
    twitterName: "vi",
    file: "vi-VN.json",
    humanName: "Tiếng Việt"
}, {
    name: "zh-CN",
    googleName: "zh_CN",
    twitterName: "zh-cn",
    file: "zh-CN.json",
    humanName: "简体中文"
}, {
    name: "zh-HK",
    googleName: "zh_TW",
    twitterName: "zh-tw",
    file: "zh-HK.json",
    humanName: "繁體中文"
}];
function mw(e, t) {
    return Cw(e) === t ? "/" : `/${t}/`
}
function gS(e, t, n) {
    return (e + mw(e, t) + "/" + n).replace("//", "/")
}
function gw(e, t) {
    const n = Mi.find(s => s.name === t)
      , r = e.toLowerCase() === "twitter" ? "twitterName" : "googleName";
    return n?.[r] || "en_US"
}
function pS(e) {
    return Mi.find(t => t.name === e)?.file.slice(0, -5) || "en-US"
}
function vS(e, t) {
    const n = Gc("")(t);
    return qd(Jd, pw(e), Gc({}), r => r.name ?? "")([n])
}
function yS(e) {
    return Array.isArray(e) ? qd(Jd, yw, _w)(e) : []
}
function bS() {
    return Mi.map(e => ({
        name: e.name,
        humanName: e.humanName
    })).sort(vw)
}
function pw(e) {
    return function(t) {
        return t.filter(n => !Zd(e, n.name))
    }
}
function Jd(e) {
    return Mi.filter(t => e.some(n => Zd(n, t.name)))
}
function Gc(e) {
    return function(t) {
        return t?.[0] ?? e
    }
}
function vw(e, t) {
    return e.humanName.localeCompare(t.humanName)
}
function yw(e) {
    return e.filter(t => !bw(t))
}
function bw(e) {
    return e.name === "en-PI"
}
function _w(e) {
    return e.map(ww)
}
function ww(e) {
    return {
        name: e.name,
        humanName: e.humanName
    }
}
function Cw(e) {
    return hw.find(t => e.includes(t.partialName))?.locale || "en"
}
function Zd(e, t) {
    return e.length === t.length ? e === t : Qc(e) === Qc(t)
}
function Qc(e) {
    return e.split("-")[0]
}
let ze, na, uo;
async function Ew() {
    ze || (await kw(),
    xw(ze),
    Aw(ze))
}
async function _S() {
    return await uw(ze.auth())
}
async function Ja() {
    return await Yd(ze.auth())
}
async function Sw() {
    const e = await Ja();
    if (e)
        return await e.getIdToken()
}
async function wS() {
    const e = await Ja();
    if (e)
        return e.uid
}
async function CS() {
    const e = await Ja();
    if (e && e.isAnonymous)
        return await e.getIdToken()
}
function ES(e) {
    return Nw(),
    new Promise(t => {
        uo || (uo = new na.auth.AuthUI(ze.auth())),
        uo.start(`#${e}`, {
            signInFlow: "popup",
            credentialHelper: na.auth.CredentialHelper.NONE,
            signInOptions: [{
                provider: ze.auth.GoogleAuthProvider.PROVIDER_ID,
                customParameters: {
                    prompt: "select_account"
                }
            }, ze.auth.TwitterAuthProvider.PROVIDER_ID, ze.auth.EmailAuthProvider.PROVIDER_ID],
            callbacks: {
                signInSuccessWithAuthResult: n => (t(n.user),
                !!n.user)
            },
            tosUrl: "/terms",
            privacyPolicyUrl: "/privacy-policy.html"
        })
    }
    )
}
async function SS() {
    const e = ze.auth();
    return await fw(e)
}
async function kS(e) {
    const t = ze.auth();
    t.languageCode = gw("Google", e);
    const n = Iw("Google");
    return await dw(t, n)
}
async function xS() {
    try {
        await ze.auth().signOut()
    } catch {}
}
async function kw() {
    ze = (await ke( () => import("./index.esm-v344.js"), __vite__mapDeps([0, 1]))).default,
    await ke( () => import("./index.esm-v3443.js"), __vite__mapDeps([2, 1])),
    await ke( () => import("./index.esm-v3442.js"), __vite__mapDeps([3, 1])),
    na = await ke( () => import("./esm-v344.js"), __vite__mapDeps([4, 0, 1, 2, 5]))
}
function xw(e) {
    if (Tw())
        return;
    const t = {
        apiKey: "AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g",
        authDomain: "wheel-of-names-firebase.firebaseapp.com",
        databaseURL: "https://wheel-of-names-firebase.firebaseio.com",
        projectId: "wheel-of-names-firebase",
        timestampsInSnapshots: !0
    };
    e.initializeApp(t)
}
function Tw() {
    return ze.apps && ze.apps.length > 0
}
function Aw(e) {
    const t = e.firestore();
    try {
        t.enablePersistence({
            synchronizeTabs: !0
        })
    } catch {}
}
function Iw(e) {
    const t = {
        google: new ze.auth.GoogleAuthProvider,
        facebook: new ze.auth.FacebookAuthProvider,
        twitter: new ze.auth.TwitterAuthProvider
    };
    return t[e.toLowerCase()] || t.google
}
function Nw() {
    if (document.querySelector("#firebaseui-auth-css-link"))
        return;
    const t = document.querySelector("head")
      , n = document.createElement("link");
    n.id = "firebaseui-auth-css-link",
    n.rel = "stylesheet",
    n.type = "text/css",
    n.href = "https://www.gstatic.com/firebasejs/ui/6.1.0/firebase-ui-auth.css",
    n.media = "all",
    t.appendChild(n)
}
const Pw = u_("wheel", {
    state: () => ({
        wheelConfig: new _t,
        sheetLinked: !1,
        wheelIsBusy: !1,
        winnerEntry: {},
        winners: [],
        path: "",
        shareMode: null,
        previousWheelConfig: ""
    }),
    getters: {
        wheelType: e => e.wheelConfig.type,
        entries: e => e.wheelConfig.entries,
        entryCount: e => e.wheelConfig.entries.length,
        winnerIndex: e => e.wheelConfig.entries.findIndex(t => t.id === e.winnerEntry.id),
        enabledColors: e => e.wheelConfig.colorSettings.filter(t => t.enabled),
        wheelIsShared: e => !!e.shareMode && __(e.shareMode),
        wheelIsCopyable: e => !!e.shareMode && e.shareMode !== "spin-only",
        wheelIsAdvanced: e => e.wheelConfig.isAdvanced,
        wheelTitle: e => e.wheelConfig.title,
        wheelDescription: e => e.wheelConfig.description,
        showTitle: e => e.wheelConfig.showTitle,
        hubSize: e => e.wheelConfig.hubSize
    },
    actions: {
        setWheelConfig(e) {
            this.wheelConfig = new _t(e),
            this.persistWheelConfig()
        },
        setWheelConfigNoPersist(e) {
            this.wheelConfig = new _t(e)
        },
        saveWheelConfigForUndo() {
            this.previousWheelConfig = this.wheelConfig.getJson()
        },
        undoWheelConfigChange() {
            this.setWheelConfig(new _t(JSON.parse(this.previousWheelConfig)))
        },
        persistWheelConfig() {
            if (!this.wheelIsShared)
                try {
                    localStorage.setItem("LastWheelConfig", this.wheelConfig.getJson())
                } catch {
                    console.error("Error saving wheel config to local storage")
                }
        },
        setGrayEmptyWheel() {
            const e = new _t;
            e.entries = nr([{
                text: " "
            }]),
            e.setColorValues(["#BBBBBB"]),
            this.setWheelConfigNoPersist(e)
        },
        setWheelTitle(e) {
            this.wheelConfig.title = e,
            this.persistWheelConfig()
        },
        setWheelDescription(e) {
            this.wheelConfig.description = e,
            this.persistWheelConfig()
        },
        setShowTitle(e) {
            this.wheelConfig.showTitle = e,
            this.persistWheelConfig()
        },
        setEntries(e) {
            this.wheelConfig.entries = nr(e),
            this.persistWheelConfig()
        },
        shuffleEntries() {
            this.wheelConfig.entries = v_(this.wheelConfig.entries),
            this.persistWheelConfig()
        },
        sortEntries() {
            this.wheelConfig.entries = Uc(ue(this.wheelConfig.entries)),
            this.persistWheelConfig()
        },
        addEntry(e) {
            this.wheelConfig.entries.push({
                ...e,
                id: $s()
            }),
            this.persistWheelConfig()
        },
        setEntryText(e, t) {
            const n = this.wheelConfig.entries.at(e);
            n && (n.text = t,
            this.persistWheelConfig())
        },
        setEntryColor(e, t) {
            const n = this.wheelConfig.entries.at(e);
            n && (t ? n.color = t : delete n.color,
            this.persistWheelConfig())
        },
        setEntrySound(e, t) {
            const n = this.wheelConfig.entries.at(e);
            n && (t ? n.sound = t : delete n.sound,
            this.persistWheelConfig())
        },
        setEntryMessage(e, t) {
            const n = this.wheelConfig.entries.at(e);
            n && (t ? n.message = t : delete n.message,
            this.persistWheelConfig())
        },
        setEntryEnabled(e, t) {
            const n = this.wheelConfig.entries.at(e);
            n && (n.enabled = t,
            this.persistWheelConfig())
        },
        setEntryWeight(e, t) {
            this.wheelConfig.entries[e] && (this.wheelConfig.entries[e].weight = t,
            this.persistWheelConfig())
        },
        refreshEntries() {
            this.wheelConfig.entries = nr(this.wheelConfig.entries),
            this.persistWheelConfig()
        },
        setTextEntries(e) {
            this.wheelConfig.entries = nr(e.map(t => ({
                text: t
            }))),
            this.persistWheelConfig()
        },
        addTextEntries(e) {
            this.wheelConfig.entries = nr([...this.wheelConfig.entries, ...e.map(t => ({
                text: t
            }))]),
            this.persistWheelConfig()
        },
        removeTextEntries(e) {
            this.wheelConfig.entries = this.wheelConfig.entries.filter(t => t.text && !e.includes(t.text)),
            this.persistWheelConfig()
        },
        removeEntryByIndex(e) {
            this.wheelConfig.entries.splice(e, 1),
            this.persistWheelConfig(),
            this.sheetLinked = !1
        },
        removeEntry(e) {
            this.wheelConfig.entries = this.wheelConfig.entries.filter(t => t.id !== e.id),
            this.persistWheelConfig(),
            this.sheetLinked = !1
        },
        removeEntryAll(e) {
            this.wheelConfig.entries = this.wheelConfig.entries.filter(t => !t.text || t.text.trim() !== e.text?.trim()),
            this.persistWheelConfig(),
            this.sheetLinked = !1
        },
        hideEntry(e) {
            const t = this.wheelConfig.entries.find(n => n.id === e.id);
            t && (t.enabled = !1,
            this.persistWheelConfig())
        },
        moveEntry(e, t) {
            const n = e + t
              , r = this.wheelConfig.entries;
            n < 0 || n >= r.length || ([r[e],r[n]] = [r[n], r[e]],
            this.persistWheelConfig())
        },
        duplicateEntry(e) {
            const n = {
                ...this.wheelConfig.entries.at(e),
                id: $s()
            };
            this.wheelConfig.entries.splice(e + 1, 0, n),
            this.persistWheelConfig()
        },
        setColorValues(e) {
            this.wheelConfig.setColorValues(e),
            this.persistWheelConfig()
        },
        setHubSize(e) {
            this.wheelConfig.hubSize = e,
            this.persistWheelConfig()
        },
        setUploadedCenterImage(e, t) {
            this.wheelConfig.type = "color",
            this.wheelConfig.setUploadedCenterImage(e, t),
            this.persistWheelConfig()
        },
        setUploadedBackgroundImage(e, t) {
            this.wheelConfig.type = "image",
            this.wheelConfig.setUploadedBackgroundImage(e, t),
            this.persistWheelConfig()
        },
        setGalleryBackgroundImage(e) {
            this.wheelConfig.type = "image",
            this.wheelConfig.setGalleryBackgroundImage(e),
            this.persistWheelConfig()
        },
        setGalleryCenterImage(e) {
            this.wheelConfig.type = "color",
            this.wheelConfig.setGalleryCenterImage(e),
            this.persistWheelConfig()
        },
        removeImageFromEntry(e) {
            const t = this.wheelConfig.entries.at(e);
            t && (delete t.image,
            this.persistWheelConfig())
        },
        setWheelBusy(e) {
            this.wheelIsBusy = e
        },
        linkSheet() {
            this.sheetLinked = !0
        },
        unlinkSheet() {
            this.sheetLinked = !1
        },
        setPath(e) {
            this.path = e
        },
        setUnshared() {
            this.path = "",
            this.shareMode = null
        },
        setShareMode(e) {
            this.shareMode = e
        },
        addWinner(e) {
            this.winnerEntry = e,
            this.winners.push(e)
        },
        sortWinners() {
            this.winners = Uc(this.winners)
        },
        clearWinners() {
            this.winners = []
        },
        setVolumes(e, t) {
            this.wheelConfig.duringSpinSoundVolume = e,
            this.wheelConfig.afterSpinSoundVolume = t,
            this.persistWheelConfig()
        },
        loadInitialEditableWheel() {
            this.setWheelConfig(JSON.parse(localStorage.getItem("LastWheelConfig") || "{}"))
        },
        setSharedWheel(e) {
            this.setPath(e.path),
            this.setShareMode(e.shareMode),
            this.setWheelConfigNoPersist(e.wheelConfig)
        },
        resetWheel() {
            this.unlinkSheet(),
            this.setWheelConfig(new _t),
            this.clearWinners()
        },
        async addImageEntry(e) {
            let t;
            if (this.wheelConfig.isAdvanced) {
                const n = await oo(e);
                ao(n) ? t = {
                    image: e,
                    weight: 1,
                    enabled: !0
                } : t = {
                    image: e,
                    color: ar(n).slice(0, 7),
                    weight: 1,
                    enabled: !0
                }
            } else
                t = {
                    image: e
                };
            t.id = $s(),
            this.wheelConfig.entries.push(t),
            this.persistWheelConfig()
        },
        async addImageToEntry(e, t) {
            const n = this.wheelConfig.entries.at(t);
            if (n) {
                const r = await oo(e);
                ao(r) || (n.color = ar(r).slice(0, 7)),
                n.image = e,
                this.persistWheelConfig()
            }
        },
        async setAdvanced(e) {
            if (this.wheelConfig.isAdvanced = e,
            e)
                for (const t of this.wheelConfig.entries) {
                    if (t.image) {
                        const n = await oo(t.image);
                        ao(n) || (t.color = ar(n).slice(0, 7))
                    }
                    t.weight = 1,
                    t.enabled = !0
                }
            else {
                for (const t of this.wheelConfig.entries)
                    delete t.color,
                    delete t.weight,
                    delete t.enabled,
                    delete t.sound,
                    delete t.message;
                this.wheelConfig.entries = this.wheelConfig.entries.filter(t => t.text || t.image)
            }
            this.persistWheelConfig()
        }
    }
})
  , fo = r_( () => s_())
  , Lw = Bn({
    __name: "App",
    setup(e) {
        document.querySelector("#preload-static-content")?.remove();
        const t = Vv()
          , {t: n, locale: r} = Pi()
          , s = Pw()
          , i = M( () => t.path.includes("faq") ? "FAQ" : t.path.includes("reviews") ? "Reviews & tutorials" : t.path.includes("classroom") ? "Classroom" : t.path.includes("privacy") ? "Privacy policy" : t.path.includes("changelog") ? "Changelog" : t.path.includes("export") ? "Export" : t.path.includes("admin") ? "Admin" : t.path.includes("gallery") ? n("toolbar.Gallery") : s.wheelConfig.title ? s.wheelConfig.title : "Wheel of Names | " + n("app.Random name picker"));
        t_(i);
        const o = M( () => s.wheelConfig)
          , a = M( () => !["faq", "reviews", "classroom", "privacy", "changelog", "admin", "gallery", "api-doc"].find(d => t.path.includes(d)));
        de( () => o.value.pageBackgroundColor, () => {
            l(o.value.pageBackgroundColor)
        }
        ),
        de( () => t.path, () => {
            l(o.value.pageBackgroundColor)
        }
        );
        function l(f) {
            a.value && f.toLowerCase() !== "#ffffff" ? document.body.style.backgroundColor = f : document.body.style.removeProperty("background-color")
        }
        de( () => t.path, () => {
            c(),
            u()
        }
        , {
            immediate: !0
        }),
        de( () => r.value, () => {
            c(),
            u()
        }
        );
        function c() {
            let f = "en";
            a.value && (f = r.value),
            document.documentElement.setAttribute("lang", f)
        }
        function u() {
            let f = "";
            a.value && (f = n("app.Free and easy to use")),
            document.querySelector('meta[name="description"]')?.setAttribute("content", f)
        }
        return (f, d) => {
            const h = Wm("router-view");
            return Js(),
            Zs(h)
        }
    }
});
function TS(e) {
    return e
}
const Ow = [{
    path: "/faq/:section?",
    component: () => ke( () => import("./FaqPage-v344.js"), __vite__mapDeps([6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]))
}, {
    path: "/user-reviews-and-tutorials",
    component: () => ke( () => import("./TutorialsPage-v344.js"), __vite__mapDeps([19, 7, 8, 20, 21, 13, 14, 11, 15, 16]))
}, {
    path: "/how-to-use-in-the-classroom",
    component: () => ke( () => import("./ClassroomPage-v344.js"), __vite__mapDeps([22, 7, 8, 20, 21, 13, 14, 11, 15, 16]))
}, {
    path: "/privacy-policy",
    alias: "/privacy-policy.html",
    component: () => ke( () => import("./PrivacyPolicyPage-v344.js"), __vite__mapDeps([23, 7, 8, 17, 24, 13, 14, 11, 15, 16, 25]))
}, {
    path: "/terms",
    component: () => ke( () => import("./TermsOfServicePage-v344.js"), __vite__mapDeps([26, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]))
}, {
    path: "/changelog",
    component: () => ke( () => import("./ChangelogPage-v344.js"), __vite__mapDeps([27, 7, 8, 13, 14, 11, 15, 16, 24, 28]))
}, {
    path: "/gallery",
    component: () => ke( () => import("./GalleryPage-v344.js"), __vite__mapDeps([29, 30, 7, 8, 9, 13, 14, 11, 15, 16, 31, 32, 33, 34, 35, 36]))
}, {
    path: "/api-doc",
    component: () => ke( () => import("./ApiPage-v344.js"), __vite__mapDeps([37, 7, 8, 9, 38, 39, 35, 13, 14, 11, 15, 16, 40]))
}, {
    path: "/:lang([a-z][a-z][a-z]?|[a-z][a-z]-[A-Z][A-Z])?",
    children: [{
        path: "",
        component: () => ke( () => import("./EditWheelPage-v344.js"), __vite__mapDeps([41, 30, 7, 8, 11, 10, 12, 39, 14, 32, 33, 34, 42, 43, 5, 44, 45, 35, 46, 47, 24, 48, 21, 17, 38, 49]))
    }, {
        path: "noads",
        component: () => ke( () => import("./EditWheelPage-v344.js"), __vite__mapDeps([41, 30, 7, 8, 11, 10, 12, 39, 14, 32, 33, 34, 42, 43, 5, 44, 45, 35, 46, 47, 24, 48, 21, 17, 38, 49]))
    }, {
        path: ":sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
        alias: "view/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
        component: () => ke( () => import("./SharedWheelPage-v344.js"), __vite__mapDeps([50, 30, 8, 11, 45, 43, 5, 44, 35, 46, 47, 39, 51]))
    }, {
        path: "gallery",
        component: () => ke( () => import("./GalleryPage-v344.js"), __vite__mapDeps([29, 30, 7, 8, 9, 13, 14, 11, 15, 16, 31, 32, 33, 34, 35, 36]))
    }]
}, {
    path: "/view/:lang([a-z][a-z][a-z]?|[a-z][a-z]-[A-Z][A-Z])?/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)?",
    component: () => ke( () => import("./SharedWheelPage-v344.js"), __vite__mapDeps([50, 30, 8, 11, 45, 43, 5, 44, 35, 46, 47, 39, 51]))
}, {
    path: "/export",
    component: () => ke( () => import("./ExportPage-v344.js"), __vite__mapDeps([52, 7, 8, 9, 39, 13, 14, 11, 15, 16, 53]))
}, {
    path: "/translations",
    component: () => ke( () => import("./TranslationPage-v344.js"), __vite__mapDeps([54, 7, 8, 24, 13, 14, 11, 15, 16, 38]))
}, {
    path: "/admin",
    meta: {
        adminOnly: !0
    },
    children: [{
        path: "",
        component: () => ke( () => import("./AdminPage-v344.js"), __vite__mapDeps([55, 56, 32, 7, 8, 9, 15, 11, 48, 21, 57]))
    }, {
        path: "review",
        component: () => ke( () => import("./ReviewWheelPage-v344.js"), __vite__mapDeps([58, 56, 32, 42, 34, 7, 8, 24, 9, 11, 43, 5, 44, 15, 35, 59]))
    }, {
        path: "gallery",
        component: () => ke( () => import("./GalleryReviewPage-v344.js"), __vite__mapDeps([60, 56, 7, 8, 9, 31, 32, 33, 34, 35, 36, 61]))
    }, {
        path: "account",
        component: () => ke( () => import("./AdminAccountPage-v344.js"), __vite__mapDeps([62, 39]))
    }]
}, {
    path: "/:catchAll(.*)*",
    component: () => ke( () => import("./Error404-v344.js"), [])
}]
  , ho = () => {
    const t = jv({
        scrollBehavior: n => n.hash ? {
            el: n.hash,
            top: 50
        } : {
            top: 0
        },
        routes: Ow,
        history: mv("/")
    });
    return t.beforeEach(async (n, r, s) => {
        if (n.matched[0]?.meta.adminOnly) {
            await Ew();
            const o = await Sw();
            await lw(o) ? s() : (alert("Please log in as an admin user."),
            s(!1))
        } else
            s()
    }
    ),
    t.onError(n => {
        rw("RouterError", n),
        confirm(`An update is available. Do you want to reload?

If reloading does not fix the issue, try using https://old.wheelofnames.com.`) && window.location.reload()
    }
    ),
    t
}
;
async function Rw(e, t) {
    const n = e(Lw);
    n.use(Dp, t);
    const r = typeof fo == "function" ? await fo({}) : fo;
    n.use(r);
    const s = Wn(typeof ho == "function" ? await ho({
        store: r
    }) : ho);
    return r.use( ({store: i}) => {
        i.router = s
    }
    ),
    {
        app: n,
        store: r,
        router: s
    }
}
const Mw = {
    name: "fontawesome-v6",
    type: {
        positive: "fas fa-check",
        negative: "fas fa-triangle-exclamation",
        info: "fas fa-circle-info",
        warning: "fas fa-exclamation"
    },
    arrow: {
        up: "fas fa-arrow-up",
        right: "fas fa-arrow-right",
        down: "fas fa-arrow-down",
        left: "fas fa-arrow-left",
        dropdown: "fas fa-caret-down"
    },
    chevron: {
        left: "fas fa-chevron-left",
        right: "fas fa-chevron-right"
    },
    colorPicker: {
        spectrum: "fas fa-eye-dropper",
        tune: "fas fa-sliders",
        palette: "fas fa-swatchbook"
    },
    pullToRefresh: {
        icon: "fas fa-rotate"
    },
    carousel: {
        left: "fas fa-chevron-left",
        right: "fas fa-chevron-right",
        up: "fas fa-chevron-up",
        down: "fas fa-chevron-down",
        navigationIcon: "fas fa-circle"
    },
    chip: {
        remove: "fas fa-circle-xmark",
        selected: "fas fa-check"
    },
    datetime: {
        arrowLeft: "fas fa-chevron-left",
        arrowRight: "fas fa-chevron-right",
        now: "far fa-clock",
        today: "far fa-calendar-check"
    },
    editor: {
        bold: "fas fa-bold",
        italic: "fas fa-italic",
        strikethrough: "fas fa-strikethrough",
        underline: "fas fa-underline",
        unorderedList: "fas fa-list-ul",
        orderedList: "fas fa-list-ol",
        subscript: "fas fa-subscript",
        superscript: "fas fa-superscript",
        hyperlink: "fas fa-link",
        toggleFullscreen: "fas fa-maximize",
        quote: "fas fa-quote-right",
        left: "fas fa-align-left",
        center: "fas fa-align-center",
        right: "fas fa-align-right",
        justify: "fas fa-align-justify",
        print: "fas fa-print",
        outdent: "fas fa-outdent",
        indent: "fas fa-indent",
        removeFormat: "fas fa-eraser",
        formatting: "fas fa-heading",
        fontSize: "fas fa-text-height",
        align: "fas fa-align-left",
        hr: "far fa-square-minus",
        undo: "fas fa-rotate-left",
        redo: "fas fa-rotate-right",
        heading: "fas fa-heading",
        code: "fas fa-code",
        size: "fas fa-text-height",
        font: "fas fa-font",
        viewSource: "fas fa-code"
    },
    expansionItem: {
        icon: "fas fa-chevron-down",
        denseIcon: "fas fa-caret-down"
    },
    fab: {
        icon: "fas fa-plus",
        activeIcon: "fas fa-xmark"
    },
    field: {
        clear: "fas fa-circle-xmark",
        error: "fas fa-circle-exclamation"
    },
    pagination: {
        first: "fas fa-backward-step",
        prev: "fas fa-chevron-left",
        next: "fas fa-chevron-right",
        last: "fas fa-forward-step"
    },
    rating: {
        icon: "fas fa-star"
    },
    stepper: {
        done: "fas fa-check",
        active: "fas fa-pencil",
        error: "fas fa-triangle-exclamation"
    },
    tabs: {
        left: "fas fa-chevron-left",
        right: "fas fa-chevron-right",
        up: "fas fa-chevron-up",
        down: "fas fa-chevron-down"
    },
    table: {
        arrowUp: "fas fa-arrow-up",
        warning: "fas fa-triangle-exclamation",
        firstPage: "fas fa-backward-step",
        prevPage: "fas fa-chevron-left",
        nextPage: "fas fa-chevron-right",
        lastPage: "fas fa-forward-step"
    },
    tree: {
        icon: "fas fa-play"
    },
    uploader: {
        done: "fas fa-check",
        clear: "fas fa-xmark",
        add: "fas fa-square-plus",
        upload: "fas fa-upload",
        removeQueue: "fas fa-bars-staggered",
        removeUploaded: "fas fa-clipboard-check"
    }
};
function Fw(e, t, n) {
    let r;
    function s() {
        r !== void 0 && (qo.remove(r),
        r = void 0)
    }
    return kt( () => {
        e.value === !0 && s()
    }
    ),
    {
        removeFromHistory: s,
        addToHistory() {
            r = {
                condition: () => n.value === !0,
                handler: t
            },
            qo.add(r)
        }
    }
}
function js(e) {
    if (Object(e.$parent) === e.$parent)
        return e.$parent;
    let {parent: t} = e.$;
    for (; Object(t) === t; ) {
        if (Object(t.proxy) === t.proxy)
            return t.proxy;
        t = t.parent
    }
}
function eh(e, t) {
    typeof t.type == "symbol" ? Array.isArray(t.children) === !0 && t.children.forEach(n => {
        eh(e, n)
    }
    ) : e.add(t)
}
function AS(e) {
    const t = new Set;
    return e.forEach(n => {
        eh(t, n)
    }
    ),
    Array.from(t)
}
function th(e) {
    return e.appContext.config.globalProperties.$router !== void 0
}
function nh(e) {
    return e.isUnmounted === !0 || e.isDeactivated === !0
}
function Dw() {
    let e = null;
    const t = Se();
    function n() {
        e !== null && (clearTimeout(e),
        e = null)
    }
    return _i(n),
    kt(n),
    {
        removeTimeout: n,
        registerTimeout(r, s) {
            n(),
            nh(t) === !1 && (e = setTimeout( () => {
                e = null,
                r()
            }
            , s))
        }
    }
}
function $w() {
    let e;
    const t = Se();
    function n() {
        e = void 0
    }
    return _i(n),
    kt(n),
    {
        removeTick: n,
        registerTick(r) {
            e = r,
            at( () => {
                e === r && (nh(t) === !1 && e(),
                e = void 0)
            }
            )
        }
    }
}
const jw = {
    modelValue: {
        type: Boolean,
        default: null
    },
    "onUpdate:modelValue": [Function, Array]
}
  , qw = ["beforeShow", "show", "beforeHide", "hide"];
function Vw({showing: e, canShow: t, hideOnRouteChange: n, handleShow: r, handleHide: s, processOnMount: i}) {
    const o = Se()
      , {props: a, emit: l, proxy: c} = o;
    let u;
    function f(m) {
        e.value === !0 ? p(m) : d(m)
    }
    function d(m) {
        if (a.disable === !0 || m?.qAnchorHandled === !0 || t !== void 0 && t(m) !== !0)
            return;
        const C = a["onUpdate:modelValue"] !== void 0;
        C === !0 && (l("update:modelValue", !0),
        u = m,
        at( () => {
            u === m && (u = void 0)
        }
        )),
        (a.modelValue === null || C === !1) && h(m)
    }
    function h(m) {
        e.value !== !0 && (e.value = !0,
        l("beforeShow", m),
        r !== void 0 ? r(m) : l("show", m))
    }
    function p(m) {
        if (a.disable === !0)
            return;
        const C = a["onUpdate:modelValue"] !== void 0;
        C === !0 && (l("update:modelValue", !1),
        u = m,
        at( () => {
            u === m && (u = void 0)
        }
        )),
        (a.modelValue === null || C === !1) && E(m)
    }
    function E(m) {
        e.value !== !1 && (e.value = !1,
        l("beforeHide", m),
        s !== void 0 ? s(m) : l("hide", m))
    }
    function I(m) {
        a.disable === !0 && m === !0 ? a["onUpdate:modelValue"] !== void 0 && l("update:modelValue", !1) : m === !0 !== e.value && (m === !0 ? h : E)(u)
    }
    de( () => a.modelValue, I),
    n !== void 0 && th(o) === !0 && de( () => c.$route.fullPath, () => {
        n.value === !0 && e.value === !0 && p()
    }
    ),
    i === !0 && St( () => {
        I(a.modelValue)
    }
    );
    const b = {
        show: d,
        hide: p,
        toggle: f
    };
    return Object.assign(c, b),
    b
}
const Ww = {
    transitionShow: {
        type: String,
        default: "fade"
    },
    transitionHide: {
        type: String,
        default: "fade"
    },
    transitionDuration: {
        type: [String, Number],
        default: 300
    }
};
function Bw(e, t= () => {}
, n= () => {}
) {
    return {
        transitionProps: M( () => {
            const r = `q-transition--${e.transitionShow || t()}`
              , s = `q-transition--${e.transitionHide || n()}`;
            return {
                appear: !0,
                enterFromClass: `${r}-enter-from`,
                enterActiveClass: `${r}-enter-active`,
                enterToClass: `${r}-enter-to`,
                leaveFromClass: `${s}-leave-from`,
                leaveActiveClass: `${s}-leave-active`,
                leaveToClass: `${s}-leave-to`
            }
        }
        ),
        transitionStyle: M( () => `--q-transition-duration: ${e.transitionDuration}ms`)
    }
}
let Ln = []
  , cs = [];
function rh(e) {
    cs = cs.filter(t => t !== e)
}
function Uw(e) {
    rh(e),
    cs.push(e)
}
function Xc(e) {
    rh(e),
    cs.length === 0 && Ln.length !== 0 && (Ln[Ln.length - 1](),
    Ln = [])
}
function Za(e) {
    cs.length === 0 ? e() : Ln.push(e)
}
function Hw(e) {
    Ln = Ln.filter(t => t !== e)
}
const lr = []
  , Qr = [];
let zw = 1
  , un = document.body;
function Fi(e, t) {
    const n = document.createElement("div");
    if (n.id = t !== void 0 ? `q-portal--${t}--${zw++}` : e,
    ii.globalNodes !== void 0) {
        const r = ii.globalNodes.class;
        r !== void 0 && (n.className = r)
    }
    return un.appendChild(n),
    lr.push(n),
    Qr.push(t),
    n
}
function el(e) {
    const t = lr.indexOf(e);
    lr.splice(t, 1),
    Qr.splice(t, 1),
    e.remove()
}
function Kw(e) {
    if (e === un)
        return;
    if (un = e,
    un === document.body || Qr.reduce( (n, r) => r === "dialog" ? n + 1 : n, 0) < 2) {
        lr.forEach(n => {
            n.contains(un) === !1 && un.appendChild(n)
        }
        );
        return
    }
    const t = Qr.lastIndexOf("dialog");
    for (let n = 0; n < lr.length; n++) {
        const r = lr[n];
        (n === t || Qr[n] !== "dialog") && r.contains(un) === !1 && un.appendChild(r)
    }
}
const qs = [];
function IS(e) {
    return qs.find(t => t.contentEl !== null && t.contentEl.contains(e))
}
function Gw(e, t) {
    do {
        if (e.$options.name === "QMenu") {
            if (e.hide(t),
            e.$props.separateClosePopup === !0)
                return js(e)
        } else if (e.__qPortal === !0) {
            const n = js(e);
            return n?.$options.name === "QPopupProxy" ? (e.hide(t),
            n) : e
        }
        e = js(e)
    } while (e != null)
}
function NS(e, t, n) {
    for (; n !== 0 && e !== void 0 && e !== null; ) {
        if (e.__qPortal === !0) {
            if (n--,
            e.$options.name === "QMenu") {
                e = Gw(e, t);
                continue
            }
            e.hide(t)
        }
        e = js(e)
    }
}
const Qw = Ye({
    name: "QPortal",
    setup(e, {slots: t}) {
        return () => t.default()
    }
});
function Xw(e) {
    for (e = e.parent; e != null; ) {
        if (e.type.name === "QGlobalDialog")
            return !0;
        if (e.type.name === "QDialog" || e.type.name === "QMenu")
            return !1;
        e = e.parent
    }
    return !1
}
function Yw(e, t, n, r) {
    const s = he(!1)
      , i = he(!1);
    let o = null;
    const a = {}
      , l = r === "dialog" && Xw(e);
    function c(f) {
        if (f === !0) {
            Xc(a),
            i.value = !0;
            return
        }
        i.value = !1,
        s.value === !1 && (l === !1 && o === null && (o = Fi(!1, r)),
        s.value = !0,
        qs.push(e.proxy),
        Uw(a))
    }
    function u(f) {
        if (i.value = !1,
        f !== !0)
            return;
        Xc(a),
        s.value = !1;
        const d = qs.indexOf(e.proxy);
        d !== -1 && qs.splice(d, 1),
        o !== null && (el(o),
        o = null)
    }
    return Ci( () => {
        u(!0)
    }
    ),
    e.proxy.__qPortal = !0,
    yr(e.proxy, "contentEl", () => t.value),
    {
        showPortal: c,
        hidePortal: u,
        portalIsActive: s,
        portalIsAccessible: i,
        renderPortal: () => l === !0 ? n() : s.value === !0 ? [j(Pm, {
            to: o
        }, j(Qw, n))] : void 0
    }
}
function ra(e, t) {
    const n = e.style;
    for (const r in t)
        n[r] = t[r]
}
function Jw(e) {
    if (e == null)
        return;
    if (typeof e == "string")
        try {
            return document.querySelector(e) || void 0
        } catch {
            return
        }
    const t = Xt(e);
    if (t)
        return t.$el || t
}
function Zw(e, t) {
    if (e == null || e.contains(t) === !0)
        return !0;
    for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling)
        if (n.contains(t))
            return !0;
    return !1
}
const PS = [Element, String]
  , e0 = [null, document, document.body, document.scrollingElement, document.documentElement];
function LS(e, t) {
    let n = Jw(t);
    if (n === void 0) {
        if (e == null)
            return window;
        n = e.closest(".scroll,.scroll-y,.overflow-auto")
    }
    return e0.includes(n) ? window : n
}
function sh(e) {
    return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop
}
function ih(e) {
    return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft
}
function oh(e, t, n=0) {
    const r = arguments[3] === void 0 ? performance.now() : arguments[3]
      , s = sh(e);
    if (n <= 0) {
        s !== t && sa(e, t);
        return
    }
    requestAnimationFrame(i => {
        const o = i - r
          , a = s + (t - s) / Math.max(o, n) * o;
        sa(e, a),
        a !== t && oh(e, t, n - o, i)
    }
    )
}
function ah(e, t, n=0) {
    const r = arguments[3] === void 0 ? performance.now() : arguments[3]
      , s = ih(e);
    if (n <= 0) {
        s !== t && ia(e, t);
        return
    }
    requestAnimationFrame(i => {
        const o = i - r
          , a = s + (t - s) / Math.max(o, n) * o;
        ia(e, a),
        a !== t && ah(e, t, n - o, i)
    }
    )
}
function sa(e, t) {
    if (e === window) {
        window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t);
        return
    }
    e.scrollTop = t
}
function ia(e, t) {
    if (e === window) {
        window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
        return
    }
    e.scrollLeft = t
}
function OS(e, t, n) {
    if (n) {
        oh(e, t, n);
        return
    }
    sa(e, t)
}
function RS(e, t, n) {
    if (n) {
        ah(e, t, n);
        return
    }
    ia(e, t)
}
let xs;
function MS() {
    if (xs !== void 0)
        return xs;
    const e = document.createElement("p")
      , t = document.createElement("div");
    ra(e, {
        width: "100%",
        height: "200px"
    }),
    ra(t, {
        position: "absolute",
        top: "0px",
        left: "0px",
        visibility: "hidden",
        width: "200px",
        height: "150px",
        overflow: "hidden"
    }),
    t.appendChild(e),
    document.body.appendChild(t);
    const n = e.offsetWidth;
    t.style.overflow = "scroll";
    let r = e.offsetWidth;
    return n === r && (r = t.clientWidth),
    t.remove(),
    xs = n - r,
    xs
}
function t0(e, t=!0) {
    return !e || e.nodeType !== Node.ELEMENT_NODE ? !1 : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]))
}
let Ir = 0, mo, go, Mr, po = !1, Yc, Jc, Zc, In = null;
function n0(e) {
    r0(e) && bt(e)
}
function r0(e) {
    if (e.target === document.body || e.target.classList.contains("q-layout__backdrop"))
        return !0;
    const t = yp(e)
      , n = e.shiftKey && !e.deltaX
      , r = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY)
      , s = n || r ? e.deltaY : e.deltaX;
    for (let i = 0; i < t.length; i++) {
        const o = t[i];
        if (t0(o, r))
            return r ? s < 0 && o.scrollTop === 0 ? !0 : s > 0 && o.scrollTop + o.clientHeight === o.scrollHeight : s < 0 && o.scrollLeft === 0 ? !0 : s > 0 && o.scrollLeft + o.clientWidth === o.scrollWidth
    }
    return !0
}
function eu(e) {
    e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop)
}
function Ts(e) {
    po !== !0 && (po = !0,
    requestAnimationFrame( () => {
        po = !1;
        const {height: t} = e.target
          , {clientHeight: n, scrollTop: r} = document.scrollingElement;
        (Mr === void 0 || t !== window.innerHeight) && (Mr = n - t,
        document.scrollingElement.scrollTop = r),
        r > Mr && (document.scrollingElement.scrollTop -= Math.ceil((r - Mr) / 8))
    }
    ))
}
function tu(e) {
    const t = document.body
      , n = window.visualViewport !== void 0;
    if (e === "add") {
        const {overflowY: r, overflowX: s} = window.getComputedStyle(t);
        mo = ih(window),
        go = sh(window),
        Yc = t.style.left,
        Jc = t.style.top,
        Zc = window.location.href,
        t.style.left = `-${mo}px`,
        t.style.top = `-${go}px`,
        s !== "hidden" && (s === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"),
        r !== "hidden" && (r === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"),
        t.classList.add("q-body--prevent-scroll"),
        document.qScrollPrevented = !0,
        Ve.is.ios === !0 && (n === !0 ? (window.scrollTo(0, 0),
        window.visualViewport.addEventListener("resize", Ts, ct.passiveCapture),
        window.visualViewport.addEventListener("scroll", Ts, ct.passiveCapture),
        window.scrollTo(0, 0)) : window.addEventListener("scroll", eu, ct.passiveCapture))
    }
    Ve.is.desktop === !0 && Ve.is.mac === !0 && window[`${e}EventListener`]("wheel", n0, ct.notPassive),
    e === "remove" && (Ve.is.ios === !0 && (n === !0 ? (window.visualViewport.removeEventListener("resize", Ts, ct.passiveCapture),
    window.visualViewport.removeEventListener("scroll", Ts, ct.passiveCapture)) : window.removeEventListener("scroll", eu, ct.passiveCapture)),
    t.classList.remove("q-body--prevent-scroll"),
    t.classList.remove("q-body--force-scrollbar-x"),
    t.classList.remove("q-body--force-scrollbar-y"),
    document.qScrollPrevented = !1,
    t.style.left = Yc,
    t.style.top = Jc,
    window.location.href === Zc && window.scrollTo(mo, go),
    Mr = void 0)
}
function oa(e) {
    let t = "add";
    if (e === !0) {
        if (Ir++,
        In !== null) {
            clearTimeout(In),
            In = null;
            return
        }
        if (Ir > 1)
            return
    } else {
        if (Ir === 0 || (Ir--,
        Ir > 0))
            return;
        if (t = "remove",
        Ve.is.ios === !0 && Ve.is.nativeMobile === !0) {
            In !== null && clearTimeout(In),
            In = setTimeout( () => {
                tu(t),
                In = null
            }
            , 100);
            return
        }
    }
    tu(t)
}
function s0() {
    let e;
    return {
        preventBodyScroll(t) {
            t !== e && (e !== void 0 || t === !0) && (e = t,
            oa(t))
        }
    }
}
function Nt(e, t) {
    return e !== void 0 && e() || t
}
function FS(e, t) {
    if (e !== void 0) {
        const n = e();
        if (n != null)
            return n.slice()
    }
    return t
}
function On(e, t) {
    return e !== void 0 ? t.concat(e()) : t
}
function i0(e, t) {
    return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e()
}
function DS(e, t, n, r, s, i) {
    t.key = r + s;
    const o = j(e, t, n);
    return s === !0 ? of(o, i()) : o
}
const $n = [];
let pr;
function o0(e) {
    pr = e.keyCode === 27
}
function a0() {
    pr === !0 && (pr = !1)
}
function l0(e) {
    pr === !0 && (pr = !1,
    ss(e, 27) === !0 && $n[$n.length - 1](e))
}
function lh(e) {
    window[e]("keydown", o0),
    window[e]("blur", a0),
    window[e]("keyup", l0),
    pr = !1
}
function c0(e) {
    Ve.is.desktop === !0 && ($n.push(e),
    $n.length === 1 && lh("addEventListener"))
}
function nu(e) {
    const t = $n.indexOf(e);
    t !== -1 && ($n.splice(t, 1),
    $n.length === 0 && lh("removeEventListener"))
}
const jn = [];
function ch(e) {
    jn[jn.length - 1](e)
}
function u0(e) {
    Ve.is.desktop === !0 && (jn.push(e),
    jn.length === 1 && document.body.addEventListener("focusin", ch))
}
function ru(e) {
    const t = jn.indexOf(e);
    t !== -1 && (jn.splice(t, 1),
    jn.length === 0 && document.body.removeEventListener("focusin", ch))
}
let As = 0;
const f0 = {
    standard: "fixed-full flex-center",
    top: "fixed-top justify-center",
    bottom: "fixed-bottom justify-center",
    right: "fixed-right items-center",
    left: "fixed-left items-center"
}
  , su = {
    standard: ["scale", "scale"],
    top: ["slide-down", "slide-up"],
    bottom: ["slide-up", "slide-down"],
    right: ["slide-left", "slide-right"],
    left: ["slide-right", "slide-left"]
}
  , d0 = Ye({
    name: "QDialog",
    inheritAttrs: !1,
    props: {
        ...jw,
        ...Ww,
        transitionShow: String,
        transitionHide: String,
        persistent: Boolean,
        autoClose: Boolean,
        allowFocusOutside: Boolean,
        noEscDismiss: Boolean,
        noBackdropDismiss: Boolean,
        noRouteDismiss: Boolean,
        noRefocus: Boolean,
        noFocus: Boolean,
        noShake: Boolean,
        seamless: Boolean,
        maximized: Boolean,
        fullWidth: Boolean,
        fullHeight: Boolean,
        square: Boolean,
        backdropFilter: String,
        position: {
            type: String,
            default: "standard",
            validator: e => ["standard", "top", "bottom", "left", "right"].includes(e)
        }
    },
    emits: [...qw, "shake", "click", "escapeKey"],
    setup(e, {slots: t, emit: n, attrs: r}) {
        const s = Se()
          , i = he(null)
          , o = he(!1)
          , a = he(!1);
        let l = null, c = null, u, f;
        const d = M( () => e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0)
          , {preventBodyScroll: h} = s0()
          , {registerTimeout: p} = Dw()
          , {registerTick: E, removeTick: I} = $w()
          , {transitionProps: b, transitionStyle: m} = Bw(e, () => su[e.position][0], () => su[e.position][1])
          , C = M( () => m.value + (e.backdropFilter !== void 0 ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}` : ""))
          , {showPortal: y, hidePortal: x, portalIsAccessible: L, renderPortal: N} = Yw(s, i, Re, "dialog")
          , {hide: W} = Vw({
            showing: o,
            hideOnRouteChange: d,
            handleShow: ee,
            handleHide: J,
            processOnMount: !0
        })
          , {addToHistory: k, removeFromHistory: O} = Fw(o, W, d)
          , q = M( () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === !0 ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${f0[e.position]}` + (a.value === !0 ? " q-dialog__inner--animating" : "") + (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") + (e.square === !0 ? " q-dialog__inner--square" : ""))
          , S = M( () => o.value === !0 && e.seamless !== !0)
          , G = M( () => e.autoClose === !0 ? {
            onClick: z
        } : {})
          , D = M( () => [`q-dialog fullscreen no-pointer-events q-dialog--${S.value === !0 ? "modal" : "seamless"}`, r.class]);
        de( () => e.maximized, ne => {
            o.value === !0 && fe(ne)
        }
        ),
        de(S, ne => {
            h(ne),
            ne === !0 ? (u0(Ne),
            c0(ie)) : (ru(Ne),
            nu(ie))
        }
        );
        function ee(ne) {
            k(),
            c = e.noRefocus === !1 && document.activeElement !== null ? document.activeElement : null,
            fe(e.maximized),
            y(),
            a.value = !0,
            e.noFocus !== !0 ? (document.activeElement?.blur(),
            E(Q)) : I(),
            p( () => {
                if (s.proxy.$q.platform.is.ios === !0) {
                    if (e.seamless !== !0 && document.activeElement) {
                        const {top: F, bottom: Y} = document.activeElement.getBoundingClientRect()
                          , {innerHeight: X} = window
                          , te = window.visualViewport !== void 0 ? window.visualViewport.height : X;
                        F > 0 && Y > te / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - te, Y >= X ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + Y - te / 2))),
                        document.activeElement.scrollIntoView()
                    }
                    f = !0,
                    i.value.click(),
                    f = !1
                }
                y(!0),
                a.value = !1,
                n("show", ne)
            }
            , e.transitionDuration)
        }
        function J(ne) {
            I(),
            O(),
            ce(!0),
            a.value = !0,
            x(),
            c !== null && (((ne?.type.indexOf("key") === 0 ? c.closest('[tabindex]:not([tabindex^="-"])') : void 0) || c).focus(),
            c = null),
            p( () => {
                x(!0),
                a.value = !1,
                n("hide", ne)
            }
            , e.transitionDuration)
        }
        function Q(ne) {
            Za( () => {
                let F = i.value;
                if (F !== null) {
                    if (ne !== void 0) {
                        const Y = F.querySelector(ne);
                        if (Y !== null) {
                            Y.focus({
                                preventScroll: !0
                            });
                            return
                        }
                    }
                    F.contains(document.activeElement) !== !0 && (F = F.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || F.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || F.querySelector("[autofocus], [data-autofocus]") || F,
                    F.focus({
                        preventScroll: !0
                    }))
                }
            }
            )
        }
        function K(ne) {
            ne && typeof ne.focus == "function" ? ne.focus({
                preventScroll: !0
            }) : Q(),
            n("shake");
            const F = i.value;
            F !== null && (F.classList.remove("q-animate--scale"),
            F.classList.add("q-animate--scale"),
            l !== null && clearTimeout(l),
            l = setTimeout( () => {
                l = null,
                i.value !== null && (F.classList.remove("q-animate--scale"),
                Q())
            }
            , 170))
        }
        function ie() {
            e.seamless !== !0 && (e.persistent === !0 || e.noEscDismiss === !0 ? e.maximized !== !0 && e.noShake !== !0 && K() : (n("escapeKey"),
            W()))
        }
        function ce(ne) {
            l !== null && (clearTimeout(l),
            l = null),
            (ne === !0 || o.value === !0) && (fe(!1),
            e.seamless !== !0 && (h(!1),
            ru(Ne),
            nu(ie))),
            ne !== !0 && (c = null)
        }
        function fe(ne) {
            ne === !0 ? u !== !0 && (As < 1 && document.body.classList.add("q-body--dialog"),
            As++,
            u = !0) : u === !0 && (As < 2 && document.body.classList.remove("q-body--dialog"),
            As--,
            u = !1)
        }
        function z(ne) {
            f !== !0 && (W(ne),
            n("click", ne))
        }
        function ge(ne) {
            e.persistent !== !0 && e.noBackdropDismiss !== !0 ? W(ne) : e.noShake !== !0 && K()
        }
        function Ne(ne) {
            e.allowFocusOutside !== !0 && L.value === !0 && Zw(i.value, ne.target) !== !0 && Q('[tabindex]:not([tabindex="-1"])')
        }
        Object.assign(s.proxy, {
            focus: Q,
            shake: K,
            __updateRefocusTarget(ne) {
                c = ne || null
            }
        }),
        kt(ce);
        function Re() {
            return j("div", {
                role: "dialog",
                "aria-modal": S.value === !0 ? "true" : "false",
                ...r,
                class: D.value
            }, [j(ns, {
                name: "q-transition--fade",
                appear: !0
            }, () => S.value === !0 ? j("div", {
                class: "q-dialog__backdrop fixed-full",
                style: C.value,
                "aria-hidden": "true",
                tabindex: -1,
                onClick: ge
            }) : null), j(ns, b.value, () => o.value === !0 ? j("div", {
                ref: i,
                class: q.value,
                style: m.value,
                tabindex: -1,
                ...G.value
            }, Nt(t.default)) : null)])
        }
        return N
    }
})
  , aa = {
    xs: 18,
    sm: 24,
    md: 32,
    lg: 38,
    xl: 46
}
  , ms = {
    size: String
};
function gs(e, t=aa) {
    return M( () => e.size !== void 0 ? {
        fontSize: e.size in t ? `${t[e.size]}px` : e.size
    } : null)
}
const iu = "0 0 24 24"
  , vo = e => e
  , yo = e => `ionicons ${e}`
  , uh = {
    "mdi-": e => `mdi ${e}`,
    "icon-": vo,
    "bt-": e => `bt ${e}`,
    "eva-": e => `eva ${e}`,
    "ion-md": yo,
    "ion-ios": yo,
    "ion-logo": yo,
    "iconfont ": vo,
    "ti-": e => `themify-icon ${e}`,
    "bi-": e => `bootstrap-icons ${e}`,
    "i-": vo
}
  , fh = {
    o_: "-outlined",
    r_: "-round",
    s_: "-sharp"
}
  , dh = {
    sym_o_: "-outlined",
    sym_r_: "-rounded",
    sym_s_: "-sharp"
}
  , h0 = new RegExp("^(" + Object.keys(uh).join("|") + ")")
  , m0 = new RegExp("^(" + Object.keys(fh).join("|") + ")")
  , ou = new RegExp("^(" + Object.keys(dh).join("|") + ")")
  , g0 = /^[Mm]\s?[-+]?\.?\d/
  , p0 = /^img:/
  , v0 = /^svguse:/
  , y0 = /^ion-/
  , b0 = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /
  , Zt = Ye({
    name: "QIcon",
    props: {
        ...ms,
        tag: {
            type: String,
            default: "i"
        },
        name: String,
        color: String,
        left: Boolean,
        right: Boolean
    },
    setup(e, {slots: t}) {
        const {proxy: {$q: n}} = Se()
          , r = gs(e)
          , s = M( () => "q-icon" + (e.left === !0 ? " on-left" : "") + (e.right === !0 ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : ""))
          , i = M( () => {
            let o, a = e.name;
            if (a === "none" || !a)
                return {
                    none: !0
                };
            if (n.iconMapFn !== null) {
                const u = n.iconMapFn(a);
                if (u !== void 0)
                    if (u.icon !== void 0) {
                        if (a = u.icon,
                        a === "none" || !a)
                            return {
                                none: !0
                            }
                    } else
                        return {
                            cls: u.cls,
                            content: u.content !== void 0 ? u.content : " "
                        }
            }
            if (g0.test(a) === !0) {
                const [u,f=iu] = a.split("|");
                return {
                    svg: !0,
                    viewBox: f,
                    nodes: u.split("&&").map(d => {
                        const [h,p,E] = d.split("@@");
                        return j("path", {
                            style: p,
                            d: h,
                            transform: E
                        })
                    }
                    )
                }
            }
            if (p0.test(a) === !0)
                return {
                    img: !0,
                    src: a.substring(4)
                };
            if (v0.test(a) === !0) {
                const [u,f=iu] = a.split("|");
                return {
                    svguse: !0,
                    src: u.substring(7),
                    viewBox: f
                }
            }
            let l = " ";
            const c = a.match(h0);
            if (c !== null)
                o = uh[c[1]](a);
            else if (b0.test(a) === !0)
                o = a;
            else if (y0.test(a) === !0)
                o = `ionicons ion-${n.platform.is.ios === !0 ? "ios" : "md"}${a.substring(3)}`;
            else if (ou.test(a) === !0) {
                o = "notranslate material-symbols";
                const u = a.match(ou);
                u !== null && (a = a.substring(6),
                o += dh[u[1]]),
                l = a
            } else {
                o = "notranslate material-icons";
                const u = a.match(m0);
                u !== null && (a = a.substring(2),
                o += fh[u[1]]),
                l = a
            }
            return {
                cls: o,
                content: l
            }
        }
        );
        return () => {
            const o = {
                class: s.value,
                style: r.value,
                "aria-hidden": "true"
            };
            return i.value.none === !0 ? j(e.tag, o, Nt(t.default)) : i.value.img === !0 ? j(e.tag, o, On(t.default, [j("img", {
                src: i.value.src
            })])) : i.value.svg === !0 ? j(e.tag, o, On(t.default, [j("svg", {
                viewBox: i.value.viewBox || "0 0 24 24"
            }, i.value.nodes)])) : i.value.svguse === !0 ? j(e.tag, o, On(t.default, [j("svg", {
                viewBox: i.value.viewBox
            }, [j("use", {
                "xlink:href": i.value.src
            })])])) : (i.value.cls !== void 0 && (o.class += " " + i.value.cls),
            j(e.tag, o, On(t.default, [i.value.content])))
        }
    }
})
  , _0 = {
    size: {
        type: [String, Number],
        default: "1em"
    },
    color: String
};
function w0(e) {
    return {
        cSize: M( () => e.size in aa ? `${aa[e.size]}px` : e.size),
        classes: M( () => "q-spinner" + (e.color ? ` text-${e.color}` : ""))
    }
}
const vr = Ye({
    name: "QSpinner",
    props: {
        ..._0,
        thickness: {
            type: Number,
            default: 5
        }
    },
    setup(e) {
        const {cSize: t, classes: n} = w0(e);
        return () => j("svg", {
            class: n.value + " q-spinner-mat",
            width: t.value,
            height: t.value,
            viewBox: "25 25 50 50"
        }, [j("circle", {
            class: "path",
            cx: "50",
            cy: "50",
            r: "20",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": e.thickness,
            "stroke-miterlimit": "10"
        })])
    }
});
function C0(e, t=250) {
    let n = !1, r;
    return function() {
        return n === !1 && (n = !0,
        setTimeout( () => {
            n = !1
        }
        , t),
        r = e.apply(this, arguments)),
        r
    }
}
function au(e, t, n, r) {
    n.modifiers.stop === !0 && ri(e);
    const s = n.modifiers.color;
    let i = n.modifiers.center;
    i = i === !0 || r === !0;
    const o = document.createElement("span")
      , a = document.createElement("span")
      , l = vp(e)
      , {left: c, top: u, width: f, height: d} = t.getBoundingClientRect()
      , h = Math.sqrt(f * f + d * d)
      , p = h / 2
      , E = `${(f - h) / 2}px`
      , I = i ? E : `${l.left - c - p}px`
      , b = `${(d - h) / 2}px`
      , m = i ? b : `${l.top - u - p}px`;
    a.className = "q-ripple__inner",
    ra(a, {
        height: `${h}px`,
        width: `${h}px`,
        transform: `translate3d(${I},${m},0) scale3d(.2,.2,1)`,
        opacity: 0
    }),
    o.className = `q-ripple${s ? " text-" + s : ""}`,
    o.setAttribute("dir", "ltr"),
    o.appendChild(a),
    t.appendChild(o);
    const C = () => {
        o.remove(),
        clearTimeout(y)
    }
    ;
    n.abort.push(C);
    let y = setTimeout( () => {
        a.classList.add("q-ripple__inner--enter"),
        a.style.transform = `translate3d(${E},${b},0) scale3d(1,1,1)`,
        a.style.opacity = .2,
        y = setTimeout( () => {
            a.classList.remove("q-ripple__inner--enter"),
            a.classList.add("q-ripple__inner--leave"),
            a.style.opacity = 0,
            y = setTimeout( () => {
                o.remove(),
                n.abort.splice(n.abort.indexOf(C), 1)
            }
            , 275)
        }
        , 250)
    }
    , 50)
}
function lu(e, {modifiers: t, value: n, arg: r}) {
    const s = Object.assign({}, e.cfg.ripple, t, n);
    e.modifiers = {
        early: s.early === !0,
        stop: s.stop === !0,
        center: s.center === !0,
        color: s.color || r,
        keyCodes: [].concat(s.keyCodes || 13)
    }
}
const E0 = pp({
    name: "ripple",
    beforeMount(e, t) {
        const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
        if (n.ripple === !1)
            return;
        const r = {
            cfg: n,
            enabled: t.value !== !1,
            modifiers: {},
            abort: [],
            start(s) {
                r.enabled === !0 && s.qSkipRipple !== !0 && s.type === (r.modifiers.early === !0 ? "pointerdown" : "click") && au(s, e, r, s.qKeyEvent === !0)
            },
            keystart: C0(s => {
                r.enabled === !0 && s.qSkipRipple !== !0 && ss(s, r.modifiers.keyCodes) === !0 && s.type === `key${r.modifiers.early === !0 ? "down" : "up"}` && au(s, e, r, !0)
            }
            , 300)
        };
        lu(r, t),
        e.__qripple = r,
        bp(r, "main", [[e, "pointerdown", "start", "passive"], [e, "click", "start", "passive"], [e, "keydown", "keystart", "passive"], [e, "keyup", "keystart", "passive"]])
    },
    updated(e, t) {
        if (t.oldValue !== t.value) {
            const n = e.__qripple;
            n !== void 0 && (n.enabled = t.value !== !1,
            n.enabled === !0 && Object(t.value) === t.value && lu(n, t))
        }
    },
    beforeUnmount(e) {
        const t = e.__qripple;
        t !== void 0 && (t.abort.forEach(n => {
            n()
        }
        ),
        _p(t, "main"),
        delete e._qripple)
    }
})
  , hh = {
    left: "start",
    center: "center",
    right: "end",
    between: "between",
    around: "around",
    evenly: "evenly",
    stretch: "stretch"
}
  , S0 = Object.keys(hh)
  , mh = {
    align: {
        type: String,
        validator: e => S0.includes(e)
    }
};
function gh(e) {
    return M( () => {
        const t = e.align === void 0 ? e.vertical === !0 ? "stretch" : "left" : e.align;
        return `${e.vertical === !0 ? "items" : "justify"}-${hh[t]}`
    }
    )
}
function cu(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
function uu(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function k0(e, t) {
    for (const n in t) {
        const r = t[n]
          , s = e[n];
        if (typeof r == "string") {
            if (r !== s)
                return !1
        } else if (Array.isArray(s) === !1 || s.length !== r.length || r.some( (i, o) => i !== s[o]))
            return !1
    }
    return !0
}
function fu(e, t) {
    return Array.isArray(t) === !0 ? e.length === t.length && e.every( (n, r) => n === t[r]) : e.length === 1 && e[0] === t
}
function x0(e, t) {
    return Array.isArray(e) === !0 ? fu(e, t) : Array.isArray(t) === !0 ? fu(t, e) : e === t
}
function T0(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (x0(e[n], t[n]) === !1)
            return !1;
    return !0
}
const ph = {
    to: [String, Object],
    replace: Boolean,
    href: String,
    target: String,
    disable: Boolean
}
  , $S = {
    ...ph,
    exact: Boolean,
    activeClass: {
        type: String,
        default: "q-router-link--active"
    },
    exactActiveClass: {
        type: String,
        default: "q-router-link--exact-active"
    }
};
function A0({fallbackTag: e, useDisableForRouterLinkProps: t=!0}={}) {
    const n = Se()
      , {props: r, proxy: s, emit: i} = n
      , o = th(n)
      , a = M( () => r.disable !== !0 && r.href !== void 0)
      , l = M(t === !0 ? () => o === !0 && r.disable !== !0 && a.value !== !0 && r.to !== void 0 && r.to !== null && r.to !== "" : () => o === !0 && a.value !== !0 && r.to !== void 0 && r.to !== null && r.to !== "")
      , c = M( () => l.value === !0 ? m(r.to) : null)
      , u = M( () => c.value !== null)
      , f = M( () => a.value === !0 || u.value === !0)
      , d = M( () => r.type === "a" || f.value === !0 ? "a" : r.tag || e || "div")
      , h = M( () => a.value === !0 ? {
        href: r.href,
        target: r.target
    } : u.value === !0 ? {
        href: c.value.href,
        target: r.target
    } : {})
      , p = M( () => {
        if (u.value === !1)
            return -1;
        const {matched: x} = c.value
          , {length: L} = x
          , N = x[L - 1];
        if (N === void 0)
            return -1;
        const W = s.$route.matched;
        if (W.length === 0)
            return -1;
        const k = W.findIndex(uu.bind(null, N));
        if (k !== -1)
            return k;
        const O = cu(x[L - 2]);
        return L > 1 && cu(N) === O && W[W.length - 1].path !== O ? W.findIndex(uu.bind(null, x[L - 2])) : k
    }
    )
      , E = M( () => u.value === !0 && p.value !== -1 && k0(s.$route.params, c.value.params))
      , I = M( () => E.value === !0 && p.value === s.$route.matched.length - 1 && T0(s.$route.params, c.value.params))
      , b = M( () => u.value === !0 ? I.value === !0 ? ` ${r.exactActiveClass} ${r.activeClass}` : r.exact === !0 ? "" : E.value === !0 ? ` ${r.activeClass}` : "" : "");
    function m(x) {
        try {
            return s.$router.resolve(x)
        } catch {}
        return null
    }
    function C(x, {returnRouterError: L, to: N=r.to, replace: W=r.replace}={}) {
        if (r.disable === !0)
            return x.preventDefault(),
            Promise.resolve(!1);
        if (x.metaKey || x.altKey || x.ctrlKey || x.shiftKey || x.button !== void 0 && x.button !== 0 || r.target === "_blank")
            return Promise.resolve(!1);
        x.preventDefault();
        const k = s.$router[W === !0 ? "replace" : "push"](N);
        return L === !0 ? k : k.then( () => {}
        ).catch( () => {}
        )
    }
    function y(x) {
        if (u.value === !0) {
            const L = N => C(x, N);
            i("click", x, L),
            x.defaultPrevented !== !0 && L()
        } else
            i("click", x)
    }
    return {
        hasRouterLink: u,
        hasHrefLink: a,
        hasLink: f,
        linkTag: d,
        resolvedLink: c,
        linkIsActive: E,
        linkIsExactActive: I,
        linkClass: b,
        linkAttrs: h,
        getLink: m,
        navigateToRouterLink: C,
        navigateOnClick: y
    }
}
const du = {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32
}
  , I0 = {
    xs: 8,
    sm: 10,
    md: 14,
    lg: 20,
    xl: 24
}
  , N0 = ["button", "submit", "reset"]
  , P0 = /[^\s]\/[^\s]/
  , L0 = ["flat", "outline", "push", "unelevated"];
function vh(e, t) {
    return e.flat === !0 ? "flat" : e.outline === !0 ? "outline" : e.push === !0 ? "push" : e.unelevated === !0 ? "unelevated" : t
}
function jS(e) {
    const t = vh(e);
    return t !== void 0 ? {
        [t]: !0
    } : {}
}
const O0 = {
    ...ms,
    ...ph,
    type: {
        type: String,
        default: "button"
    },
    label: [Number, String],
    icon: String,
    iconRight: String,
    ...L0.reduce( (e, t) => (e[t] = Boolean) && e, {}),
    square: Boolean,
    rounded: Boolean,
    glossy: Boolean,
    size: String,
    fab: Boolean,
    fabMini: Boolean,
    padding: String,
    color: String,
    textColor: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    tabindex: [Number, String],
    ripple: {
        type: [Boolean, Object],
        default: !0
    },
    align: {
        ...mh.align,
        default: "center"
    },
    stack: Boolean,
    stretch: Boolean,
    loading: {
        type: Boolean,
        default: null
    },
    disable: Boolean
}
  , R0 = {
    ...O0,
    round: Boolean
};
function M0(e) {
    const t = gs(e, I0)
      , n = gh(e)
      , {hasRouterLink: r, hasLink: s, linkTag: i, linkAttrs: o, navigateOnClick: a} = A0({
        fallbackTag: "button"
    })
      , l = M( () => {
        const I = e.fab === !1 && e.fabMini === !1 ? t.value : {};
        return e.padding !== void 0 ? Object.assign({}, I, {
            padding: e.padding.split(/\s+/).map(b => b in du ? du[b] + "px" : b).join(" "),
            minWidth: "0",
            minHeight: "0"
        }) : I
    }
    )
      , c = M( () => e.rounded === !0 || e.fab === !0 || e.fabMini === !0)
      , u = M( () => e.disable !== !0 && e.loading !== !0)
      , f = M( () => u.value === !0 ? e.tabindex || 0 : -1)
      , d = M( () => vh(e, "standard"))
      , h = M( () => {
        const I = {
            tabindex: f.value
        };
        return s.value === !0 ? Object.assign(I, o.value) : N0.includes(e.type) === !0 && (I.type = e.type),
        i.value === "a" ? (e.disable === !0 ? I["aria-disabled"] = "true" : I.href === void 0 && (I.role = "button"),
        r.value !== !0 && P0.test(e.type) === !0 && (I.type = e.type)) : e.disable === !0 && (I.disabled = "",
        I["aria-disabled"] = "true"),
        e.loading === !0 && e.percentage !== void 0 && Object.assign(I, {
            role: "progressbar",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": e.percentage
        }),
        I
    }
    )
      , p = M( () => {
        let I;
        e.color !== void 0 ? e.flat === !0 || e.outline === !0 ? I = `text-${e.textColor || e.color}` : I = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (I = `text-${e.textColor}`);
        const b = e.round === !0 ? "round" : `rectangle${c.value === !0 ? " q-btn--rounded" : e.square === !0 ? " q-btn--square" : ""}`;
        return `q-btn--${d.value} q-btn--${b}` + (I !== void 0 ? " " + I : "") + (u.value === !0 ? " q-btn--actionable q-focusable q-hoverable" : e.disable === !0 ? " disabled" : "") + (e.fab === !0 ? " q-btn--fab" : e.fabMini === !0 ? " q-btn--fab-mini" : "") + (e.noCaps === !0 ? " q-btn--no-uppercase" : "") + (e.dense === !0 ? " q-btn--dense" : "") + (e.stretch === !0 ? " no-border-radius self-stretch" : "") + (e.glossy === !0 ? " glossy" : "") + (e.square ? " q-btn--square" : "")
    }
    )
      , E = M( () => n.value + (e.stack === !0 ? " column" : " row") + (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") + (e.loading === !0 ? " q-btn__content--hidden" : ""));
    return {
        classes: p,
        style: l,
        innerClasses: E,
        attributes: h,
        hasLink: s,
        linkTag: i,
        navigateOnClick: a,
        isActionable: u
    }
}
const {passiveCapture: vt} = ct;
let Gn = null
  , Qn = null
  , Xn = null;
const la = Ye({
    name: "QBtn",
    props: {
        ...R0,
        percentage: Number,
        darkPercentage: Boolean,
        onTouchstart: [Function, Array]
    },
    emits: ["click", "keydown", "mousedown", "keyup"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: r} = Se()
          , {classes: s, style: i, innerClasses: o, attributes: a, hasLink: l, linkTag: c, navigateOnClick: u, isActionable: f} = M0(e)
          , d = he(null)
          , h = he(null);
        let p = null, E, I = null;
        const b = M( () => e.label !== void 0 && e.label !== null && e.label !== "")
          , m = M( () => e.disable === !0 || e.ripple === !1 ? !1 : {
            keyCodes: l.value === !0 ? [13, 32] : [13],
            ...e.ripple === !0 ? {} : e.ripple
        })
          , C = M( () => ({
            center: e.round
        }))
          , y = M( () => {
            const D = Math.max(0, Math.min(100, e.percentage));
            return D > 0 ? {
                transition: "transform 0.6s",
                transform: `translateX(${D - 100}%)`
            } : {}
        }
        )
          , x = M( () => {
            if (e.loading === !0)
                return {
                    onMousedown: G,
                    onTouchstart: G,
                    onClick: G,
                    onKeydown: G,
                    onKeyup: G
                };
            if (f.value === !0) {
                const D = {
                    onClick: N,
                    onKeydown: W,
                    onMousedown: O
                };
                if (r.$q.platform.has.touch === !0) {
                    const ee = e.onTouchstart !== void 0 ? "" : "Passive";
                    D[`onTouchstart${ee}`] = k
                }
                return D
            }
            return {
                onClick: bt
            }
        }
        )
          , L = M( () => ({
            ref: d,
            class: "q-btn q-btn-item non-selectable no-outline " + s.value,
            style: i.value,
            ...a.value,
            ...x.value
        }));
        function N(D) {
            if (d.value !== null) {
                if (D !== void 0) {
                    if (D.defaultPrevented === !0)
                        return;
                    const ee = document.activeElement;
                    if (e.type === "submit" && ee !== document.body && d.value.contains(ee) === !1 && ee.contains(d.value) === !1) {
                        D.qAvoidFocus !== !0 && d.value.focus();
                        const J = () => {
                            document.removeEventListener("keydown", bt, !0),
                            document.removeEventListener("keyup", J, vt),
                            d.value?.removeEventListener("blur", J, vt)
                        }
                        ;
                        document.addEventListener("keydown", bt, !0),
                        document.addEventListener("keyup", J, vt),
                        d.value.addEventListener("blur", J, vt)
                    }
                }
                u(D)
            }
        }
        function W(D) {
            d.value !== null && (n("keydown", D),
            ss(D, [13, 32]) === !0 && Qn !== d.value && (Qn !== null && S(),
            D.defaultPrevented !== !0 && (D.qAvoidFocus !== !0 && d.value.focus(),
            Qn = d.value,
            d.value.classList.add("q-btn--active"),
            document.addEventListener("keyup", q, !0),
            d.value.addEventListener("blur", q, vt)),
            bt(D)))
        }
        function k(D) {
            d.value !== null && (n("touchstart", D),
            D.defaultPrevented !== !0 && (Gn !== d.value && (Gn !== null && S(),
            Gn = d.value,
            p = D.target,
            p.addEventListener("touchcancel", q, vt),
            p.addEventListener("touchend", q, vt)),
            E = !0,
            I !== null && clearTimeout(I),
            I = setTimeout( () => {
                I = null,
                E = !1
            }
            , 200)))
        }
        function O(D) {
            d.value !== null && (D.qSkipRipple = E === !0,
            n("mousedown", D),
            D.defaultPrevented !== !0 && Xn !== d.value && (Xn !== null && S(),
            Xn = d.value,
            d.value.classList.add("q-btn--active"),
            document.addEventListener("mouseup", q, vt)))
        }
        function q(D) {
            if (d.value !== null && !(D?.type === "blur" && document.activeElement === d.value)) {
                if (D?.type === "keyup") {
                    if (Qn === d.value && ss(D, [13, 32]) === !0) {
                        const ee = new MouseEvent("click",D);
                        ee.qKeyEvent = !0,
                        D.defaultPrevented === !0 && vn(ee),
                        D.cancelBubble === !0 && ri(ee),
                        d.value.dispatchEvent(ee),
                        bt(D),
                        D.qKeyEvent = !0
                    }
                    n("keyup", D)
                }
                S()
            }
        }
        function S(D) {
            const ee = h.value;
            D !== !0 && (Gn === d.value || Xn === d.value) && ee !== null && ee !== document.activeElement && (ee.setAttribute("tabindex", -1),
            ee.focus()),
            Gn === d.value && (p !== null && (p.removeEventListener("touchcancel", q, vt),
            p.removeEventListener("touchend", q, vt)),
            Gn = p = null),
            Xn === d.value && (document.removeEventListener("mouseup", q, vt),
            Xn = null),
            Qn === d.value && (document.removeEventListener("keyup", q, !0),
            d.value?.removeEventListener("blur", q, vt),
            Qn = null),
            d.value?.classList.remove("q-btn--active")
        }
        function G(D) {
            bt(D),
            D.qSkipRipple = !0
        }
        return kt( () => {
            S(!0)
        }
        ),
        Object.assign(r, {
            click: D => {
                f.value === !0 && N(D)
            }
        }),
        () => {
            let D = [];
            e.icon !== void 0 && D.push(j(Zt, {
                name: e.icon,
                left: e.stack !== !0 && b.value === !0,
                role: "img"
            })),
            b.value === !0 && D.push(j("span", {
                class: "block"
            }, [e.label])),
            D = On(t.default, D),
            e.iconRight !== void 0 && e.round === !1 && D.push(j(Zt, {
                name: e.iconRight,
                right: e.stack !== !0 && b.value === !0,
                role: "img"
            }));
            const ee = [j("span", {
                class: "q-focus-helper",
                ref: h
            })];
            return e.loading === !0 && e.percentage !== void 0 && ee.push(j("span", {
                class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === !0 ? " q-btn__progress--dark" : "")
            }, [j("span", {
                class: "q-btn__progress-indicator fit block",
                style: y.value
            })])),
            ee.push(j("span", {
                class: "q-btn__content text-center col items-center q-anchor--skip " + o.value
            }, D)),
            e.loading !== null && ee.push(j(ns, {
                name: "q-transition--fade"
            }, () => e.loading === !0 ? [j("span", {
                key: "loading",
                class: "absolute-full flex flex-center"
            }, t.loading !== void 0 ? t.loading() : [j(vr)])] : null)),
            of(j(c.value, L.value, ee), [[E0, m.value, void 0, C.value]])
        }
    }
})
  , Un = {
    dark: {
        type: Boolean,
        default: null
    }
};
function Hn(e, t) {
    return M( () => e.dark === null ? t.dark.isActive : e.dark)
}
const F0 = Ye({
    name: "QCard",
    props: {
        ...Un,
        tag: {
            type: String,
            default: "div"
        },
        square: Boolean,
        flat: Boolean,
        bordered: Boolean
    },
    setup(e, {slots: t}) {
        const {proxy: {$q: n}} = Se()
          , r = Hn(e, n)
          , s = M( () => "q-card" + (r.value === !0 ? " q-card--dark q-dark" : "") + (e.bordered === !0 ? " q-card--bordered" : "") + (e.square === !0 ? " q-card--square no-border-radius" : "") + (e.flat === !0 ? " q-card--flat no-shadow" : ""));
        return () => j(e.tag, {
            class: s.value
        }, Nt(t.default))
    }
})
  , Nr = Ye({
    name: "QCardSection",
    props: {
        tag: {
            type: String,
            default: "div"
        },
        horizontal: Boolean
    },
    setup(e, {slots: t}) {
        const n = M( () => `q-card__section q-card__section--${e.horizontal === !0 ? "horiz row no-wrap" : "vert"}`);
        return () => j(e.tag, {
            class: n.value
        }, Nt(t.default))
    }
})
  , D0 = Ye({
    name: "QCardActions",
    props: {
        ...mh,
        vertical: Boolean
    },
    setup(e, {slots: t}) {
        const n = gh(e)
          , r = M( () => `q-card__actions ${n.value} q-card__actions--${e.vertical === !0 ? "vert column" : "horiz row"}`);
        return () => j("div", {
            class: r.value
        }, Nt(t.default))
    }
})
  , $0 = {
    true: "inset",
    item: "item-inset",
    "item-thumbnail": "item-thumbnail-inset"
}
  , bo = {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24
}
  , hu = Ye({
    name: "QSeparator",
    props: {
        ...Un,
        spaced: [Boolean, String],
        inset: [Boolean, String],
        vertical: Boolean,
        color: String,
        size: String
    },
    setup(e) {
        const t = Se()
          , n = Hn(e, t.proxy.$q)
          , r = M( () => e.vertical === !0 ? "vertical" : "horizontal")
          , s = M( () => ` q-separator--${r.value}`)
          , i = M( () => e.inset !== !1 ? `${s.value}-${$0[e.inset]}` : "")
          , o = M( () => `q-separator${s.value}${i.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === !0 ? " q-separator--dark" : ""))
          , a = M( () => {
            const l = {};
            if (e.size !== void 0 && (l[e.vertical === !0 ? "width" : "height"] = e.size),
            e.spaced !== !1) {
                const c = e.spaced === !0 ? `${bo.md}px` : e.spaced in bo ? `${bo[e.spaced]}px` : e.spaced
                  , u = e.vertical === !0 ? ["Left", "Right"] : ["Top", "Bottom"];
                l[`margin${u[0]}`] = l[`margin${u[1]}`] = c
            }
            return l
        }
        );
        return () => j("hr", {
            class: o.value,
            style: a.value,
            "aria-orientation": r.value
        })
    }
});
let _o, Is = 0;
const Ke = new Array(256);
for (let e = 0; e < 256; e++)
    Ke[e] = (e + 256).toString(16).substring(1);
const j0 = ( () => {
    const e = typeof crypto < "u" ? crypto : typeof window < "u" ? window.crypto || window.msCrypto : void 0;
    if (e !== void 0) {
        if (e.randomBytes !== void 0)
            return e.randomBytes;
        if (e.getRandomValues !== void 0)
            return t => {
                const n = new Uint8Array(t);
                return e.getRandomValues(n),
                n
            }
    }
    return t => {
        const n = [];
        for (let r = t; r > 0; r--)
            n.push(Math.floor(Math.random() * 256));
        return n
    }
}
)()
  , mu = 4096;
function ca() {
    (_o === void 0 || Is + 16 > mu) && (Is = 0,
    _o = j0(mu));
    const e = Array.prototype.slice.call(_o, Is, Is += 16);
    return e[6] = e[6] & 15 | 64,
    e[8] = e[8] & 63 | 128,
    Ke[e[0]] + Ke[e[1]] + Ke[e[2]] + Ke[e[3]] + "-" + Ke[e[4]] + Ke[e[5]] + "-" + Ke[e[6]] + Ke[e[7]] + "-" + Ke[e[8]] + Ke[e[9]] + "-" + Ke[e[10]] + Ke[e[11]] + Ke[e[12]] + Ke[e[13]] + Ke[e[14]] + Ke[e[15]]
}
function q0(e) {
    return e ?? null
}
function gu(e, t) {
    return e ?? (t === !0 ? `f_${ca()}` : null)
}
function V0({getValue: e, required: t=!0}={}) {
    if (_n.value === !0) {
        const n = he(e !== void 0 ? q0(e()) : null);
        return t === !0 && n.value === null && St( () => {
            n.value = `f_${ca()}`
        }
        ),
        e !== void 0 && de(e, r => {
            n.value = gu(r, t)
        }
        ),
        n
    }
    return e !== void 0 ? M( () => gu(e(), t)) : he(`f_${ca()}`)
}
const pu = /^on[A-Z]/;
function W0() {
    const {attrs: e, vnode: t} = Se()
      , n = {
        listeners: he({}),
        attributes: he({})
    };
    function r() {
        const s = {}
          , i = {};
        for (const o in e)
            o !== "class" && o !== "style" && pu.test(o) === !1 && (s[o] = e[o]);
        for (const o in t.props)
            pu.test(o) === !0 && (i[o] = t.props[o]);
        n.attributes.value = s,
        n.listeners.value = i
    }
    return bf(r),
    r(),
    n
}
function B0({validate: e, resetValidation: t, requiresQForm: n}) {
    const r = lt(Op, !1);
    if (r !== !1) {
        const {props: s, proxy: i} = Se();
        Object.assign(i, {
            validate: e,
            resetValidation: t
        }),
        de( () => s.disable, o => {
            o === !0 ? (typeof t == "function" && t(),
            r.unbindComponent(i)) : r.bindComponent(i)
        }
        ),
        St( () => {
            s.disable !== !0 && r.bindComponent(i)
        }
        ),
        kt( () => {
            s.disable !== !0 && r.unbindComponent(i)
        }
        )
    } else
        n === !0 && console.error("Parent QForm not found on useFormChild()!")
}
const vu = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/
  , yu = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/
  , bu = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/
  , Ns = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/
  , Ps = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/
  , wo = {
    date: e => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
    time: e => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
    fulltime: e => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
    timeOrFulltime: e => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
    email: e => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),
    hexColor: e => vu.test(e),
    hexaColor: e => yu.test(e),
    hexOrHexaColor: e => bu.test(e),
    rgbColor: e => Ns.test(e),
    rgbaColor: e => Ps.test(e),
    rgbOrRgbaColor: e => Ns.test(e) || Ps.test(e),
    hexOrRgbColor: e => vu.test(e) || Ns.test(e),
    hexaOrRgbaColor: e => yu.test(e) || Ps.test(e),
    anyColor: e => bu.test(e) || Ns.test(e) || Ps.test(e)
}
  , U0 = [!0, !1, "ondemand"]
  , H0 = {
    modelValue: {},
    error: {
        type: Boolean,
        default: null
    },
    errorMessage: String,
    noErrorIcon: Boolean,
    rules: Array,
    reactiveRules: Boolean,
    lazyRules: {
        type: [Boolean, String],
        default: !1,
        validator: e => U0.includes(e)
    }
};
function z0(e, t) {
    const {props: n, proxy: r} = Se()
      , s = he(!1)
      , i = he(null)
      , o = he(!1);
    B0({
        validate: E,
        resetValidation: p
    });
    let a = 0, l;
    const c = M( () => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0)
      , u = M( () => n.disable !== !0 && c.value === !0 && t.value === !1)
      , f = M( () => n.error === !0 || s.value === !0)
      , d = M( () => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : i.value);
    de( () => n.modelValue, () => {
        o.value = !0,
        u.value === !0 && n.lazyRules === !1 && I()
    }
    );
    function h() {
        n.lazyRules !== "ondemand" && u.value === !0 && o.value === !0 && I()
    }
    de( () => n.reactiveRules, b => {
        b === !0 ? l === void 0 && (l = de( () => n.rules, h, {
            immediate: !0,
            deep: !0
        })) : l !== void 0 && (l(),
        l = void 0)
    }
    , {
        immediate: !0
    }),
    de( () => n.lazyRules, h),
    de(e, b => {
        b === !0 ? o.value = !0 : u.value === !0 && n.lazyRules !== "ondemand" && I()
    }
    );
    function p() {
        a++,
        t.value = !1,
        o.value = !1,
        s.value = !1,
        i.value = null,
        I.cancel()
    }
    function E(b=n.modelValue) {
        if (n.disable === !0 || c.value === !1)
            return !0;
        const m = ++a
          , C = t.value !== !0 ? () => {
            o.value = !0
        }
        : () => {}
          , y = (L, N) => {
            L === !0 && C(),
            s.value = L,
            i.value = N || null,
            t.value = !1
        }
          , x = [];
        for (let L = 0; L < n.rules.length; L++) {
            const N = n.rules[L];
            let W;
            if (typeof N == "function" ? W = N(b, wo) : typeof N == "string" && wo[N] !== void 0 && (W = wo[N](b)),
            W === !1 || typeof W == "string")
                return y(!0, W),
                !1;
            W !== !0 && W !== void 0 && x.push(W)
        }
        return x.length === 0 ? (y(!1),
        !0) : (t.value = !0,
        Promise.all(x).then(L => {
            if (L === void 0 || Array.isArray(L) === !1 || L.length === 0)
                return m === a && y(!1),
                !0;
            const N = L.find(W => W === !1 || typeof W == "string");
            return m === a && y(N !== void 0, N),
            N === void 0
        }
        , L => (m === a && (console.error(L),
        y(!0)),
        !1)))
    }
    const I = Zf(E, 0);
    return kt( () => {
        l?.(),
        I.cancel()
    }
    ),
    Object.assign(r, {
        resetValidation: p,
        validate: E
    }),
    yr(r, "hasError", () => f.value),
    {
        isDirtyModel: o,
        hasRules: c,
        hasError: f,
        errorMessage: d,
        validate: E,
        resetValidation: p
    }
}
function ua(e) {
    return e != null && ("" + e).length !== 0
}
const K0 = {
    ...Un,
    ...H0,
    label: String,
    stackLabel: Boolean,
    hint: String,
    hideHint: Boolean,
    prefix: String,
    suffix: String,
    labelColor: String,
    color: String,
    bgColor: String,
    filled: Boolean,
    outlined: Boolean,
    borderless: Boolean,
    standout: [Boolean, String],
    square: Boolean,
    loading: Boolean,
    labelSlot: Boolean,
    bottomSlots: Boolean,
    hideBottomSpace: Boolean,
    rounded: Boolean,
    dense: Boolean,
    itemAligned: Boolean,
    counter: Boolean,
    clearable: Boolean,
    clearIcon: String,
    disable: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    for: String
}
  , G0 = {
    ...K0,
    maxlength: [Number, String]
}
  , Q0 = ["update:modelValue", "clear", "focus", "blur"];
function X0({requiredForAttr: e=!0, tagProp: t, changeEvent: n=!1}={}) {
    const {props: r, proxy: s} = Se()
      , i = Hn(r, s.$q)
      , o = V0({
        required: e,
        getValue: () => r.for
    });
    return {
        requiredForAttr: e,
        changeEvent: n,
        tag: t === !0 ? M( () => r.tag) : {
            value: "label"
        },
        isDark: i,
        editable: M( () => r.disable !== !0 && r.readonly !== !0),
        innerLoading: he(!1),
        focused: he(!1),
        hasPopupOpen: !1,
        splitAttrs: W0(),
        targetUid: o,
        rootRef: he(null),
        targetRef: he(null),
        controlRef: he(null)
    }
}
function Y0(e) {
    const {props: t, emit: n, slots: r, attrs: s, proxy: i} = Se()
      , {$q: o} = i;
    let a = null;
    e.hasValue === void 0 && (e.hasValue = M( () => ua(t.modelValue))),
    e.emitValue === void 0 && (e.emitValue = K => {
        n("update:modelValue", K)
    }
    ),
    e.controlEvents === void 0 && (e.controlEvents = {
        onFocusin: k,
        onFocusout: O
    }),
    Object.assign(e, {
        clearValue: q,
        onControlFocusin: k,
        onControlFocusout: O,
        focus: N
    }),
    e.computedCounter === void 0 && (e.computedCounter = M( () => {
        if (t.counter !== !1) {
            const K = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === !0 ? t.modelValue.length : 0
              , ie = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
            return K + (ie !== void 0 ? " / " + ie : "")
        }
    }
    ));
    const {isDirtyModel: l, hasRules: c, hasError: u, errorMessage: f, resetValidation: d} = z0(e.focused, e.innerLoading)
      , h = e.floatingLabel !== void 0 ? M( () => t.stackLabel === !0 || e.focused.value === !0 || e.floatingLabel.value === !0) : M( () => t.stackLabel === !0 || e.focused.value === !0 || e.hasValue.value === !0)
      , p = M( () => t.bottomSlots === !0 || t.hint !== void 0 || c.value === !0 || t.counter === !0 || t.error !== null)
      , E = M( () => t.filled === !0 ? "filled" : t.outlined === !0 ? "outlined" : t.borderless === !0 ? "borderless" : t.standout ? "standout" : "standard")
      , I = M( () => `q-field row no-wrap items-start q-field--${E.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === !0 ? " q-field--rounded" : "") + (t.square === !0 ? " q-field--square" : "") + (h.value === !0 ? " q-field--float" : "") + (m.value === !0 ? " q-field--labeled" : "") + (t.dense === !0 ? " q-field--dense" : "") + (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === !0 ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === !0 ? " q-field--focused" : "") + (u.value === !0 ? " q-field--error" : "") + (u.value === !0 || e.focused.value === !0 ? " q-field--highlighted" : "") + (t.hideBottomSpace !== !0 && p.value === !0 ? " q-field--with-bottom" : "") + (t.disable === !0 ? " q-field--disabled" : t.readonly === !0 ? " q-field--readonly" : ""))
      , b = M( () => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (u.value === !0 ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === !0 ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : ""))
      , m = M( () => t.labelSlot === !0 || t.label !== void 0)
      , C = M( () => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && u.value !== !0 ? ` text-${t.labelColor}` : ""))
      , y = M( () => ({
        id: e.targetUid.value,
        editable: e.editable.value,
        focused: e.focused.value,
        floatingLabel: h.value,
        modelValue: t.modelValue,
        emitValue: e.emitValue
    }))
      , x = M( () => {
        const K = {};
        return e.targetUid.value && (K.for = e.targetUid.value),
        t.disable === !0 && (K["aria-disabled"] = "true"),
        K
    }
    );
    function L() {
        const K = document.activeElement;
        let ie = e.targetRef?.value;
        ie && (K === null || K.id !== e.targetUid.value) && (ie.hasAttribute("tabindex") === !0 || (ie = ie.querySelector("[tabindex]")),
        ie !== K && ie?.focus({
            preventScroll: !0
        }))
    }
    function N() {
        Za(L)
    }
    function W() {
        Hw(L);
        const K = document.activeElement;
        K !== null && e.rootRef.value.contains(K) && K.blur()
    }
    function k(K) {
        a !== null && (clearTimeout(a),
        a = null),
        e.editable.value === !0 && e.focused.value === !1 && (e.focused.value = !0,
        n("focus", K))
    }
    function O(K, ie) {
        a !== null && clearTimeout(a),
        a = setTimeout( () => {
            a = null,
            !(document.hasFocus() === !0 && (e.hasPopupOpen === !0 || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== !1)) && (e.focused.value === !0 && (e.focused.value = !1,
            n("blur", K)),
            ie?.())
        }
        )
    }
    function q(K) {
        bt(K),
        o.platform.is.mobile !== !0 ? (e.targetRef?.value || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === !0 && document.activeElement.blur(),
        t.type === "file" && (e.inputRef.value.value = null),
        n("update:modelValue", null),
        e.changeEvent === !0 && n("change", null),
        n("clear", t.modelValue),
        at( () => {
            const ie = l.value;
            d(),
            l.value = ie
        }
        )
    }
    function S(K) {
        [13, 32].includes(K.keyCode) && q(K)
    }
    function G() {
        const K = [];
        return r.prepend !== void 0 && K.push(j("div", {
            class: "q-field__prepend q-field__marginal row no-wrap items-center",
            key: "prepend",
            onClick: vn
        }, r.prepend())),
        K.push(j("div", {
            class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
        }, D())),
        u.value === !0 && t.noErrorIcon === !1 && K.push(J("error", [j(Zt, {
            name: o.iconSet.field.error,
            color: "negative"
        })])),
        t.loading === !0 || e.innerLoading.value === !0 ? K.push(J("inner-loading-append", r.loading !== void 0 ? r.loading() : [j(vr, {
            color: t.color
        })])) : t.clearable === !0 && e.hasValue.value === !0 && e.editable.value === !0 && K.push(J("inner-clearable-append", [j(Zt, {
            class: "q-field__focusable-action",
            name: t.clearIcon || o.iconSet.field.clear,
            tabindex: 0,
            role: "button",
            "aria-hidden": "false",
            "aria-label": o.lang.label.clear,
            onKeyup: S,
            onClick: q
        })])),
        r.append !== void 0 && K.push(j("div", {
            class: "q-field__append q-field__marginal row no-wrap items-center",
            key: "append",
            onClick: vn
        }, r.append())),
        e.getInnerAppend !== void 0 && K.push(J("inner-append", e.getInnerAppend())),
        e.getControlChild !== void 0 && K.push(e.getControlChild()),
        K
    }
    function D() {
        const K = [];
        return t.prefix !== void 0 && t.prefix !== null && K.push(j("div", {
            class: "q-field__prefix no-pointer-events row items-center"
        }, t.prefix)),
        e.getShadowControl !== void 0 && e.hasShadow.value === !0 && K.push(e.getShadowControl()),
        e.getControl !== void 0 ? K.push(e.getControl()) : r.rawControl !== void 0 ? K.push(r.rawControl()) : r.control !== void 0 && K.push(j("div", {
            ref: e.targetRef,
            class: "q-field__native row",
            tabindex: -1,
            ...e.splitAttrs.attributes.value,
            "data-autofocus": t.autofocus === !0 || void 0
        }, r.control(y.value))),
        m.value === !0 && K.push(j("div", {
            class: C.value
        }, Nt(r.label, t.label))),
        t.suffix !== void 0 && t.suffix !== null && K.push(j("div", {
            class: "q-field__suffix no-pointer-events row items-center"
        }, t.suffix)),
        K.concat(Nt(r.default))
    }
    function ee() {
        let K, ie;
        u.value === !0 ? f.value !== null ? (K = [j("div", {
            role: "alert"
        }, f.value)],
        ie = `q--slot-error-${f.value}`) : (K = Nt(r.error),
        ie = "q--slot-error") : (t.hideHint !== !0 || e.focused.value === !0) && (t.hint !== void 0 ? (K = [j("div", t.hint)],
        ie = `q--slot-hint-${t.hint}`) : (K = Nt(r.hint),
        ie = "q--slot-hint"));
        const ce = t.counter === !0 || r.counter !== void 0;
        if (t.hideBottomSpace === !0 && ce === !1 && K === void 0)
            return;
        const fe = j("div", {
            key: ie,
            class: "q-field__messages col"
        }, K);
        return j("div", {
            class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== !0 ? "animated" : "stale"),
            onClick: vn
        }, [t.hideBottomSpace === !0 ? fe : j(ns, {
            name: "q-transition--field-message"
        }, () => fe), ce === !0 ? j("div", {
            class: "q-field__counter"
        }, r.counter !== void 0 ? r.counter() : e.computedCounter.value) : null])
    }
    function J(K, ie) {
        return ie === null ? null : j("div", {
            key: K,
            class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
        }, ie)
    }
    let Q = !1;
    return _i( () => {
        Q = !0
    }
    ),
    vf( () => {
        Q === !0 && t.autofocus === !0 && i.focus()
    }
    ),
    t.autofocus === !0 && St( () => {
        i.focus()
    }
    ),
    kt( () => {
        a !== null && clearTimeout(a)
    }
    ),
    Object.assign(i, {
        focus: N,
        blur: W
    }),
    function() {
        const ie = e.getControl === void 0 && r.control === void 0 ? {
            ...e.splitAttrs.attributes.value,
            "data-autofocus": t.autofocus === !0 || void 0,
            ...x.value
        } : x.value;
        return j(e.tag.value, {
            ref: e.rootRef,
            class: [I.value, s.class],
            style: s.style,
            ...ie
        }, [r.before !== void 0 ? j("div", {
            class: "q-field__before q-field__marginal row no-wrap items-center",
            onClick: vn
        }, r.before()) : null, j("div", {
            class: "q-field__inner relative-position col self-stretch"
        }, [j("div", {
            ref: e.controlRef,
            class: b.value,
            tabindex: -1,
            ...e.controlEvents
        }, G()), p.value === !0 ? ee() : null]), r.after !== void 0 ? j("div", {
            class: "q-field__after q-field__marginal row no-wrap items-center",
            onClick: vn
        }, r.after()) : null])
    }
}
const _u = {
    date: "####/##/##",
    datetime: "####/##/## ##:##",
    time: "##:##",
    fulltime: "##:##:##",
    phone: "(###) ### - ####",
    card: "#### #### #### ####"
}
  , fi = {
    "#": {
        pattern: "[\\d]",
        negate: "[^\\d]"
    },
    S: {
        pattern: "[a-zA-Z]",
        negate: "[^a-zA-Z]"
    },
    N: {
        pattern: "[0-9a-zA-Z]",
        negate: "[^0-9a-zA-Z]"
    },
    A: {
        pattern: "[a-zA-Z]",
        negate: "[^a-zA-Z]",
        transform: e => e.toLocaleUpperCase()
    },
    a: {
        pattern: "[a-zA-Z]",
        negate: "[^a-zA-Z]",
        transform: e => e.toLocaleLowerCase()
    },
    X: {
        pattern: "[0-9a-zA-Z]",
        negate: "[^0-9a-zA-Z]",
        transform: e => e.toLocaleUpperCase()
    },
    x: {
        pattern: "[0-9a-zA-Z]",
        negate: "[^0-9a-zA-Z]",
        transform: e => e.toLocaleLowerCase()
    }
}
  , yh = Object.keys(fi);
yh.forEach(e => {
    fi[e].regex = new RegExp(fi[e].pattern)
}
);
const J0 = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + yh.join("") + "])|(.)","g")
  , wu = /[.*+?^${}()|[\]\\]/g
  , Fe = ""
  , Z0 = {
    mask: String,
    reverseFillMask: Boolean,
    fillMask: [Boolean, String],
    unmaskedValue: Boolean
};
function eC(e, t, n, r) {
    let s, i, o, a, l, c;
    const u = he(null)
      , f = he(h());
    function d() {
        return e.autogrow === !0 || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type)
    }
    de( () => e.type + e.autogrow, E),
    de( () => e.mask, k => {
        if (k !== void 0)
            I(f.value, !0);
        else {
            const O = N(f.value);
            E(),
            e.modelValue !== O && t("update:modelValue", O)
        }
    }
    ),
    de( () => e.fillMask + e.reverseFillMask, () => {
        u.value === !0 && I(f.value, !0)
    }
    ),
    de( () => e.unmaskedValue, () => {
        u.value === !0 && I(f.value)
    }
    );
    function h() {
        if (E(),
        u.value === !0) {
            const k = x(N(e.modelValue));
            return e.fillMask !== !1 ? W(k) : k
        }
        return e.modelValue
    }
    function p(k) {
        if (k < s.length)
            return s.slice(-k);
        let O = ""
          , q = s;
        const S = q.indexOf(Fe);
        if (S !== -1) {
            for (let G = k - q.length; G > 0; G--)
                O += Fe;
            q = q.slice(0, S) + O + q.slice(S)
        }
        return q
    }
    function E() {
        if (u.value = e.mask !== void 0 && e.mask.length !== 0 && d(),
        u.value === !1) {
            a = void 0,
            s = "",
            i = "";
            return
        }
        const k = _u[e.mask] === void 0 ? e.mask : _u[e.mask]
          , O = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_"
          , q = O.replace(wu, "\\$&")
          , S = []
          , G = []
          , D = [];
        let ee = e.reverseFillMask === !0
          , J = ""
          , Q = "";
        k.replace(J0, (fe, z, ge, Ne, Re) => {
            if (Ne !== void 0) {
                const ne = fi[Ne];
                D.push(ne),
                Q = ne.negate,
                ee === !0 && (G.push("(?:" + Q + "+)?(" + ne.pattern + "+)?(?:" + Q + "+)?(" + ne.pattern + "+)?"),
                ee = !1),
                G.push("(?:" + Q + "+)?(" + ne.pattern + ")?")
            } else if (ge !== void 0)
                J = "\\" + (ge === "\\" ? "" : ge),
                D.push(ge),
                S.push("([^" + J + "]+)?" + J + "?");
            else {
                const ne = z !== void 0 ? z : Re;
                J = ne === "\\" ? "\\\\\\\\" : ne.replace(wu, "\\\\$&"),
                D.push(ne),
                S.push("([^" + J + "]+)?" + J + "?")
            }
        }
        );
        const K = new RegExp("^" + S.join("") + "(" + (J === "" ? "." : "[^" + J + "]") + "+)?" + (J === "" ? "" : "[" + J + "]*") + "$")
          , ie = G.length - 1
          , ce = G.map( (fe, z) => z === 0 && e.reverseFillMask === !0 ? new RegExp("^" + q + "*" + fe) : z === ie ? new RegExp("^" + fe + "(" + (Q === "" ? "." : Q) + "+)?" + (e.reverseFillMask === !0 ? "$" : q + "*")) : new RegExp("^" + fe));
        o = D,
        a = fe => {
            const z = K.exec(e.reverseFillMask === !0 ? fe : fe.slice(0, D.length + 1));
            z !== null && (fe = z.slice(1).join(""));
            const ge = []
              , Ne = ce.length;
            for (let Re = 0, ne = fe; Re < Ne; Re++) {
                const F = ce[Re].exec(ne);
                if (F === null)
                    break;
                ne = ne.slice(F.shift().length),
                ge.push(...F)
            }
            return ge.length !== 0 ? ge.join("") : fe
        }
        ,
        s = D.map(fe => typeof fe == "string" ? fe : Fe).join(""),
        i = s.split(Fe).join(O)
    }
    function I(k, O, q) {
        const S = r.value
          , G = S.selectionEnd
          , D = S.value.length - G
          , ee = N(k);
        O === !0 && E();
        const J = x(ee)
          , Q = e.fillMask !== !1 ? W(J) : J
          , K = f.value !== Q;
        S.value !== Q && (S.value = Q),
        K === !0 && (f.value = Q),
        document.activeElement === S && at( () => {
            if (Q === i) {
                const ce = e.reverseFillMask === !0 ? i.length : 0;
                S.setSelectionRange(ce, ce, "forward");
                return
            }
            if (q === "insertFromPaste" && e.reverseFillMask !== !0) {
                const ce = S.selectionEnd;
                let fe = G - 1;
                for (let z = l; z <= fe && z < ce; z++)
                    s[z] !== Fe && fe++;
                m.right(S, fe);
                return
            }
            if (["deleteContentBackward", "deleteContentForward"].indexOf(q) !== -1) {
                const ce = e.reverseFillMask === !0 ? G === 0 ? Q.length > J.length ? 1 : 0 : Math.max(0, Q.length - (Q === i ? 0 : Math.min(J.length, D) + 1)) + 1 : G;
                S.setSelectionRange(ce, ce, "forward");
                return
            }
            if (e.reverseFillMask === !0)
                if (K === !0) {
                    const ce = Math.max(0, Q.length - (Q === i ? 0 : Math.min(J.length, D + 1)));
                    ce === 1 && G === 1 ? S.setSelectionRange(ce, ce, "forward") : m.rightReverse(S, ce)
                } else {
                    const ce = Q.length - D;
                    S.setSelectionRange(ce, ce, "backward")
                }
            else if (K === !0) {
                const ce = Math.max(0, s.indexOf(Fe), Math.min(J.length, G) - 1);
                m.right(S, ce)
            } else {
                const ce = G - 1;
                m.right(S, ce)
            }
        }
        );
        const ie = e.unmaskedValue === !0 ? N(Q) : Q;
        String(e.modelValue) !== ie && (e.modelValue !== null || ie !== "") && n(ie, !0)
    }
    function b(k, O, q) {
        const S = x(N(k.value));
        O = Math.max(0, s.indexOf(Fe), Math.min(S.length, O)),
        l = O,
        k.setSelectionRange(O, q, "forward")
    }
    const m = {
        left(k, O) {
            const q = s.slice(O - 1).indexOf(Fe) === -1;
            let S = Math.max(0, O - 1);
            for (; S >= 0; S--)
                if (s[S] === Fe) {
                    O = S,
                    q === !0 && O++;
                    break
                }
            if (S < 0 && s[O] !== void 0 && s[O] !== Fe)
                return m.right(k, 0);
            O >= 0 && k.setSelectionRange(O, O, "backward")
        },
        right(k, O) {
            const q = k.value.length;
            let S = Math.min(q, O + 1);
            for (; S <= q; S++)
                if (s[S] === Fe) {
                    O = S;
                    break
                } else
                    s[S - 1] === Fe && (O = S);
            if (S > q && s[O - 1] !== void 0 && s[O - 1] !== Fe)
                return m.left(k, q);
            k.setSelectionRange(O, O, "forward")
        },
        leftReverse(k, O) {
            const q = p(k.value.length);
            let S = Math.max(0, O - 1);
            for (; S >= 0; S--)
                if (q[S - 1] === Fe) {
                    O = S;
                    break
                } else if (q[S] === Fe && (O = S,
                S === 0))
                    break;
            if (S < 0 && q[O] !== void 0 && q[O] !== Fe)
                return m.rightReverse(k, 0);
            O >= 0 && k.setSelectionRange(O, O, "backward")
        },
        rightReverse(k, O) {
            const q = k.value.length
              , S = p(q)
              , G = S.slice(0, O + 1).indexOf(Fe) === -1;
            let D = Math.min(q, O + 1);
            for (; D <= q; D++)
                if (S[D - 1] === Fe) {
                    O = D,
                    O > 0 && G === !0 && O--;
                    break
                }
            if (D > q && S[O - 1] !== void 0 && S[O - 1] !== Fe)
                return m.leftReverse(k, q);
            k.setSelectionRange(O, O, "forward")
        }
    };
    function C(k) {
        t("click", k),
        c = void 0
    }
    function y(k) {
        if (t("keydown", k),
        td(k) === !0 || k.altKey === !0)
            return;
        const O = r.value
          , q = O.selectionStart
          , S = O.selectionEnd;
        if (k.shiftKey || (c = void 0),
        k.keyCode === 37 || k.keyCode === 39) {
            k.shiftKey && c === void 0 && (c = O.selectionDirection === "forward" ? q : S);
            const G = m[(k.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === !0 ? "Reverse" : "")];
            if (k.preventDefault(),
            G(O, c === q ? S : q),
            k.shiftKey) {
                const D = O.selectionStart;
                O.setSelectionRange(Math.min(c, D), Math.max(c, D), "forward")
            }
        } else
            k.keyCode === 8 && e.reverseFillMask !== !0 && q === S ? (m.left(O, q),
            O.setSelectionRange(O.selectionStart, S, "backward")) : k.keyCode === 46 && e.reverseFillMask === !0 && q === S && (m.rightReverse(O, S),
            O.setSelectionRange(q, O.selectionEnd, "forward"))
    }
    function x(k) {
        if (k == null || k === "")
            return "";
        if (e.reverseFillMask === !0)
            return L(k);
        const O = o;
        let q = 0
          , S = "";
        for (let G = 0; G < O.length; G++) {
            const D = k[q]
              , ee = O[G];
            if (typeof ee == "string")
                S += ee,
                D === ee && q++;
            else if (D !== void 0 && ee.regex.test(D))
                S += ee.transform !== void 0 ? ee.transform(D) : D,
                q++;
            else
                return S
        }
        return S
    }
    function L(k) {
        const O = o
          , q = s.indexOf(Fe);
        let S = k.length - 1
          , G = "";
        for (let D = O.length - 1; D >= 0 && S !== -1; D--) {
            const ee = O[D];
            let J = k[S];
            if (typeof ee == "string")
                G = ee + G,
                J === ee && S--;
            else if (J !== void 0 && ee.regex.test(J))
                do
                    G = (ee.transform !== void 0 ? ee.transform(J) : J) + G,
                    S--,
                    J = k[S];
                while (q === D && J !== void 0 && ee.regex.test(J));
            else
                return G
        }
        return G
    }
    function N(k) {
        return typeof k != "string" || a === void 0 ? typeof k == "number" ? a("" + k) : k : a(k)
    }
    function W(k) {
        return i.length - k.length <= 0 ? k : e.reverseFillMask === !0 && k.length !== 0 ? i.slice(0, -k.length) + k : k + i.slice(k.length)
    }
    return {
        innerValue: f,
        hasMask: u,
        moveCursorForPaste: b,
        updateMaskValue: I,
        onMaskedKeydown: y,
        onMaskedClick: C
    }
}
const tl = {
    name: String
};
function qS(e) {
    return M( () => ({
        type: "hidden",
        name: e.name,
        value: e.modelValue
    }))
}
function bh(e={}) {
    return (t, n, r) => {
        t[n](j("input", {
            class: "hidden" + (r || ""),
            ...e.value
        }))
    }
}
function tC(e) {
    return M( () => e.name || e.for)
}
function nC(e, t) {
    function n() {
        const r = e.modelValue;
        try {
            const s = "DataTransfer"in window ? new DataTransfer : "ClipboardEvent"in window ? new ClipboardEvent("").clipboardData : void 0;
            return Object(r) === r && ("length"in r ? Array.from(r) : [r]).forEach(i => {
                s.items.add(i)
            }
            ),
            {
                files: s.files
            }
        } catch {
            return {
                files: void 0
            }
        }
    }
    return M(t === !0 ? () => {
        if (e.type === "file")
            return n()
    }
    : n)
}
const rC = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/
  , sC = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u
  , iC = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/
  , oC = /[a-z0-9_ -]$/i;
function aC(e) {
    return function(n) {
        if (n.type === "compositionend" || n.type === "change") {
            if (n.target.qComposing !== !0)
                return;
            n.target.qComposing = !1,
            e(n)
        } else
            n.type === "compositionupdate" && n.target.qComposing !== !0 && typeof n.data == "string" && (Ve.is.firefox === !0 ? oC.test(n.data) === !1 : rC.test(n.data) === !0 || sC.test(n.data) === !0 || iC.test(n.data) === !0) === !0 && (n.target.qComposing = !0)
    }
}
const lC = Ye({
    name: "QInput",
    inheritAttrs: !1,
    props: {
        ...G0,
        ...Z0,
        ...tl,
        modelValue: [String, Number, FileList],
        shadowText: String,
        type: {
            type: String,
            default: "text"
        },
        debounce: [String, Number],
        autogrow: Boolean,
        inputClass: [Array, String, Object],
        inputStyle: [Array, String, Object]
    },
    emits: [...Q0, "paste", "change", "keydown", "click", "animationend"],
    setup(e, {emit: t, attrs: n}) {
        const {proxy: r} = Se()
          , {$q: s} = r
          , i = {};
        let o = NaN, a, l, c = null, u;
        const f = he(null)
          , d = tC(e)
          , {innerValue: h, hasMask: p, moveCursorForPaste: E, updateMaskValue: I, onMaskedKeydown: b, onMaskedClick: m} = eC(e, t, J, f)
          , C = nC(e, !0)
          , y = M( () => ua(h.value))
          , x = aC(D)
          , L = X0({
            changeEvent: !0
        })
          , N = M( () => e.type === "textarea" || e.autogrow === !0)
          , W = M( () => N.value === !0 || ["text", "search", "url", "tel", "password"].includes(e.type))
          , k = M( () => {
            const z = {
                ...L.splitAttrs.listeners.value,
                onInput: D,
                onPaste: G,
                onChange: K,
                onBlur: ie,
                onFocus: ri
            };
            return z.onCompositionstart = z.onCompositionupdate = z.onCompositionend = x,
            p.value === !0 && (z.onKeydown = b,
            z.onClick = m),
            e.autogrow === !0 && (z.onAnimationend = ee),
            z
        }
        )
          , O = M( () => {
            const z = {
                tabindex: 0,
                "data-autofocus": e.autofocus === !0 || void 0,
                rows: e.type === "textarea" ? 6 : void 0,
                "aria-label": e.label,
                name: d.value,
                ...L.splitAttrs.attributes.value,
                id: L.targetUid.value,
                maxlength: e.maxlength,
                disabled: e.disable === !0,
                readonly: e.readonly === !0
            };
            return N.value === !1 && (z.type = e.type),
            e.autogrow === !0 && (z.rows = 1),
            z
        }
        );
        de( () => e.type, () => {
            f.value && (f.value.value = e.modelValue)
        }
        ),
        de( () => e.modelValue, z => {
            if (p.value === !0) {
                if (l === !0 && (l = !1,
                String(z) === o))
                    return;
                I(z)
            } else
                h.value !== z && (h.value = z,
                e.type === "number" && i.hasOwnProperty("value") === !0 && (a === !0 ? a = !1 : delete i.value));
            e.autogrow === !0 && at(Q)
        }
        ),
        de( () => e.autogrow, z => {
            z === !0 ? at(Q) : f.value !== null && n.rows > 0 && (f.value.style.height = "auto")
        }
        ),
        de( () => e.dense, () => {
            e.autogrow === !0 && at(Q)
        }
        );
        function q() {
            Za( () => {
                const z = document.activeElement;
                f.value !== null && f.value !== z && (z === null || z.id !== L.targetUid.value) && f.value.focus({
                    preventScroll: !0
                })
            }
            )
        }
        function S() {
            f.value?.select()
        }
        function G(z) {
            if (p.value === !0 && e.reverseFillMask !== !0) {
                const ge = z.target;
                E(ge, ge.selectionStart, ge.selectionEnd)
            }
            t("paste", z)
        }
        function D(z) {
            if (!z || !z.target)
                return;
            if (e.type === "file") {
                t("update:modelValue", z.target.files);
                return
            }
            const ge = z.target.value;
            if (z.target.qComposing === !0) {
                i.value = ge;
                return
            }
            if (p.value === !0)
                I(ge, !1, z.inputType);
            else if (J(ge),
            W.value === !0 && z.target === document.activeElement) {
                const {selectionStart: Ne, selectionEnd: Re} = z.target;
                Ne !== void 0 && Re !== void 0 && at( () => {
                    z.target === document.activeElement && ge.indexOf(z.target.value) === 0 && z.target.setSelectionRange(Ne, Re)
                }
                )
            }
            e.autogrow === !0 && Q()
        }
        function ee(z) {
            t("animationend", z),
            Q()
        }
        function J(z, ge) {
            u = () => {
                c = null,
                e.type !== "number" && i.hasOwnProperty("value") === !0 && delete i.value,
                e.modelValue !== z && o !== z && (o = z,
                ge === !0 && (l = !0),
                t("update:modelValue", z),
                at( () => {
                    o === z && (o = NaN)
                }
                )),
                u = void 0
            }
            ,
            e.type === "number" && (a = !0,
            i.value = z),
            e.debounce !== void 0 ? (c !== null && clearTimeout(c),
            i.value = z,
            c = setTimeout(u, e.debounce)) : u()
        }
        function Q() {
            requestAnimationFrame( () => {
                const z = f.value;
                if (z !== null) {
                    const ge = z.parentNode.style
                      , {scrollTop: Ne} = z
                      , {overflowY: Re, maxHeight: ne} = s.platform.is.firefox === !0 ? {} : window.getComputedStyle(z)
                      , F = Re !== void 0 && Re !== "scroll";
                    F === !0 && (z.style.overflowY = "hidden"),
                    ge.marginBottom = z.scrollHeight - 1 + "px",
                    z.style.height = "1px",
                    z.style.height = z.scrollHeight + "px",
                    F === !0 && (z.style.overflowY = parseInt(ne, 10) < z.scrollHeight ? "auto" : "hidden"),
                    ge.marginBottom = "",
                    z.scrollTop = Ne
                }
            }
            )
        }
        function K(z) {
            x(z),
            c !== null && (clearTimeout(c),
            c = null),
            u?.(),
            t("change", z.target.value)
        }
        function ie(z) {
            z !== void 0 && ri(z),
            c !== null && (clearTimeout(c),
            c = null),
            u?.(),
            a = !1,
            l = !1,
            delete i.value,
            e.type !== "file" && setTimeout( () => {
                f.value !== null && (f.value.value = h.value !== void 0 ? h.value : "")
            }
            )
        }
        function ce() {
            return i.hasOwnProperty("value") === !0 ? i.value : h.value !== void 0 ? h.value : ""
        }
        kt( () => {
            ie()
        }
        ),
        St( () => {
            e.autogrow === !0 && Q()
        }
        ),
        Object.assign(L, {
            innerValue: h,
            fieldClass: M( () => `q-${N.value === !0 ? "textarea" : "input"}` + (e.autogrow === !0 ? " q-textarea--autogrow" : "")),
            hasShadow: M( () => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0),
            inputRef: f,
            emitValue: J,
            hasValue: y,
            floatingLabel: M( () => y.value === !0 && (e.type !== "number" || isNaN(h.value) === !1) || ua(e.displayValue)),
            getControl: () => j(N.value === !0 ? "textarea" : "input", {
                ref: f,
                class: ["q-field__native q-placeholder", e.inputClass],
                style: e.inputStyle,
                ...O.value,
                ...k.value,
                ...e.type !== "file" ? {
                    value: ce()
                } : C.value
            }),
            getShadowControl: () => j("div", {
                class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (N.value === !0 ? "" : " text-no-wrap")
            }, [j("span", {
                class: "invisible"
            }, ce()), j("span", e.shadowText)])
        });
        const fe = Y0(L);
        return Object.assign(r, {
            focus: q,
            select: S,
            getNativeElement: () => f.value
        }),
        yr(r, "nativeEl", () => f.value),
        fe
    }
});
function _h(e, t) {
    const n = he(null)
      , r = M( () => e.disable === !0 ? null : j("span", {
        ref: n,
        class: "no-outline",
        tabindex: -1
    }));
    function s(i) {
        const o = t.value;
        i?.qAvoidFocus !== !0 && (i?.type.indexOf("key") === 0 ? document.activeElement !== o && o?.contains(document.activeElement) === !0 && o.focus() : n.value !== null && (i === void 0 || o?.contains(i.target) === !0) && n.value.focus())
    }
    return {
        refocusTargetEl: r,
        refocusTarget: s
    }
}
const wh = {
    xs: 30,
    sm: 35,
    md: 40,
    lg: 50,
    xl: 60
}
  , cC = () => j("svg", {
    key: "svg",
    class: "q-radio__bg absolute non-selectable",
    viewBox: "0 0 24 24"
}, [j("path", {
    d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"
}), j("path", {
    class: "q-radio__check",
    d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"
})])
  , uC = Ye({
    name: "QRadio",
    props: {
        ...Un,
        ...ms,
        ...tl,
        modelValue: {
            required: !0
        },
        val: {
            required: !0
        },
        label: String,
        leftLabel: Boolean,
        checkedIcon: String,
        uncheckedIcon: String,
        color: String,
        keepColor: Boolean,
        dense: Boolean,
        disable: Boolean,
        tabindex: [String, Number]
    },
    emits: ["update:modelValue"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: r} = Se()
          , s = Hn(e, r.$q)
          , i = gs(e, wh)
          , o = he(null)
          , {refocusTargetEl: a, refocusTarget: l} = _h(e, o)
          , c = M( () => ue(e.modelValue) === ue(e.val))
          , u = M( () => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === !0 ? " disabled" : "") + (s.value === !0 ? " q-radio--dark" : "") + (e.dense === !0 ? " q-radio--dense" : "") + (e.leftLabel === !0 ? " reverse" : ""))
          , f = M( () => {
            const y = e.color !== void 0 && (e.keepColor === !0 || c.value === !0) ? ` text-${e.color}` : "";
            return `q-radio__inner relative-position q-radio__inner--${c.value === !0 ? "truthy" : "falsy"}${y}`
        }
        )
          , d = M( () => (c.value === !0 ? e.checkedIcon : e.uncheckedIcon) || null)
          , h = M( () => e.disable === !0 ? -1 : e.tabindex || 0)
          , p = M( () => {
            const y = {
                type: "radio"
            };
            return e.name !== void 0 && Object.assign(y, {
                ".checked": c.value === !0,
                "^checked": c.value === !0 ? "checked" : void 0,
                name: e.name,
                value: e.val
            }),
            y
        }
        )
          , E = bh(p);
        function I(y) {
            y !== void 0 && (bt(y),
            l(y)),
            e.disable !== !0 && c.value !== !0 && n("update:modelValue", e.val, y)
        }
        function b(y) {
            (y.keyCode === 13 || y.keyCode === 32) && bt(y)
        }
        function m(y) {
            (y.keyCode === 13 || y.keyCode === 32) && I(y)
        }
        Object.assign(r, {
            set: I
        });
        const C = cC();
        return () => {
            const y = d.value !== null ? [j("div", {
                key: "icon",
                class: "q-radio__icon-container absolute-full flex flex-center no-wrap"
            }, [j(Zt, {
                class: "q-radio__icon",
                name: d.value
            })])] : [C];
            e.disable !== !0 && E(y, "unshift", " q-radio__native q-ma-none q-pa-none");
            const x = [j("div", {
                class: f.value,
                style: i.value,
                "aria-hidden": "true"
            }, y)];
            a.value !== null && x.push(a.value);
            const L = e.label !== void 0 ? On(t.default, [e.label]) : Nt(t.default);
            return L !== void 0 && x.push(j("div", {
                class: "q-radio__label q-anchor--skip"
            }, L)),
            j("div", {
                ref: o,
                class: u.value,
                tabindex: h.value,
                role: "radio",
                "aria-label": e.label,
                "aria-checked": c.value === !0 ? "true" : "false",
                "aria-disabled": e.disable === !0 ? "true" : void 0,
                onClick: I,
                onKeydown: b,
                onKeyup: m
            }, x)
        }
    }
})
  , Ch = {
    ...Un,
    ...ms,
    ...tl,
    modelValue: {
        required: !0,
        default: null
    },
    val: {},
    trueValue: {
        default: !0
    },
    falseValue: {
        default: !1
    },
    indeterminateValue: {
        default: null
    },
    checkedIcon: String,
    uncheckedIcon: String,
    indeterminateIcon: String,
    toggleOrder: {
        type: String,
        validator: e => e === "tf" || e === "ft"
    },
    toggleIndeterminate: Boolean,
    label: String,
    leftLabel: Boolean,
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number]
}
  , Eh = ["update:modelValue"];
function Sh(e, t) {
    const {props: n, slots: r, emit: s, proxy: i} = Se()
      , {$q: o} = i
      , a = Hn(n, o)
      , l = he(null)
      , {refocusTargetEl: c, refocusTarget: u} = _h(n, l)
      , f = gs(n, wh)
      , d = M( () => n.val !== void 0 && Array.isArray(n.modelValue))
      , h = M( () => {
        const S = ue(n.val);
        return d.value === !0 ? n.modelValue.findIndex(G => ue(G) === S) : -1
    }
    )
      , p = M( () => d.value === !0 ? h.value !== -1 : ue(n.modelValue) === ue(n.trueValue))
      , E = M( () => d.value === !0 ? h.value === -1 : ue(n.modelValue) === ue(n.falseValue))
      , I = M( () => p.value === !1 && E.value === !1)
      , b = M( () => n.disable === !0 ? -1 : n.tabindex || 0)
      , m = M( () => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === !0 ? " disabled" : "") + (a.value === !0 ? ` q-${e}--dark` : "") + (n.dense === !0 ? ` q-${e}--dense` : "") + (n.leftLabel === !0 ? " reverse" : ""))
      , C = M( () => {
        const S = p.value === !0 ? "truthy" : E.value === !0 ? "falsy" : "indet"
          , G = n.color !== void 0 && (n.keepColor === !0 || (e === "toggle" ? p.value === !0 : E.value !== !0)) ? ` text-${n.color}` : "";
        return `q-${e}__inner relative-position non-selectable q-${e}__inner--${S}${G}`
    }
    )
      , y = M( () => {
        const S = {
            type: "checkbox"
        };
        return n.name !== void 0 && Object.assign(S, {
            ".checked": p.value,
            "^checked": p.value === !0 ? "checked" : void 0,
            name: n.name,
            value: d.value === !0 ? n.val : n.trueValue
        }),
        S
    }
    )
      , x = bh(y)
      , L = M( () => {
        const S = {
            tabindex: b.value,
            role: e === "toggle" ? "switch" : "checkbox",
            "aria-label": n.label,
            "aria-checked": I.value === !0 ? "mixed" : p.value === !0 ? "true" : "false"
        };
        return n.disable === !0 && (S["aria-disabled"] = "true"),
        S
    }
    );
    function N(S) {
        S !== void 0 && (bt(S),
        u(S)),
        n.disable !== !0 && s("update:modelValue", W(), S)
    }
    function W() {
        if (d.value === !0) {
            if (p.value === !0) {
                const S = n.modelValue.slice();
                return S.splice(h.value, 1),
                S
            }
            return n.modelValue.concat([n.val])
        }
        if (p.value === !0) {
            if (n.toggleOrder !== "ft" || n.toggleIndeterminate === !1)
                return n.falseValue
        } else if (E.value === !0) {
            if (n.toggleOrder === "ft" || n.toggleIndeterminate === !1)
                return n.trueValue
        } else
            return n.toggleOrder !== "ft" ? n.trueValue : n.falseValue;
        return n.indeterminateValue
    }
    function k(S) {
        (S.keyCode === 13 || S.keyCode === 32) && bt(S)
    }
    function O(S) {
        (S.keyCode === 13 || S.keyCode === 32) && N(S)
    }
    const q = t(p, I);
    return Object.assign(i, {
        toggle: N
    }),
    () => {
        const S = q();
        n.disable !== !0 && x(S, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
        const G = [j("div", {
            class: C.value,
            style: f.value,
            "aria-hidden": "true"
        }, S)];
        c.value !== null && G.push(c.value);
        const D = n.label !== void 0 ? On(r.default, [n.label]) : Nt(r.default);
        return D !== void 0 && G.push(j("div", {
            class: `q-${e}__label q-anchor--skip`
        }, D)),
        j("div", {
            ref: l,
            class: m.value,
            ...L.value,
            onClick: N,
            onKeydown: k,
            onKeyup: O
        }, G)
    }
}
const fC = () => j("div", {
    key: "svg",
    class: "q-checkbox__bg absolute"
}, [j("svg", {
    class: "q-checkbox__svg fit absolute-full",
    viewBox: "0 0 24 24"
}, [j("path", {
    class: "q-checkbox__truthy",
    fill: "none",
    d: "M1.73,12.91 8.1,19.28 22.79,4.59"
}), j("path", {
    class: "q-checkbox__indet",
    d: "M4,14H20V10H4"
})])])
  , dC = Ye({
    name: "QCheckbox",
    props: Ch,
    emits: Eh,
    setup(e) {
        const t = fC();
        function n(r, s) {
            const i = M( () => (r.value === !0 ? e.checkedIcon : s.value === !0 ? e.indeterminateIcon : e.uncheckedIcon) || null);
            return () => i.value !== null ? [j("div", {
                key: "icon",
                class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
            }, [j(Zt, {
                class: "q-checkbox__icon",
                name: i.value
            })])] : [t]
        }
        return Sh("checkbox", n)
    }
})
  , hC = Ye({
    name: "QToggle",
    props: {
        ...Ch,
        icon: String,
        iconColor: String
    },
    emits: Eh,
    setup(e) {
        function t(n, r) {
            const s = M( () => (n.value === !0 ? e.checkedIcon : r.value === !0 ? e.indeterminateIcon : e.uncheckedIcon) || e.icon)
              , i = M( () => n.value === !0 ? e.iconColor : null);
            return () => [j("div", {
                class: "q-toggle__track"
            }), j("div", {
                class: "q-toggle__thumb absolute flex flex-center no-wrap"
            }, s.value !== void 0 ? [j(Zt, {
                name: s.value,
                color: i.value
            })] : void 0)]
        }
        return Sh("toggle", t)
    }
})
  , kh = {
    radio: uC,
    checkbox: dC,
    toggle: hC
}
  , mC = Object.keys(kh);
function Co(e, t) {
    if (typeof e == "function")
        return e;
    const n = e !== void 0 ? e : t;
    return r => r[n]
}
const gC = Ye({
    name: "QOptionGroup",
    props: {
        ...Un,
        modelValue: {
            required: !0
        },
        options: {
            type: Array,
            validator: e => e.every(dt),
            default: () => []
        },
        optionValue: [Function, String],
        optionLabel: [Function, String],
        optionDisable: [Function, String],
        name: String,
        type: {
            type: String,
            default: "radio",
            validator: e => mC.includes(e)
        },
        color: String,
        keepColor: Boolean,
        dense: Boolean,
        size: String,
        leftLabel: Boolean,
        inline: Boolean,
        disable: Boolean
    },
    emits: ["update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {proxy: {$q: r}} = Se()
          , s = Array.isArray(e.modelValue);
        e.type === "radio" ? s === !0 && console.error("q-option-group: model should not be array") : s === !1 && console.error("q-option-group: model should be array in your case");
        const i = Hn(e, r)
          , o = M( () => kh[e.type])
          , a = M( () => Co(e.optionValue, "value"))
          , l = M( () => Co(e.optionLabel, "label"))
          , c = M( () => Co(e.optionDisable, "disable"))
          , u = M( () => e.options.map(p => ({
            val: a.value(p),
            name: p.name === void 0 ? e.name : p.name,
            disable: e.disable || c.value(p),
            leftLabel: p.leftLabel === void 0 ? e.leftLabel : p.leftLabel,
            color: p.color === void 0 ? e.color : p.color,
            checkedIcon: p.checkedIcon,
            uncheckedIcon: p.uncheckedIcon,
            dark: p.dark === void 0 ? i.value : p.dark,
            size: p.size === void 0 ? e.size : p.size,
            dense: e.dense,
            keepColor: p.keepColor === void 0 ? e.keepColor : p.keepColor
        })))
          , f = M( () => "q-option-group q-gutter-x-sm" + (e.inline === !0 ? " q-option-group--inline" : ""))
          , d = M( () => {
            const p = {
                role: "group"
            };
            return e.type === "radio" && (p.role = "radiogroup",
            e.disable === !0 && (p["aria-disabled"] = "true")),
            p
        }
        );
        function h(p) {
            t("update:modelValue", p)
        }
        return () => j("div", {
            class: f.value,
            ...d.value
        }, e.options.map( (p, E) => {
            const I = n["label-" + E] !== void 0 ? () => n["label-" + E](p) : n.label !== void 0 ? () => n.label(p) : void 0;
            return j("div", [j(o.value, {
                label: I === void 0 ? l.value(p) : null,
                modelValue: e.modelValue,
                "onUpdate:modelValue": h,
                ...u.value[E]
            }, I)])
        }
        ))
    }
})
  , pC = Ye({
    name: "DialogPluginComponent",
    props: {
        ...Un,
        title: String,
        message: String,
        prompt: Object,
        options: Object,
        progress: [Boolean, Object],
        html: Boolean,
        ok: {
            type: [String, Object, Boolean],
            default: !0
        },
        cancel: [String, Object, Boolean],
        focus: {
            type: String,
            default: "ok",
            validator: e => ["ok", "cancel", "none"].includes(e)
        },
        stackButtons: Boolean,
        color: String,
        cardClass: [String, Array, Object],
        cardStyle: [String, Array, Object]
    },
    emits: ["ok", "hide"],
    setup(e, {emit: t}) {
        const {proxy: n} = Se()
          , {$q: r} = n
          , s = Hn(e, r)
          , i = he(null)
          , o = he(e.prompt !== void 0 ? e.prompt.model : e.options !== void 0 ? e.options.model : void 0)
          , a = M( () => "q-dialog-plugin" + (s.value === !0 ? " q-dialog-plugin--dark q-dark" : "") + (e.progress !== !1 ? " q-dialog-plugin--progress" : ""))
          , l = M( () => e.color || (s.value === !0 ? "amber" : "primary"))
          , c = M( () => e.progress === !1 ? null : dt(e.progress) === !0 ? {
            component: e.progress.spinner || vr,
            props: {
                color: e.progress.color || l.value
            }
        } : {
            component: vr,
            props: {
                color: l.value
            }
        })
          , u = M( () => e.prompt !== void 0 || e.options !== void 0)
          , f = M( () => {
            if (u.value !== !0)
                return {};
            const {model: D, isValid: ee, items: J, ...Q} = e.prompt !== void 0 ? e.prompt : e.options;
            return Q
        }
        )
          , d = M( () => dt(e.ok) === !0 || e.ok === !0 ? r.lang.label.ok : e.ok)
          , h = M( () => dt(e.cancel) === !0 || e.cancel === !0 ? r.lang.label.cancel : e.cancel)
          , p = M( () => e.prompt !== void 0 ? e.prompt.isValid !== void 0 && e.prompt.isValid(o.value) !== !0 : e.options !== void 0 ? e.options.isValid !== void 0 && e.options.isValid(o.value) !== !0 : !1)
          , E = M( () => ({
            color: l.value,
            label: d.value,
            ripple: !1,
            disable: p.value,
            ...dt(e.ok) === !0 ? e.ok : {
                flat: !0
            },
            "data-autofocus": e.focus === "ok" && u.value !== !0 || void 0,
            onClick: C
        }))
          , I = M( () => ({
            color: l.value,
            label: h.value,
            ripple: !1,
            ...dt(e.cancel) === !0 ? e.cancel : {
                flat: !0
            },
            "data-autofocus": e.focus === "cancel" && u.value !== !0 || void 0,
            onClick: y
        }));
        de( () => e.prompt && e.prompt.model, L),
        de( () => e.options && e.options.model, L);
        function b() {
            i.value.show()
        }
        function m() {
            i.value.hide()
        }
        function C() {
            t("ok", ue(o.value)),
            m()
        }
        function y() {
            m()
        }
        function x() {
            t("hide")
        }
        function L(D) {
            o.value = D
        }
        function N(D) {
            p.value !== !0 && e.prompt.type !== "textarea" && ss(D, 13) === !0 && C()
        }
        function W(D, ee) {
            return e.html === !0 ? j(Nr, {
                class: D,
                innerHTML: ee
            }) : j(Nr, {
                class: D
            }, () => ee)
        }
        function k() {
            return [j(lC, {
                color: l.value,
                dense: !0,
                autofocus: !0,
                dark: s.value,
                ...f.value,
                modelValue: o.value,
                "onUpdate:modelValue": L,
                onKeyup: N
            })]
        }
        function O() {
            return [j(gC, {
                color: l.value,
                options: e.options.items,
                dark: s.value,
                ...f.value,
                modelValue: o.value,
                "onUpdate:modelValue": L
            })]
        }
        function q() {
            const D = [];
            return e.cancel && D.push(j(la, I.value)),
            e.ok && D.push(j(la, E.value)),
            j(D0, {
                class: e.stackButtons === !0 ? "items-end" : "",
                vertical: e.stackButtons,
                align: "right"
            }, () => D)
        }
        function S() {
            const D = [];
            return e.title && D.push(W("q-dialog__title", e.title)),
            e.progress !== !1 && D.push(j(Nr, {
                class: "q-dialog__progress"
            }, () => j(c.value.component, c.value.props))),
            e.message && D.push(W("q-dialog__message", e.message)),
            e.prompt !== void 0 ? D.push(j(Nr, {
                class: "scroll q-dialog-plugin__form"
            }, k)) : e.options !== void 0 && D.push(j(hu, {
                dark: s.value
            }), j(Nr, {
                class: "scroll q-dialog-plugin__form"
            }, O), j(hu, {
                dark: s.value
            })),
            (e.ok || e.cancel) && D.push(q()),
            D
        }
        function G() {
            return [j(F0, {
                class: [a.value, e.cardClass],
                style: e.cardStyle,
                dark: s.value
            }, S)]
        }
        return Object.assign(n, {
            show: b,
            hide: m
        }),
        () => j(d0, {
            ref: i,
            onHide: x
        }, G)
    }
});
function xh(e, t) {
    for (const n in t)
        n !== "spinner" && Object(t[n]) === t[n] ? (e[n] = Object(e[n]) !== e[n] ? {} : {
            ...e[n]
        },
        xh(e[n], t[n])) : e[n] = t[n]
}
function vC(e, t, n) {
    return r => {
        let s, i;
        const o = r.component !== void 0;
        if (o === !0) {
            const {component: m, componentProps: C} = r;
            s = typeof m == "string" ? n.component(m) : m,
            i = C || {}
        } else {
            const {class: m, style: C, ...y} = r;
            s = e,
            i = y,
            m !== void 0 && (y.cardClass = m),
            C !== void 0 && (y.cardStyle = C)
        }
        let a, l = !1;
        const c = he(null)
          , u = Fi(!1, "dialog")
          , f = m => {
            if (c.value?.[m] !== void 0) {
                c.value[m]();
                return
            }
            const C = a.$.subTree;
            if (C?.component) {
                if (C.component.proxy && C.component.proxy[m]) {
                    C.component.proxy[m]();
                    return
                }
                if (C.component.subTree && C.component.subTree.component && C.component.subTree.component.proxy && C.component.subTree.component.proxy[m]) {
                    C.component.subTree.component.proxy[m]();
                    return
                }
            }
            console.error("[Quasar] Incorrectly defined Dialog component")
        }
          , d = []
          , h = []
          , p = {
            onOk(m) {
                return d.push(m),
                p
            },
            onCancel(m) {
                return h.push(m),
                p
            },
            onDismiss(m) {
                return d.push(m),
                h.push(m),
                p
            },
            hide() {
                return f("hide"),
                p
            },
            update(m) {
                if (a !== null) {
                    if (o === !0)
                        Object.assign(i, m);
                    else {
                        const {class: C, style: y, ...x} = m;
                        C !== void 0 && (x.cardClass = C),
                        y !== void 0 && (x.cardStyle = y),
                        xh(i, x)
                    }
                    a.$forceUpdate()
                }
                return p
            }
        }
          , E = m => {
            l = !0,
            d.forEach(C => {
                C(m)
            }
            )
        }
          , I = () => {
            b.unmount(u),
            el(u),
            b = null,
            a = null,
            l !== !0 && h.forEach(m => {
                m()
            }
            )
        }
        ;
        let b = Oa({
            name: "QGlobalDialog",
            setup: () => () => j(s, {
                ...i,
                ref: c,
                onOk: E,
                onHide: I,
                onVnodeMounted(...m) {
                    typeof i.onVnodeMounted == "function" && i.onVnodeMounted(...m),
                    at( () => f("show"))
                }
            })
        }, n);
        return a = b.mount(u),
        p
    }
}
const yC = {
    install({$q: e, parentApp: t}) {
        e.dialog = this.create = vC(pC, !0, t)
    }
};
let Yn, Eo, Cu = 0, Nn = null, Ue = {}, Rn = {};
const Th = {
    group: "__default_quasar_group__",
    delay: 0,
    message: !1,
    html: !1,
    spinnerSize: 80,
    spinnerColor: "",
    messageColor: "",
    backgroundColor: "",
    boxClass: "",
    spinner: vr,
    customClass: ""
}
  , Ah = {
    ...Th
};
function bC(e) {
    if (e?.group !== void 0 && Rn[e.group] !== void 0)
        return Object.assign(Rn[e.group], e);
    const t = dt(e) === !0 && e.ignoreDefaults === !0 ? {
        ...Th,
        ...e
    } : {
        ...Ah,
        ...e
    };
    return Rn[t.group] = t,
    t
}
const Tt = br({
    isActive: !1
}, {
    show(e) {
        Ue = bC(e);
        const {group: t} = Ue;
        return Tt.isActive = !0,
        Yn !== void 0 ? (Ue.uid = Cu,
        Eo.$forceUpdate()) : (Ue.uid = ++Cu,
        Nn !== null && clearTimeout(Nn),
        Nn = setTimeout( () => {
            Nn = null;
            const n = Fi("q-loading");
            Yn = Oa({
                name: "QLoading",
                setup() {
                    St( () => {
                        oa(!0)
                    }
                    );
                    function r() {
                        Tt.isActive !== !0 && Yn !== void 0 && (oa(!1),
                        Yn.unmount(n),
                        el(n),
                        Yn = void 0,
                        Eo = void 0)
                    }
                    function s() {
                        if (Tt.isActive !== !0)
                            return null;
                        const i = [j(Ue.spinner, {
                            class: "q-loading__spinner",
                            color: Ue.spinnerColor,
                            size: Ue.spinnerSize
                        })];
                        return Ue.message && i.push(j("div", {
                            class: "q-loading__message" + (Ue.messageColor ? ` text-${Ue.messageColor}` : ""),
                            [Ue.html === !0 ? "innerHTML" : "textContent"]: Ue.message
                        })),
                        j("div", {
                            class: "q-loading fullscreen flex flex-center z-max " + Ue.customClass.trim(),
                            key: Ue.uid
                        }, [j("div", {
                            class: "q-loading__backdrop" + (Ue.backgroundColor ? ` bg-${Ue.backgroundColor}` : "")
                        }), j("div", {
                            class: "q-loading__box column items-center " + Ue.boxClass
                        }, i)])
                    }
                    return () => j(ns, {
                        name: "q-transition--fade",
                        appear: !0,
                        onAfterLeave: r
                    }, s)
                }
            }, Tt.__parentApp),
            Eo = Yn.mount(n)
        }
        , Ue.delay)),
        n => {
            if (n === void 0 || Object(n) !== n) {
                Tt.hide(t);
                return
            }
            Tt.show({
                ...n,
                group: t
            })
        }
    },
    hide(e) {
        if (Tt.isActive === !0) {
            if (e === void 0)
                Rn = {};
            else {
                if (Rn[e] === void 0)
                    return;
                {
                    delete Rn[e];
                    const t = Object.keys(Rn);
                    if (t.length !== 0) {
                        const n = t[t.length - 1];
                        Tt.show({
                            group: n
                        });
                        return
                    }
                }
            }
            Nn !== null && (clearTimeout(Nn),
            Nn = null),
            Tt.isActive = !1
        }
    },
    setDefaults(e) {
        dt(e) === !0 && Object.assign(Ah, e)
    },
    install({$q: e, parentApp: t}) {
        e.loading = this,
        Tt.__parentApp = t,
        e.config.loading !== void 0 && this.setDefaults(e.config.loading)
    }
})
  , _C = Ye({
    name: "QAvatar",
    props: {
        ...ms,
        fontSize: String,
        color: String,
        textColor: String,
        icon: String,
        square: Boolean,
        rounded: Boolean
    },
    setup(e, {slots: t}) {
        const n = gs(e)
          , r = M( () => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === !0 ? " q-avatar--square" : e.rounded === !0 ? " rounded-borders" : ""))
          , s = M( () => e.fontSize ? {
            fontSize: e.fontSize
        } : null);
        return () => {
            const i = e.icon !== void 0 ? [j(Zt, {
                name: e.icon
            })] : void 0;
            return j("div", {
                class: r.value,
                style: n.value
            }, [j("div", {
                class: "q-avatar__content row flex-center overflow-hidden",
                style: s.value
            }, i0(t.default, i))])
        }
    }
});
let wC = 0;
const Vs = {}
  , Ws = {}
  , At = {}
  , Ih = {}
  , CC = /^\s*$/
  , Nh = []
  , EC = [void 0, null, !0, !1, ""]
  , nl = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"]
  , SC = ["top-left", "top-right", "bottom-left", "bottom-right"]
  , Fr = {
    positive: {
        icon: e => e.iconSet.type.positive,
        color: "positive"
    },
    negative: {
        icon: e => e.iconSet.type.negative,
        color: "negative"
    },
    warning: {
        icon: e => e.iconSet.type.warning,
        color: "warning",
        textColor: "dark"
    },
    info: {
        icon: e => e.iconSet.type.info,
        color: "info"
    },
    ongoing: {
        group: !1,
        timeout: 0,
        spinner: !0,
        color: "grey-8"
    }
};
function Ph(e, t, n) {
    if (!e)
        return Pr("parameter required");
    let r;
    const s = {
        textColor: "white"
    };
    if (e.ignoreDefaults !== !0 && Object.assign(s, Vs),
    dt(e) === !1 && (s.type && Object.assign(s, Fr[s.type]),
    e = {
        message: e
    }),
    Object.assign(s, Fr[e.type || s.type], e),
    typeof s.icon == "function" && (s.icon = s.icon(t)),
    s.spinner ? (s.spinner === !0 && (s.spinner = vr),
    s.spinner = Wn(s.spinner)) : s.spinner = !1,
    s.meta = {
        hasMedia: !!(s.spinner !== !1 || s.icon || s.avatar),
        hasText: Eu(s.message) || Eu(s.caption)
    },
    s.position) {
        if (nl.includes(s.position) === !1)
            return Pr("wrong position", e)
    } else
        s.position = "bottom";
    if (EC.includes(s.timeout) === !0)
        s.timeout = 5e3;
    else {
        const l = Number(s.timeout);
        if (isNaN(l) || l < 0)
            return Pr("wrong timeout", e);
        s.timeout = Number.isFinite(l) ? l : 0
    }
    s.timeout === 0 ? s.progress = !1 : s.progress === !0 && (s.meta.progressClass = "q-notification__progress" + (s.progressClass ? ` ${s.progressClass}` : ""),
    s.meta.progressStyle = {
        animationDuration: `${s.timeout + 1e3}ms`
    });
    const i = (Array.isArray(e.actions) === !0 ? e.actions : []).concat(e.ignoreDefaults !== !0 && Array.isArray(Vs.actions) === !0 ? Vs.actions : []).concat(Array.isArray(Fr[e.type]?.actions) === !0 ? Fr[e.type].actions : [])
      , {closeBtn: o} = s;
    if (o && i.push({
        label: typeof o == "string" ? o : t.lang.label.close
    }),
    s.actions = i.map( ({handler: l, noDismiss: c, ...u}) => ({
        flat: !0,
        ...u,
        onClick: typeof l == "function" ? () => {
            l(),
            c !== !0 && a()
        }
        : () => {
            a()
        }
    })),
    s.multiLine === void 0 && (s.multiLine = s.actions.length > 1),
    Object.assign(s.meta, {
        class: `q-notification row items-stretch q-notification--${s.multiLine === !0 ? "multi-line" : "standard"}` + (s.color !== void 0 ? ` bg-${s.color}` : "") + (s.textColor !== void 0 ? ` text-${s.textColor}` : "") + (s.classes !== void 0 ? ` ${s.classes}` : ""),
        wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (s.multiLine === !0 ? "column no-wrap justify-center" : "row items-center"),
        contentClass: "q-notification__content row items-center" + (s.multiLine === !0 ? "" : " col"),
        leftClass: s.meta.hasText === !0 ? "additional" : "single",
        attrs: {
            role: "alert",
            ...s.attrs
        }
    }),
    s.group === !1 ? (s.group = void 0,
    s.meta.group = void 0) : ((s.group === void 0 || s.group === !0) && (s.group = [s.message, s.caption, s.multiline].concat(s.actions.map(l => `${l.label}*${l.icon}`)).join("|")),
    s.meta.group = s.group + "|" + s.position),
    s.actions.length === 0 ? s.actions = void 0 : s.meta.actionsClass = "q-notification__actions row items-center " + (s.multiLine === !0 ? "justify-end" : "col-auto") + (s.meta.hasMedia === !0 ? " q-notification__actions--with-media" : ""),
    n !== void 0) {
        n.notif.meta.timer && (clearTimeout(n.notif.meta.timer),
        n.notif.meta.timer = void 0),
        s.meta.uid = n.notif.meta.uid;
        const l = At[s.position].value.indexOf(n.notif);
        At[s.position].value[l] = s
    } else {
        const l = Ws[s.meta.group];
        if (l === void 0) {
            if (s.meta.uid = wC++,
            s.meta.badge = 1,
            ["left", "right", "center"].indexOf(s.position) !== -1)
                At[s.position].value.splice(Math.floor(At[s.position].value.length / 2), 0, s);
            else {
                const c = s.position.indexOf("top") !== -1 ? "unshift" : "push";
                At[s.position].value[c](s)
            }
            s.group !== void 0 && (Ws[s.meta.group] = s)
        } else {
            if (l.meta.timer && (clearTimeout(l.meta.timer),
            l.meta.timer = void 0),
            s.badgePosition !== void 0) {
                if (SC.includes(s.badgePosition) === !1)
                    return Pr("wrong badgePosition", e)
            } else
                s.badgePosition = `top-${s.position.indexOf("left") !== -1 ? "right" : "left"}`;
            s.meta.uid = l.meta.uid,
            s.meta.badge = l.meta.badge + 1,
            s.meta.badgeClass = `q-notification__badge q-notification__badge--${s.badgePosition}` + (s.badgeColor !== void 0 ? ` bg-${s.badgeColor}` : "") + (s.badgeTextColor !== void 0 ? ` text-${s.badgeTextColor}` : "") + (s.badgeClass ? ` ${s.badgeClass}` : "");
            const c = At[s.position].value.indexOf(l);
            At[s.position].value[c] = Ws[s.meta.group] = s
        }
    }
    const a = () => {
        kC(s),
        r = void 0
    }
    ;
    if (s.timeout > 0 && (s.meta.timer = setTimeout( () => {
        s.meta.timer = void 0,
        a()
    }
    , s.timeout + 1e3)),
    s.group !== void 0)
        return l => {
            l !== void 0 ? Pr("trying to update a grouped one which is forbidden", e) : a()
        }
        ;
    if (r = {
        dismiss: a,
        config: e,
        notif: s
    },
    n !== void 0) {
        Object.assign(n, r);
        return
    }
    return l => {
        if (r !== void 0)
            if (l === void 0)
                r.dismiss();
            else {
                const c = Object.assign({}, r.config, l, {
                    group: !1,
                    position: s.position
                });
                Ph(c, t, r)
            }
    }
}
function kC(e) {
    e.meta.timer && (clearTimeout(e.meta.timer),
    e.meta.timer = void 0);
    const t = At[e.position].value.indexOf(e);
    if (t !== -1) {
        e.group !== void 0 && delete Ws[e.meta.group];
        const n = Nh["" + e.meta.uid];
        if (n) {
            const {width: r, height: s} = getComputedStyle(n);
            n.style.left = `${n.offsetLeft}px`,
            n.style.width = r,
            n.style.height = s
        }
        At[e.position].value.splice(t, 1),
        typeof e.onDismiss == "function" && e.onDismiss()
    }
}
function Eu(e) {
    return e != null && CC.test(e) !== !0
}
function Pr(e, t) {
    return console.error(`Notify: ${e}`, t),
    !1
}
function xC() {
    return Ye({
        name: "QNotifications",
        devtools: {
            hide: !0
        },
        setup() {
            return () => j("div", {
                class: "q-notifications"
            }, nl.map(e => j(tp, {
                key: e,
                class: Ih[e],
                tag: "div",
                name: `q-notification--${e}`
            }, () => At[e].value.map(t => {
                const n = t.meta
                  , r = [];
                if (n.hasMedia === !0 && (t.spinner !== !1 ? r.push(j(t.spinner, {
                    class: "q-notification__spinner q-notification__spinner--" + n.leftClass,
                    color: t.spinnerColor,
                    size: t.spinnerSize
                })) : t.icon ? r.push(j(Zt, {
                    class: "q-notification__icon q-notification__icon--" + n.leftClass,
                    name: t.icon,
                    color: t.iconColor,
                    size: t.iconSize,
                    role: "img"
                })) : t.avatar && r.push(j(_C, {
                    class: "q-notification__avatar q-notification__avatar--" + n.leftClass
                }, () => j("img", {
                    src: t.avatar,
                    "aria-hidden": "true"
                })))),
                n.hasText === !0) {
                    let i;
                    const o = {
                        class: "q-notification__message col"
                    };
                    if (t.html === !0)
                        o.innerHTML = t.caption ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>` : t.message;
                    else {
                        const a = [t.message];
                        i = t.caption ? [j("div", a), j("div", {
                            class: "q-notification__caption"
                        }, [t.caption])] : a
                    }
                    r.push(j("div", o, i))
                }
                const s = [j("div", {
                    class: n.contentClass
                }, r)];
                return t.progress === !0 && s.push(j("div", {
                    key: `${n.uid}|p|${n.badge}`,
                    class: n.progressClass,
                    style: n.progressStyle
                })),
                t.actions !== void 0 && s.push(j("div", {
                    class: n.actionsClass
                }, t.actions.map(i => j(la, i)))),
                n.badge > 1 && s.push(j("div", {
                    key: `${n.uid}|${n.badge}`,
                    class: t.meta.badgeClass,
                    style: t.badgeStyle
                }, [n.badge])),
                j("div", {
                    ref: i => {
                        Nh["" + n.uid] = i
                    }
                    ,
                    key: n.uid,
                    class: n.class,
                    ...n.attrs
                }, [j("div", {
                    class: n.wrapperClass
                }, s)])
            }
            ))))
        }
    })
}
const TC = {
    setDefaults(e) {
        dt(e) === !0 && Object.assign(Vs, e)
    },
    registerType(e, t) {
        dt(t) === !0 && (Fr[e] = t)
    },
    install({$q: e, parentApp: t}) {
        if (e.notify = this.create = n => Ph(n, e),
        e.notify.setDefaults = this.setDefaults,
        e.notify.registerType = this.registerType,
        e.config.notify !== void 0 && this.setDefaults(e.config.notify),
        this.__installed !== !0) {
            nl.forEach(r => {
                At[r] = he([]);
                const s = ["left", "center", "right"].includes(r) === !0 ? "center" : r.indexOf("top") !== -1 ? "top" : "bottom"
                  , i = r.indexOf("left") !== -1 ? "start" : r.indexOf("right") !== -1 ? "end" : "center"
                  , o = ["left", "right"].includes(r) ? `items-${r === "left" ? "start" : "end"} justify-center` : r === "center" ? "flex-center" : `items-${i}`;
                Ih[r] = `q-notifications__list q-notifications__list--${s} fixed column no-wrap ${o}`
            }
            );
            const n = Fi("q-notify");
            Oa(xC(), t).mount(n)
        }
    }
}
  , Lr = {};
function AC(e) {
    Object.assign(Ge, {
        request: e,
        exit: e,
        toggle: e
    })
}
function Lh() {
    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null
}
function Oh() {
    const e = Ge.activeEl = Ge.isActive === !1 ? null : Lh();
    Kw(e === null || e === document.documentElement ? document.body : e)
}
function IC() {
    Ge.isActive = Ge.isActive === !1,
    Oh()
}
function Su(e, t) {
    try {
        const n = e[t]();
        return n === void 0 ? Promise.resolve() : n
    } catch (n) {
        return Promise.reject(n)
    }
}
const Ge = br({
    isActive: !1,
    activeEl: null
}, {
    isCapable: !1,
    install({$q: e}) {
        e.fullscreen = this
    }
});
Lr.request = ["requestFullscreen", "msRequestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen"].find(e => document.documentElement[e] !== void 0),
Ge.isCapable = Lr.request !== void 0,
Ge.isCapable === !1 ? AC( () => Promise.reject("Not capable")) : (Object.assign(Ge, {
    request(e) {
        const t = e || document.documentElement
          , {activeEl: n} = Ge;
        return t === n ? Promise.resolve() : (n !== null && t.contains(n) === !0 ? Ge.exit() : Promise.resolve()).finally( () => Su(t, Lr.request))
    },
    exit() {
        return Ge.isActive === !0 ? Su(document, Lr.exit) : Promise.resolve()
    },
    toggle(e) {
        return Ge.isActive === !0 ? Ge.exit() : Ge.request(e)
    }
}),
Lr.exit = ["exitFullscreen", "msExitFullscreen", "mozCancelFullScreen", "webkitExitFullscreen"].find(e => document[e]),
Ge.isActive = !!Lh(),
Ge.isActive === !0 && Oh(),
["onfullscreenchange", "onmsfullscreenchange", "onwebkitfullscreenchange"].forEach(e => {
    document[e] = IC
}
));
const NC = {
    config: {
        dark: "auto",
        notify: {
            progress: !0
        },
        brand: {
            primary: "#3369e8",
            positive: "#009925",
            negative: "#d50f25",
            warning: "#EEB211"
        }
    },
    iconSet: Mw,
    plugins: {
        Dialog: yC,
        Loading: Tt,
        Notify: TC,
        AppFullscreen: Ge
    }
}
  , PC = "/";
async function LC({app: e, router: t, store: n}, r) {
    let s = !1;
    const i = l => {
        try {
            return t.resolve(l).href
        } catch {}
        return Object(l) === l ? null : l
    }
      , o = l => {
        if (s = !0,
        typeof l == "string" && /^https?:\/\//.test(l)) {
            window.location.href = l;
            return
        }
        const c = i(l);
        c !== null && (window.location.href = c)
    }
      , a = window.location.href.replace(window.location.origin, "");
    for (let l = 0; s === !1 && l < r.length; l++)
        try {
            await r[l]({
                app: e,
                router: t,
                store: n,
                ssrContext: null,
                redirect: o,
                urlPath: a,
                publicPath: PC
            })
        } catch (c) {
            if (c && c.url) {
                o(c.url);
                return
            }
            console.error("[Quasar] boot error:", c);
            return
        }
    s !== !0 && (e.use(t),
    e.mount("#q-app"))
}
Rw(Yf, NC).then(e => {
    const [t,n] = Promise.allSettled !== void 0 ? ["allSettled", r => r.map(s => {
        if (s.status === "rejected") {
            console.error("[Quasar] boot error:", s.reason);
            return
        }
        return s.value.default
    }
    )] : ["all", r => r.map(s => s.default)];
    return Promise[t]([ke( () => import("./i18n-v344.js"), __vite__mapDeps([63, 64])), ke( () => import("./head-v344.js"), __vite__mapDeps([65, 46]))]).then(r => {
        const s = n(r).filter(i => typeof i == "function");
        LC(e, s)
    }
    )
}
);
export {Ew as $, Hn as A, Bn as B, nw as C, hC as D, yC as E, tt as F, w_ as G, lt as H, XC as I, KC as J, GC as K, u_ as L, Sw as M, TC as N, mS as O, jo as P, F0 as Q, XE as R, YE as S, ns as T, QE as U, jE as V, $E as W, LE as X, OE as Y, DE as Z, FE as _, Qe as a, SE as a$, ME as a0, RE as a1, wS as a2, BE as a3, lw as a4, CS as a5, kS as a6, Ja as a7, VE as a8, ES as a9, Zt as aA, i0 as aB, E0 as aC, $S as aD, A0 as aE, mh as aF, gh as aG, AS as aH, FS as aI, Vv as aJ, JC as aK, Ct as aL, of as aM, BC as aN, Pw as aO, Pi as aP, Xt as aQ, D0 as aR, CE as aS, bS as aT, pS as aU, ke as aV, lC as aW, UC as aX, Ie as aY, WC as aZ, EE as a_, qE as aa, SS as ab, WE as ac, xS as ad, _S as ae, la as af, ZC as ag, Wm as ah, Je as ai, Lp as aj, qw as ak, PS as al, Ww as am, jw as an, $w as ao, Bw as ap, Vw as aq, Yw as ar, kt as as, _p as at, bp as au, LS as av, bt as aw, ms as ax, gs as ay, DS as az, TS as b, IS as b$, VC as b0, oE as b1, JE as b2, GE as b3, ss as b4, c0 as b5, nu as b6, u0 as b7, vp as b8, ru as b9, ue as bA, wE as bB, d0 as bC, rS as bD, sS as bE, iS as bF, kE as bG, ZE as bH, tS as bI, nS as bJ, TE as bK, eS as bL, nE as bM, eE as bN, xE as bO, lS as bP, cS as bQ, HE as bR, uS as bS, fS as bT, UE as bU, jd as bV, vE as bW, Rf as bX, _i as bY, vf as bZ, pp as b_, Gw as ba, Za as bb, Zw as bc, at as bd, Lg as be, ga as bf, oS as bg, aS as bh, vn as bi, ct as bj, qs as bk, Ve as bl, MS as bm, _t as bn, fE as bo, yE as bp, KE as bq, zE as br, rs as bs, Os as bt, sh as bu, ih as bv, Vn as bw, Ci as bx, AE as by, rw as bz, Zs as c, gE as c$, NS as c0, IE as c1, iE as c2, qC as c3, hS as c4, O0 as c5, V0 as c6, jS as c7, ri as c8, _C as c9, uC as cA, QC as cB, zC as cC, HC as cD, YC as cE, dt as cF, bh as cG, qS as cH, OC as cI, wo as cJ, C0 as cK, pa as cL, DC as cM, $C as cN, K0 as cO, nC as cP, yr as cQ, Xa as cR, pE as cS, lE as cT, NE as cU, cE as cV, B_ as cW, uE as cX, yS as cY, dS as cZ, aE as c_, hu as ca, Q0 as cb, G0 as cc, Y0 as cd, X0 as ce, Zf as cf, Fm as cg, tl as ch, tC as ci, ua as cj, aC as ck, Yi as cl, td as cm, bf as cn, Aa as co, ca as cp, Qu as cq, rE as cr, __ as cs, PE as ct, tp as cu, Qd as cv, bE as cw, Hd as cx, gS as cy, dC as cz, qf as d, RS as d0, OS as d1, tE as d2, oo as d3, ao as d4, ar as d5, mE as d6, hE as d7, $d as d8, _E as d9, sE as da, MC as db, J_ as dc, vS as dd, mw as de, Nr as e, Cg as f, Ye as g, M as h, j as i, On as j, jC as k, FC as l, Nt as m, he as n, Js as o, _n as p, St as q, RC as r, vr as s, Qh as t, Dw as u, de as v, Im as w, nh as x, Se as y, Un as z};
