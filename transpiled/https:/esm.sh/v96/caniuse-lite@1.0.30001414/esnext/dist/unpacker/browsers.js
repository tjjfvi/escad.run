/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001414/dist/unpacker/browsers) esnext production */
import __caniuse_lite_data_browsers$ from "/transpiled/https://esm.sh/v96/caniuse-lite@1.0.30001414/esnext/data/browsers.js";
var l = Object.create;
var d = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf,
    m = Object.prototype.hasOwnProperty;

var x = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (r, o) => (typeof require < "u" ? require : r)[o]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var b = (e, r) => () => (r || e((r = {
  exports: {}
}).exports, r), r.exports);

var c = (e, r, o, s) => {
  if (r && typeof r == "object" || typeof r == "function") for (let t of p(r)) !m.call(e, t) && t !== o && d(e, t, {
    get: () => r[t],
    enumerable: !(s = n(r, t)) || s.enumerable
  });
  return e;
};

var w = (e, r, o) => (o = e != null ? l(i(e)) : {}, c(r || !e || !e.__esModule ? d(o, "default", {
  value: e,
  enumerable: !0
}) : o, e));

var _ = b((h, u) => {
  u.exports.browsers = __caniuse_lite_data_browsers$;
});

var a = w(_()),
    {
  browsers: j
} = a,
    {
  default: f,
  ...q
} = a,
    k = f !== void 0 ? f : q;
export { j as browsers, k as default };