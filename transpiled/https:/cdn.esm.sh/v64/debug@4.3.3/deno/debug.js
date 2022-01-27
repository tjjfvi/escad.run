/* esm.sh - esbuild bundle(debug@4.3.3) deno production */
import __Process$ from "/transpiled/https://deno.land/std@0.122.0/node/process.js";
__Process$.env.NODE_ENV = "production";
import __ms$ from "/transpiled/https://cdn.esm.sh/v64/ms@2.1.2/deno/ms.js";
var N = Object.create;
var m = Object.defineProperty;
var L = Object.getOwnPropertyDescriptor;
var R = Object.getOwnPropertyNames;
var q = Object.getPrototypeOf, J = Object.prototype.hasOwnProperty;
var P = t => m(t, "__esModule", { value: !0 });
var U = (t => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(t, { get: (r, e) => (typeof require != "undefined" ? require : r)[e] }) : t)(function (t) { if (typeof require != "undefined")
    return require.apply(this, arguments); throw new Error('Dynamic require of "' + t + '" is not supported'); });
var v = (t, r) => () => (r || t((r = { exports: {} }).exports, r), r.exports);
var Z = (t, r, e, c) => { if (r && typeof r == "object" || typeof r == "function")
    for (let l of R(r))
        !J.call(t, l) && (e || l !== "default") && m(t, l, { get: () => r[l], enumerable: !(c = L(r, l)) || c.enumerable }); return t; }, x = (t, r) => Z(P(m(t != null ? N(q(t)) : {}, "default", !r && t && t.__esModule ? { get: () => t.default, enumerable: !0 } : { value: t, enumerable: !0 })), t);
var E = v((ee, A) => { function _(t) { e.debug = e, e.default = e, e.coerce = j, e.disable = I, e.enable = l, e.enabled = $, e.humanize = __ms$, e.destroy = O, Object.keys(t).forEach(n => { e[n] = t[n]; }), e.names = [], e.skips = [], e.formatters = {}; function r(n) { let o = 0; for (let s = 0; s < n.length; s++)
    o = (o << 5) - o + n.charCodeAt(s), o |= 0; return e.colors[Math.abs(o) % e.colors.length]; } e.selectColor = r; function e(n) { let o, s = null, f, w; function u(...C) { if (!u.enabled)
    return; let a = u, d = Number(new Date), S = d - (o || d); a.diff = S, a.prev = o, a.curr = d, o = d, C[0] = e.coerce(C[0]), typeof C[0] != "string" && C.unshift("%O"); let F = 0; C[0] = C[0].replace(/%([a-zA-Z%])/g, (g, z) => { if (g === "%%")
    return "%"; F++; let y = e.formatters[z]; if (typeof y == "function") {
    let D = C[F];
    g = y.call(a, D), C.splice(F, 1), F--;
} return g; }), e.formatArgs.call(a, C), (a.log || e.log).apply(a, C); } return u.namespace = n, u.useColors = e.useColors(), u.color = e.selectColor(n), u.extend = c, u.destroy = e.destroy, Object.defineProperty(u, "enabled", { enumerable: !0, configurable: !1, get: () => s !== null ? s : (f !== e.namespaces && (f = e.namespaces, w = e.enabled(n)), w), set: C => { s = C; } }), typeof e.init == "function" && e.init(u), u; } function c(n, o) { let s = e(this.namespace + (typeof o == "undefined" ? ":" : o) + n); return s.log = this.log, s; } function l(n) { e.save(n), e.namespaces = n, e.names = [], e.skips = []; let o, s = (typeof n == "string" ? n : "").split(/[\s,]+/), f = s.length; for (o = 0; o < f; o++)
    !s[o] || (n = s[o].replace(/\*/g, ".*?"), n[0] === "-" ? e.skips.push(new RegExp("^" + n.substr(1) + "$")) : e.names.push(new RegExp("^" + n + "$"))); } function I() { let n = [...e.names.map(h), ...e.skips.map(h).map(o => "-" + o)].join(","); return e.enable(""), n; } function $(n) { if (n[n.length - 1] === "*")
    return !0; let o, s; for (o = 0, s = e.skips.length; o < s; o++)
    if (e.skips[o].test(n))
        return !1; for (o = 0, s = e.names.length; o < s; o++)
    if (e.names[o].test(n))
        return !0; return !1; } function h(n) { return n.toString().substring(2, n.toString().length - 2).replace(/\.\*\?$/, "*"); } function j(n) { return n instanceof Error ? n.stack || n.message : n; } function O() { console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."); } return e.enable(e.load()), e; } A.exports = _; });
var b = v((i, p) => { i.formatArgs = G; i.save = M; i.load = T; i.useColors = B; i.storage = W(); i.destroy = (() => { let t = !1; return () => { t || (t = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")); }; })(); i.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"]; function B() { return typeof window != "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document != "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window != "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/); } function G(t) { if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + p.exports.humanize(this.diff), !this.useColors)
    return; let r = "color: " + this.color; t.splice(1, 0, r, "color: inherit"); let e = 0, c = 0; t[0].replace(/%[a-zA-Z%]/g, l => { l !== "%%" && (e++, l === "%c" && (c = e)); }), t.splice(c, 0, r); } i.log = console.debug || console.log || (() => { }); function M(t) { try {
    t ? i.storage.setItem("debug", t) : i.storage.removeItem("debug");
}
catch { } } function T() { let t; try {
    t = i.storage.getItem("debug");
}
catch { } return !t && typeof __Process$ != "undefined" && "env" in __Process$ && (t = __Process$.env.DEBUG), t; } function W() { try {
    return localStorage;
}
catch { } } p.exports = E()(i); var { formatters: H } = p.exports; H.j = function (t) { try {
    return JSON.stringify(t);
}
catch (r) {
    return "[UnexpectedJSONParseError]: " + r.message;
} }; });
var k = x(b()), K = x(b()), { default: Q, ...V } = K, te = k.default ?? Q ?? V;
export { te as default };
