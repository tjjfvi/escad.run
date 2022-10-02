/* esm.sh - esbuild bundle(@babel/helper-plugin-utils@7.19.0) esnext production */
var m = Object.create;
var u = Object.defineProperty;
var h = Object.getOwnPropertyDescriptor;
var w = Object.getOwnPropertyNames;
var E = Object.getPrototypeOf,
    _ = Object.prototype.hasOwnProperty;

var v = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);

var O = (t, e, r, o) => {
  if (e && typeof e == "object" || typeof e == "function") for (let s of w(e)) !_.call(t, s) && s !== r && u(t, s, {
    get: () => e[s],
    enumerable: !(o = h(e, s)) || o.enumerable
  });
  return t;
};

var P = (t, e, r) => (r = t != null ? m(E(t)) : {}, O(e || !t || !t.__esModule ? u(r, "default", {
  value: t,
  enumerable: !0
}) : r, t));

var b = v(i => {
  "use strict";

  Object.defineProperty(i, "__esModule", {
    value: !0
  });
  i.declare = d;
  i.declarePreset = void 0;

  function d(t) {
    return (e, r, o) => {
      var s;
      let n;

      for (let c of Object.keys(f)) {
        var a;
        e[c] || (n = (a = n) != null ? a : j(e), n[c] = f[c](n));
      }

      return t((s = n) != null ? s : e, r || {}, o);
    };
  }

  var g = d;
  i.declarePreset = g;
  var f = {
    assertVersion: t => e => {
      k(e, t.version);
    },
    targets: () => () => ({}),
    assumption: () => () => {}
  };

  function j(t) {
    let e = null;
    return typeof t.version == "string" && /^7\./.test(t.version) && (e = Object.getPrototypeOf(t), e && (!l(e, "version") || !l(e, "transform") || !l(e, "template") || !l(e, "types")) && (e = null)), Object.assign({}, e, t);
  }

  function l(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }

  function k(t, e) {
    if (typeof t == "number") {
      if (!Number.isInteger(t)) throw new Error("Expected string or integer value.");
      t = `^${t}.0.0-0`;
    }

    if (typeof t != "string") throw new Error("Expected string or integer value.");
    let r = Error.stackTraceLimit;
    typeof r == "number" && r < 25 && (Error.stackTraceLimit = 25);
    let o;
    throw e.slice(0, 2) === "7." ? o = new Error(`Requires Babel "^7.0.0-beta.41", but was loaded with "${e}". You'll need to update your @babel/core version.`) : o = new Error(`Requires Babel "${t}", but was loaded with "${e}". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.`), typeof r == "number" && (Error.stackTraceLimit = r), Object.assign(o, {
      code: "BABEL_VERSION_UNSUPPORTED",
      version: e,
      range: t
    });
  }
});
var y = P(b()),
    L = !0,
    {
  declare: R,
  declarePreset: T
} = y,
    {
  default: p,
  ...x
} = y,
    $ = p !== void 0 ? p : x;
export { L as __esModule, R as declare, T as declarePreset, $ as default };