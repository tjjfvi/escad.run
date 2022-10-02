/* esm.sh - esbuild bundle(@babel/helper-member-expression-to-functions@7.18.9) esnext production */
import ___babel_types$ from "/transpiled/https://esm.sh/v96/@babel/types@7.19.3/esnext/types.js";
var z = Object.create;
var T = Object.defineProperty;
var K = Object.getOwnPropertyDescriptor;
var X = Object.getOwnPropertyNames;
var $ = Object.getPrototypeOf,
    H = Object.prototype.hasOwnProperty;

var J = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (i, n) => (typeof require < "u" ? require : i)[n]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var Q = (e, i) => () => (i || e((i = {
  exports: {}
}).exports, i), i.exports);

var V = (e, i, n, s) => {
  if (i && typeof i == "object" || typeof i == "function") for (let t of X(i)) !H.call(e, t) && t !== n && T(e, t, {
    get: () => i[t],
    enumerable: !(s = K(i, t)) || s.enumerable
  });
  return e;
};

var Y = (e, i, n) => (n = e != null ? z($(e)) : {}, V(i || !e || !e.__esModule ? T(n, "default", {
  value: e,
  enumerable: !0
}) : n, e));

var B = Q(U => {
  "use strict";

  Object.defineProperty(U, "__esModule", {
    value: !0
  });
  var Z = ___babel_types$;

  function m(e) {
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

  var ee = m(Z);

  function w(e) {
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
      if (t === "&&" || t === "||" || t === "??" && n === l) return w(s);
    }

    if (s.isSequenceExpression()) {
      let {
        expressions: t
      } = s.node;
      return t[t.length - 1] === n ? w(s) : !0;
    }

    return s.isConditional({
      test: n
    }) || s.isUnaryExpression({
      operator: "!"
    }) || s.isLoop({
      test: n
    });
  }

  var {
    LOGICAL_OPERATORS: te,
    arrowFunctionExpression: I,
    assignmentExpression: x,
    binaryExpression: g,
    booleanLiteral: ne,
    callExpression: y,
    cloneNode: p,
    conditionalExpression: ie,
    identifier: F,
    isMemberExpression: se,
    isOptionalCallExpression: re,
    isOptionalMemberExpression: q,
    isUpdateExpression: oe,
    logicalExpression: C,
    memberExpression: A,
    nullLiteral: j,
    optionalCallExpression: ae,
    optionalMemberExpression: le,
    sequenceExpression: N,
    updateExpression: G
  } = ee,
      b = class {
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

      return n.count--, n.count === 0 ? x("=", s, i) : s;
    }

    set(i, n, s) {
      return this._map.set(i, {
        count: s,
        value: n
      });
    }

  };

  function L(e, i) {
    let {
      node: n
    } = e;
    if (q(n)) return A(i, n.property, n.computed);

    if (e.isOptionalCallExpression()) {
      let s = e.get("callee");

      if (e.node.optional && s.isOptionalMemberExpression()) {
        let t = s.node.object,
            l = e.scope.maybeGenerateMemoised(t);
        return s.get("object").replaceWith(x("=", l, t)), y(A(i, F("call")), [l, ...e.node.arguments]);
      }

      return y(i, e.node.arguments);
    }

    return e.node;
  }

  function ce(e) {
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

  var pe = {
    memoise() {},

    handle(e, i) {
      let {
        node: n,
        parent: s,
        parentPath: t,
        scope: l
      } = e;

      if (e.isOptionalMemberExpression()) {
        if (ce(e)) return;
        let a = e.find(({
          node: r,
          parent: u
        }) => q(u) ? u.optional || u.object !== r : re(u) ? r !== e.node && u.optional || u.callee !== r : !0);

        if (l.path.isPattern()) {
          a.replaceWith(y(I([], a.node), []));
          return;
        }

        let d = w(a),
            c = a.parentPath;
        if (c.isUpdateExpression({
          argument: n
        }) || c.isAssignmentExpression({
          left: n
        })) throw e.buildCodeFrameError("can't handle assignment");
        let h = c.isUnaryExpression({
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

        let E = o.isOptionalMemberExpression() ? o.node.object : o.node.callee,
            M = l.maybeGenerateMemoised(E),
            P = M ?? E,
            k = t.isOptionalCallExpression({
          callee: n
        }),
            S = r => k,
            D = t.isCallExpression({
          callee: n
        });

        o.replaceWith(L(o, P)), S() ? s.optional ? t.replaceWith(this.optionalCall(e, s.arguments)) : t.replaceWith(this.call(e, s.arguments)) : D ? e.replaceWith(this.boundGet(e)) : e.replaceWith(this.get(e));
        let f = e.node;

        for (let r = e; r !== a;) {
          let u = r.parentPath;

          if (u === a && S() && s.optional) {
            f = u.node;
            break;
          }

          f = L(u, f), r = u;
        }

        let O,
            W = a.parentPath;

        if (se(f) && W.isOptionalCallExpression({
          callee: a.node,
          optional: !0
        })) {
          let {
            object: r
          } = f;
          O = e.scope.maybeGenerateMemoised(r), O && (f.object = x("=", O, r));
        }

        let v = a;
        h && (v = W, f = W.node);

        let _ = M ? x("=", p(P), p(E)) : p(P);

        if (d) {
          let r;
          i ? r = g("!=", _, j()) : r = C("&&", g("!==", _, j()), g("!==", p(P), l.buildUndefinedNode())), v.replaceWith(C("&&", r, f));
        } else {
          let r;
          i ? r = g("==", _, j()) : r = C("||", g("===", _, j()), g("===", p(P), l.buildUndefinedNode())), v.replaceWith(ie(r, h ? ne(!0) : l.buildUndefinedNode(), f));
        }

        if (O) {
          let r = W.node;
          W.replaceWith(ae(le(r.callee, F("call"), !1, !0), [p(O), ...r.arguments], !1));
        }

        return;
      }

      if (oe(s, {
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
        let c = l.generateUidIdentifierBasedOnNode(n);
        l.push({
          id: c
        });
        let h = [x("=", p(c), this.get(e))];

        if (d) {
          h.push(G(a, p(c), d));
          let o = N(h);
          t.replaceWith(this.set(e, o));
          return;
        } else {
          let o = l.generateUidIdentifierBasedOnNode(n);
          l.push({
            id: o
          }), h.push(x("=", p(o), G(a, p(c), d)), p(c));
          let E = N(h);
          t.replaceWith(N([this.set(e, E), p(o)]));
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
          let c = a.slice(0, -1);
          te.includes(c) ? (this.memoise(e, 1), t.replaceWith(C(c, this.get(e), this.set(e, d)))) : (this.memoise(e, 2), t.replaceWith(this.set(e, g(c, this.get(e), d))));
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
          t.replaceWith(y(I([], t.node), []));
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

  function ue(e, i, n) {
    e.traverse(i, Object.assign({}, pe, n, {
      memoiser: new b()
    }));
  }

  U.default = ue;
});
var de = Y(B()),
    xe = !0,
    {
  default: R,
  ...fe
} = de,
    Ee = R !== void 0 ? R : fe;
export { xe as __esModule, Ee as default };