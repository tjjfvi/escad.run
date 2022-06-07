/* esm.sh - esbuild bundle(@babel/plugin-transform-typescript@7.18.4) esnext production */
import __assert$ from "/transpiled/https://esm.sh/v85/assert@2.0.0/esnext/assert.bundle.js";
import ___babel_helper_create_class_features_plugin$ from "/transpiled/https://esm.sh/v85/@babel/helper-create-class-features-plugin@7.18.0/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-create-class-features-plugin.js";
import ___babel_core$ from "/transpiled/https://esm.sh/v85/@babel/core@7.18.2/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/core.js";
import * as ___babel_plugin_syntax_typescript$$ from "/transpiled/https://esm.sh/v85/@babel/plugin-syntax-typescript@7.17.12/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/plugin-syntax-typescript.js";

const ___babel_plugin_syntax_typescript$ = Object.assign({
  __esModule: true
}, ___babel_plugin_syntax_typescript$$);

import ___babel_helper_plugin_utils$ from "/transpiled/https://esm.sh/v85/@babel/helper-plugin-utils@7.17.12/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-plugin-utils.js";
var ne = Object.create;
var j = Object.defineProperty;
var ie = Object.getOwnPropertyDescriptor;
var te = Object.getOwnPropertyNames;
var se = Object.getPrototypeOf,
    oe = Object.prototype.hasOwnProperty;

var d = (r, n) => j(r, "name", {
  value: n,
  configurable: !0
}),
    M = (r => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(r, {
  get: (n, s) => (typeof require != "undefined" ? require : n)[s]
}) : r)(function (r) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + r + '" is not supported');
});

var C = (r, n) => () => (n || r((n = {
  exports: {}
}).exports, n), n.exports);

var ae = (r, n, s, l) => {
  if (n && typeof n == "object" || typeof n == "function") for (let c of te(n)) !oe.call(r, c) && c !== s && j(r, c, {
    get: () => n[c],
    enumerable: !(l = ie(n, c)) || l.enumerable
  });
  return r;
};

var J = (r, n, s) => (s = r != null ? ne(se(r)) : {}, ae(n || !r || !r.__esModule ? j(s, "default", {
  value: r,
  enumerable: !0
}) : s, r));

var R = C(_ => {
  "use strict";

  Object.defineProperty(_, "__esModule", {
    value: !0
  });
  _.default = ce;
  _.translateEnumValues = K;
  var B = ___babel_core$,
      le = __assert$;

  function ce(r, n) {
    let {
      node: s
    } = r;

    if (s.declare) {
      r.remove();
      return;
    }

    let l = s.id.name,
        c = ye(r, n, s.id);

    switch (r.parent.type) {
      case "BlockStatement":
      case "ExportNamedDeclaration":
      case "Program":
        {
          if (r.insertAfter(c), a(r.parentPath)) r.remove();else {
            let o = n.isProgram(r.parent);
            r.scope.registerDeclaration(r.replaceWith(de(s.id, n, o ? "var" : "let"))[0]);
          }
          break;
        }

      default:
        throw new Error(`Unexpected enum parent '${r.parent.type}`);
    }

    function a(o) {
      return o.isExportDeclaration() ? a(o.parentPath) : o.getData(l) ? !0 : (o.setData(l, !0), !1);
    }

    d(a, "seen");
  }

  d(ce, "transpileEnum");

  function de(r, n, s) {
    return n.variableDeclaration(s, [n.variableDeclarator(r)]);
  }

  d(de, "makeVar");
  var ue = (0, B.template)(`
  (function (ID) {
    ASSIGNMENTS;
  })(ID || (ID = {}));
`),
      fe = (0, B.template)(`
  ENUM["NAME"] = VALUE;
`),
      me = (0, B.template)(`
  ENUM[ENUM["NAME"] = VALUE] = "NAME";
`),
      pe = d((r, n) => (r ? fe : me)(n), "buildEnumMember");

  function ye(r, n, s) {
    let c = K(r, n).map(([a, o]) => pe(n.isStringLiteral(o), {
      ENUM: n.cloneNode(s),
      NAME: a,
      VALUE: o
    }));
    return ue({
      ID: n.cloneNode(s),
      ASSIGNMENTS: c
    });
  }

  d(ye, "enumFill");

  function G(r, n) {
    let {
      seen: s,
      path: l,
      t: c
    } = n,
        a = r.node.name;
    s.has(a) && !r.scope.hasOwnBinding(a) && (r.replaceWith(c.memberExpression(c.cloneNode(l.node.id), c.cloneNode(r.node))), r.skip());
  }

  d(G, "ReferencedIdentifier");
  var ge = {
    ReferencedIdentifier: G
  };

  function K(r, n) {
    let s = new Map(),
        l = -1,
        c;
    return r.get("members").map(a => {
      let o = a.node,
          t = n.isIdentifier(o.id) ? o.id.name : o.id.value,
          y = o.initializer,
          f;
      if (y) {
        if (l = be(y, s), l !== void 0) s.set(t, l), typeof l == "number" ? f = n.numericLiteral(l) : (le(typeof l == "string"), f = n.stringLiteral(l));else {
          let p = a.get("initializer");
          p.isReferencedIdentifier() ? G(p, {
            t: n,
            seen: s,
            path: r
          }) : p.traverse(ge, {
            t: n,
            seen: s,
            path: r
          }), f = p.node, s.set(t, void 0);
        }
      } else if (typeof l == "number") l += 1, f = n.numericLiteral(l), s.set(t, l);else {
        if (typeof l == "string") throw r.buildCodeFrameError("Enum member must have initializer.");
        {
          let p = n.memberExpression(n.cloneNode(r.node.id), n.stringLiteral(c), !0);
          f = n.binaryExpression("+", n.numericLiteral(1), p), s.set(t, void 0);
        }
      }
      return c = t, [t, f];
    });
  }

  d(K, "translateEnumValues");

  function be(r, n) {
    return s(r);

    function s(a) {
      switch (a.type) {
        case "StringLiteral":
          return a.value;

        case "UnaryExpression":
          return l(a);

        case "BinaryExpression":
          return c(a);

        case "NumericLiteral":
          return a.value;

        case "ParenthesizedExpression":
          return s(a.expression);

        case "Identifier":
          return n.get(a.name);

        case "TemplateLiteral":
          if (a.quasis.length === 1) return a.quasis[0].value.cooked;

        default:
          return;
      }
    }

    function l({
      argument: a,
      operator: o
    }) {
      let t = s(a);
      if (t !== void 0) switch (o) {
        case "+":
          return t;

        case "-":
          return -t;

        case "~":
          return ~t;

        default:
          return;
      }
    }

    function c(a) {
      let o = s(a.left);
      if (o === void 0) return;
      let t = s(a.right);
      if (t !== void 0) switch (a.operator) {
        case "|":
          return o | t;

        case "&":
          return o & t;

        case ">>":
          return o >> t;

        case ">>>":
          return o >>> t;

        case "<<":
          return o << t;

        case "^":
          return o ^ t;

        case "*":
          return o * t;

        case "/":
          return o / t;

        case "+":
          return o + t;

        case "-":
          return o - t;

        case "%":
          return o % t;

        default:
          return;
      }
    }
  }

  d(be, "evaluate");
});
var X = C(W => {
  "use strict";

  Object.defineProperty(W, "__esModule", {
    value: !0
  });
  W.default = ve;
  var Ee = R();

  function ve(r, n) {
    let {
      name: s
    } = r.node.id,
        l = r.parentPath.isExportNamedDeclaration(),
        c = l;
    !c && n.isProgram(r.parent) && (c = r.parent.body.some(t => n.isExportNamedDeclaration(t) && !t.source && t.specifiers.some(y => n.isExportSpecifier(y) && y.local.name === s)));
    let a = (0, Ee.translateEnumValues)(r, n);

    if (c) {
      let t = n.objectExpression(a.map(([y, f]) => n.objectProperty(n.isValidIdentifier(y) ? n.identifier(y) : n.stringLiteral(y), f)));
      r.scope.hasOwnBinding(s) ? (l ? r.parentPath : r).replaceWith(n.expressionStatement(n.callExpression(n.memberExpression(n.identifier("Object"), n.identifier("assign")), [r.node.id, t]))) : (r.replaceWith(n.variableDeclaration("var", [n.variableDeclarator(r.node.id, t)])), r.scope.registerDeclaration(r));
      return;
    }

    let o = new Map(a);
    r.scope.path.traverse({
      Scope(t) {
        t.scope.hasOwnBinding(s) && t.skip();
      },

      MemberExpression(t) {
        if (!n.isIdentifier(t.node.object, {
          name: s
        })) return;
        let y;
        if (t.node.computed) {
          if (n.isStringLiteral(t.node.property)) y = t.node.property.value;else return;
        } else if (n.isIdentifier(t.node.property)) y = t.node.property.name;else return;
        !o.has(y) || t.replaceWith(n.cloneNode(o.get(y)));
      }

    }), r.remove();
  }

  d(ve, "transpileConstEnum");
});
var H = C(O => {
  "use strict";

  Object.defineProperty(O, "__esModule", {
    value: !0
  });
  O.default = Se;
  var T = ___babel_core$;

  function Se(r, n, s) {
    if (r.node.declare || r.node.id.type === "StringLiteral") {
      r.remove();
      return;
    }

    if (!s) throw r.hub.file.buildCodeFrameError(r.node.id, "Namespace not marked type-only declare. Non-declarative namespaces are only supported experimentally in Babel. To enable and review caveats see: https://babeljs.io/docs/en/babel-plugin-transform-typescript");
    let l = r.node.id.name,
        c = q(r, n, n.cloneDeep(r.node)),
        a = r.scope.hasOwnBinding(l);
    r.parent.type === "ExportNamedDeclaration" ? a ? r.parentPath.replaceWith(c) : (r.parentPath.insertAfter(c), r.replaceWith(F(n, l)), r.scope.registerDeclaration(r.parentPath)) : a ? r.replaceWith(c) : r.scope.registerDeclaration(r.replaceWithMultiple([F(n, l), c])[0]);
  }

  d(Se, "transpileNamespace");

  function F(r, n) {
    return r.variableDeclaration("let", [r.variableDeclarator(r.identifier(n))]);
  }

  d(F, "getDeclaration");

  function V(r, n, s) {
    return r.memberExpression(r.identifier(n), r.identifier(s));
  }

  d(V, "getMemberExpression");

  function xe(r, n, s) {
    if (r.kind !== "const") throw s.file.buildCodeFrameError(r, "Namespaces exporting non-const are not supported by Babel. Change to const or see: https://babeljs.io/docs/en/babel-plugin-transform-typescript");
    let {
      declarations: l
    } = r;

    if (l.every(o => T.types.isIdentifier(o.id))) {
      for (let o of l) o.init = T.types.assignmentExpression("=", V(T.types, n, o.id.name), o.init);

      return [r];
    }

    let c = T.types.getBindingIdentifiers(r),
        a = [];

    for (let o in c) a.push(T.types.assignmentExpression("=", V(T.types, n, o), T.types.cloneNode(c[o])));

    return [r, T.types.expressionStatement(T.types.sequenceExpression(a))];
  }

  d(xe, "handleVariableDeclaration");

  function Q(r, n) {
    throw r.hub.buildError(n, "Ambient modules cannot be nested in other modules or namespaces.", Error);
  }

  d(Q, "buildNestedAmbiendModuleError");

  function q(r, n, s, l) {
    let c = new Set(),
        a = s.id;
    n.assertIdentifier(a);
    let o = r.scope.generateUid(a.name),
        t = n.isTSModuleBlock(s.body) ? s.body.body : [n.exportNamedDeclaration(s.body)];

    for (let f = 0; f < t.length; f++) {
      let p = t[f];

      switch (p.type) {
        case "TSModuleDeclaration":
          {
            if (!n.isIdentifier(p.id)) throw Q(r, p);
            let b = q(r, n, p),
                P = p.id.name;
            c.has(P) ? t[f] = b : (c.add(P), t.splice(f++, 1, F(n, P), b));
            continue;
          }

        case "TSEnumDeclaration":
        case "FunctionDeclaration":
        case "ClassDeclaration":
          c.add(p.id.name);
          continue;

        case "VariableDeclaration":
          {
            for (let b in n.getBindingIdentifiers(p)) c.add(b);

            continue;
          }

        default:
          continue;

        case "ExportNamedDeclaration":
      }

      switch (p.declaration.type) {
        case "TSEnumDeclaration":
        case "FunctionDeclaration":
        case "ClassDeclaration":
          {
            let b = p.declaration.id.name;
            c.add(b), t.splice(f++, 1, p.declaration, n.expressionStatement(n.assignmentExpression("=", V(n, o, b), n.identifier(b))));
            break;
          }

        case "VariableDeclaration":
          {
            let b = xe(p.declaration, o, r.hub);
            t.splice(f, b.length, ...b), f += b.length - 1;
            break;
          }

        case "TSModuleDeclaration":
          {
            if (!n.isIdentifier(p.declaration.id)) throw Q(r, p.declaration);
            let b = q(r, n, p.declaration, n.identifier(o)),
                P = p.declaration.id.name;
            c.has(P) ? t[f] = b : (c.add(P), t.splice(f++, 1, F(n, P), b));
          }
      }
    }

    let y = n.objectExpression([]);

    if (l) {
      let f = n.memberExpression(l, a);
      y = T.template.expression.ast`
      ${n.cloneNode(f)} ||
        (${n.cloneNode(f)} = ${y})
    `;
    }

    return T.template.statement.ast`
    (function (${n.identifier(o)}) {
      ${t}
    })(${a} || (${n.cloneNode(a)} = ${y}));
  `;
  }

  d(q, "handleNested");
});
var h = C(L => {
  "use strict";

  Object.defineProperty(L, "__esModule", {
    value: !0
  });
  L.default = void 0;
  var De = ___babel_helper_plugin_utils$,
      Te = ___babel_plugin_syntax_typescript$,
      g = ___babel_core$,
      Ne = ___babel_helper_create_class_features_plugin$,
      Pe = X(),
      Ie = R(),
      we = H();

  function Me(r) {
    switch (r.parent.type) {
      case "TSTypeReference":
      case "TSQualifiedName":
      case "TSExpressionWithTypeArguments":
      case "TSTypeQuery":
        return !0;

      case "ExportSpecifier":
        return r.parentPath.parent.exportKind === "type";

      default:
        return !1;
    }
  }

  d(Me, "isInType");
  var k = new WeakMap(),
      x = new WeakMap(),
      Y = new WeakSet();

  function U(r, n) {
    let s = r.find(l => l.isProgram()).node;
    return r.scope.hasOwnBinding(n) ? !1 : k.get(s).has(n) ? !0 : (console.warn(`The exported identifier "${n}" is not declared in Babel's scope tracker
as a JavaScript value binding, and "@babel/plugin-transform-typescript"
never encountered it as a TypeScript type declaration.
It will be treated as a JavaScript value.

This problem is likely caused by another plugin injecting
"${n}" without registering it in the scope tracker. If you are the author
 of that plugin, please use "scope.registerDeclaration(declarationPath)".`), !1);
  }

  d(U, "isGlobalType");

  function $(r, n) {
    k.get(r).add(n);
  }

  d($, "registerGlobalType");
  var Ae = (0, De.declare)((r, n) => {
    r.assertVersion(7);
    let s = /\*?\s*@jsx((?:Frag)?)\s+([^\s]+)/,
        {
      allowNamespaces: l = !0,
      jsxPragma: c = "React.createElement",
      jsxPragmaFrag: a = "React.Fragment",
      onlyRemoveTypeImports: o = !1,
      optimizeConstEnums: t = !1
    } = n;
    var {
      allowDeclareFields: y = !1
    } = n;
    let f = {
      field(e) {
        let {
          node: i
        } = e;
        if (!y && i.declare) throw e.buildCodeFrameError("The 'declare' modifier is only allowed when the 'allowDeclareFields' option of @babel/plugin-transform-typescript or @babel/preset-typescript is enabled.");

        if (i.declare) {
          if (i.value) throw e.buildCodeFrameError("Fields with the 'declare' modifier cannot be initialized here, but only in the constructor");
          i.decorators || e.remove();
        } else if (i.definite) {
          if (i.value) throw e.buildCodeFrameError("Definitely assigned fields cannot be initialized here, but only in the constructor");
          !y && !i.decorators && e.remove();
        } else !y && !i.value && !i.decorators && !g.types.isClassPrivateProperty(i) && e.remove();

        i.accessibility && (i.accessibility = null), i.abstract && (i.abstract = null), i.readonly && (i.readonly = null), i.optional && (i.optional = null), i.typeAnnotation && (i.typeAnnotation = null), i.definite && (i.definite = null), i.declare && (i.declare = null), i.override && (i.override = null);
      },

      method({
        node: e
      }) {
        e.accessibility && (e.accessibility = null), e.abstract && (e.abstract = null), e.optional && (e.optional = null), e.override && (e.override = null);
      },

      constructor(e, i) {
        e.node.accessibility && (e.node.accessibility = null);
        let m = [],
            {
          scope: A
        } = e;

        for (let D of e.get("params")) {
          let E = D.node;

          if (E.type === "TSParameterProperty") {
            let v = E.parameter;
            if (Y.has(v)) continue;
            Y.add(v);
            let I;
            if (g.types.isIdentifier(v)) I = v;else if (g.types.isAssignmentPattern(v) && g.types.isIdentifier(v.left)) I = v.left;else throw D.buildCodeFrameError("Parameter properties can not be destructuring patterns.");
            m.push(g.template.statement.ast`
          this.${g.types.cloneNode(I)} = ${g.types.cloneNode(I)}`), D.replaceWith(D.get("parameter")), A.registerBinding("param", D);
          }
        }

        (0, Ne.injectInitialization)(i, e, m);
      }

    };
    return {
      name: "transform-typescript",
      inherits: Te.default,
      visitor: {
        Pattern: b,
        Identifier: b,
        RestElement: b,
        Program: {
          enter(e, i) {
            let {
              file: m
            } = i,
                A = null,
                D = null,
                E = e.node;
            if (k.has(E) || k.set(E, new Set()), m.ast.comments) for (let u of m.ast.comments) {
              let S = s.exec(u.value);
              S && (S[1] ? D = S[2] : A = S[2]);
            }
            let v = A || c;
            v && ([v] = v.split("."));
            let I = D || a;
            I && ([I] = I.split("."));

            for (let u of e.get("body")) {
              if (u.isImportDeclaration()) {
                if (x.has(i.file.ast.program) || x.set(i.file.ast.program, !0), u.node.importKind === "type") {
                  for (let N of u.node.specifiers) $(E, N.local.name);

                  u.remove();
                  continue;
                }

                let S = new Set(),
                    z = u.node.specifiers.length,
                    re = d(() => z > 0 && z === S.size, "isAllSpecifiersElided");

                for (let N of u.node.specifiers) if (N.type === "ImportSpecifier" && N.importKind === "type") {
                  $(E, N.local.name);
                  let w = u.scope.getBinding(N.local.name);
                  w && S.add(w.path);
                }

                if (o) x.set(e.node, !1);else {
                  if (u.node.specifiers.length === 0) {
                    x.set(e.node, !1);
                    continue;
                  }

                  for (let N of u.node.specifiers) {
                    let w = u.scope.getBinding(N.local.name);
                    w && !S.has(w.path) && (P({
                      binding: w,
                      programPath: e,
                      pragmaImportName: v,
                      pragmaFragImportName: I
                    }) ? S.add(w.path) : x.set(e.node, !1));
                  }
                }
                if (re()) u.remove();else for (let N of S) N.remove();
                continue;
              }

              if (u.isExportDeclaration() && (u = u.get("declaration")), u.isVariableDeclaration({
                declare: !0
              })) for (let S of Object.keys(u.getBindingIdentifiers())) $(E, S);else (u.isTSTypeAliasDeclaration() || u.isTSDeclareFunction() && u.get("id").isIdentifier() || u.isTSInterfaceDeclaration() || u.isClassDeclaration({
                declare: !0
              }) || u.isTSEnumDeclaration({
                declare: !0
              }) || u.isTSModuleDeclaration({
                declare: !0
              }) && u.get("id").isIdentifier()) && $(E, u.node.id.name);
            }
          },

          exit(e) {
            e.node.sourceType === "module" && x.get(e.node) && e.pushContainer("body", g.types.exportNamedDeclaration());
          }

        },

        ExportNamedDeclaration(e, i) {
          if (x.has(i.file.ast.program) || x.set(i.file.ast.program, !0), e.node.exportKind === "type") {
            e.remove();
            return;
          }

          if (e.node.source && e.node.specifiers.length > 0 && e.node.specifiers.every(m => m.type === "ExportSpecifier" && m.exportKind === "type")) {
            e.remove();
            return;
          }

          if (!e.node.source && e.node.specifiers.length > 0 && e.node.specifiers.every(m => g.types.isExportSpecifier(m) && U(e, m.local.name))) {
            e.remove();
            return;
          }

          x.set(i.file.ast.program, !1);
        },

        ExportSpecifier(e) {
          (!e.parent.source && U(e, e.node.local.name) || e.node.exportKind === "type") && e.remove();
        },

        ExportDefaultDeclaration(e, i) {
          if (x.has(i.file.ast.program) || x.set(i.file.ast.program, !0), g.types.isIdentifier(e.node.declaration) && U(e, e.node.declaration.name)) {
            e.remove();
            return;
          }

          x.set(i.file.ast.program, !1);
        },

        TSDeclareFunction(e) {
          e.remove();
        },

        TSDeclareMethod(e) {
          e.remove();
        },

        VariableDeclaration(e) {
          e.node.declare && e.remove();
        },

        VariableDeclarator({
          node: e
        }) {
          e.definite && (e.definite = null);
        },

        TSIndexSignature(e) {
          e.remove();
        },

        ClassDeclaration(e) {
          let {
            node: i
          } = e;

          if (i.declare) {
            e.remove();
            return;
          }
        },

        Class(e) {
          let {
            node: i
          } = e;
          i.typeParameters && (i.typeParameters = null), i.superTypeParameters && (i.superTypeParameters = null), i.implements && (i.implements = null), i.abstract && (i.abstract = null), e.get("body.body").forEach(m => {
            m.isClassMethod() || m.isClassPrivateMethod() ? m.node.kind === "constructor" ? f.constructor(m, e) : f.method(m) : (m.isClassProperty() || m.isClassPrivateProperty()) && f.field(m);
          });
        },

        Function(e) {
          let {
            node: i
          } = e;
          i.typeParameters && (i.typeParameters = null), i.returnType && (i.returnType = null);
          let m = i.params;
          m.length > 0 && g.types.isIdentifier(m[0], {
            name: "this"
          }) && m.shift();
        },

        TSModuleDeclaration(e) {
          (0, we.default)(e, g.types, l);
        },

        TSInterfaceDeclaration(e) {
          e.remove();
        },

        TSTypeAliasDeclaration(e) {
          e.remove();
        },

        TSEnumDeclaration(e) {
          t && e.node.const ? (0, Pe.default)(e, g.types) : (0, Ie.default)(e, g.types);
        },

        TSImportEqualsDeclaration(e) {
          if (g.types.isTSExternalModuleReference(e.node.moduleReference)) throw e.buildCodeFrameError(`\`import ${e.node.id.name} = require('${e.node.moduleReference.expression.value}')\` is not supported by @babel/plugin-transform-typescript
Please consider using \`import ${e.node.id.name} from '${e.node.moduleReference.expression.value}';\` alongside Typescript's --allowSyntheticDefaultImports option.`);
          e.replaceWith(g.types.variableDeclaration("var", [g.types.variableDeclarator(e.node.id, p(e.node.moduleReference))]));
        },

        TSExportAssignment(e) {
          throw e.buildCodeFrameError("`export =` is not supported by @babel/plugin-transform-typescript\nPlease consider using `export <value>;`.");
        },

        TSTypeAssertion(e) {
          e.replaceWith(e.node.expression);
        },

        TSAsExpression(e) {
          let {
            node: i
          } = e;

          do i = i.expression; while (g.types.isTSAsExpression(i));

          e.replaceWith(i);
        },

        [r.types.tsInstantiationExpression ? "TSNonNullExpression|TSInstantiationExpression" : "TSNonNullExpression"](e) {
          e.replaceWith(e.node.expression);
        },

        CallExpression(e) {
          e.node.typeParameters = null;
        },

        OptionalCallExpression(e) {
          e.node.typeParameters = null;
        },

        NewExpression(e) {
          e.node.typeParameters = null;
        },

        JSXOpeningElement(e) {
          e.node.typeParameters = null;
        },

        TaggedTemplateExpression(e) {
          e.node.typeParameters = null;
        }

      }
    };

    function p(e) {
      return g.types.isTSQualifiedName(e) ? g.types.memberExpression(p(e.left), e.right) : e;
    }

    function b({
      node: e
    }) {
      e.typeAnnotation && (e.typeAnnotation = null), g.types.isIdentifier(e) && e.optional && (e.optional = null);
    }

    function P({
      binding: e,
      programPath: i,
      pragmaImportName: m,
      pragmaFragImportName: A
    }) {
      for (let E of e.referencePaths) if (!Me(E)) return !1;

      if (e.identifier.name !== m && e.identifier.name !== A) return !0;
      let D = !1;
      return i.traverse({
        "JSXElement|JSXFragment"(E) {
          D = !0, E.stop();
        }

      }), !D;
    }
  });
  L.default = Ae;
});
var Z = J(h()),
    ee = J(h()),
    {
  __esModule: Be
} = ee,
    {
  default: Ce,
  ..._e
} = ee,
    Re = Z.default ?? Ce ?? _e;
export { Be as __esModule, Re as default };