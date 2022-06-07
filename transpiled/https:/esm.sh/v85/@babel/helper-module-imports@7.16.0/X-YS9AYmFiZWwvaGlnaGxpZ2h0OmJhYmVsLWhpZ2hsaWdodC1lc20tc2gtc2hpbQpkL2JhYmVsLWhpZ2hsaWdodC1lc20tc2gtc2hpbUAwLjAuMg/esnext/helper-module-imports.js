/* esm.sh - esbuild bundle(@babel/helper-module-imports@7.16.0) esnext production */
import ___babel_types$ from "/transpiled/https://esm.sh/v85/@babel/types@7.18.4/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/types.js";
import __assert$ from "/transpiled/https://esm.sh/v85/assert@2.0.0/esnext/assert.bundle.js";
var K = Object.create;
var N = Object.defineProperty;
var Q = Object.getOwnPropertyDescriptor;
var X = Object.getOwnPropertyNames;
var Y = Object.getPrototypeOf,
    Z = Object.prototype.hasOwnProperty;

var d = (i, t) => N(i, "name", {
  value: t,
  configurable: !0
}),
    y = (i => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(i, {
  get: (t, e) => (typeof require != "undefined" ? require : t)[e]
}) : i)(function (i) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + i + '" is not supported');
});

var I = (i, t) => () => (t || i((t = {
  exports: {}
}).exports, t), t.exports);

var ee = (i, t, e, s) => {
  if (t && typeof t == "object" || typeof t == "function") for (let a of X(t)) !Z.call(i, a) && a !== e && N(i, a, {
    get: () => t[a],
    enumerable: !(s = Q(t, a)) || s.enumerable
  });
  return i;
};

var T = (i, t, e) => (e = i != null ? K(Y(i)) : {}, ee(t || !i || !i.__esModule ? N(e, "default", {
  value: i,
  enumerable: !0
}) : e, i));

var R = I(S => {
  "use strict";

  Object.defineProperty(S, "__esModule", {
    value: !0
  });
  S.default = void 0;
  var u = __assert$,
      te = ___babel_types$,
      {
    callExpression: M,
    cloneNode: D,
    expressionStatement: L,
    identifier: h,
    importDeclaration: re,
    importDefaultSpecifier: se,
    importNamespaceSpecifier: ie,
    importSpecifier: ne,
    memberExpression: j,
    stringLiteral: F,
    variableDeclaration: ae,
    variableDeclarator: oe
  } = te,
      w = class {
    constructor(t, e, s) {
      this._statements = [], this._resultName = null, this._scope = null, this._hub = null, this._importedSource = void 0, this._scope = e, this._hub = s, this._importedSource = t;
    }

    done() {
      return {
        statements: this._statements,
        resultName: this._resultName
      };
    }

    import() {
      return this._statements.push(re([], F(this._importedSource))), this;
    }

    require() {
      return this._statements.push(L(M(h("require"), [F(this._importedSource)]))), this;
    }

    namespace(t = "namespace") {
      let e = this._scope.generateUidIdentifier(t),
          s = this._statements[this._statements.length - 1];

      return u(s.type === "ImportDeclaration"), u(s.specifiers.length === 0), s.specifiers = [ie(e)], this._resultName = D(e), this;
    }

    default(t) {
      t = this._scope.generateUidIdentifier(t);
      let e = this._statements[this._statements.length - 1];
      return u(e.type === "ImportDeclaration"), u(e.specifiers.length === 0), e.specifiers = [se(t)], this._resultName = D(t), this;
    }

    named(t, e) {
      if (e === "default") return this.default(t);
      t = this._scope.generateUidIdentifier(t);
      let s = this._statements[this._statements.length - 1];
      return u(s.type === "ImportDeclaration"), u(s.specifiers.length === 0), s.specifiers = [ne(t, h(e))], this._resultName = D(t), this;
    }

    var(t) {
      t = this._scope.generateUidIdentifier(t);
      let e = this._statements[this._statements.length - 1];
      return e.type !== "ExpressionStatement" && (u(this._resultName), e = L(this._resultName), this._statements.push(e)), this._statements[this._statements.length - 1] = ae("var", [oe(t, e.expression)]), this._resultName = D(t), this;
    }

    defaultInterop() {
      return this._interop(this._hub.addHelper("interopRequireDefault"));
    }

    wildcardInterop() {
      return this._interop(this._hub.addHelper("interopRequireWildcard"));
    }

    _interop(t) {
      let e = this._statements[this._statements.length - 1];
      return e.type === "ExpressionStatement" ? e.expression = M(t, [e.expression]) : e.type === "VariableDeclaration" ? (u(e.declarations.length === 1), e.declarations[0].init = M(t, [e.declarations[0].init])) : u.fail("Unexpected type."), this;
    }

    prop(t) {
      let e = this._statements[this._statements.length - 1];
      return e.type === "ExpressionStatement" ? e.expression = j(e.expression, h(t)) : e.type === "VariableDeclaration" ? (u(e.declarations.length === 1), e.declarations[0].init = j(e.declarations[0].init, h(t))) : u.fail("Unexpected type:" + e.type), this;
    }

    read(t) {
      this._resultName = j(this._resultName, h(t));
    }

  };
  d(w, "ImportBuilder");
  S.default = w;
});
var O = I(H => {
  "use strict";

  Object.defineProperty(H, "__esModule", {
    value: !0
  });
  H.default = le;

  function le(i) {
    let {
      sourceType: t
    } = i.node;
    if (t !== "module" && t !== "script") throw i.buildCodeFrameError(`Unknown sourceType "${t}", cannot transform.`);
    return i.node.sourceType === "module";
  }

  d(le, "isModule");
});
var A = I(E => {
  "use strict";

  Object.defineProperty(E, "__esModule", {
    value: !0
  });
  E.default = void 0;
  var V = __assert$,
      de = ___babel_types$,
      ue = R(),
      fe = O(),
      {
    numericLiteral: pe,
    sequenceExpression: ce
  } = de,
      x = class {
    constructor(t, e, s) {
      this._defaultOpts = {
        importedSource: null,
        importedType: "commonjs",
        importedInterop: "babel",
        importingInterop: "babel",
        ensureLiveReference: !1,
        ensureNoContext: !1,
        importPosition: "before"
      };
      let a = t.find(l => l.isProgram());
      this._programPath = a, this._programScope = a.scope, this._hub = a.hub, this._defaultOpts = this._applyDefaults(e, s, !0);
    }

    addDefault(t, e) {
      return this.addNamed("default", t, e);
    }

    addNamed(t, e, s) {
      return V(typeof t == "string"), this._generateImport(this._applyDefaults(e, s), t);
    }

    addNamespace(t, e) {
      return this._generateImport(this._applyDefaults(t, e), null);
    }

    addSideEffect(t, e) {
      return this._generateImport(this._applyDefaults(t, e), !1);
    }

    _applyDefaults(t, e, s = !1) {
      let a = [];
      typeof t == "string" ? (a.push({
        importedSource: t
      }), a.push(e)) : (V(!e, "Unexpected secondary arguments."), a.push(t));
      let l = Object.assign({}, this._defaultOpts);

      for (let o of a) !o || (Object.keys(l).forEach(f => {
        o[f] !== void 0 && (l[f] = o[f]);
      }), s || (o.nameHint !== void 0 && (l.nameHint = o.nameHint), o.blockHoist !== void 0 && (l.blockHoist = o.blockHoist)));

      return l;
    }

    _generateImport(t, e) {
      let s = e === "default",
          a = !!e && !s,
          l = e === null,
          {
        importedSource: o,
        importedType: f,
        importedInterop: _,
        importingInterop: $,
        ensureLiveReference: c,
        ensureNoContext: W,
        nameHint: k,
        importPosition: C,
        blockHoist: z
      } = t,
          n = k || e,
          q = (0, fe.default)(this._programPath),
          b = q && $ === "node",
          g = q && $ === "babel";
      if (C === "after" && !q) throw new Error('"importPosition": "after" is only supported in modules');
      let r = new ue.default(o, this._programScope, this._hub);

      if (f === "es6") {
        if (!b && !g) throw new Error("Cannot import an ES6 module from CommonJS");
        r.import(), l ? r.namespace(k || o) : (s || a) && r.named(n, e);
      } else {
        if (f !== "commonjs") throw new Error(`Unexpected interopType "${f}"`);
        if (_ === "babel") {
          if (b) {
            n = n !== "default" ? n : o;
            let v = `${o}$es6Default`;
            r.import(), l ? r.default(v).var(n || o).wildcardInterop() : s ? c ? r.default(v).var(n || o).defaultInterop().read("default") : r.default(v).var(n).defaultInterop().prop(e) : a && r.default(v).read(e);
          } else g ? (r.import(), l ? r.namespace(n || o) : (s || a) && r.named(n, e)) : (r.require(), l ? r.var(n || o).wildcardInterop() : (s || a) && c ? s ? (n = n !== "default" ? n : o, r.var(n).read(e), r.defaultInterop()) : r.var(o).read(e) : s ? r.var(n).defaultInterop().prop(e) : a && r.var(n).prop(e));
        } else if (_ === "compiled") b ? (r.import(), l ? r.default(n || o) : (s || a) && r.default(o).read(n)) : g ? (r.import(), l ? r.namespace(n || o) : (s || a) && r.named(n, e)) : (r.require(), l ? r.var(n || o) : (s || a) && (c ? r.var(o).read(n) : r.prop(e).var(n)));else if (_ === "uncompiled") {
          if (s && c) throw new Error("No live reference for commonjs default");
          b ? (r.import(), l ? r.default(n || o) : s ? r.default(n) : a && r.default(o).read(n)) : g ? (r.import(), l ? r.default(n || o) : s ? r.default(n) : a && r.named(n, e)) : (r.require(), l ? r.var(n || o) : s ? r.var(n) : a && (c ? r.var(o).read(n) : r.var(n).prop(e)));
        } else throw new Error(`Unknown importedInterop "${_}".`);
      }

      let {
        statements: G,
        resultName: P
      } = r.done();
      return this._insertStatements(G, C, z), (s || a) && W && P.type !== "Identifier" ? ce([pe(0), P]) : P;
    }

    _insertStatements(t, e = "before", s = 3) {
      let a = this._programPath.get("body");

      if (e === "after") {
        for (let l = a.length - 1; l >= 0; l--) if (a[l].isImportDeclaration()) {
          a[l].insertAfter(t);
          return;
        }
      } else {
        t.forEach(o => {
          o._blockHoist = s;
        });
        let l = a.find(o => {
          let f = o.node._blockHoist;
          return Number.isFinite(f) && f < 4;
        });

        if (l) {
          l.insertBefore(t);
          return;
        }
      }

      this._programPath.unshiftContainer("body", t);
    }

  };
  d(x, "ImportInjector");
  E.default = x;
});
var U = I(p => {
  "use strict";

  Object.defineProperty(p, "__esModule", {
    value: !0
  });
  Object.defineProperty(p, "ImportInjector", {
    enumerable: !0,
    get: function () {
      return m.default;
    }
  });
  p.addDefault = me;
  p.addNamed = _e;
  p.addNamespace = be;
  p.addSideEffect = ge;
  Object.defineProperty(p, "isModule", {
    enumerable: !0,
    get: function () {
      return he.default;
    }
  });
  var m = A(),
      he = O();

  function me(i, t, e) {
    return new m.default(i).addDefault(t, e);
  }

  d(me, "addDefault");

  function _e(i, t, e, s) {
    return new m.default(i).addNamed(t, e, s);
  }

  d(_e, "addNamed");

  function be(i, t, e) {
    return new m.default(i).addNamespace(t, e);
  }

  d(be, "addNamespace");

  function ge(i, t, e) {
    return new m.default(i).addSideEffect(t, e);
  }

  d(ge, "addSideEffect");
});
var B = T(U()),
    J = T(U()),
    {
  __esModule: Ee,
  ImportInjector: qe,
  addDefault: Pe,
  addNamed: Ne,
  addNamespace: Me,
  addSideEffect: je,
  isModule: He
} = J,
    {
  default: ve,
  ...ye
} = J,
    Oe = B.default ?? ve ?? ye;
export { qe as ImportInjector, Ee as __esModule, Pe as addDefault, Ne as addNamed, Me as addNamespace, je as addSideEffect, Oe as default, He as isModule };