/* esm.sh - esbuild bundle(browserslist@4.20.3) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v85/node_process.js";
import __node_releases_data_release_schedule_release_schedule_json$ from "/transpiled/https://esm.sh/v85/node-releases@2.0.5/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/data/release-schedule/release-schedule.json.js";
import { agents as __caniuse_lite_dist_unpacker_agents$agents } from "/transpiled/https://esm.sh/v85/caniuse-lite@1.0.30001346/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/dist/unpacker/agents.js";
import __node_releases_data_processed_envs_json$ from "/transpiled/https://esm.sh/v85/node-releases@2.0.5/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/data/processed/envs.json.js";
import __electron_to_chromium_versions$ from "/transpiled/https://esm.sh/v85/electron-to-chromium@1.4.146/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/versions.js";
import __path$ from "/transpiled/https://esm.sh/v85/path-browserify@1.0.1/esnext/path-browserify.bundle.js";
var he = Object.create;
var I = Object.defineProperty;
var we = Object.getOwnPropertyDescriptor;
var xe = Object.getOwnPropertyNames;
var be = Object.getPrototypeOf,
    $e = Object.prototype.hasOwnProperty;

var a = (e, r) => I(e, "name", {
  value: r,
  configurable: !0
}),
    k = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (r, n) => (typeof require != "undefined" ? require : r)[n]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var N = (e, r) => () => (r || e((r = {
  exports: {}
}).exports, r), r.exports);

var ye = (e, r, n, t) => {
  if (r && typeof r == "object" || typeof r == "function") for (let s of xe(r)) !$e.call(e, s) && s !== n && I(e, s, {
    get: () => r[s],
    enumerable: !(t = we(r, s)) || t.enumerable
  });
  return e;
};

var M = (e, r, n) => (n = e != null ? he(be(e)) : {}, ye(r || !e || !e.__esModule ? I(n, "default", {
  value: e,
  enumerable: !0
}) : n, e));

var R = N((Ve, H) => {
  function T(e) {
    this.name = "BrowserslistError", this.message = e, this.browserslist = !0, Error.captureStackTrace && Error.captureStackTrace(this, T);
  }

  a(T, "BrowserslistError");
  T.prototype = Error.prototype;
  H.exports = T;
});
var K = N((Ie, J) => {
  var E = R();

  function U() {}

  a(U, "noop");
  J.exports = {
    loadQueries: a(function () {
      throw new E("Sharable configs are not supported in client-side build of Browserslist");
    }, "loadQueries"),
    getStat: a(function (r) {
      return r.stats;
    }, "getStat"),
    loadConfig: a(function (r) {
      if (r.config) throw new E("Browserslist config are not supported in client-side build");
    }, "loadConfig"),
    loadCountry: a(function () {
      throw new E("Country statistics are not supported in client-side build of Browserslist");
    }, "loadCountry"),
    loadFeature: a(function () {
      throw new E("Supports queries are not available in client-side build of Browserslist");
    }, "loadFeature"),
    currentNode: a(function (r, n) {
      return r(["maintained node versions"], n)[0];
    }, "currentNode"),
    parseConfig: U,
    readConfig: U,
    findConfig: U,
    clearCaches: U,
    oldDataWarning: U
  };
});
var Y = N((Ne, ge) => {
  var Ce = __node_releases_data_processed_envs_json$,
      h = __caniuse_lite_dist_unpacker_agents$agents,
      Q = __node_releases_data_release_schedule_release_schedule_json$,
      A = __path$,
      g = __electron_to_chromium_versions$,
      p = R(),
      d = K(),
      ke = 365.259641 * 24 * 60 * 60 * 1e3,
      ae = 37,
      W = 1,
      ue = 2;

  function fe(e, r) {
    return (e + ".").indexOf(r + ".") === 0;
  }

  a(fe, "isVersionsMatch");

  function Ue(e) {
    var r = e.slice(1);
    return o.nodeVersions.some(function (n) {
      return fe(n, r);
    });
  }

  a(Ue, "isEolReleased");

  function P(e) {
    return e.filter(function (r) {
      return typeof r == "string";
    });
  }

  a(P, "normalize");

  function j(e) {
    var r = e;
    return e.split(".").length === 3 && (r = e.split(".").slice(0, -1).join(".")), r;
  }

  a(j, "normalizeElectron");

  function x(e) {
    return a(function (n) {
      return e + " " + n;
    }, "mapName");
  }

  a(x, "nameMapper");

  function X(e) {
    return parseInt(e.split(".")[0]);
  }

  a(X, "getMajor");

  function D(e, r) {
    if (e.length === 0) return [];
    var n = ce(e.map(X)),
        t = n[n.length - r];
    if (!t) return e;

    for (var s = [], i = e.length - 1; i >= 0 && !(t > X(e[i])); i--) s.unshift(e[i]);

    return s;
  }

  a(D, "getMajorVersions");

  function ce(e) {
    for (var r = [], n = 0; n < e.length; n++) r.indexOf(e[n]) === -1 && r.push(e[n]);

    return r;
  }

  a(ce, "uniq");

  function B(e, r, n) {
    for (var t in n) e[r + " " + t] = n[t];
  }

  a(B, "fillUsage");

  function Z(e, r) {
    return r = parseFloat(r), e === ">" ? function (n) {
      return parseFloat(n) > r;
    } : e === ">=" ? function (n) {
      return parseFloat(n) >= r;
    } : e === "<" ? function (n) {
      return parseFloat(n) < r;
    } : function (n) {
      return parseFloat(n) <= r;
    };
  }

  a(Z, "generateFilter");

  function Oe(e, r) {
    return r = r.split(".").map(b), r[1] = r[1] || 0, r[2] = r[2] || 0, e === ">" ? function (n) {
      return n = n.split(".").map(b), O(n, r) > 0;
    } : e === ">=" ? function (n) {
      return n = n.split(".").map(b), O(n, r) >= 0;
    } : e === "<" ? function (n) {
      return n = n.split(".").map(b), O(r, n) > 0;
    } : function (n) {
      return n = n.split(".").map(b), O(r, n) >= 0;
    };
  }

  a(Oe, "generateSemverFilter");

  function b(e) {
    return parseInt(e);
  }

  a(b, "parseSimpleInt");

  function F(e, r) {
    return e < r ? -1 : e > r ? 1 : 0;
  }

  a(F, "compare");

  function O(e, r) {
    return F(parseInt(e[0]), parseInt(r[0])) || F(parseInt(e[1] || "0"), parseInt(r[1] || "0")) || F(parseInt(e[2] || "0"), parseInt(r[2] || "0"));
  }

  a(O, "compareSemver");

  function ee(e, r) {
    switch (r = r.split(".").map(b), typeof r[1] > "u" && (r[1] = "x"), e) {
      case "<=":
        return function (n) {
          return n = n.split(".").map(b), re(n, r) <= 0;
        };

      case ">=":
      default:
        return function (n) {
          return n = n.split(".").map(b), re(n, r) >= 0;
        };
    }
  }

  a(ee, "semverFilterLoose");

  function re(e, r) {
    return e[0] !== r[0] ? e[0] < r[0] ? -1 : 1 : r[1] === "x" ? 0 : e[1] !== r[1] ? e[1] < r[1] ? -1 : 1 : 0;
  }

  a(re, "compareSemverLoose");

  function Ee(e, r) {
    return e.versions.indexOf(r) !== -1 ? r : o.versionAliases[e.name][r] ? o.versionAliases[e.name][r] : !1;
  }

  a(Ee, "resolveVersion");

  function S(e, r) {
    var n = Ee(e, r);
    return n || (e.versions.length === 1 ? e.versions[0] : !1);
  }

  a(S, "normalizeVersion");

  function le(e, r) {
    return e = e / 1e3, Object.keys(h).reduce(function (n, t) {
      var s = $(t, r);
      if (!s) return n;
      var i = Object.keys(s.releaseDate).filter(function (u) {
        var f = s.releaseDate[u];
        return f !== null && f >= e;
      });
      return n.concat(i.map(x(s.name)));
    }, []);
  }

  a(le, "filterByYear");

  function ne(e) {
    return {
      name: e.name,
      versions: e.versions,
      released: e.released,
      releaseDate: e.releaseDate
    };
  }

  a(ne, "cloneData");

  function je(e, r) {
    e.versions = e.versions.map(function (s) {
      return r[s] || s;
    }), e.released = e.versions.map(function (s) {
      return r[s] || s;
    });
    var n = {};

    for (var t in e.releaseDate) n[r[t] || t] = e.releaseDate[t];

    return e.releaseDate = n, e;
  }

  a(je, "mapVersions");

  function $(e, r) {
    if (e = e.toLowerCase(), e = o.aliases[e] || e, r.mobileToDesktop && o.desktopNames[e]) {
      var n = o.data[o.desktopNames[e]];
      if (e === "android") return De(ne(o.data[e]), n);
      var t = ne(n);
      return t.name = e, e === "op_mob" && (t = je(t, {
        "10.0-10.1": "10"
      })), t;
    }

    return o.data[e];
  }

  a($, "byName");

  function te(e, r) {
    var n = ae,
        t = r[r.length - 1];
    return e.filter(function (s) {
      return /^(?:[2-4]\.|[34]$)/.test(s);
    }).concat(r.slice(n - t - 1));
  }

  a(te, "normalizeAndroidVersions");

  function De(e, r) {
    return e.released = te(e.released, r.released), e.versions = te(e.versions, r.versions), e;
  }

  a(De, "normalizeAndroidData");

  function y(e, r) {
    var n = $(e, r);
    if (!n) throw new p("Unknown browser " + e);
    return n;
  }

  a(y, "checkName");

  function de(e) {
    return new p("Unknown browser query `" + e + "`. Maybe you are using old Browserslist or made typo in query.");
  }

  a(de, "unknownQuery");

  function _(e, r, n) {
    if (n.mobileToDesktop) return e;
    var t = o.data.android.released,
        s = t[t.length - 1],
        i = s - ae - r;
    return i > 0 ? e.slice(-1) : e.slice(i - 1);
  }

  a(_, "filterAndroid");

  function C(e, r) {
    return Array.isArray(e) ? e = pe(e.map(se)) : e = se(e), e.reduce(function (n, t, s) {
      var i = t.queryString,
          u = i.indexOf("not ") === 0;

      if (u) {
        if (s === 0) throw new p("Write any browsers query (for instance, `defaults`) before `" + i + "`");
        i = i.slice(4);
      }

      for (var f = 0; f < oe.length; f++) {
        var c = oe[f],
            l = i.match(c.regexp);

        if (l) {
          var m = [r].concat(l.slice(1)),
              w = c.select.apply(o, m).map(function (v) {
            var V = v.split(" ");
            return V[1] === "0" ? V[0] + " " + $(V[0], r).versions[0] : v;
          });

          switch (t.type) {
            case ue:
              return u ? n.filter(function (v) {
                return w.indexOf(v) === -1;
              }) : n.filter(function (v) {
                return w.indexOf(v) !== -1;
              });

            case W:
            default:
              if (u) {
                var G = {};
                return w.forEach(function (v) {
                  G[v] = !0;
                }), n.filter(function (v) {
                  return !G[v];
                });
              }

              return n.concat(w);
          }
        }
      }

      throw de(i);
    }, []);
  }

  a(C, "resolve");
  var L = {};

  function o(e, r) {
    if (typeof r > "u" && (r = {}), typeof r.path > "u" && (r.path = A.resolve ? A.resolve(".") : "."), typeof e > "u" || e === null) {
      var n = o.loadConfig(r);
      n ? e = n : e = o.defaults;
    }

    if (!(typeof e == "string" || Array.isArray(e))) throw new p("Browser queries must be an array or string. Got " + typeof e + ".");
    var t = {
      ignoreUnknownVersions: r.ignoreUnknownVersions,
      dangerousExtend: r.dangerousExtend,
      mobileToDesktop: r.mobileToDesktop,
      path: r.path,
      env: r.env
    };
    d.oldDataWarning(o.data);
    var s = d.getStat(r, o.data);

    if (s) {
      t.customUsage = {};

      for (var i in s) B(t.customUsage, i, s[i]);
    }

    var u = JSON.stringify([e, t]);
    if (L[u]) return L[u];
    var f = ce(C(e, t)).sort(function (c, l) {
      if (c = c.split(" "), l = l.split(" "), c[0] === l[0]) {
        var m = c[1].split("-")[0],
            w = l[1].split("-")[0];
        return O(w.split("."), m.split("."));
      } else return F(c[0], l[0]);
    });
    return __Process$.env.BROWSERSLIST_DISABLE_CACHE || (L[u] = f), f;
  }

  a(o, "browserslist");

  function se(e) {
    var r = [];

    do e = Se(e, r); while (e);

    return r;
  }

  a(se, "parse");

  function Se(e, r) {
    var n = /^(?:,\s*|\s+or\s+)(.*)/i,
        t = /^\s+and\s+(.*)/i;
    return _e(e, function (s, i, u) {
      return t.test(s) ? (r.unshift({
        type: ue,
        queryString: s.match(t)[1]
      }), !0) : n.test(s) ? (r.unshift({
        type: W,
        queryString: s.match(n)[1]
      }), !0) : i === u ? (r.unshift({
        type: W,
        queryString: s.trim()
      }), !0) : !1;
    });
  }

  a(Se, "doMatch");

  function _e(e, r) {
    for (var n = 1, t = e.length; n <= t; n++) {
      var s = e.substr(-n, n);
      if (r(s, n, t)) return e.slice(0, -n);
    }

    return "";
  }

  a(_e, "find");

  function pe(e) {
    return Array.isArray(e) ? e.reduce(function (r, n) {
      return r.concat(pe(n));
    }, []) : [e];
  }

  a(pe, "flatten");
  o.cache = {};
  o.data = {};
  o.usage = {
    global: {},
    custom: null
  };
  o.defaults = ["> 0.5%", "last 2 versions", "Firefox ESR", "not dead"];
  o.aliases = {
    fx: "firefox",
    ff: "firefox",
    ios: "ios_saf",
    explorer: "ie",
    blackberry: "bb",
    explorermobile: "ie_mob",
    operamini: "op_mini",
    operamobile: "op_mob",
    chromeandroid: "and_chr",
    firefoxandroid: "and_ff",
    ucandroid: "and_uc",
    qqandroid: "and_qq"
  };
  o.desktopNames = {
    and_chr: "chrome",
    and_ff: "firefox",
    ie_mob: "ie",
    op_mob: "opera",
    android: "chrome"
  };
  o.versionAliases = {};
  o.clearCaches = d.clearCaches;
  o.parseConfig = d.parseConfig;
  o.readConfig = d.readConfig;
  o.findConfig = d.findConfig;
  o.loadConfig = d.loadConfig;

  o.coverage = function (e, r) {
    var n;
    if (typeof r > "u") n = o.usage.global;else if (r === "my stats") {
      var t = {};
      t.path = A.resolve ? A.resolve(".") : ".";
      var s = d.getStat(t);
      if (!s) throw new p("Custom usage statistics was not provided");
      n = {};

      for (var i in s) B(n, i, s[i]);
    } else if (typeof r == "string") r.length > 2 ? r = r.toLowerCase() : r = r.toUpperCase(), d.loadCountry(o.usage, r, o.data), n = o.usage[r];else {
      "dataByBrowser" in r && (r = r.dataByBrowser), n = {};

      for (var u in r) for (var f in r[u]) n[u + " " + f] = r[u][f];
    }
    return e.reduce(function (c, l) {
      var m = n[l];
      return m === void 0 && (m = n[l.replace(/ \S+$/, " 0")]), c + (m || 0);
    }, 0);
  };

  function q(e, r) {
    var n = o.nodeVersions.filter(function (t) {
      return fe(t, r);
    });

    if (n.length === 0) {
      if (e.ignoreUnknownVersions) return [];
      throw new p("Unknown version " + r + " of Node.js");
    }

    return ["node " + n[n.length - 1]];
  }

  a(q, "nodeQuery");

  function z(e, r, n, t) {
    return r = parseInt(r), n = parseInt(n || "01") - 1, t = parseInt(t || "01"), le(Date.UTC(r, n, t, 0, 0, 0), e);
  }

  a(z, "sinceQuery");

  function ie(e, r, n) {
    r = parseFloat(r);
    var t = o.usage.global;
    if (n) if (n.match(/^my\s+stats$/i)) {
      if (!e.customUsage) throw new p("Custom usage statistics was not provided");
      t = e.customUsage;
    } else {
      var s;
      n.length === 2 ? s = n.toUpperCase() : s = n.toLowerCase(), d.loadCountry(o.usage, s, o.data), t = o.usage[s];
    }

    for (var i = Object.keys(t).sort(function (m, w) {
      return t[w] - t[m];
    }), u = 0, f = [], c, l = 0; l < i.length && (c = i[l], !(t[c] === 0 || (u += t[c], f.push(c), u >= r))); l++);

    return f;
  }

  a(ie, "coverQuery");
  var oe = [{
    regexp: /^last\s+(\d+)\s+major\s+versions?$/i,
    select: function (e, r) {
      return Object.keys(h).reduce(function (n, t) {
        var s = $(t, e);
        if (!s) return n;
        var i = D(s.released, r);
        return i = i.map(x(s.name)), s.name === "android" && (i = _(i, r, e)), n.concat(i);
      }, []);
    }
  }, {
    regexp: /^last\s+(\d+)\s+versions?$/i,
    select: function (e, r) {
      return Object.keys(h).reduce(function (n, t) {
        var s = $(t, e);
        if (!s) return n;
        var i = s.released.slice(-r);
        return i = i.map(x(s.name)), s.name === "android" && (i = _(i, r, e)), n.concat(i);
      }, []);
    }
  }, {
    regexp: /^last\s+(\d+)\s+electron\s+major\s+versions?$/i,
    select: function (e, r) {
      var n = D(Object.keys(g), r);
      return n.map(function (t) {
        return "chrome " + g[t];
      });
    }
  }, {
    regexp: /^last\s+(\d+)\s+node\s+major\s+versions?$/i,
    select: function (e, r) {
      return D(o.nodeVersions, r).map(function (n) {
        return "node " + n;
      });
    }
  }, {
    regexp: /^last\s+(\d+)\s+(\w+)\s+major\s+versions?$/i,
    select: function (e, r, n) {
      var t = y(n, e),
          s = D(t.released, r),
          i = s.map(x(t.name));
      return t.name === "android" && (i = _(i, r, e)), i;
    }
  }, {
    regexp: /^last\s+(\d+)\s+electron\s+versions?$/i,
    select: function (e, r) {
      return Object.keys(g).slice(-r).map(function (n) {
        return "chrome " + g[n];
      });
    }
  }, {
    regexp: /^last\s+(\d+)\s+node\s+versions?$/i,
    select: function (e, r) {
      return o.nodeVersions.slice(-r).map(function (n) {
        return "node " + n;
      });
    }
  }, {
    regexp: /^last\s+(\d+)\s+(\w+)\s+versions?$/i,
    select: function (e, r, n) {
      var t = y(n, e),
          s = t.released.slice(-r).map(x(t.name));
      return t.name === "android" && (s = _(s, r, e)), s;
    }
  }, {
    regexp: /^unreleased\s+versions$/i,
    select: function (e) {
      return Object.keys(h).reduce(function (r, n) {
        var t = $(n, e);
        if (!t) return r;
        var s = t.versions.filter(function (i) {
          return t.released.indexOf(i) === -1;
        });
        return s = s.map(x(t.name)), r.concat(s);
      }, []);
    }
  }, {
    regexp: /^unreleased\s+electron\s+versions?$/i,
    select: function () {
      return [];
    }
  }, {
    regexp: /^unreleased\s+(\w+)\s+versions?$/i,
    select: function (e, r) {
      var n = y(r, e);
      return n.versions.filter(function (t) {
        return n.released.indexOf(t) === -1;
      }).map(x(n.name));
    }
  }, {
    regexp: /^last\s+(\d*.?\d+)\s+years?$/i,
    select: function (e, r) {
      return le(Date.now() - ke * r, e);
    }
  }, {
    regexp: /^since (\d+)$/i,
    select: z
  }, {
    regexp: /^since (\d+)-(\d+)$/i,
    select: z
  }, {
    regexp: /^since (\d+)-(\d+)-(\d+)$/i,
    select: z
  }, {
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%$/,
    select: function (e, r, n) {
      n = parseFloat(n);
      var t = o.usage.global;
      return Object.keys(t).reduce(function (s, i) {
        return r === ">" ? t[i] > n && s.push(i) : r === "<" ? t[i] < n && s.push(i) : r === "<=" ? t[i] <= n && s.push(i) : t[i] >= n && s.push(i), s;
      }, []);
    }
  }, {
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+my\s+stats$/,
    select: function (e, r, n) {
      if (n = parseFloat(n), !e.customUsage) throw new p("Custom usage statistics was not provided");
      var t = e.customUsage;
      return Object.keys(t).reduce(function (s, i) {
        var u = t[i];
        return u == null || (r === ">" ? u > n && s.push(i) : r === "<" ? u < n && s.push(i) : r === "<=" ? u <= n && s.push(i) : u >= n && s.push(i)), s;
      }, []);
    }
  }, {
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/,
    select: function (e, r, n, t) {
      n = parseFloat(n);
      var s = d.loadStat(e, t, o.data);

      if (s) {
        e.customUsage = {};

        for (var i in s) B(e.customUsage, i, s[i]);
      }

      if (!e.customUsage) throw new p("Custom usage statistics was not provided");
      var u = e.customUsage;
      return Object.keys(u).reduce(function (f, c) {
        var l = u[c];
        return l == null || (r === ">" ? l > n && f.push(c) : r === "<" ? l < n && f.push(c) : r === "<=" ? l <= n && f.push(c) : l >= n && f.push(c)), f;
      }, []);
    }
  }, {
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+((alt-)?\w\w)$/,
    select: function (e, r, n, t) {
      n = parseFloat(n), t.length === 2 ? t = t.toUpperCase() : t = t.toLowerCase(), d.loadCountry(o.usage, t, o.data);
      var s = o.usage[t];
      return Object.keys(s).reduce(function (i, u) {
        var f = s[u];
        return f == null || (r === ">" ? f > n && i.push(u) : r === "<" ? f < n && i.push(u) : r === "<=" ? f <= n && i.push(u) : f >= n && i.push(u)), i;
      }, []);
    }
  }, {
    regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%$/i,
    select: ie
  }, {
    regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(my\s+stats|(alt-)?\w\w)$/i,
    select: ie
  }, {
    regexp: /^supports\s+([\w-]+)$/,
    select: function (e, r) {
      d.loadFeature(o.cache, r);
      var n = o.cache[r];
      return Object.keys(n).reduce(function (t, s) {
        var i = n[s];
        return (i.indexOf("y") >= 0 || i.indexOf("a") >= 0) && t.push(s), t;
      }, []);
    }
  }, {
    regexp: /^electron\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (e, r, n) {
      var t = j(r),
          s = j(n);
      if (!g[t]) throw new p("Unknown version " + r + " of electron");
      if (!g[s]) throw new p("Unknown version " + n + " of electron");
      return r = parseFloat(r), n = parseFloat(n), Object.keys(g).filter(function (i) {
        var u = parseFloat(i);
        return u >= r && u <= n;
      }).map(function (i) {
        return "chrome " + g[i];
      });
    }
  }, {
    regexp: /^node\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (e, r, n) {
      return o.nodeVersions.filter(ee(">=", r)).filter(ee("<=", n)).map(function (t) {
        return "node " + t;
      });
    }
  }, {
    regexp: /^(\w+)\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (e, r, n, t) {
      var s = y(r, e);
      n = parseFloat(S(s, n) || n), t = parseFloat(S(s, t) || t);

      function i(u) {
        var f = parseFloat(u);
        return f >= n && f <= t;
      }

      return a(i, "filter"), s.released.filter(i).map(x(s.name));
    }
  }, {
    regexp: /^electron\s*(>=?|<=?)\s*([\d.]+)$/i,
    select: function (e, r, n) {
      var t = j(n);
      return Object.keys(g).filter(Z(r, t)).map(function (s) {
        return "chrome " + g[s];
      });
    }
  }, {
    regexp: /^node\s*(>=?|<=?)\s*([\d.]+)$/i,
    select: function (e, r, n) {
      return o.nodeVersions.filter(Oe(r, n)).map(function (t) {
        return "node " + t;
      });
    }
  }, {
    regexp: /^(\w+)\s*(>=?|<=?)\s*([\d.]+)$/,
    select: function (e, r, n, t) {
      var s = y(r, e),
          i = o.versionAliases[s.name][t];
      return i && (t = i), s.released.filter(Z(n, t)).map(function (u) {
        return s.name + " " + u;
      });
    }
  }, {
    regexp: /^(firefox|ff|fx)\s+esr$/i,
    select: function () {
      return ["firefox 91"];
    }
  }, {
    regexp: /(operamini|op_mini)\s+all/i,
    select: function () {
      return ["op_mini all"];
    }
  }, {
    regexp: /^electron\s+([\d.]+)$/i,
    select: function (e, r) {
      var n = j(r),
          t = g[n];
      if (!t) throw new p("Unknown version " + r + " of electron");
      return ["chrome " + t];
    }
  }, {
    regexp: /^node\s+(\d+)$/i,
    select: q
  }, {
    regexp: /^node\s+(\d+\.\d+)$/i,
    select: q
  }, {
    regexp: /^node\s+(\d+\.\d+\.\d+)$/i,
    select: q
  }, {
    regexp: /^current\s+node$/i,
    select: function (e) {
      return [d.currentNode(C, e)];
    }
  }, {
    regexp: /^maintained\s+node\s+versions$/i,
    select: function (e) {
      var r = Date.now(),
          n = Object.keys(Q).filter(function (t) {
        return r < Date.parse(Q[t].end) && r > Date.parse(Q[t].start) && Ue(t);
      }).map(function (t) {
        return "node " + t.slice(1);
      });
      return C(n, e);
    }
  }, {
    regexp: /^phantomjs\s+1.9$/i,
    select: function () {
      return ["safari 5"];
    }
  }, {
    regexp: /^phantomjs\s+2.1$/i,
    select: function () {
      return ["safari 6"];
    }
  }, {
    regexp: /^(\w+)\s+(tp|[\d.]+)$/i,
    select: function (e, r, n) {
      /^tp$/i.test(n) && (n = "TP");
      var t = y(r, e),
          s = S(t, n);
      if (s) n = s;else if (n.indexOf(".") === -1 ? s = n + ".0" : s = n.replace(/\.0$/, ""), s = S(t, s), s) n = s;else {
        if (e.ignoreUnknownVersions) return [];
        throw new p("Unknown version " + n + " of " + r);
      }
      return [t.name + " " + n];
    }
  }, {
    regexp: /^browserslist config$/i,
    select: function (e) {
      return o(void 0, e);
    }
  }, {
    regexp: /^extends (.+)$/i,
    select: function (e, r) {
      return C(d.loadQueries(e, r), e);
    }
  }, {
    regexp: /^defaults$/i,
    select: function (e) {
      return C(o.defaults, e);
    }
  }, {
    regexp: /^dead$/i,
    select: function (e) {
      var r = ["Baidu >= 0", "ie <= 10", "ie_mob <= 11", "bb <= 10", "op_mob <= 12.1", "samsung 4"];
      return C(r, e);
    }
  }, {
    regexp: /^(\w+)$/i,
    select: function (e, r) {
      throw $(r, e) ? new p("Specify versions in Browserslist query for browser " + r) : de(r);
    }
  }];

  (function () {
    for (var e in h) {
      var r = h[e];
      o.data[e] = {
        name: e,
        versions: P(h[e].versions),
        released: P(h[e].versions.slice(0, -3)),
        releaseDate: h[e].release_date
      }, B(o.usage.global, e, r.usage_global), o.versionAliases[e] = {};

      for (var n = 0; n < r.versions.length; n++) {
        var t = r.versions[n];
        if (!!t && t.indexOf("-") !== -1) for (var s = t.split("-"), i = 0; i < s.length; i++) o.versionAliases[e][s[i]] = t;
      }
    }

    o.versionAliases.op_mob["59"] = "58", o.nodeVersions = Ce.map(function (u) {
      return u.version;
    });
  })();

  ge.exports = o;
});
var ve = M(Y()),
    me = M(Y()),
    {
  cache: Te,
  data: Re,
  usage: Qe,
  defaults: Le,
  aliases: qe,
  desktopNames: ze,
  versionAliases: We,
  clearCaches: Ye,
  parseConfig: Ge,
  readConfig: Me,
  findConfig: He,
  loadConfig: Je,
  coverage: Ke
} = me,
    {
  default: Fe,
  ...Ae
} = me,
    Pe = ve.default ?? Fe ?? Ae;
export { qe as aliases, Te as cache, Ye as clearCaches, Ke as coverage, Re as data, Pe as default, Le as defaults, ze as desktopNames, He as findConfig, Je as loadConfig, Ge as parseConfig, Me as readConfig, Qe as usage, We as versionAliases };