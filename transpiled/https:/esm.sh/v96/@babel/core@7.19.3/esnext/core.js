/* esm.sh - esbuild bundle(@babel/core@7.19.3) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v96/node_process.js";
import * as ___babel_template$ from "/transpiled/https://esm.sh/v96/@babel/template@7.18.10/esnext/template.js";
import ___babel_parser$ from "/transpiled/https://esm.sh/v96/@babel/parser@7.19.3/esnext/parser.js";
import ___babel_types$ from "/transpiled/https://esm.sh/v96/@babel/types@7.19.3/esnext/types.js";
import __path$ from "/transpiled/https://esm.sh/v96/path-browserify@1.0.1/esnext/path-browserify.bundle.js";
import ___babel_helper_module_transforms$ from "/transpiled/https://esm.sh/v96/@babel/helper-module-transforms@7.19.0/esnext/helper-module-transforms.js";
import * as ___babel_code_frame$ from "/transpiled/https://esm.sh/v96/@babel/code-frame@7.18.6/esnext/code-frame.js";
import * as ___babel_traverse$ from "/transpiled/https://esm.sh/v96/@babel/traverse@7.19.3/esnext/traverse.js";
import __convert_source_map$ from "/transpiled/https://esm.sh/v96/convert-source-map@1.8.0/esnext/convert-source-map.js";
import __debug$ from "/transpiled/https://esm.sh/v96/debug@4.3.4/esnext/debug.js";
import __fs$ from "/transpiled/https://esm.sh/v96/node_fs.js";
import * as ___babel_helper_compilation_targets$ from "/transpiled/https://esm.sh/v96/@babel/helper-compilation-targets@7.19.3/esnext/helper-compilation-targets.js";
import __semver$ from "/transpiled/https://esm.sh/v96/semver@6.3.0/esnext/semver.js";
import * as ___babel_helpers$ from "/transpiled/https://esm.sh/v96/@babel/helpers@7.19.0/esnext/helpers.js";
import ___ampproject_remapping$$ from "/transpiled/https://esm.sh/v96/@ampproject/remapping@2.2.0/esnext/remapping.js";
import * as ___ampproject_remapping$$$ from "/transpiled/https://esm.sh/v96/@ampproject/remapping@2.2.0/esnext/remapping.js";

const ___ampproject_remapping$ = Object.assign({
  default: ___ampproject_remapping$$
}, ___ampproject_remapping$$$);

import * as ___babel_generator$ from "/transpiled/https://esm.sh/v96/@babel/generator@7.19.3/esnext/generator.js";
import __gensync$ from "/transpiled/https://esm.sh/v96/gensync@1.0.0-beta.2/esnext/gensync.js";
var zo = Object.create;
var kr = Object.defineProperty;
var Yo = Object.getOwnPropertyDescriptor;
var Jo = Object.getOwnPropertyNames;
var Ko = Object.getPrototypeOf,
    Xo = Object.prototype.hasOwnProperty;

var f = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (t, r) => (typeof require < "u" ? require : t)[r]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var d = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var Qo = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of Jo(t)) !Xo.call(e, o) && o !== r && kr(e, o, {
    get: () => t[o],
    enumerable: !(n = Yo(t, o)) || n.enumerable
  });
  return e;
};

var Zo = (e, t, r) => (r = e != null ? zo(Ko(e)) : {}, Qo(t || !e || !e.__esModule ? kr(r, "default", {
  value: e,
  enumerable: !0
}) : r, e));

var Oe = d(_e => {
  "use strict";

  Object.defineProperty(_e, "__esModule", {
    value: !0
  });
  _e.default = void 0;

  function te() {
    let e = ___babel_helpers$;
    return te = function () {
      return e;
    }, e;
  }

  function lt() {
    let e = ___babel_traverse$;
    return lt = function () {
      return e;
    }, e;
  }

  function Ar() {
    let e = ___babel_code_frame$;
    return Ar = function () {
      return e;
    }, e;
  }

  function xr() {
    let e = ___babel_types$;
    return xr = function () {
      return e;
    }, e;
  }

  function jr() {
    let e = ___babel_helper_module_transforms$;
    return jr = function () {
      return e;
    }, e;
  }

  function we() {
    let e = __semver$;
    return we = function () {
      return e;
    }, e;
  }

  var {
    cloneNode: ei,
    interpreterDirective: ti
  } = xr(),
      ri = {
    enter(e, t) {
      let r = e.node.loc;
      r && (t.loc = r, e.stop());
    }

  },
      re = class {
    constructor(t, {
      code: r,
      ast: n,
      inputMap: o
    }) {
      this._map = new Map(), this.opts = void 0, this.declarations = {}, this.path = void 0, this.ast = void 0, this.scope = void 0, this.metadata = {}, this.code = "", this.inputMap = void 0, this.hub = {
        file: this,
        getCode: () => this.code,
        getScope: () => this.scope,
        addHelper: this.addHelper.bind(this),
        buildError: this.buildCodeFrameError.bind(this)
      }, this.opts = t, this.code = r, this.ast = n, this.inputMap = o, this.path = lt().NodePath.get({
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
      t ? this.path.get("interpreter").replaceWith(ti(t)) : this.path.get("interpreter").remove();
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
      return (0, jr().getModuleName)(this.opts, this.opts);
    }

    addImport() {
      throw new Error("This API has been removed. If you're looking for this functionality in Babel 7, you should import the '@babel/helper-module-imports' module and use the functions exposed  from that module, such as 'addNamed' or 'addDefault'.");
    }

    availableHelper(t, r) {
      let n;

      try {
        n = te().minVersion(t);
      } catch (o) {
        if (o.code !== "BABEL_HELPER_UNKNOWN") throw o;
        return !1;
      }

      return typeof r != "string" ? !0 : (we().valid(r) && (r = `^${r}`), !we().intersects(`<${n}`, r) && !we().intersects(">=8.0.0", r));
    }

    addHelper(t) {
      let r = this.declarations[t];
      if (r) return ei(r);
      let n = this.get("helperGenerator");

      if (n) {
        let u = n(t);
        if (u) return u;
      }

      te().ensure(t, re);
      let o = this.declarations[t] = this.scope.generateUidIdentifier(t),
          i = {};

      for (let u of te().getDependencies(t)) i[u] = this.addHelper(u);

      let {
        nodes: s,
        globals: a
      } = te().get(t, u => i[u], o, Object.keys(this.scope.getAllBindings()));
      return a.forEach(u => {
        this.path.scope.hasBinding(u, !0) && this.path.scope.rename(u);
      }), s.forEach(u => {
        u._compact = !0;
      }), this.path.unshiftContainer("body", s), this.path.get("body").forEach(u => {
        s.indexOf(u.node) !== -1 && u.isVariableDeclaration() && this.scope.registerDeclaration(u);
      }), o;
    }

    addTemplateObject() {
      throw new Error("This function has been moved into the template literal transform itself.");
    }

    buildCodeFrameError(t, r, n = SyntaxError) {
      let o = t && (t.loc || t._loc);

      if (!o && t) {
        let i = {
          loc: null
        };
        (0, lt().default)(t, ri, this.scope, i), o = i.loc;
        let s = "This is an error on an internal node. Probably an internal error.";
        o && (s += " Location has been estimated."), r += ` (${s})`;
      }

      if (o) {
        let {
          highlightCode: i = !0
        } = this.opts;
        r += `
` + (0, Ar().codeFrameColumns)(this.code, {
          start: {
            line: o.start.line,
            column: o.start.column + 1
          },
          end: o.end && o.start.line === o.end.line ? {
            line: o.end.line,
            column: o.end.column + 1
          } : void 0
        }, {
          highlightCode: i
        });
      }

      return new n(r);
    }

  };
  _e.default = re;
});
var qr = d(bt => {
  "use strict";

  Object.defineProperty(bt, "__esModule", {
    value: !0
  });
  bt.default = vi;

  function Pe() {
    let e = ___babel_helpers$;
    return Pe = function () {
      return e;
    }, e;
  }

  function Fr() {
    let e = ___babel_generator$;
    return Fr = function () {
      return e;
    }, e;
  }

  function Mr() {
    let e = ___babel_template$;
    return Mr = function () {
      return e;
    }, e;
  }

  function Nr() {
    let e = ___babel_types$;
    return Nr = function () {
      return e;
    }, e;
  }

  var ni = Oe(),
      {
    arrayExpression: oi,
    assignmentExpression: $r,
    binaryExpression: ii,
    blockStatement: si,
    callExpression: ai,
    cloneNode: ui,
    conditionalExpression: li,
    exportNamedDeclaration: ci,
    exportSpecifier: fi,
    expressionStatement: Tr,
    functionExpression: pi,
    identifier: k,
    memberExpression: ct,
    objectExpression: ft,
    program: Ee,
    stringLiteral: Ir,
    unaryExpression: di,
    variableDeclaration: pt,
    variableDeclarator: dt
  } = Nr(),
      bi = e => Mr().default.statement`
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

  function gi(e) {
    let t = k("babelHelpers"),
        r = [],
        n = pi(null, [k("global")], si(r)),
        o = Ee([Tr(ai(n, [li(ii("===", di("typeof", k("global")), Ir("undefined")), k("self"), k("global"))]))]);
    return r.push(pt("var", [dt(t, $r("=", ct(k("global"), t), ft([])))])), Ce(r, t, e), o;
  }

  function mi(e) {
    let t = [],
        r = Ce(t, null, e);
    return t.unshift(ci(null, Object.keys(r).map(n => fi(ui(r[n]), k(n))))), Ee(t, [], "module");
  }

  function hi(e) {
    let t = k("babelHelpers"),
        r = [];
    return r.push(pt("var", [dt(t, k("global"))])), Ce(r, t, e), Ee([bi({
      FACTORY_PARAMETERS: k("global"),
      BROWSER_ARGUMENTS: $r("=", ct(k("root"), t), ft([])),
      COMMON_ARGUMENTS: k("exports"),
      AMD_ARGUMENTS: oi([Ir("exports")]),
      FACTORY_BODY: r,
      UMD_ROOT: k("this")
    })]);
  }

  function yi(e) {
    let t = k("babelHelpers"),
        r = [];
    r.push(pt("var", [dt(t, ft([]))]));
    let n = Ee(r);
    return Ce(r, t, e), r.push(Tr(t)), n;
  }

  function Ce(e, t, r) {
    let n = i => t ? ct(t, k(i)) : k(`_${i}`),
        o = {};

    return Pe().list.forEach(function (i) {
      if (r && r.indexOf(i) < 0) return;
      let s = o[i] = n(i);
      Pe().ensure(i, ni.default);
      let {
        nodes: a
      } = Pe().get(i, n, s);
      e.push(...a);
    }), o;
  }

  function vi(e, t = "global") {
    let r,
        n = {
      global: gi,
      module: mi,
      umd: hi,
      var: yi
    }[t];
    if (n) r = n(e);else throw new Error(`Unsupported output type ${t}`);
    return (0, Fr().default)(r).code;
  }
});
var ne = d(A => {
  "use strict";

  Object.defineProperty(A, "__esModule", {
    value: !0
  });
  A.ROOT_CONFIG_FILENAMES = void 0;
  A.findConfigUpwards = wi;
  A.findPackageData = _i;
  A.findRelativeConfig = Oi;
  A.findRootConfig = Pi;
  A.loadConfig = Ei;
  A.loadPlugin = xi;
  A.loadPreset = ji;
  A.resolvePlugin = ki;
  A.resolvePreset = Ai;
  A.resolveShowConfigPath = Ci;

  function wi(e) {
    return null;
  }

  function* _i(e) {
    return {
      filepath: e,
      directories: [],
      pkg: null,
      isPackage: !1
    };
  }

  function* Oi(e, t, r) {
    return {
      config: null,
      ignore: null
    };
  }

  function* Pi(e, t, r) {
    return null;
  }

  function* Ei(e, t, r, n) {
    throw new Error(`Cannot load ${e} relative to ${t} in a browser`);
  }

  function* Ci(e) {
    return null;
  }

  var Si = [];
  A.ROOT_CONFIG_FILENAMES = Si;

  function ki(e, t) {
    return null;
  }

  function Ai(e, t) {
    return null;
  }

  function xi(e, t) {
    throw new Error(`Cannot load plugin ${e} relative to ${t} in a browser`);
  }

  function ji(e, t) {
    throw new Error(`Cannot load preset ${e} relative to ${t} in a browser`);
  }
});
var mt = d(gt => {
  "use strict";

  Object.defineProperty(gt, "__esModule", {
    value: !0
  });
  gt.getEnv = Fi;

  function Fi(e = "development") {
    return __Process$.env.BABEL_ENV || "production";
  }
});
var Se = d($ => {
  "use strict";

  Object.defineProperty($, "__esModule", {
    value: !0
  });
  $.forwardAsync = Ti;
  $.isAsync = void 0;
  $.isThenable = Lr;
  $.maybeAsync = Ni;
  $.waitFor = $.onFirstPause = void 0;

  function L() {
    let e = __gensync$;
    return L = function () {
      return e;
    }, e;
  }

  function Rr(e, t, r, n, o, i, s) {
    try {
      var a = e[i](s),
          u = a.value;
    } catch (l) {
      r(l);
      return;
    }

    a.done ? t(u) : Promise.resolve(u).then(n, o);
  }

  function Br(e) {
    return function () {
      var t = this,
          r = arguments;
      return new Promise(function (n, o) {
        var i = e.apply(t, r);

        function s(u) {
          Rr(i, n, o, s, a, "next", u);
        }

        function a(u) {
          Rr(i, n, o, s, a, "throw", u);
        }

        s(void 0);
      });
    };
  }

  var Dr = L()(function* (e) {
    return yield* e;
  }),
      Mi = L()({
    sync: () => !1,
    errback: e => e(null, !0)
  });
  $.isAsync = Mi;

  function Ni(e, t) {
    return L()({
      sync(...r) {
        let n = e.apply(this, r);
        if (Lr(n)) throw new Error(t);
        return n;
      },

      async(...r) {
        return Promise.resolve(e.apply(this, r));
      }

    });
  }

  var $i = L()({
    sync: e => e("sync"),
    async: function () {
      var e = Br(function* (t) {
        return t("async");
      });
      return function (r) {
        return e.apply(this, arguments);
      };
    }()
  });

  function Ti(e, t) {
    let r = L()(e);
    return $i(n => {
      let o = r[n];
      return t(o);
    });
  }

  var Ii = L()({
    name: "onFirstPause",
    arity: 2,
    sync: function (e) {
      return Dr.sync(e);
    },
    errback: function (e, t, r) {
      let n = !1;
      Dr.errback(e, (o, i) => {
        n = !0, r(o, i);
      }), n || t();
    }
  });
  $.onFirstPause = Ii;
  var qi = L()({
    sync: e => e,
    async: function () {
      var e = Br(function* (t) {
        return t;
      });
      return function (r) {
        return e.apply(this, arguments);
      };
    }()
  });
  $.waitFor = qi;

  function Lr(e) {
    return !!e && (typeof e == "object" || typeof e == "function") && !!e.then && typeof e.then == "function";
  }
});
var Ae = d(ke => {
  "use strict";

  Object.defineProperty(ke, "__esModule", {
    value: !0
  });
  ke.isIterableIterator = Bi;
  ke.mergeOptions = Ri;

  function Ri(e, t) {
    for (let r of Object.keys(t)) if ((r === "parserOpts" || r === "generatorOpts" || r === "assumptions") && t[r]) {
      let n = t[r],
          o = e[r] || (e[r] = {});
      Di(o, n);
    } else {
      let n = t[r];
      n !== void 0 && (e[r] = n);
    }
  }

  function Di(e, t) {
    for (let r of Object.keys(t)) {
      let n = t[r];
      n !== void 0 && (e[r] = n);
    }
  }

  function Bi(e) {
    return !!e && typeof e.next == "function" && typeof e[Symbol.iterator] == "function";
  }
});
var je = d(xe => {
  "use strict";

  Object.defineProperty(xe, "__esModule", {
    value: !0
  });
  xe.finalize = Li;
  xe.flattenToSet = Ui;

  function Li(e) {
    return Object.freeze(e);
  }

  function Ui(e) {
    let t = new Set(),
        r = [e];

    for (; r.length > 0;) for (let n of r.pop()) Array.isArray(n) ? r.push(n) : t.add(n);

    return t;
  }
});
var Me = d(Fe => {
  "use strict";

  Object.defineProperty(Fe, "__esModule", {
    value: !0
  });
  Fe.default = void 0;
  var Hi = je(),
      ht = class {
    constructor(t, r, n, o = (0, Hi.finalize)([])) {
      this.key = void 0, this.manipulateOptions = void 0, this.post = void 0, this.pre = void 0, this.visitor = void 0, this.parserOverride = void 0, this.generatorOverride = void 0, this.options = void 0, this.externalDependencies = void 0, this.key = t.name || n, this.manipulateOptions = t.manipulateOptions, this.post = t.post, this.pre = t.pre, this.visitor = t.visitor || {}, this.parserOverride = t.parserOverride, this.generatorOverride = t.generatorOverride, this.options = r, this.externalDependencies = o;
    }

  };
  Fe.default = ht;
});
var Hr = d(yt => {
  "use strict";

  Object.defineProperty(yt, "__esModule", {
    value: !0
  });
  yt.once = Wi;
  var Ur = Se();

  function Wi(e) {
    let t, r;
    return function* () {
      if (t) return t;
      if (!(yield* (0, Ur.isAsync)())) return t = yield* e();
      if (r) return yield* (0, Ur.waitFor)(r);
      let n, o;
      r = new Promise((i, s) => {
        n = i, o = s;
      });

      try {
        return t = yield* e(), r = null, n(t), t;
      } catch (i) {
        throw o(i), i;
      }
    };
  }
});
var oe = d(U => {
  "use strict";

  Object.defineProperty(U, "__esModule", {
    value: !0
  });
  U.assertSimpleType = Ne;
  U.makeStrongCache = Yr;
  U.makeStrongCacheSync = Yi;
  U.makeWeakCache = zr;
  U.makeWeakCacheSync = zi;

  function Vr() {
    let e = __gensync$;
    return Vr = function () {
      return e;
    }, e;
  }

  var W = Se(),
      Vi = Ae(),
      Gr = e => Vr()(e).sync;

  function* Gi() {
    return !0;
  }

  function zr(e) {
    return Jr(WeakMap, e);
  }

  function zi(e) {
    return Gr(zr(e));
  }

  function Yr(e) {
    return Jr(Map, e);
  }

  function Yi(e) {
    return Gr(Yr(e));
  }

  function Jr(e, t) {
    let r = new e(),
        n = new e(),
        o = new e();
    return function* (s, a) {
      let u = yield* (0, W.isAsync)(),
          l = u ? n : r,
          p = yield* Ji(u, l, o, s, a);
      if (p.valid) return p.value;
      let m = new vt(a),
          v = t(s, m),
          h,
          y;
      return (0, Vi.isIterableIterator)(v) ? y = yield* (0, W.onFirstPause)(v, () => {
        h = Ki(m, o, s);
      }) : y = v, Kr(l, m, s, y), h && (o.delete(s), h.release(y)), y;
    };
  }

  function* Wr(e, t, r) {
    let n = e.get(t);

    if (n) {
      for (let {
        value: o,
        valid: i
      } of n) if (yield* i(r)) return {
        valid: !0,
        value: o
      };
    }

    return {
      valid: !1,
      value: null
    };
  }

  function* Ji(e, t, r, n, o) {
    let i = yield* Wr(t, n, o);
    if (i.valid) return i;

    if (e) {
      let s = yield* Wr(r, n, o);

      if (s.valid) {
        let a = yield* (0, W.waitFor)(s.value.promise);
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

  function Ki(e, t, r) {
    let n = new wt();
    return Kr(t, e, r, n), n;
  }

  function Kr(e, t, r, n) {
    t.configured() || t.forever();
    let o = e.get(r);

    switch (t.deactivate(), t.mode()) {
      case "forever":
        o = [{
          value: n,
          valid: Gi
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

  var vt = class {
    constructor(t) {
      this._active = !0, this._never = !1, this._forever = !1, this._invalidate = !1, this._configured = !1, this._pairs = [], this._data = void 0, this._data = t;
    }

    simple() {
      return Xi(this);
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
          n = (0, W.maybeAsync)(t, "You appear to be using an async cache handler, but Babel has been called synchronously");
      return (0, W.isThenable)(r) ? r.then(o => (this._pairs.push([o, n]), o)) : (this._pairs.push([r, n]), r);
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

  function Xi(e) {
    function t(r) {
      if (typeof r == "boolean") {
        r ? e.forever() : e.never();
        return;
      }

      return e.using(() => Ne(r()));
    }

    return t.forever = () => e.forever(), t.never = () => e.never(), t.using = r => e.using(() => Ne(r())), t.invalidate = r => e.invalidate(() => Ne(r())), t;
  }

  function Ne(e) {
    if ((0, W.isThenable)(e)) throw new Error("You appear to be using an async cache handler, which your current version of Babel does not support. We may add support for this in the future, but if you're on the most recent version of @babel/core and still seeing this error, then you'll need to synchronously handle your caching logic.");
    if (e != null && typeof e != "string" && typeof e != "boolean" && typeof e != "number") throw new Error("Cache keys must be either string, boolean, number, null, or undefined.");
    return e;
  }

  var wt = class {
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

var _t = d($e => {
  "use strict";

  Object.defineProperty($e, "__esModule", {
    value: !0
  });
  $e.resolveBrowserslistConfigFile = Qi;
  $e.resolveTargets = Zi;

  function Xr() {
    let e = ___babel_helper_compilation_targets$;
    return Xr = function () {
      return e;
    }, e;
  }

  function Qi(e, t) {}

  function Zi(e, t) {
    let r = e.targets,
        n;
    return typeof r == "string" || Array.isArray(r) ? n = {
      browsers: r
    } : r && ("esmodules" in r ? n = Object.assign({}, r, {
      esmodules: "intersect"
    }) : n = r), (0, Xr().default)(n, {
      ignoreBrowserslistConfig: !0,
      browserslistEnv: e.browserslistEnv
    });
  }
});

var Ot = d(se => {
  "use strict";

  Object.defineProperty(se, "__esModule", {
    value: !0
  });
  se.createCachedDescriptors = ns;
  se.createDescriptor = un;
  se.createUncachedDescriptors = os;

  function tn() {
    let e = __gensync$;
    return tn = function () {
      return e;
    }, e;
  }

  var Qr = Hr(),
      Zr = ne(),
      es = ae(),
      ie = oe(),
      ts = _t();

  function rs(e, t) {
    return e.name === t.name && e.value === t.value && e.options === t.options && e.dirname === t.dirname && e.alias === t.alias && e.ownPass === t.ownPass && (e.file && e.file.request) === (t.file && t.file.request) && (e.file && e.file.resolved) === (t.file && t.file.resolved);
  }

  function* en(e) {
    return e;
  }

  function rn(e, t) {
    return typeof e.browserslistConfigFile == "string" && (e.browserslistConfigFile = (0, ts.resolveBrowserslistConfigFile)(e.browserslistConfigFile, t)), e;
  }

  function ns(e, t, r) {
    let {
      plugins: n,
      presets: o,
      passPerPreset: i
    } = t;
    return {
      options: rn(t, e),
      plugins: n ? () => us(n, e)(r) : () => en([]),
      presets: o ? () => ss(o, e)(r)(!!i) : () => en([])
    };
  }

  function os(e, t, r) {
    return {
      options: rn(t, e),
      plugins: (0, Qr.once)(() => sn(t.plugins || [], e, r)),
      presets: (0, Qr.once)(() => on(t.presets || [], e, r, !!t.passPerPreset))
    };
  }

  var is = new WeakMap(),
      ss = (0, ie.makeWeakCacheSync)((e, t) => {
    let r = t.using(n => n);
    return (0, ie.makeStrongCacheSync)(n => (0, ie.makeStrongCache)(function* (o) {
      return (yield* on(e, r, n, o)).map(s => nn(is, s));
    }));
  }),
      as = new WeakMap(),
      us = (0, ie.makeWeakCacheSync)((e, t) => {
    let r = t.using(n => n);
    return (0, ie.makeStrongCache)(function* (n) {
      return (yield* sn(e, r, n)).map(i => nn(as, i));
    });
  }),
      ls = {};

  function nn(e, t) {
    let {
      value: r,
      options: n = ls
    } = t;
    if (n === !1) return t;
    let o = e.get(r);
    o || (o = new WeakMap(), e.set(r, o));
    let i = o.get(n);

    if (i || (i = [], o.set(n, i)), i.indexOf(t) === -1) {
      let s = i.filter(a => rs(a, t));
      if (s.length > 0) return s[0];
      i.push(t);
    }

    return t;
  }

  function* on(e, t, r, n) {
    return yield* an("preset", e, t, r, n);
  }

  function* sn(e, t, r) {
    return yield* an("plugin", e, t, r);
  }

  function* an(e, t, r, n, o) {
    let i = yield* tn().all(t.map((s, a) => un(s, r, {
      type: e,
      alias: `${n}$${a}`,
      ownPass: !!o
    })));
    return cs(i), i;
  }

  function* un(e, t, {
    type: r,
    alias: n,
    ownPass: o
  }) {
    let i = (0, es.getItemDescriptor)(e);
    if (i) return i;
    let s,
        a,
        u = e;
    Array.isArray(u) && (u.length === 3 ? [u, a, s] = u : [u, a] = u);
    let l,
        p = null;

    if (typeof u == "string") {
      if (typeof r != "string") throw new Error("To resolve a string-based item, the type of item must be given");
      let m = r === "plugin" ? Zr.loadPlugin : Zr.loadPreset,
          v = u;
      ({
        filepath: p,
        value: u
      } = yield* m(u, t)), l = {
        request: v,
        resolved: p
      };
    }

    if (!u) throw new Error(`Unexpected falsy value: ${String(u)}`);
    if (typeof u == "object" && u.__esModule) if (u.default) u = u.default;else throw new Error("Must export a default export when using ES6 modules.");
    if (typeof u != "object" && typeof u != "function") throw new Error(`Unsupported format: ${typeof u}. Expected an object or a function.`);
    if (p !== null && typeof u == "object" && u) throw new Error(`Plugin/Preset files are not allowed to export objects, only functions. In ${p}`);
    return {
      name: s,
      alias: p || n,
      value: u,
      options: a,
      dirname: t,
      ownPass: o,
      file: l
    };
  }

  function cs(e) {
    let t = new Map();

    for (let r of e) {
      if (typeof r.value != "function") continue;
      let n = t.get(r.value);

      if (n || (n = new Set(), t.set(r.value, n)), n.has(r.name)) {
        let o = e.filter(i => i.value === r.value);
        throw new Error(["Duplicate plugin/preset detected.", "If you'd like to use two separate instances of a plugin,", "they need separate names, e.g.", "", "  plugins: [", "    ['some-plugin', {}],", "    ['some-plugin', {}, 'some unique name'],", "  ]", "", "Duplicates detected are:", `${JSON.stringify(o, null, 2)}`].join(`
`));
      }

      n.add(r.name);
    }
  }
});
var ae = d(ue => {
  "use strict";

  Object.defineProperty(ue, "__esModule", {
    value: !0
  });
  ue.createConfigItem = ps;
  ue.createItemFromDescriptor = cn;
  ue.getItemDescriptor = ds;

  function ln() {
    let e = __path$;
    return ln = function () {
      return e;
    }, e;
  }

  var fs = Ot();

  function cn(e) {
    return new Te(e);
  }

  function* ps(e, {
    dirname: t = ".",
    type: r
  } = {}) {
    let n = yield* (0, fs.createDescriptor)(e, ln().resolve(t), {
      type: r,
      alias: "programmatic item"
    });
    return cn(n);
  }

  function ds(e) {
    if (e != null && e[Pt]) return e._descriptor;
  }

  var Pt = Symbol.for("@babel/core@7 - ConfigItem"),
      Te = class {
    constructor(t) {
      this._descriptor = void 0, this[Pt] = !0, this.value = void 0, this.options = void 0, this.dirname = void 0, this.name = void 0, this.file = void 0, this._descriptor = t, Object.defineProperty(this, "_descriptor", {
        enumerable: !1
      }), Object.defineProperty(this, Pt, {
        enumerable: !1
      }), this.value = this._descriptor.value, this.options = this._descriptor.options, this.dirname = this._descriptor.dirname, this.name = this._descriptor.name, this.file = this._descriptor.file ? {
        request: this._descriptor.file.request,
        resolved: this._descriptor.file.resolved
      } : void 0, Object.freeze(this);
    }

  };
  Object.freeze(Te.prototype);
});
var fn = d(Ie => {
  "use strict";

  Object.defineProperty(Ie, "__esModule", {
    value: !0
  });
  Ie.default = void 0;
  var bs = {
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
  Ie.default = bs;
});
var St = d(O => {
  "use strict";

  Object.defineProperty(O, "__esModule", {
    value: !0
  });
  O.access = x;
  O.assertArray = Ct;
  O.assertAssumptions = Ns;
  O.assertBabelrcSearch = As;
  O.assertBoolean = Et;
  O.assertCallerMetadata = ws;
  O.assertCompact = ys;
  O.assertConfigApplicableTest = Ss;
  O.assertConfigFileSearch = ks;
  O.assertFunction = Ps;
  O.assertIgnoreList = Es;
  O.assertInputSourceMap = _s;
  O.assertObject = bn;
  O.assertPluginList = xs;
  O.assertRootMode = ms;
  O.assertSourceMaps = hs;
  O.assertSourceType = vs;
  O.assertString = Os;
  O.assertTargets = Fs;
  O.msg = g;

  function le() {
    let e = ___babel_helper_compilation_targets$;
    return le = function () {
      return e;
    }, e;
  }

  var gs = ce();

  function g(e) {
    switch (e.type) {
      case "root":
        return "";

      case "env":
        return `${g(e.parent)}.env["${e.name}"]`;

      case "overrides":
        return `${g(e.parent)}.overrides[${e.index}]`;

      case "option":
        return `${g(e.parent)}.${e.name}`;

      case "access":
        return `${g(e.parent)}[${JSON.stringify(e.name)}]`;

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

  function ms(e, t) {
    if (t !== void 0 && t !== "root" && t !== "upward" && t !== "upward-optional") throw new Error(`${g(e)} must be a "root", "upward", "upward-optional" or undefined`);
    return t;
  }

  function hs(e, t) {
    if (t !== void 0 && typeof t != "boolean" && t !== "inline" && t !== "both") throw new Error(`${g(e)} must be a boolean, "inline", "both", or undefined`);
    return t;
  }

  function ys(e, t) {
    if (t !== void 0 && typeof t != "boolean" && t !== "auto") throw new Error(`${g(e)} must be a boolean, "auto", or undefined`);
    return t;
  }

  function vs(e, t) {
    if (t !== void 0 && t !== "module" && t !== "script" && t !== "unambiguous") throw new Error(`${g(e)} must be "module", "script", "unambiguous", or undefined`);
    return t;
  }

  function ws(e, t) {
    let r = bn(e, t);

    if (r) {
      if (typeof r.name != "string") throw new Error(`${g(e)} set but does not contain "name" property string`);

      for (let n of Object.keys(r)) {
        let o = x(e, n),
            i = r[n];
        if (i != null && typeof i != "boolean" && typeof i != "string" && typeof i != "number") throw new Error(`${g(o)} must be null, undefined, a boolean, a string, or a number.`);
      }
    }

    return t;
  }

  function _s(e, t) {
    if (t !== void 0 && typeof t != "boolean" && (typeof t != "object" || !t)) throw new Error(`${g(e)} must be a boolean, object, or undefined`);
    return t;
  }

  function Os(e, t) {
    if (t !== void 0 && typeof t != "string") throw new Error(`${g(e)} must be a string, or undefined`);
    return t;
  }

  function Ps(e, t) {
    if (t !== void 0 && typeof t != "function") throw new Error(`${g(e)} must be a function, or undefined`);
    return t;
  }

  function Et(e, t) {
    if (t !== void 0 && typeof t != "boolean") throw new Error(`${g(e)} must be a boolean, or undefined`);
    return t;
  }

  function bn(e, t) {
    if (t !== void 0 && (typeof t != "object" || Array.isArray(t) || !t)) throw new Error(`${g(e)} must be an object, or undefined`);
    return t;
  }

  function Ct(e, t) {
    if (t != null && !Array.isArray(t)) throw new Error(`${g(e)} must be an array, or undefined`);
    return t;
  }

  function Es(e, t) {
    let r = Ct(e, t);
    return r && r.forEach((n, o) => Cs(x(e, o), n)), r;
  }

  function Cs(e, t) {
    if (typeof t != "string" && typeof t != "function" && !(t instanceof RegExp)) throw new Error(`${g(e)} must be an array of string/Function/RegExp values, or undefined`);
    return t;
  }

  function Ss(e, t) {
    if (t === void 0) return t;
    if (Array.isArray(t)) t.forEach((r, n) => {
      if (!qe(r)) throw new Error(`${g(x(e, n))} must be a string/Function/RegExp.`);
    });else if (!qe(t)) throw new Error(`${g(e)} must be a string/Function/RegExp, or an array of those`);
    return t;
  }

  function qe(e) {
    return typeof e == "string" || typeof e == "function" || e instanceof RegExp;
  }

  function ks(e, t) {
    if (t !== void 0 && typeof t != "boolean" && typeof t != "string") throw new Error(`${g(e)} must be a undefined, a boolean, a string, got ${JSON.stringify(t)}`);
    return t;
  }

  function As(e, t) {
    if (t === void 0 || typeof t == "boolean") return t;
    if (Array.isArray(t)) t.forEach((r, n) => {
      if (!qe(r)) throw new Error(`${g(x(e, n))} must be a string/Function/RegExp.`);
    });else if (!qe(t)) throw new Error(`${g(e)} must be a undefined, a boolean, a string/Function/RegExp or an array of those, got ${JSON.stringify(t)}`);
    return t;
  }

  function xs(e, t) {
    let r = Ct(e, t);
    return r && r.forEach((n, o) => js(x(e, o), n)), r;
  }

  function js(e, t) {
    if (Array.isArray(t)) {
      if (t.length === 0) throw new Error(`${g(e)} must include an object`);
      if (t.length > 3) throw new Error(`${g(e)} may only be a two-tuple or three-tuple`);

      if (pn(x(e, 0), t[0]), t.length > 1) {
        let r = t[1];
        if (r !== void 0 && r !== !1 && (typeof r != "object" || Array.isArray(r) || r === null)) throw new Error(`${g(x(e, 1))} must be an object, false, or undefined`);
      }

      if (t.length === 3) {
        let r = t[2];
        if (r !== void 0 && typeof r != "string") throw new Error(`${g(x(e, 2))} must be a string, or undefined`);
      }
    } else pn(e, t);

    return t;
  }

  function pn(e, t) {
    if ((typeof t != "object" || !t) && typeof t != "string" && typeof t != "function") throw new Error(`${g(e)} must be a string, object, function`);
    return t;
  }

  function Fs(e, t) {
    if ((0, le().isBrowsersQueryValid)(t)) return t;
    if (typeof t != "object" || !t || Array.isArray(t)) throw new Error(`${g(e)} must be a string, an array of strings or an object`);
    let r = x(e, "browsers"),
        n = x(e, "esmodules");
    dn(r, t.browsers), Et(n, t.esmodules);

    for (let o of Object.keys(t)) {
      let i = t[o],
          s = x(e, o);
      if (o === "esmodules") Et(s, i);else if (o === "browsers") dn(s, i);else if (Object.hasOwnProperty.call(le().TargetNames, o)) Ms(s, i);else {
        let a = Object.keys(le().TargetNames).join(", ");
        throw new Error(`${g(s)} is not a valid target. Supported targets are ${a}`);
      }
    }

    return t;
  }

  function dn(e, t) {
    if (t !== void 0 && !(0, le().isBrowsersQueryValid)(t)) throw new Error(`${g(e)} must be undefined, a string or an array of strings`);
  }

  function Ms(e, t) {
    if (!(typeof t == "number" && Math.round(t) === t) && typeof t != "string") throw new Error(`${g(e)} must be a string or an integer number`);
  }

  function Ns(e, t) {
    if (t === void 0) return;
    if (typeof t != "object" || t === null) throw new Error(`${g(e)} must be an object or undefined.`);
    let r = e;

    do r = r.parent; while (r.type !== "root");

    let n = r.source === "preset";

    for (let o of Object.keys(t)) {
      let i = x(e, o);
      if (!gs.assumptionsNames.has(o)) throw new Error(`${g(i)} is not a supported assumption.`);
      if (typeof t[o] != "boolean") throw new Error(`${g(i)} must be a boolean.`);
      if (n && t[o] === !1) throw new Error(`${g(i)} cannot be set to 'false' inside presets.`);
    }

    return t;
  }
});
var G = d(V => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  });
  V.beginHiddenCallStack = qs;
  V.endHiddenCallStack = Rs;
  V.expectedError = Is;
  V.injcectVirtualStackFrame = Ts;
  var gn = Function.call.bind(Error.prototype.toString),
      De = !!Error.captureStackTrace,
      mn = "startHiding - secret - don't use this - v1",
      hn = "stopHiding - secret - don't use this - v1",
      yn = new WeakSet(),
      Re = new WeakMap();

  function $s(e) {
    return Object.create({
      isNative: () => !1,
      isConstructor: () => !1,
      isToplevel: () => !0,
      getFileName: () => e,
      getLineNumber: () => {},
      getColumnNumber: () => {},
      getFunctionName: () => {},
      getMethodName: () => {},
      getTypeName: () => {},
      toString: () => e
    });
  }

  function Ts(e, t) {
    if (!De) return;
    let r = Re.get(e);
    return r || Re.set(e, r = []), r.push($s(t)), e;
  }

  function Is(e) {
    if (!!De) return yn.add(e), e;
  }

  function qs(e) {
    return De ? Object.defineProperty(function (...t) {
      return vn(), e(...t);
    }, "name", {
      value: hn
    }) : e;
  }

  function Rs(e) {
    return De ? Object.defineProperty(function (...t) {
      return e(...t);
    }, "name", {
      value: mn
    }) : e;
  }

  function vn() {
    vn = () => {};

    let {
      prepareStackTrace: e = Ds
    } = Error,
        t = 50;
    Error.stackTraceLimit && (Error.stackTraceLimit = Math.max(Error.stackTraceLimit, t)), Error.prepareStackTrace = function (n, o) {
      let i = [],
          a = yn.has(n) ? "hiding" : "unknown";

      for (let u = 0; u < o.length; u++) {
        let l = o[u].getFunctionName();
        if (l === mn) a = "hiding";else if (l === hn) {
          if (a === "hiding") a = "showing", Re.has(n) && i.unshift(...Re.get(n));else if (a === "unknown") {
            i = o;
            break;
          }
        } else a !== "hiding" && i.push(o[u]);
      }

      return e(n, i);
    };
  }

  function Ds(e, t) {
    return t.length === 0 ? gn(e) : `${gn(e)}
    at ${t.join(`
    at `)}`;
  }
});
var Le = d(Be => {
  "use strict";

  Object.defineProperty(Be, "__esModule", {
    value: !0
  });
  Be.default = void 0;
  var wn = G(),
      kt = class extends Error {
    constructor(t, r) {
      super(t), (0, wn.expectedError)(this), r && (0, wn.injcectVirtualStackFrame)(this, r);
    }

  };
  Be.default = kt;
});
var ce = d(z => {
  "use strict";

  Object.defineProperty(z, "__esModule", {
    value: !0
  });
  z.assumptionsNames = void 0;
  z.checkNoUnwrappedItemOptionPairs = Ys;
  z.validate = Hs;

  var _n = fn(),
      c = St(),
      Bs = Le(),
      On = {
    cwd: c.assertString,
    root: c.assertString,
    rootMode: c.assertRootMode,
    configFile: c.assertConfigFileSearch,
    caller: c.assertCallerMetadata,
    filename: c.assertString,
    filenameRelative: c.assertString,
    code: c.assertBoolean,
    ast: c.assertBoolean,
    cloneInputAst: c.assertBoolean,
    envName: c.assertString
  },
      Pn = {
    babelrc: c.assertBoolean,
    babelrcRoots: c.assertBabelrcSearch
  },
      En = {
    extends: c.assertString,
    ignore: c.assertIgnoreList,
    only: c.assertIgnoreList,
    targets: c.assertTargets,
    browserslistConfigFile: c.assertConfigFileSearch,
    browserslistEnv: c.assertString
  },
      Sn = {
    inputSourceMap: c.assertInputSourceMap,
    presets: c.assertPluginList,
    plugins: c.assertPluginList,
    passPerPreset: c.assertBoolean,
    assumptions: c.assertAssumptions,
    env: Gs,
    overrides: zs,
    test: c.assertConfigApplicableTest,
    include: c.assertConfigApplicableTest,
    exclude: c.assertConfigApplicableTest,
    retainLines: c.assertBoolean,
    comments: c.assertBoolean,
    shouldPrintComment: c.assertFunction,
    compact: c.assertCompact,
    minified: c.assertBoolean,
    auxiliaryCommentBefore: c.assertString,
    auxiliaryCommentAfter: c.assertString,
    sourceType: c.assertSourceType,
    wrapPluginVisitorMethod: c.assertFunction,
    highlightCode: c.assertBoolean,
    sourceMaps: c.assertSourceMaps,
    sourceMap: c.assertSourceMaps,
    sourceFileName: c.assertString,
    sourceRoot: c.assertString,
    parserOpts: c.assertObject,
    generatorOpts: c.assertObject
  };

  Object.assign(Sn, {
    getModuleId: c.assertFunction,
    moduleRoot: c.assertString,
    moduleIds: c.assertBoolean,
    moduleId: c.assertString
  });
  var Ls = ["arrayLikeIsIterable", "constantReexports", "constantSuper", "enumerableModuleMeta", "ignoreFunctionLength", "ignoreToPrimitiveHint", "iterableIsArray", "mutableTemplateObject", "noClassCalls", "noDocumentAll", "noIncompleteNsImportDetection", "noNewArrows", "objectRestNoSymbols", "privateFieldsAsProperties", "pureGetters", "setClassMethods", "setComputedProperties", "setPublicClassFields", "setSpreadProperties", "skipForOfIteratorClosing", "superIsCallableConstructor"],
      Us = new Set(Ls);
  z.assumptionsNames = Us;

  function kn(e) {
    return e.type === "root" ? e.source : kn(e.parent);
  }

  function Hs(e, t, r) {
    try {
      return At({
        type: "root",
        source: e
      }, t);
    } catch (n) {
      let o = new Bs.default(n.message, r);
      throw n.code && (o.code = n.code), o;
    }
  }

  function At(e, t) {
    let r = kn(e);
    return Vs(t), Object.keys(t).forEach(n => {
      let o = {
        type: "option",
        name: n,
        parent: e
      };
      if (r === "preset" && En[n]) throw new Error(`${(0, c.msg)(o)} is not allowed in preset options`);
      if (r !== "arguments" && On[n]) throw new Error(`${(0, c.msg)(o)} is only allowed in root programmatic options`);
      if (r !== "arguments" && r !== "configfile" && Pn[n]) throw r === "babelrcfile" || r === "extendsfile" ? new Error(`${(0, c.msg)(o)} is not allowed in .babelrc or "extends"ed files, only in root programmatic options, or babel.config.js/config file options`) : new Error(`${(0, c.msg)(o)} is only allowed in root programmatic options, or babel.config.js/config file options`);
      (Sn[n] || En[n] || Pn[n] || On[n] || Ws)(o, t[n]);
    }), t;
  }

  function Ws(e) {
    let t = e.name;

    if (_n.default[t]) {
      let {
        message: r,
        version: n = 5
      } = _n.default[t];
      throw new Error(`Using removed Babel ${n} option: ${(0, c.msg)(e)} - ${r}`);
    } else {
      let r = new Error(`Unknown option: ${(0, c.msg)(e)}. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.`);
      throw r.code = "BABEL_UNKNOWN_OPTION", r;
    }
  }

  function Cn(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }

  function Vs(e) {
    if (Cn(e, "sourceMap") && Cn(e, "sourceMaps")) throw new Error(".sourceMap is an alias for .sourceMaps, cannot use both");
  }

  function Gs(e, t) {
    if (e.parent.type === "env") throw new Error(`${(0, c.msg)(e)} is not allowed inside of another .env block`);
    let r = e.parent,
        n = (0, c.assertObject)(e, t);
    if (n) for (let o of Object.keys(n)) {
      let i = (0, c.assertObject)((0, c.access)(e, o), n[o]);
      if (!i) continue;
      At({
        type: "env",
        name: o,
        parent: r
      }, i);
    }
    return n;
  }

  function zs(e, t) {
    if (e.parent.type === "env") throw new Error(`${(0, c.msg)(e)} is not allowed inside an .env block`);
    if (e.parent.type === "overrides") throw new Error(`${(0, c.msg)(e)} is not allowed inside an .overrides block`);
    let r = e.parent,
        n = (0, c.assertArray)(e, t);
    if (n) for (let [o, i] of n.entries()) {
      let s = (0, c.access)(e, o),
          a = (0, c.assertObject)(s, i);
      if (!a) throw new Error(`${(0, c.msg)(s)} must be an object`);
      At({
        type: "overrides",
        index: o,
        parent: r
      }, a);
    }
    return n;
  }

  function Ys(e, t, r, n) {
    if (t === 0) return;
    let o = e[t - 1],
        i = e[t];
    o.file && o.options === void 0 && typeof i.value == "object" && (n.message += `
- Maybe you meant to use
"${r}s": [
  ["${o.file.request}", ${JSON.stringify(i.value, void 0, 2)}]
]
To be a valid ${r}, its name and options should be wrapped in a pair of brackets`);
  }
});
var jn = d(Mt => {
  "use strict";

  Object.defineProperty(Mt, "__esModule", {
    value: !0
  });
  Mt.default = Xs;

  function Ue() {
    let e = __path$;
    return Ue = function () {
      return e;
    }, e;
  }

  var fe = `\\${Ue().sep}`,
      xt = `(?:${fe}|$)`,
      jt = `[^${fe}]+`,
      Ft = `(?:${jt}${fe})`,
      xn = `(?:${jt}${xt})`,
      Js = `${Ft}*?`,
      Ks = `${Ft}*?${xn}?`;

  function An(e) {
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  }

  function Xs(e, t) {
    let r = Ue().resolve(t, e).split(Ue().sep);
    return new RegExp(["^", ...r.map((n, o) => {
      let i = o === r.length - 1;
      return n === "**" ? i ? Ks : Js : n === "*" ? i ? xn : Ft : n.indexOf("*.") === 0 ? jt + An(n.slice(1)) + (i ? xt : fe) : An(n) + (i ? xt : fe);
    })].join(""));
  }
});
var $n = d(Y => {
  "use strict";

  Object.defineProperty(Y, "__esModule", {
    value: !0
  });
  Y.ConfigPrinter = Y.ChainFormatter = void 0;

  function Mn() {
    let e = __gensync$;
    return Mn = function () {
      return e;
    }, e;
  }

  var Nn = {
    Programmatic: 0,
    Config: 1
  };
  Y.ChainFormatter = Nn;
  var Nt = {
    title(e, t, r) {
      let n = "";
      return e === Nn.Programmatic ? (n = "programmatic options", t && (n += " from " + t)) : n = "config " + r, n;
    },

    loc(e, t) {
      let r = "";
      return e != null && (r += `.overrides[${e}]`), t != null && (r += `.env["${t}"]`), r;
    },

    *optionsAndDescriptors(e) {
      let t = Object.assign({}, e.options);
      delete t.overrides, delete t.env;
      let r = [...(yield* e.plugins())];
      r.length && (t.plugins = r.map(o => Fn(o)));
      let n = [...(yield* e.presets())];
      return n.length && (t.presets = [...n].map(o => Fn(o))), JSON.stringify(t, void 0, 2);
    }

  };

  function Fn(e) {
    var t;
    let r = (t = e.file) == null ? void 0 : t.request;
    return r == null && (typeof e.value == "object" ? r = e.value : typeof e.value == "function" && (r = `[Function: ${e.value.toString().slice(0, 50)} ... ]`)), r == null && (r = "[Unknown]"), e.options === void 0 ? r : e.name == null ? [r, e.options] : [r, e.options, e.name];
  }

  var pe = class {
    constructor() {
      this._stack = [];
    }

    configure(t, r, {
      callerName: n,
      filepath: o
    }) {
      return t ? (i, s, a) => {
        this._stack.push({
          type: r,
          callerName: n,
          filepath: o,
          content: i,
          index: s,
          envName: a
        });
      } : () => {};
    }

    static *format(t) {
      let r = Nt.title(t.type, t.callerName, t.filepath),
          n = Nt.loc(t.index, t.envName);
      n && (r += ` ${n}`);
      let o = yield* Nt.optionsAndDescriptors(t.content);
      return `${r}
${o}`;
    }

    *output() {
      return this._stack.length === 0 ? "" : (yield* Mn().all(this._stack.map(r => pe.format(r)))).join(`

`);
    }

  };
  Y.ConfigPrinter = pe;
});
var Ht = d(K => {
  "use strict";

  Object.defineProperty(K, "__esModule", {
    value: !0
  });
  K.buildPresetChain = ea;
  K.buildPresetChainWalker = void 0;
  K.buildRootChain = ia;

  function qn() {
    let e = __path$;
    return qn = function () {
      return e;
    }, e;
  }

  function Rn() {
    let e = __debug$;
    return Rn = function () {
      return e;
    }, e;
  }

  var qt = ce(),
      Dn = jn(),
      be = $n(),
      Qs = G(),
      Zs = Le(),
      de = ne(),
      C = oe(),
      M = Ot(),
      Tn = Rn()("babel:config:config-chain");

  function* ea(e, t) {
    let r = yield* Bn(e, t);
    return r ? {
      plugins: Ve(r.plugins),
      presets: Ve(r.presets),
      options: r.options.map(n => Ln(n)),
      files: new Set()
    } : null;
  }

  var Bn = Ut({
    root: e => ta(e),
    env: (e, t) => ra(e)(t),
    overrides: (e, t) => na(e)(t),
    overridesEnv: (e, t, r) => oa(e)(t)(r),
    createLogger: () => () => {}
  });
  K.buildPresetChainWalker = Bn;
  var ta = (0, C.makeWeakCacheSync)(e => Rt(e, e.alias, M.createUncachedDescriptors)),
      ra = (0, C.makeWeakCacheSync)(e => (0, C.makeStrongCacheSync)(t => Dt(e, e.alias, M.createUncachedDescriptors, t))),
      na = (0, C.makeWeakCacheSync)(e => (0, C.makeStrongCacheSync)(t => Bt(e, e.alias, M.createUncachedDescriptors, t))),
      oa = (0, C.makeWeakCacheSync)(e => (0, C.makeStrongCacheSync)(t => (0, C.makeStrongCacheSync)(r => Lt(e, e.alias, M.createUncachedDescriptors, t, r))));

  function* ia(e, t) {
    let r,
        n,
        o = new be.ConfigPrinter(),
        i = yield* ca({
      options: e,
      dirname: t.cwd
    }, t, void 0, o);
    if (!i) return null;
    let s = yield* o.output(),
        a;
    typeof e.configFile == "string" ? a = yield* (0, de.loadConfig)(e.configFile, t.cwd, t.envName, t.caller) : e.configFile !== !1 && (a = yield* (0, de.findRootConfig)(t.root, t.envName, t.caller));
    let {
      babelrc: u,
      babelrcRoots: l
    } = e,
        p = t.cwd,
        m = We(),
        v = new be.ConfigPrinter();

    if (a) {
      let _ = aa(a),
          T = yield* Tt(_, t, void 0, v);

      if (!T) return null;
      r = yield* v.output(), u === void 0 && (u = _.options.babelrc), l === void 0 && (p = _.dirname, l = _.options.babelrcRoots), J(m, T);
    }

    let h,
        y,
        w = !1,
        E = We();

    if ((u === !0 || u === void 0) && typeof t.filename == "string") {
      let _ = yield* (0, de.findPackageData)(t.filename);

      if (_ && sa(t, _, l, p)) {
        if (({
          ignore: h,
          config: y
        } = yield* (0, de.findRelativeConfig)(_, t.envName, t.caller)), h && E.files.add(h.filepath), h && Un(t, h.ignore, null, h.dirname) && (w = !0), y && !w) {
          let T = ua(y),
              N = new be.ConfigPrinter(),
              F = yield* Tt(T, t, void 0, N);
          F ? (n = yield* N.output(), J(E, F)) : w = !0;
        }

        y && w && E.files.add(y.filepath);
      }
    }

    t.showConfig && console.log(`Babel configs on "${t.filename}" (ascending priority):
` + [r, n, s].filter(_ => !!_).join(`

`) + `
-----End Babel configs-----`);
    let j = J(J(J(We(), m), E), i);
    return {
      plugins: w ? [] : Ve(j.plugins),
      presets: w ? [] : Ve(j.presets),
      options: w ? [] : j.options.map(_ => Ln(_)),
      fileHandling: w ? "ignored" : "transpile",
      ignore: h || void 0,
      babelrc: y || void 0,
      config: a || void 0,
      files: j.files
    };
  }

  function sa(e, t, r, n) {
    if (typeof r == "boolean") return r;
    let o = e.root;
    if (r === void 0) return t.directories.indexOf(o) !== -1;
    let i = r;
    return Array.isArray(i) || (i = [i]), i = i.map(s => typeof s == "string" ? qn().resolve(n, s) : s), i.length === 1 && i[0] === o ? t.directories.indexOf(o) !== -1 : i.some(s => (typeof s == "string" && (s = (0, Dn.default)(s, n)), t.directories.some(a => Hn(s, n, a, e))));
  }

  var aa = (0, C.makeWeakCacheSync)(e => ({
    filepath: e.filepath,
    dirname: e.dirname,
    options: (0, qt.validate)("configfile", e.options, e.filepath)
  })),
      ua = (0, C.makeWeakCacheSync)(e => ({
    filepath: e.filepath,
    dirname: e.dirname,
    options: (0, qt.validate)("babelrcfile", e.options, e.filepath)
  })),
      la = (0, C.makeWeakCacheSync)(e => ({
    filepath: e.filepath,
    dirname: e.dirname,
    options: (0, qt.validate)("extendsfile", e.options, e.filepath)
  })),
      ca = Ut({
    root: e => Rt(e, "base", M.createCachedDescriptors),
    env: (e, t) => Dt(e, "base", M.createCachedDescriptors, t),
    overrides: (e, t) => Bt(e, "base", M.createCachedDescriptors, t),
    overridesEnv: (e, t, r) => Lt(e, "base", M.createCachedDescriptors, t, r),
    createLogger: (e, t, r) => ha(e, t, r)
  }),
      fa = Ut({
    root: e => pa(e),
    env: (e, t) => da(e)(t),
    overrides: (e, t) => ba(e)(t),
    overridesEnv: (e, t, r) => ga(e)(t)(r),
    createLogger: (e, t, r) => ma(e.filepath, t, r)
  });

  function* Tt(e, t, r, n) {
    let o = yield* fa(e, t, r, n);
    return o && o.files.add(e.filepath), o;
  }

  var pa = (0, C.makeWeakCacheSync)(e => Rt(e, e.filepath, M.createUncachedDescriptors)),
      da = (0, C.makeWeakCacheSync)(e => (0, C.makeStrongCacheSync)(t => Dt(e, e.filepath, M.createUncachedDescriptors, t))),
      ba = (0, C.makeWeakCacheSync)(e => (0, C.makeStrongCacheSync)(t => Bt(e, e.filepath, M.createUncachedDescriptors, t))),
      ga = (0, C.makeWeakCacheSync)(e => (0, C.makeStrongCacheSync)(t => (0, C.makeStrongCacheSync)(r => Lt(e, e.filepath, M.createUncachedDescriptors, t, r))));

  function ma(e, t, r) {
    return r ? r.configure(t.showConfig, be.ChainFormatter.Config, {
      filepath: e
    }) : () => {};
  }

  function Rt({
    dirname: e,
    options: t
  }, r, n) {
    return n(e, t, r);
  }

  function ha(e, t, r) {
    var n;
    return r ? r.configure(t.showConfig, be.ChainFormatter.Programmatic, {
      callerName: (n = t.caller) == null ? void 0 : n.name
    }) : () => {};
  }

  function Dt({
    dirname: e,
    options: t
  }, r, n, o) {
    let i = t.env && t.env[o];
    return i ? n(e, i, `${r}.env["${o}"]`) : null;
  }

  function Bt({
    dirname: e,
    options: t
  }, r, n, o) {
    let i = t.overrides && t.overrides[o];
    if (!i) throw new Error("Assertion failure - missing override");
    return n(e, i, `${r}.overrides[${o}]`);
  }

  function Lt({
    dirname: e,
    options: t
  }, r, n, o, i) {
    let s = t.overrides && t.overrides[o];
    if (!s) throw new Error("Assertion failure - missing override");
    let a = s.env && s.env[i];
    return a ? n(e, a, `${r}.overrides[${o}].env["${i}"]`) : null;
  }

  function Ut({
    root: e,
    env: t,
    overrides: r,
    overridesEnv: n,
    createLogger: o
  }) {
    return function* (s, a, u = new Set(), l) {
      let {
        dirname: p
      } = s,
          m = [],
          v = e(s);

      if (He(v, p, a, s.filepath)) {
        m.push({
          config: v,
          envName: void 0,
          index: void 0
        });
        let w = t(s, a.envName);
        w && He(w, p, a, s.filepath) && m.push({
          config: w,
          envName: a.envName,
          index: void 0
        }), (v.options.overrides || []).forEach((E, j) => {
          let _ = r(s, j);

          if (He(_, p, a, s.filepath)) {
            m.push({
              config: _,
              index: j,
              envName: void 0
            });
            let T = n(s, j, a.envName);
            T && He(T, p, a, s.filepath) && m.push({
              config: T,
              index: j,
              envName: a.envName
            });
          }
        });
      }

      if (m.some(({
        config: {
          options: {
            ignore: w,
            only: E
          }
        }
      }) => Un(a, w, E, p))) return null;
      let h = We(),
          y = o(s, a, l);

      for (let {
        config: w,
        index: E,
        envName: j
      } of m) {
        if (!(yield* ya(h, w.options, p, a, u, l))) return null;
        y(w, E, j), yield* va(h, w);
      }

      return h;
    };
  }

  function* ya(e, t, r, n, o, i) {
    if (t.extends === void 0) return !0;
    let s = yield* (0, de.loadConfig)(t.extends, r, n.envName, n.caller);
    if (o.has(s)) throw new Error(`Configuration cycle detected loading ${s.filepath}.
File already loaded following the config chain:
` + Array.from(o, u => ` - ${u.filepath}`).join(`
`));
    o.add(s);
    let a = yield* Tt(la(s), n, o, i);
    return o.delete(s), a ? (J(e, a), !0) : !1;
  }

  function J(e, t) {
    e.options.push(...t.options), e.plugins.push(...t.plugins), e.presets.push(...t.presets);

    for (let r of t.files) e.files.add(r);

    return e;
  }

  function* va(e, {
    options: t,
    plugins: r,
    presets: n
  }) {
    return e.options.push(t), e.plugins.push(...(yield* r())), e.presets.push(...(yield* n())), e;
  }

  function We() {
    return {
      options: [],
      presets: [],
      plugins: [],
      files: new Set()
    };
  }

  function Ln(e) {
    let t = Object.assign({}, e);
    return delete t.extends, delete t.env, delete t.overrides, delete t.plugins, delete t.presets, delete t.passPerPreset, delete t.ignore, delete t.only, delete t.test, delete t.include, delete t.exclude, Object.prototype.hasOwnProperty.call(t, "sourceMap") && (t.sourceMaps = t.sourceMap, delete t.sourceMap), t;
  }

  function Ve(e) {
    let t = new Map(),
        r = [];

    for (let n of e) if (typeof n.value == "function") {
      let o = n.value,
          i = t.get(o);
      i || (i = new Map(), t.set(o, i));
      let s = i.get(n.name);
      s ? s.value = n : (s = {
        value: n
      }, r.push(s), n.ownPass || i.set(n.name, s));
    } else r.push({
      value: n
    });

    return r.reduce((n, o) => (n.push(o.value), n), []);
  }

  function He({
    options: e
  }, t, r, n) {
    return (e.test === void 0 || $t(r, e.test, t, n)) && (e.include === void 0 || $t(r, e.include, t, n)) && (e.exclude === void 0 || !$t(r, e.exclude, t, n));
  }

  function $t(e, t, r, n) {
    let o = Array.isArray(t) ? t : [t];
    return It(e, o, r, n);
  }

  function In(e, t) {
    return t instanceof RegExp ? String(t) : t;
  }

  function Un(e, t, r, n) {
    if (t && It(e, t, n)) {
      var o;
      let s = `No config is applied to "${(o = e.filename) != null ? o : "(unknown)"}" because it matches one of \`ignore: ${JSON.stringify(t, In)}\` from "${n}"`;
      return Tn(s), e.showConfig && console.log(s), !0;
    }

    if (r && !It(e, r, n)) {
      var i;
      let s = `No config is applied to "${(i = e.filename) != null ? i : "(unknown)"}" because it fails to match one of \`only: ${JSON.stringify(r, In)}\` from "${n}"`;
      return Tn(s), e.showConfig && console.log(s), !0;
    }

    return !1;
  }

  function It(e, t, r, n) {
    return t.some(o => Hn(o, r, e.filename, e, n));
  }

  function Hn(e, t, r, n, o) {
    if (typeof e == "function") return !!(0, Qs.endHiddenCallStack)(e)(r, {
      dirname: t,
      envName: n.envName,
      caller: n.caller
    });
    if (typeof r != "string") throw new Zs.default("Configuration contains string/RegExp pattern, but no filename was passed to Babel", o);
    return typeof e == "string" && (e = (0, Dn.default)(e, t)), e.test(r);
  }
});
var Wn = d(Wt => {
  "use strict";

  Object.defineProperty(Wt, "__esModule", {
    value: !0
  });
  Wt.validatePluginObject = Pa;
  var R = St(),
      wa = {
    name: R.assertString,
    manipulateOptions: R.assertFunction,
    pre: R.assertFunction,
    post: R.assertFunction,
    inherits: R.assertFunction,
    visitor: _a,
    parserOverride: R.assertFunction,
    generatorOverride: R.assertFunction
  };

  function _a(e, t) {
    let r = (0, R.assertObject)(e, t);
    if (r && (Object.keys(r).forEach(n => Oa(n, r[n])), r.enter || r.exit)) throw new Error(`${(0, R.msg)(e)} cannot contain catch-all "enter" or "exit" handlers. Please target individual nodes.`);
    return r;
  }

  function Oa(e, t) {
    if (t && typeof t == "object") Object.keys(t).forEach(r => {
      if (r !== "enter" && r !== "exit") throw new Error(`.visitor["${e}"] may only have .enter and/or .exit handlers.`);
    });else if (typeof t != "function") throw new Error(`.visitor["${e}"] must be a function`);
    return t;
  }

  function Pa(e) {
    let t = {
      type: "root",
      source: "plugin"
    };
    return Object.keys(e).forEach(r => {
      let n = wa[r];
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
var Jn = d(ge => {
  "use strict";

  Object.defineProperty(ge, "__esModule", {
    value: !0
  });
  ge.makeConfigAPI = zn;
  ge.makePluginAPI = Ea;
  ge.makePresetAPI = Yn;

  function Gn() {
    let e = __semver$;
    return Gn = function () {
      return e;
    }, e;
  }

  var Ge = ze(),
      Vn = oe();

  function zn(e) {
    let t = n => e.using(o => typeof n > "u" ? o.envName : typeof n == "function" ? (0, Vn.assertSimpleType)(n(o.envName)) : (Array.isArray(n) ? n : [n]).some(i => {
      if (typeof i != "string") throw new Error("Unexpected non-string value");
      return i === o.envName;
    })),
        r = n => e.using(o => (0, Vn.assertSimpleType)(n(o.caller)));

    return {
      version: Ge.version,
      cache: e.simple(),
      env: t,
      async: () => !1,
      caller: r,
      assertVersion: Ca
    };
  }

  function Yn(e, t) {
    let r = () => JSON.parse(e.using(o => JSON.stringify(o.targets))),
        n = o => {
      t.push(o);
    };

    return Object.assign({}, zn(e), {
      targets: r,
      addExternalDependency: n
    });
  }

  function Ea(e, t) {
    let r = n => e.using(o => o.assumptions[n]);

    return Object.assign({}, Yn(e, t), {
      assumption: r
    });
  }

  function Ca(e) {
    if (typeof e == "number") {
      if (!Number.isInteger(e)) throw new Error("Expected string or integer value.");
      e = `^${e}.0.0-0`;
    }

    if (typeof e != "string") throw new Error("Expected string or integer value.");
    if (Gn().satisfies(Ge.version, e)) return;
    let t = Error.stackTraceLimit;
    typeof t == "number" && t < 25 && (Error.stackTraceLimit = 25);
    let r = new Error(`Requires Babel "${e}", but was loaded with "${Ge.version}". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.`);
    throw typeof t == "number" && (Error.stackTraceLimit = t), Object.assign(r, {
      code: "BABEL_VERSION_UNSUPPORTED",
      version: Ge.version,
      range: e
    });
  }
});
var Vt = d(me => {
  "use strict";

  Object.defineProperty(me, "__esModule", {
    value: !0
  });
  me.default = Qn;
  me.loadPartialConfig = void 0;

  function Ye() {
    let e = __path$;
    return Ye = function () {
      return e;
    }, e;
  }

  function Xn() {
    let e = __gensync$;
    return Xn = function () {
      return e;
    }, e;
  }

  var Sa = Me(),
      ka = Ae(),
      Kn = ae(),
      Aa = Ht(),
      xa = mt(),
      ja = ce(),
      Je = ne(),
      Fa = _t(),
      Ma = ["showIgnoredFiles"];

  function Na(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        o,
        i;

    for (i = 0; i < n.length; i++) o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);

    return r;
  }

  function $a(e, t) {
    switch (t) {
      case "root":
        return e;

      case "upward-optional":
        {
          let r = (0, Je.findConfigUpwards)(e);
          return r === null ? e : r;
        }

      case "upward":
        {
          let r = (0, Je.findConfigUpwards)(e);
          if (r !== null) return r;
          throw Object.assign(new Error(`Babel was run with rootMode:"upward" but a root could not be found when searching upward from "${e}".
One of the following config files must be in the directory tree: "${Je.ROOT_CONFIG_FILENAMES.join(", ")}".`), {
            code: "BABEL_ROOT_NOT_FOUND",
            dirname: e
          });
        }

      default:
        throw new Error("Assertion failure - unknown rootMode value.");
    }
  }

  function* Qn(e) {
    if (e != null && (typeof e != "object" || Array.isArray(e))) throw new Error("Babel options must be an object, null, or undefined");
    let t = e ? (0, ja.validate)("arguments", e) : {},
        {
      envName: r = (0, xa.getEnv)(),
      cwd: n = ".",
      root: o = ".",
      rootMode: i = "root",
      caller: s,
      cloneInputAst: a = !0
    } = t,
        u = Ye().resolve(n),
        l = $a(Ye().resolve(u, o), i),
        p = typeof t.filename == "string" ? Ye().resolve(n, t.filename) : void 0,
        m = yield* (0, Je.resolveShowConfigPath)(u),
        v = {
      filename: p,
      cwd: u,
      root: l,
      envName: r,
      caller: s,
      showConfig: m === p
    },
        h = yield* (0, Aa.buildRootChain)(t, v);
    if (!h) return null;
    let y = {
      assumptions: {}
    };
    return h.options.forEach(E => {
      (0, ka.mergeOptions)(y, E);
    }), {
      options: Object.assign({}, y, {
        targets: (0, Fa.resolveTargets)(y, l),
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
        plugins: h.plugins.map(E => (0, Kn.createItemFromDescriptor)(E)),
        presets: h.presets.map(E => (0, Kn.createItemFromDescriptor)(E))
      }),
      context: v,
      fileHandling: h.fileHandling,
      ignore: h.ignore,
      babelrc: h.babelrc,
      config: h.config,
      files: h.files
    };
  }

  var Ta = Xn()(function* (e) {
    let t = !1;

    if (typeof e == "object" && e !== null && !Array.isArray(e)) {
      var r = e;
      ({
        showIgnoredFiles: t
      } = r), e = Na(r, Ma);
    }

    let n = yield* Qn(e);
    if (!n) return null;
    let {
      options: o,
      babelrc: i,
      ignore: s,
      config: a,
      fileHandling: u,
      files: l
    } = n;
    return u === "ignored" && !t ? null : ((o.plugins || []).forEach(p => {
      if (p.value instanceof Sa.default) throw new Error("Passing cached plugin instances is not supported in babel.loadPartialConfig()");
    }), new Ke(o, i ? i.filepath : void 0, s ? s.filepath : void 0, a ? a.filepath : void 0, u, l));
  });
  me.loadPartialConfig = Ta;
  var Ke = class {
    constructor(t, r, n, o, i, s) {
      this.options = void 0, this.babelrc = void 0, this.babelignore = void 0, this.config = void 0, this.fileHandling = void 0, this.files = void 0, this.options = t, this.babelignore = n, this.babelrc = r, this.config = o, this.fileHandling = i, this.files = s, Object.freeze(this);
    }

    hasFilesystemConfig() {
      return this.babelrc !== void 0 || this.config !== void 0;
    }

  };
  Object.freeze(Ke.prototype);
});
var ao = d(Xe => {
  "use strict";

  Object.defineProperty(Xe, "__esModule", {
    value: !0
  });
  Xe.default = void 0;

  function ro() {
    let e = __gensync$;
    return ro = function () {
      return e;
    }, e;
  }

  var Yt = Se(),
      Zn = Ae(),
      Ia = ze(),
      no = Me(),
      qa = ae(),
      Ra = Ht(),
      Xt = je();

  function Jt() {
    let e = ___babel_traverse$;
    return Jt = function () {
      return e;
    }, e;
  }

  var Qt = oe(),
      Kt = ce(),
      Da = Wn(),
      oo = Jn(),
      Ba = Vt(),
      La = Le(),
      Ua = ro()(function* (t) {
    var r;
    let n = yield* (0, Ba.default)(t);
    if (!n) return null;
    let {
      options: o,
      context: i,
      fileHandling: s
    } = n;
    if (s === "ignored") return null;
    let a = {},
        {
      plugins: u,
      presets: l
    } = o;
    if (!u || !l) throw new Error("Assertion failure - plugins and presets exist");

    let p = Object.assign({}, i, {
      targets: o.targets
    }),
        m = N => {
      let F = (0, qa.getItemDescriptor)(N);
      if (!F) throw new Error("Assertion failure - must be config item");
      return F;
    },
        v = l.map(m),
        h = u.map(m),
        y = [[]],
        w = [],
        E = [];

    if (yield* eo(i, function* N(F, H) {
      let D = [];

      for (let S = 0; S < F.length; S++) {
        let I = F[S];

        if (I.options !== !1) {
          try {
            var B = yield* za(I, p);
          } catch (ve) {
            throw ve.code === "BABEL_UNKNOWN_OPTION" && (0, Kt.checkNoUnwrappedItemOptionPairs)(F, S, "preset", ve), ve;
          }

          E.push(B.externalDependencies), I.ownPass ? D.push({
            preset: B.chain,
            pass: []
          }) : D.unshift({
            preset: B.chain,
            pass: H
          });
        }
      }

      if (D.length > 0) {
        y.splice(1, 0, ...D.map(S => S.pass).filter(S => S !== H));

        for (let {
          preset: S,
          pass: I
        } of D) {
          if (!S || (I.push(...S.plugins), yield* N(S.presets, I))) return !0;
          S.options.forEach(Go => {
            (0, Zn.mergeOptions)(a, Go);
          });
        }
      }
    })(v, y[0])) return null;
    let _ = a;
    (0, Zn.mergeOptions)(_, o);
    let T = Object.assign({}, p, {
      assumptions: (r = _.assumptions) != null ? r : {}
    });
    return yield* eo(i, function* () {
      y[0].unshift(...h);

      for (let H of y) {
        let D = [];
        w.push(D);

        for (let B = 0; B < H.length; B++) {
          let S = H[B];

          if (S.options !== !1) {
            try {
              var F = yield* so(S, T);
            } catch (I) {
              throw I.code === "BABEL_UNKNOWN_PLUGIN_PROPERTY" && (0, Kt.checkNoUnwrappedItemOptionPairs)(H, B, "plugin", I), I;
            }

            D.push(F), E.push(F.externalDependencies);
          }
        }
      }
    })(), _.plugins = w[0], _.presets = w.slice(1).filter(N => N.length > 0).map(N => ({
      plugins: N
    })), _.passPerPreset = _.presets.length > 0, {
      options: _,
      passes: w,
      externalDependencies: (0, Xt.finalize)(E)
    };
  });
  Xe.default = Ua;

  function eo(e, t) {
    return function* (r, n) {
      try {
        return yield* t(r, n);
      } catch (i) {
        if (!/^\[BABEL\]/.test(i.message)) {
          var o;
          i.message = `[BABEL] ${(o = e.filename) != null ? o : "unknown file"}: ${i.message}`;
        }

        throw i;
      }
    };
  }

  var io = e => (0, Qt.makeWeakCache)(function* ({
    value: t,
    options: r,
    dirname: n,
    alias: o
  }, i) {
    if (r === !1) throw new Error("Assertion failure");
    r = r || {};
    let s = [],
        a = t;

    if (typeof t == "function") {
      let u = (0, Yt.maybeAsync)(t, "You appear to be using an async plugin/preset, but Babel has been called synchronously"),
          l = Object.assign({}, Ia, e(i, s));

      try {
        a = yield* u(l, r, n);
      } catch (p) {
        throw o && (p.message += ` (While processing: ${JSON.stringify(o)})`), p;
      }
    }

    if (!a || typeof a != "object") throw new Error("Plugin/Preset did not return an object.");
    if ((0, Yt.isThenable)(a)) throw yield* [], new Error(`You appear to be using a promise as a plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version. As an alternative, you can prefix the promise with "await". (While processing: ${JSON.stringify(o)})`);

    if (s.length > 0 && (!i.configured() || i.mode() === "forever")) {
      let u = `A plugin/preset has external untracked dependencies (${s[0]}), but the cache `;
      throw i.configured() ? u += " has been configured to never be invalidated. " : u += "has not been configured to be invalidated when the external dependencies change. ", u += `Plugins/presets should configure their cache to be invalidated when the external dependencies change, for example using \`api.cache.invalidate(() => statSync(filepath).mtimeMs)\` or \`api.cache.never()\`
(While processing: ${JSON.stringify(o)})`, new Error(u);
    }

    return {
      value: a,
      options: r,
      dirname: n,
      alias: o,
      externalDependencies: (0, Xt.finalize)(s)
    };
  }),
      Ha = io(oo.makePluginAPI),
      Wa = io(oo.makePresetAPI);

  function* so(e, t) {
    if (e.value instanceof no.default) {
      if (e.options) throw new Error("Passed options to an existing Plugin instance will not work.");
      return e.value;
    }

    return yield* Va(yield* Ha(e, t), t);
  }

  var Va = (0, Qt.makeWeakCache)(function* ({
    value: e,
    options: t,
    dirname: r,
    alias: n,
    externalDependencies: o
  }, i) {
    let s = (0, Da.validatePluginObject)(e),
        a = Object.assign({}, s);

    if (a.visitor && (a.visitor = Jt().default.explode(Object.assign({}, a.visitor))), a.inherits) {
      let u = {
        name: void 0,
        alias: `${n}$inherits`,
        value: a.inherits,
        options: t,
        dirname: r
      },
          l = yield* (0, Yt.forwardAsync)(so, p => i.invalidate(m => p(u, m)));
      a.pre = zt(l.pre, a.pre), a.post = zt(l.post, a.post), a.manipulateOptions = zt(l.manipulateOptions, a.manipulateOptions), a.visitor = Jt().default.visitors.merge([l.visitor || {}, a.visitor || {}]), l.externalDependencies.length > 0 && (o.length === 0 ? o = l.externalDependencies : o = (0, Xt.finalize)([o, l.externalDependencies]));
    }

    return new no.default(a, t, n, o);
  }),
      Gt = e => e && typeof e != "function",
      to = (e, t) => {
    if (Gt(e.test) || Gt(e.include) || Gt(e.exclude)) {
      let r = t.name ? `"${t.name}"` : "/* your preset */";
      throw new La.default([`Preset ${r} requires a filename to be set when babel is called directly,`, "```", `babel.transformSync(code, { filename: 'file.ts', presets: [${r}] });`, "```", "See https://babeljs.io/docs/en/options#filename for more information."].join(`
`));
    }
  },
      Ga = (e, t, r) => {
    if (!t.filename) {
      let {
        options: n
      } = e;
      to(n, r), n.overrides && n.overrides.forEach(o => to(o, r));
    }
  };

  function* za(e, t) {
    let r = Ya(yield* Wa(e, t));
    return Ga(r, t, e), {
      chain: yield* (0, Ra.buildPresetChain)(r, t),
      externalDependencies: r.externalDependencies
    };
  }

  var Ya = (0, Qt.makeWeakCacheSync)(({
    value: e,
    dirname: t,
    alias: r,
    externalDependencies: n
  }) => ({
    options: (0, Kt.validate)("preset", e),
    alias: r,
    dirname: t,
    externalDependencies: n
  }));

  function zt(e, t) {
    let r = [e, t].filter(Boolean);
    return r.length <= 1 ? r[0] : function (...n) {
      for (let o of r) o.apply(this, n);
    };
  }
});
var ye = d(P => {
  "use strict";

  Object.defineProperty(P, "__esModule", {
    value: !0
  });
  P.createConfigItem = ou;
  P.createConfigItemSync = P.createConfigItemAsync = void 0;
  Object.defineProperty(P, "default", {
    enumerable: !0,
    get: function () {
      return uo.default;
    }
  });
  P.loadPartialConfigSync = P.loadPartialConfigAsync = P.loadPartialConfig = P.loadOptionsSync = P.loadOptionsAsync = P.loadOptions = void 0;

  function Zt() {
    let e = __gensync$;
    return Zt = function () {
      return e;
    }, e;
  }

  var uo = ao(),
      er = Vt(),
      Ja = ae(),
      tr = Zt()(function* (e) {
    var t;
    let r = yield* (0, uo.default)(e);
    return (t = r?.options) != null ? t : null;
  }),
      he = Zt()(Ja.createConfigItem),
      lo = e => (t, r) => {
    let n, o;
    return r === void 0 && typeof t == "function" ? (o = t, n = void 0) : (o = r, n = t), o ? e.errback(n, o) : e.sync(n);
  },
      Ka = lo(er.loadPartialConfig);

  P.loadPartialConfig = Ka;
  var Xa = er.loadPartialConfig.sync;
  P.loadPartialConfigSync = Xa;
  var Qa = er.loadPartialConfig.async;
  P.loadPartialConfigAsync = Qa;
  var Za = lo(tr);
  P.loadOptions = Za;
  var eu = tr.sync;
  P.loadOptionsSync = eu;
  var tu = tr.async;
  P.loadOptionsAsync = tu;
  var ru = he.sync;
  P.createConfigItemSync = ru;
  var nu = he.async;
  P.createConfigItemAsync = nu;

  function ou(e, t, r) {
    return r !== void 0 ? he.errback(e, t, r) : typeof t == "function" ? he.errback(e, void 0, r) : he.sync(e, t);
  }
});
var co = d(Ze => {
  "use strict";

  Object.defineProperty(Ze, "__esModule", {
    value: !0
  });
  Ze.default = void 0;
  var Qe = class {
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
  Ze.default = Qe;

  Qe.prototype.getModuleName = function () {
    return this.file.getModuleName();
  };
});
var go = d(nr => {
  "use strict";

  Object.defineProperty(nr, "__esModule", {
    value: !0
  });
  nr.default = su;

  function po() {
    let e = ___babel_traverse$;
    return po = function () {
      return e;
    }, e;
  }

  var iu = Me(),
      rr;

  function su() {
    return rr || (rr = new iu.default(Object.assign({}, fo, {
      visitor: po().default.explode(fo.visitor)
    }), {})), rr;
  }

  function bo(e) {
    let t = e?._blockHoist;
    return t == null ? 1 : t === !0 ? 2 : t;
  }

  function au(e) {
    let t = Object.create(null);

    for (let o = 0; o < e.length; o++) {
      let i = e[o],
          s = bo(i);
      (t[s] || (t[s] = [])).push(i);
    }

    let r = Object.keys(t).map(o => +o).sort((o, i) => i - o),
        n = 0;

    for (let o of r) {
      let i = t[o];

      for (let s of i) e[n++] = s;
    }

    return e;
  }

  var fo = {
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
            let i = t[o],
                s = bo(i);

            if (s > r) {
              n = !0;
              break;
            }

            r = s;
          }

          !n || (e.body = au(t.slice()));
        }

      }
    }
  };
});
var ir = d(or => {
  "use strict";

  Object.defineProperty(or, "__esModule", {
    value: !0
  });
  or.default = uu;

  function et() {
    let e = __path$;
    return et = function () {
      return e;
    }, e;
  }

  function uu(e) {
    let {
      filename: t,
      cwd: r,
      filenameRelative: n = typeof t == "string" ? et().relative(r, t) : "unknown",
      sourceType: o = "module",
      inputSourceMap: i,
      sourceMaps: s = !!i,
      sourceRoot: a = e.options.moduleRoot,
      sourceFileName: u = et().basename(n),
      comments: l = !0,
      compact: p = "auto"
    } = e.options,
        m = e.options,
        v = Object.assign({}, m, {
      parserOpts: Object.assign({
        sourceType: et().extname(n) === ".mjs" ? "module" : o,
        sourceFileName: t,
        plugins: []
      }, m.parserOpts),
      generatorOpts: Object.assign({
        filename: t,
        auxiliaryCommentBefore: m.auxiliaryCommentBefore,
        auxiliaryCommentAfter: m.auxiliaryCommentAfter,
        retainLines: m.retainLines,
        comments: l,
        shouldPrintComment: m.shouldPrintComment,
        compact: p,
        minified: m.minified,
        sourceMaps: s,
        sourceRoot: a,
        sourceFileName: u
      }, m.generatorOpts)
    });

    for (let h of e.passes) for (let y of h) y.manipulateOptions && y.manipulateOptions(v, v.parserOpts);

    return v;
  }
});
var ho = d(ar => {
  "use strict";

  Object.defineProperty(ar, "__esModule", {
    value: !0
  });
  ar.default = lu;
  var sr = {
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
  sr.privateIn.syntax = sr.privateIn.transform;

  var mo = ({
    name: e,
    url: t
  }) => `${e} (${t})`;

  function lu(e, t, r) {
    let n = `Support for the experimental syntax '${e}' isn't currently enabled (${t.line}:${t.column + 1}):

` + r,
        o = sr[e];

    if (o) {
      let {
        syntax: i,
        transform: s
      } = o;

      if (i) {
        let a = mo(i);

        if (s) {
          let u = mo(s),
              l = s.name.startsWith("@babel/plugin") ? "plugins" : "presets";
          n += `

Add ${u} to the '${l}' section of your Babel config to enable transformation.
If you want to leave it as-is, add ${a} to the 'plugins' section to enable parsing.`;
        } else n += `

Add ${a} to the 'plugins' section of your Babel config to enable parsing.`;
      }
    }

    return n;
  }
});
var cr = d(lr => {
  "use strict";

  Object.defineProperty(lr, "__esModule", {
    value: !0
  });
  lr.default = fu;

  function ur() {
    let e = ___babel_parser$;
    return ur = function () {
      return e;
    }, e;
  }

  function yo() {
    let e = ___babel_code_frame$;
    return yo = function () {
      return e;
    }, e;
  }

  var cu = ho();

  function* fu(e, {
    parserOpts: t,
    highlightCode: r = !0,
    filename: n = "unknown"
  }, o) {
    try {
      let i = [];

      for (let s of e) for (let a of s) {
        let {
          parserOverride: u
        } = a;

        if (u) {
          let l = u(o, t, ur().parse);
          l !== void 0 && i.push(l);
        }
      }

      if (i.length === 0) return (0, ur().parse)(o, t);

      if (i.length === 1) {
        if (yield* [], typeof i[0].then == "function") throw new Error("You appear to be using an async parser plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");
        return i[0];
      }

      throw new Error("More than one plugin attempted to override parsing.");
    } catch (i) {
      i.code === "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED" && (i.message += `
Consider renaming the file to '.mjs', or setting sourceType:module or sourceType:unambiguous in your Babel config for this file.`);
      let {
        loc: s,
        missingPlugin: a
      } = i;

      if (s) {
        let u = (0, yo().codeFrameColumns)(o, {
          start: {
            line: s.line,
            column: s.column + 1
          }
        }, {
          highlightCode: r
        });
        a ? i.message = `${n}: ` + (0, cu.default)(a[0], s, u) : i.message = `${n}: ${i.message}

` + u, i.code = "BABEL_PARSE_ERROR";
      }

      throw i;
    }
  }
});
var vo = d(pr => {
  "use strict";

  Object.defineProperty(pr, "__esModule", {
    value: !0
  });
  pr.default = pu;

  function fr(e, t) {
    if (e !== null) {
      if (t.has(e)) return t.get(e);
      let r;

      if (Array.isArray(e)) {
        r = new Array(e.length);

        for (let n = 0; n < e.length; n++) r[n] = typeof e[n] != "object" ? e[n] : fr(e[n], t);
      } else {
        r = {};
        let n = Object.keys(e);

        for (let o = 0; o < n.length; o++) {
          let i = n[o];
          r[i] = typeof e[i] != "object" ? e[i] : fr(e[i], t);
        }
      }

      return t.set(e, r), r;
    }

    return e;
  }

  function pu(e) {
    return typeof e != "object" ? e : fr(e, new Map());
  }
});
var Co = d(gr => {
  "use strict";

  Object.defineProperty(gr, "__esModule", {
    value: !0
  });
  gr.default = vu;

  function Oo() {
    let e = __fs$;
    return Oo = function () {
      return e;
    }, e;
  }

  function br() {
    let e = __path$;
    return br = function () {
      return e;
    }, e;
  }

  function Po() {
    let e = __debug$;
    return Po = function () {
      return e;
    }, e;
  }

  function Eo() {
    let e = ___babel_types$;
    return Eo = function () {
      return e;
    }, e;
  }

  function rt() {
    let e = __convert_source_map$;
    return rt = function () {
      return e;
    }, e;
  }

  var du = Oe(),
      bu = cr(),
      gu = vo(),
      {
    file: mu,
    traverseFast: hu
  } = Eo(),
      tt = Po()("babel:transform:file"),
      yu = 3e6;

  function* vu(e, t, r, n) {
    if (r = `${r || ""}`, n) {
      if (n.type === "Program") n = mu(n, [], []);else if (n.type !== "File") throw new Error("AST root must be a Program or File node");
      t.cloneInputAst && (n = (0, gu.default)(n));
    } else n = yield* (0, bu.default)(e, t, r);

    let o = null;

    if (t.inputSourceMap !== !1) {
      if (typeof t.inputSourceMap == "object" && (o = rt().fromObject(t.inputSourceMap)), !o) {
        let i = _o(wu, n);

        if (i) try {
          o = rt().fromComment(i);
        } catch (s) {
          tt("discarding unknown inline input sourcemap", s);
        }
      }

      if (!o) {
        let i = _o(wo, n);

        if (typeof t.filename == "string" && i) try {
          let s = wo.exec(i),
              a = Oo().readFileSync(br().resolve(br().dirname(t.filename), s[1]));
          a.length > yu ? tt("skip merging input map > 1 MB") : o = rt().fromJSON(a);
        } catch (s) {
          tt("discarding unknown file input sourcemap", s);
        } else i && tt("discarding un-loadable file input sourcemap");
      }
    }

    return new du.default(t, {
      code: r,
      ast: n,
      inputMap: o
    });
  }

  var wu = /^[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/,
      wo = /^[@#][ \t]+sourceMappingURL=([^\s'"`]+)[ \t]*$/;

  function dr(e, t, r) {
    return t && (t = t.filter(({
      value: n
    }) => e.test(n) ? (r = n, !1) : !0)), [t, r];
  }

  function _o(e, t) {
    let r = null;
    return hu(t, n => {
      [n.leadingComments, r] = dr(e, n.leadingComments, r), [n.innerComments, r] = dr(e, n.innerComments, r), [n.trailingComments, r] = dr(e, n.trailingComments, r);
    }), r;
  }
});
var Ao = d(mr => {
  "use strict";

  Object.defineProperty(mr, "__esModule", {
    value: !0
  });
  mr.default = _u;

  function ko() {
    let e = ___ampproject_remapping$;
    return ko = function () {
      return e;
    }, e;
  }

  function _u(e, t, r) {
    let n = r.replace(/\\/g, "/"),
        o = !1,
        i = ko()(So(t), (s, a) => s === n && !o ? (o = !0, a.source = "", So(e)) : null);
    return typeof e.sourceRoot == "string" && (i.sourceRoot = e.sourceRoot), Object.assign({}, i);
  }

  function So(e) {
    return Object.assign({}, e, {
      sourceRoot: null
    });
  }
});
var jo = d(yr => {
  "use strict";

  Object.defineProperty(yr, "__esModule", {
    value: !0
  });
  yr.default = Pu;

  function xo() {
    let e = __convert_source_map$;
    return xo = function () {
      return e;
    }, e;
  }

  function hr() {
    let e = ___babel_generator$;
    return hr = function () {
      return e;
    }, e;
  }

  var Ou = Ao();

  function Pu(e, t) {
    let {
      opts: r,
      ast: n,
      code: o,
      inputMap: i
    } = t,
        {
      generatorOpts: s
    } = r,
        a = [];

    for (let m of e) for (let v of m) {
      let {
        generatorOverride: h
      } = v;

      if (h) {
        let y = h(n, s, o, hr().default);
        y !== void 0 && a.push(y);
      }
    }

    let u;
    if (a.length === 0) u = (0, hr().default)(n, s, o);else if (a.length === 1) {
      if (u = a[0], typeof u.then == "function") throw new Error("You appear to be using an async codegen plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");
    } else throw new Error("More than one plugin attempted to override codegen.");
    let {
      code: l,
      decodedMap: p = u.map
    } = u;
    return p && (i ? p = (0, Ou.default)(i.toObject(), p, s.sourceFileName) : p = u.map), (r.sourceMaps === "inline" || r.sourceMaps === "both") && (l += `
` + xo().fromObject(p).toComment()), r.sourceMaps === "inline" && (p = null), {
      outputCode: l,
      outputMap: p
    };
  }
});

var _r = d(wr => {
  "use strict";

  Object.defineProperty(wr, "__esModule", {
    value: !0
  });
  wr.run = ju;

  function vr() {
    let e = ___babel_traverse$;
    return vr = function () {
      return e;
    }, e;
  }

  var Eu = co(),
      Cu = go(),
      Su = ir(),
      ku = Co(),
      Au = jo(),
      xu = je();

  function* ju(e, t, r) {
    let n = yield* (0, ku.default)(e.passes, (0, Su.default)(e), t, r),
        o = n.opts;

    try {
      yield* Fu(n, e.passes);
    } catch (l) {
      var i;
      throw l.message = `${(i = o.filename) != null ? i : "unknown file"}: ${l.message}`, l.code || (l.code = "BABEL_TRANSFORM_ERROR"), l;
    }

    let s, a;

    try {
      o.code !== !1 && ({
        outputCode: s,
        outputMap: a
      } = (0, Au.default)(e.passes, n));
    } catch (l) {
      var u;
      throw l.message = `${(u = o.filename) != null ? u : "unknown file"}: ${l.message}`, l.code || (l.code = "BABEL_GENERATE_ERROR"), l;
    }

    return {
      metadata: n.metadata,
      options: o,
      ast: o.ast === !0 ? n.ast : null,
      code: s === void 0 ? null : s,
      map: a === void 0 ? null : a,
      sourceType: n.ast.program.sourceType,
      externalDependencies: (0, xu.flattenToSet)(e.externalDependencies)
    };
  }

  function* Fu(e, t) {
    for (let r of t) {
      let n = [],
          o = [],
          i = [];

      for (let a of r.concat([(0, Cu.default)()])) {
        let u = new Eu.default(e, a.key, a.options);
        n.push([a, u]), o.push(u), i.push(a.visitor);
      }

      for (let [a, u] of n) {
        let l = a.pre;

        if (l) {
          let p = l.call(u, e);
          if (yield* [], Fo(p)) throw new Error("You appear to be using an plugin with an async .pre, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");
        }
      }

      let s = vr().default.visitors.merge(i, o, e.opts.wrapPluginVisitorMethod);
      (0, vr().default)(e.ast, s, e.scope);

      for (let [a, u] of n) {
        let l = a.post;

        if (l) {
          let p = l.call(u, e);
          if (yield* [], Fo(p)) throw new Error("You appear to be using an plugin with an async .post, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");
        }
      }
    }
  }

  function Fo(e) {
    return !!e && (typeof e == "object" || typeof e == "function") && !!e.then && typeof e.then == "function";
  }
});

var No = d(X => {
  "use strict";

  Object.defineProperty(X, "__esModule", {
    value: !0
  });
  X.transform = void 0;
  X.transformAsync = Iu;
  X.transformSync = Tu;

  function Mo() {
    let e = __gensync$;
    return Mo = function () {
      return e;
    }, e;
  }

  var Mu = ye(),
      Nu = _r(),
      nt = G(),
      ot = Mo()(function* (t, r) {
    let n = yield* (0, Mu.default)(r);
    return n === null ? null : yield* (0, Nu.run)(n, t);
  }),
      $u = function (t, r, n) {
    let o, i;
    if (typeof r == "function" ? (i = r, o = void 0) : (o = r, i = n), i === void 0) return (0, nt.beginHiddenCallStack)(ot.sync)(t, o);
    (0, nt.beginHiddenCallStack)(ot.errback)(t, o, i);
  };

  X.transform = $u;

  function Tu(...e) {
    return (0, nt.beginHiddenCallStack)(ot.sync)(...e);
  }

  function Iu(...e) {
    return (0, nt.beginHiddenCallStack)(ot.async)(...e);
  }
});
var $o = d(Q => {
  "use strict";

  Object.defineProperty(Q, "__esModule", {
    value: !0
  });
  Q.transformFile = void 0;
  Q.transformFileAsync = Du;
  Q.transformFileSync = Ru;

  var qu = function (t, r, n) {
    typeof r == "function" && (n = r), n(new Error("Transforming files is not supported in browsers"), null);
  };

  Q.transformFile = qu;

  function Ru() {
    throw new Error("Transforming files is not supported in browsers");
  }

  function Du() {
    return Promise.reject(new Error("Transforming files is not supported in browsers"));
  }
});
var Io = d(Z => {
  "use strict";

  Object.defineProperty(Z, "__esModule", {
    value: !0
  });
  Z.transformFromAst = void 0;
  Z.transformFromAstAsync = Wu;
  Z.transformFromAstSync = Hu;

  function To() {
    let e = __gensync$;
    return To = function () {
      return e;
    }, e;
  }

  var Bu = ye(),
      Lu = _r(),
      it = G(),
      st = To()(function* (e, t, r) {
    let n = yield* (0, Bu.default)(r);
    if (n === null) return null;
    if (!e) throw new Error("No AST given");
    return yield* (0, Lu.run)(n, t, e);
  }),
      Uu = function (t, r, n, o) {
    let i, s;
    if (typeof n == "function" ? (s = n, i = void 0) : (i = n, s = o), s === void 0) return (0, it.beginHiddenCallStack)(st.sync)(t, r, i);
    (0, it.beginHiddenCallStack)(st.errback)(t, r, i, s);
  };

  Z.transformFromAst = Uu;

  function Hu(...e) {
    return (0, it.beginHiddenCallStack)(st.sync)(...e);
  }

  function Wu(...e) {
    return (0, it.beginHiddenCallStack)(st.async)(...e);
  }
});
var Ro = d(ee => {
  "use strict";

  Object.defineProperty(ee, "__esModule", {
    value: !0
  });
  ee.parse = void 0;
  ee.parseAsync = Ku;
  ee.parseSync = Ju;

  function qo() {
    let e = __gensync$;
    return qo = function () {
      return e;
    }, e;
  }

  var Vu = ye(),
      Gu = cr(),
      zu = ir(),
      at = G(),
      ut = qo()(function* (t, r) {
    let n = yield* (0, Vu.default)(r);
    return n === null ? null : yield* (0, Gu.default)(n.passes, (0, zu.default)(n), t);
  }),
      Yu = function (t, r, n) {
    if (typeof r == "function" && (n = r, r = void 0), n === void 0) return (0, at.beginHiddenCallStack)(ut.sync)(t, r);
    (0, at.beginHiddenCallStack)(ut.errback)(t, r, n);
  };

  ee.parse = Yu;

  function Ju(...e) {
    return (0, at.beginHiddenCallStack)(ut.sync)(...e);
  }

  function Ku(...e) {
    return (0, at.beginHiddenCallStack)(ut.async)(...e);
  }
});
var ze = d(b => {
  "use strict";

  Object.defineProperty(b, "__esModule", {
    value: !0
  });
  b.DEFAULT_EXTENSIONS = void 0;
  Object.defineProperty(b, "File", {
    enumerable: !0,
    get: function () {
      return Xu.default;
    }
  });
  b.OptionManager = void 0;
  b.Plugin = rl;
  Object.defineProperty(b, "buildExternalHelpers", {
    enumerable: !0,
    get: function () {
      return Qu.default;
    }
  });
  Object.defineProperty(b, "createConfigItem", {
    enumerable: !0,
    get: function () {
      return q.createConfigItem;
    }
  });
  Object.defineProperty(b, "createConfigItemAsync", {
    enumerable: !0,
    get: function () {
      return q.createConfigItemAsync;
    }
  });
  Object.defineProperty(b, "createConfigItemSync", {
    enumerable: !0,
    get: function () {
      return q.createConfigItemSync;
    }
  });
  Object.defineProperty(b, "getEnv", {
    enumerable: !0,
    get: function () {
      return Zu.getEnv;
    }
  });
  Object.defineProperty(b, "loadOptions", {
    enumerable: !0,
    get: function () {
      return q.loadOptions;
    }
  });
  Object.defineProperty(b, "loadOptionsAsync", {
    enumerable: !0,
    get: function () {
      return q.loadOptionsAsync;
    }
  });
  Object.defineProperty(b, "loadOptionsSync", {
    enumerable: !0,
    get: function () {
      return q.loadOptionsSync;
    }
  });
  Object.defineProperty(b, "loadPartialConfig", {
    enumerable: !0,
    get: function () {
      return q.loadPartialConfig;
    }
  });
  Object.defineProperty(b, "loadPartialConfigAsync", {
    enumerable: !0,
    get: function () {
      return q.loadPartialConfigAsync;
    }
  });
  Object.defineProperty(b, "loadPartialConfigSync", {
    enumerable: !0,
    get: function () {
      return q.loadPartialConfigSync;
    }
  });
  Object.defineProperty(b, "parse", {
    enumerable: !0,
    get: function () {
      return Sr.parse;
    }
  });
  Object.defineProperty(b, "parseAsync", {
    enumerable: !0,
    get: function () {
      return Sr.parseAsync;
    }
  });
  Object.defineProperty(b, "parseSync", {
    enumerable: !0,
    get: function () {
      return Sr.parseSync;
    }
  });
  Object.defineProperty(b, "resolvePlugin", {
    enumerable: !0,
    get: function () {
      return Do.resolvePlugin;
    }
  });
  Object.defineProperty(b, "resolvePreset", {
    enumerable: !0,
    get: function () {
      return Do.resolvePreset;
    }
  });
  Object.defineProperty(b, "template", {
    enumerable: !0,
    get: function () {
      return Ho().default;
    }
  });
  Object.defineProperty(b, "tokTypes", {
    enumerable: !0,
    get: function () {
      return Lo().tokTypes;
    }
  });
  Object.defineProperty(b, "transform", {
    enumerable: !0,
    get: function () {
      return Pr.transform;
    }
  });
  Object.defineProperty(b, "transformAsync", {
    enumerable: !0,
    get: function () {
      return Pr.transformAsync;
    }
  });
  Object.defineProperty(b, "transformFile", {
    enumerable: !0,
    get: function () {
      return Er.transformFile;
    }
  });
  Object.defineProperty(b, "transformFileAsync", {
    enumerable: !0,
    get: function () {
      return Er.transformFileAsync;
    }
  });
  Object.defineProperty(b, "transformFileSync", {
    enumerable: !0,
    get: function () {
      return Er.transformFileSync;
    }
  });
  Object.defineProperty(b, "transformFromAst", {
    enumerable: !0,
    get: function () {
      return Cr.transformFromAst;
    }
  });
  Object.defineProperty(b, "transformFromAstAsync", {
    enumerable: !0,
    get: function () {
      return Cr.transformFromAstAsync;
    }
  });
  Object.defineProperty(b, "transformFromAstSync", {
    enumerable: !0,
    get: function () {
      return Cr.transformFromAstSync;
    }
  });
  Object.defineProperty(b, "transformSync", {
    enumerable: !0,
    get: function () {
      return Pr.transformSync;
    }
  });
  Object.defineProperty(b, "traverse", {
    enumerable: !0,
    get: function () {
      return Uo().default;
    }
  });
  b.version = b.types = void 0;
  var Xu = Oe(),
      Qu = qr(),
      Do = ne(),
      Zu = mt();

  function Bo() {
    let e = ___babel_types$;
    return Bo = function () {
      return e;
    }, e;
  }

  Object.defineProperty(b, "types", {
    enumerable: !0,
    get: function () {
      return Bo();
    }
  });

  function Lo() {
    let e = ___babel_parser$;
    return Lo = function () {
      return e;
    }, e;
  }

  function Uo() {
    let e = ___babel_traverse$;
    return Uo = function () {
      return e;
    }, e;
  }

  function Ho() {
    let e = ___babel_template$;
    return Ho = function () {
      return e;
    }, e;
  }

  var q = ye(),
      Pr = No(),
      Er = $o(),
      Cr = Io(),
      Sr = Ro(),
      el = "7.19.3";
  b.version = el;
  var tl = Object.freeze([".js", ".jsx", ".es6", ".es", ".mjs", ".cjs"]);
  b.DEFAULT_EXTENSIONS = tl;
  var Or = class {
    init(t) {
      return (0, q.loadOptionsSync)(t);
    }

  };
  b.OptionManager = Or;

  function rl(e) {
    throw new Error(`The (${e}) Babel 5 plugin is being run with an unsupported Babel version.`);
  }
});
var Vo = Zo(ze()),
    Gl = !0,
    {
  DEFAULT_EXTENSIONS: zl,
  File: Yl,
  OptionManager: Jl,
  Plugin: Kl,
  buildExternalHelpers: Xl,
  createConfigItem: Ql,
  createConfigItemAsync: Zl,
  createConfigItemSync: ec,
  getEnv: tc,
  loadOptions: rc,
  loadOptionsAsync: nc,
  loadOptionsSync: oc,
  loadPartialConfig: ic,
  loadPartialConfigAsync: sc,
  loadPartialConfigSync: ac,
  parse: uc,
  parseAsync: lc,
  parseSync: cc,
  resolvePlugin: fc,
  resolvePreset: pc,
  transform: dc,
  transformAsync: bc,
  transformFile: gc,
  transformFileAsync: mc,
  transformFileSync: hc,
  transformFromAst: yc,
  transformFromAstAsync: vc,
  transformFromAstSync: wc,
  transformSync: _c,
  version: Oc,
  types: Pc
} = Vo,
    {
  default: Wo,
  ...nl
} = Vo,
    Ec = Wo !== void 0 ? Wo : nl;
export { zl as DEFAULT_EXTENSIONS, Yl as File, Jl as OptionManager, Kl as Plugin, Gl as __esModule, Xl as buildExternalHelpers, Ql as createConfigItem, Zl as createConfigItemAsync, ec as createConfigItemSync, Ec as default, tc as getEnv, rc as loadOptions, nc as loadOptionsAsync, oc as loadOptionsSync, ic as loadPartialConfig, sc as loadPartialConfigAsync, ac as loadPartialConfigSync, uc as parse, lc as parseAsync, cc as parseSync, fc as resolvePlugin, pc as resolvePreset, dc as transform, bc as transformAsync, gc as transformFile, mc as transformFileAsync, hc as transformFileSync, yc as transformFromAst, vc as transformFromAstAsync, wc as transformFromAstSync, _c as transformSync, Pc as types, Oc as version };