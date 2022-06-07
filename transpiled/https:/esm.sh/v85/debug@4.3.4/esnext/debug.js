/* esm.sh - esbuild bundle(debug@4.3.4) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v85/node_process.js";
import __ms$ from "/transpiled/https://esm.sh/v85/ms@2.1.2/esnext/ms.js";
var L = Object.create;
var h = Object.defineProperty;
var R = Object.getOwnPropertyDescriptor;
var q = Object.getOwnPropertyNames;
var J = Object.getPrototypeOf,
    P = Object.prototype.hasOwnProperty;

var i = (t, r) => h(t, "name", {
  value: r,
  configurable: !0
}),
    U = (t => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(t, {
  get: (r, e) => (typeof require != "undefined" ? require : r)[e]
}) : t)(function (t) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});

var x = (t, r) => () => (r || t((r = {
  exports: {}
}).exports, r), r.exports);

var Z = (t, r, e, a) => {
  if (r && typeof r == "object" || typeof r == "function") for (let u of q(r)) !P.call(t, u) && u !== e && h(t, u, {
    get: () => r[u],
    enumerable: !(a = R(r, u)) || a.enumerable
  });
  return t;
};

var A = (t, r, e) => (e = t != null ? L(J(t)) : {}, Z(r || !t || !t.__esModule ? h(e, "default", {
  value: t,
  enumerable: !0
}) : e, t));

var k = x((ee, E) => {
  function _(t) {
    e.debug = e, e.default = e, e.coerce = O, e.disable = $, e.enable = u, e.enabled = j, e.humanize = __ms$, e.destroy = S, Object.keys(t).forEach(n => {
      e[n] = t[n];
    }), e.names = [], e.skips = [], e.formatters = {};

    function r(n) {
      let o = 0;

      for (let s = 0; s < n.length; s++) o = (o << 5) - o + n.charCodeAt(s), o |= 0;

      return e.colors[Math.abs(o) % e.colors.length];
    }

    i(r, "selectColor"), e.selectColor = r;

    function e(n) {
      let o,
          s = null,
          d,
          y;

      function c(...l) {
        if (!c.enabled) return;
        let f = c,
            F = Number(new Date()),
            z = F - (o || F);
        f.diff = z, f.prev = o, f.curr = F, o = F, l[0] = e.coerce(l[0]), typeof l[0] != "string" && l.unshift("%O");
        let p = 0;
        l[0] = l[0].replace(/%([a-zA-Z%])/g, (m, D) => {
          if (m === "%%") return "%";
          p++;
          let v = e.formatters[D];

          if (typeof v == "function") {
            let N = l[p];
            m = v.call(f, N), l.splice(p, 1), p--;
          }

          return m;
        }), e.formatArgs.call(f, l), (f.log || e.log).apply(f, l);
      }

      return i(c, "debug"), c.namespace = n, c.useColors = e.useColors(), c.color = e.selectColor(n), c.extend = a, c.destroy = e.destroy, Object.defineProperty(c, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => s !== null ? s : (d !== e.namespaces && (d = e.namespaces, y = e.enabled(n)), y),
        set: l => {
          s = l;
        }
      }), typeof e.init == "function" && e.init(c), c;
    }

    i(e, "createDebug");

    function a(n, o) {
      let s = e(this.namespace + (typeof o > "u" ? ":" : o) + n);
      return s.log = this.log, s;
    }

    i(a, "extend");

    function u(n) {
      e.save(n), e.namespaces = n, e.names = [], e.skips = [];
      let o,
          s = (typeof n == "string" ? n : "").split(/[\s,]+/),
          d = s.length;

      for (o = 0; o < d; o++) !s[o] || (n = s[o].replace(/\*/g, ".*?"), n[0] === "-" ? e.skips.push(new RegExp("^" + n.slice(1) + "$")) : e.names.push(new RegExp("^" + n + "$")));
    }

    i(u, "enable");

    function $() {
      let n = [...e.names.map(w), ...e.skips.map(w).map(o => "-" + o)].join(",");
      return e.enable(""), n;
    }

    i($, "disable");

    function j(n) {
      if (n[n.length - 1] === "*") return !0;
      let o, s;

      for (o = 0, s = e.skips.length; o < s; o++) if (e.skips[o].test(n)) return !1;

      for (o = 0, s = e.names.length; o < s; o++) if (e.names[o].test(n)) return !0;

      return !1;
    }

    i(j, "enabled");

    function w(n) {
      return n.toString().substring(2, n.toString().length - 2).replace(/\.\*\?$/, "*");
    }

    i(w, "toNamespace");

    function O(n) {
      return n instanceof Error ? n.stack || n.message : n;
    }

    i(O, "coerce");

    function S() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }

    return i(S, "destroy"), e.enable(e.load()), e;
  }

  i(_, "setup");
  E.exports = _;
});
var b = x((C, g) => {
  C.formatArgs = G;
  C.save = M;
  C.load = T;
  C.useColors = B;
  C.storage = W();

  C.destroy = (() => {
    let t = !1;
    return () => {
      t || (t = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })();

  C.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

  function B() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }

  i(B, "useColors");

  function G(t) {
    if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + g.exports.humanize(this.diff), !this.useColors) return;
    let r = "color: " + this.color;
    t.splice(1, 0, r, "color: inherit");
    let e = 0,
        a = 0;
    t[0].replace(/%[a-zA-Z%]/g, u => {
      u !== "%%" && (e++, u === "%c" && (a = e));
    }), t.splice(a, 0, r);
  }

  i(G, "formatArgs");

  C.log = console.debug || console.log || (() => {});

  function M(t) {
    try {
      t ? C.storage.setItem("debug", t) : C.storage.removeItem("debug");
    } catch {}
  }

  i(M, "save");

  function T() {
    let t;

    try {
      t = C.storage.getItem("debug");
    } catch {}

    return !t && typeof __Process$ < "u" && "env" in __Process$ && (t = __Process$.env.DEBUG), t;
  }

  i(T, "load");

  function W() {
    try {
      return localStorage;
    } catch {}
  }

  i(W, "localstorage");
  g.exports = k()(C);
  var {
    formatters: H
  } = g.exports;

  H.j = function (t) {
    try {
      return JSON.stringify(t);
    } catch (r) {
      return "[UnexpectedJSONParseError]: " + r.message;
    }
  };
});
var I = A(b()),
    K = A(b()),
    {
  default: Q,
  ...V
} = K,
    te = I.default ?? Q ?? V;
export { te as default };