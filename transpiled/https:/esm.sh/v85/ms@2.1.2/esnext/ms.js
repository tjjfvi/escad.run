/* esm.sh - esbuild bundle(ms@2.1.2) esnext production */
var v = Object.create;
var f = Object.defineProperty;
var w = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var g = Object.getPrototypeOf,
    M = Object.prototype.hasOwnProperty;

var o = (e, r) => f(e, "name", {
  value: r,
  configurable: !0
});

var b = (e, r) => () => (r || e((r = {
  exports: {}
}).exports, r), r.exports);

var $ = (e, r, s, t) => {
  if (r && typeof r == "object" || typeof r == "function") for (let a of p(r)) !M.call(e, a) && a !== s && f(e, a, {
    get: () => r[a],
    enumerable: !(t = w(r, a)) || t.enumerable
  });
  return e;
};

var h = (e, r, s) => (s = e != null ? v(g(e)) : {}, $(r || !e || !e.__esModule ? f(s, "default", {
  value: e,
  enumerable: !0
}) : s, e));

var m = b((N, y) => {
  var c = 1e3,
      u = c * 60,
      i = u * 60,
      n = i * 24,
      k = n * 7,
      x = n * 365.25;

  y.exports = function (e, r) {
    r = r || {};
    var s = typeof e;
    if (s === "string" && e.length > 0) return S(e);
    if (s === "number" && isFinite(e)) return r.long ? F(e) : A(e);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
  };

  function S(e) {
    if (e = String(e), !(e.length > 100)) {
      var r = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);

      if (!!r) {
        var s = parseFloat(r[1]),
            t = (r[2] || "ms").toLowerCase();

        switch (t) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return s * x;

          case "weeks":
          case "week":
          case "w":
            return s * k;

          case "days":
          case "day":
          case "d":
            return s * n;

          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return s * i;

          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return s * u;

          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return s * c;

          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return s;

          default:
            return;
        }
      }
    }
  }

  o(S, "parse");

  function A(e) {
    var r = Math.abs(e);
    return r >= n ? Math.round(e / n) + "d" : r >= i ? Math.round(e / i) + "h" : r >= u ? Math.round(e / u) + "m" : r >= c ? Math.round(e / c) + "s" : e + "ms";
  }

  o(A, "fmtShort");

  function F(e) {
    var r = Math.abs(e);
    return r >= n ? d(e, r, n, "day") : r >= i ? d(e, r, i, "hour") : r >= u ? d(e, r, u, "minute") : r >= c ? d(e, r, c, "second") : e + " ms";
  }

  o(F, "fmtLong");

  function d(e, r, s, t) {
    var a = r >= s * 1.5;
    return Math.round(e / s) + " " + t + (a ? "s" : "");
  }

  o(d, "plural");
});
var l = h(m()),
    L = h(m()),
    {
  default: C,
  ...E
} = L,
    O = l.default ?? C ?? E;
export { O as default };