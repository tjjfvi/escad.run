/* esm.sh - esbuild bundle(@babel/generator@7.19.3) esnext production */
import __jsesc$ from "/transpiled/https://esm.sh/v96/jsesc@2.5.2/esnext/jsesc.js";
import * as ___jridgewell_gen_mapping$ from "/transpiled/https://esm.sh/v96/@jridgewell/gen-mapping@0.3.2/esnext/gen-mapping.js";
import ___babel_types$ from "/transpiled/https://esm.sh/v96/@babel/types@7.19.3/esnext/types.js";
var Ai = Object.create;
var kt = Object.defineProperty;
var Pi = Object.getOwnPropertyDescriptor;
var vi = Object.getOwnPropertyNames;
var Ii = Object.getPrototypeOf,
    Oi = Object.prototype.hasOwnProperty;

var S = (t => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(t, {
  get: (i, e) => (typeof require < "u" ? require : i)[e]
}) : t)(function (t) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});

var _ = (t, i) => () => (i || t((i = {
  exports: {}
}).exports, i), i.exports);

var Mi = (t, i, e, s) => {
  if (i && typeof i == "object" || typeof i == "function") for (let r of vi(i)) !Oi.call(t, r) && r !== e && kt(t, r, {
    get: () => i[r],
    enumerable: !(s = Pi(i, r)) || s.enumerable
  });
  return t;
};

var Ni = (t, i, e) => (e = t != null ? Ai(Ii(t)) : {}, Mi(i || !t || !t.__esModule ? kt(e, "default", {
  value: t,
  enumerable: !0
}) : e, t));

var Et = _(L => {
  "use strict";

  Object.defineProperty(L, "__esModule", {
    value: !0
  });
  L.default = void 0;
  var A = ___jridgewell_gen_mapping$,
      V = class {
    constructor(i, e) {
      var s;
      this._map = void 0, this._rawMappings = void 0, this._sourceFileName = void 0, this._lastGenLine = 0, this._lastSourceLine = 0, this._lastSourceColumn = 0;
      let r = this._map = new A.GenMapping({
        sourceRoot: i.sourceRoot
      });
      this._sourceFileName = (s = i.sourceFileName) == null ? void 0 : s.replace(/\\/g, "/"), this._rawMappings = void 0, typeof e == "string" ? (0, A.setSourceContent)(r, this._sourceFileName, e) : typeof e == "object" && Object.keys(e).forEach(o => {
        (0, A.setSourceContent)(r, o.replace(/\\/g, "/"), e[o]);
      });
    }

    get() {
      return (0, A.toEncodedMap)(this._map);
    }

    getDecoded() {
      return (0, A.toDecodedMap)(this._map);
    }

    getRawMappings() {
      return this._rawMappings || (this._rawMappings = (0, A.allMappings)(this._map));
    }

    mark(i, e, s, r, o) {
      this._rawMappings = void 0, (0, A.maybeAddMapping)(this._map, {
        name: r,
        generated: i,
        source: e == null ? void 0 : o?.replace(/\\/g, "/") || this._sourceFileName,
        original: e == null ? void 0 : {
          line: e,
          column: s
        }
      });
    }

  };
  L.default = V;
});

var At = _(j => {
  "use strict";

  Object.defineProperty(j, "__esModule", {
    value: !0
  });
  j.default = void 0;

  function Di() {
    return {
      identifierName: void 0,
      line: void 0,
      column: void 0,
      filename: void 0
    };
  }

  var Q = class {
    constructor(i) {
      this._map = null, this._buf = "", this._str = "", this._appendCount = 0, this._last = 0, this._queue = [], this._queueCursor = 0, this._position = {
        line: 1,
        column: 0
      }, this._sourcePosition = Di(), this._disallowedPop = {
        identifierName: void 0,
        line: void 0,
        column: void 0,
        filename: void 0,
        objectReusable: !0
      }, this._map = i, this._allocQueue();
    }

    _allocQueue() {
      let i = this._queue;

      for (let e = 0; e < 16; e++) i.push({
        char: 0,
        repeat: 1,
        line: void 0,
        column: void 0,
        identifierName: void 0,
        filename: ""
      });
    }

    _pushQueue(i, e, s, r, o, h) {
      let y = this._queueCursor;
      y === this._queue.length && this._allocQueue();
      let f = this._queue[y];
      f.char = i, f.repeat = e, f.line = s, f.column = r, f.identifierName = o, f.filename = h, this._queueCursor++;
    }

    _popQueue() {
      if (this._queueCursor === 0) throw new Error("Cannot pop from empty queue");
      return this._queue[--this._queueCursor];
    }

    get() {
      this._flush();

      let i = this._map,
          e = {
        code: (this._buf + this._str).trimRight(),
        decodedMap: i?.getDecoded(),

        get map() {
          let s = i ? i.get() : null;
          return e.map = s, s;
        },

        set map(s) {
          Object.defineProperty(e, "map", {
            value: s,
            writable: !0
          });
        },

        get rawMappings() {
          let s = i?.getRawMappings();
          return e.rawMappings = s, s;
        },

        set rawMappings(s) {
          Object.defineProperty(e, "rawMappings", {
            value: s,
            writable: !0
          });
        }

      };
      return e;
    }

    append(i, e) {
      this._flush(), this._append(i, this._sourcePosition, e);
    }

    appendChar(i) {
      this._flush(), this._appendChar(i, 1, this._sourcePosition);
    }

    queue(i) {
      if (i === 10) for (; this._queueCursor !== 0;) {
        let s = this._queue[this._queueCursor - 1].char;
        if (s !== 32 && s !== 9) break;
        this._queueCursor--;
      }
      let e = this._sourcePosition;

      this._pushQueue(i, 1, e.line, e.column, e.identifierName, e.filename);
    }

    queueIndentation(i, e) {
      this._pushQueue(i, e, void 0, void 0, void 0, void 0);
    }

    _flush() {
      let i = this._queueCursor,
          e = this._queue;

      for (let s = 0; s < i; s++) {
        let r = e[s];

        this._appendChar(r.char, r.repeat, r);
      }

      this._queueCursor = 0;
    }

    _appendChar(i, e, s) {
      this._last = i, this._str += e > 1 ? String.fromCharCode(i).repeat(e) : String.fromCharCode(i), i !== 10 ? (this._mark(s.line, s.column, s.identifierName, s.filename), this._position.column += e) : (this._position.line++, this._position.column = 0);
    }

    _append(i, e, s) {
      let r = i.length;

      if (this._last = i.charCodeAt(r - 1), ++this._appendCount > 4096 ? (+this._str, this._buf += this._str, this._str = i, this._appendCount = 0) : this._str += i, !s && !this._map) {
        this._position.column += r;
        return;
      }

      let {
        column: o,
        identifierName: h,
        filename: y
      } = e,
          f = e.line,
          l = i.indexOf(`
`),
          m = 0;

      for (l !== 0 && this._mark(f, o, h, y); l !== -1;) this._position.line++, this._position.column = 0, m = l + 1, m < i.length && this._mark(++f, 0, h, y), l = i.indexOf(`
`, m);

      this._position.column += i.length - m;
    }

    _mark(i, e, s, r) {
      var o;
      (o = this._map) == null || o.mark(this._position, i, e, s, r);
    }

    removeTrailingNewline() {
      let i = this._queueCursor;
      i !== 0 && this._queue[i - 1].char === 10 && this._queueCursor--;
    }

    removeLastSemicolon() {
      let i = this._queueCursor;
      i !== 0 && this._queue[i - 1].char === 59 && this._queueCursor--;
    }

    getLastChar() {
      let i = this._queueCursor;
      return i !== 0 ? this._queue[i - 1].char : this._last;
    }

    endsWithCharAndNewline() {
      let i = this._queue,
          e = this._queueCursor;
      if (e !== 0) return i[e - 1].char !== 10 ? void 0 : e > 1 ? i[e - 2].char : this._last;
    }

    hasContent() {
      return this._queueCursor !== 0 || !!this._last;
    }

    exactSource(i, e) {
      if (!this._map) return e();
      this.source("start", i), e(), this.source("end", i), this._disallowPop("start", i);
    }

    source(i, e) {
      !e || this._normalizePosition(i, e, this._sourcePosition);
    }

    withSource(i, e, s) {
      if (!this._map) return s();
      let r = this._sourcePosition.line,
          o = this._sourcePosition.column,
          h = this._sourcePosition.filename,
          y = this._sourcePosition.identifierName;
      this.source(i, e), s(), (this._disallowedPop.objectReusable || this._disallowedPop.line !== r || this._disallowedPop.column !== o || this._disallowedPop.filename !== h) && (this._sourcePosition.line = r, this._sourcePosition.column = o, this._sourcePosition.filename = h, this._sourcePosition.identifierName = y, this._disallowedPop.objectReusable = !0);
    }

    _disallowPop(i, e) {
      if (!e) return;
      let s = this._disallowedPop;
      this._normalizePosition(i, e, s), s.objectReusable = !1;
    }

    _normalizePosition(i, e, s) {
      let r = e[i];
      s.identifierName = i === "start" && e.identifierName || void 0, r ? (s.line = r.line, s.column = r.column, s.filename = e.filename) : (s.line = null, s.column = null, s.filename = null);
    }

    getCurrentColumn() {
      let i = this._queue,
          e = -1,
          s = 0;

      for (let r = 0; r < this._queueCursor; r++) {
        let o = i[r];
        o.char === 10 && (e = r, s += o.repeat);
      }

      return e === -1 ? this._position.column + s : s - 1 - e;
    }

    getCurrentLine() {
      let i = 0,
          e = this._queue;

      for (let s = 0; s < this._queueCursor; s++) e[s].char === 10 && i++;

      return this._position.line + i;
    }

  };
  j.default = Q;
});

var Mt = _(F => {
  "use strict";

  Object.defineProperty(F, "__esModule", {
    value: !0
  });
  F.nodes = void 0;
  var qi = ___babel_types$,
      {
    FLIPPED_ALIAS_KEYS: Li,
    isArrayExpression: ji,
    isAssignmentExpression: vt,
    isBinary: It,
    isBlockStatement: Bi,
    isCallExpression: Ot,
    isFunction: I,
    isIdentifier: B,
    isLiteral: Fi,
    isMemberExpression: G,
    isObjectExpression: Ji,
    isOptionalCallExpression: Ri,
    isOptionalMemberExpression: Wi,
    isStringLiteral: Ki
  } = qi;

  function P(t, i) {
    return t && (G(t) || Wi(t) ? (P(t.object, i), t.computed && P(t.property, i)) : It(t) || vt(t) ? (P(t.left, i), P(t.right, i)) : Ot(t) || Ri(t) ? (i.hasCall = !0, P(t.callee, i)) : I(t) ? i.hasFunction = !0 : B(t) && (i.hasHelper = i.hasHelper || t.callee && b(t.callee))), i;
  }

  function Pt(t) {
    return P(t, {
      hasCall: !1,
      hasFunction: !1,
      hasHelper: !1
    });
  }

  function b(t) {
    return t ? G(t) ? b(t.object) || b(t.property) : B(t) ? t.name === "require" || t.name.charCodeAt(0) === 95 : Ot(t) ? b(t.callee) : It(t) || vt(t) ? B(t.left) && b(t.left) || b(t.right) : !1 : !1;
  }

  function Ui(t) {
    return Fi(t) || Ji(t) || ji(t) || B(t) || G(t);
  }

  var E = {
    AssignmentExpression(t) {
      let i = Pt(t.right);
      if (i.hasCall && i.hasHelper || i.hasFunction) return i.hasFunction ? 3 : 2;
    },

    SwitchCase(t, i) {
      return (!!t.consequent.length || i.cases[0] === t ? 1 : 0) | (!t.consequent.length && i.cases[i.cases.length - 1] === t ? 2 : 0);
    },

    LogicalExpression(t) {
      if (I(t.left) || I(t.right)) return 2;
    },

    Literal(t) {
      if (Ki(t) && t.value === "use strict") return 2;
    },

    CallExpression(t) {
      if (I(t.callee) || b(t)) return 3;
    },

    OptionalCallExpression(t) {
      if (I(t.callee)) return 3;
    },

    VariableDeclaration(t) {
      for (let i = 0; i < t.declarations.length; i++) {
        let e = t.declarations[i],
            s = b(e.id) && !Ui(e.init);

        if (!s && e.init) {
          let r = Pt(e.init);
          s = b(e.init) && r.hasCall || r.hasFunction;
        }

        if (s) return 3;
      }
    },

    IfStatement(t) {
      if (Bi(t.consequent)) return 3;
    }

  };
  F.nodes = E;

  E.ObjectProperty = E.ObjectTypeProperty = E.ObjectMethod = function (t, i) {
    if (i.properties[0] === t) return 1;
  };

  E.ObjectTypeCallProperty = function (t, i) {
    var e;
    if (i.callProperties[0] === t && !((e = i.properties) != null && e.length)) return 1;
  };

  E.ObjectTypeIndexer = function (t, i) {
    var e, s;
    if (i.indexers[0] === t && !((e = i.properties) != null && e.length) && !((s = i.callProperties) != null && s.length)) return 1;
  };

  E.ObjectTypeInternalSlot = function (t, i) {
    var e, s, r;
    if (i.internalSlots[0] === t && !((e = i.properties) != null && e.length) && !((s = i.callProperties) != null && s.length) && !((r = i.indexers) != null && r.length)) return 1;
  };

  [["Function", !0], ["Class", !0], ["Loop", !0], ["LabeledStatement", !0], ["SwitchStatement", !0], ["TryStatement", !0]].forEach(function ([t, i]) {
    [t].concat(Li[t] || []).forEach(function (e) {
      let s = i ? 3 : 0;

      E[e] = () => s;
    });
  });
});

var Vt = _(c => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: !0
  });
  c.ArrowFunctionExpression = Be;
  c.AssignmentExpression = Je;
  c.Binary = ke;
  c.BinaryExpression = Ne;
  c.ClassExpression = Le;
  c.ConditionalExpression = rt;
  c.DoExpression = be;
  c.FunctionExpression = je;
  c.FunctionTypeAnnotation = Se;
  c.Identifier = We;
  c.LogicalExpression = Re;
  c.NullableTypeAnnotation = we;
  c.ObjectExpression = xe;
  c.OptionalIndexedAccessType = Ae;
  c.OptionalCallExpression = c.OptionalMemberExpression = Fe;
  c.SequenceExpression = De;
  c.TSAsExpression = Pe;
  c.TSInferType = Oe;
  c.TSInstantiationExpression = Me;
  c.TSTypeAssertion = ve;
  c.TSIntersectionType = c.TSUnionType = Ie;
  c.UnaryLike = zt;
  c.IntersectionTypeAnnotation = c.UnionTypeAnnotation = Ee;
  c.UpdateExpression = ge;
  c.AwaitExpression = c.YieldExpression = qe;

  var $i = ___babel_types$,
      {
    isArrayTypeAnnotation: Y,
    isArrowFunctionExpression: Dt,
    isAssignmentExpression: qt,
    isAwaitExpression: Z,
    isBinary: R,
    isBinaryExpression: Lt,
    isUpdateExpression: Xi,
    isCallExpression: tt,
    isClass: Hi,
    isClassExpression: zi,
    isConditional: Vi,
    isConditionalExpression: jt,
    isExportDeclaration: Qi,
    isExportDefaultDeclaration: Gi,
    isExpressionStatement: Bt,
    isFor: Yi,
    isForInStatement: Ft,
    isForOfStatement: Jt,
    isForStatement: Rt,
    isFunctionExpression: Zi,
    isIfStatement: te,
    isIndexedAccessType: ie,
    isIntersectionTypeAnnotation: Wt,
    isLogicalExpression: J,
    isMemberExpression: it,
    isNewExpression: et,
    isNullableTypeAnnotation: ee,
    isObjectPattern: se,
    isOptionalCallExpression: Kt,
    isOptionalMemberExpression: Ut,
    isReturnStatement: re,
    isSequenceExpression: ne,
    isSwitchStatement: ae,
    isTSArrayType: $t,
    isTSAsExpression: oe,
    isTSInstantiationExpression: he,
    isTSIntersectionType: pe,
    isTSNonNullExpression: ce,
    isTSOptionalType: Xt,
    isTSRestType: ue,
    isTSTypeAssertion: le,
    isTSUnionType: fe,
    isTaggedTemplateExpression: me,
    isThrowStatement: ye,
    isTypeAnnotation: Ce,
    isUnaryLike: st,
    isUnionTypeAnnotation: Ht,
    isVariableDeclarator: Te,
    isWhileStatement: _e,
    isYieldExpression: de
  } = $i,
      Nt = {
    "||": 0,
    "??": 0,
    "|>": 0,
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
      W = (t, i) => Hi(i, {
    superClass: t
  }),
      O = (t, i) => (it(i) || Ut(i)) && i.object === t || (tt(i) || Kt(i) || et(i)) && i.callee === t || me(i) && i.tag === t || ce(i);

  function we(t, i) {
    return Y(i);
  }

  function Se(t, i, e) {
    if (!(e.length < 3)) return Ht(i) || Wt(i) || Y(i) || Ce(i) && Dt(e[e.length - 3]);
  }

  function ge(t, i) {
    return O(t, i) || W(t, i);
  }

  function xe(t, i, e) {
    return M(e, 3);
  }

  function be(t, i, e) {
    return !t.async && M(e, 1);
  }

  function ke(t, i) {
    if (t.operator === "**" && Lt(i, {
      operator: "**"
    })) return i.left === t;
    if (W(t, i) || O(t, i) || st(i) || Z(i)) return !0;

    if (R(i)) {
      let e = i.operator,
          s = Nt[e],
          r = t.operator,
          o = Nt[r];
      if (s === o && i.right === t && !J(i) || s > o) return !0;
    }
  }

  function Ee(t, i) {
    return Y(i) || ee(i) || Wt(i) || Ht(i);
  }

  function Ae(t, i) {
    return ie(i, {
      objectType: t
    });
  }

  function Pe() {
    return !0;
  }

  function ve() {
    return !0;
  }

  function Ie(t, i) {
    return $t(i) || Xt(i) || pe(i) || fe(i) || ue(i);
  }

  function Oe(t, i) {
    return $t(i) || Xt(i);
  }

  function Me(t, i) {
    return (tt(i) || Kt(i) || et(i) || he(i)) && !!i.typeParameters;
  }

  function Ne(t, i) {
    return t.operator === "in" && (Te(i) || Yi(i));
  }

  function De(t, i) {
    return !(Rt(i) || ye(i) || re(i) || te(i) && i.test === t || _e(i) && i.test === t || Ft(i) && i.right === t || ae(i) && i.discriminant === t || Bt(i) && i.expression === t);
  }

  function qe(t, i) {
    return R(i) || st(i) || O(t, i) || Z(i) && de(t) || jt(i) && t === i.test || W(t, i);
  }

  function Le(t, i, e) {
    return M(e, 5);
  }

  function zt(t, i) {
    return O(t, i) || Lt(i, {
      operator: "**",
      left: t
    }) || W(t, i);
  }

  function je(t, i, e) {
    return M(e, 5);
  }

  function Be(t, i) {
    return Qi(i) || rt(t, i);
  }

  function rt(t, i) {
    return st(i) || R(i) || jt(i, {
      test: t
    }) || Z(i) || le(i) || oe(i) ? !0 : zt(t, i);
  }

  function Fe(t, i) {
    return tt(i, {
      callee: t
    }) || it(i, {
      object: t
    });
  }

  function Je(t, i) {
    return se(t.left) ? !0 : rt(t, i);
  }

  function Re(t, i) {
    switch (t.operator) {
      case "||":
        return J(i) ? i.operator === "??" || i.operator === "&&" : !1;

      case "&&":
        return J(i, {
          operator: "??"
        });

      case "??":
        return J(i) && i.operator !== "??";
    }
  }

  function We(t, i, e) {
    var s;
    if ((s = t.extra) != null && s.parenthesized && qt(i, {
      left: t
    }) && (Zi(i.right) || zi(i.right)) && i.right.id == null) return !0;

    if (t.name === "let") {
      let r = it(i, {
        object: t,
        computed: !0
      }) || Ut(i, {
        object: t,
        computed: !0,
        optional: !1
      });
      return M(e, r ? 57 : 32);
    }

    return t.name === "async" && Jt(i) && t === i.left;
  }

  function M(t, i) {
    let e = i & 1,
        s = i & 2,
        r = i & 4,
        o = i & 8,
        h = i & 16,
        y = i & 32,
        f = t.length - 1;
    if (f <= 0) return;
    let l = t[f];
    f--;
    let m = t[f];

    for (; f >= 0;) {
      if (e && Bt(m, {
        expression: l
      }) || r && Gi(m, {
        declaration: l
      }) || s && Dt(m, {
        body: l
      }) || o && Rt(m, {
        init: l
      }) || h && Ft(m, {
        left: l
      }) || y && Jt(m, {
        left: l
      })) return !0;
      if (f > 0 && (O(l, m) && !et(m) || ne(m) && m.expressions[0] === l || Xi(m) && !m.prefix || Vi(m, {
        test: l
      }) || R(m, {
        left: l
      }) || qt(m, {
        left: l
      }))) l = m, f--, m = t[f];else return !1;
    }

    return !1;
  }
});

var at = _(v => {
  "use strict";

  Object.defineProperty(v, "__esModule", {
    value: !0
  });
  v.needsParens = is;
  v.needsWhitespace = nt;
  v.needsWhitespaceAfter = ts;
  v.needsWhitespaceBefore = Ze;
  var Ke = Mt(),
      Ue = Vt(),
      $e = ___babel_types$,
      {
    FLIPPED_ALIAS_KEYS: Xe,
    isCallExpression: He,
    isExpressionStatement: ze,
    isMemberExpression: Ve,
    isNewExpression: Qe
  } = $e;

  function Qt(t) {
    let i = {};

    function e(s, r) {
      let o = i[s];
      i[s] = o ? function (h, y, f) {
        let l = o(h, y, f);
        return l ?? r(h, y, f);
      } : r;
    }

    for (let s of Object.keys(t)) {
      let r = Xe[s];
      if (r) for (let o of r) e(o, t[s]);else e(s, t[s]);
    }

    return i;
  }

  var Ge = Qt(Ue),
      Ye = Qt(Ke.nodes);

  function Gt(t, i, e, s) {
    let r = t[i.type];
    return r ? r(i, e, s) : null;
  }

  function Yt(t) {
    return He(t) ? !0 : Ve(t) && Yt(t.object);
  }

  function nt(t, i, e) {
    if (!t) return !1;
    ze(t) && (t = t.expression);
    let s = Gt(Ye, t, i);
    return typeof s == "number" ? (s & e) !== 0 : !1;
  }

  function Ze(t, i) {
    return nt(t, i, 1);
  }

  function ts(t, i) {
    return nt(t, i, 2);
  }

  function is(t, i, e) {
    return i ? Qe(i) && i.callee === t && Yt(t) ? !0 : Gt(Ge, t, i, e) : !1;
  }
});

var Zt = _(N => {
  "use strict";

  Object.defineProperty(N, "__esModule", {
    value: !0
  });
  N.TaggedTemplateExpression = es;
  N.TemplateElement = ss;
  N.TemplateLiteral = rs;

  function es(t) {
    this.print(t.tag, t), this.print(t.typeParameters, t), this.print(t.quasi, t);
  }

  function ss(t, i) {
    let e = i.quasis[0] === t,
        s = i.quasis[i.quasis.length - 1] === t,
        r = (e ? "`" : "}") + t.value.raw + (s ? "`" : "${");
    this.token(r, !0);
  }

  function rs(t) {
    let i = t.quasis;

    for (let e = 0; e < i.length; e++) this.print(i[e], t), e + 1 < i.length && this.print(t.expressions[e], t);
  }
});

var ei = _(u => {
  "use strict";

  Object.defineProperty(u, "__esModule", {
    value: !0
  });
  u.LogicalExpression = u.BinaryExpression = u.AssignmentExpression = vs;
  u.AssignmentPattern = Ps;
  u.AwaitExpression = bs;
  u.BindExpression = Is;
  u.CallExpression = gs;
  u.ConditionalExpression = fs;
  u.Decorator = ds;
  u.DoExpression = cs;
  u.EmptyStatement = Es;
  u.ExpressionStatement = As;
  u.Import = xs;
  u.MemberExpression = Os;
  u.MetaProperty = Ms;
  u.ModuleExpression = qs;
  u.NewExpression = ms;
  u.OptionalCallExpression = Ss;
  u.OptionalMemberExpression = ws;
  u.ParenthesizedExpression = us;
  u.PrivateName = Ns;
  u.SequenceExpression = ys;
  u.Super = Ts;
  u.ThisExpression = Cs;
  u.UnaryExpression = ps;
  u.UpdateExpression = ls;
  u.V8IntrinsicIdentifier = Ds;
  u.YieldExpression = ks;
  var ns = ___babel_types$,
      as = at(),
      {
    isCallExpression: os,
    isLiteral: ti,
    isMemberExpression: ot,
    isNewExpression: hs
  } = ns;

  function ps(t) {
    t.operator === "void" || t.operator === "delete" || t.operator === "typeof" || t.operator === "throw" ? (this.word(t.operator), this.space()) : this.token(t.operator), this.print(t.argument, t);
  }

  function cs(t) {
    t.async && (this.word("async"), this.space()), this.word("do"), this.space(), this.print(t.body, t);
  }

  function us(t) {
    this.tokenChar(40), this.print(t.expression, t), this.tokenChar(41);
  }

  function ls(t) {
    t.prefix ? (this.token(t.operator), this.print(t.argument, t)) : (this.printTerminatorless(t.argument, t, !0), this.token(t.operator));
  }

  function fs(t) {
    this.print(t.test, t), this.space(), this.tokenChar(63), this.space(), this.print(t.consequent, t), this.space(), this.tokenChar(58), this.space(), this.print(t.alternate, t);
  }

  function ms(t, i) {
    this.word("new"), this.space(), this.print(t.callee, t), !(this.format.minified && t.arguments.length === 0 && !t.optional && !os(i, {
      callee: t
    }) && !ot(i) && !hs(i)) && (this.print(t.typeArguments, t), this.print(t.typeParameters, t), t.optional && this.token("?."), this.tokenChar(40), this.printList(t.arguments, t), this.tokenChar(41));
  }

  function ys(t) {
    this.printList(t.expressions, t);
  }

  function Cs() {
    this.word("this");
  }

  function Ts() {
    this.word("super");
  }

  function ii(t) {
    switch (t.type) {
      case "Identifier":
        return !0;

      case "MemberExpression":
        return !t.computed && t.property.type === "Identifier" && ii(t.object);

      default:
        return !1;
    }
  }

  function _s(t) {
    return t.type === "ParenthesizedExpression" ? !1 : !ii(t.type === "CallExpression" ? t.callee : t);
  }

  function ds(t) {
    this.tokenChar(64);
    let {
      expression: i
    } = t;
    _s(i) ? (this.tokenChar(40), this.print(i, t), this.tokenChar(41)) : this.print(i, t), this.newline();
  }

  function ws(t) {
    if (this.print(t.object, t), !t.computed && ot(t.property)) throw new TypeError("Got a MemberExpression for MemberExpression property");
    let i = t.computed;
    ti(t.property) && typeof t.property.value == "number" && (i = !0), t.optional && this.token("?."), i ? (this.tokenChar(91), this.print(t.property, t), this.tokenChar(93)) : (t.optional || this.tokenChar(46), this.print(t.property, t));
  }

  function Ss(t) {
    this.print(t.callee, t), this.print(t.typeParameters, t), t.optional && this.token("?."), this.print(t.typeArguments, t), this.tokenChar(40), this.printList(t.arguments, t), this.tokenChar(41);
  }

  function gs(t) {
    this.print(t.callee, t), this.print(t.typeArguments, t), this.print(t.typeParameters, t), this.tokenChar(40), this.printList(t.arguments, t), this.tokenChar(41);
  }

  function xs() {
    this.word("import");
  }

  function bs(t) {
    this.word("await"), t.argument && (this.space(), this.printTerminatorless(t.argument, t, !1));
  }

  function ks(t) {
    this.word("yield"), t.delegate && this.tokenChar(42), t.argument && (this.space(), this.printTerminatorless(t.argument, t, !1));
  }

  function Es() {
    this.semicolon(!0);
  }

  function As(t) {
    this.print(t.expression, t), this.semicolon();
  }

  function Ps(t) {
    this.print(t.left, t), t.left.optional && this.tokenChar(63), this.print(t.left.typeAnnotation, t), this.space(), this.tokenChar(61), this.space(), this.print(t.right, t);
  }

  function vs(t, i) {
    let e = this.inForStatementInitCounter && t.operator === "in" && !as.needsParens(t, i);
    e && this.tokenChar(40), this.print(t.left, t), this.space(), t.operator === "in" || t.operator === "instanceof" ? this.word(t.operator) : this.token(t.operator), this.space(), this.print(t.right, t), e && this.tokenChar(41);
  }

  function Is(t) {
    this.print(t.object, t), this.token("::"), this.print(t.callee, t);
  }

  function Os(t) {
    if (this.print(t.object, t), !t.computed && ot(t.property)) throw new TypeError("Got a MemberExpression for MemberExpression property");
    let i = t.computed;
    ti(t.property) && typeof t.property.value == "number" && (i = !0), i ? (this.tokenChar(91), this.print(t.property, t), this.tokenChar(93)) : (this.tokenChar(46), this.print(t.property, t));
  }

  function Ms(t) {
    this.print(t.meta, t), this.tokenChar(46), this.print(t.property, t);
  }

  function Ns(t) {
    this.tokenChar(35), this.print(t.id, t);
  }

  function Ds(t) {
    this.tokenChar(37), this.word(t.name);
  }

  function qs(t) {
    this.word("module"), this.space(), this.tokenChar(123), t.body.body.length === 0 ? this.tokenChar(125) : (this.newline(), this.printSequence(t.body.body, t, {
      indent: !0
    }), this.rightBrace());
  }
});

var ai = _(T => {
  "use strict";

  Object.defineProperty(T, "__esModule", {
    value: !0
  });
  T.BreakStatement = Hs;
  T.CatchClause = Zs;
  T.ContinueStatement = zs;
  T.DebuggerStatement = er;
  T.DoWhileStatement = Xs;
  T.ForOfStatement = T.ForInStatement = void 0;
  T.ForStatement = Ws;
  T.IfStatement = Rs;
  T.LabeledStatement = Gs;
  T.ReturnStatement = Vs;
  T.SwitchCase = ir;
  T.SwitchStatement = tr;
  T.ThrowStatement = Qs;
  T.TryStatement = Ys;
  T.VariableDeclaration = nr;
  T.VariableDeclarator = ar;
  T.WhileStatement = Ks;
  T.WithStatement = Js;
  var Ls = ___babel_types$,
      {
    isFor: si,
    isForStatement: js,
    isIfStatement: Bs,
    isStatement: Fs
  } = Ls;

  function Js(t) {
    this.word("with"), this.space(), this.tokenChar(40), this.print(t.object, t), this.tokenChar(41), this.printBlock(t);
  }

  function Rs(t) {
    this.word("if"), this.space(), this.tokenChar(40), this.print(t.test, t), this.tokenChar(41), this.space();
    let i = t.alternate && Bs(ri(t.consequent));
    i && (this.tokenChar(123), this.newline(), this.indent()), this.printAndIndentOnComments(t.consequent, t), i && (this.dedent(), this.newline(), this.tokenChar(125)), t.alternate && (this.endsWith(125) && this.space(), this.word("else"), this.space(), this.printAndIndentOnComments(t.alternate, t));
  }

  function ri(t) {
    let {
      body: i
    } = t;
    return Fs(i) === !1 ? t : ri(i);
  }

  function Ws(t) {
    this.word("for"), this.space(), this.tokenChar(40), this.inForStatementInitCounter++, this.print(t.init, t), this.inForStatementInitCounter--, this.tokenChar(59), t.test && (this.space(), this.print(t.test, t)), this.tokenChar(59), t.update && (this.space(), this.print(t.update, t)), this.tokenChar(41), this.printBlock(t);
  }

  function Ks(t) {
    this.word("while"), this.space(), this.tokenChar(40), this.print(t.test, t), this.tokenChar(41), this.printBlock(t);
  }

  function ni(t) {
    this.word("for"), this.space();
    let i = t.type === "ForOfStatement";
    i && t.await && (this.word("await"), this.space()), this.tokenChar(40), this.print(t.left, t), this.space(), this.word(i ? "of" : "in"), this.space(), this.print(t.right, t), this.tokenChar(41), this.printBlock(t);
  }

  var Us = ni;
  T.ForInStatement = Us;
  var $s = ni;
  T.ForOfStatement = $s;

  function Xs(t) {
    this.word("do"), this.space(), this.print(t.body, t), this.space(), this.word("while"), this.space(), this.tokenChar(40), this.print(t.test, t), this.tokenChar(41), this.semicolon();
  }

  function K(t, i, e, s) {
    i && (t.space(), t.printTerminatorless(i, e, s)), t.semicolon();
  }

  function Hs(t) {
    this.word("break"), K(this, t.label, t, !0);
  }

  function zs(t) {
    this.word("continue"), K(this, t.label, t, !0);
  }

  function Vs(t) {
    this.word("return"), K(this, t.argument, t, !1);
  }

  function Qs(t) {
    this.word("throw"), K(this, t.argument, t, !1);
  }

  function Gs(t) {
    this.print(t.label, t), this.tokenChar(58), this.space(), this.print(t.body, t);
  }

  function Ys(t) {
    this.word("try"), this.space(), this.print(t.block, t), this.space(), t.handlers ? this.print(t.handlers[0], t) : this.print(t.handler, t), t.finalizer && (this.space(), this.word("finally"), this.space(), this.print(t.finalizer, t));
  }

  function Zs(t) {
    this.word("catch"), this.space(), t.param && (this.tokenChar(40), this.print(t.param, t), this.print(t.param.typeAnnotation, t), this.tokenChar(41), this.space()), this.print(t.body, t);
  }

  function tr(t) {
    this.word("switch"), this.space(), this.tokenChar(40), this.print(t.discriminant, t), this.tokenChar(41), this.space(), this.tokenChar(123), this.printSequence(t.cases, t, {
      indent: !0,

      addNewlines(i, e) {
        if (!i && t.cases[t.cases.length - 1] === e) return -1;
      }

    }), this.tokenChar(125);
  }

  function ir(t) {
    t.test ? (this.word("case"), this.space(), this.print(t.test, t), this.tokenChar(58)) : (this.word("default"), this.tokenChar(58)), t.consequent.length && (this.newline(), this.printSequence(t.consequent, t, {
      indent: !0
    }));
  }

  function er() {
    this.word("debugger"), this.semicolon();
  }

  function sr() {
    if (this.tokenChar(44), this.newline(), this.endsWith(10)) for (let t = 0; t < 4; t++) this.space(!0);
  }

  function rr() {
    if (this.tokenChar(44), this.newline(), this.endsWith(10)) for (let t = 0; t < 6; t++) this.space(!0);
  }

  function nr(t, i) {
    t.declare && (this.word("declare"), this.space()), this.word(t.kind), this.space();
    let e = !1;
    if (!si(i)) for (let r of t.declarations) r.init && (e = !0);
    let s;

    if (e && (s = t.kind === "const" ? rr : sr), this.printList(t.declarations, t, {
      separator: s
    }), si(i)) {
      if (js(i)) {
        if (i.init === t) return;
      } else if (i.left === t) return;
    }

    this.semicolon();
  }

  function ar(t) {
    this.print(t.id, t), t.definite && this.tokenChar(33), this.print(t.id.typeAnnotation, t), t.init && (this.space(), this.tokenChar(61), this.space(), this.print(t.init, t));
  }
});

var oi = _(g => {
  "use strict";

  Object.defineProperty(g, "__esModule", {
    value: !0
  });
  g.ClassAccessorProperty = fr;
  g.ClassBody = ur;
  g.ClassExpression = g.ClassDeclaration = cr;
  g.ClassMethod = yr;
  g.ClassPrivateMethod = Cr;
  g.ClassPrivateProperty = mr;
  g.ClassProperty = lr;
  g.StaticBlock = _r;
  g._classMethodHead = Tr;
  var or = ___babel_types$,
      {
    isExportDefaultDeclaration: hr,
    isExportNamedDeclaration: pr
  } = or;

  function cr(t, i) {
    (!this.format.decoratorsBeforeExport || !hr(i) && !pr(i)) && this.printJoin(t.decorators, t), t.declare && (this.word("declare"), this.space()), t.abstract && (this.word("abstract"), this.space()), this.word("class"), this.printInnerComments(t), t.id && (this.space(), this.print(t.id, t)), this.print(t.typeParameters, t), t.superClass && (this.space(), this.word("extends"), this.space(), this.print(t.superClass, t), this.print(t.superTypeParameters, t)), t.implements && (this.space(), this.word("implements"), this.space(), this.printList(t.implements, t)), this.space(), this.print(t.body, t);
  }

  function ur(t) {
    this.tokenChar(123), this.printInnerComments(t), t.body.length === 0 ? this.tokenChar(125) : (this.newline(), this.indent(), this.printSequence(t.body, t), this.dedent(), this.endsWith(10) || this.newline(), this.rightBrace());
  }

  function lr(t) {
    this.printJoin(t.decorators, t), this.source("end", t.key.loc), this.tsPrintClassMemberModifiers(t), t.computed ? (this.tokenChar(91), this.print(t.key, t), this.tokenChar(93)) : (this._variance(t), this.print(t.key, t)), t.optional && this.tokenChar(63), t.definite && this.tokenChar(33), this.print(t.typeAnnotation, t), t.value && (this.space(), this.tokenChar(61), this.space(), this.print(t.value, t)), this.semicolon();
  }

  function fr(t) {
    this.printJoin(t.decorators, t), this.source("end", t.key.loc), this.tsPrintClassMemberModifiers(t), this.word("accessor"), this.printInnerComments(t), this.space(), t.computed ? (this.tokenChar(91), this.print(t.key, t), this.tokenChar(93)) : (this._variance(t), this.print(t.key, t)), t.optional && this.tokenChar(63), t.definite && this.tokenChar(33), this.print(t.typeAnnotation, t), t.value && (this.space(), this.tokenChar(61), this.space(), this.print(t.value, t)), this.semicolon();
  }

  function mr(t) {
    this.printJoin(t.decorators, t), t.static && (this.word("static"), this.space()), this.print(t.key, t), this.print(t.typeAnnotation, t), t.value && (this.space(), this.tokenChar(61), this.space(), this.print(t.value, t)), this.semicolon();
  }

  function yr(t) {
    this._classMethodHead(t), this.space(), this.print(t.body, t);
  }

  function Cr(t) {
    this._classMethodHead(t), this.space(), this.print(t.body, t);
  }

  function Tr(t) {
    this.printJoin(t.decorators, t), this.source("end", t.key.loc), this.tsPrintClassMemberModifiers(t), this._methodHead(t);
  }

  function _r(t) {
    this.word("static"), this.space(), this.tokenChar(123), t.body.length === 0 ? this.tokenChar(125) : (this.newline(), this.printSequence(t.body, t, {
      indent: !0
    }), this.rightBrace());
  }
});

var hi = _(x => {
  "use strict";

  Object.defineProperty(x, "__esModule", {
    value: !0
  });
  x.ArrowFunctionExpression = Pr;
  x.FunctionDeclaration = x.FunctionExpression = Ar;
  x._functionHead = Er;
  x._methodHead = br;
  x._param = xr;
  x._parameters = gr;
  x._params = Sr;
  x._predicate = kr;
  var dr = ___babel_types$,
      {
    isIdentifier: wr
  } = dr;

  function Sr(t) {
    this.print(t.typeParameters, t), this.tokenChar(40), this._parameters(t.params, t), this.tokenChar(41), this.print(t.returnType, t, t.type === "ArrowFunctionExpression");
  }

  function gr(t, i) {
    for (let e = 0; e < t.length; e++) this._param(t[e], i), e < t.length - 1 && (this.tokenChar(44), this.space());
  }

  function xr(t, i) {
    this.printJoin(t.decorators, t), this.print(t, i), t.optional && this.tokenChar(63), this.print(t.typeAnnotation, t);
  }

  function br(t) {
    let i = t.kind,
        e = t.key;
    (i === "get" || i === "set") && (this.word(i), this.space()), t.async && (this._catchUp("start", e.loc), this.word("async"), this.space()), (i === "method" || i === "init") && t.generator && this.tokenChar(42), t.computed ? (this.tokenChar(91), this.print(e, t), this.tokenChar(93)) : this.print(e, t), t.optional && this.tokenChar(63), this._params(t);
  }

  function kr(t) {
    t.predicate && (t.returnType || this.tokenChar(58), this.space(), this.print(t.predicate, t));
  }

  function Er(t) {
    t.async && (this.word("async"), this.space()), this.word("function"), t.generator && this.tokenChar(42), this.printInnerComments(t), this.space(), t.id && this.print(t.id, t), this._params(t), t.type !== "TSDeclareFunction" && this._predicate(t);
  }

  function Ar(t) {
    this._functionHead(t), this.space(), this.print(t.body, t);
  }

  function Pr(t) {
    t.async && (this.word("async"), this.space());
    let i = t.params[0];
    !this.format.retainLines && !this.format.auxiliaryCommentBefore && !this.format.auxiliaryCommentAfter && t.params.length === 1 && wr(i) && !vr(t, i) ? this.print(i, t) : this._params(t), this._predicate(t), this.space(), this.token("=>"), this.space(), this.print(t.body, t);
  }

  function vr(t, i) {
    var e, s;
    return !!(t.typeParameters || t.returnType || t.predicate || i.typeAnnotation || i.optional || (e = i.leadingComments) != null && e.length || (s = i.trailingComments) != null && s.length);
  }
});

var ht = _(w => {
  "use strict";

  Object.defineProperty(w, "__esModule", {
    value: !0
  });
  w.ExportAllDeclaration = Jr;
  w.ExportDefaultDeclaration = Wr;
  w.ExportDefaultSpecifier = jr;
  w.ExportNamedDeclaration = Rr;
  w.ExportNamespaceSpecifier = Fr;
  w.ExportSpecifier = Br;
  w.ImportAttribute = Ur;
  w.ImportDeclaration = Kr;
  w.ImportDefaultSpecifier = Lr;
  w.ImportNamespaceSpecifier = $r;
  w.ImportSpecifier = qr;
  var Ir = ___babel_types$,
      {
    isClassDeclaration: pi,
    isExportDefaultSpecifier: Or,
    isExportNamespaceSpecifier: Mr,
    isImportDefaultSpecifier: Nr,
    isImportNamespaceSpecifier: Dr,
    isStatement: ci
  } = Ir;

  function qr(t) {
    (t.importKind === "type" || t.importKind === "typeof") && (this.word(t.importKind), this.space()), this.print(t.imported, t), t.local && t.local.name !== t.imported.name && (this.space(), this.word("as"), this.space(), this.print(t.local, t));
  }

  function Lr(t) {
    this.print(t.local, t);
  }

  function jr(t) {
    this.print(t.exported, t);
  }

  function Br(t) {
    t.exportKind === "type" && (this.word("type"), this.space()), this.print(t.local, t), t.exported && t.local.name !== t.exported.name && (this.space(), this.word("as"), this.space(), this.print(t.exported, t));
  }

  function Fr(t) {
    this.tokenChar(42), this.space(), this.word("as"), this.space(), this.print(t.exported, t);
  }

  function Jr(t) {
    this.word("export"), this.space(), t.exportKind === "type" && (this.word("type"), this.space()), this.tokenChar(42), this.space(), this.word("from"), this.space(), this.print(t.source, t), this.printAssertions(t), this.semicolon();
  }

  function Rr(t) {
    if (this.format.decoratorsBeforeExport && pi(t.declaration) && this.printJoin(t.declaration.decorators, t), this.word("export"), this.space(), t.declaration) {
      let i = t.declaration;
      this.print(i, t), ci(i) || this.semicolon();
    } else {
      t.exportKind === "type" && (this.word("type"), this.space());
      let i = t.specifiers.slice(0),
          e = !1;

      for (;;) {
        let s = i[0];
        if (Or(s) || Mr(s)) e = !0, this.print(i.shift(), t), i.length && (this.tokenChar(44), this.space());else break;
      }

      (i.length || !i.length && !e) && (this.tokenChar(123), i.length && (this.space(), this.printList(i, t), this.space()), this.tokenChar(125)), t.source && (this.space(), this.word("from"), this.space(), this.print(t.source, t), this.printAssertions(t)), this.semicolon();
    }
  }

  function Wr(t) {
    this.format.decoratorsBeforeExport && pi(t.declaration) && this.printJoin(t.declaration.decorators, t), this.word("export"), this.space(), this.word("default"), this.space();
    let i = t.declaration;
    this.print(i, t), ci(i) || this.semicolon();
  }

  function Kr(t) {
    this.word("import"), this.space();
    let i = t.importKind === "type" || t.importKind === "typeof";
    i && (this.word(t.importKind), this.space());
    let e = t.specifiers.slice(0),
        s = !!e.length;

    for (; s;) {
      let o = e[0];
      if (Nr(o) || Dr(o)) this.print(e.shift(), t), e.length && (this.tokenChar(44), this.space());else break;
    }

    e.length ? (this.tokenChar(123), this.space(), this.printList(e, t), this.space(), this.tokenChar(125)) : i && !s && (this.tokenChar(123), this.tokenChar(125)), (s || i) && (this.space(), this.word("from"), this.space()), this.print(t.source, t), this.printAssertions(t);
    {
      var r;
      (r = t.attributes) != null && r.length && (this.space(), this.word("with"), this.space(), this.printList(t.attributes, t));
    }
    this.semicolon();
  }

  function Ur(t) {
    this.print(t.key), this.tokenChar(58), this.space(), this.print(t.value);
  }

  function $r(t) {
    this.tokenChar(42), this.space(), this.word("as"), this.space(), this.print(t.local, t);
  }
});

var ct = _(C => {
  "use strict";

  Object.defineProperty(C, "__esModule", {
    value: !0
  });
  C.ArgumentPlaceholder = Vr;
  C.ArrayPattern = C.ArrayExpression = tn;
  C.BigIntLiteral = pn;
  C.BooleanLiteral = nn;
  C.DecimalLiteral = cn;
  C.Identifier = zr;
  C.NullLiteral = an;
  C.NumericLiteral = on;
  C.ObjectPattern = C.ObjectExpression = Gr;
  C.ObjectMethod = Yr;
  C.ObjectProperty = Zr;
  C.PipelineBareFunction = fn;
  C.PipelinePrimaryTopicReference = mn;
  C.PipelineTopicExpression = ln;
  C.RecordExpression = en;
  C.RegExpLiteral = rn;
  C.SpreadElement = C.RestElement = Qr;
  C.StringLiteral = hn;
  C.TopicReference = un;
  C.TupleExpression = sn;
  var Xr = ___babel_types$,
      li = __jsesc$,
      {
    isAssignmentPattern: Hr,
    isIdentifier: pt
  } = Xr;

  function zr(t) {
    this.exactSource(t.loc, () => {
      this.word(t.name);
    });
  }

  function Vr() {
    this.tokenChar(63);
  }

  function Qr(t) {
    this.token("..."), this.print(t.argument, t);
  }

  function Gr(t) {
    let i = t.properties;
    this.tokenChar(123), this.printInnerComments(t), i.length && (this.space(), this.printList(i, t, {
      indent: !0,
      statement: !0
    }), this.space()), this.tokenChar(125);
  }

  function Yr(t) {
    this.printJoin(t.decorators, t), this._methodHead(t), this.space(), this.print(t.body, t);
  }

  function Zr(t) {
    if (this.printJoin(t.decorators, t), t.computed) this.tokenChar(91), this.print(t.key, t), this.tokenChar(93);else {
      if (Hr(t.value) && pt(t.key) && t.key.name === t.value.left.name) {
        this.print(t.value, t);
        return;
      }

      if (this.print(t.key, t), t.shorthand && pt(t.key) && pt(t.value) && t.key.name === t.value.name) return;
    }
    this.tokenChar(58), this.space(), this.print(t.value, t);
  }

  function tn(t) {
    let i = t.elements,
        e = i.length;
    this.tokenChar(91), this.printInnerComments(t);

    for (let s = 0; s < i.length; s++) {
      let r = i[s];
      r ? (s > 0 && this.space(), this.print(r, t), s < e - 1 && this.tokenChar(44)) : this.tokenChar(44);
    }

    this.tokenChar(93);
  }

  function en(t) {
    let i = t.properties,
        e,
        s;
    if (this.format.recordAndTupleSyntaxType === "bar") e = "{|", s = "|}";else {
      if (this.format.recordAndTupleSyntaxType !== "hash" && this.format.recordAndTupleSyntaxType != null) throw new Error(`The "recordAndTupleSyntaxType" generator option must be "bar" or "hash" (${JSON.stringify(this.format.recordAndTupleSyntaxType)} received).`);
      e = "#{", s = "}";
    }
    this.token(e), this.printInnerComments(t), i.length && (this.space(), this.printList(i, t, {
      indent: !0,
      statement: !0
    }), this.space()), this.token(s);
  }

  function sn(t) {
    let i = t.elements,
        e = i.length,
        s,
        r;
    if (this.format.recordAndTupleSyntaxType === "bar") s = "[|", r = "|]";else if (this.format.recordAndTupleSyntaxType === "hash") s = "#[", r = "]";else throw new Error(`${this.format.recordAndTupleSyntaxType} is not a valid recordAndTuple syntax type`);
    this.token(s), this.printInnerComments(t);

    for (let o = 0; o < i.length; o++) {
      let h = i[o];
      h && (o > 0 && this.space(), this.print(h, t), o < e - 1 && this.tokenChar(44));
    }

    this.token(r);
  }

  function rn(t) {
    this.word(`/${t.pattern}/${t.flags}`);
  }

  function nn(t) {
    this.word(t.value ? "true" : "false");
  }

  function an() {
    this.word("null");
  }

  function on(t) {
    let i = this.getPossibleRaw(t),
        e = this.format.jsescOption,
        s = t.value + "";
    e.numbers ? this.number(li(t.value, e)) : i == null ? this.number(s) : this.format.minified ? this.number(i.length < s.length ? i : s) : this.number(i);
  }

  function hn(t) {
    let i = this.getPossibleRaw(t);

    if (!this.format.minified && i !== void 0) {
      this.token(i);
      return;
    }

    let e = li(t.value, Object.assign(this.format.jsescOption, this.format.jsonCompatibleStrings && {
      json: !0
    }));
    return this.token(e);
  }

  function pn(t) {
    let i = this.getPossibleRaw(t);

    if (!this.format.minified && i !== void 0) {
      this.word(i);
      return;
    }

    this.word(t.value + "n");
  }

  function cn(t) {
    let i = this.getPossibleRaw(t);

    if (!this.format.minified && i !== void 0) {
      this.word(i);
      return;
    }

    this.word(t.value + "m");
  }

  var ui = new Set(["^^", "@@", "^", "%", "#"]);

  function un() {
    let {
      topicToken: t
    } = this.format;
    if (ui.has(t)) this.token(t);else {
      let i = JSON.stringify(t),
          e = Array.from(ui, s => JSON.stringify(s));
      throw new Error(`The "topicToken" generator option must be one of ${e.join(", ")} (${i} received instead).`);
    }
  }

  function ln(t) {
    this.print(t.expression, t);
  }

  function fn(t) {
    this.print(t.callee, t);
  }

  function mn() {
    this.tokenChar(35);
  }
});

var mi = _(a => {
  "use strict";

  Object.defineProperty(a, "__esModule", {
    value: !0
  });
  a.AnyTypeAnnotation = _n;
  a.ArrayTypeAnnotation = dn;
  a.BooleanLiteralTypeAnnotation = Sn;
  a.BooleanTypeAnnotation = wn;
  a.DeclareClass = xn;
  a.DeclareExportAllDeclaration = Dn;
  a.DeclareExportDeclaration = Nn;
  a.DeclareFunction = bn;
  a.DeclareInterface = An;
  a.DeclareModule = Pn;
  a.DeclareModuleExports = vn;
  a.DeclareOpaqueType = On;
  a.DeclareTypeAlias = In;
  a.DeclareVariable = Mn;
  a.DeclaredPredicate = En;
  a.EmptyTypeAnnotation = ea;
  a.EnumBooleanBody = Ln;
  a.EnumBooleanMember = Rn;
  a.EnumDeclaration = qn;
  a.EnumDefaultedMember = Jn;
  a.EnumNumberBody = jn;
  a.EnumNumberMember = Wn;
  a.EnumStringBody = Bn;
  a.EnumStringMember = Kn;
  a.EnumSymbolBody = Fn;
  a.ExistsTypeAnnotation = $n;
  a.FunctionTypeAnnotation = Xn;
  a.FunctionTypeParam = Hn;
  a.IndexedAccessType = Aa;
  a.InferredPredicate = kn;
  a.InterfaceDeclaration = Gn;
  a.GenericTypeAnnotation = a.ClassImplements = a.InterfaceExtends = zn;
  a.InterfaceTypeAnnotation = Zn;
  a.IntersectionTypeAnnotation = ta;
  a.MixedTypeAnnotation = ia;
  a.NullLiteralTypeAnnotation = gn;
  a.NullableTypeAnnotation = sa;
  Object.defineProperty(a, "NumberLiteralTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return fi.NumericLiteral;
    }
  });
  a.NumberTypeAnnotation = ra;
  a.ObjectTypeAnnotation = ma;
  a.ObjectTypeCallProperty = Ca;
  a.ObjectTypeIndexer = Ta;
  a.ObjectTypeInternalSlot = ya;
  a.ObjectTypeProperty = _a;
  a.ObjectTypeSpreadProperty = da;
  a.OpaqueType = fa;
  a.OptionalIndexedAccessType = Pa;
  a.QualifiedTypeIdentifier = wa;
  Object.defineProperty(a, "StringLiteralTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return fi.StringLiteral;
    }
  });
  a.StringTypeAnnotation = na;
  a.SymbolTypeAnnotation = Sa;
  a.ThisTypeAnnotation = aa;
  a.TupleTypeAnnotation = oa;
  a.TypeAlias = pa;
  a.TypeAnnotation = ca;
  a.TypeCastExpression = ba;
  a.TypeParameter = la;
  a.TypeParameterDeclaration = a.TypeParameterInstantiation = ua;
  a.TypeofTypeAnnotation = ha;
  a.UnionTypeAnnotation = xa;
  a.Variance = ka;
  a.VoidTypeAnnotation = Ea;
  a._interfaceish = Vn;
  a._variance = Qn;
  var yn = ___babel_types$,
      Cn = ht(),
      fi = ct(),
      {
    isDeclareExportDeclaration: U,
    isStatement: Tn
  } = yn;

  function _n() {
    this.word("any");
  }

  function dn(t) {
    this.print(t.elementType, t, !0), this.tokenChar(91), this.tokenChar(93);
  }

  function wn() {
    this.word("boolean");
  }

  function Sn(t) {
    this.word(t.value ? "true" : "false");
  }

  function gn() {
    this.word("null");
  }

  function xn(t, i) {
    U(i) || (this.word("declare"), this.space()), this.word("class"), this.space(), this._interfaceish(t);
  }

  function bn(t, i) {
    U(i) || (this.word("declare"), this.space()), this.word("function"), this.space(), this.print(t.id, t), this.print(t.id.typeAnnotation.typeAnnotation, t), t.predicate && (this.space(), this.print(t.predicate, t)), this.semicolon();
  }

  function kn() {
    this.tokenChar(37), this.word("checks");
  }

  function En(t) {
    this.tokenChar(37), this.word("checks"), this.tokenChar(40), this.print(t.value, t), this.tokenChar(41);
  }

  function An(t) {
    this.word("declare"), this.space(), this.InterfaceDeclaration(t);
  }

  function Pn(t) {
    this.word("declare"), this.space(), this.word("module"), this.space(), this.print(t.id, t), this.space(), this.print(t.body, t);
  }

  function vn(t) {
    this.word("declare"), this.space(), this.word("module"), this.tokenChar(46), this.word("exports"), this.print(t.typeAnnotation, t);
  }

  function In(t) {
    this.word("declare"), this.space(), this.TypeAlias(t);
  }

  function On(t, i) {
    U(i) || (this.word("declare"), this.space()), this.OpaqueType(t);
  }

  function Mn(t, i) {
    U(i) || (this.word("declare"), this.space()), this.word("var"), this.space(), this.print(t.id, t), this.print(t.id.typeAnnotation, t), this.semicolon();
  }

  function Nn(t) {
    this.word("declare"), this.space(), this.word("export"), this.space(), t.default && (this.word("default"), this.space()), Un.call(this, t);
  }

  function Dn(t) {
    this.word("declare"), this.space(), Cn.ExportAllDeclaration.call(this, t);
  }

  function qn(t) {
    let {
      id: i,
      body: e
    } = t;
    this.word("enum"), this.space(), this.print(i, t), this.print(e, t);
  }

  function $(t, i, e) {
    e && (t.space(), t.word("of"), t.space(), t.word(i)), t.space();
  }

  function X(t, i) {
    let {
      members: e
    } = i;
    t.token("{"), t.indent(), t.newline();

    for (let s of e) t.print(s, i), t.newline();

    i.hasUnknownMembers && (t.token("..."), t.newline()), t.dedent(), t.token("}");
  }

  function Ln(t) {
    let {
      explicitType: i
    } = t;
    $(this, "boolean", i), X(this, t);
  }

  function jn(t) {
    let {
      explicitType: i
    } = t;
    $(this, "number", i), X(this, t);
  }

  function Bn(t) {
    let {
      explicitType: i
    } = t;
    $(this, "string", i), X(this, t);
  }

  function Fn(t) {
    $(this, "symbol", !0), X(this, t);
  }

  function Jn(t) {
    let {
      id: i
    } = t;
    this.print(i, t), this.tokenChar(44);
  }

  function ut(t, i) {
    let {
      id: e,
      init: s
    } = i;
    t.print(e, i), t.space(), t.token("="), t.space(), t.print(s, i), t.token(",");
  }

  function Rn(t) {
    ut(this, t);
  }

  function Wn(t) {
    ut(this, t);
  }

  function Kn(t) {
    ut(this, t);
  }

  function Un(t) {
    if (t.declaration) {
      let i = t.declaration;
      this.print(i, t), Tn(i) || this.semicolon();
    } else this.tokenChar(123), t.specifiers.length && (this.space(), this.printList(t.specifiers, t), this.space()), this.tokenChar(125), t.source && (this.space(), this.word("from"), this.space(), this.print(t.source, t)), this.semicolon();
  }

  function $n() {
    this.tokenChar(42);
  }

  function Xn(t, i) {
    this.print(t.typeParameters, t), this.tokenChar(40), t.this && (this.word("this"), this.tokenChar(58), this.space(), this.print(t.this.typeAnnotation, t), (t.params.length || t.rest) && (this.tokenChar(44), this.space())), this.printList(t.params, t), t.rest && (t.params.length && (this.tokenChar(44), this.space()), this.token("..."), this.print(t.rest, t)), this.tokenChar(41), i && (i.type === "ObjectTypeCallProperty" || i.type === "ObjectTypeInternalSlot" || i.type === "DeclareFunction" || i.type === "ObjectTypeProperty" && i.method) ? this.tokenChar(58) : (this.space(), this.token("=>")), this.space(), this.print(t.returnType, t);
  }

  function Hn(t) {
    this.print(t.name, t), t.optional && this.tokenChar(63), t.name && (this.tokenChar(58), this.space()), this.print(t.typeAnnotation, t);
  }

  function zn(t) {
    this.print(t.id, t), this.print(t.typeParameters, t, !0);
  }

  function Vn(t) {
    var i;
    this.print(t.id, t), this.print(t.typeParameters, t), (i = t.extends) != null && i.length && (this.space(), this.word("extends"), this.space(), this.printList(t.extends, t)), t.mixins && t.mixins.length && (this.space(), this.word("mixins"), this.space(), this.printList(t.mixins, t)), t.implements && t.implements.length && (this.space(), this.word("implements"), this.space(), this.printList(t.implements, t)), this.space(), this.print(t.body, t);
  }

  function Qn(t) {
    t.variance && (t.variance.kind === "plus" ? this.tokenChar(43) : t.variance.kind === "minus" && this.tokenChar(45));
  }

  function Gn(t) {
    this.word("interface"), this.space(), this._interfaceish(t);
  }

  function Yn() {
    this.space(), this.tokenChar(38), this.space();
  }

  function Zn(t) {
    this.word("interface"), t.extends && t.extends.length && (this.space(), this.word("extends"), this.space(), this.printList(t.extends, t)), this.space(), this.print(t.body, t);
  }

  function ta(t) {
    this.printJoin(t.types, t, {
      separator: Yn
    });
  }

  function ia() {
    this.word("mixed");
  }

  function ea() {
    this.word("empty");
  }

  function sa(t) {
    this.tokenChar(63), this.print(t.typeAnnotation, t);
  }

  function ra() {
    this.word("number");
  }

  function na() {
    this.word("string");
  }

  function aa() {
    this.word("this");
  }

  function oa(t) {
    this.tokenChar(91), this.printList(t.types, t), this.tokenChar(93);
  }

  function ha(t) {
    this.word("typeof"), this.space(), this.print(t.argument, t);
  }

  function pa(t) {
    this.word("type"), this.space(), this.print(t.id, t), this.print(t.typeParameters, t), this.space(), this.tokenChar(61), this.space(), this.print(t.right, t), this.semicolon();
  }

  function ca(t) {
    this.tokenChar(58), this.space(), t.optional && this.tokenChar(63), this.print(t.typeAnnotation, t);
  }

  function ua(t) {
    this.tokenChar(60), this.printList(t.params, t, {}), this.tokenChar(62);
  }

  function la(t) {
    this._variance(t), this.word(t.name), t.bound && this.print(t.bound, t), t.default && (this.space(), this.tokenChar(61), this.space(), this.print(t.default, t));
  }

  function fa(t) {
    this.word("opaque"), this.space(), this.word("type"), this.space(), this.print(t.id, t), this.print(t.typeParameters, t), t.supertype && (this.tokenChar(58), this.space(), this.print(t.supertype, t)), t.impltype && (this.space(), this.tokenChar(61), this.space(), this.print(t.impltype, t)), this.semicolon();
  }

  function ma(t) {
    t.exact ? this.token("{|") : this.tokenChar(123);
    let i = [...t.properties, ...(t.callProperties || []), ...(t.indexers || []), ...(t.internalSlots || [])];
    i.length && (this.space(), this.printJoin(i, t, {
      addNewlines(e) {
        if (e && !i[0]) return 1;
      },

      indent: !0,
      statement: !0,
      iterator: () => {
        (i.length !== 1 || t.inexact) && (this.tokenChar(44), this.space());
      }
    }), this.space()), t.inexact && (this.indent(), this.token("..."), i.length && this.newline(), this.dedent()), t.exact ? this.token("|}") : this.tokenChar(125);
  }

  function ya(t) {
    t.static && (this.word("static"), this.space()), this.tokenChar(91), this.tokenChar(91), this.print(t.id, t), this.tokenChar(93), this.tokenChar(93), t.optional && this.tokenChar(63), t.method || (this.tokenChar(58), this.space()), this.print(t.value, t);
  }

  function Ca(t) {
    t.static && (this.word("static"), this.space()), this.print(t.value, t);
  }

  function Ta(t) {
    t.static && (this.word("static"), this.space()), this._variance(t), this.tokenChar(91), t.id && (this.print(t.id, t), this.tokenChar(58), this.space()), this.print(t.key, t), this.tokenChar(93), this.tokenChar(58), this.space(), this.print(t.value, t);
  }

  function _a(t) {
    t.proto && (this.word("proto"), this.space()), t.static && (this.word("static"), this.space()), (t.kind === "get" || t.kind === "set") && (this.word(t.kind), this.space()), this._variance(t), this.print(t.key, t), t.optional && this.tokenChar(63), t.method || (this.tokenChar(58), this.space()), this.print(t.value, t);
  }

  function da(t) {
    this.token("..."), this.print(t.argument, t);
  }

  function wa(t) {
    this.print(t.qualification, t), this.tokenChar(46), this.print(t.id, t);
  }

  function Sa() {
    this.word("symbol");
  }

  function ga() {
    this.space(), this.tokenChar(124), this.space();
  }

  function xa(t) {
    this.printJoin(t.types, t, {
      separator: ga
    });
  }

  function ba(t) {
    this.tokenChar(40), this.print(t.expression, t), this.print(t.typeAnnotation, t), this.tokenChar(41);
  }

  function ka(t) {
    t.kind === "plus" ? this.tokenChar(43) : this.tokenChar(45);
  }

  function Ea() {
    this.word("void");
  }

  function Aa(t) {
    this.print(t.objectType, t, !0), this.tokenChar(91), this.print(t.indexType, t), this.tokenChar(93);
  }

  function Pa(t) {
    this.print(t.objectType, t), t.optional && this.token("?."), this.tokenChar(91), this.print(t.indexType, t), this.tokenChar(93);
  }
});

var yi = _(k => {
  "use strict";

  Object.defineProperty(k, "__esModule", {
    value: !0
  });
  k.BlockStatement = Oa;
  k.Directive = Ma;
  k.DirectiveLiteral = qa;
  k.File = va;
  k.InterpreterDirective = La;
  k.Placeholder = ja;
  k.Program = Ia;

  function va(t) {
    t.program && this.print(t.program.interpreter, t), this.print(t.program, t);
  }

  function Ia(t) {
    this.printInnerComments(t, !1), this.printSequence(t.directives, t), t.directives && t.directives.length && this.newline(), this.printSequence(t.body, t);
  }

  function Oa(t) {
    var i;
    this.tokenChar(123), this.printInnerComments(t);
    let e = (i = t.directives) == null ? void 0 : i.length;
    t.body.length || e ? (this.newline(), this.printSequence(t.directives, t, {
      indent: !0
    }), e && this.newline(), this.printSequence(t.body, t, {
      indent: !0
    }), this.removeTrailingNewline(), this.source("end", t.loc), this.endsWith(10) || this.newline(), this.rightBrace()) : (this.source("end", t.loc), this.tokenChar(125));
  }

  function Ma(t) {
    this.print(t.value, t), this.semicolon();
  }

  var Na = /(?:^|[^\\])(?:\\\\)*'/,
      Da = /(?:^|[^\\])(?:\\\\)*"/;

  function qa(t) {
    let i = this.getPossibleRaw(t);

    if (!this.format.minified && i !== void 0) {
      this.token(i);
      return;
    }

    let {
      value: e
    } = t;
    if (!Da.test(e)) this.token(`"${e}"`);else if (!Na.test(e)) this.token(`'${e}'`);else throw new Error("Malformed AST: it is not possible to print a directive containing both unescaped single and double quotes.");
  }

  function La(t) {
    this.token(`#!${t.value}
`, !0);
  }

  function ja(t) {
    this.token("%%"), this.print(t.name), this.token("%%"), t.expectedNode === "Statement" && this.semicolon();
  }
});

var Ci = _(d => {
  "use strict";

  Object.defineProperty(d, "__esModule", {
    value: !0
  });
  d.JSXAttribute = Ba;
  d.JSXClosingElement = Va;
  d.JSXClosingFragment = Za;
  d.JSXElement = Xa;
  d.JSXEmptyExpression = Qa;
  d.JSXExpressionContainer = Ka;
  d.JSXFragment = Ga;
  d.JSXIdentifier = Fa;
  d.JSXMemberExpression = Ra;
  d.JSXNamespacedName = Ja;
  d.JSXOpeningElement = za;
  d.JSXOpeningFragment = Ya;
  d.JSXSpreadAttribute = Wa;
  d.JSXSpreadChild = Ua;
  d.JSXText = $a;

  function Ba(t) {
    this.print(t.name, t), t.value && (this.tokenChar(61), this.print(t.value, t));
  }

  function Fa(t) {
    this.word(t.name);
  }

  function Ja(t) {
    this.print(t.namespace, t), this.tokenChar(58), this.print(t.name, t);
  }

  function Ra(t) {
    this.print(t.object, t), this.tokenChar(46), this.print(t.property, t);
  }

  function Wa(t) {
    this.tokenChar(123), this.token("..."), this.print(t.argument, t), this.tokenChar(125);
  }

  function Ka(t) {
    this.tokenChar(123), this.print(t.expression, t), this.tokenChar(125);
  }

  function Ua(t) {
    this.tokenChar(123), this.token("..."), this.print(t.expression, t), this.tokenChar(125);
  }

  function $a(t) {
    let i = this.getPossibleRaw(t);
    i !== void 0 ? this.token(i, !0) : this.token(t.value, !0);
  }

  function Xa(t) {
    let i = t.openingElement;

    if (this.print(i, t), !i.selfClosing) {
      this.indent();

      for (let e of t.children) this.print(e, t);

      this.dedent(), this.print(t.closingElement, t);
    }
  }

  function Ha() {
    this.space();
  }

  function za(t) {
    this.tokenChar(60), this.print(t.name, t), this.print(t.typeParameters, t), t.attributes.length > 0 && (this.space(), this.printJoin(t.attributes, t, {
      separator: Ha
    })), t.selfClosing ? (this.space(), this.token("/>")) : this.tokenChar(62);
  }

  function Va(t) {
    this.token("</"), this.print(t.name, t), this.tokenChar(62);
  }

  function Qa(t) {
    this.printInnerComments(t);
  }

  function Ga(t) {
    this.print(t.openingFragment, t), this.indent();

    for (let i of t.children) this.print(i, t);

    this.dedent(), this.print(t.closingFragment, t);
  }

  function Ya() {
    this.tokenChar(60), this.tokenChar(62);
  }

  function Za() {
    this.token("</"), this.tokenChar(62);
  }
});

var di = _(n => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  n.TSAnyKeyword = fo;
  n.TSArrayType = Lo;
  n.TSAsExpression = th;
  n.TSBigIntKeyword = mo;
  n.TSBooleanKeyword = _o;
  n.TSCallSignatureDeclaration = oo;
  n.TSConditionalType = Ko;
  n.TSConstructSignatureDeclaration = ho;
  n.TSConstructorType = vo;
  n.TSDeclareFunction = ro;
  n.TSDeclareMethod = no;
  n.TSEnumDeclaration = sh;
  n.TSEnumMember = rh;
  n.TSExportAssignment = uh;
  n.TSExpressionWithTypeArguments = Qo;
  n.TSExternalModuleReference = ph;
  n.TSFunctionType = Po;
  n.TSImportEqualsDeclaration = hh;
  n.TSImportType = oh;
  n.TSIndexSignature = lo;
  n.TSIndexedAccessType = Ho;
  n.TSInferType = Uo;
  n.TSInstantiationExpression = eh;
  n.TSInterfaceBody = Yo;
  n.TSInterfaceDeclaration = Go;
  n.TSIntersectionType = Wo;
  n.TSIntrinsicKeyword = Eo;
  n.TSLiteralType = Vo;
  n.TSMappedType = zo;
  n.TSMethodSignature = uo;
  n.TSModuleBlock = ah;
  n.TSModuleDeclaration = nh;
  n.TSNamedTupleMember = Jo;
  n.TSNamespaceExportDeclaration = lh;
  n.TSNeverKeyword = ko;
  n.TSNonNullExpression = ch;
  n.TSNullKeyword = bo;
  n.TSNumberKeyword = Co;
  n.TSObjectKeyword = To;
  n.TSOptionalType = Bo;
  n.TSParameterProperty = so;
  n.TSParenthesizedType = $o;
  n.TSPropertySignature = po;
  n.TSQualifiedName = ao;
  n.TSRestType = Fo;
  n.TSStringKeyword = wo;
  n.TSSymbolKeyword = So;
  n.TSThisType = Ao;
  n.TSTupleType = jo;
  n.TSTypeAliasDeclaration = Zo;
  n.TSTypeAnnotation = to;
  n.TSTypeAssertion = ih;
  n.TSTypeLiteral = Do;
  n.TSTypeOperator = Xo;
  n.TSTypeParameter = eo;
  n.TSTypeParameterDeclaration = n.TSTypeParameterInstantiation = io;
  n.TSTypePredicate = Mo;
  n.TSTypeQuery = No;
  n.TSTypeReference = Oo;
  n.TSUndefinedKeyword = xo;
  n.TSUnionType = Ro;
  n.TSUnknownKeyword = yo;
  n.TSVoidKeyword = go;
  n.tsPrintClassMemberModifiers = mh;
  n.tsPrintFunctionOrConstructorType = Io;
  n.tsPrintPropertyOrMethodName = co;
  n.tsPrintSignatureDeclarationBase = fh;
  n.tsPrintTypeLiteralOrInterfaceBody = qo;

  function to(t) {
    this.tokenChar(58), this.space(), t.optional && this.tokenChar(63), this.print(t.typeAnnotation, t);
  }

  function io(t, i) {
    this.tokenChar(60), this.printList(t.params, t, {}), i.type === "ArrowFunctionExpression" && t.params.length === 1 && this.tokenChar(44), this.tokenChar(62);
  }

  function eo(t) {
    t.in && (this.word("in"), this.space()), t.out && (this.word("out"), this.space()), this.word(t.name), t.constraint && (this.space(), this.word("extends"), this.space(), this.print(t.constraint, t)), t.default && (this.space(), this.tokenChar(61), this.space(), this.print(t.default, t));
  }

  function so(t) {
    t.accessibility && (this.word(t.accessibility), this.space()), t.readonly && (this.word("readonly"), this.space()), this._param(t.parameter);
  }

  function ro(t) {
    t.declare && (this.word("declare"), this.space()), this._functionHead(t), this.tokenChar(59);
  }

  function no(t) {
    this._classMethodHead(t), this.tokenChar(59);
  }

  function ao(t) {
    this.print(t.left, t), this.tokenChar(46), this.print(t.right, t);
  }

  function oo(t) {
    this.tsPrintSignatureDeclarationBase(t), this.tokenChar(59);
  }

  function ho(t) {
    this.word("new"), this.space(), this.tsPrintSignatureDeclarationBase(t), this.tokenChar(59);
  }

  function po(t) {
    let {
      readonly: i,
      initializer: e
    } = t;
    i && (this.word("readonly"), this.space()), this.tsPrintPropertyOrMethodName(t), this.print(t.typeAnnotation, t), e && (this.space(), this.tokenChar(61), this.space(), this.print(e, t)), this.tokenChar(59);
  }

  function co(t) {
    t.computed && this.tokenChar(91), this.print(t.key, t), t.computed && this.tokenChar(93), t.optional && this.tokenChar(63);
  }

  function uo(t) {
    let {
      kind: i
    } = t;
    (i === "set" || i === "get") && (this.word(i), this.space()), this.tsPrintPropertyOrMethodName(t), this.tsPrintSignatureDeclarationBase(t), this.tokenChar(59);
  }

  function lo(t) {
    let {
      readonly: i,
      static: e
    } = t;
    e && (this.word("static"), this.space()), i && (this.word("readonly"), this.space()), this.tokenChar(91), this._parameters(t.parameters, t), this.tokenChar(93), this.print(t.typeAnnotation, t), this.tokenChar(59);
  }

  function fo() {
    this.word("any");
  }

  function mo() {
    this.word("bigint");
  }

  function yo() {
    this.word("unknown");
  }

  function Co() {
    this.word("number");
  }

  function To() {
    this.word("object");
  }

  function _o() {
    this.word("boolean");
  }

  function wo() {
    this.word("string");
  }

  function So() {
    this.word("symbol");
  }

  function go() {
    this.word("void");
  }

  function xo() {
    this.word("undefined");
  }

  function bo() {
    this.word("null");
  }

  function ko() {
    this.word("never");
  }

  function Eo() {
    this.word("intrinsic");
  }

  function Ao() {
    this.word("this");
  }

  function Po(t) {
    this.tsPrintFunctionOrConstructorType(t);
  }

  function vo(t) {
    t.abstract && (this.word("abstract"), this.space()), this.word("new"), this.space(), this.tsPrintFunctionOrConstructorType(t);
  }

  function Io(t) {
    let {
      typeParameters: i
    } = t,
        e = t.parameters;
    this.print(i, t), this.tokenChar(40), this._parameters(e, t), this.tokenChar(41), this.space(), this.token("=>"), this.space();
    let s = t.typeAnnotation;
    this.print(s.typeAnnotation, t);
  }

  function Oo(t) {
    this.print(t.typeName, t, !0), this.print(t.typeParameters, t, !0);
  }

  function Mo(t) {
    t.asserts && (this.word("asserts"), this.space()), this.print(t.parameterName), t.typeAnnotation && (this.space(), this.word("is"), this.space(), this.print(t.typeAnnotation.typeAnnotation));
  }

  function No(t) {
    this.word("typeof"), this.space(), this.print(t.exprName), t.typeParameters && this.print(t.typeParameters, t);
  }

  function Do(t) {
    this.tsPrintTypeLiteralOrInterfaceBody(t.members, t);
  }

  function qo(t, i) {
    lt(this, t, i);
  }

  function lt(t, i, e) {
    if (t.token("{"), i.length) {
      t.indent(), t.newline();

      for (let s of i) t.print(s, e), t.newline();

      t.dedent(), t.rightBrace();
    } else t.token("}");
  }

  function Lo(t) {
    this.print(t.elementType, t, !0), this.token("[]");
  }

  function jo(t) {
    this.tokenChar(91), this.printList(t.elementTypes, t), this.tokenChar(93);
  }

  function Bo(t) {
    this.print(t.typeAnnotation, t), this.tokenChar(63);
  }

  function Fo(t) {
    this.token("..."), this.print(t.typeAnnotation, t);
  }

  function Jo(t) {
    this.print(t.label, t), t.optional && this.tokenChar(63), this.tokenChar(58), this.space(), this.print(t.elementType, t);
  }

  function Ro(t) {
    _i(this, t, "|");
  }

  function Wo(t) {
    _i(this, t, "&");
  }

  function _i(t, i, e) {
    t.printJoin(i.types, i, {
      separator() {
        this.space(), this.token(e), this.space();
      }

    });
  }

  function Ko(t) {
    this.print(t.checkType), this.space(), this.word("extends"), this.space(), this.print(t.extendsType), this.space(), this.tokenChar(63), this.space(), this.print(t.trueType), this.space(), this.tokenChar(58), this.space(), this.print(t.falseType);
  }

  function Uo(t) {
    this.token("infer"), this.space(), this.print(t.typeParameter);
  }

  function $o(t) {
    this.tokenChar(40), this.print(t.typeAnnotation, t), this.tokenChar(41);
  }

  function Xo(t) {
    this.word(t.operator), this.space(), this.print(t.typeAnnotation, t);
  }

  function Ho(t) {
    this.print(t.objectType, t, !0), this.tokenChar(91), this.print(t.indexType, t), this.tokenChar(93);
  }

  function zo(t) {
    let {
      nameType: i,
      optional: e,
      readonly: s,
      typeParameter: r
    } = t;
    this.tokenChar(123), this.space(), s && (Ti(this, s), this.word("readonly"), this.space()), this.tokenChar(91), this.word(r.name), this.space(), this.word("in"), this.space(), this.print(r.constraint, r), i && (this.space(), this.word("as"), this.space(), this.print(i, t)), this.tokenChar(93), e && (Ti(this, e), this.tokenChar(63)), this.tokenChar(58), this.space(), this.print(t.typeAnnotation, t), this.space(), this.tokenChar(125);
  }

  function Ti(t, i) {
    i !== !0 && t.token(i);
  }

  function Vo(t) {
    this.print(t.literal, t);
  }

  function Qo(t) {
    this.print(t.expression, t), this.print(t.typeParameters, t);
  }

  function Go(t) {
    let {
      declare: i,
      id: e,
      typeParameters: s,
      extends: r,
      body: o
    } = t;
    i && (this.word("declare"), this.space()), this.word("interface"), this.space(), this.print(e, t), this.print(s, t), r != null && r.length && (this.space(), this.word("extends"), this.space(), this.printList(r, t)), this.space(), this.print(o, t);
  }

  function Yo(t) {
    this.tsPrintTypeLiteralOrInterfaceBody(t.body, t);
  }

  function Zo(t) {
    let {
      declare: i,
      id: e,
      typeParameters: s,
      typeAnnotation: r
    } = t;
    i && (this.word("declare"), this.space()), this.word("type"), this.space(), this.print(e, t), this.print(s, t), this.space(), this.tokenChar(61), this.space(), this.print(r, t), this.tokenChar(59);
  }

  function th(t) {
    let {
      expression: i,
      typeAnnotation: e
    } = t;
    this.print(i, t), this.space(), this.word("as"), this.space(), this.print(e, t);
  }

  function ih(t) {
    let {
      typeAnnotation: i,
      expression: e
    } = t;
    this.tokenChar(60), this.print(i, t), this.tokenChar(62), this.space(), this.print(e, t);
  }

  function eh(t) {
    this.print(t.expression, t), this.print(t.typeParameters, t);
  }

  function sh(t) {
    let {
      declare: i,
      const: e,
      id: s,
      members: r
    } = t;
    i && (this.word("declare"), this.space()), e && (this.word("const"), this.space()), this.word("enum"), this.space(), this.print(s, t), this.space(), lt(this, r, t);
  }

  function rh(t) {
    let {
      id: i,
      initializer: e
    } = t;
    this.print(i, t), e && (this.space(), this.tokenChar(61), this.space(), this.print(e, t)), this.tokenChar(44);
  }

  function nh(t) {
    let {
      declare: i,
      id: e
    } = t;

    if (i && (this.word("declare"), this.space()), t.global || (this.word(e.type === "Identifier" ? "namespace" : "module"), this.space()), this.print(e, t), !t.body) {
      this.tokenChar(59);
      return;
    }

    let s = t.body;

    for (; s.type === "TSModuleDeclaration";) this.tokenChar(46), this.print(s.id, s), s = s.body;

    this.space(), this.print(s, t);
  }

  function ah(t) {
    lt(this, t.body, t);
  }

  function oh(t) {
    let {
      argument: i,
      qualifier: e,
      typeParameters: s
    } = t;
    this.word("import"), this.tokenChar(40), this.print(i, t), this.tokenChar(41), e && (this.tokenChar(46), this.print(e, t)), s && this.print(s, t);
  }

  function hh(t) {
    let {
      isExport: i,
      id: e,
      moduleReference: s
    } = t;
    i && (this.word("export"), this.space()), this.word("import"), this.space(), this.print(e, t), this.space(), this.tokenChar(61), this.space(), this.print(s, t), this.tokenChar(59);
  }

  function ph(t) {
    this.token("require("), this.print(t.expression, t), this.tokenChar(41);
  }

  function ch(t) {
    this.print(t.expression, t), this.tokenChar(33);
  }

  function uh(t) {
    this.word("export"), this.space(), this.tokenChar(61), this.space(), this.print(t.expression, t), this.tokenChar(59);
  }

  function lh(t) {
    this.word("export"), this.space(), this.word("as"), this.space(), this.word("namespace"), this.space(), this.print(t.id, t);
  }

  function fh(t) {
    let {
      typeParameters: i
    } = t,
        e = t.parameters;
    this.print(i, t), this.tokenChar(40), this._parameters(e, t), this.tokenChar(41);
    let s = t.typeAnnotation;
    this.print(s, t);
  }

  function mh(t) {
    let i = t.type === "ClassAccessorProperty" || t.type === "ClassProperty";
    i && t.declare && (this.word("declare"), this.space()), t.accessibility && (this.word(t.accessibility), this.space()), t.static && (this.word("static"), this.space()), t.override && (this.word("override"), this.space()), t.abstract && (this.word("abstract"), this.space()), i && t.readonly && (this.word("readonly"), this.space());
  }
});

var wi = _(p => {
  "use strict";

  Object.defineProperty(p, "__esModule", {
    value: !0
  });
  var ft = Zt();
  Object.keys(ft).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === ft[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return ft[t];
      }
    });
  });
  var mt = ei();
  Object.keys(mt).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === mt[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return mt[t];
      }
    });
  });
  var yt = ai();
  Object.keys(yt).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === yt[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return yt[t];
      }
    });
  });
  var Ct = oi();
  Object.keys(Ct).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === Ct[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return Ct[t];
      }
    });
  });
  var Tt = hi();
  Object.keys(Tt).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === Tt[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return Tt[t];
      }
    });
  });

  var _t = ht();

  Object.keys(_t).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === _t[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return _t[t];
      }
    });
  });
  var dt = ct();
  Object.keys(dt).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === dt[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return dt[t];
      }
    });
  });
  var wt = mi();
  Object.keys(wt).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === wt[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return wt[t];
      }
    });
  });
  var St = yi();
  Object.keys(St).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === St[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return St[t];
      }
    });
  });
  var gt = Ci();
  Object.keys(gt).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === gt[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return gt[t];
      }
    });
  });
  var xt = di();
  Object.keys(xt).forEach(function (t) {
    t === "default" || t === "__esModule" || t in p && p[t] === xt[t] || Object.defineProperty(p, t, {
      enumerable: !0,
      get: function () {
        return xt[t];
      }
    });
  });
});

var gi = _(H => {
  "use strict";

  Object.defineProperty(H, "__esModule", {
    value: !0
  });
  H.default = void 0;
  var yh = At(),
      Ch = at(),
      Th = wi(),
      _h = /e/i,
      dh = /\.0+$/,
      wh = /^0[box]/,
      Si = /^\s*[@#]__PURE__\s*$/,
      {
    needsParens: Sh,
    needsWhitespaceAfter: gh,
    needsWhitespaceBefore: xh
  } = Ch,
      D = class {
    constructor(i, e) {
      this.inForStatementInitCounter = 0, this._printStack = [], this._indent = 0, this._indentChar = 0, this._indentRepeat = 0, this._insideAux = !1, this._parenPushNewlineState = null, this._noLineTerminator = !1, this._printAuxAfterOnNextUserNode = !1, this._printedComments = new Set(), this._endsWithInteger = !1, this._endsWithWord = !1, this.format = i, this._buf = new yh.default(e), this._indentChar = i.indent.style.charCodeAt(0), this._indentRepeat = i.indent.style.length;
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
      this._maybeAddAuxComment(), i ? this._appendChar(59) : this._queue(59);
    }

    rightBrace() {
      this.format.minified && this._buf.removeLastSemicolon(), this.tokenChar(125);
    }

    space(i = !1) {
      if (!this.format.compact) {
        if (i) this._space();else if (this._buf.hasContent()) {
          let e = this.getLastChar();
          e !== 32 && e !== 10 && this._space();
        }
      }
    }

    word(i) {
      (this._endsWithWord || i.charCodeAt(0) === 47 && this.endsWith(47)) && this._space(), this._maybeAddAuxComment(), this._append(i, !1), this._endsWithWord = !0;
    }

    number(i) {
      this.word(i), this._endsWithInteger = Number.isInteger(+i) && !wh.test(i) && !_h.test(i) && !dh.test(i) && i.charCodeAt(i.length - 1) !== 46;
    }

    token(i, e = !1) {
      let s = this.getLastChar(),
          r = i.charCodeAt(0);
      (s === 33 && i === "--" || r === 43 && s === 43 || r === 45 && s === 45 || r === 46 && this._endsWithInteger) && this._space(), this._maybeAddAuxComment(), this._append(i, e);
    }

    tokenChar(i) {
      let e = this.getLastChar();
      (i === 43 && e === 43 || i === 45 && e === 45 || i === 46 && this._endsWithInteger) && this._space(), this._maybeAddAuxComment(), this._appendChar(i);
    }

    newline(i = 1) {
      if (this.format.retainLines || this.format.compact) return;

      if (this.format.concise) {
        this.space();
        return;
      }

      let e = this.endsWithCharAndNewline();
      if (e !== 10 && ((e === 123 || e === 58) && i--, !(i <= 0))) for (let s = 0; s < i; s++) this._newline();
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

    exactSource(i, e) {
      this._catchUp("start", i), this._buf.exactSource(i, e);
    }

    source(i, e) {
      this._catchUp(i, e), this._buf.source(i, e);
    }

    withSource(i, e, s) {
      this._catchUp(i, e), this._buf.withSource(i, e, s);
    }

    _space() {
      this._queue(32);
    }

    _newline() {
      this._queue(10);
    }

    _append(i, e) {
      this._maybeAddParen(i), this._maybeIndent(i.charCodeAt(0)), this._buf.append(i, e), this._endsWithWord = !1, this._endsWithInteger = !1;
    }

    _appendChar(i) {
      this._maybeAddParenChar(i), this._maybeIndent(i), this._buf.appendChar(i), this._endsWithWord = !1, this._endsWithInteger = !1;
    }

    _queue(i) {
      this._maybeAddParenChar(i), this._maybeIndent(i), this._buf.queue(i), this._endsWithWord = !1, this._endsWithInteger = !1;
    }

    _maybeIndent(i) {
      this._indent && i !== 10 && this.endsWith(10) && this._buf.queueIndentation(this._indentChar, this._getIndent());
    }

    _maybeAddParenChar(i) {
      let e = this._parenPushNewlineState;

      if (!!e && i !== 32) {
        if (i !== 10) {
          this._parenPushNewlineState = null;
          return;
        }

        this.tokenChar(40), this.indent(), e.printed = !0;
      }
    }

    _maybeAddParen(i) {
      let e = this._parenPushNewlineState;
      if (!e) return;
      let s = i.length,
          r;

      for (r = 0; r < s && i.charCodeAt(r) === 32; r++);

      if (r === s) return;
      let o = i.charCodeAt(r);

      if (o !== 10) {
        if (o !== 47 || r + 1 === s) {
          this._parenPushNewlineState = null;
          return;
        }

        let h = i.charCodeAt(r + 1);

        if (h === 42) {
          if (Si.test(i.slice(r + 2, s - 2))) return;
        } else if (h !== 47) {
          this._parenPushNewlineState = null;
          return;
        }
      }

      this.tokenChar(40), this.indent(), e.printed = !0;
    }

    _catchUp(i, e) {
      if (!this.format.retainLines) return;
      let s = e ? e[i] : null;

      if (s?.line != null) {
        let r = s.line - this._buf.getCurrentLine();

        for (let o = 0; o < r; o++) this._newline();
      }
    }

    _getIndent() {
      return this._indentRepeat * this._indent;
    }

    printTerminatorless(i, e, s) {
      if (s) this._noLineTerminator = !0, this.print(i, e), this._noLineTerminator = !1;else {
        let r = {
          printed: !1
        };
        this._parenPushNewlineState = r, this.print(i, e), r.printed && (this.dedent(), this.newline(), this.tokenChar(41));
      }
    }

    print(i, e, s) {
      if (!i) return;
      let r = i.type,
          o = this.format,
          h = o.concise;
      i._compact && (o.concise = !0);
      let y = this[r];
      if (y === void 0) throw new ReferenceError(`unknown node of type ${JSON.stringify(r)} with constructor ${JSON.stringify(i.constructor.name)}`);

      this._printStack.push(i);

      let f = this._insideAux;
      this._insideAux = i.loc == null, this._maybeAddAuxComment(this._insideAux && !f);
      let l;
      o.retainFunctionParens && r === "FunctionExpression" && i.extra && i.extra.parenthesized ? l = !0 : l = Sh(i, e, this._printStack), l && this.tokenChar(40), this._printLeadingComments(i);
      let m = r === "Program" || r === "File" ? null : i.loc;
      this.withSource("start", m, y.bind(this, i, e)), s && !this._noLineTerminator ? (this._noLineTerminator = !0, this._printTrailingComments(i), this._noLineTerminator = !1) : this._printTrailingComments(i), l && this.tokenChar(41), this._printStack.pop(), o.concise = h, this._insideAux = f;
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
      let e = i.extra;
      if (e && e.raw != null && e.rawValue != null && i.value === e.rawValue) return e.raw;
    }

    printJoin(i, e, s = {}) {
      if (!(i != null && i.length)) return;
      s.indent && this.indent();
      let r = {
        addNewlines: s.addNewlines
      },
          o = i.length;

      for (let h = 0; h < o; h++) {
        let y = i[h];
        !y || (s.statement && this._printNewline(!0, y, e, r), this.print(y, e), s.iterator && s.iterator(y, h), s.separator && h < o - 1 && s.separator.call(this), s.statement && this._printNewline(!1, y, e, r));
      }

      s.indent && this.dedent();
    }

    printAndIndentOnComments(i, e) {
      let s = i.leadingComments && i.leadingComments.length > 0;
      s && this.indent(), this.print(i, e), s && this.dedent();
    }

    printBlock(i) {
      let e = i.body;
      e.type !== "EmptyStatement" && this.space(), this.print(e, i);
    }

    _printTrailingComments(i) {
      this._printComments(this._getComments(!1, i));
    }

    _printLeadingComments(i) {
      this._printComments(this._getComments(!0, i), !0);
    }

    printInnerComments(i, e = !0) {
      var s;
      !((s = i.innerComments) != null && s.length) || (e && this.indent(), this._printComments(i.innerComments), e && this.dedent());
    }

    printSequence(i, e, s = {}) {
      return s.statement = !0, this.printJoin(i, e, s);
    }

    printList(i, e, s = {}) {
      return s.separator == null && (s.separator = kh), this.printJoin(i, e, s);
    }

    _printNewline(i, e, s, r) {
      if (this.format.retainLines || this.format.compact) return;

      if (this.format.concise) {
        this.space();
        return;
      }

      let o = 0;
      this._buf.hasContent() && (i || o++, r.addNewlines && (o += r.addNewlines(i, e) || 0), (i ? xh : gh)(e, s) && o++), this.newline(Math.min(2, o));
    }

    _getComments(i, e) {
      return e && (i ? e.leadingComments : e.trailingComments) || null;
    }

    _printComment(i, e) {
      if (i.ignore || this._printedComments.has(i) || !this.format.shouldPrintComment(i.value)) return;

      this._printedComments.add(i);

      let s = i.type === "CommentBlock",
          r = s && !e && !this._noLineTerminator;
      r && this._buf.hasContent() && this.newline(1);
      let o = this.getLastChar();
      o !== 91 && o !== 123 && this.space();
      let h,
          y = !1;

      if (s) {
        if (h = `/*${i.value}*/`, this.format.indent.adjustMultilineComment) {
          var f;
          let l = (f = i.loc) == null ? void 0 : f.start.column;

          if (l) {
            let Ei = new RegExp("\\n\\s{1," + l + "}", "g");
            h = h.replace(Ei, `
`);
          }

          let m = Math.max(this._getIndent(), this.format.retainLines ? 0 : this._buf.getCurrentColumn());
          h = h.replace(/\n(?!$)/g, `
${" ".repeat(m)}`), y = !0;
        }
      } else this._noLineTerminator ? h = `/*${i.value}*/` : (h = `//${i.value}
`, y = !0);

      this.endsWith(47) && this._space(), this.withSource("start", i.loc, this._append.bind(this, h, y)), r && this.newline(1);
    }

    _printComments(i, e) {
      if (!!(i != null && i.length)) if (e && i.length === 1 && Si.test(i[0].value)) this._printComment(i[0], this._buf.hasContent() && !this.endsWith(10));else for (let s of i) this._printComment(s);
    }

    printAssertions(i) {
      var e;
      (e = i.assertions) != null && e.length && (this.space(), this.word("assert"), this.space(), this.tokenChar(123), this.space(), this.printList(i.assertions, i), this.space(), this.tokenChar(125));
    }

  };
  Object.assign(D.prototype, Th);

  D.prototype.Noop = function () {};

  var bh = D;
  H.default = bh;

  function kh() {
    this.tokenChar(44), this.space();
  }
});

var xi = _(q => {
  "use strict";

  Object.defineProperty(q, "__esModule", {
    value: !0
  });
  q.CodeGenerator = void 0;
  q.default = vh;
  var Eh = Et(),
      Ah = gi(),
      z = class extends Ah.default {
    constructor(i, e = {}, s) {
      let r = Ph(s, e),
          o = e.sourceMaps ? new Eh.default(e, s) : null;
      super(r, o), this.ast = void 0, this.ast = i;
    }

    generate() {
      return super.generate(this.ast);
    }

  };

  function Ph(t, i) {
    let e = {
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
        style: "  "
      },
      jsescOption: Object.assign({
        quotes: "double",
        wrap: !0,
        minimal: !1
      }, i.jsescOption),
      recordAndTupleSyntaxType: i.recordAndTupleSyntaxType,
      topicToken: i.topicToken
    };
    return e.decoratorsBeforeExport = !!i.decoratorsBeforeExport, e.jsonCompatibleStrings = i.jsonCompatibleStrings, e.minified ? (e.compact = !0, e.shouldPrintComment = e.shouldPrintComment || (() => e.comments)) : e.shouldPrintComment = e.shouldPrintComment || (s => e.comments || s.includes("@license") || s.includes("@preserve")), e.compact === "auto" && (e.compact = t.length > 5e5, e.compact && console.error(`[BABEL] Note: The code generator has deoptimised the styling of ${i.filename} as it exceeds the max of 500KB.`)), e.compact && (e.indent.adjustMultilineComment = !1), e;
  }

  var bt = class {
    constructor(i, e, s) {
      this._generator = void 0, this._generator = new z(i, e, s);
    }

    generate() {
      return this._generator.generate();
    }

  };
  q.CodeGenerator = bt;

  function vh(t, i, e) {
    return new z(t, i, e).generate();
  }
});

var ki = Ni(xi()),
    Gh = !0,
    {
  CodeGenerator: Yh
} = ki,
    {
  default: bi,
  ...Ih
} = ki,
    Zh = bi !== void 0 ? bi : Ih;
export { Yh as CodeGenerator, Gh as __esModule, Zh as default };