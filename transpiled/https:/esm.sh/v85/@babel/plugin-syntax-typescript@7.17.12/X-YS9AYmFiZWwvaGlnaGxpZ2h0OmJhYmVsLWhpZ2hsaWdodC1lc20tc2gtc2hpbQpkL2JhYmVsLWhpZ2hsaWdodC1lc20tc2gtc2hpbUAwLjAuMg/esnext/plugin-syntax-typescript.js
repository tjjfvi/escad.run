/* esm.sh - esbuild bundle(@babel/plugin-syntax-typescript@7.17.12) esnext production */
import ___babel_helper_plugin_utils$ from "/transpiled/https://esm.sh/v85/@babel/helper-plugin-utils@7.17.12/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-plugin-utils.js";
var m = Object.create;
var u = Object.defineProperty;
var h = Object.getOwnPropertyDescriptor;
var y = Object.getOwnPropertyNames;
var _ = Object.getPrototypeOf,
    v = Object.prototype.hasOwnProperty;

var f = (e, t) => u(e, "name", {
  value: t,
  configurable: !0
}),
    x = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (t, s) => (typeof require != "undefined" ? require : t)[s]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var j = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var P = (e, t, s, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of y(t)) !v.call(e, o) && o !== s && u(e, o, {
    get: () => t[o],
    enumerable: !(r = h(t, o)) || r.enumerable
  });
  return e;
};

var c = (e, t, s) => (s = e != null ? m(_(e)) : {}, P(t || !e || !e.__esModule ? u(s, "default", {
  value: e,
  enumerable: !0
}) : s, e));

var n = j(a => {
  "use strict";

  Object.defineProperty(a, "__esModule", {
    value: !0
  });
  a.default = void 0;
  var $ = ___babel_helper_plugin_utils$;

  function l(e, t) {
    let s = [];
    e.forEach((r, o) => {
      (Array.isArray(r) ? r[0] : r) === t && s.unshift(o);
    });

    for (let r of s) e.splice(r, 1);
  }

  f(l, "removePlugin");
  var b = (0, $.declare)((e, {
    isTSX: t,
    disallowAmbiguousJSXLike: s
  }) => (e.assertVersion(7), {
    name: "syntax-typescript",

    manipulateOptions(r, o) {
      let {
        plugins: i
      } = o;
      l(i, "flow"), l(i, "jsx"), i.push(["typescript", {
        disallowAmbiguousJSXLike: s
      }], "classProperties"), i.push("objectRestSpread"), t && i.push("jsx");
    }

  }));
  a.default = b;
});
var p = c(n()),
    d = c(n()),
    {
  __esModule: w
} = d,
    {
  default: A,
  ...M
} = d,
    E = p.default ?? A ?? M;
export { w as __esModule, E as default };