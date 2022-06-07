/* esm.sh - esbuild bundle(source-map@0.6.1) esnext production */
var xe = Object.create;
var W = Object.defineProperty;
var Te = Object.getOwnPropertyDescriptor;
var De = Object.getOwnPropertyNames;
var qe = Object.getPrototypeOf,
    je = Object.prototype.hasOwnProperty;

var u = (n, e) => W(n, "name", {
  value: e,
  configurable: !0
});

var w = (n, e) => () => (e || n((e = {
  exports: {}
}).exports, e), e.exports);

var Pe = (n, e, r, t) => {
  if (e && typeof e == "object" || typeof e == "function") for (let o of De(e)) !je.call(n, o) && o !== r && W(n, o, {
    get: () => e[o],
    enumerable: !(t = Te(e, o)) || t.enumerable
  });
  return n;
};

var ue = (n, e, r) => (r = n != null ? xe(qe(n)) : {}, Pe(e || !n || !n.__esModule ? W(r, "default", {
  value: n,
  enumerable: !0
}) : r, n));

var ae = w(V => {
  var le = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");

  V.encode = function (n) {
    if (0 <= n && n < le.length) return le[n];
    throw new TypeError("Must be between 0 and 63: " + n);
  };

  V.decode = function (n) {
    var e = 65,
        r = 90,
        t = 97,
        o = 122,
        i = 48,
        s = 57,
        f = 43,
        l = 47,
        h = 26,
        a = 52;
    return e <= n && n <= r ? n - e : t <= n && n <= o ? n - t + h : i <= n && n <= s ? n - i + a : n == f ? 62 : n == l ? 63 : -1;
  };
});
var Z = w(k => {
  var ce = ae(),
      J = 5,
      fe = 1 << J,
      he = fe - 1,
      ge = fe;

  function Be(n) {
    return n < 0 ? (-n << 1) + 1 : (n << 1) + 0;
  }

  u(Be, "toVLQSigned");

  function $e(n) {
    var e = (n & 1) === 1,
        r = n >> 1;
    return e ? -r : r;
  }

  u($e, "fromVLQSigned");
  k.encode = u(function (e) {
    var r = "",
        t,
        o = Be(e);

    do t = o & he, o >>>= J, o > 0 && (t |= ge), r += ce.encode(t); while (o > 0);

    return r;
  }, "base64VLQ_encode");
  k.decode = u(function (e, r, t) {
    var o = e.length,
        i = 0,
        s = 0,
        f,
        l;

    do {
      if (r >= o) throw new Error("Expected more digits in base 64 VLQ value.");
      if (l = ce.decode(e.charCodeAt(r++)), l === -1) throw new Error("Invalid base64 digit: " + e.charAt(r - 1));
      f = !!(l & ge), l &= he, i = i + (l << s), s += J;
    } while (f);

    t.value = $e(i), t.rest = r;
  }, "base64VLQ_decode");
});
var x = w(C => {
  function Ue(n, e, r) {
    if (e in n) return n[e];
    if (arguments.length === 3) return r;
    throw new Error('"' + e + '" is a required argument.');
  }

  u(Ue, "getArg");
  C.getArg = Ue;
  var de = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
      Fe = /^data:.+\,.+$/;

  function q(n) {
    var e = n.match(de);
    return e ? {
      scheme: e[1],
      auth: e[2],
      host: e[3],
      port: e[4],
      path: e[5]
    } : null;
  }

  u(q, "urlParse");
  C.urlParse = q;

  function G(n) {
    var e = "";
    return n.scheme && (e += n.scheme + ":"), e += "//", n.auth && (e += n.auth + "@"), n.host && (e += n.host), n.port && (e += ":" + n.port), n.path && (e += n.path), e;
  }

  u(G, "urlGenerate");
  C.urlGenerate = G;

  function K(n) {
    var e = n,
        r = q(n);

    if (r) {
      if (!r.path) return n;
      e = r.path;
    }

    for (var t = C.isAbsolute(e), o = e.split(/\/+/), i, s = 0, f = o.length - 1; f >= 0; f--) i = o[f], i === "." ? o.splice(f, 1) : i === ".." ? s++ : s > 0 && (i === "" ? (o.splice(f + 1, s), s = 0) : (o.splice(f, 2), s--));

    return e = o.join("/"), e === "" && (e = t ? "/" : "."), r ? (r.path = e, G(r)) : e;
  }

  u(K, "normalize");
  C.normalize = K;

  function pe(n, e) {
    n === "" && (n = "."), e === "" && (e = ".");
    var r = q(e),
        t = q(n);
    if (t && (n = t.path || "/"), r && !r.scheme) return t && (r.scheme = t.scheme), G(r);
    if (r || e.match(Fe)) return e;
    if (t && !t.host && !t.path) return t.host = e, G(t);
    var o = e.charAt(0) === "/" ? e : K(n.replace(/\/+$/, "") + "/" + e);
    return t ? (t.path = o, G(t)) : o;
  }

  u(pe, "join");
  C.join = pe;

  C.isAbsolute = function (n) {
    return n.charAt(0) === "/" || de.test(n);
  };

  function ze(n, e) {
    n === "" && (n = "."), n = n.replace(/\/$/, "");

    for (var r = 0; e.indexOf(n + "/") !== 0;) {
      var t = n.lastIndexOf("/");
      if (t < 0 || (n = n.slice(0, t), n.match(/^([^\/]+:\/)?\/*$/))) return e;
      ++r;
    }

    return Array(r + 1).join("../") + e.substr(n.length + 1);
  }

  u(ze, "relative");
  C.relative = ze;

  var ve = function () {
    var n = Object.create(null);
    return !("__proto__" in n);
  }();

  function _e(n) {
    return n;
  }

  u(_e, "identity");

  function Qe(n) {
    return me(n) ? "$" + n : n;
  }

  u(Qe, "toSetString");
  C.toSetString = ve ? _e : Qe;

  function We(n) {
    return me(n) ? n.slice(1) : n;
  }

  u(We, "fromSetString");
  C.fromSetString = ve ? _e : We;

  function me(n) {
    if (!n) return !1;
    var e = n.length;
    if (e < 9 || n.charCodeAt(e - 1) !== 95 || n.charCodeAt(e - 2) !== 95 || n.charCodeAt(e - 3) !== 111 || n.charCodeAt(e - 4) !== 116 || n.charCodeAt(e - 5) !== 111 || n.charCodeAt(e - 6) !== 114 || n.charCodeAt(e - 7) !== 112 || n.charCodeAt(e - 8) !== 95 || n.charCodeAt(e - 9) !== 95) return !1;

    for (var r = e - 10; r >= 0; r--) if (n.charCodeAt(r) !== 36) return !1;

    return !0;
  }

  u(me, "isProtoString");

  function Ve(n, e, r) {
    var t = I(n.source, e.source);
    return t !== 0 || (t = n.originalLine - e.originalLine, t !== 0) || (t = n.originalColumn - e.originalColumn, t !== 0 || r) || (t = n.generatedColumn - e.generatedColumn, t !== 0) || (t = n.generatedLine - e.generatedLine, t !== 0) ? t : I(n.name, e.name);
  }

  u(Ve, "compareByOriginalPositions");
  C.compareByOriginalPositions = Ve;

  function Je(n, e, r) {
    var t = n.generatedLine - e.generatedLine;
    return t !== 0 || (t = n.generatedColumn - e.generatedColumn, t !== 0 || r) || (t = I(n.source, e.source), t !== 0) || (t = n.originalLine - e.originalLine, t !== 0) || (t = n.originalColumn - e.originalColumn, t !== 0) ? t : I(n.name, e.name);
  }

  u(Je, "compareByGeneratedPositionsDeflated");
  C.compareByGeneratedPositionsDeflated = Je;

  function I(n, e) {
    return n === e ? 0 : n === null ? 1 : e === null ? -1 : n > e ? 1 : -1;
  }

  u(I, "strcmp");

  function ke(n, e) {
    var r = n.generatedLine - e.generatedLine;
    return r !== 0 || (r = n.generatedColumn - e.generatedColumn, r !== 0) || (r = I(n.source, e.source), r !== 0) || (r = n.originalLine - e.originalLine, r !== 0) || (r = n.originalColumn - e.originalColumn, r !== 0) ? r : I(n.name, e.name);
  }

  u(ke, "compareByGeneratedPositionsInflated");
  C.compareByGeneratedPositionsInflated = ke;

  function Ze(n) {
    return JSON.parse(n.replace(/^\)]}'[^\n]*\n/, ""));
  }

  u(Ze, "parseSourceMapInput");
  C.parseSourceMapInput = Ze;

  function Ke(n, e, r) {
    if (e = e || "", n && (n[n.length - 1] !== "/" && e[0] !== "/" && (n += "/"), e = n + e), r) {
      var t = q(r);
      if (!t) throw new Error("sourceMapURL could not be parsed");

      if (t.path) {
        var o = t.path.lastIndexOf("/");
        o >= 0 && (t.path = t.path.substring(0, o + 1));
      }

      e = pe(G(t), e);
    }

    return K(e);
  }

  u(Ke, "computeSourceURL");
  C.computeSourceURL = Ke;
});
var H = w(Se => {
  var X = x(),
      Y = Object.prototype.hasOwnProperty,
      b = typeof Map < "u";

  function E() {
    this._array = [], this._set = b ? new Map() : Object.create(null);
  }

  u(E, "ArraySet");
  E.fromArray = u(function (e, r) {
    for (var t = new E(), o = 0, i = e.length; o < i; o++) t.add(e[o], r);

    return t;
  }, "ArraySet_fromArray");
  E.prototype.size = u(function () {
    return b ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, "ArraySet_size");
  E.prototype.add = u(function (e, r) {
    var t = b ? e : X.toSetString(e),
        o = b ? this.has(e) : Y.call(this._set, t),
        i = this._array.length;
    (!o || r) && this._array.push(e), o || (b ? this._set.set(e, i) : this._set[t] = i);
  }, "ArraySet_add");
  E.prototype.has = u(function (e) {
    if (b) return this._set.has(e);
    var r = X.toSetString(e);
    return Y.call(this._set, r);
  }, "ArraySet_has");
  E.prototype.indexOf = u(function (e) {
    if (b) {
      var r = this._set.get(e);

      if (r >= 0) return r;
    } else {
      var t = X.toSetString(e);
      if (Y.call(this._set, t)) return this._set[t];
    }

    throw new Error('"' + e + '" is not in the set.');
  }, "ArraySet_indexOf");
  E.prototype.at = u(function (e) {
    if (e >= 0 && e < this._array.length) return this._array[e];
    throw new Error("No element indexed by " + e);
  }, "ArraySet_at");
  E.prototype.toArray = u(function () {
    return this._array.slice();
  }, "ArraySet_toArray");
  Se.ArraySet = E;
});
var Le = w(ye => {
  var Ce = x();

  function Xe(n, e) {
    var r = n.generatedLine,
        t = e.generatedLine,
        o = n.generatedColumn,
        i = e.generatedColumn;
    return t > r || t == r && i >= o || Ce.compareByGeneratedPositionsInflated(n, e) <= 0;
  }

  u(Xe, "generatedPositionAfter");

  function $() {
    this._array = [], this._sorted = !0, this._last = {
      generatedLine: -1,
      generatedColumn: 0
    };
  }

  u($, "MappingList");
  $.prototype.unsortedForEach = u(function (e, r) {
    this._array.forEach(e, r);
  }, "MappingList_forEach");
  $.prototype.add = u(function (e) {
    Xe(this._last, e) ? (this._last = e, this._array.push(e)) : (this._sorted = !1, this._array.push(e));
  }, "MappingList_add");
  $.prototype.toArray = u(function () {
    return this._sorted || (this._array.sort(Ce.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, "MappingList_toArray");
  ye.MappingList = $;
});
var ee = w(Me => {
  var j = Z(),
      _ = x(),
      U = H().ArraySet,
      Ye = Le().MappingList;

  function A(n) {
    n || (n = {}), this._file = _.getArg(n, "file", null), this._sourceRoot = _.getArg(n, "sourceRoot", null), this._skipValidation = _.getArg(n, "skipValidation", !1), this._sources = new U(), this._names = new U(), this._mappings = new Ye(), this._sourcesContents = null;
  }

  u(A, "SourceMapGenerator");
  A.prototype._version = 3;
  A.fromSourceMap = u(function (e) {
    var r = e.sourceRoot,
        t = new A({
      file: e.file,
      sourceRoot: r
    });
    return e.eachMapping(function (o) {
      var i = {
        generated: {
          line: o.generatedLine,
          column: o.generatedColumn
        }
      };
      o.source != null && (i.source = o.source, r != null && (i.source = _.relative(r, i.source)), i.original = {
        line: o.originalLine,
        column: o.originalColumn
      }, o.name != null && (i.name = o.name)), t.addMapping(i);
    }), e.sources.forEach(function (o) {
      var i = o;
      r !== null && (i = _.relative(r, o)), t._sources.has(i) || t._sources.add(i);
      var s = e.sourceContentFor(o);
      s != null && t.setSourceContent(o, s);
    }), t;
  }, "SourceMapGenerator_fromSourceMap");
  A.prototype.addMapping = u(function (e) {
    var r = _.getArg(e, "generated"),
        t = _.getArg(e, "original", null),
        o = _.getArg(e, "source", null),
        i = _.getArg(e, "name", null);

    this._skipValidation || this._validateMapping(r, t, o, i), o != null && (o = String(o), this._sources.has(o) || this._sources.add(o)), i != null && (i = String(i), this._names.has(i) || this._names.add(i)), this._mappings.add({
      generatedLine: r.line,
      generatedColumn: r.column,
      originalLine: t != null && t.line,
      originalColumn: t != null && t.column,
      source: o,
      name: i
    });
  }, "SourceMapGenerator_addMapping");
  A.prototype.setSourceContent = u(function (e, r) {
    var t = e;
    this._sourceRoot != null && (t = _.relative(this._sourceRoot, t)), r != null ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[_.toSetString(t)] = r) : this._sourcesContents && (delete this._sourcesContents[_.toSetString(t)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, "SourceMapGenerator_setSourceContent");
  A.prototype.applySourceMap = u(function (e, r, t) {
    var o = r;

    if (r == null) {
      if (e.file == null) throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
      o = e.file;
    }

    var i = this._sourceRoot;
    i != null && (o = _.relative(i, o));
    var s = new U(),
        f = new U();
    this._mappings.unsortedForEach(function (l) {
      if (l.source === o && l.originalLine != null) {
        var h = e.originalPositionFor({
          line: l.originalLine,
          column: l.originalColumn
        });
        h.source != null && (l.source = h.source, t != null && (l.source = _.join(t, l.source)), i != null && (l.source = _.relative(i, l.source)), l.originalLine = h.line, l.originalColumn = h.column, h.name != null && (l.name = h.name));
      }

      var a = l.source;
      a != null && !s.has(a) && s.add(a);
      var d = l.name;
      d != null && !f.has(d) && f.add(d);
    }, this), this._sources = s, this._names = f, e.sources.forEach(function (l) {
      var h = e.sourceContentFor(l);
      h != null && (t != null && (l = _.join(t, l)), i != null && (l = _.relative(i, l)), this.setSourceContent(l, h));
    }, this);
  }, "SourceMapGenerator_applySourceMap");
  A.prototype._validateMapping = u(function (e, r, t, o) {
    if (r && typeof r.line != "number" && typeof r.column != "number") throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");

    if (!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0 && !r && !t && !o)) {
      if (e && "line" in e && "column" in e && r && "line" in r && "column" in r && e.line > 0 && e.column >= 0 && r.line > 0 && r.column >= 0 && t) return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: e,
        source: t,
        original: r,
        name: o
      }));
    }
  }, "SourceMapGenerator_validateMapping");
  A.prototype._serializeMappings = u(function () {
    for (var e = 0, r = 1, t = 0, o = 0, i = 0, s = 0, f = "", l, h, a, d, g = this._mappings.toArray(), p = 0, M = g.length; p < M; p++) {
      if (h = g[p], l = "", h.generatedLine !== r) for (e = 0; h.generatedLine !== r;) l += ";", r++;else if (p > 0) {
        if (!_.compareByGeneratedPositionsInflated(h, g[p - 1])) continue;
        l += ",";
      }
      l += j.encode(h.generatedColumn - e), e = h.generatedColumn, h.source != null && (d = this._sources.indexOf(h.source), l += j.encode(d - s), s = d, l += j.encode(h.originalLine - 1 - o), o = h.originalLine - 1, l += j.encode(h.originalColumn - t), t = h.originalColumn, h.name != null && (a = this._names.indexOf(h.name), l += j.encode(a - i), i = a)), f += l;
    }

    return f;
  }, "SourceMapGenerator_serializeMappings");
  A.prototype._generateSourcesContent = u(function (e, r) {
    return e.map(function (t) {
      if (!this._sourcesContents) return null;
      r != null && (t = _.relative(r, t));

      var o = _.toSetString(t);

      return Object.prototype.hasOwnProperty.call(this._sourcesContents, o) ? this._sourcesContents[o] : null;
    }, this);
  }, "SourceMapGenerator_generateSourcesContent");
  A.prototype.toJSON = u(function () {
    var e = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (e.file = this._file), this._sourceRoot != null && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e;
  }, "SourceMapGenerator_toJSON");
  A.prototype.toString = u(function () {
    return JSON.stringify(this.toJSON());
  }, "SourceMapGenerator_toString");
  Me.SourceMapGenerator = A;
});
var Ae = w(R => {
  R.GREATEST_LOWER_BOUND = 1;
  R.LEAST_UPPER_BOUND = 2;

  function re(n, e, r, t, o, i) {
    var s = Math.floor((e - n) / 2) + n,
        f = o(r, t[s], !0);
    return f === 0 ? s : f > 0 ? e - s > 1 ? re(s, e, r, t, o, i) : i == R.LEAST_UPPER_BOUND ? e < t.length ? e : -1 : s : s - n > 1 ? re(n, s, r, t, o, i) : i == R.LEAST_UPPER_BOUND ? s : n < 0 ? -1 : n;
  }

  u(re, "recursiveSearch");
  R.search = u(function (e, r, t, o) {
    if (r.length === 0) return -1;
    var i = re(-1, r.length, e, r, t, o || R.GREATEST_LOWER_BOUND);
    if (i < 0) return -1;

    for (; i - 1 >= 0 && t(r[i], r[i - 1], !0) === 0;) --i;

    return i;
  }, "search");
});
var Oe = w(we => {
  function ne(n, e, r) {
    var t = n[e];
    n[e] = n[r], n[r] = t;
  }

  u(ne, "swap");

  function He(n, e) {
    return Math.round(n + Math.random() * (e - n));
  }

  u(He, "randomIntInRange");

  function te(n, e, r, t) {
    if (r < t) {
      var o = He(r, t),
          i = r - 1;
      ne(n, o, t);

      for (var s = n[t], f = r; f < t; f++) e(n[f], s) <= 0 && (i += 1, ne(n, i, f));

      ne(n, i + 1, f);
      var l = i + 1;
      te(n, e, r, l - 1), te(n, e, l + 1, t);
    }
  }

  u(te, "doQuickSort");

  we.quickSort = function (n, e) {
    te(n, e, 0, n.length - 1);
  };
});
var be = w(F => {
  var c = x(),
      oe = Ae(),
      T = H().ArraySet,
      er = Z(),
      P = Oe().quickSort;

  function v(n, e) {
    var r = n;
    return typeof n == "string" && (r = c.parseSourceMapInput(n)), r.sections != null ? new O(r, e) : new m(r, e);
  }

  u(v, "SourceMapConsumer");

  v.fromSourceMap = function (n, e) {
    return m.fromSourceMap(n, e);
  };

  v.prototype._version = 3;
  v.prototype.__generatedMappings = null;
  Object.defineProperty(v.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  });
  v.prototype.__originalMappings = null;
  Object.defineProperty(v.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  });
  v.prototype._charIsMappingSeparator = u(function (e, r) {
    var t = e.charAt(r);
    return t === ";" || t === ",";
  }, "SourceMapConsumer_charIsMappingSeparator");
  v.prototype._parseMappings = u(function (e, r) {
    throw new Error("Subclasses must implement _parseMappings");
  }, "SourceMapConsumer_parseMappings");
  v.GENERATED_ORDER = 1;
  v.ORIGINAL_ORDER = 2;
  v.GREATEST_LOWER_BOUND = 1;
  v.LEAST_UPPER_BOUND = 2;
  v.prototype.eachMapping = u(function (e, r, t) {
    var o = r || null,
        i = t || v.GENERATED_ORDER,
        s;

    switch (i) {
      case v.GENERATED_ORDER:
        s = this._generatedMappings;
        break;

      case v.ORIGINAL_ORDER:
        s = this._originalMappings;
        break;

      default:
        throw new Error("Unknown order of iteration.");
    }

    var f = this.sourceRoot;
    s.map(function (l) {
      var h = l.source === null ? null : this._sources.at(l.source);
      return h = c.computeSourceURL(f, h, this._sourceMapURL), {
        source: h,
        generatedLine: l.generatedLine,
        generatedColumn: l.generatedColumn,
        originalLine: l.originalLine,
        originalColumn: l.originalColumn,
        name: l.name === null ? null : this._names.at(l.name)
      };
    }, this).forEach(e, o);
  }, "SourceMapConsumer_eachMapping");
  v.prototype.allGeneratedPositionsFor = u(function (e) {
    var r = c.getArg(e, "line"),
        t = {
      source: c.getArg(e, "source"),
      originalLine: r,
      originalColumn: c.getArg(e, "column", 0)
    };
    if (t.source = this._findSourceIndex(t.source), t.source < 0) return [];

    var o = [],
        i = this._findMapping(t, this._originalMappings, "originalLine", "originalColumn", c.compareByOriginalPositions, oe.LEAST_UPPER_BOUND);

    if (i >= 0) {
      var s = this._originalMappings[i];
      if (e.column === void 0) for (var f = s.originalLine; s && s.originalLine === f;) o.push({
        line: c.getArg(s, "generatedLine", null),
        column: c.getArg(s, "generatedColumn", null),
        lastColumn: c.getArg(s, "lastGeneratedColumn", null)
      }), s = this._originalMappings[++i];else for (var l = s.originalColumn; s && s.originalLine === r && s.originalColumn == l;) o.push({
        line: c.getArg(s, "generatedLine", null),
        column: c.getArg(s, "generatedColumn", null),
        lastColumn: c.getArg(s, "lastGeneratedColumn", null)
      }), s = this._originalMappings[++i];
    }

    return o;
  }, "SourceMapConsumer_allGeneratedPositionsFor");
  F.SourceMapConsumer = v;

  function m(n, e) {
    var r = n;
    typeof n == "string" && (r = c.parseSourceMapInput(n));
    var t = c.getArg(r, "version"),
        o = c.getArg(r, "sources"),
        i = c.getArg(r, "names", []),
        s = c.getArg(r, "sourceRoot", null),
        f = c.getArg(r, "sourcesContent", null),
        l = c.getArg(r, "mappings"),
        h = c.getArg(r, "file", null);
    if (t != this._version) throw new Error("Unsupported version: " + t);
    s && (s = c.normalize(s)), o = o.map(String).map(c.normalize).map(function (a) {
      return s && c.isAbsolute(s) && c.isAbsolute(a) ? c.relative(s, a) : a;
    }), this._names = T.fromArray(i.map(String), !0), this._sources = T.fromArray(o, !0), this._absoluteSources = this._sources.toArray().map(function (a) {
      return c.computeSourceURL(s, a, e);
    }), this.sourceRoot = s, this.sourcesContent = f, this._mappings = l, this._sourceMapURL = e, this.file = h;
  }

  u(m, "BasicSourceMapConsumer");
  m.prototype = Object.create(v.prototype);
  m.prototype.consumer = v;

  m.prototype._findSourceIndex = function (n) {
    var e = n;
    if (this.sourceRoot != null && (e = c.relative(this.sourceRoot, e)), this._sources.has(e)) return this._sources.indexOf(e);
    var r;

    for (r = 0; r < this._absoluteSources.length; ++r) if (this._absoluteSources[r] == n) return r;

    return -1;
  };

  m.fromSourceMap = u(function (e, r) {
    var t = Object.create(m.prototype),
        o = t._names = T.fromArray(e._names.toArray(), !0),
        i = t._sources = T.fromArray(e._sources.toArray(), !0);
    t.sourceRoot = e._sourceRoot, t.sourcesContent = e._generateSourcesContent(t._sources.toArray(), t.sourceRoot), t.file = e._file, t._sourceMapURL = r, t._absoluteSources = t._sources.toArray().map(function (p) {
      return c.computeSourceURL(t.sourceRoot, p, r);
    });

    for (var s = e._mappings.toArray().slice(), f = t.__generatedMappings = [], l = t.__originalMappings = [], h = 0, a = s.length; h < a; h++) {
      var d = s[h],
          g = new Ee();
      g.generatedLine = d.generatedLine, g.generatedColumn = d.generatedColumn, d.source && (g.source = i.indexOf(d.source), g.originalLine = d.originalLine, g.originalColumn = d.originalColumn, d.name && (g.name = o.indexOf(d.name)), l.push(g)), f.push(g);
    }

    return P(t.__originalMappings, c.compareByOriginalPositions), t;
  }, "SourceMapConsumer_fromSourceMap");
  m.prototype._version = 3;
  Object.defineProperty(m.prototype, "sources", {
    get: function () {
      return this._absoluteSources.slice();
    }
  });

  function Ee() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }

  u(Ee, "Mapping");
  m.prototype._parseMappings = u(function (e, r) {
    for (var t = 1, o = 0, i = 0, s = 0, f = 0, l = 0, h = e.length, a = 0, d = {}, g = {}, p = [], M = [], y, B, S, N, se; a < h;) if (e.charAt(a) === ";") t++, a++, o = 0;else if (e.charAt(a) === ",") a++;else {
      for (y = new Ee(), y.generatedLine = t, N = a; N < h && !this._charIsMappingSeparator(e, N); N++);

      if (B = e.slice(a, N), S = d[B], S) a += B.length;else {
        for (S = []; a < N;) er.decode(e, a, g), se = g.value, a = g.rest, S.push(se);

        if (S.length === 2) throw new Error("Found a source, but no line and column");
        if (S.length === 3) throw new Error("Found a source and line, but no column");
        d[B] = S;
      }
      y.generatedColumn = o + S[0], o = y.generatedColumn, S.length > 1 && (y.source = f + S[1], f += S[1], y.originalLine = i + S[2], i = y.originalLine, y.originalLine += 1, y.originalColumn = s + S[3], s = y.originalColumn, S.length > 4 && (y.name = l + S[4], l += S[4])), M.push(y), typeof y.originalLine == "number" && p.push(y);
    }

    P(M, c.compareByGeneratedPositionsDeflated), this.__generatedMappings = M, P(p, c.compareByOriginalPositions), this.__originalMappings = p;
  }, "SourceMapConsumer_parseMappings");
  m.prototype._findMapping = u(function (e, r, t, o, i, s) {
    if (e[t] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + e[t]);
    if (e[o] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + e[o]);
    return oe.search(e, r, i, s);
  }, "SourceMapConsumer_findMapping");
  m.prototype.computeColumnSpans = u(function () {
    for (var e = 0; e < this._generatedMappings.length; ++e) {
      var r = this._generatedMappings[e];

      if (e + 1 < this._generatedMappings.length) {
        var t = this._generatedMappings[e + 1];

        if (r.generatedLine === t.generatedLine) {
          r.lastGeneratedColumn = t.generatedColumn - 1;
          continue;
        }
      }

      r.lastGeneratedColumn = 1 / 0;
    }
  }, "SourceMapConsumer_computeColumnSpans");
  m.prototype.originalPositionFor = u(function (e) {
    var r = {
      generatedLine: c.getArg(e, "line"),
      generatedColumn: c.getArg(e, "column")
    },
        t = this._findMapping(r, this._generatedMappings, "generatedLine", "generatedColumn", c.compareByGeneratedPositionsDeflated, c.getArg(e, "bias", v.GREATEST_LOWER_BOUND));

    if (t >= 0) {
      var o = this._generatedMappings[t];

      if (o.generatedLine === r.generatedLine) {
        var i = c.getArg(o, "source", null);
        i !== null && (i = this._sources.at(i), i = c.computeSourceURL(this.sourceRoot, i, this._sourceMapURL));
        var s = c.getArg(o, "name", null);
        return s !== null && (s = this._names.at(s)), {
          source: i,
          line: c.getArg(o, "originalLine", null),
          column: c.getArg(o, "originalColumn", null),
          name: s
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, "SourceMapConsumer_originalPositionFor");
  m.prototype.hasContentsOfAllSources = u(function () {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function (e) {
      return e == null;
    }) : !1;
  }, "BasicSourceMapConsumer_hasContentsOfAllSources");
  m.prototype.sourceContentFor = u(function (e, r) {
    if (!this.sourcesContent) return null;

    var t = this._findSourceIndex(e);

    if (t >= 0) return this.sourcesContent[t];
    var o = e;
    this.sourceRoot != null && (o = c.relative(this.sourceRoot, o));
    var i;

    if (this.sourceRoot != null && (i = c.urlParse(this.sourceRoot))) {
      var s = o.replace(/^file:\/\//, "");
      if (i.scheme == "file" && this._sources.has(s)) return this.sourcesContent[this._sources.indexOf(s)];
      if ((!i.path || i.path == "/") && this._sources.has("/" + o)) return this.sourcesContent[this._sources.indexOf("/" + o)];
    }

    if (r) return null;
    throw new Error('"' + o + '" is not in the SourceMap.');
  }, "SourceMapConsumer_sourceContentFor");
  m.prototype.generatedPositionFor = u(function (e) {
    var r = c.getArg(e, "source");
    if (r = this._findSourceIndex(r), r < 0) return {
      line: null,
      column: null,
      lastColumn: null
    };

    var t = {
      source: r,
      originalLine: c.getArg(e, "line"),
      originalColumn: c.getArg(e, "column")
    },
        o = this._findMapping(t, this._originalMappings, "originalLine", "originalColumn", c.compareByOriginalPositions, c.getArg(e, "bias", v.GREATEST_LOWER_BOUND));

    if (o >= 0) {
      var i = this._originalMappings[o];
      if (i.source === t.source) return {
        line: c.getArg(i, "generatedLine", null),
        column: c.getArg(i, "generatedColumn", null),
        lastColumn: c.getArg(i, "lastGeneratedColumn", null)
      };
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, "SourceMapConsumer_generatedPositionFor");
  F.BasicSourceMapConsumer = m;

  function O(n, e) {
    var r = n;
    typeof n == "string" && (r = c.parseSourceMapInput(n));
    var t = c.getArg(r, "version"),
        o = c.getArg(r, "sections");
    if (t != this._version) throw new Error("Unsupported version: " + t);
    this._sources = new T(), this._names = new T();
    var i = {
      line: -1,
      column: 0
    };
    this._sections = o.map(function (s) {
      if (s.url) throw new Error("Support for url field in sections not implemented.");
      var f = c.getArg(s, "offset"),
          l = c.getArg(f, "line"),
          h = c.getArg(f, "column");
      if (l < i.line || l === i.line && h < i.column) throw new Error("Section offsets must be ordered and non-overlapping.");
      return i = f, {
        generatedOffset: {
          generatedLine: l + 1,
          generatedColumn: h + 1
        },
        consumer: new v(c.getArg(s, "map"), e)
      };
    });
  }

  u(O, "IndexedSourceMapConsumer");
  O.prototype = Object.create(v.prototype);
  O.prototype.constructor = v;
  O.prototype._version = 3;
  Object.defineProperty(O.prototype, "sources", {
    get: function () {
      for (var n = [], e = 0; e < this._sections.length; e++) for (var r = 0; r < this._sections[e].consumer.sources.length; r++) n.push(this._sections[e].consumer.sources[r]);

      return n;
    }
  });
  O.prototype.originalPositionFor = u(function (e) {
    var r = {
      generatedLine: c.getArg(e, "line"),
      generatedColumn: c.getArg(e, "column")
    },
        t = oe.search(r, this._sections, function (i, s) {
      var f = i.generatedLine - s.generatedOffset.generatedLine;
      return f || i.generatedColumn - s.generatedOffset.generatedColumn;
    }),
        o = this._sections[t];
    return o ? o.consumer.originalPositionFor({
      line: r.generatedLine - (o.generatedOffset.generatedLine - 1),
      column: r.generatedColumn - (o.generatedOffset.generatedLine === r.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
      bias: e.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, "IndexedSourceMapConsumer_originalPositionFor");
  O.prototype.hasContentsOfAllSources = u(function () {
    return this._sections.every(function (e) {
      return e.consumer.hasContentsOfAllSources();
    });
  }, "IndexedSourceMapConsumer_hasContentsOfAllSources");
  O.prototype.sourceContentFor = u(function (e, r) {
    for (var t = 0; t < this._sections.length; t++) {
      var o = this._sections[t],
          i = o.consumer.sourceContentFor(e, !0);
      if (i) return i;
    }

    if (r) return null;
    throw new Error('"' + e + '" is not in the SourceMap.');
  }, "IndexedSourceMapConsumer_sourceContentFor");
  O.prototype.generatedPositionFor = u(function (e) {
    for (var r = 0; r < this._sections.length; r++) {
      var t = this._sections[r];

      if (t.consumer._findSourceIndex(c.getArg(e, "source")) !== -1) {
        var o = t.consumer.generatedPositionFor(e);

        if (o) {
          var i = {
            line: o.line + (t.generatedOffset.generatedLine - 1),
            column: o.column + (t.generatedOffset.generatedLine === o.line ? t.generatedOffset.generatedColumn - 1 : 0)
          };
          return i;
        }
      }
    }

    return {
      line: null,
      column: null
    };
  }, "IndexedSourceMapConsumer_generatedPositionFor");
  O.prototype._parseMappings = u(function (e, r) {
    this.__generatedMappings = [], this.__originalMappings = [];

    for (var t = 0; t < this._sections.length; t++) for (var o = this._sections[t], i = o.consumer._generatedMappings, s = 0; s < i.length; s++) {
      var f = i[s],
          l = o.consumer._sources.at(f.source);

      l = c.computeSourceURL(o.consumer.sourceRoot, l, this._sourceMapURL), this._sources.add(l), l = this._sources.indexOf(l);
      var h = null;
      f.name && (h = o.consumer._names.at(f.name), this._names.add(h), h = this._names.indexOf(h));
      var a = {
        source: l,
        generatedLine: f.generatedLine + (o.generatedOffset.generatedLine - 1),
        generatedColumn: f.generatedColumn + (o.generatedOffset.generatedLine === f.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
        originalLine: f.originalLine,
        originalColumn: f.originalColumn,
        name: h
      };
      this.__generatedMappings.push(a), typeof a.originalLine == "number" && this.__originalMappings.push(a);
    }

    P(this.__generatedMappings, c.compareByGeneratedPositionsDeflated), P(this.__originalMappings, c.compareByOriginalPositions);
  }, "IndexedSourceMapConsumer_parseMappings");
  F.IndexedSourceMapConsumer = O;
});
var Ne = w(Re => {
  var rr = ee().SourceMapGenerator,
      z = x(),
      nr = /(\r?\n)/,
      tr = 10,
      D = "$$$isSourceNode$$$";

  function L(n, e, r, t, o) {
    this.children = [], this.sourceContents = {}, this.line = n ?? null, this.column = e ?? null, this.source = r ?? null, this.name = o ?? null, this[D] = !0, t != null && this.add(t);
  }

  u(L, "SourceNode");
  L.fromStringWithSourceMap = u(function (e, r, t) {
    var o = new L(),
        i = e.split(nr),
        s = 0,
        f = u(function () {
      var g = M(),
          p = M() || "";
      return g + p;

      function M() {
        return s < i.length ? i[s++] : void 0;
      }
    }, "shiftNextLine"),
        l = 1,
        h = 0,
        a = null;
    return r.eachMapping(function (g) {
      if (a !== null) if (l < g.generatedLine) d(a, f()), l++, h = 0;else {
        var p = i[s] || "",
            M = p.substr(0, g.generatedColumn - h);
        i[s] = p.substr(g.generatedColumn - h), h = g.generatedColumn, d(a, M), a = g;
        return;
      }

      for (; l < g.generatedLine;) o.add(f()), l++;

      if (h < g.generatedColumn) {
        var p = i[s] || "";
        o.add(p.substr(0, g.generatedColumn)), i[s] = p.substr(g.generatedColumn), h = g.generatedColumn;
      }

      a = g;
    }, this), s < i.length && (a && d(a, f()), o.add(i.splice(s).join(""))), r.sources.forEach(function (g) {
      var p = r.sourceContentFor(g);
      p != null && (t != null && (g = z.join(t, g)), o.setSourceContent(g, p));
    }), o;

    function d(g, p) {
      if (g === null || g.source === void 0) o.add(p);else {
        var M = t ? z.join(t, g.source) : g.source;
        o.add(new L(g.originalLine, g.originalColumn, M, p, g.name));
      }
    }

    u(d, "addMappingWithCode");
  }, "SourceNode_fromStringWithSourceMap");
  L.prototype.add = u(function (e) {
    if (Array.isArray(e)) e.forEach(function (r) {
      this.add(r);
    }, this);else if (e[D] || typeof e == "string") e && this.children.push(e);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
    return this;
  }, "SourceNode_add");
  L.prototype.prepend = u(function (e) {
    if (Array.isArray(e)) for (var r = e.length - 1; r >= 0; r--) this.prepend(e[r]);else if (e[D] || typeof e == "string") this.children.unshift(e);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
    return this;
  }, "SourceNode_prepend");
  L.prototype.walk = u(function (e) {
    for (var r, t = 0, o = this.children.length; t < o; t++) r = this.children[t], r[D] ? r.walk(e) : r !== "" && e(r, {
      source: this.source,
      line: this.line,
      column: this.column,
      name: this.name
    });
  }, "SourceNode_walk");
  L.prototype.join = u(function (e) {
    var r,
        t,
        o = this.children.length;

    if (o > 0) {
      for (r = [], t = 0; t < o - 1; t++) r.push(this.children[t]), r.push(e);

      r.push(this.children[t]), this.children = r;
    }

    return this;
  }, "SourceNode_join");
  L.prototype.replaceRight = u(function (e, r) {
    var t = this.children[this.children.length - 1];
    return t[D] ? t.replaceRight(e, r) : typeof t == "string" ? this.children[this.children.length - 1] = t.replace(e, r) : this.children.push("".replace(e, r)), this;
  }, "SourceNode_replaceRight");
  L.prototype.setSourceContent = u(function (e, r) {
    this.sourceContents[z.toSetString(e)] = r;
  }, "SourceNode_setSourceContent");
  L.prototype.walkSourceContents = u(function (e) {
    for (var r = 0, t = this.children.length; r < t; r++) this.children[r][D] && this.children[r].walkSourceContents(e);

    for (var o = Object.keys(this.sourceContents), r = 0, t = o.length; r < t; r++) e(z.fromSetString(o[r]), this.sourceContents[o[r]]);
  }, "SourceNode_walkSourceContents");
  L.prototype.toString = u(function () {
    var e = "";
    return this.walk(function (r) {
      e += r;
    }), e;
  }, "SourceNode_toString");
  L.prototype.toStringWithSourceMap = u(function (e) {
    var r = {
      code: "",
      line: 1,
      column: 0
    },
        t = new rr(e),
        o = !1,
        i = null,
        s = null,
        f = null,
        l = null;
    return this.walk(function (h, a) {
      r.code += h, a.source !== null && a.line !== null && a.column !== null ? ((i !== a.source || s !== a.line || f !== a.column || l !== a.name) && t.addMapping({
        source: a.source,
        original: {
          line: a.line,
          column: a.column
        },
        generated: {
          line: r.line,
          column: r.column
        },
        name: a.name
      }), i = a.source, s = a.line, f = a.column, l = a.name, o = !0) : o && (t.addMapping({
        generated: {
          line: r.line,
          column: r.column
        }
      }), i = null, o = !1);

      for (var d = 0, g = h.length; d < g; d++) h.charCodeAt(d) === tr ? (r.line++, r.column = 0, d + 1 === g ? (i = null, o = !1) : o && t.addMapping({
        source: a.source,
        original: {
          line: a.line,
          column: a.column
        },
        generated: {
          line: r.line,
          column: r.column
        },
        name: a.name
      })) : r.column++;
    }), this.walkSourceContents(function (h, a) {
      t.setSourceContent(h, a);
    }), {
      code: r.code,
      map: t
    };
  }, "SourceNode_toStringWithSourceMap");
  Re.SourceNode = L;
});
var ie = w(Q => {
  Q.SourceMapGenerator = ee().SourceMapGenerator;
  Q.SourceMapConsumer = be().SourceMapConsumer;
  Q.SourceNode = Ne().SourceNode;
});
var Ge = ue(ie()),
    Ie = ue(ie()),
    {
  SourceMapGenerator: mr,
  SourceMapConsumer: Sr,
  SourceNode: Cr
} = Ie,
    {
  default: or,
  ...ir
} = Ie,
    yr = Ge.default ?? or ?? ir;
export { Sr as SourceMapConsumer, mr as SourceMapGenerator, Cr as SourceNode, yr as default };