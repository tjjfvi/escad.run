/* esm.sh - esbuild bundle(concat-map@0.0.1) deno production */
var s = Object.create;
var f = Object.defineProperty;
var c = Object.getOwnPropertyDescriptor;
var y = Object.getOwnPropertyNames;
var d = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty;
var m = r => f(r, "__esModule", { value: !0 });
var v = (r, t) => () => (t || r((t = { exports: {} }).exports, t), t.exports);
var A = (r, t, a, o) => { if (t && typeof t == "object" || typeof t == "function")
    for (let e of y(t))
        !i.call(r, e) && (a || e !== "default") && f(r, e, { get: () => t[e], enumerable: !(o = c(t, e)) || o.enumerable }); return r; }, u = (r, t) => A(m(f(r != null ? s(d(r)) : {}, "default", !t && r && r.__esModule ? { get: () => r.default, enumerable: !0 } : { value: r, enumerable: !0 })), r);
var p = v((O, l) => { l.exports = function (r, t) { for (var a = [], o = 0; o < r.length; o++) {
    var e = t(r[o], o);
    $(e) ? a.push.apply(a, e) : a.push(e);
} return a; }; var $ = Array.isArray || function (r) { return Object.prototype.toString.call(r) === "[object Array]"; }; });
var n = u(p()), h = u(p()), { default: b, ...g } = h, S = n.default ?? b ?? g;
export { S as default };
