/* esm.sh - esbuild bundle(supports-color@5.5.0) esnext production */
var _ = Object.create;
var o = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var c = Object.getPrototypeOf,
    i = Object.prototype.hasOwnProperty;

var m = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var x = (e, t, s, d) => {
  if (t && typeof t == "object" || typeof t == "function") for (let r of p(t)) !i.call(e, r) && r !== s && o(e, r, {
    get: () => t[r],
    enumerable: !(d = n(t, r)) || d.enumerable
  });
  return e;
};

var b = (e, t, s) => (s = e != null ? _(c(e)) : {}, x(t || !e || !e.__esModule ? o(s, "default", {
  value: e,
  enumerable: !0
}) : s, e));

var f = m((j, u) => {
  "use strict";

  u.exports = {
    stdout: !1,
    stderr: !1
  };
});
var l = b(f()),
    {
  stdout: k,
  stderr: q
} = l,
    {
  default: a,
  ...g
} = l,
    v = a !== void 0 ? a : g;
export { v as default, q as stderr, k as stdout };