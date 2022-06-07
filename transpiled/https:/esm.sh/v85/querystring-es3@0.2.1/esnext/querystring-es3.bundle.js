/* esm.sh - esbuild bundle(querystring-es3@0.2.1) esnext production */
var P = Object.create;
var O = Object.defineProperty;
var $ = Object.getOwnPropertyDescriptor;
var S = Object.getOwnPropertyNames;
var x = Object.getPrototypeOf,
    F = Object.prototype.hasOwnProperty;

var i = (e, r) => O(e, "name", {
  value: r,
  configurable: !0
});

var A = (e, r) => () => (r || e((r = {
  exports: {}
}).exports, r), r.exports);

var z = (e, r, t, o) => {
  if (r && typeof r == "object" || typeof r == "function") for (let n of S(r)) !F.call(e, n) && n !== t && O(e, n, {
    get: () => r[n],
    enumerable: !(o = $(r, n)) || o.enumerable
  });
  return e;
};

var v = (e, r, t) => (t = e != null ? P(x(e)) : {}, z(r || !e || !e.__esModule ? O(t, "default", {
  value: e,
  enumerable: !0
}) : t, e));

var I = A((M, C) => {
  "use strict";

  function B(e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }

  i(B, "hasOwnProperty");

  C.exports = function (e, r, t, o) {
    r = r || "&", t = t || "=";
    var n = {};
    if (typeof e != "string" || e.length === 0) return n;
    var p = /\+/g;
    e = e.split(r);
    var a = 1e3;
    o && typeof o.maxKeys == "number" && (a = o.maxKeys);
    var y = e.length;
    a > 0 && y > a && (y = a);

    for (var d = 0; d < y; ++d) {
      var s = e[d].replace(p, "%20"),
          m = s.indexOf(t),
          g,
          h,
          u,
          l;
      m >= 0 ? (g = s.substr(0, m), h = s.substr(m + 1)) : (g = s, h = ""), u = decodeURIComponent(g), l = decodeURIComponent(h), B(n, u) ? D(n[u]) ? n[u].push(l) : n[u] = [n[u], l] : n[u] = l;
    }

    return n;
  };

  var D = Array.isArray || function (e) {
    return Object.prototype.toString.call(e) === "[object Array]";
  };
});
var j = A((N, U) => {
  "use strict";

  var c = i(function (e) {
    switch (typeof e) {
      case "string":
        return e;

      case "boolean":
        return e ? "true" : "false";

      case "number":
        return isFinite(e) ? e : "";

      default:
        return "";
    }
  }, "stringifyPrimitive");

  U.exports = function (e, r, t, o) {
    return r = r || "&", t = t || "=", e === null && (e = void 0), typeof e == "object" ? R(G(e), function (n) {
      var p = encodeURIComponent(c(n)) + t;
      return E(e[n]) ? R(e[n], function (a) {
        return p + encodeURIComponent(c(a));
      }).join(r) : p + encodeURIComponent(c(e[n]));
    }).join(r) : o ? encodeURIComponent(c(o)) + t + encodeURIComponent(c(e)) : "";
  };

  var E = Array.isArray || function (e) {
    return Object.prototype.toString.call(e) === "[object Array]";
  };

  function R(e, r) {
    if (e.map) return e.map(r);

    for (var t = [], o = 0; o < e.length; o++) t.push(r(e[o], o));

    return t;
  }

  i(R, "map");

  var G = Object.keys || function (e) {
    var r = [];

    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.push(t);

    return r;
  };
});
var b = A(f => {
  "use strict";

  f.decode = f.parse = I();
  f.encode = f.stringify = j();
});
var w = v(b()),
    K = v(b()),
    {
  decode: T,
  encode: V
} = K,
    {
  default: H,
  ...J
} = K,
    W = w.default ?? H ?? J;
export { T as decode, W as default, V as encode };