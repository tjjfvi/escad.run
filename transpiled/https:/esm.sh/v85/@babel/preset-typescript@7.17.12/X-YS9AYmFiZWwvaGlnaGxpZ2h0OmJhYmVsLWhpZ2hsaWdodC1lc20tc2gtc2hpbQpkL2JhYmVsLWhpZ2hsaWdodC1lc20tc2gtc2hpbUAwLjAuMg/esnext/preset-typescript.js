/* esm.sh - esbuild bundle(@babel/preset-typescript@7.17.12) esnext production */
import ___babel_helper_validator_option$ from "/transpiled/https://esm.sh/v85/@babel/helper-validator-option@7.16.7/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-validator-option.js";
import * as ___babel_plugin_transform_typescript$$ from "/transpiled/https://esm.sh/v85/@babel/plugin-transform-typescript@7.18.4/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/plugin-transform-typescript.js";

const ___babel_plugin_transform_typescript$ = Object.assign({
  __esModule: true
}, ___babel_plugin_transform_typescript$$);

import ___babel_helper_plugin_utils$ from "/transpiled/https://esm.sh/v85/@babel/helper-plugin-utils@7.17.12/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-plugin-utils.js";
var X = Object.create;
var g = Object.defineProperty;
var P = Object.getOwnPropertyDescriptor;
var j = Object.getOwnPropertyNames;
var b = Object.getPrototypeOf,
    O = Object.prototype.hasOwnProperty;

var p = (e, s) => g(e, "name", {
  value: s,
  configurable: !0
}),
    c = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (s, t) => (typeof require != "undefined" ? require : s)[t]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var F = (e, s) => () => (s || e((s = {
  exports: {}
}).exports, s), s.exports);

var L = (e, s, t, i) => {
  if (s && typeof s == "object" || typeof s == "function") for (let a of j(s)) !O.call(e, a) && a !== t && g(e, a, {
    get: () => s[a],
    enumerable: !(i = P(s, a)) || i.enumerable
  });
  return e;
};

var S = (e, s, t) => (t = e != null ? X(b(e)) : {}, L(s || !e || !e.__esModule ? g(t, "default", {
  value: e,
  enumerable: !0
}) : t, e));

var v = F(x => {
  "use strict";

  Object.defineProperty(x, "__esModule", {
    value: !0
  });
  var $ = ___babel_helper_plugin_utils$,
      k = ___babel_plugin_transform_typescript$,
      z = ___babel_helper_validator_option$;

  function A(e) {
    return e && typeof e == "object" && "default" in e ? e : {
      default: e
    };
  }

  p(A, "_interopDefaultLegacy");
  var n = A(k),
      l = new z.OptionValidator("@babel/preset-typescript");

  function J(e = {}) {
    let {
      allowNamespaces: s = !0,
      jsxPragma: t,
      onlyRemoveTypeImports: i
    } = e,
        a = {
      allExtensions: "allExtensions",
      allowNamespaces: "allowNamespaces",
      disallowAmbiguousJSXLike: "disallowAmbiguousJSXLike",
      isTSX: "isTSX",
      jsxPragma: "jsxPragma",
      jsxPragmaFrag: "jsxPragmaFrag",
      onlyRemoveTypeImports: "onlyRemoveTypeImports",
      optimizeConstEnums: "optimizeConstEnums"
    },
        d = l.validateStringOption(a.jsxPragmaFrag, e.jsxPragmaFrag, "React.Fragment"),
        o = l.validateBooleanOption(a.allExtensions, e.allExtensions, !1),
        u = l.validateBooleanOption(a.isTSX, e.isTSX, !1);
    u && l.invariant(o, "isTSX:true requires allExtensions:true");
    let m = l.validateBooleanOption(a.disallowAmbiguousJSXLike, e.disallowAmbiguousJSXLike, !1);
    m && l.invariant(o, "disallowAmbiguousJSXLike:true requires allExtensions:true");
    let f = l.validateBooleanOption(a.optimizeConstEnums, e.optimizeConstEnums, !1);
    return {
      allExtensions: o,
      allowNamespaces: s,
      disallowAmbiguousJSXLike: m,
      isTSX: u,
      jsxPragma: t,
      jsxPragmaFrag: d,
      onlyRemoveTypeImports: i,
      optimizeConstEnums: f
    };
  }

  p(J, "normalizeOptions");

  var _ = $.declarePreset((e, s) => {
    e.assertVersion(7);
    let {
      allExtensions: t,
      allowNamespaces: i,
      disallowAmbiguousJSXLike: a,
      isTSX: d,
      jsxPragma: o,
      jsxPragmaFrag: u,
      onlyRemoveTypeImports: m,
      optimizeConstEnums: f
    } = J(s),
        r = p((w, E) => ({
      allowDeclareFields: s.allowDeclareFields,
      allowNamespaces: i,
      disallowAmbiguousJSXLike: E,
      isTSX: w,
      jsxPragma: o,
      jsxPragmaFrag: u,
      onlyRemoveTypeImports: m,
      optimizeConstEnums: f
    }), "pluginOptions");
    return {
      overrides: t ? [{
        plugins: [[n.default, r(d, a)]]
      }] : [{
        test: /\.ts$/,
        plugins: [[n.default, r(!1, !1)]]
      }, {
        test: /\.mts$/,
        sourceType: "module",
        plugins: [[n.default, r(!1, !0)]]
      }, {
        test: /\.cts$/,
        sourceType: "script",
        plugins: [[n.default, r(!1, !0)]]
      }, {
        test: /\.tsx$/,
        plugins: [[n.default, r(!0, !1)]]
      }]
    };
  });

  x.default = _;
});
var y = S(v()),
    T = S(v()),
    {
  __esModule: I
} = T,
    {
  default: C,
  ...q
} = T,
    N = y.default ?? C ?? q;
export { I as __esModule, N as default };