/* esm.sh - esbuild bundle(inflight@1.0.6) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v85/node_process.js";
import __once$ from "/transpiled/https://esm.sh/v85/once@1.4.0/esnext/once.js";
import __wrappy$ from "/transpiled/https://esm.sh/v85/wrappy@1.0.2/esnext/wrappy.js";
var m = Object.create;
var o = Object.defineProperty;
var d = Object.getOwnPropertyDescriptor;
var g = Object.getOwnPropertyNames;
var h = Object.getPrototypeOf,
    $ = Object.prototype.hasOwnProperty;

var a = (r, e) => o(r, "name", {
  value: e,
  configurable: !0
}),
    c = (r => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(r, {
  get: (e, n) => (typeof require != "undefined" ? require : e)[n]
}) : r)(function (r) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + r + '" is not supported');
});

var q = (r, e) => () => (e || r((e = {
  exports: {}
}).exports, e), e.exports);

var x = (r, e, n, t) => {
  if (e && typeof e == "object" || typeof e == "function") for (let l of g(e)) !$.call(r, l) && l !== n && o(r, l, {
    get: () => e[l],
    enumerable: !(t = d(e, l)) || t.enumerable
  });
  return r;
};

var p = (r, e, n) => (n = r != null ? m(h(r)) : {}, x(e || !r || !r.__esModule ? o(n, "default", {
  value: r,
  enumerable: !0
}) : n, r));

var s = q((z, i) => {
  var y = __wrappy$,
      u = Object.create(null),
      b = __once$;
  i.exports = y(j);

  function j(r, e) {
    return u[r] ? (u[r].push(e), null) : (u[r] = [e], w(r));
  }

  a(j, "inflight");

  function w(r) {
    return b(a(function e() {
      var n = u[r],
          t = n.length,
          l = E(arguments);

      try {
        for (var f = 0; f < t; f++) n[f].apply(null, l);
      } finally {
        n.length > t ? (n.splice(0, t), __Process$.nextTick(function () {
          e.apply(null, l);
        })) : delete u[r];
      }
    }, "RES"));
  }

  a(w, "makeres");

  function E(r) {
    for (var e = r.length, n = [], t = 0; t < e; t++) n[t] = r[t];

    return n;
  }

  a(E, "slice");
});
var v = p(s()),
    O = p(s()),
    {
  default: R,
  ...S
} = O,
    A = v.default ?? R ?? S;
export { A as default };