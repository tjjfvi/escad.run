/* esm.sh - esbuild bundle(@jridgewell/trace-mapping@0.3.13) esnext production */
var k = Object.defineProperty;

var s = (e, n) => k(e, "name", {
  value: n,
  configurable: !0
});

import { encode as p, decode as ee } from "/transpiled/https://esm.sh/v85/@jridgewell/sourcemap-codec@1.4.13/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/sourcemap-codec.js";
import ne from "/transpiled/https://esm.sh/v85/@jridgewell/resolve-uri@3.0.7/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/resolve-uri.js";

function P(e, n) {
  return n && !n.endsWith("/") && (n += "/"), ne(e, n);
}

s(P, "resolve");

function te(e) {
  if (!e) return "";
  let n = e.lastIndexOf("/");
  return e.slice(0, n + 1);
}

s(te, "stripFilename");
var a = 0,
    w = 1,
    A = 2,
    D = 3,
    X = 4,
    oe = 1,
    re = 2;

function se(e, n) {
  let t = K(e, 0);
  if (t === e.length) return e;
  n || (e = e.slice());

  for (let o = t; o < e.length; o = K(e, o + 1)) e[o] = le(e[o], n);

  return e;
}

s(se, "maybeSort");

function K(e, n) {
  for (let t = n; t < e.length; t++) if (!ce(e[t])) return t;

  return e.length;
}

s(K, "nextUnsortedSegmentLine");

function ce(e) {
  for (let n = 1; n < e.length; n++) if (e[n][a] < e[n - 1][a]) return !1;

  return !0;
}

s(ce, "isSorted");

function le(e, n) {
  return n || (e = e.slice()), e.sort(ue);
}

s(le, "sortSegments");

function ue(e, n) {
  return e[a] - n[a];
}

s(ue, "sortComparator");
var v = !1;

function ie(e, n, t, o) {
  for (; t <= o;) {
    let c = t + (o - t >> 1),
        r = e[c][a] - n;
    if (r === 0) return v = !0, c;
    r < 0 ? t = c + 1 : o = c - 1;
  }

  return v = !1, t - 1;
}

s(ie, "binarySearch");

function Z(e, n, t) {
  for (let o = t + 1; o < e.length && e[o][a] === n; t = o++);

  return t;
}

s(Z, "upperBound");

function fe(e, n, t) {
  for (let o = t - 1; o >= 0 && e[o][a] === n; t = o--);

  return t;
}

s(fe, "lowerBound");

function q() {
  return {
    lastKey: -1,
    lastNeedle: -1,
    lastIndex: -1
  };
}

s(q, "memoizedState");

function Q(e, n, t, o) {
  let {
    lastKey: c,
    lastNeedle: r,
    lastIndex: l
  } = t,
      u = 0,
      i = e.length - 1;

  if (o === c) {
    if (n === r) return v = l !== -1 && e[l][a] === n, l;
    n >= r ? u = l === -1 ? 0 : l : i = l;
  }

  return t.lastKey = o, t.lastNeedle = n, t.lastIndex = ie(e, n, u, i);
}

s(Q, "memoizedBinarySearch");

function de(e, n) {
  let t = n.map(he);

  for (let o = 0; o < e.length; o++) {
    let c = e[o];

    for (let r = 0; r < c.length; r++) {
      let l = c[r];
      if (l.length === 1) continue;

      let u = l[w],
          i = l[A],
          g = l[D],
          d = t[u],
          f = d[i] || (d[i] = []),
          h = n[u],
          _ = Z(f, g, Q(f, g, h, i));

      ge(f, h.lastIndex = _ + 1, [g, o, l[a]]);
    }
  }

  return t;
}

s(de, "buildBySources");

function ge(e, n, t) {
  for (let o = e.length; o > n; o--) e[o] = e[o - 1];

  e[n] = t;
}

s(ge, "insert");

function he() {
  return {
    __proto__: null
  };
}

s(he, "buildNullArray");
var xe = s(function (e, n) {
  let t = typeof e == "string" ? JSON.parse(e) : e;
  if (!("sections" in t)) return new R(t, n);
  let o = [],
      c = [],
      r = [],
      l = [];
  H(t, n, o, c, r, l, 0, 0, 1 / 0, 1 / 0);
  let u = {
    version: 3,
    file: t.file,
    names: l,
    sources: c,
    sourcesContent: r,
    mappings: o
  };
  return Y(u);
}, "AnyMap");

function H(e, n, t, o, c, r, l, u, i, g) {
  let {
    sections: d
  } = e;

  for (let f = 0; f < d.length; f++) {
    let {
      map: h,
      offset: _
    } = d[f],
        E = i,
        M = g;

    if (f + 1 < d.length) {
      let S = d[f + 1].offset;
      E = Math.min(i, l + S.line), E === i ? M = Math.min(g, u + S.column) : E < i && (M = u + S.column);
    }

    _e(h, n, t, o, c, r, l + _.line, u + _.column, E, M);
  }
}

s(H, "recurse");

function _e(e, n, t, o, c, r, l, u, i, g) {
  if ("sections" in e) return H(...arguments);

  let d = new R(e, n),
      f = o.length,
      h = r.length,
      _ = C(d),
      {
    resolvedSources: E,
    sourcesContent: M
  } = d;

  if (L(o, E), L(r, d.names), M) L(c, M);else for (let S = 0; S < E.length; S++) c.push(null);

  for (let S = 0; S < _.length; S++) {
    let x = l + S;
    if (x > i) return;
    let j = Se(t, x),
        $ = S === 0 ? u : 0,
        B = _[S];

    for (let y = 0; y < B.length; y++) {
      let O = B[y],
          N = $ + O[a];
      if (x === i && N >= g) return;

      if (O.length === 1) {
        j.push([N]);
        continue;
      }

      let G = f + O[w],
          T = O[A],
          F = O[D];
      j.push(O.length === 4 ? [N, G, T, F] : [N, G, T, F, h + O[X]]);
    }
  }
}

s(_e, "addSection");

function L(e, n) {
  for (let t = 0; t < n.length; t++) e.push(n[t]);
}

s(L, "append");

function Se(e, n) {
  for (let t = e.length; t <= n; t++) e[t] = [];

  return e[n];
}

s(Se, "getLine");
var z = "`line` must be greater than 0 (lines start at line 1)",
    J = "`column` must be greater than or equal to 0 (columns start at column 0)",
    V = -1,
    b = 1,
    W,
    C,
    Ee,
    ae,
    Oe,
    Ce,
    Me,
    Y,
    Re,
    Ne,
    R = class {
  constructor(n, t) {
    this._decodedMemo = q(), this._bySources = void 0, this._bySourceMemos = void 0;
    let o = typeof n == "string";
    if (!o && n._decodedMemo) return n;
    let c = o ? JSON.parse(n) : n,
        {
      version: r,
      file: l,
      names: u,
      sourceRoot: i,
      sources: g,
      sourcesContent: d
    } = c;
    this.version = r, this.file = l, this.names = u, this.sourceRoot = i, this.sources = g, this.sourcesContent = d;
    let f = P(i || "", te(t));
    this.resolvedSources = g.map(_ => P(_ || "", f));
    let {
      mappings: h
    } = c;
    typeof h == "string" ? (this._encoded = h, this._decoded = void 0) : (this._encoded = void 0, this._decoded = se(h, o));
  }

};
s(R, "TraceMap");
W = s(e => {
  var n;
  return (n = e._encoded) !== null && n !== void 0 ? n : e._encoded = p(e._decoded);
}, "encodedMappings"), C = s(e => e._decoded || (e._decoded = ee(e._encoded)), "decodedMappings"), Ee = s((e, n, t) => {
  let o = C(e);
  return n >= o.length ? null : U(o[n], e._decodedMemo, n, t, b);
}, "traceSegment"), ae = s((e, {
  line: n,
  column: t,
  bias: o
}) => {
  if (n--, n < 0) throw new Error(z);
  if (t < 0) throw new Error(J);
  let c = C(e);
  if (n >= c.length) return I(null, null, null, null);
  let r = U(c[n], e._decodedMemo, n, t, o || b);
  if (r == null || r.length == 1) return I(null, null, null, null);
  let {
    names: l,
    resolvedSources: u
  } = e;
  return I(u[r[w]], r[A] + 1, r[D], r.length === 5 ? l[r[X]] : null);
}, "originalPositionFor"), Oe = s((e, {
  source: n,
  line: t,
  column: o,
  bias: c
}) => {
  if (t--, t < 0) throw new Error(z);
  if (o < 0) throw new Error(J);
  let {
    sources: r,
    resolvedSources: l
  } = e,
      u = r.indexOf(n);
  if (u === -1 && (u = l.indexOf(n)), u === -1) return m(null, null);
  let i = e._bySources || (e._bySources = de(C(e), e._bySourceMemos = r.map(q))),
      g = e._bySourceMemos,
      d = i[u][t];
  if (d == null) return m(null, null);
  let f = U(d, g[u], t, o, c || b);
  return f == null ? m(null, null) : m(f[oe] + 1, f[re]);
}, "generatedPositionFor"), Ce = s((e, n) => {
  let t = C(e),
      {
    names: o,
    resolvedSources: c
  } = e;

  for (let r = 0; r < t.length; r++) {
    let l = t[r];

    for (let u = 0; u < l.length; u++) {
      let i = l[u],
          g = r + 1,
          d = i[0],
          f = null,
          h = null,
          _ = null,
          E = null;
      i.length !== 1 && (f = c[i[1]], h = i[2] + 1, _ = i[3]), i.length === 5 && (E = o[i[4]]), n({
        generatedLine: g,
        generatedColumn: d,
        source: f,
        originalLine: h,
        originalColumn: _,
        name: E
      });
    }
  }
}, "eachMapping"), Me = s((e, n) => {
  let {
    sources: t,
    resolvedSources: o,
    sourcesContent: c
  } = e;
  if (c == null) return null;
  let r = t.indexOf(n);
  return r === -1 && (r = o.indexOf(n)), r === -1 ? null : c[r];
}, "sourceContentFor"), Y = s((e, n) => {
  let t = Object.assign({}, e);
  t.mappings = [];
  let o = new R(t, n);
  return o._decoded = e.mappings, o;
}, "presortedDecodedMap"), Re = s(e => ({
  version: 3,
  file: e.file,
  names: e.names,
  sourceRoot: e.sourceRoot,
  sources: e.sources,
  sourcesContent: e.sourcesContent,
  mappings: C(e)
}), "decodedMap"), Ne = s(e => ({
  version: 3,
  file: e.file,
  names: e.names,
  sourceRoot: e.sourceRoot,
  sources: e.sources,
  sourcesContent: e.sourcesContent,
  mappings: W(e)
}), "encodedMap");

function I(e, n, t, o) {
  return {
    source: e,
    line: n,
    column: t,
    name: o
  };
}

s(I, "OMapping");

function m(e, n) {
  return {
    line: e,
    column: n
  };
}

s(m, "GMapping");

function U(e, n, t, o, c) {
  let r = Q(e, o, n, t);
  return v ? r = (c === V ? Z : fe)(e, o, r) : c === V && r++, r === -1 || r === e.length ? null : e[r];
}

s(U, "traceSegmentInternal");
export { xe as AnyMap, b as GREATEST_LOWER_BOUND, V as LEAST_UPPER_BOUND, R as TraceMap, Re as decodedMap, C as decodedMappings, Ce as eachMapping, Ne as encodedMap, W as encodedMappings, Oe as generatedPositionFor, ae as originalPositionFor, Y as presortedDecodedMap, Me as sourceContentFor, Ee as traceSegment };