/* esm.sh - esbuild bundle(@babel/helper-validator-option@7.18.6) esnext production */
var h = Object.create;
var g = Object.defineProperty;
var y = Object.getOwnPropertyDescriptor;
var S = Object.getOwnPropertyNames;
var j = Object.getPrototypeOf,
    M = Object.prototype.hasOwnProperty;

var f = (n, e) => () => (e || n((e = {
  exports: {}
}).exports, e), e.exports);

var $ = (n, e, t, i) => {
  if (e && typeof e == "object" || typeof e == "function") for (let r of S(e)) !M.call(n, r) && r !== t && g(n, r, {
    get: () => e[r],
    enumerable: !(i = y(e, r)) || i.enumerable
  });
  return n;
};

var P = (n, e, t) => (t = n != null ? h(j(n)) : {}, $(e || !n || !n.__esModule ? g(t, "default", {
  value: n,
  enumerable: !0
}) : t, n));

var c = f(l => {
  "use strict";

  Object.defineProperty(l, "__esModule", {
    value: !0
  });
  l.findSuggestion = x;
  var {
    min: _
  } = Math;

  function w(n, e) {
    let t = [],
        i = [],
        r,
        o,
        d = n.length,
        s = e.length;
    if (!d) return s;
    if (!s) return d;

    for (o = 0; o <= s; o++) t[o] = o;

    for (r = 1; r <= d; r++) {
      for (i = [r], o = 1; o <= s; o++) i[o] = n[r - 1] === e[o - 1] ? t[o - 1] : _(t[o - 1], t[o], i[o - 1]) + 1;

      t = i;
    }

    return i[s];
  }

  function x(n, e) {
    let t = e.map(i => w(i, n));
    return e[t.indexOf(_(...t))];
  }
});
var O = f(u => {
  "use strict";

  Object.defineProperty(u, "__esModule", {
    value: !0
  });
  u.OptionValidator = void 0;
  var V = c(),
      p = class {
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
  u.OptionValidator = p;
});
var m = f(a => {
  "use strict";

  Object.defineProperty(a, "__esModule", {
    value: !0
  });
  Object.defineProperty(a, "OptionValidator", {
    enumerable: !0,
    get: function () {
      return q.OptionValidator;
    }
  });
  Object.defineProperty(a, "findSuggestion", {
    enumerable: !0,
    get: function () {
      return k.findSuggestion;
    }
  });
  var q = O(),
      k = c();
});
var b = P(m()),
    T = !0,
    {
  OptionValidator: z,
  findSuggestion: A
} = b,
    {
  default: v,
  ...E
} = b,
    C = v !== void 0 ? v : E;
export { z as OptionValidator, T as __esModule, C as default, A as findSuggestion };