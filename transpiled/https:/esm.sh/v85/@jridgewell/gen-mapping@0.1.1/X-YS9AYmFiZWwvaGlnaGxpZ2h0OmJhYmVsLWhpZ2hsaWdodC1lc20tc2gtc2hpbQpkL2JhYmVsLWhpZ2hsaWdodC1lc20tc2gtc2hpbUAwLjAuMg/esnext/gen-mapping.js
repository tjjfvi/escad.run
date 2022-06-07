/* esm.sh - esbuild bundle(@jridgewell/gen-mapping@0.1.1) esnext production */
var y = Object.defineProperty;

var c = (n, t) => y(n, "name", {
  value: t,
  configurable: !0
});

import { SetArray as j, put as p } from "/transpiled/https://esm.sh/v85/@jridgewell/set-array@1.1.1/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/set-array.js";
import { encode as I } from "/transpiled/https://esm.sh/v85/@jridgewell/sourcemap-codec@1.4.13/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/sourcemap-codec.js";
var v,
    M,
    O,
    x,
    A,
    N,
    h = class {
  constructor({
    file: t,
    sourceRoot: e
  } = {}) {
    this._names = new j(), this._sources = new j(), this._sourcesContent = [], this._mappings = [], this.file = t, this.sourceRoot = e;
  }

};
c(h, "GenMapping");
v = c((n, t, e, s, o, r, i) => {
  let {
    _mappings: l,
    _sources: u,
    _sourcesContent: g,
    _names: m
  } = n,
      f = b(l, t);

  if (s == null) {
    let C = [e],
        w = R(f, e, C);
    return S(f, w, C);
  }

  let a = p(u, s),
      _ = i ? [e, a, o, r, p(m, i)] : [e, a, o, r],
      k = R(f, e, _);

  a === g.length && (g[a] = null), S(f, k, _);
}, "addSegment"), M = c((n, t) => {
  let {
    generated: e,
    source: s,
    original: o,
    name: r
  } = t;
  return v(n, e.line - 1, e.column, s, o == null ? void 0 : o.line - 1, o?.column, r);
}, "addMapping"), O = c((n, t, e) => {
  let {
    _sources: s,
    _sourcesContent: o
  } = n;
  o[p(s, t)] = e;
}, "setSourceContent"), x = c(n => {
  let {
    file: t,
    sourceRoot: e,
    _mappings: s,
    _sources: o,
    _sourcesContent: r,
    _names: i
  } = n;
  return {
    version: 3,
    file: t,
    names: i.array,
    sourceRoot: e || void 0,
    sources: o.array,
    sourcesContent: r,
    mappings: s
  };
}, "decodedMap"), A = c(n => {
  let t = x(n);
  return Object.assign(Object.assign({}, t), {
    mappings: I(t.mappings)
  });
}, "encodedMap"), N = c(n => {
  let t = [],
      {
    _mappings: e,
    _sources: s,
    _names: o
  } = n;

  for (let r = 0; r < e.length; r++) {
    let i = e[r];

    for (let l = 0; l < i.length; l++) {
      let u = i[l],
          g = {
        line: r + 1,
        column: u[0]
      },
          m,
          f,
          a;
      u.length !== 1 && (m = s.array[u[1]], f = {
        line: u[2] + 1,
        column: u[3]
      }, u.length === 5 && (a = o.array[u[4]])), t.push({
        generated: g,
        source: m,
        original: f,
        name: a
      });
    }
  }

  return t;
}, "allMappings");

function b(n, t) {
  for (let e = n.length; e <= t; e++) n[e] = [];

  return n[t];
}

c(b, "getLine");

function R(n, t, e) {
  let s = n.length;

  for (let o = s - 1; o >= 0; o--, s--) {
    let r = n[o],
        i = r[0];
    if (i > t) continue;
    if (i < t) break;
    let l = q(r, e);
    if (l === 0) return s;
    if (l < 0) break;
  }

  return s;
}

c(R, "getColumnIndex");

function q(n, t) {
  let e = d(n.length, t.length);
  return e !== 0 ? e : n.length === 1 ? 0 : (e = d(n[1], t[1]), e !== 0 || (e = d(n[2], t[2]), e !== 0) || (e = d(n[3], t[3]), e !== 0) ? e : n.length === 4 ? 0 : d(n[4], t[4]));
}

c(q, "compare");

function d(n, t) {
  return n - t;
}

c(d, "compareNum");

function S(n, t, e) {
  if (t !== -1) {
    for (let s = n.length; s > t; s--) n[s] = n[s - 1];

    n[t] = e;
  }
}

c(S, "insert");
export { h as GenMapping, M as addMapping, v as addSegment, N as allMappings, x as decodedMap, A as encodedMap, O as setSourceContent };