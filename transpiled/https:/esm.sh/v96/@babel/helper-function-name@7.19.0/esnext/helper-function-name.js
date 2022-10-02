/* esm.sh - esbuild bundle(@babel/helper-function-name@7.19.0) esnext production */
import ___babel_types$ from "/transpiled/https://esm.sh/v96/@babel/types@7.19.3/esnext/types.js";
import * as ___babel_template$ from "/transpiled/https://esm.sh/v96/@babel/template@7.18.10/esnext/template.js";
var T = Object.create;
var c = Object.defineProperty;
var U = Object.getOwnPropertyDescriptor;
var C = Object.getOwnPropertyNames;
var D = Object.getPrototypeOf,
    b = Object.prototype.hasOwnProperty;

var N = (t => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(t, {
  get: (e, n) => (typeof require < "u" ? require : e)[n]
}) : t)(function (t) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});

var p = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);

var y = (t, e, n, r) => {
  if (e && typeof e == "object" || typeof e == "function") for (let i of C(e)) !b.call(t, i) && i !== n && c(t, i, {
    get: () => e[i],
    enumerable: !(r = U(e, i)) || r.enumerable
  });
  return t;
};

var E = (t, e, n) => (n = t != null ? T(D(t)) : {}, y(e || !t || !t.__esModule ? c(n, "default", {
  value: t,
  enumerable: !0
}) : n, t));

var F = p(o => {
  "use strict";

  Object.defineProperty(o, "__esModule", {
    value: !0
  });
  o.default = z;
  var _ = ___babel_template$,
      v = ___babel_types$,
      {
    NOT_LOCAL_BINDING: I,
    cloneNode: B,
    identifier: x,
    isAssignmentExpression: A,
    isAssignmentPattern: K,
    isFunction: d,
    isIdentifier: g,
    isLiteral: m,
    isNullLiteral: L,
    isObjectMethod: P,
    isObjectProperty: R,
    isRegExpLiteral: Y,
    isRestElement: h,
    isTemplateLiteral: M,
    isVariableDeclarator: j,
    toBindingIdentifierName: k
  } = v;

  function w(t) {
    let e = t.params.findIndex(n => K(n) || h(n));
    return e === -1 ? t.params.length : e;
  }

  var G = _.default.statement(`
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
      S = _.default.statement(`
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
      q = {
    "ReferencedIdentifier|BindingIdentifier"(t, e) {
      t.node.name !== e.name || t.scope.getBindingIdentifier(e.name) !== e.outerDeclar || (e.selfReference = !0, t.stop());
    }

  };

  function W(t) {
    return L(t) ? "null" : Y(t) ? `_${t.pattern}_${t.flags}` : M(t) ? t.quasis.map(e => e.value.raw).join("") : t.value !== void 0 ? t.value + "" : "";
  }

  function $(t, e, n, r) {
    if (t.selfReference) if (r.hasBinding(n.name) && !r.hasGlobal(n.name)) r.rename(n.name);else {
      if (!d(e)) return;
      let i = G;
      e.generator && (i = S);
      let s = i({
        FUNCTION: e,
        FUNCTION_ID: n,
        FUNCTION_KEY: r.generateUidIdentifier(n.name)
      }).expression,
          u = s.callee.body.body[0].params;

      for (let a = 0, f = w(e); a < f; a++) u.push(r.generateUidIdentifier("x"));

      return s;
    }
    e.id = n, r.getProgramParent().references[n.name] = !0;
  }

  function V(t, e, n) {
    let r = {
      selfAssignment: !1,
      selfReference: !1,
      outerDeclar: n.getBindingIdentifier(e),
      name: e
    },
        i = n.getOwnBinding(e);
    return i ? i.kind === "param" && (r.selfReference = !0) : (r.outerDeclar || n.hasGlobal(e)) && n.traverse(t, q, r), r;
  }

  function z({
    node: t,
    parent: e,
    scope: n,
    id: r
  }, i = !1, s = !1) {
    if (t.id) return;
    if ((R(e) || P(e, {
      kind: "method"
    })) && (!e.computed || m(e.key))) r = e.key;else if (j(e)) {
      if (r = e.id, g(r) && !i) {
        let l = n.parent.getBinding(r.name);

        if (l && l.constant && n.getBinding(r.name) === l) {
          t.id = B(r), t.id[I] = !0;
          return;
        }
      }
    } else if (A(e, {
      operator: "="
    })) r = e.left;else if (!r) return;
    let u;
    if (r && m(r) ? u = W(r) : r && g(r) && (u = r.name), u === void 0 || !s && d(t) && /[\uD800-\uDFFF]/.test(u)) return;
    u = k(u);
    let a = x(u);
    a[I] = !0;
    let f = V(t, u, n);
    return $(f, t, a, n) || t;
  }
});
var H = E(F()),
    Z = !0,
    {
  default: O,
  ...J
} = H,
    ee = O !== void 0 ? O : J;
export { Z as __esModule, ee as default };