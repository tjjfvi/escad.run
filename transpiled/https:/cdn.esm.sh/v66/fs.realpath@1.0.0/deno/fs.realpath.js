/* esm.sh - esbuild bundle(fs.realpath@1.0.0) deno production */
import __Process$ from "/transpiled/https://deno.land/std@0.125.0/node/process.js";
import __path$ from "/transpiled/https://deno.land/std@0.125.0/node/path.js";
import __fs$ from "/transpiled/https://deno.land/std@0.125.0/node/fs.js";
var W = Object.create;
var h = Object.defineProperty;
var Z = Object.getOwnPropertyDescriptor;
var F = Object.getOwnPropertyNames;
var J = Object.getPrototypeOf, K = Object.prototype.hasOwnProperty;
var Q = t => h(t, "__esModule", { value: !0 });
var N = (t => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(t, { get: (r, n) => (typeof require != "undefined" ? require : r)[n] }) : t)(function (t) { if (typeof require != "undefined")
    return require.apply(this, arguments); throw new Error('Dynamic require of "' + t + '" is not supported'); });
var z = (t, r) => () => (r || t((r = { exports: {} }).exports, r), r.exports);
var V = (t, r, n, l) => { if (r && typeof r == "object" || typeof r == "function")
    for (let e of F(r))
        !K.call(t, e) && (n || e !== "default") && h(t, e, { get: () => r[e], enumerable: !(l = Z(r, e)) || l.enumerable }); return t; }, B = (t, r) => V(Q(h(t != null ? W(J(t)) : {}, "default", !r && t && t.__esModule ? { get: () => t.default, enumerable: !0 } : { value: t, enumerable: !0 })), t);
var C = z(b => { var k = __path$, S = __Process$.platform === "win32", O = __fs$, X = __Process$.env.NODE_DEBUG && /fs/.test(__Process$.env.NODE_DEBUG); function Y() { var t; if (X) {
    var r = new Error;
    t = n;
}
else
    t = l; return t; function n(e) { e && (r.message = e.message, e = r, l(e)); } function l(e) { if (e) {
    if (__Process$.throwDeprecation)
        throw e;
    if (!__Process$.noDeprecation) {
        var s = "fs: missing callback " + (e.stack || e.message);
        __Process$.traceDeprecation ? console.trace(s) : console.error(s);
    }
} } } function R(t) { return typeof t == "function" ? t : Y(); } var ar = k.normalize; S ? y = /(.*?)(?:[\/\\]+|$)/g : y = /(.*?)(?:[\/]+|$)/g; var y; S ? $ = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/ : $ = /^[\/]*/; var $; b.realpathSync = function (r, n) { if (r = k.resolve(r), n && Object.prototype.hasOwnProperty.call(n, r))
    return n[r]; var l = r, e = {}, s = {}, f, u, i, o; g(); function g() { var a = $.exec(r); f = a[0].length, u = a[0], i = a[0], o = "", S && !s[i] && (O.lstatSync(i), s[i] = !0); } for (; f < r.length;) {
    y.lastIndex = f;
    var E = y.exec(r);
    if (o = u, u += E[0], i = o + E[1], f = y.lastIndex, !(s[i] || n && n[i] === i)) {
        var v;
        if (n && Object.prototype.hasOwnProperty.call(n, i))
            v = n[i];
        else {
            var D = O.lstatSync(i);
            if (!D.isSymbolicLink()) {
                s[i] = !0, n && (n[i] = i);
                continue;
            }
            var p = null;
            if (!S) {
                var w = D.dev.toString(32) + ":" + D.ino.toString(32);
                e.hasOwnProperty(w) && (p = e[w]);
            }
            p === null && (O.statSync(i), p = O.readlinkSync(i)), v = k.resolve(o, p), n && (n[i] = v), S || (e[w] = p);
        }
        r = k.resolve(v, r.slice(f)), g();
    }
} return n && (n[l] = r), r; }; b.realpath = function (r, n, l) { if (typeof l != "function" && (l = R(n), n = null), r = k.resolve(r), n && Object.prototype.hasOwnProperty.call(n, r))
    return __Process$.nextTick(l.bind(null, null, n[r])); var e = r, s = {}, f = {}, u, i, o, g; E(); function E() { var a = $.exec(r); u = a[0].length, i = a[0], o = a[0], g = "", S && !f[o] ? O.lstat(o, function (m) { if (m)
    return l(m); f[o] = !0, v(); }) : __Process$.nextTick(v); } function v() { if (u >= r.length)
    return n && (n[e] = r), l(null, r); y.lastIndex = u; var a = y.exec(r); return g = i, i += a[0], o = g + a[1], u = y.lastIndex, f[o] || n && n[o] === o ? __Process$.nextTick(v) : n && Object.prototype.hasOwnProperty.call(n, o) ? w(n[o]) : O.lstat(o, D); } function D(a, m) { if (a)
    return l(a); if (!m.isSymbolicLink())
    return f[o] = !0, n && (n[o] = o), __Process$.nextTick(v); if (!S) {
    var x = m.dev.toString(32) + ":" + m.ino.toString(32);
    if (s.hasOwnProperty(x))
        return p(null, s[x], o);
} O.stat(o, function (L) { if (L)
    return l(L); O.readlink(o, function (P, M) { S || (s[x] = M), p(P, M); }); }); } function p(a, m, x) { if (a)
    return l(a); var L = k.resolve(g, m); n && (n[x] = L), w(L); } function w(a) { r = k.resolve(a, r.slice(u)), E(); } }; });
var I = z((fr, T) => { T.exports = d; d.realpath = d; d.sync = G; d.realpathSync = G; d.monkeypatch = nr; d.unmonkeypatch = tr; var c = __fs$, j = c.realpath, q = c.realpathSync, rr = __Process$.version, U = /^v[0-5]\./.test(rr), A = C(); function H(t) { return t && t.syscall === "realpath" && (t.code === "ELOOP" || t.code === "ENOMEM" || t.code === "ENAMETOOLONG"); } function d(t, r, n) { if (U)
    return j(t, r, n); typeof r == "function" && (n = r, r = null), j(t, r, function (l, e) { H(l) ? A.realpath(t, r, n) : n(l, e); }); } function G(t, r) { if (U)
    return q(t, r); try {
    return q(t, r);
}
catch (n) {
    if (H(n))
        return A.realpathSync(t, r);
    throw n;
} } function nr() { c.realpath = d, c.realpathSync = G; } function tr() { c.realpath = j, c.realpathSync = q; } });
var _ = B(I()), er = B(I()), { default: or, ...ir } = er, ur = _.default ?? or ?? ir;
export { ur as default };
