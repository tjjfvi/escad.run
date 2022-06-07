/* esm.sh - esbuild bundle(@babel/generator@7.18.2) esnext production */
import * as ___jridgewell_gen_mapping$ from "/transpiled/https://esm.sh/v85/@jridgewell/gen-mapping@0.3.1/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/gen-mapping.js";
import __jsesc$ from "/transpiled/https://esm.sh/v85/jsesc@2.5.2/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/jsesc.js";
import ___babel_types$ from "/transpiled/https://esm.sh/v85/@babel/types@7.18.4/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/types.js";
var vi = Object.create;
var Z = Object.defineProperty;
var Ii = Object.getOwnPropertyDescriptor;
var Oi = Object.getOwnPropertyNames;
var Mi = Object.getPrototypeOf,
    Di = Object.prototype.hasOwnProperty;

var e = (t, i) => Z(t, "name", {
  value: i,
  configurable: !0
}),
    d = (t => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(t, {
  get: (i, s) => (typeof require != "undefined" ? require : i)[s]
}) : t)(function (t) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});

var S = (t, i) => () => (i || t((i = {
  exports: {}
}).exports, i), i.exports);

var Ni = (t, i, s, n) => {
  if (i && typeof i == "object" || typeof i == "function") for (let r of Oi(i)) !Di.call(t, r) && r !== s && Z(t, r, {
    get: () => i[r],
    enumerable: !(n = Ii(i, r)) || n.enumerable
  });
  return t;
};

var Ct = (t, i, s) => (s = t != null ? vi(Mi(t)) : {}, Ni(i || !t || !t.__esModule ? Z(s, "default", {
  value: t,
  enumerable: !0
}) : s, t));

var vt = S(F => {
  "use strict";

  Object.defineProperty(F, "__esModule", {
    value: !0
  });
  F.default = void 0;
  var P = ___jridgewell_gen_mapping$,
      B = class {
    constructor(i, s) {
      var n;
      this._map = void 0, this._rawMappings = void 0, this._sourceFileName = void 0, this._lastGenLine = 0, this._lastSourceLine = 0, this._lastSourceColumn = 0;
      let r = this._map = new P.GenMapping({
        sourceRoot: i.sourceRoot
      });
      this._sourceFileName = (n = i.sourceFileName) == null ? void 0 : n.replace(/\\/g, "/"), this._rawMappings = void 0, typeof s == "string" ? (0, P.setSourceContent)(r, this._sourceFileName, s) : typeof s == "object" && Object.keys(s).forEach(o => {
        (0, P.setSourceContent)(r, o.replace(/\\/g, "/"), s[o]);
      });
    }

    get() {
      return (0, P.toEncodedMap)(this._map);
    }

    getDecoded() {
      return (0, P.toDecodedMap)(this._map);
    }

    getRawMappings() {
      return this._rawMappings || (this._rawMappings = (0, P.allMappings)(this._map));
    }

    mark(i, s, n, r, o) {
      this._rawMappings = void 0, (0, P.maybeAddMapping)(this._map, {
        name: r,
        generated: i,
        source: s == null ? void 0 : o?.replace(/\\/g, "/") || this._sourceFileName,
        original: s == null ? void 0 : {
          line: s,
          column: n
        }
      });
    }

  };
  e(B, "SourceMap");
  F.default = B;
});
var Ot = S(R => {
  "use strict";

  Object.defineProperty(R, "__esModule", {
    value: !0
  });
  R.default = void 0;

  function It() {
    return {
      identifierName: void 0,
      line: void 0,
      column: void 0,
      filename: void 0
    };
  }

  e(It, "SourcePos");
  var Li = /^[ \t]+$/,
      J = class {
    constructor(i) {
      this._map = null, this._buf = "", this._last = 0, this._queue = [], this._position = {
        line: 1,
        column: 0
      }, this._sourcePosition = It(), this._disallowedPop = null, this._map = i;
    }

    get() {
      this._flush();

      let i = this._map,
          s = {
        code: this._buf.trimRight(),
        decodedMap: i?.getDecoded(),

        get map() {
          return s.map = i ? i.get() : null;
        },

        set map(n) {
          Object.defineProperty(s, "map", {
            value: n,
            writable: !0
          });
        },

        get rawMappings() {
          return s.rawMappings = i?.getRawMappings();
        },

        set rawMappings(n) {
          Object.defineProperty(s, "rawMappings", {
            value: n,
            writable: !0
          });
        }

      };
      return s;
    }

    append(i) {
      this._flush();

      let {
        line: s,
        column: n,
        filename: r,
        identifierName: o
      } = this._sourcePosition;

      this._append(i, s, n, o, r);
    }

    queue(i) {
      if (i === `
`) for (; this._queue.length > 0 && Li.test(this._queue[0][0]);) this._queue.shift();
      let {
        line: s,
        column: n,
        filename: r,
        identifierName: o
      } = this._sourcePosition;

      this._queue.unshift([i, s, n, o, r]);
    }

    queueIndentation(i) {
      this._queue.unshift([i, void 0, void 0, void 0, void 0]);
    }

    _flush() {
      let i;

      for (; i = this._queue.pop();) this._append(...i);
    }

    _append(i, s, n, r, o) {
      this._buf += i, this._last = i.charCodeAt(i.length - 1);
      let c = i.indexOf(`
`),
          T = 0;

      for (c !== 0 && this._mark(s, n, r, o); c !== -1;) this._position.line++, this._position.column = 0, T = c + 1, T < i.length && this._mark(++s, 0, r, o), c = i.indexOf(`
`, T);

      this._position.column += i.length - T;
    }

    _mark(i, s, n, r) {
      var o;
      (o = this._map) == null || o.mark(this._position, i, s, n, r);
    }

    removeTrailingNewline() {
      this._queue.length > 0 && this._queue[0][0] === `
` && this._queue.shift();
    }

    removeLastSemicolon() {
      this._queue.length > 0 && this._queue[0][0] === ";" && this._queue.shift();
    }

    getLastChar() {
      let i;
      return this._queue.length > 0 ? i = this._queue[0][0].charCodeAt(0) : i = this._last, i;
    }

    endsWithCharAndNewline() {
      let i = this._queue;
      if (i.length > 0) return i[0][0].charCodeAt(0) !== 10 ? void 0 : i.length > 1 ? i[1][0].charCodeAt(0) : this._last;
    }

    hasContent() {
      return this._queue.length > 0 || !!this._last;
    }

    exactSource(i, s) {
      this.source("start", i), s(), this.source("end", i), this._disallowPop("start", i);
    }

    source(i, s) {
      i && !s || this._normalizePosition(i, s, this._sourcePosition);
    }

    withSource(i, s, n) {
      if (!this._map) return n();
      let r = this._sourcePosition.line,
          o = this._sourcePosition.column,
          c = this._sourcePosition.filename,
          T = this._sourcePosition.identifierName;
      this.source(i, s), n(), (!this._disallowedPop || this._disallowedPop.line !== r || this._disallowedPop.column !== o || this._disallowedPop.filename !== c) && (this._sourcePosition.line = r, this._sourcePosition.column = o, this._sourcePosition.filename = c, this._sourcePosition.identifierName = T, this._disallowedPop = null);
    }

    _disallowPop(i, s) {
      i && !s || (this._disallowedPop = this._normalizePosition(i, s, It()));
    }

    _normalizePosition(i, s, n) {
      let r = s ? s[i] : null;
      return n.identifierName = i === "start" && s?.identifierName || void 0, n.line = r?.line, n.column = r?.column, n.filename = s?.filename, n;
    }

    getCurrentColumn() {
      let i = this._queue.reduce((n, r) => r[0] + n, ""),
          s = i.lastIndexOf(`
`);

      return s === -1 ? this._position.column + i.length : i.length - 1 - s;
    }

    getCurrentLine() {
      let i = this._queue.reduce((n, r) => r[0] + n, ""),
          s = 0;

      for (let n = 0; n < i.length; n++) i[n] === `
` && s++;

      return this._position.line + s;
    }

  };
  e(J, "Buffer");
  R.default = J;
});
var Lt = S(v => {
  "use strict";

  Object.defineProperty(v, "__esModule", {
    value: !0
  });
  v.nodes = v.list = void 0;
  var ji = ___babel_types$,
      {
    FLIPPED_ALIAS_KEYS: qi,
    isArrayExpression: Bi,
    isAssignmentExpression: Mt,
    isBinary: Dt,
    isBlockStatement: Fi,
    isCallExpression: Nt,
    isFunction: M,
    isIdentifier: W,
    isLiteral: Ji,
    isMemberExpression: tt,
    isObjectExpression: Ri,
    isOptionalCallExpression: Wi,
    isOptionalMemberExpression: Ui,
    isStringLiteral: Ki
  } = ji;

  function C(t, i = {}) {
    return tt(t) || Ui(t) ? (C(t.object, i), t.computed && C(t.property, i)) : Dt(t) || Mt(t) ? (C(t.left, i), C(t.right, i)) : Nt(t) || Wi(t) ? (i.hasCall = !0, C(t.callee, i)) : M(t) ? i.hasFunction = !0 : W(t) && (i.hasHelper = i.hasHelper || k(t.callee)), i;
  }

  e(C, "crawl");

  function k(t) {
    return tt(t) ? k(t.object) || k(t.property) : W(t) ? t.name === "require" || t.name[0] === "_" : Nt(t) ? k(t.callee) : Dt(t) || Mt(t) ? W(t.left) && k(t.left) || k(t.right) : !1;
  }

  e(k, "isHelper");

  function $i(t) {
    return Ji(t) || Ri(t) || Bi(t) || W(t) || tt(t);
  }

  e($i, "isType");
  var A = {
    AssignmentExpression(t) {
      let i = C(t.right);
      if (i.hasCall && i.hasHelper || i.hasFunction) return {
        before: i.hasFunction,
        after: !0
      };
    },

    SwitchCase(t, i) {
      return {
        before: !!t.consequent.length || i.cases[0] === t,
        after: !t.consequent.length && i.cases[i.cases.length - 1] === t
      };
    },

    LogicalExpression(t) {
      if (M(t.left) || M(t.right)) return {
        after: !0
      };
    },

    Literal(t) {
      if (Ki(t) && t.value === "use strict") return {
        after: !0
      };
    },

    CallExpression(t) {
      if (M(t.callee) || k(t)) return {
        before: !0,
        after: !0
      };
    },

    OptionalCallExpression(t) {
      if (M(t.callee)) return {
        before: !0,
        after: !0
      };
    },

    VariableDeclaration(t) {
      for (let i = 0; i < t.declarations.length; i++) {
        let s = t.declarations[i],
            n = k(s.id) && !$i(s.init);

        if (!n) {
          let r = C(s.init);
          n = k(s.init) && r.hasCall || r.hasFunction;
        }

        if (n) return {
          before: !0,
          after: !0
        };
      }
    },

    IfStatement(t) {
      if (Fi(t.consequent)) return {
        before: !0,
        after: !0
      };
    }

  };
  v.nodes = A;

  A.ObjectProperty = A.ObjectTypeProperty = A.ObjectMethod = function (t, i) {
    if (i.properties[0] === t) return {
      before: !0
    };
  };

  A.ObjectTypeCallProperty = function (t, i) {
    var s;
    if (i.callProperties[0] === t && !((s = i.properties) != null && s.length)) return {
      before: !0
    };
  };

  A.ObjectTypeIndexer = function (t, i) {
    var s, n;
    if (i.indexers[0] === t && !((s = i.properties) != null && s.length) && !((n = i.callProperties) != null && n.length)) return {
      before: !0
    };
  };

  A.ObjectTypeInternalSlot = function (t, i) {
    var s, n, r;
    if (i.internalSlots[0] === t && !((s = i.properties) != null && s.length) && !((n = i.callProperties) != null && n.length) && !((r = i.indexers) != null && r.length)) return {
      before: !0
    };
  };

  var Xi = {
    VariableDeclaration(t) {
      return t.declarations.map(i => i.init);
    },

    ArrayExpression(t) {
      return t.elements;
    },

    ObjectExpression(t) {
      return t.properties;
    }

  };
  v.list = Xi;
  [["Function", !0], ["Class", !0], ["Loop", !0], ["LabeledStatement", !0], ["SwitchStatement", !0], ["TryStatement", !0]].forEach(function ([t, i]) {
    typeof i == "boolean" && (i = {
      after: i,
      before: i
    }), [t].concat(qi[t] || []).forEach(function (s) {
      A[s] = function () {
        return i;
      };
    });
  });
});
var Zt = S(u => {
  "use strict";

  Object.defineProperty(u, "__esModule", {
    value: !0
  });
  u.ArrowFunctionExpression = Fe;
  u.AssignmentExpression = Re;
  u.Binary = Ae;
  u.BinaryExpression = Ne;
  u.ClassExpression = qe;
  u.ConditionalExpression = ot;
  u.DoExpression = Ee;
  u.FunctionExpression = Be;
  u.FunctionTypeAnnotation = ge;
  u.Identifier = Ue;
  u.LogicalExpression = We;
  u.NullableTypeAnnotation = xe;
  u.ObjectExpression = ke;
  u.OptionalIndexedAccessType = Ce;
  u.OptionalCallExpression = u.OptionalMemberExpression = Je;
  u.SequenceExpression = Le;
  u.TSAsExpression = ve;
  u.TSInferType = Me;
  u.TSInstantiationExpression = De;
  u.TSTypeAssertion = Ie;
  u.TSIntersectionType = u.TSUnionType = Oe;
  u.UnaryLike = Gt;
  u.IntersectionTypeAnnotation = u.UnionTypeAnnotation = Pe;
  u.UpdateExpression = be;
  u.AwaitExpression = u.YieldExpression = je;
  var Hi = ___babel_types$,
      {
    isArrayTypeAnnotation: it,
    isArrowFunctionExpression: qt,
    isAssignmentExpression: Bt,
    isAwaitExpression: et,
    isBinary: K,
    isBinaryExpression: Ft,
    isUpdateExpression: zi,
    isCallExpression: st,
    isClassDeclaration: Vi,
    isClassExpression: Jt,
    isConditional: Yi,
    isConditionalExpression: Rt,
    isExportDeclaration: Qi,
    isExportDefaultDeclaration: Gi,
    isExpressionStatement: Wt,
    isFor: Zi,
    isForInStatement: Ut,
    isForOfStatement: Kt,
    isForStatement: $t,
    isFunctionExpression: te,
    isIfStatement: ie,
    isIndexedAccessType: ee,
    isIntersectionTypeAnnotation: Xt,
    isLogicalExpression: U,
    isMemberExpression: nt,
    isNewExpression: rt,
    isNullableTypeAnnotation: se,
    isObjectPattern: ne,
    isOptionalCallExpression: Ht,
    isOptionalMemberExpression: zt,
    isReturnStatement: re,
    isSequenceExpression: ae,
    isSwitchStatement: oe,
    isTSArrayType: Vt,
    isTSAsExpression: he,
    isTSInstantiationExpression: pe,
    isTSIntersectionType: ce,
    isTSNonNullExpression: le,
    isTSOptionalType: Yt,
    isTSRestType: ue,
    isTSTypeAssertion: fe,
    isTSUnionType: me,
    isTaggedTemplateExpression: ye,
    isThrowStatement: Te,
    isTypeAnnotation: Se,
    isUnaryLike: at,
    isUnionTypeAnnotation: Qt,
    isVariableDeclarator: we,
    isWhileStatement: _e,
    isYieldExpression: de
  } = Hi,
      jt = {
    "||": 0,
    "??": 0,
    "&&": 1,
    "|": 2,
    "^": 3,
    "&": 4,
    "==": 5,
    "===": 5,
    "!=": 5,
    "!==": 5,
    "<": 6,
    ">": 6,
    "<=": 6,
    ">=": 6,
    in: 6,
    instanceof: 6,
    ">>": 7,
    "<<": 7,
    ">>>": 7,
    "+": 8,
    "-": 8,
    "*": 9,
    "/": 9,
    "%": 9,
    "**": 10
  },
      $ = e((t, i) => (Vi(i) || Jt(i)) && i.superClass === t, "isClassExtendsClause"),
      D = e((t, i) => (nt(i) || zt(i)) && i.object === t || (st(i) || Ht(i) || rt(i)) && i.callee === t || ye(i) && i.tag === t || le(i), "hasPostfixPart");

  function xe(t, i) {
    return it(i);
  }

  e(xe, "NullableTypeAnnotation");

  function ge(t, i, s) {
    return Qt(i) || Xt(i) || it(i) || Se(i) && qt(s[s.length - 3]);
  }

  e(ge, "FunctionTypeAnnotation");

  function be(t, i) {
    return D(t, i) || $(t, i);
  }

  e(be, "UpdateExpression");

  function ke(t, i, s) {
    return N(s, {
      expressionStatement: !0,
      arrowBody: !0
    });
  }

  e(ke, "ObjectExpression");

  function Ee(t, i, s) {
    return !t.async && N(s, {
      expressionStatement: !0
    });
  }

  e(Ee, "DoExpression");

  function Ae(t, i) {
    if (t.operator === "**" && Ft(i, {
      operator: "**"
    })) return i.left === t;
    if ($(t, i) || D(t, i) || at(i) || et(i)) return !0;

    if (K(i)) {
      let s = i.operator,
          n = jt[s],
          r = t.operator,
          o = jt[r];
      if (n === o && i.right === t && !U(i) || n > o) return !0;
    }
  }

  e(Ae, "Binary");

  function Pe(t, i) {
    return it(i) || se(i) || Xt(i) || Qt(i);
  }

  e(Pe, "UnionTypeAnnotation");

  function Ce(t, i) {
    return ee(i, {
      objectType: t
    });
  }

  e(Ce, "OptionalIndexedAccessType");

  function ve() {
    return !0;
  }

  e(ve, "TSAsExpression");

  function Ie() {
    return !0;
  }

  e(Ie, "TSTypeAssertion");

  function Oe(t, i) {
    return Vt(i) || Yt(i) || ce(i) || me(i) || ue(i);
  }

  e(Oe, "TSUnionType");

  function Me(t, i) {
    return Vt(i) || Yt(i);
  }

  e(Me, "TSInferType");

  function De(t, i) {
    return (st(i) || Ht(i) || rt(i) || pe(i)) && !!i.typeParameters;
  }

  e(De, "TSInstantiationExpression");

  function Ne(t, i) {
    return t.operator === "in" && (we(i) || Zi(i));
  }

  e(Ne, "BinaryExpression");

  function Le(t, i) {
    return !($t(i) || Te(i) || re(i) || ie(i) && i.test === t || _e(i) && i.test === t || Ut(i) && i.right === t || oe(i) && i.discriminant === t || Wt(i) && i.expression === t);
  }

  e(Le, "SequenceExpression");

  function je(t, i) {
    return K(i) || at(i) || D(t, i) || et(i) && de(t) || Rt(i) && t === i.test || $(t, i);
  }

  e(je, "YieldExpression");

  function qe(t, i, s) {
    return N(s, {
      expressionStatement: !0,
      exportDefault: !0
    });
  }

  e(qe, "ClassExpression");

  function Gt(t, i) {
    return D(t, i) || Ft(i, {
      operator: "**",
      left: t
    }) || $(t, i);
  }

  e(Gt, "UnaryLike");

  function Be(t, i, s) {
    return N(s, {
      expressionStatement: !0,
      exportDefault: !0
    });
  }

  e(Be, "FunctionExpression");

  function Fe(t, i) {
    return Qi(i) || ot(t, i);
  }

  e(Fe, "ArrowFunctionExpression");

  function ot(t, i) {
    return at(i) || K(i) || Rt(i, {
      test: t
    }) || et(i) || fe(i) || he(i) ? !0 : Gt(t, i);
  }

  e(ot, "ConditionalExpression");

  function Je(t, i) {
    return st(i, {
      callee: t
    }) || nt(i, {
      object: t
    });
  }

  e(Je, "OptionalMemberExpression");

  function Re(t, i) {
    return ne(t.left) ? !0 : ot(t, i);
  }

  e(Re, "AssignmentExpression");

  function We(t, i) {
    switch (t.operator) {
      case "||":
        return U(i) ? i.operator === "??" || i.operator === "&&" : !1;

      case "&&":
        return U(i, {
          operator: "??"
        });

      case "??":
        return U(i) && i.operator !== "??";
    }
  }

  e(We, "LogicalExpression");

  function Ue(t, i, s) {
    var n;
    if ((n = t.extra) != null && n.parenthesized && Bt(i, {
      left: t
    }) && (te(i.right) || Jt(i.right)) && i.right.id == null) return !0;

    if (t.name === "let") {
      let r = nt(i, {
        object: t,
        computed: !0
      }) || zt(i, {
        object: t,
        computed: !0,
        optional: !1
      });
      return N(s, {
        expressionStatement: r,
        forHead: r,
        forInHead: r,
        forOfHead: !0
      });
    }

    return t.name === "async" && Kt(i) && t === i.left;
  }

  e(Ue, "Identifier");

  function N(t, {
    expressionStatement: i = !1,
    arrowBody: s = !1,
    exportDefault: n = !1,
    forHead: r = !1,
    forInHead: o = !1,
    forOfHead: c = !1
  }) {
    let T = t.length - 1,
        w = t[T];
    T--;
    let y = t[T];

    for (; T >= 0;) {
      if (i && Wt(y, {
        expression: w
      }) || n && Gi(y, {
        declaration: w
      }) || s && qt(y, {
        body: w
      }) || r && $t(y, {
        init: w
      }) || o && Ut(y, {
        left: w
      }) || c && Kt(y, {
        left: w
      })) return !0;
      if (D(w, y) && !rt(y) || ae(y) && y.expressions[0] === w || zi(y) && !y.prefix || Yi(y, {
        test: w
      }) || K(y, {
        left: w
      }) || Bt(y, {
        left: w
      })) w = y, T--, y = t[T];else return !1;
    }

    return !1;
  }

  e(N, "isFirstInContext");
});
var ct = S(I => {
  "use strict";

  Object.defineProperty(I, "__esModule", {
    value: !0
  });
  I.needsParens = es;
  I.needsWhitespace = X;
  I.needsWhitespaceAfter = is;
  I.needsWhitespaceBefore = ts;
  var ti = Lt(),
      Ke = Zt(),
      $e = ___babel_types$,
      {
    FLIPPED_ALIAS_KEYS: Xe,
    isCallExpression: He,
    isExpressionStatement: ze,
    isMemberExpression: Ve,
    isNewExpression: Ye
  } = $e;

  function pt(t) {
    let i = {};

    function s(n, r) {
      let o = i[n];
      i[n] = o ? function (c, T, w) {
        let y = o(c, T, w);
        return y ?? r(c, T, w);
      } : r;
    }

    e(s, "add");

    for (let n of Object.keys(t)) {
      let r = Xe[n];
      if (r) for (let o of r) s(o, t[n]);else s(n, t[n]);
    }

    return i;
  }

  e(pt, "expandAliases");
  var Qe = pt(Ke),
      Ge = pt(ti.nodes),
      Ze = pt(ti.list);

  function ht(t, i, s, n) {
    let r = t[i.type];
    return r ? r(i, s, n) : null;
  }

  e(ht, "find");

  function ii(t) {
    return He(t) ? !0 : Ve(t) && ii(t.object);
  }

  e(ii, "isOrHasCallExpression");

  function X(t, i, s) {
    if (!t) return 0;
    ze(t) && (t = t.expression);
    let n = ht(Ge, t, i);

    if (!n) {
      let r = ht(Ze, t, i);
      if (r) for (let o = 0; o < r.length && (n = X(r[o], t, s), !n); o++);
    }

    return typeof n == "object" && n !== null && n[s] || 0;
  }

  e(X, "needsWhitespace");

  function ts(t, i) {
    return X(t, i, "before");
  }

  e(ts, "needsWhitespaceBefore");

  function is(t, i) {
    return X(t, i, "after");
  }

  e(is, "needsWhitespaceAfter");

  function es(t, i, s) {
    return i ? Ye(i) && i.callee === t && ii(t) ? !0 : ht(Qe, t, i, s) : !1;
  }

  e(es, "needsParens");
});
var ei = S(L => {
  "use strict";

  Object.defineProperty(L, "__esModule", {
    value: !0
  });
  L.TaggedTemplateExpression = ss;
  L.TemplateElement = ns;
  L.TemplateLiteral = rs;

  function ss(t) {
    this.print(t.tag, t), this.print(t.typeParameters, t), this.print(t.quasi, t);
  }

  e(ss, "TaggedTemplateExpression");

  function ns(t, i) {
    let s = i.quasis[0] === t,
        n = i.quasis[i.quasis.length - 1] === t,
        r = (s ? "`" : "}") + t.value.raw + (n ? "`" : "${");
    this.token(r);
  }

  e(ns, "TemplateElement");

  function rs(t) {
    let i = t.quasis;

    for (let s = 0; s < i.length; s++) this.print(i[s], t), s + 1 < i.length && this.print(t.expressions[s], t);
  }

  e(rs, "TemplateLiteral");
});
var ai = S(l => {
  "use strict";

  Object.defineProperty(l, "__esModule", {
    value: !0
  });
  l.LogicalExpression = l.BinaryExpression = l.AssignmentExpression = Is;
  l.AssignmentPattern = vs;
  l.AwaitExpression = void 0;
  l.BindExpression = Os;
  l.CallExpression = bs;
  l.ConditionalExpression = ms;
  l.Decorator = ds;
  l.DoExpression = ls;
  l.EmptyStatement = Ps;
  l.ExpressionStatement = Cs;
  l.Import = ks;
  l.MemberExpression = Ms;
  l.MetaProperty = Ds;
  l.ModuleExpression = js;
  l.NewExpression = ys;
  l.OptionalCallExpression = gs;
  l.OptionalMemberExpression = xs;
  l.ParenthesizedExpression = us;
  l.PrivateName = Ns;
  l.SequenceExpression = Ts;
  l.Super = ws;
  l.ThisExpression = Ss;
  l.UnaryExpression = cs;
  l.UpdateExpression = fs;
  l.V8IntrinsicIdentifier = Ls;
  l.YieldExpression = void 0;
  var as = ___babel_types$,
      os = ct(),
      {
    isCallExpression: hs,
    isLiteral: si,
    isMemberExpression: lt,
    isNewExpression: ps
  } = as;

  function cs(t) {
    t.operator === "void" || t.operator === "delete" || t.operator === "typeof" || t.operator === "throw" ? (this.word(t.operator), this.space()) : this.token(t.operator), this.print(t.argument, t);
  }

  e(cs, "UnaryExpression");

  function ls(t) {
    t.async && (this.word("async"), this.space()), this.word("do"), this.space(), this.print(t.body, t);
  }

  e(ls, "DoExpression");

  function us(t) {
    this.token("("), this.print(t.expression, t), this.token(")");
  }

  e(us, "ParenthesizedExpression");

  function fs(t) {
    t.prefix ? (this.token(t.operator), this.print(t.argument, t)) : (this.startTerminatorless(!0), this.print(t.argument, t), this.endTerminatorless(), this.token(t.operator));
  }

  e(fs, "UpdateExpression");

  function ms(t) {
    this.print(t.test, t), this.space(), this.token("?"), this.space(), this.print(t.consequent, t), this.space(), this.token(":"), this.space(), this.print(t.alternate, t);
  }

  e(ms, "ConditionalExpression");

  function ys(t, i) {
    this.word("new"), this.space(), this.print(t.callee, t), !(this.format.minified && t.arguments.length === 0 && !t.optional && !hs(i, {
      callee: t
    }) && !lt(i) && !ps(i)) && (this.print(t.typeArguments, t), this.print(t.typeParameters, t), t.optional && this.token("?."), this.token("("), this.printList(t.arguments, t), this.token(")"));
  }

  e(ys, "NewExpression");

  function Ts(t) {
    this.printList(t.expressions, t);
  }

  e(Ts, "SequenceExpression");

  function Ss() {
    this.word("this");
  }

  e(Ss, "ThisExpression");

  function ws() {
    this.word("super");
  }

  e(ws, "Super");

  function ni(t) {
    switch (t.type) {
      case "Identifier":
        return !0;

      case "MemberExpression":
        return !t.computed && t.property.type === "Identifier" && ni(t.object);

      default:
        return !1;
    }
  }

  e(ni, "isDecoratorMemberExpression");

  function _s(t) {
    return t.type === "CallExpression" && (t = t.callee), t.type === "ParenthesizedExpression" ? !1 : !ni(t);
  }

  e(_s, "shouldParenthesizeDecoratorExpression");

  function ds(t) {
    this.token("@");
    let {
      expression: i
    } = t;
    _s(i) ? (this.token("("), this.print(i, t), this.token(")")) : this.print(i, t), this.newline();
  }

  e(ds, "Decorator");

  function xs(t) {
    if (this.print(t.object, t), !t.computed && lt(t.property)) throw new TypeError("Got a MemberExpression for MemberExpression property");
    let i = t.computed;
    si(t.property) && typeof t.property.value == "number" && (i = !0), t.optional && this.token("?."), i ? (this.token("["), this.print(t.property, t), this.token("]")) : (t.optional || this.token("."), this.print(t.property, t));
  }

  e(xs, "OptionalMemberExpression");

  function gs(t) {
    this.print(t.callee, t), this.print(t.typeArguments, t), this.print(t.typeParameters, t), t.optional && this.token("?."), this.token("("), this.printList(t.arguments, t), this.token(")");
  }

  e(gs, "OptionalCallExpression");

  function bs(t) {
    this.print(t.callee, t), this.print(t.typeArguments, t), this.print(t.typeParameters, t), this.token("("), this.printList(t.arguments, t), this.token(")");
  }

  e(bs, "CallExpression");

  function ks() {
    this.word("import");
  }

  e(ks, "Import");

  function ri(t) {
    return function (i) {
      if (this.word(t), i.delegate && this.token("*"), i.argument) {
        this.space();
        let s = this.startTerminatorless();
        this.print(i.argument, i), this.endTerminatorless(s);
      }
    };
  }

  e(ri, "buildYieldAwait");
  var Es = ri("yield");
  l.YieldExpression = Es;
  var As = ri("await");
  l.AwaitExpression = As;

  function Ps() {
    this.semicolon(!0);
  }

  e(Ps, "EmptyStatement");

  function Cs(t) {
    this.print(t.expression, t), this.semicolon();
  }

  e(Cs, "ExpressionStatement");

  function vs(t) {
    this.print(t.left, t), t.left.optional && this.token("?"), this.print(t.left.typeAnnotation, t), this.space(), this.token("="), this.space(), this.print(t.right, t);
  }

  e(vs, "AssignmentPattern");

  function Is(t, i) {
    let s = this.inForStatementInitCounter && t.operator === "in" && !os.needsParens(t, i);
    s && this.token("("), this.print(t.left, t), this.space(), t.operator === "in" || t.operator === "instanceof" ? this.word(t.operator) : this.token(t.operator), this.space(), this.print(t.right, t), s && this.token(")");
  }

  e(Is, "AssignmentExpression");

  function Os(t) {
    this.print(t.object, t), this.token("::"), this.print(t.callee, t);
  }

  e(Os, "BindExpression");

  function Ms(t) {
    if (this.print(t.object, t), !t.computed && lt(t.property)) throw new TypeError("Got a MemberExpression for MemberExpression property");
    let i = t.computed;
    si(t.property) && typeof t.property.value == "number" && (i = !0), i ? (this.token("["), this.print(t.property, t), this.token("]")) : (this.token("."), this.print(t.property, t));
  }

  e(Ms, "MemberExpression");

  function Ds(t) {
    this.print(t.meta, t), this.token("."), this.print(t.property, t);
  }

  e(Ds, "MetaProperty");

  function Ns(t) {
    this.token("#"), this.print(t.id, t);
  }

  e(Ns, "PrivateName");

  function Ls(t) {
    this.token("%"), this.word(t.name);
  }

  e(Ls, "V8IntrinsicIdentifier");

  function js(t) {
    this.word("module"), this.space(), this.token("{"), t.body.body.length === 0 ? this.token("}") : (this.newline(), this.printSequence(t.body.body, t, {
      indent: !0
    }), this.rightBrace());
  }

  e(js, "ModuleExpression");
});
var ci = S(f => {
  "use strict";

  Object.defineProperty(f, "__esModule", {
    value: !0
  });
  f.BreakStatement = void 0;
  f.CatchClause = tn;
  f.ContinueStatement = void 0;
  f.DebuggerStatement = nn;
  f.DoWhileStatement = Hs;
  f.ForOfStatement = f.ForInStatement = void 0;
  f.ForStatement = Us;
  f.IfStatement = Ws;
  f.LabeledStatement = Gs;
  f.ReturnStatement = void 0;
  f.SwitchCase = sn;
  f.SwitchStatement = en;
  f.ThrowStatement = void 0;
  f.TryStatement = Zs;
  f.VariableDeclaration = on;
  f.VariableDeclarator = hn;
  f.WhileStatement = Ks;
  f.WithStatement = Rs;
  var qs = ___babel_types$,
      {
    isFor: oi,
    isForStatement: Bs,
    isIfStatement: Fs,
    isStatement: Js
  } = qs;

  function Rs(t) {
    this.word("with"), this.space(), this.token("("), this.print(t.object, t), this.token(")"), this.printBlock(t);
  }

  e(Rs, "WithStatement");

  function Ws(t) {
    this.word("if"), this.space(), this.token("("), this.print(t.test, t), this.token(")"), this.space();
    let i = t.alternate && Fs(hi(t.consequent));
    i && (this.token("{"), this.newline(), this.indent()), this.printAndIndentOnComments(t.consequent, t), i && (this.dedent(), this.newline(), this.token("}")), t.alternate && (this.endsWith(125) && this.space(), this.word("else"), this.space(), this.printAndIndentOnComments(t.alternate, t));
  }

  e(Ws, "IfStatement");

  function hi(t) {
    return Js(t.body) ? hi(t.body) : t;
  }

  e(hi, "getLastStatement");

  function Us(t) {
    this.word("for"), this.space(), this.token("("), this.inForStatementInitCounter++, this.print(t.init, t), this.inForStatementInitCounter--, this.token(";"), t.test && (this.space(), this.print(t.test, t)), this.token(";"), t.update && (this.space(), this.print(t.update, t)), this.token(")"), this.printBlock(t);
  }

  e(Us, "ForStatement");

  function Ks(t) {
    this.word("while"), this.space(), this.token("("), this.print(t.test, t), this.token(")"), this.printBlock(t);
  }

  e(Ks, "WhileStatement");
  var pi = e(function (t) {
    return function (i) {
      this.word("for"), this.space(), t === "of" && i.await && (this.word("await"), this.space()), this.token("("), this.print(i.left, i), this.space(), this.word(t), this.space(), this.print(i.right, i), this.token(")"), this.printBlock(i);
    };
  }, "buildForXStatement"),
      $s = pi("in");
  f.ForInStatement = $s;
  var Xs = pi("of");
  f.ForOfStatement = Xs;

  function Hs(t) {
    this.word("do"), this.space(), this.print(t.body, t), this.space(), this.word("while"), this.space(), this.token("("), this.print(t.test, t), this.token(")"), this.semicolon();
  }

  e(Hs, "DoWhileStatement");

  function H(t, i = "label") {
    return function (s) {
      this.word(t);
      let n = s[i];

      if (n) {
        this.space();
        let r = i == "label",
            o = this.startTerminatorless(r);
        this.print(n, s), this.endTerminatorless(o);
      }

      this.semicolon();
    };
  }

  e(H, "buildLabelStatement");
  var zs = H("continue");
  f.ContinueStatement = zs;
  var Vs = H("return", "argument");
  f.ReturnStatement = Vs;
  var Ys = H("break");
  f.BreakStatement = Ys;
  var Qs = H("throw", "argument");
  f.ThrowStatement = Qs;

  function Gs(t) {
    this.print(t.label, t), this.token(":"), this.space(), this.print(t.body, t);
  }

  e(Gs, "LabeledStatement");

  function Zs(t) {
    this.word("try"), this.space(), this.print(t.block, t), this.space(), t.handlers ? this.print(t.handlers[0], t) : this.print(t.handler, t), t.finalizer && (this.space(), this.word("finally"), this.space(), this.print(t.finalizer, t));
  }

  e(Zs, "TryStatement");

  function tn(t) {
    this.word("catch"), this.space(), t.param && (this.token("("), this.print(t.param, t), this.print(t.param.typeAnnotation, t), this.token(")"), this.space()), this.print(t.body, t);
  }

  e(tn, "CatchClause");

  function en(t) {
    this.word("switch"), this.space(), this.token("("), this.print(t.discriminant, t), this.token(")"), this.space(), this.token("{"), this.printSequence(t.cases, t, {
      indent: !0,

      addNewlines(i, s) {
        if (!i && t.cases[t.cases.length - 1] === s) return -1;
      }

    }), this.token("}");
  }

  e(en, "SwitchStatement");

  function sn(t) {
    t.test ? (this.word("case"), this.space(), this.print(t.test, t), this.token(":")) : (this.word("default"), this.token(":")), t.consequent.length && (this.newline(), this.printSequence(t.consequent, t, {
      indent: !0
    }));
  }

  e(sn, "SwitchCase");

  function nn() {
    this.word("debugger"), this.semicolon();
  }

  e(nn, "DebuggerStatement");

  function rn() {
    if (this.token(","), this.newline(), this.endsWith(10)) for (let t = 0; t < 4; t++) this.space(!0);
  }

  e(rn, "variableDeclarationIndent");

  function an() {
    if (this.token(","), this.newline(), this.endsWith(10)) for (let t = 0; t < 6; t++) this.space(!0);
  }

  e(an, "constDeclarationIndent");

  function on(t, i) {
    t.declare && (this.word("declare"), this.space()), this.word(t.kind), this.space();
    let s = !1;
    if (!oi(i)) for (let r of t.declarations) r.init && (s = !0);
    let n;

    if (s && (n = t.kind === "const" ? an : rn), this.printList(t.declarations, t, {
      separator: n
    }), oi(i)) {
      if (Bs(i)) {
        if (i.init === t) return;
      } else if (i.left === t) return;
    }

    this.semicolon();
  }

  e(on, "VariableDeclaration");

  function hn(t) {
    this.print(t.id, t), t.definite && this.token("!"), this.print(t.id.typeAnnotation, t), t.init && (this.space(), this.token("="), this.space(), this.print(t.init, t));
  }

  e(hn, "VariableDeclarator");
});
var li = S(g => {
  "use strict";

  Object.defineProperty(g, "__esModule", {
    value: !0
  });
  g.ClassAccessorProperty = yn;
  g.ClassBody = fn;
  g.ClassExpression = g.ClassDeclaration = un;
  g.ClassMethod = Sn;
  g.ClassPrivateMethod = wn;
  g.ClassPrivateProperty = Tn;
  g.ClassProperty = mn;
  g.StaticBlock = dn;
  g._classMethodHead = _n;
  var pn = ___babel_types$,
      {
    isExportDefaultDeclaration: cn,
    isExportNamedDeclaration: ln
  } = pn;

  function un(t, i) {
    (!this.format.decoratorsBeforeExport || !cn(i) && !ln(i)) && this.printJoin(t.decorators, t), t.declare && (this.word("declare"), this.space()), t.abstract && (this.word("abstract"), this.space()), this.word("class"), this.printInnerComments(t), t.id && (this.space(), this.print(t.id, t)), this.print(t.typeParameters, t), t.superClass && (this.space(), this.word("extends"), this.space(), this.print(t.superClass, t), this.print(t.superTypeParameters, t)), t.implements && (this.space(), this.word("implements"), this.space(), this.printList(t.implements, t)), this.space(), this.print(t.body, t);
  }

  e(un, "ClassDeclaration");

  function fn(t) {
    this.token("{"), this.printInnerComments(t), t.body.length === 0 ? this.token("}") : (this.newline(), this.indent(), this.printSequence(t.body, t), this.dedent(), this.endsWith(10) || this.newline(), this.rightBrace());
  }

  e(fn, "ClassBody");

  function mn(t) {
    this.printJoin(t.decorators, t), this.source("end", t.key.loc), this.tsPrintClassMemberModifiers(t, !0), t.computed ? (this.token("["), this.print(t.key, t), this.token("]")) : (this._variance(t), this.print(t.key, t)), t.optional && this.token("?"), t.definite && this.token("!"), this.print(t.typeAnnotation, t), t.value && (this.space(), this.token("="), this.space(), this.print(t.value, t)), this.semicolon();
  }

  e(mn, "ClassProperty");

  function yn(t) {
    this.printJoin(t.decorators, t), this.source("end", t.key.loc), this.tsPrintClassMemberModifiers(t, !0), this.word("accessor"), this.printInnerComments(t), this.space(), t.computed ? (this.token("["), this.print(t.key, t), this.token("]")) : (this._variance(t), this.print(t.key, t)), t.optional && this.token("?"), t.definite && this.token("!"), this.print(t.typeAnnotation, t), t.value && (this.space(), this.token("="), this.space(), this.print(t.value, t)), this.semicolon();
  }

  e(yn, "ClassAccessorProperty");

  function Tn(t) {
    this.printJoin(t.decorators, t), t.static && (this.word("static"), this.space()), this.print(t.key, t), this.print(t.typeAnnotation, t), t.value && (this.space(), this.token("="), this.space(), this.print(t.value, t)), this.semicolon();
  }

  e(Tn, "ClassPrivateProperty");

  function Sn(t) {
    this._classMethodHead(t), this.space(), this.print(t.body, t);
  }

  e(Sn, "ClassMethod");

  function wn(t) {
    this._classMethodHead(t), this.space(), this.print(t.body, t);
  }

  e(wn, "ClassPrivateMethod");

  function _n(t) {
    this.printJoin(t.decorators, t), this.source("end", t.key.loc), this.tsPrintClassMemberModifiers(t, !1), this._methodHead(t);
  }

  e(_n, "_classMethodHead");

  function dn(t) {
    this.word("static"), this.space(), this.token("{"), t.body.length === 0 ? this.token("}") : (this.newline(), this.printSequence(t.body, t, {
      indent: !0
    }), this.rightBrace());
  }

  e(dn, "StaticBlock");
});
var ui = S(b => {
  "use strict";

  Object.defineProperty(b, "__esModule", {
    value: !0
  });
  b.ArrowFunctionExpression = In;
  b.FunctionDeclaration = b.FunctionExpression = vn;
  b._functionHead = Cn;
  b._methodHead = An;
  b._param = En;
  b._parameters = kn;
  b._params = bn;
  b._predicate = Pn;
  var xn = ___babel_types$,
      {
    isIdentifier: gn
  } = xn;

  function bn(t) {
    this.print(t.typeParameters, t), this.token("("), this._parameters(t.params, t), this.token(")"), this.print(t.returnType, t);
  }

  e(bn, "_params");

  function kn(t, i) {
    for (let s = 0; s < t.length; s++) this._param(t[s], i), s < t.length - 1 && (this.token(","), this.space());
  }

  e(kn, "_parameters");

  function En(t, i) {
    this.printJoin(t.decorators, t), this.print(t, i), t.optional && this.token("?"), this.print(t.typeAnnotation, t);
  }

  e(En, "_param");

  function An(t) {
    let i = t.kind,
        s = t.key;
    (i === "get" || i === "set") && (this.word(i), this.space()), t.async && (this._catchUp("start", s.loc), this.word("async"), this.space()), (i === "method" || i === "init") && t.generator && this.token("*"), t.computed ? (this.token("["), this.print(s, t), this.token("]")) : this.print(s, t), t.optional && this.token("?"), this._params(t);
  }

  e(An, "_methodHead");

  function Pn(t) {
    t.predicate && (t.returnType || this.token(":"), this.space(), this.print(t.predicate, t));
  }

  e(Pn, "_predicate");

  function Cn(t) {
    t.async && (this.word("async"), this.space()), this.word("function"), t.generator && this.token("*"), this.printInnerComments(t), this.space(), t.id && this.print(t.id, t), this._params(t), this._predicate(t);
  }

  e(Cn, "_functionHead");

  function vn(t) {
    this._functionHead(t), this.space(), this.print(t.body, t);
  }

  e(vn, "FunctionExpression");

  function In(t) {
    t.async && (this.word("async"), this.space());
    let i = t.params[0];
    !this.format.retainLines && !this.format.auxiliaryCommentBefore && !this.format.auxiliaryCommentAfter && t.params.length === 1 && gn(i) && !On(t, i) ? this.print(i, t) : this._params(t), this._predicate(t), this.space(), this.token("=>"), this.space(), this.print(t.body, t);
  }

  e(In, "ArrowFunctionExpression");

  function On(t, i) {
    var s, n;
    return !!(t.typeParameters || t.returnType || t.predicate || i.typeAnnotation || i.optional || (s = i.leadingComments) != null && s.length || (n = i.trailingComments) != null && n.length);
  }

  e(On, "hasTypesOrComments");
});
var ut = S(x => {
  "use strict";

  Object.defineProperty(x, "__esModule", {
    value: !0
  });
  x.ExportAllDeclaration = Un;
  x.ExportDefaultDeclaration = $n;
  x.ExportDefaultSpecifier = Jn;
  x.ExportNamedDeclaration = Kn;
  x.ExportNamespaceSpecifier = Wn;
  x.ExportSpecifier = Rn;
  x.ImportAttribute = Hn;
  x.ImportDeclaration = Xn;
  x.ImportDefaultSpecifier = Fn;
  x.ImportNamespaceSpecifier = zn;
  x.ImportSpecifier = Bn;
  var Mn = ___babel_types$,
      {
    isClassDeclaration: fi,
    isExportDefaultSpecifier: Dn,
    isExportNamespaceSpecifier: Nn,
    isImportDefaultSpecifier: Ln,
    isImportNamespaceSpecifier: jn,
    isStatement: qn
  } = Mn;

  function Bn(t) {
    (t.importKind === "type" || t.importKind === "typeof") && (this.word(t.importKind), this.space()), this.print(t.imported, t), t.local && t.local.name !== t.imported.name && (this.space(), this.word("as"), this.space(), this.print(t.local, t));
  }

  e(Bn, "ImportSpecifier");

  function Fn(t) {
    this.print(t.local, t);
  }

  e(Fn, "ImportDefaultSpecifier");

  function Jn(t) {
    this.print(t.exported, t);
  }

  e(Jn, "ExportDefaultSpecifier");

  function Rn(t) {
    t.exportKind === "type" && (this.word("type"), this.space()), this.print(t.local, t), t.exported && t.local.name !== t.exported.name && (this.space(), this.word("as"), this.space(), this.print(t.exported, t));
  }

  e(Rn, "ExportSpecifier");

  function Wn(t) {
    this.token("*"), this.space(), this.word("as"), this.space(), this.print(t.exported, t);
  }

  e(Wn, "ExportNamespaceSpecifier");

  function Un(t) {
    this.word("export"), this.space(), t.exportKind === "type" && (this.word("type"), this.space()), this.token("*"), this.space(), this.word("from"), this.space(), this.print(t.source, t), this.printAssertions(t), this.semicolon();
  }

  e(Un, "ExportAllDeclaration");

  function Kn(t) {
    this.format.decoratorsBeforeExport && fi(t.declaration) && this.printJoin(t.declaration.decorators, t), this.word("export"), this.space(), mi.apply(this, arguments);
  }

  e(Kn, "ExportNamedDeclaration");

  function $n(t) {
    this.format.decoratorsBeforeExport && fi(t.declaration) && this.printJoin(t.declaration.decorators, t), this.word("export"), this.space(), this.word("default"), this.space(), mi.apply(this, arguments);
  }

  e($n, "ExportDefaultDeclaration");

  function mi(t) {
    if (t.declaration) {
      let i = t.declaration;
      this.print(i, t), qn(i) || this.semicolon();
    } else {
      t.exportKind === "type" && (this.word("type"), this.space());
      let i = t.specifiers.slice(0),
          s = !1;

      for (;;) {
        let n = i[0];
        if (Dn(n) || Nn(n)) s = !0, this.print(i.shift(), t), i.length && (this.token(","), this.space());else break;
      }

      (i.length || !i.length && !s) && (this.token("{"), i.length && (this.space(), this.printList(i, t), this.space()), this.token("}")), t.source && (this.space(), this.word("from"), this.space(), this.print(t.source, t), this.printAssertions(t)), this.semicolon();
    }
  }

  e(mi, "ExportDeclaration");

  function Xn(t) {
    this.word("import"), this.space();
    let i = t.importKind === "type" || t.importKind === "typeof";
    i && (this.word(t.importKind), this.space());
    let s = t.specifiers.slice(0),
        n = !!s.length;

    for (; n;) {
      let o = s[0];
      if (Ln(o) || jn(o)) this.print(s.shift(), t), s.length && (this.token(","), this.space());else break;
    }

    s.length ? (this.token("{"), this.space(), this.printList(s, t), this.space(), this.token("}")) : i && !n && (this.token("{"), this.token("}")), (n || i) && (this.space(), this.word("from"), this.space()), this.print(t.source, t), this.printAssertions(t);
    {
      var r;
      (r = t.attributes) != null && r.length && (this.space(), this.word("with"), this.space(), this.printList(t.attributes, t));
    }
    this.semicolon();
  }

  e(Xn, "ImportDeclaration");

  function Hn(t) {
    this.print(t.key), this.token(":"), this.space(), this.print(t.value);
  }

  e(Hn, "ImportAttribute");

  function zn(t) {
    this.token("*"), this.space(), this.word("as"), this.space(), this.print(t.local, t);
  }

  e(zn, "ImportNamespaceSpecifier");
});
var mt = S(m => {
  "use strict";

  Object.defineProperty(m, "__esModule", {
    value: !0
  });
  m.ArgumentPlaceholder = Gn;
  m.ArrayPattern = m.ArrayExpression = sr;
  m.BigIntLiteral = lr;
  m.BooleanLiteral = or;
  m.DecimalLiteral = ur;
  m.Identifier = Qn;
  m.NullLiteral = hr;
  m.NumericLiteral = pr;
  m.ObjectPattern = m.ObjectExpression = tr;
  m.ObjectMethod = ir;
  m.ObjectProperty = er;
  m.PipelineBareFunction = yr;
  m.PipelinePrimaryTopicReference = Tr;
  m.PipelineTopicExpression = mr;
  m.RecordExpression = nr;
  m.RegExpLiteral = ar;
  m.SpreadElement = m.RestElement = Zn;
  m.StringLiteral = cr;
  m.TopicReference = fr;
  m.TupleExpression = rr;
  var Vn = ___babel_types$,
      Ti = __jsesc$,
      {
    isAssignmentPattern: Yn,
    isIdentifier: ft
  } = Vn;

  function Qn(t) {
    this.exactSource(t.loc, () => {
      this.word(t.name);
    });
  }

  e(Qn, "Identifier");

  function Gn() {
    this.token("?");
  }

  e(Gn, "ArgumentPlaceholder");

  function Zn(t) {
    this.token("..."), this.print(t.argument, t);
  }

  e(Zn, "RestElement");

  function tr(t) {
    let i = t.properties;
    this.token("{"), this.printInnerComments(t), i.length && (this.space(), this.printList(i, t, {
      indent: !0,
      statement: !0
    }), this.space()), this.token("}");
  }

  e(tr, "ObjectExpression");

  function ir(t) {
    this.printJoin(t.decorators, t), this._methodHead(t), this.space(), this.print(t.body, t);
  }

  e(ir, "ObjectMethod");

  function er(t) {
    if (this.printJoin(t.decorators, t), t.computed) this.token("["), this.print(t.key, t), this.token("]");else {
      if (Yn(t.value) && ft(t.key) && t.key.name === t.value.left.name) {
        this.print(t.value, t);
        return;
      }

      if (this.print(t.key, t), t.shorthand && ft(t.key) && ft(t.value) && t.key.name === t.value.name) return;
    }
    this.token(":"), this.space(), this.print(t.value, t);
  }

  e(er, "ObjectProperty");

  function sr(t) {
    let i = t.elements,
        s = i.length;
    this.token("["), this.printInnerComments(t);

    for (let n = 0; n < i.length; n++) {
      let r = i[n];
      r ? (n > 0 && this.space(), this.print(r, t), n < s - 1 && this.token(",")) : this.token(",");
    }

    this.token("]");
  }

  e(sr, "ArrayExpression");

  function nr(t) {
    let i = t.properties,
        s,
        n;
    if (this.format.recordAndTupleSyntaxType === "bar") s = "{|", n = "|}";else if (this.format.recordAndTupleSyntaxType === "hash") s = "#{", n = "}";else throw new Error(`The "recordAndTupleSyntaxType" generator option must be "bar" or "hash" (${JSON.stringify(this.format.recordAndTupleSyntaxType)} received).`);
    this.token(s), this.printInnerComments(t), i.length && (this.space(), this.printList(i, t, {
      indent: !0,
      statement: !0
    }), this.space()), this.token(n);
  }

  e(nr, "RecordExpression");

  function rr(t) {
    let i = t.elements,
        s = i.length,
        n,
        r;
    if (this.format.recordAndTupleSyntaxType === "bar") n = "[|", r = "|]";else if (this.format.recordAndTupleSyntaxType === "hash") n = "#[", r = "]";else throw new Error(`${this.format.recordAndTupleSyntaxType} is not a valid recordAndTuple syntax type`);
    this.token(n), this.printInnerComments(t);

    for (let o = 0; o < i.length; o++) {
      let c = i[o];
      c && (o > 0 && this.space(), this.print(c, t), o < s - 1 && this.token(","));
    }

    this.token(r);
  }

  e(rr, "TupleExpression");

  function ar(t) {
    this.word(`/${t.pattern}/${t.flags}`);
  }

  e(ar, "RegExpLiteral");

  function or(t) {
    this.word(t.value ? "true" : "false");
  }

  e(or, "BooleanLiteral");

  function hr() {
    this.word("null");
  }

  e(hr, "NullLiteral");

  function pr(t) {
    let i = this.getPossibleRaw(t),
        s = this.format.jsescOption,
        n = t.value + "";
    s.numbers ? this.number(Ti(t.value, s)) : i == null ? this.number(n) : this.format.minified ? this.number(i.length < n.length ? i : n) : this.number(i);
  }

  e(pr, "NumericLiteral");

  function cr(t) {
    let i = this.getPossibleRaw(t);

    if (!this.format.minified && i != null) {
      this.token(i);
      return;
    }

    let s = Ti(t.value, Object.assign(this.format.jsescOption, this.format.jsonCompatibleStrings && {
      json: !0
    }));
    return this.token(s);
  }

  e(cr, "StringLiteral");

  function lr(t) {
    let i = this.getPossibleRaw(t);

    if (!this.format.minified && i != null) {
      this.word(i);
      return;
    }

    this.word(t.value + "n");
  }

  e(lr, "BigIntLiteral");

  function ur(t) {
    let i = this.getPossibleRaw(t);

    if (!this.format.minified && i != null) {
      this.word(i);
      return;
    }

    this.word(t.value + "m");
  }

  e(ur, "DecimalLiteral");
  var yi = new Set(["^^", "@@", "^", "%", "#"]);

  function fr() {
    let {
      topicToken: t
    } = this.format;
    if (yi.has(t)) this.token(t);else {
      let i = JSON.stringify(t),
          s = Array.from(yi, n => JSON.stringify(n));
      throw new Error(`The "topicToken" generator option must be one of ${s.join(", ")} (${i} received instead).`);
    }
  }

  e(fr, "TopicReference");

  function mr(t) {
    this.print(t.expression, t);
  }

  e(mr, "PipelineTopicExpression");

  function yr(t) {
    this.print(t.callee, t);
  }

  e(yr, "PipelineBareFunction");

  function Tr() {
    this.token("#");
  }

  e(Tr, "PipelinePrimaryTopicReference");
});
var wi = S(h => {
  "use strict";

  Object.defineProperty(h, "__esModule", {
    value: !0
  });
  h.AnyTypeAnnotation = dr;
  h.ArrayTypeAnnotation = xr;
  h.BooleanLiteralTypeAnnotation = br;
  h.BooleanTypeAnnotation = gr;
  h.DeclareClass = Er;
  h.DeclareExportAllDeclaration = jr;
  h.DeclareExportDeclaration = Lr;
  h.DeclareFunction = Ar;
  h.DeclareInterface = vr;
  h.DeclareModule = Ir;
  h.DeclareModuleExports = Or;
  h.DeclareOpaqueType = Dr;
  h.DeclareTypeAlias = Mr;
  h.DeclareVariable = Nr;
  h.DeclaredPredicate = Cr;
  h.EmptyTypeAnnotation = na;
  h.EnumBooleanBody = Br;
  h.EnumBooleanMember = Ur;
  h.EnumDeclaration = qr;
  h.EnumDefaultedMember = Wr;
  h.EnumNumberBody = Fr;
  h.EnumNumberMember = Kr;
  h.EnumStringBody = Jr;
  h.EnumStringMember = $r;
  h.EnumSymbolBody = Rr;
  h.ExistsTypeAnnotation = Hr;
  h.FunctionTypeAnnotation = zr;
  h.FunctionTypeParam = Vr;
  h.IndexedAccessType = va;
  h.InferredPredicate = Pr;
  h.InterfaceDeclaration = Zr;
  h.GenericTypeAnnotation = h.ClassImplements = h.InterfaceExtends = Yr;
  h.InterfaceTypeAnnotation = ia;
  h.IntersectionTypeAnnotation = ea;
  h.MixedTypeAnnotation = sa;
  h.NullLiteralTypeAnnotation = kr;
  h.NullableTypeAnnotation = ra;
  Object.defineProperty(h, "NumberLiteralTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return Si.NumericLiteral;
    }
  });
  h.NumberTypeAnnotation = aa;
  h.ObjectTypeAnnotation = Ta;
  h.ObjectTypeCallProperty = wa;
  h.ObjectTypeIndexer = _a;
  h.ObjectTypeInternalSlot = Sa;
  h.ObjectTypeProperty = da;
  h.ObjectTypeSpreadProperty = xa;
  h.OpaqueType = ya;
  h.OptionalIndexedAccessType = Ia;
  h.QualifiedTypeIdentifier = ga;
  Object.defineProperty(h, "StringLiteralTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return Si.StringLiteral;
    }
  });
  h.StringTypeAnnotation = oa;
  h.SymbolTypeAnnotation = ba;
  h.ThisTypeAnnotation = ha;
  h.TupleTypeAnnotation = pa;
  h.TypeAlias = la;
  h.TypeAnnotation = ua;
  h.TypeCastExpression = Aa;
  h.TypeParameter = ma;
  h.TypeParameterDeclaration = h.TypeParameterInstantiation = fa;
  h.TypeofTypeAnnotation = ca;
  h.UnionTypeAnnotation = Ea;
  h.Variance = Pa;
  h.VoidTypeAnnotation = Ca;
  h._interfaceish = Qr;
  h._variance = Gr;
  var Sr = ___babel_types$,
      wr = ut(),
      Si = mt(),
      {
    isDeclareExportDeclaration: z,
    isStatement: _r
  } = Sr;

  function dr() {
    this.word("any");
  }

  e(dr, "AnyTypeAnnotation");

  function xr(t) {
    this.print(t.elementType, t), this.token("["), this.token("]");
  }

  e(xr, "ArrayTypeAnnotation");

  function gr() {
    this.word("boolean");
  }

  e(gr, "BooleanTypeAnnotation");

  function br(t) {
    this.word(t.value ? "true" : "false");
  }

  e(br, "BooleanLiteralTypeAnnotation");

  function kr() {
    this.word("null");
  }

  e(kr, "NullLiteralTypeAnnotation");

  function Er(t, i) {
    z(i) || (this.word("declare"), this.space()), this.word("class"), this.space(), this._interfaceish(t);
  }

  e(Er, "DeclareClass");

  function Ar(t, i) {
    z(i) || (this.word("declare"), this.space()), this.word("function"), this.space(), this.print(t.id, t), this.print(t.id.typeAnnotation.typeAnnotation, t), t.predicate && (this.space(), this.print(t.predicate, t)), this.semicolon();
  }

  e(Ar, "DeclareFunction");

  function Pr() {
    this.token("%"), this.word("checks");
  }

  e(Pr, "InferredPredicate");

  function Cr(t) {
    this.token("%"), this.word("checks"), this.token("("), this.print(t.value, t), this.token(")");
  }

  e(Cr, "DeclaredPredicate");

  function vr(t) {
    this.word("declare"), this.space(), this.InterfaceDeclaration(t);
  }

  e(vr, "DeclareInterface");

  function Ir(t) {
    this.word("declare"), this.space(), this.word("module"), this.space(), this.print(t.id, t), this.space(), this.print(t.body, t);
  }

  e(Ir, "DeclareModule");

  function Or(t) {
    this.word("declare"), this.space(), this.word("module"), this.token("."), this.word("exports"), this.print(t.typeAnnotation, t);
  }

  e(Or, "DeclareModuleExports");

  function Mr(t) {
    this.word("declare"), this.space(), this.TypeAlias(t);
  }

  e(Mr, "DeclareTypeAlias");

  function Dr(t, i) {
    z(i) || (this.word("declare"), this.space()), this.OpaqueType(t);
  }

  e(Dr, "DeclareOpaqueType");

  function Nr(t, i) {
    z(i) || (this.word("declare"), this.space()), this.word("var"), this.space(), this.print(t.id, t), this.print(t.id.typeAnnotation, t), this.semicolon();
  }

  e(Nr, "DeclareVariable");

  function Lr(t) {
    this.word("declare"), this.space(), this.word("export"), this.space(), t.default && (this.word("default"), this.space()), Xr.apply(this, arguments);
  }

  e(Lr, "DeclareExportDeclaration");

  function jr() {
    this.word("declare"), this.space(), wr.ExportAllDeclaration.apply(this, arguments);
  }

  e(jr, "DeclareExportAllDeclaration");

  function qr(t) {
    let {
      id: i,
      body: s
    } = t;
    this.word("enum"), this.space(), this.print(i, t), this.print(s, t);
  }

  e(qr, "EnumDeclaration");

  function V(t, i, s) {
    s && (t.space(), t.word("of"), t.space(), t.word(i)), t.space();
  }

  e(V, "enumExplicitType");

  function Y(t, i) {
    let {
      members: s
    } = i;
    t.token("{"), t.indent(), t.newline();

    for (let n of s) t.print(n, i), t.newline();

    i.hasUnknownMembers && (t.token("..."), t.newline()), t.dedent(), t.token("}");
  }

  e(Y, "enumBody");

  function Br(t) {
    let {
      explicitType: i
    } = t;
    V(this, "boolean", i), Y(this, t);
  }

  e(Br, "EnumBooleanBody");

  function Fr(t) {
    let {
      explicitType: i
    } = t;
    V(this, "number", i), Y(this, t);
  }

  e(Fr, "EnumNumberBody");

  function Jr(t) {
    let {
      explicitType: i
    } = t;
    V(this, "string", i), Y(this, t);
  }

  e(Jr, "EnumStringBody");

  function Rr(t) {
    V(this, "symbol", !0), Y(this, t);
  }

  e(Rr, "EnumSymbolBody");

  function Wr(t) {
    let {
      id: i
    } = t;
    this.print(i, t), this.token(",");
  }

  e(Wr, "EnumDefaultedMember");

  function yt(t, i) {
    let {
      id: s,
      init: n
    } = i;
    t.print(s, i), t.space(), t.token("="), t.space(), t.print(n, i), t.token(",");
  }

  e(yt, "enumInitializedMember");

  function Ur(t) {
    yt(this, t);
  }

  e(Ur, "EnumBooleanMember");

  function Kr(t) {
    yt(this, t);
  }

  e(Kr, "EnumNumberMember");

  function $r(t) {
    yt(this, t);
  }

  e($r, "EnumStringMember");

  function Xr(t) {
    if (t.declaration) {
      let i = t.declaration;
      this.print(i, t), _r(i) || this.semicolon();
    } else this.token("{"), t.specifiers.length && (this.space(), this.printList(t.specifiers, t), this.space()), this.token("}"), t.source && (this.space(), this.word("from"), this.space(), this.print(t.source, t)), this.semicolon();
  }

  e(Xr, "FlowExportDeclaration");

  function Hr() {
    this.token("*");
  }

  e(Hr, "ExistsTypeAnnotation");

  function zr(t, i) {
    this.print(t.typeParameters, t), this.token("("), t.this && (this.word("this"), this.token(":"), this.space(), this.print(t.this.typeAnnotation, t), (t.params.length || t.rest) && (this.token(","), this.space())), this.printList(t.params, t), t.rest && (t.params.length && (this.token(","), this.space()), this.token("..."), this.print(t.rest, t)), this.token(")"), i && (i.type === "ObjectTypeCallProperty" || i.type === "DeclareFunction" || i.type === "ObjectTypeProperty" && i.method) ? this.token(":") : (this.space(), this.token("=>")), this.space(), this.print(t.returnType, t);
  }

  e(zr, "FunctionTypeAnnotation");

  function Vr(t) {
    this.print(t.name, t), t.optional && this.token("?"), t.name && (this.token(":"), this.space()), this.print(t.typeAnnotation, t);
  }

  e(Vr, "FunctionTypeParam");

  function Yr(t) {
    this.print(t.id, t), this.print(t.typeParameters, t);
  }

  e(Yr, "InterfaceExtends");

  function Qr(t) {
    var i;
    this.print(t.id, t), this.print(t.typeParameters, t), (i = t.extends) != null && i.length && (this.space(), this.word("extends"), this.space(), this.printList(t.extends, t)), t.mixins && t.mixins.length && (this.space(), this.word("mixins"), this.space(), this.printList(t.mixins, t)), t.implements && t.implements.length && (this.space(), this.word("implements"), this.space(), this.printList(t.implements, t)), this.space(), this.print(t.body, t);
  }

  e(Qr, "_interfaceish");

  function Gr(t) {
    t.variance && (t.variance.kind === "plus" ? this.token("+") : t.variance.kind === "minus" && this.token("-"));
  }

  e(Gr, "_variance");

  function Zr(t) {
    this.word("interface"), this.space(), this._interfaceish(t);
  }

  e(Zr, "InterfaceDeclaration");

  function ta() {
    this.space(), this.token("&"), this.space();
  }

  e(ta, "andSeparator");

  function ia(t) {
    this.word("interface"), t.extends && t.extends.length && (this.space(), this.word("extends"), this.space(), this.printList(t.extends, t)), this.space(), this.print(t.body, t);
  }

  e(ia, "InterfaceTypeAnnotation");

  function ea(t) {
    this.printJoin(t.types, t, {
      separator: ta
    });
  }

  e(ea, "IntersectionTypeAnnotation");

  function sa() {
    this.word("mixed");
  }

  e(sa, "MixedTypeAnnotation");

  function na() {
    this.word("empty");
  }

  e(na, "EmptyTypeAnnotation");

  function ra(t) {
    this.token("?"), this.print(t.typeAnnotation, t);
  }

  e(ra, "NullableTypeAnnotation");

  function aa() {
    this.word("number");
  }

  e(aa, "NumberTypeAnnotation");

  function oa() {
    this.word("string");
  }

  e(oa, "StringTypeAnnotation");

  function ha() {
    this.word("this");
  }

  e(ha, "ThisTypeAnnotation");

  function pa(t) {
    this.token("["), this.printList(t.types, t), this.token("]");
  }

  e(pa, "TupleTypeAnnotation");

  function ca(t) {
    this.word("typeof"), this.space(), this.print(t.argument, t);
  }

  e(ca, "TypeofTypeAnnotation");

  function la(t) {
    this.word("type"), this.space(), this.print(t.id, t), this.print(t.typeParameters, t), this.space(), this.token("="), this.space(), this.print(t.right, t), this.semicolon();
  }

  e(la, "TypeAlias");

  function ua(t) {
    this.token(":"), this.space(), t.optional && this.token("?"), this.print(t.typeAnnotation, t);
  }

  e(ua, "TypeAnnotation");

  function fa(t) {
    this.token("<"), this.printList(t.params, t, {}), this.token(">");
  }

  e(fa, "TypeParameterInstantiation");

  function ma(t) {
    this._variance(t), this.word(t.name), t.bound && this.print(t.bound, t), t.default && (this.space(), this.token("="), this.space(), this.print(t.default, t));
  }

  e(ma, "TypeParameter");

  function ya(t) {
    this.word("opaque"), this.space(), this.word("type"), this.space(), this.print(t.id, t), this.print(t.typeParameters, t), t.supertype && (this.token(":"), this.space(), this.print(t.supertype, t)), t.impltype && (this.space(), this.token("="), this.space(), this.print(t.impltype, t)), this.semicolon();
  }

  e(ya, "OpaqueType");

  function Ta(t) {
    t.exact ? this.token("{|") : this.token("{");
    let i = [...t.properties, ...(t.callProperties || []), ...(t.indexers || []), ...(t.internalSlots || [])];
    i.length && (this.space(), this.printJoin(i, t, {
      addNewlines(s) {
        if (s && !i[0]) return 1;
      },

      indent: !0,
      statement: !0,
      iterator: () => {
        (i.length !== 1 || t.inexact) && (this.token(","), this.space());
      }
    }), this.space()), t.inexact && (this.indent(), this.token("..."), i.length && this.newline(), this.dedent()), t.exact ? this.token("|}") : this.token("}");
  }

  e(Ta, "ObjectTypeAnnotation");

  function Sa(t) {
    t.static && (this.word("static"), this.space()), this.token("["), this.token("["), this.print(t.id, t), this.token("]"), this.token("]"), t.optional && this.token("?"), t.method || (this.token(":"), this.space()), this.print(t.value, t);
  }

  e(Sa, "ObjectTypeInternalSlot");

  function wa(t) {
    t.static && (this.word("static"), this.space()), this.print(t.value, t);
  }

  e(wa, "ObjectTypeCallProperty");

  function _a(t) {
    t.static && (this.word("static"), this.space()), this._variance(t), this.token("["), t.id && (this.print(t.id, t), this.token(":"), this.space()), this.print(t.key, t), this.token("]"), this.token(":"), this.space(), this.print(t.value, t);
  }

  e(_a, "ObjectTypeIndexer");

  function da(t) {
    t.proto && (this.word("proto"), this.space()), t.static && (this.word("static"), this.space()), (t.kind === "get" || t.kind === "set") && (this.word(t.kind), this.space()), this._variance(t), this.print(t.key, t), t.optional && this.token("?"), t.method || (this.token(":"), this.space()), this.print(t.value, t);
  }

  e(da, "ObjectTypeProperty");

  function xa(t) {
    this.token("..."), this.print(t.argument, t);
  }

  e(xa, "ObjectTypeSpreadProperty");

  function ga(t) {
    this.print(t.qualification, t), this.token("."), this.print(t.id, t);
  }

  e(ga, "QualifiedTypeIdentifier");

  function ba() {
    this.word("symbol");
  }

  e(ba, "SymbolTypeAnnotation");

  function ka() {
    this.space(), this.token("|"), this.space();
  }

  e(ka, "orSeparator");

  function Ea(t) {
    this.printJoin(t.types, t, {
      separator: ka
    });
  }

  e(Ea, "UnionTypeAnnotation");

  function Aa(t) {
    this.token("("), this.print(t.expression, t), this.print(t.typeAnnotation, t), this.token(")");
  }

  e(Aa, "TypeCastExpression");

  function Pa(t) {
    t.kind === "plus" ? this.token("+") : this.token("-");
  }

  e(Pa, "Variance");

  function Ca() {
    this.word("void");
  }

  e(Ca, "VoidTypeAnnotation");

  function va(t) {
    this.print(t.objectType, t), this.token("["), this.print(t.indexType, t), this.token("]");
  }

  e(va, "IndexedAccessType");

  function Ia(t) {
    this.print(t.objectType, t), t.optional && this.token("?."), this.token("["), this.print(t.indexType, t), this.token("]");
  }

  e(Ia, "OptionalIndexedAccessType");
});

var _i = S(E => {
  "use strict";

  Object.defineProperty(E, "__esModule", {
    value: !0
  });
  E.BlockStatement = Da;
  E.Directive = Na;
  E.DirectiveLiteral = qa;
  E.File = Oa;
  E.InterpreterDirective = Ba;
  E.Placeholder = Fa;
  E.Program = Ma;

  function Oa(t) {
    t.program && this.print(t.program.interpreter, t), this.print(t.program, t);
  }

  e(Oa, "File");

  function Ma(t) {
    this.printInnerComments(t, !1), this.printSequence(t.directives, t), t.directives && t.directives.length && this.newline(), this.printSequence(t.body, t);
  }

  e(Ma, "Program");

  function Da(t) {
    var i;
    this.token("{"), this.printInnerComments(t);
    let s = (i = t.directives) == null ? void 0 : i.length;
    t.body.length || s ? (this.newline(), this.printSequence(t.directives, t, {
      indent: !0
    }), s && this.newline(), this.printSequence(t.body, t, {
      indent: !0
    }), this.removeTrailingNewline(), this.source("end", t.loc), this.endsWith(10) || this.newline(), this.rightBrace()) : (this.source("end", t.loc), this.token("}"));
  }

  e(Da, "BlockStatement");

  function Na(t) {
    this.print(t.value, t), this.semicolon();
  }

  e(Na, "Directive");
  var La = /(?:^|[^\\])(?:\\\\)*'/,
      ja = /(?:^|[^\\])(?:\\\\)*"/;

  function qa(t) {
    let i = this.getPossibleRaw(t);

    if (!this.format.minified && i != null) {
      this.token(i);
      return;
    }

    let {
      value: s
    } = t;
    if (!ja.test(s)) this.token(`"${s}"`);else if (!La.test(s)) this.token(`'${s}'`);else throw new Error("Malformed AST: it is not possible to print a directive containing both unescaped single and double quotes.");
  }

  e(qa, "DirectiveLiteral");

  function Ba(t) {
    this.token(`#!${t.value}
`);
  }

  e(Ba, "InterpreterDirective");

  function Fa(t) {
    this.token("%%"), this.print(t.name), this.token("%%"), t.expectedNode === "Statement" && this.semicolon();
  }

  e(Fa, "Placeholder");
});

var di = S(_ => {
  "use strict";

  Object.defineProperty(_, "__esModule", {
    value: !0
  });
  _.JSXAttribute = Ja;
  _.JSXClosingElement = Qa;
  _.JSXClosingFragment = io;
  _.JSXElement = za;
  _.JSXEmptyExpression = Ga;
  _.JSXExpressionContainer = $a;
  _.JSXFragment = Za;
  _.JSXIdentifier = Ra;
  _.JSXMemberExpression = Ua;
  _.JSXNamespacedName = Wa;
  _.JSXOpeningElement = Ya;
  _.JSXOpeningFragment = to;
  _.JSXSpreadAttribute = Ka;
  _.JSXSpreadChild = Xa;
  _.JSXText = Ha;

  function Ja(t) {
    this.print(t.name, t), t.value && (this.token("="), this.print(t.value, t));
  }

  e(Ja, "JSXAttribute");

  function Ra(t) {
    this.word(t.name);
  }

  e(Ra, "JSXIdentifier");

  function Wa(t) {
    this.print(t.namespace, t), this.token(":"), this.print(t.name, t);
  }

  e(Wa, "JSXNamespacedName");

  function Ua(t) {
    this.print(t.object, t), this.token("."), this.print(t.property, t);
  }

  e(Ua, "JSXMemberExpression");

  function Ka(t) {
    this.token("{"), this.token("..."), this.print(t.argument, t), this.token("}");
  }

  e(Ka, "JSXSpreadAttribute");

  function $a(t) {
    this.token("{"), this.print(t.expression, t), this.token("}");
  }

  e($a, "JSXExpressionContainer");

  function Xa(t) {
    this.token("{"), this.token("..."), this.print(t.expression, t), this.token("}");
  }

  e(Xa, "JSXSpreadChild");

  function Ha(t) {
    let i = this.getPossibleRaw(t);
    i != null ? this.token(i) : this.token(t.value);
  }

  e(Ha, "JSXText");

  function za(t) {
    let i = t.openingElement;

    if (this.print(i, t), !i.selfClosing) {
      this.indent();

      for (let s of t.children) this.print(s, t);

      this.dedent(), this.print(t.closingElement, t);
    }
  }

  e(za, "JSXElement");

  function Va() {
    this.space();
  }

  e(Va, "spaceSeparator");

  function Ya(t) {
    this.token("<"), this.print(t.name, t), this.print(t.typeParameters, t), t.attributes.length > 0 && (this.space(), this.printJoin(t.attributes, t, {
      separator: Va
    })), t.selfClosing ? (this.space(), this.token("/>")) : this.token(">");
  }

  e(Ya, "JSXOpeningElement");

  function Qa(t) {
    this.token("</"), this.print(t.name, t), this.token(">");
  }

  e(Qa, "JSXClosingElement");

  function Ga(t) {
    this.printInnerComments(t);
  }

  e(Ga, "JSXEmptyExpression");

  function Za(t) {
    this.print(t.openingFragment, t), this.indent();

    for (let i of t.children) this.print(i, t);

    this.dedent(), this.print(t.closingFragment, t);
  }

  e(Za, "JSXFragment");

  function to() {
    this.token("<"), this.token(">");
  }

  e(to, "JSXOpeningFragment");

  function io() {
    this.token("</"), this.token(">");
  }

  e(io, "JSXClosingFragment");
});
var gi = S(a => {
  "use strict";

  Object.defineProperty(a, "__esModule", {
    value: !0
  });
  a.TSAnyKeyword = yo;
  a.TSArrayType = Fo;
  a.TSAsExpression = nh;
  a.TSBigIntKeyword = To;
  a.TSBooleanKeyword = xo;
  a.TSCallSignatureDeclaration = po;
  a.TSConditionalType = Ho;
  a.TSConstructSignatureDeclaration = co;
  a.TSConstructorType = Oo;
  a.TSDeclareFunction = ao;
  a.TSDeclareMethod = oo;
  a.TSEnumDeclaration = oh;
  a.TSEnumMember = hh;
  a.TSExportAssignment = yh;
  a.TSExpressionWithTypeArguments = th;
  a.TSExternalModuleReference = fh;
  a.TSFunctionType = Io;
  a.TSImportEqualsDeclaration = uh;
  a.TSImportType = lh;
  a.TSIndexSignature = mo;
  a.TSIndexedAccessType = Qo;
  a.TSInferType = zo;
  a.TSInstantiationExpression = ah;
  a.TSInterfaceBody = eh;
  a.TSInterfaceDeclaration = ih;
  a.TSIntersectionType = $o;
  a.TSIntrinsicKeyword = Co;
  a.TSLiteralType = Zo;
  a.TSMappedType = Go;
  a.TSMethodSignature = fo;
  a.TSModuleBlock = ch;
  a.TSModuleDeclaration = ph;
  a.TSNamedTupleMember = Uo;
  a.TSNamespaceExportDeclaration = Th;
  a.TSNeverKeyword = Po;
  a.TSNonNullExpression = mh;
  a.TSNullKeyword = Ao;
  a.TSNumberKeyword = wo;
  a.TSObjectKeyword = _o;
  a.TSOptionalType = Ro;
  a.TSParameterProperty = ro;
  a.TSParenthesizedType = Vo;
  a.TSPropertySignature = lo;
  a.TSQualifiedName = ho;
  a.TSRestType = Wo;
  a.TSStringKeyword = go;
  a.TSSymbolKeyword = bo;
  a.TSThisType = vo;
  a.TSTupleType = Jo;
  a.TSTypeAliasDeclaration = sh;
  a.TSTypeAnnotation = eo;
  a.TSTypeAssertion = rh;
  a.TSTypeLiteral = jo;
  a.TSTypeOperator = Yo;
  a.TSTypeParameter = no;
  a.TSTypeParameterDeclaration = a.TSTypeParameterInstantiation = so;
  a.TSTypePredicate = No;
  a.TSTypeQuery = Lo;
  a.TSTypeReference = Do;
  a.TSUndefinedKeyword = Eo;
  a.TSUnionType = Ko;
  a.TSUnknownKeyword = So;
  a.TSVoidKeyword = ko;
  a.tsPrintBraced = Bo;
  a.tsPrintClassMemberModifiers = wh;
  a.tsPrintFunctionOrConstructorType = Mo;
  a.tsPrintPropertyOrMethodName = uo;
  a.tsPrintSignatureDeclarationBase = Sh;
  a.tsPrintTypeLiteralOrInterfaceBody = qo;
  a.tsPrintUnionOrIntersectionType = Xo;

  function eo(t) {
    this.token(":"), this.space(), t.optional && this.token("?"), this.print(t.typeAnnotation, t);
  }

  e(eo, "TSTypeAnnotation");

  function so(t, i) {
    this.token("<"), this.printList(t.params, t, {}), i.type === "ArrowFunctionExpression" && t.params.length === 1 && this.token(","), this.token(">");
  }

  e(so, "TSTypeParameterInstantiation");

  function no(t) {
    t.in && (this.word("in"), this.space()), t.out && (this.word("out"), this.space()), this.word(t.name), t.constraint && (this.space(), this.word("extends"), this.space(), this.print(t.constraint, t)), t.default && (this.space(), this.token("="), this.space(), this.print(t.default, t));
  }

  e(no, "TSTypeParameter");

  function ro(t) {
    t.accessibility && (this.word(t.accessibility), this.space()), t.readonly && (this.word("readonly"), this.space()), this._param(t.parameter);
  }

  e(ro, "TSParameterProperty");

  function ao(t) {
    t.declare && (this.word("declare"), this.space()), this._functionHead(t), this.token(";");
  }

  e(ao, "TSDeclareFunction");

  function oo(t) {
    this._classMethodHead(t), this.token(";");
  }

  e(oo, "TSDeclareMethod");

  function ho(t) {
    this.print(t.left, t), this.token("."), this.print(t.right, t);
  }

  e(ho, "TSQualifiedName");

  function po(t) {
    this.tsPrintSignatureDeclarationBase(t), this.token(";");
  }

  e(po, "TSCallSignatureDeclaration");

  function co(t) {
    this.word("new"), this.space(), this.tsPrintSignatureDeclarationBase(t), this.token(";");
  }

  e(co, "TSConstructSignatureDeclaration");

  function lo(t) {
    let {
      readonly: i,
      initializer: s
    } = t;
    i && (this.word("readonly"), this.space()), this.tsPrintPropertyOrMethodName(t), this.print(t.typeAnnotation, t), s && (this.space(), this.token("="), this.space(), this.print(s, t)), this.token(";");
  }

  e(lo, "TSPropertySignature");

  function uo(t) {
    t.computed && this.token("["), this.print(t.key, t), t.computed && this.token("]"), t.optional && this.token("?");
  }

  e(uo, "tsPrintPropertyOrMethodName");

  function fo(t) {
    let {
      kind: i
    } = t;
    (i === "set" || i === "get") && (this.word(i), this.space()), this.tsPrintPropertyOrMethodName(t), this.tsPrintSignatureDeclarationBase(t), this.token(";");
  }

  e(fo, "TSMethodSignature");

  function mo(t) {
    let {
      readonly: i,
      static: s
    } = t;
    s && (this.word("static"), this.space()), i && (this.word("readonly"), this.space()), this.token("["), this._parameters(t.parameters, t), this.token("]"), this.print(t.typeAnnotation, t), this.token(";");
  }

  e(mo, "TSIndexSignature");

  function yo() {
    this.word("any");
  }

  e(yo, "TSAnyKeyword");

  function To() {
    this.word("bigint");
  }

  e(To, "TSBigIntKeyword");

  function So() {
    this.word("unknown");
  }

  e(So, "TSUnknownKeyword");

  function wo() {
    this.word("number");
  }

  e(wo, "TSNumberKeyword");

  function _o() {
    this.word("object");
  }

  e(_o, "TSObjectKeyword");

  function xo() {
    this.word("boolean");
  }

  e(xo, "TSBooleanKeyword");

  function go() {
    this.word("string");
  }

  e(go, "TSStringKeyword");

  function bo() {
    this.word("symbol");
  }

  e(bo, "TSSymbolKeyword");

  function ko() {
    this.word("void");
  }

  e(ko, "TSVoidKeyword");

  function Eo() {
    this.word("undefined");
  }

  e(Eo, "TSUndefinedKeyword");

  function Ao() {
    this.word("null");
  }

  e(Ao, "TSNullKeyword");

  function Po() {
    this.word("never");
  }

  e(Po, "TSNeverKeyword");

  function Co() {
    this.word("intrinsic");
  }

  e(Co, "TSIntrinsicKeyword");

  function vo() {
    this.word("this");
  }

  e(vo, "TSThisType");

  function Io(t) {
    this.tsPrintFunctionOrConstructorType(t);
  }

  e(Io, "TSFunctionType");

  function Oo(t) {
    t.abstract && (this.word("abstract"), this.space()), this.word("new"), this.space(), this.tsPrintFunctionOrConstructorType(t);
  }

  e(Oo, "TSConstructorType");

  function Mo(t) {
    let {
      typeParameters: i
    } = t,
        s = t.parameters;
    this.print(i, t), this.token("("), this._parameters(s, t), this.token(")"), this.space(), this.token("=>"), this.space();
    let n = t.typeAnnotation;
    this.print(n.typeAnnotation, t);
  }

  e(Mo, "tsPrintFunctionOrConstructorType");

  function Do(t) {
    this.print(t.typeName, t), this.print(t.typeParameters, t);
  }

  e(Do, "TSTypeReference");

  function No(t) {
    t.asserts && (this.word("asserts"), this.space()), this.print(t.parameterName), t.typeAnnotation && (this.space(), this.word("is"), this.space(), this.print(t.typeAnnotation.typeAnnotation));
  }

  e(No, "TSTypePredicate");

  function Lo(t) {
    this.word("typeof"), this.space(), this.print(t.exprName), t.typeParameters && this.print(t.typeParameters, t);
  }

  e(Lo, "TSTypeQuery");

  function jo(t) {
    this.tsPrintTypeLiteralOrInterfaceBody(t.members, t);
  }

  e(jo, "TSTypeLiteral");

  function qo(t, i) {
    this.tsPrintBraced(t, i);
  }

  e(qo, "tsPrintTypeLiteralOrInterfaceBody");

  function Bo(t, i) {
    if (this.token("{"), t.length) {
      this.indent(), this.newline();

      for (let s of t) this.print(s, i), this.newline();

      this.dedent(), this.rightBrace();
    } else this.token("}");
  }

  e(Bo, "tsPrintBraced");

  function Fo(t) {
    this.print(t.elementType, t), this.token("[]");
  }

  e(Fo, "TSArrayType");

  function Jo(t) {
    this.token("["), this.printList(t.elementTypes, t), this.token("]");
  }

  e(Jo, "TSTupleType");

  function Ro(t) {
    this.print(t.typeAnnotation, t), this.token("?");
  }

  e(Ro, "TSOptionalType");

  function Wo(t) {
    this.token("..."), this.print(t.typeAnnotation, t);
  }

  e(Wo, "TSRestType");

  function Uo(t) {
    this.print(t.label, t), t.optional && this.token("?"), this.token(":"), this.space(), this.print(t.elementType, t);
  }

  e(Uo, "TSNamedTupleMember");

  function Ko(t) {
    this.tsPrintUnionOrIntersectionType(t, "|");
  }

  e(Ko, "TSUnionType");

  function $o(t) {
    this.tsPrintUnionOrIntersectionType(t, "&");
  }

  e($o, "TSIntersectionType");

  function Xo(t, i) {
    this.printJoin(t.types, t, {
      separator() {
        this.space(), this.token(i), this.space();
      }

    });
  }

  e(Xo, "tsPrintUnionOrIntersectionType");

  function Ho(t) {
    this.print(t.checkType), this.space(), this.word("extends"), this.space(), this.print(t.extendsType), this.space(), this.token("?"), this.space(), this.print(t.trueType), this.space(), this.token(":"), this.space(), this.print(t.falseType);
  }

  e(Ho, "TSConditionalType");

  function zo(t) {
    this.token("infer"), this.space(), this.print(t.typeParameter);
  }

  e(zo, "TSInferType");

  function Vo(t) {
    this.token("("), this.print(t.typeAnnotation, t), this.token(")");
  }

  e(Vo, "TSParenthesizedType");

  function Yo(t) {
    this.word(t.operator), this.space(), this.print(t.typeAnnotation, t);
  }

  e(Yo, "TSTypeOperator");

  function Qo(t) {
    this.print(t.objectType, t), this.token("["), this.print(t.indexType, t), this.token("]");
  }

  e(Qo, "TSIndexedAccessType");

  function Go(t) {
    let {
      nameType: i,
      optional: s,
      readonly: n,
      typeParameter: r
    } = t;
    this.token("{"), this.space(), n && (xi(this, n), this.word("readonly"), this.space()), this.token("["), this.word(r.name), this.space(), this.word("in"), this.space(), this.print(r.constraint, r), i && (this.space(), this.word("as"), this.space(), this.print(i, t)), this.token("]"), s && (xi(this, s), this.token("?")), this.token(":"), this.space(), this.print(t.typeAnnotation, t), this.space(), this.token("}");
  }

  e(Go, "TSMappedType");

  function xi(t, i) {
    i !== !0 && t.token(i);
  }

  e(xi, "tokenIfPlusMinus");

  function Zo(t) {
    this.print(t.literal, t);
  }

  e(Zo, "TSLiteralType");

  function th(t) {
    this.print(t.expression, t), this.print(t.typeParameters, t);
  }

  e(th, "TSExpressionWithTypeArguments");

  function ih(t) {
    let {
      declare: i,
      id: s,
      typeParameters: n,
      extends: r,
      body: o
    } = t;
    i && (this.word("declare"), this.space()), this.word("interface"), this.space(), this.print(s, t), this.print(n, t), r != null && r.length && (this.space(), this.word("extends"), this.space(), this.printList(r, t)), this.space(), this.print(o, t);
  }

  e(ih, "TSInterfaceDeclaration");

  function eh(t) {
    this.tsPrintTypeLiteralOrInterfaceBody(t.body, t);
  }

  e(eh, "TSInterfaceBody");

  function sh(t) {
    let {
      declare: i,
      id: s,
      typeParameters: n,
      typeAnnotation: r
    } = t;
    i && (this.word("declare"), this.space()), this.word("type"), this.space(), this.print(s, t), this.print(n, t), this.space(), this.token("="), this.space(), this.print(r, t), this.token(";");
  }

  e(sh, "TSTypeAliasDeclaration");

  function nh(t) {
    let {
      expression: i,
      typeAnnotation: s
    } = t;
    this.print(i, t), this.space(), this.word("as"), this.space(), this.print(s, t);
  }

  e(nh, "TSAsExpression");

  function rh(t) {
    let {
      typeAnnotation: i,
      expression: s
    } = t;
    this.token("<"), this.print(i, t), this.token(">"), this.space(), this.print(s, t);
  }

  e(rh, "TSTypeAssertion");

  function ah(t) {
    this.print(t.expression, t), this.print(t.typeParameters, t);
  }

  e(ah, "TSInstantiationExpression");

  function oh(t) {
    let {
      declare: i,
      const: s,
      id: n,
      members: r
    } = t;
    i && (this.word("declare"), this.space()), s && (this.word("const"), this.space()), this.word("enum"), this.space(), this.print(n, t), this.space(), this.tsPrintBraced(r, t);
  }

  e(oh, "TSEnumDeclaration");

  function hh(t) {
    let {
      id: i,
      initializer: s
    } = t;
    this.print(i, t), s && (this.space(), this.token("="), this.space(), this.print(s, t)), this.token(",");
  }

  e(hh, "TSEnumMember");

  function ph(t) {
    let {
      declare: i,
      id: s
    } = t;

    if (i && (this.word("declare"), this.space()), t.global || (this.word(s.type === "Identifier" ? "namespace" : "module"), this.space()), this.print(s, t), !t.body) {
      this.token(";");
      return;
    }

    let n = t.body;

    for (; n.type === "TSModuleDeclaration";) this.token("."), this.print(n.id, n), n = n.body;

    this.space(), this.print(n, t);
  }

  e(ph, "TSModuleDeclaration");

  function ch(t) {
    this.tsPrintBraced(t.body, t);
  }

  e(ch, "TSModuleBlock");

  function lh(t) {
    let {
      argument: i,
      qualifier: s,
      typeParameters: n
    } = t;
    this.word("import"), this.token("("), this.print(i, t), this.token(")"), s && (this.token("."), this.print(s, t)), n && this.print(n, t);
  }

  e(lh, "TSImportType");

  function uh(t) {
    let {
      isExport: i,
      id: s,
      moduleReference: n
    } = t;
    i && (this.word("export"), this.space()), this.word("import"), this.space(), this.print(s, t), this.space(), this.token("="), this.space(), this.print(n, t), this.token(";");
  }

  e(uh, "TSImportEqualsDeclaration");

  function fh(t) {
    this.token("require("), this.print(t.expression, t), this.token(")");
  }

  e(fh, "TSExternalModuleReference");

  function mh(t) {
    this.print(t.expression, t), this.token("!");
  }

  e(mh, "TSNonNullExpression");

  function yh(t) {
    this.word("export"), this.space(), this.token("="), this.space(), this.print(t.expression, t), this.token(";");
  }

  e(yh, "TSExportAssignment");

  function Th(t) {
    this.word("export"), this.space(), this.word("as"), this.space(), this.word("namespace"), this.space(), this.print(t.id, t);
  }

  e(Th, "TSNamespaceExportDeclaration");

  function Sh(t) {
    let {
      typeParameters: i
    } = t,
        s = t.parameters;
    this.print(i, t), this.token("("), this._parameters(s, t), this.token(")");
    let n = t.typeAnnotation;
    this.print(n, t);
  }

  e(Sh, "tsPrintSignatureDeclarationBase");

  function wh(t, i) {
    i && t.declare && (this.word("declare"), this.space()), t.accessibility && (this.word(t.accessibility), this.space()), t.static && (this.word("static"), this.space()), t.override && (this.word("override"), this.space()), t.abstract && (this.word("abstract"), this.space()), i && t.readonly && (this.word("readonly"), this.space());
  }

  e(wh, "tsPrintClassMemberModifiers");
});
var bi = S(p => {
  "use strict";

  Object.defineProperty(p, "__esModule", {
    value: !0
  });
  var Tt = ei();
  Object.keys(Tt).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === Tt[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return Tt[t];
      }
    });
  });
  var St = ai();
  Object.keys(St).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === St[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return St[t];
      }
    });
  });
  var wt = ci();
  Object.keys(wt).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === wt[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return wt[t];
      }
    });
  });

  var _t = li();

  Object.keys(_t).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === _t[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return _t[t];
      }
    });
  });
  var dt = ui();
  Object.keys(dt).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === dt[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return dt[t];
      }
    });
  });
  var xt = ut();
  Object.keys(xt).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === xt[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return xt[t];
      }
    });
  });
  var gt = mt();
  Object.keys(gt).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === gt[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return gt[t];
      }
    });
  });
  var bt = wi();
  Object.keys(bt).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === bt[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return bt[t];
      }
    });
  });

  var kt = _i();

  Object.keys(kt).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === kt[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return kt[t];
      }
    });
  });
  var Et = di();
  Object.keys(Et).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === Et[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return Et[t];
      }
    });
  });
  var At = gi();
  Object.keys(At).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === At[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return At[t];
      }
    });
  });
});
var Ei = S(Q => {
  "use strict";

  Object.defineProperty(Q, "__esModule", {
    value: !0
  });
  Q.default = void 0;

  var _h = Ot(),
      dh = ct(),
      xh = ___babel_types$,
      gh = bi(),
      {
    isProgram: bh,
    isFile: kh,
    isEmptyStatement: Eh
  } = xh,
      Ah = /e/i,
      Ph = /\.0+$/,
      Ch = /^0[box]/,
      ki = /^\s*[@#]__PURE__\s*$/,
      {
    needsParens: vh,
    needsWhitespaceAfter: Ih,
    needsWhitespaceBefore: Oh
  } = dh,
      O = class {
    constructor(i, s) {
      this.inForStatementInitCounter = 0, this._printStack = [], this._indent = 0, this._insideAux = !1, this._parenPushNewlineState = null, this._noLineTerminator = !1, this._printAuxAfterOnNextUserNode = !1, this._printedComments = new WeakSet(), this._endsWithInteger = !1, this._endsWithWord = !1, this.format = i, this._buf = new _h.default(s);
    }

    generate(i) {
      return this.print(i), this._maybeAddAuxComment(), this._buf.get();
    }

    indent() {
      this.format.compact || this.format.concise || this._indent++;
    }

    dedent() {
      this.format.compact || this.format.concise || this._indent--;
    }

    semicolon(i = !1) {
      this._maybeAddAuxComment(), this._append(";", !i);
    }

    rightBrace() {
      this.format.minified && this._buf.removeLastSemicolon(), this.token("}");
    }

    space(i = !1) {
      if (!this.format.compact) {
        if (i) this._space();else if (this._buf.hasContent()) {
          let s = this.getLastChar();
          s !== 32 && s !== 10 && this._space();
        }
      }
    }

    word(i) {
      (this._endsWithWord || this.endsWith(47) && i.charCodeAt(0) === 47) && this._space(), this._maybeAddAuxComment(), this._append(i), this._endsWithWord = !0;
    }

    number(i) {
      this.word(i), this._endsWithInteger = Number.isInteger(+i) && !Ch.test(i) && !Ah.test(i) && !Ph.test(i) && i.charCodeAt(i.length - 1) !== 46;
    }

    token(i) {
      let s = this.getLastChar(),
          n = i.charCodeAt(0);
      (i === "--" && s === 33 || n === 43 && s === 43 || n === 45 && s === 45 || n === 46 && this._endsWithInteger) && this._space(), this._maybeAddAuxComment(), this._append(i);
    }

    newline(i = 1) {
      if (this.format.retainLines || this.format.compact) return;

      if (this.format.concise) {
        this.space();
        return;
      }

      let s = this.endsWithCharAndNewline();
      if (s !== 10 && ((s === 123 || s === 58) && i--, !(i <= 0))) for (let n = 0; n < i; n++) this._newline();
    }

    endsWith(i) {
      return this.getLastChar() === i;
    }

    getLastChar() {
      return this._buf.getLastChar();
    }

    endsWithCharAndNewline() {
      return this._buf.endsWithCharAndNewline();
    }

    removeTrailingNewline() {
      this._buf.removeTrailingNewline();
    }

    exactSource(i, s) {
      this._catchUp("start", i), this._buf.exactSource(i, s);
    }

    source(i, s) {
      this._catchUp(i, s), this._buf.source(i, s);
    }

    withSource(i, s, n) {
      this._catchUp(i, s), this._buf.withSource(i, s, n);
    }

    _space() {
      this._append(" ", !0);
    }

    _newline() {
      this._append(`
`, !0);
    }

    _append(i, s = !1) {
      this._maybeAddParen(i), this._maybeIndent(i), s ? this._buf.queue(i) : this._buf.append(i), this._endsWithWord = !1, this._endsWithInteger = !1;
    }

    _maybeIndent(i) {
      this._indent && this.endsWith(10) && i.charCodeAt(0) !== 10 && this._buf.queueIndentation(this._getIndent());
    }

    _maybeAddParen(i) {
      let s = this._parenPushNewlineState;
      if (!s) return;
      let n;

      for (n = 0; n < i.length && i[n] === " "; n++);

      if (n === i.length) return;
      let r = i[n];

      if (r !== `
`) {
        if (r !== "/" || n + 1 === i.length) {
          this._parenPushNewlineState = null;
          return;
        }

        let o = i[n + 1];

        if (o === "*") {
          if (ki.test(i.slice(n + 2, i.length - 2))) return;
        } else if (o !== "/") {
          this._parenPushNewlineState = null;
          return;
        }
      }

      this.token("("), this.indent(), s.printed = !0;
    }

    _catchUp(i, s) {
      if (!this.format.retainLines) return;
      let n = s ? s[i] : null;

      if (n?.line != null) {
        let r = n.line - this._buf.getCurrentLine();

        for (let o = 0; o < r; o++) this._newline();
      }
    }

    _getIndent() {
      return this.format.indent.style.repeat(this._indent);
    }

    startTerminatorless(i = !1) {
      return i ? (this._noLineTerminator = !0, null) : this._parenPushNewlineState = {
        printed: !1
      };
    }

    endTerminatorless(i) {
      this._noLineTerminator = !1, i != null && i.printed && (this.dedent(), this.newline(), this.token(")"));
    }

    print(i, s) {
      if (!i) return;
      let n = this.format.concise;
      i._compact && (this.format.concise = !0);
      let r = this[i.type];
      if (!r) throw new ReferenceError(`unknown node of type ${JSON.stringify(i.type)} with constructor ${JSON.stringify(i?.constructor.name)}`);

      this._printStack.push(i);

      let o = this._insideAux;
      this._insideAux = !i.loc, this._maybeAddAuxComment(this._insideAux && !o);
      let c = vh(i, s, this._printStack);
      this.format.retainFunctionParens && i.type === "FunctionExpression" && i.extra && i.extra.parenthesized && (c = !0), c && this.token("("), this._printLeadingComments(i);
      let T = bh(i) || kh(i) ? null : i.loc;
      this.withSource("start", T, () => {
        r.call(this, i, s);
      }), this._printTrailingComments(i), c && this.token(")"), this._printStack.pop(), this.format.concise = n, this._insideAux = o;
    }

    _maybeAddAuxComment(i) {
      i && this._printAuxBeforeComment(), this._insideAux || this._printAuxAfterComment();
    }

    _printAuxBeforeComment() {
      if (this._printAuxAfterOnNextUserNode) return;
      this._printAuxAfterOnNextUserNode = !0;
      let i = this.format.auxiliaryCommentBefore;
      i && this._printComment({
        type: "CommentBlock",
        value: i
      });
    }

    _printAuxAfterComment() {
      if (!this._printAuxAfterOnNextUserNode) return;
      this._printAuxAfterOnNextUserNode = !1;
      let i = this.format.auxiliaryCommentAfter;
      i && this._printComment({
        type: "CommentBlock",
        value: i
      });
    }

    getPossibleRaw(i) {
      let s = i.extra;
      if (s && s.raw != null && s.rawValue != null && i.value === s.rawValue) return s.raw;
    }

    printJoin(i, s, n = {}) {
      if (!(i != null && i.length)) return;
      n.indent && this.indent();
      let r = {
        addNewlines: n.addNewlines
      };

      for (let o = 0; o < i.length; o++) {
        let c = i[o];
        !c || (n.statement && this._printNewline(!0, c, s, r), this.print(c, s), n.iterator && n.iterator(c, o), n.separator && o < i.length - 1 && n.separator.call(this), n.statement && this._printNewline(!1, c, s, r));
      }

      n.indent && this.dedent();
    }

    printAndIndentOnComments(i, s) {
      let n = i.leadingComments && i.leadingComments.length > 0;
      n && this.indent(), this.print(i, s), n && this.dedent();
    }

    printBlock(i) {
      let s = i.body;
      Eh(s) || this.space(), this.print(s, i);
    }

    _printTrailingComments(i) {
      this._printComments(this._getComments(!1, i));
    }

    _printLeadingComments(i) {
      this._printComments(this._getComments(!0, i), !0);
    }

    printInnerComments(i, s = !0) {
      var n;
      !((n = i.innerComments) != null && n.length) || (s && this.indent(), this._printComments(i.innerComments), s && this.dedent());
    }

    printSequence(i, s, n = {}) {
      return n.statement = !0, this.printJoin(i, s, n);
    }

    printList(i, s, n = {}) {
      return n.separator == null && (n.separator = Dh), this.printJoin(i, s, n);
    }

    _printNewline(i, s, n, r) {
      if (this.format.retainLines || this.format.compact) return;

      if (this.format.concise) {
        this.space();
        return;
      }

      let o = 0;
      this._buf.hasContent() && (i || o++, r.addNewlines && (o += r.addNewlines(i, s) || 0), (i ? Oh : Ih)(s, n) && o++), this.newline(Math.min(2, o));
    }

    _getComments(i, s) {
      return s && (i ? s.leadingComments : s.trailingComments) || [];
    }

    _printComment(i, s) {
      if (!this.format.shouldPrintComment(i.value) || i.ignore || this._printedComments.has(i)) return;

      this._printedComments.add(i);

      let n = i.type === "CommentBlock",
          r = n && !s && !this._noLineTerminator;
      r && this._buf.hasContent() && this.newline(1);
      let o = this.getLastChar();
      o !== 91 && o !== 123 && this.space();
      let c = !n && !this._noLineTerminator ? `//${i.value}
` : `/*${i.value}*/`;

      if (n && this.format.indent.adjustMultilineComment) {
        var T;
        let w = (T = i.loc) == null ? void 0 : T.start.column;

        if (w) {
          let Ci = new RegExp("\\n\\s{1," + w + "}", "g");
          c = c.replace(Ci, `
`);
        }

        let y = Math.max(this._getIndent().length, this.format.retainLines ? 0 : this._buf.getCurrentColumn());
        c = c.replace(/\n(?!$)/g, `
${" ".repeat(y)}`);
      }

      this.endsWith(47) && this._space(), this.withSource("start", i.loc, () => {
        this._append(c);
      }), r && this.newline(1);
    }

    _printComments(i, s) {
      if (!!(i != null && i.length)) if (s && i.length === 1 && ki.test(i[0].value)) this._printComment(i[0], this._buf.hasContent() && !this.endsWith(10));else for (let n of i) this._printComment(n);
    }

    printAssertions(i) {
      var s;
      (s = i.assertions) != null && s.length && (this.space(), this.word("assert"), this.space(), this.token("{"), this.space(), this.printList(i.assertions, i), this.space(), this.token("}"));
    }

  };

  e(O, "Printer");
  Object.assign(O.prototype, gh);
  O.prototype.Noop = e(function () {}, "Noop");
  var Mh = O;
  Q.default = Mh;

  function Dh() {
    this.token(","), this.space();
  }

  e(Dh, "commaSeparator");
});
var Pt = S(q => {
  "use strict";

  Object.defineProperty(q, "__esModule", {
    value: !0
  });
  q.CodeGenerator = void 0;
  q.default = qh;
  var Nh = vt(),
      Lh = Ei(),
      j = class extends Lh.default {
    constructor(i, s = {}, n) {
      let r = jh(n, s),
          o = s.sourceMaps ? new Nh.default(s, n) : null;
      super(r, o), this.ast = void 0, this.ast = i;
    }

    generate() {
      return super.generate(this.ast);
    }

  };
  e(j, "Generator");

  function jh(t, i) {
    let s = {
      auxiliaryCommentBefore: i.auxiliaryCommentBefore,
      auxiliaryCommentAfter: i.auxiliaryCommentAfter,
      shouldPrintComment: i.shouldPrintComment,
      retainLines: i.retainLines,
      retainFunctionParens: i.retainFunctionParens,
      comments: i.comments == null || i.comments,
      compact: i.compact,
      minified: i.minified,
      concise: i.concise,
      indent: {
        adjustMultilineComment: !0,
        style: "  ",
        base: 0
      },
      decoratorsBeforeExport: !!i.decoratorsBeforeExport,
      jsescOption: Object.assign({
        quotes: "double",
        wrap: !0,
        minimal: !1
      }, i.jsescOption),
      recordAndTupleSyntaxType: i.recordAndTupleSyntaxType,
      topicToken: i.topicToken
    };
    return s.jsonCompatibleStrings = i.jsonCompatibleStrings, s.minified ? (s.compact = !0, s.shouldPrintComment = s.shouldPrintComment || (() => s.comments)) : s.shouldPrintComment = s.shouldPrintComment || (n => s.comments || n.indexOf("@license") >= 0 || n.indexOf("@preserve") >= 0), s.compact === "auto" && (s.compact = t.length > 5e5, s.compact && console.error(`[BABEL] Note: The code generator has deoptimised the styling of ${i.filename} as it exceeds the max of 500KB.`)), s.compact && (s.indent.adjustMultilineComment = !1), s;
  }

  e(jh, "normalizeOptions");
  var G = class {
    constructor(i, s, n) {
      this._generator = void 0, this._generator = new j(i, s, n);
    }

    generate() {
      return this._generator.generate();
    }

  };
  e(G, "CodeGenerator");
  q.CodeGenerator = G;

  function qh(t, i, s) {
    return new j(t, i, s).generate();
  }

  e(qh, "generate");
});
var Ai = Ct(Pt()),
    Pi = Ct(Pt()),
    {
  __esModule: ap,
  CodeGenerator: op
} = Pi,
    {
  default: Bh,
  ...Fh
} = Pi,
    hp = Ai.default ?? Bh ?? Fh;
export { op as CodeGenerator, ap as __esModule, hp as default };