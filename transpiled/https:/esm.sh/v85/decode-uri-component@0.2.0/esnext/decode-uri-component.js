/* esm.sh - esbuild bundle(decode-uri-component@0.2.0) esnext production */
var p = Object.create;
var F = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var x = Object.getOwnPropertyNames;
var C = Object.getPrototypeOf,
    E = Object.prototype.hasOwnProperty;

var c = (r, e) => F(r, "name", {
  value: e,
  configurable: !0
});

var w = (r, e) => () => (e || r((e = {
  exports: {}
}).exports, e), e.exports);

var D = (r, e, t, o) => {
  if (e && typeof e == "object" || typeof e == "function") for (let a of x(e)) !E.call(r, a) && a !== t && F(r, a, {
    get: () => e[a],
    enumerable: !(o = i(e, a)) || o.enumerable
  });
  return r;
};

var u = (r, e, t) => (t = r != null ? p(C(r)) : {}, D(e || !r || !r.__esModule ? F(t, "default", {
  value: r,
  enumerable: !0
}) : t, r));

var g = w((I, d) => {
  "use strict";

  var m = "%[a-f0-9]{2}",
      l = new RegExp(m, "gi"),
      v = new RegExp("(" + m + ")+", "gi");

  function f(r, e) {
    try {
      return decodeURIComponent(r.join(""));
    } catch {}

    if (r.length === 1) return r;
    e = e || 1;
    var t = r.slice(0, e),
        o = r.slice(e);
    return Array.prototype.concat.call([], f(t), f(o));
  }

  c(f, "decodeComponents");

  function s(r) {
    try {
      return decodeURIComponent(r);
    } catch {
      for (var e = r.match(l), t = 1; t < e.length; t++) r = f(e, t).join(""), e = r.match(l);

      return r;
    }
  }

  c(s, "decode");

  function R(r) {
    for (var e = {
      "%FE%FF": "\uFFFD\uFFFD",
      "%FF%FE": "\uFFFD\uFFFD"
    }, t = v.exec(r); t;) {
      try {
        e[t[0]] = decodeURIComponent(t[0]);
      } catch {
        var o = s(t[0]);
        o !== t[0] && (e[t[0]] = o);
      }

      t = v.exec(r);
    }

    e["%C2"] = "\uFFFD";

    for (var a = Object.keys(e), n = 0; n < a.length; n++) {
      var h = a[n];
      r = r.replace(new RegExp(h, "g"), e[h]);
    }

    return r;
  }

  c(R, "customDecodeURIComponent");

  d.exports = function (r) {
    if (typeof r != "string") throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof r + "`");

    try {
      return r = r.replace(/\+/g, " "), decodeURIComponent(r);
    } catch {
      return R(r);
    }
  };
});
var y = u(g()),
    $ = u(g()),
    {
  default: j,
  ...M
} = $,
    O = y.default ?? j ?? M;
export { O as default };