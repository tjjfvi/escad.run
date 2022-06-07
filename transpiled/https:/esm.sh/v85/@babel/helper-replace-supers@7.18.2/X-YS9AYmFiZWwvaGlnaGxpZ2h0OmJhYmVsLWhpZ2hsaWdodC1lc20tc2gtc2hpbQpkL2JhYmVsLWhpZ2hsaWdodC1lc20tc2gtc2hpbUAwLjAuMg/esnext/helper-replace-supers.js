/* esm.sh - esbuild bundle(@babel/helper-replace-supers@7.18.2) esnext production */
import * as ___babel_helper_optimise_call_expression$$ from "/transpiled/https://esm.sh/v85/@babel/helper-optimise-call-expression@7.16.7/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-optimise-call-expression.js";

const ___babel_helper_optimise_call_expression$ = Object.assign({
  __esModule: true
}, ___babel_helper_optimise_call_expression$$);

import * as ___babel_helper_member_expression_to_functions$$ from "/transpiled/https://esm.sh/v85/@babel/helper-member-expression-to-functions@7.17.7/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-member-expression-to-functions.js";

const ___babel_helper_member_expression_to_functions$ = Object.assign({
  __esModule: true
}, ___babel_helper_member_expression_to_functions$$);

import * as ___babel_traverse$$ from "/transpiled/https://esm.sh/v85/@babel/traverse@7.18.2/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/traverse.js";

const ___babel_traverse$ = Object.assign({
  __esModule: true
}, ___babel_traverse$$);

import ___babel_types$ from "/transpiled/https://esm.sh/v85/@babel/types@7.18.4/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/types.js";
import * as ___babel_helper_environment_visitor$$ from "/transpiled/https://esm.sh/v85/@babel/helper-environment-visitor@7.18.2/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-environment-visitor.js";

const ___babel_helper_environment_visitor$ = Object.assign({
  __esModule: true
}, ___babel_helper_environment_visitor$$);

var M = Object.create;
var g = Object.defineProperty;
var T = Object.getOwnPropertyDescriptor;
var B = Object.getOwnPropertyNames;
var k = Object.getPrototypeOf,
    q = Object.prototype.hasOwnProperty;

var v = (t, e) => g(t, "name", {
  value: e,
  configurable: !0
}),
    a = (t => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(t, {
  get: (e, s) => (typeof require != "undefined" ? require : e)[s]
}) : t)(function (t) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});

var D = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);

var H = (t, e, s, i) => {
  if (e && typeof e == "object" || typeof e == "function") for (let r of B(e)) !q.call(t, r) && r !== s && g(t, r, {
    get: () => e[r],
    enumerable: !(i = T(e, r)) || i.enumerable
  });
  return t;
};

var O = (t, e, s) => (s = t != null ? M(k(t)) : {}, H(e || !t || !t.__esModule ? g(s, "default", {
  value: t,
  enumerable: !0
}) : s, t));

var S = D(p => {
  "use strict";

  Object.defineProperty(p, "__esModule", {
    value: !0
  });
  p.default = void 0;
  Object.defineProperty(p, "environmentVisitor", {
    enumerable: !0,
    get: function () {
      return m.default;
    }
  });
  Object.defineProperty(p, "skipAllButComputedKey", {
    enumerable: !0,
    get: function () {
      return m.skipAllButComputedKey;
    }
  });
  var y = ___babel_traverse$,
      $ = ___babel_helper_member_expression_to_functions$,
      f = ___babel_helper_optimise_call_expression$,
      m = ___babel_helper_environment_visitor$,
      V = ___babel_types$,
      {
    assignmentExpression: j,
    booleanLiteral: w,
    callExpression: b,
    cloneNode: o,
    identifier: d,
    memberExpression: u,
    sequenceExpression: R,
    stringLiteral: A,
    thisExpression: h
  } = V;

  function _(t, e, s, i) {
    t = o(t);
    let r = e || i ? t : u(t, d("prototype"));
    return b(s.addHelper("getPrototypeOf"), [r]);
  }

  v(_, "getPrototypeOfExpression");
  var F = y.default.visitors.merge([m.default, {
    Super(t, e) {
      let {
        node: s,
        parentPath: i
      } = t;
      !i.isMemberExpression({
        object: s
      }) || e.handle(i);
    }

  }]),
      K = y.default.visitors.merge([m.default, {
    Scopable(t, {
      refName: e
    }) {
      let s = t.scope.getOwnBinding(e);
      s && s.identifier.name === e && t.scope.rename(e);
    }

  }]),
      C = {
    memoise(t, e) {
      let {
        scope: s,
        node: i
      } = t,
          {
        computed: r,
        property: n
      } = i;
      if (!r) return;
      let c = s.maybeGenerateMemoised(n);
      !c || this.memoiser.set(n, c, e);
    },

    prop(t) {
      let {
        computed: e,
        property: s
      } = t.node;
      return this.memoiser.has(s) ? o(this.memoiser.get(s)) : e ? o(s) : A(s.name);
    },

    get(t) {
      return this._get(t, this._getThisRefs());
    },

    _get(t, e) {
      let s = _(this.getObjectRef(), this.isStatic, this.file, this.isPrivateMethod);

      return b(this.file.addHelper("get"), [e.memo ? R([e.memo, s]) : s, this.prop(t), e.this]);
    },

    _getThisRefs() {
      if (!this.isDerivedConstructor) return {
        this: h()
      };
      let t = this.scope.generateDeclaredUidIdentifier("thisSuper");
      return {
        memo: j("=", t, h()),
        this: o(t)
      };
    },

    set(t, e) {
      let s = this._getThisRefs(),
          i = _(this.getObjectRef(), this.isStatic, this.file, this.isPrivateMethod);

      return b(this.file.addHelper("set"), [s.memo ? R([s.memo, i]) : i, this.prop(t), e, s.this, w(t.isInStrictMode())]);
    },

    destructureSet(t) {
      throw t.buildCodeFrameError("Destructuring to a super field is not supported yet.");
    },

    call(t, e) {
      let s = this._getThisRefs();

      return (0, f.default)(this._get(t, s), o(s.this), e, !1);
    },

    optionalCall(t, e) {
      let s = this._getThisRefs();

      return (0, f.default)(this._get(t, s), o(s.this), e, !0);
    }

  },
      L = Object.assign({}, C, {
    prop(t) {
      let {
        property: e
      } = t.node;
      return this.memoiser.has(e) ? o(this.memoiser.get(e)) : o(e);
    },

    get(t) {
      let {
        isStatic: e,
        getSuperRef: s
      } = this,
          {
        computed: i
      } = t.node,
          r = this.prop(t),
          n;

      if (e) {
        var c;
        n = (c = s()) != null ? c : u(d("Function"), d("prototype"));
      } else {
        var P;
        n = u((P = s()) != null ? P : d("Object"), d("prototype"));
      }

      return u(n, r, i);
    },

    set(t, e) {
      let {
        computed: s
      } = t.node,
          i = this.prop(t);
      return j("=", u(h(), i, s), e);
    },

    destructureSet(t) {
      let {
        computed: e
      } = t.node,
          s = this.prop(t);
      return u(h(), s, e);
    },

    call(t, e) {
      return (0, f.default)(this.get(t), h(), e, !1);
    },

    optionalCall(t, e) {
      return (0, f.default)(this.get(t), h(), e, !0);
    }

  }),
      l = class {
    constructor(e) {
      var s;
      let i = e.methodPath;
      this.methodPath = i, this.isDerivedConstructor = i.isClassMethod({
        kind: "constructor"
      }) && !!e.superRef, this.isStatic = i.isObjectMethod() || i.node.static || (i.isStaticBlock == null ? void 0 : i.isStaticBlock()), this.isPrivateMethod = i.isPrivate() && i.isMethod(), this.file = e.file, this.constantSuper = (s = e.constantSuper) != null ? s : e.isLoose, this.opts = e;
    }

    getObjectRef() {
      return o(this.opts.objectRef || this.opts.getObjectRef());
    }

    getSuperRef() {
      if (this.opts.superRef) return o(this.opts.superRef);
      if (this.opts.getSuperRef) return o(this.opts.getSuperRef());
    }

    replace() {
      this.opts.refToPreserve && this.methodPath.traverse(K, {
        refName: this.opts.refToPreserve.name
      });
      let e = this.constantSuper ? L : C;
      (0, $.default)(this.methodPath, F, Object.assign({
        file: this.file,
        scope: this.methodPath.scope,
        isDerivedConstructor: this.isDerivedConstructor,
        isStatic: this.isStatic,
        isPrivateMethod: this.isPrivateMethod,
        getObjectRef: this.getObjectRef.bind(this),
        getSuperRef: this.getSuperRef.bind(this),
        boundGet: e.get
      }, e));
    }

  };
  v(l, "ReplaceSupers");
  p.default = l;
});
var x = O(S()),
    E = O(S()),
    {
  __esModule: J,
  environmentVisitor: N,
  skipAllButComputedKey: Q
} = E,
    {
  default: G,
  ...I
} = E,
    W = x.default ?? G ?? I;
export { J as __esModule, W as default, N as environmentVisitor, Q as skipAllButComputedKey };