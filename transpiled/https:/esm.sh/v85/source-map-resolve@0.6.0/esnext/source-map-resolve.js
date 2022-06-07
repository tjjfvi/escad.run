/* esm.sh - esbuild bundle(source-map-resolve@0.6.0) esnext production */
var __setImmediate$ = (cb, ...args) => setTimeout(cb, 0, ...args);

import __atob$ from "/transpiled/https://esm.sh/v85/atob@2.1.2/esnext/atob.js";
import __decode_uri_component$ from "/transpiled/https://esm.sh/v85/decode-uri-component@0.2.0/esnext/decode-uri-component.js";
import __path$ from "/transpiled/https://esm.sh/v85/path-browserify@1.0.1/esnext/path-browserify.bundle.js";
import __url$ from "/transpiled/https://esm.sh/v85/url@0.11.0/esnext/url.bundle.js";
var E = Object.create;
var y = Object.defineProperty;
var x = Object.getOwnPropertyDescriptor;
var H = Object.getOwnPropertyNames;
var I = Object.getPrototypeOf,
    z = Object.prototype.hasOwnProperty;

var l = (e, o) => y(e, "name", {
  value: o,
  configurable: !0
}),
    g = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (o, n) => (typeof require != "undefined" ? require : o)[n]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var W = (e, o) => () => (o || e((o = {
  exports: {}
}).exports, o), o.exports);

var _ = (e, o, n, u) => {
  if (o && typeof o == "object" || typeof o == "function") for (let r of H(o)) !z.call(e, r) && r !== n && y(e, r, {
    get: () => o[r],
    enumerable: !(u = x(o, r)) || u.enumerable
  });
  return e;
};

var C = (e, o, n) => (n = e != null ? E(I(e)) : {}, _(o || !e || !e.__esModule ? y(n, "default", {
  value: e,
  enumerable: !0
}) : n, e));

var h = W((te, N) => {
  var d = __atob$,
      F = __url$,
      G = __path$,
      K = __decode_uri_component$;

  function M() {
    return Array.prototype.reduce.call(arguments, function (e, o) {
      return F.resolve(e, o);
    });
  }

  l(M, "resolveUrl");

  function L(e) {
    return G.sep === "\\" ? e.replace(/\\/g, "/").replace(/^[a-z]:\/?/i, "/") : e;
  }

  l(L, "convertWindowsPath");

  function S(e) {
    return K(e.replace(/\+/g, "%2B"));
  }

  l(S, "customDecodeUriComponent");

  function R(e, o, n) {
    __setImmediate$(function () {
      e(o, n);
    });
  }

  l(R, "callbackAsync");

  function p(e, o) {
    try {
      return JSON.parse(e.replace(/^\)\]\}'/, ""));
    } catch (n) {
      throw n.sourceMapData = o, n;
    }
  }

  l(p, "parseMapToJSON");

  function w(e, o, n) {
    var u = S(o);

    try {
      return String(e(u));
    } catch (r) {
      throw r.sourceMapData = n, r;
    }
  }

  l(w, "readSync");
  var T = /[#@] sourceMappingURL=([^\s'"]*)/,
      P = RegExp(`(?:/\\*(?:\\s*\r?
(?://)?)?(?:` + T.source + ")\\s*\\*/|//(?:" + T.source + "))\\s*");

  function Q(e) {
    var o = e.match(P);
    return o ? o[1] || o[2] || "" : null;
  }

  l(Q, "getSourceMappingUrl");

  function D(e, o, n, u) {
    var r;

    try {
      r = U(e, o);
    } catch (t) {
      return R(u, t);
    }

    if (!r || r.map) return R(u, null, r);
    var c = S(r.url);
    n(c, function (t, s) {
      if (t) return t.sourceMapData = r, u(t);
      r.map = String(s);

      try {
        r.map = p(r.map, r);
      } catch (i) {
        return u(i);
      }

      u(null, r);
    });
  }

  l(D, "resolveSourceMap");

  function $(e, o, n) {
    var u = U(e, o);
    return !u || u.map || (u.map = w(n, u.url, u), u.map = p(u.map, u)), u;
  }

  l($, "resolveSourceMapSync");
  var V = /^data:([^,;]*)(;[^,;]*)*(?:,(.*))?$/,
      X = /^(?:application|text)\/json$/,
      Y = "utf-8";

  function Z(e) {
    for (var o = d(e), n = o.length, u = new Uint8Array(n), r = 0; r < n; r++) u[r] = o.charCodeAt(r);

    return u;
  }

  l(Z, "base64ToBuf");

  function b(e) {
    if (typeof TextDecoder > "u" || typeof Uint8Array > "u") return d(e);
    var o = Z(e),
        n = new TextDecoder(Y, {
      fatal: !0
    });
    return n.decode(o);
  }

  l(b, "decodeBase64String");

  function U(e, o) {
    o = L(o);
    var n = Q(e);
    if (!n) return null;
    var u = n.match(V);

    if (u) {
      var r = u[1] || "text/plain",
          c = u[2] || "",
          t = u[3] || "",
          s = {
        sourceMappingURL: n,
        url: null,
        sourcesRelativeTo: o,
        map: t
      };

      if (!X.test(r)) {
        var i = new Error("Unuseful data uri mime type: " + r);
        throw i.sourceMapData = s, i;
      }

      try {
        s.map = p(c === ";base64" ? b(t) : decodeURIComponent(t), s);
      } catch (v) {
        throw v.sourceMapData = s, v;
      }

      return s;
    }

    var a = M(o, n);
    return {
      sourceMappingURL: n,
      url: a,
      sourcesRelativeTo: a,
      map: null
    };
  }

  l(U, "resolveSourceMapHelper");

  function A(e, o, n, u, r) {
    typeof u == "function" && (r = u, u = {});
    var c = e.sources ? e.sources.length : 0,
        t = {
      sourcesResolved: [],
      sourcesContent: []
    };

    if (c === 0) {
      R(r, null, t);
      return;
    }

    var s = l(function () {
      c--, c === 0 && r(null, t);
    }, "done");
    J(e, o, u, function (i, a, v) {
      if (t.sourcesResolved[v] = i, typeof a == "string") t.sourcesContent[v] = a, R(s, null);else {
        var f = S(i);
        n(f, function (m, B) {
          t.sourcesContent[v] = m || String(B), s();
        });
      }
    });
  }

  l(A, "resolveSources");

  function q(e, o, n, u) {
    var r = {
      sourcesResolved: [],
      sourcesContent: []
    };
    return !e.sources || e.sources.length === 0 || J(e, o, u, function (c, t, s) {
      if (r.sourcesResolved[s] = c, n !== null) if (typeof t == "string") r.sourcesContent[s] = t;else {
        var i = S(c);

        try {
          r.sourcesContent[s] = String(n(i));
        } catch (a) {
          r.sourcesContent[s] = a;
        }
      }
    }), r;
  }

  l(q, "resolveSourcesSync");
  var k = /\/?$/;

  function J(e, o, n, u) {
    n = n || {}, o = L(o);

    for (var r, c, t, s = 0, i = e.sources.length; s < i; s++) t = null, typeof n.sourceRoot == "string" ? t = n.sourceRoot : typeof e.sourceRoot == "string" && n.sourceRoot !== !1 && (t = e.sourceRoot), t === null || t === "" ? r = M(o, e.sources[s]) : r = M(o, t.replace(k, "/"), e.sources[s]), c = (e.sourcesContent || [])[s], u(r, c, s);
  }

  l(J, "resolveSourcesHelper");

  function ee(e, o, n, u, r) {
    if (typeof u == "function" && (r = u, u = {}), e === null) {
      var c = o,
          t = {
        sourceMappingURL: null,
        url: c,
        sourcesRelativeTo: c,
        map: null
      },
          s = S(c);
      n(s, function (a, v) {
        if (a) return a.sourceMapData = t, r(a);
        t.map = String(v);

        try {
          t.map = p(t.map, t);
        } catch (f) {
          return r(f);
        }

        i(t);
      });
    } else D(e, o, n, function (a, v) {
      if (a) return r(a);
      if (!v) return r(null, null);
      i(v);
    });

    function i(a) {
      A(a.map, a.sourcesRelativeTo, n, u, function (v, f) {
        if (v) return r(v);
        a.sourcesResolved = f.sourcesResolved, a.sourcesContent = f.sourcesContent, r(null, a);
      });
    }

    l(i, "_resolveSources");
  }

  l(ee, "resolve");

  function re(e, o, n, u) {
    var r;

    if (e === null) {
      var c = o;
      r = {
        sourceMappingURL: null,
        url: c,
        sourcesRelativeTo: c,
        map: null
      }, r.map = w(n, c, r), r.map = p(r.map, r);
    } else if (r = $(e, o, n), !r) return null;

    var t = q(r.map, r.sourcesRelativeTo, n, u);
    return r.sourcesResolved = t.sourcesResolved, r.sourcesContent = t.sourcesContent, r;
  }

  l(re, "resolveSync");
  N.exports = {
    resolveSourceMap: D,
    resolveSourceMapSync: $,
    resolveSources: A,
    resolveSourcesSync: q,
    resolve: ee,
    resolveSync: re,
    parseMapToJSON: p
  };
});
var O = C(h()),
    j = C(h()),
    {
  resolveSourceMap: se,
  resolveSourceMapSync: ce,
  resolveSources: ae,
  resolveSourcesSync: le,
  resolve: ie,
  resolveSync: ve,
  parseMapToJSON: fe
} = j,
    {
  default: oe,
  ...ne
} = j,
    pe = O.default ?? oe ?? ne;
export { pe as default, fe as parseMapToJSON, ie as resolve, se as resolveSourceMap, ce as resolveSourceMapSync, ae as resolveSources, le as resolveSourcesSync, ve as resolveSync };