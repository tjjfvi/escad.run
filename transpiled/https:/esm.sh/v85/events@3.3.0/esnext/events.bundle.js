/* esm.sh - esbuild bundle(events@3.3.0) esnext production */
var P = Object.create;
var d = Object.defineProperty;
var T = Object.getOwnPropertyDescriptor;
var F = Object.getOwnPropertyNames;
var I = Object.getPrototypeOf,
    K = Object.prototype.hasOwnProperty;

var o = (t, e) => d(t, "name", {
  value: e,
  configurable: !0
});

var W = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);

var $ = (t, e, n, r) => {
  if (e && typeof e == "object" || typeof e == "function") for (let i of F(e)) !K.call(t, i) && i !== n && d(t, i, {
    get: () => e[i],
    enumerable: !(r = T(e, i)) || r.enumerable
  });
  return t;
};

var y = (t, e, n) => (n = t != null ? P(I(t)) : {}, $(e || !t || !t.__esModule ? d(n, "default", {
  value: t,
  enumerable: !0
}) : n, t));

var m = W((J, h) => {
  "use strict";

  var c = typeof Reflect == "object" ? Reflect : null,
      g = c && typeof c.apply == "function" ? c.apply : o(function (e, n, r) {
    return Function.prototype.apply.call(e, n, r);
  }, "ReflectApply"),
      v;
  c && typeof c.ownKeys == "function" ? v = c.ownKeys : Object.getOwnPropertySymbols ? v = o(function (e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
  }, "ReflectOwnKeys") : v = o(function (e) {
    return Object.getOwnPropertyNames(e);
  }, "ReflectOwnKeys");

  function S(t) {
    console && console.warn && console.warn(t);
  }

  o(S, "ProcessEmitWarning");
  var w = Number.isNaN || o(function (e) {
    return e !== e;
  }, "NumberIsNaN");

  function f() {
    f.init.call(this);
  }

  o(f, "EventEmitter");
  h.exports = f;
  h.exports.once = q;
  f.EventEmitter = f;
  f.prototype._events = void 0;
  f.prototype._eventsCount = 0;
  f.prototype._maxListeners = void 0;
  var _ = 10;

  function p(t) {
    if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
  }

  o(p, "checkListener");
  Object.defineProperty(f, "defaultMaxListeners", {
    enumerable: !0,
    get: function () {
      return _;
    },
    set: function (t) {
      if (typeof t != "number" || t < 0 || w(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
      _ = t;
    }
  });

  f.init = function () {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  };

  f.prototype.setMaxListeners = o(function (e) {
    if (typeof e != "number" || e < 0 || w(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this;
  }, "setMaxListeners");

  function b(t) {
    return t._maxListeners === void 0 ? f.defaultMaxListeners : t._maxListeners;
  }

  o(b, "_getMaxListeners");
  f.prototype.getMaxListeners = o(function () {
    return b(this);
  }, "getMaxListeners");
  f.prototype.emit = o(function (e) {
    for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);

    var i = e === "error",
        u = this._events;
    if (u !== void 0) i = i && u.error === void 0;else if (!i) return !1;

    if (i) {
      var s;
      if (n.length > 0 && (s = n[0]), s instanceof Error) throw s;
      var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
      throw a.context = s, a;
    }

    var l = u[e];
    if (l === void 0) return !1;
    if (typeof l == "function") g(l, this, n);else for (var L = l.length, A = j(l, L), r = 0; r < L; ++r) g(A[r], this, n);
    return !0;
  }, "emit");

  function E(t, e, n, r) {
    var i, u, s;
    if (p(n), u = t._events, u === void 0 ? (u = t._events = Object.create(null), t._eventsCount = 0) : (u.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n), u = t._events), s = u[e]), s === void 0) s = u[e] = n, ++t._eventsCount;else if (typeof s == "function" ? s = u[e] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), i = b(t), i > 0 && s.length > i && !s.warned) {
      s.warned = !0;
      var a = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = s.length, S(a);
    }
    return t;
  }

  o(E, "_addListener");
  f.prototype.addListener = o(function (e, n) {
    return E(this, e, n, !1);
  }, "addListener");
  f.prototype.on = f.prototype.addListener;
  f.prototype.prependListener = o(function (e, n) {
    return E(this, e, n, !0);
  }, "prependListener");

  function U() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }

  o(U, "onceWrapper");

  function O(t, e, n) {
    var r = {
      fired: !1,
      wrapFn: void 0,
      target: t,
      type: e,
      listener: n
    },
        i = U.bind(r);
    return i.listener = n, r.wrapFn = i, i;
  }

  o(O, "_onceWrap");
  f.prototype.once = o(function (e, n) {
    return p(n), this.on(e, O(this, e, n)), this;
  }, "once");
  f.prototype.prependOnceListener = o(function (e, n) {
    return p(n), this.prependListener(e, O(this, e, n)), this;
  }, "prependOnceListener");
  f.prototype.removeListener = o(function (e, n) {
    var r, i, u, s, a;
    if (p(n), i = this._events, i === void 0) return this;
    if (r = i[e], r === void 0) return this;
    if (r === n || r.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || n));else if (typeof r != "function") {
      for (u = -1, s = r.length - 1; s >= 0; s--) if (r[s] === n || r[s].listener === n) {
        a = r[s].listener, u = s;
        break;
      }

      if (u < 0) return this;
      u === 0 ? r.shift() : k(r, u), r.length === 1 && (i[e] = r[0]), i.removeListener !== void 0 && this.emit("removeListener", e, a || n);
    }
    return this;
  }, "removeListener");
  f.prototype.off = f.prototype.removeListener;
  f.prototype.removeAllListeners = o(function (e) {
    var n, r, i;
    if (r = this._events, r === void 0) return this;
    if (r.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : r[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete r[e]), this;

    if (arguments.length === 0) {
      var u = Object.keys(r),
          s;

      for (i = 0; i < u.length; ++i) s = u[i], s !== "removeListener" && this.removeAllListeners(s);

      return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
    }

    if (n = r[e], typeof n == "function") this.removeListener(e, n);else if (n !== void 0) for (i = n.length - 1; i >= 0; i--) this.removeListener(e, n[i]);
    return this;
  }, "removeAllListeners");

  function x(t, e, n) {
    var r = t._events;
    if (r === void 0) return [];
    var i = r[e];
    return i === void 0 ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? H(i) : j(i, i.length);
  }

  o(x, "_listeners");
  f.prototype.listeners = o(function (e) {
    return x(this, e, !0);
  }, "listeners");
  f.prototype.rawListeners = o(function (e) {
    return x(this, e, !1);
  }, "rawListeners");

  f.listenerCount = function (t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : C.call(t, e);
  };

  f.prototype.listenerCount = C;

  function C(t) {
    var e = this._events;

    if (e !== void 0) {
      var n = e[t];
      if (typeof n == "function") return 1;
      if (n !== void 0) return n.length;
    }

    return 0;
  }

  o(C, "listenerCount");
  f.prototype.eventNames = o(function () {
    return this._eventsCount > 0 ? v(this._events) : [];
  }, "eventNames");

  function j(t, e) {
    for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t[r];

    return n;
  }

  o(j, "arrayClone");

  function k(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];

    t.pop();
  }

  o(k, "spliceOne");

  function H(t) {
    for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];

    return e;
  }

  o(H, "unwrapListeners");

  function q(t, e) {
    return new Promise(function (n, r) {
      function i(s) {
        t.removeListener(e, u), r(s);
      }

      o(i, "errorListener");

      function u() {
        typeof t.removeListener == "function" && t.removeListener("error", i), n([].slice.call(arguments));
      }

      o(u, "resolver"), R(t, e, u, {
        once: !0
      }), e !== "error" && z(t, i, {
        once: !0
      });
    });
  }

  o(q, "once");

  function z(t, e, n) {
    typeof t.on == "function" && R(t, "error", e, n);
  }

  o(z, "addErrorHandlerIfEventEmitter");

  function R(t, e, n, r) {
    if (typeof t.on == "function") r.once ? t.once(e, n) : t.on(e, n);else if (typeof t.addEventListener == "function") t.addEventListener(e, o(function i(u) {
      r.once && t.removeEventListener(e, i), n(u);
    }, "wrapListener"));else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
  }

  o(R, "eventTargetAgnosticAddListener");
});
var N = y(m()),
    M = y(m()),
    {
  EventEmitter: Q,
  init: V,
  listenerCount: X,
  once: Y
} = M,
    {
  default: B,
  ...D
} = M,
    Z = N.default ?? B ?? D;
export { Q as EventEmitter, Z as default, V as init, X as listenerCount, Y as once };