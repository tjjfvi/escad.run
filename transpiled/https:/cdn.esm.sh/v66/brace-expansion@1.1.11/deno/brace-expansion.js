/* esm.sh - esbuild bundle(brace-expansion@1.1.11) deno production */
import __balanced_match$ from "/transpiled/https://cdn.esm.sh/v66/balanced-match@1.0.2/deno/balanced-match.js";
import __concat_map$ from "/transpiled/https://cdn.esm.sh/v66/concat-map@0.0.1/deno/concat-map.js";
var G = Object.create;
var c = Object.defineProperty;
var J = Object.getOwnPropertyDescriptor;
var K = Object.getOwnPropertyNames;
var Q = Object.getPrototypeOf, U = Object.prototype.hasOwnProperty;
var V = r => c(r, "__esModule", { value: !0 });
var P = (r => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(r, { get: (e, i) => (typeof require != "undefined" ? require : e)[i] }) : r)(function (r) { if (typeof require != "undefined")
    return require.apply(this, arguments); throw new Error('Dynamic require of "' + r + '" is not supported'); });
var W = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var X = (r, e, i, t) => { if (e && typeof e == "object" || typeof e == "function")
    for (let s of K(e))
        !U.call(r, s) && (i || s !== "default") && c(r, s, { get: () => e[s], enumerable: !(t = J(e, s)) || t.enumerable }); return r; }, q = (r, e) => X(V(c(r != null ? G(Q(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: !0 } : { value: r, enumerable: !0 })), r);
var y = W((ur, Z) => { var Y = __concat_map$, x = __balanced_match$; Z.exports = rr; var E = "\0SLASH" + Math.random() + "\0", I = "\0OPEN" + Math.random() + "\0", b = "\0CLOSE" + Math.random() + "\0", N = "\0COMMA" + Math.random() + "\0", B = "\0PERIOD" + Math.random() + "\0"; function g(r) { return parseInt(r, 10) == r ? parseInt(r, 10) : r.charCodeAt(0); } function _(r) { return r.split("\\\\").join(E).split("\\{").join(I).split("\\}").join(b).split("\\,").join(N).split("\\.").join(B); } function k(r) { return r.split(E).join("\\").split(I).join("{").split(b).join("}").split(N).join(",").split(B).join("."); } function L(r) { if (!r)
    return [""]; var e = [], i = x("{", "}", r); if (!i)
    return r.split(","); var t = i.pre, s = i.body, u = i.post, n = t.split(","); n[n.length - 1] += "{" + s + "}"; var v = L(u); return u.length && (n[n.length - 1] += v.shift(), n.push.apply(n, v)), e.push.apply(e, n), e; } function rr(r) { return r ? (r.substr(0, 2) === "{}" && (r = "\\{\\}" + r.substr(2)), p(_(r), !0).map(k)) : []; } function er(r) { return "{" + r + "}"; } function tr(r) { return /^-?0\d/.test(r); } function ar(r, e) { return r <= e; } function nr(r, e) { return r >= e; } function p(r, e) { var i = [], t = x("{", "}", r); if (!t || /\$$/.test(t.pre))
    return [r]; var s = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(t.body), u = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(t.body), n = s || u, v = t.body.indexOf(",") >= 0; if (!n && !v)
    return t.post.match(/,.*\}/) ? (r = t.pre + "{" + t.body + b + t.post, p(r)) : [r]; var a; if (n)
    a = t.body.split(/\.\./);
else if (a = L(t.body), a.length === 1 && (a = p(a[0], !1).map(er), a.length === 1)) {
    var d = t.post.length ? p(t.post, !1) : [""];
    return d.map(function (F) { return t.pre + a[0] + F; });
} var z = t.pre, d = t.post.length ? p(t.post, !1) : [""], f; if (n) {
    var M = g(a[0]), j = g(a[1]), D = Math.max(a[0].length, a[1].length), S = a.length == 3 ? Math.abs(g(a[2])) : 1, C = ar, H = j < M;
    H && (S *= -1, C = nr);
    var R = a.some(tr);
    f = [];
    for (var l = M; C(l, j); l += S) {
        var o;
        if (u)
            o = String.fromCharCode(l), o === "\\" && (o = "");
        else if (o = String(l), R) {
            var $ = D - o.length;
            if ($ > 0) {
                var A = new Array($ + 1).join("0");
                l < 0 ? o = "-" + A + o.slice(1) : o = A + o;
            }
        }
        f.push(o);
    }
}
else
    f = Y(a, function (T) { return p(T, !1); }); for (var h = 0; h < f.length; h++)
    for (var m = 0; m < d.length; m++) {
        var O = z + f[h] + d[m];
        (!e || n || O) && i.push(O);
    } return i; } });
var w = q(y()), ir = q(y()), { default: or, ...sr } = ir, fr = w.default ?? or ?? sr;
export { fr as default };
