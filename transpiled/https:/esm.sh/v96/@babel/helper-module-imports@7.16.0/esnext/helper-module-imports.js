/* esm.sh - esbuild bundle(@babel/helper-module-imports@7.16.0) esnext production */
import ___babel_types$ from "/transpiled/https://esm.sh/v96/@babel/types@7.19.3/esnext/types.js";
import __assert$ from "/transpiled/https://esm.sh/v96/assert@2.0.0/esnext/assert.bundle.js";
var z = Object.create;
var k = Object.defineProperty;
var G = Object.getOwnPropertyDescriptor;
var K = Object.getOwnPropertyNames;
var Q = Object.getPrototypeOf,
    X = Object.prototype.hasOwnProperty;

var v = (o => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(o, {
  get: (t, e) => (typeof require < "u" ? require : t)[e]
}) : o)(function (o) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + o + '" is not supported');
});

var y = (o, t) => () => (t || o((t = {
  exports: {}
}).exports, t), t.exports);

var Y = (o, t, e, s) => {
  if (t && typeof t == "object" || typeof t == "function") for (let n of K(t)) !X.call(o, n) && n !== e && k(o, n, {
    get: () => t[n],
    enumerable: !(s = G(t, n)) || s.enumerable
  });
  return o;
};

var Z = (o, t, e) => (e = o != null ? z(Q(o)) : {}, Y(t || !o || !o.__esModule ? k(e, "default", {
  value: o,
  enumerable: !0
}) : e, o));

var L = y(D => {
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
      return this._statements.push(te([], T(this._importedSource))), this;
    }

    require() {
      return this._statements.push(C(E(c("require"), [T(this._importedSource)]))), this;
    }

    namespace(t = "namespace") {
      let e = this._scope.generateUidIdentifier(t),
          s = this._statements[this._statements.length - 1];

      return d(s.type === "ImportDeclaration"), d(s.specifiers.length === 0), s.specifiers = [se(e)], this._resultName = I(e), this;
    }

    default(t) {
      t = this._scope.generateUidIdentifier(t);
      let e = this._statements[this._statements.length - 1];
      return d(e.type === "ImportDeclaration"), d(e.specifiers.length === 0), e.specifiers = [re(t)], this._resultName = I(t), this;
    }

    named(t, e) {
      if (e === "default") return this.default(t);
      t = this._scope.generateUidIdentifier(t);
      let s = this._statements[this._statements.length - 1];
      return d(s.type === "ImportDeclaration"), d(s.specifiers.length === 0), s.specifiers = [ie(t, c(e))], this._resultName = I(t), this;
    }

    var(t) {
      t = this._scope.generateUidIdentifier(t);
      let e = this._statements[this._statements.length - 1];
      return e.type !== "ExpressionStatement" && (d(this._resultName), e = C(this._resultName), this._statements.push(e)), this._statements[this._statements.length - 1] = ne("var", [ae(t, e.expression)]), this._resultName = I(t), this;
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

  function oe(o) {
    let {
      sourceType: t
    } = o.node;
    if (t !== "module" && t !== "script") throw o.buildCodeFrameError(`Unknown sourceType "${t}", cannot transform.`);
    return o.node.sourceType === "module";
  }
});
var F = y(w => {
  "use strict";

  Object.defineProperty(w, "__esModule", {
    value: !0
  });
  w.default = void 0;
  var $ = __assert$,
      le = ___babel_types$,
      de = L(),
      ue = j(),
      {
    numericLiteral: fe,
    sequenceExpression: pe
  } = le,
      M = class {
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
      let n = t.find(l => l.isProgram());
      this._programPath = n, this._programScope = n.scope, this._hub = n.hub, this._defaultOpts = this._applyDefaults(e, s, !0);
    }

    addDefault(t, e) {
      return this.addNamed("default", t, e);
    }

    addNamed(t, e, s) {
      return $(typeof t == "string"), this._generateImport(this._applyDefaults(e, s), t);
    }

    addNamespace(t, e) {
      return this._generateImport(this._applyDefaults(t, e), null);
    }

    addSideEffect(t, e) {
      return this._generateImport(this._applyDefaults(t, e), !1);
    }

    _applyDefaults(t, e, s = !1) {
      let n = [];
      typeof t == "string" ? (n.push({
        importedSource: t
      }), n.push(e)) : ($(!e, "Unexpected secondary arguments."), n.push(t));
      let l = Object.assign({}, this._defaultOpts);

      for (let a of n) !a || (Object.keys(l).forEach(u => {
        a[u] !== void 0 && (l[u] = a[u]);
      }), s || (a.nameHint !== void 0 && (l.nameHint = a.nameHint), a.blockHoist !== void 0 && (l.blockHoist = a.blockHoist)));

      return l;
    }

    _generateImport(t, e) {
      let s = e === "default",
          n = !!e && !s,
          l = e === null,
          {
        importedSource: a,
        importedType: u,
        importedInterop: m,
        importingInterop: H,
        ensureLiveReference: p,
        ensureNoContext: A,
        nameHint: O,
        importPosition: U,
        blockHoist: J
      } = t,
          i = O || e,
          S = (0, ue.default)(this._programPath),
          _ = S && H === "node",
          b = S && H === "babel";

      if (U === "after" && !S) throw new Error('"importPosition": "after" is only supported in modules');
      let r = new de.default(a, this._programScope, this._hub);

      if (u === "es6") {
        if (!_ && !b) throw new Error("Cannot import an ES6 module from CommonJS");
        r.import(), l ? r.namespace(O || a) : (s || n) && r.named(i, e);
      } else {
        if (u !== "commonjs") throw new Error(`Unexpected interopType "${u}"`);
        if (m === "babel") {
          if (_) {
            i = i !== "default" ? i : a;
            let g = `${a}$es6Default`;
            r.import(), l ? r.default(g).var(i || a).wildcardInterop() : s ? p ? r.default(g).var(i || a).defaultInterop().read("default") : r.default(g).var(i).defaultInterop().prop(e) : n && r.default(g).read(e);
          } else b ? (r.import(), l ? r.namespace(i || a) : (s || n) && r.named(i, e)) : (r.require(), l ? r.var(i || a).wildcardInterop() : (s || n) && p ? s ? (i = i !== "default" ? i : a, r.var(i).read(e), r.defaultInterop()) : r.var(a).read(e) : s ? r.var(i).defaultInterop().prop(e) : n && r.var(i).prop(e));
        } else if (m === "compiled") _ ? (r.import(), l ? r.default(i || a) : (s || n) && r.default(a).read(i)) : b ? (r.import(), l ? r.namespace(i || a) : (s || n) && r.named(i, e)) : (r.require(), l ? r.var(i || a) : (s || n) && (p ? r.var(a).read(i) : r.prop(e).var(i)));else if (m === "uncompiled") {
          if (s && p) throw new Error("No live reference for commonjs default");
          _ ? (r.import(), l ? r.default(i || a) : s ? r.default(i) : n && r.default(a).read(i)) : b ? (r.import(), l ? r.default(i || a) : s ? r.default(i) : n && r.named(i, e)) : (r.require(), l ? r.var(i || a) : s ? r.var(i) : n && (p ? r.var(a).read(i) : r.var(i).prop(e)));
        } else throw new Error(`Unknown importedInterop "${m}".`);
      }

      let {
        statements: W,
        resultName: x
      } = r.done();
      return this._insertStatements(W, U, J), (s || n) && A && x.type !== "Identifier" ? pe([fe(0), x]) : x;
    }

    _insertStatements(t, e = "before", s = 3) {
      let n = this._programPath.get("body");

      if (e === "after") {
        for (let l = n.length - 1; l >= 0; l--) if (n[l].isImportDeclaration()) {
          n[l].insertAfter(t);
          return;
        }
      } else {
        t.forEach(a => {
          a._blockHoist = s;
        });
        let l = n.find(a => {
          let u = a.node._blockHoist;
          return Number.isFinite(u) && u < 4;
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
var R = y(f => {
  "use strict";

  Object.defineProperty(f, "__esModule", {
    value: !0
  });
  Object.defineProperty(f, "ImportInjector", {
    enumerable: !0,
    get: function () {
      return h.default;
    }
  });
  f.addDefault = he;
  f.addNamed = me;
  f.addNamespace = _e;
  f.addSideEffect = be;
  Object.defineProperty(f, "isModule", {
    enumerable: !0,
    get: function () {
      return ce.default;
    }
  });
  var h = F(),
      ce = j();

  function he(o, t, e) {
    return new h.default(o).addDefault(t, e);
  }

  function me(o, t, e, s) {
    return new h.default(o).addNamed(t, e, s);
  }

  function _e(o, t, e) {
    return new h.default(o).addNamespace(t, e);
  }

  function be(o, t, e) {
    return new h.default(o).addSideEffect(t, e);
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