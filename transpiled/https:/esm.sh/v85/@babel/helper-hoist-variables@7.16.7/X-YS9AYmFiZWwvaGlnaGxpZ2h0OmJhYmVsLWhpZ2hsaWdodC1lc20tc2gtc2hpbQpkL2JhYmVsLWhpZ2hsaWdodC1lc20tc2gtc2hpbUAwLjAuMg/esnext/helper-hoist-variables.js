/* esm.sh - esbuild bundle(@babel/helper-hoist-variables@7.16.7) esnext production */
import ___babel_types$ from "/transpiled/https://esm.sh/v85/@babel/types@7.18.4/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/types.js";
var m = Object.create;
var s = Object.defineProperty;
var k = Object.getOwnPropertyDescriptor;
var v = Object.getOwnPropertyNames;
var _ = Object.getPrototypeOf,
    b = Object.prototype.hasOwnProperty;

var f = (e, i) => s(e, "name", {
  value: i,
  configurable: !0
}),
    g = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (i, t) => (typeof require != "undefined" ? require : i)[t]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var x = (e, i) => () => (i || e((i = {
  exports: {}
}).exports, i), i.exports);

var $ = (e, i, t, r) => {
  if (i && typeof i == "object" || typeof i == "function") for (let n of v(i)) !b.call(e, n) && n !== t && s(e, n, {
    get: () => i[n],
    enumerable: !(r = k(i, n)) || r.enumerable
  });
  return e;
};

var c = (e, i, t) => (t = e != null ? m(_(e)) : {}, $(i || !e || !e.__esModule ? s(t, "default", {
  value: e,
  enumerable: !0
}) : t, e));

var l = x(d => {
  "use strict";

  Object.defineProperty(d, "__esModule", {
    value: !0
  });
  d.default = I;
  var M = ___babel_types$,
      {
    assignmentExpression: P,
    expressionStatement: j,
    identifier: y
  } = M,
      F = {
    Scope(e, i) {
      i.kind === "let" && e.skip();
    },

    FunctionParent(e) {
      e.skip();
    },

    VariableDeclaration(e, i) {
      if (i.kind && e.node.kind !== i.kind) return;
      let t = [],
          r = e.get("declarations"),
          n;

      for (let o of r) {
        n = o.node.id, o.node.init && t.push(j(P("=", o.node.id, o.node.init)));

        for (let a of Object.keys(o.getBindingIdentifiers())) i.emit(y(a), a, o.node.init !== null);
      }

      e.parentPath.isFor({
        left: e.node
      }) ? e.replaceWith(n) : e.replaceWithMultiple(t);
    }

  };

  function I(e, i, t = "var") {
    e.traverse(F, {
      kind: t,
      emit: i
    });
  }

  f(I, "hoistVariables");
});
var u = c(l()),
    p = c(l()),
    {
  __esModule: q
} = p,
    {
  default: O,
  ...S
} = p,
    B = u.default ?? O ?? S;
export { q as __esModule, B as default };