/* esm.sh - esbuild bundle(@babel/helper-replace-supers@7.19.1) esnext production */
import ___babel_types$ from "/transpiled/https://esm.sh/v96/@babel/types@7.19.3/esnext/types.js";
import * as ___babel_helper_environment_visitor$ from "/transpiled/https://esm.sh/v96/@babel/helper-environment-visitor@7.18.9/esnext/helper-environment-visitor.js";
import * as ___babel_helper_optimise_call_expression$ from "/transpiled/https://esm.sh/v96/@babel/helper-optimise-call-expression@7.18.6/esnext/helper-optimise-call-expression.js";
import * as ___babel_helper_member_expression_to_functions$ from "/transpiled/https://esm.sh/v96/@babel/helper-member-expression-to-functions@7.18.9/esnext/helper-member-expression-to-functions.js";
import * as ___babel_traverse$ from "/transpiled/https://esm.sh/v96/@babel/traverse@7.19.3/esnext/traverse.js";
var C = Object.create;
var _ = Object.defineProperty;
var E = Object.getOwnPropertyDescriptor;
var M = Object.getOwnPropertyNames;
var T = Object.getPrototypeOf,
    B = Object.prototype.hasOwnProperty;

var a = (t => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(t, {
  get: (e, s) => (typeof require < "u" ? require : e)[s]
}) : t)(function (t) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});

var k = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);

var q = (t, e, s, i) => {
  if (e && typeof e == "object" || typeof e == "function") for (let r of M(e)) !B.call(t, r) && r !== s && _(t, r, {
    get: () => e[r],
    enumerable: !(i = E(e, r)) || i.enumerable
  });
  return t;
};

var D = (t, e, s) => (s = t != null ? C(T(t)) : {}, q(e || !t || !t.__esModule ? _(s, "default", {
  value: t,
  enumerable: !0
}) : s, t));

var y = k(p => {
  "use strict";

  Object.defineProperty(p, "__esModule", {
    value: !0
  });
  p.default = void 0;
  Object.defineProperty(p, "environmentVisitor", {
    enumerable: !0,
    get: function () {
      return f.default;
    }
  });
  Object.defineProperty(p, "skipAllButComputedKey", {
    enumerable: !0,
    get: function () {
      return f.skipAllButComputedKey;
    }
  });
  var P = ___babel_traverse$,
      H = ___babel_helper_member_expression_to_functions$,
      l = ___babel_helper_optimise_call_expression$,
      f = ___babel_helper_environment_visitor$,
      V = ___babel_types$,
      {
    assignmentExpression: R,
    booleanLiteral: w,
    callExpression: m,
    cloneNode: o,
    identifier: d,
    memberExpression: u,
    sequenceExpression: b,
    stringLiteral: A,
    thisExpression: h
  } = V;

  function S(t, e, s, i) {
    t = o(t);
    let r = e || i ? t : u(t, d("prototype"));
    return m(s.addHelper("getPrototypeOf"), [r]);
  }

  var F = P.default.visitors.merge([f.default, {
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
      K = P.default.visitors.merge([f.default, {
    Scopable(t, {
      refName: e
    }) {
      let s = t.scope.getOwnBinding(e);
      s && s.identifier.name === e && t.scope.rename(e);
    }

  }]),
      O = {
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
      let s = S(this.getObjectRef(), this.isStatic, this.file, this.isPrivateMethod);
      return m(this.file.addHelper("get"), [e.memo ? b([e.memo, s]) : s, this.prop(t), e.this]);
    },

    _getThisRefs() {
      if (!this.isDerivedConstructor) return {
        this: h()
      };
      let t = this.scope.generateDeclaredUidIdentifier("thisSuper");
      return {
        memo: R("=", t, h()),
        this: o(t)
      };
    },

    set(t, e) {
      let s = this._getThisRefs(),
          i = S(this.getObjectRef(), this.isStatic, this.file, this.isPrivateMethod);

      return m(this.file.addHelper("set"), [s.memo ? b([s.memo, i]) : i, this.prop(t), e, s.this, w(t.isInStrictMode())]);
    },

    destructureSet(t) {
      throw t.buildCodeFrameError("Destructuring to a super field is not supported yet.");
    },

    call(t, e) {
      let s = this._getThisRefs();

      return (0, l.default)(this._get(t, s), o(s.this), e, !1);
    },

    optionalCall(t, e) {
      let s = this._getThisRefs();

      return (0, l.default)(this._get(t, s), o(s.this), e, !0);
    }

  },
      L = Object.assign({}, O, {
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
        var v;
        n = u((v = s()) != null ? v : d("Object"), d("prototype"));
      }

      return u(n, r, i);
    },

    set(t, e) {
      let {
        computed: s
      } = t.node,
          i = this.prop(t);
      return R("=", u(h(), i, s), e);
    },

    destructureSet(t) {
      let {
        computed: e
      } = t.node,
          s = this.prop(t);
      return u(h(), s, e);
    },

    call(t, e) {
      return (0, l.default)(this.get(t), h(), e, !1);
    },

    optionalCall(t, e) {
      return (0, l.default)(this.get(t), h(), e, !0);
    }

  }),
      g = class {
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
      let e = this.constantSuper ? L : O;
      (0, H.default)(this.methodPath, F, Object.assign({
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
  p.default = g;
});
var x = D(y()),
    $ = !0,
    {
  environmentVisitor: z,
  skipAllButComputedKey: J
} = x,
    {
  default: j,
  ...G
} = x,
    N = j !== void 0 ? j : G;
export { $ as __esModule, N as default, z as environmentVisitor, J as skipAllButComputedKey };