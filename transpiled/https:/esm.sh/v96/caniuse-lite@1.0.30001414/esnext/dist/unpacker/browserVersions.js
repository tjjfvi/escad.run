/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001414/dist/unpacker/browserVersions) esnext production */
import __caniuse_lite_data_browserVersions$ from "/transpiled/https://esm.sh/v96/caniuse-lite@1.0.30001414/esnext/data/browserVersions.js";
var i = Object.create;
var d = Object.defineProperty;
var a = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf,
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

var c = (e, r, o, t) => {
  if (r && typeof r == "object" || typeof r == "function") for (let s of l(r)) !m.call(e, s) && s !== o && d(e, s, {
    get: () => r[s],
    enumerable: !(t = a(r, s)) || t.enumerable
  });
  return e;
};

var w = (e, r, o) => (o = e != null ? i(p(e)) : {}, c(r || !e || !e.__esModule ? d(o, "default", {
  value: e,
  enumerable: !0
}) : o, e));

var u = b((g, n) => {
  n.exports.browserVersions = __caniuse_lite_data_browserVersions$;
});
var f = w(u()),
    {
  browserVersions: h
} = f,
    {
  default: _,
  ...V
} = f,
    j = _ !== void 0 ? _ : V;
export { h as browserVersions, j as default };