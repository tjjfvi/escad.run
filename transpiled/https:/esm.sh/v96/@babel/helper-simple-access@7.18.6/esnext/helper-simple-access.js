/* esm.sh - esbuild bundle(@babel/helper-simple-access@7.18.6) esnext production */
import ___babel_types$ from "/transpiled/https://esm.sh/v96/@babel/types@7.19.3/esnext/types.js";
var N = Object.create;
var m = Object.defineProperty;
var b = Object.getOwnPropertyDescriptor;
var y = Object.getOwnPropertyNames;
var A = Object.getPrototypeOf,
    B = Object.prototype.hasOwnProperty;

var O = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (n, i) => (typeof require < "u" ? require : n)[i]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var W = (e, n) => () => (n || e((n = {
  exports: {}
}).exports, n), n.exports);

var v = (e, n, i, t) => {
  if (n && typeof n == "object" || typeof n == "function") for (let o of y(n)) !B.call(e, o) && o !== i && m(e, o, {
    get: () => n[o],
    enumerable: !(t = b(n, o)) || t.enumerable
  });
  return e;
};

var I = (e, n, i) => (i = e != null ? N(A(e)) : {}, v(n || !e || !e.__esModule ? m(i, "default", {
  value: e,
  enumerable: !0
}) : i, e));

var x = W(g => {
  "use strict";

  Object.defineProperty(g, "__esModule", {
    value: !0
  });
  g.default = U;
  var L = ___babel_types$,
      {
    LOGICAL_OPERATORS: P,
    assignmentExpression: d,
    binaryExpression: f,
    cloneNode: u,
    identifier: c,
    logicalExpression: R,
    numericLiteral: a,
    sequenceExpression: S,
    unaryExpression: p
  } = L;

  function U(e, n, i = !0) {
    e.traverse(q, {
      scope: e.scope,
      bindingNames: n,
      seen: new WeakSet(),
      includeUpdateExpression: i
    });
  }

  var q = {
    UpdateExpression: {
      exit(e) {
        let {
          scope: n,
          bindingNames: i,
          includeUpdateExpression: t
        } = this;
        if (!t) return;
        let o = e.get("argument");
        if (!o.isIdentifier()) return;
        let r = o.node.name;
        if (!!i.has(r) && n.getBinding(r) === e.scope.getBinding(r)) if (e.parentPath.isExpressionStatement() && !e.isCompletionRecord()) {
          let s = e.node.operator == "++" ? "+=" : "-=";
          e.replaceWith(d(s, o.node, a(1)));
        } else if (e.node.prefix) e.replaceWith(d("=", c(r), f(e.node.operator[0], p("+", o.node), a(1))));else {
          let s = e.scope.generateUidIdentifierBasedOnNode(o.node, "old"),
              l = s.name;
          e.scope.push({
            id: s
          });
          let E = f(e.node.operator[0], c(l), a(1));
          e.replaceWith(S([d("=", c(l), p("+", o.node)), d("=", u(o.node), E), c(l)]));
        }
      }

    },
    AssignmentExpression: {
      exit(e) {
        let {
          scope: n,
          seen: i,
          bindingNames: t
        } = this;
        if (e.node.operator === "=" || i.has(e.node)) return;
        i.add(e.node);
        let o = e.get("left");
        if (!o.isIdentifier()) return;
        let r = o.node.name;
        if (!t.has(r) || n.getBinding(r) !== e.scope.getBinding(r)) return;
        let s = e.node.operator.slice(0, -1);
        P.includes(s) ? e.replaceWith(R(s, e.node.left, d("=", u(e.node.left), e.node.right))) : (e.node.right = f(s, u(e.node.left), e.node.right), e.node.operator = "=");
      }

    }
  };
});
var C = I(x()),
    w = !0,
    {
  default: _,
  ...M
} = C,
    G = _ !== void 0 ? _ : M;
export { w as __esModule, G as default };