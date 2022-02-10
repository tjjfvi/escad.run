/* esm.sh - esbuild bundle(balanced-match@1.0.2) deno production */
var $ = Object.create;
var c = Object.defineProperty;
var y = Object.getOwnPropertyDescriptor;
var E = Object.getOwnPropertyNames;
var R = Object.getPrototypeOf, w = Object.prototype.hasOwnProperty;
var M = e => c(e, "__esModule", { value: !0 });
var b = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var j = (e, n, i, t) => { if (n && typeof n == "object" || typeof n == "function")
    for (let f of E(n))
        !w.call(e, f) && (i || f !== "default") && c(e, f, { get: () => n[f], enumerable: !(t = y(n, f)) || t.enumerable }); return e; }, d = (e, n) => j(M(c(e != null ? $(R(e)) : {}, "default", !n && e && e.__esModule ? { get: () => e.default, enumerable: !0 } : { value: e, enumerable: !0 })), e);
var p = b((A, m) => {
    "use strict";
    m.exports = s;
    function s(e, n, i) { e instanceof RegExp && (e = h(e, i)), n instanceof RegExp && (n = h(n, i)); var t = x(e, n, i); return t && { start: t[0], end: t[1], pre: i.slice(0, t[0]), body: i.slice(t[0] + e.length, t[1]), post: i.slice(t[1] + n.length) }; }
    function h(e, n) { var i = n.match(e); return i ? i[0] : null; }
    s.range = x;
    function x(e, n, i) { var t, f, a, g, u, r = i.indexOf(e), l = i.indexOf(n, r + 1), o = r; if (r >= 0 && l > 0) {
        if (e === n)
            return [r, l];
        for (t = [], a = i.length; o >= 0 && !u;)
            o == r ? (t.push(o), r = i.indexOf(e, o + 1)) : t.length == 1 ? u = [t.pop(), l] : (f = t.pop(), f < a && (a = f, g = l), l = i.indexOf(n, o + 1)), o = r < l && r >= 0 ? r : l;
        t.length && (u = [a, g]);
    } return u; }
});
var v = d(p()), O = d(p()), { range: B } = O, { default: k, ...q } = O, C = v.default ?? k ?? q;
export { C as default, B as range };
