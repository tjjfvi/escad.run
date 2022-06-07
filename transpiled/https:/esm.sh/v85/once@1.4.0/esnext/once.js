/* esm.sh - esbuild bundle(once@1.4.0) esnext production */
import __wrappy$ from "/transpiled/https://esm.sh/v85/wrappy@1.0.2/esnext/wrappy.js";
var v = Object.create;
var c = Object.defineProperty;
var h = Object.getOwnPropertyDescriptor;
var y = Object.getOwnPropertyNames;
var b = Object.getPrototypeOf,
    w = Object.prototype.hasOwnProperty;

var o = (r, e) => c(r, "name", {
  value: e,
  configurable: !0
}),
    g = (r => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(r, {
  get: (e, t) => (typeof require != "undefined" ? require : e)[t]
}) : r)(function (r) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + r + '" is not supported');
});

var x = (r, e) => () => (e || r((e = {
  exports: {}
}).exports, e), e.exports);

var $ = (r, e, t, i) => {
  if (e && typeof e == "object" || typeof e == "function") for (let n of y(e)) !w.call(r, n) && n !== t && c(r, n, {
    get: () => e[n],
    enumerable: !(i = h(e, n)) || i.enumerable
  });
  return r;
};

var f = (r, e, t) => (t = r != null ? v(b(r)) : {}, $(e || !r || !r.__esModule ? c(t, "default", {
  value: r,
  enumerable: !0
}) : t, r));

var l = x((O, a) => {
  var p = __wrappy$;
  a.exports = p(u);
  a.exports.strict = p(s);
  u.proto = u(function () {
    Object.defineProperty(Function.prototype, "once", {
      value: function () {
        return u(this);
      },
      configurable: !0
    }), Object.defineProperty(Function.prototype, "onceStrict", {
      value: function () {
        return s(this);
      },
      configurable: !0
    });
  });

  function u(r) {
    var e = o(function () {
      return e.called ? e.value : (e.called = !0, e.value = r.apply(this, arguments));
    }, "f");
    return e.called = !1, e;
  }

  o(u, "once");

  function s(r) {
    var e = o(function () {
      if (e.called) throw new Error(e.onceError);
      return e.called = !0, e.value = r.apply(this, arguments);
    }, "f"),
        t = r.name || "Function wrapped with `once`";
    return e.onceError = t + " shouldn't be called more than once", e.called = !1, e;
  }

  o(s, "onceStrict");
});
var d = f(l()),
    m = f(l()),
    {
  strict: P
} = m,
    {
  default: E,
  ...F
} = m,
    S = d.default ?? E ?? F;
export { S as default, P as strict };