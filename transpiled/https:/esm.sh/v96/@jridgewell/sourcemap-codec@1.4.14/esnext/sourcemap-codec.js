/* esm.sh - esbuild bundle(@jridgewell/sourcemap-codec@1.4.14) esnext production */
import { Buffer as __Buffer$ } from "/transpiled/https://esm.sh/v96/node_buffer.js";
var C = ",".charCodeAt(0),
    b = ";".charCodeAt(0),
    g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    w = new Uint8Array(64),
    x = new Uint8Array(128);

for (let t = 0; t < g.length; t++) {
  let e = g.charCodeAt(t);
  w[t] = e, x[e] = t;
}

var y = typeof TextDecoder < "u" ? new TextDecoder() : typeof __Buffer$ < "u" ? {
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

function O(t) {
  let e = new Int32Array(5),
      c = [],
      f = 0;

  do {
    let o = I(t, f),
        l = [],
        n = !0,
        i = 0;
    e[0] = 0;

    for (let r = f; r < o; r++) {
      let s;
      r = h(t, r, e, 0);
      let d = e[0];
      d < i && (n = !1), i = d, A(t, r, o) ? (r = h(t, r, e, 1), r = h(t, r, e, 2), r = h(t, r, e, 3), A(t, r, o) ? (r = h(t, r, e, 4), s = [d, e[1], e[2], e[3], e[4]]) : s = [d, e[1], e[2], e[3]]) : s = [d], l.push(s);
    }

    n || T(l), c.push(l), f = o + 1;
  } while (f <= t.length);

  return c;
}

function I(t, e) {
  let c = t.indexOf(";", e);
  return c === -1 ? t.length : c;
}

function h(t, e, c, f) {
  let o = 0,
      l = 0,
      n = 0;

  do {
    let r = t.charCodeAt(e++);
    n = x[r], o |= (n & 31) << l, l += 5;
  } while (n & 32);

  let i = o & 1;
  return o >>>= 1, i && (o = -2147483648 | -o), c[f] += o, e;
}

function A(t, e, c) {
  return e >= c ? !1 : t.charCodeAt(e) !== C;
}

function T(t) {
  t.sort(L);
}

function L(t, e) {
  return t[0] - e[0];
}

function U(t) {
  let e = new Int32Array(5),
      c = 1024 * 16,
      f = c - 36,
      o = new Uint8Array(c),
      l = o.subarray(0, f),
      n = 0,
      i = "";

  for (let r = 0; r < t.length; r++) {
    let s = t[r];

    if (r > 0 && (n === c && (i += y.decode(o), n = 0), o[n++] = b), s.length !== 0) {
      e[0] = 0;

      for (let d = 0; d < s.length; d++) {
        let u = s[d];
        n > f && (i += y.decode(l), o.copyWithin(0, f, n), n -= f), d > 0 && (o[n++] = C), n = a(o, n, e, u, 0), u.length !== 1 && (n = a(o, n, e, u, 1), n = a(o, n, e, u, 2), n = a(o, n, e, u, 3), u.length !== 4 && (n = a(o, n, e, u, 4)));
      }
    }
  }

  return i + y.decode(o.subarray(0, n));
}

function a(t, e, c, f, o) {
  let l = f[o],
      n = l - c[o];
  c[o] = l, n = n < 0 ? -n << 1 | 1 : n << 1;

  do {
    let i = n & 31;
    n >>>= 5, n > 0 && (i |= 32), t[e++] = w[i];
  } while (n > 0);

  return e;
}

export { O as decode, U as encode };