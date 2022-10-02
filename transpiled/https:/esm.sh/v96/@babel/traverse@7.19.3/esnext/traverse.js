/* esm.sh - esbuild bundle(@babel/traverse@7.19.3) esnext production */
var __global$ = globalThis || (typeof window !== "undefined" ? window : self);

import * as ___babel_code_frame$ from "/transpiled/https://esm.sh/v96/@babel/code-frame@7.18.6/esnext/code-frame.js";
import * as ___babel_helper_split_export_declaration$ from "/transpiled/https://esm.sh/v96/@babel/helper-split-export-declaration@7.18.6/esnext/helper-split-export-declaration.js";
import __globals$ from "/transpiled/https://esm.sh/v96/globals@11.12.0/esnext/globals.js";
import * as ___babel_generator$ from "/transpiled/https://esm.sh/v96/@babel/generator@7.19.3/esnext/generator.js";
import __debug$ from "/transpiled/https://esm.sh/v96/debug@4.3.4/esnext/debug.js";
import ___babel_types$ from "/transpiled/https://esm.sh/v96/@babel/types@7.19.3/esnext/types.js";
import ___babel_parser$ from "/transpiled/https://esm.sh/v96/@babel/parser@7.19.3/esnext/parser.js";
import * as ___babel_helper_function_name$ from "/transpiled/https://esm.sh/v96/@babel/helper-function-name@7.19.0/esnext/helper-function-name.js";
import * as ___babel_helper_hoist_variables$ from "/transpiled/https://esm.sh/v96/@babel/helper-hoist-variables@7.18.6/esnext/helper-hoist-variables.js";
import * as ___babel_helper_environment_visitor$ from "/transpiled/https://esm.sh/v96/@babel/helper-environment-visitor@7.18.9/esnext/helper-environment-visitor.js";
var Jn = Object.create;
var st = Object.defineProperty;
var Gn = Object.getOwnPropertyDescriptor;
var Qn = Object.getOwnPropertyNames;
var zn = Object.getPrototypeOf,
    Zn = Object.prototype.hasOwnProperty;

var d = (t => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(t, {
  get: (e, n) => (typeof require < "u" ? require : e)[n]
}) : t)(function (t) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});

var p = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);

var ei = (t, e, n, i) => {
  if (e && typeof e == "object" || typeof e == "function") for (let r of Qn(e)) !Zn.call(t, r) && r !== n && st(t, r, {
    get: () => e[r],
    enumerable: !(i = Gn(e, r)) || i.enumerable
  });
  return t;
};

var ti = (t, e, n) => (n = t != null ? Jn(zn(t)) : {}, ei(e || !t || !t.__esModule ? st(n, "default", {
  value: t,
  enumerable: !0
}) : n, t));

var we = p(f => {
  "use strict";

  Object.defineProperty(f, "__esModule", {
    value: !0
  });
  f.Var = f.User = f.Statement = f.SpreadProperty = f.Scope = f.RestProperty = f.ReferencedMemberExpression = f.ReferencedIdentifier = f.Referenced = f.Pure = f.NumericLiteralTypeAnnotation = f.Generated = f.ForAwaitStatement = f.Flow = f.Expression = f.ExistentialTypeParam = f.BlockScoped = f.BindingIdentifier = void 0;
  var ni = ["Identifier", "JSXIdentifier"];
  f.ReferencedIdentifier = ni;
  var ii = ["MemberExpression"];
  f.ReferencedMemberExpression = ii;
  var ri = ["Identifier"];
  f.BindingIdentifier = ri;
  var si = ["Statement"];
  f.Statement = si;
  var oi = ["Expression"];
  f.Expression = oi;
  var ai = ["Scopable", "Pattern"];
  f.Scope = ai;
  var ci = null;
  f.Referenced = ci;
  var ui = null;
  f.BlockScoped = ui;
  var li = ["VariableDeclaration"];
  f.Var = li;
  var fi = null;
  f.User = fi;
  var hi = null;
  f.Generated = hi;
  var di = null;
  f.Pure = di;
  var pi = ["Flow", "ImportDeclaration", "ExportDeclaration", "ImportSpecifier"];
  f.Flow = pi;
  var gi = ["RestElement"];
  f.RestProperty = gi;
  var yi = ["RestElement"];
  f.SpreadProperty = yi;
  var mi = ["ExistsTypeAnnotation"];
  f.ExistentialTypeParam = mi;
  var bi = ["NumberLiteralTypeAnnotation"];
  f.NumericLiteralTypeAnnotation = bi;
  var vi = ["ForOfStatement"];
  f.ForAwaitStatement = vi;
});
var Ae = p(z => {
  "use strict";

  Object.defineProperty(z, "__esModule", {
    value: !0
  });
  z.explode = ut;
  z.merge = ki;
  z.verify = lt;
  var ct = we(),
      xi = ___babel_types$,
      {
    DEPRECATED_KEYS: Ei,
    FLIPPED_ALIAS_KEYS: Si,
    TYPES: Pi
  } = xi;

  function _i(t) {
    return t in ct;
  }

  function ut(t) {
    if (t._exploded) return t;
    t._exploded = !0;

    for (let e of Object.keys(t)) {
      if (Y(e)) continue;
      let n = e.split("|");
      if (n.length === 1) continue;
      let i = t[e];
      delete t[e];

      for (let r of n) t[r] = i;
    }

    lt(t), delete t.__esModule, Ai(t), at(t);

    for (let e of Object.keys(t)) {
      if (Y(e) || !_i(e)) continue;
      let n = t[e];

      for (let r of Object.keys(n)) n[r] = Bi(e, n[r]);

      delete t[e];
      let i = ct[e];
      if (i !== null) for (let r of i) t[r] ? se(t[r], n) : t[r] = n;else se(t, n);
    }

    for (let e of Object.keys(t)) {
      if (Y(e)) continue;
      let n = t[e],
          i = Si[e],
          r = Ei[e];

      if (r && (console.trace(`Visitor defined for ${e} but it has been renamed to ${r}`), i = [r]), !!i) {
        delete t[e];

        for (let s of i) {
          let o = t[s];
          o ? se(o, n) : t[s] = Object.assign({}, n);
        }
      }
    }

    for (let e of Object.keys(t)) Y(e) || at(t[e]);

    return t;
  }

  function lt(t) {
    if (!t._verified) {
      if (typeof t == "function") throw new Error("You passed `traverse()` a function when it expected a visitor object, are you sure you didn't mean `{ enter: Function }`?");

      for (let e of Object.keys(t)) {
        if ((e === "enter" || e === "exit") && ot(e, t[e]), Y(e)) continue;
        if (Pi.indexOf(e) < 0) throw new Error(`You gave us a visitor for the node type ${e} but it's not a valid type`);
        let n = t[e];
        if (typeof n == "object") for (let i of Object.keys(n)) if (i === "enter" || i === "exit") ot(`${e}.${i}`, n[i]);else throw new Error(`You passed \`traverse()\` a visitor object with the property ${e} that has the invalid property ${i}`);
      }

      t._verified = !0;
    }
  }

  function ot(t, e) {
    let n = [].concat(e);

    for (let i of n) if (typeof i != "function") throw new TypeError(`Non-function found defined in ${t} with type ${typeof i}`);
  }

  function ki(t, e = [], n) {
    let i = {};

    for (let r = 0; r < t.length; r++) {
      let s = t[r],
          o = e[r];
      ut(s);

      for (let a of Object.keys(s)) {
        let c = s[a];
        (o || n) && (c = wi(c, o, n));
        let u = i[a] || (i[a] = {});
        se(u, c);
      }
    }

    return i;
  }

  function wi(t, e, n) {
    let i = {};

    for (let r of Object.keys(t)) {
      let s = t[r];
      !Array.isArray(s) || (s = s.map(function (o) {
        let a = o;
        return e && (a = function (c) {
          return o.call(e, c, e);
        }), n && (a = n(e.key, r, a)), a !== o && (a.toString = () => o.toString()), a;
      }), i[r] = s);
    }

    return i;
  }

  function Ai(t) {
    for (let e of Object.keys(t)) {
      if (Y(e)) continue;
      let n = t[e];
      typeof n == "function" && (t[e] = {
        enter: n
      });
    }
  }

  function at(t) {
    t.enter && !Array.isArray(t.enter) && (t.enter = [t.enter]), t.exit && !Array.isArray(t.exit) && (t.exit = [t.exit]);
  }

  function Bi(t, e) {
    let n = function (i) {
      if (i[`is${t}`]()) return e.apply(this, arguments);
    };

    return n.toString = () => e.toString(), n;
  }

  function Y(t) {
    return t[0] === "_" || t === "enter" || t === "exit" || t === "shouldSkip" || t === "denylist" || t === "noScope" || t === "skipKeys" || t === "blacklist";
  }

  function se(t, e) {
    for (let n of Object.keys(e)) t[n] = [].concat(t[n] || [], e[n]);
  }
});
var U = p(T => {
  "use strict";

  Object.defineProperty(T, "__esModule", {
    value: !0
  });
  T.clear = Ci;
  T.clearPath = dt;
  T.clearScope = pt;
  T.scope = T.path = void 0;
  var ft = new WeakMap();
  T.path = ft;
  var ht = new WeakMap();
  T.scope = ht;

  function Ci() {
    dt(), pt();
  }

  function dt() {
    T.path = ft = new WeakMap();
  }

  function pt() {
    T.scope = ht = new WeakMap();
  }
});
var yt = p(oe => {
  "use strict";

  Object.defineProperty(oe, "__esModule", {
    value: !0
  });
  oe.default = void 0;
  var Ti = ___babel_helper_split_export_declaration$,
      Oi = ___babel_types$,
      Ii = ___babel_helper_environment_visitor$,
      gt = {
    ReferencedIdentifier({
      node: t
    }, e) {
      t.name === e.oldName && (t.name = e.newName);
    },

    Scope(t, e) {
      t.scope.bindingIdentifierEquals(e.oldName, e.binding.identifier) || (t.skip(), t.isMethod() && (0, Ii.requeueComputedKeyAndDecorators)(t));
    },

    "AssignmentExpression|Declaration|VariableDeclarator"(t, e) {
      if (t.isVariableDeclaration()) return;
      let n = t.getOuterBindingIdentifiers();

      for (let i in n) i === e.oldName && (n[i].name = e.newName);
    }

  },
      Be = class {
    constructor(e, n, i) {
      this.newName = i, this.oldName = n, this.binding = e;
    }

    maybeConvertFromExportDeclaration(e) {
      let n = e.parentPath;

      if (!!n.isExportDeclaration()) {
        if (n.isExportDefaultDeclaration()) {
          let {
            declaration: i
          } = n.node;
          if (Oi.isDeclaration(i) && !i.id) return;
        }

        n.isExportAllDeclaration() || (0, Ti.default)(n);
      }
    }

    maybeConvertFromClassFunctionDeclaration(e) {
      return e;
    }

    maybeConvertFromClassFunctionExpression(e) {
      return e;
    }

    rename(e) {
      let {
        binding: n,
        oldName: i,
        newName: r
      } = this,
          {
        scope: s,
        path: o
      } = n,
          a = o.find(u => u.isDeclaration() || u.isFunctionExpression() || u.isClassExpression());
      a && a.getOuterBindingIdentifiers()[i] === n.identifier && this.maybeConvertFromExportDeclaration(a);
      let c = e || s.block;
      c?.type === "SwitchStatement" ? c.cases.forEach(u => {
        s.traverse(u, gt, this);
      }) : s.traverse(c, gt, this), e || (s.removeOwnBinding(i), s.bindings[r] = n, this.binding.identifier.name = r), a && (this.maybeConvertFromClassFunctionDeclaration(o), this.maybeConvertFromClassFunctionExpression(o));
    }

  };
  oe.default = Be;
});
var mt = p(ae => {
  "use strict";

  Object.defineProperty(ae, "__esModule", {
    value: !0
  });
  ae.default = void 0;
  var Ce = class {
    constructor({
      identifier: e,
      scope: n,
      path: i,
      kind: r
    }) {
      this.identifier = void 0, this.scope = void 0, this.path = void 0, this.kind = void 0, this.constantViolations = [], this.constant = !0, this.referencePaths = [], this.referenced = !1, this.references = 0, this.identifier = e, this.scope = n, this.path = i, this.kind = r, this.clearValue();
    }

    deoptValue() {
      this.clearValue(), this.hasDeoptedValue = !0;
    }

    setValue(e) {
      this.hasDeoptedValue || (this.hasValue = !0, this.value = e);
    }

    clearValue() {
      this.hasDeoptedValue = !1, this.hasValue = !1, this.value = null;
    }

    reassign(e) {
      this.constant = !1, this.constantViolations.indexOf(e) === -1 && this.constantViolations.push(e);
    }

    reference(e) {
      this.referencePaths.indexOf(e) === -1 && (this.referenced = !0, this.references++, this.referencePaths.push(e));
    }

    dereference() {
      this.references--, this.referenced = !!this.references;
    }

  };
  ae.default = Ce;
});
var Ie = p(le => {
  "use strict";

  Object.defineProperty(le, "__esModule", {
    value: !0
  });
  le.default = void 0;
  var Fi = yt(),
      Di = Z(),
      Ri = mt(),
      Ni = __globals$,
      Li = ___babel_types$,
      bt = U(),
      {
    NOT_LOCAL_BINDING: vt,
    callExpression: xt,
    cloneNode: Et,
    getBindingIdentifiers: Mi,
    identifier: X,
    isArrayExpression: St,
    isBinary: ji,
    isClass: qi,
    isClassBody: Vi,
    isClassDeclaration: Ui,
    isExportAllDeclaration: At,
    isExportDefaultDeclaration: Ki,
    isExportNamedDeclaration: Te,
    isFunctionDeclaration: Wi,
    isIdentifier: ce,
    isImportDeclaration: Pt,
    isLiteral: $i,
    isMethod: Hi,
    isModuleDeclaration: Yi,
    isModuleSpecifier: Xi,
    isNullLiteral: Ji,
    isObjectExpression: Gi,
    isProperty: Qi,
    isPureish: zi,
    isRegExpLiteral: Zi,
    isSuper: er,
    isTaggedTemplateExpression: tr,
    isTemplateLiteral: Bt,
    isThisExpression: _t,
    isUnaryExpression: nr,
    isVariableDeclaration: ir,
    matchesPattern: rr,
    memberExpression: Oe,
    numericLiteral: kt,
    toIdentifier: sr,
    unaryExpression: or,
    variableDeclaration: ar,
    variableDeclarator: cr,
    isRecordExpression: ur,
    isTupleExpression: lr,
    isObjectProperty: fr,
    isTopicReference: wt,
    isMetaProperty: hr,
    isPrivateName: dr
  } = Li;

  function g(t, e) {
    switch (t?.type) {
      default:
        if (Yi(t)) {
          if ((At(t) || Te(t) || Pt(t)) && t.source) g(t.source, e);else if ((Te(t) || Pt(t)) && t.specifiers && t.specifiers.length) for (let n of t.specifiers) g(n, e);else (Ki(t) || Te(t)) && t.declaration && g(t.declaration, e);
        } else Xi(t) ? g(t.local, e) : $i(t) && !Ji(t) && !Zi(t) && !Bt(t) && e.push(t.value);
        break;

      case "MemberExpression":
      case "OptionalMemberExpression":
      case "JSXMemberExpression":
        g(t.object, e), g(t.property, e);
        break;

      case "Identifier":
      case "JSXIdentifier":
        e.push(t.name);
        break;

      case "CallExpression":
      case "OptionalCallExpression":
      case "NewExpression":
        g(t.callee, e);
        break;

      case "ObjectExpression":
      case "ObjectPattern":
        for (let n of t.properties) g(n, e);

        break;

      case "SpreadElement":
      case "RestElement":
        g(t.argument, e);
        break;

      case "ObjectProperty":
      case "ObjectMethod":
      case "ClassProperty":
      case "ClassMethod":
      case "ClassPrivateProperty":
      case "ClassPrivateMethod":
        g(t.key, e);
        break;

      case "ThisExpression":
        e.push("this");
        break;

      case "Super":
        e.push("super");
        break;

      case "Import":
        e.push("import");
        break;

      case "DoExpression":
        e.push("do");
        break;

      case "YieldExpression":
        e.push("yield"), g(t.argument, e);
        break;

      case "AwaitExpression":
        e.push("await"), g(t.argument, e);
        break;

      case "AssignmentExpression":
        g(t.left, e);
        break;

      case "VariableDeclarator":
        g(t.id, e);
        break;

      case "FunctionExpression":
      case "FunctionDeclaration":
      case "ClassExpression":
      case "ClassDeclaration":
        g(t.id, e);
        break;

      case "PrivateName":
        g(t.id, e);
        break;

      case "ParenthesizedExpression":
        g(t.expression, e);
        break;

      case "UnaryExpression":
      case "UpdateExpression":
        g(t.argument, e);
        break;

      case "MetaProperty":
        g(t.meta, e), g(t.property, e);
        break;

      case "JSXElement":
        g(t.openingElement, e);
        break;

      case "JSXOpeningElement":
        g(t.name, e);
        break;

      case "JSXFragment":
        g(t.openingFragment, e);
        break;

      case "JSXOpeningFragment":
        e.push("Fragment");
        break;

      case "JSXNamespacedName":
        g(t.namespace, e), g(t.name, e);
        break;
    }
  }

  var ue = {
    ForStatement(t) {
      let e = t.get("init");

      if (e.isVar()) {
        let {
          scope: n
        } = t;
        (n.getFunctionParent() || n.getProgramParent()).registerBinding("var", e);
      }
    },

    Declaration(t) {
      if (t.isBlockScoped() || t.isImportDeclaration() || t.isExportDeclaration()) return;
      (t.scope.getFunctionParent() || t.scope.getProgramParent()).registerDeclaration(t);
    },

    ImportDeclaration(t) {
      t.scope.getBlockParent().registerDeclaration(t);
    },

    ReferencedIdentifier(t, e) {
      e.references.push(t);
    },

    ForXStatement(t, e) {
      let n = t.get("left");
      if (n.isPattern() || n.isIdentifier()) e.constantViolations.push(t);else if (n.isVar()) {
        let {
          scope: i
        } = t;
        (i.getFunctionParent() || i.getProgramParent()).registerBinding("var", n);
      }
    },

    ExportDeclaration: {
      exit(t) {
        let {
          node: e,
          scope: n
        } = t;
        if (At(e)) return;
        let i = e.declaration;

        if (Ui(i) || Wi(i)) {
          let r = i.id;
          if (!r) return;
          let s = n.getBinding(r.name);
          s?.reference(t);
        } else if (ir(i)) for (let r of i.declarations) for (let s of Object.keys(Mi(r))) {
          let o = n.getBinding(s);
          o?.reference(t);
        }
      }

    },

    LabeledStatement(t) {
      t.scope.getBlockParent().registerDeclaration(t);
    },

    AssignmentExpression(t, e) {
      e.assignments.push(t);
    },

    UpdateExpression(t, e) {
      e.constantViolations.push(t);
    },

    UnaryExpression(t, e) {
      t.node.operator === "delete" && e.constantViolations.push(t);
    },

    BlockScoped(t) {
      let e = t.scope;

      if (e.path === t && (e = e.parent), e.getBlockParent().registerDeclaration(t), t.isClassDeclaration() && t.node.id) {
        let r = t.node.id.name;
        t.scope.bindings[r] = t.scope.parent.getBinding(r);
      }
    },

    CatchClause(t) {
      t.scope.registerBinding("let", t);
    },

    Function(t) {
      let e = t.get("params");

      for (let n of e) t.scope.registerBinding("param", n);

      t.isFunctionExpression() && t.has("id") && !t.get("id").node[vt] && t.scope.registerBinding("local", t.get("id"), t);
    },

    ClassExpression(t) {
      t.has("id") && !t.get("id").node[vt] && t.scope.registerBinding("local", t);
    }

  },
      pr = 0,
      N = class {
    constructor(e) {
      this.uid = void 0, this.path = void 0, this.block = void 0, this.labels = void 0, this.inited = void 0, this.bindings = void 0, this.references = void 0, this.globals = void 0, this.uids = void 0, this.data = void 0, this.crawling = void 0;
      let {
        node: n
      } = e,
          i = bt.scope.get(n);
      if (i?.path === e) return i;
      bt.scope.set(n, this), this.uid = pr++, this.block = n, this.path = e, this.labels = new Map(), this.inited = !1;
    }

    get parent() {
      var e;
      let n,
          i = this.path;

      do {
        let r = i.key === "key" || i.listKey === "decorators";
        i = i.parentPath, r && i.isMethod() && (i = i.parentPath), i && i.isScope() && (n = i);
      } while (i && !n);

      return (e = n) == null ? void 0 : e.scope;
    }

    get parentBlock() {
      return this.path.parent;
    }

    get hub() {
      return this.path.hub;
    }

    traverse(e, n, i) {
      (0, Di.default)(e, n, this, i, this.path);
    }

    generateDeclaredUidIdentifier(e) {
      let n = this.generateUidIdentifier(e);
      return this.push({
        id: n
      }), Et(n);
    }

    generateUidIdentifier(e) {
      return X(this.generateUid(e));
    }

    generateUid(e = "temp") {
      e = sr(e).replace(/^_+/, "").replace(/[0-9]+$/g, "");
      let n,
          i = 1;

      do n = this._generateUid(e, i), i++; while (this.hasLabel(n) || this.hasBinding(n) || this.hasGlobal(n) || this.hasReference(n));

      let r = this.getProgramParent();
      return r.references[n] = !0, r.uids[n] = !0, n;
    }

    _generateUid(e, n) {
      let i = e;
      return n > 1 && (i += n), `_${i}`;
    }

    generateUidBasedOnNode(e, n) {
      let i = [];
      g(e, i);
      let r = i.join("$");
      return r = r.replace(/^_/, "") || n || "ref", this.generateUid(r.slice(0, 20));
    }

    generateUidIdentifierBasedOnNode(e, n) {
      return X(this.generateUidBasedOnNode(e, n));
    }

    isStatic(e) {
      if (_t(e) || er(e) || wt(e)) return !0;

      if (ce(e)) {
        let n = this.getBinding(e.name);
        return n ? n.constant : this.hasBinding(e.name);
      }

      return !1;
    }

    maybeGenerateMemoised(e, n) {
      if (this.isStatic(e)) return null;
      {
        let i = this.generateUidIdentifierBasedOnNode(e);
        return n ? i : (this.push({
          id: i
        }), Et(i));
      }
    }

    checkBlockScopedCollisions(e, n, i, r) {
      if (n === "param" || e.kind === "local") return;
      if (n === "let" || e.kind === "let" || e.kind === "const" || e.kind === "module" || e.kind === "param" && n === "const") throw this.hub.buildError(r, `Duplicate declaration "${i}"`, TypeError);
    }

    rename(e, n, i) {
      let r = this.getBinding(e);
      if (r) return n = n || this.generateUidIdentifier(e).name, new Fi.default(r, e, n).rename(i);
    }

    _renameFromMap(e, n, i, r) {
      e[n] && (e[i] = r, e[n] = null);
    }

    dump() {
      let e = "-".repeat(60);
      console.log(e);
      let n = this;

      do {
        console.log("#", n.block.type);

        for (let i of Object.keys(n.bindings)) {
          let r = n.bindings[i];
          console.log(" -", i, {
            constant: r.constant,
            references: r.references,
            violations: r.constantViolations.length,
            kind: r.kind
          });
        }
      } while (n = n.parent);

      console.log(e);
    }

    toArray(e, n, i) {
      if (ce(e)) {
        let o = this.getBinding(e.name);
        if (o != null && o.constant && o.path.isGenericType("Array")) return e;
      }

      if (St(e)) return e;
      if (ce(e, {
        name: "arguments"
      })) return xt(Oe(Oe(Oe(X("Array"), X("prototype")), X("slice")), X("call")), [e]);
      let r,
          s = [e];
      return n === !0 ? r = "toConsumableArray" : n ? (s.push(kt(n)), r = "slicedToArray") : r = "toArray", i && (s.unshift(this.hub.addHelper(r)), r = "maybeArrayLike"), xt(this.hub.addHelper(r), s);
    }

    hasLabel(e) {
      return !!this.getLabel(e);
    }

    getLabel(e) {
      return this.labels.get(e);
    }

    registerLabel(e) {
      this.labels.set(e.node.label.name, e);
    }

    registerDeclaration(e) {
      if (e.isLabeledStatement()) this.registerLabel(e);else if (e.isFunctionDeclaration()) this.registerBinding("hoisted", e.get("id"), e);else if (e.isVariableDeclaration()) {
        let n = e.get("declarations");

        for (let i of n) this.registerBinding(e.node.kind, i);
      } else if (e.isClassDeclaration()) {
        if (e.node.declare) return;
        this.registerBinding("let", e);
      } else if (e.isImportDeclaration()) {
        let n = e.get("specifiers");

        for (let i of n) this.registerBinding("module", i);
      } else if (e.isExportDeclaration()) {
        let n = e.get("declaration");
        (n.isClassDeclaration() || n.isFunctionDeclaration() || n.isVariableDeclaration()) && this.registerDeclaration(n);
      } else this.registerBinding("unknown", e);
    }

    buildUndefinedNode() {
      return or("void", kt(0), !0);
    }

    registerConstantViolation(e) {
      let n = e.getBindingIdentifiers();

      for (let i of Object.keys(n)) {
        let r = this.getBinding(i);
        r && r.reassign(e);
      }
    }

    registerBinding(e, n, i = n) {
      if (!e) throw new ReferenceError("no `kind`");

      if (n.isVariableDeclaration()) {
        let o = n.get("declarations");

        for (let a of o) this.registerBinding(e, a);

        return;
      }

      let r = this.getProgramParent(),
          s = n.getOuterBindingIdentifiers(!0);

      for (let o of Object.keys(s)) {
        r.references[o] = !0;

        for (let a of s[o]) {
          let c = this.getOwnBinding(o);

          if (c) {
            if (c.identifier === a) continue;
            this.checkBlockScopedCollisions(c, e, o, a);
          }

          c ? this.registerConstantViolation(i) : this.bindings[o] = new Ri.default({
            identifier: a,
            scope: this,
            path: i,
            kind: e
          });
        }
      }
    }

    addGlobal(e) {
      this.globals[e.name] = e;
    }

    hasUid(e) {
      let n = this;

      do if (n.uids[e]) return !0; while (n = n.parent);

      return !1;
    }

    hasGlobal(e) {
      let n = this;

      do if (n.globals[e]) return !0; while (n = n.parent);

      return !1;
    }

    hasReference(e) {
      return !!this.getProgramParent().references[e];
    }

    isPure(e, n) {
      if (ce(e)) {
        let o = this.getBinding(e.name);
        return o ? n ? o.constant : !0 : !1;
      } else {
        if (_t(e) || hr(e) || wt(e) || dr(e)) return !0;

        if (qi(e)) {
          var i;
          return e.superClass && !this.isPure(e.superClass, n) || ((i = e.decorators) == null ? void 0 : i.length) > 0 ? !1 : this.isPure(e.body, n);
        } else if (Vi(e)) {
          for (let o of e.body) if (!this.isPure(o, n)) return !1;

          return !0;
        } else {
          if (ji(e)) return this.isPure(e.left, n) && this.isPure(e.right, n);

          if (St(e) || lr(e)) {
            for (let o of e.elements) if (o !== null && !this.isPure(o, n)) return !1;

            return !0;
          } else if (Gi(e) || ur(e)) {
            for (let o of e.properties) if (!this.isPure(o, n)) return !1;

            return !0;
          } else if (Hi(e)) {
            var r;
            return !(e.computed && !this.isPure(e.key, n) || ((r = e.decorators) == null ? void 0 : r.length) > 0);
          } else if (Qi(e)) {
            var s;
            return !(e.computed && !this.isPure(e.key, n) || ((s = e.decorators) == null ? void 0 : s.length) > 0 || (fr(e) || e.static) && e.value !== null && !this.isPure(e.value, n));
          } else {
            if (nr(e)) return this.isPure(e.argument, n);
            if (tr(e)) return rr(e.tag, "String.raw") && !this.hasBinding("String", !0) && this.isPure(e.quasi, n);

            if (Bt(e)) {
              for (let o of e.expressions) if (!this.isPure(o, n)) return !1;

              return !0;
            } else return zi(e);
          }
        }
      }
    }

    setData(e, n) {
      return this.data[e] = n;
    }

    getData(e) {
      let n = this;

      do {
        let i = n.data[e];
        if (i != null) return i;
      } while (n = n.parent);
    }

    removeData(e) {
      let n = this;

      do n.data[e] != null && (n.data[e] = null); while (n = n.parent);
    }

    init() {
      this.inited || (this.inited = !0, this.crawl());
    }

    crawl() {
      let e = this.path;
      this.references = Object.create(null), this.bindings = Object.create(null), this.globals = Object.create(null), this.uids = Object.create(null), this.data = Object.create(null);
      let n = this.getProgramParent();
      if (n.crawling) return;
      let i = {
        references: [],
        constantViolations: [],
        assignments: []
      };

      if (this.crawling = !0, e.type !== "Program" && ue._exploded) {
        for (let s of ue.enter) s(e, i);

        let r = ue[e.type];
        if (r) for (let s of r.enter) s(e, i);
      }

      e.traverse(ue, i), this.crawling = !1;

      for (let r of i.assignments) {
        let s = r.getBindingIdentifiers();

        for (let o of Object.keys(s)) r.scope.getBinding(o) || n.addGlobal(s[o]);

        r.scope.registerConstantViolation(r);
      }

      for (let r of i.references) {
        let s = r.scope.getBinding(r.node.name);
        s ? s.reference(r) : n.addGlobal(r.node);
      }

      for (let r of i.constantViolations) r.scope.registerConstantViolation(r);
    }

    push(e) {
      let n = this.path;
      n.isPattern() ? n = this.getPatternParent().path : !n.isBlockStatement() && !n.isProgram() && (n = this.getBlockParent().path), n.isSwitchStatement() && (n = (this.getFunctionParent() || this.getProgramParent()).path), (n.isLoop() || n.isCatchClause() || n.isFunction()) && (n.ensureBlock(), n = n.get("body"));
      let i = e.unique,
          r = e.kind || "var",
          s = e._blockHoist == null ? 2 : e._blockHoist,
          o = `declaration:${r}:${s}`,
          a = !i && n.getData(o);

      if (!a) {
        let C = ar(r, []);
        C._blockHoist = s, [a] = n.unshiftContainer("body", [C]), i || n.setData(o, a);
      }

      let c = cr(e.id, e.init),
          u = a.node.declarations.push(c);
      n.scope.registerBinding(r, a.get("declarations")[u - 1]);
    }

    getProgramParent() {
      let e = this;

      do if (e.path.isProgram()) return e; while (e = e.parent);

      throw new Error("Couldn't find a Program");
    }

    getFunctionParent() {
      let e = this;

      do if (e.path.isFunctionParent()) return e; while (e = e.parent);

      return null;
    }

    getBlockParent() {
      let e = this;

      do if (e.path.isBlockParent()) return e; while (e = e.parent);

      throw new Error("We couldn't find a BlockStatement, For, Switch, Function, Loop or Program...");
    }

    getPatternParent() {
      let e = this;

      do if (!e.path.isPattern()) return e.getBlockParent(); while (e = e.parent.parent);

      throw new Error("We couldn't find a BlockStatement, For, Switch, Function, Loop or Program...");
    }

    getAllBindings() {
      let e = Object.create(null),
          n = this;

      do {
        for (let i of Object.keys(n.bindings)) i in e || (e[i] = n.bindings[i]);

        n = n.parent;
      } while (n);

      return e;
    }

    getAllBindingsOfKind(...e) {
      let n = Object.create(null);

      for (let i of e) {
        let r = this;

        do {
          for (let s of Object.keys(r.bindings)) {
            let o = r.bindings[s];
            o.kind === i && (n[s] = o);
          }

          r = r.parent;
        } while (r);
      }

      return n;
    }

    bindingIdentifierEquals(e, n) {
      return this.getBindingIdentifier(e) === n;
    }

    getBinding(e) {
      let n = this,
          i;

      do {
        let s = n.getOwnBinding(e);

        if (s) {
          var r;
          if (!((r = i) != null && r.isPattern() && s.kind !== "param" && s.kind !== "local")) return s;
        } else if (!s && e === "arguments" && n.path.isFunction() && !n.path.isArrowFunctionExpression()) break;

        i = n.path;
      } while (n = n.parent);
    }

    getOwnBinding(e) {
      return this.bindings[e];
    }

    getBindingIdentifier(e) {
      var n;
      return (n = this.getBinding(e)) == null ? void 0 : n.identifier;
    }

    getOwnBindingIdentifier(e) {
      let n = this.bindings[e];
      return n?.identifier;
    }

    hasOwnBinding(e) {
      return !!this.getOwnBinding(e);
    }

    hasBinding(e, n) {
      return e ? !!(this.hasOwnBinding(e) || this.parentHasBinding(e, n) || this.hasUid(e) || !n && N.globals.includes(e) || !n && N.contextVariables.includes(e)) : !1;
    }

    parentHasBinding(e, n) {
      var i;
      return (i = this.parent) == null ? void 0 : i.hasBinding(e, n);
    }

    moveBindingTo(e, n) {
      let i = this.getBinding(e);
      i && (i.scope.removeOwnBinding(e), i.scope = n, n.bindings[e] = i);
    }

    removeOwnBinding(e) {
      delete this.bindings[e];
    }

    removeBinding(e) {
      var n;
      (n = this.getBinding(e)) == null || n.scope.removeOwnBinding(e);
      let i = this;

      do i.uids[e] && (i.uids[e] = !1); while (i = i.parent);
    }

  };
  le.default = N;
  N.globals = Object.keys(Ni.builtin);
  N.contextVariables = ["arguments", "undefined", "Infinity", "NaN"];
});
var Ct = p(k => {
  "use strict";

  Object.defineProperty(k, "__esModule", {
    value: !0
  });
  k.find = br;
  k.findParent = mr;
  k.getAncestry = Pr;
  k.getDeepestCommonAncestorFrom = Sr;
  k.getEarliestCommonAncestorFrom = Er;
  k.getFunctionParent = vr;
  k.getStatementParent = xr;
  k.inType = wr;
  k.isAncestor = _r;
  k.isDescendant = kr;
  var gr = ___babel_types$,
      {
    VISITOR_KEYS: yr
  } = gr;

  function mr(t) {
    let e = this;

    for (; e = e.parentPath;) if (t(e)) return e;

    return null;
  }

  function br(t) {
    let e = this;

    do if (t(e)) return e; while (e = e.parentPath);

    return null;
  }

  function vr() {
    return this.findParent(t => t.isFunction());
  }

  function xr() {
    let t = this;

    do {
      if (!t.parentPath || Array.isArray(t.container) && t.isStatement()) break;
      t = t.parentPath;
    } while (t);

    if (t && (t.isProgram() || t.isFile())) throw new Error("File/Program node, we can't possibly find a statement parent to this");
    return t;
  }

  function Er(t) {
    return this.getDeepestCommonAncestorFrom(t, function (e, n, i) {
      let r,
          s = yr[e.type];

      for (let o of i) {
        let a = o[n + 1];

        if (!r) {
          r = a;
          continue;
        }

        if (a.listKey && r.listKey === a.listKey && a.key < r.key) {
          r = a;
          continue;
        }

        let c = s.indexOf(r.parentKey),
            u = s.indexOf(a.parentKey);
        c > u && (r = a);
      }

      return r;
    });
  }

  function Sr(t, e) {
    if (!t.length) return this;
    if (t.length === 1) return t[0];
    let n = 1 / 0,
        i,
        r,
        s = t.map(a => {
      let c = [];

      do c.unshift(a); while ((a = a.parentPath) && a !== this);

      return c.length < n && (n = c.length), c;
    }),
        o = s[0];

    e: for (let a = 0; a < n; a++) {
      let c = o[a];

      for (let u of s) if (u[a] !== c) break e;

      i = a, r = c;
    }

    if (r) return e ? e(r, i, s) : r;
    throw new Error("Couldn't find intersection");
  }

  function Pr() {
    let t = this,
        e = [];

    do e.push(t); while (t = t.parentPath);

    return e;
  }

  function _r(t) {
    return t.isDescendant(this);
  }

  function kr(t) {
    return !!this.findParent(e => e === t);
  }

  function wr(...t) {
    let e = this;

    for (; e;) {
      for (let n of t) if (e.node.type === n) return !0;

      e = e.parentPath;
    }

    return !1;
  }
});
var De = p(Fe => {
  "use strict";

  Object.defineProperty(Fe, "__esModule", {
    value: !0
  });
  Fe.createUnionType = Tr;
  var Ar = ___babel_types$,
      {
    createFlowUnionType: Tt,
    createTSUnionType: Ot,
    createUnionTypeAnnotation: Br,
    isFlowType: Cr,
    isTSType: Kl
  } = Ar;

  function Tr(t) {
    {
      if (Cr(t[0])) return Tt ? Tt(t) : Br(t);
      if (Ot) return Ot(t);
    }
  }
});
var Nt = p(Re => {
  "use strict";

  Object.defineProperty(Re, "__esModule", {
    value: !0
  });
  Re.default = Rr;
  var Or = ___babel_types$,
      Ft = De(),
      {
    BOOLEAN_NUMBER_BINARY_OPERATORS: Ir,
    createTypeAnnotationBasedOnTypeof: Fr,
    numberTypeAnnotation: Dt,
    voidTypeAnnotation: Dr
  } = Or;

  function Rr(t) {
    if (!this.isReferenced()) return;
    let e = this.scope.getBinding(t.name);
    if (e) return e.identifier.typeAnnotation ? e.identifier.typeAnnotation : Nr(e, this, t.name);
    if (t.name === "undefined") return Dr();
    if (t.name === "NaN" || t.name === "Infinity") return Dt();
    t.name;
  }

  function Nr(t, e, n) {
    let i = [],
        r = [],
        s = It(t, e, r),
        o = Rt(t, e, n);

    if (o) {
      let a = It(t, o.ifStatement);
      s = s.filter(c => a.indexOf(c) < 0), i.push(o.typeAnnotation);
    }

    if (s.length) {
      s.push(...r);

      for (let a of s) i.push(a.getTypeAnnotation());
    }

    if (!!i.length) return (0, Ft.createUnionType)(i);
  }

  function It(t, e, n) {
    let i = t.constantViolations.slice();
    return i.unshift(t.path), i.filter(r => {
      r = r.resolve();

      let s = r._guessExecutionStatusRelativeTo(e);

      return n && s === "unknown" && n.push(r), s === "before";
    });
  }

  function Lr(t, e) {
    let n = e.node.operator,
        i = e.get("right").resolve(),
        r = e.get("left").resolve(),
        s;
    if (r.isIdentifier({
      name: t
    }) ? s = i : i.isIdentifier({
      name: t
    }) && (s = r), s) return n === "===" ? s.getTypeAnnotation() : Ir.indexOf(n) >= 0 ? Dt() : void 0;
    if (n !== "===" && n !== "==") return;
    let o, a;
    if (r.isUnaryExpression({
      operator: "typeof"
    }) ? (o = r, a = i) : i.isUnaryExpression({
      operator: "typeof"
    }) && (o = i, a = r), !o || !o.get("argument").isIdentifier({
      name: t
    }) || (a = a.resolve(), !a.isLiteral())) return;
    let c = a.node.value;
    if (typeof c == "string") return Fr(c);
  }

  function Mr(t, e, n) {
    let i;

    for (; i = e.parentPath;) {
      if (i.isIfStatement() || i.isConditionalExpression()) return e.key === "test" ? void 0 : i;
      if (i.isFunction() && i.parentPath.scope.getBinding(n) !== t) return;
      e = i;
    }
  }

  function Rt(t, e, n) {
    let i = Mr(t, e, n);
    if (!i) return;
    let s = [i.get("test")],
        o = [];

    for (let a = 0; a < s.length; a++) {
      let c = s[a];
      if (c.isLogicalExpression()) c.node.operator === "&&" && (s.push(c.get("left")), s.push(c.get("right")));else if (c.isBinaryExpression()) {
        let u = Lr(n, c);
        u && o.push(u);
      }
    }

    return o.length ? {
      typeAnnotation: (0, Ft.createUnionType)(o),
      ifStatement: i
    } : Rt(t, i, n);
  }
});
var Wt = p(h => {
  "use strict";

  Object.defineProperty(h, "__esModule", {
    value: !0
  });
  h.ArrayExpression = Vt;
  h.AssignmentExpression = as;
  h.BinaryExpression = ns;
  h.BooleanLiteral = fs;
  h.CallExpression = xs;
  h.ConditionalExpression = rs;
  h.ClassDeclaration = h.ClassExpression = h.FunctionDeclaration = h.ArrowFunctionExpression = h.FunctionExpression = gs;
  Object.defineProperty(h, "Identifier", {
    enumerable: !0,
    get: function () {
      return qr.default;
    }
  });
  h.LogicalExpression = is;
  h.NewExpression = Zr;
  h.NullLiteral = hs;
  h.NumericLiteral = ls;
  h.ObjectExpression = ps;
  h.ParenthesizedExpression = os;
  h.RegExpLiteral = ds;
  h.RestElement = Ut;
  h.SequenceExpression = ss;
  h.StringLiteral = us;
  h.TSAsExpression = qt;
  h.TSNonNullExpression = zr;
  h.TaggedTemplateExpression = Es;
  h.TemplateLiteral = es;
  h.TypeCastExpression = jt;
  h.UnaryExpression = ts;
  h.UpdateExpression = cs;
  h.VariableDeclarator = Qr;
  var jr = ___babel_types$,
      qr = Nt(),
      Mt = De(),
      {
    BOOLEAN_BINARY_OPERATORS: Vr,
    BOOLEAN_UNARY_OPERATORS: Ur,
    NUMBER_BINARY_OPERATORS: Kr,
    NUMBER_UNARY_OPERATORS: Wr,
    STRING_UNARY_OPERATORS: $r,
    anyTypeAnnotation: Lt,
    arrayTypeAnnotation: Ne,
    booleanTypeAnnotation: Le,
    buildMatchMemberExpression: fe,
    genericTypeAnnotation: L,
    identifier: K,
    nullLiteralTypeAnnotation: Hr,
    numberTypeAnnotation: J,
    stringTypeAnnotation: W,
    tupleTypeAnnotation: Yr,
    unionTypeAnnotation: Xr,
    voidTypeAnnotation: Jr,
    isIdentifier: Gr
  } = jr;

  function Qr() {
    if (!!this.get("id").isIdentifier()) return this.get("init").getTypeAnnotation();
  }

  function jt(t) {
    return t.typeAnnotation;
  }

  jt.validParent = !0;

  function qt(t) {
    return t.typeAnnotation;
  }

  qt.validParent = !0;

  function zr() {
    return this.get("expression").getTypeAnnotation();
  }

  function Zr(t) {
    if (t.callee.type === "Identifier") return L(t.callee);
  }

  function es() {
    return W();
  }

  function ts(t) {
    let e = t.operator;
    if (e === "void") return Jr();
    if (Wr.indexOf(e) >= 0) return J();
    if ($r.indexOf(e) >= 0) return W();
    if (Ur.indexOf(e) >= 0) return Le();
  }

  function ns(t) {
    let e = t.operator;
    if (Kr.indexOf(e) >= 0) return J();
    if (Vr.indexOf(e) >= 0) return Le();

    if (e === "+") {
      let n = this.get("right"),
          i = this.get("left");
      return i.isBaseType("number") && n.isBaseType("number") ? J() : i.isBaseType("string") || n.isBaseType("string") ? W() : Xr([W(), J()]);
    }
  }

  function is() {
    let t = [this.get("left").getTypeAnnotation(), this.get("right").getTypeAnnotation()];
    return (0, Mt.createUnionType)(t);
  }

  function rs() {
    let t = [this.get("consequent").getTypeAnnotation(), this.get("alternate").getTypeAnnotation()];
    return (0, Mt.createUnionType)(t);
  }

  function ss() {
    return this.get("expressions").pop().getTypeAnnotation();
  }

  function os() {
    return this.get("expression").getTypeAnnotation();
  }

  function as() {
    return this.get("right").getTypeAnnotation();
  }

  function cs(t) {
    let e = t.operator;
    if (e === "++" || e === "--") return J();
  }

  function us() {
    return W();
  }

  function ls() {
    return J();
  }

  function fs() {
    return Le();
  }

  function hs() {
    return Hr();
  }

  function ds() {
    return L(K("RegExp"));
  }

  function ps() {
    return L(K("Object"));
  }

  function Vt() {
    return L(K("Array"));
  }

  function Ut() {
    return Vt();
  }

  Ut.validParent = !0;

  function gs() {
    return L(K("Function"));
  }

  var ys = fe("Array.from"),
      ms = fe("Object.keys"),
      bs = fe("Object.values"),
      vs = fe("Object.entries");

  function xs() {
    let {
      callee: t
    } = this.node;
    return ms(t) ? Ne(W()) : ys(t) || bs(t) || Gr(t, {
      name: "Array"
    }) ? Ne(Lt()) : vs(t) ? Ne(Yr([W(), Lt()])) : Kt(this.get("callee"));
  }

  function Es() {
    return Kt(this.get("tag"));
  }

  function Kt(t) {
    if (t = t.resolve(), t.isFunction()) {
      let {
        node: e
      } = t;
      if (e.async) return e.generator ? L(K("AsyncIterator")) : L(K("Promise"));
      if (e.generator) return L(K("Iterator"));
      if (t.node.returnType) return t.node.returnType;
    }
  }
});
var Xt = p(M => {
  "use strict";

  Object.defineProperty(M, "__esModule", {
    value: !0
  });
  M._getTypeAnnotation = Vs;
  M.baseTypeStrictlyMatches = Ws;
  M.couldBeBaseType = Ks;
  M.getTypeAnnotation = qs;
  M.isBaseType = Us;
  M.isGenericType = $s;
  var $t = Wt(),
      Ss = ___babel_types$,
      {
    anyTypeAnnotation: Yt,
    isAnyTypeAnnotation: he,
    isArrayTypeAnnotation: Ps,
    isBooleanTypeAnnotation: _s,
    isEmptyTypeAnnotation: ks,
    isFlowBaseAnnotation: ws,
    isGenericTypeAnnotation: As,
    isIdentifier: Ht,
    isMixedTypeAnnotation: Bs,
    isNumberTypeAnnotation: Cs,
    isStringTypeAnnotation: Ts,
    isTSArrayType: Os,
    isTSTypeAnnotation: Is,
    isTSTypeReference: Fs,
    isTupleTypeAnnotation: Ds,
    isTypeAnnotation: Rs,
    isUnionTypeAnnotation: Ns,
    isVoidTypeAnnotation: Ls,
    stringTypeAnnotation: Ms,
    voidTypeAnnotation: js
  } = Ss;

  function qs() {
    let t = this.getData("typeAnnotation");
    return t != null || (t = this._getTypeAnnotation() || Yt(), (Rs(t) || Is(t)) && (t = t.typeAnnotation), this.setData("typeAnnotation", t)), t;
  }

  var Me = new WeakSet();

  function Vs() {
    let t = this.node;
    if (!t) if (this.key === "init" && this.parentPath.isVariableDeclarator()) {
      let n = this.parentPath.parentPath,
          i = n.parentPath;
      return n.key === "left" && i.isForInStatement() ? Ms() : n.key === "left" && i.isForOfStatement() ? Yt() : js();
    } else return;
    if (t.typeAnnotation) return t.typeAnnotation;

    if (!Me.has(t)) {
      Me.add(t);

      try {
        var e;
        let n = $t[t.type];
        if (n) return n.call(this, t);
        if (n = $t[this.parentPath.type], (e = n) != null && e.validParent) return this.parentPath.getTypeAnnotation();
      } finally {
        Me.delete(t);
      }
    }
  }

  function Us(t, e) {
    return je(t, this.getTypeAnnotation(), e);
  }

  function je(t, e, n) {
    if (t === "string") return Ts(e);
    if (t === "number") return Cs(e);
    if (t === "boolean") return _s(e);
    if (t === "any") return he(e);
    if (t === "mixed") return Bs(e);
    if (t === "empty") return ks(e);
    if (t === "void") return Ls(e);
    if (n) return !1;
    throw new Error(`Unknown base type ${t}`);
  }

  function Ks(t) {
    let e = this.getTypeAnnotation();
    if (he(e)) return !0;

    if (Ns(e)) {
      for (let n of e.types) if (he(n) || je(t, n, !0)) return !0;

      return !1;
    } else return je(t, e, !0);
  }

  function Ws(t) {
    let e = this.getTypeAnnotation(),
        n = t.getTypeAnnotation();
    return !he(e) && ws(e) ? n.type === e.type : !1;
  }

  function $s(t) {
    let e = this.getTypeAnnotation();
    return t === "Array" && (Os(e) || Ps(e) || Ds(e)) ? !0 : As(e) && Ht(e.id, {
      name: t
    }) || Fs(e) && Ht(e.typeName, {
      name: t
    });
  }
});
var en = p(j => {
  "use strict";

  Object.defineProperty(j, "__esModule", {
    value: !0
  });
  j._replaceWith = mo;
  j.replaceExpressionWithStatements = bo;
  j.replaceInline = vo;
  j.replaceWith = yo;
  j.replaceWithMultiple = po;
  j.replaceWithSourceString = go;
  var Hs = ___babel_code_frame$,
      qe = Z(),
      Ys = q(),
      Zt = U(),
      Xs = ___babel_parser$,
      Js = ___babel_types$,
      Gs = ___babel_helper_hoist_variables$,
      {
    FUNCTION_TYPES: Jt,
    arrowFunctionExpression: Qs,
    assignmentExpression: zs,
    awaitExpression: Zs,
    blockStatement: eo,
    callExpression: to,
    cloneNode: Gt,
    expressionStatement: no,
    identifier: io,
    inheritLeadingComments: ro,
    inheritTrailingComments: so,
    inheritsComments: oo,
    isExpression: ao,
    isProgram: co,
    isStatement: uo,
    removeComments: lo,
    returnStatement: Qt,
    toSequenceExpression: fo,
    validate: zt,
    yieldExpression: ho
  } = Js;

  function po(t) {
    var e;
    this.resync(), t = this._verifyNodeList(t), ro(t[0], this.node), so(t[t.length - 1], this.node), (e = Zt.path.get(this.parent)) == null || e.delete(this.node), this.node = this.container[this.key] = null;
    let n = this.insertAfter(t);
    return this.node ? this.requeue() : this.remove(), n;
  }

  function go(t) {
    this.resync();
    let e;

    try {
      t = `(${t})`, e = (0, Xs.parse)(t);
    } catch (i) {
      let r = i.loc;
      throw r && (i.message += ` - make sure this is an expression.
` + (0, Hs.codeFrameColumns)(t, {
        start: {
          line: r.line,
          column: r.column + 1
        }
      }), i.code = "BABEL_REPLACE_SOURCE_ERROR"), i;
    }

    let n = e.program.body[0].expression;
    return qe.default.removeProperties(n), this.replaceWith(n);
  }

  function yo(t) {
    if (this.resync(), this.removed) throw new Error("You can't replace this node, we've already removed it");
    let e = t instanceof Ys.default ? t.node : t;
    if (!e) throw new Error("You passed `path.replaceWith()` a falsy node, use `path.remove()` instead");
    if (this.node === e) return [this];
    if (this.isProgram() && !co(e)) throw new Error("You can only replace a Program root node with another Program node");
    if (Array.isArray(e)) throw new Error("Don't use `path.replaceWith()` with an array of nodes, use `path.replaceWithMultiple()`");
    if (typeof e == "string") throw new Error("Don't use `path.replaceWith()` with a source string, use `path.replaceWithSourceString()`");
    let n = "";
    if (this.isNodeType("Statement") && ao(e) && !this.canHaveVariableDeclarationOrExpression() && !this.canSwapBetweenExpressionAndStatement(e) && !this.parentPath.isExportDefaultDeclaration() && (e = no(e), n = "expression"), this.isNodeType("Expression") && uo(e) && !this.canHaveVariableDeclarationOrExpression() && !this.canSwapBetweenExpressionAndStatement(e)) return this.replaceExpressionWithStatements([e]);
    let i = this.node;
    return i && (oo(e, i), lo(i)), this._replaceWith(e), this.type = e.type, this.setScope(), this.requeue(), [n ? this.get(n) : this];
  }

  function mo(t) {
    var e;
    if (!this.container) throw new ReferenceError("Container is falsy");
    this.inList ? zt(this.parent, this.key, [t]) : zt(this.parent, this.key, t), this.debug(`Replace with ${t?.type}`), (e = Zt.path.get(this.parent)) == null || e.set(t, this).delete(this.node), this.node = this.container[this.key] = t;
  }

  function bo(t) {
    this.resync();
    let e = fo(t, this.scope);
    if (e) return this.replaceWith(e)[0].get("expressions");
    let n = this.getFunctionParent(),
        i = n?.is("async"),
        r = n?.is("generator"),
        s = Qs([], eo(t));
    this.replaceWith(to(s, []));
    let o = this.get("callee");
    (0, Gs.default)(o.get("body"), S => {
      this.scope.push({
        id: S
      });
    }, "var");
    let a = this.get("callee").getCompletionRecords();

    for (let S of a) {
      if (!S.isExpressionStatement()) continue;
      let b = S.findParent(l => l.isLoop());

      if (b) {
        let l = b.getData("expressionReplacementReturnUid");
        l ? l = io(l.name) : (l = o.scope.generateDeclaredUidIdentifier("ret"), o.get("body").pushContainer("body", Qt(Gt(l))), b.setData("expressionReplacementReturnUid", l)), S.get("expression").replaceWith(zs("=", Gt(l), S.node.expression));
      } else S.replaceWith(Qt(S.node.expression));
    }

    o.arrowFunctionToExpression();
    let c = o,
        u = i && qe.default.hasType(this.get("callee.body").node, "AwaitExpression", Jt),
        C = r && qe.default.hasType(this.get("callee.body").node, "YieldExpression", Jt);
    return u && (c.set("async", !0), C || this.replaceWith(Zs(this.node))), C && (c.set("generator", !0), this.replaceWith(ho(this.node, !0))), c.get("body.body");
  }

  function vo(t) {
    if (this.resync(), Array.isArray(t)) {
      if (Array.isArray(this.container)) {
        t = this._verifyNodeList(t);

        let e = this._containerInsertAfter(t);

        return this.remove(), e;
      } else return this.replaceWithMultiple(t);
    } else return this.replaceWith(t);
  }
});
var rn = p(de => {
  "use strict";

  Object.defineProperty(de, "__esModule", {
    value: !0
  });
  de.evaluate = ko;
  de.evaluateTruthy = Po;
  var xo = ["String", "Number", "Math"],
      Eo = ["random"];

  function tn(t) {
    return xo.includes(t);
  }

  function So(t) {
    return Eo.includes(t);
  }

  function Po() {
    let t = this.evaluate();
    if (t.confident) return !!t.value;
  }

  function w(t, e) {
    !e.confident || (e.deoptPath = t, e.confident = !1);
  }

  function P(t, e) {
    let {
      node: n
    } = t,
        {
      seen: i
    } = e;

    if (i.has(n)) {
      let r = i.get(n);
      if (r.resolved) return r.value;
      w(t, e);
      return;
    } else {
      let r = {
        resolved: !1
      };
      i.set(n, r);

      let s = _o(t, e);

      return e.confident && (r.resolved = !0, r.value = s), s;
    }
  }

  function _o(t, e) {
    if (!!e.confident) {
      if (t.isSequenceExpression()) {
        let n = t.get("expressions");
        return P(n[n.length - 1], e);
      }

      if (t.isStringLiteral() || t.isNumericLiteral() || t.isBooleanLiteral()) return t.node.value;
      if (t.isNullLiteral()) return null;
      if (t.isTemplateLiteral()) return nn(t, t.node.quasis, e);

      if (t.isTaggedTemplateExpression() && t.get("tag").isMemberExpression()) {
        let n = t.get("tag.object"),
            {
          node: {
            name: i
          }
        } = n,
            r = t.get("tag.property");
        if (n.isIdentifier() && i === "String" && !t.scope.getBinding(i) && r.isIdentifier() && r.node.name === "raw") return nn(t, t.node.quasi.quasis, e, !0);
      }

      if (t.isConditionalExpression()) {
        let n = P(t.get("test"), e);
        return e.confident ? P(n ? t.get("consequent") : t.get("alternate"), e) : void 0;
      }

      if (t.isExpressionWrapper()) return P(t.get("expression"), e);

      if (t.isMemberExpression() && !t.parentPath.isCallExpression({
        callee: t.node
      })) {
        let n = t.get("property"),
            i = t.get("object");

        if (i.isLiteral() && n.isIdentifier()) {
          let r = i.node.value,
              s = typeof r;
          if (s === "number" || s === "string") return r[n.node.name];
        }
      }

      if (t.isReferencedIdentifier()) {
        let n = t.scope.getBinding(t.node.name);
        if (n && n.constantViolations.length > 0 || n && t.node.start < n.path.node.end) return w(n.path, e);
        if (n != null && n.hasValue) return n.value;
        {
          if (t.node.name === "undefined") return n ? w(n.path, e) : void 0;
          if (t.node.name === "Infinity") return n ? w(n.path, e) : 1 / 0;
          if (t.node.name === "NaN") return n ? w(n.path, e) : NaN;
          let i = t.resolve();
          return i === t ? w(t, e) : P(i, e);
        }
      }

      if (t.isUnaryExpression({
        prefix: !0
      })) {
        if (t.node.operator === "void") return;
        let n = t.get("argument");
        if (t.node.operator === "typeof" && (n.isFunction() || n.isClass())) return "function";
        let i = P(n, e);
        if (!e.confident) return;

        switch (t.node.operator) {
          case "!":
            return !i;

          case "+":
            return +i;

          case "-":
            return -i;

          case "~":
            return ~i;

          case "typeof":
            return typeof i;
        }
      }

      if (t.isArrayExpression()) {
        let n = [],
            i = t.get("elements");

        for (let r of i) {
          let s = r.evaluate();
          if (s.confident) n.push(s.value);else return w(s.deopt, e);
        }

        return n;
      }

      if (t.isObjectExpression()) {
        let n = {},
            i = t.get("properties");

        for (let r of i) {
          if (r.isObjectMethod() || r.isSpreadElement()) return w(r, e);
          let s = r.get("key"),
              o;

          if (r.node.computed) {
            if (o = s.evaluate(), !o.confident) return w(o.deopt, e);
            o = o.value;
          } else s.isIdentifier() ? o = s.node.name : o = s.node.value;

          let c = r.get("value").evaluate();
          if (!c.confident) return w(c.deopt, e);
          c = c.value, n[o] = c;
        }

        return n;
      }

      if (t.isLogicalExpression()) {
        let n = e.confident,
            i = P(t.get("left"), e),
            r = e.confident;
        e.confident = n;
        let s = P(t.get("right"), e),
            o = e.confident;

        switch (t.node.operator) {
          case "||":
            return e.confident = r && (!!i || o), e.confident ? i || s : void 0;

          case "&&":
            return e.confident = r && (!i || o), e.confident ? i && s : void 0;

          case "??":
            return e.confident = r && (i != null || o), e.confident ? i ?? s : void 0;
        }
      }

      if (t.isBinaryExpression()) {
        let n = P(t.get("left"), e);
        if (!e.confident) return;
        let i = P(t.get("right"), e);
        if (!e.confident) return;

        switch (t.node.operator) {
          case "-":
            return n - i;

          case "+":
            return n + i;

          case "/":
            return n / i;

          case "*":
            return n * i;

          case "%":
            return n % i;

          case "**":
            return Math.pow(n, i);

          case "<":
            return n < i;

          case ">":
            return n > i;

          case "<=":
            return n <= i;

          case ">=":
            return n >= i;

          case "==":
            return n == i;

          case "!=":
            return n != i;

          case "===":
            return n === i;

          case "!==":
            return n !== i;

          case "|":
            return n | i;

          case "&":
            return n & i;

          case "^":
            return n ^ i;

          case "<<":
            return n << i;

          case ">>":
            return n >> i;

          case ">>>":
            return n >>> i;
        }
      }

      if (t.isCallExpression()) {
        let n = t.get("callee"),
            i,
            r;

        if (n.isIdentifier() && !t.scope.getBinding(n.node.name) && tn(n.node.name) && (r = __global$[n.node.name]), n.isMemberExpression()) {
          let s = n.get("object"),
              o = n.get("property");

          if (s.isIdentifier() && o.isIdentifier() && tn(s.node.name) && !So(o.node.name) && (i = __global$[s.node.name], r = i[o.node.name]), s.isLiteral() && o.isIdentifier()) {
            let a = typeof s.node.value;
            (a === "string" || a === "number") && (i = s.node.value, r = i[o.node.name]);
          }
        }

        if (r) {
          let s = t.get("arguments").map(o => P(o, e));
          return e.confident ? r.apply(i, s) : void 0;
        }
      }

      w(t, e);
    }
  }

  function nn(t, e, n, i = !1) {
    let r = "",
        s = 0,
        o = t.get("expressions");

    for (let a of e) {
      if (!n.confident) break;
      r += i ? a.value.raw : a.value.cooked;
      let c = o[s++];
      c && (r += String(P(c, n)));
    }

    if (!!n.confident) return r;
  }

  function ko() {
    let t = {
      confident: !0,
      deoptPath: null,
      seen: new Map()
    },
        e = P(this, t);
    return t.confident || (e = void 0), {
      confident: t.confident,
      deopt: t.deoptPath,
      value: e
    };
  }
});
var un = p(H => {
  "use strict";

  Object.defineProperty(H, "__esModule", {
    value: !0
  });
  H.arrowFunctionToExpression = Xo;
  H.arrowFunctionToShadowed = $o;
  H.ensureBlock = Wo;
  H.toComputedKey = Ko;
  H.unwrapFunctionEnvironment = Ho;
  var wo = ___babel_types$,
      Ke = ___babel_helper_environment_visitor$,
      Ao = ___babel_helper_function_name$,
      We = Ae(),
      {
    arrowFunctionExpression: $e,
    assignmentExpression: $,
    binaryExpression: Ve,
    blockStatement: Bo,
    callExpression: ee,
    conditionalExpression: Co,
    expressionStatement: sn,
    identifier: y,
    isIdentifier: To,
    jsxIdentifier: Oo,
    logicalExpression: Io,
    LOGICAL_OPERATORS: Fo,
    memberExpression: O,
    metaProperty: Do,
    numericLiteral: Ro,
    objectExpression: No,
    restElement: Lo,
    returnStatement: Mo,
    sequenceExpression: jo,
    spreadElement: qo,
    stringLiteral: on,
    super: Ue,
    thisExpression: pe,
    toExpression: Vo,
    unaryExpression: Uo
  } = wo;

  function Ko() {
    let t;
    if (this.isMemberExpression()) t = this.node.property;else if (this.isProperty() || this.isMethod()) t = this.node.key;else throw new ReferenceError("todo");
    return this.node.computed || To(t) && (t = on(t.name)), t;
  }

  function Wo() {
    let t = this.get("body"),
        e = t.node;
    if (Array.isArray(t)) throw new Error("Can't convert array path to a block statement");
    if (!e) throw new Error("Can't convert node without a body");
    if (t.isBlockStatement()) return e;
    let n = [],
        i = "body",
        r,
        s;
    t.isStatement() ? (s = "body", r = 0, n.push(t.node)) : (i += ".body.0", this.isFunction() ? (r = "argument", n.push(Mo(t.node))) : (r = "expression", n.push(sn(t.node)))), this.node.body = Bo(n);
    let o = this.get(i);
    return t.setup(o, s ? o.node[s] : o.node, s, r), this.node;
  }

  function $o() {
    !this.isArrowFunctionExpression() || this.arrowFunctionToExpression();
  }

  function Ho() {
    if (!this.isArrowFunctionExpression() && !this.isFunctionExpression() && !this.isFunctionDeclaration()) throw this.buildCodeFrameError("Can only unwrap the environment of a function.");
    an(this);
  }

  function Yo(t, e) {
    t.node.type = e;
  }

  function Xo({
    allowInsertArrow: t = !0,
    specCompliant: e = !1,
    noNewArrows: n = !e
  } = {}) {
    if (!this.isArrowFunctionExpression()) throw this.buildCodeFrameError("Cannot convert non-arrow function to a function expression.");
    let {
      thisBinding: i,
      fnPath: r
    } = an(this, n, t);

    if (r.ensureBlock(), Yo(r, "FunctionExpression"), !n) {
      let s = i ? null : r.scope.generateUidIdentifier("arrowCheckId");
      return s && r.parentPath.scope.push({
        id: s,
        init: No([])
      }), r.get("body").unshiftContainer("body", sn(ee(this.hub.addHelper("newArrowCheck"), [pe(), y(s ? s.name : i)]))), r.replaceWith(ee(O((0, Ao.default)(this, !0) || r.node, y("bind")), [s ? y(s.name) : pe()])), r.get("callee.object");
    }

    return r;
  }

  var Jo = (0, We.merge)([{
    CallExpression(t, {
      allSuperCalls: e
    }) {
      !t.get("callee").isSuper() || e.push(t);
    }

  }, Ke.default]);

  function an(t, e = !0, n = !0) {
    let i,
        r = t.findParent(b => {
      if (b.isArrowFunctionExpression()) {
        var l;
        return (l = i) != null || (i = b), !1;
      }

      return b.isFunction() || b.isProgram() || b.isClassProperty({
        static: !1
      }) || b.isClassPrivateProperty({
        static: !1
      });
    }),
        s = r.isClassMethod({
      kind: "constructor"
    });
    if (r.isClassProperty() || r.isClassPrivateProperty()) if (i) r = i;else if (n) t.replaceWith(ee($e([], Vo(t.node)), [])), r = t.get("callee"), t = r.get("body");else throw t.buildCodeFrameError("Unable to transform arrow inside class property");
    let {
      thisPaths: o,
      argumentsPaths: a,
      newTargetPaths: c,
      superProps: u,
      superCalls: C
    } = ia(t);

    if (s && C.length > 0) {
      if (!n) throw C[0].buildCodeFrameError("Unable to handle nested super() usage in arrow");
      let b = [];
      r.traverse(Jo, {
        allSuperCalls: b
      });
      let l = ea(r);
      b.forEach(_ => {
        let D = y(l);
        D.loc = _.node.callee.loc, _.get("callee").replaceWith(D);
      });
    }

    if (a.length > 0) {
      let b = te(r, "arguments", () => {
        let l = () => y("arguments");

        return r.scope.path.isProgram() ? Co(Ve("===", Uo("typeof", l()), on("undefined")), r.scope.buildUndefinedNode(), l()) : l();
      });
      a.forEach(l => {
        let _ = y(b);

        _.loc = l.node.loc, l.replaceWith(_);
      });
    }

    if (c.length > 0) {
      let b = te(r, "newtarget", () => Do(y("new"), y("target")));
      c.forEach(l => {
        let _ = y(b);

        _.loc = l.node.loc, l.replaceWith(_);
      });
    }

    if (u.length > 0) {
      if (!n) throw u[0].buildCodeFrameError("Unable to handle nested super.prop usage");
      u.reduce((l, _) => l.concat(Qo(_)), []).forEach(l => {
        let _ = l.node.computed ? "" : l.get("property").node.name,
            D = l.parentPath,
            Pe = D.isAssignmentExpression({
          left: l.node
        }),
            Hn = D.isCallExpression({
          callee: l.node
        }),
            Yn = ta(r, Pe, _),
            _e = [];

        if (l.node.computed && _e.push(l.get("property").node), Pe) {
          let Xn = D.node.right;

          _e.push(Xn);
        }

        let ke = ee(y(Yn), _e);
        Hn ? (D.unshiftContainer("arguments", pe()), l.replaceWith(O(ke, y("call"))), o.push(D.get("arguments.0"))) : Pe ? D.replaceWith(ke) : l.replaceWith(ke);
      });
    }

    let S;
    return (o.length > 0 || !e) && (S = Zo(r, s), (e || s && cn(r)) && (o.forEach(b => {
      let l = b.isJSX() ? Oo(S) : y(S);
      l.loc = b.node.loc, b.replaceWith(l);
    }), e || (S = null))), {
      thisBinding: S,
      fnPath: t
    };
  }

  function Go(t) {
    return Fo.includes(t);
  }

  function Qo(t) {
    if (t.parentPath.isAssignmentExpression() && t.parentPath.node.operator !== "=") {
      let n = t.parentPath,
          i = n.node.operator.slice(0, -1),
          r = n.node.right,
          s = Go(i);

      if (t.node.computed) {
        let o = t.scope.generateDeclaredUidIdentifier("tmp"),
            a = t.node.object,
            c = t.node.property;
        n.get("left").replaceWith(O(a, $("=", o, c), !0)), n.get("right").replaceWith(e(s ? "=" : i, O(a, y(o.name), !0), r));
      } else {
        let o = t.node.object,
            a = t.node.property;
        n.get("left").replaceWith(O(o, a)), n.get("right").replaceWith(e(s ? "=" : i, O(o, y(a.name)), r));
      }

      return s ? n.replaceWith(Io(i, n.node.left, n.node.right)) : n.node.operator = "=", [n.get("left"), n.get("right").get("left")];
    } else if (t.parentPath.isUpdateExpression()) {
      let n = t.parentPath,
          i = t.scope.generateDeclaredUidIdentifier("tmp"),
          r = t.node.computed ? t.scope.generateDeclaredUidIdentifier("prop") : null,
          s = [$("=", i, O(t.node.object, r ? $("=", r, t.node.property) : t.node.property, t.node.computed)), $("=", O(t.node.object, r ? y(r.name) : t.node.property, t.node.computed), Ve(t.parentPath.node.operator[0], y(i.name), Ro(1)))];
      t.parentPath.node.prefix || s.push(y(i.name)), n.replaceWith(jo(s));
      let o = n.get("expressions.0.right"),
          a = n.get("expressions.1.left");
      return [o, a];
    }

    return [t];

    function e(n, i, r) {
      return n === "=" ? $("=", i, r) : Ve(n, i, r);
    }
  }

  function cn(t) {
    return t.isClassMethod() && !!t.parentPath.parentPath.node.superClass;
  }

  var zo = (0, We.merge)([{
    CallExpression(t, {
      supers: e,
      thisBinding: n
    }) {
      !t.get("callee").isSuper() || e.has(t.node) || (e.add(t.node), t.replaceWithMultiple([t.node, $("=", y(n), y("this"))]));
    }

  }, Ke.default]);

  function Zo(t, e) {
    return te(t, "this", n => {
      if (!e || !cn(t)) return pe();
      t.traverse(zo, {
        supers: new WeakSet(),
        thisBinding: n
      });
    });
  }

  function ea(t) {
    return te(t, "supercall", () => {
      let e = t.scope.generateUidIdentifier("args");
      return $e([Lo(e)], ee(Ue(), [qo(y(e.name))]));
    });
  }

  function ta(t, e, n) {
    return te(t, `superprop_${e ? "set" : "get"}:${n || ""}`, () => {
      let r = [],
          s;
      if (n) s = O(Ue(), y(n));else {
        let o = t.scope.generateUidIdentifier("prop");
        r.unshift(o), s = O(Ue(), y(o.name), !0);
      }

      if (e) {
        let o = t.scope.generateUidIdentifier("value");
        r.push(o), s = $("=", s, y(o.name));
      }

      return $e(r, s);
    });
  }

  function te(t, e, n) {
    let i = "binding:" + e,
        r = t.getData(i);

    if (!r) {
      let s = t.scope.generateUidIdentifier(e);
      r = s.name, t.setData(i, r), t.scope.push({
        id: s,
        init: n(r)
      });
    }

    return r;
  }

  var na = (0, We.merge)([{
    ThisExpression(t, {
      thisPaths: e
    }) {
      e.push(t);
    },

    JSXIdentifier(t, {
      thisPaths: e
    }) {
      t.node.name === "this" && (!t.parentPath.isJSXMemberExpression({
        object: t.node
      }) && !t.parentPath.isJSXOpeningElement({
        name: t.node
      }) || e.push(t));
    },

    CallExpression(t, {
      superCalls: e
    }) {
      t.get("callee").isSuper() && e.push(t);
    },

    MemberExpression(t, {
      superProps: e
    }) {
      t.get("object").isSuper() && e.push(t);
    },

    Identifier(t, {
      argumentsPaths: e
    }) {
      if (!t.isReferencedIdentifier({
        name: "arguments"
      })) return;
      let n = t.scope;

      do {
        if (n.hasOwnBinding("arguments")) {
          n.rename("arguments");
          return;
        }

        if (n.path.isFunction() && !n.path.isArrowFunctionExpression()) break;
      } while (n = n.parent);

      e.push(t);
    },

    MetaProperty(t, {
      newTargetPaths: e
    }) {
      !t.get("meta").isIdentifier({
        name: "new"
      }) || !t.get("property").isIdentifier({
        name: "target"
      }) || e.push(t);
    }

  }, Ke.default]);

  function ia(t) {
    let e = [],
        n = [],
        i = [],
        r = [],
        s = [];
    return t.traverse(na, {
      thisPaths: e,
      argumentsPaths: n,
      newTargetPaths: i,
      superProps: r,
      superCalls: s
    }), {
      thisPaths: e,
      argumentsPaths: n,
      newTargetPaths: i,
      superProps: r,
      superCalls: s
    };
  }
});
var gn = p(v => {
  "use strict";

  Object.defineProperty(v, "__esModule", {
    value: !0
  });
  v._guessExecutionStatusRelativeTo = Aa;
  v._resolve = Oa;
  v.canHaveVariableDeclarationOrExpression = va;
  v.canSwapBetweenExpressionAndStatement = xa;
  v.equals = ma;
  v.getSource = _a;
  v.has = dn;
  v.is = void 0;
  v.isCompletionRecord = Ea;
  v.isConstantExpression = Ia;
  v.isInStrictMode = Fa;
  v.isNodeType = ba;
  v.isStatementOrBlock = Sa;
  v.isStatic = pa;
  v.isnt = ya;
  v.matchesPattern = da;
  v.referencesImport = Pa;
  v.resolve = Ta;
  v.willIMaybeExecuteBefore = ka;
  var ra = ___babel_types$,
      {
    STATEMENT_OR_BLOCK_KEYS: sa,
    VISITOR_KEYS: oa,
    isBlockStatement: hn,
    isExpression: aa,
    isIdentifier: ca,
    isLiteral: ua,
    isStringLiteral: la,
    isType: fa,
    matchesPattern: ha
  } = ra;

  function da(t, e) {
    return ha(this.node, t, e);
  }

  function dn(t) {
    let e = this.node && this.node[t];
    return e && Array.isArray(e) ? !!e.length : !!e;
  }

  function pa() {
    return this.scope.isStatic(this.node);
  }

  var ga = dn;
  v.is = ga;

  function ya(t) {
    return !this.has(t);
  }

  function ma(t, e) {
    return this.node[t] === e;
  }

  function ba(t) {
    return fa(this.type, t);
  }

  function va() {
    return (this.key === "init" || this.key === "left") && this.parentPath.isFor();
  }

  function xa(t) {
    return this.key !== "body" || !this.parentPath.isArrowFunctionExpression() ? !1 : this.isExpression() ? hn(t) : this.isBlockStatement() ? aa(t) : !1;
  }

  function Ea(t) {
    let e = this,
        n = !0;

    do {
      let {
        type: i,
        container: r
      } = e;
      if (!n && (e.isFunction() || i === "StaticBlock")) return !!t;
      if (n = !1, Array.isArray(r) && e.key !== r.length - 1) return !1;
    } while ((e = e.parentPath) && !e.isProgram() && !e.isDoExpression());

    return !0;
  }

  function Sa() {
    return this.parentPath.isLabeledStatement() || hn(this.container) ? !1 : sa.includes(this.key);
  }

  function Pa(t, e) {
    if (!this.isReferencedIdentifier()) {
      if (this.isJSXMemberExpression() && this.node.property.name === e || (this.isMemberExpression() || this.isOptionalMemberExpression()) && (this.node.computed ? la(this.node.property, {
        value: e
      }) : this.node.property.name === e)) {
        let s = this.get("object");
        return s.isReferencedIdentifier() && s.referencesImport(t, "*");
      }

      return !1;
    }

    let n = this.scope.getBinding(this.node.name);
    if (!n || n.kind !== "module") return !1;
    let i = n.path,
        r = i.parentPath;
    if (!r.isImportDeclaration()) return !1;

    if (r.node.source.value === t) {
      if (!e) return !0;
    } else return !1;

    return !!(i.isImportDefaultSpecifier() && e === "default" || i.isImportNamespaceSpecifier() && e === "*" || i.isImportSpecifier() && ca(i.node.imported, {
      name: e
    }));
  }

  function _a() {
    let t = this.node;

    if (t.end) {
      let e = this.hub.getCode();
      if (e) return e.slice(t.start, t.end);
    }

    return "";
  }

  function ka(t) {
    return this._guessExecutionStatusRelativeTo(t) !== "after";
  }

  function ln(t) {
    return (t.scope.getFunctionParent() || t.scope.getProgramParent()).path;
  }

  function wa(t, e) {
    switch (t) {
      case "LogicalExpression":
        return e === "right";

      case "ConditionalExpression":
      case "IfStatement":
        return e === "consequent" || e === "alternate";

      case "WhileStatement":
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForOfStatement":
        return e === "body";

      case "ForStatement":
        return e === "body" || e === "update";

      case "SwitchStatement":
        return e === "cases";

      case "TryStatement":
        return e === "handler";

      case "AssignmentPattern":
        return e === "right";

      case "OptionalMemberExpression":
        return e === "property";

      case "OptionalCallExpression":
        return e === "arguments";

      default:
        return !1;
    }
  }

  function fn(t, e) {
    for (let n = 0; n < e; n++) {
      let i = t[n];
      if (wa(i.parent.type, i.parentKey)) return !0;
    }

    return !1;
  }

  function Aa(t) {
    return pn(this, t, new Map());
  }

  function pn(t, e, n) {
    let i = {
      this: ln(t),
      target: ln(e)
    };
    if (i.target.node !== i.this.node) return Ca(t, i.target, n);
    let r = {
      target: e.getAncestry(),
      this: t.getAncestry()
    };
    if (r.target.indexOf(t) >= 0) return "after";
    if (r.this.indexOf(e) >= 0) return "before";
    let s,
        o = {
      target: 0,
      this: 0
    };

    for (; !s && o.this < r.this.length;) {
      let C = r.this[o.this];
      o.target = r.target.indexOf(C), o.target >= 0 ? s = C : o.this++;
    }

    if (!s) throw new Error("Internal Babel error - The two compared nodes don't appear to belong to the same program.");
    if (fn(r.this, o.this - 1) || fn(r.target, o.target - 1)) return "unknown";
    let a = {
      this: r.this[o.this - 1],
      target: r.target[o.target - 1]
    };
    if (a.target.listKey && a.this.listKey && a.target.container === a.this.container) return a.target.key > a.this.key ? "before" : "after";
    let c = oa[s.type],
        u = {
      this: c.indexOf(a.this.parentKey),
      target: c.indexOf(a.target.parentKey)
    };
    return u.target > u.this ? "before" : "after";
  }

  var He = new Set();

  function Ba(t, e, n) {
    if (!e.isFunctionDeclaration() || e.parentPath.isExportDeclaration()) return "unknown";
    let i = e.scope.getBinding(e.node.id.name);
    if (!i.references) return "before";
    let r = i.referencePaths,
        s;

    for (let o of r) if (!o.find(c => c.node === e.node)) {
      if (o.key !== "callee" || !o.parentPath.isCallExpression()) return "unknown";

      if (!He.has(o.node)) {
        He.add(o.node);

        try {
          let c = pn(t, o, n);
          if (s && s !== c) return "unknown";
          s = c;
        } finally {
          He.delete(o.node);
        }
      }
    }

    return s;
  }

  function Ca(t, e, n) {
    let i = n.get(t.node);
    if (!i) n.set(t.node, i = new Map());else if (i.has(e.node)) return i.get(e.node);
    let r = Ba(t, e, n);
    return i.set(e.node, r), r;
  }

  function Ta(t, e) {
    return this._resolve(t, e) || this;
  }

  function Oa(t, e) {
    if (!(e && e.indexOf(this) >= 0)) if (e = e || [], e.push(this), this.isVariableDeclarator()) {
      if (this.get("id").isIdentifier()) return this.get("init").resolve(t, e);
    } else if (this.isReferencedIdentifier()) {
      let n = this.scope.getBinding(this.node.name);
      if (!n || !n.constant || n.kind === "module") return;

      if (n.path !== this) {
        let i = n.path.resolve(t, e);
        return this.find(r => r.node === i.node) ? void 0 : i;
      }
    } else {
      if (this.isTypeCastExpression()) return this.get("expression").resolve(t, e);

      if (t && this.isMemberExpression()) {
        let n = this.toComputedKey();
        if (!ua(n)) return;
        let i = n.value,
            r = this.get("object").resolve(t, e);

        if (r.isObjectExpression()) {
          let s = r.get("properties");

          for (let o of s) {
            if (!o.isProperty()) continue;
            let a = o.get("key"),
                c = o.isnt("computed") && a.isIdentifier({
              name: i
            });
            if (c = c || a.isLiteral({
              value: i
            }), c) return o.get("value").resolve(t, e);
          }
        } else if (r.isArrayExpression() && !isNaN(+i)) {
          let o = r.get("elements")[i];
          if (o) return o.resolve(t, e);
        }
      }
    }
  }

  function Ia() {
    if (this.isIdentifier()) {
      let t = this.scope.getBinding(this.node.name);
      return t ? t.constant : !1;
    }

    return this.isLiteral() ? this.isRegExpLiteral() ? !1 : this.isTemplateLiteral() ? this.get("expressions").every(t => t.isConstantExpression()) : !0 : this.isUnaryExpression() ? this.node.operator !== "void" ? !1 : this.get("argument").isConstantExpression() : this.isBinaryExpression() ? this.get("left").isConstantExpression() && this.get("right").isConstantExpression() : !1;
  }

  function Fa() {
    return !!(this.isProgram() ? this : this.parentPath).find(n => {
      if (n.isProgram({
        sourceType: "module"
      }) || n.isClass()) return !0;
      if (n.isArrowFunctionExpression() && !n.get("body").isBlockStatement()) return !1;
      let i;
      if (n.isFunction()) i = n.node.body;else if (n.isProgram()) i = n.node;else return !1;

      for (let r of i.directives) if (r.value.value === "use strict") return !0;
    });
  }
});
var bn = p(m => {
  "use strict";

  Object.defineProperty(m, "__esModule", {
    value: !0
  });
  m._call = Na;
  m._getQueueContexts = ec;
  m._resyncKey = Ha;
  m._resyncList = Ya;
  m._resyncParent = $a;
  m._resyncRemoved = Xa;
  m.call = Ra;
  m.isBlacklisted = m.isDenylisted = La;
  m.popContext = Ja;
  m.pushContext = Ga;
  m.requeue = Za;
  m.resync = Wa;
  m.setContext = Ka;
  m.setKey = za;
  m.setScope = Ua;
  m.setup = Qa;
  m.skip = ja;
  m.skipKey = qa;
  m.stop = Va;
  m.visit = Ma;
  var Da = Ye(),
      yn = q();

  function Ra(t) {
    let e = this.opts;
    return this.debug(t), this.node && this._call(e[t]) ? !0 : this.node ? this._call(e[this.node.type] && e[this.node.type][t]) : !1;
  }

  function Na(t) {
    if (!t) return !1;

    for (let e of t) {
      if (!e) continue;
      let n = this.node;
      if (!n) return !0;
      let i = e.call(this.state, this, this.state);
      if (i && typeof i == "object" && typeof i.then == "function") throw new Error("You appear to be using a plugin with an async traversal visitor, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");
      if (i) throw new Error(`Unexpected return value from visitor method ${e}`);
      if (this.node !== n || this._traverseFlags > 0) return !0;
    }

    return !1;
  }

  function La() {
    var t;
    let e = (t = this.opts.denylist) != null ? t : this.opts.blacklist;
    return e && e.indexOf(this.node.type) > -1;
  }

  function mn(t, e) {
    t.context !== e && (t.context = e, t.state = e.state, t.opts = e.opts);
  }

  function Ma() {
    if (!this.node || this.isDenylisted() || this.opts.shouldSkip && this.opts.shouldSkip(this)) return !1;
    let t = this.context;
    return this.shouldSkip || this.call("enter") ? (this.debug("Skip..."), this.shouldStop) : (mn(this, t), this.debug("Recursing into..."), this.shouldStop = (0, Da.traverseNode)(this.node, this.opts, this.scope, this.state, this, this.skipKeys), mn(this, t), this.call("exit"), this.shouldStop);
  }

  function ja() {
    this.shouldSkip = !0;
  }

  function qa(t) {
    this.skipKeys == null && (this.skipKeys = {}), this.skipKeys[t] = !0;
  }

  function Va() {
    this._traverseFlags |= yn.SHOULD_SKIP | yn.SHOULD_STOP;
  }

  function Ua() {
    if (this.opts && this.opts.noScope) return;
    let t = this.parentPath;
    (this.key === "key" || this.listKey === "decorators") && t.isMethod() && (t = t.parentPath);
    let e;

    for (; t && !e;) {
      if (t.opts && t.opts.noScope) return;
      e = t.scope, t = t.parentPath;
    }

    this.scope = this.getScope(e), this.scope && this.scope.init();
  }

  function Ka(t) {
    return this.skipKeys != null && (this.skipKeys = {}), this._traverseFlags = 0, t && (this.context = t, this.state = t.state, this.opts = t.opts), this.setScope(), this;
  }

  function Wa() {
    this.removed || (this._resyncParent(), this._resyncList(), this._resyncKey());
  }

  function $a() {
    this.parentPath && (this.parent = this.parentPath.node);
  }

  function Ha() {
    if (!!this.container && this.node !== this.container[this.key]) {
      if (Array.isArray(this.container)) {
        for (let t = 0; t < this.container.length; t++) if (this.container[t] === this.node) return this.setKey(t);
      } else for (let t of Object.keys(this.container)) if (this.container[t] === this.node) return this.setKey(t);

      this.key = null;
    }
  }

  function Ya() {
    if (!this.parent || !this.inList) return;
    let t = this.parent[this.listKey];
    this.container !== t && (this.container = t || null);
  }

  function Xa() {
    (this.key == null || !this.container || this.container[this.key] !== this.node) && this._markRemoved();
  }

  function Ja() {
    this.contexts.pop(), this.contexts.length > 0 ? this.setContext(this.contexts[this.contexts.length - 1]) : this.setContext(void 0);
  }

  function Ga(t) {
    this.contexts.push(t), this.setContext(t);
  }

  function Qa(t, e, n, i) {
    this.listKey = n, this.container = e, this.parentPath = t || this.parentPath, this.setKey(i);
  }

  function za(t) {
    var e;
    this.key = t, this.node = this.container[this.key], this.type = (e = this.node) == null ? void 0 : e.type;
  }

  function Za(t = this) {
    if (t.removed) return;
    let e = this.contexts;

    for (let n of e) n.maybeQueue(t);
  }

  function ec() {
    let t = this,
        e = this.contexts;

    for (; !e.length && (t = t.parentPath, !!t);) e = t.contexts;

    return e;
  }
});
var vn = p(ge => {
  "use strict";

  Object.defineProperty(ge, "__esModule", {
    value: !0
  });
  ge.hooks = void 0;
  var tc = [function (t, e) {
    if (t.key === "test" && (e.isWhile() || e.isSwitchCase()) || t.key === "declaration" && e.isExportDeclaration() || t.key === "body" && e.isLabeledStatement() || t.listKey === "declarations" && e.isVariableDeclaration() && e.node.declarations.length === 1 || t.key === "expression" && e.isExpressionStatement()) return e.remove(), !0;
  }, function (t, e) {
    if (e.isSequenceExpression() && e.node.expressions.length === 1) return e.replaceWith(e.node.expressions[0]), !0;
  }, function (t, e) {
    if (e.isBinary()) return t.key === "left" ? e.replaceWith(e.node.right) : e.replaceWith(e.node.left), !0;
  }, function (t, e) {
    if (e.isIfStatement() && t.key === "consequent" || t.key === "body" && (e.isLoop() || e.isArrowFunctionExpression())) return t.replaceWith({
      type: "BlockStatement",
      body: []
    }), !0;
  }];
  ge.hooks = tc;
});
var En = p(V => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  });
  V._assertUnremoved = uc;
  V._callRemovalHooks = oc;
  V._markRemoved = cc;
  V._remove = ac;
  V._removeFromScope = sc;
  V.remove = rc;
  var nc = vn(),
      ic = U(),
      xn = q();

  function rc() {
    var t;

    if (this._assertUnremoved(), this.resync(), (t = this.opts) != null && t.noScope || this._removeFromScope(), this._callRemovalHooks()) {
      this._markRemoved();

      return;
    }

    this.shareCommentsWithSiblings(), this._remove(), this._markRemoved();
  }

  function sc() {
    let t = this.getBindingIdentifiers();
    Object.keys(t).forEach(e => this.scope.removeBinding(e));
  }

  function oc() {
    for (let t of nc.hooks) if (t(this, this.parentPath)) return !0;
  }

  function ac() {
    Array.isArray(this.container) ? (this.container.splice(this.key, 1), this.updateSiblingKeys(this.key, -1)) : this._replaceWith(null);
  }

  function cc() {
    this._traverseFlags |= xn.SHOULD_SKIP | xn.REMOVED, this.parent && ic.path.get(this.parent).delete(this.node), this.node = null;
  }

  function uc() {
    if (this.removed) throw this.buildCodeFrameError("NodePath has been removed so is read-only.");
  }
});
var Pn = p(ye => {
  "use strict";

  Object.defineProperty(ye, "__esModule", {
    value: !0
  });
  ye.default = void 0;
  var Sn = ___babel_types$,
      lc = Sn,
      {
    react: fc
  } = Sn,
      {
    cloneNode: hc,
    jsxExpressionContainer: dc,
    variableDeclaration: pc,
    variableDeclarator: gc
  } = lc,
      yc = {
    ReferencedIdentifier(t, e) {
      if (t.isJSXIdentifier() && fc.isCompatTag(t.node.name) && !t.parentPath.isJSXMemberExpression()) return;

      if (t.node.name === "this") {
        let i = t.scope;

        do if (i.path.isFunction() && !i.path.isArrowFunctionExpression()) break; while (i = i.parent);

        i && e.breakOnScopePaths.push(i.path);
      }

      let n = t.scope.getBinding(t.node.name);

      if (!!n) {
        for (let i of n.constantViolations) if (i.scope !== n.path.scope) {
          e.mutableBinding = !0, t.stop();
          return;
        }

        n === e.scope.getBinding(t.node.name) && (e.bindings[t.node.name] = n);
      }
    }

  },
      Xe = class {
    constructor(e, n) {
      this.breakOnScopePaths = void 0, this.bindings = void 0, this.mutableBinding = void 0, this.scopes = void 0, this.scope = void 0, this.path = void 0, this.attachAfter = void 0, this.breakOnScopePaths = [], this.bindings = {}, this.mutableBinding = !1, this.scopes = [], this.scope = n, this.path = e, this.attachAfter = !1;
    }

    isCompatibleScope(e) {
      for (let n of Object.keys(this.bindings)) {
        let i = this.bindings[n];
        if (!e.bindingIdentifierEquals(n, i.identifier)) return !1;
      }

      return !0;
    }

    getCompatibleScopes() {
      let e = this.path.scope;

      do {
        if (this.isCompatibleScope(e)) this.scopes.push(e);else break;
        if (this.breakOnScopePaths.indexOf(e.path) >= 0) break;
      } while (e = e.parent);
    }

    getAttachmentPath() {
      let e = this._getAttachmentPath();

      if (!e) return;
      let n = e.scope;
      if (n.path === e && (n = e.scope.parent), n.path.isProgram() || n.path.isFunction()) for (let i of Object.keys(this.bindings)) {
        if (!n.hasOwnBinding(i)) continue;
        let r = this.bindings[i];
        if (r.kind === "param" || r.path.parentKey === "params") continue;

        if (this.getAttachmentParentForPath(r.path).key >= e.key) {
          this.attachAfter = !0, e = r.path;

          for (let o of r.constantViolations) this.getAttachmentParentForPath(o).key > e.key && (e = o);
        }
      }
      return e;
    }

    _getAttachmentPath() {
      let n = this.scopes.pop();

      if (!!n) {
        if (n.path.isFunction()) {
          if (this.hasOwnParamBindings(n)) {
            if (this.scope === n) return;
            let i = n.path.get("body").get("body");

            for (let r = 0; r < i.length; r++) if (!i[r].node._blockHoist) return i[r];
          } else return this.getNextScopeAttachmentParent();
        } else if (n.path.isProgram()) return this.getNextScopeAttachmentParent();
      }
    }

    getNextScopeAttachmentParent() {
      let e = this.scopes.pop();
      if (e) return this.getAttachmentParentForPath(e.path);
    }

    getAttachmentParentForPath(e) {
      do if (!e.parentPath || Array.isArray(e.container) && e.isStatement()) return e; while (e = e.parentPath);
    }

    hasOwnParamBindings(e) {
      for (let n of Object.keys(this.bindings)) {
        if (!e.hasOwnBinding(n)) continue;
        let i = this.bindings[n];
        if (i.kind === "param" && i.constant) return !0;
      }

      return !1;
    }

    run() {
      if (this.path.traverse(yc, this), this.mutableBinding) return;
      this.getCompatibleScopes();
      let e = this.getAttachmentPath();
      if (!e || e.getFunctionParent() === this.path.getFunctionParent()) return;
      let n = e.scope.generateUidIdentifier("ref"),
          i = gc(n, this.path.node),
          r = this.attachAfter ? "insertAfter" : "insertBefore",
          [s] = e[r]([e.isVariableDeclarator() ? i : pc("var", [i])]),
          o = this.path.parentPath;
      return o.isJSXElement() && this.path.container === o.node.children && (n = dc(n)), this.path.replaceWith(hc(n)), e.isVariableDeclarator() ? s.get("init") : s.get("declarations.0.init");
    }

  };
  ye.default = Xe;
});
var An = p(A => {
  "use strict";

  Object.defineProperty(A, "__esModule", {
    value: !0
  });
  A._containerInsert = Ic;
  A._containerInsertAfter = Dc;
  A._containerInsertBefore = Fc;
  A._verifyNodeList = Mc;
  A.hoist = Vc;
  A.insertAfter = Nc;
  A.insertBefore = Oc;
  A.pushContainer = qc;
  A.unshiftContainer = jc;
  A.updateSiblingKeys = Lc;
  var mc = U(),
      bc = Pn(),
      Qe = q(),
      vc = ___babel_types$,
      {
    arrowFunctionExpression: xc,
    assertExpression: Ec,
    assignmentExpression: Sc,
    blockStatement: _n,
    callExpression: Pc,
    cloneNode: Je,
    expressionStatement: Ge,
    isAssignmentExpression: _c,
    isCallExpression: kc,
    isExpression: wc,
    isIdentifier: Ac,
    isSequenceExpression: Bc,
    isSuper: Cc,
    thisExpression: Tc
  } = vc;

  function Oc(t) {
    this._assertUnremoved();

    let e = this._verifyNodeList(t),
        {
      parentPath: n
    } = this;

    if (n.isExpressionStatement() || n.isLabeledStatement() || n.isExportNamedDeclaration() || n.isExportDefaultDeclaration() && this.isDeclaration()) return n.insertBefore(e);
    if (this.isNodeType("Expression") && !this.isJSXElement() || n.isForStatement() && this.key === "init") return this.node && e.push(this.node), this.replaceExpressionWithStatements(e);
    if (Array.isArray(this.container)) return this._containerInsertBefore(e);

    if (this.isStatementOrBlock()) {
      let i = this.node,
          r = i && (!this.isExpressionStatement() || i.expression != null);
      return this.replaceWith(_n(r ? [i] : [])), this.unshiftContainer("body", e);
    } else throw new Error("We don't know what to do with this node type. We were previously a Statement but we can't fit in here?");
  }

  function Ic(t, e) {
    this.updateSiblingKeys(t, e.length);
    let n = [];
    this.container.splice(t, 0, ...e);

    for (let r = 0; r < e.length; r++) {
      let s = t + r,
          o = this.getSibling(s);
      n.push(o), this.context && this.context.queue && o.pushContext(this.context);
    }

    let i = this._getQueueContexts();

    for (let r of n) {
      r.setScope(), r.debug("Inserted.");

      for (let s of i) s.maybeQueue(r, !0);
    }

    return n;
  }

  function Fc(t) {
    return this._containerInsert(this.key, t);
  }

  function Dc(t) {
    return this._containerInsert(this.key + 1, t);
  }

  var kn = t => t[t.length - 1];

  function wn(t) {
    return Bc(t.parent) && (kn(t.parent.expressions) !== t.node || wn(t.parentPath));
  }

  function Rc(t, e) {
    if (!_c(t) || !Ac(t.left)) return !1;
    let n = e.getBlockParent();
    return n.hasOwnBinding(t.left.name) && n.getOwnBinding(t.left.name).constantViolations.length <= 1;
  }

  function Nc(t) {
    if (this._assertUnremoved(), this.isSequenceExpression()) return kn(this.get("expressions")).insertAfter(t);

    let e = this._verifyNodeList(t),
        {
      parentPath: n
    } = this;

    if (n.isExpressionStatement() || n.isLabeledStatement() || n.isExportNamedDeclaration() || n.isExportDefaultDeclaration() && this.isDeclaration()) return n.insertAfter(e.map(i => wc(i) ? Ge(i) : i));

    if (this.isNodeType("Expression") && !this.isJSXElement() && !n.isJSXElement() || n.isForStatement() && this.key === "init") {
      if (this.node) {
        let i = this.node,
            {
          scope: r
        } = this;
        if (r.path.isPattern()) return Ec(i), this.replaceWith(Pc(xc([], i), [])), this.get("callee.body").insertAfter(e), [this];
        if (wn(this)) e.unshift(i);else if (kc(i) && Cc(i.callee)) e.unshift(i), e.push(Tc());else if (Rc(i, r)) e.unshift(i), e.push(Je(i.left));else if (r.isPure(i, !0)) e.push(i);else {
          n.isMethod({
            computed: !0,
            key: i
          }) && (r = r.parent);
          let s = r.generateDeclaredUidIdentifier();
          e.unshift(Ge(Sc("=", Je(s), i))), e.push(Ge(Je(s)));
        }
      }

      return this.replaceExpressionWithStatements(e);
    } else {
      if (Array.isArray(this.container)) return this._containerInsertAfter(e);

      if (this.isStatementOrBlock()) {
        let i = this.node,
            r = i && (!this.isExpressionStatement() || i.expression != null);
        return this.replaceWith(_n(r ? [i] : [])), this.pushContainer("body", e);
      } else throw new Error("We don't know what to do with this node type. We were previously a Statement but we can't fit in here?");
    }
  }

  function Lc(t, e) {
    if (!this.parent) return;
    let n = mc.path.get(this.parent);

    for (let [, i] of n) i.key >= t && (i.key += e);
  }

  function Mc(t) {
    if (!t) return [];
    Array.isArray(t) || (t = [t]);

    for (let e = 0; e < t.length; e++) {
      let n = t[e],
          i;

      if (n ? typeof n != "object" ? i = "contains a non-object node" : n.type ? n instanceof Qe.default && (i = "has a NodePath when it expected a raw object") : i = "without a type" : i = "has falsy node", i) {
        let r = Array.isArray(n) ? "array" : typeof n;
        throw new Error(`Node list ${i} with the index of ${e} and type of ${r}`);
      }
    }

    return t;
  }

  function jc(t, e) {
    return this._assertUnremoved(), e = this._verifyNodeList(e), Qe.default.get({
      parentPath: this,
      parent: this.node,
      container: this.node[t],
      listKey: t,
      key: 0
    }).setContext(this.context)._containerInsertBefore(e);
  }

  function qc(t, e) {
    this._assertUnremoved();

    let n = this._verifyNodeList(e),
        i = this.node[t];

    return Qe.default.get({
      parentPath: this,
      parent: this.node,
      container: i,
      listKey: t,
      key: i.length
    }).setContext(this.context).replaceWithMultiple(n);
  }

  function Vc(t = this.scope) {
    return new bc.default(this, t).run();
  }
});
var Tn = p(E => {
  "use strict";

  Object.defineProperty(E, "__esModule", {
    value: !0
  });
  E._getKey = su;
  E._getPattern = ou;
  E.get = ru;
  E.getAllNextSiblings = nu;
  E.getAllPrevSiblings = iu;
  E.getBindingIdentifierPaths = uu;
  E.getBindingIdentifiers = au;
  E.getCompletionRecords = zc;
  E.getNextSibling = tu;
  E.getOpposite = Jc;
  E.getOuterBindingIdentifierPaths = lu;
  E.getOuterBindingIdentifiers = cu;
  E.getPrevSibling = eu;
  E.getSibling = Zc;
  var Ze = q(),
      Uc = ___babel_types$,
      {
    getBindingIdentifiers: Cn,
    getOuterBindingIdentifiers: Kc,
    isDeclaration: Wc,
    numericLiteral: $c,
    unaryExpression: Hc
  } = Uc,
      et = 0,
      ne = 1;

  function Yc(t) {
    return {
      type: et,
      path: t
    };
  }

  function Xc(t) {
    return {
      type: ne,
      path: t
    };
  }

  function Jc() {
    return this.key === "left" ? this.getSibling("right") : this.key === "right" ? this.getSibling("left") : null;
  }

  function G(t, e, n) {
    return t && e.push(...Q(t, n)), e;
  }

  function Gc(t, e, n) {
    let i = [];

    for (let r = 0; r < t.length; r++) {
      let s = t[r],
          o = Q(s, n),
          a = [],
          c = [];

      for (let u of o) u.type === et && a.push(u), u.type === ne && c.push(u);

      a.length && (i = a), e.push(...c);
    }

    return e.push(...i), e;
  }

  function Qc(t) {
    t.forEach(e => {
      e.type = ne;
    });
  }

  function ze(t, e) {
    t.forEach(n => {
      n.path.isBreakStatement({
        label: null
      }) && (e ? n.path.replaceWith(Hc("void", $c(0))) : n.path.remove());
    });
  }

  function Bn(t, e) {
    let n = [];

    if (e.canHaveBreak) {
      let i = [];

      for (let r = 0; r < t.length; r++) {
        let s = t[r],
            o = Object.assign({}, e, {
          inCaseClause: !1
        });
        s.isBlockStatement() && (e.inCaseClause || e.shouldPopulateBreak) ? o.shouldPopulateBreak = !0 : o.shouldPopulateBreak = !1;
        let a = Q(s, o);

        if (a.length > 0 && a.every(c => c.type === ne)) {
          i.length > 0 && a.every(c => c.path.isBreakStatement({
            label: null
          })) ? (Qc(i), n.push(...i), i.some(c => c.path.isDeclaration()) && (n.push(...a), ze(a, !0)), ze(a, !1)) : (n.push(...a), e.shouldPopulateBreak || ze(a, !0));
          break;
        }

        if (r === t.length - 1) n.push(...a);else {
          i = [];

          for (let c = 0; c < a.length; c++) {
            let u = a[c];
            u.type === ne && n.push(u), u.type === et && i.push(u);
          }
        }
      }
    } else if (t.length) for (let i = t.length - 1; i >= 0; i--) {
      let r = Q(t[i], e);

      if (r.length > 1 || r.length === 1 && !r[0].path.isVariableDeclaration()) {
        n.push(...r);
        break;
      }
    }

    return n;
  }

  function Q(t, e) {
    let n = [];
    if (t.isIfStatement()) n = G(t.get("consequent"), n, e), n = G(t.get("alternate"), n, e);else {
      if (t.isDoExpression() || t.isFor() || t.isWhile() || t.isLabeledStatement()) return G(t.get("body"), n, e);
      if (t.isProgram() || t.isBlockStatement()) return Bn(t.get("body"), e);
      if (t.isFunction()) return Q(t.get("body"), e);
      if (t.isTryStatement()) n = G(t.get("block"), n, e), n = G(t.get("handler"), n, e);else {
        if (t.isCatchClause()) return G(t.get("body"), n, e);
        if (t.isSwitchStatement()) return Gc(t.get("cases"), n, e);
        if (t.isSwitchCase()) return Bn(t.get("consequent"), {
          canHaveBreak: !0,
          shouldPopulateBreak: !1,
          inCaseClause: !0
        });
        t.isBreakStatement() ? n.push(Xc(t)) : n.push(Yc(t));
      }
    }
    return n;
  }

  function zc() {
    return Q(this, {
      canHaveBreak: !1,
      shouldPopulateBreak: !1,
      inCaseClause: !1
    }).map(e => e.path);
  }

  function Zc(t) {
    return Ze.default.get({
      parentPath: this.parentPath,
      parent: this.parent,
      container: this.container,
      listKey: this.listKey,
      key: t
    }).setContext(this.context);
  }

  function eu() {
    return this.getSibling(this.key - 1);
  }

  function tu() {
    return this.getSibling(this.key + 1);
  }

  function nu() {
    let t = this.key,
        e = this.getSibling(++t),
        n = [];

    for (; e.node;) n.push(e), e = this.getSibling(++t);

    return n;
  }

  function iu() {
    let t = this.key,
        e = this.getSibling(--t),
        n = [];

    for (; e.node;) n.push(e), e = this.getSibling(--t);

    return n;
  }

  function ru(t, e = !0) {
    e === !0 && (e = this.context);
    let n = t.split(".");
    return n.length === 1 ? this._getKey(t, e) : this._getPattern(n, e);
  }

  function su(t, e) {
    let n = this.node,
        i = n[t];
    return Array.isArray(i) ? i.map((r, s) => Ze.default.get({
      listKey: t,
      parentPath: this,
      parent: n,
      container: i,
      key: s
    }).setContext(e)) : Ze.default.get({
      parentPath: this,
      parent: n,
      container: n,
      key: t
    }).setContext(e);
  }

  function ou(t, e) {
    let n = this;

    for (let i of t) i === "." ? n = n.parentPath : Array.isArray(n) ? n = n[i] : n = n.get(i, e);

    return n;
  }

  function au(t) {
    return Cn(this.node, t);
  }

  function cu(t) {
    return Kc(this.node, t);
  }

  function uu(t = !1, e = !1) {
    let i = [this],
        r = Object.create(null);

    for (; i.length;) {
      let s = i.shift();
      if (!s || !s.node) continue;
      let o = Cn.keys[s.node.type];

      if (s.isIdentifier()) {
        t ? (r[s.node.name] = r[s.node.name] || []).push(s) : r[s.node.name] = s;
        continue;
      }

      if (s.isExportDeclaration()) {
        let a = s.get("declaration");
        Wc(a) && i.push(a);
        continue;
      }

      if (e) {
        if (s.isFunctionDeclaration()) {
          i.push(s.get("id"));
          continue;
        }

        if (s.isFunctionExpression()) continue;
      }

      if (o) for (let a = 0; a < o.length; a++) {
        let c = o[a],
            u = s.get(c);
        Array.isArray(u) ? i.push(...u) : u.node && i.push(u);
      }
    }

    return r;
  }

  function lu(t = !1) {
    return this.getBindingIdentifierPaths(t, !0);
  }
});
var On = p(ie => {
  "use strict";

  Object.defineProperty(ie, "__esModule", {
    value: !0
  });
  ie.addComment = gu;
  ie.addComments = yu;
  ie.shareCommentsWithSiblings = pu;
  var fu = ___babel_types$,
      {
    addComment: hu,
    addComments: du
  } = fu;

  function pu() {
    if (typeof this.key == "string") return;
    let t = this.node;
    if (!t) return;
    let e = t.trailingComments,
        n = t.leadingComments;
    if (!e && !n) return;
    let i = this.getSibling(this.key - 1),
        r = this.getSibling(this.key + 1),
        s = Boolean(i.node),
        o = Boolean(r.node);
    s && !o ? i.addComments("trailing", e) : o && !s && r.addComments("leading", n);
  }

  function gu(t, e, n) {
    hu(this.node, t, e, n);
  }

  function yu(t, e) {
    du(this.node, t, e);
  }
});
var Dn = p(x => {
  "use strict";

  Object.defineProperty(x, "__esModule", {
    value: !0
  });
  x.isBindingIdentifier = ju;
  x.isBlockScoped = Wu;
  x.isExistentialTypeParam = Zu;
  x.isExpression = Vu;
  x.isFlow = Ju;
  x.isForAwaitStatement = zu;
  x.isGenerated = Yu;
  x.isNumericLiteralTypeAnnotation = el;
  x.isPure = Xu;
  x.isReferenced = Ku;
  x.isReferencedIdentifier = Lu;
  x.isReferencedMemberExpression = Mu;
  x.isRestProperty = Gu;
  x.isScope = Uu;
  x.isSpreadProperty = Qu;
  x.isStatement = qu;
  x.isUser = Hu;
  x.isVar = $u;
  var mu = ___babel_types$,
      {
    isBinding: bu,
    isBlockScoped: vu,
    isExportDeclaration: xu,
    isExpression: Eu,
    isFlow: Su,
    isForStatement: Pu,
    isForXStatement: _u,
    isIdentifier: In,
    isImportDeclaration: ku,
    isImportSpecifier: wu,
    isJSXIdentifier: Au,
    isJSXMemberExpression: Bu,
    isMemberExpression: Cu,
    isRestElement: Fn,
    isReferenced: tt,
    isScope: Tu,
    isStatement: Ou,
    isVar: Iu,
    isVariableDeclaration: Fu,
    react: Du,
    isForOfStatement: Ru
  } = mu,
      {
    isCompatTag: Nu
  } = Du;

  function Lu(t) {
    let {
      node: e,
      parent: n
    } = this;
    if (!In(e, t) && !Bu(n, t)) if (Au(e, t)) {
      if (Nu(e.name)) return !1;
    } else return !1;
    return tt(e, n, this.parentPath.parent);
  }

  function Mu() {
    let {
      node: t,
      parent: e
    } = this;
    return Cu(t) && tt(t, e);
  }

  function ju() {
    let {
      node: t,
      parent: e
    } = this,
        n = this.parentPath.parent;
    return In(t) && bu(t, e, n);
  }

  function qu() {
    let {
      node: t,
      parent: e
    } = this;
    return Ou(t) ? !(Fu(t) && (_u(e, {
      left: t
    }) || Pu(e, {
      init: t
    }))) : !1;
  }

  function Vu() {
    return this.isIdentifier() ? this.isReferencedIdentifier() : Eu(this.node);
  }

  function Uu() {
    return Tu(this.node, this.parent);
  }

  function Ku() {
    return tt(this.node, this.parent);
  }

  function Wu() {
    return vu(this.node);
  }

  function $u() {
    return Iu(this.node);
  }

  function Hu() {
    return this.node && !!this.node.loc;
  }

  function Yu() {
    return !this.isUser();
  }

  function Xu(t) {
    return this.scope.isPure(this.node, t);
  }

  function Ju() {
    let {
      node: t
    } = this;
    return Su(t) ? !0 : ku(t) ? t.importKind === "type" || t.importKind === "typeof" : xu(t) ? t.exportKind === "type" : wu(t) ? t.importKind === "type" || t.importKind === "typeof" : !1;
  }

  function Gu() {
    return Fn(this.node) && this.parentPath && this.parentPath.isObjectPattern();
  }

  function Qu() {
    return Fn(this.node) && this.parentPath && this.parentPath.isObjectExpression();
  }

  function zu() {
    return Ru(this.node, {
      await: !0
    });
  }

  function Zu() {
    throw new Error("`path.isExistentialTypeParam` has been renamed to `path.isExistsTypeAnnotation()` in Babel 7.");
  }

  function el() {
    throw new Error("`path.isNumericLiteralTypeAnnotation()` has been renamed to `path.isNumberLiteralTypeAnnotation()` in Babel 7.");
  }
});
var q = p(I => {
  "use strict";

  Object.defineProperty(I, "__esModule", {
    value: !0
  });
  I.default = I.SHOULD_STOP = I.SHOULD_SKIP = I.REMOVED = void 0;
  var tl = we(),
      nl = __debug$,
      il = Z(),
      rl = Ie(),
      Ln = ___babel_types$,
      xe = Ln,
      Rn = U(),
      sl = ___babel_generator$,
      ol = Ct(),
      al = Xt(),
      cl = en(),
      ul = rn(),
      ll = un(),
      Mn = gn(),
      fl = bn(),
      hl = En(),
      dl = An(),
      pl = Tn(),
      gl = On(),
      yl = Dn(),
      {
    validate: ml
  } = Ln,
      Nn = nl("babel"),
      me = 1 << 0;
  I.REMOVED = me;
  var be = 1 << 1;
  I.SHOULD_STOP = be;
  var ve = 1 << 2;
  I.SHOULD_SKIP = ve;
  var F = class {
    constructor(e, n) {
      this.contexts = [], this.state = null, this.opts = null, this._traverseFlags = 0, this.skipKeys = null, this.parentPath = null, this.container = null, this.listKey = null, this.key = null, this.node = null, this.type = null, this.parent = n, this.hub = e, this.data = null, this.context = null, this.scope = null;
    }

    static get({
      hub: e,
      parentPath: n,
      parent: i,
      container: r,
      listKey: s,
      key: o
    }) {
      if (!e && n && (e = n.hub), !i) throw new Error("To get a node path the parent needs to exist");
      let a = r[o],
          c = Rn.path.get(i);
      c || (c = new Map(), Rn.path.set(i, c));
      let u = c.get(a);
      return u || (u = new F(e, i), a && c.set(a, u)), u.setup(n, r, s, o), u;
    }

    getScope(e) {
      return this.isScope() ? new rl.default(this) : e;
    }

    setData(e, n) {
      return this.data == null && (this.data = Object.create(null)), this.data[e] = n;
    }

    getData(e, n) {
      this.data == null && (this.data = Object.create(null));
      let i = this.data[e];
      return i === void 0 && n !== void 0 && (i = this.data[e] = n), i;
    }

    hasNode() {
      return this.node != null;
    }

    buildCodeFrameError(e, n = SyntaxError) {
      return this.hub.buildError(this.node, e, n);
    }

    traverse(e, n) {
      (0, il.default)(this.node, e, this.scope, n, this);
    }

    set(e, n) {
      ml(this.node, e, n), this.node[e] = n;
    }

    getPathLocation() {
      let e = [],
          n = this;

      do {
        let i = n.key;
        n.inList && (i = `${n.listKey}[${i}]`), e.unshift(i);
      } while (n = n.parentPath);

      return e.join(".");
    }

    debug(e) {
      !Nn.enabled || Nn(`${this.getPathLocation()} ${this.type}: ${e}`);
    }

    toString() {
      return (0, sl.default)(this.node).code;
    }

    get inList() {
      return !!this.listKey;
    }

    set inList(e) {
      e || (this.listKey = null);
    }

    get parentKey() {
      return this.listKey || this.key;
    }

    get shouldSkip() {
      return !!(this._traverseFlags & ve);
    }

    set shouldSkip(e) {
      e ? this._traverseFlags |= ve : this._traverseFlags &= ~ve;
    }

    get shouldStop() {
      return !!(this._traverseFlags & be);
    }

    set shouldStop(e) {
      e ? this._traverseFlags |= be : this._traverseFlags &= ~be;
    }

    get removed() {
      return !!(this._traverseFlags & me);
    }

    set removed(e) {
      e ? this._traverseFlags |= me : this._traverseFlags &= ~me;
    }

  };
  Object.assign(F.prototype, ol, al, cl, ul, ll, Mn, fl, hl, dl, pl, gl);
  F.prototype._guessExecutionStatusRelativeToDifferentFunctions = Mn._guessExecutionStatusRelativeTo;

  for (let t of xe.TYPES) {
    let e = `is${t}`,
        n = xe[e];
    F.prototype[e] = function (i) {
      return n(this.node, i);
    }, F.prototype[`assert${t}`] = function (i) {
      if (!n(this.node, i)) throw new TypeError(`Expected node path of type ${t}`);
    };
  }

  Object.assign(F.prototype, yl);

  for (let t of Object.keys(tl)) t[0] !== "_" && (xe.TYPES.includes(t) || xe.TYPES.push(t));

  var bl = F;
  I.default = bl;
});
var jn = p(Ee => {
  "use strict";

  Object.defineProperty(Ee, "__esModule", {
    value: !0
  });
  Ee.default = void 0;
  var vl = q(),
      xl = ___babel_types$,
      {
    VISITOR_KEYS: El
  } = xl,
      nt = class {
    constructor(e, n, i, r) {
      this.queue = null, this.priorityQueue = null, this.parentPath = r, this.scope = e, this.state = i, this.opts = n;
    }

    shouldVisit(e) {
      let n = this.opts;
      if (n.enter || n.exit || n[e.type]) return !0;
      let i = El[e.type];
      if (!(i != null && i.length)) return !1;

      for (let r of i) if (e[r]) return !0;

      return !1;
    }

    create(e, n, i, r) {
      return vl.default.get({
        parentPath: this.parentPath,
        parent: e,
        container: n,
        key: i,
        listKey: r
      });
    }

    maybeQueue(e, n) {
      this.queue && (n ? this.queue.push(e) : this.priorityQueue.push(e));
    }

    visitMultiple(e, n, i) {
      if (e.length === 0) return !1;
      let r = [];

      for (let s = 0; s < e.length; s++) {
        let o = e[s];
        o && this.shouldVisit(o) && r.push(this.create(n, e, s, i));
      }

      return this.visitQueue(r);
    }

    visitSingle(e, n) {
      return this.shouldVisit(e[n]) ? this.visitQueue([this.create(e, e, n)]) : !1;
    }

    visitQueue(e) {
      this.queue = e, this.priorityQueue = [];
      let n = new WeakSet(),
          i = !1;

      for (let r of e) {
        if (r.resync(), (r.contexts.length === 0 || r.contexts[r.contexts.length - 1] !== this) && r.pushContext(this), r.key === null) continue;
        let {
          node: s
        } = r;

        if (!n.has(s)) {
          if (s && n.add(s), r.visit()) {
            i = !0;
            break;
          }

          if (this.priorityQueue.length && (i = this.visitQueue(this.priorityQueue), this.priorityQueue = [], this.queue = e, i)) break;
        }
      }

      for (let r of e) r.popContext();

      return this.queue = null, i;
    }

    visit(e, n) {
      let i = e[n];
      return i ? Array.isArray(i) ? this.visitMultiple(i, e, n) : this.visitSingle(e, n) : !1;
    }

  };
  Ee.default = nt;
});
var Ye = p(it => {
  "use strict";

  Object.defineProperty(it, "__esModule", {
    value: !0
  });
  it.traverseNode = kl;
  var Sl = jn(),
      Pl = ___babel_types$,
      {
    VISITOR_KEYS: _l
  } = Pl;

  function kl(t, e, n, i, r, s) {
    let o = _l[t.type];
    if (!o) return !1;
    let a = new Sl.default(n, e, i, r);

    for (let c of o) if (!(s && s[c]) && a.visit(t, c)) return !0;

    return !1;
  }
});
var qn = p(Se => {
  "use strict";

  Object.defineProperty(Se, "__esModule", {
    value: !0
  });
  Se.default = void 0;
  var rt = class {
    getCode() {}

    getScope() {}

    addHelper() {
      throw new Error("Helpers are not supported by the default hub.");
    }

    buildError(e, n, i = TypeError) {
      return new i(n);
    }

  };
  Se.default = rt;
});
var Z = p(R => {
  "use strict";

  Object.defineProperty(R, "__esModule", {
    value: !0
  });
  Object.defineProperty(R, "Hub", {
    enumerable: !0,
    get: function () {
      return Cl.default;
    }
  });
  Object.defineProperty(R, "NodePath", {
    enumerable: !0,
    get: function () {
      return Al.default;
    }
  });
  Object.defineProperty(R, "Scope", {
    enumerable: !0,
    get: function () {
      return Bl.default;
    }
  });
  R.visitors = R.default = void 0;
  var re = Ae();
  R.visitors = re;
  var wl = ___babel_types$,
      Vn = U(),
      Un = Ye(),
      Al = q(),
      Bl = Ie(),
      Cl = qn(),
      {
    VISITOR_KEYS: Tl,
    removeProperties: Ol,
    traverseFast: Kn
  } = wl;

  function B(t, e = {}, n, i, r) {
    if (!!t) {
      if (!e.noScope && !n && t.type !== "Program" && t.type !== "File") throw new Error(`You must pass a scope and parentPath unless traversing a Program/File. Instead of that you tried to traverse a ${t.type} node without passing scope and parentPath.`);
      !Tl[t.type] || (re.explode(e), (0, Un.traverseNode)(t, e, n, i, r));
    }
  }

  var Il = B;
  R.default = Il;
  B.visitors = re;
  B.verify = re.verify;
  B.explode = re.explode;

  B.cheap = function (t, e) {
    return Kn(t, e);
  };

  B.node = function (t, e, n, i, r, s) {
    (0, Un.traverseNode)(t, e, n, i, r, s);
  };

  B.clearNode = function (t, e) {
    Ol(t, e), Vn.path.delete(t);
  };

  B.removeProperties = function (t, e) {
    return Kn(t, B.clearNode, e), t;
  };

  function Fl(t, e) {
    t.node.type === e.type && (e.has = !0, t.stop());
  }

  B.hasType = function (t, e, n) {
    if (n != null && n.includes(t.type)) return !1;
    if (t.type === e) return !0;
    let i = {
      has: !1,
      type: e
    };
    return B(t, {
      noScope: !0,
      denylist: n,
      enter: Fl
    }, null, i), i.has;
  };

  B.cache = Vn;
});
var $n = ti(Z()),
    hf = !0,
    {
  Hub: df,
  NodePath: pf,
  Scope: gf,
  visitors: yf
} = $n,
    {
  default: Wn,
  ...Dl
} = $n,
    mf = Wn !== void 0 ? Wn : Dl;
export { df as Hub, pf as NodePath, gf as Scope, hf as __esModule, mf as default, yf as visitors };