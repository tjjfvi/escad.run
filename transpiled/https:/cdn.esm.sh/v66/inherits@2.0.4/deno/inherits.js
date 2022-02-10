/* esm.sh - esbuild bundle(inherits@2.0.4) deno production */
var l = Object.create;
var r = Object.defineProperty;
var c = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var y = Object.getPrototypeOf, b = Object.prototype.hasOwnProperty;
var d = t => r(t, "__esModule", { value: !0 });
var m = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var $ = (t, e, o, f) => { if (e && typeof e == "object" || typeof e == "function")
    for (let n of s(e))
        !b.call(t, n) && (o || n !== "default") && r(t, n, { get: () => e[n], enumerable: !(f = c(e, n)) || f.enumerable }); return t; }, u = (t, e) => $(d(r(t != null ? l(y(t)) : {}, "default", !e && t && t.__esModule ? { get: () => t.default, enumerable: !0 } : { value: t, enumerable: !0 })), t);
var p = m((w, i) => { typeof Object.create == "function" ? i.exports = function (e, o) { o && (e.super_ = o, e.prototype = Object.create(o.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })); } : i.exports = function (e, o) { if (o) {
    e.super_ = o;
    var f = function () { };
    f.prototype = o.prototype, e.prototype = new f, e.prototype.constructor = e;
} }; });
var a = u(p()), x = u(p()), { default: h, ...j } = x, O = a.default ?? h ?? j;
export { O as default };
