/* esm.sh - esbuild bundle(@babel/compat-data@7.17.10/native-modules) esnext production */
var l = Object.create;
var s = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var c = Object.getOwnPropertyNames;
var _ = Object.getPrototypeOf,
    $ = Object.prototype.hasOwnProperty;

var t = (o, e) => () => (e || o((e = {
  exports: {}
}).exports, e), e.exports);

var x = (o, e, r, f) => {
  if (e && typeof e == "object" || typeof e == "function") for (let a of c(e)) !$.call(o, a) && a !== r && s(o, a, {
    get: () => e[a],
    enumerable: !(f = p(e, a)) || f.enumerable
  });
  return o;
};

var m = (o, e, r) => (r = o != null ? l(_(o)) : {}, x(e || !o || !o.__esModule ? s(r, "default", {
  value: o,
  enumerable: !0
}) : r, o));

var i = t((k, g) => {
  g.exports = {
    "es6.module": {
      chrome: "61",
      and_chr: "61",
      edge: "16",
      firefox: "60",
      and_ff: "60",
      node: "13.2.0",
      opera: "48",
      op_mob: "48",
      safari: "10.1",
      ios: "10.3",
      samsung: "8.2",
      android: "61",
      electron: "2.0",
      ios_saf: "10.3"
    }
  };
});
var d = t((v, n) => {
  n.exports = i();
});
var u = m(d()),
    h = m(d()),
    {
  default: b,
  ...q
} = h,
    w = u.default ?? b ?? q;
export { w as default };