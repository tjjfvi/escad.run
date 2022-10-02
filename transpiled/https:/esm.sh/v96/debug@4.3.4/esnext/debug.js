/* esm.sh - esbuild bundle(debug@4.3.4) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v96/node_process.js";
import __ms$ from "/transpiled/https://esm.sh/v96/ms@2.1.2/esnext/ms.js";
var D = Object.create;
var w = Object.defineProperty;
var N = Object.getOwnPropertyDescriptor;
var $ = Object.getOwnPropertyNames;
var L = Object.getPrototypeOf,
    R = Object.prototype.hasOwnProperty;

var q = (t => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(t, {
  get: (r, e) => (typeof require < "u" ? require : r)[e]
}) : t)(function (t) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});

var y = (t, r) => () => (r || t((r = {
  exports: {}
}).exports, r), r.exports);

var J = (t, r, e, c) => {
  if (r && typeof r == "object" || typeof r == "function") for (let l of $(r)) !R.call(t, l) && l !== e && w(t, l, {
    get: () => r[l],
    enumerable: !(c = N(r, l)) || c.enumerable
  });
  return t;
};

var P = (t, r, e) => (e = t != null ? D(L(t)) : {}, J(r || !t || !t.__esModule ? w(e, "default", {
  value: t,
  enumerable: !0
}) : e, t));

var x = y((X, v) => {
  function U(t) {
    e.debug = e, e.default = e, e.coerce = _, e.disable = k, e.enable = l, e.enabled = I, e.humanize = __ms$, e.destroy = j, Object.keys(t).forEach(n => {
      e[n] = t[n];
    }), e.names = [], e.skips = [], e.formatters = {};

    function r(n) {
      let o = 0;

      for (let s = 0; s < n.length; s++) o = (o << 5) - o + n.charCodeAt(s), o |= 0;

      return e.colors[Math.abs(o) % e.colors.length];
    }

    e.selectColor = r;

    function e(n) {
      let o,
          s = null,
          f,
          h;

      function u(...C) {
        if (!u.enabled) return;
        let a = u,
            d = Number(new Date()),
            O = d - (o || d);
        a.diff = O, a.prev = o, a.curr = d, o = d, C[0] = e.coerce(C[0]), typeof C[0] != "string" && C.unshift("%O");
        let F = 0;
        C[0] = C[0].replace(/%([a-zA-Z%])/g, (p, S) => {
          if (p === "%%") return "%";
          F++;
          let b = e.formatters[S];

          if (typeof b == "function") {
            let z = C[F];
            p = b.call(a, z), C.splice(F, 1), F--;
          }

          return p;
        }), e.formatArgs.call(a, C), (a.log || e.log).apply(a, C);
      }

      return u.namespace = n, u.useColors = e.useColors(), u.color = e.selectColor(n), u.extend = c, u.destroy = e.destroy, Object.defineProperty(u, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => s !== null ? s : (f !== e.namespaces && (f = e.namespaces, h = e.enabled(n)), h),
        set: C => {
          s = C;
        }
      }), typeof e.init == "function" && e.init(u), u;
    }

    function c(n, o) {
      let s = e(this.namespace + (typeof o > "u" ? ":" : o) + n);
      return s.log = this.log, s;
    }

    function l(n) {
      e.save(n), e.namespaces = n, e.names = [], e.skips = [];
      let o,
          s = (typeof n == "string" ? n : "").split(/[\s,]+/),
          f = s.length;

      for (o = 0; o < f; o++) !s[o] || (n = s[o].replace(/\*/g, ".*?"), n[0] === "-" ? e.skips.push(new RegExp("^" + n.slice(1) + "$")) : e.names.push(new RegExp("^" + n + "$")));
    }

    function k() {
      let n = [...e.names.map(m), ...e.skips.map(m).map(o => "-" + o)].join(",");
      return e.enable(""), n;
    }

    function I(n) {
      if (n[n.length - 1] === "*") return !0;
      let o, s;

      for (o = 0, s = e.skips.length; o < s; o++) if (e.skips[o].test(n)) return !1;

      for (o = 0, s = e.names.length; o < s; o++) if (e.names[o].test(n)) return !0;

      return !1;
    }

    function m(n) {
      return n.toString().substring(2, n.toString().length - 2).replace(/\.\*\?$/, "*");
    }

    function _(n) {
      return n instanceof Error ? n.stack || n.message : n;
    }

    function j() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }

    return e.enable(e.load()), e;
  }

  v.exports = U;
});
var A = y((i, g) => {
  i.formatArgs = B;
  i.save = G;
  i.load = M;
  i.useColors = Z;
  i.storage = T();

  i.destroy = (() => {
    let t = !1;
    return () => {
      t || (t = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })();

  i.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

  function Z() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }

  function B(t) {
    if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + g.exports.humanize(this.diff), !this.useColors) return;
    let r = "color: " + this.color;
    t.splice(1, 0, r, "color: inherit");
    let e = 0,
        c = 0;
    t[0].replace(/%[a-zA-Z%]/g, l => {
      l !== "%%" && (e++, l === "%c" && (c = e));
    }), t.splice(c, 0, r);
  }

  i.log = console.debug || console.log || (() => {});

  function G(t) {
    try {
      t ? i.storage.setItem("debug", t) : i.storage.removeItem("debug");
    } catch {}
  }

  function M() {
    let t;

    try {
      t = i.storage.getItem("debug");
    } catch {}

    return !t && typeof __Process$ < "u" && "env" in __Process$ && (t = __Process$.env.DEBUG), t;
  }

  function T() {
    try {
      return localStorage;
    } catch {}
  }

  g.exports = x()(i);
  var {
    formatters: W
  } = g.exports;

  W.j = function (t) {
    try {
      return JSON.stringify(t);
    } catch (r) {
      return "[UnexpectedJSONParseError]: " + r.message;
    }
  };
});
var H = P(A()),
    {
  default: E,
  ...K
} = H,
    Y = E !== void 0 ? E : K;
export { Y as default };