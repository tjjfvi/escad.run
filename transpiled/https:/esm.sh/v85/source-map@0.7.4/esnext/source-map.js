/* esm.sh - esbuild bundle(source-map@0.7.4) esnext production */
import __path$ from "/transpiled/https://esm.sh/v85/path-browserify@1.0.1/esnext/path-browserify.bundle.js";
import __fs$ from "/transpiled/https://esm.sh/v85/node_fs.js";
var Se = Object.create;
var B = Object.defineProperty;
var Me = Object.getOwnPropertyDescriptor;
var Ae = Object.getOwnPropertyNames;
var Oe = Object.getPrototypeOf,
    Re = Object.prototype.hasOwnProperty;

var g = (i, e) => B(i, "name", {
  value: e,
  configurable: !0
}),
    Z = (i => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(i, {
  get: (e, t) => (typeof require != "undefined" ? require : e)[t]
}) : i)(function (i) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + i + '" is not supported');
});

var C = (i, e) => () => (e || i((e = {
  exports: {}
}).exports, e), e.exports);

var xe = (i, e, t, n) => {
  if (e && typeof e == "object" || typeof e == "function") for (let r of Ae(e)) !Re.call(i, r) && r !== t && B(i, r, {
    get: () => e[r],
    enumerable: !(n = Me(e, r)) || n.enumerable
  });
  return i;
};

var H = (i, e, t) => (t = i != null ? Se(Oe(i)) : {}, xe(e || !i || !i.__esModule ? B(t, "default", {
  value: i,
  enumerable: !0
}) : t, i));

var te = C(ne => {
  var ee = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");

  ne.encode = function (i) {
    if (0 <= i && i < ee.length) return ee[i];
    throw new TypeError("Must be between 0 and 63: " + i);
  };
});
var $ = C(oe => {
  var ve = te(),
      re = 5,
      ie = 1 << re,
      Ie = ie - 1,
      Ge = ie;

  function Ne(i) {
    return i < 0 ? (-i << 1) + 1 : (i << 1) + 0;
  }

  g(Ne, "toVLQSigned");
  oe.encode = g(function (e) {
    let t = "",
        n,
        r = Ne(e);

    do n = r & Ie, r >>>= re, r > 0 && (n |= Ge), t += ve.encode(n); while (r > 0);

    return t;
  }, "base64VLQ_encode");
});
var v = C(w => {
  function Te(i, e, t) {
    if (e in i) return i[e];
    if (arguments.length === 3) return t;
    throw new Error('"' + e + '" is a required argument.');
  }

  g(Te, "getArg");
  w.getArg = Te;
  var se = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
      Ue = /^data:.+\,.+$/;

  function x(i) {
    let e = i.match(se);
    return e ? {
      scheme: e[1],
      auth: e[2],
      host: e[3],
      port: e[4],
      path: e[5]
    } : null;
  }

  g(x, "urlParse");
  w.urlParse = x;

  function M(i) {
    let e = "";
    return i.scheme && (e += i.scheme + ":"), e += "//", i.auth && (e += i.auth + "@"), i.host && (e += i.host), i.port && (e += ":" + i.port), i.path && (e += i.path), e;
  }

  g(M, "urlGenerate");
  w.urlGenerate = M;
  var Pe = 32;

  function De(i) {
    let e = [];
    return function (t) {
      for (let r = 0; r < e.length; r++) if (e[r].input === t) {
        let o = e[0];
        return e[0] = e[r], e[r] = o, e[0].result;
      }

      let n = i(t);
      return e.unshift({
        input: t,
        result: n
      }), e.length > Pe && e.pop(), n;
    };
  }

  g(De, "lruMemoize");
  var k = De(g(function (e) {
    let t = e,
        n = x(e);

    if (n) {
      if (!n.path) return e;
      t = n.path;
    }

    let r = w.isAbsolute(t),
        o = [],
        s = 0,
        u = 0;

    for (;;) if (s = u, u = t.indexOf("/", s), u === -1) {
      o.push(t.slice(s));
      break;
    } else for (o.push(t.slice(s, u)); u < t.length && t[u] === "/";) u++;

    let l = 0;

    for (u = o.length - 1; u >= 0; u--) {
      let c = o[u];
      c === "." ? o.splice(u, 1) : c === ".." ? l++ : l > 0 && (c === "" ? (o.splice(u + 1, l), l = 0) : (o.splice(u, 2), l--));
    }

    return t = o.join("/"), t === "" && (t = r ? "/" : "."), n ? (n.path = t, M(n)) : t;
  }, "normalize"));
  w.normalize = k;

  function le(i, e) {
    i === "" && (i = "."), e === "" && (e = ".");
    let t = x(e),
        n = x(i);
    if (n && (i = n.path || "/"), t && !t.scheme) return n && (t.scheme = n.scheme), M(t);
    if (t || e.match(Ue)) return e;
    if (n && !n.host && !n.path) return n.host = e, M(n);
    let r = e.charAt(0) === "/" ? e : k(i.replace(/\/+$/, "") + "/" + e);
    return n ? (n.path = r, M(n)) : r;
  }

  g(le, "join");
  w.join = le;

  w.isAbsolute = function (i) {
    return i.charAt(0) === "/" || se.test(i);
  };

  function qe(i, e) {
    i === "" && (i = "."), i = i.replace(/\/$/, "");
    let t = 0;

    for (; e.indexOf(i + "/") !== 0;) {
      let n = i.lastIndexOf("/");
      if (n < 0 || (i = i.slice(0, n), i.match(/^([^\/]+:\/)?\/*$/))) return e;
      ++t;
    }

    return Array(t + 1).join("../") + e.substr(i.length + 1);
  }

  g(qe, "relative");
  w.relative = qe;

  var ue = function () {
    return !("__proto__" in Object.create(null));
  }();

  function ce(i) {
    return i;
  }

  g(ce, "identity");

  function je(i) {
    return ae(i) ? "$" + i : i;
  }

  g(je, "toSetString");
  w.toSetString = ue ? ce : je;

  function We(i) {
    return ae(i) ? i.slice(1) : i;
  }

  g(We, "fromSetString");
  w.fromSetString = ue ? ce : We;

  function ae(i) {
    if (!i) return !1;
    let e = i.length;
    if (e < 9 || i.charCodeAt(e - 1) !== 95 || i.charCodeAt(e - 2) !== 95 || i.charCodeAt(e - 3) !== 111 || i.charCodeAt(e - 4) !== 116 || i.charCodeAt(e - 5) !== 111 || i.charCodeAt(e - 6) !== 114 || i.charCodeAt(e - 7) !== 112 || i.charCodeAt(e - 8) !== 95 || i.charCodeAt(e - 9) !== 95) return !1;

    for (let t = e - 10; t >= 0; t--) if (i.charCodeAt(t) !== 36) return !1;

    return !0;
  }

  g(ae, "isProtoString");

  function ze(i, e, t) {
    let n = A(i.source, e.source);
    return n !== 0 || (n = i.originalLine - e.originalLine, n !== 0) || (n = i.originalColumn - e.originalColumn, n !== 0 || t) || (n = i.generatedColumn - e.generatedColumn, n !== 0) || (n = i.generatedLine - e.generatedLine, n !== 0) ? n : A(i.name, e.name);
  }

  g(ze, "compareByOriginalPositions");
  w.compareByOriginalPositions = ze;

  function Be(i, e, t) {
    let n = i.generatedLine - e.generatedLine;
    return n !== 0 || (n = i.generatedColumn - e.generatedColumn, n !== 0 || t) || (n = A(i.source, e.source), n !== 0) || (n = i.originalLine - e.originalLine, n !== 0) || (n = i.originalColumn - e.originalColumn, n !== 0) ? n : A(i.name, e.name);
  }

  g(Be, "compareByGeneratedPositionsDeflated");
  w.compareByGeneratedPositionsDeflated = Be;

  function A(i, e) {
    return i === e ? 0 : i === null ? 1 : e === null ? -1 : i > e ? 1 : -1;
  }

  g(A, "strcmp");

  function $e(i, e) {
    let t = i.generatedLine - e.generatedLine;
    return t !== 0 || (t = i.generatedColumn - e.generatedColumn, t !== 0) || (t = A(i.source, e.source), t !== 0) || (t = i.originalLine - e.originalLine, t !== 0) || (t = i.originalColumn - e.originalColumn, t !== 0) ? t : A(i.name, e.name);
  }

  g($e, "compareByGeneratedPositionsInflated");
  w.compareByGeneratedPositionsInflated = $e;

  function ke(i) {
    return JSON.parse(i.replace(/^\)]}'[^\n]*\n/, ""));
  }

  g(ke, "parseSourceMapInput");
  w.parseSourceMapInput = ke;

  function Qe(i, e, t) {
    if (e = e || "", i && (i[i.length - 1] !== "/" && e[0] !== "/" && (i += "/"), e = i + e), t) {
      let n = x(t);
      if (!n) throw new Error("sourceMapURL could not be parsed");

      if (n.path) {
        let r = n.path.lastIndexOf("/");
        r >= 0 && (n.path = n.path.substring(0, r + 1));
      }

      e = le(M(n), e);
    }

    return k(e);
  }

  g(Qe, "computeSourceURL");
  w.computeSourceURL = Qe;
});
var Q = C(fe => {
  var O = class {
    constructor() {
      this._array = [], this._set = new Map();
    }

    static fromArray(e, t) {
      let n = new O();

      for (let r = 0, o = e.length; r < o; r++) n.add(e[r], t);

      return n;
    }

    size() {
      return this._set.size;
    }

    add(e, t) {
      let n = this.has(e),
          r = this._array.length;
      (!n || t) && this._array.push(e), n || this._set.set(e, r);
    }

    has(e) {
      return this._set.has(e);
    }

    indexOf(e) {
      let t = this._set.get(e);

      if (t >= 0) return t;
      throw new Error('"' + e + '" is not in the set.');
    }

    at(e) {
      if (e >= 0 && e < this._array.length) return this._array[e];
      throw new Error("No element indexed by " + e);
    }

    toArray() {
      return this._array.slice();
    }

  };
  g(O, "ArraySet");
  fe.ArraySet = O;
});
var de = C(he => {
  var ge = v();

  function Ve(i, e) {
    let t = i.generatedLine,
        n = e.generatedLine,
        r = i.generatedColumn,
        o = e.generatedColumn;
    return n > t || n == t && o >= r || ge.compareByGeneratedPositionsInflated(i, e) <= 0;
  }

  g(Ve, "generatedPositionAfter");
  var P = class {
    constructor() {
      this._array = [], this._sorted = !0, this._last = {
        generatedLine: -1,
        generatedColumn: 0
      };
    }

    unsortedForEach(e, t) {
      this._array.forEach(e, t);
    }

    add(e) {
      Ve(this._last, e) ? (this._last = e, this._array.push(e)) : (this._sorted = !1, this._array.push(e));
    }

    toArray() {
      return this._sorted || (this._array.sort(ge.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
    }

  };
  g(P, "MappingList");
  he.MappingList = P;
});
var V = C(me => {
  var I = $(),
      p = v(),
      D = Q().ArraySet,
      Fe = de().MappingList,
      y = class {
    constructor(e) {
      e || (e = {}), this._file = p.getArg(e, "file", null), this._sourceRoot = p.getArg(e, "sourceRoot", null), this._skipValidation = p.getArg(e, "skipValidation", !1), this._sources = new D(), this._names = new D(), this._mappings = new Fe(), this._sourcesContents = null;
    }

    static fromSourceMap(e) {
      let t = e.sourceRoot,
          n = new y({
        file: e.file,
        sourceRoot: t
      });
      return e.eachMapping(function (r) {
        let o = {
          generated: {
            line: r.generatedLine,
            column: r.generatedColumn
          }
        };
        r.source != null && (o.source = r.source, t != null && (o.source = p.relative(t, o.source)), o.original = {
          line: r.originalLine,
          column: r.originalColumn
        }, r.name != null && (o.name = r.name)), n.addMapping(o);
      }), e.sources.forEach(function (r) {
        let o = r;
        t !== null && (o = p.relative(t, r)), n._sources.has(o) || n._sources.add(o);
        let s = e.sourceContentFor(r);
        s != null && n.setSourceContent(r, s);
      }), n;
    }

    addMapping(e) {
      let t = p.getArg(e, "generated"),
          n = p.getArg(e, "original", null),
          r = p.getArg(e, "source", null),
          o = p.getArg(e, "name", null);
      this._skipValidation || this._validateMapping(t, n, r, o), r != null && (r = String(r), this._sources.has(r) || this._sources.add(r)), o != null && (o = String(o), this._names.has(o) || this._names.add(o)), this._mappings.add({
        generatedLine: t.line,
        generatedColumn: t.column,
        originalLine: n != null && n.line,
        originalColumn: n != null && n.column,
        source: r,
        name: o
      });
    }

    setSourceContent(e, t) {
      let n = e;
      this._sourceRoot != null && (n = p.relative(this._sourceRoot, n)), t != null ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[p.toSetString(n)] = t) : this._sourcesContents && (delete this._sourcesContents[p.toSetString(n)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
    }

    applySourceMap(e, t, n) {
      let r = t;

      if (t == null) {
        if (e.file == null) throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
        r = e.file;
      }

      let o = this._sourceRoot;
      o != null && (r = p.relative(o, r));
      let s = this._mappings.toArray().length > 0 ? new D() : this._sources,
          u = new D();
      this._mappings.unsortedForEach(function (l) {
        if (l.source === r && l.originalLine != null) {
          let d = e.originalPositionFor({
            line: l.originalLine,
            column: l.originalColumn
          });
          d.source != null && (l.source = d.source, n != null && (l.source = p.join(n, l.source)), o != null && (l.source = p.relative(o, l.source)), l.originalLine = d.line, l.originalColumn = d.column, d.name != null && (l.name = d.name));
        }

        let c = l.source;
        c != null && !s.has(c) && s.add(c);
        let f = l.name;
        f != null && !u.has(f) && u.add(f);
      }, this), this._sources = s, this._names = u, e.sources.forEach(function (l) {
        let c = e.sourceContentFor(l);
        c != null && (n != null && (l = p.join(n, l)), o != null && (l = p.relative(o, l)), this.setSourceContent(l, c));
      }, this);
    }

    _validateMapping(e, t, n, r) {
      if (t && typeof t.line != "number" && typeof t.column != "number") throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");

      if (!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0 && !t && !n && !r)) {
        if (!(e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && n)) throw new Error("Invalid mapping: " + JSON.stringify({
          generated: e,
          source: n,
          original: t,
          name: r
        }));
      }
    }

    _serializeMappings() {
      let e = 0,
          t = 1,
          n = 0,
          r = 0,
          o = 0,
          s = 0,
          u = "",
          l,
          c,
          f,
          d,
          m = this._mappings.toArray();

      for (let h = 0, E = m.length; h < E; h++) {
        if (c = m[h], l = "", c.generatedLine !== t) for (e = 0; c.generatedLine !== t;) l += ";", t++;else if (h > 0) {
          if (!p.compareByGeneratedPositionsInflated(c, m[h - 1])) continue;
          l += ",";
        }
        l += I.encode(c.generatedColumn - e), e = c.generatedColumn, c.source != null && (d = this._sources.indexOf(c.source), l += I.encode(d - s), s = d, l += I.encode(c.originalLine - 1 - r), r = c.originalLine - 1, l += I.encode(c.originalColumn - n), n = c.originalColumn, c.name != null && (f = this._names.indexOf(c.name), l += I.encode(f - o), o = f)), u += l;
      }

      return u;
    }

    _generateSourcesContent(e, t) {
      return e.map(function (n) {
        if (!this._sourcesContents) return null;
        t != null && (n = p.relative(t, n));
        let r = p.toSetString(n);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, r) ? this._sourcesContents[r] : null;
      }, this);
    }

    toJSON() {
      let e = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
      };
      return this._file != null && (e.file = this._file), this._sourceRoot != null && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e;
    }

    toString() {
      return JSON.stringify(this.toJSON());
    }

  };
  g(y, "SourceMapGenerator");
  y.prototype._version = 3;
  me.SourceMapGenerator = y;
});

var _e = C(b => {
  b.GREATEST_LOWER_BOUND = 1;
  b.LEAST_UPPER_BOUND = 2;

  function F(i, e, t, n, r, o) {
    let s = Math.floor((e - i) / 2) + i,
        u = r(t, n[s], !0);
    return u === 0 ? s : u > 0 ? e - s > 1 ? F(s, e, t, n, r, o) : o == b.LEAST_UPPER_BOUND ? e < n.length ? e : -1 : s : s - i > 1 ? F(i, s, t, n, r, o) : o == b.LEAST_UPPER_BOUND ? s : i < 0 ? -1 : i;
  }

  g(F, "recursiveSearch");
  b.search = g(function (e, t, n, r) {
    if (t.length === 0) return -1;
    let o = F(-1, t.length, e, t, n, r || b.GREATEST_LOWER_BOUND);
    if (o < 0) return -1;

    for (; o - 1 >= 0 && n(t[o], t[o - 1], !0) === 0;) --o;

    return o;
  }, "search");
});

var J = C((mn, G) => {
  var Je = function () {
    return typeof window < "u" && this === window;
  }.call();

  if (Je) {
    let i = null;
    G.exports = g(function () {
      if (typeof i == "string") return fetch(i).then(t => t.arrayBuffer());
      if (i instanceof ArrayBuffer) return Promise.resolve(i);
      throw new Error("You must provide the string URL or ArrayBuffer contents of lib/mappings.wasm by calling SourceMapConsumer.initialize({ 'lib/mappings.wasm': ... }) before using SourceMapConsumer");
    }, "readWasm"), G.exports.initialize = e => i = e;
  } else {
    let i = __fs$,
        e = __path$;
    G.exports = g(function () {
      return new Promise((n, r) => {
        let o = e.join("https://esm.sh/v85/source-map@0.7.4/esnext", "mappings.wasm");
        i.readFile(o, null, (s, u) => {
          if (s) {
            r(s);
            return;
          }

          n(u.buffer);
        });
      });
    }, "readWasm"), G.exports.initialize = t => {
      console.debug("SourceMapConsumer.initialize is a no-op when running in node.js");
    };
  }
});
var we = C((_n, pe) => {
  var Xe = J();

  function Ke() {
    this.generatedLine = 0, this.generatedColumn = 0, this.lastGeneratedColumn = null, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }

  g(Ke, "Mapping");
  var N = null;
  pe.exports = g(function () {
    if (N) return N;
    let e = [];
    return N = Xe().then(t => WebAssembly.instantiate(t, {
      env: {
        mapping_callback(n, r, o, s, u, l, c, f, d, m) {
          let h = new Ke();
          h.generatedLine = n + 1, h.generatedColumn = r, o && (h.lastGeneratedColumn = s - 1), u && (h.source = l, h.originalLine = c + 1, h.originalColumn = f, d && (h.name = m)), e[e.length - 1](h);
        },

        start_all_generated_locations_for() {
          console.time("all_generated_locations_for");
        },

        end_all_generated_locations_for() {
          console.timeEnd("all_generated_locations_for");
        },

        start_compute_column_spans() {
          console.time("compute_column_spans");
        },

        end_compute_column_spans() {
          console.timeEnd("compute_column_spans");
        },

        start_generated_location_for() {
          console.time("generated_location_for");
        },

        end_generated_location_for() {
          console.timeEnd("generated_location_for");
        },

        start_original_location_for() {
          console.time("original_location_for");
        },

        end_original_location_for() {
          console.timeEnd("original_location_for");
        },

        start_parse_mappings() {
          console.time("parse_mappings");
        },

        end_parse_mappings() {
          console.timeEnd("parse_mappings");
        },

        start_sort_by_generated_location() {
          console.time("sort_by_generated_location");
        },

        end_sort_by_generated_location() {
          console.timeEnd("sort_by_generated_location");
        },

        start_sort_by_original_location() {
          console.time("sort_by_original_location");
        },

        end_sort_by_original_location() {
          console.timeEnd("sort_by_original_location");
        }

      }
    })).then(t => ({
      exports: t.instance.exports,
      withMappingCallback: (n, r) => {
        e.push(n);

        try {
          r();
        } finally {
          e.pop();
        }
      }
    })).then(null, t => {
      throw N = null, t;
    }), N;
  }, "wasm");
});
var Ce = C(j => {
  var a = v(),
      X = _e(),
      q = Q().ArraySet,
      pn = $(),
      Ye = J(),
      Ze = we(),
      K = Symbol("smcInternal"),
      _ = class {
    constructor(e, t) {
      return e == K ? Promise.resolve(this) : He(e, t);
    }

    static initialize(e) {
      Ye.initialize(e["lib/mappings.wasm"]);
    }

    static fromSourceMap(e, t) {
      return en(e, t);
    }

    static async with(e, t, n) {
      let r = await new _(e, t);

      try {
        return await n(r);
      } finally {
        r.destroy();
      }
    }

    _parseMappings(e, t) {
      throw new Error("Subclasses must implement _parseMappings");
    }

    eachMapping(e, t, n) {
      throw new Error("Subclasses must implement eachMapping");
    }

    allGeneratedPositionsFor(e) {
      throw new Error("Subclasses must implement allGeneratedPositionsFor");
    }

    destroy() {
      throw new Error("Subclasses must implement destroy");
    }

  };

  g(_, "SourceMapConsumer");
  _.prototype._version = 3;
  _.GENERATED_ORDER = 1;
  _.ORIGINAL_ORDER = 2;
  _.GREATEST_LOWER_BOUND = 1;
  _.LEAST_UPPER_BOUND = 2;
  j.SourceMapConsumer = _;
  var L = class extends _ {
    constructor(e, t) {
      return super(K).then(n => {
        let r = e;
        typeof e == "string" && (r = a.parseSourceMapInput(e));
        let o = a.getArg(r, "version"),
            s = a.getArg(r, "sources"),
            u = a.getArg(r, "names", []),
            l = a.getArg(r, "sourceRoot", null),
            c = a.getArg(r, "sourcesContent", null),
            f = a.getArg(r, "mappings"),
            d = a.getArg(r, "file", null);
        if (o != n._version) throw new Error("Unsupported version: " + o);
        return l && (l = a.normalize(l)), s = s.map(String).map(a.normalize).map(function (m) {
          return l && a.isAbsolute(l) && a.isAbsolute(m) ? a.relative(l, m) : m;
        }), n._names = q.fromArray(u.map(String), !0), n._sources = q.fromArray(s, !0), n._absoluteSources = n._sources.toArray().map(function (m) {
          return a.computeSourceURL(l, m, t);
        }), n.sourceRoot = l, n.sourcesContent = c, n._mappings = f, n._sourceMapURL = t, n.file = d, n._computedColumnSpans = !1, n._mappingsPtr = 0, n._wasm = null, Ze().then(m => (n._wasm = m, n));
      });
    }

    _findSourceIndex(e) {
      let t = e;
      if (this.sourceRoot != null && (t = a.relative(this.sourceRoot, t)), this._sources.has(t)) return this._sources.indexOf(t);

      for (let n = 0; n < this._absoluteSources.length; ++n) if (this._absoluteSources[n] == e) return n;

      return -1;
    }

    static fromSourceMap(e, t) {
      return new L(e.toString());
    }

    get sources() {
      return this._absoluteSources.slice();
    }

    _getMappingsPtr() {
      return this._mappingsPtr === 0 && this._parseMappings(this._mappings, this.sourceRoot), this._mappingsPtr;
    }

    _parseMappings(e, t) {
      let n = e.length,
          r = this._wasm.exports.allocate_mappings(n),
          o = new Uint8Array(this._wasm.exports.memory.buffer, r, n);

      for (let u = 0; u < n; u++) o[u] = e.charCodeAt(u);

      let s = this._wasm.exports.parse_mappings(r);

      if (!s) {
        let u = this._wasm.exports.get_last_error(),
            l = `Error parsing mappings (code ${u}): `;

        switch (u) {
          case 1:
            l += "the mappings contained a negative line, column, source index, or name index";
            break;

          case 2:
            l += "the mappings contained a number larger than 2**32";
            break;

          case 3:
            l += "reached EOF while in the middle of parsing a VLQ";
            break;

          case 4:
            l += "invalid base 64 character while parsing a VLQ";
            break;

          default:
            l += "unknown error code";
            break;
        }

        throw new Error(l);
      }

      this._mappingsPtr = s;
    }

    eachMapping(e, t, n) {
      let r = t || null,
          o = n || _.GENERATED_ORDER,
          s = this.sourceRoot;

      this._wasm.withMappingCallback(u => {
        u.source !== null && (u.source = this._sources.at(u.source), u.source = a.computeSourceURL(s, u.source, this._sourceMapURL), u.name !== null && (u.name = this._names.at(u.name))), e.call(r, u);
      }, () => {
        switch (o) {
          case _.GENERATED_ORDER:
            this._wasm.exports.by_generated_location(this._getMappingsPtr());

            break;

          case _.ORIGINAL_ORDER:
            this._wasm.exports.by_original_location(this._getMappingsPtr());

            break;

          default:
            throw new Error("Unknown order of iteration.");
        }
      });
    }

    allGeneratedPositionsFor(e) {
      let t = a.getArg(e, "source"),
          n = a.getArg(e, "line"),
          r = e.column || 0;
      if (t = this._findSourceIndex(t), t < 0) return [];
      if (n < 1) throw new Error("Line numbers must be >= 1");
      if (r < 0) throw new Error("Column numbers must be >= 0");
      let o = [];
      return this._wasm.withMappingCallback(s => {
        let u = s.lastGeneratedColumn;
        this._computedColumnSpans && u === null && (u = 1 / 0), o.push({
          line: s.generatedLine,
          column: s.generatedColumn,
          lastColumn: u
        });
      }, () => {
        this._wasm.exports.all_generated_locations_for(this._getMappingsPtr(), t, n - 1, "column" in e, r);
      }), o;
    }

    destroy() {
      this._mappingsPtr !== 0 && (this._wasm.exports.free_mappings(this._mappingsPtr), this._mappingsPtr = 0);
    }

    computeColumnSpans() {
      this._computedColumnSpans || (this._wasm.exports.compute_column_spans(this._getMappingsPtr()), this._computedColumnSpans = !0);
    }

    originalPositionFor(e) {
      let t = {
        generatedLine: a.getArg(e, "line"),
        generatedColumn: a.getArg(e, "column")
      };
      if (t.generatedLine < 1) throw new Error("Line numbers must be >= 1");
      if (t.generatedColumn < 0) throw new Error("Column numbers must be >= 0");
      let n = a.getArg(e, "bias", _.GREATEST_LOWER_BOUND);
      n == null && (n = _.GREATEST_LOWER_BOUND);
      let r;

      if (this._wasm.withMappingCallback(o => r = o, () => {
        this._wasm.exports.original_location_for(this._getMappingsPtr(), t.generatedLine - 1, t.generatedColumn, n);
      }), r && r.generatedLine === t.generatedLine) {
        let o = a.getArg(r, "source", null);
        o !== null && (o = this._sources.at(o), o = a.computeSourceURL(this.sourceRoot, o, this._sourceMapURL));
        let s = a.getArg(r, "name", null);
        return s !== null && (s = this._names.at(s)), {
          source: o,
          line: a.getArg(r, "originalLine", null),
          column: a.getArg(r, "originalColumn", null),
          name: s
        };
      }

      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    hasContentsOfAllSources() {
      return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function (e) {
        return e == null;
      }) : !1;
    }

    sourceContentFor(e, t) {
      if (!this.sourcesContent) return null;

      let n = this._findSourceIndex(e);

      if (n >= 0) return this.sourcesContent[n];
      let r = e;
      this.sourceRoot != null && (r = a.relative(this.sourceRoot, r));
      let o;

      if (this.sourceRoot != null && (o = a.urlParse(this.sourceRoot))) {
        let s = r.replace(/^file:\/\//, "");
        if (o.scheme == "file" && this._sources.has(s)) return this.sourcesContent[this._sources.indexOf(s)];
        if ((!o.path || o.path == "/") && this._sources.has("/" + r)) return this.sourcesContent[this._sources.indexOf("/" + r)];
      }

      if (t) return null;
      throw new Error('"' + r + '" is not in the SourceMap.');
    }

    generatedPositionFor(e) {
      let t = a.getArg(e, "source");
      if (t = this._findSourceIndex(t), t < 0) return {
        line: null,
        column: null,
        lastColumn: null
      };
      let n = {
        source: t,
        originalLine: a.getArg(e, "line"),
        originalColumn: a.getArg(e, "column")
      };
      if (n.originalLine < 1) throw new Error("Line numbers must be >= 1");
      if (n.originalColumn < 0) throw new Error("Column numbers must be >= 0");
      let r = a.getArg(e, "bias", _.GREATEST_LOWER_BOUND);
      r == null && (r = _.GREATEST_LOWER_BOUND);
      let o;

      if (this._wasm.withMappingCallback(s => o = s, () => {
        this._wasm.exports.generated_location_for(this._getMappingsPtr(), n.source, n.originalLine - 1, n.originalColumn, r);
      }), o && o.source === n.source) {
        let s = o.lastGeneratedColumn;
        return this._computedColumnSpans && s === null && (s = 1 / 0), {
          line: a.getArg(o, "generatedLine", null),
          column: a.getArg(o, "generatedColumn", null),
          lastColumn: s
        };
      }

      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

  };
  g(L, "BasicSourceMapConsumer");
  L.prototype.consumer = _;
  j.BasicSourceMapConsumer = L;
  var T = class extends _ {
    constructor(e, t) {
      return super(K).then(n => {
        let r = e;
        typeof e == "string" && (r = a.parseSourceMapInput(e));
        let o = a.getArg(r, "version"),
            s = a.getArg(r, "sections");
        if (o != n._version) throw new Error("Unsupported version: " + o);
        n._sources = new q(), n._names = new q(), n.__generatedMappings = null, n.__originalMappings = null, n.__generatedMappingsUnsorted = null, n.__originalMappingsUnsorted = null;
        let u = {
          line: -1,
          column: 0
        };
        return Promise.all(s.map(l => {
          if (l.url) throw new Error("Support for url field in sections not implemented.");
          let c = a.getArg(l, "offset"),
              f = a.getArg(c, "line"),
              d = a.getArg(c, "column");
          if (f < u.line || f === u.line && d < u.column) throw new Error("Section offsets must be ordered and non-overlapping.");
          return u = c, new _(a.getArg(l, "map"), t).then(h => ({
            generatedOffset: {
              generatedLine: f + 1,
              generatedColumn: d + 1
            },
            consumer: h
          }));
        })).then(l => (n._sections = l, n));
      });
    }

    get _generatedMappings() {
      return this.__generatedMappings || this._sortGeneratedMappings(), this.__generatedMappings;
    }

    get _originalMappings() {
      return this.__originalMappings || this._sortOriginalMappings(), this.__originalMappings;
    }

    get _generatedMappingsUnsorted() {
      return this.__generatedMappingsUnsorted || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappingsUnsorted;
    }

    get _originalMappingsUnsorted() {
      return this.__originalMappingsUnsorted || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappingsUnsorted;
    }

    _sortGeneratedMappings() {
      let e = this._generatedMappingsUnsorted;
      e.sort(a.compareByGeneratedPositionsDeflated), this.__generatedMappings = e;
    }

    _sortOriginalMappings() {
      let e = this._originalMappingsUnsorted;
      e.sort(a.compareByOriginalPositions), this.__originalMappings = e;
    }

    get sources() {
      let e = [];

      for (let t = 0; t < this._sections.length; t++) for (let n = 0; n < this._sections[t].consumer.sources.length; n++) e.push(this._sections[t].consumer.sources[n]);

      return e;
    }

    originalPositionFor(e) {
      let t = {
        generatedLine: a.getArg(e, "line"),
        generatedColumn: a.getArg(e, "column")
      },
          n = X.search(t, this._sections, function (o, s) {
        let u = o.generatedLine - s.generatedOffset.generatedLine;
        return u || o.generatedColumn - s.generatedOffset.generatedColumn;
      }),
          r = this._sections[n];
      return r ? r.consumer.originalPositionFor({
        line: t.generatedLine - (r.generatedOffset.generatedLine - 1),
        column: t.generatedColumn - (r.generatedOffset.generatedLine === t.generatedLine ? r.generatedOffset.generatedColumn - 1 : 0),
        bias: e.bias
      }) : {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    hasContentsOfAllSources() {
      return this._sections.every(function (e) {
        return e.consumer.hasContentsOfAllSources();
      });
    }

    sourceContentFor(e, t) {
      for (let n = 0; n < this._sections.length; n++) {
        let o = this._sections[n].consumer.sourceContentFor(e, !0);

        if (o) return o;
      }

      if (t) return null;
      throw new Error('"' + e + '" is not in the SourceMap.');
    }

    generatedPositionFor(e) {
      for (let t = 0; t < this._sections.length; t++) {
        let n = this._sections[t];
        if (n.consumer._findSourceIndex(a.getArg(e, "source")) === -1) continue;
        let r = n.consumer.generatedPositionFor(e);
        if (r) return {
          line: r.line + (n.generatedOffset.generatedLine - 1),
          column: r.column + (n.generatedOffset.generatedLine === r.line ? n.generatedOffset.generatedColumn - 1 : 0)
        };
      }

      return {
        line: null,
        column: null
      };
    }

    _parseMappings(e, t) {
      let n = this.__generatedMappingsUnsorted = [],
          r = this.__originalMappingsUnsorted = [];

      for (let o = 0; o < this._sections.length; o++) {
        let s = this._sections[o],
            u = [];
        s.consumer.eachMapping(l => u.push(l));

        for (let l = 0; l < u.length; l++) {
          let c = u[l],
              f = a.computeSourceURL(s.consumer.sourceRoot, null, this._sourceMapURL);
          this._sources.add(f), f = this._sources.indexOf(f);
          let d = null;
          c.name && (this._names.add(c.name), d = this._names.indexOf(c.name));
          let m = {
            source: f,
            generatedLine: c.generatedLine + (s.generatedOffset.generatedLine - 1),
            generatedColumn: c.generatedColumn + (s.generatedOffset.generatedLine === c.generatedLine ? s.generatedOffset.generatedColumn - 1 : 0),
            originalLine: c.originalLine,
            originalColumn: c.originalColumn,
            name: d
          };
          n.push(m), typeof m.originalLine == "number" && r.push(m);
        }
      }
    }

    eachMapping(e, t, n) {
      let r = t || null,
          o = n || _.GENERATED_ORDER,
          s;

      switch (o) {
        case _.GENERATED_ORDER:
          s = this._generatedMappings;
          break;

        case _.ORIGINAL_ORDER:
          s = this._originalMappings;
          break;

        default:
          throw new Error("Unknown order of iteration.");
      }

      let u = this.sourceRoot;
      s.map(function (l) {
        let c = null;
        return l.source !== null && (c = this._sources.at(l.source), c = a.computeSourceURL(u, c, this._sourceMapURL)), {
          source: c,
          generatedLine: l.generatedLine,
          generatedColumn: l.generatedColumn,
          originalLine: l.originalLine,
          originalColumn: l.originalColumn,
          name: l.name === null ? null : this._names.at(l.name)
        };
      }, this).forEach(e, r);
    }

    _findMapping(e, t, n, r, o, s) {
      if (e[n] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + e[n]);
      if (e[r] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + e[r]);
      return X.search(e, t, o, s);
    }

    allGeneratedPositionsFor(e) {
      let t = a.getArg(e, "line"),
          n = {
        source: a.getArg(e, "source"),
        originalLine: t,
        originalColumn: a.getArg(e, "column", 0)
      };
      if (n.source = this._findSourceIndex(n.source), n.source < 0) return [];
      if (n.originalLine < 1) throw new Error("Line numbers must be >= 1");
      if (n.originalColumn < 0) throw new Error("Column numbers must be >= 0");

      let r = [],
          o = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", a.compareByOriginalPositions, X.LEAST_UPPER_BOUND);

      if (o >= 0) {
        let s = this._originalMappings[o];

        if (e.column === void 0) {
          let u = s.originalLine;

          for (; s && s.originalLine === u;) {
            let l = s.lastGeneratedColumn;
            this._computedColumnSpans && l === null && (l = 1 / 0), r.push({
              line: a.getArg(s, "generatedLine", null),
              column: a.getArg(s, "generatedColumn", null),
              lastColumn: l
            }), s = this._originalMappings[++o];
          }
        } else {
          let u = s.originalColumn;

          for (; s && s.originalLine === t && s.originalColumn == u;) {
            let l = s.lastGeneratedColumn;
            this._computedColumnSpans && l === null && (l = 1 / 0), r.push({
              line: a.getArg(s, "generatedLine", null),
              column: a.getArg(s, "generatedColumn", null),
              lastColumn: l
            }), s = this._originalMappings[++o];
          }
        }
      }

      return r;
    }

    destroy() {
      for (let e = 0; e < this._sections.length; e++) this._sections[e].consumer.destroy();
    }

  };
  g(T, "IndexedSourceMapConsumer");
  j.IndexedSourceMapConsumer = T;

  function He(i, e) {
    let t = i;
    typeof i == "string" && (t = a.parseSourceMapInput(i));
    let n = t.sections != null ? new T(t, e) : new L(t, e);
    return Promise.resolve(n);
  }

  g(He, "_factory");

  function en(i, e) {
    return L.fromSourceMap(i, e);
  }

  g(en, "_factoryBSM");
});
var Le = C(Ee => {
  var nn = V().SourceMapGenerator,
      W = v(),
      tn = /(\r?\n)/,
      rn = 10,
      R = "$$$isSourceNode$$$",
      S = class {
    constructor(e, t, n, r, o) {
      this.children = [], this.sourceContents = {}, this.line = e ?? null, this.column = t ?? null, this.source = n ?? null, this.name = o ?? null, this[R] = !0, r != null && this.add(r);
    }

    static fromStringWithSourceMap(e, t, n) {
      let r = new S(),
          o = e.split(tn),
          s = 0,
          u = g(function () {
        let h = U(),
            E = U() || "";
        return h + E;

        function U() {
          return s < o.length ? o[s++] : void 0;
        }
      }, "shiftNextLine"),
          l = 1,
          c = 0,
          f = null,
          d;
      return t.eachMapping(function (h) {
        if (f !== null) if (l < h.generatedLine) m(f, u()), l++, c = 0;else {
          d = o[s] || "";
          let E = d.substr(0, h.generatedColumn - c);
          o[s] = d.substr(h.generatedColumn - c), c = h.generatedColumn, m(f, E), f = h;
          return;
        }

        for (; l < h.generatedLine;) r.add(u()), l++;

        c < h.generatedColumn && (d = o[s] || "", r.add(d.substr(0, h.generatedColumn)), o[s] = d.substr(h.generatedColumn), c = h.generatedColumn), f = h;
      }, this), s < o.length && (f && m(f, u()), r.add(o.splice(s).join(""))), t.sources.forEach(function (h) {
        let E = t.sourceContentFor(h);
        E != null && (n != null && (h = W.join(n, h)), r.setSourceContent(h, E));
      }), r;

      function m(h, E) {
        if (h === null || h.source === void 0) r.add(E);else {
          let U = n ? W.join(n, h.source) : h.source;
          r.add(new S(h.originalLine, h.originalColumn, U, E, h.name));
        }
      }

      g(m, "addMappingWithCode");
    }

    add(e) {
      if (Array.isArray(e)) e.forEach(function (t) {
        this.add(t);
      }, this);else if (e[R] || typeof e == "string") e && this.children.push(e);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
      return this;
    }

    prepend(e) {
      if (Array.isArray(e)) for (let t = e.length - 1; t >= 0; t--) this.prepend(e[t]);else if (e[R] || typeof e == "string") this.children.unshift(e);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
      return this;
    }

    walk(e) {
      let t;

      for (let n = 0, r = this.children.length; n < r; n++) t = this.children[n], t[R] ? t.walk(e) : t !== "" && e(t, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
    }

    join(e) {
      let t,
          n,
          r = this.children.length;

      if (r > 0) {
        for (t = [], n = 0; n < r - 1; n++) t.push(this.children[n]), t.push(e);

        t.push(this.children[n]), this.children = t;
      }

      return this;
    }

    replaceRight(e, t) {
      let n = this.children[this.children.length - 1];
      return n[R] ? n.replaceRight(e, t) : typeof n == "string" ? this.children[this.children.length - 1] = n.replace(e, t) : this.children.push("".replace(e, t)), this;
    }

    setSourceContent(e, t) {
      this.sourceContents[W.toSetString(e)] = t;
    }

    walkSourceContents(e) {
      for (let n = 0, r = this.children.length; n < r; n++) this.children[n][R] && this.children[n].walkSourceContents(e);

      let t = Object.keys(this.sourceContents);

      for (let n = 0, r = t.length; n < r; n++) e(W.fromSetString(t[n]), this.sourceContents[t[n]]);
    }

    toString() {
      let e = "";
      return this.walk(function (t) {
        e += t;
      }), e;
    }

    toStringWithSourceMap(e) {
      let t = {
        code: "",
        line: 1,
        column: 0
      },
          n = new nn(e),
          r = !1,
          o = null,
          s = null,
          u = null,
          l = null;
      return this.walk(function (c, f) {
        t.code += c, f.source !== null && f.line !== null && f.column !== null ? ((o !== f.source || s !== f.line || u !== f.column || l !== f.name) && n.addMapping({
          source: f.source,
          original: {
            line: f.line,
            column: f.column
          },
          generated: {
            line: t.line,
            column: t.column
          },
          name: f.name
        }), o = f.source, s = f.line, u = f.column, l = f.name, r = !0) : r && (n.addMapping({
          generated: {
            line: t.line,
            column: t.column
          }
        }), o = null, r = !1);

        for (let d = 0, m = c.length; d < m; d++) c.charCodeAt(d) === rn ? (t.line++, t.column = 0, d + 1 === m ? (o = null, r = !1) : r && n.addMapping({
          source: f.source,
          original: {
            line: f.line,
            column: f.column
          },
          generated: {
            line: t.line,
            column: t.column
          },
          name: f.name
        })) : t.column++;
      }), this.walkSourceContents(function (c, f) {
        n.setSourceContent(c, f);
      }), {
        code: t.code,
        map: n
      };
    }

  };
  g(S, "SourceNode");
  Ee.SourceNode = S;
});
var Y = C(z => {
  z.SourceMapGenerator = V().SourceMapGenerator;
  z.SourceMapConsumer = Ce().SourceMapConsumer;
  z.SourceNode = Le().SourceNode;
});
var ye = H(Y()),
    be = H(Y()),
    {
  SourceMapGenerator: Ln,
  SourceMapConsumer: yn,
  SourceNode: bn
} = be,
    {
  default: on,
  ...sn
} = be,
    Sn = ye.default ?? on ?? sn;
export { yn as SourceMapConsumer, Ln as SourceMapGenerator, bn as SourceNode, Sn as default };