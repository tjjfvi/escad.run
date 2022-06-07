/* esm.sh - esbuild bundle(semver@6.3.0) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v85/node_process.js";
var K = Object.create;
var U = Object.defineProperty;
var Q = Object.getOwnPropertyDescriptor;
var W = Object.getOwnPropertyNames;
var ee = Object.getPrototypeOf,
    re = Object.prototype.hasOwnProperty;

var l = (e, r) => U(e, "name", {
  value: r,
  configurable: !0
});

var te = (e, r) => () => (r || e((r = {
  exports: {}
}).exports, r), r.exports);

var ne = (e, r, t, i) => {
  if (r && typeof r == "object" || typeof r == "function") for (let a of W(r)) !re.call(e, a) && a !== t && U(e, a, {
    get: () => r[a],
    enumerable: !(i = Q(r, a)) || i.enumerable
  });
  return e;
};

var _ = (e, r, t) => (t = e != null ? K(ee(e)) : {}, ne(r || !e || !e.__esModule ? U(t, "default", {
  value: e,
  enumerable: !0
}) : t, e));

var H = te((f, z) => {
  f = z.exports = c;
  var p;
  typeof __Process$ == "object" && __Process$.env && __Process$.env.NODE_DEBUG && /\bsemver\b/i.test(__Process$.env.NODE_DEBUG) ? p = l(function () {
    var e = Array.prototype.slice.call(arguments, 0);
    e.unshift("SEMVER"), console.log.apply(console, e);
  }, "debug") : p = l(function () {}, "debug");
  f.SEMVER_SPEC_VERSION = "2.0.0";
  var $ = 256,
      F = Number.MAX_SAFE_INTEGER || 9007199254740991,
      j = 16,
      I = f.re = [],
      s = f.src = [],
      n = f.tokens = {},
      q = 0;

  function R(e) {
    n[e] = q++;
  }

  l(R, "tok");
  R("NUMERICIDENTIFIER");
  s[n.NUMERICIDENTIFIER] = "0|[1-9]\\d*";
  R("NUMERICIDENTIFIERLOOSE");
  s[n.NUMERICIDENTIFIERLOOSE] = "[0-9]+";
  R("NONNUMERICIDENTIFIER");
  s[n.NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
  R("MAINVERSION");
  s[n.MAINVERSION] = "(" + s[n.NUMERICIDENTIFIER] + ")\\.(" + s[n.NUMERICIDENTIFIER] + ")\\.(" + s[n.NUMERICIDENTIFIER] + ")";
  R("MAINVERSIONLOOSE");
  s[n.MAINVERSIONLOOSE] = "(" + s[n.NUMERICIDENTIFIERLOOSE] + ")\\.(" + s[n.NUMERICIDENTIFIERLOOSE] + ")\\.(" + s[n.NUMERICIDENTIFIERLOOSE] + ")";
  R("PRERELEASEIDENTIFIER");
  s[n.PRERELEASEIDENTIFIER] = "(?:" + s[n.NUMERICIDENTIFIER] + "|" + s[n.NONNUMERICIDENTIFIER] + ")";
  R("PRERELEASEIDENTIFIERLOOSE");
  s[n.PRERELEASEIDENTIFIERLOOSE] = "(?:" + s[n.NUMERICIDENTIFIERLOOSE] + "|" + s[n.NONNUMERICIDENTIFIER] + ")";
  R("PRERELEASE");
  s[n.PRERELEASE] = "(?:-(" + s[n.PRERELEASEIDENTIFIER] + "(?:\\." + s[n.PRERELEASEIDENTIFIER] + ")*))";
  R("PRERELEASELOOSE");
  s[n.PRERELEASELOOSE] = "(?:-?(" + s[n.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + s[n.PRERELEASEIDENTIFIERLOOSE] + ")*))";
  R("BUILDIDENTIFIER");
  s[n.BUILDIDENTIFIER] = "[0-9A-Za-z-]+";
  R("BUILD");
  s[n.BUILD] = "(?:\\+(" + s[n.BUILDIDENTIFIER] + "(?:\\." + s[n.BUILDIDENTIFIER] + ")*))";
  R("FULL");
  R("FULLPLAIN");
  s[n.FULLPLAIN] = "v?" + s[n.MAINVERSION] + s[n.PRERELEASE] + "?" + s[n.BUILD] + "?";
  s[n.FULL] = "^" + s[n.FULLPLAIN] + "$";
  R("LOOSEPLAIN");
  s[n.LOOSEPLAIN] = "[v=\\s]*" + s[n.MAINVERSIONLOOSE] + s[n.PRERELEASELOOSE] + "?" + s[n.BUILD] + "?";
  R("LOOSE");
  s[n.LOOSE] = "^" + s[n.LOOSEPLAIN] + "$";
  R("GTLT");
  s[n.GTLT] = "((?:<|>)?=?)";
  R("XRANGEIDENTIFIERLOOSE");
  s[n.XRANGEIDENTIFIERLOOSE] = s[n.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*";
  R("XRANGEIDENTIFIER");
  s[n.XRANGEIDENTIFIER] = s[n.NUMERICIDENTIFIER] + "|x|X|\\*";
  R("XRANGEPLAIN");
  s[n.XRANGEPLAIN] = "[v=\\s]*(" + s[n.XRANGEIDENTIFIER] + ")(?:\\.(" + s[n.XRANGEIDENTIFIER] + ")(?:\\.(" + s[n.XRANGEIDENTIFIER] + ")(?:" + s[n.PRERELEASE] + ")?" + s[n.BUILD] + "?)?)?";
  R("XRANGEPLAINLOOSE");
  s[n.XRANGEPLAINLOOSE] = "[v=\\s]*(" + s[n.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + s[n.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + s[n.XRANGEIDENTIFIERLOOSE] + ")(?:" + s[n.PRERELEASELOOSE] + ")?" + s[n.BUILD] + "?)?)?";
  R("XRANGE");
  s[n.XRANGE] = "^" + s[n.GTLT] + "\\s*" + s[n.XRANGEPLAIN] + "$";
  R("XRANGELOOSE");
  s[n.XRANGELOOSE] = "^" + s[n.GTLT] + "\\s*" + s[n.XRANGEPLAINLOOSE] + "$";
  R("COERCE");
  s[n.COERCE] = "(^|[^\\d])(\\d{1," + j + "})(?:\\.(\\d{1," + j + "}))?(?:\\.(\\d{1," + j + "}))?(?:$|[^\\d])";
  R("COERCERTL");
  I[n.COERCERTL] = new RegExp(s[n.COERCE], "g");
  R("LONETILDE");
  s[n.LONETILDE] = "(?:~>?)";
  R("TILDETRIM");
  s[n.TILDETRIM] = "(\\s*)" + s[n.LONETILDE] + "\\s+";
  I[n.TILDETRIM] = new RegExp(s[n.TILDETRIM], "g");
  var ie = "$1~";
  R("TILDE");
  s[n.TILDE] = "^" + s[n.LONETILDE] + s[n.XRANGEPLAIN] + "$";
  R("TILDELOOSE");
  s[n.TILDELOOSE] = "^" + s[n.LONETILDE] + s[n.XRANGEPLAINLOOSE] + "$";
  R("LONECARET");
  s[n.LONECARET] = "(?:\\^)";
  R("CARETTRIM");
  s[n.CARETTRIM] = "(\\s*)" + s[n.LONECARET] + "\\s+";
  I[n.CARETTRIM] = new RegExp(s[n.CARETTRIM], "g");
  var se = "$1^";
  R("CARET");
  s[n.CARET] = "^" + s[n.LONECARET] + s[n.XRANGEPLAIN] + "$";
  R("CARETLOOSE");
  s[n.CARETLOOSE] = "^" + s[n.LONECARET] + s[n.XRANGEPLAINLOOSE] + "$";
  R("COMPARATORLOOSE");
  s[n.COMPARATORLOOSE] = "^" + s[n.GTLT] + "\\s*(" + s[n.LOOSEPLAIN] + ")$|^$";
  R("COMPARATOR");
  s[n.COMPARATOR] = "^" + s[n.GTLT] + "\\s*(" + s[n.FULLPLAIN] + ")$|^$";
  R("COMPARATORTRIM");
  s[n.COMPARATORTRIM] = "(\\s*)" + s[n.GTLT] + "\\s*(" + s[n.LOOSEPLAIN] + "|" + s[n.XRANGEPLAIN] + ")";
  I[n.COMPARATORTRIM] = new RegExp(s[n.COMPARATORTRIM], "g");
  var ae = "$1$2$3";
  R("HYPHENRANGE");
  s[n.HYPHENRANGE] = "^\\s*(" + s[n.XRANGEPLAIN] + ")\\s+-\\s+(" + s[n.XRANGEPLAIN] + ")\\s*$";
  R("HYPHENRANGELOOSE");
  s[n.HYPHENRANGELOOSE] = "^\\s*(" + s[n.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + s[n.XRANGEPLAINLOOSE] + ")\\s*$";
  R("STAR");
  s[n.STAR] = "(<|>)?=?\\s*\\*";

  for (C = 0; C < q; C++) p(C, s[C]), I[C] || (I[C] = new RegExp(s[C]));

  var C;
  f.parse = D;

  function D(e, r) {
    if ((!r || typeof r != "object") && (r = {
      loose: !!r,
      includePrerelease: !1
    }), e instanceof c) return e;
    if (typeof e != "string" || e.length > $) return null;
    var t = r.loose ? I[n.LOOSE] : I[n.FULL];
    if (!t.test(e)) return null;

    try {
      return new c(e, r);
    } catch {
      return null;
    }
  }

  l(D, "parse");
  f.valid = Ee;

  function Ee(e, r) {
    var t = D(e, r);
    return t ? t.version : null;
  }

  l(Ee, "valid");
  f.clean = ue;

  function ue(e, r) {
    var t = D(e.trim().replace(/^[=v]+/, ""), r);
    return t ? t.version : null;
  }

  l(ue, "clean");
  f.SemVer = c;

  function c(e, r) {
    if ((!r || typeof r != "object") && (r = {
      loose: !!r,
      includePrerelease: !1
    }), e instanceof c) {
      if (e.loose === r.loose) return e;
      e = e.version;
    } else if (typeof e != "string") throw new TypeError("Invalid Version: " + e);

    if (e.length > $) throw new TypeError("version is longer than " + $ + " characters");
    if (!(this instanceof c)) return new c(e, r);
    p("SemVer", e, r), this.options = r, this.loose = !!r.loose;
    var t = e.trim().match(r.loose ? I[n.LOOSE] : I[n.FULL]);
    if (!t) throw new TypeError("Invalid Version: " + e);
    if (this.raw = e, this.major = +t[1], this.minor = +t[2], this.patch = +t[3], this.major > F || this.major < 0) throw new TypeError("Invalid major version");
    if (this.minor > F || this.minor < 0) throw new TypeError("Invalid minor version");
    if (this.patch > F || this.patch < 0) throw new TypeError("Invalid patch version");
    t[4] ? this.prerelease = t[4].split(".").map(function (i) {
      if (/^[0-9]+$/.test(i)) {
        var a = +i;
        if (a >= 0 && a < F) return a;
      }

      return i;
    }) : this.prerelease = [], this.build = t[5] ? t[5].split(".") : [], this.format();
  }

  l(c, "SemVer");

  c.prototype.format = function () {
    return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version;
  };

  c.prototype.toString = function () {
    return this.version;
  };

  c.prototype.compare = function (e) {
    return p("SemVer.compare", this.version, this.options, e), e instanceof c || (e = new c(e, this.options)), this.compareMain(e) || this.comparePre(e);
  };

  c.prototype.compareMain = function (e) {
    return e instanceof c || (e = new c(e, this.options)), w(this.major, e.major) || w(this.minor, e.minor) || w(this.patch, e.patch);
  };

  c.prototype.comparePre = function (e) {
    if (e instanceof c || (e = new c(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
    if (!this.prerelease.length && e.prerelease.length) return 1;
    if (!this.prerelease.length && !e.prerelease.length) return 0;
    var r = 0;

    do {
      var t = this.prerelease[r],
          i = e.prerelease[r];
      if (p("prerelease compare", r, t, i), t === void 0 && i === void 0) return 0;
      if (i === void 0) return 1;
      if (t === void 0) return -1;
      if (t === i) continue;
      return w(t, i);
    } while (++r);
  };

  c.prototype.compareBuild = function (e) {
    e instanceof c || (e = new c(e, this.options));
    var r = 0;

    do {
      var t = this.build[r],
          i = e.build[r];
      if (p("prerelease compare", r, t, i), t === void 0 && i === void 0) return 0;
      if (i === void 0) return 1;
      if (t === void 0) return -1;
      if (t === i) continue;
      return w(t, i);
    } while (++r);
  };

  c.prototype.inc = function (e, r) {
    switch (e) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", r);
        break;

      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", r);
        break;

      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", r), this.inc("pre", r);
        break;

      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", r), this.inc("pre", r);
        break;

      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;

      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;

      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;

      case "pre":
        if (this.prerelease.length === 0) this.prerelease = [0];else {
          for (var t = this.prerelease.length; --t >= 0;) typeof this.prerelease[t] == "number" && (this.prerelease[t]++, t = -2);

          t === -1 && this.prerelease.push(0);
        }
        r && (this.prerelease[0] === r ? isNaN(this.prerelease[1]) && (this.prerelease = [r, 0]) : this.prerelease = [r, 0]);
        break;

      default:
        throw new Error("invalid increment argument: " + e);
    }

    return this.format(), this.raw = this.version, this;
  };

  f.inc = le;

  function le(e, r, t, i) {
    typeof t == "string" && (i = t, t = void 0);

    try {
      return new c(e, t).inc(r, i).version;
    } catch {
      return null;
    }
  }

  l(le, "inc");
  f.diff = fe;

  function fe(e, r) {
    if (V(e, r)) return null;
    var t = D(e),
        i = D(r),
        a = "";

    if (t.prerelease.length || i.prerelease.length) {
      a = "pre";
      var E = "prerelease";
    }

    for (var u in t) if ((u === "major" || u === "minor" || u === "patch") && t[u] !== i[u]) return a + u;

    return E;
  }

  l(fe, "diff");
  f.compareIdentifiers = w;
  var b = /^[0-9]+$/;

  function w(e, r) {
    var t = b.test(e),
        i = b.test(r);
    return t && i && (e = +e, r = +r), e === r ? 0 : t && !i ? -1 : i && !t ? 1 : e < r ? -1 : 1;
  }

  l(w, "compareIdentifiers");
  f.rcompareIdentifiers = oe;

  function oe(e, r) {
    return w(r, e);
  }

  l(oe, "rcompareIdentifiers");
  f.major = ce;

  function ce(e, r) {
    return new c(e, r).major;
  }

  l(ce, "major");
  f.minor = Re;

  function Re(e, r) {
    return new c(e, r).minor;
  }

  l(Re, "minor");
  f.patch = he;

  function he(e, r) {
    return new c(e, r).patch;
  }

  l(he, "patch");
  f.compare = m;

  function m(e, r, t) {
    return new c(e, t).compare(new c(r, t));
  }

  l(m, "compare");
  f.compareLoose = Ie;

  function Ie(e, r) {
    return m(e, r, !0);
  }

  l(Ie, "compareLoose");
  f.compareBuild = pe;

  function pe(e, r, t) {
    var i = new c(e, t),
        a = new c(r, t);
    return i.compare(a) || i.compareBuild(a);
  }

  l(pe, "compareBuild");
  f.rcompare = Oe;

  function Oe(e, r, t) {
    return m(r, e, t);
  }

  l(Oe, "rcompare");
  f.sort = Ne;

  function Ne(e, r) {
    return e.sort(function (t, i) {
      return f.compareBuild(t, i, r);
    });
  }

  l(Ne, "sort");
  f.rsort = Le;

  function Le(e, r) {
    return e.sort(function (t, i) {
      return f.compareBuild(i, t, r);
    });
  }

  l(Le, "rsort");
  f.gt = y;

  function y(e, r, t) {
    return m(e, r, t) > 0;
  }

  l(y, "gt");
  f.lt = G;

  function G(e, r, t) {
    return m(e, r, t) < 0;
  }

  l(G, "lt");
  f.eq = V;

  function V(e, r, t) {
    return m(e, r, t) === 0;
  }

  l(V, "eq");
  f.neq = Y;

  function Y(e, r, t) {
    return m(e, r, t) !== 0;
  }

  l(Y, "neq");
  f.gte = x;

  function x(e, r, t) {
    return m(e, r, t) >= 0;
  }

  l(x, "gte");
  f.lte = B;

  function B(e, r, t) {
    return m(e, r, t) <= 0;
  }

  l(B, "lte");
  f.cmp = g;

  function g(e, r, t, i) {
    switch (r) {
      case "===":
        return typeof e == "object" && (e = e.version), typeof t == "object" && (t = t.version), e === t;

      case "!==":
        return typeof e == "object" && (e = e.version), typeof t == "object" && (t = t.version), e !== t;

      case "":
      case "=":
      case "==":
        return V(e, t, i);

      case "!=":
        return Y(e, t, i);

      case ">":
        return y(e, t, i);

      case ">=":
        return x(e, t, i);

      case "<":
        return G(e, t, i);

      case "<=":
        return B(e, t, i);

      default:
        throw new TypeError("Invalid operator: " + r);
    }
  }

  l(g, "cmp");
  f.Comparator = A;

  function A(e, r) {
    if ((!r || typeof r != "object") && (r = {
      loose: !!r,
      includePrerelease: !1
    }), e instanceof A) {
      if (e.loose === !!r.loose) return e;
      e = e.value;
    }

    if (!(this instanceof A)) return new A(e, r);
    p("comparator", e, r), this.options = r, this.loose = !!r.loose, this.parse(e), this.semver === P ? this.value = "" : this.value = this.operator + this.semver.version, p("comp", this);
  }

  l(A, "Comparator");
  var P = {};

  A.prototype.parse = function (e) {
    var r = this.options.loose ? I[n.COMPARATORLOOSE] : I[n.COMPARATOR],
        t = e.match(r);
    if (!t) throw new TypeError("Invalid comparator: " + e);
    this.operator = t[1] !== void 0 ? t[1] : "", this.operator === "=" && (this.operator = ""), t[2] ? this.semver = new c(t[2], this.options.loose) : this.semver = P;
  };

  A.prototype.toString = function () {
    return this.value;
  };

  A.prototype.test = function (e) {
    if (p("Comparator.test", e, this.options.loose), this.semver === P || e === P) return !0;
    if (typeof e == "string") try {
      e = new c(e, this.options);
    } catch {
      return !1;
    }
    return g(e, this.operator, this.semver, this.options);
  };

  A.prototype.intersects = function (e, r) {
    if (!(e instanceof A)) throw new TypeError("a Comparator is required");
    (!r || typeof r != "object") && (r = {
      loose: !!r,
      includePrerelease: !1
    });
    var t;
    if (this.operator === "") return this.value === "" ? !0 : (t = new O(e.value, r), X(this.value, t, r));
    if (e.operator === "") return e.value === "" ? !0 : (t = new O(this.value, r), X(e.semver, t, r));
    var i = (this.operator === ">=" || this.operator === ">") && (e.operator === ">=" || e.operator === ">"),
        a = (this.operator === "<=" || this.operator === "<") && (e.operator === "<=" || e.operator === "<"),
        E = this.semver.version === e.semver.version,
        u = (this.operator === ">=" || this.operator === "<=") && (e.operator === ">=" || e.operator === "<="),
        h = g(this.semver, "<", e.semver, r) && (this.operator === ">=" || this.operator === ">") && (e.operator === "<=" || e.operator === "<"),
        o = g(this.semver, ">", e.semver, r) && (this.operator === "<=" || this.operator === "<") && (e.operator === ">=" || e.operator === ">");
    return i || a || E && u || h || o;
  };

  f.Range = O;

  function O(e, r) {
    if ((!r || typeof r != "object") && (r = {
      loose: !!r,
      includePrerelease: !1
    }), e instanceof O) return e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease ? e : new O(e.raw, r);
    if (e instanceof A) return new O(e.value, r);
    if (!(this instanceof O)) return new O(e, r);
    if (this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease, this.raw = e, this.set = e.split(/\s*\|\|\s*/).map(function (t) {
      return this.parseRange(t.trim());
    }, this).filter(function (t) {
      return t.length;
    }), !this.set.length) throw new TypeError("Invalid SemVer Range: " + e);
    this.format();
  }

  l(O, "Range");

  O.prototype.format = function () {
    return this.range = this.set.map(function (e) {
      return e.join(" ").trim();
    }).join("||").trim(), this.range;
  };

  O.prototype.toString = function () {
    return this.range;
  };

  O.prototype.parseRange = function (e) {
    var r = this.options.loose;
    e = e.trim();
    var t = r ? I[n.HYPHENRANGELOOSE] : I[n.HYPHENRANGE];
    e = e.replace(t, Pe), p("hyphen replace", e), e = e.replace(I[n.COMPARATORTRIM], ae), p("comparator trim", e, I[n.COMPARATORTRIM]), e = e.replace(I[n.TILDETRIM], ie), e = e.replace(I[n.CARETTRIM], se), e = e.split(/\s+/).join(" ");
    var i = r ? I[n.COMPARATORLOOSE] : I[n.COMPARATOR],
        a = e.split(" ").map(function (E) {
      return Ae(E, this.options);
    }, this).join(" ").split(/\s+/);
    return this.options.loose && (a = a.filter(function (E) {
      return !!E.match(i);
    })), a = a.map(function (E) {
      return new A(E, this.options);
    }, this), a;
  };

  O.prototype.intersects = function (e, r) {
    if (!(e instanceof O)) throw new TypeError("a Range is required");
    return this.set.some(function (t) {
      return k(t, r) && e.set.some(function (i) {
        return k(i, r) && t.every(function (a) {
          return i.every(function (E) {
            return a.intersects(E, r);
          });
        });
      });
    });
  };

  function k(e, r) {
    for (var t = !0, i = e.slice(), a = i.pop(); t && i.length;) t = i.every(function (E) {
      return a.intersects(E, r);
    }), a = i.pop();

    return t;
  }

  l(k, "isSatisfiable");
  f.toComparators = Te;

  function Te(e, r) {
    return new O(e, r).set.map(function (t) {
      return t.map(function (i) {
        return i.value;
      }).join(" ").trim().split(" ");
    });
  }

  l(Te, "toComparators");

  function Ae(e, r) {
    return p("comp", e, r), e = me(e, r), p("caret", e), e = ve(e, r), p("tildes", e), e = Ce(e, r), p("xrange", e), e = De(e, r), p("stars", e), e;
  }

  l(Ae, "parseComparator");

  function N(e) {
    return !e || e.toLowerCase() === "x" || e === "*";
  }

  l(N, "isX");

  function ve(e, r) {
    return e.trim().split(/\s+/).map(function (t) {
      return Se(t, r);
    }).join(" ");
  }

  l(ve, "replaceTildes");

  function Se(e, r) {
    var t = r.loose ? I[n.TILDELOOSE] : I[n.TILDE];
    return e.replace(t, function (i, a, E, u, h) {
      p("tilde", e, i, a, E, u, h);
      var o;
      return N(a) ? o = "" : N(E) ? o = ">=" + a + ".0.0 <" + (+a + 1) + ".0.0" : N(u) ? o = ">=" + a + "." + E + ".0 <" + a + "." + (+E + 1) + ".0" : h ? (p("replaceTilde pr", h), o = ">=" + a + "." + E + "." + u + "-" + h + " <" + a + "." + (+E + 1) + ".0") : o = ">=" + a + "." + E + "." + u + " <" + a + "." + (+E + 1) + ".0", p("tilde return", o), o;
    });
  }

  l(Se, "replaceTilde");

  function me(e, r) {
    return e.trim().split(/\s+/).map(function (t) {
      return de(t, r);
    }).join(" ");
  }

  l(me, "replaceCarets");

  function de(e, r) {
    p("caret", e, r);
    var t = r.loose ? I[n.CARETLOOSE] : I[n.CARET];
    return e.replace(t, function (i, a, E, u, h) {
      p("caret", e, i, a, E, u, h);
      var o;
      return N(a) ? o = "" : N(E) ? o = ">=" + a + ".0.0 <" + (+a + 1) + ".0.0" : N(u) ? a === "0" ? o = ">=" + a + "." + E + ".0 <" + a + "." + (+E + 1) + ".0" : o = ">=" + a + "." + E + ".0 <" + (+a + 1) + ".0.0" : h ? (p("replaceCaret pr", h), a === "0" ? E === "0" ? o = ">=" + a + "." + E + "." + u + "-" + h + " <" + a + "." + E + "." + (+u + 1) : o = ">=" + a + "." + E + "." + u + "-" + h + " <" + a + "." + (+E + 1) + ".0" : o = ">=" + a + "." + E + "." + u + "-" + h + " <" + (+a + 1) + ".0.0") : (p("no pr"), a === "0" ? E === "0" ? o = ">=" + a + "." + E + "." + u + " <" + a + "." + E + "." + (+u + 1) : o = ">=" + a + "." + E + "." + u + " <" + a + "." + (+E + 1) + ".0" : o = ">=" + a + "." + E + "." + u + " <" + (+a + 1) + ".0.0"), p("caret return", o), o;
    });
  }

  l(de, "replaceCaret");

  function Ce(e, r) {
    return p("replaceXRanges", e, r), e.split(/\s+/).map(function (t) {
      return we(t, r);
    }).join(" ");
  }

  l(Ce, "replaceXRanges");

  function we(e, r) {
    e = e.trim();
    var t = r.loose ? I[n.XRANGELOOSE] : I[n.XRANGE];
    return e.replace(t, function (i, a, E, u, h, o) {
      p("xRange", e, i, a, E, u, h, o);
      var v = N(E),
          S = v || N(u),
          T = S || N(h),
          L = T;
      return a === "=" && L && (a = ""), o = r.includePrerelease ? "-0" : "", v ? a === ">" || a === "<" ? i = "<0.0.0-0" : i = "*" : a && L ? (S && (u = 0), h = 0, a === ">" ? (a = ">=", S ? (E = +E + 1, u = 0, h = 0) : (u = +u + 1, h = 0)) : a === "<=" && (a = "<", S ? E = +E + 1 : u = +u + 1), i = a + E + "." + u + "." + h + o) : S ? i = ">=" + E + ".0.0" + o + " <" + (+E + 1) + ".0.0" + o : T && (i = ">=" + E + "." + u + ".0" + o + " <" + E + "." + (+u + 1) + ".0" + o), p("xRange return", i), i;
    });
  }

  l(we, "replaceXRange");

  function De(e, r) {
    return p("replaceStars", e, r), e.trim().replace(I[n.STAR], "");
  }

  l(De, "replaceStars");

  function Pe(e, r, t, i, a, E, u, h, o, v, S, T, L) {
    return N(t) ? r = "" : N(i) ? r = ">=" + t + ".0.0" : N(a) ? r = ">=" + t + "." + i + ".0" : r = ">=" + r, N(o) ? h = "" : N(v) ? h = "<" + (+o + 1) + ".0.0" : N(S) ? h = "<" + o + "." + (+v + 1) + ".0" : T ? h = "<=" + o + "." + v + "." + S + "-" + T : h = "<=" + h, (r + " " + h).trim();
  }

  l(Pe, "hyphenReplace");

  O.prototype.test = function (e) {
    if (!e) return !1;
    if (typeof e == "string") try {
      e = new c(e, this.options);
    } catch {
      return !1;
    }

    for (var r = 0; r < this.set.length; r++) if (ye(this.set[r], e, this.options)) return !0;

    return !1;
  };

  function ye(e, r, t) {
    for (var i = 0; i < e.length; i++) if (!e[i].test(r)) return !1;

    if (r.prerelease.length && !t.includePrerelease) {
      for (i = 0; i < e.length; i++) if (p(e[i].semver), e[i].semver !== P && e[i].semver.prerelease.length > 0) {
        var a = e[i].semver;
        if (a.major === r.major && a.minor === r.minor && a.patch === r.patch) return !0;
      }

      return !1;
    }

    return !0;
  }

  l(ye, "testSet");
  f.satisfies = X;

  function X(e, r, t) {
    try {
      r = new O(r, t);
    } catch {
      return !1;
    }

    return r.test(e);
  }

  l(X, "satisfies");
  f.maxSatisfying = Fe;

  function Fe(e, r, t) {
    var i = null,
        a = null;

    try {
      var E = new O(r, t);
    } catch {
      return null;
    }

    return e.forEach(function (u) {
      E.test(u) && (!i || a.compare(u) === -1) && (i = u, a = new c(i, t));
    }), i;
  }

  l(Fe, "maxSatisfying");
  f.minSatisfying = Ge;

  function Ge(e, r, t) {
    var i = null,
        a = null;

    try {
      var E = new O(r, t);
    } catch {
      return null;
    }

    return e.forEach(function (u) {
      E.test(u) && (!i || a.compare(u) === 1) && (i = u, a = new c(i, t));
    }), i;
  }

  l(Ge, "minSatisfying");
  f.minVersion = ge;

  function ge(e, r) {
    e = new O(e, r);
    var t = new c("0.0.0");
    if (e.test(t) || (t = new c("0.0.0-0"), e.test(t))) return t;
    t = null;

    for (var i = 0; i < e.set.length; ++i) {
      var a = e.set[i];
      a.forEach(function (E) {
        var u = new c(E.semver.version);

        switch (E.operator) {
          case ">":
            u.prerelease.length === 0 ? u.patch++ : u.prerelease.push(0), u.raw = u.format();

          case "":
          case ">=":
            (!t || y(t, u)) && (t = u);
            break;

          case "<":
          case "<=":
            break;

          default:
            throw new Error("Unexpected operation: " + E.operator);
        }
      });
    }

    return t && e.test(t) ? t : null;
  }

  l(ge, "minVersion");
  f.validRange = Xe;

  function Xe(e, r) {
    try {
      return new O(e, r).range || "*";
    } catch {
      return null;
    }
  }

  l(Xe, "validRange");
  f.ltr = Ue;

  function Ue(e, r, t) {
    return M(e, r, "<", t);
  }

  l(Ue, "ltr");
  f.gtr = je;

  function je(e, r, t) {
    return M(e, r, ">", t);
  }

  l(je, "gtr");
  f.outside = M;

  function M(e, r, t, i) {
    e = new c(e, i), r = new O(r, i);
    var a, E, u, h, o;

    switch (t) {
      case ">":
        a = y, E = B, u = G, h = ">", o = ">=";
        break;

      case "<":
        a = G, E = x, u = y, h = "<", o = "<=";
        break;

      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }

    if (X(e, r, i)) return !1;

    for (var v = 0; v < r.set.length; ++v) {
      var S = r.set[v],
          T = null,
          L = null;
      if (S.forEach(function (d) {
        d.semver === P && (d = new A(">=0.0.0")), T = T || d, L = L || d, a(d.semver, T.semver, i) ? T = d : u(d.semver, L.semver, i) && (L = d);
      }), T.operator === h || T.operator === o || (!L.operator || L.operator === h) && E(e, L.semver)) return !1;
      if (L.operator === o && u(e, L.semver)) return !1;
    }

    return !0;
  }

  l(M, "outside");
  f.prerelease = $e;

  function $e(e, r) {
    var t = D(e, r);
    return t && t.prerelease.length ? t.prerelease : null;
  }

  l($e, "prerelease");
  f.intersects = Ve;

  function Ve(e, r, t) {
    return e = new O(e, t), r = new O(r, t), e.intersects(r);
  }

  l(Ve, "intersects");
  f.coerce = xe;

  function xe(e, r) {
    if (e instanceof c) return e;
    if (typeof e == "number" && (e = String(e)), typeof e != "string") return null;
    r = r || {};
    var t = null;
    if (!r.rtl) t = e.match(I[n.COERCE]);else {
      for (var i; (i = I[n.COERCERTL].exec(e)) && (!t || t.index + t[0].length !== e.length);) (!t || i.index + i[0].length !== t.index + t[0].length) && (t = i), I[n.COERCERTL].lastIndex = i.index + i[1].length + i[2].length;

      I[n.COERCERTL].lastIndex = -1;
    }
    return t === null ? null : D(t[2] + "." + (t[3] || "0") + "." + (t[4] || "0"), r);
  }

  l(xe, "coerce");
});

var Z = _(H()),
    J = _(H()),
    {
  SEMVER_SPEC_VERSION: _e,
  parse: be,
  valid: ke,
  clean: qe,
  SemVer: Ye,
  inc: ze,
  diff: Ze,
  compareIdentifiers: Je,
  rcompareIdentifiers: Ke,
  major: Qe,
  minor: We,
  patch: er,
  compare: rr,
  compareLoose: tr,
  compareBuild: nr,
  rcompare: ir,
  sort: sr,
  rsort: ar,
  gt: Er,
  lt: ur,
  eq: lr,
  neq: fr,
  gte: or,
  lte: cr,
  cmp: Rr,
  Comparator: hr,
  Range: Ir,
  toComparators: pr,
  satisfies: Or,
  maxSatisfying: Nr,
  minSatisfying: Lr,
  minVersion: Tr,
  validRange: Ar,
  ltr: vr,
  gtr: Sr,
  outside: mr,
  prerelease: dr,
  intersects: Cr,
  coerce: wr
} = J,
    {
  default: Be,
  ...Me
} = J,
    Dr = Z.default ?? Be ?? Me;

export { hr as Comparator, Ir as Range, _e as SEMVER_SPEC_VERSION, Ye as SemVer, qe as clean, Rr as cmp, wr as coerce, rr as compare, nr as compareBuild, Je as compareIdentifiers, tr as compareLoose, Dr as default, Ze as diff, lr as eq, Er as gt, or as gte, Sr as gtr, ze as inc, Cr as intersects, ur as lt, cr as lte, vr as ltr, Qe as major, Nr as maxSatisfying, Lr as minSatisfying, Tr as minVersion, We as minor, fr as neq, mr as outside, be as parse, er as patch, dr as prerelease, ir as rcompare, Ke as rcompareIdentifiers, ar as rsort, Or as satisfies, sr as sort, pr as toComparators, ke as valid, Ar as validRange };