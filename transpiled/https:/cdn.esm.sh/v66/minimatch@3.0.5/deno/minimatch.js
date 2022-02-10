/* esm.sh - esbuild bundle(minimatch@3.0.5) deno production */
import __brace_expansion$ from "/transpiled/https://cdn.esm.sh/v66/brace-expansion@1.1.11/deno/brace-expansion.js";
import __path$ from "/transpiled/https://deno.land/std@0.125.0/node/path.js";
var at = Object.create;
var L = Object.defineProperty;
var it = Object.getOwnPropertyDescriptor;
var ut = Object.getOwnPropertyNames;
var ot = Object.getPrototypeOf, ct = Object.prototype.hasOwnProperty;
var ht = t => L(t, "__esModule", { value: !0 });
var X = (t => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(t, { get: (r, s) => (typeof require != "undefined" ? require : r)[s] }) : t)(function (t) { if (typeof require != "undefined")
    return require.apply(this, arguments); throw new Error('Dynamic require of "' + t + '" is not supported'); });
var ft = (t, r) => () => (r || t((r = { exports: {} }).exports, r), r.exports);
var gt = (t, r, s, e) => { if (r && typeof r == "object" || typeof r == "function")
    for (let n of ut(r))
        !ct.call(t, n) && (s || n !== "default") && L(t, n, { get: () => r[n], enumerable: !(e = it(r, n)) || e.enumerable }); return t; }, z = (t, r) => gt(ht(L(t != null ? at(ot(t)) : {}, "default", !r && t && t.__esModule ? { get: () => t.default, enumerable: !0 } : { value: t, enumerable: !0 })), t);
var G = ft((Tt, Q) => {
    Q.exports = m;
    m.Minimatch = h;
    var R = (() => { try {
        return __path$;
    }
    catch { } })() || { sep: "/" };
    m.sep = R.sep;
    var B = m.GLOBSTAR = h.GLOBSTAR = {}, lt = __brace_expansion$, F = { "!": { open: "(?:(?!(?:", close: "))[^/]*?)" }, "?": { open: "(?:", close: ")?" }, "+": { open: "(?:", close: ")+" }, "*": { open: "(?:", close: ")*" }, "@": { open: "(?:", close: ")" } }, N = "[^/]", _ = N + "*?", mt = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", dt = "(?:(?!(?:\\/|^)\\.).)*?", I = vt("().*{}+?[]^$\\!");
    function vt(t) { return t.split("").reduce(function (r, s) { return r[s] = !0, r; }, {}); }
    var J = /\/+/;
    m.filter = bt;
    function bt(t, r) { return r = r || {}, function (s, e, n) { return m(s, t, r); }; }
    function y(t, r) { t = t || {}, r = r || {}; let s = {}; return Object.keys(t).forEach(function (e) { s[e] = t[e]; }), Object.keys(r).forEach(function (e) { s[e] = r[e]; }), s; }
    m.defaults = function (t) { if (!t || typeof t != "object" || !Object.keys(t).length)
        return m; let r = m, s = function (n, a, u) { return r(n, a, y(t, u)); }; return s.Minimatch = function (n, a) { return new r.Minimatch(n, y(t, a)); }, s.Minimatch.defaults = e => r.defaults(y(t, e)).Minimatch, s.filter = function (n, a) { return r.filter(n, y(t, a)); }, s.defaults = function (n) { return r.defaults(y(t, n)); }, s.makeRe = function (n, a) { return r.makeRe(n, y(t, a)); }, s.braceExpand = function (n, a) { return r.braceExpand(n, y(t, a)); }, s.match = function (e, n, a) { return r.match(e, n, y(t, a)); }, s; };
    h.defaults = function (t) { return m.defaults(t).Minimatch; };
    function m(t, r, s) { return $(r), s || (s = {}), !s.nocomment && r.charAt(0) === "#" ? !1 : r.trim() === "" ? t === "" : new h(r, s).match(t); }
    function h(t, r) { if (!(this instanceof h))
        return new h(t, r); $(t), r || (r = {}), t = t.trim(), R.sep !== "/" && (t = t.split(R.sep).join("/")), this.options = r, this.set = [], this.pattern = t, this.regexp = null, this.negate = !1, this.comment = !1, this.empty = !1, this.make(); }
    h.prototype.debug = function () { };
    h.prototype.make = pt;
    function pt() { if (!this._made) {
        var t = this.pattern, r = this.options;
        if (!r.nocomment && t.charAt(0) === "#") {
            this.comment = !0;
            return;
        }
        if (!t) {
            this.empty = !0;
            return;
        }
        this.parseNegate();
        var s = this.globSet = this.braceExpand();
        r.debug && (this.debug = console.error), this.debug(this.pattern, s), s = this.globParts = s.map(function (e) { return e.split(J); }), this.debug(this.pattern, s), s = s.map(function (e, n, a) { return e.map(this.parse, this); }, this), this.debug(this.pattern, s), s = s.filter(function (e) { return e.indexOf(!1) === -1; }), this.debug(this.pattern, s), this.set = s;
    } }
    h.prototype.parseNegate = yt;
    function yt() { var t = this.pattern, r = !1, s = this.options, e = 0; if (!s.nonegate) {
        for (var n = 0, a = t.length; n < a && t.charAt(n) === "!"; n++)
            r = !r, e++;
        e && (this.pattern = t.substr(e)), this.negate = r;
    } }
    m.braceExpand = function (t, r) { return K(t, r); };
    h.prototype.braceExpand = K;
    function K(t, r) { return r || (this instanceof h ? r = this.options : r = {}), t = typeof t > "u" ? this.pattern : t, $(t), r.nobrace || !/\{(?:(?!\{).)*\}/.test(t) ? [t] : lt(t); }
    var xt = 1024 * 64, $ = t => { if (typeof t != "string")
        throw new TypeError("invalid pattern"); if (t.length > xt)
        throw new TypeError("pattern is too long"); };
    h.prototype.parse = Et;
    var O = {};
    function Et(t, r) {
        $(t);
        var s = this.options;
        if (!s.noglobstar && t === "**")
            return B;
        if (t === "")
            return "";
        var e = "", n = !1, a = !1, u = [], d = [], i, o = !1, g = -1, v = -1, x = t.charAt(0) === "." ? "" : s.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", b = this;
        function p() { if (i) {
            switch (i) {
                case "*":
                    e += _, n = !0;
                    break;
                case "?":
                    e += N, n = !0;
                    break;
                default:
                    e += "\\" + i;
                    break;
            }
            b.debug("clearStateChar %j %j", i, e), i = !1;
        } }
        for (var l = 0, Z = t.length, c; l < Z && (c = t.charAt(l)); l++) {
            if (this.debug("%s	%s %s %j", t, l, e, c), a && I[c]) {
                e += "\\" + c, a = !1;
                continue;
            }
            switch (c) {
                case "/": return !1;
                case "\\":
                    p(), a = !0;
                    continue;
                case "?":
                case "*":
                case "+":
                case "@":
                case "!":
                    if (this.debug("%s	%s %s %j <-- stateChar", t, l, e, c), o) {
                        this.debug("  in class"), c === "!" && l === v + 1 && (c = "^"), e += c;
                        continue;
                    }
                    b.debug("call clearStateChar %j", i), p(), i = c, s.noext && p();
                    continue;
                case "(":
                    if (o) {
                        e += "(";
                        continue;
                    }
                    if (!i) {
                        e += "\\(";
                        continue;
                    }
                    u.push({ type: i, start: l - 1, reStart: e.length, open: F[i].open, close: F[i].close }), e += i === "!" ? "(?:(?!(?:" : "(?:", this.debug("plType %j %j", i, e), i = !1;
                    continue;
                case ")":
                    if (o || !u.length) {
                        e += "\\)";
                        continue;
                    }
                    p(), n = !0;
                    var f = u.pop();
                    e += f.close, f.type === "!" && d.push(f), f.reEnd = e.length;
                    continue;
                case "|":
                    if (o || !u.length || a) {
                        e += "\\|", a = !1;
                        continue;
                    }
                    p(), e += "|";
                    continue;
                case "[":
                    if (p(), o) {
                        e += "\\" + c;
                        continue;
                    }
                    o = !0, v = l, g = e.length, e += c;
                    continue;
                case "]":
                    if (l === v + 1 || !o) {
                        e += "\\" + c, a = !1;
                        continue;
                    }
                    if (o) {
                        var j = t.substring(v + 1, l);
                        try {
                            RegExp("[" + j + "]");
                        }
                        catch {
                            var S = this.parse(j, O);
                            e = e.substr(0, g) + "\\[" + S[0] + "\\]", n = n || S[1], o = !1;
                            continue;
                        }
                    }
                    n = !0, o = !1, e += c;
                    continue;
                default: p(), a ? a = !1 : I[c] && !(c === "^" && o) && (e += "\\"), e += c;
            }
        }
        for (o && (j = t.substr(v + 1), S = this.parse(j, O), e = e.substr(0, g) + "\\[" + S[0], n = n || S[1]), f = u.pop(); f; f = u.pop()) {
            var k = e.slice(f.reStart + f.open.length);
            this.debug("setting tail", e, f), k = k.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (H, V, C) { return C || (C = "\\"), V + V + C + "|"; }), this.debug(`tail=%j
   %s`, k, k, f, e);
            var tt = f.type === "*" ? _ : f.type === "?" ? N : "\\" + f.type;
            n = !0, e = e.slice(0, f.reStart) + tt + "\\(" + k;
        }
        p(), a && (e += "\\\\");
        var P = !1;
        switch (e.charAt(0)) {
            case ".":
            case "[":
            case "(": P = !0;
        }
        for (var T = d.length - 1; T > -1; T--) {
            var E = d[T], q = e.slice(0, E.reStart), et = e.slice(E.reStart, E.reEnd - 8), D = e.slice(E.reEnd - 8, E.reEnd), w = e.slice(E.reEnd);
            D += w;
            var rt = q.split("(").length - 1, M = w;
            for (l = 0; l < rt; l++)
                M = M.replace(/\)[+*?]?/, "");
            w = M;
            var U = "";
            w === "" && r !== O && (U = "$");
            var nt = q + et + w + U + D;
            e = nt;
        }
        if (e !== "" && n && (e = "(?=.)" + e), P && (e = x + e), r === O)
            return [e, n];
        if (!n)
            return wt(t);
        var st = s.nocase ? "i" : "";
        try {
            var A = new RegExp("^" + e + "$", st);
        }
        catch {
            return new RegExp("$.");
        }
        return A._glob = t, A._src = e, A;
    }
    m.makeRe = function (t, r) { return new h(t, r || {}).makeRe(); };
    h.prototype.makeRe = St;
    function St() { if (this.regexp || this.regexp === !1)
        return this.regexp; var t = this.set; if (!t.length)
        return this.regexp = !1, this.regexp; var r = this.options, s = r.noglobstar ? _ : r.dot ? mt : dt, e = r.nocase ? "i" : "", n = t.map(function (a) { return a.map(function (u) { return u === B ? s : typeof u == "string" ? Rt(u) : u._src; }).join("\\/"); }).join("|"); n = "^(?:" + n + ")$", this.negate && (n = "^(?!" + n + ").*$"); try {
        this.regexp = new RegExp(n, e);
    }
    catch {
        this.regexp = !1;
    } return this.regexp; }
    m.match = function (t, r, s) { s = s || {}; let e = new h(r, s); return t = t.filter(function (n) { return e.match(n); }), e.options.nonull && !t.length && t.push(r), t; };
    h.prototype.match = kt;
    function kt(t, r) { if (this.debug("match", t, this.pattern), this.comment)
        return !1; if (this.empty)
        return t === ""; if (t === "/" && r)
        return !0; var s = this.options; R.sep !== "/" && (t = t.split(R.sep).join("/")), t = t.split(J), this.debug(this.pattern, "split", t); var e = this.set; this.debug(this.pattern, "set", e); var n, a; for (a = t.length - 1; a >= 0 && (n = t[a], !n); a--)
        ; for (a = 0; a < e.length; a++) {
        var u = e[a], d = t;
        s.matchBase && u.length === 1 && (d = [n]);
        var i = this.matchOne(d, u, r);
        if (i)
            return s.flipNegate ? !0 : !this.negate;
    } return s.flipNegate ? !1 : this.negate; }
    h.prototype.matchOne = function (t, r, s) {
        var e = this.options;
        this.debug("matchOne", { this: this, file: t, pattern: r }), this.debug("matchOne", t.length, r.length);
        for (var n = 0, a = 0, u = t.length, d = r.length; n < u && a < d; n++, a++) {
            this.debug("matchOne loop");
            var i = r[a], o = t[n];
            if (this.debug(r, i, o), i === !1)
                return !1;
            if (i === B) {
                this.debug("GLOBSTAR", [r, i, o]);
                var g = n, v = a + 1;
                if (v === d) {
                    for (this.debug("** at the end"); n < u; n++)
                        if (t[n] === "." || t[n] === ".." || !e.dot && t[n].charAt(0) === ".")
                            return !1;
                    return !0;
                }
                for (; g < u;) {
                    var x = t[g];
                    if (this.debug(`
globstar while`, t, g, r, v, x), this.matchOne(t.slice(g), r.slice(v), s))
                        return this.debug("globstar found match!", g, u, x), !0;
                    if (x === "." || x === ".." || !e.dot && x.charAt(0) === ".") {
                        this.debug("dot detected!", t, g, r, v);
                        break;
                    }
                    this.debug("globstar swallow a segment, and continue"), g++;
                }
                return !!(s && (this.debug(`
>>> no match, partial?`, t, g, r, v), g === u));
            }
            var b;
            if (typeof i == "string" ? (e.nocase ? b = o.toLowerCase() === i.toLowerCase() : b = o === i, this.debug("string match", i, o, b)) : (b = o.match(i), this.debug("pattern match", i, o, b)), !b)
                return !1;
        }
        if (n === u && a === d)
            return !0;
        if (n === u)
            return s;
        if (a === d)
            return n === u - 1 && t[n] === "";
        throw new Error("wtf?");
    };
    function wt(t) { return t.replace(/\\(.)/g, "$1"); }
    function Rt(t) { return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"); }
});
var W = z(G()), Y = z(G()), { braceExpand: Mt, makeRe: At, match: Ct } = Y, { default: jt, ...Ot } = Y, Lt = W.default ?? jt ?? Ot;
export { Mt as braceExpand, Lt as default, At as makeRe, Ct as match };
