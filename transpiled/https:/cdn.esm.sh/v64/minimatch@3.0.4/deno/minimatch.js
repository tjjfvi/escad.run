/* esm.sh - esbuild bundle(minimatch@3.0.4) deno production */
import __brace_expansion$ from "/transpiled/https://cdn.esm.sh/v64/brace-expansion@1.1.11/deno/brace-expansion.js";
import __path$ from "/transpiled/https://deno.land/std@0.122.0/node/path.js";
var ae = Object.create;
var A = Object.defineProperty;
var se = Object.getOwnPropertyDescriptor;
var ie = Object.getOwnPropertyNames;
var ue = Object.getPrototypeOf, oe = Object.prototype.hasOwnProperty;
var he = e => A(e, "__esModule", { value: !0 });
var z = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, { get: (r, a) => (typeof require != "undefined" ? require : r)[a] }) : e)(function (e) { if (typeof require != "undefined")
    return require.apply(this, arguments); throw new Error('Dynamic require of "' + e + '" is not supported'); });
var ce = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var fe = (e, r, a, t) => { if (r && typeof r == "object" || typeof r == "function")
    for (let n of ie(r))
        !oe.call(e, n) && (a || n !== "default") && A(e, n, { get: () => r[n], enumerable: !(t = se(r, n)) || t.enumerable }); return e; }, F = (e, r) => fe(he(A(e != null ? ae(ue(e)) : {}, "default", !r && e && e.__esModule ? { get: () => e.default, enumerable: !0 } : { value: e, enumerable: !0 })), e);
var q = ce((Re, V) => {
    V.exports = l;
    l.Minimatch = h;
    var k = { sep: "/" };
    try {
        k = __path$;
    }
    catch { }
    var L = l.GLOBSTAR = h.GLOBSTAR = {}, ge = __brace_expansion$, H = { "!": { open: "(?:(?!(?:", close: "))[^/]*?)" }, "?": { open: "(?:", close: ")?" }, "+": { open: "(?:", close: ")+" }, "*": { open: "(?:", close: ")*" }, "@": { open: "(?:", close: ")" } }, M = "[^/]", N = M + "*?", ve = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", le = "(?:(?!(?:\\/|^)\\.).)*?", I = me("().*{}+?[]^$\\!");
    function me(e) { return e.split("").reduce(function (r, a) { return r[a] = !0, r; }, {}); }
    var J = /\/+/;
    l.filter = de;
    function de(e, r) { return r = r || {}, function (a, t, n) { return l(a, e, r); }; }
    function K(e, r) { e = e || {}, r = r || {}; var a = {}; return Object.keys(r).forEach(function (t) { a[t] = r[t]; }), Object.keys(e).forEach(function (t) { a[t] = e[t]; }), a; }
    l.defaults = function (e) { if (!e || !Object.keys(e).length)
        return l; var r = l, a = function (n, s, u) { return r.minimatch(n, s, K(e, u)); }; return a.Minimatch = function (n, s) { return new r.Minimatch(n, K(e, s)); }, a; };
    h.defaults = function (e) { return !e || !Object.keys(e).length ? h : l.defaults(e).Minimatch; };
    function l(e, r, a) { if (typeof r != "string")
        throw new TypeError("glob pattern string required"); return a || (a = {}), !a.nocomment && r.charAt(0) === "#" ? !1 : r.trim() === "" ? e === "" : new h(r, a).match(e); }
    function h(e, r) { if (!(this instanceof h))
        return new h(e, r); if (typeof e != "string")
        throw new TypeError("glob pattern string required"); r || (r = {}), e = e.trim(), k.sep !== "/" && (e = e.split(k.sep).join("/")), this.options = r, this.set = [], this.pattern = e, this.regexp = null, this.negate = !1, this.comment = !1, this.empty = !1, this.make(); }
    h.prototype.debug = function () { };
    h.prototype.make = be;
    function be() { if (!this._made) {
        var e = this.pattern, r = this.options;
        if (!r.nocomment && e.charAt(0) === "#") {
            this.comment = !0;
            return;
        }
        if (!e) {
            this.empty = !0;
            return;
        }
        this.parseNegate();
        var a = this.globSet = this.braceExpand();
        r.debug && (this.debug = console.error), this.debug(this.pattern, a), a = this.globParts = a.map(function (t) { return t.split(J); }), this.debug(this.pattern, a), a = a.map(function (t, n, s) { return t.map(this.parse, this); }, this), this.debug(this.pattern, a), a = a.filter(function (t) { return t.indexOf(!1) === -1; }), this.debug(this.pattern, a), this.set = a;
    } }
    h.prototype.parseNegate = pe;
    function pe() { var e = this.pattern, r = !1, a = this.options, t = 0; if (!a.nonegate) {
        for (var n = 0, s = e.length; n < s && e.charAt(n) === "!"; n++)
            r = !r, t++;
        t && (this.pattern = e.substr(t)), this.negate = r;
    } }
    l.braceExpand = function (e, r) { return Q(e, r); };
    h.prototype.braceExpand = Q;
    function Q(e, r) { if (r || (this instanceof h ? r = this.options : r = {}), e = typeof e == "undefined" ? this.pattern : e, typeof e == "undefined")
        throw new TypeError("undefined pattern"); return r.nobrace || !e.match(/\{.*\}/) ? [e] : ge(e); }
    h.prototype.parse = ye;
    var O = {};
    function ye(e, r) {
        if (e.length > 1024 * 64)
            throw new TypeError("pattern is too long");
        var a = this.options;
        if (!a.noglobstar && e === "**")
            return L;
        if (e === "")
            return "";
        var t = "", n = !!a.nocase, s = !1, u = [], m = [], i, o = !1, g = -1, d = -1, y = e.charAt(0) === "." ? "" : a.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", p = this;
        function b() { if (i) {
            switch (i) {
                case "*":
                    t += N, n = !0;
                    break;
                case "?":
                    t += M, n = !0;
                    break;
                default:
                    t += "\\" + i;
                    break;
            }
            p.debug("clearStateChar %j %j", i, t), i = !1;
        } }
        for (var v = 0, Y = e.length, c; v < Y && (c = e.charAt(v)); v++) {
            if (this.debug("%s	%s %s %j", e, v, t, c), s && I[c]) {
                t += "\\" + c, s = !1;
                continue;
            }
            switch (c) {
                case "/": return !1;
                case "\\":
                    b(), s = !0;
                    continue;
                case "?":
                case "*":
                case "+":
                case "@":
                case "!":
                    if (this.debug("%s	%s %s %j <-- stateChar", e, v, t, c), o) {
                        this.debug("  in class"), c === "!" && v === d + 1 && (c = "^"), t += c;
                        continue;
                    }
                    p.debug("call clearStateChar %j", i), b(), i = c, a.noext && b();
                    continue;
                case "(":
                    if (o) {
                        t += "(";
                        continue;
                    }
                    if (!i) {
                        t += "\\(";
                        continue;
                    }
                    u.push({ type: i, start: v - 1, reStart: t.length, open: H[i].open, close: H[i].close }), t += i === "!" ? "(?:(?!(?:" : "(?:", this.debug("plType %j %j", i, t), i = !1;
                    continue;
                case ")":
                    if (o || !u.length) {
                        t += "\\)";
                        continue;
                    }
                    b(), n = !0;
                    var f = u.pop();
                    t += f.close, f.type === "!" && m.push(f), f.reEnd = t.length;
                    continue;
                case "|":
                    if (o || !u.length || s) {
                        t += "\\|", s = !1;
                        continue;
                    }
                    b(), t += "|";
                    continue;
                case "[":
                    if (b(), o) {
                        t += "\\" + c;
                        continue;
                    }
                    o = !0, d = v, g = t.length, t += c;
                    continue;
                case "]":
                    if (v === d + 1 || !o) {
                        t += "\\" + c, s = !1;
                        continue;
                    }
                    if (o) {
                        var j = e.substring(d + 1, v);
                        try {
                            RegExp("[" + j + "]");
                        }
                        catch {
                            var S = this.parse(j, O);
                            t = t.substr(0, g) + "\\[" + S[0] + "\\]", n = n || S[1], o = !1;
                            continue;
                        }
                    }
                    n = !0, o = !1, t += c;
                    continue;
                default: b(), s ? s = !1 : I[c] && !(c === "^" && o) && (t += "\\"), t += c;
            }
        }
        for (o && (j = e.substr(d + 1), S = this.parse(j, O), t = t.substr(0, g) + "\\[" + S[0], n = n || S[1]), f = u.pop(); f; f = u.pop()) {
            var w = t.slice(f.reStart + f.open.length);
            this.debug("setting tail", t, f), w = w.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (D, U, C) { return C || (C = "\\"), U + U + C + "|"; }), this.debug(`tail=%j
   %s`, w, w, f, t);
            var Z = f.type === "*" ? N : f.type === "?" ? M : "\\" + f.type;
            n = !0, t = t.slice(0, f.reStart) + Z + "\\(" + w;
        }
        b(), s && (t += "\\\\");
        var B = !1;
        switch (t.charAt(0)) {
            case ".":
            case "[":
            case "(": B = !0;
        }
        for (var R = m.length - 1; R > -1; R--) {
            var x = m[R], _ = t.slice(0, x.reStart), ee = t.slice(x.reStart, x.reEnd - 8), G = t.slice(x.reEnd - 8, x.reEnd), E = t.slice(x.reEnd);
            G += E;
            var te = _.split("(").length - 1, $ = E;
            for (v = 0; v < te; v++)
                $ = $.replace(/\)[+*?]?/, "");
            E = $;
            var P = "";
            E === "" && r !== O && (P = "$");
            var re = _ + ee + E + P + G;
            t = re;
        }
        if (t !== "" && n && (t = "(?=.)" + t), B && (t = y + t), r === O)
            return [t, n];
        if (!n)
            return we(e);
        var ne = a.nocase ? "i" : "";
        try {
            var T = new RegExp("^" + t + "$", ne);
        }
        catch {
            return new RegExp("$.");
        }
        return T._glob = e, T._src = t, T;
    }
    l.makeRe = function (e, r) { return new h(e, r || {}).makeRe(); };
    h.prototype.makeRe = xe;
    function xe() { if (this.regexp || this.regexp === !1)
        return this.regexp; var e = this.set; if (!e.length)
        return this.regexp = !1, this.regexp; var r = this.options, a = r.noglobstar ? N : r.dot ? ve : le, t = r.nocase ? "i" : "", n = e.map(function (s) { return s.map(function (u) { return u === L ? a : typeof u == "string" ? Ee(u) : u._src; }).join("\\/"); }).join("|"); n = "^(?:" + n + ")$", this.negate && (n = "^(?!" + n + ").*$"); try {
        this.regexp = new RegExp(n, t);
    }
    catch {
        this.regexp = !1;
    } return this.regexp; }
    l.match = function (e, r, a) { a = a || {}; var t = new h(r, a); return e = e.filter(function (n) { return t.match(n); }), t.options.nonull && !e.length && e.push(r), e; };
    h.prototype.match = Se;
    function Se(e, r) { if (this.debug("match", e, this.pattern), this.comment)
        return !1; if (this.empty)
        return e === ""; if (e === "/" && r)
        return !0; var a = this.options; k.sep !== "/" && (e = e.split(k.sep).join("/")), e = e.split(J), this.debug(this.pattern, "split", e); var t = this.set; this.debug(this.pattern, "set", t); var n, s; for (s = e.length - 1; s >= 0 && (n = e[s], !n); s--)
        ; for (s = 0; s < t.length; s++) {
        var u = t[s], m = e;
        a.matchBase && u.length === 1 && (m = [n]);
        var i = this.matchOne(m, u, r);
        if (i)
            return a.flipNegate ? !0 : !this.negate;
    } return a.flipNegate ? !1 : this.negate; }
    h.prototype.matchOne = function (e, r, a) {
        var t = this.options;
        this.debug("matchOne", { this: this, file: e, pattern: r }), this.debug("matchOne", e.length, r.length);
        for (var n = 0, s = 0, u = e.length, m = r.length; n < u && s < m; n++, s++) {
            this.debug("matchOne loop");
            var i = r[s], o = e[n];
            if (this.debug(r, i, o), i === !1)
                return !1;
            if (i === L) {
                this.debug("GLOBSTAR", [r, i, o]);
                var g = n, d = s + 1;
                if (d === m) {
                    for (this.debug("** at the end"); n < u; n++)
                        if (e[n] === "." || e[n] === ".." || !t.dot && e[n].charAt(0) === ".")
                            return !1;
                    return !0;
                }
                for (; g < u;) {
                    var y = e[g];
                    if (this.debug(`
globstar while`, e, g, r, d, y), this.matchOne(e.slice(g), r.slice(d), a))
                        return this.debug("globstar found match!", g, u, y), !0;
                    if (y === "." || y === ".." || !t.dot && y.charAt(0) === ".") {
                        this.debug("dot detected!", e, g, r, d);
                        break;
                    }
                    this.debug("globstar swallow a segment, and continue"), g++;
                }
                return !!(a && (this.debug(`
>>> no match, partial?`, e, g, r, d), g === u));
            }
            var p;
            if (typeof i == "string" ? (t.nocase ? p = o.toLowerCase() === i.toLowerCase() : p = o === i, this.debug("string match", i, o, p)) : (p = o.match(i), this.debug("pattern match", i, o, p)), !p)
                return !1;
        }
        if (n === u && s === m)
            return !0;
        if (n === u)
            return a;
        if (s === m) {
            var b = n === u - 1 && e[n] === "";
            return b;
        }
        throw new Error("wtf?");
    };
    function we(e) { return e.replace(/\\(.)/g, "$1"); }
    function Ee(e) { return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"); }
});
var W = F(q()), X = F(q()), { braceExpand: $e, makeRe: Te, match: Ce } = X, { default: ke, ...je } = X, Ae = W.default ?? ke ?? je;
export { $e as braceExpand, Ae as default, Te as makeRe, Ce as match };
