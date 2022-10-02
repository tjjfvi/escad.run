/* esm.sh - esbuild bundle(@babel/helper-hoist-variables@7.18.6) esnext production */
import ___babel_types$ from "/transpiled/https://esm.sh/v96/@babel/types@7.19.3/esnext/types.js";
var f = Object.create;
var l = Object.defineProperty;
var u = Object.getOwnPropertyDescriptor;
var _ = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf,
    k = Object.prototype.hasOwnProperty;

var m = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (i, n) => (typeof require < "u" ? require : i)[n]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var v = (e, i) => () => (i || e((i = {
  exports: {}
}).exports, i), i.exports);

var b = (e, i, n, r) => {
  if (i && typeof i == "object" || typeof i == "function") for (let t of _(i)) !k.call(e, t) && t !== n && l(e, t, {
    get: () => i[t],
    enumerable: !(r = u(i, t)) || r.enumerable
  });
  return e;
};

var g = (e, i, n) => (n = e != null ? f(p(e)) : {}, b(i || !e || !e.__esModule ? l(n, "default", {
  value: e,
  enumerable: !0
}) : n, e));

var a = v(s => {
  "use strict";

  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  s.default = F;
  var x = ___babel_types$,
      {
    assignmentExpression: M,
    expressionStatement: P,
    identifier: j
  } = x,
      y = {
    Scope(e, i) {
      i.kind === "let" && e.skip();
    },

    FunctionParent(e) {
      e.skip();
    },

    VariableDeclaration(e, i) {
      if (i.kind && e.node.kind !== i.kind) return;
      let n = [],
          r = e.get("declarations"),
          t;

      for (let o of r) {
        t = o.node.id, o.node.init && n.push(P(M("=", o.node.id, o.node.init)));

        for (let d of Object.keys(o.getBindingIdentifiers())) i.emit(j(d), d, o.node.init !== null);
      }

      e.parentPath.isFor({
        left: e.node
      }) ? e.replaceWith(t) : e.replaceWithMultiple(n);
    }

  };

  function F(e, i, n = "var") {
    e.traverse(y, {
      kind: n,
      emit: i
    });
  }
});
var I = g(a()),
    W = !0,
    {
  default: c,
  ...O
} = I,
    q = c !== void 0 ? c : O;
export { W as __esModule, q as default };