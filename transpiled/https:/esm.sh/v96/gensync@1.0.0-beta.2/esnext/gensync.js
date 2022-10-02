/* esm.sh - esbuild bundle(gensync@1.0.0-beta.2) esnext production */
var w = Object.create;
var h = Object.defineProperty;
var A = Object.getOwnPropertyDescriptor;
var G = Object.getOwnPropertyNames;
var R = Object.getPrototypeOf,
    T = Object.prototype.hasOwnProperty;

var Y = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);

var D = (t, e, n, r) => {
  if (e && typeof e == "object" || typeof e == "function") for (let o of G(e)) !T.call(t, o) && o !== n && h(t, o, {
    get: () => e[o],
    enumerable: !(r = A(e, o)) || r.enumerable
  });
  return t;
};

var x = (t, e, n) => (n = t != null ? w(R(t)) : {}, D(e || !t || !t.__esModule ? h(n, "default", {
  value: t,
  enumerable: !0
}) : n, t));

var C = Y((J, g) => {
  "use strict";

  var m = Symbol.for("gensync:v1:start"),
      N = Symbol.for("gensync:v1:suspend"),
      j = "GENSYNC_EXPECTED_START",
      $ = "GENSYNC_EXPECTED_SUSPEND",
      d = "GENSYNC_OPTIONS_ERROR",
      E = "GENSYNC_RACE_NONEMPTY",
      I = "GENSYNC_ERRBACK_NO_CALLBACK";
  g.exports = Object.assign(function (e) {
    let n = e;
    return typeof e != "function" ? n = B(e) : n = K(e), Object.assign(n, M(n));
  }, {
    all: p({
      name: "all",
      arity: 1,
      sync: function (t) {
        return Array.from(t[0]).map(n => y(n));
      },
      async: function (t, e, n) {
        let r = Array.from(t[0]);

        if (r.length === 0) {
          Promise.resolve().then(() => e([]));
          return;
        }

        let o = 0,
            i = r.map(() => {});
        r.forEach((c, s) => {
          l(c, a => {
            i[s] = a, o += 1, o === i.length && e(i);
          }, n);
        });
      }
    }),
    race: p({
      name: "race",
      arity: 1,
      sync: function (t) {
        let e = Array.from(t[0]);
        if (e.length === 0) throw u("Must race at least 1 item", E);
        return y(e[0]);
      },
      async: function (t, e, n) {
        let r = Array.from(t[0]);
        if (r.length === 0) throw u("Must race at least 1 item", E);

        for (let o of r) l(o, e, n);
      }
    })
  });

  function M(t) {
    return {
      sync: function (...n) {
        return y(t.apply(this, n));
      },
      async: function (...n) {
        return new Promise((r, o) => {
          l(t.apply(this, n), r, o);
        });
      },
      errback: function (...n) {
        let r = n.pop();
        if (typeof r != "function") throw u("Asynchronous function called without callback", I);
        let o;

        try {
          o = t.apply(this, n);
        } catch (i) {
          r(i);
          return;
        }

        l(o, i => r(void 0, i), i => r(i));
      }
    };
  }

  function f(t, e, n, r) {
    if (typeof n === t || r && typeof n > "u") return;
    let o;
    throw r ? o = `Expected opts.${e} to be either a ${t}, or undefined.` : o = `Expected opts.${e} to be a ${t}.`, u(o, d);
  }

  function u(t, e) {
    return Object.assign(new Error(t), {
      code: e
    });
  }

  function B({
    name: t,
    arity: e,
    sync: n,
    async: r,
    errback: o
  }) {
    if (f("string", "name", t, !0), f("number", "arity", e, !0), f("function", "sync", n), f("function", "async", r, !0), f("function", "errback", o, !0), r && o) throw u("Expected one of either opts.async or opts.errback, but got _both_.", d);

    if (typeof t != "string") {
      let i;
      o && o.name && o.name !== "errback" && (i = o.name), r && r.name && r.name !== "async" && (i = r.name.replace(/Async$/, "")), n && n.name && n.name !== "sync" && (i = n.name.replace(/Sync$/, "")), typeof i == "string" && (t = i);
    }

    return typeof e != "number" && (e = n.length), p({
      name: t,
      arity: e,
      sync: function (i) {
        return n.apply(this, i);
      },
      async: function (i, c, s) {
        r ? r.apply(this, i).then(c, s) : o ? o.call(this, ...i, (a, P) => {
          a == null ? c(P) : s(a);
        }) : c(n.apply(this, i));
      }
    });
  }

  function K(t) {
    return b(t.name, t.length, function (...e) {
      return t.apply(this, e);
    });
  }

  function p({
    name: t,
    arity: e,
    sync: n,
    async: r
  }) {
    return b(t, e, function* (...o) {
      let i = yield m;
      if (!i) return n.call(this, o);
      let c;

      try {
        r.call(this, o, s => {
          c || (c = {
            value: s
          }, i());
        }, s => {
          c || (c = {
            err: s
          }, i());
        });
      } catch (s) {
        c = {
          err: s
        }, i();
      }

      if (yield N, c.hasOwnProperty("err")) throw c.err;
      return c.value;
    });
  }

  function y(t) {
    let e;

    for (; !({
      value: e
    } = t.next()).done;) S(e, t);

    return e;
  }

  function l(t, e, n) {
    (function r() {
      try {
        let o;

        for (; !({
          value: o
        } = t.next()).done;) {
          S(o, t);
          let i = !0,
              c = !1,
              s = t.next(() => {
            i ? c = !0 : r();
          });
          if (i = !1, L(s, t), !c) return;
        }

        return e(o);
      } catch (o) {
        return n(o);
      }
    })();
  }

  function S(t, e) {
    t !== m && _(e, u(`Got unexpected yielded value in gensync generator: ${JSON.stringify(t)}. Did you perhaps mean to use 'yield*' instead of 'yield'?`, j));
  }

  function L({
    value: t,
    done: e
  }, n) {
    !e && t === N || _(n, u(e ? "Unexpected generator completion. If you get this, it is probably a gensync bug." : `Expected GENSYNC_SUSPEND, got ${JSON.stringify(t)}. If you get this, it is probably a gensync bug.`, $));
  }

  function _(t, e) {
    throw t.throw && t.throw(e), e;
  }

  function b(t, e, n) {
    if (typeof t == "string") {
      let r = Object.getOwnPropertyDescriptor(n, "name");
      (!r || r.configurable) && Object.defineProperty(n, "name", Object.assign(r || {}, {
        configurable: !0,
        value: t
      }));
    }

    if (typeof e == "number") {
      let r = Object.getOwnPropertyDescriptor(n, "length");
      (!r || r.configurable) && Object.defineProperty(n, "length", Object.assign(r || {}, {
        configurable: !0,
        value: e
      }));
    }

    return n;
  }
});
var U = x(C()),
    {
  default: O,
  ...X
} = U,
    k = O !== void 0 ? O : X;
export { k as default };