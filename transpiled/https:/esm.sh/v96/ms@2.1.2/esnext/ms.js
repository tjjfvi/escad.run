/* esm.sh - esbuild bundle(ms@2.1.2) esnext production */
var y = Object.create;
var d = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var v = Object.getOwnPropertyNames;
var w = Object.getPrototypeOf,
    g = Object.prototype.hasOwnProperty;

var p = (e, r) => () => (r || e((r = {
  exports: {}
}).exports, r), r.exports);

var M = (e, r, s, t) => {
  if (r && typeof r == "object" || typeof r == "function") for (let a of v(r)) !g.call(e, a) && a !== s && d(e, a, {
    get: () => r[a],
    enumerable: !(t = l(r, a)) || t.enumerable
  });
  return e;
};

var b = (e, r, s) => (s = e != null ? y(w(e)) : {}, M(r || !e || !e.__esModule ? d(s, "default", {
  value: e,
  enumerable: !0
}) : s, e));

var h = p((E, f) => {
  var c = 1e3,
      u = c * 60,
      i = u * 60,
      n = i * 24,
      _ = n * 7,
      k = n * 365.25;

  f.exports = function (e, r) {
    r = r || {};
    var s = typeof e;
    if (s === "string" && e.length > 0) return x(e);
    if (s === "number" && isFinite(e)) return r.long ? A(e) : S(e);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
  };

  function x(e) {
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
            return s * k;

          case "weeks":
          case "week":
          case "w":
            return s * _;

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

  function S(e) {
    var r = Math.abs(e);
    return r >= n ? Math.round(e / n) + "d" : r >= i ? Math.round(e / i) + "h" : r >= u ? Math.round(e / u) + "m" : r >= c ? Math.round(e / c) + "s" : e + "ms";
  }

  function A(e) {
    var r = Math.abs(e);
    return r >= n ? o(e, r, n, "day") : r >= i ? o(e, r, i, "hour") : r >= u ? o(e, r, u, "minute") : r >= c ? o(e, r, c, "second") : e + " ms";
  }

  function o(e, r, s, t) {
    var a = r >= s * 1.5;
    return Math.round(e / s) + " " + t + (a ? "s" : "");
  }
});
var F = b(h()),
    {
  default: m,
  ...L
} = F,
    J = m !== void 0 ? m : L;
export { J as default };