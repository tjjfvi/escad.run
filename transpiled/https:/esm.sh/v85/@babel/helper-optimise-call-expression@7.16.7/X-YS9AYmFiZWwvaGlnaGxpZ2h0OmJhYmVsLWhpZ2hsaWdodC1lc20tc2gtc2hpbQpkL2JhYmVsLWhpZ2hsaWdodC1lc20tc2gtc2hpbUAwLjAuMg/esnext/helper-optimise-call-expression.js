/* esm.sh - esbuild bundle(@babel/helper-optimise-call-expression@7.16.7) esnext production */
import ___babel_types$ from "/transpiled/https://esm.sh/v85/@babel/types@7.18.4/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/types.js";
var _ = Object.create;
var i = Object.defineProperty;
var $ = Object.getOwnPropertyDescriptor;
var b = Object.getOwnPropertyNames;
var y = Object.getPrototypeOf,
    M = Object.prototype.hasOwnProperty;

var f = (e, r) => i(e, "name", {
  value: r,
  configurable: !0
}),
    v = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (r, t) => (typeof require != "undefined" ? require : r)[t]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var C = (e, r) => () => (r || e((r = {
  exports: {}
}).exports, r), r.exports);

var j = (e, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function") for (let l of b(r)) !M.call(e, l) && l !== t && i(e, l, {
    get: () => r[l],
    enumerable: !(n = $(r, l)) || n.enumerable
  });
  return e;
};

var p = (e, r, t) => (t = e != null ? _(y(e)) : {}, j(r || !e || !e.__esModule ? i(t, "default", {
  value: e,
  enumerable: !0
}) : t, e));

var s = C(o => {
  "use strict";

  Object.defineProperty(o, "__esModule", {
    value: !0
  });
  o.default = P;
  var q = ___babel_types$,
      {
    callExpression: a,
    identifier: u,
    isIdentifier: I,
    isSpreadElement: O,
    memberExpression: m,
    optionalCallExpression: d,
    optionalMemberExpression: x
  } = q;

  function P(e, r, t, n) {
    return t.length === 1 && O(t[0]) && I(t[0].argument, {
      name: "arguments"
    }) ? n ? d(x(e, u("apply"), !1, !0), [r, t[0].argument], !1) : a(m(e, u("apply")), [r, t[0].argument]) : n ? d(x(e, u("call"), !1, !0), [r, ...t], !1) : a(m(e, u("call")), [r, ...t]);
  }

  f(P, "optimiseCallExpression");
});
var c = p(s()),
    E = p(s()),
    {
  __esModule: A
} = E,
    {
  default: S,
  ...k
} = E,
    B = c.default ?? S ?? k;
export { A as __esModule, B as default };