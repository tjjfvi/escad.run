/* esm.sh - esbuild bundle(@babel/helper-split-export-declaration@7.16.7) esnext production */
import ___babel_types$ from "/transpiled/https://esm.sh/v85/@babel/types@7.18.4/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/types.js";
var O = Object.create;
var a = Object.defineProperty;
var $ = Object.getOwnPropertyDescriptor;
var y = Object.getOwnPropertyNames;
var C = Object.getPrototypeOf,
    j = Object.prototype.hasOwnProperty;

var g = (e, i) => a(e, "name", {
  value: i,
  configurable: !0
}),
    k = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (i, t) => (typeof require != "undefined" ? require : i)[t]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var x = (e, i) => () => (i || e((i = {
  exports: {}
}).exports, i), i.exports);

var A = (e, i, t, o) => {
  if (i && typeof i == "object" || typeof i == "function") for (let s of y(i)) !j.call(e, s) && s !== t && a(e, s, {
    get: () => i[s],
    enumerable: !(o = $(i, s)) || o.enumerable
  });
  return e;
};

var E = (e, i, t) => (t = e != null ? O(C(e)) : {}, A(i || !e || !e.__esModule ? a(t, "default", {
  value: e,
  enumerable: !0
}) : t, e));

var f = x(c => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: !0
  });
  c.default = N;
  var B = ___babel_types$,
      {
    cloneNode: l,
    exportNamedDeclaration: m,
    exportSpecifier: b,
    identifier: d,
    variableDeclaration: F,
    variableDeclarator: M
  } = B;

  function N(e) {
    if (!e.isExportDeclaration()) throw new Error("Only export declarations can be split.");
    let i = e.isExportDefaultDeclaration(),
        t = e.get("declaration"),
        o = t.isClassDeclaration();

    if (i) {
      let n = t.isFunctionDeclaration() || o,
          u = t.isScope() ? t.scope.parent : t.scope,
          r = t.node.id,
          p = !1;
      r || (p = !0, r = u.generateUidIdentifier("default"), (n || t.isFunctionExpression() || t.isClassExpression()) && (t.node.id = l(r)));
      let w = n ? t : F("var", [M(l(r), t.node)]),
          I = m(null, [b(l(r), d("default"))]);
      return e.insertAfter(I), e.replaceWith(w), p && u.registerDeclaration(e), e;
    }

    if (e.get("specifiers").length > 0) throw new Error("It doesn't make sense to split exported specifiers.");

    let s = t.getOuterBindingIdentifiers(),
        v = Object.keys(s).map(n => b(d(n), d(n))),
        _ = m(null, v);

    return e.insertAfter(_), e.replaceWith(t.node), e;
  }

  g(N, "splitExportDeclaration");
});
var D = E(f()),
    h = E(f()),
    {
  __esModule: R
} = h,
    {
  default: S,
  ...W
} = h,
    U = D.default ?? S ?? W;
export { R as __esModule, U as default };