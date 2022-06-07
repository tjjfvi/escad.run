/* esm.sh - esbuild bundle(crypto-browserify@3.12.0) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v85/node_process.js";
import { Buffer as __Buffer$ } from "/transpiled/https://esm.sh/v85/node_buffer.js";

var __global$ = globalThis || (typeof window !== "undefined" ? window : self);

var __setImmediate$ = (cb, ...args) => setTimeout(cb, 0, ...args);

import __crypto$ from "/transpiled/https://esm.sh/v85/crypto-browserify@3.12.0/esnext/crypto-browserify.bundle.js";
import __util$ from "/transpiled/https://esm.sh/v85/util@0.12.4/esnext/util.bundle.js";
import __events$ from "/transpiled/https://esm.sh/v85/events@3.3.0/esnext/events.bundle.js";
import __string_decoder$ from "/transpiled/https://esm.sh/v85/string_decoder@1.3.0/esnext/string_decoder.bundle.js";
import __stream$ from "/transpiled/https://esm.sh/v85/stream-browserify@3.0.0/esnext/stream-browserify.bundle.js";
import __buffer$ from "/transpiled/https://esm.sh/v85/node_buffer.js";
var b1 = Object.create;
var _a = Object.defineProperty;
var m1 = Object.getOwnPropertyDescriptor;
var g1 = Object.getOwnPropertyNames;
var y1 = Object.getPrototypeOf,
    _1 = Object.prototype.hasOwnProperty;

var a = (t, e) => _a(t, "name", {
  value: e,
  configurable: !0
}),
    je = (t => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(t, {
  get: (e, r) => (typeof require != "undefined" ? require : e)[r]
}) : t)(function (t) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});

var D = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);

var w1 = (t, e, r, n) => {
  if (e && typeof e == "object" || typeof e == "function") for (let i of g1(e)) !_1.call(t, i) && i !== r && _a(t, i, {
    get: () => e[i],
    enumerable: !(n = m1(e, i)) || n.enumerable
  });
  return t;
};

var zs = (t, e, r) => (r = t != null ? b1(y1(t)) : {}, w1(e || !t || !t.__esModule ? _a(r, "default", {
  value: t,
  enumerable: !0
}) : r, t));

var qe = D((wa, Hs) => {
  var Xf = __buffer$,
      tr = Xf.Buffer;

  function Us(t, e) {
    for (var r in t) e[r] = t[r];
  }

  a(Us, "copyProps");
  tr.from && tr.alloc && tr.allocUnsafe && tr.allocUnsafeSlow ? Hs.exports = Xf : (Us(Xf, wa), wa.Buffer = fi);

  function fi(t, e, r) {
    return tr(t, e, r);
  }

  a(fi, "SafeBuffer");
  fi.prototype = Object.create(tr.prototype);
  Us(tr, fi);

  fi.from = function (t, e, r) {
    if (typeof t == "number") throw new TypeError("Argument must not be a number");
    return tr(t, e, r);
  };

  fi.alloc = function (t, e, r) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    var n = tr(t);
    return e !== void 0 ? typeof r == "string" ? n.fill(e, r) : n.fill(e) : n.fill(0), n;
  };

  fi.allocUnsafe = function (t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return tr(t);
  };

  fi.allocUnsafeSlow = function (t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return Xf.SlowBuffer(t);
  };
});
var ni = D((H8, Ma) => {
  "use strict";

  var xa = 65536,
      x1 = 4294967295;

  function M1() {
    throw new Error(`Secure random number generation is not supported by this browser.
Use Chrome, Firefox or Internet Explorer 11`);
  }

  a(M1, "oldBrowser");
  var S1 = qe().Buffer,
      Yf = __global$.crypto || __global$.msCrypto;
  Yf && Yf.getRandomValues ? Ma.exports = E1 : Ma.exports = M1;

  function E1(t, e) {
    if (t > x1) throw new RangeError("requested too many random bytes");
    var r = S1.allocUnsafe(t);
    if (t > 0) if (t > xa) for (var n = 0; n < t; n += xa) Yf.getRandomValues(r.slice(n, n + xa));else Yf.getRandomValues(r);
    return typeof e == "function" ? __Process$.nextTick(function () {
      e(null, r);
    }) : r;
  }

  a(E1, "randomBytes");
});
var Be = D((F8, Sa) => {
  typeof Object.create == "function" ? Sa.exports = a(function (e, r) {
    r && (e.super_ = r, e.prototype = Object.create(r.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  }, "inherits") : Sa.exports = a(function (e, r) {
    if (r) {
      e.super_ = r;
      var n = a(function () {}, "TempCtor");
      n.prototype = r.prototype, e.prototype = new n(), e.prototype.constructor = e;
    }
  }, "inherits");
});
var Ea = D((K8, Fs) => {
  Fs.exports = __events$.EventEmitter;
});
var Vs = D((j8, Ws) => {
  "use strict";

  function Ks(t, e) {
    var r = Object.keys(t);

    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })), r.push.apply(r, n);
    }

    return r;
  }

  a(Ks, "ownKeys");

  function A1(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e] != null ? arguments[e] : {};
      e % 2 ? Ks(Object(r), !0).forEach(function (n) {
        q1(t, n, r[n]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ks(Object(r)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
      });
    }

    return t;
  }

  a(A1, "_objectSpread");

  function q1(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  a(q1, "_defineProperty");

  function B1(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  a(B1, "_classCallCheck");

  function js(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
  }

  a(js, "_defineProperties");

  function R1(t, e, r) {
    return e && js(t.prototype, e), r && js(t, r), t;
  }

  a(R1, "_createClass");
  var I1 = __buffer$,
      Jf = I1.Buffer,
      k1 = __util$,
      Aa = k1.inspect,
      D1 = Aa && Aa.custom || "inspect";

  function P1(t, e, r) {
    Jf.prototype.copy.call(t, e, r);
  }

  a(P1, "copyBuffer");

  Ws.exports = function () {
    function t() {
      B1(this, t), this.head = null, this.tail = null, this.length = 0;
    }

    return a(t, "BufferList"), R1(t, [{
      key: "push",
      value: a(function (r) {
        var n = {
          data: r,
          next: null
        };
        this.length > 0 ? this.tail.next = n : this.head = n, this.tail = n, ++this.length;
      }, "push")
    }, {
      key: "unshift",
      value: a(function (r) {
        var n = {
          data: r,
          next: this.head
        };
        this.length === 0 && (this.tail = n), this.head = n, ++this.length;
      }, "unshift")
    }, {
      key: "shift",
      value: a(function () {
        if (this.length !== 0) {
          var r = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, r;
        }
      }, "shift")
    }, {
      key: "clear",
      value: a(function () {
        this.head = this.tail = null, this.length = 0;
      }, "clear")
    }, {
      key: "join",
      value: a(function (r) {
        if (this.length === 0) return "";

        for (var n = this.head, i = "" + n.data; n = n.next;) i += r + n.data;

        return i;
      }, "join")
    }, {
      key: "concat",
      value: a(function (r) {
        if (this.length === 0) return Jf.alloc(0);

        for (var n = Jf.allocUnsafe(r >>> 0), i = this.head, h = 0; i;) P1(i.data, n, h), h += i.data.length, i = i.next;

        return n;
      }, "concat")
    }, {
      key: "consume",
      value: a(function (r, n) {
        var i;
        return r < this.head.data.length ? (i = this.head.data.slice(0, r), this.head.data = this.head.data.slice(r)) : r === this.head.data.length ? i = this.shift() : i = n ? this._getString(r) : this._getBuffer(r), i;
      }, "consume")
    }, {
      key: "first",
      value: a(function () {
        return this.head.data;
      }, "first")
    }, {
      key: "_getString",
      value: a(function (r) {
        var n = this.head,
            i = 1,
            h = n.data;

        for (r -= h.length; n = n.next;) {
          var b = n.data,
              _ = r > b.length ? b.length : r;

          if (_ === b.length ? h += b : h += b.slice(0, r), r -= _, r === 0) {
            _ === b.length ? (++i, n.next ? this.head = n.next : this.head = this.tail = null) : (this.head = n, n.data = b.slice(_));
            break;
          }

          ++i;
        }

        return this.length -= i, h;
      }, "_getString")
    }, {
      key: "_getBuffer",
      value: a(function (r) {
        var n = Jf.allocUnsafe(r),
            i = this.head,
            h = 1;

        for (i.data.copy(n), r -= i.data.length; i = i.next;) {
          var b = i.data,
              _ = r > b.length ? b.length : r;

          if (b.copy(n, n.length - r, 0, _), r -= _, r === 0) {
            _ === b.length ? (++h, i.next ? this.head = i.next : this.head = this.tail = null) : (this.head = i, i.data = b.slice(_));
            break;
          }

          ++h;
        }

        return this.length -= h, n;
      }, "_getBuffer")
    }, {
      key: D1,
      value: a(function (r, n) {
        return Aa(this, A1({}, n, {
          depth: 0,
          customInspect: !1
        }));
      }, "value")
    }]), t;
  }();
});
var Ba = D((W8, Gs) => {
  "use strict";

  function T1(t, e) {
    var r = this,
        n = this._readableState && this._readableState.destroyed,
        i = this._writableState && this._writableState.destroyed;
    return n || i ? (e ? e(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, __Process$.nextTick(qa, this, t)) : __Process$.nextTick(qa, this, t)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function (h) {
      !e && h ? r._writableState ? r._writableState.errorEmitted ? __Process$.nextTick($f, r) : (r._writableState.errorEmitted = !0, __Process$.nextTick(Zs, r, h)) : __Process$.nextTick(Zs, r, h) : e ? (__Process$.nextTick($f, r), e(h)) : __Process$.nextTick($f, r);
    }), this);
  }

  a(T1, "destroy");

  function Zs(t, e) {
    qa(t, e), $f(t);
  }

  a(Zs, "emitErrorAndCloseNT");

  function $f(t) {
    t._writableState && !t._writableState.emitClose || t._readableState && !t._readableState.emitClose || t.emit("close");
  }

  a($f, "emitCloseNT");

  function C1() {
    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
  }

  a(C1, "undestroy");

  function qa(t, e) {
    t.emit("error", e);
  }

  a(qa, "emitErrorNT");

  function N1(t, e) {
    var r = t._readableState,
        n = t._writableState;
    r && r.autoDestroy || n && n.autoDestroy ? t.destroy(e) : t.emit("error", e);
  }

  a(N1, "errorOrDestroy");
  Gs.exports = {
    destroy: T1,
    undestroy: C1,
    errorOrDestroy: N1
  };
});
var ai = D((V8, Js) => {
  "use strict";

  function L1(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
  }

  a(L1, "_inheritsLoose");
  var Ys = {};

  function lt(t, e, r) {
    r || (r = Error);

    function n(h, b, _) {
      return typeof e == "string" ? e : e(h, b, _);
    }

    a(n, "getMessage");

    var i = function (h) {
      L1(b, h);

      function b(_, x, M) {
        return h.call(this, n(_, x, M)) || this;
      }

      return a(b, "NodeError"), b;
    }(r);

    i.prototype.name = r.name, i.prototype.code = t, Ys[t] = i;
  }

  a(lt, "createErrorType");

  function Xs(t, e) {
    if (Array.isArray(t)) {
      var r = t.length;
      return t = t.map(function (n) {
        return String(n);
      }), r > 2 ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1] : r === 2 ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0]);
    } else return "of ".concat(e, " ").concat(String(t));
  }

  a(Xs, "oneOf");

  function O1(t, e, r) {
    return t.substr(!r || r < 0 ? 0 : +r, e.length) === e;
  }

  a(O1, "startsWith");

  function z1(t, e, r) {
    return (r === void 0 || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e;
  }

  a(z1, "endsWith");

  function U1(t, e, r) {
    return typeof r != "number" && (r = 0), r + e.length > t.length ? !1 : t.indexOf(e, r) !== -1;
  }

  a(U1, "includes");
  lt("ERR_INVALID_OPT_VALUE", function (t, e) {
    return 'The value "' + e + '" is invalid for option "' + t + '"';
  }, TypeError);
  lt("ERR_INVALID_ARG_TYPE", function (t, e, r) {
    var n;
    typeof e == "string" && O1(e, "not ") ? (n = "must not be", e = e.replace(/^not /, "")) : n = "must be";
    var i;
    if (z1(t, " argument")) i = "The ".concat(t, " ").concat(n, " ").concat(Xs(e, "type"));else {
      var h = U1(t, ".") ? "property" : "argument";
      i = 'The "'.concat(t, '" ').concat(h, " ").concat(n, " ").concat(Xs(e, "type"));
    }
    return i += ". Received type ".concat(typeof r), i;
  }, TypeError);
  lt("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
  lt("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
    return "The " + t + " method is not implemented";
  });
  lt("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
  lt("ERR_STREAM_DESTROYED", function (t) {
    return "Cannot call " + t + " after a stream was destroyed";
  });
  lt("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
  lt("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
  lt("ERR_STREAM_WRITE_AFTER_END", "write after end");
  lt("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
  lt("ERR_UNKNOWN_ENCODING", function (t) {
    return "Unknown encoding: " + t;
  }, TypeError);
  lt("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
  Js.exports.codes = Ys;
});
var Ra = D((Z8, $s) => {
  "use strict";

  var H1 = ai().codes.ERR_INVALID_OPT_VALUE;

  function F1(t, e, r) {
    return t.highWaterMark != null ? t.highWaterMark : e ? t[r] : null;
  }

  a(F1, "highWaterMarkFrom");

  function K1(t, e, r, n) {
    var i = F1(e, n, r);

    if (i != null) {
      if (!(isFinite(i) && Math.floor(i) === i) || i < 0) {
        var h = n ? r : "highWaterMark";
        throw new H1(h, i);
      }

      return Math.floor(i);
    }

    return t.objectMode ? 16 : 16 * 1024;
  }

  a(K1, "getHighWaterMark");
  $s.exports = {
    getHighWaterMark: K1
  };
});
var eo = D((G8, Qs) => {
  Qs.exports = j1;

  function j1(t, e) {
    if (Ia("noDeprecation")) return t;
    var r = !1;

    function n() {
      if (!r) {
        if (Ia("throwDeprecation")) throw new Error(e);
        Ia("traceDeprecation") ? console.trace(e) : console.warn(e), r = !0;
      }

      return t.apply(this, arguments);
    }

    return a(n, "deprecated"), n;
  }

  a(j1, "deprecate");

  function Ia(t) {
    try {
      if (!__global$.localStorage) return !1;
    } catch {
      return !1;
    }

    var e = __global$.localStorage[t];
    return e == null ? !1 : String(e).toLowerCase() === "true";
  }

  a(Ia, "config");
});
var Pa = D((X8, ao) => {
  "use strict";

  ao.exports = Oe;

  function ro(t) {
    var e = this;
    this.next = null, this.entry = null, this.finish = function () {
      mv(e, t);
    };
  }

  a(ro, "CorkedRequest");
  var Pi;
  Oe.WritableState = cf;

  var W1 = {
    deprecate: eo()
  },
      io = Ea(),
      en = __buffer$.Buffer,
      V1 = __global$.Uint8Array || function () {};

  function Z1(t) {
    return en.from(t);
  }

  a(Z1, "_uint8ArrayToBuffer");

  function G1(t) {
    return en.isBuffer(t) || t instanceof V1;
  }

  a(G1, "_isUint8Array");
  var Da = Ba(),
      X1 = Ra(),
      Y1 = X1.getHighWaterMark,
      Fr = ai().codes,
      J1 = Fr.ERR_INVALID_ARG_TYPE,
      $1 = Fr.ERR_METHOD_NOT_IMPLEMENTED,
      Q1 = Fr.ERR_MULTIPLE_CALLBACK,
      ev = Fr.ERR_STREAM_CANNOT_PIPE,
      tv = Fr.ERR_STREAM_DESTROYED,
      rv = Fr.ERR_STREAM_NULL_VALUES,
      iv = Fr.ERR_STREAM_WRITE_AFTER_END,
      fv = Fr.ERR_UNKNOWN_ENCODING,
      Ti = Da.errorOrDestroy;
  Be()(Oe, io);

  function nv() {}

  a(nv, "nop");

  function cf(t, e, r) {
    Pi = Pi || si(), t = t || {}, typeof r != "boolean" && (r = e instanceof Pi), this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.writableObjectMode), this.highWaterMark = Y1(this, t, "writableHighWaterMark", r), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var n = t.decodeStrings === !1;
    this.decodeStrings = !n, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (i) {
      cv(e, i);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = t.emitClose !== !1, this.autoDestroy = !!t.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new ro(this);
  }

  a(cf, "WritableState");
  cf.prototype.getBuffer = a(function () {
    for (var e = this.bufferedRequest, r = []; e;) r.push(e), e = e.next;

    return r;
  }, "getBuffer");

  (function () {
    try {
      Object.defineProperty(cf.prototype, "buffer", {
        get: W1.deprecate(a(function () {
          return this.getBuffer();
        }, "writableStateBufferGetter"), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {}
  })();

  var Qf;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (Qf = Function.prototype[Symbol.hasInstance], Object.defineProperty(Oe, Symbol.hasInstance, {
    value: a(function (e) {
      return Qf.call(this, e) ? !0 : this !== Oe ? !1 : e && e._writableState instanceof cf;
    }, "value")
  })) : Qf = a(function (e) {
    return e instanceof this;
  }, "realHasInstance");

  function Oe(t) {
    Pi = Pi || si();
    var e = this instanceof Pi;
    if (!e && !Qf.call(Oe, this)) return new Oe(t);
    this._writableState = new cf(t, this, e), this.writable = !0, t && (typeof t.write == "function" && (this._write = t.write), typeof t.writev == "function" && (this._writev = t.writev), typeof t.destroy == "function" && (this._destroy = t.destroy), typeof t.final == "function" && (this._final = t.final)), io.call(this);
  }

  a(Oe, "Writable");

  Oe.prototype.pipe = function () {
    Ti(this, new ev());
  };

  function av(t, e) {
    var r = new iv();
    Ti(t, r), __Process$.nextTick(e, r);
  }

  a(av, "writeAfterEnd");

  function sv(t, e, r, n) {
    var i;
    return r === null ? i = new rv() : typeof r != "string" && !e.objectMode && (i = new J1("chunk", ["string", "Buffer"], r)), i ? (Ti(t, i), __Process$.nextTick(n, i), !1) : !0;
  }

  a(sv, "validChunk");

  Oe.prototype.write = function (t, e, r) {
    var n = this._writableState,
        i = !1,
        h = !n.objectMode && G1(t);
    return h && !en.isBuffer(t) && (t = Z1(t)), typeof e == "function" && (r = e, e = null), h ? e = "buffer" : e || (e = n.defaultEncoding), typeof r != "function" && (r = nv), n.ending ? av(this, r) : (h || sv(this, n, t, r)) && (n.pendingcb++, i = hv(this, n, h, t, e, r)), i;
  };

  Oe.prototype.cork = function () {
    this._writableState.corked++;
  };

  Oe.prototype.uncork = function () {
    var t = this._writableState;
    t.corked && (t.corked--, !t.writing && !t.corked && !t.bufferProcessing && t.bufferedRequest && fo(this, t));
  };

  Oe.prototype.setDefaultEncoding = a(function (e) {
    if (typeof e == "string" && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new fv(e);
    return this._writableState.defaultEncoding = e, this;
  }, "setDefaultEncoding");
  Object.defineProperty(Oe.prototype, "writableBuffer", {
    enumerable: !1,
    get: a(function () {
      return this._writableState && this._writableState.getBuffer();
    }, "get")
  });

  function ov(t, e, r) {
    return !t.objectMode && t.decodeStrings !== !1 && typeof e == "string" && (e = en.from(e, r)), e;
  }

  a(ov, "decodeChunk");
  Object.defineProperty(Oe.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: a(function () {
      return this._writableState.highWaterMark;
    }, "get")
  });

  function hv(t, e, r, n, i, h) {
    if (!r) {
      var b = ov(e, n, i);
      n !== b && (r = !0, i = "buffer", n = b);
    }

    var _ = e.objectMode ? 1 : n.length;

    e.length += _;
    var x = e.length < e.highWaterMark;

    if (x || (e.needDrain = !0), e.writing || e.corked) {
      var M = e.lastBufferedRequest;
      e.lastBufferedRequest = {
        chunk: n,
        encoding: i,
        isBuf: r,
        callback: h,
        next: null
      }, M ? M.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1;
    } else ka(t, e, !1, _, n, i, h);

    return x;
  }

  a(hv, "writeOrBuffer");

  function ka(t, e, r, n, i, h, b) {
    e.writelen = n, e.writecb = b, e.writing = !0, e.sync = !0, e.destroyed ? e.onwrite(new tv("write")) : r ? t._writev(i, e.onwrite) : t._write(i, h, e.onwrite), e.sync = !1;
  }

  a(ka, "doWrite");

  function uv(t, e, r, n, i) {
    --e.pendingcb, r ? (__Process$.nextTick(i, n), __Process$.nextTick(df, t, e), t._writableState.errorEmitted = !0, Ti(t, n)) : (i(n), t._writableState.errorEmitted = !0, Ti(t, n), df(t, e));
  }

  a(uv, "onwriteError");

  function dv(t) {
    t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0;
  }

  a(dv, "onwriteStateUpdate");

  function cv(t, e) {
    var r = t._writableState,
        n = r.sync,
        i = r.writecb;
    if (typeof i != "function") throw new Q1();
    if (dv(r), e) uv(t, r, n, e, i);else {
      var h = no(r) || t.destroyed;
      !h && !r.corked && !r.bufferProcessing && r.bufferedRequest && fo(t, r), n ? __Process$.nextTick(to, t, r, h, i) : to(t, r, h, i);
    }
  }

  a(cv, "onwrite");

  function to(t, e, r, n) {
    r || lv(t, e), e.pendingcb--, n(), df(t, e);
  }

  a(to, "afterWrite");

  function lv(t, e) {
    e.length === 0 && e.needDrain && (e.needDrain = !1, t.emit("drain"));
  }

  a(lv, "onwriteDrain");

  function fo(t, e) {
    e.bufferProcessing = !0;
    var r = e.bufferedRequest;

    if (t._writev && r && r.next) {
      var n = e.bufferedRequestCount,
          i = new Array(n),
          h = e.corkedRequestsFree;
      h.entry = r;

      for (var b = 0, _ = !0; r;) i[b] = r, r.isBuf || (_ = !1), r = r.next, b += 1;

      i.allBuffers = _, ka(t, e, !0, e.length, i, "", h.finish), e.pendingcb++, e.lastBufferedRequest = null, h.next ? (e.corkedRequestsFree = h.next, h.next = null) : e.corkedRequestsFree = new ro(e), e.bufferedRequestCount = 0;
    } else {
      for (; r;) {
        var x = r.chunk,
            M = r.encoding,
            S = r.callback,
            A = e.objectMode ? 1 : x.length;
        if (ka(t, e, !1, A, x, M, S), r = r.next, e.bufferedRequestCount--, e.writing) break;
      }

      r === null && (e.lastBufferedRequest = null);
    }

    e.bufferedRequest = r, e.bufferProcessing = !1;
  }

  a(fo, "clearBuffer");

  Oe.prototype._write = function (t, e, r) {
    r(new $1("_write()"));
  };

  Oe.prototype._writev = null;

  Oe.prototype.end = function (t, e, r) {
    var n = this._writableState;
    return typeof t == "function" ? (r = t, t = null, e = null) : typeof e == "function" && (r = e, e = null), t != null && this.write(t, e), n.corked && (n.corked = 1, this.uncork()), n.ending || bv(this, n, r), this;
  };

  Object.defineProperty(Oe.prototype, "writableLength", {
    enumerable: !1,
    get: a(function () {
      return this._writableState.length;
    }, "get")
  });

  function no(t) {
    return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing;
  }

  a(no, "needFinish");

  function vv(t, e) {
    t._final(function (r) {
      e.pendingcb--, r && Ti(t, r), e.prefinished = !0, t.emit("prefinish"), df(t, e);
    });
  }

  a(vv, "callFinal");

  function pv(t, e) {
    !e.prefinished && !e.finalCalled && (typeof t._final == "function" && !e.destroyed ? (e.pendingcb++, e.finalCalled = !0, __Process$.nextTick(vv, t, e)) : (e.prefinished = !0, t.emit("prefinish")));
  }

  a(pv, "prefinish");

  function df(t, e) {
    var r = no(e);

    if (r && (pv(t, e), e.pendingcb === 0 && (e.finished = !0, t.emit("finish"), e.autoDestroy))) {
      var n = t._readableState;
      (!n || n.autoDestroy && n.endEmitted) && t.destroy();
    }

    return r;
  }

  a(df, "finishMaybe");

  function bv(t, e, r) {
    e.ending = !0, df(t, e), r && (e.finished ? __Process$.nextTick(r) : t.once("finish", r)), e.ended = !0, t.writable = !1;
  }

  a(bv, "endWritable");

  function mv(t, e, r) {
    var n = t.entry;

    for (t.entry = null; n;) {
      var i = n.callback;
      e.pendingcb--, i(r), n = n.next;
    }

    e.corkedRequestsFree.next = t;
  }

  a(mv, "onCorkedFinish");
  Object.defineProperty(Oe.prototype, "destroyed", {
    enumerable: !1,
    get: a(function () {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    }, "get"),
    set: a(function (e) {
      !this._writableState || (this._writableState.destroyed = e);
    }, "set")
  });
  Oe.prototype.destroy = Da.destroy;
  Oe.prototype._undestroy = Da.undestroy;

  Oe.prototype._destroy = function (t, e) {
    e(t);
  };
});
var si = D((Y8, oo) => {
  "use strict";

  var gv = Object.keys || function (t) {
    var e = [];

    for (var r in t) e.push(r);

    return e;
  };

  oo.exports = rr;
  var so = Na(),
      Ca = Pa();
  Be()(rr, so);

  for (Ta = gv(Ca.prototype), tn = 0; tn < Ta.length; tn++) rn = Ta[tn], rr.prototype[rn] || (rr.prototype[rn] = Ca.prototype[rn]);

  var Ta, rn, tn;

  function rr(t) {
    if (!(this instanceof rr)) return new rr(t);
    so.call(this, t), Ca.call(this, t), this.allowHalfOpen = !0, t && (t.readable === !1 && (this.readable = !1), t.writable === !1 && (this.writable = !1), t.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", yv)));
  }

  a(rr, "Duplex");
  Object.defineProperty(rr.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: a(function () {
      return this._writableState.highWaterMark;
    }, "get")
  });
  Object.defineProperty(rr.prototype, "writableBuffer", {
    enumerable: !1,
    get: a(function () {
      return this._writableState && this._writableState.getBuffer();
    }, "get")
  });
  Object.defineProperty(rr.prototype, "writableLength", {
    enumerable: !1,
    get: a(function () {
      return this._writableState.length;
    }, "get")
  });

  function yv() {
    this._writableState.ended || __Process$.nextTick(_v, this);
  }

  a(yv, "onend");

  function _v(t) {
    t.end();
  }

  a(_v, "onEndNT");
  Object.defineProperty(rr.prototype, "destroyed", {
    enumerable: !1,
    get: a(function () {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    }, "get"),
    set: a(function (e) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = e, this._writableState.destroyed = e);
    }, "set")
  });
});
var fn = D((J8, co) => {
  "use strict";

  var ho = ai().codes.ERR_STREAM_PREMATURE_CLOSE;

  function wv(t) {
    var e = !1;
    return function () {
      if (!e) {
        e = !0;

        for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];

        t.apply(this, n);
      }
    };
  }

  a(wv, "once");

  function xv() {}

  a(xv, "noop");

  function Mv(t) {
    return t.setHeader && typeof t.abort == "function";
  }

  a(Mv, "isRequest");

  function uo(t, e, r) {
    if (typeof e == "function") return uo(t, null, e);
    e || (e = {}), r = wv(r || xv);

    var n = e.readable || e.readable !== !1 && t.readable,
        i = e.writable || e.writable !== !1 && t.writable,
        h = a(function () {
      t.writable || _();
    }, "onlegacyfinish"),
        b = t._writableState && t._writableState.finished,
        _ = a(function () {
      i = !1, b = !0, n || r.call(t);
    }, "onfinish"),
        x = t._readableState && t._readableState.endEmitted,
        M = a(function () {
      n = !1, x = !0, i || r.call(t);
    }, "onend"),
        S = a(function (P) {
      r.call(t, P);
    }, "onerror"),
        A = a(function () {
      var P;
      if (n && !x) return (!t._readableState || !t._readableState.ended) && (P = new ho()), r.call(t, P);
      if (i && !b) return (!t._writableState || !t._writableState.ended) && (P = new ho()), r.call(t, P);
    }, "onclose"),
        q = a(function () {
      t.req.on("finish", _);
    }, "onrequest");

    return Mv(t) ? (t.on("complete", _), t.on("abort", A), t.req ? q() : t.on("request", q)) : i && !t._writableState && (t.on("end", h), t.on("close", h)), t.on("end", M), t.on("finish", _), e.error !== !1 && t.on("error", S), t.on("close", A), function () {
      t.removeListener("complete", _), t.removeListener("abort", A), t.removeListener("request", q), t.req && t.req.removeListener("finish", _), t.removeListener("end", h), t.removeListener("close", h), t.removeListener("finish", _), t.removeListener("end", M), t.removeListener("error", S), t.removeListener("close", A);
    };
  }

  a(uo, "eos");
  co.exports = uo;
});
var vo = D(($8, lo) => {
  "use strict";

  var nn;

  function Kr(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  a(Kr, "_defineProperty");
  var Sv = fn(),
      jr = Symbol("lastResolve"),
      oi = Symbol("lastReject"),
      lf = Symbol("error"),
      an = Symbol("ended"),
      hi = Symbol("lastPromise"),
      La = Symbol("handlePromise"),
      ui = Symbol("stream");

  function Wr(t, e) {
    return {
      value: t,
      done: e
    };
  }

  a(Wr, "createIterResult");

  function Ev(t) {
    var e = t[jr];

    if (e !== null) {
      var r = t[ui].read();
      r !== null && (t[hi] = null, t[jr] = null, t[oi] = null, e(Wr(r, !1)));
    }
  }

  a(Ev, "readAndResolve");

  function Av(t) {
    __Process$.nextTick(Ev, t);
  }

  a(Av, "onReadable");

  function qv(t, e) {
    return function (r, n) {
      t.then(function () {
        if (e[an]) {
          r(Wr(void 0, !0));
          return;
        }

        e[La](r, n);
      }, n);
    };
  }

  a(qv, "wrapForNext");
  var Bv = Object.getPrototypeOf(function () {}),
      Rv = Object.setPrototypeOf((nn = {
    get stream() {
      return this[ui];
    },

    next: a(function () {
      var e = this,
          r = this[lf];
      if (r !== null) return Promise.reject(r);
      if (this[an]) return Promise.resolve(Wr(void 0, !0));
      if (this[ui].destroyed) return new Promise(function (b, _) {
        __Process$.nextTick(function () {
          e[lf] ? _(e[lf]) : b(Wr(void 0, !0));
        });
      });
      var n = this[hi],
          i;
      if (n) i = new Promise(qv(n, this));else {
        var h = this[ui].read();
        if (h !== null) return Promise.resolve(Wr(h, !1));
        i = new Promise(this[La]);
      }
      return this[hi] = i, i;
    }, "next")
  }, Kr(nn, Symbol.asyncIterator, function () {
    return this;
  }), Kr(nn, "return", a(function () {
    var e = this;
    return new Promise(function (r, n) {
      e[ui].destroy(null, function (i) {
        if (i) {
          n(i);
          return;
        }

        r(Wr(void 0, !0));
      });
    });
  }, "_return")), nn), Bv),
      Iv = a(function (e) {
    var r,
        n = Object.create(Rv, (r = {}, Kr(r, ui, {
      value: e,
      writable: !0
    }), Kr(r, jr, {
      value: null,
      writable: !0
    }), Kr(r, oi, {
      value: null,
      writable: !0
    }), Kr(r, lf, {
      value: null,
      writable: !0
    }), Kr(r, an, {
      value: e._readableState.endEmitted,
      writable: !0
    }), Kr(r, La, {
      value: a(function (h, b) {
        var _ = n[ui].read();

        _ ? (n[hi] = null, n[jr] = null, n[oi] = null, h(Wr(_, !1))) : (n[jr] = h, n[oi] = b);
      }, "value"),
      writable: !0
    }), r));
    return n[hi] = null, Sv(e, function (i) {
      if (i && i.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var h = n[oi];
        h !== null && (n[hi] = null, n[jr] = null, n[oi] = null, h(i)), n[lf] = i;
        return;
      }

      var b = n[jr];
      b !== null && (n[hi] = null, n[jr] = null, n[oi] = null, b(Wr(void 0, !0))), n[an] = !0;
    }), e.on("readable", Av.bind(null, n)), n;
  }, "createReadableStreamAsyncIterator");
  lo.exports = Iv;
});
var bo = D((Q8, po) => {
  po.exports = function () {
    throw new Error("Readable.from is not available in the browser");
  };
});
var Na = D((t5, Ao) => {
  "use strict";

  Ao.exports = ke;
  var Ci;
  ke.ReadableState = _o;

  var e5 = __events$.EventEmitter,
      yo = a(function (e, r) {
    return e.listeners(r).length;
  }, "EElistenerCount"),
      pf = Ea(),
      sn = __buffer$.Buffer,
      kv = __global$.Uint8Array || function () {};

  function Dv(t) {
    return sn.from(t);
  }

  a(Dv, "_uint8ArrayToBuffer");

  function Pv(t) {
    return sn.isBuffer(t) || t instanceof kv;
  }

  a(Pv, "_isUint8Array");
  var Oa = __util$,
      Re;
  Oa && Oa.debuglog ? Re = Oa.debuglog("stream") : Re = a(function () {}, "debug");
  var Tv = Vs(),
      Wa = Ba(),
      Cv = Ra(),
      Nv = Cv.getHighWaterMark,
      on = ai().codes,
      Lv = on.ERR_INVALID_ARG_TYPE,
      Ov = on.ERR_STREAM_PUSH_AFTER_EOF,
      zv = on.ERR_METHOD_NOT_IMPLEMENTED,
      Uv = on.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,
      Ni,
      za,
      Ua;
  Be()(ke, pf);
  var vf = Wa.errorOrDestroy,
      Ha = ["error", "close", "destroy", "pause", "resume"];

  function Hv(t, e, r) {
    if (typeof t.prependListener == "function") return t.prependListener(e, r);
    !t._events || !t._events[e] ? t.on(e, r) : Array.isArray(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [r, t._events[e]];
  }

  a(Hv, "prependListener");

  function _o(t, e, r) {
    Ci = Ci || si(), t = t || {}, typeof r != "boolean" && (r = e instanceof Ci), this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.readableObjectMode), this.highWaterMark = Nv(this, t, "readableHighWaterMark", r), this.buffer = new Tv(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = t.emitClose !== !1, this.autoDestroy = !!t.autoDestroy, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (Ni || (Ni = __string_decoder$.StringDecoder), this.decoder = new Ni(t.encoding), this.encoding = t.encoding);
  }

  a(_o, "ReadableState");

  function ke(t) {
    if (Ci = Ci || si(), !(this instanceof ke)) return new ke(t);
    var e = this instanceof Ci;
    this._readableState = new _o(t, this, e), this.readable = !0, t && (typeof t.read == "function" && (this._read = t.read), typeof t.destroy == "function" && (this._destroy = t.destroy)), pf.call(this);
  }

  a(ke, "Readable");
  Object.defineProperty(ke.prototype, "destroyed", {
    enumerable: !1,
    get: a(function () {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    }, "get"),
    set: a(function (e) {
      !this._readableState || (this._readableState.destroyed = e);
    }, "set")
  });
  ke.prototype.destroy = Wa.destroy;
  ke.prototype._undestroy = Wa.undestroy;

  ke.prototype._destroy = function (t, e) {
    e(t);
  };

  ke.prototype.push = function (t, e) {
    var r = this._readableState,
        n;
    return r.objectMode ? n = !0 : typeof t == "string" && (e = e || r.defaultEncoding, e !== r.encoding && (t = sn.from(t, e), e = ""), n = !0), wo(this, t, e, !1, n);
  };

  ke.prototype.unshift = function (t) {
    return wo(this, t, null, !0, !1);
  };

  function wo(t, e, r, n, i) {
    Re("readableAddChunk", e);
    var h = t._readableState;
    if (e === null) h.reading = !1, jv(t, h);else {
      var b;
      if (i || (b = Fv(h, e)), b) vf(t, b);else if (h.objectMode || e && e.length > 0) {
        if (typeof e != "string" && !h.objectMode && Object.getPrototypeOf(e) !== sn.prototype && (e = Dv(e)), n) h.endEmitted ? vf(t, new Uv()) : Fa(t, h, e, !0);else if (h.ended) vf(t, new Ov());else {
          if (h.destroyed) return !1;
          h.reading = !1, h.decoder && !r ? (e = h.decoder.write(e), h.objectMode || e.length !== 0 ? Fa(t, h, e, !1) : ja(t, h)) : Fa(t, h, e, !1);
        }
      } else n || (h.reading = !1, ja(t, h));
    }
    return !h.ended && (h.length < h.highWaterMark || h.length === 0);
  }

  a(wo, "readableAddChunk");

  function Fa(t, e, r, n) {
    e.flowing && e.length === 0 && !e.sync ? (e.awaitDrain = 0, t.emit("data", r)) : (e.length += e.objectMode ? 1 : r.length, n ? e.buffer.unshift(r) : e.buffer.push(r), e.needReadable && hn(t)), ja(t, e);
  }

  a(Fa, "addChunk");

  function Fv(t, e) {
    var r;
    return !Pv(e) && typeof e != "string" && e !== void 0 && !t.objectMode && (r = new Lv("chunk", ["string", "Buffer", "Uint8Array"], e)), r;
  }

  a(Fv, "chunkInvalid");

  ke.prototype.isPaused = function () {
    return this._readableState.flowing === !1;
  };

  ke.prototype.setEncoding = function (t) {
    Ni || (Ni = __string_decoder$.StringDecoder);
    var e = new Ni(t);
    this._readableState.decoder = e, this._readableState.encoding = this._readableState.decoder.encoding;

    for (var r = this._readableState.buffer.head, n = ""; r !== null;) n += e.write(r.data), r = r.next;

    return this._readableState.buffer.clear(), n !== "" && this._readableState.buffer.push(n), this._readableState.length = n.length, this;
  };

  var mo = 1073741824;

  function Kv(t) {
    return t >= mo ? t = mo : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t;
  }

  a(Kv, "computeNewHighWaterMark");

  function go(t, e) {
    return t <= 0 || e.length === 0 && e.ended ? 0 : e.objectMode ? 1 : t !== t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = Kv(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0));
  }

  a(go, "howMuchToRead");

  ke.prototype.read = function (t) {
    Re("read", t), t = parseInt(t, 10);
    var e = this._readableState,
        r = t;
    if (t !== 0 && (e.emittedReadable = !1), t === 0 && e.needReadable && ((e.highWaterMark !== 0 ? e.length >= e.highWaterMark : e.length > 0) || e.ended)) return Re("read: emitReadable", e.length, e.ended), e.length === 0 && e.ended ? Ka(this) : hn(this), null;
    if (t = go(t, e), t === 0 && e.ended) return e.length === 0 && Ka(this), null;
    var n = e.needReadable;
    Re("need readable", n), (e.length === 0 || e.length - t < e.highWaterMark) && (n = !0, Re("length less than watermark", n)), e.ended || e.reading ? (n = !1, Re("reading or ended", n)) : n && (Re("do read"), e.reading = !0, e.sync = !0, e.length === 0 && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = go(r, e)));
    var i;
    return t > 0 ? i = So(t, e) : i = null, i === null ? (e.needReadable = e.length <= e.highWaterMark, t = 0) : (e.length -= t, e.awaitDrain = 0), e.length === 0 && (e.ended || (e.needReadable = !0), r !== t && e.ended && Ka(this)), i !== null && this.emit("data", i), i;
  };

  function jv(t, e) {
    if (Re("onEofChunk"), !e.ended) {
      if (e.decoder) {
        var r = e.decoder.end();
        r && r.length && (e.buffer.push(r), e.length += e.objectMode ? 1 : r.length);
      }

      e.ended = !0, e.sync ? hn(t) : (e.needReadable = !1, e.emittedReadable || (e.emittedReadable = !0, xo(t)));
    }
  }

  a(jv, "onEofChunk");

  function hn(t) {
    var e = t._readableState;
    Re("emitReadable", e.needReadable, e.emittedReadable), e.needReadable = !1, e.emittedReadable || (Re("emitReadable", e.flowing), e.emittedReadable = !0, __Process$.nextTick(xo, t));
  }

  a(hn, "emitReadable");

  function xo(t) {
    var e = t._readableState;
    Re("emitReadable_", e.destroyed, e.length, e.ended), !e.destroyed && (e.length || e.ended) && (t.emit("readable"), e.emittedReadable = !1), e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark, Va(t);
  }

  a(xo, "emitReadable_");

  function ja(t, e) {
    e.readingMore || (e.readingMore = !0, __Process$.nextTick(Wv, t, e));
  }

  a(ja, "maybeReadMore");

  function Wv(t, e) {
    for (; !e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && e.length === 0);) {
      var r = e.length;
      if (Re("maybeReadMore read 0"), t.read(0), r === e.length) break;
    }

    e.readingMore = !1;
  }

  a(Wv, "maybeReadMore_");

  ke.prototype._read = function (t) {
    vf(this, new zv("_read()"));
  };

  ke.prototype.pipe = function (t, e) {
    var r = this,
        n = this._readableState;

    switch (n.pipesCount) {
      case 0:
        n.pipes = t;
        break;

      case 1:
        n.pipes = [n.pipes, t];
        break;

      default:
        n.pipes.push(t);
        break;
    }

    n.pipesCount += 1, Re("pipe count=%d opts=%j", n.pipesCount, e);
    var i = (!e || e.end !== !1) && t !== __Process$.stdout && t !== __Process$.stderr,
        h = i ? _ : N;
    n.endEmitted ? __Process$.nextTick(h) : r.once("end", h), t.on("unpipe", b);

    function b(ye, O) {
      Re("onunpipe"), ye === r && O && O.hasUnpiped === !1 && (O.hasUnpiped = !0, S());
    }

    a(b, "onunpipe");

    function _() {
      Re("onend"), t.end();
    }

    a(_, "onend");
    var x = Vv(r);
    t.on("drain", x);
    var M = !1;

    function S() {
      Re("cleanup"), t.removeListener("close", k), t.removeListener("finish", P), t.removeListener("drain", x), t.removeListener("error", q), t.removeListener("unpipe", b), r.removeListener("end", _), r.removeListener("end", N), r.removeListener("data", A), M = !0, n.awaitDrain && (!t._writableState || t._writableState.needDrain) && x();
    }

    a(S, "cleanup"), r.on("data", A);

    function A(ye) {
      Re("ondata");
      var O = t.write(ye);
      Re("dest.write", O), O === !1 && ((n.pipesCount === 1 && n.pipes === t || n.pipesCount > 1 && Eo(n.pipes, t) !== -1) && !M && (Re("false write response, pause", n.awaitDrain), n.awaitDrain++), r.pause());
    }

    a(A, "ondata");

    function q(ye) {
      Re("onerror", ye), N(), t.removeListener("error", q), yo(t, "error") === 0 && vf(t, ye);
    }

    a(q, "onerror"), Hv(t, "error", q);

    function k() {
      t.removeListener("finish", P), N();
    }

    a(k, "onclose"), t.once("close", k);

    function P() {
      Re("onfinish"), t.removeListener("close", k), N();
    }

    a(P, "onfinish"), t.once("finish", P);

    function N() {
      Re("unpipe"), r.unpipe(t);
    }

    return a(N, "unpipe"), t.emit("pipe", r), n.flowing || (Re("pipe resume"), r.resume()), t;
  };

  function Vv(t) {
    return a(function () {
      var r = t._readableState;
      Re("pipeOnDrain", r.awaitDrain), r.awaitDrain && r.awaitDrain--, r.awaitDrain === 0 && yo(t, "data") && (r.flowing = !0, Va(t));
    }, "pipeOnDrainFunctionResult");
  }

  a(Vv, "pipeOnDrain");

  ke.prototype.unpipe = function (t) {
    var e = this._readableState,
        r = {
      hasUnpiped: !1
    };
    if (e.pipesCount === 0) return this;
    if (e.pipesCount === 1) return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, r), this);

    if (!t) {
      var n = e.pipes,
          i = e.pipesCount;
      e.pipes = null, e.pipesCount = 0, e.flowing = !1;

      for (var h = 0; h < i; h++) n[h].emit("unpipe", this, {
        hasUnpiped: !1
      });

      return this;
    }

    var b = Eo(e.pipes, t);
    return b === -1 ? this : (e.pipes.splice(b, 1), e.pipesCount -= 1, e.pipesCount === 1 && (e.pipes = e.pipes[0]), t.emit("unpipe", this, r), this);
  };

  ke.prototype.on = function (t, e) {
    var r = pf.prototype.on.call(this, t, e),
        n = this._readableState;
    return t === "data" ? (n.readableListening = this.listenerCount("readable") > 0, n.flowing !== !1 && this.resume()) : t === "readable" && !n.endEmitted && !n.readableListening && (n.readableListening = n.needReadable = !0, n.flowing = !1, n.emittedReadable = !1, Re("on readable", n.length, n.reading), n.length ? hn(this) : n.reading || __Process$.nextTick(Zv, this)), r;
  };

  ke.prototype.addListener = ke.prototype.on;

  ke.prototype.removeListener = function (t, e) {
    var r = pf.prototype.removeListener.call(this, t, e);
    return t === "readable" && __Process$.nextTick(Mo, this), r;
  };

  ke.prototype.removeAllListeners = function (t) {
    var e = pf.prototype.removeAllListeners.apply(this, arguments);
    return (t === "readable" || t === void 0) && __Process$.nextTick(Mo, this), e;
  };

  function Mo(t) {
    var e = t._readableState;
    e.readableListening = t.listenerCount("readable") > 0, e.resumeScheduled && !e.paused ? e.flowing = !0 : t.listenerCount("data") > 0 && t.resume();
  }

  a(Mo, "updateReadableListening");

  function Zv(t) {
    Re("readable nexttick read 0"), t.read(0);
  }

  a(Zv, "nReadingNextTick");

  ke.prototype.resume = function () {
    var t = this._readableState;
    return t.flowing || (Re("resume"), t.flowing = !t.readableListening, Gv(this, t)), t.paused = !1, this;
  };

  function Gv(t, e) {
    e.resumeScheduled || (e.resumeScheduled = !0, __Process$.nextTick(Xv, t, e));
  }

  a(Gv, "resume");

  function Xv(t, e) {
    Re("resume", e.reading), e.reading || t.read(0), e.resumeScheduled = !1, t.emit("resume"), Va(t), e.flowing && !e.reading && t.read(0);
  }

  a(Xv, "resume_");

  ke.prototype.pause = function () {
    return Re("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (Re("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this;
  };

  function Va(t) {
    var e = t._readableState;

    for (Re("flow", e.flowing); e.flowing && t.read() !== null;);
  }

  a(Va, "flow");

  ke.prototype.wrap = function (t) {
    var e = this,
        r = this._readableState,
        n = !1;
    t.on("end", function () {
      if (Re("wrapped end"), r.decoder && !r.ended) {
        var b = r.decoder.end();
        b && b.length && e.push(b);
      }

      e.push(null);
    }), t.on("data", function (b) {
      if (Re("wrapped data"), r.decoder && (b = r.decoder.write(b)), !(r.objectMode && b == null) && !(!r.objectMode && (!b || !b.length))) {
        var _ = e.push(b);

        _ || (n = !0, t.pause());
      }
    });

    for (var i in t) this[i] === void 0 && typeof t[i] == "function" && (this[i] = a(function (_) {
      return a(function () {
        return t[_].apply(t, arguments);
      }, "methodWrapReturnFunction");
    }, "methodWrap")(i));

    for (var h = 0; h < Ha.length; h++) t.on(Ha[h], this.emit.bind(this, Ha[h]));

    return this._read = function (b) {
      Re("wrapped _read", b), n && (n = !1, t.resume());
    }, this;
  };

  typeof Symbol == "function" && (ke.prototype[Symbol.asyncIterator] = function () {
    return za === void 0 && (za = vo()), za(this);
  });
  Object.defineProperty(ke.prototype, "readableHighWaterMark", {
    enumerable: !1,
    get: a(function () {
      return this._readableState.highWaterMark;
    }, "get")
  });
  Object.defineProperty(ke.prototype, "readableBuffer", {
    enumerable: !1,
    get: a(function () {
      return this._readableState && this._readableState.buffer;
    }, "get")
  });
  Object.defineProperty(ke.prototype, "readableFlowing", {
    enumerable: !1,
    get: a(function () {
      return this._readableState.flowing;
    }, "get"),
    set: a(function (e) {
      this._readableState && (this._readableState.flowing = e);
    }, "set")
  });
  ke._fromList = So;
  Object.defineProperty(ke.prototype, "readableLength", {
    enumerable: !1,
    get: a(function () {
      return this._readableState.length;
    }, "get")
  });

  function So(t, e) {
    if (e.length === 0) return null;
    var r;
    return e.objectMode ? r = e.buffer.shift() : !t || t >= e.length ? (e.decoder ? r = e.buffer.join("") : e.buffer.length === 1 ? r = e.buffer.first() : r = e.buffer.concat(e.length), e.buffer.clear()) : r = e.buffer.consume(t, e.decoder), r;
  }

  a(So, "fromList");

  function Ka(t) {
    var e = t._readableState;
    Re("endReadable", e.endEmitted), e.endEmitted || (e.ended = !0, __Process$.nextTick(Yv, e, t));
  }

  a(Ka, "endReadable");

  function Yv(t, e) {
    if (Re("endReadableNT", t.endEmitted, t.length), !t.endEmitted && t.length === 0 && (t.endEmitted = !0, e.readable = !1, e.emit("end"), t.autoDestroy)) {
      var r = e._writableState;
      (!r || r.autoDestroy && r.finished) && e.destroy();
    }
  }

  a(Yv, "endReadableNT");
  typeof Symbol == "function" && (ke.from = function (t, e) {
    return Ua === void 0 && (Ua = bo()), Ua(ke, t, e);
  });

  function Eo(t, e) {
    for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;

    return -1;
  }

  a(Eo, "indexOf");
});
var Za = D((r5, Bo) => {
  "use strict";

  Bo.exports = lr;
  var un = ai().codes,
      Jv = un.ERR_METHOD_NOT_IMPLEMENTED,
      $v = un.ERR_MULTIPLE_CALLBACK,
      Qv = un.ERR_TRANSFORM_ALREADY_TRANSFORMING,
      ep = un.ERR_TRANSFORM_WITH_LENGTH_0,
      dn = si();
  Be()(lr, dn);

  function tp(t, e) {
    var r = this._transformState;
    r.transforming = !1;
    var n = r.writecb;
    if (n === null) return this.emit("error", new $v());
    r.writechunk = null, r.writecb = null, e != null && this.push(e), n(t);
    var i = this._readableState;
    i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
  }

  a(tp, "afterTransform");

  function lr(t) {
    if (!(this instanceof lr)) return new lr(t);
    dn.call(this, t), this._transformState = {
      afterTransform: tp.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null
    }, this._readableState.needReadable = !0, this._readableState.sync = !1, t && (typeof t.transform == "function" && (this._transform = t.transform), typeof t.flush == "function" && (this._flush = t.flush)), this.on("prefinish", rp);
  }

  a(lr, "Transform");

  function rp() {
    var t = this;
    typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function (e, r) {
      qo(t, e, r);
    }) : qo(this, null, null);
  }

  a(rp, "prefinish");

  lr.prototype.push = function (t, e) {
    return this._transformState.needTransform = !1, dn.prototype.push.call(this, t, e);
  };

  lr.prototype._transform = function (t, e, r) {
    r(new Jv("_transform()"));
  };

  lr.prototype._write = function (t, e, r) {
    var n = this._transformState;

    if (n.writecb = r, n.writechunk = t, n.writeencoding = e, !n.transforming) {
      var i = this._readableState;
      (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
    }
  };

  lr.prototype._read = function (t) {
    var e = this._transformState;
    e.writechunk !== null && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0;
  };

  lr.prototype._destroy = function (t, e) {
    dn.prototype._destroy.call(this, t, function (r) {
      e(r);
    });
  };

  function qo(t, e, r) {
    if (e) return t.emit("error", e);
    if (r != null && t.push(r), t._writableState.length) throw new ep();
    if (t._transformState.transforming) throw new Qv();
    return t.push(null);
  }

  a(qo, "done");
});
var ko = D((i5, Io) => {
  "use strict";

  Io.exports = bf;
  var Ro = Za();
  Be()(bf, Ro);

  function bf(t) {
    if (!(this instanceof bf)) return new bf(t);
    Ro.call(this, t);
  }

  a(bf, "PassThrough");

  bf.prototype._transform = function (t, e, r) {
    r(null, t);
  };
});
var No = D((f5, Co) => {
  "use strict";

  var Ga;

  function ip(t) {
    var e = !1;
    return function () {
      e || (e = !0, t.apply(void 0, arguments));
    };
  }

  a(ip, "once");
  var To = ai().codes,
      fp = To.ERR_MISSING_ARGS,
      np = To.ERR_STREAM_DESTROYED;

  function Do(t) {
    if (t) throw t;
  }

  a(Do, "noop");

  function ap(t) {
    return t.setHeader && typeof t.abort == "function";
  }

  a(ap, "isRequest");

  function sp(t, e, r, n) {
    n = ip(n);
    var i = !1;
    t.on("close", function () {
      i = !0;
    }), Ga === void 0 && (Ga = fn()), Ga(t, {
      readable: e,
      writable: r
    }, function (b) {
      if (b) return n(b);
      i = !0, n();
    });
    var h = !1;
    return function (b) {
      if (!i && !h) {
        if (h = !0, ap(t)) return t.abort();
        if (typeof t.destroy == "function") return t.destroy();
        n(b || new np("pipe"));
      }
    };
  }

  a(sp, "destroyer");

  function Po(t) {
    t();
  }

  a(Po, "call");

  function op(t, e) {
    return t.pipe(e);
  }

  a(op, "pipe");

  function hp(t) {
    return !t.length || typeof t[t.length - 1] != "function" ? Do : t.pop();
  }

  a(hp, "popCallback");

  function up() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];

    var n = hp(e);
    if (Array.isArray(e[0]) && (e = e[0]), e.length < 2) throw new fp("streams");
    var i,
        h = e.map(function (b, _) {
      var x = _ < e.length - 1,
          M = _ > 0;
      return sp(b, x, M, function (S) {
        i || (i = S), S && h.forEach(Po), !x && (h.forEach(Po), n(i));
      });
    });
    return e.reduce(op);
  }

  a(up, "pipeline");
  Co.exports = up;
});
var Xa = D((vt, Lo) => {
  vt = Lo.exports = Na();
  vt.Stream = vt;
  vt.Readable = vt;
  vt.Writable = Pa();
  vt.Duplex = si();
  vt.Transform = Za();
  vt.PassThrough = ko();
  vt.finished = fn();
  vt.pipeline = No();
});
var Ya = D((n5, zo) => {
  "use strict";

  var cn = qe().Buffer,
      Oo = Xa().Transform,
      dp = Be();

  function cp(t, e) {
    if (!cn.isBuffer(t) && typeof t != "string") throw new TypeError(e + " must be a string or a buffer");
  }

  a(cp, "throwIfNotStringOrBuffer");

  function Vr(t) {
    Oo.call(this), this._block = cn.allocUnsafe(t), this._blockSize = t, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1;
  }

  a(Vr, "HashBase");
  dp(Vr, Oo);

  Vr.prototype._transform = function (t, e, r) {
    var n = null;

    try {
      this.update(t, e);
    } catch (i) {
      n = i;
    }

    r(n);
  };

  Vr.prototype._flush = function (t) {
    var e = null;

    try {
      this.push(this.digest());
    } catch (r) {
      e = r;
    }

    t(e);
  };

  Vr.prototype.update = function (t, e) {
    if (cp(t, "Data"), this._finalized) throw new Error("Digest already called");
    cn.isBuffer(t) || (t = cn.from(t, e));

    for (var r = this._block, n = 0; this._blockOffset + t.length - n >= this._blockSize;) {
      for (var i = this._blockOffset; i < this._blockSize;) r[i++] = t[n++];

      this._update(), this._blockOffset = 0;
    }

    for (; n < t.length;) r[this._blockOffset++] = t[n++];

    for (var h = 0, b = t.length * 8; b > 0; ++h) this._length[h] += b, b = this._length[h] / 4294967296 | 0, b > 0 && (this._length[h] -= 4294967296 * b);

    return this;
  };

  Vr.prototype._update = function () {
    throw new Error("_update is not implemented");
  };

  Vr.prototype.digest = function (t) {
    if (this._finalized) throw new Error("Digest already called");
    this._finalized = !0;

    var e = this._digest();

    t !== void 0 && (e = e.toString(t)), this._block.fill(0), this._blockOffset = 0;

    for (var r = 0; r < 4; ++r) this._length[r] = 0;

    return e;
  };

  Vr.prototype._digest = function () {
    throw new Error("_digest is not implemented");
  };

  zo.exports = Vr;
});
var pn = D((a5, Ho) => {
  "use strict";

  var lp = Be(),
      Uo = Ya(),
      vp = qe().Buffer,
      pp = new Array(16);

  function ln() {
    Uo.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878;
  }

  a(ln, "MD5");
  lp(ln, Uo);

  ln.prototype._update = function () {
    for (var t = pp, e = 0; e < 16; ++e) t[e] = this._block.readInt32LE(e * 4);

    var r = this._a,
        n = this._b,
        i = this._c,
        h = this._d;
    r = $e(r, n, i, h, t[0], 3614090360, 7), h = $e(h, r, n, i, t[1], 3905402710, 12), i = $e(i, h, r, n, t[2], 606105819, 17), n = $e(n, i, h, r, t[3], 3250441966, 22), r = $e(r, n, i, h, t[4], 4118548399, 7), h = $e(h, r, n, i, t[5], 1200080426, 12), i = $e(i, h, r, n, t[6], 2821735955, 17), n = $e(n, i, h, r, t[7], 4249261313, 22), r = $e(r, n, i, h, t[8], 1770035416, 7), h = $e(h, r, n, i, t[9], 2336552879, 12), i = $e(i, h, r, n, t[10], 4294925233, 17), n = $e(n, i, h, r, t[11], 2304563134, 22), r = $e(r, n, i, h, t[12], 1804603682, 7), h = $e(h, r, n, i, t[13], 4254626195, 12), i = $e(i, h, r, n, t[14], 2792965006, 17), n = $e(n, i, h, r, t[15], 1236535329, 22), r = Qe(r, n, i, h, t[1], 4129170786, 5), h = Qe(h, r, n, i, t[6], 3225465664, 9), i = Qe(i, h, r, n, t[11], 643717713, 14), n = Qe(n, i, h, r, t[0], 3921069994, 20), r = Qe(r, n, i, h, t[5], 3593408605, 5), h = Qe(h, r, n, i, t[10], 38016083, 9), i = Qe(i, h, r, n, t[15], 3634488961, 14), n = Qe(n, i, h, r, t[4], 3889429448, 20), r = Qe(r, n, i, h, t[9], 568446438, 5), h = Qe(h, r, n, i, t[14], 3275163606, 9), i = Qe(i, h, r, n, t[3], 4107603335, 14), n = Qe(n, i, h, r, t[8], 1163531501, 20), r = Qe(r, n, i, h, t[13], 2850285829, 5), h = Qe(h, r, n, i, t[2], 4243563512, 9), i = Qe(i, h, r, n, t[7], 1735328473, 14), n = Qe(n, i, h, r, t[12], 2368359562, 20), r = et(r, n, i, h, t[5], 4294588738, 4), h = et(h, r, n, i, t[8], 2272392833, 11), i = et(i, h, r, n, t[11], 1839030562, 16), n = et(n, i, h, r, t[14], 4259657740, 23), r = et(r, n, i, h, t[1], 2763975236, 4), h = et(h, r, n, i, t[4], 1272893353, 11), i = et(i, h, r, n, t[7], 4139469664, 16), n = et(n, i, h, r, t[10], 3200236656, 23), r = et(r, n, i, h, t[13], 681279174, 4), h = et(h, r, n, i, t[0], 3936430074, 11), i = et(i, h, r, n, t[3], 3572445317, 16), n = et(n, i, h, r, t[6], 76029189, 23), r = et(r, n, i, h, t[9], 3654602809, 4), h = et(h, r, n, i, t[12], 3873151461, 11), i = et(i, h, r, n, t[15], 530742520, 16), n = et(n, i, h, r, t[2], 3299628645, 23), r = tt(r, n, i, h, t[0], 4096336452, 6), h = tt(h, r, n, i, t[7], 1126891415, 10), i = tt(i, h, r, n, t[14], 2878612391, 15), n = tt(n, i, h, r, t[5], 4237533241, 21), r = tt(r, n, i, h, t[12], 1700485571, 6), h = tt(h, r, n, i, t[3], 2399980690, 10), i = tt(i, h, r, n, t[10], 4293915773, 15), n = tt(n, i, h, r, t[1], 2240044497, 21), r = tt(r, n, i, h, t[8], 1873313359, 6), h = tt(h, r, n, i, t[15], 4264355552, 10), i = tt(i, h, r, n, t[6], 2734768916, 15), n = tt(n, i, h, r, t[13], 1309151649, 21), r = tt(r, n, i, h, t[4], 4149444226, 6), h = tt(h, r, n, i, t[11], 3174756917, 10), i = tt(i, h, r, n, t[2], 718787259, 15), n = tt(n, i, h, r, t[9], 3951481745, 21), this._a = this._a + r | 0, this._b = this._b + n | 0, this._c = this._c + i | 0, this._d = this._d + h | 0;
  };

  ln.prototype._digest = function () {
    this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
    var t = vp.allocUnsafe(16);
    return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t;
  };

  function vn(t, e) {
    return t << e | t >>> 32 - e;
  }

  a(vn, "rotl");

  function $e(t, e, r, n, i, h, b) {
    return vn(t + (e & r | ~e & n) + i + h | 0, b) + e | 0;
  }

  a($e, "fnF");

  function Qe(t, e, r, n, i, h, b) {
    return vn(t + (e & n | r & ~n) + i + h | 0, b) + e | 0;
  }

  a(Qe, "fnG");

  function et(t, e, r, n, i, h, b) {
    return vn(t + (e ^ r ^ n) + i + h | 0, b) + e | 0;
  }

  a(et, "fnH");

  function tt(t, e, r, n, i, h, b) {
    return vn(t + (r ^ (e | ~n)) + i + h | 0, b) + e | 0;
  }

  a(tt, "fnI");
  Ho.exports = ln;
});
var mn = D((s5, Go) => {
  "use strict";

  var Ja = __buffer$.Buffer,
      bp = Be(),
      Zo = Ya(),
      mp = new Array(16),
      mf = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
      gf = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
      yf = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
      _f = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
      wf = [0, 1518500249, 1859775393, 2400959708, 2840853838],
      xf = [1352829926, 1548603684, 1836072691, 2053994217, 0];

  function bn() {
    Zo.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520;
  }

  a(bn, "RIPEMD160");
  bp(bn, Zo);

  bn.prototype._update = function () {
    for (var t = mp, e = 0; e < 16; ++e) t[e] = this._block.readInt32LE(e * 4);

    for (var r = this._a | 0, n = this._b | 0, i = this._c | 0, h = this._d | 0, b = this._e | 0, _ = this._a | 0, x = this._b | 0, M = this._c | 0, S = this._d | 0, A = this._e | 0, q = 0; q < 80; q += 1) {
      var k, P;
      q < 16 ? (k = Fo(r, n, i, h, b, t[mf[q]], wf[0], yf[q]), P = Vo(_, x, M, S, A, t[gf[q]], xf[0], _f[q])) : q < 32 ? (k = Ko(r, n, i, h, b, t[mf[q]], wf[1], yf[q]), P = Wo(_, x, M, S, A, t[gf[q]], xf[1], _f[q])) : q < 48 ? (k = jo(r, n, i, h, b, t[mf[q]], wf[2], yf[q]), P = jo(_, x, M, S, A, t[gf[q]], xf[2], _f[q])) : q < 64 ? (k = Wo(r, n, i, h, b, t[mf[q]], wf[3], yf[q]), P = Ko(_, x, M, S, A, t[gf[q]], xf[3], _f[q])) : (k = Vo(r, n, i, h, b, t[mf[q]], wf[4], yf[q]), P = Fo(_, x, M, S, A, t[gf[q]], xf[4], _f[q])), r = b, b = h, h = di(i, 10), i = n, n = k, _ = A, A = S, S = di(M, 10), M = x, x = P;
    }

    var N = this._b + i + S | 0;
    this._b = this._c + h + A | 0, this._c = this._d + b + _ | 0, this._d = this._e + r + x | 0, this._e = this._a + n + M | 0, this._a = N;
  };

  bn.prototype._digest = function () {
    this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
    var t = Ja.alloc ? Ja.alloc(20) : new Ja(20);
    return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t.writeInt32LE(this._e, 16), t;
  };

  function di(t, e) {
    return t << e | t >>> 32 - e;
  }

  a(di, "rotl");

  function Fo(t, e, r, n, i, h, b, _) {
    return di(t + (e ^ r ^ n) + h + b | 0, _) + i | 0;
  }

  a(Fo, "fn1");

  function Ko(t, e, r, n, i, h, b, _) {
    return di(t + (e & r | ~e & n) + h + b | 0, _) + i | 0;
  }

  a(Ko, "fn2");

  function jo(t, e, r, n, i, h, b, _) {
    return di(t + ((e | ~r) ^ n) + h + b | 0, _) + i | 0;
  }

  a(jo, "fn3");

  function Wo(t, e, r, n, i, h, b, _) {
    return di(t + (e & n | r & ~n) + h + b | 0, _) + i | 0;
  }

  a(Wo, "fn4");

  function Vo(t, e, r, n, i, h, b, _) {
    return di(t + (e ^ (r | ~n)) + h + b | 0, _) + i | 0;
  }

  a(Vo, "fn5");
  Go.exports = bn;
});
var ci = D((o5, Yo) => {
  var Xo = qe().Buffer;

  function gn(t, e) {
    this._block = Xo.alloc(t), this._finalSize = e, this._blockSize = t, this._len = 0;
  }

  a(gn, "Hash");

  gn.prototype.update = function (t, e) {
    typeof t == "string" && (e = e || "utf8", t = Xo.from(t, e));

    for (var r = this._block, n = this._blockSize, i = t.length, h = this._len, b = 0; b < i;) {
      for (var _ = h % n, x = Math.min(i - b, n - _), M = 0; M < x; M++) r[_ + M] = t[b + M];

      h += x, b += x, h % n === 0 && this._update(r);
    }

    return this._len += i, this;
  };

  gn.prototype.digest = function (t) {
    var e = this._len % this._blockSize;
    this._block[e] = 128, this._block.fill(0, e + 1), e >= this._finalSize && (this._update(this._block), this._block.fill(0));
    var r = this._len * 8;
    if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);else {
      var n = (r & 4294967295) >>> 0,
          i = (r - n) / 4294967296;
      this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4);
    }

    this._update(this._block);

    var h = this._hash();

    return t ? h.toString(t) : h;
  };

  gn.prototype._update = function () {
    throw new Error("_update must be implemented by subclass");
  };

  Yo.exports = gn;
});
var Qo = D((h5, $o) => {
  var gp = Be(),
      Jo = ci(),
      yp = qe().Buffer,
      _p = [1518500249, 1859775393, -1894007588, -899497514],
      wp = new Array(80);

  function Mf() {
    this.init(), this._w = wp, Jo.call(this, 64, 56);
  }

  a(Mf, "Sha");
  gp(Mf, Jo);

  Mf.prototype.init = function () {
    return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
  };

  function xp(t) {
    return t << 5 | t >>> 27;
  }

  a(xp, "rotl5");

  function Mp(t) {
    return t << 30 | t >>> 2;
  }

  a(Mp, "rotl30");

  function Sp(t, e, r, n) {
    return t === 0 ? e & r | ~e & n : t === 2 ? e & r | e & n | r & n : e ^ r ^ n;
  }

  a(Sp, "ft");

  Mf.prototype._update = function (t) {
    for (var e = this._w, r = this._a | 0, n = this._b | 0, i = this._c | 0, h = this._d | 0, b = this._e | 0, _ = 0; _ < 16; ++_) e[_] = t.readInt32BE(_ * 4);

    for (; _ < 80; ++_) e[_] = e[_ - 3] ^ e[_ - 8] ^ e[_ - 14] ^ e[_ - 16];

    for (var x = 0; x < 80; ++x) {
      var M = ~~(x / 20),
          S = xp(r) + Sp(M, n, i, h) + b + e[x] + _p[M] | 0;
      b = h, h = i, i = Mp(n), n = r, r = S;
    }

    this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, this._d = h + this._d | 0, this._e = b + this._e | 0;
  };

  Mf.prototype._hash = function () {
    var t = yp.allocUnsafe(20);
    return t.writeInt32BE(this._a | 0, 0), t.writeInt32BE(this._b | 0, 4), t.writeInt32BE(this._c | 0, 8), t.writeInt32BE(this._d | 0, 12), t.writeInt32BE(this._e | 0, 16), t;
  };

  $o.exports = Mf;
});
var rh = D((u5, th) => {
  var Ep = Be(),
      eh = ci(),
      Ap = qe().Buffer,
      qp = [1518500249, 1859775393, -1894007588, -899497514],
      Bp = new Array(80);

  function Sf() {
    this.init(), this._w = Bp, eh.call(this, 64, 56);
  }

  a(Sf, "Sha1");
  Ep(Sf, eh);

  Sf.prototype.init = function () {
    return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
  };

  function Rp(t) {
    return t << 1 | t >>> 31;
  }

  a(Rp, "rotl1");

  function Ip(t) {
    return t << 5 | t >>> 27;
  }

  a(Ip, "rotl5");

  function kp(t) {
    return t << 30 | t >>> 2;
  }

  a(kp, "rotl30");

  function Dp(t, e, r, n) {
    return t === 0 ? e & r | ~e & n : t === 2 ? e & r | e & n | r & n : e ^ r ^ n;
  }

  a(Dp, "ft");

  Sf.prototype._update = function (t) {
    for (var e = this._w, r = this._a | 0, n = this._b | 0, i = this._c | 0, h = this._d | 0, b = this._e | 0, _ = 0; _ < 16; ++_) e[_] = t.readInt32BE(_ * 4);

    for (; _ < 80; ++_) e[_] = Rp(e[_ - 3] ^ e[_ - 8] ^ e[_ - 14] ^ e[_ - 16]);

    for (var x = 0; x < 80; ++x) {
      var M = ~~(x / 20),
          S = Ip(r) + Dp(M, n, i, h) + b + e[x] + qp[M] | 0;
      b = h, h = i, i = kp(n), n = r, r = S;
    }

    this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, this._d = h + this._d | 0, this._e = b + this._e | 0;
  };

  Sf.prototype._hash = function () {
    var t = Ap.allocUnsafe(20);
    return t.writeInt32BE(this._a | 0, 0), t.writeInt32BE(this._b | 0, 4), t.writeInt32BE(this._c | 0, 8), t.writeInt32BE(this._d | 0, 12), t.writeInt32BE(this._e | 0, 16), t;
  };

  th.exports = Sf;
});
var $a = D((d5, fh) => {
  var Pp = Be(),
      ih = ci(),
      Tp = qe().Buffer,
      Cp = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
      Np = new Array(64);

  function Ef() {
    this.init(), this._w = Np, ih.call(this, 64, 56);
  }

  a(Ef, "Sha256");
  Pp(Ef, ih);

  Ef.prototype.init = function () {
    return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this;
  };

  function Lp(t, e, r) {
    return r ^ t & (e ^ r);
  }

  a(Lp, "ch");

  function Op(t, e, r) {
    return t & e | r & (t | e);
  }

  a(Op, "maj");

  function zp(t) {
    return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10);
  }

  a(zp, "sigma0");

  function Up(t) {
    return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7);
  }

  a(Up, "sigma1");

  function Hp(t) {
    return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3;
  }

  a(Hp, "gamma0");

  function Fp(t) {
    return (t >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10;
  }

  a(Fp, "gamma1");

  Ef.prototype._update = function (t) {
    for (var e = this._w, r = this._a | 0, n = this._b | 0, i = this._c | 0, h = this._d | 0, b = this._e | 0, _ = this._f | 0, x = this._g | 0, M = this._h | 0, S = 0; S < 16; ++S) e[S] = t.readInt32BE(S * 4);

    for (; S < 64; ++S) e[S] = Fp(e[S - 2]) + e[S - 7] + Hp(e[S - 15]) + e[S - 16] | 0;

    for (var A = 0; A < 64; ++A) {
      var q = M + Up(b) + Lp(b, _, x) + Cp[A] + e[A] | 0,
          k = zp(r) + Op(r, n, i) | 0;
      M = x, x = _, _ = b, b = h + q | 0, h = i, i = n, n = r, r = q + k | 0;
    }

    this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, this._d = h + this._d | 0, this._e = b + this._e | 0, this._f = _ + this._f | 0, this._g = x + this._g | 0, this._h = M + this._h | 0;
  };

  Ef.prototype._hash = function () {
    var t = Tp.allocUnsafe(32);
    return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t;
  };

  fh.exports = Ef;
});
var ah = D((c5, nh) => {
  var Kp = Be(),
      jp = $a(),
      Wp = ci(),
      Vp = qe().Buffer,
      Zp = new Array(64);

  function yn() {
    this.init(), this._w = Zp, Wp.call(this, 64, 56);
  }

  a(yn, "Sha224");
  Kp(yn, jp);

  yn.prototype.init = function () {
    return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this;
  };

  yn.prototype._hash = function () {
    var t = Vp.allocUnsafe(28);
    return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t;
  };

  nh.exports = yn;
});
var Qa = D((l5, lh) => {
  var Gp = Be(),
      ch = ci(),
      Xp = qe().Buffer,
      sh = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
      Yp = new Array(160);

  function Af() {
    this.init(), this._w = Yp, ch.call(this, 128, 112);
  }

  a(Af, "Sha512");
  Gp(Af, ch);

  Af.prototype.init = function () {
    return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this;
  };

  function oh(t, e, r) {
    return r ^ t & (e ^ r);
  }

  a(oh, "Ch");

  function hh(t, e, r) {
    return t & e | r & (t | e);
  }

  a(hh, "maj");

  function uh(t, e) {
    return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25);
  }

  a(uh, "sigma0");

  function dh(t, e) {
    return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23);
  }

  a(dh, "sigma1");

  function Jp(t, e) {
    return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ t >>> 7;
  }

  a(Jp, "Gamma0");

  function $p(t, e) {
    return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25);
  }

  a($p, "Gamma0l");

  function Qp(t, e) {
    return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ t >>> 6;
  }

  a(Qp, "Gamma1");

  function e2(t, e) {
    return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ (t >>> 6 | e << 26);
  }

  a(e2, "Gamma1l");

  function We(t, e) {
    return t >>> 0 < e >>> 0 ? 1 : 0;
  }

  a(We, "getCarry");

  Af.prototype._update = function (t) {
    for (var e = this._w, r = this._ah | 0, n = this._bh | 0, i = this._ch | 0, h = this._dh | 0, b = this._eh | 0, _ = this._fh | 0, x = this._gh | 0, M = this._hh | 0, S = this._al | 0, A = this._bl | 0, q = this._cl | 0, k = this._dl | 0, P = this._el | 0, N = this._fl | 0, ye = this._gl | 0, O = this._hl | 0, _e = 0; _e < 32; _e += 2) e[_e] = t.readInt32BE(_e * 4), e[_e + 1] = t.readInt32BE(_e * 4 + 4);

    for (; _e < 160; _e += 2) {
      var Ie = e[_e - 30],
          Me = e[_e - 15 * 2 + 1],
          De = Jp(Ie, Me),
          Se = $p(Me, Ie);
      Ie = e[_e - 2 * 2], Me = e[_e - 2 * 2 + 1];
      var Ne = Qp(Ie, Me),
          Ae = e2(Me, Ie),
          Le = e[_e - 7 * 2],
          E = e[_e - 7 * 2 + 1],
          p = e[_e - 16 * 2],
          w = e[_e - 16 * 2 + 1],
          l = Se + E | 0,
          f = De + Le + We(l, Se) | 0;
      l = l + Ae | 0, f = f + Ne + We(l, Ae) | 0, l = l + w | 0, f = f + p + We(l, w) | 0, e[_e] = f, e[_e + 1] = l;
    }

    for (var s = 0; s < 160; s += 2) {
      f = e[s], l = e[s + 1];
      var d = hh(r, n, i),
          v = hh(S, A, q),
          c = uh(r, S),
          u = uh(S, r),
          m = dh(b, P),
          g = dh(P, b),
          o = sh[s],
          y = sh[s + 1],
          B = oh(b, _, x),
          I = oh(P, N, ye),
          R = O + g | 0,
          T = M + m + We(R, O) | 0;
      R = R + I | 0, T = T + B + We(R, I) | 0, R = R + y | 0, T = T + o + We(R, y) | 0, R = R + l | 0, T = T + f + We(R, l) | 0;
      var C = u + v | 0,
          L = c + d + We(C, u) | 0;
      M = x, O = ye, x = _, ye = N, _ = b, N = P, P = k + R | 0, b = h + T + We(P, k) | 0, h = i, k = q, i = n, q = A, n = r, A = S, S = R + C | 0, r = T + L + We(S, R) | 0;
    }

    this._al = this._al + S | 0, this._bl = this._bl + A | 0, this._cl = this._cl + q | 0, this._dl = this._dl + k | 0, this._el = this._el + P | 0, this._fl = this._fl + N | 0, this._gl = this._gl + ye | 0, this._hl = this._hl + O | 0, this._ah = this._ah + r + We(this._al, S) | 0, this._bh = this._bh + n + We(this._bl, A) | 0, this._ch = this._ch + i + We(this._cl, q) | 0, this._dh = this._dh + h + We(this._dl, k) | 0, this._eh = this._eh + b + We(this._el, P) | 0, this._fh = this._fh + _ + We(this._fl, N) | 0, this._gh = this._gh + x + We(this._gl, ye) | 0, this._hh = this._hh + M + We(this._hl, O) | 0;
  };

  Af.prototype._hash = function () {
    var t = Xp.allocUnsafe(64);

    function e(r, n, i) {
      t.writeInt32BE(r, i), t.writeInt32BE(n, i + 4);
    }

    return a(e, "writeInt64BE"), e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), e(this._gh, this._gl, 48), e(this._hh, this._hl, 56), t;
  };

  lh.exports = Af;
});
var ph = D((v5, vh) => {
  var t2 = Be(),
      r2 = Qa(),
      i2 = ci(),
      f2 = qe().Buffer,
      n2 = new Array(160);

  function _n() {
    this.init(), this._w = n2, i2.call(this, 128, 112);
  }

  a(_n, "Sha384");
  t2(_n, r2);

  _n.prototype.init = function () {
    return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this;
  };

  _n.prototype._hash = function () {
    var t = f2.allocUnsafe(48);

    function e(r, n, i) {
      t.writeInt32BE(r, i), t.writeInt32BE(n, i + 4);
    }

    return a(e, "writeInt64BE"), e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), t;
  };

  vh.exports = _n;
});
var wn = D((vr, bh) => {
  var vr = bh.exports = a(function (e) {
    e = e.toLowerCase();
    var r = vr[e];
    if (!r) throw new Error(e + " is not supported (we accept pull requests)");
    return new r();
  }, "SHA");
  vr.sha = Qo();
  vr.sha1 = rh();
  vr.sha224 = ah();
  vr.sha256 = $a();
  vr.sha384 = ph();
  vr.sha512 = Qa();
});
var pr = D((p5, yh) => {
  var mh = qe().Buffer,
      gh = __stream$.Transform,
      a2 = __string_decoder$.StringDecoder,
      s2 = Be();

  function Kt(t) {
    gh.call(this), this.hashMode = typeof t == "string", this.hashMode ? this[t] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null;
  }

  a(Kt, "CipherBase");
  s2(Kt, gh);

  Kt.prototype.update = function (t, e, r) {
    typeof t == "string" && (t = mh.from(t, e));

    var n = this._update(t);

    return this.hashMode ? this : (r && (n = this._toString(n, r)), n);
  };

  Kt.prototype.setAutoPadding = function () {};

  Kt.prototype.getAuthTag = function () {
    throw new Error("trying to get auth tag in unsupported state");
  };

  Kt.prototype.setAuthTag = function () {
    throw new Error("trying to set auth tag in unsupported state");
  };

  Kt.prototype.setAAD = function () {
    throw new Error("trying to set aad in unsupported state");
  };

  Kt.prototype._transform = function (t, e, r) {
    var n;

    try {
      this.hashMode ? this._update(t) : this.push(this._update(t));
    } catch (i) {
      n = i;
    } finally {
      r(n);
    }
  };

  Kt.prototype._flush = function (t) {
    var e;

    try {
      this.push(this.__final());
    } catch (r) {
      e = r;
    }

    t(e);
  };

  Kt.prototype._finalOrDigest = function (t) {
    var e = this.__final() || mh.alloc(0);
    return t && (e = this._toString(e, t, !0)), e;
  };

  Kt.prototype._toString = function (t, e, r) {
    if (this._decoder || (this._decoder = new a2(e), this._encoding = e), this._encoding !== e) throw new Error("can't switch encodings");

    var n = this._decoder.write(t);

    return r && (n += this._decoder.end()), n;
  };

  yh.exports = Kt;
});
var Li = D((b5, wh) => {
  "use strict";

  var o2 = Be(),
      h2 = pn(),
      u2 = mn(),
      d2 = wn(),
      _h = pr();

  function xn(t) {
    _h.call(this, "digest"), this._hash = t;
  }

  a(xn, "Hash");
  o2(xn, _h);

  xn.prototype._update = function (t) {
    this._hash.update(t);
  };

  xn.prototype._final = function () {
    return this._hash.digest();
  };

  wh.exports = a(function (e) {
    return e = e.toLowerCase(), e === "md5" ? new h2() : e === "rmd160" || e === "ripemd160" ? new u2() : new xn(d2(e));
  }, "createHash");
});
var Sh = D((m5, Mh) => {
  "use strict";

  var c2 = Be(),
      li = qe().Buffer,
      xh = pr(),
      l2 = li.alloc(128),
      Oi = 64;

  function Mn(t, e) {
    xh.call(this, "digest"), typeof e == "string" && (e = li.from(e)), this._alg = t, this._key = e, e.length > Oi ? e = t(e) : e.length < Oi && (e = li.concat([e, l2], Oi));

    for (var r = this._ipad = li.allocUnsafe(Oi), n = this._opad = li.allocUnsafe(Oi), i = 0; i < Oi; i++) r[i] = e[i] ^ 54, n[i] = e[i] ^ 92;

    this._hash = [r];
  }

  a(Mn, "Hmac");
  c2(Mn, xh);

  Mn.prototype._update = function (t) {
    this._hash.push(t);
  };

  Mn.prototype._final = function () {
    var t = this._alg(li.concat(this._hash));

    return this._alg(li.concat([this._opad, t]));
  };

  Mh.exports = Mn;
});
var e0 = D((g5, Eh) => {
  var v2 = pn();

  Eh.exports = function (t) {
    return new v2().update(t).digest();
  };
});
var i0 = D((y5, qh) => {
  "use strict";

  var p2 = Be(),
      b2 = Sh(),
      Ah = pr(),
      qf = qe().Buffer,
      m2 = e0(),
      t0 = mn(),
      r0 = wn(),
      g2 = qf.alloc(128);

  function Bf(t, e) {
    Ah.call(this, "digest"), typeof e == "string" && (e = qf.from(e));
    var r = t === "sha512" || t === "sha384" ? 128 : 64;

    if (this._alg = t, this._key = e, e.length > r) {
      var n = t === "rmd160" ? new t0() : r0(t);
      e = n.update(e).digest();
    } else e.length < r && (e = qf.concat([e, g2], r));

    for (var i = this._ipad = qf.allocUnsafe(r), h = this._opad = qf.allocUnsafe(r), b = 0; b < r; b++) i[b] = e[b] ^ 54, h[b] = e[b] ^ 92;

    this._hash = t === "rmd160" ? new t0() : r0(t), this._hash.update(i);
  }

  a(Bf, "Hmac");
  p2(Bf, Ah);

  Bf.prototype._update = function (t) {
    this._hash.update(t);
  };

  Bf.prototype._final = function () {
    var t = this._hash.digest(),
        e = this._alg === "rmd160" ? new t0() : r0(this._alg);

    return e.update(this._opad).update(t).digest();
  };

  qh.exports = a(function (e, r) {
    return e = e.toLowerCase(), e === "rmd160" || e === "ripemd160" ? new Bf("rmd160", r) : e === "md5" ? new b2(m2, r) : new Bf(e, r);
  }, "createHmac");
});
var f0 = D((_5, y2) => {
  y2.exports = {
    sha224WithRSAEncryption: {
      sign: "rsa",
      hash: "sha224",
      id: "302d300d06096086480165030402040500041c"
    },
    "RSA-SHA224": {
      sign: "ecdsa/rsa",
      hash: "sha224",
      id: "302d300d06096086480165030402040500041c"
    },
    sha256WithRSAEncryption: {
      sign: "rsa",
      hash: "sha256",
      id: "3031300d060960864801650304020105000420"
    },
    "RSA-SHA256": {
      sign: "ecdsa/rsa",
      hash: "sha256",
      id: "3031300d060960864801650304020105000420"
    },
    sha384WithRSAEncryption: {
      sign: "rsa",
      hash: "sha384",
      id: "3041300d060960864801650304020205000430"
    },
    "RSA-SHA384": {
      sign: "ecdsa/rsa",
      hash: "sha384",
      id: "3041300d060960864801650304020205000430"
    },
    sha512WithRSAEncryption: {
      sign: "rsa",
      hash: "sha512",
      id: "3051300d060960864801650304020305000440"
    },
    "RSA-SHA512": {
      sign: "ecdsa/rsa",
      hash: "sha512",
      id: "3051300d060960864801650304020305000440"
    },
    "RSA-SHA1": {
      sign: "rsa",
      hash: "sha1",
      id: "3021300906052b0e03021a05000414"
    },
    "ecdsa-with-SHA1": {
      sign: "ecdsa",
      hash: "sha1",
      id: ""
    },
    sha256: {
      sign: "ecdsa",
      hash: "sha256",
      id: ""
    },
    sha224: {
      sign: "ecdsa",
      hash: "sha224",
      id: ""
    },
    sha384: {
      sign: "ecdsa",
      hash: "sha384",
      id: ""
    },
    sha512: {
      sign: "ecdsa",
      hash: "sha512",
      id: ""
    },
    "DSA-SHA": {
      sign: "dsa",
      hash: "sha1",
      id: ""
    },
    "DSA-SHA1": {
      sign: "dsa",
      hash: "sha1",
      id: ""
    },
    DSA: {
      sign: "dsa",
      hash: "sha1",
      id: ""
    },
    "DSA-WITH-SHA224": {
      sign: "dsa",
      hash: "sha224",
      id: ""
    },
    "DSA-SHA224": {
      sign: "dsa",
      hash: "sha224",
      id: ""
    },
    "DSA-WITH-SHA256": {
      sign: "dsa",
      hash: "sha256",
      id: ""
    },
    "DSA-SHA256": {
      sign: "dsa",
      hash: "sha256",
      id: ""
    },
    "DSA-WITH-SHA384": {
      sign: "dsa",
      hash: "sha384",
      id: ""
    },
    "DSA-SHA384": {
      sign: "dsa",
      hash: "sha384",
      id: ""
    },
    "DSA-WITH-SHA512": {
      sign: "dsa",
      hash: "sha512",
      id: ""
    },
    "DSA-SHA512": {
      sign: "dsa",
      hash: "sha512",
      id: ""
    },
    "DSA-RIPEMD160": {
      sign: "dsa",
      hash: "rmd160",
      id: ""
    },
    ripemd160WithRSA: {
      sign: "rsa",
      hash: "rmd160",
      id: "3021300906052b2403020105000414"
    },
    "RSA-RIPEMD160": {
      sign: "rsa",
      hash: "rmd160",
      id: "3021300906052b2403020105000414"
    },
    md5WithRSAEncryption: {
      sign: "rsa",
      hash: "md5",
      id: "3020300c06082a864886f70d020505000410"
    },
    "RSA-MD5": {
      sign: "rsa",
      hash: "md5",
      id: "3020300c06082a864886f70d020505000410"
    }
  };
});
var Rh = D((w5, Bh) => {
  Bh.exports = f0();
});
var n0 = D((x5, Ih) => {
  var _2 = Math.pow(2, 30) - 1;

  Ih.exports = function (t, e) {
    if (typeof t != "number") throw new TypeError("Iterations not a number");
    if (t < 0) throw new TypeError("Bad iterations");
    if (typeof e != "number") throw new TypeError("Key length not a number");
    if (e < 0 || e > _2 || e !== e) throw new TypeError("Bad key length");
  };
});
var a0 = D((M5, Dh) => {
  var Sn;
  __Process$ && __Process$.browser ? Sn = "utf-8" : __Process$ && __Process$.version ? (kh = parseInt(__Process$.version.split(".")[0].slice(1), 10), Sn = kh >= 6 ? "utf-8" : "binary") : Sn = "utf-8";
  var kh;
  Dh.exports = Sn;
});
var o0 = D((S5, Ph) => {
  var s0 = qe().Buffer;

  Ph.exports = function (t, e, r) {
    if (s0.isBuffer(t)) return t;
    if (typeof t == "string") return s0.from(t, e);
    if (ArrayBuffer.isView(t)) return s0.from(t.buffer);
    throw new TypeError(r + " must be a string, a Buffer, a typed array or a DataView");
  };
});
var h0 = D((E5, Lh) => {
  var w2 = e0(),
      x2 = mn(),
      M2 = wn(),
      vi = qe().Buffer,
      S2 = n0(),
      Th = a0(),
      Ch = o0(),
      E2 = vi.alloc(128),
      En = {
    md5: 16,
    sha1: 20,
    sha224: 28,
    sha256: 32,
    sha384: 48,
    sha512: 64,
    rmd160: 20,
    ripemd160: 20
  };

  function Nh(t, e, r) {
    var n = A2(t),
        i = t === "sha512" || t === "sha384" ? 128 : 64;
    e.length > i ? e = n(e) : e.length < i && (e = vi.concat([e, E2], i));

    for (var h = vi.allocUnsafe(i + En[t]), b = vi.allocUnsafe(i + En[t]), _ = 0; _ < i; _++) h[_] = e[_] ^ 54, b[_] = e[_] ^ 92;

    var x = vi.allocUnsafe(i + r + 4);
    h.copy(x, 0, 0, i), this.ipad1 = x, this.ipad2 = h, this.opad = b, this.alg = t, this.blocksize = i, this.hash = n, this.size = En[t];
  }

  a(Nh, "Hmac");

  Nh.prototype.run = function (t, e) {
    t.copy(e, this.blocksize);
    var r = this.hash(e);
    return r.copy(this.opad, this.blocksize), this.hash(this.opad);
  };

  function A2(t) {
    function e(n) {
      return M2(t).update(n).digest();
    }

    a(e, "shaFunc");

    function r(n) {
      return new x2().update(n).digest();
    }

    return a(r, "rmd160Func"), t === "rmd160" || t === "ripemd160" ? r : t === "md5" ? w2 : e;
  }

  a(A2, "getDigest");

  function q2(t, e, r, n, i) {
    S2(r, n), t = Ch(t, Th, "Password"), e = Ch(e, Th, "Salt"), i = i || "sha1";

    var h = new Nh(i, t, e.length),
        b = vi.allocUnsafe(n),
        _ = vi.allocUnsafe(e.length + 4);

    e.copy(_, 0, 0, e.length);

    for (var x = 0, M = En[i], S = Math.ceil(n / M), A = 1; A <= S; A++) {
      _.writeUInt32BE(A, e.length);

      for (var q = h.run(_, h.ipad1), k = q, P = 1; P < r; P++) {
        k = h.run(k, h.ipad2);

        for (var N = 0; N < M; N++) q[N] ^= k[N];
      }

      q.copy(b, x), x += M;
    }

    return b;
  }

  a(q2, "pbkdf2");
  Lh.exports = q2;
});
var jh = D((A5, Kh) => {
  var Hh = qe().Buffer,
      B2 = n0(),
      Oh = a0(),
      zh = h0(),
      Uh = o0(),
      An,
      Rf = __global$.crypto && __global$.crypto.subtle,
      R2 = {
    sha: "SHA-1",
    "sha-1": "SHA-1",
    sha1: "SHA-1",
    sha256: "SHA-256",
    "sha-256": "SHA-256",
    sha384: "SHA-384",
    "sha-384": "SHA-384",
    "sha-512": "SHA-512",
    sha512: "SHA-512"
  },
      u0 = [];

  function I2(t) {
    if (__Process$ && !__Process$.browser || !Rf || !Rf.importKey || !Rf.deriveBits) return Promise.resolve(!1);
    if (u0[t] !== void 0) return u0[t];
    An = An || Hh.alloc(8);
    var e = Fh(An, An, 10, 128, t).then(function () {
      return !0;
    }).catch(function () {
      return !1;
    });
    return u0[t] = e, e;
  }

  a(I2, "checkNative");
  var pi;

  function d0() {
    return pi || (__Process$ && __Process$.nextTick ? pi = __Process$.nextTick : __global$.queueMicrotask ? pi = __global$.queueMicrotask : __setImmediate$ ? pi = __setImmediate$ : pi = __global$.setTimeout, pi);
  }

  a(d0, "getNextTick");

  function Fh(t, e, r, n, i) {
    return Rf.importKey("raw", t, {
      name: "PBKDF2"
    }, !1, ["deriveBits"]).then(function (h) {
      return Rf.deriveBits({
        name: "PBKDF2",
        salt: e,
        iterations: r,
        hash: {
          name: i
        }
      }, h, n << 3);
    }).then(function (h) {
      return Hh.from(h);
    });
  }

  a(Fh, "browserPbkdf2");

  function k2(t, e) {
    t.then(function (r) {
      d0()(function () {
        e(null, r);
      });
    }, function (r) {
      d0()(function () {
        e(r);
      });
    });
  }

  a(k2, "resolvePromise");

  Kh.exports = function (t, e, r, n, i, h) {
    typeof i == "function" && (h = i, i = void 0), i = i || "sha1";
    var b = R2[i.toLowerCase()];

    if (!b || typeof __global$.Promise != "function") {
      d0()(function () {
        var _;

        try {
          _ = zh(t, e, r, n, i);
        } catch (x) {
          return h(x);
        }

        h(null, _);
      });
      return;
    }

    if (B2(r, n), t = Uh(t, Oh, "Password"), e = Uh(e, Oh, "Salt"), typeof h != "function") throw new Error("No callback provided to pbkdf2");
    k2(I2(b).then(function (_) {
      return _ ? Fh(t, e, r, n, b) : zh(t, e, r, n, i);
    }), h);
  };
});
var l0 = D(c0 => {
  c0.pbkdf2 = jh();
  c0.pbkdf2Sync = h0();
});
var v0 = D(pt => {
  "use strict";

  pt.readUInt32BE = a(function (e, r) {
    var n = e[0 + r] << 24 | e[1 + r] << 16 | e[2 + r] << 8 | e[3 + r];
    return n >>> 0;
  }, "readUInt32BE");
  pt.writeUInt32BE = a(function (e, r, n) {
    e[0 + n] = r >>> 24, e[1 + n] = r >>> 16 & 255, e[2 + n] = r >>> 8 & 255, e[3 + n] = r & 255;
  }, "writeUInt32BE");
  pt.ip = a(function (e, r, n, i) {
    for (var h = 0, b = 0, _ = 6; _ >= 0; _ -= 2) {
      for (var x = 0; x <= 24; x += 8) h <<= 1, h |= r >>> x + _ & 1;

      for (var x = 0; x <= 24; x += 8) h <<= 1, h |= e >>> x + _ & 1;
    }

    for (var _ = 6; _ >= 0; _ -= 2) {
      for (var x = 1; x <= 25; x += 8) b <<= 1, b |= r >>> x + _ & 1;

      for (var x = 1; x <= 25; x += 8) b <<= 1, b |= e >>> x + _ & 1;
    }

    n[i + 0] = h >>> 0, n[i + 1] = b >>> 0;
  }, "ip");
  pt.rip = a(function (e, r, n, i) {
    for (var h = 0, b = 0, _ = 0; _ < 4; _++) for (var x = 24; x >= 0; x -= 8) h <<= 1, h |= r >>> x + _ & 1, h <<= 1, h |= e >>> x + _ & 1;

    for (var _ = 4; _ < 8; _++) for (var x = 24; x >= 0; x -= 8) b <<= 1, b |= r >>> x + _ & 1, b <<= 1, b |= e >>> x + _ & 1;

    n[i + 0] = h >>> 0, n[i + 1] = b >>> 0;
  }, "rip");
  pt.pc1 = a(function (e, r, n, i) {
    for (var h = 0, b = 0, _ = 7; _ >= 5; _--) {
      for (var x = 0; x <= 24; x += 8) h <<= 1, h |= r >> x + _ & 1;

      for (var x = 0; x <= 24; x += 8) h <<= 1, h |= e >> x + _ & 1;
    }

    for (var x = 0; x <= 24; x += 8) h <<= 1, h |= r >> x + _ & 1;

    for (var _ = 1; _ <= 3; _++) {
      for (var x = 0; x <= 24; x += 8) b <<= 1, b |= r >> x + _ & 1;

      for (var x = 0; x <= 24; x += 8) b <<= 1, b |= e >> x + _ & 1;
    }

    for (var x = 0; x <= 24; x += 8) b <<= 1, b |= e >> x + _ & 1;

    n[i + 0] = h >>> 0, n[i + 1] = b >>> 0;
  }, "pc1");
  pt.r28shl = a(function (e, r) {
    return e << r & 268435455 | e >>> 28 - r;
  }, "r28shl");
  var qn = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
  pt.pc2 = a(function (e, r, n, i) {
    for (var h = 0, b = 0, _ = qn.length >>> 1, x = 0; x < _; x++) h <<= 1, h |= e >>> qn[x] & 1;

    for (var x = _; x < qn.length; x++) b <<= 1, b |= r >>> qn[x] & 1;

    n[i + 0] = h >>> 0, n[i + 1] = b >>> 0;
  }, "pc2");
  pt.expand = a(function (e, r, n) {
    var i = 0,
        h = 0;
    i = (e & 1) << 5 | e >>> 27;

    for (var b = 23; b >= 15; b -= 4) i <<= 6, i |= e >>> b & 63;

    for (var b = 11; b >= 3; b -= 4) h |= e >>> b & 63, h <<= 6;

    h |= (e & 31) << 1 | e >>> 31, r[n + 0] = i >>> 0, r[n + 1] = h >>> 0;
  }, "expand");
  var Wh = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
  pt.substitute = a(function (e, r) {
    for (var n = 0, i = 0; i < 4; i++) {
      var h = e >>> 18 - i * 6 & 63,
          b = Wh[i * 64 + h];
      n <<= 4, n |= b;
    }

    for (var i = 0; i < 4; i++) {
      var h = r >>> 18 - i * 6 & 63,
          b = Wh[4 * 64 + i * 64 + h];
      n <<= 4, n |= b;
    }

    return n >>> 0;
  }, "substitute");
  var Vh = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
  pt.permute = a(function (e) {
    for (var r = 0, n = 0; n < Vh.length; n++) r <<= 1, r |= e >>> Vh[n] & 1;

    return r >>> 0;
  }, "permute");
  pt.padSplit = a(function (e, r, n) {
    for (var i = e.toString(2); i.length < r;) i = "0" + i;

    for (var h = [], b = 0; b < r; b += n) h.push(i.slice(b, b + n));

    return h.join(" ");
  }, "padSplit");
});
var ht = D((R5, Gh) => {
  Gh.exports = Zh;

  function Zh(t, e) {
    if (!t) throw new Error(e || "Assertion failed");
  }

  a(Zh, "assert");
  Zh.equal = a(function (e, r, n) {
    if (e != r) throw new Error(n || "Assertion failed: " + e + " != " + r);
  }, "assertEqual");
});
var Bn = D((I5, Xh) => {
  "use strict";

  var D2 = ht();

  function bt(t) {
    this.options = t, this.type = this.options.type, this.blockSize = 8, this._init(), this.buffer = new Array(this.blockSize), this.bufferOff = 0;
  }

  a(bt, "Cipher");
  Xh.exports = bt;
  bt.prototype._init = a(function () {}, "_init");
  bt.prototype.update = a(function (e) {
    return e.length === 0 ? [] : this.type === "decrypt" ? this._updateDecrypt(e) : this._updateEncrypt(e);
  }, "update");
  bt.prototype._buffer = a(function (e, r) {
    for (var n = Math.min(this.buffer.length - this.bufferOff, e.length - r), i = 0; i < n; i++) this.buffer[this.bufferOff + i] = e[r + i];

    return this.bufferOff += n, n;
  }, "_buffer");
  bt.prototype._flushBuffer = a(function (e, r) {
    return this._update(this.buffer, 0, e, r), this.bufferOff = 0, this.blockSize;
  }, "_flushBuffer");
  bt.prototype._updateEncrypt = a(function (e) {
    var r = 0,
        n = 0,
        i = (this.bufferOff + e.length) / this.blockSize | 0,
        h = new Array(i * this.blockSize);
    this.bufferOff !== 0 && (r += this._buffer(e, r), this.bufferOff === this.buffer.length && (n += this._flushBuffer(h, n)));

    for (var b = e.length - (e.length - r) % this.blockSize; r < b; r += this.blockSize) this._update(e, r, h, n), n += this.blockSize;

    for (; r < e.length; r++, this.bufferOff++) this.buffer[this.bufferOff] = e[r];

    return h;
  }, "_updateEncrypt");
  bt.prototype._updateDecrypt = a(function (e) {
    for (var r = 0, n = 0, i = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1, h = new Array(i * this.blockSize); i > 0; i--) r += this._buffer(e, r), n += this._flushBuffer(h, n);

    return r += this._buffer(e, r), h;
  }, "_updateDecrypt");
  bt.prototype.final = a(function (e) {
    var r;
    e && (r = this.update(e));
    var n;
    return this.type === "encrypt" ? n = this._finalEncrypt() : n = this._finalDecrypt(), r ? r.concat(n) : n;
  }, "final");
  bt.prototype._pad = a(function (e, r) {
    if (r === 0) return !1;

    for (; r < e.length;) e[r++] = 0;

    return !0;
  }, "_pad");
  bt.prototype._finalEncrypt = a(function () {
    if (!this._pad(this.buffer, this.bufferOff)) return [];
    var e = new Array(this.blockSize);
    return this._update(this.buffer, 0, e, 0), e;
  }, "_finalEncrypt");
  bt.prototype._unpad = a(function (e) {
    return e;
  }, "_unpad");
  bt.prototype._finalDecrypt = a(function () {
    D2.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
    var e = new Array(this.blockSize);
    return this._flushBuffer(e, 0), this._unpad(e);
  }, "_finalDecrypt");
});
var p0 = D((k5, $h) => {
  "use strict";

  var Yh = ht(),
      P2 = Be(),
      Fe = v0(),
      Jh = Bn();

  function T2() {
    this.tmp = new Array(2), this.keys = null;
  }

  a(T2, "DESState");

  function ir(t) {
    Jh.call(this, t);
    var e = new T2();
    this._desState = e, this.deriveKeys(e, t.key);
  }

  a(ir, "DES");
  P2(ir, Jh);
  $h.exports = ir;
  ir.create = a(function (e) {
    return new ir(e);
  }, "create");
  var C2 = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
  ir.prototype.deriveKeys = a(function (e, r) {
    e.keys = new Array(16 * 2), Yh.equal(r.length, this.blockSize, "Invalid key length");
    var n = Fe.readUInt32BE(r, 0),
        i = Fe.readUInt32BE(r, 4);
    Fe.pc1(n, i, e.tmp, 0), n = e.tmp[0], i = e.tmp[1];

    for (var h = 0; h < e.keys.length; h += 2) {
      var b = C2[h >>> 1];
      n = Fe.r28shl(n, b), i = Fe.r28shl(i, b), Fe.pc2(n, i, e.keys, h);
    }
  }, "deriveKeys");
  ir.prototype._update = a(function (e, r, n, i) {
    var h = this._desState,
        b = Fe.readUInt32BE(e, r),
        _ = Fe.readUInt32BE(e, r + 4);

    Fe.ip(b, _, h.tmp, 0), b = h.tmp[0], _ = h.tmp[1], this.type === "encrypt" ? this._encrypt(h, b, _, h.tmp, 0) : this._decrypt(h, b, _, h.tmp, 0), b = h.tmp[0], _ = h.tmp[1], Fe.writeUInt32BE(n, b, i), Fe.writeUInt32BE(n, _, i + 4);
  }, "_update");
  ir.prototype._pad = a(function (e, r) {
    for (var n = e.length - r, i = r; i < e.length; i++) e[i] = n;

    return !0;
  }, "_pad");
  ir.prototype._unpad = a(function (e) {
    for (var r = e[e.length - 1], n = e.length - r; n < e.length; n++) Yh.equal(e[n], r);

    return e.slice(0, e.length - r);
  }, "_unpad");
  ir.prototype._encrypt = a(function (e, r, n, i, h) {
    for (var b = r, _ = n, x = 0; x < e.keys.length; x += 2) {
      var M = e.keys[x],
          S = e.keys[x + 1];
      Fe.expand(_, e.tmp, 0), M ^= e.tmp[0], S ^= e.tmp[1];
      var A = Fe.substitute(M, S),
          q = Fe.permute(A),
          k = _;
      _ = (b ^ q) >>> 0, b = k;
    }

    Fe.rip(_, b, i, h);
  }, "_encrypt");
  ir.prototype._decrypt = a(function (e, r, n, i, h) {
    for (var b = n, _ = r, x = e.keys.length - 2; x >= 0; x -= 2) {
      var M = e.keys[x],
          S = e.keys[x + 1];
      Fe.expand(b, e.tmp, 0), M ^= e.tmp[0], S ^= e.tmp[1];
      var A = Fe.substitute(M, S),
          q = Fe.permute(A),
          k = b;
      b = (_ ^ q) >>> 0, _ = k;
    }

    Fe.rip(b, _, i, h);
  }, "_decrypt");
});
var eu = D(Qh => {
  "use strict";

  var N2 = ht(),
      L2 = Be(),
      Rn = {};

  function O2(t) {
    N2.equal(t.length, 8, "Invalid IV length"), this.iv = new Array(8);

    for (var e = 0; e < this.iv.length; e++) this.iv[e] = t[e];
  }

  a(O2, "CBCState");

  function z2(t) {
    function e(h) {
      t.call(this, h), this._cbcInit();
    }

    a(e, "CBC"), L2(e, t);

    for (var r = Object.keys(Rn), n = 0; n < r.length; n++) {
      var i = r[n];
      e.prototype[i] = Rn[i];
    }

    return e.create = a(function (b) {
      return new e(b);
    }, "create"), e;
  }

  a(z2, "instantiate");
  Qh.instantiate = z2;
  Rn._cbcInit = a(function () {
    var e = new O2(this.options.iv);
    this._cbcState = e;
  }, "_cbcInit");
  Rn._update = a(function (e, r, n, i) {
    var h = this._cbcState,
        b = this.constructor.super_.prototype,
        _ = h.iv;

    if (this.type === "encrypt") {
      for (var x = 0; x < this.blockSize; x++) _[x] ^= e[r + x];

      b._update.call(this, _, 0, n, i);

      for (var x = 0; x < this.blockSize; x++) _[x] = n[i + x];
    } else {
      b._update.call(this, e, r, n, i);

      for (var x = 0; x < this.blockSize; x++) n[i + x] ^= _[x];

      for (var x = 0; x < this.blockSize; x++) _[x] = e[r + x];
    }
  }, "_update");
});
var iu = D((P5, ru) => {
  "use strict";

  var U2 = ht(),
      H2 = Be(),
      tu = Bn(),
      Zr = p0();

  function F2(t, e) {
    U2.equal(e.length, 24, "Invalid key length");
    var r = e.slice(0, 8),
        n = e.slice(8, 16),
        i = e.slice(16, 24);
    t === "encrypt" ? this.ciphers = [Zr.create({
      type: "encrypt",
      key: r
    }), Zr.create({
      type: "decrypt",
      key: n
    }), Zr.create({
      type: "encrypt",
      key: i
    })] : this.ciphers = [Zr.create({
      type: "decrypt",
      key: i
    }), Zr.create({
      type: "encrypt",
      key: n
    }), Zr.create({
      type: "decrypt",
      key: r
    })];
  }

  a(F2, "EDEState");

  function bi(t) {
    tu.call(this, t);
    var e = new F2(this.type, this.options.key);
    this._edeState = e;
  }

  a(bi, "EDE");
  H2(bi, tu);
  ru.exports = bi;
  bi.create = a(function (e) {
    return new bi(e);
  }, "create");
  bi.prototype._update = a(function (e, r, n, i) {
    var h = this._edeState;
    h.ciphers[0]._update(e, r, n, i), h.ciphers[1]._update(n, i, n, i), h.ciphers[2]._update(n, i, n, i);
  }, "_update");
  bi.prototype._pad = Zr.prototype._pad;
  bi.prototype._unpad = Zr.prototype._unpad;
});
var fu = D(zi => {
  "use strict";

  zi.utils = v0();
  zi.Cipher = Bn();
  zi.DES = p0();
  zi.CBC = eu();
  zi.EDE = iu();
});
var su = D((C5, au) => {
  var nu = pr(),
      br = fu(),
      K2 = Be(),
      mi = qe().Buffer,
      If = {
    "des-ede3-cbc": br.CBC.instantiate(br.EDE),
    "des-ede3": br.EDE,
    "des-ede-cbc": br.CBC.instantiate(br.EDE),
    "des-ede": br.EDE,
    "des-cbc": br.CBC.instantiate(br.DES),
    "des-ecb": br.DES
  };
  If.des = If["des-cbc"];
  If.des3 = If["des-ede3-cbc"];
  au.exports = In;
  K2(In, nu);

  function In(t) {
    nu.call(this);
    var e = t.mode.toLowerCase(),
        r = If[e],
        n;
    t.decrypt ? n = "decrypt" : n = "encrypt";
    var i = t.key;
    mi.isBuffer(i) || (i = mi.from(i)), (e === "des-ede" || e === "des-ede-cbc") && (i = mi.concat([i, i.slice(0, 8)]));
    var h = t.iv;
    mi.isBuffer(h) || (h = mi.from(h)), this._des = r.create({
      key: i,
      iv: h,
      type: n
    });
  }

  a(In, "DES");

  In.prototype._update = function (t) {
    return mi.from(this._des.update(t));
  };

  In.prototype._final = function () {
    return mi.from(this._des.final());
  };
});
var ou = D(b0 => {
  b0.encrypt = function (t, e) {
    return t._cipher.encryptBlock(e);
  };

  b0.decrypt = function (t, e) {
    return t._cipher.decryptBlock(e);
  };
});
var Ui = D((L5, hu) => {
  hu.exports = a(function (e, r) {
    for (var n = Math.min(e.length, r.length), i = new __Buffer$(n), h = 0; h < n; ++h) i[h] = e[h] ^ r[h];

    return i;
  }, "xor");
});
var du = D(m0 => {
  var uu = Ui();

  m0.encrypt = function (t, e) {
    var r = uu(e, t._prev);
    return t._prev = t._cipher.encryptBlock(r), t._prev;
  };

  m0.decrypt = function (t, e) {
    var r = t._prev;
    t._prev = e;

    var n = t._cipher.decryptBlock(e);

    return uu(n, r);
  };
});
var vu = D(lu => {
  var kf = qe().Buffer,
      j2 = Ui();

  function cu(t, e, r) {
    var n = e.length,
        i = j2(e, t._cache);
    return t._cache = t._cache.slice(n), t._prev = kf.concat([t._prev, r ? e : i]), i;
  }

  a(cu, "encryptStart");

  lu.encrypt = function (t, e, r) {
    for (var n = kf.allocUnsafe(0), i; e.length;) if (t._cache.length === 0 && (t._cache = t._cipher.encryptBlock(t._prev), t._prev = kf.allocUnsafe(0)), t._cache.length <= e.length) i = t._cache.length, n = kf.concat([n, cu(t, e.slice(0, i), r)]), e = e.slice(i);else {
      n = kf.concat([n, cu(t, e, r)]);
      break;
    }

    return n;
  };
});
var bu = D(pu => {
  var g0 = qe().Buffer;

  function W2(t, e, r) {
    var n = t._cipher.encryptBlock(t._prev),
        i = n[0] ^ e;

    return t._prev = g0.concat([t._prev.slice(1), g0.from([r ? e : i])]), i;
  }

  a(W2, "encryptByte");

  pu.encrypt = function (t, e, r) {
    for (var n = e.length, i = g0.allocUnsafe(n), h = -1; ++h < n;) i[h] = W2(t, e[h], r);

    return i;
  };
});
var gu = D(mu => {
  var kn = qe().Buffer;

  function V2(t, e, r) {
    for (var n, i = -1, h = 8, b = 0, _, x; ++i < h;) n = t._cipher.encryptBlock(t._prev), _ = e & 1 << 7 - i ? 128 : 0, x = n[0] ^ _, b += (x & 128) >> i % 8, t._prev = Z2(t._prev, r ? _ : x);

    return b;
  }

  a(V2, "encryptByte");

  function Z2(t, e) {
    var r = t.length,
        n = -1,
        i = kn.allocUnsafe(t.length);

    for (t = kn.concat([t, kn.from([e])]); ++n < r;) i[n] = t[n] << 1 | t[n + 1] >> 7;

    return i;
  }

  a(Z2, "shiftIn");

  mu.encrypt = function (t, e, r) {
    for (var n = e.length, i = kn.allocUnsafe(n), h = -1; ++h < n;) i[h] = V2(t, e[h], r);

    return i;
  };
});

var _u = D(yu => {
  var G2 = Ui();

  function X2(t) {
    return t._prev = t._cipher.encryptBlock(t._prev), t._prev;
  }

  a(X2, "getBlock");

  yu.encrypt = function (t, e) {
    for (; t._cache.length < e.length;) t._cache = __Buffer$.concat([t._cache, X2(t)]);

    var r = t._cache.slice(0, e.length);

    return t._cache = t._cache.slice(e.length), G2(e, r);
  };
});

var y0 = D((K5, wu) => {
  function Y2(t) {
    for (var e = t.length, r; e--;) if (r = t.readUInt8(e), r === 255) t.writeUInt8(0, e);else {
      r++, t.writeUInt8(r, e);
      break;
    }
  }

  a(Y2, "incr32");
  wu.exports = Y2;
});
var w0 = D(Mu => {
  var J2 = Ui(),
      xu = qe().Buffer,
      $2 = y0();

  function Q2(t) {
    var e = t._cipher.encryptBlockRaw(t._prev);

    return $2(t._prev), e;
  }

  a(Q2, "getBlock");
  var _0 = 16;

  Mu.encrypt = function (t, e) {
    var r = Math.ceil(e.length / _0),
        n = t._cache.length;
    t._cache = xu.concat([t._cache, xu.allocUnsafe(r * _0)]);

    for (var i = 0; i < r; i++) {
      var h = Q2(t),
          b = n + i * _0;
      t._cache.writeUInt32BE(h[0], b + 0), t._cache.writeUInt32BE(h[1], b + 4), t._cache.writeUInt32BE(h[2], b + 8), t._cache.writeUInt32BE(h[3], b + 12);
    }

    var _ = t._cache.slice(0, e.length);

    return t._cache = t._cache.slice(e.length), J2(e, _);
  };
});
var x0 = D((W5, eb) => {
  eb.exports = {
    "aes-128-ecb": {
      cipher: "AES",
      key: 128,
      iv: 0,
      mode: "ECB",
      type: "block"
    },
    "aes-192-ecb": {
      cipher: "AES",
      key: 192,
      iv: 0,
      mode: "ECB",
      type: "block"
    },
    "aes-256-ecb": {
      cipher: "AES",
      key: 256,
      iv: 0,
      mode: "ECB",
      type: "block"
    },
    "aes-128-cbc": {
      cipher: "AES",
      key: 128,
      iv: 16,
      mode: "CBC",
      type: "block"
    },
    "aes-192-cbc": {
      cipher: "AES",
      key: 192,
      iv: 16,
      mode: "CBC",
      type: "block"
    },
    "aes-256-cbc": {
      cipher: "AES",
      key: 256,
      iv: 16,
      mode: "CBC",
      type: "block"
    },
    aes128: {
      cipher: "AES",
      key: 128,
      iv: 16,
      mode: "CBC",
      type: "block"
    },
    aes192: {
      cipher: "AES",
      key: 192,
      iv: 16,
      mode: "CBC",
      type: "block"
    },
    aes256: {
      cipher: "AES",
      key: 256,
      iv: 16,
      mode: "CBC",
      type: "block"
    },
    "aes-128-cfb": {
      cipher: "AES",
      key: 128,
      iv: 16,
      mode: "CFB",
      type: "stream"
    },
    "aes-192-cfb": {
      cipher: "AES",
      key: 192,
      iv: 16,
      mode: "CFB",
      type: "stream"
    },
    "aes-256-cfb": {
      cipher: "AES",
      key: 256,
      iv: 16,
      mode: "CFB",
      type: "stream"
    },
    "aes-128-cfb8": {
      cipher: "AES",
      key: 128,
      iv: 16,
      mode: "CFB8",
      type: "stream"
    },
    "aes-192-cfb8": {
      cipher: "AES",
      key: 192,
      iv: 16,
      mode: "CFB8",
      type: "stream"
    },
    "aes-256-cfb8": {
      cipher: "AES",
      key: 256,
      iv: 16,
      mode: "CFB8",
      type: "stream"
    },
    "aes-128-cfb1": {
      cipher: "AES",
      key: 128,
      iv: 16,
      mode: "CFB1",
      type: "stream"
    },
    "aes-192-cfb1": {
      cipher: "AES",
      key: 192,
      iv: 16,
      mode: "CFB1",
      type: "stream"
    },
    "aes-256-cfb1": {
      cipher: "AES",
      key: 256,
      iv: 16,
      mode: "CFB1",
      type: "stream"
    },
    "aes-128-ofb": {
      cipher: "AES",
      key: 128,
      iv: 16,
      mode: "OFB",
      type: "stream"
    },
    "aes-192-ofb": {
      cipher: "AES",
      key: 192,
      iv: 16,
      mode: "OFB",
      type: "stream"
    },
    "aes-256-ofb": {
      cipher: "AES",
      key: 256,
      iv: 16,
      mode: "OFB",
      type: "stream"
    },
    "aes-128-ctr": {
      cipher: "AES",
      key: 128,
      iv: 16,
      mode: "CTR",
      type: "stream"
    },
    "aes-192-ctr": {
      cipher: "AES",
      key: 192,
      iv: 16,
      mode: "CTR",
      type: "stream"
    },
    "aes-256-ctr": {
      cipher: "AES",
      key: 256,
      iv: 16,
      mode: "CTR",
      type: "stream"
    },
    "aes-128-gcm": {
      cipher: "AES",
      key: 128,
      iv: 12,
      mode: "GCM",
      type: "auth"
    },
    "aes-192-gcm": {
      cipher: "AES",
      key: 192,
      iv: 12,
      mode: "GCM",
      type: "auth"
    },
    "aes-256-gcm": {
      cipher: "AES",
      key: 256,
      iv: 12,
      mode: "GCM",
      type: "auth"
    }
  };
});
var Pn = D((V5, Su) => {
  var tb = {
    ECB: ou(),
    CBC: du(),
    CFB: vu(),
    CFB8: bu(),
    CFB1: gu(),
    OFB: _u(),
    CTR: w0(),
    GCM: w0()
  },
      Dn = x0();

  for (M0 in Dn) Dn[M0].module = tb[Dn[M0].mode];

  var M0;
  Su.exports = Dn;
});
var Df = D((Z5, Au) => {
  var Tn = qe().Buffer;

  function E0(t) {
    Tn.isBuffer(t) || (t = Tn.from(t));

    for (var e = t.length / 4 | 0, r = new Array(e), n = 0; n < e; n++) r[n] = t.readUInt32BE(n * 4);

    return r;
  }

  a(E0, "asUInt32Array");

  function S0(t) {
    for (var e = 0; e < t.length; t++) t[e] = 0;
  }

  a(S0, "scrubVec");

  function Eu(t, e, r, n, i) {
    for (var h = r[0], b = r[1], _ = r[2], x = r[3], M = t[0] ^ e[0], S = t[1] ^ e[1], A = t[2] ^ e[2], q = t[3] ^ e[3], k, P, N, ye, O = 4, _e = 1; _e < i; _e++) k = h[M >>> 24] ^ b[S >>> 16 & 255] ^ _[A >>> 8 & 255] ^ x[q & 255] ^ e[O++], P = h[S >>> 24] ^ b[A >>> 16 & 255] ^ _[q >>> 8 & 255] ^ x[M & 255] ^ e[O++], N = h[A >>> 24] ^ b[q >>> 16 & 255] ^ _[M >>> 8 & 255] ^ x[S & 255] ^ e[O++], ye = h[q >>> 24] ^ b[M >>> 16 & 255] ^ _[S >>> 8 & 255] ^ x[A & 255] ^ e[O++], M = k, S = P, A = N, q = ye;

    return k = (n[M >>> 24] << 24 | n[S >>> 16 & 255] << 16 | n[A >>> 8 & 255] << 8 | n[q & 255]) ^ e[O++], P = (n[S >>> 24] << 24 | n[A >>> 16 & 255] << 16 | n[q >>> 8 & 255] << 8 | n[M & 255]) ^ e[O++], N = (n[A >>> 24] << 24 | n[q >>> 16 & 255] << 16 | n[M >>> 8 & 255] << 8 | n[S & 255]) ^ e[O++], ye = (n[q >>> 24] << 24 | n[M >>> 16 & 255] << 16 | n[S >>> 8 & 255] << 8 | n[A & 255]) ^ e[O++], k = k >>> 0, P = P >>> 0, N = N >>> 0, ye = ye >>> 0, [k, P, N, ye];
  }

  a(Eu, "cryptBlock");

  var rb = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
      He = function () {
    for (var t = new Array(256), e = 0; e < 256; e++) e < 128 ? t[e] = e << 1 : t[e] = e << 1 ^ 283;

    for (var r = [], n = [], i = [[], [], [], []], h = [[], [], [], []], b = 0, _ = 0, x = 0; x < 256; ++x) {
      var M = _ ^ _ << 1 ^ _ << 2 ^ _ << 3 ^ _ << 4;
      M = M >>> 8 ^ M & 255 ^ 99, r[b] = M, n[M] = b;
      var S = t[b],
          A = t[S],
          q = t[A],
          k = t[M] * 257 ^ M * 16843008;
      i[0][b] = k << 24 | k >>> 8, i[1][b] = k << 16 | k >>> 16, i[2][b] = k << 8 | k >>> 24, i[3][b] = k, k = q * 16843009 ^ A * 65537 ^ S * 257 ^ b * 16843008, h[0][M] = k << 24 | k >>> 8, h[1][M] = k << 16 | k >>> 16, h[2][M] = k << 8 | k >>> 24, h[3][M] = k, b === 0 ? b = _ = 1 : (b = S ^ t[t[t[q ^ S]]], _ ^= t[t[_]]);
    }

    return {
      SBOX: r,
      INV_SBOX: n,
      SUB_MIX: i,
      INV_SUB_MIX: h
    };
  }();

  function mt(t) {
    this._key = E0(t), this._reset();
  }

  a(mt, "AES");
  mt.blockSize = 4 * 4;
  mt.keySize = 256 / 8;
  mt.prototype.blockSize = mt.blockSize;
  mt.prototype.keySize = mt.keySize;

  mt.prototype._reset = function () {
    for (var t = this._key, e = t.length, r = e + 6, n = (r + 1) * 4, i = [], h = 0; h < e; h++) i[h] = t[h];

    for (h = e; h < n; h++) {
      var b = i[h - 1];
      h % e === 0 ? (b = b << 8 | b >>> 24, b = He.SBOX[b >>> 24] << 24 | He.SBOX[b >>> 16 & 255] << 16 | He.SBOX[b >>> 8 & 255] << 8 | He.SBOX[b & 255], b ^= rb[h / e | 0] << 24) : e > 6 && h % e === 4 && (b = He.SBOX[b >>> 24] << 24 | He.SBOX[b >>> 16 & 255] << 16 | He.SBOX[b >>> 8 & 255] << 8 | He.SBOX[b & 255]), i[h] = i[h - e] ^ b;
    }

    for (var _ = [], x = 0; x < n; x++) {
      var M = n - x,
          S = i[M - (x % 4 ? 0 : 4)];
      x < 4 || M <= 4 ? _[x] = S : _[x] = He.INV_SUB_MIX[0][He.SBOX[S >>> 24]] ^ He.INV_SUB_MIX[1][He.SBOX[S >>> 16 & 255]] ^ He.INV_SUB_MIX[2][He.SBOX[S >>> 8 & 255]] ^ He.INV_SUB_MIX[3][He.SBOX[S & 255]];
    }

    this._nRounds = r, this._keySchedule = i, this._invKeySchedule = _;
  };

  mt.prototype.encryptBlockRaw = function (t) {
    return t = E0(t), Eu(t, this._keySchedule, He.SUB_MIX, He.SBOX, this._nRounds);
  };

  mt.prototype.encryptBlock = function (t) {
    var e = this.encryptBlockRaw(t),
        r = Tn.allocUnsafe(16);
    return r.writeUInt32BE(e[0], 0), r.writeUInt32BE(e[1], 4), r.writeUInt32BE(e[2], 8), r.writeUInt32BE(e[3], 12), r;
  };

  mt.prototype.decryptBlock = function (t) {
    t = E0(t);
    var e = t[1];
    t[1] = t[3], t[3] = e;
    var r = Eu(t, this._invKeySchedule, He.INV_SUB_MIX, He.INV_SBOX, this._nRounds),
        n = Tn.allocUnsafe(16);
    return n.writeUInt32BE(r[0], 0), n.writeUInt32BE(r[3], 4), n.writeUInt32BE(r[2], 8), n.writeUInt32BE(r[1], 12), n;
  };

  mt.prototype.scrub = function () {
    S0(this._keySchedule), S0(this._invKeySchedule), S0(this._key);
  };

  Au.exports.AES = mt;
});
var Ru = D((G5, Bu) => {
  var Hi = qe().Buffer,
      ib = Hi.alloc(16, 0);

  function fb(t) {
    return [t.readUInt32BE(0), t.readUInt32BE(4), t.readUInt32BE(8), t.readUInt32BE(12)];
  }

  a(fb, "toArray");

  function qu(t) {
    var e = Hi.allocUnsafe(16);
    return e.writeUInt32BE(t[0] >>> 0, 0), e.writeUInt32BE(t[1] >>> 0, 4), e.writeUInt32BE(t[2] >>> 0, 8), e.writeUInt32BE(t[3] >>> 0, 12), e;
  }

  a(qu, "fromArray");

  function Pf(t) {
    this.h = t, this.state = Hi.alloc(16, 0), this.cache = Hi.allocUnsafe(0);
  }

  a(Pf, "GHASH");

  Pf.prototype.ghash = function (t) {
    for (var e = -1; ++e < t.length;) this.state[e] ^= t[e];

    this._multiply();
  };

  Pf.prototype._multiply = function () {
    for (var t = fb(this.h), e = [0, 0, 0, 0], r, n, i, h = -1; ++h < 128;) {
      for (n = (this.state[~~(h / 8)] & 1 << 7 - h % 8) !== 0, n && (e[0] ^= t[0], e[1] ^= t[1], e[2] ^= t[2], e[3] ^= t[3]), i = (t[3] & 1) !== 0, r = 3; r > 0; r--) t[r] = t[r] >>> 1 | (t[r - 1] & 1) << 31;

      t[0] = t[0] >>> 1, i && (t[0] = t[0] ^ 225 << 24);
    }

    this.state = qu(e);
  };

  Pf.prototype.update = function (t) {
    this.cache = Hi.concat([this.cache, t]);

    for (var e; this.cache.length >= 16;) e = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(e);
  };

  Pf.prototype.final = function (t, e) {
    return this.cache.length && this.ghash(Hi.concat([this.cache, ib], 16)), this.ghash(qu([0, t, 0, e])), this.state;
  };

  Bu.exports = Pf;
});
var A0 = D((X5, Du) => {
  var nb = Df(),
      nt = qe().Buffer,
      Iu = pr(),
      ab = Be(),
      ku = Ru(),
      sb = Ui(),
      ob = y0();

  function hb(t, e) {
    var r = 0;
    t.length !== e.length && r++;

    for (var n = Math.min(t.length, e.length), i = 0; i < n; ++i) r += t[i] ^ e[i];

    return r;
  }

  a(hb, "xorTest");

  function ub(t, e, r) {
    if (e.length === 12) return t._finID = nt.concat([e, nt.from([0, 0, 0, 1])]), nt.concat([e, nt.from([0, 0, 0, 2])]);
    var n = new ku(r),
        i = e.length,
        h = i % 16;
    n.update(e), h && (h = 16 - h, n.update(nt.alloc(h, 0))), n.update(nt.alloc(8, 0));

    var b = i * 8,
        _ = nt.alloc(8);

    _.writeUIntBE(b, 0, 8), n.update(_), t._finID = n.state;
    var x = nt.from(t._finID);
    return ob(x), x;
  }

  a(ub, "calcIv");

  function gi(t, e, r, n) {
    Iu.call(this);
    var i = nt.alloc(4, 0);
    this._cipher = new nb.AES(e);

    var h = this._cipher.encryptBlock(i);

    this._ghash = new ku(h), r = ub(this, r, h), this._prev = nt.from(r), this._cache = nt.allocUnsafe(0), this._secCache = nt.allocUnsafe(0), this._decrypt = n, this._alen = 0, this._len = 0, this._mode = t, this._authTag = null, this._called = !1;
  }

  a(gi, "StreamCipher");
  ab(gi, Iu);

  gi.prototype._update = function (t) {
    if (!this._called && this._alen) {
      var e = 16 - this._alen % 16;
      e < 16 && (e = nt.alloc(e, 0), this._ghash.update(e));
    }

    this._called = !0;

    var r = this._mode.encrypt(this, t);

    return this._decrypt ? this._ghash.update(t) : this._ghash.update(r), this._len += t.length, r;
  };

  gi.prototype._final = function () {
    if (this._decrypt && !this._authTag) throw new Error("Unsupported state or unable to authenticate data");
    var t = sb(this._ghash.final(this._alen * 8, this._len * 8), this._cipher.encryptBlock(this._finID));
    if (this._decrypt && hb(t, this._authTag)) throw new Error("Unsupported state or unable to authenticate data");
    this._authTag = t, this._cipher.scrub();
  };

  gi.prototype.getAuthTag = a(function () {
    if (this._decrypt || !nt.isBuffer(this._authTag)) throw new Error("Attempting to get auth tag in unsupported state");
    return this._authTag;
  }, "getAuthTag");
  gi.prototype.setAuthTag = a(function (e) {
    if (!this._decrypt) throw new Error("Attempting to set auth tag in unsupported state");
    this._authTag = e;
  }, "setAuthTag");
  gi.prototype.setAAD = a(function (e) {
    if (this._called) throw new Error("Attempting to set AAD in unsupported state");
    this._ghash.update(e), this._alen += e.length;
  }, "setAAD");
  Du.exports = gi;
});
var B0 = D((Y5, Tu) => {
  var db = Df(),
      q0 = qe().Buffer,
      Pu = pr(),
      cb = Be();

  function Cn(t, e, r, n) {
    Pu.call(this), this._cipher = new db.AES(e), this._prev = q0.from(r), this._cache = q0.allocUnsafe(0), this._secCache = q0.allocUnsafe(0), this._decrypt = n, this._mode = t;
  }

  a(Cn, "StreamCipher");
  cb(Cn, Pu);

  Cn.prototype._update = function (t) {
    return this._mode.encrypt(this, t, this._decrypt);
  };

  Cn.prototype._final = function () {
    this._cipher.scrub();
  };

  Tu.exports = Cn;
});
var Tf = D((J5, Cu) => {
  var yi = qe().Buffer,
      lb = pn();

  function vb(t, e, r, n) {
    if (yi.isBuffer(t) || (t = yi.from(t, "binary")), e && (yi.isBuffer(e) || (e = yi.from(e, "binary")), e.length !== 8)) throw new RangeError("salt should be Buffer with 8 byte length");

    for (var i = r / 8, h = yi.alloc(i), b = yi.alloc(n || 0), _ = yi.alloc(0); i > 0 || n > 0;) {
      var x = new lb();
      x.update(_), x.update(t), e && x.update(e), _ = x.digest();
      var M = 0;

      if (i > 0) {
        var S = h.length - i;
        M = Math.min(i, _.length), _.copy(h, S, 0, M), i -= M;
      }

      if (M < _.length && n > 0) {
        var A = b.length - n,
            q = Math.min(n, _.length - M);
        _.copy(b, A, M, M + q), n -= q;
      }
    }

    return _.fill(0), {
      key: h,
      iv: b
    };
  }

  a(vb, "EVP_BytesToKey");
  Cu.exports = vb;
});
var zu = D(R0 => {
  var Nu = Pn(),
      pb = A0(),
      mr = qe().Buffer,
      bb = B0(),
      Lu = pr(),
      mb = Df(),
      gb = Tf(),
      yb = Be();

  function Cf(t, e, r) {
    Lu.call(this), this._cache = new Nn(), this._cipher = new mb.AES(e), this._prev = mr.from(r), this._mode = t, this._autopadding = !0;
  }

  a(Cf, "Cipher");
  yb(Cf, Lu);

  Cf.prototype._update = function (t) {
    this._cache.add(t);

    for (var e, r, n = []; e = this._cache.get();) r = this._mode.encrypt(this, e), n.push(r);

    return mr.concat(n);
  };

  var _b = mr.alloc(16, 16);

  Cf.prototype._final = function () {
    var t = this._cache.flush();

    if (this._autopadding) return t = this._mode.encrypt(this, t), this._cipher.scrub(), t;
    if (!t.equals(_b)) throw this._cipher.scrub(), new Error("data not multiple of block length");
  };

  Cf.prototype.setAutoPadding = function (t) {
    return this._autopadding = !!t, this;
  };

  function Nn() {
    this.cache = mr.allocUnsafe(0);
  }

  a(Nn, "Splitter");

  Nn.prototype.add = function (t) {
    this.cache = mr.concat([this.cache, t]);
  };

  Nn.prototype.get = function () {
    if (this.cache.length > 15) {
      var t = this.cache.slice(0, 16);
      return this.cache = this.cache.slice(16), t;
    }

    return null;
  };

  Nn.prototype.flush = function () {
    for (var t = 16 - this.cache.length, e = mr.allocUnsafe(t), r = -1; ++r < t;) e.writeUInt8(t, r);

    return mr.concat([this.cache, e]);
  };

  function Ou(t, e, r) {
    var n = Nu[t.toLowerCase()];
    if (!n) throw new TypeError("invalid suite type");
    if (typeof e == "string" && (e = mr.from(e)), e.length !== n.key / 8) throw new TypeError("invalid key length " + e.length);
    if (typeof r == "string" && (r = mr.from(r)), n.mode !== "GCM" && r.length !== n.iv) throw new TypeError("invalid iv length " + r.length);
    return n.type === "stream" ? new bb(n.module, e, r) : n.type === "auth" ? new pb(n.module, e, r) : new Cf(n.module, e, r);
  }

  a(Ou, "createCipheriv");

  function wb(t, e) {
    var r = Nu[t.toLowerCase()];
    if (!r) throw new TypeError("invalid suite type");
    var n = gb(e, !1, r.key, r.iv);
    return Ou(t, n.key, n.iv);
  }

  a(wb, "createCipher");
  R0.createCipheriv = Ou;
  R0.createCipher = wb;
});
var Ku = D(I0 => {
  var xb = A0(),
      Fi = qe().Buffer,
      Uu = Pn(),
      Mb = B0(),
      Hu = pr(),
      Sb = Df(),
      Eb = Tf(),
      Ab = Be();

  function Nf(t, e, r) {
    Hu.call(this), this._cache = new Ln(), this._last = void 0, this._cipher = new Sb.AES(e), this._prev = Fi.from(r), this._mode = t, this._autopadding = !0;
  }

  a(Nf, "Decipher");
  Ab(Nf, Hu);

  Nf.prototype._update = function (t) {
    this._cache.add(t);

    for (var e, r, n = []; e = this._cache.get(this._autopadding);) r = this._mode.decrypt(this, e), n.push(r);

    return Fi.concat(n);
  };

  Nf.prototype._final = function () {
    var t = this._cache.flush();

    if (this._autopadding) return qb(this._mode.decrypt(this, t));
    if (t) throw new Error("data not multiple of block length");
  };

  Nf.prototype.setAutoPadding = function (t) {
    return this._autopadding = !!t, this;
  };

  function Ln() {
    this.cache = Fi.allocUnsafe(0);
  }

  a(Ln, "Splitter");

  Ln.prototype.add = function (t) {
    this.cache = Fi.concat([this.cache, t]);
  };

  Ln.prototype.get = function (t) {
    var e;

    if (t) {
      if (this.cache.length > 16) return e = this.cache.slice(0, 16), this.cache = this.cache.slice(16), e;
    } else if (this.cache.length >= 16) return e = this.cache.slice(0, 16), this.cache = this.cache.slice(16), e;

    return null;
  };

  Ln.prototype.flush = function () {
    if (this.cache.length) return this.cache;
  };

  function qb(t) {
    var e = t[15];
    if (e < 1 || e > 16) throw new Error("unable to decrypt data");

    for (var r = -1; ++r < e;) if (t[r + (16 - e)] !== e) throw new Error("unable to decrypt data");

    if (e !== 16) return t.slice(0, 16 - e);
  }

  a(qb, "unpad");

  function Fu(t, e, r) {
    var n = Uu[t.toLowerCase()];
    if (!n) throw new TypeError("invalid suite type");
    if (typeof r == "string" && (r = Fi.from(r)), n.mode !== "GCM" && r.length !== n.iv) throw new TypeError("invalid iv length " + r.length);
    if (typeof e == "string" && (e = Fi.from(e)), e.length !== n.key / 8) throw new TypeError("invalid key length " + e.length);
    return n.type === "stream" ? new Mb(n.module, e, r, !0) : n.type === "auth" ? new xb(n.module, e, r, !0) : new Nf(n.module, e, r);
  }

  a(Fu, "createDecipheriv");

  function Bb(t, e) {
    var r = Uu[t.toLowerCase()];
    if (!r) throw new TypeError("invalid suite type");
    var n = Eb(e, !1, r.key, r.iv);
    return Fu(t, n.key, n.iv);
  }

  a(Bb, "createDecipher");
  I0.createDecipher = Bb;
  I0.createDecipheriv = Fu;
});
var On = D(jt => {
  var ju = zu(),
      Wu = Ku(),
      Rb = x0();

  function Ib() {
    return Object.keys(Rb);
  }

  a(Ib, "getCiphers");
  jt.createCipher = jt.Cipher = ju.createCipher;
  jt.createCipheriv = jt.Cipheriv = ju.createCipheriv;
  jt.createDecipher = jt.Decipher = Wu.createDecipher;
  jt.createDecipheriv = jt.Decipheriv = Wu.createDecipheriv;
  jt.listCiphers = jt.getCiphers = Ib;
});
var Vu = D(gr => {
  gr["des-ecb"] = {
    key: 8,
    iv: 0
  };
  gr["des-cbc"] = gr.des = {
    key: 8,
    iv: 8
  };
  gr["des-ede3-cbc"] = gr.des3 = {
    key: 24,
    iv: 8
  };
  gr["des-ede3"] = {
    key: 24,
    iv: 0
  };
  gr["des-ede-cbc"] = {
    key: 16,
    iv: 8
  };
  gr["des-ede"] = {
    key: 16,
    iv: 0
  };
});
var Ju = D(Wt => {
  var Zu = su(),
      k0 = On(),
      Gr = Pn(),
      yr = Vu(),
      Gu = Tf();

  function kb(t, e) {
    t = t.toLowerCase();
    var r, n;
    if (Gr[t]) r = Gr[t].key, n = Gr[t].iv;else if (yr[t]) r = yr[t].key * 8, n = yr[t].iv;else throw new TypeError("invalid suite type");
    var i = Gu(e, !1, r, n);
    return Xu(t, i.key, i.iv);
  }

  a(kb, "createCipher");

  function Db(t, e) {
    t = t.toLowerCase();
    var r, n;
    if (Gr[t]) r = Gr[t].key, n = Gr[t].iv;else if (yr[t]) r = yr[t].key * 8, n = yr[t].iv;else throw new TypeError("invalid suite type");
    var i = Gu(e, !1, r, n);
    return Yu(t, i.key, i.iv);
  }

  a(Db, "createDecipher");

  function Xu(t, e, r) {
    if (t = t.toLowerCase(), Gr[t]) return k0.createCipheriv(t, e, r);
    if (yr[t]) return new Zu({
      key: e,
      iv: r,
      mode: t
    });
    throw new TypeError("invalid suite type");
  }

  a(Xu, "createCipheriv");

  function Yu(t, e, r) {
    if (t = t.toLowerCase(), Gr[t]) return k0.createDecipheriv(t, e, r);
    if (yr[t]) return new Zu({
      key: e,
      iv: r,
      mode: t,
      decrypt: !0
    });
    throw new TypeError("invalid suite type");
  }

  a(Yu, "createDecipheriv");

  function Pb() {
    return Object.keys(yr).concat(k0.getCiphers());
  }

  a(Pb, "getCiphers");
  Wt.createCipher = Wt.Cipher = kb;
  Wt.createCipheriv = Wt.Cipheriv = Xu;
  Wt.createDecipher = Wt.Decipher = Db;
  Wt.createDecipheriv = Wt.Decipheriv = Yu;
  Wt.listCiphers = Wt.getCiphers = Pb;
});
var Ke = D(($u, D0) => {
  (function (t, e) {
    "use strict";

    function r(E, p) {
      if (!E) throw new Error(p || "Assertion failed");
    }

    a(r, "assert");

    function n(E, p) {
      E.super_ = p;
      var w = a(function () {}, "TempCtor");
      w.prototype = p.prototype, E.prototype = new w(), E.prototype.constructor = E;
    }

    a(n, "inherits");

    function i(E, p, w) {
      if (i.isBN(E)) return E;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, E !== null && ((p === "le" || p === "be") && (w = p, p = 10), this._init(E || 0, p || 10, w || "be"));
    }

    a(i, "BN"), typeof t == "object" ? t.exports = i : e.BN = i, i.BN = i, i.wordSize = 26;
    var h;

    try {
      typeof window < "u" && typeof window.Buffer < "u" ? h = window.Buffer : h = __buffer$.Buffer;
    } catch {}

    i.isBN = a(function (p) {
      return p instanceof i ? !0 : p !== null && typeof p == "object" && p.constructor.wordSize === i.wordSize && Array.isArray(p.words);
    }, "isBN"), i.max = a(function (p, w) {
      return p.cmp(w) > 0 ? p : w;
    }, "max"), i.min = a(function (p, w) {
      return p.cmp(w) < 0 ? p : w;
    }, "min"), i.prototype._init = a(function (p, w, l) {
      if (typeof p == "number") return this._initNumber(p, w, l);
      if (typeof p == "object") return this._initArray(p, w, l);
      w === "hex" && (w = 16), r(w === (w | 0) && w >= 2 && w <= 36), p = p.toString().replace(/\s+/g, "");
      var f = 0;
      p[0] === "-" && (f++, this.negative = 1), f < p.length && (w === 16 ? this._parseHex(p, f, l) : (this._parseBase(p, w, f), l === "le" && this._initArray(this.toArray(), w, l)));
    }, "init"), i.prototype._initNumber = a(function (p, w, l) {
      p < 0 && (this.negative = 1, p = -p), p < 67108864 ? (this.words = [p & 67108863], this.length = 1) : p < 4503599627370496 ? (this.words = [p & 67108863, p / 67108864 & 67108863], this.length = 2) : (r(p < 9007199254740992), this.words = [p & 67108863, p / 67108864 & 67108863, 1], this.length = 3), l === "le" && this._initArray(this.toArray(), w, l);
    }, "_initNumber"), i.prototype._initArray = a(function (p, w, l) {
      if (r(typeof p.length == "number"), p.length <= 0) return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(p.length / 3), this.words = new Array(this.length);

      for (var f = 0; f < this.length; f++) this.words[f] = 0;

      var s,
          d,
          v = 0;
      if (l === "be") for (f = p.length - 1, s = 0; f >= 0; f -= 3) d = p[f] | p[f - 1] << 8 | p[f - 2] << 16, this.words[s] |= d << v & 67108863, this.words[s + 1] = d >>> 26 - v & 67108863, v += 24, v >= 26 && (v -= 26, s++);else if (l === "le") for (f = 0, s = 0; f < p.length; f += 3) d = p[f] | p[f + 1] << 8 | p[f + 2] << 16, this.words[s] |= d << v & 67108863, this.words[s + 1] = d >>> 26 - v & 67108863, v += 24, v >= 26 && (v -= 26, s++);
      return this.strip();
    }, "_initArray");

    function b(E, p) {
      var w = E.charCodeAt(p);
      return w >= 65 && w <= 70 ? w - 55 : w >= 97 && w <= 102 ? w - 87 : w - 48 & 15;
    }

    a(b, "parseHex4Bits");

    function _(E, p, w) {
      var l = b(E, w);
      return w - 1 >= p && (l |= b(E, w - 1) << 4), l;
    }

    a(_, "parseHexByte"), i.prototype._parseHex = a(function (p, w, l) {
      this.length = Math.ceil((p.length - w) / 6), this.words = new Array(this.length);

      for (var f = 0; f < this.length; f++) this.words[f] = 0;

      var s = 0,
          d = 0,
          v;
      if (l === "be") for (f = p.length - 1; f >= w; f -= 2) v = _(p, w, f) << s, this.words[d] |= v & 67108863, s >= 18 ? (s -= 18, d += 1, this.words[d] |= v >>> 26) : s += 8;else {
        var c = p.length - w;

        for (f = c % 2 === 0 ? w + 1 : w; f < p.length; f += 2) v = _(p, w, f) << s, this.words[d] |= v & 67108863, s >= 18 ? (s -= 18, d += 1, this.words[d] |= v >>> 26) : s += 8;
      }
      this.strip();
    }, "_parseHex");

    function x(E, p, w, l) {
      for (var f = 0, s = Math.min(E.length, w), d = p; d < s; d++) {
        var v = E.charCodeAt(d) - 48;
        f *= l, v >= 49 ? f += v - 49 + 10 : v >= 17 ? f += v - 17 + 10 : f += v;
      }

      return f;
    }

    a(x, "parseBase"), i.prototype._parseBase = a(function (p, w, l) {
      this.words = [0], this.length = 1;

      for (var f = 0, s = 1; s <= 67108863; s *= w) f++;

      f--, s = s / w | 0;

      for (var d = p.length - l, v = d % f, c = Math.min(d, d - v) + l, u = 0, m = l; m < c; m += f) u = x(p, m, m + f, w), this.imuln(s), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);

      if (v !== 0) {
        var g = 1;

        for (u = x(p, m, p.length, w), m = 0; m < v; m++) g *= w;

        this.imuln(g), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
      }

      this.strip();
    }, "_parseBase"), i.prototype.copy = a(function (p) {
      p.words = new Array(this.length);

      for (var w = 0; w < this.length; w++) p.words[w] = this.words[w];

      p.length = this.length, p.negative = this.negative, p.red = this.red;
    }, "copy"), i.prototype.clone = a(function () {
      var p = new i(null);
      return this.copy(p), p;
    }, "clone"), i.prototype._expand = a(function (p) {
      for (; this.length < p;) this.words[this.length++] = 0;

      return this;
    }, "_expand"), i.prototype.strip = a(function () {
      for (; this.length > 1 && this.words[this.length - 1] === 0;) this.length--;

      return this._normSign();
    }, "strip"), i.prototype._normSign = a(function () {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, "_normSign"), i.prototype.inspect = a(function () {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }, "inspect");
    var M = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
        S = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        A = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    i.prototype.toString = a(function (p, w) {
      p = p || 10, w = w | 0 || 1;
      var l;

      if (p === 16 || p === "hex") {
        l = "";

        for (var f = 0, s = 0, d = 0; d < this.length; d++) {
          var v = this.words[d],
              c = ((v << f | s) & 16777215).toString(16);
          s = v >>> 24 - f & 16777215, s !== 0 || d !== this.length - 1 ? l = M[6 - c.length] + c + l : l = c + l, f += 2, f >= 26 && (f -= 26, d--);
        }

        for (s !== 0 && (l = s.toString(16) + l); l.length % w !== 0;) l = "0" + l;

        return this.negative !== 0 && (l = "-" + l), l;
      }

      if (p === (p | 0) && p >= 2 && p <= 36) {
        var u = S[p],
            m = A[p];
        l = "";
        var g = this.clone();

        for (g.negative = 0; !g.isZero();) {
          var o = g.modn(m).toString(p);
          g = g.idivn(m), g.isZero() ? l = o + l : l = M[u - o.length] + o + l;
        }

        for (this.isZero() && (l = "0" + l); l.length % w !== 0;) l = "0" + l;

        return this.negative !== 0 && (l = "-" + l), l;
      }

      r(!1, "Base should be between 2 and 36");
    }, "toString"), i.prototype.toNumber = a(function () {
      var p = this.words[0];
      return this.length === 2 ? p += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? p += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -p : p;
    }, "toNumber"), i.prototype.toJSON = a(function () {
      return this.toString(16);
    }, "toJSON"), i.prototype.toBuffer = a(function (p, w) {
      return r(typeof h < "u"), this.toArrayLike(h, p, w);
    }, "toBuffer"), i.prototype.toArray = a(function (p, w) {
      return this.toArrayLike(Array, p, w);
    }, "toArray"), i.prototype.toArrayLike = a(function (p, w, l) {
      var f = this.byteLength(),
          s = l || Math.max(1, f);
      r(f <= s, "byte array longer than desired length"), r(s > 0, "Requested array length <= 0"), this.strip();
      var d = w === "le",
          v = new p(s),
          c,
          u,
          m = this.clone();

      if (d) {
        for (u = 0; !m.isZero(); u++) c = m.andln(255), m.iushrn(8), v[u] = c;

        for (; u < s; u++) v[u] = 0;
      } else {
        for (u = 0; u < s - f; u++) v[u] = 0;

        for (u = 0; !m.isZero(); u++) c = m.andln(255), m.iushrn(8), v[s - u - 1] = c;
      }

      return v;
    }, "toArrayLike"), Math.clz32 ? i.prototype._countBits = a(function (p) {
      return 32 - Math.clz32(p);
    }, "_countBits") : i.prototype._countBits = a(function (p) {
      var w = p,
          l = 0;
      return w >= 4096 && (l += 13, w >>>= 13), w >= 64 && (l += 7, w >>>= 7), w >= 8 && (l += 4, w >>>= 4), w >= 2 && (l += 2, w >>>= 2), l + w;
    }, "_countBits"), i.prototype._zeroBits = a(function (p) {
      if (p === 0) return 26;
      var w = p,
          l = 0;
      return (w & 8191) === 0 && (l += 13, w >>>= 13), (w & 127) === 0 && (l += 7, w >>>= 7), (w & 15) === 0 && (l += 4, w >>>= 4), (w & 3) === 0 && (l += 2, w >>>= 2), (w & 1) === 0 && l++, l;
    }, "_zeroBits"), i.prototype.bitLength = a(function () {
      var p = this.words[this.length - 1],
          w = this._countBits(p);

      return (this.length - 1) * 26 + w;
    }, "bitLength");

    function q(E) {
      for (var p = new Array(E.bitLength()), w = 0; w < p.length; w++) {
        var l = w / 26 | 0,
            f = w % 26;
        p[w] = (E.words[l] & 1 << f) >>> f;
      }

      return p;
    }

    a(q, "toBitArray"), i.prototype.zeroBits = a(function () {
      if (this.isZero()) return 0;

      for (var p = 0, w = 0; w < this.length; w++) {
        var l = this._zeroBits(this.words[w]);

        if (p += l, l !== 26) break;
      }

      return p;
    }, "zeroBits"), i.prototype.byteLength = a(function () {
      return Math.ceil(this.bitLength() / 8);
    }, "byteLength"), i.prototype.toTwos = a(function (p) {
      return this.negative !== 0 ? this.abs().inotn(p).iaddn(1) : this.clone();
    }, "toTwos"), i.prototype.fromTwos = a(function (p) {
      return this.testn(p - 1) ? this.notn(p).iaddn(1).ineg() : this.clone();
    }, "fromTwos"), i.prototype.isNeg = a(function () {
      return this.negative !== 0;
    }, "isNeg"), i.prototype.neg = a(function () {
      return this.clone().ineg();
    }, "neg"), i.prototype.ineg = a(function () {
      return this.isZero() || (this.negative ^= 1), this;
    }, "ineg"), i.prototype.iuor = a(function (p) {
      for (; this.length < p.length;) this.words[this.length++] = 0;

      for (var w = 0; w < p.length; w++) this.words[w] = this.words[w] | p.words[w];

      return this.strip();
    }, "iuor"), i.prototype.ior = a(function (p) {
      return r((this.negative | p.negative) === 0), this.iuor(p);
    }, "ior"), i.prototype.or = a(function (p) {
      return this.length > p.length ? this.clone().ior(p) : p.clone().ior(this);
    }, "or"), i.prototype.uor = a(function (p) {
      return this.length > p.length ? this.clone().iuor(p) : p.clone().iuor(this);
    }, "uor"), i.prototype.iuand = a(function (p) {
      var w;
      this.length > p.length ? w = p : w = this;

      for (var l = 0; l < w.length; l++) this.words[l] = this.words[l] & p.words[l];

      return this.length = w.length, this.strip();
    }, "iuand"), i.prototype.iand = a(function (p) {
      return r((this.negative | p.negative) === 0), this.iuand(p);
    }, "iand"), i.prototype.and = a(function (p) {
      return this.length > p.length ? this.clone().iand(p) : p.clone().iand(this);
    }, "and"), i.prototype.uand = a(function (p) {
      return this.length > p.length ? this.clone().iuand(p) : p.clone().iuand(this);
    }, "uand"), i.prototype.iuxor = a(function (p) {
      var w, l;
      this.length > p.length ? (w = this, l = p) : (w = p, l = this);

      for (var f = 0; f < l.length; f++) this.words[f] = w.words[f] ^ l.words[f];

      if (this !== w) for (; f < w.length; f++) this.words[f] = w.words[f];
      return this.length = w.length, this.strip();
    }, "iuxor"), i.prototype.ixor = a(function (p) {
      return r((this.negative | p.negative) === 0), this.iuxor(p);
    }, "ixor"), i.prototype.xor = a(function (p) {
      return this.length > p.length ? this.clone().ixor(p) : p.clone().ixor(this);
    }, "xor"), i.prototype.uxor = a(function (p) {
      return this.length > p.length ? this.clone().iuxor(p) : p.clone().iuxor(this);
    }, "uxor"), i.prototype.inotn = a(function (p) {
      r(typeof p == "number" && p >= 0);
      var w = Math.ceil(p / 26) | 0,
          l = p % 26;
      this._expand(w), l > 0 && w--;

      for (var f = 0; f < w; f++) this.words[f] = ~this.words[f] & 67108863;

      return l > 0 && (this.words[f] = ~this.words[f] & 67108863 >> 26 - l), this.strip();
    }, "inotn"), i.prototype.notn = a(function (p) {
      return this.clone().inotn(p);
    }, "notn"), i.prototype.setn = a(function (p, w) {
      r(typeof p == "number" && p >= 0);
      var l = p / 26 | 0,
          f = p % 26;
      return this._expand(l + 1), w ? this.words[l] = this.words[l] | 1 << f : this.words[l] = this.words[l] & ~(1 << f), this.strip();
    }, "setn"), i.prototype.iadd = a(function (p) {
      var w;
      if (this.negative !== 0 && p.negative === 0) return this.negative = 0, w = this.isub(p), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && p.negative !== 0) return p.negative = 0, w = this.isub(p), p.negative = 1, w._normSign();
      var l, f;
      this.length > p.length ? (l = this, f = p) : (l = p, f = this);

      for (var s = 0, d = 0; d < f.length; d++) w = (l.words[d] | 0) + (f.words[d] | 0) + s, this.words[d] = w & 67108863, s = w >>> 26;

      for (; s !== 0 && d < l.length; d++) w = (l.words[d] | 0) + s, this.words[d] = w & 67108863, s = w >>> 26;

      if (this.length = l.length, s !== 0) this.words[this.length] = s, this.length++;else if (l !== this) for (; d < l.length; d++) this.words[d] = l.words[d];
      return this;
    }, "iadd"), i.prototype.add = a(function (p) {
      var w;
      return p.negative !== 0 && this.negative === 0 ? (p.negative = 0, w = this.sub(p), p.negative ^= 1, w) : p.negative === 0 && this.negative !== 0 ? (this.negative = 0, w = p.sub(this), this.negative = 1, w) : this.length > p.length ? this.clone().iadd(p) : p.clone().iadd(this);
    }, "add"), i.prototype.isub = a(function (p) {
      if (p.negative !== 0) {
        p.negative = 0;
        var w = this.iadd(p);
        return p.negative = 1, w._normSign();
      } else if (this.negative !== 0) return this.negative = 0, this.iadd(p), this.negative = 1, this._normSign();

      var l = this.cmp(p);
      if (l === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var f, s;
      l > 0 ? (f = this, s = p) : (f = p, s = this);

      for (var d = 0, v = 0; v < s.length; v++) w = (f.words[v] | 0) - (s.words[v] | 0) + d, d = w >> 26, this.words[v] = w & 67108863;

      for (; d !== 0 && v < f.length; v++) w = (f.words[v] | 0) + d, d = w >> 26, this.words[v] = w & 67108863;

      if (d === 0 && v < f.length && f !== this) for (; v < f.length; v++) this.words[v] = f.words[v];
      return this.length = Math.max(this.length, v), f !== this && (this.negative = 1), this.strip();
    }, "isub"), i.prototype.sub = a(function (p) {
      return this.clone().isub(p);
    }, "sub");

    function k(E, p, w) {
      w.negative = p.negative ^ E.negative;
      var l = E.length + p.length | 0;
      w.length = l, l = l - 1 | 0;
      var f = E.words[0] | 0,
          s = p.words[0] | 0,
          d = f * s,
          v = d & 67108863,
          c = d / 67108864 | 0;
      w.words[0] = v;

      for (var u = 1; u < l; u++) {
        for (var m = c >>> 26, g = c & 67108863, o = Math.min(u, p.length - 1), y = Math.max(0, u - E.length + 1); y <= o; y++) {
          var B = u - y | 0;
          f = E.words[B] | 0, s = p.words[y] | 0, d = f * s + g, m += d / 67108864 | 0, g = d & 67108863;
        }

        w.words[u] = g | 0, c = m | 0;
      }

      return c !== 0 ? w.words[u] = c | 0 : w.length--, w.strip();
    }

    a(k, "smallMulTo");
    var P = a(function (p, w, l) {
      var f = p.words,
          s = w.words,
          d = l.words,
          v = 0,
          c,
          u,
          m,
          g = f[0] | 0,
          o = g & 8191,
          y = g >>> 13,
          B = f[1] | 0,
          I = B & 8191,
          R = B >>> 13,
          T = f[2] | 0,
          C = T & 8191,
          L = T >>> 13,
          Ue = f[3] | 0,
          z = Ue & 8191,
          U = Ue >>> 13,
          Ar = f[4] | 0,
          H = Ar & 8191,
          F = Ar >>> 13,
          qr = f[5] | 0,
          K = qr & 8191,
          j = qr >>> 13,
          Br = f[6] | 0,
          W = Br & 8191,
          V = Br >>> 13,
          Rr = f[7] | 0,
          Z = Rr & 8191,
          G = Rr >>> 13,
          Ir = f[8] | 0,
          X = Ir & 8191,
          Y = Ir >>> 13,
          kr = f[9] | 0,
          J = kr & 8191,
          $ = kr >>> 13,
          Dr = s[0] | 0,
          Q = Dr & 8191,
          ee = Dr >>> 13,
          Pr = s[1] | 0,
          te = Pr & 8191,
          re = Pr >>> 13,
          Tr = s[2] | 0,
          ie = Tr & 8191,
          fe = Tr >>> 13,
          Cr = s[3] | 0,
          ne = Cr & 8191,
          ae = Cr >>> 13,
          Nr = s[4] | 0,
          se = Nr & 8191,
          oe = Nr >>> 13,
          Lr = s[5] | 0,
          he = Lr & 8191,
          ue = Lr >>> 13,
          Or = s[6] | 0,
          de = Or & 8191,
          ce = Or >>> 13,
          zr = s[7] | 0,
          le = zr & 8191,
          ve = zr >>> 13,
          Ur = s[8] | 0,
          pe = Ur & 8191,
          be = Ur >>> 13,
          Hr = s[9] | 0,
          me = Hr & 8191,
          ge = Hr >>> 13;
      l.negative = p.negative ^ w.negative, l.length = 19, c = Math.imul(o, Q), u = Math.imul(o, ee), u = u + Math.imul(y, Q) | 0, m = Math.imul(y, ee);
      var cr = (v + c | 0) + ((u & 8191) << 13) | 0;
      v = (m + (u >>> 13) | 0) + (cr >>> 26) | 0, cr &= 67108863, c = Math.imul(I, Q), u = Math.imul(I, ee), u = u + Math.imul(R, Q) | 0, m = Math.imul(R, ee), c = c + Math.imul(o, te) | 0, u = u + Math.imul(o, re) | 0, u = u + Math.imul(y, te) | 0, m = m + Math.imul(y, re) | 0;
      var we = (v + c | 0) + ((u & 8191) << 13) | 0;
      v = (m + (u >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, c = Math.imul(C, Q), u = Math.imul(C, ee), u = u + Math.imul(L, Q) | 0, m = Math.imul(L, ee), c = c + Math.imul(I, te) | 0, u = u + Math.imul(I, re) | 0, u = u + Math.imul(R, te) | 0, m = m + Math.imul(R, re) | 0, c = c + Math.imul(o, ie) | 0, u = u + Math.imul(o, fe) | 0, u = u + Math.imul(y, ie) | 0, m = m + Math.imul(y, fe) | 0;
      var xe = (v + c | 0) + ((u & 8191) << 13) | 0;
      v = (m + (u >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, c = Math.imul(z, Q), u = Math.imul(z, ee), u = u + Math.imul(U, Q) | 0, m = Math.imul(U, ee), c = c + Math.imul(C, te) | 0, u = u + Math.imul(C, re) | 0, u = u + Math.imul(L, te) | 0, m = m + Math.imul(L, re) | 0, c = c + Math.imul(I, ie) | 0, u = u + Math.imul(I, fe) | 0, u = u + Math.imul(R, ie) | 0, m = m + Math.imul(R, fe) | 0, c = c + Math.imul(o, ne) | 0, u = u + Math.imul(o, ae) | 0, u = u + Math.imul(y, ne) | 0, m = m + Math.imul(y, ae) | 0;
      var qt = (v + c | 0) + ((u & 8191) << 13) | 0;
      v = (m + (u >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, c = Math.imul(H, Q), u = Math.imul(H, ee), u = u + Math.imul(F, Q) | 0, m = Math.imul(F, ee), c = c + Math.imul(z, te) | 0, u = u + Math.imul(z, re) | 0, u = u + Math.imul(U, te) | 0, m = m + Math.imul(U, re) | 0, c = c + Math.imul(C, ie) | 0, u = u + Math.imul(C, fe) | 0, u = u + Math.imul(L, ie) | 0, m = m + Math.imul(L, fe) | 0, c = c + Math.imul(I, ne) | 0, u = u + Math.imul(I, ae) | 0, u = u + Math.imul(R, ne) | 0, m = m + Math.imul(R, ae) | 0, c = c + Math.imul(o, se) | 0, u = u + Math.imul(o, oe) | 0, u = u + Math.imul(y, se) | 0, m = m + Math.imul(y, oe) | 0;
      var Bt = (v + c | 0) + ((u & 8191) << 13) | 0;
      v = (m + (u >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, c = Math.imul(K, Q), u = Math.imul(K, ee), u = u + Math.imul(j, Q) | 0, m = Math.imul(j, ee), c = c + Math.imul(H, te) | 0, u = u + Math.imul(H, re) | 0, u = u + Math.imul(F, te) | 0, m = m + Math.imul(F, re) | 0, c = c + Math.imul(z, ie) | 0, u = u + Math.imul(z, fe) | 0, u = u + Math.imul(U, ie) | 0, m = m + Math.imul(U, fe) | 0, c = c + Math.imul(C, ne) | 0, u = u + Math.imul(C, ae) | 0, u = u + Math.imul(L, ne) | 0, m = m + Math.imul(L, ae) | 0, c = c + Math.imul(I, se) | 0, u = u + Math.imul(I, oe) | 0, u = u + Math.imul(R, se) | 0, m = m + Math.imul(R, oe) | 0, c = c + Math.imul(o, he) | 0, u = u + Math.imul(o, ue) | 0, u = u + Math.imul(y, he) | 0, m = m + Math.imul(y, ue) | 0;
      var Rt = (v + c | 0) + ((u & 8191) << 13) | 0;
      v = (m + (u >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, c = Math.imul(W, Q), u = Math.imul(W, ee), u = u + Math.imul(V, Q) | 0, m = Math.imul(V, ee), c = c + Math.imul(K, te) | 0, u = u + Math.imul(K, re) | 0, u = u + Math.imul(j, te) | 0, m = m + Math.imul(j, re) | 0, c = c + Math.imul(H, ie) | 0, u = u + Math.imul(H, fe) | 0, u = u + Math.imul(F, ie) | 0, m = m + Math.imul(F, fe) | 0, c = c + Math.imul(z, ne) | 0, u = u + Math.imul(z, ae) | 0, u = u + Math.imul(U, ne) | 0, m = m + Math.imul(U, ae) | 0, c = c + Math.imul(C, se) | 0, u = u + Math.imul(C, oe) | 0, u = u + Math.imul(L, se) | 0, m = m + Math.imul(L, oe) | 0, c = c + Math.imul(I, he) | 0, u = u + Math.imul(I, ue) | 0, u = u + Math.imul(R, he) | 0, m = m + Math.imul(R, ue) | 0, c = c + Math.imul(o, de) | 0, u = u + Math.imul(o, ce) | 0, u = u + Math.imul(y, de) | 0, m = m + Math.imul(y, ce) | 0;
      var It = (v + c | 0) + ((u & 8191) << 13) | 0;
      v = (m + (u >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, c = Math.imul(Z, Q), u = Math.imul(Z, ee), u = u + Math.imul(G, Q) | 0, m = Math.imul(G, ee), c = c + Math.imul(W, te) | 0, u = u + Math.imul(W, re) | 0, u = u + Math.imul(V, te) | 0, m = m + Math.imul(V, re) | 0, c = c + Math.imul(K, ie) | 0, u = u + Math.imul(K, fe) | 0, u = u + Math.imul(j, ie) | 0, m = m + Math.imul(j, fe) | 0, c = c + Math.imul(H, ne) | 0, u = u + Math.imul(H, ae) | 0, u = u + Math.imul(F, ne) | 0, m = m + Math.imul(F, ae) | 0, c = c + Math.imul(z, se) | 0, u = u + Math.imul(z, oe) | 0, u = u + Math.imul(U, se) | 0, m = m + Math.imul(U, oe) | 0, c = c + Math.imul(C, he) | 0, u = u + Math.imul(C, ue) | 0, u = u + Math.imul(L, he) | 0, m = m + Math.imul(L, ue) | 0, c = c + Math.imul(I, de) | 0, u = u + Math.imul(I, ce) | 0, u = u + Math.imul(R, de) | 0, m = m + Math.imul(R, ce) | 0, c = c + Math.imul(o, le) | 0, u = u + Math.imul(o, ve) | 0, u = u + Math.imul(y, le) | 0, m = m + Math.imul(y, ve) | 0;
      var kt = (v + c | 0) + ((u & 8191) << 13) | 0;
      v = (m + (u >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, c = Math.imul(X, Q), u = Math.imul(X, ee), u = u + Math.imul(Y, Q) | 0, m = Math.imul(Y, ee), c = c + Math.imul(Z, te) | 0, u = u + Math.imul(Z, re) | 0, u = u + Math.imul(G, te) | 0, m = m + Math.imul(G, re) | 0, c = c + Math.imul(W, ie) | 0, u = u + Math.imul(W, fe) | 0, u = u + Math.imul(V, ie) | 0, m = m + Math.imul(V, fe) | 0, c = c + Math.imul(K, ne) | 0, u = u + Math.imul(K, ae) | 0, u = u + Math.imul(j, ne) | 0, m = m + Math.imul(j, ae) | 0, c = c + Math.imul(H, se) | 0, u = u + Math.imul(H, oe) | 0, u = u + Math.imul(F, se) | 0, m = m + Math.imul(F, oe) | 0, c = c + Math.imul(z, he) | 0, u = u + Math.imul(z, ue) | 0, u = u + Math.imul(U, he) | 0, m = m + Math.imul(U, ue) | 0, c = c + Math.imul(C, de) | 0, u = u + Math.imul(C, ce) | 0, u = u + Math.imul(L, de) | 0, m = m + Math.imul(L, ce) | 0, c = c + Math.imul(I, le) | 0, u = u + Math.imul(I, ve) | 0, u = u + Math.imul(R, le) | 0, m = m + Math.imul(R, ve) | 0, c = c + Math.imul(o, pe) | 0, u = u + Math.imul(o, be) | 0, u = u + Math.imul(y, pe) | 0, m = m + Math.imul(y, be) | 0;
      var Dt = (v + c | 0) + ((u & 8191) << 13) | 0;
      v = (m + (u >>> 13) | 0) + (Dt >>> 26) | 0, Dt &= 67108863, c = Math.imul(J, Q), u = Math.imul(J, ee), u = u + Math.imul($, Q) | 0, m = Math.imul($, ee), c = c + Math.imul(X, te) | 0, u = u + Math.imul(X, re) | 0, u = u + Math.imul(Y, te) | 0, m = m + Math.imul(Y, re) | 0, c = c + Math.imul(Z, ie) | 0, u = u + Math.imul(Z, fe) | 0, u = u + Math.imul(G, ie) | 0, m = m + Math.imul(G, fe) | 0, c = c + Math.imul(W, ne) | 0, u = u + Math.imul(W, ae) | 0, u = u + Math.imul(V, ne) | 0, m = m + Math.imul(V, ae) | 0, c = c + Math.imul(K, se) | 0, u = u + Math.imul(K, oe) | 0, u = u + Math.imul(j, se) | 0, m = m + Math.imul(j, oe) | 0, c = c + Math.imul(H, he) | 0, u = u + Math.imul(H, ue) | 0, u = u + Math.imul(F, he) | 0, m = m + Math.imul(F, ue) | 0, c = c + Math.imul(z, de) | 0, u = u + Math.imul(z, ce) | 0, u = u + Math.imul(U, de) | 0, m = m + Math.imul(U, ce) | 0, c = c + Math.imul(C, le) | 0, u = u + Math.imul(C, ve) | 0, u = u + Math.imul(L, le) | 0, m = m + Math.imul(L, ve) | 0, c = c + Math.imul(I, pe) | 0, u = u + Math.imul(I, be) | 0, u = u + Math.imul(R, pe) | 0, m = m + Math.imul(R, be) | 0, c = c + Math.imul(o, me) | 0, u = u + Math.imul(o, ge) | 0, u = u + Math.imul(y, me) | 0, m = m + Math.imul(y, ge) | 0;
      var Pt = (v + c | 0) + ((u & 8191) << 13) | 0;
      v = (m + (u >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, c = Math.imul(J, te), u = Math.imul(J, re), u = u + Math.imul($, te) | 0, m = Math.imul($, re), c = c + Math.imul(X, ie) | 0, u = u + Math.imul(X, fe) | 0, u = u + Math.imul(Y, ie) | 0, m = m + Math.imul(Y, fe) | 0, c = c + Math.imul(Z, ne) | 0, u = u + Math.imul(Z, ae) | 0, u = u + Math.imul(G, ne) | 0, m = m + Math.imul(G, ae) | 0, c = c + Math.imul(W, se) | 0, u = u + Math.imul(W, oe) | 0, u = u + Math.imul(V, se) | 0, m = m + Math.imul(V, oe) | 0, c = c + Math.imul(K, he) | 0, u = u + Math.imul(K, ue) | 0, u = u + Math.imul(j, he) | 0, m = m + Math.imul(j, ue) | 0, c = c + Math.imul(H, de) | 0, u = u + Math.imul(H, ce) | 0, u = u + Math.imul(F, de) | 0, m = m + Math.imul(F, ce) | 0, c = c + Math.imul(z, le) | 0, u = u + Math.imul(z, ve) | 0, u = u + Math.imul(U, le) | 0, m = m + Math.imul(U, ve) | 0, c = c + Math.imul(C, pe) | 0, u = u + Math.imul(C, be) | 0, u = u + Math.imul(L, pe) | 0, m = m + Math.imul(L, be) | 0, c = c + Math.imul(I, me) | 0, u = u + Math.imul(I, ge) | 0, u = u + Math.imul(R, me) | 0, m = m + Math.imul(R, ge) | 0;
      var Tt = (v + c | 0) + ((u & 8191) << 13) | 0;
      v = (m + (u >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, c = Math.imul(J, ie), u = Math.imul(J, fe), u = u + Math.imul($, ie) | 0, m = Math.imul($, fe), c = c + Math.imul(X, ne) | 0, u = u + Math.imul(X, ae) | 0, u = u + Math.imul(Y, ne) | 0, m = m + Math.imul(Y, ae) | 0, c = c + Math.imul(Z, se) | 0, u = u + Math.imul(Z, oe) | 0, u = u + Math.imul(G, se) | 0, m = m + Math.imul(G, oe) | 0, c = c + Math.imul(W, he) | 0, u = u + Math.imul(W, ue) | 0, u = u + Math.imul(V, he) | 0, m = m + Math.imul(V, ue) | 0, c = c + Math.imul(K, de) | 0, u = u + Math.imul(K, ce) | 0, u = u + Math.imul(j, de) | 0, m = m + Math.imul(j, ce) | 0, c = c + Math.imul(H, le) | 0, u = u + Math.imul(H, ve) | 0, u = u + Math.imul(F, le) | 0, m = m + Math.imul(F, ve) | 0, c = c + Math.imul(z, pe) | 0, u = u + Math.imul(z, be) | 0, u = u + Math.imul(U, pe) | 0, m = m + Math.imul(U, be) | 0, c = c + Math.imul(C, me) | 0, u = u + Math.imul(C, ge) | 0, u = u + Math.imul(L, me) | 0, m = m + Math.imul(L, ge) | 0;
      var Ct = (v + c | 0) + ((u & 8191) << 13) | 0;
      v = (m + (u >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, c = Math.imul(J, ne), u = Math.imul(J, ae), u = u + Math.imul($, ne) | 0, m = Math.imul($, ae), c = c + Math.imul(X, se) | 0, u = u + Math.imul(X, oe) | 0, u = u + Math.imul(Y, se) | 0, m = m + Math.imul(Y, oe) | 0, c = c + Math.imul(Z, he) | 0, u = u + Math.imul(Z, ue) | 0, u = u + Math.imul(G, he) | 0, m = m + Math.imul(G, ue) | 0, c = c + Math.imul(W, de) | 0, u = u + Math.imul(W, ce) | 0, u = u + Math.imul(V, de) | 0, m = m + Math.imul(V, ce) | 0, c = c + Math.imul(K, le) | 0, u = u + Math.imul(K, ve) | 0, u = u + Math.imul(j, le) | 0, m = m + Math.imul(j, ve) | 0, c = c + Math.imul(H, pe) | 0, u = u + Math.imul(H, be) | 0, u = u + Math.imul(F, pe) | 0, m = m + Math.imul(F, be) | 0, c = c + Math.imul(z, me) | 0, u = u + Math.imul(z, ge) | 0, u = u + Math.imul(U, me) | 0, m = m + Math.imul(U, ge) | 0;
      var Nt = (v + c | 0) + ((u & 8191) << 13) | 0;
      v = (m + (u >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, c = Math.imul(J, se), u = Math.imul(J, oe), u = u + Math.imul($, se) | 0, m = Math.imul($, oe), c = c + Math.imul(X, he) | 0, u = u + Math.imul(X, ue) | 0, u = u + Math.imul(Y, he) | 0, m = m + Math.imul(Y, ue) | 0, c = c + Math.imul(Z, de) | 0, u = u + Math.imul(Z, ce) | 0, u = u + Math.imul(G, de) | 0, m = m + Math.imul(G, ce) | 0, c = c + Math.imul(W, le) | 0, u = u + Math.imul(W, ve) | 0, u = u + Math.imul(V, le) | 0, m = m + Math.imul(V, ve) | 0, c = c + Math.imul(K, pe) | 0, u = u + Math.imul(K, be) | 0, u = u + Math.imul(j, pe) | 0, m = m + Math.imul(j, be) | 0, c = c + Math.imul(H, me) | 0, u = u + Math.imul(H, ge) | 0, u = u + Math.imul(F, me) | 0, m = m + Math.imul(F, ge) | 0;
      var Lt = (v + c | 0) + ((u & 8191) << 13) | 0;
      v = (m + (u >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, c = Math.imul(J, he), u = Math.imul(J, ue), u = u + Math.imul($, he) | 0, m = Math.imul($, ue), c = c + Math.imul(X, de) | 0, u = u + Math.imul(X, ce) | 0, u = u + Math.imul(Y, de) | 0, m = m + Math.imul(Y, ce) | 0, c = c + Math.imul(Z, le) | 0, u = u + Math.imul(Z, ve) | 0, u = u + Math.imul(G, le) | 0, m = m + Math.imul(G, ve) | 0, c = c + Math.imul(W, pe) | 0, u = u + Math.imul(W, be) | 0, u = u + Math.imul(V, pe) | 0, m = m + Math.imul(V, be) | 0, c = c + Math.imul(K, me) | 0, u = u + Math.imul(K, ge) | 0, u = u + Math.imul(j, me) | 0, m = m + Math.imul(j, ge) | 0;
      var Ot = (v + c | 0) + ((u & 8191) << 13) | 0;
      v = (m + (u >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, c = Math.imul(J, de), u = Math.imul(J, ce), u = u + Math.imul($, de) | 0, m = Math.imul($, ce), c = c + Math.imul(X, le) | 0, u = u + Math.imul(X, ve) | 0, u = u + Math.imul(Y, le) | 0, m = m + Math.imul(Y, ve) | 0, c = c + Math.imul(Z, pe) | 0, u = u + Math.imul(Z, be) | 0, u = u + Math.imul(G, pe) | 0, m = m + Math.imul(G, be) | 0, c = c + Math.imul(W, me) | 0, u = u + Math.imul(W, ge) | 0, u = u + Math.imul(V, me) | 0, m = m + Math.imul(V, ge) | 0;
      var zt = (v + c | 0) + ((u & 8191) << 13) | 0;
      v = (m + (u >>> 13) | 0) + (zt >>> 26) | 0, zt &= 67108863, c = Math.imul(J, le), u = Math.imul(J, ve), u = u + Math.imul($, le) | 0, m = Math.imul($, ve), c = c + Math.imul(X, pe) | 0, u = u + Math.imul(X, be) | 0, u = u + Math.imul(Y, pe) | 0, m = m + Math.imul(Y, be) | 0, c = c + Math.imul(Z, me) | 0, u = u + Math.imul(Z, ge) | 0, u = u + Math.imul(G, me) | 0, m = m + Math.imul(G, ge) | 0;
      var Ut = (v + c | 0) + ((u & 8191) << 13) | 0;
      v = (m + (u >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, c = Math.imul(J, pe), u = Math.imul(J, be), u = u + Math.imul($, pe) | 0, m = Math.imul($, be), c = c + Math.imul(X, me) | 0, u = u + Math.imul(X, ge) | 0, u = u + Math.imul(Y, me) | 0, m = m + Math.imul(Y, ge) | 0;
      var Ht = (v + c | 0) + ((u & 8191) << 13) | 0;
      v = (m + (u >>> 13) | 0) + (Ht >>> 26) | 0, Ht &= 67108863, c = Math.imul(J, me), u = Math.imul(J, ge), u = u + Math.imul($, me) | 0, m = Math.imul($, ge);
      var Ft = (v + c | 0) + ((u & 8191) << 13) | 0;
      return v = (m + (u >>> 13) | 0) + (Ft >>> 26) | 0, Ft &= 67108863, d[0] = cr, d[1] = we, d[2] = xe, d[3] = qt, d[4] = Bt, d[5] = Rt, d[6] = It, d[7] = kt, d[8] = Dt, d[9] = Pt, d[10] = Tt, d[11] = Ct, d[12] = Nt, d[13] = Lt, d[14] = Ot, d[15] = zt, d[16] = Ut, d[17] = Ht, d[18] = Ft, v !== 0 && (d[19] = v, l.length++), l;
    }, "comb10MulTo");
    Math.imul || (P = k);

    function N(E, p, w) {
      w.negative = p.negative ^ E.negative, w.length = E.length + p.length;

      for (var l = 0, f = 0, s = 0; s < w.length - 1; s++) {
        var d = f;
        f = 0;

        for (var v = l & 67108863, c = Math.min(s, p.length - 1), u = Math.max(0, s - E.length + 1); u <= c; u++) {
          var m = s - u,
              g = E.words[m] | 0,
              o = p.words[u] | 0,
              y = g * o,
              B = y & 67108863;
          d = d + (y / 67108864 | 0) | 0, B = B + v | 0, v = B & 67108863, d = d + (B >>> 26) | 0, f += d >>> 26, d &= 67108863;
        }

        w.words[s] = v, l = d, d = f;
      }

      return l !== 0 ? w.words[s] = l : w.length--, w.strip();
    }

    a(N, "bigMulTo");

    function ye(E, p, w) {
      var l = new O();
      return l.mulp(E, p, w);
    }

    a(ye, "jumboMulTo"), i.prototype.mulTo = a(function (p, w) {
      var l,
          f = this.length + p.length;
      return this.length === 10 && p.length === 10 ? l = P(this, p, w) : f < 63 ? l = k(this, p, w) : f < 1024 ? l = N(this, p, w) : l = ye(this, p, w), l;
    }, "mulTo");

    function O(E, p) {
      this.x = E, this.y = p;
    }

    a(O, "FFTM"), O.prototype.makeRBT = a(function (p) {
      for (var w = new Array(p), l = i.prototype._countBits(p) - 1, f = 0; f < p; f++) w[f] = this.revBin(f, l, p);

      return w;
    }, "makeRBT"), O.prototype.revBin = a(function (p, w, l) {
      if (p === 0 || p === l - 1) return p;

      for (var f = 0, s = 0; s < w; s++) f |= (p & 1) << w - s - 1, p >>= 1;

      return f;
    }, "revBin"), O.prototype.permute = a(function (p, w, l, f, s, d) {
      for (var v = 0; v < d; v++) f[v] = w[p[v]], s[v] = l[p[v]];
    }, "permute"), O.prototype.transform = a(function (p, w, l, f, s, d) {
      this.permute(d, p, w, l, f, s);

      for (var v = 1; v < s; v <<= 1) for (var c = v << 1, u = Math.cos(2 * Math.PI / c), m = Math.sin(2 * Math.PI / c), g = 0; g < s; g += c) for (var o = u, y = m, B = 0; B < v; B++) {
        var I = l[g + B],
            R = f[g + B],
            T = l[g + B + v],
            C = f[g + B + v],
            L = o * T - y * C;
        C = o * C + y * T, T = L, l[g + B] = I + T, f[g + B] = R + C, l[g + B + v] = I - T, f[g + B + v] = R - C, B !== c && (L = u * o - m * y, y = u * y + m * o, o = L);
      }
    }, "transform"), O.prototype.guessLen13b = a(function (p, w) {
      var l = Math.max(w, p) | 1,
          f = l & 1,
          s = 0;

      for (l = l / 2 | 0; l; l = l >>> 1) s++;

      return 1 << s + 1 + f;
    }, "guessLen13b"), O.prototype.conjugate = a(function (p, w, l) {
      if (!(l <= 1)) for (var f = 0; f < l / 2; f++) {
        var s = p[f];
        p[f] = p[l - f - 1], p[l - f - 1] = s, s = w[f], w[f] = -w[l - f - 1], w[l - f - 1] = -s;
      }
    }, "conjugate"), O.prototype.normalize13b = a(function (p, w) {
      for (var l = 0, f = 0; f < w / 2; f++) {
        var s = Math.round(p[2 * f + 1] / w) * 8192 + Math.round(p[2 * f] / w) + l;
        p[f] = s & 67108863, s < 67108864 ? l = 0 : l = s / 67108864 | 0;
      }

      return p;
    }, "normalize13b"), O.prototype.convert13b = a(function (p, w, l, f) {
      for (var s = 0, d = 0; d < w; d++) s = s + (p[d] | 0), l[2 * d] = s & 8191, s = s >>> 13, l[2 * d + 1] = s & 8191, s = s >>> 13;

      for (d = 2 * w; d < f; ++d) l[d] = 0;

      r(s === 0), r((s & -8192) === 0);
    }, "convert13b"), O.prototype.stub = a(function (p) {
      for (var w = new Array(p), l = 0; l < p; l++) w[l] = 0;

      return w;
    }, "stub"), O.prototype.mulp = a(function (p, w, l) {
      var f = 2 * this.guessLen13b(p.length, w.length),
          s = this.makeRBT(f),
          d = this.stub(f),
          v = new Array(f),
          c = new Array(f),
          u = new Array(f),
          m = new Array(f),
          g = new Array(f),
          o = new Array(f),
          y = l.words;
      y.length = f, this.convert13b(p.words, p.length, v, f), this.convert13b(w.words, w.length, m, f), this.transform(v, d, c, u, f, s), this.transform(m, d, g, o, f, s);

      for (var B = 0; B < f; B++) {
        var I = c[B] * g[B] - u[B] * o[B];
        u[B] = c[B] * o[B] + u[B] * g[B], c[B] = I;
      }

      return this.conjugate(c, u, f), this.transform(c, u, y, d, f, s), this.conjugate(y, d, f), this.normalize13b(y, f), l.negative = p.negative ^ w.negative, l.length = p.length + w.length, l.strip();
    }, "mulp"), i.prototype.mul = a(function (p) {
      var w = new i(null);
      return w.words = new Array(this.length + p.length), this.mulTo(p, w);
    }, "mul"), i.prototype.mulf = a(function (p) {
      var w = new i(null);
      return w.words = new Array(this.length + p.length), ye(this, p, w);
    }, "mulf"), i.prototype.imul = a(function (p) {
      return this.clone().mulTo(p, this);
    }, "imul"), i.prototype.imuln = a(function (p) {
      r(typeof p == "number"), r(p < 67108864);

      for (var w = 0, l = 0; l < this.length; l++) {
        var f = (this.words[l] | 0) * p,
            s = (f & 67108863) + (w & 67108863);
        w >>= 26, w += f / 67108864 | 0, w += s >>> 26, this.words[l] = s & 67108863;
      }

      return w !== 0 && (this.words[l] = w, this.length++), this;
    }, "imuln"), i.prototype.muln = a(function (p) {
      return this.clone().imuln(p);
    }, "muln"), i.prototype.sqr = a(function () {
      return this.mul(this);
    }, "sqr"), i.prototype.isqr = a(function () {
      return this.imul(this.clone());
    }, "isqr"), i.prototype.pow = a(function (p) {
      var w = q(p);
      if (w.length === 0) return new i(1);

      for (var l = this, f = 0; f < w.length && w[f] === 0; f++, l = l.sqr());

      if (++f < w.length) for (var s = l.sqr(); f < w.length; f++, s = s.sqr()) w[f] !== 0 && (l = l.mul(s));
      return l;
    }, "pow"), i.prototype.iushln = a(function (p) {
      r(typeof p == "number" && p >= 0);
      var w = p % 26,
          l = (p - w) / 26,
          f = 67108863 >>> 26 - w << 26 - w,
          s;

      if (w !== 0) {
        var d = 0;

        for (s = 0; s < this.length; s++) {
          var v = this.words[s] & f,
              c = (this.words[s] | 0) - v << w;
          this.words[s] = c | d, d = v >>> 26 - w;
        }

        d && (this.words[s] = d, this.length++);
      }

      if (l !== 0) {
        for (s = this.length - 1; s >= 0; s--) this.words[s + l] = this.words[s];

        for (s = 0; s < l; s++) this.words[s] = 0;

        this.length += l;
      }

      return this.strip();
    }, "iushln"), i.prototype.ishln = a(function (p) {
      return r(this.negative === 0), this.iushln(p);
    }, "ishln"), i.prototype.iushrn = a(function (p, w, l) {
      r(typeof p == "number" && p >= 0);
      var f;
      w ? f = (w - w % 26) / 26 : f = 0;
      var s = p % 26,
          d = Math.min((p - s) / 26, this.length),
          v = 67108863 ^ 67108863 >>> s << s,
          c = l;

      if (f -= d, f = Math.max(0, f), c) {
        for (var u = 0; u < d; u++) c.words[u] = this.words[u];

        c.length = d;
      }

      if (d !== 0) if (this.length > d) for (this.length -= d, u = 0; u < this.length; u++) this.words[u] = this.words[u + d];else this.words[0] = 0, this.length = 1;
      var m = 0;

      for (u = this.length - 1; u >= 0 && (m !== 0 || u >= f); u--) {
        var g = this.words[u] | 0;
        this.words[u] = m << 26 - s | g >>> s, m = g & v;
      }

      return c && m !== 0 && (c.words[c.length++] = m), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
    }, "iushrn"), i.prototype.ishrn = a(function (p, w, l) {
      return r(this.negative === 0), this.iushrn(p, w, l);
    }, "ishrn"), i.prototype.shln = a(function (p) {
      return this.clone().ishln(p);
    }, "shln"), i.prototype.ushln = a(function (p) {
      return this.clone().iushln(p);
    }, "ushln"), i.prototype.shrn = a(function (p) {
      return this.clone().ishrn(p);
    }, "shrn"), i.prototype.ushrn = a(function (p) {
      return this.clone().iushrn(p);
    }, "ushrn"), i.prototype.testn = a(function (p) {
      r(typeof p == "number" && p >= 0);
      var w = p % 26,
          l = (p - w) / 26,
          f = 1 << w;
      if (this.length <= l) return !1;
      var s = this.words[l];
      return !!(s & f);
    }, "testn"), i.prototype.imaskn = a(function (p) {
      r(typeof p == "number" && p >= 0);
      var w = p % 26,
          l = (p - w) / 26;
      if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= l) return this;

      if (w !== 0 && l++, this.length = Math.min(l, this.length), w !== 0) {
        var f = 67108863 ^ 67108863 >>> w << w;
        this.words[this.length - 1] &= f;
      }

      return this.strip();
    }, "imaskn"), i.prototype.maskn = a(function (p) {
      return this.clone().imaskn(p);
    }, "maskn"), i.prototype.iaddn = a(function (p) {
      return r(typeof p == "number"), r(p < 67108864), p < 0 ? this.isubn(-p) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < p ? (this.words[0] = p - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(p), this.negative = 1, this) : this._iaddn(p);
    }, "iaddn"), i.prototype._iaddn = a(function (p) {
      this.words[0] += p;

      for (var w = 0; w < this.length && this.words[w] >= 67108864; w++) this.words[w] -= 67108864, w === this.length - 1 ? this.words[w + 1] = 1 : this.words[w + 1]++;

      return this.length = Math.max(this.length, w + 1), this;
    }, "_iaddn"), i.prototype.isubn = a(function (p) {
      if (r(typeof p == "number"), r(p < 67108864), p < 0) return this.iaddn(-p);
      if (this.negative !== 0) return this.negative = 0, this.iaddn(p), this.negative = 1, this;
      if (this.words[0] -= p, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;else for (var w = 0; w < this.length && this.words[w] < 0; w++) this.words[w] += 67108864, this.words[w + 1] -= 1;
      return this.strip();
    }, "isubn"), i.prototype.addn = a(function (p) {
      return this.clone().iaddn(p);
    }, "addn"), i.prototype.subn = a(function (p) {
      return this.clone().isubn(p);
    }, "subn"), i.prototype.iabs = a(function () {
      return this.negative = 0, this;
    }, "iabs"), i.prototype.abs = a(function () {
      return this.clone().iabs();
    }, "abs"), i.prototype._ishlnsubmul = a(function (p, w, l) {
      var f = p.length + l,
          s;

      this._expand(f);

      var d,
          v = 0;

      for (s = 0; s < p.length; s++) {
        d = (this.words[s + l] | 0) + v;
        var c = (p.words[s] | 0) * w;
        d -= c & 67108863, v = (d >> 26) - (c / 67108864 | 0), this.words[s + l] = d & 67108863;
      }

      for (; s < this.length - l; s++) d = (this.words[s + l] | 0) + v, v = d >> 26, this.words[s + l] = d & 67108863;

      if (v === 0) return this.strip();

      for (r(v === -1), v = 0, s = 0; s < this.length; s++) d = -(this.words[s] | 0) + v, v = d >> 26, this.words[s] = d & 67108863;

      return this.negative = 1, this.strip();
    }, "_ishlnsubmul"), i.prototype._wordDiv = a(function (p, w) {
      var l = this.length - p.length,
          f = this.clone(),
          s = p,
          d = s.words[s.length - 1] | 0,
          v = this._countBits(d);

      l = 26 - v, l !== 0 && (s = s.ushln(l), f.iushln(l), d = s.words[s.length - 1] | 0);
      var c = f.length - s.length,
          u;

      if (w !== "mod") {
        u = new i(null), u.length = c + 1, u.words = new Array(u.length);

        for (var m = 0; m < u.length; m++) u.words[m] = 0;
      }

      var g = f.clone()._ishlnsubmul(s, 1, c);

      g.negative === 0 && (f = g, u && (u.words[c] = 1));

      for (var o = c - 1; o >= 0; o--) {
        var y = (f.words[s.length + o] | 0) * 67108864 + (f.words[s.length + o - 1] | 0);

        for (y = Math.min(y / d | 0, 67108863), f._ishlnsubmul(s, y, o); f.negative !== 0;) y--, f.negative = 0, f._ishlnsubmul(s, 1, o), f.isZero() || (f.negative ^= 1);

        u && (u.words[o] = y);
      }

      return u && u.strip(), f.strip(), w !== "div" && l !== 0 && f.iushrn(l), {
        div: u || null,
        mod: f
      };
    }, "_wordDiv"), i.prototype.divmod = a(function (p, w, l) {
      if (r(!p.isZero()), this.isZero()) return {
        div: new i(0),
        mod: new i(0)
      };
      var f, s, d;
      return this.negative !== 0 && p.negative === 0 ? (d = this.neg().divmod(p, w), w !== "mod" && (f = d.div.neg()), w !== "div" && (s = d.mod.neg(), l && s.negative !== 0 && s.iadd(p)), {
        div: f,
        mod: s
      }) : this.negative === 0 && p.negative !== 0 ? (d = this.divmod(p.neg(), w), w !== "mod" && (f = d.div.neg()), {
        div: f,
        mod: d.mod
      }) : (this.negative & p.negative) !== 0 ? (d = this.neg().divmod(p.neg(), w), w !== "div" && (s = d.mod.neg(), l && s.negative !== 0 && s.isub(p)), {
        div: d.div,
        mod: s
      }) : p.length > this.length || this.cmp(p) < 0 ? {
        div: new i(0),
        mod: this
      } : p.length === 1 ? w === "div" ? {
        div: this.divn(p.words[0]),
        mod: null
      } : w === "mod" ? {
        div: null,
        mod: new i(this.modn(p.words[0]))
      } : {
        div: this.divn(p.words[0]),
        mod: new i(this.modn(p.words[0]))
      } : this._wordDiv(p, w);
    }, "divmod"), i.prototype.div = a(function (p) {
      return this.divmod(p, "div", !1).div;
    }, "div"), i.prototype.mod = a(function (p) {
      return this.divmod(p, "mod", !1).mod;
    }, "mod"), i.prototype.umod = a(function (p) {
      return this.divmod(p, "mod", !0).mod;
    }, "umod"), i.prototype.divRound = a(function (p) {
      var w = this.divmod(p);
      if (w.mod.isZero()) return w.div;
      var l = w.div.negative !== 0 ? w.mod.isub(p) : w.mod,
          f = p.ushrn(1),
          s = p.andln(1),
          d = l.cmp(f);
      return d < 0 || s === 1 && d === 0 ? w.div : w.div.negative !== 0 ? w.div.isubn(1) : w.div.iaddn(1);
    }, "divRound"), i.prototype.modn = a(function (p) {
      r(p <= 67108863);

      for (var w = (1 << 26) % p, l = 0, f = this.length - 1; f >= 0; f--) l = (w * l + (this.words[f] | 0)) % p;

      return l;
    }, "modn"), i.prototype.idivn = a(function (p) {
      r(p <= 67108863);

      for (var w = 0, l = this.length - 1; l >= 0; l--) {
        var f = (this.words[l] | 0) + w * 67108864;
        this.words[l] = f / p | 0, w = f % p;
      }

      return this.strip();
    }, "idivn"), i.prototype.divn = a(function (p) {
      return this.clone().idivn(p);
    }, "divn"), i.prototype.egcd = a(function (p) {
      r(p.negative === 0), r(!p.isZero());
      var w = this,
          l = p.clone();
      w.negative !== 0 ? w = w.umod(p) : w = w.clone();

      for (var f = new i(1), s = new i(0), d = new i(0), v = new i(1), c = 0; w.isEven() && l.isEven();) w.iushrn(1), l.iushrn(1), ++c;

      for (var u = l.clone(), m = w.clone(); !w.isZero();) {
        for (var g = 0, o = 1; (w.words[0] & o) === 0 && g < 26; ++g, o <<= 1);

        if (g > 0) for (w.iushrn(g); g-- > 0;) (f.isOdd() || s.isOdd()) && (f.iadd(u), s.isub(m)), f.iushrn(1), s.iushrn(1);

        for (var y = 0, B = 1; (l.words[0] & B) === 0 && y < 26; ++y, B <<= 1);

        if (y > 0) for (l.iushrn(y); y-- > 0;) (d.isOdd() || v.isOdd()) && (d.iadd(u), v.isub(m)), d.iushrn(1), v.iushrn(1);
        w.cmp(l) >= 0 ? (w.isub(l), f.isub(d), s.isub(v)) : (l.isub(w), d.isub(f), v.isub(s));
      }

      return {
        a: d,
        b: v,
        gcd: l.iushln(c)
      };
    }, "egcd"), i.prototype._invmp = a(function (p) {
      r(p.negative === 0), r(!p.isZero());
      var w = this,
          l = p.clone();
      w.negative !== 0 ? w = w.umod(p) : w = w.clone();

      for (var f = new i(1), s = new i(0), d = l.clone(); w.cmpn(1) > 0 && l.cmpn(1) > 0;) {
        for (var v = 0, c = 1; (w.words[0] & c) === 0 && v < 26; ++v, c <<= 1);

        if (v > 0) for (w.iushrn(v); v-- > 0;) f.isOdd() && f.iadd(d), f.iushrn(1);

        for (var u = 0, m = 1; (l.words[0] & m) === 0 && u < 26; ++u, m <<= 1);

        if (u > 0) for (l.iushrn(u); u-- > 0;) s.isOdd() && s.iadd(d), s.iushrn(1);
        w.cmp(l) >= 0 ? (w.isub(l), f.isub(s)) : (l.isub(w), s.isub(f));
      }

      var g;
      return w.cmpn(1) === 0 ? g = f : g = s, g.cmpn(0) < 0 && g.iadd(p), g;
    }, "_invmp"), i.prototype.gcd = a(function (p) {
      if (this.isZero()) return p.abs();
      if (p.isZero()) return this.abs();
      var w = this.clone(),
          l = p.clone();
      w.negative = 0, l.negative = 0;

      for (var f = 0; w.isEven() && l.isEven(); f++) w.iushrn(1), l.iushrn(1);

      do {
        for (; w.isEven();) w.iushrn(1);

        for (; l.isEven();) l.iushrn(1);

        var s = w.cmp(l);

        if (s < 0) {
          var d = w;
          w = l, l = d;
        } else if (s === 0 || l.cmpn(1) === 0) break;

        w.isub(l);
      } while (!0);

      return l.iushln(f);
    }, "gcd"), i.prototype.invm = a(function (p) {
      return this.egcd(p).a.umod(p);
    }, "invm"), i.prototype.isEven = a(function () {
      return (this.words[0] & 1) === 0;
    }, "isEven"), i.prototype.isOdd = a(function () {
      return (this.words[0] & 1) === 1;
    }, "isOdd"), i.prototype.andln = a(function (p) {
      return this.words[0] & p;
    }, "andln"), i.prototype.bincn = a(function (p) {
      r(typeof p == "number");
      var w = p % 26,
          l = (p - w) / 26,
          f = 1 << w;
      if (this.length <= l) return this._expand(l + 1), this.words[l] |= f, this;

      for (var s = f, d = l; s !== 0 && d < this.length; d++) {
        var v = this.words[d] | 0;
        v += s, s = v >>> 26, v &= 67108863, this.words[d] = v;
      }

      return s !== 0 && (this.words[d] = s, this.length++), this;
    }, "bincn"), i.prototype.isZero = a(function () {
      return this.length === 1 && this.words[0] === 0;
    }, "isZero"), i.prototype.cmpn = a(function (p) {
      var w = p < 0;
      if (this.negative !== 0 && !w) return -1;
      if (this.negative === 0 && w) return 1;
      this.strip();
      var l;
      if (this.length > 1) l = 1;else {
        w && (p = -p), r(p <= 67108863, "Number is too big");
        var f = this.words[0] | 0;
        l = f === p ? 0 : f < p ? -1 : 1;
      }
      return this.negative !== 0 ? -l | 0 : l;
    }, "cmpn"), i.prototype.cmp = a(function (p) {
      if (this.negative !== 0 && p.negative === 0) return -1;
      if (this.negative === 0 && p.negative !== 0) return 1;
      var w = this.ucmp(p);
      return this.negative !== 0 ? -w | 0 : w;
    }, "cmp"), i.prototype.ucmp = a(function (p) {
      if (this.length > p.length) return 1;
      if (this.length < p.length) return -1;

      for (var w = 0, l = this.length - 1; l >= 0; l--) {
        var f = this.words[l] | 0,
            s = p.words[l] | 0;

        if (f !== s) {
          f < s ? w = -1 : f > s && (w = 1);
          break;
        }
      }

      return w;
    }, "ucmp"), i.prototype.gtn = a(function (p) {
      return this.cmpn(p) === 1;
    }, "gtn"), i.prototype.gt = a(function (p) {
      return this.cmp(p) === 1;
    }, "gt"), i.prototype.gten = a(function (p) {
      return this.cmpn(p) >= 0;
    }, "gten"), i.prototype.gte = a(function (p) {
      return this.cmp(p) >= 0;
    }, "gte"), i.prototype.ltn = a(function (p) {
      return this.cmpn(p) === -1;
    }, "ltn"), i.prototype.lt = a(function (p) {
      return this.cmp(p) === -1;
    }, "lt"), i.prototype.lten = a(function (p) {
      return this.cmpn(p) <= 0;
    }, "lten"), i.prototype.lte = a(function (p) {
      return this.cmp(p) <= 0;
    }, "lte"), i.prototype.eqn = a(function (p) {
      return this.cmpn(p) === 0;
    }, "eqn"), i.prototype.eq = a(function (p) {
      return this.cmp(p) === 0;
    }, "eq"), i.red = a(function (p) {
      return new Ae(p);
    }, "red"), i.prototype.toRed = a(function (p) {
      return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), p.convertTo(this)._forceRed(p);
    }, "toRed"), i.prototype.fromRed = a(function () {
      return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, "fromRed"), i.prototype._forceRed = a(function (p) {
      return this.red = p, this;
    }, "_forceRed"), i.prototype.forceRed = a(function (p) {
      return r(!this.red, "Already a number in reduction context"), this._forceRed(p);
    }, "forceRed"), i.prototype.redAdd = a(function (p) {
      return r(this.red, "redAdd works only with red numbers"), this.red.add(this, p);
    }, "redAdd"), i.prototype.redIAdd = a(function (p) {
      return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, p);
    }, "redIAdd"), i.prototype.redSub = a(function (p) {
      return r(this.red, "redSub works only with red numbers"), this.red.sub(this, p);
    }, "redSub"), i.prototype.redISub = a(function (p) {
      return r(this.red, "redISub works only with red numbers"), this.red.isub(this, p);
    }, "redISub"), i.prototype.redShl = a(function (p) {
      return r(this.red, "redShl works only with red numbers"), this.red.shl(this, p);
    }, "redShl"), i.prototype.redMul = a(function (p) {
      return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, p), this.red.mul(this, p);
    }, "redMul"), i.prototype.redIMul = a(function (p) {
      return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, p), this.red.imul(this, p);
    }, "redIMul"), i.prototype.redSqr = a(function () {
      return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, "redSqr"), i.prototype.redISqr = a(function () {
      return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, "redISqr"), i.prototype.redSqrt = a(function () {
      return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, "redSqrt"), i.prototype.redInvm = a(function () {
      return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, "redInvm"), i.prototype.redNeg = a(function () {
      return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, "redNeg"), i.prototype.redPow = a(function (p) {
      return r(this.red && !p.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, p);
    }, "redPow");
    var _e = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };

    function Ie(E, p) {
      this.name = E, this.p = new i(p, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }

    a(Ie, "MPrime"), Ie.prototype._tmp = a(function () {
      var p = new i(null);
      return p.words = new Array(Math.ceil(this.n / 13)), p;
    }, "_tmp"), Ie.prototype.ireduce = a(function (p) {
      var w = p,
          l;

      do this.split(w, this.tmp), w = this.imulK(w), w = w.iadd(this.tmp), l = w.bitLength(); while (l > this.n);

      var f = l < this.n ? -1 : w.ucmp(this.p);
      return f === 0 ? (w.words[0] = 0, w.length = 1) : f > 0 ? w.isub(this.p) : w.strip !== void 0 ? w.strip() : w._strip(), w;
    }, "ireduce"), Ie.prototype.split = a(function (p, w) {
      p.iushrn(this.n, 0, w);
    }, "split"), Ie.prototype.imulK = a(function (p) {
      return p.imul(this.k);
    }, "imulK");

    function Me() {
      Ie.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }

    a(Me, "K256"), n(Me, Ie), Me.prototype.split = a(function (p, w) {
      for (var l = 4194303, f = Math.min(p.length, 9), s = 0; s < f; s++) w.words[s] = p.words[s];

      if (w.length = f, p.length <= 9) {
        p.words[0] = 0, p.length = 1;
        return;
      }

      var d = p.words[9];

      for (w.words[w.length++] = d & l, s = 10; s < p.length; s++) {
        var v = p.words[s] | 0;
        p.words[s - 10] = (v & l) << 4 | d >>> 22, d = v;
      }

      d >>>= 22, p.words[s - 10] = d, d === 0 && p.length > 10 ? p.length -= 10 : p.length -= 9;
    }, "split"), Me.prototype.imulK = a(function (p) {
      p.words[p.length] = 0, p.words[p.length + 1] = 0, p.length += 2;

      for (var w = 0, l = 0; l < p.length; l++) {
        var f = p.words[l] | 0;
        w += f * 977, p.words[l] = w & 67108863, w = f * 64 + (w / 67108864 | 0);
      }

      return p.words[p.length - 1] === 0 && (p.length--, p.words[p.length - 1] === 0 && p.length--), p;
    }, "imulK");

    function De() {
      Ie.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }

    a(De, "P224"), n(De, Ie);

    function Se() {
      Ie.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }

    a(Se, "P192"), n(Se, Ie);

    function Ne() {
      Ie.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }

    a(Ne, "P25519"), n(Ne, Ie), Ne.prototype.imulK = a(function (p) {
      for (var w = 0, l = 0; l < p.length; l++) {
        var f = (p.words[l] | 0) * 19 + w,
            s = f & 67108863;
        f >>>= 26, p.words[l] = s, w = f;
      }

      return w !== 0 && (p.words[p.length++] = w), p;
    }, "imulK"), i._prime = a(function (p) {
      if (_e[p]) return _e[p];
      var w;
      if (p === "k256") w = new Me();else if (p === "p224") w = new De();else if (p === "p192") w = new Se();else if (p === "p25519") w = new Ne();else throw new Error("Unknown prime " + p);
      return _e[p] = w, w;
    }, "prime");

    function Ae(E) {
      if (typeof E == "string") {
        var p = i._prime(E);

        this.m = p.p, this.prime = p;
      } else r(E.gtn(1), "modulus must be greater than 1"), this.m = E, this.prime = null;
    }

    a(Ae, "Red"), Ae.prototype._verify1 = a(function (p) {
      r(p.negative === 0, "red works only with positives"), r(p.red, "red works only with red numbers");
    }, "_verify1"), Ae.prototype._verify2 = a(function (p, w) {
      r((p.negative | w.negative) === 0, "red works only with positives"), r(p.red && p.red === w.red, "red works only with red numbers");
    }, "_verify2"), Ae.prototype.imod = a(function (p) {
      return this.prime ? this.prime.ireduce(p)._forceRed(this) : p.umod(this.m)._forceRed(this);
    }, "imod"), Ae.prototype.neg = a(function (p) {
      return p.isZero() ? p.clone() : this.m.sub(p)._forceRed(this);
    }, "neg"), Ae.prototype.add = a(function (p, w) {
      this._verify2(p, w);

      var l = p.add(w);
      return l.cmp(this.m) >= 0 && l.isub(this.m), l._forceRed(this);
    }, "add"), Ae.prototype.iadd = a(function (p, w) {
      this._verify2(p, w);

      var l = p.iadd(w);
      return l.cmp(this.m) >= 0 && l.isub(this.m), l;
    }, "iadd"), Ae.prototype.sub = a(function (p, w) {
      this._verify2(p, w);

      var l = p.sub(w);
      return l.cmpn(0) < 0 && l.iadd(this.m), l._forceRed(this);
    }, "sub"), Ae.prototype.isub = a(function (p, w) {
      this._verify2(p, w);

      var l = p.isub(w);
      return l.cmpn(0) < 0 && l.iadd(this.m), l;
    }, "isub"), Ae.prototype.shl = a(function (p, w) {
      return this._verify1(p), this.imod(p.ushln(w));
    }, "shl"), Ae.prototype.imul = a(function (p, w) {
      return this._verify2(p, w), this.imod(p.imul(w));
    }, "imul"), Ae.prototype.mul = a(function (p, w) {
      return this._verify2(p, w), this.imod(p.mul(w));
    }, "mul"), Ae.prototype.isqr = a(function (p) {
      return this.imul(p, p.clone());
    }, "isqr"), Ae.prototype.sqr = a(function (p) {
      return this.mul(p, p);
    }, "sqr"), Ae.prototype.sqrt = a(function (p) {
      if (p.isZero()) return p.clone();
      var w = this.m.andln(3);

      if (r(w % 2 === 1), w === 3) {
        var l = this.m.add(new i(1)).iushrn(2);
        return this.pow(p, l);
      }

      for (var f = this.m.subn(1), s = 0; !f.isZero() && f.andln(1) === 0;) s++, f.iushrn(1);

      r(!f.isZero());
      var d = new i(1).toRed(this),
          v = d.redNeg(),
          c = this.m.subn(1).iushrn(1),
          u = this.m.bitLength();

      for (u = new i(2 * u * u).toRed(this); this.pow(u, c).cmp(v) !== 0;) u.redIAdd(v);

      for (var m = this.pow(u, f), g = this.pow(p, f.addn(1).iushrn(1)), o = this.pow(p, f), y = s; o.cmp(d) !== 0;) {
        for (var B = o, I = 0; B.cmp(d) !== 0; I++) B = B.redSqr();

        r(I < y);
        var R = this.pow(m, new i(1).iushln(y - I - 1));
        g = g.redMul(R), m = R.redSqr(), o = o.redMul(m), y = I;
      }

      return g;
    }, "sqrt"), Ae.prototype.invm = a(function (p) {
      var w = p._invmp(this.m);

      return w.negative !== 0 ? (w.negative = 0, this.imod(w).redNeg()) : this.imod(w);
    }, "invm"), Ae.prototype.pow = a(function (p, w) {
      if (w.isZero()) return new i(1).toRed(this);
      if (w.cmpn(1) === 0) return p.clone();
      var l = 4,
          f = new Array(1 << l);
      f[0] = new i(1).toRed(this), f[1] = p;

      for (var s = 2; s < f.length; s++) f[s] = this.mul(f[s - 1], p);

      var d = f[0],
          v = 0,
          c = 0,
          u = w.bitLength() % 26;

      for (u === 0 && (u = 26), s = w.length - 1; s >= 0; s--) {
        for (var m = w.words[s], g = u - 1; g >= 0; g--) {
          var o = m >> g & 1;

          if (d !== f[0] && (d = this.sqr(d)), o === 0 && v === 0) {
            c = 0;
            continue;
          }

          v <<= 1, v |= o, c++, !(c !== l && (s !== 0 || g !== 0)) && (d = this.mul(d, f[v]), c = 0, v = 0);
        }

        u = 26;
      }

      return d;
    }, "pow"), Ae.prototype.convertTo = a(function (p) {
      var w = p.umod(this.m);
      return w === p ? w.clone() : w;
    }, "convertTo"), Ae.prototype.convertFrom = a(function (p) {
      var w = p.clone();
      return w.red = null, w;
    }, "convertFrom"), i.mont = a(function (p) {
      return new Le(p);
    }, "mont");

    function Le(E) {
      Ae.call(this, E), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }

    a(Le, "Mont"), n(Le, Ae), Le.prototype.convertTo = a(function (p) {
      return this.imod(p.ushln(this.shift));
    }, "convertTo"), Le.prototype.convertFrom = a(function (p) {
      var w = this.imod(p.mul(this.rinv));
      return w.red = null, w;
    }, "convertFrom"), Le.prototype.imul = a(function (p, w) {
      if (p.isZero() || w.isZero()) return p.words[0] = 0, p.length = 1, p;
      var l = p.imul(w),
          f = l.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          s = l.isub(f).iushrn(this.shift),
          d = s;
      return s.cmp(this.m) >= 0 ? d = s.isub(this.m) : s.cmpn(0) < 0 && (d = s.iadd(this.m)), d._forceRed(this);
    }, "imul"), Le.prototype.mul = a(function (p, w) {
      if (p.isZero() || w.isZero()) return new i(0)._forceRed(this);
      var l = p.mul(w),
          f = l.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          s = l.isub(f).iushrn(this.shift),
          d = s;
      return s.cmp(this.m) >= 0 ? d = s.isub(this.m) : s.cmpn(0) < 0 && (d = s.iadd(this.m)), d._forceRed(this);
    }, "mul"), Le.prototype.invm = a(function (p) {
      var w = this.imod(p._invmp(this.m).mul(this.r2));
      return w._forceRed(this);
    }, "invm");
  })(typeof D0 > "u" || D0, $u);
});
var zn = D((im, C0) => {
  var P0;
  C0.exports = a(function (e) {
    return P0 || (P0 = new Xr(null)), P0.generate(e);
  }, "rand");

  function Xr(t) {
    this.rand = t;
  }

  a(Xr, "Rand");
  C0.exports.Rand = Xr;
  Xr.prototype.generate = a(function (e) {
    return this._rand(e);
  }, "generate");
  Xr.prototype._rand = a(function (e) {
    if (this.rand.getBytes) return this.rand.getBytes(e);

    for (var r = new Uint8Array(e), n = 0; n < r.length; n++) r[n] = this.rand.getByte();

    return r;
  }, "_rand");
  if (typeof self == "object") self.crypto && self.crypto.getRandomValues ? Xr.prototype._rand = a(function (e) {
    var r = new Uint8Array(e);
    return self.crypto.getRandomValues(r), r;
  }, "_rand") : self.msCrypto && self.msCrypto.getRandomValues ? Xr.prototype._rand = a(function (e) {
    var r = new Uint8Array(e);
    return self.msCrypto.getRandomValues(r), r;
  }, "_rand") : typeof window == "object" && (Xr.prototype._rand = function () {
    throw new Error("Not implemented yet");
  });else try {
    if (T0 = __crypto$, typeof T0.randomBytes != "function") throw new Error("Not supported");
    Xr.prototype._rand = a(function (e) {
      return T0.randomBytes(e);
    }, "_rand");
  } catch {}
  var T0;
});
var N0 = D((fm, Qu) => {
  var _i = Ke(),
      Tb = zn();

  function wi(t) {
    this.rand = t || new Tb.Rand();
  }

  a(wi, "MillerRabin");
  Qu.exports = wi;
  wi.create = a(function (e) {
    return new wi(e);
  }, "create");
  wi.prototype._randbelow = a(function (e) {
    var r = e.bitLength(),
        n = Math.ceil(r / 8);

    do var i = new _i(this.rand.generate(n)); while (i.cmp(e) >= 0);

    return i;
  }, "_randbelow");
  wi.prototype._randrange = a(function (e, r) {
    var n = r.sub(e);
    return e.add(this._randbelow(n));
  }, "_randrange");
  wi.prototype.test = a(function (e, r, n) {
    var i = e.bitLength(),
        h = _i.mont(e),
        b = new _i(1).toRed(h);

    r || (r = Math.max(1, i / 48 | 0));

    for (var _ = e.subn(1), x = 0; !_.testn(x); x++);

    for (var M = e.shrn(x), S = _.toRed(h), A = !0; r > 0; r--) {
      var q = this._randrange(new _i(2), _);

      n && n(q);
      var k = q.toRed(h).redPow(M);

      if (!(k.cmp(b) === 0 || k.cmp(S) === 0)) {
        for (var P = 1; P < x; P++) {
          if (k = k.redSqr(), k.cmp(b) === 0) return !1;
          if (k.cmp(S) === 0) break;
        }

        if (P === x) return !1;
      }
    }

    return A;
  }, "test");
  wi.prototype.getDivisor = a(function (e, r) {
    var n = e.bitLength(),
        i = _i.mont(e),
        h = new _i(1).toRed(i);

    r || (r = Math.max(1, n / 48 | 0));

    for (var b = e.subn(1), _ = 0; !b.testn(_); _++);

    for (var x = e.shrn(_), M = b.toRed(i); r > 0; r--) {
      var S = this._randrange(new _i(2), b),
          A = e.gcd(S);

      if (A.cmpn(1) !== 0) return A;
      var q = S.toRed(i).redPow(x);

      if (!(q.cmp(h) === 0 || q.cmp(M) === 0)) {
        for (var k = 1; k < _; k++) {
          if (q = q.redSqr(), q.cmp(h) === 0) return q.fromRed().subn(1).gcd(e);
          if (q.cmp(M) === 0) break;
        }

        if (k === _) return q = q.redSqr(), q.fromRed().subn(1).gcd(e);
      }
    }

    return !1;
  }, "getDivisor");
});
var F0 = D((hm, rd) => {
  var Cb = ni();
  rd.exports = H0;
  H0.simpleSieve = z0;
  H0.fermatTest = U0;
  var Xe = Ke(),
      Nb = new Xe(24),
      Lb = N0(),
      ed = new Lb(),
      Ob = new Xe(1),
      O0 = new Xe(2),
      zb = new Xe(5),
      nm = new Xe(16),
      am = new Xe(8),
      Ub = new Xe(10),
      Hb = new Xe(3),
      sm = new Xe(7),
      Fb = new Xe(11),
      td = new Xe(4),
      om = new Xe(12),
      L0 = null;

  function Kb() {
    if (L0 !== null) return L0;
    var t = 1048576,
        e = [];
    e[0] = 2;

    for (var r = 1, n = 3; n < t; n += 2) {
      for (var i = Math.ceil(Math.sqrt(n)), h = 0; h < r && e[h] <= i && n % e[h] !== 0; h++);

      r !== h && e[h] <= i || (e[r++] = n);
    }

    return L0 = e, e;
  }

  a(Kb, "_getPrimes");

  function z0(t) {
    for (var e = Kb(), r = 0; r < e.length; r++) if (t.modn(e[r]) === 0) return t.cmpn(e[r]) === 0;

    return !0;
  }

  a(z0, "simpleSieve");

  function U0(t) {
    var e = Xe.mont(t);
    return O0.toRed(e).redPow(t.subn(1)).fromRed().cmpn(1) === 0;
  }

  a(U0, "fermatTest");

  function H0(t, e) {
    if (t < 16) return e === 2 || e === 5 ? new Xe([140, 123]) : new Xe([140, 39]);
    e = new Xe(e);

    for (var r, n;;) {
      for (r = new Xe(Cb(Math.ceil(t / 8))); r.bitLength() > t;) r.ishrn(1);

      if (r.isEven() && r.iadd(Ob), r.testn(1) || r.iadd(O0), e.cmp(O0)) {
        if (!e.cmp(zb)) for (; r.mod(Ub).cmp(Hb);) r.iadd(td);
      } else for (; r.mod(Nb).cmp(Fb);) r.iadd(td);

      if (n = r.shrn(1), z0(n) && z0(r) && U0(n) && U0(r) && ed.test(n) && ed.test(r)) return r;
    }
  }

  a(H0, "findPrime");
});
var id = D((um, jb) => {
  jb.exports = {
    modp1: {
      gen: "02",
      prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"
    },
    modp2: {
      gen: "02",
      prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"
    },
    modp5: {
      gen: "02",
      prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"
    },
    modp14: {
      gen: "02",
      prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"
    },
    modp15: {
      gen: "02",
      prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"
    },
    modp16: {
      gen: "02",
      prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"
    },
    modp17: {
      gen: "02",
      prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"
    },
    modp18: {
      gen: "02",
      prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"
    }
  };
});
var sd = D((dm, ad) => {
  var gt = Ke(),
      Wb = N0(),
      fd = new Wb(),
      Vb = new gt(24),
      Zb = new gt(11),
      Gb = new gt(10),
      Xb = new gt(3),
      Yb = new gt(7),
      nd = F0(),
      Jb = ni();
  ad.exports = _r;

  function $b(t, e) {
    return e = e || "utf8", __Buffer$.isBuffer(t) || (t = new __Buffer$(t, e)), this._pub = new gt(t), this;
  }

  a($b, "setPublicKey");

  function Qb(t, e) {
    return e = e || "utf8", __Buffer$.isBuffer(t) || (t = new __Buffer$(t, e)), this._priv = new gt(t), this;
  }

  a(Qb, "setPrivateKey");
  var Un = {};

  function e6(t, e) {
    var r = e.toString("hex"),
        n = [r, t.toString(16)].join("_");
    if (n in Un) return Un[n];
    var i = 0;
    if (t.isEven() || !nd.simpleSieve || !nd.fermatTest(t) || !fd.test(t)) return i += 1, r === "02" || r === "05" ? i += 8 : i += 4, Un[n] = i, i;
    fd.test(t.shrn(1)) || (i += 2);
    var h;

    switch (r) {
      case "02":
        t.mod(Vb).cmp(Zb) && (i += 8);
        break;

      case "05":
        h = t.mod(Gb), h.cmp(Xb) && h.cmp(Yb) && (i += 8);
        break;

      default:
        i += 4;
    }

    return Un[n] = i, i;
  }

  a(e6, "checkPrime");

  function _r(t, e, r) {
    this.setGenerator(e), this.__prime = new gt(t), this._prime = gt.mont(this.__prime), this._primeLen = t.length, this._pub = void 0, this._priv = void 0, this._primeCode = void 0, r ? (this.setPublicKey = $b, this.setPrivateKey = Qb) : this._primeCode = 8;
  }

  a(_r, "DH");
  Object.defineProperty(_r.prototype, "verifyError", {
    enumerable: !0,
    get: function () {
      return typeof this._primeCode != "number" && (this._primeCode = e6(this.__prime, this.__gen)), this._primeCode;
    }
  });

  _r.prototype.generateKeys = function () {
    return this._priv || (this._priv = new gt(Jb(this._primeLen))), this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(), this.getPublicKey();
  };

  _r.prototype.computeSecret = function (t) {
    t = new gt(t), t = t.toRed(this._prime);
    var e = t.redPow(this._priv).fromRed(),
        r = new __Buffer$(e.toArray()),
        n = this.getPrime();

    if (r.length < n.length) {
      var i = new __Buffer$(n.length - r.length);
      i.fill(0), r = __Buffer$.concat([i, r]);
    }

    return r;
  };

  _r.prototype.getPublicKey = a(function (e) {
    return Hn(this._pub, e);
  }, "getPublicKey");
  _r.prototype.getPrivateKey = a(function (e) {
    return Hn(this._priv, e);
  }, "getPrivateKey");

  _r.prototype.getPrime = function (t) {
    return Hn(this.__prime, t);
  };

  _r.prototype.getGenerator = function (t) {
    return Hn(this._gen, t);
  };

  _r.prototype.setGenerator = function (t, e) {
    return e = e || "utf8", __Buffer$.isBuffer(t) || (t = new __Buffer$(t, e)), this.__gen = t, this._gen = new gt(t), this;
  };

  function Hn(t, e) {
    var r = new __Buffer$(t.toArray());
    return e ? r.toString(e) : r;
  }

  a(Hn, "formatReturnValue");
});
var ud = D(Ki => {
  var t6 = F0(),
      od = id(),
      K0 = sd();

  function r6(t) {
    var e = new __Buffer$(od[t].prime, "hex"),
        r = new __Buffer$(od[t].gen, "hex");
    return new K0(e, r);
  }

  a(r6, "getDiffieHellman");
  var i6 = {
    binary: !0,
    hex: !0,
    base64: !0
  };

  function hd(t, e, r, n) {
    return __Buffer$.isBuffer(e) || i6[e] === void 0 ? hd(t, "binary", e, r) : (e = e || "binary", n = n || "binary", r = r || new __Buffer$([2]), __Buffer$.isBuffer(r) || (r = new __Buffer$(r, n)), typeof t == "number" ? new K0(t6(t, r), r, !0) : (__Buffer$.isBuffer(t) || (t = new __Buffer$(t, e)), new K0(t, r, !0)));
  }

  a(hd, "createDiffieHellman");
  Ki.DiffieHellmanGroup = Ki.createDiffieHellmanGroup = Ki.getDiffieHellman = r6;
  Ki.createDiffieHellman = Ki.DiffieHellman = hd;
});
var cd = D((dd, j0) => {
  (function (t, e) {
    "use strict";

    function r(l, f) {
      if (!l) throw new Error(f || "Assertion failed");
    }

    a(r, "assert");

    function n(l, f) {
      l.super_ = f;
      var s = a(function () {}, "TempCtor");
      s.prototype = f.prototype, l.prototype = new s(), l.prototype.constructor = l;
    }

    a(n, "inherits");

    function i(l, f, s) {
      if (i.isBN(l)) return l;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, l !== null && ((f === "le" || f === "be") && (s = f, f = 10), this._init(l || 0, f || 10, s || "be"));
    }

    a(i, "BN"), typeof t == "object" ? t.exports = i : e.BN = i, i.BN = i, i.wordSize = 26;
    var h;

    try {
      typeof window < "u" && typeof window.Buffer < "u" ? h = window.Buffer : h = __buffer$.Buffer;
    } catch {}

    i.isBN = a(function (f) {
      return f instanceof i ? !0 : f !== null && typeof f == "object" && f.constructor.wordSize === i.wordSize && Array.isArray(f.words);
    }, "isBN"), i.max = a(function (f, s) {
      return f.cmp(s) > 0 ? f : s;
    }, "max"), i.min = a(function (f, s) {
      return f.cmp(s) < 0 ? f : s;
    }, "min"), i.prototype._init = a(function (f, s, d) {
      if (typeof f == "number") return this._initNumber(f, s, d);
      if (typeof f == "object") return this._initArray(f, s, d);
      s === "hex" && (s = 16), r(s === (s | 0) && s >= 2 && s <= 36), f = f.toString().replace(/\s+/g, "");
      var v = 0;
      f[0] === "-" && (v++, this.negative = 1), v < f.length && (s === 16 ? this._parseHex(f, v, d) : (this._parseBase(f, s, v), d === "le" && this._initArray(this.toArray(), s, d)));
    }, "init"), i.prototype._initNumber = a(function (f, s, d) {
      f < 0 && (this.negative = 1, f = -f), f < 67108864 ? (this.words = [f & 67108863], this.length = 1) : f < 4503599627370496 ? (this.words = [f & 67108863, f / 67108864 & 67108863], this.length = 2) : (r(f < 9007199254740992), this.words = [f & 67108863, f / 67108864 & 67108863, 1], this.length = 3), d === "le" && this._initArray(this.toArray(), s, d);
    }, "_initNumber"), i.prototype._initArray = a(function (f, s, d) {
      if (r(typeof f.length == "number"), f.length <= 0) return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(f.length / 3), this.words = new Array(this.length);

      for (var v = 0; v < this.length; v++) this.words[v] = 0;

      var c,
          u,
          m = 0;
      if (d === "be") for (v = f.length - 1, c = 0; v >= 0; v -= 3) u = f[v] | f[v - 1] << 8 | f[v - 2] << 16, this.words[c] |= u << m & 67108863, this.words[c + 1] = u >>> 26 - m & 67108863, m += 24, m >= 26 && (m -= 26, c++);else if (d === "le") for (v = 0, c = 0; v < f.length; v += 3) u = f[v] | f[v + 1] << 8 | f[v + 2] << 16, this.words[c] |= u << m & 67108863, this.words[c + 1] = u >>> 26 - m & 67108863, m += 24, m >= 26 && (m -= 26, c++);
      return this._strip();
    }, "_initArray");

    function b(l, f) {
      var s = l.charCodeAt(f);
      if (s >= 48 && s <= 57) return s - 48;
      if (s >= 65 && s <= 70) return s - 55;
      if (s >= 97 && s <= 102) return s - 87;
      r(!1, "Invalid character in " + l);
    }

    a(b, "parseHex4Bits");

    function _(l, f, s) {
      var d = b(l, s);
      return s - 1 >= f && (d |= b(l, s - 1) << 4), d;
    }

    a(_, "parseHexByte"), i.prototype._parseHex = a(function (f, s, d) {
      this.length = Math.ceil((f.length - s) / 6), this.words = new Array(this.length);

      for (var v = 0; v < this.length; v++) this.words[v] = 0;

      var c = 0,
          u = 0,
          m;
      if (d === "be") for (v = f.length - 1; v >= s; v -= 2) m = _(f, s, v) << c, this.words[u] |= m & 67108863, c >= 18 ? (c -= 18, u += 1, this.words[u] |= m >>> 26) : c += 8;else {
        var g = f.length - s;

        for (v = g % 2 === 0 ? s + 1 : s; v < f.length; v += 2) m = _(f, s, v) << c, this.words[u] |= m & 67108863, c >= 18 ? (c -= 18, u += 1, this.words[u] |= m >>> 26) : c += 8;
      }

      this._strip();
    }, "_parseHex");

    function x(l, f, s, d) {
      for (var v = 0, c = 0, u = Math.min(l.length, s), m = f; m < u; m++) {
        var g = l.charCodeAt(m) - 48;
        v *= d, g >= 49 ? c = g - 49 + 10 : g >= 17 ? c = g - 17 + 10 : c = g, r(g >= 0 && c < d, "Invalid character"), v += c;
      }

      return v;
    }

    a(x, "parseBase"), i.prototype._parseBase = a(function (f, s, d) {
      this.words = [0], this.length = 1;

      for (var v = 0, c = 1; c <= 67108863; c *= s) v++;

      v--, c = c / s | 0;

      for (var u = f.length - d, m = u % v, g = Math.min(u, u - m) + d, o = 0, y = d; y < g; y += v) o = x(f, y, y + v, s), this.imuln(c), this.words[0] + o < 67108864 ? this.words[0] += o : this._iaddn(o);

      if (m !== 0) {
        var B = 1;

        for (o = x(f, y, f.length, s), y = 0; y < m; y++) B *= s;

        this.imuln(B), this.words[0] + o < 67108864 ? this.words[0] += o : this._iaddn(o);
      }

      this._strip();
    }, "_parseBase"), i.prototype.copy = a(function (f) {
      f.words = new Array(this.length);

      for (var s = 0; s < this.length; s++) f.words[s] = this.words[s];

      f.length = this.length, f.negative = this.negative, f.red = this.red;
    }, "copy");

    function M(l, f) {
      l.words = f.words, l.length = f.length, l.negative = f.negative, l.red = f.red;
    }

    if (a(M, "move"), i.prototype._move = a(function (f) {
      M(f, this);
    }, "_move"), i.prototype.clone = a(function () {
      var f = new i(null);
      return this.copy(f), f;
    }, "clone"), i.prototype._expand = a(function (f) {
      for (; this.length < f;) this.words[this.length++] = 0;

      return this;
    }, "_expand"), i.prototype._strip = a(function () {
      for (; this.length > 1 && this.words[this.length - 1] === 0;) this.length--;

      return this._normSign();
    }, "strip"), i.prototype._normSign = a(function () {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, "_normSign"), typeof Symbol < "u" && typeof Symbol.for == "function") try {
      i.prototype[Symbol.for("nodejs.util.inspect.custom")] = S;
    } catch {
      i.prototype.inspect = S;
    } else i.prototype.inspect = S;

    function S() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }

    a(S, "inspect");
    var A = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
        q = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        k = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    i.prototype.toString = a(function (f, s) {
      f = f || 10, s = s | 0 || 1;
      var d;

      if (f === 16 || f === "hex") {
        d = "";

        for (var v = 0, c = 0, u = 0; u < this.length; u++) {
          var m = this.words[u],
              g = ((m << v | c) & 16777215).toString(16);
          c = m >>> 24 - v & 16777215, v += 2, v >= 26 && (v -= 26, u--), c !== 0 || u !== this.length - 1 ? d = A[6 - g.length] + g + d : d = g + d;
        }

        for (c !== 0 && (d = c.toString(16) + d); d.length % s !== 0;) d = "0" + d;

        return this.negative !== 0 && (d = "-" + d), d;
      }

      if (f === (f | 0) && f >= 2 && f <= 36) {
        var o = q[f],
            y = k[f];
        d = "";
        var B = this.clone();

        for (B.negative = 0; !B.isZero();) {
          var I = B.modrn(y).toString(f);
          B = B.idivn(y), B.isZero() ? d = I + d : d = A[o - I.length] + I + d;
        }

        for (this.isZero() && (d = "0" + d); d.length % s !== 0;) d = "0" + d;

        return this.negative !== 0 && (d = "-" + d), d;
      }

      r(!1, "Base should be between 2 and 36");
    }, "toString"), i.prototype.toNumber = a(function () {
      var f = this.words[0];
      return this.length === 2 ? f += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? f += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -f : f;
    }, "toNumber"), i.prototype.toJSON = a(function () {
      return this.toString(16, 2);
    }, "toJSON"), h && (i.prototype.toBuffer = a(function (f, s) {
      return this.toArrayLike(h, f, s);
    }, "toBuffer")), i.prototype.toArray = a(function (f, s) {
      return this.toArrayLike(Array, f, s);
    }, "toArray");
    var P = a(function (f, s) {
      return f.allocUnsafe ? f.allocUnsafe(s) : new f(s);
    }, "allocate");
    i.prototype.toArrayLike = a(function (f, s, d) {
      this._strip();

      var v = this.byteLength(),
          c = d || Math.max(1, v);
      r(v <= c, "byte array longer than desired length"), r(c > 0, "Requested array length <= 0");
      var u = P(f, c),
          m = s === "le" ? "LE" : "BE";
      return this["_toArrayLike" + m](u, v), u;
    }, "toArrayLike"), i.prototype._toArrayLikeLE = a(function (f, s) {
      for (var d = 0, v = 0, c = 0, u = 0; c < this.length; c++) {
        var m = this.words[c] << u | v;
        f[d++] = m & 255, d < f.length && (f[d++] = m >> 8 & 255), d < f.length && (f[d++] = m >> 16 & 255), u === 6 ? (d < f.length && (f[d++] = m >> 24 & 255), v = 0, u = 0) : (v = m >>> 24, u += 2);
      }

      if (d < f.length) for (f[d++] = v; d < f.length;) f[d++] = 0;
    }, "_toArrayLikeLE"), i.prototype._toArrayLikeBE = a(function (f, s) {
      for (var d = f.length - 1, v = 0, c = 0, u = 0; c < this.length; c++) {
        var m = this.words[c] << u | v;
        f[d--] = m & 255, d >= 0 && (f[d--] = m >> 8 & 255), d >= 0 && (f[d--] = m >> 16 & 255), u === 6 ? (d >= 0 && (f[d--] = m >> 24 & 255), v = 0, u = 0) : (v = m >>> 24, u += 2);
      }

      if (d >= 0) for (f[d--] = v; d >= 0;) f[d--] = 0;
    }, "_toArrayLikeBE"), Math.clz32 ? i.prototype._countBits = a(function (f) {
      return 32 - Math.clz32(f);
    }, "_countBits") : i.prototype._countBits = a(function (f) {
      var s = f,
          d = 0;
      return s >= 4096 && (d += 13, s >>>= 13), s >= 64 && (d += 7, s >>>= 7), s >= 8 && (d += 4, s >>>= 4), s >= 2 && (d += 2, s >>>= 2), d + s;
    }, "_countBits"), i.prototype._zeroBits = a(function (f) {
      if (f === 0) return 26;
      var s = f,
          d = 0;
      return (s & 8191) === 0 && (d += 13, s >>>= 13), (s & 127) === 0 && (d += 7, s >>>= 7), (s & 15) === 0 && (d += 4, s >>>= 4), (s & 3) === 0 && (d += 2, s >>>= 2), (s & 1) === 0 && d++, d;
    }, "_zeroBits"), i.prototype.bitLength = a(function () {
      var f = this.words[this.length - 1],
          s = this._countBits(f);

      return (this.length - 1) * 26 + s;
    }, "bitLength");

    function N(l) {
      for (var f = new Array(l.bitLength()), s = 0; s < f.length; s++) {
        var d = s / 26 | 0,
            v = s % 26;
        f[s] = l.words[d] >>> v & 1;
      }

      return f;
    }

    a(N, "toBitArray"), i.prototype.zeroBits = a(function () {
      if (this.isZero()) return 0;

      for (var f = 0, s = 0; s < this.length; s++) {
        var d = this._zeroBits(this.words[s]);

        if (f += d, d !== 26) break;
      }

      return f;
    }, "zeroBits"), i.prototype.byteLength = a(function () {
      return Math.ceil(this.bitLength() / 8);
    }, "byteLength"), i.prototype.toTwos = a(function (f) {
      return this.negative !== 0 ? this.abs().inotn(f).iaddn(1) : this.clone();
    }, "toTwos"), i.prototype.fromTwos = a(function (f) {
      return this.testn(f - 1) ? this.notn(f).iaddn(1).ineg() : this.clone();
    }, "fromTwos"), i.prototype.isNeg = a(function () {
      return this.negative !== 0;
    }, "isNeg"), i.prototype.neg = a(function () {
      return this.clone().ineg();
    }, "neg"), i.prototype.ineg = a(function () {
      return this.isZero() || (this.negative ^= 1), this;
    }, "ineg"), i.prototype.iuor = a(function (f) {
      for (; this.length < f.length;) this.words[this.length++] = 0;

      for (var s = 0; s < f.length; s++) this.words[s] = this.words[s] | f.words[s];

      return this._strip();
    }, "iuor"), i.prototype.ior = a(function (f) {
      return r((this.negative | f.negative) === 0), this.iuor(f);
    }, "ior"), i.prototype.or = a(function (f) {
      return this.length > f.length ? this.clone().ior(f) : f.clone().ior(this);
    }, "or"), i.prototype.uor = a(function (f) {
      return this.length > f.length ? this.clone().iuor(f) : f.clone().iuor(this);
    }, "uor"), i.prototype.iuand = a(function (f) {
      var s;
      this.length > f.length ? s = f : s = this;

      for (var d = 0; d < s.length; d++) this.words[d] = this.words[d] & f.words[d];

      return this.length = s.length, this._strip();
    }, "iuand"), i.prototype.iand = a(function (f) {
      return r((this.negative | f.negative) === 0), this.iuand(f);
    }, "iand"), i.prototype.and = a(function (f) {
      return this.length > f.length ? this.clone().iand(f) : f.clone().iand(this);
    }, "and"), i.prototype.uand = a(function (f) {
      return this.length > f.length ? this.clone().iuand(f) : f.clone().iuand(this);
    }, "uand"), i.prototype.iuxor = a(function (f) {
      var s, d;
      this.length > f.length ? (s = this, d = f) : (s = f, d = this);

      for (var v = 0; v < d.length; v++) this.words[v] = s.words[v] ^ d.words[v];

      if (this !== s) for (; v < s.length; v++) this.words[v] = s.words[v];
      return this.length = s.length, this._strip();
    }, "iuxor"), i.prototype.ixor = a(function (f) {
      return r((this.negative | f.negative) === 0), this.iuxor(f);
    }, "ixor"), i.prototype.xor = a(function (f) {
      return this.length > f.length ? this.clone().ixor(f) : f.clone().ixor(this);
    }, "xor"), i.prototype.uxor = a(function (f) {
      return this.length > f.length ? this.clone().iuxor(f) : f.clone().iuxor(this);
    }, "uxor"), i.prototype.inotn = a(function (f) {
      r(typeof f == "number" && f >= 0);
      var s = Math.ceil(f / 26) | 0,
          d = f % 26;
      this._expand(s), d > 0 && s--;

      for (var v = 0; v < s; v++) this.words[v] = ~this.words[v] & 67108863;

      return d > 0 && (this.words[v] = ~this.words[v] & 67108863 >> 26 - d), this._strip();
    }, "inotn"), i.prototype.notn = a(function (f) {
      return this.clone().inotn(f);
    }, "notn"), i.prototype.setn = a(function (f, s) {
      r(typeof f == "number" && f >= 0);
      var d = f / 26 | 0,
          v = f % 26;
      return this._expand(d + 1), s ? this.words[d] = this.words[d] | 1 << v : this.words[d] = this.words[d] & ~(1 << v), this._strip();
    }, "setn"), i.prototype.iadd = a(function (f) {
      var s;
      if (this.negative !== 0 && f.negative === 0) return this.negative = 0, s = this.isub(f), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && f.negative !== 0) return f.negative = 0, s = this.isub(f), f.negative = 1, s._normSign();
      var d, v;
      this.length > f.length ? (d = this, v = f) : (d = f, v = this);

      for (var c = 0, u = 0; u < v.length; u++) s = (d.words[u] | 0) + (v.words[u] | 0) + c, this.words[u] = s & 67108863, c = s >>> 26;

      for (; c !== 0 && u < d.length; u++) s = (d.words[u] | 0) + c, this.words[u] = s & 67108863, c = s >>> 26;

      if (this.length = d.length, c !== 0) this.words[this.length] = c, this.length++;else if (d !== this) for (; u < d.length; u++) this.words[u] = d.words[u];
      return this;
    }, "iadd"), i.prototype.add = a(function (f) {
      var s;
      return f.negative !== 0 && this.negative === 0 ? (f.negative = 0, s = this.sub(f), f.negative ^= 1, s) : f.negative === 0 && this.negative !== 0 ? (this.negative = 0, s = f.sub(this), this.negative = 1, s) : this.length > f.length ? this.clone().iadd(f) : f.clone().iadd(this);
    }, "add"), i.prototype.isub = a(function (f) {
      if (f.negative !== 0) {
        f.negative = 0;
        var s = this.iadd(f);
        return f.negative = 1, s._normSign();
      } else if (this.negative !== 0) return this.negative = 0, this.iadd(f), this.negative = 1, this._normSign();

      var d = this.cmp(f);
      if (d === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var v, c;
      d > 0 ? (v = this, c = f) : (v = f, c = this);

      for (var u = 0, m = 0; m < c.length; m++) s = (v.words[m] | 0) - (c.words[m] | 0) + u, u = s >> 26, this.words[m] = s & 67108863;

      for (; u !== 0 && m < v.length; m++) s = (v.words[m] | 0) + u, u = s >> 26, this.words[m] = s & 67108863;

      if (u === 0 && m < v.length && v !== this) for (; m < v.length; m++) this.words[m] = v.words[m];
      return this.length = Math.max(this.length, m), v !== this && (this.negative = 1), this._strip();
    }, "isub"), i.prototype.sub = a(function (f) {
      return this.clone().isub(f);
    }, "sub");

    function ye(l, f, s) {
      s.negative = f.negative ^ l.negative;
      var d = l.length + f.length | 0;
      s.length = d, d = d - 1 | 0;
      var v = l.words[0] | 0,
          c = f.words[0] | 0,
          u = v * c,
          m = u & 67108863,
          g = u / 67108864 | 0;
      s.words[0] = m;

      for (var o = 1; o < d; o++) {
        for (var y = g >>> 26, B = g & 67108863, I = Math.min(o, f.length - 1), R = Math.max(0, o - l.length + 1); R <= I; R++) {
          var T = o - R | 0;
          v = l.words[T] | 0, c = f.words[R] | 0, u = v * c + B, y += u / 67108864 | 0, B = u & 67108863;
        }

        s.words[o] = B | 0, g = y | 0;
      }

      return g !== 0 ? s.words[o] = g | 0 : s.length--, s._strip();
    }

    a(ye, "smallMulTo");
    var O = a(function (f, s, d) {
      var v = f.words,
          c = s.words,
          u = d.words,
          m = 0,
          g,
          o,
          y,
          B = v[0] | 0,
          I = B & 8191,
          R = B >>> 13,
          T = v[1] | 0,
          C = T & 8191,
          L = T >>> 13,
          Ue = v[2] | 0,
          z = Ue & 8191,
          U = Ue >>> 13,
          Ar = v[3] | 0,
          H = Ar & 8191,
          F = Ar >>> 13,
          qr = v[4] | 0,
          K = qr & 8191,
          j = qr >>> 13,
          Br = v[5] | 0,
          W = Br & 8191,
          V = Br >>> 13,
          Rr = v[6] | 0,
          Z = Rr & 8191,
          G = Rr >>> 13,
          Ir = v[7] | 0,
          X = Ir & 8191,
          Y = Ir >>> 13,
          kr = v[8] | 0,
          J = kr & 8191,
          $ = kr >>> 13,
          Dr = v[9] | 0,
          Q = Dr & 8191,
          ee = Dr >>> 13,
          Pr = c[0] | 0,
          te = Pr & 8191,
          re = Pr >>> 13,
          Tr = c[1] | 0,
          ie = Tr & 8191,
          fe = Tr >>> 13,
          Cr = c[2] | 0,
          ne = Cr & 8191,
          ae = Cr >>> 13,
          Nr = c[3] | 0,
          se = Nr & 8191,
          oe = Nr >>> 13,
          Lr = c[4] | 0,
          he = Lr & 8191,
          ue = Lr >>> 13,
          Or = c[5] | 0,
          de = Or & 8191,
          ce = Or >>> 13,
          zr = c[6] | 0,
          le = zr & 8191,
          ve = zr >>> 13,
          Ur = c[7] | 0,
          pe = Ur & 8191,
          be = Ur >>> 13,
          Hr = c[8] | 0,
          me = Hr & 8191,
          ge = Hr >>> 13,
          cr = c[9] | 0,
          we = cr & 8191,
          xe = cr >>> 13;
      d.negative = f.negative ^ s.negative, d.length = 19, g = Math.imul(I, te), o = Math.imul(I, re), o = o + Math.imul(R, te) | 0, y = Math.imul(R, re);
      var qt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, g = Math.imul(C, te), o = Math.imul(C, re), o = o + Math.imul(L, te) | 0, y = Math.imul(L, re), g = g + Math.imul(I, ie) | 0, o = o + Math.imul(I, fe) | 0, o = o + Math.imul(R, ie) | 0, y = y + Math.imul(R, fe) | 0;
      var Bt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, g = Math.imul(z, te), o = Math.imul(z, re), o = o + Math.imul(U, te) | 0, y = Math.imul(U, re), g = g + Math.imul(C, ie) | 0, o = o + Math.imul(C, fe) | 0, o = o + Math.imul(L, ie) | 0, y = y + Math.imul(L, fe) | 0, g = g + Math.imul(I, ne) | 0, o = o + Math.imul(I, ae) | 0, o = o + Math.imul(R, ne) | 0, y = y + Math.imul(R, ae) | 0;
      var Rt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, g = Math.imul(H, te), o = Math.imul(H, re), o = o + Math.imul(F, te) | 0, y = Math.imul(F, re), g = g + Math.imul(z, ie) | 0, o = o + Math.imul(z, fe) | 0, o = o + Math.imul(U, ie) | 0, y = y + Math.imul(U, fe) | 0, g = g + Math.imul(C, ne) | 0, o = o + Math.imul(C, ae) | 0, o = o + Math.imul(L, ne) | 0, y = y + Math.imul(L, ae) | 0, g = g + Math.imul(I, se) | 0, o = o + Math.imul(I, oe) | 0, o = o + Math.imul(R, se) | 0, y = y + Math.imul(R, oe) | 0;
      var It = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, g = Math.imul(K, te), o = Math.imul(K, re), o = o + Math.imul(j, te) | 0, y = Math.imul(j, re), g = g + Math.imul(H, ie) | 0, o = o + Math.imul(H, fe) | 0, o = o + Math.imul(F, ie) | 0, y = y + Math.imul(F, fe) | 0, g = g + Math.imul(z, ne) | 0, o = o + Math.imul(z, ae) | 0, o = o + Math.imul(U, ne) | 0, y = y + Math.imul(U, ae) | 0, g = g + Math.imul(C, se) | 0, o = o + Math.imul(C, oe) | 0, o = o + Math.imul(L, se) | 0, y = y + Math.imul(L, oe) | 0, g = g + Math.imul(I, he) | 0, o = o + Math.imul(I, ue) | 0, o = o + Math.imul(R, he) | 0, y = y + Math.imul(R, ue) | 0;
      var kt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, g = Math.imul(W, te), o = Math.imul(W, re), o = o + Math.imul(V, te) | 0, y = Math.imul(V, re), g = g + Math.imul(K, ie) | 0, o = o + Math.imul(K, fe) | 0, o = o + Math.imul(j, ie) | 0, y = y + Math.imul(j, fe) | 0, g = g + Math.imul(H, ne) | 0, o = o + Math.imul(H, ae) | 0, o = o + Math.imul(F, ne) | 0, y = y + Math.imul(F, ae) | 0, g = g + Math.imul(z, se) | 0, o = o + Math.imul(z, oe) | 0, o = o + Math.imul(U, se) | 0, y = y + Math.imul(U, oe) | 0, g = g + Math.imul(C, he) | 0, o = o + Math.imul(C, ue) | 0, o = o + Math.imul(L, he) | 0, y = y + Math.imul(L, ue) | 0, g = g + Math.imul(I, de) | 0, o = o + Math.imul(I, ce) | 0, o = o + Math.imul(R, de) | 0, y = y + Math.imul(R, ce) | 0;
      var Dt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Dt >>> 26) | 0, Dt &= 67108863, g = Math.imul(Z, te), o = Math.imul(Z, re), o = o + Math.imul(G, te) | 0, y = Math.imul(G, re), g = g + Math.imul(W, ie) | 0, o = o + Math.imul(W, fe) | 0, o = o + Math.imul(V, ie) | 0, y = y + Math.imul(V, fe) | 0, g = g + Math.imul(K, ne) | 0, o = o + Math.imul(K, ae) | 0, o = o + Math.imul(j, ne) | 0, y = y + Math.imul(j, ae) | 0, g = g + Math.imul(H, se) | 0, o = o + Math.imul(H, oe) | 0, o = o + Math.imul(F, se) | 0, y = y + Math.imul(F, oe) | 0, g = g + Math.imul(z, he) | 0, o = o + Math.imul(z, ue) | 0, o = o + Math.imul(U, he) | 0, y = y + Math.imul(U, ue) | 0, g = g + Math.imul(C, de) | 0, o = o + Math.imul(C, ce) | 0, o = o + Math.imul(L, de) | 0, y = y + Math.imul(L, ce) | 0, g = g + Math.imul(I, le) | 0, o = o + Math.imul(I, ve) | 0, o = o + Math.imul(R, le) | 0, y = y + Math.imul(R, ve) | 0;
      var Pt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, g = Math.imul(X, te), o = Math.imul(X, re), o = o + Math.imul(Y, te) | 0, y = Math.imul(Y, re), g = g + Math.imul(Z, ie) | 0, o = o + Math.imul(Z, fe) | 0, o = o + Math.imul(G, ie) | 0, y = y + Math.imul(G, fe) | 0, g = g + Math.imul(W, ne) | 0, o = o + Math.imul(W, ae) | 0, o = o + Math.imul(V, ne) | 0, y = y + Math.imul(V, ae) | 0, g = g + Math.imul(K, se) | 0, o = o + Math.imul(K, oe) | 0, o = o + Math.imul(j, se) | 0, y = y + Math.imul(j, oe) | 0, g = g + Math.imul(H, he) | 0, o = o + Math.imul(H, ue) | 0, o = o + Math.imul(F, he) | 0, y = y + Math.imul(F, ue) | 0, g = g + Math.imul(z, de) | 0, o = o + Math.imul(z, ce) | 0, o = o + Math.imul(U, de) | 0, y = y + Math.imul(U, ce) | 0, g = g + Math.imul(C, le) | 0, o = o + Math.imul(C, ve) | 0, o = o + Math.imul(L, le) | 0, y = y + Math.imul(L, ve) | 0, g = g + Math.imul(I, pe) | 0, o = o + Math.imul(I, be) | 0, o = o + Math.imul(R, pe) | 0, y = y + Math.imul(R, be) | 0;
      var Tt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, g = Math.imul(J, te), o = Math.imul(J, re), o = o + Math.imul($, te) | 0, y = Math.imul($, re), g = g + Math.imul(X, ie) | 0, o = o + Math.imul(X, fe) | 0, o = o + Math.imul(Y, ie) | 0, y = y + Math.imul(Y, fe) | 0, g = g + Math.imul(Z, ne) | 0, o = o + Math.imul(Z, ae) | 0, o = o + Math.imul(G, ne) | 0, y = y + Math.imul(G, ae) | 0, g = g + Math.imul(W, se) | 0, o = o + Math.imul(W, oe) | 0, o = o + Math.imul(V, se) | 0, y = y + Math.imul(V, oe) | 0, g = g + Math.imul(K, he) | 0, o = o + Math.imul(K, ue) | 0, o = o + Math.imul(j, he) | 0, y = y + Math.imul(j, ue) | 0, g = g + Math.imul(H, de) | 0, o = o + Math.imul(H, ce) | 0, o = o + Math.imul(F, de) | 0, y = y + Math.imul(F, ce) | 0, g = g + Math.imul(z, le) | 0, o = o + Math.imul(z, ve) | 0, o = o + Math.imul(U, le) | 0, y = y + Math.imul(U, ve) | 0, g = g + Math.imul(C, pe) | 0, o = o + Math.imul(C, be) | 0, o = o + Math.imul(L, pe) | 0, y = y + Math.imul(L, be) | 0, g = g + Math.imul(I, me) | 0, o = o + Math.imul(I, ge) | 0, o = o + Math.imul(R, me) | 0, y = y + Math.imul(R, ge) | 0;
      var Ct = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, g = Math.imul(Q, te), o = Math.imul(Q, re), o = o + Math.imul(ee, te) | 0, y = Math.imul(ee, re), g = g + Math.imul(J, ie) | 0, o = o + Math.imul(J, fe) | 0, o = o + Math.imul($, ie) | 0, y = y + Math.imul($, fe) | 0, g = g + Math.imul(X, ne) | 0, o = o + Math.imul(X, ae) | 0, o = o + Math.imul(Y, ne) | 0, y = y + Math.imul(Y, ae) | 0, g = g + Math.imul(Z, se) | 0, o = o + Math.imul(Z, oe) | 0, o = o + Math.imul(G, se) | 0, y = y + Math.imul(G, oe) | 0, g = g + Math.imul(W, he) | 0, o = o + Math.imul(W, ue) | 0, o = o + Math.imul(V, he) | 0, y = y + Math.imul(V, ue) | 0, g = g + Math.imul(K, de) | 0, o = o + Math.imul(K, ce) | 0, o = o + Math.imul(j, de) | 0, y = y + Math.imul(j, ce) | 0, g = g + Math.imul(H, le) | 0, o = o + Math.imul(H, ve) | 0, o = o + Math.imul(F, le) | 0, y = y + Math.imul(F, ve) | 0, g = g + Math.imul(z, pe) | 0, o = o + Math.imul(z, be) | 0, o = o + Math.imul(U, pe) | 0, y = y + Math.imul(U, be) | 0, g = g + Math.imul(C, me) | 0, o = o + Math.imul(C, ge) | 0, o = o + Math.imul(L, me) | 0, y = y + Math.imul(L, ge) | 0, g = g + Math.imul(I, we) | 0, o = o + Math.imul(I, xe) | 0, o = o + Math.imul(R, we) | 0, y = y + Math.imul(R, xe) | 0;
      var Nt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, g = Math.imul(Q, ie), o = Math.imul(Q, fe), o = o + Math.imul(ee, ie) | 0, y = Math.imul(ee, fe), g = g + Math.imul(J, ne) | 0, o = o + Math.imul(J, ae) | 0, o = o + Math.imul($, ne) | 0, y = y + Math.imul($, ae) | 0, g = g + Math.imul(X, se) | 0, o = o + Math.imul(X, oe) | 0, o = o + Math.imul(Y, se) | 0, y = y + Math.imul(Y, oe) | 0, g = g + Math.imul(Z, he) | 0, o = o + Math.imul(Z, ue) | 0, o = o + Math.imul(G, he) | 0, y = y + Math.imul(G, ue) | 0, g = g + Math.imul(W, de) | 0, o = o + Math.imul(W, ce) | 0, o = o + Math.imul(V, de) | 0, y = y + Math.imul(V, ce) | 0, g = g + Math.imul(K, le) | 0, o = o + Math.imul(K, ve) | 0, o = o + Math.imul(j, le) | 0, y = y + Math.imul(j, ve) | 0, g = g + Math.imul(H, pe) | 0, o = o + Math.imul(H, be) | 0, o = o + Math.imul(F, pe) | 0, y = y + Math.imul(F, be) | 0, g = g + Math.imul(z, me) | 0, o = o + Math.imul(z, ge) | 0, o = o + Math.imul(U, me) | 0, y = y + Math.imul(U, ge) | 0, g = g + Math.imul(C, we) | 0, o = o + Math.imul(C, xe) | 0, o = o + Math.imul(L, we) | 0, y = y + Math.imul(L, xe) | 0;
      var Lt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, g = Math.imul(Q, ne), o = Math.imul(Q, ae), o = o + Math.imul(ee, ne) | 0, y = Math.imul(ee, ae), g = g + Math.imul(J, se) | 0, o = o + Math.imul(J, oe) | 0, o = o + Math.imul($, se) | 0, y = y + Math.imul($, oe) | 0, g = g + Math.imul(X, he) | 0, o = o + Math.imul(X, ue) | 0, o = o + Math.imul(Y, he) | 0, y = y + Math.imul(Y, ue) | 0, g = g + Math.imul(Z, de) | 0, o = o + Math.imul(Z, ce) | 0, o = o + Math.imul(G, de) | 0, y = y + Math.imul(G, ce) | 0, g = g + Math.imul(W, le) | 0, o = o + Math.imul(W, ve) | 0, o = o + Math.imul(V, le) | 0, y = y + Math.imul(V, ve) | 0, g = g + Math.imul(K, pe) | 0, o = o + Math.imul(K, be) | 0, o = o + Math.imul(j, pe) | 0, y = y + Math.imul(j, be) | 0, g = g + Math.imul(H, me) | 0, o = o + Math.imul(H, ge) | 0, o = o + Math.imul(F, me) | 0, y = y + Math.imul(F, ge) | 0, g = g + Math.imul(z, we) | 0, o = o + Math.imul(z, xe) | 0, o = o + Math.imul(U, we) | 0, y = y + Math.imul(U, xe) | 0;
      var Ot = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, g = Math.imul(Q, se), o = Math.imul(Q, oe), o = o + Math.imul(ee, se) | 0, y = Math.imul(ee, oe), g = g + Math.imul(J, he) | 0, o = o + Math.imul(J, ue) | 0, o = o + Math.imul($, he) | 0, y = y + Math.imul($, ue) | 0, g = g + Math.imul(X, de) | 0, o = o + Math.imul(X, ce) | 0, o = o + Math.imul(Y, de) | 0, y = y + Math.imul(Y, ce) | 0, g = g + Math.imul(Z, le) | 0, o = o + Math.imul(Z, ve) | 0, o = o + Math.imul(G, le) | 0, y = y + Math.imul(G, ve) | 0, g = g + Math.imul(W, pe) | 0, o = o + Math.imul(W, be) | 0, o = o + Math.imul(V, pe) | 0, y = y + Math.imul(V, be) | 0, g = g + Math.imul(K, me) | 0, o = o + Math.imul(K, ge) | 0, o = o + Math.imul(j, me) | 0, y = y + Math.imul(j, ge) | 0, g = g + Math.imul(H, we) | 0, o = o + Math.imul(H, xe) | 0, o = o + Math.imul(F, we) | 0, y = y + Math.imul(F, xe) | 0;
      var zt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (zt >>> 26) | 0, zt &= 67108863, g = Math.imul(Q, he), o = Math.imul(Q, ue), o = o + Math.imul(ee, he) | 0, y = Math.imul(ee, ue), g = g + Math.imul(J, de) | 0, o = o + Math.imul(J, ce) | 0, o = o + Math.imul($, de) | 0, y = y + Math.imul($, ce) | 0, g = g + Math.imul(X, le) | 0, o = o + Math.imul(X, ve) | 0, o = o + Math.imul(Y, le) | 0, y = y + Math.imul(Y, ve) | 0, g = g + Math.imul(Z, pe) | 0, o = o + Math.imul(Z, be) | 0, o = o + Math.imul(G, pe) | 0, y = y + Math.imul(G, be) | 0, g = g + Math.imul(W, me) | 0, o = o + Math.imul(W, ge) | 0, o = o + Math.imul(V, me) | 0, y = y + Math.imul(V, ge) | 0, g = g + Math.imul(K, we) | 0, o = o + Math.imul(K, xe) | 0, o = o + Math.imul(j, we) | 0, y = y + Math.imul(j, xe) | 0;
      var Ut = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, g = Math.imul(Q, de), o = Math.imul(Q, ce), o = o + Math.imul(ee, de) | 0, y = Math.imul(ee, ce), g = g + Math.imul(J, le) | 0, o = o + Math.imul(J, ve) | 0, o = o + Math.imul($, le) | 0, y = y + Math.imul($, ve) | 0, g = g + Math.imul(X, pe) | 0, o = o + Math.imul(X, be) | 0, o = o + Math.imul(Y, pe) | 0, y = y + Math.imul(Y, be) | 0, g = g + Math.imul(Z, me) | 0, o = o + Math.imul(Z, ge) | 0, o = o + Math.imul(G, me) | 0, y = y + Math.imul(G, ge) | 0, g = g + Math.imul(W, we) | 0, o = o + Math.imul(W, xe) | 0, o = o + Math.imul(V, we) | 0, y = y + Math.imul(V, xe) | 0;
      var Ht = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Ht >>> 26) | 0, Ht &= 67108863, g = Math.imul(Q, le), o = Math.imul(Q, ve), o = o + Math.imul(ee, le) | 0, y = Math.imul(ee, ve), g = g + Math.imul(J, pe) | 0, o = o + Math.imul(J, be) | 0, o = o + Math.imul($, pe) | 0, y = y + Math.imul($, be) | 0, g = g + Math.imul(X, me) | 0, o = o + Math.imul(X, ge) | 0, o = o + Math.imul(Y, me) | 0, y = y + Math.imul(Y, ge) | 0, g = g + Math.imul(Z, we) | 0, o = o + Math.imul(Z, xe) | 0, o = o + Math.imul(G, we) | 0, y = y + Math.imul(G, xe) | 0;
      var Ft = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Ft >>> 26) | 0, Ft &= 67108863, g = Math.imul(Q, pe), o = Math.imul(Q, be), o = o + Math.imul(ee, pe) | 0, y = Math.imul(ee, be), g = g + Math.imul(J, me) | 0, o = o + Math.imul(J, ge) | 0, o = o + Math.imul($, me) | 0, y = y + Math.imul($, ge) | 0, g = g + Math.imul(X, we) | 0, o = o + Math.imul(X, xe) | 0, o = o + Math.imul(Y, we) | 0, y = y + Math.imul(Y, xe) | 0;
      var ti = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (ti >>> 26) | 0, ti &= 67108863, g = Math.imul(Q, me), o = Math.imul(Q, ge), o = o + Math.imul(ee, me) | 0, y = Math.imul(ee, ge), g = g + Math.imul(J, we) | 0, o = o + Math.imul(J, xe) | 0, o = o + Math.imul($, we) | 0, y = y + Math.imul($, xe) | 0;
      var ri = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (ri >>> 26) | 0, ri &= 67108863, g = Math.imul(Q, we), o = Math.imul(Q, xe), o = o + Math.imul(ee, we) | 0, y = Math.imul(ee, xe);
      var ii = (m + g | 0) + ((o & 8191) << 13) | 0;
      return m = (y + (o >>> 13) | 0) + (ii >>> 26) | 0, ii &= 67108863, u[0] = qt, u[1] = Bt, u[2] = Rt, u[3] = It, u[4] = kt, u[5] = Dt, u[6] = Pt, u[7] = Tt, u[8] = Ct, u[9] = Nt, u[10] = Lt, u[11] = Ot, u[12] = zt, u[13] = Ut, u[14] = Ht, u[15] = Ft, u[16] = ti, u[17] = ri, u[18] = ii, m !== 0 && (u[19] = m, d.length++), d;
    }, "comb10MulTo");
    Math.imul || (O = ye);

    function _e(l, f, s) {
      s.negative = f.negative ^ l.negative, s.length = l.length + f.length;

      for (var d = 0, v = 0, c = 0; c < s.length - 1; c++) {
        var u = v;
        v = 0;

        for (var m = d & 67108863, g = Math.min(c, f.length - 1), o = Math.max(0, c - l.length + 1); o <= g; o++) {
          var y = c - o,
              B = l.words[y] | 0,
              I = f.words[o] | 0,
              R = B * I,
              T = R & 67108863;
          u = u + (R / 67108864 | 0) | 0, T = T + m | 0, m = T & 67108863, u = u + (T >>> 26) | 0, v += u >>> 26, u &= 67108863;
        }

        s.words[c] = m, d = u, u = v;
      }

      return d !== 0 ? s.words[c] = d : s.length--, s._strip();
    }

    a(_e, "bigMulTo");

    function Ie(l, f, s) {
      return _e(l, f, s);
    }

    a(Ie, "jumboMulTo"), i.prototype.mulTo = a(function (f, s) {
      var d,
          v = this.length + f.length;
      return this.length === 10 && f.length === 10 ? d = O(this, f, s) : v < 63 ? d = ye(this, f, s) : v < 1024 ? d = _e(this, f, s) : d = Ie(this, f, s), d;
    }, "mulTo");

    function Me(l, f) {
      this.x = l, this.y = f;
    }

    a(Me, "FFTM"), Me.prototype.makeRBT = a(function (f) {
      for (var s = new Array(f), d = i.prototype._countBits(f) - 1, v = 0; v < f; v++) s[v] = this.revBin(v, d, f);

      return s;
    }, "makeRBT"), Me.prototype.revBin = a(function (f, s, d) {
      if (f === 0 || f === d - 1) return f;

      for (var v = 0, c = 0; c < s; c++) v |= (f & 1) << s - c - 1, f >>= 1;

      return v;
    }, "revBin"), Me.prototype.permute = a(function (f, s, d, v, c, u) {
      for (var m = 0; m < u; m++) v[m] = s[f[m]], c[m] = d[f[m]];
    }, "permute"), Me.prototype.transform = a(function (f, s, d, v, c, u) {
      this.permute(u, f, s, d, v, c);

      for (var m = 1; m < c; m <<= 1) for (var g = m << 1, o = Math.cos(2 * Math.PI / g), y = Math.sin(2 * Math.PI / g), B = 0; B < c; B += g) for (var I = o, R = y, T = 0; T < m; T++) {
        var C = d[B + T],
            L = v[B + T],
            Ue = d[B + T + m],
            z = v[B + T + m],
            U = I * Ue - R * z;
        z = I * z + R * Ue, Ue = U, d[B + T] = C + Ue, v[B + T] = L + z, d[B + T + m] = C - Ue, v[B + T + m] = L - z, T !== g && (U = o * I - y * R, R = o * R + y * I, I = U);
      }
    }, "transform"), Me.prototype.guessLen13b = a(function (f, s) {
      var d = Math.max(s, f) | 1,
          v = d & 1,
          c = 0;

      for (d = d / 2 | 0; d; d = d >>> 1) c++;

      return 1 << c + 1 + v;
    }, "guessLen13b"), Me.prototype.conjugate = a(function (f, s, d) {
      if (!(d <= 1)) for (var v = 0; v < d / 2; v++) {
        var c = f[v];
        f[v] = f[d - v - 1], f[d - v - 1] = c, c = s[v], s[v] = -s[d - v - 1], s[d - v - 1] = -c;
      }
    }, "conjugate"), Me.prototype.normalize13b = a(function (f, s) {
      for (var d = 0, v = 0; v < s / 2; v++) {
        var c = Math.round(f[2 * v + 1] / s) * 8192 + Math.round(f[2 * v] / s) + d;
        f[v] = c & 67108863, c < 67108864 ? d = 0 : d = c / 67108864 | 0;
      }

      return f;
    }, "normalize13b"), Me.prototype.convert13b = a(function (f, s, d, v) {
      for (var c = 0, u = 0; u < s; u++) c = c + (f[u] | 0), d[2 * u] = c & 8191, c = c >>> 13, d[2 * u + 1] = c & 8191, c = c >>> 13;

      for (u = 2 * s; u < v; ++u) d[u] = 0;

      r(c === 0), r((c & -8192) === 0);
    }, "convert13b"), Me.prototype.stub = a(function (f) {
      for (var s = new Array(f), d = 0; d < f; d++) s[d] = 0;

      return s;
    }, "stub"), Me.prototype.mulp = a(function (f, s, d) {
      var v = 2 * this.guessLen13b(f.length, s.length),
          c = this.makeRBT(v),
          u = this.stub(v),
          m = new Array(v),
          g = new Array(v),
          o = new Array(v),
          y = new Array(v),
          B = new Array(v),
          I = new Array(v),
          R = d.words;
      R.length = v, this.convert13b(f.words, f.length, m, v), this.convert13b(s.words, s.length, y, v), this.transform(m, u, g, o, v, c), this.transform(y, u, B, I, v, c);

      for (var T = 0; T < v; T++) {
        var C = g[T] * B[T] - o[T] * I[T];
        o[T] = g[T] * I[T] + o[T] * B[T], g[T] = C;
      }

      return this.conjugate(g, o, v), this.transform(g, o, R, u, v, c), this.conjugate(R, u, v), this.normalize13b(R, v), d.negative = f.negative ^ s.negative, d.length = f.length + s.length, d._strip();
    }, "mulp"), i.prototype.mul = a(function (f) {
      var s = new i(null);
      return s.words = new Array(this.length + f.length), this.mulTo(f, s);
    }, "mul"), i.prototype.mulf = a(function (f) {
      var s = new i(null);
      return s.words = new Array(this.length + f.length), Ie(this, f, s);
    }, "mulf"), i.prototype.imul = a(function (f) {
      return this.clone().mulTo(f, this);
    }, "imul"), i.prototype.imuln = a(function (f) {
      var s = f < 0;
      s && (f = -f), r(typeof f == "number"), r(f < 67108864);

      for (var d = 0, v = 0; v < this.length; v++) {
        var c = (this.words[v] | 0) * f,
            u = (c & 67108863) + (d & 67108863);
        d >>= 26, d += c / 67108864 | 0, d += u >>> 26, this.words[v] = u & 67108863;
      }

      return d !== 0 && (this.words[v] = d, this.length++), s ? this.ineg() : this;
    }, "imuln"), i.prototype.muln = a(function (f) {
      return this.clone().imuln(f);
    }, "muln"), i.prototype.sqr = a(function () {
      return this.mul(this);
    }, "sqr"), i.prototype.isqr = a(function () {
      return this.imul(this.clone());
    }, "isqr"), i.prototype.pow = a(function (f) {
      var s = N(f);
      if (s.length === 0) return new i(1);

      for (var d = this, v = 0; v < s.length && s[v] === 0; v++, d = d.sqr());

      if (++v < s.length) for (var c = d.sqr(); v < s.length; v++, c = c.sqr()) s[v] !== 0 && (d = d.mul(c));
      return d;
    }, "pow"), i.prototype.iushln = a(function (f) {
      r(typeof f == "number" && f >= 0);
      var s = f % 26,
          d = (f - s) / 26,
          v = 67108863 >>> 26 - s << 26 - s,
          c;

      if (s !== 0) {
        var u = 0;

        for (c = 0; c < this.length; c++) {
          var m = this.words[c] & v,
              g = (this.words[c] | 0) - m << s;
          this.words[c] = g | u, u = m >>> 26 - s;
        }

        u && (this.words[c] = u, this.length++);
      }

      if (d !== 0) {
        for (c = this.length - 1; c >= 0; c--) this.words[c + d] = this.words[c];

        for (c = 0; c < d; c++) this.words[c] = 0;

        this.length += d;
      }

      return this._strip();
    }, "iushln"), i.prototype.ishln = a(function (f) {
      return r(this.negative === 0), this.iushln(f);
    }, "ishln"), i.prototype.iushrn = a(function (f, s, d) {
      r(typeof f == "number" && f >= 0);
      var v;
      s ? v = (s - s % 26) / 26 : v = 0;
      var c = f % 26,
          u = Math.min((f - c) / 26, this.length),
          m = 67108863 ^ 67108863 >>> c << c,
          g = d;

      if (v -= u, v = Math.max(0, v), g) {
        for (var o = 0; o < u; o++) g.words[o] = this.words[o];

        g.length = u;
      }

      if (u !== 0) if (this.length > u) for (this.length -= u, o = 0; o < this.length; o++) this.words[o] = this.words[o + u];else this.words[0] = 0, this.length = 1;
      var y = 0;

      for (o = this.length - 1; o >= 0 && (y !== 0 || o >= v); o--) {
        var B = this.words[o] | 0;
        this.words[o] = y << 26 - c | B >>> c, y = B & m;
      }

      return g && y !== 0 && (g.words[g.length++] = y), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, "iushrn"), i.prototype.ishrn = a(function (f, s, d) {
      return r(this.negative === 0), this.iushrn(f, s, d);
    }, "ishrn"), i.prototype.shln = a(function (f) {
      return this.clone().ishln(f);
    }, "shln"), i.prototype.ushln = a(function (f) {
      return this.clone().iushln(f);
    }, "ushln"), i.prototype.shrn = a(function (f) {
      return this.clone().ishrn(f);
    }, "shrn"), i.prototype.ushrn = a(function (f) {
      return this.clone().iushrn(f);
    }, "ushrn"), i.prototype.testn = a(function (f) {
      r(typeof f == "number" && f >= 0);
      var s = f % 26,
          d = (f - s) / 26,
          v = 1 << s;
      if (this.length <= d) return !1;
      var c = this.words[d];
      return !!(c & v);
    }, "testn"), i.prototype.imaskn = a(function (f) {
      r(typeof f == "number" && f >= 0);
      var s = f % 26,
          d = (f - s) / 26;
      if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= d) return this;

      if (s !== 0 && d++, this.length = Math.min(d, this.length), s !== 0) {
        var v = 67108863 ^ 67108863 >>> s << s;
        this.words[this.length - 1] &= v;
      }

      return this._strip();
    }, "imaskn"), i.prototype.maskn = a(function (f) {
      return this.clone().imaskn(f);
    }, "maskn"), i.prototype.iaddn = a(function (f) {
      return r(typeof f == "number"), r(f < 67108864), f < 0 ? this.isubn(-f) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= f ? (this.words[0] = f - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(f), this.negative = 1, this) : this._iaddn(f);
    }, "iaddn"), i.prototype._iaddn = a(function (f) {
      this.words[0] += f;

      for (var s = 0; s < this.length && this.words[s] >= 67108864; s++) this.words[s] -= 67108864, s === this.length - 1 ? this.words[s + 1] = 1 : this.words[s + 1]++;

      return this.length = Math.max(this.length, s + 1), this;
    }, "_iaddn"), i.prototype.isubn = a(function (f) {
      if (r(typeof f == "number"), r(f < 67108864), f < 0) return this.iaddn(-f);
      if (this.negative !== 0) return this.negative = 0, this.iaddn(f), this.negative = 1, this;
      if (this.words[0] -= f, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;else for (var s = 0; s < this.length && this.words[s] < 0; s++) this.words[s] += 67108864, this.words[s + 1] -= 1;
      return this._strip();
    }, "isubn"), i.prototype.addn = a(function (f) {
      return this.clone().iaddn(f);
    }, "addn"), i.prototype.subn = a(function (f) {
      return this.clone().isubn(f);
    }, "subn"), i.prototype.iabs = a(function () {
      return this.negative = 0, this;
    }, "iabs"), i.prototype.abs = a(function () {
      return this.clone().iabs();
    }, "abs"), i.prototype._ishlnsubmul = a(function (f, s, d) {
      var v = f.length + d,
          c;

      this._expand(v);

      var u,
          m = 0;

      for (c = 0; c < f.length; c++) {
        u = (this.words[c + d] | 0) + m;
        var g = (f.words[c] | 0) * s;
        u -= g & 67108863, m = (u >> 26) - (g / 67108864 | 0), this.words[c + d] = u & 67108863;
      }

      for (; c < this.length - d; c++) u = (this.words[c + d] | 0) + m, m = u >> 26, this.words[c + d] = u & 67108863;

      if (m === 0) return this._strip();

      for (r(m === -1), m = 0, c = 0; c < this.length; c++) u = -(this.words[c] | 0) + m, m = u >> 26, this.words[c] = u & 67108863;

      return this.negative = 1, this._strip();
    }, "_ishlnsubmul"), i.prototype._wordDiv = a(function (f, s) {
      var d = this.length - f.length,
          v = this.clone(),
          c = f,
          u = c.words[c.length - 1] | 0,
          m = this._countBits(u);

      d = 26 - m, d !== 0 && (c = c.ushln(d), v.iushln(d), u = c.words[c.length - 1] | 0);
      var g = v.length - c.length,
          o;

      if (s !== "mod") {
        o = new i(null), o.length = g + 1, o.words = new Array(o.length);

        for (var y = 0; y < o.length; y++) o.words[y] = 0;
      }

      var B = v.clone()._ishlnsubmul(c, 1, g);

      B.negative === 0 && (v = B, o && (o.words[g] = 1));

      for (var I = g - 1; I >= 0; I--) {
        var R = (v.words[c.length + I] | 0) * 67108864 + (v.words[c.length + I - 1] | 0);

        for (R = Math.min(R / u | 0, 67108863), v._ishlnsubmul(c, R, I); v.negative !== 0;) R--, v.negative = 0, v._ishlnsubmul(c, 1, I), v.isZero() || (v.negative ^= 1);

        o && (o.words[I] = R);
      }

      return o && o._strip(), v._strip(), s !== "div" && d !== 0 && v.iushrn(d), {
        div: o || null,
        mod: v
      };
    }, "_wordDiv"), i.prototype.divmod = a(function (f, s, d) {
      if (r(!f.isZero()), this.isZero()) return {
        div: new i(0),
        mod: new i(0)
      };
      var v, c, u;
      return this.negative !== 0 && f.negative === 0 ? (u = this.neg().divmod(f, s), s !== "mod" && (v = u.div.neg()), s !== "div" && (c = u.mod.neg(), d && c.negative !== 0 && c.iadd(f)), {
        div: v,
        mod: c
      }) : this.negative === 0 && f.negative !== 0 ? (u = this.divmod(f.neg(), s), s !== "mod" && (v = u.div.neg()), {
        div: v,
        mod: u.mod
      }) : (this.negative & f.negative) !== 0 ? (u = this.neg().divmod(f.neg(), s), s !== "div" && (c = u.mod.neg(), d && c.negative !== 0 && c.isub(f)), {
        div: u.div,
        mod: c
      }) : f.length > this.length || this.cmp(f) < 0 ? {
        div: new i(0),
        mod: this
      } : f.length === 1 ? s === "div" ? {
        div: this.divn(f.words[0]),
        mod: null
      } : s === "mod" ? {
        div: null,
        mod: new i(this.modrn(f.words[0]))
      } : {
        div: this.divn(f.words[0]),
        mod: new i(this.modrn(f.words[0]))
      } : this._wordDiv(f, s);
    }, "divmod"), i.prototype.div = a(function (f) {
      return this.divmod(f, "div", !1).div;
    }, "div"), i.prototype.mod = a(function (f) {
      return this.divmod(f, "mod", !1).mod;
    }, "mod"), i.prototype.umod = a(function (f) {
      return this.divmod(f, "mod", !0).mod;
    }, "umod"), i.prototype.divRound = a(function (f) {
      var s = this.divmod(f);
      if (s.mod.isZero()) return s.div;
      var d = s.div.negative !== 0 ? s.mod.isub(f) : s.mod,
          v = f.ushrn(1),
          c = f.andln(1),
          u = d.cmp(v);
      return u < 0 || c === 1 && u === 0 ? s.div : s.div.negative !== 0 ? s.div.isubn(1) : s.div.iaddn(1);
    }, "divRound"), i.prototype.modrn = a(function (f) {
      var s = f < 0;
      s && (f = -f), r(f <= 67108863);

      for (var d = (1 << 26) % f, v = 0, c = this.length - 1; c >= 0; c--) v = (d * v + (this.words[c] | 0)) % f;

      return s ? -v : v;
    }, "modrn"), i.prototype.modn = a(function (f) {
      return this.modrn(f);
    }, "modn"), i.prototype.idivn = a(function (f) {
      var s = f < 0;
      s && (f = -f), r(f <= 67108863);

      for (var d = 0, v = this.length - 1; v >= 0; v--) {
        var c = (this.words[v] | 0) + d * 67108864;
        this.words[v] = c / f | 0, d = c % f;
      }

      return this._strip(), s ? this.ineg() : this;
    }, "idivn"), i.prototype.divn = a(function (f) {
      return this.clone().idivn(f);
    }, "divn"), i.prototype.egcd = a(function (f) {
      r(f.negative === 0), r(!f.isZero());
      var s = this,
          d = f.clone();
      s.negative !== 0 ? s = s.umod(f) : s = s.clone();

      for (var v = new i(1), c = new i(0), u = new i(0), m = new i(1), g = 0; s.isEven() && d.isEven();) s.iushrn(1), d.iushrn(1), ++g;

      for (var o = d.clone(), y = s.clone(); !s.isZero();) {
        for (var B = 0, I = 1; (s.words[0] & I) === 0 && B < 26; ++B, I <<= 1);

        if (B > 0) for (s.iushrn(B); B-- > 0;) (v.isOdd() || c.isOdd()) && (v.iadd(o), c.isub(y)), v.iushrn(1), c.iushrn(1);

        for (var R = 0, T = 1; (d.words[0] & T) === 0 && R < 26; ++R, T <<= 1);

        if (R > 0) for (d.iushrn(R); R-- > 0;) (u.isOdd() || m.isOdd()) && (u.iadd(o), m.isub(y)), u.iushrn(1), m.iushrn(1);
        s.cmp(d) >= 0 ? (s.isub(d), v.isub(u), c.isub(m)) : (d.isub(s), u.isub(v), m.isub(c));
      }

      return {
        a: u,
        b: m,
        gcd: d.iushln(g)
      };
    }, "egcd"), i.prototype._invmp = a(function (f) {
      r(f.negative === 0), r(!f.isZero());
      var s = this,
          d = f.clone();
      s.negative !== 0 ? s = s.umod(f) : s = s.clone();

      for (var v = new i(1), c = new i(0), u = d.clone(); s.cmpn(1) > 0 && d.cmpn(1) > 0;) {
        for (var m = 0, g = 1; (s.words[0] & g) === 0 && m < 26; ++m, g <<= 1);

        if (m > 0) for (s.iushrn(m); m-- > 0;) v.isOdd() && v.iadd(u), v.iushrn(1);

        for (var o = 0, y = 1; (d.words[0] & y) === 0 && o < 26; ++o, y <<= 1);

        if (o > 0) for (d.iushrn(o); o-- > 0;) c.isOdd() && c.iadd(u), c.iushrn(1);
        s.cmp(d) >= 0 ? (s.isub(d), v.isub(c)) : (d.isub(s), c.isub(v));
      }

      var B;
      return s.cmpn(1) === 0 ? B = v : B = c, B.cmpn(0) < 0 && B.iadd(f), B;
    }, "_invmp"), i.prototype.gcd = a(function (f) {
      if (this.isZero()) return f.abs();
      if (f.isZero()) return this.abs();
      var s = this.clone(),
          d = f.clone();
      s.negative = 0, d.negative = 0;

      for (var v = 0; s.isEven() && d.isEven(); v++) s.iushrn(1), d.iushrn(1);

      do {
        for (; s.isEven();) s.iushrn(1);

        for (; d.isEven();) d.iushrn(1);

        var c = s.cmp(d);

        if (c < 0) {
          var u = s;
          s = d, d = u;
        } else if (c === 0 || d.cmpn(1) === 0) break;

        s.isub(d);
      } while (!0);

      return d.iushln(v);
    }, "gcd"), i.prototype.invm = a(function (f) {
      return this.egcd(f).a.umod(f);
    }, "invm"), i.prototype.isEven = a(function () {
      return (this.words[0] & 1) === 0;
    }, "isEven"), i.prototype.isOdd = a(function () {
      return (this.words[0] & 1) === 1;
    }, "isOdd"), i.prototype.andln = a(function (f) {
      return this.words[0] & f;
    }, "andln"), i.prototype.bincn = a(function (f) {
      r(typeof f == "number");
      var s = f % 26,
          d = (f - s) / 26,
          v = 1 << s;
      if (this.length <= d) return this._expand(d + 1), this.words[d] |= v, this;

      for (var c = v, u = d; c !== 0 && u < this.length; u++) {
        var m = this.words[u] | 0;
        m += c, c = m >>> 26, m &= 67108863, this.words[u] = m;
      }

      return c !== 0 && (this.words[u] = c, this.length++), this;
    }, "bincn"), i.prototype.isZero = a(function () {
      return this.length === 1 && this.words[0] === 0;
    }, "isZero"), i.prototype.cmpn = a(function (f) {
      var s = f < 0;
      if (this.negative !== 0 && !s) return -1;
      if (this.negative === 0 && s) return 1;

      this._strip();

      var d;
      if (this.length > 1) d = 1;else {
        s && (f = -f), r(f <= 67108863, "Number is too big");
        var v = this.words[0] | 0;
        d = v === f ? 0 : v < f ? -1 : 1;
      }
      return this.negative !== 0 ? -d | 0 : d;
    }, "cmpn"), i.prototype.cmp = a(function (f) {
      if (this.negative !== 0 && f.negative === 0) return -1;
      if (this.negative === 0 && f.negative !== 0) return 1;
      var s = this.ucmp(f);
      return this.negative !== 0 ? -s | 0 : s;
    }, "cmp"), i.prototype.ucmp = a(function (f) {
      if (this.length > f.length) return 1;
      if (this.length < f.length) return -1;

      for (var s = 0, d = this.length - 1; d >= 0; d--) {
        var v = this.words[d] | 0,
            c = f.words[d] | 0;

        if (v !== c) {
          v < c ? s = -1 : v > c && (s = 1);
          break;
        }
      }

      return s;
    }, "ucmp"), i.prototype.gtn = a(function (f) {
      return this.cmpn(f) === 1;
    }, "gtn"), i.prototype.gt = a(function (f) {
      return this.cmp(f) === 1;
    }, "gt"), i.prototype.gten = a(function (f) {
      return this.cmpn(f) >= 0;
    }, "gten"), i.prototype.gte = a(function (f) {
      return this.cmp(f) >= 0;
    }, "gte"), i.prototype.ltn = a(function (f) {
      return this.cmpn(f) === -1;
    }, "ltn"), i.prototype.lt = a(function (f) {
      return this.cmp(f) === -1;
    }, "lt"), i.prototype.lten = a(function (f) {
      return this.cmpn(f) <= 0;
    }, "lten"), i.prototype.lte = a(function (f) {
      return this.cmp(f) <= 0;
    }, "lte"), i.prototype.eqn = a(function (f) {
      return this.cmpn(f) === 0;
    }, "eqn"), i.prototype.eq = a(function (f) {
      return this.cmp(f) === 0;
    }, "eq"), i.red = a(function (f) {
      return new p(f);
    }, "red"), i.prototype.toRed = a(function (f) {
      return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), f.convertTo(this)._forceRed(f);
    }, "toRed"), i.prototype.fromRed = a(function () {
      return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, "fromRed"), i.prototype._forceRed = a(function (f) {
      return this.red = f, this;
    }, "_forceRed"), i.prototype.forceRed = a(function (f) {
      return r(!this.red, "Already a number in reduction context"), this._forceRed(f);
    }, "forceRed"), i.prototype.redAdd = a(function (f) {
      return r(this.red, "redAdd works only with red numbers"), this.red.add(this, f);
    }, "redAdd"), i.prototype.redIAdd = a(function (f) {
      return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, f);
    }, "redIAdd"), i.prototype.redSub = a(function (f) {
      return r(this.red, "redSub works only with red numbers"), this.red.sub(this, f);
    }, "redSub"), i.prototype.redISub = a(function (f) {
      return r(this.red, "redISub works only with red numbers"), this.red.isub(this, f);
    }, "redISub"), i.prototype.redShl = a(function (f) {
      return r(this.red, "redShl works only with red numbers"), this.red.shl(this, f);
    }, "redShl"), i.prototype.redMul = a(function (f) {
      return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.mul(this, f);
    }, "redMul"), i.prototype.redIMul = a(function (f) {
      return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.imul(this, f);
    }, "redIMul"), i.prototype.redSqr = a(function () {
      return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, "redSqr"), i.prototype.redISqr = a(function () {
      return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, "redISqr"), i.prototype.redSqrt = a(function () {
      return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, "redSqrt"), i.prototype.redInvm = a(function () {
      return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, "redInvm"), i.prototype.redNeg = a(function () {
      return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, "redNeg"), i.prototype.redPow = a(function (f) {
      return r(this.red && !f.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, f);
    }, "redPow");
    var De = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };

    function Se(l, f) {
      this.name = l, this.p = new i(f, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }

    a(Se, "MPrime"), Se.prototype._tmp = a(function () {
      var f = new i(null);
      return f.words = new Array(Math.ceil(this.n / 13)), f;
    }, "_tmp"), Se.prototype.ireduce = a(function (f) {
      var s = f,
          d;

      do this.split(s, this.tmp), s = this.imulK(s), s = s.iadd(this.tmp), d = s.bitLength(); while (d > this.n);

      var v = d < this.n ? -1 : s.ucmp(this.p);
      return v === 0 ? (s.words[0] = 0, s.length = 1) : v > 0 ? s.isub(this.p) : s.strip !== void 0 ? s.strip() : s._strip(), s;
    }, "ireduce"), Se.prototype.split = a(function (f, s) {
      f.iushrn(this.n, 0, s);
    }, "split"), Se.prototype.imulK = a(function (f) {
      return f.imul(this.k);
    }, "imulK");

    function Ne() {
      Se.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }

    a(Ne, "K256"), n(Ne, Se), Ne.prototype.split = a(function (f, s) {
      for (var d = 4194303, v = Math.min(f.length, 9), c = 0; c < v; c++) s.words[c] = f.words[c];

      if (s.length = v, f.length <= 9) {
        f.words[0] = 0, f.length = 1;
        return;
      }

      var u = f.words[9];

      for (s.words[s.length++] = u & d, c = 10; c < f.length; c++) {
        var m = f.words[c] | 0;
        f.words[c - 10] = (m & d) << 4 | u >>> 22, u = m;
      }

      u >>>= 22, f.words[c - 10] = u, u === 0 && f.length > 10 ? f.length -= 10 : f.length -= 9;
    }, "split"), Ne.prototype.imulK = a(function (f) {
      f.words[f.length] = 0, f.words[f.length + 1] = 0, f.length += 2;

      for (var s = 0, d = 0; d < f.length; d++) {
        var v = f.words[d] | 0;
        s += v * 977, f.words[d] = s & 67108863, s = v * 64 + (s / 67108864 | 0);
      }

      return f.words[f.length - 1] === 0 && (f.length--, f.words[f.length - 1] === 0 && f.length--), f;
    }, "imulK");

    function Ae() {
      Se.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }

    a(Ae, "P224"), n(Ae, Se);

    function Le() {
      Se.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }

    a(Le, "P192"), n(Le, Se);

    function E() {
      Se.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }

    a(E, "P25519"), n(E, Se), E.prototype.imulK = a(function (f) {
      for (var s = 0, d = 0; d < f.length; d++) {
        var v = (f.words[d] | 0) * 19 + s,
            c = v & 67108863;
        v >>>= 26, f.words[d] = c, s = v;
      }

      return s !== 0 && (f.words[f.length++] = s), f;
    }, "imulK"), i._prime = a(function (f) {
      if (De[f]) return De[f];
      var s;
      if (f === "k256") s = new Ne();else if (f === "p224") s = new Ae();else if (f === "p192") s = new Le();else if (f === "p25519") s = new E();else throw new Error("Unknown prime " + f);
      return De[f] = s, s;
    }, "prime");

    function p(l) {
      if (typeof l == "string") {
        var f = i._prime(l);

        this.m = f.p, this.prime = f;
      } else r(l.gtn(1), "modulus must be greater than 1"), this.m = l, this.prime = null;
    }

    a(p, "Red"), p.prototype._verify1 = a(function (f) {
      r(f.negative === 0, "red works only with positives"), r(f.red, "red works only with red numbers");
    }, "_verify1"), p.prototype._verify2 = a(function (f, s) {
      r((f.negative | s.negative) === 0, "red works only with positives"), r(f.red && f.red === s.red, "red works only with red numbers");
    }, "_verify2"), p.prototype.imod = a(function (f) {
      return this.prime ? this.prime.ireduce(f)._forceRed(this) : (M(f, f.umod(this.m)._forceRed(this)), f);
    }, "imod"), p.prototype.neg = a(function (f) {
      return f.isZero() ? f.clone() : this.m.sub(f)._forceRed(this);
    }, "neg"), p.prototype.add = a(function (f, s) {
      this._verify2(f, s);

      var d = f.add(s);
      return d.cmp(this.m) >= 0 && d.isub(this.m), d._forceRed(this);
    }, "add"), p.prototype.iadd = a(function (f, s) {
      this._verify2(f, s);

      var d = f.iadd(s);
      return d.cmp(this.m) >= 0 && d.isub(this.m), d;
    }, "iadd"), p.prototype.sub = a(function (f, s) {
      this._verify2(f, s);

      var d = f.sub(s);
      return d.cmpn(0) < 0 && d.iadd(this.m), d._forceRed(this);
    }, "sub"), p.prototype.isub = a(function (f, s) {
      this._verify2(f, s);

      var d = f.isub(s);
      return d.cmpn(0) < 0 && d.iadd(this.m), d;
    }, "isub"), p.prototype.shl = a(function (f, s) {
      return this._verify1(f), this.imod(f.ushln(s));
    }, "shl"), p.prototype.imul = a(function (f, s) {
      return this._verify2(f, s), this.imod(f.imul(s));
    }, "imul"), p.prototype.mul = a(function (f, s) {
      return this._verify2(f, s), this.imod(f.mul(s));
    }, "mul"), p.prototype.isqr = a(function (f) {
      return this.imul(f, f.clone());
    }, "isqr"), p.prototype.sqr = a(function (f) {
      return this.mul(f, f);
    }, "sqr"), p.prototype.sqrt = a(function (f) {
      if (f.isZero()) return f.clone();
      var s = this.m.andln(3);

      if (r(s % 2 === 1), s === 3) {
        var d = this.m.add(new i(1)).iushrn(2);
        return this.pow(f, d);
      }

      for (var v = this.m.subn(1), c = 0; !v.isZero() && v.andln(1) === 0;) c++, v.iushrn(1);

      r(!v.isZero());
      var u = new i(1).toRed(this),
          m = u.redNeg(),
          g = this.m.subn(1).iushrn(1),
          o = this.m.bitLength();

      for (o = new i(2 * o * o).toRed(this); this.pow(o, g).cmp(m) !== 0;) o.redIAdd(m);

      for (var y = this.pow(o, v), B = this.pow(f, v.addn(1).iushrn(1)), I = this.pow(f, v), R = c; I.cmp(u) !== 0;) {
        for (var T = I, C = 0; T.cmp(u) !== 0; C++) T = T.redSqr();

        r(C < R);
        var L = this.pow(y, new i(1).iushln(R - C - 1));
        B = B.redMul(L), y = L.redSqr(), I = I.redMul(y), R = C;
      }

      return B;
    }, "sqrt"), p.prototype.invm = a(function (f) {
      var s = f._invmp(this.m);

      return s.negative !== 0 ? (s.negative = 0, this.imod(s).redNeg()) : this.imod(s);
    }, "invm"), p.prototype.pow = a(function (f, s) {
      if (s.isZero()) return new i(1).toRed(this);
      if (s.cmpn(1) === 0) return f.clone();
      var d = 4,
          v = new Array(1 << d);
      v[0] = new i(1).toRed(this), v[1] = f;

      for (var c = 2; c < v.length; c++) v[c] = this.mul(v[c - 1], f);

      var u = v[0],
          m = 0,
          g = 0,
          o = s.bitLength() % 26;

      for (o === 0 && (o = 26), c = s.length - 1; c >= 0; c--) {
        for (var y = s.words[c], B = o - 1; B >= 0; B--) {
          var I = y >> B & 1;

          if (u !== v[0] && (u = this.sqr(u)), I === 0 && m === 0) {
            g = 0;
            continue;
          }

          m <<= 1, m |= I, g++, !(g !== d && (c !== 0 || B !== 0)) && (u = this.mul(u, v[m]), g = 0, m = 0);
        }

        o = 26;
      }

      return u;
    }, "pow"), p.prototype.convertTo = a(function (f) {
      var s = f.umod(this.m);
      return s === f ? s.clone() : s;
    }, "convertTo"), p.prototype.convertFrom = a(function (f) {
      var s = f.clone();
      return s.red = null, s;
    }, "convertFrom"), i.mont = a(function (f) {
      return new w(f);
    }, "mont");

    function w(l) {
      p.call(this, l), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }

    a(w, "Mont"), n(w, p), w.prototype.convertTo = a(function (f) {
      return this.imod(f.ushln(this.shift));
    }, "convertTo"), w.prototype.convertFrom = a(function (f) {
      var s = this.imod(f.mul(this.rinv));
      return s.red = null, s;
    }, "convertFrom"), w.prototype.imul = a(function (f, s) {
      if (f.isZero() || s.isZero()) return f.words[0] = 0, f.length = 1, f;
      var d = f.imul(s),
          v = d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          c = d.isub(v).iushrn(this.shift),
          u = c;
      return c.cmp(this.m) >= 0 ? u = c.isub(this.m) : c.cmpn(0) < 0 && (u = c.iadd(this.m)), u._forceRed(this);
    }, "imul"), w.prototype.mul = a(function (f, s) {
      if (f.isZero() || s.isZero()) return new i(0)._forceRed(this);
      var d = f.mul(s),
          v = d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          c = d.isub(v).iushrn(this.shift),
          u = c;
      return c.cmp(this.m) >= 0 ? u = c.isub(this.m) : c.cmpn(0) < 0 && (u = c.iadd(this.m)), u._forceRed(this);
    }, "mul"), w.prototype.invm = a(function (f) {
      var s = this.imod(f._invmp(this.m).mul(this.r2));
      return s._forceRed(this);
    }, "invm");
  })(typeof j0 > "u" || j0, dd);
});
var Fn = D((lm, pd) => {
  var ji = cd(),
      f6 = ni();

  function n6(t) {
    var e = ld(t),
        r = e.toRed(ji.mont(t.modulus)).redPow(new ji(t.publicExponent)).fromRed();
    return {
      blinder: r,
      unblinder: e.invm(t.modulus)
    };
  }

  a(n6, "blind");

  function ld(t) {
    var e = t.modulus.byteLength(),
        r;

    do r = new ji(f6(e)); while (r.cmp(t.modulus) >= 0 || !r.umod(t.prime1) || !r.umod(t.prime2));

    return r;
  }

  a(ld, "getr");

  function vd(t, e) {
    var r = n6(e),
        n = e.modulus.byteLength(),
        i = new ji(t).mul(r.blinder).umod(e.modulus),
        h = i.toRed(ji.mont(e.prime1)),
        b = i.toRed(ji.mont(e.prime2)),
        _ = e.coefficient,
        x = e.prime1,
        M = e.prime2,
        S = h.redPow(e.exponent1).fromRed(),
        A = b.redPow(e.exponent2).fromRed(),
        q = S.isub(A).imul(_).umod(x).imul(M);
    return A.iadd(q).imul(r.unblinder).umod(e.modulus).toArrayLike(__Buffer$, "be", n);
  }

  a(vd, "crt");
  vd.getr = ld;
  pd.exports = vd;
});
var bd = D((vm, a6) => {
  a6.exports = {
    name: "elliptic",
    version: "6.5.4",
    description: "EC cryptography",
    main: "lib/elliptic.js",
    files: ["lib"],
    scripts: {
      lint: "eslint lib test",
      "lint:fix": "npm run lint -- --fix",
      unit: "istanbul test _mocha --reporter=spec test/index.js",
      test: "npm run lint && npm run unit",
      version: "grunt dist && git add dist/"
    },
    repository: {
      type: "git",
      url: "git@github.com:indutny/elliptic"
    },
    keywords: ["EC", "Elliptic", "curve", "Cryptography"],
    author: "Fedor Indutny <fedor@indutny.com>",
    license: "MIT",
    bugs: {
      url: "https://github.com/indutny/elliptic/issues"
    },
    homepage: "https://github.com/indutny/elliptic",
    devDependencies: {
      brfs: "^2.0.2",
      coveralls: "^3.1.0",
      eslint: "^7.6.0",
      grunt: "^1.2.1",
      "grunt-browserify": "^5.3.0",
      "grunt-cli": "^1.3.2",
      "grunt-contrib-connect": "^3.0.0",
      "grunt-contrib-copy": "^1.0.0",
      "grunt-contrib-uglify": "^5.0.0",
      "grunt-mocha-istanbul": "^5.0.2",
      "grunt-saucelabs": "^9.0.1",
      istanbul: "^0.4.5",
      mocha: "^8.0.1"
    },
    dependencies: {
      "bn.js": "^4.11.9",
      brorand: "^1.1.0",
      "hash.js": "^1.0.0",
      "hmac-drbg": "^1.0.1",
      inherits: "^2.0.4",
      "minimalistic-assert": "^1.0.1",
      "minimalistic-crypto-utils": "^1.0.1"
    }
  };
});
var W0 = D(yd => {
  "use strict";

  var Kn = yd;

  function s6(t, e) {
    if (Array.isArray(t)) return t.slice();
    if (!t) return [];
    var r = [];

    if (typeof t != "string") {
      for (var n = 0; n < t.length; n++) r[n] = t[n] | 0;

      return r;
    }

    if (e === "hex") {
      t = t.replace(/[^a-z0-9]+/ig, ""), t.length % 2 !== 0 && (t = "0" + t);

      for (var n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16));
    } else for (var n = 0; n < t.length; n++) {
      var i = t.charCodeAt(n),
          h = i >> 8,
          b = i & 255;
      h ? r.push(h, b) : r.push(b);
    }

    return r;
  }

  a(s6, "toArray");
  Kn.toArray = s6;

  function md(t) {
    return t.length === 1 ? "0" + t : t;
  }

  a(md, "zero2");
  Kn.zero2 = md;

  function gd(t) {
    for (var e = "", r = 0; r < t.length; r++) e += md(t[r].toString(16));

    return e;
  }

  a(gd, "toHex");
  Kn.toHex = gd;
  Kn.encode = a(function (e, r) {
    return r === "hex" ? gd(e) : e;
  }, "encode");
});
var ut = D(_d => {
  "use strict";

  var Vt = _d,
      o6 = Ke(),
      h6 = ht(),
      jn = W0();
  Vt.assert = h6;
  Vt.toArray = jn.toArray;
  Vt.zero2 = jn.zero2;
  Vt.toHex = jn.toHex;
  Vt.encode = jn.encode;

  function u6(t, e, r) {
    var n = new Array(Math.max(t.bitLength(), r) + 1);
    n.fill(0);

    for (var i = 1 << e + 1, h = t.clone(), b = 0; b < n.length; b++) {
      var _,
          x = h.andln(i - 1);

      h.isOdd() ? (x > (i >> 1) - 1 ? _ = (i >> 1) - x : _ = x, h.isubn(_)) : _ = 0, n[b] = _, h.iushrn(1);
    }

    return n;
  }

  a(u6, "getNAF");
  Vt.getNAF = u6;

  function d6(t, e) {
    var r = [[], []];
    t = t.clone(), e = e.clone();

    for (var n = 0, i = 0, h; t.cmpn(-n) > 0 || e.cmpn(-i) > 0;) {
      var b = t.andln(3) + n & 3,
          _ = e.andln(3) + i & 3;

      b === 3 && (b = -1), _ === 3 && (_ = -1);
      var x;
      (b & 1) === 0 ? x = 0 : (h = t.andln(7) + n & 7, (h === 3 || h === 5) && _ === 2 ? x = -b : x = b), r[0].push(x);
      var M;
      (_ & 1) === 0 ? M = 0 : (h = e.andln(7) + i & 7, (h === 3 || h === 5) && b === 2 ? M = -_ : M = _), r[1].push(M), 2 * n === x + 1 && (n = 1 - n), 2 * i === M + 1 && (i = 1 - i), t.iushrn(1), e.iushrn(1);
    }

    return r;
  }

  a(d6, "getJSF");
  Vt.getJSF = d6;

  function c6(t, e, r) {
    var n = "_" + e;
    t.prototype[e] = a(function () {
      return this[n] !== void 0 ? this[n] : this[n] = r.call(this);
    }, "cachedProperty");
  }

  a(c6, "cachedProperty");
  Vt.cachedProperty = c6;

  function l6(t) {
    return typeof t == "string" ? Vt.toArray(t, "hex") : t;
  }

  a(l6, "parseBytes");
  Vt.parseBytes = l6;

  function v6(t) {
    return new o6(t, "hex", "le");
  }

  a(v6, "intFromLE");
  Vt.intFromLE = v6;
});
var Of = D((mm, wd) => {
  "use strict";

  var xi = Ke(),
      Lf = ut(),
      Wn = Lf.getNAF,
      p6 = Lf.getJSF,
      Vn = Lf.assert;

  function Yr(t, e) {
    this.type = t, this.p = new xi(e.p, 16), this.red = e.prime ? xi.red(e.prime) : xi.mont(this.p), this.zero = new xi(0).toRed(this.red), this.one = new xi(1).toRed(this.red), this.two = new xi(2).toRed(this.red), this.n = e.n && new xi(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
    var r = this.n && this.p.div(this.n);
    !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
  }

  a(Yr, "BaseCurve");
  wd.exports = Yr;
  Yr.prototype.point = a(function () {
    throw new Error("Not implemented");
  }, "point");
  Yr.prototype.validate = a(function () {
    throw new Error("Not implemented");
  }, "validate");
  Yr.prototype._fixedNafMul = a(function (e, r) {
    Vn(e.precomputed);

    var n = e._getDoubles(),
        i = Wn(r, 1, this._bitLength),
        h = (1 << n.step + 1) - (n.step % 2 === 0 ? 2 : 1);

    h /= 3;

    var b = [],
        _,
        x;

    for (_ = 0; _ < i.length; _ += n.step) {
      x = 0;

      for (var M = _ + n.step - 1; M >= _; M--) x = (x << 1) + i[M];

      b.push(x);
    }

    for (var S = this.jpoint(null, null, null), A = this.jpoint(null, null, null), q = h; q > 0; q--) {
      for (_ = 0; _ < b.length; _++) x = b[_], x === q ? A = A.mixedAdd(n.points[_]) : x === -q && (A = A.mixedAdd(n.points[_].neg()));

      S = S.add(A);
    }

    return S.toP();
  }, "_fixedNafMul");
  Yr.prototype._wnafMul = a(function (e, r) {
    var n = 4,
        i = e._getNAFPoints(n);

    n = i.wnd;

    for (var h = i.points, b = Wn(r, n, this._bitLength), _ = this.jpoint(null, null, null), x = b.length - 1; x >= 0; x--) {
      for (var M = 0; x >= 0 && b[x] === 0; x--) M++;

      if (x >= 0 && M++, _ = _.dblp(M), x < 0) break;
      var S = b[x];
      Vn(S !== 0), e.type === "affine" ? S > 0 ? _ = _.mixedAdd(h[S - 1 >> 1]) : _ = _.mixedAdd(h[-S - 1 >> 1].neg()) : S > 0 ? _ = _.add(h[S - 1 >> 1]) : _ = _.add(h[-S - 1 >> 1].neg());
    }

    return e.type === "affine" ? _.toP() : _;
  }, "_wnafMul");
  Yr.prototype._wnafMulAdd = a(function (e, r, n, i, h) {
    var b = this._wnafT1,
        _ = this._wnafT2,
        x = this._wnafT3,
        M = 0,
        S,
        A,
        q;

    for (S = 0; S < i; S++) {
      q = r[S];

      var k = q._getNAFPoints(e);

      b[S] = k.wnd, _[S] = k.points;
    }

    for (S = i - 1; S >= 1; S -= 2) {
      var P = S - 1,
          N = S;

      if (b[P] !== 1 || b[N] !== 1) {
        x[P] = Wn(n[P], b[P], this._bitLength), x[N] = Wn(n[N], b[N], this._bitLength), M = Math.max(x[P].length, M), M = Math.max(x[N].length, M);
        continue;
      }

      var ye = [r[P], null, null, r[N]];
      r[P].y.cmp(r[N].y) === 0 ? (ye[1] = r[P].add(r[N]), ye[2] = r[P].toJ().mixedAdd(r[N].neg())) : r[P].y.cmp(r[N].y.redNeg()) === 0 ? (ye[1] = r[P].toJ().mixedAdd(r[N]), ye[2] = r[P].add(r[N].neg())) : (ye[1] = r[P].toJ().mixedAdd(r[N]), ye[2] = r[P].toJ().mixedAdd(r[N].neg()));

      var O = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
          _e = p6(n[P], n[N]);

      for (M = Math.max(_e[0].length, M), x[P] = new Array(M), x[N] = new Array(M), A = 0; A < M; A++) {
        var Ie = _e[0][A] | 0,
            Me = _e[1][A] | 0;
        x[P][A] = O[(Ie + 1) * 3 + (Me + 1)], x[N][A] = 0, _[P] = ye;
      }
    }

    var De = this.jpoint(null, null, null),
        Se = this._wnafT4;

    for (S = M; S >= 0; S--) {
      for (var Ne = 0; S >= 0;) {
        var Ae = !0;

        for (A = 0; A < i; A++) Se[A] = x[A][S] | 0, Se[A] !== 0 && (Ae = !1);

        if (!Ae) break;
        Ne++, S--;
      }

      if (S >= 0 && Ne++, De = De.dblp(Ne), S < 0) break;

      for (A = 0; A < i; A++) {
        var Le = Se[A];
        Le !== 0 && (Le > 0 ? q = _[A][Le - 1 >> 1] : Le < 0 && (q = _[A][-Le - 1 >> 1].neg()), q.type === "affine" ? De = De.mixedAdd(q) : De = De.add(q));
      }
    }

    for (S = 0; S < i; S++) _[S] = null;

    return h ? De : De.toP();
  }, "_wnafMulAdd");

  function yt(t, e) {
    this.curve = t, this.type = e, this.precomputed = null;
  }

  a(yt, "BasePoint");
  Yr.BasePoint = yt;
  yt.prototype.eq = a(function () {
    throw new Error("Not implemented");
  }, "eq");
  yt.prototype.validate = a(function () {
    return this.curve.validate(this);
  }, "validate");
  Yr.prototype.decodePoint = a(function (e, r) {
    e = Lf.toArray(e, r);
    var n = this.p.byteLength();

    if ((e[0] === 4 || e[0] === 6 || e[0] === 7) && e.length - 1 === 2 * n) {
      e[0] === 6 ? Vn(e[e.length - 1] % 2 === 0) : e[0] === 7 && Vn(e[e.length - 1] % 2 === 1);
      var i = this.point(e.slice(1, 1 + n), e.slice(1 + n, 1 + 2 * n));
      return i;
    } else if ((e[0] === 2 || e[0] === 3) && e.length - 1 === n) return this.pointFromX(e.slice(1, 1 + n), e[0] === 3);

    throw new Error("Unknown point format");
  }, "decodePoint");
  yt.prototype.encodeCompressed = a(function (e) {
    return this.encode(e, !0);
  }, "encodeCompressed");
  yt.prototype._encode = a(function (e) {
    var r = this.curve.p.byteLength(),
        n = this.getX().toArray("be", r);
    return e ? [this.getY().isEven() ? 2 : 3].concat(n) : [4].concat(n, this.getY().toArray("be", r));
  }, "_encode");
  yt.prototype.encode = a(function (e, r) {
    return Lf.encode(this._encode(r), e);
  }, "encode");
  yt.prototype.precompute = a(function (e) {
    if (this.precomputed) return this;
    var r = {
      doubles: null,
      naf: null,
      beta: null
    };
    return r.naf = this._getNAFPoints(8), r.doubles = this._getDoubles(4, e), r.beta = this._getBeta(), this.precomputed = r, this;
  }, "precompute");
  yt.prototype._hasDoubles = a(function (e) {
    if (!this.precomputed) return !1;
    var r = this.precomputed.doubles;
    return r ? r.points.length >= Math.ceil((e.bitLength() + 1) / r.step) : !1;
  }, "_hasDoubles");
  yt.prototype._getDoubles = a(function (e, r) {
    if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;

    for (var n = [this], i = this, h = 0; h < r; h += e) {
      for (var b = 0; b < e; b++) i = i.dbl();

      n.push(i);
    }

    return {
      step: e,
      points: n
    };
  }, "_getDoubles");
  yt.prototype._getNAFPoints = a(function (e) {
    if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;

    for (var r = [this], n = (1 << e) - 1, i = n === 1 ? null : this.dbl(), h = 1; h < n; h++) r[h] = r[h - 1].add(i);

    return {
      wnd: e,
      points: r
    };
  }, "_getNAFPoints");
  yt.prototype._getBeta = a(function () {
    return null;
  }, "_getBeta");
  yt.prototype.dblp = a(function (e) {
    for (var r = this, n = 0; n < e; n++) r = r.dbl();

    return r;
  }, "dblp");
});
var Md = D((gm, xd) => {
  "use strict";

  var b6 = ut(),
      ze = Ke(),
      V0 = Be(),
      Wi = Of(),
      m6 = b6.assert;

  function _t(t) {
    Wi.call(this, "short", t), this.a = new ze(t.a, 16).toRed(this.red), this.b = new ze(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
  }

  a(_t, "ShortCurve");
  V0(_t, Wi);
  xd.exports = _t;
  _t.prototype._getEndomorphism = a(function (e) {
    if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
      var r, n;
      if (e.beta) r = new ze(e.beta, 16).toRed(this.red);else {
        var i = this._getEndoRoots(this.p);

        r = i[0].cmp(i[1]) < 0 ? i[0] : i[1], r = r.toRed(this.red);
      }
      if (e.lambda) n = new ze(e.lambda, 16);else {
        var h = this._getEndoRoots(this.n);

        this.g.mul(h[0]).x.cmp(this.g.x.redMul(r)) === 0 ? n = h[0] : (n = h[1], m6(this.g.mul(n).x.cmp(this.g.x.redMul(r)) === 0));
      }
      var b;
      return e.basis ? b = e.basis.map(function (_) {
        return {
          a: new ze(_.a, 16),
          b: new ze(_.b, 16)
        };
      }) : b = this._getEndoBasis(n), {
        beta: r,
        lambda: n,
        basis: b
      };
    }
  }, "_getEndomorphism");
  _t.prototype._getEndoRoots = a(function (e) {
    var r = e === this.p ? this.red : ze.mont(e),
        n = new ze(2).toRed(r).redInvm(),
        i = n.redNeg(),
        h = new ze(3).toRed(r).redNeg().redSqrt().redMul(n),
        b = i.redAdd(h).fromRed(),
        _ = i.redSub(h).fromRed();

    return [b, _];
  }, "_getEndoRoots");
  _t.prototype._getEndoBasis = a(function (e) {
    for (var r = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), n = e, i = this.n.clone(), h = new ze(1), b = new ze(0), _ = new ze(0), x = new ze(1), M, S, A, q, k, P, N, ye = 0, O, _e; n.cmpn(0) !== 0;) {
      var Ie = i.div(n);
      O = i.sub(Ie.mul(n)), _e = _.sub(Ie.mul(h));
      var Me = x.sub(Ie.mul(b));
      if (!A && O.cmp(r) < 0) M = N.neg(), S = h, A = O.neg(), q = _e;else if (A && ++ye === 2) break;
      N = O, i = n, n = O, _ = h, h = _e, x = b, b = Me;
    }

    k = O.neg(), P = _e;
    var De = A.sqr().add(q.sqr()),
        Se = k.sqr().add(P.sqr());
    return Se.cmp(De) >= 0 && (k = M, P = S), A.negative && (A = A.neg(), q = q.neg()), k.negative && (k = k.neg(), P = P.neg()), [{
      a: A,
      b: q
    }, {
      a: k,
      b: P
    }];
  }, "_getEndoBasis");
  _t.prototype._endoSplit = a(function (e) {
    var r = this.endo.basis,
        n = r[0],
        i = r[1],
        h = i.b.mul(e).divRound(this.n),
        b = n.b.neg().mul(e).divRound(this.n),
        _ = h.mul(n.a),
        x = b.mul(i.a),
        M = h.mul(n.b),
        S = b.mul(i.b),
        A = e.sub(_).sub(x),
        q = M.add(S).neg();

    return {
      k1: A,
      k2: q
    };
  }, "_endoSplit");
  _t.prototype.pointFromX = a(function (e, r) {
    e = new ze(e, 16), e.red || (e = e.toRed(this.red));
    var n = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
        i = n.redSqrt();
    if (i.redSqr().redSub(n).cmp(this.zero) !== 0) throw new Error("invalid point");
    var h = i.fromRed().isOdd();
    return (r && !h || !r && h) && (i = i.redNeg()), this.point(e, i);
  }, "pointFromX");
  _t.prototype.validate = a(function (e) {
    if (e.inf) return !0;
    var r = e.x,
        n = e.y,
        i = this.a.redMul(r),
        h = r.redSqr().redMul(r).redIAdd(i).redIAdd(this.b);
    return n.redSqr().redISub(h).cmpn(0) === 0;
  }, "validate");
  _t.prototype._endoWnafMulAdd = a(function (e, r, n) {
    for (var i = this._endoWnafT1, h = this._endoWnafT2, b = 0; b < e.length; b++) {
      var _ = this._endoSplit(r[b]),
          x = e[b],
          M = x._getBeta();

      _.k1.negative && (_.k1.ineg(), x = x.neg(!0)), _.k2.negative && (_.k2.ineg(), M = M.neg(!0)), i[b * 2] = x, i[b * 2 + 1] = M, h[b * 2] = _.k1, h[b * 2 + 1] = _.k2;
    }

    for (var S = this._wnafMulAdd(1, i, h, b * 2, n), A = 0; A < b * 2; A++) i[A] = null, h[A] = null;

    return S;
  }, "_endoWnafMulAdd");

  function Ve(t, e, r, n) {
    Wi.BasePoint.call(this, t, "affine"), e === null && r === null ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new ze(e, 16), this.y = new ze(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
  }

  a(Ve, "Point");
  V0(Ve, Wi.BasePoint);
  _t.prototype.point = a(function (e, r, n) {
    return new Ve(this, e, r, n);
  }, "point");
  _t.prototype.pointFromJSON = a(function (e, r) {
    return Ve.fromJSON(this, e, r);
  }, "pointFromJSON");
  Ve.prototype._getBeta = a(function () {
    if (!!this.curve.endo) {
      var e = this.precomputed;
      if (e && e.beta) return e.beta;
      var r = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);

      if (e) {
        var n = this.curve,
            i = a(function (h) {
          return n.point(h.x.redMul(n.endo.beta), h.y);
        }, "endoMul");
        e.beta = r, r.precomputed = {
          beta: null,
          naf: e.naf && {
            wnd: e.naf.wnd,
            points: e.naf.points.map(i)
          },
          doubles: e.doubles && {
            step: e.doubles.step,
            points: e.doubles.points.map(i)
          }
        };
      }

      return r;
    }
  }, "_getBeta");
  Ve.prototype.toJSON = a(function () {
    return this.precomputed ? [this.x, this.y, this.precomputed && {
      doubles: this.precomputed.doubles && {
        step: this.precomputed.doubles.step,
        points: this.precomputed.doubles.points.slice(1)
      },
      naf: this.precomputed.naf && {
        wnd: this.precomputed.naf.wnd,
        points: this.precomputed.naf.points.slice(1)
      }
    }] : [this.x, this.y];
  }, "toJSON");
  Ve.fromJSON = a(function (e, r, n) {
    typeof r == "string" && (r = JSON.parse(r));
    var i = e.point(r[0], r[1], n);
    if (!r[2]) return i;

    function h(_) {
      return e.point(_[0], _[1], n);
    }

    a(h, "obj2point");
    var b = r[2];
    return i.precomputed = {
      beta: null,
      doubles: b.doubles && {
        step: b.doubles.step,
        points: [i].concat(b.doubles.points.map(h))
      },
      naf: b.naf && {
        wnd: b.naf.wnd,
        points: [i].concat(b.naf.points.map(h))
      }
    }, i;
  }, "fromJSON");
  Ve.prototype.inspect = a(function () {
    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
  }, "inspect");
  Ve.prototype.isInfinity = a(function () {
    return this.inf;
  }, "isInfinity");
  Ve.prototype.add = a(function (e) {
    if (this.inf) return e;
    if (e.inf) return this;
    if (this.eq(e)) return this.dbl();
    if (this.neg().eq(e)) return this.curve.point(null, null);
    if (this.x.cmp(e.x) === 0) return this.curve.point(null, null);
    var r = this.y.redSub(e.y);
    r.cmpn(0) !== 0 && (r = r.redMul(this.x.redSub(e.x).redInvm()));
    var n = r.redSqr().redISub(this.x).redISub(e.x),
        i = r.redMul(this.x.redSub(n)).redISub(this.y);
    return this.curve.point(n, i);
  }, "add");
  Ve.prototype.dbl = a(function () {
    if (this.inf) return this;
    var e = this.y.redAdd(this.y);
    if (e.cmpn(0) === 0) return this.curve.point(null, null);

    var r = this.curve.a,
        n = this.x.redSqr(),
        i = e.redInvm(),
        h = n.redAdd(n).redIAdd(n).redIAdd(r).redMul(i),
        b = h.redSqr().redISub(this.x.redAdd(this.x)),
        _ = h.redMul(this.x.redSub(b)).redISub(this.y);

    return this.curve.point(b, _);
  }, "dbl");
  Ve.prototype.getX = a(function () {
    return this.x.fromRed();
  }, "getX");
  Ve.prototype.getY = a(function () {
    return this.y.fromRed();
  }, "getY");
  Ve.prototype.mul = a(function (e) {
    return e = new ze(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e);
  }, "mul");
  Ve.prototype.mulAdd = a(function (e, r, n) {
    var i = [this, r],
        h = [e, n];
    return this.curve.endo ? this.curve._endoWnafMulAdd(i, h) : this.curve._wnafMulAdd(1, i, h, 2);
  }, "mulAdd");
  Ve.prototype.jmulAdd = a(function (e, r, n) {
    var i = [this, r],
        h = [e, n];
    return this.curve.endo ? this.curve._endoWnafMulAdd(i, h, !0) : this.curve._wnafMulAdd(1, i, h, 2, !0);
  }, "jmulAdd");
  Ve.prototype.eq = a(function (e) {
    return this === e || this.inf === e.inf && (this.inf || this.x.cmp(e.x) === 0 && this.y.cmp(e.y) === 0);
  }, "eq");
  Ve.prototype.neg = a(function (e) {
    if (this.inf) return this;
    var r = this.curve.point(this.x, this.y.redNeg());

    if (e && this.precomputed) {
      var n = this.precomputed,
          i = a(function (h) {
        return h.neg();
      }, "negate");
      r.precomputed = {
        naf: n.naf && {
          wnd: n.naf.wnd,
          points: n.naf.points.map(i)
        },
        doubles: n.doubles && {
          step: n.doubles.step,
          points: n.doubles.points.map(i)
        }
      };
    }

    return r;
  }, "neg");
  Ve.prototype.toJ = a(function () {
    if (this.inf) return this.curve.jpoint(null, null, null);
    var e = this.curve.jpoint(this.x, this.y, this.curve.one);
    return e;
  }, "toJ");

  function Ye(t, e, r, n) {
    Wi.BasePoint.call(this, t, "jacobian"), e === null && r === null && n === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new ze(0)) : (this.x = new ze(e, 16), this.y = new ze(r, 16), this.z = new ze(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
  }

  a(Ye, "JPoint");
  V0(Ye, Wi.BasePoint);
  _t.prototype.jpoint = a(function (e, r, n) {
    return new Ye(this, e, r, n);
  }, "jpoint");
  Ye.prototype.toP = a(function () {
    if (this.isInfinity()) return this.curve.point(null, null);
    var e = this.z.redInvm(),
        r = e.redSqr(),
        n = this.x.redMul(r),
        i = this.y.redMul(r).redMul(e);
    return this.curve.point(n, i);
  }, "toP");
  Ye.prototype.neg = a(function () {
    return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
  }, "neg");
  Ye.prototype.add = a(function (e) {
    if (this.isInfinity()) return e;
    if (e.isInfinity()) return this;

    var r = e.z.redSqr(),
        n = this.z.redSqr(),
        i = this.x.redMul(r),
        h = e.x.redMul(n),
        b = this.y.redMul(r.redMul(e.z)),
        _ = e.y.redMul(n.redMul(this.z)),
        x = i.redSub(h),
        M = b.redSub(_);

    if (x.cmpn(0) === 0) return M.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
    var S = x.redSqr(),
        A = S.redMul(x),
        q = i.redMul(S),
        k = M.redSqr().redIAdd(A).redISub(q).redISub(q),
        P = M.redMul(q.redISub(k)).redISub(b.redMul(A)),
        N = this.z.redMul(e.z).redMul(x);
    return this.curve.jpoint(k, P, N);
  }, "add");
  Ye.prototype.mixedAdd = a(function (e) {
    if (this.isInfinity()) return e.toJ();
    if (e.isInfinity()) return this;

    var r = this.z.redSqr(),
        n = this.x,
        i = e.x.redMul(r),
        h = this.y,
        b = e.y.redMul(r).redMul(this.z),
        _ = n.redSub(i),
        x = h.redSub(b);

    if (_.cmpn(0) === 0) return x.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();

    var M = _.redSqr(),
        S = M.redMul(_),
        A = n.redMul(M),
        q = x.redSqr().redIAdd(S).redISub(A).redISub(A),
        k = x.redMul(A.redISub(q)).redISub(h.redMul(S)),
        P = this.z.redMul(_);

    return this.curve.jpoint(q, k, P);
  }, "mixedAdd");
  Ye.prototype.dblp = a(function (e) {
    if (e === 0) return this;
    if (this.isInfinity()) return this;
    if (!e) return this.dbl();
    var r;

    if (this.curve.zeroA || this.curve.threeA) {
      var n = this;

      for (r = 0; r < e; r++) n = n.dbl();

      return n;
    }

    var i = this.curve.a,
        h = this.curve.tinv,
        b = this.x,
        _ = this.y,
        x = this.z,
        M = x.redSqr().redSqr(),
        S = _.redAdd(_);

    for (r = 0; r < e; r++) {
      var A = b.redSqr(),
          q = S.redSqr(),
          k = q.redSqr(),
          P = A.redAdd(A).redIAdd(A).redIAdd(i.redMul(M)),
          N = b.redMul(q),
          ye = P.redSqr().redISub(N.redAdd(N)),
          O = N.redISub(ye),
          _e = P.redMul(O);

      _e = _e.redIAdd(_e).redISub(k);
      var Ie = S.redMul(x);
      r + 1 < e && (M = M.redMul(k)), b = ye, x = Ie, S = _e;
    }

    return this.curve.jpoint(b, S.redMul(h), x);
  }, "dblp");
  Ye.prototype.dbl = a(function () {
    return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
  }, "dbl");
  Ye.prototype._zeroDbl = a(function () {
    var e, r, n;

    if (this.zOne) {
      var i = this.x.redSqr(),
          h = this.y.redSqr(),
          b = h.redSqr(),
          _ = this.x.redAdd(h).redSqr().redISub(i).redISub(b);

      _ = _.redIAdd(_);
      var x = i.redAdd(i).redIAdd(i),
          M = x.redSqr().redISub(_).redISub(_),
          S = b.redIAdd(b);
      S = S.redIAdd(S), S = S.redIAdd(S), e = M, r = x.redMul(_.redISub(M)).redISub(S), n = this.y.redAdd(this.y);
    } else {
      var A = this.x.redSqr(),
          q = this.y.redSqr(),
          k = q.redSqr(),
          P = this.x.redAdd(q).redSqr().redISub(A).redISub(k);
      P = P.redIAdd(P);
      var N = A.redAdd(A).redIAdd(A),
          ye = N.redSqr(),
          O = k.redIAdd(k);
      O = O.redIAdd(O), O = O.redIAdd(O), e = ye.redISub(P).redISub(P), r = N.redMul(P.redISub(e)).redISub(O), n = this.y.redMul(this.z), n = n.redIAdd(n);
    }

    return this.curve.jpoint(e, r, n);
  }, "_zeroDbl");
  Ye.prototype._threeDbl = a(function () {
    var e, r, n;

    if (this.zOne) {
      var i = this.x.redSqr(),
          h = this.y.redSqr(),
          b = h.redSqr(),
          _ = this.x.redAdd(h).redSqr().redISub(i).redISub(b);

      _ = _.redIAdd(_);
      var x = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
          M = x.redSqr().redISub(_).redISub(_);
      e = M;
      var S = b.redIAdd(b);
      S = S.redIAdd(S), S = S.redIAdd(S), r = x.redMul(_.redISub(M)).redISub(S), n = this.y.redAdd(this.y);
    } else {
      var A = this.z.redSqr(),
          q = this.y.redSqr(),
          k = this.x.redMul(q),
          P = this.x.redSub(A).redMul(this.x.redAdd(A));
      P = P.redAdd(P).redIAdd(P);
      var N = k.redIAdd(k);
      N = N.redIAdd(N);
      var ye = N.redAdd(N);
      e = P.redSqr().redISub(ye), n = this.y.redAdd(this.z).redSqr().redISub(q).redISub(A);
      var O = q.redSqr();
      O = O.redIAdd(O), O = O.redIAdd(O), O = O.redIAdd(O), r = P.redMul(N.redISub(e)).redISub(O);
    }

    return this.curve.jpoint(e, r, n);
  }, "_threeDbl");
  Ye.prototype._dbl = a(function () {
    var e = this.curve.a,
        r = this.x,
        n = this.y,
        i = this.z,
        h = i.redSqr().redSqr(),
        b = r.redSqr(),
        _ = n.redSqr(),
        x = b.redAdd(b).redIAdd(b).redIAdd(e.redMul(h)),
        M = r.redAdd(r);

    M = M.redIAdd(M);

    var S = M.redMul(_),
        A = x.redSqr().redISub(S.redAdd(S)),
        q = S.redISub(A),
        k = _.redSqr();

    k = k.redIAdd(k), k = k.redIAdd(k), k = k.redIAdd(k);
    var P = x.redMul(q).redISub(k),
        N = n.redAdd(n).redMul(i);
    return this.curve.jpoint(A, P, N);
  }, "_dbl");
  Ye.prototype.trpl = a(function () {
    if (!this.curve.zeroA) return this.dbl().add(this);

    var e = this.x.redSqr(),
        r = this.y.redSqr(),
        n = this.z.redSqr(),
        i = r.redSqr(),
        h = e.redAdd(e).redIAdd(e),
        b = h.redSqr(),
        _ = this.x.redAdd(r).redSqr().redISub(e).redISub(i);

    _ = _.redIAdd(_), _ = _.redAdd(_).redIAdd(_), _ = _.redISub(b);

    var x = _.redSqr(),
        M = i.redIAdd(i);

    M = M.redIAdd(M), M = M.redIAdd(M), M = M.redIAdd(M);
    var S = h.redIAdd(_).redSqr().redISub(b).redISub(x).redISub(M),
        A = r.redMul(S);
    A = A.redIAdd(A), A = A.redIAdd(A);
    var q = this.x.redMul(x).redISub(A);
    q = q.redIAdd(q), q = q.redIAdd(q);
    var k = this.y.redMul(S.redMul(M.redISub(S)).redISub(_.redMul(x)));
    k = k.redIAdd(k), k = k.redIAdd(k), k = k.redIAdd(k);
    var P = this.z.redAdd(_).redSqr().redISub(n).redISub(x);
    return this.curve.jpoint(q, k, P);
  }, "trpl");
  Ye.prototype.mul = a(function (e, r) {
    return e = new ze(e, r), this.curve._wnafMul(this, e);
  }, "mul");
  Ye.prototype.eq = a(function (e) {
    if (e.type === "affine") return this.eq(e.toJ());
    if (this === e) return !0;
    var r = this.z.redSqr(),
        n = e.z.redSqr();
    if (this.x.redMul(n).redISub(e.x.redMul(r)).cmpn(0) !== 0) return !1;
    var i = r.redMul(this.z),
        h = n.redMul(e.z);
    return this.y.redMul(h).redISub(e.y.redMul(i)).cmpn(0) === 0;
  }, "eq");
  Ye.prototype.eqXToP = a(function (e) {
    var r = this.z.redSqr(),
        n = e.toRed(this.curve.red).redMul(r);
    if (this.x.cmp(n) === 0) return !0;

    for (var i = e.clone(), h = this.curve.redN.redMul(r);;) {
      if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0) return !1;
      if (n.redIAdd(h), this.x.cmp(n) === 0) return !0;
    }
  }, "eqXToP");
  Ye.prototype.inspect = a(function () {
    return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
  }, "inspect");
  Ye.prototype.isInfinity = a(function () {
    return this.z.cmpn(0) === 0;
  }, "isInfinity");
});
var Ad = D((ym, Ed) => {
  "use strict";

  var Vi = Ke(),
      Sd = Be(),
      Zn = Of(),
      g6 = ut();

  function Zi(t) {
    Zn.call(this, "mont", t), this.a = new Vi(t.a, 16).toRed(this.red), this.b = new Vi(t.b, 16).toRed(this.red), this.i4 = new Vi(4).toRed(this.red).redInvm(), this.two = new Vi(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two));
  }

  a(Zi, "MontCurve");
  Sd(Zi, Zn);
  Ed.exports = Zi;
  Zi.prototype.validate = a(function (e) {
    var r = e.normalize().x,
        n = r.redSqr(),
        i = n.redMul(r).redAdd(n.redMul(this.a)).redAdd(r),
        h = i.redSqrt();
    return h.redSqr().cmp(i) === 0;
  }, "validate");

  function Ze(t, e, r) {
    Zn.BasePoint.call(this, t, "projective"), e === null && r === null ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new Vi(e, 16), this.z = new Vi(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)));
  }

  a(Ze, "Point");
  Sd(Ze, Zn.BasePoint);
  Zi.prototype.decodePoint = a(function (e, r) {
    return this.point(g6.toArray(e, r), 1);
  }, "decodePoint");
  Zi.prototype.point = a(function (e, r) {
    return new Ze(this, e, r);
  }, "point");
  Zi.prototype.pointFromJSON = a(function (e) {
    return Ze.fromJSON(this, e);
  }, "pointFromJSON");
  Ze.prototype.precompute = a(function () {}, "precompute");
  Ze.prototype._encode = a(function () {
    return this.getX().toArray("be", this.curve.p.byteLength());
  }, "_encode");
  Ze.fromJSON = a(function (e, r) {
    return new Ze(e, r[0], r[1] || e.one);
  }, "fromJSON");
  Ze.prototype.inspect = a(function () {
    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
  }, "inspect");
  Ze.prototype.isInfinity = a(function () {
    return this.z.cmpn(0) === 0;
  }, "isInfinity");
  Ze.prototype.dbl = a(function () {
    var e = this.x.redAdd(this.z),
        r = e.redSqr(),
        n = this.x.redSub(this.z),
        i = n.redSqr(),
        h = r.redSub(i),
        b = r.redMul(i),
        _ = h.redMul(i.redAdd(this.curve.a24.redMul(h)));

    return this.curve.point(b, _);
  }, "dbl");
  Ze.prototype.add = a(function () {
    throw new Error("Not supported on Montgomery curve");
  }, "add");
  Ze.prototype.diffAdd = a(function (e, r) {
    var n = this.x.redAdd(this.z),
        i = this.x.redSub(this.z),
        h = e.x.redAdd(e.z),
        b = e.x.redSub(e.z),
        _ = b.redMul(n),
        x = h.redMul(i),
        M = r.z.redMul(_.redAdd(x).redSqr()),
        S = r.x.redMul(_.redISub(x).redSqr());

    return this.curve.point(M, S);
  }, "diffAdd");
  Ze.prototype.mul = a(function (e) {
    for (var r = e.clone(), n = this, i = this.curve.point(null, null), h = this, b = []; r.cmpn(0) !== 0; r.iushrn(1)) b.push(r.andln(1));

    for (var _ = b.length - 1; _ >= 0; _--) b[_] === 0 ? (n = n.diffAdd(i, h), i = i.dbl()) : (i = n.diffAdd(i, h), n = n.dbl());

    return i;
  }, "mul");
  Ze.prototype.mulAdd = a(function () {
    throw new Error("Not supported on Montgomery curve");
  }, "mulAdd");
  Ze.prototype.jumlAdd = a(function () {
    throw new Error("Not supported on Montgomery curve");
  }, "jumlAdd");
  Ze.prototype.eq = a(function (e) {
    return this.getX().cmp(e.getX()) === 0;
  }, "eq");
  Ze.prototype.normalize = a(function () {
    return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this;
  }, "normalize");
  Ze.prototype.getX = a(function () {
    return this.normalize(), this.x.fromRed();
  }, "getX");
});
var Rd = D((_m, Bd) => {
  "use strict";

  var y6 = ut(),
      wr = Ke(),
      qd = Be(),
      Gn = Of(),
      _6 = y6.assert;

  function fr(t) {
    this.twisted = (t.a | 0) !== 1, this.mOneA = this.twisted && (t.a | 0) === -1, this.extended = this.mOneA, Gn.call(this, "edwards", t), this.a = new wr(t.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new wr(t.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new wr(t.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), _6(!this.twisted || this.c.fromRed().cmpn(1) === 0), this.oneC = (t.c | 0) === 1;
  }

  a(fr, "EdwardsCurve");
  qd(fr, Gn);
  Bd.exports = fr;
  fr.prototype._mulA = a(function (e) {
    return this.mOneA ? e.redNeg() : this.a.redMul(e);
  }, "_mulA");
  fr.prototype._mulC = a(function (e) {
    return this.oneC ? e : this.c.redMul(e);
  }, "_mulC");
  fr.prototype.jpoint = a(function (e, r, n, i) {
    return this.point(e, r, n, i);
  }, "jpoint");
  fr.prototype.pointFromX = a(function (e, r) {
    e = new wr(e, 16), e.red || (e = e.toRed(this.red));

    var n = e.redSqr(),
        i = this.c2.redSub(this.a.redMul(n)),
        h = this.one.redSub(this.c2.redMul(this.d).redMul(n)),
        b = i.redMul(h.redInvm()),
        _ = b.redSqrt();

    if (_.redSqr().redSub(b).cmp(this.zero) !== 0) throw new Error("invalid point");

    var x = _.fromRed().isOdd();

    return (r && !x || !r && x) && (_ = _.redNeg()), this.point(e, _);
  }, "pointFromX");
  fr.prototype.pointFromY = a(function (e, r) {
    e = new wr(e, 16), e.red || (e = e.toRed(this.red));
    var n = e.redSqr(),
        i = n.redSub(this.c2),
        h = n.redMul(this.d).redMul(this.c2).redSub(this.a),
        b = i.redMul(h.redInvm());

    if (b.cmp(this.zero) === 0) {
      if (r) throw new Error("invalid point");
      return this.point(this.zero, e);
    }

    var _ = b.redSqrt();

    if (_.redSqr().redSub(b).cmp(this.zero) !== 0) throw new Error("invalid point");
    return _.fromRed().isOdd() !== r && (_ = _.redNeg()), this.point(_, e);
  }, "pointFromY");
  fr.prototype.validate = a(function (e) {
    if (e.isInfinity()) return !0;
    e.normalize();
    var r = e.x.redSqr(),
        n = e.y.redSqr(),
        i = r.redMul(this.a).redAdd(n),
        h = this.c2.redMul(this.one.redAdd(this.d.redMul(r).redMul(n)));
    return i.cmp(h) === 0;
  }, "validate");

  function Ce(t, e, r, n, i) {
    Gn.BasePoint.call(this, t, "projective"), e === null && r === null && n === null ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new wr(e, 16), this.y = new wr(r, 16), this.z = n ? new wr(n, 16) : this.curve.one, this.t = i && new wr(i, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
  }

  a(Ce, "Point");
  qd(Ce, Gn.BasePoint);
  fr.prototype.pointFromJSON = a(function (e) {
    return Ce.fromJSON(this, e);
  }, "pointFromJSON");
  fr.prototype.point = a(function (e, r, n, i) {
    return new Ce(this, e, r, n, i);
  }, "point");
  Ce.fromJSON = a(function (e, r) {
    return new Ce(e, r[0], r[1], r[2]);
  }, "fromJSON");
  Ce.prototype.inspect = a(function () {
    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
  }, "inspect");
  Ce.prototype.isInfinity = a(function () {
    return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || this.zOne && this.y.cmp(this.curve.c) === 0);
  }, "isInfinity");
  Ce.prototype._extDbl = a(function () {
    var e = this.x.redSqr(),
        r = this.y.redSqr(),
        n = this.z.redSqr();
    n = n.redIAdd(n);

    var i = this.curve._mulA(e),
        h = this.x.redAdd(this.y).redSqr().redISub(e).redISub(r),
        b = i.redAdd(r),
        _ = b.redSub(n),
        x = i.redSub(r),
        M = h.redMul(_),
        S = b.redMul(x),
        A = h.redMul(x),
        q = _.redMul(b);

    return this.curve.point(M, S, q, A);
  }, "_extDbl");
  Ce.prototype._projDbl = a(function () {
    var e = this.x.redAdd(this.y).redSqr(),
        r = this.x.redSqr(),
        n = this.y.redSqr(),
        i,
        h,
        b,
        _,
        x,
        M;

    if (this.curve.twisted) {
      _ = this.curve._mulA(r);

      var S = _.redAdd(n);

      this.zOne ? (i = e.redSub(r).redSub(n).redMul(S.redSub(this.curve.two)), h = S.redMul(_.redSub(n)), b = S.redSqr().redSub(S).redSub(S)) : (x = this.z.redSqr(), M = S.redSub(x).redISub(x), i = e.redSub(r).redISub(n).redMul(M), h = S.redMul(_.redSub(n)), b = S.redMul(M));
    } else _ = r.redAdd(n), x = this.curve._mulC(this.z).redSqr(), M = _.redSub(x).redSub(x), i = this.curve._mulC(e.redISub(_)).redMul(M), h = this.curve._mulC(_).redMul(r.redISub(n)), b = _.redMul(M);

    return this.curve.point(i, h, b);
  }, "_projDbl");
  Ce.prototype.dbl = a(function () {
    return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
  }, "dbl");
  Ce.prototype._extAdd = a(function (e) {
    var r = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
        n = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
        i = this.t.redMul(this.curve.dd).redMul(e.t),
        h = this.z.redMul(e.z.redAdd(e.z)),
        b = n.redSub(r),
        _ = h.redSub(i),
        x = h.redAdd(i),
        M = n.redAdd(r),
        S = b.redMul(_),
        A = x.redMul(M),
        q = b.redMul(M),
        k = _.redMul(x);

    return this.curve.point(S, A, k, q);
  }, "_extAdd");
  Ce.prototype._projAdd = a(function (e) {
    var r = this.z.redMul(e.z),
        n = r.redSqr(),
        i = this.x.redMul(e.x),
        h = this.y.redMul(e.y),
        b = this.curve.d.redMul(i).redMul(h),
        _ = n.redSub(b),
        x = n.redAdd(b),
        M = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(i).redISub(h),
        S = r.redMul(_).redMul(M),
        A,
        q;

    return this.curve.twisted ? (A = r.redMul(x).redMul(h.redSub(this.curve._mulA(i))), q = _.redMul(x)) : (A = r.redMul(x).redMul(h.redSub(i)), q = this.curve._mulC(_).redMul(x)), this.curve.point(S, A, q);
  }, "_projAdd");
  Ce.prototype.add = a(function (e) {
    return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e);
  }, "add");
  Ce.prototype.mul = a(function (e) {
    return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e);
  }, "mul");
  Ce.prototype.mulAdd = a(function (e, r, n) {
    return this.curve._wnafMulAdd(1, [this, r], [e, n], 2, !1);
  }, "mulAdd");
  Ce.prototype.jmulAdd = a(function (e, r, n) {
    return this.curve._wnafMulAdd(1, [this, r], [e, n], 2, !0);
  }, "jmulAdd");
  Ce.prototype.normalize = a(function () {
    if (this.zOne) return this;
    var e = this.z.redInvm();
    return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this;
  }, "normalize");
  Ce.prototype.neg = a(function () {
    return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
  }, "neg");
  Ce.prototype.getX = a(function () {
    return this.normalize(), this.x.fromRed();
  }, "getX");
  Ce.prototype.getY = a(function () {
    return this.normalize(), this.y.fromRed();
  }, "getY");
  Ce.prototype.eq = a(function (e) {
    return this === e || this.getX().cmp(e.getX()) === 0 && this.getY().cmp(e.getY()) === 0;
  }, "eq");
  Ce.prototype.eqXToP = a(function (e) {
    var r = e.toRed(this.curve.red).redMul(this.z);
    if (this.x.cmp(r) === 0) return !0;

    for (var n = e.clone(), i = this.curve.redN.redMul(this.z);;) {
      if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
      if (r.redIAdd(i), this.x.cmp(r) === 0) return !0;
    }
  }, "eqXToP");
  Ce.prototype.toP = Ce.prototype.normalize;
  Ce.prototype.mixedAdd = Ce.prototype.add;
});
var Z0 = D(Id => {
  "use strict";

  var Xn = Id;
  Xn.base = Of();
  Xn.short = Md();
  Xn.mont = Ad();
  Xn.edwards = Rd();
});
var Zt = D(Te => {
  "use strict";

  var w6 = ht(),
      x6 = Be();
  Te.inherits = x6;

  function M6(t, e) {
    return (t.charCodeAt(e) & 64512) !== 55296 || e < 0 || e + 1 >= t.length ? !1 : (t.charCodeAt(e + 1) & 64512) === 56320;
  }

  a(M6, "isSurrogatePair");

  function S6(t, e) {
    if (Array.isArray(t)) return t.slice();
    if (!t) return [];
    var r = [];
    if (typeof t == "string") {
      if (e) {
        if (e === "hex") for (t = t.replace(/[^a-z0-9]+/ig, ""), t.length % 2 !== 0 && (t = "0" + t), i = 0; i < t.length; i += 2) r.push(parseInt(t[i] + t[i + 1], 16));
      } else for (var n = 0, i = 0; i < t.length; i++) {
        var h = t.charCodeAt(i);
        h < 128 ? r[n++] = h : h < 2048 ? (r[n++] = h >> 6 | 192, r[n++] = h & 63 | 128) : M6(t, i) ? (h = 65536 + ((h & 1023) << 10) + (t.charCodeAt(++i) & 1023), r[n++] = h >> 18 | 240, r[n++] = h >> 12 & 63 | 128, r[n++] = h >> 6 & 63 | 128, r[n++] = h & 63 | 128) : (r[n++] = h >> 12 | 224, r[n++] = h >> 6 & 63 | 128, r[n++] = h & 63 | 128);
      }
    } else for (i = 0; i < t.length; i++) r[i] = t[i] | 0;
    return r;
  }

  a(S6, "toArray");
  Te.toArray = S6;

  function E6(t) {
    for (var e = "", r = 0; r < t.length; r++) e += Dd(t[r].toString(16));

    return e;
  }

  a(E6, "toHex");
  Te.toHex = E6;

  function kd(t) {
    var e = t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (t & 255) << 24;
    return e >>> 0;
  }

  a(kd, "htonl");
  Te.htonl = kd;

  function A6(t, e) {
    for (var r = "", n = 0; n < t.length; n++) {
      var i = t[n];
      e === "little" && (i = kd(i)), r += Pd(i.toString(16));
    }

    return r;
  }

  a(A6, "toHex32");
  Te.toHex32 = A6;

  function Dd(t) {
    return t.length === 1 ? "0" + t : t;
  }

  a(Dd, "zero2");
  Te.zero2 = Dd;

  function Pd(t) {
    return t.length === 7 ? "0" + t : t.length === 6 ? "00" + t : t.length === 5 ? "000" + t : t.length === 4 ? "0000" + t : t.length === 3 ? "00000" + t : t.length === 2 ? "000000" + t : t.length === 1 ? "0000000" + t : t;
  }

  a(Pd, "zero8");
  Te.zero8 = Pd;

  function q6(t, e, r, n) {
    var i = r - e;
    w6(i % 4 === 0);

    for (var h = new Array(i / 4), b = 0, _ = e; b < h.length; b++, _ += 4) {
      var x;
      n === "big" ? x = t[_] << 24 | t[_ + 1] << 16 | t[_ + 2] << 8 | t[_ + 3] : x = t[_ + 3] << 24 | t[_ + 2] << 16 | t[_ + 1] << 8 | t[_], h[b] = x >>> 0;
    }

    return h;
  }

  a(q6, "join32");
  Te.join32 = q6;

  function B6(t, e) {
    for (var r = new Array(t.length * 4), n = 0, i = 0; n < t.length; n++, i += 4) {
      var h = t[n];
      e === "big" ? (r[i] = h >>> 24, r[i + 1] = h >>> 16 & 255, r[i + 2] = h >>> 8 & 255, r[i + 3] = h & 255) : (r[i + 3] = h >>> 24, r[i + 2] = h >>> 16 & 255, r[i + 1] = h >>> 8 & 255, r[i] = h & 255);
    }

    return r;
  }

  a(B6, "split32");
  Te.split32 = B6;

  function R6(t, e) {
    return t >>> e | t << 32 - e;
  }

  a(R6, "rotr32");
  Te.rotr32 = R6;

  function I6(t, e) {
    return t << e | t >>> 32 - e;
  }

  a(I6, "rotl32");
  Te.rotl32 = I6;

  function k6(t, e) {
    return t + e >>> 0;
  }

  a(k6, "sum32");
  Te.sum32 = k6;

  function D6(t, e, r) {
    return t + e + r >>> 0;
  }

  a(D6, "sum32_3");
  Te.sum32_3 = D6;

  function P6(t, e, r, n) {
    return t + e + r + n >>> 0;
  }

  a(P6, "sum32_4");
  Te.sum32_4 = P6;

  function T6(t, e, r, n, i) {
    return t + e + r + n + i >>> 0;
  }

  a(T6, "sum32_5");
  Te.sum32_5 = T6;

  function C6(t, e, r, n) {
    var i = t[e],
        h = t[e + 1],
        b = n + h >>> 0,
        _ = (b < n ? 1 : 0) + r + i;

    t[e] = _ >>> 0, t[e + 1] = b;
  }

  a(C6, "sum64");
  Te.sum64 = C6;

  function N6(t, e, r, n) {
    var i = e + n >>> 0,
        h = (i < e ? 1 : 0) + t + r;
    return h >>> 0;
  }

  a(N6, "sum64_hi");
  Te.sum64_hi = N6;

  function L6(t, e, r, n) {
    var i = e + n;
    return i >>> 0;
  }

  a(L6, "sum64_lo");
  Te.sum64_lo = L6;

  function O6(t, e, r, n, i, h, b, _) {
    var x = 0,
        M = e;
    M = M + n >>> 0, x += M < e ? 1 : 0, M = M + h >>> 0, x += M < h ? 1 : 0, M = M + _ >>> 0, x += M < _ ? 1 : 0;
    var S = t + r + i + b + x;
    return S >>> 0;
  }

  a(O6, "sum64_4_hi");
  Te.sum64_4_hi = O6;

  function z6(t, e, r, n, i, h, b, _) {
    var x = e + n + h + _;
    return x >>> 0;
  }

  a(z6, "sum64_4_lo");
  Te.sum64_4_lo = z6;

  function U6(t, e, r, n, i, h, b, _, x, M) {
    var S = 0,
        A = e;
    A = A + n >>> 0, S += A < e ? 1 : 0, A = A + h >>> 0, S += A < h ? 1 : 0, A = A + _ >>> 0, S += A < _ ? 1 : 0, A = A + M >>> 0, S += A < M ? 1 : 0;
    var q = t + r + i + b + x + S;
    return q >>> 0;
  }

  a(U6, "sum64_5_hi");
  Te.sum64_5_hi = U6;

  function H6(t, e, r, n, i, h, b, _, x, M) {
    var S = e + n + h + _ + M;
    return S >>> 0;
  }

  a(H6, "sum64_5_lo");
  Te.sum64_5_lo = H6;

  function F6(t, e, r) {
    var n = e << 32 - r | t >>> r;
    return n >>> 0;
  }

  a(F6, "rotr64_hi");
  Te.rotr64_hi = F6;

  function K6(t, e, r) {
    var n = t << 32 - r | e >>> r;
    return n >>> 0;
  }

  a(K6, "rotr64_lo");
  Te.rotr64_lo = K6;

  function j6(t, e, r) {
    return t >>> r;
  }

  a(j6, "shr64_hi");
  Te.shr64_hi = j6;

  function W6(t, e, r) {
    var n = t << 32 - r | e >>> r;
    return n >>> 0;
  }

  a(W6, "shr64_lo");
  Te.shr64_lo = W6;
});
var Gi = D(Cd => {
  "use strict";

  var Td = Zt(),
      V6 = ht();

  function Yn() {
    this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
  }

  a(Yn, "BlockHash");
  Cd.BlockHash = Yn;
  Yn.prototype.update = a(function (e, r) {
    if (e = Td.toArray(e, r), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
      e = this.pending;
      var n = e.length % this._delta8;
      this.pending = e.slice(e.length - n, e.length), this.pending.length === 0 && (this.pending = null), e = Td.join32(e, 0, e.length - n, this.endian);

      for (var i = 0; i < e.length; i += this._delta32) this._update(e, i, i + this._delta32);
    }

    return this;
  }, "update");
  Yn.prototype.digest = a(function (e) {
    return this.update(this._pad()), V6(this.pending === null), this._digest(e);
  }, "digest");
  Yn.prototype._pad = a(function () {
    var e = this.pendingTotal,
        r = this._delta8,
        n = r - (e + this.padLength) % r,
        i = new Array(n + this.padLength);
    i[0] = 128;

    for (var h = 1; h < n; h++) i[h] = 0;

    if (e <<= 3, this.endian === "big") {
      for (var b = 8; b < this.padLength; b++) i[h++] = 0;

      i[h++] = 0, i[h++] = 0, i[h++] = 0, i[h++] = 0, i[h++] = e >>> 24 & 255, i[h++] = e >>> 16 & 255, i[h++] = e >>> 8 & 255, i[h++] = e & 255;
    } else for (i[h++] = e & 255, i[h++] = e >>> 8 & 255, i[h++] = e >>> 16 & 255, i[h++] = e >>> 24 & 255, i[h++] = 0, i[h++] = 0, i[h++] = 0, i[h++] = 0, b = 8; b < this.padLength; b++) i[h++] = 0;

    return i;
  }, "pad");
});
var G0 = D(xr => {
  "use strict";

  var Z6 = Zt(),
      nr = Z6.rotr32;

  function G6(t, e, r, n) {
    if (t === 0) return Nd(e, r, n);
    if (t === 1 || t === 3) return Od(e, r, n);
    if (t === 2) return Ld(e, r, n);
  }

  a(G6, "ft_1");
  xr.ft_1 = G6;

  function Nd(t, e, r) {
    return t & e ^ ~t & r;
  }

  a(Nd, "ch32");
  xr.ch32 = Nd;

  function Ld(t, e, r) {
    return t & e ^ t & r ^ e & r;
  }

  a(Ld, "maj32");
  xr.maj32 = Ld;

  function Od(t, e, r) {
    return t ^ e ^ r;
  }

  a(Od, "p32");
  xr.p32 = Od;

  function X6(t) {
    return nr(t, 2) ^ nr(t, 13) ^ nr(t, 22);
  }

  a(X6, "s0_256");
  xr.s0_256 = X6;

  function Y6(t) {
    return nr(t, 6) ^ nr(t, 11) ^ nr(t, 25);
  }

  a(Y6, "s1_256");
  xr.s1_256 = Y6;

  function J6(t) {
    return nr(t, 7) ^ nr(t, 18) ^ t >>> 3;
  }

  a(J6, "g0_256");
  xr.g0_256 = J6;

  function $6(t) {
    return nr(t, 17) ^ nr(t, 19) ^ t >>> 10;
  }

  a($6, "g1_256");
  xr.g1_256 = $6;
});
var Hd = D((Em, Ud) => {
  "use strict";

  var Xi = Zt(),
      Q6 = Gi(),
      e3 = G0(),
      X0 = Xi.rotl32,
      zf = Xi.sum32,
      t3 = Xi.sum32_5,
      r3 = e3.ft_1,
      zd = Q6.BlockHash,
      i3 = [1518500249, 1859775393, 2400959708, 3395469782];

  function ar() {
    if (!(this instanceof ar)) return new ar();
    zd.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80);
  }

  a(ar, "SHA1");
  Xi.inherits(ar, zd);
  Ud.exports = ar;
  ar.blockSize = 512;
  ar.outSize = 160;
  ar.hmacStrength = 80;
  ar.padLength = 64;
  ar.prototype._update = a(function (e, r) {
    for (var n = this.W, i = 0; i < 16; i++) n[i] = e[r + i];

    for (; i < n.length; i++) n[i] = X0(n[i - 3] ^ n[i - 8] ^ n[i - 14] ^ n[i - 16], 1);

    var h = this.h[0],
        b = this.h[1],
        _ = this.h[2],
        x = this.h[3],
        M = this.h[4];

    for (i = 0; i < n.length; i++) {
      var S = ~~(i / 20),
          A = t3(X0(h, 5), r3(S, b, _, x), M, n[i], i3[S]);
      M = x, x = _, _ = X0(b, 30), b = h, h = A;
    }

    this.h[0] = zf(this.h[0], h), this.h[1] = zf(this.h[1], b), this.h[2] = zf(this.h[2], _), this.h[3] = zf(this.h[3], x), this.h[4] = zf(this.h[4], M);
  }, "_update");
  ar.prototype._digest = a(function (e) {
    return e === "hex" ? Xi.toHex32(this.h, "big") : Xi.split32(this.h, "big");
  }, "digest");
});
var Y0 = D((Am, Kd) => {
  "use strict";

  var Yi = Zt(),
      f3 = Gi(),
      Ji = G0(),
      n3 = ht(),
      Gt = Yi.sum32,
      a3 = Yi.sum32_4,
      s3 = Yi.sum32_5,
      o3 = Ji.ch32,
      h3 = Ji.maj32,
      u3 = Ji.s0_256,
      d3 = Ji.s1_256,
      c3 = Ji.g0_256,
      l3 = Ji.g1_256,
      Fd = f3.BlockHash,
      v3 = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

  function sr() {
    if (!(this instanceof sr)) return new sr();
    Fd.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = v3, this.W = new Array(64);
  }

  a(sr, "SHA256");
  Yi.inherits(sr, Fd);
  Kd.exports = sr;
  sr.blockSize = 512;
  sr.outSize = 256;
  sr.hmacStrength = 192;
  sr.padLength = 64;
  sr.prototype._update = a(function (e, r) {
    for (var n = this.W, i = 0; i < 16; i++) n[i] = e[r + i];

    for (; i < n.length; i++) n[i] = a3(l3(n[i - 2]), n[i - 7], c3(n[i - 15]), n[i - 16]);

    var h = this.h[0],
        b = this.h[1],
        _ = this.h[2],
        x = this.h[3],
        M = this.h[4],
        S = this.h[5],
        A = this.h[6],
        q = this.h[7];

    for (n3(this.k.length === n.length), i = 0; i < n.length; i++) {
      var k = s3(q, d3(M), o3(M, S, A), this.k[i], n[i]),
          P = Gt(u3(h), h3(h, b, _));
      q = A, A = S, S = M, M = Gt(x, k), x = _, _ = b, b = h, h = Gt(k, P);
    }

    this.h[0] = Gt(this.h[0], h), this.h[1] = Gt(this.h[1], b), this.h[2] = Gt(this.h[2], _), this.h[3] = Gt(this.h[3], x), this.h[4] = Gt(this.h[4], M), this.h[5] = Gt(this.h[5], S), this.h[6] = Gt(this.h[6], A), this.h[7] = Gt(this.h[7], q);
  }, "_update");
  sr.prototype._digest = a(function (e) {
    return e === "hex" ? Yi.toHex32(this.h, "big") : Yi.split32(this.h, "big");
  }, "digest");
});
var Vd = D((qm, Wd) => {
  "use strict";

  var J0 = Zt(),
      jd = Y0();

  function Mr() {
    if (!(this instanceof Mr)) return new Mr();
    jd.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
  }

  a(Mr, "SHA224");
  J0.inherits(Mr, jd);
  Wd.exports = Mr;
  Mr.blockSize = 512;
  Mr.outSize = 224;
  Mr.hmacStrength = 192;
  Mr.padLength = 64;
  Mr.prototype._digest = a(function (e) {
    return e === "hex" ? J0.toHex32(this.h.slice(0, 7), "big") : J0.split32(this.h.slice(0, 7), "big");
  }, "digest");
});
var es = D((Bm, Yd) => {
  "use strict";

  var at = Zt(),
      p3 = Gi(),
      b3 = ht(),
      or = at.rotr64_hi,
      hr = at.rotr64_lo,
      Zd = at.shr64_hi,
      Gd = at.shr64_lo,
      Jr = at.sum64,
      $0 = at.sum64_hi,
      Q0 = at.sum64_lo,
      m3 = at.sum64_4_hi,
      g3 = at.sum64_4_lo,
      y3 = at.sum64_5_hi,
      _3 = at.sum64_5_lo,
      Xd = p3.BlockHash,
      w3 = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

  function Xt() {
    if (!(this instanceof Xt)) return new Xt();
    Xd.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = w3, this.W = new Array(160);
  }

  a(Xt, "SHA512");
  at.inherits(Xt, Xd);
  Yd.exports = Xt;
  Xt.blockSize = 1024;
  Xt.outSize = 512;
  Xt.hmacStrength = 192;
  Xt.padLength = 128;
  Xt.prototype._prepareBlock = a(function (e, r) {
    for (var n = this.W, i = 0; i < 32; i++) n[i] = e[r + i];

    for (; i < n.length; i += 2) {
      var h = D3(n[i - 4], n[i - 3]),
          b = P3(n[i - 4], n[i - 3]),
          _ = n[i - 14],
          x = n[i - 13],
          M = I3(n[i - 30], n[i - 29]),
          S = k3(n[i - 30], n[i - 29]),
          A = n[i - 32],
          q = n[i - 31];
      n[i] = m3(h, b, _, x, M, S, A, q), n[i + 1] = g3(h, b, _, x, M, S, A, q);
    }
  }, "_prepareBlock");
  Xt.prototype._update = a(function (e, r) {
    this._prepareBlock(e, r);

    var n = this.W,
        i = this.h[0],
        h = this.h[1],
        b = this.h[2],
        _ = this.h[3],
        x = this.h[4],
        M = this.h[5],
        S = this.h[6],
        A = this.h[7],
        q = this.h[8],
        k = this.h[9],
        P = this.h[10],
        N = this.h[11],
        ye = this.h[12],
        O = this.h[13],
        _e = this.h[14],
        Ie = this.h[15];
    b3(this.k.length === n.length);

    for (var Me = 0; Me < n.length; Me += 2) {
      var De = _e,
          Se = Ie,
          Ne = B3(q, k),
          Ae = R3(q, k),
          Le = x3(q, k, P, N, ye, O),
          E = M3(q, k, P, N, ye, O),
          p = this.k[Me],
          w = this.k[Me + 1],
          l = n[Me],
          f = n[Me + 1],
          s = y3(De, Se, Ne, Ae, Le, E, p, w, l, f),
          d = _3(De, Se, Ne, Ae, Le, E, p, w, l, f);

      De = A3(i, h), Se = q3(i, h), Ne = S3(i, h, b, _, x, M), Ae = E3(i, h, b, _, x, M);
      var v = $0(De, Se, Ne, Ae),
          c = Q0(De, Se, Ne, Ae);
      _e = ye, Ie = O, ye = P, O = N, P = q, N = k, q = $0(S, A, s, d), k = Q0(A, A, s, d), S = x, A = M, x = b, M = _, b = i, _ = h, i = $0(s, d, v, c), h = Q0(s, d, v, c);
    }

    Jr(this.h, 0, i, h), Jr(this.h, 2, b, _), Jr(this.h, 4, x, M), Jr(this.h, 6, S, A), Jr(this.h, 8, q, k), Jr(this.h, 10, P, N), Jr(this.h, 12, ye, O), Jr(this.h, 14, _e, Ie);
  }, "_update");
  Xt.prototype._digest = a(function (e) {
    return e === "hex" ? at.toHex32(this.h, "big") : at.split32(this.h, "big");
  }, "digest");

  function x3(t, e, r, n, i) {
    var h = t & r ^ ~t & i;
    return h < 0 && (h += 4294967296), h;
  }

  a(x3, "ch64_hi");

  function M3(t, e, r, n, i, h) {
    var b = e & n ^ ~e & h;
    return b < 0 && (b += 4294967296), b;
  }

  a(M3, "ch64_lo");

  function S3(t, e, r, n, i) {
    var h = t & r ^ t & i ^ r & i;
    return h < 0 && (h += 4294967296), h;
  }

  a(S3, "maj64_hi");

  function E3(t, e, r, n, i, h) {
    var b = e & n ^ e & h ^ n & h;
    return b < 0 && (b += 4294967296), b;
  }

  a(E3, "maj64_lo");

  function A3(t, e) {
    var r = or(t, e, 28),
        n = or(e, t, 2),
        i = or(e, t, 7),
        h = r ^ n ^ i;
    return h < 0 && (h += 4294967296), h;
  }

  a(A3, "s0_512_hi");

  function q3(t, e) {
    var r = hr(t, e, 28),
        n = hr(e, t, 2),
        i = hr(e, t, 7),
        h = r ^ n ^ i;
    return h < 0 && (h += 4294967296), h;
  }

  a(q3, "s0_512_lo");

  function B3(t, e) {
    var r = or(t, e, 14),
        n = or(t, e, 18),
        i = or(e, t, 9),
        h = r ^ n ^ i;
    return h < 0 && (h += 4294967296), h;
  }

  a(B3, "s1_512_hi");

  function R3(t, e) {
    var r = hr(t, e, 14),
        n = hr(t, e, 18),
        i = hr(e, t, 9),
        h = r ^ n ^ i;
    return h < 0 && (h += 4294967296), h;
  }

  a(R3, "s1_512_lo");

  function I3(t, e) {
    var r = or(t, e, 1),
        n = or(t, e, 8),
        i = Zd(t, e, 7),
        h = r ^ n ^ i;
    return h < 0 && (h += 4294967296), h;
  }

  a(I3, "g0_512_hi");

  function k3(t, e) {
    var r = hr(t, e, 1),
        n = hr(t, e, 8),
        i = Gd(t, e, 7),
        h = r ^ n ^ i;
    return h < 0 && (h += 4294967296), h;
  }

  a(k3, "g0_512_lo");

  function D3(t, e) {
    var r = or(t, e, 19),
        n = or(e, t, 29),
        i = Zd(t, e, 6),
        h = r ^ n ^ i;
    return h < 0 && (h += 4294967296), h;
  }

  a(D3, "g1_512_hi");

  function P3(t, e) {
    var r = hr(t, e, 19),
        n = hr(e, t, 29),
        i = Gd(t, e, 6),
        h = r ^ n ^ i;
    return h < 0 && (h += 4294967296), h;
  }

  a(P3, "g1_512_lo");
});
var Qd = D((Rm, $d) => {
  "use strict";

  var ts = Zt(),
      Jd = es();

  function Sr() {
    if (!(this instanceof Sr)) return new Sr();
    Jd.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
  }

  a(Sr, "SHA384");
  ts.inherits(Sr, Jd);
  $d.exports = Sr;
  Sr.blockSize = 1024;
  Sr.outSize = 384;
  Sr.hmacStrength = 192;
  Sr.padLength = 128;
  Sr.prototype._digest = a(function (e) {
    return e === "hex" ? ts.toHex32(this.h.slice(0, 12), "big") : ts.split32(this.h.slice(0, 12), "big");
  }, "digest");
});
var ec = D($i => {
  "use strict";

  $i.sha1 = Hd();
  $i.sha224 = Vd();
  $i.sha256 = Y0();
  $i.sha384 = Qd();
  $i.sha512 = es();
});
var ac = D(nc => {
  "use strict";

  var Mi = Zt(),
      T3 = Gi(),
      Jn = Mi.rotl32,
      tc = Mi.sum32,
      Uf = Mi.sum32_3,
      rc = Mi.sum32_4,
      fc = T3.BlockHash;

  function ur() {
    if (!(this instanceof ur)) return new ur();
    fc.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
  }

  a(ur, "RIPEMD160");
  Mi.inherits(ur, fc);
  nc.ripemd160 = ur;
  ur.blockSize = 512;
  ur.outSize = 160;
  ur.hmacStrength = 192;
  ur.padLength = 64;
  ur.prototype._update = a(function (e, r) {
    for (var n = this.h[0], i = this.h[1], h = this.h[2], b = this.h[3], _ = this.h[4], x = n, M = i, S = h, A = b, q = _, k = 0; k < 80; k++) {
      var P = tc(Jn(rc(n, ic(k, i, h, b), e[L3[k] + r], C3(k)), z3[k]), _);
      n = _, _ = b, b = Jn(h, 10), h = i, i = P, P = tc(Jn(rc(x, ic(79 - k, M, S, A), e[O3[k] + r], N3(k)), U3[k]), q), x = q, q = A, A = Jn(S, 10), S = M, M = P;
    }

    P = Uf(this.h[1], h, A), this.h[1] = Uf(this.h[2], b, q), this.h[2] = Uf(this.h[3], _, x), this.h[3] = Uf(this.h[4], n, M), this.h[4] = Uf(this.h[0], i, S), this.h[0] = P;
  }, "update");
  ur.prototype._digest = a(function (e) {
    return e === "hex" ? Mi.toHex32(this.h, "little") : Mi.split32(this.h, "little");
  }, "digest");

  function ic(t, e, r, n) {
    return t <= 15 ? e ^ r ^ n : t <= 31 ? e & r | ~e & n : t <= 47 ? (e | ~r) ^ n : t <= 63 ? e & n | r & ~n : e ^ (r | ~n);
  }

  a(ic, "f");

  function C3(t) {
    return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838;
  }

  a(C3, "K");

  function N3(t) {
    return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0;
  }

  a(N3, "Kh");
  var L3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
      O3 = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
      z3 = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
      U3 = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
});
var oc = D((Dm, sc) => {
  "use strict";

  var H3 = Zt(),
      F3 = ht();

  function Qi(t, e, r) {
    if (!(this instanceof Qi)) return new Qi(t, e, r);
    this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(H3.toArray(e, r));
  }

  a(Qi, "Hmac");
  sc.exports = Qi;
  Qi.prototype._init = a(function (e) {
    e.length > this.blockSize && (e = new this.Hash().update(e).digest()), F3(e.length <= this.blockSize);

    for (var r = e.length; r < this.blockSize; r++) e.push(0);

    for (r = 0; r < e.length; r++) e[r] ^= 54;

    for (this.inner = new this.Hash().update(e), r = 0; r < e.length; r++) e[r] ^= 106;

    this.outer = new this.Hash().update(e);
  }, "init");
  Qi.prototype.update = a(function (e, r) {
    return this.inner.update(e, r), this;
  }, "update");
  Qi.prototype.digest = a(function (e) {
    return this.outer.update(this.inner.digest()), this.outer.digest(e);
  }, "digest");
});
var $n = D(hc => {
  var Je = hc;
  Je.utils = Zt();
  Je.common = Gi();
  Je.sha = ec();
  Je.ripemd = ac();
  Je.hmac = oc();
  Je.sha1 = Je.sha.sha1;
  Je.sha256 = Je.sha.sha256;
  Je.sha224 = Je.sha.sha224;
  Je.sha384 = Je.sha.sha384;
  Je.sha512 = Je.sha.sha512;
  Je.ripemd160 = Je.ripemd.ripemd160;
});
var dc = D((Tm, uc) => {
  uc.exports = {
    doubles: {
      step: 4,
      points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]
    },
    naf: {
      wnd: 7,
      points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]
    }
  };
});
var Qn = D(vc => {
  "use strict";

  var is = vc,
      $r = $n(),
      rs = Z0(),
      K3 = ut(),
      cc = K3.assert;

  function lc(t) {
    t.type === "short" ? this.curve = new rs.short(t) : t.type === "edwards" ? this.curve = new rs.edwards(t) : this.curve = new rs.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, cc(this.g.validate(), "Invalid curve"), cc(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }

  a(lc, "PresetCurve");
  is.PresetCurve = lc;

  function Qr(t, e) {
    Object.defineProperty(is, t, {
      configurable: !0,
      enumerable: !0,
      get: function () {
        var r = new lc(e);
        return Object.defineProperty(is, t, {
          configurable: !0,
          enumerable: !0,
          value: r
        }), r;
      }
    });
  }

  a(Qr, "defineCurve");
  Qr("p192", {
    type: "short",
    prime: "p192",
    p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
    b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
    n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
    hash: $r.sha256,
    gRed: !1,
    g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
  });
  Qr("p224", {
    type: "short",
    prime: "p224",
    p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
    b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
    n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
    hash: $r.sha256,
    gRed: !1,
    g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
  });
  Qr("p256", {
    type: "short",
    prime: null,
    p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
    a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
    b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
    n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
    hash: $r.sha256,
    gRed: !1,
    g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
  });
  Qr("p384", {
    type: "short",
    prime: null,
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
    a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
    b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
    n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
    hash: $r.sha384,
    gRed: !1,
    g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
  });
  Qr("p521", {
    type: "short",
    prime: null,
    p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
    a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
    b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
    n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
    hash: $r.sha512,
    gRed: !1,
    g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
  });
  Qr("curve25519", {
    type: "mont",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "76d06",
    b: "1",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: $r.sha256,
    gRed: !1,
    g: ["9"]
  });
  Qr("ed25519", {
    type: "edwards",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "-1",
    c: "1",
    d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: $r.sha256,
    gRed: !1,
    g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
  });
  var fs;

  try {
    fs = dc();
  } catch {
    fs = void 0;
  }

  Qr("secp256k1", {
    type: "short",
    prime: "k256",
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
    a: "0",
    b: "7",
    n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
    h: "1",
    hash: $r.sha256,
    beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
    lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
    basis: [{
      a: "3086d221a7d46bcde86c90e49284eb15",
      b: "-e4437ed6010e88286f547fa90abfe4c3"
    }, {
      a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
      b: "3086d221a7d46bcde86c90e49284eb15"
    }],
    gRed: !1,
    g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", fs]
  });
});
var mc = D((Nm, bc) => {
  "use strict";

  var j3 = $n(),
      Si = W0(),
      pc = ht();

  function ei(t) {
    if (!(this instanceof ei)) return new ei(t);
    this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
    var e = Si.toArray(t.entropy, t.entropyEnc || "hex"),
        r = Si.toArray(t.nonce, t.nonceEnc || "hex"),
        n = Si.toArray(t.pers, t.persEnc || "hex");
    pc(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, n);
  }

  a(ei, "HmacDRBG");
  bc.exports = ei;
  ei.prototype._init = a(function (e, r, n) {
    var i = e.concat(r).concat(n);
    this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);

    for (var h = 0; h < this.V.length; h++) this.K[h] = 0, this.V[h] = 1;

    this._update(i), this._reseed = 1, this.reseedInterval = 281474976710656;
  }, "init");
  ei.prototype._hmac = a(function () {
    return new j3.hmac(this.hash, this.K);
  }, "hmac");
  ei.prototype._update = a(function (e) {
    var r = this._hmac().update(this.V).update([0]);

    e && (r = r.update(e)), this.K = r.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest());
  }, "update");
  ei.prototype.reseed = a(function (e, r, n, i) {
    typeof r != "string" && (i = n, n = r, r = null), e = Si.toArray(e, r), n = Si.toArray(n, i), pc(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(n || [])), this._reseed = 1;
  }, "reseed");
  ei.prototype.generate = a(function (e, r, n, i) {
    if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
    typeof r != "string" && (i = n, n = r, r = null), n && (n = Si.toArray(n, i || "hex"), this._update(n));

    for (var h = []; h.length < e;) this.V = this._hmac().update(this.V).digest(), h = h.concat(this.V);

    var b = h.slice(0, e);
    return this._update(n), this._reseed++, Si.encode(b, r);
  }, "generate");
});
var yc = D((Lm, gc) => {
  "use strict";

  var W3 = Ke(),
      V3 = ut(),
      ns = V3.assert;

  function rt(t, e) {
    this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc);
  }

  a(rt, "KeyPair");
  gc.exports = rt;
  rt.fromPublic = a(function (e, r, n) {
    return r instanceof rt ? r : new rt(e, {
      pub: r,
      pubEnc: n
    });
  }, "fromPublic");
  rt.fromPrivate = a(function (e, r, n) {
    return r instanceof rt ? r : new rt(e, {
      priv: r,
      privEnc: n
    });
  }, "fromPrivate");
  rt.prototype.validate = a(function () {
    var e = this.getPublic();
    return e.isInfinity() ? {
      result: !1,
      reason: "Invalid public key"
    } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
      result: !0,
      reason: null
    } : {
      result: !1,
      reason: "Public key * N != O"
    } : {
      result: !1,
      reason: "Public key is not a point"
    };
  }, "validate");
  rt.prototype.getPublic = a(function (e, r) {
    return typeof e == "string" && (r = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r ? this.pub.encode(r, e) : this.pub;
  }, "getPublic");
  rt.prototype.getPrivate = a(function (e) {
    return e === "hex" ? this.priv.toString(16, 2) : this.priv;
  }, "getPrivate");
  rt.prototype._importPrivate = a(function (e, r) {
    this.priv = new W3(e, r || 16), this.priv = this.priv.umod(this.ec.curve.n);
  }, "_importPrivate");
  rt.prototype._importPublic = a(function (e, r) {
    if (e.x || e.y) {
      this.ec.curve.type === "mont" ? ns(e.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && ns(e.x && e.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(e.x, e.y);
      return;
    }

    this.pub = this.ec.curve.decodePoint(e, r);
  }, "_importPublic");
  rt.prototype.derive = a(function (e) {
    return e.validate() || ns(e.validate(), "public point not validated"), e.mul(this.priv).getX();
  }, "derive");
  rt.prototype.sign = a(function (e, r, n) {
    return this.ec.sign(e, this, r, n);
  }, "sign");
  rt.prototype.verify = a(function (e, r) {
    return this.ec.verify(e, r, this);
  }, "verify");
  rt.prototype.inspect = a(function () {
    return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
  }, "inspect");
});
var xc = D((Om, wc) => {
  "use strict";

  var ea = Ke(),
      os = ut(),
      Z3 = os.assert;

  function ta(t, e) {
    if (t instanceof ta) return t;
    this._importDER(t, e) || (Z3(t.r && t.s, "Signature without r or s"), this.r = new ea(t.r, 16), this.s = new ea(t.s, 16), t.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam);
  }

  a(ta, "Signature");
  wc.exports = ta;

  function G3() {
    this.place = 0;
  }

  a(G3, "Position");

  function as(t, e) {
    var r = t[e.place++];
    if (!(r & 128)) return r;
    var n = r & 15;
    if (n === 0 || n > 4) return !1;

    for (var i = 0, h = 0, b = e.place; h < n; h++, b++) i <<= 8, i |= t[b], i >>>= 0;

    return i <= 127 ? !1 : (e.place = b, i);
  }

  a(as, "getLength");

  function _c(t) {
    for (var e = 0, r = t.length - 1; !t[e] && !(t[e + 1] & 128) && e < r;) e++;

    return e === 0 ? t : t.slice(e);
  }

  a(_c, "rmPadding");
  ta.prototype._importDER = a(function (e, r) {
    e = os.toArray(e, r);
    var n = new G3();
    if (e[n.place++] !== 48) return !1;
    var i = as(e, n);
    if (i === !1 || i + n.place !== e.length || e[n.place++] !== 2) return !1;
    var h = as(e, n);
    if (h === !1) return !1;
    var b = e.slice(n.place, h + n.place);
    if (n.place += h, e[n.place++] !== 2) return !1;

    var _ = as(e, n);

    if (_ === !1 || e.length !== _ + n.place) return !1;
    var x = e.slice(n.place, _ + n.place);
    if (b[0] === 0) if (b[1] & 128) b = b.slice(1);else return !1;
    if (x[0] === 0) if (x[1] & 128) x = x.slice(1);else return !1;
    return this.r = new ea(b), this.s = new ea(x), this.recoveryParam = null, !0;
  }, "_importDER");

  function ss(t, e) {
    if (e < 128) {
      t.push(e);
      return;
    }

    var r = 1 + (Math.log(e) / Math.LN2 >>> 3);

    for (t.push(r | 128); --r;) t.push(e >>> (r << 3) & 255);

    t.push(e);
  }

  a(ss, "constructLength");
  ta.prototype.toDER = a(function (e) {
    var r = this.r.toArray(),
        n = this.s.toArray();

    for (r[0] & 128 && (r = [0].concat(r)), n[0] & 128 && (n = [0].concat(n)), r = _c(r), n = _c(n); !n[0] && !(n[1] & 128);) n = n.slice(1);

    var i = [2];
    ss(i, r.length), i = i.concat(r), i.push(2), ss(i, n.length);
    var h = i.concat(n),
        b = [48];
    return ss(b, h.length), b = b.concat(h), os.encode(b, e);
  }, "toDER");
});
var Ac = D((zm, Ec) => {
  "use strict";

  var Ei = Ke(),
      Mc = mc(),
      X3 = ut(),
      hs = Qn(),
      Y3 = zn(),
      Sc = X3.assert,
      us = yc(),
      ra = xc();

  function wt(t) {
    if (!(this instanceof wt)) return new wt(t);
    typeof t == "string" && (Sc(Object.prototype.hasOwnProperty.call(hs, t), "Unknown curve " + t), t = hs[t]), t instanceof hs.PresetCurve && (t = {
      curve: t
    }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash;
  }

  a(wt, "EC");
  Ec.exports = wt;
  wt.prototype.keyPair = a(function (e) {
    return new us(this, e);
  }, "keyPair");
  wt.prototype.keyFromPrivate = a(function (e, r) {
    return us.fromPrivate(this, e, r);
  }, "keyFromPrivate");
  wt.prototype.keyFromPublic = a(function (e, r) {
    return us.fromPublic(this, e, r);
  }, "keyFromPublic");
  wt.prototype.genKeyPair = a(function (e) {
    e || (e = {});

    for (var r = new Mc({
      hash: this.hash,
      pers: e.pers,
      persEnc: e.persEnc || "utf8",
      entropy: e.entropy || Y3(this.hash.hmacStrength),
      entropyEnc: e.entropy && e.entropyEnc || "utf8",
      nonce: this.n.toArray()
    }), n = this.n.byteLength(), i = this.n.sub(new Ei(2));;) {
      var h = new Ei(r.generate(n));
      if (!(h.cmp(i) > 0)) return h.iaddn(1), this.keyFromPrivate(h);
    }
  }, "genKeyPair");
  wt.prototype._truncateToN = a(function (e, r) {
    var n = e.byteLength() * 8 - this.n.bitLength();
    return n > 0 && (e = e.ushrn(n)), !r && e.cmp(this.n) >= 0 ? e.sub(this.n) : e;
  }, "_truncateToN");
  wt.prototype.sign = a(function (e, r, n, i) {
    typeof n == "object" && (i = n, n = null), i || (i = {}), r = this.keyFromPrivate(r, n), e = this._truncateToN(new Ei(e, 16));

    for (var h = this.n.byteLength(), b = r.getPrivate().toArray("be", h), _ = e.toArray("be", h), x = new Mc({
      hash: this.hash,
      entropy: b,
      nonce: _,
      pers: i.pers,
      persEnc: i.persEnc || "utf8"
    }), M = this.n.sub(new Ei(1)), S = 0;; S++) {
      var A = i.k ? i.k(S) : new Ei(x.generate(this.n.byteLength()));

      if (A = this._truncateToN(A, !0), !(A.cmpn(1) <= 0 || A.cmp(M) >= 0)) {
        var q = this.g.mul(A);

        if (!q.isInfinity()) {
          var k = q.getX(),
              P = k.umod(this.n);

          if (P.cmpn(0) !== 0) {
            var N = A.invm(this.n).mul(P.mul(r.getPrivate()).iadd(e));

            if (N = N.umod(this.n), N.cmpn(0) !== 0) {
              var ye = (q.getY().isOdd() ? 1 : 0) | (k.cmp(P) !== 0 ? 2 : 0);
              return i.canonical && N.cmp(this.nh) > 0 && (N = this.n.sub(N), ye ^= 1), new ra({
                r: P,
                s: N,
                recoveryParam: ye
              });
            }
          }
        }
      }
    }
  }, "sign");
  wt.prototype.verify = a(function (e, r, n, i) {
    e = this._truncateToN(new Ei(e, 16)), n = this.keyFromPublic(n, i), r = new ra(r, "hex");
    var h = r.r,
        b = r.s;
    if (h.cmpn(1) < 0 || h.cmp(this.n) >= 0 || b.cmpn(1) < 0 || b.cmp(this.n) >= 0) return !1;

    var _ = b.invm(this.n),
        x = _.mul(e).umod(this.n),
        M = _.mul(h).umod(this.n),
        S;

    return this.curve._maxwellTrick ? (S = this.g.jmulAdd(x, n.getPublic(), M), S.isInfinity() ? !1 : S.eqXToP(h)) : (S = this.g.mulAdd(x, n.getPublic(), M), S.isInfinity() ? !1 : S.getX().umod(this.n).cmp(h) === 0);
  }, "verify");

  wt.prototype.recoverPubKey = function (t, e, r, n) {
    Sc((3 & r) === r, "The recovery param is more than two bits"), e = new ra(e, n);
    var i = this.n,
        h = new Ei(t),
        b = e.r,
        _ = e.s,
        x = r & 1,
        M = r >> 1;
    if (b.cmp(this.curve.p.umod(this.curve.n)) >= 0 && M) throw new Error("Unable to find sencond key candinate");
    M ? b = this.curve.pointFromX(b.add(this.curve.n), x) : b = this.curve.pointFromX(b, x);

    var S = e.r.invm(i),
        A = i.sub(h).mul(S).umod(i),
        q = _.mul(S).umod(i);

    return this.g.mulAdd(A, b, q);
  };

  wt.prototype.getKeyRecoveryParam = function (t, e, r, n) {
    if (e = new ra(e, n), e.recoveryParam !== null) return e.recoveryParam;

    for (var i = 0; i < 4; i++) {
      var h;

      try {
        h = this.recoverPubKey(t, e, i);
      } catch {
        continue;
      }

      if (h.eq(r)) return i;
    }

    throw new Error("Unable to find valid recovery factor");
  };
});
var Ic = D((Um, Rc) => {
  "use strict";

  var Hf = ut(),
      Bc = Hf.assert,
      qc = Hf.parseBytes,
      ef = Hf.cachedProperty;

  function Ge(t, e) {
    this.eddsa = t, this._secret = qc(e.secret), t.isPoint(e.pub) ? this._pub = e.pub : this._pubBytes = qc(e.pub);
  }

  a(Ge, "KeyPair");
  Ge.fromPublic = a(function (e, r) {
    return r instanceof Ge ? r : new Ge(e, {
      pub: r
    });
  }, "fromPublic");
  Ge.fromSecret = a(function (e, r) {
    return r instanceof Ge ? r : new Ge(e, {
      secret: r
    });
  }, "fromSecret");
  Ge.prototype.secret = a(function () {
    return this._secret;
  }, "secret");
  ef(Ge, "pubBytes", a(function () {
    return this.eddsa.encodePoint(this.pub());
  }, "pubBytes"));
  ef(Ge, "pub", a(function () {
    return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv());
  }, "pub"));
  ef(Ge, "privBytes", a(function () {
    var e = this.eddsa,
        r = this.hash(),
        n = e.encodingLength - 1,
        i = r.slice(0, e.encodingLength);
    return i[0] &= 248, i[n] &= 127, i[n] |= 64, i;
  }, "privBytes"));
  ef(Ge, "priv", a(function () {
    return this.eddsa.decodeInt(this.privBytes());
  }, "priv"));
  ef(Ge, "hash", a(function () {
    return this.eddsa.hash().update(this.secret()).digest();
  }, "hash"));
  ef(Ge, "messagePrefix", a(function () {
    return this.hash().slice(this.eddsa.encodingLength);
  }, "messagePrefix"));
  Ge.prototype.sign = a(function (e) {
    return Bc(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this);
  }, "sign");
  Ge.prototype.verify = a(function (e, r) {
    return this.eddsa.verify(e, r, this);
  }, "verify");
  Ge.prototype.getSecret = a(function (e) {
    return Bc(this._secret, "KeyPair is public only"), Hf.encode(this.secret(), e);
  }, "getSecret");
  Ge.prototype.getPublic = a(function (e) {
    return Hf.encode(this.pubBytes(), e);
  }, "getPublic");
  Rc.exports = Ge;
});
var Dc = D((Hm, kc) => {
  "use strict";

  var J3 = Ke(),
      ia = ut(),
      $3 = ia.assert,
      fa = ia.cachedProperty,
      Q3 = ia.parseBytes;

  function Ai(t, e) {
    this.eddsa = t, typeof e != "object" && (e = Q3(e)), Array.isArray(e) && (e = {
      R: e.slice(0, t.encodingLength),
      S: e.slice(t.encodingLength)
    }), $3(e.R && e.S, "Signature without R or S"), t.isPoint(e.R) && (this._R = e.R), e.S instanceof J3 && (this._S = e.S), this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded, this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded;
  }

  a(Ai, "Signature");
  fa(Ai, "S", a(function () {
    return this.eddsa.decodeInt(this.Sencoded());
  }, "S"));
  fa(Ai, "R", a(function () {
    return this.eddsa.decodePoint(this.Rencoded());
  }, "R"));
  fa(Ai, "Rencoded", a(function () {
    return this.eddsa.encodePoint(this.R());
  }, "Rencoded"));
  fa(Ai, "Sencoded", a(function () {
    return this.eddsa.encodeInt(this.S());
  }, "Sencoded"));
  Ai.prototype.toBytes = a(function () {
    return this.Rencoded().concat(this.Sencoded());
  }, "toBytes");
  Ai.prototype.toHex = a(function () {
    return ia.encode(this.toBytes(), "hex").toUpperCase();
  }, "toHex");
  kc.exports = Ai;
});
var Lc = D((Fm, Nc) => {
  "use strict";

  var e4 = $n(),
      t4 = Qn(),
      tf = ut(),
      r4 = tf.assert,
      Tc = tf.parseBytes,
      Cc = Ic(),
      Pc = Dc();

  function st(t) {
    if (r4(t === "ed25519", "only tested with ed25519 so far"), !(this instanceof st)) return new st(t);
    t = t4[t].curve, this.curve = t, this.g = t.g, this.g.precompute(t.n.bitLength() + 1), this.pointClass = t.point().constructor, this.encodingLength = Math.ceil(t.n.bitLength() / 8), this.hash = e4.sha512;
  }

  a(st, "EDDSA");
  Nc.exports = st;
  st.prototype.sign = a(function (e, r) {
    e = Tc(e);

    var n = this.keyFromSecret(r),
        i = this.hashInt(n.messagePrefix(), e),
        h = this.g.mul(i),
        b = this.encodePoint(h),
        _ = this.hashInt(b, n.pubBytes(), e).mul(n.priv()),
        x = i.add(_).umod(this.curve.n);

    return this.makeSignature({
      R: h,
      S: x,
      Rencoded: b
    });
  }, "sign");
  st.prototype.verify = a(function (e, r, n) {
    e = Tc(e), r = this.makeSignature(r);

    var i = this.keyFromPublic(n),
        h = this.hashInt(r.Rencoded(), i.pubBytes(), e),
        b = this.g.mul(r.S()),
        _ = r.R().add(i.pub().mul(h));

    return _.eq(b);
  }, "verify");
  st.prototype.hashInt = a(function () {
    for (var e = this.hash(), r = 0; r < arguments.length; r++) e.update(arguments[r]);

    return tf.intFromLE(e.digest()).umod(this.curve.n);
  }, "hashInt");
  st.prototype.keyFromPublic = a(function (e) {
    return Cc.fromPublic(this, e);
  }, "keyFromPublic");
  st.prototype.keyFromSecret = a(function (e) {
    return Cc.fromSecret(this, e);
  }, "keyFromSecret");
  st.prototype.makeSignature = a(function (e) {
    return e instanceof Pc ? e : new Pc(this, e);
  }, "makeSignature");
  st.prototype.encodePoint = a(function (e) {
    var r = e.getY().toArray("le", this.encodingLength);
    return r[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, r;
  }, "encodePoint");
  st.prototype.decodePoint = a(function (e) {
    e = tf.parseBytes(e);
    var r = e.length - 1,
        n = e.slice(0, r).concat(e[r] & -129),
        i = (e[r] & 128) !== 0,
        h = tf.intFromLE(n);
    return this.curve.pointFromY(h, i);
  }, "decodePoint");
  st.prototype.encodeInt = a(function (e) {
    return e.toArray("le", this.encodingLength);
  }, "encodeInt");
  st.prototype.decodeInt = a(function (e) {
    return tf.intFromLE(e);
  }, "decodeInt");
  st.prototype.isPoint = a(function (e) {
    return e instanceof this.pointClass;
  }, "isPoint");
});
var na = D(Oc => {
  "use strict";

  var qi = Oc;
  qi.version = bd().version;
  qi.utils = ut();
  qi.rand = zn();
  qi.curve = Z0();
  qi.curves = Qn();
  qi.ec = Ac();
  qi.eddsa = Lc();
});
var cs = D((zc, ds) => {
  (function (t, e) {
    "use strict";

    function r(l, f) {
      if (!l) throw new Error(f || "Assertion failed");
    }

    a(r, "assert");

    function n(l, f) {
      l.super_ = f;
      var s = a(function () {}, "TempCtor");
      s.prototype = f.prototype, l.prototype = new s(), l.prototype.constructor = l;
    }

    a(n, "inherits");

    function i(l, f, s) {
      if (i.isBN(l)) return l;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, l !== null && ((f === "le" || f === "be") && (s = f, f = 10), this._init(l || 0, f || 10, s || "be"));
    }

    a(i, "BN"), typeof t == "object" ? t.exports = i : e.BN = i, i.BN = i, i.wordSize = 26;
    var h;

    try {
      typeof window < "u" && typeof window.Buffer < "u" ? h = window.Buffer : h = __buffer$.Buffer;
    } catch {}

    i.isBN = a(function (f) {
      return f instanceof i ? !0 : f !== null && typeof f == "object" && f.constructor.wordSize === i.wordSize && Array.isArray(f.words);
    }, "isBN"), i.max = a(function (f, s) {
      return f.cmp(s) > 0 ? f : s;
    }, "max"), i.min = a(function (f, s) {
      return f.cmp(s) < 0 ? f : s;
    }, "min"), i.prototype._init = a(function (f, s, d) {
      if (typeof f == "number") return this._initNumber(f, s, d);
      if (typeof f == "object") return this._initArray(f, s, d);
      s === "hex" && (s = 16), r(s === (s | 0) && s >= 2 && s <= 36), f = f.toString().replace(/\s+/g, "");
      var v = 0;
      f[0] === "-" && (v++, this.negative = 1), v < f.length && (s === 16 ? this._parseHex(f, v, d) : (this._parseBase(f, s, v), d === "le" && this._initArray(this.toArray(), s, d)));
    }, "init"), i.prototype._initNumber = a(function (f, s, d) {
      f < 0 && (this.negative = 1, f = -f), f < 67108864 ? (this.words = [f & 67108863], this.length = 1) : f < 4503599627370496 ? (this.words = [f & 67108863, f / 67108864 & 67108863], this.length = 2) : (r(f < 9007199254740992), this.words = [f & 67108863, f / 67108864 & 67108863, 1], this.length = 3), d === "le" && this._initArray(this.toArray(), s, d);
    }, "_initNumber"), i.prototype._initArray = a(function (f, s, d) {
      if (r(typeof f.length == "number"), f.length <= 0) return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(f.length / 3), this.words = new Array(this.length);

      for (var v = 0; v < this.length; v++) this.words[v] = 0;

      var c,
          u,
          m = 0;
      if (d === "be") for (v = f.length - 1, c = 0; v >= 0; v -= 3) u = f[v] | f[v - 1] << 8 | f[v - 2] << 16, this.words[c] |= u << m & 67108863, this.words[c + 1] = u >>> 26 - m & 67108863, m += 24, m >= 26 && (m -= 26, c++);else if (d === "le") for (v = 0, c = 0; v < f.length; v += 3) u = f[v] | f[v + 1] << 8 | f[v + 2] << 16, this.words[c] |= u << m & 67108863, this.words[c + 1] = u >>> 26 - m & 67108863, m += 24, m >= 26 && (m -= 26, c++);
      return this._strip();
    }, "_initArray");

    function b(l, f) {
      var s = l.charCodeAt(f);
      if (s >= 48 && s <= 57) return s - 48;
      if (s >= 65 && s <= 70) return s - 55;
      if (s >= 97 && s <= 102) return s - 87;
      r(!1, "Invalid character in " + l);
    }

    a(b, "parseHex4Bits");

    function _(l, f, s) {
      var d = b(l, s);
      return s - 1 >= f && (d |= b(l, s - 1) << 4), d;
    }

    a(_, "parseHexByte"), i.prototype._parseHex = a(function (f, s, d) {
      this.length = Math.ceil((f.length - s) / 6), this.words = new Array(this.length);

      for (var v = 0; v < this.length; v++) this.words[v] = 0;

      var c = 0,
          u = 0,
          m;
      if (d === "be") for (v = f.length - 1; v >= s; v -= 2) m = _(f, s, v) << c, this.words[u] |= m & 67108863, c >= 18 ? (c -= 18, u += 1, this.words[u] |= m >>> 26) : c += 8;else {
        var g = f.length - s;

        for (v = g % 2 === 0 ? s + 1 : s; v < f.length; v += 2) m = _(f, s, v) << c, this.words[u] |= m & 67108863, c >= 18 ? (c -= 18, u += 1, this.words[u] |= m >>> 26) : c += 8;
      }

      this._strip();
    }, "_parseHex");

    function x(l, f, s, d) {
      for (var v = 0, c = 0, u = Math.min(l.length, s), m = f; m < u; m++) {
        var g = l.charCodeAt(m) - 48;
        v *= d, g >= 49 ? c = g - 49 + 10 : g >= 17 ? c = g - 17 + 10 : c = g, r(g >= 0 && c < d, "Invalid character"), v += c;
      }

      return v;
    }

    a(x, "parseBase"), i.prototype._parseBase = a(function (f, s, d) {
      this.words = [0], this.length = 1;

      for (var v = 0, c = 1; c <= 67108863; c *= s) v++;

      v--, c = c / s | 0;

      for (var u = f.length - d, m = u % v, g = Math.min(u, u - m) + d, o = 0, y = d; y < g; y += v) o = x(f, y, y + v, s), this.imuln(c), this.words[0] + o < 67108864 ? this.words[0] += o : this._iaddn(o);

      if (m !== 0) {
        var B = 1;

        for (o = x(f, y, f.length, s), y = 0; y < m; y++) B *= s;

        this.imuln(B), this.words[0] + o < 67108864 ? this.words[0] += o : this._iaddn(o);
      }

      this._strip();
    }, "_parseBase"), i.prototype.copy = a(function (f) {
      f.words = new Array(this.length);

      for (var s = 0; s < this.length; s++) f.words[s] = this.words[s];

      f.length = this.length, f.negative = this.negative, f.red = this.red;
    }, "copy");

    function M(l, f) {
      l.words = f.words, l.length = f.length, l.negative = f.negative, l.red = f.red;
    }

    if (a(M, "move"), i.prototype._move = a(function (f) {
      M(f, this);
    }, "_move"), i.prototype.clone = a(function () {
      var f = new i(null);
      return this.copy(f), f;
    }, "clone"), i.prototype._expand = a(function (f) {
      for (; this.length < f;) this.words[this.length++] = 0;

      return this;
    }, "_expand"), i.prototype._strip = a(function () {
      for (; this.length > 1 && this.words[this.length - 1] === 0;) this.length--;

      return this._normSign();
    }, "strip"), i.prototype._normSign = a(function () {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, "_normSign"), typeof Symbol < "u" && typeof Symbol.for == "function") try {
      i.prototype[Symbol.for("nodejs.util.inspect.custom")] = S;
    } catch {
      i.prototype.inspect = S;
    } else i.prototype.inspect = S;

    function S() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }

    a(S, "inspect");
    var A = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
        q = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        k = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    i.prototype.toString = a(function (f, s) {
      f = f || 10, s = s | 0 || 1;
      var d;

      if (f === 16 || f === "hex") {
        d = "";

        for (var v = 0, c = 0, u = 0; u < this.length; u++) {
          var m = this.words[u],
              g = ((m << v | c) & 16777215).toString(16);
          c = m >>> 24 - v & 16777215, v += 2, v >= 26 && (v -= 26, u--), c !== 0 || u !== this.length - 1 ? d = A[6 - g.length] + g + d : d = g + d;
        }

        for (c !== 0 && (d = c.toString(16) + d); d.length % s !== 0;) d = "0" + d;

        return this.negative !== 0 && (d = "-" + d), d;
      }

      if (f === (f | 0) && f >= 2 && f <= 36) {
        var o = q[f],
            y = k[f];
        d = "";
        var B = this.clone();

        for (B.negative = 0; !B.isZero();) {
          var I = B.modrn(y).toString(f);
          B = B.idivn(y), B.isZero() ? d = I + d : d = A[o - I.length] + I + d;
        }

        for (this.isZero() && (d = "0" + d); d.length % s !== 0;) d = "0" + d;

        return this.negative !== 0 && (d = "-" + d), d;
      }

      r(!1, "Base should be between 2 and 36");
    }, "toString"), i.prototype.toNumber = a(function () {
      var f = this.words[0];
      return this.length === 2 ? f += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? f += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -f : f;
    }, "toNumber"), i.prototype.toJSON = a(function () {
      return this.toString(16, 2);
    }, "toJSON"), h && (i.prototype.toBuffer = a(function (f, s) {
      return this.toArrayLike(h, f, s);
    }, "toBuffer")), i.prototype.toArray = a(function (f, s) {
      return this.toArrayLike(Array, f, s);
    }, "toArray");
    var P = a(function (f, s) {
      return f.allocUnsafe ? f.allocUnsafe(s) : new f(s);
    }, "allocate");
    i.prototype.toArrayLike = a(function (f, s, d) {
      this._strip();

      var v = this.byteLength(),
          c = d || Math.max(1, v);
      r(v <= c, "byte array longer than desired length"), r(c > 0, "Requested array length <= 0");
      var u = P(f, c),
          m = s === "le" ? "LE" : "BE";
      return this["_toArrayLike" + m](u, v), u;
    }, "toArrayLike"), i.prototype._toArrayLikeLE = a(function (f, s) {
      for (var d = 0, v = 0, c = 0, u = 0; c < this.length; c++) {
        var m = this.words[c] << u | v;
        f[d++] = m & 255, d < f.length && (f[d++] = m >> 8 & 255), d < f.length && (f[d++] = m >> 16 & 255), u === 6 ? (d < f.length && (f[d++] = m >> 24 & 255), v = 0, u = 0) : (v = m >>> 24, u += 2);
      }

      if (d < f.length) for (f[d++] = v; d < f.length;) f[d++] = 0;
    }, "_toArrayLikeLE"), i.prototype._toArrayLikeBE = a(function (f, s) {
      for (var d = f.length - 1, v = 0, c = 0, u = 0; c < this.length; c++) {
        var m = this.words[c] << u | v;
        f[d--] = m & 255, d >= 0 && (f[d--] = m >> 8 & 255), d >= 0 && (f[d--] = m >> 16 & 255), u === 6 ? (d >= 0 && (f[d--] = m >> 24 & 255), v = 0, u = 0) : (v = m >>> 24, u += 2);
      }

      if (d >= 0) for (f[d--] = v; d >= 0;) f[d--] = 0;
    }, "_toArrayLikeBE"), Math.clz32 ? i.prototype._countBits = a(function (f) {
      return 32 - Math.clz32(f);
    }, "_countBits") : i.prototype._countBits = a(function (f) {
      var s = f,
          d = 0;
      return s >= 4096 && (d += 13, s >>>= 13), s >= 64 && (d += 7, s >>>= 7), s >= 8 && (d += 4, s >>>= 4), s >= 2 && (d += 2, s >>>= 2), d + s;
    }, "_countBits"), i.prototype._zeroBits = a(function (f) {
      if (f === 0) return 26;
      var s = f,
          d = 0;
      return (s & 8191) === 0 && (d += 13, s >>>= 13), (s & 127) === 0 && (d += 7, s >>>= 7), (s & 15) === 0 && (d += 4, s >>>= 4), (s & 3) === 0 && (d += 2, s >>>= 2), (s & 1) === 0 && d++, d;
    }, "_zeroBits"), i.prototype.bitLength = a(function () {
      var f = this.words[this.length - 1],
          s = this._countBits(f);

      return (this.length - 1) * 26 + s;
    }, "bitLength");

    function N(l) {
      for (var f = new Array(l.bitLength()), s = 0; s < f.length; s++) {
        var d = s / 26 | 0,
            v = s % 26;
        f[s] = l.words[d] >>> v & 1;
      }

      return f;
    }

    a(N, "toBitArray"), i.prototype.zeroBits = a(function () {
      if (this.isZero()) return 0;

      for (var f = 0, s = 0; s < this.length; s++) {
        var d = this._zeroBits(this.words[s]);

        if (f += d, d !== 26) break;
      }

      return f;
    }, "zeroBits"), i.prototype.byteLength = a(function () {
      return Math.ceil(this.bitLength() / 8);
    }, "byteLength"), i.prototype.toTwos = a(function (f) {
      return this.negative !== 0 ? this.abs().inotn(f).iaddn(1) : this.clone();
    }, "toTwos"), i.prototype.fromTwos = a(function (f) {
      return this.testn(f - 1) ? this.notn(f).iaddn(1).ineg() : this.clone();
    }, "fromTwos"), i.prototype.isNeg = a(function () {
      return this.negative !== 0;
    }, "isNeg"), i.prototype.neg = a(function () {
      return this.clone().ineg();
    }, "neg"), i.prototype.ineg = a(function () {
      return this.isZero() || (this.negative ^= 1), this;
    }, "ineg"), i.prototype.iuor = a(function (f) {
      for (; this.length < f.length;) this.words[this.length++] = 0;

      for (var s = 0; s < f.length; s++) this.words[s] = this.words[s] | f.words[s];

      return this._strip();
    }, "iuor"), i.prototype.ior = a(function (f) {
      return r((this.negative | f.negative) === 0), this.iuor(f);
    }, "ior"), i.prototype.or = a(function (f) {
      return this.length > f.length ? this.clone().ior(f) : f.clone().ior(this);
    }, "or"), i.prototype.uor = a(function (f) {
      return this.length > f.length ? this.clone().iuor(f) : f.clone().iuor(this);
    }, "uor"), i.prototype.iuand = a(function (f) {
      var s;
      this.length > f.length ? s = f : s = this;

      for (var d = 0; d < s.length; d++) this.words[d] = this.words[d] & f.words[d];

      return this.length = s.length, this._strip();
    }, "iuand"), i.prototype.iand = a(function (f) {
      return r((this.negative | f.negative) === 0), this.iuand(f);
    }, "iand"), i.prototype.and = a(function (f) {
      return this.length > f.length ? this.clone().iand(f) : f.clone().iand(this);
    }, "and"), i.prototype.uand = a(function (f) {
      return this.length > f.length ? this.clone().iuand(f) : f.clone().iuand(this);
    }, "uand"), i.prototype.iuxor = a(function (f) {
      var s, d;
      this.length > f.length ? (s = this, d = f) : (s = f, d = this);

      for (var v = 0; v < d.length; v++) this.words[v] = s.words[v] ^ d.words[v];

      if (this !== s) for (; v < s.length; v++) this.words[v] = s.words[v];
      return this.length = s.length, this._strip();
    }, "iuxor"), i.prototype.ixor = a(function (f) {
      return r((this.negative | f.negative) === 0), this.iuxor(f);
    }, "ixor"), i.prototype.xor = a(function (f) {
      return this.length > f.length ? this.clone().ixor(f) : f.clone().ixor(this);
    }, "xor"), i.prototype.uxor = a(function (f) {
      return this.length > f.length ? this.clone().iuxor(f) : f.clone().iuxor(this);
    }, "uxor"), i.prototype.inotn = a(function (f) {
      r(typeof f == "number" && f >= 0);
      var s = Math.ceil(f / 26) | 0,
          d = f % 26;
      this._expand(s), d > 0 && s--;

      for (var v = 0; v < s; v++) this.words[v] = ~this.words[v] & 67108863;

      return d > 0 && (this.words[v] = ~this.words[v] & 67108863 >> 26 - d), this._strip();
    }, "inotn"), i.prototype.notn = a(function (f) {
      return this.clone().inotn(f);
    }, "notn"), i.prototype.setn = a(function (f, s) {
      r(typeof f == "number" && f >= 0);
      var d = f / 26 | 0,
          v = f % 26;
      return this._expand(d + 1), s ? this.words[d] = this.words[d] | 1 << v : this.words[d] = this.words[d] & ~(1 << v), this._strip();
    }, "setn"), i.prototype.iadd = a(function (f) {
      var s;
      if (this.negative !== 0 && f.negative === 0) return this.negative = 0, s = this.isub(f), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && f.negative !== 0) return f.negative = 0, s = this.isub(f), f.negative = 1, s._normSign();
      var d, v;
      this.length > f.length ? (d = this, v = f) : (d = f, v = this);

      for (var c = 0, u = 0; u < v.length; u++) s = (d.words[u] | 0) + (v.words[u] | 0) + c, this.words[u] = s & 67108863, c = s >>> 26;

      for (; c !== 0 && u < d.length; u++) s = (d.words[u] | 0) + c, this.words[u] = s & 67108863, c = s >>> 26;

      if (this.length = d.length, c !== 0) this.words[this.length] = c, this.length++;else if (d !== this) for (; u < d.length; u++) this.words[u] = d.words[u];
      return this;
    }, "iadd"), i.prototype.add = a(function (f) {
      var s;
      return f.negative !== 0 && this.negative === 0 ? (f.negative = 0, s = this.sub(f), f.negative ^= 1, s) : f.negative === 0 && this.negative !== 0 ? (this.negative = 0, s = f.sub(this), this.negative = 1, s) : this.length > f.length ? this.clone().iadd(f) : f.clone().iadd(this);
    }, "add"), i.prototype.isub = a(function (f) {
      if (f.negative !== 0) {
        f.negative = 0;
        var s = this.iadd(f);
        return f.negative = 1, s._normSign();
      } else if (this.negative !== 0) return this.negative = 0, this.iadd(f), this.negative = 1, this._normSign();

      var d = this.cmp(f);
      if (d === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var v, c;
      d > 0 ? (v = this, c = f) : (v = f, c = this);

      for (var u = 0, m = 0; m < c.length; m++) s = (v.words[m] | 0) - (c.words[m] | 0) + u, u = s >> 26, this.words[m] = s & 67108863;

      for (; u !== 0 && m < v.length; m++) s = (v.words[m] | 0) + u, u = s >> 26, this.words[m] = s & 67108863;

      if (u === 0 && m < v.length && v !== this) for (; m < v.length; m++) this.words[m] = v.words[m];
      return this.length = Math.max(this.length, m), v !== this && (this.negative = 1), this._strip();
    }, "isub"), i.prototype.sub = a(function (f) {
      return this.clone().isub(f);
    }, "sub");

    function ye(l, f, s) {
      s.negative = f.negative ^ l.negative;
      var d = l.length + f.length | 0;
      s.length = d, d = d - 1 | 0;
      var v = l.words[0] | 0,
          c = f.words[0] | 0,
          u = v * c,
          m = u & 67108863,
          g = u / 67108864 | 0;
      s.words[0] = m;

      for (var o = 1; o < d; o++) {
        for (var y = g >>> 26, B = g & 67108863, I = Math.min(o, f.length - 1), R = Math.max(0, o - l.length + 1); R <= I; R++) {
          var T = o - R | 0;
          v = l.words[T] | 0, c = f.words[R] | 0, u = v * c + B, y += u / 67108864 | 0, B = u & 67108863;
        }

        s.words[o] = B | 0, g = y | 0;
      }

      return g !== 0 ? s.words[o] = g | 0 : s.length--, s._strip();
    }

    a(ye, "smallMulTo");
    var O = a(function (f, s, d) {
      var v = f.words,
          c = s.words,
          u = d.words,
          m = 0,
          g,
          o,
          y,
          B = v[0] | 0,
          I = B & 8191,
          R = B >>> 13,
          T = v[1] | 0,
          C = T & 8191,
          L = T >>> 13,
          Ue = v[2] | 0,
          z = Ue & 8191,
          U = Ue >>> 13,
          Ar = v[3] | 0,
          H = Ar & 8191,
          F = Ar >>> 13,
          qr = v[4] | 0,
          K = qr & 8191,
          j = qr >>> 13,
          Br = v[5] | 0,
          W = Br & 8191,
          V = Br >>> 13,
          Rr = v[6] | 0,
          Z = Rr & 8191,
          G = Rr >>> 13,
          Ir = v[7] | 0,
          X = Ir & 8191,
          Y = Ir >>> 13,
          kr = v[8] | 0,
          J = kr & 8191,
          $ = kr >>> 13,
          Dr = v[9] | 0,
          Q = Dr & 8191,
          ee = Dr >>> 13,
          Pr = c[0] | 0,
          te = Pr & 8191,
          re = Pr >>> 13,
          Tr = c[1] | 0,
          ie = Tr & 8191,
          fe = Tr >>> 13,
          Cr = c[2] | 0,
          ne = Cr & 8191,
          ae = Cr >>> 13,
          Nr = c[3] | 0,
          se = Nr & 8191,
          oe = Nr >>> 13,
          Lr = c[4] | 0,
          he = Lr & 8191,
          ue = Lr >>> 13,
          Or = c[5] | 0,
          de = Or & 8191,
          ce = Or >>> 13,
          zr = c[6] | 0,
          le = zr & 8191,
          ve = zr >>> 13,
          Ur = c[7] | 0,
          pe = Ur & 8191,
          be = Ur >>> 13,
          Hr = c[8] | 0,
          me = Hr & 8191,
          ge = Hr >>> 13,
          cr = c[9] | 0,
          we = cr & 8191,
          xe = cr >>> 13;
      d.negative = f.negative ^ s.negative, d.length = 19, g = Math.imul(I, te), o = Math.imul(I, re), o = o + Math.imul(R, te) | 0, y = Math.imul(R, re);
      var qt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, g = Math.imul(C, te), o = Math.imul(C, re), o = o + Math.imul(L, te) | 0, y = Math.imul(L, re), g = g + Math.imul(I, ie) | 0, o = o + Math.imul(I, fe) | 0, o = o + Math.imul(R, ie) | 0, y = y + Math.imul(R, fe) | 0;
      var Bt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, g = Math.imul(z, te), o = Math.imul(z, re), o = o + Math.imul(U, te) | 0, y = Math.imul(U, re), g = g + Math.imul(C, ie) | 0, o = o + Math.imul(C, fe) | 0, o = o + Math.imul(L, ie) | 0, y = y + Math.imul(L, fe) | 0, g = g + Math.imul(I, ne) | 0, o = o + Math.imul(I, ae) | 0, o = o + Math.imul(R, ne) | 0, y = y + Math.imul(R, ae) | 0;
      var Rt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, g = Math.imul(H, te), o = Math.imul(H, re), o = o + Math.imul(F, te) | 0, y = Math.imul(F, re), g = g + Math.imul(z, ie) | 0, o = o + Math.imul(z, fe) | 0, o = o + Math.imul(U, ie) | 0, y = y + Math.imul(U, fe) | 0, g = g + Math.imul(C, ne) | 0, o = o + Math.imul(C, ae) | 0, o = o + Math.imul(L, ne) | 0, y = y + Math.imul(L, ae) | 0, g = g + Math.imul(I, se) | 0, o = o + Math.imul(I, oe) | 0, o = o + Math.imul(R, se) | 0, y = y + Math.imul(R, oe) | 0;
      var It = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, g = Math.imul(K, te), o = Math.imul(K, re), o = o + Math.imul(j, te) | 0, y = Math.imul(j, re), g = g + Math.imul(H, ie) | 0, o = o + Math.imul(H, fe) | 0, o = o + Math.imul(F, ie) | 0, y = y + Math.imul(F, fe) | 0, g = g + Math.imul(z, ne) | 0, o = o + Math.imul(z, ae) | 0, o = o + Math.imul(U, ne) | 0, y = y + Math.imul(U, ae) | 0, g = g + Math.imul(C, se) | 0, o = o + Math.imul(C, oe) | 0, o = o + Math.imul(L, se) | 0, y = y + Math.imul(L, oe) | 0, g = g + Math.imul(I, he) | 0, o = o + Math.imul(I, ue) | 0, o = o + Math.imul(R, he) | 0, y = y + Math.imul(R, ue) | 0;
      var kt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, g = Math.imul(W, te), o = Math.imul(W, re), o = o + Math.imul(V, te) | 0, y = Math.imul(V, re), g = g + Math.imul(K, ie) | 0, o = o + Math.imul(K, fe) | 0, o = o + Math.imul(j, ie) | 0, y = y + Math.imul(j, fe) | 0, g = g + Math.imul(H, ne) | 0, o = o + Math.imul(H, ae) | 0, o = o + Math.imul(F, ne) | 0, y = y + Math.imul(F, ae) | 0, g = g + Math.imul(z, se) | 0, o = o + Math.imul(z, oe) | 0, o = o + Math.imul(U, se) | 0, y = y + Math.imul(U, oe) | 0, g = g + Math.imul(C, he) | 0, o = o + Math.imul(C, ue) | 0, o = o + Math.imul(L, he) | 0, y = y + Math.imul(L, ue) | 0, g = g + Math.imul(I, de) | 0, o = o + Math.imul(I, ce) | 0, o = o + Math.imul(R, de) | 0, y = y + Math.imul(R, ce) | 0;
      var Dt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Dt >>> 26) | 0, Dt &= 67108863, g = Math.imul(Z, te), o = Math.imul(Z, re), o = o + Math.imul(G, te) | 0, y = Math.imul(G, re), g = g + Math.imul(W, ie) | 0, o = o + Math.imul(W, fe) | 0, o = o + Math.imul(V, ie) | 0, y = y + Math.imul(V, fe) | 0, g = g + Math.imul(K, ne) | 0, o = o + Math.imul(K, ae) | 0, o = o + Math.imul(j, ne) | 0, y = y + Math.imul(j, ae) | 0, g = g + Math.imul(H, se) | 0, o = o + Math.imul(H, oe) | 0, o = o + Math.imul(F, se) | 0, y = y + Math.imul(F, oe) | 0, g = g + Math.imul(z, he) | 0, o = o + Math.imul(z, ue) | 0, o = o + Math.imul(U, he) | 0, y = y + Math.imul(U, ue) | 0, g = g + Math.imul(C, de) | 0, o = o + Math.imul(C, ce) | 0, o = o + Math.imul(L, de) | 0, y = y + Math.imul(L, ce) | 0, g = g + Math.imul(I, le) | 0, o = o + Math.imul(I, ve) | 0, o = o + Math.imul(R, le) | 0, y = y + Math.imul(R, ve) | 0;
      var Pt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, g = Math.imul(X, te), o = Math.imul(X, re), o = o + Math.imul(Y, te) | 0, y = Math.imul(Y, re), g = g + Math.imul(Z, ie) | 0, o = o + Math.imul(Z, fe) | 0, o = o + Math.imul(G, ie) | 0, y = y + Math.imul(G, fe) | 0, g = g + Math.imul(W, ne) | 0, o = o + Math.imul(W, ae) | 0, o = o + Math.imul(V, ne) | 0, y = y + Math.imul(V, ae) | 0, g = g + Math.imul(K, se) | 0, o = o + Math.imul(K, oe) | 0, o = o + Math.imul(j, se) | 0, y = y + Math.imul(j, oe) | 0, g = g + Math.imul(H, he) | 0, o = o + Math.imul(H, ue) | 0, o = o + Math.imul(F, he) | 0, y = y + Math.imul(F, ue) | 0, g = g + Math.imul(z, de) | 0, o = o + Math.imul(z, ce) | 0, o = o + Math.imul(U, de) | 0, y = y + Math.imul(U, ce) | 0, g = g + Math.imul(C, le) | 0, o = o + Math.imul(C, ve) | 0, o = o + Math.imul(L, le) | 0, y = y + Math.imul(L, ve) | 0, g = g + Math.imul(I, pe) | 0, o = o + Math.imul(I, be) | 0, o = o + Math.imul(R, pe) | 0, y = y + Math.imul(R, be) | 0;
      var Tt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, g = Math.imul(J, te), o = Math.imul(J, re), o = o + Math.imul($, te) | 0, y = Math.imul($, re), g = g + Math.imul(X, ie) | 0, o = o + Math.imul(X, fe) | 0, o = o + Math.imul(Y, ie) | 0, y = y + Math.imul(Y, fe) | 0, g = g + Math.imul(Z, ne) | 0, o = o + Math.imul(Z, ae) | 0, o = o + Math.imul(G, ne) | 0, y = y + Math.imul(G, ae) | 0, g = g + Math.imul(W, se) | 0, o = o + Math.imul(W, oe) | 0, o = o + Math.imul(V, se) | 0, y = y + Math.imul(V, oe) | 0, g = g + Math.imul(K, he) | 0, o = o + Math.imul(K, ue) | 0, o = o + Math.imul(j, he) | 0, y = y + Math.imul(j, ue) | 0, g = g + Math.imul(H, de) | 0, o = o + Math.imul(H, ce) | 0, o = o + Math.imul(F, de) | 0, y = y + Math.imul(F, ce) | 0, g = g + Math.imul(z, le) | 0, o = o + Math.imul(z, ve) | 0, o = o + Math.imul(U, le) | 0, y = y + Math.imul(U, ve) | 0, g = g + Math.imul(C, pe) | 0, o = o + Math.imul(C, be) | 0, o = o + Math.imul(L, pe) | 0, y = y + Math.imul(L, be) | 0, g = g + Math.imul(I, me) | 0, o = o + Math.imul(I, ge) | 0, o = o + Math.imul(R, me) | 0, y = y + Math.imul(R, ge) | 0;
      var Ct = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, g = Math.imul(Q, te), o = Math.imul(Q, re), o = o + Math.imul(ee, te) | 0, y = Math.imul(ee, re), g = g + Math.imul(J, ie) | 0, o = o + Math.imul(J, fe) | 0, o = o + Math.imul($, ie) | 0, y = y + Math.imul($, fe) | 0, g = g + Math.imul(X, ne) | 0, o = o + Math.imul(X, ae) | 0, o = o + Math.imul(Y, ne) | 0, y = y + Math.imul(Y, ae) | 0, g = g + Math.imul(Z, se) | 0, o = o + Math.imul(Z, oe) | 0, o = o + Math.imul(G, se) | 0, y = y + Math.imul(G, oe) | 0, g = g + Math.imul(W, he) | 0, o = o + Math.imul(W, ue) | 0, o = o + Math.imul(V, he) | 0, y = y + Math.imul(V, ue) | 0, g = g + Math.imul(K, de) | 0, o = o + Math.imul(K, ce) | 0, o = o + Math.imul(j, de) | 0, y = y + Math.imul(j, ce) | 0, g = g + Math.imul(H, le) | 0, o = o + Math.imul(H, ve) | 0, o = o + Math.imul(F, le) | 0, y = y + Math.imul(F, ve) | 0, g = g + Math.imul(z, pe) | 0, o = o + Math.imul(z, be) | 0, o = o + Math.imul(U, pe) | 0, y = y + Math.imul(U, be) | 0, g = g + Math.imul(C, me) | 0, o = o + Math.imul(C, ge) | 0, o = o + Math.imul(L, me) | 0, y = y + Math.imul(L, ge) | 0, g = g + Math.imul(I, we) | 0, o = o + Math.imul(I, xe) | 0, o = o + Math.imul(R, we) | 0, y = y + Math.imul(R, xe) | 0;
      var Nt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, g = Math.imul(Q, ie), o = Math.imul(Q, fe), o = o + Math.imul(ee, ie) | 0, y = Math.imul(ee, fe), g = g + Math.imul(J, ne) | 0, o = o + Math.imul(J, ae) | 0, o = o + Math.imul($, ne) | 0, y = y + Math.imul($, ae) | 0, g = g + Math.imul(X, se) | 0, o = o + Math.imul(X, oe) | 0, o = o + Math.imul(Y, se) | 0, y = y + Math.imul(Y, oe) | 0, g = g + Math.imul(Z, he) | 0, o = o + Math.imul(Z, ue) | 0, o = o + Math.imul(G, he) | 0, y = y + Math.imul(G, ue) | 0, g = g + Math.imul(W, de) | 0, o = o + Math.imul(W, ce) | 0, o = o + Math.imul(V, de) | 0, y = y + Math.imul(V, ce) | 0, g = g + Math.imul(K, le) | 0, o = o + Math.imul(K, ve) | 0, o = o + Math.imul(j, le) | 0, y = y + Math.imul(j, ve) | 0, g = g + Math.imul(H, pe) | 0, o = o + Math.imul(H, be) | 0, o = o + Math.imul(F, pe) | 0, y = y + Math.imul(F, be) | 0, g = g + Math.imul(z, me) | 0, o = o + Math.imul(z, ge) | 0, o = o + Math.imul(U, me) | 0, y = y + Math.imul(U, ge) | 0, g = g + Math.imul(C, we) | 0, o = o + Math.imul(C, xe) | 0, o = o + Math.imul(L, we) | 0, y = y + Math.imul(L, xe) | 0;
      var Lt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, g = Math.imul(Q, ne), o = Math.imul(Q, ae), o = o + Math.imul(ee, ne) | 0, y = Math.imul(ee, ae), g = g + Math.imul(J, se) | 0, o = o + Math.imul(J, oe) | 0, o = o + Math.imul($, se) | 0, y = y + Math.imul($, oe) | 0, g = g + Math.imul(X, he) | 0, o = o + Math.imul(X, ue) | 0, o = o + Math.imul(Y, he) | 0, y = y + Math.imul(Y, ue) | 0, g = g + Math.imul(Z, de) | 0, o = o + Math.imul(Z, ce) | 0, o = o + Math.imul(G, de) | 0, y = y + Math.imul(G, ce) | 0, g = g + Math.imul(W, le) | 0, o = o + Math.imul(W, ve) | 0, o = o + Math.imul(V, le) | 0, y = y + Math.imul(V, ve) | 0, g = g + Math.imul(K, pe) | 0, o = o + Math.imul(K, be) | 0, o = o + Math.imul(j, pe) | 0, y = y + Math.imul(j, be) | 0, g = g + Math.imul(H, me) | 0, o = o + Math.imul(H, ge) | 0, o = o + Math.imul(F, me) | 0, y = y + Math.imul(F, ge) | 0, g = g + Math.imul(z, we) | 0, o = o + Math.imul(z, xe) | 0, o = o + Math.imul(U, we) | 0, y = y + Math.imul(U, xe) | 0;
      var Ot = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, g = Math.imul(Q, se), o = Math.imul(Q, oe), o = o + Math.imul(ee, se) | 0, y = Math.imul(ee, oe), g = g + Math.imul(J, he) | 0, o = o + Math.imul(J, ue) | 0, o = o + Math.imul($, he) | 0, y = y + Math.imul($, ue) | 0, g = g + Math.imul(X, de) | 0, o = o + Math.imul(X, ce) | 0, o = o + Math.imul(Y, de) | 0, y = y + Math.imul(Y, ce) | 0, g = g + Math.imul(Z, le) | 0, o = o + Math.imul(Z, ve) | 0, o = o + Math.imul(G, le) | 0, y = y + Math.imul(G, ve) | 0, g = g + Math.imul(W, pe) | 0, o = o + Math.imul(W, be) | 0, o = o + Math.imul(V, pe) | 0, y = y + Math.imul(V, be) | 0, g = g + Math.imul(K, me) | 0, o = o + Math.imul(K, ge) | 0, o = o + Math.imul(j, me) | 0, y = y + Math.imul(j, ge) | 0, g = g + Math.imul(H, we) | 0, o = o + Math.imul(H, xe) | 0, o = o + Math.imul(F, we) | 0, y = y + Math.imul(F, xe) | 0;
      var zt = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (zt >>> 26) | 0, zt &= 67108863, g = Math.imul(Q, he), o = Math.imul(Q, ue), o = o + Math.imul(ee, he) | 0, y = Math.imul(ee, ue), g = g + Math.imul(J, de) | 0, o = o + Math.imul(J, ce) | 0, o = o + Math.imul($, de) | 0, y = y + Math.imul($, ce) | 0, g = g + Math.imul(X, le) | 0, o = o + Math.imul(X, ve) | 0, o = o + Math.imul(Y, le) | 0, y = y + Math.imul(Y, ve) | 0, g = g + Math.imul(Z, pe) | 0, o = o + Math.imul(Z, be) | 0, o = o + Math.imul(G, pe) | 0, y = y + Math.imul(G, be) | 0, g = g + Math.imul(W, me) | 0, o = o + Math.imul(W, ge) | 0, o = o + Math.imul(V, me) | 0, y = y + Math.imul(V, ge) | 0, g = g + Math.imul(K, we) | 0, o = o + Math.imul(K, xe) | 0, o = o + Math.imul(j, we) | 0, y = y + Math.imul(j, xe) | 0;
      var Ut = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, g = Math.imul(Q, de), o = Math.imul(Q, ce), o = o + Math.imul(ee, de) | 0, y = Math.imul(ee, ce), g = g + Math.imul(J, le) | 0, o = o + Math.imul(J, ve) | 0, o = o + Math.imul($, le) | 0, y = y + Math.imul($, ve) | 0, g = g + Math.imul(X, pe) | 0, o = o + Math.imul(X, be) | 0, o = o + Math.imul(Y, pe) | 0, y = y + Math.imul(Y, be) | 0, g = g + Math.imul(Z, me) | 0, o = o + Math.imul(Z, ge) | 0, o = o + Math.imul(G, me) | 0, y = y + Math.imul(G, ge) | 0, g = g + Math.imul(W, we) | 0, o = o + Math.imul(W, xe) | 0, o = o + Math.imul(V, we) | 0, y = y + Math.imul(V, xe) | 0;
      var Ht = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Ht >>> 26) | 0, Ht &= 67108863, g = Math.imul(Q, le), o = Math.imul(Q, ve), o = o + Math.imul(ee, le) | 0, y = Math.imul(ee, ve), g = g + Math.imul(J, pe) | 0, o = o + Math.imul(J, be) | 0, o = o + Math.imul($, pe) | 0, y = y + Math.imul($, be) | 0, g = g + Math.imul(X, me) | 0, o = o + Math.imul(X, ge) | 0, o = o + Math.imul(Y, me) | 0, y = y + Math.imul(Y, ge) | 0, g = g + Math.imul(Z, we) | 0, o = o + Math.imul(Z, xe) | 0, o = o + Math.imul(G, we) | 0, y = y + Math.imul(G, xe) | 0;
      var Ft = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (Ft >>> 26) | 0, Ft &= 67108863, g = Math.imul(Q, pe), o = Math.imul(Q, be), o = o + Math.imul(ee, pe) | 0, y = Math.imul(ee, be), g = g + Math.imul(J, me) | 0, o = o + Math.imul(J, ge) | 0, o = o + Math.imul($, me) | 0, y = y + Math.imul($, ge) | 0, g = g + Math.imul(X, we) | 0, o = o + Math.imul(X, xe) | 0, o = o + Math.imul(Y, we) | 0, y = y + Math.imul(Y, xe) | 0;
      var ti = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (ti >>> 26) | 0, ti &= 67108863, g = Math.imul(Q, me), o = Math.imul(Q, ge), o = o + Math.imul(ee, me) | 0, y = Math.imul(ee, ge), g = g + Math.imul(J, we) | 0, o = o + Math.imul(J, xe) | 0, o = o + Math.imul($, we) | 0, y = y + Math.imul($, xe) | 0;
      var ri = (m + g | 0) + ((o & 8191) << 13) | 0;
      m = (y + (o >>> 13) | 0) + (ri >>> 26) | 0, ri &= 67108863, g = Math.imul(Q, we), o = Math.imul(Q, xe), o = o + Math.imul(ee, we) | 0, y = Math.imul(ee, xe);
      var ii = (m + g | 0) + ((o & 8191) << 13) | 0;
      return m = (y + (o >>> 13) | 0) + (ii >>> 26) | 0, ii &= 67108863, u[0] = qt, u[1] = Bt, u[2] = Rt, u[3] = It, u[4] = kt, u[5] = Dt, u[6] = Pt, u[7] = Tt, u[8] = Ct, u[9] = Nt, u[10] = Lt, u[11] = Ot, u[12] = zt, u[13] = Ut, u[14] = Ht, u[15] = Ft, u[16] = ti, u[17] = ri, u[18] = ii, m !== 0 && (u[19] = m, d.length++), d;
    }, "comb10MulTo");
    Math.imul || (O = ye);

    function _e(l, f, s) {
      s.negative = f.negative ^ l.negative, s.length = l.length + f.length;

      for (var d = 0, v = 0, c = 0; c < s.length - 1; c++) {
        var u = v;
        v = 0;

        for (var m = d & 67108863, g = Math.min(c, f.length - 1), o = Math.max(0, c - l.length + 1); o <= g; o++) {
          var y = c - o,
              B = l.words[y] | 0,
              I = f.words[o] | 0,
              R = B * I,
              T = R & 67108863;
          u = u + (R / 67108864 | 0) | 0, T = T + m | 0, m = T & 67108863, u = u + (T >>> 26) | 0, v += u >>> 26, u &= 67108863;
        }

        s.words[c] = m, d = u, u = v;
      }

      return d !== 0 ? s.words[c] = d : s.length--, s._strip();
    }

    a(_e, "bigMulTo");

    function Ie(l, f, s) {
      return _e(l, f, s);
    }

    a(Ie, "jumboMulTo"), i.prototype.mulTo = a(function (f, s) {
      var d,
          v = this.length + f.length;
      return this.length === 10 && f.length === 10 ? d = O(this, f, s) : v < 63 ? d = ye(this, f, s) : v < 1024 ? d = _e(this, f, s) : d = Ie(this, f, s), d;
    }, "mulTo");

    function Me(l, f) {
      this.x = l, this.y = f;
    }

    a(Me, "FFTM"), Me.prototype.makeRBT = a(function (f) {
      for (var s = new Array(f), d = i.prototype._countBits(f) - 1, v = 0; v < f; v++) s[v] = this.revBin(v, d, f);

      return s;
    }, "makeRBT"), Me.prototype.revBin = a(function (f, s, d) {
      if (f === 0 || f === d - 1) return f;

      for (var v = 0, c = 0; c < s; c++) v |= (f & 1) << s - c - 1, f >>= 1;

      return v;
    }, "revBin"), Me.prototype.permute = a(function (f, s, d, v, c, u) {
      for (var m = 0; m < u; m++) v[m] = s[f[m]], c[m] = d[f[m]];
    }, "permute"), Me.prototype.transform = a(function (f, s, d, v, c, u) {
      this.permute(u, f, s, d, v, c);

      for (var m = 1; m < c; m <<= 1) for (var g = m << 1, o = Math.cos(2 * Math.PI / g), y = Math.sin(2 * Math.PI / g), B = 0; B < c; B += g) for (var I = o, R = y, T = 0; T < m; T++) {
        var C = d[B + T],
            L = v[B + T],
            Ue = d[B + T + m],
            z = v[B + T + m],
            U = I * Ue - R * z;
        z = I * z + R * Ue, Ue = U, d[B + T] = C + Ue, v[B + T] = L + z, d[B + T + m] = C - Ue, v[B + T + m] = L - z, T !== g && (U = o * I - y * R, R = o * R + y * I, I = U);
      }
    }, "transform"), Me.prototype.guessLen13b = a(function (f, s) {
      var d = Math.max(s, f) | 1,
          v = d & 1,
          c = 0;

      for (d = d / 2 | 0; d; d = d >>> 1) c++;

      return 1 << c + 1 + v;
    }, "guessLen13b"), Me.prototype.conjugate = a(function (f, s, d) {
      if (!(d <= 1)) for (var v = 0; v < d / 2; v++) {
        var c = f[v];
        f[v] = f[d - v - 1], f[d - v - 1] = c, c = s[v], s[v] = -s[d - v - 1], s[d - v - 1] = -c;
      }
    }, "conjugate"), Me.prototype.normalize13b = a(function (f, s) {
      for (var d = 0, v = 0; v < s / 2; v++) {
        var c = Math.round(f[2 * v + 1] / s) * 8192 + Math.round(f[2 * v] / s) + d;
        f[v] = c & 67108863, c < 67108864 ? d = 0 : d = c / 67108864 | 0;
      }

      return f;
    }, "normalize13b"), Me.prototype.convert13b = a(function (f, s, d, v) {
      for (var c = 0, u = 0; u < s; u++) c = c + (f[u] | 0), d[2 * u] = c & 8191, c = c >>> 13, d[2 * u + 1] = c & 8191, c = c >>> 13;

      for (u = 2 * s; u < v; ++u) d[u] = 0;

      r(c === 0), r((c & -8192) === 0);
    }, "convert13b"), Me.prototype.stub = a(function (f) {
      for (var s = new Array(f), d = 0; d < f; d++) s[d] = 0;

      return s;
    }, "stub"), Me.prototype.mulp = a(function (f, s, d) {
      var v = 2 * this.guessLen13b(f.length, s.length),
          c = this.makeRBT(v),
          u = this.stub(v),
          m = new Array(v),
          g = new Array(v),
          o = new Array(v),
          y = new Array(v),
          B = new Array(v),
          I = new Array(v),
          R = d.words;
      R.length = v, this.convert13b(f.words, f.length, m, v), this.convert13b(s.words, s.length, y, v), this.transform(m, u, g, o, v, c), this.transform(y, u, B, I, v, c);

      for (var T = 0; T < v; T++) {
        var C = g[T] * B[T] - o[T] * I[T];
        o[T] = g[T] * I[T] + o[T] * B[T], g[T] = C;
      }

      return this.conjugate(g, o, v), this.transform(g, o, R, u, v, c), this.conjugate(R, u, v), this.normalize13b(R, v), d.negative = f.negative ^ s.negative, d.length = f.length + s.length, d._strip();
    }, "mulp"), i.prototype.mul = a(function (f) {
      var s = new i(null);
      return s.words = new Array(this.length + f.length), this.mulTo(f, s);
    }, "mul"), i.prototype.mulf = a(function (f) {
      var s = new i(null);
      return s.words = new Array(this.length + f.length), Ie(this, f, s);
    }, "mulf"), i.prototype.imul = a(function (f) {
      return this.clone().mulTo(f, this);
    }, "imul"), i.prototype.imuln = a(function (f) {
      var s = f < 0;
      s && (f = -f), r(typeof f == "number"), r(f < 67108864);

      for (var d = 0, v = 0; v < this.length; v++) {
        var c = (this.words[v] | 0) * f,
            u = (c & 67108863) + (d & 67108863);
        d >>= 26, d += c / 67108864 | 0, d += u >>> 26, this.words[v] = u & 67108863;
      }

      return d !== 0 && (this.words[v] = d, this.length++), s ? this.ineg() : this;
    }, "imuln"), i.prototype.muln = a(function (f) {
      return this.clone().imuln(f);
    }, "muln"), i.prototype.sqr = a(function () {
      return this.mul(this);
    }, "sqr"), i.prototype.isqr = a(function () {
      return this.imul(this.clone());
    }, "isqr"), i.prototype.pow = a(function (f) {
      var s = N(f);
      if (s.length === 0) return new i(1);

      for (var d = this, v = 0; v < s.length && s[v] === 0; v++, d = d.sqr());

      if (++v < s.length) for (var c = d.sqr(); v < s.length; v++, c = c.sqr()) s[v] !== 0 && (d = d.mul(c));
      return d;
    }, "pow"), i.prototype.iushln = a(function (f) {
      r(typeof f == "number" && f >= 0);
      var s = f % 26,
          d = (f - s) / 26,
          v = 67108863 >>> 26 - s << 26 - s,
          c;

      if (s !== 0) {
        var u = 0;

        for (c = 0; c < this.length; c++) {
          var m = this.words[c] & v,
              g = (this.words[c] | 0) - m << s;
          this.words[c] = g | u, u = m >>> 26 - s;
        }

        u && (this.words[c] = u, this.length++);
      }

      if (d !== 0) {
        for (c = this.length - 1; c >= 0; c--) this.words[c + d] = this.words[c];

        for (c = 0; c < d; c++) this.words[c] = 0;

        this.length += d;
      }

      return this._strip();
    }, "iushln"), i.prototype.ishln = a(function (f) {
      return r(this.negative === 0), this.iushln(f);
    }, "ishln"), i.prototype.iushrn = a(function (f, s, d) {
      r(typeof f == "number" && f >= 0);
      var v;
      s ? v = (s - s % 26) / 26 : v = 0;
      var c = f % 26,
          u = Math.min((f - c) / 26, this.length),
          m = 67108863 ^ 67108863 >>> c << c,
          g = d;

      if (v -= u, v = Math.max(0, v), g) {
        for (var o = 0; o < u; o++) g.words[o] = this.words[o];

        g.length = u;
      }

      if (u !== 0) if (this.length > u) for (this.length -= u, o = 0; o < this.length; o++) this.words[o] = this.words[o + u];else this.words[0] = 0, this.length = 1;
      var y = 0;

      for (o = this.length - 1; o >= 0 && (y !== 0 || o >= v); o--) {
        var B = this.words[o] | 0;
        this.words[o] = y << 26 - c | B >>> c, y = B & m;
      }

      return g && y !== 0 && (g.words[g.length++] = y), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, "iushrn"), i.prototype.ishrn = a(function (f, s, d) {
      return r(this.negative === 0), this.iushrn(f, s, d);
    }, "ishrn"), i.prototype.shln = a(function (f) {
      return this.clone().ishln(f);
    }, "shln"), i.prototype.ushln = a(function (f) {
      return this.clone().iushln(f);
    }, "ushln"), i.prototype.shrn = a(function (f) {
      return this.clone().ishrn(f);
    }, "shrn"), i.prototype.ushrn = a(function (f) {
      return this.clone().iushrn(f);
    }, "ushrn"), i.prototype.testn = a(function (f) {
      r(typeof f == "number" && f >= 0);
      var s = f % 26,
          d = (f - s) / 26,
          v = 1 << s;
      if (this.length <= d) return !1;
      var c = this.words[d];
      return !!(c & v);
    }, "testn"), i.prototype.imaskn = a(function (f) {
      r(typeof f == "number" && f >= 0);
      var s = f % 26,
          d = (f - s) / 26;
      if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= d) return this;

      if (s !== 0 && d++, this.length = Math.min(d, this.length), s !== 0) {
        var v = 67108863 ^ 67108863 >>> s << s;
        this.words[this.length - 1] &= v;
      }

      return this._strip();
    }, "imaskn"), i.prototype.maskn = a(function (f) {
      return this.clone().imaskn(f);
    }, "maskn"), i.prototype.iaddn = a(function (f) {
      return r(typeof f == "number"), r(f < 67108864), f < 0 ? this.isubn(-f) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= f ? (this.words[0] = f - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(f), this.negative = 1, this) : this._iaddn(f);
    }, "iaddn"), i.prototype._iaddn = a(function (f) {
      this.words[0] += f;

      for (var s = 0; s < this.length && this.words[s] >= 67108864; s++) this.words[s] -= 67108864, s === this.length - 1 ? this.words[s + 1] = 1 : this.words[s + 1]++;

      return this.length = Math.max(this.length, s + 1), this;
    }, "_iaddn"), i.prototype.isubn = a(function (f) {
      if (r(typeof f == "number"), r(f < 67108864), f < 0) return this.iaddn(-f);
      if (this.negative !== 0) return this.negative = 0, this.iaddn(f), this.negative = 1, this;
      if (this.words[0] -= f, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;else for (var s = 0; s < this.length && this.words[s] < 0; s++) this.words[s] += 67108864, this.words[s + 1] -= 1;
      return this._strip();
    }, "isubn"), i.prototype.addn = a(function (f) {
      return this.clone().iaddn(f);
    }, "addn"), i.prototype.subn = a(function (f) {
      return this.clone().isubn(f);
    }, "subn"), i.prototype.iabs = a(function () {
      return this.negative = 0, this;
    }, "iabs"), i.prototype.abs = a(function () {
      return this.clone().iabs();
    }, "abs"), i.prototype._ishlnsubmul = a(function (f, s, d) {
      var v = f.length + d,
          c;

      this._expand(v);

      var u,
          m = 0;

      for (c = 0; c < f.length; c++) {
        u = (this.words[c + d] | 0) + m;
        var g = (f.words[c] | 0) * s;
        u -= g & 67108863, m = (u >> 26) - (g / 67108864 | 0), this.words[c + d] = u & 67108863;
      }

      for (; c < this.length - d; c++) u = (this.words[c + d] | 0) + m, m = u >> 26, this.words[c + d] = u & 67108863;

      if (m === 0) return this._strip();

      for (r(m === -1), m = 0, c = 0; c < this.length; c++) u = -(this.words[c] | 0) + m, m = u >> 26, this.words[c] = u & 67108863;

      return this.negative = 1, this._strip();
    }, "_ishlnsubmul"), i.prototype._wordDiv = a(function (f, s) {
      var d = this.length - f.length,
          v = this.clone(),
          c = f,
          u = c.words[c.length - 1] | 0,
          m = this._countBits(u);

      d = 26 - m, d !== 0 && (c = c.ushln(d), v.iushln(d), u = c.words[c.length - 1] | 0);
      var g = v.length - c.length,
          o;

      if (s !== "mod") {
        o = new i(null), o.length = g + 1, o.words = new Array(o.length);

        for (var y = 0; y < o.length; y++) o.words[y] = 0;
      }

      var B = v.clone()._ishlnsubmul(c, 1, g);

      B.negative === 0 && (v = B, o && (o.words[g] = 1));

      for (var I = g - 1; I >= 0; I--) {
        var R = (v.words[c.length + I] | 0) * 67108864 + (v.words[c.length + I - 1] | 0);

        for (R = Math.min(R / u | 0, 67108863), v._ishlnsubmul(c, R, I); v.negative !== 0;) R--, v.negative = 0, v._ishlnsubmul(c, 1, I), v.isZero() || (v.negative ^= 1);

        o && (o.words[I] = R);
      }

      return o && o._strip(), v._strip(), s !== "div" && d !== 0 && v.iushrn(d), {
        div: o || null,
        mod: v
      };
    }, "_wordDiv"), i.prototype.divmod = a(function (f, s, d) {
      if (r(!f.isZero()), this.isZero()) return {
        div: new i(0),
        mod: new i(0)
      };
      var v, c, u;
      return this.negative !== 0 && f.negative === 0 ? (u = this.neg().divmod(f, s), s !== "mod" && (v = u.div.neg()), s !== "div" && (c = u.mod.neg(), d && c.negative !== 0 && c.iadd(f)), {
        div: v,
        mod: c
      }) : this.negative === 0 && f.negative !== 0 ? (u = this.divmod(f.neg(), s), s !== "mod" && (v = u.div.neg()), {
        div: v,
        mod: u.mod
      }) : (this.negative & f.negative) !== 0 ? (u = this.neg().divmod(f.neg(), s), s !== "div" && (c = u.mod.neg(), d && c.negative !== 0 && c.isub(f)), {
        div: u.div,
        mod: c
      }) : f.length > this.length || this.cmp(f) < 0 ? {
        div: new i(0),
        mod: this
      } : f.length === 1 ? s === "div" ? {
        div: this.divn(f.words[0]),
        mod: null
      } : s === "mod" ? {
        div: null,
        mod: new i(this.modrn(f.words[0]))
      } : {
        div: this.divn(f.words[0]),
        mod: new i(this.modrn(f.words[0]))
      } : this._wordDiv(f, s);
    }, "divmod"), i.prototype.div = a(function (f) {
      return this.divmod(f, "div", !1).div;
    }, "div"), i.prototype.mod = a(function (f) {
      return this.divmod(f, "mod", !1).mod;
    }, "mod"), i.prototype.umod = a(function (f) {
      return this.divmod(f, "mod", !0).mod;
    }, "umod"), i.prototype.divRound = a(function (f) {
      var s = this.divmod(f);
      if (s.mod.isZero()) return s.div;
      var d = s.div.negative !== 0 ? s.mod.isub(f) : s.mod,
          v = f.ushrn(1),
          c = f.andln(1),
          u = d.cmp(v);
      return u < 0 || c === 1 && u === 0 ? s.div : s.div.negative !== 0 ? s.div.isubn(1) : s.div.iaddn(1);
    }, "divRound"), i.prototype.modrn = a(function (f) {
      var s = f < 0;
      s && (f = -f), r(f <= 67108863);

      for (var d = (1 << 26) % f, v = 0, c = this.length - 1; c >= 0; c--) v = (d * v + (this.words[c] | 0)) % f;

      return s ? -v : v;
    }, "modrn"), i.prototype.modn = a(function (f) {
      return this.modrn(f);
    }, "modn"), i.prototype.idivn = a(function (f) {
      var s = f < 0;
      s && (f = -f), r(f <= 67108863);

      for (var d = 0, v = this.length - 1; v >= 0; v--) {
        var c = (this.words[v] | 0) + d * 67108864;
        this.words[v] = c / f | 0, d = c % f;
      }

      return this._strip(), s ? this.ineg() : this;
    }, "idivn"), i.prototype.divn = a(function (f) {
      return this.clone().idivn(f);
    }, "divn"), i.prototype.egcd = a(function (f) {
      r(f.negative === 0), r(!f.isZero());
      var s = this,
          d = f.clone();
      s.negative !== 0 ? s = s.umod(f) : s = s.clone();

      for (var v = new i(1), c = new i(0), u = new i(0), m = new i(1), g = 0; s.isEven() && d.isEven();) s.iushrn(1), d.iushrn(1), ++g;

      for (var o = d.clone(), y = s.clone(); !s.isZero();) {
        for (var B = 0, I = 1; (s.words[0] & I) === 0 && B < 26; ++B, I <<= 1);

        if (B > 0) for (s.iushrn(B); B-- > 0;) (v.isOdd() || c.isOdd()) && (v.iadd(o), c.isub(y)), v.iushrn(1), c.iushrn(1);

        for (var R = 0, T = 1; (d.words[0] & T) === 0 && R < 26; ++R, T <<= 1);

        if (R > 0) for (d.iushrn(R); R-- > 0;) (u.isOdd() || m.isOdd()) && (u.iadd(o), m.isub(y)), u.iushrn(1), m.iushrn(1);
        s.cmp(d) >= 0 ? (s.isub(d), v.isub(u), c.isub(m)) : (d.isub(s), u.isub(v), m.isub(c));
      }

      return {
        a: u,
        b: m,
        gcd: d.iushln(g)
      };
    }, "egcd"), i.prototype._invmp = a(function (f) {
      r(f.negative === 0), r(!f.isZero());
      var s = this,
          d = f.clone();
      s.negative !== 0 ? s = s.umod(f) : s = s.clone();

      for (var v = new i(1), c = new i(0), u = d.clone(); s.cmpn(1) > 0 && d.cmpn(1) > 0;) {
        for (var m = 0, g = 1; (s.words[0] & g) === 0 && m < 26; ++m, g <<= 1);

        if (m > 0) for (s.iushrn(m); m-- > 0;) v.isOdd() && v.iadd(u), v.iushrn(1);

        for (var o = 0, y = 1; (d.words[0] & y) === 0 && o < 26; ++o, y <<= 1);

        if (o > 0) for (d.iushrn(o); o-- > 0;) c.isOdd() && c.iadd(u), c.iushrn(1);
        s.cmp(d) >= 0 ? (s.isub(d), v.isub(c)) : (d.isub(s), c.isub(v));
      }

      var B;
      return s.cmpn(1) === 0 ? B = v : B = c, B.cmpn(0) < 0 && B.iadd(f), B;
    }, "_invmp"), i.prototype.gcd = a(function (f) {
      if (this.isZero()) return f.abs();
      if (f.isZero()) return this.abs();
      var s = this.clone(),
          d = f.clone();
      s.negative = 0, d.negative = 0;

      for (var v = 0; s.isEven() && d.isEven(); v++) s.iushrn(1), d.iushrn(1);

      do {
        for (; s.isEven();) s.iushrn(1);

        for (; d.isEven();) d.iushrn(1);

        var c = s.cmp(d);

        if (c < 0) {
          var u = s;
          s = d, d = u;
        } else if (c === 0 || d.cmpn(1) === 0) break;

        s.isub(d);
      } while (!0);

      return d.iushln(v);
    }, "gcd"), i.prototype.invm = a(function (f) {
      return this.egcd(f).a.umod(f);
    }, "invm"), i.prototype.isEven = a(function () {
      return (this.words[0] & 1) === 0;
    }, "isEven"), i.prototype.isOdd = a(function () {
      return (this.words[0] & 1) === 1;
    }, "isOdd"), i.prototype.andln = a(function (f) {
      return this.words[0] & f;
    }, "andln"), i.prototype.bincn = a(function (f) {
      r(typeof f == "number");
      var s = f % 26,
          d = (f - s) / 26,
          v = 1 << s;
      if (this.length <= d) return this._expand(d + 1), this.words[d] |= v, this;

      for (var c = v, u = d; c !== 0 && u < this.length; u++) {
        var m = this.words[u] | 0;
        m += c, c = m >>> 26, m &= 67108863, this.words[u] = m;
      }

      return c !== 0 && (this.words[u] = c, this.length++), this;
    }, "bincn"), i.prototype.isZero = a(function () {
      return this.length === 1 && this.words[0] === 0;
    }, "isZero"), i.prototype.cmpn = a(function (f) {
      var s = f < 0;
      if (this.negative !== 0 && !s) return -1;
      if (this.negative === 0 && s) return 1;

      this._strip();

      var d;
      if (this.length > 1) d = 1;else {
        s && (f = -f), r(f <= 67108863, "Number is too big");
        var v = this.words[0] | 0;
        d = v === f ? 0 : v < f ? -1 : 1;
      }
      return this.negative !== 0 ? -d | 0 : d;
    }, "cmpn"), i.prototype.cmp = a(function (f) {
      if (this.negative !== 0 && f.negative === 0) return -1;
      if (this.negative === 0 && f.negative !== 0) return 1;
      var s = this.ucmp(f);
      return this.negative !== 0 ? -s | 0 : s;
    }, "cmp"), i.prototype.ucmp = a(function (f) {
      if (this.length > f.length) return 1;
      if (this.length < f.length) return -1;

      for (var s = 0, d = this.length - 1; d >= 0; d--) {
        var v = this.words[d] | 0,
            c = f.words[d] | 0;

        if (v !== c) {
          v < c ? s = -1 : v > c && (s = 1);
          break;
        }
      }

      return s;
    }, "ucmp"), i.prototype.gtn = a(function (f) {
      return this.cmpn(f) === 1;
    }, "gtn"), i.prototype.gt = a(function (f) {
      return this.cmp(f) === 1;
    }, "gt"), i.prototype.gten = a(function (f) {
      return this.cmpn(f) >= 0;
    }, "gten"), i.prototype.gte = a(function (f) {
      return this.cmp(f) >= 0;
    }, "gte"), i.prototype.ltn = a(function (f) {
      return this.cmpn(f) === -1;
    }, "ltn"), i.prototype.lt = a(function (f) {
      return this.cmp(f) === -1;
    }, "lt"), i.prototype.lten = a(function (f) {
      return this.cmpn(f) <= 0;
    }, "lten"), i.prototype.lte = a(function (f) {
      return this.cmp(f) <= 0;
    }, "lte"), i.prototype.eqn = a(function (f) {
      return this.cmpn(f) === 0;
    }, "eqn"), i.prototype.eq = a(function (f) {
      return this.cmp(f) === 0;
    }, "eq"), i.red = a(function (f) {
      return new p(f);
    }, "red"), i.prototype.toRed = a(function (f) {
      return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), f.convertTo(this)._forceRed(f);
    }, "toRed"), i.prototype.fromRed = a(function () {
      return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, "fromRed"), i.prototype._forceRed = a(function (f) {
      return this.red = f, this;
    }, "_forceRed"), i.prototype.forceRed = a(function (f) {
      return r(!this.red, "Already a number in reduction context"), this._forceRed(f);
    }, "forceRed"), i.prototype.redAdd = a(function (f) {
      return r(this.red, "redAdd works only with red numbers"), this.red.add(this, f);
    }, "redAdd"), i.prototype.redIAdd = a(function (f) {
      return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, f);
    }, "redIAdd"), i.prototype.redSub = a(function (f) {
      return r(this.red, "redSub works only with red numbers"), this.red.sub(this, f);
    }, "redSub"), i.prototype.redISub = a(function (f) {
      return r(this.red, "redISub works only with red numbers"), this.red.isub(this, f);
    }, "redISub"), i.prototype.redShl = a(function (f) {
      return r(this.red, "redShl works only with red numbers"), this.red.shl(this, f);
    }, "redShl"), i.prototype.redMul = a(function (f) {
      return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.mul(this, f);
    }, "redMul"), i.prototype.redIMul = a(function (f) {
      return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.imul(this, f);
    }, "redIMul"), i.prototype.redSqr = a(function () {
      return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, "redSqr"), i.prototype.redISqr = a(function () {
      return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, "redISqr"), i.prototype.redSqrt = a(function () {
      return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, "redSqrt"), i.prototype.redInvm = a(function () {
      return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, "redInvm"), i.prototype.redNeg = a(function () {
      return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, "redNeg"), i.prototype.redPow = a(function (f) {
      return r(this.red && !f.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, f);
    }, "redPow");
    var De = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };

    function Se(l, f) {
      this.name = l, this.p = new i(f, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }

    a(Se, "MPrime"), Se.prototype._tmp = a(function () {
      var f = new i(null);
      return f.words = new Array(Math.ceil(this.n / 13)), f;
    }, "_tmp"), Se.prototype.ireduce = a(function (f) {
      var s = f,
          d;

      do this.split(s, this.tmp), s = this.imulK(s), s = s.iadd(this.tmp), d = s.bitLength(); while (d > this.n);

      var v = d < this.n ? -1 : s.ucmp(this.p);
      return v === 0 ? (s.words[0] = 0, s.length = 1) : v > 0 ? s.isub(this.p) : s.strip !== void 0 ? s.strip() : s._strip(), s;
    }, "ireduce"), Se.prototype.split = a(function (f, s) {
      f.iushrn(this.n, 0, s);
    }, "split"), Se.prototype.imulK = a(function (f) {
      return f.imul(this.k);
    }, "imulK");

    function Ne() {
      Se.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }

    a(Ne, "K256"), n(Ne, Se), Ne.prototype.split = a(function (f, s) {
      for (var d = 4194303, v = Math.min(f.length, 9), c = 0; c < v; c++) s.words[c] = f.words[c];

      if (s.length = v, f.length <= 9) {
        f.words[0] = 0, f.length = 1;
        return;
      }

      var u = f.words[9];

      for (s.words[s.length++] = u & d, c = 10; c < f.length; c++) {
        var m = f.words[c] | 0;
        f.words[c - 10] = (m & d) << 4 | u >>> 22, u = m;
      }

      u >>>= 22, f.words[c - 10] = u, u === 0 && f.length > 10 ? f.length -= 10 : f.length -= 9;
    }, "split"), Ne.prototype.imulK = a(function (f) {
      f.words[f.length] = 0, f.words[f.length + 1] = 0, f.length += 2;

      for (var s = 0, d = 0; d < f.length; d++) {
        var v = f.words[d] | 0;
        s += v * 977, f.words[d] = s & 67108863, s = v * 64 + (s / 67108864 | 0);
      }

      return f.words[f.length - 1] === 0 && (f.length--, f.words[f.length - 1] === 0 && f.length--), f;
    }, "imulK");

    function Ae() {
      Se.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }

    a(Ae, "P224"), n(Ae, Se);

    function Le() {
      Se.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }

    a(Le, "P192"), n(Le, Se);

    function E() {
      Se.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }

    a(E, "P25519"), n(E, Se), E.prototype.imulK = a(function (f) {
      for (var s = 0, d = 0; d < f.length; d++) {
        var v = (f.words[d] | 0) * 19 + s,
            c = v & 67108863;
        v >>>= 26, f.words[d] = c, s = v;
      }

      return s !== 0 && (f.words[f.length++] = s), f;
    }, "imulK"), i._prime = a(function (f) {
      if (De[f]) return De[f];
      var s;
      if (f === "k256") s = new Ne();else if (f === "p224") s = new Ae();else if (f === "p192") s = new Le();else if (f === "p25519") s = new E();else throw new Error("Unknown prime " + f);
      return De[f] = s, s;
    }, "prime");

    function p(l) {
      if (typeof l == "string") {
        var f = i._prime(l);

        this.m = f.p, this.prime = f;
      } else r(l.gtn(1), "modulus must be greater than 1"), this.m = l, this.prime = null;
    }

    a(p, "Red"), p.prototype._verify1 = a(function (f) {
      r(f.negative === 0, "red works only with positives"), r(f.red, "red works only with red numbers");
    }, "_verify1"), p.prototype._verify2 = a(function (f, s) {
      r((f.negative | s.negative) === 0, "red works only with positives"), r(f.red && f.red === s.red, "red works only with red numbers");
    }, "_verify2"), p.prototype.imod = a(function (f) {
      return this.prime ? this.prime.ireduce(f)._forceRed(this) : (M(f, f.umod(this.m)._forceRed(this)), f);
    }, "imod"), p.prototype.neg = a(function (f) {
      return f.isZero() ? f.clone() : this.m.sub(f)._forceRed(this);
    }, "neg"), p.prototype.add = a(function (f, s) {
      this._verify2(f, s);

      var d = f.add(s);
      return d.cmp(this.m) >= 0 && d.isub(this.m), d._forceRed(this);
    }, "add"), p.prototype.iadd = a(function (f, s) {
      this._verify2(f, s);

      var d = f.iadd(s);
      return d.cmp(this.m) >= 0 && d.isub(this.m), d;
    }, "iadd"), p.prototype.sub = a(function (f, s) {
      this._verify2(f, s);

      var d = f.sub(s);
      return d.cmpn(0) < 0 && d.iadd(this.m), d._forceRed(this);
    }, "sub"), p.prototype.isub = a(function (f, s) {
      this._verify2(f, s);

      var d = f.isub(s);
      return d.cmpn(0) < 0 && d.iadd(this.m), d;
    }, "isub"), p.prototype.shl = a(function (f, s) {
      return this._verify1(f), this.imod(f.ushln(s));
    }, "shl"), p.prototype.imul = a(function (f, s) {
      return this._verify2(f, s), this.imod(f.imul(s));
    }, "imul"), p.prototype.mul = a(function (f, s) {
      return this._verify2(f, s), this.imod(f.mul(s));
    }, "mul"), p.prototype.isqr = a(function (f) {
      return this.imul(f, f.clone());
    }, "isqr"), p.prototype.sqr = a(function (f) {
      return this.mul(f, f);
    }, "sqr"), p.prototype.sqrt = a(function (f) {
      if (f.isZero()) return f.clone();
      var s = this.m.andln(3);

      if (r(s % 2 === 1), s === 3) {
        var d = this.m.add(new i(1)).iushrn(2);
        return this.pow(f, d);
      }

      for (var v = this.m.subn(1), c = 0; !v.isZero() && v.andln(1) === 0;) c++, v.iushrn(1);

      r(!v.isZero());
      var u = new i(1).toRed(this),
          m = u.redNeg(),
          g = this.m.subn(1).iushrn(1),
          o = this.m.bitLength();

      for (o = new i(2 * o * o).toRed(this); this.pow(o, g).cmp(m) !== 0;) o.redIAdd(m);

      for (var y = this.pow(o, v), B = this.pow(f, v.addn(1).iushrn(1)), I = this.pow(f, v), R = c; I.cmp(u) !== 0;) {
        for (var T = I, C = 0; T.cmp(u) !== 0; C++) T = T.redSqr();

        r(C < R);
        var L = this.pow(y, new i(1).iushln(R - C - 1));
        B = B.redMul(L), y = L.redSqr(), I = I.redMul(y), R = C;
      }

      return B;
    }, "sqrt"), p.prototype.invm = a(function (f) {
      var s = f._invmp(this.m);

      return s.negative !== 0 ? (s.negative = 0, this.imod(s).redNeg()) : this.imod(s);
    }, "invm"), p.prototype.pow = a(function (f, s) {
      if (s.isZero()) return new i(1).toRed(this);
      if (s.cmpn(1) === 0) return f.clone();
      var d = 4,
          v = new Array(1 << d);
      v[0] = new i(1).toRed(this), v[1] = f;

      for (var c = 2; c < v.length; c++) v[c] = this.mul(v[c - 1], f);

      var u = v[0],
          m = 0,
          g = 0,
          o = s.bitLength() % 26;

      for (o === 0 && (o = 26), c = s.length - 1; c >= 0; c--) {
        for (var y = s.words[c], B = o - 1; B >= 0; B--) {
          var I = y >> B & 1;

          if (u !== v[0] && (u = this.sqr(u)), I === 0 && m === 0) {
            g = 0;
            continue;
          }

          m <<= 1, m |= I, g++, !(g !== d && (c !== 0 || B !== 0)) && (u = this.mul(u, v[m]), g = 0, m = 0);
        }

        o = 26;
      }

      return u;
    }, "pow"), p.prototype.convertTo = a(function (f) {
      var s = f.umod(this.m);
      return s === f ? s.clone() : s;
    }, "convertTo"), p.prototype.convertFrom = a(function (f) {
      var s = f.clone();
      return s.red = null, s;
    }, "convertFrom"), i.mont = a(function (f) {
      return new w(f);
    }, "mont");

    function w(l) {
      p.call(this, l), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }

    a(w, "Mont"), n(w, p), w.prototype.convertTo = a(function (f) {
      return this.imod(f.ushln(this.shift));
    }, "convertTo"), w.prototype.convertFrom = a(function (f) {
      var s = this.imod(f.mul(this.rinv));
      return s.red = null, s;
    }, "convertFrom"), w.prototype.imul = a(function (f, s) {
      if (f.isZero() || s.isZero()) return f.words[0] = 0, f.length = 1, f;
      var d = f.imul(s),
          v = d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          c = d.isub(v).iushrn(this.shift),
          u = c;
      return c.cmp(this.m) >= 0 ? u = c.isub(this.m) : c.cmpn(0) < 0 && (u = c.iadd(this.m)), u._forceRed(this);
    }, "imul"), w.prototype.mul = a(function (f, s) {
      if (f.isZero() || s.isZero()) return new i(0)._forceRed(this);
      var d = f.mul(s),
          v = d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          c = d.isub(v).iushrn(this.shift),
          u = c;
      return c.cmp(this.m) >= 0 ? u = c.isub(this.m) : c.cmpn(0) < 0 && (u = c.iadd(this.m)), u._forceRed(this);
    }, "mul"), w.prototype.invm = a(function (f) {
      var s = this.imod(f._invmp(this.m).mul(this.r2));
      return s._forceRed(this);
    }, "invm");
  })(typeof ds > "u" || ds, zc);
});
var sa = D((jm, Uc) => {
  "use strict";

  var aa = __buffer$,
      rf = aa.Buffer,
      xt = {},
      Mt;

  for (Mt in aa) !aa.hasOwnProperty(Mt) || Mt === "SlowBuffer" || Mt === "Buffer" || (xt[Mt] = aa[Mt]);

  var ff = xt.Buffer = {};

  for (Mt in rf) !rf.hasOwnProperty(Mt) || Mt === "allocUnsafe" || Mt === "allocUnsafeSlow" || (ff[Mt] = rf[Mt]);

  xt.Buffer.prototype = rf.prototype;
  (!ff.from || ff.from === Uint8Array.from) && (ff.from = function (t, e, r) {
    if (typeof t == "number") throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof t);
    if (t && typeof t.length > "u") throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
    return rf(t, e, r);
  });
  ff.alloc || (ff.alloc = function (t, e, r) {
    if (typeof t != "number") throw new TypeError('The "size" argument must be of type number. Received type ' + typeof t);
    if (t < 0 || t >= 2 * (1 << 30)) throw new RangeError('The value "' + t + '" is invalid for option "size"');
    var n = rf(t);
    return !e || e.length === 0 ? n.fill(0) : typeof r == "string" ? n.fill(e, r) : n.fill(e), n;
  });
  if (!xt.kStringMaxLength) try {
    xt.kStringMaxLength = __Process$.binding("buffer").kStringMaxLength;
  } catch {}
  xt.constants || (xt.constants = {
    MAX_LENGTH: xt.kMaxLength
  }, xt.kStringMaxLength && (xt.constants.MAX_STRING_LENGTH = xt.kStringMaxLength));
  Uc.exports = xt;
});
var oa = D(Hc => {
  "use strict";

  var i4 = Be();

  function St(t) {
    this._reporterState = {
      obj: null,
      path: [],
      options: t || {},
      errors: []
    };
  }

  a(St, "Reporter");
  Hc.Reporter = St;
  St.prototype.isError = a(function (e) {
    return e instanceof nf;
  }, "isError");
  St.prototype.save = a(function () {
    let e = this._reporterState;
    return {
      obj: e.obj,
      pathLen: e.path.length
    };
  }, "save");
  St.prototype.restore = a(function (e) {
    let r = this._reporterState;
    r.obj = e.obj, r.path = r.path.slice(0, e.pathLen);
  }, "restore");
  St.prototype.enterKey = a(function (e) {
    return this._reporterState.path.push(e);
  }, "enterKey");
  St.prototype.exitKey = a(function (e) {
    let r = this._reporterState;
    r.path = r.path.slice(0, e - 1);
  }, "exitKey");
  St.prototype.leaveKey = a(function (e, r, n) {
    let i = this._reporterState;
    this.exitKey(e), i.obj !== null && (i.obj[r] = n);
  }, "leaveKey");
  St.prototype.path = a(function () {
    return this._reporterState.path.join("/");
  }, "path");
  St.prototype.enterObject = a(function () {
    let e = this._reporterState,
        r = e.obj;
    return e.obj = {}, r;
  }, "enterObject");
  St.prototype.leaveObject = a(function (e) {
    let r = this._reporterState,
        n = r.obj;
    return r.obj = e, n;
  }, "leaveObject");
  St.prototype.error = a(function (e) {
    let r,
        n = this._reporterState,
        i = e instanceof nf;
    if (i ? r = e : r = new nf(n.path.map(function (h) {
      return "[" + JSON.stringify(h) + "]";
    }).join(""), e.message || e, e.stack), !n.options.partial) throw r;
    return i || n.errors.push(r), r;
  }, "error");
  St.prototype.wrapResult = a(function (e) {
    let r = this._reporterState;
    return r.options.partial ? {
      result: this.isError(e) ? null : e,
      errors: r.errors
    } : e;
  }, "wrapResult");

  function nf(t, e) {
    this.path = t, this.rethrow(e);
  }

  a(nf, "ReporterError");
  i4(nf, Error);
  nf.prototype.rethrow = a(function (e) {
    if (this.message = e + " at: " + (this.path || "(shallow)"), Error.captureStackTrace && Error.captureStackTrace(this, nf), !this.stack) try {
      throw new Error(this.message);
    } catch (r) {
      this.stack = r.stack;
    }
    return this;
  }, "rethrow");
});
var of = D(ls => {
  "use strict";

  var f4 = Be(),
      ha = oa().Reporter,
      af = sa().Buffer;

  function Et(t, e) {
    if (ha.call(this, e), !af.isBuffer(t)) {
      this.error("Input not Buffer");
      return;
    }

    this.base = t, this.offset = 0, this.length = t.length;
  }

  a(Et, "DecoderBuffer");
  f4(Et, ha);
  ls.DecoderBuffer = Et;
  Et.isDecoderBuffer = a(function (e) {
    return e instanceof Et ? !0 : typeof e == "object" && af.isBuffer(e.base) && e.constructor.name === "DecoderBuffer" && typeof e.offset == "number" && typeof e.length == "number" && typeof e.save == "function" && typeof e.restore == "function" && typeof e.isEmpty == "function" && typeof e.readUInt8 == "function" && typeof e.skip == "function" && typeof e.raw == "function";
  }, "isDecoderBuffer");
  Et.prototype.save = a(function () {
    return {
      offset: this.offset,
      reporter: ha.prototype.save.call(this)
    };
  }, "save");
  Et.prototype.restore = a(function (e) {
    let r = new Et(this.base);
    return r.offset = e.offset, r.length = this.offset, this.offset = e.offset, ha.prototype.restore.call(this, e.reporter), r;
  }, "restore");
  Et.prototype.isEmpty = a(function () {
    return this.offset === this.length;
  }, "isEmpty");
  Et.prototype.readUInt8 = a(function (e) {
    return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(e || "DecoderBuffer overrun");
  }, "readUInt8");
  Et.prototype.skip = a(function (e, r) {
    if (!(this.offset + e <= this.length)) return this.error(r || "DecoderBuffer overrun");
    let n = new Et(this.base);
    return n._reporterState = this._reporterState, n.offset = this.offset, n.length = this.offset + e, this.offset += e, n;
  }, "skip");
  Et.prototype.raw = a(function (e) {
    return this.base.slice(e ? e.offset : this.offset, this.length);
  }, "raw");

  function sf(t, e) {
    if (Array.isArray(t)) this.length = 0, this.value = t.map(function (r) {
      return sf.isEncoderBuffer(r) || (r = new sf(r, e)), this.length += r.length, r;
    }, this);else if (typeof t == "number") {
      if (!(0 <= t && t <= 255)) return e.error("non-byte EncoderBuffer value");
      this.value = t, this.length = 1;
    } else if (typeof t == "string") this.value = t, this.length = af.byteLength(t);else if (af.isBuffer(t)) this.value = t, this.length = t.length;else return e.error("Unsupported type: " + typeof t);
  }

  a(sf, "EncoderBuffer");
  ls.EncoderBuffer = sf;
  sf.isEncoderBuffer = a(function (e) {
    return e instanceof sf ? !0 : typeof e == "object" && e.constructor.name === "EncoderBuffer" && typeof e.length == "number" && typeof e.join == "function";
  }, "isEncoderBuffer");
  sf.prototype.join = a(function (e, r) {
    return e || (e = af.alloc(this.length)), r || (r = 0), this.length === 0 || (Array.isArray(this.value) ? this.value.forEach(function (n) {
      n.join(e, r), r += n.length;
    }) : (typeof this.value == "number" ? e[r] = this.value : typeof this.value == "string" ? e.write(this.value, r) : af.isBuffer(this.value) && this.value.copy(e, r), r += this.length)), e;
  }, "join");
});
var ua = D((Zm, Kc) => {
  "use strict";

  var n4 = oa().Reporter,
      a4 = of().EncoderBuffer,
      s4 = of().DecoderBuffer,
      ft = ht(),
      Fc = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"],
      o4 = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(Fc),
      h4 = ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"];

  function Pe(t, e, r) {
    let n = {};
    this._baseState = n, n.name = r, n.enc = t, n.parent = e || null, n.children = null, n.tag = null, n.args = null, n.reverseArgs = null, n.choice = null, n.optional = !1, n.any = !1, n.obj = !1, n.use = null, n.useDecoder = null, n.key = null, n.default = null, n.explicit = null, n.implicit = null, n.contains = null, n.parent || (n.children = [], this._wrap());
  }

  a(Pe, "Node");
  Kc.exports = Pe;
  var u4 = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
  Pe.prototype.clone = a(function () {
    let e = this._baseState,
        r = {};
    u4.forEach(function (i) {
      r[i] = e[i];
    });
    let n = new this.constructor(r.parent);
    return n._baseState = r, n;
  }, "clone");
  Pe.prototype._wrap = a(function () {
    let e = this._baseState;
    o4.forEach(function (r) {
      this[r] = a(function () {
        let i = new this.constructor(this);
        return e.children.push(i), i[r].apply(i, arguments);
      }, "_wrappedMethod");
    }, this);
  }, "wrap");
  Pe.prototype._init = a(function (e) {
    let r = this._baseState;
    ft(r.parent === null), e.call(this), r.children = r.children.filter(function (n) {
      return n._baseState.parent === this;
    }, this), ft.equal(r.children.length, 1, "Root node can have only one child");
  }, "init");
  Pe.prototype._useArgs = a(function (e) {
    let r = this._baseState,
        n = e.filter(function (i) {
      return i instanceof this.constructor;
    }, this);
    e = e.filter(function (i) {
      return !(i instanceof this.constructor);
    }, this), n.length !== 0 && (ft(r.children === null), r.children = n, n.forEach(function (i) {
      i._baseState.parent = this;
    }, this)), e.length !== 0 && (ft(r.args === null), r.args = e, r.reverseArgs = e.map(function (i) {
      if (typeof i != "object" || i.constructor !== Object) return i;
      let h = {};
      return Object.keys(i).forEach(function (b) {
        b == (b | 0) && (b |= 0);
        let _ = i[b];
        h[_] = b;
      }), h;
    }));
  }, "useArgs");
  h4.forEach(function (t) {
    Pe.prototype[t] = a(function () {
      let r = this._baseState;
      throw new Error(t + " not implemented for encoding: " + r.enc);
    }, "_overrided");
  });
  Fc.forEach(function (t) {
    Pe.prototype[t] = a(function () {
      let r = this._baseState,
          n = Array.prototype.slice.call(arguments);
      return ft(r.tag === null), r.tag = t, this._useArgs(n), this;
    }, "_tagMethod");
  });
  Pe.prototype.use = a(function (e) {
    ft(e);
    let r = this._baseState;
    return ft(r.use === null), r.use = e, this;
  }, "use");
  Pe.prototype.optional = a(function () {
    let e = this._baseState;
    return e.optional = !0, this;
  }, "optional");
  Pe.prototype.def = a(function (e) {
    let r = this._baseState;
    return ft(r.default === null), r.default = e, r.optional = !0, this;
  }, "def");
  Pe.prototype.explicit = a(function (e) {
    let r = this._baseState;
    return ft(r.explicit === null && r.implicit === null), r.explicit = e, this;
  }, "explicit");
  Pe.prototype.implicit = a(function (e) {
    let r = this._baseState;
    return ft(r.explicit === null && r.implicit === null), r.implicit = e, this;
  }, "implicit");
  Pe.prototype.obj = a(function () {
    let e = this._baseState,
        r = Array.prototype.slice.call(arguments);
    return e.obj = !0, r.length !== 0 && this._useArgs(r), this;
  }, "obj");
  Pe.prototype.key = a(function (e) {
    let r = this._baseState;
    return ft(r.key === null), r.key = e, this;
  }, "key");
  Pe.prototype.any = a(function () {
    let e = this._baseState;
    return e.any = !0, this;
  }, "any");
  Pe.prototype.choice = a(function (e) {
    let r = this._baseState;
    return ft(r.choice === null), r.choice = e, this._useArgs(Object.keys(e).map(function (n) {
      return e[n];
    })), this;
  }, "choice");
  Pe.prototype.contains = a(function (e) {
    let r = this._baseState;
    return ft(r.use === null), r.contains = e, this;
  }, "contains");
  Pe.prototype._decode = a(function (e, r) {
    let n = this._baseState;
    if (n.parent === null) return e.wrapResult(n.children[0]._decode(e, r));
    let i = n.default,
        h = !0,
        b = null;

    if (n.key !== null && (b = e.enterKey(n.key)), n.optional) {
      let x = null;

      if (n.explicit !== null ? x = n.explicit : n.implicit !== null ? x = n.implicit : n.tag !== null && (x = n.tag), x === null && !n.any) {
        let M = e.save();

        try {
          n.choice === null ? this._decodeGeneric(n.tag, e, r) : this._decodeChoice(e, r), h = !0;
        } catch {
          h = !1;
        }

        e.restore(M);
      } else if (h = this._peekTag(e, x, n.any), e.isError(h)) return h;
    }

    let _;

    if (n.obj && h && (_ = e.enterObject()), h) {
      if (n.explicit !== null) {
        let M = this._decodeTag(e, n.explicit);

        if (e.isError(M)) return M;
        e = M;
      }

      let x = e.offset;

      if (n.use === null && n.choice === null) {
        let M;
        n.any && (M = e.save());

        let S = this._decodeTag(e, n.implicit !== null ? n.implicit : n.tag, n.any);

        if (e.isError(S)) return S;
        n.any ? i = e.raw(M) : e = S;
      }

      if (r && r.track && n.tag !== null && r.track(e.path(), x, e.length, "tagged"), r && r.track && n.tag !== null && r.track(e.path(), e.offset, e.length, "content"), n.any || (n.choice === null ? i = this._decodeGeneric(n.tag, e, r) : i = this._decodeChoice(e, r)), e.isError(i)) return i;

      if (!n.any && n.choice === null && n.children !== null && n.children.forEach(a(function (S) {
        S._decode(e, r);
      }, "decodeChildren")), n.contains && (n.tag === "octstr" || n.tag === "bitstr")) {
        let M = new s4(i);
        i = this._getUse(n.contains, e._reporterState.obj)._decode(M, r);
      }
    }

    return n.obj && h && (i = e.leaveObject(_)), n.key !== null && (i !== null || h === !0) ? e.leaveKey(b, n.key, i) : b !== null && e.exitKey(b), i;
  }, "decode");
  Pe.prototype._decodeGeneric = a(function (e, r, n) {
    let i = this._baseState;
    return e === "seq" || e === "set" ? null : e === "seqof" || e === "setof" ? this._decodeList(r, e, i.args[0], n) : /str$/.test(e) ? this._decodeStr(r, e, n) : e === "objid" && i.args ? this._decodeObjid(r, i.args[0], i.args[1], n) : e === "objid" ? this._decodeObjid(r, null, null, n) : e === "gentime" || e === "utctime" ? this._decodeTime(r, e, n) : e === "null_" ? this._decodeNull(r, n) : e === "bool" ? this._decodeBool(r, n) : e === "objDesc" ? this._decodeStr(r, e, n) : e === "int" || e === "enum" ? this._decodeInt(r, i.args && i.args[0], n) : i.use !== null ? this._getUse(i.use, r._reporterState.obj)._decode(r, n) : r.error("unknown tag: " + e);
  }, "decodeGeneric");
  Pe.prototype._getUse = a(function (e, r) {
    let n = this._baseState;
    return n.useDecoder = this._use(e, r), ft(n.useDecoder._baseState.parent === null), n.useDecoder = n.useDecoder._baseState.children[0], n.implicit !== n.useDecoder._baseState.implicit && (n.useDecoder = n.useDecoder.clone(), n.useDecoder._baseState.implicit = n.implicit), n.useDecoder;
  }, "_getUse");
  Pe.prototype._decodeChoice = a(function (e, r) {
    let n = this._baseState,
        i = null,
        h = !1;
    return Object.keys(n.choice).some(function (b) {
      let _ = e.save(),
          x = n.choice[b];

      try {
        let M = x._decode(e, r);

        if (e.isError(M)) return !1;
        i = {
          type: b,
          value: M
        }, h = !0;
      } catch {
        return e.restore(_), !1;
      }

      return !0;
    }, this), h ? i : e.error("Choice not matched");
  }, "decodeChoice");
  Pe.prototype._createEncoderBuffer = a(function (e) {
    return new a4(e, this.reporter);
  }, "createEncoderBuffer");
  Pe.prototype._encode = a(function (e, r, n) {
    let i = this._baseState;
    if (i.default !== null && i.default === e) return;

    let h = this._encodeValue(e, r, n);

    if (h !== void 0 && !this._skipDefault(h, r, n)) return h;
  }, "encode");
  Pe.prototype._encodeValue = a(function (e, r, n) {
    let i = this._baseState;
    if (i.parent === null) return i.children[0]._encode(e, r || new n4());
    let h = null;
    if (this.reporter = r, i.optional && e === void 0) if (i.default !== null) e = i.default;else return;

    let b = null,
        _ = !1;

    if (i.any) h = this._createEncoderBuffer(e);else if (i.choice) h = this._encodeChoice(e, r);else if (i.contains) b = this._getUse(i.contains, n)._encode(e, r), _ = !0;else if (i.children) b = i.children.map(function (x) {
      if (x._baseState.tag === "null_") return x._encode(null, r, e);
      if (x._baseState.key === null) return r.error("Child should have a key");
      let M = r.enterKey(x._baseState.key);
      if (typeof e != "object") return r.error("Child expected, but input is not object");

      let S = x._encode(e[x._baseState.key], r, e);

      return r.leaveKey(M), S;
    }, this).filter(function (x) {
      return x;
    }), b = this._createEncoderBuffer(b);else if (i.tag === "seqof" || i.tag === "setof") {
      if (!(i.args && i.args.length === 1)) return r.error("Too many args for : " + i.tag);
      if (!Array.isArray(e)) return r.error("seqof/setof, but data is not Array");
      let x = this.clone();
      x._baseState.implicit = null, b = this._createEncoderBuffer(e.map(function (M) {
        let S = this._baseState;
        return this._getUse(S.args[0], e)._encode(M, r);
      }, x));
    } else i.use !== null ? h = this._getUse(i.use, n)._encode(e, r) : (b = this._encodePrimitive(i.tag, e), _ = !0);

    if (!i.any && i.choice === null) {
      let x = i.implicit !== null ? i.implicit : i.tag,
          M = i.implicit === null ? "universal" : "context";
      x === null ? i.use === null && r.error("Tag could be omitted only for .use()") : i.use === null && (h = this._encodeComposite(x, _, M, b));
    }

    return i.explicit !== null && (h = this._encodeComposite(i.explicit, !1, "context", h)), h;
  }, "encode");
  Pe.prototype._encodeChoice = a(function (e, r) {
    let n = this._baseState,
        i = n.choice[e.type];
    return i || ft(!1, e.type + " not found in " + JSON.stringify(Object.keys(n.choice))), i._encode(e.value, r);
  }, "encodeChoice");
  Pe.prototype._encodePrimitive = a(function (e, r) {
    let n = this._baseState;
    if (/str$/.test(e)) return this._encodeStr(r, e);
    if (e === "objid" && n.args) return this._encodeObjid(r, n.reverseArgs[0], n.args[1]);
    if (e === "objid") return this._encodeObjid(r, null, null);
    if (e === "gentime" || e === "utctime") return this._encodeTime(r, e);
    if (e === "null_") return this._encodeNull();
    if (e === "int" || e === "enum") return this._encodeInt(r, n.args && n.reverseArgs[0]);
    if (e === "bool") return this._encodeBool(r);
    if (e === "objDesc") return this._encodeStr(r, e);
    throw new Error("Unsupported tag: " + e);
  }, "encodePrimitive");
  Pe.prototype._isNumstr = a(function (e) {
    return /^[0-9 ]*$/.test(e);
  }, "isNumstr");
  Pe.prototype._isPrintstr = a(function (e) {
    return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(e);
  }, "isPrintstr");
});
var da = D(Bi => {
  "use strict";

  function jc(t) {
    let e = {};
    return Object.keys(t).forEach(function (r) {
      (r | 0) == r && (r = r | 0);
      let n = t[r];
      e[n] = r;
    }), e;
  }

  a(jc, "reverse");
  Bi.tagClass = {
    0: "universal",
    1: "application",
    2: "context",
    3: "private"
  };
  Bi.tagClassByName = jc(Bi.tagClass);
  Bi.tag = {
    0: "end",
    1: "bool",
    2: "int",
    3: "bitstr",
    4: "octstr",
    5: "null_",
    6: "objid",
    7: "objDesc",
    8: "external",
    9: "real",
    10: "enum",
    11: "embed",
    12: "utf8str",
    13: "relativeOid",
    16: "seq",
    17: "set",
    18: "numstr",
    19: "printstr",
    20: "t61str",
    21: "videostr",
    22: "ia5str",
    23: "utctime",
    24: "gentime",
    25: "graphstr",
    26: "iso646str",
    27: "genstr",
    28: "unistr",
    29: "charstr",
    30: "bmpstr"
  };
  Bi.tagByName = jc(Bi.tag);
});
var ps = D((Xm, Zc) => {
  "use strict";

  var d4 = Be(),
      Er = sa().Buffer,
      Wc = ua(),
      vs = da();

  function Vc(t) {
    this.enc = "der", this.name = t.name, this.entity = t, this.tree = new Yt(), this.tree._init(t.body);
  }

  a(Vc, "DEREncoder");
  Zc.exports = Vc;
  Vc.prototype.encode = a(function (e, r) {
    return this.tree._encode(e, r).join();
  }, "encode");

  function Yt(t) {
    Wc.call(this, "der", t);
  }

  a(Yt, "DERNode");
  d4(Yt, Wc);
  Yt.prototype._encodeComposite = a(function (e, r, n, i) {
    let h = c4(e, r, n, this.reporter);

    if (i.length < 128) {
      let x = Er.alloc(2);
      return x[0] = h, x[1] = i.length, this._createEncoderBuffer([x, i]);
    }

    let b = 1;

    for (let x = i.length; x >= 256; x >>= 8) b++;

    let _ = Er.alloc(1 + 1 + b);

    _[0] = h, _[1] = 128 | b;

    for (let x = 1 + b, M = i.length; M > 0; x--, M >>= 8) _[x] = M & 255;

    return this._createEncoderBuffer([_, i]);
  }, "encodeComposite");
  Yt.prototype._encodeStr = a(function (e, r) {
    if (r === "bitstr") return this._createEncoderBuffer([e.unused | 0, e.data]);

    if (r === "bmpstr") {
      let n = Er.alloc(e.length * 2);

      for (let i = 0; i < e.length; i++) n.writeUInt16BE(e.charCodeAt(i), i * 2);

      return this._createEncoderBuffer(n);
    } else return r === "numstr" ? this._isNumstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : r === "printstr" ? this._isPrintstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(r) ? this._createEncoderBuffer(e) : r === "objDesc" ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: " + r + " unsupported");
  }, "encodeStr");
  Yt.prototype._encodeObjid = a(function (e, r, n) {
    if (typeof e == "string") {
      if (!r) return this.reporter.error("string objid given, but no values map found");
      if (!r.hasOwnProperty(e)) return this.reporter.error("objid not found in values map");
      e = r[e].split(/[\s.]+/g);

      for (let _ = 0; _ < e.length; _++) e[_] |= 0;
    } else if (Array.isArray(e)) {
      e = e.slice();

      for (let _ = 0; _ < e.length; _++) e[_] |= 0;
    }

    if (!Array.isArray(e)) return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(e));

    if (!n) {
      if (e[1] >= 40) return this.reporter.error("Second objid identifier OOB");
      e.splice(0, 2, e[0] * 40 + e[1]);
    }

    let i = 0;

    for (let _ = 0; _ < e.length; _++) {
      let x = e[_];

      for (i++; x >= 128; x >>= 7) i++;
    }

    let h = Er.alloc(i),
        b = h.length - 1;

    for (let _ = e.length - 1; _ >= 0; _--) {
      let x = e[_];

      for (h[b--] = x & 127; (x >>= 7) > 0;) h[b--] = 128 | x & 127;
    }

    return this._createEncoderBuffer(h);
  }, "encodeObjid");

  function At(t) {
    return t < 10 ? "0" + t : t;
  }

  a(At, "two");
  Yt.prototype._encodeTime = a(function (e, r) {
    let n,
        i = new Date(e);
    return r === "gentime" ? n = [At(i.getUTCFullYear()), At(i.getUTCMonth() + 1), At(i.getUTCDate()), At(i.getUTCHours()), At(i.getUTCMinutes()), At(i.getUTCSeconds()), "Z"].join("") : r === "utctime" ? n = [At(i.getUTCFullYear() % 100), At(i.getUTCMonth() + 1), At(i.getUTCDate()), At(i.getUTCHours()), At(i.getUTCMinutes()), At(i.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + r + " time is not supported yet"), this._encodeStr(n, "octstr");
  }, "encodeTime");
  Yt.prototype._encodeNull = a(function () {
    return this._createEncoderBuffer("");
  }, "encodeNull");
  Yt.prototype._encodeInt = a(function (e, r) {
    if (typeof e == "string") {
      if (!r) return this.reporter.error("String int or enum given, but no values map");
      if (!r.hasOwnProperty(e)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(e));
      e = r[e];
    }

    if (typeof e != "number" && !Er.isBuffer(e)) {
      let h = e.toArray();
      !e.sign && h[0] & 128 && h.unshift(0), e = Er.from(h);
    }

    if (Er.isBuffer(e)) {
      let h = e.length;
      e.length === 0 && h++;
      let b = Er.alloc(h);
      return e.copy(b), e.length === 0 && (b[0] = 0), this._createEncoderBuffer(b);
    }

    if (e < 128) return this._createEncoderBuffer(e);
    if (e < 256) return this._createEncoderBuffer([0, e]);
    let n = 1;

    for (let h = e; h >= 256; h >>= 8) n++;

    let i = new Array(n);

    for (let h = i.length - 1; h >= 0; h--) i[h] = e & 255, e >>= 8;

    return i[0] & 128 && i.unshift(0), this._createEncoderBuffer(Er.from(i));
  }, "encodeInt");
  Yt.prototype._encodeBool = a(function (e) {
    return this._createEncoderBuffer(e ? 255 : 0);
  }, "encodeBool");
  Yt.prototype._use = a(function (e, r) {
    return typeof e == "function" && (e = e(r)), e._getEncoder("der").tree;
  }, "use");
  Yt.prototype._skipDefault = a(function (e, r, n) {
    let i = this._baseState,
        h;
    if (i.default === null) return !1;
    let b = e.join();
    if (i.defaultBuffer === void 0 && (i.defaultBuffer = this._encodeValue(i.default, r, n).join()), b.length !== i.defaultBuffer.length) return !1;

    for (h = 0; h < b.length; h++) if (b[h] !== i.defaultBuffer[h]) return !1;

    return !0;
  }, "skipDefault");

  function c4(t, e, r, n) {
    let i;
    if (t === "seqof" ? t = "seq" : t === "setof" && (t = "set"), vs.tagByName.hasOwnProperty(t)) i = vs.tagByName[t];else if (typeof t == "number" && (t | 0) === t) i = t;else return n.error("Unknown tag: " + t);
    return i >= 31 ? n.error("Multi-octet tag encoding unsupported") : (e || (i |= 32), i |= vs.tagClassByName[r || "universal"] << 6, i);
  }

  a(c4, "encodeTag");
});
var Xc = D((Ym, Gc) => {
  "use strict";

  var l4 = Be(),
      bs = ps();

  function ms(t) {
    bs.call(this, t), this.enc = "pem";
  }

  a(ms, "PEMEncoder");
  l4(ms, bs);
  Gc.exports = ms;
  ms.prototype.encode = a(function (e, r) {
    let i = bs.prototype.encode.call(this, e).toString("base64"),
        h = ["-----BEGIN " + r.label + "-----"];

    for (let b = 0; b < i.length; b += 64) h.push(i.slice(b, b + 64));

    return h.push("-----END " + r.label + "-----"), h.join(`
`);
  }, "encode");
});
var gs = D(Jc => {
  "use strict";

  var Yc = Jc;
  Yc.der = ps();
  Yc.pem = Xc();
});

var _s = D(($m, il) => {
  "use strict";

  var v4 = Be(),
      p4 = Ke(),
      $c = of().DecoderBuffer,
      el = ua(),
      Qc = da();

  function tl(t) {
    this.enc = "der", this.name = t.name, this.entity = t, this.tree = new dt(), this.tree._init(t.body);
  }

  a(tl, "DERDecoder");
  il.exports = tl;
  tl.prototype.decode = a(function (e, r) {
    return $c.isDecoderBuffer(e) || (e = new $c(e, r)), this.tree._decode(e, r);
  }, "decode");

  function dt(t) {
    el.call(this, "der", t);
  }

  a(dt, "DERNode");
  v4(dt, el);
  dt.prototype._peekTag = a(function (e, r, n) {
    if (e.isEmpty()) return !1;
    let i = e.save(),
        h = ys(e, 'Failed to peek tag: "' + r + '"');
    return e.isError(h) ? h : (e.restore(i), h.tag === r || h.tagStr === r || h.tagStr + "of" === r || n);
  }, "peekTag");
  dt.prototype._decodeTag = a(function (e, r, n) {
    let i = ys(e, 'Failed to decode tag of "' + r + '"');
    if (e.isError(i)) return i;
    let h = rl(e, i.primitive, 'Failed to get length of "' + r + '"');
    if (e.isError(h)) return h;
    if (!n && i.tag !== r && i.tagStr !== r && i.tagStr + "of" !== r) return e.error('Failed to match tag: "' + r + '"');
    if (i.primitive || h !== null) return e.skip(h, 'Failed to match body of: "' + r + '"');

    let b = e.save(),
        _ = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"');

    return e.isError(_) ? _ : (h = e.offset - b.offset, e.restore(b), e.skip(h, 'Failed to match body of: "' + r + '"'));
  }, "decodeTag");
  dt.prototype._skipUntilEnd = a(function (e, r) {
    for (;;) {
      let n = ys(e, r);
      if (e.isError(n)) return n;
      let i = rl(e, n.primitive, r);
      if (e.isError(i)) return i;
      let h;
      if (n.primitive || i !== null ? h = e.skip(i) : h = this._skipUntilEnd(e, r), e.isError(h)) return h;
      if (n.tagStr === "end") break;
    }
  }, "skipUntilEnd");
  dt.prototype._decodeList = a(function (e, r, n, i) {
    let h = [];

    for (; !e.isEmpty();) {
      let b = this._peekTag(e, "end");

      if (e.isError(b)) return b;

      let _ = n.decode(e, "der", i);

      if (e.isError(_) && b) break;
      h.push(_);
    }

    return h;
  }, "decodeList");
  dt.prototype._decodeStr = a(function (e, r) {
    if (r === "bitstr") {
      let n = e.readUInt8();
      return e.isError(n) ? n : {
        unused: n,
        data: e.raw()
      };
    } else if (r === "bmpstr") {
      let n = e.raw();
      if (n.length % 2 === 1) return e.error("Decoding of string type: bmpstr length mismatch");
      let i = "";

      for (let h = 0; h < n.length / 2; h++) i += String.fromCharCode(n.readUInt16BE(h * 2));

      return i;
    } else if (r === "numstr") {
      let n = e.raw().toString("ascii");
      return this._isNumstr(n) ? n : e.error("Decoding of string type: numstr unsupported characters");
    } else {
      if (r === "octstr") return e.raw();
      if (r === "objDesc") return e.raw();

      if (r === "printstr") {
        let n = e.raw().toString("ascii");
        return this._isPrintstr(n) ? n : e.error("Decoding of string type: printstr unsupported characters");
      } else return /str$/.test(r) ? e.raw().toString() : e.error("Decoding of string type: " + r + " unsupported");
    }
  }, "decodeStr");
  dt.prototype._decodeObjid = a(function (e, r, n) {
    let i,
        h = [],
        b = 0,
        _ = 0;

    for (; !e.isEmpty();) _ = e.readUInt8(), b <<= 7, b |= _ & 127, (_ & 128) === 0 && (h.push(b), b = 0);

    _ & 128 && h.push(b);
    let x = h[0] / 40 | 0,
        M = h[0] % 40;

    if (n ? i = h : i = [x, M].concat(h.slice(1)), r) {
      let S = r[i.join(" ")];
      S === void 0 && (S = r[i.join(".")]), S !== void 0 && (i = S);
    }

    return i;
  }, "decodeObjid");
  dt.prototype._decodeTime = a(function (e, r) {
    let n = e.raw().toString(),
        i,
        h,
        b,
        _,
        x,
        M;

    if (r === "gentime") i = n.slice(0, 4) | 0, h = n.slice(4, 6) | 0, b = n.slice(6, 8) | 0, _ = n.slice(8, 10) | 0, x = n.slice(10, 12) | 0, M = n.slice(12, 14) | 0;else if (r === "utctime") i = n.slice(0, 2) | 0, h = n.slice(2, 4) | 0, b = n.slice(4, 6) | 0, _ = n.slice(6, 8) | 0, x = n.slice(8, 10) | 0, M = n.slice(10, 12) | 0, i < 70 ? i = 2e3 + i : i = 1900 + i;else return e.error("Decoding " + r + " time is not supported yet");
    return Date.UTC(i, h - 1, b, _, x, M, 0);
  }, "decodeTime");
  dt.prototype._decodeNull = a(function () {
    return null;
  }, "decodeNull");
  dt.prototype._decodeBool = a(function (e) {
    let r = e.readUInt8();
    return e.isError(r) ? r : r !== 0;
  }, "decodeBool");
  dt.prototype._decodeInt = a(function (e, r) {
    let n = e.raw(),
        i = new p4(n);
    return r && (i = r[i.toString(10)] || i), i;
  }, "decodeInt");
  dt.prototype._use = a(function (e, r) {
    return typeof e == "function" && (e = e(r)), e._getDecoder("der").tree;
  }, "use");

  function ys(t, e) {
    let r = t.readUInt8(e);
    if (t.isError(r)) return r;
    let n = Qc.tagClass[r >> 6],
        i = (r & 32) === 0;

    if ((r & 31) === 31) {
      let b = r;

      for (r = 0; (b & 128) === 128;) {
        if (b = t.readUInt8(e), t.isError(b)) return b;
        r <<= 7, r |= b & 127;
      }
    } else r &= 31;

    let h = Qc.tag[r];
    return {
      cls: n,
      primitive: i,
      tag: r,
      tagStr: h
    };
  }

  a(ys, "derDecodeTag");

  function rl(t, e, r) {
    let n = t.readUInt8(r);
    if (t.isError(n)) return n;
    if (!e && n === 128) return null;
    if ((n & 128) === 0) return n;
    let i = n & 127;
    if (i > 4) return t.error("length octect is too long");
    n = 0;

    for (let h = 0; h < i; h++) {
      n <<= 8;
      let b = t.readUInt8(r);
      if (t.isError(b)) return b;
      n |= b;
    }

    return n;
  }

  a(rl, "derDecodeLen");
});

var nl = D((Qm, fl) => {
  "use strict";

  var b4 = Be(),
      m4 = sa().Buffer,
      ws = _s();

  function xs(t) {
    ws.call(this, t), this.enc = "pem";
  }

  a(xs, "PEMDecoder");
  b4(xs, ws);
  fl.exports = xs;
  xs.prototype.decode = a(function (e, r) {
    let n = e.toString().split(/[\r\n]+/g),
        i = r.label.toUpperCase(),
        h = /^-----(BEGIN|END) ([^-]+)-----$/,
        b = -1,
        _ = -1;

    for (let S = 0; S < n.length; S++) {
      let A = n[S].match(h);
      if (A !== null && A[2] === i) if (b === -1) {
        if (A[1] !== "BEGIN") break;
        b = S;
      } else {
        if (A[1] !== "END") break;
        _ = S;
        break;
      }
    }

    if (b === -1 || _ === -1) throw new Error("PEM section not found for: " + i);
    let x = n.slice(b + 1, _).join("");
    x.replace(/[^a-z0-9+/=]+/gi, "");
    let M = m4.from(x, "base64");
    return ws.prototype.decode.call(this, M, r);
  }, "decode");
});
var Ms = D(sl => {
  "use strict";

  var al = sl;
  al.der = _s();
  al.pem = nl();
});
var hl = D(ol => {
  "use strict";

  var g4 = gs(),
      y4 = Ms(),
      _4 = Be(),
      w4 = ol;

  w4.define = a(function (e, r) {
    return new hf(e, r);
  }, "define");

  function hf(t, e) {
    this.name = t, this.body = e, this.decoders = {}, this.encoders = {};
  }

  a(hf, "Entity");
  hf.prototype._createNamed = a(function (e) {
    let r = this.name;

    function n(i) {
      this._initNamed(i, r);
    }

    return a(n, "Generated"), _4(n, e), n.prototype._initNamed = a(function (h, b) {
      e.call(this, h, b);
    }, "_initNamed"), new n(this);
  }, "createNamed");
  hf.prototype._getDecoder = a(function (e) {
    return e = e || "der", this.decoders.hasOwnProperty(e) || (this.decoders[e] = this._createNamed(y4[e])), this.decoders[e];
  }, "_getDecoder");
  hf.prototype.decode = a(function (e, r, n) {
    return this._getDecoder(r).decode(e, n);
  }, "decode");
  hf.prototype._getEncoder = a(function (e) {
    return e = e || "der", this.encoders.hasOwnProperty(e) || (this.encoders[e] = this._createNamed(g4[e])), this.encoders[e];
  }, "_getEncoder");
  hf.prototype.encode = a(function (e, r, n) {
    return this._getEncoder(r).encode(e, n);
  }, "encode");
});
var dl = D(ul => {
  "use strict";

  var ca = ul;
  ca.Reporter = oa().Reporter;
  ca.DecoderBuffer = of().DecoderBuffer;
  ca.EncoderBuffer = of().EncoderBuffer;
  ca.Node = ua();
});
var vl = D(ll => {
  "use strict";

  var cl = ll;
  cl._reverse = a(function (e) {
    let r = {};
    return Object.keys(e).forEach(function (n) {
      (n | 0) == n && (n = n | 0);
      let i = e[n];
      r[i] = n;
    }), r;
  }, "reverse");
  cl.der = da();
});
var Ss = D(pl => {
  "use strict";

  var uf = pl;
  uf.bignum = Ke();
  uf.define = hl().define;
  uf.base = dl();
  uf.constants = vl();
  uf.decoders = Ms();
  uf.encoders = gs();
});
var yl = D((n7, gl) => {
  "use strict";

  var Jt = Ss(),
      bl = Jt.define("Time", function () {
    this.choice({
      utcTime: this.utctime(),
      generalTime: this.gentime()
    });
  }),
      x4 = Jt.define("AttributeTypeValue", function () {
    this.seq().obj(this.key("type").objid(), this.key("value").any());
  }),
      Es = Jt.define("AlgorithmIdentifier", function () {
    this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional(), this.key("curve").objid().optional());
  }),
      M4 = Jt.define("SubjectPublicKeyInfo", function () {
    this.seq().obj(this.key("algorithm").use(Es), this.key("subjectPublicKey").bitstr());
  }),
      S4 = Jt.define("RelativeDistinguishedName", function () {
    this.setof(x4);
  }),
      E4 = Jt.define("RDNSequence", function () {
    this.seqof(S4);
  }),
      ml = Jt.define("Name", function () {
    this.choice({
      rdnSequence: this.use(E4)
    });
  }),
      A4 = Jt.define("Validity", function () {
    this.seq().obj(this.key("notBefore").use(bl), this.key("notAfter").use(bl));
  }),
      q4 = Jt.define("Extension", function () {
    this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(!1), this.key("extnValue").octstr());
  }),
      B4 = Jt.define("TBSCertificate", function () {
    this.seq().obj(this.key("version").explicit(0).int().optional(), this.key("serialNumber").int(), this.key("signature").use(Es), this.key("issuer").use(ml), this.key("validity").use(A4), this.key("subject").use(ml), this.key("subjectPublicKeyInfo").use(M4), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(q4).optional());
  }),
      R4 = Jt.define("X509Certificate", function () {
    this.seq().obj(this.key("tbsCertificate").use(B4), this.key("signatureAlgorithm").use(Es), this.key("signatureValue").bitstr());
  });
  gl.exports = R4;
});
var wl = D(Qt => {
  "use strict";

  var $t = Ss();
  Qt.certificate = yl();
  var I4 = $t.define("RSAPrivateKey", function () {
    this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int());
  });
  Qt.RSAPrivateKey = I4;
  var k4 = $t.define("RSAPublicKey", function () {
    this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int());
  });
  Qt.RSAPublicKey = k4;
  var D4 = $t.define("SubjectPublicKeyInfo", function () {
    this.seq().obj(this.key("algorithm").use(_l), this.key("subjectPublicKey").bitstr());
  });
  Qt.PublicKey = D4;

  var _l = $t.define("AlgorithmIdentifier", function () {
    this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional());
  }),
      P4 = $t.define("PrivateKeyInfo", function () {
    this.seq().obj(this.key("version").int(), this.key("algorithm").use(_l), this.key("subjectPrivateKey").octstr());
  });

  Qt.PrivateKey = P4;
  var T4 = $t.define("EncryptedPrivateKeyInfo", function () {
    this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr());
  });
  Qt.EncryptedPrivateKey = T4;
  var C4 = $t.define("DSAPrivateKey", function () {
    this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int());
  });
  Qt.DSAPrivateKey = C4;
  Qt.DSAparam = $t.define("DSAparam", function () {
    this.int();
  });
  var N4 = $t.define("ECPrivateKey", function () {
    this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(L4), this.key("publicKey").optional().explicit(1).bitstr());
  });
  Qt.ECPrivateKey = N4;
  var L4 = $t.define("ECParameters", function () {
    this.choice({
      namedCurve: this.objid()
    });
  });
  Qt.signature = $t.define("signature", function () {
    this.seq().obj(this.key("r").int(), this.key("s").int());
  });
});
var xl = D((s7, O4) => {
  O4.exports = {
    "2.16.840.1.101.3.4.1.1": "aes-128-ecb",
    "2.16.840.1.101.3.4.1.2": "aes-128-cbc",
    "2.16.840.1.101.3.4.1.3": "aes-128-ofb",
    "2.16.840.1.101.3.4.1.4": "aes-128-cfb",
    "2.16.840.1.101.3.4.1.21": "aes-192-ecb",
    "2.16.840.1.101.3.4.1.22": "aes-192-cbc",
    "2.16.840.1.101.3.4.1.23": "aes-192-ofb",
    "2.16.840.1.101.3.4.1.24": "aes-192-cfb",
    "2.16.840.1.101.3.4.1.41": "aes-256-ecb",
    "2.16.840.1.101.3.4.1.42": "aes-256-cbc",
    "2.16.840.1.101.3.4.1.43": "aes-256-ofb",
    "2.16.840.1.101.3.4.1.44": "aes-256-cfb"
  };
});
var Sl = D((o7, Ml) => {
  var z4 = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
      U4 = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
      H4 = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
      F4 = Tf(),
      K4 = On(),
      la = qe().Buffer;

  Ml.exports = function (t, e) {
    var r = t.toString(),
        n = r.match(z4),
        i;

    if (n) {
      var b = "aes" + n[1],
          _ = la.from(n[2], "hex"),
          x = la.from(n[3].replace(/[\r\n]/g, ""), "base64"),
          M = F4(e, _.slice(0, 8), parseInt(n[1], 10)).key,
          S = [],
          A = K4.createDecipheriv(b, M, _);

      S.push(A.update(x)), S.push(A.final()), i = la.concat(S);
    } else {
      var h = r.match(H4);
      i = la.from(h[2].replace(/[\r\n]/g, ""), "base64");
    }

    var q = r.match(U4)[1];
    return {
      tag: q,
      data: i
    };
  };
});
var Ff = D((h7, Al) => {
  var ot = wl(),
      j4 = xl(),
      W4 = Sl(),
      V4 = On(),
      Z4 = l0(),
      As = qe().Buffer;
  Al.exports = El;

  function El(t) {
    var e;
    typeof t == "object" && !As.isBuffer(t) && (e = t.passphrase, t = t.key), typeof t == "string" && (t = As.from(t));
    var r = W4(t, e),
        n = r.tag,
        i = r.data,
        h,
        b;

    switch (n) {
      case "CERTIFICATE":
        b = ot.certificate.decode(i, "der").tbsCertificate.subjectPublicKeyInfo;

      case "PUBLIC KEY":
        switch (b || (b = ot.PublicKey.decode(i, "der")), h = b.algorithm.algorithm.join("."), h) {
          case "1.2.840.113549.1.1.1":
            return ot.RSAPublicKey.decode(b.subjectPublicKey.data, "der");

          case "1.2.840.10045.2.1":
            return b.subjectPrivateKey = b.subjectPublicKey, {
              type: "ec",
              data: b
            };

          case "1.2.840.10040.4.1":
            return b.algorithm.params.pub_key = ot.DSAparam.decode(b.subjectPublicKey.data, "der"), {
              type: "dsa",
              data: b.algorithm.params
            };

          default:
            throw new Error("unknown key id " + h);
        }

      case "ENCRYPTED PRIVATE KEY":
        i = ot.EncryptedPrivateKey.decode(i, "der"), i = G4(i, e);

      case "PRIVATE KEY":
        switch (b = ot.PrivateKey.decode(i, "der"), h = b.algorithm.algorithm.join("."), h) {
          case "1.2.840.113549.1.1.1":
            return ot.RSAPrivateKey.decode(b.subjectPrivateKey, "der");

          case "1.2.840.10045.2.1":
            return {
              curve: b.algorithm.curve,
              privateKey: ot.ECPrivateKey.decode(b.subjectPrivateKey, "der").privateKey
            };

          case "1.2.840.10040.4.1":
            return b.algorithm.params.priv_key = ot.DSAparam.decode(b.subjectPrivateKey, "der"), {
              type: "dsa",
              params: b.algorithm.params
            };

          default:
            throw new Error("unknown key id " + h);
        }

      case "RSA PUBLIC KEY":
        return ot.RSAPublicKey.decode(i, "der");

      case "RSA PRIVATE KEY":
        return ot.RSAPrivateKey.decode(i, "der");

      case "DSA PRIVATE KEY":
        return {
          type: "dsa",
          params: ot.DSAPrivateKey.decode(i, "der")
        };

      case "EC PRIVATE KEY":
        return i = ot.ECPrivateKey.decode(i, "der"), {
          curve: i.parameters.value,
          privateKey: i.privateKey
        };

      default:
        throw new Error("unknown key type " + n);
    }
  }

  a(El, "parseKeys");
  El.signature = ot.signature;

  function G4(t, e) {
    var r = t.algorithm.decrypt.kde.kdeparams.salt,
        n = parseInt(t.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
        i = j4[t.algorithm.decrypt.cipher.algo.join(".")],
        h = t.algorithm.decrypt.cipher.iv,
        b = t.subjectPrivateKey,
        _ = parseInt(i.split("-")[1], 10) / 8,
        x = Z4.pbkdf2Sync(e, r, n, _, "sha1"),
        M = V4.createDecipheriv(i, x, h),
        S = [];

    return S.push(M.update(b)), S.push(M.final()), As.concat(S);
  }

  a(G4, "decrypt");
});
var qs = D((u7, X4) => {
  X4.exports = {
    "1.3.132.0.10": "secp256k1",
    "1.3.132.0.33": "p224",
    "1.2.840.10045.3.1.1": "p192",
    "1.2.840.10045.3.1.7": "p256",
    "1.3.132.0.34": "p384",
    "1.3.132.0.35": "p521"
  };
});
var Rl = D((d7, pa) => {
  var it = qe().Buffer,
      Ri = i0(),
      Y4 = Fn(),
      J4 = na().ec,
      va = cs(),
      $4 = Ff(),
      Q4 = qs();

  function e8(t, e, r, n, i) {
    var h = $4(e);

    if (h.curve) {
      if (n !== "ecdsa" && n !== "ecdsa/rsa") throw new Error("wrong private key type");
      return t8(t, h);
    } else if (h.type === "dsa") {
      if (n !== "dsa") throw new Error("wrong private key type");
      return r8(t, h, r);
    } else if (n !== "rsa" && n !== "ecdsa/rsa") throw new Error("wrong private key type");

    t = it.concat([i, t]);

    for (var b = h.modulus.byteLength(), _ = [0, 1]; t.length + _.length + 1 < b;) _.push(255);

    _.push(0);

    for (var x = -1; ++x < t.length;) _.push(t[x]);

    var M = Y4(_, h);
    return M;
  }

  a(e8, "sign");

  function t8(t, e) {
    var r = Q4[e.curve.join(".")];
    if (!r) throw new Error("unknown curve " + e.curve.join("."));
    var n = new J4(r),
        i = n.keyFromPrivate(e.privateKey),
        h = i.sign(t);
    return it.from(h.toDER());
  }

  a(t8, "ecSign");

  function r8(t, e, r) {
    for (var n = e.params.priv_key, i = e.params.p, h = e.params.q, b = e.params.g, _ = new va(0), x, M = Bs(t, h).mod(h), S = !1, A = ql(n, h, t, r); S === !1;) x = Bl(h, A, r), _ = n8(b, x, i, h), S = x.invm(h).imul(M.add(n.mul(_))).mod(h), S.cmpn(0) === 0 && (S = !1, _ = new va(0));

    return i8(_, S);
  }

  a(r8, "dsaSign");

  function i8(t, e) {
    t = t.toArray(), e = e.toArray(), t[0] & 128 && (t = [0].concat(t)), e[0] & 128 && (e = [0].concat(e));
    var r = t.length + e.length + 4,
        n = [48, r, 2, t.length];
    return n = n.concat(t, [2, e.length], e), it.from(n);
  }

  a(i8, "toDER");

  function ql(t, e, r, n) {
    if (t = it.from(t.toArray()), t.length < e.byteLength()) {
      var i = it.alloc(e.byteLength() - t.length);
      t = it.concat([i, t]);
    }

    var h = r.length,
        b = f8(r, e),
        _ = it.alloc(h);

    _.fill(1);

    var x = it.alloc(h);
    return x = Ri(n, x).update(_).update(it.from([0])).update(t).update(b).digest(), _ = Ri(n, x).update(_).digest(), x = Ri(n, x).update(_).update(it.from([1])).update(t).update(b).digest(), _ = Ri(n, x).update(_).digest(), {
      k: x,
      v: _
    };
  }

  a(ql, "getKey");

  function Bs(t, e) {
    var r = new va(t),
        n = (t.length << 3) - e.bitLength();
    return n > 0 && r.ishrn(n), r;
  }

  a(Bs, "bits2int");

  function f8(t, e) {
    t = Bs(t, e), t = t.mod(e);
    var r = it.from(t.toArray());

    if (r.length < e.byteLength()) {
      var n = it.alloc(e.byteLength() - r.length);
      r = it.concat([n, r]);
    }

    return r;
  }

  a(f8, "bits2octets");

  function Bl(t, e, r) {
    var n, i;

    do {
      for (n = it.alloc(0); n.length * 8 < t.bitLength();) e.v = Ri(r, e.k).update(e.v).digest(), n = it.concat([n, e.v]);

      i = Bs(n, t), e.k = Ri(r, e.k).update(e.v).update(it.from([0])).digest(), e.v = Ri(r, e.k).update(e.v).digest();
    } while (i.cmp(t) !== -1);

    return i;
  }

  a(Bl, "makeKey");

  function n8(t, e, r, n) {
    return t.toRed(va.mont(r)).redPow(e).fromRed().mod(n);
  }

  a(n8, "makeR");
  pa.exports = e8;
  pa.exports.getKey = ql;
  pa.exports.makeKey = Bl;
});
var Pl = D((c7, Dl) => {
  var Rs = qe().Buffer,
      Kf = cs(),
      a8 = na().ec,
      kl = Ff(),
      s8 = qs();

  function o8(t, e, r, n, i) {
    var h = kl(r);

    if (h.type === "ec") {
      if (n !== "ecdsa" && n !== "ecdsa/rsa") throw new Error("wrong public key type");
      return h8(t, e, h);
    } else if (h.type === "dsa") {
      if (n !== "dsa") throw new Error("wrong public key type");
      return u8(t, e, h);
    } else if (n !== "rsa" && n !== "ecdsa/rsa") throw new Error("wrong public key type");

    e = Rs.concat([i, e]);

    for (var b = h.modulus.byteLength(), _ = [1], x = 0; e.length + _.length + 2 < b;) _.push(255), x++;

    _.push(0);

    for (var M = -1; ++M < e.length;) _.push(e[M]);

    _ = Rs.from(_);
    var S = Kf.mont(h.modulus);
    t = new Kf(t).toRed(S), t = t.redPow(new Kf(h.publicExponent)), t = Rs.from(t.fromRed().toArray());
    var A = x < 8 ? 1 : 0;

    for (b = Math.min(t.length, _.length), t.length !== _.length && (A = 1), M = -1; ++M < b;) A |= t[M] ^ _[M];

    return A === 0;
  }

  a(o8, "verify");

  function h8(t, e, r) {
    var n = s8[r.data.algorithm.curve.join(".")];
    if (!n) throw new Error("unknown curve " + r.data.algorithm.curve.join("."));
    var i = new a8(n),
        h = r.data.subjectPrivateKey.data;
    return i.verify(e, t, h);
  }

  a(h8, "ecVerify");

  function u8(t, e, r) {
    var n = r.data.p,
        i = r.data.q,
        h = r.data.g,
        b = r.data.pub_key,
        _ = kl.signature.decode(t, "der"),
        x = _.s,
        M = _.r;

    Il(x, i), Il(M, i);
    var S = Kf.mont(n),
        A = x.invm(i),
        q = h.toRed(S).redPow(new Kf(e).mul(A).mod(i)).fromRed().mul(b.toRed(S).redPow(M.mul(A).mod(i)).fromRed()).mod(n).mod(i);
    return q.cmp(M) === 0;
  }

  a(u8, "dsaVerify");

  function Il(t, e) {
    if (t.cmpn(0) <= 0) throw new Error("invalid sig");
    if (t.cmp(e) >= e) throw new Error("invalid sig");
  }

  a(Il, "checkValue");
  Dl.exports = o8;
});
var zl = D((l7, Ol) => {
  var ba = qe().Buffer,
      Nl = Li(),
      ma = Xa(),
      Ll = Be(),
      d8 = Rl(),
      c8 = Pl(),
      Ii = f0();
  Object.keys(Ii).forEach(function (t) {
    Ii[t].id = ba.from(Ii[t].id, "hex"), Ii[t.toLowerCase()] = Ii[t];
  });

  function jf(t) {
    ma.Writable.call(this);
    var e = Ii[t];
    if (!e) throw new Error("Unknown message digest");
    this._hashType = e.hash, this._hash = Nl(e.hash), this._tag = e.id, this._signType = e.sign;
  }

  a(jf, "Sign");
  Ll(jf, ma.Writable);
  jf.prototype._write = a(function (e, r, n) {
    this._hash.update(e), n();
  }, "_write");
  jf.prototype.update = a(function (e, r) {
    return typeof e == "string" && (e = ba.from(e, r)), this._hash.update(e), this;
  }, "update");
  jf.prototype.sign = a(function (e, r) {
    this.end();

    var n = this._hash.digest(),
        i = d8(n, e, this._hashType, this._signType, this._tag);

    return r ? i.toString(r) : i;
  }, "signMethod");

  function Wf(t) {
    ma.Writable.call(this);
    var e = Ii[t];
    if (!e) throw new Error("Unknown message digest");
    this._hash = Nl(e.hash), this._tag = e.id, this._signType = e.sign;
  }

  a(Wf, "Verify");
  Ll(Wf, ma.Writable);
  Wf.prototype._write = a(function (e, r, n) {
    this._hash.update(e), n();
  }, "_write");
  Wf.prototype.update = a(function (e, r) {
    return typeof e == "string" && (e = ba.from(e, r)), this._hash.update(e), this;
  }, "update");
  Wf.prototype.verify = a(function (e, r, n) {
    typeof r == "string" && (r = ba.from(r, n)), this.end();

    var i = this._hash.digest();

    return c8(r, i, e, this._signType, this._tag);
  }, "verifyMethod");

  function Tl(t) {
    return new jf(t);
  }

  a(Tl, "createSign");

  function Cl(t) {
    return new Wf(t);
  }

  a(Cl, "createVerify");
  Ol.exports = {
    Sign: Tl,
    Verify: Cl,
    createSign: Tl,
    createVerify: Cl
  };
});
var Hl = D((v7, Ul) => {
  var l8 = na(),
      v8 = Ke();
  Ul.exports = a(function (e) {
    return new ki(e);
  }, "createECDH");
  var ct = {
    secp256k1: {
      name: "secp256k1",
      byteLength: 32
    },
    secp224r1: {
      name: "p224",
      byteLength: 28
    },
    prime256v1: {
      name: "p256",
      byteLength: 32
    },
    prime192v1: {
      name: "p192",
      byteLength: 24
    },
    ed25519: {
      name: "ed25519",
      byteLength: 32
    },
    secp384r1: {
      name: "p384",
      byteLength: 48
    },
    secp521r1: {
      name: "p521",
      byteLength: 66
    }
  };
  ct.p224 = ct.secp224r1;
  ct.p256 = ct.secp256r1 = ct.prime256v1;
  ct.p192 = ct.secp192r1 = ct.prime192v1;
  ct.p384 = ct.secp384r1;
  ct.p521 = ct.secp521r1;

  function ki(t) {
    this.curveType = ct[t], this.curveType || (this.curveType = {
      name: t
    }), this.curve = new l8.ec(this.curveType.name), this.keys = void 0;
  }

  a(ki, "ECDH");

  ki.prototype.generateKeys = function (t, e) {
    return this.keys = this.curve.genKeyPair(), this.getPublicKey(t, e);
  };

  ki.prototype.computeSecret = function (t, e, r) {
    e = e || "utf8", __Buffer$.isBuffer(t) || (t = new __Buffer$(t, e));
    var n = this.curve.keyFromPublic(t).getPublic(),
        i = n.mul(this.keys.getPrivate()).getX();
    return Is(i, r, this.curveType.byteLength);
  };

  ki.prototype.getPublicKey = function (t, e) {
    var r = this.keys.getPublic(e === "compressed", !0);
    return e === "hybrid" && (r[r.length - 1] % 2 ? r[0] = 7 : r[0] = 6), Is(r, t);
  };

  ki.prototype.getPrivateKey = function (t) {
    return Is(this.keys.getPrivate(), t);
  };

  ki.prototype.setPublicKey = function (t, e) {
    return e = e || "utf8", __Buffer$.isBuffer(t) || (t = new __Buffer$(t, e)), this.keys._importPublic(t), this;
  };

  ki.prototype.setPrivateKey = function (t, e) {
    e = e || "utf8", __Buffer$.isBuffer(t) || (t = new __Buffer$(t, e));
    var r = new v8(t);
    return r = r.toString(16), this.keys = this.curve.genKeyPair(), this.keys._importPrivate(r), this;
  };

  function Is(t, e, r) {
    Array.isArray(t) || (t = t.toArray());
    var n = new __Buffer$(t);

    if (r && n.length < r) {
      var i = new __Buffer$(r - n.length);
      i.fill(0), n = __Buffer$.concat([i, n]);
    }

    return e ? n.toString(e) : n;
  }

  a(Is, "formatReturnValue");
});
var Ds = D((p7, Fl) => {
  var p8 = Li(),
      ks = qe().Buffer;

  Fl.exports = function (t, e) {
    for (var r = ks.alloc(0), n = 0, i; r.length < e;) i = b8(n++), r = ks.concat([r, p8("sha1").update(t).update(i).digest()]);

    return r.slice(0, e);
  };

  function b8(t) {
    var e = ks.allocUnsafe(4);
    return e.writeUInt32BE(t, 0), e;
  }

  a(b8, "i2ops");
});
var Ps = D((b7, Kl) => {
  Kl.exports = a(function (e, r) {
    for (var n = e.length, i = -1; ++i < n;) e[i] ^= r[i];

    return e;
  }, "xor");
});
var Ts = D((m7, Wl) => {
  var jl = Ke(),
      m8 = qe().Buffer;

  function g8(t, e) {
    return m8.from(t.toRed(jl.mont(e.modulus)).redPow(new jl(e.publicExponent)).fromRed().toArray());
  }

  a(g8, "withPublic");
  Wl.exports = g8;
});
var Xl = D((g7, Gl) => {
  var y8 = Ff(),
      Cs = ni(),
      _8 = Li(),
      Vl = Ds(),
      Zl = Ps(),
      Ns = Ke(),
      w8 = Ts(),
      x8 = Fn(),
      er = qe().Buffer;

  Gl.exports = a(function (e, r, n) {
    var i;
    e.padding ? i = e.padding : n ? i = 1 : i = 4;
    var h = y8(e),
        b;
    if (i === 4) b = M8(h, r);else if (i === 1) b = S8(h, r, n);else if (i === 3) {
      if (b = new Ns(r), b.cmp(h.modulus) >= 0) throw new Error("data too long for modulus");
    } else throw new Error("unknown padding");
    return n ? x8(b, h) : w8(b, h);
  }, "publicEncrypt");

  function M8(t, e) {
    var r = t.modulus.byteLength(),
        n = e.length,
        i = _8("sha1").update(er.alloc(0)).digest(),
        h = i.length,
        b = 2 * h;

    if (n > r - b - 2) throw new Error("message too long");

    var _ = er.alloc(r - n - b - 2),
        x = r - h - 1,
        M = Cs(h),
        S = Zl(er.concat([i, _, er.alloc(1, 1), e], x), Vl(M, x)),
        A = Zl(M, Vl(S, h));

    return new Ns(er.concat([er.alloc(1), A, S], r));
  }

  a(M8, "oaep");

  function S8(t, e, r) {
    var n = e.length,
        i = t.modulus.byteLength();
    if (n > i - 11) throw new Error("message too long");
    var h;
    return r ? h = er.alloc(i - n - 3, 255) : h = E8(i - n - 3), new Ns(er.concat([er.from([0, r ? 1 : 2]), h, er.alloc(1), e], i));
  }

  a(S8, "pkcs1");

  function E8(t) {
    for (var e = er.allocUnsafe(t), r = 0, n = Cs(t * 2), i = 0, h; r < t;) i === n.length && (n = Cs(t * 2), i = 0), h = n[i++], h && (e[r++] = h);

    return e;
  }

  a(E8, "nonZero");
});
var e1 = D((y7, Ql) => {
  var A8 = Ff(),
      Yl = Ds(),
      Jl = Ps(),
      $l = Ke(),
      q8 = Fn(),
      B8 = Li(),
      R8 = Ts(),
      Vf = qe().Buffer;
  Ql.exports = a(function (e, r, n) {
    var i;
    e.padding ? i = e.padding : n ? i = 1 : i = 4;
    var h = A8(e),
        b = h.modulus.byteLength();
    if (r.length > b || new $l(r).cmp(h.modulus) >= 0) throw new Error("decryption error");

    var _;

    n ? _ = R8(new $l(r), h) : _ = q8(r, h);
    var x = Vf.alloc(b - _.length);
    if (_ = Vf.concat([x, _], b), i === 4) return I8(h, _);
    if (i === 1) return k8(h, _, n);
    if (i === 3) return _;
    throw new Error("unknown padding");
  }, "privateDecrypt");

  function I8(t, e) {
    var r = t.modulus.byteLength(),
        n = B8("sha1").update(Vf.alloc(0)).digest(),
        i = n.length;
    if (e[0] !== 0) throw new Error("decryption error");

    var h = e.slice(1, i + 1),
        b = e.slice(i + 1),
        _ = Jl(h, Yl(b, i)),
        x = Jl(b, Yl(_, r - i - 1));

    if (D8(n, x.slice(0, i))) throw new Error("decryption error");

    for (var M = i; x[M] === 0;) M++;

    if (x[M++] !== 1) throw new Error("decryption error");
    return x.slice(M);
  }

  a(I8, "oaep");

  function k8(t, e, r) {
    for (var n = e.slice(0, 2), i = 2, h = 0; e[i++] !== 0;) if (i >= e.length) {
      h++;
      break;
    }

    var b = e.slice(2, i - 1);
    if ((n.toString("hex") !== "0002" && !r || n.toString("hex") !== "0001" && r) && h++, b.length < 8 && h++, h) throw new Error("decryption error");
    return e.slice(i);
  }

  a(k8, "pkcs1");

  function D8(t, e) {
    t = Vf.from(t), e = Vf.from(e);
    var r = 0,
        n = t.length;
    t.length !== e.length && (r++, n = Math.min(t.length, e.length));

    for (var i = -1; ++i < n;) r += t[i] ^ e[i];

    return r;
  }

  a(D8, "compare");
});
var t1 = D(Di => {
  Di.publicEncrypt = Xl();
  Di.privateDecrypt = e1();
  Di.privateEncrypt = a(function (e, r) {
    return Di.publicEncrypt(e, r, !0);
  }, "privateEncrypt");
  Di.publicDecrypt = a(function (e, r) {
    return Di.privateDecrypt(e, r, !0);
  }, "publicDecrypt");
});
var d1 = D(Zf => {
  "use strict";

  function r1() {
    throw new Error(`secure random number generation not supported by this browser
use chrome, FireFox or Internet Explorer 11`);
  }

  a(r1, "oldBrowser");
  var f1 = qe(),
      i1 = ni(),
      n1 = f1.Buffer,
      a1 = f1.kMaxLength,
      Ls = __global$.crypto || __global$.msCrypto,
      s1 = Math.pow(2, 32) - 1;

  function o1(t, e) {
    if (typeof t != "number" || t !== t) throw new TypeError("offset must be a number");
    if (t > s1 || t < 0) throw new TypeError("offset must be a uint32");
    if (t > a1 || t > e) throw new RangeError("offset out of range");
  }

  a(o1, "assertOffset");

  function h1(t, e, r) {
    if (typeof t != "number" || t !== t) throw new TypeError("size must be a number");
    if (t > s1 || t < 0) throw new TypeError("size must be a uint32");
    if (t + e > r || t > a1) throw new RangeError("buffer too small");
  }

  a(h1, "assertSize");
  Ls && Ls.getRandomValues || !__Process$.browser ? (Zf.randomFill = P8, Zf.randomFillSync = T8) : (Zf.randomFill = r1, Zf.randomFillSync = r1);

  function P8(t, e, r, n) {
    if (!n1.isBuffer(t) && !(t instanceof __global$.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
    if (typeof e == "function") n = e, e = 0, r = t.length;else if (typeof r == "function") n = r, r = t.length - e;else if (typeof n != "function") throw new TypeError('"cb" argument must be a function');
    return o1(e, t.length), h1(r, e, t.length), u1(t, e, r, n);
  }

  a(P8, "randomFill");

  function u1(t, e, r, n) {
    if (__Process$.browser) {
      var i = t.buffer,
          h = new Uint8Array(i, e, r);

      if (Ls.getRandomValues(h), n) {
        __Process$.nextTick(function () {
          n(null, t);
        });

        return;
      }

      return t;
    }

    if (n) {
      i1(r, function (_, x) {
        if (_) return n(_);
        x.copy(t, e), n(null, t);
      });
      return;
    }

    var b = i1(r);
    return b.copy(t, e), t;
  }

  a(u1, "actualFill");

  function T8(t, e, r) {
    if (typeof e > "u" && (e = 0), !n1.isBuffer(t) && !(t instanceof __global$.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
    return o1(e, t.length), r === void 0 && (r = t.length - e), h1(r, e, t.length), u1(t, e, r);
  }

  a(T8, "randomFillSync");
});
var Os = D(Ee => {
  "use strict";

  Ee.randomBytes = Ee.rng = Ee.pseudoRandomBytes = Ee.prng = ni();
  Ee.createHash = Ee.Hash = Li();
  Ee.createHmac = Ee.Hmac = i0();
  var C8 = Rh(),
      N8 = Object.keys(C8),
      L8 = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(N8);

  Ee.getHashes = function () {
    return L8;
  };

  var c1 = l0();
  Ee.pbkdf2 = c1.pbkdf2;
  Ee.pbkdf2Sync = c1.pbkdf2Sync;
  var dr = Ju();
  Ee.Cipher = dr.Cipher;
  Ee.createCipher = dr.createCipher;
  Ee.Cipheriv = dr.Cipheriv;
  Ee.createCipheriv = dr.createCipheriv;
  Ee.Decipher = dr.Decipher;
  Ee.createDecipher = dr.createDecipher;
  Ee.Decipheriv = dr.Decipheriv;
  Ee.createDecipheriv = dr.createDecipheriv;
  Ee.getCiphers = dr.getCiphers;
  Ee.listCiphers = dr.listCiphers;
  var Gf = ud();
  Ee.DiffieHellmanGroup = Gf.DiffieHellmanGroup;
  Ee.createDiffieHellmanGroup = Gf.createDiffieHellmanGroup;
  Ee.getDiffieHellman = Gf.getDiffieHellman;
  Ee.createDiffieHellman = Gf.createDiffieHellman;
  Ee.DiffieHellman = Gf.DiffieHellman;
  var ga = zl();
  Ee.createSign = ga.createSign;
  Ee.Sign = ga.Sign;
  Ee.createVerify = ga.createVerify;
  Ee.Verify = ga.Verify;
  Ee.createECDH = Hl();
  var ya = t1();
  Ee.publicEncrypt = ya.publicEncrypt;
  Ee.privateEncrypt = ya.privateEncrypt;
  Ee.publicDecrypt = ya.publicDecrypt;
  Ee.privateDecrypt = ya.privateDecrypt;
  var l1 = d1();
  Ee.randomFill = l1.randomFill;
  Ee.randomFillSync = l1.randomFillSync;

  Ee.createCredentials = function () {
    throw new Error(["sorry, createCredentials is not implemented yet", "we accept pull requests", "https://github.com/crypto-browserify/crypto-browserify"].join(`
`));
  };

  Ee.constants = {
    DH_CHECK_P_NOT_SAFE_PRIME: 2,
    DH_CHECK_P_NOT_PRIME: 1,
    DH_UNABLE_TO_CHECK_GENERATOR: 4,
    DH_NOT_SUITABLE_GENERATOR: 8,
    NPN_ENABLED: 1,
    ALPN_ENABLED: 1,
    RSA_PKCS1_PADDING: 1,
    RSA_SSLV23_PADDING: 2,
    RSA_NO_PADDING: 3,
    RSA_PKCS1_OAEP_PADDING: 4,
    RSA_X931_PADDING: 5,
    RSA_PKCS1_PSS_PADDING: 6,
    POINT_CONVERSION_COMPRESSED: 2,
    POINT_CONVERSION_UNCOMPRESSED: 4,
    POINT_CONVERSION_HYBRID: 6
  };
});
var v1 = zs(Os()),
    p1 = zs(Os()),
    {
  randomBytes: M7,
  createHash: S7,
  createHmac: E7,
  getHashes: A7,
  pbkdf2: q7,
  pbkdf2Sync: B7,
  Cipher: R7,
  createCipher: I7,
  Cipheriv: k7,
  createCipheriv: D7,
  Decipher: P7,
  createDecipher: T7,
  Decipheriv: C7,
  createDecipheriv: N7,
  getCiphers: L7,
  listCiphers: O7,
  DiffieHellmanGroup: z7,
  createDiffieHellmanGroup: U7,
  getDiffieHellman: H7,
  createDiffieHellman: F7,
  DiffieHellman: K7,
  createSign: j7,
  Sign: W7,
  createVerify: V7,
  Verify: Z7,
  createECDH: G7,
  publicEncrypt: X7,
  privateEncrypt: Y7,
  publicDecrypt: J7,
  privateDecrypt: $7,
  randomFill: Q7,
  randomFillSync: e9,
  createCredentials: t9,
  constants: r9
} = p1,
    {
  default: O8,
  ...z8
} = p1,
    i9 = v1.default ?? O8 ?? z8;
export { R7 as Cipher, k7 as Cipheriv, P7 as Decipher, C7 as Decipheriv, K7 as DiffieHellman, z7 as DiffieHellmanGroup, W7 as Sign, Z7 as Verify, r9 as constants, I7 as createCipher, D7 as createCipheriv, t9 as createCredentials, T7 as createDecipher, N7 as createDecipheriv, F7 as createDiffieHellman, U7 as createDiffieHellmanGroup, G7 as createECDH, S7 as createHash, E7 as createHmac, j7 as createSign, V7 as createVerify, i9 as default, L7 as getCiphers, H7 as getDiffieHellman, A7 as getHashes, O7 as listCiphers, q7 as pbkdf2, B7 as pbkdf2Sync, $7 as privateDecrypt, Y7 as privateEncrypt, J7 as publicDecrypt, X7 as publicEncrypt, M7 as randomBytes, Q7 as randomFill, e9 as randomFillSync };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */