/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001414/dist/unpacker/agents) esnext production */
import __caniuse_lite_data_agents$ from "/transpiled/https://esm.sh/v96/caniuse-lite@1.0.30001414/esnext/data/agents.js";
import { browserVersions as __caniuse_lite_dist_unpacker_browserVersions$browserVersions } from "/transpiled/https://esm.sh/v96/caniuse-lite@1.0.30001414/esnext/dist/unpacker/browserVersions.js";
import { browsers as __caniuse_lite_dist_unpacker_browsers$browsers } from "/transpiled/https://esm.sh/v96/caniuse-lite@1.0.30001414/esnext/dist/unpacker/browsers.js";
var w = Object.create;
var t = Object.defineProperty;
var g = Object.getOwnPropertyDescriptor;
var j = Object.getOwnPropertyNames;
var O = Object.getPrototypeOf,
    k = Object.prototype.hasOwnProperty;

var f = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (s, r) => (typeof require < "u" ? require : s)[r]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var q = (e, s) => () => (s || e((s = {
  exports: {}
}).exports, s), s.exports);

var h = (e, s, r, o) => {
  if (s && typeof s == "object" || typeof s == "function") for (let u of j(s)) !k.call(e, u) && u !== r && t(e, u, {
    get: () => s[u],
    enumerable: !(o = g(s, u)) || o.enumerable
  });
  return e;
};

var D = (e, s, r) => (r = e != null ? w(O(e)) : {}, h(s || !e || !e.__esModule ? t(r, "default", {
  value: e,
  enumerable: !0
}) : r, e));

var p = q((B, _) => {
  "use strict";

  var V = __caniuse_lite_dist_unpacker_browsers$browsers,
      l = __caniuse_lite_dist_unpacker_browserVersions$browserVersions,
      n = __caniuse_lite_data_agents$;

  function b(e) {
    return Object.keys(e).reduce((s, r) => (s[l[r]] = e[r], s), {});
  }

  _.exports.agents = Object.keys(n).reduce((e, s) => {
    let r = n[s];
    return e[V[s]] = Object.keys(r).reduce((o, u) => (u === "A" ? o.usage_global = b(r[u]) : u === "C" ? o.versions = r[u].reduce((c, i) => (i === "" ? c.push(null) : c.push(l[i]), c), []) : u === "D" ? o.prefix_exceptions = b(r[u]) : u === "E" ? o.browser = r[u] : u === "F" ? o.release_date = Object.keys(r[u]).reduce((c, i) => (c[l[i]] = r[u][i], c), {}) : o.prefix = r[u], o), {}), e;
  }, {});
});
var x = D(p()),
    {
  agents: C
} = x,
    {
  default: d,
  ...m
} = x,
    E = d !== void 0 ? d : m;
export { C as agents, E as default };