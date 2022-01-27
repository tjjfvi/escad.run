/* esm.sh - esbuild bundle(source-map@0.7.3) deno production */
import __path$ from "/transpiled/https://deno.land/std@0.122.0/node/path.js";
import __fs$ from "/transpiled/https://deno.land/std@0.122.0/node/fs.js";
var be = Object.create;
var j = Object.defineProperty;
var ye = Object.getOwnPropertyDescriptor;
var Me = Object.getOwnPropertyNames;
var Ae = Object.getPrototypeOf, Oe = Object.prototype.hasOwnProperty;
var Re = o => j(o, "__esModule", { value: !0 });
var K = (o => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(o, { get: (e, t) => (typeof require != "undefined" ? require : e)[t] }) : o)(function (o) { if (typeof require != "undefined")
    return require.apply(this, arguments); throw new Error('Dynamic require of "' + o + '" is not supported'); });
var w = (o, e) => () => (e || o((e = { exports: {} }).exports, e), e.exports);
var xe = (o, e, t, n) => { if (e && typeof e == "object" || typeof e == "function")
    for (let r of Me(e))
        !Oe.call(o, r) && (t || r !== "default") && j(o, r, { get: () => e[r], enumerable: !(n = ye(e, r)) || n.enumerable }); return o; }, Y = (o, e) => xe(Re(j(o != null ? be(Ae(o)) : {}, "default", !e && o && o.__esModule ? { get: () => o.default, enumerable: !0 } : { value: o, enumerable: !0 })), o);
var ee = w(H => { var Z = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""); H.encode = function (o) { if (0 <= o && o < Z.length)
    return Z[o]; throw new TypeError("Must be between 0 and 63: " + o); }; });
var W = w(re => { var ve = ee(), ne = 5, te = 1 << ne, Ie = te - 1, Ge = te; function Ne(o) { return o < 0 ? (-o << 1) + 1 : (o << 1) + 0; } re.encode = function (e) { let t = "", n, r = Ne(e); do
    n = r & Ie, r >>>= ne, r > 0 && (n |= Ge), t += ve.encode(n);
while (r > 0); return t; }; });
var A = w(p => { function Ue(o, e, t) { if (e in o)
    return o[e]; if (arguments.length === 3)
    return t; throw new Error('"' + e + '" is a required argument.'); } p.getArg = Ue; var oe = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, Te = /^data:.+\,.+$/; function M(o) { let e = o.match(oe); return e ? { scheme: e[1], auth: e[2], host: e[3], port: e[4], path: e[5] } : null; } p.urlParse = M; function S(o) { let e = ""; return o.scheme && (e += o.scheme + ":"), e += "//", o.auth && (e += o.auth + "@"), o.host && (e += o.host), o.port && (e += ":" + o.port), o.path && (e += o.path), e; } p.urlGenerate = S; var Pe = 32; function De(o) { let e = []; return function (t) { for (let r = 0; r < e.length; r++)
    if (e[r].input === t) {
        let i = e[0];
        return e[0] = e[r], e[r] = i, e[0].result;
    } let n = o(t); return e.unshift({ input: t, result: n }), e.length > Pe && e.pop(), n; }; } var z = De(function (e) { let t = e, n = M(e); if (n) {
    if (!n.path)
        return e;
    t = n.path;
} let r = p.isAbsolute(t), i = [], s = 0, u = 0; for (;;)
    if (s = u, u = t.indexOf("/", s), u === -1) {
        i.push(t.slice(s));
        break;
    }
    else
        for (i.push(t.slice(s, u)); u < t.length && t[u] === "/";)
            u++; let l = 0; for (u = i.length - 1; u >= 0; u--) {
    let c = i[u];
    c === "." ? i.splice(u, 1) : c === ".." ? l++ : l > 0 && (c === "" ? (i.splice(u + 1, l), l = 0) : (i.splice(u, 2), l--));
} return t = i.join("/"), t === "" && (t = r ? "/" : "."), n ? (n.path = t, S(n)) : t; }); p.normalize = z; function ie(o, e) { o === "" && (o = "."), e === "" && (e = "."); let t = M(e), n = M(o); if (n && (o = n.path || "/"), t && !t.scheme)
    return n && (t.scheme = n.scheme), S(t); if (t || e.match(Te))
    return e; if (n && !n.host && !n.path)
    return n.host = e, S(n); let r = e.charAt(0) === "/" ? e : z(o.replace(/\/+$/, "") + "/" + e); return n ? (n.path = r, S(n)) : r; } p.join = ie; p.isAbsolute = function (o) { return o.charAt(0) === "/" || oe.test(o); }; function qe(o, e) { o === "" && (o = "."), o = o.replace(/\/$/, ""); let t = 0; for (; e.indexOf(o + "/") !== 0;) {
    let n = o.lastIndexOf("/");
    if (n < 0 || (o = o.slice(0, n), o.match(/^([^\/]+:\/)?\/*$/)))
        return e;
    ++t;
} return Array(t + 1).join("../") + e.substr(o.length + 1); } p.relative = qe; var se = function () { return !("__proto__" in Object.create(null)); }(); function le(o) { return o; } function je(o) { return ue(o) ? "$" + o : o; } p.toSetString = se ? le : je; function We(o) { return ue(o) ? o.slice(1) : o; } p.fromSetString = se ? le : We; function ue(o) { if (!o)
    return !1; let e = o.length; if (e < 9 || o.charCodeAt(e - 1) !== 95 || o.charCodeAt(e - 2) !== 95 || o.charCodeAt(e - 3) !== 111 || o.charCodeAt(e - 4) !== 116 || o.charCodeAt(e - 5) !== 111 || o.charCodeAt(e - 6) !== 114 || o.charCodeAt(e - 7) !== 112 || o.charCodeAt(e - 8) !== 95 || o.charCodeAt(e - 9) !== 95)
    return !1; for (let t = e - 10; t >= 0; t--)
    if (o.charCodeAt(t) !== 36)
        return !1; return !0; } function ze(o, e, t) { let n = b(o.source, e.source); return n !== 0 || (n = o.originalLine - e.originalLine, n !== 0) || (n = o.originalColumn - e.originalColumn, n !== 0 || t) || (n = o.generatedColumn - e.generatedColumn, n !== 0) || (n = o.generatedLine - e.generatedLine, n !== 0) ? n : b(o.name, e.name); } p.compareByOriginalPositions = ze; function $e(o, e, t) { let n = o.generatedLine - e.generatedLine; return n !== 0 || (n = o.generatedColumn - e.generatedColumn, n !== 0 || t) || (n = b(o.source, e.source), n !== 0) || (n = o.originalLine - e.originalLine, n !== 0) || (n = o.originalColumn - e.originalColumn, n !== 0) ? n : b(o.name, e.name); } p.compareByGeneratedPositionsDeflated = $e; function b(o, e) { return o === e ? 0 : o === null ? 1 : e === null ? -1 : o > e ? 1 : -1; } function ke(o, e) { let t = o.generatedLine - e.generatedLine; return t !== 0 || (t = o.generatedColumn - e.generatedColumn, t !== 0) || (t = b(o.source, e.source), t !== 0) || (t = o.originalLine - e.originalLine, t !== 0) || (t = o.originalColumn - e.originalColumn, t !== 0) ? t : b(o.name, e.name); } p.compareByGeneratedPositionsInflated = ke; function Be(o) { return JSON.parse(o.replace(/^\)]}'[^\n]*\n/, "")); } p.parseSourceMapInput = Be; function Qe(o, e, t) { if (e = e || "", o && (o[o.length - 1] !== "/" && e[0] !== "/" && (o += "/"), e = o + e), t) {
    let n = M(t);
    if (!n)
        throw new Error("sourceMapURL could not be parsed");
    if (n.path) {
        let r = n.path.lastIndexOf("/");
        r >= 0 && (n.path = n.path.substring(0, r + 1));
    }
    e = ie(S(n), e);
} return z(e); } p.computeSourceURL = Qe; });
var $ = w(ce => { var N = class {
    constructor() { this._array = [], this._set = new Map; }
    static fromArray(e, t) { let n = new N; for (let r = 0, i = e.length; r < i; r++)
        n.add(e[r], t); return n; }
    size() { return this._set.size; }
    add(e, t) { let n = this.has(e), r = this._array.length; (!n || t) && this._array.push(e), n || this._set.set(e, r); }
    has(e) { return this._set.has(e); }
    indexOf(e) { let t = this._set.get(e); if (t >= 0)
        return t; throw new Error('"' + e + '" is not in the set.'); }
    at(e) { if (e >= 0 && e < this._array.length)
        return this._array[e]; throw new Error("No element indexed by " + e); }
    toArray() { return this._array.slice(); }
}; ce.ArraySet = N; });
var he = w(ge => { var ae = A(); function Ve(o, e) { let t = o.generatedLine, n = e.generatedLine, r = o.generatedColumn, i = e.generatedColumn; return n > t || n == t && i >= r || ae.compareByGeneratedPositionsInflated(o, e) <= 0; } var fe = class {
    constructor() { this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 }; }
    unsortedForEach(e, t) { this._array.forEach(e, t); }
    add(e) { Ve(this._last, e) ? (this._last = e, this._array.push(e)) : (this._sorted = !1, this._array.push(e)); }
    toArray() { return this._sorted || (this._array.sort(ae.compareByGeneratedPositionsInflated), this._sorted = !0), this._array; }
}; ge.MappingList = fe; });
var k = w(de => { var O = W(), _ = A(), U = $().ArraySet, Fe = he().MappingList, R = class {
    constructor(e) { e || (e = {}), this._file = _.getArg(e, "file", null), this._sourceRoot = _.getArg(e, "sourceRoot", null), this._skipValidation = _.getArg(e, "skipValidation", !1), this._sources = new U, this._names = new U, this._mappings = new Fe, this._sourcesContents = null; }
    static fromSourceMap(e) { let t = e.sourceRoot, n = new R({ file: e.file, sourceRoot: t }); return e.eachMapping(function (r) { let i = { generated: { line: r.generatedLine, column: r.generatedColumn } }; r.source != null && (i.source = r.source, t != null && (i.source = _.relative(t, i.source)), i.original = { line: r.originalLine, column: r.originalColumn }, r.name != null && (i.name = r.name)), n.addMapping(i); }), e.sources.forEach(function (r) { let i = r; t !== null && (i = _.relative(t, r)), n._sources.has(i) || n._sources.add(i); let s = e.sourceContentFor(r); s != null && n.setSourceContent(r, s); }), n; }
    addMapping(e) { let t = _.getArg(e, "generated"), n = _.getArg(e, "original", null), r = _.getArg(e, "source", null), i = _.getArg(e, "name", null); this._skipValidation || this._validateMapping(t, n, r, i), r != null && (r = String(r), this._sources.has(r) || this._sources.add(r)), i != null && (i = String(i), this._names.has(i) || this._names.add(i)), this._mappings.add({ generatedLine: t.line, generatedColumn: t.column, originalLine: n != null && n.line, originalColumn: n != null && n.column, source: r, name: i }); }
    setSourceContent(e, t) { let n = e; this._sourceRoot != null && (n = _.relative(this._sourceRoot, n)), t != null ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[_.toSetString(n)] = t) : this._sourcesContents && (delete this._sourcesContents[_.toSetString(n)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null)); }
    applySourceMap(e, t, n) { let r = t; if (t == null) {
        if (e.file == null)
            throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
        r = e.file;
    } let i = this._sourceRoot; i != null && (r = _.relative(i, r)); let s = this._mappings.toArray().length > 0 ? new U : this._sources, u = new U; this._mappings.unsortedForEach(function (l) { if (l.source === r && l.originalLine != null) {
        let h = e.originalPositionFor({ line: l.originalLine, column: l.originalColumn });
        h.source != null && (l.source = h.source, n != null && (l.source = _.join(n, l.source)), i != null && (l.source = _.relative(i, l.source)), l.originalLine = h.line, l.originalColumn = h.column, h.name != null && (l.name = h.name));
    } let c = l.source; c != null && !s.has(c) && s.add(c); let f = l.name; f != null && !u.has(f) && u.add(f); }, this), this._sources = s, this._names = u, e.sources.forEach(function (l) { let c = e.sourceContentFor(l); c != null && (n != null && (l = _.join(n, l)), i != null && (l = _.relative(i, l)), this.setSourceContent(l, c)); }, this); }
    _validateMapping(e, t, n, r) { if (t && typeof t.line != "number" && typeof t.column != "number")
        throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."); if (!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0 && !t && !n && !r)) {
        if (!(e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && n))
            throw new Error("Invalid mapping: " + JSON.stringify({ generated: e, source: n, original: t, name: r }));
    } }
    _serializeMappings() { let e = 0, t = 1, n = 0, r = 0, i = 0, s = 0, u = "", l, c, f, h, d = this._mappings.toArray(); for (let g = 0, C = d.length; g < C; g++) {
        if (c = d[g], l = "", c.generatedLine !== t)
            for (e = 0; c.generatedLine !== t;)
                l += ";", t++;
        else if (g > 0) {
            if (!_.compareByGeneratedPositionsInflated(c, d[g - 1]))
                continue;
            l += ",";
        }
        l += O.encode(c.generatedColumn - e), e = c.generatedColumn, c.source != null && (h = this._sources.indexOf(c.source), l += O.encode(h - s), s = h, l += O.encode(c.originalLine - 1 - r), r = c.originalLine - 1, l += O.encode(c.originalColumn - n), n = c.originalColumn, c.name != null && (f = this._names.indexOf(c.name), l += O.encode(f - i), i = f)), u += l;
    } return u; }
    _generateSourcesContent(e, t) { return e.map(function (n) { if (!this._sourcesContents)
        return null; t != null && (n = _.relative(t, n)); let r = _.toSetString(n); return Object.prototype.hasOwnProperty.call(this._sourcesContents, r) ? this._sourcesContents[r] : null; }, this); }
    toJSON() { let e = { version: this._version, sources: this._sources.toArray(), names: this._names.toArray(), mappings: this._serializeMappings() }; return this._file != null && (e.file = this._file), this._sourceRoot != null && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e; }
    toString() { return JSON.stringify(this.toJSON()); }
}; R.prototype._version = 3; de.SourceMapGenerator = R; });
var me = w(L => { L.GREATEST_LOWER_BOUND = 1; L.LEAST_UPPER_BOUND = 2; function B(o, e, t, n, r, i) { let s = Math.floor((e - o) / 2) + o, u = r(t, n[s], !0); return u === 0 ? s : u > 0 ? e - s > 1 ? B(s, e, t, n, r, i) : i == L.LEAST_UPPER_BOUND ? e < n.length ? e : -1 : s : s - o > 1 ? B(o, s, t, n, r, i) : i == L.LEAST_UPPER_BOUND ? s : o < 0 ? -1 : o; } L.search = function (e, t, n, r) { if (t.length === 0)
    return -1; let i = B(-1, t.length, e, t, n, r || L.GREATEST_LOWER_BOUND); if (i < 0)
    return -1; for (; i - 1 >= 0 && n(t[i], t[i - 1], !0) === 0;)
    --i; return i; }; });
var Q = w((dn, x) => { if (typeof fetch == "function") {
    let o = null;
    x.exports = function () { if (typeof o != "string")
        throw new Error("You must provide the URL of lib/mappings.wasm by calling SourceMapConsumer.initialize({ 'lib/mappings.wasm': ... }) before using SourceMapConsumer"); return fetch(o).then(t => t.arrayBuffer()); }, x.exports.initialize = e => o = e;
}
else {
    let o = __fs$, e = __path$;
    x.exports = function () { return new Promise((n, r) => { let i = e.join("https://cdn.esm.sh/v64/source-map@0.7.3/deno", "mappings.wasm"); o.readFile(i, null, (s, u) => { if (s) {
        r(s);
        return;
    } n(u.buffer); }); }); }, x.exports.initialize = t => { console.debug("SourceMapConsumer.initialize is a no-op when running in node.js"); };
} });
var pe = w((mn, _e) => { var Je = Q(); function Xe() { this.generatedLine = 0, this.generatedColumn = 0, this.lastGeneratedColumn = null, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null; } var v = null; _e.exports = function () { if (v)
    return v; let e = []; return v = Je().then(t => WebAssembly.instantiate(t, { env: { mapping_callback(n, r, i, s, u, l, c, f, h, d) { let g = new Xe; g.generatedLine = n + 1, g.generatedColumn = r, i && (g.lastGeneratedColumn = s - 1), u && (g.source = l, g.originalLine = c + 1, g.originalColumn = f, h && (g.name = d)), e[e.length - 1](g); }, start_all_generated_locations_for() { console.time("all_generated_locations_for"); }, end_all_generated_locations_for() { console.timeEnd("all_generated_locations_for"); }, start_compute_column_spans() { console.time("compute_column_spans"); }, end_compute_column_spans() { console.timeEnd("compute_column_spans"); }, start_generated_location_for() { console.time("generated_location_for"); }, end_generated_location_for() { console.timeEnd("generated_location_for"); }, start_original_location_for() { console.time("original_location_for"); }, end_original_location_for() { console.timeEnd("original_location_for"); }, start_parse_mappings() { console.time("parse_mappings"); }, end_parse_mappings() { console.timeEnd("parse_mappings"); }, start_sort_by_generated_location() { console.time("sort_by_generated_location"); }, end_sort_by_generated_location() { console.timeEnd("sort_by_generated_location"); }, start_sort_by_original_location() { console.time("sort_by_original_location"); }, end_sort_by_original_location() { console.timeEnd("sort_by_original_location"); } } })).then(t => ({ exports: t.instance.exports, withMappingCallback: (n, r) => { e.push(n); try {
        r();
    }
    finally {
        e.pop();
    } } })).then(null, t => { throw v = null, t; }), v; }; });
var we = w(P => { var a = A(), V = me(), T = $().ArraySet, _n = W(), Ke = Q(), Ye = pe(), F = Symbol("smcInternal"), m = class {
    constructor(e, t) { return e == F ? Promise.resolve(this) : Ze(e, t); }
    static initialize(e) { Ke.initialize(e["lib/mappings.wasm"]); }
    static fromSourceMap(e, t) { return He(e, t); }
    static with(e, t, n) { let r = null; return new m(e, t).then(s => (r = s, n(s))).then(s => (r && r.destroy(), s), s => { throw r && r.destroy(), s; }); }
    _parseMappings(e, t) { throw new Error("Subclasses must implement _parseMappings"); }
    eachMapping(e, t, n) { throw new Error("Subclasses must implement eachMapping"); }
    allGeneratedPositionsFor(e) { throw new Error("Subclasses must implement allGeneratedPositionsFor"); }
    destroy() { throw new Error("Subclasses must implement destroy"); }
}; m.prototype._version = 3; m.GENERATED_ORDER = 1; m.ORIGINAL_ORDER = 2; m.GREATEST_LOWER_BOUND = 1; m.LEAST_UPPER_BOUND = 2; P.SourceMapConsumer = m; var E = class extends m {
    constructor(e, t) { return super(F).then(n => { let r = e; typeof e == "string" && (r = a.parseSourceMapInput(e)); let i = a.getArg(r, "version"), s = a.getArg(r, "sources"), u = a.getArg(r, "names", []), l = a.getArg(r, "sourceRoot", null), c = a.getArg(r, "sourcesContent", null), f = a.getArg(r, "mappings"), h = a.getArg(r, "file", null); if (i != n._version)
        throw new Error("Unsupported version: " + i); return l && (l = a.normalize(l)), s = s.map(String).map(a.normalize).map(function (d) { return l && a.isAbsolute(l) && a.isAbsolute(d) ? a.relative(l, d) : d; }), n._names = T.fromArray(u.map(String), !0), n._sources = T.fromArray(s, !0), n._absoluteSources = n._sources.toArray().map(function (d) { return a.computeSourceURL(l, d, t); }), n.sourceRoot = l, n.sourcesContent = c, n._mappings = f, n._sourceMapURL = t, n.file = h, n._computedColumnSpans = !1, n._mappingsPtr = 0, n._wasm = null, Ye().then(d => (n._wasm = d, n)); }); }
    _findSourceIndex(e) { let t = e; if (this.sourceRoot != null && (t = a.relative(this.sourceRoot, t)), this._sources.has(t))
        return this._sources.indexOf(t); for (let n = 0; n < this._absoluteSources.length; ++n)
        if (this._absoluteSources[n] == e)
            return n; return -1; }
    static fromSourceMap(e, t) { return new E(e.toString()); }
    get sources() { return this._absoluteSources.slice(); }
    _getMappingsPtr() { return this._mappingsPtr === 0 && this._parseMappings(this._mappings, this.sourceRoot), this._mappingsPtr; }
    _parseMappings(e, t) { let n = e.length, r = this._wasm.exports.allocate_mappings(n), i = new Uint8Array(this._wasm.exports.memory.buffer, r, n); for (let u = 0; u < n; u++)
        i[u] = e.charCodeAt(u); let s = this._wasm.exports.parse_mappings(r); if (!s) {
        let u = this._wasm.exports.get_last_error(), l = `Error parsing mappings (code ${u}): `;
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
    } this._mappingsPtr = s; }
    eachMapping(e, t, n) { let r = t || null, i = n || m.GENERATED_ORDER, s = this.sourceRoot; this._wasm.withMappingCallback(u => { u.source !== null && (u.source = this._sources.at(u.source), u.source = a.computeSourceURL(s, u.source, this._sourceMapURL), u.name !== null && (u.name = this._names.at(u.name))), e.call(r, u); }, () => { switch (i) {
        case m.GENERATED_ORDER:
            this._wasm.exports.by_generated_location(this._getMappingsPtr());
            break;
        case m.ORIGINAL_ORDER:
            this._wasm.exports.by_original_location(this._getMappingsPtr());
            break;
        default: throw new Error("Unknown order of iteration.");
    } }); }
    allGeneratedPositionsFor(e) { let t = a.getArg(e, "source"), n = a.getArg(e, "line"), r = e.column || 0; if (t = this._findSourceIndex(t), t < 0)
        return []; if (n < 1)
        throw new Error("Line numbers must be >= 1"); if (r < 0)
        throw new Error("Column numbers must be >= 0"); let i = []; return this._wasm.withMappingCallback(s => { let u = s.lastGeneratedColumn; this._computedColumnSpans && u === null && (u = 1 / 0), i.push({ line: s.generatedLine, column: s.generatedColumn, lastColumn: u }); }, () => { this._wasm.exports.all_generated_locations_for(this._getMappingsPtr(), t, n - 1, "column" in e, r); }), i; }
    destroy() { this._mappingsPtr !== 0 && (this._wasm.exports.free_mappings(this._mappingsPtr), this._mappingsPtr = 0); }
    computeColumnSpans() { this._computedColumnSpans || (this._wasm.exports.compute_column_spans(this._getMappingsPtr()), this._computedColumnSpans = !0); }
    originalPositionFor(e) { let t = { generatedLine: a.getArg(e, "line"), generatedColumn: a.getArg(e, "column") }; if (t.generatedLine < 1)
        throw new Error("Line numbers must be >= 1"); if (t.generatedColumn < 0)
        throw new Error("Column numbers must be >= 0"); let n = a.getArg(e, "bias", m.GREATEST_LOWER_BOUND); n == null && (n = m.GREATEST_LOWER_BOUND); let r; if (this._wasm.withMappingCallback(i => r = i, () => { this._wasm.exports.original_location_for(this._getMappingsPtr(), t.generatedLine - 1, t.generatedColumn, n); }), r && r.generatedLine === t.generatedLine) {
        let i = a.getArg(r, "source", null);
        i !== null && (i = this._sources.at(i), i = a.computeSourceURL(this.sourceRoot, i, this._sourceMapURL));
        let s = a.getArg(r, "name", null);
        return s !== null && (s = this._names.at(s)), { source: i, line: a.getArg(r, "originalLine", null), column: a.getArg(r, "originalColumn", null), name: s };
    } return { source: null, line: null, column: null, name: null }; }
    hasContentsOfAllSources() { return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function (e) { return e == null; }) : !1; }
    sourceContentFor(e, t) { if (!this.sourcesContent)
        return null; let n = this._findSourceIndex(e); if (n >= 0)
        return this.sourcesContent[n]; let r = e; this.sourceRoot != null && (r = a.relative(this.sourceRoot, r)); let i; if (this.sourceRoot != null && (i = a.urlParse(this.sourceRoot))) {
        let s = r.replace(/^file:\/\//, "");
        if (i.scheme == "file" && this._sources.has(s))
            return this.sourcesContent[this._sources.indexOf(s)];
        if ((!i.path || i.path == "/") && this._sources.has("/" + r))
            return this.sourcesContent[this._sources.indexOf("/" + r)];
    } if (t)
        return null; throw new Error('"' + r + '" is not in the SourceMap.'); }
    generatedPositionFor(e) { let t = a.getArg(e, "source"); if (t = this._findSourceIndex(t), t < 0)
        return { line: null, column: null, lastColumn: null }; let n = { source: t, originalLine: a.getArg(e, "line"), originalColumn: a.getArg(e, "column") }; if (n.originalLine < 1)
        throw new Error("Line numbers must be >= 1"); if (n.originalColumn < 0)
        throw new Error("Column numbers must be >= 0"); let r = a.getArg(e, "bias", m.GREATEST_LOWER_BOUND); r == null && (r = m.GREATEST_LOWER_BOUND); let i; if (this._wasm.withMappingCallback(s => i = s, () => { this._wasm.exports.generated_location_for(this._getMappingsPtr(), n.source, n.originalLine - 1, n.originalColumn, r); }), i && i.source === n.source) {
        let s = i.lastGeneratedColumn;
        return this._computedColumnSpans && s === null && (s = 1 / 0), { line: a.getArg(i, "generatedLine", null), column: a.getArg(i, "generatedColumn", null), lastColumn: s };
    } return { line: null, column: null, lastColumn: null }; }
}; E.prototype.consumer = m; P.BasicSourceMapConsumer = E; var J = class extends m {
    constructor(e, t) { return super(F).then(n => { let r = e; typeof e == "string" && (r = a.parseSourceMapInput(e)); let i = a.getArg(r, "version"), s = a.getArg(r, "sections"); if (i != n._version)
        throw new Error("Unsupported version: " + i); n._sources = new T, n._names = new T, n.__generatedMappings = null, n.__originalMappings = null, n.__generatedMappingsUnsorted = null, n.__originalMappingsUnsorted = null; let u = { line: -1, column: 0 }; return Promise.all(s.map(l => { if (l.url)
        throw new Error("Support for url field in sections not implemented."); let c = a.getArg(l, "offset"), f = a.getArg(c, "line"), h = a.getArg(c, "column"); if (f < u.line || f === u.line && h < u.column)
        throw new Error("Section offsets must be ordered and non-overlapping."); return u = c, new m(a.getArg(l, "map"), t).then(g => ({ generatedOffset: { generatedLine: f + 1, generatedColumn: h + 1 }, consumer: g })); })).then(l => (n._sections = l, n)); }); }
    get _generatedMappings() { return this.__generatedMappings || this._sortGeneratedMappings(), this.__generatedMappings; }
    get _originalMappings() { return this.__originalMappings || this._sortOriginalMappings(), this.__originalMappings; }
    get _generatedMappingsUnsorted() { return this.__generatedMappingsUnsorted || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappingsUnsorted; }
    get _originalMappingsUnsorted() { return this.__originalMappingsUnsorted || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappingsUnsorted; }
    _sortGeneratedMappings() { let e = this._generatedMappingsUnsorted; e.sort(a.compareByGeneratedPositionsDeflated), this.__generatedMappings = e; }
    _sortOriginalMappings() { let e = this._originalMappingsUnsorted; e.sort(a.compareByOriginalPositions), this.__originalMappings = e; }
    get sources() { let e = []; for (let t = 0; t < this._sections.length; t++)
        for (let n = 0; n < this._sections[t].consumer.sources.length; n++)
            e.push(this._sections[t].consumer.sources[n]); return e; }
    originalPositionFor(e) { let t = { generatedLine: a.getArg(e, "line"), generatedColumn: a.getArg(e, "column") }, n = V.search(t, this._sections, function (i, s) { let u = i.generatedLine - s.generatedOffset.generatedLine; return u || i.generatedColumn - s.generatedOffset.generatedColumn; }), r = this._sections[n]; return r ? r.consumer.originalPositionFor({ line: t.generatedLine - (r.generatedOffset.generatedLine - 1), column: t.generatedColumn - (r.generatedOffset.generatedLine === t.generatedLine ? r.generatedOffset.generatedColumn - 1 : 0), bias: e.bias }) : { source: null, line: null, column: null, name: null }; }
    hasContentsOfAllSources() { return this._sections.every(function (e) { return e.consumer.hasContentsOfAllSources(); }); }
    sourceContentFor(e, t) { for (let n = 0; n < this._sections.length; n++) {
        let i = this._sections[n].consumer.sourceContentFor(e, !0);
        if (i)
            return i;
    } if (t)
        return null; throw new Error('"' + e + '" is not in the SourceMap.'); }
    generatedPositionFor(e) { for (let t = 0; t < this._sections.length; t++) {
        let n = this._sections[t];
        if (n.consumer._findSourceIndex(a.getArg(e, "source")) === -1)
            continue;
        let r = n.consumer.generatedPositionFor(e);
        if (r)
            return { line: r.line + (n.generatedOffset.generatedLine - 1), column: r.column + (n.generatedOffset.generatedLine === r.line ? n.generatedOffset.generatedColumn - 1 : 0) };
    } return { line: null, column: null }; }
    _parseMappings(e, t) { let n = this.__generatedMappingsUnsorted = [], r = this.__originalMappingsUnsorted = []; for (let i = 0; i < this._sections.length; i++) {
        let s = this._sections[i], u = [];
        s.consumer.eachMapping(l => u.push(l));
        for (let l = 0; l < u.length; l++) {
            let c = u[l], f = a.computeSourceURL(s.consumer.sourceRoot, null, this._sourceMapURL);
            this._sources.add(f), f = this._sources.indexOf(f);
            let h = null;
            c.name && (this._names.add(c.name), h = this._names.indexOf(c.name));
            let d = { source: f, generatedLine: c.generatedLine + (s.generatedOffset.generatedLine - 1), generatedColumn: c.generatedColumn + (s.generatedOffset.generatedLine === c.generatedLine ? s.generatedOffset.generatedColumn - 1 : 0), originalLine: c.originalLine, originalColumn: c.originalColumn, name: h };
            n.push(d), typeof d.originalLine == "number" && r.push(d);
        }
    } }
    eachMapping(e, t, n) { let r = t || null, i = n || m.GENERATED_ORDER, s; switch (i) {
        case m.GENERATED_ORDER:
            s = this._generatedMappings;
            break;
        case m.ORIGINAL_ORDER:
            s = this._originalMappings;
            break;
        default: throw new Error("Unknown order of iteration.");
    } let u = this.sourceRoot; s.map(function (l) { let c = null; return l.source !== null && (c = this._sources.at(l.source), c = a.computeSourceURL(u, c, this._sourceMapURL)), { source: c, generatedLine: l.generatedLine, generatedColumn: l.generatedColumn, originalLine: l.originalLine, originalColumn: l.originalColumn, name: l.name === null ? null : this._names.at(l.name) }; }, this).forEach(e, r); }
    _findMapping(e, t, n, r, i, s) { if (e[n] <= 0)
        throw new TypeError("Line must be greater than or equal to 1, got " + e[n]); if (e[r] < 0)
        throw new TypeError("Column must be greater than or equal to 0, got " + e[r]); return V.search(e, t, i, s); }
    allGeneratedPositionsFor(e) { let t = a.getArg(e, "line"), n = { source: a.getArg(e, "source"), originalLine: t, originalColumn: a.getArg(e, "column", 0) }; if (n.source = this._findSourceIndex(n.source), n.source < 0)
        return []; if (n.originalLine < 1)
        throw new Error("Line numbers must be >= 1"); if (n.originalColumn < 0)
        throw new Error("Column numbers must be >= 0"); let r = [], i = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", a.compareByOriginalPositions, V.LEAST_UPPER_BOUND); if (i >= 0) {
        let s = this._originalMappings[i];
        if (e.column === void 0) {
            let u = s.originalLine;
            for (; s && s.originalLine === u;) {
                let l = s.lastGeneratedColumn;
                this._computedColumnSpans && l === null && (l = 1 / 0), r.push({ line: a.getArg(s, "generatedLine", null), column: a.getArg(s, "generatedColumn", null), lastColumn: l }), s = this._originalMappings[++i];
            }
        }
        else {
            let u = s.originalColumn;
            for (; s && s.originalLine === t && s.originalColumn == u;) {
                let l = s.lastGeneratedColumn;
                this._computedColumnSpans && l === null && (l = 1 / 0), r.push({ line: a.getArg(s, "generatedLine", null), column: a.getArg(s, "generatedColumn", null), lastColumn: l }), s = this._originalMappings[++i];
            }
        }
    } return r; }
    destroy() { for (let e = 0; e < this._sections.length; e++)
        this._sections[e].consumer.destroy(); }
}; P.IndexedSourceMapConsumer = J; function Ze(o, e) { let t = o; typeof o == "string" && (t = a.parseSourceMapInput(o)); let n = t.sections != null ? new J(t, e) : new E(t, e); return Promise.resolve(n); } function He(o, e) { return E.fromSourceMap(o, e); } });
var Le = w(Ce => { var en = k().SourceMapGenerator, D = A(), nn = /(\r?\n)/, tn = 10, y = "$$$isSourceNode$$$", I = class {
    constructor(e, t, n, r, i) { this.children = [], this.sourceContents = {}, this.line = e ?? null, this.column = t ?? null, this.source = n ?? null, this.name = i ?? null, this[y] = !0, r != null && this.add(r); }
    static fromStringWithSourceMap(e, t, n) { let r = new I, i = e.split(nn), s = 0, u = function () { let g = G(), C = G() || ""; return g + C; function G() { return s < i.length ? i[s++] : void 0; } }, l = 1, c = 0, f = null, h; return t.eachMapping(function (g) { if (f !== null)
        if (l < g.generatedLine)
            d(f, u()), l++, c = 0;
        else {
            h = i[s] || "";
            let C = h.substr(0, g.generatedColumn - c);
            i[s] = h.substr(g.generatedColumn - c), c = g.generatedColumn, d(f, C), f = g;
            return;
        } for (; l < g.generatedLine;)
        r.add(u()), l++; c < g.generatedColumn && (h = i[s] || "", r.add(h.substr(0, g.generatedColumn)), i[s] = h.substr(g.generatedColumn), c = g.generatedColumn), f = g; }, this), s < i.length && (f && d(f, u()), r.add(i.splice(s).join(""))), t.sources.forEach(function (g) { let C = t.sourceContentFor(g); C != null && (n != null && (g = D.join(n, g)), r.setSourceContent(g, C)); }), r; function d(g, C) { if (g === null || g.source === void 0)
        r.add(C);
    else {
        let G = n ? D.join(n, g.source) : g.source;
        r.add(new I(g.originalLine, g.originalColumn, G, C, g.name));
    } } }
    add(e) { if (Array.isArray(e))
        e.forEach(function (t) { this.add(t); }, this);
    else if (e[y] || typeof e == "string")
        e && this.children.push(e);
    else
        throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e); return this; }
    prepend(e) { if (Array.isArray(e))
        for (let t = e.length - 1; t >= 0; t--)
            this.prepend(e[t]);
    else if (e[y] || typeof e == "string")
        this.children.unshift(e);
    else
        throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e); return this; }
    walk(e) { let t; for (let n = 0, r = this.children.length; n < r; n++)
        t = this.children[n], t[y] ? t.walk(e) : t !== "" && e(t, { source: this.source, line: this.line, column: this.column, name: this.name }); }
    join(e) { let t, n, r = this.children.length; if (r > 0) {
        for (t = [], n = 0; n < r - 1; n++)
            t.push(this.children[n]), t.push(e);
        t.push(this.children[n]), this.children = t;
    } return this; }
    replaceRight(e, t) { let n = this.children[this.children.length - 1]; return n[y] ? n.replaceRight(e, t) : typeof n == "string" ? this.children[this.children.length - 1] = n.replace(e, t) : this.children.push("".replace(e, t)), this; }
    setSourceContent(e, t) { this.sourceContents[D.toSetString(e)] = t; }
    walkSourceContents(e) { for (let n = 0, r = this.children.length; n < r; n++)
        this.children[n][y] && this.children[n].walkSourceContents(e); let t = Object.keys(this.sourceContents); for (let n = 0, r = t.length; n < r; n++)
        e(D.fromSetString(t[n]), this.sourceContents[t[n]]); }
    toString() { let e = ""; return this.walk(function (t) { e += t; }), e; }
    toStringWithSourceMap(e) { let t = { code: "", line: 1, column: 0 }, n = new en(e), r = !1, i = null, s = null, u = null, l = null; return this.walk(function (c, f) { t.code += c, f.source !== null && f.line !== null && f.column !== null ? ((i !== f.source || s !== f.line || u !== f.column || l !== f.name) && n.addMapping({ source: f.source, original: { line: f.line, column: f.column }, generated: { line: t.line, column: t.column }, name: f.name }), i = f.source, s = f.line, u = f.column, l = f.name, r = !0) : r && (n.addMapping({ generated: { line: t.line, column: t.column } }), i = null, r = !1); for (let h = 0, d = c.length; h < d; h++)
        c.charCodeAt(h) === tn ? (t.line++, t.column = 0, h + 1 === d ? (i = null, r = !1) : r && n.addMapping({ source: f.source, original: { line: f.line, column: f.column }, generated: { line: t.line, column: t.column }, name: f.name })) : t.column++; }), this.walkSourceContents(function (c, f) { n.setSourceContent(c, f); }), { code: t.code, map: n }; }
}; Ce.SourceNode = I; });
var X = w(q => { q.SourceMapGenerator = k().SourceMapGenerator; q.SourceMapConsumer = we().SourceMapConsumer; q.SourceNode = Le().SourceNode; });
var Ee = Y(X()), Se = Y(X()), { SourceMapGenerator: Ln, SourceMapConsumer: En, SourceNode: Sn } = Se, { default: rn, ...on } = Se, bn = Ee.default ?? rn ?? on;
export { En as SourceMapConsumer, Ln as SourceMapGenerator, Sn as SourceNode, bn as default };
