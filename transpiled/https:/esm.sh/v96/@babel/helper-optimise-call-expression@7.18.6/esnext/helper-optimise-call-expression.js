/* esm.sh - esbuild bundle(@babel/helper-optimise-call-expression@7.18.6) esnext production */
import ___babel_types$ from "/transpiled/https://esm.sh/v96/@babel/types@7.19.3/esnext/types.js";
var d = Object.create;
var s = Object.defineProperty;
var x = Object.getOwnPropertyDescriptor;
var c = Object.getOwnPropertyNames;
var E = Object.getPrototypeOf,
    b = Object.prototype.hasOwnProperty;

var y = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (t, r) => (typeof require < "u" ? require : t)[r]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var M = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var v = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function") for (let u of c(t)) !b.call(e, u) && u !== r && s(e, u, {
    get: () => t[u],
    enumerable: !(n = x(t, u)) || n.enumerable
  });
  return e;
};

var C = (e, t, r) => (r = e != null ? d(E(e)) : {}, v(t || !e || !e.__esModule ? s(r, "default", {
  value: e,
  enumerable: !0
}) : r, e));

var m = M(i => {
  "use strict";

  Object.defineProperty(i, "__esModule", {
    value: !0
  });
  i.default = O;
  var j = ___babel_types$,
      {
    callExpression: f,
    identifier: l,
    isIdentifier: q,
    isSpreadElement: I,
    memberExpression: o,
    optionalCallExpression: a,
    optionalMemberExpression: p
  } = j;

  function O(e, t, r, n) {
    return r.length === 1 && I(r[0]) && q(r[0].argument, {
      name: "arguments"
    }) ? n ? a(p(e, l("apply"), !1, !0), [t, r[0].argument], !1) : f(o(e, l("apply")), [t, r[0].argument]) : n ? a(p(e, l("call"), !1, !0), [t, ...r], !1) : f(o(e, l("call")), [t, ...r]);
  }
});
var P = C(m()),
    z = !0,
    {
  default: _,
  ...S
} = P,
    A = _ !== void 0 ? _ : S;
export { z as __esModule, A as default };