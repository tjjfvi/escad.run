/* esm.sh - esbuild bundle(jsesc@2.5.2) esnext production */
import { Buffer as __Buffer$ } from "/transpiled/https://esm.sh/v96/node_buffer.js";
var M = Object.create;
var q = Object.defineProperty;
var P = Object.getOwnPropertyDescriptor;
var U = Object.getOwnPropertyNames;
var $ = Object.getPrototypeOf,
    z = Object.prototype.hasOwnProperty;

var I = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var W = (e, t, i, s) => {
  if (t && typeof t == "object" || typeof t == "function") for (let c of U(t)) !z.call(e, c) && c !== i && q(e, c, {
    get: () => t[c],
    enumerable: !(s = P(t, c)) || s.enumerable
  });
  return e;
};

var G = (e, t, i) => (i = e != null ? M($(e)) : {}, W(t || !e || !e.__esModule ? q(i, "default", {
  value: e,
  enumerable: !0
}) : i, e));

var v = I((oe, B) => {
  "use strict";

  var m = {},
      K = m.hasOwnProperty,
      D = (e, t) => {
    for (let i in e) K.call(e, i) && t(i, e[i]);
  },
      Q = (e, t) => (t && D(t, (i, s) => {
    e[i] = s;
  }), e),
      R = (e, t) => {
    let i = e.length,
        s = -1;

    for (; ++s < i;) t(e[s]);
  },
      x = m.toString,
      T = Array.isArray,
      V = __Buffer$.isBuffer,
      X = e => x.call(e) == "[object Object]",
      Y = e => typeof e == "string" || x.call(e) == "[object String]",
      Z = e => typeof e == "number" || x.call(e) == "[object Number]",
      ee = e => typeof e == "function",
      te = e => x.call(e) == "[object Map]",
      ne = e => x.call(e) == "[object Set]",
      re = {
    '"': '\\"',
    "'": "\\'",
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t"
  },
      ie = /["'\\\b\f\n\r\t]/,
      ce = /[0-9]/,
      se = /[ !#-&\(-\[\]-_a-~]/,
      l = (e, t) => {
    let i = () => {
      j = b, ++t.indentLevel, b = t.indent.repeat(t.indentLevel);
    },
        s = {
      escapeEverything: !1,
      minimal: !1,
      isScriptContext: !1,
      quotes: "single",
      wrap: !1,
      es6: !1,
      json: !1,
      compact: !0,
      lowercaseHex: !1,
      numbers: "decimal",
      indent: "	",
      indentLevel: 0,
      __inline1__: !1,
      __inline2__: !1
    },
        c = t && t.json;

    c && (s.quotes = "double", s.wrap = !0), t = Q(s, t), t.quotes != "single" && t.quotes != "double" && t.quotes != "backtick" && (t.quotes = "single");
    let a = t.quotes == "double" ? '"' : t.quotes == "backtick" ? "`" : "'",
        f = t.compact,
        y = t.lowercaseHex,
        b = t.indent.repeat(t.indentLevel),
        j = "",
        k = t.__inline1__,
        h = t.__inline2__,
        o = f ? "" : `
`,
        r,
        S = !0,
        L = t.numbers == "binary",
        p = t.numbers == "octal",
        H = t.numbers == "decimal",
        J = t.numbers == "hexadecimal";

    if (c && e && ee(e.toJSON) && (e = e.toJSON()), !Y(e)) {
      if (te(e)) return e.size == 0 ? "new Map()" : (f || (t.__inline1__ = !0, t.__inline2__ = !1), "new Map(" + l(Array.from(e), t) + ")");
      if (ne(e)) return e.size == 0 ? "new Set()" : "new Set(" + l(Array.from(e), t) + ")";
      if (V(e)) return e.length == 0 ? "Buffer.from([])" : "Buffer.from(" + l(Array.from(e), t) + ")";
      if (T(e)) return r = [], t.wrap = !0, k && (t.__inline1__ = !1, t.__inline2__ = !0), h || i(), R(e, n => {
        S = !1, h && (t.__inline2__ = !1), r.push((f || h ? "" : b) + l(n, t));
      }), S ? "[]" : h ? "[" + r.join(", ") + "]" : "[" + o + r.join("," + o) + o + (f ? "" : j) + "]";

      if (Z(e)) {
        if (c) return JSON.stringify(e);
        if (H) return String(e);

        if (J) {
          let n = e.toString(16);
          return y || (n = n.toUpperCase()), "0x" + n;
        }

        if (L) return "0b" + e.toString(2);
        if (p) return "0o" + e.toString(8);
      } else return X(e) ? (r = [], t.wrap = !0, i(), D(e, (n, d) => {
        S = !1, r.push((f ? "" : b) + l(n, t) + ":" + (f ? "" : " ") + l(d, t));
      }), S ? "{}" : "{" + o + r.join("," + o) + o + (f ? "" : j) + "}") : c ? JSON.stringify(e) || "null" : String(e);
    }

    let _ = e,
        u = -1,
        N = _.length;

    for (r = ""; ++u < N;) {
      let n = _.charAt(u);

      if (t.es6) {
        let C = _.charCodeAt(u);

        if (C >= 55296 && C <= 56319 && N > u + 1) {
          let A = _.charCodeAt(u + 1);

          if (A >= 56320 && A <= 57343) {
            let g = ((C - 55296) * 1024 + A - 56320 + 65536).toString(16);
            y || (g = g.toUpperCase()), r += "\\u{" + g + "}", ++u;
            continue;
          }
        }
      }

      if (!t.escapeEverything) {
        if (se.test(n)) {
          r += n;
          continue;
        }

        if (n == '"') {
          r += a == n ? '\\"' : n;
          continue;
        }

        if (n == "`") {
          r += a == n ? "\\`" : n;
          continue;
        }

        if (n == "'") {
          r += a == n ? "\\'" : n;
          continue;
        }
      }

      if (n == "\0" && !c && !ce.test(_.charAt(u + 1))) {
        r += "\\0";
        continue;
      }

      if (ie.test(n)) {
        r += re[n];
        continue;
      }

      let d = n.charCodeAt(0);

      if (t.minimal && d != 8232 && d != 8233) {
        r += n;
        continue;
      }

      let w = d.toString(16);
      y || (w = w.toUpperCase());
      let O = w.length > 2 || c;
      r += "\\" + (O ? "u" : "x") + ("0000" + w).slice(O ? -4 : -2);
    }

    return t.wrap && (r = a + r + a), a == "`" && (r = r.replace(/\$\{/g, "\\${")), t.isScriptContext ? r.replace(/<\/(script|style)/gi, "<\\/$1").replace(/<!--/g, c ? "\\u003C!--" : "\\x3C!--") : r;
  };

  l.version = "2.5.2";
  B.exports = l;
});
var F = G(v()),
    {
  version: _e
} = F,
    {
  default: E,
  ...le
} = F,
    de = E !== void 0 ? E : le;
export { de as default, _e as version };