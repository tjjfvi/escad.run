/* esm.sh - esbuild bundle(@babel/helper-split-export-declaration@7.18.6) esnext production */
import ___babel_types$ from "/transpiled/https://esm.sh/v96/@babel/types@7.19.3/esnext/types.js";
var v = Object.create;
var p = Object.defineProperty;
var w = Object.getOwnPropertyDescriptor;
var I = Object.getOwnPropertyNames;
var O = Object.getPrototypeOf,
    y = Object.prototype.hasOwnProperty;

var A = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (t, n) => (typeof require < "u" ? require : t)[n]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var D = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var j = (e, t, n, a) => {
  if (t && typeof t == "object" || typeof t == "function") for (let s of I(t)) !y.call(e, s) && s !== n && p(e, s, {
    get: () => t[s],
    enumerable: !(a = w(t, s)) || a.enumerable
  });
  return e;
};

var k = (e, t, n) => (n = e != null ? v(O(e)) : {}, j(t || !e || !e.__esModule ? p(n, "default", {
  value: e,
  enumerable: !0
}) : n, e));

var E = D(l => {
  "use strict";

  Object.defineProperty(l, "__esModule", {
    value: !0
  });
  l.default = M;
  var B = ___babel_types$,
      {
    cloneNode: o,
    exportNamedDeclaration: g,
    exportSpecifier: _,
    identifier: d,
    variableDeclaration: C,
    variableDeclarator: F
  } = B;

  function M(e) {
    if (!e.isExportDeclaration() || e.isExportAllDeclaration()) throw new Error("Only default and named export declarations can be split.");

    if (e.isExportDefaultDeclaration()) {
      let i = e.get("declaration"),
          c = i.isFunctionDeclaration() || i.isClassDeclaration(),
          f = i.isScope() ? i.scope.parent : i.scope,
          r = i.node.id,
          u = !1;
      r || (u = !0, r = f.generateUidIdentifier("default"), (c || i.isFunctionExpression() || i.isClassExpression()) && (i.node.id = o(r)));
      let m = c ? i.node : C("var", [F(o(r), i.node)]),
          h = g(null, [_(o(r), d("default"))]);
      return e.insertAfter(h), e.replaceWith(m), u && f.registerDeclaration(e), e;
    } else if (e.get("specifiers").length > 0) throw new Error("It doesn't make sense to split exported specifiers.");

    let t = e.get("declaration"),
        n = t.getOuterBindingIdentifiers(),
        a = Object.keys(n).map(i => _(d(i), d(i))),
        s = g(null, a);
    return e.insertAfter(s), e.replaceWith(t.node), e;
  }
});
var N = k(E()),
    x = !0,
    {
  default: b,
  ...S
} = N,
    P = b !== void 0 ? b : S;
export { x as __esModule, P as default };