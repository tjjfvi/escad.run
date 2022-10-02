/* esm.sh - esbuild bundle(@jridgewell/gen-mapping@0.1.1) esnext production */
import { SetArray as _, put as p } from "/transpiled/https://esm.sh/v96/@jridgewell/set-array@1.1.2/esnext/set-array.js";
import { encode as k } from "/transpiled/https://esm.sh/v96/@jridgewell/sourcemap-codec@1.4.14/esnext/sourcemap-codec.js";
var C,
    w,
    y,
    j,
    I,
    O,
    v = class {
  constructor({
    file: t,
    sourceRoot: e
  } = {}) {
    this._names = new _(), this._sources = new _(), this._sourcesContent = [], this._mappings = [], this.file = t, this.sourceRoot = e;
  }

};
C = (n, t, e, s, o, r, c) => {
  let {
    _mappings: u,
    _sources: i,
    _sourcesContent: d,
    _names: g
  } = n,
      l = A(u, t);

  if (s == null) {
    let h = [e],
        S = x(l, e, h);
    return M(l, S, h);
  }

  let f = p(i, s),
      m = c ? [e, f, o, r, p(g, c)] : [e, f, o, r],
      R = x(l, e, m);
  f === d.length && (d[f] = null), M(l, R, m);
}, w = (n, t) => {
  let {
    generated: e,
    source: s,
    original: o,
    name: r
  } = t;
  return C(n, e.line - 1, e.column, s, o == null ? void 0 : o.line - 1, o?.column, r);
}, y = (n, t, e) => {
  let {
    _sources: s,
    _sourcesContent: o
  } = n;
  o[p(s, t)] = e;
}, j = n => {
  let {
    file: t,
    sourceRoot: e,
    _mappings: s,
    _sources: o,
    _sourcesContent: r,
    _names: c
  } = n;
  return {
    version: 3,
    file: t,
    names: c.array,
    sourceRoot: e || void 0,
    sources: o.array,
    sourcesContent: r,
    mappings: s
  };
}, I = n => {
  let t = j(n);
  return Object.assign(Object.assign({}, t), {
    mappings: k(t.mappings)
  });
}, O = n => {
  let t = [],
      {
    _mappings: e,
    _sources: s,
    _names: o
  } = n;

  for (let r = 0; r < e.length; r++) {
    let c = e[r];

    for (let u = 0; u < c.length; u++) {
      let i = c[u],
          d = {
        line: r + 1,
        column: i[0]
      },
          g,
          l,
          f;
      i.length !== 1 && (g = s.array[i[1]], l = {
        line: i[2] + 1,
        column: i[3]
      }, i.length === 5 && (f = o.array[i[4]])), t.push({
        generated: d,
        source: g,
        original: l,
        name: f
      });
    }
  }

  return t;
};

function A(n, t) {
  for (let e = n.length; e <= t; e++) n[e] = [];

  return n[t];
}

function x(n, t, e) {
  let s = n.length;

  for (let o = s - 1; o >= 0; o--, s--) {
    let r = n[o],
        c = r[0];
    if (c > t) continue;
    if (c < t) break;
    let u = N(r, e);
    if (u === 0) return s;
    if (u < 0) break;
  }

  return s;
}

function N(n, t) {
  let e = a(n.length, t.length);
  return e !== 0 ? e : n.length === 1 ? 0 : (e = a(n[1], t[1]), e !== 0 || (e = a(n[2], t[2]), e !== 0) || (e = a(n[3], t[3]), e !== 0) ? e : n.length === 4 ? 0 : a(n[4], t[4]));
}

function a(n, t) {
  return n - t;
}

function M(n, t, e) {
  if (t !== -1) {
    for (let s = n.length; s > t; s--) n[s] = n[s - 1];

    n[t] = e;
  }
}

export { v as GenMapping, w as addMapping, C as addSegment, O as allMappings, j as decodedMap, I as encodedMap, y as setSourceContent };