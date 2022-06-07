/* esm.sh - esbuild bundle(@jridgewell/gen-mapping@0.3.1) esnext production */
var j = Object.defineProperty;

var r = (n, e) => j(n, "name", {
  value: e,
  configurable: !0
});

import { SetArray as E, put as h } from "/transpiled/https://esm.sh/v85/@jridgewell/set-array@1.1.1/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/set-array.js";
import { encode as D } from "/transpiled/https://esm.sh/v85/@jridgewell/sourcemap-codec@1.4.13/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/sourcemap-codec.js";
import { TraceMap as L, decodedMappings as k } from "/transpiled/https://esm.sh/v85/@jridgewell/trace-mapping@0.3.13/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/trace-mapping.js";
var v = 0,
    A = 1,
    U = 2,
    b = 3,
    w = 4,
    y = -1,
    x,
    X,
    F,
    T,
    q,
    I,
    z,
    B,
    H,
    g,
    S = class {
  constructor({
    file: e,
    sourceRoot: t
  } = {}) {
    this._names = new E(), this._sources = new E(), this._sourcesContent = [], this._mappings = [], this.file = e, this.sourceRoot = t;
  }

};
r(S, "GenMapping");
x = r((n, e, t, s, u, c, o, l) => g(!1, n, e, t, s, u, c, o, l), "addSegment"), F = r((n, e, t, s, u, c, o, l) => g(!0, n, e, t, s, u, c, o, l), "maybeAddSegment"), X = r((n, e) => R(!1, n, e), "addMapping"), T = r((n, e) => R(!0, n, e), "maybeAddMapping"), q = r((n, e, t) => {
  let {
    _sources: s,
    _sourcesContent: u
  } = n;
  u[h(s, e)] = t;
}, "setSourceContent"), I = r(n => {
  let {
    file: e,
    sourceRoot: t,
    _mappings: s,
    _sources: u,
    _sourcesContent: c,
    _names: o
  } = n;
  return P(s), {
    version: 3,
    file: e || void 0,
    names: o.array,
    sourceRoot: t || void 0,
    sources: u.array,
    sourcesContent: c,
    mappings: s
  };
}, "toDecodedMap"), z = r(n => {
  let e = I(n);
  return Object.assign(Object.assign({}, e), {
    mappings: D(e.mappings)
  });
}, "toEncodedMap"), H = r(n => {
  let e = [],
      {
    _mappings: t,
    _sources: s,
    _names: u
  } = n;

  for (let c = 0; c < t.length; c++) {
    let o = t[c];

    for (let l = 0; l < o.length; l++) {
      let i = o[l],
          C = {
        line: c + 1,
        column: i[v]
      },
          p,
          a,
          m;
      i.length !== 1 && (p = s.array[i[A]], a = {
        line: i[U] + 1,
        column: i[b]
      }, i.length === 5 && (m = u.array[i[w]])), e.push({
        generated: C,
        source: p,
        original: a,
        name: m
      });
    }
  }

  return e;
}, "allMappings"), B = r(n => {
  let e = new L(n),
      t = new S({
    file: e.file,
    sourceRoot: e.sourceRoot
  });
  return O(t._names, e.names), O(t._sources, e.sources), t._sourcesContent = e.sourcesContent || e.sources.map(() => null), t._mappings = k(e), t;
}, "fromMap"), g = r((n, e, t, s, u, c, o, l, i) => {
  let {
    _mappings: C,
    _sources: p,
    _sourcesContent: a,
    _names: m
  } = e,
      f = J(C, t),
      _ = K(f, s);

  if (!u) return n && Q(f, _) ? void 0 : N(f, _, [s]);
  let d = h(p, u),
      M = l ? h(m, l) : y;
  if (d === a.length && (a[d] = i ?? null), !(n && V(f, _, d, c, o, M))) return N(f, _, l ? [s, d, c, o, M] : [s, d, c, o]);
}, "addSegmentInternal");

function J(n, e) {
  for (let t = n.length; t <= e; t++) n[t] = [];

  return n[e];
}

r(J, "getLine");

function K(n, e) {
  let t = n.length;

  for (let s = t - 1; s >= 0; t = s--) {
    let u = n[s];
    if (e >= u[v]) break;
  }

  return t;
}

r(K, "getColumnIndex");

function N(n, e, t) {
  for (let s = n.length; s > e; s--) n[s] = n[s - 1];

  n[e] = t;
}

r(N, "insert");

function P(n) {
  let {
    length: e
  } = n,
      t = e;

  for (let s = t - 1; s >= 0 && !(n[s].length > 0); t = s, s--);

  t < e && (n.length = t);
}

r(P, "removeEmptyFinalLines");

function O(n, e) {
  for (let t = 0; t < e.length; t++) h(n, e[t]);
}

r(O, "putAll");

function Q(n, e) {
  return e === 0 ? !0 : n[e - 1].length === 1;
}

r(Q, "skipSourceless");

function V(n, e, t, s, u, c) {
  if (e === 0) return !1;
  let o = n[e - 1];
  return o.length === 1 ? !1 : t === o[A] && s === o[U] && u === o[b] && c === (o.length === 5 ? o[w] : y);
}

r(V, "skipSource");

function R(n, e, t) {
  let {
    generated: s,
    source: u,
    original: c,
    name: o,
    content: l
  } = t;
  if (!u) return g(n, e, s.line - 1, s.column, null, null, null, null, null);
  let i = u;
  return g(n, e, s.line - 1, s.column, i, c.line - 1, c.column, o, l);
}

r(R, "addMappingInternal");
export { S as GenMapping, X as addMapping, x as addSegment, H as allMappings, B as fromMap, T as maybeAddMapping, F as maybeAddSegment, q as setSourceContent, I as toDecodedMap, z as toEncodedMap };