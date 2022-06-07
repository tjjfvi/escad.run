/* esm.sh - esbuild bundle(@babel/helper-simple-access@7.18.2) esnext production */
import ___babel_types$ from "/transpiled/https://esm.sh/v85/@babel/types@7.18.4/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/types.js";
var A = Object.create;
var f = Object.defineProperty;
var B = Object.getOwnPropertyDescriptor;
var O = Object.getOwnPropertyNames;
var W = Object.getPrototypeOf,
    v = Object.prototype.hasOwnProperty;

var x = (e, n) => f(e, "name", {
  value: n,
  configurable: !0
}),
    I = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (n, r) => (typeof require != "undefined" ? require : n)[r]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var $ = (e, n) => () => (n || e((n = {
  exports: {}
}).exports, n), n.exports);

var L = (e, n, r, t) => {
  if (n && typeof n == "object" || typeof n == "function") for (let o of O(n)) !v.call(e, o) && o !== r && f(e, o, {
    get: () => n[o],
    enumerable: !(t = B(n, o)) || t.enumerable
  });
  return e;
};

var E = (e, n, r) => (r = e != null ? A(W(e)) : {}, L(n || !e || !e.__esModule ? f(r, "default", {
  value: e,
  enumerable: !0
}) : r, e));

var p = $(m => {
  "use strict";

  Object.defineProperty(m, "__esModule", {
    value: !0
  });
  m.default = q;
  var P = ___babel_types$,
      {
    LOGICAL_OPERATORS: R,
    assignmentExpression: d,
    binaryExpression: u,
    cloneNode: a,
    identifier: c,
    logicalExpression: S,
    numericLiteral: g,
    sequenceExpression: U,
    unaryExpression: N
  } = P;

  function q(e, n, r = !0) {
    e.traverse(C, {
      scope: e.scope,
      bindingNames: n,
      seen: new WeakSet(),
      includeUpdateExpression: r
    });
  }

  x(q, "simplifyAccess");
  var C = {
    UpdateExpression: {
      exit(e) {
        let {
          scope: n,
          bindingNames: r,
          includeUpdateExpression: t
        } = this;
        if (!t) return;
        let o = e.get("argument");
        if (!o.isIdentifier()) return;
        let i = o.node.name;
        if (!!r.has(i) && n.getBinding(i) === e.scope.getBinding(i)) if (e.parentPath.isExpressionStatement() && !e.isCompletionRecord()) {
          let s = e.node.operator == "++" ? "+=" : "-=";
          e.replaceWith(d(s, o.node, g(1)));
        } else if (e.node.prefix) e.replaceWith(d("=", c(i), u(e.node.operator[0], N("+", o.node), g(1))));else {
          let s = e.scope.generateUidIdentifierBasedOnNode(o.node, "old"),
              l = s.name;
          e.scope.push({
            id: s
          });
          let y = u(e.node.operator[0], c(l), g(1));
          e.replaceWith(U([d("=", c(l), N("+", o.node)), d("=", a(o.node), y), c(l)]));
        }
      }

    },
    AssignmentExpression: {
      exit(e) {
        let {
          scope: n,
          seen: r,
          bindingNames: t
        } = this;
        if (e.node.operator === "=" || r.has(e.node)) return;
        r.add(e.node);
        let o = e.get("left");
        if (!o.isIdentifier()) return;
        let i = o.node.name;
        if (!t.has(i) || n.getBinding(i) !== e.scope.getBinding(i)) return;
        let s = e.node.operator.slice(0, -1);
        R.includes(s) ? e.replaceWith(S(s, e.node.left, d("=", a(e.node.left), e.node.right))) : (e.node.right = u(s, a(e.node.left), e.node.right), e.node.operator = "=");
      }

    }
  };
});

var _ = E(p()),
    b = E(p()),
    {
  __esModule: G
} = b,
    {
  default: M,
  ...j
} = b,
    T = _.default ?? M ?? j;

export { G as __esModule, T as default };