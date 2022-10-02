/* esm.sh - esbuild bundle(@babel/helper-string-parser@7.18.10) esnext production */
var O = Object.create;
var v = Object.defineProperty;
var q = Object.getOwnPropertyDescriptor;
var B = Object.getOwnPropertyNames;
var M = Object.getPrototypeOf,
    j = Object.prototype.hasOwnProperty;

var H = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);

var y = (t, e, n, l) => {
  if (e && typeof e == "object" || typeof e == "function") for (let c of B(e)) !j.call(t, c) && c !== n && v(t, c, {
    get: () => e[c],
    enumerable: !(l = q(e, c)) || l.enumerable
  });
  return t;
};

var z = (t, e, n) => (n = t != null ? O(M(t)) : {}, y(e || !t || !t.__esModule ? v(n, "default", {
  value: t,
  enumerable: !0
}) : n, t));

var S = H(g => {
  "use strict";

  Object.defineProperty(g, "__esModule", {
    value: !0
  });
  g.readCodePoint = N;
  g.readInt = x;
  g.readStringContents = G;

  var F = function (e) {
    return e >= 48 && e <= 57;
  },
      I = {
    decBinOct: new Set([46, 66, 69, 79, 95, 98, 101, 111]),
    hex: new Set([46, 88, 95, 120])
  },
      A = {
    bin: t => t === 48 || t === 49,
    oct: t => t >= 48 && t <= 55,
    dec: t => t >= 48 && t <= 57,
    hex: t => t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102
  };

  function G(t, e, n, l, c, r) {
    let s = n,
        a = l,
        d = c,
        i = "",
        m = !1,
        f = n,
        {
      length: o
    } = e;

    for (;;) {
      if (n >= o) {
        r.unterminated(s, a, d), i += e.slice(f, n);
        break;
      }

      let u = e.charCodeAt(n);

      if (J(t, u, e, n)) {
        i += e.slice(f, n);
        break;
      }

      if (u === 92) {
        i += e.slice(f, n);
        let b;
        ({
          ch: b,
          pos: n,
          lineStart: l,
          curLine: c
        } = K(e, n, l, c, t === "template", r)), b === null ? m = !0 : i += b, f = n;
      } else u === 8232 || u === 8233 ? (++n, ++c, l = n) : u === 10 || u === 13 ? t === "template" ? (i += e.slice(f, n) + `
`, ++n, u === 13 && e.charCodeAt(n) === 10 && ++n, ++c, f = l = n) : r.unterminated(s, a, d) : ++n;
    }

    return {
      pos: n,
      str: i,
      containsInvalid: m,
      lineStart: l,
      curLine: c
    };
  }

  function J(t, e, n, l) {
    return t === "template" ? e === 96 || e === 36 && n.charCodeAt(l + 1) === 123 : e === (t === "double" ? 34 : 39);
  }

  function K(t, e, n, l, c, r) {
    let s = !c;
    e++;

    let a = i => ({
      pos: e,
      ch: i,
      lineStart: n,
      curLine: l
    }),
        d = t.charCodeAt(e++);

    switch (d) {
      case 110:
        return a(`
`);

      case 114:
        return a("\r");

      case 120:
        {
          let i;
          return ({
            code: i,
            pos: e
          } = P(t, e, n, l, 2, !1, s, r)), a(i === null ? null : String.fromCharCode(i));
        }

      case 117:
        {
          let i;
          return ({
            code: i,
            pos: e
          } = N(t, e, n, l, s, r)), a(i === null ? null : String.fromCodePoint(i));
        }

      case 116:
        return a("	");

      case 98:
        return a("\b");

      case 118:
        return a("\v");

      case 102:
        return a("\f");

      case 13:
        t.charCodeAt(e) === 10 && ++e;

      case 10:
        n = e, ++l;

      case 8232:
      case 8233:
        return a("");

      case 56:
      case 57:
        if (c) return a(null);
        r.strictNumericEscape(e - 1, n, l);

      default:
        if (d >= 48 && d <= 55) {
          let i = e - 1,
              f = t.slice(i, e + 2).match(/^[0-7]+/)[0],
              o = parseInt(f, 8);
          o > 255 && (f = f.slice(0, -1), o = parseInt(f, 8)), e += f.length - 1;
          let u = t.charCodeAt(e);

          if (f !== "0" || u === 56 || u === 57) {
            if (c) return a(null);
            r.strictNumericEscape(i, n, l);
          }

          return a(String.fromCharCode(o));
        }

        return a(String.fromCharCode(d));
    }
  }

  function P(t, e, n, l, c, r, s, a) {
    let d = e,
        i;
    return ({
      n: i,
      pos: e
    } = x(t, e, n, l, 16, c, r, !1, a)), i === null && (s ? a.invalidEscapeSequence(d, n, l) : e = d - 1), {
      code: i,
      pos: e
    };
  }

  function x(t, e, n, l, c, r, s, a, d) {
    let i = e,
        m = c === 16 ? I.hex : I.decBinOct,
        f = c === 16 ? A.hex : c === 10 ? A.dec : c === 8 ? A.oct : A.bin,
        o = !1,
        u = 0;

    for (let b = 0, w = r ?? 1 / 0; b < w; ++b) {
      let h = t.charCodeAt(e),
          C;

      if (h === 95 && a !== "bail") {
        let D = t.charCodeAt(e - 1),
            _ = t.charCodeAt(e + 1);

        a ? (Number.isNaN(_) || !f(_) || m.has(D) || m.has(_)) && d.unexpectedNumericSeparator(e, n, l) : d.numericSeparatorInEscapeSequence(e, n, l), ++e;
        continue;
      }

      if (h >= 97 ? C = h - 97 + 10 : h >= 65 ? C = h - 65 + 10 : F(h) ? C = h - 48 : C = 1 / 0, C >= c) if (C <= 9 && d.invalidDigit(e, n, l, c)) C = 0;else if (s) C = 0, o = !0;else break;
      ++e, u = u * c + C;
    }

    return e === i || r != null && e - i !== r || o ? {
      n: null,
      pos: e
    } : {
      n: u,
      pos: e
    };
  }

  function N(t, e, n, l, c, r) {
    let s = t.charCodeAt(e),
        a;

    if (s === 123) {
      if (++e, ({
        code: a,
        pos: e
      } = P(t, e, n, l, t.indexOf("}", e) - e, !0, c, r)), ++e, a !== null && a > 1114111) if (c) r.invalidCodePoint(e, n, l);else return {
        code: null,
        pos: e
      };
    } else ({
      code: a,
      pos: e
    } = P(t, e, n, l, 4, !1, c, r));

    return {
      code: a,
      pos: e
    };
  }
});
var k = z(S()),
    V = !0,
    {
  readCodePoint: W,
  readInt: X,
  readStringContents: Y
} = k,
    {
  default: E,
  ...Q
} = k,
    Z = E !== void 0 ? E : Q;
export { V as __esModule, Z as default, W as readCodePoint, X as readInt, Y as readStringContents };