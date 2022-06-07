/* esm.sh - esbuild bundle(escape-string-regexp@1.0.5) esnext production */
var u = Object.create;
var p = Object.defineProperty;
var c = Object.getOwnPropertyDescriptor;
var d = Object.getOwnPropertyNames;
var m = Object.getPrototypeOf,
    $ = Object.prototype.hasOwnProperty;

var l = (e, r) => () => (r || e((r = {
  exports: {}
}).exports, r), r.exports);

var g = (e, r, t, f) => {
  if (r && typeof r == "object" || typeof r == "function") for (let o of d(r)) !$.call(e, o) && o !== t && p(e, o, {
    get: () => r[o],
    enumerable: !(f = c(r, o)) || f.enumerable
  });
  return e;
};

var s = (e, r, t) => (t = e != null ? u(m(e)) : {}, g(r || !e || !e.__esModule ? p(t, "default", {
  value: e,
  enumerable: !0
}) : t, e));

var a = l((v, i) => {
  "use strict";

  var x = /[|\\{}()[\]^$+*?.]/g;

  i.exports = function (e) {
    if (typeof e != "string") throw new TypeError("Expected a string");
    return e.replace(x, "\\$&");
  };
});
var n = s(a()),
    h = s(a()),
    {
  default: w,
  ...y
} = h,
    O = n.default ?? w ?? y;
export { O as default };