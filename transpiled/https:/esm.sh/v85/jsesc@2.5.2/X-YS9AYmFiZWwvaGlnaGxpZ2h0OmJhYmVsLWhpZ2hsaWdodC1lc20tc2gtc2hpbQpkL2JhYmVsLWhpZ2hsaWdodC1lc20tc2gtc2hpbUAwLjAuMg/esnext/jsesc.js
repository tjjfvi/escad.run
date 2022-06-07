/* esm.sh - esbuild bundle(jsesc@2.5.2) esnext production */
import { Buffer as __Buffer$ } from "/transpiled/https://esm.sh/v85/node_buffer.js";
var P = Object.create;
var N = Object.defineProperty;
var U = Object.getOwnPropertyDescriptor;
var z = Object.getOwnPropertyNames;
var I = Object.getPrototypeOf,
    W = Object.prototype.hasOwnProperty;

var s = (e, t) => N(e, "name", {
  value: t,
  configurable: !0
});

var G = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var K = (e, t, i, l) => {
  if (t && typeof t == "object" || typeof t == "function") for (let c of z(t)) !W.call(e, c) && c !== i && N(e, c, {
    get: () => t[c],
    enumerable: !(l = U(t, c)) || l.enumerable
  });
  return e;
};

var B = (e, t, i) => (i = e != null ? P(I(e)) : {}, K(t || !e || !e.__esModule ? N(i, "default", {
  value: e,
  enumerable: !0
}) : i, e));

var O = G((_e, E) => {
  "use strict";

  var $ = {},
      Q = $.hasOwnProperty,
      v = s((e, t) => {
    for (let i in e) Q.call(e, i) && t(i, e[i]);
  }, "forOwn"),
      R = s((e, t) => (t && v(t, (i, l) => {
    e[i] = l;
  }), e), "extend"),
      T = s((e, t) => {
    let i = e.length,
        l = -1;

    for (; ++l < i;) t(e[l]);
  }, "forEach"),
      b = $.toString,
      V = Array.isArray,
      X = __Buffer$.isBuffer,
      Y = s(e => b.call(e) == "[object Object]", "isObject"),
      Z = s(e => typeof e == "string" || b.call(e) == "[object String]", "isString"),
      ee = s(e => typeof e == "number" || b.call(e) == "[object Number]", "isNumber"),
      te = s(e => typeof e == "function", "isFunction"),
      ne = s(e => b.call(e) == "[object Map]", "isMap"),
      re = s(e => b.call(e) == "[object Set]", "isSet"),
      ie = {
    '"': '\\"',
    "'": "\\'",
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t"
  },
      ce = /["'\\\b\f\n\r\t]/,
      se = /[0-9]/,
      le = /[ !#-&\(-\[\]-_a-~]/,
      f = s((e, t) => {
    let i = s(() => {
      C = h, ++t.indentLevel, h = t.indent.repeat(t.indentLevel);
    }, "increaseIndentation"),
        l = {
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
    c && (l.quotes = "double", l.wrap = !0), t = R(l, t), t.quotes != "single" && t.quotes != "double" && t.quotes != "backtick" && (t.quotes = "single");
    let o = t.quotes == "double" ? '"' : t.quotes == "backtick" ? "`" : "'",
        u = t.compact,
        j = t.lowercaseHex,
        h = t.indent.repeat(t.indentLevel),
        C = "",
        p = t.__inline1__,
        S = t.__inline2__,
        d = u ? "" : `
`,
        r,
        w = !0,
        L = t.numbers == "binary",
        H = t.numbers == "octal",
        J = t.numbers == "decimal",
        M = t.numbers == "hexadecimal";

    if (c && e && te(e.toJSON) && (e = e.toJSON()), !Z(e)) {
      if (ne(e)) return e.size == 0 ? "new Map()" : (u || (t.__inline1__ = !0, t.__inline2__ = !1), "new Map(" + f(Array.from(e), t) + ")");
      if (re(e)) return e.size == 0 ? "new Set()" : "new Set(" + f(Array.from(e), t) + ")";
      if (X(e)) return e.length == 0 ? "Buffer.from([])" : "Buffer.from(" + f(Array.from(e), t) + ")";
      if (V(e)) return r = [], t.wrap = !0, p && (t.__inline1__ = !1, t.__inline2__ = !0), S || i(), T(e, n => {
        w = !1, S && (t.__inline2__ = !1), r.push((u || S ? "" : h) + f(n, t));
      }), w ? "[]" : S ? "[" + r.join(", ") + "]" : "[" + d + r.join("," + d) + d + (u ? "" : C) + "]";

      if (ee(e)) {
        if (c) return JSON.stringify(e);
        if (J) return String(e);

        if (M) {
          let n = e.toString(16);
          return j || (n = n.toUpperCase()), "0x" + n;
        }

        if (L) return "0b" + e.toString(2);
        if (H) return "0o" + e.toString(8);
      } else return Y(e) ? (r = [], t.wrap = !0, i(), v(e, (n, x) => {
        w = !1, r.push((u ? "" : h) + f(n, t) + ":" + (u ? "" : " ") + f(x, t));
      }), w ? "{}" : "{" + d + r.join("," + d) + d + (u ? "" : C) + "}") : c ? JSON.stringify(e) || "null" : String(e);
    }

    let _ = e,
        a = -1,
        q = _.length;

    for (r = ""; ++a < q;) {
      let n = _.charAt(a);

      if (t.es6) {
        let A = _.charCodeAt(a);

        if (A >= 55296 && A <= 56319 && q > a + 1) {
          let g = _.charCodeAt(a + 1);

          if (g >= 56320 && g <= 57343) {
            let m = ((A - 55296) * 1024 + g - 56320 + 65536).toString(16);
            j || (m = m.toUpperCase()), r += "\\u{" + m + "}", ++a;
            continue;
          }
        }
      }

      if (!t.escapeEverything) {
        if (le.test(n)) {
          r += n;
          continue;
        }

        if (n == '"') {
          r += o == n ? '\\"' : n;
          continue;
        }

        if (n == "`") {
          r += o == n ? "\\`" : n;
          continue;
        }

        if (n == "'") {
          r += o == n ? "\\'" : n;
          continue;
        }
      }

      if (n == "\0" && !c && !se.test(_.charAt(a + 1))) {
        r += "\\0";
        continue;
      }

      if (ce.test(n)) {
        r += ie[n];
        continue;
      }

      let x = n.charCodeAt(0);

      if (t.minimal && x != 8232 && x != 8233) {
        r += n;
        continue;
      }

      let y = x.toString(16);
      j || (y = y.toUpperCase());
      let D = y.length > 2 || c;
      r += "\\" + (D ? "u" : "x") + ("0000" + y).slice(D ? -4 : -2);
    }

    return t.wrap && (r = o + r + o), o == "`" && (r = r.replace(/\$\{/g, "\\${")), t.isScriptContext ? r.replace(/<\/(script|style)/gi, "<\\/$1").replace(/<!--/g, c ? "\\u003C!--" : "\\x3C!--") : r;
  }, "jsesc");
  f.version = "2.5.2";
  E.exports = f;
});
var F = B(O()),
    k = B(O()),
    {
  version: xe
} = k,
    {
  default: fe,
  ...ue
} = k,
    be = F.default ?? fe ?? ue;
export { be as default, xe as version };