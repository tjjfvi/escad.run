/* esm.sh - esbuild bundle(safer-buffer@2.1.2) deno production */
import __Process$ from "/transpiled/https://deno.land/std@0.122.0/node/process.js";
__Process$.env.NODE_ENV = "production";
import __buffer$ from "/transpiled/https://cdn.esm.sh/v64/node_buffer.js";
var l = Object.create;
var s = Object.defineProperty;
var b = Object.getOwnPropertyDescriptor;
var w = Object.getOwnPropertyNames;
var d = Object.getPrototypeOf, T = Object.prototype.hasOwnProperty;
var x = e => s(e, "__esModule", { value: !0 });
var S = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, { get: (r, n) => (typeof require != "undefined" ? require : r)[n] }) : e)(function (e) { if (typeof require != "undefined")
    return require.apply(this, arguments); throw new Error('Dynamic require of "' + e + '" is not supported'); });
var k = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var B = (e, r, n, o) => { if (r && typeof r == "object" || typeof r == "function")
    for (let u of w(r))
        !T.call(e, u) && (n || u !== "default") && s(e, u, { get: () => r[u], enumerable: !(o = b(r, u)) || o.enumerable }); return e; }, c = (e, r) => B(x(s(e != null ? l(d(e)) : {}, "default", !r && e && e.__esModule ? { get: () => e.default, enumerable: !0 } : { value: e, enumerable: !0 })), e);
var y = k((A, g) => {
    "use strict";
    var p = __buffer$, i = p.Buffer, t = {}, f;
    for (f in p)
        !p.hasOwnProperty(f) || f === "SlowBuffer" || f === "Buffer" || (t[f] = p[f]);
    var a = t.Buffer = {};
    for (f in i)
        !i.hasOwnProperty(f) || f === "allocUnsafe" || f === "allocUnsafeSlow" || (a[f] = i[f]);
    t.Buffer.prototype = i.prototype;
    (!a.from || a.from === Uint8Array.from) && (a.from = function (e, r, n) { if (typeof e == "number")
        throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof e); if (e && typeof e.length == "undefined")
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e); return i(e, r, n); });
    a.alloc || (a.alloc = function (e, r, n) { if (typeof e != "number")
        throw new TypeError('The "size" argument must be of type number. Received type ' + typeof e); if (e < 0 || e >= 2 * (1 << 30))
        throw new RangeError('The value "' + e + '" is invalid for option "size"'); var o = i(e); return !r || r.length === 0 ? o.fill(0) : typeof n == "string" ? o.fill(r, n) : o.fill(r), o; });
    if (!t.kStringMaxLength)
        try {
            t.kStringMaxLength = __Process$.binding("buffer").kStringMaxLength;
        }
        catch { }
    t.constants || (t.constants = { MAX_LENGTH: t.kMaxLength }, t.kStringMaxLength && (t.constants.MAX_STRING_LENGTH = t.kStringMaxLength));
    g.exports = t;
});
var h = c(y()), m = c(y()), { constants: E } = m, { default: L, ...M } = m, R = h.default ?? L ?? M;
export { E as constants, R as default };
