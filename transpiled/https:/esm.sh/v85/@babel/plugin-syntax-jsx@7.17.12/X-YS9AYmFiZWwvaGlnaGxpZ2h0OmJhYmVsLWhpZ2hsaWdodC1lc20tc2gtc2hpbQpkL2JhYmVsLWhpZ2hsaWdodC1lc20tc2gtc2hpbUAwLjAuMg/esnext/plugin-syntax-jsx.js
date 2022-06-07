/* esm.sh - esbuild bundle(@babel/plugin-syntax-jsx@7.17.12) esnext production */
import ___babel_helper_plugin_utils$ from "/transpiled/https://esm.sh/v85/@babel/helper-plugin-utils@7.17.12/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-plugin-utils.js";
var f = Object.create;
var l = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var c = Object.getPrototypeOf,
    _ = Object.prototype.hasOwnProperty;

var x = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (t, r) => (typeof require != "undefined" ? require : t)[r]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var y = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var v = (e, t, r, u) => {
  if (t && typeof t == "object" || typeof t == "function") for (let s of m(t)) !_.call(e, s) && s !== r && l(e, s, {
    get: () => t[s],
    enumerable: !(u = p(t, s)) || u.enumerable
  });
  return e;
};

var i = (e, t, r) => (r = e != null ? f(c(e)) : {}, v(t || !e || !e.__esModule ? l(r, "default", {
  value: e,
  enumerable: !0
}) : r, e));

var o = y(a => {
  "use strict";

  Object.defineProperty(a, "__esModule", {
    value: !0
  });
  a.default = void 0;
  var $ = ___babel_helper_plugin_utils$,
      j = (0, $.declare)(e => (e.assertVersion(7), {
    name: "syntax-jsx",

    manipulateOptions(t, r) {
      let {
        plugins: u
      } = r;
      u.some(s => (Array.isArray(s) ? s[0] : s) === "typescript") || u.push("jsx");
    }

  }));
  a.default = j;
});
var d = i(o()),
    n = i(o()),
    {
  __esModule: O
} = n,
    {
  default: g,
  ...h
} = n,
    P = d.default ?? g ?? h;
export { O as __esModule, P as default };