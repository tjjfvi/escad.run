/* esm.sh - esbuild bundle(@babel/helper-compilation-targets@7.18.2) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v85/node_process.js";
import ___babel_compat_data_plugins$ from "/transpiled/https://esm.sh/v85/@babel/compat-data@7.17.10/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/plugins.js";
import __semver$ from "/transpiled/https://esm.sh/v85/semver@6.3.0/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/semver.js";
import ___babel_compat_data_native_modules$ from "/transpiled/https://esm.sh/v85/@babel/compat-data@7.17.10/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/native-modules.js";
import ___babel_helper_validator_option$ from "/transpiled/https://esm.sh/v85/@babel/helper-validator-option@7.16.7/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-validator-option.js";
import __browserslist$ from "/transpiled/https://esm.sh/v85/browserslist@4.20.3/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/browserslist.js";
var fe = Object.create;
var P = Object.defineProperty;
var ce = Object.getOwnPropertyDescriptor;
var de = Object.getOwnPropertyNames;
var ge = Object.getPrototypeOf,
    pe = Object.prototype.hasOwnProperty;

var i = (e, r) => P(e, "name", {
  value: r,
  configurable: !0
}),
    m = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (r, t) => (typeof require != "undefined" ? require : r)[t]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var v = (e, r) => () => (r || e((r = {
  exports: {}
}).exports, r), r.exports);

var me = (e, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function") for (let s of de(r)) !pe.call(e, s) && s !== t && P(e, s, {
    get: () => r[s],
    enumerable: !(n = ce(r, s)) || n.enumerable
  });
  return e;
};

var C = (e, r, t) => (t = e != null ? fe(ge(e)) : {}, me(r || !e || !e.__esModule ? P(t, "default", {
  value: e,
  enumerable: !0
}) : t, e));

var _ = v(h => {
  "use strict";

  Object.defineProperty(h, "__esModule", {
    value: !0
  });
  h.unreleasedLabels = h.browserNameMap = void 0;
  var ye = {
    safari: "tp"
  };
  h.unreleasedLabels = ye;
  var ve = {
    and_chr: "chrome",
    and_ff: "firefox",
    android: "android",
    chrome: "chrome",
    edge: "edge",
    firefox: "firefox",
    ie: "ie",
    ie_mob: "ie",
    ios_saf: "ios",
    node: "node",
    op_mob: "opera",
    opera: "opera",
    safari: "safari",
    samsung: "samsung"
  };
  h.browserNameMap = ve;
});

var V = v(y => {
  "use strict";

  Object.defineProperty(y, "__esModule", {
    value: !0
  });
  y.getHighestUnreleased = je;
  y.getLowestImplementedVersion = Oe;
  y.getLowestUnreleased = Q;
  y.isUnreleasedVersion = Ve;
  y.semverMin = H;
  y.semverify = _e;

  var D = __semver$,
      be = ___babel_helper_validator_option$,
      W = _(),
      he = /^(\d+|\d+.\d+)$/,
      we = new be.OptionValidator("@babel/helper-compilation-targets");

  function H(e, r) {
    return e && D.lt(e, r) ? e : r;
  }

  i(H, "semverMin");

  function _e(e) {
    if (typeof e == "string" && D.valid(e)) return e;
    we.invariant(typeof e == "number" || typeof e == "string" && he.test(e), `'${e}' is not a valid version`);
    let r = e.toString().split(".");

    for (; r.length < 3;) r.push("0");

    return r.join(".");
  }

  i(_e, "semverify");

  function Ve(e, r) {
    let t = W.unreleasedLabels[r];
    return !!t && t === e.toString().toLowerCase();
  }

  i(Ve, "isUnreleasedVersion");

  function Q(e, r, t) {
    let n = W.unreleasedLabels[t],
        s = [e, r].some(o => o === n);
    return s ? e === s ? r : e || r : H(e, r);
  }

  i(Q, "getLowestUnreleased");

  function je(e, r, t) {
    return Q(e, r, t) === e ? r : e;
  }

  i(je, "getHighestUnreleased");

  function Oe(e, r) {
    let t = e[r];
    return !t && r === "android" ? e.chrome : t;
  }

  i(Oe, "getLowestImplementedVersion");
});
var A = v(j => {
  "use strict";

  Object.defineProperty(j, "__esModule", {
    value: !0
  });
  j.TargetNames = void 0;
  var qe = {
    node: "node",
    chrome: "chrome",
    opera: "opera",
    edge: "edge",
    firefox: "firefox",
    safari: "safari",
    ie: "ie",
    ios: "ios",
    android: "android",
    electron: "electron",
    samsung: "samsung",
    rhino: "rhino"
  };
  j.TargetNames = qe;
});
var I = v(O => {
  "use strict";

  Object.defineProperty(O, "__esModule", {
    value: !0
  });
  O.prettifyTargets = Te;
  O.prettifyVersion = F;

  var M = __semver$,
      Le = _();

  function F(e) {
    if (typeof e != "string") return e;
    let r = [M.major(e)],
        t = M.minor(e),
        n = M.patch(e);
    return (t || n) && r.push(t), n && r.push(n), r.join(".");
  }

  i(F, "prettifyVersion");

  function Te(e) {
    return Object.keys(e).reduce((r, t) => {
      let n = e[t],
          s = Le.unreleasedLabels[t];
      return typeof n == "string" && s !== n && (n = F(n)), r[t] = n, r;
    }, {});
  }

  i(Te, "prettifyTargets");
});
var G = v($ => {
  "use strict";

  Object.defineProperty($, "__esModule", {
    value: !0
  });
  $.getInclusionReasons = Pe;
  var Ue = __semver$,
      z = I(),
      q = V();

  function Pe(e, r, t) {
    let n = t[e] || {};
    return Object.keys(r).reduce((s, o) => {
      let a = (0, q.getLowestImplementedVersion)(n, o),
          u = r[o];
      if (!a) s[o] = (0, z.prettifyVersion)(u);else {
        let f = (0, q.isUnreleasedVersion)(a, o);
        !(0, q.isUnreleasedVersion)(u, o) && (f || Ue.lt(u.toString(), (0, q.semverify)(a))) && (s[o] = (0, z.prettifyVersion)(u));
      }
      return s;
    }, {});
  }

  i(Pe, "getInclusionReasons");
});
var Y = v(w => {
  "use strict";

  Object.defineProperty(w, "__esModule", {
    value: !0
  });
  w.default = Ie;
  w.isRequired = X;
  w.targetsSupported = K;
  var J = __semver$,
      Me = ___babel_compat_data_plugins$,
      L = V();

  function K(e, r) {
    let t = Object.keys(e);
    return t.length === 0 ? !1 : t.filter(s => {
      let o = (0, L.getLowestImplementedVersion)(r, s);
      if (!o) return !0;
      let a = e[s];
      if ((0, L.isUnreleasedVersion)(a, s)) return !1;
      if ((0, L.isUnreleasedVersion)(o, s)) return !0;
      if (!J.valid(a.toString())) throw new Error(`Invalid version passed for target "${s}": "${a}". Versions must be in semver format (major.minor.patch)`);
      return J.gt((0, L.semverify)(o), a.toString());
    }).length === 0;
  }

  i(K, "targetsSupported");

  function X(e, r, {
    compatData: t = Me,
    includes: n,
    excludes: s
  } = {}) {
    return s != null && s.has(e) ? !1 : n != null && n.has(e) ? !0 : !K(r, t[e]);
  }

  i(X, "isRequired");

  function Ie(e, r, t, n, s, o, a) {
    let u = new Set(),
        f = {
      compatData: e,
      includes: r,
      excludes: t
    };

    for (let l in e) if (X(l, n, f)) u.add(l);else if (a) {
      let b = a.get(l);
      b && u.add(b);
    }

    return s && s.forEach(l => !t.has(l) && u.add(l)), o && o.forEach(l => !r.has(l) && u.delete(l)), u;
  }

  i(Ie, "filterItems");
});
var E = v(p => {
  "use strict";

  Object.defineProperty(p, "__esModule", {
    value: !0
  });
  Object.defineProperty(p, "TargetNames", {
    enumerable: !0,
    get: function () {
      return N.TargetNames;
    }
  });
  p.default = De;
  Object.defineProperty(p, "filterItems", {
    enumerable: !0,
    get: function () {
      return ne.default;
    }
  });
  Object.defineProperty(p, "getInclusionReasons", {
    enumerable: !0,
    get: function () {
      return Se.getInclusionReasons;
    }
  });
  p.isBrowsersQueryValid = oe;
  Object.defineProperty(p, "isRequired", {
    enumerable: !0,
    get: function () {
      return ne.isRequired;
    }
  });
  Object.defineProperty(p, "prettifyTargets", {
    enumerable: !0,
    get: function () {
      return Ne.prettifyTargets;
    }
  });
  Object.defineProperty(p, "unreleasedLabels", {
    enumerable: !0,
    get: function () {
      return se.unreleasedLabels;
    }
  });

  var re = __browserslist$,
      te = ___babel_helper_validator_option$,
      $e = ___babel_compat_data_native_modules$,
      g = V(),
      se = _(),
      N = A(),
      Ne = I(),
      Se = G(),
      ne = Y(),
      T = $e["es6.module"],
      S = new te.OptionValidator("@babel/helper-compilation-targets");

  function Ee(e) {
    let r = Object.keys(N.TargetNames);

    for (let t of Object.keys(e)) if (!(t in N.TargetNames)) throw new Error(S.formatMessage(`'${t}' is not a valid target
- Did you mean '${(0, te.findSuggestion)(t, r)}'?`));

    return e;
  }

  i(Ee, "validateTargetNames");

  function oe(e) {
    return typeof e == "string" || Array.isArray(e) && e.every(r => typeof r == "string");
  }

  i(oe, "isBrowsersQueryValid");

  function Re(e) {
    return S.invariant(e === void 0 || oe(e), `'${String(e)}' is not a valid browserslist query`), e;
  }

  i(Re, "validateBrowsers");

  function ke(e) {
    return e.reduce((r, t) => {
      let [n, s] = t.split(" "),
          o = se.browserNameMap[n];
      if (!o) return r;

      try {
        let a = s.split("-")[0].toLowerCase(),
            u = (0, g.isUnreleasedVersion)(a, n);
        if (!r[o]) return r[o] = u ? a : (0, g.semverify)(a), r;
        let f = r[o],
            l = (0, g.isUnreleasedVersion)(f, n);
        if (l && u) r[o] = (0, g.getLowestUnreleased)(f, a, n);else if (l) r[o] = (0, g.semverify)(a);else if (!l && !u) {
          let b = (0, g.semverify)(a);
          r[o] = (0, g.semverMin)(f, b);
        }
      } catch {}

      return r;
    }, {});
  }

  i(ke, "getLowestVersions");

  function Be(e) {
    !e.length || (console.warn(`Warning, the following targets are using a decimal version:
`), e.forEach(({
      target: r,
      value: t
    }) => console.warn(`  ${r}: ${t}`)), console.warn(`
We recommend using a string for minor/patch versions to avoid numbers like 6.10
getting parsed as 6.1, which can lead to unexpected behavior.
`));
  }

  i(Be, "outputDecimalWarning");

  function Z(e, r) {
    try {
      return (0, g.semverify)(r);
    } catch {
      throw new Error(S.formatMessage(`'${r}' is not a valid value for 'targets.${e}'.`));
    }
  }

  i(Z, "semverifyTarget");
  var ee = {
    __default(e, r) {
      let t = (0, g.isUnreleasedVersion)(r, e) ? r.toLowerCase() : Z(e, r);
      return [e, t];
    },

    node(e, r) {
      let t = r === !0 || r === "current" ? __Process$.versions.node : Z(e, r);
      return [e, t];
    }

  };

  function xe(e) {
    let r = Object.assign({}, e);
    return delete r.esmodules, delete r.browsers, r;
  }

  i(xe, "generateTargets");

  function Ce(e, r) {
    let t = re(e, {
      mobileToDesktop: !0,
      env: r
    });
    return ke(t);
  }

  i(Ce, "resolveTargets");

  function De(e = {}, r = {}) {
    var t, n;
    let {
      browsers: s,
      esmodules: o
    } = e,
        {
      configPath: a = "."
    } = r;
    Re(s);
    let u = xe(e),
        f = Ee(u),
        b = !!s || Object.keys(f).length > 0,
        ue = !r.ignoreBrowserslistConfig && !b;

    if (!s && ue && (s = re.loadConfig({
      config: r.configFile,
      path: a,
      env: r.browserslistEnv
    }), s == null && (s = [])), o && (o !== "intersect" || !((t = s) != null && t.length)) && (s = Object.keys(T).map(c => `${c} >= ${T[c]}`).join(", "), o = !1), (n = s) != null && n.length) {
      let c = Ce(s, r.browserslistEnv);
      if (o === "intersect") for (let d of Object.keys(c)) {
        let U = c[d];
        T[d] ? c[d] = (0, g.getHighestUnreleased)(U, (0, g.semverify)(T[d]), d) : delete c[d];
      }
      f = Object.assign(c, f);
    }

    let R = {},
        k = [];

    for (let c of Object.keys(f).sort()) {
      var B;
      let d = f[c];
      typeof d == "number" && d % 1 !== 0 && k.push({
        target: c,
        value: d
      });
      let U = (B = ee[c]) != null ? B : ee.__default,
          [le, x] = U(c, d);
      x && (R[le] = x);
    }

    return Be(k), R;
  }

  i(De, "getTargets");
});
var ie = C(E()),
    ae = C(E()),
    {
  __esModule: Ye,
  TargetNames: Ze,
  filterItems: er,
  getInclusionReasons: rr,
  isBrowsersQueryValid: tr,
  isRequired: sr,
  prettifyTargets: nr,
  unreleasedLabels: or
} = ae,
    {
  default: We,
  ...He
} = ae,
    ir = ie.default ?? We ?? He;
export { Ze as TargetNames, Ye as __esModule, ir as default, er as filterItems, rr as getInclusionReasons, tr as isBrowsersQueryValid, sr as isRequired, nr as prettifyTargets, or as unreleasedLabels };