/* esm.sh - esbuild bundle(semver@6.3.0) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v96/node_process.js";
var Z = Object.create;
var B = Object.defineProperty;
var J = Object.getOwnPropertyDescriptor;
var K = Object.getOwnPropertyNames;
var Q = Object.getPrototypeOf,
    W = Object.prototype.hasOwnProperty;

var ee = (e, r) => () => (r || e((r = {
  exports: {}
}).exports, r), r.exports);

var re = (e, r, t, i) => {
  if (r && typeof r == "object" || typeof r == "function") for (let a of K(r)) !W.call(e, a) && a !== t && B(e, a, {
    get: () => r[a],
    enumerable: !(i = J(r, a)) || i.enumerable
  });
  return e;
};

var te = (e, r, t) => (t = e != null ? Z(Q(e)) : {}, re(r || !e || !e.__esModule ? B(t, "default", {
  value: e,
  enumerable: !0
}) : t, e));

var q = ee((l, k) => {
  l = k.exports = o;
  var I;
  typeof __Process$ == "object" && __Process$.env && __Process$.env.NODE_DEBUG && /\bsemver\b/i.test(__Process$.env.NODE_DEBUG) ? I = function () {
    var e = Array.prototype.slice.call(arguments, 0);
    e.unshift("SEMVER"), console.log.apply(console, e);
  } : I = function () {};
  l.SEMVER_SPEC_VERSION = "2.0.0";
  var U = 256,
      y = Number.MAX_SAFE_INTEGER || 9007199254740991,
      X = 16,
      h = l.re = [],
      s = l.src = [],
      n = l.tokens = {},
      H = 0;

  function c(e) {
    n[e] = H++;
  }

  c("NUMERICIDENTIFIER");
  s[n.NUMERICIDENTIFIER] = "0|[1-9]\\d*";
  c("NUMERICIDENTIFIERLOOSE");
  s[n.NUMERICIDENTIFIERLOOSE] = "[0-9]+";
  c("NONNUMERICIDENTIFIER");
  s[n.NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
  c("MAINVERSION");
  s[n.MAINVERSION] = "(" + s[n.NUMERICIDENTIFIER] + ")\\.(" + s[n.NUMERICIDENTIFIER] + ")\\.(" + s[n.NUMERICIDENTIFIER] + ")";
  c("MAINVERSIONLOOSE");
  s[n.MAINVERSIONLOOSE] = "(" + s[n.NUMERICIDENTIFIERLOOSE] + ")\\.(" + s[n.NUMERICIDENTIFIERLOOSE] + ")\\.(" + s[n.NUMERICIDENTIFIERLOOSE] + ")";
  c("PRERELEASEIDENTIFIER");
  s[n.PRERELEASEIDENTIFIER] = "(?:" + s[n.NUMERICIDENTIFIER] + "|" + s[n.NONNUMERICIDENTIFIER] + ")";
  c("PRERELEASEIDENTIFIERLOOSE");
  s[n.PRERELEASEIDENTIFIERLOOSE] = "(?:" + s[n.NUMERICIDENTIFIERLOOSE] + "|" + s[n.NONNUMERICIDENTIFIER] + ")";
  c("PRERELEASE");
  s[n.PRERELEASE] = "(?:-(" + s[n.PRERELEASEIDENTIFIER] + "(?:\\." + s[n.PRERELEASEIDENTIFIER] + ")*))";
  c("PRERELEASELOOSE");
  s[n.PRERELEASELOOSE] = "(?:-?(" + s[n.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + s[n.PRERELEASEIDENTIFIERLOOSE] + ")*))";
  c("BUILDIDENTIFIER");
  s[n.BUILDIDENTIFIER] = "[0-9A-Za-z-]+";
  c("BUILD");
  s[n.BUILD] = "(?:\\+(" + s[n.BUILDIDENTIFIER] + "(?:\\." + s[n.BUILDIDENTIFIER] + ")*))";
  c("FULL");
  c("FULLPLAIN");
  s[n.FULLPLAIN] = "v?" + s[n.MAINVERSION] + s[n.PRERELEASE] + "?" + s[n.BUILD] + "?";
  s[n.FULL] = "^" + s[n.FULLPLAIN] + "$";
  c("LOOSEPLAIN");
  s[n.LOOSEPLAIN] = "[v=\\s]*" + s[n.MAINVERSIONLOOSE] + s[n.PRERELEASELOOSE] + "?" + s[n.BUILD] + "?";
  c("LOOSE");
  s[n.LOOSE] = "^" + s[n.LOOSEPLAIN] + "$";
  c("GTLT");
  s[n.GTLT] = "((?:<|>)?=?)";
  c("XRANGEIDENTIFIERLOOSE");
  s[n.XRANGEIDENTIFIERLOOSE] = s[n.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*";
  c("XRANGEIDENTIFIER");
  s[n.XRANGEIDENTIFIER] = s[n.NUMERICIDENTIFIER] + "|x|X|\\*";
  c("XRANGEPLAIN");
  s[n.XRANGEPLAIN] = "[v=\\s]*(" + s[n.XRANGEIDENTIFIER] + ")(?:\\.(" + s[n.XRANGEIDENTIFIER] + ")(?:\\.(" + s[n.XRANGEIDENTIFIER] + ")(?:" + s[n.PRERELEASE] + ")?" + s[n.BUILD] + "?)?)?";
  c("XRANGEPLAINLOOSE");
  s[n.XRANGEPLAINLOOSE] = "[v=\\s]*(" + s[n.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + s[n.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + s[n.XRANGEIDENTIFIERLOOSE] + ")(?:" + s[n.PRERELEASELOOSE] + ")?" + s[n.BUILD] + "?)?)?";
  c("XRANGE");
  s[n.XRANGE] = "^" + s[n.GTLT] + "\\s*" + s[n.XRANGEPLAIN] + "$";
  c("XRANGELOOSE");
  s[n.XRANGELOOSE] = "^" + s[n.GTLT] + "\\s*" + s[n.XRANGEPLAINLOOSE] + "$";
  c("COERCE");
  s[n.COERCE] = "(^|[^\\d])(\\d{1," + X + "})(?:\\.(\\d{1," + X + "}))?(?:\\.(\\d{1," + X + "}))?(?:$|[^\\d])";
  c("COERCERTL");
  h[n.COERCERTL] = new RegExp(s[n.COERCE], "g");
  c("LONETILDE");
  s[n.LONETILDE] = "(?:~>?)";
  c("TILDETRIM");
  s[n.TILDETRIM] = "(\\s*)" + s[n.LONETILDE] + "\\s+";
  h[n.TILDETRIM] = new RegExp(s[n.TILDETRIM], "g");
  var ne = "$1~";
  c("TILDE");
  s[n.TILDE] = "^" + s[n.LONETILDE] + s[n.XRANGEPLAIN] + "$";
  c("TILDELOOSE");
  s[n.TILDELOOSE] = "^" + s[n.LONETILDE] + s[n.XRANGEPLAINLOOSE] + "$";
  c("LONECARET");
  s[n.LONECARET] = "(?:\\^)";
  c("CARETTRIM");
  s[n.CARETTRIM] = "(\\s*)" + s[n.LONECARET] + "\\s+";
  h[n.CARETTRIM] = new RegExp(s[n.CARETTRIM], "g");
  var ie = "$1^";
  c("CARET");
  s[n.CARET] = "^" + s[n.LONECARET] + s[n.XRANGEPLAIN] + "$";
  c("CARETLOOSE");
  s[n.CARETLOOSE] = "^" + s[n.LONECARET] + s[n.XRANGEPLAINLOOSE] + "$";
  c("COMPARATORLOOSE");
  s[n.COMPARATORLOOSE] = "^" + s[n.GTLT] + "\\s*(" + s[n.LOOSEPLAIN] + ")$|^$";
  c("COMPARATOR");
  s[n.COMPARATOR] = "^" + s[n.GTLT] + "\\s*(" + s[n.FULLPLAIN] + ")$|^$";
  c("COMPARATORTRIM");
  s[n.COMPARATORTRIM] = "(\\s*)" + s[n.GTLT] + "\\s*(" + s[n.LOOSEPLAIN] + "|" + s[n.XRANGEPLAIN] + ")";
  h[n.COMPARATORTRIM] = new RegExp(s[n.COMPARATORTRIM], "g");
  var se = "$1$2$3";
  c("HYPHENRANGE");
  s[n.HYPHENRANGE] = "^\\s*(" + s[n.XRANGEPLAIN] + ")\\s+-\\s+(" + s[n.XRANGEPLAIN] + ")\\s*$";
  c("HYPHENRANGELOOSE");
  s[n.HYPHENRANGELOOSE] = "^\\s*(" + s[n.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + s[n.XRANGEPLAINLOOSE] + ")\\s*$";
  c("STAR");
  s[n.STAR] = "(<|>)?=?\\s*\\*";

  for (d = 0; d < H; d++) I(d, s[d]), h[d] || (h[d] = new RegExp(s[d]));

  var d;
  l.parse = w;

  function w(e, r) {
    if ((!r || typeof r != "object") && (r = {
      loose: !!r,
      includePrerelease: !1
    }), e instanceof o) return e;
    if (typeof e != "string" || e.length > U) return null;
    var t = r.loose ? h[n.LOOSE] : h[n.FULL];
    if (!t.test(e)) return null;

    try {
      return new o(e, r);
    } catch {
      return null;
    }
  }

  l.valid = ae;

  function ae(e, r) {
    var t = w(e, r);
    return t ? t.version : null;
  }

  l.clean = Ee;

  function Ee(e, r) {
    var t = w(e.trim().replace(/^[=v]+/, ""), r);
    return t ? t.version : null;
  }

  l.SemVer = o;

  function o(e, r) {
    if ((!r || typeof r != "object") && (r = {
      loose: !!r,
      includePrerelease: !1
    }), e instanceof o) {
      if (e.loose === r.loose) return e;
      e = e.version;
    } else if (typeof e != "string") throw new TypeError("Invalid Version: " + e);

    if (e.length > U) throw new TypeError("version is longer than " + U + " characters");
    if (!(this instanceof o)) return new o(e, r);
    I("SemVer", e, r), this.options = r, this.loose = !!r.loose;
    var t = e.trim().match(r.loose ? h[n.LOOSE] : h[n.FULL]);
    if (!t) throw new TypeError("Invalid Version: " + e);
    if (this.raw = e, this.major = +t[1], this.minor = +t[2], this.patch = +t[3], this.major > y || this.major < 0) throw new TypeError("Invalid major version");
    if (this.minor > y || this.minor < 0) throw new TypeError("Invalid minor version");
    if (this.patch > y || this.patch < 0) throw new TypeError("Invalid patch version");
    t[4] ? this.prerelease = t[4].split(".").map(function (i) {
      if (/^[0-9]+$/.test(i)) {
        var a = +i;
        if (a >= 0 && a < y) return a;
      }

      return i;
    }) : this.prerelease = [], this.build = t[5] ? t[5].split(".") : [], this.format();
  }

  o.prototype.format = function () {
    return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version;
  };

  o.prototype.toString = function () {
    return this.version;
  };

  o.prototype.compare = function (e) {
    return I("SemVer.compare", this.version, this.options, e), e instanceof o || (e = new o(e, this.options)), this.compareMain(e) || this.comparePre(e);
  };

  o.prototype.compareMain = function (e) {
    return e instanceof o || (e = new o(e, this.options)), C(this.major, e.major) || C(this.minor, e.minor) || C(this.patch, e.patch);
  };

  o.prototype.comparePre = function (e) {
    if (e instanceof o || (e = new o(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
    if (!this.prerelease.length && e.prerelease.length) return 1;
    if (!this.prerelease.length && !e.prerelease.length) return 0;
    var r = 0;

    do {
      var t = this.prerelease[r],
          i = e.prerelease[r];
      if (I("prerelease compare", r, t, i), t === void 0 && i === void 0) return 0;
      if (i === void 0) return 1;
      if (t === void 0) return -1;
      if (t === i) continue;
      return C(t, i);
    } while (++r);
  };

  o.prototype.compareBuild = function (e) {
    e instanceof o || (e = new o(e, this.options));
    var r = 0;

    do {
      var t = this.build[r],
          i = e.build[r];
      if (I("prerelease compare", r, t, i), t === void 0 && i === void 0) return 0;
      if (i === void 0) return 1;
      if (t === void 0) return -1;
      if (t === i) continue;
      return C(t, i);
    } while (++r);
  };

  o.prototype.inc = function (e, r) {
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

  l.inc = ue;

  function ue(e, r, t, i) {
    typeof t == "string" && (i = t, t = void 0);

    try {
      return new o(e, t).inc(r, i).version;
    } catch {
      return null;
    }
  }

  l.diff = le;

  function le(e, r) {
    if (j(e, r)) return null;
    var t = w(e),
        i = w(r),
        a = "";

    if (t.prerelease.length || i.prerelease.length) {
      a = "pre";
      var E = "prerelease";
    }

    for (var u in t) if ((u === "major" || u === "minor" || u === "patch") && t[u] !== i[u]) return a + u;

    return E;
  }

  l.compareIdentifiers = C;
  var M = /^[0-9]+$/;

  function C(e, r) {
    var t = M.test(e),
        i = M.test(r);
    return t && i && (e = +e, r = +r), e === r ? 0 : t && !i ? -1 : i && !t ? 1 : e < r ? -1 : 1;
  }

  l.rcompareIdentifiers = fe;

  function fe(e, r) {
    return C(r, e);
  }

  l.major = oe;

  function oe(e, r) {
    return new o(e, r).major;
  }

  l.minor = ce;

  function ce(e, r) {
    return new o(e, r).minor;
  }

  l.patch = Re;

  function Re(e, r) {
    return new o(e, r).patch;
  }

  l.compare = S;

  function S(e, r, t) {
    return new o(e, t).compare(new o(r, t));
  }

  l.compareLoose = he;

  function he(e, r) {
    return S(e, r, !0);
  }

  l.compareBuild = Ie;

  function Ie(e, r, t) {
    var i = new o(e, t),
        a = new o(r, t);
    return i.compare(a) || i.compareBuild(a);
  }

  l.rcompare = pe;

  function pe(e, r, t) {
    return S(r, e, t);
  }

  l.sort = Oe;

  function Oe(e, r) {
    return e.sort(function (t, i) {
      return l.compareBuild(t, i, r);
    });
  }

  l.rsort = Ne;

  function Ne(e, r) {
    return e.sort(function (t, i) {
      return l.compareBuild(i, t, r);
    });
  }

  l.gt = P;

  function P(e, r, t) {
    return S(e, r, t) > 0;
  }

  l.lt = F;

  function F(e, r, t) {
    return S(e, r, t) < 0;
  }

  l.eq = j;

  function j(e, r, t) {
    return S(e, r, t) === 0;
  }

  l.neq = b;

  function b(e, r, t) {
    return S(e, r, t) !== 0;
  }

  l.gte = V;

  function V(e, r, t) {
    return S(e, r, t) >= 0;
  }

  l.lte = x;

  function x(e, r, t) {
    return S(e, r, t) <= 0;
  }

  l.cmp = G;

  function G(e, r, t, i) {
    switch (r) {
      case "===":
        return typeof e == "object" && (e = e.version), typeof t == "object" && (t = t.version), e === t;

      case "!==":
        return typeof e == "object" && (e = e.version), typeof t == "object" && (t = t.version), e !== t;

      case "":
      case "=":
      case "==":
        return j(e, t, i);

      case "!=":
        return b(e, t, i);

      case ">":
        return P(e, t, i);

      case ">=":
        return V(e, t, i);

      case "<":
        return F(e, t, i);

      case "<=":
        return x(e, t, i);

      default:
        throw new TypeError("Invalid operator: " + r);
    }
  }

  l.Comparator = T;

  function T(e, r) {
    if ((!r || typeof r != "object") && (r = {
      loose: !!r,
      includePrerelease: !1
    }), e instanceof T) {
      if (e.loose === !!r.loose) return e;
      e = e.value;
    }

    if (!(this instanceof T)) return new T(e, r);
    I("comparator", e, r), this.options = r, this.loose = !!r.loose, this.parse(e), this.semver === D ? this.value = "" : this.value = this.operator + this.semver.version, I("comp", this);
  }

  var D = {};

  T.prototype.parse = function (e) {
    var r = this.options.loose ? h[n.COMPARATORLOOSE] : h[n.COMPARATOR],
        t = e.match(r);
    if (!t) throw new TypeError("Invalid comparator: " + e);
    this.operator = t[1] !== void 0 ? t[1] : "", this.operator === "=" && (this.operator = ""), t[2] ? this.semver = new o(t[2], this.options.loose) : this.semver = D;
  };

  T.prototype.toString = function () {
    return this.value;
  };

  T.prototype.test = function (e) {
    if (I("Comparator.test", e, this.options.loose), this.semver === D || e === D) return !0;
    if (typeof e == "string") try {
      e = new o(e, this.options);
    } catch {
      return !1;
    }
    return G(e, this.operator, this.semver, this.options);
  };

  T.prototype.intersects = function (e, r) {
    if (!(e instanceof T)) throw new TypeError("a Comparator is required");
    (!r || typeof r != "object") && (r = {
      loose: !!r,
      includePrerelease: !1
    });
    var t;
    if (this.operator === "") return this.value === "" ? !0 : (t = new p(e.value, r), g(this.value, t, r));
    if (e.operator === "") return e.value === "" ? !0 : (t = new p(this.value, r), g(e.semver, t, r));
    var i = (this.operator === ">=" || this.operator === ">") && (e.operator === ">=" || e.operator === ">"),
        a = (this.operator === "<=" || this.operator === "<") && (e.operator === "<=" || e.operator === "<"),
        E = this.semver.version === e.semver.version,
        u = (this.operator === ">=" || this.operator === "<=") && (e.operator === ">=" || e.operator === "<="),
        R = G(this.semver, "<", e.semver, r) && (this.operator === ">=" || this.operator === ">") && (e.operator === "<=" || e.operator === "<"),
        f = G(this.semver, ">", e.semver, r) && (this.operator === "<=" || this.operator === "<") && (e.operator === ">=" || e.operator === ">");
    return i || a || E && u || R || f;
  };

  l.Range = p;

  function p(e, r) {
    if ((!r || typeof r != "object") && (r = {
      loose: !!r,
      includePrerelease: !1
    }), e instanceof p) return e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease ? e : new p(e.raw, r);
    if (e instanceof T) return new p(e.value, r);
    if (!(this instanceof p)) return new p(e, r);
    if (this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease, this.raw = e, this.set = e.split(/\s*\|\|\s*/).map(function (t) {
      return this.parseRange(t.trim());
    }, this).filter(function (t) {
      return t.length;
    }), !this.set.length) throw new TypeError("Invalid SemVer Range: " + e);
    this.format();
  }

  p.prototype.format = function () {
    return this.range = this.set.map(function (e) {
      return e.join(" ").trim();
    }).join("||").trim(), this.range;
  };

  p.prototype.toString = function () {
    return this.range;
  };

  p.prototype.parseRange = function (e) {
    var r = this.options.loose;
    e = e.trim();
    var t = r ? h[n.HYPHENRANGELOOSE] : h[n.HYPHENRANGE];
    e = e.replace(t, De), I("hyphen replace", e), e = e.replace(h[n.COMPARATORTRIM], se), I("comparator trim", e, h[n.COMPARATORTRIM]), e = e.replace(h[n.TILDETRIM], ne), e = e.replace(h[n.CARETTRIM], ie), e = e.split(/\s+/).join(" ");
    var i = r ? h[n.COMPARATORLOOSE] : h[n.COMPARATOR],
        a = e.split(" ").map(function (E) {
      return Te(E, this.options);
    }, this).join(" ").split(/\s+/);
    return this.options.loose && (a = a.filter(function (E) {
      return !!E.match(i);
    })), a = a.map(function (E) {
      return new T(E, this.options);
    }, this), a;
  };

  p.prototype.intersects = function (e, r) {
    if (!(e instanceof p)) throw new TypeError("a Range is required");
    return this.set.some(function (t) {
      return _(t, r) && e.set.some(function (i) {
        return _(i, r) && t.every(function (a) {
          return i.every(function (E) {
            return a.intersects(E, r);
          });
        });
      });
    });
  };

  function _(e, r) {
    for (var t = !0, i = e.slice(), a = i.pop(); t && i.length;) t = i.every(function (E) {
      return a.intersects(E, r);
    }), a = i.pop();

    return t;
  }

  l.toComparators = Le;

  function Le(e, r) {
    return new p(e, r).set.map(function (t) {
      return t.map(function (i) {
        return i.value;
      }).join(" ").trim().split(" ");
    });
  }

  function Te(e, r) {
    return I("comp", e, r), e = Se(e, r), I("caret", e), e = Ae(e, r), I("tildes", e), e = de(e, r), I("xrange", e), e = we(e, r), I("stars", e), e;
  }

  function O(e) {
    return !e || e.toLowerCase() === "x" || e === "*";
  }

  function Ae(e, r) {
    return e.trim().split(/\s+/).map(function (t) {
      return ve(t, r);
    }).join(" ");
  }

  function ve(e, r) {
    var t = r.loose ? h[n.TILDELOOSE] : h[n.TILDE];
    return e.replace(t, function (i, a, E, u, R) {
      I("tilde", e, i, a, E, u, R);
      var f;
      return O(a) ? f = "" : O(E) ? f = ">=" + a + ".0.0 <" + (+a + 1) + ".0.0" : O(u) ? f = ">=" + a + "." + E + ".0 <" + a + "." + (+E + 1) + ".0" : R ? (I("replaceTilde pr", R), f = ">=" + a + "." + E + "." + u + "-" + R + " <" + a + "." + (+E + 1) + ".0") : f = ">=" + a + "." + E + "." + u + " <" + a + "." + (+E + 1) + ".0", I("tilde return", f), f;
    });
  }

  function Se(e, r) {
    return e.trim().split(/\s+/).map(function (t) {
      return me(t, r);
    }).join(" ");
  }

  function me(e, r) {
    I("caret", e, r);
    var t = r.loose ? h[n.CARETLOOSE] : h[n.CARET];
    return e.replace(t, function (i, a, E, u, R) {
      I("caret", e, i, a, E, u, R);
      var f;
      return O(a) ? f = "" : O(E) ? f = ">=" + a + ".0.0 <" + (+a + 1) + ".0.0" : O(u) ? a === "0" ? f = ">=" + a + "." + E + ".0 <" + a + "." + (+E + 1) + ".0" : f = ">=" + a + "." + E + ".0 <" + (+a + 1) + ".0.0" : R ? (I("replaceCaret pr", R), a === "0" ? E === "0" ? f = ">=" + a + "." + E + "." + u + "-" + R + " <" + a + "." + E + "." + (+u + 1) : f = ">=" + a + "." + E + "." + u + "-" + R + " <" + a + "." + (+E + 1) + ".0" : f = ">=" + a + "." + E + "." + u + "-" + R + " <" + (+a + 1) + ".0.0") : (I("no pr"), a === "0" ? E === "0" ? f = ">=" + a + "." + E + "." + u + " <" + a + "." + E + "." + (+u + 1) : f = ">=" + a + "." + E + "." + u + " <" + a + "." + (+E + 1) + ".0" : f = ">=" + a + "." + E + "." + u + " <" + (+a + 1) + ".0.0"), I("caret return", f), f;
    });
  }

  function de(e, r) {
    return I("replaceXRanges", e, r), e.split(/\s+/).map(function (t) {
      return Ce(t, r);
    }).join(" ");
  }

  function Ce(e, r) {
    e = e.trim();
    var t = r.loose ? h[n.XRANGELOOSE] : h[n.XRANGE];
    return e.replace(t, function (i, a, E, u, R, f) {
      I("xRange", e, i, a, E, u, R, f);
      var A = O(E),
          v = A || O(u),
          L = v || O(R),
          N = L;
      return a === "=" && N && (a = ""), f = r.includePrerelease ? "-0" : "", A ? a === ">" || a === "<" ? i = "<0.0.0-0" : i = "*" : a && N ? (v && (u = 0), R = 0, a === ">" ? (a = ">=", v ? (E = +E + 1, u = 0, R = 0) : (u = +u + 1, R = 0)) : a === "<=" && (a = "<", v ? E = +E + 1 : u = +u + 1), i = a + E + "." + u + "." + R + f) : v ? i = ">=" + E + ".0.0" + f + " <" + (+E + 1) + ".0.0" + f : L && (i = ">=" + E + "." + u + ".0" + f + " <" + E + "." + (+u + 1) + ".0" + f), I("xRange return", i), i;
    });
  }

  function we(e, r) {
    return I("replaceStars", e, r), e.trim().replace(h[n.STAR], "");
  }

  function De(e, r, t, i, a, E, u, R, f, A, v, L, N) {
    return O(t) ? r = "" : O(i) ? r = ">=" + t + ".0.0" : O(a) ? r = ">=" + t + "." + i + ".0" : r = ">=" + r, O(f) ? R = "" : O(A) ? R = "<" + (+f + 1) + ".0.0" : O(v) ? R = "<" + f + "." + (+A + 1) + ".0" : L ? R = "<=" + f + "." + A + "." + v + "-" + L : R = "<=" + R, (r + " " + R).trim();
  }

  p.prototype.test = function (e) {
    if (!e) return !1;
    if (typeof e == "string") try {
      e = new o(e, this.options);
    } catch {
      return !1;
    }

    for (var r = 0; r < this.set.length; r++) if (Pe(this.set[r], e, this.options)) return !0;

    return !1;
  };

  function Pe(e, r, t) {
    for (var i = 0; i < e.length; i++) if (!e[i].test(r)) return !1;

    if (r.prerelease.length && !t.includePrerelease) {
      for (i = 0; i < e.length; i++) if (I(e[i].semver), e[i].semver !== D && e[i].semver.prerelease.length > 0) {
        var a = e[i].semver;
        if (a.major === r.major && a.minor === r.minor && a.patch === r.patch) return !0;
      }

      return !1;
    }

    return !0;
  }

  l.satisfies = g;

  function g(e, r, t) {
    try {
      r = new p(r, t);
    } catch {
      return !1;
    }

    return r.test(e);
  }

  l.maxSatisfying = ye;

  function ye(e, r, t) {
    var i = null,
        a = null;

    try {
      var E = new p(r, t);
    } catch {
      return null;
    }

    return e.forEach(function (u) {
      E.test(u) && (!i || a.compare(u) === -1) && (i = u, a = new o(i, t));
    }), i;
  }

  l.minSatisfying = Fe;

  function Fe(e, r, t) {
    var i = null,
        a = null;

    try {
      var E = new p(r, t);
    } catch {
      return null;
    }

    return e.forEach(function (u) {
      E.test(u) && (!i || a.compare(u) === 1) && (i = u, a = new o(i, t));
    }), i;
  }

  l.minVersion = Ge;

  function Ge(e, r) {
    e = new p(e, r);
    var t = new o("0.0.0");
    if (e.test(t) || (t = new o("0.0.0-0"), e.test(t))) return t;
    t = null;

    for (var i = 0; i < e.set.length; ++i) {
      var a = e.set[i];
      a.forEach(function (E) {
        var u = new o(E.semver.version);

        switch (E.operator) {
          case ">":
            u.prerelease.length === 0 ? u.patch++ : u.prerelease.push(0), u.raw = u.format();

          case "":
          case ">=":
            (!t || P(t, u)) && (t = u);
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

  l.validRange = ge;

  function ge(e, r) {
    try {
      return new p(e, r).range || "*";
    } catch {
      return null;
    }
  }

  l.ltr = Xe;

  function Xe(e, r, t) {
    return $(e, r, "<", t);
  }

  l.gtr = Ue;

  function Ue(e, r, t) {
    return $(e, r, ">", t);
  }

  l.outside = $;

  function $(e, r, t, i) {
    e = new o(e, i), r = new p(r, i);
    var a, E, u, R, f;

    switch (t) {
      case ">":
        a = P, E = x, u = F, R = ">", f = ">=";
        break;

      case "<":
        a = F, E = V, u = P, R = "<", f = "<=";
        break;

      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }

    if (g(e, r, i)) return !1;

    for (var A = 0; A < r.set.length; ++A) {
      var v = r.set[A],
          L = null,
          N = null;
      if (v.forEach(function (m) {
        m.semver === D && (m = new T(">=0.0.0")), L = L || m, N = N || m, a(m.semver, L.semver, i) ? L = m : u(m.semver, N.semver, i) && (N = m);
      }), L.operator === R || L.operator === f || (!N.operator || N.operator === R) && E(e, N.semver)) return !1;
      if (N.operator === f && u(e, N.semver)) return !1;
    }

    return !0;
  }

  l.prerelease = je;

  function je(e, r) {
    var t = w(e, r);
    return t && t.prerelease.length ? t.prerelease : null;
  }

  l.intersects = Ve;

  function Ve(e, r, t) {
    return e = new p(e, t), r = new p(r, t), e.intersects(r);
  }

  l.coerce = xe;

  function xe(e, r) {
    if (e instanceof o) return e;
    if (typeof e == "number" && (e = String(e)), typeof e != "string") return null;
    r = r || {};
    var t = null;
    if (!r.rtl) t = e.match(h[n.COERCE]);else {
      for (var i; (i = h[n.COERCERTL].exec(e)) && (!t || t.index + t[0].length !== e.length);) (!t || i.index + i[0].length !== t.index + t[0].length) && (t = i), h[n.COERCERTL].lastIndex = i.index + i[1].length + i[2].length;

      h[n.COERCERTL].lastIndex = -1;
    }
    return t === null ? null : w(t[2] + "." + (t[3] || "0") + "." + (t[4] || "0"), r);
  }
});
var z = te(q()),
    {
  SEMVER_SPEC_VERSION: Me,
  parse: _e,
  valid: He,
  clean: be,
  SemVer: ke,
  inc: qe,
  diff: Ye,
  compareIdentifiers: ze,
  rcompareIdentifiers: Ze,
  major: Je,
  minor: Ke,
  patch: Qe,
  compare: We,
  compareLoose: er,
  compareBuild: rr,
  rcompare: tr,
  sort: nr,
  rsort: ir,
  gt: sr,
  lt: ar,
  eq: Er,
  neq: ur,
  gte: lr,
  lte: fr,
  cmp: or,
  Comparator: cr,
  Range: Rr,
  toComparators: hr,
  satisfies: Ir,
  maxSatisfying: pr,
  minSatisfying: Or,
  minVersion: Nr,
  validRange: Lr,
  ltr: Tr,
  gtr: Ar,
  outside: vr,
  prerelease: Sr,
  intersects: mr,
  coerce: dr
} = z,
    {
  default: Y,
  ...$e
} = z,
    Cr = Y !== void 0 ? Y : $e;
export { cr as Comparator, Rr as Range, Me as SEMVER_SPEC_VERSION, ke as SemVer, be as clean, or as cmp, dr as coerce, We as compare, rr as compareBuild, ze as compareIdentifiers, er as compareLoose, Cr as default, Ye as diff, Er as eq, sr as gt, lr as gte, Ar as gtr, qe as inc, mr as intersects, ar as lt, fr as lte, Tr as ltr, Je as major, pr as maxSatisfying, Or as minSatisfying, Nr as minVersion, Ke as minor, ur as neq, vr as outside, _e as parse, Qe as patch, Sr as prerelease, tr as rcompare, Ze as rcompareIdentifiers, ir as rsort, Ir as satisfies, nr as sort, hr as toComparators, He as valid, Lr as validRange };