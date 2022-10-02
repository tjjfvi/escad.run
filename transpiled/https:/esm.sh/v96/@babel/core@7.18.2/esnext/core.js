/* esm.sh - esbuild bundle(@babel/core@7.18.2) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v96/node_process.js";
import ___ampproject_remapping$$ from "/transpiled/https://esm.sh/v96/@ampproject/remapping@2.2.0/esnext/remapping.js";
import * as ___ampproject_remapping$$$ from "/transpiled/https://esm.sh/v96/@ampproject/remapping@2.2.0/esnext/remapping.js";

const ___ampproject_remapping$ = Object.assign({
  default: ___ampproject_remapping$$
}, ___ampproject_remapping$$$);

import * as ___babel_template$ from "/transpiled/https://esm.sh/v96/@babel/template@7.18.10/esnext/template.js";
import __convert_source_map$ from "/transpiled/https://esm.sh/v96/convert-source-map@1.8.0/esnext/convert-source-map.js";
import __debug$ from "/transpiled/https://esm.sh/v96/debug@4.3.4/esnext/debug.js";
import * as ___babel_code_frame$ from "/transpiled/https://esm.sh/v96/@babel/code-frame@7.18.6/esnext/code-frame.js";
import * as ___babel_generator$ from "/transpiled/https://esm.sh/v96/@babel/generator@7.19.3/esnext/generator.js";
import __fs$ from "/transpiled/https://esm.sh/v96/node_fs.js";
import __semver$ from "/transpiled/https://esm.sh/v96/semver@6.3.0/esnext/semver.js";
import * as ___babel_helpers$ from "/transpiled/https://esm.sh/v96/@babel/helpers@7.19.0/esnext/helpers.js";
import * as ___babel_traverse$ from "/transpiled/https://esm.sh/v96/@babel/traverse@7.19.3/esnext/traverse.js";
import * as ___babel_helper_compilation_targets$ from "/transpiled/https://esm.sh/v96/@babel/helper-compilation-targets@7.19.3/esnext/helper-compilation-targets.js";
import ___babel_helper_module_transforms$ from "/transpiled/https://esm.sh/v96/@babel/helper-module-transforms@7.19.0/esnext/helper-module-transforms.js";
import __path$ from "/transpiled/https://esm.sh/v96/path-browserify@1.0.1/esnext/path-browserify.bundle.js";
import __gensync$ from "/transpiled/https://esm.sh/v96/gensync@1.0.0-beta.2/esnext/gensync.js";
import ___babel_parser$ from "/transpiled/https://esm.sh/v96/@babel/parser@7.19.3/esnext/parser.js";
import ___babel_types$ from "/transpiled/https://esm.sh/v96/@babel/types@7.19.3/esnext/types.js";
var So = Object.create;
var gr = Object.defineProperty;
var Ao = Object.getOwnPropertyDescriptor;
var ko = Object.getOwnPropertyNames;
var xo = Object.getPrototypeOf,
    jo = Object.prototype.hasOwnProperty;

var f = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (t, r) => (typeof require < "u" ? require : t)[r]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var b = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var Fo = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of ko(t)) !jo.call(e, o) && o !== r && gr(e, o, {
    get: () => t[o],
    enumerable: !(n = Ao(t, o)) || n.enumerable
  });
  return e;
};

var Mo = (e, t, r) => (r = e != null ? So(xo(e)) : {}, Fo(t || !e || !e.__esModule ? gr(r, "default", {
  value: e,
  enumerable: !0
}) : r, e));

var _e = b(we => {
  "use strict";

  Object.defineProperty(we, "__esModule", {
    value: !0
  });
  we.default = void 0;

  function Z() {
    let e = ___babel_helpers$;
    return Z = function () {
      return e;
    }, e;
  }

  function Ze() {
    let e = ___babel_traverse$;
    return Ze = function () {
      return e;
    }, e;
  }

  function mr() {
    let e = ___babel_code_frame$;
    return mr = function () {
      return e;
    }, e;
  }

  function hr() {
    let e = ___babel_types$;
    return hr = function () {
      return e;
    }, e;
  }

  function yr() {
    let e = ___babel_helper_module_transforms$;
    return yr = function () {
      return e;
    }, e;
  }

  function ve() {
    let e = __semver$;
    return ve = function () {
      return e;
    }, e;
  }

  var {
    cloneNode: $o,
    interpreterDirective: No
  } = hr(),
      Io = {
    enter(e, t) {
      let r = e.node.loc;
      r && (t.loc = r, e.stop());
    }

  },
      ee = class {
    constructor(t, {
      code: r,
      ast: n,
      inputMap: o
    }) {
      this._map = new Map(), this.opts = void 0, this.declarations = {}, this.path = null, this.ast = {}, this.scope = void 0, this.metadata = {}, this.code = "", this.inputMap = null, this.hub = {
        file: this,
        getCode: () => this.code,
        getScope: () => this.scope,
        addHelper: this.addHelper.bind(this),
        buildError: this.buildCodeFrameError.bind(this)
      }, this.opts = t, this.code = r, this.ast = n, this.inputMap = o, this.path = Ze().NodePath.get({
        hub: this.hub,
        parentPath: null,
        parent: this.ast,
        container: this.ast,
        key: "program"
      }).setContext(), this.scope = this.path.scope;
    }

    get shebang() {
      let {
        interpreter: t
      } = this.path.node;
      return t ? t.value : "";
    }

    set shebang(t) {
      t ? this.path.get("interpreter").replaceWith(No(t)) : this.path.get("interpreter").remove();
    }

    set(t, r) {
      if (t === "helpersNamespace") throw new Error("Babel 7.0.0-beta.56 has dropped support for the 'helpersNamespace' utility.If you are using @babel/plugin-external-helpers you will need to use a newer version than the one you currently have installed. If you have your own implementation, you'll want to explore using 'helperGenerator' alongside 'file.availableHelper()'.");

      this._map.set(t, r);
    }

    get(t) {
      return this._map.get(t);
    }

    has(t) {
      return this._map.has(t);
    }

    getModuleName() {
      return (0, yr().getModuleName)(this.opts, this.opts);
    }

    addImport() {
      throw new Error("This API has been removed. If you're looking for this functionality in Babel 7, you should import the '@babel/helper-module-imports' module and use the functions exposed  from that module, such as 'addNamed' or 'addDefault'.");
    }

    availableHelper(t, r) {
      let n;

      try {
        n = Z().minVersion(t);
      } catch (o) {
        if (o.code !== "BABEL_HELPER_UNKNOWN") throw o;
        return !1;
      }

      return typeof r != "string" ? !0 : (ve().valid(r) && (r = `^${r}`), !ve().intersects(`<${n}`, r) && !ve().intersects(">=8.0.0", r));
    }

    addHelper(t) {
      let r = this.declarations[t];
      if (r) return $o(r);
      let n = this.get("helperGenerator");

      if (n) {
        let u = n(t);
        if (u) return u;
      }

      Z().ensure(t, ee);
      let o = this.declarations[t] = this.scope.generateUidIdentifier(t),
          s = {};

      for (let u of Z().getDependencies(t)) s[u] = this.addHelper(u);

      let {
        nodes: i,
        globals: a
      } = Z().get(t, u => s[u], o, Object.keys(this.scope.getAllBindings()));
      return a.forEach(u => {
        this.path.scope.hasBinding(u, !0) && this.path.scope.rename(u);
      }), i.forEach(u => {
        u._compact = !0;
      }), this.path.unshiftContainer("body", i), this.path.get("body").forEach(u => {
        i.indexOf(u.node) !== -1 && u.isVariableDeclaration() && this.scope.registerDeclaration(u);
      }), o;
    }

    addTemplateObject() {
      throw new Error("This function has been moved into the template literal transform itself.");
    }

    buildCodeFrameError(t, r, n = SyntaxError) {
      let o = t && (t.loc || t._loc);

      if (!o && t) {
        let s = {
          loc: null
        };
        (0, Ze().default)(t, Io, this.scope, s), o = s.loc;
        let i = "This is an error on an internal node. Probably an internal error.";
        o && (i += " Location has been estimated."), r += ` (${i})`;
      }

      if (o) {
        let {
          highlightCode: s = !0
        } = this.opts;
        r += `
` + (0, mr().codeFrameColumns)(this.code, {
          start: {
            line: o.start.line,
            column: o.start.column + 1
          },
          end: o.end && o.start.line === o.end.line ? {
            line: o.end.line,
            column: o.end.column + 1
          } : void 0
        }, {
          highlightCode: s
        });
      }

      return new n(r);
    }

  };
  we.default = ee;
});

var Er = b(ot => {
  "use strict";

  Object.defineProperty(ot, "__esModule", {
    value: !0
  });
  ot.default = Qo;

  function Oe() {
    let e = ___babel_helpers$;
    return Oe = function () {
      return e;
    }, e;
  }

  function vr() {
    let e = ___babel_generator$;
    return vr = function () {
      return e;
    }, e;
  }

  function wr() {
    let e = ___babel_template$;
    return wr = function () {
      return e;
    }, e;
  }

  function _r() {
    let e = ___babel_types$;
    return _r = function () {
      return e;
    }, e;
  }

  var qo = _e(),
      {
    arrayExpression: Do,
    assignmentExpression: Or,
    binaryExpression: Ro,
    blockStatement: To,
    callExpression: Bo,
    cloneNode: Lo,
    conditionalExpression: Uo,
    exportNamedDeclaration: Wo,
    exportSpecifier: Ho,
    expressionStatement: Pr,
    functionExpression: Vo,
    identifier: A,
    memberExpression: et,
    objectExpression: tt,
    program: Pe,
    stringLiteral: Cr,
    unaryExpression: Go,
    variableDeclaration: rt,
    variableDeclarator: nt
  } = _r(),
      zo = e => wr().default.statement`
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
  `(e);

  function Jo(e) {
    let t = A("babelHelpers"),
        r = [],
        n = Vo(null, [A("global")], To(r)),
        o = Pe([Pr(Bo(n, [Uo(Ro("===", Go("typeof", A("global")), Cr("undefined")), A("self"), A("global"))]))]);
    return r.push(rt("var", [nt(t, Or("=", et(A("global"), t), tt([])))])), Ce(r, t, e), o;
  }

  function Yo(e) {
    let t = [],
        r = Ce(t, null, e);
    return t.unshift(Wo(null, Object.keys(r).map(n => Ho(Lo(r[n]), A(n))))), Pe(t, [], "module");
  }

  function Ko(e) {
    let t = A("babelHelpers"),
        r = [];
    return r.push(rt("var", [nt(t, A("global"))])), Ce(r, t, e), Pe([zo({
      FACTORY_PARAMETERS: A("global"),
      BROWSER_ARGUMENTS: Or("=", et(A("root"), t), tt([])),
      COMMON_ARGUMENTS: A("exports"),
      AMD_ARGUMENTS: Do([Cr("exports")]),
      FACTORY_BODY: r,
      UMD_ROOT: A("this")
    })]);
  }

  function Xo(e) {
    let t = A("babelHelpers"),
        r = [];
    r.push(rt("var", [nt(t, tt([]))]));
    let n = Pe(r);
    return Ce(r, t, e), r.push(Pr(t)), n;
  }

  function Ce(e, t, r) {
    let n = s => t ? et(t, A(s)) : A(`_${s}`),
        o = {};

    return Oe().list.forEach(function (s) {
      if (r && r.indexOf(s) < 0) return;
      let i = o[s] = n(s);
      Oe().ensure(s, qo.default);
      let {
        nodes: a
      } = Oe().get(s, n, i);
      e.push(...a);
    }), o;
  }

  function Qo(e, t = "global") {
    let r,
        n = {
      global: Jo,
      module: Yo,
      umd: Ko,
      var: Xo
    }[t];
    if (n) r = n(e);else throw new Error(`Unsupported output type ${t}`);
    return (0, vr().default)(r).code;
  }
});
var te = b(k => {
  "use strict";

  Object.defineProperty(k, "__esModule", {
    value: !0
  });
  k.ROOT_CONFIG_FILENAMES = void 0;
  k.findConfigUpwards = Zo;
  k.findPackageData = es;
  k.findRelativeConfig = ts;
  k.findRootConfig = rs;
  k.loadConfig = ns;
  k.loadPlugin = us;
  k.loadPreset = ls;
  k.resolvePlugin = is;
  k.resolvePreset = as;
  k.resolveShowConfigPath = os;

  function Zo(e) {
    return null;
  }

  function* es(e) {
    return {
      filepath: e,
      directories: [],
      pkg: null,
      isPackage: !1
    };
  }

  function* ts(e, t, r) {
    return {
      config: null,
      ignore: null
    };
  }

  function* rs(e, t, r) {
    return null;
  }

  function* ns(e, t, r, n) {
    throw new Error(`Cannot load ${e} relative to ${t} in a browser`);
  }

  function* os(e) {
    return null;
  }

  var ss = [];
  k.ROOT_CONFIG_FILENAMES = ss;

  function is(e, t) {
    return null;
  }

  function as(e, t) {
    return null;
  }

  function us(e, t) {
    throw new Error(`Cannot load plugin ${e} relative to ${t} in a browser`);
  }

  function ls(e, t) {
    throw new Error(`Cannot load preset ${e} relative to ${t} in a browser`);
  }
});
var it = b(st => {
  "use strict";

  Object.defineProperty(st, "__esModule", {
    value: !0
  });
  st.getEnv = cs;

  function cs(e = "development") {
    return __Process$.env.BABEL_ENV || "production";
  }
});
var at = b($ => {
  "use strict";

  Object.defineProperty($, "__esModule", {
    value: !0
  });
  $.forwardAsync = bs;
  $.isAsync = void 0;
  $.isThenable = kr;
  $.maybeAsync = ps;
  $.waitFor = $.onFirstPause = void 0;

  function B() {
    let e = __gensync$;
    return B = function () {
      return e;
    }, e;
  }

  var Sr = e => e,
      Ar = B()(function* (e) {
    return yield* e;
  }),
      fs = B()({
    sync: () => !1,
    errback: e => e(null, !0)
  });

  $.isAsync = fs;

  function ps(e, t) {
    return B()({
      sync(...r) {
        let n = e.apply(this, r);
        if (kr(n)) throw new Error(t);
        return n;
      },

      async(...r) {
        return Promise.resolve(e.apply(this, r));
      }

    });
  }

  var ds = B()({
    sync: e => e("sync"),
    async: e => e("async")
  });

  function bs(e, t) {
    let r = B()(e);
    return ds(n => {
      let o = r[n];
      return t(o);
    });
  }

  var gs = B()({
    name: "onFirstPause",
    arity: 2,
    sync: function (e) {
      return Ar.sync(e);
    },
    errback: function (e, t, r) {
      let n = !1;
      Ar.errback(e, (o, s) => {
        n = !0, r(o, s);
      }), n || t();
    }
  });
  $.onFirstPause = gs;
  var ms = B()({
    sync: Sr,
    async: Sr
  });
  $.waitFor = ms;

  function kr(e) {
    return !!e && (typeof e == "object" || typeof e == "function") && !!e.then && typeof e.then == "function";
  }
});
var Se = b(Ee => {
  "use strict";

  Object.defineProperty(Ee, "__esModule", {
    value: !0
  });
  Ee.isIterableIterator = vs;
  Ee.mergeOptions = hs;

  function hs(e, t) {
    for (let r of Object.keys(t)) if ((r === "parserOpts" || r === "generatorOpts" || r === "assumptions") && t[r]) {
      let n = t[r],
          o = e[r] || (e[r] = {});
      ys(o, n);
    } else {
      let n = t[r];
      n !== void 0 && (e[r] = n);
    }
  }

  function ys(e, t) {
    for (let r of Object.keys(t)) {
      let n = t[r];
      n !== void 0 && (e[r] = n);
    }
  }

  function vs(e) {
    return !!e && typeof e.next == "function" && typeof e[Symbol.iterator] == "function";
  }
});
var ke = b(Ae => {
  "use strict";

  Object.defineProperty(Ae, "__esModule", {
    value: !0
  });
  Ae.finalize = ws;
  Ae.flattenToSet = _s;

  function ws(e) {
    return Object.freeze(e);
  }

  function _s(e) {
    let t = new Set(),
        r = [e];

    for (; r.length > 0;) for (let n of r.pop()) Array.isArray(n) ? r.push(n) : t.add(n);

    return t;
  }
});
var re = b(xe => {
  "use strict";

  Object.defineProperty(xe, "__esModule", {
    value: !0
  });
  xe.default = void 0;
  var Os = ke(),
      ut = class {
    constructor(t, r, n, o = (0, Os.finalize)([])) {
      this.key = void 0, this.manipulateOptions = void 0, this.post = void 0, this.pre = void 0, this.visitor = void 0, this.parserOverride = void 0, this.generatorOverride = void 0, this.options = void 0, this.externalDependencies = void 0, this.key = t.name || n, this.manipulateOptions = t.manipulateOptions, this.post = t.post, this.pre = t.pre, this.visitor = t.visitor || {}, this.parserOverride = t.parserOverride, this.generatorOverride = t.generatorOverride, this.options = r, this.externalDependencies = o;
    }

  };
  xe.default = ut;
});
var ne = b(H => {
  "use strict";

  Object.defineProperty(H, "__esModule", {
    value: !0
  });
  H.assertSimpleType = je;
  H.makeStrongCache = $r;
  H.makeStrongCacheSync = Ss;
  H.makeWeakCache = Mr;
  H.makeWeakCacheSync = Es;

  function jr() {
    let e = __gensync$;
    return jr = function () {
      return e;
    }, e;
  }

  var z = at(),
      Ps = Se(),
      Fr = e => jr()(e).sync;

  function* Cs() {
    return !0;
  }

  function Mr(e) {
    return Nr(WeakMap, e);
  }

  function Es(e) {
    return Fr(Mr(e));
  }

  function $r(e) {
    return Nr(Map, e);
  }

  function Ss(e) {
    return Fr($r(e));
  }

  function Nr(e, t) {
    let r = new e(),
        n = new e(),
        o = new e();
    return function* (i, a) {
      let u = yield* (0, z.isAsync)(),
          c = u ? n : r,
          p = yield* As(u, c, o, i, a);
      if (p.valid) return p.value;
      let h = new lt(a),
          v = t(i, h),
          y,
          g;

      if ((0, Ps.isIterableIterator)(v)) {
        let O = v;
        g = yield* (0, z.onFirstPause)(O, () => {
          y = ks(h, o, i);
        });
      } else g = v;

      return Ir(c, h, i, g), y && (o.delete(i), y.release(g)), g;
    };
  }

  function* xr(e, t, r) {
    let n = e.get(t);

    if (n) {
      for (let {
        value: o,
        valid: s
      } of n) if (yield* s(r)) return {
        valid: !0,
        value: o
      };
    }

    return {
      valid: !1,
      value: null
    };
  }

  function* As(e, t, r, n, o) {
    let s = yield* xr(t, n, o);
    if (s.valid) return s;

    if (e) {
      let i = yield* xr(r, n, o);

      if (i.valid) {
        let a = yield* (0, z.waitFor)(i.value.promise);
        return {
          valid: !0,
          value: a
        };
      }
    }

    return {
      valid: !1,
      value: null
    };
  }

  function ks(e, t, r) {
    let n = new ct();
    return Ir(t, e, r, n), n;
  }

  function Ir(e, t, r, n) {
    t.configured() || t.forever();
    let o = e.get(r);

    switch (t.deactivate(), t.mode()) {
      case "forever":
        o = [{
          value: n,
          valid: Cs
        }], e.set(r, o);
        break;

      case "invalidate":
        o = [{
          value: n,
          valid: t.validator()
        }], e.set(r, o);
        break;

      case "valid":
        o ? o.push({
          value: n,
          valid: t.validator()
        }) : (o = [{
          value: n,
          valid: t.validator()
        }], e.set(r, o));
    }
  }

  var lt = class {
    constructor(t) {
      this._active = !0, this._never = !1, this._forever = !1, this._invalidate = !1, this._configured = !1, this._pairs = [], this._data = void 0, this._data = t;
    }

    simple() {
      return xs(this);
    }

    mode() {
      return this._never ? "never" : this._forever ? "forever" : this._invalidate ? "invalidate" : "valid";
    }

    forever() {
      if (!this._active) throw new Error("Cannot change caching after evaluation has completed.");
      if (this._never) throw new Error("Caching has already been configured with .never()");
      this._forever = !0, this._configured = !0;
    }

    never() {
      if (!this._active) throw new Error("Cannot change caching after evaluation has completed.");
      if (this._forever) throw new Error("Caching has already been configured with .forever()");
      this._never = !0, this._configured = !0;
    }

    using(t) {
      if (!this._active) throw new Error("Cannot change caching after evaluation has completed.");
      if (this._never || this._forever) throw new Error("Caching has already been configured with .never or .forever()");
      this._configured = !0;
      let r = t(this._data),
          n = (0, z.maybeAsync)(t, "You appear to be using an async cache handler, but Babel has been called synchronously");
      return (0, z.isThenable)(r) ? r.then(o => (this._pairs.push([o, n]), o)) : (this._pairs.push([r, n]), r);
    }

    invalidate(t) {
      return this._invalidate = !0, this.using(t);
    }

    validator() {
      let t = this._pairs;
      return function* (r) {
        for (let [n, o] of t) if (n !== (yield* o(r))) return !1;

        return !0;
      };
    }

    deactivate() {
      this._active = !1;
    }

    configured() {
      return this._configured;
    }

  };

  function xs(e) {
    function t(r) {
      if (typeof r == "boolean") {
        r ? e.forever() : e.never();
        return;
      }

      return e.using(() => je(r()));
    }

    return t.forever = () => e.forever(), t.never = () => e.never(), t.using = r => e.using(() => je(r())), t.invalidate = r => e.invalidate(() => je(r())), t;
  }

  function je(e) {
    if ((0, z.isThenable)(e)) throw new Error("You appear to be using an async cache handler, which your current version of Babel does not support. We may add support for this in the future, but if you're on the most recent version of @babel/core and still seeing this error, then you'll need to synchronously handle your caching logic.");
    if (e != null && typeof e != "string" && typeof e != "boolean" && typeof e != "number") throw new Error("Cache keys must be either string, boolean, number, null, or undefined.");
    return e;
  }

  var ct = class {
    constructor() {
      this.released = !1, this.promise = void 0, this._resolve = void 0, this.promise = new Promise(t => {
        this._resolve = t;
      });
    }

    release(t) {
      this.released = !0, this._resolve(t);
    }

  };
});
var ft = b(Fe => {
  "use strict";

  Object.defineProperty(Fe, "__esModule", {
    value: !0
  });
  Fe.resolveBrowserslistConfigFile = js;
  Fe.resolveTargets = Fs;

  function qr() {
    let e = ___babel_helper_compilation_targets$;
    return qr = function () {
      return e;
    }, e;
  }

  function js(e, t) {}

  function Fs(e, t) {
    let r = e.targets;
    return (typeof r == "string" || Array.isArray(r)) && (r = {
      browsers: r
    }), r && r.esmodules && (r = Object.assign({}, r, {
      esmodules: "intersect"
    })), (0, qr().default)(r, {
      ignoreBrowserslistConfig: !0,
      browserslistEnv: e.browserslistEnv
    });
  }
});
var pt = b(se => {
  "use strict";

  Object.defineProperty(se, "__esModule", {
    value: !0
  });
  se.createCachedDescriptors = Is;
  se.createDescriptor = Vr;
  se.createUncachedDescriptors = qs;

  function Tr() {
    let e = __gensync$;
    return Tr = function () {
      return e;
    }, e;
  }

  var Dr = te(),
      Ms = ie(),
      oe = ne(),
      $s = ft();

  function Ns(e, t) {
    return e.name === t.name && e.value === t.value && e.options === t.options && e.dirname === t.dirname && e.alias === t.alias && e.ownPass === t.ownPass && (e.file && e.file.request) === (t.file && t.file.request) && (e.file && e.file.resolved) === (t.file && t.file.resolved);
  }

  function* Rr(e) {
    return e;
  }

  function Br(e, t) {
    return typeof e.browserslistConfigFile == "string" && (e.browserslistConfigFile = (0, $s.resolveBrowserslistConfigFile)(e.browserslistConfigFile, t)), e;
  }

  function Is(e, t, r) {
    let {
      plugins: n,
      presets: o,
      passPerPreset: s
    } = t;
    return {
      options: Br(t, e),
      plugins: n ? () => Bs(n, e)(r) : () => Rr([]),
      presets: o ? () => Rs(o, e)(r)(!!s) : () => Rr([])
    };
  }

  function qs(e, t, r) {
    let n, o;
    return {
      options: Br(t, e),

      *plugins() {
        return n || (n = yield* Wr(t.plugins || [], e, r)), n;
      },

      *presets() {
        return o || (o = yield* Ur(t.presets || [], e, r, !!t.passPerPreset)), o;
      }

    };
  }

  var Ds = new WeakMap(),
      Rs = (0, oe.makeWeakCacheSync)((e, t) => {
    let r = t.using(n => n);
    return (0, oe.makeStrongCacheSync)(n => (0, oe.makeStrongCache)(function* (o) {
      return (yield* Ur(e, r, n, o)).map(i => Lr(Ds, i));
    }));
  }),
      Ts = new WeakMap(),
      Bs = (0, oe.makeWeakCacheSync)((e, t) => {
    let r = t.using(n => n);
    return (0, oe.makeStrongCache)(function* (n) {
      return (yield* Wr(e, r, n)).map(s => Lr(Ts, s));
    });
  }),
      Ls = {};

  function Lr(e, t) {
    let {
      value: r,
      options: n = Ls
    } = t;
    if (n === !1) return t;
    let o = e.get(r);
    o || (o = new WeakMap(), e.set(r, o));
    let s = o.get(n);

    if (s || (s = [], o.set(n, s)), s.indexOf(t) === -1) {
      let i = s.filter(a => Ns(a, t));
      if (i.length > 0) return i[0];
      s.push(t);
    }

    return t;
  }

  function* Ur(e, t, r, n) {
    return yield* Hr("preset", e, t, r, n);
  }

  function* Wr(e, t, r) {
    return yield* Hr("plugin", e, t, r);
  }

  function* Hr(e, t, r, n, o) {
    let s = yield* Tr().all(t.map((i, a) => Vr(i, r, {
      type: e,
      alias: `${n}$${a}`,
      ownPass: !!o
    })));
    return Us(s), s;
  }

  function* Vr(e, t, {
    type: r,
    alias: n,
    ownPass: o
  }) {
    let s = (0, Ms.getItemDescriptor)(e);
    if (s) return s;
    let i,
        a,
        u = e;
    Array.isArray(u) && (u.length === 3 ? [u, a, i] = u : [u, a] = u);
    let c,
        p = null;

    if (typeof u == "string") {
      if (typeof r != "string") throw new Error("To resolve a string-based item, the type of item must be given");
      let h = r === "plugin" ? Dr.loadPlugin : Dr.loadPreset,
          v = u;
      ({
        filepath: p,
        value: u
      } = yield* h(u, t)), c = {
        request: v,
        resolved: p
      };
    }

    if (!u) throw new Error(`Unexpected falsy value: ${String(u)}`);
    if (typeof u == "object" && u.__esModule) if (u.default) u = u.default;else throw new Error("Must export a default export when using ES6 modules.");
    if (typeof u != "object" && typeof u != "function") throw new Error(`Unsupported format: ${typeof u}. Expected an object or a function.`);
    if (p !== null && typeof u == "object" && u) throw new Error(`Plugin/Preset files are not allowed to export objects, only functions. In ${p}`);
    return {
      name: i,
      alias: p || n,
      value: u,
      options: a,
      dirname: t,
      ownPass: o,
      file: c
    };
  }

  function Us(e) {
    let t = new Map();

    for (let r of e) {
      if (typeof r.value != "function") continue;
      let n = t.get(r.value);

      if (n || (n = new Set(), t.set(r.value, n)), n.has(r.name)) {
        let o = e.filter(s => s.value === r.value);
        throw new Error(["Duplicate plugin/preset detected.", "If you'd like to use two separate instances of a plugin,", "they need separate names, e.g.", "", "  plugins: [", "    ['some-plugin', {}],", "    ['some-plugin', {}, 'some unique name'],", "  ]", "", "Duplicates detected are:", `${JSON.stringify(o, null, 2)}`].join(`
`));
      }

      n.add(r.name);
    }
  }
});
var ie = b(ae => {
  "use strict";

  Object.defineProperty(ae, "__esModule", {
    value: !0
  });
  ae.createConfigItem = Hs;
  ae.createItemFromDescriptor = zr;
  ae.getItemDescriptor = Vs;

  function Gr() {
    let e = __path$;
    return Gr = function () {
      return e;
    }, e;
  }

  var Ws = pt();

  function zr(e) {
    return new Me(e);
  }

  function* Hs(e, {
    dirname: t = ".",
    type: r
  } = {}) {
    let n = yield* (0, Ws.createDescriptor)(e, Gr().resolve(t), {
      type: r,
      alias: "programmatic item"
    });
    return zr(n);
  }

  function Vs(e) {
    if (e != null && e[dt]) return e._descriptor;
  }

  var dt = Symbol.for("@babel/core@7 - ConfigItem"),
      Me = class {
    constructor(t) {
      this._descriptor = void 0, this[dt] = !0, this.value = void 0, this.options = void 0, this.dirname = void 0, this.name = void 0, this.file = void 0, this._descriptor = t, Object.defineProperty(this, "_descriptor", {
        enumerable: !1
      }), Object.defineProperty(this, dt, {
        enumerable: !1
      }), this.value = this._descriptor.value, this.options = this._descriptor.options, this.dirname = this._descriptor.dirname, this.name = this._descriptor.name, this.file = this._descriptor.file ? {
        request: this._descriptor.file.request,
        resolved: this._descriptor.file.resolved
      } : void 0, Object.freeze(this);
    }

  };
  Object.freeze(Me.prototype);
});
var Jr = b($e => {
  "use strict";

  Object.defineProperty($e, "__esModule", {
    value: !0
  });
  $e.default = void 0;
  var Gs = {
    auxiliaryComment: {
      message: "Use `auxiliaryCommentBefore` or `auxiliaryCommentAfter`"
    },
    blacklist: {
      message: "Put the specific transforms you want in the `plugins` option"
    },
    breakConfig: {
      message: "This is not a necessary option in Babel 6"
    },
    experimental: {
      message: "Put the specific transforms you want in the `plugins` option"
    },
    externalHelpers: {
      message: "Use the `external-helpers` plugin instead. Check out http://babeljs.io/docs/plugins/external-helpers/"
    },
    extra: {
      message: ""
    },
    jsxPragma: {
      message: "use the `pragma` option in the `react-jsx` plugin. Check out http://babeljs.io/docs/plugins/transform-react-jsx/"
    },
    loose: {
      message: "Specify the `loose` option for the relevant plugin you are using or use a preset that sets the option."
    },
    metadataUsedHelpers: {
      message: "Not required anymore as this is enabled by default"
    },
    modules: {
      message: "Use the corresponding module transform plugin in the `plugins` option. Check out http://babeljs.io/docs/plugins/#modules"
    },
    nonStandard: {
      message: "Use the `react-jsx` and `flow-strip-types` plugins to support JSX and Flow. Also check out the react preset http://babeljs.io/docs/plugins/preset-react/"
    },
    optional: {
      message: "Put the specific transforms you want in the `plugins` option"
    },
    sourceMapName: {
      message: "The `sourceMapName` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."
    },
    stage: {
      message: "Check out the corresponding stage-x presets http://babeljs.io/docs/plugins/#presets"
    },
    whitelist: {
      message: "Put the specific transforms you want in the `plugins` option"
    },
    resolveModuleSource: {
      version: 6,
      message: "Use `babel-plugin-module-resolver@3`'s 'resolvePath' options"
    },
    metadata: {
      version: 6,
      message: "Generated plugin metadata is always included in the output result"
    },
    sourceMapTarget: {
      version: 6,
      message: "The `sourceMapTarget` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."
    }
  };
  $e.default = Gs;
});
var mt = b(_ => {
  "use strict";

  Object.defineProperty(_, "__esModule", {
    value: !0
  });
  _.access = x;
  _.assertArray = gt;
  _.assertAssumptions = fi;
  _.assertBabelrcSearch = ii;
  _.assertBoolean = bt;
  _.assertCallerMetadata = Qs;
  _.assertCompact = Ks;
  _.assertConfigApplicableTest = oi;
  _.assertConfigFileSearch = si;
  _.assertFunction = ti;
  _.assertIgnoreList = ri;
  _.assertInputSourceMap = Zs;
  _.assertObject = Xr;
  _.assertPluginList = ai;
  _.assertRootMode = Js;
  _.assertSourceMaps = Ys;
  _.assertSourceType = Xs;
  _.assertString = ei;
  _.assertTargets = li;
  _.msg = m;

  function ue() {
    let e = ___babel_helper_compilation_targets$;
    return ue = function () {
      return e;
    }, e;
  }

  var zs = le();

  function m(e) {
    switch (e.type) {
      case "root":
        return "";

      case "env":
        return `${m(e.parent)}.env["${e.name}"]`;

      case "overrides":
        return `${m(e.parent)}.overrides[${e.index}]`;

      case "option":
        return `${m(e.parent)}.${e.name}`;

      case "access":
        return `${m(e.parent)}[${JSON.stringify(e.name)}]`;

      default:
        throw new Error(`Assertion failure: Unknown type ${e.type}`);
    }
  }

  function x(e, t) {
    return {
      type: "access",
      name: t,
      parent: e
    };
  }

  function Js(e, t) {
    if (t !== void 0 && t !== "root" && t !== "upward" && t !== "upward-optional") throw new Error(`${m(e)} must be a "root", "upward", "upward-optional" or undefined`);
    return t;
  }

  function Ys(e, t) {
    if (t !== void 0 && typeof t != "boolean" && t !== "inline" && t !== "both") throw new Error(`${m(e)} must be a boolean, "inline", "both", or undefined`);
    return t;
  }

  function Ks(e, t) {
    if (t !== void 0 && typeof t != "boolean" && t !== "auto") throw new Error(`${m(e)} must be a boolean, "auto", or undefined`);
    return t;
  }

  function Xs(e, t) {
    if (t !== void 0 && t !== "module" && t !== "script" && t !== "unambiguous") throw new Error(`${m(e)} must be "module", "script", "unambiguous", or undefined`);
    return t;
  }

  function Qs(e, t) {
    let r = Xr(e, t);

    if (r) {
      if (typeof r.name != "string") throw new Error(`${m(e)} set but does not contain "name" property string`);

      for (let n of Object.keys(r)) {
        let o = x(e, n),
            s = r[n];
        if (s != null && typeof s != "boolean" && typeof s != "string" && typeof s != "number") throw new Error(`${m(o)} must be null, undefined, a boolean, a string, or a number.`);
      }
    }

    return t;
  }

  function Zs(e, t) {
    if (t !== void 0 && typeof t != "boolean" && (typeof t != "object" || !t)) throw new Error(`${m(e)} must be a boolean, object, or undefined`);
    return t;
  }

  function ei(e, t) {
    if (t !== void 0 && typeof t != "string") throw new Error(`${m(e)} must be a string, or undefined`);
    return t;
  }

  function ti(e, t) {
    if (t !== void 0 && typeof t != "function") throw new Error(`${m(e)} must be a function, or undefined`);
    return t;
  }

  function bt(e, t) {
    if (t !== void 0 && typeof t != "boolean") throw new Error(`${m(e)} must be a boolean, or undefined`);
    return t;
  }

  function Xr(e, t) {
    if (t !== void 0 && (typeof t != "object" || Array.isArray(t) || !t)) throw new Error(`${m(e)} must be an object, or undefined`);
    return t;
  }

  function gt(e, t) {
    if (t != null && !Array.isArray(t)) throw new Error(`${m(e)} must be an array, or undefined`);
    return t;
  }

  function ri(e, t) {
    let r = gt(e, t);
    return r && r.forEach((n, o) => ni(x(e, o), n)), r;
  }

  function ni(e, t) {
    if (typeof t != "string" && typeof t != "function" && !(t instanceof RegExp)) throw new Error(`${m(e)} must be an array of string/Function/RegExp values, or undefined`);
    return t;
  }

  function oi(e, t) {
    if (t === void 0) return t;
    if (Array.isArray(t)) t.forEach((r, n) => {
      if (!Ne(r)) throw new Error(`${m(x(e, n))} must be a string/Function/RegExp.`);
    });else if (!Ne(t)) throw new Error(`${m(e)} must be a string/Function/RegExp, or an array of those`);
    return t;
  }

  function Ne(e) {
    return typeof e == "string" || typeof e == "function" || e instanceof RegExp;
  }

  function si(e, t) {
    if (t !== void 0 && typeof t != "boolean" && typeof t != "string") throw new Error(`${m(e)} must be a undefined, a boolean, a string, got ${JSON.stringify(t)}`);
    return t;
  }

  function ii(e, t) {
    if (t === void 0 || typeof t == "boolean") return t;
    if (Array.isArray(t)) t.forEach((r, n) => {
      if (!Ne(r)) throw new Error(`${m(x(e, n))} must be a string/Function/RegExp.`);
    });else if (!Ne(t)) throw new Error(`${m(e)} must be a undefined, a boolean, a string/Function/RegExp or an array of those, got ${JSON.stringify(t)}`);
    return t;
  }

  function ai(e, t) {
    let r = gt(e, t);
    return r && r.forEach((n, o) => ui(x(e, o), n)), r;
  }

  function ui(e, t) {
    if (Array.isArray(t)) {
      if (t.length === 0) throw new Error(`${m(e)} must include an object`);
      if (t.length > 3) throw new Error(`${m(e)} may only be a two-tuple or three-tuple`);

      if (Yr(x(e, 0), t[0]), t.length > 1) {
        let r = t[1];
        if (r !== void 0 && r !== !1 && (typeof r != "object" || Array.isArray(r) || r === null)) throw new Error(`${m(x(e, 1))} must be an object, false, or undefined`);
      }

      if (t.length === 3) {
        let r = t[2];
        if (r !== void 0 && typeof r != "string") throw new Error(`${m(x(e, 2))} must be a string, or undefined`);
      }
    } else Yr(e, t);

    return t;
  }

  function Yr(e, t) {
    if ((typeof t != "object" || !t) && typeof t != "string" && typeof t != "function") throw new Error(`${m(e)} must be a string, object, function`);
    return t;
  }

  function li(e, t) {
    if ((0, ue().isBrowsersQueryValid)(t)) return t;
    if (typeof t != "object" || !t || Array.isArray(t)) throw new Error(`${m(e)} must be a string, an array of strings or an object`);
    let r = x(e, "browsers"),
        n = x(e, "esmodules");
    Kr(r, t.browsers), bt(n, t.esmodules);

    for (let o of Object.keys(t)) {
      let s = t[o],
          i = x(e, o);
      if (o === "esmodules") bt(i, s);else if (o === "browsers") Kr(i, s);else if (Object.hasOwnProperty.call(ue().TargetNames, o)) ci(i, s);else {
        let a = Object.keys(ue().TargetNames).join(", ");
        throw new Error(`${m(i)} is not a valid target. Supported targets are ${a}`);
      }
    }

    return t;
  }

  function Kr(e, t) {
    if (t !== void 0 && !(0, ue().isBrowsersQueryValid)(t)) throw new Error(`${m(e)} must be undefined, a string or an array of strings`);
  }

  function ci(e, t) {
    if (!(typeof t == "number" && Math.round(t) === t) && typeof t != "string") throw new Error(`${m(e)} must be a string or an integer number`);
  }

  function fi(e, t) {
    if (t === void 0) return;
    if (typeof t != "object" || t === null) throw new Error(`${m(e)} must be an object or undefined.`);
    let r = e;

    do r = r.parent; while (r.type !== "root");

    let n = r.source === "preset";

    for (let o of Object.keys(t)) {
      let s = x(e, o);
      if (!zs.assumptionsNames.has(o)) throw new Error(`${m(s)} is not a supported assumption.`);
      if (typeof t[o] != "boolean") throw new Error(`${m(s)} must be a boolean.`);
      if (n && t[o] === !1) throw new Error(`${m(s)} cannot be set to 'false' inside presets.`);
    }

    return t;
  }
});
var le = b(J => {
  "use strict";

  Object.defineProperty(J, "__esModule", {
    value: !0
  });
  J.assumptionsNames = void 0;
  J.checkNoUnwrappedItemOptionPairs = vi;
  J.validate = bi;
  var Wu = re(),
      Qr = Jr(),
      l = mt(),
      Zr = {
    cwd: l.assertString,
    root: l.assertString,
    rootMode: l.assertRootMode,
    configFile: l.assertConfigFileSearch,
    caller: l.assertCallerMetadata,
    filename: l.assertString,
    filenameRelative: l.assertString,
    code: l.assertBoolean,
    ast: l.assertBoolean,
    cloneInputAst: l.assertBoolean,
    envName: l.assertString
  },
      en = {
    babelrc: l.assertBoolean,
    babelrcRoots: l.assertBabelrcSearch
  },
      tn = {
    extends: l.assertString,
    ignore: l.assertIgnoreList,
    only: l.assertIgnoreList,
    targets: l.assertTargets,
    browserslistConfigFile: l.assertConfigFileSearch,
    browserslistEnv: l.assertString
  },
      nn = {
    inputSourceMap: l.assertInputSourceMap,
    presets: l.assertPluginList,
    plugins: l.assertPluginList,
    passPerPreset: l.assertBoolean,
    assumptions: l.assertAssumptions,
    env: hi,
    overrides: yi,
    test: l.assertConfigApplicableTest,
    include: l.assertConfigApplicableTest,
    exclude: l.assertConfigApplicableTest,
    retainLines: l.assertBoolean,
    comments: l.assertBoolean,
    shouldPrintComment: l.assertFunction,
    compact: l.assertCompact,
    minified: l.assertBoolean,
    auxiliaryCommentBefore: l.assertString,
    auxiliaryCommentAfter: l.assertString,
    sourceType: l.assertSourceType,
    wrapPluginVisitorMethod: l.assertFunction,
    highlightCode: l.assertBoolean,
    sourceMaps: l.assertSourceMaps,
    sourceMap: l.assertSourceMaps,
    sourceFileName: l.assertString,
    sourceRoot: l.assertString,
    parserOpts: l.assertObject,
    generatorOpts: l.assertObject
  };
  Object.assign(nn, {
    getModuleId: l.assertFunction,
    moduleRoot: l.assertString,
    moduleIds: l.assertBoolean,
    moduleId: l.assertString
  });
  var pi = ["arrayLikeIsIterable", "constantReexports", "constantSuper", "enumerableModuleMeta", "ignoreFunctionLength", "ignoreToPrimitiveHint", "iterableIsArray", "mutableTemplateObject", "noClassCalls", "noDocumentAll", "noIncompleteNsImportDetection", "noNewArrows", "objectRestNoSymbols", "privateFieldsAsProperties", "pureGetters", "setClassMethods", "setComputedProperties", "setPublicClassFields", "setSpreadProperties", "skipForOfIteratorClosing", "superIsCallableConstructor"],
      di = new Set(pi);
  J.assumptionsNames = di;

  function on(e) {
    return e.type === "root" ? e.source : on(e.parent);
  }

  function bi(e, t) {
    return ht({
      type: "root",
      source: e
    }, t);
  }

  function ht(e, t) {
    let r = on(e);
    return mi(t), Object.keys(t).forEach(n => {
      let o = {
        type: "option",
        name: n,
        parent: e
      };
      if (r === "preset" && tn[n]) throw new Error(`${(0, l.msg)(o)} is not allowed in preset options`);
      if (r !== "arguments" && Zr[n]) throw new Error(`${(0, l.msg)(o)} is only allowed in root programmatic options`);
      if (r !== "arguments" && r !== "configfile" && en[n]) throw r === "babelrcfile" || r === "extendsfile" ? new Error(`${(0, l.msg)(o)} is not allowed in .babelrc or "extends"ed files, only in root programmatic options, or babel.config.js/config file options`) : new Error(`${(0, l.msg)(o)} is only allowed in root programmatic options, or babel.config.js/config file options`);
      (nn[n] || tn[n] || en[n] || Zr[n] || gi)(o, t[n]);
    }), t;
  }

  function gi(e) {
    let t = e.name;

    if (Qr.default[t]) {
      let {
        message: r,
        version: n = 5
      } = Qr.default[t];
      throw new Error(`Using removed Babel ${n} option: ${(0, l.msg)(e)} - ${r}`);
    } else {
      let r = new Error(`Unknown option: ${(0, l.msg)(e)}. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.`);
      throw r.code = "BABEL_UNKNOWN_OPTION", r;
    }
  }

  function rn(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }

  function mi(e) {
    if (rn(e, "sourceMap") && rn(e, "sourceMaps")) throw new Error(".sourceMap is an alias for .sourceMaps, cannot use both");
  }

  function hi(e, t) {
    if (e.parent.type === "env") throw new Error(`${(0, l.msg)(e)} is not allowed inside of another .env block`);
    let r = e.parent,
        n = (0, l.assertObject)(e, t);
    if (n) for (let o of Object.keys(n)) {
      let s = (0, l.assertObject)((0, l.access)(e, o), n[o]);
      if (!s) continue;
      ht({
        type: "env",
        name: o,
        parent: r
      }, s);
    }
    return n;
  }

  function yi(e, t) {
    if (e.parent.type === "env") throw new Error(`${(0, l.msg)(e)} is not allowed inside an .env block`);
    if (e.parent.type === "overrides") throw new Error(`${(0, l.msg)(e)} is not allowed inside an .overrides block`);
    let r = e.parent,
        n = (0, l.assertArray)(e, t);
    if (n) for (let [o, s] of n.entries()) {
      let i = (0, l.access)(e, o),
          a = (0, l.assertObject)(i, s);
      if (!a) throw new Error(`${(0, l.msg)(i)} must be an object`);
      ht({
        type: "overrides",
        index: o,
        parent: r
      }, a);
    }
    return n;
  }

  function vi(e, t, r, n) {
    if (t === 0) return;
    let o = e[t - 1],
        s = e[t];
    o.file && o.options === void 0 && typeof s.value == "object" && (n.message += `
- Maybe you meant to use
"${r}s": [
  ["${o.file.request}", ${JSON.stringify(s.value, void 0, 2)}]
]
To be a valid ${r}, its name and options should be wrapped in a pair of brackets`);
  }
});
var un = b(_t => {
  "use strict";

  Object.defineProperty(_t, "__esModule", {
    value: !0
  });
  _t.default = Oi;

  function Ie() {
    let e = __path$;
    return Ie = function () {
      return e;
    }, e;
  }

  var ce = `\\${Ie().sep}`,
      yt = `(?:${ce}|$)`,
      vt = `[^${ce}]+`,
      wt = `(?:${vt}${ce})`,
      an = `(?:${vt}${yt})`,
      wi = `${wt}*?`,
      _i = `${wt}*?${an}?`;

  function sn(e) {
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  }

  function Oi(e, t) {
    let r = Ie().resolve(t, e).split(Ie().sep);
    return new RegExp(["^", ...r.map((n, o) => {
      let s = o === r.length - 1;
      return n === "**" ? s ? _i : wi : n === "*" ? s ? an : wt : n.indexOf("*.") === 0 ? vt + sn(n.slice(1)) + (s ? yt : ce) : sn(n) + (s ? yt : ce);
    })].join(""));
  }
});
var pn = b(Y => {
  "use strict";

  Object.defineProperty(Y, "__esModule", {
    value: !0
  });
  Y.ConfigPrinter = Y.ChainFormatter = void 0;

  function cn() {
    let e = __gensync$;
    return cn = function () {
      return e;
    }, e;
  }

  var fn = {
    Programmatic: 0,
    Config: 1
  };
  Y.ChainFormatter = fn;
  var Ot = {
    title(e, t, r) {
      let n = "";
      return e === fn.Programmatic ? (n = "programmatic options", t && (n += " from " + t)) : n = "config " + r, n;
    },

    loc(e, t) {
      let r = "";
      return e != null && (r += `.overrides[${e}]`), t != null && (r += `.env["${t}"]`), r;
    },

    *optionsAndDescriptors(e) {
      let t = Object.assign({}, e.options);
      delete t.overrides, delete t.env;
      let r = [...(yield* e.plugins())];
      r.length && (t.plugins = r.map(o => ln(o)));
      let n = [...(yield* e.presets())];
      return n.length && (t.presets = [...n].map(o => ln(o))), JSON.stringify(t, void 0, 2);
    }

  };

  function ln(e) {
    var t;
    let r = (t = e.file) == null ? void 0 : t.request;
    return r == null && (typeof e.value == "object" ? r = e.value : typeof e.value == "function" && (r = `[Function: ${e.value.toString().slice(0, 50)} ... ]`)), r == null && (r = "[Unknown]"), e.options === void 0 ? r : e.name == null ? [r, e.options] : [r, e.options, e.name];
  }

  var fe = class {
    constructor() {
      this._stack = [];
    }

    configure(t, r, {
      callerName: n,
      filepath: o
    }) {
      return t ? (s, i, a) => {
        this._stack.push({
          type: r,
          callerName: n,
          filepath: o,
          content: s,
          index: i,
          envName: a
        });
      } : () => {};
    }

    static *format(t) {
      let r = Ot.title(t.type, t.callerName, t.filepath),
          n = Ot.loc(t.index, t.envName);
      n && (r += ` ${n}`);
      let o = yield* Ot.optionsAndDescriptors(t.content);
      return `${r}
${o}`;
    }

    *output() {
      return this._stack.length === 0 ? "" : (yield* cn().all(this._stack.map(r => fe.format(r)))).join(`

`);
    }

  };
  Y.ConfigPrinter = fe;
});
var Mt = b(X => {
  "use strict";

  Object.defineProperty(X, "__esModule", {
    value: !0
  });
  X.buildPresetChain = Pi;
  X.buildPresetChainWalker = void 0;
  X.buildRootChain = ki;

  function gn() {
    let e = __path$;
    return gn = function () {
      return e;
    }, e;
  }

  function mn() {
    let e = __debug$;
    return mn = function () {
      return e;
    }, e;
  }

  var St = le(),
      hn = un(),
      de = pn(),
      pe = te(),
      E = ne(),
      F = pt(),
      dn = mn()("babel:config:config-chain");

  function* Pi(e, t) {
    let r = yield* yn(e, t);
    return r ? {
      plugins: Re(r.plugins),
      presets: Re(r.presets),
      options: r.options.map(n => vn(n)),
      files: new Set()
    } : null;
  }

  var yn = Ft({
    root: e => Ci(e),
    env: (e, t) => Ei(e)(t),
    overrides: (e, t) => Si(e)(t),
    overridesEnv: (e, t, r) => Ai(e)(t)(r),
    createLogger: () => () => {}
  });
  X.buildPresetChainWalker = yn;
  var Ci = (0, E.makeWeakCacheSync)(e => At(e, e.alias, F.createUncachedDescriptors)),
      Ei = (0, E.makeWeakCacheSync)(e => (0, E.makeStrongCacheSync)(t => kt(e, e.alias, F.createUncachedDescriptors, t))),
      Si = (0, E.makeWeakCacheSync)(e => (0, E.makeStrongCacheSync)(t => xt(e, e.alias, F.createUncachedDescriptors, t))),
      Ai = (0, E.makeWeakCacheSync)(e => (0, E.makeStrongCacheSync)(t => (0, E.makeStrongCacheSync)(r => jt(e, e.alias, F.createUncachedDescriptors, t, r))));

  function* ki(e, t) {
    let r,
        n,
        o = new de.ConfigPrinter(),
        s = yield* $i({
      options: e,
      dirname: t.cwd
    }, t, void 0, o);
    if (!s) return null;
    let i = yield* o.output(),
        a;
    typeof e.configFile == "string" ? a = yield* (0, pe.loadConfig)(e.configFile, t.cwd, t.envName, t.caller) : e.configFile !== !1 && (a = yield* (0, pe.findRootConfig)(t.root, t.envName, t.caller));
    let {
      babelrc: u,
      babelrcRoots: c
    } = e,
        p = t.cwd,
        h = De(),
        v = new de.ConfigPrinter();

    if (a) {
      let w = ji(a),
          V = yield* Ct(w, t, void 0, v);
      if (!V) return null;
      r = yield* v.output(), u === void 0 && (u = w.options.babelrc), c === void 0 && (p = w.dirname, c = w.options.babelrcRoots), K(h, V);
    }

    let y,
        g,
        O = !1,
        P = De();

    if ((u === !0 || u === void 0) && typeof t.filename == "string") {
      let w = yield* (0, pe.findPackageData)(t.filename);

      if (w && xi(t, w, c, p)) {
        if (({
          ignore: y,
          config: g
        } = yield* (0, pe.findRelativeConfig)(w, t.envName, t.caller)), y && P.files.add(y.filepath), y && wn(t, y.ignore, null, y.dirname) && (O = !0), g && !O) {
          let V = Fi(g),
              M = new de.ConfigPrinter(),
              j = yield* Ct(V, t, void 0, M);
          j ? (n = yield* M.output(), K(P, j)) : O = !0;
        }

        g && O && P.files.add(g.filepath);
      }
    }

    t.showConfig && console.log(`Babel configs on "${t.filename}" (ascending priority):
` + [r, n, i].filter(w => !!w).join(`

`) + `
-----End Babel configs-----`);
    let D = K(K(K(De(), h), P), s);
    return {
      plugins: O ? [] : Re(D.plugins),
      presets: O ? [] : Re(D.presets),
      options: O ? [] : D.options.map(w => vn(w)),
      fileHandling: O ? "ignored" : "transpile",
      ignore: y || void 0,
      babelrc: g || void 0,
      config: a || void 0,
      files: D.files
    };
  }

  function xi(e, t, r, n) {
    if (typeof r == "boolean") return r;
    let o = e.root;
    if (r === void 0) return t.directories.indexOf(o) !== -1;
    let s = r;
    return Array.isArray(s) || (s = [s]), s = s.map(i => typeof i == "string" ? gn().resolve(n, i) : i), s.length === 1 && s[0] === o ? t.directories.indexOf(o) !== -1 : s.some(i => (typeof i == "string" && (i = (0, hn.default)(i, n)), t.directories.some(a => _n(i, n, a, e))));
  }

  var ji = (0, E.makeWeakCacheSync)(e => ({
    filepath: e.filepath,
    dirname: e.dirname,
    options: (0, St.validate)("configfile", e.options)
  })),
      Fi = (0, E.makeWeakCacheSync)(e => ({
    filepath: e.filepath,
    dirname: e.dirname,
    options: (0, St.validate)("babelrcfile", e.options)
  })),
      Mi = (0, E.makeWeakCacheSync)(e => ({
    filepath: e.filepath,
    dirname: e.dirname,
    options: (0, St.validate)("extendsfile", e.options)
  })),
      $i = Ft({
    root: e => At(e, "base", F.createCachedDescriptors),
    env: (e, t) => kt(e, "base", F.createCachedDescriptors, t),
    overrides: (e, t) => xt(e, "base", F.createCachedDescriptors, t),
    overridesEnv: (e, t, r) => jt(e, "base", F.createCachedDescriptors, t, r),
    createLogger: (e, t, r) => Bi(e, t, r)
  }),
      Ni = Ft({
    root: e => Ii(e),
    env: (e, t) => qi(e)(t),
    overrides: (e, t) => Di(e)(t),
    overridesEnv: (e, t, r) => Ri(e)(t)(r),
    createLogger: (e, t, r) => Ti(e.filepath, t, r)
  });

  function* Ct(e, t, r, n) {
    let o = yield* Ni(e, t, r, n);
    return o && o.files.add(e.filepath), o;
  }

  var Ii = (0, E.makeWeakCacheSync)(e => At(e, e.filepath, F.createUncachedDescriptors)),
      qi = (0, E.makeWeakCacheSync)(e => (0, E.makeStrongCacheSync)(t => kt(e, e.filepath, F.createUncachedDescriptors, t))),
      Di = (0, E.makeWeakCacheSync)(e => (0, E.makeStrongCacheSync)(t => xt(e, e.filepath, F.createUncachedDescriptors, t))),
      Ri = (0, E.makeWeakCacheSync)(e => (0, E.makeStrongCacheSync)(t => (0, E.makeStrongCacheSync)(r => jt(e, e.filepath, F.createUncachedDescriptors, t, r))));

  function Ti(e, t, r) {
    return r ? r.configure(t.showConfig, de.ChainFormatter.Config, {
      filepath: e
    }) : () => {};
  }

  function At({
    dirname: e,
    options: t
  }, r, n) {
    return n(e, t, r);
  }

  function Bi(e, t, r) {
    var n;
    return r ? r.configure(t.showConfig, de.ChainFormatter.Programmatic, {
      callerName: (n = t.caller) == null ? void 0 : n.name
    }) : () => {};
  }

  function kt({
    dirname: e,
    options: t
  }, r, n, o) {
    let s = t.env && t.env[o];
    return s ? n(e, s, `${r}.env["${o}"]`) : null;
  }

  function xt({
    dirname: e,
    options: t
  }, r, n, o) {
    let s = t.overrides && t.overrides[o];
    if (!s) throw new Error("Assertion failure - missing override");
    return n(e, s, `${r}.overrides[${o}]`);
  }

  function jt({
    dirname: e,
    options: t
  }, r, n, o, s) {
    let i = t.overrides && t.overrides[o];
    if (!i) throw new Error("Assertion failure - missing override");
    let a = i.env && i.env[s];
    return a ? n(e, a, `${r}.overrides[${o}].env["${s}"]`) : null;
  }

  function Ft({
    root: e,
    env: t,
    overrides: r,
    overridesEnv: n,
    createLogger: o
  }) {
    return function* (s, i, a = new Set(), u) {
      let {
        dirname: c
      } = s,
          p = [],
          h = e(s);

      if (qe(h, c, i)) {
        p.push({
          config: h,
          envName: void 0,
          index: void 0
        });
        let g = t(s, i.envName);
        g && qe(g, c, i) && p.push({
          config: g,
          envName: i.envName,
          index: void 0
        }), (h.options.overrides || []).forEach((O, P) => {
          let D = r(s, P);

          if (qe(D, c, i)) {
            p.push({
              config: D,
              index: P,
              envName: void 0
            });
            let w = n(s, P, i.envName);
            w && qe(w, c, i) && p.push({
              config: w,
              index: P,
              envName: i.envName
            });
          }
        });
      }

      if (p.some(({
        config: {
          options: {
            ignore: g,
            only: O
          }
        }
      }) => wn(i, g, O, c))) return null;
      let v = De(),
          y = o(s, i, u);

      for (let {
        config: g,
        index: O,
        envName: P
      } of p) {
        if (!(yield* Li(v, g.options, c, i, a, u))) return null;
        y(g, O, P), yield* Ui(v, g);
      }

      return v;
    };
  }

  function* Li(e, t, r, n, o, s) {
    if (t.extends === void 0) return !0;
    let i = yield* (0, pe.loadConfig)(t.extends, r, n.envName, n.caller);
    if (o.has(i)) throw new Error(`Configuration cycle detected loading ${i.filepath}.
File already loaded following the config chain:
` + Array.from(o, u => ` - ${u.filepath}`).join(`
`));
    o.add(i);
    let a = yield* Ct(Mi(i), n, o, s);
    return o.delete(i), a ? (K(e, a), !0) : !1;
  }

  function K(e, t) {
    e.options.push(...t.options), e.plugins.push(...t.plugins), e.presets.push(...t.presets);

    for (let r of t.files) e.files.add(r);

    return e;
  }

  function* Ui(e, {
    options: t,
    plugins: r,
    presets: n
  }) {
    return e.options.push(t), e.plugins.push(...(yield* r())), e.presets.push(...(yield* n())), e;
  }

  function De() {
    return {
      options: [],
      presets: [],
      plugins: [],
      files: new Set()
    };
  }

  function vn(e) {
    let t = Object.assign({}, e);
    return delete t.extends, delete t.env, delete t.overrides, delete t.plugins, delete t.presets, delete t.passPerPreset, delete t.ignore, delete t.only, delete t.test, delete t.include, delete t.exclude, Object.prototype.hasOwnProperty.call(t, "sourceMap") && (t.sourceMaps = t.sourceMap, delete t.sourceMap), t;
  }

  function Re(e) {
    let t = new Map(),
        r = [];

    for (let n of e) if (typeof n.value == "function") {
      let o = n.value,
          s = t.get(o);
      s || (s = new Map(), t.set(o, s));
      let i = s.get(n.name);
      i ? i.value = n : (i = {
        value: n
      }, r.push(i), n.ownPass || s.set(n.name, i));
    } else r.push({
      value: n
    });

    return r.reduce((n, o) => (n.push(o.value), n), []);
  }

  function qe({
    options: e
  }, t, r) {
    return (e.test === void 0 || Pt(r, e.test, t)) && (e.include === void 0 || Pt(r, e.include, t)) && (e.exclude === void 0 || !Pt(r, e.exclude, t));
  }

  function Pt(e, t, r) {
    let n = Array.isArray(t) ? t : [t];
    return Et(e, n, r);
  }

  function bn(e, t) {
    return t instanceof RegExp ? String(t) : t;
  }

  function wn(e, t, r, n) {
    if (t && Et(e, t, n)) {
      var o;
      let i = `No config is applied to "${(o = e.filename) != null ? o : "(unknown)"}" because it matches one of \`ignore: ${JSON.stringify(t, bn)}\` from "${n}"`;
      return dn(i), e.showConfig && console.log(i), !0;
    }

    if (r && !Et(e, r, n)) {
      var s;
      let i = `No config is applied to "${(s = e.filename) != null ? s : "(unknown)"}" because it fails to match one of \`only: ${JSON.stringify(r, bn)}\` from "${n}"`;
      return dn(i), e.showConfig && console.log(i), !0;
    }

    return !1;
  }

  function Et(e, t, r) {
    return t.some(n => _n(n, r, e.filename, e));
  }

  function _n(e, t, r, n) {
    if (typeof e == "function") return !!e(r, {
      dirname: t,
      envName: n.envName,
      caller: n.caller
    });
    if (typeof r != "string") throw new Error("Configuration contains string/RegExp pattern, but no filename was passed to Babel");
    return typeof e == "string" && (e = (0, hn.default)(e, t)), e.test(r);
  }
});
var On = b($t => {
  "use strict";

  Object.defineProperty($t, "__esModule", {
    value: !0
  });
  $t.validatePluginObject = Gi;
  var q = mt(),
      Wi = {
    name: q.assertString,
    manipulateOptions: q.assertFunction,
    pre: q.assertFunction,
    post: q.assertFunction,
    inherits: q.assertFunction,
    visitor: Hi,
    parserOverride: q.assertFunction,
    generatorOverride: q.assertFunction
  };

  function Hi(e, t) {
    let r = (0, q.assertObject)(e, t);
    if (r && (Object.keys(r).forEach(n => Vi(n, r[n])), r.enter || r.exit)) throw new Error(`${(0, q.msg)(e)} cannot contain catch-all "enter" or "exit" handlers. Please target individual nodes.`);
    return r;
  }

  function Vi(e, t) {
    if (t && typeof t == "object") Object.keys(t).forEach(r => {
      if (r !== "enter" && r !== "exit") throw new Error(`.visitor["${e}"] may only have .enter and/or .exit handlers.`);
    });else if (typeof t != "function") throw new Error(`.visitor["${e}"] must be a function`);
    return t;
  }

  function Gi(e) {
    let t = {
      type: "root",
      source: "plugin"
    };
    return Object.keys(e).forEach(r => {
      let n = Wi[r];
      if (n) n({
        type: "option",
        name: r,
        parent: t
      }, e[r]);else {
        let o = new Error(`.${r} is not a valid Plugin property`);
        throw o.code = "BABEL_UNKNOWN_PLUGIN_PROPERTY", o;
      }
    }), e;
  }
});
var Nt = b(() => {});
var An = b(be => {
  "use strict";

  Object.defineProperty(be, "__esModule", {
    value: !0
  });
  be.makeConfigAPI = En;
  be.makePluginAPI = zi;
  be.makePresetAPI = Sn;

  function Cn() {
    let e = __semver$;
    return Cn = function () {
      return e;
    }, e;
  }

  var Te = Be(),
      Pn = ne(),
      Xu = Nt();

  function En(e) {
    let t = n => e.using(o => typeof n > "u" ? o.envName : typeof n == "function" ? (0, Pn.assertSimpleType)(n(o.envName)) : (Array.isArray(n) || (n = [n]), n.some(s => {
      if (typeof s != "string") throw new Error("Unexpected non-string value");
      return s === o.envName;
    }))),
        r = n => e.using(o => (0, Pn.assertSimpleType)(n(o.caller)));

    return {
      version: Te.version,
      cache: e.simple(),
      env: t,
      async: () => !1,
      caller: r,
      assertVersion: Ji
    };
  }

  function Sn(e, t) {
    let r = () => JSON.parse(e.using(o => JSON.stringify(o.targets))),
        n = o => {
      t.push(o);
    };

    return Object.assign({}, En(e), {
      targets: r,
      addExternalDependency: n
    });
  }

  function zi(e, t) {
    let r = n => e.using(o => o.assumptions[n]);

    return Object.assign({}, Sn(e, t), {
      assumption: r
    });
  }

  function Ji(e) {
    if (typeof e == "number") {
      if (!Number.isInteger(e)) throw new Error("Expected string or integer value.");
      e = `^${e}.0.0-0`;
    }

    if (typeof e != "string") throw new Error("Expected string or integer value.");
    if (Cn().satisfies(Te.version, e)) return;
    let t = Error.stackTraceLimit;
    typeof t == "number" && t < 25 && (Error.stackTraceLimit = 25);
    let r = new Error(`Requires Babel "${e}", but was loaded with "${Te.version}". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.`);
    throw typeof t == "number" && (Error.stackTraceLimit = t), Object.assign(r, {
      code: "BABEL_VERSION_UNSUPPORTED",
      version: Te.version,
      range: e
    });
  }
});
var It = b(ge => {
  "use strict";

  Object.defineProperty(ge, "__esModule", {
    value: !0
  });
  ge.default = jn;
  ge.loadPartialConfig = void 0;

  function Le() {
    let e = __path$;
    return Le = function () {
      return e;
    }, e;
  }

  function xn() {
    let e = __gensync$;
    return xn = function () {
      return e;
    }, e;
  }

  var Yi = re(),
      Ki = Se(),
      kn = ie(),
      Xi = Mt(),
      Qi = it(),
      Zi = le(),
      Ue = te(),
      ea = ft(),
      ta = ["showIgnoredFiles"];

  function ra(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        o,
        s;

    for (s = 0; s < n.length; s++) o = n[s], !(t.indexOf(o) >= 0) && (r[o] = e[o]);

    return r;
  }

  function na(e, t) {
    switch (t) {
      case "root":
        return e;

      case "upward-optional":
        {
          let r = (0, Ue.findConfigUpwards)(e);
          return r === null ? e : r;
        }

      case "upward":
        {
          let r = (0, Ue.findConfigUpwards)(e);
          if (r !== null) return r;
          throw Object.assign(new Error(`Babel was run with rootMode:"upward" but a root could not be found when searching upward from "${e}".
One of the following config files must be in the directory tree: "${Ue.ROOT_CONFIG_FILENAMES.join(", ")}".`), {
            code: "BABEL_ROOT_NOT_FOUND",
            dirname: e
          });
        }

      default:
        throw new Error("Assertion failure - unknown rootMode value.");
    }
  }

  function* jn(e) {
    if (e != null && (typeof e != "object" || Array.isArray(e))) throw new Error("Babel options must be an object, null, or undefined");
    let t = e ? (0, Zi.validate)("arguments", e) : {},
        {
      envName: r = (0, Qi.getEnv)(),
      cwd: n = ".",
      root: o = ".",
      rootMode: s = "root",
      caller: i,
      cloneInputAst: a = !0
    } = t,
        u = Le().resolve(n),
        c = na(Le().resolve(u, o), s),
        p = typeof t.filename == "string" ? Le().resolve(n, t.filename) : void 0,
        h = yield* (0, Ue.resolveShowConfigPath)(u),
        v = {
      filename: p,
      cwd: u,
      root: c,
      envName: r,
      caller: i,
      showConfig: h === p
    },
        y = yield* (0, Xi.buildRootChain)(t, v);
    if (!y) return null;
    let g = {
      assumptions: {}
    };
    return y.options.forEach(P => {
      (0, Ki.mergeOptions)(g, P);
    }), {
      options: Object.assign({}, g, {
        targets: (0, ea.resolveTargets)(g, c),
        cloneInputAst: a,
        babelrc: !1,
        configFile: !1,
        browserslistConfigFile: !1,
        passPerPreset: !1,
        envName: v.envName,
        cwd: v.cwd,
        root: v.root,
        rootMode: "root",
        filename: typeof v.filename == "string" ? v.filename : void 0,
        plugins: y.plugins.map(P => (0, kn.createItemFromDescriptor)(P)),
        presets: y.presets.map(P => (0, kn.createItemFromDescriptor)(P))
      }),
      context: v,
      fileHandling: y.fileHandling,
      ignore: y.ignore,
      babelrc: y.babelrc,
      config: y.config,
      files: y.files
    };
  }

  var oa = xn()(function* (e) {
    let t = !1;

    if (typeof e == "object" && e !== null && !Array.isArray(e)) {
      var r = e;
      ({
        showIgnoredFiles: t
      } = r), e = ra(r, ta);
    }

    let n = yield* jn(e);
    if (!n) return null;
    let {
      options: o,
      babelrc: s,
      ignore: i,
      config: a,
      fileHandling: u,
      files: c
    } = n;
    return u === "ignored" && !t ? null : ((o.plugins || []).forEach(p => {
      if (p.value instanceof Yi.default) throw new Error("Passing cached plugin instances is not supported in babel.loadPartialConfig()");
    }), new We(o, s ? s.filepath : void 0, i ? i.filepath : void 0, a ? a.filepath : void 0, u, c));
  });
  ge.loadPartialConfig = oa;
  var We = class {
    constructor(t, r, n, o, s, i) {
      this.options = void 0, this.babelrc = void 0, this.babelignore = void 0, this.config = void 0, this.fileHandling = void 0, this.files = void 0, this.options = t, this.babelignore = n, this.babelrc = r, this.config = o, this.fileHandling = s, this.files = i, Object.freeze(this);
    }

    hasFilesystemConfig() {
      return this.babelrc !== void 0 || this.config !== void 0;
    }

  };
  Object.freeze(We.prototype);
});
var Tn = b(He => {
  "use strict";

  Object.defineProperty(He, "__esModule", {
    value: !0
  });
  He.default = void 0;

  function Nn() {
    let e = __gensync$;
    return Nn = function () {
      return e;
    }, e;
  }

  var Dt = at(),
      Fn = Se(),
      sa = Be(),
      In = re(),
      ia = ie(),
      aa = Mt(),
      Bt = ke();

  function Rt() {
    let e = ___babel_traverse$;
    return Rt = function () {
      return e;
    }, e;
  }

  var Lt = ne(),
      Tt = le(),
      ua = On(),
      qn = An(),
      la = It(),
      el = Nt(),
      ca = Nn()(function* (t) {
    var r;
    let n = yield* (0, la.default)(t);
    if (!n) return null;
    let {
      options: o,
      context: s,
      fileHandling: i
    } = n;
    if (i === "ignored") return null;
    let a = {},
        {
      plugins: u,
      presets: c
    } = o;
    if (!u || !c) throw new Error("Assertion failure - plugins and presets exist");

    let p = Object.assign({}, s, {
      targets: o.targets
    }),
        h = M => {
      let j = (0, ia.getItemDescriptor)(M);
      if (!j) throw new Error("Assertion failure - must be config item");
      return j;
    },
        v = c.map(h),
        y = u.map(h),
        g = [[]],
        O = [],
        P = [];

    if (yield* Mn(s, function* M(j, G) {
      let R = [];

      for (let S = 0; S < j.length; S++) {
        let N = j[S];

        if (N.options !== !1) {
          try {
            var T = yield* ga(N, p);
          } catch (ye) {
            throw ye.code === "BABEL_UNKNOWN_OPTION" && (0, Tt.checkNoUnwrappedItemOptionPairs)(j, S, "preset", ye), ye;
          }

          P.push(T.externalDependencies), N.ownPass ? R.push({
            preset: T.chain,
            pass: []
          }) : R.unshift({
            preset: T.chain,
            pass: G
          });
        }
      }

      if (R.length > 0) {
        g.splice(1, 0, ...R.map(S => S.pass).filter(S => S !== G));

        for (let {
          preset: S,
          pass: N
        } of R) {
          if (!S || (N.push(...S.plugins), yield* M(S.presets, N))) return !0;
          S.options.forEach(Eo => {
            (0, Fn.mergeOptions)(a, Eo);
          });
        }
      }
    })(v, g[0])) return null;
    let w = a;
    (0, Fn.mergeOptions)(w, o);
    let V = Object.assign({}, p, {
      assumptions: (r = w.assumptions) != null ? r : {}
    });
    return yield* Mn(s, function* () {
      g[0].unshift(...y);

      for (let G of g) {
        let R = [];
        O.push(R);

        for (let T = 0; T < G.length; T++) {
          let S = G[T];

          if (S.options !== !1) {
            try {
              var j = yield* Rn(S, V);
            } catch (N) {
              throw N.code === "BABEL_UNKNOWN_PLUGIN_PROPERTY" && (0, Tt.checkNoUnwrappedItemOptionPairs)(G, T, "plugin", N), N;
            }

            R.push(j), P.push(j.externalDependencies);
          }
        }
      }
    })(), w.plugins = O[0], w.presets = O.slice(1).filter(M => M.length > 0).map(M => ({
      plugins: M
    })), w.passPerPreset = w.presets.length > 0, {
      options: w,
      passes: O,
      externalDependencies: (0, Bt.finalize)(P)
    };
  });
  He.default = ca;

  function Mn(e, t) {
    return function* (r, n) {
      try {
        return yield* t(r, n);
      } catch (o) {
        throw /^\[BABEL\]/.test(o.message) || (o.message = `[BABEL] ${e.filename || "unknown"}: ${o.message}`), o;
      }
    };
  }

  var Dn = e => (0, Lt.makeWeakCache)(function* ({
    value: t,
    options: r,
    dirname: n,
    alias: o
  }, s) {
    if (r === !1) throw new Error("Assertion failure");
    r = r || {};
    let i = [],
        a = t;

    if (typeof t == "function") {
      let u = (0, Dt.maybeAsync)(t, "You appear to be using an async plugin/preset, but Babel has been called synchronously"),
          c = Object.assign({}, sa, e(s, i));

      try {
        a = yield* u(c, r, n);
      } catch (p) {
        throw o && (p.message += ` (While processing: ${JSON.stringify(o)})`), p;
      }
    }

    if (!a || typeof a != "object") throw new Error("Plugin/Preset did not return an object.");
    if ((0, Dt.isThenable)(a)) throw yield* [], new Error(`You appear to be using a promise as a plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version. As an alternative, you can prefix the promise with "await". (While processing: ${JSON.stringify(o)})`);

    if (i.length > 0 && (!s.configured() || s.mode() === "forever")) {
      let u = `A plugin/preset has external untracked dependencies (${i[0]}), but the cache `;
      throw s.configured() ? u += " has been configured to never be invalidated. " : u += "has not been configured to be invalidated when the external dependencies change. ", u += `Plugins/presets should configure their cache to be invalidated when the external dependencies change, for example using \`api.cache.invalidate(() => statSync(filepath).mtimeMs)\` or \`api.cache.never()\`
(While processing: ${JSON.stringify(o)})`, new Error(u);
    }

    return {
      value: a,
      options: r,
      dirname: n,
      alias: o,
      externalDependencies: (0, Bt.finalize)(i)
    };
  }),
      fa = Dn(qn.makePluginAPI),
      pa = Dn(qn.makePresetAPI);

  function* Rn(e, t) {
    if (e.value instanceof In.default) {
      if (e.options) throw new Error("Passed options to an existing Plugin instance will not work.");
      return e.value;
    }

    return yield* da(yield* fa(e, t), t);
  }

  var da = (0, Lt.makeWeakCache)(function* ({
    value: e,
    options: t,
    dirname: r,
    alias: n,
    externalDependencies: o
  }, s) {
    let i = (0, ua.validatePluginObject)(e),
        a = Object.assign({}, i);

    if (a.visitor && (a.visitor = Rt().default.explode(Object.assign({}, a.visitor))), a.inherits) {
      let u = {
        name: void 0,
        alias: `${n}$inherits`,
        value: a.inherits,
        options: t,
        dirname: r
      },
          c = yield* (0, Dt.forwardAsync)(Rn, p => s.invalidate(h => p(u, h)));
      a.pre = qt(c.pre, a.pre), a.post = qt(c.post, a.post), a.manipulateOptions = qt(c.manipulateOptions, a.manipulateOptions), a.visitor = Rt().default.visitors.merge([c.visitor || {}, a.visitor || {}]), c.externalDependencies.length > 0 && (o.length === 0 ? o = c.externalDependencies : o = (0, Bt.finalize)([o, c.externalDependencies]));
    }

    return new In.default(a, t, n, o);
  }),
      $n = (e, t) => {
    if (e.test || e.include || e.exclude) {
      let r = t.name ? `"${t.name}"` : "/* your preset */";
      throw new Error([`Preset ${r} requires a filename to be set when babel is called directly,`, "```", `babel.transform(code, { filename: 'file.ts', presets: [${r}] });`, "```", "See https://babeljs.io/docs/en/options#filename for more information."].join(`
`));
    }
  },
      ba = (e, t, r) => {
    if (!t.filename) {
      let {
        options: n
      } = e;
      $n(n, r), n.overrides && n.overrides.forEach(o => $n(o, r));
    }
  };

  function* ga(e, t) {
    let r = ma(yield* pa(e, t));
    return ba(r, t, e), {
      chain: yield* (0, aa.buildPresetChain)(r, t),
      externalDependencies: r.externalDependencies
    };
  }

  var ma = (0, Lt.makeWeakCacheSync)(({
    value: e,
    dirname: t,
    alias: r,
    externalDependencies: n
  }) => ({
    options: (0, Tt.validate)("preset", e),
    alias: r,
    dirname: t,
    externalDependencies: n
  }));

  function qt(e, t) {
    let r = [e, t].filter(Boolean);
    return r.length <= 1 ? r[0] : function (...n) {
      for (let o of r) o.apply(this, n);
    };
  }
});
var he = b(C => {
  "use strict";

  Object.defineProperty(C, "__esModule", {
    value: !0
  });
  C.createConfigItem = Sa;
  C.createConfigItemSync = C.createConfigItemAsync = void 0;
  Object.defineProperty(C, "default", {
    enumerable: !0,
    get: function () {
      return Bn.default;
    }
  });
  C.loadPartialConfigSync = C.loadPartialConfigAsync = C.loadPartialConfig = C.loadOptionsSync = C.loadOptionsAsync = C.loadOptions = void 0;

  function Ut() {
    let e = __gensync$;
    return Ut = function () {
      return e;
    }, e;
  }

  var Bn = Tn(),
      Wt = It(),
      ha = ie(),
      Ht = Ut()(function* (e) {
    var t;
    let r = yield* (0, Bn.default)(e);
    return (t = r?.options) != null ? t : null;
  }),
      me = Ut()(ha.createConfigItem),
      Ln = e => (t, r) => (r === void 0 && typeof t == "function" && (r = t, t = void 0), r ? e.errback(t, r) : e.sync(t)),
      ya = Ln(Wt.loadPartialConfig);

  C.loadPartialConfig = ya;
  var va = Wt.loadPartialConfig.sync;
  C.loadPartialConfigSync = va;
  var wa = Wt.loadPartialConfig.async;
  C.loadPartialConfigAsync = wa;

  var _a = Ln(Ht);

  C.loadOptions = _a;
  var Oa = Ht.sync;
  C.loadOptionsSync = Oa;
  var Pa = Ht.async;
  C.loadOptionsAsync = Pa;
  var Ca = me.sync;
  C.createConfigItemSync = Ca;
  var Ea = me.async;
  C.createConfigItemAsync = Ea;

  function Sa(e, t, r) {
    return r !== void 0 ? me.errback(e, t, r) : typeof t == "function" ? me.errback(e, void 0, r) : me.sync(e, t);
  }
});
var Un = b(Ge => {
  "use strict";

  Object.defineProperty(Ge, "__esModule", {
    value: !0
  });
  Ge.default = void 0;
  var Ve = class {
    constructor(t, r, n) {
      this._map = new Map(), this.key = void 0, this.file = void 0, this.opts = void 0, this.cwd = void 0, this.filename = void 0, this.key = r, this.file = t, this.opts = n || {}, this.cwd = t.opts.cwd, this.filename = t.opts.filename;
    }

    set(t, r) {
      this._map.set(t, r);
    }

    get(t) {
      return this._map.get(t);
    }

    availableHelper(t, r) {
      return this.file.availableHelper(t, r);
    }

    addHelper(t) {
      return this.file.addHelper(t);
    }

    addImport() {
      return this.file.addImport();
    }

    buildCodeFrameError(t, r, n) {
      return this.file.buildCodeFrameError(t, r, n);
    }

  };
  Ge.default = Ve;

  Ve.prototype.getModuleName = function () {
    return this.file.getModuleName();
  };
});
var Gn = b(Gt => {
  "use strict";

  Object.defineProperty(Gt, "__esModule", {
    value: !0
  });
  Gt.default = ka;

  function Hn() {
    let e = ___babel_traverse$;
    return Hn = function () {
      return e;
    }, e;
  }

  var Aa = re(),
      Vt;

  function ka() {
    return Vt || (Vt = new Aa.default(Object.assign({}, Wn, {
      visitor: Hn().default.explode(Wn.visitor)
    }), {})), Vt;
  }

  function Vn(e) {
    let t = e?._blockHoist;
    return t == null ? 1 : t === !0 ? 2 : t;
  }

  function xa(e) {
    let t = Object.create(null);

    for (let o = 0; o < e.length; o++) {
      let s = e[o],
          i = Vn(s);
      (t[i] || (t[i] = [])).push(s);
    }

    let r = Object.keys(t).map(o => +o).sort((o, s) => s - o),
        n = 0;

    for (let o of r) {
      let s = t[o];

      for (let i of s) e[n++] = i;
    }

    return e;
  }

  var Wn = {
    name: "internal.blockHoist",
    visitor: {
      Block: {
        exit({
          node: e
        }) {
          let {
            body: t
          } = e,
              r = Math.pow(2, 30) - 1,
              n = !1;

          for (let o = 0; o < t.length; o++) {
            let s = t[o],
                i = Vn(s);

            if (i > r) {
              n = !0;
              break;
            }

            r = i;
          }

          !n || (e.body = xa(t.slice()));
        }

      }
    }
  };
});
var Jt = b(zt => {
  "use strict";

  Object.defineProperty(zt, "__esModule", {
    value: !0
  });
  zt.default = ja;

  function ze() {
    let e = __path$;
    return ze = function () {
      return e;
    }, e;
  }

  function ja(e) {
    let {
      filename: t,
      cwd: r,
      filenameRelative: n = typeof t == "string" ? ze().relative(r, t) : "unknown",
      sourceType: o = "module",
      inputSourceMap: s,
      sourceMaps: i = !!s,
      sourceRoot: a = e.options.moduleRoot,
      sourceFileName: u = ze().basename(n),
      comments: c = !0,
      compact: p = "auto"
    } = e.options,
        h = e.options,
        v = Object.assign({}, h, {
      parserOpts: Object.assign({
        sourceType: ze().extname(n) === ".mjs" ? "module" : o,
        sourceFileName: t,
        plugins: []
      }, h.parserOpts),
      generatorOpts: Object.assign({
        filename: t,
        auxiliaryCommentBefore: h.auxiliaryCommentBefore,
        auxiliaryCommentAfter: h.auxiliaryCommentAfter,
        retainLines: h.retainLines,
        comments: c,
        shouldPrintComment: h.shouldPrintComment,
        compact: p,
        minified: h.minified,
        sourceMaps: i,
        sourceRoot: a,
        sourceFileName: u
      }, h.generatorOpts)
    });

    for (let y of e.passes) for (let g of y) g.manipulateOptions && g.manipulateOptions(v, v.parserOpts);

    return v;
  }
});
var Jn = b(Kt => {
  "use strict";

  Object.defineProperty(Kt, "__esModule", {
    value: !0
  });
  Kt.default = Fa;
  var Yt = {
    asyncDoExpressions: {
      syntax: {
        name: "@babel/plugin-syntax-async-do-expressions",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-async-do-expressions"
      }
    },
    classProperties: {
      syntax: {
        name: "@babel/plugin-syntax-class-properties",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-class-properties"
      },
      transform: {
        name: "@babel/plugin-proposal-class-properties",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-class-properties"
      }
    },
    classPrivateProperties: {
      syntax: {
        name: "@babel/plugin-syntax-class-properties",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-class-properties"
      },
      transform: {
        name: "@babel/plugin-proposal-class-properties",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-class-properties"
      }
    },
    classPrivateMethods: {
      syntax: {
        name: "@babel/plugin-syntax-class-properties",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-class-properties"
      },
      transform: {
        name: "@babel/plugin-proposal-private-methods",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-private-methods"
      }
    },
    classStaticBlock: {
      syntax: {
        name: "@babel/plugin-syntax-class-static-block",
        url: "https://github.com/babel/babel/tree/HEAD/packages/babel-plugin-syntax-class-static-block"
      },
      transform: {
        name: "@babel/plugin-proposal-class-static-block",
        url: "https://github.com/babel/babel/tree/HEAD/packages/babel-plugin-proposal-class-static-block"
      }
    },
    decimal: {
      syntax: {
        name: "@babel/plugin-syntax-decimal",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-decimal"
      }
    },
    decorators: {
      syntax: {
        name: "@babel/plugin-syntax-decorators",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-decorators"
      },
      transform: {
        name: "@babel/plugin-proposal-decorators",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-decorators"
      }
    },
    doExpressions: {
      syntax: {
        name: "@babel/plugin-syntax-do-expressions",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-do-expressions"
      },
      transform: {
        name: "@babel/plugin-proposal-do-expressions",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-do-expressions"
      }
    },
    dynamicImport: {
      syntax: {
        name: "@babel/plugin-syntax-dynamic-import",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-dynamic-import"
      }
    },
    exportDefaultFrom: {
      syntax: {
        name: "@babel/plugin-syntax-export-default-from",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-export-default-from"
      },
      transform: {
        name: "@babel/plugin-proposal-export-default-from",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-export-default-from"
      }
    },
    exportNamespaceFrom: {
      syntax: {
        name: "@babel/plugin-syntax-export-namespace-from",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-export-namespace-from"
      },
      transform: {
        name: "@babel/plugin-proposal-export-namespace-from",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-export-namespace-from"
      }
    },
    flow: {
      syntax: {
        name: "@babel/plugin-syntax-flow",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-flow"
      },
      transform: {
        name: "@babel/preset-flow",
        url: "https://github.com/babel/babel/tree/main/packages/babel-preset-flow"
      }
    },
    functionBind: {
      syntax: {
        name: "@babel/plugin-syntax-function-bind",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-function-bind"
      },
      transform: {
        name: "@babel/plugin-proposal-function-bind",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-function-bind"
      }
    },
    functionSent: {
      syntax: {
        name: "@babel/plugin-syntax-function-sent",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-function-sent"
      },
      transform: {
        name: "@babel/plugin-proposal-function-sent",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-function-sent"
      }
    },
    importMeta: {
      syntax: {
        name: "@babel/plugin-syntax-import-meta",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-import-meta"
      }
    },
    jsx: {
      syntax: {
        name: "@babel/plugin-syntax-jsx",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx"
      },
      transform: {
        name: "@babel/preset-react",
        url: "https://github.com/babel/babel/tree/main/packages/babel-preset-react"
      }
    },
    importAssertions: {
      syntax: {
        name: "@babel/plugin-syntax-import-assertions",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-import-assertions"
      }
    },
    moduleStringNames: {
      syntax: {
        name: "@babel/plugin-syntax-module-string-names",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-module-string-names"
      }
    },
    numericSeparator: {
      syntax: {
        name: "@babel/plugin-syntax-numeric-separator",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-numeric-separator"
      },
      transform: {
        name: "@babel/plugin-proposal-numeric-separator",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-numeric-separator"
      }
    },
    optionalChaining: {
      syntax: {
        name: "@babel/plugin-syntax-optional-chaining",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-optional-chaining"
      },
      transform: {
        name: "@babel/plugin-proposal-optional-chaining",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-optional-chaining"
      }
    },
    pipelineOperator: {
      syntax: {
        name: "@babel/plugin-syntax-pipeline-operator",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-pipeline-operator"
      },
      transform: {
        name: "@babel/plugin-proposal-pipeline-operator",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-pipeline-operator"
      }
    },
    privateIn: {
      syntax: {
        name: "@babel/plugin-syntax-private-property-in-object",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-private-property-in-object"
      },
      transform: {
        name: "@babel/plugin-proposal-private-property-in-object",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-private-property-in-object"
      }
    },
    recordAndTuple: {
      syntax: {
        name: "@babel/plugin-syntax-record-and-tuple",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-record-and-tuple"
      }
    },
    regexpUnicodeSets: {
      syntax: {
        name: "@babel/plugin-syntax-unicode-sets-regex",
        url: "https://github.com/babel/babel/blob/main/packages/babel-plugin-syntax-unicode-sets-regex/README.md"
      },
      transform: {
        name: "@babel/plugin-proposal-unicode-sets-regex",
        url: "https://github.com/babel/babel/blob/main/packages/babel-plugin-proposalunicode-sets-regex/README.md"
      }
    },
    throwExpressions: {
      syntax: {
        name: "@babel/plugin-syntax-throw-expressions",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-throw-expressions"
      },
      transform: {
        name: "@babel/plugin-proposal-throw-expressions",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-throw-expressions"
      }
    },
    typescript: {
      syntax: {
        name: "@babel/plugin-syntax-typescript",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-typescript"
      },
      transform: {
        name: "@babel/preset-typescript",
        url: "https://github.com/babel/babel/tree/main/packages/babel-preset-typescript"
      }
    },
    asyncGenerators: {
      syntax: {
        name: "@babel/plugin-syntax-async-generators",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-async-generators"
      },
      transform: {
        name: "@babel/plugin-proposal-async-generator-functions",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-async-generator-functions"
      }
    },
    logicalAssignment: {
      syntax: {
        name: "@babel/plugin-syntax-logical-assignment-operators",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-logical-assignment-operators"
      },
      transform: {
        name: "@babel/plugin-proposal-logical-assignment-operators",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-logical-assignment-operators"
      }
    },
    nullishCoalescingOperator: {
      syntax: {
        name: "@babel/plugin-syntax-nullish-coalescing-operator",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-nullish-coalescing-operator"
      },
      transform: {
        name: "@babel/plugin-proposal-nullish-coalescing-operator",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-nullish-coalescing-opearator"
      }
    },
    objectRestSpread: {
      syntax: {
        name: "@babel/plugin-syntax-object-rest-spread",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-object-rest-spread"
      },
      transform: {
        name: "@babel/plugin-proposal-object-rest-spread",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-object-rest-spread"
      }
    },
    optionalCatchBinding: {
      syntax: {
        name: "@babel/plugin-syntax-optional-catch-binding",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-optional-catch-binding"
      },
      transform: {
        name: "@babel/plugin-proposal-optional-catch-binding",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-optional-catch-binding"
      }
    }
  };
  Yt.privateIn.syntax = Yt.privateIn.transform;

  var zn = ({
    name: e,
    url: t
  }) => `${e} (${t})`;

  function Fa(e, t, r) {
    let n = `Support for the experimental syntax '${e}' isn't currently enabled (${t.line}:${t.column + 1}):

` + r,
        o = Yt[e];

    if (o) {
      let {
        syntax: s,
        transform: i
      } = o;

      if (s) {
        let a = zn(s);

        if (i) {
          let u = zn(i),
              c = i.name.startsWith("@babel/plugin") ? "plugins" : "presets";
          n += `

Add ${u} to the '${c}' section of your Babel config to enable transformation.
If you want to leave it as-is, add ${a} to the 'plugins' section to enable parsing.`;
        } else n += `

Add ${a} to the 'plugins' section of your Babel config to enable parsing.`;
      }
    }

    return n;
  }
});
var Zt = b(Qt => {
  "use strict";

  Object.defineProperty(Qt, "__esModule", {
    value: !0
  });
  Qt.default = $a;

  function Xt() {
    let e = ___babel_parser$;
    return Xt = function () {
      return e;
    }, e;
  }

  function Yn() {
    let e = ___babel_code_frame$;
    return Yn = function () {
      return e;
    }, e;
  }

  var Ma = Jn();

  function* $a(e, {
    parserOpts: t,
    highlightCode: r = !0,
    filename: n = "unknown"
  }, o) {
    try {
      let s = [];

      for (let i of e) for (let a of i) {
        let {
          parserOverride: u
        } = a;

        if (u) {
          let c = u(o, t, Xt().parse);
          c !== void 0 && s.push(c);
        }
      }

      if (s.length === 0) return (0, Xt().parse)(o, t);

      if (s.length === 1) {
        if (yield* [], typeof s[0].then == "function") throw new Error("You appear to be using an async parser plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");
        return s[0];
      }

      throw new Error("More than one plugin attempted to override parsing.");
    } catch (s) {
      s.code === "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED" && (s.message += `
Consider renaming the file to '.mjs', or setting sourceType:module or sourceType:unambiguous in your Babel config for this file.`);
      let {
        loc: i,
        missingPlugin: a
      } = s;

      if (i) {
        let u = (0, Yn().codeFrameColumns)(o, {
          start: {
            line: i.line,
            column: i.column + 1
          }
        }, {
          highlightCode: r
        });
        a ? s.message = `${n}: ` + (0, Ma.default)(a[0], i, u) : s.message = `${n}: ${s.message}

` + u, s.code = "BABEL_PARSE_ERROR";
      }

      throw s;
    }
  }
});
var Xn = b(er => {
  "use strict";

  Object.defineProperty(er, "__esModule", {
    value: !0
  });
  er.default = qa;
  var Kn = "$$ babel internal serialized type" + Math.random();

  function Na(e, t) {
    return typeof t != "bigint" ? t : {
      [Kn]: "BigInt",
      value: t.toString()
    };
  }

  function Ia(e, t) {
    return !t || typeof t != "object" || t[Kn] !== "BigInt" ? t : BigInt(t.value);
  }

  function qa(e) {
    return JSON.parse(JSON.stringify(e, Na), Ia);
  }
});
var no = b(nr => {
  "use strict";

  Object.defineProperty(nr, "__esModule", {
    value: !0
  });
  nr.default = Wa;

  function eo() {
    let e = __fs$;
    return eo = function () {
      return e;
    }, e;
  }

  function rr() {
    let e = __path$;
    return rr = function () {
      return e;
    }, e;
  }

  function to() {
    let e = __debug$;
    return to = function () {
      return e;
    }, e;
  }

  function ro() {
    let e = ___babel_types$;
    return ro = function () {
      return e;
    }, e;
  }

  function Ye() {
    let e = __convert_source_map$;
    return Ye = function () {
      return e;
    }, e;
  }

  var Da = _e(),
      Ra = Zt(),
      Ta = Xn(),
      {
    file: Ba,
    traverseFast: La
  } = ro(),
      Je = to()("babel:transform:file"),
      Ua = 1e6;

  function* Wa(e, t, r, n) {
    if (r = `${r || ""}`, n) {
      if (n.type === "Program") n = Ba(n, [], []);else if (n.type !== "File") throw new Error("AST root must be a Program or File node");
      t.cloneInputAst && (n = (0, Ta.default)(n));
    } else n = yield* (0, Ra.default)(e, t, r);

    let o = null;

    if (t.inputSourceMap !== !1) {
      if (typeof t.inputSourceMap == "object" && (o = Ye().fromObject(t.inputSourceMap)), !o) {
        let s = Zn(Ha, n);
        if (s) try {
          o = Ye().fromComment(s);
        } catch (i) {
          Je("discarding unknown inline input sourcemap", i);
        }
      }

      if (!o) {
        let s = Zn(Qn, n);
        if (typeof t.filename == "string" && s) try {
          let i = Qn.exec(s),
              a = eo().readFileSync(rr().resolve(rr().dirname(t.filename), i[1]));
          a.length > Ua ? Je("skip merging input map > 1 MB") : o = Ye().fromJSON(a);
        } catch (i) {
          Je("discarding unknown file input sourcemap", i);
        } else s && Je("discarding un-loadable file input sourcemap");
      }
    }

    return new Da.default(t, {
      code: r,
      ast: n,
      inputMap: o
    });
  }

  var Ha = /^[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/,
      Qn = /^[@#][ \t]+sourceMappingURL=([^\s'"`]+)[ \t]*$/;

  function tr(e, t, r) {
    return t && (t = t.filter(({
      value: n
    }) => e.test(n) ? (r = n, !1) : !0)), [t, r];
  }

  function Zn(e, t) {
    let r = null;
    return La(t, n => {
      [n.leadingComments, r] = tr(e, n.leadingComments, r), [n.innerComments, r] = tr(e, n.innerComments, r), [n.trailingComments, r] = tr(e, n.trailingComments, r);
    }), r;
  }
});
var io = b(or => {
  "use strict";

  Object.defineProperty(or, "__esModule", {
    value: !0
  });
  or.default = Va;

  function so() {
    let e = ___ampproject_remapping$;
    return so = function () {
      return e;
    }, e;
  }

  function Va(e, t, r) {
    let n = r.replace(/\\/g, "/"),
        o = !1,
        s = so()(oo(t), (i, a) => i === n && !o ? (o = !0, a.source = "", oo(e)) : null);
    return typeof e.sourceRoot == "string" && (s.sourceRoot = e.sourceRoot), Object.assign({}, s);
  }

  function oo(e) {
    return Object.assign({}, e, {
      sourceRoot: null
    });
  }
});
var uo = b(ir => {
  "use strict";

  Object.defineProperty(ir, "__esModule", {
    value: !0
  });
  ir.default = za;

  function ao() {
    let e = __convert_source_map$;
    return ao = function () {
      return e;
    }, e;
  }

  function sr() {
    let e = ___babel_generator$;
    return sr = function () {
      return e;
    }, e;
  }

  var Ga = io();

  function za(e, t) {
    let {
      opts: r,
      ast: n,
      code: o,
      inputMap: s
    } = t,
        {
      generatorOpts: i
    } = r,
        a = [];

    for (let h of e) for (let v of h) {
      let {
        generatorOverride: y
      } = v;

      if (y) {
        let g = y(n, i, o, sr().default);
        g !== void 0 && a.push(g);
      }
    }

    let u;
    if (a.length === 0) u = (0, sr().default)(n, i, o);else if (a.length === 1) {
      if (u = a[0], typeof u.then == "function") throw new Error("You appear to be using an async codegen plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");
    } else throw new Error("More than one plugin attempted to override codegen.");
    let {
      code: c,
      decodedMap: p = u.map
    } = u;
    return p && (s ? p = (0, Ga.default)(s.toObject(), p, i.sourceFileName) : p = u.map), (r.sourceMaps === "inline" || r.sourceMaps === "both") && (c += `
` + ao().fromObject(p).toComment()), r.sourceMaps === "inline" && (p = null), {
      outputCode: c,
      outputMap: p
    };
  }
});
var lr = b(ur => {
  "use strict";

  Object.defineProperty(ur, "__esModule", {
    value: !0
  });
  ur.run = eu;

  function ar() {
    let e = ___babel_traverse$;
    return ar = function () {
      return e;
    }, e;
  }

  var Ja = Un(),
      Ya = Gn(),
      Ka = Jt(),
      Xa = no(),
      Qa = uo(),
      Za = ke();

  function* eu(e, t, r) {
    let n = yield* (0, Xa.default)(e.passes, (0, Ka.default)(e), t, r),
        o = n.opts;

    try {
      yield* tu(n, e.passes);
    } catch (c) {
      var s;
      throw c.message = `${(s = o.filename) != null ? s : "unknown"}: ${c.message}`, c.code || (c.code = "BABEL_TRANSFORM_ERROR"), c;
    }

    let i, a;

    try {
      o.code !== !1 && ({
        outputCode: i,
        outputMap: a
      } = (0, Qa.default)(e.passes, n));
    } catch (c) {
      var u;
      throw c.message = `${(u = o.filename) != null ? u : "unknown"}: ${c.message}`, c.code || (c.code = "BABEL_GENERATE_ERROR"), c;
    }

    return {
      metadata: n.metadata,
      options: o,
      ast: o.ast === !0 ? n.ast : null,
      code: i === void 0 ? null : i,
      map: a === void 0 ? null : a,
      sourceType: n.ast.program.sourceType,
      externalDependencies: (0, Za.flattenToSet)(e.externalDependencies)
    };
  }

  function* tu(e, t) {
    for (let r of t) {
      let n = [],
          o = [],
          s = [];

      for (let a of r.concat([(0, Ya.default)()])) {
        let u = new Ja.default(e, a.key, a.options);
        n.push([a, u]), o.push(u), s.push(a.visitor);
      }

      for (let [a, u] of n) {
        let c = a.pre;

        if (c) {
          let p = c.call(u, e);
          if (yield* [], lo(p)) throw new Error("You appear to be using an plugin with an async .pre, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");
        }
      }

      let i = ar().default.visitors.merge(s, o, e.opts.wrapPluginVisitorMethod);
      (0, ar().default)(e.ast, i, e.scope);

      for (let [a, u] of n) {
        let c = a.post;

        if (c) {
          let p = c.call(u, e);
          if (yield* [], lo(p)) throw new Error("You appear to be using an plugin with an async .post, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");
        }
      }
    }
  }

  function lo(e) {
    return !!e && (typeof e == "object" || typeof e == "function") && !!e.then && typeof e.then == "function";
  }
});
var fo = b(L => {
  "use strict";

  Object.defineProperty(L, "__esModule", {
    value: !0
  });
  L.transformSync = L.transformAsync = L.transform = void 0;

  function co() {
    let e = __gensync$;
    return co = function () {
      return e;
    }, e;
  }

  var ru = he(),
      nu = lr(),
      Ke = co()(function* (t, r) {
    let n = yield* (0, ru.default)(r);
    return n === null ? null : yield* (0, nu.run)(n, t);
  }),
      ou = function (t, r, n) {
    if (typeof r == "function" && (n = r, r = void 0), n === void 0) return Ke.sync(t, r);
    Ke.errback(t, r, n);
  };

  L.transform = ou;
  var su = Ke.sync;
  L.transformSync = su;
  var iu = Ke.async;
  L.transformAsync = iu;
});
var po = b(Q => {
  "use strict";

  Object.defineProperty(Q, "__esModule", {
    value: !0
  });
  Q.transformFile = void 0;
  Q.transformFileAsync = lu;
  Q.transformFileSync = uu;

  var au = function (t, r, n) {
    typeof r == "function" && (n = r), n(new Error("Transforming files is not supported in browsers"), null);
  };

  Q.transformFile = au;

  function uu() {
    throw new Error("Transforming files is not supported in browsers");
  }

  function lu() {
    return Promise.reject(new Error("Transforming files is not supported in browsers"));
  }
});
var go = b(U => {
  "use strict";

  Object.defineProperty(U, "__esModule", {
    value: !0
  });
  U.transformFromAstSync = U.transformFromAstAsync = U.transformFromAst = void 0;

  function bo() {
    let e = __gensync$;
    return bo = function () {
      return e;
    }, e;
  }

  var cu = he(),
      fu = lr(),
      Xe = bo()(function* (e, t, r) {
    let n = yield* (0, cu.default)(r);
    if (n === null) return null;
    if (!e) throw new Error("No AST given");
    return yield* (0, fu.run)(n, t, e);
  }),
      pu = function (t, r, n, o) {
    if (typeof n == "function" && (o = n, n = void 0), o === void 0) return Xe.sync(t, r, n);
    Xe.errback(t, r, n, o);
  };

  U.transformFromAst = pu;
  var du = Xe.sync;
  U.transformFromAstSync = du;
  var bu = Xe.async;
  U.transformFromAstAsync = bu;
});
var ho = b(W => {
  "use strict";

  Object.defineProperty(W, "__esModule", {
    value: !0
  });
  W.parseSync = W.parseAsync = W.parse = void 0;

  function mo() {
    let e = __gensync$;
    return mo = function () {
      return e;
    }, e;
  }

  var gu = he(),
      mu = Zt(),
      hu = Jt(),
      Qe = mo()(function* (t, r) {
    let n = yield* (0, gu.default)(r);
    return n === null ? null : yield* (0, mu.default)(n.passes, (0, hu.default)(n), t);
  }),
      yu = function (t, r, n) {
    if (typeof r == "function" && (n = r, r = void 0), n === void 0) return Qe.sync(t, r);
    Qe.errback(t, r, n);
  };

  W.parse = yu;
  var vu = Qe.sync;
  W.parseSync = vu;
  var wu = Qe.async;
  W.parseAsync = wu;
});
var Be = b(d => {
  "use strict";

  Object.defineProperty(d, "__esModule", {
    value: !0
  });
  d.DEFAULT_EXTENSIONS = void 0;
  Object.defineProperty(d, "File", {
    enumerable: !0,
    get: function () {
      return _u.default;
    }
  });
  d.OptionManager = void 0;
  d.Plugin = Su;
  Object.defineProperty(d, "buildExternalHelpers", {
    enumerable: !0,
    get: function () {
      return Ou.default;
    }
  });
  Object.defineProperty(d, "createConfigItem", {
    enumerable: !0,
    get: function () {
      return I.createConfigItem;
    }
  });
  Object.defineProperty(d, "createConfigItemAsync", {
    enumerable: !0,
    get: function () {
      return I.createConfigItemAsync;
    }
  });
  Object.defineProperty(d, "createConfigItemSync", {
    enumerable: !0,
    get: function () {
      return I.createConfigItemSync;
    }
  });
  Object.defineProperty(d, "getEnv", {
    enumerable: !0,
    get: function () {
      return Pu.getEnv;
    }
  });
  Object.defineProperty(d, "loadOptions", {
    enumerable: !0,
    get: function () {
      return I.loadOptions;
    }
  });
  Object.defineProperty(d, "loadOptionsAsync", {
    enumerable: !0,
    get: function () {
      return I.loadOptionsAsync;
    }
  });
  Object.defineProperty(d, "loadOptionsSync", {
    enumerable: !0,
    get: function () {
      return I.loadOptionsSync;
    }
  });
  Object.defineProperty(d, "loadPartialConfig", {
    enumerable: !0,
    get: function () {
      return I.loadPartialConfig;
    }
  });
  Object.defineProperty(d, "loadPartialConfigAsync", {
    enumerable: !0,
    get: function () {
      return I.loadPartialConfigAsync;
    }
  });
  Object.defineProperty(d, "loadPartialConfigSync", {
    enumerable: !0,
    get: function () {
      return I.loadPartialConfigSync;
    }
  });
  Object.defineProperty(d, "parse", {
    enumerable: !0,
    get: function () {
      return br.parse;
    }
  });
  Object.defineProperty(d, "parseAsync", {
    enumerable: !0,
    get: function () {
      return br.parseAsync;
    }
  });
  Object.defineProperty(d, "parseSync", {
    enumerable: !0,
    get: function () {
      return br.parseSync;
    }
  });
  Object.defineProperty(d, "resolvePlugin", {
    enumerable: !0,
    get: function () {
      return yo.resolvePlugin;
    }
  });
  Object.defineProperty(d, "resolvePreset", {
    enumerable: !0,
    get: function () {
      return yo.resolvePreset;
    }
  });
  Object.defineProperty(d, "template", {
    enumerable: !0,
    get: function () {
      return Oo().default;
    }
  });
  Object.defineProperty(d, "tokTypes", {
    enumerable: !0,
    get: function () {
      return wo().tokTypes;
    }
  });
  Object.defineProperty(d, "transform", {
    enumerable: !0,
    get: function () {
      return fr.transform;
    }
  });
  Object.defineProperty(d, "transformAsync", {
    enumerable: !0,
    get: function () {
      return fr.transformAsync;
    }
  });
  Object.defineProperty(d, "transformFile", {
    enumerable: !0,
    get: function () {
      return pr.transformFile;
    }
  });
  Object.defineProperty(d, "transformFileAsync", {
    enumerable: !0,
    get: function () {
      return pr.transformFileAsync;
    }
  });
  Object.defineProperty(d, "transformFileSync", {
    enumerable: !0,
    get: function () {
      return pr.transformFileSync;
    }
  });
  Object.defineProperty(d, "transformFromAst", {
    enumerable: !0,
    get: function () {
      return dr.transformFromAst;
    }
  });
  Object.defineProperty(d, "transformFromAstAsync", {
    enumerable: !0,
    get: function () {
      return dr.transformFromAstAsync;
    }
  });
  Object.defineProperty(d, "transformFromAstSync", {
    enumerable: !0,
    get: function () {
      return dr.transformFromAstSync;
    }
  });
  Object.defineProperty(d, "transformSync", {
    enumerable: !0,
    get: function () {
      return fr.transformSync;
    }
  });
  Object.defineProperty(d, "traverse", {
    enumerable: !0,
    get: function () {
      return _o().default;
    }
  });
  d.version = d.types = void 0;

  var _u = _e(),
      Ou = Er(),
      yo = te(),
      Pu = it();

  function vo() {
    let e = ___babel_types$;
    return vo = function () {
      return e;
    }, e;
  }

  Object.defineProperty(d, "types", {
    enumerable: !0,
    get: function () {
      return vo();
    }
  });

  function wo() {
    let e = ___babel_parser$;
    return wo = function () {
      return e;
    }, e;
  }

  function _o() {
    let e = ___babel_traverse$;
    return _o = function () {
      return e;
    }, e;
  }

  function Oo() {
    let e = ___babel_template$;
    return Oo = function () {
      return e;
    }, e;
  }

  var I = he(),
      fr = fo(),
      pr = po(),
      dr = go(),
      br = ho(),
      Cu = "7.18.2";
  d.version = Cu;
  var Eu = Object.freeze([".js", ".jsx", ".es6", ".es", ".mjs", ".cjs"]);
  d.DEFAULT_EXTENSIONS = Eu;
  var cr = class {
    init(t) {
      return (0, I.loadOptions)(t);
    }

  };
  d.OptionManager = cr;

  function Su(e) {
    throw new Error(`The (${e}) Babel 5 plugin is being run with an unsupported Babel version.`);
  }
});
var Co = Mo(Be()),
    yl = !0,
    {
  DEFAULT_EXTENSIONS: vl,
  File: wl,
  OptionManager: _l,
  Plugin: Ol,
  buildExternalHelpers: Pl,
  createConfigItem: Cl,
  createConfigItemAsync: El,
  createConfigItemSync: Sl,
  getEnv: Al,
  loadOptions: kl,
  loadOptionsAsync: xl,
  loadOptionsSync: jl,
  loadPartialConfig: Fl,
  loadPartialConfigAsync: Ml,
  loadPartialConfigSync: $l,
  parse: Nl,
  parseAsync: Il,
  parseSync: ql,
  resolvePlugin: Dl,
  resolvePreset: Rl,
  template: Tl,
  tokTypes: Bl,
  transform: Ll,
  transformAsync: Ul,
  transformFile: Wl,
  transformFileAsync: Hl,
  transformFileSync: Vl,
  transformFromAst: Gl,
  transformFromAstAsync: zl,
  transformFromAstSync: Jl,
  transformSync: Yl,
  traverse: Kl,
  version: Xl,
  types: Ql
} = Co,
    {
  default: Po,
  ...Au
} = Co,
    Zl = Po !== void 0 ? Po : Au;
export { vl as DEFAULT_EXTENSIONS, wl as File, _l as OptionManager, Ol as Plugin, yl as __esModule, Pl as buildExternalHelpers, Cl as createConfigItem, El as createConfigItemAsync, Sl as createConfigItemSync, Zl as default, Al as getEnv, kl as loadOptions, xl as loadOptionsAsync, jl as loadOptionsSync, Fl as loadPartialConfig, Ml as loadPartialConfigAsync, $l as loadPartialConfigSync, Nl as parse, Il as parseAsync, ql as parseSync, Dl as resolvePlugin, Rl as resolvePreset, Tl as template, Bl as tokTypes, Ll as transform, Ul as transformAsync, Wl as transformFile, Hl as transformFileAsync, Vl as transformFileSync, Gl as transformFromAst, zl as transformFromAstAsync, Jl as transformFromAstSync, Yl as transformSync, Kl as traverse, Ql as types, Xl as version };