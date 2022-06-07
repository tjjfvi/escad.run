/* esm.sh - esbuild bundle(minimatch@3.1.2) esnext production */
import __brace_expansion$ from "/transpiled/https://esm.sh/v85/brace-expansion@1.1.11/esnext/brace-expansion.js";
import __path$ from "/transpiled/https://esm.sh/v85/path-browserify@1.0.1/esnext/path-browserify.bundle.js";
var ie = Object.create;
var L = Object.defineProperty;
var ue = Object.getOwnPropertyDescriptor;
var oe = Object.getOwnPropertyNames;
var ce = Object.getPrototypeOf,
    he = Object.prototype.hasOwnProperty;

var o = (e, t) => L(e, "name", {
  value: t,
  configurable: !0
}),
    X = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (t, a) => (typeof require != "undefined" ? require : t)[a]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var fe = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var ge = (e, t, a, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let n of oe(t)) !he.call(e, n) && n !== a && L(e, n, {
    get: () => t[n],
    enumerable: !(r = ue(t, n)) || r.enumerable
  });
  return e;
};

var z = (e, t, a) => (a = e != null ? ie(ce(e)) : {}, ge(t || !e || !e.__esModule ? L(a, "default", {
  value: e,
  enumerable: !0
}) : a, e));

var P = fe(($e, Q) => {
  Q.exports = m;
  m.Minimatch = f;

  var j = function () {
    try {
      return __path$;
    } catch {}
  }() || {
    sep: "/"
  };

  m.sep = j.sep;
  var G = m.GLOBSTAR = f.GLOBSTAR = {},
      le = __brace_expansion$,
      F = {
    "!": {
      open: "(?:(?!(?:",
      close: "))[^/]*?)"
    },
    "?": {
      open: "(?:",
      close: ")?"
    },
    "+": {
      open: "(?:",
      close: ")+"
    },
    "*": {
      open: "(?:",
      close: ")*"
    },
    "@": {
      open: "(?:",
      close: ")"
    }
  },
      _ = "[^/]",
      B = _ + "*?",
      ve = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?",
      me = "(?:(?!(?:\\/|^)\\.).)*?",
      I = de("().*{}+?[]^$\\!");

  function de(e) {
    return e.split("").reduce(function (t, a) {
      return t[a] = !0, t;
    }, {});
  }

  o(de, "charSet");
  var J = /\/+/;
  m.filter = pe;

  function pe(e, t) {
    return t = t || {}, function (a, r, n) {
      return m(a, e, t);
    };
  }

  o(pe, "filter");

  function x(e, t) {
    t = t || {};
    var a = {};
    return Object.keys(e).forEach(function (r) {
      a[r] = e[r];
    }), Object.keys(t).forEach(function (r) {
      a[r] = t[r];
    }), a;
  }

  o(x, "ext");

  m.defaults = function (e) {
    if (!e || typeof e != "object" || !Object.keys(e).length) return m;
    var t = m,
        a = o(function (n, s, i) {
      return t(n, s, x(e, i));
    }, "minimatch");
    return a.Minimatch = o(function (n, s) {
      return new t.Minimatch(n, x(e, s));
    }, "Minimatch"), a.Minimatch.defaults = o(function (n) {
      return t.defaults(x(e, n)).Minimatch;
    }, "defaults"), a.filter = o(function (n, s) {
      return t.filter(n, x(e, s));
    }, "filter"), a.defaults = o(function (n) {
      return t.defaults(x(e, n));
    }, "defaults"), a.makeRe = o(function (n, s) {
      return t.makeRe(n, x(e, s));
    }, "makeRe"), a.braceExpand = o(function (n, s) {
      return t.braceExpand(n, x(e, s));
    }, "braceExpand"), a.match = function (r, n, s) {
      return t.match(r, n, x(e, s));
    }, a;
  };

  f.defaults = function (e) {
    return m.defaults(e).Minimatch;
  };

  function m(e, t, a) {
    return T(t), a || (a = {}), !a.nocomment && t.charAt(0) === "#" ? !1 : new f(t, a).match(e);
  }

  o(m, "minimatch");

  function f(e, t) {
    if (!(this instanceof f)) return new f(e, t);
    T(e), t || (t = {}), e = e.trim(), !t.allowWindowsEscape && j.sep !== "/" && (e = e.split(j.sep).join("/")), this.options = t, this.set = [], this.pattern = e, this.regexp = null, this.negate = !1, this.comment = !1, this.empty = !1, this.partial = !!t.partial, this.make();
  }

  o(f, "Minimatch");

  f.prototype.debug = function () {};

  f.prototype.make = be;

  function be() {
    var e = this.pattern,
        t = this.options;

    if (!t.nocomment && e.charAt(0) === "#") {
      this.comment = !0;
      return;
    }

    if (!e) {
      this.empty = !0;
      return;
    }

    this.parseNegate();
    var a = this.globSet = this.braceExpand();
    t.debug && (this.debug = o(function () {
      console.error.apply(console, arguments);
    }, "debug")), this.debug(this.pattern, a), a = this.globParts = a.map(function (r) {
      return r.split(J);
    }), this.debug(this.pattern, a), a = a.map(function (r, n, s) {
      return r.map(this.parse, this);
    }, this), this.debug(this.pattern, a), a = a.filter(function (r) {
      return r.indexOf(!1) === -1;
    }), this.debug(this.pattern, a), this.set = a;
  }

  o(be, "make");
  f.prototype.parseNegate = ye;

  function ye() {
    var e = this.pattern,
        t = !1,
        a = this.options,
        r = 0;

    if (!a.nonegate) {
      for (var n = 0, s = e.length; n < s && e.charAt(n) === "!"; n++) t = !t, r++;

      r && (this.pattern = e.substr(r)), this.negate = t;
    }
  }

  o(ye, "parseNegate");

  m.braceExpand = function (e, t) {
    return K(e, t);
  };

  f.prototype.braceExpand = K;

  function K(e, t) {
    return t || (this instanceof f ? t = this.options : t = {}), e = typeof e > "u" ? this.pattern : e, T(e), t.nobrace || !/\{(?:(?!\{).)*\}/.test(e) ? [e] : le(e);
  }

  o(K, "braceExpand");
  var xe = 1024 * 64,
      T = o(function (e) {
    if (typeof e != "string") throw new TypeError("invalid pattern");
    if (e.length > xe) throw new TypeError("pattern is too long");
  }, "assertValidPattern");
  f.prototype.parse = Ee;
  var $ = {};

  function Ee(e, t) {
    T(e);
    var a = this.options;
    if (e === "**") if (a.noglobstar) e = "*";else return G;
    if (e === "") return "";
    var r = "",
        n = !!a.nocase,
        s = !1,
        i = [],
        d = [],
        u,
        c = !1,
        l = -1,
        p = -1,
        E = e.charAt(0) === "." ? "" : a.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)",
        b = this;

    function y() {
      if (u) {
        switch (u) {
          case "*":
            r += B, n = !0;
            break;

          case "?":
            r += _, n = !0;
            break;

          default:
            r += "\\" + u;
            break;
        }

        b.debug("clearStateChar %j %j", u, r), u = !1;
      }
    }

    o(y, "clearStateChar");

    for (var v = 0, ee = e.length, h; v < ee && (h = e.charAt(v)); v++) {
      if (this.debug("%s	%s %s %j", e, v, r, h), s && I[h]) {
        r += "\\" + h, s = !1;
        continue;
      }

      switch (h) {
        case "/":
          return !1;

        case "\\":
          y(), s = !0;
          continue;

        case "?":
        case "*":
        case "+":
        case "@":
        case "!":
          if (this.debug("%s	%s %s %j <-- stateChar", e, v, r, h), c) {
            this.debug("  in class"), h === "!" && v === p + 1 && (h = "^"), r += h;
            continue;
          }

          b.debug("call clearStateChar %j", u), y(), u = h, a.noext && y();
          continue;

        case "(":
          if (c) {
            r += "(";
            continue;
          }

          if (!u) {
            r += "\\(";
            continue;
          }

          i.push({
            type: u,
            start: v - 1,
            reStart: r.length,
            open: F[u].open,
            close: F[u].close
          }), r += u === "!" ? "(?:(?!(?:" : "(?:", this.debug("plType %j %j", u, r), u = !1;
          continue;

        case ")":
          if (c || !i.length) {
            r += "\\)";
            continue;
          }

          y(), n = !0;
          var g = i.pop();
          r += g.close, g.type === "!" && d.push(g), g.reEnd = r.length;
          continue;

        case "|":
          if (c || !i.length || s) {
            r += "\\|", s = !1;
            continue;
          }

          y(), r += "|";
          continue;

        case "[":
          if (y(), c) {
            r += "\\" + h;
            continue;
          }

          c = !0, p = v, l = r.length, r += h;
          continue;

        case "]":
          if (v === p + 1 || !c) {
            r += "\\" + h, s = !1;
            continue;
          }

          var O = e.substring(p + 1, v);

          try {
            RegExp("[" + O + "]");
          } catch {
            var k = this.parse(O, $);
            r = r.substr(0, l) + "\\[" + k[0] + "\\]", n = n || k[1], c = !1;
            continue;
          }

          n = !0, c = !1, r += h;
          continue;

        default:
          y(), s ? s = !1 : I[h] && !(h === "^" && c) && (r += "\\"), r += h;
      }
    }

    for (c && (O = e.substr(p + 1), k = this.parse(O, $), r = r.substr(0, l) + "\\[" + k[0], n = n || k[1]), g = i.pop(); g; g = i.pop()) {
      var w = r.slice(g.reStart + g.open.length);
      this.debug("setting tail", r, g), w = w.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (V, W, C) {
        return C || (C = "\\"), W + W + C + "|";
      }), this.debug(`tail=%j
   %s`, w, w, g, r);
      var te = g.type === "*" ? B : g.type === "?" ? _ : "\\" + g.type;
      n = !0, r = r.slice(0, g.reStart) + te + "\\(" + w;
    }

    y(), s && (r += "\\\\");
    var q = !1;

    switch (r.charAt(0)) {
      case "[":
      case ".":
      case "(":
        q = !0;
    }

    for (var M = d.length - 1; M > -1; M--) {
      var S = d[M],
          D = r.slice(0, S.reStart),
          re = r.slice(S.reStart, S.reEnd - 8),
          U = r.slice(S.reEnd - 8, S.reEnd),
          R = r.slice(S.reEnd);
      U += R;
      var ne = D.split("(").length - 1,
          A = R;

      for (v = 0; v < ne; v++) A = A.replace(/\)[+*?]?/, "");

      R = A;
      var H = "";
      R === "" && t !== $ && (H = "$");
      var ae = D + re + R + H + U;
      r = ae;
    }

    if (r !== "" && n && (r = "(?=.)" + r), q && (r = E + r), t === $) return [r, n];
    if (!n) return ke(e);
    var se = a.nocase ? "i" : "";

    try {
      var N = new RegExp("^" + r + "$", se);
    } catch {
      return new RegExp("$.");
    }

    return N._glob = e, N._src = r, N;
  }

  o(Ee, "parse");

  m.makeRe = function (e, t) {
    return new f(e, t || {}).makeRe();
  };

  f.prototype.makeRe = Se;

  function Se() {
    if (this.regexp || this.regexp === !1) return this.regexp;
    var e = this.set;
    if (!e.length) return this.regexp = !1, this.regexp;
    var t = this.options,
        a = t.noglobstar ? B : t.dot ? ve : me,
        r = t.nocase ? "i" : "",
        n = e.map(function (s) {
      return s.map(function (i) {
        return i === G ? a : typeof i == "string" ? we(i) : i._src;
      }).join("\\/");
    }).join("|");
    n = "^(?:" + n + ")$", this.negate && (n = "^(?!" + n + ").*$");

    try {
      this.regexp = new RegExp(n, r);
    } catch {
      this.regexp = !1;
    }

    return this.regexp;
  }

  o(Se, "makeRe");

  m.match = function (e, t, a) {
    a = a || {};
    var r = new f(t, a);
    return e = e.filter(function (n) {
      return r.match(n);
    }), r.options.nonull && !e.length && e.push(t), e;
  };

  f.prototype.match = o(function (t, a) {
    if (typeof a > "u" && (a = this.partial), this.debug("match", t, this.pattern), this.comment) return !1;
    if (this.empty) return t === "";
    if (t === "/" && a) return !0;
    var r = this.options;
    j.sep !== "/" && (t = t.split(j.sep).join("/")), t = t.split(J), this.debug(this.pattern, "split", t);
    var n = this.set;
    this.debug(this.pattern, "set", n);
    var s, i;

    for (i = t.length - 1; i >= 0 && (s = t[i], !s); i--);

    for (i = 0; i < n.length; i++) {
      var d = n[i],
          u = t;
      r.matchBase && d.length === 1 && (u = [s]);
      var c = this.matchOne(u, d, a);
      if (c) return r.flipNegate ? !0 : !this.negate;
    }

    return r.flipNegate ? !1 : this.negate;
  }, "match");

  f.prototype.matchOne = function (e, t, a) {
    var r = this.options;
    this.debug("matchOne", {
      this: this,
      file: e,
      pattern: t
    }), this.debug("matchOne", e.length, t.length);

    for (var n = 0, s = 0, i = e.length, d = t.length; n < i && s < d; n++, s++) {
      this.debug("matchOne loop");
      var u = t[s],
          c = e[n];
      if (this.debug(t, u, c), u === !1) return !1;

      if (u === G) {
        this.debug("GLOBSTAR", [t, u, c]);
        var l = n,
            p = s + 1;

        if (p === d) {
          for (this.debug("** at the end"); n < i; n++) if (e[n] === "." || e[n] === ".." || !r.dot && e[n].charAt(0) === ".") return !1;

          return !0;
        }

        for (; l < i;) {
          var E = e[l];
          if (this.debug(`
globstar while`, e, l, t, p, E), this.matchOne(e.slice(l), t.slice(p), a)) return this.debug("globstar found match!", l, i, E), !0;

          if (E === "." || E === ".." || !r.dot && E.charAt(0) === ".") {
            this.debug("dot detected!", e, l, t, p);
            break;
          }

          this.debug("globstar swallow a segment, and continue"), l++;
        }

        return !!(a && (this.debug(`
>>> no match, partial?`, e, l, t, p), l === i));
      }

      var b;
      if (typeof u == "string" ? (b = c === u, this.debug("string match", u, c, b)) : (b = c.match(u), this.debug("pattern match", u, c, b)), !b) return !1;
    }

    if (n === i && s === d) return !0;
    if (n === i) return a;
    if (s === d) return n === i - 1 && e[n] === "";
    throw new Error("wtf?");
  };

  function ke(e) {
    return e.replace(/\\(.)/g, "$1");
  }

  o(ke, "globUnescape");

  function we(e) {
    return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }

  o(we, "regExpEscape");
});
var Y = z(P()),
    Z = z(P()),
    {
  braceExpand: Te,
  makeRe: Me,
  match: Ae
} = Z,
    {
  default: Re,
  ...je
} = Z,
    Ne = Y.default ?? Re ?? je;
export { Te as braceExpand, Ne as default, Me as makeRe, Ae as match };