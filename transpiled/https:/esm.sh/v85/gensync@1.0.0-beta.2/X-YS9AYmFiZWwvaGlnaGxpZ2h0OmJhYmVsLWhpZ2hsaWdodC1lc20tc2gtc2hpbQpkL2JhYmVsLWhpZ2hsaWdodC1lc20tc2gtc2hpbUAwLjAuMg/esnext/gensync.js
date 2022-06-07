/* esm.sh - esbuild bundle(gensync@1.0.0-beta.2) esnext production */
var G = Object.create;
var y = Object.defineProperty;
var R = Object.getOwnPropertyDescriptor;
var T = Object.getOwnPropertyNames;
var Y = Object.getPrototypeOf,
    D = Object.prototype.hasOwnProperty;

var s = (t, e) => y(t, "name", {
  value: e,
  configurable: !0
});

var $ = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);

var x = (t, e, n, r) => {
  if (e && typeof e == "object" || typeof e == "function") for (let o of T(e)) !D.call(t, o) && o !== n && y(t, o, {
    get: () => e[o],
    enumerable: !(r = R(e, o)) || r.enumerable
  });
  return t;
};

var N = (t, e, n) => (n = t != null ? G(Y(t)) : {}, x(e || !t || !t.__esModule ? y(n, "default", {
  value: t,
  enumerable: !0
}) : n, t));

var E = $((q, P) => {
  "use strict";

  var d = Symbol.for("gensync:v1:start"),
      b = Symbol.for("gensync:v1:suspend"),
      j = "GENSYNC_EXPECTED_START",
      I = "GENSYNC_EXPECTED_SUSPEND",
      g = "GENSYNC_OPTIONS_ERROR",
      S = "GENSYNC_RACE_NONEMPTY",
      M = "GENSYNC_ERRBACK_NO_CALLBACK";
  P.exports = Object.assign(s(function (e) {
    let n = e;
    return typeof e != "function" ? n = K(e) : n = L(e), Object.assign(n, B(n));
  }, "gensync"), {
    all: h({
      name: "all",
      arity: 1,
      sync: function (t) {
        return Array.from(t[0]).map(n => m(n));
      },
      async: function (t, e, n) {
        let r = Array.from(t[0]);

        if (r.length === 0) {
          Promise.resolve().then(() => e([]));
          return;
        }

        let o = 0,
            i = r.map(() => {});
        r.forEach((c, u) => {
          p(c, l => {
            i[u] = l, o += 1, o === i.length && e(i);
          }, n);
        });
      }
    }),
    race: h({
      name: "race",
      arity: 1,
      sync: function (t) {
        let e = Array.from(t[0]);
        if (e.length === 0) throw f("Must race at least 1 item", S);
        return m(e[0]);
      },
      async: function (t, e, n) {
        let r = Array.from(t[0]);
        if (r.length === 0) throw f("Must race at least 1 item", S);

        for (let o of r) p(o, e, n);
      }
    })
  });

  function B(t) {
    return {
      sync: function (...n) {
        return m(t.apply(this, n));
      },
      async: function (...n) {
        return new Promise((r, o) => {
          p(t.apply(this, n), r, o);
        });
      },
      errback: function (...n) {
        let r = n.pop();
        if (typeof r != "function") throw f("Asynchronous function called without callback", M);
        let o;

        try {
          o = t.apply(this, n);
        } catch (i) {
          r(i);
          return;
        }

        p(o, i => r(void 0, i), i => r(i));
      }
    };
  }

  s(B, "makeFunctionAPI");

  function a(t, e, n, r) {
    if (typeof n === t || r && typeof n > "u") return;
    let o;
    throw r ? o = `Expected opts.${e} to be either a ${t}, or undefined.` : o = `Expected opts.${e} to be a ${t}.`, f(o, g);
  }

  s(a, "assertTypeof");

  function f(t, e) {
    return Object.assign(new Error(t), {
      code: e
    });
  }

  s(f, "makeError");

  function K({
    name: t,
    arity: e,
    sync: n,
    async: r,
    errback: o
  }) {
    if (a("string", "name", t, !0), a("number", "arity", e, !0), a("function", "sync", n), a("function", "async", r, !0), a("function", "errback", o, !0), r && o) throw f("Expected one of either opts.async or opts.errback, but got _both_.", g);

    if (typeof t != "string") {
      let i;
      o && o.name && o.name !== "errback" && (i = o.name), r && r.name && r.name !== "async" && (i = r.name.replace(/Async$/, "")), n && n.name && n.name !== "sync" && (i = n.name.replace(/Sync$/, "")), typeof i == "string" && (t = i);
    }

    return typeof e != "number" && (e = n.length), h({
      name: t,
      arity: e,
      sync: function (i) {
        return n.apply(this, i);
      },
      async: function (i, c, u) {
        r ? r.apply(this, i).then(c, u) : o ? o.call(this, ...i, (l, A) => {
          l == null ? c(A) : u(l);
        }) : c(n.apply(this, i));
      }
    });
  }

  s(K, "newGenerator");

  function L(t) {
    return O(t.name, t.length, function (...e) {
      return t.apply(this, e);
    });
  }

  s(L, "wrapGenerator");

  function h({
    name: t,
    arity: e,
    sync: n,
    async: r
  }) {
    return O(t, e, function* (...o) {
      let i = yield d;
      if (!i) return n.call(this, o);
      let c;

      try {
        r.call(this, o, u => {
          c || (c = {
            value: u
          }, i());
        }, u => {
          c || (c = {
            err: u
          }, i());
        });
      } catch (u) {
        c = {
          err: u
        }, i();
      }

      if (yield b, c.hasOwnProperty("err")) throw c.err;
      return c.value;
    });
  }

  s(h, "buildOperation");

  function m(t) {
    let e;

    for (; !({
      value: e
    } = t.next()).done;) _(e, t);

    return e;
  }

  s(m, "evaluateSync");

  function p(t, e, n) {
    s(function r() {
      try {
        let o;

        for (; !({
          value: o
        } = t.next()).done;) {
          _(o, t);

          let i = !0,
              c = !1,
              u = t.next(() => {
            i ? c = !0 : r();
          });
          if (i = !1, U(u, t), !c) return;
        }

        return e(o);
      } catch (o) {
        return n(o);
      }
    }, "step")();
  }

  s(p, "evaluateAsync");

  function _(t, e) {
    t !== d && C(e, f(`Got unexpected yielded value in gensync generator: ${JSON.stringify(t)}. Did you perhaps mean to use 'yield*' instead of 'yield'?`, j));
  }

  s(_, "assertStart");

  function U({
    value: t,
    done: e
  }, n) {
    !e && t === b || C(n, f(e ? "Unexpected generator completion. If you get this, it is probably a gensync bug." : `Expected GENSYNC_SUSPEND, got ${JSON.stringify(t)}. If you get this, it is probably a gensync bug.`, I));
  }

  s(U, "assertSuspend");

  function C(t, e) {
    throw t.throw && t.throw(e), e;
  }

  s(C, "throwError");

  function O(t, e, n) {
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

  s(O, "setFunctionMetadata");
});
var w = N(E()),
    X = N(E()),
    {
  default: v,
  ...J
} = X,
    z = w.default ?? v ?? J;
export { z as default };