/* esm.sh - esbuild bundle(chalk@2.4.2) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v96/node_process.js";
import { stdout as __supports_color$stdout } from "/transpiled/https://esm.sh/v96/supports-color@5.5.0/esnext/supports-color.js";
import __ansi_styles$ from "/transpiled/https://esm.sh/v96/ansi-styles@3.2.1/esnext/ansi-styles.js";
import __escape_string_regexp$ from "/transpiled/https://esm.sh/v96/escape-string-regexp@1.0.5/esnext/escape-string-regexp.js";
var M = Object.create;
var b = Object.defineProperty;
var T = Object.getOwnPropertyDescriptor;
var L = Object.getOwnPropertyNames;
var N = Object.getPrototypeOf,
    q = Object.prototype.hasOwnProperty;

var g = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (t, s) => (typeof require < "u" ? require : t)[s]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var _ = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var I = (e, t, s, l) => {
  if (t && typeof t == "object" || typeof t == "function") for (let n of L(t)) !q.call(e, n) && n !== s && b(e, n, {
    get: () => t[n],
    enumerable: !(l = T(t, n)) || l.enumerable
  });
  return e;
};

var X = (e, t, s) => (s = e != null ? M(N(e)) : {}, I(t || !e || !e.__esModule ? b(s, "default", {
  value: e,
  enumerable: !0
}) : s, e));

var x = _((Z, C) => {
  "use strict";

  var B = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
      v = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
      U = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
      W = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,
      D = new Map([["n", `
`], ["r", "\r"], ["t", "	"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", "\x1B"], ["a", "\x07"]]);

  function E(e) {
    return e[0] === "u" && e.length === 5 || e[0] === "x" && e.length === 3 ? String.fromCharCode(parseInt(e.slice(1), 16)) : D.get(e) || e;
  }

  function F(e, t) {
    let s = [],
        l = t.trim().split(/\s*,\s*/g),
        n;

    for (let o of l) if (!isNaN(o)) s.push(Number(o));else if (n = o.match(U)) s.push(n[2].replace(W, (h, u, p) => u ? E(u) : p));else throw new Error(`Invalid Chalk template style argument: ${o} (in style '${e}')`);

    return s;
  }

  function Y(e) {
    v.lastIndex = 0;
    let t = [],
        s;

    for (; (s = v.exec(e)) !== null;) {
      let l = s[1];

      if (s[2]) {
        let n = F(l, s[2]);
        t.push([l].concat(n));
      } else t.push([l]);
    }

    return t;
  }

  function w(e, t) {
    let s = {};

    for (let n of t) for (let o of n.styles) s[o[0]] = n.inverse ? null : o.slice(1);

    let l = e;

    for (let n of Object.keys(s)) if (Array.isArray(s[n])) {
      if (!(n in l)) throw new Error(`Unknown Chalk style: ${n}`);
      s[n].length > 0 ? l = l[n].apply(l, s[n]) : l = l[n];
    }

    return l;
  }

  C.exports = (e, t) => {
    let s = [],
        l = [],
        n = [];

    if (t.replace(B, (o, h, u, p, A, G) => {
      if (h) n.push(E(h));else if (p) {
        let d = n.join("");
        n = [], l.push(s.length === 0 ? d : w(e, s)(d)), s.push({
          inverse: u,
          styles: Y(p)
        });
      } else if (A) {
        if (s.length === 0) throw new Error("Found extraneous } in Chalk template literal");
        l.push(w(e, s)(n.join(""))), n = [], s.pop();
      } else n.push(G);
    }), l.push(n.join("")), s.length > 0) {
      let o = `Chalk template literal is missing ${s.length} closing bracket${s.length === 1 ? "" : "s"} (\`}\`)`;
      throw new Error(o);
    }

    return l.join("");
  };
});

var O = _((ee, a) => {
  "use strict";

  var m = __escape_string_regexp$,
      r = __ansi_styles$,
      y = __supports_color$stdout,
      z = x(),
      k = __Process$.platform === "win32" && !(__Process$.env.TERM || "").toLowerCase().startsWith("xterm"),
      S = ["ansi", "ansi", "ansi256", "ansi16m"],
      j = new Set(["gray"]),
      c = Object.create(null);

  function R(e, t) {
    t = t || {};
    let s = y ? y.level : 0;
    e.level = t.level === void 0 ? s : t.level, e.enabled = "enabled" in t ? t.enabled : e.level > 0;
  }

  function i(e) {
    if (!this || !(this instanceof i) || this.template) {
      let t = {};
      return R(t, e), t.template = function () {
        let s = [].slice.call(arguments);
        return K.apply(null, [t.template].concat(s));
      }, Object.setPrototypeOf(t, i.prototype), Object.setPrototypeOf(t.template, t), t.template.constructor = i, t.template;
    }

    R(this, e);
  }

  k && (r.blue.open = "\x1B[94m");

  for (let e of Object.keys(r)) r[e].closeRe = new RegExp(m(r[e].close), "g"), c[e] = {
    get() {
      let t = r[e];
      return f.call(this, this._styles ? this._styles.concat(t) : [t], this._empty, e);
    }

  };

  c.visible = {
    get() {
      return f.call(this, this._styles || [], !0, "visible");
    }

  };
  r.color.closeRe = new RegExp(m(r.color.close), "g");

  for (let e of Object.keys(r.color.ansi)) j.has(e) || (c[e] = {
    get() {
      let t = this.level;
      return function () {
        let l = {
          open: r.color[S[t]][e].apply(null, arguments),
          close: r.color.close,
          closeRe: r.color.closeRe
        };
        return f.call(this, this._styles ? this._styles.concat(l) : [l], this._empty, e);
      };
    }

  });

  r.bgColor.closeRe = new RegExp(m(r.bgColor.close), "g");

  for (let e of Object.keys(r.bgColor.ansi)) {
    if (j.has(e)) continue;
    let t = "bg" + e[0].toUpperCase() + e.slice(1);
    c[t] = {
      get() {
        let s = this.level;
        return function () {
          let n = {
            open: r.bgColor[S[s]][e].apply(null, arguments),
            close: r.bgColor.close,
            closeRe: r.bgColor.closeRe
          };
          return f.call(this, this._styles ? this._styles.concat(n) : [n], this._empty, e);
        };
      }

    };
  }

  var H = Object.defineProperties(() => {}, c);

  function f(e, t, s) {
    let l = function () {
      return J.apply(l, arguments);
    };

    l._styles = e, l._empty = t;
    let n = this;
    return Object.defineProperty(l, "level", {
      enumerable: !0,

      get() {
        return n.level;
      },

      set(o) {
        n.level = o;
      }

    }), Object.defineProperty(l, "enabled", {
      enumerable: !0,

      get() {
        return n.enabled;
      },

      set(o) {
        n.enabled = o;
      }

    }), l.hasGrey = this.hasGrey || s === "gray" || s === "grey", l.__proto__ = H, l;
  }

  function J() {
    let e = arguments,
        t = e.length,
        s = String(arguments[0]);
    if (t === 0) return "";
    if (t > 1) for (let n = 1; n < t; n++) s += " " + e[n];
    if (!this.enabled || this.level <= 0 || !s) return this._empty ? "" : s;
    let l = r.dim.open;
    k && this.hasGrey && (r.dim.open = "");

    for (let n of this._styles.slice().reverse()) s = n.open + s.replace(n.closeRe, n.open) + n.close, s = s.replace(/\r?\n/g, `${n.close}$&${n.open}`);

    return r.dim.open = l, s;
  }

  function K(e, t) {
    if (!Array.isArray(t)) return [].slice.call(arguments, 1).join(" ");
    let s = [].slice.call(arguments, 2),
        l = [t.raw[0]];

    for (let n = 1; n < t.length; n++) l.push(String(s[n - 1]).replace(/[{}\\]/g, "\\$&")), l.push(String(t.raw[n]));

    return z(e, l.join(""));
  }

  Object.defineProperties(i.prototype, c);
  a.exports = i();
  a.exports.supportsColor = y;
  a.exports.default = a.exports;
});

var P = X(O()),
    {
  supportsColor: te
} = P,
    {
  default: $,
  ...Q
} = P,
    se = $ !== void 0 ? $ : Q;
export { se as default, te as supportsColor };