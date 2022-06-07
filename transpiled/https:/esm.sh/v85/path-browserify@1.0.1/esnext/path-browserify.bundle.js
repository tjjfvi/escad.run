/* esm.sh - esbuild bundle(path-browserify@1.0.1) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v85/node_process.js";
var P = Object.create;
var A = Object.defineProperty;
var z = Object.getOwnPropertyDescriptor;
var D = Object.getOwnPropertyNames;
var T = Object.getPrototypeOf,
    _ = Object.prototype.hasOwnProperty;

var u = (l, e) => A(l, "name", {
  value: e,
  configurable: !0
});

var $ = (l, e) => () => (e || l((e = {
  exports: {}
}).exports, e), e.exports);

var R = (l, e, r, t) => {
  if (e && typeof e == "object" || typeof e == "function") for (let i of D(e)) !_.call(l, i) && i !== r && A(l, i, {
    get: () => e[i],
    enumerable: !(t = z(e, i)) || t.enumerable
  });
  return l;
};

var h = (l, e, r) => (r = l != null ? P(T(l)) : {}, R(e || !l || !l.__esModule ? A(r, "default", {
  value: l,
  enumerable: !0
}) : r, l));

var b = $((B, w) => {
  "use strict";

  function g(l) {
    if (typeof l != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(l));
  }

  u(g, "assertPath");

  function k(l, e) {
    for (var r = "", t = 0, i = -1, s = 0, n, f = 0; f <= l.length; ++f) {
      if (f < l.length) n = l.charCodeAt(f);else {
        if (n === 47) break;
        n = 47;
      }

      if (n === 47) {
        if (!(i === f - 1 || s === 1)) if (i !== f - 1 && s === 2) {
          if (r.length < 2 || t !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
            if (r.length > 2) {
              var a = r.lastIndexOf("/");

              if (a !== r.length - 1) {
                a === -1 ? (r = "", t = 0) : (r = r.slice(0, a), t = r.length - 1 - r.lastIndexOf("/")), i = f, s = 0;
                continue;
              }
            } else if (r.length === 2 || r.length === 1) {
              r = "", t = 0, i = f, s = 0;
              continue;
            }
          }

          e && (r.length > 0 ? r += "/.." : r = "..", t = 2);
        } else r.length > 0 ? r += "/" + l.slice(i + 1, f) : r = l.slice(i + 1, f), t = f - i - 1;
        i = f, s = 0;
      } else n === 46 && s !== -1 ? ++s : s = -1;
    }

    return r;
  }

  u(k, "normalizeStringPosix");

  function E(l, e) {
    var r = e.dir || e.root,
        t = e.base || (e.name || "") + (e.ext || "");
    return r ? r === e.root ? r + t : r + l + t : t;
  }

  u(E, "_format");
  var d = {
    resolve: u(function () {
      for (var e = "", r = !1, t, i = arguments.length - 1; i >= -1 && !r; i--) {
        var s;
        i >= 0 ? s = arguments[i] : (t === void 0 && (t = __Process$.cwd()), s = t), g(s), s.length !== 0 && (e = s + "/" + e, r = s.charCodeAt(0) === 47);
      }

      return e = k(e, !r), r ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
    }, "resolve"),
    normalize: u(function (e) {
      if (g(e), e.length === 0) return ".";
      var r = e.charCodeAt(0) === 47,
          t = e.charCodeAt(e.length - 1) === 47;
      return e = k(e, !r), e.length === 0 && !r && (e = "."), e.length > 0 && t && (e += "/"), r ? "/" + e : e;
    }, "normalize"),
    isAbsolute: u(function (e) {
      return g(e), e.length > 0 && e.charCodeAt(0) === 47;
    }, "isAbsolute"),
    join: u(function () {
      if (arguments.length === 0) return ".";

      for (var e, r = 0; r < arguments.length; ++r) {
        var t = arguments[r];
        g(t), t.length > 0 && (e === void 0 ? e = t : e += "/" + t);
      }

      return e === void 0 ? "." : d.normalize(e);
    }, "join"),
    relative: u(function (e, r) {
      if (g(e), g(r), e === r || (e = d.resolve(e), r = d.resolve(r), e === r)) return "";

      for (var t = 1; t < e.length && e.charCodeAt(t) === 47; ++t);

      for (var i = e.length, s = i - t, n = 1; n < r.length && r.charCodeAt(n) === 47; ++n);

      for (var f = r.length, a = f - n, c = s < a ? s : a, v = -1, o = 0; o <= c; ++o) {
        if (o === c) {
          if (a > c) {
            if (r.charCodeAt(n + o) === 47) return r.slice(n + o + 1);
            if (o === 0) return r.slice(n + o);
          } else s > c && (e.charCodeAt(t + o) === 47 ? v = o : o === 0 && (v = 0));

          break;
        }

        var C = e.charCodeAt(t + o),
            L = r.charCodeAt(n + o);
        if (C !== L) break;
        C === 47 && (v = o);
      }

      var m = "";

      for (o = t + v + 1; o <= i; ++o) (o === i || e.charCodeAt(o) === 47) && (m.length === 0 ? m += ".." : m += "/..");

      return m.length > 0 ? m + r.slice(n + v) : (n += v, r.charCodeAt(n) === 47 && ++n, r.slice(n));
    }, "relative"),
    _makeLong: u(function (e) {
      return e;
    }, "_makeLong"),
    dirname: u(function (e) {
      if (g(e), e.length === 0) return ".";

      for (var r = e.charCodeAt(0), t = r === 47, i = -1, s = !0, n = e.length - 1; n >= 1; --n) if (r = e.charCodeAt(n), r === 47) {
        if (!s) {
          i = n;
          break;
        }
      } else s = !1;

      return i === -1 ? t ? "/" : "." : t && i === 1 ? "//" : e.slice(0, i);
    }, "dirname"),
    basename: u(function (e, r) {
      if (r !== void 0 && typeof r != "string") throw new TypeError('"ext" argument must be a string');
      g(e);
      var t = 0,
          i = -1,
          s = !0,
          n;

      if (r !== void 0 && r.length > 0 && r.length <= e.length) {
        if (r.length === e.length && r === e) return "";
        var f = r.length - 1,
            a = -1;

        for (n = e.length - 1; n >= 0; --n) {
          var c = e.charCodeAt(n);

          if (c === 47) {
            if (!s) {
              t = n + 1;
              break;
            }
          } else a === -1 && (s = !1, a = n + 1), f >= 0 && (c === r.charCodeAt(f) ? --f === -1 && (i = n) : (f = -1, i = a));
        }

        return t === i ? i = a : i === -1 && (i = e.length), e.slice(t, i);
      } else {
        for (n = e.length - 1; n >= 0; --n) if (e.charCodeAt(n) === 47) {
          if (!s) {
            t = n + 1;
            break;
          }
        } else i === -1 && (s = !1, i = n + 1);

        return i === -1 ? "" : e.slice(t, i);
      }
    }, "basename"),
    extname: u(function (e) {
      g(e);

      for (var r = -1, t = 0, i = -1, s = !0, n = 0, f = e.length - 1; f >= 0; --f) {
        var a = e.charCodeAt(f);

        if (a === 47) {
          if (!s) {
            t = f + 1;
            break;
          }

          continue;
        }

        i === -1 && (s = !1, i = f + 1), a === 46 ? r === -1 ? r = f : n !== 1 && (n = 1) : r !== -1 && (n = -1);
      }

      return r === -1 || i === -1 || n === 0 || n === 1 && r === i - 1 && r === t + 1 ? "" : e.slice(r, i);
    }, "extname"),
    format: u(function (e) {
      if (e === null || typeof e != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
      return E("/", e);
    }, "format"),
    parse: u(function (e) {
      g(e);
      var r = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
      };
      if (e.length === 0) return r;
      var t = e.charCodeAt(0),
          i = t === 47,
          s;
      i ? (r.root = "/", s = 1) : s = 0;

      for (var n = -1, f = 0, a = -1, c = !0, v = e.length - 1, o = 0; v >= s; --v) {
        if (t = e.charCodeAt(v), t === 47) {
          if (!c) {
            f = v + 1;
            break;
          }

          continue;
        }

        a === -1 && (c = !1, a = v + 1), t === 46 ? n === -1 ? n = v : o !== 1 && (o = 1) : n !== -1 && (o = -1);
      }

      return n === -1 || a === -1 || o === 0 || o === 1 && n === a - 1 && n === f + 1 ? a !== -1 && (f === 0 && i ? r.base = r.name = e.slice(1, a) : r.base = r.name = e.slice(f, a)) : (f === 0 && i ? (r.name = e.slice(1, n), r.base = e.slice(1, a)) : (r.name = e.slice(f, n), r.base = e.slice(f, a)), r.ext = e.slice(n, a)), f > 0 ? r.dir = e.slice(0, f - 1) : i && (r.dir = "/"), r;
    }, "parse"),
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
  };
  d.posix = d;
  w.exports = d;
});
var y = h(b()),
    S = h(b()),
    {
  resolve: F,
  normalize: G,
  isAbsolute: H,
  join: K,
  relative: M,
  _makeLong: Q,
  dirname: U,
  basename: V,
  extname: W,
  format: X,
  parse: Y,
  sep: Z,
  delimiter: j,
  win32: N,
  posix: I
} = S,
    {
  default: x,
  ...J
} = S,
    O = y.default ?? x ?? J;
export { Q as _makeLong, V as basename, O as default, j as delimiter, U as dirname, W as extname, X as format, H as isAbsolute, K as join, G as normalize, Y as parse, I as posix, M as relative, F as resolve, Z as sep, N as win32 };