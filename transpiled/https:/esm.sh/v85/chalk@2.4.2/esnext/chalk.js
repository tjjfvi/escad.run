/* esm.sh - esbuild bundle(chalk@2.4.2) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v85/node_process.js";
import { stdout as __supports_color$stdout } from "/transpiled/https://esm.sh/v85/supports-color@5.5.0/esnext/supports-color.js";
import __ansi_styles$ from "/transpiled/https://esm.sh/v85/ansi-styles@3.2.1/esnext/ansi-styles.js";
import __escape_string_regexp$ from "/transpiled/https://esm.sh/v85/escape-string-regexp@1.0.5/esnext/escape-string-regexp.js";
var L = Object.create;
var m = Object.defineProperty;
var N = Object.getOwnPropertyDescriptor;
var q = Object.getOwnPropertyNames;
var I = Object.getPrototypeOf,
    X = Object.prototype.hasOwnProperty;

var c = (e, t) => m(e, "name", {
  value: t,
  configurable: !0
}),
    y = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (t, s) => (typeof require != "undefined" ? require : t)[s]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var E = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var B = (e, t, s, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let n of q(t)) !X.call(e, n) && n !== s && m(e, n, {
    get: () => t[n],
    enumerable: !(r = N(t, n)) || r.enumerable
  });
  return e;
};

var _ = (e, t, s) => (s = e != null ? L(I(e)) : {}, B(t || !e || !e.__esModule ? m(s, "default", {
  value: e,
  enumerable: !0
}) : s, e));

var S = E((te, k) => {
  "use strict";

  var U = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
      C = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
      W = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
      D = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,
      F = new Map([["n", `
`], ["r", "\r"], ["t", "	"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", "\x1B"], ["a", "\x07"]]);

  function R(e) {
    return e[0] === "u" && e.length === 5 || e[0] === "x" && e.length === 3 ? String.fromCharCode(parseInt(e.slice(1), 16)) : F.get(e) || e;
  }

  c(R, "unescape");

  function Y(e, t) {
    let s = [],
        r = t.trim().split(/\s*,\s*/g),
        n;

    for (let o of r) if (!isNaN(o)) s.push(Number(o));else if (n = o.match(W)) s.push(n[2].replace(D, (g, p, f) => p ? R(p) : f));else throw new Error(`Invalid Chalk template style argument: ${o} (in style '${e}')`);

    return s;
  }

  c(Y, "parseArguments");

  function z(e) {
    C.lastIndex = 0;
    let t = [],
        s;

    for (; (s = C.exec(e)) !== null;) {
      let r = s[1];

      if (s[2]) {
        let n = Y(r, s[2]);
        t.push([r].concat(n));
      } else t.push([r]);
    }

    return t;
  }

  c(z, "parseStyle");

  function x(e, t) {
    let s = {};

    for (let n of t) for (let o of n.styles) s[o[0]] = n.inverse ? null : o.slice(1);

    let r = e;

    for (let n of Object.keys(s)) if (Array.isArray(s[n])) {
      if (!(n in r)) throw new Error(`Unknown Chalk style: ${n}`);
      s[n].length > 0 ? r = r[n].apply(r, s[n]) : r = r[n];
    }

    return r;
  }

  c(x, "buildStyle");

  k.exports = (e, t) => {
    let s = [],
        r = [],
        n = [];

    if (t.replace(U, (o, g, p, f, M, T) => {
      if (g) n.push(R(g));else if (f) {
        let w = n.join("");
        n = [], r.push(s.length === 0 ? w : x(e, s)(w)), s.push({
          inverse: p,
          styles: z(f)
        });
      } else if (M) {
        if (s.length === 0) throw new Error("Found extraneous } in Chalk template literal");
        r.push(x(e, s)(n.join(""))), n = [], s.pop();
      } else n.push(T);
    }), r.push(n.join("")), s.length > 0) {
      let o = `Chalk template literal is missing ${s.length} closing bracket${s.length === 1 ? "" : "s"} (\`}\`)`;
      throw new Error(o);
    }

    return r.join("");
  };
});
var v = E((se, u) => {
  "use strict";

  var b = __escape_string_regexp$,
      l = __ansi_styles$,
      d = __supports_color$stdout,
      H = S(),
      O = __Process$.platform === "win32" && !(__Process$.env.TERM || "").toLowerCase().startsWith("xterm"),
      $ = ["ansi", "ansi", "ansi256", "ansi16m"],
      P = new Set(["gray"]),
      i = Object.create(null);

  function j(e, t) {
    t = t || {};
    let s = d ? d.level : 0;
    e.level = t.level === void 0 ? s : t.level, e.enabled = "enabled" in t ? t.enabled : e.level > 0;
  }

  c(j, "applyOptions");

  function a(e) {
    if (!this || !(this instanceof a) || this.template) {
      let t = {};
      return j(t, e), t.template = function () {
        let s = [].slice.call(arguments);
        return Q.apply(null, [t.template].concat(s));
      }, Object.setPrototypeOf(t, a.prototype), Object.setPrototypeOf(t.template, t), t.template.constructor = a, t.template;
    }

    j(this, e);
  }

  c(a, "Chalk");
  O && (l.blue.open = "\x1B[94m");

  for (let e of Object.keys(l)) l[e].closeRe = new RegExp(b(l[e].close), "g"), i[e] = {
    get() {
      let t = l[e];
      return h.call(this, this._styles ? this._styles.concat(t) : [t], this._empty, e);
    }

  };

  i.visible = {
    get() {
      return h.call(this, this._styles || [], !0, "visible");
    }

  };
  l.color.closeRe = new RegExp(b(l.color.close), "g");

  for (let e of Object.keys(l.color.ansi)) P.has(e) || (i[e] = {
    get() {
      let t = this.level;
      return function () {
        let r = {
          open: l.color[$[t]][e].apply(null, arguments),
          close: l.color.close,
          closeRe: l.color.closeRe
        };
        return h.call(this, this._styles ? this._styles.concat(r) : [r], this._empty, e);
      };
    }

  });

  l.bgColor.closeRe = new RegExp(b(l.bgColor.close), "g");

  for (let e of Object.keys(l.bgColor.ansi)) {
    if (P.has(e)) continue;
    let t = "bg" + e[0].toUpperCase() + e.slice(1);
    i[t] = {
      get() {
        let s = this.level;
        return function () {
          let n = {
            open: l.bgColor[$[s]][e].apply(null, arguments),
            close: l.bgColor.close,
            closeRe: l.bgColor.closeRe
          };
          return h.call(this, this._styles ? this._styles.concat(n) : [n], this._empty, e);
        };
      }

    };
  }

  var J = Object.defineProperties(() => {}, i);

  function h(e, t, s) {
    let r = c(function () {
      return K.apply(r, arguments);
    }, "builder");
    r._styles = e, r._empty = t;
    let n = this;
    return Object.defineProperty(r, "level", {
      enumerable: !0,

      get() {
        return n.level;
      },

      set(o) {
        n.level = o;
      }

    }), Object.defineProperty(r, "enabled", {
      enumerable: !0,

      get() {
        return n.enabled;
      },

      set(o) {
        n.enabled = o;
      }

    }), r.hasGrey = this.hasGrey || s === "gray" || s === "grey", r.__proto__ = J, r;
  }

  c(h, "build");

  function K() {
    let e = arguments,
        t = e.length,
        s = String(arguments[0]);
    if (t === 0) return "";
    if (t > 1) for (let n = 1; n < t; n++) s += " " + e[n];
    if (!this.enabled || this.level <= 0 || !s) return this._empty ? "" : s;
    let r = l.dim.open;
    O && this.hasGrey && (l.dim.open = "");

    for (let n of this._styles.slice().reverse()) s = n.open + s.replace(n.closeRe, n.open) + n.close, s = s.replace(/\r?\n/g, `${n.close}$&${n.open}`);

    return l.dim.open = r, s;
  }

  c(K, "applyStyle");

  function Q(e, t) {
    if (!Array.isArray(t)) return [].slice.call(arguments, 1).join(" ");
    let s = [].slice.call(arguments, 2),
        r = [t.raw[0]];

    for (let n = 1; n < t.length; n++) r.push(String(s[n - 1]).replace(/[{}\\]/g, "\\$&")), r.push(String(t.raw[n]));

    return H(e, r.join(""));
  }

  c(Q, "chalkTag");
  Object.defineProperties(a.prototype, i);
  u.exports = a();
  u.exports.supportsColor = d;
  u.exports.default = u.exports;
});

var A = _(v()),
    G = _(v()),
    {
  supportsColor: ne
} = G,
    {
  default: V,
  ...Z
} = G,
    re = A.default ?? V ?? Z;

export { re as default, ne as supportsColor };