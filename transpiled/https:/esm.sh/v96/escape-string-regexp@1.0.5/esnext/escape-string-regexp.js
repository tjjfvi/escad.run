/* esm.sh - esbuild bundle(escape-string-regexp@1.0.5) esnext production */
var u = Object.create;
var n = Object.defineProperty;
var d = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var c = Object.getPrototypeOf,
    _ = Object.prototype.hasOwnProperty;

var l = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var m = (e, t, r, a) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of i(t)) !_.call(e, o) && o !== r && n(e, o, {
    get: () => t[o],
    enumerable: !(a = d(t, o)) || a.enumerable
  });
  return e;
};

var g = (e, t, r) => (r = e != null ? u(c(e)) : {}, m(t || !e || !e.__esModule ? n(r, "default", {
  value: e,
  enumerable: !0
}) : r, e));

var p = l((E, f) => {
  "use strict";

  var x = /[|\\{}()[\]^$+*?.]/g;

  f.exports = function (e) {
    if (typeof e != "string") throw new TypeError("Expected a string");
    return e.replace(x, "\\$&");
  };
});
var h = g(p()),
    {
  default: s,
  ...w
} = h,
    $ = s !== void 0 ? s : w;
export { $ as default };