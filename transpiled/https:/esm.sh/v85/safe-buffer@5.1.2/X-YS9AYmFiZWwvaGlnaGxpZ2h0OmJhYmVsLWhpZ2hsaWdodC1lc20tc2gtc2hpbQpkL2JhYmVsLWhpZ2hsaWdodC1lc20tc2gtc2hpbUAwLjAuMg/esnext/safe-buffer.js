/* esm.sh - esbuild bundle(safe-buffer@5.1.2) esnext production */
import __buffer$ from "/transpiled/https://esm.sh/v85/node_buffer.js";
var B = Object.create;
var l = Object.defineProperty;
var S = Object.getOwnPropertyDescriptor;
var d = Object.getOwnPropertyNames;
var g = Object.getPrototypeOf,
    h = Object.prototype.hasOwnProperty;

var m = (e, r) => l(e, "name", {
  value: r,
  configurable: !0
}),
    E = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (r, f) => (typeof require != "undefined" ? require : r)[f]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var T = (e, r) => () => (r || e((r = {
  exports: {}
}).exports, r), r.exports);

var v = (e, r, f, t) => {
  if (r && typeof r == "object" || typeof r == "function") for (let u of d(r)) !h.call(e, u) && u !== f && l(e, u, {
    get: () => r[u],
    enumerable: !(t = S(r, u)) || t.enumerable
  });
  return e;
};

var i = (e, r, f) => (f = e != null ? B(g(e)) : {}, v(r || !e || !e.__esModule ? l(f, "default", {
  value: e,
  enumerable: !0
}) : f, e));

var s = T((b, p) => {
  var a = __buffer$,
      o = a.Buffer;

  function c(e, r) {
    for (var f in e) r[f] = e[f];
  }

  m(c, "copyProps");
  o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? p.exports = a : (c(a, b), b.Buffer = n);

  function n(e, r, f) {
    return o(e, r, f);
  }

  m(n, "SafeBuffer");
  c(o, n);

  n.from = function (e, r, f) {
    if (typeof e == "number") throw new TypeError("Argument must not be a number");
    return o(e, r, f);
  };

  n.alloc = function (e, r, f) {
    if (typeof e != "number") throw new TypeError("Argument must be a number");
    var t = o(e);
    return r !== void 0 ? typeof f == "string" ? t.fill(r, f) : t.fill(r) : t.fill(0), t;
  };

  n.allocUnsafe = function (e) {
    if (typeof e != "number") throw new TypeError("Argument must be a number");
    return o(e);
  };

  n.allocUnsafeSlow = function (e) {
    if (typeof e != "number") throw new TypeError("Argument must be a number");
    return a.SlowBuffer(e);
  };
});
var w = i(s()),
    y = i(s()),
    {
  Blob: $,
  resolveObjectURL: L,
  Buffer: M,
  SlowBuffer: P,
  transcode: _,
  kMaxLength: j,
  kStringMaxLength: k,
  btoa: q,
  atob: C,
  constants: I,
  INSPECT_MAX_BYTES: N
} = y,
    {
  default: x,
  ...A
} = y,
    O = w.default ?? x ?? A;
export { $ as Blob, M as Buffer, N as INSPECT_MAX_BYTES, P as SlowBuffer, C as atob, q as btoa, I as constants, O as default, j as kMaxLength, k as kStringMaxLength, L as resolveObjectURL, _ as transcode };