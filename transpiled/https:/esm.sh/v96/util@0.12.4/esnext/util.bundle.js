/* esm.sh - esbuild bundle(util@0.12.4) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v96/node_process.js";

var __global$ = globalThis || (typeof window !== "undefined" ? window : self);

var st = Object.create;
var Gr = Object.defineProperty;
var ut = Object.getOwnPropertyDescriptor;
var yt = Object.getOwnPropertyNames;
var ct = Object.getPrototypeOf,
    pt = Object.prototype.hasOwnProperty;

var p = (r, e) => () => (e || r((e = {
  exports: {}
}).exports, e), e.exports);

var lt = (r, e, t, n) => {
  if (e && typeof e == "object" || typeof e == "function") for (let o of yt(e)) !pt.call(r, o) && o !== t && Gr(r, o, {
    get: () => e[o],
    enumerable: !(n = ut(e, o)) || n.enumerable
  });
  return r;
};

var gt = (r, e, t) => (t = r != null ? st(ct(r)) : {}, lt(e || !r || !r.__esModule ? Gr(t, "default", {
  value: r,
  enumerable: !0
}) : t, r));

var pr = p((so, _r) => {
  "use strict";

  _r.exports = function () {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
    if (typeof Symbol.iterator == "symbol") return !0;
    var e = {},
        t = Symbol("test"),
        n = Object(t);
    if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
    var o = 42;
    e[t] = o;

    for (t in e) return !1;

    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
    var a = Object.getOwnPropertySymbols(e);
    if (a.length !== 1 || a[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t)) return !1;

    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var i = Object.getOwnPropertyDescriptor(e, t);
      if (i.value !== o || i.enumerable !== !0) return !1;
    }

    return !0;
  };
});
var x = p((uo, Wr) => {
  "use strict";

  var dt = pr();

  Wr.exports = function () {
    return dt() && !!Symbol.toStringTag;
  };
});
var Jr = p((yo, Vr) => {
  "use strict";

  var zr = typeof Symbol < "u" && Symbol,
      bt = pr();

  Vr.exports = function () {
    return typeof zr != "function" || typeof Symbol != "function" || typeof zr("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : bt();
  };
});
var Hr = p((co, Lr) => {
  "use strict";

  var mt = "Function.prototype.bind called on incompatible ",
      lr = Array.prototype.slice,
      At = Object.prototype.toString,
      ht = "[object Function]";

  Lr.exports = function (e) {
    var t = this;
    if (typeof t != "function" || At.call(t) !== ht) throw new TypeError(mt + t);

    for (var n = lr.call(arguments, 1), o, a = function () {
      if (this instanceof o) {
        var g = t.apply(this, n.concat(lr.call(arguments)));
        return Object(g) === g ? g : this;
      } else return t.apply(e, n.concat(lr.call(arguments)));
    }, i = Math.max(0, t.length - n.length), f = [], y = 0; y < i; y++) f.push("$" + y);

    if (o = Function("binder", "return function (" + f.join(",") + "){ return binder.apply(this,arguments); }")(a), t.prototype) {
      var l = function () {};

      l.prototype = t.prototype, o.prototype = new l(), l.prototype = null;
    }

    return o;
  };
});
var W = p((po, Zr) => {
  "use strict";

  var St = Hr();
  Zr.exports = Function.prototype.bind || St;
});
var Kr = p((lo, Yr) => {
  "use strict";

  var vt = W();
  Yr.exports = vt.call(Function.call, Object.prototype.hasOwnProperty);
});
var J = p((go, ee) => {
  "use strict";

  var c,
      B = SyntaxError,
      re = Function,
      F = TypeError,
      gr = function (r) {
    try {
      return re('"use strict"; return (' + r + ").constructor;")();
    } catch {}
  },
      v = Object.getOwnPropertyDescriptor;

  if (v) try {
    v({}, "");
  } catch {
    v = null;
  }

  var dr = function () {
    throw new F();
  },
      Ot = v ? function () {
    try {
      return arguments.callee, dr;
    } catch {
      try {
        return v(arguments, "callee").get;
      } catch {
        return dr;
      }
    }
  }() : dr,
      E = Jr()(),
      A = Object.getPrototypeOf || function (r) {
    return r.__proto__;
  },
      T = {},
      jt = typeof Uint8Array > "u" ? c : A(Uint8Array),
      I = {
    "%AggregateError%": typeof AggregateError > "u" ? c : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? c : ArrayBuffer,
    "%ArrayIteratorPrototype%": E ? A([][Symbol.iterator]()) : c,
    "%AsyncFromSyncIteratorPrototype%": c,
    "%AsyncFunction%": T,
    "%AsyncGenerator%": T,
    "%AsyncGeneratorFunction%": T,
    "%AsyncIteratorPrototype%": T,
    "%Atomics%": typeof Atomics > "u" ? c : Atomics,
    "%BigInt%": typeof BigInt > "u" ? c : BigInt,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? c : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array > "u" ? c : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? c : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? c : FinalizationRegistry,
    "%Function%": re,
    "%GeneratorFunction%": T,
    "%Int8Array%": typeof Int8Array > "u" ? c : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? c : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? c : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": E ? A(A([][Symbol.iterator]())) : c,
    "%JSON%": typeof JSON == "object" ? JSON : c,
    "%Map%": typeof Map > "u" ? c : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !E ? c : A(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? c : Promise,
    "%Proxy%": typeof Proxy > "u" ? c : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect > "u" ? c : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? c : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !E ? c : A(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? c : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": E ? A(""[Symbol.iterator]()) : c,
    "%Symbol%": E ? Symbol : c,
    "%SyntaxError%": B,
    "%ThrowTypeError%": Ot,
    "%TypedArray%": jt,
    "%TypeError%": F,
    "%Uint8Array%": typeof Uint8Array > "u" ? c : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? c : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? c : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? c : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap > "u" ? c : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? c : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? c : WeakSet
  },
      Pt = function r(e) {
    var t;
    if (e === "%AsyncFunction%") t = gr("async function () {}");else if (e === "%GeneratorFunction%") t = gr("function* () {}");else if (e === "%AsyncGeneratorFunction%") t = gr("async function* () {}");else if (e === "%AsyncGenerator%") {
      var n = r("%AsyncGeneratorFunction%");
      n && (t = n.prototype);
    } else if (e === "%AsyncIteratorPrototype%") {
      var o = r("%AsyncGenerator%");
      o && (t = A(o.prototype));
    }
    return I[e] = t, t;
  },
      Qr = {
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
      M = W(),
      z = Kr(),
      wt = M.call(Function.call, Array.prototype.concat),
      Et = M.call(Function.apply, Array.prototype.splice),
      Xr = M.call(Function.call, String.prototype.replace),
      V = M.call(Function.call, String.prototype.slice),
      Tt = M.call(Function.call, RegExp.prototype.exec),
      Ft = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      It = /\\(\\)?/g,
      Bt = function (e) {
    var t = V(e, 0, 1),
        n = V(e, -1);
    if (t === "%" && n !== "%") throw new B("invalid intrinsic syntax, expected closing `%`");
    if (n === "%" && t !== "%") throw new B("invalid intrinsic syntax, expected opening `%`");
    var o = [];
    return Xr(e, Ft, function (a, i, f, y) {
      o[o.length] = f ? Xr(y, It, "$1") : i || a;
    }), o;
  },
      Ut = function (e, t) {
    var n = e,
        o;

    if (z(Qr, n) && (o = Qr[n], n = "%" + o[0] + "%"), z(I, n)) {
      var a = I[n];
      if (a === T && (a = Pt(n)), typeof a > "u" && !t) throw new F("intrinsic " + e + " exists, but is not available. Please file an issue!");
      return {
        alias: o,
        name: n,
        value: a
      };
    }

    throw new B("intrinsic " + e + " does not exist!");
  };

  ee.exports = function (e, t) {
    if (typeof e != "string" || e.length === 0) throw new F("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof t != "boolean") throw new F('"allowMissing" argument must be a boolean');
    if (Tt(/^%?[^%]*%?$/, e) === null) throw new B("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var n = Bt(e),
        o = n.length > 0 ? n[0] : "",
        a = Ut("%" + o + "%", t),
        i = a.name,
        f = a.value,
        y = !1,
        l = a.alias;
    l && (o = l[0], Et(n, wt([0, 1], l)));

    for (var g = 1, S = !0; g < n.length; g += 1) {
      var d = n[g],
          w = V(d, 0, 1),
          G = V(d, -1);
      if ((w === '"' || w === "'" || w === "`" || G === '"' || G === "'" || G === "`") && w !== G) throw new B("property names with quotes must have matching quotes");
      if ((d === "constructor" || !S) && (y = !0), o += "." + d, i = "%" + o + "%", z(I, i)) f = I[i];else if (f != null) {
        if (!(d in f)) {
          if (!t) throw new F("base intrinsic for " + e + " exists, but the property is not available.");
          return;
        }

        if (v && g + 1 >= n.length) {
          var _ = v(f, d);

          S = !!_, S && "get" in _ && !("originalValue" in _.get) ? f = _.get : f = f[d];
        } else S = z(f, d), f = f[d];

        S && !y && (I[i] = f);
      }
    }

    return f;
  };
});
var fe = p((bo, L) => {
  "use strict";

  var br = W(),
      U = J(),
      oe = U("%Function.prototype.apply%"),
      ie = U("%Function.prototype.call%"),
      ae = U("%Reflect.apply%", !0) || br.call(ie, oe),
      te = U("%Object.getOwnPropertyDescriptor%", !0),
      O = U("%Object.defineProperty%", !0),
      Rt = U("%Math.max%");
  if (O) try {
    O({}, "a", {
      value: 1
    });
  } catch {
    O = null;
  }

  L.exports = function (e) {
    var t = ae(br, ie, arguments);

    if (te && O) {
      var n = te(t, "length");
      n.configurable && O(t, "length", {
        value: 1 + Rt(0, e.length - (arguments.length - 1))
      });
    }

    return t;
  };

  var ne = function () {
    return ae(br, oe, arguments);
  };

  O ? O(L.exports, "apply", {
    value: ne
  }) : L.exports.apply = ne;
});
var H = p((mo, ye) => {
  "use strict";

  var se = J(),
      ue = fe(),
      Dt = ue(se("String.prototype.indexOf"));

  ye.exports = function (e, t) {
    var n = se(e, !!t);
    return typeof n == "function" && Dt(e, ".prototype.") > -1 ? ue(n) : n;
  };
});
var le = p((Ao, pe) => {
  "use strict";

  var kt = x()(),
      xt = H(),
      mr = xt("Object.prototype.toString"),
      Z = function (e) {
    return kt && e && typeof e == "object" && Symbol.toStringTag in e ? !1 : mr(e) === "[object Arguments]";
  },
      ce = function (e) {
    return Z(e) ? !0 : e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && mr(e) !== "[object Array]" && mr(e.callee) === "[object Function]";
  },
      Mt = function () {
    return Z(arguments);
  }();

  Z.isLegacyArguments = ce;
  pe.exports = Mt ? Z : ce;
});
var be = p((ho, de) => {
  "use strict";

  var Nt = Object.prototype.toString,
      Ct = Function.prototype.toString,
      $t = /^\s*(?:function)?\*/,
      ge = x()(),
      Ar = Object.getPrototypeOf,
      qt = function () {
    if (!ge) return !1;

    try {
      return Function("return function*() {}")();
    } catch {}
  },
      hr;

  de.exports = function (e) {
    if (typeof e != "function") return !1;
    if ($t.test(Ct.call(e))) return !0;

    if (!ge) {
      var t = Nt.call(e);
      return t === "[object GeneratorFunction]";
    }

    if (!Ar) return !1;

    if (typeof hr > "u") {
      var n = qt();
      hr = n ? Ar(n) : !1;
    }

    return Ar(e) === hr;
  };
});
var Se = p((So, he) => {
  "use strict";

  var Ae = Function.prototype.toString,
      R = typeof Reflect == "object" && Reflect !== null && Reflect.apply,
      vr,
      Y;
  if (typeof R == "function" && typeof Object.defineProperty == "function") try {
    vr = Object.defineProperty({}, "length", {
      get: function () {
        throw Y;
      }
    }), Y = {}, R(function () {
      throw 42;
    }, null, vr);
  } catch (r) {
    r !== Y && (R = null);
  } else R = null;

  var Gt = /^\s*class\b/,
      Or = function (e) {
    try {
      var t = Ae.call(e);
      return Gt.test(t);
    } catch {
      return !1;
    }
  },
      Sr = function (e) {
    try {
      return Or(e) ? !1 : (Ae.call(e), !0);
    } catch {
      return !1;
    }
  },
      K = Object.prototype.toString,
      _t = "[object Object]",
      Wt = "[object Function]",
      zt = "[object GeneratorFunction]",
      Vt = "[object HTMLAllCollection]",
      Jt = "[object HTML document.all class]",
      Lt = "[object HTMLCollection]",
      Ht = typeof Symbol == "function" && !!Symbol.toStringTag,
      Zt = !(0 in [,]),
      jr = function () {
    return !1;
  };

  typeof document == "object" && (me = document.all, K.call(me) === K.call(document.all) && (jr = function (e) {
    if ((Zt || !e) && (typeof e > "u" || typeof e == "object")) try {
      var t = K.call(e);
      return (t === Vt || t === Jt || t === Lt || t === _t) && e("") == null;
    } catch {}
    return !1;
  }));
  var me;
  he.exports = R ? function (e) {
    if (jr(e)) return !0;
    if (!e || typeof e != "function" && typeof e != "object") return !1;

    try {
      R(e, null, vr);
    } catch (t) {
      if (t !== Y) return !1;
    }

    return !Or(e) && Sr(e);
  } : function (e) {
    if (jr(e)) return !0;
    if (!e || typeof e != "function" && typeof e != "object") return !1;
    if (Ht) return Sr(e);
    if (Or(e)) return !1;
    var t = K.call(e);
    return t !== Wt && t !== zt && !/^\[object HTML/.test(t) ? !1 : Sr(e);
  };
});
var Pr = p((vo, Oe) => {
  "use strict";

  var Yt = Se(),
      Kt = Object.prototype.toString,
      ve = Object.prototype.hasOwnProperty,
      Qt = function (e, t, n) {
    for (var o = 0, a = e.length; o < a; o++) ve.call(e, o) && (n == null ? t(e[o], o, e) : t.call(n, e[o], o, e));
  },
      Xt = function (e, t, n) {
    for (var o = 0, a = e.length; o < a; o++) n == null ? t(e.charAt(o), o, e) : t.call(n, e.charAt(o), o, e);
  },
      rn = function (e, t, n) {
    for (var o in e) ve.call(e, o) && (n == null ? t(e[o], o, e) : t.call(n, e[o], o, e));
  },
      en = function (e, t, n) {
    if (!Yt(t)) throw new TypeError("iterator must be a function");
    var o;
    arguments.length >= 3 && (o = n), Kt.call(e) === "[object Array]" ? Qt(e, t, o) : typeof e == "string" ? Xt(e, t, o) : rn(e, t, o);
  };

  Oe.exports = en;
});
var Er = p((Oo, je) => {
  "use strict";

  var wr = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"],
      tn = typeof globalThis > "u" ? __global$ : globalThis;

  je.exports = function () {
    for (var e = [], t = 0; t < wr.length; t++) typeof tn[wr[t]] == "function" && (e[e.length] = wr[t]);

    return e;
  };
});
var Tr = p((jo, Pe) => {
  "use strict";

  var nn = J(),
      Q = nn("%Object.getOwnPropertyDescriptor%", !0);
  if (Q) try {
    Q([], "length");
  } catch {
    Q = null;
  }
  Pe.exports = Q;
});
var Br = p((Po, Ie) => {
  "use strict";

  var we = Pr(),
      on = Er(),
      Ir = H(),
      an = Ir("Object.prototype.toString"),
      Ee = x()(),
      fn = typeof globalThis > "u" ? __global$ : globalThis,
      Te = on(),
      sn = Ir("Array.prototype.indexOf", !0) || function (e, t) {
    for (var n = 0; n < e.length; n += 1) if (e[n] === t) return n;

    return -1;
  },
      un = Ir("String.prototype.slice"),
      Fe = {},
      X = Tr(),
      Fr = Object.getPrototypeOf;

  Ee && X && Fr && we(Te, function (r) {
    var e = new fn[r]();

    if (Symbol.toStringTag in e) {
      var t = Fr(e),
          n = X(t, Symbol.toStringTag);

      if (!n) {
        var o = Fr(t);
        n = X(o, Symbol.toStringTag);
      }

      Fe[r] = n.get;
    }
  });

  var yn = function (e) {
    var t = !1;
    return we(Fe, function (n, o) {
      if (!t) try {
        t = n.call(e) === o;
      } catch {}
    }), t;
  };

  Ie.exports = function (e) {
    if (!e || typeof e != "object") return !1;

    if (!Ee || !(Symbol.toStringTag in e)) {
      var t = un(an(e), 8, -1);
      return sn(Te, t) > -1;
    }

    return X ? yn(e) : !1;
  };
});
var Me = p((wo, xe) => {
  "use strict";

  var Ue = Pr(),
      cn = Er(),
      Re = H(),
      pn = Re("Object.prototype.toString"),
      De = x()(),
      Be = typeof globalThis > "u" ? __global$ : globalThis,
      ln = cn(),
      gn = Re("String.prototype.slice"),
      ke = {},
      Ur = Tr(),
      Rr = Object.getPrototypeOf;
  De && Ur && Rr && Ue(ln, function (r) {
    if (typeof Be[r] == "function") {
      var e = new Be[r]();

      if (Symbol.toStringTag in e) {
        var t = Rr(e),
            n = Ur(t, Symbol.toStringTag);

        if (!n) {
          var o = Rr(t);
          n = Ur(o, Symbol.toStringTag);
        }

        ke[r] = n.get;
      }
    }
  });

  var dn = function (e) {
    var t = !1;
    return Ue(ke, function (n, o) {
      if (!t) try {
        var a = n.call(e);
        a === o && (t = a);
      } catch {}
    }), t;
  },
      bn = Br();

  xe.exports = function (e) {
    return bn(e) ? !De || !(Symbol.toStringTag in e) ? gn(pn(e), 8, -1) : dn(e) : !1;
  };
});
var Ye = p(s => {
  "use strict";

  var mn = le(),
      An = be(),
      m = Me(),
      Ne = Br();

  function D(r) {
    return r.call.bind(r);
  }

  var Ce = typeof BigInt < "u",
      $e = typeof Symbol < "u",
      b = D(Object.prototype.toString),
      hn = D(Number.prototype.valueOf),
      Sn = D(String.prototype.valueOf),
      vn = D(Boolean.prototype.valueOf);
  Ce && (qe = D(BigInt.prototype.valueOf));
  var qe;
  $e && (Ge = D(Symbol.prototype.valueOf));
  var Ge;

  function C(r, e) {
    if (typeof r != "object") return !1;

    try {
      return e(r), !0;
    } catch {
      return !1;
    }
  }

  s.isArgumentsObject = mn;
  s.isGeneratorFunction = An;
  s.isTypedArray = Ne;

  function On(r) {
    return typeof Promise < "u" && r instanceof Promise || r !== null && typeof r == "object" && typeof r.then == "function" && typeof r.catch == "function";
  }

  s.isPromise = On;

  function jn(r) {
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(r) : Ne(r) || We(r);
  }

  s.isArrayBufferView = jn;

  function Pn(r) {
    return m(r) === "Uint8Array";
  }

  s.isUint8Array = Pn;

  function wn(r) {
    return m(r) === "Uint8ClampedArray";
  }

  s.isUint8ClampedArray = wn;

  function En(r) {
    return m(r) === "Uint16Array";
  }

  s.isUint16Array = En;

  function Tn(r) {
    return m(r) === "Uint32Array";
  }

  s.isUint32Array = Tn;

  function Fn(r) {
    return m(r) === "Int8Array";
  }

  s.isInt8Array = Fn;

  function In(r) {
    return m(r) === "Int16Array";
  }

  s.isInt16Array = In;

  function Bn(r) {
    return m(r) === "Int32Array";
  }

  s.isInt32Array = Bn;

  function Un(r) {
    return m(r) === "Float32Array";
  }

  s.isFloat32Array = Un;

  function Rn(r) {
    return m(r) === "Float64Array";
  }

  s.isFloat64Array = Rn;

  function Dn(r) {
    return m(r) === "BigInt64Array";
  }

  s.isBigInt64Array = Dn;

  function kn(r) {
    return m(r) === "BigUint64Array";
  }

  s.isBigUint64Array = kn;

  function rr(r) {
    return b(r) === "[object Map]";
  }

  rr.working = typeof Map < "u" && rr(new Map());

  function xn(r) {
    return typeof Map > "u" ? !1 : rr.working ? rr(r) : r instanceof Map;
  }

  s.isMap = xn;

  function er(r) {
    return b(r) === "[object Set]";
  }

  er.working = typeof Set < "u" && er(new Set());

  function Mn(r) {
    return typeof Set > "u" ? !1 : er.working ? er(r) : r instanceof Set;
  }

  s.isSet = Mn;

  function tr(r) {
    return b(r) === "[object WeakMap]";
  }

  tr.working = typeof WeakMap < "u" && tr(new WeakMap());

  function Nn(r) {
    return typeof WeakMap > "u" ? !1 : tr.working ? tr(r) : r instanceof WeakMap;
  }

  s.isWeakMap = Nn;

  function kr(r) {
    return b(r) === "[object WeakSet]";
  }

  kr.working = typeof WeakSet < "u" && kr(new WeakSet());

  function Cn(r) {
    return kr(r);
  }

  s.isWeakSet = Cn;

  function nr(r) {
    return b(r) === "[object ArrayBuffer]";
  }

  nr.working = typeof ArrayBuffer < "u" && nr(new ArrayBuffer());

  function _e(r) {
    return typeof ArrayBuffer > "u" ? !1 : nr.working ? nr(r) : r instanceof ArrayBuffer;
  }

  s.isArrayBuffer = _e;

  function or(r) {
    return b(r) === "[object DataView]";
  }

  or.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && or(new DataView(new ArrayBuffer(1), 0, 1));

  function We(r) {
    return typeof DataView > "u" ? !1 : or.working ? or(r) : r instanceof DataView;
  }

  s.isDataView = We;
  var Dr = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;

  function N(r) {
    return b(r) === "[object SharedArrayBuffer]";
  }

  function ze(r) {
    return typeof Dr > "u" ? !1 : (typeof N.working > "u" && (N.working = N(new Dr())), N.working ? N(r) : r instanceof Dr);
  }

  s.isSharedArrayBuffer = ze;

  function $n(r) {
    return b(r) === "[object AsyncFunction]";
  }

  s.isAsyncFunction = $n;

  function qn(r) {
    return b(r) === "[object Map Iterator]";
  }

  s.isMapIterator = qn;

  function Gn(r) {
    return b(r) === "[object Set Iterator]";
  }

  s.isSetIterator = Gn;

  function _n(r) {
    return b(r) === "[object Generator]";
  }

  s.isGeneratorObject = _n;

  function Wn(r) {
    return b(r) === "[object WebAssembly.Module]";
  }

  s.isWebAssemblyCompiledModule = Wn;

  function Ve(r) {
    return C(r, hn);
  }

  s.isNumberObject = Ve;

  function Je(r) {
    return C(r, Sn);
  }

  s.isStringObject = Je;

  function Le(r) {
    return C(r, vn);
  }

  s.isBooleanObject = Le;

  function He(r) {
    return Ce && C(r, qe);
  }

  s.isBigIntObject = He;

  function Ze(r) {
    return $e && C(r, Ge);
  }

  s.isSymbolObject = Ze;

  function zn(r) {
    return Ve(r) || Je(r) || Le(r) || He(r) || Ze(r);
  }

  s.isBoxedPrimitive = zn;

  function Vn(r) {
    return typeof Uint8Array < "u" && (_e(r) || ze(r));
  }

  s.isAnyArrayBuffer = Vn;
  ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (r) {
    Object.defineProperty(s, r, {
      enumerable: !1,
      value: function () {
        throw new Error(r + " is not supported in userland");
      }
    });
  });
});
var Qe = p((To, Ke) => {
  Ke.exports = function (e) {
    return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
  };
});
var Xe = p((Fo, xr) => {
  typeof Object.create == "function" ? xr.exports = function (e, t) {
    t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : xr.exports = function (e, t) {
    if (t) {
      e.super_ = t;

      var n = function () {};

      n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e;
    }
  };
});
var it = p(u => {
  var rt = Object.getOwnPropertyDescriptors || function (e) {
    for (var t = Object.keys(e), n = {}, o = 0; o < t.length; o++) n[t[o]] = Object.getOwnPropertyDescriptor(e, t[o]);

    return n;
  },
      Jn = /%[sdj%]/g;

  u.format = function (r) {
    if (!cr(r)) {
      for (var e = [], t = 0; t < arguments.length; t++) e.push(h(arguments[t]));

      return e.join(" ");
    }

    for (var t = 1, n = arguments, o = n.length, a = String(r).replace(Jn, function (f) {
      if (f === "%%") return "%";
      if (t >= o) return f;

      switch (f) {
        case "%s":
          return String(n[t++]);

        case "%d":
          return Number(n[t++]);

        case "%j":
          try {
            return JSON.stringify(n[t++]);
          } catch {
            return "[Circular]";
          }

        default:
          return f;
      }
    }), i = n[t]; t < o; i = n[++t]) yr(i) || !k(i) ? a += " " + i : a += " " + h(i);

    return a;
  };

  u.deprecate = function (r, e) {
    if (typeof __Process$ < "u" && __Process$.noDeprecation === !0) return r;
    if (typeof __Process$ > "u") return function () {
      return u.deprecate(r, e).apply(this, arguments);
    };
    var t = !1;

    function n() {
      if (!t) {
        if (__Process$.throwDeprecation) throw new Error(e);
        __Process$.traceDeprecation ? console.trace(e) : console.error(e), t = !0;
      }

      return r.apply(this, arguments);
    }

    return n;
  };

  var ir = {},
      et = /^$/;
  __Process$.env.NODE_DEBUG && (ar = __Process$.env.NODE_DEBUG, ar = ar.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), et = new RegExp("^" + ar + "$", "i"));
  var ar;

  u.debuglog = function (r) {
    if (r = r.toUpperCase(), !ir[r]) if (et.test(r)) {
      var e = __Process$.pid;

      ir[r] = function () {
        var t = u.format.apply(u, arguments);
        console.error("%s %d: %s", r, e, t);
      };
    } else ir[r] = function () {};
    return ir[r];
  };

  function h(r, e) {
    var t = {
      seen: [],
      stylize: Hn
    };
    return arguments.length >= 3 && (t.depth = arguments[2]), arguments.length >= 4 && (t.colors = arguments[3]), $r(e) ? t.showHidden = e : e && u._extend(t, e), P(t.showHidden) && (t.showHidden = !1), P(t.depth) && (t.depth = 2), P(t.colors) && (t.colors = !1), P(t.customInspect) && (t.customInspect = !0), t.colors && (t.stylize = Ln), sr(t, r, t.depth);
  }

  u.inspect = h;
  h.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39]
  };
  h.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red"
  };

  function Ln(r, e) {
    var t = h.styles[e];
    return t ? "\x1B[" + h.colors[t][0] + "m" + r + "\x1B[" + h.colors[t][1] + "m" : r;
  }

  function Hn(r, e) {
    return r;
  }

  function Zn(r) {
    var e = {};
    return r.forEach(function (t, n) {
      e[t] = !0;
    }), e;
  }

  function sr(r, e, t) {
    if (r.customInspect && e && fr(e.inspect) && e.inspect !== u.inspect && !(e.constructor && e.constructor.prototype === e)) {
      var n = e.inspect(t, r);
      return cr(n) || (n = sr(r, n, t)), n;
    }

    var o = Yn(r, e);
    if (o) return o;
    var a = Object.keys(e),
        i = Zn(a);
    if (r.showHidden && (a = Object.getOwnPropertyNames(e)), q(e) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return Mr(e);

    if (a.length === 0) {
      if (fr(e)) {
        var f = e.name ? ": " + e.name : "";
        return r.stylize("[Function" + f + "]", "special");
      }

      if ($(e)) return r.stylize(RegExp.prototype.toString.call(e), "regexp");
      if (ur(e)) return r.stylize(Date.prototype.toString.call(e), "date");
      if (q(e)) return Mr(e);
    }

    var y = "",
        l = !1,
        g = ["{", "}"];

    if (tt(e) && (l = !0, g = ["[", "]"]), fr(e)) {
      var S = e.name ? ": " + e.name : "";
      y = " [Function" + S + "]";
    }

    if ($(e) && (y = " " + RegExp.prototype.toString.call(e)), ur(e) && (y = " " + Date.prototype.toUTCString.call(e)), q(e) && (y = " " + Mr(e)), a.length === 0 && (!l || e.length == 0)) return g[0] + y + g[1];
    if (t < 0) return $(e) ? r.stylize(RegExp.prototype.toString.call(e), "regexp") : r.stylize("[Object]", "special");
    r.seen.push(e);
    var d;
    return l ? d = Kn(r, e, t, i, a) : d = a.map(function (w) {
      return Cr(r, e, t, i, w, l);
    }), r.seen.pop(), Qn(d, y, g);
  }

  function Yn(r, e) {
    if (P(e)) return r.stylize("undefined", "undefined");

    if (cr(e)) {
      var t = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return r.stylize(t, "string");
    }

    if (nt(e)) return r.stylize("" + e, "number");
    if ($r(e)) return r.stylize("" + e, "boolean");
    if (yr(e)) return r.stylize("null", "null");
  }

  function Mr(r) {
    return "[" + Error.prototype.toString.call(r) + "]";
  }

  function Kn(r, e, t, n, o) {
    for (var a = [], i = 0, f = e.length; i < f; ++i) ot(e, String(i)) ? a.push(Cr(r, e, t, n, String(i), !0)) : a.push("");

    return o.forEach(function (y) {
      y.match(/^\d+$/) || a.push(Cr(r, e, t, n, y, !0));
    }), a;
  }

  function Cr(r, e, t, n, o, a) {
    var i, f, y;

    if (y = Object.getOwnPropertyDescriptor(e, o) || {
      value: e[o]
    }, y.get ? y.set ? f = r.stylize("[Getter/Setter]", "special") : f = r.stylize("[Getter]", "special") : y.set && (f = r.stylize("[Setter]", "special")), ot(n, o) || (i = "[" + o + "]"), f || (r.seen.indexOf(y.value) < 0 ? (yr(t) ? f = sr(r, y.value, null) : f = sr(r, y.value, t - 1), f.indexOf(`
`) > -1 && (a ? f = f.split(`
`).map(function (l) {
      return "  " + l;
    }).join(`
`).substr(2) : f = `
` + f.split(`
`).map(function (l) {
      return "   " + l;
    }).join(`
`))) : f = r.stylize("[Circular]", "special")), P(i)) {
      if (a && o.match(/^\d+$/)) return f;
      i = JSON.stringify("" + o), i.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (i = i.substr(1, i.length - 2), i = r.stylize(i, "name")) : (i = i.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), i = r.stylize(i, "string"));
    }

    return i + ": " + f;
  }

  function Qn(r, e, t) {
    var n = 0,
        o = r.reduce(function (a, i) {
      return n++, i.indexOf(`
`) >= 0 && n++, a + i.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    return o > 60 ? t[0] + (e === "" ? "" : e + `
 `) + " " + r.join(`,
  `) + " " + t[1] : t[0] + e + " " + r.join(", ") + " " + t[1];
  }

  u.types = Ye();

  function tt(r) {
    return Array.isArray(r);
  }

  u.isArray = tt;

  function $r(r) {
    return typeof r == "boolean";
  }

  u.isBoolean = $r;

  function yr(r) {
    return r === null;
  }

  u.isNull = yr;

  function Xn(r) {
    return r == null;
  }

  u.isNullOrUndefined = Xn;

  function nt(r) {
    return typeof r == "number";
  }

  u.isNumber = nt;

  function cr(r) {
    return typeof r == "string";
  }

  u.isString = cr;

  function ro(r) {
    return typeof r == "symbol";
  }

  u.isSymbol = ro;

  function P(r) {
    return r === void 0;
  }

  u.isUndefined = P;

  function $(r) {
    return k(r) && qr(r) === "[object RegExp]";
  }

  u.isRegExp = $;
  u.types.isRegExp = $;

  function k(r) {
    return typeof r == "object" && r !== null;
  }

  u.isObject = k;

  function ur(r) {
    return k(r) && qr(r) === "[object Date]";
  }

  u.isDate = ur;
  u.types.isDate = ur;

  function q(r) {
    return k(r) && (qr(r) === "[object Error]" || r instanceof Error);
  }

  u.isError = q;
  u.types.isNativeError = q;

  function fr(r) {
    return typeof r == "function";
  }

  u.isFunction = fr;

  function eo(r) {
    return r === null || typeof r == "boolean" || typeof r == "number" || typeof r == "string" || typeof r == "symbol" || typeof r > "u";
  }

  u.isPrimitive = eo;
  u.isBuffer = Qe();

  function qr(r) {
    return Object.prototype.toString.call(r);
  }

  function Nr(r) {
    return r < 10 ? "0" + r.toString(10) : r.toString(10);
  }

  var to = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function no() {
    var r = new Date(),
        e = [Nr(r.getHours()), Nr(r.getMinutes()), Nr(r.getSeconds())].join(":");
    return [r.getDate(), to[r.getMonth()], e].join(" ");
  }

  u.log = function () {
    console.log("%s - %s", no(), u.format.apply(u, arguments));
  };

  u.inherits = Xe();

  u._extend = function (r, e) {
    if (!e || !k(e)) return r;

    for (var t = Object.keys(e), n = t.length; n--;) r[t[n]] = e[t[n]];

    return r;
  };

  function ot(r, e) {
    return Object.prototype.hasOwnProperty.call(r, e);
  }

  var j = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;

  u.promisify = function (e) {
    if (typeof e != "function") throw new TypeError('The "original" argument must be of type Function');

    if (j && e[j]) {
      var t = e[j];
      if (typeof t != "function") throw new TypeError('The "util.promisify.custom" argument must be of type Function');
      return Object.defineProperty(t, j, {
        value: t,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), t;
    }

    function t() {
      for (var n, o, a = new Promise(function (y, l) {
        n = y, o = l;
      }), i = [], f = 0; f < arguments.length; f++) i.push(arguments[f]);

      i.push(function (y, l) {
        y ? o(y) : n(l);
      });

      try {
        e.apply(this, i);
      } catch (y) {
        o(y);
      }

      return a;
    }

    return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), j && Object.defineProperty(t, j, {
      value: t,
      enumerable: !1,
      writable: !1,
      configurable: !0
    }), Object.defineProperties(t, rt(e));
  };

  u.promisify.custom = j;

  function oo(r, e) {
    if (!r) {
      var t = new Error("Promise was rejected with a falsy value");
      t.reason = r, r = t;
    }

    return e(r);
  }

  function io(r) {
    if (typeof r != "function") throw new TypeError('The "original" argument must be of type Function');

    function e() {
      for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n]);

      var o = t.pop();
      if (typeof o != "function") throw new TypeError("The last argument must be of type Function");

      var a = this,
          i = function () {
        return o.apply(a, arguments);
      };

      r.apply(this, t).then(function (f) {
        __Process$.nextTick(i.bind(null, null, f));
      }, function (f) {
        __Process$.nextTick(oo.bind(null, f, i));
      });
    }

    return Object.setPrototypeOf(e, Object.getPrototypeOf(r)), Object.defineProperties(e, rt(r)), e;
  }

  u.callbackify = io;
});
var ft = gt(it()),
    {
  format: Bo,
  deprecate: Uo,
  debuglog: Ro,
  inspect: Do,
  types: ko,
  isArray: xo,
  isBoolean: Mo,
  isNull: No,
  isNullOrUndefined: Co,
  isNumber: $o,
  isString: qo,
  isSymbol: Go,
  isUndefined: _o,
  isRegExp: Wo,
  isObject: zo,
  isDate: Vo,
  isError: Jo,
  isFunction: Lo,
  isPrimitive: Ho,
  isBuffer: Zo,
  log: Yo,
  inherits: Ko,
  _extend: Qo,
  promisify: Xo,
  callbackify: ri
} = ft,
    {
  default: at,
  ...ao
} = ft,
    ei = at !== void 0 ? at : ao;
export { Qo as _extend, ri as callbackify, Ro as debuglog, ei as default, Uo as deprecate, Bo as format, Ko as inherits, Do as inspect, xo as isArray, Mo as isBoolean, Zo as isBuffer, Vo as isDate, Jo as isError, Lo as isFunction, No as isNull, Co as isNullOrUndefined, $o as isNumber, zo as isObject, Ho as isPrimitive, Wo as isRegExp, qo as isString, Go as isSymbol, _o as isUndefined, Yo as log, Xo as promisify, ko as types };