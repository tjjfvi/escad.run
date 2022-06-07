/* esm.sh - esbuild bundle(@babel/helper-create-class-features-plugin@7.18.0) esnext production */
import ___babel_core$ from "/transpiled/https://esm.sh/v85/@babel/core@7.18.2/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/core.js";
import * as ___babel_helper_annotate_as_pure$$ from "/transpiled/https://esm.sh/v85/@babel/helper-annotate-as-pure@7.16.7/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-annotate-as-pure.js";

const ___babel_helper_annotate_as_pure$ = Object.assign({
  __esModule: true
}, ___babel_helper_annotate_as_pure$$);

import * as ___babel_helper_optimise_call_expression$$ from "/transpiled/https://esm.sh/v85/@babel/helper-optimise-call-expression@7.16.7/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-optimise-call-expression.js";

const ___babel_helper_optimise_call_expression$ = Object.assign({
  __esModule: true
}, ___babel_helper_optimise_call_expression$$);

import * as ___babel_helper_member_expression_to_functions$$ from "/transpiled/https://esm.sh/v85/@babel/helper-member-expression-to-functions@7.17.7/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-member-expression-to-functions.js";

const ___babel_helper_member_expression_to_functions$ = Object.assign({
  __esModule: true
}, ___babel_helper_member_expression_to_functions$$);

import * as ___babel_helper_environment_visitor$$ from "/transpiled/https://esm.sh/v85/@babel/helper-environment-visitor@7.18.2/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-environment-visitor.js";

const ___babel_helper_environment_visitor$ = Object.assign({
  __esModule: true
}, ___babel_helper_environment_visitor$$);

import * as ___babel_helper_replace_supers$$ from "/transpiled/https://esm.sh/v85/@babel/helper-replace-supers@7.18.2/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-replace-supers.js";

const ___babel_helper_replace_supers$ = Object.assign({
  __esModule: true
}, ___babel_helper_replace_supers$$);

import * as ___babel_helper_split_export_declaration$$ from "/transpiled/https://esm.sh/v85/@babel/helper-split-export-declaration@7.16.7/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-split-export-declaration.js";

const ___babel_helper_split_export_declaration$ = Object.assign({
  __esModule: true
}, ___babel_helper_split_export_declaration$$);

import * as ___babel_helper_function_name$$ from "/transpiled/https://esm.sh/v85/@babel/helper-function-name@7.17.9/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-function-name.js";

const ___babel_helper_function_name$ = Object.assign({
  __esModule: true
}, ___babel_helper_function_name$$);

var je = Object.create;
var se = Object.defineProperty;
var Oe = Object.getOwnPropertyDescriptor;
var De = Object.getOwnPropertyNames;
var Be = Object.getPrototypeOf,
    Me = Object.prototype.hasOwnProperty;

var p = (e, t) => se(e, "name", {
  value: t,
  configurable: !0
}),
    S = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (t, r) => (typeof require != "undefined" ? require : t)[r]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var M = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var Re = (e, t, r, s) => {
  if (t && typeof t == "object" || typeof t == "function") for (let n of De(t)) !Me.call(e, n) && n !== r && se(e, n, {
    get: () => t[n],
    enumerable: !(s = Oe(t, n)) || s.enumerable
  });
  return e;
};

var fe = (e, t, r) => (r = e != null ? je(Be(e)) : {}, Re(t || !e || !e.__esModule ? se(r, "default", {
  value: e,
  enumerable: !0
}) : r, e));

var re = M(ie => {
  "use strict";

  Object.defineProperty(ie, "__esModule", {
    value: !0
  });
  ie.assertFieldTransformed = Ue;

  function Ue(e) {
    if (e.node.declare) throw e.buildCodeFrameError(`TypeScript 'declare' fields must first be transformed by @babel/plugin-transform-typescript.
If you have already enabled that plugin (or '@babel/preset-typescript'), make sure that it runs before any plugin related to additional class features:
 - @babel/plugin-proposal-class-properties
 - @babel/plugin-proposal-private-methods
 - @babel/plugin-proposal-decorators`);
  }

  p(Ue, "assertFieldTransformed");
});
var Ee = M(R => {
  "use strict";

  Object.defineProperty(R, "__esModule", {
    value: !0
  });
  R.buildFieldsInitNodes = ot;
  R.buildPrivateNamesMap = He;
  R.buildPrivateNamesNodes = Ke;
  R.transformPrivateNamesUsage = Ze;
  var i = ___babel_core$,
      Ae = ___babel_helper_replace_supers$,
      ve = ___babel_helper_environment_visitor$,
      Le = ___babel_helper_member_expression_to_functions$,
      ye = ___babel_helper_optimise_call_expression$,
      Te = ___babel_helper_annotate_as_pure$,
      qe = re();

  function He(e) {
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

  p(He, "buildPrivateNamesMap");

  function Ke(e, t, r) {
    let s = [];

    for (let [n, o] of e) {
      let {
        static: a,
        method: l,
        getId: u,
        setId: f
      } = o,
          d = u || f,
          y = i.types.cloneNode(o.id),
          b;
      t ? b = i.types.callExpression(r.addHelper("classPrivateFieldLooseKey"), [i.types.stringLiteral(n)]) : a || (b = i.types.newExpression(i.types.identifier(!l || d ? "WeakMap" : "WeakSet"), [])), b && ((0, Te.default)(b), s.push(i.template.statement.ast`var ${y} = ${b}`));
    }

    return s;
  }

  p(Ke, "buildPrivateNamesNodes");

  function Pe(e) {
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
            name: f
          } = u.node.key.id;
          a.delete(f), l.push(f);
        }

        !l.length || (s.get("body").traverse(r, Object.assign({}, this, {
          redeclared: l
        })), s.traverse(t, Object.assign({}, this, {
          privateNamesMap: a
        })), s.skipKey("body"));
      }

    }),
        r = i.traverse.visitors.merge([Object.assign({}, e), ve.default]);
    return t;
  }

  p(Pe, "privateNameVisitorFactory");
  var ze = Pe({
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

  function Ne(e, t, r) {
    for (; (s = t) != null && s.hasBinding(e) && !t.bindingIdentifierEquals(e, r);) {
      var s;
      t.rename(e), t = t.parent;
    }
  }

  p(Ne, "unshadow");
  var Ve = Pe({
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

      if (Ne(this.classRef.name, e.scope, this.innerBinding), n) {
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
        static: f
      } = o.get(l);

      if (f) {
        e.replaceWith(i.template.expression.ast`${s} === ${this.classRef}`);
        return;
      }

      e.replaceWith(i.template.expression.ast`${i.types.cloneNode(u)}.has(${s})`);
    }

  }),
      We = {
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
        methodId: f,
        getId: d,
        setId: y
      } = r.get(o),
          b = d || y;

      if (l) {
        let P = u && !b ? "classStaticPrivateMethodGet" : "classStaticPrivateFieldSpecGet";
        return Ne(t.name, e.scope, n), i.types.callExpression(s.addHelper(P), [this.receiver(e), i.types.cloneNode(t), i.types.cloneNode(a)]);
      }

      if (u) {
        if (b) {
          if (!d && y) {
            if (s.availableHelper("writeOnlyError")) return i.types.sequenceExpression([this.receiver(e), i.types.callExpression(s.addHelper("writeOnlyError"), [i.types.stringLiteral(`#${o}`)])]);
            console.warn("@babel/helpers is outdated, update it to silence this warning.");
          }

          return i.types.callExpression(s.addHelper("classPrivateFieldGet"), [this.receiver(e), i.types.cloneNode(a)]);
        }

        return i.types.callExpression(s.addHelper("classPrivateMethodGet"), [this.receiver(e), i.types.cloneNode(a), i.types.cloneNode(f)]);
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
        setId: f,
        getId: d
      } = s.get(o),
          y = d || f;

      if (l) {
        let b = u && !y ? "classStaticPrivateMethodSet" : "classStaticPrivateFieldSpecSet";
        return i.types.callExpression(n.addHelper(b), [this.receiver(e), i.types.cloneNode(r), i.types.cloneNode(a), t]);
      }

      return u ? f ? i.types.callExpression(n.addHelper("classPrivateFieldSet"), [this.receiver(e), i.types.cloneNode(a), t]) : i.types.sequenceExpression([this.receiver(e), t, i.types.callExpression(n.addHelper("readOnlyError"), [i.types.stringLiteral(`#${o}`)])]) : i.types.callExpression(n.addHelper("classPrivateFieldSet"), [this.receiver(e), i.types.cloneNode(a), t]);
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
      return this.memoise(e, 1), (0, ye.default)(this.get(e), this.receiver(e), t, !1);
    },

    optionalCall(e, t) {
      return this.memoise(e, 1), (0, ye.default)(this.get(e), this.receiver(e), t, !0);
    }

  },
      Ge = {
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

  function Ze(e, t, r, {
    privateFieldsAsProperties: s,
    noDocumentAll: n,
    innerBinding: o
  }, a) {
    if (!r.size) return;
    let l = t.get("body"),
        u = s ? Ge : We;
    (0, Le.default)(l, ze, Object.assign({
      privateNamesMap: r,
      classRef: e,
      file: a
    }, u, {
      noDocumentAll: n,
      innerBinding: o
    })), l.traverse(Ve, {
      privateNamesMap: r,
      classRef: e,
      file: a,
      privateFieldsAsProperties: s,
      innerBinding: o
    });
  }

  p(Ze, "transformPrivateNamesUsage");

  function be(e, t, r) {
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

  p(be, "buildPrivateFieldInitLoose");

  function Ye(e, t, r, s) {
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

  p(Ye, "buildPrivateInstanceFieldInitSpec");

  function me(e, t) {
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

  p(me, "buildPrivateStaticFieldInitSpec");

  function Je(e, t, r) {
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

  p(Je, "buildPrivateMethodInitLoose");

  function Qe(e, t, r, s) {
    let n = r.get(t.node.key.id.name),
        {
      getId: o,
      setId: a,
      initAdded: l
    } = n;
    return l ? void 0 : o || a ? Xe(e, t, r, s) : et(e, t, r, s);
  }

  p(Qe, "buildPrivateInstanceMethodInitSpec");

  function Xe(e, t, r, s) {
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

  p(Xe, "buildPrivateAccessorInitialization");

  function et(e, t, r, s) {
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

  p(et, "buildPrivateInstanceMethodInitalization");

  function ge(e, t) {
    let {
      key: r,
      computed: s
    } = t.node,
        n = t.node.value || t.scope.buildUndefinedNode();
    return i.types.expressionStatement(i.types.assignmentExpression("=", i.types.memberExpression(e, r, s || i.types.isLiteral(r)), n));
  }

  p(ge, "buildPublicFieldInitLoose");

  function he(e, t, r) {
    let {
      key: s,
      computed: n
    } = t.node,
        o = t.node.value || t.scope.buildUndefinedNode();
    return i.types.expressionStatement(i.types.callExpression(r.addHelper("defineProperty"), [e, n || i.types.isLiteral(s) ? s : i.types.stringLiteral(s.name), o]));
  }

  p(he, "buildPublicFieldInitSpec");

  function tt(e, t, r, s) {
    let n = s.get(t.node.key.id.name),
        {
      id: o,
      methodId: a,
      getId: l,
      setId: u,
      initAdded: f
    } = n;
    return f ? void 0 : l || u ? (s.set(t.node.key.id.name, Object.assign({}, n, {
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

  p(tt, "buildPrivateStaticMethodInitLoose");

  function G(e, t, r = !1) {
    let s = t.get(e.node.key.id.name),
        {
      id: n,
      methodId: o,
      getId: a,
      setId: l,
      getterDeclared: u,
      setterDeclared: f,
      static: d
    } = s,
        {
      params: y,
      body: b,
      generator: P,
      async: x
    } = e.node,
        c = a && !u && y.length === 0,
        v = l && !f && y.length > 0,
        E = o;
    return c ? (t.set(e.node.key.id.name, Object.assign({}, s, {
      getterDeclared: !0
    })), E = a) : v ? (t.set(e.node.key.id.name, Object.assign({}, s, {
      setterDeclared: !0
    })), E = l) : d && !r && (E = n), i.types.functionDeclaration(i.types.cloneNode(E), y, b, P, x);
  }

  p(G, "buildPrivateMethodDeclaration");
  var st = i.traverse.visitors.merge([{
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

  }, ve.default]),
      it = {
    ReferencedIdentifier(e, t) {
      e.scope.bindingIdentifierEquals(e.node.name, t.innerBinding) && (t.needsClassRef = !0, e.node.name = t.classRef.name);
    }

  };

  function rt(e, t, r, s, n, o, a) {
    var l;
    let u = {
      classRef: t,
      needsClassRef: !1,
      innerBinding: a
    };
    return new Ae.default({
      methodPath: e,
      constantSuper: o,
      file: s,
      refToPreserve: t,
      getSuperRef: r,

      getObjectRef() {
        return u.needsClassRef = !0, i.types.isStaticBlock != null && i.types.isStaticBlock(e.node) || e.node.static ? t : i.types.memberExpression(t, i.types.identifier("prototype"));
      }

    }).replace(), (n || e.isProperty()) && e.traverse(st, u), a != null && (l = u.classRef) != null && l.name && u.classRef.name !== a?.name && e.traverse(it, u), u.needsClassRef;
  }

  p(rt, "replaceThisContext");

  function nt({
    key: e,
    computed: t
  }) {
    return e.type === "Identifier" ? !t && (e.name === "name" || e.name === "length") : e.type === "StringLiteral" ? e.value === "name" || e.value === "length" : !1;
  }

  p(nt, "isNameOrLength");

  function ot(e, t, r, s, n, o, a, l, u) {
    let f = !1,
        d,
        y = [],
        b = [],
        P = [],
        x = i.types.isIdentifier(t) ? () => t : () => {
      var c;
      return (c = d) != null || (d = r[0].scope.generateUidIdentifierBasedOnNode(t)), d;
    };

    for (let c of r) {
      c.isClassProperty() && qe.assertFieldTransformed(c);
      let v = !(i.types.isStaticBlock != null && i.types.isStaticBlock(c.node)) && c.node.static,
          E = !v,
          g = c.isPrivate(),
          B = !g,
          k = c.isProperty(),
          I = !k,
          j = c.isStaticBlock == null ? void 0 : c.isStaticBlock();

      if (v || I && g || j) {
        let _ = rt(c, e, x, n, j, l, u);

        f = f || _;
      }

      switch (!0) {
        case j:
          {
            let _ = c.node.body;
            _.length === 1 && i.types.isExpressionStatement(_[0]) ? y.push(_[0]) : y.push(i.template.statement.ast`(() => { ${_} })()`);
            break;
          }

        case v && g && k && a:
          f = !0, y.push(be(i.types.cloneNode(e), c, s));
          break;

        case v && g && k && !a:
          f = !0, y.push(me(c, s));
          break;

        case v && B && k && o:
          if (!nt(c.node)) {
            f = !0, y.push(ge(i.types.cloneNode(e), c));
            break;
          }

        case v && B && k && !o:
          f = !0, y.push(he(i.types.cloneNode(e), c, n));
          break;

        case E && g && k && a:
          b.push(be(i.types.thisExpression(), c, s));
          break;

        case E && g && k && !a:
          b.push(Ye(i.types.thisExpression(), c, s, n));
          break;

        case E && g && I && a:
          b.unshift(Je(i.types.thisExpression(), c, s)), P.push(G(c, s, a));
          break;

        case E && g && I && !a:
          b.unshift(Qe(i.types.thisExpression(), c, s, n)), P.push(G(c, s, a));
          break;

        case v && g && I && !a:
          f = !0, y.unshift(me(c, s)), P.push(G(c, s, a));
          break;

        case v && g && I && a:
          f = !0, y.unshift(tt(i.types.cloneNode(e), c, n, s)), P.push(G(c, s, a));
          break;

        case E && B && k && o:
          b.push(ge(i.types.thisExpression(), c));
          break;

        case E && B && k && !o:
          b.push(he(i.types.thisExpression(), c, n));
          break;

        default:
          throw new Error("Unreachable.");
      }
    }

    return {
      staticNodes: y.filter(Boolean),
      instanceNodes: b.filter(Boolean),
      pureStaticNodes: P.filter(Boolean),

      wrapClass(c) {
        for (let v of r) v.remove();

        return d && (c.scope.push({
          id: i.types.cloneNode(d)
        }), c.set("superClass", i.types.assignmentExpression("=", d, c.node.superClass))), f && (c.isClassExpression() ? (c.scope.push({
          id: e
        }), c.replaceWith(i.types.assignmentExpression("=", i.types.cloneNode(e), c.node))) : c.node.id || (c.node.id = e)), c;
      }

    };
  }

  p(ot, "buildFieldsInitNodes");
});
var oe = M(T => {
  "use strict";

  Object.defineProperty(T, "__esModule", {
    value: !0
  });
  T.buildDecoratedClass = yt;
  T.hasDecorators = dt;
  T.hasOwnDecorators = ne;
  var m = ___babel_core$,
      at = ___babel_helper_replace_supers$,
      lt = ___babel_helper_function_name$;

  function ne(e) {
    return !!(e.decorators && e.decorators.length);
  }

  p(ne, "hasOwnDecorators");

  function dt(e) {
    return ne(e) || e.body.body.some(ne);
  }

  p(dt, "hasDecorators");

  function U(e, t) {
    return t ? m.types.objectProperty(m.types.identifier(e), t) : null;
  }

  p(U, "prop");

  function ct(e, t) {
    return m.types.objectMethod("method", m.types.identifier(e), [], m.types.blockStatement(t));
  }

  p(ct, "method");

  function Se(e) {
    let t;
    return e.decorators && e.decorators.length > 0 && (t = m.types.arrayExpression(e.decorators.map(r => r.expression))), e.decorators = void 0, t;
  }

  p(Se, "takeDecorators");

  function ut(e) {
    return e.computed ? e.key : m.types.isIdentifier(e.key) ? m.types.stringLiteral(e.key.name) : m.types.stringLiteral(String(e.key.value));
  }

  p(ut, "getKey");

  function pt(e, t, r, s) {
    let n = s.isClassMethod();
    if (s.isPrivate()) throw s.buildCodeFrameError(`Private ${n ? "methods" : "fields"} in decorated classes are not supported yet.`);
    if (s.node.type === "ClassAccessorProperty") throw s.buildCodeFrameError('Accessor properties are not supported in 2018-09 decorator transform, please specify { "version": "2021-12" } instead.');
    if (s.node.type === "StaticBlock") throw s.buildCodeFrameError('Static blocks are not supported in 2018-09 decorator transform, please specify { "version": "2021-12" } instead.');
    let {
      node: o,
      scope: a
    } = s;
    new at.default({
      methodPath: s,
      objectRef: t,
      superRef: r,
      file: e,
      refToPreserve: t
    }).replace();
    let l = [U("kind", m.types.stringLiteral(m.types.isClassMethod(o) ? o.kind : "field")), U("decorators", Se(o)), U("static", o.static && m.types.booleanLiteral(!0)), U("key", ut(o))].filter(Boolean);

    if (m.types.isClassMethod(o)) {
      let u = o.computed ? null : o.key;
      m.types.toExpression(o), l.push(U("value", (0, lt.default)({
        node: o,
        id: u,
        scope: a
      }) || o));
    } else m.types.isClassProperty(o) && o.value ? l.push(ct("value", m.template.statements.ast`return ${o.value}`)) : l.push(U("value", a.buildUndefinedNode()));

    return s.remove(), m.types.objectExpression(l);
  }

  p(pt, "extractElementDescriptor");

  function ft(e) {
    try {
      return e.addHelper("decorate");
    } catch (t) {
      throw t.code === "BABEL_HELPER_UNKNOWN" && (t.message += `
  '@babel/plugin-transform-decorators' in non-legacy mode requires '@babel/core' version ^7.0.2 and you appear to be using an older version.`), t;
    }
  }

  p(ft, "addDecorateHelper");

  function yt(e, t, r, s) {
    let {
      node: n,
      scope: o
    } = t,
        a = o.generateUidIdentifier("initialize"),
        l = n.id && t.isDeclaration(),
        u = t.isInStrictMode(),
        {
      superClass: f
    } = n;
    n.type = "ClassDeclaration", n.id || (n.id = m.types.cloneNode(e));
    let d;
    f && (d = o.generateUidIdentifierBasedOnNode(n.superClass, "super"), n.superClass = d);
    let y = Se(n),
        b = m.types.arrayExpression(r.filter(v => !v.node.abstract && v.node.type !== "TSIndexSignature").map(v => pt(s, n.id, d, v))),
        P = m.template.expression.ast`
    ${ft(s)}(
      ${y || m.types.nullLiteral()},
      function (${a}, ${f ? m.types.cloneNode(d) : null}) {
        ${n}
        return { F: ${m.types.cloneNode(n.id)}, d: ${b} };
      },
      ${f}
    )
  `;
    u || P.arguments[1].body.directives.push(m.types.directive(m.types.directiveLiteral("use strict")));
    let x = P,
        c = "arguments.1.body.body.0";
    return l && (x = m.template.statement.ast`let ${e} = ${P}`, c = "declarations.0.init." + c), {
      instanceNodes: [m.template.statement.ast`${m.types.cloneNode(a)}(this)`],

      wrapClass(v) {
        return v.replaceWith(x), v.get(c);
      }

    };
  }

  p(yt, "buildDecoratedClass");
});
var Ie = M(Z => {
  "use strict";

  Object.defineProperty(Z, "__esModule", {
    value: !0
  });
  Z.extractComputedKeys = Pt;
  Z.injectInitialization = vt;
  var N = ___babel_core$,
      bt = ___babel_helper_environment_visitor$,
      mt = N.traverse.visitors.merge([{
    Super(e) {
      let {
        node: t,
        parentPath: r
      } = e;
      r.isCallExpression({
        callee: t
      }) && this.push(r);
    }

  }, bt.default]),
      gt = {
    "TSTypeAnnotation|TypeAnnotation"(e) {
      e.skip();
    },

    ReferencedIdentifier(e, {
      scope: t
    }) {
      t.hasOwnBinding(e.node.name) && (t.rename(e.node.name), e.skip());
    }

  };

  function ke(e, t) {
    if (t.classBinding && t.classBinding === e.scope.getBinding(e.node.name)) {
      let r = t.file.addHelper("classNameTDZError"),
          s = N.types.callExpression(r, [N.types.stringLiteral(e.node.name)]);
      e.replaceWith(N.types.sequenceExpression([s, e.node])), e.skip();
    }
  }

  p(ke, "handleClassTDZ");
  var ht = {
    ReferencedIdentifier: ke
  };

  function vt(e, t, r, s) {
    if (!r.length) return;
    let n = !!e.node.superClass;

    if (!t) {
      let o = N.types.classMethod("constructor", N.types.identifier("constructor"), [], N.types.blockStatement([]));
      n && (o.params = [N.types.restElement(N.types.identifier("args"))], o.body.body.push(N.template.statement.ast`super(...args)`)), [t] = e.get("body").unshiftContainer("body", o);
    }

    if (s && s(gt, {
      scope: t.scope
    }), n) {
      let o = [];
      t.traverse(mt, o);
      let a = !0;

      for (let l of o) a ? (l.insertAfter(r), a = !1) : l.insertAfter(r.map(u => N.types.cloneNode(u)));
    } else t.get("body").unshiftContainer("body", r);
  }

  p(vt, "injectInitialization");

  function Pt(e, t, r) {
    let s = [],
        n = {
      classBinding: e.node.id && e.scope.getBinding(e.node.id.name),
      file: r
    };

    for (let o of t) {
      let a = o.get("key");
      a.isReferencedIdentifier() ? ke(a, n) : a.traverse(ht, n);
      let l = o.node;

      if (!a.isConstantExpression()) {
        let u = e.scope.generateUidIdentifierBasedOnNode(l.key);
        e.scope.push({
          id: u,
          kind: "let"
        }), s.push(N.types.expressionStatement(N.types.assignmentExpression("=", N.types.cloneNode(u), l.key))), l.key = N.types.cloneNode(u);
      }
    }

    return s;
  }

  p(Pt, "extractComputedKeys");
});
var Ce = M(D => {
  "use strict";

  Object.defineProperty(D, "__esModule", {
    value: !0
  });
  D.FEATURES = void 0;
  D.enableFeature = Nt;
  D.isLoose = le;
  D.shouldTransform = Et;
  var $e = oe(),
      w = Object.freeze({
    fields: 1 << 1,
    privateMethods: 1 << 2,
    decorators: 1 << 3,
    privateIn: 1 << 4,
    staticBlocks: 1 << 5
  });
  D.FEATURES = w;
  var xe = new Map([[w.fields, "@babel/plugin-proposal-class-properties"], [w.privateMethods, "@babel/plugin-proposal-private-methods"], [w.privateIn, "@babel/plugin-proposal-private-property-in-object"]]),
      ae = "@babel/plugin-class-features/featuresKey",
      q = "@babel/plugin-class-features/looseKey",
      O = "@babel/plugin-class-features/looseLowPriorityKey/#__internal__@babel/preset-env__please-overwrite-loose-instead-of-throwing";

  function Nt(e, t, r) {
    (!F(e, t) || we(e, t)) && (e.set(ae, e.get(ae) | t), r === "#__internal__@babel/preset-env__prefer-true-but-false-is-ok-if-it-prevents-an-error" ? (Y(e, t, !0), e.set(O, e.get(O) | t)) : r === "#__internal__@babel/preset-env__prefer-false-but-true-is-ok-if-it-prevents-an-error" ? (Y(e, t, !1), e.set(O, e.get(O) | t)) : Y(e, t, r));
    let s, n;

    for (let [o, a] of xe) {
      if (!F(e, o)) continue;
      let l = le(e, o);

      if (!we(e, o)) {
        if (s === !l) throw new Error("'loose' mode configuration must be the same for @babel/plugin-proposal-class-properties, @babel/plugin-proposal-private-methods and @babel/plugin-proposal-private-property-in-object (when they are enabled).");
        s = l, n = a;
      }
    }

    if (s !== void 0) for (let [o, a] of xe) F(e, o) && le(e, o) !== s && (Y(e, o, s), console.warn(`Though the "loose" option was set to "${!s}" in your @babel/preset-env config, it will not be used for ${a} since the "loose" mode option was set to "${s}" for ${n}.
The "loose" option must be the same for @babel/plugin-proposal-class-properties, @babel/plugin-proposal-private-methods and @babel/plugin-proposal-private-property-in-object (when they are enabled): you can silence this warning by explicitly adding
	["${a}", { "loose": ${s} }]
to the "plugins" section of your Babel config.`));
  }

  p(Nt, "enableFeature");

  function F(e, t) {
    return !!(e.get(ae) & t);
  }

  p(F, "hasFeature");

  function le(e, t) {
    return !!(e.get(q) & t);
  }

  p(le, "isLoose");

  function Y(e, t, r) {
    r ? e.set(q, e.get(q) | t) : e.set(q, e.get(q) & ~t), e.set(O, e.get(O) & ~t);
  }

  p(Y, "setLoose");

  function we(e, t) {
    return !!(e.get(O) & t);
  }

  p(we, "canIgnoreLoose");

  function Et(e, t) {
    let r = null,
        s = null,
        n = null,
        o = null,
        a = null;
    (0, $e.hasOwnDecorators)(e.node) && (r = e.get("decorators.0"));

    for (let l of e.get("body.body")) !r && (0, $e.hasOwnDecorators)(l.node) && (r = l.get("decorators.0")), !s && l.isClassProperty() && (s = l), !n && l.isClassPrivateProperty() && (n = l), !o && l.isClassPrivateMethod != null && l.isClassPrivateMethod() && (o = l), !a && l.isStaticBlock != null && l.isStaticBlock() && (a = l);

    if (r && n) throw n.buildCodeFrameError("Private fields in decorated classes are not supported yet.");
    if (r && o) throw o.buildCodeFrameError("Private methods in decorated classes are not supported yet.");
    if (r && !F(t, w.decorators)) throw e.buildCodeFrameError(`Decorators are not enabled.
If you are using ["@babel/plugin-proposal-decorators", { "legacy": true }], make sure it comes *before* "@babel/plugin-proposal-class-properties" and enable loose mode, like so:
	["@babel/plugin-proposal-decorators", { "legacy": true }]
	["@babel/plugin-proposal-class-properties", { "loose": true }]`);
    if (o && !F(t, w.privateMethods)) throw o.buildCodeFrameError("Class private methods are not enabled. Please add `@babel/plugin-proposal-private-methods` to your configuration.");
    if ((s || n) && !F(t, w.fields) && !F(t, w.privateMethods)) throw e.buildCodeFrameError("Class fields are not enabled. Please add `@babel/plugin-proposal-class-properties` to your configuration.");
    if (a && !F(t, w.staticBlocks)) throw e.buildCodeFrameError("Static class blocks are not enabled. Please add `@babel/plugin-proposal-class-static-block` to your configuration.");
    return !!(r || o || a || (s || n) && F(t, w.fields));
  }

  p(Et, "shouldTransform");
});
var pe = M(A => {
  "use strict";

  Object.defineProperty(A, "__esModule", {
    value: !0
  });
  Object.defineProperty(A, "FEATURES", {
    enumerable: !0,
    get: function () {
      return K.FEATURES;
    }
  });
  A.createClassFeaturePlugin = $t;
  Object.defineProperty(A, "enableFeature", {
    enumerable: !0,
    get: function () {
      return K.enableFeature;
    }
  });
  Object.defineProperty(A, "injectInitialization", {
    enumerable: !0,
    get: function () {
      return ue.injectInitialization;
    }
  });
  var de = ___babel_core$,
      St = ___babel_helper_function_name$,
      kt = ___babel_helper_split_export_declaration$,
      J = Ee(),
      ce = oe(),
      ue = Ie(),
      K = Ce(),
      It = re(),
      Q = "7.18.0".split(".").reduce((e, t) => e * 1e5 + +t, 0),
      H = "@babel/plugin-class-features/version";

  function $t({
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
        f = n.assumption("noDocumentAll");

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
        (0, K.enableFeature)(d, t, r), (!d.get(H) || d.get(H) < Q) && d.set(H, Q);
      },

      visitor: {
        Class(d, {
          file: y
        }) {
          if (y.get(H) !== Q || !(0, K.shouldTransform)(d, y)) return;
          d.isClassDeclaration() && (0, It.assertFieldTransformed)(d);
          let b = (0, K.isLoose)(y, t),
              P,
              x = (0, ce.hasDecorators)(d.node),
              c = [],
              v = [],
              E = [],
              g = new Set(),
              B = d.get("body");

          for (let h of B.get("body")) {
            if ((h.isClassProperty() || h.isClassMethod()) && h.node.computed && E.push(h), h.isPrivate()) {
              let {
                name: $
              } = h.node.key.id,
                  C = `get ${$}`,
                  L = `set ${$}`;

              if (h.isClassPrivateMethod()) {
                if (h.node.kind === "get") {
                  if (g.has(C) || g.has($) && !g.has(L)) throw h.buildCodeFrameError("Duplicate private field");
                  g.add(C).add($);
                } else if (h.node.kind === "set") {
                  if (g.has(L) || g.has($) && !g.has(C)) throw h.buildCodeFrameError("Duplicate private field");
                  g.add(L).add($);
                }
              } else {
                if (g.has($) && !g.has(C) && !g.has(L) || g.has($) && (g.has(C) || g.has(L))) throw h.buildCodeFrameError("Duplicate private field");
                g.add($);
              }
            }

            h.isClassMethod({
              kind: "constructor"
            }) ? P = h : (v.push(h), (h.isProperty() || h.isPrivate() || h.isStaticBlock != null && h.isStaticBlock()) && c.push(h));
          }

          if (!c.length && !x) return;
          let k = d.node.id,
              I;
          !k || d.isClassExpression() ? ((0, St.default)(d), I = d.scope.generateUidIdentifier("class")) : I = de.types.cloneNode(d.node.id);

          let j = (0, J.buildPrivateNamesMap)(c),
              _ = (0, J.buildPrivateNamesNodes)(j, l ?? b, y);

          (0, J.transformPrivateNamesUsage)(I, d, j, {
            privateFieldsAsProperties: l ?? b,
            noDocumentAll: f,
            innerBinding: k
          }, y);
          let X, z, V, W, ee;
          x ? (z = W = X = [], ({
            instanceNodes: V,
            wrapClass: ee
          } = (0, ce.buildDecoratedClass)(I, d, v, y))) : (X = (0, ue.extractComputedKeys)(d, E, y), ({
            staticNodes: z,
            pureStaticNodes: W,
            instanceNodes: V,
            wrapClass: ee
          } = (0, J.buildFieldsInitNodes)(I, d.node.superClass, c, j, y, a ?? b, l ?? b, u ?? b, k))), V.length > 0 && (0, ue.injectInitialization)(d, P, V, (h, $) => {
            if (!x) for (let C of c) de.types.isStaticBlock != null && de.types.isStaticBlock(C.node) || C.node.static || C.traverse(h, $);
          });
          let te = ee(d);
          te.insertBefore([..._, ...X]), z.length > 0 && te.insertAfter(z), W.length > 0 && te.find(h => h.isStatement() || h.isDeclaration()).insertAfter(W);
        },

        ExportDefaultDeclaration(d, {
          file: y
        }) {
          if (y.get(H) !== Q) return;
          let b = d.get("declaration");
          b.isClassDeclaration() && (0, ce.hasDecorators)(b.node) && (b.node.id ? (0, kt.default)(d) : b.node.type = "ClassExpression");
        }

      }
    };
  }

  p($t, "createClassFeaturePlugin");
});

var Fe = fe(pe()),
    _e = fe(pe()),
    {
  __esModule: Mt,
  FEATURES: Rt,
  createClassFeaturePlugin: Ut,
  enableFeature: At,
  injectInitialization: Lt
} = _e,
    {
  default: xt,
  ...wt
} = _e,
    Tt = Fe.default ?? xt ?? wt;

export { Rt as FEATURES, Mt as __esModule, Ut as createClassFeaturePlugin, Tt as default, At as enableFeature, Lt as injectInitialization };