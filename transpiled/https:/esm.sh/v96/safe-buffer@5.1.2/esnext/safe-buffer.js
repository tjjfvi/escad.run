/* esm.sh - esbuild bundle(safe-buffer@5.1.2) esnext production */
import __buffer$ from "/transpiled/https://esm.sh/v96/node_buffer.js";
var w = Object.create;
var m = Object.defineProperty;
var y = Object.getOwnPropertyDescriptor;
var B = Object.getOwnPropertyNames;
var d = Object.getPrototypeOf,
    S = Object.prototype.hasOwnProperty;

var _ = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (r, f) => (typeof require < "u" ? require : r)[f]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var g = (e, r) => () => (r || e((r = {
  exports: {}
}).exports, r), r.exports);

var h = (e, r, f, t) => {
  if (r && typeof r == "object" || typeof r == "function") for (let u of B(r)) !S.call(e, u) && u !== f && m(e, u, {
    get: () => r[u],
    enumerable: !(t = y(r, u)) || t.enumerable
  });
  return e;
};

var E = (e, r, f) => (f = e != null ? w(d(e)) : {}, h(r || !e || !e.__esModule ? m(f, "default", {
  value: e,
  enumerable: !0
}) : f, e));

var i = g((l, s) => {
  var a = __buffer$,
      n = a.Buffer;

  function b(e, r) {
    for (var f in e) r[f] = e[f];
  }

  n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? s.exports = a : (b(a, l), l.Buffer = o);

  function o(e, r, f) {
    return n(e, r, f);
  }

  b(n, o);

  o.from = function (e, r, f) {
    if (typeof e == "number") throw new TypeError("Argument must not be a number");
    return n(e, r, f);
  };

  o.alloc = function (e, r, f) {
    if (typeof e != "number") throw new TypeError("Argument must be a number");
    var t = n(e);
    return r !== void 0 ? typeof f == "string" ? t.fill(r, f) : t.fill(r) : t.fill(0), t;
  };

  o.allocUnsafe = function (e) {
    if (typeof e != "number") throw new TypeError("Argument must be a number");
    return n(e);
  };

  o.allocUnsafeSlow = function (e) {
    if (typeof e != "number") throw new TypeError("Argument must be a number");
    return a.SlowBuffer(e);
  };
});
var p = E(i()),
    {
  Blob: x,
  resolveObjectURL: A,
  Buffer: U,
  SlowBuffer: L,
  transcode: M,
  kMaxLength: P,
  kStringMaxLength: j,
  btoa: k,
  atob: q,
  constants: C,
  INSPECT_MAX_BYTES: I
} = p,
    {
  default: c,
  ...T
} = p,
    N = c !== void 0 ? c : T;
export { x as Blob, U as Buffer, I as INSPECT_MAX_BYTES, L as SlowBuffer, q as atob, k as btoa, C as constants, N as default, P as kMaxLength, j as kStringMaxLength, A as resolveObjectURL, M as transcode };