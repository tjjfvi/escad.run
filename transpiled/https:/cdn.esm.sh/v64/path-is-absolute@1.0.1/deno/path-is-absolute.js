/* esm.sh - esbuild bundle(path-is-absolute@1.0.1) deno production */
import __Process$ from "/transpiled/https://deno.land/std@0.122.0/node/process.js";
__Process$.env.NODE_ENV = "production";
var x = Object.create;
var n = Object.defineProperty;
var d = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var v = Object.getPrototypeOf, $ = Object.prototype.hasOwnProperty;
var w = e => n(e, "__esModule", { value: !0 });
var A = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var h = (e, r, s, o) => { if (r && typeof r == "object" || typeof r == "function")
    for (let t of m(r))
        !$.call(e, t) && (s || t !== "default") && n(e, t, { get: () => r[t], enumerable: !(o = d(r, t)) || o.enumerable }); return e; }, p = (e, r) => h(w(n(e != null ? x(v(e)) : {}, "default", !r && e && e.__esModule ? { get: () => e.default, enumerable: !0 } : { value: e, enumerable: !0 })), e);
var a = A((R, i) => {
    "use strict";
    function c(e) { return e.charAt(0) === "/"; }
    function u(e) { var r = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/, s = r.exec(e), o = s[1] || "", t = Boolean(o && o.charAt(1) !== ":"); return Boolean(s[2] || t); }
    i.exports = __Process$.platform === "win32" ? u : c;
    i.exports.posix = c;
    i.exports.win32 = u;
});
var f = p(a()), l = p(a()), { posix: S, win32: U } = l, { default: B, ...z } = l, Z = f.default ?? B ?? z;
export { Z as default, S as posix, U as win32 };
