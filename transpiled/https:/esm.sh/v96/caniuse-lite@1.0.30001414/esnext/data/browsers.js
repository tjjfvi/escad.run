/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001414/data/browsers) esnext production */
var t = Object.create;
var i = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf,
    b = Object.prototype.hasOwnProperty;

var c = (e, o) => () => (o || e((o = {
  exports: {}
}).exports, o), o.exports);

var l = (e, o, a, _) => {
  if (o && typeof o == "object" || typeof o == "function") for (let d of u(o)) !b.call(e, d) && d !== a && i(e, d, {
    get: () => o[d],
    enumerable: !(_ = m(o, d)) || _.enumerable
  });
  return e;
};

var x = (e, o, a) => (a = e != null ? t(p(e)) : {}, l(o || !e || !e.__esModule ? i(a, "default", {
  value: e,
  enumerable: !0
}) : a, e));

var f = c((q, r) => {
  r.exports = {
    A: "ie",
    B: "edge",
    C: "firefox",
    D: "chrome",
    E: "safari",
    F: "opera",
    G: "ios_saf",
    H: "op_mini",
    I: "android",
    J: "bb",
    K: "op_mob",
    L: "and_chr",
    M: "and_ff",
    N: "ie_mob",
    O: "and_uc",
    P: "samsung",
    Q: "and_qq",
    R: "baidu",
    S: "kaios"
  };
});
var s = x(f()),
    {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S
} = s,
    {
  default: n,
  ...g
} = s,
    k = n !== void 0 ? n : g;
export { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, k as default };