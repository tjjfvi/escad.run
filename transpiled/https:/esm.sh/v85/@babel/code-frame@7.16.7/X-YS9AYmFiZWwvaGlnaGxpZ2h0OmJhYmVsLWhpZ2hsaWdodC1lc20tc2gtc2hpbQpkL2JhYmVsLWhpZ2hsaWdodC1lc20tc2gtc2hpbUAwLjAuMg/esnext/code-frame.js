/* esm.sh - esbuild bundle(@babel/code-frame@7.16.7) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v85/node_process.js";
import * as __babel_highlight_esm_sh_shim$$ from "/transpiled/https://esm.sh/v85/babel-highlight-esm-sh-shim@0.0.2/esnext/babel-highlight-esm-sh-shim.js";

const __babel_highlight_esm_sh_shim$ = Object.assign({
  __esModule: true
}, __babel_highlight_esm_sh_shim$$);

var A = Object.create;
var W = Object.defineProperty;
var P = Object.getOwnPropertyDescriptor;
var S = Object.getOwnPropertyNames;
var H = Object.getPrototypeOf,
    q = Object.prototype.hasOwnProperty;

var h = (e, t) => W(e, "name", {
  value: t,
  configurable: !0
}),
    B = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (t, n) => (typeof require != "undefined" ? require : t)[n]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var I = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var z = (e, t, n, o) => {
  if (t && typeof t == "object" || typeof t == "function") for (let a of S(t)) !q.call(e, a) && a !== n && W(e, a, {
    get: () => t[a],
    enumerable: !(o = P(t, a)) || o.enumerable
  });
  return e;
};

var y = (e, t, n) => (n = e != null ? A(H(e)) : {}, z(t || !e || !e.__esModule ? W(n, "default", {
  value: e,
  enumerable: !0
}) : n, e));

var x = I(k => {
  "use strict";

  Object.defineProperty(k, "__esModule", {
    value: !0
  });
  k.codeFrameColumns = N;
  k.default = K;

  var j = __babel_highlight_esm_sh_shim$,
      _ = !1;

  function G(e) {
    return {
      gutter: e.grey,
      marker: e.red.bold,
      message: e.red.bold
    };
  }

  h(G, "getDefs");
  var E = /\r\n|[\n\r\u2028\u2029]/;

  function J(e, t, n) {
    let o = Object.assign({
      column: 0,
      line: -1
    }, e.start),
        a = Object.assign({}, o, e.end),
        {
      linesAbove: i = 2,
      linesBelow: u = 3
    } = n || {},
        m = o.line,
        l = o.column,
        g = a.line,
        f = a.column,
        p = Math.max(m - (i + 1), 0),
        b = Math.min(t.length, g + u);
    m === -1 && (p = 0), g === -1 && (b = t.length);
    let $ = g - m,
        s = {};
    if ($) for (let r = 0; r <= $; r++) {
      let c = r + m;
      if (!l) s[c] = !0;else if (r === 0) {
        let d = t[c - 1].length;
        s[c] = [l, d - l + 1];
      } else if (r === $) s[c] = [0, f];else {
        let d = t[c - r].length;
        s[c] = [0, d];
      }
    } else l === f ? l ? s[m] = [l, 0] : s[m] = !0 : s[m] = [l, f - l];
    return {
      start: p,
      end: b,
      markerLines: s
    };
  }

  h(J, "getMarkerLines");

  function N(e, t, n = {}) {
    let o = (n.highlightCode || n.forceColor) && (0, j.shouldHighlight)(n),
        a = (0, j.getChalk)(n),
        i = G(a),
        u = h((r, c) => o ? r(c) : c, "maybeHighlight"),
        m = e.split(E),
        {
      start: l,
      end: g,
      markerLines: f
    } = J(t, m, n),
        p = t.start && typeof t.start.column == "number",
        b = String(g).length,
        s = (o ? (0, j.default)(e, n) : e).split(E, g).slice(l, g).map((r, c) => {
      let d = l + 1 + c,
          M = ` ${` ${d}`.slice(-b)} |`,
          L = f[d],
          O = !f[d + 1];

      if (L) {
        let C = "";

        if (Array.isArray(L)) {
          let v = r.slice(0, Math.max(L[0] - 1, 0)).replace(/[^\t]/g, " "),
              w = L[1] || 1;
          C = [`
 `, u(i.gutter, M.replace(/\d/g, " ")), " ", v, u(i.marker, "^").repeat(w)].join(""), O && n.message && (C += " " + u(i.message, n.message));
        }

        return [u(i.marker, ">"), u(i.gutter, M), r.length > 0 ? ` ${r}` : "", C].join("");
      } else return ` ${u(i.gutter, M)}${r.length > 0 ? ` ${r}` : ""}`;
    }).join(`
`);
    return n.message && !p && (s = `${" ".repeat(b + 1)}${n.message}
${s}`), o ? a.reset(s) : s;
  }

  h(N, "codeFrameColumns");

  function K(e, t, n, o = {}) {
    if (!_) {
      _ = !0;
      let i = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
      if (__Process$.emitWarning) __Process$.emitWarning(i, "DeprecationWarning");else {
        let u = new Error(i);
        u.name = "DeprecationWarning", console.warn(new Error(i));
      }
    }

    return n = Math.max(n, 0), N(e, {
      start: {
        column: n,
        line: t
      }
    }, o);
  }

  h(K, "_default");
});
var D = y(x()),
    F = y(x()),
    {
  __esModule: X,
  codeFrameColumns: Y
} = F,
    {
  default: Q,
  ...R
} = F,
    Z = D.default ?? Q ?? R;
export { X as __esModule, Y as codeFrameColumns, Z as default };