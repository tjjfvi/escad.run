/* esm.sh - esbuild bundle(to-fast-properties@2.0.0) esnext production */
var d = Object.create;
var n = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var y = Object.getOwnPropertyNames;
var $ = Object.getPrototypeOf,
    b = Object.prototype.hasOwnProperty;

var p = (e, t) => n(e, "name", {
  value: t,
  configurable: !0
});

var j = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var x = (e, t, r, f) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of y(t)) !b.call(e, o) && o !== r && n(e, o, {
    get: () => t[o],
    enumerable: !(f = m(t, o)) || f.enumerable
  });
  return e;
};

var a = (e, t, r) => (r = e != null ? d($(e)) : {}, x(t || !e || !e.__esModule ? n(r, "default", {
  value: e,
  enumerable: !0
}) : r, e));

var s = j((g, c) => {
  "use strict";

  var l = null;

  function u(e) {
    if (l !== null && typeof l.property) {
      let t = l;
      return l = u.prototype = null, t;
    }

    return l = u.prototype = e ?? Object.create(null), new u();
  }

  p(u, "FastObject");
  u();
  c.exports = p(function (t) {
    return u(t);
  }, "toFastproperties");
});
var i = a(s()),
    F = a(s()),
    {
  default: O,
  ...w
} = F,
    h = i.default ?? O ?? w;
export { h as default };