/* esm.sh - esbuild bundle(decode-uri-component@0.2.0) deno production */
var y = Object.create;
var n = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var x = Object.getPrototypeOf, C = Object.prototype.hasOwnProperty;
var E = r => n(r, "__esModule", { value: !0 });
var w = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var D = (r, e, t, o) => { if (e && typeof e == "object" || typeof e == "function")
    for (let a of i(e))
        !C.call(r, a) && (t || a !== "default") && n(r, a, { get: () => e[a], enumerable: !(o = p(e, a)) || o.enumerable }); return r; }, h = (r, e) => D(E(n(r != null ? y(x(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: !0 } : { value: r, enumerable: !0 })), r);
var f = w((I, m) => {
    "use strict";
    var u = "%[a-f0-9]{2}", l = new RegExp(u, "gi"), v = new RegExp("(" + u + ")+", "gi");
    function F(r, e) { try {
        return decodeURIComponent(r.join(""));
    }
    catch { } if (r.length === 1)
        return r; e = e || 1; var t = r.slice(0, e), o = r.slice(e); return Array.prototype.concat.call([], F(t), F(o)); }
    function s(r) { try {
        return decodeURIComponent(r);
    }
    catch {
        for (var e = r.match(l), t = 1; t < e.length; t++)
            r = F(e, t).join(""), e = r.match(l);
        return r;
    } }
    function R(r) { for (var e = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" }, t = v.exec(r); t;) {
        try {
            e[t[0]] = decodeURIComponent(t[0]);
        }
        catch {
            var o = s(t[0]);
            o !== t[0] && (e[t[0]] = o);
        }
        t = v.exec(r);
    } e["%C2"] = "\uFFFD"; for (var a = Object.keys(e), c = 0; c < a.length; c++) {
        var g = a[c];
        r = r.replace(new RegExp(g, "g"), e[g]);
    } return r; }
    m.exports = function (r) { if (typeof r != "string")
        throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof r + "`"); try {
        return r = r.replace(/\+/g, " "), decodeURIComponent(r);
    }
    catch {
        return R(r);
    } };
});
var d = h(f()), $ = h(f()), { default: j, ...M } = $, O = d.default ?? j ?? M;
export { O as default };
