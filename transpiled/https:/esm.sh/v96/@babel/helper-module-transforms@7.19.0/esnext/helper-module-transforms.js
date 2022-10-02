/* esm.sh - esbuild bundle(@babel/helper-module-transforms@7.19.0) esnext production */
import __assert$ from "/transpiled/https://esm.sh/v96/assert@2.0.0/esnext/assert.bundle.js";
import * as ___babel_helper_split_export_declaration$ from "/transpiled/https://esm.sh/v96/@babel/helper-split-export-declaration@7.18.6/esnext/helper-split-export-declaration.js";
import ___babel_helper_validator_identifier$ from "/transpiled/https://esm.sh/v96/@babel/helper-validator-identifier@7.19.1/esnext/helper-validator-identifier.js";
import * as ___babel_helper_environment_visitor$ from "/transpiled/https://esm.sh/v96/@babel/helper-environment-visitor@7.18.9/esnext/helper-environment-visitor.js";
import ___babel_types$ from "/transpiled/https://esm.sh/v96/@babel/types@7.19.3/esnext/types.js";
import * as ___babel_template$ from "/transpiled/https://esm.sh/v96/@babel/template@7.18.10/esnext/template.js";
import __path$ from "/transpiled/https://esm.sh/v96/path-browserify@1.0.1/esnext/path-browserify.bundle.js";
import * as ___babel_helper_simple_access$ from "/transpiled/https://esm.sh/v96/@babel/helper-simple-access@7.18.6/esnext/helper-simple-access.js";
import * as ___babel_traverse$ from "/transpiled/https://esm.sh/v96/@babel/traverse@7.19.3/esnext/traverse.js";
import ___babel_helper_module_imports$ from "/transpiled/https://esm.sh/v96/@babel/helper-module-imports@7.18.6/esnext/helper-module-imports.js";
var ce = Object.create;
var h = Object.defineProperty;
var fe = Object.getOwnPropertyDescriptor;
var de = Object.getOwnPropertyNames;
var pe = Object.getPrototypeOf,
    me = Object.prototype.hasOwnProperty;

var m = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (t, i) => (typeof require < "u" ? require : t)[i]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var _ = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var Ee = (e, t, i, u) => {
  if (t && typeof t == "object" || typeof t == "function") for (let a of de(t)) !me.call(e, a) && a !== i && h(e, a, {
    get: () => t[a],
    enumerable: !(u = fe(t, a)) || u.enumerable
  });
  return e;
};

var ge = (e, t, i) => (i = e != null ? ce(pe(e)) : {}, Ee(t || !e || !e.__esModule ? h(i, "default", {
  value: e,
  enumerable: !0
}) : i, e));

var V = _(L => {
  "use strict";

  Object.defineProperty(L, "__esModule", {
    value: !0
  });
  L.default = _e;
  var xe = ___babel_helper_environment_visitor$,
      H = ___babel_traverse$,
      be = ___babel_types$,
      {
    numericLiteral: Se,
    unaryExpression: Ne
  } = be;

  function _e(e) {
    (0, H.default)(e.node, Object.assign({}, Ie, {
      noScope: !0
    }));
  }

  var Ie = H.default.visitors.merge([xe.default, {
    ThisExpression(e) {
      e.replaceWith(Ne("void", Se(0), !0));
    }

  }]);
});

var Y = _(j => {
  "use strict";

  Object.defineProperty(j, "__esModule", {
    value: !0
  });
  j.default = Ce;
  var ye = __assert$,
      Me = ___babel_types$,
      Ae = ___babel_template$,
      ve = ___babel_helper_simple_access$,
      {
    assignmentExpression: w,
    callExpression: z,
    cloneNode: I,
    expressionStatement: M,
    getOuterBindingIdentifiers: Oe,
    identifier: b,
    isMemberExpression: F,
    isVariableDeclaration: Pe,
    jsxIdentifier: U,
    jsxMemberExpression: we,
    memberExpression: W,
    numericLiteral: Re,
    sequenceExpression: y,
    stringLiteral: $,
    variableDeclaration: ke,
    variableDeclarator: Te
  } = Me;

  function De(e) {
    do switch (e.parent.type) {
      case "TSTypeAnnotation":
      case "TSTypeAliasDeclaration":
      case "TSTypeReference":
      case "TypeAnnotation":
      case "TypeAlias":
        return !0;

      case "ExportSpecifier":
        return e.parentPath.parent.exportKind === "type";

      default:
        if (e.parentPath.isStatement() || e.parentPath.isExpression()) return !1;
    } while (e = e.parentPath);
  }

  function Ce(e, t) {
    let i = new Map(),
        u = new Map(),
        a = r => {
      e.requeue(r);
    };

    for (let [r, o] of t.source) {
      for (let [n, c] of o.imports) i.set(n, [r, c, null]);

      for (let n of o.importsNamespace) i.set(n, [r, null, n]);
    }

    for (let [r, o] of t.local) {
      let n = u.get(r);
      n || (n = [], u.set(r, n)), n.push(...o.names);
    }

    let l = {
      metadata: t,
      requeueInParent: a,
      scope: e.scope,
      exported: u
    };
    e.traverse(Le, l), (0, ve.default)(e, new Set([...Array.from(i.keys()), ...Array.from(u.keys())]), !1);
    let s = {
      seen: new WeakSet(),
      metadata: t,
      requeueInParent: a,
      scope: e.scope,
      imported: i,
      exported: u,
      buildImportReference: ([r, o, n], c) => {
        let f = t.source.get(r);
        if (n) return f.lazy && (c = z(c, [])), c;
        let d = b(f.name);
        if (f.lazy && (d = z(d, [])), o === "default" && f.interop === "node-default") return d;
        let p = t.stringSpecifiers.has(o);
        return W(d, p ? $(o) : b(o), p);
      }
    };
    e.traverse(je, s);
  }

  var Le = {
    Scope(e) {
      e.skip();
    },

    ClassDeclaration(e) {
      let {
        requeueInParent: t,
        exported: i,
        metadata: u
      } = this,
          {
        id: a
      } = e.node;
      if (!a) throw new Error("Expected class to have a name");
      let l = a.name,
          s = i.get(l) || [];

      if (s.length > 0) {
        let r = M(S(u, s, b(l), e.scope));
        r._blockHoist = e.node._blockHoist, t(e.insertAfter(r)[0]);
      }
    },

    VariableDeclaration(e) {
      let {
        requeueInParent: t,
        exported: i,
        metadata: u
      } = this;
      Object.keys(e.getOuterBindingIdentifiers()).forEach(a => {
        let l = i.get(a) || [];

        if (l.length > 0) {
          let s = M(S(u, l, b(a), e.scope));
          s._blockHoist = e.node._blockHoist, t(e.insertAfter(s)[0]);
        }
      });
    }

  },
      S = (e, t, i, u) => {
    let a = e.exportName;

    for (let l = u; l != null; l = l.parent) l.hasOwnBinding(a) && l.rename(a);

    return (t || []).reduce((l, s) => {
      let {
        stringSpecifiers: r
      } = e,
          o = r.has(s);
      return w("=", W(b(a), o ? $(s) : b(s), o), l);
    }, i);
  },
      P = e => Ae.default.expression.ast`
    (function() {
      throw new Error('"' + '${e}' + '" is read-only.');
    })()
  `,
      je = {
    ReferencedIdentifier(e) {
      let {
        seen: t,
        buildImportReference: i,
        scope: u,
        imported: a,
        requeueInParent: l
      } = this;
      if (t.has(e.node)) return;
      t.add(e.node);
      let s = e.node.name,
          r = a.get(s);

      if (r) {
        if (De(e)) throw e.buildCodeFrameError(`Cannot transform the imported binding "${s}" since it's also used in a type annotation. Please strip type annotations using @babel/preset-typescript or @babel/preset-flow.`);
        let o = e.scope.getBinding(s);
        if (u.getBinding(s) !== o) return;
        let c = i(r, e.node);
        if (c.loc = e.node.loc, (e.parentPath.isCallExpression({
          callee: e.node
        }) || e.parentPath.isOptionalCallExpression({
          callee: e.node
        }) || e.parentPath.isTaggedTemplateExpression({
          tag: e.node
        })) && F(c)) e.replaceWith(y([Re(0), c]));else if (e.isJSXIdentifier() && F(c)) {
          let {
            object: f,
            property: d
          } = c;
          e.replaceWith(we(U(f.name), U(d.name)));
        } else e.replaceWith(c);
        l(e), e.skip();
      }
    },

    UpdateExpression(e) {
      let {
        scope: t,
        seen: i,
        imported: u,
        exported: a,
        requeueInParent: l,
        buildImportReference: s
      } = this;
      if (i.has(e.node)) return;
      i.add(e.node);
      let r = e.get("argument");
      if (r.isMemberExpression()) return;
      let o = e.node;

      if (r.isIdentifier()) {
        let n = r.node.name;
        if (t.getBinding(n) !== e.scope.getBinding(n)) return;
        let c = a.get(n),
            f = u.get(n);
        if (c?.length > 0 || f) if (f) e.replaceWith(w(o.operator[0] + "=", s(f, r.node), P(n)));else if (o.prefix) e.replaceWith(S(this.metadata, c, I(o), e.scope));else {
          let d = t.generateDeclaredUidIdentifier(n);
          e.replaceWith(y([w("=", I(d), I(o)), S(this.metadata, c, b(n), e.scope), I(d)]));
        }
      }

      l(e), e.skip();
    },

    AssignmentExpression: {
      exit(e) {
        let {
          scope: t,
          seen: i,
          imported: u,
          exported: a,
          requeueInParent: l,
          buildImportReference: s
        } = this;
        if (i.has(e.node)) return;
        i.add(e.node);
        let r = e.get("left");
        if (!r.isMemberExpression()) if (r.isIdentifier()) {
          let o = r.node.name;
          if (t.getBinding(o) !== e.scope.getBinding(o)) return;
          let n = a.get(o),
              c = u.get(o);

          if (n?.length > 0 || c) {
            ye(e.node.operator === "=", "Path was not simplified");
            let f = e.node;
            c && (f.left = s(c, r.node), f.right = y([f.right, P(o)])), e.replaceWith(S(this.metadata, n, f, e.scope)), l(e);
          }
        } else {
          let o = r.getOuterBindingIdentifiers(),
              n = Object.keys(o).filter(d => t.getBinding(d) === e.scope.getBinding(d)),
              c = n.find(d => u.has(d));
          c && (e.node.right = y([e.node.right, P(c)]));
          let f = [];

          if (n.forEach(d => {
            let p = a.get(d) || [];
            p.length > 0 && f.push(S(this.metadata, p, b(d), e.scope));
          }), f.length > 0) {
            let d = y(f);
            e.parentPath.isExpressionStatement() && (d = M(d), d._blockHoist = e.parentPath.node._blockHoist);
            let p = e.insertAfter(d)[0];
            l(p);
          }
        }
      }

    },

    "ForOfStatement|ForInStatement"(e) {
      let {
        scope: t,
        node: i
      } = e,
          {
        left: u
      } = i,
          {
        exported: a,
        imported: l,
        scope: s
      } = this;

      if (!Pe(u)) {
        let r = !1,
            o,
            n = e.get("body").scope;

        for (let d of Object.keys(Oe(u))) s.getBinding(d) === t.getBinding(d) && (a.has(d) && (r = !0, n.hasOwnBinding(d) && n.rename(d)), l.has(d) && !o && (o = d));

        if (!r && !o) return;
        e.ensureBlock();
        let c = e.get("body"),
            f = t.generateUidIdentifierBasedOnNode(u);
        e.get("left").replaceWith(ke("let", [Te(I(f))])), t.registerDeclaration(e.get("left")), r && c.unshiftContainer("body", M(w("=", u, f))), o && c.unshiftContainer("body", M(P(o)));
      }
    }

  };
});

var Z = _(N => {
  "use strict";

  Object.defineProperty(N, "__esModule", {
    value: !0
  });
  N.default = He;
  N.hasExports = Be;
  N.isSideEffectImport = G;
  N.validateImportInteropOption = J;
  var K = __path$,
      qe = ___babel_helper_validator_identifier$,
      Xe = ___babel_helper_split_export_declaration$;

  function Be(e) {
    return e.hasExports;
  }

  function G(e) {
    return e.imports.size === 0 && e.importsNamespace.size === 0 && e.reexports.size === 0 && e.reexportNamespace.size === 0 && !e.reexportAll;
  }

  function J(e) {
    if (typeof e != "function" && e !== "none" && e !== "babel" && e !== "node") throw new Error(`.importInterop must be one of "none", "babel", "node", or a function returning one of those values (received ${e}).`);
    return e;
  }

  function he(e, t, i) {
    return typeof e == "function" ? J(e(t, i)) : e;
  }

  function He(e, t, {
    importInterop: i,
    initializeReexports: u = !1,
    lazy: a = !1,
    esNamespaceOnly: l = !1,
    filename: s
  }) {
    t || (t = e.scope.generateUidIdentifier("exports").name);
    let r = new Set();
    Fe(e);
    let {
      local: o,
      source: n,
      hasExports: c
    } = Ve(e, {
      initializeReexports: u,
      lazy: a
    }, r);
    Ue(e);

    for (let [, f] of n) {
      f.importsNamespace.size > 0 && (f.name = f.importsNamespace.values().next().value);
      let d = he(i, f.source, s);
      d === "none" ? f.interop = "none" : d === "node" && f.interop === "namespace" ? f.interop = "node-namespace" : d === "node" && f.interop === "default" ? f.interop = "node-default" : l && f.interop === "namespace" && (f.interop = "default");
    }

    return {
      exportName: t,
      exportNameListName: null,
      hasExports: c,
      local: o,
      source: n,
      stringSpecifiers: r
    };
  }

  function R(e, t) {
    if (e.isIdentifier()) return e.node.name;

    if (e.isStringLiteral()) {
      let i = e.node.value;
      return (0, qe.isIdentifierName)(i) || t.add(i), i;
    } else throw new Error(`Expected export specifier to be either Identifier or StringLiteral, got ${e.node.type}`);
  }

  function Q(e) {
    if (!e.isExportSpecifier()) throw e.isExportNamespaceSpecifier() ? e.buildCodeFrameError("Export namespace should be first transformed by `@babel/plugin-proposal-export-namespace-from`.") : e.buildCodeFrameError("Unexpected export specifier type");
  }

  function Ve(e, {
    lazy: t,
    initializeReexports: i
  }, u) {
    let a = ze(e, i, u),
        l = new Map(),
        s = o => {
      let n = o.value,
          c = l.get(n);
      return c || (c = {
        name: e.scope.generateUidIdentifier((0, K.basename)(n, (0, K.extname)(n))).name,
        interop: "none",
        loc: null,
        imports: new Map(),
        importsNamespace: new Set(),
        reexports: new Map(),
        reexportNamespace: new Set(),
        reexportAll: null,
        lazy: !1,
        source: n
      }, l.set(n, c)), c;
    },
        r = !1;

    e.get("body").forEach(o => {
      if (o.isImportDeclaration()) {
        let n = s(o.node.source);
        n.loc || (n.loc = o.node.loc), o.get("specifiers").forEach(c => {
          if (c.isImportDefaultSpecifier()) {
            let f = c.get("local").node.name;
            n.imports.set(f, "default");
            let d = a.get(f);
            d && (a.delete(f), d.names.forEach(p => {
              n.reexports.set(p, "default");
            }));
          } else if (c.isImportNamespaceSpecifier()) {
            let f = c.get("local").node.name;
            n.importsNamespace.add(f);
            let d = a.get(f);
            d && (a.delete(f), d.names.forEach(p => {
              n.reexportNamespace.add(p);
            }));
          } else if (c.isImportSpecifier()) {
            let f = R(c.get("imported"), u),
                d = c.get("local").node.name;
            n.imports.set(d, f);
            let p = a.get(d);
            p && (a.delete(d), p.names.forEach(x => {
              n.reexports.set(x, f);
            }));
          }
        });
      } else if (o.isExportAllDeclaration()) {
        r = !0;
        let n = s(o.node.source);
        n.loc || (n.loc = o.node.loc), n.reexportAll = {
          loc: o.node.loc
        };
      } else if (o.isExportNamedDeclaration() && o.node.source) {
        r = !0;
        let n = s(o.node.source);
        n.loc || (n.loc = o.node.loc), o.get("specifiers").forEach(c => {
          Q(c);
          let f = R(c.get("local"), u),
              d = R(c.get("exported"), u);
          if (n.reexports.set(d, f), d === "__esModule") throw c.get("exported").buildCodeFrameError('Illegal export "__esModule".');
        });
      } else (o.isExportNamedDeclaration() || o.isExportDefaultDeclaration()) && (r = !0);
    });

    for (let o of l.values()) {
      let n = !1,
          c = !1;
      o.importsNamespace.size > 0 && (n = !0, c = !0), o.reexportAll && (c = !0);

      for (let f of o.imports.values()) f === "default" ? n = !0 : c = !0;

      for (let f of o.reexports.values()) f === "default" ? n = !0 : c = !0;

      n && c ? o.interop = "namespace" : n && (o.interop = "default");
    }

    for (let [o, n] of l) if (t !== !1 && !(G(n) || n.reexportAll)) if (t === !0) n.lazy = !/\./.test(o);else if (Array.isArray(t)) n.lazy = t.indexOf(o) !== -1;else if (typeof t == "function") n.lazy = t(o);else throw new Error(".lazy must be a boolean, string array, or function");

    return {
      hasExports: r,
      local: a,
      source: l
    };
  }

  function ze(e, t, i) {
    let u = new Map();
    e.get("body").forEach(s => {
      let r;
      if (s.isImportDeclaration()) r = "import";else {
        if (s.isExportDefaultDeclaration() && (s = s.get("declaration")), s.isExportNamedDeclaration()) {
          if (s.node.declaration) s = s.get("declaration");else if (t && s.node.source && s.get("source").isStringLiteral()) {
            s.get("specifiers").forEach(o => {
              Q(o), u.set(o.get("local").node.name, "block");
            });
            return;
          }
        }

        if (s.isFunctionDeclaration()) r = "hoisted";else if (s.isClassDeclaration()) r = "block";else if (s.isVariableDeclaration({
          kind: "var"
        })) r = "var";else if (s.isVariableDeclaration()) r = "block";else return;
      }
      Object.keys(s.getOuterBindingIdentifiers()).forEach(o => {
        u.set(o, r);
      });
    });

    let a = new Map(),
        l = s => {
      let r = s.node.name,
          o = a.get(r);

      if (!o) {
        let n = u.get(r);
        if (n === void 0) throw s.buildCodeFrameError(`Exporting local "${r}", which is not declared.`);
        o = {
          names: [],
          kind: n
        }, a.set(r, o);
      }

      return o;
    };

    return e.get("body").forEach(s => {
      if (s.isExportNamedDeclaration() && (t || !s.node.source)) {
        if (s.node.declaration) {
          let r = s.get("declaration"),
              o = r.getOuterBindingIdentifierPaths();
          Object.keys(o).forEach(n => {
            if (n === "__esModule") throw r.buildCodeFrameError('Illegal export "__esModule".');
            l(o[n]).names.push(n);
          });
        } else s.get("specifiers").forEach(r => {
          let o = r.get("local"),
              n = r.get("exported"),
              c = l(o),
              f = R(n, i);
          if (f === "__esModule") throw n.buildCodeFrameError('Illegal export "__esModule".');
          c.names.push(f);
        });
      } else if (s.isExportDefaultDeclaration()) {
        let r = s.get("declaration");
        if (r.isFunctionDeclaration() || r.isClassDeclaration()) l(r.get("id")).names.push("default");else throw r.buildCodeFrameError("Unexpected default expression export.");
      }
    }), a;
  }

  function Fe(e) {
    e.get("body").forEach(t => {
      !t.isExportDefaultDeclaration() || (0, Xe.default)(t);
    });
  }

  function Ue(e) {
    e.get("body").forEach(t => {
      if (t.isImportDeclaration()) t.remove();else if (t.isExportNamedDeclaration()) t.node.declaration ? (t.node.declaration._blockHoist = t.node._blockHoist, t.replaceWith(t.node.declaration)) : t.remove();else if (t.isExportDefaultDeclaration()) {
        let i = t.get("declaration");
        if (i.isFunctionDeclaration() || i.isClassDeclaration()) i._blockHoist = t.node._blockHoist, t.replaceWith(i);else throw i.buildCodeFrameError("Unexpected default expression export.");
      } else t.isExportAllDeclaration() && t.remove();
    });
  }
});

var ee = _(k => {
  "use strict";

  Object.defineProperty(k, "__esModule", {
    value: !0
  });
  k.default = q;
  {
    let e = q;

    k.default = q = function (i, u) {
      var a, l, s, r;
      return e(i, {
        moduleId: (a = u.moduleId) != null ? a : i.moduleId,
        moduleIds: (l = u.moduleIds) != null ? l : i.moduleIds,
        getModuleId: (s = u.getModuleId) != null ? s : i.getModuleId,
        moduleRoot: (r = u.moduleRoot) != null ? r : i.moduleRoot
      });
    };
  }

  function q(e, t) {
    let {
      filename: i,
      filenameRelative: u = i,
      sourceRoot: a = t.moduleRoot
    } = e,
        {
      moduleId: l,
      moduleIds: s = !!l,
      getModuleId: r,
      moduleRoot: o = a
    } = t;
    if (!s) return null;
    if (l != null && !r) return l;
    let n = o != null ? o + "/" : "";

    if (u) {
      let c = a != null ? new RegExp("^" + a + "/?") : "";
      n += u.replace(c, "").replace(/\.(\w*?)$/, "");
    }

    return n = n.replace(/\\/g, "/"), r && r(n) || n;
  }
});

var ie = _(g => {
  "use strict";

  Object.defineProperty(g, "__esModule", {
    value: !0
  });
  g.buildNamespaceInitStatements = lt;
  g.ensureStatementsHoisted = it;
  Object.defineProperty(g, "getModuleName", {
    enumerable: !0,
    get: function () {
      return Ke.default;
    }
  });
  Object.defineProperty(g, "hasExports", {
    enumerable: !0,
    get: function () {
      return A.hasExports;
    }
  });
  Object.defineProperty(g, "isModule", {
    enumerable: !0,
    get: function () {
      return oe.isModule;
    }
  });
  Object.defineProperty(g, "isSideEffectImport", {
    enumerable: !0,
    get: function () {
      return A.isSideEffectImport;
    }
  });
  g.rewriteModuleStatementsAndPrepareHeader = st;
  Object.defineProperty(g, "rewriteThis", {
    enumerable: !0,
    get: function () {
      return ne.default;
    }
  });
  g.wrapInterop = at;
  var We = __assert$,
      $e = ___babel_types$,
      E = ___babel_template$,
      oe = ___babel_helper_module_imports$,
      ne = V(),
      Ye = Y(),
      A = Z(),
      Ke = ee(),
      {
    booleanLiteral: Ge,
    callExpression: D,
    cloneNode: T,
    directive: Je,
    directiveLiteral: Qe,
    expressionStatement: Ze,
    identifier: v,
    isIdentifier: et,
    memberExpression: te,
    stringLiteral: tt,
    valueToNode: rt,
    variableDeclaration: ot,
    variableDeclarator: nt
  } = $e;

  function st(e, {
    loose: t,
    exportName: i,
    strict: u,
    allowTopLevelThis: a,
    strictMode: l,
    noInterop: s,
    importInterop: r = s ? "none" : "babel",
    lazy: o,
    esNamespaceOnly: n,
    filename: c,
    constantReexports: f = t,
    enumerableModuleMeta: d = t,
    noIncompleteNsImportDetection: p
  }) {
    (0, A.validateImportInteropOption)(r), We((0, oe.isModule)(e), "Cannot process module statements in a script"), e.node.sourceType = "script";
    let x = (0, A.default)(e, i, {
      importInterop: r,
      initializeReexports: f,
      lazy: o,
      esNamespaceOnly: n,
      filename: c
    });
    a || (0, ne.default)(e), (0, Ye.default)(e, x), l !== !1 && (e.node.directives.some(ue => ue.value.value === "use strict") || e.unshiftContainer("directives", Je(Qe("use strict"))));
    let O = [];
    (0, A.hasExports)(x) && !u && O.push(ut(x, d));
    let C = ft(e, x);
    return C && (x.exportNameListName = C.name, O.push(C.statement)), O.push(...dt(e, x, f, p)), {
      meta: x,
      headers: O
    };
  }

  function it(e) {
    e.forEach(t => {
      t._blockHoist = 3;
    });
  }

  function at(e, t, i) {
    if (i === "none") return null;
    if (i === "node-namespace") return D(e.hub.addHelper("interopRequireWildcard"), [t, Ge(!0)]);
    if (i === "node-default") return null;
    let u;
    if (i === "default") u = "interopRequireDefault";else if (i === "namespace") u = "interopRequireWildcard";else throw new Error(`Unknown interop: ${i}`);
    return D(e.hub.addHelper(u), [t]);
  }

  function lt(e, t, i = !1) {
    let u = [],
        a = v(t.name);
    t.lazy && (a = D(a, []));

    for (let l of t.importsNamespace) l !== t.name && u.push(E.default.statement`var NAME = SOURCE;`({
      NAME: l,
      SOURCE: T(a)
    }));

    i && u.push(...se(e, t, !0));

    for (let l of t.reexportNamespace) u.push((t.lazy ? E.default.statement`
            Object.defineProperty(EXPORTS, "NAME", {
              enumerable: true,
              get: function() {
                return NAMESPACE;
              }
            });
          ` : E.default.statement`EXPORTS.NAME = NAMESPACE;`)({
      EXPORTS: e.exportName,
      NAME: l,
      NAMESPACE: T(a)
    }));

    if (t.reexportAll) {
      let l = ct(e, T(a), i);
      l.loc = t.reexportAll.loc, u.push(l);
    }

    return u;
  }

  var X = {
    constant: E.default.statement`EXPORTS.EXPORT_NAME = NAMESPACE_IMPORT;`,
    constantComputed: E.default.statement`EXPORTS["EXPORT_NAME"] = NAMESPACE_IMPORT;`,
    spec: E.default.statement`
    Object.defineProperty(EXPORTS, "EXPORT_NAME", {
      enumerable: true,
      get: function() {
        return NAMESPACE_IMPORT;
      },
    });
    `
  },
      se = (e, t, i) => {
    let u = t.lazy ? D(v(t.name), []) : v(t.name),
        {
      stringSpecifiers: a
    } = e;
    return Array.from(t.reexports, ([l, s]) => {
      let r = T(u);
      s === "default" && t.interop === "node-default" || (a.has(s) ? r = te(r, tt(s), !0) : r = te(r, v(s)));
      let o = {
        EXPORTS: e.exportName,
        EXPORT_NAME: l,
        NAMESPACE_IMPORT: r
      };
      return i || et(r) ? a.has(l) ? X.constantComputed(o) : X.constant(o) : X.spec(o);
    });
  };

  function ut(e, t = !1) {
    return (t ? E.default.statement`
        EXPORTS.__esModule = true;
      ` : E.default.statement`
        Object.defineProperty(EXPORTS, "__esModule", {
          value: true,
        });
      `)({
      EXPORTS: e.exportName
    });
  }

  function ct(e, t, i) {
    return (i ? E.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          EXPORTS[key] = NAMESPACE[key];
        });
      ` : E.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          Object.defineProperty(EXPORTS, key, {
            enumerable: true,
            get: function() {
              return NAMESPACE[key];
            },
          });
        });
    `)({
      NAMESPACE: t,
      EXPORTS: e.exportName,
      VERIFY_NAME_LIST: e.exportNameListName ? (0, E.default)`
            if (Object.prototype.hasOwnProperty.call(EXPORTS_LIST, key)) return;
          `({
        EXPORTS_LIST: e.exportNameListName
      }) : null
    });
  }

  function ft(e, t) {
    let i = Object.create(null);

    for (let l of t.local.values()) for (let s of l.names) i[s] = !0;

    let u = !1;

    for (let l of t.source.values()) {
      for (let s of l.reexports.keys()) i[s] = !0;

      for (let s of l.reexportNamespace) i[s] = !0;

      u = u || !!l.reexportAll;
    }

    if (!u || Object.keys(i).length === 0) return null;
    let a = e.scope.generateUidIdentifier("exportNames");
    return delete i.default, {
      name: a.name,
      statement: ot("var", [nt(a, rt(i))])
    };
  }

  function dt(e, t, i = !1, u = !1) {
    let a = [];

    for (let [s, r] of t.local) if (r.kind !== "import") {
      if (r.kind === "hoisted") a.push([r.names[0], B(t, r.names, v(s))]);else if (!u) for (let o of r.names) a.push([o, null]);
    }

    for (let s of t.source.values()) {
      if (!i) {
        let r = se(t, s, !1),
            o = [...s.reexports.keys()];

        for (let n = 0; n < r.length; n++) a.push([o[n], r[n]]);
      }

      if (!u) for (let r of s.reexportNamespace) a.push([r, null]);
    }

    a.sort(([s], [r]) => s < r ? -1 : r < s ? 1 : 0);
    let l = [];
    if (u) for (let [, s] of a) l.push(s);else for (let r = 0; r < a.length; r += 100) {
      let o = [];

      for (let n = 0; n < 100 && r + n < a.length; n++) {
        let [c, f] = a[r + n];
        f !== null ? (o.length > 0 && (l.push(B(t, o, e.scope.buildUndefinedNode())), o = []), l.push(f)) : o.push(c);
      }

      o.length > 0 && l.push(B(t, o, e.scope.buildUndefinedNode()));
    }
    return l;
  }

  var re = {
    computed: E.default.expression`EXPORTS["NAME"] = VALUE`,
    default: E.default.expression`EXPORTS.NAME = VALUE`
  };

  function B(e, t, i) {
    let {
      stringSpecifiers: u,
      exportName: a
    } = e;
    return Ze(t.reduce((l, s) => {
      let r = {
        EXPORTS: a,
        NAME: s,
        VALUE: l
      };
      return u.has(s) ? re.computed(r) : re.default(r);
    }, i));
  }
});

var le = ge(ie()),
    _t = !0,
    {
  buildNamespaceInitStatements: It,
  ensureStatementsHoisted: yt,
  getModuleName: Mt,
  hasExports: At,
  isModule: vt,
  isSideEffectImport: Ot,
  rewriteModuleStatementsAndPrepareHeader: Pt,
  rewriteThis: wt,
  wrapInterop: Rt
} = le,
    {
  default: ae,
  ...pt
} = le,
    kt = ae !== void 0 ? ae : pt;

export { _t as __esModule, It as buildNamespaceInitStatements, kt as default, yt as ensureStatementsHoisted, Mt as getModuleName, At as hasExports, vt as isModule, Ot as isSideEffectImport, Pt as rewriteModuleStatementsAndPrepareHeader, wt as rewriteThis, Rt as wrapInterop };