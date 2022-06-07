/* esm.sh - esbuild bundle(@babel/helper-annotate-as-pure@7.16.7) esnext production */
import ___babel_types$ from "/transpiled/https://esm.sh/v85/@babel/types@7.18.4/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/types.js";
var l = Object.create;
var n = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var P = Object.getPrototypeOf,
    p = Object.prototype.hasOwnProperty;

var u = (e, t) => n(e, "name", {
  value: t,
  configurable: !0
}),
    A = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (t, o) => (typeof require != "undefined" ? require : t)[o]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var $ = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var v = (e, t, o, d) => {
  if (t && typeof t == "object" || typeof t == "function") for (let r of m(t)) !p.call(e, r) && r !== o && n(e, r, {
    get: () => t[r],
    enumerable: !(d = i(t, r)) || d.enumerable
  });
  return e;
};

var a = (e, t, o) => (o = e != null ? l(P(e)) : {}, v(t || !e || !e.__esModule ? n(o, "default", {
  value: e,
  enumerable: !0
}) : o, e));

var _ = $(s => {
  "use strict";

  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  s.default = M;
  var E = ___babel_types$,
      {
    addComment: R
  } = E,
      U = "#__PURE__",
      x = u(({
    leadingComments: e
  }) => !!e && e.some(t => /[@#]__PURE__/.test(t.value)), "isPureAnnotated");

  function M(e) {
    let t = e.node || e;
    x(t) || R(t, "leading", U);
  }

  u(M, "annotateAsPure");
});

var f = a(_()),
    c = a(_()),
    {
  __esModule: j
} = c,
    {
  default: N,
  ...O
} = c,
    q = f.default ?? N ?? O;
export { j as __esModule, q as default };