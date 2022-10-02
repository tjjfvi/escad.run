/* esm.sh - esbuild bundle(@ampproject/remapping@2.2.0) esnext production */
import { decodedMappings as T, traceSegment as b, TraceMap as y } from "/transpiled/https://esm.sh/v96/@jridgewell/trace-mapping@0.3.15/esnext/trace-mapping.js";
import { GenMapping as N, addSegment as j, setSourceContent as v, decodedMap as G, encodedMap as L } from "/transpiled/https://esm.sh/v96/@jridgewell/gen-mapping@0.1.1/esnext/gen-mapping.js";
var w = {
  source: null,
  column: null,
  line: null,
  name: null,
  content: null
},
    U = [];

function x(n, e, t, o) {
  return {
    map: n,
    sources: e,
    source: t,
    content: o
  };
}

function E(n, e) {
  return x(n, e, "", null);
}

function _(n, e) {
  return x(null, U, n, e);
}

function D(n) {
  let e = new N({
    file: n.map.file
  }),
      {
    sources: t,
    map: o
  } = n,
      r = o.names,
      s = T(o);

  for (let u = 0; u < s.length; u++) {
    let f = s[u],
        p = null,
        m = null,
        i = null;

    for (let l = 0; l < f.length; l++) {
      let c = f[l],
          d = c[0],
          a = w;

      if (c.length !== 1) {
        let R = t[c[1]];
        if (a = A(R, c[2], c[3], c.length === 5 ? r[c[4]] : ""), a == null) continue;
      }

      let {
        column: h,
        line: S,
        name: P,
        content: C,
        source: g
      } = a;
      S === m && h === i && g === p || (m = S, i = h, p = g, j(e, u, d, g, S, h, P), C != null && v(e, g, C));
    }
  }

  return e;
}

function A(n, e, t, o) {
  if (!n.map) return {
    column: t,
    line: e,
    name: o,
    source: n.source,
    content: n.content
  };
  let r = b(n.map, e, t);
  return r == null ? null : r.length === 1 ? w : A(n.sources[r[1]], r[2], r[3], r.length === 5 ? n.map.names[r[4]] : o);
}

function F(n) {
  return Array.isArray(n) ? n : [n];
}

function I(n, e) {
  let t = F(n).map(s => new y(s, "")),
      o = t.pop();

  for (let s = 0; s < t.length; s++) if (t[s].sources.length > 1) throw new Error(`Transformation map ${s} must have exactly one source file.
Did you specify these with the most recent transformation maps first?`);

  let r = O(o, e, "", 0);

  for (let s = t.length - 1; s >= 0; s--) r = E(t[s], [r]);

  return r;
}

function O(n, e, t, o) {
  let {
    resolvedSources: r,
    sourcesContent: s
  } = n,
      u = o + 1,
      f = r.map((p, m) => {
    let i = {
      importer: t,
      depth: u,
      source: p || "",
      content: void 0
    },
        l = e(i.source, i),
        {
      source: c,
      content: d
    } = i;
    if (l) return O(new y(l, c), e, c, u);
    let a = d !== void 0 ? d : s ? s[m] : null;
    return _(c, a);
  });
  return E(n, f);
}

var M = class {
  constructor(e, t) {
    let o = t.decodedMappings ? G(e) : L(e);
    this.version = o.version, this.file = o.file, this.mappings = o.mappings, this.names = o.names, this.sourceRoot = o.sourceRoot, this.sources = o.sources, t.excludeContent || (this.sourcesContent = o.sourcesContent);
  }

  toString() {
    return JSON.stringify(this);
  }

};

function $(n, e, t) {
  let o = typeof t == "object" ? t : {
    excludeContent: !!t,
    decodedMappings: !1
  },
      r = I(n, e);
  return new M(D(r), o);
}

export { $ as default };