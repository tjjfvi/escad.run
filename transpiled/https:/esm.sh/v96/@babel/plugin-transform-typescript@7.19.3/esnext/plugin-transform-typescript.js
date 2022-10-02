/* esm.sh - esbuild bundle(@babel/plugin-transform-typescript@7.19.3) esnext production */
import __assert$ from "/transpiled/https://esm.sh/v96/assert@2.0.0/esnext/assert.bundle.js";
import ___babel_helper_create_class_features_plugin$ from "/transpiled/https://esm.sh/v96/@babel/helper-create-class-features-plugin@7.19.0/esnext/helper-create-class-features-plugin.js";
import ___babel_core$ from "/transpiled/https://esm.sh/v96/@babel/core@7.19.3/esnext/core.js";
import * as ___babel_plugin_syntax_typescript$ from "/transpiled/https://esm.sh/v96/@babel/plugin-syntax-typescript@7.18.6/esnext/plugin-syntax-typescript.js";
import ___babel_helper_plugin_utils$ from "/transpiled/https://esm.sh/v96/@babel/helper-plugin-utils@7.19.0/esnext/helper-plugin-utils.js";
var ee = Object.create;
var U = Object.defineProperty;
var re = Object.getOwnPropertyDescriptor;
var ne = Object.getOwnPropertyNames;
var ie = Object.getPrototypeOf,
    te = Object.prototype.hasOwnProperty;

var I = (r => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(r, {
  get: (n, t) => (typeof require < "u" ? require : n)[t]
}) : r)(function (r) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + r + '" is not supported');
});

var M = (r, n) => () => (n || r((n = {
  exports: {}
}).exports, n), n.exports);

var se = (r, n, t, a) => {
  if (n && typeof n == "object" || typeof n == "function") for (let c of ne(n)) !te.call(r, c) && c !== t && U(r, c, {
    get: () => n[c],
    enumerable: !(a = re(n, c)) || a.enumerable
  });
  return r;
};

var oe = (r, n, t) => (t = r != null ? ee(ie(r)) : {}, se(n || !r || !r.__esModule ? U(t, "default", {
  value: r,
  enumerable: !0
}) : t, r));

var L = M(A => {
  "use strict";

  Object.defineProperty(A, "__esModule", {
    value: !0
  });
  A.default = le;
  A.translateEnumValues = J;
  var j = ___babel_core$,
      ae = __assert$;

  function le(r, n) {
    let {
      node: t
    } = r;

    if (t.declare) {
      r.remove();
      return;
    }

    let a = t.id.name,
        c = me(r, n, t.id);

    switch (r.parent.type) {
      case "BlockStatement":
      case "ExportNamedDeclaration":
      case "Program":
        {
          if (r.insertAfter(c), l(r.parentPath)) r.remove();else {
            let s = n.isProgram(r.parent);
            r.scope.registerDeclaration(r.replaceWith(ce(t.id, n, s ? "var" : "let"))[0]);
          }
          break;
        }

      default:
        throw new Error(`Unexpected enum parent '${r.parent.type}`);
    }

    function l(s) {
      return s.isExportDeclaration() ? l(s.parentPath) : s.getData(a) ? !0 : (s.setData(a, !0), !1);
    }
  }

  function ce(r, n, t) {
    return n.variableDeclaration(t, [n.variableDeclarator(r)]);
  }

  var de = (0, j.template)(`
  (function (ID) {
    ASSIGNMENTS;
  })(ID || (ID = {}));
`),
      ue = (0, j.template)(`
  ENUM["NAME"] = VALUE;
`),
      fe = (0, j.template)(`
  ENUM[ENUM["NAME"] = VALUE] = "NAME";
`),
      pe = (r, n) => (r ? ue : fe)(n);

  function me(r, n, t) {
    let c = J(r, n).map(([l, s]) => pe(n.isStringLiteral(s), {
      ENUM: n.cloneNode(t),
      NAME: l,
      VALUE: s
    }));
    return de({
      ID: n.cloneNode(t),
      ASSIGNMENTS: c
    });
  }

  function z(r, n) {
    let {
      seen: t,
      path: a,
      t: c
    } = n,
        l = r.node.name;
    t.has(l) && !r.scope.hasOwnBinding(l) && (r.replaceWith(c.memberExpression(c.cloneNode(a.node.id), c.cloneNode(r.node))), r.skip());
  }

  var ye = {
    ReferencedIdentifier: z
  };

  function J(r, n) {
    let t = new Map(),
        a = -1,
        c;
    return r.get("members").map(l => {
      let s = l.node,
          o = n.isIdentifier(s.id) ? s.id.name : s.id.value,
          d = s.initializer,
          f;
      if (d) {
        if (a = ge(d, t), a !== void 0) t.set(o, a), typeof a == "number" ? f = n.numericLiteral(a) : (ae(typeof a == "string"), f = n.stringLiteral(a));else {
          let y = l.get("initializer");
          y.isReferencedIdentifier() ? z(y, {
            t: n,
            seen: t,
            path: r
          }) : y.traverse(ye, {
            t: n,
            seen: t,
            path: r
          }), f = y.node, t.set(o, void 0);
        }
      } else if (typeof a == "number") a += 1, f = n.numericLiteral(a), t.set(o, a);else {
        if (typeof a == "string") throw r.buildCodeFrameError("Enum member must have initializer.");
        {
          let y = n.memberExpression(n.cloneNode(r.node.id), n.stringLiteral(c), !0);
          f = n.binaryExpression("+", n.numericLiteral(1), y), t.set(o, void 0);
        }
      }
      return c = o, [o, f];
    });
  }

  function ge(r, n) {
    return t(r);

    function t(l) {
      switch (l.type) {
        case "StringLiteral":
          return l.value;

        case "UnaryExpression":
          return a(l);

        case "BinaryExpression":
          return c(l);

        case "NumericLiteral":
          return l.value;

        case "ParenthesizedExpression":
          return t(l.expression);

        case "Identifier":
          return n.get(l.name);

        case "TemplateLiteral":
          if (l.quasis.length === 1) return l.quasis[0].value.cooked;

        default:
          return;
      }
    }

    function a({
      argument: l,
      operator: s
    }) {
      let o = t(l);
      if (o !== void 0) switch (s) {
        case "+":
          return o;

        case "-":
          return -o;

        case "~":
          return ~o;

        default:
          return;
      }
    }

    function c(l) {
      let s = t(l.left);
      if (s === void 0) return;
      let o = t(l.right);
      if (o !== void 0) switch (l.operator) {
        case "|":
          return s | o;

        case "&":
          return s & o;

        case ">>":
          return s >> o;

        case ">>>":
          return s >>> o;

        case "<<":
          return s << o;

        case "^":
          return s ^ o;

        case "*":
          return s * o;

        case "/":
          return s / o;

        case "+":
          return s + o;

        case "-":
          return s - o;

        case "%":
          return s % o;

        default:
          return;
      }
    }
  }
});
var h = M(R => {
  "use strict";

  Object.defineProperty(R, "__esModule", {
    value: !0
  });
  R.default = Ee;
  var be = L();

  function Ee(r, n) {
    let {
      name: t
    } = r.node.id,
        a = r.parentPath.isExportNamedDeclaration(),
        c = a;
    !c && n.isProgram(r.parent) && (c = r.parent.body.some(o => n.isExportNamedDeclaration(o) && o.exportKind !== "type" && !o.source && o.specifiers.some(d => n.isExportSpecifier(d) && d.exportKind !== "type" && d.local.name === t)));
    let l = (0, be.translateEnumValues)(r, n);

    if (c) {
      let o = n.objectExpression(l.map(([d, f]) => n.objectProperty(n.isValidIdentifier(d) ? n.identifier(d) : n.stringLiteral(d), f)));
      r.scope.hasOwnBinding(t) ? (a ? r.parentPath : r).replaceWith(n.expressionStatement(n.callExpression(n.memberExpression(n.identifier("Object"), n.identifier("assign")), [r.node.id, o]))) : (r.replaceWith(n.variableDeclaration("var", [n.variableDeclarator(r.node.id, o)])), r.scope.registerDeclaration(r));
      return;
    }

    let s = new Map(l);
    r.scope.path.traverse({
      Scope(o) {
        o.scope.hasOwnBinding(t) && o.skip();
      },

      MemberExpression(o) {
        if (!n.isIdentifier(o.node.object, {
          name: t
        })) return;
        let d;
        if (o.node.computed) {
          if (n.isStringLiteral(o.node.property)) d = o.node.property.value;else return;
        } else if (n.isIdentifier(o.node.property)) d = o.node.property.name;else return;
        !s.has(d) || o.replaceWith(n.cloneNode(s.get(d)));
      }

    }), r.remove();
  }
});
var K = M(q => {
  "use strict";

  Object.defineProperty(q, "__esModule", {
    value: !0
  });
  q.default = ve;
  var u = ___babel_core$;

  function ve(r, n) {
    if (r.node.declare || r.node.id.type === "StringLiteral") {
      r.remove();
      return;
    }

    if (!n) throw r.get("id").buildCodeFrameError("Namespace not marked type-only declare. Non-declarative namespaces are only supported experimentally in Babel. To enable and review caveats see: https://babeljs.io/docs/en/babel-plugin-transform-typescript");
    let t = r.node.id.name,
        a = V(r, u.types.cloneNode(r.node, !0)),
        c = r.scope.hasOwnBinding(t);
    r.parent.type === "ExportNamedDeclaration" ? c ? r.parentPath.replaceWith(a) : (r.parentPath.insertAfter(a), r.replaceWith(_(t)), r.scope.registerDeclaration(r.parentPath)) : c ? r.replaceWith(a) : r.scope.registerDeclaration(r.replaceWithMultiple([_(t), a])[0]);
  }

  function _(r) {
    return u.types.variableDeclaration("let", [u.types.variableDeclarator(u.types.identifier(r))]);
  }

  function W(r, n) {
    return u.types.memberExpression(u.types.identifier(r), u.types.identifier(n));
  }

  function Se(r, n, t) {
    if (r.kind !== "const") throw t.file.buildCodeFrameError(r, "Namespaces exporting non-const are not supported by Babel. Change to const or see: https://babeljs.io/docs/en/babel-plugin-transform-typescript");
    let {
      declarations: a
    } = r;

    if (a.every(s => u.types.isIdentifier(s.id))) {
      for (let s of a) s.init = u.types.assignmentExpression("=", W(n, s.id.name), s.init);

      return [r];
    }

    let c = u.types.getBindingIdentifiers(r),
        l = [];

    for (let s in c) l.push(u.types.assignmentExpression("=", W(n, s), u.types.cloneNode(c[s])));

    return [r, u.types.expressionStatement(u.types.sequenceExpression(l))];
  }

  function G(r, n) {
    throw r.hub.buildError(n, "Ambient modules cannot be nested in other modules or namespaces.", Error);
  }

  function V(r, n, t) {
    let a = new Set(),
        c = n.id;
    u.types.assertIdentifier(c);
    let l = r.scope.generateUid(c.name),
        s = u.types.isTSModuleBlock(n.body) ? n.body.body : [u.types.exportNamedDeclaration(n.body)];

    for (let d = 0; d < s.length; d++) {
      let f = s[d];

      switch (f.type) {
        case "TSModuleDeclaration":
          {
            if (!u.types.isIdentifier(f.id)) throw G(r, f);
            let y = V(r, f),
                x = f.id.name;
            a.has(x) ? s[d] = y : (a.add(x), s.splice(d++, 1, _(x), y));
            continue;
          }

        case "TSEnumDeclaration":
        case "FunctionDeclaration":
        case "ClassDeclaration":
          a.add(f.id.name);
          continue;

        case "VariableDeclaration":
          {
            for (let y in u.types.getBindingIdentifiers(f)) a.add(y);

            continue;
          }

        default:
          continue;

        case "ExportNamedDeclaration":
      }

      if (!("declare" in f.declaration && f.declaration.declare)) switch (f.declaration.type) {
        case "TSEnumDeclaration":
        case "FunctionDeclaration":
        case "ClassDeclaration":
          {
            let y = f.declaration.id.name;
            a.add(y), s.splice(d++, 1, f.declaration, u.types.expressionStatement(u.types.assignmentExpression("=", W(l, y), u.types.identifier(y))));
            break;
          }

        case "VariableDeclaration":
          {
            let y = Se(f.declaration, l, r.hub);
            s.splice(d, y.length, ...y), d += y.length - 1;
            break;
          }

        case "TSModuleDeclaration":
          {
            if (!u.types.isIdentifier(f.declaration.id)) throw G(r, f.declaration);
            let y = V(r, f.declaration, u.types.identifier(l)),
                x = f.declaration.id.name;
            a.has(x) ? s[d] = y : (a.add(x), s.splice(d++, 1, _(x), y));
          }
      }
    }

    let o = u.types.objectExpression([]);

    if (t) {
      let d = u.types.memberExpression(t, c);
      o = u.template.expression.ast`
      ${u.types.cloneNode(d)} ||
        (${u.types.cloneNode(d)} = ${o})
    `;
    }

    return u.template.statement.ast`
    (function (${u.types.identifier(l)}) {
      ${s}
    })(${c} || (${u.types.cloneNode(c)} = ${o}));
  `;
  }
});
var Q = M(k => {
  "use strict";

  Object.defineProperty(k, "__esModule", {
    value: !0
  });
  k.default = void 0;
  var xe = ___babel_helper_plugin_utils$,
      Te = ___babel_plugin_syntax_typescript$,
      g = ___babel_core$,
      De = ___babel_helper_create_class_features_plugin$,
      Ne = h(),
      Pe = L(),
      Ie = K();

  function we(r) {
    switch (r.parent.type) {
      case "TSTypeReference":
      case "TSExpressionWithTypeArguments":
      case "TSTypeQuery":
        return !0;

      case "TSQualifiedName":
        return r.parentPath.findParent(n => n.type !== "TSQualifiedName").type !== "TSImportEqualsDeclaration";

      case "ExportSpecifier":
        return r.parentPath.parent.exportKind === "type";

      default:
        return !1;
    }
  }

  var B = new WeakMap(),
      S = new WeakMap(),
      X = new WeakSet();

  function $({
    scope: r
  }, n) {
    return r.hasBinding(n) ? !1 : B.get(r).has(n) ? !0 : (console.warn(`The exported identifier "${n}" is not declared in Babel's scope tracker
as a JavaScript value binding, and "@babel/plugin-transform-typescript"
never encountered it as a TypeScript type declaration.
It will be treated as a JavaScript value.

This problem is likely caused by another plugin injecting
"${n}" without registering it in the scope tracker. If you are the author
 of that plugin, please use "scope.registerDeclaration(declarationPath)".`), !1);
  }

  function C(r, n) {
    B.get(r).add(n);
  }

  function F(r) {
    let n = r.getBindingIdentifiers();

    for (let t of Object.keys(n)) {
      let a = r.scope.getBinding(t);
      a && a.identifier === n[t] && a.scope.removeBinding(t);
    }

    r.opts.noScope = !0, r.remove(), r.opts.noScope = !1;
  }

  var Me = (0, xe.declare)((r, n) => {
    r.assertVersion(7);
    let t = /\*?\s*@jsx((?:Frag)?)\s+([^\s]+)/,
        {
      allowNamespaces: a = !0,
      jsxPragma: c = "React.createElement",
      jsxPragmaFrag: l = "React.Fragment",
      onlyRemoveTypeImports: s = !1,
      optimizeConstEnums: o = !1
    } = n;
    var {
      allowDeclareFields: d = !1
    } = n;
    let f = {
      field(e) {
        let {
          node: i
        } = e;
        if (!d && i.declare) throw e.buildCodeFrameError("The 'declare' modifier is only allowed when the 'allowDeclareFields' option of @babel/plugin-transform-typescript or @babel/preset-typescript is enabled.");

        if (i.declare) {
          if (i.value) throw e.buildCodeFrameError("Fields with the 'declare' modifier cannot be initialized here, but only in the constructor");
          i.decorators || e.remove();
        } else if (i.definite) {
          if (i.value) throw e.buildCodeFrameError("Definitely assigned fields cannot be initialized here, but only in the constructor");
          !d && !i.decorators && !g.types.isClassPrivateProperty(i) && e.remove();
        } else !d && !i.value && !i.decorators && !g.types.isClassPrivateProperty(i) && e.remove();

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
          scope: w
        } = e;

        for (let T of e.get("params")) {
          let b = T.node;

          if (b.type === "TSParameterProperty") {
            let E = b.parameter;
            if (X.has(E)) continue;
            X.add(E);
            let N;
            if (g.types.isIdentifier(E)) N = E;else if (g.types.isAssignmentPattern(E) && g.types.isIdentifier(E.left)) N = E.left;else throw T.buildCodeFrameError("Parameter properties can not be destructuring patterns.");
            m.push(g.template.statement.ast`
          this.${g.types.cloneNode(N)} = ${g.types.cloneNode(N)}`), T.replaceWith(T.get("parameter")), w.registerBinding("param", T);
          }
        }

        (0, De.injectInitialization)(i, e, m);
      }

    };
    return {
      name: "transform-typescript",
      inherits: Te.default,
      visitor: {
        Pattern: x,
        Identifier: x,
        RestElement: x,
        Program: {
          enter(e, i) {
            let {
              file: m
            } = i,
                w = null,
                T = null,
                b = e.scope;
            if (B.has(b) || B.set(b, new Set()), m.ast.comments) for (let p of m.ast.comments) {
              let v = t.exec(p.value);
              v && (v[1] ? T = v[2] : w = v[2]);
            }
            let E = w || c;
            E && ([E] = E.split("."));
            let N = T || l;
            N && ([N] = N.split("."));

            for (let p of e.get("body")) {
              if (p.isImportDeclaration()) {
                if (S.has(i.file.ast.program) || S.set(i.file.ast.program, !0), p.node.importKind === "type") {
                  for (let D of p.node.specifiers) C(b, D.local.name);

                  p.remove();
                  continue;
                }

                let v = new Set(),
                    O = p.node.specifiers.length,
                    Z = () => O > 0 && O === v.size;

                for (let D of p.node.specifiers) if (D.type === "ImportSpecifier" && D.importKind === "type") {
                  C(b, D.local.name);
                  let P = p.scope.getBinding(D.local.name);
                  P && v.add(P.path);
                }

                if (s) S.set(e.node, !1);else {
                  if (p.node.specifiers.length === 0) {
                    S.set(e.node, !1);
                    continue;
                  }

                  for (let D of p.node.specifiers) {
                    let P = p.scope.getBinding(D.local.name);
                    P && !v.has(P.path) && (Y({
                      binding: P,
                      programPath: e,
                      pragmaImportName: E,
                      pragmaFragImportName: N
                    }) ? v.add(P.path) : S.set(e.node, !1));
                  }
                }
                if (Z()) p.remove();else for (let D of v) D.remove();
                continue;
              }

              if (p.isExportDeclaration() && (p = p.get("declaration")), p.isVariableDeclaration({
                declare: !0
              })) for (let v of Object.keys(p.getBindingIdentifiers())) C(b, v);else (p.isTSTypeAliasDeclaration() || p.isTSDeclareFunction() && p.get("id").isIdentifier() || p.isTSInterfaceDeclaration() || p.isClassDeclaration({
                declare: !0
              }) || p.isTSEnumDeclaration({
                declare: !0
              }) || p.isTSModuleDeclaration({
                declare: !0
              }) && p.get("id").isIdentifier()) && C(b, p.node.id.name);
            }
          },

          exit(e) {
            e.node.sourceType === "module" && S.get(e.node) && e.pushContainer("body", g.types.exportNamedDeclaration());
          }

        },

        ExportNamedDeclaration(e, i) {
          if (S.has(i.file.ast.program) || S.set(i.file.ast.program, !0), e.node.exportKind === "type") {
            e.remove();
            return;
          }

          if (e.node.source && e.node.specifiers.length > 0 && e.node.specifiers.every(m => m.type === "ExportSpecifier" && m.exportKind === "type")) {
            e.remove();
            return;
          }

          if (!e.node.source && e.node.specifiers.length > 0 && e.node.specifiers.every(m => g.types.isExportSpecifier(m) && $(e, m.local.name))) {
            e.remove();
            return;
          }

          S.set(i.file.ast.program, !1);
        },

        ExportSpecifier(e) {
          (!e.parent.source && $(e, e.node.local.name) || e.node.exportKind === "type") && e.remove();
        },

        ExportDefaultDeclaration(e, i) {
          if (S.has(i.file.ast.program) || S.set(i.file.ast.program, !0), g.types.isIdentifier(e.node.declaration) && $(e, e.node.declaration.name)) {
            e.remove();
            return;
          }

          S.set(i.file.ast.program, !1);
        },

        TSDeclareFunction(e) {
          F(e);
        },

        TSDeclareMethod(e) {
          F(e);
        },

        VariableDeclaration(e) {
          e.node.declare && F(e);
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
          i.declare && F(e);
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
          (0, Ie.default)(e, a);
        },

        TSInterfaceDeclaration(e) {
          e.remove();
        },

        TSTypeAliasDeclaration(e) {
          e.remove();
        },

        TSEnumDeclaration(e) {
          o && e.node.const ? (0, Ne.default)(e, g.types) : (0, Pe.default)(e, g.types);
        },

        TSImportEqualsDeclaration(e) {
          if (g.types.isTSExternalModuleReference(e.node.moduleReference)) throw e.buildCodeFrameError(`\`import ${e.node.id.name} = require('${e.node.moduleReference.expression.value}')\` is not supported by @babel/plugin-transform-typescript
Please consider using \`import ${e.node.id.name} from '${e.node.moduleReference.expression.value}';\` alongside Typescript's --allowSyntheticDefaultImports option.`);
          e.replaceWith(g.types.variableDeclaration("var", [g.types.variableDeclarator(e.node.id, y(e.node.moduleReference))]));
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

    function y(e) {
      return g.types.isTSQualifiedName(e) ? g.types.memberExpression(y(e.left), e.right) : e;
    }

    function x({
      node: e
    }) {
      e.typeAnnotation && (e.typeAnnotation = null), g.types.isIdentifier(e) && e.optional && (e.optional = null);
    }

    function Y({
      binding: e,
      programPath: i,
      pragmaImportName: m,
      pragmaFragImportName: w
    }) {
      for (let b of e.referencePaths) if (!we(b)) return !1;

      if (e.identifier.name !== m && e.identifier.name !== w) return !0;
      let T = !1;
      return i.traverse({
        "JSXElement|JSXFragment"(b) {
          T = !0, b.stop();
        }

      }), !T;
    }
  });
  k.default = Me;
});
var Ae = oe(Q()),
    Le = !0,
    {
  default: H,
  ..._e
} = Ae,
    Re = H !== void 0 ? H : _e;
export { Le as __esModule, Re as default };