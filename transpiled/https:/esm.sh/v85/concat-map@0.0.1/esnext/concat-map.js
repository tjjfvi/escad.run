/* esm.sh - esbuild bundle(concat-map@0.0.1) esnext production */
var s = Object.create;
var p = Object.defineProperty;
var c = Object.getOwnPropertyDescriptor;
var y = Object.getOwnPropertyNames;
var d = Object.getPrototypeOf,
    i = Object.prototype.hasOwnProperty;

var m = (r, t) => () => (t || r((t = {
  exports: {}
}).exports, t), t.exports);

var v = (r, t, e, a) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of y(t)) !i.call(r, o) && o !== e && p(r, o, {
    get: () => t[o],
    enumerable: !(a = c(t, o)) || a.enumerable
  });
  return r;
};

var u = (r, t, e) => (e = r != null ? s(d(r)) : {}, v(t || !r || !r.__esModule ? p(e, "default", {
  value: r,
  enumerable: !0
}) : e, r));

var f = m((j, l) => {
  l.exports = function (r, t) {
    for (var e = [], a = 0; a < r.length; a++) {
      var o = t(r[a], a);
      A(o) ? e.push.apply(e, o) : e.push(o);
    }

    return e;
  };

  var A = Array.isArray || function (r) {
    return Object.prototype.toString.call(r) === "[object Array]";
  };
});
var n = u(f()),
    $ = u(f()),
    {
  default: h,
  ...b
} = $,
    O = n.default ?? h ?? b;
export { O as default };