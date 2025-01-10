const __vite__fileDeps = [window.parent.smartsupp.getAssetUrl("assets/WidgetMessenger-DJmzom6u.js"), window.parent.smartsupp.getAssetUrl("assets/WidgetMessengerInput-DmjW6p-E.js"), window.parent.smartsupp.getAssetUrl("assets/WidgetPopup-8gFSmQz4.js")],
    __vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
var pu = Object.defineProperty;
var gu = (e, t, n) => t in e ? pu(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var tt = (e, t, n) => (gu(e, typeof t != "symbol" ? t + "" : t, n), n);

function W() {}
const mr = e => e;

function Ft(e, t) {
    for (const n in t) e[n] = t[n];
    return e
}

function Xo(e) {
    return e()
}

function Vi() {
    return Object.create(null)
}

function Ue(e) {
    e.forEach(Xo)
}

function ht(e) {
    return typeof e == "function"
}

function Y(e, t) {
    return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
}
let Dn;

function Zn(e, t) {
    return e === t ? !0 : (Dn || (Dn = document.createElement("a")), Dn.href = t, e === Dn.href)
}

function mu(e) {
    return Object.keys(e).length === 0
}

function Ns(e, ...t) {
    if (e == null) {
        for (const r of t) r(void 0);
        return W
    }
    const n = e.subscribe(...t);
    return n.unsubscribe ? () => n.unsubscribe() : n
}

function A(e) {
    let t;
    return Ns(e, n => t = n)(), t
}

function ue(e, t, n) {
    e.$$.on_destroy.push(Ns(t, n))
}

function yr(e, t, n, r) {
    if (e) {
        const s = Ko(e, t, n, r);
        return e[0](s)
    }
}

function Ko(e, t, n, r) {
    return e[1] && r ? Ft(n.ctx.slice(), e[1](r(t))) : n.ctx
}

function br(e, t, n, r) {
    if (e[2] && r) {
        const s = e[2](r(n));
        if (t.dirty === void 0) return s;
        if (typeof s == "object") {
            const i = [],
                o = Math.max(t.dirty.length, s.length);
            for (let c = 0; c < o; c += 1) i[c] = t.dirty[c] | s[c];
            return i
        }
        return t.dirty | s
    }
    return t.dirty
}

function vr(e, t, n, r, s, i) {
    if (s) {
        const o = Ko(t, n, r, i);
        e.p(o, s)
    }
}

function _r(e) {
    if (e.ctx.length > 32) {
        const t = [],
            n = e.ctx.length / 32;
        for (let r = 0; r < n; r++) t[r] = -1;
        return t
    }
    return -1
}

function as(e) {
    const t = {};
    for (const n in e) n[0] !== "$" && (t[n] = e[n]);
    return t
}

function qi(e, t) {
    const n = {};
    t = new Set(t);
    for (const r in e) !t.has(r) && r[0] !== "$" && (n[r] = e[r]);
    return n
}

function yu(e) {
    const t = {};
    for (const n in e) t[n] = !0;
    return t
}

function $t(e) {
    return e ? ? ""
}

function J_(e, t, n) {
    return e.set(n), t
}

function vn(e) {
    return e && ht(e.destroy) ? e.destroy : W
}

function Hi(e) {
    const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
    return t ? [parseFloat(t[1]), t[2] || "px"] : [e, "px"]
}
const Zo = typeof window < "u";
let zs = Zo ? () => window.performance.now() : () => Date.now(),
    js = Zo ? e => requestAnimationFrame(e) : W;
const Vt = new Set;

function Jo(e) {
    Vt.forEach(t => {
        t.c(e) || (Vt.delete(t), t.f())
    }), Vt.size !== 0 && js(Jo)
}

function Us(e) {
    let t;
    return Vt.size === 0 && js(Jo), {
        promise: new Promise(n => {
            Vt.add(t = {
                c: e,
                f: n
            })
        }),
        abort() {
            Vt.delete(t)
        }
    }
}

function D(e, t) {
    e.appendChild(t)
}

function Yo(e) {
    if (!e) return document;
    const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return t && t.host ? t : e.ownerDocument
}

function bu(e) {
    const t = R("style");
    return t.textContent = "/* empty */", vu(Yo(e), t), t.sheet
}

function vu(e, t) {
    return D(e.head || e, t), t.sheet
}

function V(e, t, n) {
    e.insertBefore(t, n || null)
}

function j(e) {
    e.parentNode && e.parentNode.removeChild(e)
}

function Y_(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
}

function R(e) {
    return document.createElement(e)
}

function Jn(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e)
}

function Yt(e) {
    return document.createTextNode(e)
}

function te() {
    return Yt(" ")
}

function Ke() {
    return Yt("")
}

function lt(e, t, n, r) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
}

function Q_(e) {
    return function(t) {
        return t.preventDefault(), e.call(this, t)
    }
}

function Vs(e) {
    return function(t) {
        return t.stopPropagation(), e.call(this, t)
    }
}

function F(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
}
const _u = ["width", "height"];

function Gi(e, t) {
    const n = Object.getOwnPropertyDescriptors(e.__proto__);
    for (const r in t) t[r] == null ? e.removeAttribute(r) : r === "style" ? e.style.cssText = t[r] : r === "__value" ? e.value = e[r] = t[r] : n[r] && n[r].set && _u.indexOf(r) === -1 ? e[r] = t[r] : F(e, r, t[r])
}

function Wi(e, t) {
    for (const n in t) F(e, n, t[n])
}

function wu(e) {
    return Array.from(e.childNodes)
}

function wr(e, t) {
    t = "" + t, e.data !== t && (e.data = t)
}

function ew(e, t) {
    e.value = t ? ? ""
}

function ce(e, t, n, r) {
    n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, "")
}

function tw(e, t, n) {
    for (let r = 0; r < e.options.length; r += 1) {
        const s = e.options[r];
        if (s.__value === t) {
            s.selected = !0;
            return
        }
    }(!n || t !== void 0) && (e.selectedIndex = -1)
}

function nw(e, t) {
    for (let n = 0; n < e.options.length; n += 1) {
        const r = e.options[n];
        r.selected = ~t.indexOf(r.__value)
    }
}

function rw(e) {
    const t = e.querySelector(":checked");
    return t && t.__value
}

function ye(e, t, n) {
    e.classList.toggle(t, !!n)
}

function Qo(e, t, {
    bubbles: n = !1,
    cancelable: r = !1
} = {}) {
    return new CustomEvent(e, {
        detail: t,
        bubbles: n,
        cancelable: r
    })
}
class sw {
    constructor(t = !1) {
        tt(this, "is_svg", !1);
        tt(this, "e");
        tt(this, "n");
        tt(this, "t");
        tt(this, "a");
        this.is_svg = t, this.e = this.n = null
    }
    c(t) {
        this.h(t)
    }
    m(t, n, r = null) {
        this.e || (this.is_svg ? this.e = Jn(n.nodeName) : this.e = R(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(t)), this.i(r)
    }
    h(t) {
        this.e.innerHTML = t, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes)
    }
    i(t) {
        for (let n = 0; n < this.n.length; n += 1) V(this.t, this.n[n], t)
    }
    p(t) {
        this.d(), this.h(t), this.i(this.a)
    }
    d() {
        this.n.forEach(j)
    }
}

function Yn(e, t) {
    return new e(t)
}
const Qn = new Map;
let er = 0;

function Cu(e) {
    let t = 5381,
        n = e.length;
    for (; n--;) t = (t << 5) - t ^ e.charCodeAt(n);
    return t >>> 0
}

function Au(e, t) {
    const n = {
        stylesheet: bu(t),
        rules: {}
    };
    return Qn.set(e, n), n
}

function tr(e, t, n, r, s, i, o, c = 0) {
    const l = 16.666 / r;
    let f = `{
`;
    for (let g = 0; g <= 1; g += l) {
        const m = t + (n - t) * i(g);
        f += g * 100 + `%{${o(m,1-m)}}
`
    }
    const u = f + `100% {${o(n,1-n)}}
}`,
        a = `__svelte_${Cu(u)}_${c}`,
        d = Yo(e),
        {
            stylesheet: h,
            rules: p
        } = Qn.get(d) || Au(d, e);
    p[a] || (p[a] = !0, h.insertRule(`@keyframes ${a} ${u}`, h.cssRules.length));
    const y = e.style.animation || "";
    return e.style.animation = `${y?`${y}, `:""}${a} ${r}ms linear ${s}ms 1 both`, er += 1, a
}

function nr(e, t) {
    const n = (e.style.animation || "").split(", "),
        r = n.filter(t ? i => i.indexOf(t) < 0 : i => i.indexOf("__svelte") === -1),
        s = n.length - r.length;
    s && (e.style.animation = r.join(", "), er -= s, er || ku())
}

function ku() {
    js(() => {
        er || (Qn.forEach(e => {
            const {
                ownerNode: t
            } = e.stylesheet;
            t && j(t)
        }), Qn.clear())
    })
}
let fn;

function un(e) {
    fn = e
}

function _n() {
    if (!fn) throw new Error("Function called outside component initialization");
    return fn
}

function pt(e) {
    _n().$$.on_mount.push(e)
}

function ea(e) {
    _n().$$.on_destroy.push(e)
}

function iw() {
    const e = _n();
    return (t, n, {
        cancelable: r = !1
    } = {}) => {
        const s = e.$$.callbacks[t];
        if (s) {
            const i = Qo(t, n, {
                cancelable: r
            });
            return s.slice().forEach(o => {
                o.call(e, i)
            }), !i.defaultPrevented
        }
        return !0
    }
}

function ow(e, t) {
    return _n().$$.context.set(e, t), t
}

function aw(e) {
    return _n().$$.context.get(e)
}

function Nt(e, t) {
    const n = e.$$.callbacks[t.type];
    n && n.slice().forEach(r => r.call(this, t))
}
const zt = [],
    ft = [];
let qt = [];
const cs = [],
    ta = Promise.resolve();
let us = !1;

function na() {
    us || (us = !0, ta.then(ra))
}

function Fu() {
    return na(), ta
}

function Ce(e) {
    qt.push(e)
}

function cw(e) {
    cs.push(e)
}
const Kr = new Set;
let Rt = 0;

function ra() {
    if (Rt !== 0) return;
    const e = fn;
    do {
        try {
            for (; Rt < zt.length;) {
                const t = zt[Rt];
                Rt++, un(t), Su(t.$$)
            }
        } catch (t) {
            throw zt.length = 0, Rt = 0, t
        }
        for (un(null), zt.length = 0, Rt = 0; ft.length;) ft.pop()();
        for (let t = 0; t < qt.length; t += 1) {
            const n = qt[t];
            Kr.has(n) || (Kr.add(n), n())
        }
        qt.length = 0
    } while (zt.length);
    for (; cs.length;) cs.pop()();
    us = !1, Kr.clear(), un(e)
}

function Su(e) {
    if (e.fragment !== null) {
        e.update(), Ue(e.before_update);
        const t = e.dirty;
        e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Ce)
    }
}

function Eu(e) {
    const t = [],
        n = [];
    qt.forEach(r => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach(r => r()), qt = t
}
let an;

function qs() {
    return an || (an = Promise.resolve(), an.then(() => {
        an = null
    })), an
}

function At(e, t, n) {
    e.dispatchEvent(Qo(`${t?"intro":"outro"}${n}`))
}
const Vn = new Set;
let We;

function Re() {
    We = {
        r: 0,
        c: [],
        p: We
    }
}

function Be() {
    We.r || Ue(We.c), We = We.p
}

function S(e, t) {
    e && e.i && (Vn.delete(e), e.i(t))
}

function T(e, t, n, r) {
    if (e && e.o) {
        if (Vn.has(e)) return;
        Vn.add(e), We.c.push(() => {
            Vn.delete(e), r && (n && e.d(1), r())
        }), e.o(t)
    } else r && r()
}
const Hs = {
    duration: 0
};

function Qt(e, t, n) {
    const r = {
        direction: "in"
    };
    let s = t(e, n, r),
        i = !1,
        o, c, l = 0;

    function f() {
        o && nr(e, o)
    }

    function u() {
        const {
            delay: d = 0,
            duration: h = 300,
            easing: p = mr,
            tick: y = W,
            css: g
        } = s || Hs;
        g && (o = tr(e, 0, 1, h, d, p, g, l++)), y(0, 1);
        const m = zs() + d,
            b = m + h;
        c && c.abort(), i = !0, Ce(() => At(e, !0, "start")), c = Us(_ => {
            if (i) {
                if (_ >= b) return y(1, 0), At(e, !0, "end"), f(), i = !1;
                if (_ >= m) {
                    const v = p((_ - m) / h);
                    y(v, 1 - v)
                }
            }
            return i
        })
    }
    let a = !1;
    return {
        start() {
            a || (a = !0, nr(e), ht(s) ? (s = s(r), qs().then(u)) : u())
        },
        invalidate() {
            a = !1
        },
        end() {
            i && (f(), i = !1)
        }
    }
}

function en(e, t, n) {
    const r = {
        direction: "out"
    };
    let s = t(e, n, r),
        i = !0,
        o;
    const c = We;
    c.r += 1;
    let l;

    function f() {
        const {
            delay: u = 0,
            duration: a = 300,
            easing: d = mr,
            tick: h = W,
            css: p
        } = s || Hs;
        p && (o = tr(e, 1, 0, a, u, d, p));
        const y = zs() + u,
            g = y + a;
        Ce(() => At(e, !1, "start")), "inert" in e && (l = e.inert, e.inert = !0), Us(m => {
            if (i) {
                if (m >= g) return h(0, 1), At(e, !1, "end"), --c.r || Ue(c.c), !1;
                if (m >= y) {
                    const b = d((m - y) / a);
                    h(1 - b, b)
                }
            }
            return i
        })
    }
    return ht(s) ? qs().then(() => {
        s = s(r), f()
    }) : f(), {
        end(u) {
            u && "inert" in e && (e.inert = l), u && s.tick && s.tick(1, 0), i && (o && nr(e, o), i = !1)
        }
    }
}

function Gt(e, t, n, r) {
    let i = t(e, n, {
            direction: "both"
        }),
        o = r ? 0 : 1,
        c = null,
        l = null,
        f = null,
        u;

    function a() {
        f && nr(e, f)
    }

    function d(p, y) {
        const g = p.b - o;
        return y *= Math.abs(g), {
            a: o,
            b: p.b,
            d: g,
            duration: y,
            start: p.start,
            end: p.start + y,
            group: p.group
        }
    }

    function h(p) {
        const {
            delay: y = 0,
            duration: g = 300,
            easing: m = mr,
            tick: b = W,
            css: _
        } = i || Hs, v = {
            start: zs() + y,
            b: p
        };
        p || (v.group = We, We.r += 1), "inert" in e && (p ? u !== void 0 && (e.inert = u) : (u = e.inert, e.inert = !0)), c || l ? l = v : (_ && (a(), f = tr(e, o, p, g, y, m, _)), p && b(0, 1), c = d(v, g), Ce(() => At(e, p, "start")), Us(w => {
            if (l && w > l.start && (c = d(l, g), l = null, At(e, c.b, "start"), _ && (a(), f = tr(e, o, c.b, c.duration, 0, m, i.css))), c) {
                if (w >= c.end) b(o = c.b, 1 - o), At(e, c.b, "end"), l || (c.b ? a() : --c.group.r || Ue(c.group.c)), c = null;
                else if (w >= c.start) {
                    const k = w - c.start;
                    o = c.a + c.d * m(k / c.duration), b(o, 1 - o)
                }
            }
            return !!(c || l)
        }))
    }
    return {
        run(p) {
            ht(i) ? qs().then(() => {
                i = i({
                    direction: p ? "in" : "out"
                }), h(p)
            }) : h(p)
        },
        end() {
            a(), c = l = null
        }
    }
}

function sa(e, t) {
    const n = {},
        r = {},
        s = {
            $$scope: 1
        };
    let i = e.length;
    for (; i--;) {
        const o = e[i],
            c = t[i];
        if (c) {
            for (const l in o) l in c || (r[l] = 1);
            for (const l in c) s[l] || (n[l] = c[l], s[l] = 1);
            e[i] = c
        } else
            for (const l in o) s[l] = 1
    }
    for (const o in r) o in n || (n[o] = void 0);
    return n
}

function uw(e) {
    return typeof e == "object" && e !== null ? e : {}
}

function lw(e, t, n) {
    const r = e.$$.props[t];
    r !== void 0 && (e.$$.bound[r] = n, n(e.$$.ctx[r]))
}

function N(e) {
    e && e.c()
}

function P(e, t, n) {
    const {
        fragment: r,
        after_update: s
    } = e.$$;
    r && r.m(t, n), Ce(() => {
        const i = e.$$.on_mount.map(Xo).filter(ht);
        e.$$.on_destroy ? e.$$.on_destroy.push(...i) : Ue(i), e.$$.on_mount = []
    }), s.forEach(Ce)
}

function L(e, t) {
    const n = e.$$;
    n.fragment !== null && (Eu(n.after_update), Ue(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
}

function Tu(e, t) {
    e.$$.dirty[0] === -1 && (zt.push(e), na(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}

function re(e, t, n, r, s, i, o = null, c = [-1]) {
    const l = fn;
    un(e);
    const f = e.$$ = {
        fragment: null,
        ctx: [],
        props: i,
        update: W,
        not_equal: s,
        bound: Vi(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(t.context || (l ? l.$$.context : [])),
        callbacks: Vi(),
        dirty: c,
        skip_bound: !1,
        root: t.target || l.$$.root
    };
    o && o(f.root);
    let u = !1;
    if (f.ctx = n ? n(e, t.props || {}, (a, d, ...h) => {
            const p = h.length ? h[0] : d;
            return f.ctx && s(f.ctx[a], f.ctx[a] = p) && (!f.skip_bound && f.bound[a] && f.bound[a](p), u && Tu(e, a)), d
        }) : [], f.update(), u = !0, Ue(f.before_update), f.fragment = r ? r(f.ctx) : !1, t.target) {
        if (t.hydrate) {
            const a = wu(t.target);
            f.fragment && f.fragment.l(a), a.forEach(j)
        } else f.fragment && f.fragment.c();
        t.intro && S(e.$$.fragment), P(e, t.target, t.anchor), ra()
    }
    un(l)
}
class se {
    constructor() {
        tt(this, "$$");
        tt(this, "$$set")
    }
    $destroy() {
        L(this, 1), this.$destroy = W
    }
    $on(t, n) {
        if (!ht(n)) return W;
        const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return r.push(n), () => {
            const s = r.indexOf(n);
            s !== -1 && r.splice(s, 1)
        }
    }
    $set(t) {
        this.$$set && !mu(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
    }
}
const xu = "4",
    Bt = [];

function Ou(e, t) {
    return {
        subscribe: O(e, t).subscribe
    }
}

function O(e, t = W) {
    let n;
    const r = new Set;

    function s(c) {
        if (Y(e, c) && (e = c, n)) {
            const l = !Bt.length;
            for (const f of r) f[1](), Bt.push(f, e);
            if (l) {
                for (let f = 0; f < Bt.length; f += 2) Bt[f][0](Bt[f + 1]);
                Bt.length = 0
            }
        }
    }

    function i(c) {
        s(c(e))
    }

    function o(c, l = W) {
        const f = [c, l];
        return r.add(f), r.size === 1 && (n = t(s, i) || W), c(e), () => {
            r.delete(f), r.size === 0 && n && (n(), n = null)
        }
    }
    return {
        set: s,
        update: i,
        subscribe: o
    }
}

function $(e, t, n) {
    const r = !Array.isArray(e),
        s = r ? [e] : e;
    if (!s.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
    const i = t.length < 2;
    return Ou(n, (o, c) => {
        let l = !1;
        const f = [];
        let u = 0,
            a = W;
        const d = () => {
                if (u) return;
                a();
                const p = t(r ? f[0] : f, o, c);
                i ? o(p) : a = ht(p) ? p : W
            },
            h = s.map((p, y) => Ns(p, g => {
                f[y] = g, u &= ~(1 << y), l && d()
            }, () => {
                u |= 1 << y
            }));
        return l = !0, d(),
            function() {
                Ue(h), a(), l = !1
            }
    })
}
const Mu = () => {
        const e = new Map;
        return Object.freeze({
            on: (s, i) => {
                const o = e.get(s);
                o ? o.push(i) : e.set(s, [i])
            },
            off: (s, i) => {
                const o = e.get(s);
                o && e.set(s, o.filter(c => c !== i))
            },
            emit: (s, i) => {
                const o = e.get(s);
                o && o.forEach(c => c(i))
            }
        })
    },
    ie = Mu(),
    Du = "data-smartsupp-id",
    qn = () => window.top ? ? window.parent,
    ge = () => window.parent,
    _t = () => ge().document,
    fw = e => e && e.ownerDocument || document,
    $u = ({
        vid: e
    }) => {
        const t = ge().smartsupp || {};
        t.vid = e, ge().smartsupp = t
    },
    Ru = "debug",
    Bu = e => {
        try {
            const t = ge().localStorage.getItem(Ru);
            if (!t) return !1;
            if (t === e || t === "*") return !0;
            const n = e.match(/^\w+:/g);
            return n ? t === `${n[0]}*` : !1
        } catch {
            return !1
        }
    },
    Iu = (e, t) => (n, ...r) => {
        Bu(e) && console.debug(`%c${e}`, `color: ${t};`, n, ...r)
    },
    De = Iu("smartsupp:widget", "#1233df"),
    Pu = () => {
        let e = null;
        const t = [];
        return Object.freeze({
            init: o => {
                e = o, De("widget options", o), t.forEach(c => c(o))
            },
            getOptions: () => {
                if (!e) throw new Error("Widget options not initialized");
                return e
            },
            awaitOptions: async () => e || new Promise(o => {
                t.push(o)
            }),
            updateOptions: o => {
                e = { ...e,
                    ...o
                }
            }
        })
    },
    M = Pu(),
    Gs = e => {
        const n = e.document.getElementsByTagName("body")[0].getAttribute(Du);
        if (!n) throw new Error("Missing chat ID attribute on body element.");
        if (!e.parent.$smartsupp) throw new Error("Something went wrong. Seems like loader.js did not initialize widget.");
        if (!e.parent.$smartsupp.getWidget) throw new Error("Get widget function was not supplied by loader.js.");
        return e.parent.$smartsupp.getWidget(n)
    }; /*! js-cookie v3.0.5 | MIT */
function $n(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) e[r] = n[r]
    }
    return e
}
var Lu = {
    read: function(e) {
        return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function(e) {
        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
    }
};

function ls(e, t) {
    function n(s, i, o) {
        if (!(typeof document > "u")) {
            o = $n({}, t, o), typeof o.expires == "number" && (o.expires = new Date(Date.now() + o.expires * 864e5)), o.expires && (o.expires = o.expires.toUTCString()), s = encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var c = "";
            for (var l in o) o[l] && (c += "; " + l, o[l] !== !0 && (c += "=" + o[l].split(";")[0]));
            return document.cookie = s + "=" + e.write(i, s) + c
        }
    }

    function r(s) {
        if (!(typeof document > "u" || arguments.length && !s)) {
            for (var i = document.cookie ? document.cookie.split("; ") : [], o = {}, c = 0; c < i.length; c++) {
                var l = i[c].split("="),
                    f = l.slice(1).join("=");
                try {
                    var u = decodeURIComponent(l[0]);
                    if (o[u] = e.read(f, u), s === u) break
                } catch {}
            }
            return s ? o[s] : o
        }
    }
    return Object.create({
        set: n,
        get: r,
        remove: function(s, i) {
            n(s, "", $n({}, i, {
                expires: -1
            }))
        },
        withAttributes: function(s) {
            return ls(this.converter, $n({}, this.attributes, s))
        },
        withConverter: function(s) {
            return ls($n({}, this.converter, s), this.attributes)
        }
    }, {
        attributes: {
            value: Object.freeze(t)
        },
        converter: {
            value: Object.freeze(e)
        }
    })
}
var rr = ls(Lu, {
    path: "/"
});
const fs = "ssupp",
    ia = 182,
    oa = (e = ia) => ({
        expires: e,
        domain: M.getOptions().cookieDomain,
        path: M.getOptions().cookiePath || "/",
        sameSite: "strict",
        secure: ge().location.protocol === "https:"
    }),
    Ws = e => `${M.getOptions().cookiePrefix||""}${fs}.${e}`,
    Nu = ({
        name: e,
        value: t,
        expirationInDays: n = ia,
        options: r
    }) => {
        rr.set(Ws(e), t, { ...oa(n),
            ...r
        })
    },
    zu = e => rr.get(Ws(e)),
    ju = e => {
        const t = Ws(e);
        if (rr.get(t)) {
            const {
                path: r,
                domain: s
            } = oa();
            rr.remove(t, {
                path: r,
                domain: s
            })
        }
    },
    aa = e => (t, ...n) => {
        e(`[Smartsupp] ${t}`, ...n)
    },
    oe = aa(console.warn),
    Xe = aa(console.error),
    Uu = () => {
        const {
            key: e
        } = M.getOptions();
        return `${ge().SMARTSUPP_AUTOCREATE!==!1?fs:`${Gs(window).id}_${fs}`}_${e}`
    },
    sr = e => `${Uu()}${e?`_${e}`:""}`,
    Cr = e => {
        try {
            const t = window.localStorage.getItem(sr(e)) ? ? "{}";
            return JSON.parse(t)
        } catch {
            return {}
        }
    },
    Xs = (e, t) => {
        try {
            window.localStorage.setItem(sr(t), JSON.stringify(e))
        } catch (n) {
            oe("Set to local storage failed", n)
        }
    },
    Vu = (e, t) => {
        const r = { ...Cr(),
            [e]: String(t)
        };
        Xs(r)
    },
    ca = e => {
        const t = Cr();
        t[e] && (delete t[e], Xs(t))
    },
    qu = () => {
        window.localStorage.removeItem(sr()), window.localStorage.removeItem(sr("cards"))
    };
var J = (e => (e.AnalyticsConsent = "analyticsConsent", e.AuthForm = "authForm", e.IsMessengerFrameExpanded = "isMessengerFrameExpanded", e.IsMessengerFrameOpened = "opened", e.MarketingConsent = "marketingConsent", e.Message = "message", e.PopupClosedAt = "popupClosedAt", e.RatingText = "ratingText", e.SoundsEnabled = "enableSounds", e.VisitorId = "vid", e.Visits = "visits", e.TicketForm = "ticketForm", e.SessionId = "sessionId", e))(J || {});
const ze = e => {
        let t = "";
        return e === J.VisitorId && M.getOptions().cookieDomain && (t = zu(e)), t || Cr()[e]
    },
    Qe = ({
        name: e,
        value: t
    }) => {
        e === J.VisitorId && M.getOptions().cookieDomain && Nu({
            name: e,
            value: t
        }), Vu(e, t)
    },
    Hu = e => {
        ca(e)
    };
ie.on("analyticsConsentChanged", e => {
    Qe({
        name: J.AnalyticsConsent,
        value: String(e)
    })
});
ie.on("marketingConsentChanged", e => {
    Qe({
        name: J.MarketingConsent,
        value: String(e)
    })
});
const Ks = () => !!M.getOptions().consentModeEnabled,
    ua = () => {
        const e = ze(J.AnalyticsConsent) === "true";
        return !(Ks() && !e)
    },
    la = () => {
        const e = ze(J.MarketingConsent) === "true";
        return !(Ks() && !e)
    };
var I = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function fa(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function da(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(r) {
        var s = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, s.get ? s : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }), n
}
var Gu = "sessionAccessId-";

function Wu(e) {
    var t = void 0;
    return e && e.id && ~e.id.indexOf(Gu) && (t = e.id), t
}
var Xu = Wu;

function Ku(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
    } else return Array.from(e)
}
var Zu = Xu,
    Ju = "sessionAccessId-";

function Yu() {
    return Ju + Date.now()
}
var Qu = function(t, n) {
    n = n || document.body;
    var r = void 0,
        s = {},
        i = [],
        o = !1,
        c = !0,
        l = void 0,
        f = !1,
        u = document.createElement("iframe");
    u.src = t, u.width = 0, u.height = 0, u.style.display = "none", u.onload = function() {
        f = !0
    };

    function a() {
        n.appendChild(u), r = u.contentWindow, c = !1, window.addEventListener("message", d), b()
    }
    a();

    function d(_) {
        var v = _.data,
            w = Zu(v);
        if (w === "sessionAccessId-connected") {
            o = !0;
            return
        }
        if (v.connectError) {
            Object.keys(s).forEach(function(C) {
                return s[C](v.error)
            }), s = {};
            return
        }
        var k = s[w];
        w && k && k(v.error, v.data)
    }

    function h() {
        clearTimeout(l), window.removeEventListener("message", d), u.parentNode.removeChild(u), o = !1, c = !0
    }

    function p(_, v, w, k) {
        c && a(), !o && _ !== "connect" && i.push([_, v, w, k]);
        var C = Yu();
        s && typeof k == "function" && (s[C] = k), f && r.postMessage({
            method: _,
            key: v,
            value: w,
            id: C
        }, t)
    }

    function y(_, v) {
        if (!v) throw new Error("callback required for get");
        p("get", _, null, v)
    }

    function g(_, v, w) {
        p("set", _, v, w)
    }

    function m(_, v) {
        p("remove", _, null, v)
    }

    function b() {
        if (o) {
            for (clearTimeout(l); i.length;) p.apply(void 0, Ku(i.pop()));
            return
        }
        p("connect"), l = setTimeout(b, 125)
    }
    return {
        get: y,
        set: g,
        remove: m,
        close: h
    }
};
const el = Qu;
var tl = el;
const nl = fa(tl),
    rl = () => {
        const {
            storageUrl: e,
            key: t
        } = M.getOptions();
        if (!e) throw new Error("Storage url is missing");
        return `${e.replace(/{key}/g,t)}/index.html`
    },
    sl = () => {
        let e = null;
        return Object.freeze({
            getStorage: () => {
                if (e) return e;
                try {
                    const r = rl();
                    return e = nl(r), De("cross domain storage created", r), e
                } catch {
                    throw new Error("Cross domain storage create failed")
                }
            },
            closeStorage: () => {
                e && (e.close(), De("cross domain storage closed"))
            }
        })
    },
    Zs = sl(),
    il = e => {
        const t = Zs.getStorage();
        return new Promise((n, r) => {
            t.get(e, (s, i) => s ? r(s) : (De("get from cross domain storage", e, i), n(i)))
        })
    },
    ol = (e, t) => {
        const n = Zs.getStorage();
        return new Promise((r, s) => {
            n.set(e, t, i => i ? s(i) : (De("set to cross domain storage", e, t), r()))
        })
    },
    al = () => {
        Zs.closeStorage()
    },
    ha = () => !!M.getOptions().crossDomainEnabled,
    cl = async () => ha() ? il(J.VisitorId) : ze(J.VisitorId) || null,
    ul = async e => ha() ? ol(J.VisitorId, String(e)) : Qe({
        name: J.VisitorId,
        value: String(e)
    }),
    ll = () => {
        if (la()) return ze(J.Visits) ? Number(ze(J.Visits)) : 0
    },
    fl = e => {
        la() && Qe({
            name: J.Visits,
            value: String(e)
        })
    };
ie.on("marketingConsentChanged", e => {
    e || Hu(J.Visits)
});
const pa = (e, t, n) => {
        const {
            set: r,
            subscribe: s
        } = O(t, o => {
            const c = ze(e);
            c && o(n ? n(c) : c)
        }), i = o => {
            Qe({
                name: e,
                value: String(o)
            })
        };
        return {
            set: o => {
                i(o), r(o)
            },
            subscribe: s
        }
    },
    Rn = () => "ontouchstart" in window || navigator.msMaxTouchPoints > 0,
    dl = () => ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document,
    hl = 450,
    pl = 500,
    Ar = O(null),
    gl = O({
        width: ge().innerWidth,
        height: ge().innerHeight
    }),
    Ze = $([Ar, gl], ([e, t]) => {
        const {
            widgetBlockingOptions: n
        } = M.getOptions();
        if (n != null && n.enforceDesktopMode) return !1;
        if (e) {
            const {
                isMobile: r,
                isTablet: s
            } = e;
            if (s) return !1;
            if (r) return !0
        }
        return t.width < hl || t.height < pl
    }),
    ga = $([Ze], ([e]) => {
        const {
            fullScreenEnabled: t
        } = M.getOptions();
        return !!(e || t)
    }),
    ml = $([Ar], ([e]) => !!(e != null && e.isDesktop) && !dl());
$([Ar], ([e]) => !!(e != null && e.isTablet));
const yl = () => {
        const e = O({}),
            {
                subscribe: t,
                update: n
            } = e;
        return {
            subscribe: t,
            add: o => {
                n(c => ({ ...c,
                    [o.id]: o
                }))
            },
            remove: o => {
                n(c => {
                    const {
                        [o]: l, ...f
                    } = c;
                    return f
                })
            },
            find: o => A(e)[o] || null
        }
    },
    ir = yl(),
    dw = $([ir], ([e]) => Object.values(e)),
    Js = e => (t, n = 3e3) => {
        const r = `fm-${e}-${t}`,
            s = ir.find(r);
        let i = 1;
        s && (clearTimeout(s.timeout), i = s.recurrence + 1);
        let o;
        return n > 0 && (o = window.setTimeout(() => {
            Xi(r)
        }, n)), ir.add({
            id: r,
            type: e,
            text: t,
            timeout: o,
            recurrence: i
        }), () => Xi(r)
    },
    Xi = e => {
        ir.remove(e)
    },
    hw = Js("success"),
    kt = Js("error"),
    jt = Js("warning");
var ma = (e => (e[e.Good = 5] = "Good", e[e.Normal = 3] = "Normal", e[e.Bad = 1] = "Bad", e))(ma || {});
const bl = {
        5: {
            value: 5,
            text: "agentRating.good.formText",
            name: "good"
        },
        3: {
            value: 3,
            text: "agentRating.normal.formText",
            name: "neutral"
        },
        1: {
            value: 1,
            text: "agentRating.bad.formText",
            name: "bad"
        }
    },
    pw = Object.values(bl).sort((e, t) => t.value - e.value),
    kr = "rate_form_id",
    Ki = {
        id: kr,
        type: "message",
        subType: "system",
        channel: {
            type: "default",
            id: null
        },
        chatId: "",
        visitorId: "",
        groupId: null,
        agentId: null,
        trigger: null,
        createdAt: "",
        content: {
            type: "rate_form",
            data: {}
        },
        attachments: [],
        widgetOptions: {
            disableInput: !1,
            disableAuthentication: !1,
            disableAttachments: !1
        }
    },
    ya = O(null);
var me = {},
    ds = {},
    Ys = {},
    he = {},
    Bn = {
        exports: {}
    },
    Zr, Zi;

function vl() {
    if (Zi) return Zr;
    Zi = 1;
    var e = 1e3,
        t = e * 60,
        n = t * 60,
        r = n * 24,
        s = r * 7,
        i = r * 365.25;
    Zr = function(u, a) {
        a = a || {};
        var d = typeof u;
        if (d === "string" && u.length > 0) return o(u);
        if (d === "number" && isFinite(u)) return a.long ? l(u) : c(u);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(u))
    };

    function o(u) {
        if (u = String(u), !(u.length > 100)) {
            var a = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(u);
            if (a) {
                var d = parseFloat(a[1]),
                    h = (a[2] || "ms").toLowerCase();
                switch (h) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return d * i;
                    case "weeks":
                    case "week":
                    case "w":
                        return d * s;
                    case "days":
                    case "day":
                    case "d":
                        return d * r;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return d * n;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return d * t;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return d * e;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return d;
                    default:
                        return
                }
            }
        }
    }

    function c(u) {
        var a = Math.abs(u);
        return a >= r ? Math.round(u / r) + "d" : a >= n ? Math.round(u / n) + "h" : a >= t ? Math.round(u / t) + "m" : a >= e ? Math.round(u / e) + "s" : u + "ms"
    }

    function l(u) {
        var a = Math.abs(u);
        return a >= r ? f(u, a, r, "day") : a >= n ? f(u, a, n, "hour") : a >= t ? f(u, a, t, "minute") : a >= e ? f(u, a, e, "second") : u + " ms"
    }

    function f(u, a, d, h) {
        var p = a >= d * 1.5;
        return Math.round(u / d) + " " + h + (p ? "s" : "")
    }
    return Zr
}
var Jr, Ji;

function _l() {
    if (Ji) return Jr;
    Ji = 1;

    function e(t) {
        r.debug = r, r.default = r, r.coerce = f, r.disable = o, r.enable = i, r.enabled = c, r.humanize = vl(), r.destroy = u, Object.keys(t).forEach(a => {
            r[a] = t[a]
        }), r.names = [], r.skips = [], r.formatters = {};

        function n(a) {
            let d = 0;
            for (let h = 0; h < a.length; h++) d = (d << 5) - d + a.charCodeAt(h), d |= 0;
            return r.colors[Math.abs(d) % r.colors.length]
        }
        r.selectColor = n;

        function r(a) {
            let d, h = null,
                p, y;

            function g(...m) {
                if (!g.enabled) return;
                const b = g,
                    _ = Number(new Date),
                    v = _ - (d || _);
                b.diff = v, b.prev = d, b.curr = _, d = _, m[0] = r.coerce(m[0]), typeof m[0] != "string" && m.unshift("%O");
                let w = 0;
                m[0] = m[0].replace(/%([a-zA-Z%])/g, (C, E) => {
                    if (C === "%%") return "%";
                    w++;
                    const B = r.formatters[E];
                    if (typeof B == "function") {
                        const z = m[w];
                        C = B.call(b, z), m.splice(w, 1), w--
                    }
                    return C
                }), r.formatArgs.call(b, m), (b.log || r.log).apply(b, m)
            }
            return g.namespace = a, g.useColors = r.useColors(), g.color = r.selectColor(a), g.extend = s, g.destroy = r.destroy, Object.defineProperty(g, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () => h !== null ? h : (p !== r.namespaces && (p = r.namespaces, y = r.enabled(a)), y),
                set: m => {
                    h = m
                }
            }), typeof r.init == "function" && r.init(g), g
        }

        function s(a, d) {
            const h = r(this.namespace + (typeof d > "u" ? ":" : d) + a);
            return h.log = this.log, h
        }

        function i(a) {
            r.save(a), r.namespaces = a, r.names = [], r.skips = [];
            let d;
            const h = (typeof a == "string" ? a : "").split(/[\s,]+/),
                p = h.length;
            for (d = 0; d < p; d++) h[d] && (a = h[d].replace(/\*/g, ".*?"), a[0] === "-" ? r.skips.push(new RegExp("^" + a.slice(1) + "$")) : r.names.push(new RegExp("^" + a + "$")))
        }

        function o() {
            const a = [...r.names.map(l), ...r.skips.map(l).map(d => "-" + d)].join(",");
            return r.enable(""), a
        }

        function c(a) {
            if (a[a.length - 1] === "*") return !0;
            let d, h;
            for (d = 0, h = r.skips.length; d < h; d++)
                if (r.skips[d].test(a)) return !1;
            for (d = 0, h = r.names.length; d < h; d++)
                if (r.names[d].test(a)) return !0;
            return !1
        }

        function l(a) {
            return a.toString().substring(2, a.toString().length - 2).replace(/\.\*\?$/, "*")
        }

        function f(a) {
            return a instanceof Error ? a.stack || a.message : a
        }

        function u() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
        }
        return r.enable(r.load()), r
    }
    return Jr = e, Jr
}
var Yi;

function wl() {
    return Yi || (Yi = 1, function(e, t) {
        var n = {};
        t.formatArgs = s, t.save = i, t.load = o, t.useColors = r, t.storage = c(), t.destroy = (() => {
            let f = !1;
            return () => {
                f || (f = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
            }
        })(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

        function r() {
            return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }

        function s(f) {
            if (f[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + f[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
            const u = "color: " + this.color;
            f.splice(1, 0, u, "color: inherit");
            let a = 0,
                d = 0;
            f[0].replace(/%[a-zA-Z%]/g, h => {
                h !== "%%" && (a++, h === "%c" && (d = a))
            }), f.splice(d, 0, u)
        }
        t.log = console.debug || console.log || (() => {});

        function i(f) {
            try {
                f ? t.storage.setItem("debug", f) : t.storage.removeItem("debug")
            } catch {}
        }

        function o() {
            let f;
            try {
                f = t.storage.getItem("debug")
            } catch {}
            return !f && typeof process < "u" && "env" in process && (f = n.DEBUG), f
        }

        function c() {
            try {
                return localStorage
            } catch {}
        }
        e.exports = _l()(t);
        const {
            formatters: l
        } = e.exports;
        l.j = function(f) {
            try {
                return JSON.stringify(f)
            } catch (u) {
                return "[UnexpectedJSONParseError]: " + u.message
            }
        }
    }(Bn, Bn.exports)), Bn.exports
}
var Cl = I && I.__extends || function() {
    var e = function(t, n) {
        return e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(r, s) {
            r.__proto__ = s
        } || function(r, s) {
            for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (r[i] = s[i])
        }, e(t, n)
    };
    return function(t, n) {
        if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        e(t, n);

        function r() {
            this.constructor = t
        }
        t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
    }
}();
Object.defineProperty(he, "__esModule", {
    value: !0
});
he.createEmitter = he.createCallback = he.bound = he.createSocketError = he.SocketError = he.debug = void 0;
he.debug = Al();

function Al() {
    try {
        return wl()("smartsupp:client")
    } catch {
        return function() {}
    }
}
var ba = function(e) {
    Cl(t, e);

    function t(n, r) {
        var s = e.call(this, n) || this;
        return Object.setPrototypeOf(s, t.prototype), s.name = s.constructor.name, s.code = r.code, s.type = r.type, s.event = r.event, r && r.stack && (s.stack = "".concat(s.stack, `
Caused By: `).concat(r.stack)), s
    }
    return t
}(Error);
he.SocketError = ba;

function va(e) {
    return new ba(e.message, e)
}
he.createSocketError = va;

function kl(e, t) {
    return function() {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        e[t].apply(e, n)
    }
}
he.bound = kl;

function Fl(e, t) {
    return function(n, r) {
        n ? t(va(n)) : e(r)
    }
}
he.createCallback = Fl;

function Sl(e, t) {
    return function(n) {
        e.emit(t, n)
    }
}
he.createEmitter = Sl;
var _a = {
    exports: {}
};
(function(e) {
    var t = Object.prototype.hasOwnProperty,
        n = "~";

    function r() {}
    Object.create && (r.prototype = Object.create(null), new r().__proto__ || (n = !1));

    function s(l, f, u) {
        this.fn = l, this.context = f, this.once = u || !1
    }

    function i(l, f, u, a, d) {
        if (typeof u != "function") throw new TypeError("The listener must be a function");
        var h = new s(u, a || l, d),
            p = n ? n + f : f;
        return l._events[p] ? l._events[p].fn ? l._events[p] = [l._events[p], h] : l._events[p].push(h) : (l._events[p] = h, l._eventsCount++), l
    }

    function o(l, f) {
        --l._eventsCount === 0 ? l._events = new r : delete l._events[f]
    }

    function c() {
        this._events = new r, this._eventsCount = 0
    }
    c.prototype.eventNames = function() {
        var f = [],
            u, a;
        if (this._eventsCount === 0) return f;
        for (a in u = this._events) t.call(u, a) && f.push(n ? a.slice(1) : a);
        return Object.getOwnPropertySymbols ? f.concat(Object.getOwnPropertySymbols(u)) : f
    }, c.prototype.listeners = function(f) {
        var u = n ? n + f : f,
            a = this._events[u];
        if (!a) return [];
        if (a.fn) return [a.fn];
        for (var d = 0, h = a.length, p = new Array(h); d < h; d++) p[d] = a[d].fn;
        return p
    }, c.prototype.listenerCount = function(f) {
        var u = n ? n + f : f,
            a = this._events[u];
        return a ? a.fn ? 1 : a.length : 0
    }, c.prototype.emit = function(f, u, a, d, h, p) {
        var y = n ? n + f : f;
        if (!this._events[y]) return !1;
        var g = this._events[y],
            m = arguments.length,
            b, _;
        if (g.fn) {
            switch (g.once && this.removeListener(f, g.fn, void 0, !0), m) {
                case 1:
                    return g.fn.call(g.context), !0;
                case 2:
                    return g.fn.call(g.context, u), !0;
                case 3:
                    return g.fn.call(g.context, u, a), !0;
                case 4:
                    return g.fn.call(g.context, u, a, d), !0;
                case 5:
                    return g.fn.call(g.context, u, a, d, h), !0;
                case 6:
                    return g.fn.call(g.context, u, a, d, h, p), !0
            }
            for (_ = 1, b = new Array(m - 1); _ < m; _++) b[_ - 1] = arguments[_];
            g.fn.apply(g.context, b)
        } else {
            var v = g.length,
                w;
            for (_ = 0; _ < v; _++) switch (g[_].once && this.removeListener(f, g[_].fn, void 0, !0), m) {
                case 1:
                    g[_].fn.call(g[_].context);
                    break;
                case 2:
                    g[_].fn.call(g[_].context, u);
                    break;
                case 3:
                    g[_].fn.call(g[_].context, u, a);
                    break;
                case 4:
                    g[_].fn.call(g[_].context, u, a, d);
                    break;
                default:
                    if (!b)
                        for (w = 1, b = new Array(m - 1); w < m; w++) b[w - 1] = arguments[w];
                    g[_].fn.apply(g[_].context, b)
            }
        }
        return !0
    }, c.prototype.on = function(f, u, a) {
        return i(this, f, u, a, !1)
    }, c.prototype.once = function(f, u, a) {
        return i(this, f, u, a, !0)
    }, c.prototype.removeListener = function(f, u, a, d) {
        var h = n ? n + f : f;
        if (!this._events[h]) return this;
        if (!u) return o(this, h), this;
        var p = this._events[h];
        if (p.fn) p.fn === u && (!d || p.once) && (!a || p.context === a) && o(this, h);
        else {
            for (var y = 0, g = [], m = p.length; y < m; y++)(p[y].fn !== u || d && !p[y].once || a && p[y].context !== a) && g.push(p[y]);
            g.length ? this._events[h] = g.length === 1 ? g[0] : g : o(this, h)
        }
        return this
    }, c.prototype.removeAllListeners = function(f) {
        var u;
        return f ? (u = n ? n + f : f, this._events[u] && o(this, u)) : (this._events = new r, this._eventsCount = 0), this
    }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = n, c.EventEmitter = c, e.exports = c
})(_a);
var wa = _a.exports,
    hs = {
        exports: {}
    },
    El = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    Tl = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
    xl = function(t) {
        var n = t,
            r = t.indexOf("["),
            s = t.indexOf("]");
        r != -1 && s != -1 && (t = t.substring(0, r) + t.substring(r, s).replace(/:/g, ";") + t.substring(s, t.length));
        for (var i = El.exec(t || ""), o = {}, c = 14; c--;) o[Tl[c]] = i[c] || "";
        return r != -1 && s != -1 && (o.source = n, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o
    },
    ps = {
        exports: {}
    },
    Yr, Qi;

function Ol() {
    if (Qi) return Yr;
    Qi = 1;
    var e = 1e3,
        t = e * 60,
        n = t * 60,
        r = n * 24,
        s = r * 7,
        i = r * 365.25;
    Yr = function(u, a) {
        a = a || {};
        var d = typeof u;
        if (d === "string" && u.length > 0) return o(u);
        if (d === "number" && isFinite(u)) return a.long ? l(u) : c(u);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(u))
    };

    function o(u) {
        if (u = String(u), !(u.length > 100)) {
            var a = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(u);
            if (a) {
                var d = parseFloat(a[1]),
                    h = (a[2] || "ms").toLowerCase();
                switch (h) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return d * i;
                    case "weeks":
                    case "week":
                    case "w":
                        return d * s;
                    case "days":
                    case "day":
                    case "d":
                        return d * r;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return d * n;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return d * t;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return d * e;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return d;
                    default:
                        return
                }
            }
        }
    }

    function c(u) {
        var a = Math.abs(u);
        return a >= r ? Math.round(u / r) + "d" : a >= n ? Math.round(u / n) + "h" : a >= t ? Math.round(u / t) + "m" : a >= e ? Math.round(u / e) + "s" : u + "ms"
    }

    function l(u) {
        var a = Math.abs(u);
        return a >= r ? f(u, a, r, "day") : a >= n ? f(u, a, n, "hour") : a >= t ? f(u, a, t, "minute") : a >= e ? f(u, a, e, "second") : u + " ms"
    }

    function f(u, a, d, h) {
        var p = a >= d * 1.5;
        return Math.round(u / d) + " " + h + (p ? "s" : "")
    }
    return Yr
}

function Ml(e) {
    n.debug = n, n.default = n, n.coerce = f, n.disable = o, n.enable = i, n.enabled = c, n.humanize = Ol(), Object.keys(e).forEach(u => {
        n[u] = e[u]
    }), n.instances = [], n.names = [], n.skips = [], n.formatters = {};

    function t(u) {
        let a = 0;
        for (let d = 0; d < u.length; d++) a = (a << 5) - a + u.charCodeAt(d), a |= 0;
        return n.colors[Math.abs(a) % n.colors.length]
    }
    n.selectColor = t;

    function n(u) {
        let a;

        function d(...h) {
            if (!d.enabled) return;
            const p = d,
                y = Number(new Date),
                g = y - (a || y);
            p.diff = g, p.prev = a, p.curr = y, a = y, h[0] = n.coerce(h[0]), typeof h[0] != "string" && h.unshift("%O");
            let m = 0;
            h[0] = h[0].replace(/%([a-zA-Z%])/g, (_, v) => {
                if (_ === "%%") return _;
                m++;
                const w = n.formatters[v];
                if (typeof w == "function") {
                    const k = h[m];
                    _ = w.call(p, k), h.splice(m, 1), m--
                }
                return _
            }), n.formatArgs.call(p, h), (p.log || n.log).apply(p, h)
        }
        return d.namespace = u, d.enabled = n.enabled(u), d.useColors = n.useColors(), d.color = t(u), d.destroy = r, d.extend = s, typeof n.init == "function" && n.init(d), n.instances.push(d), d
    }

    function r() {
        const u = n.instances.indexOf(this);
        return u !== -1 ? (n.instances.splice(u, 1), !0) : !1
    }

    function s(u, a) {
        const d = n(this.namespace + (typeof a > "u" ? ":" : a) + u);
        return d.log = this.log, d
    }

    function i(u) {
        n.save(u), n.names = [], n.skips = [];
        let a;
        const d = (typeof u == "string" ? u : "").split(/[\s,]+/),
            h = d.length;
        for (a = 0; a < h; a++) d[a] && (u = d[a].replace(/\*/g, ".*?"), u[0] === "-" ? n.skips.push(new RegExp("^" + u.substr(1) + "$")) : n.names.push(new RegExp("^" + u + "$")));
        for (a = 0; a < n.instances.length; a++) {
            const p = n.instances[a];
            p.enabled = n.enabled(p.namespace)
        }
    }

    function o() {
        const u = [...n.names.map(l), ...n.skips.map(l).map(a => "-" + a)].join(",");
        return n.enable(""), u
    }

    function c(u) {
        if (u[u.length - 1] === "*") return !0;
        let a, d;
        for (a = 0, d = n.skips.length; a < d; a++)
            if (n.skips[a].test(u)) return !1;
        for (a = 0, d = n.names.length; a < d; a++)
            if (n.names[a].test(u)) return !0;
        return !1
    }

    function l(u) {
        return u.toString().substring(2, u.toString().length - 2).replace(/\.\*\?$/, "*")
    }

    function f(u) {
        return u instanceof Error ? u.stack || u.message : u
    }
    return n.enable(n.load()), n
}
var Dl = Ml;
(function(e, t) {
    var n = {};
    t.log = i, t.formatArgs = s, t.save = o, t.load = c, t.useColors = r, t.storage = l(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

    function r() {
        return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }

    function s(u) {
        if (u[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + u[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
        const a = "color: " + this.color;
        u.splice(1, 0, a, "color: inherit");
        let d = 0,
            h = 0;
        u[0].replace(/%[a-zA-Z%]/g, p => {
            p !== "%%" && (d++, p === "%c" && (h = d))
        }), u.splice(h, 0, a)
    }

    function i(...u) {
        return typeof console == "object" && console.log && console.log(...u)
    }

    function o(u) {
        try {
            u ? t.storage.setItem("debug", u) : t.storage.removeItem("debug")
        } catch {}
    }

    function c() {
        let u;
        try {
            u = t.storage.getItem("debug")
        } catch {}
        return !u && typeof process < "u" && "env" in process && (u = n.DEBUG), u
    }

    function l() {
        try {
            return localStorage
        } catch {}
    }
    e.exports = Dl(t);
    const {
        formatters: f
    } = e.exports;
    f.j = function(u) {
        try {
            return JSON.stringify(u)
        } catch (a) {
            return "[UnexpectedJSONParseError]: " + a.message
        }
    }
})(ps, ps.exports);
var Fr = ps.exports,
    $l = xl,
    eo = Fr("socket.io-client:url"),
    Rl = Bl;

function Bl(e, t) {
    var n = e;
    t = t || typeof location < "u" && location, e == null && (e = t.protocol + "//" + t.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = t.protocol + e : e = t.host + e), /^(https?|wss?):\/\//.test(e) || (eo("protocol-less url %s", e), typeof t < "u" ? e = t.protocol + "//" + e : e = "https://" + e), eo("parse %s", e), n = $l(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
    var r = n.host.indexOf(":") !== -1,
        s = r ? "[" + n.host + "]" : n.host;
    return n.id = n.protocol + "://" + s + ":" + n.port, n.href = n.protocol + "://" + s + (t && t.port === n.port ? "" : ":" + n.port), n
}
var Sr = {},
    gs = {
        exports: {}
    },
    ms = {
        exports: {}
    },
    dn = 1e3,
    hn = dn * 60,
    pn = hn * 60,
    gn = pn * 24,
    Il = gn * 365.25,
    Pl = function(e, t) {
        t = t || {};
        var n = typeof e;
        if (n === "string" && e.length > 0) return Ll(e);
        if (n === "number" && isNaN(e) === !1) return t.long ? zl(e) : Nl(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    };

function Ll(e) {
    if (e = String(e), !(e.length > 100)) {
        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
        if (t) {
            var n = parseFloat(t[1]),
                r = (t[2] || "ms").toLowerCase();
            switch (r) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return n * Il;
                case "days":
                case "day":
                case "d":
                    return n * gn;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return n * pn;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return n * hn;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return n * dn;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return n;
                default:
                    return
            }
        }
    }
}

function Nl(e) {
    return e >= gn ? Math.round(e / gn) + "d" : e >= pn ? Math.round(e / pn) + "h" : e >= hn ? Math.round(e / hn) + "m" : e >= dn ? Math.round(e / dn) + "s" : e + "ms"
}

function zl(e) {
    return In(e, gn, "day") || In(e, pn, "hour") || In(e, hn, "minute") || In(e, dn, "second") || e + " ms"
}

function In(e, t, n) {
    if (!(e < t)) return e < t * 1.5 ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
}(function(e, t) {
    t = e.exports = r.debug = r.default = r, t.coerce = l, t.disable = o, t.enable = i, t.enabled = c, t.humanize = Pl, t.instances = [], t.names = [], t.skips = [], t.formatters = {};

    function n(f) {
        var u = 0,
            a;
        for (a in f) u = (u << 5) - u + f.charCodeAt(a), u |= 0;
        return t.colors[Math.abs(u) % t.colors.length]
    }

    function r(f) {
        var u;

        function a() {
            if (a.enabled) {
                var d = a,
                    h = +new Date,
                    p = h - (u || h);
                d.diff = p, d.prev = u, d.curr = h, u = h;
                for (var y = new Array(arguments.length), g = 0; g < y.length; g++) y[g] = arguments[g];
                y[0] = t.coerce(y[0]), typeof y[0] != "string" && y.unshift("%O");
                var m = 0;
                y[0] = y[0].replace(/%([a-zA-Z%])/g, function(_, v) {
                    if (_ === "%%") return _;
                    m++;
                    var w = t.formatters[v];
                    if (typeof w == "function") {
                        var k = y[m];
                        _ = w.call(d, k), y.splice(m, 1), m--
                    }
                    return _
                }), t.formatArgs.call(d, y);
                var b = a.log || t.log || console.log.bind(console);
                b.apply(d, y)
            }
        }
        return a.namespace = f, a.enabled = t.enabled(f), a.useColors = t.useColors(), a.color = n(f), a.destroy = s, typeof t.init == "function" && t.init(a), t.instances.push(a), a
    }

    function s() {
        var f = t.instances.indexOf(this);
        return f !== -1 ? (t.instances.splice(f, 1), !0) : !1
    }

    function i(f) {
        t.save(f), t.names = [], t.skips = [];
        var u, a = (typeof f == "string" ? f : "").split(/[\s,]+/),
            d = a.length;
        for (u = 0; u < d; u++) a[u] && (f = a[u].replace(/\*/g, ".*?"), f[0] === "-" ? t.skips.push(new RegExp("^" + f.substr(1) + "$")) : t.names.push(new RegExp("^" + f + "$")));
        for (u = 0; u < t.instances.length; u++) {
            var h = t.instances[u];
            h.enabled = t.enabled(h.namespace)
        }
    }

    function o() {
        t.enable("")
    }

    function c(f) {
        if (f[f.length - 1] === "*") return !0;
        var u, a;
        for (u = 0, a = t.skips.length; u < a; u++)
            if (t.skips[u].test(f)) return !1;
        for (u = 0, a = t.names.length; u < a; u++)
            if (t.names[u].test(f)) return !0;
        return !1
    }

    function l(f) {
        return f instanceof Error ? f.stack || f.message : f
    }
})(ms, ms.exports);
var jl = ms.exports;
(function(e, t) {
    var n = {};
    t = e.exports = jl, t.log = i, t.formatArgs = s, t.save = o, t.load = c, t.useColors = r, t.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : l(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

    function r() {
        return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }
    t.formatters.j = function(f) {
        try {
            return JSON.stringify(f)
        } catch (u) {
            return "[UnexpectedJSONParseError]: " + u.message
        }
    };

    function s(f) {
        var u = this.useColors;
        if (f[0] = (u ? "%c" : "") + this.namespace + (u ? " %c" : " ") + f[0] + (u ? "%c " : " ") + "+" + t.humanize(this.diff), !!u) {
            var a = "color: " + this.color;
            f.splice(1, 0, a, "color: inherit");
            var d = 0,
                h = 0;
            f[0].replace(/%[a-zA-Z%]/g, function(p) {
                p !== "%%" && (d++, p === "%c" && (h = d))
            }), f.splice(h, 0, a)
        }
    }

    function i() {
        return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }

    function o(f) {
        try {
            f == null ? t.storage.removeItem("debug") : t.storage.debug = f
        } catch {}
    }

    function c() {
        var f;
        try {
            f = t.storage.debug
        } catch {}
        return !f && typeof process < "u" && "env" in process && (f = n.DEBUG), f
    }
    t.enable(c());

    function l() {
        try {
            return window.localStorage
        } catch {}
    }
})(gs, gs.exports);
var wn = gs.exports,
    Ca = {
        exports: {}
    };
(function(e) {
    e.exports = t;

    function t(r) {
        if (r) return n(r)
    }

    function n(r) {
        for (var s in t.prototype) r[s] = t.prototype[s];
        return r
    }
    t.prototype.on = t.prototype.addEventListener = function(r, s) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + r] = this._callbacks["$" + r] || []).push(s), this
    }, t.prototype.once = function(r, s) {
        function i() {
            this.off(r, i), s.apply(this, arguments)
        }
        return i.fn = s, this.on(r, i), this
    }, t.prototype.off = t.prototype.removeListener = t.prototype.removeAllListeners = t.prototype.removeEventListener = function(r, s) {
        if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
        var i = this._callbacks["$" + r];
        if (!i) return this;
        if (arguments.length == 1) return delete this._callbacks["$" + r], this;
        for (var o, c = 0; c < i.length; c++)
            if (o = i[c], o === s || o.fn === s) {
                i.splice(c, 1);
                break
            }
        return i.length === 0 && delete this._callbacks["$" + r], this
    }, t.prototype.emit = function(r) {
        this._callbacks = this._callbacks || {};
        for (var s = new Array(arguments.length - 1), i = this._callbacks["$" + r], o = 1; o < arguments.length; o++) s[o - 1] = arguments[o];
        if (i) {
            i = i.slice(0);
            for (var o = 0, c = i.length; o < c; ++o) i[o].apply(this, s)
        }
        return this
    }, t.prototype.listeners = function(r) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + r] || []
    }, t.prototype.hasListeners = function(r) {
        return !!this.listeners(r).length
    }
})(Ca);
var Er = Ca.exports,
    Tr = {},
    Ul = {}.toString,
    Qs = Array.isArray || function(e) {
        return Ul.call(e) == "[object Array]"
    },
    Aa = Gl,
    Vl = typeof Buffer == "function" && typeof Buffer.isBuffer == "function",
    ql = typeof ArrayBuffer == "function",
    Hl = function(e) {
        return typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer
    };

function Gl(e) {
    return Vl && Buffer.isBuffer(e) || ql && (e instanceof ArrayBuffer || Hl(e))
}
var ei = Qs,
    ka = Aa,
    Fa = Object.prototype.toString,
    Wl = typeof Blob == "function" || typeof Blob < "u" && Fa.call(Blob) === "[object BlobConstructor]",
    Xl = typeof File == "function" || typeof File < "u" && Fa.call(File) === "[object FileConstructor]";
Tr.deconstructPacket = function(e) {
    var t = [],
        n = e.data,
        r = e;
    return r.data = ys(n, t), r.attachments = t.length, {
        packet: r,
        buffers: t
    }
};

function ys(e, t) {
    if (!e) return e;
    if (ka(e)) {
        var n = {
            _placeholder: !0,
            num: t.length
        };
        return t.push(e), n
    } else if (ei(e)) {
        for (var r = new Array(e.length), s = 0; s < e.length; s++) r[s] = ys(e[s], t);
        return r
    } else if (typeof e == "object" && !(e instanceof Date)) {
        var r = {};
        for (var i in e) r[i] = ys(e[i], t);
        return r
    }
    return e
}
Tr.reconstructPacket = function(e, t) {
    return e.data = bs(e.data, t), e.attachments = void 0, e
};

function bs(e, t) {
    if (!e) return e;
    if (e && e._placeholder === !0) {
        var n = typeof e.num == "number" && e.num >= 0 && e.num < t.length;
        if (n) return t[e.num];
        throw new Error("illegal attachments")
    } else if (ei(e))
        for (var r = 0; r < e.length; r++) e[r] = bs(e[r], t);
    else if (typeof e == "object")
        for (var s in e) e[s] = bs(e[s], t);
    return e
}
Tr.removeBlobs = function(e, t) {
    function n(i, o, c) {
        if (!i) return i;
        if (Wl && i instanceof Blob || Xl && i instanceof File) {
            r++;
            var l = new FileReader;
            l.onload = function() {
                c ? c[o] = this.result : s = this.result, --r || t(s)
            }, l.readAsArrayBuffer(i)
        } else if (ei(i))
            for (var f = 0; f < i.length; f++) n(i[f], f, i);
        else if (typeof i == "object" && !ka(i))
            for (var u in i) n(i[u], u, i)
    }
    var r = 0,
        s = e;
    n(s), r || t(s)
};
(function(e) {
    var t = wn("socket.io-parser"),
        n = Er,
        r = Tr,
        s = Qs,
        i = Aa;
    e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = o, e.Decoder = a;

    function o() {}
    var c = e.ERROR + '"encode error"';
    o.prototype.encode = function(g, m) {
        if (t("encoding packet %j", g), e.BINARY_EVENT === g.type || e.BINARY_ACK === g.type) u(g, m);
        else {
            var b = l(g);
            m([b])
        }
    };

    function l(g) {
        var m = "" + g.type;
        if ((e.BINARY_EVENT === g.type || e.BINARY_ACK === g.type) && (m += g.attachments + "-"), g.nsp && g.nsp !== "/" && (m += g.nsp + ","), g.id != null && (m += g.id), g.data != null) {
            var b = f(g.data);
            if (b !== !1) m += b;
            else return c
        }
        return t("encoded %j as %s", g, m), m
    }

    function f(g) {
        try {
            return JSON.stringify(g)
        } catch {
            return !1
        }
    }

    function u(g, m) {
        function b(_) {
            var v = r.deconstructPacket(_),
                w = l(v.packet),
                k = v.buffers;
            k.unshift(w), m(k)
        }
        r.removeBlobs(g, b)
    }

    function a() {
        this.reconstructor = null
    }
    n(a.prototype), a.prototype.add = function(g) {
        var m;
        if (typeof g == "string") {
            if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
            m = d(g), e.BINARY_EVENT === m.type || e.BINARY_ACK === m.type ? (this.reconstructor = new p(m), this.reconstructor.reconPack.attachments === 0 && this.emit("decoded", m)) : this.emit("decoded", m)
        } else if (i(g) || g.base64)
            if (this.reconstructor) m = this.reconstructor.takeBinaryData(g), m && (this.reconstructor = null, this.emit("decoded", m));
            else throw new Error("got binary data when not reconstructing a packet");
        else throw new Error("Unknown type: " + g)
    };

    function d(g) {
        var m = 0,
            b = {
                type: Number(g.charAt(0))
            };
        if (e.types[b.type] == null) return y("unknown packet type " + b.type);
        if (e.BINARY_EVENT === b.type || e.BINARY_ACK === b.type) {
            for (var _ = m + 1; g.charAt(++m) !== "-" && m != g.length;);
            var v = g.substring(_, m);
            if (v != Number(v) || g.charAt(m) !== "-") throw new Error("Illegal attachments");
            b.attachments = Number(v)
        }
        if (g.charAt(m + 1) === "/") {
            for (var _ = m + 1; ++m;) {
                var w = g.charAt(m);
                if (w === "," || m === g.length) break
            }
            b.nsp = g.substring(_, m)
        } else b.nsp = "/";
        var k = g.charAt(m + 1);
        if (k !== "" && Number(k) == k) {
            for (var _ = m + 1; ++m;) {
                var w = g.charAt(m);
                if (w == null || Number(w) != w) {
                    --m;
                    break
                }
                if (m === g.length) break
            }
            b.id = Number(g.substring(_, m + 1))
        }
        if (g.charAt(++m)) {
            var C = h(g.substr(m)),
                E = C !== !1 && (b.type === e.ERROR || s(C));
            if (E) b.data = C;
            else return y("invalid payload")
        }
        return t("decoded %s as %j", g, b), b
    }

    function h(g) {
        try {
            return JSON.parse(g)
        } catch {
            return !1
        }
    }
    a.prototype.destroy = function() {
        this.reconstructor && this.reconstructor.finishedReconstruction()
    };

    function p(g) {
        this.reconPack = g, this.buffers = []
    }
    p.prototype.takeBinaryData = function(g) {
        if (this.buffers.push(g), this.buffers.length === this.reconPack.attachments) {
            var m = r.reconstructPacket(this.reconPack, this.buffers);
            return this.finishedReconstruction(), m
        }
        return null
    }, p.prototype.finishedReconstruction = function() {
        this.reconPack = null, this.buffers = []
    };

    function y(g) {
        return {
            type: e.ERROR,
            data: "parser error: " + g
        }
    }
})(Sr);
var ti = {
        exports: {}
    },
    xr = {},
    vs = {
        exports: {}
    };
try {
    vs.exports = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
} catch {
    vs.exports = !1
}
var Kl = vs.exports,
    ni = function() {
        return typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
    }(),
    Zl = Kl,
    Jl = ni,
    ri = function(e) {
        var t = e.xdomain,
            n = e.xscheme,
            r = e.enablesXDR;
        try {
            if (typeof XMLHttpRequest < "u" && (!t || Zl)) return new XMLHttpRequest
        } catch {}
        try {
            if (typeof XDomainRequest < "u" && !n && r) return new XDomainRequest
        } catch {}
        if (!t) try {
            return new Jl[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
    },
    si = {
        exports: {}
    },
    Tt = {},
    Yl = Object.keys || function(t) {
        var n = [],
            r = Object.prototype.hasOwnProperty;
        for (var s in t) r.call(t, s) && n.push(s);
        return n
    },
    Ql = Qs,
    Sa = Object.prototype.toString,
    ef = typeof Blob == "function" || typeof Blob < "u" && Sa.call(Blob) === "[object BlobConstructor]",
    tf = typeof File == "function" || typeof File < "u" && Sa.call(File) === "[object FileConstructor]",
    Ea = Hn;

function Hn(e) {
    if (!e || typeof e != "object") return !1;
    if (Ql(e)) {
        for (var t = 0, n = e.length; t < n; t++)
            if (Hn(e[t])) return !0;
        return !1
    }
    if (typeof Buffer == "function" && Buffer.isBuffer && Buffer.isBuffer(e) || typeof ArrayBuffer == "function" && e instanceof ArrayBuffer || ef && e instanceof Blob || tf && e instanceof File) return !0;
    if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1) return Hn(e.toJSON(), !0);
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r) && Hn(e[r])) return !0;
    return !1
}
var nf = function(e, t, n) {
        var r = e.byteLength;
        if (t = t || 0, n = n || r, e.slice) return e.slice(t, n);
        if (t < 0 && (t += r), n < 0 && (n += r), n > r && (n = r), t >= r || t >= n || r === 0) return new ArrayBuffer(0);
        for (var s = new Uint8Array(e), i = new Uint8Array(n - t), o = t, c = 0; o < n; o++, c++) i[c] = s[o];
        return i.buffer
    },
    rf = sf;

function sf(e, t, n) {
    var r = !1;
    return n = n || of , s.count = e, e === 0 ? t() : s;

    function s(i, o) {
        if (s.count <= 0) throw new Error("after called too many times");
        --s.count, i ? (r = !0, t(i), t = n) : s.count === 0 && !r && t(null, o)
    }
}

function of () {} /*! https://mths.be/utf8js v2.1.2 by @mathias */
var st = String.fromCharCode;

function Ta(e) {
    for (var t = [], n = 0, r = e.length, s, i; n < r;) s = e.charCodeAt(n++), s >= 55296 && s <= 56319 && n < r ? (i = e.charCodeAt(n++), (i & 64512) == 56320 ? t.push(((s & 1023) << 10) + (i & 1023) + 65536) : (t.push(s), n--)) : t.push(s);
    return t
}

function af(e) {
    for (var t = e.length, n = -1, r, s = ""; ++n < t;) r = e[n], r > 65535 && (r -= 65536, s += st(r >>> 10 & 1023 | 55296), r = 56320 | r & 1023), s += st(r);
    return s
}

function xa(e, t) {
    if (e >= 55296 && e <= 57343) {
        if (t) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value");
        return !1
    }
    return !0
}

function Qr(e, t) {
    return st(e >> t & 63 | 128)
}

function cf(e, t) {
    if (!(e & 4294967168)) return st(e);
    var n = "";
    return e & 4294965248 ? e & 4294901760 ? e & 4292870144 || (n = st(e >> 18 & 7 | 240), n += Qr(e, 12), n += Qr(e, 6)) : (xa(e, t) || (e = 65533), n = st(e >> 12 & 15 | 224), n += Qr(e, 6)) : n = st(e >> 6 & 31 | 192), n += st(e & 63 | 128), n
}

function uf(e, t) {
    t = t || {};
    for (var n = t.strict !== !1, r = Ta(e), s = r.length, i = -1, o, c = ""; ++i < s;) o = r[i], c += cf(o, n);
    return c
}

function It() {
    if (ot >= ar) throw Error("Invalid byte index");
    var e = or[ot] & 255;
    if (ot++, (e & 192) == 128) return e & 63;
    throw Error("Invalid continuation byte")
}

function lf(e) {
    var t, n, r, s, i;
    if (ot > ar) throw Error("Invalid byte index");
    if (ot == ar) return !1;
    if (t = or[ot] & 255, ot++, !(t & 128)) return t;
    if ((t & 224) == 192) {
        if (n = It(), i = (t & 31) << 6 | n, i >= 128) return i;
        throw Error("Invalid continuation byte")
    }
    if ((t & 240) == 224) {
        if (n = It(), r = It(), i = (t & 15) << 12 | n << 6 | r, i >= 2048) return xa(i, e) ? i : 65533;
        throw Error("Invalid continuation byte")
    }
    if ((t & 248) == 240 && (n = It(), r = It(), s = It(), i = (t & 7) << 18 | n << 12 | r << 6 | s, i >= 65536 && i <= 1114111)) return i;
    throw Error("Invalid UTF-8 detected")
}
var or, ar, ot;

function ff(e, t) {
    t = t || {};
    var n = t.strict !== !1;
    or = Ta(e), ar = or.length, ot = 0;
    for (var r = [], s;
        (s = lf(n)) !== !1;) r.push(s);
    return af(r)
}
var df = {
        version: "2.1.2",
        encode: uf,
        decode: ff
    },
    Pn = {},
    to;

function hf() {
    return to || (to = 1, function(e) {
        Pn.encode = function(t) {
            var n = new Uint8Array(t),
                r, s = n.length,
                i = "";
            for (r = 0; r < s; r += 3) i += e[n[r] >> 2], i += e[(n[r] & 3) << 4 | n[r + 1] >> 4], i += e[(n[r + 1] & 15) << 2 | n[r + 2] >> 6], i += e[n[r + 2] & 63];
            return s % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : s % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="), i
        }, Pn.decode = function(t) {
            var n = t.length * .75,
                r = t.length,
                s, i = 0,
                o, c, l, f;
            t[t.length - 1] === "=" && (n--, t[t.length - 2] === "=" && n--);
            var u = new ArrayBuffer(n),
                a = new Uint8Array(u);
            for (s = 0; s < r; s += 4) o = e.indexOf(t[s]), c = e.indexOf(t[s + 1]), l = e.indexOf(t[s + 2]), f = e.indexOf(t[s + 3]), a[i++] = o << 2 | c >> 4, a[i++] = (c & 15) << 4 | l >> 2, a[i++] = (l & 3) << 6 | f & 63;
            return u
        }
    }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")), Pn
}
var es, no;

function pf() {
    if (no) return es;
    no = 1;
    var e = typeof e < "u" ? e : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : !1,
        t = function() {
            try {
                var c = new Blob(["hi"]);
                return c.size === 2
            } catch {
                return !1
            }
        }(),
        n = t && function() {
            try {
                var c = new Blob([new Uint8Array([1, 2])]);
                return c.size === 2
            } catch {
                return !1
            }
        }(),
        r = e && e.prototype.append && e.prototype.getBlob;

    function s(c) {
        return c.map(function(l) {
            if (l.buffer instanceof ArrayBuffer) {
                var f = l.buffer;
                if (l.byteLength !== f.byteLength) {
                    var u = new Uint8Array(l.byteLength);
                    u.set(new Uint8Array(f, l.byteOffset, l.byteLength)), f = u.buffer
                }
                return f
            }
            return l
        })
    }

    function i(c, l) {
        l = l || {};
        var f = new e;
        return s(c).forEach(function(u) {
            f.append(u)
        }), l.type ? f.getBlob(l.type) : f.getBlob()
    }

    function o(c, l) {
        return new Blob(s(c), l || {})
    }
    return typeof Blob < "u" && (i.prototype = Blob.prototype, o.prototype = Blob.prototype), es = function() {
        return t ? n ? Blob : o : r ? i : void 0
    }(), es
}(function(e) {
    var t = Yl,
        n = Ea,
        r = nf,
        s = rf,
        i = df,
        o;
    typeof ArrayBuffer < "u" && (o = hf());
    var c = typeof navigator < "u" && /Android/i.test(navigator.userAgent),
        l = typeof navigator < "u" && /PhantomJS/i.test(navigator.userAgent),
        f = c || l;
    e.protocol = 3;
    var u = e.packets = {
            open: 0,
            close: 1,
            ping: 2,
            pong: 3,
            message: 4,
            upgrade: 5,
            noop: 6
        },
        a = t(u),
        d = {
            type: "error",
            data: "parser error"
        },
        h = pf();
    e.encodePacket = function(v, w, k, C) {
        typeof w == "function" && (C = w, w = !1), typeof k == "function" && (C = k, k = null);
        var E = v.data === void 0 ? void 0 : v.data.buffer || v.data;
        if (typeof ArrayBuffer < "u" && E instanceof ArrayBuffer) return y(v, w, C);
        if (typeof h < "u" && E instanceof h) return m(v, w, C);
        if (E && E.base64) return p(v, C);
        var B = u[v.type];
        return v.data !== void 0 && (B += k ? i.encode(String(v.data), {
            strict: !1
        }) : String(v.data)), C("" + B)
    };

    function p(v, w) {
        var k = "b" + e.packets[v.type] + v.data.data;
        return w(k)
    }

    function y(v, w, k) {
        if (!w) return e.encodeBase64Packet(v, k);
        var C = v.data,
            E = new Uint8Array(C),
            B = new Uint8Array(1 + C.byteLength);
        B[0] = u[v.type];
        for (var z = 0; z < E.length; z++) B[z + 1] = E[z];
        return k(B.buffer)
    }

    function g(v, w, k) {
        if (!w) return e.encodeBase64Packet(v, k);
        var C = new FileReader;
        return C.onload = function() {
            e.encodePacket({
                type: v.type,
                data: C.result
            }, w, !0, k)
        }, C.readAsArrayBuffer(v.data)
    }

    function m(v, w, k) {
        if (!w) return e.encodeBase64Packet(v, k);
        if (f) return g(v, w, k);
        var C = new Uint8Array(1);
        C[0] = u[v.type];
        var E = new h([C.buffer, v.data]);
        return k(E)
    }
    e.encodeBase64Packet = function(v, w) {
        var k = "b" + e.packets[v.type];
        if (typeof h < "u" && v.data instanceof h) {
            var C = new FileReader;
            return C.onload = function() {
                var q = C.result.split(",")[1];
                w(k + q)
            }, C.readAsDataURL(v.data)
        }
        var E;
        try {
            E = String.fromCharCode.apply(null, new Uint8Array(v.data))
        } catch {
            for (var B = new Uint8Array(v.data), z = new Array(B.length), U = 0; U < B.length; U++) z[U] = B[U];
            E = String.fromCharCode.apply(null, z)
        }
        return k += btoa(E), w(k)
    }, e.decodePacket = function(v, w, k) {
        if (v === void 0) return d;
        if (typeof v == "string") {
            if (v.charAt(0) === "b") return e.decodeBase64Packet(v.substr(1), w);
            if (k && (v = b(v), v === !1)) return d;
            var E = v.charAt(0);
            return Number(E) != E || !a[E] ? d : v.length > 1 ? {
                type: a[E],
                data: v.substring(1)
            } : {
                type: a[E]
            }
        }
        var C = new Uint8Array(v),
            E = C[0],
            B = r(v, 1);
        return h && w === "blob" && (B = new h([B])), {
            type: a[E],
            data: B
        }
    };

    function b(v) {
        try {
            v = i.decode(v, {
                strict: !1
            })
        } catch {
            return !1
        }
        return v
    }
    e.decodeBase64Packet = function(v, w) {
        var k = a[v.charAt(0)];
        if (!o) return {
            type: k,
            data: {
                base64: !0,
                data: v.substr(1)
            }
        };
        var C = o.decode(v.substr(1));
        return w === "blob" && h && (C = new h([C])), {
            type: k,
            data: C
        }
    }, e.encodePayload = function(v, w, k) {
        typeof w == "function" && (k = w, w = null);
        var C = n(v);
        if (w && C) return h && !f ? e.encodePayloadAsBlob(v, k) : e.encodePayloadAsArrayBuffer(v, k);
        if (!v.length) return k("0:");

        function E(z) {
            return z.length + ":" + z
        }

        function B(z, U) {
            e.encodePacket(z, C ? w : !1, !1, function(q) {
                U(null, E(q))
            })
        }
        _(v, B, function(z, U) {
            return k(U.join(""))
        })
    };

    function _(v, w, k) {
        for (var C = new Array(v.length), E = s(v.length, k), B = function(U, q, K) {
                w(q, function(Q, ae) {
                    C[U] = ae, K(Q, C)
                })
            }, z = 0; z < v.length; z++) B(z, v[z], E)
    }
    e.decodePayload = function(v, w, k) {
        if (typeof v != "string") return e.decodePayloadAsBinary(v, w, k);
        typeof w == "function" && (k = w, w = null);
        var C;
        if (v === "") return k(d, 0, 1);
        for (var E = "", B, z, U = 0, q = v.length; U < q; U++) {
            var K = v.charAt(U);
            if (K !== ":") {
                E += K;
                continue
            }
            if (E === "" || E != (B = Number(E)) || (z = v.substr(U + 1, B), E != z.length)) return k(d, 0, 1);
            if (z.length) {
                if (C = e.decodePacket(z, w, !1), d.type === C.type && d.data === C.data) return k(d, 0, 1);
                var Q = k(C, U + B, q);
                if (Q === !1) return
            }
            U += B, E = ""
        }
        if (E !== "") return k(d, 0, 1)
    }, e.encodePayloadAsArrayBuffer = function(v, w) {
        if (!v.length) return w(new ArrayBuffer(0));

        function k(C, E) {
            e.encodePacket(C, !0, !0, function(B) {
                return E(null, B)
            })
        }
        _(v, k, function(C, E) {
            var B = E.reduce(function(q, K) {
                    var Q;
                    return typeof K == "string" ? Q = K.length : Q = K.byteLength, q + Q.toString().length + Q + 2
                }, 0),
                z = new Uint8Array(B),
                U = 0;
            return E.forEach(function(q) {
                var K = typeof q == "string",
                    Q = q;
                if (K) {
                    for (var He = new Uint8Array(q.length), ae = 0; ae < q.length; ae++) He[ae] = q.charCodeAt(ae);
                    Q = He.buffer
                }
                K ? z[U++] = 0 : z[U++] = 1;
                for (var Fe = Q.byteLength.toString(), ae = 0; ae < Fe.length; ae++) z[U++] = parseInt(Fe[ae]);
                z[U++] = 255;
                for (var He = new Uint8Array(Q), ae = 0; ae < He.length; ae++) z[U++] = He[ae]
            }), w(z.buffer)
        })
    }, e.encodePayloadAsBlob = function(v, w) {
        function k(C, E) {
            e.encodePacket(C, !0, !0, function(B) {
                var z = new Uint8Array(1);
                if (z[0] = 1, typeof B == "string") {
                    for (var U = new Uint8Array(B.length), q = 0; q < B.length; q++) U[q] = B.charCodeAt(q);
                    B = U.buffer, z[0] = 0
                }
                for (var K = B instanceof ArrayBuffer ? B.byteLength : B.size, Q = K.toString(), ae = new Uint8Array(Q.length + 1), q = 0; q < Q.length; q++) ae[q] = parseInt(Q[q]);
                if (ae[Q.length] = 255, h) {
                    var Fe = new h([z.buffer, ae.buffer, B]);
                    E(null, Fe)
                }
            })
        }
        _(v, k, function(C, E) {
            return w(new h(E))
        })
    }, e.decodePayloadAsBinary = function(v, w, k) {
        typeof w == "function" && (k = w, w = null);
        for (var C = v, E = []; C.byteLength > 0;) {
            for (var B = new Uint8Array(C), z = B[0] === 0, U = "", q = 1; B[q] !== 255; q++) {
                if (U.length > 310) return k(d, 0, 1);
                U += B[q]
            }
            C = r(C, 2 + U.length), U = parseInt(U);
            var K = r(C, 0, U);
            if (z) try {
                K = String.fromCharCode.apply(null, new Uint8Array(K))
            } catch {
                var Q = new Uint8Array(K);
                K = "";
                for (var q = 0; q < Q.length; q++) K += String.fromCharCode(Q[q])
            }
            E.push(K), C = r(C, U)
        }
        var ae = E.length;
        E.forEach(function(Fe, He) {
            k(e.decodePacket(Fe, w, !0), He, ae)
        })
    }
})(Tt);
var ts, ro;

function ii() {
    if (ro) return ts;
    ro = 1;
    var e = Tt,
        t = Er;
    ts = n;

    function n(r) {
        this.path = r.path, this.hostname = r.hostname, this.port = r.port, this.secure = r.secure, this.query = r.query, this.timestampParam = r.timestampParam, this.timestampRequests = r.timestampRequests, this.readyState = "", this.agent = r.agent || !1, this.socket = r.socket, this.enablesXDR = r.enablesXDR, this.withCredentials = r.withCredentials, this.pfx = r.pfx, this.key = r.key, this.passphrase = r.passphrase, this.cert = r.cert, this.ca = r.ca, this.ciphers = r.ciphers, this.rejectUnauthorized = r.rejectUnauthorized, this.forceNode = r.forceNode, this.isReactNative = r.isReactNative, this.extraHeaders = r.extraHeaders, this.localAddress = r.localAddress
    }
    return t(n.prototype), n.prototype.onError = function(r, s) {
        var i = new Error(r);
        return i.type = "TransportError", i.description = s, this.emit("error", i), this
    }, n.prototype.open = function() {
        return (this.readyState === "closed" || this.readyState === "") && (this.readyState = "opening", this.doOpen()), this
    }, n.prototype.close = function() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
    }, n.prototype.send = function(r) {
        if (this.readyState === "open") this.write(r);
        else throw new Error("Transport not open")
    }, n.prototype.onOpen = function() {
        this.readyState = "open", this.writable = !0, this.emit("open")
    }, n.prototype.onData = function(r) {
        var s = e.decodePacket(r, this.socket.binaryType);
        this.onPacket(s)
    }, n.prototype.onPacket = function(r) {
        this.emit("packet", r)
    }, n.prototype.onClose = function() {
        this.readyState = "closed", this.emit("close")
    }, ts
}
var Cn = {};
Cn.encode = function(e) {
    var t = "";
    for (var n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t
};
Cn.decode = function(e) {
    for (var t = {}, n = e.split("&"), r = 0, s = n.length; r < s; r++) {
        var i = n[r].split("=");
        t[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
    }
    return t
};
var Or = function(e, t) {
        var n = function() {};
        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
    },
    Oa = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
    cr = 64,
    Ma = {},
    so = 0,
    at = 0,
    io;

function _s(e) {
    var t = "";
    do t = Oa[e % cr] + t, e = Math.floor(e / cr); while (e > 0);
    return t
}

function gf(e) {
    var t = 0;
    for (at = 0; at < e.length; at++) t = t * cr + Ma[e.charAt(at)];
    return t
}

function oi() {
    var e = _s(+new Date);
    return e !== io ? (so = 0, io = e) : e + "." + _s(so++)
}
for (; at < cr; at++) Ma[Oa[at]] = at;
oi.encode = _s;
oi.decode = gf;
var Da = oi,
    $a = ii(),
    mf = Cn,
    Ra = Tt,
    yf = Or,
    bf = Da,
    Le = wn("engine.io-client:polling"),
    Ba = Je,
    vf = function() {
        var e = ri,
            t = new e({
                xdomain: !1
            });
        return t.responseType != null
    }();

function Je(e) {
    var t = e && e.forceBase64;
    (!vf || t) && (this.supportsBinary = !1), $a.call(this, e)
}
yf(Je, $a);
Je.prototype.name = "polling";
Je.prototype.doOpen = function() {
    this.poll()
};
Je.prototype.pause = function(e) {
    var t = this;
    this.readyState = "pausing";

    function n() {
        Le("paused"), t.readyState = "paused", e()
    }
    if (this.polling || !this.writable) {
        var r = 0;
        this.polling && (Le("we are currently polling - waiting to pause"), r++, this.once("pollComplete", function() {
            Le("pre-pause polling complete"), --r || n()
        })), this.writable || (Le("we are currently writing - waiting to pause"), r++, this.once("drain", function() {
            Le("pre-pause writing complete"), --r || n()
        }))
    } else n()
};
Je.prototype.poll = function() {
    Le("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
};
Je.prototype.onData = function(e) {
    var t = this;
    Le("polling got data %s", e);
    var n = function(r, s, i) {
        if (t.readyState === "opening" && t.onOpen(), r.type === "close") return t.onClose(), !1;
        t.onPacket(r)
    };
    Ra.decodePayload(e, this.socket.binaryType, n), this.readyState !== "closed" && (this.polling = !1, this.emit("pollComplete"), this.readyState === "open" ? this.poll() : Le('ignoring poll - transport state "%s"', this.readyState))
};
Je.prototype.doClose = function() {
    var e = this;

    function t() {
        Le("writing close packet"), e.write([{
            type: "close"
        }])
    }
    this.readyState === "open" ? (Le("transport open - closing"), t()) : (Le("transport not open - deferring close"), this.once("open", t))
};
Je.prototype.write = function(e) {
    var t = this;
    this.writable = !1;
    var n = function() {
        t.writable = !0, t.emit("drain")
    };
    Ra.encodePayload(e, this.supportsBinary, function(r) {
        t.doWrite(r, n)
    })
};
Je.prototype.uri = function() {
    var e = this.query || {},
        t = this.secure ? "https" : "http",
        n = "";
    this.timestampRequests !== !1 && (e[this.timestampParam] = bf()), !this.supportsBinary && !e.sid && (e.b64 = 1), e = mf.encode(e), this.port && (t === "https" && Number(this.port) !== 443 || t === "http" && Number(this.port) !== 80) && (n = ":" + this.port), e.length && (e = "?" + e);
    var r = this.hostname.indexOf(":") !== -1;
    return t + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
};
var _f = ri,
    Ia = Ba,
    wf = Er,
    Cf = Or,
    ws = wn("engine.io-client:polling-xhr"),
    Af = ni;
si.exports = tn;
si.exports.Request = pe;

function oo() {}

function tn(e) {
    if (Ia.call(this, e), this.requestTimeout = e.requestTimeout, this.extraHeaders = e.extraHeaders, typeof location < "u") {
        var t = location.protocol === "https:",
            n = location.port;
        n || (n = t ? 443 : 80), this.xd = typeof location < "u" && e.hostname !== location.hostname || n !== e.port, this.xs = e.secure !== t
    }
}
Cf(tn, Ia);
tn.prototype.supportsBinary = !0;
tn.prototype.request = function(e) {
    return e = e || {}, e.uri = this.uri(), e.xd = this.xd, e.xs = this.xs, e.agent = this.agent || !1, e.supportsBinary = this.supportsBinary, e.enablesXDR = this.enablesXDR, e.withCredentials = this.withCredentials, e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, e.requestTimeout = this.requestTimeout, e.extraHeaders = this.extraHeaders, new pe(e)
};
tn.prototype.doWrite = function(e, t) {
    var n = typeof e != "string" && e !== void 0,
        r = this.request({
            method: "POST",
            data: e,
            isBinary: n
        }),
        s = this;
    r.on("success", t), r.on("error", function(i) {
        s.onError("xhr post error", i)
    }), this.sendXhr = r
};
tn.prototype.doPoll = function() {
    ws("xhr poll");
    var e = this.request(),
        t = this;
    e.on("data", function(n) {
        t.onData(n)
    }), e.on("error", function(n) {
        t.onError("xhr poll error", n)
    }), this.pollXhr = e
};

function pe(e) {
    this.method = e.method || "GET", this.uri = e.uri, this.xd = !!e.xd, this.xs = !!e.xs, this.async = e.async !== !1, this.data = e.data !== void 0 ? e.data : null, this.agent = e.agent, this.isBinary = e.isBinary, this.supportsBinary = e.supportsBinary, this.enablesXDR = e.enablesXDR, this.withCredentials = e.withCredentials, this.requestTimeout = e.requestTimeout, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders, this.create()
}
wf(pe.prototype);
pe.prototype.create = function() {
    var e = {
        agent: this.agent,
        xdomain: this.xd,
        xscheme: this.xs,
        enablesXDR: this.enablesXDR
    };
    e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized;
    var t = this.xhr = new _f(e),
        n = this;
    try {
        ws("xhr open %s: %s", this.method, this.uri), t.open(this.method, this.uri, this.async);
        try {
            if (this.extraHeaders) {
                t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0);
                for (var r in this.extraHeaders) this.extraHeaders.hasOwnProperty(r) && t.setRequestHeader(r, this.extraHeaders[r])
            }
        } catch {}
        if (this.method === "POST") try {
            this.isBinary ? t.setRequestHeader("Content-type", "application/octet-stream") : t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
        } catch {}
        try {
            t.setRequestHeader("Accept", "*/*")
        } catch {}
        "withCredentials" in t && (t.withCredentials = this.withCredentials), this.requestTimeout && (t.timeout = this.requestTimeout), this.hasXDR() ? (t.onload = function() {
            n.onLoad()
        }, t.onerror = function() {
            n.onError(t.responseText)
        }) : t.onreadystatechange = function() {
            if (t.readyState === 2) try {
                var s = t.getResponseHeader("Content-Type");
                (n.supportsBinary && s === "application/octet-stream" || s === "application/octet-stream; charset=UTF-8") && (t.responseType = "arraybuffer")
            } catch {}
            t.readyState === 4 && (t.status === 200 || t.status === 1223 ? n.onLoad() : setTimeout(function() {
                n.onError(typeof t.status == "number" ? t.status : 0)
            }, 0))
        }, ws("xhr data %s", this.data), t.send(this.data)
    } catch (s) {
        setTimeout(function() {
            n.onError(s)
        }, 0);
        return
    }
    typeof document < "u" && (this.index = pe.requestsCount++, pe.requests[this.index] = this)
};
pe.prototype.onSuccess = function() {
    this.emit("success"), this.cleanup()
};
pe.prototype.onData = function(e) {
    this.emit("data", e), this.onSuccess()
};
pe.prototype.onError = function(e) {
    this.emit("error", e), this.cleanup(!0)
};
pe.prototype.cleanup = function(e) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
        if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = oo : this.xhr.onreadystatechange = oo, e) try {
            this.xhr.abort()
        } catch {}
        typeof document < "u" && delete pe.requests[this.index], this.xhr = null
    }
};
pe.prototype.onLoad = function() {
    var e;
    try {
        var t;
        try {
            t = this.xhr.getResponseHeader("Content-Type")
        } catch {}
        t === "application/octet-stream" || t === "application/octet-stream; charset=UTF-8" ? e = this.xhr.response || this.xhr.responseText : e = this.xhr.responseText
    } catch (n) {
        this.onError(n)
    }
    e != null && this.onData(e)
};
pe.prototype.hasXDR = function() {
    return typeof XDomainRequest < "u" && !this.xs && this.enablesXDR
};
pe.prototype.abort = function() {
    this.cleanup()
};
pe.requestsCount = 0;
pe.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", ao);
    else if (typeof addEventListener == "function") {
        var kf = "onpagehide" in Af ? "pagehide" : "unload";
        addEventListener(kf, ao, !1)
    }
}

function ao() {
    for (var e in pe.requests) pe.requests.hasOwnProperty(e) && pe.requests[e].abort()
}
var Ff = si.exports,
    ai = Ba,
    Sf = Or,
    co = ni,
    Ef = nn,
    Tf = /\n/g,
    xf = /\\n/g,
    Ln;

function Of() {}

function nn(e) {
    ai.call(this, e), this.query = this.query || {}, Ln || (Ln = co.___eio = co.___eio || []), this.index = Ln.length;
    var t = this;
    Ln.push(function(n) {
        t.onData(n)
    }), this.query.j = this.index, typeof addEventListener == "function" && addEventListener("beforeunload", function() {
        t.script && (t.script.onerror = Of)
    }, !1)
}
Sf(nn, ai);
nn.prototype.supportsBinary = !1;
nn.prototype.doClose = function() {
    this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), ai.prototype.doClose.call(this)
};
nn.prototype.doPoll = function() {
    var e = this,
        t = document.createElement("script");
    this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function(s) {
        e.onError("jsonp poll error", s)
    };
    var n = document.getElementsByTagName("script")[0];
    n ? n.parentNode.insertBefore(t, n) : (document.head || document.body).appendChild(t), this.script = t;
    var r = typeof navigator < "u" && /gecko/i.test(navigator.userAgent);
    r && setTimeout(function() {
        var s = document.createElement("iframe");
        document.body.appendChild(s), document.body.removeChild(s)
    }, 100)
};
nn.prototype.doWrite = function(e, t) {
    var n = this;
    if (!this.form) {
        var r = document.createElement("form"),
            s = document.createElement("textarea"),
            i = this.iframeId = "eio_iframe_" + this.index,
            o;
        r.className = "socketio", r.style.position = "absolute", r.style.top = "-1000px", r.style.left = "-1000px", r.target = i, r.method = "POST", r.setAttribute("accept-charset", "utf-8"), s.name = "d", r.appendChild(s), document.body.appendChild(r), this.form = r, this.area = s
    }
    this.form.action = this.uri();

    function c() {
        l(), t()
    }

    function l() {
        if (n.iframe) try {
            n.form.removeChild(n.iframe)
        } catch (u) {
            n.onError("jsonp polling iframe removal error", u)
        }
        try {
            var f = '<iframe src="javascript:0" name="' + n.iframeId + '">';
            o = document.createElement(f)
        } catch {
            o = document.createElement("iframe"), o.name = n.iframeId, o.src = "javascript:0"
        }
        o.id = n.iframeId, n.form.appendChild(o), n.iframe = o
    }
    l(), e = e.replace(xf, `\\
`), this.area.value = e.replace(Tf, "\\n");
    try {
        this.form.submit()
    } catch {}
    this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
        n.iframe.readyState === "complete" && c()
    } : this.iframe.onload = c
};
const Mf = {},
    Df = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Mf
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Pa = da(Df);
var ci = ii(),
    $f = Tt,
    Rf = Cn,
    Bf = Or,
    If = Da,
    Pf = wn("engine.io-client:websocket"),
    ur, ui;
typeof WebSocket < "u" ? ur = WebSocket : typeof self < "u" && (ur = self.WebSocket || self.MozWebSocket);
if (typeof window > "u") try {
    ui = Pa
} catch {}
var Ht = ur || ui,
    Lf = Pe;

function Pe(e) {
    var t = e && e.forceBase64;
    t && (this.supportsBinary = !1), this.perMessageDeflate = e.perMessageDeflate, this.usingBrowserWebSocket = ur && !e.forceNode, this.protocols = e.protocols, this.usingBrowserWebSocket || (Ht = ui), ci.call(this, e)
}
Bf(Pe, ci);
Pe.prototype.name = "websocket";
Pe.prototype.supportsBinary = !0;
Pe.prototype.doOpen = function() {
    if (this.check()) {
        var e = this.uri(),
            t = this.protocols,
            n = {};
        this.isReactNative || (n.agent = this.agent, n.perMessageDeflate = this.perMessageDeflate, n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized), this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
        try {
            this.ws = this.usingBrowserWebSocket && !this.isReactNative ? t ? new Ht(e, t) : new Ht(e) : new Ht(e, t, n)
        } catch (r) {
            return this.emit("error", r)
        }
        this.ws.binaryType === void 0 && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
    }
};
Pe.prototype.addEventListeners = function() {
    var e = this;
    this.ws.onopen = function() {
        e.onOpen()
    }, this.ws.onclose = function() {
        e.onClose()
    }, this.ws.onmessage = function(t) {
        e.onData(t.data)
    }, this.ws.onerror = function(t) {
        e.onError("websocket error", t)
    }
};
Pe.prototype.write = function(e) {
    var t = this;
    this.writable = !1;
    for (var n = e.length, r = 0, s = n; r < s; r++)(function(o) {
        $f.encodePacket(o, t.supportsBinary, function(c) {
            if (!t.usingBrowserWebSocket) {
                var l = {};
                if (o.options && (l.compress = o.options.compress), t.perMessageDeflate) {
                    var f = typeof c == "string" ? Buffer.byteLength(c) : c.length;
                    f < t.perMessageDeflate.threshold && (l.compress = !1)
                }
            }
            try {
                t.usingBrowserWebSocket ? t.ws.send(c) : t.ws.send(c, l)
            } catch {
                Pf("websocket closed before onclose event")
            }--n || i()
        })
    })(e[r]);

    function i() {
        t.emit("flush"), setTimeout(function() {
            t.writable = !0, t.emit("drain")
        }, 0)
    }
};
Pe.prototype.onClose = function() {
    ci.prototype.onClose.call(this)
};
Pe.prototype.doClose = function() {
    typeof this.ws < "u" && this.ws.close()
};
Pe.prototype.uri = function() {
    var e = this.query || {},
        t = this.secure ? "wss" : "ws",
        n = "";
    this.port && (t === "wss" && Number(this.port) !== 443 || t === "ws" && Number(this.port) !== 80) && (n = ":" + this.port), this.timestampRequests && (e[this.timestampParam] = If()), this.supportsBinary || (e.b64 = 1), e = Rf.encode(e), e.length && (e = "?" + e);
    var r = this.hostname.indexOf(":") !== -1;
    return t + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
};
Pe.prototype.check = function() {
    return !!Ht && !("__initialize" in Ht && this.name === Pe.prototype.name)
};
var Nf = ri,
    zf = Ff,
    jf = Ef,
    Uf = Lf;
xr.polling = Vf;
xr.websocket = Uf;

function Vf(e) {
    var t, n = !1,
        r = !1,
        s = e.jsonp !== !1;
    if (typeof location < "u") {
        var i = location.protocol === "https:",
            o = location.port;
        o || (o = i ? 443 : 80), n = e.hostname !== location.hostname || o !== e.port, r = e.secure !== i
    }
    if (e.xdomain = n, e.xscheme = r, t = new Nf(e), "open" in t && !e.forceJSONP) return new zf(e);
    if (!s) throw new Error("JSONP disabled");
    return new jf(e)
}
var qf = [].indexOf,
    La = function(e, t) {
        if (qf) return e.indexOf(t);
        for (var n = 0; n < e.length; ++n)
            if (e[n] === t) return n;
        return -1
    },
    Hf = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    Gf = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
    Wf = function(t) {
        var n = t,
            r = t.indexOf("["),
            s = t.indexOf("]");
        r != -1 && s != -1 && (t = t.substring(0, r) + t.substring(r, s).replace(/:/g, ";") + t.substring(s, t.length));
        for (var i = Hf.exec(t || ""), o = {}, c = 14; c--;) o[Gf[c]] = i[c] || "";
        return r != -1 && s != -1 && (o.source = n, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o.pathNames = Xf(o, o.path), o.queryKey = Kf(o, o.query), o
    };

function Xf(e, t) {
    var n = /\/{2,9}/g,
        r = t.replace(n, "/").split("/");
    return (t.substr(0, 1) == "/" || t.length === 0) && r.splice(0, 1), t.substr(t.length - 1, 1) == "/" && r.splice(r.length - 1, 1), r
}

function Kf(e, t) {
    var n = {};
    return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, s, i) {
        s && (n[s] = i)
    }), n
}
var Zf = xr,
    Jf = Er,
    fe = wn("engine.io-client:socket"),
    Yf = La,
    Na = Tt,
    uo = Wf,
    Qf = Cn,
    ed = G;

function G(e, t) {
    if (!(this instanceof G)) return new G(e, t);
    t = t || {}, e && typeof e == "object" && (t = e, e = null), e ? (e = uo(e), t.hostname = e.host, t.secure = e.protocol === "https" || e.protocol === "wss", t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = uo(t.host).host), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.agent = t.agent || !1, this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? 443 : 80), this.query = t.query || {}, typeof this.query == "string" && (this.query = Qf.decode(this.query)), this.upgrade = t.upgrade !== !1, this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!t.forceJSONP, this.jsonp = t.jsonp !== !1, this.forceBase64 = !!t.forceBase64, this.enablesXDR = !!t.enablesXDR, this.withCredentials = t.withCredentials !== !1, this.timestampParam = t.timestampParam || "t", this.timestampRequests = t.timestampRequests, this.transports = t.transports || ["polling", "websocket"], this.transportOptions = t.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = t.policyPort || 843, this.rememberUpgrade = t.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = t.onlyBinaryUpgrades, this.perMessageDeflate = t.perMessageDeflate !== !1 ? t.perMessageDeflate || {} : !1, this.perMessageDeflate === !0 && (this.perMessageDeflate = {}), this.perMessageDeflate && this.perMessageDeflate.threshold == null && (this.perMessageDeflate.threshold = 1024), this.pfx = t.pfx || null, this.key = t.key || null, this.passphrase = t.passphrase || null, this.cert = t.cert || null, this.ca = t.ca || null, this.ciphers = t.ciphers || null, this.rejectUnauthorized = t.rejectUnauthorized === void 0 ? !0 : t.rejectUnauthorized, this.forceNode = !!t.forceNode, this.isReactNative = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative", (typeof self > "u" || this.isReactNative) && (t.extraHeaders && Object.keys(t.extraHeaders).length > 0 && (this.extraHeaders = t.extraHeaders), t.localAddress && (this.localAddress = t.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
}
G.priorWebsocketSuccess = !1;
Jf(G.prototype);
G.protocol = Na.protocol;
G.Socket = G;
G.Transport = ii();
G.transports = xr;
G.parser = Tt;
G.prototype.createTransport = function(e) {
    fe('creating transport "%s"', e);
    var t = td(this.query);
    t.EIO = Na.protocol, t.transport = e;
    var n = this.transportOptions[e] || {};
    this.id && (t.sid = this.id);
    var r = new Zf[e]({
        query: t,
        socket: this,
        agent: n.agent || this.agent,
        hostname: n.hostname || this.hostname,
        port: n.port || this.port,
        secure: n.secure || this.secure,
        path: n.path || this.path,
        forceJSONP: n.forceJSONP || this.forceJSONP,
        jsonp: n.jsonp || this.jsonp,
        forceBase64: n.forceBase64 || this.forceBase64,
        enablesXDR: n.enablesXDR || this.enablesXDR,
        withCredentials: n.withCredentials || this.withCredentials,
        timestampRequests: n.timestampRequests || this.timestampRequests,
        timestampParam: n.timestampParam || this.timestampParam,
        policyPort: n.policyPort || this.policyPort,
        pfx: n.pfx || this.pfx,
        key: n.key || this.key,
        passphrase: n.passphrase || this.passphrase,
        cert: n.cert || this.cert,
        ca: n.ca || this.ca,
        ciphers: n.ciphers || this.ciphers,
        rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
        perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
        extraHeaders: n.extraHeaders || this.extraHeaders,
        forceNode: n.forceNode || this.forceNode,
        localAddress: n.localAddress || this.localAddress,
        requestTimeout: n.requestTimeout || this.requestTimeout,
        protocols: n.protocols || void 0,
        isReactNative: this.isReactNative
    });
    return r
};

function td(e) {
    var t = {};
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
}
G.prototype.open = function() {
    var e;
    if (this.rememberUpgrade && G.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) e = "websocket";
    else if (this.transports.length === 0) {
        var t = this;
        setTimeout(function() {
            t.emit("error", "No transports available")
        }, 0);
        return
    } else e = this.transports[0];
    this.readyState = "opening";
    try {
        e = this.createTransport(e)
    } catch {
        this.transports.shift(), this.open();
        return
    }
    e.open(), this.setTransport(e)
};
G.prototype.setTransport = function(e) {
    fe("setting transport %s", e.name);
    var t = this;
    this.transport && (fe("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = e, e.on("drain", function() {
        t.onDrain()
    }).on("packet", function(n) {
        t.onPacket(n)
    }).on("error", function(n) {
        t.onError(n)
    }).on("close", function() {
        t.onClose("transport close")
    })
};
G.prototype.probe = function(e) {
    fe('probing transport "%s"', e);
    var t = this.createTransport(e, {
            probe: 1
        }),
        n = !1,
        r = this;
    G.priorWebsocketSuccess = !1;

    function s() {
        if (r.onlyBinaryUpgrades) {
            var a = !this.supportsBinary && r.transport.supportsBinary;
            n = n || a
        }
        n || (fe('probe transport "%s" opened', e), t.send([{
            type: "ping",
            data: "probe"
        }]), t.once("packet", function(d) {
            if (!n)
                if (d.type === "pong" && d.data === "probe") {
                    if (fe('probe transport "%s" pong', e), r.upgrading = !0, r.emit("upgrading", t), !t) return;
                    G.priorWebsocketSuccess = t.name === "websocket", fe('pausing current transport "%s"', r.transport.name), r.transport.pause(function() {
                        n || r.readyState !== "closed" && (fe("changing transport and sending upgrade packet"), u(), r.setTransport(t), t.send([{
                            type: "upgrade"
                        }]), r.emit("upgrade", t), t = null, r.upgrading = !1, r.flush())
                    })
                } else {
                    fe('probe transport "%s" failed', e);
                    var h = new Error("probe error");
                    h.transport = t.name, r.emit("upgradeError", h)
                }
        }))
    }

    function i() {
        n || (n = !0, u(), t.close(), t = null)
    }

    function o(a) {
        var d = new Error("probe error: " + a);
        d.transport = t.name, i(), fe('probe transport "%s" failed because of error: %s', e, a), r.emit("upgradeError", d)
    }

    function c() {
        o("transport closed")
    }

    function l() {
        o("socket closed")
    }

    function f(a) {
        t && a.name !== t.name && (fe('"%s" works - aborting "%s"', a.name, t.name), i())
    }

    function u() {
        t.removeListener("open", s), t.removeListener("error", o), t.removeListener("close", c), r.removeListener("close", l), r.removeListener("upgrading", f)
    }
    t.once("open", s), t.once("error", o), t.once("close", c), this.once("close", l), this.once("upgrading", f), t.open()
};
G.prototype.onOpen = function() {
    if (fe("socket open"), this.readyState = "open", G.priorWebsocketSuccess = this.transport.name === "websocket", this.emit("open"), this.flush(), this.readyState === "open" && this.upgrade && this.transport.pause) {
        fe("starting upgrade probes");
        for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
    }
};
G.prototype.onPacket = function(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (fe('socket receive: type "%s", data "%s"', e.type, e.data), this.emit("packet", e), this.emit("heartbeat"), e.type) {
        case "open":
            this.onHandshake(JSON.parse(e.data));
            break;
        case "pong":
            this.setPing(), this.emit("pong");
            break;
        case "error":
            var t = new Error("server error");
            t.code = e.data, this.onError(t);
            break;
        case "message":
            this.emit("data", e.data), this.emit("message", e.data);
            break
    } else fe('packet received with socket readyState "%s"', this.readyState)
};
G.prototype.onHandshake = function(e) {
    this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), this.readyState !== "closed" && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
};
G.prototype.onHeartbeat = function(e) {
    clearTimeout(this.pingTimeoutTimer);
    var t = this;
    t.pingTimeoutTimer = setTimeout(function() {
        t.readyState !== "closed" && t.onClose("ping timeout")
    }, e || t.pingInterval + t.pingTimeout)
};
G.prototype.setPing = function() {
    var e = this;
    clearTimeout(e.pingIntervalTimer), e.pingIntervalTimer = setTimeout(function() {
        fe("writing ping packet - expecting pong within %sms", e.pingTimeout), e.ping(), e.onHeartbeat(e.pingTimeout)
    }, e.pingInterval)
};
G.prototype.ping = function() {
    var e = this;
    this.sendPacket("ping", function() {
        e.emit("ping")
    })
};
G.prototype.onDrain = function() {
    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emit("drain") : this.flush()
};
G.prototype.flush = function() {
    this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length && (fe("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
};
G.prototype.write = G.prototype.send = function(e, t, n) {
    return this.sendPacket("message", e, t, n), this
};
G.prototype.sendPacket = function(e, t, n, r) {
    if (typeof t == "function" && (r = t, t = void 0), typeof n == "function" && (r = n, n = null), !(this.readyState === "closing" || this.readyState === "closed")) {
        n = n || {}, n.compress = n.compress !== !1;
        var s = {
            type: e,
            data: t,
            options: n
        };
        this.emit("packetCreate", s), this.writeBuffer.push(s), r && this.once("flush", r), this.flush()
    }
};
G.prototype.close = function() {
    if (this.readyState === "opening" || this.readyState === "open") {
        this.readyState = "closing";
        var e = this;
        this.writeBuffer.length ? this.once("drain", function() {
            this.upgrading ? r() : t()
        }) : this.upgrading ? r() : t()
    }

    function t() {
        e.onClose("forced close"), fe("socket closing - telling transport to close"), e.transport.close()
    }

    function n() {
        e.removeListener("upgrade", n), e.removeListener("upgradeError", n), t()
    }

    function r() {
        e.once("upgrade", n), e.once("upgradeError", n)
    }
    return this
};
G.prototype.onError = function(e) {
    fe("socket error %j", e), G.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e)
};
G.prototype.onClose = function(e, t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
        fe('socket close with reason: "%s"', e);
        var n = this;
        clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", e, t), n.writeBuffer = [], n.prevBufferLen = 0
    }
};
G.prototype.filterUpgrades = function(e) {
    for (var t = [], n = 0, r = e.length; n < r; n++) ~Yf(this.transports, e[n]) && t.push(e[n]);
    return t
};
ti.exports = ed;
ti.exports.parser = Tt;
var nd = ti.exports,
    za = {
        exports: {}
    },
    ja = {
        exports: {}
    };
(function(e) {
    e.exports = t;

    function t(r) {
        if (r) return n(r)
    }

    function n(r) {
        for (var s in t.prototype) r[s] = t.prototype[s];
        return r
    }
    t.prototype.on = t.prototype.addEventListener = function(r, s) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + r] = this._callbacks["$" + r] || []).push(s), this
    }, t.prototype.once = function(r, s) {
        function i() {
            this.off(r, i), s.apply(this, arguments)
        }
        return i.fn = s, this.on(r, i), this
    }, t.prototype.off = t.prototype.removeListener = t.prototype.removeAllListeners = t.prototype.removeEventListener = function(r, s) {
        if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
        var i = this._callbacks["$" + r];
        if (!i) return this;
        if (arguments.length == 1) return delete this._callbacks["$" + r], this;
        for (var o, c = 0; c < i.length; c++)
            if (o = i[c], o === s || o.fn === s) {
                i.splice(c, 1);
                break
            }
        return this
    }, t.prototype.emit = function(r) {
        this._callbacks = this._callbacks || {};
        var s = [].slice.call(arguments, 1),
            i = this._callbacks["$" + r];
        if (i) {
            i = i.slice(0);
            for (var o = 0, c = i.length; o < c; ++o) i[o].apply(this, s)
        }
        return this
    }, t.prototype.listeners = function(r) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + r] || []
    }, t.prototype.hasListeners = function(r) {
        return !!this.listeners(r).length
    }
})(ja);
var Ua = ja.exports,
    rd = sd;

function sd(e, t) {
    var n = [];
    t = t || 0;
    for (var r = t || 0; r < e.length; r++) n[r - t] = e[r];
    return n
}
var Va = id;

function id(e, t, n) {
    return e.on(t, n), {
        destroy: function() {
            e.removeListener(t, n)
        }
    }
}
var lo = [].slice,
    qa = function(e, t) {
        if (typeof t == "string" && (t = e[t]), typeof t != "function") throw new Error("bind() requires a function");
        var n = lo.call(arguments, 2);
        return function() {
            return t.apply(e, n.concat(lo.call(arguments)))
        }
    },
    li = {};
li.encode = function(e) {
    var t = "";
    for (var n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t
};
li.decode = function(e) {
    for (var t = {}, n = e.split("&"), r = 0, s = n.length; r < s; r++) {
        var i = n[r].split("=");
        t[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
    }
    return t
};
(function(e, t) {
    var n = Sr,
        r = Ua,
        s = rd,
        i = Va,
        o = qa,
        c = Fr("socket.io-client:socket"),
        l = li,
        f = Ea;
    e.exports = d;
    var u = {
            connect: 1,
            connect_error: 1,
            connect_timeout: 1,
            connecting: 1,
            disconnect: 1,
            error: 1,
            reconnect: 1,
            reconnect_attempt: 1,
            reconnect_failed: 1,
            reconnect_error: 1,
            reconnecting: 1,
            ping: 1,
            pong: 1
        },
        a = r.prototype.emit;

    function d(h, p, y) {
        this.io = h, this.nsp = p, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, y && y.query && (this.query = y.query), this.io.autoConnect && this.open()
    }
    r(d.prototype), d.prototype.subEvents = function() {
        if (!this.subs) {
            var h = this.io;
            this.subs = [i(h, "open", o(this, "onopen")), i(h, "packet", o(this, "onpacket")), i(h, "close", o(this, "onclose"))]
        }
    }, d.prototype.open = d.prototype.connect = function() {
        return this.connected ? this : (this.subEvents(), this.io.open(), this.io.readyState === "open" && this.onopen(), this.emit("connecting"), this)
    }, d.prototype.send = function() {
        var h = s(arguments);
        return h.unshift("message"), this.emit.apply(this, h), this
    }, d.prototype.emit = function(h) {
        if (u.hasOwnProperty(h)) return a.apply(this, arguments), this;
        var p = s(arguments),
            y = {
                type: (this.flags.binary !== void 0 ? this.flags.binary : f(p)) ? n.BINARY_EVENT : n.EVENT,
                data: p
            };
        return y.options = {}, y.options.compress = !this.flags || this.flags.compress !== !1, typeof p[p.length - 1] == "function" && (c("emitting packet with ack id %d", this.ids), this.acks[this.ids] = p.pop(), y.id = this.ids++), this.connected ? this.packet(y) : this.sendBuffer.push(y), this.flags = {}, this
    }, d.prototype.packet = function(h) {
        h.nsp = this.nsp, this.io.packet(h)
    }, d.prototype.onopen = function() {
        if (c("transport is open - connecting"), this.nsp !== "/")
            if (this.query) {
                var h = typeof this.query == "object" ? l.encode(this.query) : this.query;
                c("sending connect packet with query %s", h), this.packet({
                    type: n.CONNECT,
                    query: h
                })
            } else this.packet({
                type: n.CONNECT
            })
    }, d.prototype.onclose = function(h) {
        c("close (%s)", h), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", h)
    }, d.prototype.onpacket = function(h) {
        var p = h.nsp === this.nsp,
            y = h.type === n.ERROR && h.nsp === "/";
        if (!(!p && !y)) switch (h.type) {
            case n.CONNECT:
                this.onconnect();
                break;
            case n.EVENT:
                this.onevent(h);
                break;
            case n.BINARY_EVENT:
                this.onevent(h);
                break;
            case n.ACK:
                this.onack(h);
                break;
            case n.BINARY_ACK:
                this.onack(h);
                break;
            case n.DISCONNECT:
                this.ondisconnect();
                break;
            case n.ERROR:
                this.emit("error", h.data);
                break
        }
    }, d.prototype.onevent = function(h) {
        var p = h.data || [];
        c("emitting event %j", p), h.id != null && (c("attaching ack callback to event"), p.push(this.ack(h.id))), this.connected ? a.apply(this, p) : this.receiveBuffer.push(p)
    }, d.prototype.ack = function(h) {
        var p = this,
            y = !1;
        return function() {
            if (!y) {
                y = !0;
                var g = s(arguments);
                c("sending ack %j", g), p.packet({
                    type: f(g) ? n.BINARY_ACK : n.ACK,
                    id: h,
                    data: g
                })
            }
        }
    }, d.prototype.onack = function(h) {
        var p = this.acks[h.id];
        typeof p == "function" ? (c("calling ack %s with %j", h.id, h.data), p.apply(this, h.data), delete this.acks[h.id]) : c("bad ack %s", h.id)
    }, d.prototype.onconnect = function() {
        this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
    }, d.prototype.emitBuffered = function() {
        var h;
        for (h = 0; h < this.receiveBuffer.length; h++) a.apply(this, this.receiveBuffer[h]);
        for (this.receiveBuffer = [], h = 0; h < this.sendBuffer.length; h++) this.packet(this.sendBuffer[h]);
        this.sendBuffer = []
    }, d.prototype.ondisconnect = function() {
        c("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
    }, d.prototype.destroy = function() {
        if (this.subs) {
            for (var h = 0; h < this.subs.length; h++) this.subs[h].destroy();
            this.subs = null
        }
        this.io.destroy(this)
    }, d.prototype.close = d.prototype.disconnect = function() {
        return this.connected && (c("performing disconnect (%s)", this.nsp), this.packet({
            type: n.DISCONNECT
        })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
    }, d.prototype.compress = function(h) {
        return this.flags.compress = h, this
    }, d.prototype.binary = function(h) {
        return this.flags.binary = h, this
    }
})(za);
var Ha = za.exports,
    od = rn;

function rn(e) {
    e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
}
rn.prototype.duration = function() {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
        e = Math.floor(t * 10) & 1 ? e + n : e - n
    }
    return Math.min(e, this.max) | 0
};
rn.prototype.reset = function() {
    this.attempts = 0
};
rn.prototype.setMin = function(e) {
    this.ms = e
};
rn.prototype.setMax = function(e) {
    this.max = e
};
rn.prototype.setJitter = function(e) {
    this.jitter = e
};
var ad = nd,
    cd = Ha,
    ud = Ua,
    ld = Sr,
    rt = Va,
    Pt = qa,
    _e = Fr("socket.io-client:manager"),
    Ga = La,
    fd = od,
    Wa = Object.prototype.hasOwnProperty,
    fo = X;

function X(e, t) {
    if (!(this instanceof X)) return new X(e, t);
    e && typeof e == "object" && (t = e, e = void 0), t = t || {}, t.path = t.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = t, this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor || .5), this.backoff = new fd({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this.readyState = "closed", this.uri = e, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
    var n = t.parser || ld;
    this.encoder = new n.Encoder, this.decoder = new n.Decoder, this.autoConnect = t.autoConnect !== !1, this.autoConnect && this.open()
}
X.prototype.emitAll = function() {
    this.emit.apply(this, arguments);
    for (var e in this.nsps) Wa.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments)
};
X.prototype.updateSocketIds = function() {
    for (var e in this.nsps) Wa.call(this.nsps, e) && (this.nsps[e].id = this.generateId(e))
};
X.prototype.generateId = function(e) {
    return (e === "/" ? "" : e + "#") + this.engine.id
};
ud(X.prototype);
X.prototype.reconnection = function(e) {
    return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
};
X.prototype.reconnectionAttempts = function(e) {
    return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts
};
X.prototype.reconnectionDelay = function(e) {
    return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay
};
X.prototype.randomizationFactor = function(e) {
    return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor
};
X.prototype.reconnectionDelayMax = function(e) {
    return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax
};
X.prototype.timeout = function(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout
};
X.prototype.maybeReconnectOnOpen = function() {
    !this.reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
};
X.prototype.open = X.prototype.connect = function(e, t) {
    if (_e("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
    _e("opening %s", this.uri), this.engine = ad(this.uri, this.opts);
    var n = this.engine,
        r = this;
    this.readyState = "opening", this.skipReconnect = !1;
    var s = rt(n, "open", function() {
            r.onopen(), e && e()
        }),
        i = rt(n, "error", function(l) {
            if (_e("connect_error"), r.cleanup(), r.readyState = "closed", r.emitAll("connect_error", l), e) {
                var f = new Error("Connection error");
                f.data = l, e(f)
            } else r.maybeReconnectOnOpen()
        });
    if (this._timeout !== !1) {
        var o = this._timeout;
        _e("connect attempt will timeout after %d", o);
        var c = setTimeout(function() {
            _e("connect attempt timed out after %d", o), s.destroy(), n.close(), n.emit("error", "timeout"), r.emitAll("connect_timeout", o)
        }, o);
        this.subs.push({
            destroy: function() {
                clearTimeout(c)
            }
        })
    }
    return this.subs.push(s), this.subs.push(i), this
};
X.prototype.onopen = function() {
    _e("open"), this.cleanup(), this.readyState = "open", this.emit("open");
    var e = this.engine;
    this.subs.push(rt(e, "data", Pt(this, "ondata"))), this.subs.push(rt(e, "ping", Pt(this, "onping"))), this.subs.push(rt(e, "pong", Pt(this, "onpong"))), this.subs.push(rt(e, "error", Pt(this, "onerror"))), this.subs.push(rt(e, "close", Pt(this, "onclose"))), this.subs.push(rt(this.decoder, "decoded", Pt(this, "ondecoded")))
};
X.prototype.onping = function() {
    this.lastPing = new Date, this.emitAll("ping")
};
X.prototype.onpong = function() {
    this.emitAll("pong", new Date - this.lastPing)
};
X.prototype.ondata = function(e) {
    this.decoder.add(e)
};
X.prototype.ondecoded = function(e) {
    this.emit("packet", e)
};
X.prototype.onerror = function(e) {
    _e("error", e), this.emitAll("error", e)
};
X.prototype.socket = function(e, t) {
    var n = this.nsps[e];
    if (!n) {
        n = new cd(this, e, t), this.nsps[e] = n;
        var r = this;
        n.on("connecting", s), n.on("connect", function() {
            n.id = r.generateId(e)
        }), this.autoConnect && s()
    }

    function s() {
        ~Ga(r.connecting, n) || r.connecting.push(n)
    }
    return n
};
X.prototype.destroy = function(e) {
    var t = Ga(this.connecting, e);
    ~t && this.connecting.splice(t, 1), !this.connecting.length && this.close()
};
X.prototype.packet = function(e) {
    _e("writing packet %j", e);
    var t = this;
    e.query && e.type === 0 && (e.nsp += "?" + e.query), t.encoding ? t.packetBuffer.push(e) : (t.encoding = !0, this.encoder.encode(e, function(n) {
        for (var r = 0; r < n.length; r++) t.engine.write(n[r], e.options);
        t.encoding = !1, t.processPacketQueue()
    }))
};
X.prototype.processPacketQueue = function() {
    if (this.packetBuffer.length > 0 && !this.encoding) {
        var e = this.packetBuffer.shift();
        this.packet(e)
    }
};
X.prototype.cleanup = function() {
    _e("cleanup");
    for (var e = this.subs.length, t = 0; t < e; t++) {
        var n = this.subs.shift();
        n.destroy()
    }
    this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
};
X.prototype.close = X.prototype.disconnect = function() {
    _e("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, this.readyState === "opening" && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
};
X.prototype.onclose = function(e) {
    _e("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", e), this._reconnection && !this.skipReconnect && this.reconnect()
};
X.prototype.reconnect = function() {
    if (this.reconnecting || this.skipReconnect) return this;
    var e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) _e("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
    else {
        var t = this.backoff.duration();
        _e("will wait %dms before reconnect attempt", t), this.reconnecting = !0;
        var n = setTimeout(function() {
            e.skipReconnect || (_e("attempting reconnect"), e.emitAll("reconnect_attempt", e.backoff.attempts), e.emitAll("reconnecting", e.backoff.attempts), !e.skipReconnect && e.open(function(r) {
                r ? (_e("reconnect attempt error"), e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", r.data)) : (_e("reconnect success"), e.onreconnect())
            }))
        }, t);
        this.subs.push({
            destroy: function() {
                clearTimeout(n)
            }
        })
    }
};
X.prototype.onreconnect = function() {
    var e = this.backoff.attempts;
    this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", e)
};
(function(e, t) {
    var n = Rl,
        r = Sr,
        s = fo,
        i = Fr("socket.io-client");
    e.exports = t = c;
    var o = t.managers = {};

    function c(l, f) {
        typeof l == "object" && (f = l, l = void 0), f = f || {};
        var u = n(l),
            a = u.source,
            d = u.id,
            h = u.path,
            p = o[d] && h in o[d].nsps,
            y = f.forceNew || f["force new connection"] || f.multiplex === !1 || p,
            g;
        return y ? (i("ignoring socket cache for %s", a), g = s(a, f)) : (o[d] || (i("new io instance for %s", a), o[d] = s(a, f)), g = o[d]), u.query && !f.query && (f.query = u.query), g.socket(u.path, f)
    }
    t.protocol = r.protocol, t.connect = c, t.Manager = fo, t.Socket = Ha
})(hs, hs.exports);
var dd = hs.exports,
    Mr = {};

function hd(e, t) {
    return t = t || {}, new Promise(function(n, r) {
        var s = new XMLHttpRequest,
            i = [],
            o = [],
            c = {},
            l = function() {
                return {
                    ok: (s.status / 100 | 0) == 2,
                    statusText: s.statusText,
                    status: s.status,
                    url: s.responseURL,
                    text: function() {
                        return Promise.resolve(s.responseText)
                    },
                    json: function() {
                        return Promise.resolve(s.responseText).then(JSON.parse)
                    },
                    blob: function() {
                        return Promise.resolve(new Blob([s.response]))
                    },
                    clone: l,
                    headers: {
                        keys: function() {
                            return i
                        },
                        entries: function() {
                            return o
                        },
                        get: function(u) {
                            return c[u.toLowerCase()]
                        },
                        has: function(u) {
                            return u.toLowerCase() in c
                        }
                    }
                }
            };
        for (var f in s.open(t.method || "get", e, !0), s.onload = function() {
                s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(u, a, d) {
                    i.push(a = a.toLowerCase()), o.push([a, d]), c[a] = c[a] ? c[a] + "," + d : d
                }), n(l())
            }, s.onerror = r, s.withCredentials = t.credentials == "include", t.headers) s.setRequestHeader(f, t.headers[f]);
        s.send(t.body || null)
    })
}
const pd = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: hd
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ho = da(pd);
var gd = self.fetch || (self.fetch = ho.default || ho),
    md = I && I.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(Mr, "__esModule", {
    value: !0
});
Mr.fetchBalancerConfig = void 0;
var Nn = he,
    yd = md(gd),
    bd = function(e) {
        return (0, Nn.debug)("using balancer ".concat(e, " to get websocket url")), (0, yd.default)("".concat(e)).then(function(t) {
            return t.json()
        }).then(function(t) {
            return t != null && t.url && (t != null && t.token) ? ((0, Nn.debug)("balancer returns url ".concat(t == null ? void 0 : t.url, " and token ").concat(t == null ? void 0 : t.token)), t) : ((0, Nn.debug)("balancer returns invalid response"), null)
        }).catch(function(t) {
            return (0, Nn.debug)("failed to resolve url: ".concat(t.message)), null
        })
    };
Mr.fetchBalancerConfig = bd;
var Dr = {},
    vd = I && I.__extends || function() {
        var e = function(t, n) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(r, s) {
                r.__proto__ = s
            } || function(r, s) {
                for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (r[i] = s[i])
            }, e(t, n)
        };
        return function(t, n) {
            if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            e(t, n);

            function r() {
                this.constructor = t
            }
            t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }(),
    po = I && I.__spreadArray || function(e, t, n) {
        if (n || arguments.length === 2)
            for (var r = 0, s = t.length, i; r < s; r++)(i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
        return e.concat(i || Array.prototype.slice.call(t))
    },
    _d = I && I.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(Dr, "__esModule", {
    value: !0
});
Dr.SocketMock = void 0;
var ns = he,
    wd = _d(wa),
    Cd = function(e) {
        vd(t, e);

        function t(n) {
            var r = e.call(this) || this;
            return r.options = n, r.id = "mock", r.connected = !1, r.disconnected = !0, r.binaryType = "blob", r
        }
        return t.prototype.open = function() {
            var n = this;
            return (0, ns.debug)("SocketIOMock: connect"), this.once("visitor.connect", function(r, s) {
                s(null, n.options.connectData)
            }), this.connected = !0, this.disconnected = !1, this.emit("connect"), this
        }, t.prototype.close = function() {
            return (0, ns.debug)("SocketIOMock: disconnect"), this.connected = !1, this.disconnected = !1, this.emit("disconnect", "io client disconnect"), this
        }, t.prototype.emit = function(n) {
            for (var r = [], s = 1; s < arguments.length; s++) r[s - 1] = arguments[s];
            return ns.debug.apply(void 0, po(["SocketIOMock: emit"], r, !1)), (n === "connect" || n === "disconnect" || n === "visitor.connect") && e.prototype.emit.apply(this, po([n], r, !1)), this
        }, t.prototype.send = function() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            return this.emit(event, n)
        }, t.prototype.compress = function() {
            return this
        }, t.prototype.connect = function() {
            return this.open()
        }, t.prototype.disconnect = function() {
            return this.close()
        }, t.prototype.hasListeners = function(n) {
            return this.listenerCount(n) === 0
        }, t.prototype.addEventListener = function(n, r) {
            return this.addListener(n, r), this
        }, t.prototype.removeEventListener = function(n, r) {
            return this.removeListener(n, r), this
        }, t
    }(wd.default);
Dr.SocketMock = Cd;
(function(e) {
    var t = I && I.__assign || function() {
            return t = Object.assign || function(p) {
                for (var y, g = 1, m = arguments.length; g < m; g++) {
                    y = arguments[g];
                    for (var b in y) Object.prototype.hasOwnProperty.call(y, b) && (p[b] = y[b])
                }
                return p
            }, t.apply(this, arguments)
        },
        n = I && I.__createBinding || (Object.create ? function(p, y, g, m) {
            m === void 0 && (m = g);
            var b = Object.getOwnPropertyDescriptor(y, g);
            (!b || ("get" in b ? !y.__esModule : b.writable || b.configurable)) && (b = {
                enumerable: !0,
                get: function() {
                    return y[g]
                }
            }), Object.defineProperty(p, m, b)
        } : function(p, y, g, m) {
            m === void 0 && (m = g), p[m] = y[g]
        }),
        r = I && I.__exportStar || function(p, y) {
            for (var g in p) g !== "default" && !Object.prototype.hasOwnProperty.call(y, g) && n(y, p, g)
        },
        s = I && I.__awaiter || function(p, y, g, m) {
            function b(_) {
                return _ instanceof g ? _ : new g(function(v) {
                    v(_)
                })
            }
            return new(g || (g = Promise))(function(_, v) {
                function w(E) {
                    try {
                        C(m.next(E))
                    } catch (B) {
                        v(B)
                    }
                }

                function k(E) {
                    try {
                        C(m.throw(E))
                    } catch (B) {
                        v(B)
                    }
                }

                function C(E) {
                    E.done ? _(E.value) : b(E.value).then(w, k)
                }
                C((m = m.apply(p, y || [])).next())
            })
        },
        i = I && I.__generator || function(p, y) {
            var g = {
                    label: 0,
                    sent: function() {
                        if (_[0] & 1) throw _[1];
                        return _[1]
                    },
                    trys: [],
                    ops: []
                },
                m, b, _, v;
            return v = {
                next: w(0),
                throw: w(1),
                return: w(2)
            }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
                return this
            }), v;

            function w(C) {
                return function(E) {
                    return k([C, E])
                }
            }

            function k(C) {
                if (m) throw new TypeError("Generator is already executing.");
                for (; v && (v = 0, C[0] && (g = 0)), g;) try {
                    if (m = 1, b && (_ = C[0] & 2 ? b.return : C[0] ? b.throw || ((_ = b.return) && _.call(b), 0) : b.next) && !(_ = _.call(b, C[1])).done) return _;
                    switch (b = 0, _ && (C = [C[0] & 2, _.value]), C[0]) {
                        case 0:
                        case 1:
                            _ = C;
                            break;
                        case 4:
                            return g.label++, {
                                value: C[1],
                                done: !1
                            };
                        case 5:
                            g.label++, b = C[1], C = [0];
                            continue;
                        case 7:
                            C = g.ops.pop(), g.trys.pop();
                            continue;
                        default:
                            if (_ = g.trys, !(_ = _.length > 0 && _[_.length - 1]) && (C[0] === 6 || C[0] === 2)) {
                                g = 0;
                                continue
                            }
                            if (C[0] === 3 && (!_ || C[1] > _[0] && C[1] < _[3])) {
                                g.label = C[1];
                                break
                            }
                            if (C[0] === 6 && g.label < _[1]) {
                                g.label = _[1], _ = C;
                                break
                            }
                            if (_ && g.label < _[2]) {
                                g.label = _[2], g.ops.push(C);
                                break
                            }
                            _[2] && g.ops.pop(), g.trys.pop();
                            continue
                    }
                    C = y.call(p, g)
                } catch (E) {
                    C = [6, E], b = 0
                } finally {
                    m = _ = 0
                }
                if (C[0] & 5) throw C[1];
                return {
                    value: C[0] ? C[1] : void 0,
                    done: !0
                }
            }
        },
        o = I && I.__importDefault || function(p) {
            return p && p.__esModule ? p : {
                default: p
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SocketError = void 0;
    var c = he,
        l = o(wa),
        f = o(dd),
        u = Mr,
        a = {
            transports: ["websocket"],
            path: "/socket",
            reconnection: !0,
            reconnectionDelay: 1e3,
            reconnectionDelayMax: 5e3,
            reconnectionAttempts: Number.POSITIVE_INFINITY
        },
        d = function() {
            function p(y) {
                this.options = y, this.initialized = !1, this.forceReconnect = !1, this.identity = null, this.connection = null, this.connectCallback = null, this.disconnectCallback = null, this.initData = null, this.internalReconnection = !1, this.internalReconnecting = !1, this.internalReconnectingAttempt = 0, this.emitter = new l.default, this.sendBuffer = [], this.options.options = t(t(t({}, a), this.options.options), {
                    autoConnect: !1
                })
            }
            return p.prototype.initConnection = function() {
                return s(this, void 0, void 0, function() {
                    var y;
                    return i(this, function(g) {
                        switch (g.label) {
                            case 0:
                                if (this.connection) throw new Error("Connection already exists");
                                return this.options.socket ? ((0, c.debug)("using socket ".concat(this.options.socket.id)), this.internalReconnection = !1, this.setConnection(this.options.socket), [3, 4]) : [3, 1];
                            case 1:
                                return this.options.balancerUrl ? [4, (0, u.fetchBalancerConfig)(this.options.balancerUrl)] : [3, 3];
                            case 2:
                                return y = g.sent(), (0, c.debug)("creating socket to ".concat(y.url, " with token ").concat(y.token)), this.internalReconnection = !0, this.setConnection((0, f.default)(y.url, t(t({}, this.options.options), {
                                    autoConnect: !1,
                                    reconnection: !1,
                                    query: {
                                        token: y.token
                                    }
                                })), !0), [3, 4];
                            case 3:
                                if (this.options.url)(0, c.debug)("creating socket to ".concat(this.options.url)), this.internalReconnection = !1, this.setConnection((0, f.default)(this.options.url, t(t({}, this.options.options), {
                                    autoConnect: !1
                                })));
                                else throw new Error("Missing required parameter url");
                                g.label = 4;
                            case 4:
                                return [2]
                        }
                    })
                })
            }, p.prototype.setConnection = function(y, g) {
                var m = this;
                g === void 0 && (g = !1), this.connection = y, this.forceReconnect = !1, this.internalReconnection = g, y.on("connect_error", function(b) {
                    m.internalReconnection && (m.connectCallback = null, (0, c.debug)("connection was not reconnected"), m.emitter.emit("reconnect_error", b), m.options.options.reconnectionAttempts > m.internalReconnectingAttempt + 1 ? m.reconnect(m.internalReconnectingAttempt + 1) : m.emitter.emit("reconnect_failed", m.internalReconnectingAttempt))
                }), y.on("connect", function() {
                    (0, c.debug)("socket was connected"), m.initialized = !1, m.internalReconnecting ? ((0, c.debug)("connection is reconnected"), m.emitter.emit("reconnect"), m.internalReconnecting = !1, m.internalReconnectingAttempt = 0) : m.emitter.emit("connect"), m.initialize().then(function(b) {
                        return (0, c.debug)("socket was initialized"), m.onInitialized(b), m.connectCallback && (m.connectCallback(null, b), m.connectCallback = null), b
                    }).catch(function(b) {
                        (0, c.debug)("socket was not initialized ", t({}, b)), m.onInitializeError(b), m.connectCallback && (m.connectCallback(b), m.connectCallback = null)
                    })
                }), y.on("disconnect", function(b) {
                    (0, c.debug)("socket was disconnected reason='".concat(b, "'")), m.initialized = !1, (!m.internalReconnecting || m.internalReconnectingAttempt === 1) && setTimeout(function() {
                        m.emitter.emit("disconnect", b), m.disconnectCallback && (m.disconnectCallback(), m.disconnectCallback = null)
                    }, 100), m.options.options.reconnection && m.internalReconnection && !m.internalReconnecting && (m.forceReconnect || b !== "io server disconnect") && m.reconnect()
                }), y.on("reconnecting", function(b) {
                    m.emitter.emit("reconnecting", b)
                }), y.on("reconnect", function() {
                    m.emitter.emit("reconnect")
                }), y.on("reconnect_attempt", function(b) {
                    m.emitter.emit("reconnect_attempt", b)
                }), y.on("reconnect_error", function(b) {
                    m.emitter.emit("reconnect_error", b)
                }), y.on("reconnect_failed", function() {
                    m.emitter.emit("reconnect_failed")
                }), y.on("force_reconnect", function() {
                    (0, c.debug)("received event force_reconnect, setting flag forceReconnect = true"), m.forceReconnect = !0
                })
            }, p.prototype.getConnection = function() {
                return this.connection
            }, p.prototype.isConnected = function() {
                var y;
                return ((y = this.connection) === null || y === void 0 ? void 0 : y.connected) || !1
            }, p.prototype.isInitialized = function() {
                return this.initialized
            }, p.prototype.getInitData = function() {
                return this.initData
            }, p.prototype.connect = function() {
                return s(this, void 0, void 0, function() {
                    var y = this;
                    return i(this, function(g) {
                        switch (g.label) {
                            case 0:
                                return this.connection ? [3, 2] : [4, this.initConnection()];
                            case 1:
                                g.sent(), g.label = 2;
                            case 2:
                                return [2, new Promise(function(m, b) {
                                    y.initialized ? m(y.initData) : ((0, c.debug)("starting connecting"), y.connectCallback = (0, c.createCallback)(m, b), y.connection.open())
                                })]
                        }
                    })
                })
            }, p.prototype.disconnect = function() {
                var y = this;
                return new Promise(function(g, m) {
                    !y.connection || y.connection.disconnected ? (y.connection = null, g()) : ((0, c.debug)("starting disconnecting"), y.disconnectCallback = (0, c.createCallback)(g, m), y.connection.close(), y.connection = null)
                })
            }, p.prototype.reconnect = function(y) {
                var g = this;
                return y === void 0 && (y = 1), this.internalReconnecting = !0, this.internalReconnectingAttempt = y, this.disconnect().then(function() {
                    var m = Math.floor(Math.random() * (g.options.options.reconnectionDelayMax - g.options.options.reconnectionDelay) + g.options.options.reconnectionDelay);
                    return (0, c.debug)("connection will reconnect in ".concat(m, "ms")), g.emitter.emit("reconnecting", y), new Promise(function(b) {
                        setTimeout(b, m)
                    })
                }).then(function() {
                    return (0, c.debug)("connection is starting reconnect"), g.emitter.emit("reconnect_attempt", y), g.connect()
                })
            }, p.prototype.initialize = function() {
                return new Promise(function(y) {
                    y({})
                })
            }, p.prototype.onInitialized = function(y) {
                var g = this;
                this.initialized || (this.initialized = !0, this.initData = y, (0, c.debug)("emit initialized"), this.emitter.emit("initialized", y), setTimeout(function() {
                    if (g.sendBuffer.length > 0) {
                        (0, c.debug)("sending buffered ".concat(g.sendBuffer.length, " events"));
                        for (var m = 0; m < g.sendBuffer.length; m++) {
                            var b = g.sendBuffer[m];
                            g.connection.emit(b.name, b.data, b.callback)
                        }
                        g.sendBuffer = []
                    }
                }, 1))
            }, p.prototype.onInitializeError = function(y) {
                this.disconnect(), (0, c.debug)("emit initialize_error", t({}, y)), this.emitter.emit("initialize_error", y)
            }, p.prototype.send = function(y, g, m) {
                this.initialized ? this.connection.emit(y, g, m) : this.sendBuffer.push({
                    name: y,
                    data: g,
                    callback: m
                })
            }, p.prototype.on = function(y, g) {
                return this.emitter.on(y, g), this
            }, p.prototype.once = function(y, g) {
                return this.emitter.once(y, g), this
            }, p.prototype.removeAllListeners = function() {
                for (var y, g = [], m = 0; m < arguments.length; m++) g[m] = arguments[m];
                return (y = this.emitter).removeAllListeners.apply(y, g), this
            }, p
        }();
    e.default = d;
    var h = he;
    Object.defineProperty(e, "SocketError", {
        enumerable: !0,
        get: function() {
            return h.SocketError
        }
    }), r(Dr, e)
})(Ys);
(function(e) {
    var t = I && I.__extends || function() {
            var f = function(u, a) {
                return f = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(d, h) {
                    d.__proto__ = h
                } || function(d, h) {
                    for (var p in h) Object.prototype.hasOwnProperty.call(h, p) && (d[p] = h[p])
                }, f(u, a)
            };
            return function(u, a) {
                if (typeof a != "function" && a !== null) throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(u, a);

                function d() {
                    this.constructor = u
                }
                u.prototype = a === null ? Object.create(a) : (d.prototype = a.prototype, new d)
            }
        }(),
        n = I && I.__assign || function() {
            return n = Object.assign || function(f) {
                for (var u, a = 1, d = arguments.length; a < d; a++) {
                    u = arguments[a];
                    for (var h in u) Object.prototype.hasOwnProperty.call(u, h) && (f[h] = u[h])
                }
                return f
            }, n.apply(this, arguments)
        },
        r = I && I.__awaiter || function(f, u, a, d) {
            function h(p) {
                return p instanceof a ? p : new a(function(y) {
                    y(p)
                })
            }
            return new(a || (a = Promise))(function(p, y) {
                function g(_) {
                    try {
                        b(d.next(_))
                    } catch (v) {
                        y(v)
                    }
                }

                function m(_) {
                    try {
                        b(d.throw(_))
                    } catch (v) {
                        y(v)
                    }
                }

                function b(_) {
                    _.done ? p(_.value) : h(_.value).then(g, m)
                }
                b((d = d.apply(f, u || [])).next())
            })
        },
        s = I && I.__generator || function(f, u) {
            var a = {
                    label: 0,
                    sent: function() {
                        if (p[0] & 1) throw p[1];
                        return p[1]
                    },
                    trys: [],
                    ops: []
                },
                d, h, p, y;
            return y = {
                next: g(0),
                throw: g(1),
                return: g(2)
            }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
                return this
            }), y;

            function g(b) {
                return function(_) {
                    return m([b, _])
                }
            }

            function m(b) {
                if (d) throw new TypeError("Generator is already executing.");
                for (; y && (y = 0, b[0] && (a = 0)), a;) try {
                    if (d = 1, h && (p = b[0] & 2 ? h.return : b[0] ? h.throw || ((p = h.return) && p.call(h), 0) : h.next) && !(p = p.call(h, b[1])).done) return p;
                    switch (h = 0, p && (b = [b[0] & 2, p.value]), b[0]) {
                        case 0:
                        case 1:
                            p = b;
                            break;
                        case 4:
                            return a.label++, {
                                value: b[1],
                                done: !1
                            };
                        case 5:
                            a.label++, h = b[1], b = [0];
                            continue;
                        case 7:
                            b = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (p = a.trys, !(p = p.length > 0 && p[p.length - 1]) && (b[0] === 6 || b[0] === 2)) {
                                a = 0;
                                continue
                            }
                            if (b[0] === 3 && (!p || b[1] > p[0] && b[1] < p[3])) {
                                a.label = b[1];
                                break
                            }
                            if (b[0] === 6 && a.label < p[1]) {
                                a.label = p[1], p = b;
                                break
                            }
                            if (p && a.label < p[2]) {
                                a.label = p[2], a.ops.push(b);
                                break
                            }
                            p[2] && a.ops.pop(), a.trys.pop();
                            continue
                    }
                    b = u.call(f, a)
                } catch (_) {
                    b = [6, _], h = 0
                } finally {
                    d = p = 0
                }
                if (b[0] & 5) throw b[1];
                return {
                    value: b[0] ? b[1] : void 0,
                    done: !0
                }
            }
        },
        i = I && I.__importDefault || function(f) {
            return f && f.__esModule ? f : {
                default: f
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.WebsocketVisitorClient = void 0;
    var o = i(Ys),
        c = he,
        l = function(f) {
            t(u, f);

            function u(a) {
                var d = f.call(this, a.connection) || this;
                return d.serverVersion = null, d.updatedValues = {}, d.connectData = a.data, d.identity = null, d
            }
            return u.prototype.setConnection = function(a) {
                f.prototype.setConnection.call(this, a), a.on("server.error", (0, c.bound)(this, "onServerError")), a.on("account.updated", (0, c.createEmitter)(this.emitter, "account.updated")), a.on("agent.updated", (0, c.createEmitter)(this.emitter, "agent.updated")), a.on("agent.status_updated", (0, c.createEmitter)(this.emitter, "agent.status_updated")), a.on("agent.removed", (0, c.createEmitter)(this.emitter, "agent.removed")), a.on("visitor.updated", (0, c.bound)(this, "onVisitorUpdated")), a.on("chat.updated", (0, c.createEmitter)(this.emitter, "chat.updated")), a.on("chat.agent_joined", (0, c.createEmitter)(this.emitter, "chat.agent_joined")), a.on("chat.agent_assigned", (0, c.createEmitter)(this.emitter, "chat.agent_assigned")), a.on("chat.agent_unassigned", (0, c.createEmitter)(this.emitter, "chat.agent_unassigned")), a.on("chat.agent_left", (0, c.createEmitter)(this.emitter, "chat.agent_left")), a.on("chat.opened", (0, c.createEmitter)(this.emitter, "chat.opened")), a.on("chat.served", (0, c.createEmitter)(this.emitter, "chat.served")), a.on("chat.closed", (0, c.createEmitter)(this.emitter, "chat.closed")), a.on("chat.visitor_closed", (0, c.createEmitter)(this.emitter, "chat.visitor_closed")), a.on("chat.message_received", (0, c.createEmitter)(this.emitter, "chat.message_received")), a.on("chat.message_updated", (0, c.createEmitter)(this.emitter, "chat.message_updated")), a.on("chat.message_deleted", (0, c.createEmitter)(this.emitter, "chat.message_deleted")), a.on("chat.agent_typing", (0, c.createEmitter)(this.emitter, "chat.agent_typing")), a.on("chat.rated", (0, c.createEmitter)(this.emitter, "chat.rated")), a.on("chat.rating_cancelled", (0, c.createEmitter)(this.emitter, "chat.rating_cancelled")), a.on("chat.rating_suggested", (0, c.createEmitter)(this.emitter, "chat.rating_suggested")), a.on("chat.contact_read", (0, c.createEmitter)(this.emitter, "chat.contact_read")), a.on("chat.deleted", (0, c.createEmitter)(this.emitter, "chat.deleted")), a.on("chat.ticket_form_finish", (0, c.createEmitter)(this.emitter, "chat.ticket_form_finish")), a.on("chat.transcript_pdf", (0, c.createEmitter)(this.emitter, "chat.transcript_pdf")), a.on("contact.acquired", (0, c.createEmitter)(this.emitter, "contact.acquired"))
            }, u.prototype.on = function(a, d) {
                return this.emitter.on(a, d), this
            }, u.prototype.once = function(a, d) {
                return this.emitter.once(a, d), this
            }, u.prototype.getId = function() {
                return this.identity ? this.identity.id : null
            }, u.prototype.getIdentity = function() {
                return this.identity
            }, u.prototype.connect = function() {
                return f.prototype.connect.call(this)
            }, u.prototype.disconnect = function(a) {
                return a === void 0 && (a = !1), r(this, void 0, void 0, function() {
                    var d = this;
                    return s(this, function(h) {
                        switch (h.label) {
                            case 0:
                                return a ? [4, new Promise(function(p, y) {
                                    d.send("visitor.logout", {}, (0, c.createCallback)(p, y))
                                })] : [3, 2];
                            case 1:
                                h.sent(), h.label = 2;
                            case 2:
                                return [2, f.prototype.disconnect.call(this)]
                        }
                    })
                })
            }, u.prototype.update = function(a) {
                a === void 0 && (a = {}), this.checkServerVersion();
                for (var d in a) this.identity[d] = a[d], this.updatedValues[d] = a[d];
                this.saveVisitorValues()
            }, u.prototype.authenticate = function(a) {
                var d = this;
                return this.checkServerVersion(), new Promise(function(h, p) {
                    d.send("visitor.authenticate", {
                        values: a
                    }, (0, c.createCallback)(h, p))
                })
            }, u.prototype.notify = function(a, d) {
                var h = this;
                return d === void 0 && (d = null), this.checkServerVersion(), new Promise(function(p, y) {
                    h.send("visitor.notify", {
                        name: a,
                        value: d
                    }, (0, c.createCallback)(p, y))
                })
            }, u.prototype.chatRead = function() {
                this.checkServerVersion(), this.send("chat.read", null)
            }, u.prototype.chatTyping = function(a, d) {
                d === void 0 && (d = null), this.checkServerVersion(), this.send("chat.typing", {
                    typing: {
                        is: a,
                        text: d
                    }
                })
            }, u.prototype.chatMessage = function(a) {
                var d = this;
                return this.checkServerVersion(), new Promise(function(h, p) {
                    d.send("chat.message", a, (0, c.createCallback)(h, p))
                })
            }, u.prototype.chatClose = function(a) {
                a === void 0 && (a = null), this.checkServerVersion(), this.send("chat.close", {
                    type: a
                })
            }, u.prototype.chatUploadInit = function() {
                var a = this;
                return this.checkServerVersion(), new Promise(function(d, h) {
                    a.send("chat.upload_init", null, (0, c.createCallback)(d, h))
                })
            }, u.prototype.chatUploadFinish = function(a) {
                var d = this;
                return this.checkServerVersion(), new Promise(function(h, p) {
                    d.send("chat.upload_finish", {
                        uploadToken: a
                    }, (0, c.createCallback)(h, p))
                })
            }, u.prototype.chatTranscript = function(a, d) {
                var h = this;
                return this.checkServerVersion(), new Promise(function(p, y) {
                    h.send("chat.transcript", {
                        email: a,
                        lang: d
                    }, (0, c.createCallback)(p, y))
                })
            }, u.prototype.chatTicketFormFinish = function(a) {
                var d = this;
                return this.checkServerVersion(), new Promise(function(h, p) {
                    d.send("chat.ticket_form_finish", a, (0, c.createCallback)(h, p))
                })
            }, u.prototype.chatRateInit = function() {
                var a = this;
                return this.checkServerVersion(), new Promise(function(d, h) {
                    a.send("chat.rate_init", null, (0, c.createCallback)(d, h))
                })
            }, u.prototype.chatRate = function(a) {
                var d = this;
                return this.checkServerVersion(), new Promise(function(h, p) {
                    d.send("chat.rate", a, (0, c.createCallback)(h, p))
                })
            }, u.prototype.chatTranscriptPdf = function() {
                var a = this;
                return this.checkServerVersion(), new Promise(function(d, h) {
                    a.send("chat.transcript_pdf", null, (0, c.createCallback)(d, h))
                })
            }, u.prototype.visitorConnect = function() {
                var a = this,
                    d = n({
                        version: u.CLIENT_VERSION
                    }, this.connectData);
                for (var h in this.updatedValues) d[h] = this.updatedValues[h];
                if (this.updatedValues = {}, this.identity)
                    for (var h in this.identity)["bannedAt", "chatId", "status"].includes(h) || (d[h] = this.identity[h]);
                return this.emitter.emit("initialize", d), new Promise(function(p, y) {
                    a.connection.emit("visitor.connect", d, (0, c.createCallback)(p, y))
                })
            }, u.prototype.visitorDisconnect = function() {
                var a = this;
                return new Promise(function(d, h) {
                    a.connection.emit("visitor.disconnect", {}, (0, c.createCallback)(d, h))
                })
            }, u.prototype.onVisitorUpdated = function(a) {
                var d = {};
                for (var h in a.changes) u.identityProperties.includes(h) && (this.identity && (this.identity[h] = a.changes[h]), d[h] = a.changes[h]);
                Object.getOwnPropertyNames(d).length > 0 && this.emitter.emit("visitor.updated", d)
            }, u.prototype.onServerError = function(a) {
                var d = (0, c.createSocketError)(a);
                this.emitter.emit("error", d)
            }, u.prototype.initialize = function() {
                var a = this;
                return this.visitorConnect().then(function(d) {
                    return a.serverVersion = d.serverVersion, a.identity = n(n({}, d.visitor), {
                        variables: n({}, d.visitor.variables)
                    }), d
                })
            }, u.prototype.saveVisitorValues = function() {
                var a = this;
                this.initialized && setTimeout(function() {
                    if (!(!a.initialized || Object.getOwnPropertyNames(a.updatedValues).length === 0)) {
                        var d = {};
                        for (var h in a.updatedValues) d[h] = a.updatedValues[h];
                        a.send("visitor.update", {
                            values: d
                        }), a.updatedValues = {}
                    }
                }, 1)
            }, u.prototype.checkServerVersion = function() {
                if (this.serverVersion === null) throw new Error("Client not yet connected to server")
            }, u.CLIENT_VERSION = 6, u.identityProperties = ["id", "name", "email", "phone", "chatId", "variables", "lang", "group", "bannedAt", "triggerable", "visits", "gdprApproved"], u
        }(o.default);
    e.WebsocketVisitorClient = l,
        function(f) {
            (function(u) {
                u.WidgetOpen = "widget_open", u.WidgetShow = "widget_show", u.VisitorActive = "visitor_active", u.VisitorInactive = "visitor_inactive"
            })(f.EventName || (f.EventName = {}))
        }(l = e.WebsocketVisitorClient || (e.WebsocketVisitorClient = {})), e.WebsocketVisitorClient = l
})(ds);
var Xa = {};
Object.defineProperty(Xa, "__esModule", {
    value: !0
});
var Ka = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.RatingTarget = void 0,
        function(t) {
            t.Agent = "agent", t.Ai = "ai"
        }(e.RatingTarget || (e.RatingTarget = {}))
})(Ka);
var le = {};
Object.defineProperty(le, "__esModule", {
    value: !0
});
le.MessageDeliveryFailReason = le.MessageDeliveryStatus = le.AgentDevicePlatform = le.AgentDeviceType = le.VisitorStatus = le.ChatReadInfoType = le.ChatStatus = le.AgentStatus = le.AccountStatus = void 0;
le.AccountStatus = {
    Online: "online",
    Offline: "offline"
};
le.AgentStatus = {
    Online: "online",
    Offline: "offline"
};
le.ChatStatus = {
    Pending: "pending",
    Open: "open",
    Closed: "closed",
    Served: "served"
};
le.ChatReadInfoType = {
    Agent: "agent",
    Contact: "contact"
};
le.VisitorStatus = {
    Active: "active",
    Clicked: "clicked",
    Idle: "idle",
    Served: "served",
    Unserved: "unserved",
    Triggered: "triggered"
};
le.AgentDeviceType = {
    Browser: "browser",
    Mobile: "mobile",
    Xmpp: "xmpp",
    Other: "other"
};
le.AgentDevicePlatform = {
    IOS: "ios",
    ANDROID: "android"
};
le.MessageDeliveryStatus = {
    Ok: "ok",
    PermanentFail: "permanent_fail",
    TemporaryFail: "temporary_fail",
    Complained: "complained",
    Seen: "seen"
};
le.MessageDeliveryFailReason = {
    Facebook24hWindow: "facebook.outside_allowed_window"
};
(function(e) {
    var t = I && I.__createBinding || (Object.create ? function(i, o, c, l) {
            l === void 0 && (l = c);
            var f = Object.getOwnPropertyDescriptor(o, c);
            (!f || ("get" in f ? !o.__esModule : f.writable || f.configurable)) && (f = {
                enumerable: !0,
                get: function() {
                    return o[c]
                }
            }), Object.defineProperty(i, l, f)
        } : function(i, o, c, l) {
            l === void 0 && (l = c), i[l] = o[c]
        }),
        n = I && I.__exportStar || function(i, o) {
            for (var c in i) c !== "default" && !Object.prototype.hasOwnProperty.call(o, c) && t(o, i, c)
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SocketError = e.default = void 0;
    var r = ds;
    Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return r.WebsocketVisitorClient
        }
    }), n(ds, e), n(Xa, e), n(Ka, e);
    var s = he;
    Object.defineProperty(e, "SocketError", {
        enumerable: !0,
        get: function() {
            return s.SocketError
        }
    }), n(le, e)
})(me);
const fi = fa(me),
    Za = O(null),
    Ad = O(!1),
    di = O([]),
    kd = e => {
        di.update(t => [...t, e])
    },
    Fd = () => {
        let e;
        return di.update(t => (e = t.pop(), t)), e ? ? null
    },
    Sd = () => A(di).length === 0,
    hi = (e, {
        useStack: t = !1
    } = {}) => {
        Za.update(n => (t && n && kd(n), Ad.set(n !== null), e))
    },
    Ja = () => {
        let e = null;
        Sd() || (e = Fd()), Za.set(e)
    };
var $r = (e => (e[e.Options = 0] = "Options", e[e.GdprAndPrivacy = 1] = "GdprAndPrivacy", e[e.AuthForm = 2] = "AuthForm", e[e.CloseChat = 3] = "CloseChat", e[e.ChatRating = 4] = "ChatRating", e[e.TicketForm = 5] = "TicketForm", e))($r || {});
const gw = 500,
    mw = 1e3,
    yw = Symbol("contentListItem"),
    bw = Symbol("contentMessageAttachment"),
    vw = "-replies",
    Ed = .35,
    Td = 5e3;
var x = {},
    Ya = {};
Object.defineProperty(Ya, "__esModule", {
    value: !0
});
var Rr = {};
Object.defineProperty(Rr, "__esModule", {
    value: !0
});
Rr.CardsLayout = void 0;
Rr.CardsLayout = {
    Grid: "grid",
    Carousel: "carousel"
};
var Qa = {};
Object.defineProperty(Qa, "__esModule", {
    value: !0
});
var ec = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.RatingTarget = e.GroupType = e.ChannelType = e.MessageSubType = e.MessageType = e.AttachmentInvalidReason = e.AttachmentType = e.MessageActionType = void 0, e.MessageActionType = {
            Text: "text",
            OpenUrl: "open_url"
        }, e.AttachmentType = {
            Card: "card",
            Cards: "cards",
            File: "file",
            Image: "image",
            Media: "media",
            Invalid: "invalid"
        }, e.AttachmentInvalidReason = {
            InvalidSize: "invalid_size",
            InvalidType: "invalid_type"
        }, e.MessageType = {
            Message: "message",
            Event: "event",
            Help: "help"
        }, e.MessageSubType = {
            Agent: "agent",
            Contact: "contact",
            Trigger: "trigger",
            Bot: "bot",
            System: "system",
            AgentExternal: "agent_external",
            FoundEmail: "found_email",
            ChatResolve: "chat_resolve"
        }, e.ChannelType = {
            Default: "default",
            Email: "email",
            FacebookMessenger: "facebook_messenger",
            Smartsupp: "smartsupp"
        },
        function(t) {
            t.ai = "ai", t.chatbot = "chatbot", t.message = "message"
        }(e.GroupType || (e.GroupType = {})),
        function(t) {
            t.Agent = "agent", t.Ai = "ai"
        }(e.RatingTarget || (e.RatingTarget = {}))
})(ec);
var tc = {};
Object.defineProperty(tc, "__esModule", {
    value: !0
});
var nc = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MessageContentType = e.MessageContent = void 0;
    var t;
    (function(n) {
        (function(r) {
            r.Type = {
                Text: "text",
                Upload: "upload",
                RateForm: "rate_form",
                TicketForm: "ticket_form"
            }
        })(n.Message || (n.Message = {})),
        function(r) {
            r.Type = {
                AgentJoin: "agent_join",
                AgentAssign: "agent_assign",
                AgentUnassign: "agent_unassign",
                AgentLeave: "agent_leave",
                ChatClose: "chat_close",
                ChatVisitorClose: "chat_visitor_close"
            }
        }(n.Event || (n.Event = {})),
        function(r) {
            r.Type = {
                Text: "text",
                FoundEmail: "found_email"
            }
        }(n.Help || (n.Help = {}))
    })(t = e.MessageContent || (e.MessageContent = {})), e.MessageContentType = { ...t.Message.Type,
        ...t.Event.Type,
        ...t.Help.Type
    }
})(nc);
var rc = {};
Object.defineProperty(rc, "__esModule", {
    value: !0
});
(function(e) {
    var t = I && I.__createBinding || (Object.create ? function(r, s, i, o) {
            o === void 0 && (o = i);
            var c = Object.getOwnPropertyDescriptor(s, i);
            (!c || ("get" in c ? !s.__esModule : c.writable || c.configurable)) && (c = {
                enumerable: !0,
                get: function() {
                    return s[i]
                }
            }), Object.defineProperty(r, o, c)
        } : function(r, s, i, o) {
            o === void 0 && (o = i), r[o] = s[i]
        }),
        n = I && I.__exportStar || function(r, s) {
            for (var i in r) i !== "default" && !Object.prototype.hasOwnProperty.call(s, i) && t(s, r, i)
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n(Ya, e), n(Rr, e), n(Qa, e), n(ec, e), n(tc, e), n(nc, e), n(rc, e)
})(x);
const xd = "default",
    Br = (e, t) => {
        const n = {};
        for (const r of t) {
            const s = String(r[e]);
            n[s] = r
        }
        return n
    },
    Od = () => {
        const e = O({}),
            {
                subscribe: t,
                set: n
            } = e;
        return {
            subscribe: t,
            setGroups: s => {
                n(Br("key", s))
            }
        }
    },
    pi = Od(),
    sc = $([pi], ([e]) => Object.values(e)),
    Ee = {
        authFormDrawer: "authFormDrawer",
        authFormPrivacyNotice: "authFormPrivacyNotice",
        authFormPrivacyNoticeSwitch: "authFormPrivacyNoticeSwitch",
        authFormSubmitButton: "authFormSubmitButton",
        avatarAgent: "avatarAgent",
        avatarBot: "avatarBot",
        avatarGroup: "avatarGroup",
        avatarInfo: "avatarInfo",
        buttonAttachment: "buttonAttachment",
        buttonCloseChat: "buttonCloseChat",
        buttonCloseDrawer: "buttonCloseDrawer",
        buttonCollapseChat: "buttonCollapseChat",
        buttonEmoji: "buttonEmoji",
        buttonExpandChat: "buttonExpandChat",
        buttonMinimizeChat: "buttonMinimizeChat",
        buttonOptions: "buttonOptions",
        buttonSend: "buttonSend",
        chatRatingDrawer: "chatRatingDrawer",
        chatRatingEmojiButton: "chatRatingEmoji",
        chatRatingSendButton: "chatRatingSendButton",
        chatRatingTextarea: "chatRatingTextarea",
        chatRatingFeedbackButton: "chatRatingFeedbackButton",
        chatRatingButtonAi: "chatRatingButtonAi",
        chatRatingButtonAgent: "chatRatingButtonAgent",
        closeChatConfirmButton: "closeChatConfirmButton",
        closeChatDeclineButton: "closeChatDeclineButton",
        closeChatDrawer: "closeChatDrawer",
        flashMessage: "flashMessage",
        gdprDrawer: "gdprDrawer",
        headerTitle: "headerTitle",
        headerStatus: "headerStatus",
        headerBadge: "headerBadge",
        messageAttachment: "messageAttachment",
        messageAgent: "messageAgent",
        messageBot: "messageBot",
        messageBotReply: "messageBotReply",
        messageBotBack: "messageBotBack",
        messageContact: "messageContact",
        messageFile: "messageFile",
        messageGroup: "messageGroup",
        messageImage: "messageImage",
        optionsDrawer: "optionsDrawer",
        optionsPrivacyNotice: "optionsPrivacyNotice",
        optionsSounds: "optionsSounds",
        optionsTranscript: "optionsTranscript",
        popup: "popup",
        popupMessage: "popupMessage",
        popupButton: "popupButton",
        popupButtonClose: "popupButtonClose",
        productCard: "productCard",
        productCardArrowLeft: "productCardArrowLeft",
        productCardArrowRight: "productCardArrowRight",
        productCardButton: "productCardButton",
        productCardCarousel: "productCardCarousel",
        productCardDescription: "productCardDescription",
        productCardImage: "productCardImage",
        productCardInfo: "productCardInfo",
        productCardTitle: "productCardTitle",
        systemMessage: "systemMessage",
        textarea: "textarea",
        textareaPreviewFile: "textareaPreviewFile",
        textareaPreviewImage: "textareaPreviewImage",
        transcriptInput: "transcriptInput",
        transcriptSendButton: "transcriptSend",
        ticketFormDrawer: "ticketFormDrawer",
        ticketFormSubmitButton: "ticketFormSubmitButton",
        widgetButton: "widgetButton",
        widgetButtonFrame: "widgetButtonFrame",
        widgetButtonText: "widgetButtontext",
        widgetImagePreview: "widgetImagePreview",
        widgetMessenger: "widgetMessenger",
        widgetMessengerFrame: "widgetMessengerFrame",
        widgetOnlineBadge: "widgetOnlineBadge",
        widgetPopupFrame: "widgetPopupFrame",
        widgetTypingFrame: "widgetTypingFrame",
        widgetUnreadMessagesBadge: "widgetUnreadMessagesBadge",
        widgetHeader: "widgetHeader"
    },
    _w = "https://www.smartsupp.com",
    ww = "/powered-by-smartsupp",
    Cw = ["cs", "es", "fr", "hu", "it", "de", "nl", "pl"],
    Md = "3.0",
    Aw = "https://www.smartsupp.com/my-data-and-gdpr",
    gi = O(!1),
    go = pa(J.SessionId, ""),
    Dd = () => {
        const {
            protocol: e,
            host: t
        } = M.getOptions();
        return `${e==="http"?"http":"https"}://${t}`
    },
    $d = async () => {
        const {
            mobileSdk: e,
            visitorId: t
        } = M.getOptions();
        if (e && t) return t;
        try {
            return await cl()
        } catch (n) {
            return oe(String(n)), null
        }
    },
    Rd = (e, t) => {
        let n = qn().location.href;
        return e && t && (n = `${n}${n.includes("?")?"&":"?"}ss-bot-run=${t}`), n
    },
    ic = () => {
        ne.clearMessages(), Lp(), gt.clearAssignedAgentIds(), qu(), ju(J.VisitorId)
    },
    Bd = async e => {
        try {
            await ul(e), al()
        } catch (t) {
            oe(String(t))
        }
    },
    Id = async (e = !1) => {
        const {
            key: t,
            lang: n,
            isPreviewMode: r,
            previewWithoutReset: s,
            sitePlatform: i,
            triggerable: o,
            _chatMaxReopenTime: c,
            botId: l
        } = M.getOptions();
        (r && !s || e) && ic();
        const f = await $d(),
            u = A(zi);
        return {
            key: t,
            id: f,
            isPreviewMode: r,
            sitePlatform: i,
            triggerable: o,
            _chatMaxReopenTime: c,
            name: u.name,
            email: u.email,
            phone: u.phone,
            group: u.group,
            lang: u.lang ? ? n,
            variables: u.variables,
            widgetVersion: Md,
            visits: ll(),
            isWidgetVisible: A(yt),
            isWidgetOpen: A(ke),
            pageUrl: Rd(r, l),
            pageTitle: qn().document.title,
            domain: qn().location.hostname || "unknown",
            referer: qn().document.referrer,
            bundleVersion: "6a27bc042fa726b50055f573d930776b7830cc7a"
        }
    },
    Pd = (e, t) => {
        const {
            isPreviewMode: n
        } = M.getOptions();
        !e && t !== A(go) && !n && (ic(), A(ke) && ke.set(!1)), go.set(t)
    },
    Ld = () => {
        const e = O(),
            {
                subscribe: t,
                set: n
            } = e;
        return {
            subscribe: t,
            initialize: s => n(s)
        }
    },
    mi = Ld(),
    ln = 5,
    Nd = "FILE",
    kw = 2e3,
    Fw = e => e.split("/")[0] === "image",
    Sw = e => !!e.match(/^video\/(?:mp4|webm|ogg){1}$/);
async function zd(e) {
    if (!FileReader) return Xe("FileReader not supported"), null;
    const t = new FileReader;
    return new Promise(n => {
        t.onload = () => {
            if (!t.result) {
                n(null);
                return
            }
            let r;
            typeof t.result == "string" ? r = t.result : r = String(t.result), r.startsWith("data:image") || (r = null), n(r)
        }, t.onerror = () => {
            Xe("Failed to load image data"), n(null)
        }, t.readAsDataURL(e)
    })
}
async function jd(e) {
    return new Promise(t => {
        const n = document.createElement("img");
        n.onload = () => {
            t({
                width: n.width,
                height: n.height
            })
        }, n.onerror = () => {
            Xe("Failed to obtain image dimensions"), t(null)
        }, n.src = e
    })
}

function Ud(e) {
    return {
        horizontal: e.width > e.height,
        vertical: e.height > e.width
    }
}
const Vd = "ar",
    qd = "az",
    Hd = "bg",
    Gd = "br",
    Wd = "bs",
    Xd = "ca",
    Kd = "cn",
    Zd = "cs",
    Jd = "da",
    Yd = "de",
    Qd = "el",
    oc = "en",
    eh = "es",
    th = "fa",
    nh = "fi",
    rh = "fil",
    sh = "fr",
    ih = "he",
    oh = "hi",
    ah = "hr",
    ch = "hu",
    uh = "is",
    lh = "it",
    fh = "ja",
    dh = "ka",
    hh = "lt",
    ph = "lv",
    gh = "mk",
    mh = "nl",
    yh = "no",
    bh = "pl",
    vh = "pt",
    _h = "ro",
    wh = "ru",
    Ch = "sk",
    Ah = "sl",
    kh = "sr",
    Fh = "sv",
    Sh = "th",
    Eh = "tr",
    Th = "tw",
    xh = "uk",
    ac = oc,
    Oh = [Vd, qd, Hd, Gd, Wd, Xd, Kd, Zd, Jd, Yd, Qd, oc, eh, th, nh, rh, sh, ih, oh, ah, ch, uh, lh, fh, dh, hh, ph, gh, mh, yh, bh, vh, _h, wh, Ch, Ah, kh, Fh, Sh, Eh, Th, xh];
var yi = {},
    Mh = I && I.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(yi, "__esModule", {
    value: !0
});
var cc = yi.FetchAdapter = void 0;
const Dh = Mh(Pa);
class bi {
    constructor(t) {
        this.options = {}, this.options = t
    }
    async request(t, n, r, s, i) {
        const o = { ...this.options,
                ...i
            },
            c = s ? "?" + Dh.default.stringify(s) : "";
        try {
            const l = await fetch(`${o.baseURL||""}${n}${c}`, {
                method: t,
                body: r ? JSON.stringify(r) : null,
                ...o
            });
            return {
                status: l.status,
                statusText: l.statusText,
                data: await l.json(),
                headers: [...l.headers.entries()].reduce((f, [u, a]) => (f[u] = a, f), {})
            }
        } catch (l) {
            throw l.isOpenApiError = !0, l
        }
    }
    withOptions(t) {
        return new bi(t)
    }
}
cc = yi.FetchAdapter = bi;
var vi = {},
    Wt = {};
Object.defineProperty(Wt, "__esModule", {
    value: !0
});
Wt.ProjectName = Wt.ErrorCode = void 0;
Wt.ErrorCode = {
    BadRequest: "bad_request",
    NotAllowed: "not_allowed",
    NotFound: "not_found",
    Forbidden: "forbidden",
    TooManyRequests: "too_many_requests",
    Unauthorized: "unauthorized",
    Unprocessable: "unprocessable"
};
Wt.ProjectName = {
    Widget: "widget",
    Chatbot: "chatbot"
};
var Xt = {},
    St = {};
Object.defineProperty(St, "__esModule", {
    value: !0
});
St.TranslationsClientRaw = St.TranslationsClient = void 0;
class $h {
    constructor(t) {
        this.adapter = t, this.raw = new uc(this.adapter)
    }
    getDefaults(t, n, r) {
        return this.adapter.request("get", `/${t}/translations/lang/${n}/defaults`, null, null, r).then(Rh)
    }
}
St.TranslationsClient = $h;
class uc {
    constructor(t) {
        this.adapter = t
    }
    getDefaults(t, n, r) {
        return this.adapter.request("get", `/${t}/translations/lang/${n}/defaults`, null, null, r)
    }
}
St.TranslationsClientRaw = uc;

function Rh(e) {
    return e.data
}
Object.defineProperty(Xt, "__esModule", {
    value: !0
});
Xt.SmartsuppTranslationsClientApi = void 0;
const Bh = St;
class Ir {
    constructor(t) {
        this.adapter = t, this.translations = new Bh.TranslationsClient(t)
    }
    withOptions(t) {
        return new Ir(this.adapter.withOptions(t))
    }
}
Xt.SmartsuppTranslationsClientApi = Ir;
Xt.default = Ir;
(function(e) {
    var t = I && I.__createBinding || (Object.create ? function(s, i, o, c) {
            c === void 0 && (c = o);
            var l = Object.getOwnPropertyDescriptor(i, o);
            (!l || ("get" in l ? !i.__esModule : l.writable || l.configurable)) && (l = {
                enumerable: !0,
                get: function() {
                    return i[o]
                }
            }), Object.defineProperty(s, c, l)
        } : function(s, i, o, c) {
            c === void 0 && (c = o), s[c] = i[o]
        }),
        n = I && I.__exportStar || function(s, i) {
            for (var o in s) o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, s, o)
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n(Wt, e), n(Xt, e), n(St, e);
    const r = Xt;
    e.default = r.SmartsuppTranslationsClientApi
})(vi);
const lc = e => Oh.includes(e),
    Ih = e => lc(e) ? e : ac,
    Ph = () => {
        const {
            lang: e
        } = M.getOptions(), {
            lang: t
        } = A(zi);
        return Ih(t ? ? e)
    };

function Lh() {
    return new vi.TranslationsClient(new cc({
        baseURL: `${M.getOptions().translationsBaseUrl}/api/v1`
    }))
}
const Nh = async e => Lh().getDefaults(vi.ProjectName.Widget, e),
    zh = (e, t) => {
        const {
            translates: n
        } = M.getOptions();
        return { ...e,
            ...n[t] && n[t]
        }
    },
    An = O(ac),
    Kt = O({}),
    fc = async e => {
        try {
            const t = await Nh(e),
                n = zh(t, e);
            Kt.update(r => ({ ...r,
                [e]: n
            }))
        } catch {
            Xe(`Fetch translations of '${e}' language failed.`)
        }
    },
    jh = async e => {
        A(Kt)[e] || await fc(e), An.set(e)
    },
    Uh = async () => {
        const e = Ph();
        An.set(e), await fc(e)
    },
    Vh = e => {
        const t = A(An),
            r = { ...A(Kt)[t],
                ...e
            };
        Kt.update(s => ({ ...s,
            [t]: r
        }))
    },
    qh = (e, t, n) => {
        var o;
        const r = A(Kt),
            s = `|${t}|`;
        if (Object.keys(r).length === 0) return s;
        let i = ((o = r[e]) == null ? void 0 : o[t]) || s;
        return Object.keys(n).map(c => {
            const l = new RegExp(`{${c}}`, "g");
            i = i.replace(l, n[c])
        }), i
    },
    we = $([An, Kt], ([e]) => (t, n = {}) => qh(e, t, n)),
    Hh = () => {
        const e = O([]),
            {
                subscribe: t,
                update: n
            } = e,
            r = () => A(e).map(g => g.file),
            s = (g, m) => (m || A(e)).find(b => b.file.name === g) || null,
            i = g => ({
                file: g,
                preview: {},
                previewState: "none",
                uploadStatus: "none"
            }),
            o = g => {
                const m = Array.isArray(g) ? g : [g];
                n(b => b.length + m.length > ln ? (kt(`${A(we)("fileUpload.tooManyFiles")} ${ln}`), b) : [...b, ...m.map(i)]), p(m)
            },
            c = g => {
                n(m => m.filter(b => b.file !== g))
            },
            l = () => A(e).length,
            f = () => l() >= ln,
            u = () => e.set([]),
            a = () => {
                e.update(g => (g.forEach(m => m.uploadStatus = "in-progress"), g))
            },
            d = g => {
                e.update(m => {
                    const b = s(g, m);
                    return b && (b.uploadStatus = "done"), m
                })
            },
            h = g => {
                var m;
                return ((m = s(g.name)) == null ? void 0 : m.previewState) !== "none"
            },
            p = g => {
                g.forEach(m => void y(m))
            },
            y = async g => {
                if (h(g)) return;
                const m = await zd(g),
                    b = m ? await jd(m) : null,
                    _ = b ? Ud(b) : null;
                e.update(v => {
                    const w = s(g.name, v);
                    return w ? (w.previewState = "ready", w.preview = {
                        data: m,
                        dimensions: b,
                        orientation: _
                    }, [...v]) : v
                })
            };
        return {
            subscribe: t,
            getFiles: r,
            find: s,
            add: o,
            remove: c,
            count: l,
            isLimitReached: f,
            clear: u,
            setUploadingStatus: a,
            setFileUploaded: d
        }
    },
    wt = Hh(),
    Gh = () => {
        const e = [];
        return Object.freeze({
            push: r => {
                e.push(r)
            },
            executeAll: () => {
                for (; e.length > 0;) {
                    const r = e.shift();
                    r && r()
                }
            }
        })
    },
    kn = Gh(),
    Wh = () => {
        const e = O({}),
            {
                update: t,
                subscribe: n,
                set: r
            } = e;
        return {
            subscribe: n,
            setIdentities: c => {
                r(Br("id", c))
            },
            addIdentity: c => {
                t(l => ({ ...l,
                    [c.id]: c
                }))
            },
            updateIdentity: (c, l) => {
                t(f => f[c] ? { ...f,
                    [c]: { ...f[c],
                        ...l
                    }
                } : f)
            }
        }
    },
    Xh = Wh(),
    Kh = e => {
        var n, r;
        De("init data", e), gi.set(!0), Pd(e.chat, e.sessionId);
        const t = e.visitor.id;
        Bd(t), fl(e.visitor.visits), Ve.setVisitorData(e.visitor), $u({
            vid: t
        }), mi.initialize(e.fileUpload), Ar.set(e.browser), dt.setAgents(e.account.agents), Xh.setIdentities(e.account.botIdentities), ((n = e.chat) == null ? void 0 : n.virtualAgent) !== void 0 && dt.setVirtualAgent((r = e.chat) == null ? void 0 : r.virtualAgent), pi.setGroups(e.account.groups), xt.set(e.account.status), e.chat && (Sn() && mn.set(e.chat.ratingSuggestedTarget || null), qe.set(e.chat.status), sn(e.chat.isClosed), Fn.set(e.chat.unreadInfo.lastReadAt), ne.setMessages(e.chat.messages), gt.setAssignedAgentIds(e.chat.assignedIds ? ? []), e.chat.widgetOptions && mt.updateGeneralOptions(e.chat.widgetOptions)), $e.set(!0), ie.emit("widgetInit", !0), kn.executeAll()
    },
    Zh = e => {
        console.error(e)
    },
    Jh = () => {
        gi.set(!1)
    },
    Yh = ({
        chatId: e
    }) => {
        Ci.set(!1), hc.set(e), qe.set(me.ChatStatus.Open), mt.setMessageOptions({
            disableAttachments: !1
        })
    },
    Qh = () => {
        qe.set(me.ChatStatus.Served), sn(!1)
    },
    ep = ({
        message: e
    }) => {
        const {
            closeType: t
        } = e.content.data;
        (t === "agent_close" || t === "bot_close") && (gt.setAssignedAgentIds([]), qe.set(me.ChatStatus.Closed), ne.addMessage(e), ie.emit("chatClosed", e))
    },
    tp = ({
        message: e
    }) => {
        Sn() && Fi(kr), sn(!0, {
            byVisitor: !0
        }), ne.addMessage(e), ie.emit("chatVisitorClosed", e)
    },
    np = ({
        changes: e
    }) => {
        e.widgetOptions && mt.updateGeneralOptions(e.widgetOptions), e.isClosed !== void 0 && sn(e.isClosed), e.virtualAgent !== void 0 && dt.setVirtualAgent(e.virtualAgent)
    },
    rp = async ({
        message: e
    }) => {
        const t = A(c0) && Nr(e);
        !A(ke) && zr(e) && !t ? Jg(e) : await ne.addMessage(e), mc(), e.widgetOptions && mt.setMessageOptions(e.widgetOptions), t && Ur(), ie.emit("messageReceived", e)
    },
    sp = e => {
        rp(e)
    },
    ip = ({
        messageId: e
    }) => {
        ne.deleteMessage(e)
    },
    op = ({
        message: e
    }) => {
        ne.replaceMessage(e), e.widgetOptions && e.id === A(ki) && mt.setMessageOptions(e.widgetOptions)
    },
    ap = ({
        message: e,
        agent: t
    }) => {
        gt.addAssignedAgentId(e.content.data.agentId), ne.addMessage(e), ie.emit("agentJoined", t)
    },
    cp = ({
        message: e
    }) => {
        gt.removeAssignedAgentId(e.content.data.agentId), ne.addMessage(e)
    },
    up = ({
        message: e
    }) => {
        gt.addAssignedAgentId(e.content.data.assigned), ne.addMessage(e)
    },
    lp = ({
        message: e
    }) => {
        gt.removeAssignedAgentId(e.content.data.unassigned), ne.addMessage(e)
    },
    fp = e => {
        !e.typing.is && A(Ci) || wi.set(e.typing.is)
    },
    dp = e => {
        Fn.set(e.lastReadAt)
    },
    hp = ({
        message: e,
        rating: t
    }) => {
        ne.updateMessageRating(e), ie.emit("chatRated", t)
    },
    pp = e => {
        ie.emit("transcriptPdf", e)
    },
    gp = ({
        id: e,
        changes: t
    }) => {
        dt.updateAgent(e, t)
    },
    mp = ({
        id: e,
        status: t
    }) => {
        dt.updateAgent(e, {
            status: t
        })
    },
    yp = ({
        status: e
    }) => {
        xt.set(e)
    },
    bp = e => {
        Ve.updateVisitorData(e)
    },
    vp = e => {
        ie.emit("contactAcquired", e)
    },
    _p = e => {
        Sn() && mn.set(e.ratingSuggestedTarget)
    },
    wp = () => {
        A(mn) && mn.set(null)
    },
    Cp = async e => {
        const t = await M.awaitOptions(),
            n = {
                data: e,
                connection: {
                    url: Dd(),
                    socket: t.mock ? new Ys.SocketMock(t.mock) : void 0,
                    balancerUrl: t.balancerUrl,
                    options: {
                        path: "/socket",
                        autoConnect: !1,
                        reconnection: !0
                    }
                }
            };
        return new fi(n)
    },
    Ap = () => {
        let e = null;
        const t = () => !!e,
            n = () => {
                if (!e) throw new Error("Visitor client is not initialized");
                return e
            },
            r = async i => {
                const o = await Id(i);
                e = await Cp(o), e && (kp(e), await e.connect().catch(c => {
                    Xe("Failed connect to server.", c)
                }))
            };
        return Object.freeze({
            getClient: n,
            initClient: r,
            reloadClient: async (i, o) => {
                await (e == null ? void 0 : e.disconnect()), i && M.updateOptions({
                    mock: i
                }), await r(o)
            },
            isInitialized: t
        })
    },
    kp = e => {
        e.on("initialized", Kh), e.on("error", Zh), e.on("disconnect", Jh), e.on("chat.opened", Yh), e.on("chat.served", Qh), e.on("chat.closed", ep), e.on("chat.visitor_closed", tp), e.on("chat.updated", np), e.on("chat.message_received", sp), e.on("chat.message_updated", op), e.on("chat.message_deleted", ip), e.on("chat.agent_joined", ap), e.on("chat.agent_left", cp), e.on("chat.agent_assigned", up), e.on("chat.agent_unassigned", lp), e.on("chat.agent_typing", fp), e.on("chat.contact_read", dp), e.on("chat.rated", hp), e.on("chat.rating_suggested", _p), e.on("chat.rating_cancelled", wp), e.on("chat.transcript_pdf", pp), e.on("agent.updated", gp), e.on("agent.status_updated", mp), e.on("account.updated", yp), e.on("visitor.updated", bp), e.on("contact.acquired", vp)
    },
    Ae = Ap(),
    Fp = () => {
        const e = O(null),
            {
                subscribe: t,
                set: n,
                update: r
            } = e,
            s = u => {
                n(u)
            },
            i = u => {
                r(a => a ? { ...a,
                    ...u
                } : null)
            },
            o = (u, a) => {
                try {
                    Ae.getClient().update({
                        [u]: a
                    })
                } catch (d) {
                    Xe(`Update of visitor property '${u}' failed.`, String(d))
                }
            };
        return {
            subscribe: t,
            setVisitorData: s,
            updateVisitorData: i,
            updateVisitorProperty: (u, a) => {
                if (!A($e)) {
                    Xn(u, a);
                    return
                }
                i({
                    [u]: a
                }), o(u, a)
            },
            updateVisitorVariables: u => {
                if (!A($e)) {
                    Xn("variables", u);
                    return
                }
                const a = A(e);
                if (!a) return;
                const d = a.variables;
                i({
                    variables: { ...d,
                        ...u
                    }
                });
                let h = {};
                Object.keys(u).forEach(p => {
                    u[p] !== d[p] && (h = { ...h,
                        [p]: u[p]
                    })
                }), Object.keys(h).length !== 0 && o("variables", h)
            },
            updateVisitorContactData: u => {
                var p;
                if (!A($e)) {
                    Xn("contactData", {
                        properties: u
                    });
                    return
                }
                const a = A(e);
                if (!a) return;
                const d = (p = a == null ? void 0 : a.contactData) == null ? void 0 : p.properties;
                i({
                    variables: { ...d,
                        ...u
                    }
                });
                let h = {};
                Object.keys(u).forEach(y => {
                    (!d || u[y] !== d[y]) && (h = { ...h,
                        [y]: u[y]
                    })
                }), Object.keys(h).length !== 0 && o("contactData", {
                    properties: u
                })
            }
        }
    },
    Ve = Fp(),
    Sp = (e, t) => e.hasOwnProperty(t),
    dc = e => typeof e == "boolean",
    Ep = e => typeof e == "number",
    Pr = e => typeof e == "object" && e !== null && !Array.isArray(e),
    Et = e => typeof e == "string" || e instanceof String,
    mo = e => Et(e) || Ep(e) || dc(e),
    Tp = e => {
        const t = {};
        return Object.keys(e).forEach(n => {
            const r = e[n];
            mo(r) ? t[n] = r : Pr(r) && Sp(r, "value") && mo(r.value) && (t[n] = r.value)
        }), t
    },
    xp = () => {
        const e = O({}),
            {
                update: t,
                subscribe: n,
                set: r
            } = e;
        return {
            subscribe: n,
            setAgents: l => {
                r(Br("id", l))
            },
            addAgent: l => {
                t(f => ({ ...f,
                    [l.id]: l
                }))
            },
            updateAgent: (l, f) => {
                t(u => u[l] ? { ...u,
                    [l]: { ...u[l],
                        ...f
                    }
                } : u)
            },
            setVirtualAgent: l => {
                const {
                    description: f,
                    avatar: u,
                    name: a
                } = l, d = {};
                f && (d.description = f), u && (d.avatar = u), a && (d.fullname = a), t(h => (Object.keys(h).forEach(p => {
                    h[p] = { ...h[p],
                        ...d
                    }
                }), h))
            }
        }
    },
    dt = xp(),
    Ew = e => $([dt], ([t]) => t[e] ? ? null),
    Op = $([dt], ([e]) => Object.values(e).filter(t => !t.disabled)),
    Mp = $([Op, Ve], ([e, t]) => {
        const n = t == null ? void 0 : t.group;
        return !n || n === xd ? e : e.filter(r => r.groups.length === 0 || r.groups.includes(n))
    }),
    Tw = $([Mp], ([e]) => e.filter(t => t.status === me.AgentStatus.Online)),
    Dp = () => {
        const e = O([]),
            {
                subscribe: t,
                set: n,
                update: r
            } = e;
        return {
            subscribe: t,
            setAssignedAgentIds: l => {
                n(l)
            },
            addAssignedAgentId: l => {
                r(f => [...new Set([...f, l])])
            },
            removeAssignedAgentId: l => {
                r(f => f.filter(u => u !== l))
            },
            clearAssignedAgentIds: () => {
                n([])
            }
        }
    },
    gt = Dp(),
    _i = $([gt, dt], ([e, t]) => e.map(n => t[n]).filter(Boolean)),
    xw = $([_i], ([e]) => e.length > 0),
    $p = $([_i], ([e]) => e.filter(t => !t.disabled)),
    Ow = $([_i], ([e]) => e.some(t => t.status === me.AgentStatus.Online)),
    Rp = () => {
        const e = O({
                disableAttachments: !1,
                disableAuthentication: !1,
                disableInput: !1
            }),
            t = O({}),
            n = i => {
                e.update(o => ({ ...o,
                    ...i
                }))
            },
            r = i => {
                t.set(i)
            };
        return {
            subscribe: $([e, t], ([i, o]) => ({ ...i,
                ...o
            })).subscribe,
            updateGeneralOptions: n,
            setMessageOptions: r
        }
    },
    mt = Rp(),
    Mw = $([mt], ([e]) => e.disableAttachments),
    xt = O(me.AccountStatus.Offline),
    qe = O(null),
    Cs = O(0),
    wi = O(!1),
    Fn = O(null),
    mn = O(null),
    hc = O(""),
    pc = $([qe], ([e]) => e === me.ChatStatus.Pending);
$([qe], ([e]) => e !== null);
const Bp = $([qe], ([e]) => e === me.ChatStatus.Served),
    Dw = $([qe], ([e]) => e === me.ChatStatus.Open),
    $w = $([qe], ([e]) => e === me.ChatStatus.Closed),
    Rw = $([Bp, Cs], ([e, t]) => e && t === 0),
    sn = (e, {
        byVisitor: t = !1
    } = {}) => {
        e ? Cs.set(t ? 2 : 1) : Cs.set(0)
    },
    Ip = $([xt, $p], ([e, t]) => t.length === 0 ? e === me.AccountStatus.Online : t.some(n => n.status === me.AgentStatus.Online)),
    Pp = $([mt], ([e]) => e.disableAuthentication),
    Lp = () => {
        wi.set(!1), qe.set(null), sn(!1), Fn.set(null)
    },
    gc = () => {
        Fn.set(new Date().toISOString()), Ae.getClient().chatRead()
    },
    mc = () => {
        const e = _t().visibilityState === "visible";
        !A(em) || !A(ke) || !e || gc()
    },
    Np = e => ({ ...Ki,
        chatId: A(hc),
        createdAt: new Date().toISOString(),
        content: { ...Ki.content,
            data: {
                target: e
            }
        }
    }),
    Bw = () => {
        sn(!0, {
            byVisitor: !0
        }), Ae.getClient().chatClose(), Ja(), Sn() || pr()
    },
    Iw = async e => {
        await ne.addMessage(Np(e))
    },
    zp = () => {
        ne.deleteMessage(kr)
    };

function on(e) {
    return e.length === 0 ? null : e[e.length - 1]
}
const jp = e => e.slice((e.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase(),
    Up = e => {
        let t = e,
            n = 0;
        const r = ["B", "KB", "MB", "GB"];
        for (; t >= 1024 && n < r.length - 1;) t /= 1024, n++;
        return {
            size: Math.floor(t),
            unit: r[n]
        }
    },
    Pw = e => {
        const t = e.split("."),
            n = on(t);
        return n ? n.toUpperCase() : Nd
    },
    Lw = (e, t) => `${e}?name=${t}`,
    Vp = async (e, t) => {
        const n = Ae.getClient(),
            r = [];
        for (const {
                file: s
            } of e) {
            const i = await n.chatUploadInit(),
                o = new FormData;
            o.append("file", s, s.name);
            try {
                if (!(await fetch(i.url, {
                        method: "post",
                        body: o
                    })).ok) throw new Error("Upload failed");
                r.push(i.token)
            } catch {
                Xe(`File [${s.name}] upload failed`), kt("fileUpload.filesWerentProcessed")
            } finally {
                t(s)
            }
        }
        return r
    },
    qp = async e => {
        const t = Ae.getClient();
        try {
            await t.chatUploadFinish(e)
        } catch {
            Xe(`Failed to finish file upload for ${e}`)
        }
    },
    Hp = 1e3,
    As = 6e4,
    Gp = 36e5,
    yc = 864e5,
    Wp = 2628e6,
    Xp = 31536e6,
    yo = e => Math.floor(e / As) * As,
    Kp = (e, t) => yo(new Date(e).getTime()) === yo(new Date(t).getTime()),
    Zp = (e, t) => {
        const n = new Date(e),
            r = new Date(t);
        return n.getDate() === r.getDate() && n.getMonth() === r.getMonth() && n.getFullYear() === r.getFullYear()
    },
    Nw = (e, t) => e.getTime() - t.getTime(),
    Jp = new Intl.DateTimeFormat(void 0, {
        hour: "numeric",
        minute: "numeric"
    }),
    Yp = new Intl.DateTimeFormat(void 0, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    }),
    zw = e => Zp(new Date, e) ? Jp : Yp,
    Qp = () => typeof Intl < "u" && "RelativeTimeFormat" in Intl,
    eg = e => Qp() ? new Intl.RelativeTimeFormat(e, {
        numeric: "auto"
    }) : null,
    tg = [{
        unit: "year",
        amount: Xp
    }, {
        unit: "month",
        amount: Wp
    }, {
        unit: "day",
        amount: yc
    }, {
        unit: "hour",
        amount: Gp
    }, {
        unit: "minute",
        amount: As
    }, {
        unit: "second",
        amount: Hp
    }],
    jw = (e, t) => {
        const n = eg(t);
        if (!n) return oe("Relative time format not supported"), "";
        for (const {
                unit: r,
                amount: s
            } of tg) {
            if (r === "second") return n.format(0, "second");
            if (Math.abs(e) > s) return n.format(Math.round(e / s), r)
        }
        return ""
    },
    ng = (e, t = 300) => {
        let n;
        return (...s) => {
            n || (e(...s), n = setTimeout(() => n = null, t))
        }
    },
    rg = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
    sg = /[\0-\x1F\x7F-\x9F]/,
    ig = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,
    og = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;

function ag(e) {
    const t = {};
    e = e || {}, t.src_Any = rg.source, t.src_Cc = sg.source, t.src_Z = og.source, t.src_P = ig.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
    const n = "[><｜]";
    return t.src_pseudo_letter = "(?:(?!" + n + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + n + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
}

function ks(e) {
    return Array.prototype.slice.call(arguments, 1).forEach(function(n) {
        n && Object.keys(n).forEach(function(r) {
            e[r] = n[r]
        })
    }), e
}

function Lr(e) {
    return Object.prototype.toString.call(e)
}

function cg(e) {
    return Lr(e) === "[object String]"
}

function ug(e) {
    return Lr(e) === "[object Object]"
}

function lg(e) {
    return Lr(e) === "[object RegExp]"
}

function bo(e) {
    return Lr(e) === "[object Function]"
}

function fg(e) {
    return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
}
const bc = {
    fuzzyLink: !0,
    fuzzyEmail: !0,
    fuzzyIP: !1
};

function dg(e) {
    return Object.keys(e || {}).reduce(function(t, n) {
        return t || bc.hasOwnProperty(n)
    }, !1)
}
const hg = {
        "http:": {
            validate: function(e, t, n) {
                const r = e.slice(t);
                return n.re.http || (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i")), n.re.http.test(r) ? r.match(n.re.http)[0].length : 0
            }
        },
        "https:": "http:",
        "ftp:": "http:",
        "//": {
            validate: function(e, t, n) {
                const r = e.slice(t);
                return n.re.no_http || (n.re.no_http = new RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path, "i")), n.re.no_http.test(r) ? t >= 3 && e[t - 3] === ":" || t >= 3 && e[t - 3] === "/" ? 0 : r.match(n.re.no_http)[0].length : 0
            }
        },
        "mailto:": {
            validate: function(e, t, n) {
                const r = e.slice(t);
                return n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i")), n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0
            }
        }
    },
    pg = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
    gg = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

function mg(e) {
    e.__index__ = -1, e.__text_cache__ = ""
}

function yg(e) {
    return function(t, n) {
        const r = t.slice(n);
        return e.test(r) ? r.match(e)[0].length : 0
    }
}

function vo() {
    return function(e, t) {
        t.normalize(e)
    }
}

function lr(e) {
    const t = e.re = ag(e.__opts__),
        n = e.__tlds__.slice();
    e.onCompile(), e.__tlds_replaced__ || n.push(pg), n.push(t.src_xn), t.src_tlds = n.join("|");

    function r(c) {
        return c.replace("%TLDS%", t.src_tlds)
    }
    t.email_fuzzy = RegExp(r(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(r(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(r(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(r(t.tpl_host_fuzzy_test), "i");
    const s = [];
    e.__compiled__ = {};

    function i(c, l) {
        throw new Error('(LinkifyIt) Invalid schema "' + c + '": ' + l)
    }
    Object.keys(e.__schemas__).forEach(function(c) {
        const l = e.__schemas__[c];
        if (l === null) return;
        const f = {
            validate: null,
            link: null
        };
        if (e.__compiled__[c] = f, ug(l)) {
            lg(l.validate) ? f.validate = yg(l.validate) : bo(l.validate) ? f.validate = l.validate : i(c, l), bo(l.normalize) ? f.normalize = l.normalize : l.normalize ? i(c, l) : f.normalize = vo();
            return
        }
        if (cg(l)) {
            s.push(c);
            return
        }
        i(c, l)
    }), s.forEach(function(c) {
        e.__compiled__[e.__schemas__[c]] && (e.__compiled__[c].validate = e.__compiled__[e.__schemas__[c]].validate, e.__compiled__[c].normalize = e.__compiled__[e.__schemas__[c]].normalize)
    }), e.__compiled__[""] = {
        validate: null,
        normalize: vo()
    };
    const o = Object.keys(e.__compiled__).filter(function(c) {
        return c.length > 0 && e.__compiled__[c]
    }).map(fg).join("|");
    e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"), mg(e)
}

function bg(e, t) {
    const n = e.__index__,
        r = e.__last_index__,
        s = e.__text_cache__.slice(n, r);
    this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = r + t, this.raw = s, this.text = s, this.url = s
}

function Fs(e, t) {
    const n = new bg(e, t);
    return e.__compiled__[n.schema].normalize(n, e), n
}

function Te(e, t) {
    if (!(this instanceof Te)) return new Te(e, t);
    t || dg(e) && (t = e, e = {}), this.__opts__ = ks({}, bc, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = ks({}, hg, e), this.__compiled__ = {}, this.__tlds__ = gg, this.__tlds_replaced__ = !1, this.re = {}, lr(this)
}
Te.prototype.add = function(t, n) {
    return this.__schemas__[t] = n, lr(this), this
};
Te.prototype.set = function(t) {
    return this.__opts__ = ks(this.__opts__, t), this
};
Te.prototype.test = function(t) {
    if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return !1;
    let n, r, s, i, o, c, l, f, u;
    if (this.re.schema_test.test(t)) {
        for (l = this.re.schema_search, l.lastIndex = 0;
            (n = l.exec(t)) !== null;)
            if (i = this.testSchemaAt(t, n[2], l.lastIndex), i) {
                this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + i;
                break
            }
    }
    return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (f = t.search(this.re.host_fuzzy_test), f >= 0 && (this.__index__ < 0 || f < this.__index__) && (r = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (o = r.index + r[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = r.index + r[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (u = t.indexOf("@"), u >= 0 && (s = t.match(this.re.email_fuzzy)) !== null && (o = s.index + s[1].length, c = s.index + s[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && c > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = c))), this.__index__ >= 0
};
Te.prototype.pretest = function(t) {
    return this.re.pretest.test(t)
};
Te.prototype.testSchemaAt = function(t, n, r) {
    return this.__compiled__[n.toLowerCase()] ? this.__compiled__[n.toLowerCase()].validate(t, r, this) : 0
};
Te.prototype.match = function(t) {
    const n = [];
    let r = 0;
    this.__index__ >= 0 && this.__text_cache__ === t && (n.push(Fs(this, r)), r = this.__last_index__);
    let s = r ? t.slice(r) : t;
    for (; this.test(s);) n.push(Fs(this, r)), s = s.slice(this.__last_index__), r += this.__last_index__;
    return n.length ? n : null
};
Te.prototype.matchAtStart = function(t) {
    if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return null;
    const n = this.re.schema_at_start.exec(t);
    if (!n) return null;
    const r = this.testSchemaAt(t, n[2], n[0].length);
    return r ? (this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + r, Fs(this, 0)) : null
};
Te.prototype.tlds = function(t, n) {
    return t = Array.isArray(t) ? t : [t], n ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(r, s, i) {
        return r !== i[s - 1]
    }).reverse(), lr(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, lr(this), this)
};
Te.prototype.normalize = function(t) {
    t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url)
};
Te.prototype.onCompile = function() {};
const vc = ["aaa", "aarp", "abb", "abbott", "abbvie", "abc", "able", "abogado", "abudhabi", "ac", "academy", "accenture", "accountant", "accountants", "aco", "actor", "ad", "ads", "adult", "ae", "aeg", "aero", "aetna", "af", "afl", "africa", "ag", "agakhan", "agency", "ai", "aig", "airbus", "airforce", "airtel", "akdn", "al", "alibaba", "alipay", "allfinanz", "allstate", "ally", "alsace", "alstom", "am", "amazon", "americanexpress", "americanfamily", "amex", "amfam", "amica", "amsterdam", "analytics", "android", "anquan", "anz", "ao", "aol", "apartments", "app", "apple", "aq", "aquarelle", "ar", "arab", "aramco", "archi", "army", "arpa", "art", "arte", "as", "asda", "asia", "associates", "at", "athleta", "attorney", "au", "auction", "audi", "audible", "audio", "auspost", "author", "auto", "autos", "aw", "aws", "ax", "axa", "az", "azure", "ba", "baby", "baidu", "banamex", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "baseball", "basketball", "bauhaus", "bayern", "bb", "bbc", "bbt", "bbva", "bcg", "bcn", "bd", "be", "beats", "beauty", "beer", "bentley", "berlin", "best", "bestbuy", "bet", "bf", "bg", "bh", "bharti", "bi", "bible", "bid", "bike", "bing", "bingo", "bio", "biz", "bj", "black", "blackfriday", "blockbuster", "blog", "bloomberg", "blue", "bm", "bms", "bmw", "bn", "bnpparibas", "bo", "boats", "boehringer", "bofa", "bom", "bond", "boo", "book", "booking", "bosch", "bostik", "boston", "bot", "boutique", "box", "br", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "bs", "bt", "build", "builders", "business", "buy", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "cafe", "cal", "call", "calvinklein", "cam", "camera", "camp", "canon", "capetown", "capital", "capitalone", "car", "caravan", "cards", "care", "career", "careers", "cars", "casa", "case", "cash", "casino", "cat", "catering", "catholic", "cba", "cbn", "cbre", "cc", "cd", "center", "ceo", "cern", "cf", "cfa", "cfd", "cg", "ch", "chanel", "channel", "charity", "chase", "chat", "cheap", "chintai", "christmas", "chrome", "church", "ci", "cipriani", "circle", "cisco", "citadel", "citi", "citic", "city", "ck", "cl", "claims", "cleaning", "click", "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "cm", "cn", "co", "coach", "codes", "coffee", "college", "cologne", "com", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cool", "coop", "corsica", "country", "coupon", "coupons", "courses", "cpa", "cr", "credit", "creditcard", "creditunion", "cricket", "crown", "crs", "cruise", "cruises", "cu", "cuisinella", "cv", "cw", "cx", "cy", "cymru", "cyou", "cz", "dabur", "dad", "dance", "data", "date", "dating", "datsun", "day", "dclk", "dds", "de", "deal", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "dhl", "diamonds", "diet", "digital", "direct", "directory", "discount", "discover", "dish", "diy", "dj", "dk", "dm", "dnp", "do", "docs", "doctor", "dog", "domains", "dot", "download", "drive", "dtv", "dubai", "dunlop", "dupont", "durban", "dvag", "dvr", "dz", "earth", "eat", "ec", "eco", "edeka", "edu", "education", "ee", "eg", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epson", "equipment", "er", "ericsson", "erni", "es", "esq", "estate", "et", "eu", "eurovision", "eus", "events", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "farmers", "fashion", "fast", "fedex", "feedback", "ferrari", "ferrero", "fi", "fidelity", "fido", "film", "final", "finance", "financial", "fire", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "fj", "fk", "flickr", "flights", "flir", "florist", "flowers", "fly", "fm", "fo", "foo", "food", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "fr", "free", "fresenius", "frl", "frogans", "frontier", "ftr", "fujitsu", "fun", "fund", "furniture", "futbol", "fyi", "ga", "gal", "gallery", "gallo", "gallup", "game", "games", "gap", "garden", "gay", "gb", "gbiz", "gd", "gdn", "ge", "gea", "gent", "genting", "george", "gf", "gg", "ggee", "gh", "gi", "gift", "gifts", "gives", "giving", "gl", "glass", "gle", "global", "globo", "gm", "gmail", "gmbh", "gmo", "gmx", "gn", "godaddy", "gold", "goldpoint", "golf", "goo", "goodyear", "goog", "google", "gop", "got", "gov", "gp", "gq", "gr", "grainger", "graphics", "gratis", "green", "gripe", "grocery", "group", "gs", "gt", "gu", "gucci", "guge", "guide", "guitars", "guru", "gw", "gy", "hair", "hamburg", "hangout", "haus", "hbo", "hdfc", "hdfcbank", "health", "healthcare", "help", "helsinki", "here", "hermes", "hiphop", "hisamitsu", "hitachi", "hiv", "hk", "hkt", "hm", "hn", "hockey", "holdings", "holiday", "homedepot", "homegoods", "homes", "homesense", "honda", "horse", "hospital", "host", "hosting", "hot", "hotels", "hotmail", "house", "how", "hr", "hsbc", "ht", "hu", "hughes", "hyatt", "hyundai", "ibm", "icbc", "ice", "icu", "id", "ie", "ieee", "ifm", "ikano", "il", "im", "imamat", "imdb", "immo", "immobilien", "in", "inc", "industries", "infiniti", "info", "ing", "ink", "institute", "insurance", "insure", "int", "international", "intuit", "investments", "io", "ipiranga", "iq", "ir", "irish", "is", "ismaili", "ist", "istanbul", "it", "itau", "itv", "jaguar", "java", "jcb", "je", "jeep", "jetzt", "jewelry", "jio", "jll", "jm", "jmp", "jnj", "jo", "jobs", "joburg", "jot", "joy", "jp", "jpmorgan", "jprs", "juegos", "juniper", "kaufen", "kddi", "ke", "kerryhotels", "kerrylogistics", "kerryproperties", "kfh", "kg", "kh", "ki", "kia", "kids", "kim", "kindle", "kitchen", "kiwi", "km", "kn", "koeln", "komatsu", "kosher", "kp", "kpmg", "kpn", "kr", "krd", "kred", "kuokgroup", "kw", "ky", "kyoto", "kz", "la", "lacaixa", "lamborghini", "lamer", "lancaster", "land", "landrover", "lanxess", "lasalle", "lat", "latino", "latrobe", "law", "lawyer", "lb", "lc", "lds", "lease", "leclerc", "lefrak", "legal", "lego", "lexus", "lgbt", "li", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "lilly", "limited", "limo", "lincoln", "link", "lipsy", "live", "living", "lk", "llc", "llp", "loan", "loans", "locker", "locus", "lol", "london", "lotte", "lotto", "love", "lpl", "lplfinancial", "lr", "ls", "lt", "ltd", "ltda", "lu", "lundbeck", "luxe", "luxury", "lv", "ly", "ma", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "map", "market", "marketing", "markets", "marriott", "marshalls", "mattel", "mba", "mc", "mckinsey", "md", "me", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "merckmsd", "mg", "mh", "miami", "microsoft", "mil", "mini", "mint", "mit", "mitsubishi", "mk", "ml", "mlb", "mls", "mm", "mma", "mn", "mo", "mobi", "mobile", "moda", "moe", "moi", "mom", "monash", "money", "monster", "mormon", "mortgage", "moscow", "moto", "motorcycles", "mov", "movie", "mp", "mq", "mr", "ms", "msd", "mt", "mtn", "mtr", "mu", "museum", "music", "mv", "mw", "mx", "my", "mz", "na", "nab", "nagoya", "name", "natura", "navy", "nba", "nc", "ne", "nec", "net", "netbank", "netflix", "network", "neustar", "new", "news", "next", "nextdirect", "nexus", "nf", "nfl", "ng", "ngo", "nhk", "ni", "nico", "nike", "nikon", "ninja", "nissan", "nissay", "nl", "no", "nokia", "norton", "now", "nowruz", "nowtv", "np", "nr", "nra", "nrw", "ntt", "nu", "nyc", "nz", "obi", "observer", "office", "okinawa", "olayan", "olayangroup", "ollo", "om", "omega", "one", "ong", "onl", "online", "ooo", "open", "oracle", "orange", "org", "organic", "origins", "osaka", "otsuka", "ott", "ovh", "pa", "page", "panasonic", "paris", "pars", "partners", "parts", "party", "pay", "pccw", "pe", "pet", "pf", "pfizer", "pg", "ph", "pharmacy", "phd", "philips", "phone", "photo", "photography", "photos", "physio", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pioneer", "pizza", "pk", "pl", "place", "play", "playstation", "plumbing", "plus", "pm", "pn", "pnc", "pohl", "poker", "politie", "porn", "post", "pr", "pramerica", "praxi", "press", "prime", "pro", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "pru", "prudential", "ps", "pt", "pub", "pw", "pwc", "py", "qa", "qpon", "quebec", "quest", "racing", "radio", "re", "read", "realestate", "realtor", "realty", "recipes", "red", "redstone", "redumbrella", "rehab", "reise", "reisen", "reit", "reliance", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "richardli", "ricoh", "ril", "rio", "rip", "ro", "rocks", "rodeo", "rogers", "room", "rs", "rsvp", "ru", "rugby", "ruhr", "run", "rw", "rwe", "ryukyu", "sa", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsclub", "samsung", "sandvik", "sandvikcoromant", "sanofi", "sap", "sarl", "sas", "save", "saxo", "sb", "sbi", "sbs", "sc", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scot", "sd", "se", "search", "seat", "secure", "security", "seek", "select", "sener", "services", "seven", "sew", "sex", "sexy", "sfr", "sg", "sh", "shangrila", "sharp", "shaw", "shell", "shia", "shiksha", "shoes", "shop", "shopping", "shouji", "show", "si", "silk", "sina", "singles", "site", "sj", "sk", "ski", "skin", "sky", "skype", "sl", "sling", "sm", "smart", "smile", "sn", "sncf", "so", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "spa", "space", "sport", "spot", "sr", "srl", "ss", "st", "stada", "staples", "star", "statebank", "statefarm", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", "style", "su", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "sv", "swatch", "swiss", "sx", "sy", "sydney", "systems", "sz", "tab", "taipei", "talk", "taobao", "target", "tatamotors", "tatar", "tattoo", "tax", "taxi", "tc", "tci", "td", "tdk", "team", "tech", "technology", "tel", "temasek", "tennis", "teva", "tf", "tg", "th", "thd", "theater", "theatre", "tiaa", "tickets", "tienda", "tips", "tires", "tirol", "tj", "tjmaxx", "tjx", "tk", "tkmaxx", "tl", "tm", "tmall", "tn", "to", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "tr", "trade", "trading", "training", "travel", "travelers", "travelersinsurance", "trust", "trv", "tt", "tube", "tui", "tunes", "tushu", "tv", "tvs", "tw", "tz", "ua", "ubank", "ubs", "ug", "uk", "unicom", "university", "uno", "uol", "ups", "us", "uy", "uz", "va", "vacations", "vana", "vanguard", "vc", "ve", "vegas", "ventures", "verisign", "vermögensberater", "vermögensberatung", "versicherung", "vet", "vg", "vi", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "visa", "vision", "viva", "vivo", "vlaanderen", "vn", "vodka", "volvo", "vote", "voting", "voto", "voyage", "vu", "wales", "walmart", "walter", "wang", "wanggou", "watch", "watches", "weather", "weatherchannel", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "wf", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "winners", "wme", "wolterskluwer", "woodside", "work", "works", "world", "wow", "ws", "wtc", "wtf", "xbox", "xerox", "xihuan", "xin", "xxx", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "ye", "yodobashi", "yoga", "yokohama", "you", "youtube", "yt", "yun", "za", "zappos", "zara", "zero", "zip", "zm", "zone", "zuerich", "zw", "ελ", "ευ", "бг", "бел", "дети", "ею", "католик", "ком", "мкд", "мон", "москва", "онлайн", "орг", "рус", "рф", "сайт", "срб", "укр", "қаз", "հայ", "ישראל", "קום", "ابوظبي", "ارامكو", "الاردن", "البحرين", "الجزائر", "السعودية", "العليان", "المغرب", "امارات", "ایران", "بارت", "بازار", "بيتك", "بھارت", "تونس", "سودان", "سورية", "شبكة", "عراق", "عرب", "عمان", "فلسطين", "قطر", "كاثوليك", "كوم", "مصر", "مليسيا", "موريتانيا", "موقع", "همراه", "پاکستان", "ڀارت", "कॉम", "नेट", "भारत", "भारतम्", "भारोत", "संगठन", "বাংলা", "ভারত", "ভাৰত", "ਭਾਰਤ", "ભારત", "ଭାରତ", "இந்தியா", "இலங்கை", "சிங்கப்பூர்", "భారత్", "ಭಾರತ", "ഭാരതം", "ලංකා", "คอม", "ไทย", "ລາວ", "გე", "みんな", "アマゾン", "クラウド", "グーグル", "コム", "ストア", "セール", "ファッション", "ポイント", "世界", "中信", "中国", "中國", "中文网", "亚马逊", "企业", "佛山", "信息", "健康", "八卦", "公司", "公益", "台湾", "台灣", "商城", "商店", "商标", "嘉里", "嘉里大酒店", "在线", "大拿", "天主教", "娱乐", "家電", "广东", "微博", "慈善", "我爱你", "手机", "招聘", "政务", "政府", "新加坡", "新闻", "时尚", "書籍", "机构", "淡马锡", "游戏", "澳門", "点看", "移动", "组织机构", "网址", "网店", "网站", "网络", "联通", "谷歌", "购物", "通販", "集团", "電訊盈科", "飞利浦", "食品", "餐厅", "香格里拉", "香港", "닷넷", "닷컴", "삼성", "한국"],
    vg = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/,
    Uw = /((?:www.)?[^\s.]+\.[^\s/]+\/[^\s.]+)/,
    _o = /[&<>"']/g,
    rs = e => {
        const t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            n = RegExp(_o.source);
        return e && n.test(e) ? e.replace(_o, r => t[r]) : e || ""
    },
    _g = "overflow: hidden; display: -webkit-inline-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; line-clamp: 1; word-break: break-all;",
    wg = new Te().tlds(vc).set({
        fuzzyIP: !0
    }),
    Cg = new Te().tlds(vc),
    Ag = (e, t, n) => {
        const r = ge().location.hostname,
            s = r.length > 0 && e.includes(r) ? "_parent" : "_blank";
        return `<a href="${e}" target="${s}" rel="noreferrer noopener" title="${e}" style="${n!=null&&n.clamp&&!(n!=null&&n.replaceText)?_g:""}">${t}</a>`
    },
    Vw = (e, t) => {
        if (e === "") return e;
        const n = wg.match(e);
        if (!n) return rs(e);
        let r = "",
            s = 0;
        return n.forEach(i => {
            var u;
            let o = "",
                c = "";
            const l = _c(e, i),
                f = (t == null ? void 0 : t.clamp) && i.text.length > 30 && !l;
            i.index > s && (o = e.substring(s, i.index)), c = Ag(i.url, i.text, { ...t,
                clamp: f
            }), s = i.lastIndex, l && (o = o.substring(0, o.length - 1), s += 1), f && !kg(e, i) && (c = `
${c}
`, o = o.trimEnd(), (u = e[s]) != null && u.match(/\s/) && (s += 1)), r += rs(o) + c
        }), e.length > s && (r += rs(e.substring(s))), r
    },
    _c = (e, t) => e[t.index - 1] === '"' && e[t.lastIndex] === '"',
    kg = (e, t) => !!(t.index <= 1 && e.substring(t.lastIndex, t.lastIndex + 3).match(/[\n\r]+/) || e.substring(t.index - 3, t.index).match(/[\n\r]+/) && e.substring(t.lastIndex, t.lastIndex + 3).match(/[\n\r]+/) || e.substring(t.index - 3, t.index).match(/[\n\r]+/) && t.lastIndex > e.length - 3 || t.index <= 1 && t.lastIndex >= e.length - 2),
    wc = e => {
        const t = ["mailto:", "ftp:", "//"],
            n = Cg.match(e);
        return n ? n.filter(r => !t.includes(r.schema)) : null
    },
    Fg = () => Cr("cards"),
    Sg = e => {
        Xs({ ...e
        }, "cards")
    },
    Eg = async e => {
        const t = new Headers,
            {
                widgetApiUrl: n
            } = M.getOptions();
        t.append("Content-Type", "application/json");
        const r = JSON.stringify({
            links: e
        });
        try {
            const s = await fetch(`${n}/links/preview`, {
                method: "POST",
                headers: t,
                body: r
            });
            return s.ok && s.json ? await s.json() : null
        } catch {
            return null
        }
    },
    Tg = e => {
        const t = e.find(n => n.type === "open_url");
        return (t == null ? void 0 : t.value) || ""
    },
    xg = e => {
        const t = e.filter(n => n.title && n.image && !Mg(Tg(n.actions)));
        return t.length && e.length > 1 ? e : t.length === 1 ? t : []
    },
    Og = e => {
        const t = new Date().getTime();
        return Object.keys(e).forEach(r => {
            (!e[r].expiration || e[r].expiration && e[r].expiration < t) && delete e[r]
        }), e
    },
    Mg = e => {
        const {
            acceptedFileExtensions: t
        } = A(mi), n = e.match(/(\.)([^.]{3,4})$/m);
        return n && n[2] && t.includes(n[2])
    };
let wo = !1;
const Ss = O(),
    Es = O(!1),
    Ts = O(!1),
    Dg = (e, t, n) => {
        const r = {},
            s = new Date().getTime() + yc;
        e.forEach((o, c) => r[o] = {
            expiration: s,
            card: t[c]
        });
        const i = { ...n,
            ...r
        };
        Ss.set(i), Sg(i)
    },
    $g = async (e, t, n = !1) => {
        let r = [];
        const s = {
            type: "cards",
            layout: "carousel",
            items: []
        };
        wo || (Ss.set(Fg()), wo = !0);
        const i = wc(e);
        if (!i) return null;
        const o = Og(A(Ss)),
            c = [];
        if (i.forEach(l => {
                _c(e, l) || (o[l.url] ? r.push(o[l.url].card) : c.push(l.url))
            }), c.length > 0) {
            t && Es.set(!0), n && Ts.set(!0);
            const l = await Eg(c);
            l && (Dg(c, l, o), r = [...r, ...l])
        }
        return s.items = xg(r), Es.set(!1), Ts.set(!1), s.items.length > 0 ? s : null
    };
var Ne = (e => (e.ContactMessage = "contact-message", e.AgentMessage = "agent-message", e.BotMessage = "bot-message", e.BotReplies = "bot-replies", e))(Ne || {});
const Co = async ({
        text: e,
        quickReply: t
    }) => {
        try {
            return await Ae.getClient().chatMessage({
                content: {
                    type: x.MessageContentType.Text,
                    text: e
                },
                quickReply: t
            }) ? ? null
        } catch {
            return null
        }
    },
    Nr = e => e.subType === x.MessageSubType.Bot || e.subType === x.MessageSubType.Trigger,
    Rg = e => e.subType === x.MessageSubType.System,
    zr = e => e.subType === x.MessageSubType.Agent || Nr(e),
    Bg = (e, t) => new Date(e.createdAt).getTime() - new Date(t.createdAt).getTime(),
    Cc = (e, t) => t === Ne.BotReplies ? `${e.id}-replies` : e.id,
    Ac = e => {
        const t = {
                isRight: !1,
                isLeft: !1
            },
            n = {
                isPrimary: !1,
                isSecondary: !1
            };
        switch (e) {
            case Ne.ContactMessage:
                t.isRight = !0, n.isPrimary = !0;
                break;
            default:
                t.isLeft = !0, n.isSecondary = !0
        }
        return {
            align: t,
            variant: n
        }
    },
    Ig = e => !!e.agentId || e.subType === x.MessageSubType.Bot && e.content.type !== x.MessageContentType.TicketForm,
    kc = (e, t) => e.subType === x.MessageSubType.System || t === Ne.BotReplies || e.content.type === x.MessageContentType.TicketForm,
    Pg = e => {
        const t = [];
        let n = null,
            r = null;
        for (const s of e) {
            if (s.content.type === x.MessageContentType.RateForm && !Sn()) continue;
            n && !Vg(s, n) && (t.push(n), n = null, r = null), n = n || Lg(s);
            const i = Ao(s, n);
            if (r) {
                const c = Ec(r),
                    l = Fc(r);
                i.neighbors.hasTop = c, l.any.neighbors.hasBottom = c, l.attachmentContext && (l.attachmentContext.extraSpaces.hasBottom = Gn(l.attachmentContext.attachment))
            }
            const o = jg(s);
            if (o && zg(o, i, r), n.messagesContext.push(i), r = i, (Nr(s) || Rg(s)) && Xg(s)) {
                t.push(n);
                const c = Ng(s);
                c.messagesContext.push(Ao(s, c)), t.push(c), n = null
            }
        }
        return n && t.push(n), t
    },
    Lg = e => {
        const t = Sc(e),
            n = e.subType === x.MessageSubType.Bot || e.subType === x.MessageSubType.Trigger,
            {
                align: r,
                variant: s
            } = Ac(t);
        return {
            type: t,
            isBot: n,
            id: Cc(e, t),
            date: e.createdAt,
            agentId: e.agentId,
            align: r,
            variant: s,
            messagesContext: [],
            showAvatar: Ig(e),
            useFullWidth: kc(e, t)
        }
    },
    Ng = e => {
        const t = Ne.BotReplies,
            {
                align: n,
                variant: r
            } = Ac(t);
        return {
            type: Ne.BotReplies,
            isBot: !0,
            id: Cc(e, t),
            date: e.createdAt,
            agentId: e.agentId,
            align: n,
            variant: r,
            messagesContext: [],
            showAvatar: !1,
            useFullWidth: kc(e, t)
        }
    },
    Ao = (e, t) => ({
        group: t,
        message: e,
        neighbors: {
            hasTop: !1,
            hasBottom: !1
        },
        attachmentsContext: []
    }),
    zg = (e, t, n) => {
        let r = null;
        for (const s of e) {
            const i = ko(s),
                o = {
                    hasTop: !1,
                    hasBottom: !1
                },
                c = Gn(s),
                l = {
                    hasTop: c,
                    hasBottom: !1
                };
            if (r) {
                const u = ko(r.attachment),
                    a = Gn(r.attachment);
                r.neighbors.hasBottom = u && i, o.hasTop = u && i, r.extraSpaces.hasBottom = !c && a
            } else if (t.neighbors.hasBottom = i, o.hasTop = i, Ug(t.message))
                if (o.hasTop = !1, t.neighbors.hasTop = !1, t.neighbors.hasBottom = !1, n) {
                    const u = Ec(n),
                        a = Fc(n);
                    o.hasTop = u && i, a.any.neighbors.hasBottom = u && i;
                    const d = a.attachmentContext;
                    d && (d.extraSpaces.hasBottom = !c && Gn(d.attachment))
                } else l.hasTop = !1;
            const f = {
                attachment: s,
                neighbors: o,
                extraSpaces: l,
                messageContext: t
            };
            t.attachmentsContext.push(f), r = { ...f
            }
        }
    },
    Fc = e => {
        const t = on(e.attachmentsContext) || void 0;
        return {
            attachmentContext: t,
            any: t || e
        }
    },
    jg = e => {
        var t;
        return e ? ((t = e.content) == null ? void 0 : t.type) === x.MessageContentType.Upload ? [e.content.data] : e.attachments : []
    },
    Ug = e => !e.content.text,
    Vg = (e, t) => {
        const n = Sc(e),
            r = n === Ne.AgentMessage && e.agentId === t.agentId,
            s = n === Ne.ContactMessage,
            i = e.subType !== x.MessageSubType.Bot || (e.content.quickReplies || []).length === 0;
        return t.type === n && (r || s) && i && Kp(t.date, e.createdAt)
    },
    Sc = e => {
        switch (e.subType) {
            case x.MessageSubType.Agent:
                return Ne.AgentMessage;
            case x.MessageSubType.Contact:
                return Ne.ContactMessage;
            case x.MessageSubType.Bot:
                return Ne.BotMessage
        }
        return null
    },
    Ec = e => {
        const t = e.attachmentsContext.length;
        return !(t > 0 && e.attachmentsContext[t - 1].attachment.type === x.AttachmentType.File)
    },
    ko = e => e.type !== x.AttachmentType.File && e.type !== x.AttachmentType.Cards,
    Gn = e => !!e && (e.type === x.AttachmentType.File || e.type === x.AttachmentType.Cards),
    Tc = () => {
        const e = py();
        e.volume = Ed, e.addEventListener("canplaythrough", () => {
            e.play().catch(t => oe("Could not play message sound.", t))
        })
    },
    qg = ng(Tc, Td),
    Hg = e => e.filter(t => t.type === x.MessageType.Message && (t.subType === x.MessageSubType.Agent || t.subType === x.MessageSubType.Contact)),
    Gg = (e, t = !0) => {
        const n = e.reduce((r, s) => (r.push(s), s.content.type === x.MessageContentType.ChatClose || s.content.type === x.MessageContentType.ChatVisitorClose ? [] : r), []);
        return t ? n.filter(r => r.type === x.MessageType.Message && r.subType !== x.MessageSubType.System) : n
    },
    Wg = e => {
        const t = {};
        return e.forEach(n => {
            n.trigger && (t[n.trigger.id] = {
                sent: !0
            })
        }), t
    },
    Xg = e => !!(e.content.quickReplies && e.content.quickReplies.length > 0),
    xs = async (e, t = !1) => {
        var s;
        const n = zr(e),
            r = !t && n;
        if ((s = e.content) != null && s.text && M.getOptions().urlCardsEnabled) {
            const i = await $g(e.content.text, e.subType === x.MessageSubType.Contact, r);
            i && i.items.length > 0 && e.attachments.push(i)
        }
        return wi.set(!1), e
    },
    Kg = async e => (M.getOptions().urlCardsEnabled && await Promise.all(e.map(async t => await xs(t))), e),
    qw = e => e.findIndex(t => t.message.channel.type === "email") > -1,
    Hw = e => {
        var n, r;
        const t = e.find(s => {
            var i, o;
            return (o = (i = s.message) == null ? void 0 : i.trigger) == null ? void 0 : o.identityId
        });
        return (r = (n = t == null ? void 0 : t.message) == null ? void 0 : n.trigger) == null ? void 0 : r.identityId
    },
    Zg = () => {
        const e = O({}),
            {
                subscribe: t,
                update: n,
                set: r
            } = e,
            s = async d => {
                r(Br("id", await Kg(d)))
            },
            i = async d => {
                const h = await xs(d);
                Nr(d) && Ci.set(!1), n(p => ({ ...p,
                    [d.id]: h
                })), Yg(h)
            },
            o = async d => {
                if (!A(Ye).some(y => y.id === d.id)) return;
                const p = A(ki) === d.id ? await xs(d, !0) : d;
                n(y => ({ ...y,
                    [d.id]: p
                }))
            };
        return {
            subscribe: t,
            setMessages: s,
            addMessage: i,
            deleteMessage: d => {
                n(h => {
                    const {
                        [d]: p, ...y
                    } = h;
                    return y
                })
            },
            replaceMessage: o,
            updateMessageRating: d => {
                var h;
                A(mn) === ((h = d.content.data) == null ? void 0 : h.target) && zp(), n(p => !d || d.content.type !== x.MessageContentType.RateForm ? { ...p
                } : (p[d.id] || Fi(d.id), { ...p,
                    [d.id]: d
                }))
            },
            sendMessage: async (d, h) => {
                Os.set(d);
                const p = await Co({
                    text: d
                });
                p && (Os.set(null), await i(p), ie.emit("messageSent", p), ay(A(xt))), await Promise.all(h.map(y => qp(y)))
            },
            sendBotReply: async (d, h, p) => {
                const y = await Co({
                    text: h,
                    quickReply: {
                        replyTo: d,
                        payload: p
                    }
                });
                p.isGoBackButton || zm(h), y && await o(y)
            },
            clearMessages: () => {
                r({})
            }
        }
    },
    ne = Zg(),
    Jg = e => {
        A(yt) || Ri(), d0(), setTimeout(() => {
            ne.addMessage(e), Hc()
        }, 1600)
    },
    Yg = e => {
        e && A(fr) && A(yt) && !(A(Lc) && A(ke)) && gy(e) && qg()
    },
    Ci = O(!1),
    xc = $([ne], ([e]) => {
        const t = Object.values(e).filter(zr);
        if (!t) return null;
        const n = t.sort((r, s) => new Date(r.createdAt).getTime() - new Date(s.createdAt).getTime());
        return on(n)
    }),
    Ai = $([ne, Fn], ([e, t]) => {
        const n = Object.values(e).filter(zr);
        return t ? n.filter(r => new Date(r.createdAt) > new Date(t)) : n
    }),
    Qg = $([Ai], ([e]) => on(e)),
    Oc = $([Ai], ([e]) => e.length),
    em = $([Oc], ([e]) => e > 0),
    Ye = $([ne], ([e]) => Object.values(e).sort(Bg)),
    Gw = $([Ye], ([e]) => Pg(e)),
    ki = $([Ye], ([e]) => {
        const t = on(e);
        return (t == null ? void 0 : t.id) ? ? null
    }),
    Ww = $([ne], ([e]) => {
        var r;
        const t = Object.values(e).filter(s => {
                var i;
                return typeof((i = s.widgetOptions) == null ? void 0 : i.disableInput) == "boolean"
            }),
            n = on(t);
        return ((r = n == null ? void 0 : n.widgetOptions) == null ? void 0 : r.disableInput) ? ? !1
    }),
    Mc = $([ne], ([e]) => Object.values(e).filter(t => t.subType === "contact" || t.subType === "agent").length > 0),
    Xw = $([ne], ([e]) => Object.values(e).filter(t => t.subType === x.MessageSubType.Contact).length > 0),
    Kw = $([ne, ya], ([e, t], n) => {
        var r, s, i;
        if (t) {
            const o = e[t];
            o && o.content.type === x.MessageContentType.RateForm && n({
                messageId: o.id,
                value: (r = o.content.data) == null ? void 0 : r.value,
                text: (s = o.content.data) == null ? void 0 : s.text,
                target: (i = o.content.data) == null ? void 0 : i.target
            })
        } else n(null)
    }),
    tm = $([Ye], ([e]) => e.slice().reverse().find(n => n.subType === x.MessageSubType.Contact) || null),
    Os = O(null),
    Sn = () => !!M.getOptions().ratingEnabled,
    Fi = e => {
        ya.set(e), hi($r.ChatRating)
    },
    Zw = async ({
        messageId: e,
        rating: {
            text: t,
            value: n
        },
        onSuccess: r
    }) => {
        const s = A(ne)[e],
            i = e === kr ? void 0 : e;
        try {
            await Ae.getClient().chatRate({
                messageId: i,
                value: n,
                text: t ? ? void 0
            }), r && r()
        } catch (o) {
            s && await ne.replaceMessage(s), Xe("Chat rating failed.", String(o)), kt(A(we)("form.submit.error"))
        }
    },
    Jw = e => {
        const {
            widgetV3Url: t
        } = M.getOptions();
        return `${t}/assets/images/rating/${e}.svg`
    },
    nm = /(G-([A-Z,0-9]*))/g,
    it = [];
let Si = !1,
    ve, Ei = !1,
    yn;
const Ms = e => e.match(nm),
    rm = () => {
        const {
            googleAnalyticsEnabled: e
        } = M.getOptions();
        ve = window.top || window, e && (ve.gtag && (yn = ve.gtag, Ei = !0), ie.on("analyticsConsentChanged", sm), !Si && ua() && Dc())
    },
    sm = e => {
        !Si && e && Dc()
    },
    Dc = () => {
        const {
            gaKey: e,
            gaOptions: t,
            googleAnalyticsManual: n,
            googleAnalyticsMeasurementIds: r
        } = M.getOptions(), s = t || {
            cookieDomain: "auto"
        };
        if (e) Ms(e) && it.push({
            key: e,
            options: s
        });
        else if (n && r) r.forEach(i => {
            Ms(i) && it.push({
                key: i,
                options: s
            })
        });
        else try {
            it.push(...$c())
        } catch (i) {
            const o = i instanceof Error ? i.message : i;
            De("Error during getting GA top trackers", o)
        }
        it.length > 0 && !Ei && im(), it.length !== 0 ? (am(), Si = !0, De("GA initialized")) : De("No GA to setup")
    },
    $c = () => {
        const e = [];
        return ve.google_tag_manager && Object.keys(ve.google_tag_manager).forEach(n => {
            Ms(n) && e.push({
                key: n,
                options: {
                    cookieDomain: "auto"
                }
            })
        }), e
    },
    im = () => {
        const e = ve.document,
            {
                head: t
            } = e,
            n = e.createElement("script");
        n.id = "gtag", n.type = "text/javascript", n.async = !0, n.src = "https://www.googletagmanager.com/gtag/js", t.insertBefore(n, t.firstChild), ve.dataLayer = ve.dataLayer || [], ve.gtag = function() {
            ve.dataLayer.push(arguments)
        }, yn = ve.gtag, yn("js", new Date)
    },
    om = () => {
        let e = [];
        if (Ei) {
            const t = $c();
            it.forEach(n => {
                t.find(({
                    key: r
                }) => r === n.key) || e.push(n)
            })
        } else e = [...it];
        return e
    },
    am = () => {
        om().forEach(e => {
            const {
                key: t,
                options: n
            } = e;
            let r = {};
            n ? (r = {
                cookie_domain: n.cookieDomain
            }, n.name && (r.name = n.name)) : r = {
                cookie_domain: (ve == null ? void 0 : ve.location.hostname) || ""
            }, yn("config", t, r)
        })
    },
    cm = (e, t) => {
        const {
            googleAnalyticsEnabled: n
        } = M.getOptions();
        if (!(!n || !ve.gtag || !ua() || ve.document.hidden)) try {
            it.forEach(r => {
                t.send_to = r.key, yn("event", e, t), De(`Smartsupp: GA event ${e} - ${JSON.stringify(t)}`)
            })
        } catch (r) {
            const s = r instanceof Error ? r.message : r;
            De("Smartsupp: GA error:", s)
        }
    },
    um = "Visitor_started_conversation",
    lm = "Trigger_message_sent",
    fm = "Trigger_message_viewed",
    dm = "Trigger_visitor_reaction",
    hm = "Auto_message_sent",
    pm = "Auto_message_viewed",
    gm = "Auto_message_visitor_reaction",
    mm = "Chatbot_sent",
    ym = "Chatbot_viewed",
    bm = "Chatbot_interaction",
    vm = "Chatbot_button_interaction",
    _m = "Chatbot_visitor_reaction",
    wm = "Ai_chatbot_interaction",
    Cm = "Ai_chatbot_visitor_reaction",
    Am = "Agent_served_conversation",
    km = "Contact_acquired",
    Fm = "Auth_form_filled",
    Sm = "Offline_message_sent",
    Em = "Feedback_sent",
    Tm = "Feedback_text_sent",
    xm = "Url_card_opened",
    Om = {
        event_category: "Smartsupp_v3",
        non_interaction: !0
    },
    de = (e, t) => {
        const n = { ...Om,
            ...t
        };
        cm(e, n)
    },
    Mm = (e = "") => de(lm, {
        event_label: e
    }),
    Dm = e => de(fm, {
        event_label: e
    }),
    $m = (e = "") => de(dm, {
        event_label: e
    }),
    Rm = (e = "") => de(hm, {
        event_label: e
    }),
    Bm = e => de(pm, {
        event_label: e
    }),
    Im = (e = "") => de(gm, {
        event_label: e
    }),
    Pm = (e = "") => de(mm, {
        event_label: e
    }),
    Lm = e => de(ym, {
        event_label: e
    }),
    Nm = (e = "") => de(bm, {
        event_label: e
    }),
    zm = (e = "") => de(vm, {
        event_label: e
    }),
    jm = (e = "") => de(_m, {
        event_label: e
    }),
    Um = () => de(um),
    Vm = e => de(Am, {
        event_label: e
    }),
    qm = () => de(Fm),
    Hm = () => de(Sm),
    Gm = (e, t) => {
        const n = {
            event_label: t || ma[e] || "",
            value: e
        };
        de(t ? Tm : Em, n)
    },
    Wm = e => de(km, {
        event_label: e
    }),
    Yw = e => de(xm, {
        event_label: e
    }),
    Xm = (e = "") => de(wm, {
        event_label: e
    }),
    Km = (e = "") => de(Cm, {
        event_label: e
    });
let Ds = !1,
    Se = {};
const Rc = () => {
        Ds = !1
    },
    Zm = () => {
        const e = A(Ye);
        Se = Wg(e)
    },
    Jm = (e, t) => Ds ? !1 : Gg(e).length === 1 && t === x.MessageSubType.Contact ? (Ds = !0, !0) : !1,
    Ym = (e, t) => {
        var r, s;
        const n = ((r = e.trigger) == null ? void 0 : r.id) || "";
        return t.subType === x.MessageSubType.Contact && e.subType === x.MessageSubType.Trigger && !((s = Se[n]) != null && s.visitorResponded) ? (Se[n].visitorResponded = !0, !0) : !1
    },
    Qm = (e, t) => {
        var r, s;
        const n = ((r = e.trigger) == null ? void 0 : r.id) || "";
        return t.subType === x.MessageSubType.Contact && !(t.content.quickReplies || t.content.quickReply) && e.subType === x.MessageSubType.Bot && !((s = Se[n]) != null && s.visitorResponded) && n ? (Se[n].visitorResponded = !0, !0) : !1
    },
    ey = (e, t) => {
        var r, s, i;
        const n = ((r = e.trigger) == null ? void 0 : r.id) || "";
        return t.subType === x.MessageSubType.Contact && ((s = e.trigger) == null ? void 0 : s.groupType) === x.GroupType.chatbot && !((i = Se[n]) != null && i.reacted) ? (Se[n].reacted = !0, !0) : !1
    },
    ty = e => {
        var n, r, s;
        const t = ((n = e.trigger) == null ? void 0 : n.id) || "";
        return ((r = e.trigger) == null ? void 0 : r.groupType) === x.GroupType.ai && !((s = Se[t]) != null && s.reacted) ? (Se[t].reacted = !0, !0) : !1
    },
    nt = (e, t, n = !1) => {
        var r;
        if (e.length > 0 && !n) {
            const s = e.slice(-2).filter(i => i.trigger);
            return s ? (r = s[s.length - 1].trigger) == null ? void 0 : r.name : ""
        } else return t.trigger ? t.trigger.name : ""
    },
    ny = e => {
        const t = A(Ye);
        sy(t, e), iy(t, e), Jm(t, e.subType) && Um()
    },
    ry = e => {
        var s;
        let t = e;
        const r = A(Ye).filter(i => i.trigger);
        r && r.length > 0 && (t = ((s = r[r.length - 1].trigger) == null ? void 0 : s.name) ? ? e), Wm(t)
    },
    sy = (e, t) => {
        var s, i, o, c, l, f, u, a;
        const n = ((s = t.trigger) == null ? void 0 : s.id) || "";
        t.subType === x.MessageSubType.Bot && !((i = Se[n]) != null && i.sent) && (((o = t.trigger) == null ? void 0 : o.groupType) === x.GroupType.chatbot && (Pm(nt(e, t, !0)), Se[n] = {
            sent: !0
        }), ((c = t.trigger) == null ? void 0 : c.groupType) === x.GroupType.message && (Rm(nt(e, t, !0)), Se[n] = {
            sent: !0
        }), ((l = t.trigger) == null ? void 0 : l.groupType) === x.GroupType.ai && (Se[n] = {
            sent: !0
        }));
        const r = e.length > 1 ? e[e.length - 2] : void 0;
        r && (Qm(r, t) ? (((f = r.trigger) == null ? void 0 : f.groupType) === x.GroupType.chatbot && jm(nt(e, t)), ((u = r.trigger) == null ? void 0 : u.groupType) === x.GroupType.message && Im(nt(e, t)), ((a = r.trigger) == null ? void 0 : a.groupType) === x.GroupType.ai && Km(nt(e, t))) : ey(r, t) ? Nm(nt(e, t)) : ty(t) && Xm(nt(e, t)))
    },
    iy = (e, t) => {
        var r, s;
        t.subType === x.MessageSubType.Trigger && (Mm((r = t == null ? void 0 : t.trigger) == null ? void 0 : r.name), Se[((s = t.trigger) == null ? void 0 : s.id) || ""] = {
            sent: !0
        });
        const n = e.length > 1 ? e[e.length - 2] : void 0;
        n && Ym(n, t) && $m(nt(e, t))
    },
    oy = () => {
        const e = A(Ai).filter(n => n.trigger),
            t = e[e.length - 1];
        t && t.trigger && (t.subType === x.MessageSubType.Bot && t.content.quickReplies ? Lm(t.trigger.name) : t.subType === x.MessageSubType.Bot ? Bm(t.trigger.name) : t.subType === x.MessageSubType.Trigger && Dm(t.trigger.name))
    },
    ay = e => {
        e === me.AccountStatus.Offline && Hm()
    };
ie.on("messageReceived", ny);
ie.on("agentJoined", e => {
    Vm(e.fullname)
});
ie.on("chatRated", e => {
    Gm(e.value, e.text)
});
ie.on("chatClosed", () => {
    Rc()
});
ie.on("chatVisitorClosed", () => {
    Rc()
});
ie.on("contactAcquired", ({
    acquiredBy: e
}) => {
    ry(e)
});
kn.push(Zm);
const Ti = (e, t = 300) => {
        let n;
        return (...s) => {
            clearTimeout(n), n = setTimeout(() => e(...s), t)
        }
    },
    cy = 500,
    uy = 1500,
    ly = ["smartsupp.dev", "smartsuppchat.loc"];
var Bc = (e => (e.Default = "blackberry2.mp3", e))(Bc || {}),
    ct = (e => (e.Connecting = "connecting", e.Connected = "connected", e.Disconnected = "disconnected", e))(ct || {}),
    $s = (e => (e.Image = "image", e.Video = "video", e))($s || {});
const fy = e => {
        const t = () => {
            mc()
        };
        pt(() => (e.addEventListener("visibilitychange", t), () => e.removeEventListener("visibilitychange", t)))
    },
    dy = e => {
        const t = () => {
            A(ke) && pr(!0)
        };
        pt(() => (e.addEventListener("popstate", t), () => e.removeEventListener("popstate", t)))
    },
    hy = () => {
        const e = ge()._smartsupp || {};
        e.appVersion = "0.0.1", e.commitHash = "6a27bc042fa726b50055f573d930776b7830cc7a", e.commitInfo = "6a27bc042fa726b50055f573d930776b7830cc7a - Merge pull request #333 from smartsupp/develop - 2024-12-09 08:53:59 +0100", ge()._smartsupp = e
    },
    py = (e = Bc.Default) => {
        const {
            widgetV3Url: t
        } = M.getOptions(), n = new Audio(`${t}/assets/sounds/${e}`);
        return n.crossOrigin = "anonymous", n.load(), n
    },
    gy = e => e.subType !== x.MessageSubType.Contact && ![x.MessageContentType.RateForm, x.MessageContentType.AgentJoin, x.MessageContentType.AgentLeave, x.MessageContentType.AgentAssign, x.MessageContentType.AgentUnassign].includes(e.content.type),
    Ic = e => {
        Ae.isInitialized() && Ae.getClient().notify(e)
    },
    my = () => {
        M.getOptions().isPreviewMode || Ic(fi.EventName.WidgetOpen)
    },
    yy = () => Ic(fi.EventName.WidgetShow),
    Pc = () => document.visibilityState === "visible",
    by = () => {
        if (A(Ze)) {
            Rs.set(!0);
            const e = ge();
            e.history.pushState(null, "", e.location.href)
        }
    },
    $e = O(!1),
    vy = O(!1),
    Rs = O(!1),
    _y = e => !!ly.find(t => e.includes(t)),
    fr = O(!0);
M.awaitOptions().then(e => {
    const t = ze(J.SoundsEnabled);
    t ? fr.set(t === "true") : typeof e.enableSounds == "boolean" && fr.set(e.enableSounds), vy.set(_y(e.bootstrapUrl))
});
const Qw = e => {
        fr.set(e), Qe({
            name: J.SoundsEnabled,
            value: e.toString()
        }), e && Tc()
    },
    Lc = O(Pc()),
    wy = Ti(() => Lc.set(Pc()), cy);
ge().addEventListener("visibilitychange", () => {
    wy()
});
const Cy = O(0),
    eC = () => Cy.update(e => e + 1),
    Nc = 255,
    Ay = 32,
    tC = 500,
    nC = e => {
        const t = {};
        return e.filter(n => !n.isHidden).reduce((n, r) => (n[r.name] = r.value, n), t)
    },
    rC = e => {
        const t = {};
        return e.reduce((n, r) => (n[r.name] = r.validators, n), t)
    },
    sC = (e, t, n) => {
        e.update(r => ({ ...r,
            [t]: n
        }))
    },
    iC = (e, t) => {
        const n = {};
        for (const r in e) n[r] = t;
        return n
    },
    oC = () => Math.random().toString(36),
    ky = e => {
        if (!e) return !1;
        const t = e.split("@");
        if (t.length !== 2) return !1;
        const n = t[0],
            r = t[1];
        return n.length > 64 || r.length > 255 || r.split(".").some(i => i.length > 63) ? !1 : vg.test(e)
    };
var Ot = (e => (e.Text = "text", e.Checkbox = "checkbox", e.Select = "select", e))(Ot || {});
const jr = () => e => {
        let t = !0;
        return e == null && (t = !1), Et(e) && (t = e.trim().length > 0), {
            type: "required",
            isValid: t
        }
    },
    Fy = () => e => ({
        type: "checked",
        isValid: Et(e) ? e === "true" : e === !0
    }),
    Sy = () => e => ({
        type: "email",
        isValid: ky(String(e))
    }),
    Ey = () => e => ({
        type: "phone",
        isValid: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/.test(String(e))
    }),
    ss = O(void 0),
    Ty = e => {
        const {
            emailControl: t
        } = M.getOptions(), n = !!(e != null && e.email);
        return t && !n
    },
    xy = e => {
        const {
            nameControl: t
        } = M.getOptions(), n = !!(e != null && e.name);
        return t && !n
    },
    Oy = e => {
        const {
            numberControl: t
        } = M.getOptions(), n = !!(e != null && e.phone);
        return !!t && !n
    },
    My = () => {
        const {
            groupSelectEnabled: e
        } = M.getOptions(), t = A(sc);
        return !!e && t.length > 0
    },
    Dy = () => {
        const {
            privacyNoticeEnabled: e,
            privacyNoticeCheckRequired: t
        } = M.getOptions(), n = qy();
        return !!e && t && !n
    },
    $y = e => {
        var r;
        const {
            privacyNoticeEnabled: t
        } = M.getOptions(), n = !!((r = e == null ? void 0 : e.variables) != null && r.personalDataProcessingConsent);
        return !!t && !n
    },
    Ry = () => ({
        type: Ot.Text,
        subType: "email",
        name: "email",
        label: "authForm.label.email",
        placeholder: "authForm.yourEmail",
        value: "",
        validators: [jr(), Sy()],
        maxLength: Nc
    }),
    By = () => ({
        type: Ot.Text,
        subType: "text",
        name: "name",
        label: "authForm.label.name",
        placeholder: "authForm.yourName",
        value: "",
        validators: [jr()],
        maxLength: Nc
    }),
    Iy = () => ({
        type: Ot.Text,
        subType: "tel",
        name: "phone",
        label: "authForm.label.phone",
        placeholder: "authForm.yourPhone",
        value: "",
        validators: [jr(), Ey()],
        maxLength: Ay
    }),
    Py = e => {
        const t = A(sc);
        return {
            type: Ot.Select,
            name: "group",
            label: "authForm.label.group",
            placeholder: "authForm.group",
            value: (e == null ? void 0 : e.group) ? ? "",
            validators: [jr()],
            options: t.map(n => ({
                text: n.name,
                value: n.key
            }))
        }
    },
    Ly = () => ({
        type: Ot.Checkbox,
        name: "personalDataProcessingConsent",
        label: "authForm.acceptTerms",
        value: !1,
        validators: [Fy()]
    }),
    Ny = () => ({
        type: Ot.Checkbox,
        name: "personalDataProcessingConsent",
        label: "topBar.gdprTitle",
        value: !1,
        validators: [],
        isHidden: !0
    }),
    zc = e => ({
        showEmail: Ty(e),
        showName: xy(e),
        showPhone: Oy(e),
        showGroups: My(),
        showConsent: Dy()
    }),
    zy = e => ({
        showEmail: !!e.emailControl,
        showName: !!e.nameControl,
        showPhone: !!e.numberControl,
        showGroups: !!e.groupSelectEnabled,
        showConsent: !!e.privacyNoticeEnabled && e.privacyNoticeCheckRequired
    }),
    jy = e => Object.values(zc(e)).some(t => t),
    aC = (e, t) => {
        const n = [],
            {
                showEmail: r,
                showName: s,
                showPhone: i,
                showGroups: o,
                showConsent: c
            } = t ? zy(t) : zc(e);
        return s && n.push(By()), r && n.push(Ry()), i && n.push(Iy()), o && n.push(Py(e)), c ? n.push(Ly()) : n.length > 0 && (t ? t != null && t.privacyNoticeEnabled : $y(e)) && n.push(Ny()), n
    },
    Uy = () => {
        const e = ze(J.AuthForm);
        if (!e) return null;
        try {
            return JSON.parse(e)
        } catch {
            return null
        }
    },
    cC = (e, t) => {
        const n = Uy(),
            r = {
                [e]: t
            },
            s = n ? { ...n,
                ...r
            } : r;
        Qe({
            name: J.AuthForm,
            value: JSON.stringify(s)
        })
    },
    uC = () => {
        ca(J.AuthForm)
    },
    Vy = () => {
        var t;
        const e = A(Ve);
        return !!((t = e == null ? void 0 : e.variables) != null && t.authenticated)
    },
    qy = () => {
        var e;
        return ((e = A(Ve)) == null ? void 0 : e.gdprApproved) || !1
    },
    Fo = () => {
        const {
            isPreviewMode: e
        } = M.getOptions();
        if (e || A(Pp) || Vy()) return !1;
        const t = A(Ve);
        if (!jy(t)) return !1;
        const {
            requireLogin: n
        } = M.getOptions(), r = A(xt) === me.AccountStatus.Offline;
        return !!n || r
    },
    lC = async e => {
        const {
            privacyNoticeCheckRequired: t
        } = M.getOptions(), n = A(Ve), r = (n == null ? void 0 : n.name) ? ? e.name, s = (n == null ? void 0 : n.email) ? ? e.email, i = (n == null ? void 0 : n.phone) ? ? e.phone, o = e.group ? ? (n == null ? void 0 : n.group), c = e.personalDataProcessingConsent, l = { ...r && {
                name: r
            },
            ...s && {
                email: s
            },
            ...i && {
                phone: i
            },
            ...o && {
                group: o
            },
            ...c && t && {
                personalDataProcessingConsent: c
            }
        };
        await Ae.getClient().authenticate(l), qm(), await qc(), Ja()
    },
    xi = O(!1),
    So = O(!1),
    jc = O(!1);
ge().addEventListener("offline", () => xi.set(!0));
ge().addEventListener("online", () => xi.set(!1));
const Uc = $([gi, xi, jc], ([e, t, n]) => n ? ct.Connected : !e || t ? ct.Disconnected : ct.Connected, ct.Connecting);
let cn;
const Eo = Ti(e => {
    e && !cn && (cn = jt(A(we)("error.noInternet"), 0)), !e && cn && (cn(), cn = void 0)
}, uy);
Uc.subscribe(e => {
    e === ct.Disconnected && (So.set(!0), Eo(!0)), e === ct.Connected && (So.set(!1), Eo(!1))
});
const Hy = () => {
        const e = A(Uc),
            t = A(Mc),
            n = A(mt);
        return e === ct.Disconnected || !t || n.disableAttachments
    },
    dr = O(!1),
    fC = e => {
        if (A(dr)) {
            oe("There is already file upload in progress");
            return
        }
        if (e.length === 0) return;
        const t = Gy(e);
        t.length > 0 && wt.add(t)
    },
    Gy = e => e.length > ln ? (kt(`${A(we)("fileUpload.tooManyFiles")} ${ln}`), []) : e.filter(t => Wy(t)),
    Wy = e => {
        const {
            acceptedFileExtensions: t,
            acceptedFileTypes: n,
            maxFileSize: r
        } = A(mi);
        if (!e) return !1;
        const s = t.includes(jp(e.name)),
            i = n.some(o => o === e.type);
        if (Hy()) return oe("File upload is disabled"), !1;
        if (!A(Mc)) return kt(A(we)("warningBar.uploadFileNotFirst")), !1;
        if (e.size > r) {
            const o = Up(r);
            return kt(`${A(we)("fileUpload.fileTooBig")} ${o.size} ${o.unit}`), !1
        }
        return s || i ? !0 : (kt(A(we)("fileUpload.badFileType")), !1)
    },
    Xy = () => wt.count() === 0 ? [] : (wt.setUploadingStatus(), Vp(A(wt), e => wt.setFileUploaded(e.name))),
    To = 10,
    Ky = 1e4,
    Zy = 3e4,
    Jy = 20,
    Bs = {
        ":)": "🙂",
        ":-)": "🙂",
        ":D": "😀",
        ":-D": "😀",
        ";)": "😉",
        ";-)": "😉",
        "<3": "❤️",
        ":(": "😞",
        ":-(": "😞",
        ":P": "😛",
        ":-P": "😛",
        ":-o": "😮",
        ":O": "😮",
        ":/": "😕",
        ":-/": "😕"
    },
    Yy = e => {
        const t = `(${e?"$|":""} )`;
        return new RegExp(Object.keys(Bs).map(n => `${n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}${t}`).join("|"), "gi")
    },
    Vc = (e, t = !1) => {
        const n = Yy(t);
        return e.replace(n, r => {
            const s = Object.keys(Bs).find(o => r.toUpperCase().includes(o));
            if (!s) return r;
            const i = r.endsWith(" ") ? " " : "";
            return `${Bs[s]}${i}`
        })
    },
    Qy = e => {
        if (e.length > 0 && e.length % To === 0) {
            const t = e.slice(-To),
                n = new Date(e[e.length - 1].createdAt).getTime();
            if (new Date().getTime() - n > Zy || !t.every(s => s.subType === x.MessageSubType.Contact)) return !1;
            const r = new Date(t[0].createdAt).getTime();
            if (n - r < Ky) return !0
        }
        return !1
    },
    e0 = e => {
        const t = wc(e);
        return t ? t.length > Jy : !1
    },
    Oi = O(),
    hr = O(!1),
    dC = O(),
    t0 = 200,
    n0 = O(!1),
    En = $([Oi], ([e]) => typeof e > "u" ? ze(J.Message) ? ? "" : e),
    Mi = $([En], ([e]) => e.trim().length === 0),
    Di = e => {
        Oi.set(Vc(e))
    },
    hC = (e, t) => {
        const n = A(En) ? ? "",
            r = n.slice(0, t),
            s = n.slice(t),
            i = `${r}${e}${s}`;
        Oi.set(i)
    },
    pC = () => {
        if (A(hr)) return;
        Ae.getClient().chatTyping(!0), hr.set(!0)
    },
    r0 = () => {
        if (!A(hr)) return;
        Ae.getClient().chatTyping(!1), hr.set(!1)
    },
    qc = async (e = []) => {
        if (A(Mi) && e.length === 0) return;
        const t = Vc(A(En), !0).trim();
        await ne.sendMessage(t, e), Di(""), r0(), e.length > 0 && (wt.clear(), dr.set(!1)), n0.set(!0), gc()
    },
    s0 = Ti(async () => {
        const e = wt.count() > 0;
        if (A(Mi) && !e) return;
        if (!A(ke) && Fo() && Ur(), i0() && !e) {
            jt(A(we)("warningBar.sameMessageTwice"));
            return
        }
        if (Qy(A(Ye))) {
            jt(A(we)("warningBar.spamProtection"));
            return
        }
        if (A(dr)) {
            Xe(A(we)("chat.fileUpload.error.stillUploading"));
            return
        }
        if (A(Es)) {
            jt(A(we)("card.sendingInProgress"));
            return
        }
        if (e0(A(En))) {
            jt(A(we)("card.linksLimitReached"));
            return
        }
        if (Fo()) {
            hi($r.AuthForm);
            return
        }
        let t = [];
        e && (dr.set(!0), t = await Xy()), await qc(t)
    }, t0),
    i0 = () => {
        const e = A(tm),
            t = A(Os),
            n = A(En);
        return e && n === e.content.text || t && n === t
    },
    Lt = (e, t) => (De(`widget visible: ${String(t)} => reason: ${e}`), t && t !== A(yt) && yy(), t),
    $i = O(),
    Ri = () => $i.set(!0),
    o0 = () => $i.set(!1),
    a0 = $([xt, Ye, Mi, pc], ([e, t, n, r]) => {
        const {
            hideOfflineChat: s,
            isPreviewMode: i
        } = M.getOptions();
        return e === me.AccountStatus.Offline && !!s && Hg(t).length === 0 && n && !r && !i
    }),
    yt = $([Ve, Ze, $i, qe, pc, a0], ([e, t, n, r, s, i]) => {
        const {
            hideMobileWidget: o,
            hideWidget: c
        } = M.getOptions();
        return e != null && e.bannedAt ? Lt("visitor is banned", !1) : t && o ? Lt("option 'hideMobileWidget' is true", !1) : typeof n == "boolean" ? Lt("set by API command", n) : r && !s ? Lt("chat status is not pending", !0) : i ? Lt("option 'hideOfflineChat' is true", !1) : Lt(`option 'hideWidget' is ${String(c)}`, !c)
    }),
    c0 = $([Ze], ([e]) => {
        const {
            openOnTrigger: t
        } = M.getOptions();
        return t && !e
    }),
    ke = pa(J.IsMessengerFrameOpened, !1, e => !A(Ze) && e === "true"),
    Ur = () => {
        by(), ke.set(!0), h0(), oy(), my()
    },
    pr = e => {
        if (A(Ze) && A(Rs) && !e) return Rs.set(!1), ge().history.back();
        ie.emit("messengerClose", !0), ke.set(!1)
    },
    u0 = $([$e, yt, ke], ([e, t, n]) => e && t && n);

function l0() {
    const e = O(!1),
        {
            subscribe: t
        } = e;
    let n = null;
    return {
        subscribe: t,
        handleDragOver: (i, o = !0) => {
            o && i.preventDefault(), A(e) || e.set(!0), n && clearTimeout(n), n = window.setTimeout(() => {
                e.set(!1)
            }, 200)
        },
        handleDrop: i => {
            var c;
            i.preventDefault(), n && clearTimeout(n), e.set(!1);
            const o = (c = i.dataTransfer) != null && c.files ? [...i.dataTransfer.files] : [];
            return o.length === 0 && jt("Dropped item(s) are not processable files"), {
                droppedFiles: o
            }
        }
    }
}
const gC = l0(),
    f0 = $([$e, yt, ke], ([e, t, n]) => e && t && !n),
    Bi = O(!1),
    Vr = O(!1),
    d0 = () => {
        Bi.set(!0), Vr.set(!1)
    },
    Hc = () => {
        Vr.set(!0), Bi.set(!1)
    },
    h0 = (e = !1) => {
        Vr.set(!1), e && Qe({
            name: J.PopupClosedAt,
            value: new Date().toISOString()
        })
    },
    Gc = $([Ze], ([e]) => {
        const {
            mobilePopupsEnabled: t
        } = M.getOptions();
        return e ? !!t : !0
    }),
    p0 = $([xc], ([e]) => {
        const t = ze(J.PopupClosedAt) ? ? null;
        if (!t || !e) return !0;
        const n = new Date(e.createdAt).getTime(),
            r = new Date(t).getTime();
        return n > r
    }),
    g0 = $([$e, yt, Bi, ke, Gc], ([e, t, n, r, s]) => e && t && n && !r && s),
    m0 = $([$e, yt, Vr, ke, xc, p0, Gc, Ts], ([e, t, n, r, s, i, o, c]) => e && t && n && s && i && !r && o && !c),
    bn = {
        white: "#ffffff",
        slate100: "#f1f5f9",
        slate200: "#e2e8f0",
        slate300: "#cbd5e1",
        slate900: "#0f172a",
        blue700: "#1d4ed8",
        smartsuppBlue: "#1233df"
    };

function be(e, t) {
    y0(e) && (e = "100%");
    const n = b0(e);
    return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e)
}

function zn(e) {
    return Math.min(1, Math.max(0, e))
}

function y0(e) {
    return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1
}

function b0(e) {
    return typeof e == "string" && e.indexOf("%") !== -1
}

function Wc(e) {
    return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
}

function jn(e) {
    return Number(e) <= 1 ? `${Number(e)*100}%` : e
}

function Ct(e) {
    return e.length === 1 ? "0" + e : String(e)
}

function v0(e, t, n) {
    return {
        r: be(e, 255) * 255,
        g: be(t, 255) * 255,
        b: be(n, 255) * 255
    }
}

function xo(e, t, n) {
    e = be(e, 255), t = be(t, 255), n = be(n, 255);
    const r = Math.max(e, t, n),
        s = Math.min(e, t, n);
    let i = 0,
        o = 0;
    const c = (r + s) / 2;
    if (r === s) o = 0, i = 0;
    else {
        const l = r - s;
        switch (o = c > .5 ? l / (2 - r - s) : l / (r + s), r) {
            case e:
                i = (t - n) / l + (t < n ? 6 : 0);
                break;
            case t:
                i = (n - e) / l + 2;
                break;
            case n:
                i = (e - t) / l + 4;
                break
        }
        i /= 6
    }
    return {
        h: i,
        s: o,
        l: c
    }
}

function is(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function _0(e, t, n) {
    let r, s, i;
    if (e = be(e, 360), t = be(t, 100), n = be(n, 100), t === 0) s = n, i = n, r = n;
    else {
        const o = n < .5 ? n * (1 + t) : n + t - n * t,
            c = 2 * n - o;
        r = is(c, o, e + 1 / 3), s = is(c, o, e), i = is(c, o, e - 1 / 3)
    }
    return {
        r: r * 255,
        g: s * 255,
        b: i * 255
    }
}

function Oo(e, t, n) {
    e = be(e, 255), t = be(t, 255), n = be(n, 255);
    const r = Math.max(e, t, n),
        s = Math.min(e, t, n);
    let i = 0;
    const o = r,
        c = r - s,
        l = r === 0 ? 0 : c / r;
    if (r === s) i = 0;
    else {
        switch (r) {
            case e:
                i = (t - n) / c + (t < n ? 6 : 0);
                break;
            case t:
                i = (n - e) / c + 2;
                break;
            case n:
                i = (e - t) / c + 4;
                break
        }
        i /= 6
    }
    return {
        h: i,
        s: l,
        v: o
    }
}

function w0(e, t, n) {
    e = be(e, 360) * 6, t = be(t, 100), n = be(n, 100);
    const r = Math.floor(e),
        s = e - r,
        i = n * (1 - t),
        o = n * (1 - s * t),
        c = n * (1 - (1 - s) * t),
        l = r % 6,
        f = [n, o, i, i, c, n][l],
        u = [c, n, n, o, i, i][l],
        a = [i, i, c, n, n, o][l];
    return {
        r: f * 255,
        g: u * 255,
        b: a * 255
    }
}

function Mo(e, t, n, r) {
    const s = [Ct(Math.round(e).toString(16)), Ct(Math.round(t).toString(16)), Ct(Math.round(n).toString(16))];
    return r && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("")
}

function C0(e, t, n, r, s) {
    const i = [Ct(Math.round(e).toString(16)), Ct(Math.round(t).toString(16)), Ct(Math.round(n).toString(16)), Ct(k0(r))];
    return s && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("")
}

function A0(e, t, n, r) {
    const s = e / 100,
        i = t / 100,
        o = n / 100,
        c = r / 100,
        l = 255 * (1 - s) * (1 - c),
        f = 255 * (1 - i) * (1 - c),
        u = 255 * (1 - o) * (1 - c);
    return {
        r: l,
        g: f,
        b: u
    }
}

function Do(e, t, n) {
    let r = 1 - e / 255,
        s = 1 - t / 255,
        i = 1 - n / 255,
        o = Math.min(r, s, i);
    return o === 1 ? (r = 0, s = 0, i = 0) : (r = (r - o) / (1 - o) * 100, s = (s - o) / (1 - o) * 100, i = (i - o) / (1 - o) * 100), o *= 100, {
        c: Math.round(r),
        m: Math.round(s),
        y: Math.round(i),
        k: Math.round(o)
    }
}

function k0(e) {
    return Math.round(parseFloat(e) * 255).toString(16)
}

function $o(e) {
    return Me(e) / 255
}

function Me(e) {
    return parseInt(e, 16)
}

function F0(e) {
    return {
        r: e >> 16,
        g: (e & 65280) >> 8,
        b: e & 255
    }
}
const Is = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};

function S0(e) {
    let t = {
            r: 0,
            g: 0,
            b: 0
        },
        n = 1,
        r = null,
        s = null,
        i = null,
        o = !1,
        c = !1;
    return typeof e == "string" && (e = x0(e)), typeof e == "object" && (xe(e.r) && xe(e.g) && xe(e.b) ? (t = v0(e.r, e.g, e.b), o = !0, c = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : xe(e.h) && xe(e.s) && xe(e.v) ? (r = jn(e.s), s = jn(e.v), t = w0(e.h, r, s), o = !0, c = "hsv") : xe(e.h) && xe(e.s) && xe(e.l) ? (r = jn(e.s), i = jn(e.l), t = _0(e.h, r, i), o = !0, c = "hsl") : xe(e.c) && xe(e.m) && xe(e.y) && xe(e.k) && (t = A0(e.c, e.m, e.y, e.k), o = !0, c = "cmyk"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Wc(n), {
        ok: o,
        format: e.format || c,
        r: Math.min(255, Math.max(t.r, 0)),
        g: Math.min(255, Math.max(t.g, 0)),
        b: Math.min(255, Math.max(t.b, 0)),
        a: n
    }
}
const E0 = "[-\\+]?\\d+%?",
    T0 = "[-\\+]?\\d*\\.\\d+%?",
    ut = "(?:" + T0 + ")|(?:" + E0 + ")",
    os = "[\\s|\\(]+(" + ut + ")[,|\\s]+(" + ut + ")[,|\\s]+(" + ut + ")\\s*\\)?",
    Un = "[\\s|\\(]+(" + ut + ")[,|\\s]+(" + ut + ")[,|\\s]+(" + ut + ")[,|\\s]+(" + ut + ")\\s*\\)?",
    Ie = {
        CSS_UNIT: new RegExp(ut),
        rgb: new RegExp("rgb" + os),
        rgba: new RegExp("rgba" + Un),
        hsl: new RegExp("hsl" + os),
        hsla: new RegExp("hsla" + Un),
        hsv: new RegExp("hsv" + os),
        hsva: new RegExp("hsva" + Un),
        cmyk: new RegExp("cmyk" + Un),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };

function x0(e) {
    if (e = e.trim().toLowerCase(), e.length === 0) return !1;
    let t = !1;
    if (Is[e]) e = Is[e], t = !0;
    else if (e === "transparent") return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        format: "name"
    };
    let n = Ie.rgb.exec(e);
    return n ? {
        r: n[1],
        g: n[2],
        b: n[3]
    } : (n = Ie.rgba.exec(e), n ? {
        r: n[1],
        g: n[2],
        b: n[3],
        a: n[4]
    } : (n = Ie.hsl.exec(e), n ? {
        h: n[1],
        s: n[2],
        l: n[3]
    } : (n = Ie.hsla.exec(e), n ? {
        h: n[1],
        s: n[2],
        l: n[3],
        a: n[4]
    } : (n = Ie.hsv.exec(e), n ? {
        h: n[1],
        s: n[2],
        v: n[3]
    } : (n = Ie.hsva.exec(e), n ? {
        h: n[1],
        s: n[2],
        v: n[3],
        a: n[4]
    } : (n = Ie.cmyk.exec(e), n ? {
        c: n[1],
        m: n[2],
        y: n[3],
        k: n[4]
    } : (n = Ie.hex8.exec(e), n ? {
        r: Me(n[1]),
        g: Me(n[2]),
        b: Me(n[3]),
        a: $o(n[4]),
        format: t ? "name" : "hex8"
    } : (n = Ie.hex6.exec(e), n ? {
        r: Me(n[1]),
        g: Me(n[2]),
        b: Me(n[3]),
        format: t ? "name" : "hex"
    } : (n = Ie.hex4.exec(e), n ? {
        r: Me(n[1] + n[1]),
        g: Me(n[2] + n[2]),
        b: Me(n[3] + n[3]),
        a: $o(n[4] + n[4]),
        format: t ? "name" : "hex8"
    } : (n = Ie.hex3.exec(e), n ? {
        r: Me(n[1] + n[1]),
        g: Me(n[2] + n[2]),
        b: Me(n[3] + n[3]),
        format: t ? "name" : "hex"
    } : !1))))))))))
}

function xe(e) {
    return typeof e == "number" ? !Number.isNaN(e) : Ie.CSS_UNIT.test(e)
}
class ee {
    constructor(t = "", n = {}) {
        if (t instanceof ee) return t;
        typeof t == "number" && (t = F0(t)), this.originalInput = t;
        const r = S0(t);
        this.originalInput = t, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = n.format ? ? r.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok
    }
    isDark() {
        return this.getBrightness() < 128
    }
    isLight() {
        return !this.isDark()
    }
    getBrightness() {
        const t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3
    }
    getLuminance() {
        const t = this.toRgb();
        let n, r, s;
        const i = t.r / 255,
            o = t.g / 255,
            c = t.b / 255;
        return i <= .03928 ? n = i / 12.92 : n = Math.pow((i + .055) / 1.055, 2.4), o <= .03928 ? r = o / 12.92 : r = Math.pow((o + .055) / 1.055, 2.4), c <= .03928 ? s = c / 12.92 : s = Math.pow((c + .055) / 1.055, 2.4), .2126 * n + .7152 * r + .0722 * s
    }
    getAlpha() {
        return this.a
    }
    setAlpha(t) {
        return this.a = Wc(t), this.roundA = Math.round(100 * this.a) / 100, this
    }
    isMonochrome() {
        const {
            s: t
        } = this.toHsl();
        return t === 0
    }
    toHsv() {
        const t = Oo(this.r, this.g, this.b);
        return {
            h: t.h * 360,
            s: t.s,
            v: t.v,
            a: this.a
        }
    }
    toHsvString() {
        const t = Oo(this.r, this.g, this.b),
            n = Math.round(t.h * 360),
            r = Math.round(t.s * 100),
            s = Math.round(t.v * 100);
        return this.a === 1 ? `hsv(${n}, ${r}%, ${s}%)` : `hsva(${n}, ${r}%, ${s}%, ${this.roundA})`
    }
    toHsl() {
        const t = xo(this.r, this.g, this.b);
        return {
            h: t.h * 360,
            s: t.s,
            l: t.l,
            a: this.a
        }
    }
    toHslString() {
        const t = xo(this.r, this.g, this.b),
            n = Math.round(t.h * 360),
            r = Math.round(t.s * 100),
            s = Math.round(t.l * 100);
        return this.a === 1 ? `hsl(${n}, ${r}%, ${s}%)` : `hsla(${n}, ${r}%, ${s}%, ${this.roundA})`
    }
    toHex(t = !1) {
        return Mo(this.r, this.g, this.b, t)
    }
    toHexString(t = !1) {
        return "#" + this.toHex(t)
    }
    toHex8(t = !1) {
        return C0(this.r, this.g, this.b, this.a, t)
    }
    toHex8String(t = !1) {
        return "#" + this.toHex8(t)
    }
    toHexShortString(t = !1) {
        return this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
    }
    toRgb() {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a
        }
    }
    toRgbString() {
        const t = Math.round(this.r),
            n = Math.round(this.g),
            r = Math.round(this.b);
        return this.a === 1 ? `rgb(${t}, ${n}, ${r})` : `rgba(${t}, ${n}, ${r}, ${this.roundA})`
    }
    toPercentageRgb() {
        const t = n => `${Math.round(be(n,255)*100)}%`;
        return {
            r: t(this.r),
            g: t(this.g),
            b: t(this.b),
            a: this.a
        }
    }
    toPercentageRgbString() {
        const t = n => Math.round(be(n, 255) * 100);
        return this.a === 1 ? `rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)` : `rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`
    }
    toCmyk() {
        return { ...Do(this.r, this.g, this.b)
        }
    }
    toCmykString() {
        const {
            c: t,
            m: n,
            y: r,
            k: s
        } = Do(this.r, this.g, this.b);
        return `cmyk(${t}, ${n}, ${r}, ${s})`
    }
    toName() {
        if (this.a === 0) return "transparent";
        if (this.a < 1) return !1;
        const t = "#" + Mo(this.r, this.g, this.b, !1);
        for (const [n, r] of Object.entries(Is))
            if (t === r) return n;
        return !1
    }
    toString(t) {
        const n = !!t;
        t = t ? ? this.format;
        let r = !1;
        const s = this.a < 1 && this.a >= 0;
        return !n && s && (t.startsWith("hex") || t === "name") ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), t === "cmyk" && (r = this.toCmykString()), r || this.toHexString())
    }
    toNumber() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b)
    }
    clone() {
        return new ee(this.toString())
    }
    lighten(t = 10) {
        const n = this.toHsl();
        return n.l += t / 100, n.l = zn(n.l), new ee(n)
    }
    brighten(t = 10) {
        const n = this.toRgb();
        return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new ee(n)
    }
    darken(t = 10) {
        const n = this.toHsl();
        return n.l -= t / 100, n.l = zn(n.l), new ee(n)
    }
    tint(t = 10) {
        return this.mix("white", t)
    }
    shade(t = 10) {
        return this.mix("black", t)
    }
    desaturate(t = 10) {
        const n = this.toHsl();
        return n.s -= t / 100, n.s = zn(n.s), new ee(n)
    }
    saturate(t = 10) {
        const n = this.toHsl();
        return n.s += t / 100, n.s = zn(n.s), new ee(n)
    }
    greyscale() {
        return this.desaturate(100)
    }
    spin(t) {
        const n = this.toHsl(),
            r = (n.h + t) % 360;
        return n.h = r < 0 ? 360 + r : r, new ee(n)
    }
    mix(t, n = 50) {
        const r = this.toRgb(),
            s = new ee(t).toRgb(),
            i = n / 100,
            o = {
                r: (s.r - r.r) * i + r.r,
                g: (s.g - r.g) * i + r.g,
                b: (s.b - r.b) * i + r.b,
                a: (s.a - r.a) * i + r.a
            };
        return new ee(o)
    }
    analogous(t = 6, n = 30) {
        const r = this.toHsl(),
            s = 360 / n,
            i = [this];
        for (r.h = (r.h - (s * t >> 1) + 720) % 360; --t;) r.h = (r.h + s) % 360, i.push(new ee(r));
        return i
    }
    complement() {
        const t = this.toHsl();
        return t.h = (t.h + 180) % 360, new ee(t)
    }
    monochromatic(t = 6) {
        const n = this.toHsv(),
            {
                h: r
            } = n,
            {
                s
            } = n;
        let {
            v: i
        } = n;
        const o = [],
            c = 1 / t;
        for (; t--;) o.push(new ee({
            h: r,
            s,
            v: i
        })), i = (i + c) % 1;
        return o
    }
    splitcomplement() {
        const t = this.toHsl(),
            {
                h: n
            } = t;
        return [this, new ee({
            h: (n + 72) % 360,
            s: t.s,
            l: t.l
        }), new ee({
            h: (n + 216) % 360,
            s: t.s,
            l: t.l
        })]
    }
    onBackground(t) {
        const n = this.toRgb(),
            r = new ee(t).toRgb(),
            s = n.a + r.a * (1 - n.a);
        return new ee({
            r: (n.r * n.a + r.r * r.a * (1 - n.a)) / s,
            g: (n.g * n.a + r.g * r.a * (1 - n.a)) / s,
            b: (n.b * n.a + r.b * r.a * (1 - n.a)) / s,
            a: s
        })
    }
    triad() {
        return this.polyad(3)
    }
    tetrad() {
        return this.polyad(4)
    }
    polyad(t) {
        const n = this.toHsl(),
            {
                h: r
            } = n,
            s = [this],
            i = 360 / t;
        for (let o = 1; o < t; o++) s.push(new ee({
            h: (r + o * i) % 360,
            s: n.s,
            l: n.l
        }));
        return s
    }
    equals(t) {
        const n = new ee(t);
        return this.format === "cmyk" || n.format === "cmyk" ? this.toCmykString() === n.toCmykString() : this.toRgbString() === n.toRgbString()
    }
}
const O0 = .299,
    M0 = .587,
    D0 = .114,
    $0 = 180,
    R0 = -20,
    B0 = -.25,
    I0 = .2,
    P0 = -5,
    L0 = .03,
    N0 = .5,
    Ro = 5,
    Wn = (e, t) => new ee(e).darken(t).toHexString(),
    z0 = e => {
        const t = new ee(e).toRgb();
        return `${t.r}, ${t.g}, ${t.b}`
    },
    gr = e => /^#[0-9A-F]{6}$/i.test(e),
    qr = e => {
        const {
            r: t,
            g: n,
            b: r
        } = new ee(e).toRgb();
        return Math.sqrt(O0 * (t * t) + M0 * (n * n) + D0 * (r * r)) > $0
    },
    j0 = e => {
        const t = new ee(e),
            {
                s: n,
                l: r
            } = t.toHsl();
        return t.spin(R0).desaturate(n * B0).lighten(r * I0).toHexString()
    },
    U0 = (e, t = N0) => {
        const n = new ee(e),
            {
                s: r,
                l: s
            } = n.toHsl();
        return n.spin(P0).saturate(r * L0).darken(s * t).toHexString()
    },
    V0 = e => {
        const {
            color: t,
            color2: n,
            colorGradient: r
        } = e;
        return r ? n ? {
            from: t,
            to: n
        } : qr(t) ? {
            from: t,
            to: U0(t)
        } : {
            from: t,
            to: j0(t)
        } : {
            from: t,
            to: t
        }
    },
    q0 = e => qr(e) ? bn.slate900 : bn.white,
    H0 = e => qr(e) ? .1 : .2,
    G0 = e => {
        if (qr(e)) {
            const t = new ee(e).getLuminance();
            return t > .8 ? Wn(e, Math.pow(10 * t, t)) : e
        }
        return e
    },
    Oe = (e, t, n) => {
        e.documentElement.style.setProperty(t, n)
    },
    W0 = (e, t) => {
        const {
            color: n
        } = t, r = V0(t), s = r.from === "#ffffff" && r.from === r.to ? {
            from: bn.slate300,
            to: bn.slate300
        } : r, i = q0(n);
        Oe(e, "--color-primary", n), Oe(e, "--color-primary-content", i), Oe(e, "--color-primary-content-rgb", z0(i)), Oe(e, "--color-primary-gradient-from", r.from), Oe(e, "--color-primary-gradient-to", r.to), Oe(e, "--color-primary-gradient-button-from", s.from), Oe(e, "--color-primary-gradient-button-to", s.to), Oe(e, "--color-primary-gradient-hover-from", Wn(r.from, Ro)), Oe(e, "--color-primary-gradient-hover-to", Wn(r.to, Ro));
        const o = G0(n);
        Oe(e, "--color-primary-button", o), Oe(e, "--color-primary-button-hover", Wn(o, 10)), Oe(e, "--color-primary-button-content", i), Oe(e, "--opacity-primary-content", String(H0(n)))
    },
    X0 = () => {
        const e = O({
                color: bn.smartsuppBlue,
                color2: null,
                colorGradient: !0
            }),
            {
                subscribe: t,
                set: n
            } = e;
        return {
            subscribe: t,
            setThemeColor: s => {
                const {
                    color: i,
                    color2: o,
                    colorGradient: c
                } = s;
                if (gr(i)) {
                    if (c && o && !gr(o)) {
                        oe(`Provided color '${o}' is not valid. Default color will be used instead.`);
                        return
                    }
                } else {
                    oe(`Provided color '${i}' is not valid. Default color will be used instead.`);
                    return
                }
                n({
                    color: i,
                    color2: o,
                    colorGradient: c
                })
            }
        }
    },
    Ii = X0(),
    Xc = 24,
    Kc = 12,
    K0 = 300,
    Zc = 56,
    Jc = Zc,
    Z0 = 166,
    J0 = Jc + 16,
    Y0 = 380,
    Q0 = 672,
    eb = 12,
    tb = 560,
    nb = 840,
    rb = 104,
    sb = 60,
    mC = $([ga], ([e]) => e ? sb : rb),
    Zt = e => `${e}px`,
    Yc = e => {
        if (e) return Et(e) ? parseInt(e, 10) : e
    },
    ib = (e, t) => e ? {
        width: "100%",
        height: "100%"
    } : t ? {
        width: tb,
        height: nb
    } : {
        width: Y0,
        height: Q0
    },
    ob = e => {
        const {
            widgetBlockingOptions: t
        } = M.getOptions();
        e.style.borderRadius = Zt(eb), t != null && t.limitShadow ? e.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 5px 12px" : e.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 5px 40px"
    },
    Qc = () => {
        const {
            offsetY: e
        } = M.getOptions();
        return Yc(e) ? ? Xc
    },
    eu = () => {
        const {
            offsetX: e
        } = M.getOptions();
        return Yc(e) ? ? Kc
    },
    ab = e => e ? 0 : Xc,
    cb = e => e ? 0 : Kc,
    Pi = () => {
        const {
            position: e
        } = M.getOptions();
        return e === "fixed"
    },
    Li = e => {
        Pi() && (e.style.position = "fixed")
    },
    Hr = (e, t) => {
        Pi() && (e.style.bottom = Zt(t))
    },
    Gr = (e, t) => {
        if (Pi()) {
            const {
                orientation: n
            } = M.getOptions();
            n === "right" ? (e.style.left = "initial", e.style.right = Zt(t)) : (e.style.left = Zt(t), e.style.right = "initial")
        }
    },
    Wr = e => {
        const {
            zIndex: t
        } = M.getOptions();
        e.style.zIndex = String(t ? ? "auto")
    },
    tu = e => {
        e.style.overflow = "hidden"
    },
    Tn = e => {
        const t = document.createElement("iframe");
        return t.style.position = "absolute", t.style.width = "100%", t.style.height = "100%", t.style.border = "none", t.style.display = "block", t.style.textAlign = "left", t.style.margin = "0", t.style.padding = "0", t.style.top = "0", t.style.left = "0", t.style.opacity = "1", e && e(t), t.getAttribute("style") ? ? ""
    },
    ub = e => {
        Li(e), Hr(e, Qc()), Gr(e, eu()), Wr(e)
    },
    lb = (e, t) => {
        Li(e), Hr(e, ab(t)), Gr(e, cb(t)), Wr(e), tu(e), t || ob(e)
    },
    nu = e => {
        Li(e), Hr(e, Qc() + J0), Gr(e, eu()), Wr(e), tu(e)
    },
    fb = e => {
        e.style.position = "fixed", e.style.width = "100%", e.style.height = "100%", Hr(e, 0), Gr(e, 0), Wr(e)
    },
    db = e => {
        ub(e)
    },
    hb = (e, t) => {
        lb(e, t)
    },
    pb = e => {
        nu(e)
    },
    gb = e => {
        nu(e)
    },
    mb = e => {
        fb(e)
    },
    ru = O(K0),
    yb = O(Z0),
    bb = O(!1),
    su = O(void 0),
    Ni = $([Ze, su], ([e, t]) => {
        const {
            buttonStyle: n
        } = M.getOptions();
        return t ? t === "bubble" : e || n === "bubble"
    }),
    vb = $([Ni, ru], ([e, t]) => e ? Zc : t),
    iu = O(),
    _b = $([iu], ([e]) => typeof e > "u" ? ze(J.IsMessengerFrameExpanded) === "true" : e),
    yC = e => {
        Qe({
            name: J.IsMessengerFrameExpanded,
            value: e.toString()
        }), iu.set(e)
    };
var H = (e => (e.Name = "name", e.Group = "group", e.Email = "email", e.Phone = "phone", e.Variables = "variables", e.ContactData = "contactData", e.Language = "language", e.ChatClose = "chat:close", e.ChatOpen = "chat:open", e.ChatShow = "chat:show", e.ChatHide = "chat:hide", e.ThemeColor = "theme:color", e.ChatMessage = "chat:message", e.ChatSend = "chat:send", e.HtmlApply = "html:apply", e.On = "on", e.AnalyticsConsent = "analyticsConsent", e.MarketingConsent = "marketingConsent", e.OpenRateForm = "openRateForm", e.OpenAuthForm = "openAuthForm", e.WidgetStatus = "widgetStatus", e.Translations = "translations", e.AuthFormFields = "authFormFields", e.ButtonStyle = "buttonStyle", e.PreviewTranslate = "previewTranslate", e.DisableConnectionStatus = "disableConnectionStatus", e.ReloadWithMockData = "reloadWithMockData", e.Reload = "reload", e))(H || {}),
    Ut = (e => (e.MessageSent = "message_sent", e.MessageReceived = "message_received", e.MessengerClose = "messenger_close", e.WidgetInit = "widget_init", e))(Ut || {});
const wb = e => {
        ie.on("messageSent", e)
    },
    Cb = e => {
        ie.on("messageReceived", e)
    },
    Ab = e => {
        ie.on("messengerClose", e)
    },
    kb = e => {
        ie.on("widgetInit", e)
    },
    Fb = {
        [Ut.MessageSent]: wb,
        [Ut.MessageReceived]: Cb,
        [Ut.MessengerClose]: Ab,
        [Ut.WidgetInit]: kb
    },
    Sb = (e, t) => {
        const n = Fb[e];
        n && n(t)
    },
    bt = "https://docs.smartsupp.com/chat-box/",
    Eb = `${bt}localization/#supported-languages`,
    Tb = `${bt}visitor-identification/#custom-visitor-data`,
    xb = `${bt}visitor-identification/#custom-contact-data`,
    Ob = `${bt}javascript-api/events/`,
    Mb = "https://www.smartsupp.com/help/cookie-consent/#where-to-enable-cookie-consent-in-smartsupp",
    ou = "https://www.smartsupp.com/pricing",
    zi = O({}),
    Xn = (e, t) => {
        zi.update(n => ({ ...n,
            [e]: t
        }))
    },
    Db = e => Object.values(H).some(t => t === e),
    et = (e, t) => Et(t) ? !0 : (oe(`Parameter of '${e}' API command must be type string. See ${bt} for more information.`), !1),
    xn = (e, t) => dc(t) ? !0 : (oe(`Parameter of '${e}' API command must be type boolean. See ${bt} for more information.`), !1),
    $b = (e, t) => typeof t != "function" ? (oe(`Parameter of '${e}' API command must be type function. See ${bt} for more information.`), !1) : !0,
    Xr = (e, t) => Pr(t) ? !0 : (oe(`Parameter of '${e}' API command must be type object. See ${Tb} for more information.`), !1),
    Rb = (e, t) => Pr(t) ? !0 : (oe(`Parameter of '${e}' API command must be type object. See ${xb} for more information.`), !1),
    Bb = (e, t) => Pr(t) ? !0 : (oe(`Parameter of '${e}' API command must be type object.`), !1),
    Ib = (e, t) => {
        const n = Object.values(Ut);
        return n.includes(t) ? !0 : (oe(`Unknown event: '${t}'. Available event names are: ${n.join(", ")}. See ${Ob} for more information.`), !1)
    },
    au = e => {
        oe(`Unknown API command: '${e}'. See ${bt} to check available API commands.`)
    },
    cu = () => {
        var e;
        return !!((e = M.getOptions().features) != null && e.api)
    },
    Pb = () => {
        var e;
        return !!((e = M.getOptions().features) != null && e.groups)
    },
    Lb = () => M.getOptions().isPreviewMode,
    Mt = () => !cu() && !Lb() ? (oe(`Chat box API feature is not enabled. See ${ou} to upgrade your package.`), !1) : !0,
    Nb = () => !cu() || !Pb() ? (oe(`Chat box Groups feature is not enabled. See ${ou} to upgrade your package.`), !1) : !0,
    uu = () => {
        Ks() || oe(`Enable managing cookie consent in widget settings to allow this command. See ${Mb} for more information.`)
    },
    zb = () => {
        const e = () => {
            Ur(), Ri()
        };
        if (!A($e)) {
            kn.push(e);
            return
        }
        e()
    },
    jb = () => {
        if (Mt()) {
            if (!A($e)) {
                kn.push(pr);
                return
            }
            pr()
        }
    },
    Ub = () => {
        Mt() && Ri()
    },
    Vb = () => {
        Mt() && o0()
    },
    qb = (e, t) => {
        if (Mt() && e === H.Language && et(e, t)) {
            if (!lc(t)) {
                oe(`Provided language '${t}' is not supported. See ${Eb} to check supported languages.`);
                return
            }
            if (!A($e)) {
                Xn("lang", t);
                return
            }
            jh(t)
        }
    },
    Hb = (e, t) => {
        let n, r = null,
            s = !0;
        if (Mt()) {
            if (typeof t == "string" && et(e, t)) n = t;
            else if (Xr(e, t)) {
                if (n = t.color, r = t.color2, s = t.colorGradient, !xn(e, s)) return
            } else return;
            if (gr(n)) {
                if (s && r && !gr(r)) {
                    oe(`Provided color '${r}' is not valid. Default color will be used instead.`);
                    return
                }
            } else {
                oe(`Provided color '${n}' is not valid. Please use hex color code.`);
                return
            }
            Ii.setThemeColor({
                color: n,
                color2: r,
                colorGradient: s
            })
        }
    },
    Gb = (e, t) => {
        Mt() && et(e, t) && Di(t)
    },
    Wb = (e, t) => {
        Mt() && et(e, t) && (Di(t), s0())
    },
    Xb = (e, t, n) => {
        et(e, t) && Ib(e, t) && $b(e, n) && Sb(t, n)
    },
    Kb = (e, t) => {
        Xr(e, t) && Ve.updateVisitorVariables(Tp(t))
    },
    Kn = (e, t) => {
        e !== H.Name && e !== H.Email && e !== H.Phone && e !== H.Group || et(e, t) && Ve.updateVisitorProperty(e, t)
    },
    Zb = (e, t) => {
        if (!Nb() || !et(e, t)) return;
        const n = A(pi)[t];
        if (A($e) && !n) {
            oe(`Group with key '${t}' does not exist. Please provide correct group key from your group settings.`);
            return
        }
        Kn(e, t)
    },
    Jb = (e, t) => {
        Rb(e, t) && Ve.updateVisitorContactData(t)
    },
    Yb = (e, t) => {
        xn(e, t) && (uu(), ie.emit("analyticsConsentChanged", !!t))
    },
    Qb = (e, t) => {
        xn(e, t) && (uu(), ie.emit("marketingConsentChanged", !!t))
    },
    ev = () => {
        Fi(A(ki) || "")
    },
    tv = () => {
        hi($r.AuthForm)
    },
    nv = (e, t) => {
        et(e, t) && (t !== me.AccountStatus.Online && t !== me.AccountStatus.Offline || xt.set(t))
    },
    rv = (e, t) => {
        Xr(e, t) && Vh(t)
    },
    sv = (e, t) => {
        Xr(e, t) && (A(ss) || ss.set(M.getOptions()), ss.update(n => ({ ...n,
            ...t
        })))
    },
    iv = (e, t) => {
        et(e, t) && su.set(t)
    },
    ov = () => {
        let e = () => {};
        e = An.subscribe(() => {
            A(Ye).forEach(t => {
                var r;
                const n = ((r = t.content) == null ? void 0 : r.data) || "";
                typeof n == "string" && n.match(/widgetPreview\..*/) && (t.content.text = A(we)(n), ne.replaceMessage(t))
            }), e()
        })
    },
    av = (e, t) => {
        xn(e, t) && jc.set(t)
    },
    cv = (e, t) => {
        Bb(e, t) && Ae.reloadClient(t)
    },
    uv = (e, t) => {
        xn(e, t) && Ae.reloadClient(void 0, t)
    },
    lv = {
        version: "6a27bc042fa726b50055f573d930776b7830cc7a",
        execute: e => {
            const t = e[0];
            if (typeof t == "function") {
                hv(t);
                return
            }
            if (!Db(t)) {
                au(String(t));
                return
            }
            dv(t, e[1], ...e.slice(2))
        },
        exec: function(...e) {
            this.execute(e)
        }
    },
    fv = {
        [H.ChatOpen]: zb,
        [H.ChatClose]: jb,
        [H.ChatShow]: Ub,
        [H.ChatHide]: Vb,
        [H.ChatMessage]: Gb,
        [H.ChatSend]: Wb,
        [H.Language]: qb,
        [H.ThemeColor]: Hb,
        [H.On]: Xb,
        [H.Variables]: Kb,
        [H.ContactData]: Jb,
        [H.Name]: Kn,
        [H.Group]: Zb,
        [H.Email]: Kn,
        [H.Phone]: Kn,
        [H.AnalyticsConsent]: Yb,
        [H.MarketingConsent]: Qb,
        [H.HtmlApply]: null,
        [H.OpenRateForm]: ev,
        [H.OpenAuthForm]: tv,
        [H.WidgetStatus]: nv,
        [H.Translations]: rv,
        [H.AuthFormFields]: sv,
        [H.ButtonStyle]: iv,
        [H.PreviewTranslate]: ov,
        [H.DisableConnectionStatus]: av,
        [H.ReloadWithMockData]: cv,
        [H.Reload]: uv
    },
    dv = (e, t, ...n) => {
        const r = fv[e];
        if (r === void 0) {
            au(e);
            return
        }
        r !== null && (r(e, t, ...n), De(`🧙‍♂️[API] ${e}${t?":":""}`, t ? ? ""))
    },
    hv = e => {
        A($e) ? e() : kn.push(e)
    };
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(xu);

function pv(e) {
    let t, n, r;
    const s = e[3].default,
        i = yr(s, e, e[2], null);
    return {
        c() {
            t = R("div"), n = R("div"), i && i.c(), F(n, "id", e[1])
        },
        m(o, c) {
            V(o, t, c), D(t, n), i && i.m(n, null), e[4](n), r = !0
        },
        p(o, [c]) {
            i && i.p && (!r || c & 4) && vr(i, s, o, o[2], r ? br(s, o[2], c, null) : _r(o[2]), null)
        },
        i(o) {
            r || (S(i, o), r = !0)
        },
        o(o) {
            T(i, o), r = !1
        },
        d(o) {
            o && j(t), i && i.d(o), e[4](null)
        }
    }
}

function gv(e, t, n) {
    let {
        $$slots: r = {},
        $$scope: s
    } = t, i;
    const o = `${ge().SMARTSUPP_AUTOCREATE!==!1?"smartsupp":Gs(window).id}-widget-container`;
    pt(() => {
        _t().body.appendChild(i)
    }), ea(() => {
        var l;
        (l = _t().getElementById(o)) == null || l.remove()
    });

    function c(l) {
        ft[l ? "unshift" : "push"](() => {
            i = l, n(0, i)
        })
    }
    return e.$$set = l => {
        "$$scope" in l && n(2, s = l.$$scope)
    }, [i, o, s, r, c]
}
class mv extends se {
    constructor(t) {
        super(), re(this, t, gv, pv, Y, {})
    }
}

function ji(e) {
    const t = e - 1;
    return t * t * t + 1
}

function yv(e, {
    delay: t = 0,
    duration: n = 400,
    easing: r = mr
} = {}) {
    const s = +getComputedStyle(e).opacity;
    return {
        delay: t,
        duration: n,
        easing: r,
        css: i => `opacity: ${i*s}`
    }
}

function je(e, {
    delay: t = 0,
    duration: n = 400,
    easing: r = ji,
    x: s = 0,
    y: i = 0,
    opacity: o = 0
} = {}) {
    const c = getComputedStyle(e),
        l = +c.opacity,
        f = c.transform === "none" ? "" : c.transform,
        u = l * (1 - o),
        [a, d] = Hi(s),
        [h, p] = Hi(i);
    return {
        delay: t,
        duration: n,
        easing: r,
        css: (y, g) => `
			transform: ${f} translate(${(1-y)*a}${d}, ${(1-y)*h}${p});
			opacity: ${l-u*g}`
    }
}

function bC(e, {
    delay: t = 0,
    duration: n = 400,
    easing: r = ji,
    axis: s = "y"
} = {}) {
    const i = getComputedStyle(e),
        o = +i.opacity,
        c = s === "y" ? "height" : "width",
        l = parseFloat(i[c]),
        f = s === "y" ? ["top", "bottom"] : ["left", "right"],
        u = f.map(m => `${m[0].toUpperCase()}${m.slice(1)}`),
        a = parseFloat(i[`padding${u[0]}`]),
        d = parseFloat(i[`padding${u[1]}`]),
        h = parseFloat(i[`margin${u[0]}`]),
        p = parseFloat(i[`margin${u[1]}`]),
        y = parseFloat(i[`border${u[0]}Width`]),
        g = parseFloat(i[`border${u[1]}Width`]);
    return {
        delay: t,
        duration: n,
        easing: r,
        css: m => `overflow: hidden;opacity: ${Math.min(m*20,1)*o};${c}: ${m*l}px;padding-${f[0]}: ${m*a}px;padding-${f[1]}: ${m*d}px;margin-${f[0]}: ${m*h}px;margin-${f[1]}: ${m*p}px;border-${f[0]}-width: ${m*y}px;border-${f[1]}-width: ${m*g}px;`
    }
}

function Jt(e, {
    delay: t = 0,
    duration: n = 400,
    easing: r = ji,
    start: s = 0,
    opacity: i = 0
} = {}) {
    const o = getComputedStyle(e),
        c = +o.opacity,
        l = o.transform === "none" ? "" : o.transform,
        f = 1 - s,
        u = c * (1 - i);
    return {
        delay: t,
        duration: n,
        easing: r,
        css: (a, d) => `
			transform: ${l} scale(${1-f*d});
			opacity: ${c-u*d}
		`
    }
}

function bv(e) {
    let t;
    return {
        c() {
            t = R("iframe"), F(t, "id", e[2]), F(t, "title", e[1]), F(t, "style", e[0]), t.allowFullscreen = !0, F(t, "scrolling", "no")
        },
        m(n, r) {
            V(n, t, r), e[7](t)
        },
        p(n, [r]) {
            r & 4 && F(t, "id", n[2]), r & 2 && F(t, "title", n[1]), r & 1 && F(t, "style", n[0])
        },
        i: W,
        o: W,
        d(n) {
            n && j(t), e[7](null)
        }
    }
}

function vv(e, t, n) {
    let r;
    ue(e, Ii, m => n(6, r = m));
    let {
        component: s
    } = t, {
        frameStyle: i
    } = t, {
        title: o
    } = t, {
        id: c
    } = t, l, f, u;
    const a = m => {
            u && u.$destroy(), m && s && (u = new s({
                target: m.body
            }))
        },
        d = m => {
            f && W0(f, m)
        },
        h = m => {
            const b = f.createElement("style");
            return b.textContent = m, f.head.appendChild(b), b
        },
        p = () => {
            for (const m of window.document.styleSheets) {
                const b = [...m.cssRules].map(_ => _.cssText).join("");
                h(b)
            }
        },
        y = () => {
            l.contentDocument && (n(5, f = l.contentDocument), p())
        };
    pt(async () => {
        var m;
        await Fu(), ((m = l.contentDocument) == null ? void 0 : m.readyState) === "complete" && l.contentDocument.defaultView ? y() : l.addEventListener("load", y)
    }), ea(() => {
        l && l.removeEventListener("load", y), u && u.$destroy()
    });

    function g(m) {
        ft[m ? "unshift" : "push"](() => {
            l = m, n(3, l)
        })
    }
    return e.$$set = m => {
        "component" in m && n(4, s = m.component), "frameStyle" in m && n(0, i = m.frameStyle), "title" in m && n(1, o = m.title), "id" in m && n(2, c = m.id)
    }, e.$$.update = () => {
        e.$$.dirty & 32 && a(f), e.$$.dirty & 96 && f && d(r)
    }, [i, o, c, l, s, f, r, g]
}
class On extends se {
    constructor(t) {
        super(), re(this, t, vv, bv, Y, {
            component: 4,
            frameStyle: 0,
            title: 1,
            id: 2
        })
    }
}

function _v(e) {
    let t, n;
    return {
        c() {
            t = Jn("svg"), n = Jn("path"), F(n, "d", "M63.113,18.51v-.16C60.323,7.05,44.582,3,31.972,3S3.582,7,.792,18.5a66.22,66.22,0,0,0,0,20.46c1.18,4.74,5.05,8.63,11.36,11.41l-4,5A3.47,3.47,0,0,0,10.882,61a3.39,3.39,0,0,0,1.44-.31L26.862,54c1.79.18,3.49.27,5.07.27,11.04.04,28.41-4.04,31.18-15.43a60.33,60.33,0,0,0,0-20.33Z"), F(t, "xmlns", "http://www.w3.org/2000/svg"), F(t, "viewBox", "0 0 64 64"), F(t, "fill", "currentColor"), F(t, "preserveAspectRatio", "xMidYMid meet"), F(t, "width", e[0]), F(t, "height", e[0])
        },
        m(r, s) {
            V(r, t, s), D(t, n)
        },
        p(r, [s]) {
            s & 1 && F(t, "width", r[0]), s & 1 && F(t, "height", r[0])
        },
        i: W,
        o: W,
        d(r) {
            r && j(t)
        }
    }
}

function wv(e, t, n) {
    let {
        size: r = 16
    } = t;
    return e.$$set = s => {
        "size" in s && n(0, r = s.size)
    }, [r]
}
class Cv extends se {
    constructor(t) {
        super(), re(this, t, wv, _v, Y, {
            size: 0
        })
    }
}

function Bo(e) {
    let t;
    const n = e[2].default,
        r = yr(n, e, e[1], null);
    return {
        c() {
            r && r.c()
        },
        m(s, i) {
            r && r.m(s, i), t = !0
        },
        p(s, i) {
            r && r.p && (!t || i & 2) && vr(r, n, s, s[1], t ? br(n, s[1], i, null) : _r(s[1]), null)
        },
        i(s) {
            t || (S(r, s), t = !0)
        },
        o(s) {
            T(r, s), t = !1
        },
        d(s) {
            r && r.d(s)
        }
    }
}

function Av(e) {
    let t, n, r = e[0] && Bo(e);
    return {
        c() {
            r && r.c(), t = Ke()
        },
        m(s, i) {
            r && r.m(s, i), V(s, t, i), n = !0
        },
        p(s, [i]) {
            s[0] ? r ? (r.p(s, i), i & 1 && S(r, 1)) : (r = Bo(s), r.c(), S(r, 1), r.m(t.parentNode, t)) : r && (Re(), T(r, 1, 1, () => {
                r = null
            }), Be())
        },
        i(s) {
            n || (S(r), n = !0)
        },
        o(s) {
            T(r), n = !1
        },
        d(s) {
            s && j(t), r && r.d(s)
        }
    }
}

function kv(e, t, n) {
    let {
        $$slots: r = {},
        $$scope: s
    } = t, i = !1;
    return pt(() => {
        n(0, i = !0)
    }), e.$$set = o => {
        "$$scope" in o && n(1, s = o.$$scope)
    }, [i, s, r]
}
class Fv extends se {
    constructor(t) {
        super(), re(this, t, kv, Av, Y, {})
    }
}

function Sv(e) {
    let t, n, r, s;
    return n = new Cv({
        props: {
            size: 24
        }
    }), {
        c() {
            t = R("div"), N(n.$$.fragment), F(t, "class", "transform transition-transform duration-300 group-hover:scale-115")
        },
        m(i, o) {
            V(i, t, o), P(n, t, null), s = !0
        },
        p: W,
        i(i) {
            s || (S(n.$$.fragment, i), i && Ce(() => {
                s && (r || (r = Gt(t, Jt, {
                    delay: 200,
                    duration: 300,
                    start: .6,
                    opacity: .8
                }, !0)), r.run(1))
            }), s = !0)
        },
        o(i) {
            T(n.$$.fragment, i), i && (r || (r = Gt(t, Jt, {
                delay: 200,
                duration: 300,
                start: .6,
                opacity: .8
            }, !1)), r.run(0)), s = !1
        },
        d(i) {
            i && j(t), L(n), i && r && r.end()
        }
    }
}

function Ev(e) {
    let t, n;
    return t = new Fv({
        props: {
            $$slots: {
                default: [Sv]
            },
            $$scope: {
                ctx: e
            }
        }
    }), {
        c() {
            N(t.$$.fragment)
        },
        m(r, s) {
            P(t, r, s), n = !0
        },
        p(r, [s]) {
            const i = {};
            s & 1 && (i.$$scope = {
                dirty: s,
                ctx: r
            }), t.$set(i)
        },
        i(r) {
            n || (S(t.$$.fragment, r), n = !0)
        },
        o(r) {
            T(t.$$.fragment, r), n = !1
        },
        d(r) {
            L(t, r)
        }
    }
}
class lu extends se {
    constructor(t) {
        super(), re(this, t, null, Ev, Y, {})
    }
}

function Tv(e) {
    let t, n, r, s;
    return r = new lu({}), {
        c() {
            t = R("div"), n = R("div"), N(r.$$.fragment), F(n, "class", "flex-center w-12 h-12 bg-white bg-opacity-10 rounded-full"), F(t, "class", "p-1")
        },
        m(i, o) {
            V(i, t, o), D(t, n), P(r, n, null), s = !0
        },
        p: W,
        i(i) {
            s || (S(r.$$.fragment, i), s = !0)
        },
        o(i) {
            T(r.$$.fragment, i), s = !1
        },
        d(i) {
            i && j(t), L(r)
        }
    }
}
class xv extends se {
    constructor(t) {
        super(), re(this, t, null, Tv, Y, {})
    }
}

function Ov(e) {
    let t, n, r = e[1]("button.greeting") + "",
        s, i, o, c;
    return o = new xv({}), {
        c() {
            t = R("div"), n = R("div"), s = Yt(r), i = te(), N(o.$$.fragment), F(n, "class", "flex-center whitespace-nowrap pl-4 pr-1"), F(n, "data-testid", Ee.widgetButtonText), F(t, "class", "flex")
        },
        m(l, f) {
            V(l, t, f), D(t, n), D(n, s), D(t, i), P(o, t, null), e[2](t), c = !0
        },
        p(l, [f]) {
            (!c || f & 2) && r !== (r = l[1]("button.greeting") + "") && wr(s, r)
        },
        i(l) {
            c || (S(o.$$.fragment, l), c = !0)
        },
        o(l) {
            T(o.$$.fragment, l), c = !1
        },
        d(l) {
            l && j(t), L(o), e[2](null)
        }
    }
}

function Mv(e, t, n) {
    let r;
    ue(e, we, o => n(1, r = o));
    let s;
    pt(() => {
        const o = Math.ceil(s.getBoundingClientRect().width);
        ru.set(o)
    });

    function i(o) {
        ft[o ? "unshift" : "push"](() => {
            s = o, n(0, s)
        })
    }
    return [s, r, i]
}
class Dv extends se {
    constructor(t) {
        super(), re(this, t, Mv, Ov, Y, {})
    }
}

function Io(e) {
    let t, n, r;
    return {
        c() {
            t = R("div"), F(t, "id", "widget-online-badge"), F(t, "class", "absolute left-0 bottom-0 w-2 h-2 p-1.5 bg-green-400 rounded-full border-2 border-white"), F(t, "data-testid", Ee.widgetOnlineBadge)
        },
        m(s, i) {
            V(s, t, i), r = !0
        },
        i(s) {
            r || (s && Ce(() => {
                r && (n || (n = Gt(t, Jt, {}, !0)), n.run(1))
            }), r = !0)
        },
        o(s) {
            s && (n || (n = Gt(t, Jt, {}, !1)), n.run(0)), r = !1
        },
        d(s) {
            s && j(t), s && n && n.end()
        }
    }
}

function $v(e) {
    let t, n = e[0] && Io();
    return {
        c() {
            n && n.c(), t = Ke()
        },
        m(r, s) {
            n && n.m(r, s), V(r, t, s)
        },
        p(r, [s]) {
            r[0] ? n ? s & 1 && S(n, 1) : (n = Io(), n.c(), S(n, 1), n.m(t.parentNode, t)) : n && (Re(), T(n, 1, 1, () => {
                n = null
            }), Be())
        },
        i(r) {
            S(n)
        },
        o(r) {
            T(n)
        },
        d(r) {
            r && j(t), n && n.d(r)
        }
    }
}

function Rv(e, t, n) {
    let r;
    return ue(e, Ip, s => n(0, r = s)), [r]
}
class Bv extends se {
    constructor(t) {
        super(), re(this, t, Rv, $v, Y, {})
    }
}

function Po(e) {
    let t, n = (e[0] > 99 ? "99+" : e[0]) + "",
        r, s, i;
    return {
        c() {
            t = R("div"), r = Yt(n), F(t, "id", "widget-unread-messages-badge"), F(t, "class", "absolute right-0 top-0 min-w-5 h-5 flex-center px-1 text-white bg-red-500 text-xs rounded-full shadow"), F(t, "data-testid", Ee.widgetUnreadMessagesBadge)
        },
        m(o, c) {
            V(o, t, c), D(t, r), i = !0
        },
        p(o, c) {
            (!i || c & 1) && n !== (n = (o[0] > 99 ? "99+" : o[0]) + "") && wr(r, n)
        },
        i(o) {
            i || (o && Ce(() => {
                i && (s || (s = Gt(t, Jt, {}, !0)), s.run(1))
            }), i = !0)
        },
        o(o) {
            o && (s || (s = Gt(t, Jt, {}, !1)), s.run(0)), i = !1
        },
        d(o) {
            o && j(t), o && s && s.end()
        }
    }
}

function Iv(e) {
    let t, n = e[1] && Po(e);
    return {
        c() {
            n && n.c(), t = Ke()
        },
        m(r, s) {
            n && n.m(r, s), V(r, t, s)
        },
        p(r, [s]) {
            r[1] ? n ? (n.p(r, s), s & 2 && S(n, 1)) : (n = Po(r), n.c(), S(n, 1), n.m(t.parentNode, t)) : n && (Re(), T(n, 1, 1, () => {
                n = null
            }), Be())
        },
        i(r) {
            S(n)
        },
        o(r) {
            T(n)
        },
        d(r) {
            r && j(t), n && n.d(r)
        }
    }
}

function Pv(e, t, n) {
    let r;
    ue(e, Oc, i => n(0, r = i));
    let s;
    return e.$$.update = () => {
        e.$$.dirty & 1 && n(1, s = r > 0)
    }, [r, s]
}
class Lv extends se {
    constructor(t) {
        super(), re(this, t, Pv, Iv, Y, {})
    }
}

function Nv(e) {
    let t, n;
    return t = new Dv({}), {
        c() {
            N(t.$$.fragment)
        },
        m(r, s) {
            P(t, r, s), n = !0
        },
        i(r) {
            n || (S(t.$$.fragment, r), n = !0)
        },
        o(r) {
            T(t.$$.fragment, r), n = !1
        },
        d(r) {
            L(t, r)
        }
    }
}

function zv(e) {
    let t, n;
    return t = new lu({}), {
        c() {
            N(t.$$.fragment)
        },
        m(r, s) {
            P(t, r, s), n = !0
        },
        i(r) {
            n || (S(t.$$.fragment, r), n = !0)
        },
        o(r) {
            T(t.$$.fragment, r), n = !1
        },
        d(r) {
            L(t, r)
        }
    }
}

function jv(e) {
    let t, n, r, s, i, o, c, l, f, u, a;
    const d = [zv, Nv],
        h = [];

    function p(y, g) {
        return y[0] ? 0 : 1
    }
    return r = p(e), s = h[r] = d[r](e), o = new Bv({}), l = new Lv({}), {
        c() {
            t = R("div"), n = R("div"), s.c(), i = te(), N(o.$$.fragment), c = te(), N(l.$$.fragment), F(n, "role", "button"), F(n, "tabindex", 0), F(n, "class", "group flex-center w-full bg-primary-gradient bg-primary-gradient-hover text-primary-content rounded-full overflow-hidden cursor-pointer"), F(n, "data-testid", Ee.widgetButton), F(t, "id", "smartsupp-widget-button"), F(t, "class", "h-full w-full relative flex justify-end")
        },
        m(y, g) {
            V(y, t, g), D(t, n), h[r].m(n, null), D(n, i), P(o, n, null), D(t, c), P(l, t, null), f = !0, u || (a = lt(n, "click", Ur), u = !0)
        },
        p(y, [g]) {
            let m = r;
            r = p(y), r !== m && (Re(), T(h[m], 1, 1, () => {
                h[m] = null
            }), Be(), s = h[r], s || (s = h[r] = d[r](y), s.c()), S(s, 1), s.m(n, i))
        },
        i(y) {
            f || (S(s), S(o.$$.fragment, y), S(l.$$.fragment, y), f = !0)
        },
        o(y) {
            T(s), T(o.$$.fragment, y), T(l.$$.fragment, y), f = !1
        },
        d(y) {
            y && j(t), h[r].d(), L(o), L(l), u = !1, a()
        }
    }
}

function Uv(e, t, n) {
    let r;
    return ue(e, Ni, s => n(0, r = s)), [r]
}
class Vv extends se {
    constructor(t) {
        super(), re(this, t, Uv, jv, Y, {})
    }
}

function Lo(e) {
    let t, n = e[2] || e[3],
        r, s, i, o, c, l = No();
    return {
        c() {
            var f;
            t = R("div"), l.c(), F(t, "style", `border-radius: 9999px; box-shadow: rgb(0 0 0 / 6%) 0px 1px 6px, rgb(0 0 0 / ${(f=e[4])!=null&&f.limitShadow?"20%) 0px 2px 12px":"12%) 0px 2px 32px"}; color-scheme: normal;`), F(t, "data-testid", Ee.widgetButtonFrame), ce(t, "height", Jc)
        },
        m(f, u) {
            V(f, t, u), l.m(t, null), e[6](t), i = !0, o || (c = vn(db.call(null, t)), o = !0)
        },
        p(f, u) {
            u & 12 && Y(n, n = f[2] || f[3]) ? (Re(), T(l, 1, 1, W), Be(), l = No(), l.c(), S(l, 1), l.m(t, null)) : l.p(f, u)
        },
        i(f) {
            i || (S(l), f && Ce(() => {
                i && (s && s.end(1), r = Qt(t, je, {
                    y: 20,
                    delay: 150,
                    duration: 300
                }), r.start())
            }), i = !0)
        },
        o(f) {
            T(l), r && r.invalidate(), f && (s = en(t, yv, {
                duration: 250
            })), i = !1
        },
        d(f) {
            f && j(t), l.d(f), e[6](null), f && s && s.end(), o = !1, c()
        }
    }
}

function No(e) {
    let t, n;
    return t = new On({
        props: {
            component: Vv,
            id: Ee.widgetButtonFrame,
            title: "Smartsupp widget button",
            frameStyle: Tn()
        }
    }), {
        c() {
            N(t.$$.fragment)
        },
        m(r, s) {
            P(t, r, s), n = !0
        },
        p: W,
        i(r) {
            n || (S(t.$$.fragment, r), n = !0)
        },
        o(r) {
            T(t.$$.fragment, r), n = !1
        },
        d(r) {
            L(t, r)
        }
    }
}

function qv(e) {
    let t, n, r = e[1] && Lo(e);
    return {
        c() {
            r && r.c(), t = Ke()
        },
        m(s, i) {
            r && r.m(s, i), V(s, t, i), n = !0
        },
        p(s, [i]) {
            s[1] ? r ? (r.p(s, i), i & 2 && S(r, 1)) : (r = Lo(s), r.c(), S(r, 1), r.m(t.parentNode, t)) : r && (Re(), T(r, 1, 1, () => {
                r = null
            }), Be())
        },
        i(s) {
            n || (S(r), n = !0)
        },
        o(s) {
            T(r), n = !1
        },
        d(s) {
            s && j(t), r && r.d(s)
        }
    }
}

function Hv(e, t, n) {
    let r, s, i, o;
    ue(e, vb, a => n(5, r = a)), ue(e, f0, a => n(1, s = a)), ue(e, Ni, a => n(2, i = a)), ue(e, we, a => n(3, o = a));
    let c;
    const l = a => {
            n(0, c.style.width = `${a}px`, c)
        },
        {
            widgetBlockingOptions: f
        } = M.getOptions();

    function u(a) {
        ft[a ? "unshift" : "push"](() => {
            c = a, n(0, c)
        })
    }
    return e.$$.update = () => {
        e.$$.dirty & 33 && c && l(r)
    }, [c, s, i, o, f, r, u]
}
class Gv extends se {
    constructor(t) {
        super(), re(this, t, Hv, qv, Y, {})
    }
}

function Wv(e) {
    let t;
    return {
        c() {
            t = R("div"), F(t, "class", e[3]), ye(t, "bg-gray-200", e[2] === "gray"), ye(t, "bg-gray-300", e[2] === "darkGray"), ce(t, "height", e[0]), ce(t, "width", e[1])
        },
        m(n, r) {
            V(n, t, r)
        },
        p(n, [r]) {
            r & 4 && ye(t, "bg-gray-200", n[2] === "gray"), r & 4 && ye(t, "bg-gray-300", n[2] === "darkGray"), r & 1 && ce(t, "height", n[0]), r & 2 && ce(t, "width", n[1])
        },
        i: W,
        o: W,
        d(n) {
            n && j(t)
        }
    }
}

function Xv(e, t, n) {
    let {
        height: r = 20
    } = t, {
        width: s = "100%"
    } = t, {
        colorScheme: i = "gray"
    } = t, {
        roundedStyle: o = "rounded-full"
    } = t;
    const c = `${o} animate-pulse`;
    return e.$$set = l => {
        "height" in l && n(0, r = l.height), "width" in l && n(1, s = l.width), "colorScheme" in l && n(2, i = l.colorScheme), "roundedStyle" in l && n(4, o = l.roundedStyle)
    }, [r, s, i, c, o]
}
class Ge extends se {
    constructor(t) {
        super(), re(this, t, Xv, Wv, Y, {
            height: 0,
            width: 1,
            colorScheme: 2,
            roundedStyle: 4
        })
    }
}

function Kv(e) {
    let t, n;
    return t = new Ge({
        props: {
            colorScheme: "darkGray",
            width: e[0],
            height: e[0]
        }
    }), {
        c() {
            N(t.$$.fragment)
        },
        m(r, s) {
            P(t, r, s), n = !0
        },
        p(r, [s]) {
            const i = {};
            s & 1 && (i.width = r[0]), s & 1 && (i.height = r[0]), t.$set(i)
        },
        i(r) {
            n || (S(t.$$.fragment, r), n = !0)
        },
        o(r) {
            T(t.$$.fragment, r), n = !1
        },
        d(r) {
            L(t, r)
        }
    }
}

function Zv(e, t, n) {
    let {
        size: r = 20
    } = t;
    return e.$$set = s => {
        "size" in s && n(0, r = s.size)
    }, [r]
}
class vt extends se {
    constructor(t) {
        super(), re(this, t, Zv, Kv, Y, {
            size: 0
        })
    }
}
const Jv = e => ({}),
    zo = e => ({}),
    Yv = e => ({
        error: e & 8
    }),
    jo = e => ({
        error: e[3]
    });

function Qv(e) {
    let t, n, r;
    var s = e[2];

    function i(o, c) {
        return {}
    }
    return s && (t = Yn(s, i())), {
        c() {
            t && N(t.$$.fragment), n = Ke()
        },
        m(o, c) {
            t && P(t, o, c), V(o, n, c), r = !0
        },
        p(o, c) {
            if (c & 4 && s !== (s = o[2])) {
                if (t) {
                    Re();
                    const l = t;
                    T(l.$$.fragment, 1, 0, () => {
                        L(l, 1)
                    }), Be()
                }
                s ? (t = Yn(s, i()), N(t.$$.fragment), S(t.$$.fragment, 1), P(t, n.parentNode, n)) : t = null
            }
        },
        i(o) {
            r || (t && S(t.$$.fragment, o), r = !0)
        },
        o(o) {
            t && T(t.$$.fragment, o), r = !1
        },
        d(o) {
            o && j(n), t && L(t, o)
        }
    }
}

function e_(e) {
    let t;
    const n = e[7].loading,
        r = yr(n, e, e[6], zo);
    return {
        c() {
            r && r.c()
        },
        m(s, i) {
            r && r.m(s, i), t = !0
        },
        p(s, i) {
            r && r.p && (!t || i & 64) && vr(r, n, s, s[6], t ? br(n, s[6], i, Jv) : _r(s[6]), zo)
        },
        i(s) {
            t || (S(r, s), t = !0)
        },
        o(s) {
            T(r, s), t = !1
        },
        d(s) {
            r && r.d(s)
        }
    }
}

function t_(e) {
    let t;
    const n = e[7].error,
        r = yr(n, e, e[6], jo);
    return {
        c() {
            r && r.c()
        },
        m(s, i) {
            r && r.m(s, i), t = !0
        },
        p(s, i) {
            r && r.p && (!t || i & 72) && vr(r, n, s, s[6], t ? br(n, s[6], i, Yv) : _r(s[6]), jo)
        },
        i(s) {
            t || (S(r, s), t = !0)
        },
        o(s) {
            T(r, s), t = !1
        },
        d(s) {
            r && r.d(s)
        }
    }
}

function n_(e) {
    let t, n, r, s;
    const i = [t_, e_, Qv],
        o = [];

    function c(l, f) {
        return l[1] === l[0].Error ? 0 : l[1] === l[0].Loading ? 1 : l[1] === l[0].Success ? 2 : -1
    }
    return ~(t = c(e)) && (n = o[t] = i[t](e)), {
        c() {
            n && n.c(), r = Ke()
        },
        m(l, f) {
            ~t && o[t].m(l, f), V(l, r, f), s = !0
        },
        p(l, [f]) {
            let u = t;
            t = c(l), t === u ? ~t && o[t].p(l, f) : (n && (Re(), T(o[u], 1, 1, () => {
                o[u] = null
            }), Be()), ~t ? (n = o[t], n ? n.p(l, f) : (n = o[t] = i[t](l), n.c()), S(n, 1), n.m(r.parentNode, r)) : n = null)
        },
        i(l) {
            s || (S(n), s = !0)
        },
        o(l) {
            T(n), s = !1
        },
        d(l) {
            l && j(r), ~t && o[t].d(l)
        }
    }
}
const Ps = new Map,
    r_ = async e => {
        const t = (await e()).default;
        return Ps.set(e, t), t
    };

function s_(e, t, n) {
    let {
        $$slots: r = {},
        $$scope: s
    } = t;
    const i = yu(r);
    var o;
    (function(y) {
        y[y.Initialized = 0] = "Initialized", y[y.Loading = 1] = "Loading", y[y.Success = 2] = "Success", y[y.Error = 3] = "Error"
    })(o || (o = {}));
    let {
        delay: c = 200
    } = t, {
        loader: l
    } = t, f = o.Initialized, u, a, d;
    const h = () => {
            window.clearTimeout(d)
        },
        p = async () => {
            h(), n(3, a = void 0), n(2, u = void 0), c > 0 ? (n(1, f = o.Initialized), d = window.setTimeout(() => {
                n(1, f = o.Loading)
            }, c)) : n(1, f = o.Loading);
            try {
                n(2, u = await r_(l)), n(1, f = o.Success)
            } catch (y) {
                if (n(1, f = o.Error), y instanceof Error && n(3, a = y), !i.error) throw y
            }
            h()
        };
    return Ps.has(l) ? (f = o.Success, u = Ps.get(l)) : pt(() => {
        p()
    }), e.$$set = y => {
        "delay" in y && n(4, c = y.delay), "loader" in y && n(5, l = y.loader), "$$scope" in y && n(6, s = y.$$scope)
    }, [o, f, u, a, c, l, s, r]
}
class fu extends se {
    constructor(t) {
        super(), re(this, t, s_, n_, Y, {
            delay: 4,
            loader: 5
        })
    }
}
const i_ = "modulepreload",
    o_ = function(e, t) {
        return e[0] === "." ? new URL(e, t).href : e
    },
    Uo = {},
    du = function(t, n, r) {
        let s = Promise.resolve();
        if (n && n.length > 0) {
            const i = document.getElementsByTagName("link"),
                o = document.querySelector("meta[property=csp-nonce]"),
                c = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
            s = Promise.all(n.map(l => {
                if (l = o_(l, r), l in Uo) return;
                Uo[l] = !0;
                const f = l.endsWith(".css"),
                    u = f ? '[rel="stylesheet"]' : "";
                if (!!r)
                    for (let h = i.length - 1; h >= 0; h--) {
                        const p = i[h];
                        if (p.href === l && (!f || p.rel === "stylesheet")) return
                    } else if (document.querySelector(`link[href="${l}"]${u}`)) return;
                const d = document.createElement("link");
                if (d.rel = f ? "stylesheet" : i_, f || (d.as = "script", d.crossOrigin = ""), d.href = l, c && d.setAttribute("nonce", c), document.head.appendChild(d), f) return new Promise((h, p) => {
                    d.addEventListener("load", h), d.addEventListener("error", () => p(new Error(`Unable to preload CSS for ${l}`)))
                })
            }))
        }
        return s.then(() => t()).catch(i => {
            const o = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (o.payload = i, window.dispatchEvent(o), !o.defaultPrevented) throw i
        })
    },
    a_ = () => du(() =>
        import ("./WidgetMessenger-DJmzom6u.js"), __vite__mapDeps([0, 1]),
        import.meta.url);

function c_(e) {
    let t, n, r, s, i, o, c, l, f, u, a, d, h, p, y, g, m, b, _, v, w, k, C, E, B, z, U, q, K, Q, ae, Fe, He, Dt, Mn;
    return s = new vt({
        props: {
            size: 32
        }
    }), c = new vt({
        props: {
            size: 32
        }
    }), f = new vt({
        props: {
            size: 32
        }
    }), a = new vt({
        props: {
            size: 32
        }
    }), y = new vt({
        props: {
            size: 44
        }
    }), b = new Ge({
        props: {
            height: 20,
            width: 270
        }
    }), v = new Ge({
        props: {
            height: 20,
            width: 122
        }
    }), E = new vt({
        props: {
            size: 28
        }
    }), U = new Ge({
        props: {
            height: 112,
            width: 295,
            roundedStyle: "rounded-6"
        }
    }), Q = new Ge({
        props: {
            height: 32,
            width: 295
        }
    }), Fe = new Ge({
        props: {
            height: 32,
            width: 148
        }
    }), Dt = new Ge({
        props: {
            height: 32,
            width: 224
        }
    }), {
        c() {
            t = R("div"), n = R("div"), r = R("div"), N(s.$$.fragment), i = te(), o = R("div"), N(c.$$.fragment), l = te(), N(f.$$.fragment), u = te(), N(a.$$.fragment), d = te(), h = R("div"), p = R("div"), N(y.$$.fragment), g = te(), m = R("div"), N(b.$$.fragment), _ = te(), N(v.$$.fragment), w = te(), k = R("div"), C = R("div"), N(E.$$.fragment), B = te(), z = R("div"), N(U.$$.fragment), q = te(), K = R("div"), N(Q.$$.fragment), ae = te(), N(Fe.$$.fragment), He = te(), N(Dt.$$.fragment), F(r, "class", "flex"), F(o, "class", "flex space-x-2"), F(n, "class", "flex justify-between"), F(p, "class", "flex ml-1 mr-2"), F(m, "class", "flex-bottom space-y-2"), F(h, "class", "flex mt-2"), F(C, "class", "flex ml-1 mr-2"), F(z, "class", "space-y-2"), F(k, "class", "flex items-baseline mt-8"), F(K, "class", "flex flex-col items-end space-y-5 mt-8 mr-1"), F(t, "slot", "loading"), F(t, "class", "h-full p-2 bg-white")
        },
        m(Z, hu) {
            V(Z, t, hu), D(t, n), D(n, r), P(s, r, null), D(n, i), D(n, o), P(c, o, null), D(o, l), P(f, o, null), D(o, u), P(a, o, null), D(t, d), D(t, h), D(h, p), P(y, p, null), D(h, g), D(h, m), P(b, m, null), D(m, _), P(v, m, null), D(t, w), D(t, k), D(k, C), P(E, C, null), D(k, B), D(k, z), P(U, z, null), D(t, q), D(t, K), P(Q, K, null), D(K, ae), P(Fe, K, null), D(K, He), P(Dt, K, null), Mn = !0
        },
        p: W,
        i(Z) {
            Mn || (S(s.$$.fragment, Z), S(c.$$.fragment, Z), S(f.$$.fragment, Z), S(a.$$.fragment, Z), S(y.$$.fragment, Z), S(b.$$.fragment, Z), S(v.$$.fragment, Z), S(E.$$.fragment, Z), S(U.$$.fragment, Z), S(Q.$$.fragment, Z), S(Fe.$$.fragment, Z), S(Dt.$$.fragment, Z), Mn = !0)
        },
        o(Z) {
            T(s.$$.fragment, Z), T(c.$$.fragment, Z), T(f.$$.fragment, Z), T(a.$$.fragment, Z), T(y.$$.fragment, Z), T(b.$$.fragment, Z), T(v.$$.fragment, Z), T(E.$$.fragment, Z), T(U.$$.fragment, Z), T(Q.$$.fragment, Z), T(Fe.$$.fragment, Z), T(Dt.$$.fragment, Z), Mn = !1
        },
        d(Z) {
            Z && j(t), L(s), L(c), L(f), L(a), L(y), L(b), L(v), L(E), L(U), L(Q), L(Fe), L(Dt)
        }
    }
}

function u_(e) {
    let t, n, r, s, i = e[0] + "",
        o;
    return {
        c() {
            t = R("div"), n = R("div"), n.textContent = "Failed to load widget", r = te(), s = R("div"), o = Yt(i), F(n, "class", "text-lg font-bold"), F(s, "class", "text-xs"), F(t, "slot", "error"), F(t, "class", "h-full p-4 bg-white text-red-500")
        },
        m(c, l) {
            V(c, t, l), D(t, n), D(t, r), D(t, s), D(s, o)
        },
        p(c, l) {
            l & 1 && i !== (i = c[0] + "") && wr(o, i)
        },
        d(c) {
            c && j(t)
        }
    }
}

function l_(e) {
    let t, n;
    return t = new fu({
        props: {
            loader: a_,
            delay: 0,
            $$slots: {
                error: [u_, ({
                    error: r
                }) => ({
                    0: r
                }), ({
                    error: r
                }) => r ? 1 : 0],
                loading: [c_]
            },
            $$scope: {
                ctx: e
            }
        }
    }), {
        c() {
            N(t.$$.fragment)
        },
        m(r, s) {
            P(t, r, s), n = !0
        },
        p(r, [s]) {
            const i = {};
            s & 3 && (i.$$scope = {
                dirty: s,
                ctx: r
            }), t.$set(i)
        },
        i(r) {
            n || (S(t.$$.fragment, r), n = !0)
        },
        o(r) {
            T(t.$$.fragment, r), n = !1
        },
        d(r) {
            L(t, r)
        }
    }
}
class f_ extends se {
    constructor(t) {
        super(), re(this, t, null, l_, Y, {})
    }
}

function Vo(e) {
    let t, n, r, s, i, o, c, l;
    return n = new On({
        props: {
            component: f_,
            id: Ee.widgetMessengerFrame,
            title: "Smartsupp widget messenger",
            frameStyle: Tn()
        }
    }), {
        c() {
            t = R("div"), N(n.$$.fragment), F(t, "data-testid", Ee.widgetMessengerFrame), ce(t, "transition", "max-height 250ms ease-in-out, width 250ms ease-in-out")
        },
        m(f, u) {
            V(f, t, u), P(n, t, null), e[6](t), o = !0, c || (l = vn(r = hb.call(null, t, e[2])), c = !0)
        },
        p(f, u) {
            r && ht(r.update) && u & 4 && r.update.call(null, f[2])
        },
        i(f) {
            o || (S(n.$$.fragment, f), f && Ce(() => {
                o && (i && i.end(1), s = Qt(t, je, {
                    y: 20,
                    duration: 200
                }), s.start())
            }), o = !0)
        },
        o(f) {
            T(n.$$.fragment, f), s && s.invalidate(), f && (i = en(t, je, {
                y: 10,
                duration: 150
            })), o = !1
        },
        d(f) {
            f && j(t), L(n), e[6](null), f && i && i.end(), c = !1, l()
        }
    }
}

function d_(e) {
    let t, n, r = e[1] && Vo(e);
    return {
        c() {
            r && r.c(), t = Ke()
        },
        m(s, i) {
            r && r.m(s, i), V(s, t, i), n = !0
        },
        p(s, [i]) {
            s[1] ? r ? (r.p(s, i), i & 2 && S(r, 1)) : (r = Vo(s), r.c(), S(r, 1), r.m(t.parentNode, t)) : r && (Re(), T(r, 1, 1, () => {
                r = null
            }), Be())
        },
        i(s) {
            n || (S(r), n = !0)
        },
        o(s) {
            T(r), n = !1
        },
        d(s) {
            s && j(t), r && r.d(s)
        }
    }
}
const qo = "MobileWidgetMessengerOpen";

function h_(e, t, n) {
    let r, s, i, o;
    ue(e, u0, a => n(1, r = a)), ue(e, Ze, a => n(4, s = a)), ue(e, _b, a => n(5, i = a)), ue(e, ga, a => n(2, o = a));
    let c;
    const l = (a, d) => {
        if (!c) return;
        const {
            width: h,
            height: p
        } = ib(a, d);
        n(0, c.style.maxHeight = Et(p) ? p : Zt(p), c), n(0, c.style.width = Et(h) ? h : Zt(h), c), n(0, c.style.height = a ? "100%" : "calc(100% - 40px)", c)
    };
    let f = !1;

    function u(a) {
        ft[a ? "unshift" : "push"](() => {
            c = a, n(0, c)
        })
    }
    return e.$$.update = () => {
        if (e.$$.dirty & 37 && c && l(o, i), e.$$.dirty & 26 && s) {
            if (r && !f) {
                const a = _t().createElement("style");
                a.textContent = "* {overflow: hidden}", a.className = qo, _t().head.appendChild(a), n(3, f = !0)
            }
            if (!r && f) {
                const a = _t().head.getElementsByClassName(qo);
                for (let d = 0; d < a.length; d++) _t().head.removeChild(a[d]);
                n(3, f = !1)
            }
        }
    }, [c, r, o, f, s, i, u]
}
class p_ extends se {
    constructor(t) {
        super(), re(this, t, h_, d_, Y, {})
    }
}
const g_ = () => du(() =>
    import ("./WidgetPopup-8gFSmQz4.js"), __vite__mapDeps([2, 1]),
    import.meta.url);

function m_(e) {
    let t, n, r, s, i, o, c, l, f, u;
    return n = new vt({
        props: {
            size: 44
        }
    }), i = new Ge({
        props: {
            height: 20,
            width: 270
        }
    }), c = new Ge({
        props: {
            height: 20,
            width: 270
        }
    }), f = new Ge({
        props: {
            height: 20,
            width: 122
        }
    }), {
        c() {
            t = R("div"), N(n.$$.fragment), r = te(), s = R("div"), N(i.$$.fragment), o = te(), N(c.$$.fragment), l = te(), N(f.$$.fragment), F(s, "class", "mt-4 space-y-2"), F(t, "slot", "loading"), F(t, "class", "h-full p-2 bg-white")
        },
        m(a, d) {
            V(a, t, d), P(n, t, null), D(t, r), D(t, s), P(i, s, null), D(s, o), P(c, s, null), D(s, l), P(f, s, null), u = !0
        },
        p: W,
        i(a) {
            u || (S(n.$$.fragment, a), S(i.$$.fragment, a), S(c.$$.fragment, a), S(f.$$.fragment, a), u = !0)
        },
        o(a) {
            T(n.$$.fragment, a), T(i.$$.fragment, a), T(c.$$.fragment, a), T(f.$$.fragment, a), u = !1
        },
        d(a) {
            a && j(t), L(n), L(i), L(c), L(f)
        }
    }
}

function y_(e) {
    let t, n;
    return t = new fu({
        props: {
            loader: g_,
            delay: 0,
            $$slots: {
                loading: [m_]
            },
            $$scope: {
                ctx: e
            }
        }
    }), {
        c() {
            N(t.$$.fragment)
        },
        m(r, s) {
            P(t, r, s), n = !0
        },
        p(r, [s]) {
            const i = {};
            s & 1 && (i.$$scope = {
                dirty: s,
                ctx: r
            }), t.$set(i)
        },
        i(r) {
            n || (S(t.$$.fragment, r), n = !0)
        },
        o(r) {
            T(t.$$.fragment, r), n = !1
        },
        d(r) {
            L(t, r)
        }
    }
}
class b_ extends se {
    constructor(t) {
        super(), re(this, t, null, y_, Y, {})
    }
}

function Ho(e) {
    let t, n, r, s, i, o, c;
    return n = new On({
        props: {
            component: b_,
            id: Ee.widgetPopupFrame,
            title: "Smartsupp widget popup",
            frameStyle: Tn()
        }
    }), {
        c() {
            var l;
            t = R("div"), N(n.$$.fragment), ce(t, "height", "calc(100% - 40px)"), ce(t, "border-radius", "12px"), ce(t, "transition", "box-shadow 0.2s ease-in-out"), ce(t, "transition", "max-height 250ms ease-in-out"), F(t, "data-testid", Ee.widgetPopupFrame), ce(t, "width", 300), ce(t, "box-shadow", `rgba(0, 0, 0, ${(l=e[3])!=null&&l.limitShadow?"0.2) 0px 3px 12px":`${e[1]}) 0px 3px 16px`}`)
        },
        m(l, f) {
            V(l, t, f), P(n, t, null), e[6](t), i = !0, o || (c = vn(pb.call(null, t)), o = !0)
        },
        p(l, f) {
            var u;
            f & 2 && ce(t, "box-shadow", `rgba(0, 0, 0, ${(u=l[3])!=null&&u.limitShadow?"0.2) 0px 3px 12px":`${l[1]}) 0px 3px 16px`}`)
        },
        i(l) {
            i || (S(n.$$.fragment, l), l && Ce(() => {
                i && (s && s.end(1), r = Qt(t, je, {
                    y: 20,
                    delay: 300,
                    duration: 400
                }), r.start())
            }), i = !0)
        },
        o(l) {
            T(n.$$.fragment, l), r && r.invalidate(), l && (s = en(t, je, {
                y: 10,
                duration: 400
            })), i = !1
        },
        d(l) {
            l && j(t), L(n), e[6](null), l && s && s.end(), o = !1, c()
        }
    }
}

function v_(e) {
    let t, n, r = e[2] && Ho(e);
    return {
        c() {
            r && r.c(), t = Ke()
        },
        m(s, i) {
            r && r.m(s, i), V(s, t, i), n = !0
        },
        p(s, [i]) {
            s[2] ? r ? (r.p(s, i), i & 4 && S(r, 1)) : (r = Ho(s), r.c(), S(r, 1), r.m(t.parentNode, t)) : r && (Re(), T(r, 1, 1, () => {
                r = null
            }), Be())
        },
        i(s) {
            n || (S(r), n = !0)
        },
        o(s) {
            T(r), n = !1
        },
        d(s) {
            s && j(t), r && r.d(s)
        }
    }
}

function __(e, t, n) {
    let r, s, i;
    ue(e, bb, a => n(4, r = a)), ue(e, yb, a => n(5, s = a)), ue(e, m0, a => n(2, i = a));
    let o;
    const c = a => {
            n(0, o.style.maxHeight = `${a}px`, o)
        },
        {
            widgetBlockingOptions: l
        } = M.getOptions();
    let f;

    function u(a) {
        ft[a ? "unshift" : "push"](() => {
            o = a, n(0, o)
        })
    }
    return e.$$.update = () => {
        e.$$.dirty & 33 && o && c(s), e.$$.dirty & 16 && n(1, f = r ? .28 : .16)
    }, [o, f, i, l, r, s, u]
}
class w_ extends se {
    constructor(t) {
        super(), re(this, t, __, v_, Y, {})
    }
}

function C_(e) {
    let t, n, r, s, i, o, c, l, f;
    return {
        c() {
            t = R("div"), n = R("div"), s = te(), i = R("div"), c = te(), l = R("div"), F(n, "class", r = $t(`typing-indicator ${e[0]} indicator-color-${e[1]} animate-typing`) + " svelte-13wgl1n"), ce(n, "animation-iteration-count", e[2]), F(i, "class", o = $t(`typing-indicator ${e[0]} indicator-color-${e[1]} typing-indicator-second animate-typing`) + " svelte-13wgl1n"), ce(i, "animation-iteration-count", e[2]), F(l, "class", f = $t(`typing-indicator ${e[0]} indicator-color-${e[1]} typing-indicator-third animate-typing`) + " svelte-13wgl1n"), ce(l, "animation-iteration-count", e[2]), F(t, "class", "flex p-2")
        },
        m(u, a) {
            V(u, t, a), D(t, n), D(t, s), D(t, i), D(t, c), D(t, l)
        },
        p(u, [a]) {
            a & 3 && r !== (r = $t(`typing-indicator ${u[0]} indicator-color-${u[1]} animate-typing`) + " svelte-13wgl1n") && F(n, "class", r), a & 4 && ce(n, "animation-iteration-count", u[2]), a & 3 && o !== (o = $t(`typing-indicator ${u[0]} indicator-color-${u[1]} typing-indicator-second animate-typing`) + " svelte-13wgl1n") && F(i, "class", o), a & 4 && ce(i, "animation-iteration-count", u[2]), a & 3 && f !== (f = $t(`typing-indicator ${u[0]} indicator-color-${u[1]} typing-indicator-third animate-typing`) + " svelte-13wgl1n") && F(l, "class", f), a & 4 && ce(l, "animation-iteration-count", u[2])
        },
        i: W,
        o: W,
        d(u) {
            u && j(t)
        }
    }
}

function A_(e, t, n) {
    let r, {
            size: s = "md"
        } = t,
        {
            color: i = "black"
        } = t,
        {
            iterations: o = void 0
        } = t;
    return e.$$set = c => {
        "size" in c && n(0, s = c.size), "color" in c && n(1, i = c.color), "iterations" in c && n(3, o = c.iterations)
    }, e.$$.update = () => {
        e.$$.dirty & 8 && n(2, r = o ? ? "infinite")
    }, [s, i, r, o]
}
class k_ extends se {
    constructor(t) {
        super(), re(this, t, A_, C_, Y, {
            size: 0,
            color: 1,
            iterations: 3
        })
    }
}

function F_(e) {
    let t, n, r;
    return n = new k_({
        props: {
            iterations: 2
        }
    }), {
        c() {
            t = R("div"), N(n.$$.fragment), F(t, "class", "flex-center h-full bg-white rounded-lg")
        },
        m(s, i) {
            V(s, t, i), P(n, t, null), r = !0
        },
        p: W,
        i(s) {
            r || (S(n.$$.fragment, s), r = !0)
        },
        o(s) {
            T(n.$$.fragment, s), r = !1
        },
        d(s) {
            s && j(t), L(n)
        }
    }
}
class S_ extends se {
    constructor(t) {
        super(), re(this, t, null, F_, Y, {})
    }
}

function Go(e) {
    let t, n, r, s, i, o, c;
    return n = new On({
        props: {
            component: S_,
            id: Ee.widgetTypingFrame,
            title: "Smartsupp widget typing",
            frameStyle: Tn()
        }
    }), {
        c() {
            var l;
            t = R("div"), N(n.$$.fragment), F(t, "style", `box-shadow: rgba(0, 0, 0, 0.2) ${(l=e[1])!=null&&l.limitShadow?"0px 3px 12px":"0px 3px 16px"}; border-radius: 24px;`), F(t, "data-testid", Ee.widgetTypingFrame), ce(t, "height", 40), ce(t, "width", 70)
        },
        m(l, f) {
            V(l, t, f), P(n, t, null), i = !0, o || (c = vn(gb.call(null, t)), o = !0)
        },
        p: W,
        i(l) {
            i || (S(n.$$.fragment, l), l && Ce(() => {
                i && (s && s.end(1), r = Qt(t, je, {
                    y: 20,
                    delay: 300,
                    duration: 400
                }), r.start())
            }), i = !0)
        },
        o(l) {
            T(n.$$.fragment, l), r && r.invalidate(), l && (s = en(t, je, {
                y: 10,
                duration: 250
            })), i = !1
        },
        d(l) {
            l && j(t), L(n), l && s && s.end(), o = !1, c()
        }
    }
}

function E_(e) {
    let t, n, r = e[0] && Go(e);
    return {
        c() {
            r && r.c(), t = Ke()
        },
        m(s, i) {
            r && r.m(s, i), V(s, t, i), n = !0
        },
        p(s, [i]) {
            s[0] ? r ? (r.p(s, i), i & 1 && S(r, 1)) : (r = Go(s), r.c(), S(r, 1), r.m(t.parentNode, t)) : r && (Re(), T(r, 1, 1, () => {
                r = null
            }), Be())
        },
        i(s) {
            n || (S(r), n = !0)
        },
        o(s) {
            T(r), n = !1
        },
        d(s) {
            s && j(t), r && r.d(s)
        }
    }
}

function T_(e, t, n) {
    let r;
    ue(e, g0, i => n(0, r = i));
    const {
        widgetBlockingOptions: s
    } = M.getOptions();
    return [r, s]
}
class x_ extends se {
    constructor(t) {
        super(), re(this, t, T_, E_, Y, {})
    }
}
const Ls = O(null),
    O_ = $([Ls], ([e]) => !!e);

function M_(e) {
    let t, n = '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/>',
        r = [{
            viewBox: "0 0 24 24"
        }, {
            width: "1.2em"
        }, {
            height: "1.2em"
        }, e[0]],
        s = {};
    for (let i = 0; i < r.length; i += 1) s = Ft(s, r[i]);
    return {
        c() {
            t = Jn("svg"), Wi(t, s)
        },
        m(i, o) {
            V(i, t, o), t.innerHTML = n
        },
        p(i, [o]) {
            Wi(t, s = sa(r, [{
                viewBox: "0 0 24 24"
            }, {
                width: "1.2em"
            }, {
                height: "1.2em"
            }, o & 1 && i[0]]))
        },
        i: W,
        o: W,
        d(i) {
            i && j(t)
        }
    }
}

function D_(e, t, n) {
    return e.$$set = r => {
        n(0, t = Ft(Ft({}, t), as(r)))
    }, t = as(t), [t]
}
class $_ extends se {
    constructor(t) {
        super(), re(this, t, D_, M_, Y, {})
    }
}

function R_(e) {
    let t, n, r, s, i, o, c;
    var l = e[0];

    function f(d, h) {
        return {
            props: {
                width: "1em",
                height: "1em",
                style: `transform: scale(${d[7]}) scaleX(${d[8]});`
            }
        }
    }
    l && (r = Yn(l, f(e)));
    let u = [{
            type: "button"
        }, {
            tabindex: "0"
        }, e[9], {
            "aria-label": e[1]
        }, {
            class: s = `btn btn-${e[4]} btn-${e[3]}`
        }, {
            disabled: e[5]
        }, {
            "data-testid": e[6]
        }],
        a = {};
    for (let d = 0; d < u.length; d += 1) a = Ft(a, u[d]);
    return {
        c() {
            t = R("button"), n = R("div"), r && N(r.$$.fragment), F(n, "class", "w-full h-full flex items-center justify-center"), ye(n, "animate-spin", e[2] === "spin"), Gi(t, a), ye(t, "btn-disabled", !!e[5]), ye(t, "cursor-auto", Rn()), ye(t, "cursor-pointer", !Rn()), ye(t, "svelte-1lb2fzt", !0)
        },
        m(d, h) {
            V(d, t, h), D(t, n), r && P(r, n, null), t.autofocus && t.focus(), i = !0, o || (c = lt(t, "click", Vs(e[11])), o = !0)
        },
        p(d, [h]) {
            if (h & 1 && l !== (l = d[0])) {
                if (r) {
                    Re();
                    const p = r;
                    T(p.$$.fragment, 1, 0, () => {
                        L(p, 1)
                    }), Be()
                }
                l ? (r = Yn(l, f(d)), N(r.$$.fragment), S(r.$$.fragment, 1), P(r, n, null)) : r = null
            } else if (l) {
                const p = {};
                h & 128 && (p.style = `transform: scale(${d[7]}) scaleX(${d[8]});`), r.$set(p)
            }(!i || h & 4) && ye(n, "animate-spin", d[2] === "spin"), Gi(t, a = sa(u, [{
                type: "button"
            }, {
                tabindex: "0"
            }, h & 512 && d[9], (!i || h & 2) && {
                "aria-label": d[1]
            }, (!i || h & 24 && s !== (s = `btn btn-${d[4]} btn-${d[3]}`)) && {
                class: s
            }, (!i || h & 32) && {
                disabled: d[5]
            }, (!i || h & 64) && {
                "data-testid": d[6]
            }])), ye(t, "btn-disabled", !!d[5]), ye(t, "cursor-auto", Rn()), ye(t, "cursor-pointer", !Rn()), ye(t, "svelte-1lb2fzt", !0)
        },
        i(d) {
            i || (r && S(r.$$.fragment, d), i = !0)
        },
        o(d) {
            r && T(r.$$.fragment, d), i = !1
        },
        d(d) {
            d && j(t), r && L(r), o = !1, c()
        }
    }
}

function B_(e, t, n) {
    const r = ["icon", "iconDescription", "iconOrientation", "iconAnimation", "size", "variant", "disabled", "testId"];
    let s = qi(t, r),
        {
            icon: i
        } = t,
        {
            iconDescription: o
        } = t,
        {
            iconOrientation: c = "right"
        } = t,
        {
            iconAnimation: l = "none"
        } = t,
        {
            size: f = "md"
        } = t,
        {
            variant: u = "ghost"
        } = t,
        {
            disabled: a = void 0
        } = t,
        {
            testId: d = void 0
        } = t;
    const h = c === "right" ? 1 : -1;
    let p = 1.2;

    function y(g) {
        Nt.call(this, e, g)
    }
    return e.$$set = g => {
        t = Ft(Ft({}, t), as(g)), n(9, s = qi(t, r)), "icon" in g && n(0, i = g.icon), "iconDescription" in g && n(1, o = g.iconDescription), "iconOrientation" in g && n(10, c = g.iconOrientation), "iconAnimation" in g && n(2, l = g.iconAnimation), "size" in g && n(3, f = g.size), "variant" in g && n(4, u = g.variant), "disabled" in g && n(5, a = g.disabled), "testId" in g && n(6, d = g.testId)
    }, e.$$.update = () => {
        e.$$.dirty & 8 && f === "xl" && n(7, p = 1.5)
    }, [i, o, l, f, u, a, d, p, h, s, c, y]
}
class I_ extends se {
    constructor(t) {
        super(), re(this, t, B_, R_, Y, {
            icon: 0,
            iconDescription: 1,
            iconOrientation: 10,
            iconAnimation: 2,
            size: 3,
            variant: 4,
            disabled: 5,
            testId: 6
        })
    }
}

function P_(e) {
    let t, n, r, s, i, o;
    return {
        c() {
            t = R("video"), n = R("track"), r = R("source"), F(n, "kind", "captions"), Zn(r.src, s = e[1].attachment.url) || F(r, "src", s), t.controls = !0, F(t, "class", "m-auto max-h-full max-w-full bg-black object-contain"), t.autoplay = !0, t.loop = !0
        },
        m(c, l) {
            V(c, t, l), D(t, n), D(t, r), i || (o = [lt(t, "click", Vs(e[6])), lt(t, "keypress", e[7])], i = !0)
        },
        p(c, l) {
            l & 2 && !Zn(r.src, s = c[1].attachment.url) && F(r, "src", s)
        },
        d(c) {
            c && j(t), i = !1, Ue(o)
        }
    }
}

function L_(e) {
    let t, n, r, s, i;
    return {
        c() {
            var o, c;
            t = R("img"), F(t, "class", "m-auto max-h-full max-w-full select-none bg-black"), F(t, "width", "auto"), F(t, "height", "auto"), Zn(t.src, n = (o = e[1]) == null ? void 0 : o.attachment.url) || F(t, "src", n), F(t, "alt", r = (c = e[1]) == null ? void 0 : c.attachment.fileName)
        },
        m(o, c) {
            V(o, t, c), s || (i = [lt(t, "click", Vs(e[4])), lt(t, "keypress", e[5])], s = !0)
        },
        p(o, c) {
            var l, f;
            c & 2 && !Zn(t.src, n = (l = o[1]) == null ? void 0 : l.attachment.url) && F(t, "src", n), c & 2 && r !== (r = (f = o[1]) == null ? void 0 : f.attachment.fileName) && F(t, "alt", r)
        },
        d(o) {
            o && j(t), s = !1, Ue(i)
        }
    }
}

function N_(e) {
    var v;
    let t, n, r, s, i = ((v = e[1]) == null ? void 0 : v.attachment.fileName) + "",
        o, c, l, f, u, a, d, h, p, y, g;
    f = new I_({
        props: {
            icon: $_,
            iconDescription: "Close",
            size: "xl"
        }
    }), f.$on("click", e[8]);

    function m(w, k) {
        var C, E;
        if (((C = w[1]) == null ? void 0 : C.type) === $s.Image) return L_;
        if (((E = w[1]) == null ? void 0 : E.type) === $s.Video) return P_
    }
    let b = m(e),
        _ = b && b(e);
    return {
        c() {
            t = R("div"), n = R("div"), r = R("div"), s = R("span"), o = Yt(i), c = te(), l = R("div"), N(f.$$.fragment), u = te(), a = R("div"), _ && _.c(), F(s, "class", "whitespace-nowrap text-ellipsis overflow-hidden"), F(r, "class", "flex-grow flex items-center text-md px-4 overflow-hidden"), F(l, "class", "flex-shrink"), F(n, "class", "flex-shrink flex flex-row w-full bg-black text-white"), F(a, "class", "relative overflow-hidden flex-grow flex items-center bg-black/80 z-10"), ye(a, "p-8", e[0]), ye(a, "p-4", !e[0]), F(t, "class", "w-full h-full flex flex-col")
        },
        m(w, k) {
            V(w, t, k), D(t, n), D(n, r), D(r, s), D(s, o), D(n, c), D(n, l), P(f, l, null), D(t, u), D(t, a), _ && _.m(a, null), p = !0, y || (g = [lt(a, "click", e[9]), lt(a, "keypress", e[3])], y = !0)
        },
        p(w, [k]) {
            var C;
            (!p || k & 2) && i !== (i = ((C = w[1]) == null ? void 0 : C.attachment.fileName) + "") && wr(o, i), b === (b = m(w)) && _ ? _.p(w, k) : (_ && _.d(1), _ = b && b(w), _ && (_.c(), _.m(a, null))), (!p || k & 1) && ye(a, "p-8", w[0]), (!p || k & 1) && ye(a, "p-4", !w[0])
        },
        i(w) {
            p || (S(f.$$.fragment, w), w && Ce(() => {
                p && (h && h.end(1), d = Qt(t, je, {
                    y: 20,
                    delay: 300,
                    duration: 400
                }), d.start())
            }), p = !0)
        },
        o(w) {
            T(f.$$.fragment, w), d && d.invalidate(), w && (h = en(t, je, {
                y: 10,
                duration: 250
            })), p = !1
        },
        d(w) {
            w && j(t), L(f), _ && _.d(), w && h && h.end(), y = !1, Ue(g)
        }
    }
}

function z_(e, t, n) {
    let r, s, i;
    ue(e, ml, p => n(0, s = p)), ue(e, Ls, p => n(1, i = p));
    const o = p => {
        p === "overlay" && !r || Ls.set(null)
    };

    function c(p) {
        Nt.call(this, e, p)
    }

    function l(p) {
        Nt.call(this, e, p)
    }

    function f(p) {
        Nt.call(this, e, p)
    }

    function u(p) {
        Nt.call(this, e, p)
    }

    function a(p) {
        Nt.call(this, e, p)
    }
    const d = () => o("button"),
        h = () => o("overlay");
    return e.$$.update = () => {
        e.$$.dirty & 1 && (r = s)
    }, [s, i, o, c, l, f, u, a, d, h]
}
class j_ extends se {
    constructor(t) {
        super(), re(this, t, z_, N_, Y, {})
    }
}

function Wo(e) {
    let t, n, r, s, i, o, c;
    return n = new On({
        props: {
            component: j_,
            id: Ee.widgetImagePreview,
            title: "Smartsupp widget image preview",
            frameStyle: Tn(V_)
        }
    }), {
        c() {
            t = R("div"), N(n.$$.fragment), F(t, "data-testid", Ee.widgetImagePreview), ce(t, "transition", "max-height 250ms ease-in-out, width 250ms ease-in-out")
        },
        m(l, f) {
            V(l, t, f), P(n, t, null), i = !0, o || (c = vn(mb.call(null, t)), o = !0)
        },
        i(l) {
            i || (S(n.$$.fragment, l), l && Ce(() => {
                i && (s && s.end(1), r = Qt(t, je, {
                    y: 20,
                    delay: 100,
                    duration: 250
                }), r.start())
            }), i = !0)
        },
        o(l) {
            T(n.$$.fragment, l), r && r.invalidate(), l && (s = en(t, je, {
                y: 10,
                duration: 250
            })), i = !1
        },
        d(l) {
            l && j(t), L(n), l && s && s.end(), o = !1, c()
        }
    }
}

function U_(e) {
    let t, n, r = e[0] && Wo();
    return {
        c() {
            r && r.c(), t = Ke()
        },
        m(s, i) {
            r && r.m(s, i), V(s, t, i), n = !0
        },
        p(s, [i]) {
            s[0] ? r ? i & 1 && S(r, 1) : (r = Wo(), r.c(), S(r, 1), r.m(t.parentNode, t)) : r && (Re(), T(r, 1, 1, () => {
                r = null
            }), Be())
        },
        i(s) {
            n || (S(r), n = !0)
        },
        o(s) {
            T(r), n = !1
        },
        d(s) {
            s && j(t), r && r.d(s)
        }
    }
}
const V_ = e => {
    e.style.position = "fixed"
};

function q_(e, t, n) {
    let r;
    return ue(e, O_, s => n(0, r = s)), [r]
}
class H_ extends se {
    constructor(t) {
        super(), re(this, t, q_, U_, Y, {})
    }
}

function G_(e) {
    let t, n, r, s, i, o, c, l, f, u;
    return t = new x_({}), r = new w_({}), i = new Gv({}), c = new p_({}), f = new H_({}), {
        c() {
            N(t.$$.fragment), n = te(), N(r.$$.fragment), s = te(), N(i.$$.fragment), o = te(), N(c.$$.fragment), l = te(), N(f.$$.fragment)
        },
        m(a, d) {
            P(t, a, d), V(a, n, d), P(r, a, d), V(a, s, d), P(i, a, d), V(a, o, d), P(c, a, d), V(a, l, d), P(f, a, d), u = !0
        },
        i(a) {
            u || (S(t.$$.fragment, a), S(r.$$.fragment, a), S(i.$$.fragment, a), S(c.$$.fragment, a), S(f.$$.fragment, a), u = !0)
        },
        o(a) {
            T(t.$$.fragment, a), T(r.$$.fragment, a), T(i.$$.fragment, a), T(c.$$.fragment, a), T(f.$$.fragment, a), u = !1
        },
        d(a) {
            a && (j(n), j(s), j(o), j(l)), L(t, a), L(r, a), L(i, a), L(c, a), L(f, a)
        }
    }
}

function W_(e) {
    let t, n;
    return t = new mv({
        props: {
            $$slots: {
                default: [G_]
            },
            $$scope: {
                ctx: e
            }
        }
    }), {
        c() {
            N(t.$$.fragment)
        },
        m(r, s) {
            P(t, r, s), n = !0
        },
        p(r, [s]) {
            const i = {};
            s & 4 && (i.$$scope = {
                dirty: s,
                ctx: r
            }), t.$set(i)
        },
        i(r) {
            n || (S(t.$$.fragment, r), n = !0)
        },
        o(r) {
            T(t.$$.fragment, r), n = !1
        },
        d(r) {
            L(t, r)
        }
    }
}

function X_(e, t, n) {
    let r, s;
    return ue(e, ke, i => n(0, r = i)), ue(e, Qg, i => n(1, s = i)), pt(() => {
        (async () => {
            await Uh(), await Ae.initClient()
        })()
    }), fy(ge()), A(Ze) && dy(ge()), e.$$.update = () => {
        e.$$.dirty & 3 && s && !r && Hc()
    }, [r, s]
}
class K_ extends se {
    constructor(t) {
        super(), re(this, t, X_, W_, Y, {})
    }
}
const Ui = Gs(window);
M.init(Ui.options);
Ui.installApi(lv);
Ii.setThemeColor(Ui.options);
hy();
rm();
new K_({
    target: document.getElementById("app")
});
export {
    as as $, An as A, ge as B, Re as C, Be as D, we as E, Ee as F, Nt as G, D as H, I_ as I, lt as J, Vs as K, Ce as L, Qt as M, yv as N, en as O, ww as P, Ad as Q, iw as R, se as S, te as T, ce as U, Zt as V, Cw as W, $_ as X, eb as Y, qi as Z, Ft as _, re as a, fr as a$, wr as a0, ew as a1, ye as a2, Ue as a3, oC as a4, Nc as a5, Rn as a6, Gi as a7, sa as a8, ml as a9, Kw as aA, ze as aB, J as aC, bl as aD, ec as aE, Zw as aF, eC as aG, Hu as aH, ya as aI, Qe as aJ, pw as aK, tC as aL, bC as aM, Zn as aN, Jw as aO, Bw as aP, Uw as aQ, Jn as aR, Wi as aS, Yn as aT, $t as aU, Dw as aV, Bp as aW, $w as aX, ie as aY, Ae as aZ, De as a_, Gt as aa, ft as ab, lw as ac, uw as ad, cw as ae, nw as af, tw as ag, rw as ah, yu as ai, Q_ as aj, ss as ak, Ve as al, aC as am, nC as an, rC as ao, cC as ap, lC as aq, uC as ar, hw as as, Xe as at, kt as au, pt as av, Uy as aw, Ot as ax, Ja as ay, So as az, F as b, Ow as b$, py as b0, Qw as b1, hi as b2, $r as b3, jr as b4, Sy as b5, ca as b6, Za as b7, Ew as b8, Ns as b9, Ci as bA, vw as bB, ne as bC, Xg as bD, Y_ as bE, Jp as bF, mn as bG, me as bH, Fi as bI, Ne as bJ, Cy as bK, dC as bL, Gw as bM, wi as bN, En as bO, vy as bP, ea as bQ, kr as bR, Iw as bS, zp as bT, Fu as bU, Rw as bV, gt as bW, ga as bX, pr as bY, yC as bZ, xt as b_, qw as ba, Hw as bb, x as bc, k_ as bd, je as be, _b as bf, aw as bg, bw as bh, Ze as bi, yw as bj, Lw as bk, Pw as bl, Up as bm, Sw as bn, Ls as bo, $s as bp, ow as bq, J_ as br, zw as bs, Nw as bt, jw as bu, ki as bv, Qp as bw, gw as bx, ht as by, mw as bz, yr as c, fh as c$, xw as c0, _i as c1, Ip as c2, Jt as c3, mC as c4, gC as c5, fC as c6, gi as c7, mc as c8, xc as c9, Mp as cA, Tw as cB, wt as cC, mi as cD, oe as cE, dr as cF, ln as cG, Fw as cH, ke as cI, Di as cJ, jt as cK, pC as cL, Ti as cM, r0 as cN, du as cO, Ge as cP, vt as cQ, Ph as cR, ac as cS, oc as cT, Zd as cU, Vd as cV, Yd as cW, eh as cX, th as cY, sh as cZ, lh as c_, Xw as ca, Qg as cb, yb as cc, Ur as cd, gc as ce, h0 as cf, bb as cg, mr as ch, zs as ci, Us as cj, tr as ck, nr as cl, ji as cm, dw as cn, fw as co, vn as cp, on as cq, Ye as cr, Xh as cs, qe as ct, Aw as cu, Vw as cv, rs as cw, sw as cx, Tg as cy, Yw as cz, $ as d, mh as d0, bh as d1, vh as d2, wh as d3, xh as d4, hC as d5, dl as d6, n0 as d7, Es as d8, Mi as d9, Mw as da, Hy as db, kw as dc, s0 as dd, Mc as de, Ww as df, R as e, V as f, A as g, vr as h, iC as i, _r as j, br as k, T as l, j as m, Ke as n, M as o, N as p, P as q, L as r, Y as s, S as t, sC as u, Yt as v, O as w, W as x, _w as y, ue as z
};
//# sourceMappingURL=main-SpaU58i-.js.map