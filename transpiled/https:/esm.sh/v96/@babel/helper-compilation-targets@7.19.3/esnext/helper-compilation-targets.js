/* esm.sh - esbuild bundle(@babel/helper-compilation-targets@7.19.3) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v96/node_process.js";
import ___babel_compat_data_plugins$ from "/transpiled/https://esm.sh/v96/@babel/compat-data@7.19.3/esnext/plugins.js";
import __semver$ from "/transpiled/https://esm.sh/v96/semver@6.3.0/esnext/semver.js";
import ___babel_compat_data_native_modules$ from "/transpiled/https://esm.sh/v96/@babel/compat-data@7.19.3/esnext/native-modules.js";
import ___babel_helper_validator_option$ from "/transpiled/https://esm.sh/v96/@babel/helper-validator-option@7.18.6/esnext/helper-validator-option.js";
import __browserslist$ from "/transpiled/https://esm.sh/v96/browserslist@4.21.4/esnext/browserslist.js";
var oe = Object.create;
var R = Object.defineProperty;
var ie = Object.getOwnPropertyDescriptor;
var ae = Object.getOwnPropertyNames;
var ue = Object.getPrototypeOf,
    fe = Object.prototype.hasOwnProperty;

var p = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (r, t) => (typeof require < "u" ? require : r)[t]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var y = (e, r) => () => (r || e((r = {
  exports: {}
}).exports, r), r.exports);

var le = (e, r, t, o) => {
  if (r && typeof r == "object" || typeof r == "function") for (let s of ae(r)) !fe.call(e, s) && s !== t && R(e, s, {
    get: () => r[s],
    enumerable: !(o = ie(r, s)) || o.enumerable
  });
  return e;
};

var ce = (e, r, t) => (t = e != null ? oe(ue(e)) : {}, le(r || !e || !e.__esModule ? R(t, "default", {
  value: e,
  enumerable: !0
}) : t, e));

var w = y(v => {
  "use strict";

  Object.defineProperty(v, "__esModule", {
    value: !0
  });
  v.unreleasedLabels = v.browserNameMap = void 0;
  var de = {
    safari: "tp"
  };
  v.unreleasedLabels = de;
  var ge = {
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
  v.browserNameMap = ge;
});
var V = y(m => {
  "use strict";

  Object.defineProperty(m, "__esModule", {
    value: !0
  });
  m.getHighestUnreleased = he;
  m.getLowestImplementedVersion = _e;
  m.getLowestUnreleased = C;
  m.isUnreleasedVersion = ve;
  m.semverMin = x;
  m.semverify = be;
  var k = __semver$,
      pe = ___babel_helper_validator_option$,
      B = w(),
      me = /^(\d+|\d+.\d+)$/,
      ye = new pe.OptionValidator("@babel/helper-compilation-targets");

  function x(e, r) {
    return e && k.lt(e, r) ? e : r;
  }

  function be(e) {
    if (typeof e == "string" && k.valid(e)) return e;
    ye.invariant(typeof e == "number" || typeof e == "string" && me.test(e), `'${e}' is not a valid version`);
    let r = e.toString().split(".");

    for (; r.length < 3;) r.push("0");

    return r.join(".");
  }

  function ve(e, r) {
    let t = B.unreleasedLabels[r];
    return !!t && t === e.toString().toLowerCase();
  }

  function C(e, r, t) {
    let o = B.unreleasedLabels[t];
    return e === o ? r : r === o ? e : x(e, r);
  }

  function he(e, r, t) {
    return C(e, r, t) === e ? r : e;
  }

  function _e(e, r) {
    let t = e[r];
    return !t && r === "android" ? e.chrome : t;
  }
});
var D = y(j => {
  "use strict";

  Object.defineProperty(j, "__esModule", {
    value: !0
  });
  j.TargetNames = void 0;
  var we = {
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
  j.TargetNames = we;
});
var U = y(O => {
  "use strict";

  Object.defineProperty(O, "__esModule", {
    value: !0
  });
  O.prettifyTargets = je;
  O.prettifyVersion = W;
  var P = __semver$,
      Ve = w();

  function W(e) {
    if (typeof e != "string") return e;
    let r = [P.major(e)],
        t = P.minor(e),
        o = P.patch(e);
    return (t || o) && r.push(t), o && r.push(o), r.join(".");
  }

  function je(e) {
    return Object.keys(e).reduce((r, t) => {
      let o = e[t],
          s = Ve.unreleasedLabels[t];
      return typeof o == "string" && s !== o && (o = W(o)), r[t] = o, r;
    }, {});
  }
});
var Q = y(M => {
  "use strict";

  Object.defineProperty(M, "__esModule", {
    value: !0
  });
  M.getInclusionReasons = qe;
  var Oe = __semver$,
      H = U(),
      q = V();

  function qe(e, r, t) {
    let o = t[e] || {};
    return Object.keys(r).reduce((s, n) => {
      let i = (0, q.getLowestImplementedVersion)(o, n),
          a = r[n];
      if (!i) s[n] = (0, H.prettifyVersion)(a);else {
        let f = (0, q.isUnreleasedVersion)(i, n);
        !(0, q.isUnreleasedVersion)(a, n) && (f || Oe.lt(a.toString(), (0, q.semverify)(i))) && (s[n] = (0, H.prettifyVersion)(a));
      }
      return s;
    }, {});
  }
});
var G = y(_ => {
  "use strict";

  Object.defineProperty(_, "__esModule", {
    value: !0
  });
  _.default = Le;
  _.isRequired = z;
  _.targetsSupported = F;
  var A = __semver$,
      Te = ___babel_compat_data_plugins$,
      T = V();

  function F(e, r) {
    let t = Object.keys(e);
    return t.length === 0 ? !1 : t.filter(s => {
      let n = (0, T.getLowestImplementedVersion)(r, s);
      if (!n) return !0;
      let i = e[s];
      if ((0, T.isUnreleasedVersion)(i, s)) return !1;
      if ((0, T.isUnreleasedVersion)(n, s)) return !0;
      if (!A.valid(i.toString())) throw new Error(`Invalid version passed for target "${s}": "${i}". Versions must be in semver format (major.minor.patch)`);
      return A.gt((0, T.semverify)(n), i.toString());
    }).length === 0;
  }

  function z(e, r, {
    compatData: t = Te,
    includes: o,
    excludes: s
  } = {}) {
    return s != null && s.has(e) ? !1 : o != null && o.has(e) ? !0 : !F(r, t[e]);
  }

  function Le(e, r, t, o, s, n, i) {
    let a = new Set(),
        f = {
      compatData: e,
      includes: r,
      excludes: t
    };

    for (let u in e) if (z(u, o, f)) a.add(u);else if (i) {
      let b = i.get(u);
      b && a.add(b);
    }

    return s && s.forEach(u => !t.has(u) && a.add(u)), n && n.forEach(u => !r.has(u) && a.delete(u)), a;
  }
});
var re = y(g => {
  "use strict";

  Object.defineProperty(g, "__esModule", {
    value: !0
  });
  Object.defineProperty(g, "TargetNames", {
    enumerable: !0,
    get: function () {
      return S.TargetNames;
    }
  });
  g.default = xe;
  Object.defineProperty(g, "filterItems", {
    enumerable: !0,
    get: function () {
      return Y.default;
    }
  });
  Object.defineProperty(g, "getInclusionReasons", {
    enumerable: !0,
    get: function () {
      return Me.getInclusionReasons;
    }
  });
  g.isBrowsersQueryValid = Z;
  Object.defineProperty(g, "isRequired", {
    enumerable: !0,
    get: function () {
      return Y.isRequired;
    }
  });
  Object.defineProperty(g, "prettifyTargets", {
    enumerable: !0,
    get: function () {
      return Ue.prettifyTargets;
    }
  });
  Object.defineProperty(g, "unreleasedLabels", {
    enumerable: !0,
    get: function () {
      return X.unreleasedLabels;
    }
  });
  var J = __browserslist$,
      K = ___babel_helper_validator_option$,
      Pe = ___babel_compat_data_native_modules$,
      d = V(),
      X = w(),
      S = D(),
      Ue = U(),
      Me = Q(),
      Y = G(),
      I = Pe["es6.module"],
      N = new K.OptionValidator("@babel/helper-compilation-targets");

  function Ie(e) {
    let r = Object.keys(S.TargetNames);

    for (let t of Object.keys(e)) if (!(t in S.TargetNames)) throw new Error(N.formatMessage(`'${t}' is not a valid target
- Did you mean '${(0, K.findSuggestion)(t, r)}'?`));

    return e;
  }

  function Z(e) {
    return typeof e == "string" || Array.isArray(e) && e.every(r => typeof r == "string");
  }

  function Se(e) {
    return N.invariant(e === void 0 || Z(e), `'${String(e)}' is not a valid browserslist query`), e;
  }

  function Ne(e) {
    return e.reduce((r, t) => {
      let [o, s] = t.split(" "),
          n = X.browserNameMap[o];
      if (!n) return r;

      try {
        let i = s.split("-")[0].toLowerCase(),
            a = (0, d.isUnreleasedVersion)(i, n);
        if (!r[n]) return r[n] = a ? i : (0, d.semverify)(i), r;
        let f = r[n],
            u = (0, d.isUnreleasedVersion)(f, n);
        if (u && a) r[n] = (0, d.getLowestUnreleased)(f, i, n);else if (u) r[n] = (0, d.semverify)(i);else if (!u && !a) {
          let b = (0, d.semverify)(i);
          r[n] = (0, d.semverMin)(f, b);
        }
      } catch {}

      return r;
    }, {});
  }

  function $e(e) {
    !e.length || (console.warn(`Warning, the following targets are using a decimal version:
`), e.forEach(({
      target: r,
      value: t
    }) => console.warn(`  ${r}: ${t}`)), console.warn(`
We recommend using a string for minor/patch versions to avoid numbers like 6.10
getting parsed as 6.1, which can lead to unexpected behavior.
`));
  }

  function ee(e, r) {
    try {
      return (0, d.semverify)(r);
    } catch {
      throw new Error(N.formatMessage(`'${r}' is not a valid value for 'targets.${e}'.`));
    }
  }

  function Ee(e) {
    let r = e === !0 || e === "current" ? __Process$.versions.node : ee("node", e);
    return ["node", r];
  }

  function Re(e, r) {
    let t = (0, d.isUnreleasedVersion)(r, e) ? r.toLowerCase() : ee(e, r);
    return [e, t];
  }

  function ke(e) {
    let r = Object.assign({}, e);
    return delete r.esmodules, delete r.browsers, r;
  }

  function Be(e, r) {
    let t = J(e, {
      mobileToDesktop: !0,
      env: r
    });
    return Ne(t);
  }

  function xe(e = {}, r = {}) {
    var t, o;
    let {
      browsers: s,
      esmodules: n
    } = e,
        {
      configPath: i = "."
    } = r;
    Se(s);
    let a = ke(e),
        f = Ie(a),
        b = !!s || Object.keys(f).length > 0,
        ne = !r.ignoreBrowserslistConfig && !b;

    if (!s && ne && (s = J.loadConfig({
      config: r.configFile,
      path: i,
      env: r.browserslistEnv
    }), s == null && (s = [])), n && (n !== "intersect" || !((t = s) != null && t.length)) && (s = Object.keys(I).map(l => `${l} >= ${I[l]}`).join(", "), n = !1), (o = s) != null && o.length) {
      let l = Be(s, r.browserslistEnv);
      if (n === "intersect") for (let c of Object.keys(l)) {
        let L = l[c],
            h = I[c];
        h ? l[c] = (0, d.getHighestUnreleased)(L, (0, d.semverify)(h), c) : delete l[c];
      }
      f = Object.assign(l, f);
    }

    let $ = {},
        E = [];

    for (let l of Object.keys(f).sort()) {
      let c = f[l];
      typeof c == "number" && c % 1 !== 0 && E.push({
        target: l,
        value: c
      });
      let [L, h] = l === "node" ? Ee(c) : Re(l, c);
      h && ($[L] = h);
    }

    return $e(E), $;
  }
});
var se = ce(re()),
    Je = !0,
    {
  TargetNames: Ke,
  filterItems: Xe,
  getInclusionReasons: Ye,
  isBrowsersQueryValid: Ze,
  isRequired: er,
  prettifyTargets: rr,
  unreleasedLabels: tr
} = se,
    {
  default: te,
  ...Ce
} = se,
    sr = te !== void 0 ? te : Ce;
export { Ke as TargetNames, Je as __esModule, sr as default, Xe as filterItems, Ye as getInclusionReasons, Ze as isBrowsersQueryValid, er as isRequired, rr as prettifyTargets, tr as unreleasedLabels };