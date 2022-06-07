/* esm.sh - esbuild bundle(@babel/helper-environment-visitor@7.18.2) esnext production */
var y = Object.create;
var s = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var a = Object.getOwnPropertyNames;
var k = Object.getPrototypeOf,
    A = Object.prototype.hasOwnProperty;

var i = (e, o) => s(e, "name", {
  value: o,
  configurable: !0
});

var C = (e, o) => () => (o || e((o = {
  exports: {}
}).exports, o), o.exports);

var K = (e, o, t, d) => {
  if (o && typeof o == "object" || typeof o == "function") for (let u of a(o)) !A.call(e, u) && u !== t && s(e, u, {
    get: () => o[u],
    enumerable: !(d = p(o, u)) || d.enumerable
  });
  return e;
};

var f = (e, o, t) => (t = e != null ? y(k(e)) : {}, K(o || !e || !e.__esModule ? s(t, "default", {
  value: e,
  enumerable: !0
}) : t, e));

var c = C(r => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  r.default = void 0;
  r.requeueComputedKeyAndDecorators = n;
  r.skipAllButComputedKey = b;

  function b(e) {
    e.skip(), e.node.computed && e.context.maybeQueue(e.get("key"));
  }

  i(b, "skipAllButComputedKey");

  function n(e) {
    let {
      context: o,
      node: t
    } = e;
    if (t.computed && o.maybeQueue(e.get("key")), t.decorators) for (let d of e.get("decorators")) o.maybeQueue(d);
  }

  i(n, "requeueComputedKeyAndDecorators");
  var x = {
    FunctionParent(e) {
      e.isArrowFunctionExpression() || (e.skip(), e.isMethod() && n(e));
    },

    Property(e) {
      e.isObjectProperty() || (e.skip(), n(e));
    }

  },
      _ = x;
  r.default = _;
});
var l = f(c()),
    m = f(c()),
    {
  __esModule: q,
  requeueComputedKeyAndDecorators: B,
  skipAllButComputedKey: D
} = m,
    {
  default: v,
  ...P
} = m,
    M = l.default ?? v ?? P;
export { q as __esModule, M as default, B as requeueComputedKeyAndDecorators, D as skipAllButComputedKey };