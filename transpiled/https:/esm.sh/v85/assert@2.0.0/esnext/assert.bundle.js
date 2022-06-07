/* esm.sh - esbuild bundle(assert@2.0.0) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v85/node_process.js";
import __util$ from "/transpiled/https://esm.sh/v85/util@0.12.4/esnext/util.bundle.js";
var an = Object.create;
var Ne = Object.defineProperty;
var cn = Object.getOwnPropertyDescriptor;
var un = Object.getOwnPropertyNames;
var fn = Object.getPrototypeOf,
    sn = Object.prototype.hasOwnProperty;

var i = (t, e) => Ne(t, "name", {
  value: e,
  configurable: !0
}),
    J = (t => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(t, {
  get: (e, r) => (typeof require != "undefined" ? require : e)[r]
}) : t)(function (t) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});

var h = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);

var ln = (t, e, r, n) => {
  if (e && typeof e == "object" || typeof e == "function") for (let o of un(e)) !sn.call(t, o) && o !== r && Ne(t, o, {
    get: () => e[o],
    enumerable: !(n = cn(e, o)) || n.enumerable
  });
  return t;
};

var ft = (t, e, r) => (r = t != null ? an(fn(t)) : {}, ln(e || !t || !t.__esModule ? Ne(r, "default", {
  value: t,
  enumerable: !0
}) : r, t));

var De = h((ai, pt) => {
  "use strict";

  function G(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? G = i(function (r) {
      return typeof r;
    }, "_typeof") : G = i(function (r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, "_typeof"), G(t);
  }

  i(G, "_typeof");

  function pn(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  i(pn, "_classCallCheck");

  function yn(t, e) {
    return e && (G(e) === "object" || typeof e == "function") ? e : gn(t);
  }

  i(yn, "_possibleConstructorReturn");

  function gn(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  i(gn, "_assertThisInitialized");

  function Fe(t) {
    return Fe = Object.setPrototypeOf ? Object.getPrototypeOf : i(function (r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, "_getPrototypeOf"), Fe(t);
  }

  i(Fe, "_getPrototypeOf");

  function hn(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && Te(t, e);
  }

  i(hn, "_inherits");

  function Te(t, e) {
    return Te = Object.setPrototypeOf || i(function (n, o) {
      return n.__proto__ = o, n;
    }, "_setPrototypeOf"), Te(t, e);
  }

  i(Te, "_setPrototypeOf");
  var lt = {},
      B,
      xe;

  function X(t, e, r) {
    r || (r = Error);

    function n(a, c, u) {
      return typeof e == "string" ? e : e(a, c, u);
    }

    i(n, "getMessage");

    var o = function (a) {
      hn(c, a);

      function c(u, f, s) {
        var p;
        return pn(this, c), p = yn(this, Fe(c).call(this, n(u, f, s))), p.code = t, p;
      }

      return i(c, "NodeError"), c;
    }(r);

    lt[t] = o;
  }

  i(X, "createErrorType");

  function st(t, e) {
    if (Array.isArray(t)) {
      var r = t.length;
      return t = t.map(function (n) {
        return String(n);
      }), r > 2 ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1] : r === 2 ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0]);
    } else return "of ".concat(e, " ").concat(String(t));
  }

  i(st, "oneOf");

  function dn(t, e, r) {
    return t.substr(!r || r < 0 ? 0 : +r, e.length) === e;
  }

  i(dn, "startsWith");

  function bn(t, e, r) {
    return (r === void 0 || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e;
  }

  i(bn, "endsWith");

  function vn(t, e, r) {
    return typeof r != "number" && (r = 0), r + e.length > t.length ? !1 : t.indexOf(e, r) !== -1;
  }

  i(vn, "includes");
  X("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError);
  X("ERR_INVALID_ARG_TYPE", function (t, e, r) {
    B === void 0 && (B = Q()), B(typeof t == "string", "'name' must be a string");
    var n;
    typeof e == "string" && dn(e, "not ") ? (n = "must not be", e = e.replace(/^not /, "")) : n = "must be";
    var o;
    if (bn(t, " argument")) o = "The ".concat(t, " ").concat(n, " ").concat(st(e, "type"));else {
      var a = vn(t, ".") ? "property" : "argument";
      o = 'The "'.concat(t, '" ').concat(a, " ").concat(n, " ").concat(st(e, "type"));
    }
    return o += ". Received type ".concat(G(r)), o;
  }, TypeError);
  X("ERR_INVALID_ARG_VALUE", function (t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "is invalid";
    xe === void 0 && (xe = __util$);
    var n = xe.inspect(e);
    return n.length > 128 && (n = "".concat(n.slice(0, 128), "...")), "The argument '".concat(t, "' ").concat(r, ". Received ").concat(n);
  }, TypeError, RangeError);
  X("ERR_INVALID_RETURN_VALUE", function (t, e, r) {
    var n;
    return r && r.constructor && r.constructor.name ? n = "instance of ".concat(r.constructor.name) : n = "type ".concat(G(r)), "Expected ".concat(t, ' to be returned from the "').concat(e, '"') + " function but got ".concat(n, ".");
  }, TypeError);
  X("ERR_MISSING_ARGS", function () {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];

    B === void 0 && (B = Q()), B(e.length > 0, "At least one arg needs to be specified");
    var n = "The ",
        o = e.length;

    switch (e = e.map(function (a) {
      return '"'.concat(a, '"');
    }), o) {
      case 1:
        n += "".concat(e[0], " argument");
        break;

      case 2:
        n += "".concat(e[0], " and ").concat(e[1], " arguments");
        break;

      default:
        n += e.slice(0, o - 1).join(", "), n += ", and ".concat(e[o - 1], " arguments");
        break;
    }

    return "".concat(n, " must be specified");
  }, TypeError);
  pt.exports.codes = lt;
});
var bt = h((ci, dt) => {
  "use strict";

  function mn(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e] != null ? arguments[e] : {},
          n = Object.keys(r);
      typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (o) {
        return Object.getOwnPropertyDescriptor(r, o).enumerable;
      }))), n.forEach(function (o) {
        En(t, o, r[o]);
      });
    }

    return t;
  }

  i(mn, "_objectSpread");

  function En(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  i(En, "_defineProperty");

  function Sn(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  i(Sn, "_classCallCheck");

  function yt(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
  }

  i(yt, "_defineProperties");

  function On(t, e, r) {
    return e && yt(t.prototype, e), r && yt(t, r), t;
  }

  i(On, "_createClass");

  function L(t, e) {
    return e && (O(e) === "object" || typeof e == "function") ? e : _e(t);
  }

  i(L, "_possibleConstructorReturn");

  function _e(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  i(_e, "_assertThisInitialized");

  function wn(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && te(t, e);
  }

  i(wn, "_inherits");

  function Ue(t) {
    var e = typeof Map == "function" ? new Map() : void 0;
    return Ue = i(function (n) {
      if (n === null || !Pn(n)) return n;
      if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");

      if (typeof e < "u") {
        if (e.has(n)) return e.get(n);
        e.set(n, o);
      }

      function o() {
        return le(n, arguments, I(this).constructor);
      }

      return i(o, "Wrapper"), o.prototype = Object.create(n.prototype, {
        constructor: {
          value: o,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), te(o, n);
    }, "_wrapNativeSuper"), Ue(t);
  }

  i(Ue, "_wrapNativeSuper");

  function An() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch {
      return !1;
    }
  }

  i(An, "isNativeReflectConstruct");

  function le(t, e, r) {
    return An() ? le = Reflect.construct : le = i(function (o, a, c) {
      var u = [null];
      u.push.apply(u, a);
      var f = Function.bind.apply(o, u),
          s = new f();
      return c && te(s, c.prototype), s;
    }, "_construct"), le.apply(null, arguments);
  }

  i(le, "_construct");

  function Pn(t) {
    return Function.toString.call(t).indexOf("[native code]") !== -1;
  }

  i(Pn, "_isNativeFunction");

  function te(t, e) {
    return te = Object.setPrototypeOf || i(function (n, o) {
      return n.__proto__ = o, n;
    }, "_setPrototypeOf"), te(t, e);
  }

  i(te, "_setPrototypeOf");

  function I(t) {
    return I = Object.setPrototypeOf ? Object.getPrototypeOf : i(function (r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, "_getPrototypeOf"), I(t);
  }

  i(I, "_getPrototypeOf");

  function O(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? O = i(function (r) {
      return typeof r;
    }, "_typeof") : O = i(function (r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, "_typeof"), O(t);
  }

  i(O, "_typeof");
  var jn = __util$,
      Me = jn.inspect,
      qn = De(),
      Rn = qn.codes.ERR_INVALID_ARG_TYPE;

  function gt(t, e, r) {
    return (r === void 0 || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e;
  }

  i(gt, "endsWith");

  function In(t, e) {
    if (e = Math.floor(e), t.length == 0 || e == 0) return "";
    var r = t.length * e;

    for (e = Math.floor(Math.log(e) / Math.log(2)); e;) t += t, e--;

    return t += t.substring(0, r - t.length), t;
  }

  i(In, "repeat");
  var j = "",
      Z = "",
      K = "",
      v = "",
      _ = {
    deepStrictEqual: "Expected values to be strictly deep-equal:",
    strictEqual: "Expected values to be strictly equal:",
    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
    deepEqual: "Expected values to be loosely deep-equal:",
    equal: "Expected values to be loosely equal:",
    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
    notEqual: 'Expected "actual" to be loosely unequal to:',
    notIdentical: "Values identical but not reference-equal:"
  },
      Nn = 10;

  function ht(t) {
    var e = Object.keys(t),
        r = Object.create(Object.getPrototypeOf(t));
    return e.forEach(function (n) {
      r[n] = t[n];
    }), Object.defineProperty(r, "message", {
      value: t.message
    }), r;
  }

  i(ht, "copyError");

  function ee(t) {
    return Me(t, {
      compact: !1,
      customInspect: !1,
      depth: 1e3,
      maxArrayLength: 1 / 0,
      showHidden: !1,
      breakLength: 1 / 0,
      showProxy: !1,
      sorted: !0,
      getters: !0
    });
  }

  i(ee, "inspectValue");

  function xn(t, e, r) {
    var n = "",
        o = "",
        a = 0,
        c = "",
        u = !1,
        f = ee(t),
        s = f.split(`
`),
        p = ee(e).split(`
`),
        l = 0,
        y = "";

    if (r === "strictEqual" && O(t) === "object" && O(e) === "object" && t !== null && e !== null && (r = "strictEqualObject"), s.length === 1 && p.length === 1 && s[0] !== p[0]) {
      var b = s[0].length + p[0].length;

      if (b <= Nn) {
        if ((O(t) !== "object" || t === null) && (O(e) !== "object" || e === null) && (t !== 0 || e !== 0)) return "".concat(_[r], `

`) + "".concat(s[0], " !== ").concat(p[0], `
`);
      } else if (r !== "strictEqualObject") {
        var m = __Process$.stderr && __Process$.stderr.isTTY ? __Process$.stderr.columns : 80;

        if (b < m) {
          for (; s[0][l] === p[0][l];) l++;

          l > 2 && (y = `
  `.concat(In(" ", l), "^"), l = 0);
        }
      }
    }

    for (var A = s[s.length - 1], at = p[p.length - 1]; A === at && (l++ < 2 ? c = `
  `.concat(A).concat(c) : n = A, s.pop(), p.pop(), !(s.length === 0 || p.length === 0));) A = s[s.length - 1], at = p[p.length - 1];

    var Re = Math.max(s.length, p.length);

    if (Re === 0) {
      var C = f.split(`
`);
      if (C.length > 30) for (C[26] = "".concat(j, "...").concat(v); C.length > 27;) C.pop();
      return "".concat(_.notIdentical, `

`).concat(C.join(`
`), `
`);
    }

    l > 3 && (c = `
`.concat(j, "...").concat(v).concat(c), u = !0), n !== "" && (c = `
  `.concat(n).concat(c), n = "");
    var P = 0,
        ct = _[r] + `
`.concat(Z, "+ actual").concat(v, " ").concat(K, "- expected").concat(v),
        ut = " ".concat(j, "...").concat(v, " Lines skipped");

    for (l = 0; l < Re; l++) {
      var R = l - a;
      if (s.length < l + 1) R > 1 && l > 2 && (R > 4 ? (o += `
`.concat(j, "...").concat(v), u = !0) : R > 3 && (o += `
  `.concat(p[l - 2]), P++), o += `
  `.concat(p[l - 1]), P++), a = l, n += `
`.concat(K, "-").concat(v, " ").concat(p[l]), P++;else if (p.length < l + 1) R > 1 && l > 2 && (R > 4 ? (o += `
`.concat(j, "...").concat(v), u = !0) : R > 3 && (o += `
  `.concat(s[l - 2]), P++), o += `
  `.concat(s[l - 1]), P++), a = l, o += `
`.concat(Z, "+").concat(v, " ").concat(s[l]), P++;else {
        var H = p[l],
            D = s[l],
            Ie = D !== H && (!gt(D, ",") || D.slice(0, -1) !== H);
        Ie && gt(H, ",") && H.slice(0, -1) === D && (Ie = !1, D += ","), Ie ? (R > 1 && l > 2 && (R > 4 ? (o += `
`.concat(j, "...").concat(v), u = !0) : R > 3 && (o += `
  `.concat(s[l - 2]), P++), o += `
  `.concat(s[l - 1]), P++), a = l, o += `
`.concat(Z, "+").concat(v, " ").concat(D), n += `
`.concat(K, "-").concat(v, " ").concat(H), P += 2) : (o += n, n = "", (R === 1 || l === 0) && (o += `
  `.concat(D), P++));
      }
      if (P > 20 && l < Re - 2) return "".concat(ct).concat(ut, `
`).concat(o, `
`).concat(j, "...").concat(v).concat(n, `
`) + "".concat(j, "...").concat(v);
    }

    return "".concat(ct).concat(u ? ut : "", `
`).concat(o).concat(n).concat(c).concat(y);
  }

  i(xn, "createErrDiff");

  var Fn = function (t) {
    wn(e, t);

    function e(r) {
      var n;
      if (Sn(this, e), O(r) !== "object" || r === null) throw new Rn("options", "Object", r);
      var o = r.message,
          a = r.operator,
          c = r.stackStartFn,
          u = r.actual,
          f = r.expected,
          s = Error.stackTraceLimit;
      if (Error.stackTraceLimit = 0, o != null) n = L(this, I(e).call(this, String(o)));else if (__Process$.stderr && __Process$.stderr.isTTY && (__Process$.stderr && __Process$.stderr.getColorDepth && __Process$.stderr.getColorDepth() !== 1 ? (j = "\x1B[34m", Z = "\x1B[32m", v = "\x1B[39m", K = "\x1B[31m") : (j = "", Z = "", v = "", K = "")), O(u) === "object" && u !== null && O(f) === "object" && f !== null && "stack" in u && u instanceof Error && "stack" in f && f instanceof Error && (u = ht(u), f = ht(f)), a === "deepStrictEqual" || a === "strictEqual") n = L(this, I(e).call(this, xn(u, f, a)));else if (a === "notDeepStrictEqual" || a === "notStrictEqual") {
        var p = _[a],
            l = ee(u).split(`
`);
        if (a === "notStrictEqual" && O(u) === "object" && u !== null && (p = _.notStrictEqualObject), l.length > 30) for (l[26] = "".concat(j, "...").concat(v); l.length > 27;) l.pop();
        l.length === 1 ? n = L(this, I(e).call(this, "".concat(p, " ").concat(l[0]))) : n = L(this, I(e).call(this, "".concat(p, `

`).concat(l.join(`
`), `
`)));
      } else {
        var y = ee(u),
            b = "",
            m = _[a];
        a === "notDeepEqual" || a === "notEqual" ? (y = "".concat(_[a], `

`).concat(y), y.length > 1024 && (y = "".concat(y.slice(0, 1021), "..."))) : (b = "".concat(ee(f)), y.length > 512 && (y = "".concat(y.slice(0, 509), "...")), b.length > 512 && (b = "".concat(b.slice(0, 509), "...")), a === "deepEqual" || a === "equal" ? y = "".concat(m, `

`).concat(y, `

should equal

`) : b = " ".concat(a, " ").concat(b)), n = L(this, I(e).call(this, "".concat(y).concat(b)));
      }
      return Error.stackTraceLimit = s, n.generatedMessage = !o, Object.defineProperty(_e(n), "name", {
        value: "AssertionError [ERR_ASSERTION]",
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), n.code = "ERR_ASSERTION", n.actual = u, n.expected = f, n.operator = a, Error.captureStackTrace && Error.captureStackTrace(_e(n), c), n.stack, n.name = "AssertionError", L(n);
    }

    return i(e, "AssertionError"), On(e, [{
      key: "toString",
      value: i(function () {
        return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
      }, "toString")
    }, {
      key: Me.custom,
      value: i(function (n, o) {
        return Me(this, mn({}, o, {
          customInspect: !1,
          depth: 0
        }));
      }, "value")
    }]), e;
  }(Ue(Error));

  dt.exports = Fn;
});
var Et = h((ui, mt) => {
  "use strict";

  function vt(t, e) {
    if (t == null) throw new TypeError("Cannot convert first argument to object");

    for (var r = Object(t), n = 1; n < arguments.length; n++) {
      var o = arguments[n];
      if (o != null) for (var a = Object.keys(Object(o)), c = 0, u = a.length; c < u; c++) {
        var f = a[c],
            s = Object.getOwnPropertyDescriptor(o, f);
        s !== void 0 && s.enumerable && (r[f] = o[f]);
      }
    }

    return r;
  }

  i(vt, "assign");

  function Tn() {
    Object.assign || Object.defineProperty(Object, "assign", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: vt
    });
  }

  i(Tn, "polyfill");
  mt.exports = {
    assign: vt,
    polyfill: Tn
  };
});
var $e = h((fi, Ot) => {
  "use strict";

  var St = Object.prototype.toString;
  Ot.exports = i(function (e) {
    var r = St.call(e),
        n = r === "[object Arguments]";
    return n || (n = r !== "[object Array]" && e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && St.call(e.callee) === "[object Function]"), n;
  }, "isArguments");
});
var xt = h((si, Nt) => {
  "use strict";

  var It;
  Object.keys || (re = Object.prototype.hasOwnProperty, Ge = Object.prototype.toString, wt = $e(), Be = Object.prototype.propertyIsEnumerable, At = !Be.call({
    toString: null
  }, "toString"), Pt = Be.call(function () {}, "prototype"), ne = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], pe = i(function (t) {
    var e = t.constructor;
    return e && e.prototype === t;
  }, "equalsConstructorPrototype"), jt = {
    $applicationCache: !0,
    $console: !0,
    $external: !0,
    $frame: !0,
    $frameElement: !0,
    $frames: !0,
    $innerHeight: !0,
    $innerWidth: !0,
    $onmozfullscreenchange: !0,
    $onmozfullscreenerror: !0,
    $outerHeight: !0,
    $outerWidth: !0,
    $pageXOffset: !0,
    $pageYOffset: !0,
    $parent: !0,
    $scrollLeft: !0,
    $scrollTop: !0,
    $scrollX: !0,
    $scrollY: !0,
    $self: !0,
    $webkitIndexedDB: !0,
    $webkitStorageInfo: !0,
    $window: !0
  }, qt = function () {
    if (typeof window > "u") return !1;

    for (var t in window) try {
      if (!jt["$" + t] && re.call(window, t) && window[t] !== null && typeof window[t] == "object") try {
        pe(window[t]);
      } catch {
        return !0;
      }
    } catch {
      return !0;
    }

    return !1;
  }(), Rt = i(function (t) {
    if (typeof window > "u" || !qt) return pe(t);

    try {
      return pe(t);
    } catch {
      return !1;
    }
  }, "equalsConstructorPrototypeIfNotBuggy"), It = i(function (e) {
    var r = e !== null && typeof e == "object",
        n = Ge.call(e) === "[object Function]",
        o = wt(e),
        a = r && Ge.call(e) === "[object String]",
        c = [];
    if (!r && !n && !o) throw new TypeError("Object.keys called on a non-object");
    var u = Pt && n;
    if (a && e.length > 0 && !re.call(e, 0)) for (var f = 0; f < e.length; ++f) c.push(String(f));
    if (o && e.length > 0) for (var s = 0; s < e.length; ++s) c.push(String(s));else for (var p in e) !(u && p === "prototype") && re.call(e, p) && c.push(String(p));
    if (At) for (var l = Rt(e), y = 0; y < ne.length; ++y) !(l && ne[y] === "constructor") && re.call(e, ne[y]) && c.push(ne[y]);
    return c;
  }, "keys"));
  var re, Ge, wt, Be, At, Pt, ne, pe, jt, qt, Rt;
  Nt.exports = It;
});

var _t = h((li, Dt) => {
  "use strict";

  var Dn = Array.prototype.slice,
      _n = $e(),
      Ft = Object.keys,
      ye = Ft ? i(function (e) {
    return Ft(e);
  }, "keys") : xt(),
      Tt = Object.keys;

  ye.shim = i(function () {
    if (Object.keys) {
      var e = function () {
        var r = Object.keys(arguments);
        return r && r.length === arguments.length;
      }(1, 2);

      e || (Object.keys = i(function (n) {
        return _n(n) ? Tt(Dn.call(n)) : Tt(n);
      }, "keys"));
    } else Object.keys = ye;

    return Object.keys || ye;
  }, "shimObjectKeys");
  Dt.exports = ye;
});

var Mt = h((pi, Ut) => {
  "use strict";

  Ut.exports = i(function () {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
    if (typeof Symbol.iterator == "symbol") return !0;
    var e = {},
        r = Symbol("test"),
        n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
    var o = 42;
    e[r] = o;

    for (r in e) return !1;

    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
    var a = Object.getOwnPropertySymbols(e);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r)) return !1;

    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var c = Object.getOwnPropertyDescriptor(e, r);
      if (c.value !== o || c.enumerable !== !0) return !1;
    }

    return !0;
  }, "hasSymbols");
});
var Bt = h((yi, Gt) => {
  "use strict";

  var $t = typeof Symbol < "u" && Symbol,
      Un = Mt();
  Gt.exports = i(function () {
    return typeof $t != "function" || typeof Symbol != "function" || typeof $t("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Un();
  }, "hasNativeSymbols");
});
var Vt = h((gi, Lt) => {
  "use strict";

  var Mn = "Function.prototype.bind called on incompatible ",
      Le = Array.prototype.slice,
      $n = Object.prototype.toString,
      Gn = "[object Function]";
  Lt.exports = i(function (e) {
    var r = this;
    if (typeof r != "function" || $n.call(r) !== Gn) throw new TypeError(Mn + r);

    for (var n = Le.call(arguments, 1), o, a = i(function () {
      if (this instanceof o) {
        var p = r.apply(this, n.concat(Le.call(arguments)));
        return Object(p) === p ? p : this;
      } else return r.apply(e, n.concat(Le.call(arguments)));
    }, "binder"), c = Math.max(0, r.length - n.length), u = [], f = 0; f < c; f++) u.push("$" + f);

    if (o = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
      var s = i(function () {}, "Empty");
      s.prototype = r.prototype, o.prototype = new s(), s.prototype = null;
    }

    return o;
  }, "bind");
});
var ge = h((hi, kt) => {
  "use strict";

  var Bn = Vt();
  kt.exports = Function.prototype.bind || Bn;
});
var zt = h((di, Wt) => {
  "use strict";

  var Ln = ge();
  Wt.exports = Ln.call(Function.call, Object.prototype.hasOwnProperty);
});
var We = h((bi, Jt) => {
  "use strict";

  var g,
      oe = SyntaxError,
      Ht = Function,
      W = TypeError,
      Ve = i(function (t) {
    try {
      return Ht('"use strict"; return (' + t + ").constructor;")();
    } catch {}
  }, "getEvalledConstructor"),
      U = Object.getOwnPropertyDescriptor;
  if (U) try {
    U({}, "");
  } catch {
    U = null;
  }

  var ke = i(function () {
    throw new W();
  }, "throwTypeError"),
      Vn = U ? function () {
    try {
      return arguments.callee, ke;
    } catch {
      try {
        return U(arguments, "callee").get;
      } catch {
        return ke;
      }
    }
  }() : ke,
      V = Bt()(),
      N = Object.getPrototypeOf || function (t) {
    return t.__proto__;
  },
      k = {},
      kn = typeof Uint8Array > "u" ? g : N(Uint8Array),
      z = {
    "%AggregateError%": typeof AggregateError > "u" ? g : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? g : ArrayBuffer,
    "%ArrayIteratorPrototype%": V ? N([][Symbol.iterator]()) : g,
    "%AsyncFromSyncIteratorPrototype%": g,
    "%AsyncFunction%": k,
    "%AsyncGenerator%": k,
    "%AsyncGeneratorFunction%": k,
    "%AsyncIteratorPrototype%": k,
    "%Atomics%": typeof Atomics > "u" ? g : Atomics,
    "%BigInt%": typeof BigInt > "u" ? g : BigInt,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? g : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array > "u" ? g : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? g : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? g : FinalizationRegistry,
    "%Function%": Ht,
    "%GeneratorFunction%": k,
    "%Int8Array%": typeof Int8Array > "u" ? g : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? g : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? g : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": V ? N(N([][Symbol.iterator]())) : g,
    "%JSON%": typeof JSON == "object" ? JSON : g,
    "%Map%": typeof Map > "u" ? g : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !V ? g : N(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? g : Promise,
    "%Proxy%": typeof Proxy > "u" ? g : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect > "u" ? g : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? g : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !V ? g : N(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? g : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": V ? N(""[Symbol.iterator]()) : g,
    "%Symbol%": V ? Symbol : g,
    "%SyntaxError%": oe,
    "%ThrowTypeError%": Vn,
    "%TypedArray%": kn,
    "%TypeError%": W,
    "%Uint8Array%": typeof Uint8Array > "u" ? g : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? g : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? g : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? g : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap > "u" ? g : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? g : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? g : WeakSet
  },
      Wn = i(function t(e) {
    var r;
    if (e === "%AsyncFunction%") r = Ve("async function () {}");else if (e === "%GeneratorFunction%") r = Ve("function* () {}");else if (e === "%AsyncGeneratorFunction%") r = Ve("async function* () {}");else if (e === "%AsyncGenerator%") {
      var n = t("%AsyncGeneratorFunction%");
      n && (r = n.prototype);
    } else if (e === "%AsyncIteratorPrototype%") {
      var o = t("%AsyncGenerator%");
      o && (r = N(o.prototype));
    }
    return z[e] = r, r;
  }, "doEval"),
      Yt = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  },
      be = ge(),
      he = zt(),
      zn = be.call(Function.call, Array.prototype.concat),
      Yn = be.call(Function.apply, Array.prototype.splice),
      Ct = be.call(Function.call, String.prototype.replace),
      de = be.call(Function.call, String.prototype.slice),
      Cn = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      Hn = /\\(\\)?/g,
      Jn = i(function (e) {
    var r = de(e, 0, 1),
        n = de(e, -1);
    if (r === "%" && n !== "%") throw new oe("invalid intrinsic syntax, expected closing `%`");
    if (n === "%" && r !== "%") throw new oe("invalid intrinsic syntax, expected opening `%`");
    var o = [];
    return Ct(e, Cn, function (a, c, u, f) {
      o[o.length] = u ? Ct(f, Hn, "$1") : c || a;
    }), o;
  }, "stringToPath"),
      Xn = i(function (e, r) {
    var n = e,
        o;

    if (he(Yt, n) && (o = Yt[n], n = "%" + o[0] + "%"), he(z, n)) {
      var a = z[n];
      if (a === k && (a = Wn(n)), typeof a > "u" && !r) throw new W("intrinsic " + e + " exists, but is not available. Please file an issue!");
      return {
        alias: o,
        name: n,
        value: a
      };
    }

    throw new oe("intrinsic " + e + " does not exist!");
  }, "getBaseIntrinsic");

  Jt.exports = i(function (e, r) {
    if (typeof e != "string" || e.length === 0) throw new W("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof r != "boolean") throw new W('"allowMissing" argument must be a boolean');
    var n = Jn(e),
        o = n.length > 0 ? n[0] : "",
        a = Xn("%" + o + "%", r),
        c = a.name,
        u = a.value,
        f = !1,
        s = a.alias;
    s && (o = s[0], Yn(n, zn([0, 1], s)));

    for (var p = 1, l = !0; p < n.length; p += 1) {
      var y = n[p],
          b = de(y, 0, 1),
          m = de(y, -1);
      if ((b === '"' || b === "'" || b === "`" || m === '"' || m === "'" || m === "`") && b !== m) throw new oe("property names with quotes must have matching quotes");
      if ((y === "constructor" || !l) && (f = !0), o += "." + y, c = "%" + o + "%", he(z, c)) u = z[c];else if (u != null) {
        if (!(y in u)) {
          if (!r) throw new W("base intrinsic for " + e + " exists, but the property is not available.");
          return;
        }

        if (U && p + 1 >= n.length) {
          var A = U(u, y);
          l = !!A, l && "get" in A && !("originalValue" in A.get) ? u = A.get : u = u[y];
        } else l = he(u, y), u = u[y];

        l && !f && (z[c] = u);
      }
    }

    return u;
  }, "GetIntrinsic");
});
var Qt = h((vi, Xt) => {
  "use strict";

  var Qn = We(),
      ze = Qn("%Object.defineProperty%", !0),
      Ye = i(function () {
    if (ze) try {
      return ze({}, "a", {
        value: 1
      }), !0;
    } catch {
      return !1;
    }
    return !1;
  }, "hasPropertyDescriptors");
  Ye.hasArrayLengthDefineBug = i(function () {
    if (!Ye()) return null;

    try {
      return ze([], "length", {
        value: 1
      }).length !== 1;
    } catch {
      return !0;
    }
  }, "hasArrayLengthDefineBug");
  Xt.exports = Ye;
});
var ie = h((mi, tr) => {
  "use strict";

  var Zn = _t(),
      Kn = typeof Symbol == "function" && typeof Symbol("foo") == "symbol",
      eo = Object.prototype.toString,
      to = Array.prototype.concat,
      Zt = Object.defineProperty,
      ro = i(function (t) {
    return typeof t == "function" && eo.call(t) === "[object Function]";
  }, "isFunction"),
      no = Qt()(),
      Kt = Zt && no,
      oo = i(function (t, e, r, n) {
    e in t && (!ro(n) || !n()) || (Kt ? Zt(t, e, {
      configurable: !0,
      enumerable: !1,
      value: r,
      writable: !0
    }) : t[e] = r);
  }, "defineProperty"),
      er = i(function (t, e) {
    var r = arguments.length > 2 ? arguments[2] : {},
        n = Zn(e);
    Kn && (n = to.call(n, Object.getOwnPropertySymbols(e)));

    for (var o = 0; o < n.length; o += 1) oo(t, n[o], e[n[o]], r[n[o]]);
  }, "defineProperties");

  er.supportsDescriptors = !!Kt;
  tr.exports = er;
});
var He = h((Ei, ve) => {
  "use strict";

  var Ce = ge(),
      Y = We(),
      or = Y("%Function.prototype.apply%"),
      ir = Y("%Function.prototype.call%"),
      ar = Y("%Reflect.apply%", !0) || Ce.call(ir, or),
      rr = Y("%Object.getOwnPropertyDescriptor%", !0),
      M = Y("%Object.defineProperty%", !0),
      io = Y("%Math.max%");
  if (M) try {
    M({}, "a", {
      value: 1
    });
  } catch {
    M = null;
  }
  ve.exports = i(function (e) {
    var r = ar(Ce, ir, arguments);

    if (rr && M) {
      var n = rr(r, "length");
      n.configurable && M(r, "length", {
        value: 1 + io(0, e.length - (arguments.length - 1))
      });
    }

    return r;
  }, "callBind");
  var nr = i(function () {
    return ar(Ce, or, arguments);
  }, "applyBind");
  M ? M(ve.exports, "apply", {
    value: nr
  }) : ve.exports.apply = nr;
});
var Je = h((Si, ur) => {
  "use strict";

  var cr = i(function (t) {
    return t !== t;
  }, "numberIsNaN");
  ur.exports = i(function (e, r) {
    return e === 0 && r === 0 ? 1 / e === 1 / r : !!(e === r || cr(e) && cr(r));
  }, "is");
});
var Xe = h((Oi, fr) => {
  "use strict";

  var ao = Je();
  fr.exports = i(function () {
    return typeof Object.is == "function" ? Object.is : ao;
  }, "getPolyfill");
});
var lr = h((wi, sr) => {
  "use strict";

  var co = Xe(),
      uo = ie();
  sr.exports = i(function () {
    var e = co();
    return uo(Object, {
      is: e
    }, {
      is: i(function () {
        return Object.is !== e;
      }, "testObjectIs")
    }), e;
  }, "shimObjectIs");
});
var Qe = h((Ai, gr) => {
  "use strict";

  var fo = ie(),
      so = He(),
      lo = Je(),
      pr = Xe(),
      po = lr(),
      yr = so(pr(), Object);
  fo(yr, {
    getPolyfill: pr,
    implementation: lo,
    shim: po
  });
  gr.exports = yr;
});
var Ze = h((Pi, hr) => {
  "use strict";

  hr.exports = i(function (e) {
    return e !== e;
  }, "isNaN");
});
var Ke = h((ji, dr) => {
  "use strict";

  var yo = Ze();
  dr.exports = i(function () {
    return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : yo;
  }, "getPolyfill");
});
var vr = h((qi, br) => {
  "use strict";

  var go = ie(),
      ho = Ke();
  br.exports = i(function () {
    var e = ho();
    return go(Number, {
      isNaN: e
    }, {
      isNaN: i(function () {
        return Number.isNaN !== e;
      }, "testIsNaN")
    }), e;
  }, "shimNumberIsNaN");
});
var Or = h((Ri, Sr) => {
  "use strict";

  var bo = He(),
      vo = ie(),
      mo = Ze(),
      mr = Ke(),
      Eo = vr(),
      Er = bo(mr(), Number);
  vo(Er, {
    getPolyfill: mr,
    implementation: mo,
    shim: Eo
  });
  Sr.exports = Er;
});
var Lr = h((Ii, Br) => {
  "use strict";

  function wr(t, e) {
    return wo(t) || Oo(t, e) || So();
  }

  i(wr, "_slicedToArray");

  function So() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  i(So, "_nonIterableRest");

  function Oo(t, e) {
    var r = [],
        n = !0,
        o = !1,
        a = void 0;

    try {
      for (var c = t[Symbol.iterator](), u; !(n = (u = c.next()).done) && (r.push(u.value), !(e && r.length === e)); n = !0);
    } catch (f) {
      o = !0, a = f;
    } finally {
      try {
        !n && c.return != null && c.return();
      } finally {
        if (o) throw a;
      }
    }

    return r;
  }

  i(Oo, "_iterableToArrayLimit");

  function wo(t) {
    if (Array.isArray(t)) return t;
  }

  i(wo, "_arrayWithHoles");

  function S(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? S = i(function (r) {
      return typeof r;
    }, "_typeof") : S = i(function (r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, "_typeof"), S(t);
  }

  i(S, "_typeof");

  var Ao = /a/g.flags !== void 0,
      Pe = i(function (e) {
    var r = [];
    return e.forEach(function (n) {
      return r.push(n);
    }), r;
  }, "arrayFromSet"),
      Ar = i(function (e) {
    var r = [];
    return e.forEach(function (n, o) {
      return r.push([o, n]);
    }), r;
  }, "arrayFromMap"),
      _r = Object.is ? Object.is : Qe(),
      we = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function () {
    return [];
  },
      et = Number.isNaN ? Number.isNaN : Or();

  function rt(t) {
    return t.call.bind(t);
  }

  i(rt, "uncurryThis");
  var ce = rt(Object.prototype.hasOwnProperty),
      Ae = rt(Object.prototype.propertyIsEnumerable),
      Pr = rt(Object.prototype.toString),
      E = __util$.types,
      Po = E.isAnyArrayBuffer,
      jo = E.isArrayBufferView,
      jr = E.isDate,
      me = E.isMap,
      qr = E.isRegExp,
      Ee = E.isSet,
      qo = E.isNativeError,
      Ro = E.isBoxedPrimitive,
      Rr = E.isNumberObject,
      Ir = E.isStringObject,
      Nr = E.isBooleanObject,
      xr = E.isBigIntObject,
      Io = E.isSymbolObject,
      No = E.isFloat32Array,
      xo = E.isFloat64Array;

  function Fo(t) {
    if (t.length === 0 || t.length > 10) return !0;

    for (var e = 0; e < t.length; e++) {
      var r = t.charCodeAt(e);
      if (r < 48 || r > 57) return !0;
    }

    return t.length === 10 && t >= Math.pow(2, 32);
  }

  i(Fo, "isNonIndex");

  function Se(t) {
    return Object.keys(t).filter(Fo).concat(we(t).filter(Object.prototype.propertyIsEnumerable.bind(t)));
  }

  i(Se, "getOwnNonIndexProperties");

  function Ur(t, e) {
    if (t === e) return 0;

    for (var r = t.length, n = e.length, o = 0, a = Math.min(r, n); o < a; ++o) if (t[o] !== e[o]) {
      r = t[o], n = e[o];
      break;
    }

    return r < n ? -1 : n < r ? 1 : 0;
  }

  i(Ur, "compare");
  var Oe = void 0,
      To = !0,
      Do = !1,
      tt = 0,
      nt = 1,
      Mr = 2,
      $r = 3;

  function _o(t, e) {
    return Ao ? t.source === e.source && t.flags === e.flags : RegExp.prototype.toString.call(t) === RegExp.prototype.toString.call(e);
  }

  i(_o, "areSimilarRegExps");

  function Uo(t, e) {
    if (t.byteLength !== e.byteLength) return !1;

    for (var r = 0; r < t.byteLength; r++) if (t[r] !== e[r]) return !1;

    return !0;
  }

  i(Uo, "areSimilarFloatArrays");

  function Mo(t, e) {
    return t.byteLength !== e.byteLength ? !1 : Ur(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), new Uint8Array(e.buffer, e.byteOffset, e.byteLength)) === 0;
  }

  i(Mo, "areSimilarTypedArrays");

  function $o(t, e) {
    return t.byteLength === e.byteLength && Ur(new Uint8Array(t), new Uint8Array(e)) === 0;
  }

  i($o, "areEqualArrayBuffers");

  function Go(t, e) {
    return Rr(t) ? Rr(e) && _r(Number.prototype.valueOf.call(t), Number.prototype.valueOf.call(e)) : Ir(t) ? Ir(e) && String.prototype.valueOf.call(t) === String.prototype.valueOf.call(e) : Nr(t) ? Nr(e) && Boolean.prototype.valueOf.call(t) === Boolean.prototype.valueOf.call(e) : xr(t) ? xr(e) && BigInt.prototype.valueOf.call(t) === BigInt.prototype.valueOf.call(e) : Io(e) && Symbol.prototype.valueOf.call(t) === Symbol.prototype.valueOf.call(e);
  }

  i(Go, "isEqualBoxedPrimitive");

  function w(t, e, r, n) {
    if (t === e) return t !== 0 ? !0 : r ? _r(t, e) : !0;

    if (r) {
      if (S(t) !== "object") return typeof t == "number" && et(t) && et(e);
      if (S(e) !== "object" || t === null || e === null || Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)) return !1;
    } else {
      if (t === null || S(t) !== "object") return e === null || S(e) !== "object" ? t == e : !1;
      if (e === null || S(e) !== "object") return !1;
    }

    var o = Pr(t),
        a = Pr(e);
    if (o !== a) return !1;

    if (Array.isArray(t)) {
      if (t.length !== e.length) return !1;
      var c = Se(t, Oe),
          u = Se(e, Oe);
      return c.length !== u.length ? !1 : ae(t, e, r, n, nt, c);
    }

    if (o === "[object Object]" && (!me(t) && me(e) || !Ee(t) && Ee(e))) return !1;

    if (jr(t)) {
      if (!jr(e) || Date.prototype.getTime.call(t) !== Date.prototype.getTime.call(e)) return !1;
    } else if (qr(t)) {
      if (!qr(e) || !_o(t, e)) return !1;
    } else if (qo(t) || t instanceof Error) {
      if (t.message !== e.message || t.name !== e.name) return !1;
    } else if (jo(t)) {
      if (!r && (No(t) || xo(t))) {
        if (!Uo(t, e)) return !1;
      } else if (!Mo(t, e)) return !1;

      var f = Se(t, Oe),
          s = Se(e, Oe);
      return f.length !== s.length ? !1 : ae(t, e, r, n, tt, f);
    } else {
      if (Ee(t)) return !Ee(e) || t.size !== e.size ? !1 : ae(t, e, r, n, Mr);
      if (me(t)) return !me(e) || t.size !== e.size ? !1 : ae(t, e, r, n, $r);

      if (Po(t)) {
        if (!$o(t, e)) return !1;
      } else if (Ro(t) && !Go(t, e)) return !1;
    }

    return ae(t, e, r, n, tt);
  }

  i(w, "innerDeepEqual");

  function Fr(t, e) {
    return e.filter(function (r) {
      return Ae(t, r);
    });
  }

  i(Fr, "getEnumerables");

  function ae(t, e, r, n, o, a) {
    if (arguments.length === 5) {
      a = Object.keys(t);
      var c = Object.keys(e);
      if (a.length !== c.length) return !1;
    }

    for (var u = 0; u < a.length; u++) if (!ce(e, a[u])) return !1;

    if (r && arguments.length === 5) {
      var f = we(t);

      if (f.length !== 0) {
        var s = 0;

        for (u = 0; u < f.length; u++) {
          var p = f[u];

          if (Ae(t, p)) {
            if (!Ae(e, p)) return !1;
            a.push(p), s++;
          } else if (Ae(e, p)) return !1;
        }

        var l = we(e);
        if (f.length !== l.length && Fr(e, l).length !== s) return !1;
      } else {
        var y = we(e);
        if (y.length !== 0 && Fr(e, y).length !== 0) return !1;
      }
    }

    if (a.length === 0 && (o === tt || o === nt && t.length === 0 || t.size === 0)) return !0;
    if (n === void 0) n = {
      val1: new Map(),
      val2: new Map(),
      position: 0
    };else {
      var b = n.val1.get(t);

      if (b !== void 0) {
        var m = n.val2.get(e);
        if (m !== void 0) return b === m;
      }

      n.position++;
    }
    n.val1.set(t, n.position), n.val2.set(e, n.position);
    var A = Wo(t, e, r, a, n, o);
    return n.val1.delete(t), n.val2.delete(e), A;
  }

  i(ae, "keyCheck");

  function Tr(t, e, r, n) {
    for (var o = Pe(t), a = 0; a < o.length; a++) {
      var c = o[a];
      if (w(e, c, r, n)) return t.delete(c), !0;
    }

    return !1;
  }

  i(Tr, "setHasEqualElement");

  function Gr(t) {
    switch (S(t)) {
      case "undefined":
        return null;

      case "object":
        return;

      case "symbol":
        return !1;

      case "string":
        t = +t;

      case "number":
        if (et(t)) return !1;
    }

    return !0;
  }

  i(Gr, "findLooseMatchingPrimitives");

  function Bo(t, e, r) {
    var n = Gr(r);
    return n ?? (e.has(n) && !t.has(n));
  }

  i(Bo, "setMightHaveLoosePrim");

  function Lo(t, e, r, n, o) {
    var a = Gr(r);
    if (a != null) return a;
    var c = e.get(a);
    return c === void 0 && !e.has(a) || !w(n, c, !1, o) ? !1 : !t.has(a) && w(n, c, !1, o);
  }

  i(Lo, "mapMightHaveLoosePrim");

  function Vo(t, e, r, n) {
    for (var o = null, a = Pe(t), c = 0; c < a.length; c++) {
      var u = a[c];
      if (S(u) === "object" && u !== null) o === null && (o = new Set()), o.add(u);else if (!e.has(u)) {
        if (r || !Bo(t, e, u)) return !1;
        o === null && (o = new Set()), o.add(u);
      }
    }

    if (o !== null) {
      for (var f = Pe(e), s = 0; s < f.length; s++) {
        var p = f[s];

        if (S(p) === "object" && p !== null) {
          if (!Tr(o, p, r, n)) return !1;
        } else if (!r && !t.has(p) && !Tr(o, p, r, n)) return !1;
      }

      return o.size === 0;
    }

    return !0;
  }

  i(Vo, "setEquiv");

  function Dr(t, e, r, n, o, a) {
    for (var c = Pe(t), u = 0; u < c.length; u++) {
      var f = c[u];
      if (w(r, f, o, a) && w(n, e.get(f), o, a)) return t.delete(f), !0;
    }

    return !1;
  }

  i(Dr, "mapHasEqualEntry");

  function ko(t, e, r, n) {
    for (var o = null, a = Ar(t), c = 0; c < a.length; c++) {
      var u = wr(a[c], 2),
          f = u[0],
          s = u[1];
      if (S(f) === "object" && f !== null) o === null && (o = new Set()), o.add(f);else {
        var p = e.get(f);

        if (p === void 0 && !e.has(f) || !w(s, p, r, n)) {
          if (r || !Lo(t, e, f, s, n)) return !1;
          o === null && (o = new Set()), o.add(f);
        }
      }
    }

    if (o !== null) {
      for (var l = Ar(e), y = 0; y < l.length; y++) {
        var b = wr(l[y], 2),
            f = b[0],
            m = b[1];

        if (S(f) === "object" && f !== null) {
          if (!Dr(o, t, f, m, r, n)) return !1;
        } else if (!r && (!t.has(f) || !w(t.get(f), m, !1, n)) && !Dr(o, t, f, m, !1, n)) return !1;
      }

      return o.size === 0;
    }

    return !0;
  }

  i(ko, "mapEquiv");

  function Wo(t, e, r, n, o, a) {
    var c = 0;

    if (a === Mr) {
      if (!Vo(t, e, r, o)) return !1;
    } else if (a === $r) {
      if (!ko(t, e, r, o)) return !1;
    } else if (a === nt) for (; c < t.length; c++) if (ce(t, c)) {
      if (!ce(e, c) || !w(t[c], e[c], r, o)) return !1;
    } else {
      if (ce(e, c)) return !1;

      for (var u = Object.keys(t); c < u.length; c++) {
        var f = u[c];
        if (!ce(e, f) || !w(t[f], e[f], r, o)) return !1;
      }

      return u.length === Object.keys(e).length;
    }

    for (c = 0; c < n.length; c++) {
      var s = n[c];
      if (!w(t[s], e[s], r, o)) return !1;
    }

    return !0;
  }

  i(Wo, "objEquiv");

  function zo(t, e) {
    return w(t, e, Do);
  }

  i(zo, "isDeepEqual");

  function Yo(t, e) {
    return w(t, e, To);
  }

  i(Yo, "isDeepStrictEqual");
  Br.exports = {
    isDeepEqual: zo,
    isDeepStrictEqual: Yo
  };
});
var Q = h((Ni, nn) => {
  "use strict";

  function x(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? x = i(function (r) {
      return typeof r;
    }, "_typeof") : x = i(function (r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, "_typeof"), x(t);
  }

  i(x, "_typeof");

  function Co(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  i(Co, "_classCallCheck");
  var Ho = De(),
      fe = Ho.codes,
      Vr = fe.ERR_AMBIGUOUS_ARGUMENT,
      ue = fe.ERR_INVALID_ARG_TYPE,
      Jo = fe.ERR_INVALID_ARG_VALUE,
      Xo = fe.ERR_INVALID_RETURN_VALUE,
      T = fe.ERR_MISSING_ARGS,
      $ = bt(),
      Qo = __util$,
      Zo = Qo.inspect,
      Yr = __util$.types,
      Ko = Yr.isPromise,
      ot = Yr.isRegExp,
      ei = Object.assign ? Object.assign : Et().assign,
      Cr = Object.is ? Object.is : Qe(),
      F,
      je;

  function se() {
    var t = Lr();
    F = t.isDeepEqual, je = t.isDeepStrictEqual;
  }

  i(se, "lazyLoadComparison");
  var kr = !1,
      d = nn.exports = it,
      qe = {};

  function q(t) {
    throw t.message instanceof Error ? t.message : new $(t);
  }

  i(q, "innerFail");

  function Hr(t, e, r, n, o) {
    var a = arguments.length,
        c;
    if (a === 0) c = "Failed";else if (a === 1) r = t, t = void 0;else {
      if (kr === !1) {
        kr = !0;
        var u = __Process$.emitWarning ? __Process$.emitWarning : console.warn.bind(console);
        u("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
      }

      a === 2 && (n = "!=");
    }
    if (r instanceof Error) throw r;
    var f = {
      actual: t,
      expected: e,
      operator: n === void 0 ? "fail" : n,
      stackStartFn: o || Hr
    };
    r !== void 0 && (f.message = r);
    var s = new $(f);
    throw c && (s.message = c, s.generatedMessage = !0), s;
  }

  i(Hr, "fail");
  d.fail = Hr;
  d.AssertionError = $;

  function Jr(t, e, r, n) {
    if (!r) {
      var o = !1;
      if (e === 0) o = !0, n = "No value argument passed to `assert.ok()`";else if (n instanceof Error) throw n;
      var a = new $({
        actual: r,
        expected: !0,
        message: n,
        operator: "==",
        stackStartFn: t
      });
      throw a.generatedMessage = o, a;
    }
  }

  i(Jr, "innerOk");

  function it() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];

    Jr.apply(void 0, [it, e.length].concat(e));
  }

  i(it, "ok");
  d.ok = it;
  d.equal = i(function t(e, r, n) {
    if (arguments.length < 2) throw new T("actual", "expected");
    e != r && q({
      actual: e,
      expected: r,
      message: n,
      operator: "==",
      stackStartFn: t
    });
  }, "equal");
  d.notEqual = i(function t(e, r, n) {
    if (arguments.length < 2) throw new T("actual", "expected");
    e == r && q({
      actual: e,
      expected: r,
      message: n,
      operator: "!=",
      stackStartFn: t
    });
  }, "notEqual");
  d.deepEqual = i(function t(e, r, n) {
    if (arguments.length < 2) throw new T("actual", "expected");
    F === void 0 && se(), F(e, r) || q({
      actual: e,
      expected: r,
      message: n,
      operator: "deepEqual",
      stackStartFn: t
    });
  }, "deepEqual");
  d.notDeepEqual = i(function t(e, r, n) {
    if (arguments.length < 2) throw new T("actual", "expected");
    F === void 0 && se(), F(e, r) && q({
      actual: e,
      expected: r,
      message: n,
      operator: "notDeepEqual",
      stackStartFn: t
    });
  }, "notDeepEqual");
  d.deepStrictEqual = i(function t(e, r, n) {
    if (arguments.length < 2) throw new T("actual", "expected");
    F === void 0 && se(), je(e, r) || q({
      actual: e,
      expected: r,
      message: n,
      operator: "deepStrictEqual",
      stackStartFn: t
    });
  }, "deepStrictEqual");
  d.notDeepStrictEqual = Xr;

  function Xr(t, e, r) {
    if (arguments.length < 2) throw new T("actual", "expected");
    F === void 0 && se(), je(t, e) && q({
      actual: t,
      expected: e,
      message: r,
      operator: "notDeepStrictEqual",
      stackStartFn: Xr
    });
  }

  i(Xr, "notDeepStrictEqual");
  d.strictEqual = i(function t(e, r, n) {
    if (arguments.length < 2) throw new T("actual", "expected");
    Cr(e, r) || q({
      actual: e,
      expected: r,
      message: n,
      operator: "strictEqual",
      stackStartFn: t
    });
  }, "strictEqual");
  d.notStrictEqual = i(function t(e, r, n) {
    if (arguments.length < 2) throw new T("actual", "expected");
    Cr(e, r) && q({
      actual: e,
      expected: r,
      message: n,
      operator: "notStrictEqual",
      stackStartFn: t
    });
  }, "notStrictEqual");
  var Wr = i(function t(e, r, n) {
    var o = this;
    Co(this, t), r.forEach(function (a) {
      a in e && (n !== void 0 && typeof n[a] == "string" && ot(e[a]) && e[a].test(n[a]) ? o[a] = n[a] : o[a] = e[a]);
    });
  }, "Comparison");

  function ti(t, e, r, n, o, a) {
    if (!(r in t) || !je(t[r], e[r])) {
      if (!n) {
        var c = new Wr(t, o),
            u = new Wr(e, o, t),
            f = new $({
          actual: c,
          expected: u,
          operator: "deepStrictEqual",
          stackStartFn: a
        });
        throw f.actual = t, f.expected = e, f.operator = a.name, f;
      }

      q({
        actual: t,
        expected: e,
        message: n,
        operator: a.name,
        stackStartFn: a
      });
    }
  }

  i(ti, "compareExceptionKey");

  function Qr(t, e, r, n) {
    if (typeof e != "function") {
      if (ot(e)) return e.test(t);
      if (arguments.length === 2) throw new ue("expected", ["Function", "RegExp"], e);

      if (x(t) !== "object" || t === null) {
        var o = new $({
          actual: t,
          expected: e,
          message: r,
          operator: "deepStrictEqual",
          stackStartFn: n
        });
        throw o.operator = n.name, o;
      }

      var a = Object.keys(e);
      if (e instanceof Error) a.push("name", "message");else if (a.length === 0) throw new Jo("error", e, "may not be an empty object");
      return F === void 0 && se(), a.forEach(function (c) {
        typeof t[c] == "string" && ot(e[c]) && e[c].test(t[c]) || ti(t, e, c, r, a, n);
      }), !0;
    }

    return e.prototype !== void 0 && t instanceof e ? !0 : Error.isPrototypeOf(e) ? !1 : e.call({}, t) === !0;
  }

  i(Qr, "expectedException");

  function Zr(t) {
    if (typeof t != "function") throw new ue("fn", "Function", t);

    try {
      t();
    } catch (e) {
      return e;
    }

    return qe;
  }

  i(Zr, "getActual");

  function zr(t) {
    return Ko(t) || t !== null && x(t) === "object" && typeof t.then == "function" && typeof t.catch == "function";
  }

  i(zr, "checkIsPromise");

  function Kr(t) {
    return Promise.resolve().then(function () {
      var e;

      if (typeof t == "function") {
        if (e = t(), !zr(e)) throw new Xo("instance of Promise", "promiseFn", e);
      } else if (zr(t)) e = t;else throw new ue("promiseFn", ["Function", "Promise"], t);

      return Promise.resolve().then(function () {
        return e;
      }).then(function () {
        return qe;
      }).catch(function (r) {
        return r;
      });
    });
  }

  i(Kr, "waitForActual");

  function en(t, e, r, n) {
    if (typeof r == "string") {
      if (arguments.length === 4) throw new ue("error", ["Object", "Error", "Function", "RegExp"], r);

      if (x(e) === "object" && e !== null) {
        if (e.message === r) throw new Vr("error/message", 'The error message "'.concat(e.message, '" is identical to the message.'));
      } else if (e === r) throw new Vr("error/message", 'The error "'.concat(e, '" is identical to the message.'));

      n = r, r = void 0;
    } else if (r != null && x(r) !== "object" && typeof r != "function") throw new ue("error", ["Object", "Error", "Function", "RegExp"], r);

    if (e === qe) {
      var o = "";
      r && r.name && (o += " (".concat(r.name, ")")), o += n ? ": ".concat(n) : ".";
      var a = t.name === "rejects" ? "rejection" : "exception";
      q({
        actual: void 0,
        expected: r,
        operator: t.name,
        message: "Missing expected ".concat(a).concat(o),
        stackStartFn: t
      });
    }

    if (r && !Qr(e, r, n, t)) throw e;
  }

  i(en, "expectsError");

  function tn(t, e, r, n) {
    if (e !== qe) {
      if (typeof r == "string" && (n = r, r = void 0), !r || Qr(e, r)) {
        var o = n ? ": ".concat(n) : ".",
            a = t.name === "doesNotReject" ? "rejection" : "exception";
        q({
          actual: e,
          expected: r,
          operator: t.name,
          message: "Got unwanted ".concat(a).concat(o, `
`) + 'Actual message: "'.concat(e && e.message, '"'),
          stackStartFn: t
        });
      }

      throw e;
    }
  }

  i(tn, "expectsNoError");
  d.throws = i(function t(e) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];

    en.apply(void 0, [t, Zr(e)].concat(n));
  }, "throws");
  d.rejects = i(function t(e) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];

    return Kr(e).then(function (a) {
      return en.apply(void 0, [t, a].concat(n));
    });
  }, "rejects");
  d.doesNotThrow = i(function t(e) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];

    tn.apply(void 0, [t, Zr(e)].concat(n));
  }, "doesNotThrow");
  d.doesNotReject = i(function t(e) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];

    return Kr(e).then(function (a) {
      return tn.apply(void 0, [t, a].concat(n));
    });
  }, "doesNotReject");
  d.ifError = i(function t(e) {
    if (e != null) {
      var r = "ifError got unwanted exception: ";
      x(e) === "object" && typeof e.message == "string" ? e.message.length === 0 && e.constructor ? r += e.constructor.name : r += e.message : r += Zo(e);
      var n = new $({
        actual: e,
        expected: null,
        operator: "ifError",
        message: r,
        stackStartFn: t
      }),
          o = e.stack;

      if (typeof o == "string") {
        var a = o.split(`
`);
        a.shift();

        for (var c = n.stack.split(`
`), u = 0; u < a.length; u++) {
          var f = c.indexOf(a[u]);

          if (f !== -1) {
            c = c.slice(0, f);
            break;
          }
        }

        n.stack = "".concat(c.join(`
`), `
`).concat(a.join(`
`));
      }

      throw n;
    }
  }, "ifError");

  function rn() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];

    Jr.apply(void 0, [rn, e.length].concat(e));
  }

  i(rn, "strict");
  d.strict = ei(rn, d, {
    equal: d.strictEqual,
    deepEqual: d.deepStrictEqual,
    notEqual: d.notStrictEqual,
    notDeepEqual: d.notDeepStrictEqual
  });
  d.strict.strict = d.strict;
});
var on = ft(Q()),
    ri = ft(Q()),
    {
  default: ni,
  ...oi
} = ri,
    xi = on.default ?? ni ?? oi;
export { xi as default };
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */