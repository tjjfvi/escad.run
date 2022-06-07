/* esm.sh - esbuild bundle(@jridgewell/sourcemap-codec@1.4.13) esnext production */
import { Buffer as __Buffer$ } from "/transpiled/https://esm.sh/v85/node_buffer.js";
var I = Object.defineProperty;

var s = (t, e) => I(t, "name", {
  value: e,
  configurable: !0
});

var w = ",".charCodeAt(0),
    T = ";".charCodeAt(0),
    A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    x = new Uint8Array(64),
    b = new Uint8Array(128);

for (let t = 0; t < A.length; t++) {
  let e = A.charCodeAt(t);
  x[t] = e, b[e] = t;
}

var g = typeof TextDecoder < "u" ? new TextDecoder() : typeof __Buffer$ < "u" ? {
  decode(t) {
    return __Buffer$.from(t.buffer, t.byteOffset, t.byteLength).toString();
  }

} : {
  decode(t) {
    let e = "";

    for (let c = 0; c < t.length; c++) e += String.fromCharCode(t[c]);

    return e;
  }

};

function D(t) {
  let e = new Int32Array(5),
      c = [],
      f = 0;

  do {
    let o = L(t, f),
        l = [],
        n = !0,
        i = 0;
    e[0] = 0;

    for (let r = f; r < o; r++) {
      let u;
      r = a(t, r, e, 0);
      let d = e[0];
      d < i && (n = !1), i = d, C(t, r, o) ? (r = a(t, r, e, 1), r = a(t, r, e, 2), r = a(t, r, e, 3), C(t, r, o) ? (r = a(t, r, e, 4), u = [d, e[1], e[2], e[3], e[4]]) : u = [d, e[1], e[2], e[3]]) : u = [d], l.push(u);
    }

    n || O(l), c.push(l), f = o + 1;
  } while (f <= t.length);

  return c;
}

s(D, "decode");

function L(t, e) {
  let c = t.indexOf(";", e);
  return c === -1 ? t.length : c;
}

s(L, "indexOf");

function a(t, e, c, f) {
  let o = 0,
      l = 0,
      n = 0;

  do {
    let r = t.charCodeAt(e++);
    n = b[r], o |= (n & 31) << l, l += 5;
  } while (n & 32);

  let i = o & 1;
  return o >>>= 1, i && (o = -2147483648 | -o), c[f] += o, e;
}

s(a, "decodeInteger");

function C(t, e, c) {
  return e >= c ? !1 : t.charCodeAt(e) !== w;
}

s(C, "hasMoreVlq");

function O(t) {
  t.sort(U);
}

s(O, "sort");

function U(t, e) {
  return t[0] - e[0];
}

s(U, "sortComparator");

function S(t) {
  let e = new Int32Array(5),
      c = 1024 * 16,
      f = c - 36,
      o = new Uint8Array(c),
      l = o.subarray(0, f),
      n = 0,
      i = "";

  for (let r = 0; r < t.length; r++) {
    let u = t[r];

    if (r > 0 && (n === c && (i += g.decode(o), n = 0), o[n++] = T), u.length !== 0) {
      e[0] = 0;

      for (let d = 0; d < u.length; d++) {
        let h = u[d];
        n > f && (i += g.decode(l), o.copyWithin(0, f, n), n -= f), d > 0 && (o[n++] = w), n = y(o, n, e, h, 0), h.length !== 1 && (n = y(o, n, e, h, 1), n = y(o, n, e, h, 2), n = y(o, n, e, h, 3), h.length !== 4 && (n = y(o, n, e, h, 4)));
      }
    }
  }

  return i + g.decode(o.subarray(0, n));
}

s(S, "encode");

function y(t, e, c, f, o) {
  let l = f[o],
      n = l - c[o];
  c[o] = l, n = n < 0 ? -n << 1 | 1 : n << 1;

  do {
    let i = n & 31;
    n >>>= 5, n > 0 && (i |= 32), t[e++] = x[i];
  } while (n > 0);

  return e;
}

s(y, "encodeInteger");
export { D as decode, S as encode };