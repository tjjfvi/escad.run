/* esm.sh - esbuild bundle(inflight@1.0.6) deno production */
import __Process$ from "/transpiled/https://deno.land/std@0.122.0/node/process.js";
__Process$.env.NODE_ENV = "production";
import __once$ from "/transpiled/https://cdn.esm.sh/v64/once@1.4.0/deno/once.js";
import __wrappy$ from "/transpiled/https://cdn.esm.sh/v64/wrappy@1.0.2/deno/wrappy.js";
var v = Object.create;
var f = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var d = Object.getOwnPropertyNames;
var g = Object.getPrototypeOf, h = Object.prototype.hasOwnProperty;
var $ = r => f(r, "__esModule", { value: !0 });
var s = (r => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(r, { get: (e, n) => (typeof require != "undefined" ? require : e)[n] }) : r)(function (r) { if (typeof require != "undefined")
    return require.apply(this, arguments); throw new Error('Dynamic require of "' + r + '" is not supported'); });
var q = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var x = (r, e, n, t) => { if (e && typeof e == "object" || typeof e == "function")
    for (let l of d(e))
        !h.call(r, l) && (n || l !== "default") && f(r, l, { get: () => e[l], enumerable: !(t = m(e, l)) || t.enumerable }); return r; }, c = (r, e) => x($(f(r != null ? v(g(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: !0 } : { value: r, enumerable: !0 })), r);
var o = q((z, p) => { var y = __wrappy$, a = Object.create(null), b = __once$; p.exports = y(j); function j(r, e) { return a[r] ? (a[r].push(e), null) : (a[r] = [e], w(r)); } function w(r) { return b(function e() { var n = a[r], t = n.length, l = E(arguments); try {
    for (var u = 0; u < t; u++)
        n[u].apply(null, l);
}
finally {
    n.length > t ? (n.splice(0, t), __Process$.nextTick(function () { e.apply(null, l); })) : delete a[r];
} }); } function E(r) { for (var e = r.length, n = [], t = 0; t < e; t++)
    n[t] = r[t]; return n; } });
var i = c(o()), O = c(o()), { default: R, ...S } = O, A = i.default ?? R ?? S;
export { A as default };
