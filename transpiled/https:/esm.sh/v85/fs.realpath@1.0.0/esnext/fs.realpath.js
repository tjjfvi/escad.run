/* esm.sh - esbuild bundle(fs.realpath@1.0.0) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v85/node_process.js";
import __path$ from "/transpiled/https://esm.sh/v85/path-browserify@1.0.1/esnext/path-browserify.bundle.js";
import __fs$ from "/transpiled/https://esm.sh/v85/node_fs.js";
var Z = Object.create;
var N = Object.defineProperty;
var F = Object.getOwnPropertyDescriptor;
var J = Object.getOwnPropertyNames;
var K = Object.getPrototypeOf,
    Q = Object.prototype.hasOwnProperty;

var a = (t, r) => N(t, "name", {
  value: r,
  configurable: !0
}),
    b = (t => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(t, {
  get: (r, n) => (typeof require != "undefined" ? require : r)[n]
}) : t)(function (t) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});

var B = (t, r) => () => (r || t((r = {
  exports: {}
}).exports, r), r.exports);

var V = (t, r, n, l) => {
  if (r && typeof r == "object" || typeof r == "function") for (let e of J(r)) !Q.call(t, e) && e !== n && N(t, e, {
    get: () => r[e],
    enumerable: !(l = F(r, e)) || l.enumerable
  });
  return t;
};

var C = (t, r, n) => (n = t != null ? Z(K(t)) : {}, V(r || !t || !t.__esModule ? N(n, "default", {
  value: t,
  enumerable: !0
}) : n, t));

var U = B(j => {
  var w = __path$,
      d = __Process$.platform === "win32",
      S = __fs$,
      X = __Process$.env.NODE_DEBUG && /fs/.test(__Process$.env.NODE_DEBUG);

  function Y() {
    var t;

    if (X) {
      var r = new Error();
      t = n;
    } else t = l;

    return t;

    function n(e) {
      e && (r.message = e.message, e = r, l(e));
    }

    function l(e) {
      if (e) {
        if (__Process$.throwDeprecation) throw e;

        if (!__Process$.noDeprecation) {
          var f = "fs: missing callback " + (e.stack || e.message);
          __Process$.traceDeprecation ? console.trace(f) : console.error(f);
        }
      }
    }
  }

  a(Y, "rethrow");

  function R(t) {
    return typeof t == "function" ? t : Y();
  }

  a(R, "maybeCallback");
  var ar = w.normalize;
  d ? p = /(.*?)(?:[\/\\]+|$)/g : p = /(.*?)(?:[\/]+|$)/g;
  var p;
  d ? h = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/ : h = /^[\/]*/;
  var h;
  j.realpathSync = a(function (r, n) {
    if (r = w.resolve(r), n && Object.prototype.hasOwnProperty.call(n, r)) return n[r];
    var l = r,
        e = {},
        f = {},
        u,
        v,
        i,
        o;
    k();

    function k() {
      var s = h.exec(r);
      u = s[0].length, v = s[0], i = s[0], o = "", d && !f[i] && (S.lstatSync(i), f[i] = !0);
    }

    for (a(k, "start"); u < r.length;) {
      p.lastIndex = u;
      var D = p.exec(r);

      if (o = v, v += D[0], i = o + D[1], u = p.lastIndex, !(f[i] || n && n[i] === i)) {
        var y;
        if (n && Object.prototype.hasOwnProperty.call(n, i)) y = n[i];else {
          var x = S.lstatSync(i);

          if (!x.isSymbolicLink()) {
            f[i] = !0, n && (n[i] = i);
            continue;
          }

          var m = null;

          if (!d) {
            var c = x.dev.toString(32) + ":" + x.ino.toString(32);
            e.hasOwnProperty(c) && (m = e[c]);
          }

          m === null && (S.statSync(i), m = S.readlinkSync(i)), y = w.resolve(o, m), n && (n[i] = y), d || (e[c] = m);
        }
        r = w.resolve(y, r.slice(u)), k();
      }
    }

    return n && (n[l] = r), r;
  }, "realpathSync");
  j.realpath = a(function (r, n, l) {
    if (typeof l != "function" && (l = R(n), n = null), r = w.resolve(r), n && Object.prototype.hasOwnProperty.call(n, r)) return __Process$.nextTick(l.bind(null, null, n[r]));
    var e = r,
        f = {},
        u = {},
        v,
        i,
        o,
        k;
    D();

    function D() {
      var s = h.exec(r);
      v = s[0].length, i = s[0], o = s[0], k = "", d && !u[o] ? S.lstat(o, function (O) {
        if (O) return l(O);
        u[o] = !0, y();
      }) : __Process$.nextTick(y);
    }

    a(D, "start");

    function y() {
      if (v >= r.length) return n && (n[e] = r), l(null, r);
      p.lastIndex = v;
      var s = p.exec(r);
      return k = i, i += s[0], o = k + s[1], v = p.lastIndex, u[o] || n && n[o] === o ? __Process$.nextTick(y) : n && Object.prototype.hasOwnProperty.call(n, o) ? c(n[o]) : S.lstat(o, x);
    }

    a(y, "LOOP");

    function x(s, O) {
      if (s) return l(s);
      if (!O.isSymbolicLink()) return u[o] = !0, n && (n[o] = o), __Process$.nextTick(y);

      if (!d) {
        var L = O.dev.toString(32) + ":" + O.ino.toString(32);
        if (f.hasOwnProperty(L)) return m(null, f[L], o);
      }

      S.stat(o, function ($) {
        if ($) return l($);
        S.readlink(o, function (W, z) {
          d || (f[L] = z), m(W, z);
        });
      });
    }

    a(x, "gotStat");

    function m(s, O, L) {
      if (s) return l(s);
      var $ = w.resolve(k, O);
      n && (n[L] = $), c($);
    }

    a(m, "gotTarget");

    function c(s) {
      r = w.resolve(s, r.slice(v)), D();
    }

    a(c, "gotResolvedLink");
  }, "realpath");
});
var M = B((fr, _) => {
  _.exports = g;
  g.realpath = g;
  g.sync = I;
  g.realpathSync = I;
  g.monkeypatch = nr;
  g.unmonkeypatch = tr;
  var E = __fs$,
      q = E.realpath,
      G = E.realpathSync,
      rr = __Process$.version,
      A = /^v[0-5]\./.test(rr),
      H = U();

  function T(t) {
    return t && t.syscall === "realpath" && (t.code === "ELOOP" || t.code === "ENOMEM" || t.code === "ENAMETOOLONG");
  }

  a(T, "newError");

  function g(t, r, n) {
    if (A) return q(t, r, n);
    typeof r == "function" && (n = r, r = null), q(t, r, function (l, e) {
      T(l) ? H.realpath(t, r, n) : n(l, e);
    });
  }

  a(g, "realpath");

  function I(t, r) {
    if (A) return G(t, r);

    try {
      return G(t, r);
    } catch (n) {
      if (T(n)) return H.realpathSync(t, r);
      throw n;
    }
  }

  a(I, "realpathSync");

  function nr() {
    E.realpath = g, E.realpathSync = I;
  }

  a(nr, "monkeypatch");

  function tr() {
    E.realpath = q, E.realpathSync = G;
  }

  a(tr, "unmonkeypatch");
});
var P = C(M()),
    er = C(M()),
    {
  default: or,
  ...ir
} = er,
    ur = P.default ?? or ?? ir;
export { ur as default };