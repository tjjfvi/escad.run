/* esm.sh - esbuild bundle(@babel/template@7.18.10) esnext production */
import * as ___babel_code_frame$ from "/transpiled/https://esm.sh/v96/@babel/code-frame@7.18.6/esnext/code-frame.js";
import ___babel_parser$ from "/transpiled/https://esm.sh/v96/@babel/parser@7.19.3/esnext/parser.js";
import ___babel_types$ from "/transpiled/https://esm.sh/v96/@babel/types@7.19.3/esnext/types.js";
var ee = Object.create;
var k = Object.defineProperty;
var te = Object.getOwnPropertyDescriptor;
var re = Object.getOwnPropertyNames;
var ne = Object.getPrototypeOf,
    se = Object.prototype.hasOwnProperty;

var p = (t => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(t, {
  get: (r, e) => (typeof require < "u" ? require : r)[e]
}) : t)(function (t) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});

var f = (t, r) => () => (r || t((r = {
  exports: {}
}).exports, r), r.exports);

var ae = (t, r, e, a) => {
  if (r && typeof r == "object" || typeof r == "function") for (let n of re(r)) !se.call(t, n) && n !== e && k(t, n, {
    get: () => r[n],
    enumerable: !(a = te(r, n)) || a.enumerable
  });
  return t;
};

var ie = (t, r, e) => (e = t != null ? ee(ne(t)) : {}, ae(r || !t || !t.__esModule ? k(e, "default", {
  value: t,
  enumerable: !0
}) : e, t));

var q = f(u => {
  "use strict";

  Object.defineProperty(u, "__esModule", {
    value: !0
  });
  u.statements = u.statement = u.smart = u.program = u.expression = void 0;
  var le = ___babel_types$,
      {
    assertExpressionStatement: oe
  } = le;

  function E(t) {
    return {
      code: r => `/* @babel/template */;
${r}`,
      validate: () => {},
      unwrap: r => t(r.program.body.slice(1))
    };
  }

  var ue = E(t => t.length > 1 ? t : t[0]);
  u.smart = ue;
  var ce = E(t => t);
  u.statements = ce;
  var de = E(t => {
    if (t.length === 0) throw new Error("Found nothing to return.");
    if (t.length > 1) throw new Error("Found multiple statements but wanted one");
    return t[0];
  });
  u.statement = de;
  var C = {
    code: t => `(
${t}
)`,
    validate: t => {
      if (t.program.body.length > 1) throw new Error("Found multiple statements but wanted one");
      if (C.unwrap(t).start === 0) throw new Error("Parse result included parens.");
    },
    unwrap: ({
      program: t
    }) => {
      let [r] = t.body;
      return oe(r), r.expression;
    }
  };
  u.expression = C;
  var fe = {
    code: t => t,
    validate: () => {},
    unwrap: t => t.program
  };
  u.program = fe;
});
var v = f(m => {
  "use strict";

  Object.defineProperty(m, "__esModule", {
    value: !0
  });
  m.merge = me;
  m.normalizeReplacements = we;
  m.validate = ye;
  var he = ["placeholderWhitelist", "placeholderPattern", "preserveComments", "syntacticPlaceholders"];

  function pe(t, r) {
    if (t == null) return {};
    var e = {},
        a = Object.keys(t),
        n,
        s;

    for (s = 0; s < a.length; s++) n = a[s], !(r.indexOf(n) >= 0) && (e[n] = t[n]);

    return e;
  }

  function me(t, r) {
    let {
      placeholderWhitelist: e = t.placeholderWhitelist,
      placeholderPattern: a = t.placeholderPattern,
      preserveComments: n = t.preserveComments,
      syntacticPlaceholders: s = t.syntacticPlaceholders
    } = r;
    return {
      parser: Object.assign({}, t.parser, r.parser),
      placeholderWhitelist: e,
      placeholderPattern: a,
      preserveComments: n,
      syntacticPlaceholders: s
    };
  }

  function ye(t) {
    if (t != null && typeof t != "object") throw new Error("Unknown template options.");
    let r = t || {},
        {
      placeholderWhitelist: e,
      placeholderPattern: a,
      preserveComments: n,
      syntacticPlaceholders: s
    } = r,
        i = pe(r, he);
    if (e != null && !(e instanceof Set)) throw new Error("'.placeholderWhitelist' must be a Set, null, or undefined");
    if (a != null && !(a instanceof RegExp) && a !== !1) throw new Error("'.placeholderPattern' must be a RegExp, false, null, or undefined");
    if (n != null && typeof n != "boolean") throw new Error("'.preserveComments' must be a boolean, null, or undefined");
    if (s != null && typeof s != "boolean") throw new Error("'.syntacticPlaceholders' must be a boolean, null, or undefined");
    if (s === !0 && (e != null || a != null)) throw new Error("'.placeholderWhitelist' and '.placeholderPattern' aren't compatible with '.syntacticPlaceholders: true'");
    return {
      parser: i,
      placeholderWhitelist: e || void 0,
      placeholderPattern: a ?? void 0,
      preserveComments: n ?? void 0,
      syntacticPlaceholders: s ?? void 0
    };
  }

  function we(t) {
    if (Array.isArray(t)) return t.reduce((r, e, a) => (r["$" + a] = e, r), {});
    if (typeof t == "object" || t == null) return t || void 0;
    throw new Error("Template replacements must be an array, object, null, or undefined");
  }
});
var A = f(x => {
  "use strict";

  Object.defineProperty(x, "__esModule", {
    value: !0
  });
  x.default = $e;
  var ge = ___babel_types$,
      ve = ___babel_parser$,
      be = ___babel_code_frame$,
      {
    isCallExpression: Pe,
    isExpressionStatement: _e,
    isFunction: Ee,
    isIdentifier: xe,
    isJSXIdentifier: Ae,
    isNewExpression: je,
    isPlaceholder: b,
    isStatement: Oe,
    isStringLiteral: M,
    removePropertiesDeep: Re,
    traverse: Se
  } = ge,
      We = /^[_$A-Z0-9]+$/;

  function $e(t, r, e) {
    let {
      placeholderWhitelist: a,
      placeholderPattern: n,
      preserveComments: s,
      syntacticPlaceholders: i
    } = e,
        l = Ce(r, e.parser, i);
    Re(l, {
      preserveComments: s
    }), t.validate(l);
    let c = {
      placeholders: [],
      placeholderNames: new Set()
    },
        h = {
      placeholders: [],
      placeholderNames: new Set()
    },
        g = {
      value: void 0
    };
    return Se(l, Le, {
      syntactic: c,
      legacy: h,
      isLegacyRef: g,
      placeholderWhitelist: a,
      placeholderPattern: n,
      syntacticPlaceholders: i
    }), Object.assign({
      ast: l
    }, g.value ? h : c);
  }

  function Le(t, r, e) {
    var a;
    let n;

    if (b(t)) {
      if (e.syntacticPlaceholders === !1) throw new Error("%%foo%%-style placeholders can't be used when '.syntacticPlaceholders' is false.");
      n = t.name.name, e.isLegacyRef.value = !1;
    } else {
      if (e.isLegacyRef.value === !1 || e.syntacticPlaceholders) return;
      if (xe(t) || Ae(t)) n = t.name, e.isLegacyRef.value = !0;else if (M(t)) n = t.value, e.isLegacyRef.value = !0;else return;
    }

    if (!e.isLegacyRef.value && (e.placeholderPattern != null || e.placeholderWhitelist != null)) throw new Error("'.placeholderWhitelist' and '.placeholderPattern' aren't compatible with '.syntacticPlaceholders: true'");
    if (e.isLegacyRef.value && (e.placeholderPattern === !1 || !(e.placeholderPattern || We).test(n)) && !((a = e.placeholderWhitelist) != null && a.has(n))) return;
    r = r.slice();
    let {
      node: s,
      key: i
    } = r[r.length - 1],
        l;
    M(t) || b(t, {
      expectedNode: "StringLiteral"
    }) ? l = "string" : je(s) && i === "arguments" || Pe(s) && i === "arguments" || Ee(s) && i === "params" ? l = "param" : _e(s) && !b(t) ? (l = "statement", r = r.slice(0, -1)) : Oe(t) && b(t) ? l = "statement" : l = "other";
    let {
      placeholders: c,
      placeholderNames: h
    } = e.isLegacyRef.value ? e.legacy : e.syntactic;
    c.push({
      name: n,
      type: l,
      resolve: g => ke(g, r),
      isDuplicate: h.has(n)
    }), h.add(n);
  }

  function ke(t, r) {
    let e = t;

    for (let s = 0; s < r.length - 1; s++) {
      let {
        key: i,
        index: l
      } = r[s];
      l === void 0 ? e = e[i] : e = e[i][l];
    }

    let {
      key: a,
      index: n
    } = r[r.length - 1];
    return {
      parent: e,
      key: a,
      index: n
    };
  }

  function Ce(t, r, e) {
    let a = (r.plugins || []).slice();
    e !== !1 && a.push("placeholders"), r = Object.assign({
      allowReturnOutsideFunction: !0,
      allowSuperOutsideMethod: !0,
      sourceType: "module"
    }, r, {
      plugins: a
    });

    try {
      return (0, ve.parse)(t, r);
    } catch (n) {
      let s = n.loc;
      throw s && (n.message += `
` + (0, be.codeFrameColumns)(t, {
        start: s
      }), n.code = "BABEL_TEMPLATE_PARSE_ERROR"), n;
    }
  }
});
var S = f(R => {
  "use strict";

  Object.defineProperty(R, "__esModule", {
    value: !0
  });
  R.default = Ue;
  var qe = ___babel_types$,
      {
    blockStatement: Me,
    cloneNode: O,
    emptyStatement: Ne,
    expressionStatement: j,
    identifier: P,
    isStatement: N,
    isStringLiteral: Te,
    stringLiteral: Fe,
    validate: T
  } = qe;

  function Ue(t, r) {
    let e = O(t.ast);
    return r && (t.placeholders.forEach(a => {
      if (!Object.prototype.hasOwnProperty.call(r, a.name)) {
        let n = a.name;
        throw new Error(`Error: No substitution given for "${n}". If this is not meant to be a
            placeholder you may want to consider passing one of the following options to @babel/template:
            - { placeholderPattern: false, placeholderWhitelist: new Set(['${n}'])}
            - { placeholderPattern: /^${n}$/ }`);
      }
    }), Object.keys(r).forEach(a => {
      if (!t.placeholderNames.has(a)) throw new Error(`Unknown substitution "${a}" given`);
    })), t.placeholders.slice().reverse().forEach(a => {
      try {
        De(a, e, r && r[a.name] || null);
      } catch (n) {
        throw n.message = `@babel/template placeholder "${a.name}": ${n.message}`, n;
      }
    }), e;
  }

  function De(t, r, e) {
    t.isDuplicate && (Array.isArray(e) ? e = e.map(i => O(i)) : typeof e == "object" && (e = O(e)));
    let {
      parent: a,
      key: n,
      index: s
    } = t.resolve(r);

    if (t.type === "string") {
      if (typeof e == "string" && (e = Fe(e)), !e || !Te(e)) throw new Error("Expected string substitution");
    } else if (t.type === "statement") s === void 0 ? e ? Array.isArray(e) ? e = Me(e) : typeof e == "string" ? e = j(P(e)) : N(e) || (e = j(e)) : e = Ne() : e && !Array.isArray(e) && (typeof e == "string" && (e = P(e)), N(e) || (e = j(e)));else if (t.type === "param") {
      if (typeof e == "string" && (e = P(e)), s === void 0) throw new Error("Assertion failure.");
    } else if (typeof e == "string" && (e = P(e)), Array.isArray(e)) throw new Error("Cannot replace single expression with an array.");

    if (s === void 0) T(a, n, e), a[n] = e;else {
      let i = a[n].slice();
      t.type === "statement" || t.type === "param" ? e == null ? i.splice(s, 1) : Array.isArray(e) ? i.splice(s, 1, ...e) : i[s] = e : i[s] = e, T(a, n, i), a[n] = i;
    }
  }
});
var F = f(W => {
  "use strict";

  Object.defineProperty(W, "__esModule", {
    value: !0
  });
  W.default = He;
  var ze = v(),
      Be = A(),
      Ie = S();

  function He(t, r, e) {
    r = t.code(r);
    let a;
    return n => {
      let s = (0, ze.normalizeReplacements)(n);
      return a || (a = (0, Be.default)(t, r, e)), t.unwrap((0, Ie.default)(a, s));
    };
  }
});
var U = f($ => {
  "use strict";

  Object.defineProperty($, "__esModule", {
    value: !0
  });
  $.default = Xe;
  var Je = v(),
      Ke = A(),
      Ve = S();

  function Xe(t, r, e) {
    let {
      metadata: a,
      names: n
    } = Ze(t, r, e);
    return s => {
      let i = {};
      return s.forEach((l, c) => {
        i[n[c]] = l;
      }), l => {
        let c = (0, Je.normalizeReplacements)(l);
        return c && Object.keys(c).forEach(h => {
          if (Object.prototype.hasOwnProperty.call(i, h)) throw new Error("Unexpected replacement overlap.");
        }), t.unwrap((0, Ve.default)(a, c ? Object.assign(c, i) : i));
      };
    };
  }

  function Ze(t, r, e) {
    let a,
        n,
        s,
        i = "";

    do {
      i += "$";
      let l = Ge(r, i);
      a = l.names, n = new Set(a), s = (0, Ke.default)(t, t.code(l.code), {
        parser: e.parser,
        placeholderWhitelist: new Set(l.names.concat(e.placeholderWhitelist ? Array.from(e.placeholderWhitelist) : [])),
        placeholderPattern: e.placeholderPattern,
        preserveComments: e.preserveComments,
        syntacticPlaceholders: e.syntacticPlaceholders
      });
    } while (s.placeholders.some(l => l.isDuplicate && n.has(l.name)));

    return {
      metadata: s,
      names: a
    };
  }

  function Ge(t, r) {
    let e = [],
        a = t[0];

    for (let n = 1; n < t.length; n++) {
      let s = `${r}${n - 1}`;
      e.push(s), a += s + t[n];
    }

    return {
      names: e,
      code: a
    };
  }
});
var J = f(L => {
  "use strict";

  Object.defineProperty(L, "__esModule", {
    value: !0
  });
  L.default = H;
  var d = v(),
      D = F(),
      z = U(),
      B = (0, d.validate)({
    placeholderPattern: !1
  });

  function H(t, r) {
    let e = new WeakMap(),
        a = new WeakMap(),
        n = r || (0, d.validate)(null);
    return Object.assign((s, ...i) => {
      if (typeof s == "string") {
        if (i.length > 1) throw new Error("Unexpected extra params.");
        return I((0, D.default)(t, s, (0, d.merge)(n, (0, d.validate)(i[0]))));
      } else if (Array.isArray(s)) {
        let l = e.get(s);
        return l || (l = (0, z.default)(t, s, n), e.set(s, l)), I(l(i));
      } else if (typeof s == "object" && s) {
        if (i.length > 0) throw new Error("Unexpected extra params.");
        return H(t, (0, d.merge)(n, (0, d.validate)(s)));
      }

      throw new Error(`Unexpected template param ${typeof s}`);
    }, {
      ast: (s, ...i) => {
        if (typeof s == "string") {
          if (i.length > 1) throw new Error("Unexpected extra params.");
          return (0, D.default)(t, s, (0, d.merge)((0, d.merge)(n, (0, d.validate)(i[0])), B))();
        } else if (Array.isArray(s)) {
          let l = a.get(s);
          return l || (l = (0, z.default)(t, s, (0, d.merge)(n, B)), a.set(s, l)), l(i)();
        }

        throw new Error(`Unexpected template param ${typeof s}`);
      }
    });
  }

  function I(t) {
    let r = "";

    try {
      throw new Error();
    } catch (e) {
      e.stack && (r = e.stack.split(`
`).slice(3).join(`
`));
    }

    return e => {
      try {
        return t(e);
      } catch (a) {
        throw a.stack += `
    =============
${r}`, a;
      }
    };
  }
});
var G = f(o => {
  "use strict";

  Object.defineProperty(o, "__esModule", {
    value: !0
  });
  o.statements = o.statement = o.smart = o.program = o.expression = o.default = void 0;

  var y = q(),
      w = J(),
      _ = (0, w.default)(y.smart);

  o.smart = _;
  var K = (0, w.default)(y.statement);
  o.statement = K;
  var V = (0, w.default)(y.statements);
  o.statements = V;
  var X = (0, w.default)(y.expression);
  o.expression = X;
  var Z = (0, w.default)(y.program);
  o.program = Z;
  var Qe = Object.assign(_.bind(void 0), {
    smart: _,
    statement: K,
    statements: V,
    expression: X,
    program: Z,
    ast: _.ast
  });
  o.default = Qe;
});
var Y = ie(G()),
    ut = !0,
    {
  statements: ct,
  statement: dt,
  smart: ft,
  program: ht,
  expression: pt
} = Y,
    {
  default: Q,
  ...Ye
} = Y,
    mt = Q !== void 0 ? Q : Ye;
export { ut as __esModule, mt as default, pt as expression, ht as program, ft as smart, dt as statement, ct as statements };