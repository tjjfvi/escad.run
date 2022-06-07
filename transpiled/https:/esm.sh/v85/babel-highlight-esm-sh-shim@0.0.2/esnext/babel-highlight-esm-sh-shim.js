/* esm.sh - esbuild bundle(babel-highlight-esm-sh-shim@0.0.2) esnext production */
import * as __chalk$$ from "/transpiled/https://esm.sh/v85/chalk@2.4.2/esnext/chalk.js";

const __chalk$ = Object.assign({
  __esModule: true
}, __chalk$$);

import ___babel_helper_validator_identifier$ from "/transpiled/https://esm.sh/v85/@babel/helper-validator-identifier@7.16.7/esnext/helper-validator-identifier.js";
import * as __js_tokens$$ from "/transpiled/https://esm.sh/v85/js-tokens@4.0.0/esnext/js-tokens.js";

const __js_tokens$ = Object.assign({
  __esModule: true
}, __js_tokens$$);

var T = Object.create;
var o = Object.defineProperty;
var _ = Object.getOwnPropertyDescriptor;
var b = Object.getOwnPropertyNames;
var $ = Object.getPrototypeOf,
    j = Object.prototype.hasOwnProperty;

var n = (e, r) => o(e, "name", {
  value: r,
  configurable: !0
}),
    a = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (r, t) => (typeof require != "undefined" ? require : r)[t]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var x = (e, r) => () => (r || e((r = {
  exports: {}
}).exports, r), r.exports);

var z = (e, r, t, i) => {
  if (r && typeof r == "object" || typeof r == "function") for (let u of b(r)) !j.call(e, u) && u !== t && o(e, u, {
    get: () => r[u],
    enumerable: !(i = _(r, u)) || i.enumerable
  });
  return e;
};

var f = (e, r, t) => (t = e != null ? T($(e)) : {}, z(r || !e || !e.__esModule ? o(t, "default", {
  value: e,
  enumerable: !0
}) : t, e));

var d = x(l => {
  "use strict";

  Object.defineProperty(l, "__esModule", {
    value: !0
  });
  l.default = R;
  l.getChalk = y;
  l.shouldHighlight = v;
  var g = __js_tokens$,
      h = ___babel_helper_validator_identifier$,
      s = __chalk$.default,
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

  n(q, "getDefs");
  var E = /\r\n|[\n\r\u2028\u2029]/,
      H = /^[()[\]{}]$/,
      p;
  {
    let e = /^[a-z][\w-]*$/i,
        r = n(function (t, i, u) {
      if (t.type === "name") {
        if ((0, h.isKeyword)(t.value) || (0, h.isStrictReservedWord)(t.value, !0) || I.has(t.value)) return "keyword";
        if (e.test(t.value) && (u[i - 1] === "<" || u.slice(i - 2, i) == "</")) return "jsxIdentifier";
        if (t.value[0] !== t.value[0].toLowerCase()) return "capitalized";
      }

      return t.type === "punctuator" && H.test(t.value) ? "bracket" : t.type === "invalid" && (t.value === "@" || t.value === "#") ? "punctuator" : t.type;
    }, "getTokenType");
    p = n(function* (t) {
      let i;

      for (; i = g.default.exec(t);) {
        let u = g.matchToToken(i);
        yield {
          type: r(u, i.index, t),
          value: u.value
        };
      }
    }, "tokenize");
  }

  function K(e, r) {
    let t = "";

    for (let {
      type: i,
      value: u
    } of p(r)) {
      let c = e[i];
      c ? t += u.split(E).map(C => c(C)).join(`
`) : t += u;
    }

    return t;
  }

  n(K, "highlightTokens");

  function v(e) {
    return !!s.supportsColor || e.forceColor;
  }

  n(v, "shouldHighlight");

  function y(e) {
    return e.forceColor ? new s.constructor({
      enabled: !0,
      level: 1
    }) : s;
  }

  n(y, "getChalk");

  function R(e, r = {}) {
    if (e !== "" && v(r)) {
      let t = y(r),
          i = q(t);
      return K(i, e);
    } else return e;
  }

  n(R, "highlight");
});
var m = f(d()),
    w = f(d()),
    {
  __esModule: N,
  getChalk: W,
  shouldHighlight: B
} = w,
    {
  default: S,
  ...A
} = w,
    D = m.default ?? S ?? A;
export { N as __esModule, D as default, W as getChalk, B as shouldHighlight };