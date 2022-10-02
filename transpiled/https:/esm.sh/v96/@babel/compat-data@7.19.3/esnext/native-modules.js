/* esm.sh - esbuild bundle(@babel/compat-data@7.19.3/native-modules) esnext production */
var u = Object.create;
var f = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf,
    c = Object.prototype.hasOwnProperty;

var s = (o, e) => () => (e || o((e = {
  exports: {}
}).exports, e), e.exports);

var x = (o, e, r, a) => {
  if (e && typeof e == "object" || typeof e == "function") for (let d of l(e)) !c.call(o, d) && d !== r && f(o, d, {
    get: () => e[d],
    enumerable: !(a = m(e, d)) || a.enumerable
  });
  return o;
};

var g = (o, e, r) => (r = o != null ? u(p(o)) : {}, x(e || !o || !o.__esModule ? f(r, "default", {
  value: o,
  enumerable: !0
}) : r, o));

var _ = s((k, h) => {
  h.exports = {
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

var t = s((v, n) => {
  n.exports = _();
});
var b = g(t()),
    {
  default: i,
  ...q
} = b,
    w = i !== void 0 ? i : q;
export { w as default };