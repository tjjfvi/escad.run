/* esm.sh - esbuild bundle(punycode@1.3.2) esnext production */
var __global$ = globalThis || (typeof window !== "undefined" ? window : self);

var te = Object.create;
var O = Object.defineProperty;
var ie = Object.getOwnPropertyDescriptor;
var fe = Object.getOwnPropertyNames;
var ue = Object.getPrototypeOf,
    ae = Object.prototype.hasOwnProperty;

var d = (f, i) => O(f, "name", {
  value: i,
  configurable: !0
});

var ce = (f, i) => () => (i || f((i = {
  exports: {}
}).exports, i), i.exports);

var se = (f, i, g, b) => {
  if (i && typeof i == "object" || typeof i == "function") for (let s of fe(i)) !ae.call(f, s) && s !== g && O(f, s, {
    get: () => i[s],
    enumerable: !(b = ie(i, s)) || b.enumerable
  });
  return f;
};

var P = (f, i, g) => (g = f != null ? te(ue(f)) : {}, se(i || !f || !f.__esModule ? O(g, "default", {
  value: f,
  enumerable: !0
}) : g, f));

var $ = ce((M, A) => {
  (function (f) {
    var i = typeof M == "object" && M && !M.nodeType && M,
        g = typeof A == "object" && A && !A.nodeType && A,
        b = typeof __global$ == "object" && __global$;
    (b.global === b || b.window === b || b.self === b) && (f = b);
    var s,
        j = 2147483647,
        v = 36,
        E = 1,
        T = 26,
        W = 38,
        X = 700,
        B = 72,
        q = 128,
        N = "-",
        Y = /^xn--/,
        Z = /[^\x20-\x7E]/,
        _ = /[\x2E\u3002\uFF0E\uFF61]/g,
        ee = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    },
        S = v - E,
        C = Math.floor,
        k = String.fromCharCode,
        D;

    function y(e) {
      throw RangeError(ee[e]);
    }

    d(y, "error");

    function U(e, o) {
      for (var r = e.length, n = []; r--;) n[r] = o(e[r]);

      return n;
    }

    d(U, "map");

    function G(e, o) {
      var r = e.split("@"),
          n = "";
      r.length > 1 && (n = r[0] + "@", e = r[1]), e = e.replace(_, ".");
      var t = e.split("."),
          c = U(t, o).join(".");
      return n + c;
    }

    d(G, "mapDomain");

    function R(e) {
      for (var o = [], r = 0, n = e.length, t, c; r < n;) t = e.charCodeAt(r++), t >= 55296 && t <= 56319 && r < n ? (c = e.charCodeAt(r++), (c & 64512) == 56320 ? o.push(((t & 1023) << 10) + (c & 1023) + 65536) : (o.push(t), r--)) : o.push(t);

      return o;
    }

    d(R, "ucs2decode");

    function V(e) {
      return U(e, function (o) {
        var r = "";
        return o > 65535 && (o -= 65536, r += k(o >>> 10 & 1023 | 55296), o = 56320 | o & 1023), r += k(o), r;
      }).join("");
    }

    d(V, "ucs2encode");

    function oe(e) {
      return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : v;
    }

    d(oe, "basicToDigit");

    function z(e, o) {
      return e + 22 + 75 * (e < 26) - ((o != 0) << 5);
    }

    d(z, "digitToBasic");

    function H(e, o, r) {
      var n = 0;

      for (e = r ? C(e / X) : e >> 1, e += C(e / o); e > S * T >> 1; n += v) e = C(e / S);

      return C(n + (S + 1) * e / (e + W));
    }

    d(H, "adapt");

    function J(e) {
      var o = [],
          r = e.length,
          n,
          t = 0,
          c = q,
          u = B,
          l,
          h,
          F,
          w,
          a,
          p,
          x,
          m,
          I;

      for (l = e.lastIndexOf(N), l < 0 && (l = 0), h = 0; h < l; ++h) e.charCodeAt(h) >= 128 && y("not-basic"), o.push(e.charCodeAt(h));

      for (F = l > 0 ? l + 1 : 0; F < r;) {
        for (w = t, a = 1, p = v; F >= r && y("invalid-input"), x = oe(e.charCodeAt(F++)), (x >= v || x > C((j - t) / a)) && y("overflow"), t += x * a, m = p <= u ? E : p >= u + T ? T : p - u, !(x < m); p += v) I = v - m, a > C(j / I) && y("overflow"), a *= I;

        n = o.length + 1, u = H(t - w, n, w == 0), C(t / n) > j - c && y("overflow"), c += C(t / n), t %= n, o.splice(t++, 0, c);
      }

      return V(o);
    }

    d(J, "decode");

    function K(e) {
      var o,
          r,
          n,
          t,
          c,
          u,
          l,
          h,
          F,
          w,
          a,
          p = [],
          x,
          m,
          I,
          L;

      for (e = R(e), x = e.length, o = q, r = 0, c = B, u = 0; u < x; ++u) a = e[u], a < 128 && p.push(k(a));

      for (n = t = p.length, t && p.push(N); n < x;) {
        for (l = j, u = 0; u < x; ++u) a = e[u], a >= o && a < l && (l = a);

        for (m = n + 1, l - o > C((j - r) / m) && y("overflow"), r += (l - o) * m, o = l, u = 0; u < x; ++u) if (a = e[u], a < o && ++r > j && y("overflow"), a == o) {
          for (h = r, F = v; w = F <= c ? E : F >= c + T ? T : F - c, !(h < w); F += v) L = h - w, I = v - w, p.push(k(z(w + L % I, 0))), h = C(L / I);

          p.push(k(z(h, 0))), c = H(r, m, n == t), r = 0, ++n;
        }

        ++r, ++o;
      }

      return p.join("");
    }

    d(K, "encode");

    function re(e) {
      return G(e, function (o) {
        return Y.test(o) ? J(o.slice(4).toLowerCase()) : o;
      });
    }

    d(re, "toUnicode");

    function ne(e) {
      return G(e, function (o) {
        return Z.test(o) ? "xn--" + K(o) : o;
      });
    }

    if (d(ne, "toASCII"), s = {
      version: "1.3.2",
      ucs2: {
        decode: R,
        encode: V
      },
      decode: J,
      encode: K,
      toASCII: ne,
      toUnicode: re
    }, typeof define == "function" && typeof define.amd == "object" && define.amd) define("punycode", function () {
      return s;
    });else if (i && g) {
      if (A.exports == i) g.exports = s;else for (D in s) s.hasOwnProperty(D) && (i[D] = s[D]);
    } else f.punycode = s;
  })(M);
});
var Q = P($()),
    le = P($()),
    {
  default: de,
  ...pe
} = le,
    xe = Q.default ?? de ?? pe;
export { xe as default };
/*! https://mths.be/punycode v1.3.2 by @mathias */