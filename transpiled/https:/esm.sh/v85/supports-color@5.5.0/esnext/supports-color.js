/* esm.sh - esbuild bundle(supports-color@5.5.0) esnext production */
var p = Object.create;
var f = Object.defineProperty;
var $ = Object.getOwnPropertyDescriptor;
var c = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf,
    x = Object.prototype.hasOwnProperty;

var n = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var b = (e, t, r, d) => {
  if (t && typeof t == "object" || typeof t == "function") for (let s of c(t)) !x.call(e, s) && s !== r && f(e, s, {
    get: () => t[s],
    enumerable: !(d = $(t, s)) || d.enumerable
  });
  return e;
};

var u = (e, t, r) => (r = e != null ? p(i(e)) : {}, b(t || !e || !e.__esModule ? f(r, "default", {
  value: e,
  enumerable: !0
}) : r, e));

var o = n((k, a) => {
  "use strict";

  a.exports = {
    stdout: !1,
    stderr: !1
  };
});
var l = u(o()),
    m = u(o()),
    {
  stdout: q,
  stderr: v
} = m,
    {
  default: g,
  ...h
} = m,
    w = l.default ?? g ?? h;
export { w as default, v as stderr, q as stdout };