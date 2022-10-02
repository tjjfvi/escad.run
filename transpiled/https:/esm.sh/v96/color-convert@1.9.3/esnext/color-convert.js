/* esm.sh - esbuild bundle(color-convert@1.9.3) esnext production */
import __color_name$ from "/transpiled/https://esm.sh/v96/color-name@1.1.3/esnext/color-name.js";
var E = Object.create;
var x = Object.defineProperty;
var S = Object.getOwnPropertyDescriptor;
var I = Object.getOwnPropertyNames;
var K = Object.getPrototypeOf,
    A = Object.prototype.hasOwnProperty;

var D = (r => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(r, {
  get: (a, e) => (typeof require < "u" ? require : a)[e]
}) : r)(function (r) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + r + '" is not supported');
});

var w = (r, a) => () => (a || r((a = {
  exports: {}
}).exports, a), a.exports);

var R = (r, a, e, n) => {
  if (a && typeof a == "object" || typeof a == "function") for (let t of I(a)) !A.call(r, t) && t !== e && x(r, t, {
    get: () => a[t],
    enumerable: !(n = S(a, t)) || n.enumerable
  });
  return r;
};

var U = (r, a, e) => (e = r != null ? E(K(r)) : {}, R(a || !r || !r.__esModule ? x(e, "default", {
  value: r,
  enumerable: !0
}) : e, r));

var y = w((Z, O) => {
  var b = __color_name$,
      F = {};

  for (g in b) b.hasOwnProperty(g) && (F[b[g]] = g);

  var g,
      s = O.exports = {
    rgb: {
      channels: 3,
      labels: "rgb"
    },
    hsl: {
      channels: 3,
      labels: "hsl"
    },
    hsv: {
      channels: 3,
      labels: "hsv"
    },
    hwb: {
      channels: 3,
      labels: "hwb"
    },
    cmyk: {
      channels: 4,
      labels: "cmyk"
    },
    xyz: {
      channels: 3,
      labels: "xyz"
    },
    lab: {
      channels: 3,
      labels: "lab"
    },
    lch: {
      channels: 3,
      labels: "lch"
    },
    hex: {
      channels: 1,
      labels: ["hex"]
    },
    keyword: {
      channels: 1,
      labels: ["keyword"]
    },
    ansi16: {
      channels: 1,
      labels: ["ansi16"]
    },
    ansi256: {
      channels: 1,
      labels: ["ansi256"]
    },
    hcg: {
      channels: 3,
      labels: ["h", "c", "g"]
    },
    apple: {
      channels: 3,
      labels: ["r16", "g16", "b16"]
    },
    gray: {
      channels: 1,
      labels: ["gray"]
    }
  };

  for (f in s) if (s.hasOwnProperty(f)) {
    if (!("channels" in s[f])) throw new Error("missing channels property: " + f);
    if (!("labels" in s[f])) throw new Error("missing channel labels property: " + f);
    if (s[f].labels.length !== s[f].channels) throw new Error("channel and label counts mismatch: " + f);
    d = s[f].channels, k = s[f].labels, delete s[f].channels, delete s[f].labels, Object.defineProperty(s[f], "channels", {
      value: d
    }), Object.defineProperty(s[f], "labels", {
      value: k
    });
  }

  var d, k, f;

  s.rgb.hsl = function (r) {
    var a = r[0] / 255,
        e = r[1] / 255,
        n = r[2] / 255,
        t = Math.min(a, e, n),
        v = Math.max(a, e, n),
        i = v - t,
        u,
        c,
        h;
    return v === t ? u = 0 : a === v ? u = (e - n) / i : e === v ? u = 2 + (n - a) / i : n === v && (u = 4 + (a - e) / i), u = Math.min(u * 60, 360), u < 0 && (u += 360), h = (t + v) / 2, v === t ? c = 0 : h <= .5 ? c = i / (v + t) : c = i / (2 - v - t), [u, c * 100, h * 100];
  };

  s.rgb.hsv = function (r) {
    var a,
        e,
        n,
        t,
        v,
        i = r[0] / 255,
        u = r[1] / 255,
        c = r[2] / 255,
        h = Math.max(i, u, c),
        o = h - Math.min(i, u, c),
        l = function (C) {
      return (h - C) / 6 / o + 1 / 2;
    };

    return o === 0 ? t = v = 0 : (v = o / h, a = l(i), e = l(u), n = l(c), i === h ? t = n - e : u === h ? t = 1 / 3 + a - n : c === h && (t = 2 / 3 + e - a), t < 0 ? t += 1 : t > 1 && (t -= 1)), [t * 360, v * 100, h * 100];
  };

  s.rgb.hwb = function (r) {
    var a = r[0],
        e = r[1],
        n = r[2],
        t = s.rgb.hsl(r)[0],
        v = 1 / 255 * Math.min(a, Math.min(e, n));
    return n = 1 - 1 / 255 * Math.max(a, Math.max(e, n)), [t, v * 100, n * 100];
  };

  s.rgb.cmyk = function (r) {
    var a = r[0] / 255,
        e = r[1] / 255,
        n = r[2] / 255,
        t,
        v,
        i,
        u;
    return u = Math.min(1 - a, 1 - e, 1 - n), t = (1 - a - u) / (1 - u) || 0, v = (1 - e - u) / (1 - u) || 0, i = (1 - n - u) / (1 - u) || 0, [t * 100, v * 100, i * 100, u * 100];
  };

  function B(r, a) {
    return Math.pow(r[0] - a[0], 2) + Math.pow(r[1] - a[1], 2) + Math.pow(r[2] - a[2], 2);
  }

  s.rgb.keyword = function (r) {
    var a = F[r];
    if (a) return a;
    var e = 1 / 0,
        n;

    for (var t in b) if (b.hasOwnProperty(t)) {
      var v = b[t],
          i = B(r, v);
      i < e && (e = i, n = t);
    }

    return n;
  };

  s.keyword.rgb = function (r) {
    return b[r];
  };

  s.rgb.xyz = function (r) {
    var a = r[0] / 255,
        e = r[1] / 255,
        n = r[2] / 255;
    a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92, e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92;
    var t = a * .4124 + e * .3576 + n * .1805,
        v = a * .2126 + e * .7152 + n * .0722,
        i = a * .0193 + e * .1192 + n * .9505;
    return [t * 100, v * 100, i * 100];
  };

  s.rgb.lab = function (r) {
    var a = s.rgb.xyz(r),
        e = a[0],
        n = a[1],
        t = a[2],
        v,
        i,
        u;
    return e /= 95.047, n /= 100, t /= 108.883, e = e > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, t = t > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, v = 116 * n - 16, i = 500 * (e - n), u = 200 * (n - t), [v, i, u];
  };

  s.hsl.rgb = function (r) {
    var a = r[0] / 360,
        e = r[1] / 100,
        n = r[2] / 100,
        t,
        v,
        i,
        u,
        c;
    if (e === 0) return c = n * 255, [c, c, c];
    n < .5 ? v = n * (1 + e) : v = n + e - n * e, t = 2 * n - v, u = [0, 0, 0];

    for (var h = 0; h < 3; h++) i = a + 1 / 3 * -(h - 1), i < 0 && i++, i > 1 && i--, 6 * i < 1 ? c = t + (v - t) * 6 * i : 2 * i < 1 ? c = v : 3 * i < 2 ? c = t + (v - t) * (2 / 3 - i) * 6 : c = t, u[h] = c * 255;

    return u;
  };

  s.hsl.hsv = function (r) {
    var a = r[0],
        e = r[1] / 100,
        n = r[2] / 100,
        t = e,
        v = Math.max(n, .01),
        i,
        u;
    return n *= 2, e *= n <= 1 ? n : 2 - n, t *= v <= 1 ? v : 2 - v, u = (n + e) / 2, i = n === 0 ? 2 * t / (v + t) : 2 * e / (n + e), [a, i * 100, u * 100];
  };

  s.hsv.rgb = function (r) {
    var a = r[0] / 60,
        e = r[1] / 100,
        n = r[2] / 100,
        t = Math.floor(a) % 6,
        v = a - Math.floor(a),
        i = 255 * n * (1 - e),
        u = 255 * n * (1 - e * v),
        c = 255 * n * (1 - e * (1 - v));

    switch (n *= 255, t) {
      case 0:
        return [n, c, i];

      case 1:
        return [u, n, i];

      case 2:
        return [i, n, c];

      case 3:
        return [i, u, n];

      case 4:
        return [c, i, n];

      case 5:
        return [n, i, u];
    }
  };

  s.hsv.hsl = function (r) {
    var a = r[0],
        e = r[1] / 100,
        n = r[2] / 100,
        t = Math.max(n, .01),
        v,
        i,
        u;
    return u = (2 - e) * n, v = (2 - e) * t, i = e * t, i /= v <= 1 ? v : 2 - v, i = i || 0, u /= 2, [a, i * 100, u * 100];
  };

  s.hwb.rgb = function (r) {
    var a = r[0] / 360,
        e = r[1] / 100,
        n = r[2] / 100,
        t = e + n,
        v,
        i,
        u,
        c;
    t > 1 && (e /= t, n /= t), v = Math.floor(6 * a), i = 1 - n, u = 6 * a - v, (v & 1) !== 0 && (u = 1 - u), c = e + u * (i - e);
    var h, o, l;

    switch (v) {
      default:
      case 6:
      case 0:
        h = i, o = c, l = e;
        break;

      case 1:
        h = c, o = i, l = e;
        break;

      case 2:
        h = e, o = i, l = c;
        break;

      case 3:
        h = e, o = c, l = i;
        break;

      case 4:
        h = c, o = e, l = i;
        break;

      case 5:
        h = i, o = e, l = c;
        break;
    }

    return [h * 255, o * 255, l * 255];
  };

  s.cmyk.rgb = function (r) {
    var a = r[0] / 100,
        e = r[1] / 100,
        n = r[2] / 100,
        t = r[3] / 100,
        v,
        i,
        u;
    return v = 1 - Math.min(1, a * (1 - t) + t), i = 1 - Math.min(1, e * (1 - t) + t), u = 1 - Math.min(1, n * (1 - t) + t), [v * 255, i * 255, u * 255];
  };

  s.xyz.rgb = function (r) {
    var a = r[0] / 100,
        e = r[1] / 100,
        n = r[2] / 100,
        t,
        v,
        i;
    return t = a * 3.2406 + e * -1.5372 + n * -.4986, v = a * -.9689 + e * 1.8758 + n * .0415, i = a * .0557 + e * -.204 + n * 1.057, t = t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t * 12.92, v = v > .0031308 ? 1.055 * Math.pow(v, 1 / 2.4) - .055 : v * 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i * 12.92, t = Math.min(Math.max(0, t), 1), v = Math.min(Math.max(0, v), 1), i = Math.min(Math.max(0, i), 1), [t * 255, v * 255, i * 255];
  };

  s.xyz.lab = function (r) {
    var a = r[0],
        e = r[1],
        n = r[2],
        t,
        v,
        i;
    return a /= 95.047, e /= 100, n /= 108.883, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, e = e > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, t = 116 * e - 16, v = 500 * (a - e), i = 200 * (e - n), [t, v, i];
  };

  s.lab.xyz = function (r) {
    var a = r[0],
        e = r[1],
        n = r[2],
        t,
        v,
        i;
    v = (a + 16) / 116, t = e / 500 + v, i = v - n / 200;
    var u = Math.pow(v, 3),
        c = Math.pow(t, 3),
        h = Math.pow(i, 3);
    return v = u > .008856 ? u : (v - 16 / 116) / 7.787, t = c > .008856 ? c : (t - 16 / 116) / 7.787, i = h > .008856 ? h : (i - 16 / 116) / 7.787, t *= 95.047, v *= 100, i *= 108.883, [t, v, i];
  };

  s.lab.lch = function (r) {
    var a = r[0],
        e = r[1],
        n = r[2],
        t,
        v,
        i;
    return t = Math.atan2(n, e), v = t * 360 / 2 / Math.PI, v < 0 && (v += 360), i = Math.sqrt(e * e + n * n), [a, i, v];
  };

  s.lch.lab = function (r) {
    var a = r[0],
        e = r[1],
        n = r[2],
        t,
        v,
        i;
    return i = n / 360 * 2 * Math.PI, t = e * Math.cos(i), v = e * Math.sin(i), [a, t, v];
  };

  s.rgb.ansi16 = function (r) {
    var a = r[0],
        e = r[1],
        n = r[2],
        t = 1 in arguments ? arguments[1] : s.rgb.hsv(r)[2];
    if (t = Math.round(t / 50), t === 0) return 30;
    var v = 30 + (Math.round(n / 255) << 2 | Math.round(e / 255) << 1 | Math.round(a / 255));
    return t === 2 && (v += 60), v;
  };

  s.hsv.ansi16 = function (r) {
    return s.rgb.ansi16(s.hsv.rgb(r), r[2]);
  };

  s.rgb.ansi256 = function (r) {
    var a = r[0],
        e = r[1],
        n = r[2];
    if (a === e && e === n) return a < 8 ? 16 : a > 248 ? 231 : Math.round((a - 8) / 247 * 24) + 232;
    var t = 16 + 36 * Math.round(a / 255 * 5) + 6 * Math.round(e / 255 * 5) + Math.round(n / 255 * 5);
    return t;
  };

  s.ansi16.rgb = function (r) {
    var a = r % 10;
    if (a === 0 || a === 7) return r > 50 && (a += 3.5), a = a / 10.5 * 255, [a, a, a];
    var e = (~~(r > 50) + 1) * .5,
        n = (a & 1) * e * 255,
        t = (a >> 1 & 1) * e * 255,
        v = (a >> 2 & 1) * e * 255;
    return [n, t, v];
  };

  s.ansi256.rgb = function (r) {
    if (r >= 232) {
      var a = (r - 232) * 10 + 8;
      return [a, a, a];
    }

    r -= 16;
    var e,
        n = Math.floor(r / 36) / 5 * 255,
        t = Math.floor((e = r % 36) / 6) / 5 * 255,
        v = e % 6 / 5 * 255;
    return [n, t, v];
  };

  s.rgb.hex = function (r) {
    var a = ((Math.round(r[0]) & 255) << 16) + ((Math.round(r[1]) & 255) << 8) + (Math.round(r[2]) & 255),
        e = a.toString(16).toUpperCase();
    return "000000".substring(e.length) + e;
  };

  s.hex.rgb = function (r) {
    var a = r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!a) return [0, 0, 0];
    var e = a[0];
    a[0].length === 3 && (e = e.split("").map(function (u) {
      return u + u;
    }).join(""));
    var n = parseInt(e, 16),
        t = n >> 16 & 255,
        v = n >> 8 & 255,
        i = n & 255;
    return [t, v, i];
  };

  s.rgb.hcg = function (r) {
    var a = r[0] / 255,
        e = r[1] / 255,
        n = r[2] / 255,
        t = Math.max(Math.max(a, e), n),
        v = Math.min(Math.min(a, e), n),
        i = t - v,
        u,
        c;
    return i < 1 ? u = v / (1 - i) : u = 0, i <= 0 ? c = 0 : t === a ? c = (e - n) / i % 6 : t === e ? c = 2 + (n - a) / i : c = 4 + (a - e) / i + 4, c /= 6, c %= 1, [c * 360, i * 100, u * 100];
  };

  s.hsl.hcg = function (r) {
    var a = r[1] / 100,
        e = r[2] / 100,
        n = 1,
        t = 0;
    return e < .5 ? n = 2 * a * e : n = 2 * a * (1 - e), n < 1 && (t = (e - .5 * n) / (1 - n)), [r[0], n * 100, t * 100];
  };

  s.hsv.hcg = function (r) {
    var a = r[1] / 100,
        e = r[2] / 100,
        n = a * e,
        t = 0;
    return n < 1 && (t = (e - n) / (1 - n)), [r[0], n * 100, t * 100];
  };

  s.hcg.rgb = function (r) {
    var a = r[0] / 360,
        e = r[1] / 100,
        n = r[2] / 100;
    if (e === 0) return [n * 255, n * 255, n * 255];
    var t = [0, 0, 0],
        v = a % 1 * 6,
        i = v % 1,
        u = 1 - i,
        c = 0;

    switch (Math.floor(v)) {
      case 0:
        t[0] = 1, t[1] = i, t[2] = 0;
        break;

      case 1:
        t[0] = u, t[1] = 1, t[2] = 0;
        break;

      case 2:
        t[0] = 0, t[1] = 1, t[2] = i;
        break;

      case 3:
        t[0] = 0, t[1] = u, t[2] = 1;
        break;

      case 4:
        t[0] = i, t[1] = 0, t[2] = 1;
        break;

      default:
        t[0] = 1, t[1] = 0, t[2] = u;
    }

    return c = (1 - e) * n, [(e * t[0] + c) * 255, (e * t[1] + c) * 255, (e * t[2] + c) * 255];
  };

  s.hcg.hsv = function (r) {
    var a = r[1] / 100,
        e = r[2] / 100,
        n = a + e * (1 - a),
        t = 0;
    return n > 0 && (t = a / n), [r[0], t * 100, n * 100];
  };

  s.hcg.hsl = function (r) {
    var a = r[1] / 100,
        e = r[2] / 100,
        n = e * (1 - a) + .5 * a,
        t = 0;
    return n > 0 && n < .5 ? t = a / (2 * n) : n >= .5 && n < 1 && (t = a / (2 * (1 - n))), [r[0], t * 100, n * 100];
  };

  s.hcg.hwb = function (r) {
    var a = r[1] / 100,
        e = r[2] / 100,
        n = a + e * (1 - a);
    return [r[0], (n - a) * 100, (1 - n) * 100];
  };

  s.hwb.hcg = function (r) {
    var a = r[1] / 100,
        e = r[2] / 100,
        n = 1 - e,
        t = n - a,
        v = 0;
    return t < 1 && (v = (n - t) / (1 - t)), [r[0], t * 100, v * 100];
  };

  s.apple.rgb = function (r) {
    return [r[0] / 65535 * 255, r[1] / 65535 * 255, r[2] / 65535 * 255];
  };

  s.rgb.apple = function (r) {
    return [r[0] / 255 * 65535, r[1] / 255 * 65535, r[2] / 255 * 65535];
  };

  s.gray.rgb = function (r) {
    return [r[0] / 100 * 255, r[0] / 100 * 255, r[0] / 100 * 255];
  };

  s.gray.hsl = s.gray.hsv = function (r) {
    return [0, 0, r[0]];
  };

  s.gray.hwb = function (r) {
    return [0, 100, r[0]];
  };

  s.gray.cmyk = function (r) {
    return [0, 0, 0, r[0]];
  };

  s.gray.lab = function (r) {
    return [r[0], 0, 0];
  };

  s.gray.hex = function (r) {
    var a = Math.round(r[0] / 100 * 255) & 255,
        e = (a << 16) + (a << 8) + a,
        n = e.toString(16).toUpperCase();
    return "000000".substring(n.length) + n;
  };

  s.rgb.gray = function (r) {
    var a = (r[0] + r[1] + r[2]) / 3;
    return [a / 255 * 100];
  };
});
var j = w(($, z) => {
  var M = y();

  function G() {
    for (var r = {}, a = Object.keys(M), e = a.length, n = 0; n < e; n++) r[a[n]] = {
      distance: -1,
      parent: null
    };

    return r;
  }

  function H(r) {
    var a = G(),
        e = [r];

    for (a[r].distance = 0; e.length;) for (var n = e.pop(), t = Object.keys(M[n]), v = t.length, i = 0; i < v; i++) {
      var u = t[i],
          c = a[u];
      c.distance === -1 && (c.distance = a[n].distance + 1, c.parent = n, e.unshift(u));
    }

    return a;
  }

  function J(r, a) {
    return function (e) {
      return a(r(e));
    };
  }

  function L(r, a) {
    for (var e = [a[r].parent, r], n = M[a[r].parent][r], t = a[r].parent; a[t].parent;) e.unshift(a[t].parent), n = J(M[a[t].parent][t], n), t = a[t].parent;

    return n.conversion = e, n;
  }

  z.exports = function (r) {
    for (var a = H(r), e = {}, n = Object.keys(a), t = n.length, v = 0; v < t; v++) {
      var i = n[v],
          u = a[i];
      u.parent !== null && (e[i] = L(i, a));
    }

    return e;
  };
});
var q = w((rr, P) => {
  var m = y(),
      N = j(),
      p = {},
      Q = Object.keys(m);

  function T(r) {
    var a = function (e) {
      return e == null ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), r(e));
    };

    return "conversion" in r && (a.conversion = r.conversion), a;
  }

  function V(r) {
    var a = function (e) {
      if (e == null) return e;
      arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
      var n = r(e);
      if (typeof n == "object") for (var t = n.length, v = 0; v < t; v++) n[v] = Math.round(n[v]);
      return n;
    };

    return "conversion" in r && (a.conversion = r.conversion), a;
  }

  Q.forEach(function (r) {
    p[r] = {}, Object.defineProperty(p[r], "channels", {
      value: m[r].channels
    }), Object.defineProperty(p[r], "labels", {
      value: m[r].labels
    });
    var a = N(r),
        e = Object.keys(a);
    e.forEach(function (n) {
      var t = a[n];
      p[r][n] = V(t), p[r][n].raw = T(t);
    });
  });
  P.exports = p;
});
var W = U(q()),
    {
  default: _,
  ...X
} = W,
    ar = _ !== void 0 ? _ : X;
export { ar as default };