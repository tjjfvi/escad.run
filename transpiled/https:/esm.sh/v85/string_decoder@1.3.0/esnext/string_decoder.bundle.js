/* esm.sh - esbuild bundle(string_decoder@1.3.0) esnext production */
import __buffer$ from "/transpiled/https://esm.sh/v85/node_buffer.js";
var T = Object.create;
var u = Object.defineProperty;
var E = Object.getOwnPropertyDescriptor;
var B = Object.getOwnPropertyNames;
var k = Object.getPrototypeOf,
    L = Object.prototype.hasOwnProperty;

var i = (t, e) => u(t, "name", {
  value: e,
  configurable: !0
}),
    U = (t => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(t, {
  get: (e, r) => (typeof require != "undefined" ? require : e)[r]
}) : t)(function (t) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});

var p = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);

var A = (t, e, r, s) => {
  if (e && typeof e == "object" || typeof e == "function") for (let n of B(e)) !L.call(t, n) && n !== r && u(t, n, {
    get: () => e[n],
    enumerable: !(s = E(e, n)) || s.enumerable
  });
  return t;
};

var N = (t, e, r) => (r = t != null ? T(k(t)) : {}, A(e || !t || !t.__esModule ? u(r, "default", {
  value: t,
  enumerable: !0
}) : r, t));

var x = p((f, w) => {
  var o = __buffer$,
      a = o.Buffer;

  function m(t, e) {
    for (var r in t) e[r] = t[r];
  }

  i(m, "copyProps");
  a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? w.exports = o : (m(o, f), f.Buffer = l);

  function l(t, e, r) {
    return a(t, e, r);
  }

  i(l, "SafeBuffer");
  l.prototype = Object.create(a.prototype);
  m(a, l);

  l.from = function (t, e, r) {
    if (typeof t == "number") throw new TypeError("Argument must not be a number");
    return a(t, e, r);
  };

  l.alloc = function (t, e, r) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    var s = a(t);
    return e !== void 0 ? typeof r == "string" ? s.fill(e, r) : s.fill(e) : s.fill(0), s;
  };

  l.allocUnsafe = function (t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return a(t);
  };

  l.allocUnsafeSlow = function (t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return o.SlowBuffer(t);
  };
});
var g = p(v => {
  "use strict";

  var d = x().Buffer,
      C = d.isEncoding || function (t) {
    switch (t = "" + t, t && t.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;

      default:
        return !1;
    }
  };

  function D(t) {
    if (!t) return "utf8";

    for (var e;;) switch (t) {
      case "utf8":
      case "utf-8":
        return "utf8";

      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return "utf16le";

      case "latin1":
      case "binary":
        return "latin1";

      case "base64":
      case "ascii":
      case "hex":
        return t;

      default:
        if (e) return;
        t = ("" + t).toLowerCase(), e = !0;
    }
  }

  i(D, "_normalizeEncoding");

  function F(t) {
    var e = D(t);
    if (typeof e != "string" && (d.isEncoding === C || !C(t))) throw new Error("Unknown encoding: " + t);
    return e || t;
  }

  i(F, "normalizeEncoding");
  v.StringDecoder = h;

  function h(t) {
    this.encoding = F(t);
    var e;

    switch (this.encoding) {
      case "utf16le":
        this.text = P, this.end = W, e = 4;
        break;

      case "utf8":
        this.fillLast = q, e = 4;
        break;

      case "base64":
        this.text = _, this.end = G, e = 3;
        break;

      default:
        this.write = H, this.end = J;
        return;
    }

    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = d.allocUnsafe(e);
  }

  i(h, "StringDecoder");

  h.prototype.write = function (t) {
    if (t.length === 0) return "";
    var e, r;

    if (this.lastNeed) {
      if (e = this.fillLast(t), e === void 0) return "";
      r = this.lastNeed, this.lastNeed = 0;
    } else r = 0;

    return r < t.length ? e ? e + this.text(t, r) : this.text(t, r) : e || "";
  };

  h.prototype.end = O;
  h.prototype.text = I;

  h.prototype.fillLast = function (t) {
    if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length;
  };

  function c(t) {
    return t <= 127 ? 0 : t >> 5 === 6 ? 2 : t >> 4 === 14 ? 3 : t >> 3 === 30 ? 4 : t >> 6 === 2 ? -1 : -2;
  }

  i(c, "utf8CheckByte");

  function $(t, e, r) {
    var s = e.length - 1;
    if (s < r) return 0;
    var n = c(e[s]);
    return n >= 0 ? (n > 0 && (t.lastNeed = n - 1), n) : --s < r || n === -2 ? 0 : (n = c(e[s]), n >= 0 ? (n > 0 && (t.lastNeed = n - 2), n) : --s < r || n === -2 ? 0 : (n = c(e[s]), n >= 0 ? (n > 0 && (n === 2 ? n = 0 : t.lastNeed = n - 3), n) : 0));
  }

  i($, "utf8CheckIncomplete");

  function j(t, e, r) {
    if ((e[0] & 192) !== 128) return t.lastNeed = 0, "\uFFFD";

    if (t.lastNeed > 1 && e.length > 1) {
      if ((e[1] & 192) !== 128) return t.lastNeed = 1, "\uFFFD";
      if (t.lastNeed > 2 && e.length > 2 && (e[2] & 192) !== 128) return t.lastNeed = 2, "\uFFFD";
    }
  }

  i(j, "utf8CheckExtraBytes");

  function q(t) {
    var e = this.lastTotal - this.lastNeed,
        r = j(this, t, e);
    if (r !== void 0) return r;
    if (this.lastNeed <= t.length) return t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    t.copy(this.lastChar, e, 0, t.length), this.lastNeed -= t.length;
  }

  i(q, "utf8FillLast");

  function I(t, e) {
    var r = $(this, t, e);
    if (!this.lastNeed) return t.toString("utf8", e);
    this.lastTotal = r;
    var s = t.length - (r - this.lastNeed);
    return t.copy(this.lastChar, 0, s), t.toString("utf8", e, s);
  }

  i(I, "utf8Text");

  function O(t) {
    var e = t && t.length ? this.write(t) : "";
    return this.lastNeed ? e + "\uFFFD" : e;
  }

  i(O, "utf8End");

  function P(t, e) {
    if ((t.length - e) % 2 === 0) {
      var r = t.toString("utf16le", e);

      if (r) {
        var s = r.charCodeAt(r.length - 1);
        if (s >= 55296 && s <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], r.slice(0, -1);
      }

      return r;
    }

    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1);
  }

  i(P, "utf16Text");

  function W(t) {
    var e = t && t.length ? this.write(t) : "";

    if (this.lastNeed) {
      var r = this.lastTotal - this.lastNeed;
      return e + this.lastChar.toString("utf16le", 0, r);
    }

    return e;
  }

  i(W, "utf16End");

  function _(t, e) {
    var r = (t.length - e) % 3;
    return r === 0 ? t.toString("base64", e) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - r));
  }

  i(_, "base64Text");

  function G(t) {
    var e = t && t.length ? this.write(t) : "";
    return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
  }

  i(G, "base64End");

  function H(t) {
    return t.toString(this.encoding);
  }

  i(H, "simpleWrite");

  function J(t) {
    return t && t.length ? this.write(t) : "";
  }

  i(J, "simpleEnd");
});
var y = N(g()),
    S = N(g()),
    {
  StringDecoder: V
} = S,
    {
  default: K,
  ...M
} = S,
    X = y.default ?? K ?? M;
export { V as StringDecoder, X as default };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */