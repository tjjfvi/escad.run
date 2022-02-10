/* esm.sh - esbuild bundle(wrappy@1.0.2) deno production */
var h = Object.create;
var u = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var d = Object.getOwnPropertyNames;
var g = Object.getPrototypeOf, w = Object.prototype.hasOwnProperty;
var v = r => u(r, "__esModule", { value: !0 });
var $ = (r, t) => () => (t || r((t = { exports: {} }).exports, t), t.exports);
var E = (r, t, n, e) => { if (t && typeof t == "object" || typeof t == "function")
    for (let o of d(t))
        !w.call(r, o) && (n || o !== "default") && u(r, o, { get: () => t[o], enumerable: !(e = m(t, o)) || e.enumerable }); return r; }, i = (r, t) => E(v(u(r != null ? h(g(r)) : {}, "default", !t && r && r.__esModule ? { get: () => r.default, enumerable: !0 } : { value: r, enumerable: !0 })), r);
var p = $((A, l) => { l.exports = s; function s(r, t) { if (r && t)
    return s(r)(t); if (typeof r != "function")
    throw new TypeError("need wrapper function"); return Object.keys(r).forEach(function (e) { n[e] = r[e]; }), n; function n() { for (var e = new Array(arguments.length), o = 0; o < e.length; o++)
    e[o] = arguments[o]; var a = r.apply(this, e), f = e[e.length - 1]; return typeof a == "function" && a !== f && Object.keys(f).forEach(function (c) { a[c] = f[c]; }), a; } } });
var y = i(p()), b = i(p()), { default: j, ...x } = b, T = y.default ?? j ?? x;
export { T as default };
