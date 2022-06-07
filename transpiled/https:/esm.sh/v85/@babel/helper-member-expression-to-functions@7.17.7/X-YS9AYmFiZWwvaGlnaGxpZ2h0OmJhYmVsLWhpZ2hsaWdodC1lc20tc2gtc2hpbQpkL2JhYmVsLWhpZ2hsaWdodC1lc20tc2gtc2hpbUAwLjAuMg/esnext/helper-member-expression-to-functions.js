/* esm.sh - esbuild bundle(@babel/helper-member-expression-to-functions@7.17.7) esnext production */
import ___babel_types$ from "/transpiled/https://esm.sh/v85/@babel/types@7.18.4/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/types.js";
var H = Object.create;
var b = Object.defineProperty;
var J = Object.getOwnPropertyDescriptor;
var Q = Object.getOwnPropertyNames;
var V = Object.getPrototypeOf,
    Y = Object.prototype.hasOwnProperty;

var g = (e, i) => b(e, "name", {
  value: i,
  configurable: !0
}),
    Z = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (i, n) => (typeof require != "undefined" ? require : i)[n]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var m = (e, i) => () => (i || e((i = {
  exports: {}
}).exports, i), i.exports);

var ee = (e, i, n, s) => {
  if (i && typeof i == "object" || typeof i == "function") for (let t of Q(i)) !Y.call(e, t) && t !== n && b(e, t, {
    get: () => i[t],
    enumerable: !(s = J(i, t)) || s.enumerable
  });
  return e;
};

var A = (e, i, n) => (n = e != null ? H(V(e)) : {}, ee(i || !e || !e.__esModule ? b(n, "default", {
  value: e,
  enumerable: !0
}) : n, e));

var G = m(I => {
  "use strict";

  Object.defineProperty(I, "__esModule", {
    value: !0
  });
  var te = ___babel_types$;

  function ne(e) {
    if (e && e.__esModule) return e;
    var i = Object.create(null);
    return e && Object.keys(e).forEach(function (n) {
      if (n !== "default") {
        var s = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(i, n, s.get ? s : {
          enumerable: !0,
          get: function () {
            return e[n];
          }
        });
      }
    }), i.default = e, Object.freeze(i);
  }

  g(ne, "_interopNamespace");
  var ie = ne(te);

  function T(e) {
    let i = e,
        {
      node: n,
      parentPath: s
    } = i;

    if (s.isLogicalExpression()) {
      let {
        operator: t,
        right: l
      } = s.node;
      if (t === "&&" || t === "||" || t === "??" && n === l) return T(s);
    }

    if (s.isSequenceExpression()) {
      let {
        expressions: t
      } = s.node;
      return t[t.length - 1] === n ? T(s) : !0;
    }

    return s.isConditional({
      test: n
    }) || s.isUnaryExpression({
      operator: "!"
    }) || s.isLoop({
      test: n
    });
  }

  g(T, "willPathCastToBoolean");

  var {
    LOGICAL_OPERATORS: se,
    arrowFunctionExpression: F,
    assignmentExpression: E,
    binaryExpression: x,
    booleanLiteral: re,
    callExpression: v,
    cloneNode: c,
    conditionalExpression: oe,
    identifier: R,
    isMemberExpression: ae,
    isOptionalCallExpression: le,
    isOptionalMemberExpression: k,
    isUpdateExpression: pe,
    logicalExpression: j,
    memberExpression: $,
    nullLiteral: y,
    optionalCallExpression: ce,
    optionalMemberExpression: ue,
    sequenceExpression: S,
    updateExpression: q
  } = ie,
      _ = class {
    constructor() {
      this._map = void 0, this._map = new WeakMap();
    }

    has(i) {
      return this._map.has(i);
    }

    get(i) {
      if (!this.has(i)) return;

      let n = this._map.get(i),
          {
        value: s
      } = n;

      return n.count--, n.count === 0 ? E("=", s, i) : s;
    }

    set(i, n, s) {
      return this._map.set(i, {
        count: s,
        value: n
      });
    }

  };

  g(_, "AssignmentMemoiser");

  function B(e, i) {
    let {
      node: n
    } = e;
    if (k(n)) return $(i, n.property, n.computed);

    if (e.isOptionalCallExpression()) {
      let s = e.get("callee");

      if (e.node.optional && s.isOptionalMemberExpression()) {
        let {
          object: t
        } = s.node,
            l = e.scope.maybeGenerateMemoised(t) || t;
        return s.get("object").replaceWith(E("=", l, t)), v($(i, R("call")), [l, ...e.node.arguments]);
      }

      return v(i, e.node.arguments);
    }

    return e.node;
  }

  g(B, "toNonOptional");

  function de(e) {
    for (; e && !e.isProgram();) {
      let {
        parentPath: i,
        container: n,
        listKey: s
      } = e,
          t = i.node;

      if (s) {
        if (n !== t[s]) return !0;
      } else if (n !== t) return !0;

      e = i;
    }

    return !1;
  }

  g(de, "isInDetachedTree");
  var fe = {
    memoise() {},

    handle(e, i) {
      let {
        node: n,
        parent: s,
        parentPath: t,
        scope: l
      } = e;

      if (e.isOptionalMemberExpression()) {
        if (de(e)) return;
        let a = e.find(({
          node: r,
          parent: u
        }) => k(u) ? u.optional || u.object !== r : le(u) ? r !== e.node && u.optional || u.callee !== r : !0);

        if (l.path.isPattern()) {
          a.replaceWith(v(F([], a.node), []));
          return;
        }

        let d = T(a),
            p = a.parentPath;
        if (p.isUpdateExpression({
          argument: n
        }) || p.isAssignmentExpression({
          left: n
        })) throw e.buildCodeFrameError("can't handle assignment");
        let h = p.isUnaryExpression({
          operator: "delete"
        });
        if (h && a.isOptionalMemberExpression() && a.get("property").isPrivateName()) throw e.buildCodeFrameError("can't delete a private class element");
        let o = e;

        for (;;) {
          if (o.isOptionalMemberExpression()) {
            if (o.node.optional) break;
            o = o.get("object");
            continue;
          } else if (o.isOptionalCallExpression()) {
            if (o.node.optional) break;
            o = o.get("callee");
            continue;
          }

          throw new Error(`Internal error: unexpected ${o.node.type}`);
        }

        let M = o.isOptionalMemberExpression() ? "object" : "callee",
            N = o.node[M],
            w = l.maybeGenerateMemoised(N),
            P = w ?? N,
            K = t.isOptionalCallExpression({
          callee: n
        }),
            L = g(r => K, "isOptionalCall"),
            X = t.isCallExpression({
          callee: n
        });
        o.replaceWith(B(o, P)), L() ? s.optional ? t.replaceWith(this.optionalCall(e, s.arguments)) : t.replaceWith(this.call(e, s.arguments)) : X ? e.replaceWith(this.boundGet(e)) : e.replaceWith(this.get(e));
        let f = e.node;

        for (let r = e; r !== a;) {
          let u = r.parentPath;

          if (u === a && L() && s.optional) {
            f = u.node;
            break;
          }

          f = B(u, f), r = u;
        }

        let O,
            W = a.parentPath;

        if (ae(f) && W.isOptionalCallExpression({
          callee: a.node,
          optional: !0
        })) {
          let {
            object: r
          } = f;
          O = e.scope.maybeGenerateMemoised(r), O && (f.object = E("=", O, r));
        }

        let U = a;
        h && (U = W, f = W.node);
        let C = w ? E("=", c(P), c(N)) : c(P);

        if (d) {
          let r;
          i ? r = x("!=", C, y()) : r = j("&&", x("!==", C, y()), x("!==", c(P), l.buildUndefinedNode())), U.replaceWith(j("&&", r, f));
        } else {
          let r;
          i ? r = x("==", C, y()) : r = j("||", x("===", C, y()), x("===", c(P), l.buildUndefinedNode())), U.replaceWith(oe(r, h ? re(!0) : l.buildUndefinedNode(), f));
        }

        if (O) {
          let r = W.node;
          W.replaceWith(ce(ue(r.callee, R("call"), !1, !0), [c(O), ...r.arguments], !1));
        }

        return;
      }

      if (pe(s, {
        argument: n
      })) {
        if (this.simpleSet) {
          e.replaceWith(this.simpleSet(e));
          return;
        }

        let {
          operator: a,
          prefix: d
        } = s;
        this.memoise(e, 2);
        let p = l.generateUidIdentifierBasedOnNode(n);
        l.push({
          id: p
        });
        let h = [E("=", c(p), this.get(e))];

        if (d) {
          h.push(q(a, c(p), d));
          let o = S(h);
          t.replaceWith(this.set(e, o));
          return;
        } else {
          let o = l.generateUidIdentifierBasedOnNode(n);
          l.push({
            id: o
          }), h.push(E("=", c(o), q(a, c(p), d)), c(p));
          let M = S(h);
          t.replaceWith(S([this.set(e, M), c(o)]));
          return;
        }
      }

      if (t.isAssignmentExpression({
        left: n
      })) {
        if (this.simpleSet) {
          e.replaceWith(this.simpleSet(e));
          return;
        }

        let {
          operator: a,
          right: d
        } = t.node;
        if (a === "=") t.replaceWith(this.set(e, d));else {
          let p = a.slice(0, -1);
          se.includes(p) ? (this.memoise(e, 1), t.replaceWith(j(p, this.get(e), this.set(e, d)))) : (this.memoise(e, 2), t.replaceWith(this.set(e, x(p, this.get(e), d))));
        }
        return;
      }

      if (t.isCallExpression({
        callee: n
      })) {
        t.replaceWith(this.call(e, t.node.arguments));
        return;
      }

      if (t.isOptionalCallExpression({
        callee: n
      })) {
        if (l.path.isPattern()) {
          t.replaceWith(v(F([], t.node), []));
          return;
        }

        t.replaceWith(this.optionalCall(e, t.node.arguments));
        return;
      }

      if (t.isForXStatement({
        left: n
      }) || t.isObjectProperty({
        value: n
      }) && t.parentPath.isObjectPattern() || t.isAssignmentPattern({
        left: n
      }) && t.parentPath.isObjectProperty({
        value: s
      }) && t.parentPath.parentPath.isObjectPattern() || t.isArrayPattern() || t.isAssignmentPattern({
        left: n
      }) && t.parentPath.isArrayPattern() || t.isRestElement()) {
        e.replaceWith(this.destructureSet(e));
        return;
      }

      t.isTaggedTemplateExpression() ? e.replaceWith(this.boundGet(e)) : e.replaceWith(this.get(e));
    }

  };

  function he(e, i, n) {
    e.traverse(i, Object.assign({}, fe, n, {
      memoiser: new _()
    }));
  }

  g(he, "memberExpressionToFunctions");
  I.default = he;
});
var D = A(G()),
    z = A(G()),
    {
  __esModule: Oe
} = z,
    {
  default: ge,
  ...xe
} = z,
    We = D.default ?? ge ?? xe;
export { Oe as __esModule, We as default };