/* esm.sh - esbuild bundle(to-fast-properties@2.0.0) esnext production */
var c = Object.create;
var p = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var d = Object.getOwnPropertyNames;
var _ = Object.getPrototypeOf,
    y = Object.prototype.hasOwnProperty;

var m = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var b = (e, t, r, l) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of d(t)) !y.call(e, o) && o !== r && p(e, o, {
    get: () => t[o],
    enumerable: !(l = i(t, o)) || l.enumerable
  });
  return e;
};

var j = (e, t, r) => (r = e != null ? c(_(e)) : {}, b(t || !e || !e.__esModule ? p(r, "default", {
  value: e,
  enumerable: !0
}) : r, e));

var f = m((w, s) => {
  "use strict";

  var n = null;

  function u(e) {
    if (n !== null && typeof n.property) {
      let t = n;
      return n = u.prototype = null, t;
    }

    return n = u.prototype = e ?? Object.create(null), new u();
  }

  u();

  s.exports = function (t) {
    return u(t);
  };
});
var x = j(f()),
    {
  default: a,
  ...F
} = x,
    P = a !== void 0 ? a : F;
export { P as default };