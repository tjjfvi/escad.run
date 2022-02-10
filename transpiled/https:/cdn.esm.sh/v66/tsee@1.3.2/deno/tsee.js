/* esm.sh - esbuild bundle(tsee@1.3.2) deno production */
var O = Object.create;
var c = Object.defineProperty;
var _ = Object.getOwnPropertyDescriptor;
var b = Object.getOwnPropertyNames;
var M = Object.getPrototypeOf, x = Object.prototype.hasOwnProperty;
var j = r => c(r, "__esModule", { value: !0 });
var d = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var P = (r, e, t, n) => { if (e && typeof e == "object" || typeof e == "function")
    for (let s of b(e))
        !x.call(r, s) && (t || s !== "default") && c(r, s, { get: () => e[s], enumerable: !(n = _(e, s)) || n.enumerable }); return r; }, l = (r, e) => P(j(c(r != null ? O(M(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: !0 } : { value: r, enumerable: !0 })), r);
var m = d(v => {
    "use strict";
    Object.defineProperty(v, "__esModule", { value: !0 });
    v.asTypedEventEmitter = void 0;
    function A(r) { return r; }
    v.asTypedEventEmitter = A;
});
var g = d(o => {
    "use strict";
    var $ = o && o.__spreadArrays || function () { for (var r = 0, e = 0, t = arguments.length; e < t; e++)
        r += arguments[e].length; for (var n = Array(r), s = 0, e = 0; e < t; e++)
        for (var u = arguments[e], i = 0, f = u.length; i < f; i++, s++)
            n[s] = u[i]; return n; };
    Object.defineProperty(o, "__esModule", { value: !0 });
    o.EventEmitter = void 0;
    var w = function () { function r() { var e = this; this.events = {}, this.maxListeners = 1 / 0, this.emit = function (t) { for (var n = [], s = 1; s < arguments.length; s++)
        n[s - 1] = arguments[s]; if (e.events[t]) {
        for (var u = e.events[t].length, i = 0, f = e.events[t]; i < f.length; i++) {
            var E = f[i];
            E.apply(void 0, n);
        }
        return !!u;
    } return !1; }, this.on = function (t, n) { return e.addListener(t, n), e; }, this.once = function (t, n) { var s = function () { for (var u = [], i = 0; i < arguments.length; i++)
        u[i] = arguments[i]; n.apply(void 0, u), e.removeListener(t, s); }; return e.addListener(t, s), e; }, this.addListener = function (t, n) { return t in e.events ? e.events[t].push(n) : e.events[t] = [n], e.maxListeners !== 1 / 0 && e.maxListeners <= e.events[t].length && console.warn('Maximum event listeners for "' + t + '" event!'), e; }, this.removeListener = function (t, n) { if (t in e.events) {
        var s = e.events[t].indexOf(n);
        s !== -1 && e.events[t].splice(s, 1);
    } return e; }, this.hasListeners = function (t) { return e.events[t] && !!e.events[t].length; }, this.prependListener = function (t, n) { return t in e.events ? e.events[t].unshift(n) : e.events[t] = [n], e; }, this.prependOnceListener = function (t, n) { var s = function () { for (var u = [], i = 0; i < arguments.length; i++)
        u[i] = arguments[i]; n.apply(void 0, u), e.removeListener(t, s); }; return e.prependListener(t, s), e; }, this.off = function (t, n) { return e.removeListener(t, n); }, this.removeAllListeners = function (t) { return delete e.events[t], e; }, this.setMaxListeners = function (t) { return e.maxListeners = t, e; }, this.getMaxListeners = function () { return e.maxListeners; }, this.listeners = function (t) { return $(e.events[t]); }, this.rawListeners = function (t) { return e.events[t]; }, this.eventNames = function () { return Object.keys(e.events); }, this.listenerCount = function (t) { return e.events[t] && e.events[t].length || 0; }; } return r; }();
    o.EventEmitter = w;
});
var h = d(a => {
    "use strict";
    var T = a && a.__createBinding || (Object.create ? function (r, e, t, n) { n === void 0 && (n = t), Object.defineProperty(r, n, { enumerable: !0, get: function () { return e[t]; } }); } : function (r, e, t, n) { n === void 0 && (n = t), r[n] = e[t]; }), p = a && a.__exportStar || function (r, e) { for (var t in r)
        t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && T(e, r, t); };
    Object.defineProperty(a, "__esModule", { value: !0 });
    p(m(), a);
    p(g(), a);
});
var L = l(h()), y = l(h()), { __esModule: z } = y, { default: q, ...B } = y, D = L.default ?? q ?? B;
export { z as __esModule, D as default };
