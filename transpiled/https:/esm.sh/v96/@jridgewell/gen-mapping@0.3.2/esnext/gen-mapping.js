/* esm.sh - esbuild bundle(@jridgewell/gen-mapping@0.3.2) esnext production */
import { SetArray as C, put as _ } from "/transpiled/https://esm.sh/v96/@jridgewell/set-array@1.1.2/esnext/set-array.js";
import { encode as y } from "/transpiled/https://esm.sh/v96/@jridgewell/sourcemap-codec@1.4.14/esnext/sourcemap-codec.js";
import { TraceMap as j, decodedMappings as D } from "/transpiled/https://esm.sh/v96/@jridgewell/trace-mapping@0.3.15/esnext/trace-mapping.js";
var R = 0,
    v = 1,
    A = 2,
    U = 3,
    b = 4,
    w = -1,
    L,
    k,
    x,
    X,
    F,
    E,
    T,
    q,
    z,
    d,
    M = class {
  constructor({
    file: e,
    sourceRoot: t
  } = {}) {
    this._names = new C(), this._sources = new C(), this._sourcesContent = [], this._mappings = [], this.file = e, this.sourceRoot = t;
  }

};
L = (n, e, t, s, r, u, o, c) => d(!1, n, e, t, s, r, u, o, c), x = (n, e, t, s, r, u, o, c) => d(!0, n, e, t, s, r, u, o, c), k = (n, e) => O(!1, n, e), X = (n, e) => O(!0, n, e), F = (n, e, t) => {
  let {
    _sources: s,
    _sourcesContent: r
  } = n;
  r[_(s, e)] = t;
}, E = n => {
  let {
    file: e,
    sourceRoot: t,
    _mappings: s,
    _sources: r,
    _sourcesContent: u,
    _names: o
  } = n;
  return J(s), {
    version: 3,
    file: e || void 0,
    names: o.array,
    sourceRoot: t || void 0,
    sources: r.array,
    sourcesContent: u,
    mappings: s
  };
}, T = n => {
  let e = E(n);
  return Object.assign(Object.assign({}, e), {
    mappings: y(e.mappings)
  });
}, z = n => {
  let e = [],
      {
    _mappings: t,
    _sources: s,
    _names: r
  } = n;

  for (let u = 0; u < t.length; u++) {
    let o = t[u];

    for (let c = 0; c < o.length; c++) {
      let l = o[c],
          h = {
        line: u + 1,
        column: l[R]
      },
          p,
          i,
          g;
      l.length !== 1 && (p = s.array[l[v]], i = {
        line: l[A] + 1,
        column: l[U]
      }, l.length === 5 && (g = r.array[l[b]])), e.push({
        generated: h,
        source: p,
        original: i,
        name: g
      });
    }
  }

  return e;
}, q = n => {
  let e = new j(n),
      t = new M({
    file: e.file,
    sourceRoot: e.sourceRoot
  });
  return N(t._names, e.names), N(t._sources, e.sources), t._sourcesContent = e.sourcesContent || e.sources.map(() => null), t._mappings = D(e), t;
}, d = (n, e, t, s, r, u, o, c, l) => {
  let {
    _mappings: h,
    _sources: p,
    _sourcesContent: i,
    _names: g
  } = e,
      a = B(h, t),
      m = H(a, s);
  if (!r) return n && K(a, m) ? void 0 : I(a, m, [s]);

  let f = _(p, r),
      S = c ? _(g, c) : w;

  if (f === i.length && (i[f] = l ?? null), !(n && P(a, m, f, u, o, S))) return I(a, m, c ? [s, f, u, o, S] : [s, f, u, o]);
};

function B(n, e) {
  for (let t = n.length; t <= e; t++) n[t] = [];

  return n[e];
}

function H(n, e) {
  let t = n.length;

  for (let s = t - 1; s >= 0; t = s--) {
    let r = n[s];
    if (e >= r[R]) break;
  }

  return t;
}

function I(n, e, t) {
  for (let s = n.length; s > e; s--) n[s] = n[s - 1];

  n[e] = t;
}

function J(n) {
  let {
    length: e
  } = n,
      t = e;

  for (let s = t - 1; s >= 0 && !(n[s].length > 0); t = s, s--);

  t < e && (n.length = t);
}

function N(n, e) {
  for (let t = 0; t < e.length; t++) _(n, e[t]);
}

function K(n, e) {
  return e === 0 ? !0 : n[e - 1].length === 1;
}

function P(n, e, t, s, r, u) {
  if (e === 0) return !1;
  let o = n[e - 1];
  return o.length === 1 ? !1 : t === o[v] && s === o[A] && r === o[U] && u === (o.length === 5 ? o[b] : w);
}

function O(n, e, t) {
  let {
    generated: s,
    source: r,
    original: u,
    name: o,
    content: c
  } = t;
  if (!r) return d(n, e, s.line - 1, s.column, null, null, null, null, null);
  let l = r;
  return d(n, e, s.line - 1, s.column, l, u.line - 1, u.column, o, c);
}

export { M as GenMapping, k as addMapping, L as addSegment, z as allMappings, q as fromMap, X as maybeAddMapping, x as maybeAddSegment, F as setSourceContent, E as toDecodedMap, T as toEncodedMap };