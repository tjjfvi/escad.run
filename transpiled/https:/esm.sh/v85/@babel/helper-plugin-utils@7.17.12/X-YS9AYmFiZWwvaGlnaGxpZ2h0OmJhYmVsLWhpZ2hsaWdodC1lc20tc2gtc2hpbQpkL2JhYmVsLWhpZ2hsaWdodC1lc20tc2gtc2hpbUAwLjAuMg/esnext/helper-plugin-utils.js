/* esm.sh - esbuild bundle(@babel/helper-plugin-utils@7.17.12) esnext production */
var w = Object.create;
var u = Object.defineProperty;
var E = Object.getOwnPropertyDescriptor;
var v = Object.getOwnPropertyNames;
var O = Object.getPrototypeOf,
    P = Object.prototype.hasOwnProperty;

var n = (t, e) => u(t, "name", {
  value: e,
  configurable: !0
});

var g = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);

var $ = (t, e, r, o) => {
  if (e && typeof e == "object" || typeof e == "function") for (let s of v(e)) !P.call(t, s) && s !== r && u(t, s, {
    get: () => e[s],
    enumerable: !(o = E(e, s)) || o.enumerable
  });
  return t;
};

var b = (t, e, r) => (r = t != null ? w(O(t)) : {}, $(e || !t || !t.__esModule ? u(r, "default", {
  value: t,
  enumerable: !0
}) : r, t));

var f = g(l => {
  "use strict";

  Object.defineProperty(l, "__esModule", {
    value: !0
  });
  l.declare = m;
  l.declarePreset = void 0;

  function m(t) {
    return (e, r, o) => {
      var s;
      let i;

      for (let a of Object.keys(p)) {
        var d;
        e[a] || (i = (d = i) != null ? d : k(e), i[a] = p[a](i));
      }

      return t((s = i) != null ? s : e, r || {}, o);
    };
  }

  n(m, "declare");
  var j = m;
  l.declarePreset = j;
  var p = {
    assertVersion: t => e => {
      _(e, t.version);
    },
    targets: () => () => ({}),
    assumption: () => () => {}
  };

  function k(t) {
    let e = null;
    return typeof t.version == "string" && /^7\./.test(t.version) && (e = Object.getPrototypeOf(t), e && (!c(e, "version") || !c(e, "transform") || !c(e, "template") || !c(e, "types")) && (e = null)), Object.assign({}, e, t);
  }

  n(k, "copyApiObject");

  function c(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }

  n(c, "has");

  function _(t, e) {
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

  n(_, "throwVersionError");
});
var y = b(f()),
    h = b(f()),
    {
  __esModule: R,
  declare: T,
  declarePreset: A
} = h,
    {
  default: B,
  ...x
} = h,
    N = y.default ?? B ?? x;
export { R as __esModule, T as declare, A as declarePreset, N as default };