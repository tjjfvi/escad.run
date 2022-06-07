/* esm.sh - esbuild bundle(balanced-match@1.0.2) esnext production */
var y = Object.create;
var p = Object.defineProperty;
var E = Object.getOwnPropertyDescriptor;
var R = Object.getOwnPropertyNames;
var w = Object.getPrototypeOf,
    M = Object.prototype.hasOwnProperty;

var c = (n, e) => p(n, "name", {
  value: e,
  configurable: !0
});

var b = (n, e) => () => (e || n((e = {
  exports: {}
}).exports, e), e.exports);

var j = (n, e, i, t) => {
  if (e && typeof e == "object" || typeof e == "function") for (let f of R(e)) !M.call(n, f) && f !== i && p(n, f, {
    get: () => e[f],
    enumerable: !(t = E(e, f)) || t.enumerable
  });
  return n;
};

var h = (n, e, i) => (i = n != null ? y(w(n)) : {}, j(e || !n || !n.__esModule ? p(i, "default", {
  value: n,
  enumerable: !0
}) : i, n));

var g = b((A, v) => {
  "use strict";

  v.exports = x;

  function x(n, e, i) {
    n instanceof RegExp && (n = s(n, i)), e instanceof RegExp && (e = s(e, i));
    var t = m(n, e, i);
    return t && {
      start: t[0],
      end: t[1],
      pre: i.slice(0, t[0]),
      body: i.slice(t[0] + n.length, t[1]),
      post: i.slice(t[1] + e.length)
    };
  }

  c(x, "balanced");

  function s(n, e) {
    var i = e.match(n);
    return i ? i[0] : null;
  }

  c(s, "maybeMatch");
  x.range = m;

  function m(n, e, i) {
    var t,
        f,
        a,
        d,
        u,
        r = i.indexOf(n),
        l = i.indexOf(e, r + 1),
        o = r;

    if (r >= 0 && l > 0) {
      if (n === e) return [r, l];

      for (t = [], a = i.length; o >= 0 && !u;) o == r ? (t.push(o), r = i.indexOf(n, o + 1)) : t.length == 1 ? u = [t.pop(), l] : (f = t.pop(), f < a && (a = f, d = l), l = i.indexOf(e, o + 1)), o = r < l && r >= 0 ? r : l;

      t.length && (u = [a, d]);
    }

    return u;
  }

  c(m, "range");
});
var O = h(g()),
    $ = h(g()),
    {
  range: B
} = $,
    {
  default: k,
  ...q
} = $,
    C = O.default ?? k ?? q;
export { C as default, B as range };