/* esm.sh - esbuild bundle(browserslist@4.21.4) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v96/node_process.js";
import __node_releases_data_processed_envs_json$ from "/transpiled/https://esm.sh/v96/node-releases@2.0.6/esnext/data/processed/envs.json.js";
import __electron_to_chromium_versions$ from "/transpiled/https://esm.sh/v96/electron-to-chromium@1.4.268/esnext/versions.js";
import __path$ from "/transpiled/https://esm.sh/v96/path-browserify@1.0.1/esnext/path-browserify.bundle.js";
import __node_releases_data_release_schedule_release_schedule_json$ from "/transpiled/https://esm.sh/v96/node-releases@2.0.6/esnext/data/release-schedule/release-schedule.json.js";
import { agents as __caniuse_lite_dist_unpacker_agents$agents } from "/transpiled/https://esm.sh/v96/caniuse-lite@1.0.30001414/esnext/dist/unpacker/agents.js";
var he = Object.create;
var L = Object.defineProperty;
var we = Object.getOwnPropertyDescriptor;
var ye = Object.getOwnPropertyNames;
var _e = Object.getPrototypeOf,
    xe = Object.prototype.hasOwnProperty;

var x = (r => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(r, {
  get: (e, n) => (typeof require < "u" ? require : e)[n]
}) : r)(function (r) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + r + '" is not supported');
});

var k = (r, e) => () => (e || r((e = {
  exports: {}
}).exports, e), e.exports);

var be = (r, e, n, t) => {
  if (e && typeof e == "object" || typeof e == "function") for (let s of ye(e)) !xe.call(r, s) && s !== n && L(r, s, {
    get: () => e[s],
    enumerable: !(t = we(e, s)) || t.enumerable
  });
  return r;
};

var $e = (r, e, n) => (n = r != null ? he(_e(r)) : {}, be(e || !r || !r.__esModule ? L(n, "default", {
  value: r,
  enumerable: !0
}) : n, r));

var B = k((Ie, q) => {
  function S(r) {
    this.name = "BrowserslistError", this.message = r, this.browserslist = !0, Error.captureStackTrace && Error.captureStackTrace(this, S);
  }

  S.prototype = Error.prototype;
  q.exports = S;
});
var P = k((Ne, W) => {
  var z = /^\s+and\s+(.*)/i,
      M = /^(?:,\s*|\s+or\s+)(.*)/i;

  function G(r) {
    return Array.isArray(r) ? r.reduce(function (e, n) {
      return e.concat(G(n));
    }, []) : [r];
  }

  function ke(r, e) {
    for (var n = 1, t = r.length; n <= t; n++) {
      var s = r.substr(-n, n);
      if (e(s, n, t)) return r.slice(0, -n);
    }

    return "";
  }

  function V(r, e) {
    var n = {
      query: e
    };
    e.indexOf("not ") === 0 && (n.not = !0, e = e.slice(4));

    for (var t in r) {
      var s = r[t],
          i = e.match(s.regexp);

      if (i) {
        n.type = t;

        for (var o = 0; o < s.matches.length; o++) n[s.matches[o]] = i[o + 1];

        return n;
      }
    }

    return n.type = "unknown", n;
  }

  function Ce(r, e, n) {
    var t;
    return ke(e, function (s, i, o) {
      return z.test(s) ? (t = V(r, s.match(z)[1]), t.compose = "and", n.unshift(t), !0) : M.test(s) ? (t = V(r, s.match(M)[1]), t.compose = "or", n.unshift(t), !0) : i === o ? (t = V(r, s.trim()), t.compose = "or", n.unshift(t), !0) : !1;
    });
  }

  W.exports = function (e, n) {
    return Array.isArray(n) || (n = [n]), G(n.map(function (t) {
      var s = [];

      do t = Ce(e, t, s); while (t);

      return s;
    }));
  };
});
var Y = k((Te, X) => {
  var C = B();

  function b() {}

  X.exports = {
    loadQueries: function () {
      throw new C("Sharable configs are not supported in client-side build of Browserslist");
    },
    getStat: function (e) {
      return e.stats;
    },
    loadConfig: function (e) {
      if (e.config) throw new C("Browserslist config are not supported in client-side build");
    },
    loadCountry: function () {
      throw new C("Country statistics are not supported in client-side build of Browserslist");
    },
    loadFeature: function () {
      throw new C("Supports queries are not available in client-side build of Browserslist");
    },
    currentNode: function (e, n) {
      return e(["maintained node versions"], n)[0];
    },
    parseConfig: b,
    readConfig: b,
    findConfig: b,
    clearCaches: b,
    oldDataWarning: b
  };
});
var de = k((Re, pe) => {
  var Oe = __node_releases_data_processed_envs_json$,
      v = __caniuse_lite_dist_unpacker_agents$agents,
      I = __node_releases_data_release_schedule_release_schedule_json$,
      F = __path$,
      d = __electron_to_chromium_versions$,
      l = B(),
      se = P(),
      c = Y(),
      je = 365.259641 * 24 * 60 * 60 * 1e3,
      ie = 37;

  function ae(r, e) {
    return (r + ".").indexOf(e + ".") === 0;
  }

  function Ue(r) {
    var e = r.slice(1);
    return a.nodeVersions.some(function (n) {
      return ae(n, e);
    });
  }

  function H(r) {
    return r.filter(function (e) {
      return typeof e == "string";
    });
  }

  function O(r) {
    var e = r;
    return r.split(".").length === 3 && (e = r.split(".").slice(0, -1).join(".")), e;
  }

  function m(r) {
    return function (n) {
      return r + " " + n;
    };
  }

  function J(r) {
    return parseInt(r.split(".")[0]);
  }

  function j(r, e) {
    if (r.length === 0) return [];
    var n = oe(r.map(J)),
        t = n[n.length - e];
    if (!t) return r;

    for (var s = [], i = r.length - 1; i >= 0 && !(t > J(r[i])); i--) s.unshift(r[i]);

    return s;
  }

  function oe(r) {
    for (var e = [], n = 0; n < r.length; n++) e.indexOf(r[n]) === -1 && e.push(r[n]);

    return e;
  }

  function A(r, e, n) {
    for (var t in n) r[e + " " + t] = n[t];
  }

  function K(r, e) {
    return e = parseFloat(e), r === ">" ? function (n) {
      return parseFloat(n) > e;
    } : r === ">=" ? function (n) {
      return parseFloat(n) >= e;
    } : r === "<" ? function (n) {
      return parseFloat(n) < e;
    } : function (n) {
      return parseFloat(n) <= e;
    };
  }

  function Ee(r, e) {
    return e = e.split(".").map(g), e[1] = e[1] || 0, e[2] = e[2] || 0, r === ">" ? function (n) {
      return n = n.split(".").map(g), $(n, e) > 0;
    } : r === ">=" ? function (n) {
      return n = n.split(".").map(g), $(n, e) >= 0;
    } : r === "<" ? function (n) {
      return n = n.split(".").map(g), $(e, n) > 0;
    } : function (n) {
      return n = n.split(".").map(g), $(e, n) >= 0;
    };
  }

  function g(r) {
    return parseInt(r);
  }

  function D(r, e) {
    return r < e ? -1 : r > e ? 1 : 0;
  }

  function $(r, e) {
    return D(parseInt(r[0]), parseInt(e[0])) || D(parseInt(r[1] || "0"), parseInt(e[1] || "0")) || D(parseInt(r[2] || "0"), parseInt(e[2] || "0"));
  }

  function Z(r, e) {
    switch (e = e.split(".").map(g), typeof e[1] > "u" && (e[1] = "x"), r) {
      case "<=":
        return function (n) {
          return n = n.split(".").map(g), ee(n, e) <= 0;
        };

      case ">=":
      default:
        return function (n) {
          return n = n.split(".").map(g), ee(n, e) >= 0;
        };
    }
  }

  function ee(r, e) {
    return r[0] !== e[0] ? r[0] < e[0] ? -1 : 1 : e[1] === "x" ? 0 : r[1] !== e[1] ? r[1] < e[1] ? -1 : 1 : 0;
  }

  function De(r, e) {
    return r.versions.indexOf(e) !== -1 ? e : a.versionAliases[r.name][e] ? a.versionAliases[r.name][e] : !1;
  }

  function U(r, e) {
    var n = De(r, e);
    return n || (r.versions.length === 1 ? r.versions[0] : !1);
  }

  function ue(r, e) {
    return r = r / 1e3, Object.keys(v).reduce(function (n, t) {
      var s = w(t, e);
      if (!s) return n;
      var i = Object.keys(s.releaseDate).filter(function (o) {
        var u = s.releaseDate[o];
        return u !== null && u >= r;
      });
      return n.concat(i.map(m(s.name)));
    }, []);
  }

  function re(r) {
    return {
      name: r.name,
      versions: r.versions,
      released: r.released,
      releaseDate: r.releaseDate
    };
  }

  function Fe(r, e) {
    r.versions = r.versions.map(function (s) {
      return e[s] || s;
    }), r.released = r.released.map(function (s) {
      return e[s] || s;
    });
    var n = {};

    for (var t in r.releaseDate) n[e[t] || t] = r.releaseDate[t];

    return r.releaseDate = n, r;
  }

  function w(r, e) {
    if (r = r.toLowerCase(), r = a.aliases[r] || r, e.mobileToDesktop && a.desktopNames[r]) {
      var n = a.data[a.desktopNames[r]];
      if (r === "android") return Ae(re(a.data[r]), n);
      var t = re(n);
      return t.name = r, r === "op_mob" && (t = Fe(t, {
        "10.0-10.1": "10"
      })), t;
    }

    return a.data[r];
  }

  function ne(r, e) {
    var n = ie,
        t = e[e.length - 1];
    return r.filter(function (s) {
      return /^(?:[2-4]\.|[34]$)/.test(s);
    }).concat(e.slice(n - t - 1));
  }

  function Ae(r, e) {
    return r.released = ne(r.released, e.released), r.versions = ne(r.versions, e.versions), r;
  }

  function y(r, e) {
    var n = w(r, e);
    if (!n) throw new l("Unknown browser " + r);
    return n;
  }

  function Se(r) {
    return new l("Unknown browser query `" + r + "`. Maybe you are using old Browserslist or made typo in query.");
  }

  function E(r, e, n) {
    if (n.mobileToDesktop) return r;
    var t = a.data.android.released,
        s = t[t.length - 1],
        i = s - ie - e;
    return i > 0 ? r.slice(-1) : r.slice(i - 1);
  }

  function _(r, e) {
    return se(Q, r).reduce(function (n, t, s) {
      if (t.not && s === 0) throw new l("Write any browsers query (for instance, `defaults`) before `" + t.query + "`");
      var i = Q[t.type],
          o = i.select.call(a, e, t).map(function (f) {
        var p = f.split(" ");
        return p[1] === "0" ? p[0] + " " + w(p[0], e).versions[0] : f;
      });
      if (t.compose === "and") return t.not ? n.filter(function (f) {
        return o.indexOf(f) === -1;
      }) : n.filter(function (f) {
        return o.indexOf(f) !== -1;
      });

      if (t.not) {
        var u = {};
        return o.forEach(function (f) {
          u[f] = !0;
        }), n.filter(function (f) {
          return !u[f];
        });
      }

      return n.concat(o);
    }, []);
  }

  function fe(r) {
    return typeof r > "u" && (r = {}), typeof r.path > "u" && (r.path = F.resolve ? F.resolve(".") : "."), r;
  }

  function ce(r, e) {
    if (typeof r > "u" || r === null) {
      var n = a.loadConfig(e);
      n ? r = n : r = a.defaults;
    }

    return r;
  }

  function le(r) {
    if (!(typeof r == "string" || Array.isArray(r))) throw new l("Browser queries must be an array or string. Got " + typeof r + ".");
  }

  var N = {};

  function a(r, e) {
    e = fe(e), r = ce(r, e), le(r);
    var n = {
      ignoreUnknownVersions: e.ignoreUnknownVersions,
      dangerousExtend: e.dangerousExtend,
      mobileToDesktop: e.mobileToDesktop,
      path: e.path,
      env: e.env
    };
    c.oldDataWarning(a.data);
    var t = c.getStat(e, a.data);

    if (t) {
      n.customUsage = {};

      for (var s in t) A(n.customUsage, s, t[s]);
    }

    var i = JSON.stringify([r, n]);
    if (N[i]) return N[i];
    var o = oe(_(r, n)).sort(function (u, f) {
      if (u = u.split(" "), f = f.split(" "), u[0] === f[0]) {
        var p = u[1].split("-")[0],
            h = f[1].split("-")[0];
        return $(h.split("."), p.split("."));
      } else return D(u[0], f[0]);
    });
    return __Process$.env.BROWSERSLIST_DISABLE_CACHE || (N[i] = o), o;
  }

  a.parse = function (r, e) {
    return e = fe(e), r = ce(r, e), le(r), se(Q, r);
  };

  a.cache = {};
  a.data = {};
  a.usage = {
    global: {},
    custom: null
  };
  a.defaults = ["> 0.5%", "last 2 versions", "Firefox ESR", "not dead"];
  a.aliases = {
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
  a.desktopNames = {
    and_chr: "chrome",
    and_ff: "firefox",
    ie_mob: "ie",
    op_mob: "opera",
    android: "chrome"
  };
  a.versionAliases = {};
  a.clearCaches = c.clearCaches;
  a.parseConfig = c.parseConfig;
  a.readConfig = c.readConfig;
  a.findConfig = c.findConfig;
  a.loadConfig = c.loadConfig;

  a.coverage = function (r, e) {
    var n;
    if (typeof e > "u") n = a.usage.global;else if (e === "my stats") {
      var t = {};
      t.path = F.resolve ? F.resolve(".") : ".";
      var s = c.getStat(t);
      if (!s) throw new l("Custom usage statistics was not provided");
      n = {};

      for (var i in s) A(n, i, s[i]);
    } else if (typeof e == "string") e.length > 2 ? e = e.toLowerCase() : e = e.toUpperCase(), c.loadCountry(a.usage, e, a.data), n = a.usage[e];else {
      "dataByBrowser" in e && (e = e.dataByBrowser), n = {};

      for (var o in e) for (var u in e[o]) n[o + " " + u] = e[o][u];
    }
    return r.reduce(function (f, p) {
      var h = n[p];
      return h === void 0 && (h = n[p.replace(/ \S+$/, " 0")]), f + (h || 0);
    }, 0);
  };

  function T(r, e) {
    var n = a.nodeVersions.filter(function (t) {
      return ae(t, e.version);
    });

    if (n.length === 0) {
      if (r.ignoreUnknownVersions) return [];
      throw new l("Unknown version " + e.version + " of Node.js");
    }

    return ["node " + n[n.length - 1]];
  }

  function R(r, e) {
    var n = parseInt(e.year),
        t = parseInt(e.month || "01") - 1,
        s = parseInt(e.day || "01");
    return ue(Date.UTC(n, t, s, 0, 0, 0), r);
  }

  function te(r, e) {
    var n = parseFloat(e.coverage),
        t = a.usage.global;
    if (e.place) if (e.place.match(/^my\s+stats$/i)) {
      if (!r.customUsage) throw new l("Custom usage statistics was not provided");
      t = r.customUsage;
    } else {
      var s;
      e.place.length === 2 ? s = e.place.toUpperCase() : s = e.place.toLowerCase(), c.loadCountry(a.usage, s, a.data), t = a.usage[s];
    }

    for (var i = Object.keys(t).sort(function (h, ge) {
      return t[ge] - t[h];
    }), o = 0, u = [], f, p = 0; p < i.length && (f = i[p], !(t[f] === 0 || (o += t[f], u.push(f), o >= n))); p++);

    return u;
  }

  var Q = {
    last_major_versions: {
      matches: ["versions"],
      regexp: /^last\s+(\d+)\s+major\s+versions?$/i,
      select: function (r, e) {
        return Object.keys(v).reduce(function (n, t) {
          var s = w(t, r);
          if (!s) return n;
          var i = j(s.released, e.versions);
          return i = i.map(m(s.name)), s.name === "android" && (i = E(i, e.versions, r)), n.concat(i);
        }, []);
      }
    },
    last_versions: {
      matches: ["versions"],
      regexp: /^last\s+(\d+)\s+versions?$/i,
      select: function (r, e) {
        return Object.keys(v).reduce(function (n, t) {
          var s = w(t, r);
          if (!s) return n;
          var i = s.released.slice(-e.versions);
          return i = i.map(m(s.name)), s.name === "android" && (i = E(i, e.versions, r)), n.concat(i);
        }, []);
      }
    },
    last_electron_major_versions: {
      matches: ["versions"],
      regexp: /^last\s+(\d+)\s+electron\s+major\s+versions?$/i,
      select: function (r, e) {
        var n = j(Object.keys(d), e.versions);
        return n.map(function (t) {
          return "chrome " + d[t];
        });
      }
    },
    last_node_major_versions: {
      matches: ["versions"],
      regexp: /^last\s+(\d+)\s+node\s+major\s+versions?$/i,
      select: function (r, e) {
        return j(a.nodeVersions, e.versions).map(function (n) {
          return "node " + n;
        });
      }
    },
    last_browser_major_versions: {
      matches: ["versions", "browser"],
      regexp: /^last\s+(\d+)\s+(\w+)\s+major\s+versions?$/i,
      select: function (r, e) {
        var n = y(e.browser, r),
            t = j(n.released, e.versions),
            s = t.map(m(n.name));
        return n.name === "android" && (s = E(s, e.versions, r)), s;
      }
    },
    last_electron_versions: {
      matches: ["versions"],
      regexp: /^last\s+(\d+)\s+electron\s+versions?$/i,
      select: function (r, e) {
        return Object.keys(d).slice(-e.versions).map(function (n) {
          return "chrome " + d[n];
        });
      }
    },
    last_node_versions: {
      matches: ["versions"],
      regexp: /^last\s+(\d+)\s+node\s+versions?$/i,
      select: function (r, e) {
        return a.nodeVersions.slice(-e.versions).map(function (n) {
          return "node " + n;
        });
      }
    },
    last_browser_versions: {
      matches: ["versions", "browser"],
      regexp: /^last\s+(\d+)\s+(\w+)\s+versions?$/i,
      select: function (r, e) {
        var n = y(e.browser, r),
            t = n.released.slice(-e.versions).map(m(n.name));
        return n.name === "android" && (t = E(t, e.versions, r)), t;
      }
    },
    unreleased_versions: {
      matches: [],
      regexp: /^unreleased\s+versions$/i,
      select: function (r) {
        return Object.keys(v).reduce(function (e, n) {
          var t = w(n, r);
          if (!t) return e;
          var s = t.versions.filter(function (i) {
            return t.released.indexOf(i) === -1;
          });
          return s = s.map(m(t.name)), e.concat(s);
        }, []);
      }
    },
    unreleased_electron_versions: {
      matches: [],
      regexp: /^unreleased\s+electron\s+versions?$/i,
      select: function () {
        return [];
      }
    },
    unreleased_browser_versions: {
      matches: ["browser"],
      regexp: /^unreleased\s+(\w+)\s+versions?$/i,
      select: function (r, e) {
        var n = y(e.browser, r);
        return n.versions.filter(function (t) {
          return n.released.indexOf(t) === -1;
        }).map(m(n.name));
      }
    },
    last_years: {
      matches: ["years"],
      regexp: /^last\s+(\d*.?\d+)\s+years?$/i,
      select: function (r, e) {
        return ue(Date.now() - je * e.years, r);
      }
    },
    since_y: {
      matches: ["year"],
      regexp: /^since (\d+)$/i,
      select: R
    },
    since_y_m: {
      matches: ["year", "month"],
      regexp: /^since (\d+)-(\d+)$/i,
      select: R
    },
    since_y_m_d: {
      matches: ["year", "month", "day"],
      regexp: /^since (\d+)-(\d+)-(\d+)$/i,
      select: R
    },
    popularity: {
      matches: ["sign", "popularity"],
      regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%$/,
      select: function (r, e) {
        var n = parseFloat(e.popularity),
            t = a.usage.global;
        return Object.keys(t).reduce(function (s, i) {
          return e.sign === ">" ? t[i] > n && s.push(i) : e.sign === "<" ? t[i] < n && s.push(i) : e.sign === "<=" ? t[i] <= n && s.push(i) : t[i] >= n && s.push(i), s;
        }, []);
      }
    },
    popularity_in_my_stats: {
      matches: ["sign", "popularity"],
      regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+my\s+stats$/,
      select: function (r, e) {
        var n = parseFloat(e.popularity);
        if (!r.customUsage) throw new l("Custom usage statistics was not provided");
        var t = r.customUsage;
        return Object.keys(t).reduce(function (s, i) {
          var o = t[i];
          return o == null || (e.sign === ">" ? o > n && s.push(i) : e.sign === "<" ? o < n && s.push(i) : e.sign === "<=" ? o <= n && s.push(i) : o >= n && s.push(i)), s;
        }, []);
      }
    },
    popularity_in_config_stats: {
      matches: ["sign", "popularity", "config"],
      regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/,
      select: function (r, e) {
        var n = parseFloat(e.popularity),
            t = c.loadStat(r, e.config, a.data);

        if (t) {
          r.customUsage = {};

          for (var s in t) A(r.customUsage, s, t[s]);
        }

        if (!r.customUsage) throw new l("Custom usage statistics was not provided");
        var i = r.customUsage;
        return Object.keys(i).reduce(function (o, u) {
          var f = i[u];
          return f == null || (e.sign === ">" ? f > n && o.push(u) : e.sign === "<" ? f < n && o.push(u) : e.sign === "<=" ? f <= n && o.push(u) : f >= n && o.push(u)), o;
        }, []);
      }
    },
    popularity_in_place: {
      matches: ["sign", "popularity", "place"],
      regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+((alt-)?\w\w)$/,
      select: function (r, e) {
        var n = parseFloat(e.popularity),
            t = e.place;
        t.length === 2 ? t = t.toUpperCase() : t = t.toLowerCase(), c.loadCountry(a.usage, t, a.data);
        var s = a.usage[t];
        return Object.keys(s).reduce(function (i, o) {
          var u = s[o];
          return u == null || (e.sign === ">" ? u > n && i.push(o) : e.sign === "<" ? u < n && i.push(o) : e.sign === "<=" ? u <= n && i.push(o) : u >= n && i.push(o)), i;
        }, []);
      }
    },
    cover: {
      matches: ["coverage"],
      regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%$/i,
      select: te
    },
    cover_in: {
      matches: ["coverage", "place"],
      regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(my\s+stats|(alt-)?\w\w)$/i,
      select: te
    },
    supports: {
      matches: ["feature"],
      regexp: /^supports\s+([\w-]+)$/,
      select: function (r, e) {
        c.loadFeature(a.cache, e.feature);
        var n = a.cache[e.feature];
        return Object.keys(n).reduce(function (t, s) {
          var i = n[s];
          return (i.indexOf("y") >= 0 || i.indexOf("a") >= 0) && t.push(s), t;
        }, []);
      }
    },
    electron_range: {
      matches: ["from", "to"],
      regexp: /^electron\s+([\d.]+)\s*-\s*([\d.]+)$/i,
      select: function (r, e) {
        var n = O(e.from),
            t = O(e.to),
            s = parseFloat(e.from),
            i = parseFloat(e.to);
        if (!d[n]) throw new l("Unknown version " + s + " of electron");
        if (!d[t]) throw new l("Unknown version " + i + " of electron");
        return Object.keys(d).filter(function (o) {
          var u = parseFloat(o);
          return u >= s && u <= i;
        }).map(function (o) {
          return "chrome " + d[o];
        });
      }
    },
    node_range: {
      matches: ["from", "to"],
      regexp: /^node\s+([\d.]+)\s*-\s*([\d.]+)$/i,
      select: function (r, e) {
        return a.nodeVersions.filter(Z(">=", e.from)).filter(Z("<=", e.to)).map(function (n) {
          return "node " + n;
        });
      }
    },
    browser_range: {
      matches: ["browser", "from", "to"],
      regexp: /^(\w+)\s+([\d.]+)\s*-\s*([\d.]+)$/i,
      select: function (r, e) {
        var n = y(e.browser, r),
            t = parseFloat(U(n, e.from) || e.from),
            s = parseFloat(U(n, e.to) || e.to);

        function i(o) {
          var u = parseFloat(o);
          return u >= t && u <= s;
        }

        return n.released.filter(i).map(m(n.name));
      }
    },
    electron_ray: {
      matches: ["sign", "version"],
      regexp: /^electron\s*(>=?|<=?)\s*([\d.]+)$/i,
      select: function (r, e) {
        var n = O(e.version);
        return Object.keys(d).filter(K(e.sign, n)).map(function (t) {
          return "chrome " + d[t];
        });
      }
    },
    node_ray: {
      matches: ["sign", "version"],
      regexp: /^node\s*(>=?|<=?)\s*([\d.]+)$/i,
      select: function (r, e) {
        return a.nodeVersions.filter(Ee(e.sign, e.version)).map(function (n) {
          return "node " + n;
        });
      }
    },
    browser_ray: {
      matches: ["browser", "sign", "version"],
      regexp: /^(\w+)\s*(>=?|<=?)\s*([\d.]+)$/,
      select: function (r, e) {
        var n = e.version,
            t = y(e.browser, r),
            s = a.versionAliases[t.name][n];
        return s && (n = s), t.released.filter(K(e.sign, n)).map(function (i) {
          return t.name + " " + i;
        });
      }
    },
    firefox_esr: {
      matches: [],
      regexp: /^(firefox|ff|fx)\s+esr$/i,
      select: function () {
        return ["firefox 102"];
      }
    },
    opera_mini_all: {
      matches: [],
      regexp: /(operamini|op_mini)\s+all/i,
      select: function () {
        return ["op_mini all"];
      }
    },
    electron_version: {
      matches: ["version"],
      regexp: /^electron\s+([\d.]+)$/i,
      select: function (r, e) {
        var n = O(e.version),
            t = d[n];
        if (!t) throw new l("Unknown version " + e.version + " of electron");
        return ["chrome " + t];
      }
    },
    node_major_version: {
      matches: ["version"],
      regexp: /^node\s+(\d+)$/i,
      select: T
    },
    node_minor_version: {
      matches: ["version"],
      regexp: /^node\s+(\d+\.\d+)$/i,
      select: T
    },
    node_patch_version: {
      matches: ["version"],
      regexp: /^node\s+(\d+\.\d+\.\d+)$/i,
      select: T
    },
    current_node: {
      matches: [],
      regexp: /^current\s+node$/i,
      select: function (r) {
        return [c.currentNode(_, r)];
      }
    },
    maintained_node: {
      matches: [],
      regexp: /^maintained\s+node\s+versions$/i,
      select: function (r) {
        var e = Date.now(),
            n = Object.keys(I).filter(function (t) {
          return e < Date.parse(I[t].end) && e > Date.parse(I[t].start) && Ue(t);
        }).map(function (t) {
          return "node " + t.slice(1);
        });
        return _(n, r);
      }
    },
    phantomjs_1_9: {
      matches: [],
      regexp: /^phantomjs\s+1.9$/i,
      select: function () {
        return ["safari 5"];
      }
    },
    phantomjs_2_1: {
      matches: [],
      regexp: /^phantomjs\s+2.1$/i,
      select: function () {
        return ["safari 6"];
      }
    },
    browser_version: {
      matches: ["browser", "version"],
      regexp: /^(\w+)\s+(tp|[\d.]+)$/i,
      select: function (r, e) {
        var n = e.version;
        /^tp$/i.test(n) && (n = "TP");
        var t = y(e.browser, r),
            s = U(t, n);
        if (s) n = s;else if (n.indexOf(".") === -1 ? s = n + ".0" : s = n.replace(/\.0$/, ""), s = U(t, s), s) n = s;else {
          if (r.ignoreUnknownVersions) return [];
          throw new l("Unknown version " + n + " of " + e.browser);
        }
        return [t.name + " " + n];
      }
    },
    browserslist_config: {
      matches: [],
      regexp: /^browserslist config$/i,
      select: function (r) {
        return a(void 0, r);
      }
    },
    extends: {
      matches: ["config"],
      regexp: /^extends (.+)$/i,
      select: function (r, e) {
        return _(c.loadQueries(r, e.config), r);
      }
    },
    defaults: {
      matches: [],
      regexp: /^defaults$/i,
      select: function (r) {
        return _(a.defaults, r);
      }
    },
    dead: {
      matches: [],
      regexp: /^dead$/i,
      select: function (r) {
        var e = ["Baidu >= 0", "ie <= 11", "ie_mob <= 11", "bb <= 10", "op_mob <= 12.1", "samsung 4"];
        return _(e, r);
      }
    },
    unknown: {
      matches: [],
      regexp: /^(\w+)$/i,
      select: function (r, e) {
        throw w(e.query, r) ? new l("Specify versions in Browserslist query for browser " + e.query) : Se(e.query);
      }
    }
  };

  (function () {
    for (var r in v) {
      var e = v[r];
      a.data[r] = {
        name: r,
        versions: H(v[r].versions),
        released: H(v[r].versions.slice(0, -3)),
        releaseDate: v[r].release_date
      }, A(a.usage.global, r, e.usage_global), a.versionAliases[r] = {};

      for (var n = 0; n < e.versions.length; n++) {
        var t = e.versions[n];
        if (!!t && t.indexOf("-") !== -1) for (var s = t.split("-"), i = 0; i < s.length; i++) a.versionAliases[r][s[i]] = t;
      }
    }

    a.versionAliases.op_mob[59] = "58", a.nodeVersions = Oe.map(function (o) {
      return o.version;
    });
  })();

  pe.exports = a;
});
var me = $e(de()),
    {
  parse: Qe,
  cache: Le,
  data: qe,
  usage: ze,
  defaults: Me,
  aliases: Ge,
  desktopNames: We,
  versionAliases: Pe,
  clearCaches: Xe,
  parseConfig: Ye,
  readConfig: He,
  findConfig: Je,
  loadConfig: Ke,
  coverage: Ze
} = me,
    {
  default: ve,
  ...Be
} = me,
    er = ve !== void 0 ? ve : Be;
export { Ge as aliases, Le as cache, Xe as clearCaches, Ze as coverage, qe as data, er as default, Me as defaults, We as desktopNames, Je as findConfig, Ke as loadConfig, Qe as parse, Ye as parseConfig, He as readConfig, ze as usage, Pe as versionAliases };