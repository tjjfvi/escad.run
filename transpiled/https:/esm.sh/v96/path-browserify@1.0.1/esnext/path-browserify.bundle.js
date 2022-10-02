/* esm.sh - esbuild bundle(path-browserify@1.0.1) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v96/node_process.js";
var _ = Object.create;
var A = Object.defineProperty;
var S = Object.getOwnPropertyDescriptor;
var L = Object.getOwnPropertyNames;
var P = Object.getPrototypeOf,
    z = Object.prototype.hasOwnProperty;

var D = (f, e) => () => (e || f((e = {
  exports: {}
}).exports, e), e.exports);

var T = (f, e, r, l) => {
  if (e && typeof e == "object" || typeof e == "function") for (let i of L(e)) !z.call(f, i) && i !== r && A(f, i, {
    get: () => e[i],
    enumerable: !(l = S(e, i)) || l.enumerable
  });
  return f;
};

var R = (f, e, r) => (r = f != null ? _(P(f)) : {}, T(e || !f || !f.__esModule ? A(r, "default", {
  value: f,
  enumerable: !0
}) : r, f));

var h = D((q, C) => {
  "use strict";

  function c(f) {
    if (typeof f != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(f));
  }

  function b(f, e) {
    for (var r = "", l = 0, i = -1, s = 0, n, t = 0; t <= f.length; ++t) {
      if (t < f.length) n = f.charCodeAt(t);else {
        if (n === 47) break;
        n = 47;
      }

      if (n === 47) {
        if (!(i === t - 1 || s === 1)) if (i !== t - 1 && s === 2) {
          if (r.length < 2 || l !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
            if (r.length > 2) {
              var a = r.lastIndexOf("/");

              if (a !== r.length - 1) {
                a === -1 ? (r = "", l = 0) : (r = r.slice(0, a), l = r.length - 1 - r.lastIndexOf("/")), i = t, s = 0;
                continue;
              }
            } else if (r.length === 2 || r.length === 1) {
              r = "", l = 0, i = t, s = 0;
              continue;
            }
          }

          e && (r.length > 0 ? r += "/.." : r = "..", l = 2);
        } else r.length > 0 ? r += "/" + f.slice(i + 1, t) : r = f.slice(i + 1, t), l = t - i - 1;
        i = t, s = 0;
      } else n === 46 && s !== -1 ? ++s : s = -1;
    }

    return r;
  }

  function E(f, e) {
    var r = e.dir || e.root,
        l = e.base || (e.name || "") + (e.ext || "");
    return r ? r === e.root ? r + l : r + f + l : l;
  }

  var d = {
    resolve: function () {
      for (var e = "", r = !1, l, i = arguments.length - 1; i >= -1 && !r; i--) {
        var s;
        i >= 0 ? s = arguments[i] : (l === void 0 && (l = __Process$.cwd()), s = l), c(s), s.length !== 0 && (e = s + "/" + e, r = s.charCodeAt(0) === 47);
      }

      return e = b(e, !r), r ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
    },
    normalize: function (e) {
      if (c(e), e.length === 0) return ".";
      var r = e.charCodeAt(0) === 47,
          l = e.charCodeAt(e.length - 1) === 47;
      return e = b(e, !r), e.length === 0 && !r && (e = "."), e.length > 0 && l && (e += "/"), r ? "/" + e : e;
    },
    isAbsolute: function (e) {
      return c(e), e.length > 0 && e.charCodeAt(0) === 47;
    },
    join: function () {
      if (arguments.length === 0) return ".";

      for (var e, r = 0; r < arguments.length; ++r) {
        var l = arguments[r];
        c(l), l.length > 0 && (e === void 0 ? e = l : e += "/" + l);
      }

      return e === void 0 ? "." : d.normalize(e);
    },
    relative: function (e, r) {
      if (c(e), c(r), e === r || (e = d.resolve(e), r = d.resolve(r), e === r)) return "";

      for (var l = 1; l < e.length && e.charCodeAt(l) === 47; ++l);

      for (var i = e.length, s = i - l, n = 1; n < r.length && r.charCodeAt(n) === 47; ++n);

      for (var t = r.length, a = t - n, v = s < a ? s : a, u = -1, o = 0; o <= v; ++o) {
        if (o === v) {
          if (a > v) {
            if (r.charCodeAt(n + o) === 47) return r.slice(n + o + 1);
            if (o === 0) return r.slice(n + o);
          } else s > v && (e.charCodeAt(l + o) === 47 ? u = o : o === 0 && (u = 0));

          break;
        }

        var m = e.charCodeAt(l + o),
            y = r.charCodeAt(n + o);
        if (m !== y) break;
        m === 47 && (u = o);
      }

      var g = "";

      for (o = l + u + 1; o <= i; ++o) (o === i || e.charCodeAt(o) === 47) && (g.length === 0 ? g += ".." : g += "/..");

      return g.length > 0 ? g + r.slice(n + u) : (n += u, r.charCodeAt(n) === 47 && ++n, r.slice(n));
    },
    _makeLong: function (e) {
      return e;
    },
    dirname: function (e) {
      if (c(e), e.length === 0) return ".";

      for (var r = e.charCodeAt(0), l = r === 47, i = -1, s = !0, n = e.length - 1; n >= 1; --n) if (r = e.charCodeAt(n), r === 47) {
        if (!s) {
          i = n;
          break;
        }
      } else s = !1;

      return i === -1 ? l ? "/" : "." : l && i === 1 ? "//" : e.slice(0, i);
    },
    basename: function (e, r) {
      if (r !== void 0 && typeof r != "string") throw new TypeError('"ext" argument must be a string');
      c(e);
      var l = 0,
          i = -1,
          s = !0,
          n;

      if (r !== void 0 && r.length > 0 && r.length <= e.length) {
        if (r.length === e.length && r === e) return "";
        var t = r.length - 1,
            a = -1;

        for (n = e.length - 1; n >= 0; --n) {
          var v = e.charCodeAt(n);

          if (v === 47) {
            if (!s) {
              l = n + 1;
              break;
            }
          } else a === -1 && (s = !1, a = n + 1), t >= 0 && (v === r.charCodeAt(t) ? --t === -1 && (i = n) : (t = -1, i = a));
        }

        return l === i ? i = a : i === -1 && (i = e.length), e.slice(l, i);
      } else {
        for (n = e.length - 1; n >= 0; --n) if (e.charCodeAt(n) === 47) {
          if (!s) {
            l = n + 1;
            break;
          }
        } else i === -1 && (s = !1, i = n + 1);

        return i === -1 ? "" : e.slice(l, i);
      }
    },
    extname: function (e) {
      c(e);

      for (var r = -1, l = 0, i = -1, s = !0, n = 0, t = e.length - 1; t >= 0; --t) {
        var a = e.charCodeAt(t);

        if (a === 47) {
          if (!s) {
            l = t + 1;
            break;
          }

          continue;
        }

        i === -1 && (s = !1, i = t + 1), a === 46 ? r === -1 ? r = t : n !== 1 && (n = 1) : r !== -1 && (n = -1);
      }

      return r === -1 || i === -1 || n === 0 || n === 1 && r === i - 1 && r === l + 1 ? "" : e.slice(r, i);
    },
    format: function (e) {
      if (e === null || typeof e != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
      return E("/", e);
    },
    parse: function (e) {
      c(e);
      var r = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
      };
      if (e.length === 0) return r;
      var l = e.charCodeAt(0),
          i = l === 47,
          s;
      i ? (r.root = "/", s = 1) : s = 0;

      for (var n = -1, t = 0, a = -1, v = !0, u = e.length - 1, o = 0; u >= s; --u) {
        if (l = e.charCodeAt(u), l === 47) {
          if (!v) {
            t = u + 1;
            break;
          }

          continue;
        }

        a === -1 && (v = !1, a = u + 1), l === 46 ? n === -1 ? n = u : o !== 1 && (o = 1) : n !== -1 && (o = -1);
      }

      return n === -1 || a === -1 || o === 0 || o === 1 && n === a - 1 && n === t + 1 ? a !== -1 && (t === 0 && i ? r.base = r.name = e.slice(1, a) : r.base = r.name = e.slice(t, a)) : (t === 0 && i ? (r.name = e.slice(1, n), r.base = e.slice(1, a)) : (r.name = e.slice(t, n), r.base = e.slice(t, a)), r.ext = e.slice(n, a)), t > 0 ? r.dir = e.slice(0, t - 1) : i && (r.dir = "/"), r;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
  };
  d.posix = d;
  C.exports = d;
});
var w = R(h()),
    {
  resolve: B,
  normalize: F,
  isAbsolute: G,
  join: H,
  relative: K,
  _makeLong: M,
  dirname: Q,
  basename: U,
  extname: V,
  format: W,
  parse: X,
  sep: Y,
  delimiter: Z,
  win32: $,
  posix: j
} = w,
    {
  default: k,
  ...x
} = w,
    N = k !== void 0 ? k : x;
export { M as _makeLong, U as basename, N as default, Z as delimiter, Q as dirname, V as extname, W as format, G as isAbsolute, H as join, F as normalize, X as parse, j as posix, K as relative, B as resolve, Y as sep, $ as win32 };