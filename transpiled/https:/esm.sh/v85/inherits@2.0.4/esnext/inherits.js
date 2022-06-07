/* esm.sh - esbuild bundle(inherits@2.0.4) esnext production */
var c = Object.create;
var i = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var y = Object.getOwnPropertyNames;
var b = Object.getPrototypeOf,
    d = Object.prototype.hasOwnProperty;

var r = (t, e) => i(t, "name", {
  value: e,
  configurable: !0
});

var m = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);

var $ = (t, e, o, f) => {
  if (e && typeof e == "object" || typeof e == "function") for (let n of y(e)) !d.call(t, n) && n !== o && i(t, n, {
    get: () => e[n],
    enumerable: !(f = s(e, n)) || f.enumerable
  });
  return t;
};

var a = (t, e, o) => (o = t != null ? c(b(t)) : {}, $(e || !t || !t.__esModule ? i(o, "default", {
  value: t,
  enumerable: !0
}) : o, t));

var u = m((w, p) => {
  typeof Object.create == "function" ? p.exports = r(function (e, o) {
    o && (e.super_ = o, e.prototype = Object.create(o.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  }, "inherits") : p.exports = r(function (e, o) {
    if (o) {
      e.super_ = o;
      var f = r(function () {}, "TempCtor");
      f.prototype = o.prototype, e.prototype = new f(), e.prototype.constructor = e;
    }
  }, "inherits");
});
var l = a(u()),
    x = a(u()),
    {
  default: h,
  ...j
} = x,
    O = l.default ?? h ?? j;
export { O as default };