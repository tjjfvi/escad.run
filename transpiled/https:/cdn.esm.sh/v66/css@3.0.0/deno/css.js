/* esm.sh - esbuild bundle(css@3.0.0) deno production */
import __inherits$ from "/transpiled/https://cdn.esm.sh/v66/inherits@2.0.4/deno/inherits.js";
import __path$ from "/transpiled/https://deno.land/std@0.125.0/node/path.js";
import __fs$ from "/transpiled/https://deno.land/std@0.125.0/node/fs.js";
import __source_map_resolve$ from "/transpiled/https://cdn.esm.sh/v66/source-map-resolve@0.6.0/deno/source-map-resolve.js";
import { SourceMapGenerator as __source_map$SourceMapGenerator } from "/transpiled/https://cdn.esm.sh/v66/source-map@0.6.1/deno/source-map.js";
import { SourceMapConsumer as __source_map$SourceMapConsumer } from "/transpiled/https://cdn.esm.sh/v66/source-map@0.6.1/deno/source-map.js";
var gt = Object.create;
var P = Object.defineProperty;
var wt = Object.getOwnPropertyDescriptor;
var Vt = Object.getOwnPropertyNames;
var kt = Object.getPrototypeOf, qt = Object.prototype.hasOwnProperty;
var xt = t => P(t, "__esModule", { value: !0 });
var V = (t => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(t, { get: (e, n) => (typeof require != "undefined" ? require : e)[n] }) : t)(function (t) { if (typeof require != "undefined")
    return require.apply(this, arguments); throw new Error('Dynamic require of "' + t + '" is not supported'); });
var k = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var St = (t, e, n, o) => { if (e && typeof e == "object" || typeof e == "function")
    for (let f of Vt(e))
        !qt.call(t, f) && (n || f !== "default") && P(t, f, { get: () => e[f], enumerable: !(o = wt(e, f)) || o.enumerable }); return t; }, I = (t, e) => St(xt(P(t != null ? gt(kt(t)) : {}, "default", !e && t && t.__esModule ? { get: () => t.default, enumerable: !0 } : { value: t, enumerable: !0 })), t);
var B = k((It, b) => {
    var L = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
    b.exports = function (t, e) {
        e = e || {};
        var n = 1, o = 1;
        function f(r) {
            var i = r.match(/\n/g);
            i && (n += i.length);
            var s = r.lastIndexOf(`
`);
            o = ~s ? r.length - s : o + r.length;
        }
        function a() { var r = { line: n, column: o }; return function (i) { return i.position = new x(r), _(), i; }; }
        function x(r) { this.start = r, this.end = { line: n, column: o }, this.source = e.source; }
        x.prototype.content = t;
        var R = [];
        function u(r) { var i = new Error(e.source + ":" + n + ":" + o + ": " + r); if (i.reason = r, i.filename = e.source, i.line = n, i.column = o, i.source = t, e.silent)
            R.push(i);
        else
            throw i; }
        function et() { var r = q(); return { type: "stylesheet", stylesheet: { source: e.source, rules: r, parsingErrors: R } }; }
        function d() { return p(/^{\s*/); }
        function g() { return p(/^}/); }
        function q() { var r, i = []; for (_(), l(i); t.length && t.charAt(0) != "}" && (r = yt() || dt());)
            r !== !1 && (i.push(r), l(i)); return i; }
        function p(r) { var i = r.exec(t); if (!!i) {
            var s = i[0];
            return f(s), t = t.slice(s.length), i;
        } }
        function _() { p(/^\s*/); }
        function l(r) { var i; for (r = r || []; i = rt();)
            i !== !1 && r.push(i); return r; }
        function rt() { var r = a(); if (!(t.charAt(0) != "/" || t.charAt(1) != "*")) {
            for (var i = 2; t.charAt(i) != "" && (t.charAt(i) != "*" || t.charAt(i + 1) != "/");)
                ++i;
            if (i += 2, t.charAt(i - 1) === "")
                return u("End of comment missing");
            var s = t.slice(2, i - 2);
            return o += 2, f(s), t = t.slice(i), o += 2, r({ type: "comment", comment: s });
        } }
        function z() { var r = p(/^([^{]+)/); if (!!r)
            return y(r[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (i) { return i.replace(/,/g, "\u200C"); }).split(/\s*(?![^(]*\)),\s*/).map(function (i) { return i.replace(/\u200C/g, ","); }); }
        function C() { var r = a(), i = p(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/); if (!!i) {
            if (i = y(i[0]), !p(/^:\s*/))
                return u("property missing ':'");
            var s = p(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/), m = r({ type: "declaration", property: i.replace(L, ""), value: s ? y(s[0]).replace(L, "") : "" });
            return p(/^[;\s]*/), m;
        } }
        function F() { var r = []; if (!d())
            return u("missing '{'"); l(r); for (var i; i = C();)
            i !== !1 && (r.push(i), l(r)); return g() ? r : u("missing '}'"); }
        function nt() { for (var r, i = [], s = a(); r = p(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)
            i.push(r[1]), p(/^,\s*/); if (!!i.length)
            return s({ type: "keyframe", values: i, declarations: F() }); }
        function st() { var r = a(), s = p(/^@([-\w]+)?keyframes\s*/); if (!!s) {
            var i = s[1], s = p(/^([-\w]+)\s*/);
            if (!s)
                return u("@keyframes missing name");
            var m = s[1];
            if (!d())
                return u("@keyframes missing '{'");
            for (var v, S = l(); v = nt();)
                S.push(v), S = S.concat(l());
            return g() ? r({ type: "keyframes", name: m, vendor: i, keyframes: S }) : u("@keyframes missing '}'");
        } }
        function ot() { var r = a(), i = p(/^@supports *([^{]+)/); if (!!i) {
            var s = y(i[1]);
            if (!d())
                return u("@supports missing '{'");
            var m = l().concat(q());
            return g() ? r({ type: "supports", supports: s, rules: m }) : u("@supports missing '}'");
        } }
        function at() { var r = a(), i = p(/^@host\s*/); if (!!i) {
            if (!d())
                return u("@host missing '{'");
            var s = l().concat(q());
            return g() ? r({ type: "host", rules: s }) : u("@host missing '}'");
        } }
        function ut() { var r = a(), i = p(/^@media *([^{]+)/); if (!!i) {
            var s = y(i[1]);
            if (!d())
                return u("@media missing '{'");
            var m = l().concat(q());
            return g() ? r({ type: "media", media: s, rules: m }) : u("@media missing '}'");
        } }
        function pt() { var r = a(), i = p(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/); if (!!i)
            return r({ type: "custom-media", name: y(i[1]), media: y(i[2]) }); }
        function mt() { var r = a(), i = p(/^@page */); if (!!i) {
            var s = z() || [];
            if (!d())
                return u("@page missing '{'");
            for (var m = l(), v; v = C();)
                m.push(v), m = m.concat(l());
            return g() ? r({ type: "page", selectors: s, declarations: m }) : u("@page missing '}'");
        } }
        function ct() { var r = a(), i = p(/^@([-\w]+)?document *([^{]+)/); if (!!i) {
            var s = y(i[1]), m = y(i[2]);
            if (!d())
                return u("@document missing '{'");
            var v = l().concat(q());
            return g() ? r({ type: "document", document: m, vendor: s, rules: v }) : u("@document missing '}'");
        } }
        function ht() { var r = a(), i = p(/^@font-face\s*/); if (!!i) {
            if (!d())
                return u("@font-face missing '{'");
            for (var s = l(), m; m = C();)
                s.push(m), s = s.concat(l());
            return g() ? r({ type: "font-face", declarations: s }) : u("@font-face missing '}'");
        } }
        var ft = M("import"), lt = M("charset"), vt = M("namespace");
        function M(r) { var i = new RegExp("^@" + r + "\\s*([^;]+);"); return function () { var s = a(), m = p(i); if (!!m) {
            var v = { type: r };
            return v[r] = m[1].trim(), s(v);
        } }; }
        function yt() { if (t[0] == "@")
            return st() || ut() || pt() || ot() || ft() || lt() || vt() || ct() || mt() || at() || ht(); }
        function dt() { var r = a(), i = z(); return i ? (l(), r({ type: "rule", selectors: i, declarations: F() })) : u("selector missing"); }
        return O(et());
    };
    function y(t) { return t ? t.replace(/^\s+|\s+$/g, "") : ""; }
    function O(t, e) { var n = t && typeof t.type == "string", o = n ? t : e; for (var f in t) {
        var a = t[f];
        Array.isArray(a) ? a.forEach(function (x) { O(x, o); }) : a && typeof a == "object" && O(a, o);
    } return n && Object.defineProperty(t, "parent", { configurable: !0, writable: !0, enumerable: !1, value: e || null }), t; }
});
var j = k((Lt, N) => { N.exports = A; function A(t) { this.options = t || {}; } A.prototype.emit = function (t) { return t; }; A.prototype.visit = function (t) { return this[t.type](t); }; A.prototype.mapVisit = function (t, e) { var n = ""; e = e || ""; for (var o = 0, f = t.length; o < f; o++)
    n += this.visit(t[o]), e && o < f - 1 && (n += this.emit(e)); return n; }; });
var T = k((bt, J) => { var G = j(), At = __inherits$; J.exports = h; function h(t) { G.call(this, t); } At(h, G); h.prototype.compile = function (t) { return t.stylesheet.rules.map(this.visit, this).join(""); }; h.prototype.comment = function (t) { return this.emit("", t.position); }; h.prototype.import = function (t) { return this.emit("@import " + t.import + ";", t.position); }; h.prototype.media = function (t) { return this.emit("@media " + t.media, t.position) + this.emit("{") + this.mapVisit(t.rules) + this.emit("}"); }; h.prototype.document = function (t) { var e = "@" + (t.vendor || "") + "document " + t.document; return this.emit(e, t.position) + this.emit("{") + this.mapVisit(t.rules) + this.emit("}"); }; h.prototype.charset = function (t) { return this.emit("@charset " + t.charset + ";", t.position); }; h.prototype.namespace = function (t) { return this.emit("@namespace " + t.namespace + ";", t.position); }; h.prototype.supports = function (t) { return this.emit("@supports " + t.supports, t.position) + this.emit("{") + this.mapVisit(t.rules) + this.emit("}"); }; h.prototype.keyframes = function (t) { return this.emit("@" + (t.vendor || "") + "keyframes " + t.name, t.position) + this.emit("{") + this.mapVisit(t.keyframes) + this.emit("}"); }; h.prototype.keyframe = function (t) { var e = t.declarations; return this.emit(t.values.join(","), t.position) + this.emit("{") + this.mapVisit(e) + this.emit("}"); }; h.prototype.page = function (t) { var e = t.selectors.length ? t.selectors.join(", ") : ""; return this.emit("@page " + e, t.position) + this.emit("{") + this.mapVisit(t.declarations) + this.emit("}"); }; h.prototype["font-face"] = function (t) { return this.emit("@font-face", t.position) + this.emit("{") + this.mapVisit(t.declarations) + this.emit("}"); }; h.prototype.host = function (t) { return this.emit("@host", t.position) + this.emit("{") + this.mapVisit(t.rules) + this.emit("}"); }; h.prototype["custom-media"] = function (t) { return this.emit("@custom-media " + t.name + " " + t.media + ";", t.position); }; h.prototype.rule = function (t) { var e = t.declarations; return e.length ? this.emit(t.selectors.join(","), t.position) + this.emit("{") + this.mapVisit(e) + this.emit("}") : ""; }; h.prototype.declaration = function (t) { return this.emit(t.property + ":" + t.value, t.position) + this.emit(";"); }; });
var H = k((Bt, D) => {
    var U = j(), Ct = __inherits$;
    D.exports = c;
    function c(t) { t = t || {}, U.call(this, t), this.indentation = t.indent; }
    Ct(c, U);
    c.prototype.compile = function (t) { return this.stylesheet(t); };
    c.prototype.stylesheet = function (t) {
        return this.mapVisit(t.stylesheet.rules, `

`);
    };
    c.prototype.comment = function (t) { return this.emit(this.indent() + "/*" + t.comment + "*/", t.position); };
    c.prototype.import = function (t) { return this.emit("@import " + t.import + ";", t.position); };
    c.prototype.media = function (t) {
        return this.emit("@media " + t.media, t.position) + this.emit(` {
` + this.indent(1)) + this.mapVisit(t.rules, `

`) + this.emit(this.indent(-1) + `
}`);
    };
    c.prototype.document = function (t) {
        var e = "@" + (t.vendor || "") + "document " + t.document;
        return this.emit(e, t.position) + this.emit(`  {
` + this.indent(1)) + this.mapVisit(t.rules, `

`) + this.emit(this.indent(-1) + `
}`);
    };
    c.prototype.charset = function (t) { return this.emit("@charset " + t.charset + ";", t.position); };
    c.prototype.namespace = function (t) { return this.emit("@namespace " + t.namespace + ";", t.position); };
    c.prototype.supports = function (t) {
        return this.emit("@supports " + t.supports, t.position) + this.emit(` {
` + this.indent(1)) + this.mapVisit(t.rules, `

`) + this.emit(this.indent(-1) + `
}`);
    };
    c.prototype.keyframes = function (t) {
        return this.emit("@" + (t.vendor || "") + "keyframes " + t.name, t.position) + this.emit(` {
` + this.indent(1)) + this.mapVisit(t.keyframes, `
`) + this.emit(this.indent(-1) + "}");
    };
    c.prototype.keyframe = function (t) {
        var e = t.declarations;
        return this.emit(this.indent()) + this.emit(t.values.join(", "), t.position) + this.emit(` {
` + this.indent(1)) + this.mapVisit(e, `
`) + this.emit(this.indent(-1) + `
` + this.indent() + `}
`);
    };
    c.prototype.page = function (t) {
        var e = t.selectors.length ? t.selectors.join(", ") + " " : "";
        return this.emit("@page " + e, t.position) + this.emit(`{
`) + this.emit(this.indent(1)) + this.mapVisit(t.declarations, `
`) + this.emit(this.indent(-1)) + this.emit(`
}`);
    };
    c.prototype["font-face"] = function (t) {
        return this.emit("@font-face ", t.position) + this.emit(`{
`) + this.emit(this.indent(1)) + this.mapVisit(t.declarations, `
`) + this.emit(this.indent(-1)) + this.emit(`
}`);
    };
    c.prototype.host = function (t) {
        return this.emit("@host", t.position) + this.emit(` {
` + this.indent(1)) + this.mapVisit(t.rules, `

`) + this.emit(this.indent(-1) + `
}`);
    };
    c.prototype["custom-media"] = function (t) { return this.emit("@custom-media " + t.name + " " + t.media + ";", t.position); };
    c.prototype.rule = function (t) {
        var e = this.indent(), n = t.declarations;
        return n.length ? this.emit(t.selectors.map(function (o) { return e + o; }).join(`,
`), t.position) + this.emit(` {
`) + this.emit(this.indent(1)) + this.mapVisit(n, `
`) + this.emit(this.indent(-1)) + this.emit(`
` + this.indent() + "}") : "";
    };
    c.prototype.declaration = function (t) { return this.emit(this.indent()) + this.emit(t.property + ": " + t.value, t.position) + this.emit(";"); };
    c.prototype.indent = function (t) { return this.level = this.level || 1, t != null ? (this.level += t, "") : Array(this.level).join(this.indentation || "  "); };
});
var X = k((w, W) => {
    var Mt = __source_map$SourceMapGenerator, Pt = __source_map$SourceMapConsumer, Ot = __source_map_resolve$, jt = __fs$, K = __path$;
    W.exports = Et;
    var Q = function (t) { return K.sep === "\\" ? t.replace(/\\/g, "/").replace(/^[a-z]:\/?/i, "/") : t; };
    function Et(t) { t._comment = t.comment, t.map = new Mt, t.position = { line: 1, column: 1 }, t.files = {}; for (var e in w)
        t[e] = w[e]; }
    w.updatePosition = function (t) {
        var e = t.match(/\n/g);
        e && (this.position.line += e.length);
        var n = t.lastIndexOf(`
`);
        this.position.column = ~n ? t.length - n : this.position.column + t.length;
    };
    w.emit = function (t, e) { if (e) {
        var n = Q(e.source || "source.css");
        this.map.addMapping({ source: n, generated: { line: this.position.line, column: Math.max(this.position.column - 1, 0) }, original: { line: e.start.line, column: e.start.column - 1 } }), this.addFile(n, e);
    } return this.updatePosition(t), t; };
    w.addFile = function (t, e) { typeof e.content == "string" && (Object.prototype.hasOwnProperty.call(this.files, t) || (this.files[t] = e.content)); };
    w.applySourceMaps = function () { Object.keys(this.files).forEach(function (t) { var e = this.files[t]; if (this.map.setSourceContent(t, e), this.options.inputSourcemaps !== !1) {
        var n = Ot.resolveSync(e, t, jt.readFileSync);
        if (n) {
            var o = new Pt(n.map), f = n.sourcesRelativeTo;
            this.map.applySourceMap(o, t, Q(K.dirname(f)));
        }
    } }, this); };
    w.comment = function (t) { return /^# sourceMappingURL=/.test(t.comment) ? this.emit("", t.position) : this._comment(t); };
});
var Z = k((Nt, Y) => { var $t = T(), Rt = H(); Y.exports = function (t, e) { e = e || {}; var n = e.compress ? new $t(e) : new Rt(e); if (e.sourcemap) {
    var o = X();
    o(n);
    var a = n.compile(t);
    n.applySourceMaps();
    var f = e.sourcemap === "generator" ? n.map : n.map.toJSON();
    return { code: a, map: f };
} var a = n.compile(t); return a; }; });
var $ = k(E => { E.parse = B(); E.stringify = Z(); });
var tt = I($()), it = I($()), { parse: Jt, stringify: Tt } = it, { default: _t, ...zt } = it, Ut = tt.default ?? _t ?? zt;
export { Ut as default, Jt as parse, Tt as stringify };
