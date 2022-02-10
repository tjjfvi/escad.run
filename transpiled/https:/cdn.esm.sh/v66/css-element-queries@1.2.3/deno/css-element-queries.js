/* esm.sh - esbuild bundle(css-element-queries@1.2.3) deno production */
var X = Object.create;
var H = Object.defineProperty;
var Y = Object.getOwnPropertyDescriptor;
var Z = Object.getOwnPropertyNames;
var _ = Object.getPrototypeOf, ee = Object.prototype.hasOwnProperty;
var te = d => H(d, "__esModule", { value: !0 });
var N = (d, r) => () => (r || d((r = { exports: {} }).exports, r), r.exports);
var ne = (d, r, T, f) => { if (r && typeof r == "object" || typeof r == "function")
    for (let m of Z(r))
        !ee.call(d, m) && (T || m !== "default") && H(d, m, { get: () => r[m], enumerable: !(f = Y(r, m)) || f.enumerable }); return d; }, V = (d, r) => ne(te(H(d != null ? X(_(d)) : {}, "default", !r && d && d.__esModule ? { get: () => d.default, enumerable: !0 } : { value: d, enumerable: !0 })), d);
var W = N((F, B) => {
    "use strict";
    (function (d, r) { typeof define == "function" && define.amd ? define(r) : typeof F == "object" ? B.exports = r() : d.ResizeSensor = r(); })(typeof window < "u" ? window : F, function () { if (typeof window > "u")
        return null; var d = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")(), r = d.requestAnimationFrame || d.mozRequestAnimationFrame || d.webkitRequestAnimationFrame || function (u) { return d.setTimeout(u, 20); }, T = d.cancelAnimationFrame || d.mozCancelAnimationFrame || d.webkitCancelAnimationFrame || function (u) { d.clearTimeout(u); }; function f(u, h) { var s = Object.prototype.toString.call(u), A = s === "[object Array]" || s === "[object NodeList]" || s === "[object HTMLCollection]" || s === "[object Object]" || typeof jQuery < "u" && u instanceof jQuery || typeof Elements < "u" && u instanceof Elements, q = 0, n = u.length; if (A)
        for (; q < n; q++)
            h(u[q]);
    else
        h(u); } function m(u) { if (!u.getBoundingClientRect)
        return { width: u.offsetWidth, height: u.offsetHeight }; var h = u.getBoundingClientRect(); return { width: Math.round(h.width), height: Math.round(h.height) }; } function b(u, h) { Object.keys(h).forEach(function (s) { u.style[s] = h[s]; }); } var M = function (u, h) { var s = 0; function A() { var n = []; this.add = function (C) { n.push(C); }; var g, Q; this.call = function (C) { for (g = 0, Q = n.length; g < Q; g++)
        n[g].call(this, C); }, this.remove = function (C) { var z = []; for (g = 0, Q = n.length; g < Q; g++)
        n[g] !== C && z.push(n[g]); n = z; }, this.length = function () { return n.length; }; } function q(n, g) { if (!!n) {
        if (n.resizedAttached) {
            n.resizedAttached.add(g);
            return;
        }
        n.resizedAttached = new A, n.resizedAttached.add(g), n.resizeSensor = document.createElement("div"), n.resizeSensor.dir = "ltr", n.resizeSensor.className = "resize-sensor";
        var Q = { pointerEvents: "none", position: "absolute", left: "0px", top: "0px", right: "0px", bottom: "0px", overflow: "hidden", zIndex: "-1", visibility: "hidden", maxWidth: "100%" }, C = { position: "absolute", left: "0px", top: "0px", transition: "0s" };
        b(n.resizeSensor, Q);
        var z = document.createElement("div");
        z.className = "resize-sensor-expand", b(z, Q);
        var L = document.createElement("div");
        b(L, C), z.appendChild(L);
        var E = document.createElement("div");
        E.className = "resize-sensor-shrink", b(E, Q);
        var R = document.createElement("div");
        b(R, C), b(R, { width: "200%", height: "200%" }), E.appendChild(R), n.resizeSensor.appendChild(z), n.resizeSensor.appendChild(E), n.appendChild(n.resizeSensor);
        var e = window.getComputedStyle(n), t = e ? e.getPropertyValue("position") : null;
        t !== "absolute" && t !== "relative" && t !== "fixed" && t !== "sticky" && (n.style.position = "relative");
        var i = !1, o = 0, a = m(n), l = 0, w = 0, c = !0;
        s = 0;
        var S = function () { var y = n.offsetWidth, O = n.offsetHeight; L.style.width = y + 10 + "px", L.style.height = O + 10 + "px", z.scrollLeft = y + 10, z.scrollTop = O + 10, E.scrollLeft = y + 10, E.scrollTop = O + 10; }, v = function () { if (c) {
            var y = n.offsetWidth === 0 && n.offsetHeight === 0;
            if (y) {
                s || (s = r(function () { s = 0, v(); }));
                return;
            }
            else
                c = !1;
        } S(); };
        n.resizeSensor.resetSensor = v;
        var I = function () { o = 0, !!i && (l = a.width, w = a.height, n.resizedAttached && n.resizedAttached.call(a)); }, x = function () { a = m(n), i = a.width !== l || a.height !== w, i && !o && (o = r(I)), v(); }, p = function (y, O, k) { y.attachEvent ? y.attachEvent("on" + O, k) : y.addEventListener(O, k); };
        p(z, "scroll", x), p(E, "scroll", x), s = r(function () { s = 0, v(); });
    } } f(u, function (n) { q(n, h); }), this.detach = function (n) { s || (T(s), s = 0), M.detach(u, n); }, this.reset = function () { u.resizeSensor.resetSensor(); }; }; if (M.reset = function (u) { f(u, function (h) { h.resizeSensor.resetSensor(); }); }, M.detach = function (u, h) { f(u, function (s) { !s || s.resizedAttached && typeof h == "function" && (s.resizedAttached.remove(h), s.resizedAttached.length()) || s.resizeSensor && (s.contains(s.resizeSensor) && s.removeChild(s.resizeSensor), delete s.resizeSensor, delete s.resizedAttached); }); }, typeof MutationObserver < "u") {
        var j = new MutationObserver(function (u) { for (var h in u)
            if (u.hasOwnProperty(h))
                for (var s = u[h].addedNodes, A = 0; A < s.length; A++)
                    s[A].resizeSensor && M.reset(s[A]); });
        document.addEventListener("DOMContentLoaded", function (u) { j.observe(document.body, { childList: !0, subtree: !0 }); });
    } return M; });
});
var K = N(($, D) => {
    "use strict";
    (function (d, r) { typeof define == "function" && define.amd ? define(["./ResizeSensor.js"], r) : typeof $ == "object" ? D.exports = r(W()) : (d.ElementQueries = r(d.ResizeSensor), d.ElementQueries.listen()); })(typeof window < "u" ? window : $, function (d) {
        var r = function () {
            var f, m = {}, b = [];
            function M(e) { e || (e = document.documentElement); var t = window.getComputedStyle(e, null).fontSize; return parseFloat(t) || 16; }
            function j(e) { if (!e.getBoundingClientRect)
                return { width: e.offsetWidth, height: e.offsetHeight }; var t = e.getBoundingClientRect(); return { width: Math.round(t.width), height: Math.round(t.height) }; }
            function u(e, t) { var i = t.split(/\d/), o = i[i.length - 1]; switch (t = parseFloat(t), o) {
                case "px": return t;
                case "em": return t * M(e);
                case "rem": return t * M();
                case "vw": return t * document.documentElement.clientWidth / 100;
                case "vh": return t * document.documentElement.clientHeight / 100;
                case "vmin":
                case "vmax":
                    var a = document.documentElement.clientWidth / 100, l = document.documentElement.clientHeight / 100, w = Math[o === "vmin" ? "min" : "max"];
                    return t * w(a, l);
                default: return t;
            } }
            function h(e, t) { this.element = e; var i, o, a, l, w, c, S, v, I = ["min-width", "min-height", "max-width", "max-height"]; this.call = function () { a = j(this.element), c = {}; for (i in m[t])
                !m[t].hasOwnProperty(i) || (o = m[t][i], l = u(this.element, o.value), w = o.property === "width" ? a.width : a.height, v = o.mode + "-" + o.property, S = "", o.mode === "min" && w >= l && (S += o.value), o.mode === "max" && w <= l && (S += o.value), c[v] || (c[v] = ""), S && (" " + c[v] + " ").indexOf(" " + S + " ") === -1 && (c[v] += " " + S)); for (var x in I)
                !I.hasOwnProperty(x) || (c[I[x]] ? this.element.setAttribute(I[x], c[I[x]].substr(1)) : this.element.removeAttribute(I[x])); }; }
            function s(e, t) { e.elementQueriesSetupInformation || (e.elementQueriesSetupInformation = new h(e, t)), e.elementQueriesSensor || (e.elementQueriesSensor = new d(e, function () { e.elementQueriesSetupInformation.call(); })); }
            function A(e, t, i, o) {
                if (typeof m[e] > "u") {
                    m[e] = [];
                    var a = b.length;
                    f.innerHTML += `
` + e + " {animation: 0.1s element-queries;}", f.innerHTML += `
` + e + " > .resize-sensor {min-width: " + a + "px;}", b.push(e);
                }
                m[e].push({ mode: t, property: i, value: o });
            }
            function q(e) { var t; if (document.querySelectorAll && (t = e ? e.querySelectorAll.bind(e) : document.querySelectorAll.bind(document)), !t && typeof $$ < "u" && (t = $$), !t && typeof jQuery < "u" && (t = jQuery), !t)
                throw "No document.querySelectorAll, jQuery or Mootools's $$ found."; return t; }
            function n(e) { var t = q(e); for (var i in m)
                if (m.hasOwnProperty(i))
                    for (var o = t(i, e), a = 0, l = o.length; a < l; a++)
                        s(o[a], i); }
            function g(e) { var t = [], i = [], o = [], a = 0, l = -1, w = []; for (var c in e.children)
                if (!!e.children.hasOwnProperty(c) && e.children[c].tagName && e.children[c].tagName.toLowerCase() === "img") {
                    t.push(e.children[c]);
                    var S = e.children[c].getAttribute("min-width") || e.children[c].getAttribute("data-min-width"), v = e.children[c].getAttribute("data-src") || e.children[c].getAttribute("url");
                    o.push(v);
                    var I = { minWidth: S };
                    i.push(I), S ? e.children[c].style.display = "none" : (a = t.length - 1, e.children[c].style.display = "block");
                } l = a; function x() { var p = !1, y; for (y in t)
                !t.hasOwnProperty(y) || i[y].minWidth && e.offsetWidth > i[y].minWidth && (p = y); if (p || (p = a), l !== p)
                if (w[p])
                    t[l].style.display = "none", t[p].style.display = "block", l = p;
                else {
                    var O = new Image;
                    O.onload = function () { t[p].src = o[p], t[l].style.display = "none", t[p].style.display = "block", w[p] = !0, l = p; }, O.src = o[p];
                }
            else
                t[p].src = o[p]; } e.resizeSensorInstance = new d(e, x), x(); }
            function Q() { for (var e = q(), t = e("[data-responsive-image],[responsive-image]"), i = 0, o = t.length; i < o; i++)
                g(t[i]); }
            var C = /,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:min|max)-(?:width|height)[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/mgi, z = /\[[\s\t]*?(min|max)-(width|height)[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/mgi;
            function L(e) { var t, i, o, a; for (e = e.replace(/'/g, '"'); (t = C.exec(e)) !== null;)
                for (i = t[1] + t[3], o = t[2]; (a = z.exec(o)) !== null;)
                    A(i, a[1], a[2], a[3]); }
            function E(e) { var t = ""; if (!!e)
                if (typeof e == "string")
                    e = e.toLowerCase(), (e.indexOf("min-width") !== -1 || e.indexOf("max-width") !== -1) && L(e);
                else
                    for (var i = 0, o = e.length; i < o; i++)
                        e[i].type === 1 ? (t = e[i].selectorText || e[i].cssText, (t.indexOf("min-height") !== -1 || t.indexOf("max-height") !== -1 || t.indexOf("min-width") !== -1 || t.indexOf("max-width") !== -1) && L(t)) : e[i].type === 4 ? E(e[i].cssRules || e[i].rules) : e[i].type === 3 && e[i].styleSheet.hasOwnProperty("cssRules") && E(e[i].styleSheet.cssRules); }
            var R = !1;
            this.init = function () {
                var e = "animationstart";
                typeof document.documentElement.style.webkitAnimationName < "u" ? e = "webkitAnimationStart" : typeof document.documentElement.style.MozAnimationName < "u" ? e = "mozanimationstart" : typeof document.documentElement.style.OAnimationName < "u" && (e = "oanimationstart"), document.body.addEventListener(e, function (o) { var a = o.target, l = a && window.getComputedStyle(a, null), w = l && l.getPropertyValue("animation-name"), c = w && w.indexOf("element-queries") !== -1; if (c) {
                    a.elementQueriesSensor = new d(a, function () { a.elementQueriesSetupInformation && a.elementQueriesSetupInformation.call(); });
                    var S = window.getComputedStyle(a.resizeSensor, null), v = S.getPropertyValue("min-width");
                    v = parseInt(v.replace("px", "")), s(o.target, b[v]);
                } }), R || (f = document.createElement("style"), f.type = "text/css", f.innerHTML = "[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img {width: 100%;}", f.innerHTML += `
@keyframes element-queries { 0% { visibility: inherit; } }`, document.getElementsByTagName("head")[0].appendChild(f), R = !0);
                for (var t = 0, i = document.styleSheets.length; t < i; t++)
                    try {
                        document.styleSheets[t].href && document.styleSheets[t].href.indexOf("file://") === 0 && console.warn("CssElementQueries: unable to parse local css files, " + document.styleSheets[t].href), E(document.styleSheets[t].cssRules || document.styleSheets[t].rules || document.styleSheets[t].cssText);
                    }
                    catch { }
                Q();
            }, this.findElementQueriesElements = function (e) { n(e); }, this.update = function () { this.init(); };
        };
        r.update = function () { r.instance.update(); }, r.detach = function (f) { f.elementQueriesSetupInformation ? (f.elementQueriesSensor.detach(), delete f.elementQueriesSetupInformation, delete f.elementQueriesSensor) : f.resizeSensorInstance && (f.resizeSensorInstance.detach(), delete f.resizeSensorInstance); }, r.init = function () { r.instance || (r.instance = new r), r.instance.init(); };
        var T = function (f) { if (document.addEventListener)
            document.addEventListener("DOMContentLoaded", f, !1);
        else if (/KHTML|WebKit|iCab/i.test(navigator.userAgent))
            var m = setInterval(function () { /loaded|complete/i.test(document.readyState) && (f(), clearInterval(m)); }, 10);
        else
            window.onload = f; };
        return r.findElementQueriesElements = function (f) { r.instance.findElementQueriesElements(f); }, r.listen = function () { T(r.init); }, r;
    });
});
var P = N((se, G) => { G.exports = { ResizeSensor: W(), ElementQueries: K() }; });
var J = V(P()), U = V(P()), { ResizeSensor: ae, ElementQueries: de } = U, { default: ie, ...re } = U, ue = J.default ?? ie ?? re;
export { de as ElementQueries, ae as ResizeSensor, ue as default };
