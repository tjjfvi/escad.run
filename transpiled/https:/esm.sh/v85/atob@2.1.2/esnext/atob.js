/* esm.sh - esbuild bundle(atob@2.1.2) esnext production */
import { Buffer as __Buffer$ } from "/transpiled/https://esm.sh/v85/node_buffer.js";
var d = Object.create;
var a = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var j = Object.getPrototypeOf,
    w = Object.prototype.hasOwnProperty;

var i = (r, t) => a(r, "name", {
  value: t,
  configurable: !0
});

var B = (r, t) => () => (t || r((t = {
  exports: {}
}).exports, t), t.exports);

var g = (r, t, o, n) => {
  if (t && typeof t == "object" || typeof t == "function") for (let e of m(t)) !w.call(r, e) && e !== o && a(r, e, {
    get: () => t[e],
    enumerable: !(n = l(t, e)) || n.enumerable
  });
  return r;
};

var s = (r, t, o) => (o = r != null ? d(j(r)) : {}, g(t || !r || !r.__esModule ? a(o, "default", {
  value: r,
  enumerable: !0
}) : o, r));

var b = B((k, f) => {
  (function (r) {
    "use strict";

    function t(n) {
      return typeof n == "function" ? n : typeof __Buffer$ == "function" ? i(function (u) {
        return new __Buffer$(u, "base64").toString("binary");
      }, "atobBrowserify") : typeof r.base64js == "object" ? i(function (u) {
        var p = r.base64js.b64ToByteArray(u);
        return Array.prototype.map.call(p, function (y) {
          return String.fromCharCode(y);
        }).join("");
      }, "atobWebWorker_iOS") : function () {
        throw new Error("You're probably in an old browser or an iOS webworker. It might help to include beatgammit's base64-js.");
      };
    }

    i(t, "findBest");
    var o = t(r.atob);
    r.atob = o, typeof f == "object" && f && f.exports && (f.exports = o);
  })(window);
});
var c = s(b()),
    h = s(b()),
    {
  default: S,
  ...$
} = h,
    A = c.default ?? S ?? $;
export { A as default }; //!! Deliberately using an API that's deprecated in node.js because
//!! Discussion: github.com/node-browser-compat/atob/pull/9
//!! this file is for browsers and we expect them to cope with it.