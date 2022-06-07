/* esm.sh - esbuild bundle(wrappy@1.0.2) esnext production */
var m = Object.create;
var u = Object.defineProperty;
var d = Object.getOwnPropertyDescriptor;
var g = Object.getOwnPropertyNames;
var w = Object.getPrototypeOf,
    v = Object.prototype.hasOwnProperty;

var p = (r, t) => u(r, "name", {
  value: t,
  configurable: !0
});

var $ = (r, t) => () => (t || r((t = {
  exports: {}
}).exports, t), t.exports);

var E = (r, t, n, e) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of g(t)) !v.call(r, o) && o !== n && u(r, o, {
    get: () => t[o],
    enumerable: !(e = d(t, o)) || e.enumerable
  });
  return r;
};

var s = (r, t, n) => (n = r != null ? m(w(r)) : {}, E(t || !r || !r.__esModule ? u(n, "default", {
  value: r,
  enumerable: !0
}) : n, r));

var c = $((A, y) => {
  y.exports = l;

  function l(r, t) {
    if (r && t) return l(r)(t);
    if (typeof r != "function") throw new TypeError("need wrapper function");
    return Object.keys(r).forEach(function (e) {
      n[e] = r[e];
    }), n;

    function n() {
      for (var e = new Array(arguments.length), o = 0; o < e.length; o++) e[o] = arguments[o];

      var a = r.apply(this, e),
          f = e[e.length - 1];
      return typeof a == "function" && a !== f && Object.keys(f).forEach(function (i) {
        a[i] = f[i];
      }), a;
    }

    p(n, "wrapper");
  }

  p(l, "wrappy");
});
var h = s(c()),
    b = s(c()),
    {
  default: j,
  ...x
} = b,
    T = h.default ?? j ?? x;
export { T as default };