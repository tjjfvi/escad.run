/* esm.sh - esbuild bundle(@babel/helper-environment-visitor@7.18.9) esnext production */
var l = Object.create;
var n = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var y = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf,
    _ = Object.prototype.hasOwnProperty;

var a = (e, o) => () => (o || e((o = {
  exports: {}
}).exports, o), o.exports);

var k = (e, o, t, d) => {
  if (o && typeof o == "object" || typeof o == "function") for (let r of y(o)) !_.call(e, r) && r !== t && n(e, r, {
    get: () => o[r],
    enumerable: !(d = m(o, r)) || d.enumerable
  });
  return e;
};

var A = (e, o, t) => (t = e != null ? l(p(e)) : {}, k(o || !e || !e.__esModule ? n(t, "default", {
  value: e,
  enumerable: !0
}) : t, e));

var i = a(u => {
  "use strict";

  Object.defineProperty(u, "__esModule", {
    value: !0
  });
  u.default = void 0;
  u.requeueComputedKeyAndDecorators = s;
  u.skipAllButComputedKey = x;

  function x(e) {
    e.skip(), e.node.computed && e.context.maybeQueue(e.get("key"));
  }

  function s(e) {
    let {
      context: o,
      node: t
    } = e;
    if (t.computed && o.maybeQueue(e.get("key")), t.decorators) for (let d of e.get("decorators")) o.maybeQueue(d);
  }

  var C = {
    FunctionParent(e) {
      e.isArrowFunctionExpression() || (e.skip(), e.isMethod() && s(e));
    },

    Property(e) {
      e.isObjectProperty() || (e.skip(), s(e));
    }

  },
      K = C;
  u.default = K;
});
var f = A(i()),
    g = !0,
    {
  requeueComputedKeyAndDecorators: q,
  skipAllButComputedKey: B
} = f,
    {
  default: c,
  ...b
} = f,
    D = c !== void 0 ? c : b;
export { g as __esModule, D as default, q as requeueComputedKeyAndDecorators, B as skipAllButComputedKey };