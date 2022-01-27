/* esm.sh - esbuild bundle(ms@2.1.2) deno production */
var l = Object.create;
var d = Object.defineProperty;
var v = Object.getOwnPropertyDescriptor;
var w = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf, g = Object.prototype.hasOwnProperty;
var M = e => d(e, "__esModule", { value: !0 });
var b = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var $ = (e, r, s, t) => { if (r && typeof r == "object" || typeof r == "function")
    for (let a of w(r))
        !g.call(e, a) && (s || a !== "default") && d(e, a, { get: () => r[a], enumerable: !(t = v(r, a)) || t.enumerable }); return e; }, m = (e, r) => $(M(d(e != null ? l(p(e)) : {}, "default", !r && e && e.__esModule ? { get: () => e.default, enumerable: !0 } : { value: e, enumerable: !0 })), e);
var f = b((N, h) => { var c = 1e3, u = c * 60, i = u * 60, n = i * 24, k = n * 7, x = n * 365.25; h.exports = function (e, r) { r = r || {}; var s = typeof e; if (s === "string" && e.length > 0)
    return S(e); if (s === "number" && isFinite(e))
    return r.long ? F(e) : A(e); throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e)); }; function S(e) { if (e = String(e), !(e.length > 100)) {
    var r = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
    if (!!r) {
        var s = parseFloat(r[1]), t = (r[2] || "ms").toLowerCase();
        switch (t) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y": return s * x;
            case "weeks":
            case "week":
            case "w": return s * k;
            case "days":
            case "day":
            case "d": return s * n;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h": return s * i;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m": return s * u;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s": return s * c;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms": return s;
            default: return;
        }
    }
} } function A(e) { var r = Math.abs(e); return r >= n ? Math.round(e / n) + "d" : r >= i ? Math.round(e / i) + "h" : r >= u ? Math.round(e / u) + "m" : r >= c ? Math.round(e / c) + "s" : e + "ms"; } function F(e) { var r = Math.abs(e); return r >= n ? o(e, r, n, "day") : r >= i ? o(e, r, i, "hour") : r >= u ? o(e, r, u, "minute") : r >= c ? o(e, r, c, "second") : e + " ms"; } function o(e, r, s, t) { var a = r >= s * 1.5; return Math.round(e / s) + " " + t + (a ? "s" : ""); } });
var y = m(f()), L = m(f()), { default: C, ...E } = L, O = y.default ?? C ?? E;
export { O as default };
