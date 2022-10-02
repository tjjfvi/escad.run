/* esm.sh - esbuild bundle(@babel/helper-create-class-features-plugin@7.19.0) esnext production */
import * as ___babel_helper_environment_visitor$ from "/transpiled/https://esm.sh/v96/@babel/helper-environment-visitor@7.18.9/esnext/helper-environment-visitor.js";
import * as ___babel_helper_split_export_declaration$ from "/transpiled/https://esm.sh/v96/@babel/helper-split-export-declaration@7.18.6/esnext/helper-split-export-declaration.js";
import * as ___babel_helper_function_name$ from "/transpiled/https://esm.sh/v96/@babel/helper-function-name@7.19.0/esnext/helper-function-name.js";
import ___babel_core$ from "/transpiled/https://esm.sh/v96/@babel/core@7.19.3/esnext/core.js";
import * as ___babel_helper_annotate_as_pure$ from "/transpiled/https://esm.sh/v96/@babel/helper-annotate-as-pure@7.18.6/esnext/helper-annotate-as-pure.js";
import * as ___babel_helper_optimise_call_expression$ from "/transpiled/https://esm.sh/v96/@babel/helper-optimise-call-expression@7.18.6/esnext/helper-optimise-call-expression.js";
import * as ___babel_helper_member_expression_to_functions$ from "/transpiled/https://esm.sh/v96/@babel/helper-member-expression-to-functions@7.18.9/esnext/helper-member-expression-to-functions.js";
import * as ___babel_helper_replace_supers$ from "/transpiled/https://esm.sh/v96/@babel/helper-replace-supers@7.19.1/esnext/helper-replace-supers.js";
var _e = Object.create;
var ce = Object.defineProperty;
var Fe = Object.getOwnPropertyDescriptor;
var je = Object.getOwnPropertyNames;
var De = Object.getPrototypeOf,
    Oe = Object.prototype.hasOwnProperty;

var E = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (t, r) => (typeof require < "u" ? require : t)[r]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var B = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var Be = (e, t, r, s) => {
  if (t && typeof t == "object" || typeof t == "function") for (let n of je(t)) !Oe.call(e, n) && n !== r && ce(e, n, {
    get: () => t[n],
    enumerable: !(s = Fe(t, n)) || s.enumerable
  });
  return e;
};

var Me = (e, t, r) => (r = e != null ? _e(De(e)) : {}, Be(t || !e || !e.__esModule ? ce(r, "default", {
  value: e,
  enumerable: !0
}) : r, e));

var se = B(te => {
  "use strict";

  Object.defineProperty(te, "__esModule", {
    value: !0
  });
  te.assertFieldTransformed = Re;

  function Re(e) {
    if (e.node.declare) throw e.buildCodeFrameError(`TypeScript 'declare' fields must first be transformed by @babel/plugin-transform-typescript.
If you have already enabled that plugin (or '@babel/preset-typescript'), make sure that it runs before any plugin related to additional class features:
 - @babel/plugin-proposal-class-properties
 - @babel/plugin-proposal-private-methods
 - @babel/plugin-proposal-decorators`);
  }
});
var ve = B(M => {
  "use strict";

  Object.defineProperty(M, "__esModule", {
    value: !0
  });
  M.buildFieldsInitNodes = nt;
  M.buildPrivateNamesMap = qe;
  M.buildPrivateNamesNodes = He;
  M.transformPrivateNamesUsage = Ge;
  var i = ___babel_core$,
      Ue = ___babel_helper_replace_supers$,
      me = ___babel_helper_environment_visitor$,
      Ae = ___babel_helper_member_expression_to_functions$,
      ue = ___babel_helper_optimise_call_expression$,
      Le = ___babel_helper_annotate_as_pure$,
      Te = se();

  function qe(e) {
    let t = new Map();

    for (let r of e) if (r.isPrivate()) {
      let {
        name: s
      } = r.node.key.id,
          n = t.has(s) ? t.get(s) : {
        id: r.scope.generateUidIdentifier(s),
        static: r.node.static,
        method: !r.isProperty()
      };
      r.isClassPrivateMethod() && (r.node.kind === "get" ? n.getId = r.scope.generateUidIdentifier(`get_${s}`) : r.node.kind === "set" ? n.setId = r.scope.generateUidIdentifier(`set_${s}`) : r.node.kind === "method" && (n.methodId = r.scope.generateUidIdentifier(s))), t.set(s, n);
    }

    return t;
  }

  function He(e, t, r) {
    let s = [];

    for (let [n, o] of e) {
      let {
        static: a,
        method: l,
        getId: u,
        setId: p
      } = o,
          d = u || p,
          f = i.types.cloneNode(o.id),
          y;
      t ? y = i.types.callExpression(r.addHelper("classPrivateFieldLooseKey"), [i.types.stringLiteral(n)]) : a || (y = i.types.newExpression(i.types.identifier(!l || d ? "WeakMap" : "WeakSet"), [])), y && ((0, Le.default)(y), s.push(i.template.statement.ast`var ${f} = ${y}`));
    }

    return s;
  }

  function ge(e) {
    let t = Object.assign({}, e, {
      Class(s) {
        let {
          privateNamesMap: n
        } = this,
            o = s.get("body.body"),
            a = new Map(n),
            l = [];

        for (let u of o) {
          if (!u.isPrivate()) continue;
          let {
            name: p
          } = u.node.key.id;
          a.delete(p), l.push(p);
        }

        !l.length || (s.get("body").traverse(r, Object.assign({}, this, {
          redeclared: l
        })), s.traverse(t, Object.assign({}, this, {
          privateNamesMap: a
        })), s.skipKey("body"));
      }

    }),
        r = i.traverse.visitors.merge([Object.assign({}, e), me.default]);
    return t;
  }

  var Ke = ge({
    PrivateName(e, {
      noDocumentAll: t
    }) {
      let {
        privateNamesMap: r,
        redeclared: s
      } = this,
          {
        node: n,
        parentPath: o
      } = e;
      if (!o.isMemberExpression({
        property: n
      }) && !o.isOptionalMemberExpression({
        property: n
      })) return;
      let {
        name: a
      } = n.id;
      !r.has(a) || s && s.includes(a) || this.handle(o, t);
    }

  });

  function he(e, t, r) {
    for (; (s = t) != null && s.hasBinding(e) && !t.bindingIdentifierEquals(e, r);) {
      var s;
      t.rename(e), t = t.parent;
    }
  }

  var ze = ge({
    BinaryExpression(e) {
      let {
        operator: t,
        left: r,
        right: s
      } = e.node;
      if (t !== "in" || !i.types.isPrivateName(r)) return;
      let {
        privateFieldsAsProperties: n,
        privateNamesMap: o,
        redeclared: a
      } = this,
          {
        name: l
      } = r.id;
      if (!o.has(l) || a && a.includes(l)) return;

      if (he(this.classRef.name, e.scope, this.innerBinding), n) {
        let {
          id: d
        } = o.get(l);
        e.replaceWith(i.template.expression.ast`
        Object.prototype.hasOwnProperty.call(${s}, ${i.types.cloneNode(d)})
      `);
        return;
      }

      let {
        id: u,
        static: p
      } = o.get(l);

      if (p) {
        e.replaceWith(i.template.expression.ast`${s} === ${this.classRef}`);
        return;
      }

      e.replaceWith(i.template.expression.ast`${i.types.cloneNode(u)}.has(${s})`);
    }

  }),
      Ve = {
    memoise(e, t) {
      let {
        scope: r
      } = e,
          {
        object: s
      } = e.node,
          n = r.maybeGenerateMemoised(s);
      !n || this.memoiser.set(s, n, t);
    },

    receiver(e) {
      let {
        object: t
      } = e.node;
      return this.memoiser.has(t) ? i.types.cloneNode(this.memoiser.get(t)) : i.types.cloneNode(t);
    },

    get(e) {
      let {
        classRef: t,
        privateNamesMap: r,
        file: s,
        innerBinding: n
      } = this,
          {
        name: o
      } = e.node.property.id,
          {
        id: a,
        static: l,
        method: u,
        methodId: p,
        getId: d,
        setId: f
      } = r.get(o),
          y = d || f;

      if (l) {
        let v = u && !y ? "classStaticPrivateMethodGet" : "classStaticPrivateFieldSpecGet";
        return he(t.name, e.scope, n), i.types.callExpression(s.addHelper(v), [this.receiver(e), i.types.cloneNode(t), i.types.cloneNode(a)]);
      }

      if (u) {
        if (y) {
          if (!d && f) {
            if (s.availableHelper("writeOnlyError")) return i.types.sequenceExpression([this.receiver(e), i.types.callExpression(s.addHelper("writeOnlyError"), [i.types.stringLiteral(`#${o}`)])]);
            console.warn("@babel/helpers is outdated, update it to silence this warning.");
          }

          return i.types.callExpression(s.addHelper("classPrivateFieldGet"), [this.receiver(e), i.types.cloneNode(a)]);
        }

        return i.types.callExpression(s.addHelper("classPrivateMethodGet"), [this.receiver(e), i.types.cloneNode(a), i.types.cloneNode(p)]);
      }

      return i.types.callExpression(s.addHelper("classPrivateFieldGet"), [this.receiver(e), i.types.cloneNode(a)]);
    },

    boundGet(e) {
      return this.memoise(e, 1), i.types.callExpression(i.types.memberExpression(this.get(e), i.types.identifier("bind")), [this.receiver(e)]);
    },

    set(e, t) {
      let {
        classRef: r,
        privateNamesMap: s,
        file: n
      } = this,
          {
        name: o
      } = e.node.property.id,
          {
        id: a,
        static: l,
        method: u,
        setId: p,
        getId: d
      } = s.get(o),
          f = d || p;

      if (l) {
        let y = u && !f ? "classStaticPrivateMethodSet" : "classStaticPrivateFieldSpecSet";
        return i.types.callExpression(n.addHelper(y), [this.receiver(e), i.types.cloneNode(r), i.types.cloneNode(a), t]);
      }

      return u ? p ? i.types.callExpression(n.addHelper("classPrivateFieldSet"), [this.receiver(e), i.types.cloneNode(a), t]) : i.types.sequenceExpression([this.receiver(e), t, i.types.callExpression(n.addHelper("readOnlyError"), [i.types.stringLiteral(`#${o}`)])]) : i.types.callExpression(n.addHelper("classPrivateFieldSet"), [this.receiver(e), i.types.cloneNode(a), t]);
    },

    destructureSet(e) {
      let {
        classRef: t,
        privateNamesMap: r,
        file: s
      } = this,
          {
        name: n
      } = e.node.property.id,
          {
        id: o,
        static: a
      } = r.get(n);

      if (a) {
        try {
          var l = s.addHelper("classStaticPrivateFieldDestructureSet");
        } catch {
          throw new Error("Babel can not transpile `[C.#p] = [0]` with @babel/helpers < 7.13.10, \nplease update @babel/helpers to the latest version.");
        }

        return i.types.memberExpression(i.types.callExpression(l, [this.receiver(e), i.types.cloneNode(t), i.types.cloneNode(o)]), i.types.identifier("value"));
      }

      return i.types.memberExpression(i.types.callExpression(s.addHelper("classPrivateFieldDestructureSet"), [this.receiver(e), i.types.cloneNode(o)]), i.types.identifier("value"));
    },

    call(e, t) {
      return this.memoise(e, 1), (0, ue.default)(this.get(e), this.receiver(e), t, !1);
    },

    optionalCall(e, t) {
      return this.memoise(e, 1), (0, ue.default)(this.get(e), this.receiver(e), t, !0);
    }

  },
      We = {
    get(e) {
      let {
        privateNamesMap: t,
        file: r
      } = this,
          {
        object: s
      } = e.node,
          {
        name: n
      } = e.node.property.id;
      return i.template.expression`BASE(REF, PROP)[PROP]`({
        BASE: r.addHelper("classPrivateFieldLooseBase"),
        REF: i.types.cloneNode(s),
        PROP: i.types.cloneNode(t.get(n).id)
      });
    },

    set() {
      throw new Error("private name handler with loose = true don't need set()");
    },

    boundGet(e) {
      return i.types.callExpression(i.types.memberExpression(this.get(e), i.types.identifier("bind")), [i.types.cloneNode(e.node.object)]);
    },

    simpleSet(e) {
      return this.get(e);
    },

    destructureSet(e) {
      return this.get(e);
    },

    call(e, t) {
      return i.types.callExpression(this.get(e), t);
    },

    optionalCall(e, t) {
      return i.types.optionalCallExpression(this.get(e), t, !0);
    }

  };

  function Ge(e, t, r, {
    privateFieldsAsProperties: s,
    noDocumentAll: n,
    innerBinding: o
  }, a) {
    if (!r.size) return;
    let l = t.get("body"),
        u = s ? We : Ve;
    (0, Ae.default)(l, Ke, Object.assign({
      privateNamesMap: r,
      classRef: e,
      file: a
    }, u, {
      noDocumentAll: n,
      innerBinding: o
    })), l.traverse(ze, {
      privateNamesMap: r,
      classRef: e,
      file: a,
      privateFieldsAsProperties: s,
      innerBinding: o
    });
  }

  function pe(e, t, r) {
    let {
      id: s
    } = r.get(t.node.key.id.name),
        n = t.node.value || t.scope.buildUndefinedNode();
    return i.template.statement.ast`
    Object.defineProperty(${e}, ${i.types.cloneNode(s)}, {
      // configurable is false by default
      // enumerable is false by default
      writable: true,
      value: ${n}
    });
  `;
  }

  function Ze(e, t, r, s) {
    let {
      id: n
    } = r.get(t.node.key.id.name),
        o = t.node.value || t.scope.buildUndefinedNode();
    if (!s.availableHelper("classPrivateFieldInitSpec")) return i.template.statement.ast`${i.types.cloneNode(n)}.set(${e}, {
        // configurable is always false for private elements
        // enumerable is always false for private elements
        writable: true,
        value: ${o},
      })`;
    let a = s.addHelper("classPrivateFieldInitSpec");
    return i.template.statement.ast`${a}(
    ${i.types.thisExpression()},
    ${i.types.cloneNode(n)},
    {
      writable: true,
      value: ${o}
    },
  )`;
  }

  function fe(e, t) {
    let r = t.get(e.node.key.id.name),
        {
      id: s,
      getId: n,
      setId: o,
      initAdded: a
    } = r,
        l = n || o;
    if (!e.isProperty() && (a || !l)) return;
    if (l) return t.set(e.node.key.id.name, Object.assign({}, r, {
      initAdded: !0
    })), i.template.statement.ast`
      var ${i.types.cloneNode(s)} = {
        // configurable is false by default
        // enumerable is false by default
        // writable is false by default
        get: ${n ? n.name : e.scope.buildUndefinedNode()},
        set: ${o ? o.name : e.scope.buildUndefinedNode()}
      }
    `;
    let u = e.node.value || e.scope.buildUndefinedNode();
    return i.template.statement.ast`
    var ${i.types.cloneNode(s)} = {
      // configurable is false by default
      // enumerable is false by default
      writable: true,
      value: ${u}
    };
  `;
  }

  function Ye(e, t, r) {
    let s = r.get(t.node.key.id.name),
        {
      methodId: n,
      id: o,
      getId: a,
      setId: l,
      initAdded: u
    } = s;
    if (u) return;
    if (n) return i.template.statement.ast`
        Object.defineProperty(${e}, ${o}, {
          // configurable is false by default
          // enumerable is false by default
          // writable is false by default
          value: ${n.name}
        });
      `;
    if (a || l) return r.set(t.node.key.id.name, Object.assign({}, s, {
      initAdded: !0
    })), i.template.statement.ast`
      Object.defineProperty(${e}, ${o}, {
        // configurable is false by default
        // enumerable is false by default
        // writable is false by default
        get: ${a ? a.name : t.scope.buildUndefinedNode()},
        set: ${l ? l.name : t.scope.buildUndefinedNode()}
      });
    `;
  }

  function Je(e, t, r, s) {
    let n = r.get(t.node.key.id.name),
        {
      getId: o,
      setId: a,
      initAdded: l
    } = n;
    return l ? void 0 : o || a ? Qe(e, t, r, s) : Xe(e, t, r, s);
  }

  function Qe(e, t, r, s) {
    let n = r.get(t.node.key.id.name),
        {
      id: o,
      getId: a,
      setId: l
    } = n;
    if (r.set(t.node.key.id.name, Object.assign({}, n, {
      initAdded: !0
    })), !s.availableHelper("classPrivateFieldInitSpec")) return i.template.statement.ast`
      ${o}.set(${e}, {
        get: ${a ? a.name : t.scope.buildUndefinedNode()},
        set: ${l ? l.name : t.scope.buildUndefinedNode()}
      });
    `;
    let u = s.addHelper("classPrivateFieldInitSpec");
    return i.template.statement.ast`${u}(
    ${i.types.thisExpression()},
    ${i.types.cloneNode(o)},
    {
      get: ${a ? a.name : t.scope.buildUndefinedNode()},
      set: ${l ? l.name : t.scope.buildUndefinedNode()}
    },
  )`;
  }

  function Xe(e, t, r, s) {
    let n = r.get(t.node.key.id.name),
        {
      id: o
    } = n;
    if (!s.availableHelper("classPrivateMethodInitSpec")) return i.template.statement.ast`${o}.add(${e})`;
    let a = s.addHelper("classPrivateMethodInitSpec");
    return i.template.statement.ast`${a}(
    ${i.types.thisExpression()},
    ${i.types.cloneNode(o)}
  )`;
  }

  function ye(e, t) {
    let {
      key: r,
      computed: s
    } = t.node,
        n = t.node.value || t.scope.buildUndefinedNode();
    return i.types.expressionStatement(i.types.assignmentExpression("=", i.types.memberExpression(e, r, s || i.types.isLiteral(r)), n));
  }

  function be(e, t, r) {
    let {
      key: s,
      computed: n
    } = t.node,
        o = t.node.value || t.scope.buildUndefinedNode();
    return i.types.expressionStatement(i.types.callExpression(r.addHelper("defineProperty"), [e, n || i.types.isLiteral(s) ? s : i.types.stringLiteral(s.name), o]));
  }

  function et(e, t, r, s) {
    let n = s.get(t.node.key.id.name),
        {
      id: o,
      methodId: a,
      getId: l,
      setId: u,
      initAdded: p
    } = n;
    return p ? void 0 : l || u ? (s.set(t.node.key.id.name, Object.assign({}, n, {
      initAdded: !0
    })), i.template.statement.ast`
      Object.defineProperty(${e}, ${o}, {
        // configurable is false by default
        // enumerable is false by default
        // writable is false by default
        get: ${l ? l.name : t.scope.buildUndefinedNode()},
        set: ${u ? u.name : t.scope.buildUndefinedNode()}
      })
    `) : i.template.statement.ast`
    Object.defineProperty(${e}, ${o}, {
      // configurable is false by default
      // enumerable is false by default
      // writable is false by default
      value: ${a.name}
    });
  `;
  }

  function W(e, t, r = !1) {
    let s = t.get(e.node.key.id.name),
        {
      id: n,
      methodId: o,
      getId: a,
      setId: l,
      getterDeclared: u,
      setterDeclared: p,
      static: d
    } = s,
        {
      params: f,
      body: y,
      generator: v,
      async: x
    } = e.node,
        c = a && !u && f.length === 0,
        h = l && !p && f.length > 0,
        N = o;
    return c ? (t.set(e.node.key.id.name, Object.assign({}, s, {
      getterDeclared: !0
    })), N = a) : h ? (t.set(e.node.key.id.name, Object.assign({}, s, {
      setterDeclared: !0
    })), N = l) : d && !r && (N = n), i.types.functionDeclaration(i.types.cloneNode(N), f, y, v, x);
  }

  var tt = i.traverse.visitors.merge([{
    ThisExpression(e, t) {
      t.needsClassRef = !0, e.replaceWith(i.types.cloneNode(t.classRef));
    },

    MetaProperty(e) {
      let t = e.get("meta"),
          r = e.get("property"),
          {
        scope: s
      } = e;
      t.isIdentifier({
        name: "new"
      }) && r.isIdentifier({
        name: "target"
      }) && e.replaceWith(s.buildUndefinedNode());
    }

  }, me.default]),
      st = {
    ReferencedIdentifier(e, t) {
      e.scope.bindingIdentifierEquals(e.node.name, t.innerBinding) && (t.needsClassRef = !0, e.node.name = t.classRef.name);
    }

  };

  function it(e, t, r, s, n, o, a) {
    var l;
    let u = {
      classRef: t,
      needsClassRef: !1,
      innerBinding: a
    };
    return new Ue.default({
      methodPath: e,
      constantSuper: o,
      file: s,
      refToPreserve: t,
      getSuperRef: r,

      getObjectRef() {
        return u.needsClassRef = !0, i.types.isStaticBlock != null && i.types.isStaticBlock(e.node) || e.node.static ? t : i.types.memberExpression(t, i.types.identifier("prototype"));
      }

    }).replace(), (n || e.isProperty()) && e.traverse(tt, u), a != null && (l = u.classRef) != null && l.name && u.classRef.name !== a?.name && e.traverse(st, u), u.needsClassRef;
  }

  function rt({
    key: e,
    computed: t
  }) {
    return e.type === "Identifier" ? !t && (e.name === "name" || e.name === "length") : e.type === "StringLiteral" ? e.value === "name" || e.value === "length" : !1;
  }

  function nt(e, t, r, s, n, o, a, l, u) {
    let p = !1,
        d,
        f = [],
        y = [],
        v = [],
        x = i.types.isIdentifier(t) ? () => t : () => {
      var c;
      return (c = d) != null || (d = r[0].scope.generateUidIdentifierBasedOnNode(t)), d;
    };

    for (let c of r) {
      c.isClassProperty() && Te.assertFieldTransformed(c);
      let h = !(i.types.isStaticBlock != null && i.types.isStaticBlock(c.node)) && c.node.static,
          N = !h,
          m = c.isPrivate(),
          O = !m,
          S = c.isProperty(),
          k = !S,
          F = c.isStaticBlock == null ? void 0 : c.isStaticBlock();

      if (h || k && m || F) {
        let _ = it(c, e, x, n, F, l, u);

        p = p || _;
      }

      switch (!0) {
        case F:
          {
            let _ = c.node.body;
            _.length === 1 && i.types.isExpressionStatement(_[0]) ? f.push(_[0]) : f.push(i.template.statement.ast`(() => { ${_} })()`);
            break;
          }

        case h && m && S && a:
          p = !0, f.push(pe(i.types.cloneNode(e), c, s));
          break;

        case h && m && S && !a:
          p = !0, f.push(fe(c, s));
          break;

        case h && O && S && o:
          if (!rt(c.node)) {
            p = !0, f.push(ye(i.types.cloneNode(e), c));
            break;
          }

        case h && O && S && !o:
          p = !0, f.push(be(i.types.cloneNode(e), c, n));
          break;

        case N && m && S && a:
          y.push(pe(i.types.thisExpression(), c, s));
          break;

        case N && m && S && !a:
          y.push(Ze(i.types.thisExpression(), c, s, n));
          break;

        case N && m && k && a:
          y.unshift(Ye(i.types.thisExpression(), c, s)), v.push(W(c, s, a));
          break;

        case N && m && k && !a:
          y.unshift(Je(i.types.thisExpression(), c, s, n)), v.push(W(c, s, a));
          break;

        case h && m && k && !a:
          p = !0, f.unshift(fe(c, s)), v.push(W(c, s, a));
          break;

        case h && m && k && a:
          p = !0, f.unshift(et(i.types.cloneNode(e), c, n, s)), v.push(W(c, s, a));
          break;

        case N && O && S && o:
          y.push(ye(i.types.thisExpression(), c));
          break;

        case N && O && S && !o:
          y.push(be(i.types.thisExpression(), c, n));
          break;

        default:
          throw new Error("Unreachable.");
      }
    }

    return {
      staticNodes: f.filter(Boolean),
      instanceNodes: y.filter(Boolean),
      pureStaticNodes: v.filter(Boolean),

      wrapClass(c) {
        for (let h of r) h.remove();

        return d && (c.scope.push({
          id: i.types.cloneNode(d)
        }), c.set("superClass", i.types.assignmentExpression("=", d, c.node.superClass))), p && (c.isClassExpression() ? (c.scope.push({
          id: e
        }), c.replaceWith(i.types.assignmentExpression("=", i.types.cloneNode(e), c.node))) : c.node.id || (c.node.id = e)), c;
      }

    };
  }
});
var re = B(L => {
  "use strict";

  Object.defineProperty(L, "__esModule", {
    value: !0
  });
  L.buildDecoratedClass = ft;
  L.hasDecorators = lt;
  L.hasOwnDecorators = ie;
  var b = ___babel_core$,
      ot = ___babel_helper_replace_supers$,
      at = ___babel_helper_function_name$;

  function ie(e) {
    return !!(e.decorators && e.decorators.length);
  }

  function lt(e) {
    return ie(e) || e.body.body.some(ie);
  }

  function R(e, t) {
    return t ? b.types.objectProperty(b.types.identifier(e), t) : null;
  }

  function dt(e, t) {
    return b.types.objectMethod("method", b.types.identifier(e), [], b.types.blockStatement(t));
  }

  function Pe(e) {
    let t;
    return e.decorators && e.decorators.length > 0 && (t = b.types.arrayExpression(e.decorators.map(r => r.expression))), e.decorators = void 0, t;
  }

  function ct(e) {
    return e.computed ? e.key : b.types.isIdentifier(e.key) ? b.types.stringLiteral(e.key.name) : b.types.stringLiteral(String(e.key.value));
  }

  function ut(e, t, r, s) {
    let n = s.isClassMethod();
    if (s.isPrivate()) throw s.buildCodeFrameError(`Private ${n ? "methods" : "fields"} in decorated classes are not supported yet.`);
    if (s.node.type === "ClassAccessorProperty") throw s.buildCodeFrameError('Accessor properties are not supported in 2018-09 decorator transform, please specify { "version": "2021-12" } instead.');
    if (s.node.type === "StaticBlock") throw s.buildCodeFrameError('Static blocks are not supported in 2018-09 decorator transform, please specify { "version": "2021-12" } instead.');
    let {
      node: o,
      scope: a
    } = s;
    s.isTSDeclareMethod() || new ot.default({
      methodPath: s,
      objectRef: t,
      superRef: r,
      file: e,
      refToPreserve: t
    }).replace();
    let l = [R("kind", b.types.stringLiteral(b.types.isClassMethod(o) ? o.kind : "field")), R("decorators", Pe(o)), R("static", o.static && b.types.booleanLiteral(!0)), R("key", ct(o))].filter(Boolean);

    if (b.types.isClassMethod(o)) {
      let u = o.computed ? null : o.key,
          p = b.types.toExpression(o);
      l.push(R("value", (0, at.default)({
        node: p,
        id: u,
        scope: a
      }) || p));
    } else b.types.isClassProperty(o) && o.value ? l.push(dt("value", b.template.statements.ast`return ${o.value}`)) : l.push(R("value", a.buildUndefinedNode()));

    return s.remove(), b.types.objectExpression(l);
  }

  function pt(e) {
    try {
      return e.addHelper("decorate");
    } catch (t) {
      throw t.code === "BABEL_HELPER_UNKNOWN" && (t.message += `
  '@babel/plugin-transform-decorators' in non-legacy mode requires '@babel/core' version ^7.0.2 and you appear to be using an older version.`), t;
    }
  }

  function ft(e, t, r, s) {
    let {
      node: n,
      scope: o
    } = t,
        a = o.generateUidIdentifier("initialize"),
        l = n.id && t.isDeclaration(),
        u = t.isInStrictMode(),
        {
      superClass: p
    } = n;
    n.type = "ClassDeclaration", n.id || (n.id = b.types.cloneNode(e));
    let d;
    p && (d = o.generateUidIdentifierBasedOnNode(n.superClass, "super"), n.superClass = d);
    let f = Pe(n),
        y = b.types.arrayExpression(r.filter(h => !h.node.abstract && h.node.type !== "TSIndexSignature").map(h => ut(s, n.id, d, h))),
        v = b.template.expression.ast`
    ${pt(s)}(
      ${f || b.types.nullLiteral()},
      function (${a}, ${p ? b.types.cloneNode(d) : null}) {
        ${n}
        return { F: ${b.types.cloneNode(n.id)}, d: ${y} };
      },
      ${p}
    )
  `;
    u || v.arguments[1].body.directives.push(b.types.directive(b.types.directiveLiteral("use strict")));
    let x = v,
        c = "arguments.1.body.body.0";
    return l && (x = b.template.statement.ast`let ${e} = ${v}`, c = "declarations.0.init." + c), {
      instanceNodes: [b.template.statement.ast`${b.types.cloneNode(a)}(this)`],

      wrapClass(h) {
        return h.replaceWith(x), h.get(c);
      }

    };
  }
});
var Ee = B(G => {
  "use strict";

  Object.defineProperty(G, "__esModule", {
    value: !0
  });
  G.extractComputedKeys = vt;
  G.injectInitialization = ht;
  var P = ___babel_core$,
      yt = ___babel_helper_environment_visitor$,
      bt = P.traverse.visitors.merge([{
    Super(e) {
      let {
        node: t,
        parentPath: r
      } = e;
      r.isCallExpression({
        callee: t
      }) && this.push(r);
    }

  }, yt.default]),
      mt = {
    "TSTypeAnnotation|TypeAnnotation"(e) {
      e.skip();
    },

    ReferencedIdentifier(e, {
      scope: t
    }) {
      t.hasOwnBinding(e.node.name) && (t.rename(e.node.name), e.skip());
    }

  };

  function Ne(e, t) {
    if (t.classBinding && t.classBinding === e.scope.getBinding(e.node.name)) {
      let r = t.file.addHelper("classNameTDZError"),
          s = P.types.callExpression(r, [P.types.stringLiteral(e.node.name)]);
      e.replaceWith(P.types.sequenceExpression([s, e.node])), e.skip();
    }
  }

  var gt = {
    ReferencedIdentifier: Ne
  };

  function ht(e, t, r, s) {
    if (!r.length) return;
    let n = !!e.node.superClass;

    if (!t) {
      let o = P.types.classMethod("constructor", P.types.identifier("constructor"), [], P.types.blockStatement([]));
      n && (o.params = [P.types.restElement(P.types.identifier("args"))], o.body.body.push(P.template.statement.ast`super(...args)`)), [t] = e.get("body").unshiftContainer("body", o);
    }

    if (s && s(mt, {
      scope: t.scope
    }), n) {
      let o = [];
      t.traverse(bt, o);
      let a = !0;

      for (let l of o) a ? (l.insertAfter(r), a = !1) : l.insertAfter(r.map(u => P.types.cloneNode(u)));
    } else t.get("body").unshiftContainer("body", r);
  }

  function vt(e, t, r) {
    let s = [],
        n = {
      classBinding: e.node.id && e.scope.getBinding(e.node.id.name),
      file: r
    };

    for (let o of t) {
      let a = o.get("key");
      a.isReferencedIdentifier() ? Ne(a, n) : a.traverse(gt, n);
      let l = o.node;

      if (!a.isConstantExpression()) {
        let u = e.scope.generateUidIdentifierBasedOnNode(l.key);
        e.scope.push({
          id: u,
          kind: "let"
        }), s.push(P.types.expressionStatement(P.types.assignmentExpression("=", P.types.cloneNode(u), l.key))), l.key = P.types.cloneNode(u);
      }
    }

    return s;
  }
});
var xe = B(D => {
  "use strict";

  Object.defineProperty(D, "__esModule", {
    value: !0
  });
  D.FEATURES = void 0;
  D.enableFeature = Pt;
  D.isLoose = oe;
  D.shouldTransform = Nt;
  var Se = re(),
      $ = Object.freeze({
    fields: 1 << 1,
    privateMethods: 1 << 2,
    decorators: 1 << 3,
    privateIn: 1 << 4,
    staticBlocks: 1 << 5
  });
  D.FEATURES = $;
  var ke = new Map([[$.fields, "@babel/plugin-proposal-class-properties"], [$.privateMethods, "@babel/plugin-proposal-private-methods"], [$.privateIn, "@babel/plugin-proposal-private-property-in-object"]]),
      ne = "@babel/plugin-class-features/featuresKey",
      T = "@babel/plugin-class-features/looseKey",
      j = "@babel/plugin-class-features/looseLowPriorityKey/#__internal__@babel/preset-env__please-overwrite-loose-instead-of-throwing";

  function Pt(e, t, r) {
    (!C(e, t) || Ie(e, t)) && (e.set(ne, e.get(ne) | t), r === "#__internal__@babel/preset-env__prefer-true-but-false-is-ok-if-it-prevents-an-error" ? (Z(e, t, !0), e.set(j, e.get(j) | t)) : r === "#__internal__@babel/preset-env__prefer-false-but-true-is-ok-if-it-prevents-an-error" ? (Z(e, t, !1), e.set(j, e.get(j) | t)) : Z(e, t, r));
    let s, n;

    for (let [o, a] of ke) {
      if (!C(e, o)) continue;
      let l = oe(e, o);

      if (!Ie(e, o)) {
        if (s === !l) throw new Error("'loose' mode configuration must be the same for @babel/plugin-proposal-class-properties, @babel/plugin-proposal-private-methods and @babel/plugin-proposal-private-property-in-object (when they are enabled).");
        s = l, n = a;
      }
    }

    if (s !== void 0) for (let [o, a] of ke) C(e, o) && oe(e, o) !== s && (Z(e, o, s), console.warn(`Though the "loose" option was set to "${!s}" in your @babel/preset-env config, it will not be used for ${a} since the "loose" mode option was set to "${s}" for ${n}.
The "loose" option must be the same for @babel/plugin-proposal-class-properties, @babel/plugin-proposal-private-methods and @babel/plugin-proposal-private-property-in-object (when they are enabled): you can silence this warning by explicitly adding
	["${a}", { "loose": ${s} }]
to the "plugins" section of your Babel config.`));
  }

  function C(e, t) {
    return !!(e.get(ne) & t);
  }

  function oe(e, t) {
    return !!(e.get(T) & t);
  }

  function Z(e, t, r) {
    r ? e.set(T, e.get(T) | t) : e.set(T, e.get(T) & ~t), e.set(j, e.get(j) & ~t);
  }

  function Ie(e, t) {
    return !!(e.get(j) & t);
  }

  function Nt(e, t) {
    let r = null,
        s = null,
        n = null,
        o = null,
        a = null;
    (0, Se.hasOwnDecorators)(e.node) && (r = e.get("decorators.0"));

    for (let l of e.get("body.body")) !r && (0, Se.hasOwnDecorators)(l.node) && (r = l.get("decorators.0")), !s && l.isClassProperty() && (s = l), !n && l.isClassPrivateProperty() && (n = l), !o && l.isClassPrivateMethod != null && l.isClassPrivateMethod() && (o = l), !a && l.isStaticBlock != null && l.isStaticBlock() && (a = l);

    if (r && n) throw n.buildCodeFrameError("Private fields in decorated classes are not supported yet.");
    if (r && o) throw o.buildCodeFrameError("Private methods in decorated classes are not supported yet.");
    if (r && !C(t, $.decorators)) throw e.buildCodeFrameError(`Decorators are not enabled.
If you are using ["@babel/plugin-proposal-decorators", { "version": "legacy" }], make sure it comes *before* "@babel/plugin-proposal-class-properties" and enable loose mode, like so:
	["@babel/plugin-proposal-decorators", { "version": "legacy" }]
	["@babel/plugin-proposal-class-properties", { "loose": true }]`);
    if (o && !C(t, $.privateMethods)) throw o.buildCodeFrameError("Class private methods are not enabled. Please add `@babel/plugin-proposal-private-methods` to your configuration.");
    if ((s || n) && !C(t, $.fields) && !C(t, $.privateMethods)) throw e.buildCodeFrameError("Class fields are not enabled. Please add `@babel/plugin-proposal-class-properties` to your configuration.");
    if (a && !C(t, $.staticBlocks)) throw e.buildCodeFrameError("Static class blocks are not enabled. Please add `@babel/plugin-proposal-class-static-block` to your configuration.");
    return !!(r || o || a || (s || n) && C(t, $.fields));
  }
});
var $e = B(U => {
  "use strict";

  Object.defineProperty(U, "__esModule", {
    value: !0
  });
  Object.defineProperty(U, "FEATURES", {
    enumerable: !0,
    get: function () {
      return H.FEATURES;
    }
  });
  U.createClassFeaturePlugin = It;
  Object.defineProperty(U, "enableFeature", {
    enumerable: !0,
    get: function () {
      return H.enableFeature;
    }
  });
  Object.defineProperty(U, "injectInitialization", {
    enumerable: !0,
    get: function () {
      return de.injectInitialization;
    }
  });
  var ae = ___babel_core$,
      Et = ___babel_helper_function_name$,
      St = ___babel_helper_split_export_declaration$,
      Y = ve(),
      le = re(),
      de = Ee(),
      H = xe(),
      kt = se(),
      J = "7.19.0".split(".").reduce((e, t) => e * 1e5 + +t, 0),
      q = "@babel/plugin-class-features/version";

  function It({
    name: e,
    feature: t,
    loose: r,
    manipulateOptions: s,
    api: n = {
      assumption: () => {}
    },
    inherits: o
  }) {
    let a = n.assumption("setPublicClassFields"),
        l = n.assumption("privateFieldsAsProperties"),
        u = n.assumption("constantSuper"),
        p = n.assumption("noDocumentAll");

    if (r === !0) {
      let d = [];
      a !== void 0 && d.push('"setPublicClassFields"'), l !== void 0 && d.push('"privateFieldsAsProperties"'), d.length !== 0 && console.warn(`[${e}]: You are using the "loose: true" option and you are explicitly setting a value for the ${d.join(" and ")} assumption${d.length > 1 ? "s" : ""}. The "loose" option can cause incompatibilities with the other class features plugins, so it's recommended that you replace it with the following top-level option:
	"assumptions": {
		"setPublicClassFields": true,
		"privateFieldsAsProperties": true
	}`);
    }

    return {
      name: e,
      manipulateOptions: s,
      inherits: o,

      pre(d) {
        (0, H.enableFeature)(d, t, r), (!d.get(q) || d.get(q) < J) && d.set(q, J);
      },

      visitor: {
        Class(d, {
          file: f
        }) {
          if (f.get(q) !== J || !(0, H.shouldTransform)(d, f)) return;
          d.isClassDeclaration() && (0, kt.assertFieldTransformed)(d);
          let y = (0, H.isLoose)(f, t),
              v,
              x = (0, le.hasDecorators)(d.node),
              c = [],
              h = [],
              N = [],
              m = new Set(),
              O = d.get("body");

          for (let g of O.get("body")) {
            if ((g.isClassProperty() || g.isClassMethod()) && g.node.computed && N.push(g), g.isPrivate()) {
              let {
                name: I
              } = g.node.key.id,
                  w = `get ${I}`,
                  A = `set ${I}`;

              if (g.isClassPrivateMethod()) {
                if (g.node.kind === "get") {
                  if (m.has(w) || m.has(I) && !m.has(A)) throw g.buildCodeFrameError("Duplicate private field");
                  m.add(w).add(I);
                } else if (g.node.kind === "set") {
                  if (m.has(A) || m.has(I) && !m.has(w)) throw g.buildCodeFrameError("Duplicate private field");
                  m.add(A).add(I);
                }
              } else {
                if (m.has(I) && !m.has(w) && !m.has(A) || m.has(I) && (m.has(w) || m.has(A))) throw g.buildCodeFrameError("Duplicate private field");
                m.add(I);
              }
            }

            g.isClassMethod({
              kind: "constructor"
            }) ? v = g : (h.push(g), (g.isProperty() || g.isPrivate() || g.isStaticBlock != null && g.isStaticBlock()) && c.push(g));
          }

          if (!c.length && !x) return;
          let S = d.node.id,
              k;
          !S || d.isClassExpression() ? ((0, Et.default)(d), k = d.scope.generateUidIdentifier("class")) : k = ae.types.cloneNode(d.node.id);

          let F = (0, Y.buildPrivateNamesMap)(c),
              _ = (0, Y.buildPrivateNamesNodes)(F, l ?? y, f);

          (0, Y.transformPrivateNamesUsage)(k, d, F, {
            privateFieldsAsProperties: l ?? y,
            noDocumentAll: p,
            innerBinding: S
          }, f);
          let Q, K, z, V, X;
          x ? (K = V = Q = [], ({
            instanceNodes: z,
            wrapClass: X
          } = (0, le.buildDecoratedClass)(k, d, h, f))) : (Q = (0, de.extractComputedKeys)(d, N, f), ({
            staticNodes: K,
            pureStaticNodes: V,
            instanceNodes: z,
            wrapClass: X
          } = (0, Y.buildFieldsInitNodes)(k, d.node.superClass, c, F, f, a ?? y, l ?? y, u ?? y, S))), z.length > 0 && (0, de.injectInitialization)(d, v, z, (g, I) => {
            if (!x) for (let w of c) ae.types.isStaticBlock != null && ae.types.isStaticBlock(w.node) || w.node.static || w.traverse(g, I);
          });
          let ee = X(d);
          ee.insertBefore([..._, ...Q]), K.length > 0 && ee.insertAfter(K), V.length > 0 && ee.find(g => g.isStatement() || g.isDeclaration()).insertAfter(V);
        },

        ExportDefaultDeclaration(d, {
          file: f
        }) {
          {
            if (f.get(q) !== J) return;
            let y = d.get("declaration");
            y.isClassDeclaration() && (0, le.hasDecorators)(y.node) && (y.node.id ? (0, St.default)(d) : y.node.type = "ClassExpression");
          }
        }

      }
    };
  }
});
var Ce = Me($e()),
    Ot = !0,
    {
  FEATURES: Bt,
  createClassFeaturePlugin: Mt,
  enableFeature: Rt,
  injectInitialization: Ut
} = Ce,
    {
  default: we,
  ...xt
} = Ce,
    At = we !== void 0 ? we : xt;
export { Bt as FEATURES, Ot as __esModule, Mt as createClassFeaturePlugin, At as default, Rt as enableFeature, Ut as injectInitialization };