/* esm.sh - esbuild bundle(@babel/preset-typescript@7.17.12) esnext production */
import ___babel_helper_validator_option$ from "/transpiled/https://esm.sh/v96/@babel/helper-validator-option@7.18.6/esnext/helper-validator-option.js";
import * as ___babel_plugin_transform_typescript$ from "/transpiled/https://esm.sh/v96/@babel/plugin-transform-typescript@7.19.3/esnext/plugin-transform-typescript.js";
import ___babel_helper_plugin_utils$ from "/transpiled/https://esm.sh/v96/@babel/helper-plugin-utils@7.19.0/esnext/helper-plugin-utils.js";
var T = Object.create;
var f = Object.defineProperty;
var w = Object.getOwnPropertyDescriptor;
var E = Object.getOwnPropertyNames;
var X = Object.getPrototypeOf,
    P = Object.prototype.hasOwnProperty;

var g = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (s, t) => (typeof require < "u" ? require : s)[t]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var _ = (e, s) => () => (s || e((s = {
  exports: {}
}).exports, s), s.exports);

var j = (e, s, t, i) => {
  if (s && typeof s == "object" || typeof s == "function") for (let a of E(s)) !P.call(e, a) && a !== t && f(e, a, {
    get: () => s[a],
    enumerable: !(i = w(s, a)) || i.enumerable
  });
  return e;
};

var b = (e, s, t) => (t = e != null ? T(X(e)) : {}, j(s || !e || !e.__esModule ? f(t, "default", {
  value: e,
  enumerable: !0
}) : t, e));

var x = _(c => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: !0
  });
  var O = ___babel_helper_plugin_utils$,
      F = ___babel_plugin_transform_typescript$,
      L = ___babel_helper_validator_option$;

  function k(e) {
    return e && typeof e == "object" && "default" in e ? e : {
      default: e
    };
  }

  var n = k(F),
      l = new L.OptionValidator("@babel/preset-typescript");

  function z(e = {}) {
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
        p = l.validateStringOption(a.jsxPragmaFrag, e.jsxPragmaFrag, "React.Fragment"),
        o = l.validateBooleanOption(a.allExtensions, e.allExtensions, !1),
        u = l.validateBooleanOption(a.isTSX, e.isTSX, !1);
    u && l.invariant(o, "isTSX:true requires allExtensions:true");
    let m = l.validateBooleanOption(a.disallowAmbiguousJSXLike, e.disallowAmbiguousJSXLike, !1);
    m && l.invariant(o, "disallowAmbiguousJSXLike:true requires allExtensions:true");
    let d = l.validateBooleanOption(a.optimizeConstEnums, e.optimizeConstEnums, !1);
    return {
      allExtensions: o,
      allowNamespaces: s,
      disallowAmbiguousJSXLike: m,
      isTSX: u,
      jsxPragma: t,
      jsxPragmaFrag: p,
      onlyRemoveTypeImports: i,
      optimizeConstEnums: d
    };
  }

  var A = O.declarePreset((e, s) => {
    e.assertVersion(7);

    let {
      allExtensions: t,
      allowNamespaces: i,
      disallowAmbiguousJSXLike: a,
      isTSX: p,
      jsxPragma: o,
      jsxPragmaFrag: u,
      onlyRemoveTypeImports: m,
      optimizeConstEnums: d
    } = z(s),
        r = (S, y) => ({
      allowDeclareFields: s.allowDeclareFields,
      allowNamespaces: i,
      disallowAmbiguousJSXLike: y,
      isTSX: S,
      jsxPragma: o,
      jsxPragmaFrag: u,
      onlyRemoveTypeImports: m,
      optimizeConstEnums: d
    });

    return {
      overrides: t ? [{
        plugins: [[n.default, r(p, a)]]
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
  c.default = A;
});

var J = b(x()),
    B = !0,
    {
  default: v,
  ...C
} = J,
    I = v !== void 0 ? v : C;
export { B as __esModule, I as default };