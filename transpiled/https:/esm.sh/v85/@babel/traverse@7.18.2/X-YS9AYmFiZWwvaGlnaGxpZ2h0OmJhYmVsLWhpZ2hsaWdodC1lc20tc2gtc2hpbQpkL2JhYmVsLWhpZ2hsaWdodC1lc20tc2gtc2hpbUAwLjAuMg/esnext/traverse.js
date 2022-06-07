/* esm.sh - esbuild bundle(@babel/traverse@7.18.2) esnext production */
var __global$ = globalThis || (typeof window !== "undefined" ? window : self);

import * as ___babel_helper_hoist_variables$$ from "/transpiled/https://esm.sh/v85/@babel/helper-hoist-variables@7.16.7/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-hoist-variables.js";

const ___babel_helper_hoist_variables$ = Object.assign({
  __esModule: true
}, ___babel_helper_hoist_variables$$);

import ___babel_parser$ from "/transpiled/https://esm.sh/v85/@babel/parser@7.18.4/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/parser.js";
import * as ___babel_code_frame$$ from "/transpiled/https://esm.sh/v85/@babel/code-frame@7.16.7/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/code-frame.js";

const ___babel_code_frame$ = Object.assign({
  __esModule: true
}, ___babel_code_frame$$);

import __globals$ from "/transpiled/https://esm.sh/v85/globals@11.12.0/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/globals.js";
import * as ___babel_generator$$ from "/transpiled/https://esm.sh/v85/@babel/generator@7.18.2/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/generator.js";

const ___babel_generator$ = Object.assign({
  __esModule: true
}, ___babel_generator$$);

import ___babel_types$ from "/transpiled/https://esm.sh/v85/@babel/types@7.18.4/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/types.js";
import * as ___babel_helper_environment_visitor$$ from "/transpiled/https://esm.sh/v85/@babel/helper-environment-visitor@7.18.2/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-environment-visitor.js";

const ___babel_helper_environment_visitor$ = Object.assign({
  __esModule: true
}, ___babel_helper_environment_visitor$$);

import * as ___babel_helper_split_export_declaration$$ from "/transpiled/https://esm.sh/v85/@babel/helper-split-export-declaration@7.16.7/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-split-export-declaration.js";

const ___babel_helper_split_export_declaration$ = Object.assign({
  __esModule: true
}, ___babel_helper_split_export_declaration$$);

import * as ___babel_helper_function_name$$ from "/transpiled/https://esm.sh/v85/@babel/helper-function-name@7.17.9/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-function-name.js";

const ___babel_helper_function_name$ = Object.assign({
  __esModule: true
}, ___babel_helper_function_name$$);

import __debug$ from "/transpiled/https://esm.sh/v85/debug@4.3.4/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/debug.js";
var $n = Object.create;
var Ne = Object.defineProperty;
var Hn = Object.getOwnPropertyDescriptor;
var Yn = Object.getOwnPropertyNames;
var Xn = Object.getPrototypeOf,
    Jn = Object.prototype.hasOwnProperty;

var o = (t, e) => Ne(t, "name", {
  value: e,
  configurable: !0
}),
    p = (t => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(t, {
  get: (e, n) => (typeof require != "undefined" ? require : e)[n]
}) : t)(function (t) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});

var g = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);

var Qn = (t, e, n, i) => {
  if (e && typeof e == "object" || typeof e == "function") for (let r of Yn(e)) !Jn.call(t, r) && r !== n && Ne(t, r, {
    get: () => e[r],
    enumerable: !(i = Hn(e, r)) || i.enumerable
  });
  return t;
};

var lt = (t, e, n) => (n = t != null ? $n(Xn(t)) : {}, Qn(e || !t || !t.__esModule ? Ne(n, "default", {
  value: t,
  enumerable: !0
}) : n, t));

var Le = g(h => {
  "use strict";

  Object.defineProperty(h, "__esModule", {
    value: !0
  });
  h.Var = h.User = h.Statement = h.SpreadProperty = h.Scope = h.RestProperty = h.ReferencedMemberExpression = h.ReferencedIdentifier = h.Referenced = h.Pure = h.NumericLiteralTypeAnnotation = h.Generated = h.ForAwaitStatement = h.Flow = h.Expression = h.ExistentialTypeParam = h.BlockScoped = h.BindingIdentifier = void 0;
  var Gn = ___babel_types$,
      {
    isBinding: zn,
    isBlockScoped: Zn,
    isExportDeclaration: ei,
    isExpression: ti,
    isFlow: ni,
    isForStatement: ii,
    isForXStatement: ri,
    isIdentifier: ft,
    isImportDeclaration: si,
    isImportSpecifier: oi,
    isJSXIdentifier: ai,
    isJSXMemberExpression: ci,
    isMemberExpression: ui,
    isReferenced: Re,
    isScope: li,
    isStatement: fi,
    isVar: hi,
    isVariableDeclaration: di,
    react: pi
  } = Gn,
      {
    isCompatTag: gi
  } = pi,
      yi = {
    types: ["Identifier", "JSXIdentifier"],

    checkPath(t, e) {
      let {
        node: n,
        parent: i
      } = t;
      if (!ft(n, e) && !ci(i, e)) if (ai(n, e)) {
        if (gi(n.name)) return !1;
      } else return !1;
      return Re(n, i, t.parentPath.parent);
    }

  };
  h.ReferencedIdentifier = yi;
  var mi = {
    types: ["MemberExpression"],

    checkPath({
      node: t,
      parent: e
    }) {
      return ui(t) && Re(t, e);
    }

  };
  h.ReferencedMemberExpression = mi;
  var bi = {
    types: ["Identifier"],

    checkPath(t) {
      let {
        node: e,
        parent: n
      } = t,
          i = t.parentPath.parent;
      return ft(e) && zn(e, n, i);
    }

  };
  h.BindingIdentifier = bi;
  var vi = {
    types: ["Statement"],

    checkPath({
      node: t,
      parent: e
    }) {
      return fi(t) ? !(di(t) && (ri(e, {
        left: t
      }) || ii(e, {
        init: t
      }))) : !1;
    }

  };
  h.Statement = vi;
  var xi = {
    types: ["Expression"],

    checkPath(t) {
      return t.isIdentifier() ? t.isReferencedIdentifier() : ti(t.node);
    }

  };
  h.Expression = xi;
  var Ei = {
    types: ["Scopable", "Pattern"],

    checkPath(t) {
      return li(t.node, t.parent);
    }

  };
  h.Scope = Ei;
  var Pi = {
    checkPath(t) {
      return Re(t.node, t.parent);
    }

  };
  h.Referenced = Pi;
  var Si = {
    checkPath(t) {
      return Zn(t.node);
    }

  };
  h.BlockScoped = Si;
  var ki = {
    types: ["VariableDeclaration"],

    checkPath(t) {
      return hi(t.node);
    }

  };
  h.Var = ki;
  var _i = {
    checkPath(t) {
      return t.node && !!t.node.loc;
    }

  };
  h.User = _i;
  var wi = {
    checkPath(t) {
      return !t.isUser();
    }

  };
  h.Generated = wi;
  var Ai = {
    checkPath(t, e) {
      return t.scope.isPure(t.node, e);
    }

  };
  h.Pure = Ai;
  var Bi = {
    types: ["Flow", "ImportDeclaration", "ExportDeclaration", "ImportSpecifier"],

    checkPath({
      node: t
    }) {
      return ni(t) ? !0 : si(t) ? t.importKind === "type" || t.importKind === "typeof" : ei(t) ? t.exportKind === "type" : oi(t) ? t.importKind === "type" || t.importKind === "typeof" : !1;
    }

  };
  h.Flow = Bi;
  var Ci = {
    types: ["RestElement"],

    checkPath(t) {
      return t.parentPath && t.parentPath.isObjectPattern();
    }

  };
  h.RestProperty = Ci;
  var Oi = {
    types: ["RestElement"],

    checkPath(t) {
      return t.parentPath && t.parentPath.isObjectExpression();
    }

  };
  h.SpreadProperty = Oi;
  var Ti = {
    types: ["ExistsTypeAnnotation"]
  };
  h.ExistentialTypeParam = Ti;
  var Ii = {
    types: ["NumberLiteralTypeAnnotation"]
  };
  h.NumericLiteralTypeAnnotation = Ii;
  var Fi = {
    types: ["ForOfStatement"],

    checkPath({
      node: t
    }) {
      return t.await === !0;
    }

  };
  h.ForAwaitStatement = Fi;
});
var je = g(Z => {
  "use strict";

  Object.defineProperty(Z, "__esModule", {
    value: !0
  });
  Z.explode = pt;
  Z.merge = qi;
  Z.verify = gt;
  var Di = Le(),
      Ni = ___babel_types$,
      {
    DEPRECATED_KEYS: Ri,
    FLIPPED_ALIAS_KEYS: Li,
    TYPES: ji
  } = Ni;

  function pt(t) {
    if (t._exploded) return t;
    t._exploded = !0;

    for (let e of Object.keys(t)) {
      if (H(e)) continue;
      let n = e.split("|");
      if (n.length === 1) continue;
      let i = t[e];
      delete t[e];

      for (let r of n) t[r] = i;
    }

    gt(t), delete t.__esModule, Vi(t), dt(t);

    for (let e of Object.keys(t)) {
      if (H(e)) continue;
      let n = Di[e];
      if (!n) continue;
      let i = t[e];

      for (let r of Object.keys(i)) i[r] = Ui(n, i[r]);

      if (delete t[e], n.types) for (let r of n.types) t[r] ? oe(t[r], i) : t[r] = i;else oe(t, i);
    }

    for (let e of Object.keys(t)) {
      if (H(e)) continue;
      let n = t[e],
          i = Li[e],
          r = Ri[e];

      if (r && (console.trace(`Visitor defined for ${e} but it has been renamed to ${r}`), i = [r]), !!i) {
        delete t[e];

        for (let s of i) {
          let a = t[s];
          a ? oe(a, n) : t[s] = Object.assign({}, n);
        }
      }
    }

    for (let e of Object.keys(t)) H(e) || dt(t[e]);

    return t;
  }

  o(pt, "explode");

  function gt(t) {
    if (!t._verified) {
      if (typeof t == "function") throw new Error("You passed `traverse()` a function when it expected a visitor object, are you sure you didn't mean `{ enter: Function }`?");

      for (let e of Object.keys(t)) {
        if ((e === "enter" || e === "exit") && ht(e, t[e]), H(e)) continue;
        if (ji.indexOf(e) < 0) throw new Error(`You gave us a visitor for the node type ${e} but it's not a valid type`);
        let n = t[e];
        if (typeof n == "object") for (let i of Object.keys(n)) if (i === "enter" || i === "exit") ht(`${e}.${i}`, n[i]);else throw new Error(`You passed \`traverse()\` a visitor object with the property ${e} that has the invalid property ${i}`);
      }

      t._verified = !0;
    }
  }

  o(gt, "verify");

  function ht(t, e) {
    let n = [].concat(e);

    for (let i of n) if (typeof i != "function") throw new TypeError(`Non-function found defined in ${t} with type ${typeof i}`);
  }

  o(ht, "validateVisitorMethods");

  function qi(t, e = [], n) {
    let i = {};

    for (let r = 0; r < t.length; r++) {
      let s = t[r],
          a = e[r];
      pt(s);

      for (let c of Object.keys(s)) {
        let u = s[c];
        (a || n) && (u = Mi(u, a, n));
        let l = i[c] = i[c] || {};
        oe(l, u);
      }
    }

    return i;
  }

  o(qi, "merge");

  function Mi(t, e, n) {
    let i = {};

    for (let r of Object.keys(t)) {
      let s = t[r];
      !Array.isArray(s) || (s = s.map(function (a) {
        let c = a;
        return e && (c = o(function (u) {
          return a.call(e, u, e);
        }, "newFn")), n && (c = n(e.key, r, c)), c !== a && (c.toString = () => a.toString()), c;
      }), i[r] = s);
    }

    return i;
  }

  o(Mi, "wrapWithStateOrWrapper");

  function Vi(t) {
    for (let e of Object.keys(t)) {
      if (H(e)) continue;
      let n = t[e];
      typeof n == "function" && (t[e] = {
        enter: n
      });
    }
  }

  o(Vi, "ensureEntranceObjects");

  function dt(t) {
    t.enter && !Array.isArray(t.enter) && (t.enter = [t.enter]), t.exit && !Array.isArray(t.exit) && (t.exit = [t.exit]);
  }

  o(dt, "ensureCallbackArrays");

  function Ui(t, e) {
    let n = o(function (i) {
      if (t.checkPath(i)) return e.apply(this, arguments);
    }, "newFn");
    return n.toString = () => e.toString(), n;
  }

  o(Ui, "wrapCheck");

  function H(t) {
    return t[0] === "_" || t === "enter" || t === "exit" || t === "shouldSkip" || t === "denylist" || t === "noScope" || t === "skipKeys" || t === "blacklist";
  }

  o(H, "shouldIgnoreKey");

  function oe(t, e) {
    for (let n of Object.keys(e)) t[n] = [].concat(t[n] || [], e[n]);
  }

  o(oe, "mergePair");
});
var M = g(C => {
  "use strict";

  Object.defineProperty(C, "__esModule", {
    value: !0
  });
  C.clear = Ki;
  C.clearPath = bt;
  C.clearScope = vt;
  C.scope = C.path = void 0;
  var yt = new WeakMap();
  C.path = yt;
  var mt = new WeakMap();
  C.scope = mt;

  function Ki() {
    bt(), vt();
  }

  o(Ki, "clear");

  function bt() {
    C.path = yt = new WeakMap();
  }

  o(bt, "clearPath");

  function vt() {
    C.scope = mt = new WeakMap();
  }

  o(vt, "clearScope");
});
var qe = g(ce => {
  "use strict";

  Object.defineProperty(ce, "__esModule", {
    value: !0
  });
  ce.default = void 0;
  var ae = class {
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
  o(ae, "Binding");
  ce.default = ae;
});
var Et = g(le => {
  "use strict";

  Object.defineProperty(le, "__esModule", {
    value: !0
  });
  le.default = void 0;
  var sl = qe(),
      Wi = ___babel_helper_split_export_declaration$,
      $i = ___babel_types$,
      Hi = ___babel_helper_environment_visitor$,
      {
    assignmentExpression: Yi,
    identifier: ee,
    toExpression: Xi,
    variableDeclaration: Ji,
    variableDeclarator: Qi
  } = $i,
      xt = {
    ReferencedIdentifier({
      node: t
    }, e) {
      t.name === e.oldName && (t.name = e.newName);
    },

    Scope(t, e) {
      t.scope.bindingIdentifierEquals(e.oldName, e.binding.identifier) || (t.skip(), t.isMethod() && (0, Hi.requeueComputedKeyAndDecorators)(t));
    },

    "AssignmentExpression|Declaration|VariableDeclarator"(t, e) {
      if (t.isVariableDeclaration()) return;
      let n = t.getOuterBindingIdentifiers();

      for (let i in n) i === e.oldName && (n[i].name = e.newName);
    }

  },
      ue = class {
    constructor(e, n, i) {
      this.newName = i, this.oldName = n, this.binding = e;
    }

    maybeConvertFromExportDeclaration(e) {
      let n = e.parentPath;
      !n.isExportDeclaration() || n.isExportDefaultDeclaration() && !n.get("declaration").node.id || (0, Wi.default)(n);
    }

    maybeConvertFromClassFunctionDeclaration(e) {}

    maybeConvertFromClassFunctionExpression(e) {}

    rename(e) {
      let {
        binding: n,
        oldName: i,
        newName: r
      } = this,
          {
        scope: s,
        path: a
      } = n,
          c = a.find(l => l.isDeclaration() || l.isFunctionExpression() || l.isClassExpression());
      c && c.getOuterBindingIdentifiers()[i] === n.identifier && this.maybeConvertFromExportDeclaration(c);
      let u = e || s.block;
      u?.type === "SwitchStatement" ? u.cases.forEach(l => {
        s.traverse(l, xt, this);
      }) : s.traverse(u, xt, this), e || (s.removeOwnBinding(i), s.bindings[r] = n, this.binding.identifier.name = r), c && (this.maybeConvertFromClassFunctionDeclaration(c), this.maybeConvertFromClassFunctionExpression(c));
    }

  };
  o(ue, "Renamer");
  le.default = ue;
});
var Ue = g(de => {
  "use strict";

  Object.defineProperty(de, "__esModule", {
    value: !0
  });
  de.default = void 0;
  var Gi = Et(),
      zi = X(),
      Zi = qe(),
      er = __globals$,
      tr = ___babel_types$,
      Pt = M(),
      {
    NOT_LOCAL_BINDING: St,
    callExpression: kt,
    cloneNode: _t,
    getBindingIdentifiers: nr,
    identifier: Y,
    isArrayExpression: wt,
    isBinary: ir,
    isClass: rr,
    isClassBody: sr,
    isClassDeclaration: or,
    isExportAllDeclaration: Tt,
    isExportDefaultDeclaration: ar,
    isExportNamedDeclaration: Me,
    isFunctionDeclaration: cr,
    isIdentifier: fe,
    isImportDeclaration: At,
    isLiteral: ur,
    isMethod: lr,
    isModuleDeclaration: fr,
    isModuleSpecifier: hr,
    isObjectExpression: dr,
    isProperty: pr,
    isPureish: gr,
    isSuper: yr,
    isTaggedTemplateExpression: mr,
    isTemplateLiteral: br,
    isThisExpression: Bt,
    isUnaryExpression: vr,
    isVariableDeclaration: xr,
    matchesPattern: Er,
    memberExpression: Ve,
    numericLiteral: Ct,
    toIdentifier: Pr,
    unaryExpression: Sr,
    variableDeclaration: kr,
    variableDeclarator: _r,
    isRecordExpression: wr,
    isTupleExpression: Ar,
    isObjectProperty: Br,
    isTopicReference: Ot,
    isMetaProperty: Cr,
    isPrivateName: Or
  } = tr;

  function y(t, e) {
    switch (t?.type) {
      default:
        if (fr(t)) {
          if ((Tt(t) || Me(t) || At(t)) && t.source) y(t.source, e);else if ((Me(t) || At(t)) && t.specifiers && t.specifiers.length) for (let n of t.specifiers) y(n, e);else (ar(t) || Me(t)) && t.declaration && y(t.declaration, e);
        } else hr(t) ? y(t.local, e) : ur(t) && e.push(t.value);
        break;

      case "MemberExpression":
      case "OptionalMemberExpression":
      case "JSXMemberExpression":
        y(t.object, e), y(t.property, e);
        break;

      case "Identifier":
      case "JSXIdentifier":
        e.push(t.name);
        break;

      case "CallExpression":
      case "OptionalCallExpression":
      case "NewExpression":
        y(t.callee, e);
        break;

      case "ObjectExpression":
      case "ObjectPattern":
        for (let n of t.properties) y(n, e);

        break;

      case "SpreadElement":
      case "RestElement":
        y(t.argument, e);
        break;

      case "ObjectProperty":
      case "ObjectMethod":
      case "ClassProperty":
      case "ClassMethod":
      case "ClassPrivateProperty":
      case "ClassPrivateMethod":
        y(t.key, e);
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
        e.push("yield"), y(t.argument, e);
        break;

      case "AwaitExpression":
        e.push("await"), y(t.argument, e);
        break;

      case "AssignmentExpression":
        y(t.left, e);
        break;

      case "VariableDeclarator":
        y(t.id, e);
        break;

      case "FunctionExpression":
      case "FunctionDeclaration":
      case "ClassExpression":
      case "ClassDeclaration":
        y(t.id, e);
        break;

      case "PrivateName":
        y(t.id, e);
        break;

      case "ParenthesizedExpression":
        y(t.expression, e);
        break;

      case "UnaryExpression":
      case "UpdateExpression":
        y(t.argument, e);
        break;

      case "MetaProperty":
        y(t.meta, e), y(t.property, e);
        break;

      case "JSXElement":
        y(t.openingElement, e);
        break;

      case "JSXOpeningElement":
        e.push(t.name);
        break;

      case "JSXFragment":
        y(t.openingFragment, e);
        break;

      case "JSXOpeningFragment":
        e.push("Fragment");
        break;

      case "JSXNamespacedName":
        y(t.namespace, e), y(t.name, e);
        break;
    }
  }

  o(y, "gatherNodeParts");
  var he = {
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
        if (Tt(e)) return;
        let i = e.declaration;

        if (or(i) || cr(i)) {
          let r = i.id;
          if (!r) return;
          let s = n.getBinding(r.name);
          s?.reference(t);
        } else if (xr(i)) for (let r of i.declarations) for (let s of Object.keys(nr(r))) {
          let a = n.getBinding(s);
          a?.reference(t);
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

      t.isFunctionExpression() && t.has("id") && !t.get("id").node[St] && t.scope.registerBinding("local", t.get("id"), t);
    },

    ClassExpression(t) {
      t.has("id") && !t.get("id").node[St] && t.scope.registerBinding("local", t);
    }

  },
      Tr = 0,
      F = class {
    constructor(e) {
      this.uid = void 0, this.path = void 0, this.block = void 0, this.labels = void 0, this.inited = void 0, this.bindings = void 0, this.references = void 0, this.globals = void 0, this.uids = void 0, this.data = void 0, this.crawling = void 0;
      let {
        node: n
      } = e,
          i = Pt.scope.get(n);
      if (i?.path === e) return i;
      Pt.scope.set(n, this), this.uid = Tr++, this.block = n, this.path = e, this.labels = new Map(), this.inited = !1;
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
      (0, zi.default)(e, n, this, i, this.path);
    }

    generateDeclaredUidIdentifier(e) {
      let n = this.generateUidIdentifier(e);
      return this.push({
        id: n
      }), _t(n);
    }

    generateUidIdentifier(e) {
      return Y(this.generateUid(e));
    }

    generateUid(e = "temp") {
      e = Pr(e).replace(/^_+/, "").replace(/[0-9]+$/g, "");
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
      y(e, i);
      let r = i.join("$");
      return r = r.replace(/^_/, "") || n || "ref", this.generateUid(r.slice(0, 20));
    }

    generateUidIdentifierBasedOnNode(e, n) {
      return Y(this.generateUidBasedOnNode(e, n));
    }

    isStatic(e) {
      if (Bt(e) || yr(e) || Ot(e)) return !0;

      if (fe(e)) {
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
        }), _t(i));
      }
    }

    checkBlockScopedCollisions(e, n, i, r) {
      if (n === "param" || e.kind === "local") return;
      if (n === "let" || e.kind === "let" || e.kind === "const" || e.kind === "module" || e.kind === "param" && n === "const") throw this.hub.buildError(r, `Duplicate declaration "${i}"`, TypeError);
    }

    rename(e, n, i) {
      let r = this.getBinding(e);
      if (r) return n = n || this.generateUidIdentifier(e).name, new Gi.default(r, e, n).rename(i);
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
      if (fe(e)) {
        let a = this.getBinding(e.name);
        if (a != null && a.constant && a.path.isGenericType("Array")) return e;
      }

      if (wt(e)) return e;
      if (fe(e, {
        name: "arguments"
      })) return kt(Ve(Ve(Ve(Y("Array"), Y("prototype")), Y("slice")), Y("call")), [e]);
      let r,
          s = [e];
      return n === !0 ? r = "toConsumableArray" : n ? (s.push(Ct(n)), r = "slicedToArray") : r = "toArray", i && (s.unshift(this.hub.addHelper(r)), r = "maybeArrayLike"), kt(this.hub.addHelper(r), s);
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
      return Sr("void", Ct(0), !0);
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
        let a = n.get("declarations");

        for (let c of a) this.registerBinding(e, c);

        return;
      }

      let r = this.getProgramParent(),
          s = n.getOuterBindingIdentifiers(!0);

      for (let a of Object.keys(s)) {
        r.references[a] = !0;

        for (let c of s[a]) {
          let u = this.getOwnBinding(a);

          if (u) {
            if (u.identifier === c) continue;
            this.checkBlockScopedCollisions(u, e, a, c);
          }

          u ? this.registerConstantViolation(i) : this.bindings[a] = new Zi.default({
            identifier: c,
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
      if (fe(e)) {
        let a = this.getBinding(e.name);
        return a ? n ? a.constant : !0 : !1;
      } else {
        if (Bt(e) || Cr(e) || Ot(e) || Or(e)) return !0;

        if (rr(e)) {
          var i;
          return e.superClass && !this.isPure(e.superClass, n) || ((i = e.decorators) == null ? void 0 : i.length) > 0 ? !1 : this.isPure(e.body, n);
        } else if (sr(e)) {
          for (let a of e.body) if (!this.isPure(a, n)) return !1;

          return !0;
        } else {
          if (ir(e)) return this.isPure(e.left, n) && this.isPure(e.right, n);

          if (wt(e) || Ar(e)) {
            for (let a of e.elements) if (a !== null && !this.isPure(a, n)) return !1;

            return !0;
          } else if (dr(e) || wr(e)) {
            for (let a of e.properties) if (!this.isPure(a, n)) return !1;

            return !0;
          } else if (lr(e)) {
            var r;
            return !(e.computed && !this.isPure(e.key, n) || ((r = e.decorators) == null ? void 0 : r.length) > 0);
          } else if (pr(e)) {
            var s;
            return !(e.computed && !this.isPure(e.key, n) || ((s = e.decorators) == null ? void 0 : s.length) > 0 || (Br(e) || e.static) && e.value !== null && !this.isPure(e.value, n));
          } else {
            if (vr(e)) return this.isPure(e.argument, n);
            if (mr(e)) return Er(e.tag, "String.raw") && !this.hasBinding("String", !0) && this.isPure(e.quasi, n);

            if (br(e)) {
              for (let a of e.expressions) if (!this.isPure(a, n)) return !1;

              return !0;
            } else return gr(e);
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

      if (this.crawling = !0, e.type !== "Program" && he._exploded) {
        for (let s of he.enter) s(e, i);

        let r = he[e.type];
        if (r) for (let s of r.enter) s(e, i);
      }

      e.traverse(he, i), this.crawling = !1;

      for (let r of i.assignments) {
        let s = r.getBindingIdentifiers();

        for (let a of Object.keys(s)) r.scope.getBinding(a) || n.addGlobal(s[a]);

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
          a = `declaration:${r}:${s}`,
          c = !i && n.getData(a);

      if (!c) {
        let R = kr(r, []);
        R._blockHoist = s, [c] = n.unshiftContainer("body", [R]), i || n.setData(a, c);
      }

      let u = _r(e.id, e.init),
          l = c.node.declarations.push(u);

      n.scope.registerBinding(r, c.get("declarations")[l - 1]);
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
            let a = r.bindings[s];
            a.kind === i && (n[s] = a);
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
      return e ? !!(this.hasOwnBinding(e) || this.parentHasBinding(e, n) || this.hasUid(e) || !n && F.globals.includes(e) || !n && F.contextVariables.includes(e)) : !1;
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
  o(F, "Scope");
  de.default = F;
  F.globals = Object.keys(er.builtin);
  F.contextVariables = ["arguments", "undefined", "Infinity", "NaN"];
});
var It = g(_ => {
  "use strict";

  Object.defineProperty(_, "__esModule", {
    value: !0
  });
  _.find = Nr;
  _.findParent = Dr;
  _.getAncestry = Mr;
  _.getDeepestCommonAncestorFrom = qr;
  _.getEarliestCommonAncestorFrom = jr;
  _.getFunctionParent = Rr;
  _.getStatementParent = Lr;
  _.inType = Kr;
  _.isAncestor = Vr;
  _.isDescendant = Ur;
  var Ir = ___babel_types$,
      cl = D(),
      {
    VISITOR_KEYS: Fr
  } = Ir;

  function Dr(t) {
    let e = this;

    for (; e = e.parentPath;) if (t(e)) return e;

    return null;
  }

  o(Dr, "findParent");

  function Nr(t) {
    let e = this;

    do if (t(e)) return e; while (e = e.parentPath);

    return null;
  }

  o(Nr, "find");

  function Rr() {
    return this.findParent(t => t.isFunction());
  }

  o(Rr, "getFunctionParent");

  function Lr() {
    let t = this;

    do {
      if (!t.parentPath || Array.isArray(t.container) && t.isStatement()) break;
      t = t.parentPath;
    } while (t);

    if (t && (t.isProgram() || t.isFile())) throw new Error("File/Program node, we can't possibly find a statement parent to this");
    return t;
  }

  o(Lr, "getStatementParent");

  function jr(t) {
    return this.getDeepestCommonAncestorFrom(t, function (e, n, i) {
      let r,
          s = Fr[e.type];

      for (let a of i) {
        let c = a[n + 1];

        if (!r) {
          r = c;
          continue;
        }

        if (c.listKey && r.listKey === c.listKey && c.key < r.key) {
          r = c;
          continue;
        }

        let u = s.indexOf(r.parentKey),
            l = s.indexOf(c.parentKey);
        u > l && (r = c);
      }

      return r;
    });
  }

  o(jr, "getEarliestCommonAncestorFrom");

  function qr(t, e) {
    if (!t.length) return this;
    if (t.length === 1) return t[0];
    let n = 1 / 0,
        i,
        r,
        s = t.map(c => {
      let u = [];

      do u.unshift(c); while ((c = c.parentPath) && c !== this);

      return u.length < n && (n = u.length), u;
    }),
        a = s[0];

    e: for (let c = 0; c < n; c++) {
      let u = a[c];

      for (let l of s) if (l[c] !== u) break e;

      i = c, r = u;
    }

    if (r) return e ? e(r, i, s) : r;
    throw new Error("Couldn't find intersection");
  }

  o(qr, "getDeepestCommonAncestorFrom");

  function Mr() {
    let t = this,
        e = [];

    do e.push(t); while (t = t.parentPath);

    return e;
  }

  o(Mr, "getAncestry");

  function Vr(t) {
    return t.isDescendant(this);
  }

  o(Vr, "isAncestor");

  function Ur(t) {
    return !!this.findParent(e => e === t);
  }

  o(Ur, "isDescendant");

  function Kr(...t) {
    let e = this;

    for (; e;) {
      for (let n of t) if (e.node.type === n) return !0;

      e = e.parentPath;
    }

    return !1;
  }

  o(Kr, "inType");
});
var jt = g(Ke => {
  "use strict";

  Object.defineProperty(Ke, "__esModule", {
    value: !0
  });
  Ke.default = Xr;
  var Wr = ___babel_types$,
      {
    BOOLEAN_NUMBER_BINARY_OPERATORS: $r,
    createFlowUnionType: pe,
    createTSUnionType: ge,
    createTypeAnnotationBasedOnTypeof: Hr,
    createUnionTypeAnnotation: Dt,
    isTSTypeAnnotation: Nt,
    numberTypeAnnotation: Rt,
    voidTypeAnnotation: Yr
  } = Wr;

  function Xr(t) {
    if (!this.isReferenced()) return;
    let e = this.scope.getBinding(t.name);
    if (e) return e.identifier.typeAnnotation ? e.identifier.typeAnnotation : Jr(e, this, t.name);
    if (t.name === "undefined") return Yr();
    if (t.name === "NaN" || t.name === "Infinity") return Rt();
    t.name;
  }

  o(Xr, "_default");

  function Jr(t, e, n) {
    let i = [],
        r = [],
        s = Ft(t, e, r),
        a = Lt(t, e, n);

    if (a) {
      let c = Ft(t, a.ifStatement);
      s = s.filter(u => c.indexOf(u) < 0), i.push(a.typeAnnotation);
    }

    if (s.length) {
      s.push(...r);

      for (let c of s) i.push(c.getTypeAnnotation());
    }

    if (!!i.length) return Nt(i[0]) && ge ? ge(i) : pe ? pe(i) : Dt(i);
  }

  o(Jr, "getTypeAnnotationBindingConstantViolations");

  function Ft(t, e, n) {
    let i = t.constantViolations.slice();
    return i.unshift(t.path), i.filter(r => {
      r = r.resolve();

      let s = r._guessExecutionStatusRelativeTo(e);

      return n && s === "unknown" && n.push(r), s === "before";
    });
  }

  o(Ft, "getConstantViolationsBefore");

  function Qr(t, e) {
    let n = e.node.operator,
        i = e.get("right").resolve(),
        r = e.get("left").resolve(),
        s;
    if (r.isIdentifier({
      name: t
    }) ? s = i : i.isIdentifier({
      name: t
    }) && (s = r), s) return n === "===" ? s.getTypeAnnotation() : $r.indexOf(n) >= 0 ? Rt() : void 0;
    if (n !== "===" && n !== "==") return;
    let a, c;
    if (r.isUnaryExpression({
      operator: "typeof"
    }) ? (a = r, c = i) : i.isUnaryExpression({
      operator: "typeof"
    }) && (a = i, c = r), !a || !a.get("argument").isIdentifier({
      name: t
    }) || (c = c.resolve(), !c.isLiteral())) return;
    let u = c.node.value;
    if (typeof u == "string") return Hr(u);
  }

  o(Qr, "inferAnnotationFromBinaryExpression");

  function Gr(t, e, n) {
    let i;

    for (; i = e.parentPath;) {
      if (i.isIfStatement() || i.isConditionalExpression()) return e.key === "test" ? void 0 : i;
      if (i.isFunction() && i.parentPath.scope.getBinding(n) !== t) return;
      e = i;
    }
  }

  o(Gr, "getParentConditionalPath");

  function Lt(t, e, n) {
    let i = Gr(t, e, n);
    if (!i) return;
    let s = [i.get("test")],
        a = [];

    for (let c = 0; c < s.length; c++) {
      let u = s[c];
      if (u.isLogicalExpression()) u.node.operator === "&&" && (s.push(u.get("left")), s.push(u.get("right")));else if (u.isBinaryExpression()) {
        let l = Qr(n, u);
        l && a.push(l);
      }
    }

    return a.length ? Nt(a[0]) && ge ? {
      typeAnnotation: ge(a),
      ifStatement: i
    } : pe ? {
      typeAnnotation: pe(a),
      ifStatement: i
    } : {
      typeAnnotation: Dt(a),
      ifStatement: i
    } : Lt(i, n);
  }

  o(Lt, "getConditionalAnnotation");
});
var $t = g(d => {
  "use strict";

  Object.defineProperty(d, "__esModule", {
    value: !0
  });
  d.ArrayExpression = He;
  d.AssignmentExpression = bs;
  d.BinaryExpression = ds;
  d.BooleanLiteral = Ps;
  d.CallExpression = Ts;
  d.ConditionalExpression = gs;
  d.ClassDeclaration = d.ClassExpression = d.FunctionDeclaration = d.ArrowFunctionExpression = d.FunctionExpression = ws;
  Object.defineProperty(d, "Identifier", {
    enumerable: !0,
    get: function () {
      return Zr.default;
    }
  });
  d.LogicalExpression = ps;
  d.NewExpression = ls;
  d.NullLiteral = Ss;
  d.NumericLiteral = Es;
  d.ObjectExpression = _s;
  d.ParenthesizedExpression = ms;
  d.RegExpLiteral = ks;
  d.RestElement = Kt;
  d.SequenceExpression = ys;
  d.StringLiteral = xs;
  d.TaggedTemplateExpression = Is;
  d.TemplateLiteral = fs;
  d.TypeCastExpression = Ut;
  d.UnaryExpression = hs;
  d.UpdateExpression = vs;
  d.VariableDeclarator = us;
  var zr = ___babel_types$,
      Zr = jt(),
      {
    BOOLEAN_BINARY_OPERATORS: es,
    BOOLEAN_UNARY_OPERATORS: ts,
    NUMBER_BINARY_OPERATORS: ns,
    NUMBER_UNARY_OPERATORS: is,
    STRING_UNARY_OPERATORS: rs,
    anyTypeAnnotation: qt,
    arrayTypeAnnotation: We,
    booleanTypeAnnotation: $e,
    buildMatchMemberExpression: be,
    createFlowUnionType: ye,
    createTSUnionType: me,
    createUnionTypeAnnotation: Mt,
    genericTypeAnnotation: V,
    identifier: Q,
    isTSTypeAnnotation: Vt,
    nullLiteralTypeAnnotation: ss,
    numberTypeAnnotation: J,
    stringTypeAnnotation: U,
    tupleTypeAnnotation: os,
    unionTypeAnnotation: as,
    voidTypeAnnotation: cs
  } = zr;

  function us() {
    var t;
    if (!this.get("id").isIdentifier()) return;
    let n = this.get("init"),
        i = n.getTypeAnnotation();
    return ((t = i) == null ? void 0 : t.type) === "AnyTypeAnnotation" && n.isCallExpression() && n.get("callee").isIdentifier({
      name: "Array"
    }) && !n.scope.hasBinding("Array", !0) && (i = He()), i;
  }

  o(us, "VariableDeclarator");

  function Ut(t) {
    return t.typeAnnotation;
  }

  o(Ut, "TypeCastExpression");
  Ut.validParent = !0;

  function ls(t) {
    if (this.get("callee").isIdentifier()) return V(t.callee);
  }

  o(ls, "NewExpression");

  function fs() {
    return U();
  }

  o(fs, "TemplateLiteral");

  function hs(t) {
    let e = t.operator;
    if (e === "void") return cs();
    if (is.indexOf(e) >= 0) return J();
    if (rs.indexOf(e) >= 0) return U();
    if (ts.indexOf(e) >= 0) return $e();
  }

  o(hs, "UnaryExpression");

  function ds(t) {
    let e = t.operator;
    if (ns.indexOf(e) >= 0) return J();
    if (es.indexOf(e) >= 0) return $e();

    if (e === "+") {
      let n = this.get("right"),
          i = this.get("left");
      return i.isBaseType("number") && n.isBaseType("number") ? J() : i.isBaseType("string") || n.isBaseType("string") ? U() : as([U(), J()]);
    }
  }

  o(ds, "BinaryExpression");

  function ps() {
    let t = [this.get("left").getTypeAnnotation(), this.get("right").getTypeAnnotation()];
    return Vt(t[0]) && me ? me(t) : ye ? ye(t) : Mt(t);
  }

  o(ps, "LogicalExpression");

  function gs() {
    let t = [this.get("consequent").getTypeAnnotation(), this.get("alternate").getTypeAnnotation()];
    return Vt(t[0]) && me ? me(t) : ye ? ye(t) : Mt(t);
  }

  o(gs, "ConditionalExpression");

  function ys() {
    return this.get("expressions").pop().getTypeAnnotation();
  }

  o(ys, "SequenceExpression");

  function ms() {
    return this.get("expression").getTypeAnnotation();
  }

  o(ms, "ParenthesizedExpression");

  function bs() {
    return this.get("right").getTypeAnnotation();
  }

  o(bs, "AssignmentExpression");

  function vs(t) {
    let e = t.operator;
    if (e === "++" || e === "--") return J();
  }

  o(vs, "UpdateExpression");

  function xs() {
    return U();
  }

  o(xs, "StringLiteral");

  function Es() {
    return J();
  }

  o(Es, "NumericLiteral");

  function Ps() {
    return $e();
  }

  o(Ps, "BooleanLiteral");

  function Ss() {
    return ss();
  }

  o(Ss, "NullLiteral");

  function ks() {
    return V(Q("RegExp"));
  }

  o(ks, "RegExpLiteral");

  function _s() {
    return V(Q("Object"));
  }

  o(_s, "ObjectExpression");

  function He() {
    return V(Q("Array"));
  }

  o(He, "ArrayExpression");

  function Kt() {
    return He();
  }

  o(Kt, "RestElement");
  Kt.validParent = !0;

  function ws() {
    return V(Q("Function"));
  }

  o(ws, "Func");
  var As = be("Array.from"),
      Bs = be("Object.keys"),
      Cs = be("Object.values"),
      Os = be("Object.entries");

  function Ts() {
    let {
      callee: t
    } = this.node;
    return Bs(t) ? We(U()) : As(t) || Cs(t) ? We(qt()) : Os(t) ? We(os([U(), qt()])) : Wt(this.get("callee"));
  }

  o(Ts, "CallExpression");

  function Is() {
    return Wt(this.get("tag"));
  }

  o(Is, "TaggedTemplateExpression");

  function Wt(t) {
    if (t = t.resolve(), t.isFunction()) {
      if (t.is("async")) return t.is("generator") ? V(Q("AsyncIterator")) : V(Q("Promise"));
      if (t.node.returnType) return t.node.returnType;
    }
  }

  o(Wt, "resolveCall");
});
var Xt = g(L => {
  "use strict";

  Object.defineProperty(L, "__esModule", {
    value: !0
  });
  L._getTypeAnnotation = Xs;
  L.baseTypeStrictlyMatches = Gs;
  L.couldBeBaseType = Qs;
  L.getTypeAnnotation = Ys;
  L.isBaseType = Js;
  L.isGenericType = zs;
  var Ht = $t(),
      Fs = ___babel_types$,
      {
    anyTypeAnnotation: Yt,
    isAnyTypeAnnotation: ve,
    isBooleanTypeAnnotation: Ds,
    isEmptyTypeAnnotation: Ns,
    isFlowBaseAnnotation: Rs,
    isGenericTypeAnnotation: Ls,
    isIdentifier: js,
    isMixedTypeAnnotation: qs,
    isNumberTypeAnnotation: Ms,
    isStringTypeAnnotation: Vs,
    isTypeAnnotation: Us,
    isUnionTypeAnnotation: Ks,
    isVoidTypeAnnotation: Ws,
    stringTypeAnnotation: $s,
    voidTypeAnnotation: Hs
  } = Fs;

  function Ys() {
    let t = this.getData("typeAnnotation");
    return t != null || (t = this._getTypeAnnotation() || Yt(), Us(t) && (t = t.typeAnnotation), this.setData("typeAnnotation", t)), t;
  }

  o(Ys, "getTypeAnnotation");
  var Ye = new WeakSet();

  function Xs() {
    let t = this.node;
    if (!t) if (this.key === "init" && this.parentPath.isVariableDeclarator()) {
      let n = this.parentPath.parentPath,
          i = n.parentPath;
      return n.key === "left" && i.isForInStatement() ? $s() : n.key === "left" && i.isForOfStatement() ? Yt() : Hs();
    } else return;
    if (t.typeAnnotation) return t.typeAnnotation;

    if (!Ye.has(t)) {
      Ye.add(t);

      try {
        var e;
        let n = Ht[t.type];
        if (n) return n.call(this, t);
        if (n = Ht[this.parentPath.type], (e = n) != null && e.validParent) return this.parentPath.getTypeAnnotation();
      } finally {
        Ye.delete(t);
      }
    }
  }

  o(Xs, "_getTypeAnnotation");

  function Js(t, e) {
    return Xe(t, this.getTypeAnnotation(), e);
  }

  o(Js, "isBaseType");

  function Xe(t, e, n) {
    if (t === "string") return Vs(e);
    if (t === "number") return Ms(e);
    if (t === "boolean") return Ds(e);
    if (t === "any") return ve(e);
    if (t === "mixed") return qs(e);
    if (t === "empty") return Ns(e);
    if (t === "void") return Ws(e);
    if (n) return !1;
    throw new Error(`Unknown base type ${t}`);
  }

  o(Xe, "_isBaseType");

  function Qs(t) {
    let e = this.getTypeAnnotation();
    if (ve(e)) return !0;

    if (Ks(e)) {
      for (let n of e.types) if (ve(n) || Xe(t, n, !0)) return !0;

      return !1;
    } else return Xe(t, e, !0);
  }

  o(Qs, "couldBeBaseType");

  function Gs(t) {
    let e = this.getTypeAnnotation(),
        n = t.getTypeAnnotation();
    return !ve(e) && Rs(e) ? n.type === e.type : !1;
  }

  o(Gs, "baseTypeStrictlyMatches");

  function zs(t) {
    let e = this.getTypeAnnotation();
    return Ls(e) && js(e.id, {
      name: t
    });
  }

  o(zs, "isGenericType");
});
var en = g(j => {
  "use strict";

  Object.defineProperty(j, "__esModule", {
    value: !0
  });
  j._replaceWith = ko;
  j.replaceExpressionWithStatements = _o;
  j.replaceInline = wo;
  j.replaceWith = So;
  j.replaceWithMultiple = Eo;
  j.replaceWithSourceString = Po;
  var Zs = ___babel_code_frame$,
      Je = X(),
      eo = D(),
      Zt = M(),
      to = ___babel_parser$,
      no = ___babel_types$,
      io = ___babel_helper_hoist_variables$,
      {
    FUNCTION_TYPES: Jt,
    arrowFunctionExpression: ro,
    assignmentExpression: so,
    awaitExpression: oo,
    blockStatement: ao,
    callExpression: co,
    cloneNode: Qt,
    expressionStatement: uo,
    identifier: lo,
    inheritLeadingComments: fo,
    inheritTrailingComments: ho,
    inheritsComments: po,
    isExpression: go,
    isProgram: yo,
    isStatement: mo,
    removeComments: bo,
    returnStatement: Gt,
    toSequenceExpression: vo,
    validate: zt,
    yieldExpression: xo
  } = no;

  function Eo(t) {
    var e;
    this.resync(), t = this._verifyNodeList(t), fo(t[0], this.node), ho(t[t.length - 1], this.node), (e = Zt.path.get(this.parent)) == null || e.delete(this.node), this.node = this.container[this.key] = null;
    let n = this.insertAfter(t);
    return this.node ? this.requeue() : this.remove(), n;
  }

  o(Eo, "replaceWithMultiple");

  function Po(t) {
    this.resync();

    try {
      t = `(${t})`, t = (0, to.parse)(t);
    } catch (e) {
      let n = e.loc;
      throw n && (e.message += ` - make sure this is an expression.
` + (0, Zs.codeFrameColumns)(t, {
        start: {
          line: n.line,
          column: n.column + 1
        }
      }), e.code = "BABEL_REPLACE_SOURCE_ERROR"), e;
    }

    return t = t.program.body[0].expression, Je.default.removeProperties(t), this.replaceWith(t);
  }

  o(Po, "replaceWithSourceString");

  function So(t) {
    if (this.resync(), this.removed) throw new Error("You can't replace this node, we've already removed it");
    if (t instanceof eo.default && (t = t.node), !t) throw new Error("You passed `path.replaceWith()` a falsy node, use `path.remove()` instead");
    if (this.node === t) return [this];
    if (this.isProgram() && !yo(t)) throw new Error("You can only replace a Program root node with another Program node");
    if (Array.isArray(t)) throw new Error("Don't use `path.replaceWith()` with an array of nodes, use `path.replaceWithMultiple()`");
    if (typeof t == "string") throw new Error("Don't use `path.replaceWith()` with a source string, use `path.replaceWithSourceString()`");
    let e = "";
    if (this.isNodeType("Statement") && go(t) && !this.canHaveVariableDeclarationOrExpression() && !this.canSwapBetweenExpressionAndStatement(t) && !this.parentPath.isExportDefaultDeclaration() && (t = uo(t), e = "expression"), this.isNodeType("Expression") && mo(t) && !this.canHaveVariableDeclarationOrExpression() && !this.canSwapBetweenExpressionAndStatement(t)) return this.replaceExpressionWithStatements([t]);
    let n = this.node;
    return n && (po(t, n), bo(n)), this._replaceWith(t), this.type = t.type, this.setScope(), this.requeue(), [e ? this.get(e) : this];
  }

  o(So, "replaceWith");

  function ko(t) {
    var e;
    if (!this.container) throw new ReferenceError("Container is falsy");
    this.inList ? zt(this.parent, this.key, [t]) : zt(this.parent, this.key, t), this.debug(`Replace with ${t?.type}`), (e = Zt.path.get(this.parent)) == null || e.set(t, this).delete(this.node), this.node = this.container[this.key] = t;
  }

  o(ko, "_replaceWith");

  function _o(t) {
    this.resync();
    let e = vo(t, this.scope);
    if (e) return this.replaceWith(e)[0].get("expressions");
    let n = this.getFunctionParent(),
        i = n?.is("async"),
        r = n?.is("generator"),
        s = ro([], ao(t));
    this.replaceWith(co(s, []));
    let a = this.get("callee");
    (0, io.default)(a.get("body"), P => {
      this.scope.push({
        id: P
      });
    }, "var");
    let c = this.get("callee").getCompletionRecords();

    for (let P of c) {
      if (!P.isExpressionStatement()) continue;
      let x = P.findParent(f => f.isLoop());

      if (x) {
        let f = x.getData("expressionReplacementReturnUid");
        f ? f = lo(f.name) : (f = a.scope.generateDeclaredUidIdentifier("ret"), a.get("body").pushContainer("body", Gt(Qt(f))), x.setData("expressionReplacementReturnUid", f)), P.get("expression").replaceWith(so("=", Qt(f), P.node.expression));
      } else P.replaceWith(Gt(P.node.expression));
    }

    a.arrowFunctionToExpression();
    let u = a,
        l = i && Je.default.hasType(this.get("callee.body").node, "AwaitExpression", Jt),
        R = r && Je.default.hasType(this.get("callee.body").node, "YieldExpression", Jt);
    return l && (u.set("async", !0), R || this.replaceWith(oo(this.node))), R && (u.set("generator", !0), this.replaceWith(xo(this.node, !0))), u.get("body.body");
  }

  o(_o, "replaceExpressionWithStatements");

  function wo(t) {
    if (this.resync(), Array.isArray(t)) {
      if (Array.isArray(this.container)) {
        t = this._verifyNodeList(t);

        let e = this._containerInsertAfter(t);

        return this.remove(), e;
      } else return this.replaceWithMultiple(t);
    } else return this.replaceWith(t);
  }

  o(wo, "replaceInline");
});
var rn = g(xe => {
  "use strict";

  Object.defineProperty(xe, "__esModule", {
    value: !0
  });
  xe.evaluate = Oo;
  xe.evaluateTruthy = Bo;
  var tn = ["String", "Number", "Math"],
      Ao = ["random"];

  function Bo() {
    let t = this.evaluate();
    if (t.confident) return !!t.value;
  }

  o(Bo, "evaluateTruthy");

  function w(t, e) {
    !e.confident || (e.deoptPath = t, e.confident = !1);
  }

  o(w, "deopt");

  function S(t, e) {
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
      let s = Co(t, e);
      return e.confident && (r.resolved = !0, r.value = s), s;
    }
  }

  o(S, "evaluateCached");

  function Co(t, e) {
    if (!!e.confident) {
      if (t.isSequenceExpression()) {
        let n = t.get("expressions");
        return S(n[n.length - 1], e);
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
        let n = S(t.get("test"), e);
        return e.confident ? S(n ? t.get("consequent") : t.get("alternate"), e) : void 0;
      }

      if (t.isExpressionWrapper()) return S(t.get("expression"), e);

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
          return i === t ? w(t, e) : S(i, e);
        }
      }

      if (t.isUnaryExpression({
        prefix: !0
      })) {
        if (t.node.operator === "void") return;
        let n = t.get("argument");
        if (t.node.operator === "typeof" && (n.isFunction() || n.isClass())) return "function";
        let i = S(n, e);
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
          let a = r.get("key");

          if (r.node.computed) {
            if (a = a.evaluate(), !a.confident) return w(a.deopt, e);
            a = a.value;
          } else a.isIdentifier() ? a = a.node.name : a = a.node.value;

          let u = r.get("value").evaluate();
          if (!u.confident) return w(u.deopt, e);
          u = u.value, n[a] = u;
        }

        return n;
      }

      if (t.isLogicalExpression()) {
        let n = e.confident,
            i = S(t.get("left"), e),
            r = e.confident;
        e.confident = n;
        let s = S(t.get("right"), e),
            a = e.confident;

        switch (t.node.operator) {
          case "||":
            return e.confident = r && (!!i || a), e.confident ? i || s : void 0;

          case "&&":
            return e.confident = r && (!i || a), e.confident ? i && s : void 0;
        }
      }

      if (t.isBinaryExpression()) {
        let n = S(t.get("left"), e);
        if (!e.confident) return;
        let i = S(t.get("right"), e);
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

        if (n.isIdentifier() && !t.scope.getBinding(n.node.name) && tn.indexOf(n.node.name) >= 0 && (r = __global$[n.node.name]), n.isMemberExpression()) {
          let s = n.get("object"),
              a = n.get("property");

          if (s.isIdentifier() && a.isIdentifier() && tn.indexOf(s.node.name) >= 0 && Ao.indexOf(a.node.name) < 0 && (i = __global$[s.node.name], r = i[a.node.name]), s.isLiteral() && a.isIdentifier()) {
            let c = typeof s.node.value;
            (c === "string" || c === "number") && (i = s.node.value, r = i[a.node.name]);
          }
        }

        if (r) {
          let s = t.get("arguments").map(a => S(a, e));
          return e.confident ? r.apply(i, s) : void 0;
        }
      }

      w(t, e);
    }
  }

  o(Co, "_evaluate");

  function nn(t, e, n, i = !1) {
    let r = "",
        s = 0,
        a = t.get("expressions");

    for (let c of e) {
      if (!n.confident) break;
      r += i ? c.value.raw : c.value.cooked;
      let u = a[s++];
      u && (r += String(S(u, n)));
    }

    if (!!n.confident) return r;
  }

  o(nn, "evaluateQuasis");

  function Oo() {
    let t = {
      confident: !0,
      deoptPath: null,
      seen: new Map()
    },
        e = S(this, t);
    return t.confident || (e = void 0), {
      confident: t.confident,
      deopt: t.deoptPath,
      value: e
    };
  }

  o(Oo, "evaluate");
});
var un = g(W => {
  "use strict";

  Object.defineProperty(W, "__esModule", {
    value: !0
  });
  W.arrowFunctionToExpression = zo;
  W.arrowFunctionToShadowed = Qo;
  W.ensureBlock = Jo;
  W.toComputedKey = Xo;
  W.unwrapFunctionEnvironment = Go;
  var To = ___babel_types$,
      ze = ___babel_helper_environment_visitor$,
      Io = ___babel_helper_function_name$,
      Ze = je(),
      {
    arrowFunctionExpression: et,
    assignmentExpression: K,
    binaryExpression: Qe,
    blockStatement: Fo,
    callExpression: te,
    conditionalExpression: Do,
    expressionStatement: sn,
    identifier: m,
    isIdentifier: No,
    jsxIdentifier: Ro,
    logicalExpression: Lo,
    LOGICAL_OPERATORS: jo,
    memberExpression: O,
    metaProperty: qo,
    numericLiteral: Mo,
    objectExpression: Vo,
    restElement: Uo,
    returnStatement: Ko,
    sequenceExpression: Wo,
    spreadElement: $o,
    stringLiteral: on,
    super: Ge,
    thisExpression: Ee,
    toExpression: Ho,
    unaryExpression: Yo
  } = To;

  function Xo() {
    let t;
    if (this.isMemberExpression()) t = this.node.property;else if (this.isProperty() || this.isMethod()) t = this.node.key;else throw new ReferenceError("todo");
    return this.node.computed || No(t) && (t = on(t.name)), t;
  }

  o(Xo, "toComputedKey");

  function Jo() {
    let t = this.get("body"),
        e = t.node;
    if (Array.isArray(t)) throw new Error("Can't convert array path to a block statement");
    if (!e) throw new Error("Can't convert node without a body");
    if (t.isBlockStatement()) return e;
    let n = [],
        i = "body",
        r,
        s;
    t.isStatement() ? (s = "body", r = 0, n.push(t.node)) : (i += ".body.0", this.isFunction() ? (r = "argument", n.push(Ko(t.node))) : (r = "expression", n.push(sn(t.node)))), this.node.body = Fo(n);
    let a = this.get(i);
    return t.setup(a, s ? a.node[s] : a.node, s, r), this.node;
  }

  o(Jo, "ensureBlock");

  function Qo() {
    !this.isArrowFunctionExpression() || this.arrowFunctionToExpression();
  }

  o(Qo, "arrowFunctionToShadowed");

  function Go() {
    if (!this.isArrowFunctionExpression() && !this.isFunctionExpression() && !this.isFunctionDeclaration()) throw this.buildCodeFrameError("Can only unwrap the environment of a function.");
    an(this);
  }

  o(Go, "unwrapFunctionEnvironment");

  function zo({
    allowInsertArrow: t = !0,
    specCompliant: e = !1,
    noNewArrows: n = !e
  } = {}) {
    if (!this.isArrowFunctionExpression()) throw this.buildCodeFrameError("Cannot convert non-arrow function to a function expression.");
    let {
      thisBinding: i,
      fnPath: r
    } = an(this, n, t);

    if (r.ensureBlock(), r.node.type = "FunctionExpression", !n) {
      let s = i ? null : r.scope.generateUidIdentifier("arrowCheckId");
      s && r.parentPath.scope.push({
        id: s,
        init: Vo([])
      }), r.get("body").unshiftContainer("body", sn(te(this.hub.addHelper("newArrowCheck"), [Ee(), m(s ? s.name : i)]))), r.replaceWith(te(O((0, Io.default)(this, !0) || r.node, m("bind")), [s ? m(s.name) : Ee()]));
    }
  }

  o(zo, "arrowFunctionToExpression");
  var Zo = (0, Ze.merge)([{
    CallExpression(t, {
      allSuperCalls: e
    }) {
      !t.get("callee").isSuper() || e.push(t);
    }

  }, ze.default]);

  function an(t, e = !0, n = !0) {
    let i,
        r = t.findParent(x => {
      if (x.isArrowFunctionExpression()) {
        var f;
        return (f = i) != null || (i = x), !1;
      }

      return x.isFunction() || x.isProgram() || x.isClassProperty({
        static: !1
      }) || x.isClassPrivateProperty({
        static: !1
      });
    }),
        s = r.isClassMethod({
      kind: "constructor"
    });
    if (r.isClassProperty() || r.isClassPrivateProperty()) if (i) r = i;else if (n) t.replaceWith(te(et([], Ho(t.node)), [])), r = t.get("callee"), t = r.get("body");else throw t.buildCodeFrameError("Unable to transform arrow inside class property");
    let {
      thisPaths: a,
      argumentsPaths: c,
      newTargetPaths: u,
      superProps: l,
      superCalls: R
    } = aa(t);

    if (s && R.length > 0) {
      if (!n) throw R[0].buildCodeFrameError("Unable to handle nested super() usage in arrow");
      let x = [];
      r.traverse(Zo, {
        allSuperCalls: x
      });
      let f = ra(r);
      x.forEach(k => {
        let $ = m(f);
        $.loc = k.node.callee.loc, k.get("callee").replaceWith($);
      });
    }

    if (c.length > 0) {
      let x = ne(r, "arguments", () => {
        let f = o(() => m("arguments"), "args");
        return r.scope.path.isProgram() ? Do(Qe("===", Yo("typeof", f()), on("undefined")), r.scope.buildUndefinedNode(), f()) : f();
      });
      c.forEach(f => {
        let k = m(x);
        k.loc = f.node.loc, f.replaceWith(k);
      });
    }

    if (u.length > 0) {
      let x = ne(r, "newtarget", () => qo(m("new"), m("target")));
      u.forEach(f => {
        let k = m(x);
        k.loc = f.node.loc, f.replaceWith(k);
      });
    }

    if (l.length > 0) {
      if (!n) throw l[0].buildCodeFrameError("Unable to handle nested super.prop usage");
      l.reduce((f, k) => f.concat(ta(k)), []).forEach(f => {
        let k = f.node.computed ? "" : f.get("property").node.name,
            $ = f.parentPath.isAssignmentExpression({
          left: f.node
        }),
            Un = f.parentPath.isCallExpression({
          callee: f.node
        }),
            Kn = sa(r, $, k),
            Fe = [];

        if (f.node.computed && Fe.push(f.get("property").node), $) {
          let Wn = f.parentPath.node.right;
          Fe.push(Wn);
        }

        let De = te(m(Kn), Fe);
        Un ? (f.parentPath.unshiftContainer("arguments", Ee()), f.replaceWith(O(De, m("call"))), a.push(f.parentPath.get("arguments.0"))) : $ ? f.parentPath.replaceWith(De) : f.replaceWith(De);
      });
    }

    let P;
    return (a.length > 0 || !e) && (P = ia(r, s), (e || s && cn(r)) && (a.forEach(x => {
      let f = x.isJSX() ? Ro(P) : m(P);
      f.loc = x.node.loc, x.replaceWith(f);
    }), e || (P = null))), {
      thisBinding: P,
      fnPath: t
    };
  }

  o(an, "hoistFunctionEnvironment");

  function ea(t) {
    return jo.includes(t);
  }

  o(ea, "isLogicalOp");

  function ta(t) {
    if (t.parentPath.isAssignmentExpression() && t.parentPath.node.operator !== "=") {
      let n = t.parentPath,
          i = n.node.operator.slice(0, -1),
          r = n.node.right,
          s = ea(i);

      if (t.node.computed) {
        let a = t.scope.generateDeclaredUidIdentifier("tmp"),
            c = t.node.object,
            u = t.node.property;
        n.get("left").replaceWith(O(c, K("=", a, u), !0)), n.get("right").replaceWith(e(s ? "=" : i, O(c, m(a.name), !0), r));
      } else {
        let a = t.node.object,
            c = t.node.property;
        n.get("left").replaceWith(O(a, c)), n.get("right").replaceWith(e(s ? "=" : i, O(a, m(c.name)), r));
      }

      return s ? n.replaceWith(Lo(i, n.node.left, n.node.right)) : n.node.operator = "=", [n.get("left"), n.get("right").get("left")];
    } else if (t.parentPath.isUpdateExpression()) {
      let n = t.parentPath,
          i = t.scope.generateDeclaredUidIdentifier("tmp"),
          r = t.node.computed ? t.scope.generateDeclaredUidIdentifier("prop") : null,
          s = [K("=", i, O(t.node.object, r ? K("=", r, t.node.property) : t.node.property, t.node.computed)), K("=", O(t.node.object, r ? m(r.name) : t.node.property, t.node.computed), Qe(t.parentPath.node.operator[0], m(i.name), Mo(1)))];
      t.parentPath.node.prefix || s.push(m(i.name)), n.replaceWith(Wo(s));
      let a = n.get("expressions.0.right"),
          c = n.get("expressions.1.left");
      return [a, c];
    }

    return [t];

    function e(n, i, r) {
      return n === "=" ? K("=", i, r) : Qe(n, i, r);
    }
  }

  o(ta, "standardizeSuperProperty");

  function cn(t) {
    return t.isClassMethod() && !!t.parentPath.parentPath.node.superClass;
  }

  o(cn, "hasSuperClass");
  var na = (0, Ze.merge)([{
    CallExpression(t, {
      supers: e,
      thisBinding: n
    }) {
      !t.get("callee").isSuper() || e.has(t.node) || (e.add(t.node), t.replaceWithMultiple([t.node, K("=", m(n), m("this"))]));
    }

  }, ze.default]);

  function ia(t, e) {
    return ne(t, "this", n => {
      if (!e || !cn(t)) return Ee();
      t.traverse(na, {
        supers: new WeakSet(),
        thisBinding: n
      });
    });
  }

  o(ia, "getThisBinding");

  function ra(t) {
    return ne(t, "supercall", () => {
      let e = t.scope.generateUidIdentifier("args");
      return et([Uo(e)], te(Ge(), [$o(m(e.name))]));
    });
  }

  o(ra, "getSuperBinding");

  function sa(t, e, n) {
    return ne(t, `superprop_${e ? "set" : "get"}:${n || ""}`, () => {
      let r = [],
          s;
      if (n) s = O(Ge(), m(n));else {
        let a = t.scope.generateUidIdentifier("prop");
        r.unshift(a), s = O(Ge(), m(a.name), !0);
      }

      if (e) {
        let a = t.scope.generateUidIdentifier("value");
        r.push(a), s = K("=", s, m(a.name));
      }

      return et(r, s);
    });
  }

  o(sa, "getSuperPropBinding");

  function ne(t, e, n) {
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

  o(ne, "getBinding");
  var oa = (0, Ze.merge)([{
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

  }, ze.default]);

  function aa(t) {
    let e = [],
        n = [],
        i = [],
        r = [],
        s = [];
    return t.traverse(oa, {
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

  o(aa, "getScopeInformation");
});
var pn = g(b => {
  "use strict";

  Object.defineProperty(b, "__esModule", {
    value: !0
  });
  b._guessExecutionStatusRelativeTo = Ta;
  b._guessExecutionStatusRelativeToDifferentFunctions = Ia;
  b._resolve = Da;
  b.canHaveVariableDeclarationOrExpression = Sa;
  b.canSwapBetweenExpressionAndStatement = ka;
  b.equals = Ea;
  b.getSource = Ba;
  b.has = dn;
  b.is = void 0;
  b.isCompletionRecord = _a;
  b.isConstantExpression = Na;
  b.isInStrictMode = Ra;
  b.isNodeType = Pa;
  b.isStatementOrBlock = wa;
  b.isStatic = ba;
  b.isnt = xa;
  b.matchesPattern = ma;
  b.referencesImport = Aa;
  b.resolve = Fa;
  b.willIMaybeExecuteBefore = Ca;
  var ca = ___babel_types$,
      {
    STATEMENT_OR_BLOCK_KEYS: ua,
    VISITOR_KEYS: la,
    isBlockStatement: hn,
    isExpression: fa,
    isIdentifier: ha,
    isLiteral: da,
    isStringLiteral: pa,
    isType: ga,
    matchesPattern: ya
  } = ca;

  function ma(t, e) {
    return ya(this.node, t, e);
  }

  o(ma, "matchesPattern");

  function dn(t) {
    let e = this.node && this.node[t];
    return e && Array.isArray(e) ? !!e.length : !!e;
  }

  o(dn, "has");

  function ba() {
    return this.scope.isStatic(this.node);
  }

  o(ba, "isStatic");
  var va = dn;
  b.is = va;

  function xa(t) {
    return !this.has(t);
  }

  o(xa, "isnt");

  function Ea(t, e) {
    return this.node[t] === e;
  }

  o(Ea, "equals");

  function Pa(t) {
    return ga(this.type, t);
  }

  o(Pa, "isNodeType");

  function Sa() {
    return (this.key === "init" || this.key === "left") && this.parentPath.isFor();
  }

  o(Sa, "canHaveVariableDeclarationOrExpression");

  function ka(t) {
    return this.key !== "body" || !this.parentPath.isArrowFunctionExpression() ? !1 : this.isExpression() ? hn(t) : this.isBlockStatement() ? fa(t) : !1;
  }

  o(ka, "canSwapBetweenExpressionAndStatement");

  function _a(t) {
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

  o(_a, "isCompletionRecord");

  function wa() {
    return this.parentPath.isLabeledStatement() || hn(this.container) ? !1 : ua.includes(this.key);
  }

  o(wa, "isStatementOrBlock");

  function Aa(t, e) {
    if (!this.isReferencedIdentifier()) {
      if (this.isJSXMemberExpression() && this.node.property.name === e || (this.isMemberExpression() || this.isOptionalMemberExpression()) && (this.node.computed ? pa(this.node.property, {
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

    return !!(i.isImportDefaultSpecifier() && e === "default" || i.isImportNamespaceSpecifier() && e === "*" || i.isImportSpecifier() && ha(i.node.imported, {
      name: e
    }));
  }

  o(Aa, "referencesImport");

  function Ba() {
    let t = this.node;

    if (t.end) {
      let e = this.hub.getCode();
      if (e) return e.slice(t.start, t.end);
    }

    return "";
  }

  o(Ba, "getSource");

  function Ca(t) {
    return this._guessExecutionStatusRelativeTo(t) !== "after";
  }

  o(Ca, "willIMaybeExecuteBefore");

  function ln(t) {
    return (t.scope.getFunctionParent() || t.scope.getProgramParent()).path;
  }

  o(ln, "getOuterFunction");

  function Oa(t, e) {
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

  o(Oa, "isExecutionUncertain");

  function fn(t, e) {
    for (let n = 0; n < e; n++) {
      let i = t[n];
      if (Oa(i.parent.type, i.parentKey)) return !0;
    }

    return !1;
  }

  o(fn, "isExecutionUncertainInList");

  function Ta(t) {
    let e = {
      this: ln(this),
      target: ln(t)
    };
    if (e.target.node !== e.this.node) return this._guessExecutionStatusRelativeToDifferentFunctions(e.target);
    let n = {
      target: t.getAncestry(),
      this: this.getAncestry()
    };
    if (n.target.indexOf(this) >= 0) return "after";
    if (n.this.indexOf(t) >= 0) return "before";
    let i,
        r = {
      target: 0,
      this: 0
    };

    for (; !i && r.this < n.this.length;) {
      let u = n.this[r.this];
      r.target = n.target.indexOf(u), r.target >= 0 ? i = u : r.this++;
    }

    if (!i) throw new Error("Internal Babel error - The two compared nodes don't appear to belong to the same program.");
    if (fn(n.this, r.this - 1) || fn(n.target, r.target - 1)) return "unknown";
    let s = {
      this: n.this[r.this - 1],
      target: n.target[r.target - 1]
    };
    if (s.target.listKey && s.this.listKey && s.target.container === s.this.container) return s.target.key > s.this.key ? "before" : "after";
    let a = la[i.type],
        c = {
      this: a.indexOf(s.this.parentKey),
      target: a.indexOf(s.target.parentKey)
    };
    return c.target > c.this ? "before" : "after";
  }

  o(Ta, "_guessExecutionStatusRelativeTo");
  var tt = new WeakSet();

  function Ia(t) {
    if (!t.isFunctionDeclaration() || t.parentPath.isExportDeclaration()) return "unknown";
    let e = t.scope.getBinding(t.node.id.name);
    if (!e.references) return "before";
    let n = e.referencePaths,
        i;

    for (let r of n) {
      if (!!r.find(c => c.node === t.node)) continue;
      if (r.key !== "callee" || !r.parentPath.isCallExpression()) return "unknown";
      if (tt.has(r.node)) continue;
      tt.add(r.node);

      let a = this._guessExecutionStatusRelativeTo(r);

      if (tt.delete(r.node), i && i !== a) return "unknown";
      i = a;
    }

    return i;
  }

  o(Ia, "_guessExecutionStatusRelativeToDifferentFunctions");

  function Fa(t, e) {
    return this._resolve(t, e) || this;
  }

  o(Fa, "resolve");

  function Da(t, e) {
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
        if (!da(n)) return;
        let i = n.value,
            r = this.get("object").resolve(t, e);

        if (r.isObjectExpression()) {
          let s = r.get("properties");

          for (let a of s) {
            if (!a.isProperty()) continue;
            let c = a.get("key"),
                u = a.isnt("computed") && c.isIdentifier({
              name: i
            });
            if (u = u || c.isLiteral({
              value: i
            }), u) return a.get("value").resolve(t, e);
          }
        } else if (r.isArrayExpression() && !isNaN(+i)) {
          let a = r.get("elements")[i];
          if (a) return a.resolve(t, e);
        }
      }
    }
  }

  o(Da, "_resolve");

  function Na() {
    if (this.isIdentifier()) {
      let t = this.scope.getBinding(this.node.name);
      return t ? t.constant : !1;
    }

    return this.isLiteral() ? this.isRegExpLiteral() ? !1 : this.isTemplateLiteral() ? this.get("expressions").every(t => t.isConstantExpression()) : !0 : this.isUnaryExpression() ? this.node.operator !== "void" ? !1 : this.get("argument").isConstantExpression() : this.isBinaryExpression() ? this.get("left").isConstantExpression() && this.get("right").isConstantExpression() : !1;
  }

  o(Na, "isConstantExpression");

  function Ra() {
    return !!(this.isProgram() ? this : this.parentPath).find(n => {
      if (n.isProgram({
        sourceType: "module"
      }) || n.isClass()) return !0;
      if (!n.isProgram() && !n.isFunction() || n.isArrowFunctionExpression() && !n.get("body").isBlockStatement()) return !1;
      let i = n.isFunction() ? n.node.body : n.node;

      for (let r of i.directives) if (r.value.value === "use strict") return !0;
    });
  }

  o(Ra, "isInStrictMode");
});
var mn = g(v => {
  "use strict";

  Object.defineProperty(v, "__esModule", {
    value: !0
  });
  v._call = qa;
  v._getQueueContexts = ic;
  v._resyncKey = Ja;
  v._resyncList = Qa;
  v._resyncParent = Xa;
  v._resyncRemoved = Ga;
  v.call = ja;
  v.isBlacklisted = v.isDenylisted = Ma;
  v.popContext = za;
  v.pushContext = Za;
  v.requeue = nc;
  v.resync = Ya;
  v.setContext = Ha;
  v.setKey = tc;
  v.setScope = $a;
  v.setup = ec;
  v.skip = Ua;
  v.skipKey = Ka;
  v.stop = Wa;
  v.visit = Va;
  var La = nt(),
      gn = D();

  function ja(t) {
    let e = this.opts;
    return this.debug(t), this.node && this._call(e[t]) ? !0 : this.node ? this._call(e[this.node.type] && e[this.node.type][t]) : !1;
  }

  o(ja, "call");

  function qa(t) {
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

  o(qa, "_call");

  function Ma() {
    var t;
    let e = (t = this.opts.denylist) != null ? t : this.opts.blacklist;
    return e && e.indexOf(this.node.type) > -1;
  }

  o(Ma, "isDenylisted");

  function yn(t, e) {
    t.context !== e && (t.context = e, t.state = e.state, t.opts = e.opts);
  }

  o(yn, "restoreContext");

  function Va() {
    if (!this.node || this.isDenylisted() || this.opts.shouldSkip && this.opts.shouldSkip(this)) return !1;
    let t = this.context;
    return this.shouldSkip || this.call("enter") ? (this.debug("Skip..."), this.shouldStop) : (yn(this, t), this.debug("Recursing into..."), this.shouldStop = (0, La.traverseNode)(this.node, this.opts, this.scope, this.state, this, this.skipKeys), yn(this, t), this.call("exit"), this.shouldStop);
  }

  o(Va, "visit");

  function Ua() {
    this.shouldSkip = !0;
  }

  o(Ua, "skip");

  function Ka(t) {
    this.skipKeys == null && (this.skipKeys = {}), this.skipKeys[t] = !0;
  }

  o(Ka, "skipKey");

  function Wa() {
    this._traverseFlags |= gn.SHOULD_SKIP | gn.SHOULD_STOP;
  }

  o(Wa, "stop");

  function $a() {
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

  o($a, "setScope");

  function Ha(t) {
    return this.skipKeys != null && (this.skipKeys = {}), this._traverseFlags = 0, t && (this.context = t, this.state = t.state, this.opts = t.opts), this.setScope(), this;
  }

  o(Ha, "setContext");

  function Ya() {
    this.removed || (this._resyncParent(), this._resyncList(), this._resyncKey());
  }

  o(Ya, "resync");

  function Xa() {
    this.parentPath && (this.parent = this.parentPath.node);
  }

  o(Xa, "_resyncParent");

  function Ja() {
    if (!!this.container && this.node !== this.container[this.key]) {
      if (Array.isArray(this.container)) {
        for (let t = 0; t < this.container.length; t++) if (this.container[t] === this.node) return this.setKey(t);
      } else for (let t of Object.keys(this.container)) if (this.container[t] === this.node) return this.setKey(t);

      this.key = null;
    }
  }

  o(Ja, "_resyncKey");

  function Qa() {
    if (!this.parent || !this.inList) return;
    let t = this.parent[this.listKey];
    this.container !== t && (this.container = t || null);
  }

  o(Qa, "_resyncList");

  function Ga() {
    (this.key == null || !this.container || this.container[this.key] !== this.node) && this._markRemoved();
  }

  o(Ga, "_resyncRemoved");

  function za() {
    this.contexts.pop(), this.contexts.length > 0 ? this.setContext(this.contexts[this.contexts.length - 1]) : this.setContext(void 0);
  }

  o(za, "popContext");

  function Za(t) {
    this.contexts.push(t), this.setContext(t);
  }

  o(Za, "pushContext");

  function ec(t, e, n, i) {
    this.listKey = n, this.container = e, this.parentPath = t || this.parentPath, this.setKey(i);
  }

  o(ec, "setup");

  function tc(t) {
    var e;
    this.key = t, this.node = this.container[this.key], this.type = (e = this.node) == null ? void 0 : e.type;
  }

  o(tc, "setKey");

  function nc(t = this) {
    if (t.removed) return;
    let e = this.contexts;

    for (let n of e) n.maybeQueue(t);
  }

  o(nc, "requeue");

  function ic() {
    let t = this,
        e = this.contexts;

    for (; !e.length && (t = t.parentPath, !!t);) e = t.contexts;

    return e;
  }

  o(ic, "_getQueueContexts");
});
var bn = g(Pe => {
  "use strict";

  Object.defineProperty(Pe, "__esModule", {
    value: !0
  });
  Pe.hooks = void 0;
  var rc = [function (t, e) {
    if (t.key === "test" && (e.isWhile() || e.isSwitchCase()) || t.key === "declaration" && e.isExportDeclaration() || t.key === "body" && e.isLabeledStatement() || t.listKey === "declarations" && e.isVariableDeclaration() && e.node.declarations.length === 1 || t.key === "expression" && e.isExpressionStatement()) return e.remove(), !0;
  }, function (t, e) {
    if (e.isSequenceExpression() && e.node.expressions.length === 1) return e.replaceWith(e.node.expressions[0]), !0;
  }, function (t, e) {
    if (e.isBinary()) return t.key === "left" ? e.replaceWith(e.node.right) : e.replaceWith(e.node.left), !0;
  }, function (t, e) {
    if (e.isIfStatement() && (t.key === "consequent" || t.key === "alternate") || t.key === "body" && (e.isLoop() || e.isArrowFunctionExpression())) return t.replaceWith({
      type: "BlockStatement",
      body: []
    }), !0;
  }];
  Pe.hooks = rc;
});
var xn = g(q => {
  "use strict";

  Object.defineProperty(q, "__esModule", {
    value: !0
  });
  q._assertUnremoved = hc;
  q._callRemovalHooks = uc;
  q._markRemoved = fc;
  q._remove = lc;
  q._removeFromScope = cc;
  q.remove = ac;
  var sc = bn(),
      oc = M(),
      vn = D();

  function ac() {
    var t;

    if (this._assertUnremoved(), this.resync(), (t = this.opts) != null && t.noScope || this._removeFromScope(), this._callRemovalHooks()) {
      this._markRemoved();

      return;
    }

    this.shareCommentsWithSiblings(), this._remove(), this._markRemoved();
  }

  o(ac, "remove");

  function cc() {
    let t = this.getBindingIdentifiers();
    Object.keys(t).forEach(e => this.scope.removeBinding(e));
  }

  o(cc, "_removeFromScope");

  function uc() {
    for (let t of sc.hooks) if (t(this, this.parentPath)) return !0;
  }

  o(uc, "_callRemovalHooks");

  function lc() {
    Array.isArray(this.container) ? (this.container.splice(this.key, 1), this.updateSiblingKeys(this.key, -1)) : this._replaceWith(null);
  }

  o(lc, "_remove");

  function fc() {
    this._traverseFlags |= vn.SHOULD_SKIP | vn.REMOVED, this.parent && oc.path.get(this.parent).delete(this.node), this.node = null;
  }

  o(fc, "_markRemoved");

  function hc() {
    if (this.removed) throw this.buildCodeFrameError("NodePath has been removed so is read-only.");
  }

  o(hc, "_assertUnremoved");
});
var Pn = g(ke => {
  "use strict";

  Object.defineProperty(ke, "__esModule", {
    value: !0
  });
  ke.default = void 0;
  var En = ___babel_types$,
      dc = En,
      {
    react: pc
  } = En,
      {
    cloneNode: gc,
    jsxExpressionContainer: yc,
    variableDeclaration: mc,
    variableDeclarator: bc
  } = dc,
      vc = {
    ReferencedIdentifier(t, e) {
      if (t.isJSXIdentifier() && pc.isCompatTag(t.node.name) && !t.parentPath.isJSXMemberExpression()) return;

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
      Se = class {
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

          for (let a of r.constantViolations) this.getAttachmentParentForPath(a).key > e.key && (e = a);
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
      if (this.path.traverse(vc, this), this.mutableBinding) return;
      this.getCompatibleScopes();
      let e = this.getAttachmentPath();
      if (!e || e.getFunctionParent() === this.path.getFunctionParent()) return;
      let n = e.scope.generateUidIdentifier("ref"),
          i = bc(n, this.path.node),
          r = this.attachAfter ? "insertAfter" : "insertBefore",
          [s] = e[r]([e.isVariableDeclarator() ? i : mc("var", [i])]),
          a = this.path.parentPath;
      return a.isJSXElement() && this.path.container === a.node.children && (n = yc(n)), this.path.replaceWith(gc(n)), e.isVariableDeclarator() ? s.get("init") : s.get("declarations.0.init");
    }

  };
  o(Se, "PathHoister");
  ke.default = Se;
});
var wn = g(A => {
  "use strict";

  Object.defineProperty(A, "__esModule", {
    value: !0
  });
  A._containerInsert = Nc;
  A._containerInsertAfter = Lc;
  A._containerInsertBefore = Rc;
  A._verifyNodeList = Vc;
  A.hoist = Wc;
  A.insertAfter = qc;
  A.insertBefore = Dc;
  A.pushContainer = Kc;
  A.unshiftContainer = Uc;
  A.updateSiblingKeys = Mc;
  var xc = M(),
      Ec = Pn(),
      st = D(),
      Pc = ___babel_types$,
      {
    arrowFunctionExpression: Sc,
    assertExpression: kc,
    assignmentExpression: _c,
    blockStatement: Sn,
    callExpression: wc,
    cloneNode: it,
    expressionStatement: rt,
    isAssignmentExpression: Ac,
    isCallExpression: Bc,
    isExpression: Cc,
    isIdentifier: Oc,
    isSequenceExpression: Tc,
    isSuper: Ic,
    thisExpression: Fc
  } = Pc;

  function Dc(t) {
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
      return this.replaceWith(Sn(r ? [i] : [])), this.unshiftContainer("body", e);
    } else throw new Error("We don't know what to do with this node type. We were previously a Statement but we can't fit in here?");
  }

  o(Dc, "insertBefore");

  function Nc(t, e) {
    this.updateSiblingKeys(t, e.length);
    let n = [];
    this.container.splice(t, 0, ...e);

    for (let r = 0; r < e.length; r++) {
      let s = t + r,
          a = this.getSibling(s);
      n.push(a), this.context && this.context.queue && a.pushContext(this.context);
    }

    let i = this._getQueueContexts();

    for (let r of n) {
      r.setScope(), r.debug("Inserted.");

      for (let s of i) s.maybeQueue(r, !0);
    }

    return n;
  }

  o(Nc, "_containerInsert");

  function Rc(t) {
    return this._containerInsert(this.key, t);
  }

  o(Rc, "_containerInsertBefore");

  function Lc(t) {
    return this._containerInsert(this.key + 1, t);
  }

  o(Lc, "_containerInsertAfter");
  var kn = o(t => t[t.length - 1], "last");

  function _n(t) {
    return Tc(t.parent) && (kn(t.parent.expressions) !== t.node || _n(t.parentPath));
  }

  o(_n, "isHiddenInSequenceExpression");

  function jc(t, e) {
    if (!Ac(t) || !Oc(t.left)) return !1;
    let n = e.getBlockParent();
    return n.hasOwnBinding(t.left.name) && n.getOwnBinding(t.left.name).constantViolations.length <= 1;
  }

  o(jc, "isAlmostConstantAssignment");

  function qc(t) {
    if (this._assertUnremoved(), this.isSequenceExpression()) return kn(this.get("expressions")).insertAfter(t);

    let e = this._verifyNodeList(t),
        {
      parentPath: n
    } = this;

    if (n.isExpressionStatement() || n.isLabeledStatement() || n.isExportNamedDeclaration() || n.isExportDefaultDeclaration() && this.isDeclaration()) return n.insertAfter(e.map(i => Cc(i) ? rt(i) : i));

    if (this.isNodeType("Expression") && !this.isJSXElement() && !n.isJSXElement() || n.isForStatement() && this.key === "init") {
      if (this.node) {
        let i = this.node,
            {
          scope: r
        } = this;
        if (r.path.isPattern()) return kc(i), this.replaceWith(wc(Sc([], i), [])), this.get("callee.body").insertAfter(e), [this];
        if (_n(this)) e.unshift(i);else if (Bc(i) && Ic(i.callee)) e.unshift(i), e.push(Fc());else if (jc(i, r)) e.unshift(i), e.push(it(i.left));else if (r.isPure(i, !0)) e.push(i);else {
          n.isMethod({
            computed: !0,
            key: i
          }) && (r = r.parent);
          let s = r.generateDeclaredUidIdentifier();
          e.unshift(rt(_c("=", it(s), i))), e.push(rt(it(s)));
        }
      }

      return this.replaceExpressionWithStatements(e);
    } else {
      if (Array.isArray(this.container)) return this._containerInsertAfter(e);

      if (this.isStatementOrBlock()) {
        let i = this.node,
            r = i && (!this.isExpressionStatement() || i.expression != null);
        return this.replaceWith(Sn(r ? [i] : [])), this.pushContainer("body", e);
      } else throw new Error("We don't know what to do with this node type. We were previously a Statement but we can't fit in here?");
    }
  }

  o(qc, "insertAfter");

  function Mc(t, e) {
    if (!this.parent) return;
    let n = xc.path.get(this.parent);

    for (let [, i] of n) i.key >= t && (i.key += e);
  }

  o(Mc, "updateSiblingKeys");

  function Vc(t) {
    if (!t) return [];
    Array.isArray(t) || (t = [t]);

    for (let e = 0; e < t.length; e++) {
      let n = t[e],
          i;

      if (n ? typeof n != "object" ? i = "contains a non-object node" : n.type ? n instanceof st.default && (i = "has a NodePath when it expected a raw object") : i = "without a type" : i = "has falsy node", i) {
        let r = Array.isArray(n) ? "array" : typeof n;
        throw new Error(`Node list ${i} with the index of ${e} and type of ${r}`);
      }
    }

    return t;
  }

  o(Vc, "_verifyNodeList");

  function Uc(t, e) {
    return this._assertUnremoved(), e = this._verifyNodeList(e), st.default.get({
      parentPath: this,
      parent: this.node,
      container: this.node[t],
      listKey: t,
      key: 0
    }).setContext(this.context)._containerInsertBefore(e);
  }

  o(Uc, "unshiftContainer");

  function Kc(t, e) {
    this._assertUnremoved();

    let n = this._verifyNodeList(e),
        i = this.node[t];

    return st.default.get({
      parentPath: this,
      parent: this.node,
      container: i,
      listKey: t,
      key: i.length
    }).setContext(this.context).replaceWithMultiple(n);
  }

  o(Kc, "pushContainer");

  function Wc(t = this.scope) {
    return new Ec.default(this, t).run();
  }

  o(Wc, "hoist");
});
var Cn = g(E => {
  "use strict";

  Object.defineProperty(E, "__esModule", {
    value: !0
  });
  E._getKey = cu;
  E._getPattern = uu;
  E.get = au;
  E.getAllNextSiblings = su;
  E.getAllPrevSiblings = ou;
  E.getBindingIdentifierPaths = hu;
  E.getBindingIdentifiers = lu;
  E.getCompletionRecords = tu;
  E.getNextSibling = ru;
  E.getOpposite = zc;
  E.getOuterBindingIdentifierPaths = du;
  E.getOuterBindingIdentifiers = fu;
  E.getPrevSibling = iu;
  E.getSibling = nu;
  var at = D(),
      $c = ___babel_types$,
      {
    getBindingIdentifiers: Bn,
    getOuterBindingIdentifiers: Hc,
    isDeclaration: Yc,
    numericLiteral: Xc,
    unaryExpression: Jc
  } = $c,
      ct = 0,
      ie = 1;

  function Qc(t) {
    return {
      type: ct,
      path: t
    };
  }

  o(Qc, "NormalCompletion");

  function Gc(t) {
    return {
      type: ie,
      path: t
    };
  }

  o(Gc, "BreakCompletion");

  function zc() {
    return this.key === "left" ? this.getSibling("right") : this.key === "right" ? this.getSibling("left") : null;
  }

  o(zc, "getOpposite");

  function G(t, e, n) {
    return t && e.push(...z(t, n)), e;
  }

  o(G, "addCompletionRecords");

  function Zc(t, e, n) {
    let i = [];

    for (let r = 0; r < t.length; r++) {
      let s = t[r],
          a = z(s, n),
          c = [],
          u = [];

      for (let l of a) l.type === ct && c.push(l), l.type === ie && u.push(l);

      c.length && (i = c), e.push(...u);
    }

    return e.push(...i), e;
  }

  o(Zc, "completionRecordForSwitch");

  function eu(t) {
    t.forEach(e => {
      e.type = ie;
    });
  }

  o(eu, "normalCompletionToBreak");

  function ot(t, e) {
    t.forEach(n => {
      n.path.isBreakStatement({
        label: null
      }) && (e ? n.path.replaceWith(Jc("void", Xc(0))) : n.path.remove());
    });
  }

  o(ot, "replaceBreakStatementInBreakCompletion");

  function An(t, e) {
    let n = [];

    if (e.canHaveBreak) {
      let i = [];

      for (let r = 0; r < t.length; r++) {
        let s = t[r],
            a = Object.assign({}, e, {
          inCaseClause: !1
        });
        s.isBlockStatement() && (e.inCaseClause || e.shouldPopulateBreak) ? a.shouldPopulateBreak = !0 : a.shouldPopulateBreak = !1;
        let c = z(s, a);

        if (c.length > 0 && c.every(u => u.type === ie)) {
          i.length > 0 && c.every(u => u.path.isBreakStatement({
            label: null
          })) ? (eu(i), n.push(...i), i.some(u => u.path.isDeclaration()) && (n.push(...c), ot(c, !0)), ot(c, !1)) : (n.push(...c), e.shouldPopulateBreak || ot(c, !0));
          break;
        }

        if (r === t.length - 1) n.push(...c);else {
          i = [];

          for (let u = 0; u < c.length; u++) {
            let l = c[u];
            l.type === ie && n.push(l), l.type === ct && i.push(l);
          }
        }
      }
    } else if (t.length) for (let i = t.length - 1; i >= 0; i--) {
      let r = z(t[i], e);

      if (r.length > 1 || r.length === 1 && !r[0].path.isVariableDeclaration()) {
        n.push(...r);
        break;
      }
    }

    return n;
  }

  o(An, "getStatementListCompletion");

  function z(t, e) {
    let n = [];
    if (t.isIfStatement()) n = G(t.get("consequent"), n, e), n = G(t.get("alternate"), n, e);else {
      if (t.isDoExpression() || t.isFor() || t.isWhile() || t.isLabeledStatement()) return G(t.get("body"), n, e);
      if (t.isProgram() || t.isBlockStatement()) return An(t.get("body"), e);
      if (t.isFunction()) return z(t.get("body"), e);
      if (t.isTryStatement()) n = G(t.get("block"), n, e), n = G(t.get("handler"), n, e);else {
        if (t.isCatchClause()) return G(t.get("body"), n, e);
        if (t.isSwitchStatement()) return Zc(t.get("cases"), n, e);
        if (t.isSwitchCase()) return An(t.get("consequent"), {
          canHaveBreak: !0,
          shouldPopulateBreak: !1,
          inCaseClause: !0
        });
        t.isBreakStatement() ? n.push(Gc(t)) : n.push(Qc(t));
      }
    }
    return n;
  }

  o(z, "_getCompletionRecords");

  function tu() {
    return z(this, {
      canHaveBreak: !1,
      shouldPopulateBreak: !1,
      inCaseClause: !1
    }).map(e => e.path);
  }

  o(tu, "getCompletionRecords");

  function nu(t) {
    return at.default.get({
      parentPath: this.parentPath,
      parent: this.parent,
      container: this.container,
      listKey: this.listKey,
      key: t
    }).setContext(this.context);
  }

  o(nu, "getSibling");

  function iu() {
    return this.getSibling(this.key - 1);
  }

  o(iu, "getPrevSibling");

  function ru() {
    return this.getSibling(this.key + 1);
  }

  o(ru, "getNextSibling");

  function su() {
    let t = this.key,
        e = this.getSibling(++t),
        n = [];

    for (; e.node;) n.push(e), e = this.getSibling(++t);

    return n;
  }

  o(su, "getAllNextSiblings");

  function ou() {
    let t = this.key,
        e = this.getSibling(--t),
        n = [];

    for (; e.node;) n.push(e), e = this.getSibling(--t);

    return n;
  }

  o(ou, "getAllPrevSiblings");

  function au(t, e = !0) {
    e === !0 && (e = this.context);
    let n = t.split(".");
    return n.length === 1 ? this._getKey(t, e) : this._getPattern(n, e);
  }

  o(au, "get");

  function cu(t, e) {
    let n = this.node,
        i = n[t];
    return Array.isArray(i) ? i.map((r, s) => at.default.get({
      listKey: t,
      parentPath: this,
      parent: n,
      container: i,
      key: s
    }).setContext(e)) : at.default.get({
      parentPath: this,
      parent: n,
      container: n,
      key: t
    }).setContext(e);
  }

  o(cu, "_getKey");

  function uu(t, e) {
    let n = this;

    for (let i of t) i === "." ? n = n.parentPath : Array.isArray(n) ? n = n[i] : n = n.get(i, e);

    return n;
  }

  o(uu, "_getPattern");

  function lu(t) {
    return Bn(this.node, t);
  }

  o(lu, "getBindingIdentifiers");

  function fu(t) {
    return Hc(this.node, t);
  }

  o(fu, "getOuterBindingIdentifiers");

  function hu(t = !1, e = !1) {
    let i = [this],
        r = Object.create(null);

    for (; i.length;) {
      let s = i.shift();
      if (!s || !s.node) continue;
      let a = Bn.keys[s.node.type];

      if (s.isIdentifier()) {
        t ? (r[s.node.name] = r[s.node.name] || []).push(s) : r[s.node.name] = s;
        continue;
      }

      if (s.isExportDeclaration()) {
        let c = s.get("declaration");
        Yc(c) && i.push(c);
        continue;
      }

      if (e) {
        if (s.isFunctionDeclaration()) {
          i.push(s.get("id"));
          continue;
        }

        if (s.isFunctionExpression()) continue;
      }

      if (a) for (let c = 0; c < a.length; c++) {
        let u = a[c],
            l = s.get(u);
        Array.isArray(l) ? i.push(...l) : l.node && i.push(l);
      }
    }

    return r;
  }

  o(hu, "getBindingIdentifierPaths");

  function du(t) {
    return this.getBindingIdentifierPaths(t, !0);
  }

  o(du, "getOuterBindingIdentifierPaths");
});
var On = g(re => {
  "use strict";

  Object.defineProperty(re, "__esModule", {
    value: !0
  });
  re.addComment = bu;
  re.addComments = vu;
  re.shareCommentsWithSiblings = mu;
  var pu = ___babel_types$,
      {
    addComment: gu,
    addComments: yu
  } = pu;

  function mu() {
    if (typeof this.key == "string") return;
    let t = this.node;
    if (!t) return;
    let e = t.trailingComments,
        n = t.leadingComments;
    if (!e && !n) return;
    let i = this.getSibling(this.key - 1),
        r = this.getSibling(this.key + 1),
        s = Boolean(i.node),
        a = Boolean(r.node);
    s && !a ? i.addComments("trailing", e) : a && !s && r.addComments("leading", n);
  }

  o(mu, "shareCommentsWithSiblings");

  function bu(t, e, n) {
    gu(this.node, t, e, n);
  }

  o(bu, "addComment");

  function vu(t, e) {
    yu(this.node, t, e);
  }

  o(vu, "addComments");
});
var D = g(T => {
  "use strict";

  Object.defineProperty(T, "__esModule", {
    value: !0
  });
  T.default = T.SHOULD_STOP = T.SHOULD_SKIP = T.REMOVED = void 0;

  var Tn = Le(),
      xu = __debug$,
      Eu = X(),
      Pu = Ue(),
      Dn = ___babel_types$,
      Be = Dn,
      In = M(),
      Su = ___babel_generator$,
      ku = It(),
      _u = Xt(),
      wu = en(),
      Au = rn(),
      Bu = un(),
      Cu = pn(),
      Ou = mn(),
      Tu = xn(),
      Iu = wn(),
      Fu = Cn(),
      Du = On(),
      {
    validate: Nu
  } = Dn,
      Fn = xu("babel"),
      _e = 1 << 0;

  T.REMOVED = _e;
  var we = 1 << 1;
  T.SHOULD_STOP = we;
  var Ae = 1 << 2;
  T.SHOULD_SKIP = Ae;
  var I = class {
    constructor(e, n) {
      this.contexts = [], this.state = null, this.opts = null, this._traverseFlags = 0, this.skipKeys = null, this.parentPath = null, this.container = null, this.listKey = null, this.key = null, this.node = null, this.type = null, this.parent = n, this.hub = e, this.data = null, this.context = null, this.scope = null;
    }

    static get({
      hub: e,
      parentPath: n,
      parent: i,
      container: r,
      listKey: s,
      key: a
    }) {
      if (!e && n && (e = n.hub), !i) throw new Error("To get a node path the parent needs to exist");
      let c = r[a],
          u = In.path.get(i);
      u || (u = new Map(), In.path.set(i, u));
      let l = u.get(c);
      return l || (l = new I(e, i), c && u.set(c, l)), l.setup(n, r, s, a), l;
    }

    getScope(e) {
      return this.isScope() ? new Pu.default(this) : e;
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
      (0, Eu.default)(this.node, e, this.scope, n, this);
    }

    set(e, n) {
      Nu(this.node, e, n), this.node[e] = n;
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
      !Fn.enabled || Fn(`${this.getPathLocation()} ${this.type}: ${e}`);
    }

    toString() {
      return (0, Su.default)(this.node).code;
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
      return !!(this._traverseFlags & Ae);
    }

    set shouldSkip(e) {
      e ? this._traverseFlags |= Ae : this._traverseFlags &= ~Ae;
    }

    get shouldStop() {
      return !!(this._traverseFlags & we);
    }

    set shouldStop(e) {
      e ? this._traverseFlags |= we : this._traverseFlags &= ~we;
    }

    get removed() {
      return !!(this._traverseFlags & _e);
    }

    set removed(e) {
      e ? this._traverseFlags |= _e : this._traverseFlags &= ~_e;
    }

  };
  o(I, "NodePath");
  Object.assign(I.prototype, ku, _u, wu, Au, Bu, Cu, Ou, Tu, Iu, Fu, Du);

  for (let t of Be.TYPES) {
    let e = `is${t}`,
        n = Be[e];
    I.prototype[e] = function (i) {
      return n(this.node, i);
    }, I.prototype[`assert${t}`] = function (i) {
      if (!n(this.node, i)) throw new TypeError(`Expected node path of type ${t}`);
    };
  }

  for (let t of Object.keys(Tn)) {
    if (t[0] === "_") continue;
    Be.TYPES.indexOf(t) < 0 && Be.TYPES.push(t);
    let e = Tn[t];

    I.prototype[`is${t}`] = function (n) {
      return e.checkPath(this, n);
    };
  }

  var Ru = I;
  T.default = Ru;
});
var Nn = g(Oe => {
  "use strict";

  Object.defineProperty(Oe, "__esModule", {
    value: !0
  });
  Oe.default = void 0;
  var Lu = D(),
      ju = ___babel_types$,
      {
    VISITOR_KEYS: qu
  } = ju,
      Ce = class {
    constructor(e, n, i, r) {
      this.queue = null, this.priorityQueue = null, this.parentPath = r, this.scope = e, this.state = i, this.opts = n;
    }

    shouldVisit(e) {
      let n = this.opts;
      if (n.enter || n.exit || n[e.type]) return !0;
      let i = qu[e.type];
      if (!(i != null && i.length)) return !1;

      for (let r of i) if (e[r]) return !0;

      return !1;
    }

    create(e, n, i, r) {
      return Lu.default.get({
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
        let a = e[s];
        a && this.shouldVisit(a) && r.push(this.create(n, e, s, i));
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
  o(Ce, "TraversalContext");
  Oe.default = Ce;
});
var nt = g(ut => {
  "use strict";

  Object.defineProperty(ut, "__esModule", {
    value: !0
  });
  ut.traverseNode = Ku;
  var Mu = Nn(),
      Vu = ___babel_types$,
      {
    VISITOR_KEYS: Uu
  } = Vu;

  function Ku(t, e, n, i, r, s) {
    let a = Uu[t.type];
    if (!a) return !1;
    let c = new Mu.default(n, e, i, r);

    for (let u of a) if (!(s && s[u]) && c.visit(t, u)) return !0;

    return !1;
  }

  o(Ku, "traverseNode");
});
var Rn = g(Ie => {
  "use strict";

  Object.defineProperty(Ie, "__esModule", {
    value: !0
  });
  Ie.default = void 0;
  var Te = class {
    getCode() {}

    getScope() {}

    addHelper() {
      throw new Error("Helpers are not supported by the default hub.");
    }

    buildError(e, n, i = TypeError) {
      return new i(n);
    }

  };
  o(Te, "Hub");
  Ie.default = Te;
});
var X = g(N => {
  "use strict";

  Object.defineProperty(N, "__esModule", {
    value: !0
  });
  Object.defineProperty(N, "Hub", {
    enumerable: !0,
    get: function () {
      return Yu.default;
    }
  });
  Object.defineProperty(N, "NodePath", {
    enumerable: !0,
    get: function () {
      return $u.default;
    }
  });
  Object.defineProperty(N, "Scope", {
    enumerable: !0,
    get: function () {
      return Hu.default;
    }
  });
  N.visitors = N.default = void 0;
  var se = je();
  N.visitors = se;
  var Wu = ___babel_types$,
      Ln = M(),
      jn = nt(),
      $u = D(),
      Hu = Ue(),
      Yu = Rn(),
      {
    VISITOR_KEYS: Xu,
    removeProperties: Ju,
    traverseFast: qn
  } = Wu;

  function B(t, e = {}, n, i, r) {
    if (!!t) {
      if (!e.noScope && !n && t.type !== "Program" && t.type !== "File") throw new Error(`You must pass a scope and parentPath unless traversing a Program/File. Instead of that you tried to traverse a ${t.type} node without passing scope and parentPath.`);
      !Xu[t.type] || (se.explode(e), (0, jn.traverseNode)(t, e, n, i, r));
    }
  }

  o(B, "traverse");
  var Qu = B;
  N.default = Qu;
  B.visitors = se;
  B.verify = se.verify;
  B.explode = se.explode;

  B.cheap = function (t, e) {
    return qn(t, e);
  };

  B.node = function (t, e, n, i, r, s) {
    (0, jn.traverseNode)(t, e, n, i, r, s);
  };

  B.clearNode = function (t, e) {
    Ju(t, e), Ln.path.delete(t);
  };

  B.removeProperties = function (t, e) {
    return qn(t, B.clearNode, e), t;
  };

  function Gu(t, e) {
    t.node.type === e.type && (e.has = !0, t.stop());
  }

  o(Gu, "hasDenylistedType");

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
      enter: Gu
    }, null, i), i.has;
  };

  B.cache = Ln;
});
var Mn = lt(X()),
    Vn = lt(X()),
    {
  __esModule: Cl,
  Hub: Ol,
  NodePath: Tl,
  Scope: Il,
  visitors: Fl
} = Vn,
    {
  default: zu,
  ...Zu
} = Vn,
    Dl = Mn.default ?? zu ?? Zu;
export { Ol as Hub, Tl as NodePath, Il as Scope, Cl as __esModule, Dl as default, Fl as visitors };