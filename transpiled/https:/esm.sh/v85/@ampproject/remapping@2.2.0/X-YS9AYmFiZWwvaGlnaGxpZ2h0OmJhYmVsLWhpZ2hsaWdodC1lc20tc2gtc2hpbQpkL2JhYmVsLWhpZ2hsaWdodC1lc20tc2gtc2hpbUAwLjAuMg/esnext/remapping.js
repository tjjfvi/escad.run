/* esm.sh - esbuild bundle(@ampproject/remapping@2.2.0) esnext production */
var b = Object.defineProperty;

var u = (n, e) => b(n, "name", {
  value: e,
  configurable: !0
});

import { decodedMappings as N, traceSegment as j, TraceMap as w } from "/transpiled/https://esm.sh/v85/@jridgewell/trace-mapping@0.3.13/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/trace-mapping.js";
import { GenMapping as v, addSegment as G, setSourceContent as L, decodedMap as U, encodedMap as _ } from "/transpiled/https://esm.sh/v85/@jridgewell/gen-mapping@0.1.1/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/gen-mapping.js";
var x = {
  source: null,
  column: null,
  line: null,
  name: null,
  content: null
},
    D = [];

function E(n, e, t, o) {
  return {
    map: n,
    sources: e,
    source: t,
    content: o
  };
}

u(E, "Source");

function A(n, e) {
  return E(n, e, "", null);
}

u(A, "MapSource");

function F(n, e) {
  return E(null, D, n, e);
}

u(F, "OriginalSource");

function I(n) {
  let e = new v({
    file: n.map.file
  }),
      {
    sources: t,
    map: o
  } = n,
      r = o.names,
      s = N(o);

  for (let i = 0; i < s.length; i++) {
    let p = s[i],
        m = null,
        d = null,
        l = null;

    for (let a = 0; a < p.length; a++) {
      let c = p[a],
          g = c[0],
          f = x;

      if (c.length !== 1) {
        let T = t[c[1]];
        if (f = O(T, c[2], c[3], c.length === 5 ? r[c[4]] : ""), f == null) continue;
      }

      let {
        column: M,
        line: C,
        name: R,
        content: y,
        source: h
      } = f;
      C === d && M === l && h === m || (d = C, l = M, m = h, G(e, i, g, h, C, M, R), y != null && L(e, h, y));
    }
  }

  return e;
}

u(I, "traceMappings");

function O(n, e, t, o) {
  if (!n.map) return {
    column: t,
    line: e,
    name: o,
    source: n.source,
    content: n.content
  };
  let r = j(n.map, e, t);
  return r == null ? null : r.length === 1 ? x : O(n.sources[r[1]], r[2], r[3], r.length === 5 ? n.map.names[r[4]] : o);
}

u(O, "originalPositionFor");

function J(n) {
  return Array.isArray(n) ? n : [n];
}

u(J, "asArray");

function Y(n, e) {
  let t = J(n).map(s => new w(s, "")),
      o = t.pop();

  for (let s = 0; s < t.length; s++) if (t[s].sources.length > 1) throw new Error(`Transformation map ${s} must have exactly one source file.
Did you specify these with the most recent transformation maps first?`);

  let r = P(o, e, "", 0);

  for (let s = t.length - 1; s >= 0; s--) r = A(t[s], [r]);

  return r;
}

u(Y, "buildSourceMapTree");

function P(n, e, t, o) {
  let {
    resolvedSources: r,
    sourcesContent: s
  } = n,
      i = o + 1,
      p = r.map((m, d) => {
    let l = {
      importer: t,
      depth: i,
      source: m || "",
      content: void 0
    },
        a = e(l.source, l),
        {
      source: c,
      content: g
    } = l;
    if (a) return P(new w(a, c), e, c, i);
    let f = g !== void 0 ? g : s ? s[d] : null;
    return F(c, f);
  });
  return A(n, p);
}

u(P, "build");
var S = class {
  constructor(e, t) {
    let o = t.decodedMappings ? U(e) : _(e);
    this.version = o.version, this.file = o.file, this.mappings = o.mappings, this.names = o.names, this.sourceRoot = o.sourceRoot, this.sources = o.sources, t.excludeContent || (this.sourcesContent = o.sourcesContent);
  }

  toString() {
    return JSON.stringify(this);
  }

};
u(S, "SourceMap");

function z(n, e, t) {
  let o = typeof t == "object" ? t : {
    excludeContent: !!t,
    decodedMappings: !1
  },
      r = Y(n, e);
  return new S(I(r), o);
}

u(z, "remapping");
export { z as default };