/* esm.sh - esbuild bundle(@babel/helper-validator-option@7.16.7) esnext production */
var $ = Object.create;
var c = Object.defineProperty;
var S = Object.getOwnPropertyDescriptor;
var j = Object.getOwnPropertyNames;
var M = Object.getPrototypeOf,
    P = Object.prototype.hasOwnProperty;

var u = (n, e) => c(n, "name", {
  value: e,
  configurable: !0
});

var p = (n, e) => () => (e || n((e = {
  exports: {}
}).exports, e), e.exports);

var w = (n, e, t, i) => {
  if (e && typeof e == "object" || typeof e == "function") for (let r of j(e)) !P.call(n, r) && r !== t && c(n, r, {
    get: () => e[r],
    enumerable: !(i = S(e, r)) || i.enumerable
  });
  return n;
};

var O = (n, e, t) => (t = n != null ? $(M(n)) : {}, w(e || !n || !n.__esModule ? c(t, "default", {
  value: n,
  enumerable: !0
}) : t, n));

var m = p(g => {
  "use strict";

  Object.defineProperty(g, "__esModule", {
    value: !0
  });
  g.findSuggestion = x;
  var {
    min: b
  } = Math;

  function q(n, e) {
    let t = [],
        i = [],
        r,
        o,
        l = n.length,
        s = e.length;
    if (!l) return s;
    if (!s) return l;

    for (o = 0; o <= s; o++) t[o] = o;

    for (r = 1; r <= l; r++) {
      for (i = [r], o = 1; o <= s; o++) i[o] = n[r - 1] === e[o - 1] ? t[o - 1] : b(t[o - 1], t[o], i[o - 1]) + 1;

      t = i;
    }

    return i[s];
  }

  u(q, "levenshtein");

  function x(n, e) {
    let t = e.map(i => q(i, n));
    return e[t.indexOf(b(...t))];
  }

  u(x, "findSuggestion");
});
var h = p(d => {
  "use strict";

  Object.defineProperty(d, "__esModule", {
    value: !0
  });
  d.OptionValidator = void 0;
  var V = m(),
      a = class {
    constructor(e) {
      this.descriptor = e;
    }

    validateTopLevelOptions(e, t) {
      let i = Object.keys(t);

      for (let r of Object.keys(e)) if (!i.includes(r)) throw new Error(this.formatMessage(`'${r}' is not a valid top-level option.
- Did you mean '${(0, V.findSuggestion)(r, i)}'?`));
    }

    validateBooleanOption(e, t, i) {
      return t === void 0 ? i : (this.invariant(typeof t == "boolean", `'${e}' option must be a boolean.`), t);
    }

    validateStringOption(e, t, i) {
      return t === void 0 ? i : (this.invariant(typeof t == "string", `'${e}' option must be a string.`), t);
    }

    invariant(e, t) {
      if (!e) throw new Error(this.formatMessage(t));
    }

    formatMessage(e) {
      return `${this.descriptor}: ${e}`;
    }

  };
  u(a, "OptionValidator");
  d.OptionValidator = a;
});
var v = p(f => {
  "use strict";

  Object.defineProperty(f, "__esModule", {
    value: !0
  });
  Object.defineProperty(f, "OptionValidator", {
    enumerable: !0,
    get: function () {
      return k.OptionValidator;
    }
  });
  Object.defineProperty(f, "findSuggestion", {
    enumerable: !0,
    get: function () {
      return E.findSuggestion;
    }
  });
  var k = h(),
      E = m();
});

var _ = O(v()),
    y = O(v()),
    {
  __esModule: A,
  OptionValidator: C,
  findSuggestion: F
} = y,
    {
  default: B,
  ...D
} = y,
    G = _.default ?? B ?? D;

export { C as OptionValidator, A as __esModule, G as default, F as findSuggestion };