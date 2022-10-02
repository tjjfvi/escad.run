/* esm.sh - esbuild bundle(assert@2.0.0) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v96/node_process.js";
import __util$ from "/transpiled/https://esm.sh/v96/util@0.12.4/esnext/util.bundle.js";
var on = Object.create;
var ct = Object.defineProperty;
var an = Object.getOwnPropertyDescriptor;
var cn = Object.getOwnPropertyNames;
var un = Object.getPrototypeOf,
    fn = Object.prototype.hasOwnProperty;

var J = (t => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(t, {
  get: (e, r) => (typeof require < "u" ? require : e)[r]
}) : t)(function (t) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});

var g = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);

var sn = (t, e, r, n) => {
  if (e && typeof e == "object" || typeof e == "function") for (let o of cn(e)) !fn.call(t, o) && o !== r && ct(t, o, {
    get: () => e[o],
    enumerable: !(n = an(e, o)) || n.enumerable
  });
  return t;
};

var ln = (t, e, r) => (r = t != null ? on(un(t)) : {}, sn(e || !t || !t.__esModule ? ct(r, "default", {
  value: t,
  enumerable: !0
}) : r, t));

var Fe = g((ii, st) => {
  "use strict";

  function $(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $ = function (r) {
      return typeof r;
    } : $ = function (r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, $(t);
  }

  function pn(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function yn(t, e) {
    return e && ($(e) === "object" || typeof e == "function") ? e : gn(t);
  }

  function gn(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function Ne(t) {
    return Ne = Object.setPrototypeOf ? Object.getPrototypeOf : function (r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, Ne(t);
  }

  function hn(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && xe(t, e);
  }

  function xe(t, e) {
    return xe = Object.setPrototypeOf || function (n, o) {
      return n.__proto__ = o, n;
    }, xe(t, e);
  }

  var ft = {},
      G,
      Ie;

  function X(t, e, r) {
    r || (r = Error);

    function n(i, a, c) {
      return typeof e == "string" ? e : e(i, a, c);
    }

    var o = function (i) {
      hn(a, i);

      function a(c, u, f) {
        var l;
        return pn(this, a), l = yn(this, Ne(a).call(this, n(c, u, f))), l.code = t, l;
      }

      return a;
    }(r);

    ft[t] = o;
  }

  function ut(t, e) {
    if (Array.isArray(t)) {
      var r = t.length;
      return t = t.map(function (n) {
        return String(n);
      }), r > 2 ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1] : r === 2 ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0]);
    } else return "of ".concat(e, " ").concat(String(t));
  }

  function dn(t, e, r) {
    return t.substr(!r || r < 0 ? 0 : +r, e.length) === e;
  }

  function bn(t, e, r) {
    return (r === void 0 || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e;
  }

  function vn(t, e, r) {
    return typeof r != "number" && (r = 0), r + e.length > t.length ? !1 : t.indexOf(e, r) !== -1;
  }

  X("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError);
  X("ERR_INVALID_ARG_TYPE", function (t, e, r) {
    G === void 0 && (G = se()), G(typeof t == "string", "'name' must be a string");
    var n;
    typeof e == "string" && dn(e, "not ") ? (n = "must not be", e = e.replace(/^not /, "")) : n = "must be";
    var o;
    if (bn(t, " argument")) o = "The ".concat(t, " ").concat(n, " ").concat(ut(e, "type"));else {
      var i = vn(t, ".") ? "property" : "argument";
      o = 'The "'.concat(t, '" ').concat(i, " ").concat(n, " ").concat(ut(e, "type"));
    }
    return o += ". Received type ".concat($(r)), o;
  }, TypeError);
  X("ERR_INVALID_ARG_VALUE", function (t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "is invalid";
    Ie === void 0 && (Ie = __util$);
    var n = Ie.inspect(e);
    return n.length > 128 && (n = "".concat(n.slice(0, 128), "...")), "The argument '".concat(t, "' ").concat(r, ". Received ").concat(n);
  }, TypeError, RangeError);
  X("ERR_INVALID_RETURN_VALUE", function (t, e, r) {
    var n;
    return r && r.constructor && r.constructor.name ? n = "instance of ".concat(r.constructor.name) : n = "type ".concat($(r)), "Expected ".concat(t, ' to be returned from the "').concat(e, '"') + " function but got ".concat(n, ".");
  }, TypeError);
  X("ERR_MISSING_ARGS", function () {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];

    G === void 0 && (G = se()), G(e.length > 0, "At least one arg needs to be specified");
    var n = "The ",
        o = e.length;

    switch (e = e.map(function (i) {
      return '"'.concat(i, '"');
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
  st.exports.codes = ft;
});
var ht = g((ai, gt) => {
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

  function En(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  function Sn(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function lt(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
  }

  function On(t, e, r) {
    return e && lt(t.prototype, e), r && lt(t, r), t;
  }

  function B(t, e) {
    return e && (S(e) === "object" || typeof e == "function") ? e : Te(t);
  }

  function Te(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function wn(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && ee(t, e);
  }

  function _e(t) {
    var e = typeof Map == "function" ? new Map() : void 0;
    return _e = function (n) {
      if (n === null || !Pn(n)) return n;
      if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");

      if (typeof e < "u") {
        if (e.has(n)) return e.get(n);
        e.set(n, o);
      }

      function o() {
        return le(n, arguments, R(this).constructor);
      }

      return o.prototype = Object.create(n.prototype, {
        constructor: {
          value: o,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), ee(o, n);
    }, _e(t);
  }

  function An() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch {
      return !1;
    }
  }

  function le(t, e, r) {
    return An() ? le = Reflect.construct : le = function (o, i, a) {
      var c = [null];
      c.push.apply(c, i);
      var u = Function.bind.apply(o, c),
          f = new u();
      return a && ee(f, a.prototype), f;
    }, le.apply(null, arguments);
  }

  function Pn(t) {
    return Function.toString.call(t).indexOf("[native code]") !== -1;
  }

  function ee(t, e) {
    return ee = Object.setPrototypeOf || function (n, o) {
      return n.__proto__ = o, n;
    }, ee(t, e);
  }

  function R(t) {
    return R = Object.setPrototypeOf ? Object.getPrototypeOf : function (r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, R(t);
  }

  function S(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? S = function (r) {
      return typeof r;
    } : S = function (r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, S(t);
  }

  var jn = __util$,
      De = jn.inspect,
      qn = Fe(),
      Rn = qn.codes.ERR_INVALID_ARG_TYPE;

  function pt(t, e, r) {
    return (r === void 0 || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e;
  }

  function In(t, e) {
    if (e = Math.floor(e), t.length == 0 || e == 0) return "";
    var r = t.length * e;

    for (e = Math.floor(Math.log(e) / Math.log(2)); e;) t += t, e--;

    return t += t.substring(0, r - t.length), t;
  }

  var P = "",
      Q = "",
      Z = "",
      b = "",
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

  function yt(t) {
    var e = Object.keys(t),
        r = Object.create(Object.getPrototypeOf(t));
    return e.forEach(function (n) {
      r[n] = t[n];
    }), Object.defineProperty(r, "message", {
      value: t.message
    }), r;
  }

  function K(t) {
    return De(t, {
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

  function xn(t, e, r) {
    var n = "",
        o = "",
        i = 0,
        a = "",
        c = !1,
        u = K(t),
        f = u.split(`
`),
        l = K(e).split(`
`),
        s = 0,
        p = "";

    if (r === "strictEqual" && S(t) === "object" && S(e) === "object" && t !== null && e !== null && (r = "strictEqualObject"), f.length === 1 && l.length === 1 && f[0] !== l[0]) {
      var d = f[0].length + l[0].length;

      if (d <= Nn) {
        if ((S(t) !== "object" || t === null) && (S(e) !== "object" || e === null) && (t !== 0 || e !== 0)) return "".concat(_[r], `

`) + "".concat(f[0], " !== ").concat(l[0], `
`);
      } else if (r !== "strictEqualObject") {
        var v = __Process$.stderr && __Process$.stderr.isTTY ? __Process$.stderr.columns : 80;

        if (d < v) {
          for (; f[0][s] === l[0][s];) s++;

          s > 2 && (p = `
  `.concat(In(" ", s), "^"), s = 0);
        }
      }
    }

    for (var w = f[f.length - 1], ot = l[l.length - 1]; w === ot && (s++ < 2 ? a = `
  `.concat(w).concat(a) : n = w, f.pop(), l.pop(), !(f.length === 0 || l.length === 0));) w = f[f.length - 1], ot = l[l.length - 1];

    var qe = Math.max(f.length, l.length);

    if (qe === 0) {
      var C = u.split(`
`);
      if (C.length > 30) for (C[26] = "".concat(P, "...").concat(b); C.length > 27;) C.pop();
      return "".concat(_.notIdentical, `

`).concat(C.join(`
`), `
`);
    }

    s > 3 && (a = `
`.concat(P, "...").concat(b).concat(a), c = !0), n !== "" && (a = `
  `.concat(n).concat(a), n = "");
    var A = 0,
        it = _[r] + `
`.concat(Q, "+ actual").concat(b, " ").concat(Z, "- expected").concat(b),
        at = " ".concat(P, "...").concat(b, " Lines skipped");

    for (s = 0; s < qe; s++) {
      var q = s - i;
      if (f.length < s + 1) q > 1 && s > 2 && (q > 4 ? (o += `
`.concat(P, "...").concat(b), c = !0) : q > 3 && (o += `
  `.concat(l[s - 2]), A++), o += `
  `.concat(l[s - 1]), A++), i = s, n += `
`.concat(Z, "-").concat(b, " ").concat(l[s]), A++;else if (l.length < s + 1) q > 1 && s > 2 && (q > 4 ? (o += `
`.concat(P, "...").concat(b), c = !0) : q > 3 && (o += `
  `.concat(f[s - 2]), A++), o += `
  `.concat(f[s - 1]), A++), i = s, o += `
`.concat(Q, "+").concat(b, " ").concat(f[s]), A++;else {
        var H = l[s],
            T = f[s],
            Re = T !== H && (!pt(T, ",") || T.slice(0, -1) !== H);
        Re && pt(H, ",") && H.slice(0, -1) === T && (Re = !1, T += ","), Re ? (q > 1 && s > 2 && (q > 4 ? (o += `
`.concat(P, "...").concat(b), c = !0) : q > 3 && (o += `
  `.concat(f[s - 2]), A++), o += `
  `.concat(f[s - 1]), A++), i = s, o += `
`.concat(Q, "+").concat(b, " ").concat(T), n += `
`.concat(Z, "-").concat(b, " ").concat(H), A += 2) : (o += n, n = "", (q === 1 || s === 0) && (o += `
  `.concat(T), A++));
      }
      if (A > 20 && s < qe - 2) return "".concat(it).concat(at, `
`).concat(o, `
`).concat(P, "...").concat(b).concat(n, `
`) + "".concat(P, "...").concat(b);
    }

    return "".concat(it).concat(c ? at : "", `
`).concat(o).concat(n).concat(a).concat(p);
  }

  var Fn = function (t) {
    wn(e, t);

    function e(r) {
      var n;
      if (Sn(this, e), S(r) !== "object" || r === null) throw new Rn("options", "Object", r);
      var o = r.message,
          i = r.operator,
          a = r.stackStartFn,
          c = r.actual,
          u = r.expected,
          f = Error.stackTraceLimit;
      if (Error.stackTraceLimit = 0, o != null) n = B(this, R(e).call(this, String(o)));else if (__Process$.stderr && __Process$.stderr.isTTY && (__Process$.stderr && __Process$.stderr.getColorDepth && __Process$.stderr.getColorDepth() !== 1 ? (P = "\x1B[34m", Q = "\x1B[32m", b = "\x1B[39m", Z = "\x1B[31m") : (P = "", Q = "", b = "", Z = "")), S(c) === "object" && c !== null && S(u) === "object" && u !== null && "stack" in c && c instanceof Error && "stack" in u && u instanceof Error && (c = yt(c), u = yt(u)), i === "deepStrictEqual" || i === "strictEqual") n = B(this, R(e).call(this, xn(c, u, i)));else if (i === "notDeepStrictEqual" || i === "notStrictEqual") {
        var l = _[i],
            s = K(c).split(`
`);
        if (i === "notStrictEqual" && S(c) === "object" && c !== null && (l = _.notStrictEqualObject), s.length > 30) for (s[26] = "".concat(P, "...").concat(b); s.length > 27;) s.pop();
        s.length === 1 ? n = B(this, R(e).call(this, "".concat(l, " ").concat(s[0]))) : n = B(this, R(e).call(this, "".concat(l, `

`).concat(s.join(`
`), `
`)));
      } else {
        var p = K(c),
            d = "",
            v = _[i];
        i === "notDeepEqual" || i === "notEqual" ? (p = "".concat(_[i], `

`).concat(p), p.length > 1024 && (p = "".concat(p.slice(0, 1021), "..."))) : (d = "".concat(K(u)), p.length > 512 && (p = "".concat(p.slice(0, 509), "...")), d.length > 512 && (d = "".concat(d.slice(0, 509), "...")), i === "deepEqual" || i === "equal" ? p = "".concat(v, `

`).concat(p, `

should equal

`) : d = " ".concat(i, " ").concat(d)), n = B(this, R(e).call(this, "".concat(p).concat(d)));
      }
      return Error.stackTraceLimit = f, n.generatedMessage = !o, Object.defineProperty(Te(n), "name", {
        value: "AssertionError [ERR_ASSERTION]",
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), n.code = "ERR_ASSERTION", n.actual = c, n.expected = u, n.operator = i, Error.captureStackTrace && Error.captureStackTrace(Te(n), a), n.stack, n.name = "AssertionError", B(n);
    }

    return On(e, [{
      key: "toString",
      value: function () {
        return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
      }
    }, {
      key: De.custom,
      value: function (n, o) {
        return De(this, mn({}, o, {
          customInspect: !1,
          depth: 0
        }));
      }
    }]), e;
  }(_e(Error));

  gt.exports = Fn;
});
var vt = g((ci, bt) => {
  "use strict";

  function dt(t, e) {
    if (t == null) throw new TypeError("Cannot convert first argument to object");

    for (var r = Object(t), n = 1; n < arguments.length; n++) {
      var o = arguments[n];
      if (o != null) for (var i = Object.keys(Object(o)), a = 0, c = i.length; a < c; a++) {
        var u = i[a],
            f = Object.getOwnPropertyDescriptor(o, u);
        f !== void 0 && f.enumerable && (r[u] = o[u]);
      }
    }

    return r;
  }

  function Tn() {
    Object.assign || Object.defineProperty(Object, "assign", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: dt
    });
  }

  bt.exports = {
    assign: dt,
    polyfill: Tn
  };
});
var Ue = g((ui, Et) => {
  "use strict";

  var mt = Object.prototype.toString;

  Et.exports = function (e) {
    var r = mt.call(e),
        n = r === "[object Arguments]";
    return n || (n = r !== "[object Array]" && e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && mt.call(e.callee) === "[object Function]"), n;
  };
});
var It = g((fi, Rt) => {
  "use strict";

  var qt;
  Object.keys || (te = Object.prototype.hasOwnProperty, Me = Object.prototype.toString, St = Ue(), $e = Object.prototype.propertyIsEnumerable, Ot = !$e.call({
    toString: null
  }, "toString"), wt = $e.call(function () {}, "prototype"), re = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], pe = function (t) {
    var e = t.constructor;
    return e && e.prototype === t;
  }, At = {
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
  }, Pt = function () {
    if (typeof window > "u") return !1;

    for (var t in window) try {
      if (!At["$" + t] && te.call(window, t) && window[t] !== null && typeof window[t] == "object") try {
        pe(window[t]);
      } catch {
        return !0;
      }
    } catch {
      return !0;
    }

    return !1;
  }(), jt = function (t) {
    if (typeof window > "u" || !Pt) return pe(t);

    try {
      return pe(t);
    } catch {
      return !1;
    }
  }, qt = function (e) {
    var r = e !== null && typeof e == "object",
        n = Me.call(e) === "[object Function]",
        o = St(e),
        i = r && Me.call(e) === "[object String]",
        a = [];
    if (!r && !n && !o) throw new TypeError("Object.keys called on a non-object");
    var c = wt && n;
    if (i && e.length > 0 && !te.call(e, 0)) for (var u = 0; u < e.length; ++u) a.push(String(u));
    if (o && e.length > 0) for (var f = 0; f < e.length; ++f) a.push(String(f));else for (var l in e) !(c && l === "prototype") && te.call(e, l) && a.push(String(l));
    if (Ot) for (var s = jt(e), p = 0; p < re.length; ++p) !(s && re[p] === "constructor") && te.call(e, re[p]) && a.push(re[p]);
    return a;
  });
  var te, Me, St, $e, Ot, wt, re, pe, At, Pt, jt;
  Rt.exports = qt;
});
var Tt = g((si, Ft) => {
  "use strict";

  var _n = Array.prototype.slice,
      Dn = Ue(),
      Nt = Object.keys,
      ye = Nt ? function (e) {
    return Nt(e);
  } : It(),
      xt = Object.keys;

  ye.shim = function () {
    if (Object.keys) {
      var e = function () {
        var r = Object.keys(arguments);
        return r && r.length === arguments.length;
      }(1, 2);

      e || (Object.keys = function (n) {
        return Dn(n) ? xt(_n.call(n)) : xt(n);
      });
    } else Object.keys = ye;

    return Object.keys || ye;
  };

  Ft.exports = ye;
});
var Dt = g((li, _t) => {
  "use strict";

  _t.exports = function () {
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
    var i = Object.getOwnPropertySymbols(e);
    if (i.length !== 1 || i[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r)) return !1;

    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var a = Object.getOwnPropertyDescriptor(e, r);
      if (a.value !== o || a.enumerable !== !0) return !1;
    }

    return !0;
  };
});
var $t = g((pi, Mt) => {
  "use strict";

  var Ut = typeof Symbol < "u" && Symbol,
      Un = Dt();

  Mt.exports = function () {
    return typeof Ut != "function" || typeof Symbol != "function" || typeof Ut("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Un();
  };
});
var Bt = g((yi, Gt) => {
  "use strict";

  var Mn = "Function.prototype.bind called on incompatible ",
      Ge = Array.prototype.slice,
      $n = Object.prototype.toString,
      Gn = "[object Function]";

  Gt.exports = function (e) {
    var r = this;
    if (typeof r != "function" || $n.call(r) !== Gn) throw new TypeError(Mn + r);

    for (var n = Ge.call(arguments, 1), o, i = function () {
      if (this instanceof o) {
        var l = r.apply(this, n.concat(Ge.call(arguments)));
        return Object(l) === l ? l : this;
      } else return r.apply(e, n.concat(Ge.call(arguments)));
    }, a = Math.max(0, r.length - n.length), c = [], u = 0; u < a; u++) c.push("$" + u);

    if (o = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this,arguments); }")(i), r.prototype) {
      var f = function () {};

      f.prototype = r.prototype, o.prototype = new f(), f.prototype = null;
    }

    return o;
  };
});
var ge = g((gi, Lt) => {
  "use strict";

  var Bn = Bt();
  Lt.exports = Function.prototype.bind || Bn;
});
var kt = g((hi, Vt) => {
  "use strict";

  var Ln = ge();
  Vt.exports = Ln.call(Function.call, Object.prototype.hasOwnProperty);
});
var Ve = g((di, Ct) => {
  "use strict";

  var y,
      z = SyntaxError,
      Yt = Function,
      k = TypeError,
      Be = function (t) {
    try {
      return Yt('"use strict"; return (' + t + ").constructor;")();
    } catch {}
  },
      D = Object.getOwnPropertyDescriptor;

  if (D) try {
    D({}, "");
  } catch {
    D = null;
  }

  var Le = function () {
    throw new k();
  },
      Vn = D ? function () {
    try {
      return arguments.callee, Le;
    } catch {
      try {
        return D(arguments, "callee").get;
      } catch {
        return Le;
      }
    }
  }() : Le,
      L = $t()(),
      I = Object.getPrototypeOf || function (t) {
    return t.__proto__;
  },
      V = {},
      kn = typeof Uint8Array > "u" ? y : I(Uint8Array),
      W = {
    "%AggregateError%": typeof AggregateError > "u" ? y : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? y : ArrayBuffer,
    "%ArrayIteratorPrototype%": L ? I([][Symbol.iterator]()) : y,
    "%AsyncFromSyncIteratorPrototype%": y,
    "%AsyncFunction%": V,
    "%AsyncGenerator%": V,
    "%AsyncGeneratorFunction%": V,
    "%AsyncIteratorPrototype%": V,
    "%Atomics%": typeof Atomics > "u" ? y : Atomics,
    "%BigInt%": typeof BigInt > "u" ? y : BigInt,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? y : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array > "u" ? y : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? y : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? y : FinalizationRegistry,
    "%Function%": Yt,
    "%GeneratorFunction%": V,
    "%Int8Array%": typeof Int8Array > "u" ? y : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? y : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? y : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": L ? I(I([][Symbol.iterator]())) : y,
    "%JSON%": typeof JSON == "object" ? JSON : y,
    "%Map%": typeof Map > "u" ? y : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !L ? y : I(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? y : Promise,
    "%Proxy%": typeof Proxy > "u" ? y : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect > "u" ? y : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? y : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !L ? y : I(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? y : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": L ? I(""[Symbol.iterator]()) : y,
    "%Symbol%": L ? Symbol : y,
    "%SyntaxError%": z,
    "%ThrowTypeError%": Vn,
    "%TypedArray%": kn,
    "%TypeError%": k,
    "%Uint8Array%": typeof Uint8Array > "u" ? y : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? y : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? y : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? y : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap > "u" ? y : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? y : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? y : WeakSet
  },
      Wn = function t(e) {
    var r;
    if (e === "%AsyncFunction%") r = Be("async function () {}");else if (e === "%GeneratorFunction%") r = Be("function* () {}");else if (e === "%AsyncGeneratorFunction%") r = Be("async function* () {}");else if (e === "%AsyncGenerator%") {
      var n = t("%AsyncGeneratorFunction%");
      n && (r = n.prototype);
    } else if (e === "%AsyncIteratorPrototype%") {
      var o = t("%AsyncGenerator%");
      o && (r = I(o.prototype));
    }
    return W[e] = r, r;
  },
      Wt = {
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
      ne = ge(),
      he = kt(),
      zn = ne.call(Function.call, Array.prototype.concat),
      Yn = ne.call(Function.apply, Array.prototype.splice),
      zt = ne.call(Function.call, String.prototype.replace),
      de = ne.call(Function.call, String.prototype.slice),
      Cn = ne.call(Function.call, RegExp.prototype.exec),
      Hn = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      Jn = /\\(\\)?/g,
      Xn = function (e) {
    var r = de(e, 0, 1),
        n = de(e, -1);
    if (r === "%" && n !== "%") throw new z("invalid intrinsic syntax, expected closing `%`");
    if (n === "%" && r !== "%") throw new z("invalid intrinsic syntax, expected opening `%`");
    var o = [];
    return zt(e, Hn, function (i, a, c, u) {
      o[o.length] = c ? zt(u, Jn, "$1") : a || i;
    }), o;
  },
      Qn = function (e, r) {
    var n = e,
        o;

    if (he(Wt, n) && (o = Wt[n], n = "%" + o[0] + "%"), he(W, n)) {
      var i = W[n];
      if (i === V && (i = Wn(n)), typeof i > "u" && !r) throw new k("intrinsic " + e + " exists, but is not available. Please file an issue!");
      return {
        alias: o,
        name: n,
        value: i
      };
    }

    throw new z("intrinsic " + e + " does not exist!");
  };

  Ct.exports = function (e, r) {
    if (typeof e != "string" || e.length === 0) throw new k("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof r != "boolean") throw new k('"allowMissing" argument must be a boolean');
    if (Cn(/^%?[^%]*%?$/, e) === null) throw new z("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var n = Xn(e),
        o = n.length > 0 ? n[0] : "",
        i = Qn("%" + o + "%", r),
        a = i.name,
        c = i.value,
        u = !1,
        f = i.alias;
    f && (o = f[0], Yn(n, zn([0, 1], f)));

    for (var l = 1, s = !0; l < n.length; l += 1) {
      var p = n[l],
          d = de(p, 0, 1),
          v = de(p, -1);
      if ((d === '"' || d === "'" || d === "`" || v === '"' || v === "'" || v === "`") && d !== v) throw new z("property names with quotes must have matching quotes");
      if ((p === "constructor" || !s) && (u = !0), o += "." + p, a = "%" + o + "%", he(W, a)) c = W[a];else if (c != null) {
        if (!(p in c)) {
          if (!r) throw new k("base intrinsic for " + e + " exists, but the property is not available.");
          return;
        }

        if (D && l + 1 >= n.length) {
          var w = D(c, p);
          s = !!w, s && "get" in w && !("originalValue" in w.get) ? c = w.get : c = c[p];
        } else s = he(c, p), c = c[p];

        s && !u && (W[a] = c);
      }
    }

    return c;
  };
});
var Jt = g((bi, Ht) => {
  "use strict";

  var Zn = Ve(),
      ke = Zn("%Object.defineProperty%", !0),
      We = function () {
    if (ke) try {
      return ke({}, "a", {
        value: 1
      }), !0;
    } catch {
      return !1;
    }
    return !1;
  };

  We.hasArrayLengthDefineBug = function () {
    if (!We()) return null;

    try {
      return ke([], "length", {
        value: 1
      }).length !== 1;
    } catch {
      return !0;
    }
  };

  Ht.exports = We;
});
var oe = g((vi, Kt) => {
  "use strict";

  var Kn = Tt(),
      eo = typeof Symbol == "function" && typeof Symbol("foo") == "symbol",
      to = Object.prototype.toString,
      ro = Array.prototype.concat,
      Xt = Object.defineProperty,
      no = function (t) {
    return typeof t == "function" && to.call(t) === "[object Function]";
  },
      oo = Jt()(),
      Qt = Xt && oo,
      io = function (t, e, r, n) {
    e in t && (!no(n) || !n()) || (Qt ? Xt(t, e, {
      configurable: !0,
      enumerable: !1,
      value: r,
      writable: !0
    }) : t[e] = r);
  },
      Zt = function (t, e) {
    var r = arguments.length > 2 ? arguments[2] : {},
        n = Kn(e);
    eo && (n = ro.call(n, Object.getOwnPropertySymbols(e)));

    for (var o = 0; o < n.length; o += 1) io(t, n[o], e[n[o]], r[n[o]]);
  };

  Zt.supportsDescriptors = !!Qt;
  Kt.exports = Zt;
});
var Ye = g((mi, be) => {
  "use strict";

  var ze = ge(),
      Y = Ve(),
      rr = Y("%Function.prototype.apply%"),
      nr = Y("%Function.prototype.call%"),
      or = Y("%Reflect.apply%", !0) || ze.call(nr, rr),
      er = Y("%Object.getOwnPropertyDescriptor%", !0),
      U = Y("%Object.defineProperty%", !0),
      ao = Y("%Math.max%");
  if (U) try {
    U({}, "a", {
      value: 1
    });
  } catch {
    U = null;
  }

  be.exports = function (e) {
    var r = or(ze, nr, arguments);

    if (er && U) {
      var n = er(r, "length");
      n.configurable && U(r, "length", {
        value: 1 + ao(0, e.length - (arguments.length - 1))
      });
    }

    return r;
  };

  var tr = function () {
    return or(ze, rr, arguments);
  };

  U ? U(be.exports, "apply", {
    value: tr
  }) : be.exports.apply = tr;
});
var Ce = g((Ei, ar) => {
  "use strict";

  var ir = function (t) {
    return t !== t;
  };

  ar.exports = function (e, r) {
    return e === 0 && r === 0 ? 1 / e === 1 / r : !!(e === r || ir(e) && ir(r));
  };
});
var He = g((Si, cr) => {
  "use strict";

  var co = Ce();

  cr.exports = function () {
    return typeof Object.is == "function" ? Object.is : co;
  };
});
var fr = g((Oi, ur) => {
  "use strict";

  var uo = He(),
      fo = oe();

  ur.exports = function () {
    var e = uo();
    return fo(Object, {
      is: e
    }, {
      is: function () {
        return Object.is !== e;
      }
    }), e;
  };
});
var Je = g((wi, pr) => {
  "use strict";

  var so = oe(),
      lo = Ye(),
      po = Ce(),
      sr = He(),
      yo = fr(),
      lr = lo(sr(), Object);
  so(lr, {
    getPolyfill: sr,
    implementation: po,
    shim: yo
  });
  pr.exports = lr;
});
var Xe = g((Ai, yr) => {
  "use strict";

  yr.exports = function (e) {
    return e !== e;
  };
});
var Qe = g((Pi, gr) => {
  "use strict";

  var go = Xe();

  gr.exports = function () {
    return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : go;
  };
});
var dr = g((ji, hr) => {
  "use strict";

  var ho = oe(),
      bo = Qe();

  hr.exports = function () {
    var e = bo();
    return ho(Number, {
      isNaN: e
    }, {
      isNaN: function () {
        return Number.isNaN !== e;
      }
    }), e;
  };
});
var Er = g((qi, mr) => {
  "use strict";

  var vo = Ye(),
      mo = oe(),
      Eo = Xe(),
      br = Qe(),
      So = dr(),
      vr = vo(br(), Number);
  mo(vr, {
    getPolyfill: br,
    implementation: Eo,
    shim: So
  });
  mr.exports = vr;
});
var Gr = g((Ri, $r) => {
  "use strict";

  function Sr(t, e) {
    return Ao(t) || wo(t, e) || Oo();
  }

  function Oo() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function wo(t, e) {
    var r = [],
        n = !0,
        o = !1,
        i = void 0;

    try {
      for (var a = t[Symbol.iterator](), c; !(n = (c = a.next()).done) && (r.push(c.value), !(e && r.length === e)); n = !0);
    } catch (u) {
      o = !0, i = u;
    } finally {
      try {
        !n && a.return != null && a.return();
      } finally {
        if (o) throw i;
      }
    }

    return r;
  }

  function Ao(t) {
    if (Array.isArray(t)) return t;
  }

  function E(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? E = function (r) {
      return typeof r;
    } : E = function (r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, E(t);
  }

  var Po = /a/g.flags !== void 0,
      Ae = function (e) {
    var r = [];
    return e.forEach(function (n) {
      return r.push(n);
    }), r;
  },
      Or = function (e) {
    var r = [];
    return e.forEach(function (n, o) {
      return r.push([o, n]);
    }), r;
  },
      Tr = Object.is ? Object.is : Je(),
      Oe = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function () {
    return [];
  },
      Ze = Number.isNaN ? Number.isNaN : Er();

  function et(t) {
    return t.call.bind(t);
  }

  var ae = et(Object.prototype.hasOwnProperty),
      we = et(Object.prototype.propertyIsEnumerable),
      wr = et(Object.prototype.toString),
      m = __util$.types,
      jo = m.isAnyArrayBuffer,
      qo = m.isArrayBufferView,
      Ar = m.isDate,
      ve = m.isMap,
      Pr = m.isRegExp,
      me = m.isSet,
      Ro = m.isNativeError,
      Io = m.isBoxedPrimitive,
      jr = m.isNumberObject,
      qr = m.isStringObject,
      Rr = m.isBooleanObject,
      Ir = m.isBigIntObject,
      No = m.isSymbolObject,
      xo = m.isFloat32Array,
      Fo = m.isFloat64Array;

  function To(t) {
    if (t.length === 0 || t.length > 10) return !0;

    for (var e = 0; e < t.length; e++) {
      var r = t.charCodeAt(e);
      if (r < 48 || r > 57) return !0;
    }

    return t.length === 10 && t >= Math.pow(2, 32);
  }

  function Ee(t) {
    return Object.keys(t).filter(To).concat(Oe(t).filter(Object.prototype.propertyIsEnumerable.bind(t)));
  }

  function _r(t, e) {
    if (t === e) return 0;

    for (var r = t.length, n = e.length, o = 0, i = Math.min(r, n); o < i; ++o) if (t[o] !== e[o]) {
      r = t[o], n = e[o];
      break;
    }

    return r < n ? -1 : n < r ? 1 : 0;
  }

  var Se = void 0,
      _o = !0,
      Do = !1,
      Ke = 0,
      tt = 1,
      Dr = 2,
      Ur = 3;

  function Uo(t, e) {
    return Po ? t.source === e.source && t.flags === e.flags : RegExp.prototype.toString.call(t) === RegExp.prototype.toString.call(e);
  }

  function Mo(t, e) {
    if (t.byteLength !== e.byteLength) return !1;

    for (var r = 0; r < t.byteLength; r++) if (t[r] !== e[r]) return !1;

    return !0;
  }

  function $o(t, e) {
    return t.byteLength !== e.byteLength ? !1 : _r(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), new Uint8Array(e.buffer, e.byteOffset, e.byteLength)) === 0;
  }

  function Go(t, e) {
    return t.byteLength === e.byteLength && _r(new Uint8Array(t), new Uint8Array(e)) === 0;
  }

  function Bo(t, e) {
    return jr(t) ? jr(e) && Tr(Number.prototype.valueOf.call(t), Number.prototype.valueOf.call(e)) : qr(t) ? qr(e) && String.prototype.valueOf.call(t) === String.prototype.valueOf.call(e) : Rr(t) ? Rr(e) && Boolean.prototype.valueOf.call(t) === Boolean.prototype.valueOf.call(e) : Ir(t) ? Ir(e) && BigInt.prototype.valueOf.call(t) === BigInt.prototype.valueOf.call(e) : No(e) && Symbol.prototype.valueOf.call(t) === Symbol.prototype.valueOf.call(e);
  }

  function O(t, e, r, n) {
    if (t === e) return t !== 0 ? !0 : r ? Tr(t, e) : !0;

    if (r) {
      if (E(t) !== "object") return typeof t == "number" && Ze(t) && Ze(e);
      if (E(e) !== "object" || t === null || e === null || Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)) return !1;
    } else {
      if (t === null || E(t) !== "object") return e === null || E(e) !== "object" ? t == e : !1;
      if (e === null || E(e) !== "object") return !1;
    }

    var o = wr(t),
        i = wr(e);
    if (o !== i) return !1;

    if (Array.isArray(t)) {
      if (t.length !== e.length) return !1;
      var a = Ee(t, Se),
          c = Ee(e, Se);
      return a.length !== c.length ? !1 : ie(t, e, r, n, tt, a);
    }

    if (o === "[object Object]" && (!ve(t) && ve(e) || !me(t) && me(e))) return !1;

    if (Ar(t)) {
      if (!Ar(e) || Date.prototype.getTime.call(t) !== Date.prototype.getTime.call(e)) return !1;
    } else if (Pr(t)) {
      if (!Pr(e) || !Uo(t, e)) return !1;
    } else if (Ro(t) || t instanceof Error) {
      if (t.message !== e.message || t.name !== e.name) return !1;
    } else if (qo(t)) {
      if (!r && (xo(t) || Fo(t))) {
        if (!Mo(t, e)) return !1;
      } else if (!$o(t, e)) return !1;

      var u = Ee(t, Se),
          f = Ee(e, Se);
      return u.length !== f.length ? !1 : ie(t, e, r, n, Ke, u);
    } else {
      if (me(t)) return !me(e) || t.size !== e.size ? !1 : ie(t, e, r, n, Dr);
      if (ve(t)) return !ve(e) || t.size !== e.size ? !1 : ie(t, e, r, n, Ur);

      if (jo(t)) {
        if (!Go(t, e)) return !1;
      } else if (Io(t) && !Bo(t, e)) return !1;
    }

    return ie(t, e, r, n, Ke);
  }

  function Nr(t, e) {
    return e.filter(function (r) {
      return we(t, r);
    });
  }

  function ie(t, e, r, n, o, i) {
    if (arguments.length === 5) {
      i = Object.keys(t);
      var a = Object.keys(e);
      if (i.length !== a.length) return !1;
    }

    for (var c = 0; c < i.length; c++) if (!ae(e, i[c])) return !1;

    if (r && arguments.length === 5) {
      var u = Oe(t);

      if (u.length !== 0) {
        var f = 0;

        for (c = 0; c < u.length; c++) {
          var l = u[c];

          if (we(t, l)) {
            if (!we(e, l)) return !1;
            i.push(l), f++;
          } else if (we(e, l)) return !1;
        }

        var s = Oe(e);
        if (u.length !== s.length && Nr(e, s).length !== f) return !1;
      } else {
        var p = Oe(e);
        if (p.length !== 0 && Nr(e, p).length !== 0) return !1;
      }
    }

    if (i.length === 0 && (o === Ke || o === tt && t.length === 0 || t.size === 0)) return !0;
    if (n === void 0) n = {
      val1: new Map(),
      val2: new Map(),
      position: 0
    };else {
      var d = n.val1.get(t);

      if (d !== void 0) {
        var v = n.val2.get(e);
        if (v !== void 0) return d === v;
      }

      n.position++;
    }
    n.val1.set(t, n.position), n.val2.set(e, n.position);
    var w = zo(t, e, r, i, n, o);
    return n.val1.delete(t), n.val2.delete(e), w;
  }

  function xr(t, e, r, n) {
    for (var o = Ae(t), i = 0; i < o.length; i++) {
      var a = o[i];
      if (O(e, a, r, n)) return t.delete(a), !0;
    }

    return !1;
  }

  function Mr(t) {
    switch (E(t)) {
      case "undefined":
        return null;

      case "object":
        return;

      case "symbol":
        return !1;

      case "string":
        t = +t;

      case "number":
        if (Ze(t)) return !1;
    }

    return !0;
  }

  function Lo(t, e, r) {
    var n = Mr(r);
    return n ?? (e.has(n) && !t.has(n));
  }

  function Vo(t, e, r, n, o) {
    var i = Mr(r);
    if (i != null) return i;
    var a = e.get(i);
    return a === void 0 && !e.has(i) || !O(n, a, !1, o) ? !1 : !t.has(i) && O(n, a, !1, o);
  }

  function ko(t, e, r, n) {
    for (var o = null, i = Ae(t), a = 0; a < i.length; a++) {
      var c = i[a];
      if (E(c) === "object" && c !== null) o === null && (o = new Set()), o.add(c);else if (!e.has(c)) {
        if (r || !Lo(t, e, c)) return !1;
        o === null && (o = new Set()), o.add(c);
      }
    }

    if (o !== null) {
      for (var u = Ae(e), f = 0; f < u.length; f++) {
        var l = u[f];

        if (E(l) === "object" && l !== null) {
          if (!xr(o, l, r, n)) return !1;
        } else if (!r && !t.has(l) && !xr(o, l, r, n)) return !1;
      }

      return o.size === 0;
    }

    return !0;
  }

  function Fr(t, e, r, n, o, i) {
    for (var a = Ae(t), c = 0; c < a.length; c++) {
      var u = a[c];
      if (O(r, u, o, i) && O(n, e.get(u), o, i)) return t.delete(u), !0;
    }

    return !1;
  }

  function Wo(t, e, r, n) {
    for (var o = null, i = Or(t), a = 0; a < i.length; a++) {
      var c = Sr(i[a], 2),
          u = c[0],
          f = c[1];
      if (E(u) === "object" && u !== null) o === null && (o = new Set()), o.add(u);else {
        var l = e.get(u);

        if (l === void 0 && !e.has(u) || !O(f, l, r, n)) {
          if (r || !Vo(t, e, u, f, n)) return !1;
          o === null && (o = new Set()), o.add(u);
        }
      }
    }

    if (o !== null) {
      for (var s = Or(e), p = 0; p < s.length; p++) {
        var d = Sr(s[p], 2),
            u = d[0],
            v = d[1];

        if (E(u) === "object" && u !== null) {
          if (!Fr(o, t, u, v, r, n)) return !1;
        } else if (!r && (!t.has(u) || !O(t.get(u), v, !1, n)) && !Fr(o, t, u, v, !1, n)) return !1;
      }

      return o.size === 0;
    }

    return !0;
  }

  function zo(t, e, r, n, o, i) {
    var a = 0;

    if (i === Dr) {
      if (!ko(t, e, r, o)) return !1;
    } else if (i === Ur) {
      if (!Wo(t, e, r, o)) return !1;
    } else if (i === tt) for (; a < t.length; a++) if (ae(t, a)) {
      if (!ae(e, a) || !O(t[a], e[a], r, o)) return !1;
    } else {
      if (ae(e, a)) return !1;

      for (var c = Object.keys(t); a < c.length; a++) {
        var u = c[a];
        if (!ae(e, u) || !O(t[u], e[u], r, o)) return !1;
      }

      return c.length === Object.keys(e).length;
    }

    for (a = 0; a < n.length; a++) {
      var f = n[a];
      if (!O(t[f], e[f], r, o)) return !1;
    }

    return !0;
  }

  function Yo(t, e) {
    return O(t, e, Do);
  }

  function Co(t, e) {
    return O(t, e, _o);
  }

  $r.exports = {
    isDeepEqual: Yo,
    isDeepStrictEqual: Co
  };
});
var se = g((Ii, tn) => {
  "use strict";

  function N(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? N = function (r) {
      return typeof r;
    } : N = function (r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, N(t);
  }

  function Ho(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  var Jo = Fe(),
      ue = Jo.codes,
      Br = ue.ERR_AMBIGUOUS_ARGUMENT,
      ce = ue.ERR_INVALID_ARG_TYPE,
      Xo = ue.ERR_INVALID_ARG_VALUE,
      Qo = ue.ERR_INVALID_RETURN_VALUE,
      F = ue.ERR_MISSING_ARGS,
      M = ht(),
      Zo = __util$,
      Ko = Zo.inspect,
      Wr = __util$.types,
      ei = Wr.isPromise,
      rt = Wr.isRegExp,
      ti = Object.assign ? Object.assign : vt().assign,
      zr = Object.is ? Object.is : Je(),
      x,
      Pe;

  function fe() {
    var t = Gr();
    x = t.isDeepEqual, Pe = t.isDeepStrictEqual;
  }

  var Lr = !1,
      h = tn.exports = nt,
      je = {};

  function j(t) {
    throw t.message instanceof Error ? t.message : new M(t);
  }

  function Yr(t, e, r, n, o) {
    var i = arguments.length,
        a;
    if (i === 0) a = "Failed";else if (i === 1) r = t, t = void 0;else {
      if (Lr === !1) {
        Lr = !0;
        var c = __Process$.emitWarning ? __Process$.emitWarning : console.warn.bind(console);
        c("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
      }

      i === 2 && (n = "!=");
    }
    if (r instanceof Error) throw r;
    var u = {
      actual: t,
      expected: e,
      operator: n === void 0 ? "fail" : n,
      stackStartFn: o || Yr
    };
    r !== void 0 && (u.message = r);
    var f = new M(u);
    throw a && (f.message = a, f.generatedMessage = !0), f;
  }

  h.fail = Yr;
  h.AssertionError = M;

  function Cr(t, e, r, n) {
    if (!r) {
      var o = !1;
      if (e === 0) o = !0, n = "No value argument passed to `assert.ok()`";else if (n instanceof Error) throw n;
      var i = new M({
        actual: r,
        expected: !0,
        message: n,
        operator: "==",
        stackStartFn: t
      });
      throw i.generatedMessage = o, i;
    }
  }

  function nt() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];

    Cr.apply(void 0, [nt, e.length].concat(e));
  }

  h.ok = nt;

  h.equal = function t(e, r, n) {
    if (arguments.length < 2) throw new F("actual", "expected");
    e != r && j({
      actual: e,
      expected: r,
      message: n,
      operator: "==",
      stackStartFn: t
    });
  };

  h.notEqual = function t(e, r, n) {
    if (arguments.length < 2) throw new F("actual", "expected");
    e == r && j({
      actual: e,
      expected: r,
      message: n,
      operator: "!=",
      stackStartFn: t
    });
  };

  h.deepEqual = function t(e, r, n) {
    if (arguments.length < 2) throw new F("actual", "expected");
    x === void 0 && fe(), x(e, r) || j({
      actual: e,
      expected: r,
      message: n,
      operator: "deepEqual",
      stackStartFn: t
    });
  };

  h.notDeepEqual = function t(e, r, n) {
    if (arguments.length < 2) throw new F("actual", "expected");
    x === void 0 && fe(), x(e, r) && j({
      actual: e,
      expected: r,
      message: n,
      operator: "notDeepEqual",
      stackStartFn: t
    });
  };

  h.deepStrictEqual = function t(e, r, n) {
    if (arguments.length < 2) throw new F("actual", "expected");
    x === void 0 && fe(), Pe(e, r) || j({
      actual: e,
      expected: r,
      message: n,
      operator: "deepStrictEqual",
      stackStartFn: t
    });
  };

  h.notDeepStrictEqual = Hr;

  function Hr(t, e, r) {
    if (arguments.length < 2) throw new F("actual", "expected");
    x === void 0 && fe(), Pe(t, e) && j({
      actual: t,
      expected: e,
      message: r,
      operator: "notDeepStrictEqual",
      stackStartFn: Hr
    });
  }

  h.strictEqual = function t(e, r, n) {
    if (arguments.length < 2) throw new F("actual", "expected");
    zr(e, r) || j({
      actual: e,
      expected: r,
      message: n,
      operator: "strictEqual",
      stackStartFn: t
    });
  };

  h.notStrictEqual = function t(e, r, n) {
    if (arguments.length < 2) throw new F("actual", "expected");
    zr(e, r) && j({
      actual: e,
      expected: r,
      message: n,
      operator: "notStrictEqual",
      stackStartFn: t
    });
  };

  var Vr = function t(e, r, n) {
    var o = this;
    Ho(this, t), r.forEach(function (i) {
      i in e && (n !== void 0 && typeof n[i] == "string" && rt(e[i]) && e[i].test(n[i]) ? o[i] = n[i] : o[i] = e[i]);
    });
  };

  function ri(t, e, r, n, o, i) {
    if (!(r in t) || !Pe(t[r], e[r])) {
      if (!n) {
        var a = new Vr(t, o),
            c = new Vr(e, o, t),
            u = new M({
          actual: a,
          expected: c,
          operator: "deepStrictEqual",
          stackStartFn: i
        });
        throw u.actual = t, u.expected = e, u.operator = i.name, u;
      }

      j({
        actual: t,
        expected: e,
        message: n,
        operator: i.name,
        stackStartFn: i
      });
    }
  }

  function Jr(t, e, r, n) {
    if (typeof e != "function") {
      if (rt(e)) return e.test(t);
      if (arguments.length === 2) throw new ce("expected", ["Function", "RegExp"], e);

      if (N(t) !== "object" || t === null) {
        var o = new M({
          actual: t,
          expected: e,
          message: r,
          operator: "deepStrictEqual",
          stackStartFn: n
        });
        throw o.operator = n.name, o;
      }

      var i = Object.keys(e);
      if (e instanceof Error) i.push("name", "message");else if (i.length === 0) throw new Xo("error", e, "may not be an empty object");
      return x === void 0 && fe(), i.forEach(function (a) {
        typeof t[a] == "string" && rt(e[a]) && e[a].test(t[a]) || ri(t, e, a, r, i, n);
      }), !0;
    }

    return e.prototype !== void 0 && t instanceof e ? !0 : Error.isPrototypeOf(e) ? !1 : e.call({}, t) === !0;
  }

  function Xr(t) {
    if (typeof t != "function") throw new ce("fn", "Function", t);

    try {
      t();
    } catch (e) {
      return e;
    }

    return je;
  }

  function kr(t) {
    return ei(t) || t !== null && N(t) === "object" && typeof t.then == "function" && typeof t.catch == "function";
  }

  function Qr(t) {
    return Promise.resolve().then(function () {
      var e;

      if (typeof t == "function") {
        if (e = t(), !kr(e)) throw new Qo("instance of Promise", "promiseFn", e);
      } else if (kr(t)) e = t;else throw new ce("promiseFn", ["Function", "Promise"], t);

      return Promise.resolve().then(function () {
        return e;
      }).then(function () {
        return je;
      }).catch(function (r) {
        return r;
      });
    });
  }

  function Zr(t, e, r, n) {
    if (typeof r == "string") {
      if (arguments.length === 4) throw new ce("error", ["Object", "Error", "Function", "RegExp"], r);

      if (N(e) === "object" && e !== null) {
        if (e.message === r) throw new Br("error/message", 'The error message "'.concat(e.message, '" is identical to the message.'));
      } else if (e === r) throw new Br("error/message", 'The error "'.concat(e, '" is identical to the message.'));

      n = r, r = void 0;
    } else if (r != null && N(r) !== "object" && typeof r != "function") throw new ce("error", ["Object", "Error", "Function", "RegExp"], r);

    if (e === je) {
      var o = "";
      r && r.name && (o += " (".concat(r.name, ")")), o += n ? ": ".concat(n) : ".";
      var i = t.name === "rejects" ? "rejection" : "exception";
      j({
        actual: void 0,
        expected: r,
        operator: t.name,
        message: "Missing expected ".concat(i).concat(o),
        stackStartFn: t
      });
    }

    if (r && !Jr(e, r, n, t)) throw e;
  }

  function Kr(t, e, r, n) {
    if (e !== je) {
      if (typeof r == "string" && (n = r, r = void 0), !r || Jr(e, r)) {
        var o = n ? ": ".concat(n) : ".",
            i = t.name === "doesNotReject" ? "rejection" : "exception";
        j({
          actual: e,
          expected: r,
          operator: t.name,
          message: "Got unwanted ".concat(i).concat(o, `
`) + 'Actual message: "'.concat(e && e.message, '"'),
          stackStartFn: t
        });
      }

      throw e;
    }
  }

  h.throws = function t(e) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];

    Zr.apply(void 0, [t, Xr(e)].concat(n));
  };

  h.rejects = function t(e) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];

    return Qr(e).then(function (i) {
      return Zr.apply(void 0, [t, i].concat(n));
    });
  };

  h.doesNotThrow = function t(e) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];

    Kr.apply(void 0, [t, Xr(e)].concat(n));
  };

  h.doesNotReject = function t(e) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];

    return Qr(e).then(function (i) {
      return Kr.apply(void 0, [t, i].concat(n));
    });
  };

  h.ifError = function t(e) {
    if (e != null) {
      var r = "ifError got unwanted exception: ";
      N(e) === "object" && typeof e.message == "string" ? e.message.length === 0 && e.constructor ? r += e.constructor.name : r += e.message : r += Ko(e);
      var n = new M({
        actual: e,
        expected: null,
        operator: "ifError",
        message: r,
        stackStartFn: t
      }),
          o = e.stack;

      if (typeof o == "string") {
        var i = o.split(`
`);
        i.shift();

        for (var a = n.stack.split(`
`), c = 0; c < i.length; c++) {
          var u = a.indexOf(i[c]);

          if (u !== -1) {
            a = a.slice(0, u);
            break;
          }
        }

        n.stack = "".concat(a.join(`
`), `
`).concat(i.join(`
`));
      }

      throw n;
    }
  };

  function en() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];

    Cr.apply(void 0, [en, e.length].concat(e));
  }

  h.strict = ti(en, h, {
    equal: h.strictEqual,
    deepEqual: h.deepStrictEqual,
    notEqual: h.notStrictEqual,
    notDeepEqual: h.notDeepStrictEqual
  });
  h.strict.strict = h.strict;
});
var nn = ln(se()),
    {
  fail: Ni,
  AssertionError: xi,
  ok: Fi,
  equal: Ti,
  notEqual: _i,
  deepEqual: Di,
  notDeepEqual: Ui,
  deepStrictEqual: Mi,
  notDeepStrictEqual: $i,
  strictEqual: Gi,
  notStrictEqual: Bi,
  rejects: Li,
  doesNotThrow: Vi,
  doesNotReject: ki,
  ifError: Wi,
  strict: zi
} = nn,
    {
  default: rn,
  ...ni
} = nn,
    Yi = rn !== void 0 ? rn : ni;
export { xi as AssertionError, Di as deepEqual, Mi as deepStrictEqual, Yi as default, ki as doesNotReject, Vi as doesNotThrow, Ti as equal, Ni as fail, Wi as ifError, Ui as notDeepEqual, $i as notDeepStrictEqual, _i as notEqual, Bi as notStrictEqual, Fi as ok, Li as rejects, zi as strict, Gi as strictEqual };
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */