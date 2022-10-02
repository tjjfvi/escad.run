/* esm.sh - esbuild bundle(@babel/code-frame@7.18.6) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v96/node_process.js";
import * as ___babel_highlight$ from "/transpiled/https://esm.sh/v96/@babel/highlight@7.18.6/esnext/highlight.js";
var v = Object.create;
var $ = Object.defineProperty;
var w = Object.getOwnPropertyDescriptor;
var A = Object.getOwnPropertyNames;
var P = Object.getPrototypeOf,
    S = Object.prototype.hasOwnProperty;

var H = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (t, n) => (typeof require < "u" ? require : t)[n]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var q = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var B = (e, t, n, o) => {
  if (t && typeof t == "object" || typeof t == "function") for (let a of A(t)) !S.call(e, a) && a !== n && $(e, a, {
    get: () => t[a],
    enumerable: !(o = w(t, a)) || o.enumerable
  });
  return e;
};

var I = (e, t, n) => (n = e != null ? v(P(e)) : {}, B(t || !e || !e.__esModule ? $(n, "default", {
  value: e,
  enumerable: !0
}) : n, e));

var y = q(_ => {
  "use strict";

  Object.defineProperty(_, "__esModule", {
    value: !0
  });
  _.codeFrameColumns = j;
  _.default = J;
  var C = ___babel_highlight$,
      x = !1;

  function z(e) {
    return {
      gutter: e.grey,
      marker: e.red.bold,
      message: e.red.bold
    };
  }

  var W = /\r\n|[\n\r\u2028\u2029]/;

  function G(e, t, n) {
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
        b = Math.max(m - (i + 1), 0),
        h = Math.min(t.length, g + u);
    m === -1 && (b = 0), g === -1 && (h = t.length);
    let p = g - m,
        s = {};
    if (p) for (let r = 0; r <= p; r++) {
      let c = r + m;
      if (!l) s[c] = !0;else if (r === 0) {
        let d = t[c - 1].length;
        s[c] = [l, d - l + 1];
      } else if (r === p) s[c] = [0, f];else {
        let d = t[c - r].length;
        s[c] = [0, d];
      }
    } else l === f ? l ? s[m] = [l, 0] : s[m] = !0 : s[m] = [l, f - l];
    return {
      start: b,
      end: h,
      markerLines: s
    };
  }

  function j(e, t, n = {}) {
    let o = (n.highlightCode || n.forceColor) && (0, C.shouldHighlight)(n),
        a = (0, C.getChalk)(n),
        i = z(a),
        u = (r, c) => o ? r(c) : c,
        m = e.split(W),
        {
      start: l,
      end: g,
      markerLines: f
    } = G(t, m, n),
        b = t.start && typeof t.start.column == "number",
        h = String(g).length,
        s = (o ? (0, C.default)(e, n) : e).split(W, g).slice(l, g).map((r, c) => {
      let d = l + 1 + c,
          k = ` ${` ${d}`.slice(-h)} |`,
          L = f[d],
          D = !f[d + 1];

      if (L) {
        let M = "";

        if (Array.isArray(L)) {
          let F = r.slice(0, Math.max(L[0] - 1, 0)).replace(/[^\t]/g, " "),
              O = L[1] || 1;
          M = [`
 `, u(i.gutter, k.replace(/\d/g, " ")), " ", F, u(i.marker, "^").repeat(O)].join(""), D && n.message && (M += " " + u(i.message, n.message));
        }

        return [u(i.marker, ">"), u(i.gutter, k), r.length > 0 ? ` ${r}` : "", M].join("");
      } else return ` ${u(i.gutter, k)}${r.length > 0 ? ` ${r}` : ""}`;
    }).join(`
`);

    return n.message && !b && (s = `${" ".repeat(h + 1)}${n.message}
${s}`), o ? a.reset(s) : s;
  }

  function J(e, t, n, o = {}) {
    if (!x) {
      x = !0;
      let i = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
      if (__Process$.emitWarning) __Process$.emitWarning(i, "DeprecationWarning");else {
        let u = new Error(i);
        u.name = "DeprecationWarning", console.warn(new Error(i));
      }
    }

    return n = Math.max(n, 0), j(e, {
      start: {
        column: n,
        line: t
      }
    }, o);
  }
});
var N = I(y()),
    U = !0,
    {
  codeFrameColumns: V
} = N,
    {
  default: E,
  ...K
} = N,
    X = E !== void 0 ? E : K;
export { U as __esModule, V as codeFrameColumns, X as default };