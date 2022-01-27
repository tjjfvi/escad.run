/* esm.sh - esbuild bundle(once@1.4.0) deno production */
import __wrappy$ from "/transpiled/https://cdn.esm.sh/v64/wrappy@1.0.2/deno/wrappy.js";
var m = Object.create;
var u = Object.defineProperty;
var v = Object.getOwnPropertyDescriptor;
var h = Object.getOwnPropertyNames;
var y = Object.getPrototypeOf, b = Object.prototype.hasOwnProperty;
var w = r => u(r, "__esModule", { value: !0 });
var g = (r => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(r, { get: (e, t) => (typeof require != "undefined" ? require : e)[t] }) : r)(function (r) { if (typeof require != "undefined")
    return require.apply(this, arguments); throw new Error('Dynamic require of "' + r + '" is not supported'); });
var x = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var $ = (r, e, t, l) => { if (e && typeof e == "object" || typeof e == "function")
    for (let n of h(e))
        !b.call(r, n) && (t || n !== "default") && u(r, n, { get: () => e[n], enumerable: !(l = v(e, n)) || l.enumerable }); return r; }, i = (r, e) => $(w(u(r != null ? m(y(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: !0 } : { value: r, enumerable: !0 })), r);
var a = x((O, c) => { var f = __wrappy$; c.exports = f(o); c.exports.strict = f(p); o.proto = o(function () { Object.defineProperty(Function.prototype, "once", { value: function () { return o(this); }, configurable: !0 }), Object.defineProperty(Function.prototype, "onceStrict", { value: function () { return p(this); }, configurable: !0 }); }); function o(r) { var e = function () { return e.called ? e.value : (e.called = !0, e.value = r.apply(this, arguments)); }; return e.called = !1, e; } function p(r) { var e = function () { if (e.called)
    throw new Error(e.onceError); return e.called = !0, e.value = r.apply(this, arguments); }, t = r.name || "Function wrapped with `once`"; return e.onceError = t + " shouldn't be called more than once", e.called = !1, e; } });
var s = i(a()), d = i(a()), { strict: P } = d, { default: E, ...F } = d, S = s.default ?? E ?? F;
export { S as default, P as strict };
