/* esm.sh - esbuild bundle(@babel/helper-module-imports@7.18.6) esnext production */
import ___babel_types$ from "/transpiled/https://esm.sh/v96/@babel/types@7.19.3/esnext/types.js";
import __assert$ from "/transpiled/https://esm.sh/v96/assert@2.0.0/esnext/assert.bundle.js";
var z = Object.create;
var k = Object.defineProperty;
var G = Object.getOwnPropertyDescriptor;
var K = Object.getOwnPropertyNames;
var Q = Object.getPrototypeOf,
    X = Object.prototype.hasOwnProperty;

var v = (a => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(a, {
  get: (t, e) => (typeof require < "u" ? require : t)[e]
}) : a)(function (a) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + a + '" is not supported');
});

var y = (a, t) => () => (t || a((t = {
  exports: {}
}).exports, t), t.exports);

var Y = (a, t, e, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let i of K(t)) !X.call(a, i) && i !== e && k(a, i, {
    get: () => t[i],
    enumerable: !(r = G(t, i)) || r.enumerable
  });
  return a;
};

var Z = (a, t, e) => (e = a != null ? z(Q(a)) : {}, Y(t || !a || !a.__esModule ? k(e, "default", {
  value: a,
  enumerable: !0
}) : e, a));

var $ = y(D => {
  "use strict";

  Object.defineProperty(D, "__esModule", {
    value: !0
  });
  D.default = void 0;
  var d = __assert$,
      ee = ___babel_types$,
      {
    callExpression: E,
    cloneNode: I,
    expressionStatement: C,
    identifier: c,
    importDeclaration: te,
    importDefaultSpecifier: re,
    importNamespaceSpecifier: se,
    importSpecifier: ie,
    memberExpression: q,
    stringLiteral: T,
    variableDeclaration: ne,
    variableDeclarator: ae
  } = ee,
      P = class {
    constructor(t, e, r) {
      this._statements = [], this._resultName = null, this._importedSource = void 0, this._scope = e, this._hub = r, this._importedSource = t;
    }

    done() {
      return {
        statements: this._statements,
        resultName: this._resultName
      };
    }

    import() {
      return this._statements.push(te([], T(this._importedSource))), this;
    }

    require() {
      return this._statements.push(C(E(c("require"), [T(this._importedSource)]))), this;
    }

    namespace(t = "namespace") {
      let e = this._scope.generateUidIdentifier(t),
          r = this._statements[this._statements.length - 1];

      return d(r.type === "ImportDeclaration"), d(r.specifiers.length === 0), r.specifiers = [se(e)], this._resultName = I(e), this;
    }

    default(t) {
      let e = this._scope.generateUidIdentifier(t),
          r = this._statements[this._statements.length - 1];

      return d(r.type === "ImportDeclaration"), d(r.specifiers.length === 0), r.specifiers = [re(e)], this._resultName = I(e), this;
    }

    named(t, e) {
      if (e === "default") return this.default(t);

      let r = this._scope.generateUidIdentifier(t),
          i = this._statements[this._statements.length - 1];

      return d(i.type === "ImportDeclaration"), d(i.specifiers.length === 0), i.specifiers = [ie(r, c(e))], this._resultName = I(r), this;
    }

    var(t) {
      let e = this._scope.generateUidIdentifier(t),
          r = this._statements[this._statements.length - 1];

      return r.type !== "ExpressionStatement" && (d(this._resultName), r = C(this._resultName), this._statements.push(r)), this._statements[this._statements.length - 1] = ne("var", [ae(e, r.expression)]), this._resultName = I(e), this;
    }

    defaultInterop() {
      return this._interop(this._hub.addHelper("interopRequireDefault"));
    }

    wildcardInterop() {
      return this._interop(this._hub.addHelper("interopRequireWildcard"));
    }

    _interop(t) {
      let e = this._statements[this._statements.length - 1];
      return e.type === "ExpressionStatement" ? e.expression = E(t, [e.expression]) : e.type === "VariableDeclaration" ? (d(e.declarations.length === 1), e.declarations[0].init = E(t, [e.declarations[0].init])) : d.fail("Unexpected type."), this;
    }

    prop(t) {
      let e = this._statements[this._statements.length - 1];
      return e.type === "ExpressionStatement" ? e.expression = q(e.expression, c(t)) : e.type === "VariableDeclaration" ? (d(e.declarations.length === 1), e.declarations[0].init = q(e.declarations[0].init, c(t))) : d.fail("Unexpected type:" + e.type), this;
    }

    read(t) {
      this._resultName = q(this._resultName, c(t));
    }

  };
  D.default = P;
});
var j = y(N => {
  "use strict";

  Object.defineProperty(N, "__esModule", {
    value: !0
  });
  N.default = oe;

  function oe(a) {
    let {
      sourceType: t
    } = a.node;
    if (t !== "module" && t !== "script") throw a.buildCodeFrameError(`Unknown sourceType "${t}", cannot transform.`);
    return a.node.sourceType === "module";
  }
});
var L = y(w => {
  "use strict";

  Object.defineProperty(w, "__esModule", {
    value: !0
  });
  w.default = void 0;
  var F = __assert$,
      le = ___babel_types$,
      de = $(),
      ue = j(),
      {
    numericLiteral: fe,
    sequenceExpression: pe
  } = le,
      M = class {
    constructor(t, e, r) {
      this._defaultOpts = {
        importedSource: null,
        importedType: "commonjs",
        importedInterop: "babel",
        importingInterop: "babel",
        ensureLiveReference: !1,
        ensureNoContext: !1,
        importPosition: "before"
      };
      let i = t.find(l => l.isProgram());
      this._programPath = i, this._programScope = i.scope, this._hub = i.hub, this._defaultOpts = this._applyDefaults(e, r, !0);
    }

    addDefault(t, e) {
      return this.addNamed("default", t, e);
    }

    addNamed(t, e, r) {
      return F(typeof t == "string"), this._generateImport(this._applyDefaults(e, r), t);
    }

    addNamespace(t, e) {
      return this._generateImport(this._applyDefaults(t, e), null);
    }

    addSideEffect(t, e) {
      return this._generateImport(this._applyDefaults(t, e), void 0);
    }

    _applyDefaults(t, e, r = !1) {
      let i;
      return typeof t == "string" ? i = Object.assign({}, this._defaultOpts, {
        importedSource: t
      }, e) : (F(!e, "Unexpected secondary arguments."), i = Object.assign({}, this._defaultOpts, t)), !r && e && (e.nameHint !== void 0 && (i.nameHint = e.nameHint), e.blockHoist !== void 0 && (i.blockHoist = e.blockHoist)), i;
    }

    _generateImport(t, e) {
      let r = e === "default",
          i = !!e && !r,
          l = e === null,
          {
        importedSource: o,
        importedType: f,
        importedInterop: m,
        importingInterop: O,
        ensureLiveReference: p,
        ensureNoContext: A,
        nameHint: H,
        importPosition: U,
        blockHoist: J
      } = t,
          n = H || e,
          S = (0, ue.default)(this._programPath),
          _ = S && O === "node",
          b = S && O === "babel";

      if (U === "after" && !S) throw new Error('"importPosition": "after" is only supported in modules');
      let s = new de.default(o, this._programScope, this._hub);

      if (f === "es6") {
        if (!_ && !b) throw new Error("Cannot import an ES6 module from CommonJS");
        s.import(), l ? s.namespace(H || o) : (r || i) && s.named(n, e);
      } else {
        if (f !== "commonjs") throw new Error(`Unexpected interopType "${f}"`);
        if (m === "babel") {
          if (_) {
            n = n !== "default" ? n : o;
            let g = `${o}$es6Default`;
            s.import(), l ? s.default(g).var(n || o).wildcardInterop() : r ? p ? s.default(g).var(n || o).defaultInterop().read("default") : s.default(g).var(n).defaultInterop().prop(e) : i && s.default(g).read(e);
          } else b ? (s.import(), l ? s.namespace(n || o) : (r || i) && s.named(n, e)) : (s.require(), l ? s.var(n || o).wildcardInterop() : (r || i) && p ? r ? (n = n !== "default" ? n : o, s.var(n).read(e), s.defaultInterop()) : s.var(o).read(e) : r ? s.var(n).defaultInterop().prop(e) : i && s.var(n).prop(e));
        } else if (m === "compiled") _ ? (s.import(), l ? s.default(n || o) : (r || i) && s.default(o).read(n)) : b ? (s.import(), l ? s.namespace(n || o) : (r || i) && s.named(n, e)) : (s.require(), l ? s.var(n || o) : (r || i) && (p ? s.var(o).read(n) : s.prop(e).var(n)));else if (m === "uncompiled") {
          if (r && p) throw new Error("No live reference for commonjs default");
          _ ? (s.import(), l ? s.default(n || o) : r ? s.default(n) : i && s.default(o).read(n)) : b ? (s.import(), l ? s.default(n || o) : r ? s.default(n) : i && s.named(n, e)) : (s.require(), l ? s.var(n || o) : r ? s.var(n) : i && (p ? s.var(o).read(n) : s.var(n).prop(e)));
        } else throw new Error(`Unknown importedInterop "${m}".`);
      }

      let {
        statements: W,
        resultName: x
      } = s.done();
      return this._insertStatements(W, U, J), (r || i) && A && x.type !== "Identifier" ? pe([fe(0), x]) : x;
    }

    _insertStatements(t, e = "before", r = 3) {
      let i = this._programPath.get("body");

      if (e === "after") {
        for (let l = i.length - 1; l >= 0; l--) if (i[l].isImportDeclaration()) {
          i[l].insertAfter(t);
          return;
        }
      } else {
        t.forEach(o => {
          o._blockHoist = r;
        });
        let l = i.find(o => {
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
  w.default = M;
});
var R = y(u => {
  "use strict";

  Object.defineProperty(u, "__esModule", {
    value: !0
  });
  Object.defineProperty(u, "ImportInjector", {
    enumerable: !0,
    get: function () {
      return h.default;
    }
  });
  u.addDefault = he;
  u.addNamed = me;
  u.addNamespace = _e;
  u.addSideEffect = be;
  Object.defineProperty(u, "isModule", {
    enumerable: !0,
    get: function () {
      return ce.default;
    }
  });
  var h = L(),
      ce = j();

  function he(a, t, e) {
    return new h.default(a).addDefault(t, e);
  }

  function me(a, t, e, r) {
    return new h.default(a).addNamed(t, e, r);
  }

  function _e(a, t, e) {
    return new h.default(a).addNamespace(t, e);
  }

  function be(a, t, e) {
    return new h.default(a).addSideEffect(t, e);
  }
});
var V = Z(R()),
    Se = !0,
    {
  ImportInjector: xe,
  addDefault: Ee,
  addNamed: qe,
  addNamespace: Pe,
  addSideEffect: Ne,
  isModule: je
} = V,
    {
  default: B,
  ...ge
} = V,
    Me = B !== void 0 ? B : ge;
export { xe as ImportInjector, Se as __esModule, Ee as addDefault, qe as addNamed, Pe as addNamespace, Ne as addSideEffect, Me as default, je as isModule };