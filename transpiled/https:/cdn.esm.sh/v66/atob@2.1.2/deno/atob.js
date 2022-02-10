/* esm.sh - esbuild bundle(atob@2.1.2) deno production */
import { Buffer as __Buffer$ } from "/transpiled/https://deno.land/std@0.125.0/node/buffer.js";
var y = Object.create;
var u = Object.defineProperty;
var d = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var m = Object.getPrototypeOf, j = Object.prototype.hasOwnProperty;
var w = r => u(r, "__esModule", { value: !0 });
var B = (r, t) => () => (t || r((t = { exports: {} }).exports, t), t.exports);
var g = (r, t, f, e) => { if (t && typeof t == "object" || typeof t == "function")
    for (let o of l(t))
        !j.call(r, o) && (f || o !== "default") && u(r, o, { get: () => t[o], enumerable: !(e = d(t, o)) || e.enumerable }); return r; }, b = (r, t) => g(w(u(r != null ? y(m(r)) : {}, "default", !t && r && r.__esModule ? { get: () => r.default, enumerable: !0 } : { value: r, enumerable: !0 })), r);
var a = B((k, n) => { (function (r) {
    "use strict";
    function t(e) { return typeof e == "function" ? e : typeof __Buffer$ == "function" ? function (i) { return new __Buffer$(i, "base64").toString("binary"); } : typeof r.base64js == "object" ? function (i) { var c = r.base64js.b64ToByteArray(i); return Array.prototype.map.call(c, function (p) { return String.fromCharCode(p); }).join(""); } : function () { throw new Error("You're probably in an old browser or an iOS webworker. It might help to include beatgammit's base64-js."); }; }
    var f = t(r.atob);
    r.atob = f, typeof n == "object" && n && n.exports && (n.exports = f);
})(window); });
var s = b(a()), h = b(a()), { default: S, ...$ } = h, A = s.default ?? S ?? $;
export { A as default };
//!! Deliberately using an API that's deprecated in node.js because
//!! Discussion: github.com/node-browser-compat/atob/pull/9
//!! this file is for browsers and we expect them to cope with it.
