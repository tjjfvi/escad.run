/* esm.sh - esbuild bundle(@babel/template@7.16.7) esnext production */
import ___babel_types$ from "/transpiled/https://esm.sh/v85/@babel/types@7.18.4/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/types.js";
import * as ___babel_code_frame$$ from "/transpiled/https://esm.sh/v85/@babel/code-frame@7.16.7/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/code-frame.js";

const ___babel_code_frame$ = Object.assign({
  __esModule: true
}, ___babel_code_frame$$);

import ___babel_parser$ from "/transpiled/https://esm.sh/v85/@babel/parser@7.18.4/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/parser.js";
var re = Object.create;
var x = Object.defineProperty;
var ne = Object.getOwnPropertyDescriptor;
var se = Object.getOwnPropertyNames;
var ae = Object.getPrototypeOf,
    ie = Object.prototype.hasOwnProperty;

var o = (e, r) => x(e, "name", {
  value: r,
  configurable: !0
}),
    m = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (r, t) => (typeof require != "undefined" ? require : r)[t]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var h = (e, r) => () => (r || e((r = {
  exports: {}
}).exports, r), r.exports);

var le = (e, r, t, a) => {
  if (r && typeof r == "object" || typeof r == "function") for (let n of se(r)) !ie.call(e, n) && n !== t && x(e, n, {
    get: () => r[n],
    enumerable: !(a = ne(r, n)) || a.enumerable
  });
  return e;
};

var M = (e, r, t) => (t = e != null ? re(ae(e)) : {}, le(r || !e || !e.__esModule ? x(t, "default", {
  value: e,
  enumerable: !0
}) : t, e));

var T = h(c => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: !0
  });
  c.statements = c.statement = c.smart = c.program = c.expression = void 0;
  var oe = ___babel_types$,
      {
    assertExpressionStatement: ue
  } = oe;

  function A(e) {
    return {
      code: r => `/* @babel/template */;
${r}`,
      validate: () => {},
      unwrap: r => e(r.program.body.slice(1))
    };
  }

  o(A, "makeStatementFormatter");
  var ce = A(e => e.length > 1 ? e : e[0]);
  c.smart = ce;
  var de = A(e => e);
  c.statements = de;
  var fe = A(e => {
    if (e.length === 0) throw new Error("Found nothing to return.");
    if (e.length > 1) throw new Error("Found multiple statements but wanted one");
    return e[0];
  });
  c.statement = fe;
  var N = {
    code: e => `(
${e}
)`,
    validate: e => {
      if (e.program.body.length > 1) throw new Error("Found multiple statements but wanted one");
      if (N.unwrap(e).start === 0) throw new Error("Parse result included parens.");
    },
    unwrap: ({
      program: e
    }) => {
      let [r] = e.body;
      return ue(r), r.expression;
    }
  };
  c.expression = N;
  var he = {
    code: e => e,
    validate: () => {},
    unwrap: e => e.program
  };
  c.program = he;
});
var b = h(y => {
  "use strict";

  Object.defineProperty(y, "__esModule", {
    value: !0
  });
  y.merge = ye;
  y.normalizeReplacements = ge;
  y.validate = we;
  var pe = ["placeholderWhitelist", "placeholderPattern", "preserveComments", "syntacticPlaceholders"];

  function me(e, r) {
    if (e == null) return {};
    var t = {},
        a = Object.keys(e),
        n,
        s;

    for (s = 0; s < a.length; s++) n = a[s], !(r.indexOf(n) >= 0) && (t[n] = e[n]);

    return t;
  }

  o(me, "_objectWithoutPropertiesLoose");

  function ye(e, r) {
    let {
      placeholderWhitelist: t = e.placeholderWhitelist,
      placeholderPattern: a = e.placeholderPattern,
      preserveComments: n = e.preserveComments,
      syntacticPlaceholders: s = e.syntacticPlaceholders
    } = r;
    return {
      parser: Object.assign({}, e.parser, r.parser),
      placeholderWhitelist: t,
      placeholderPattern: a,
      preserveComments: n,
      syntacticPlaceholders: s
    };
  }

  o(ye, "merge");

  function we(e) {
    if (e != null && typeof e != "object") throw new Error("Unknown template options.");
    let r = e || {},
        {
      placeholderWhitelist: t,
      placeholderPattern: a,
      preserveComments: n,
      syntacticPlaceholders: s
    } = r,
        i = me(r, pe);
    if (t != null && !(t instanceof Set)) throw new Error("'.placeholderWhitelist' must be a Set, null, or undefined");
    if (a != null && !(a instanceof RegExp) && a !== !1) throw new Error("'.placeholderPattern' must be a RegExp, false, null, or undefined");
    if (n != null && typeof n != "boolean") throw new Error("'.preserveComments' must be a boolean, null, or undefined");
    if (s != null && typeof s != "boolean") throw new Error("'.syntacticPlaceholders' must be a boolean, null, or undefined");
    if (s === !0 && (t != null || a != null)) throw new Error("'.placeholderWhitelist' and '.placeholderPattern' aren't compatible with '.syntacticPlaceholders: true'");
    return {
      parser: i,
      placeholderWhitelist: t || void 0,
      placeholderPattern: a ?? void 0,
      preserveComments: n ?? void 0,
      syntacticPlaceholders: s ?? void 0
    };
  }

  o(we, "validate");

  function ge(e) {
    if (Array.isArray(e)) return e.reduce((r, t, a) => (r["$" + a] = t, r), {});
    if (typeof e == "object" || e == null) return e || void 0;
    throw new Error("Template replacements must be an array, object, null, or undefined");
  }

  o(ge, "normalizeReplacements");
});
var O = h(j => {
  "use strict";

  Object.defineProperty(j, "__esModule", {
    value: !0
  });
  j.default = Le;
  var ve = ___babel_types$,
      be = ___babel_parser$,
      Pe = ___babel_code_frame$,
      {
    isCallExpression: Ee,
    isExpressionStatement: _e,
    isFunction: xe,
    isIdentifier: Ae,
    isJSXIdentifier: je,
    isNewExpression: Oe,
    isPlaceholder: P,
    isStatement: Re,
    isStringLiteral: F,
    removePropertiesDeep: Se,
    traverse: $e
  } = ve,
      We = /^[_$A-Z0-9]+$/;

  function Le(e, r, t) {
    let {
      placeholderWhitelist: a,
      placeholderPattern: n,
      preserveComments: s,
      syntacticPlaceholders: i
    } = t,
        l = qe(r, t.parser, i);
    Se(l, {
      preserveComments: s
    }), e.validate(l);
    let d = {
      placeholders: [],
      placeholderNames: new Set()
    },
        p = {
      placeholders: [],
      placeholderNames: new Set()
    },
        v = {
      value: void 0
    };
    return $e(l, ke, {
      syntactic: d,
      legacy: p,
      isLegacyRef: v,
      placeholderWhitelist: a,
      placeholderPattern: n,
      syntacticPlaceholders: i
    }), Object.assign({
      ast: l
    }, v.value ? p : d);
  }

  o(Le, "parseAndBuildMetadata");

  function ke(e, r, t) {
    var a;
    let n;

    if (P(e)) {
      if (t.syntacticPlaceholders === !1) throw new Error("%%foo%%-style placeholders can't be used when '.syntacticPlaceholders' is false.");
      n = e.name.name, t.isLegacyRef.value = !1;
    } else {
      if (t.isLegacyRef.value === !1 || t.syntacticPlaceholders) return;
      if (Ae(e) || je(e)) n = e.name, t.isLegacyRef.value = !0;else if (F(e)) n = e.value, t.isLegacyRef.value = !0;else return;
    }

    if (!t.isLegacyRef.value && (t.placeholderPattern != null || t.placeholderWhitelist != null)) throw new Error("'.placeholderWhitelist' and '.placeholderPattern' aren't compatible with '.syntacticPlaceholders: true'");
    if (t.isLegacyRef.value && (t.placeholderPattern === !1 || !(t.placeholderPattern || We).test(n)) && !((a = t.placeholderWhitelist) != null && a.has(n))) return;
    r = r.slice();
    let {
      node: s,
      key: i
    } = r[r.length - 1],
        l;
    F(e) || P(e, {
      expectedNode: "StringLiteral"
    }) ? l = "string" : Oe(s) && i === "arguments" || Ee(s) && i === "arguments" || xe(s) && i === "params" ? l = "param" : _e(s) && !P(e) ? (l = "statement", r = r.slice(0, -1)) : Re(e) && P(e) ? l = "statement" : l = "other";
    let {
      placeholders: d,
      placeholderNames: p
    } = t.isLegacyRef.value ? t.legacy : t.syntactic;
    d.push({
      name: n,
      type: l,
      resolve: v => Ce(v, r),
      isDuplicate: p.has(n)
    }), p.add(n);
  }

  o(ke, "placeholderVisitorHandler");

  function Ce(e, r) {
    let t = e;

    for (let s = 0; s < r.length - 1; s++) {
      let {
        key: i,
        index: l
      } = r[s];
      l === void 0 ? t = t[i] : t = t[i][l];
    }

    let {
      key: a,
      index: n
    } = r[r.length - 1];
    return {
      parent: t,
      key: a,
      index: n
    };
  }

  o(Ce, "resolveAncestors");

  function qe(e, r, t) {
    let a = (r.plugins || []).slice();
    t !== !1 && a.push("placeholders"), r = Object.assign({
      allowReturnOutsideFunction: !0,
      allowSuperOutsideMethod: !0,
      sourceType: "module"
    }, r, {
      plugins: a
    });

    try {
      return (0, be.parse)(e, r);
    } catch (n) {
      let s = n.loc;
      throw s && (n.message += `
` + (0, Pe.codeFrameColumns)(e, {
        start: s
      }), n.code = "BABEL_TEMPLATE_PARSE_ERROR"), n;
    }
  }

  o(qe, "parseWithCodeFrame");
});
var W = h($ => {
  "use strict";

  Object.defineProperty($, "__esModule", {
    value: !0
  });
  $.default = De;
  var Me = ___babel_types$,
      {
    blockStatement: Ne,
    cloneNode: S,
    emptyStatement: Te,
    expressionStatement: R,
    identifier: E,
    isStatement: U,
    isStringLiteral: Fe,
    stringLiteral: Ue,
    validate: D
  } = Me;

  function De(e, r) {
    let t = S(e.ast);
    return r && (e.placeholders.forEach(a => {
      if (!Object.prototype.hasOwnProperty.call(r, a.name)) {
        let n = a.name;
        throw new Error(`Error: No substitution given for "${n}". If this is not meant to be a
            placeholder you may want to consider passing one of the following options to @babel/template:
            - { placeholderPattern: false, placeholderWhitelist: new Set(['${n}'])}
            - { placeholderPattern: /^${n}$/ }`);
      }
    }), Object.keys(r).forEach(a => {
      if (!e.placeholderNames.has(a)) throw new Error(`Unknown substitution "${a}" given`);
    })), e.placeholders.slice().reverse().forEach(a => {
      try {
        ze(a, t, r && r[a.name] || null);
      } catch (n) {
        throw n.message = `@babel/template placeholder "${a.name}": ${n.message}`, n;
      }
    }), t;
  }

  o(De, "populatePlaceholders");

  function ze(e, r, t) {
    e.isDuplicate && (Array.isArray(t) ? t = t.map(i => S(i)) : typeof t == "object" && (t = S(t)));
    let {
      parent: a,
      key: n,
      index: s
    } = e.resolve(r);

    if (e.type === "string") {
      if (typeof t == "string" && (t = Ue(t)), !t || !Fe(t)) throw new Error("Expected string substitution");
    } else if (e.type === "statement") s === void 0 ? t ? Array.isArray(t) ? t = Ne(t) : typeof t == "string" ? t = R(E(t)) : U(t) || (t = R(t)) : t = Te() : t && !Array.isArray(t) && (typeof t == "string" && (t = E(t)), U(t) || (t = R(t)));else if (e.type === "param") {
      if (typeof t == "string" && (t = E(t)), s === void 0) throw new Error("Assertion failure.");
    } else if (typeof t == "string" && (t = E(t)), Array.isArray(t)) throw new Error("Cannot replace single expression with an array.");

    if (s === void 0) D(a, n, t), a[n] = t;else {
      let i = a[n].slice();
      e.type === "statement" || e.type === "param" ? t == null ? i.splice(s, 1) : Array.isArray(t) ? i.splice(s, 1, ...t) : i[s] = t : i[s] = t, D(a, n, i), a[n] = i;
    }
  }

  o(ze, "applyReplacement");
});
var z = h(L => {
  "use strict";

  Object.defineProperty(L, "__esModule", {
    value: !0
  });
  L.default = Je;
  var Be = b(),
      Ie = O(),
      He = W();

  function Je(e, r, t) {
    r = e.code(r);
    let a;
    return n => {
      let s = (0, Be.normalizeReplacements)(n);
      return a || (a = (0, Ie.default)(e, r, t)), e.unwrap((0, He.default)(a, s));
    };
  }

  o(Je, "stringTemplate");
});
var B = h(k => {
  "use strict";

  Object.defineProperty(k, "__esModule", {
    value: !0
  });
  k.default = Ze;
  var Ke = b(),
      Ve = O(),
      Xe = W();

  function Ze(e, r, t) {
    let {
      metadata: a,
      names: n
    } = Ge(e, r, t);
    return s => {
      let i = {};
      return s.forEach((l, d) => {
        i[n[d]] = l;
      }), l => {
        let d = (0, Ke.normalizeReplacements)(l);
        return d && Object.keys(d).forEach(p => {
          if (Object.prototype.hasOwnProperty.call(i, p)) throw new Error("Unexpected replacement overlap.");
        }), e.unwrap((0, Xe.default)(a, d ? Object.assign(d, i) : i));
      };
    };
  }

  o(Ze, "literalTemplate");

  function Ge(e, r, t) {
    let a,
        n,
        s,
        i = "";

    do {
      i += "$";
      let l = Qe(r, i);
      a = l.names, n = new Set(a), s = (0, Ve.default)(e, e.code(l.code), {
        parser: t.parser,
        placeholderWhitelist: new Set(l.names.concat(t.placeholderWhitelist ? Array.from(t.placeholderWhitelist) : [])),
        placeholderPattern: t.placeholderPattern,
        preserveComments: t.preserveComments,
        syntacticPlaceholders: t.syntacticPlaceholders
      });
    } while (s.placeholders.some(l => l.isDuplicate && n.has(l.name)));

    return {
      metadata: s,
      names: a
    };
  }

  o(Ge, "buildLiteralData");

  function Qe(e, r) {
    let t = [],
        a = e[0];

    for (let n = 1; n < e.length; n++) {
      let s = `${r}${n - 1}`;
      t.push(s), a += s + e[n];
    }

    return {
      names: t,
      code: a
    };
  }

  o(Qe, "buildTemplateCode");
});
var X = h(C => {
  "use strict";

  Object.defineProperty(C, "__esModule", {
    value: !0
  });
  C.default = V;
  var f = b(),
      I = z(),
      H = B(),
      J = (0, f.validate)({
    placeholderPattern: !1
  });

  function V(e, r) {
    let t = new WeakMap(),
        a = new WeakMap(),
        n = r || (0, f.validate)(null);
    return Object.assign((s, ...i) => {
      if (typeof s == "string") {
        if (i.length > 1) throw new Error("Unexpected extra params.");
        return K((0, I.default)(e, s, (0, f.merge)(n, (0, f.validate)(i[0]))));
      } else if (Array.isArray(s)) {
        let l = t.get(s);
        return l || (l = (0, H.default)(e, s, n), t.set(s, l)), K(l(i));
      } else if (typeof s == "object" && s) {
        if (i.length > 0) throw new Error("Unexpected extra params.");
        return V(e, (0, f.merge)(n, (0, f.validate)(s)));
      }

      throw new Error(`Unexpected template param ${typeof s}`);
    }, {
      ast: (s, ...i) => {
        if (typeof s == "string") {
          if (i.length > 1) throw new Error("Unexpected extra params.");
          return (0, I.default)(e, s, (0, f.merge)((0, f.merge)(n, (0, f.validate)(i[0])), J))();
        } else if (Array.isArray(s)) {
          let l = a.get(s);
          return l || (l = (0, H.default)(e, s, (0, f.merge)(n, J)), a.set(s, l)), l(i)();
        }

        throw new Error(`Unexpected template param ${typeof s}`);
      }
    });
  }

  o(V, "createTemplateBuilder");

  function K(e) {
    let r = "";

    try {
      throw new Error();
    } catch (t) {
      t.stack && (r = t.stack.split(`
`).slice(3).join(`
`));
    }

    return t => {
      try {
        return e(t);
      } catch (a) {
        throw a.stack += `
    =============
${r}`, a;
      }
    };
  }

  o(K, "extendedTrace");
});
var q = h(u => {
  "use strict";

  Object.defineProperty(u, "__esModule", {
    value: !0
  });
  u.statements = u.statement = u.smart = u.program = u.expression = u.default = void 0;

  var w = T(),
      g = X(),
      _ = (0, g.default)(w.smart);

  u.smart = _;
  var Z = (0, g.default)(w.statement);
  u.statement = Z;
  var G = (0, g.default)(w.statements);
  u.statements = G;
  var Q = (0, g.default)(w.expression);
  u.expression = Q;
  var Y = (0, g.default)(w.program);
  u.program = Y;
  var Ye = Object.assign(_.bind(void 0), {
    smart: _,
    statement: Z,
    statements: G,
    expression: Q,
    program: Y,
    ast: _.ast
  });
  u.default = Ye;
});
var ee = M(q()),
    te = M(q()),
    {
  __esModule: dt,
  statements: ft,
  statement: ht,
  smart: pt,
  program: mt,
  expression: yt
} = te,
    {
  default: et,
  ...tt
} = te,
    wt = ee.default ?? et ?? tt;
export { dt as __esModule, wt as default, yt as expression, mt as program, pt as smart, ht as statement, ft as statements };