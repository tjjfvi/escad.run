/* esm.sh - esbuild bundle(@babel/helper-function-name@7.17.9) esnext production */
import ___babel_types$ from "/transpiled/https://esm.sh/v85/@babel/types@7.18.4/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/types.js";
import * as ___babel_template$$ from "/transpiled/https://esm.sh/v85/@babel/template@7.16.7/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/template.js";

const ___babel_template$ = Object.assign({
  __esModule: true
}, ___babel_template$$);

var C = Object.create;
var o = Object.defineProperty;
var D = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var b = Object.getPrototypeOf,
    y = Object.prototype.hasOwnProperty;

var u = (t, e) => o(t, "name", {
  value: e,
  configurable: !0
}),
    g = (t => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(t, {
  get: (e, r) => (typeof require != "undefined" ? require : e)[r]
}) : t)(function (t) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});

var E = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);

var v = (t, e, r, n) => {
  if (e && typeof e == "object" || typeof e == "function") for (let i of p(e)) !y.call(t, i) && i !== r && o(t, i, {
    get: () => e[i],
    enumerable: !(n = D(e, i)) || n.enumerable
  });
  return t;
};

var I = (t, e, r) => (r = t != null ? C(b(t)) : {}, v(e || !t || !t.__esModule ? o(r, "default", {
  value: t,
  enumerable: !0
}) : r, t));

var N = E(c => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: !0
  });
  c.default = H;
  var O = ___babel_template$,
      B = ___babel_types$,
      {
    NOT_LOCAL_BINDING: m,
    cloneNode: x,
    identifier: A,
    isAssignmentExpression: K,
    isAssignmentPattern: L,
    isFunction: d,
    isIdentifier: _,
    isLiteral: F,
    isNullLiteral: P,
    isObjectMethod: R,
    isObjectProperty: Y,
    isRegExpLiteral: $,
    isRestElement: h,
    isTemplateLiteral: M,
    isVariableDeclarator: j,
    toBindingIdentifierName: k
  } = B;

  function G(t) {
    let e = t.params.findIndex(r => L(r) || h(r));
    return e === -1 ? t.params.length : e;
  }

  u(G, "getFunctionArity");
  var S = (0, O.default)(`
  (function (FUNCTION_KEY) {
    function FUNCTION_ID() {
      return FUNCTION_KEY.apply(this, arguments);
    }

    FUNCTION_ID.toString = function () {
      return FUNCTION_KEY.toString();
    }

    return FUNCTION_ID;
  })(FUNCTION)
`),
      q = (0, O.default)(`
  (function (FUNCTION_KEY) {
    function* FUNCTION_ID() {
      return yield* FUNCTION_KEY.apply(this, arguments);
    }

    FUNCTION_ID.toString = function () {
      return FUNCTION_KEY.toString();
    };

    return FUNCTION_ID;
  })(FUNCTION)
`),
      w = {
    "ReferencedIdentifier|BindingIdentifier"(t, e) {
      t.node.name !== e.name || t.scope.getBindingIdentifier(e.name) !== e.outerDeclar || (e.selfReference = !0, t.stop());
    }

  };

  function W(t) {
    return P(t) ? "null" : $(t) ? `_${t.pattern}_${t.flags}` : M(t) ? t.quasis.map(e => e.value.raw).join("") : t.value !== void 0 ? t.value + "" : "";
  }

  u(W, "getNameFromLiteralId");

  function V(t, e, r, n) {
    if (t.selfReference) if (n.hasBinding(r.name) && !n.hasGlobal(r.name)) n.rename(r.name);else {
      if (!d(e)) return;
      let i = S;
      e.generator && (i = q);
      let s = i({
        FUNCTION: e,
        FUNCTION_ID: r,
        FUNCTION_KEY: n.generateUidIdentifier(r.name)
      }).expression,
          f = s.callee.body.body[0].params;

      for (let l = 0, a = G(e); l < a; l++) f.push(n.generateUidIdentifier("x"));

      return s;
    }
    e.id = r, n.getProgramParent().references[r.name] = !0;
  }

  u(V, "wrap");

  function z(t, e, r) {
    let n = {
      selfAssignment: !1,
      selfReference: !1,
      outerDeclar: r.getBindingIdentifier(e),
      references: [],
      name: e
    },
        i = r.getOwnBinding(e);
    return i ? i.kind === "param" && (n.selfReference = !0) : (n.outerDeclar || r.hasGlobal(e)) && r.traverse(t, w, n), n;
  }

  u(z, "visit");

  function H({
    node: t,
    parent: e,
    scope: r,
    id: n
  }, i = !1, s = !1) {
    if (t.id) return;
    if ((Y(e) || R(e, {
      kind: "method"
    })) && (!e.computed || F(e.key))) n = e.key;else if (j(e)) {
      if (n = e.id, _(n) && !i) {
        let a = r.parent.getBinding(n.name);

        if (a && a.constant && r.getBinding(n.name) === a) {
          t.id = x(n), t.id[m] = !0;
          return;
        }
      }
    } else if (K(e, {
      operator: "="
    })) n = e.left;else if (!n) return;
    let f;
    if (n && F(n) ? f = W(n) : n && _(n) && (f = n.name), f === void 0 || !s && d(t) && /[\uD800-\uDFFF]/.test(f)) return;
    f = k(f), n = A(f), n[m] = !0;
    let l = z(t, f, r);
    return V(l, t, n, r) || t;
  }

  u(H, "_default");
});
var T = I(N()),
    U = I(N()),
    {
  __esModule: ee
} = U,
    {
  default: J,
  ...Q
} = U,
    te = T.default ?? J ?? Q;
export { ee as __esModule, te as default };