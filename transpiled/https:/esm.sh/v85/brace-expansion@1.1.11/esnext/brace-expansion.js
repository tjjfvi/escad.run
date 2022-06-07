/* esm.sh - esbuild bundle(brace-expansion@1.1.11) esnext production */
import __balanced_match$ from "/transpiled/https://esm.sh/v85/balanced-match@1.0.2/esnext/balanced-match.js";
import __concat_map$ from "/transpiled/https://esm.sh/v85/concat-map@0.0.1/esnext/concat-map.js";
var J = Object.create;
var g = Object.defineProperty;
var K = Object.getOwnPropertyDescriptor;
var Q = Object.getOwnPropertyNames;
var U = Object.getPrototypeOf,
    V = Object.prototype.hasOwnProperty;

var o = (r, e) => g(r, "name", {
  value: e,
  configurable: !0
}),
    q = (r => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(r, {
  get: (e, a) => (typeof require != "undefined" ? require : e)[a]
}) : r)(function (r) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + r + '" is not supported');
});

var W = (r, e) => () => (e || r((e = {
  exports: {}
}).exports, e), e.exports);

var X = (r, e, a, t) => {
  if (e && typeof e == "object" || typeof e == "function") for (let p of Q(e)) !V.call(r, p) && p !== a && g(r, p, {
    get: () => e[p],
    enumerable: !(t = K(e, p)) || t.enumerable
  });
  return r;
};

var x = (r, e, a) => (a = r != null ? J(U(r)) : {}, X(e || !r || !r.__esModule ? g(a, "default", {
  value: r,
  enumerable: !0
}) : a, r));

var M = W((ur, w) => {
  var Y = __concat_map$,
      E = __balanced_match$;
  w.exports = rr;
  var I = "\0SLASH" + Math.random() + "\0",
      N = "\0OPEN" + Math.random() + "\0",
      y = "\0CLOSE" + Math.random() + "\0",
      B = "\0COMMA" + Math.random() + "\0",
      L = "\0PERIOD" + Math.random() + "\0";

  function b(r) {
    return parseInt(r, 10) == r ? parseInt(r, 10) : r.charCodeAt(0);
  }

  o(b, "numeric");

  function _(r) {
    return r.split("\\\\").join(I).split("\\{").join(N).split("\\}").join(y).split("\\,").join(B).split("\\.").join(L);
  }

  o(_, "escapeBraces");

  function k(r) {
    return r.split(I).join("\\").split(N).join("{").split(y).join("}").split(B).join(",").split(L).join(".");
  }

  o(k, "unescapeBraces");

  function Z(r) {
    if (!r) return [""];
    var e = [],
        a = E("{", "}", r);
    if (!a) return r.split(",");
    var t = a.pre,
        p = a.body,
        f = a.post,
        i = t.split(",");
    i[i.length - 1] += "{" + p + "}";
    var d = Z(f);
    return f.length && (i[i.length - 1] += d.shift(), i.push.apply(i, d)), e.push.apply(e, i), e;
  }

  o(Z, "parseCommaParts");

  function rr(r) {
    return r ? (r.substr(0, 2) === "{}" && (r = "\\{\\}" + r.substr(2)), u(_(r), !0).map(k)) : [];
  }

  o(rr, "expandTop");

  function er(r) {
    return "{" + r + "}";
  }

  o(er, "embrace");

  function tr(r) {
    return /^-?0\d/.test(r);
  }

  o(tr, "isPadded");

  function ar(r, e) {
    return r <= e;
  }

  o(ar, "lte");

  function nr(r, e) {
    return r >= e;
  }

  o(nr, "gte");

  function u(r, e) {
    var a = [],
        t = E("{", "}", r);
    if (!t || /\$$/.test(t.pre)) return [r];
    var p = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(t.body),
        f = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(t.body),
        i = p || f,
        d = t.body.indexOf(",") >= 0;
    if (!i && !d) return t.post.match(/,.*\}/) ? (r = t.pre + "{" + t.body + y + t.post, u(r)) : [r];
    var n;
    if (i) n = t.body.split(/\.\./);else if (n = Z(t.body), n.length === 1 && (n = u(n[0], !1).map(er), n.length === 1)) {
      var h = t.post.length ? u(t.post, !1) : [""];
      return h.map(function (G) {
        return t.pre + n[0] + G;
      });
    }
    var D = t.pre,
        h = t.post.length ? u(t.post, !1) : [""],
        l;

    if (i) {
      var j = b(n[0]),
          S = b(n[1]),
          H = Math.max(n[0].length, n[1].length),
          C = n.length == 3 ? Math.abs(b(n[2])) : 1,
          $ = ar,
          R = S < j;
      R && (C *= -1, $ = nr);
      var T = n.some(tr);
      l = [];

      for (var v = j; $(v, S); v += C) {
        var s;
        if (f) s = String.fromCharCode(v), s === "\\" && (s = "");else if (s = String(v), T) {
          var A = H - s.length;

          if (A > 0) {
            var O = new Array(A + 1).join("0");
            v < 0 ? s = "-" + O + s.slice(1) : s = O + s;
          }
        }
        l.push(s);
      }
    } else l = Y(n, function (F) {
      return u(F, !1);
    });

    for (var m = 0; m < l.length; m++) for (var c = 0; c < h.length; c++) {
      var P = D + l[m] + h[c];
      (!e || i || P) && a.push(P);
    }

    return a;
  }

  o(u, "expand");
});
var z = x(M()),
    ir = x(M()),
    {
  default: or,
  ...sr
} = ir,
    fr = z.default ?? or ?? sr;
export { fr as default };