/* esm.sh - esbuild bundle(@jridgewell/trace-mapping@0.3.15) esnext production */
import { encode as k, decode as p } from "/transpiled/https://esm.sh/v96/@jridgewell/sourcemap-codec@1.4.14/esnext/sourcemap-codec.js";
import ee from "/transpiled/https://esm.sh/v96/@jridgewell/resolve-uri@3.1.0/esnext/resolve-uri.js";

function P(e, n) {
  return n && !n.endsWith("/") && (n += "/"), ee(e, n);
}

function ne(e) {
  if (!e) return "";
  let n = e.lastIndexOf("/");
  return e.slice(0, n + 1);
}

var E = 0,
    w = 1,
    A = 2,
    D = 3,
    X = 4,
    te = 1,
    oe = 2;

function re(e, n) {
  let t = K(e, 0);
  if (t === e.length) return e;
  n || (e = e.slice());

  for (let o = t; o < e.length; o = K(e, o + 1)) e[o] = le(e[o], n);

  return e;
}

function K(e, n) {
  for (let t = n; t < e.length; t++) if (!se(e[t])) return t;

  return e.length;
}

function se(e) {
  for (let n = 1; n < e.length; n++) if (e[n][E] < e[n - 1][E]) return !1;

  return !0;
}

function le(e, n) {
  return n || (e = e.slice()), e.sort(ce);
}

function ce(e, n) {
  return e[E] - n[E];
}

var m = !1;

function ue(e, n, t, o) {
  for (; t <= o;) {
    let s = t + (o - t >> 1),
        r = e[s][E] - n;
    if (r === 0) return m = !0, s;
    r < 0 ? t = s + 1 : o = s - 1;
  }

  return m = !1, t - 1;
}

function Z(e, n, t) {
  for (let o = t + 1; o < e.length && e[o][E] === n; t = o++);

  return t;
}

function ie(e, n, t) {
  for (let o = t - 1; o >= 0 && e[o][E] === n; t = o--);

  return t;
}

function q() {
  return {
    lastKey: -1,
    lastNeedle: -1,
    lastIndex: -1
  };
}

function Q(e, n, t, o) {
  let {
    lastKey: s,
    lastNeedle: r,
    lastIndex: l
  } = t,
      c = 0,
      u = e.length - 1;

  if (o === s) {
    if (n === r) return m = l !== -1 && e[l][E] === n, l;
    n >= r ? c = l === -1 ? 0 : l : u = l;
  }

  return t.lastKey = o, t.lastNeedle = n, t.lastIndex = ue(e, n, c, u);
}

function fe(e, n) {
  let t = n.map(he);

  for (let o = 0; o < e.length; o++) {
    let s = e[o];

    for (let r = 0; r < s.length; r++) {
      let l = s[r];
      if (l.length === 1) continue;
      let c = l[w],
          u = l[A],
          d = l[D],
          f = t[c],
          i = f[u] || (f[u] = []),
          h = n[c],
          g = Z(i, d, Q(i, d, h, u));
      de(i, h.lastIndex = g + 1, [d, o, l[E]]);
    }
  }

  return t;
}

function de(e, n, t) {
  for (let o = e.length; o > n; o--) e[o] = e[o - 1];

  e[n] = t;
}

function he() {
  return {
    __proto__: null
  };
}

var me = function (e, n) {
  let t = typeof e == "string" ? JSON.parse(e) : e;
  if (!("sections" in t)) return new N(t, n);
  let o = [],
      s = [],
      r = [],
      l = [];
  H(t, n, o, s, r, l, 0, 0, 1 / 0, 1 / 0);
  let c = {
    version: 3,
    file: t.file,
    names: l,
    sources: s,
    sourcesContent: r,
    mappings: o
  };
  return Y(c);
};

function H(e, n, t, o, s, r, l, c, u, d) {
  let {
    sections: f
  } = e;

  for (let i = 0; i < f.length; i++) {
    let {
      map: h,
      offset: g
    } = f[i],
        S = u,
        O = d;

    if (i + 1 < f.length) {
      let _ = f[i + 1].offset;
      S = Math.min(u, l + _.line), S === u ? O = Math.min(d, c + _.column) : S < u && (O = c + _.column);
    }

    ge(h, n, t, o, s, r, l + g.line, c + g.column, S, O);
  }
}

function ge(e, n, t, o, s, r, l, c, u, d) {
  if ("sections" in e) return H(...arguments);
  let f = new N(e, n),
      i = o.length,
      h = r.length,
      g = M(f),
      {
    resolvedSources: S,
    sourcesContent: O
  } = f;
  if (y(o, S), y(r, f.names), O) y(s, O);else for (let _ = 0; _ < S.length; _++) s.push(null);

  for (let _ = 0; _ < g.length; _++) {
    let v = l + _;
    if (v > u) return;

    let B = _e(t, v),
        $ = _ === 0 ? c : 0,
        G = g[_];

    for (let x = 0; x < G.length; x++) {
      let a = G[x],
          C = $ + a[E];
      if (v === u && C >= d) return;

      if (a.length === 1) {
        B.push([C]);
        continue;
      }

      let T = i + a[w],
          j = a[A],
          F = a[D];
      B.push(a.length === 4 ? [C, T, j, F] : [C, T, j, F, h + a[X]]);
    }
  }
}

function y(e, n) {
  for (let t = 0; t < n.length; t++) e.push(n[t]);
}

function _e(e, n) {
  for (let t = e.length; t <= n; t++) e[t] = [];

  return e[n];
}

var z = "`line` must be greater than 0 (lines start at line 1)",
    J = "`column` must be greater than or equal to 0 (columns start at column 0)",
    V = -1,
    L = 1,
    W,
    M,
    Se,
    Ee,
    ae,
    Me,
    Oe,
    Y,
    Ne,
    Ce,
    N = class {
  constructor(n, t) {
    let o = typeof n == "string";
    if (!o && n._decodedMemo) return n;
    let s = o ? JSON.parse(n) : n,
        {
      version: r,
      file: l,
      names: c,
      sourceRoot: u,
      sources: d,
      sourcesContent: f
    } = s;
    this.version = r, this.file = l, this.names = c, this.sourceRoot = u, this.sources = d, this.sourcesContent = f;
    let i = P(u || "", ne(t));
    this.resolvedSources = d.map(g => P(g || "", i));
    let {
      mappings: h
    } = s;
    typeof h == "string" ? (this._encoded = h, this._decoded = void 0) : (this._encoded = void 0, this._decoded = re(h, o)), this._decodedMemo = q(), this._bySources = void 0, this._bySourceMemos = void 0;
  }

};
W = e => {
  var n;
  return (n = e._encoded) !== null && n !== void 0 ? n : e._encoded = k(e._decoded);
}, M = e => e._decoded || (e._decoded = p(e._encoded)), Se = (e, n, t) => {
  let o = M(e);
  return n >= o.length ? null : U(o[n], e._decodedMemo, n, t, L);
}, Ee = (e, {
  line: n,
  column: t,
  bias: o
}) => {
  if (n--, n < 0) throw new Error(z);
  if (t < 0) throw new Error(J);
  let s = M(e);
  if (n >= s.length) return I(null, null, null, null);
  let r = U(s[n], e._decodedMemo, n, t, o || L);
  if (r == null || r.length == 1) return I(null, null, null, null);
  let {
    names: l,
    resolvedSources: c
  } = e;
  return I(c[r[w]], r[A] + 1, r[D], r.length === 5 ? l[r[X]] : null);
}, ae = (e, {
  source: n,
  line: t,
  column: o,
  bias: s
}) => {
  if (t--, t < 0) throw new Error(z);
  if (o < 0) throw new Error(J);
  let {
    sources: r,
    resolvedSources: l
  } = e,
      c = r.indexOf(n);
  if (c === -1 && (c = l.indexOf(n)), c === -1) return R(null, null);
  let u = e._bySources || (e._bySources = fe(M(e), e._bySourceMemos = r.map(q))),
      d = e._bySourceMemos,
      f = u[c][t];
  if (f == null) return R(null, null);
  let i = U(f, d[c], t, o, s || L);
  return i == null ? R(null, null) : R(i[te] + 1, i[oe]);
}, Me = (e, n) => {
  let t = M(e),
      {
    names: o,
    resolvedSources: s
  } = e;

  for (let r = 0; r < t.length; r++) {
    let l = t[r];

    for (let c = 0; c < l.length; c++) {
      let u = l[c],
          d = r + 1,
          f = u[0],
          i = null,
          h = null,
          g = null,
          S = null;
      u.length !== 1 && (i = s[u[1]], h = u[2] + 1, g = u[3]), u.length === 5 && (S = o[u[4]]), n({
        generatedLine: d,
        generatedColumn: f,
        source: i,
        originalLine: h,
        originalColumn: g,
        name: S
      });
    }
  }
}, Oe = (e, n) => {
  let {
    sources: t,
    resolvedSources: o,
    sourcesContent: s
  } = e;
  if (s == null) return null;
  let r = t.indexOf(n);
  return r === -1 && (r = o.indexOf(n)), r === -1 ? null : s[r];
}, Y = (e, n) => {
  let t = new N(b(e, []), n);
  return t._decoded = e.mappings, t;
}, Ne = e => b(e, M(e)), Ce = e => b(e, W(e));

function b(e, n) {
  return {
    version: e.version,
    file: e.file,
    names: e.names,
    sourceRoot: e.sourceRoot,
    sources: e.sources,
    sourcesContent: e.sourcesContent,
    mappings: n
  };
}

function I(e, n, t, o) {
  return {
    source: e,
    line: n,
    column: t,
    name: o
  };
}

function R(e, n) {
  return {
    line: e,
    column: n
  };
}

function U(e, n, t, o, s) {
  let r = Q(e, o, n, t);
  return m ? r = (s === V ? Z : ie)(e, o, r) : s === V && r++, r === -1 || r === e.length ? null : e[r];
}

export { me as AnyMap, L as GREATEST_LOWER_BOUND, V as LEAST_UPPER_BOUND, N as TraceMap, Ne as decodedMap, M as decodedMappings, Me as eachMapping, Ce as encodedMap, W as encodedMappings, ae as generatedPositionFor, Ee as originalPositionFor, Y as presortedDecodedMap, Oe as sourceContentFor, Se as traceSegment };