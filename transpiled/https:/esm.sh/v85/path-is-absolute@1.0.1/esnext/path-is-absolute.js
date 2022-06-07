/* esm.sh - esbuild bundle(path-is-absolute@1.0.1) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v85/node_process.js";
var d = Object.create;
var n = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var v = Object.getOwnPropertyNames;
var $ = Object.getPrototypeOf,
    w = Object.prototype.hasOwnProperty;

var a = (e, r) => n(e, "name", {
  value: r,
  configurable: !0
});

var A = (e, r) => () => (r || e((r = {
  exports: {}
}).exports, r), r.exports);

var h = (e, r, t, s) => {
  if (r && typeof r == "object" || typeof r == "function") for (let o of v(r)) !w.call(e, o) && o !== t && n(e, o, {
    get: () => r[o],
    enumerable: !(s = m(r, o)) || s.enumerable
  });
  return e;
};

var c = (e, r, t) => (t = e != null ? d($(e)) : {}, h(r || !e || !e.__esModule ? n(t, "default", {
  value: e,
  enumerable: !0
}) : t, e));

var p = A((R, i) => {
  "use strict";

  function u(e) {
    return e.charAt(0) === "/";
  }

  a(u, "posix");

  function f(e) {
    var r = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,
        t = r.exec(e),
        s = t[1] || "",
        o = Boolean(s && s.charAt(1) !== ":");
    return Boolean(t[2] || o);
  }

  a(f, "win32");
  i.exports = __Process$.platform === "win32" ? f : u;
  i.exports.posix = u;
  i.exports.win32 = f;
});
var l = c(p()),
    x = c(p()),
    {
  posix: S,
  win32: U
} = x,
    {
  default: B,
  ...z
} = x,
    Z = l.default ?? B ?? z;
export { Z as default, S as posix, U as win32 };