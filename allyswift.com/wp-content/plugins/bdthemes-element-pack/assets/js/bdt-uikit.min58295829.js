/*! bdtUIkit 3.15.22 | https://www.getuikit.com | (c) 2014 - 2023 YOOtheme | MIT License */
/*! bdtUIkit 3.15.22 | https://www.getuikit.com | (c) 2014 - 2023 YOOtheme | MIT License */
(function(fe, pe) {
    typeof exports == "object" && typeof module < "u" ? module.exports = pe() : typeof define == "function" && define.amd ? define("uikit", pe) : (fe = typeof globalThis < "u" ? globalThis : fe || self, fe.bdtUIkit = pe())
})(this, function() {
    "use strict";
    const {
        hasOwnProperty: fe,
        toString: pe
    } = Object.prototype;

    function Bt(t, e) {
        return fe.call(t, e)
    }
    const vo = /\B([A-Z])/g,
        Gt = ft(t => t.replace(vo, "-$1").toLowerCase()),
        wo = /-(\w)/g,
        ge = ft(t => t.replace(wo, gs)),
        kt = ft(t => t.length ? gs(null, t.charAt(0)) + t.slice(1) : "");

    function gs(t, e) {
        return e ? e.toUpperCase() : ""
    }

    function at(t, e) {
        return t == null || t.startsWith == null ? void 0 : t.startsWith(e)
    }

    function Xt(t, e) {
        return t == null || t.endsWith == null ? void 0 : t.endsWith(e)
    }

    function p(t, e) {
        return t == null || t.includes == null ? void 0 : t.includes(e)
    }

    function wt(t, e) {
        return t == null || t.findIndex == null ? void 0 : t.findIndex(e)
    }
    const {
        isArray: J,
        from: Si
    } = Array, {
        assign: $t
    } = Object;

    function dt(t) {
        return typeof t == "function"
    }

    function St(t) {
        return t !== null && typeof t == "object"
    }

    function bt(t) {
        return pe.call(t) === "[object Object]"
    }

    function Jt(t) {
        return St(t) && t === t.window
    }

    function He(t) {
        return Ci(t) === 9
    }

    function Ti(t) {
        return Ci(t) >= 1
    }

    function Kt(t) {
        return Ci(t) === 1
    }

    function Ci(t) {
        return !Jt(t) && St(t) && t.nodeType
    }

    function Fe(t) {
        return typeof t == "boolean"
    }

    function D(t) {
        return typeof t == "string"
    }

    function Zt(t) {
        return typeof t == "number"
    }

    function Mt(t) {
        return Zt(t) || D(t) && !isNaN(t - parseFloat(t))
    }

    function me(t) {
        return !(J(t) ? t.length : St(t) && Object.keys(t).length)
    }

    function q(t) {
        return t === void 0
    }

    function Ii(t) {
        return Fe(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t
    }

    function Tt(t) {
        const e = Number(t);
        return isNaN(e) ? !1 : e
    }

    function $(t) {
        return parseFloat(t) || 0
    }

    function W(t) {
        return y(t)[0]
    }

    function y(t) {
        return t && (Ti(t) ? [t] : Array.from(t).filter(Ti)) || []
    }

    function Qt(t) {
        var e;
        if (Jt(t)) return t;
        t = W(t);
        const i = He(t) ? t : (e = t) == null ? void 0 : e.ownerDocument;
        return (i == null ? void 0 : i.defaultView) || window
    }

    function ve(t, e) {
        return t === e || St(t) && St(e) && Object.keys(t).length === Object.keys(e).length && xt(t, (i, s) => i === e[s])
    }

    function _i(t, e, i) {
        return t.replace(new RegExp(`${e}|${i}`, "g"), s => s === e ? i : e)
    }

    function Ut(t) {
        return t[t.length - 1]
    }

    function xt(t, e) {
        for (const i in t)
            if (e(t[i], i) === !1) return !1;
        return !0
    }

    function Le(t, e) {
        return t.slice().sort(({
            [e]: i = 0
        }, {
            [e]: s = 0
        }) => i > s ? 1 : s > i ? -1 : 0)
    }

    function Dt(t, e) {
        return t.reduce((i, s) => i + $(dt(e) ? e(s) : s[e]), 0)
    }

    function ms(t, e) {
        const i = new Set;
        return t.filter(({
            [e]: s
        }) => i.has(s) ? !1 : i.add(s))
    }

    function K(t, e = 0, i = 1) {
        return Math.min(Math.max(Tt(t) || 0, e), i)
    }

    function C() {}

    function Pi(...t) {
        return [
            ["bottom", "top"],
            ["right", "left"]
        ].every(([e, i]) => Math.min(...t.map(({
            [e]: s
        }) => s)) - Math.max(...t.map(({
            [i]: s
        }) => s)) > 0)
    }

    function We(t, e) {
        return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top
    }

    function Ei(t, e, i) {
        const s = e === "width" ? "height" : "width";
        return {
            [s]: t[e] ? Math.round(i * t[s] / t[e]) : t[s],
            [e]: i
        }
    }

    function vs(t, e) {
        t = { ...t
        };
        for (const i in t) t = t[i] > e[i] ? Ei(t, i, e[i]) : t;
        return t
    }

    function $o(t, e) {
        t = vs(t, e);
        for (const i in t) t = t[i] < e[i] ? Ei(t, i, e[i]) : t;
        return t
    }
    const Re = {
        ratio: Ei,
        contain: vs,
        cover: $o
    };

    function Ct(t, e, i = 0, s = !1) {
        e = y(e);
        const {
            length: n
        } = e;
        return n ? (t = Mt(t) ? Tt(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : e.indexOf(W(t)), s ? K(t, 0, n - 1) : (t %= n, t < 0 ? t + n : t)) : -1
    }

    function ft(t) {
        const e = Object.create(null);
        return i => e[i] || (e[i] = t(i))
    }
    class je {
        constructor() {
            this.promise = new Promise((e, i) => {
                this.reject = i, this.resolve = e
            })
        }
    }

    function b(t, e, i) {
        if (St(e)) {
            for (const n in e) b(t, n, e[n]);
            return
        }
        if (q(i)) {
            var s;
            return (s = W(t)) == null ? void 0 : s.getAttribute(e)
        } else
            for (const n of y(t)) dt(i) && (i = i.call(n, b(n, e))), i === null ? we(n, e) : n.setAttribute(e, i)
    }

    function It(t, e) {
        return y(t).some(i => i.hasAttribute(e))
    }

    function we(t, e) {
        y(t).forEach(i => i.removeAttribute(e))
    }

    function it(t, e) {
        for (const i of [e, `data-${e}`])
            if (It(t, i)) return b(t, i)
    }
    const bo = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };

    function Ai(t) {
        return y(t).some(e => bo[e.tagName.toLowerCase()])
    }

    function j(t) {
        return y(t).some(e => e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    const $e = "input,select,textarea,button";

    function Oi(t) {
        return y(t).some(e => H(e, $e))
    }
    const qe = `${$e},a[href],[tabindex]`;

    function Ve(t) {
        return H(t, qe)
    }

    function P(t) {
        var e;
        return (e = W(t)) == null ? void 0 : e.parentElement
    }

    function Ye(t, e) {
        return y(t).filter(i => H(i, e))
    }

    function H(t, e) {
        return y(t).some(i => i.matches(e))
    }

    function Q(t, e) {
        return Kt(t) ? t.closest(at(e, ">") ? e.slice(1) : e) : y(t).map(i => Q(i, e)).filter(Boolean)
    }

    function I(t, e) {
        return D(e) ? !!Q(t, e) : W(e).contains(W(t))
    }

    function te(t, e) {
        const i = [];
        for (; t = P(t);)(!e || H(t, e)) && i.push(t);
        return i
    }

    function E(t, e) {
        t = W(t);
        const i = t ? y(t.children) : [];
        return e ? Ye(i, e) : i
    }

    function ee(t, e) {
        return e ? y(t).indexOf(W(e)) : E(P(t)).indexOf(t)
    }

    function lt(t, e) {
        return Bi(t, $s(t, e))
    }

    function be(t, e) {
        return xe(t, $s(t, e))
    }

    function Bi(t, e) {
        return W(bs(t, W(e), "querySelector"))
    }

    function xe(t, e) {
        return y(bs(t, W(e), "querySelectorAll"))
    }
    const xo = /(^|[^\\],)\s*[!>+~-]/,
        ws = ft(t => t.match(xo));

    function $s(t, e = document) {
        return D(t) && ws(t) || He(e) ? e : e.ownerDocument
    }
    const yo = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g,
        ko = ft(t => t.replace(yo, "$1 *"));

    function bs(t, e = document, i) {
        if (!t || !D(t)) return t;
        if (t = ko(t), ws(t)) {
            const s = To(t);
            t = "";
            for (let n of s) {
                let o = e;
                if (n[0] === "!") {
                    const r = n.substr(1).trim().split(" ");
                    if (o = Q(P(e), r[0]), n = r.slice(1).join(" ").trim(), !n.length && s.length === 1) return o
                }
                if (n[0] === "-") {
                    const r = n.substr(1).trim().split(" "),
                        a = (o || e).previousElementSibling;
                    o = H(a, n.substr(1)) ? a : null, n = r.slice(1).join(" ")
                }
                o && (t += `${t?",":""}${Co(o)} ${n}`)
            }
            e = document
        }
        try {
            return e[i](t)
        } catch {
            return null
        }
    }
    const So = /.*?[^\\](?:,|$)/g,
        To = ft(t => t.match(So).map(e => e.replace(/,$/, "").trim()));

    function Co(t) {
        const e = [];
        for (; t.parentNode;) {
            const i = b(t, "id");
            if (i) {
                e.unshift(`#${Mi(i)}`);
                break
            } else {
                let {
                    tagName: s
                } = t;
                s !== "HTML" && (s += `:nth-child(${ee(t)+1})`), e.unshift(s), t = t.parentNode
            }
        }
        return e.join(" > ")
    }

    function Mi(t) {
        return D(t) ? CSS.escape(t) : ""
    }

    function S(...t) {
        let [e, i, s, n, o = !1] = Di(t);
        n.length > 1 && (n = _o(n)), o != null && o.self && (n = Po(n)), s && (n = Io(s, n));
        for (const r of i)
            for (const a of e) a.addEventListener(r, n, o);
        return () => zt(e, i, n, o)
    }

    function zt(...t) {
        let [e, i, , s, n = !1] = Di(t);
        for (const o of i)
            for (const r of e) r.removeEventListener(o, s, n)
    }

    function z(...t) {
        const [e, i, s, n, o = !1, r] = Di(t), a = S(e, i, s, l => {
            const h = !r || r(l);
            h && (a(), n(l, h))
        }, o);
        return a
    }

    function m(t, e, i) {
        return zi(t).every(s => s.dispatchEvent(Nt(e, !0, !0, i)))
    }

    function Nt(t, e = !0, i = !1, s) {
        return D(t) && (t = new CustomEvent(t, {
            bubbles: e,
            cancelable: i,
            detail: s
        })), t
    }

    function Di(t) {
        return t[0] = zi(t[0]), D(t[1]) && (t[1] = t[1].split(" ")), dt(t[2]) && t.splice(2, 0, !1), t
    }

    function Io(t, e) {
        return i => {
            const s = t[0] === ">" ? xe(t, i.currentTarget).reverse().filter(n => I(i.target, n))[0] : Q(i.target, t);
            s && (i.current = s, e.call(this, i))
        }
    }

    function _o(t) {
        return e => J(e.detail) ? t(e, ...e.detail) : t(e)
    }

    function Po(t) {
        return function(e) {
            if (e.target === e.currentTarget || e.target === e.current) return t.call(null, e)
        }
    }

    function xs(t) {
        return t && "addEventListener" in t
    }

    function Eo(t) {
        return xs(t) ? t : W(t)
    }

    function zi(t) {
        return J(t) ? t.map(Eo).filter(Boolean) : D(t) ? xe(t) : xs(t) ? [t] : y(t)
    }

    function yt(t) {
        return t.pointerType === "touch" || !!t.touches
    }

    function ie(t) {
        var e, i;
        const {
            clientX: s,
            clientY: n
        } = ((e = t.touches) == null ? void 0 : e[0]) || ((i = t.changedTouches) == null ? void 0 : i[0]) || t;
        return {
            x: s,
            y: n
        }
    }

    function ys(t, e) {
        const i = {
            data: null,
            method: "GET",
            headers: {},
            xhr: new XMLHttpRequest,
            beforeSend: C,
            responseType: "",
            ...e
        };
        return Promise.resolve().then(() => i.beforeSend(i)).then(() => Ao(t, i))
    }

    function Ao(t, e) {
        return new Promise((i, s) => {
            const {
                xhr: n
            } = e;
            for (const o in e)
                if (o in n) try {
                    n[o] = e[o]
                } catch {}
            n.open(e.method.toUpperCase(), t);
            for (const o in e.headers) n.setRequestHeader(o, e.headers[o]);
            S(n, "load", () => {
                n.status === 0 || n.status >= 200 && n.status < 300 || n.status === 304 ? i(n) : s($t(Error(n.statusText), {
                    xhr: n,
                    status: n.status
                }))
            }), S(n, "error", () => s($t(Error("Network Error"), {
                xhr: n
            }))), S(n, "timeout", () => s($t(Error("Network Timeout"), {
                xhr: n
            }))), n.send(e.data)
        })
    }

    function ks(t, e, i) {
        return new Promise((s, n) => {
            const o = new Image;
            o.onerror = r => {
                n(r)
            }, o.onload = () => {
                s(o)
            }, i && (o.sizes = i), e && (o.srcset = e), o.src = t
        })
    }
    const Oo = {
        "animation-iteration-count": !0,
        "column-count": !0,
        "fill-opacity": !0,
        "flex-grow": !0,
        "flex-shrink": !0,
        "font-weight": !0,
        "line-height": !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        "stroke-dasharray": !0,
        "stroke-dashoffset": !0,
        widows: !0,
        "z-index": !0,
        zoom: !0
    };

    function c(t, e, i, s = "") {
        const n = y(t);
        for (const o of n)
            if (D(e)) {
                if (e = Ni(e), q(i)) return getComputedStyle(o).getPropertyValue(e);
                o.style.setProperty(e, Mt(i) && !Oo[e] ? `${i}px` : i || Zt(i) ? i : "", s)
            } else if (J(e)) {
            const r = {};
            for (const a of e) r[a] = c(o, a);
            return r
        } else St(e) && (s = i, xt(e, (r, a) => c(o, a, r, s)));
        return n[0]
    }
    const Ni = ft(t => Bo(t));

    function Bo(t) {
        if (at(t, "--")) return t;
        t = Gt(t);
        const {
            style: e
        } = document.documentElement;
        if (t in e) return t;
        for (const i of ["webkit", "moz"]) {
            const s = `-${i}-${t}`;
            if (s in e) return s
        }
    }

    function x(t, ...e) {
        Ss(t, e, "add")
    }

    function B(t, ...e) {
        Ss(t, e, "remove")
    }

    function Hi(t, e) {
        b(t, "class", i => (i || "").replace(new RegExp(`\\b${e}\\b\\s?`, "g"), ""))
    }

    function Fi(t, ...e) {
        e[0] && B(t, e[0]), e[1] && x(t, e[1])
    }

    function A(t, e) {
        return [e] = Li(e), !!e && y(t).some(i => i.classList.contains(e))
    }

    function R(t, e, i) {
        const s = Li(e);
        q(i) || (i = !!i);
        for (const n of y(t))
            for (const o of s) n.classList.toggle(o, i)
    }

    function Ss(t, e, i) {
        e = e.reduce((s, n) => s.concat(Li(n)), []);
        for (const s of y(t)) s.classList[i](...e)
    }

    function Li(t) {
        return String(t).split(/\s|,/).filter(Boolean)
    }

    function Mo(t, e, i = 400, s = "linear") {
        return i = Math.round(i), Promise.all(y(t).map(n => new Promise((o, r) => {
            for (const l in e) {
                const h = c(n, l);
                h === "" && c(n, l, h)
            }
            const a = setTimeout(() => m(n, "transitionend"), i);
            z(n, "transitionend transitioncanceled", ({
                type: l
            }) => {
                clearTimeout(a), B(n, "bdt-transition"), c(n, {
                    transitionProperty: "",
                    transitionDuration: "",
                    transitionTimingFunction: ""
                }), l === "transitioncanceled" ? r() : o(n)
            }, {
                self: !0
            }), x(n, "bdt-transition"), c(n, {
                transitionProperty: Object.keys(e).map(Ni).join(","),
                transitionDuration: `${i}ms`,
                transitionTimingFunction: s,
                ...e
            })
        })))
    }
    const T = {
            start: Mo,
            async stop(t) {
                m(t, "transitionend"), await Promise.resolve()
            },
            async cancel(t) {
                m(t, "transitioncanceled"), await Promise.resolve()
            },
            inProgress(t) {
                return A(t, "bdt-transition")
            }
        },
        ye = "bdt-animation-";

    function Ts(t, e, i = 200, s, n) {
        return Promise.all(y(t).map(o => new Promise((r, a) => {
            m(o, "animationcanceled");
            const l = setTimeout(() => m(o, "animationend"), i);
            z(o, "animationend animationcanceled", ({
                type: h
            }) => {
                clearTimeout(l), h === "animationcanceled" ? a() : r(o), c(o, "animationDuration", ""), Hi(o, `${ye}\\S*`)
            }, {
                self: !0
            }), c(o, "animationDuration", `${i}ms`), x(o, e, ye + (n ? "leave" : "enter")), at(e, ye) && (s && x(o, `bdt-transform-origin-${s}`), n && x(o, `${ye}reverse`))
        })))
    }
    const Do = new RegExp(`${ye}(enter|leave)`),
        pt = { in: Ts,
            out(t, e, i, s) {
                return Ts(t, e, i, s, !0)
            },
            inProgress(t) {
                return Do.test(b(t, "class"))
            },
            cancel(t) {
                m(t, "animationcanceled")
            }
        };

    function zo(t) {
        if (document.readyState !== "loading") {
            t();
            return
        }
        z(document, "DOMContentLoaded", t)
    }

    function ht(t, ...e) {
        return e.some(i => {
            var s;
            return (t == null || (s = t.tagName) == null ? void 0 : s.toLowerCase()) === i.toLowerCase()
        })
    }

    function Cs(t) {
        return t = v(t), t.innerHTML = "", t
    }

    function _t(t, e) {
        return q(e) ? v(t).innerHTML : L(Cs(t), e)
    }
    const No = Je("prepend"),
        L = Je("append"),
        Ge = Je("before"),
        Xe = Je("after");

    function Je(t) {
        return function(e, i) {
            var s;
            const n = y(D(i) ? Ht(i) : i);
            return (s = v(e)) == null || s[t](...n), Is(n)
        }
    }

    function st(t) {
        y(t).forEach(e => e.remove())
    }

    function Ke(t, e) {
        for (e = W(Ge(t, e)); e.firstChild;) e = e.firstChild;
        return L(e, t), e
    }

    function Wi(t, e) {
        return y(y(t).map(i => i.hasChildNodes() ? Ke(y(i.childNodes), e) : L(i, e)))
    }

    function ke(t) {
        y(t).map(P).filter((e, i, s) => s.indexOf(e) === i).forEach(e => e.replaceWith(...e.childNodes))
    }
    const Ho = /^\s*<(\w+|!)[^>]*>/,
        Fo = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    function Ht(t) {
        const e = Fo.exec(t);
        if (e) return document.createElement(e[1]);
        const i = document.createElement("div");
        return Ho.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t, Is(i.childNodes)
    }

    function Is(t) {
        return t.length > 1 ? t : t[0]
    }

    function mt(t, e) {
        if (Kt(t))
            for (e(t), t = t.firstElementChild; t;) {
                const i = t.nextElementSibling;
                mt(t, e), t = i
            }
    }

    function v(t, e) {
        return _s(t) ? W(Ht(t)) : Bi(t, e)
    }

    function N(t, e) {
        return _s(t) ? y(Ht(t)) : xe(t, e)
    }

    function _s(t) {
        return D(t) && at(t.trim(), "<")
    }
    const Ft = {
        width: ["left", "right"],
        height: ["top", "bottom"]
    };

    function w(t) {
        const e = Kt(t) ? W(t).getBoundingClientRect() : {
            height: Z(t),
            width: Se(t),
            top: 0,
            left: 0
        };
        return {
            height: e.height,
            width: e.width,
            top: e.top,
            left: e.left,
            bottom: e.top + e.height,
            right: e.left + e.width
        }
    }

    function _(t, e) {
        const i = w(t);
        if (t) {
            const {
                scrollY: n,
                scrollX: o
            } = Qt(t), r = {
                height: n,
                width: o
            };
            for (const a in Ft)
                for (const l of Ft[a]) i[l] += r[a]
        }
        if (!e) return i;
        const s = c(t, "position");
        xt(c(t, ["left", "top"]), (n, o) => c(t, o, e[o] - i[o] + $(s === "absolute" && n === "auto" ? Ze(t)[o] : n)))
    }

    function Ze(t) {
        let {
            top: e,
            left: i
        } = _(t);
        const {
            ownerDocument: {
                body: s,
                documentElement: n
            },
            offsetParent: o
        } = W(t);
        let r = o || n;
        for (; r && (r === s || r === n) && c(r, "position") === "static";) r = r.parentNode;
        if (Kt(r)) {
            const a = _(r);
            e -= a.top + $(c(r, "borderTopWidth")), i -= a.left + $(c(r, "borderLeftWidth"))
        }
        return {
            top: e - $(c(t, "marginTop")),
            left: i - $(c(t, "marginLeft"))
        }
    }

    function Lt(t) {
        t = W(t);
        const e = [t.offsetTop, t.offsetLeft];
        for (; t = t.offsetParent;)
            if (e[0] += t.offsetTop + $(c(t, "borderTopWidth")), e[1] += t.offsetLeft + $(c(t, "borderLeftWidth")), c(t, "position") === "fixed") {
                const i = Qt(t);
                return e[0] += i.scrollY, e[1] += i.scrollX, e
            }
        return e
    }
    const Z = Ps("height"),
        Se = Ps("width");

    function Ps(t) {
        const e = kt(t);
        return (i, s) => {
            if (q(s)) {
                if (Jt(i)) return i[`inner${e}`];
                if (He(i)) {
                    const n = i.documentElement;
                    return Math.max(n[`offset${e}`], n[`scroll${e}`])
                }
                return i = W(i), s = c(i, t), s = s === "auto" ? i[`offset${e}`] : $(s) || 0, s - se(i, t)
            } else return c(i, t, !s && s !== 0 ? "" : +s + se(i, t) + "px")
        }
    }

    function se(t, e, i = "border-box") {
        return c(t, "boxSizing") === i ? Dt(Ft[e].map(kt), s => $(c(t, `padding${s}`)) + $(c(t, `border${s}Width`))) : 0
    }

    function Qe(t) {
        for (const e in Ft)
            for (const i in Ft[e])
                if (Ft[e][i] === t) return Ft[e][1 - i];
        return t
    }

    function nt(t, e = "width", i = window, s = !1) {
        return D(t) ? Dt(Wo(t), n => {
            const o = jo(n);
            return o ? qo(o === "vh" ? Vo() : o === "vw" ? Se(Qt(i)) : s ? i[`offset${kt(e)}`] : w(i)[e], n) : n
        }) : $(t)
    }
    const Lo = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g,
        Wo = ft(t => t.toString().replace(/\s/g, "").match(Lo) || []),
        Ro = /(?:v[hw]|%)$/,
        jo = ft(t => (t.match(Ro) || [])[0]);

    function qo(t, e) {
        return t * $(e) / 100
    }
    let Te, ne;

    function Vo() {
        return Te || (ne || (ne = v("<div>"), c(ne, {
            height: "100vh",
            position: "fixed"
        }), S(window, "resize", () => Te = null)), L(document.body, ne), Te = ne.clientHeight, st(ne), Te)
    }
    const Wt = typeof window < "u",
        Y = Wt && document.dir === "rtl",
        Rt = Wt && "ontouchstart" in window,
        oe = Wt && window.PointerEvent,
        gt = oe ? "pointerdown" : Rt ? "touchstart" : "mousedown",
        Ue = oe ? "pointermove" : Rt ? "touchmove" : "mousemove",
        Pt = oe ? "pointerup" : Rt ? "touchend" : "mouseup",
        jt = oe ? "pointerenter" : Rt ? "" : "mouseenter",
        re = oe ? "pointerleave" : Rt ? "" : "mouseleave",
        ti = oe ? "pointercancel" : "touchcancel",
        G = {
            reads: [],
            writes: [],
            read(t) {
                return this.reads.push(t), ji(), t
            },
            write(t) {
                return this.writes.push(t), ji(), t
            },
            clear(t) {
                As(this.reads, t), As(this.writes, t)
            },
            flush: Ri
        };

    function Ri(t) {
        Es(G.reads), Es(G.writes.splice(0)), G.scheduled = !1, (G.reads.length || G.writes.length) && ji(t + 1)
    }
    const Yo = 4;

    function ji(t) {
        G.scheduled || (G.scheduled = !0, t && t < Yo ? Promise.resolve().then(() => Ri(t)) : requestAnimationFrame(() => Ri(1)))
    }

    function Es(t) {
        let e;
        for (; e = t.shift();) try {
            e()
        } catch (i) {
            console.error(i)
        }
    }

    function As(t, e) {
        const i = t.indexOf(e);
        return ~i && t.splice(i, 1)
    }

    function qi() {}
    qi.prototype = {
        positions: [],
        init() {
            this.positions = [];
            let t;
            this.unbind = S(document, "mousemove", e => t = ie(e)), this.interval = setInterval(() => {
                t && (this.positions.push(t), this.positions.length > 5 && this.positions.shift())
            }, 50)
        },
        cancel() {
            var t;
            (t = this.unbind) == null || t.call(this), this.interval && clearInterval(this.interval)
        },
        movesTo(t) {
            if (this.positions.length < 2) return !1;
            const e = t.getBoundingClientRect(),
                {
                    left: i,
                    right: s,
                    top: n,
                    bottom: o
                } = e,
                [r] = this.positions,
                a = Ut(this.positions),
                l = [r, a];
            return We(a, e) ? !1 : [
                [{
                    x: i,
                    y: n
                }, {
                    x: s,
                    y: o
                }],
                [{
                    x: i,
                    y: o
                }, {
                    x: s,
                    y: n
                }]
            ].some(u => {
                const d = Go(l, u);
                return d && We(d, e)
            })
        }
    };

    function Go([{
        x: t,
        y: e
    }, {
        x: i,
        y: s
    }], [{
        x: n,
        y: o
    }, {
        x: r,
        y: a
    }]) {
        const l = (a - o) * (i - t) - (r - n) * (s - e);
        if (l === 0) return !1;
        const h = ((r - n) * (e - o) - (a - o) * (t - n)) / l;
        return h < 0 ? !1 : {
            x: t + h * (i - t),
            y: e + h * (s - e)
        }
    }

    function ae(t, e, i, s = !0) {
        const n = new IntersectionObserver(s ? (o, r) => {
            o.some(a => a.isIntersecting) && e(o, r)
        } : e, i);
        for (const o of y(t)) n.observe(o);
        return n
    }
    const Xo = Wt && window.ResizeObserver;

    function Ce(t, e, i = {
        box: "border-box"
    }) {
        return Xo ? Bs(ResizeObserver, t, e, i) : (Jo(), Ie.add(e), {
            disconnect() {
                Ie.delete(e)
            }
        })
    }
    let Ie;

    function Jo() {
        if (Ie) return;
        Ie = new Set;
        let t;
        const e = () => {
            if (!t) {
                t = !0, requestAnimationFrame(() => t = !1);
                for (const i of Ie) i()
            }
        };
        S(window, "load resize", e), S(document, "loadedmetadata load", e, !0)
    }

    function Os(t, e, i) {
        return Bs(MutationObserver, t, e, i)
    }

    function Bs(t, e, i, s) {
        const n = new t(i);
        for (const o of y(e)) n.observe(o, s);
        return n
    }
    const X = {};
    X.events = X.created = X.beforeConnect = X.connected = X.beforeDisconnect = X.disconnected = X.destroy = Vi, X.args = function(t, e) {
        return e !== !1 && Vi(e || t)
    }, X.update = function(t, e) {
        return Le(Vi(t, dt(e) ? {
            read: e
        } : e), "order")
    }, X.props = function(t, e) {
        if (J(e)) {
            const i = {};
            for (const s of e) i[s] = String;
            e = i
        }
        return X.methods(t, e)
    }, X.computed = X.methods = function(t, e) {
        return e ? t ? { ...t,
            ...e
        } : e : t
    }, X.data = function(t, e, i) {
        return i ? Ms(t, e, i) : e ? t ? function(s) {
            return Ms(t, e, s)
        } : e : t
    };

    function Ms(t, e, i) {
        return X.computed(dt(t) ? t.call(i, i) : t, dt(e) ? e.call(i, i) : e)
    }

    function Vi(t, e) {
        return t = t && !J(t) ? [t] : t, e ? t ? t.concat(e) : J(e) ? e : [e] : t
    }

    function Ko(t, e) {
        return q(e) ? t : e
    }

    function le(t, e, i) {
        const s = {};
        if (dt(e) && (e = e.options), e.extends && (t = le(t, e.extends, i)), e.mixins)
            for (const o of e.mixins) t = le(t, o, i);
        for (const o in t) n(o);
        for (const o in e) Bt(t, o) || n(o);

        function n(o) {
            s[o] = (X[o] || Ko)(t[o], e[o], i)
        }
        return s
    }

    function _e(t, e = []) {
        try {
            return t ? at(t, "{") ? JSON.parse(t) : e.length && !p(t, ":") ? {
                [e[0]]: t
            } : t.split(";").reduce((i, s) => {
                const [n, o] = s.split(/:(.*)/);
                return n && !q(o) && (i[n.trim()] = o.trim()), i
            }, {}) : {}
        } catch {
            return {}
        }
    }

    function Ds(t) {
        if (ii(t) && Yi(t, {
                func: "playVideo",
                method: "play"
            }), ei(t)) try {
            t.play().catch(C)
        } catch {}
    }

    function zs(t) {
        ii(t) && Yi(t, {
            func: "pauseVideo",
            method: "pause"
        }), ei(t) && t.pause()
    }

    function Ns(t) {
        ii(t) && Yi(t, {
            func: "mute",
            method: "setVolume",
            value: 0
        }), ei(t) && (t.muted = !0)
    }

    function Hs(t) {
        return ei(t) || ii(t)
    }

    function ei(t) {
        return ht(t, "video")
    }

    function ii(t) {
        return ht(t, "iframe") && (Fs(t) || Ls(t))
    }

    function Fs(t) {
        return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)
    }

    function Ls(t) {
        return !!t.src.match(/vimeo\.com\/video\/.*/)
    }
    async function Yi(t, e) {
        await Qo(t), Ws(t, e)
    }

    function Ws(t, e) {
        try {
            t.contentWindow.postMessage(JSON.stringify({
                event: "command",
                ...e
            }), "*")
        } catch {}
    }
    const Gi = "_ukPlayer";
    let Zo = 0;

    function Qo(t) {
        if (t[Gi]) return t[Gi];
        const e = Fs(t),
            i = Ls(t),
            s = ++Zo;
        let n;
        return t[Gi] = new Promise(o => {
            e && z(t, "load", () => {
                const r = () => Ws(t, {
                    event: "listening",
                    id: s
                });
                n = setInterval(r, 100), r()
            }), z(window, "message", o, !1, ({
                data: r
            }) => {
                try {
                    return r = JSON.parse(r), r && (e && r.id === s && r.event === "onReady" || i && Number(r.player_id) === s)
                } catch {}
            }), t.src = `${t.src}${p(t.src,"?")?"&":"?"}${e?"enablejsapi=1":`api=1&player_id=${s}`}`
        }).then(() => clearInterval(n))
    }

    function Xi(t, e = 0, i = 0) {
        return j(t) ? Pi(...he(t).map(s => {
            const {
                top: n,
                left: o,
                bottom: r,
                right: a
            } = ot(s);
            return {
                top: n - e,
                left: o - i,
                bottom: r + e,
                right: a + i
            }
        }).concat(_(t))) : !1
    }

    function Rs(t, {
        offset: e = 0
    } = {}) {
        const i = j(t) ? ct(t, !1, ["hidden"]) : [];
        return i.reduce((r, a, l) => {
            const {
                scrollTop: h,
                scrollHeight: u,
                offsetHeight: d
            } = a, f = ot(a), g = u - f.height, {
                height: k,
                top: M
            } = i[l - 1] ? ot(i[l - 1]) : _(t);
            let O = Math.ceil(M - f.top - e + h);
            return e > 0 && d < k + e ? O += e : e = 0, O > g ? (e -= O - g, O = g) : O < 0 && (e -= O, O = 0), () => s(a, O - h).then(r)
        }, () => Promise.resolve())();

        function s(r, a) {
            return new Promise(l => {
                const h = r.scrollTop,
                    u = n(Math.abs(a)),
                    d = Date.now();
                (function f() {
                    const g = o(K((Date.now() - d) / u));
                    r.scrollTop = h + a * g, g === 1 ? l() : requestAnimationFrame(f)
                })()
            })
        }

        function n(r) {
            return 40 * Math.pow(r, .375)
        }

        function o(r) {
            return .5 * (1 - Math.cos(Math.PI * r))
        }
    }

    function Ji(t, e = 0, i = 0) {
        if (!j(t)) return 0;
        const [s] = ct(t, !0), {
            scrollHeight: n,
            scrollTop: o
        } = s, {
            height: r
        } = ot(s), a = n - r, l = Lt(t)[0] - Lt(s)[0], h = Math.max(0, l - r + e), u = Math.min(a, l + t.offsetHeight - i);
        return K((o - h) / (u - h))
    }

    function ct(t, e = !1, i = []) {
        const s = js(t);
        let n = te(t).reverse();
        n = n.slice(n.indexOf(s) + 1);
        const o = wt(n, r => c(r, "position") === "fixed");
        return ~o && (n = n.slice(o)), [s].concat(n.filter(r => p(["auto", "scroll", ...i], c(r, "overflow")) && (!e || r.scrollHeight > ot(r).height))).reverse()
    }

    function he(t) {
        return ct(t, !1, ["hidden", "clip"])
    }

    function ot(t) {
        const e = Qt(t),
            {
                document: {
                    documentElement: i
                }
            } = e;
        let s = t === js(t) ? e : t;
        const {
            visualViewport: n
        } = e;
        if (Jt(s) && n) {
            let {
                height: r,
                width: a,
                scale: l,
                pageTop: h,
                pageLeft: u
            } = n;
            return r = Math.round(r * l), a = Math.round(a * l), {
                height: r,
                width: a,
                top: h,
                left: u,
                bottom: h + r,
                right: u + a
            }
        }
        let o = _(s);
        if (c(s, "display") === "inline") return o;
        for (let [r, a, l, h] of [
                ["width", "x", "left", "right"],
                ["height", "y", "top", "bottom"]
            ]) Jt(s) ? s = i : o[l] += $(c(s, `border-${l}-width`)), o[r] = o[a] = s[`client${kt(r)}`], o[h] = o[r] + o[l];
        return o
    }

    function js(t) {
        return Qt(t).document.scrollingElement
    }
    const rt = [
        ["width", "x", "left", "right"],
        ["height", "y", "top", "bottom"]
    ];

    function qs(t, e, i) {
        i = {
            attach: {
                element: ["left", "top"],
                target: ["left", "top"],
                ...i.attach
            },
            offset: [0, 0],
            placement: [],
            ...i
        }, J(e) || (e = [e, e]), _(t, Vs(t, e, i))
    }

    function Vs(t, e, i) {
        const s = Ys(t, e, i),
            {
                boundary: n,
                viewportOffset: o = 0,
                placement: r
            } = i;
        let a = s;
        for (const [l, [h, , u, d]] of Object.entries(rt)) {
            const f = Uo(t, e[l], o, n, l);
            if (si(s, f, l)) continue;
            let g = 0;
            if (r[l] === "flip") {
                const k = i.attach.target[l];
                if (k === d && s[d] <= f[d] || k === u && s[u] >= f[u]) continue;
                g = er(t, e, i, l)[u] - s[u];
                const M = tr(t, e[l], o, l);
                if (!si(Ki(s, g, l), M, l)) {
                    if (si(s, M, l)) continue;
                    if (i.recursion) return !1;
                    const O = ir(t, e, i);
                    if (O && si(O, M, 1 - l)) return O;
                    continue
                }
            } else if (r[l] === "shift") {
                const k = _(e[l]),
                    {
                        offset: M
                    } = i;
                g = K(K(s[u], f[u], f[d] - s[h]), k[u] - s[h] + M[l], k[d] - M[l]) - s[u]
            }
            a = Ki(a, g, l)
        }
        return a
    }

    function Ys(t, e, i) {
        let {
            attach: s,
            offset: n
        } = {
            attach: {
                element: ["left", "top"],
                target: ["left", "top"],
                ...i.attach
            },
            offset: [0, 0],
            ...i
        }, o = _(t);
        for (const [r, [a, , l, h]] of Object.entries(rt)) {
            const u = s.target[r] === s.element[r] ? ot(e[r]) : _(e[r]);
            o = Ki(o, u[l] - o[l] + Gs(s.target[r], h, u[a]) - Gs(s.element[r], h, o[a]) + +n[r], r)
        }
        return o
    }

    function Ki(t, e, i) {
        const [, s, n, o] = rt[i], r = { ...t
        };
        return r[n] = t[s] = t[n] + e, r[o] += e, r
    }

    function Gs(t, e, i) {
        return t === "center" ? i / 2 : t === e ? i : 0
    }

    function Uo(t, e, i, s, n) {
        let o = Js(...Xs(t, e).map(ot));
        return i && (o[rt[n][2]] += i, o[rt[n][3]] -= i), s && (o = Js(o, _(J(s) ? s[n] : s))), o
    }

    function tr(t, e, i, s) {
        const [n, o, r, a] = rt[s], [l] = Xs(t, e), h = ot(l);
        return ["auto", "scroll"].includes(c(l, `overflow-${o}`)) && (h[r] -= l[`scroll${kt(r)}`], h[a] = h[r] + l[`scroll${kt(n)}`]), h[r] += i, h[a] -= i, h
    }

    function Xs(t, e) {
        return he(e).filter(i => I(t, i))
    }

    function Js(...t) {
        let e = {};
        for (const i of t)
            for (const [, , s, n] of rt) e[s] = Math.max(e[s] || 0, i[s]), e[n] = Math.min(...[e[n], i[n]].filter(Boolean));
        return e
    }

    function si(t, e, i) {
        const [, , s, n] = rt[i];
        return t[s] >= e[s] && t[n] <= e[n]
    }

    function er(t, e, {
        offset: i,
        attach: s
    }, n) {
        return Ys(t, e, {
            attach: {
                element: Ks(s.element, n),
                target: Ks(s.target, n)
            },
            offset: sr(i, n)
        })
    }

    function ir(t, e, i) {
        return Vs(t, e, { ...i,
            attach: {
                element: i.attach.element.map(Zs).reverse(),
                target: i.attach.target.map(Zs).reverse()
            },
            offset: i.offset.reverse(),
            placement: i.placement.reverse(),
            recursion: !0
        })
    }

    function Ks(t, e) {
        const i = [...t],
            s = rt[e].indexOf(t[e]);
        return ~s && (i[e] = rt[e][1 - s % 2 + 2]), i
    }

    function Zs(t) {
        for (let e = 0; e < rt.length; e++) {
            const i = rt[e].indexOf(t);
            if (~i) return rt[1 - e][i % 2 + 2]
        }
    }

    function sr(t, e) {
        return t = [...t], t[e] *= -1, t
    }
    var nr = Object.freeze({
        __proto__: null,
        $: v,
        $$: N,
        Animation: pt,
        Deferred: je,
        Dimensions: Re,
        MouseTracker: qi,
        Transition: T,
        addClass: x,
        after: Xe,
        ajax: ys,
        append: L,
        apply: mt,
        assign: $t,
        attr: b,
        before: Ge,
        boxModelAdjust: se,
        camelize: ge,
        children: E,
        clamp: K,
        closest: Q,
        createEvent: Nt,
        css: c,
        data: it,
        dimensions: w,
        each: xt,
        empty: Cs,
        endsWith: Xt,
        escape: Mi,
        fastdom: G,
        filter: Ye,
        find: Bi,
        findAll: xe,
        findIndex: wt,
        flipPosition: Qe,
        fragment: Ht,
        getEventPos: ie,
        getImage: ks,
        getIndex: Ct,
        hasAttr: It,
        hasClass: A,
        hasOwn: Bt,
        hasTouch: Rt,
        height: Z,
        html: _t,
        hyphenate: Gt,
        inBrowser: Wt,
        includes: p,
        index: ee,
        intersectRect: Pi,
        isArray: J,
        isBoolean: Fe,
        isDocument: He,
        isElement: Kt,
        isEmpty: me,
        isEqual: ve,
        isFocusable: Ve,
        isFunction: dt,
        isInView: Xi,
        isInput: Oi,
        isNode: Ti,
        isNumber: Zt,
        isNumeric: Mt,
        isObject: St,
        isPlainObject: bt,
        isRtl: Y,
        isString: D,
        isTag: ht,
        isTouch: yt,
        isUndefined: q,
        isVideo: Hs,
        isVisible: j,
        isVoidElement: Ai,
        isWindow: Jt,
        last: Ut,
        matches: H,
        memoize: ft,
        mergeOptions: le,
        mute: Ns,
        noop: C,
        observeIntersection: ae,
        observeMutation: Os,
        observeResize: Ce,
        off: zt,
        offset: _,
        offsetPosition: Lt,
        offsetViewport: ot,
        on: S,
        once: z,
        overflowParents: he,
        parent: P,
        parents: te,
        parseOptions: _e,
        pause: zs,
        play: Ds,
        pointInRect: We,
        pointerCancel: ti,
        pointerDown: gt,
        pointerEnter: jt,
        pointerLeave: re,
        pointerMove: Ue,
        pointerUp: Pt,
        position: Ze,
        positionAt: qs,
        prepend: No,
        propName: Ni,
        query: lt,
        queryAll: be,
        ready: zo,
        remove: st,
        removeAttr: we,
        removeClass: B,
        removeClasses: Hi,
        replaceClass: Fi,
        scrollIntoView: Rs,
        scrollParents: ct,
        scrolledOver: Ji,
        selFocusable: qe,
        selInput: $e,
        sortBy: Le,
        startsWith: at,
        sumBy: Dt,
        swap: _i,
        toArray: Si,
        toBoolean: Ii,
        toEventTargets: zi,
        toFloat: $,
        toNode: W,
        toNodes: y,
        toNumber: Tt,
        toPx: nt,
        toWindow: Qt,
        toggleClass: R,
        trigger: m,
        ucfirst: kt,
        uniqueBy: ms,
        unwrap: ke,
        width: Se,
        within: I,
        wrapAll: Ke,
        wrapInner: Wi
    });

    function or(t) {
        const e = t.data;
        t.use = function(n) {
            if (!n.installed) return n.call(null, this), n.installed = !0, this
        }, t.mixin = function(n, o) {
            o = (D(o) ? t.component(o) : o) || this, o.options = le(o.options, n)
        }, t.extend = function(n) {
            n = n || {};
            const o = this,
                r = function(l) {
                    this._init(l)
                };
            return r.prototype = Object.create(o.prototype), r.prototype.constructor = r, r.options = le(o.options, n), r.super = o, r.extend = o.extend, r
        }, t.update = function(n, o) {
            n = n ? W(n) : document.body;
            for (const r of te(n).reverse()) s(r[e], o);
            mt(n, r => s(r[e], o))
        };
        let i;
        Object.defineProperty(t, "container", {
            get() {
                return i || document.body
            },
            set(n) {
                i = v(n)
            }
        });

        function s(n, o) {
            if (n)
                for (const r in n) n[r]._connected && n[r]._callUpdate(o)
        }
    }

    function rr(t) {
        t.prototype._callHook = function(s) {
            var n;
            (n = this.$options[s]) == null || n.forEach(o => o.call(this))
        }, t.prototype._callConnected = function() {
            this._connected || (this._data = {}, this._computed = {}, this._initProps(), this._callHook("beforeConnect"), this._connected = !0, this._initEvents(), this._initObservers(), this._callHook("connected"), this._callUpdate())
        }, t.prototype._callDisconnected = function() {
            this._connected && (this._callHook("beforeDisconnect"), this._disconnectObservers(), this._unbindEvents(), this._callHook("disconnected"), this._connected = !1, delete this._watch)
        }, t.prototype._callUpdate = function(s = "update") {
            this._connected && ((s === "update" || s === "resize") && this._callWatches(), this.$options.update && (this._updates || (this._updates = new Set, G.read(() => {
                this._connected && e.call(this, this._updates), delete this._updates
            })), this._updates.add(s.type || s)))
        }, t.prototype._callWatches = function() {
            if (this._watch) return;
            const s = !Bt(this, "_watch");
            this._watch = G.read(() => {
                this._connected && i.call(this, s), this._watch = null
            })
        };

        function e(s) {
            for (const {
                    read: n,
                    write: o,
                    events: r = []
                } of this.$options.update) {
                if (!s.has("update") && !r.some(l => s.has(l))) continue;
                let a;
                n && (a = n.call(this, this._data, s), a && bt(a) && $t(this._data, a)), o && a !== !1 && G.write(() => {
                    this._connected && o.call(this, this._data, s)
                })
            }
        }

        function i(s) {
            const {
                $options: {
                    computed: n
                }
            } = this, o = { ...this._computed
            };
            this._computed = {};
            for (const r in n) {
                const {
                    watch: a,
                    immediate: l
                } = n[r];
                a && (s && l || Bt(o, r) && !ve(o[r], this[r])) && a.call(this, this[r], o[r])
            }
        }
    }

    function ar(t) {
        let e = 0;
        t.prototype._init = function(i) {
            i = i || {}, i.data = ur(i, this.constructor.options), this.$options = le(this.constructor.options, i, this), this.$el = null, this.$props = {}, this._uid = e++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), i.el && this.$mount(i.el)
        }, t.prototype._initData = function() {
            const {
                data: i = {}
            } = this.$options;
            for (const s in i) this.$props[s] = this[s] = i[s]
        }, t.prototype._initMethods = function() {
            const {
                methods: i
            } = this.$options;
            if (i)
                for (const s in i) this[s] = i[s].bind(this)
        }, t.prototype._initComputeds = function() {
            const {
                computed: i
            } = this.$options;
            if (this._computed = {}, i)
                for (const s in i) lr(this, s, i[s])
        }, t.prototype._initProps = function(i) {
            let s;
            i = i || Qs(this.$options);
            for (s in i) q(i[s]) || (this.$props[s] = i[s]);
            const n = [this.$options.computed, this.$options.methods];
            for (s in this.$props) s in i && hr(n, s) && (this[s] = this.$props[s])
        }, t.prototype._initEvents = function() {
            this._events = [];
            for (const i of this.$options.events || [])
                if (Bt(i, "handler")) ni(this, i);
                else
                    for (const s in i) ni(this, i[s], s)
        }, t.prototype._unbindEvents = function() {
            this._events.forEach(i => i()), delete this._events
        }, t.prototype._initObservers = function() {
            this._observers = [fr(this), dr(this)]
        }, t.prototype.registerObserver = function(...i) {
            this._observers.push(...i)
        }, t.prototype._disconnectObservers = function() {
            this._observers.forEach(i => i == null ? void 0 : i.disconnect())
        }
    }

    function Qs(t) {
        const e = {},
            {
                args: i = [],
                props: s = {},
                el: n,
                id: o
            } = t;
        if (!s) return e;
        for (const a in s) {
            const l = Gt(a);
            let h = it(n, l);
            q(h) || (h = s[a] === Boolean && h === "" ? !0 : Zi(s[a], h), !(l === "target" && at(h, "_")) && (e[a] = h))
        }
        const r = _e(it(n, o), i);
        for (const a in r) {
            const l = ge(a);
            q(s[l]) || (e[l] = Zi(s[l], r[a]))
        }
        return e
    }

    function lr(t, e, i) {
        Object.defineProperty(t, e, {
            enumerable: !0,
            get() {
                const {
                    _computed: s,
                    $props: n,
                    $el: o
                } = t;
                return Bt(s, e) || (s[e] = (i.get || i).call(t, n, o)), s[e]
            },
            set(s) {
                const {
                    _computed: n
                } = t;
                n[e] = i.set ? i.set.call(t, s) : s, q(n[e]) && delete n[e]
            }
        })
    }

    function ni(t, e, i) {
        bt(e) || (e = {
            name: i,
            handler: e
        });
        let {
            name: s,
            el: n,
            handler: o,
            capture: r,
            passive: a,
            delegate: l,
            filter: h,
            self: u
        } = e;
        if (n = dt(n) ? n.call(t) : n || t.$el, J(n)) {
            n.forEach(d => ni(t, { ...e,
                el: d
            }, i));
            return
        }!n || h && !h.call(t) || t._events.push(S(n, s, l ? D(l) ? l : l.call(t) : null, D(o) ? t[o] : o.bind(t), {
            passive: a,
            capture: r,
            self: u
        }))
    }

    function hr(t, e) {
        return t.every(i => !i || !Bt(i, e))
    }

    function Zi(t, e) {
        return t === Boolean ? Ii(e) : t === Number ? Tt(e) : t === "list" ? cr(e) : t ? t(e) : e
    }

    function cr(t) {
        return J(t) ? t : D(t) ? t.split(/,(?![^(]*\))/).map(e => Mt(e) ? Tt(e) : Ii(e.trim())) : [t]
    }

    function ur({
        data: t = {}
    }, {
        args: e = [],
        props: i = {}
    }) {
        J(t) && (t = t.slice(0, e.length).reduce((s, n, o) => (bt(n) ? $t(s, n) : s[e[o]] = n, s), {}));
        for (const s in t) q(t[s]) ? delete t[s] : i[s] && (t[s] = Zi(i[s], t[s]));
        return t
    }

    function dr(t) {
        let {
            el: e,
            computed: i
        } = t.$options;
        if (!i) return;
        for (const n in i)
            if (i[n].document) {
                e = e.ownerDocument;
                break
            }
        const s = new MutationObserver(() => t._callWatches());
        return s.observe(e, {
            childList: !0,
            subtree: !0
        }), s
    }

    function fr(t) {
        const {
            $options: e,
            $props: i
        } = t, {
            id: s,
            attrs: n,
            props: o,
            el: r
        } = e;
        if (!o || n === !1) return;
        const a = J(n) ? n : Object.keys(o),
            l = a.map(u => Gt(u)).concat(s),
            h = new MutationObserver(u => {
                const d = Qs(e);
                u.some(({
                    attributeName: f
                }) => {
                    const g = f.replace("data-", "");
                    return (g === s ? a : [ge(g), ge(f)]).some(k => !q(d[k]) && d[k] !== i[k])
                }) && t.$reset()
            });
        return h.observe(r, {
            attributes: !0,
            attributeFilter: l.concat(l.map(u => `data-${u}`))
        }), h
    }

    function pr(t) {
        const e = t.data;
        t.prototype.$create = function(i, s, n) {
            return t[i](s, n)
        }, t.prototype.$mount = function(i) {
            const {
                name: s
            } = this.$options;
            i[e] || (i[e] = {}), !i[e][s] && (i[e][s] = this, this.$el = this.$options.el = this.$options.el || i, I(i, document) && this._callConnected())
        }, t.prototype.$reset = function() {
            this._callDisconnected(), this._callConnected()
        }, t.prototype.$destroy = function(i = !1) {
            const {
                el: s,
                name: n
            } = this.$options;
            s && this._callDisconnected(), this._callHook("destroy"), s != null && s[e] && (delete s[e][n], me(s[e]) || delete s[e], i && st(this.$el))
        }, t.prototype.$emit = function(i) {
            this._callUpdate(i)
        }, t.prototype.$update = function(i = this.$el, s) {
            t.update(i, s)
        }, t.prototype.$getComponent = t.getComponent, Object.defineProperty(t.prototype, "$container", Object.getOwnPropertyDescriptor(t, "container"))
    }
    const Et = {};

    function gr(t) {
        const {
            data: e,
            prefix: i
        } = t;
        t.component = function(s, n) {
            s = Gt(s);
            const o = i + s;
            if (!n) return bt(Et[o]) && (Et[o] = Et[`data-${o}`] = t.extend(Et[o])), Et[o];
            s = ge(s), t[s] = function(a, l) {
                const h = t.component(s);
                return h.options.functional ? new h({
                    data: bt(a) ? a : [...arguments]
                }) : a ? N(a).map(u)[0] : u();

                function u(d) {
                    const f = t.getComponent(d, s);
                    if (f)
                        if (l) f.$destroy();
                        else return f;
                    return new h({
                        el: d,
                        data: l
                    })
                }
            };
            const r = bt(n) ? { ...n
            } : n.options;
            return r.id = o, r.name = s, r.install == null || r.install(t, r, s), t._initialized && !r.functional && requestAnimationFrame(() => t[s](`[${o}],[data-${o}]`)), Et[o] = Et[`data-${o}`] = bt(n) ? r : n
        }, t.getComponents = s => (s == null ? void 0 : s[e]) || {}, t.getComponent = (s, n) => t.getComponents(s)[n], t.connect = s => {
            if (s[e])
                for (const n in s[e]) s[e][n]._callConnected();
            for (const n of s.getAttributeNames()) {
                const o = Us(n);
                o && t[o](s)
            }
        }, t.disconnect = s => {
            for (const n in s[e]) s[e][n]._callDisconnected()
        }
    }

    function Us(t) {
        const e = Et[t];
        return e && (bt(e) ? e : e.options).name
    }
    const U = function(t) {
        this._init(t)
    };
    U.util = nr, U.data = "__uikit__", U.prefix = "bdt-", U.options = {}, U.version = "3.15.22", or(U), rr(U), ar(U), gr(U), pr(U);

    function mr(t) {
        const {
            connect: e,
            disconnect: i
        } = t;
        if (!Wt || !window.MutationObserver) return;
        requestAnimationFrame(function() {
            m(document, "uikit:init", t), document.body && mt(document.body, e), new MutationObserver(o => o.forEach(s)).observe(document, {
                childList: !0,
                subtree: !0
            }), new MutationObserver(o => o.forEach(n)).observe(document, {
                attributes: !0,
                subtree: !0
            }), t._initialized = !0
        });

        function s({
            addedNodes: o,
            removedNodes: r
        }) {
            for (const a of o) mt(a, e);
            for (const a of r) mt(a, i)
        }

        function n({
            target: o,
            attributeName: r
        }) {
            const a = Us(r);
            if (a) {
                var l;
                if (It(o, r)) {
                    t[a](o);
                    return
                }(l = t.getComponent(o, a)) == null || l.$destroy()
            }
        }
    }
    var tt = {
            connected() {
                x(this.$el, this.$options.id)
            }
        },
        Pe = {
            data: {
                preload: 5
            },
            methods: {
                lazyload(t = this.$el, e = this.$el) {
                    this.registerObserver(ae(t, (i, s) => {
                        for (const n of y(dt(e) ? e() : e)) N('[loading="lazy"]', n).slice(0, this.preload - 1).forEach(o => we(o, "loading"));
                        for (const n of i.filter(({
                                isIntersecting: o
                            }) => o).map(({
                                target: o
                            }) => o)) s.unobserve(n)
                    }))
                }
            }
        },
        At = {
            props: {
                cls: Boolean,
                animation: "list",
                duration: Number,
                velocity: Number,
                origin: String,
                transition: String
            },
            data: {
                cls: !1,
                animation: [!1],
                duration: 200,
                velocity: .2,
                origin: !1,
                transition: "ease",
                clsEnter: "bdt-togglabe-enter",
                clsLeave: "bdt-togglabe-leave"
            },
            computed: {
                hasAnimation({
                    animation: t
                }) {
                    return !!t[0]
                },
                hasTransition({
                    animation: t
                }) {
                    return ["slide", "reveal"].some(e => at(t[0], e))
                }
            },
            methods: {
                toggleElement(t, e, i) {
                    return new Promise(s => Promise.all(y(t).map(n => {
                        const o = Fe(e) ? e : !this.isToggled(n);
                        if (!m(n, `before${o?"show":"hide"}`, [this])) return Promise.reject();
                        const r = (dt(i) ? i : i === !1 || !this.hasAnimation ? vr : this.hasTransition ? wr : $r)(n, o, this),
                            a = o ? this.clsEnter : this.clsLeave;
                        x(n, a), m(n, o ? "show" : "hide", [this]);
                        const l = () => {
                            B(n, a), m(n, o ? "shown" : "hidden", [this])
                        };
                        return r ? r.then(l, () => (B(n, a), Promise.reject())) : l()
                    })).then(s, C))
                },
                isToggled(t = this.$el) {
                    return [t] = y(t), A(t, this.clsEnter) ? !0 : A(t, this.clsLeave) ? !1 : this.cls ? A(t, this.cls.split(" ")[0]) : j(t)
                },
                _toggle(t, e) {
                    if (!t) return;
                    e = Boolean(e);
                    let i;
                    this.cls ? (i = p(this.cls, " ") || e !== A(t, this.cls), i && R(t, this.cls, p(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden, i && (t.hidden = !e)), N("[autofocus]", t).some(s => j(s) ? s.focus() || !0 : s.blur()), i && m(t, "toggled", [e, this])
                }
            }
        };

    function vr(t, e, {
        _toggle: i
    }) {
        return pt.cancel(t), T.cancel(t), i(t, e)
    }
    async function wr(t, e, {
        animation: i,
        duration: s,
        velocity: n,
        transition: o,
        _toggle: r
    }) {
        var a;
        const [l = "reveal", h = "top"] = ((a = i[0]) == null ? void 0 : a.split("-")) || [], u = [
            ["left", "right"],
            ["top", "bottom"]
        ], d = u[p(u[0], h) ? 0 : 1], f = d[1] === h, k = ["width", "height"][u.indexOf(d)], M = `margin-${d[0]}`, O = `margin-${h}`;
        let Ot = w(t)[k];
        const fs = T.inProgress(t);
        await T.cancel(t), e && r(t, !0);
        const jl = Object.fromEntries(["padding", "border", "width", "height", "minWidth", "minHeight", "overflowY", "overflowX", M, O].map(mo => [mo, t.style[mo]])),
            Ne = w(t),
            ps = $(c(t, M)),
            fo = $(c(t, O)),
            Yt = Ne[k] + fo;
        !fs && !e && (Ot += fo);
        const [ki] = Wi(t, "<div>");
        c(ki, {
            boxSizing: "border-box",
            height: Ne.height,
            width: Ne.width,
            ...c(t, ["overflow", "padding", "borderTop", "borderRight", "borderBottom", "borderLeft", "borderImage", O])
        }), c(t, {
            padding: 0,
            border: 0,
            minWidth: 0,
            minHeight: 0,
            [O]: 0,
            width: Ne.width,
            height: Ne.height,
            overflow: "hidden",
            [k]: Ot
        });
        const po = Ot / Yt;
        s = (n * Yt + s) * (e ? 1 - po : po);
        const go = {
            [k]: e ? Yt : 0
        };
        f && (c(t, M, Yt - Ot + ps), go[M] = e ? ps : Yt + ps), !f ^ l === "reveal" && (c(ki, M, -Yt + Ot), T.start(ki, {
            [M]: e ? 0 : -Yt
        }, s, o));
        try {
            await T.start(t, go, s, o)
        } finally {
            c(t, jl), ke(ki.firstChild), e || r(t, !1)
        }
    }

    function $r(t, e, i) {
        pt.cancel(t);
        const {
            animation: s,
            duration: n,
            _toggle: o
        } = i;
        return e ? (o(t, !0), pt.in(t, s[0], n, i.origin)) : pt.out(t, s[1] || s[0], n, i.origin).then(() => o(t, !1))
    }
    var tn = {
        mixins: [tt, Pe, At],
        props: {
            animation: Boolean,
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            offset: Number
        },
        data: {
            targets: "> *",
            active: !1,
            animation: !0,
            collapsible: !0,
            multiple: !1,
            clsOpen: "bdt-open",
            toggle: "> .bdt-accordion-title",
            content: "> .bdt-accordion-content",
            offset: 0
        },
        computed: {
            items: {
                get({
                    targets: t
                }, e) {
                    return N(t, e)
                },
                watch(t, e) {
                    if (e || A(t, this.clsOpen)) return;
                    const i = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
                    i && this.toggle(i, !1)
                },
                immediate: !0
            },
            toggles({
                toggle: t
            }) {
                return this.items.map(e => v(t, e))
            },
            contents: {
                get({
                    content: t
                }) {
                    return this.items.map(e => v(t, e))
                },
                watch(t) {
                    for (const e of t) oi(e, !A(this.items.find(i => I(e, i)), this.clsOpen))
                },
                immediate: !0
            }
        },
        connected() {
            this.lazyload()
        },
        events: [{
            name: "click",
            delegate() {
                return `${this.targets} ${this.$props.toggle}`
            },
            async handler(t) {
                var e;
                t.preventDefault(), (e = this._off) == null || e.call(this), this._off = xr(t.target), await this.toggle(ee(this.toggles, t.current)), this._off()
            }
        }],
        methods: {
            async toggle(t, e) {
                t = this.items[Ct(t, this.items)];
                let i = [t];
                const s = Ye(this.items, `.${this.clsOpen}`);
                !this.multiple && !p(s, i[0]) && (i = i.concat(s)), !(!this.collapsible && s.length < 2 && p(s, t)) && await Promise.all(i.map(n => this.toggleElement(n, !p(s, n), (o, r) => {
                    if (R(o, this.clsOpen, r), b(v(this.$props.toggle, o), "aria-expanded", r), e === !1 || !this.animation) {
                        oi(v(this.content, o), !r);
                        return
                    }
                    return br(o, r, this)
                })))
            }
        }
    };

    function oi(t, e) {
        t && (t.hidden = e)
    }
    async function br(t, e, {
        content: i,
        duration: s,
        velocity: n,
        transition: o
    }) {
        var r;
        i = ((r = t._wrapper) == null ? void 0 : r.firstElementChild) || v(i, t), t._wrapper || (t._wrapper = Ke(i, "<div>"));
        const a = t._wrapper;
        c(a, "overflow", "hidden");
        const l = $(c(a, "height"));
        await T.cancel(a), oi(i, !1);
        const h = Dt(["marginTop", "marginBottom"], d => c(i, d)) + w(i).height,
            u = l / h;
        s = (n * h + s) * (e ? 1 - u : u), c(a, "height", l), await T.start(a, {
            height: e ? h : 0
        }, s, o), ke(i), delete t._wrapper, e || oi(i, !0)
    }

    function xr(t) {
        const [e] = ct(t, !0);
        let i;
        return function s() {
            i = requestAnimationFrame(() => {
                const {
                    top: n
                } = t.getBoundingClientRect();
                n < 0 && (e.scrollTop += n), s()
            })
        }(), () => requestAnimationFrame(() => cancelAnimationFrame(i))
    }
    var yr = {
        mixins: [tt, At],
        args: "animation",
        props: {
            animation: Boolean,
            close: String
        },
        data: {
            animation: !0,
            selClose: ".bdt-alert-close",
            duration: 150
        },
        events: {
            name: "click",
            delegate() {
                return this.selClose
            },
            handler(t) {
                t.preventDefault(), this.close()
            }
        },
        methods: {
            async close() {
                await this.toggleElement(this.$el, !1, kr), this.$destroy(!0)
            }
        }
    };

    function kr(t, e, {
        duration: i,
        transition: s,
        velocity: n
    }) {
        const o = $(c(t, "height"));
        return c(t, "height", o), T.start(t, {
            height: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0,
            borderTop: 0,
            borderBottom: 0,
            opacity: 0
        }, n * o + i, s)
    }
    var en = {
            args: "autoplay",
            props: {
                automute: Boolean,
                autoplay: Boolean
            },
            data: {
                automute: !1,
                autoplay: !0
            },
            connected() {
                this.inView = this.autoplay === "inview", this.inView && !It(this.$el, "preload") && (this.$el.preload = "none"), ht(this.$el, "iframe") && !It(this.$el, "allow") && (this.$el.allow = "autoplay"), this.automute && Ns(this.$el), this.registerObserver(ae(this.$el, () => this.$emit(), {}, !1))
            },
            update: {
                read({
                    visible: t
                }) {
                    return Hs(this.$el) ? {
                        prev: t,
                        visible: j(this.$el) && c(this.$el, "visibility") !== "hidden",
                        inView: this.inView && Xi(this.$el)
                    } : !1
                },
                write({
                    prev: t,
                    visible: e,
                    inView: i
                }) {
                    !e || this.inView && !i ? zs(this.$el) : (this.autoplay === !0 && !t || this.inView && i) && Ds(this.$el)
                }
            }
        },
        vt = {
            connected() {
                var t;
                this.registerObserver(Ce(((t = this.$options.resizeTargets) == null ? void 0 : t.call(this)) || this.$el, () => this.$emit("resize")))
            }
        },
        Sr = {
            mixins: [vt, en],
            props: {
                width: Number,
                height: Number
            },
            data: {
                automute: !0
            },
            events: {
                "load loadedmetadata" () {
                    this.$emit("resize")
                }
            },
            resizeTargets() {
                return [this.$el, sn(this.$el) || P(this.$el)]
            },
            update: {
                read() {
                    const {
                        ratio: t,
                        cover: e
                    } = Re, {
                        $el: i,
                        width: s,
                        height: n
                    } = this;
                    let o = {
                        width: s,
                        height: n
                    };
                    if (!o.width || !o.height) {
                        const h = {
                            width: i.naturalWidth || i.videoWidth || i.clientWidth,
                            height: i.naturalHeight || i.videoHeight || i.clientHeight
                        };
                        o.width ? o = t(h, "width", o.width) : n ? o = t(h, "height", o.height) : o = h
                    }
                    const {
                        offsetHeight: r,
                        offsetWidth: a
                    } = sn(i) || P(i), l = e(o, {
                        width: a + (a % 2 ? 1 : 0),
                        height: r + (r % 2 ? 1 : 0)
                    });
                    return !l.width || !l.height ? !1 : l
                },
                write({
                    height: t,
                    width: e
                }) {
                    c(this.$el, {
                        height: t,
                        width: e
                    })
                },
                events: ["resize"]
            }
        };

    function sn(t) {
        for (; t = P(t);)
            if (c(t, "position") !== "static") return t
    }
    var ce = {
            props: {
                container: Boolean
            },
            data: {
                container: !0
            },
            computed: {
                container({
                    container: t
                }) {
                    return t === !0 && this.$container || t && v(t)
                }
            }
        },
        nn = {
            props: {
                pos: String,
                offset: null,
                flip: Boolean,
                shift: Boolean,
                inset: Boolean
            },
            data: {
                pos: `bottom-${Y?"right":"left"}`,
                offset: !1,
                flip: !0,
                shift: !0,
                inset: !1
            },
            connected() {
                this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos, this.axis = p(["top", "bottom"], this.dir) ? "y" : "x"
            },
            methods: {
                positionAt(t, e, i) {
                    let s = [this.getPositionOffset(t), this.getShiftOffset(t)];
                    const n = [this.flip && "flip", this.shift && "shift"],
                        o = {
                            element: [this.inset ? this.dir : Qe(this.dir), this.align],
                            target: [this.dir, this.align]
                        };
                    if (this.axis === "y") {
                        for (const u in o) o[u].reverse();
                        s.reverse(), n.reverse()
                    }
                    const [r] = ct(t), {
                        scrollTop: a,
                        scrollLeft: l
                    } = r, h = w(t);
                    c(t, {
                        top: -h.height,
                        left: -h.width
                    }), qs(t, e, {
                        attach: o,
                        offset: s,
                        boundary: i,
                        placement: n,
                        viewportOffset: this.getViewportOffset(t)
                    }), r.scrollTop = a, r.scrollLeft = l
                },
                getPositionOffset(t) {
                    return nt(this.offset === !1 ? c(t, "--bdt-position-offset") : this.offset, this.axis === "x" ? "width" : "height", t) * (p(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1)
                },
                getShiftOffset(t) {
                    return this.align === "center" ? 0 : nt(c(t, "--bdt-position-shift-offset"), this.axis === "y" ? "width" : "height", t) * (p(["left", "top"], this.align) ? 1 : -1)
                },
                getViewportOffset(t) {
                    return nt(c(t, "--bdt-position-viewport-offset"))
                }
            }
        };
    const et = [];
    var Qi = {
        mixins: [tt, ce, At],
        props: {
            selPanel: String,
            selClose: String,
            escClose: Boolean,
            bgClose: Boolean,
            stack: Boolean
        },
        data: {
            cls: "bdt-open",
            escClose: !0,
            bgClose: !0,
            overlay: !0,
            stack: !1
        },
        computed: {
            panel({
                selPanel: t
            }, e) {
                return v(t, e)
            },
            transitionElement() {
                return this.panel
            },
            bgClose({
                bgClose: t
            }) {
                return t && this.panel
            }
        },
        beforeDisconnect() {
            p(et, this) && this.toggleElement(this.$el, !1, !1)
        },
        events: [{
            name: "click",
            delegate() {
                return `${this.selClose},a[href*="#"]`
            },
            handler(t) {
                const {
                    current: e,
                    defaultPrevented: i
                } = t, {
                    hash: s
                } = e;
                !i && s && ts(e) && !I(s, this.$el) && v(s, document.body) ? this.hide() : H(e, this.selClose) && (t.preventDefault(), this.hide())
            }
        }, {
            name: "toggle",
            self: !0,
            handler(t) {
                t.defaultPrevented || (t.preventDefault(), this.isToggled() === p(et, this) && this.toggle())
            }
        }, {
            name: "beforeshow",
            self: !0,
            handler(t) {
                if (p(et, this)) return !1;
                !this.stack && et.length ? (Promise.all(et.map(e => e.hide())).then(this.show), t.preventDefault()) : et.push(this)
            }
        }, {
            name: "show",
            self: !0,
            handler() {
                z(this.$el, "hide", S(document, "focusin", t => {
                    Ut(et) === this && !I(t.target, this.$el) && this.$el.focus()
                })), this.overlay && (z(this.$el, "hidden", rn(this.$el), {
                    self: !0
                }), z(this.$el, "hidden", an(), {
                    self: !0
                })), this.stack && c(this.$el, "zIndex", $(c(this.$el, "zIndex")) + et.length), x(document.documentElement, this.clsPage), this.bgClose && z(this.$el, "hide", S(document, gt, ({
                    target: t
                }) => {
                    Ut(et) !== this || this.overlay && !I(t, this.$el) || I(t, this.panel) || z(document, `${Pt} ${ti} scroll`, ({
                        defaultPrevented: e,
                        type: i,
                        target: s
                    }) => {
                        !e && i === Pt && t === s && this.hide()
                    }, !0)
                }), {
                    self: !0
                }), this.escClose && z(this.$el, "hide", S(document, "keydown", t => {
                    t.keyCode === 27 && Ut(et) === this && this.hide()
                }), {
                    self: !0
                })
            }
        }, {
            name: "shown",
            self: !0,
            handler() {
                Ve(this.$el) || b(this.$el, "tabindex", "-1"), v(":focus", this.$el) || this.$el.focus()
            }
        }, {
            name: "hidden",
            self: !0,
            handler() {
                p(et, this) && et.splice(et.indexOf(this), 1), c(this.$el, "zIndex", ""), et.some(t => t.clsPage === this.clsPage) || B(document.documentElement, this.clsPage)
            }
        }],
        methods: {
            toggle() {
                return this.isToggled() ? this.hide() : this.show()
            },
            show() {
                return this.container && P(this.$el) !== this.container ? (L(this.container, this.$el), new Promise(t => requestAnimationFrame(() => this.show().then(t)))) : this.toggleElement(this.$el, !0, on)
            },
            hide() {
                return this.toggleElement(this.$el, !1, on)
            }
        }
    };

    function on(t, e, {
        transitionElement: i,
        _toggle: s
    }) {
        return new Promise((n, o) => z(t, "show hide", () => {
            t._reject == null || t._reject(), t._reject = o, s(t, e);
            const r = z(i, "transitionstart", () => {
                    z(i, "transitionend transitioncancel", n, {
                        self: !0
                    }), clearTimeout(a)
                }, {
                    self: !0
                }),
                a = setTimeout(() => {
                    r(), n()
                }, Tr(c(i, "transitionDuration")))
        })).then(() => delete t._reject)
    }

    function Tr(t) {
        return t ? Xt(t, "ms") ? $(t) : $(t) * 1e3 : 0
    }

    function rn(t) {
        if (CSS.supports("overscroll-behavior", "contain")) {
            const s = [t, ...Cr(t, n => /auto|scroll/.test(c(n, "overflow")))];
            return c(s, "overscrollBehavior", "contain"), () => c(s, "overscrollBehavior", "")
        }
        let e;
        const i = [S(t, "touchstart", ({
            targetTouches: s
        }) => {
            s.length === 1 && (e = s[0].clientY)
        }, {
            passive: !0
        }), S(t, "touchmove", s => {
            if (s.targetTouches.length !== 1) return;
            let [n] = ct(s.target);
            I(n, t) || (n = t);
            const o = s.targetTouches[0].clientY - e,
                {
                    scrollTop: r,
                    scrollHeight: a,
                    clientHeight: l
                } = n;
            (l >= a || r === 0 && o > 0 || a - r <= l && o < 0) && s.cancelable && s.preventDefault()
        }, {
            passive: !1
        })];
        return () => i.forEach(s => s())
    }
    let Ui;

    function an() {
        if (Ui) return C;
        Ui = !0;
        const {
            scrollingElement: t
        } = document;
        return c(t, {
            overflowY: "hidden",
            touchAction: "none",
            paddingRight: Se(window) - t.clientWidth
        }), () => {
            Ui = !1, c(t, {
                overflowY: "",
                touchAction: "",
                paddingRight: ""
            })
        }
    }

    function Cr(t, e) {
        const i = [];
        return mt(t, s => {
            e(s) && i.push(s)
        }), i
    }

    function ts(t) {
        return ["origin", "pathname", "search"].every(e => t[e] === location[e])
    }
    let V;
    var ln = {
        mixins: [ce, Pe, nn, At],
        args: "pos",
        props: {
            mode: "list",
            toggle: Boolean,
            boundary: Boolean,
            boundaryX: Boolean,
            boundaryY: Boolean,
            target: Boolean,
            targetX: Boolean,
            targetY: Boolean,
            stretch: Boolean,
            delayShow: Number,
            delayHide: Number,
            autoUpdate: Boolean,
            clsDrop: String,
            animateOut: Boolean,
            bgScroll: Boolean
        },
        data: {
            mode: ["click", "hover"],
            toggle: "- *",
            boundary: !1,
            boundaryX: !1,
            boundaryY: !1,
            target: !1,
            targetX: !1,
            targetY: !1,
            stretch: !1,
            delayShow: 0,
            delayHide: 800,
            autoUpdate: !0,
            clsDrop: !1,
            animateOut: !1,
            bgScroll: !0,
            animation: ["bdt-animation-fade"],
            cls: "bdt-open",
            container: !1
        },
        computed: {
            boundary({
                boundary: t,
                boundaryX: e,
                boundaryY: i
            }, s) {
                return [lt(e || t, s) || window, lt(i || t, s) || window]
            },
            target({
                target: t,
                targetX: e,
                targetY: i
            }, s) {
                return e = e || t || this.targetEl, i = i || t || this.targetEl, [e === !0 ? window : lt(e, s), i === !0 ? window : lt(i, s)]
            }
        },
        created() {
            this.tracker = new qi
        },
        beforeConnect() {
            this.clsDrop = this.$props.clsDrop || `bdt-${this.$options.name}`
        },
        connected() {
            x(this.$el, this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = this.$create("toggle", lt(this.toggle, this.$el), {
                target: this.$el,
                mode: this.mode
            }).$el, b(this.targetEl, "aria-haspopup", !0), this.lazyload(this.targetEl)), this._style = (({
                width: t,
                height: e
            }) => ({
                width: t,
                height: e
            }))(this.$el.style)
        },
        disconnected() {
            this.isActive() && (this.hide(!1), V = null), c(this.$el, this._style)
        },
        events: [{
            name: "click",
            delegate() {
                return `.${this.clsDrop}-close`
            },
            handler(t) {
                t.preventDefault(), this.hide(!1)
            }
        }, {
            name: "click",
            delegate() {
                return 'a[href*="#"]'
            },
            handler({
                defaultPrevented: t,
                current: e
            }) {
                const {
                    hash: i
                } = e;
                !t && i && ts(e) && !I(i, this.$el) && this.hide(!1)
            }
        }, {
            name: "beforescroll",
            handler() {
                this.hide(!1)
            }
        }, {
            name: "toggle",
            self: !0,
            handler(t, e) {
                t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e == null ? void 0 : e.$el, !1)
            }
        }, {
            name: "toggleshow",
            self: !0,
            handler(t, e) {
                t.preventDefault(), this.show(e == null ? void 0 : e.$el)
            }
        }, {
            name: "togglehide",
            self: !0,
            handler(t) {
                t.preventDefault(), H(this.$el, ":focus,:hover") || this.hide()
            }
        }, {
            name: `${jt} focusin`,
            filter() {
                return p(this.mode, "hover")
            },
            handler(t) {
                yt(t) || this.clearTimers()
            }
        }, {
            name: `${re} focusout`,
            filter() {
                return p(this.mode, "hover")
            },
            handler(t) {
                !yt(t) && t.relatedTarget && this.hide()
            }
        }, {
            name: "toggled",
            self: !0,
            handler(t, e) {
                e && (this.clearTimers(), this.position())
            }
        }, {
            name: "show",
            self: !0,
            handler() {
                V = this, this.tracker.init();
                const t = () => this.$emit(),
                    e = [S(document, gt, ({
                        target: i
                    }) => !I(i, this.$el) && z(document, `${Pt} ${ti} scroll`, ({
                        defaultPrevented: s,
                        type: n,
                        target: o
                    }) => {
                        !s && n === Pt && i === o && !(this.targetEl && I(i, this.targetEl)) && this.hide(!1)
                    }, !0)), S(document, "keydown", i => {
                        i.keyCode === 27 && this.hide(!1)
                    }), S(window, "resize", t), (() => {
                        const i = Ce(he(this.$el).concat(this.target), t);
                        return () => i.disconnect()
                    })(), ...this.autoUpdate ? [S([document, he(this.$el)], "scroll", t, {
                        passive: !0
                    })] : [], ...this.bgScroll ? [] : [rn(this.$el), an()]];
                z(this.$el, "hide", () => e.forEach(i => i()), {
                    self: !0
                })
            }
        }, {
            name: "beforehide",
            self: !0,
            handler() {
                this.clearTimers()
            }
        }, {
            name: "hide",
            handler({
                target: t
            }) {
                if (this.$el !== t) {
                    V = V === null && I(t, this.$el) && this.isToggled() ? this : V;
                    return
                }
                V = this.isActive() ? null : V, this.tracker.cancel()
            }
        }],
        update: {
            write() {
                this.isToggled() && !A(this.$el, this.clsEnter) && this.position()
            }
        },
        methods: {
            show(t = this.targetEl, e = !0) {
                if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(!1, !1), this.targetEl = t, this.clearTimers(), !this.isActive()) {
                    if (V) {
                        if (e && V.isDelaying) {
                            this.showTimer = setTimeout(() => H(t, ":hover") && this.show(), 10);
                            return
                        }
                        let i;
                        for (; V && i !== V && !I(this.$el, V.$el);) i = V, V.hide(!1, !1)
                    }
                    this.container && P(this.$el) !== this.container && L(this.container, this.$el), this.showTimer = setTimeout(() => this.toggleElement(this.$el, !0), e && this.delayShow || 0)
                }
            },
            hide(t = !0, e = !0) {
                const i = () => this.toggleElement(this.$el, !1, this.animateOut && e);
                this.clearTimers(), this.isDelaying = Ir(this.$el).some(s => this.tracker.movesTo(s)), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i()
            },
            clearTimers() {
                clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1
            },
            isActive() {
                return V === this
            },
            position() {
                B(this.$el, `${this.clsDrop}-stack`), c(this.$el, this._style), this.$el.hidden = !0;
                const t = this.target.map(n => _r(this.$el, n)),
                    e = this.getViewportOffset(this.$el),
                    i = [
                        [0, ["x", "width", "left", "right"]],
                        [1, ["y", "height", "top", "bottom"]]
                    ];
                for (const [n, [o, r]] of i) this.axis !== o && p([o, !0], this.stretch) && c(this.$el, {
                    [r]: Math.min(_(this.boundary[n])[r], t[n][r] - 2 * e),
                    [`overflow-${o}`]: "auto"
                });
                const s = t[0].width - 2 * e;
                this.$el.offsetWidth > s && x(this.$el, `${this.clsDrop}-stack`), c(this.$el, "maxWidth", s), this.$el.hidden = !1, this.positionAt(this.$el, this.target, this.boundary);
                for (const [n, [o, r, a, l]] of i)
                    if (this.axis === o && p([o, !0], this.stretch)) {
                        const h = Math.abs(this.getPositionOffset(this.$el)),
                            u = _(this.target[n]),
                            d = _(this.$el);
                        c(this.$el, {
                            [r]: (u[a] > d[a] ? u[a] - Math.max(_(this.boundary[n])[a], t[n][a] + e) : Math.min(_(this.boundary[n])[l], t[n][l] - e) - u[l]) - h,
                            [`overflow-${o}`]: "auto"
                        }), this.positionAt(this.$el, this.target, this.boundary)
                    }
            }
        }
    };

    function Ir(t) {
        const e = [];
        return mt(t, i => c(i, "position") !== "static" && e.push(i)), e
    }

    function _r(t, e) {
        return ot(he(e).find(i => I(t, i)))
    }
    var Pr = {
            mixins: [tt],
            args: "target",
            props: {
                target: Boolean
            },
            data: {
                target: !1
            },
            computed: {
                input(t, e) {
                    return v($e, e)
                },
                state() {
                    return this.input.nextElementSibling
                },
                target({
                    target: t
                }, e) {
                    return t && (t === !0 && P(this.input) === e && this.input.nextElementSibling || v(t, e))
                }
            },
            update() {
                var t;
                const {
                    target: e,
                    input: i
                } = this;
                if (!e) return;
                let s;
                const n = Oi(e) ? "value" : "textContent",
                    o = e[n],
                    r = (t = i.files) != null && t[0] ? i.files[0].name : H(i, "select") && (s = N("option", i).filter(a => a.selected)[0]) ? s.textContent : i.value;
                o !== r && (e[n] = r)
            },
            events: [{
                name: "change",
                handler() {
                    this.$emit()
                }
            }, {
                name: "reset",
                el() {
                    return Q(this.$el, "form")
                },
                handler() {
                    this.$emit()
                }
            }]
        },
        hn = {
            mixins: [vt],
            props: {
                margin: String,
                firstColumn: Boolean
            },
            data: {
                margin: "bdt-margin-small-top",
                firstColumn: "bdt-first-column"
            },
            resizeTargets() {
                return [this.$el, ...Si(this.$el.children)]
            },
            connected() {
                this.registerObserver(Os(this.$el, () => this.$reset(), {
                    childList: !0,
                    attributes: !0,
                    attributeFilter: ["style"]
                }))
            },
            update: {
                read() {
                    const t = es(this.$el.children);
                    return {
                        rows: t,
                        columns: Er(t)
                    }
                },
                write({
                    columns: t,
                    rows: e
                }) {
                    for (const i of e)
                        for (const s of i) R(s, this.margin, e[0] !== i), R(s, this.firstColumn, t[0].includes(s))
                },
                events: ["resize"]
            }
        };

    function es(t) {
        return cn(t, "top", "bottom")
    }

    function Er(t) {
        const e = [];
        for (const i of t) {
            const s = cn(i, "left", "right");
            for (let n = 0; n < s.length; n++) e[n] = e[n] ? e[n].concat(s[n]) : s[n]
        }
        return Y ? e.reverse() : e
    }

    function cn(t, e, i) {
        const s = [
            []
        ];
        for (const n of t) {
            if (!j(n)) continue;
            let o = ri(n);
            for (let r = s.length - 1; r >= 0; r--) {
                const a = s[r];
                if (!a[0]) {
                    a.push(n);
                    break
                }
                let l;
                if (a[0].offsetParent === n.offsetParent ? l = ri(a[0]) : (o = ri(n, !0), l = ri(a[0], !0)), o[e] >= l[i] - 1 && o[e] !== l[e]) {
                    s.push([n]);
                    break
                }
                if (o[i] - 1 > l[e] || o[e] === l[e]) {
                    a.push(n);
                    break
                }
                if (r === 0) {
                    s.unshift([n]);
                    break
                }
            }
        }
        return s
    }

    function ri(t, e = !1) {
        let {
            offsetTop: i,
            offsetLeft: s,
            offsetHeight: n,
            offsetWidth: o
        } = t;
        return e && ([i, s] = Lt(t)), {
            top: i,
            left: s,
            bottom: i + n,
            right: s + o
        }
    }
    var ai = {
        connected() {
            un(this._uid, () => this.$emit("scroll"))
        },
        disconnected() {
            dn(this._uid)
        }
    };
    const li = new Map;
    let Ee;

    function un(t, e) {
        Ee = Ee || S(window, "scroll", () => li.forEach(i => i()), {
            passive: !0,
            capture: !0
        }), li.set(t, e)
    }

    function dn(t) {
        li.delete(t), Ee && !li.size && (Ee(), Ee = null)
    }
    var Ar = {
        extends: hn,
        mixins: [tt],
        name: "grid",
        props: {
            masonry: Boolean,
            parallax: Number
        },
        data: {
            margin: "bdt-grid-margin",
            clsStack: "bdt-grid-stack",
            masonry: !1,
            parallax: 0
        },
        connected() {
            this.masonry && x(this.$el, "bdt-flex-top bdt-flex-wrap-top"), this.parallax && un(this._uid, () => this.$emit("scroll"))
        },
        disconnected() {
            dn(this._uid)
        },
        update: [{
            write({
                columns: t
            }) {
                R(this.$el, this.clsStack, t.length < 2)
            },
            events: ["resize"]
        }, {
            read(t) {
                let {
                    columns: e,
                    rows: i
                } = t;
                if (!e.length || !this.masonry && !this.parallax || fn(this.$el)) return t.translates = !1, !1;
                let s = !1;
                const n = E(this.$el),
                    o = e.map(h => Dt(h, "offsetHeight")),
                    r = Br(n, this.margin) * (i.length - 1),
                    a = Math.max(...o) + r;
                this.masonry && (e = e.map(h => Le(h, "offsetTop")), s = Or(i, e));
                let l = Math.abs(this.parallax);
                return l && (l = o.reduce((h, u, d) => Math.max(h, u + r + (d % 2 ? l : l / 8) - a), 0)), {
                    padding: l,
                    columns: e,
                    translates: s,
                    height: s ? a : ""
                }
            },
            write({
                height: t,
                padding: e
            }) {
                c(this.$el, "paddingBottom", e || ""), t !== !1 && c(this.$el, "height", t)
            },
            events: ["resize"]
        }, {
            read() {
                return this.parallax && fn(this.$el) ? !1 : {
                    scrolled: this.parallax ? Ji(this.$el) * Math.abs(this.parallax) : !1
                }
            },
            write({
                columns: t,
                scrolled: e,
                translates: i
            }) {
                e === !1 && !i || t.forEach((s, n) => s.forEach((o, r) => c(o, "transform", !e && !i ? "" : `translateY(${(i&&-i[n][r])+(e?n%2?e:e/8:0)}px)`)))
            },
            events: ["scroll", "resize"]
        }]
    };

    function fn(t) {
        return E(t).some(e => c(e, "position") === "absolute")
    }

    function Or(t, e) {
        const i = t.map(s => Math.max(...s.map(n => n.offsetHeight)));
        return e.map(s => {
            let n = 0;
            return s.map((o, r) => n += r ? i[r - 1] - s[r - 1].offsetHeight : 0)
        })
    }

    function Br(t, e) {
        const [i] = t.filter(s => A(s, e));
        return $(i ? c(i, "marginTop") : c(t[0], "paddingLeft"))
    }
    var Mr = {
        mixins: [vt],
        args: "target",
        props: {
            target: String,
            row: Boolean
        },
        data: {
            target: "> *",
            row: !0
        },
        computed: {
            elements: {
                get({
                    target: t
                }, e) {
                    return N(t, e)
                },
                watch() {
                    this.$reset()
                }
            }
        },
        resizeTargets() {
            return [this.$el, ...this.elements]
        },
        update: {
            read() {
                return {
                    rows: (this.row ? es(this.elements) : [this.elements]).map(Dr)
                }
            },
            write({
                rows: t
            }) {
                for (const {
                        heights: e,
                        elements: i
                    } of t) i.forEach((s, n) => c(s, "minHeight", e[n]))
            },
            events: ["resize"]
        }
    };

    function Dr(t) {
        if (t.length < 2) return {
            heights: [""],
            elements: t
        };
        c(t, "minHeight", "");
        let e = t.map(zr);
        const i = Math.max(...e);
        return {
            heights: t.map((s, n) => e[n].toFixed(2) === i.toFixed(2) ? "" : i),
            elements: t
        }
    }

    function zr(t) {
        let e = !1;
        j(t) || (e = t.style.display, c(t, "display", "block", "important"));
        const i = w(t).height - se(t, "height", "content-box");
        return e !== !1 && c(t, "display", e), i
    }
    var Nr = {
            mixins: [vt],
            props: {
                expand: Boolean,
                offsetTop: Boolean,
                offsetBottom: Boolean,
                minHeight: Number
            },
            data: {
                expand: !1,
                offsetTop: !1,
                offsetBottom: !1,
                minHeight: 0
            },
            resizeTargets() {
                return [this.$el, ...ct(this.$el)]
            },
            update: {
                read({
                    minHeight: t
                }) {
                    if (!j(this.$el)) return !1;
                    let e = "";
                    const i = se(this.$el, "height", "content-box"),
                        {
                            body: s,
                            scrollingElement: n
                        } = document,
                        [o] = ct(this.$el),
                        {
                            height: r
                        } = ot(o === s ? n : o);
                    if (this.expand) e = Math.max(r - (w(o).height - w(this.$el).height) - i, 0);
                    else {
                        const a = n === o || s === o;
                        if (e = `calc(${a?"100vh":`${r}px`}`, this.offsetTop)
                            if (a) {
                                const l = Lt(this.$el)[0] - Lt(o)[0];
                                e += l > 0 && l < r / 2 ? ` - ${l}px` : ""
                            } else e += ` - ${c(o,"paddingTop")}`;
                        this.offsetBottom === !0 ? e += ` - ${w(this.$el.nextElementSibling).height}px` : Mt(this.offsetBottom) ? e += ` - ${this.offsetBottom}vh` : this.offsetBottom && Xt(this.offsetBottom, "px") ? e += ` - ${$(this.offsetBottom)}px` : D(this.offsetBottom) && (e += ` - ${w(lt(this.offsetBottom,this.$el)).height}px`), e += `${i?` - ${i}px`:""})`
                    }
                    return {
                        minHeight: e,
                        prev: t
                    }
                },
                write({
                    minHeight: t
                }) {
                    c(this.$el, {
                        minHeight: t
                    }), this.minHeight && $(c(this.$el, "minHeight")) < this.minHeight && c(this.$el, "minHeight", this.minHeight)
                },
                events: ["resize"]
            }
        },
        pn = {
            args: "src",
            props: {
                id: Boolean,
                icon: String,
                src: String,
                style: String,
                width: Number,
                height: Number,
                ratio: Number,
                class: String,
                strokeAnimation: Boolean,
                attributes: "list"
            },
            data: {
                ratio: 1,
                include: ["style", "class"],
                class: "",
                strokeAnimation: !1
            },
            beforeConnect() {
                this.class += " bdt-svg"
            },
            connected() {
                !this.icon && p(this.src, "#") && ([this.src, this.icon] = this.src.split("#")), this.svg = this.getSvg().then(t => {
                    if (this._connected) {
                        const e = Wr(t, this.$el);
                        return this.svgEl && e !== this.svgEl && st(this.svgEl), this.applyAttributes(e, t), this.svgEl = e
                    }
                }, C), this.strokeAnimation && this.svg.then(t => {
                    this._connected && t && (mn(t), this.registerObserver(ae(t, (e, i) => {
                        mn(t), i.disconnect()
                    })))
                })
            },
            disconnected() {
                this.svg.then(t => {
                    this._connected || (Ai(this.$el) && (this.$el.hidden = !1), st(t), this.svgEl = null)
                }), this.svg = null
            },
            methods: {
                async getSvg() {
                    return ht(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" ? new Promise(t => z(this.$el, "load", () => t(this.getSvg()))) : Fr(await Hr(this.src), this.icon) || Promise.reject("SVG not found.")
                },
                applyAttributes(t, e) {
                    for (const o in this.$options.props) p(this.include, o) && o in this && b(t, o, this[o]);
                    for (const o in this.attributes) {
                        const [r, a] = this.attributes[o].split(":", 2);
                        b(t, r, a)
                    }
                    this.id || we(t, "id");
                    const i = ["width", "height"];
                    let s = i.map(o => this[o]);
                    s.some(o => o) || (s = i.map(o => b(e, o)));
                    const n = b(e, "viewBox");
                    n && !s.some(o => o) && (s = n.split(" ").slice(2)), s.forEach((o, r) => b(t, i[r], $(o) * this.ratio || null))
                }
            }
        };
    const Hr = ft(async t => t ? at(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());

    function Fr(t, e) {
        var i;
        return e && p(t, "<symbol") && (t = Lr(t, e) || t), t = v(t.substr(t.indexOf("<svg"))), ((i = t) == null ? void 0 : i.hasChildNodes()) && t
    }
    const gn = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
        hi = {};

    function Lr(t, e) {
        if (!hi[t]) {
            hi[t] = {}, gn.lastIndex = 0;
            let i;
            for (; i = gn.exec(t);) hi[t][i[3]] = `<svg xmlns="http://www.w3.org/2000/svg"${i[1]}svg>`
        }
        return hi[t][e]
    }

    function mn(t) {
        const e = vn(t);
        e && t.style.setProperty("--bdt-animation-stroke", e)
    }

    function vn(t) {
        return Math.ceil(Math.max(0, ...N("[stroke]", t).map(e => {
            try {
                return e.getTotalLength()
            } catch {
                return 0
            }
        })))
    }

    function Wr(t, e) {
        if (Ai(e) || ht(e, "canvas")) {
            e.hidden = !0;
            const s = e.nextElementSibling;
            return wn(t, s) ? s : Xe(e, t)
        }
        const i = e.lastElementChild;
        return wn(t, i) ? i : L(e, t)
    }

    function wn(t, e) {
        return ht(t, "svg") && ht(e, "svg") && t.innerHTML === e.innerHTML
    }
    var Rr = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
        jr = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
        qr = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
        Vr = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
        Yr = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>',
        Gr = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
        Xr = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><style>.bdt-navbar-toggle-animate svg>[class*=line-]{transition:.2s ease-in-out;transition-property:transform,opacity;transform-origin:center;opacity:1}.bdt-navbar-toggle svg>.line-3{opacity:0}.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-3{opacity:1}.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-2{transform:rotate(45deg)}.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-3{transform:rotate(-45deg)}.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-1,.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-4{opacity:0}.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-1{transform:translateY(6px) scaleX(0)}.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-4{transform:translateY(-6px) scaleX(0)}</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>',
        Jr = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
        Kr = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
        Zr = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
        Qr = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
        Ur = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
        ta = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
        ea = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
        ia = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
        sa = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
        na = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>',
        oa = '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
        ra = '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>';
    const ci = {
            spinner: oa,
            totop: ra,
            marker: qr,
            "close-icon": Rr,
            "close-large": jr,
            "nav-parent-icon": Vr,
            "nav-parent-icon-large": Yr,
            "navbar-parent-icon": Gr,
            "navbar-toggle-icon": Xr,
            "overlay-icon": Jr,
            "pagination-next": Kr,
            "pagination-previous": Zr,
            "search-icon": Qr,
            "search-large": Ur,
            "search-navbar": ta,
            "slidenav-next": ea,
            "slidenav-next-large": ia,
            "slidenav-previous": sa,
            "slidenav-previous-large": na
        },
        is = {
            install: ua,
            extends: pn,
            args: "icon",
            props: ["icon"],
            data: {
                include: []
            },
            isIcon: !0,
            beforeConnect() {
                x(this.$el, "bdt-icon")
            },
            methods: {
                async getSvg() {
                    const t = da(this.icon);
                    if (!t) throw "Icon not found.";
                    return t
                }
            }
        },
        ut = {
            args: !1,
            extends: is,
            data: t => ({
                icon: Gt(t.constructor.options.name)
            }),
            beforeConnect() {
                x(this.$el, this.$options.id)
            }
        },
        aa = {
            extends: ut,
            beforeConnect() {
                const t = this.$props.icon;
                this.icon = Q(this.$el, ".bdt-nav-primary") ? `${t}-large` : t
            }
        },
        $n = {
            extends: ut,
            beforeConnect() {
                x(this.$el, "bdt-slidenav");
                const t = this.$props.icon;
                this.icon = A(this.$el, "bdt-slidenav-large") ? `${t}-large` : t
            }
        },
        la = {
            extends: ut,
            beforeConnect() {
                this.icon = A(this.$el, "bdt-search-icon") && te(this.$el, ".bdt-search-large").length ? "search-large" : te(this.$el, ".bdt-search-navbar").length ? "search-navbar" : this.$props.icon
            }
        },
        ha = {
            extends: ut,
            beforeConnect() {
                this.icon = `close-${A(this.$el,"bdt-close-large")?"large":"icon"}`
            }
        },
        ca = {
            extends: ut,
            methods: {
                async getSvg() {
                    const t = await is.methods.getSvg.call(this);
                    return this.ratio !== 1 && c(v("circle", t), "strokeWidth", 1 / this.ratio), t
                }
            }
        },
        ui = {};

    function ua(t) {
        t.icon.add = (e, i) => {
            const s = D(e) ? {
                [e]: i
            } : e;
            xt(s, (n, o) => {
                ci[o] = n, delete ui[o]
            }), t._initialized && mt(document.body, n => xt(t.getComponents(n), o => {
                o.$options.isIcon && o.icon in s && o.$reset()
            }))
        }
    }

    function da(t) {
        return ci[t] ? (ui[t] || (ui[t] = v((ci[fa(t)] || ci[t]).trim())), ui[t].cloneNode(!0)) : null
    }

    function fa(t) {
        return Y ? _i(_i(t, "left", "right"), "previous", "next") : t
    }
    const pa = Wt && "loading" in HTMLImageElement.prototype;
    var ga = {
        args: "dataSrc",
        props: {
            dataSrc: String,
            sources: String,
            margin: String,
            target: String,
            loading: String
        },
        data: {
            dataSrc: "",
            sources: !1,
            margin: "50%",
            target: !1,
            loading: "lazy"
        },
        connected() {
            if (this.loading !== "lazy") {
                this.load();
                return
            }
            const t = [this.$el, ...be(this.$props.target, this.$el)];
            pa && di(this.$el) && (this.$el.loading = "lazy", ss(this.$el), t.length === 1) || (ba(this.$el), this.registerObserver(ae(t, (e, i) => {
                this.load(), i.disconnect()
            }, {
                rootMargin: this.margin
            })))
        },
        disconnected() {
            this._data.image && (this._data.image.onload = "")
        },
        methods: {
            load() {
                if (this._data.image) return this._data.image;
                const t = di(this.$el) ? this.$el : va(this.$el, this.dataSrc, this.sources);
                return we(t, "loading"), ss(this.$el, t.currentSrc), this._data.image = t
            }
        }
    };

    function ss(t, e) {
        if (di(t)) {
            const i = P(t);
            (ht(i, "picture") ? E(i) : [t]).forEach(n => bn(n, n))
        } else e && !p(t.style.backgroundImage, e) && (c(t, "backgroundImage", `url(${Mi(e)})`), m(t, Nt("load", !1)))
    }
    const ma = ["data-src", "data-srcset", "sizes"];

    function bn(t, e) {
        ma.forEach(i => {
            const s = it(t, i);
            s && b(e, i.replace(/^(data-)+/, ""), s)
        })
    }

    function va(t, e, i) {
        const s = new Image;
        return wa(s, i), bn(t, s), s.onload = () => {
            ss(t, s.currentSrc)
        }, b(s, "src", e), s
    }

    function wa(t, e) {
        if (e = $a(e), e.length) {
            const i = Ht("<picture>");
            for (const s of e) {
                const n = Ht("<source>");
                b(n, s), L(i, n)
            }
            L(i, t)
        }
    }

    function $a(t) {
        if (!t) return [];
        if (at(t, "[")) try {
            t = JSON.parse(t)
        } catch {
            t = []
        } else t = _e(t);
        return J(t) || (t = [t]), t.filter(e => !me(e))
    }

    function ba(t) {
        di(t) && !It(t, "src") && b(t, "src", 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>')
    }

    function di(t) {
        return ht(t, "img")
    }
    var fi = {
        props: {
            media: Boolean
        },
        data: {
            media: !1
        },
        connected() {
            const t = xa(this.media, this.$el);
            if (this.matchMedia = !0, t) {
                this.mediaObj = window.matchMedia(t);
                const e = () => {
                    this.matchMedia = this.mediaObj.matches, m(this.$el, Nt("mediachange", !1, !0, [this.mediaObj]))
                };
                this.offMediaObj = S(this.mediaObj, "change", () => {
                    e(), this.$emit("resize")
                }), e()
            }
        },
        disconnected() {
            var t;
            (t = this.offMediaObj) == null || t.call(this)
        }
    };

    function xa(t, e) {
        if (D(t)) {
            if (at(t, "@")) t = $(c(e, `--bdt-breakpoint-${t.substr(1)}`));
            else if (isNaN(t)) return t
        }
        return t && Mt(t) ? `(min-width: ${t}px)` : ""
    }
    var ya = {
            mixins: [tt, fi, vt],
            props: {
                fill: String
            },
            data: {
                fill: "",
                clsWrapper: "bdt-leader-fill",
                clsHide: "bdt-leader-hide",
                attrFill: "data-fill"
            },
            computed: {
                fill({
                    fill: t
                }) {
                    return t || c(this.$el, "--bdt-leader-fill-content")
                }
            },
            connected() {
                [this.wrapper] = Wi(this.$el, `<span class="${this.clsWrapper}">`)
            },
            disconnected() {
                ke(this.wrapper.childNodes)
            },
            update: {
                read() {
                    return {
                        width: Math.trunc(this.$el.offsetWidth / 2),
                        fill: this.fill,
                        hide: !this.matchMedia
                    }
                },
                write({
                    width: t,
                    fill: e,
                    hide: i
                }) {
                    R(this.wrapper, this.clsHide, i), b(this.wrapper, this.attrFill, new Array(t).join(e))
                },
                events: ["resize"]
            }
        },
        ka = {
            install: Sa,
            mixins: [Qi],
            data: {
                clsPage: "bdt-modal-page",
                selPanel: ".bdt-modal-dialog",
                selClose: ".bdt-modal-close, .bdt-modal-close-default, .bdt-modal-close-outside, .bdt-modal-close-full"
            },
            events: [{
                name: "show",
                self: !0,
                handler() {
                    A(this.panel, "bdt-margin-auto-vertical") ? x(this.$el, "bdt-flex") : c(this.$el, "display", "block"), Z(this.$el)
                }
            }, {
                name: "hidden",
                self: !0,
                handler() {
                    c(this.$el, "display", ""), B(this.$el, "bdt-flex")
                }
            }]
        };

    function Sa({
        modal: t
    }) {
        t.dialog = function(i, s) {
            const n = t(`<div class="bdt-modal"> <div class="bdt-modal-dialog">${i}</div> </div>`, s);
            return n.show(), S(n.$el, "hidden", async () => {
                await Promise.resolve(), n.$destroy(!0)
            }, {
                self: !0
            }), n
        }, t.alert = function(i, s) {
            return e(({
                labels: n
            }) => `<div class="bdt-modal-body">${D(i)?i:_t(i)}</div> <div class="bdt-modal-footer bdt-text-right"> <button class="bdt-button bdt-button-primary bdt-modal-close" autofocus>${n.ok}</button> </div>`, s, n => n.resolve())
        }, t.confirm = function(i, s) {
            return e(({
                labels: n
            }) => `<form> <div class="bdt-modal-body">${D(i)?i:_t(i)}</div> <div class="bdt-modal-footer bdt-text-right"> <button class="bdt-button bdt-button-default bdt-modal-close" type="button">${n.cancel}</button> <button class="bdt-button bdt-button-primary" autofocus>${n.ok}</button> </div> </form>`, s, n => n.reject())
        }, t.prompt = function(i, s, n) {
            return e(({
                labels: o
            }) => `<form class="bdt-form-stacked"> <div class="bdt-modal-body"> <label>${D(i)?i:_t(i)}</label> <input class="bdt-input" value="${s||""}" autofocus> </div> <div class="bdt-modal-footer bdt-text-right"> <button class="bdt-button bdt-button-default bdt-modal-close" type="button">${o.cancel}</button> <button class="bdt-button bdt-button-primary">${o.ok}</button> </div> </form>`, n, o => o.resolve(null), o => v("input", o.$el).value)
        }, t.labels = {
            ok: "Ok",
            cancel: "Cancel"
        };

        function e(i, s, n, o) {
            s = {
                bgClose: !1,
                escClose: !0,
                labels: t.labels,
                ...s
            };
            const r = t.dialog(i(s), s),
                a = new je;
            let l = !1;
            return S(r.$el, "submit", "form", h => {
                h.preventDefault(), a.resolve(o == null ? void 0 : o(r)), l = !0, r.hide()
            }), S(r.$el, "hide", () => !l && n(a)), a.promise.dialog = r, a.promise
        }
    }
    var Ta = {
            extends: tn,
            data: {
                targets: "> .bdt-parent",
                toggle: "> a",
                content: "> ul"
            }
        },
        Ca = {
            mixins: [tt, ce],
            props: {
                dropdown: String,
                align: String,
                clsDrop: String,
                boundary: Boolean,
                dropbar: Boolean,
                dropbarAnchor: Boolean,
                duration: Number,
                mode: Boolean,
                offset: Boolean,
                stretch: Boolean,
                delayShow: Boolean,
                delayHide: Boolean,
                target: Boolean,
                targetX: Boolean,
                targetY: Boolean,
                animation: Boolean,
                animateOut: Boolean
            },
            data: {
                dropdown: ".bdt-navbar-nav > li > a, .bdt-navbar-item, .bdt-navbar-toggle",
                align: Y ? "right" : "left",
                clsDrop: "bdt-navbar-dropdown",
                boundary: !0,
                dropbar: !1,
                dropbarAnchor: !1,
                duration: 200,
                container: !1
            },
            computed: {
                dropbarAnchor({
                    dropbarAnchor: t
                }, e) {
                    return lt(t, e) || e
                },
                dropbar: {
                    get({
                        dropbar: t
                    }) {
                        return t ? (t = this._dropbar || lt(t, this.$el) || v("+ .bdt-navbar-dropbar", this.$el), t || (this._dropbar = v("<div></div>"))) : null
                    },
                    watch(t) {
                        x(t, "bdt-dropbar", "bdt-dropbar-top", "bdt-navbar-dropbar")
                    },
                    immediate: !0
                },
                dropContainer(t, e) {
                    return this.container || e
                },
                dropdowns: {
                    get({
                        clsDrop: t
                    }, e) {
                        const i = N(`.${t}`, e);
                        if (this.dropContainer !== e)
                            for (const n of N(`.${t}`, this.dropContainer)) {
                                var s;
                                const o = (s = this.getDropdown(n)) == null ? void 0 : s.targetEl;
                                !p(i, n) && o && I(o, this.$el) && i.push(n)
                            }
                        return i
                    },
                    watch(t) {
                        this.$create("drop", t.filter(e => !this.getDropdown(e)), { ...this.$props,
                            flip: !1,
                            shift: !0,
                            pos: `bottom-${this.align}`,
                            boundary: this.boundary === !0 ? this.$el : this.boundary
                        })
                    },
                    immediate: !0
                },
                toggles: {
                    get({
                        dropdown: t
                    }, e) {
                        return N(t, e)
                    },
                    watch() {
                        const t = A(this.$el, "bdt-navbar-justify");
                        for (const e of N(".bdt-navbar-nav, .bdt-navbar-left, .bdt-navbar-right", this.$el)) c(e, "flexGrow", t ? N(this.dropdown, e).length : "")
                    },
                    immediate: !0
                }
            },
            disconnected() {
                this.dropbar && st(this.dropbar), delete this._dropbar
            },
            events: [{
                name: "mouseover focusin",
                delegate() {
                    return this.dropdown
                },
                handler({
                    current: t
                }) {
                    const e = this.getActive();
                    e && p(e.mode, "hover") && e.targetEl && !I(e.targetEl, t) && !e.isDelaying && e.hide(!1)
                }
            }, {
                name: "keydown",
                delegate() {
                    return this.dropdown
                },
                handler(t) {
                    const {
                        current: e,
                        keyCode: i
                    } = t, s = this.getActive();
                    i === qt.DOWN && It(e, "aria-expanded") && (t.preventDefault(), !s || s.targetEl !== e ? (e.click(), z(this.dropContainer, "show", ({
                        target: n
                    }) => yn(n))) : yn(s.$el)), xn(t, this.toggles, s)
                }
            }, {
                name: "keydown",
                el() {
                    return this.dropContainer
                },
                delegate() {
                    return `.${this.clsDrop}`
                },
                handler(t) {
                    const {
                        current: e,
                        keyCode: i
                    } = t;
                    if (!p(this.dropdowns, e)) return;
                    const s = this.getActive(),
                        n = N(qe, e),
                        o = wt(n, a => H(a, ":focus"));
                    if (i === qt.UP && (t.preventDefault(), o > 0 && n[o - 1].focus()), i === qt.DOWN && (t.preventDefault(), o < n.length - 1 && n[o + 1].focus()), i === qt.ESC) {
                        var r;
                        (r = s.targetEl) == null || r.focus()
                    }
                    xn(t, this.toggles, s)
                }
            }, {
                name: "mouseleave",
                el() {
                    return this.dropbar
                },
                filter() {
                    return this.dropbar
                },
                handler() {
                    const t = this.getActive();
                    t && p(t.mode, "hover") && !this.dropdowns.some(e => H(e, ":hover")) && t.hide()
                }
            }, {
                name: "beforeshow",
                el() {
                    return this.dropContainer
                },
                filter() {
                    return this.dropbar
                },
                handler({
                    target: t
                }) {
                    this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && Xe(this.dropbarAnchor, this.dropbar), x(t, `${this.clsDrop}-dropbar`))
                }
            }, {
                name: "show",
                el() {
                    return this.dropContainer
                },
                filter() {
                    return this.dropbar
                },
                handler({
                    target: t
                }) {
                    if (!this.isDropbarDrop(t)) return;
                    const e = this.getDropdown(t);
                    this._observer = Ce([e.$el, ...e.target], () => {
                        const i = te(t, `.${this.clsDrop}`).concat(t).map(r => _(r)),
                            s = Math.min(...i.map(({
                                top: r
                            }) => r)),
                            n = Math.max(...i.map(({
                                bottom: r
                            }) => r)),
                            o = _(this.dropbar);
                        c(this.dropbar, "top", this.dropbar.offsetTop - (o.top - s)), this.transitionTo(n - s + $(c(t, "marginBottom")), t)
                    })
                }
            }, {
                name: "beforehide",
                el() {
                    return this.dropContainer
                },
                filter() {
                    return this.dropbar
                },
                handler(t) {
                    const e = this.getActive();
                    H(this.dropbar, ":hover") && e.$el === t.target && !this.toggles.some(i => e.targetEl !== i && H(i, ":focus")) && t.preventDefault()
                }
            }, {
                name: "hide",
                el() {
                    return this.dropContainer
                },
                filter() {
                    return this.dropbar
                },
                handler({
                    target: t
                }) {
                    var e;
                    if (!this.isDropbarDrop(t)) return;
                    (e = this._observer) == null || e.disconnect();
                    const i = this.getActive();
                    (!i || i.$el === t) && this.transitionTo(0)
                }
            }],
            methods: {
                getActive() {
                    return p(this.dropdowns, V == null ? void 0 : V.$el) && V
                },
                transitionTo(t, e) {
                    const {
                        dropbar: i
                    } = this, s = Z(i);
                    e = s < t && e, c(e, "clipPath", `polygon(0 0,100% 0,100% ${s}px,0 ${s}px)`), Z(i, s), T.cancel([e, i]), Promise.all([T.start(i, {
                        height: t
                    }, this.duration), T.start(e, {
                        clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)`
                    }, this.duration)]).catch(C).then(() => c(e, {
                        clipPath: ""
                    }))
                },
                getDropdown(t) {
                    return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
                },
                isDropbarDrop(t) {
                    return this.getDropdown(t) && A(t, this.clsDrop)
                }
            }
        };

    function xn(t, e, i) {
        const {
            current: s,
            keyCode: n
        } = t, o = i.targetEl || s, r = e.indexOf(o);
        n === qt.LEFT && r > 0 && (i.hide == null || i.hide(!1), e[r - 1].focus()), n === qt.RIGHT && r < e.length - 1 && (i.hide == null || i.hide(!1), e[r + 1].focus()), n === qt.TAB && (o.focus(), i.hide == null || i.hide(!1))
    }

    function yn(t) {
        if (!v(":focus", t)) {
            var e;
            (e = v(qe, t)) == null || e.focus()
        }
    }
    const qt = {
        TAB: 9,
        ESC: 27,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };
    var kn = {
        props: {
            swiping: Boolean
        },
        data: {
            swiping: !0
        },
        computed: {
            swipeTarget(t, e) {
                return e
            }
        },
        connected() {
            this.swiping && ni(this, {
                el: this.swipeTarget,
                name: gt,
                passive: !0,
                handler(t) {
                    if (!yt(t)) return;
                    const e = ie(t),
                        i = "tagName" in t.target ? t.target : P(t.target);
                    z(document, `${Pt} ${ti} scroll`, s => {
                        const {
                            x: n,
                            y: o
                        } = ie(s);
                        (s.type !== "scroll" && i && n && Math.abs(e.x - n) > 100 || o && Math.abs(e.y - o) > 100) && setTimeout(() => {
                            m(i, "swipe"), m(i, `swipe${Ia(e.x,e.y,n,o)}`)
                        })
                    })
                }
            })
        }
    };

    function Ia(t, e, i, s) {
        return Math.abs(t - i) >= Math.abs(e - s) ? t - i > 0 ? "Left" : "Right" : e - s > 0 ? "Up" : "Down"
    }
    var _a = {
        mixins: [Qi, kn],
        args: "mode",
        props: {
            mode: String,
            flip: Boolean,
            overlay: Boolean
        },
        data: {
            mode: "slide",
            flip: !1,
            overlay: !1,
            clsPage: "bdt-offcanvas-page",
            clsContainer: "bdt-offcanvas-container",
            selPanel: ".bdt-offcanvas-bar",
            clsFlip: "bdt-offcanvas-flip",
            clsContainerAnimation: "bdt-offcanvas-container-animation",
            clsSidebarAnimation: "bdt-offcanvas-bar-animation",
            clsMode: "bdt-offcanvas",
            clsOverlay: "bdt-offcanvas-overlay",
            selClose: ".bdt-offcanvas-close",
            container: !1
        },
        computed: {
            clsFlip({
                flip: t,
                clsFlip: e
            }) {
                return t ? e : ""
            },
            clsOverlay({
                overlay: t,
                clsOverlay: e
            }) {
                return t ? e : ""
            },
            clsMode({
                mode: t,
                clsMode: e
            }) {
                return `${e}-${t}`
            },
            clsSidebarAnimation({
                mode: t,
                clsSidebarAnimation: e
            }) {
                return t === "none" || t === "reveal" ? "" : e
            },
            clsContainerAnimation({
                mode: t,
                clsContainerAnimation: e
            }) {
                return t !== "push" && t !== "reveal" ? "" : e
            },
            transitionElement({
                mode: t
            }) {
                return t === "reveal" ? P(this.panel) : this.panel
            }
        },
        update: {
            read() {
                this.isToggled() && !j(this.$el) && this.hide()
            },
            events: ["resize"]
        },
        events: [{
            name: "touchmove",
            self: !0,
            passive: !1,
            filter() {
                return this.overlay
            },
            handler(t) {
                t.cancelable && t.preventDefault()
            }
        }, {
            name: "show",
            self: !0,
            handler() {
                this.mode === "reveal" && !A(P(this.panel), this.clsMode) && (Ke(this.panel, "<div>"), x(P(this.panel), this.clsMode));
                const {
                    body: t,
                    scrollingElement: e
                } = document;
                x(t, this.clsContainer, this.clsFlip), c(t, "touch-action", "pan-y pinch-zoom"), c(this.$el, "display", "block"), c(this.panel, "maxWidth", e.clientWidth), x(this.$el, this.clsOverlay), x(this.panel, this.clsSidebarAnimation, this.mode === "reveal" ? "" : this.clsMode), Z(t), x(t, this.clsContainerAnimation), this.clsContainerAnimation && Pa()
            }
        }, {
            name: "hide",
            self: !0,
            handler() {
                B(document.body, this.clsContainerAnimation), c(document.body, "touch-action", "")
            }
        }, {
            name: "hidden",
            self: !0,
            handler() {
                this.clsContainerAnimation && Ea(), this.mode === "reveal" && ke(this.panel), B(this.panel, this.clsSidebarAnimation, this.clsMode), B(this.$el, this.clsOverlay), c(this.$el, "display", ""), c(this.panel, "maxWidth", ""), B(document.body, this.clsContainer, this.clsFlip)
            }
        }, {
            name: "swipeLeft swipeRight",
            handler(t) {
                this.isToggled() && Xt(t.type, "Left") ^ this.flip && this.hide()
            }
        }]
    };

    function Pa() {
        Sn().content += ",user-scalable=0"
    }

    function Ea() {
        const t = Sn();
        t.content = t.content.replace(/,user-scalable=0$/, "")
    }

    function Sn() {
        return v('meta[name="viewport"]', document.head) || L(document.head, '<meta name="viewport">')
    }
    var Aa = {
            mixins: [tt, vt],
            props: {
                selContainer: String,
                selContent: String,
                minHeight: Number
            },
            data: {
                selContainer: ".bdt-modal",
                selContent: ".bdt-modal-dialog",
                minHeight: 150
            },
            computed: {
                container({
                    selContainer: t
                }, e) {
                    return Q(e, t)
                },
                content({
                    selContent: t
                }, e) {
                    return Q(e, t)
                }
            },
            resizeTargets() {
                return [this.container, this.content]
            },
            update: {
                read() {
                    return !this.content || !this.container || !j(this.$el) ? !1 : {
                        max: Math.max(this.minHeight, Z(this.container) - (w(this.content).height - Z(this.$el)))
                    }
                },
                write({
                    max: t
                }) {
                    c(this.$el, {
                        minHeight: this.minHeight,
                        maxHeight: t
                    })
                },
                events: ["resize"]
            }
        },
        Oa = {
            mixins: [vt],
            props: ["width", "height"],
            resizeTargets() {
                return [this.$el, P(this.$el)]
            },
            connected() {
                x(this.$el, "bdt-responsive-width")
            },
            update: {
                read() {
                    return j(this.$el) && this.width && this.height ? {
                        width: Se(P(this.$el)),
                        height: this.height
                    } : !1
                },
                write(t) {
                    Z(this.$el, Re.contain({
                        height: this.height,
                        width: this.width
                    }, t).height)
                },
                events: ["resize"]
            }
        },
        Ba = {
            props: {
                offset: Number
            },
            data: {
                offset: 0
            },
            connected() {
                Ma(this)
            },
            disconnected() {
                Da(this)
            },
            methods: {
                async scrollTo(t) {
                    t = t && v(t) || document.body, m(this.$el, "beforescroll", [this, t]) && (await Rs(t, {
                        offset: this.offset
                    }), m(this.$el, "scrolled", [this, t]))
                }
            }
        };
    const Ae = new Set;

    function Ma(t) {
        Ae.size || S(document, "click", Tn), Ae.add(t)
    }

    function Da(t) {
        Ae.delete(t), Ae.size || zt(document, "click", Tn)
    }

    function Tn(t) {
        if (!t.defaultPrevented)
            for (const e of Ae) I(t.target, e.$el) && Cn(e.$el) && (t.preventDefault(), e.scrollTo(In(e.$el)))
    }

    function Cn(t) {
        return ["origin", "pathname", "search"].every(e => location[e] === t[e])
    }

    function In(t) {
        if (Cn(t)) {
            const e = decodeURIComponent(t.hash).substring(1);
            return document.getElementById(e) || document.getElementsByName(e)[0]
        }
    }
    var za = {
            mixins: [ai],
            args: "cls",
            props: {
                cls: String,
                target: String,
                hidden: Boolean,
                margin: String,
                repeat: Boolean,
                delay: Number
            },
            data: () => ({
                cls: "",
                target: !1,
                hidden: !0,
                margin: "-1px",
                repeat: !1,
                delay: 0,
                inViewClass: "bdt-scrollspy-inview"
            }),
            computed: {
                elements: {
                    get({
                        target: t
                    }, e) {
                        return t ? N(t, e) : [e]
                    },
                    watch(t, e) {
                        this.hidden && c(Ye(t, `:not(.${this.inViewClass})`), "opacity", 0), ve(t, e) || this.$reset()
                    },
                    immediate: !0
                }
            },
            connected() {
                this._data.elements = new Map, this.registerObserver(ae(this.elements, t => {
                    const e = this._data.elements;
                    for (const {
                            target: i,
                            isIntersecting: s
                        } of t) {
                        e.has(i) || e.set(i, {
                            cls: it(i, "bdt-scrollspy-class") || this.cls
                        });
                        const n = e.get(i);
                        !this.repeat && n.show || (n.show = s)
                    }
                    this.$emit()
                }, {
                    rootMargin: this.margin
                }, !1))
            },
            disconnected() {
                for (const [t, e] of this._data.elements.entries()) B(t, this.inViewClass, (e == null ? void 0 : e.cls) || "")
            },
            update: [{
                write(t) {
                    for (const [e, i] of t.elements.entries()) i.show && !i.inview && !i.queued ? (i.queued = !0, t.promise = (t.promise || Promise.resolve()).then(() => new Promise(s => setTimeout(s, this.delay))).then(() => {
                        this.toggle(e, !0), setTimeout(() => {
                            i.queued = !1, this.$emit()
                        }, 300)
                    })) : !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, !1)
                }
            }],
            methods: {
                toggle(t, e) {
                    const i = this._data.elements.get(t);
                    if (i) {
                        if (i.off == null || i.off(), c(t, "opacity", !e && this.hidden ? 0 : ""), R(t, this.inViewClass, e), R(t, i.cls), /\bbdt-animation-/.test(i.cls)) {
                            const s = () => Hi(t, "bdt-animation-[\\w-]+");
                            e ? i.off = z(t, "animationcancel animationend", s) : s()
                        }
                        m(t, e ? "inview" : "outview"), i.inview = e, this.$update(t)
                    }
                }
            }
        },
        Na = {
            mixins: [ai],
            props: {
                cls: String,
                closest: String,
                scroll: Boolean,
                overflow: Boolean,
                offset: Number
            },
            data: {
                cls: "bdt-active",
                closest: !1,
                scroll: !1,
                overflow: !0,
                offset: 0
            },
            computed: {
                links: {
                    get(t, e) {
                        return N('a[href*="#"]', e).filter(i => i.hash && ts(i))
                    },
                    watch(t) {
                        this.scroll && this.$create("scroll", t, {
                            offset: this.offset || 0
                        })
                    },
                    immediate: !0
                },
                elements({
                    closest: t
                }) {
                    return Q(this.links, t || "*")
                }
            },
            update: [{
                read() {
                    const t = this.links.map(In).filter(Boolean),
                        {
                            length: e
                        } = t;
                    if (!e || !j(this.$el)) return !1;
                    const [i] = ct(t, !0), {
                        scrollTop: s,
                        scrollHeight: n
                    } = i, o = ot(i), r = n - o.height;
                    let a = !1;
                    if (s === r) a = e - 1;
                    else {
                        for (let l = 0; l < t.length && !(_(t[l]).top - o.top - this.offset > 0); l++) a = +l;
                        a === !1 && this.overflow && (a = 0)
                    }
                    return {
                        active: a
                    }
                },
                write({
                    active: t
                }) {
                    const e = t !== !1 && !A(this.elements[t], this.cls);
                    this.links.forEach(i => i.blur());
                    for (let i = 0; i < this.elements.length; i++) R(this.elements[i], this.cls, +i === t);
                    e && m(this.$el, "active", [t, this.elements[t]])
                },
                events: ["scroll", "resize"]
            }]
        },
        Ha = {
            mixins: [tt, fi, vt, ai],
            props: {
                position: String,
                top: null,
                bottom: null,
                start: null,
                end: null,
                offset: String,
                overflowFlip: Boolean,
                animation: String,
                clsActive: String,
                clsInactive: String,
                clsFixed: String,
                clsBelow: String,
                selTarget: String,
                showOnUp: Boolean,
                targetOffset: Number
            },
            data: {
                position: "top",
                top: !1,
                bottom: !1,
                start: !1,
                end: !1,
                offset: 0,
                overflowFlip: !1,
                animation: "",
                clsActive: "bdt-active",
                clsInactive: "",
                clsFixed: "bdt-sticky-fixed",
                clsBelow: "bdt-sticky-below",
                selTarget: "",
                showOnUp: !1,
                targetOffset: !1
            },
            computed: {
                selTarget({
                    selTarget: t
                }, e) {
                    return t && v(t, e) || e
                }
            },
            resizeTargets() {
                return document.documentElement
            },
            connected() {
                this.start = _n(this.start || this.top), this.end = _n(this.end || this.bottom), this.placeholder = v("+ .bdt-sticky-placeholder", this.$el) || v('<div class="bdt-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1), this.registerObserver(Ce(this.$el, () => !this.isFixed && this.$emit("resize")))
            },
            disconnected() {
                this.isFixed && (this.hide(), B(this.selTarget, this.clsInactive)), Pn(this.$el), st(this.placeholder), this.placeholder = null
            },
            events: [{
                name: "resize",
                el() {
                    return [window, window.visualViewport]
                },
                handler() {
                    this.$emit("resizeViewport")
                }
            }, {
                name: "load hashchange popstate",
                el() {
                    return window
                },
                filter() {
                    return this.targetOffset !== !1
                },
                handler() {
                    const {
                        scrollingElement: t
                    } = document;
                    !location.hash || t.scrollTop === 0 || setTimeout(() => {
                        const e = _(v(location.hash)),
                            i = _(this.$el);
                        this.isFixed && Pi(e, i) && (t.scrollTop = e.top - i.height - nt(this.targetOffset, "height", this.placeholder) - nt(this.offset, "height", this.placeholder))
                    })
                }
            }],
            update: [{
                read({
                    height: t,
                    width: e,
                    margin: i,
                    sticky: s
                }, n) {
                    if (this.inactive = !this.matchMedia || !j(this.$el), this.inactive) return;
                    const o = this.isFixed && n.has("resize") && !s;
                    o && (c(this.selTarget, "transition", "0s"), this.hide()), this.active || ({
                        height: t,
                        width: e
                    } = _(this.$el), i = c(this.$el, "margin")), o && (this.show(), requestAnimationFrame(() => c(this.selTarget, "transition", "")));
                    const r = nt("100vh", "height"),
                        a = Z(window),
                        l = document.scrollingElement.scrollHeight - r;
                    let h = this.position;
                    this.overflowFlip && t > r && (h = h === "top" ? "bottom" : "top");
                    const u = this.isFixed ? this.placeholder : this.$el;
                    let d = nt(this.offset, "height", s ? this.$el : u);
                    h === "bottom" && (t < a || this.overflowFlip) && (d += a - t);
                    const f = this.overflowFlip ? 0 : Math.max(0, t + d - r),
                        g = _(u).top,
                        k = _(this.$el).height,
                        M = (this.start === !1 ? g : ns(this.start, this.$el, g)) - d,
                        O = this.end === !1 ? l : Math.min(l, ns(this.end, this.$el, g + t, !0) - k - d + f);
                    return s = l && !this.showOnUp && M + d === g && O === Math.min(l, ns("!*", this.$el, 0, !0) - k - d + f) && c(P(this.$el), "overflowY") === "visible", {
                        start: M,
                        end: O,
                        offset: d,
                        overflow: f,
                        topOffset: g,
                        height: t,
                        elHeight: k,
                        width: e,
                        margin: i,
                        top: Lt(u)[0],
                        sticky: s
                    }
                },
                write({
                    height: t,
                    width: e,
                    margin: i,
                    offset: s,
                    sticky: n
                }) {
                    if ((this.inactive || n || !this.isFixed) && Pn(this.$el), this.inactive) return;
                    n && (t = e = i = 0, c(this.$el, {
                        position: "sticky",
                        top: s
                    }));
                    const {
                        placeholder: o
                    } = this;
                    c(o, {
                        height: t,
                        width: e,
                        margin: i
                    }), I(o, document) || (o.hidden = !0), (n ? Ge : Xe)(this.$el, o)
                },
                events: ["resize", "resizeViewport"]
            }, {
                read({
                    scroll: t = 0,
                    dir: e = "down",
                    overflow: i,
                    overflowScroll: s = 0,
                    start: n,
                    end: o
                }) {
                    const r = document.scrollingElement.scrollTop;
                    return {
                        dir: t <= r ? "down" : "up",
                        prevDir: e,
                        scroll: r,
                        prevScroll: t,
                        offsetParentTop: _((this.isFixed ? this.placeholder : this.$el).offsetParent).top,
                        overflowScroll: K(s + K(r, n, o) - K(t, n, o), 0, i)
                    }
                },
                write(t, e) {
                    const i = e.has("scroll"),
                        {
                            initTimestamp: s = 0,
                            dir: n,
                            prevDir: o,
                            scroll: r,
                            prevScroll: a = 0,
                            top: l,
                            start: h,
                            topOffset: u,
                            height: d
                        } = t;
                    if (r < 0 || r === a && i || this.showOnUp && !i && !this.isFixed) return;
                    const f = Date.now();
                    if ((f - s > 300 || n !== o) && (t.initScroll = r, t.initTimestamp = f), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - r) <= 30 && Math.abs(a - r) <= 10))
                        if (this.inactive || r < h || this.showOnUp && (r <= h || n === "down" && i || n === "up" && !this.isFixed && r <= u + d)) {
                            if (!this.isFixed) {
                                pt.inProgress(this.$el) && l > r && (pt.cancel(this.$el), this.hide());
                                return
                            }
                            this.animation && r > u ? (pt.cancel(this.$el), pt.out(this.$el, this.animation).then(() => this.hide(), C)) : this.hide()
                        } else this.isFixed ? this.update() : this.animation && r > u ? (pt.cancel(this.$el), this.show(), pt.in(this.$el, this.animation).catch(C)) : this.show()
                },
                events: ["resize", "resizeViewport", "scroll"]
            }],
            methods: {
                show() {
                    this.isFixed = !0, this.update(), this.placeholder.hidden = !1
                },
                hide() {
                    const {
                        offset: t,
                        sticky: e
                    } = this._data;
                    this.setActive(!1), B(this.$el, this.clsFixed, this.clsBelow), e ? c(this.$el, "top", t) : c(this.$el, {
                        position: "",
                        top: "",
                        width: "",
                        marginTop: ""
                    }), this.placeholder.hidden = !0, this.isFixed = !1
                },
                update() {
                    let {
                        width: t,
                        scroll: e = 0,
                        overflow: i,
                        overflowScroll: s = 0,
                        start: n,
                        end: o,
                        offset: r,
                        topOffset: a,
                        height: l,
                        elHeight: h,
                        offsetParentTop: u,
                        sticky: d
                    } = this._data;
                    const f = n !== 0 || e > n;
                    if (!d) {
                        let g = "fixed";
                        e > o && (r += o - u, g = "absolute"), c(this.$el, {
                            position: g,
                            width: t
                        }), c(this.$el, "marginTop", 0, "important")
                    }
                    i && (r -= s), c(this.$el, "top", r), this.setActive(f), R(this.$el, this.clsBelow, e > a + (d ? Math.min(l, h) : l)), x(this.$el, this.clsFixed)
                },
                setActive(t) {
                    const e = this.active;
                    this.active = t, t ? (Fi(this.selTarget, this.clsInactive, this.clsActive), e !== t && m(this.$el, "active")) : (Fi(this.selTarget, this.clsActive, this.clsInactive), e !== t && m(this.$el, "inactive"))
                }
            }
        };

    function ns(t, e, i, s) {
        if (!t) return 0;
        if (Mt(t) || D(t) && t.match(/^-?\d/)) return i + nt(t, "height", e, !0); {
            const n = t === !0 ? P(e) : lt(t, e);
            return _(n).bottom - (s && n && I(e, n) ? $(c(n, "paddingBottom")) : 0)
        }
    }

    function _n(t) {
        return t === "true" ? !0 : t === "false" ? !1 : t
    }

    function Pn(t) {
        c(t, {
            position: "",
            top: "",
            marginTop: "",
            width: ""
        })
    }
    var En = {
            mixins: [Pe, kn, At],
            args: "connect",
            props: {
                connect: String,
                toggle: String,
                itemNav: String,
                active: Number
            },
            data: {
                connect: "~.bdt-switcher",
                toggle: "> * > :first-child",
                itemNav: !1,
                active: 0,
                cls: "bdt-active",
                attrItem: "bdt-switcher-item"
            },
            computed: {
                connects: {
                    get({
                        connect: t
                    }, e) {
                        return be(t, e)
                    },
                    watch(t) {
                        this.swiping && c(t, "touchAction", "pan-y pinch-zoom")
                    },
                    document: !0,
                    immediate: !0
                },
                connectChildren: {
                    get() {
                        return this.connects.map(t => E(t)).flat()
                    },
                    watch() {
                        const t = this.index();
                        for (const e of this.connects) E(e).forEach((i, s) => R(i, this.cls, s === t)), this.lazyload(this.$el, E(e))
                    },
                    immediate: !0
                },
                toggles: {
                    get({
                        toggle: t
                    }, e) {
                        return N(t, e).filter(i => !H(i, ".bdt-disabled *, .bdt-disabled, [disabled]"))
                    },
                    watch(t) {
                        const e = this.index();
                        this.show(~e ? e : t[this.active] || t[0])
                    },
                    immediate: !0
                },
                children() {
                    return E(this.$el).filter(t => this.toggles.some(e => I(e, t)))
                },
                swipeTarget() {
                    return this.connects
                }
            },
            events: [{
                name: "click",
                delegate() {
                    return this.toggle
                },
                handler(t) {
                    t.preventDefault(), this.show(t.current)
                }
            }, {
                name: "click",
                el() {
                    return this.connects.concat(this.itemNav ? be(this.itemNav, this.$el) : [])
                },
                delegate() {
                    return `[${this.attrItem}],[data-${this.attrItem}]`
                },
                handler(t) {
                    t.preventDefault(), this.show(it(t.current, this.attrItem))
                }
            }, {
                name: "swipeRight swipeLeft",
                filter() {
                    return this.swiping
                },
                el() {
                    return this.connects
                },
                handler({
                    type: t
                }) {
                    this.show(Xt(t, "Left") ? "next" : "previous")
                }
            }],
            methods: {
                index() {
                    return wt(this.children, t => A(t, this.cls))
                },
                show(t) {
                    const e = this.index(),
                        i = Ct(t, this.toggles, e),
                        s = Ct(this.children[i], E(this.$el));
                    E(this.$el).forEach((o, r) => {
                        R(o, this.cls, s === r), b(this.toggles[r], "aria-expanded", s === r)
                    });
                    const n = e >= 0 && e !== i;
                    this.connects.forEach(async ({
                        children: o
                    }) => {
                        await this.toggleElement(y(o).filter(r => A(r, this.cls)), !1, n), await this.toggleElement(o[s], !0, n)
                    })
                }
            }
        },
        Fa = {
            mixins: [tt],
            extends: En,
            props: {
                media: Boolean
            },
            data: {
                media: 960,
                attrItem: "bdt-tab-item"
            },
            connected() {
                const t = A(this.$el, "bdt-tab-left") ? "bdt-tab-left" : A(this.$el, "bdt-tab-right") ? "bdt-tab-right" : !1;
                t && this.$create("toggle", this.$el, {
                    cls: t,
                    mode: "media",
                    media: this.media
                })
            }
        };
    const La = 32;
    var Wa = {
            mixins: [Pe, fi, At],
            args: "target",
            props: {
                href: String,
                target: null,
                mode: "list",
                queued: Boolean
            },
            data: {
                href: !1,
                target: !1,
                mode: "click",
                queued: !0
            },
            computed: {
                target: {
                    get({
                        href: t,
                        target: e
                    }, i) {
                        return e = be(e || t, i), e.length && e || [i]
                    },
                    watch() {
                        this.updateAria(), this.lazyload(this.$el, this.target)
                    },
                    document: !0,
                    immediate: !0
                }
            },
            connected() {
                !p(this.mode, "media") && !Ve(this.$el) && b(this.$el, "tabindex", "0")
            },
            events: [{
                name: gt,
                filter() {
                    return p(this.mode, "hover")
                },
                handler(t) {
                    this._preventClick = null, !(!yt(t) || this._showState) && (m(this.$el, "focus"), z(document, gt, () => m(this.$el, "blur"), !0, e => !I(e.target, this.$el)), p(this.mode, "click") && (this._preventClick = !0))
                }
            }, {
                name: `${jt} ${re} focus blur`,
                filter() {
                    return p(this.mode, "hover")
                },
                handler(t) {
                    if (yt(t)) return;
                    const e = p([jt, "focus"], t.type),
                        i = b(this.$el, "aria-expanded");
                    if (!(!e && (t.type === re && H(this.$el, ":focus") || t.type === "blur" && H(this.$el, ":hover")))) {
                        if (this._showState && e && i !== this._showState) {
                            e || (this._showState = null);
                            return
                        }
                        this._showState = e ? i : null, this.toggle(`toggle${e?"show":"hide"}`)
                    }
                }
            }, {
                name: "keydown",
                filter() {
                    return p(this.mode, "click") && !ht(this.$el, "input")
                },
                handler(t) {
                    t.keyCode === La && (t.preventDefault(), this.$el.click())
                }
            }, {
                name: "click",
                filter() {
                    return ["click", "hover"].some(t => p(this.mode, t))
                },
                handler(t) {
                    let e;
                    (this._preventClick || Q(t.target, 'a[href="#"], a[href=""]') || (e = Q(t.target, "a[href]")) && (b(this.$el, "aria-expanded") !== "true" || e.hash && H(this.target, e.hash))) && t.preventDefault(), !this._preventClick && p(this.mode, "click") && this.toggle()
                }
            }, {
                name: "hide show",
                self: !0,
                el() {
                    return this.target
                },
                handler({
                    target: t,
                    type: e
                }) {
                    this.updateAria(t === this.target[0] && e === "show")
                }
            }, {
                name: "mediachange",
                filter() {
                    return p(this.mode, "media")
                },
                el() {
                    return this.target
                },
                handler(t, e) {
                    e.matches ^ this.isToggled(this.target) && this.toggle()
                }
            }],
            methods: {
                async toggle(t) {
                    if (!m(this.target, t || "toggle", [this])) return;
                    if (!this.queued) return this.toggleElement(this.target);
                    const e = this.target.filter(s => A(s, this.clsLeave));
                    if (e.length) {
                        for (const s of this.target) {
                            const n = p(e, s);
                            this.toggleElement(s, n, n)
                        }
                        return
                    }
                    const i = this.target.filter(this.isToggled);
                    await this.toggleElement(i, !1), await this.toggleElement(this.target.filter(s => !p(i, s)), !0)
                },
                updateAria(t) {
                    p(this.mode, "media") || b(this.$el, "aria-expanded", Fe(t) ? t : this.isToggled(this.target))
                }
            }
        },
        Ra = Object.freeze({
            __proto__: null,
            Accordion: tn,
            Alert: yr,
            Close: ha,
            Cover: Sr,
            Drop: ln,
            Dropdown: ln,
            FormCustom: Pr,
            Grid: Ar,
            HeightMatch: Mr,
            HeightViewport: Nr,
            Icon: is,
            Img: ga,
            Leader: ya,
            Margin: hn,
            Marker: ut,
            Modal: ka,
            Nav: Ta,
            NavParentIcon: aa,
            Navbar: Ca,
            NavbarParentIcon: ut,
            NavbarToggleIcon: ut,
            Offcanvas: _a,
            OverflowAuto: Aa,
            OverlayIcon: ut,
            PaginationNext: ut,
            PaginationPrevious: ut,
            Responsive: Oa,
            Scroll: Ba,
            Scrollspy: za,
            ScrollspyNav: Na,
            SearchIcon: la,
            SlidenavNext: $n,
            SlidenavPrevious: $n,
            Spinner: ca,
            Sticky: Ha,
            Svg: pn,
            Switcher: En,
            Tab: Fa,
            Toggle: Wa,
            Totop: ut,
            Video: en
        });
    xt(Ra, (t, e) => U.component(e, t)), mr(U);
    const ja = ["days", "hours", "minutes", "seconds"];
    var qa = {
        mixins: [tt],
        props: {
            date: String,
            clsWrapper: String
        },
        data: {
            date: "",
            clsWrapper: ".bdt-countdown-%unit%"
        },
        connected() {
            this.date = Date.parse(this.$props.date), this.start()
        },
        disconnected() {
            this.stop()
        },
        events: [{
            name: "visibilitychange",
            el() {
                return document
            },
            handler() {
                document.hidden ? this.stop() : this.start()
            }
        }],
        methods: {
            start() {
                this.stop(), this.update(), this.timer = setInterval(this.update, 1e3)
            },
            stop() {
                clearInterval(this.timer)
            },
            update() {
                const t = Va(this.date);
                (!this.date || t.total <= 0) && (this.stop(), t.days = t.hours = t.minutes = t.seconds = 0);
                for (const e of ja) {
                    const i = v(this.clsWrapper.replace("%unit%", e), this.$el);
                    if (!i) continue;
                    let s = String(Math.trunc(t[e]));
                    s = s.length < 2 ? `0${s}` : s, i.textContent !== s && (s = s.split(""), s.length !== i.children.length && _t(i, s.map(() => "<span></span>").join("")), s.forEach((n, o) => i.children[o].textContent = n))
                }
            }
        }
    };

    function Va(t) {
        const e = t - Date.now();
        return {
            total: e,
            seconds: e / 1e3 % 60,
            minutes: e / 1e3 / 60 % 60,
            hours: e / 1e3 / 60 / 60 % 24,
            days: e / 1e3 / 60 / 60 / 24
        }
    }
    const os = "bdt-transition-leave",
        rs = "bdt-transition-enter";

    function An(t, e, i, s = 0) {
        const n = pi(e, !0),
            o = {
                opacity: 1
            },
            r = {
                opacity: 0
            },
            a = u => () => n === pi(e) ? u() : Promise.reject(),
            l = a(async () => {
                x(e, os), await Promise.all(Bn(e).map((u, d) => new Promise(f => setTimeout(() => T.start(u, r, i / 2, "ease").then(f), d * s)))), B(e, os)
            }),
            h = a(async () => {
                const u = Z(e);
                x(e, rs), t(), c(E(e), {
                    opacity: 0
                }), await Ya();
                const d = E(e),
                    f = Z(e);
                c(e, "alignContent", "flex-start"), Z(e, u);
                const g = Bn(e);
                c(d, r);
                const k = g.map(async (M, O) => {
                    await Ga(O * s), await T.start(M, o, i / 2, "ease")
                });
                u !== f && k.push(T.start(e, {
                    height: f
                }, i / 2 + g.length * s, "ease")), await Promise.all(k).then(() => {
                    B(e, rs), n === pi(e) && (c(e, {
                        height: "",
                        alignContent: ""
                    }), c(d, {
                        opacity: ""
                    }), delete e.dataset.transition)
                })
            });
        return A(e, os) ? On(e).then(h) : A(e, rs) ? On(e).then(l).then(h) : l().then(h)
    }

    function pi(t, e) {
        return e && (t.dataset.transition = 1 + pi(t)), Tt(t.dataset.transition) || 0
    }

    function On(t) {
        return Promise.all(E(t).filter(T.inProgress).map(e => new Promise(i => z(e, "transitionend transitioncanceled", i))))
    }

    function Bn(t) {
        return es(E(t)).reduce((e, i) => e.concat(Le(i.filter(s => Xi(s)), "offsetLeft")), [])
    }

    function Ya() {
        return new Promise(t => requestAnimationFrame(t))
    }

    function Ga(t) {
        return new Promise(e => setTimeout(e, t))
    }
    async function Xa(t, e, i) {
        await zn();
        let s = E(e);
        const n = s.map(f => Mn(f, !0)),
            o = { ...c(e, ["height", "padding"]),
                display: "block"
            };
        await Promise.all(s.concat(e).map(T.cancel)), t(), s = s.concat(E(e).filter(f => !p(s, f))), await Promise.resolve(), G.flush();
        const r = b(e, "style"),
            a = c(e, ["height", "padding"]),
            [l, h] = Ja(e, s, n),
            u = s.map(f => ({
                style: b(f, "style")
            }));
        s.forEach((f, g) => h[g] && c(f, h[g])), c(e, o), await zn();
        const d = s.map((f, g) => P(f) === e && T.start(f, l[g], i, "ease")).concat(T.start(e, a, i, "ease"));
        try {
            await Promise.all(d), s.forEach((f, g) => {
                b(f, u[g]), P(f) === e && c(f, "display", l[g].opacity === 0 ? "none" : "")
            }), b(e, "style", r)
        } catch {
            b(s, "style", ""), Ka(e, o)
        }
    }

    function Mn(t, e) {
        const i = c(t, "zIndex");
        return j(t) ? {
            display: "",
            opacity: e ? c(t, "opacity") : "0",
            pointerEvents: "none",
            position: "absolute",
            zIndex: i === "auto" ? ee(t) : i,
            ...Dn(t)
        } : !1
    }

    function Ja(t, e, i) {
        const s = e.map((o, r) => P(o) && r in i ? i[r] ? j(o) ? Dn(o) : {
                opacity: 0
            } : {
                opacity: j(o) ? 1 : 0
            } : !1),
            n = s.map((o, r) => {
                const a = P(e[r]) === t && (i[r] || Mn(e[r]));
                if (!a) return !1;
                if (!o) delete a.opacity;
                else if (!("opacity" in o)) {
                    const {
                        opacity: l
                    } = a;
                    l % 1 ? o.opacity = 1 : delete a.opacity
                }
                return a
            });
        return [s, n]
    }

    function Ka(t, e) {
        for (const i in e) c(t, i, "")
    }

    function Dn(t) {
        const {
            height: e,
            width: i
        } = _(t);
        return {
            height: e,
            width: i,
            transform: "",
            ...Ze(t),
            ...c(t, ["marginTop", "marginLeft"])
        }
    }

    function zn() {
        return new Promise(t => requestAnimationFrame(t))
    }
    var Nn = {
            props: {
                duration: Number,
                animation: Boolean
            },
            data: {
                duration: 150,
                animation: "slide"
            },
            methods: {
                animate(t, e = this.$el) {
                    const i = this.animation;
                    return (i === "fade" ? An : i === "delayed-fade" ? (...n) => An(...n, 40) : i ? Xa : () => (t(), Promise.resolve()))(t, e, this.duration).catch(C)
                }
            }
        },
        Za = {
            mixins: [Nn],
            args: "target",
            props: {
                target: Boolean,
                selActive: Boolean
            },
            data: {
                target: null,
                selActive: !1,
                attrItem: "bdt-filter-control",
                cls: "bdt-active",
                duration: 250
            },
            computed: {
                toggles: {
                    get({
                        attrItem: t
                    }, e) {
                        return N(`[${t}],[data-${t}]`, e)
                    },
                    watch() {
                        if (this.updateState(), this.selActive !== !1) {
                            const t = N(this.selActive, this.$el);
                            this.toggles.forEach(e => R(e, this.cls, p(t, e)))
                        }
                    },
                    immediate: !0
                },
                children: {
                    get({
                        target: t
                    }, e) {
                        return N(`${t} > *`, e)
                    },
                    watch(t, e) {
                        e && !el(t, e) && this.updateState()
                    },
                    immediate: !0
                }
            },
            events: [{
                name: "click",
                delegate() {
                    return `[${this.attrItem}],[data-${this.attrItem}]`
                },
                handler(t) {
                    t.preventDefault(), this.apply(t.current)
                }
            }],
            methods: {
                apply(t) {
                    const e = this.getState(),
                        i = Fn(t, this.attrItem, this.getState());
                    Qa(e, i) || this.setState(i)
                },
                getState() {
                    return this.toggles.filter(t => A(t, this.cls)).reduce((t, e) => Fn(e, this.attrItem, t), {
                        filter: {
                            "": ""
                        },
                        sort: []
                    })
                },
                async setState(t, e = !0) {
                    t = {
                        filter: {
                            "": ""
                        },
                        sort: [],
                        ...t
                    }, m(this.$el, "beforeFilter", [this, t]), this.toggles.forEach(i => R(i, this.cls, !!tl(i, this.attrItem, t))), await Promise.all(N(this.target, this.$el).map(i => {
                        const s = () => {
                            Ua(t, i, E(i)), this.$update(this.$el)
                        };
                        return e ? this.animate(s, i) : s()
                    })), m(this.$el, "afterFilter", [this])
                },
                updateState() {
                    G.write(() => this.setState(this.getState(), !1))
                }
            }
        };

    function Hn(t, e) {
        return _e(it(t, e), ["filter"])
    }

    function Qa(t, e) {
        return ["filter", "sort"].every(i => ve(t[i], e[i]))
    }

    function Ua(t, e, i) {
        const s = il(t);
        i.forEach(r => c(r, "display", s && !H(r, s) ? "none" : ""));
        const [n, o] = t.sort;
        if (n) {
            const r = sl(i, n, o);
            ve(r, i) || L(e, r)
        }
    }

    function Fn(t, e, i) {
        const {
            filter: s,
            group: n,
            sort: o,
            order: r = "asc"
        } = Hn(t, e);
        return (s || q(o)) && (n ? s ? (delete i.filter[""], i.filter[n] = s) : (delete i.filter[n], (me(i.filter) || "" in i.filter) && (i.filter = {
            "": s || ""
        })) : i.filter = {
            "": s || ""
        }), q(o) || (i.sort = [o, r]), i
    }

    function tl(t, e, {
        filter: i = {
            "": ""
        },
        sort: [s, n]
    }) {
        const {
            filter: o = "",
            group: r = "",
            sort: a,
            order: l = "asc"
        } = Hn(t, e);
        return q(a) ? r in i && o === i[r] || !o && r && !(r in i) && !i[""] : s === a && n === l
    }

    function el(t, e) {
        return t.length === e.length && t.every(i => e.includes(i))
    }

    function il({
        filter: t
    }) {
        let e = "";
        return xt(t, i => e += i || ""), e
    }

    function sl(t, e, i) {
        return [...t].sort((s, n) => it(s, e).localeCompare(it(n, e), void 0, {
            numeric: !0
        }) * (i === "asc" || -1))
    }
    var as = {
        slide: {
            show(t) {
                return [{
                    transform: F(t * -100)
                }, {
                    transform: F()
                }]
            },
            percent(t) {
                return Oe(t)
            },
            translate(t, e) {
                return [{
                    transform: F(e * -100 * t)
                }, {
                    transform: F(e * 100 * (1 - t))
                }]
            }
        }
    };

    function Oe(t) {
        return Math.abs(c(t, "transform").split(",")[4] / t.offsetWidth) || 0
    }

    function F(t = 0, e = "%") {
        return t += t ? e : "", `translate3d(${t}, 0, 0)`
    }

    function ue(t) {
        return `scale3d(${t}, ${t}, 1)`
    }
    var Ln = { ...as,
        fade: {
            show() {
                return [{
                    opacity: 0
                }, {
                    opacity: 1
                }]
            },
            percent(t) {
                return 1 - c(t, "opacity")
            },
            translate(t) {
                return [{
                    opacity: 1 - t
                }, {
                    opacity: t
                }]
            }
        },
        scale: {
            show() {
                return [{
                    opacity: 0,
                    transform: ue(1 - .2)
                }, {
                    opacity: 1,
                    transform: ue(1)
                }]
            },
            percent(t) {
                return 1 - c(t, "opacity")
            },
            translate(t) {
                return [{
                    opacity: 1 - t,
                    transform: ue(1 - .2 * t)
                }, {
                    opacity: t,
                    transform: ue(1 - .2 + .2 * t)
                }]
            }
        }
    };

    function nl(t, e, i, {
        animation: s,
        easing: n
    }) {
        const {
            percent: o,
            translate: r,
            show: a = C
        } = s, l = a(i), h = new je;
        return {
            dir: i,
            show(u, d = 0, f) {
                const g = f ? "linear" : n;
                return u -= Math.round(u * K(d, -1, 1)), this.translate(d), gi(e, "itemin", {
                    percent: d,
                    duration: u,
                    timing: g,
                    dir: i
                }), gi(t, "itemout", {
                    percent: 1 - d,
                    duration: u,
                    timing: g,
                    dir: i
                }), Promise.all([T.start(e, l[1], u, g), T.start(t, l[0], u, g)]).then(() => {
                    this.reset(), h.resolve()
                }, C), h.promise
            },
            cancel() {
                T.cancel([e, t])
            },
            reset() {
                for (const u in l[0]) c([e, t], u, "")
            },
            forward(u, d = this.percent()) {
                return T.cancel([e, t]), this.show(u, d, !0)
            },
            translate(u) {
                this.reset();
                const d = r(u, i);
                c(e, d[1]), c(t, d[0]), gi(e, "itemtranslatein", {
                    percent: u,
                    dir: i
                }), gi(t, "itemtranslateout", {
                    percent: 1 - u,
                    dir: i
                })
            },
            percent() {
                return o(t || e, e, i)
            },
            getDistance() {
                return t == null ? void 0 : t.offsetWidth
            }
        }
    }

    function gi(t, e, i) {
        m(t, Nt(e, !1, !1, i))
    }
    var ol = {
        props: {
            autoplay: Boolean,
            autoplayInterval: Number,
            pauseOnHover: Boolean
        },
        data: {
            autoplay: !1,
            autoplayInterval: 7e3,
            pauseOnHover: !0
        },
        connected() {
            this.autoplay && this.startAutoplay()
        },
        disconnected() {
            this.stopAutoplay()
        },
        update() {
            b(this.slides, "tabindex", "-1")
        },
        events: [{
            name: "visibilitychange",
            el() {
                return document
            },
            filter() {
                return this.autoplay
            },
            handler() {
                document.hidden ? this.stopAutoplay() : this.startAutoplay()
            }
        }],
        methods: {
            startAutoplay() {
                this.stopAutoplay(), this.interval = setInterval(() => (!this.draggable || !v(":focus", this.$el)) && (!this.pauseOnHover || !H(this.$el, ":hover")) && !this.stack.length && this.show("next"), this.autoplayInterval)
            },
            stopAutoplay() {
                this.interval && clearInterval(this.interval)
            }
        }
    };
    const ls = {
            passive: !1,
            capture: !0
        },
        Wn = {
            passive: !0,
            capture: !0
        },
        rl = "touchstart mousedown",
        hs = "touchmove mousemove",
        Rn = "touchend touchcancel mouseup click input scroll";
    var al = {
        props: {
            draggable: Boolean
        },
        data: {
            draggable: !0,
            threshold: 10
        },
        created() {
            for (const t of ["start", "move", "end"]) {
                const e = this[t];
                this[t] = i => {
                    const s = ie(i).x * (Y ? -1 : 1);
                    this.prevPos = s === this.pos ? this.prevPos : this.pos, this.pos = s, e(i)
                }
            }
        },
        events: [{
            name: rl,
            passive: !0,
            delegate() {
                return `${this.selList} > *`
            },
            handler(t) {
                !this.draggable || !yt(t) && ll(t.target) || Q(t.target, $e) || t.button > 0 || this.length < 2 || this.start(t)
            }
        }, {
            name: "dragstart",
            handler(t) {
                t.preventDefault()
            }
        }, {
            name: hs,
            el() {
                return this.list
            },
            handler: C,
            ...ls
        }],
        methods: {
            start() {
                this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, S(document, hs, this.move, ls), S(document, Rn, this.end, Wn), c(this.list, "userSelect", "none")
            },
            move(t) {
                const e = this.pos - this.drag;
                if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold) return;
                c(this.list, "pointerEvents", "none"), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = e < 0 ? 1 : -1;
                const {
                    slides: i
                } = this;
                let {
                    prevIndex: s
                } = this, n = Math.abs(e), o = this.getIndex(s + this.dir, s), r = this._getDistance(s, o) || i[s].offsetWidth;
                for (; o !== s && n > r;) this.drag -= r * this.dir, s = o, n -= r, o = this.getIndex(s + this.dir, s), r = this._getDistance(s, o) || i[s].offsetWidth;
                this.percent = n / r;
                const a = i[s],
                    l = i[o],
                    h = this.index !== o,
                    u = s === o;
                let d;
                [this.index, this.prevIndex].filter(f => !p([o, s], f)).forEach(f => {
                    m(i[f], "itemhidden", [this]), u && (d = !0, this.prevIndex = s)
                }), (this.index === s && this.prevIndex !== s || d) && m(i[this.index], "itemshown", [this]), h && (this.prevIndex = s, this.index = o, !u && m(a, "beforeitemhide", [this]), m(l, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), a, !u && l), h && (!u && m(a, "itemhide", [this]), m(l, "itemshow", [this]))
            },
            end() {
                if (zt(document, hs, this.move, ls), zt(document, Rn, this.end, Wn), this.dragging)
                    if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
                    else {
                        const t = (Y ? this.dir * (Y ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
                        this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", !0)
                    }
                c(this.list, {
                    userSelect: "",
                    pointerEvents: ""
                }), this.drag = this.percent = null
            }
        }
    };

    function ll(t) {
        return c(t, "userSelect") !== "none" && y(t.childNodes).some(e => e.nodeType === 3 && e.textContent.trim())
    }
    var hl = {
            data: {
                selNav: !1
            },
            computed: {
                nav({
                    selNav: t
                }, e) {
                    return v(t, e)
                },
                selNavItem({
                    attrItem: t
                }) {
                    return `[${t}],[data-${t}]`
                },
                navItems(t, e) {
                    return N(this.selNavItem, e)
                }
            },
            update: {
                write() {
                    this.nav && this.length !== this.nav.children.length && _t(this.nav, this.slides.map((t, e) => `<li ${this.attrItem}="${e}"><a href></a></li>`).join("")), this.navItems.concat(this.nav).forEach(t => t && (t.hidden = !this.maxIndex)), this.updateNav()
                },
                events: ["resize"]
            },
            events: [{
                name: "click",
                delegate() {
                    return this.selNavItem
                },
                handler(t) {
                    t.preventDefault(), this.show(it(t.current, this.attrItem))
                }
            }, {
                name: "itemshow",
                handler: "updateNav"
            }],
            methods: {
                updateNav() {
                    const t = this.getValidIndex();
                    for (const e of this.navItems) {
                        const i = it(e, this.attrItem);
                        R(e, this.clsActive, Tt(i) === t), R(e, "bdt-invisible", this.finite && (i === "previous" && t === 0 || i === "next" && t >= this.maxIndex))
                    }
                }
            }
        },
        jn = {
            mixins: [ol, al, hl, vt],
            props: {
                clsActivated: Boolean,
                easing: String,
                index: Number,
                finite: Boolean,
                velocity: Number
            },
            data: () => ({
                easing: "ease",
                finite: !1,
                velocity: 1,
                index: 0,
                prevIndex: -1,
                stack: [],
                percent: 0,
                clsActive: "bdt-active",
                clsActivated: !1,
                Transitioner: !1,
                transitionOptions: {}
            }),
            connected() {
                this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = []
            },
            disconnected() {
                B(this.slides, this.clsActive)
            },
            computed: {
                duration({
                    velocity: t
                }, e) {
                    return qn(e.offsetWidth / t)
                },
                list({
                    selList: t
                }, e) {
                    return v(t, e)
                },
                maxIndex() {
                    return this.length - 1
                },
                slides: {
                    get() {
                        return E(this.list)
                    },
                    watch() {
                        this.$emit("resize")
                    }
                },
                length() {
                    return this.slides.length
                }
            },
            methods: {
                show(t, e = !1) {
                    if (this.dragging || !this.length) return;
                    const {
                        stack: i
                    } = this, s = e ? 0 : i.length, n = () => {
                        i.splice(s, 1), i.length && this.show(i.shift(), !0)
                    };
                    if (i[e ? "unshift" : "push"](t), !e && i.length > 1) {
                        if (i.length === 2) {
                            var o;
                            (o = this._transitioner) == null || o.forward(Math.min(this.duration, 200))
                        }
                        return
                    }
                    const r = this.getIndex(this.index),
                        a = A(this.slides, this.clsActive) && this.slides[r],
                        l = this.getIndex(t, this.index),
                        h = this.slides[l];
                    if (a === h) {
                        n();
                        return
                    }
                    if (this.dir = cl(t, r), this.prevIndex = r, this.index = l, a && !m(a, "beforeitemhide", [this]) || !m(h, "beforeitemshow", [this, a])) {
                        this.index = this.prevIndex, n();
                        return
                    }
                    const u = this._show(a, h, e).then(() => {
                        a && m(a, "itemhidden", [this]), m(h, "itemshown", [this]), i.shift(), this._transitioner = null, requestAnimationFrame(() => i.length && this.show(i.shift(), !0))
                    });
                    return a && m(a, "itemhide", [this]), m(h, "itemshow", [this]), u
                },
                getIndex(t = this.index, e = this.index) {
                    return K(Ct(t, this.slides, e, this.finite), 0, this.maxIndex)
                },
                getValidIndex(t = this.index, e = this.prevIndex) {
                    return this.getIndex(t, e)
                },
                _show(t, e, i) {
                    if (this._transitioner = this._getTransitioner(t, e, this.dir, {
                            easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing,
                            ...this.transitionOptions
                        }), !i && !t) return this._translate(1), Promise.resolve();
                    const {
                        length: s
                    } = this.stack;
                    return this._transitioner[s > 1 ? "forward" : "show"](s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration, this.percent)
                },
                _getDistance(t, e) {
                    return this._getTransitioner(t, t !== e && e).getDistance()
                },
                _translate(t, e = this.prevIndex, i = this.index) {
                    const s = this._getTransitioner(e !== i ? e : !1, i);
                    return s.translate(t), s
                },
                _getTransitioner(t = this.prevIndex, e = this.index, i = this.dir || 1, s = this.transitionOptions) {
                    return new this.Transitioner(Zt(t) ? this.slides[t] : t, Zt(e) ? this.slides[e] : e, i * (Y ? -1 : 1), s)
                }
            }
        };

    function cl(t, e) {
        return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1
    }

    function qn(t) {
        return .5 * t + 300
    }
    var Vn = {
            mixins: [jn],
            props: {
                animation: String
            },
            data: {
                animation: "slide",
                clsActivated: "bdt-transition-active",
                Animations: as,
                Transitioner: nl
            },
            computed: {
                animation({
                    animation: t,
                    Animations: e
                }) {
                    return { ...e[t] || e.slide,
                        name: t
                    }
                },
                transitionOptions() {
                    return {
                        animation: this.animation
                    }
                }
            },
            events: {
                beforeitemshow({
                    target: t
                }) {
                    x(t, this.clsActive)
                },
                itemshown({
                    target: t
                }) {
                    x(t, this.clsActivated)
                },
                itemhidden({
                    target: t
                }) {
                    B(t, this.clsActive, this.clsActivated)
                }
            }
        },
        Yn = {
            mixins: [ce, Qi, At, Vn],
            functional: !0,
            props: {
                delayControls: Number,
                preload: Number,
                videoAutoplay: Boolean,
                template: String
            },
            data: () => ({
                preload: 1,
                videoAutoplay: !1,
                delayControls: 3e3,
                items: [],
                cls: "bdt-open",
                clsPage: "bdt-lightbox-page",
                selList: ".bdt-lightbox-items",
                attrItem: "bdt-lightbox-item",
                selClose: ".bdt-close-large",
                selCaption: ".bdt-lightbox-caption",
                pauseOnHover: !1,
                velocity: 2,
                Animations: Ln,
                template: '<div class="bdt-lightbox bdt-overflow-hidden"> <ul class="bdt-lightbox-items"></ul> <div class="bdt-lightbox-toolbar bdt-position-top bdt-text-right bdt-transition-slide-top bdt-transition-opaque"> <button class="bdt-lightbox-toolbar-icon bdt-close-large" type="button" bdt-close></button> </div> <a class="bdt-lightbox-button bdt-position-center-left bdt-position-medium bdt-transition-fade" href bdt-slidenav-previous bdt-lightbox-item="previous"></a> <a class="bdt-lightbox-button bdt-position-center-right bdt-position-medium bdt-transition-fade" href bdt-slidenav-next bdt-lightbox-item="next"></a> <div class="bdt-lightbox-toolbar bdt-lightbox-caption bdt-position-bottom bdt-text-center bdt-transition-slide-bottom bdt-transition-opaque"></div> </div>'
            }),
            created() {
                const t = v(this.template),
                    e = v(this.selList, t);
                this.items.forEach(() => L(e, "<li>")), this.$mount(L(this.container, t))
            },
            computed: {
                caption({
                    selCaption: t
                }, e) {
                    return v(t, e)
                }
            },
            events: [{
                name: `${Ue} ${gt} keydown`,
                handler: "showControls"
            }, {
                name: "click",
                self: !0,
                delegate() {
                    return `${this.selList} > *`
                },
                handler(t) {
                    t.defaultPrevented || this.hide()
                }
            }, {
                name: "shown",
                self: !0,
                handler() {
                    this.showControls()
                }
            }, {
                name: "hide",
                self: !0,
                handler() {
                    this.hideControls(), B(this.slides, this.clsActive), T.stop(this.slides)
                }
            }, {
                name: "hidden",
                self: !0,
                handler() {
                    this.$destroy(!0)
                }
            }, {
                name: "keyup",
                el() {
                    return document
                },
                handler(t) {
                    if (!(!this.isToggled(this.$el) || !this.draggable)) switch (t.keyCode) {
                        case 37:
                            this.show("previous");
                            break;
                        case 39:
                            this.show("next");
                            break
                    }
                }
            }, {
                name: "beforeitemshow",
                handler(t) {
                    this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = Ln.scale, B(t.target, this.clsActive), this.stack.splice(1, 0, this.index))
                }
            }, {
                name: "itemshow",
                handler() {
                    _t(this.caption, this.getItem().caption || "");
                    for (let t = -this.preload; t <= this.preload; t++) this.loadItem(this.index + t)
                }
            }, {
                name: "itemshown",
                handler() {
                    this.draggable = this.$props.draggable
                }
            }, {
                name: "itemload",
                async handler(t, e) {
                    const {
                        source: i,
                        type: s,
                        alt: n = "",
                        poster: o,
                        attrs: r = {}
                    } = e;
                    if (this.setItem(e, "<span bdt-spinner></span>"), !i) return;
                    let a;
                    const l = {
                        allowfullscreen: "",
                        style: "max-width: 100%; box-sizing: border-box;",
                        "bdt-responsive": "",
                        "bdt-video": `${this.videoAutoplay}`
                    };
                    if (s === "image" || i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) try {
                        const {
                            width: h,
                            height: u
                        } = await ks(i, r.srcset, r.size);
                        this.setItem(e, Be("img", {
                            src: i,
                            width: h,
                            height: u,
                            alt: n,
                            ...r
                        }))
                    } catch {
                        this.setError(e)
                    } else if (s === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                        const h = Be("video", {
                            src: i,
                            poster: o,
                            controls: "",
                            playsinline: "",
                            "bdt-video": `${this.videoAutoplay}`
                        });
                        S(h, "loadedmetadata", () => {
                            b(h, {
                                width: h.videoWidth,
                                height: h.videoHeight,
                                ...r
                            }), this.setItem(e, h)
                        }), S(h, "error", () => this.setError(e))
                    } else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i)) this.setItem(e, Be("iframe", {
                        src: i,
                        allowfullscreen: "",
                        class: "bdt-lightbox-iframe",
                        ...r
                    }));
                    else if (a = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) this.setItem(e, Be("iframe", {
                        src: `https://www.youtube${a[1]||""}.com/embed/${a[2]}${a[3]?`?${a[3]}`:""}`,
                        width: 1920,
                        height: 1080,
                        ...l,
                        ...r
                    }));
                    else if (a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) try {
                        const {
                            height: h,
                            width: u
                        } = await (await fetch(`https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(i)}`, {
                            credentials: "omit"
                        })).json();
                        this.setItem(e, Be("iframe", {
                            src: `https://player.vimeo.com/video/${a[1]}${a[2]?`?${a[2]}`:""}`,
                            width: u,
                            height: h,
                            ...l,
                            ...r
                        }))
                    } catch {
                        this.setError(e)
                    }
                }
            }],
            methods: {
                loadItem(t = this.index) {
                    const e = this.getItem(t);
                    this.getSlide(e).childElementCount || m(this.$el, "itemload", [e])
                },
                getItem(t = this.index) {
                    return this.items[Ct(t, this.slides)]
                },
                setItem(t, e) {
                    m(this.$el, "itemloaded", [this, _t(this.getSlide(t), e)])
                },
                getSlide(t) {
                    return this.slides[this.items.indexOf(t)]
                },
                setError(t) {
                    this.setItem(t, '<span bdt-icon="icon: bolt; ratio: 2"></span>')
                },
                showControls() {
                    clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), x(this.$el, "bdt-active", "bdt-transition-active")
                },
                hideControls() {
                    B(this.$el, "bdt-active", "bdt-transition-active")
                }
            }
        };

    function Be(t, e) {
        const i = Ht(`<${t}>`);
        return b(i, e), i
    }
    var ul = {
        install: dl,
        props: {
            toggle: String
        },
        data: {
            toggle: "a"
        },
        computed: {
            toggles: {
                get({
                    toggle: t
                }, e) {
                    return N(t, e)
                },
                watch() {
                    this.hide()
                }
            }
        },
        disconnected() {
            this.hide()
        },
        events: [{
            name: "click",
            delegate() {
                return `${this.toggle}:not(.bdt-disabled)`
            },
            handler(t) {
                t.preventDefault(), this.show(t.current)
            }
        }],
        methods: {
            show(t) {
                const e = ms(this.toggles.map(Gn), "source");
                if (Kt(t)) {
                    const {
                        source: i
                    } = Gn(t);
                    t = wt(e, ({
                        source: s
                    }) => i === s)
                }
                return this.panel = this.panel || this.$create("lightboxPanel", { ...this.$props,
                    items: e
                }), S(this.panel.$el, "hidden", () => this.panel = null), this.panel.show(t)
            },
            hide() {
                var t;
                return (t = this.panel) == null ? void 0 : t.hide()
            }
        }
    };

    function dl(t, e) {
        t.lightboxPanel || t.component("lightboxPanel", Yn), $t(e.props, t.component("lightboxPanel").options.props)
    }

    function Gn(t) {
        const e = {};
        for (const i of ["href", "caption", "type", "poster", "alt", "attrs"]) e[i === "href" ? "source" : i] = it(t, i);
        return e.attrs = _e(e.attrs), e
    }
    var fl = {
        mixins: [ce],
        functional: !0,
        args: ["message", "status"],
        data: {
            message: "",
            status: "",
            timeout: 5e3,
            group: null,
            pos: "top-center",
            clsContainer: "bdt-notification",
            clsClose: "bdt-notification-close",
            clsMsg: "bdt-notification-message"
        },
        install: pl,
        computed: {
            marginProp({
                pos: t
            }) {
                return `margin${at(t,"top")?"Top":"Bottom"}`
            },
            startProps() {
                return {
                    opacity: 0,
                    [this.marginProp]: -this.$el.offsetHeight
                }
            }
        },
        created() {
            const t = v(`.${this.clsContainer}-${this.pos}`, this.container) || L(this.container, `<div class="${this.clsContainer} ${this.clsContainer}-${this.pos}" style="display: block"></div>`);
            this.$mount(L(t, `<div class="${this.clsMsg}${this.status?` ${this.clsMsg}-${this.status}`:""}" role="alert"> <a href class="${this.clsClose}" data-bdt-close></a> <div>${this.message}</div> </div>`))
        },
        async connected() {
            const t = $(c(this.$el, this.marginProp));
            await T.start(c(this.$el, this.startProps), {
                opacity: 1,
                [this.marginProp]: t
            }), this.timeout && (this.timer = setTimeout(this.close, this.timeout))
        },
        events: {
            click(t) {
                Q(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close()
            },
            [jt]() {
                this.timer && clearTimeout(this.timer)
            },
            [re]() {
                this.timeout && (this.timer = setTimeout(this.close, this.timeout))
            }
        },
        methods: {
            async close(t) {
                const e = i => {
                    const s = P(i);
                    m(i, "close", [this]), st(i), s != null && s.hasChildNodes() || st(s)
                };
                this.timer && clearTimeout(this.timer), t || await T.start(this.$el, this.startProps), e(this.$el)
            }
        }
    };

    function pl(t) {
        t.notification.closeAll = function(e, i) {
            mt(document.body, s => {
                const n = t.getComponent(s, "notification");
                n && (!e || e === n.group) && n.close(i)
            })
        }
    }
    const mi = {
            x: vi,
            y: vi,
            rotate: vi,
            scale: vi,
            color: cs,
            backgroundColor: cs,
            borderColor: cs,
            blur: Vt,
            hue: Vt,
            fopacity: Vt,
            grayscale: Vt,
            invert: Vt,
            saturate: Vt,
            sepia: Vt,
            opacity: ml,
            stroke: vl,
            bgx: Kn,
            bgy: Kn
        },
        {
            keys: Xn
        } = Object;
    var Jn = {
        mixins: [fi],
        props: to(Xn(mi), "list"),
        data: to(Xn(mi), void 0),
        computed: {
            props(t, e) {
                const i = {};
                for (const n in t) n in mi && !q(t[n]) && (i[n] = t[n].slice());
                const s = {};
                for (const n in i) s[n] = mi[n](n, e, i[n], i);
                return s
            }
        },
        events: {
            load() {
                this.$emit()
            }
        },
        methods: {
            reset() {
                for (const t in this.getCss(0)) c(this.$el, t, "")
            },
            getCss(t) {
                const e = {
                    transform: "",
                    filter: ""
                };
                for (const i in this.props) this.props[i](e, t);
                return e.willChange = Object.keys(e).filter(i => e[i] !== "").join(","), e
            }
        }
    };

    function vi(t, e, i) {
        let s = $i(i) || {
                x: "px",
                y: "px",
                rotate: "deg"
            }[t] || "",
            n;
        return t === "x" || t === "y" ? (t = `translate${kt(t)}`, n = o => $($(o).toFixed(s === "px" ? 0 : 6))) : t === "scale" && (s = "", n = o => $i([o]) ? nt(o, "width", e, !0) / e.offsetWidth : o), i.length === 1 && i.unshift(t === "scale" ? 1 : 0), i = de(i, n), (o, r) => {
            o.transform += ` ${t}(${Me(i,r)}${s})`
        }
    }

    function cs(t, e, i) {
        return i.length === 1 && i.unshift(De(e, t, "")), i = de(i, s => gl(e, s)), (s, n) => {
            const [o, r, a] = Un(i, n), l = o.map((h, u) => (h += a * (r[u] - h), u === 3 ? $(h) : parseInt(h, 10))).join(",");
            s[t] = `rgba(${l})`
        }
    }

    function gl(t, e) {
        return De(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map($)
    }

    function Vt(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = $i(i) || {
            blur: "px",
            hue: "deg"
        }[t] || "%";
        return t = {
            fopacity: "opacity",
            hue: "hue-rotate"
        }[t] || t, i = de(i), (n, o) => {
            const r = Me(i, o);
            n.filter += ` ${t}(${r+s})`
        }
    }

    function ml(t, e, i) {
        return i.length === 1 && i.unshift(De(e, t, "")), i = de(i), (s, n) => {
            s[t] = Me(i, n)
        }
    }

    function vl(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = $i(i),
            n = vn(e);
        return i = de(i.reverse(), o => (o = $(o), s === "%" ? o * n / 100 : o)), i.some(([o]) => o) ? (c(e, "strokeDasharray", n), (o, r) => {
            o.strokeDashoffset = Me(i, r)
        }) : C
    }

    function Kn(t, e, i, s) {
        i.length === 1 && i.unshift(0);
        const n = t === "bgy" ? "height" : "width";
        s[t] = de(i, a => nt(a, n, e));
        const o = ["bgx", "bgy"].filter(a => a in s);
        if (o.length === 2 && t === "bgx") return C;
        if (De(e, "backgroundSize", "") === "cover") return wl(t, e, i, s);
        const r = {};
        for (const a of o) r[a] = Zn(e, a);
        return Qn(o, r, s)
    }

    function wl(t, e, i, s) {
        const n = $l(e);
        if (!n.width) return C;
        const o = {
                width: e.offsetWidth,
                height: e.offsetHeight
            },
            r = ["bgx", "bgy"].filter(u => u in s),
            a = {};
        for (const u of r) {
            const d = s[u].map(([O]) => O),
                f = Math.min(...d),
                g = Math.max(...d),
                k = d.indexOf(f) < d.indexOf(g),
                M = g - f;
            a[u] = `${(k?-M:0)-(k?f:g)}px`, o[u === "bgy" ? "height" : "width"] += M
        }
        const l = Re.cover(n, o);
        for (const u of r) {
            const d = u === "bgy" ? "height" : "width",
                f = l[d] - o[d];
            a[u] = `max(${Zn(e,u)},-${f}px) + ${a[u]}`
        }
        const h = Qn(r, a, s);
        return (u, d) => {
            h(u, d), u.backgroundSize = `${l.width}px ${l.height}px`, u.backgroundRepeat = "no-repeat"
        }
    }

    function Zn(t, e) {
        return De(t, `background-position-${e.substr(-1)}`, "")
    }

    function Qn(t, e, i) {
        return function(s, n) {
            for (const o of t) {
                const r = Me(i[o], n);
                s[`background-position-${o.substr(-1)}`] = `calc(${e[o]} + ${r}px)`
            }
        }
    }
    const wi = {};

    function $l(t) {
        const e = c(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
        if (wi[e]) return wi[e];
        const i = new Image;
        return e && (i.src = e, !i.naturalWidth) ? (i.onload = () => {
            wi[e] = us(i), m(t, Nt("load", !1))
        }, us(i)) : wi[e] = us(i)
    }

    function us(t) {
        return {
            width: t.naturalWidth,
            height: t.naturalHeight
        }
    }

    function de(t, e = $) {
        const i = [],
            {
                length: s
            } = t;
        let n = 0;
        for (let o = 0; o < s; o++) {
            let [r, a] = D(t[o]) ? t[o].trim().split(" ") : [t[o]];
            if (r = e(r), a = a ? $(a) / 100 : null, o === 0 ? a === null ? a = 0 : a && i.push([r, 0]) : o === s - 1 && (a === null ? a = 1 : a !== 1 && (i.push([r, a]), a = 1)), i.push([r, a]), a === null) n++;
            else if (n) {
                const l = i[o - n - 1][1],
                    h = (a - l) / (n + 1);
                for (let u = n; u > 0; u--) i[o - u][1] = l + h * (n - u + 1);
                n = 0
            }
        }
        return i
    }

    function Un(t, e) {
        const i = wt(t.slice(1), ([, s]) => e <= s) + 1;
        return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])]
    }

    function Me(t, e) {
        const [i, s, n] = Un(t, e);
        return Zt(i) ? i + Math.abs(i - s) * n * (i < s ? 1 : -1) : +s
    }
    const bl = /^-?\d+(\S+)?/;

    function $i(t, e) {
        for (const i of t) {
            const s = i.match == null ? void 0 : i.match(bl);
            if (s) return s[1]
        }
        return e
    }

    function De(t, e, i) {
        const s = t.style[e],
            n = c(c(t, e, i), e);
        return t.style[e] = s, n
    }

    function to(t, e) {
        return t.reduce((i, s) => (i[s] = e, i), {})
    }
    var xl = {
        mixins: [Jn, vt, ai],
        props: {
            target: String,
            viewport: Number,
            easing: Number,
            start: String,
            end: String
        },
        data: {
            target: !1,
            viewport: 1,
            easing: 1,
            start: 0,
            end: 0
        },
        computed: {
            target({
                target: t
            }, e) {
                return eo(t && lt(t, e) || e)
            },
            start({
                start: t
            }) {
                return nt(t, "height", this.target, !0)
            },
            end({
                end: t,
                viewport: e
            }) {
                return nt(t || (e = (1 - e) * 100) && `${e}vh+${e}%`, "height", this.target, !0)
            }
        },
        resizeTargets() {
            return [this.$el, this.target]
        },
        update: {
            read({
                percent: t
            }, e) {
                if (e.has("scroll") || (t = !1), !j(this.$el)) return !1;
                if (!this.matchMedia) return;
                const i = t;
                return t = yl(Ji(this.target, this.start, this.end), this.easing), {
                    percent: t,
                    style: i === t ? !1 : this.getCss(t)
                }
            },
            write({
                style: t
            }) {
                if (!this.matchMedia) {
                    this.reset();
                    return
                }
                t && c(this.$el, t)
            },
            events: ["scroll", "resize"]
        }
    };

    function yl(t, e) {
        return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e)
    }

    function eo(t) {
        return t ? "offsetTop" in t ? t : eo(P(t)) : document.documentElement
    }
    var io = {
            update: {
                write() {
                    if (this.stack.length || this.dragging) return;
                    const t = this.getValidIndex(this.index);
                    !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1, this.prevIndex, this.index)
                },
                events: ["resize"]
            }
        },
        so = {
            mixins: [Pe],
            connected() {
                this.lazyload(this.slides, this.getAdjacentSlides)
            }
        };

    function kl(t, e, i, {
        center: s,
        easing: n,
        list: o
    }) {
        const r = new je,
            a = t ? ze(t, o, s) : ze(e, o, s) + w(e).width * i,
            l = e ? ze(e, o, s) : a + w(t).width * i * (Y ? -1 : 1);
        return {
            dir: i,
            show(h, u = 0, d) {
                const f = d ? "linear" : n;
                return h -= Math.round(h * K(u, -1, 1)), this.translate(u), u = t ? u : K(u, 0, 1), ds(this.getItemIn(), "itemin", {
                    percent: u,
                    duration: h,
                    timing: f,
                    dir: i
                }), t && ds(this.getItemIn(!0), "itemout", {
                    percent: 1 - u,
                    duration: h,
                    timing: f,
                    dir: i
                }), T.start(o, {
                    transform: F(-l * (Y ? -1 : 1), "px")
                }, h, f).then(r.resolve, C), r.promise
            },
            cancel() {
                T.cancel(o)
            },
            reset() {
                c(o, "transform", "")
            },
            forward(h, u = this.percent()) {
                return T.cancel(o), this.show(h, u, !0)
            },
            translate(h) {
                const u = this.getDistance() * i * (Y ? -1 : 1);
                c(o, "transform", F(K(-l + (u - u * h), -bi(o), w(o).width) * (Y ? -1 : 1), "px"));
                const d = this.getActives(),
                    f = this.getItemIn(),
                    g = this.getItemIn(!0);
                h = t ? K(h, -1, 1) : 0;
                for (const k of E(o)) {
                    const M = p(d, k),
                        O = k === f,
                        Ot = k === g,
                        fs = O || !Ot && (M || i * (Y ? -1 : 1) === -1 ^ xi(k, o) > xi(t || e));
                    ds(k, `itemtranslate${fs?"in":"out"}`, {
                        dir: i,
                        percent: Ot ? 1 - h : O ? h : M ? 1 : 0
                    })
                }
            },
            percent() {
                return Math.abs((c(o, "transform").split(",")[4] * (Y ? -1 : 1) + a) / (l - a))
            },
            getDistance() {
                return Math.abs(l - a)
            },
            getItemIn(h = !1) {
                let u = this.getActives(),
                    d = oo(o, ze(e || t, o, s));
                if (h) {
                    const f = u;
                    u = d, d = f
                }
                return d[wt(d, f => !p(u, f))]
            },
            getActives() {
                return oo(o, ze(t || e, o, s))
            }
        }
    }

    function ze(t, e, i) {
        const s = xi(t, e);
        return i ? s - Sl(t, e) : Math.min(s, no(e))
    }

    function no(t) {
        return Math.max(0, bi(t) - w(t).width)
    }

    function bi(t) {
        return Dt(E(t), e => w(e).width)
    }

    function Sl(t, e) {
        return w(e).width / 2 - w(t).width / 2
    }

    function xi(t, e) {
        return t && (Ze(t).left + (Y ? w(t).width - w(e).width : 0)) * (Y ? -1 : 1) || 0
    }

    function oo(t, e) {
        e -= 1;
        const i = w(t).width,
            s = e + i + 2;
        return E(t).filter(n => {
            const o = xi(n, t),
                r = o + Math.min(w(n).width, i);
            return o >= e && r <= s
        })
    }

    function ds(t, e, i) {
        m(t, Nt(e, !1, !1, i))
    }
    var Tl = {
        mixins: [tt, jn, io, so],
        props: {
            center: Boolean,
            sets: Boolean
        },
        data: {
            center: !1,
            sets: !1,
            attrItem: "bdt-slider-item",
            selList: ".bdt-slider-items",
            selNav: ".bdt-slider-nav",
            clsContainer: "bdt-slider-container",
            Transitioner: kl
        },
        computed: {
            avgWidth() {
                return bi(this.list) / this.length
            },
            finite({
                finite: t
            }) {
                return t || Cl(this.list, this.center)
            },
            maxIndex() {
                if (!this.finite || this.center && !this.sets) return this.length - 1;
                if (this.center) return Ut(this.sets);
                let t = 0;
                const e = no(this.list),
                    i = wt(this.slides, s => {
                        if (t >= e) return !0;
                        t += w(s).width
                    });
                return ~i ? i : this.length - 1
            },
            sets({
                sets: t
            }) {
                if (!t) return;
                let e = 0;
                const i = [],
                    s = w(this.list).width;
                for (let n = 0; n < this.length; n++) {
                    const o = w(this.slides[n]).width;
                    e + o > s && (e = 0), this.center ? e < s / 2 && e + o + w(this.slides[+n + 1]).width / 2 > s / 2 && (i.push(+n), e = s / 2 - o / 2) : e === 0 && i.push(Math.min(+n, this.maxIndex)), e += o
                }
                if (i.length) return i
            },
            transitionOptions() {
                return {
                    center: this.center,
                    list: this.list
                }
            }
        },
        connected() {
            R(this.$el, this.clsContainer, !v(`.${this.clsContainer}`, this.$el))
        },
        update: {
            write() {
                for (const t of this.navItems) {
                    const e = Tt(it(t, this.attrItem));
                    e !== !1 && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !p(this.sets, e))
                }
                this.length && !this.dragging && !this.stack.length && (this.reorder(), this._translate(1)), this.updateActiveClasses()
            },
            events: ["resize"]
        },
        events: {
            beforeitemshow(t) {
                !this.dragging && this.sets && this.stack.length < 2 && !p(this.sets, this.index) && (this.index = this.getValidIndex());
                const e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                if (!this.dragging && e > 1) {
                    for (let s = 0; s < e; s++) this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
                    t.preventDefault();
                    return
                }
                const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
                this.duration = qn(this.avgWidth / this.velocity) * (w(this.slides[i]).width / this.avgWidth), this.reorder()
            },
            itemshow() {
                ~this.prevIndex && x(this._getTransitioner().getItemIn(), this.clsActive)
            },
            itemshown() {
                this.updateActiveClasses()
            }
        },
        methods: {
            reorder() {
                if (this.finite) {
                    c(this.slides, "order", "");
                    return
                }
                const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                if (this.slides.forEach((n, o) => c(n, "order", this.dir > 0 && o < t ? 1 : this.dir < 0 && o >= this.index ? -1 : "")), !this.center) return;
                const e = this.slides[t];
                let i = w(this.list).width / 2 - w(e).width / 2,
                    s = 0;
                for (; i > 0;) {
                    const n = this.getIndex(--s + t, t),
                        o = this.slides[n];
                    c(o, "order", n > t ? -2 : -1), i -= w(o).width
                }
            },
            updateActiveClasses() {
                const t = this._getTransitioner(this.index).getActives(),
                    e = [this.clsActive, (!this.sets || p(this.sets, $(this.index))) && this.clsActivated || ""];
                for (const i of this.slides) R(i, e, p(t, i))
            },
            getValidIndex(t = this.index, e = this.prevIndex) {
                if (t = this.getIndex(t, e), !this.sets) return t;
                let i;
                do {
                    if (p(this.sets, t)) return t;
                    i = t, t = this.getIndex(t + this.dir, e)
                } while (t !== i);
                return t
            },
            getAdjacentSlides() {
                const {
                    width: t
                } = w(this.list), e = -t, i = t * 2, s = w(this.slides[this.index]).width, n = this.center ? t / 2 - s / 2 : 0, o = new Set;
                for (const r of [-1, 1]) {
                    let a = n + (r > 0 ? s : 0),
                        l = 0;
                    do {
                        const h = this.slides[this.getIndex(this.index + r + l++ * r)];
                        a += w(h).width * r, o.add(h)
                    } while (this.length > l && a > e && a < i)
                }
                return Array.from(o)
            }
        }
    };

    function Cl(t, e) {
        const {
            length: i
        } = t;
        if (i < 2) return !0;
        const {
            width: s
        } = w(t);
        if (!e) return Math.ceil(bi(t)) < Math.trunc(s + Il(t));
        const n = E(t),
            o = Math.trunc(s / 2);
        for (const r in n) {
            const a = n[r],
                l = w(a).width,
                h = new Set([a]);
            let u = 0;
            for (const d of [-1, 1]) {
                let f = l / 2,
                    g = 0;
                for (; f < o;) {
                    const k = n[Ct(+r + d + g++ * d, n)];
                    if (h.has(k)) return !0;
                    f += w(k).width, h.add(k)
                }
                u = Math.max(u, l / 2 + w(n[Ct(+r + d, n)]).width / 2 - (f - o))
            }
            if (u > Dt(n.filter(d => !h.has(d)), d => w(d).width)) return !0
        }
        return !1
    }

    function Il(t) {
        return Math.max(0, ...E(t).map(e => w(e).width))
    }
    var ro = {
        mixins: [Jn],
        data: {
            selItem: "!li"
        },
        beforeConnect() {
            this.item = lt(this.selItem, this.$el)
        },
        disconnected() {
            this.item = null
        },
        events: [{
            name: "itemin itemout",
            self: !0,
            el() {
                return this.item
            },
            handler({
                type: t,
                detail: {
                    percent: e,
                    duration: i,
                    timing: s,
                    dir: n
                }
            }) {
                G.read(() => {
                    if (!this.matchMedia) return;
                    const o = this.getCss(lo(t, n, e)),
                        r = this.getCss(ao(t) ? .5 : n > 0 ? 1 : 0);
                    G.write(() => {
                        c(this.$el, o), T.start(this.$el, r, i, s).catch(C)
                    })
                })
            }
        }, {
            name: "transitioncanceled transitionend",
            self: !0,
            el() {
                return this.item
            },
            handler() {
                T.cancel(this.$el)
            }
        }, {
            name: "itemtranslatein itemtranslateout",
            self: !0,
            el() {
                return this.item
            },
            handler({
                type: t,
                detail: {
                    percent: e,
                    dir: i
                }
            }) {
                G.read(() => {
                    if (!this.matchMedia) {
                        this.reset();
                        return
                    }
                    const s = this.getCss(lo(t, i, e));
                    G.write(() => c(this.$el, s))
                })
            }
        }]
    };

    function ao(t) {
        return Xt(t, "in")
    }

    function lo(t, e, i) {
        return i /= 2, ao(t) ^ e < 0 ? i : 1 - i
    }
    var _l = { ...as,
            fade: {
                show() {
                    return [{
                        opacity: 0,
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                },
                percent(t) {
                    return 1 - c(t, "opacity")
                },
                translate(t) {
                    return [{
                        opacity: 1 - t,
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                }
            },
            scale: {
                show() {
                    return [{
                        opacity: 0,
                        transform: ue(1 + .5),
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                },
                percent(t) {
                    return 1 - c(t, "opacity")
                },
                translate(t) {
                    return [{
                        opacity: 1 - t,
                        transform: ue(1 + .5 * t),
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                }
            },
            pull: {
                show(t) {
                    return t < 0 ? [{
                        transform: F(30),
                        zIndex: -1
                    }, {
                        transform: F(),
                        zIndex: 0
                    }] : [{
                        transform: F(-100),
                        zIndex: 0
                    }, {
                        transform: F(),
                        zIndex: -1
                    }]
                },
                percent(t, e, i) {
                    return i < 0 ? 1 - Oe(e) : Oe(t)
                },
                translate(t, e) {
                    return e < 0 ? [{
                        transform: F(30 * t),
                        zIndex: -1
                    }, {
                        transform: F(-100 * (1 - t)),
                        zIndex: 0
                    }] : [{
                        transform: F(-t * 100),
                        zIndex: 0
                    }, {
                        transform: F(30 * (1 - t)),
                        zIndex: -1
                    }]
                }
            },
            push: {
                show(t) {
                    return t < 0 ? [{
                        transform: F(100),
                        zIndex: 0
                    }, {
                        transform: F(),
                        zIndex: -1
                    }] : [{
                        transform: F(-30),
                        zIndex: -1
                    }, {
                        transform: F(),
                        zIndex: 0
                    }]
                },
                percent(t, e, i) {
                    return i > 0 ? 1 - Oe(e) : Oe(t)
                },
                translate(t, e) {
                    return e < 0 ? [{
                        transform: F(t * 100),
                        zIndex: 0
                    }, {
                        transform: F(-30 * (1 - t)),
                        zIndex: -1
                    }] : [{
                        transform: F(-30 * t),
                        zIndex: -1
                    }, {
                        transform: F(100 * (1 - t)),
                        zIndex: 0
                    }]
                }
            }
        },
        Pl = {
            mixins: [tt, Vn, io, so],
            props: {
                ratio: String,
                minHeight: Number,
                maxHeight: Number
            },
            data: {
                ratio: "16:9",
                minHeight: !1,
                maxHeight: !1,
                selList: ".bdt-slideshow-items",
                attrItem: "bdt-slideshow-item",
                selNav: ".bdt-slideshow-nav",
                Animations: _l
            },
            update: {
                read() {
                    if (!this.list) return !1;
                    let [t, e] = this.ratio.split(":").map(Number);
                    return e = e * this.list.offsetWidth / t || 0, this.minHeight && (e = Math.max(this.minHeight, e)), this.maxHeight && (e = Math.min(this.maxHeight, e)), {
                        height: e - se(this.list, "height", "content-box")
                    }
                },
                write({
                    height: t
                }) {
                    t > 0 && c(this.list, "minHeight", t)
                },
                events: ["resize"]
            },
            methods: {
                getAdjacentSlides() {
                    return [1, -1].map(t => this.slides[this.getIndex(this.index + t)])
                }
            }
        },
        El = {
            mixins: [tt, Nn],
            props: {
                group: String,
                threshold: Number,
                clsItem: String,
                clsPlaceholder: String,
                clsDrag: String,
                clsDragState: String,
                clsBase: String,
                clsNoDrag: String,
                clsEmpty: String,
                clsCustom: String,
                handle: String
            },
            data: {
                group: !1,
                threshold: 5,
                clsItem: "bdt-sortable-item",
                clsPlaceholder: "bdt-sortable-placeholder",
                clsDrag: "bdt-sortable-drag",
                clsDragState: "bdt-drag",
                clsBase: "bdt-sortable",
                clsNoDrag: "bdt-sortable-nodrag",
                clsEmpty: "bdt-sortable-empty",
                clsCustom: "",
                handle: !1,
                pos: {}
            },
            created() {
                for (const t of ["init", "start", "move", "end"]) {
                    const e = this[t];
                    this[t] = i => {
                        $t(this.pos, ie(i)), e(i)
                    }
                }
            },
            events: {
                name: gt,
                passive: !1,
                handler: "init"
            },
            computed: {
                target() {
                    return (this.$el.tBodies || [this.$el])[0]
                },
                items() {
                    return E(this.target)
                },
                isEmpty: {
                    get() {
                        return me(this.items)
                    },
                    watch(t) {
                        R(this.target, this.clsEmpty, t)
                    },
                    immediate: !0
                },
                handles: {
                    get({
                        handle: t
                    }, e) {
                        return t ? N(t, e) : this.items
                    },
                    watch(t, e) {
                        c(e, {
                            touchAction: "",
                            userSelect: ""
                        }), c(t, {
                            touchAction: Rt ? "none" : "",
                            userSelect: "none"
                        })
                    },
                    immediate: !0
                }
            },
            update: {
                write(t) {
                    if (!this.drag || !P(this.placeholder)) return;
                    const {
                        pos: {
                            x: e,
                            y: i
                        },
                        origin: {
                            offsetTop: s,
                            offsetLeft: n
                        },
                        placeholder: o
                    } = this;
                    c(this.drag, {
                        top: i - s,
                        left: e - n
                    });
                    const r = this.getSortable(document.elementFromPoint(e, i));
                    if (!r) return;
                    const {
                        items: a
                    } = r;
                    if (a.some(T.inProgress)) return;
                    const l = Ml(a, {
                        x: e,
                        y: i
                    });
                    if (a.length && (!l || l === o)) return;
                    const h = this.getSortable(o),
                        u = Dl(r.target, l, o, e, i, r === h && t.moved !== l);
                    u !== !1 && (u && o === u || (r !== h ? (h.remove(o), t.moved = l) : delete t.moved, r.insert(o, u), this.touched.add(r)))
                },
                events: ["move"]
            },
            methods: {
                init(t) {
                    const {
                        target: e,
                        button: i,
                        defaultPrevented: s
                    } = t, [n] = this.items.filter(o => I(e, o));
                    !n || s || i > 0 || Oi(e) || I(e, `.${this.clsNoDrag}`) || this.handle && !I(e, this.handle) || (t.preventDefault(), this.touched = new Set([this]), this.placeholder = n, this.origin = {
                        target: e,
                        index: ee(n),
                        ...this.pos
                    }, S(document, Ue, this.move), S(document, Pt, this.end), this.threshold || this.start(t))
                },
                start(t) {
                    this.drag = Bl(this.$container, this.placeholder);
                    const {
                        left: e,
                        top: i
                    } = this.placeholder.getBoundingClientRect();
                    $t(this.origin, {
                        offsetLeft: this.pos.x - e,
                        offsetTop: this.pos.y - i
                    }), x(this.drag, this.clsDrag, this.clsCustom), x(this.placeholder, this.clsPlaceholder), x(this.items, this.clsItem), x(document.documentElement, this.clsDragState), m(this.$el, "start", [this, this.placeholder]), Al(this.pos), this.move(t)
                },
                move(t) {
                    this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t)
                },
                end() {
                    if (zt(document, Ue, this.move), zt(document, Pt, this.end), !this.drag) return;
                    Ol();
                    const t = this.getSortable(this.placeholder);
                    this === t ? this.origin.index !== ee(this.placeholder) && m(this.$el, "moved", [this, this.placeholder]) : (m(t.$el, "added", [t, this.placeholder]), m(this.$el, "removed", [this, this.placeholder])), m(this.$el, "stop", [this, this.placeholder]), st(this.drag), this.drag = null;
                    for (const {
                            clsPlaceholder: e,
                            clsItem: i
                        } of this.touched)
                        for (const s of this.touched) B(s.items, e, i);
                    this.touched = null, B(document.documentElement, this.clsDragState)
                },
                insert(t, e) {
                    x(this.items, this.clsItem);
                    const i = () => e ? Ge(e, t) : L(this.target, t);
                    this.animate(i)
                },
                remove(t) {
                    I(t, this.target) && this.animate(() => st(t))
                },
                getSortable(t) {
                    do {
                        const e = this.$getComponent(t, "sortable");
                        if (e && (e === this || this.group !== !1 && e.group === this.group)) return e
                    } while (t = P(t))
                }
            }
        };
    let ho;

    function Al(t) {
        let e = Date.now();
        ho = setInterval(() => {
            let {
                x: i,
                y: s
            } = t;
            s += document.scrollingElement.scrollTop;
            const n = (Date.now() - e) * .3;
            e = Date.now(), ct(document.elementFromPoint(i, t.y)).reverse().some(o => {
                let {
                    scrollTop: r,
                    scrollHeight: a
                } = o;
                const {
                    top: l,
                    bottom: h,
                    height: u
                } = ot(o);
                if (l < s && l + 35 > s) r -= n;
                else if (h > s && h - 35 < s) r += n;
                else return;
                if (r > 0 && r < a - u) return o.scrollTop = r, !0
            })
        }, 15)
    }

    function Ol() {
        clearInterval(ho)
    }

    function Bl(t, e) {
        let i;
        if (ht(e, "li", "tr")) {
            i = v("<div>"), L(i, e.cloneNode(!0).children);
            for (const s of e.getAttributeNames()) b(i, s, e.getAttribute(s))
        } else i = e.cloneNode(!0);
        return L(t, i), c(i, "margin", "0", "important"), c(i, {
            boxSizing: "border-box",
            width: e.offsetWidth,
            height: e.offsetHeight,
            padding: c(e, "padding")
        }), Z(i.firstElementChild, Z(e.firstElementChild)), i
    }

    function Ml(t, e) {
        return t[wt(t, i => We(e, i.getBoundingClientRect()))]
    }

    function Dl(t, e, i, s, n, o) {
        if (!E(t).length) return;
        const r = e.getBoundingClientRect();
        if (!o) return zl(t, i) || n < r.top + r.height / 2 ? e : e.nextElementSibling;
        const a = i.getBoundingClientRect(),
            l = co([r.top, r.bottom], [a.top, a.bottom]),
            h = l ? s : n,
            u = l ? "width" : "height",
            d = l ? "left" : "top",
            f = l ? "right" : "bottom",
            g = a[u] < r[u] ? r[u] - a[u] : 0;
        return a[d] < r[d] ? g && h < r[d] + g ? !1 : e.nextElementSibling : g && h > r[f] - g ? !1 : e
    }

    function zl(t, e) {
        const i = E(t).length === 1;
        i && L(t, e);
        const s = E(t),
            n = s.some((o, r) => {
                const a = o.getBoundingClientRect();
                return s.slice(r + 1).some(l => {
                    const h = l.getBoundingClientRect();
                    return !co([a.left, a.right], [h.left, h.right])
                })
            });
        return i && st(e), n
    }

    function co(t, e) {
        return t[1] > e[0] && e[1] > t[0]
    }
    var Nl = {
        mixins: [ce, At, nn],
        args: "title",
        props: {
            delay: Number,
            title: String
        },
        data: {
            pos: "top",
            title: "",
            delay: 0,
            animation: ["bdt-animation-scale-up"],
            duration: 100,
            cls: "bdt-active"
        },
        beforeConnect() {
            this.id = `bdt-tooltip-${this._uid}`, this._hasTitle = It(this.$el, "title"), b(this.$el, {
                title: "",
                "aria-describedby": this.id
            }), Hl(this.$el)
        },
        disconnected() {
            this.hide(), b(this.$el, "title") || b(this.$el, "title", this._hasTitle ? this.title : null)
        },
        methods: {
            show() {
                this.isToggled(this.tooltip || null) || !this.title || (this._unbind = z(document, `keydown ${gt}`, this.hide, !1, t => t.type === gt && !I(t.target, this.$el) || t.type === "keydown" && t.keyCode === 27), clearTimeout(this.showTimer), this.showTimer = setTimeout(this._show, this.delay))
            },
            async hide() {
                H(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && (await this.toggleElement(this.tooltip, !1, !1), st(this.tooltip), this.tooltip = null, this._unbind()))
            },
            _show() {
                const [t] = ct(this.$el);
                this.tooltip = L(I(t, this.container) ? t : this.container, `<div id="${this.id}" class="bdt-${this.$options.name}" role="tooltip"> <div class="bdt-${this.$options.name}-inner">${this.title}</div> </div>`), S(this.tooltip, "toggled", (e, i) => {
                    if (!i) return;
                    this.positionAt(this.tooltip, this.$el);
                    const [s, n] = Fl(this.tooltip, this.$el, this.pos);
                    this.origin = this.axis === "y" ? `${Qe(s)}-${n}` : `${n}-${Qe(s)}`
                }), this.toggleElement(this.tooltip, !0)
            }
        },
        events: {
            focus: "show",
            blur: "hide",
            [`${jt} ${re}`](t) {
                yt(t) || this[t.type === jt ? "show" : "hide"]()
            },
            [gt](t) {
                yt(t) && this.show()
            }
        }
    };

    function Hl(t) {
        Ve(t) || b(t, "tabindex", "0")
    }

    function Fl(t, e, [i, s]) {
        const n = _(t),
            o = _(e),
            r = [
                ["left", "right"],
                ["top", "bottom"]
            ];
        for (const l of r) {
            if (n[l[0]] >= o[l[1]]) {
                i = l[1];
                break
            }
            if (n[l[1]] <= o[l[0]]) {
                i = l[0];
                break
            }
        }
        const a = p(r[0], i) ? r[1] : r[0];
        return n[a[0]] === o[a[0]] ? s = a[0] : n[a[1]] === o[a[1]] ? s = a[1] : s = "center", [i, s]
    }
    var Ll = {
        props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            method: String,
            mime: String,
            msgInvalidMime: String,
            msgInvalidName: String,
            msgInvalidSize: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String
        },
        data: {
            allow: !1,
            clsDragover: "bdt-dragover",
            concurrent: 1,
            maxSize: 0,
            method: "POST",
            mime: !1,
            msgInvalidMime: "Invalid File Type: %s",
            msgInvalidName: "Invalid File Name: %s",
            msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
            multiple: !1,
            name: "files[]",
            params: {},
            type: "",
            url: "",
            abort: C,
            beforeAll: C,
            beforeSend: C,
            complete: C,
            completeAll: C,
            error: C,
            fail: C,
            load: C,
            loadEnd: C,
            loadStart: C,
            progress: C
        },
        events: {
            change(t) {
                H(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "")
            },
            drop(t) {
                yi(t);
                const e = t.dataTransfer;
                e != null && e.files && (B(this.$el, this.clsDragover), this.upload(e.files))
            },
            dragenter(t) {
                yi(t)
            },
            dragover(t) {
                yi(t), x(this.$el, this.clsDragover)
            },
            dragleave(t) {
                yi(t), B(this.$el, this.clsDragover)
            }
        },
        methods: {
            async upload(t) {
                if (t = Si(t), !t.length) return;
                m(this.$el, "upload", [t]);
                for (const s of t) {
                    if (this.maxSize && this.maxSize * 1e3 < s.size) {
                        this.fail(this.msgInvalidSize.replace("%s", this.maxSize));
                        return
                    }
                    if (this.allow && !uo(this.allow, s.name)) {
                        this.fail(this.msgInvalidName.replace("%s", this.allow));
                        return
                    }
                    if (this.mime && !uo(this.mime, s.type)) {
                        this.fail(this.msgInvalidMime.replace("%s", this.mime));
                        return
                    }
                }
                this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
                const e = Wl(t, this.concurrent),
                    i = async s => {
                        const n = new FormData;
                        s.forEach(o => n.append(this.name, o));
                        for (const o in this.params) n.append(o, this.params[o]);
                        try {
                            const o = await ys(this.url, {
                                data: n,
                                method: this.method,
                                responseType: this.type,
                                beforeSend: r => {
                                    const {
                                        xhr: a
                                    } = r;
                                    a.upload && S(a.upload, "progress", this.progress);
                                    for (const l of ["loadStart", "load", "loadEnd", "abort"]) S(a, l.toLowerCase(), this[l]);
                                    return this.beforeSend(r)
                                }
                            });
                            this.complete(o), e.length ? await i(e.shift()) : this.completeAll(o)
                        } catch (o) {
                            this.error(o)
                        }
                    };
                await i(e.shift())
            }
        }
    };

    function uo(t, e) {
        return e.match(new RegExp(`^${t.replace(/\//g,"\\/").replace(/\*\*/g,"(\\/[^\\/]+)*").replace(/\*/g,"[^\\/]+").replace(/((?!\\))\?/g,"$1.")}$`, "i"))
    }

    function Wl(t, e) {
        const i = [];
        for (let s = 0; s < t.length; s += e) i.push(t.slice(s, s + e));
        return i
    }

    function yi(t) {
        t.preventDefault(), t.stopPropagation()
    }
    var Rl = Object.freeze({
        __proto__: null,
        Countdown: qa,
        Filter: Za,
        Lightbox: ul,
        LightboxPanel: Yn,
        Notification: fl,
        Parallax: xl,
        Slider: Tl,
        SliderParallax: ro,
        Slideshow: Pl,
        SlideshowParallax: ro,
        Sortable: El,
        Tooltip: Nl,
        Upload: Ll
    });
    return xt(Rl, (t, e) => U.component(e, t)), U
});