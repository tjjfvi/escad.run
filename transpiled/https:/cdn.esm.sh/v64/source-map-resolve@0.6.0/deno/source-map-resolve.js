/* esm.sh - esbuild bundle(source-map-resolve@0.6.0) deno production */
var __setImmediate$ = (cb, ...args) => setTimeout(cb, 0, ...args);
import __atob$ from "/transpiled/https://cdn.esm.sh/v64/atob@2.1.2/deno/atob.js";
import __decode_uri_component$ from "/transpiled/https://cdn.esm.sh/v64/decode-uri-component@0.2.0/deno/decode-uri-component.js";
import __path$ from "/transpiled/https://deno.land/std@0.122.0/node/path.js";
import __url$ from "/transpiled/https://deno.land/std@0.122.0/node/url.js";
var B = Object.create;
var R = Object.defineProperty;
var E = Object.getOwnPropertyDescriptor;
var x = Object.getOwnPropertyNames;
var H = Object.getPrototypeOf, I = Object.prototype.hasOwnProperty;
var z = e => R(e, "__esModule", { value: !0 });
var S = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, { get: (o, u) => (typeof require != "undefined" ? require : o)[u] }) : e)(function (e) { if (typeof require != "undefined")
    return require.apply(this, arguments); throw new Error('Dynamic require of "' + e + '" is not supported'); });
var W = (e, o) => () => (o || e((o = { exports: {} }).exports, o), o.exports);
var _ = (e, o, u, n) => { if (o && typeof o == "object" || typeof o == "function")
    for (let r of x(o))
        !I.call(e, r) && (u || r !== "default") && R(e, r, { get: () => o[r], enumerable: !(n = E(o, r)) || n.enumerable }); return e; }, m = (e, o) => _(z(R(e != null ? B(H(e)) : {}, "default", !o && e && e.__esModule ? { get: () => e.default, enumerable: !0 } : { value: e, enumerable: !0 })), e);
var M = W((te, J) => {
    var C = __atob$, F = __url$, G = __path$, K = __decode_uri_component$;
    function y() { return Array.prototype.reduce.call(arguments, function (e, o) { return F.resolve(e, o); }); }
    function T(e) { return G.sep === "\\" ? e.replace(/\\/g, "/").replace(/^[a-z]:\/?/i, "/") : e; }
    function p(e) { return K(e.replace(/\+/g, "%2B")); }
    function g(e, o, u) { __setImmediate$(function () { e(o, u); }); }
    function f(e, o) { try {
        return JSON.parse(e.replace(/^\)\]\}'/, ""));
    }
    catch (u) {
        throw u.sourceMapData = o, u;
    } }
    function d(e, o, u) { var n = p(o); try {
        return String(e(n));
    }
    catch (r) {
        throw r.sourceMapData = u, r;
    } }
    var L = /[#@] sourceMappingURL=([^\s'"]*)/, P = RegExp(`(?:/\\*(?:\\s*\r?
(?://)?)?(?:` + L.source + ")\\s*\\*/|//(?:" + L.source + "))\\s*");
    function Q(e) { var o = e.match(P); return o ? o[1] || o[2] || "" : null; }
    function w(e, o, u, n) { var r; try {
        r = $(e, o);
    }
    catch (t) {
        return g(n, t);
    } if (!r || r.map)
        return g(n, null, r); var c = p(r.url); u(c, function (t, s) { if (t)
        return t.sourceMapData = r, n(t); r.map = String(s); try {
        r.map = f(r.map, r);
    }
    catch (l) {
        return n(l);
    } n(null, r); }); }
    function D(e, o, u) { var n = $(e, o); return !n || n.map || (n.map = d(u, n.url, n), n.map = f(n.map, n)), n; }
    var V = /^data:([^,;]*)(;[^,;]*)*(?:,(.*))?$/, X = /^(?:application|text)\/json$/, Y = "utf-8";
    function Z(e) { for (var o = C(e), u = o.length, n = new Uint8Array(u), r = 0; r < u; r++)
        n[r] = o.charCodeAt(r); return n; }
    function b(e) { if (typeof TextDecoder == "undefined" || typeof Uint8Array == "undefined")
        return C(e); var o = Z(e), u = new TextDecoder(Y, { fatal: !0 }); return u.decode(o); }
    function $(e, o) { o = T(o); var u = Q(e); if (!u)
        return null; var n = u.match(V); if (n) {
        var r = n[1] || "text/plain", c = n[2] || "", t = n[3] || "", s = { sourceMappingURL: u, url: null, sourcesRelativeTo: o, map: t };
        if (!X.test(r)) {
            var l = new Error("Unuseful data uri mime type: " + r);
            throw l.sourceMapData = s, l;
        }
        try {
            s.map = f(c === ";base64" ? b(t) : decodeURIComponent(t), s);
        }
        catch (i) {
            throw i.sourceMapData = s, i;
        }
        return s;
    } var a = y(o, u); return { sourceMappingURL: u, url: a, sourcesRelativeTo: a, map: null }; }
    function U(e, o, u, n, r) { typeof n == "function" && (r = n, n = {}); var c = e.sources ? e.sources.length : 0, t = { sourcesResolved: [], sourcesContent: [] }; if (c === 0) {
        g(r, null, t);
        return;
    } var s = function () { c--, c === 0 && r(null, t); }; q(e, o, n, function (l, a, i) { if (t.sourcesResolved[i] = l, typeof a == "string")
        t.sourcesContent[i] = a, g(s, null);
    else {
        var v = p(l);
        u(v, function (h, j) { t.sourcesContent[i] = h || String(j), s(); });
    } }); }
    function A(e, o, u, n) { var r = { sourcesResolved: [], sourcesContent: [] }; return !e.sources || e.sources.length === 0 || q(e, o, n, function (c, t, s) { if (r.sourcesResolved[s] = c, u !== null)
        if (typeof t == "string")
            r.sourcesContent[s] = t;
        else {
            var l = p(c);
            try {
                r.sourcesContent[s] = String(u(l));
            }
            catch (a) {
                r.sourcesContent[s] = a;
            }
        } }), r; }
    var k = /\/?$/;
    function q(e, o, u, n) { u = u || {}, o = T(o); for (var r, c, t, s = 0, l = e.sources.length; s < l; s++)
        t = null, typeof u.sourceRoot == "string" ? t = u.sourceRoot : typeof e.sourceRoot == "string" && u.sourceRoot !== !1 && (t = e.sourceRoot), t === null || t === "" ? r = y(o, e.sources[s]) : r = y(o, t.replace(k, "/"), e.sources[s]), c = (e.sourcesContent || [])[s], n(r, c, s); }
    function ee(e, o, u, n, r) { if (typeof n == "function" && (r = n, n = {}), e === null) {
        var c = o, t = { sourceMappingURL: null, url: c, sourcesRelativeTo: c, map: null }, s = p(c);
        u(s, function (a, i) { if (a)
            return a.sourceMapData = t, r(a); t.map = String(i); try {
            t.map = f(t.map, t);
        }
        catch (v) {
            return r(v);
        } l(t); });
    }
    else
        w(e, o, u, function (a, i) { if (a)
            return r(a); if (!i)
            return r(null, null); l(i); }); function l(a) { U(a.map, a.sourcesRelativeTo, u, n, function (i, v) { if (i)
        return r(i); a.sourcesResolved = v.sourcesResolved, a.sourcesContent = v.sourcesContent, r(null, a); }); } }
    function re(e, o, u, n) { var r; if (e === null) {
        var c = o;
        r = { sourceMappingURL: null, url: c, sourcesRelativeTo: c, map: null }, r.map = d(u, c, r), r.map = f(r.map, r);
    }
    else if (r = D(e, o, u), !r)
        return null; var t = A(r.map, r.sourcesRelativeTo, u, n); return r.sourcesResolved = t.sourcesResolved, r.sourcesContent = t.sourcesContent, r; }
    J.exports = { resolveSourceMap: w, resolveSourceMapSync: D, resolveSources: U, resolveSourcesSync: A, resolve: ee, resolveSync: re, parseMapToJSON: f };
});
var N = m(M()), O = m(M()), { resolveSourceMap: se, resolveSourceMapSync: ce, resolveSources: ae, resolveSourcesSync: le, resolve: ie, resolveSync: ve, parseMapToJSON: fe } = O, { default: oe, ...ne } = O, pe = N.default ?? oe ?? ne;
export { pe as default, fe as parseMapToJSON, ie as resolve, se as resolveSourceMap, ce as resolveSourceMapSync, ae as resolveSources, le as resolveSourcesSync, ve as resolveSync };
