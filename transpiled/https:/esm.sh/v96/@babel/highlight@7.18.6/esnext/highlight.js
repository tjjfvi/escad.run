/* esm.sh - esbuild bundle(@babel/highlight@7.18.6) esnext production */
import __chalk$ from "/transpiled/https://esm.sh/v96/chalk@2.4.2/esnext/chalk.js";
import ___babel_helper_validator_identifier$ from "/transpiled/https://esm.sh/v96/@babel/helper-validator-identifier@7.19.1/esnext/helper-validator-identifier.js";
import * as __js_tokens$ from "/transpiled/https://esm.sh/v96/js-tokens@4.0.0/esnext/js-tokens.js";
var _ = Object.create;
var a = Object.defineProperty;
var w = Object.getOwnPropertyDescriptor;
var C = Object.getOwnPropertyNames;
var T = Object.getPrototypeOf,
    b = Object.prototype.hasOwnProperty;

var l = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (r, t) => (typeof require < "u" ? require : r)[t]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var x = (e, r) => () => (r || e((r = {
  exports: {}
}).exports, r), r.exports);

var j = (e, r, t, i) => {
  if (r && typeof r == "object" || typeof r == "function") for (let u of C(r)) !b.call(e, u) && u !== t && a(e, u, {
    get: () => r[u],
    enumerable: !(i = w(r, u)) || i.enumerable
  });
  return e;
};

var z = (e, r, t) => (t = e != null ? _(T(e)) : {}, j(r || !e || !e.__esModule ? a(t, "default", {
  value: e,
  enumerable: !0
}) : t, e));

var p = x(n => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  n.default = R;
  n.getChalk = h;
  n.shouldHighlight = g;
  var c = __js_tokens$,
      d = ___babel_helper_validator_identifier$,
      o = __chalk$,
      I = new Set(["as", "async", "from", "get", "of", "set"]);

  function q(e) {
    return {
      keyword: e.cyan,
      capitalized: e.yellow,
      jsxIdentifier: e.yellow,
      punctuator: e.yellow,
      number: e.magenta,
      string: e.green,
      regex: e.magenta,
      comment: e.grey,
      invalid: e.white.bgRed.bold
    };
  }

  var E = /\r\n|[\n\r\u2028\u2029]/,
      H = /^[()[\]{}]$/,
      f;
  {
    let e = /^[a-z][\w-]*$/i,
        r = function (t, i, u) {
      if (t.type === "name") {
        if ((0, d.isKeyword)(t.value) || (0, d.isStrictReservedWord)(t.value, !0) || I.has(t.value)) return "keyword";
        if (e.test(t.value) && (u[i - 1] === "<" || u.slice(i - 2, i) == "</")) return "jsxIdentifier";
        if (t.value[0] !== t.value[0].toLowerCase()) return "capitalized";
      }

      return t.type === "punctuator" && H.test(t.value) ? "bracket" : t.type === "invalid" && (t.value === "@" || t.value === "#") ? "punctuator" : t.type;
    };

    f = function* (t) {
      let i;

      for (; i = c.default.exec(t);) {
        let u = c.matchToToken(i);
        yield {
          type: r(u, i.index, t),
          value: u.value
        };
      }
    };
  }

  function K(e, r) {
    let t = "";

    for (let {
      type: i,
      value: u
    } of f(r)) {
      let s = e[i];
      s ? t += u.split(E).map(m => s(m)).join(`
`) : t += u;
    }

    return t;
  }

  function g(e) {
    return !!o.supportsColor || e.forceColor;
  }

  function h(e) {
    return e.forceColor ? new o.constructor({
      enabled: !0,
      level: 1
    }) : o;
  }

  function R(e, r = {}) {
    if (e !== "" && g(r)) {
      let t = h(r),
          i = q(t);
      return K(i, e);
    } else return e;
  }
});
var y = z(p()),
    M = !0,
    {
  getChalk: N,
  shouldHighlight: W
} = y,
    {
  default: v,
  ...S
} = y,
    $ = v !== void 0 ? v : S;
export { M as __esModule, $ as default, N as getChalk, W as shouldHighlight };