/* esm.sh - esbuild bundle(stream-browserify@3.0.0) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v85/node_process.js";

var __global$ = globalThis || (typeof window !== "undefined" ? window : self);

import __buffer$ from "/transpiled/https://esm.sh/v85/node_buffer.js";
import __events$ from "/transpiled/https://esm.sh/v85/events@3.3.0/esnext/events.bundle.js";
import __string_decoder$ from "/transpiled/https://esm.sh/v85/string_decoder@1.3.0/esnext/string_decoder.bundle.js";
import __util$ from "/transpiled/https://esm.sh/v85/util@0.12.4/esnext/util.bundle.js";
var Nt = Object.create;
var le = Object.defineProperty;
var xt = Object.getOwnPropertyDescriptor;
var Ct = Object.getOwnPropertyNames;
var It = Object.getPrototypeOf,
    jt = Object.prototype.hasOwnProperty;

var n = (e, t) => le(e, "name", {
  value: t,
  configurable: !0
}),
    v = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (t, r) => (typeof require != "undefined" ? require : t)[r]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var p = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var kt = (e, t, r, i) => {
  if (t && typeof t == "object" || typeof t == "function") for (let a of Ct(t)) !jt.call(e, a) && a !== r && le(e, a, {
    get: () => t[a],
    enumerable: !(i = xt(t, a)) || i.enumerable
  });
  return e;
};

var Ie = (e, t, r) => (r = e != null ? Nt(It(e)) : {}, kt(t || !e || !e.__esModule ? le(r, "default", {
  value: e,
  enumerable: !0
}) : r, e));

var A = p((Ai, ue) => {
  typeof Object.create == "function" ? ue.exports = n(function (t, r) {
    r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  }, "inherits") : ue.exports = n(function (t, r) {
    if (r) {
      t.super_ = r;
      var i = n(function () {}, "TempCtor");
      i.prototype = r.prototype, t.prototype = new i(), t.prototype.constructor = t;
    }
  }, "inherits");
});
var se = p((Di, je) => {
  je.exports = __events$.EventEmitter;
});
var Be = p((qi, Ue) => {
  "use strict";

  function ke(e, t) {
    var r = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })), r.push.apply(r, i);
    }

    return r;
  }

  n(ke, "ownKeys");

  function Wt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2 ? ke(Object(r), !0).forEach(function (i) {
        Ut(e, i, r[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ke(Object(r)).forEach(function (i) {
        Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(r, i));
      });
    }

    return e;
  }

  n(Wt, "_objectSpread");

  function Ut(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e;
  }

  n(Ut, "_defineProperty");

  function Bt(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  n(Bt, "_classCallCheck");

  function We(e, t) {
    for (var r = 0; r < t.length; r++) {
      var i = t[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  n(We, "_defineProperties");

  function Ft(e, t, r) {
    return t && We(e.prototype, t), r && We(e, r), e;
  }

  n(Ft, "_createClass");
  var Ht = __buffer$,
      K = Ht.Buffer,
      Gt = __util$,
      de = Gt.inspect,
      Vt = de && de.custom || "inspect";

  function Yt(e, t, r) {
    K.prototype.copy.call(e, t, r);
  }

  n(Yt, "copyBuffer");

  Ue.exports = function () {
    function e() {
      Bt(this, e), this.head = null, this.tail = null, this.length = 0;
    }

    return n(e, "BufferList"), Ft(e, [{
      key: "push",
      value: n(function (r) {
        var i = {
          data: r,
          next: null
        };
        this.length > 0 ? this.tail.next = i : this.head = i, this.tail = i, ++this.length;
      }, "push")
    }, {
      key: "unshift",
      value: n(function (r) {
        var i = {
          data: r,
          next: this.head
        };
        this.length === 0 && (this.tail = i), this.head = i, ++this.length;
      }, "unshift")
    }, {
      key: "shift",
      value: n(function () {
        if (this.length !== 0) {
          var r = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, r;
        }
      }, "shift")
    }, {
      key: "clear",
      value: n(function () {
        this.head = this.tail = null, this.length = 0;
      }, "clear")
    }, {
      key: "join",
      value: n(function (r) {
        if (this.length === 0) return "";

        for (var i = this.head, a = "" + i.data; i = i.next;) a += r + i.data;

        return a;
      }, "join")
    }, {
      key: "concat",
      value: n(function (r) {
        if (this.length === 0) return K.alloc(0);

        for (var i = K.allocUnsafe(r >>> 0), a = this.head, o = 0; a;) Yt(a.data, i, o), o += a.data.length, a = a.next;

        return i;
      }, "concat")
    }, {
      key: "consume",
      value: n(function (r, i) {
        var a;
        return r < this.head.data.length ? (a = this.head.data.slice(0, r), this.head.data = this.head.data.slice(r)) : r === this.head.data.length ? a = this.shift() : a = i ? this._getString(r) : this._getBuffer(r), a;
      }, "consume")
    }, {
      key: "first",
      value: n(function () {
        return this.head.data;
      }, "first")
    }, {
      key: "_getString",
      value: n(function (r) {
        var i = this.head,
            a = 1,
            o = i.data;

        for (r -= o.length; i = i.next;) {
          var f = i.data,
              l = r > f.length ? f.length : r;

          if (l === f.length ? o += f : o += f.slice(0, r), r -= l, r === 0) {
            l === f.length ? (++a, i.next ? this.head = i.next : this.head = this.tail = null) : (this.head = i, i.data = f.slice(l));
            break;
          }

          ++a;
        }

        return this.length -= a, o;
      }, "_getString")
    }, {
      key: "_getBuffer",
      value: n(function (r) {
        var i = K.allocUnsafe(r),
            a = this.head,
            o = 1;

        for (a.data.copy(i), r -= a.data.length; a = a.next;) {
          var f = a.data,
              l = r > f.length ? f.length : r;

          if (f.copy(i, i.length - r, 0, l), r -= l, r === 0) {
            l === f.length ? (++o, a.next ? this.head = a.next : this.head = this.tail = null) : (this.head = a, a.data = f.slice(l));
            break;
          }

          ++o;
        }

        return this.length -= o, i;
      }, "_getBuffer")
    }, {
      key: Vt,
      value: n(function (r, i) {
        return de(this, Wt({}, i, {
          depth: 0,
          customInspect: !1
        }));
      }, "value")
    }]), e;
  }();
});
var ce = p((Pi, He) => {
  "use strict";

  function $t(e, t) {
    var r = this,
        i = this._readableState && this._readableState.destroyed,
        a = this._writableState && this._writableState.destroyed;
    return i || a ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, __Process$.nextTick(he, this, e)) : __Process$.nextTick(he, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function (o) {
      !t && o ? r._writableState ? r._writableState.errorEmitted ? __Process$.nextTick(X, r) : (r._writableState.errorEmitted = !0, __Process$.nextTick(Fe, r, o)) : __Process$.nextTick(Fe, r, o) : t ? (__Process$.nextTick(X, r), t(o)) : __Process$.nextTick(X, r);
    }), this);
  }

  n($t, "destroy");

  function Fe(e, t) {
    he(e, t), X(e);
  }

  n(Fe, "emitErrorAndCloseNT");

  function X(e) {
    e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close");
  }

  n(X, "emitCloseNT");

  function Kt() {
    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
  }

  n(Kt, "undestroy");

  function he(e, t) {
    e.emit("error", t);
  }

  n(he, "emitErrorNT");

  function Xt(e, t) {
    var r = e._readableState,
        i = e._writableState;
    r && r.autoDestroy || i && i.autoDestroy ? e.destroy(t) : e.emit("error", t);
  }

  n(Xt, "errorOrDestroy");
  He.exports = {
    destroy: $t,
    undestroy: Kt,
    errorOrDestroy: Xt
  };
});
var D = p((Ni, Ye) => {
  "use strict";

  function zt(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
  }

  n(zt, "_inheritsLoose");
  var Ve = {};

  function _(e, t, r) {
    r || (r = Error);

    function i(o, f, l) {
      return typeof t == "string" ? t : t(o, f, l);
    }

    n(i, "getMessage");

    var a = function (o) {
      zt(f, o);

      function f(l, d, h) {
        return o.call(this, i(l, d, h)) || this;
      }

      return n(f, "NodeError"), f;
    }(r);

    a.prototype.name = r.name, a.prototype.code = e, Ve[e] = a;
  }

  n(_, "createErrorType");

  function Ge(e, t) {
    if (Array.isArray(e)) {
      var r = e.length;
      return e = e.map(function (i) {
        return String(i);
      }), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : r === 2 ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0]);
    } else return "of ".concat(t, " ").concat(String(e));
  }

  n(Ge, "oneOf");

  function Jt(e, t, r) {
    return e.substr(!r || r < 0 ? 0 : +r, t.length) === t;
  }

  n(Jt, "startsWith");

  function Qt(e, t, r) {
    return (r === void 0 || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t;
  }

  n(Qt, "endsWith");

  function Zt(e, t, r) {
    return typeof r != "number" && (r = 0), r + t.length > e.length ? !1 : e.indexOf(t, r) !== -1;
  }

  n(Zt, "includes");

  _("ERR_INVALID_OPT_VALUE", function (e, t) {
    return 'The value "' + t + '" is invalid for option "' + e + '"';
  }, TypeError);

  _("ERR_INVALID_ARG_TYPE", function (e, t, r) {
    var i;
    typeof t == "string" && Jt(t, "not ") ? (i = "must not be", t = t.replace(/^not /, "")) : i = "must be";
    var a;
    if (Qt(e, " argument")) a = "The ".concat(e, " ").concat(i, " ").concat(Ge(t, "type"));else {
      var o = Zt(e, ".") ? "property" : "argument";
      a = 'The "'.concat(e, '" ').concat(o, " ").concat(i, " ").concat(Ge(t, "type"));
    }
    return a += ". Received type ".concat(typeof r), a;
  }, TypeError);

  _("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");

  _("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
    return "The " + e + " method is not implemented";
  });

  _("ERR_STREAM_PREMATURE_CLOSE", "Premature close");

  _("ERR_STREAM_DESTROYED", function (e) {
    return "Cannot call " + e + " after a stream was destroyed";
  });

  _("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");

  _("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");

  _("ERR_STREAM_WRITE_AFTER_END", "write after end");

  _("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);

  _("ERR_UNKNOWN_ENCODING", function (e) {
    return "Unknown encoding: " + e;
  }, TypeError);

  _("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");

  Ye.exports.codes = Ve;
});
var pe = p((xi, $e) => {
  "use strict";

  var er = D().codes.ERR_INVALID_OPT_VALUE;

  function tr(e, t, r) {
    return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null;
  }

  n(tr, "highWaterMarkFrom");

  function rr(e, t, r, i) {
    var a = tr(t, i, r);

    if (a != null) {
      if (!(isFinite(a) && Math.floor(a) === a) || a < 0) {
        var o = i ? r : "highWaterMark";
        throw new er(o, a);
      }

      return Math.floor(a);
    }

    return e.objectMode ? 16 : 16 * 1024;
  }

  n(rr, "getHighWaterMark");
  $e.exports = {
    getHighWaterMark: rr
  };
});
var Xe = p((Ci, Ke) => {
  Ke.exports = ir;

  function ir(e, t) {
    if (be("noDeprecation")) return e;
    var r = !1;

    function i() {
      if (!r) {
        if (be("throwDeprecation")) throw new Error(t);
        be("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0;
      }

      return e.apply(this, arguments);
    }

    return n(i, "deprecated"), i;
  }

  n(ir, "deprecate");

  function be(e) {
    try {
      if (!__global$.localStorage) return !1;
    } catch {
      return !1;
    }

    var t = __global$.localStorage[e];
    return t == null ? !1 : String(t).toLowerCase() === "true";
  }

  n(be, "config");
});
var ye = p((Ii, tt) => {
  "use strict";

  tt.exports = c;

  function Je(e) {
    var t = this;
    this.next = null, this.entry = null, this.finish = function () {
      Dr(t, e);
    };
  }

  n(Je, "CorkedRequest");
  var j;
  c.WritableState = H;

  var nr = {
    deprecate: Xe()
  },
      Qe = se(),
      J = __buffer$.Buffer,
      ar = __global$.Uint8Array || function () {};

  function or(e) {
    return J.from(e);
  }

  n(or, "_uint8ArrayToBuffer");

  function fr(e) {
    return J.isBuffer(e) || e instanceof ar;
  }

  n(fr, "_isUint8Array");
  var ge = ce(),
      lr = pe(),
      ur = lr.getHighWaterMark,
      T = D().codes,
      sr = T.ERR_INVALID_ARG_TYPE,
      dr = T.ERR_METHOD_NOT_IMPLEMENTED,
      hr = T.ERR_MULTIPLE_CALLBACK,
      cr = T.ERR_STREAM_CANNOT_PIPE,
      pr = T.ERR_STREAM_DESTROYED,
      br = T.ERR_STREAM_NULL_VALUES,
      _r = T.ERR_STREAM_WRITE_AFTER_END,
      gr = T.ERR_UNKNOWN_ENCODING,
      k = ge.errorOrDestroy;
  A()(c, Qe);

  function yr() {}

  n(yr, "nop");

  function H(e, t, r) {
    j = j || q(), e = e || {}, typeof r != "boolean" && (r = t instanceof j), this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = ur(this, e, "writableHighWaterMark", r), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var i = e.decodeStrings === !1;
    this.decodeStrings = !i, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (a) {
      Mr(t, a);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = e.emitClose !== !1, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new Je(this);
  }

  n(H, "WritableState");
  H.prototype.getBuffer = n(function () {
    for (var t = this.bufferedRequest, r = []; t;) r.push(t), t = t.next;

    return r;
  }, "getBuffer");

  (function () {
    try {
      Object.defineProperty(H.prototype, "buffer", {
        get: nr.deprecate(n(function () {
          return this.getBuffer();
        }, "writableStateBufferGetter"), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {}
  })();

  var z;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (z = Function.prototype[Symbol.hasInstance], Object.defineProperty(c, Symbol.hasInstance, {
    value: n(function (t) {
      return z.call(this, t) ? !0 : this !== c ? !1 : t && t._writableState instanceof H;
    }, "value")
  })) : z = n(function (t) {
    return t instanceof this;
  }, "realHasInstance");

  function c(e) {
    j = j || q();
    var t = this instanceof j;
    if (!t && !z.call(c, this)) return new c(e);
    this._writableState = new H(e, this, t), this.writable = !0, e && (typeof e.write == "function" && (this._write = e.write), typeof e.writev == "function" && (this._writev = e.writev), typeof e.destroy == "function" && (this._destroy = e.destroy), typeof e.final == "function" && (this._final = e.final)), Qe.call(this);
  }

  n(c, "Writable");

  c.prototype.pipe = function () {
    k(this, new cr());
  };

  function vr(e, t) {
    var r = new _r();
    k(e, r), __Process$.nextTick(t, r);
  }

  n(vr, "writeAfterEnd");

  function wr(e, t, r, i) {
    var a;
    return r === null ? a = new br() : typeof r != "string" && !t.objectMode && (a = new sr("chunk", ["string", "Buffer"], r)), a ? (k(e, a), __Process$.nextTick(i, a), !1) : !0;
  }

  n(wr, "validChunk");

  c.prototype.write = function (e, t, r) {
    var i = this._writableState,
        a = !1,
        o = !i.objectMode && fr(e);
    return o && !J.isBuffer(e) && (e = or(e)), typeof t == "function" && (r = t, t = null), o ? t = "buffer" : t || (t = i.defaultEncoding), typeof r != "function" && (r = yr), i.ending ? vr(this, r) : (o || wr(this, i, e, r)) && (i.pendingcb++, a = Er(this, i, o, e, t, r)), a;
  };

  c.prototype.cork = function () {
    this._writableState.corked++;
  };

  c.prototype.uncork = function () {
    var e = this._writableState;
    e.corked && (e.corked--, !e.writing && !e.corked && !e.bufferProcessing && e.bufferedRequest && Ze(this, e));
  };

  c.prototype.setDefaultEncoding = n(function (t) {
    if (typeof t == "string" && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new gr(t);
    return this._writableState.defaultEncoding = t, this;
  }, "setDefaultEncoding");
  Object.defineProperty(c.prototype, "writableBuffer", {
    enumerable: !1,
    get: n(function () {
      return this._writableState && this._writableState.getBuffer();
    }, "get")
  });

  function Rr(e, t, r) {
    return !e.objectMode && e.decodeStrings !== !1 && typeof t == "string" && (t = J.from(t, r)), t;
  }

  n(Rr, "decodeChunk");
  Object.defineProperty(c.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: n(function () {
      return this._writableState.highWaterMark;
    }, "get")
  });

  function Er(e, t, r, i, a, o) {
    if (!r) {
      var f = Rr(t, i, a);
      i !== f && (r = !0, a = "buffer", i = f);
    }

    var l = t.objectMode ? 1 : i.length;
    t.length += l;
    var d = t.length < t.highWaterMark;

    if (d || (t.needDrain = !0), t.writing || t.corked) {
      var h = t.lastBufferedRequest;
      t.lastBufferedRequest = {
        chunk: i,
        encoding: a,
        isBuf: r,
        callback: o,
        next: null
      }, h ? h.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1;
    } else _e(e, t, !1, l, i, a, o);

    return d;
  }

  n(Er, "writeOrBuffer");

  function _e(e, t, r, i, a, o, f) {
    t.writelen = i, t.writecb = f, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new pr("write")) : r ? e._writev(a, t.onwrite) : e._write(a, o, t.onwrite), t.sync = !1;
  }

  n(_e, "doWrite");

  function Sr(e, t, r, i, a) {
    --t.pendingcb, r ? (__Process$.nextTick(a, i), __Process$.nextTick(F, e, t), e._writableState.errorEmitted = !0, k(e, i)) : (a(i), e._writableState.errorEmitted = !0, k(e, i), F(e, t));
  }

  n(Sr, "onwriteError");

  function Tr(e) {
    e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
  }

  n(Tr, "onwriteStateUpdate");

  function Mr(e, t) {
    var r = e._writableState,
        i = r.sync,
        a = r.writecb;
    if (typeof a != "function") throw new hr();
    if (Tr(r), t) Sr(e, r, i, t, a);else {
      var o = et(r) || e.destroyed;
      !o && !r.corked && !r.bufferProcessing && r.bufferedRequest && Ze(e, r), i ? __Process$.nextTick(ze, e, r, o, a) : ze(e, r, o, a);
    }
  }

  n(Mr, "onwrite");

  function ze(e, t, r, i) {
    r || mr(e, t), t.pendingcb--, i(), F(e, t);
  }

  n(ze, "afterWrite");

  function mr(e, t) {
    t.length === 0 && t.needDrain && (t.needDrain = !1, e.emit("drain"));
  }

  n(mr, "onwriteDrain");

  function Ze(e, t) {
    t.bufferProcessing = !0;
    var r = t.bufferedRequest;

    if (e._writev && r && r.next) {
      var i = t.bufferedRequestCount,
          a = new Array(i),
          o = t.corkedRequestsFree;
      o.entry = r;

      for (var f = 0, l = !0; r;) a[f] = r, r.isBuf || (l = !1), r = r.next, f += 1;

      a.allBuffers = l, _e(e, t, !0, t.length, a, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new Je(t), t.bufferedRequestCount = 0;
    } else {
      for (; r;) {
        var d = r.chunk,
            h = r.encoding,
            b = r.callback,
            R = t.objectMode ? 1 : d.length;
        if (_e(e, t, !1, R, d, h, b), r = r.next, t.bufferedRequestCount--, t.writing) break;
      }

      r === null && (t.lastBufferedRequest = null);
    }

    t.bufferedRequest = r, t.bufferProcessing = !1;
  }

  n(Ze, "clearBuffer");

  c.prototype._write = function (e, t, r) {
    r(new dr("_write()"));
  };

  c.prototype._writev = null;

  c.prototype.end = function (e, t, r) {
    var i = this._writableState;
    return typeof e == "function" ? (r = e, e = null, t = null) : typeof t == "function" && (r = t, t = null), e != null && this.write(e, t), i.corked && (i.corked = 1, this.uncork()), i.ending || Ar(this, i, r), this;
  };

  Object.defineProperty(c.prototype, "writableLength", {
    enumerable: !1,
    get: n(function () {
      return this._writableState.length;
    }, "get")
  });

  function et(e) {
    return e.ending && e.length === 0 && e.bufferedRequest === null && !e.finished && !e.writing;
  }

  n(et, "needFinish");

  function Or(e, t) {
    e._final(function (r) {
      t.pendingcb--, r && k(e, r), t.prefinished = !0, e.emit("prefinish"), F(e, t);
    });
  }

  n(Or, "callFinal");

  function Lr(e, t) {
    !t.prefinished && !t.finalCalled && (typeof e._final == "function" && !t.destroyed ? (t.pendingcb++, t.finalCalled = !0, __Process$.nextTick(Or, e, t)) : (t.prefinished = !0, e.emit("prefinish")));
  }

  n(Lr, "prefinish");

  function F(e, t) {
    var r = et(t);

    if (r && (Lr(e, t), t.pendingcb === 0 && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
      var i = e._readableState;
      (!i || i.autoDestroy && i.endEmitted) && e.destroy();
    }

    return r;
  }

  n(F, "finishMaybe");

  function Ar(e, t, r) {
    t.ending = !0, F(e, t), r && (t.finished ? __Process$.nextTick(r) : e.once("finish", r)), t.ended = !0, e.writable = !1;
  }

  n(Ar, "endWritable");

  function Dr(e, t, r) {
    var i = e.entry;

    for (e.entry = null; i;) {
      var a = i.callback;
      t.pendingcb--, a(r), i = i.next;
    }

    t.corkedRequestsFree.next = e;
  }

  n(Dr, "onCorkedFinish");
  Object.defineProperty(c.prototype, "destroyed", {
    enumerable: !1,
    get: n(function () {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    }, "get"),
    set: n(function (t) {
      !this._writableState || (this._writableState.destroyed = t);
    }, "set")
  });
  c.prototype.destroy = ge.destroy;
  c.prototype._undestroy = ge.undestroy;

  c.prototype._destroy = function (e, t) {
    t(e);
  };
});
var q = p((ji, it) => {
  "use strict";

  var qr = Object.keys || function (e) {
    var t = [];

    for (var r in e) t.push(r);

    return t;
  };

  it.exports = w;
  var rt = Re(),
      we = ye();
  A()(w, rt);

  for (ve = qr(we.prototype), Q = 0; Q < ve.length; Q++) Z = ve[Q], w.prototype[Z] || (w.prototype[Z] = we.prototype[Z]);

  var ve, Z, Q;

  function w(e) {
    if (!(this instanceof w)) return new w(e);
    rt.call(this, e), we.call(this, e), this.allowHalfOpen = !0, e && (e.readable === !1 && (this.readable = !1), e.writable === !1 && (this.writable = !1), e.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", Pr)));
  }

  n(w, "Duplex");
  Object.defineProperty(w.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: n(function () {
      return this._writableState.highWaterMark;
    }, "get")
  });
  Object.defineProperty(w.prototype, "writableBuffer", {
    enumerable: !1,
    get: n(function () {
      return this._writableState && this._writableState.getBuffer();
    }, "get")
  });
  Object.defineProperty(w.prototype, "writableLength", {
    enumerable: !1,
    get: n(function () {
      return this._writableState.length;
    }, "get")
  });

  function Pr() {
    this._writableState.ended || __Process$.nextTick(Nr, this);
  }

  n(Pr, "onend");

  function Nr(e) {
    e.end();
  }

  n(Nr, "onEndNT");
  Object.defineProperty(w.prototype, "destroyed", {
    enumerable: !1,
    get: n(function () {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    }, "get"),
    set: n(function (t) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = t, this._writableState.destroyed = t);
    }, "set")
  });
});
var ee = p((ki, ot) => {
  "use strict";

  var nt = D().codes.ERR_STREAM_PREMATURE_CLOSE;

  function xr(e) {
    var t = !1;
    return function () {
      if (!t) {
        t = !0;

        for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];

        e.apply(this, i);
      }
    };
  }

  n(xr, "once");

  function Cr() {}

  n(Cr, "noop");

  function Ir(e) {
    return e.setHeader && typeof e.abort == "function";
  }

  n(Ir, "isRequest");

  function at(e, t, r) {
    if (typeof t == "function") return at(e, null, t);
    t || (t = {}), r = xr(r || Cr);
    var i = t.readable || t.readable !== !1 && e.readable,
        a = t.writable || t.writable !== !1 && e.writable,
        o = n(function () {
      e.writable || l();
    }, "onlegacyfinish"),
        f = e._writableState && e._writableState.finished,
        l = n(function () {
      a = !1, f = !0, i || r.call(e);
    }, "onfinish"),
        d = e._readableState && e._readableState.endEmitted,
        h = n(function () {
      i = !1, d = !0, a || r.call(e);
    }, "onend"),
        b = n(function (y) {
      r.call(e, y);
    }, "onerror"),
        R = n(function () {
      var y;
      if (i && !d) return (!e._readableState || !e._readableState.ended) && (y = new nt()), r.call(e, y);
      if (a && !f) return (!e._writableState || !e._writableState.ended) && (y = new nt()), r.call(e, y);
    }, "onclose"),
        L = n(function () {
      e.req.on("finish", l);
    }, "onrequest");
    return Ir(e) ? (e.on("complete", l), e.on("abort", R), e.req ? L() : e.on("request", L)) : a && !e._writableState && (e.on("end", o), e.on("close", o)), e.on("end", h), e.on("finish", l), t.error !== !1 && e.on("error", b), e.on("close", R), function () {
      e.removeListener("complete", l), e.removeListener("abort", R), e.removeListener("request", L), e.req && e.req.removeListener("finish", l), e.removeListener("end", o), e.removeListener("close", o), e.removeListener("finish", l), e.removeListener("end", h), e.removeListener("error", b), e.removeListener("close", R);
    };
  }

  n(at, "eos");
  ot.exports = at;
});
var lt = p((Wi, ft) => {
  "use strict";

  var te;

  function M(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e;
  }

  n(M, "_defineProperty");
  var jr = ee(),
      m = Symbol("lastResolve"),
      P = Symbol("lastReject"),
      G = Symbol("error"),
      re = Symbol("ended"),
      N = Symbol("lastPromise"),
      Ee = Symbol("handlePromise"),
      x = Symbol("stream");

  function O(e, t) {
    return {
      value: e,
      done: t
    };
  }

  n(O, "createIterResult");

  function kr(e) {
    var t = e[m];

    if (t !== null) {
      var r = e[x].read();
      r !== null && (e[N] = null, e[m] = null, e[P] = null, t(O(r, !1)));
    }
  }

  n(kr, "readAndResolve");

  function Wr(e) {
    __Process$.nextTick(kr, e);
  }

  n(Wr, "onReadable");

  function Ur(e, t) {
    return function (r, i) {
      e.then(function () {
        if (t[re]) {
          r(O(void 0, !0));
          return;
        }

        t[Ee](r, i);
      }, i);
    };
  }

  n(Ur, "wrapForNext");
  var Br = Object.getPrototypeOf(function () {}),
      Fr = Object.setPrototypeOf((te = {
    get stream() {
      return this[x];
    },

    next: n(function () {
      var t = this,
          r = this[G];
      if (r !== null) return Promise.reject(r);
      if (this[re]) return Promise.resolve(O(void 0, !0));
      if (this[x].destroyed) return new Promise(function (f, l) {
        __Process$.nextTick(function () {
          t[G] ? l(t[G]) : f(O(void 0, !0));
        });
      });
      var i = this[N],
          a;
      if (i) a = new Promise(Ur(i, this));else {
        var o = this[x].read();
        if (o !== null) return Promise.resolve(O(o, !1));
        a = new Promise(this[Ee]);
      }
      return this[N] = a, a;
    }, "next")
  }, M(te, Symbol.asyncIterator, function () {
    return this;
  }), M(te, "return", n(function () {
    var t = this;
    return new Promise(function (r, i) {
      t[x].destroy(null, function (a) {
        if (a) {
          i(a);
          return;
        }

        r(O(void 0, !0));
      });
    });
  }, "_return")), te), Br),
      Hr = n(function (t) {
    var r,
        i = Object.create(Fr, (r = {}, M(r, x, {
      value: t,
      writable: !0
    }), M(r, m, {
      value: null,
      writable: !0
    }), M(r, P, {
      value: null,
      writable: !0
    }), M(r, G, {
      value: null,
      writable: !0
    }), M(r, re, {
      value: t._readableState.endEmitted,
      writable: !0
    }), M(r, Ee, {
      value: n(function (o, f) {
        var l = i[x].read();
        l ? (i[N] = null, i[m] = null, i[P] = null, o(O(l, !1))) : (i[m] = o, i[P] = f);
      }, "value"),
      writable: !0
    }), r));
    return i[N] = null, jr(t, function (a) {
      if (a && a.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var o = i[P];
        o !== null && (i[N] = null, i[m] = null, i[P] = null, o(a)), i[G] = a;
        return;
      }

      var f = i[m];
      f !== null && (i[N] = null, i[m] = null, i[P] = null, f(O(void 0, !0))), i[re] = !0;
    }), t.on("readable", Wr.bind(null, i)), i;
  }, "createReadableStreamAsyncIterator");
  ft.exports = Hr;
});
var st = p((Ui, ut) => {
  ut.exports = function () {
    throw new Error("Readable.from is not available in the browser");
  };
});
var Re = p((Fi, wt) => {
  "use strict";

  wt.exports = s;
  var W;
  s.ReadableState = pt;

  var Bi = __events$.EventEmitter,
      ct = n(function (t, r) {
    return t.listeners(r).length;
  }, "EElistenerCount"),
      Y = se(),
      ie = __buffer$.Buffer,
      Gr = __global$.Uint8Array || function () {};

  function Vr(e) {
    return ie.from(e);
  }

  n(Vr, "_uint8ArrayToBuffer");

  function Yr(e) {
    return ie.isBuffer(e) || e instanceof Gr;
  }

  n(Yr, "_isUint8Array");
  var Se = __util$,
      u;
  Se && Se.debuglog ? u = Se.debuglog("stream") : u = n(function () {}, "debug");
  var $r = Be(),
      De = ce(),
      Kr = pe(),
      Xr = Kr.getHighWaterMark,
      ne = D().codes,
      zr = ne.ERR_INVALID_ARG_TYPE,
      Jr = ne.ERR_STREAM_PUSH_AFTER_EOF,
      Qr = ne.ERR_METHOD_NOT_IMPLEMENTED,
      Zr = ne.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,
      U,
      Te,
      Me;
  A()(s, Y);
  var V = De.errorOrDestroy,
      me = ["error", "close", "destroy", "pause", "resume"];

  function ei(e, t, r) {
    if (typeof e.prependListener == "function") return e.prependListener(t, r);
    !e._events || !e._events[t] ? e.on(t, r) : Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]];
  }

  n(ei, "prependListener");

  function pt(e, t, r) {
    W = W || q(), e = e || {}, typeof r != "boolean" && (r = t instanceof W), this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = Xr(this, e, "readableHighWaterMark", r), this.buffer = new $r(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = e.emitClose !== !1, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (U || (U = __string_decoder$.StringDecoder), this.decoder = new U(e.encoding), this.encoding = e.encoding);
  }

  n(pt, "ReadableState");

  function s(e) {
    if (W = W || q(), !(this instanceof s)) return new s(e);
    var t = this instanceof W;
    this._readableState = new pt(e, this, t), this.readable = !0, e && (typeof e.read == "function" && (this._read = e.read), typeof e.destroy == "function" && (this._destroy = e.destroy)), Y.call(this);
  }

  n(s, "Readable");
  Object.defineProperty(s.prototype, "destroyed", {
    enumerable: !1,
    get: n(function () {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    }, "get"),
    set: n(function (t) {
      !this._readableState || (this._readableState.destroyed = t);
    }, "set")
  });
  s.prototype.destroy = De.destroy;
  s.prototype._undestroy = De.undestroy;

  s.prototype._destroy = function (e, t) {
    t(e);
  };

  s.prototype.push = function (e, t) {
    var r = this._readableState,
        i;
    return r.objectMode ? i = !0 : typeof e == "string" && (t = t || r.defaultEncoding, t !== r.encoding && (e = ie.from(e, t), t = ""), i = !0), bt(this, e, t, !1, i);
  };

  s.prototype.unshift = function (e) {
    return bt(this, e, null, !0, !1);
  };

  function bt(e, t, r, i, a) {
    u("readableAddChunk", t);
    var o = e._readableState;
    if (t === null) o.reading = !1, ii(e, o);else {
      var f;
      if (a || (f = ti(o, t)), f) V(e, f);else if (o.objectMode || t && t.length > 0) {
        if (typeof t != "string" && !o.objectMode && Object.getPrototypeOf(t) !== ie.prototype && (t = Vr(t)), i) o.endEmitted ? V(e, new Zr()) : Oe(e, o, t, !0);else if (o.ended) V(e, new Jr());else {
          if (o.destroyed) return !1;
          o.reading = !1, o.decoder && !r ? (t = o.decoder.write(t), o.objectMode || t.length !== 0 ? Oe(e, o, t, !1) : Ae(e, o)) : Oe(e, o, t, !1);
        }
      } else i || (o.reading = !1, Ae(e, o));
    }
    return !o.ended && (o.length < o.highWaterMark || o.length === 0);
  }

  n(bt, "readableAddChunk");

  function Oe(e, t, r, i) {
    t.flowing && t.length === 0 && !t.sync ? (t.awaitDrain = 0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, i ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && ae(e)), Ae(e, t);
  }

  n(Oe, "addChunk");

  function ti(e, t) {
    var r;
    return !Yr(t) && typeof t != "string" && t !== void 0 && !e.objectMode && (r = new zr("chunk", ["string", "Buffer", "Uint8Array"], t)), r;
  }

  n(ti, "chunkInvalid");

  s.prototype.isPaused = function () {
    return this._readableState.flowing === !1;
  };

  s.prototype.setEncoding = function (e) {
    U || (U = __string_decoder$.StringDecoder);
    var t = new U(e);
    this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;

    for (var r = this._readableState.buffer.head, i = ""; r !== null;) i += t.write(r.data), r = r.next;

    return this._readableState.buffer.clear(), i !== "" && this._readableState.buffer.push(i), this._readableState.length = i.length, this;
  };

  var dt = 1073741824;

  function ri(e) {
    return e >= dt ? e = dt : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
  }

  n(ri, "computeNewHighWaterMark");

  function ht(e, t) {
    return e <= 0 || t.length === 0 && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = ri(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
  }

  n(ht, "howMuchToRead");

  s.prototype.read = function (e) {
    u("read", e), e = parseInt(e, 10);
    var t = this._readableState,
        r = e;
    if (e !== 0 && (t.emittedReadable = !1), e === 0 && t.needReadable && ((t.highWaterMark !== 0 ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return u("read: emitReadable", t.length, t.ended), t.length === 0 && t.ended ? Le(this) : ae(this), null;
    if (e = ht(e, t), e === 0 && t.ended) return t.length === 0 && Le(this), null;
    var i = t.needReadable;
    u("need readable", i), (t.length === 0 || t.length - e < t.highWaterMark) && (i = !0, u("length less than watermark", i)), t.ended || t.reading ? (i = !1, u("reading or ended", i)) : i && (u("do read"), t.reading = !0, t.sync = !0, t.length === 0 && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = ht(r, t)));
    var a;
    return e > 0 ? a = yt(e, t) : a = null, a === null ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), t.length === 0 && (t.ended || (t.needReadable = !0), r !== e && t.ended && Le(this)), a !== null && this.emit("data", a), a;
  };

  function ii(e, t) {
    if (u("onEofChunk"), !t.ended) {
      if (t.decoder) {
        var r = t.decoder.end();
        r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length);
      }

      t.ended = !0, t.sync ? ae(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, _t(e)));
    }
  }

  n(ii, "onEofChunk");

  function ae(e) {
    var t = e._readableState;
    u("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (u("emitReadable", t.flowing), t.emittedReadable = !0, __Process$.nextTick(_t, e));
  }

  n(ae, "emitReadable");

  function _t(e) {
    var t = e._readableState;
    u("emitReadable_", t.destroyed, t.length, t.ended), !t.destroyed && (t.length || t.ended) && (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, qe(e);
  }

  n(_t, "emitReadable_");

  function Ae(e, t) {
    t.readingMore || (t.readingMore = !0, __Process$.nextTick(ni, e, t));
  }

  n(Ae, "maybeReadMore");

  function ni(e, t) {
    for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && t.length === 0);) {
      var r = t.length;
      if (u("maybeReadMore read 0"), e.read(0), r === t.length) break;
    }

    t.readingMore = !1;
  }

  n(ni, "maybeReadMore_");

  s.prototype._read = function (e) {
    V(this, new Qr("_read()"));
  };

  s.prototype.pipe = function (e, t) {
    var r = this,
        i = this._readableState;

    switch (i.pipesCount) {
      case 0:
        i.pipes = e;
        break;

      case 1:
        i.pipes = [i.pipes, e];
        break;

      default:
        i.pipes.push(e);
        break;
    }

    i.pipesCount += 1, u("pipe count=%d opts=%j", i.pipesCount, t);
    var a = (!t || t.end !== !1) && e !== __Process$.stdout && e !== __Process$.stderr,
        o = a ? l : B;
    i.endEmitted ? __Process$.nextTick(o) : r.once("end", o), e.on("unpipe", f);

    function f(C, I) {
      u("onunpipe"), C === r && I && I.hasUnpiped === !1 && (I.hasUnpiped = !0, b());
    }

    n(f, "onunpipe");

    function l() {
      u("onend"), e.end();
    }

    n(l, "onend");
    var d = ai(r);
    e.on("drain", d);
    var h = !1;

    function b() {
      u("cleanup"), e.removeListener("close", E), e.removeListener("finish", y), e.removeListener("drain", d), e.removeListener("error", L), e.removeListener("unpipe", f), r.removeListener("end", l), r.removeListener("end", B), r.removeListener("data", R), h = !0, i.awaitDrain && (!e._writableState || e._writableState.needDrain) && d();
    }

    n(b, "cleanup"), r.on("data", R);

    function R(C) {
      u("ondata");
      var I = e.write(C);
      u("dest.write", I), I === !1 && ((i.pipesCount === 1 && i.pipes === e || i.pipesCount > 1 && vt(i.pipes, e) !== -1) && !h && (u("false write response, pause", i.awaitDrain), i.awaitDrain++), r.pause());
    }

    n(R, "ondata");

    function L(C) {
      u("onerror", C), B(), e.removeListener("error", L), ct(e, "error") === 0 && V(e, C);
    }

    n(L, "onerror"), ei(e, "error", L);

    function E() {
      e.removeListener("finish", y), B();
    }

    n(E, "onclose"), e.once("close", E);

    function y() {
      u("onfinish"), e.removeListener("close", E), B();
    }

    n(y, "onfinish"), e.once("finish", y);

    function B() {
      u("unpipe"), r.unpipe(e);
    }

    return n(B, "unpipe"), e.emit("pipe", r), i.flowing || (u("pipe resume"), r.resume()), e;
  };

  function ai(e) {
    return n(function () {
      var r = e._readableState;
      u("pipeOnDrain", r.awaitDrain), r.awaitDrain && r.awaitDrain--, r.awaitDrain === 0 && ct(e, "data") && (r.flowing = !0, qe(e));
    }, "pipeOnDrainFunctionResult");
  }

  n(ai, "pipeOnDrain");

  s.prototype.unpipe = function (e) {
    var t = this._readableState,
        r = {
      hasUnpiped: !1
    };
    if (t.pipesCount === 0) return this;
    if (t.pipesCount === 1) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r), this);

    if (!e) {
      var i = t.pipes,
          a = t.pipesCount;
      t.pipes = null, t.pipesCount = 0, t.flowing = !1;

      for (var o = 0; o < a; o++) i[o].emit("unpipe", this, {
        hasUnpiped: !1
      });

      return this;
    }

    var f = vt(t.pipes, e);
    return f === -1 ? this : (t.pipes.splice(f, 1), t.pipesCount -= 1, t.pipesCount === 1 && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r), this);
  };

  s.prototype.on = function (e, t) {
    var r = Y.prototype.on.call(this, e, t),
        i = this._readableState;
    return e === "data" ? (i.readableListening = this.listenerCount("readable") > 0, i.flowing !== !1 && this.resume()) : e === "readable" && !i.endEmitted && !i.readableListening && (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, u("on readable", i.length, i.reading), i.length ? ae(this) : i.reading || __Process$.nextTick(oi, this)), r;
  };

  s.prototype.addListener = s.prototype.on;

  s.prototype.removeListener = function (e, t) {
    var r = Y.prototype.removeListener.call(this, e, t);
    return e === "readable" && __Process$.nextTick(gt, this), r;
  };

  s.prototype.removeAllListeners = function (e) {
    var t = Y.prototype.removeAllListeners.apply(this, arguments);
    return (e === "readable" || e === void 0) && __Process$.nextTick(gt, this), t;
  };

  function gt(e) {
    var t = e._readableState;
    t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume();
  }

  n(gt, "updateReadableListening");

  function oi(e) {
    u("readable nexttick read 0"), e.read(0);
  }

  n(oi, "nReadingNextTick");

  s.prototype.resume = function () {
    var e = this._readableState;
    return e.flowing || (u("resume"), e.flowing = !e.readableListening, fi(this, e)), e.paused = !1, this;
  };

  function fi(e, t) {
    t.resumeScheduled || (t.resumeScheduled = !0, __Process$.nextTick(li, e, t));
  }

  n(fi, "resume");

  function li(e, t) {
    u("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), qe(e), t.flowing && !t.reading && e.read(0);
  }

  n(li, "resume_");

  s.prototype.pause = function () {
    return u("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (u("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this;
  };

  function qe(e) {
    var t = e._readableState;

    for (u("flow", t.flowing); t.flowing && e.read() !== null;);
  }

  n(qe, "flow");

  s.prototype.wrap = function (e) {
    var t = this,
        r = this._readableState,
        i = !1;
    e.on("end", function () {
      if (u("wrapped end"), r.decoder && !r.ended) {
        var f = r.decoder.end();
        f && f.length && t.push(f);
      }

      t.push(null);
    }), e.on("data", function (f) {
      if (u("wrapped data"), r.decoder && (f = r.decoder.write(f)), !(r.objectMode && f == null) && !(!r.objectMode && (!f || !f.length))) {
        var l = t.push(f);
        l || (i = !0, e.pause());
      }
    });

    for (var a in e) this[a] === void 0 && typeof e[a] == "function" && (this[a] = n(function (l) {
      return n(function () {
        return e[l].apply(e, arguments);
      }, "methodWrapReturnFunction");
    }, "methodWrap")(a));

    for (var o = 0; o < me.length; o++) e.on(me[o], this.emit.bind(this, me[o]));

    return this._read = function (f) {
      u("wrapped _read", f), i && (i = !1, e.resume());
    }, this;
  };

  typeof Symbol == "function" && (s.prototype[Symbol.asyncIterator] = function () {
    return Te === void 0 && (Te = lt()), Te(this);
  });
  Object.defineProperty(s.prototype, "readableHighWaterMark", {
    enumerable: !1,
    get: n(function () {
      return this._readableState.highWaterMark;
    }, "get")
  });
  Object.defineProperty(s.prototype, "readableBuffer", {
    enumerable: !1,
    get: n(function () {
      return this._readableState && this._readableState.buffer;
    }, "get")
  });
  Object.defineProperty(s.prototype, "readableFlowing", {
    enumerable: !1,
    get: n(function () {
      return this._readableState.flowing;
    }, "get"),
    set: n(function (t) {
      this._readableState && (this._readableState.flowing = t);
    }, "set")
  });
  s._fromList = yt;
  Object.defineProperty(s.prototype, "readableLength", {
    enumerable: !1,
    get: n(function () {
      return this._readableState.length;
    }, "get")
  });

  function yt(e, t) {
    if (t.length === 0) return null;
    var r;
    return t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (t.decoder ? r = t.buffer.join("") : t.buffer.length === 1 ? r = t.buffer.first() : r = t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r;
  }

  n(yt, "fromList");

  function Le(e) {
    var t = e._readableState;
    u("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, __Process$.nextTick(ui, t, e));
  }

  n(Le, "endReadable");

  function ui(e, t) {
    if (u("endReadableNT", e.endEmitted, e.length), !e.endEmitted && e.length === 0 && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
      var r = t._writableState;
      (!r || r.autoDestroy && r.finished) && t.destroy();
    }
  }

  n(ui, "endReadableNT");
  typeof Symbol == "function" && (s.from = function (e, t) {
    return Me === void 0 && (Me = st()), Me(s, e, t);
  });

  function vt(e, t) {
    for (var r = 0, i = e.length; r < i; r++) if (e[r] === t) return r;

    return -1;
  }

  n(vt, "indexOf");
});
var Pe = p((Hi, Et) => {
  "use strict";

  Et.exports = S;
  var oe = D().codes,
      si = oe.ERR_METHOD_NOT_IMPLEMENTED,
      di = oe.ERR_MULTIPLE_CALLBACK,
      hi = oe.ERR_TRANSFORM_ALREADY_TRANSFORMING,
      ci = oe.ERR_TRANSFORM_WITH_LENGTH_0,
      fe = q();
  A()(S, fe);

  function pi(e, t) {
    var r = this._transformState;
    r.transforming = !1;
    var i = r.writecb;
    if (i === null) return this.emit("error", new di());
    r.writechunk = null, r.writecb = null, t != null && this.push(t), i(e);
    var a = this._readableState;
    a.reading = !1, (a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark);
  }

  n(pi, "afterTransform");

  function S(e) {
    if (!(this instanceof S)) return new S(e);
    fe.call(this, e), this._transformState = {
      afterTransform: pi.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null
    }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", bi);
  }

  n(S, "Transform");

  function bi() {
    var e = this;
    typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function (t, r) {
      Rt(e, t, r);
    }) : Rt(this, null, null);
  }

  n(bi, "prefinish");

  S.prototype.push = function (e, t) {
    return this._transformState.needTransform = !1, fe.prototype.push.call(this, e, t);
  };

  S.prototype._transform = function (e, t, r) {
    r(new si("_transform()"));
  };

  S.prototype._write = function (e, t, r) {
    var i = this._transformState;

    if (i.writecb = r, i.writechunk = e, i.writeencoding = t, !i.transforming) {
      var a = this._readableState;
      (i.needTransform || a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark);
    }
  };

  S.prototype._read = function (e) {
    var t = this._transformState;
    t.writechunk !== null && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0;
  };

  S.prototype._destroy = function (e, t) {
    fe.prototype._destroy.call(this, e, function (r) {
      t(r);
    });
  };

  function Rt(e, t, r) {
    if (t) return e.emit("error", t);
    if (r != null && e.push(r), e._writableState.length) throw new ci();
    if (e._transformState.transforming) throw new hi();
    return e.push(null);
  }

  n(Rt, "done");
});
var Mt = p((Gi, Tt) => {
  "use strict";

  Tt.exports = $;
  var St = Pe();
  A()($, St);

  function $(e) {
    if (!(this instanceof $)) return new $(e);
    St.call(this, e);
  }

  n($, "PassThrough");

  $.prototype._transform = function (e, t, r) {
    r(null, e);
  };
});
var Dt = p((Vi, At) => {
  "use strict";

  var Ne;

  function _i(e) {
    var t = !1;
    return function () {
      t || (t = !0, e.apply(void 0, arguments));
    };
  }

  n(_i, "once");
  var Lt = D().codes,
      gi = Lt.ERR_MISSING_ARGS,
      yi = Lt.ERR_STREAM_DESTROYED;

  function mt(e) {
    if (e) throw e;
  }

  n(mt, "noop");

  function vi(e) {
    return e.setHeader && typeof e.abort == "function";
  }

  n(vi, "isRequest");

  function wi(e, t, r, i) {
    i = _i(i);
    var a = !1;
    e.on("close", function () {
      a = !0;
    }), Ne === void 0 && (Ne = ee()), Ne(e, {
      readable: t,
      writable: r
    }, function (f) {
      if (f) return i(f);
      a = !0, i();
    });
    var o = !1;
    return function (f) {
      if (!a && !o) {
        if (o = !0, vi(e)) return e.abort();
        if (typeof e.destroy == "function") return e.destroy();
        i(f || new yi("pipe"));
      }
    };
  }

  n(wi, "destroyer");

  function Ot(e) {
    e();
  }

  n(Ot, "call");

  function Ri(e, t) {
    return e.pipe(t);
  }

  n(Ri, "pipe");

  function Ei(e) {
    return !e.length || typeof e[e.length - 1] != "function" ? mt : e.pop();
  }

  n(Ei, "popCallback");

  function Si() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

    var i = Ei(t);
    if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new gi("streams");
    var a,
        o = t.map(function (f, l) {
      var d = l < t.length - 1,
          h = l > 0;
      return wi(f, d, h, function (b) {
        a || (a = b), b && o.forEach(Ot), !d && (o.forEach(Ot), i(a));
      });
    });
    return t.reduce(Ri);
  }

  n(Si, "pipeline");
  At.exports = Si;
});
var Ce = p((Yi, qt) => {
  qt.exports = g;
  var xe = __events$.EventEmitter,
      Ti = A();
  Ti(g, xe);
  g.Readable = Re();
  g.Writable = ye();
  g.Duplex = q();
  g.Transform = Pe();
  g.PassThrough = Mt();
  g.finished = ee();
  g.pipeline = Dt();
  g.Stream = g;

  function g() {
    xe.call(this);
  }

  n(g, "Stream");

  g.prototype.pipe = function (e, t) {
    var r = this;

    function i(b) {
      e.writable && e.write(b) === !1 && r.pause && r.pause();
    }

    n(i, "ondata"), r.on("data", i);

    function a() {
      r.readable && r.resume && r.resume();
    }

    n(a, "ondrain"), e.on("drain", a), !e._isStdio && (!t || t.end !== !1) && (r.on("end", f), r.on("close", l));
    var o = !1;

    function f() {
      o || (o = !0, e.end());
    }

    n(f, "onend");

    function l() {
      o || (o = !0, typeof e.destroy == "function" && e.destroy());
    }

    n(l, "onclose");

    function d(b) {
      if (h(), xe.listenerCount(this, "error") === 0) throw b;
    }

    n(d, "onerror"), r.on("error", d), e.on("error", d);

    function h() {
      r.removeListener("data", i), e.removeListener("drain", a), r.removeListener("end", f), r.removeListener("close", l), r.removeListener("error", d), e.removeListener("error", d), r.removeListener("end", h), r.removeListener("close", h), e.removeListener("close", h);
    }

    return n(h, "cleanup"), r.on("end", h), r.on("close", h), e.on("close", h), e.emit("pipe", r), e;
  };
});
var Pt = Ie(Ce()),
    Mi = Ie(Ce()),
    {
  default: mi,
  ...Oi
} = Mi,
    $i = Pt.default ?? mi ?? Oi;
export { $i as default };