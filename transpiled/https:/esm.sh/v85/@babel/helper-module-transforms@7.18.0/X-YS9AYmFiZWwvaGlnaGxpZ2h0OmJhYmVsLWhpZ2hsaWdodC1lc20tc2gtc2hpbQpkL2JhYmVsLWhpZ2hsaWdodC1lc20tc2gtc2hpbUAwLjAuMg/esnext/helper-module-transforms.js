/* esm.sh - esbuild bundle(@babel/helper-module-transforms@7.18.0) esnext production */
import * as ___babel_helper_split_export_declaration$$ from "/transpiled/https://esm.sh/v85/@babel/helper-split-export-declaration@7.16.7/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-split-export-declaration.js";

const ___babel_helper_split_export_declaration$ = Object.assign({
  __esModule: true
}, ___babel_helper_split_export_declaration$$);

import * as ___babel_helper_environment_visitor$$ from "/transpiled/https://esm.sh/v85/@babel/helper-environment-visitor@7.18.2/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-environment-visitor.js";

const ___babel_helper_environment_visitor$ = Object.assign({
  __esModule: true
}, ___babel_helper_environment_visitor$$);

import ___babel_helper_module_imports$ from "/transpiled/https://esm.sh/v85/@babel/helper-module-imports@7.16.7/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-module-imports.js";
import ___babel_types$ from "/transpiled/https://esm.sh/v85/@babel/types@7.18.4/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/types.js";
import __path$ from "/transpiled/https://esm.sh/v85/path-browserify@1.0.1/esnext/path-browserify.bundle.js";
import * as ___babel_helper_simple_access$$ from "/transpiled/https://esm.sh/v85/@babel/helper-simple-access@7.18.2/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-simple-access.js";

const ___babel_helper_simple_access$ = Object.assign({
  __esModule: true
}, ___babel_helper_simple_access$$);

import * as ___babel_traverse$$ from "/transpiled/https://esm.sh/v85/@babel/traverse@7.18.2/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/traverse.js";

const ___babel_traverse$ = Object.assign({
  __esModule: true
}, ___babel_traverse$$);

import * as ___babel_template$$ from "/transpiled/https://esm.sh/v85/@babel/template@7.16.7/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/template.js";

const ___babel_template$ = Object.assign({
  __esModule: true
}, ___babel_template$$);

import __assert$ from "/transpiled/https://esm.sh/v85/assert@2.0.0/esnext/assert.bundle.js";
import ___babel_helper_validator_identifier$ from "/transpiled/https://esm.sh/v85/@babel/helper-validator-identifier@7.16.7/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-validator-identifier.js";
var de = Object.create;
var h = Object.defineProperty;
var pe = Object.getOwnPropertyDescriptor;
var me = Object.getOwnPropertyNames;
var Ee = Object.getPrototypeOf,
    ge = Object.prototype.hasOwnProperty;

var p = (e, t) => h(e, "name", {
  value: t,
  configurable: !0
}),
    E = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (t, i) => (typeof require != "undefined" ? require : t)[i]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var y = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var xe = (e, t, i, l) => {
  if (t && typeof t == "object" || typeof t == "function") for (let a of me(t)) !ge.call(e, a) && a !== i && h(e, a, {
    get: () => t[a],
    enumerable: !(l = pe(t, a)) || l.enumerable
  });
  return e;
};

var z = (e, t, i) => (i = e != null ? de(Ee(e)) : {}, xe(t || !e || !e.__esModule ? h(i, "default", {
  value: e,
  enumerable: !0
}) : i, e));

var U = y(j => {
  "use strict";

  Object.defineProperty(j, "__esModule", {
    value: !0
  });
  j.default = ye;
  var be = ___babel_helper_environment_visitor$,
      F = ___babel_traverse$,
      Se = ___babel_types$,
      {
    numericLiteral: Ne,
    unaryExpression: Ie
  } = Se;

  function ye(e) {
    (0, F.default)(e.node, Object.assign({}, Me, {
      noScope: !0
    }));
  }

  p(ye, "rewriteThis");
  var Me = F.default.visitors.merge([be.default, {
    ThisExpression(e) {
      e.replaceWith(Ie("void", Ne(0), !0));
    }

  }]);
});
var J = y(q => {
  "use strict";

  Object.defineProperty(q, "__esModule", {
    value: !0
  });
  q.default = Le;
  var _e = __assert$,
      Ae = ___babel_types$,
      ve = ___babel_template$,
      Oe = ___babel_helper_simple_access$,
      {
    assignmentExpression: R,
    callExpression: $,
    cloneNode: M,
    expressionStatement: A,
    getOuterBindingIdentifiers: Pe,
    identifier: S,
    isMemberExpression: W,
    isVariableDeclaration: we,
    jsxIdentifier: Y,
    jsxMemberExpression: Re,
    memberExpression: K,
    numericLiteral: ke,
    sequenceExpression: _,
    stringLiteral: G,
    variableDeclaration: Te,
    variableDeclarator: De
  } = Ae;

  function Ce(e) {
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

  p(Ce, "isInType");

  function Le(e, t) {
    let i = new Map(),
        l = new Map(),
        a = p(r => {
      e.requeue(r);
    }, "requeueInParent");

    for (let [r, n] of t.source) {
      for (let [o, c] of n.imports) i.set(o, [r, c, null]);

      for (let o of n.importsNamespace) i.set(o, [r, null, o]);
    }

    for (let [r, n] of t.local) {
      let o = l.get(r);
      o || (o = [], l.set(r, o)), o.push(...n.names);
    }

    let u = {
      metadata: t,
      requeueInParent: a,
      scope: e.scope,
      exported: l
    };
    e.traverse(he, u), (0, Oe.default)(e, new Set([...Array.from(i.keys()), ...Array.from(l.keys())]), !1);
    let s = {
      seen: new WeakSet(),
      metadata: t,
      requeueInParent: a,
      scope: e.scope,
      imported: i,
      exported: l,
      buildImportReference: ([r, n, o], c) => {
        let f = t.source.get(r);
        if (o) return f.lazy && (c = $(c, [])), c;
        let d = S(f.name);
        if (f.lazy && (d = $(d, [])), n === "default" && f.interop === "node-default") return d;
        let m = t.stringSpecifiers.has(n);
        return K(d, m ? G(n) : S(n), m);
      }
    };
    e.traverse(je, s);
  }

  p(Le, "rewriteLiveReferences");
  var he = {
    Scope(e) {
      e.skip();
    },

    ClassDeclaration(e) {
      let {
        requeueInParent: t,
        exported: i,
        metadata: l
      } = this,
          {
        id: a
      } = e.node;
      if (!a) throw new Error("Expected class to have a name");
      let u = a.name,
          s = i.get(u) || [];

      if (s.length > 0) {
        let r = A(N(l, s, S(u)));
        r._blockHoist = e.node._blockHoist, t(e.insertAfter(r)[0]);
      }
    },

    VariableDeclaration(e) {
      let {
        requeueInParent: t,
        exported: i,
        metadata: l
      } = this;
      Object.keys(e.getOuterBindingIdentifiers()).forEach(a => {
        let u = i.get(a) || [];

        if (u.length > 0) {
          let s = A(N(l, u, S(a)));
          s._blockHoist = e.node._blockHoist, t(e.insertAfter(s)[0]);
        }
      });
    }

  },
      N = p((e, t, i) => (t || []).reduce((l, a) => {
    let {
      stringSpecifiers: u
    } = e,
        s = u.has(a);
    return R("=", K(S(e.exportName), s ? G(a) : S(a), s), l);
  }, i), "buildBindingExportAssignmentExpression"),
      w = p(e => ve.default.expression.ast`
    (function() {
      throw new Error('"' + '${e}' + '" is read-only.');
    })()
  `, "buildImportThrow"),
      je = {
    ReferencedIdentifier(e) {
      let {
        seen: t,
        buildImportReference: i,
        scope: l,
        imported: a,
        requeueInParent: u
      } = this;
      if (t.has(e.node)) return;
      t.add(e.node);
      let s = e.node.name,
          r = a.get(s);

      if (r) {
        if (Ce(e)) throw e.buildCodeFrameError(`Cannot transform the imported binding "${s}" since it's also used in a type annotation. Please strip type annotations using @babel/preset-typescript or @babel/preset-flow.`);
        let n = e.scope.getBinding(s);
        if (l.getBinding(s) !== n) return;
        let c = i(r, e.node);
        if (c.loc = e.node.loc, (e.parentPath.isCallExpression({
          callee: e.node
        }) || e.parentPath.isOptionalCallExpression({
          callee: e.node
        }) || e.parentPath.isTaggedTemplateExpression({
          tag: e.node
        })) && W(c)) e.replaceWith(_([ke(0), c]));else if (e.isJSXIdentifier() && W(c)) {
          let {
            object: f,
            property: d
          } = c;
          e.replaceWith(Re(Y(f.name), Y(d.name)));
        } else e.replaceWith(c);
        u(e), e.skip();
      }
    },

    UpdateExpression(e) {
      let {
        scope: t,
        seen: i,
        imported: l,
        exported: a,
        requeueInParent: u,
        buildImportReference: s
      } = this;
      if (i.has(e.node)) return;
      i.add(e.node);
      let r = e.get("argument");
      if (r.isMemberExpression()) return;
      let n = e.node;

      if (r.isIdentifier()) {
        let o = r.node.name;
        if (t.getBinding(o) !== e.scope.getBinding(o)) return;
        let c = a.get(o),
            f = l.get(o);
        if (c?.length > 0 || f) if (f) e.replaceWith(R(n.operator[0] + "=", s(f, r.node), w(o)));else if (n.prefix) e.replaceWith(N(this.metadata, c, M(n)));else {
          let d = t.generateDeclaredUidIdentifier(o);
          e.replaceWith(_([R("=", M(d), M(n)), N(this.metadata, c, S(o)), M(d)]));
        }
      }

      u(e), e.skip();
    },

    AssignmentExpression: {
      exit(e) {
        let {
          scope: t,
          seen: i,
          imported: l,
          exported: a,
          requeueInParent: u,
          buildImportReference: s
        } = this;
        if (i.has(e.node)) return;
        i.add(e.node);
        let r = e.get("left");
        if (!r.isMemberExpression()) if (r.isIdentifier()) {
          let n = r.node.name;
          if (t.getBinding(n) !== e.scope.getBinding(n)) return;
          let o = a.get(n),
              c = l.get(n);

          if (o?.length > 0 || c) {
            _e(e.node.operator === "=", "Path was not simplified");

            let f = e.node;
            c && (f.left = s(c, f.left), f.right = _([f.right, w(n)])), e.replaceWith(N(this.metadata, o, f)), u(e);
          }
        } else {
          let n = r.getOuterBindingIdentifiers(),
              o = Object.keys(n).filter(d => t.getBinding(d) === e.scope.getBinding(d)),
              c = o.find(d => l.has(d));
          c && (e.node.right = _([e.node.right, w(c)]));
          let f = [];

          if (o.forEach(d => {
            let m = a.get(d) || [];
            m.length > 0 && f.push(N(this.metadata, m, S(d)));
          }), f.length > 0) {
            let d = _(f);

            e.parentPath.isExpressionStatement() && (d = A(d), d._blockHoist = e.parentPath.node._blockHoist);
            let m = e.insertAfter(d)[0];
            u(m);
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
        left: l
      } = i,
          {
        exported: a,
        imported: u,
        scope: s
      } = this;

      if (!we(l)) {
        let r = !1,
            n,
            o = e.get("body").scope;

        for (let d of Object.keys(Pe(l))) s.getBinding(d) === t.getBinding(d) && (a.has(d) && (r = !0, o.hasOwnBinding(d) && o.rename(d)), u.has(d) && !n && (n = d));

        if (!r && !n) return;
        e.ensureBlock();
        let c = e.get("body"),
            f = t.generateUidIdentifierBasedOnNode(l);
        e.get("left").replaceWith(Te("let", [De(M(f))])), t.registerDeclaration(e.get("left")), r && c.unshiftContainer("body", A(R("=", l, f))), n && c.unshiftContainer("body", A(w(n)));
      }
    }

  };
});
var re = y(I => {
  "use strict";

  Object.defineProperty(I, "__esModule", {
    value: !0
  });
  I.default = Ve;
  I.hasExports = Be;
  I.isSideEffectImport = Z;
  I.validateImportInteropOption = ee;
  var Q = __path$,
      qe = ___babel_helper_validator_identifier$,
      Xe = ___babel_helper_split_export_declaration$;

  function Be(e) {
    return e.hasExports;
  }

  p(Be, "hasExports");

  function Z(e) {
    return e.imports.size === 0 && e.importsNamespace.size === 0 && e.reexports.size === 0 && e.reexportNamespace.size === 0 && !e.reexportAll;
  }

  p(Z, "isSideEffectImport");

  function ee(e) {
    if (typeof e != "function" && e !== "none" && e !== "babel" && e !== "node") throw new Error(`.importInterop must be one of "none", "babel", "node", or a function returning one of those values (received ${e}).`);
    return e;
  }

  p(ee, "validateImportInteropOption");

  function He(e, t, i) {
    return typeof e == "function" ? ee(e(t, i)) : e;
  }

  p(He, "resolveImportInterop");

  function Ve(e, t, {
    importInterop: i,
    initializeReexports: l = !1,
    lazy: a = !1,
    esNamespaceOnly: u = !1,
    filename: s
  }) {
    t || (t = e.scope.generateUidIdentifier("exports").name);
    let r = new Set();
    Ue(e);
    let {
      local: n,
      source: o,
      hasExports: c
    } = ze(e, {
      initializeReexports: l,
      lazy: a
    }, r);
    $e(e);

    for (let [, f] of o) {
      f.importsNamespace.size > 0 && (f.name = f.importsNamespace.values().next().value);
      let d = He(i, f.source, s);
      d === "none" ? f.interop = "none" : d === "node" && f.interop === "namespace" ? f.interop = "node-namespace" : d === "node" && f.interop === "default" ? f.interop = "node-default" : u && f.interop === "namespace" && (f.interop = "default");
    }

    return {
      exportName: t,
      exportNameListName: null,
      hasExports: c,
      local: n,
      source: o,
      stringSpecifiers: r
    };
  }

  p(Ve, "normalizeModuleAndLoadMetadata");

  function k(e, t) {
    if (e.isIdentifier()) return e.node.name;

    if (e.isStringLiteral()) {
      let i = e.node.value;
      return (0, qe.isIdentifierName)(i) || t.add(i), i;
    } else throw new Error(`Expected export specifier to be either Identifier or StringLiteral, got ${e.node.type}`);
  }

  p(k, "getExportSpecifierName");

  function te(e) {
    if (!e.isExportSpecifier()) throw e.isExportNamespaceSpecifier() ? e.buildCodeFrameError("Export namespace should be first transformed by `@babel/plugin-proposal-export-namespace-from`.") : e.buildCodeFrameError("Unexpected export specifier type");
  }

  p(te, "assertExportSpecifier");

  function ze(e, {
    lazy: t,
    initializeReexports: i
  }, l) {
    let a = Fe(e, i, l),
        u = new Map(),
        s = p(n => {
      let o = n.value,
          c = u.get(o);
      return c || (c = {
        name: e.scope.generateUidIdentifier((0, Q.basename)(o, (0, Q.extname)(o))).name,
        interop: "none",
        loc: null,
        imports: new Map(),
        importsNamespace: new Set(),
        reexports: new Map(),
        reexportNamespace: new Set(),
        reexportAll: null,
        lazy: !1,
        source: o
      }, u.set(o, c)), c;
    }, "getData"),
        r = !1;
    e.get("body").forEach(n => {
      if (n.isImportDeclaration()) {
        let o = s(n.node.source);
        o.loc || (o.loc = n.node.loc), n.get("specifiers").forEach(c => {
          if (c.isImportDefaultSpecifier()) {
            let f = c.get("local").node.name;
            o.imports.set(f, "default");
            let d = a.get(f);
            d && (a.delete(f), d.names.forEach(m => {
              o.reexports.set(m, "default");
            }));
          } else if (c.isImportNamespaceSpecifier()) {
            let f = c.get("local").node.name;
            o.importsNamespace.add(f);
            let d = a.get(f);
            d && (a.delete(f), d.names.forEach(m => {
              o.reexportNamespace.add(m);
            }));
          } else if (c.isImportSpecifier()) {
            let f = k(c.get("imported"), l),
                d = c.get("local").node.name;
            o.imports.set(d, f);
            let m = a.get(d);
            m && (a.delete(d), m.names.forEach(b => {
              o.reexports.set(b, f);
            }));
          }
        });
      } else if (n.isExportAllDeclaration()) {
        r = !0;
        let o = s(n.node.source);
        o.loc || (o.loc = n.node.loc), o.reexportAll = {
          loc: n.node.loc
        };
      } else if (n.isExportNamedDeclaration() && n.node.source) {
        r = !0;
        let o = s(n.node.source);
        o.loc || (o.loc = n.node.loc), n.get("specifiers").forEach(c => {
          te(c);
          let f = k(c.get("local"), l),
              d = k(c.get("exported"), l);
          if (o.reexports.set(d, f), d === "__esModule") throw c.get("exported").buildCodeFrameError('Illegal export "__esModule".');
        });
      } else (n.isExportNamedDeclaration() || n.isExportDefaultDeclaration()) && (r = !0);
    });

    for (let n of u.values()) {
      let o = !1,
          c = !1;
      n.importsNamespace.size > 0 && (o = !0, c = !0), n.reexportAll && (c = !0);

      for (let f of n.imports.values()) f === "default" ? o = !0 : c = !0;

      for (let f of n.reexports.values()) f === "default" ? o = !0 : c = !0;

      o && c ? n.interop = "namespace" : o && (n.interop = "default");
    }

    for (let [n, o] of u) if (t !== !1 && !(Z(o) || o.reexportAll)) if (t === !0) o.lazy = !/\./.test(n);else if (Array.isArray(t)) o.lazy = t.indexOf(n) !== -1;else if (typeof t == "function") o.lazy = t(n);else throw new Error(".lazy must be a boolean, string array, or function");

    return {
      hasExports: r,
      local: a,
      source: u
    };
  }

  p(ze, "getModuleMetadata");

  function Fe(e, t, i) {
    let l = new Map();
    e.get("body").forEach(s => {
      let r;
      if (s.isImportDeclaration()) r = "import";else {
        if (s.isExportDefaultDeclaration() && (s = s.get("declaration")), s.isExportNamedDeclaration()) {
          if (s.node.declaration) s = s.get("declaration");else if (t && s.node.source && s.get("source").isStringLiteral()) {
            s.get("specifiers").forEach(n => {
              te(n), l.set(n.get("local").node.name, "block");
            });
            return;
          }
        }

        if (s.isFunctionDeclaration()) r = "hoisted";else if (s.isClassDeclaration()) r = "block";else if (s.isVariableDeclaration({
          kind: "var"
        })) r = "var";else if (s.isVariableDeclaration()) r = "block";else return;
      }
      Object.keys(s.getOuterBindingIdentifiers()).forEach(n => {
        l.set(n, r);
      });
    });
    let a = new Map(),
        u = p(s => {
      let r = s.node.name,
          n = a.get(r);

      if (!n) {
        let o = l.get(r);
        if (o === void 0) throw s.buildCodeFrameError(`Exporting local "${r}", which is not declared.`);
        n = {
          names: [],
          kind: o
        }, a.set(r, n);
      }

      return n;
    }, "getLocalMetadata");
    return e.get("body").forEach(s => {
      if (s.isExportNamedDeclaration() && (t || !s.node.source)) {
        if (s.node.declaration) {
          let r = s.get("declaration"),
              n = r.getOuterBindingIdentifierPaths();
          Object.keys(n).forEach(o => {
            if (o === "__esModule") throw r.buildCodeFrameError('Illegal export "__esModule".');
            u(n[o]).names.push(o);
          });
        } else s.get("specifiers").forEach(r => {
          let n = r.get("local"),
              o = r.get("exported"),
              c = u(n),
              f = k(o, i);
          if (f === "__esModule") throw o.buildCodeFrameError('Illegal export "__esModule".');
          c.names.push(f);
        });
      } else if (s.isExportDefaultDeclaration()) {
        let r = s.get("declaration");
        if (r.isFunctionDeclaration() || r.isClassDeclaration()) u(r.get("id")).names.push("default");else throw r.buildCodeFrameError("Unexpected default expression export.");
      }
    }), a;
  }

  p(Fe, "getLocalExportMetadata");

  function Ue(e) {
    e.get("body").forEach(t => {
      !t.isExportDefaultDeclaration() || (0, Xe.default)(t);
    });
  }

  p(Ue, "nameAnonymousExports");

  function $e(e) {
    e.get("body").forEach(t => {
      if (t.isImportDeclaration()) t.remove();else if (t.isExportNamedDeclaration()) t.node.declaration ? (t.node.declaration._blockHoist = t.node._blockHoist, t.replaceWith(t.node.declaration)) : t.remove();else if (t.isExportDefaultDeclaration()) {
        let i = t.get("declaration");
        if (i.isFunctionDeclaration() || i.isClassDeclaration()) i._blockHoist = t.node._blockHoist, t.replaceWith(i);else throw i.buildCodeFrameError("Unexpected default expression export.");
      } else t.isExportAllDeclaration() && t.remove();
    });
  }

  p($e, "removeModuleDeclarations");
});
var oe = y(T => {
  "use strict";

  Object.defineProperty(T, "__esModule", {
    value: !0
  });
  T.default = X;
  {
    let e = X;
    T.default = X = p(function (i, l) {
      var a, u, s, r;
      return e(i, {
        moduleId: (a = l.moduleId) != null ? a : i.moduleId,
        moduleIds: (u = l.moduleIds) != null ? u : i.moduleIds,
        getModuleId: (s = l.getModuleId) != null ? s : i.getModuleId,
        moduleRoot: (r = l.moduleRoot) != null ? r : i.moduleRoot
      });
    }, "getModuleName");
  }

  function X(e, t) {
    let {
      filename: i,
      filenameRelative: l = i,
      sourceRoot: a = t.moduleRoot
    } = e,
        {
      moduleId: u,
      moduleIds: s = !!u,
      getModuleId: r,
      moduleRoot: n = a
    } = t;
    if (!s) return null;
    if (u != null && !r) return u;
    let o = n != null ? n + "/" : "";

    if (l) {
      let c = a != null ? new RegExp("^" + a + "/?") : "";
      o += l.replace(c, "").replace(/\.(\w*?)$/, "");
    }

    return o = o.replace(/\\/g, "/"), r && r(o) || o;
  }

  p(X, "getModuleName");
});
var V = y(x => {
  "use strict";

  Object.defineProperty(x, "__esModule", {
    value: !0
  });
  x.buildNamespaceInitStatements = ut;
  x.ensureStatementsHoisted = at;
  Object.defineProperty(x, "getModuleName", {
    enumerable: !0,
    get: function () {
      return Ge.default;
    }
  });
  Object.defineProperty(x, "hasExports", {
    enumerable: !0,
    get: function () {
      return v.hasExports;
    }
  });
  Object.defineProperty(x, "isModule", {
    enumerable: !0,
    get: function () {
      return ie.isModule;
    }
  });
  Object.defineProperty(x, "isSideEffectImport", {
    enumerable: !0,
    get: function () {
      return v.isSideEffectImport;
    }
  });
  x.rewriteModuleStatementsAndPrepareHeader = it;
  Object.defineProperty(x, "rewriteThis", {
    enumerable: !0,
    get: function () {
      return ae.default;
    }
  });
  x.wrapInterop = lt;
  var We = __assert$,
      Ye = ___babel_types$,
      g = ___babel_template$,
      ie = ___babel_helper_module_imports$,
      ae = U(),
      Ke = J(),
      v = re(),
      Ge = oe(),
      {
    booleanLiteral: Je,
    callExpression: C,
    cloneNode: D,
    directive: Qe,
    directiveLiteral: Ze,
    expressionStatement: et,
    identifier: O,
    isIdentifier: tt,
    memberExpression: ne,
    stringLiteral: rt,
    valueToNode: ot,
    variableDeclaration: nt,
    variableDeclarator: st
  } = Ye;

  function it(e, {
    loose: t,
    exportName: i,
    strict: l,
    allowTopLevelThis: a,
    strictMode: u,
    noInterop: s,
    importInterop: r = s ? "none" : "babel",
    lazy: n,
    esNamespaceOnly: o,
    filename: c,
    constantReexports: f = t,
    enumerableModuleMeta: d = t,
    noIncompleteNsImportDetection: m
  }) {
    (0, v.validateImportInteropOption)(r), We((0, ie.isModule)(e), "Cannot process module statements in a script"), e.node.sourceType = "script";
    let b = (0, v.default)(e, i, {
      importInterop: r,
      initializeReexports: f,
      lazy: n,
      esNamespaceOnly: o,
      filename: c
    });
    a || (0, ae.default)(e), (0, Ke.default)(e, b), u !== !1 && (e.node.directives.some(fe => fe.value.value === "use strict") || e.unshiftContainer("directives", Qe(Ze("use strict"))));
    let P = [];
    (0, v.hasExports)(b) && !l && P.push(ct(b, d));
    let L = dt(e, b);
    return L && (b.exportNameListName = L.name, P.push(L.statement)), P.push(...pt(e, b, f, m)), {
      meta: b,
      headers: P
    };
  }

  p(it, "rewriteModuleStatementsAndPrepareHeader");

  function at(e) {
    e.forEach(t => {
      t._blockHoist = 3;
    });
  }

  p(at, "ensureStatementsHoisted");

  function lt(e, t, i) {
    if (i === "none") return null;
    if (i === "node-namespace") return C(e.hub.addHelper("interopRequireWildcard"), [t, Je(!0)]);
    if (i === "node-default") return null;
    let l;
    if (i === "default") l = "interopRequireDefault";else if (i === "namespace") l = "interopRequireWildcard";else throw new Error(`Unknown interop: ${i}`);
    return C(e.hub.addHelper(l), [t]);
  }

  p(lt, "wrapInterop");

  function ut(e, t, i = !1) {
    let l = [],
        a = O(t.name);
    t.lazy && (a = C(a, []));

    for (let u of t.importsNamespace) u !== t.name && l.push(g.default.statement`var NAME = SOURCE;`({
      NAME: u,
      SOURCE: D(a)
    }));

    i && l.push(...le(e, t, !0));

    for (let u of t.reexportNamespace) l.push((t.lazy ? g.default.statement`
            Object.defineProperty(EXPORTS, "NAME", {
              enumerable: true,
              get: function() {
                return NAMESPACE;
              }
            });
          ` : g.default.statement`EXPORTS.NAME = NAMESPACE;`)({
      EXPORTS: e.exportName,
      NAME: u,
      NAMESPACE: D(a)
    }));

    if (t.reexportAll) {
      let u = ft(e, D(a), i);
      u.loc = t.reexportAll.loc, l.push(u);
    }

    return l;
  }

  p(ut, "buildNamespaceInitStatements");
  var B = {
    constant: g.default.statement`EXPORTS.EXPORT_NAME = NAMESPACE_IMPORT;`,
    constantComputed: g.default.statement`EXPORTS["EXPORT_NAME"] = NAMESPACE_IMPORT;`,
    spec: g.default.statement`
    Object.defineProperty(EXPORTS, "EXPORT_NAME", {
      enumerable: true,
      get: function() {
        return NAMESPACE_IMPORT;
      },
    });
    `
  },
      le = p((e, t, i) => {
    let l = t.lazy ? C(O(t.name), []) : O(t.name),
        {
      stringSpecifiers: a
    } = e;
    return Array.from(t.reexports, ([u, s]) => {
      let r = D(l);
      s === "default" && t.interop === "node-default" || (a.has(s) ? r = ne(r, rt(s), !0) : r = ne(r, O(s)));
      let n = {
        EXPORTS: e.exportName,
        EXPORT_NAME: u,
        NAMESPACE_IMPORT: r
      };
      return i || tt(r) ? a.has(u) ? B.constantComputed(n) : B.constant(n) : B.spec(n);
    });
  }, "buildReexportsFromMeta");

  function ct(e, t = !1) {
    return (t ? g.default.statement`
        EXPORTS.__esModule = true;
      ` : g.default.statement`
        Object.defineProperty(EXPORTS, "__esModule", {
          value: true,
        });
      `)({
      EXPORTS: e.exportName
    });
  }

  p(ct, "buildESModuleHeader");

  function ft(e, t, i) {
    return (i ? g.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          EXPORTS[key] = NAMESPACE[key];
        });
      ` : g.default.statement`
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
      VERIFY_NAME_LIST: e.exportNameListName ? (0, g.default)`
            if (Object.prototype.hasOwnProperty.call(EXPORTS_LIST, key)) return;
          `({
        EXPORTS_LIST: e.exportNameListName
      }) : null
    });
  }

  p(ft, "buildNamespaceReexport");

  function dt(e, t) {
    let i = Object.create(null);

    for (let u of t.local.values()) for (let s of u.names) i[s] = !0;

    let l = !1;

    for (let u of t.source.values()) {
      for (let s of u.reexports.keys()) i[s] = !0;

      for (let s of u.reexportNamespace) i[s] = !0;

      l = l || !!u.reexportAll;
    }

    if (!l || Object.keys(i).length === 0) return null;
    let a = e.scope.generateUidIdentifier("exportNames");
    return delete i.default, {
      name: a.name,
      statement: nt("var", [st(a, ot(i))])
    };
  }

  p(dt, "buildExportNameListDeclaration");

  function pt(e, t, i = !1, l = !1) {
    let a = [];

    for (let [s, r] of t.local) if (r.kind !== "import") {
      if (r.kind === "hoisted") a.push([r.names[0], H(t, r.names, O(s))]);else if (!l) for (let n of r.names) a.push([n, null]);
    }

    for (let s of t.source.values()) {
      if (!i) {
        let r = le(t, s, !1),
            n = [...s.reexports.keys()];

        for (let o = 0; o < r.length; o++) a.push([n[o], r[o]]);
      }

      if (!l) for (let r of s.reexportNamespace) a.push([r, null]);
    }

    a.sort(([s], [r]) => s < r ? -1 : r < s ? 1 : 0);
    let u = [];
    if (l) for (let [, s] of a) u.push(s);else for (let r = 0; r < a.length; r += 100) {
      let n = [];

      for (let o = 0; o < 100 && r + o < a.length; o++) {
        let [c, f] = a[r + o];
        f !== null ? (n.length > 0 && (u.push(H(t, n, e.scope.buildUndefinedNode())), n = []), u.push(f)) : n.push(c);
      }

      n.length > 0 && u.push(H(t, n, e.scope.buildUndefinedNode()));
    }
    return u;
  }

  p(pt, "buildExportInitializationStatements");
  var se = {
    computed: g.default.expression`EXPORTS["NAME"] = VALUE`,
    default: g.default.expression`EXPORTS.NAME = VALUE`
  };

  function H(e, t, i) {
    let {
      stringSpecifiers: l,
      exportName: a
    } = e;
    return et(t.reduce((u, s) => {
      let r = {
        EXPORTS: a,
        NAME: s,
        VALUE: u
      };
      return l.has(s) ? se.computed(r) : se.default(r);
    }, i));
  }

  p(H, "buildInitStatement");
});
var ue = z(V()),
    ce = z(V()),
    {
  __esModule: Mt,
  buildNamespaceInitStatements: _t,
  ensureStatementsHoisted: At,
  getModuleName: vt,
  hasExports: Ot,
  isModule: Pt,
  isSideEffectImport: wt,
  rewriteModuleStatementsAndPrepareHeader: Rt,
  rewriteThis: kt,
  wrapInterop: Tt
} = ce,
    {
  default: mt,
  ...Et
} = ce,
    Dt = ue.default ?? mt ?? Et;
export { Mt as __esModule, _t as buildNamespaceInitStatements, Dt as default, At as ensureStatementsHoisted, vt as getModuleName, Ot as hasExports, Pt as isModule, wt as isSideEffectImport, Rt as rewriteModuleStatementsAndPrepareHeader, kt as rewriteThis, Tt as wrapInterop };