/* esm.sh - esbuild bundle(@babel/plugin-syntax-jsx@7.18.6) esnext production */
import ___babel_helper_plugin_utils$ from "/transpiled/https://esm.sh/v96/@babel/helper-plugin-utils@7.19.0/esnext/helper-plugin-utils.js";
var n = Object.create;
var l = Object.defineProperty;
var d = Object.getOwnPropertyDescriptor;
var _ = Object.getOwnPropertyNames;
var f = Object.getPrototypeOf,
    p = Object.prototype.hasOwnProperty;

var c = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (t, r) => (typeof require < "u" ? require : t)[r]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var m = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var x = (e, t, r, u) => {
  if (t && typeof t == "object" || typeof t == "function") for (let s of _(t)) !p.call(e, s) && s !== r && l(e, s, {
    get: () => t[s],
    enumerable: !(u = d(t, s)) || u.enumerable
  });
  return e;
};

var y = (e, t, r) => (r = e != null ? n(f(e)) : {}, x(t || !e || !e.__esModule ? l(r, "default", {
  value: e,
  enumerable: !0
}) : r, e));

var o = m(a => {
  "use strict";

  Object.defineProperty(a, "__esModule", {
    value: !0
  });
  a.default = void 0;
  var v = ___babel_helper_plugin_utils$,
      j = (0, v.declare)(e => (e.assertVersion(7), {
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
var g = y(o()),
    O = !0,
    {
  default: i,
  ...h
} = g,
    P = i !== void 0 ? i : h;
export { O as __esModule, P as default };