/* esm.sh - esbuild bundle(@babel/helper-annotate-as-pure@7.18.6) esnext production */
import ___babel_types$ from "/transpiled/https://esm.sh/v96/@babel/types@7.19.3/esnext/types.js";
var a = Object.create;
var r = Object.defineProperty;
var c = Object.getOwnPropertyDescriptor;
var f = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf,
    i = Object.prototype.hasOwnProperty;

var P = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (t, _) => (typeof require < "u" ? require : t)[_]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var m = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var A = (e, t, _, u) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of f(t)) !i.call(e, o) && o !== _ && r(e, o, {
    get: () => t[o],
    enumerable: !(u = c(t, o)) || u.enumerable
  });
  return e;
};

var p = (e, t, _) => (_ = e != null ? a(l(e)) : {}, A(t || !e || !e.__esModule ? r(_, "default", {
  value: e,
  enumerable: !0
}) : _, e));

var s = m(n => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  n.default = x;

  var v = ___babel_types$,
      {
    addComment: E
  } = v,
      R = "#__PURE__",
      U = ({
    leadingComments: e
  }) => !!e && e.some(t => /[@#]__PURE__/.test(t.value));

  function x(e) {
    let t = e.node || e;
    U(t) || E(t, "leading", R);
  }
});
var M = p(s()),
    b = !0,
    {
  default: d,
  ...N
} = M,
    j = d !== void 0 ? d : N;
export { b as __esModule, j as default };