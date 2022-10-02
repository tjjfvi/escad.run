/* esm.sh - esbuild bundle(@babel/plugin-syntax-typescript@7.18.6) esnext production */
import ___babel_helper_plugin_utils$ from "/transpiled/https://esm.sh/v96/@babel/helper-plugin-utils@7.19.0/esnext/helper-plugin-utils.js";
var l = Object.create;
var a = Object.defineProperty;
var d = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var _ = Object.getPrototypeOf,
    h = Object.prototype.hasOwnProperty;

var m = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (t, s) => (typeof require < "u" ? require : t)[s]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var y = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var v = (e, t, s, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of p(t)) !h.call(e, o) && o !== s && a(e, o, {
    get: () => t[o],
    enumerable: !(r = d(t, o)) || r.enumerable
  });
  return e;
};

var x = (e, t, s) => (s = e != null ? l(_(e)) : {}, v(t || !e || !e.__esModule ? a(s, "default", {
  value: e,
  enumerable: !0
}) : s, e));

var c = y(u => {
  "use strict";

  Object.defineProperty(u, "__esModule", {
    value: !0
  });
  u.default = void 0;
  var j = ___babel_helper_plugin_utils$;

  function n(e, t) {
    let s = [];
    e.forEach((r, o) => {
      (Array.isArray(r) ? r[0] : r) === t && s.unshift(o);
    });

    for (let r of s) e.splice(r, 1);
  }

  var P = (0, j.declare)((e, {
    isTSX: t,
    disallowAmbiguousJSXLike: s
  }) => (e.assertVersion(7), {
    name: "syntax-typescript",

    manipulateOptions(r, o) {
      let {
        plugins: i
      } = o;
      n(i, "flow"), n(i, "jsx"), i.push(["typescript", {
        disallowAmbiguousJSXLike: s
      }], "classProperties"), i.push("objectRestSpread"), t && i.push("jsx");
    }

  }));
  u.default = P;
});
var b = x(c()),
    q = !0,
    {
  default: f,
  ...A
} = b,
    w = f !== void 0 ? f : A;
export { q as __esModule, w as default };