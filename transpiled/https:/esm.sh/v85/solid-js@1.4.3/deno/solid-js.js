/* esm.sh - esbuild bundle(solid-js@1.4.3) deno production */
var ze = Object.defineProperty;

var i = (e, t) => ze(e, "name", {
  value: t,
  configurable: !0
});

var He = 1,
    ge = !1,
    pe = !1,
    Q = [],
    L = null,
    be = null,
    We = 5,
    de = 0,
    Be = 300,
    we = null,
    ue = null,
    Ke = 1073741823;

function Ye() {
  let e = new MessageChannel(),
      t = e.port2;

  if (we = i(() => t.postMessage(null), "scheduleCallback"), e.port1.onmessage = () => {
    if (ue !== null) {
      let r = performance.now();
      de = r + We;
      let n = !0;

      try {
        ue(n, r) ? t.postMessage(null) : ue = null;
      } catch (s) {
        throw t.postMessage(null), s;
      }
    }
  }, navigator && navigator.scheduling && navigator.scheduling.isInputPending) {
    let r = navigator.scheduling;
    be = i(() => {
      let n = performance.now();
      return n >= de ? r.isInputPending() ? !0 : n >= Be : !1;
    }, "shouldYieldToHost");
  } else be = i(() => performance.now() >= de, "shouldYieldToHost");
}

i(Ye, "setupScheduler");

function Ge(e, t) {
  function r() {
    let n = 0,
        s = e.length - 1;

    for (; n <= s;) {
      let l = s + n >> 1,
          o = t.expirationTime - e[l].expirationTime;
      if (o > 0) n = l + 1;else if (o < 0) s = l - 1;else return l;
    }

    return n;
  }

  i(r, "findIndex"), e.splice(r(), 0, t);
}

i(Ge, "enqueue");

function Ee(e, t) {
  we || Ye();
  let r = performance.now(),
      n = Ke;
  t && t.timeout && (n = t.timeout);
  let s = {
    id: He++,
    fn: e,
    startTime: r,
    expirationTime: r + n
  };
  return Ge(Q, s), !ge && !pe && (ge = !0, ue = Qe, we()), s;
}

i(Ee, "requestCallback");

function pt(e) {
  e.fn = null;
}

i(pt, "cancelCallback");

function Qe(e, t) {
  ge = !1, pe = !0;

  try {
    return Xe(e, t);
  } finally {
    L = null, pe = !1;
  }
}

i(Qe, "flushWork");

function Xe(e, t) {
  let r = t;

  for (L = Q[0] || null; L !== null && !(L.expirationTime > r && (!e || be()));) {
    let n = L.fn;

    if (n !== null) {
      L.fn = null;
      let s = L.expirationTime <= r;
      n(s), r = performance.now(), L === Q[0] && Q.shift();
    } else Q.shift();

    L = Q[0] || null;
  }

  return L !== null;
}

i(Xe, "workLoop");
var b = {};

function q(e) {
  b.context = e;
}

i(q, "setHydrateContext");

function Je() {
  return { ...b.context,
    id: `${b.context.id}${b.context.count++}-`,
    count: 0
  };
}

i(Je, "nextHydrateContext");
var Te = i((e, t) => e === t, "equalFn"),
    Ze = Symbol("solid-proxy"),
    Oe = Symbol("solid-track"),
    bt = Symbol("solid-dev-component"),
    oe = {
  equals: Te
},
    N = null,
    Pe = je,
    W = {},
    F = 1,
    U = 2,
    Ae = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
},
    [_e, ve] = E(!1),
    h = null,
    u = null,
    B = null,
    H = null,
    m = null,
    ne = null,
    v = null,
    S = null,
    xe = 0;

function J(e, t) {
  let r = m,
      n = h,
      s = e.length === 0 ? Ae : {
    owned: null,
    cleanups: null,
    context: null,
    owner: t || n
  };
  h = s, m = null;

  try {
    return Y(() => e(() => le(s)), !0);
  } finally {
    m = r, h = n;
  }
}

i(J, "createRoot");

function E(e, t) {
  t = t ? Object.assign({}, oe, t) : oe;
  let r = {
    value: e,
    observers: null,
    observerSlots: null,
    pending: W,
    comparator: t.equals || void 0
  },
      n = i(s => (typeof s == "function" && (u && u.running && u.sources.has(r) ? s = s(r.pending !== W ? r.pending : r.tValue) : s = s(r.pending !== W ? r.pending : r.value)), Se(r, s)), "setter");
  return [qe.bind(r), n];
}

i(E, "createSignal");

function re(e, t, r) {
  let n = K(e, t, !0, F);
  B && u && u.running ? v.push(n) : D(n);
}

i(re, "createComputed");

function wt(e, t, r) {
  let n = K(e, t, !1, F);
  B && u && u.running ? v.push(n) : D(n);
}

i(wt, "createRenderEffect");

function et(e, t, r) {
  Pe = ot;

  let n = K(e, t, !1, F),
      s = R && _(h, R.id);

  s && (n.suspense = s), n.user = !0, S ? S.push(n) : D(n);
}

i(et, "createEffect");

function mt(e, t) {
  let r,
      n = K(() => {
    r ? r() : T(e), r = void 0;
  }, void 0, !1, 0),
      s = R && _(h, R.id);

  return s && (n.suspense = s), n.user = !0, l => {
    r = l, D(n);
  };
}

i(mt, "createReaction");

function V(e, t, r) {
  r = r ? Object.assign({}, oe, r) : oe;
  let n = K(e, t, !0, 0);
  return n.pending = W, n.observers = null, n.observerSlots = null, n.comparator = r.equals || void 0, B && u && u.running ? (n.tState = F, v.push(n)) : D(n), qe.bind(n);
}

i(V, "createMemo");

function tt(e, t, r) {
  arguments.length === 2 ? typeof t == "object" && (r = t, t = e, e = !0) : arguments.length === 1 && (t = e, e = !0), r || (r = {});
  let n = new Set(),
      [s, l] = E(r.initialValue),
      [o, c] = E(void 0, {
    equals: !1
  }),
      [f, d] = E(!1),
      [a, y] = E(),
      g,
      p = null,
      w = null,
      k = null,
      C = !1,
      O = !1,
      x = ("initialValue" in r),
      P = typeof e == "function" && V(e);
  b.context && (k = `${b.context.id}${b.context.count++}`, b.load && (w = b.load(k)));

  function I(A, M, j, G) {
    return p === A && (p = null, x = !0, w && (A === w || M === w) && r.onHydrated && queueMicrotask(() => r.onHydrated(G, {
      value: M
    })), w = null, y(g = j), u && A && C ? (u.promises.delete(A), C = !1, Y(() => {
      u.running = !0, u.promises.size || (S.push.apply(S, u.effects), u.effects = []), $(M);
    }, !1)) : $(M)), M;
  }

  i(I, "loadEnd");

  function $(A) {
    se(() => {
      l(() => A), d(!1);

      for (let M of n.keys()) M.decrement();

      n.clear();
    });
  }

  i($, "completeLoad");

  function ee() {
    let A = R && _(h, R.id),
        M = s();

    if (g) throw g;
    return m && !m.user && A && re(() => {
      o(), p && (A.resolved && u ? u.promises.add(p) : n.has(A) || (A.increment(), n.add(A)));
    }), M;
  }

  i(ee, "read");

  function ae(A = !0) {
    if (A && O) return;
    O = !1, y(g = void 0);
    let M = P ? P() : e;

    if (C = u && u.running, M == null || M === !1) {
      I(p, T(s));
      return;
    }

    u && p && u.promises.delete(p);
    let j = w || T(() => t(M, {
      value: s(),
      refetching: A
    }));
    return typeof j != "object" || !("then" in j) ? (I(p, j), j) : (p = j, O = !0, queueMicrotask(() => O = !1), se(() => {
      d(!0), c();
    }), j.then(G => I(j, G, void 0, M), G => I(j, G, G)));
  }

  return i(ae, "load"), Object.defineProperties(ee, {
    loading: {
      get() {
        return f();
      }

    },
    error: {
      get() {
        return a();
      }

    },
    latest: {
      get() {
        if (!x) return ee();
        if (g) throw g;
        return s();
      }

    }
  }), P ? re(() => ae(!1)) : ae(!1), [ee, {
    refetch: ae,
    mutate: l
  }];
}

i(tt, "createResource");

function yt(e, t) {
  let r,
      n = t ? t.timeoutMs : void 0,
      s = K(() => ((!r || !r.fn) && (r = Ee(() => o(() => s.value), n !== void 0 ? {
    timeout: n
  } : void 0)), e()), void 0, !0),
      [l, o] = E(s.value, t);
  return D(s), o(() => s.value), l;
}

i(yt, "createDeferred");

function kt(e, t = Te, r) {
  let n = new Map(),
      s = K(l => {
    let o = e();

    for (let c of n.keys()) if (t(c, o) !== t(c, l)) {
      let f = n.get(c);

      for (let d of f.values()) d.state = F, d.pure ? v.push(d) : S.push(d);
    }

    return o;
  }, void 0, !0, F);
  return D(s), l => {
    let o;

    if (o = m) {
      let c;
      (c = n.get(l)) ? c.add(o) : n.set(l, c = new Set([o])), z(() => {
        c.delete(o), !c.size && n.delete(l);
      });
    }

    return t(l, u && u.running && u.sources.has(s) ? s.tValue : s.value);
  };
}

i(kt, "createSelector");

function se(e) {
  if (ne) return e();
  let t,
      r = ne = [];

  try {
    t = e();
  } finally {
    ne = null;
  }

  return Y(() => {
    for (let n = 0; n < r.length; n += 1) {
      let s = r[n];

      if (s.pending !== W) {
        let l = s.pending;
        s.pending = W, Se(s, l);
      }
    }
  }, !1), t;
}

i(se, "batch");

function T(e) {
  let t,
      r = m;
  return m = null, t = e(), m = r, t;
}

i(T, "untrack");

function xt(e, t, r) {
  let n = Array.isArray(e),
      s,
      l = r && r.defer;
  return o => {
    let c;

    if (n) {
      c = Array(e.length);

      for (let d = 0; d < e.length; d++) c[d] = e[d]();
    } else c = e();

    if (l) {
      l = !1;
      return;
    }

    let f = T(() => t(c, s, o));
    return s = c, f;
  };
}

i(xt, "on");

function St(e) {
  et(() => T(e));
}

i(St, "onMount");

function z(e) {
  return h === null || (h.cleanups === null ? h.cleanups = [e] : h.cleanups.push(e)), e;
}

i(z, "onCleanup");

function nt(e) {
  N || (N = Symbol("error")), h === null || (h.context === null ? h.context = {
    [N]: [e]
  } : h.context[N] ? h.context[N].push(e) : h.context[N] = [e]);
}

i(nt, "onError");

function vt() {
  return m;
}

i(vt, "getListener");

function rt() {
  return h;
}

i(rt, "getOwner");

function Ct(e, t) {
  let r = h;
  h = e;

  try {
    return Y(t, !0);
  } finally {
    h = r;
  }
}

i(Ct, "runWithOwner");

function Et(e = Ee) {
  B = e;
}

i(Et, "enableScheduling");

function Fe(e) {
  if (u && u.running) return e(), u.done;
  let t = m,
      r = h;
  return Promise.resolve().then(() => {
    m = t, h = r;
    let n;
    return (B || R) && (n = u || (u = {
      sources: new Set(),
      effects: [],
      promises: new Set(),
      disposed: new Set(),
      queue: new Set(),
      running: !0
    }), n.done || (n.done = new Promise(s => n.resolve = s)), n.running = !0), se(e), m = h = null, n ? n.done : void 0;
  });
}

i(Fe, "startTransition");

function Tt() {
  return [_e, Fe];
}

i(Tt, "useTransition");

function st(e) {
  S.push.apply(S, e), e.length = 0;
}

i(st, "resumeEffects");

function Ie(e) {
  let t = Symbol("context");
  return {
    id: t,
    Provider: ct(t),
    defaultValue: e
  };
}

i(Ie, "createContext");

function Me(e) {
  let t;
  return (t = _(h, e.id)) !== void 0 ? t : e.defaultValue;
}

i(Me, "useContext");

function Ve(e) {
  let t = V(e);
  return V(() => me(t()));
}

i(Ve, "children");
var R;

function lt() {
  return R || (R = Ie({}));
}

i(lt, "getSuspenseContext");

function Ot(e) {
  if (H) {
    let t = H;
    H = i((r, n) => {
      let s = t(r, n),
          l = e(o => s.track(o), n);
      return {
        track: o => l.track(o),

        dispose() {
          l.dispose(), s.dispose();
        }

      };
    }, "ExternalSourceFactory");
  } else H = e;
}

i(Ot, "enableExternalSource");

function qe() {
  let e = u && u.running;

  if (this.sources && (!e && this.state || e && this.tState)) {
    let t = v;
    v = null, !e && this.state === F || e && this.tState === F ? D(this) : ce(this), v = t;
  }

  if (m) {
    let t = this.observers ? this.observers.length : 0;
    m.sources ? (m.sources.push(this), m.sourceSlots.push(t)) : (m.sources = [this], m.sourceSlots = [t]), this.observers ? (this.observers.push(m), this.observerSlots.push(m.sources.length - 1)) : (this.observers = [m], this.observerSlots = [m.sources.length - 1]);
  }

  return e && u.sources.has(this) ? this.tValue : this.value;
}

i(qe, "readSignal");

function Se(e, t, r) {
  if (ne) return e.pending === W && ne.push(e), e.pending = t, t;

  if (e.comparator) {
    if (u && u.running && u.sources.has(e)) {
      if (e.comparator(e.tValue, t)) return t;
    } else if (e.comparator(e.value, t)) return t;
  }

  let n = !1;
  return u ? (n = u.running, (n || !r && u.sources.has(e)) && (u.sources.add(e), e.tValue = t), n || (e.value = t)) : e.value = t, e.observers && e.observers.length && Y(() => {
    for (let s = 0; s < e.observers.length; s += 1) {
      let l = e.observers[s];
      n && u.disposed.has(l) || ((n && !l.tState || !n && !l.state) && (l.pure ? v.push(l) : S.push(l), l.observers && Le(l)), n ? l.tState = F : l.state = F);
    }

    if (v.length > 1e6) throw v = [], new Error();
  }, !1), t;
}

i(Se, "writeSignal");

function D(e) {
  if (!e.fn) return;
  le(e);
  let t = h,
      r = m,
      n = xe;
  m = h = e, Ce(e, u && u.running && u.sources.has(e) ? e.tValue : e.value, n), u && !u.running && u.sources.has(e) && queueMicrotask(() => {
    Y(() => {
      u && (u.running = !0), Ce(e, e.tValue, n);
    }, !1);
  }), m = r, h = t;
}

i(D, "updateComputation");

function Ce(e, t, r) {
  let n;

  try {
    n = e.fn(t);
  } catch (s) {
    Re(s);
  }

  (!e.updatedAt || e.updatedAt <= r) && (e.observers && e.observers.length ? Se(e, n, !0) : u && u.running && e.pure ? (u.sources.add(e), e.tValue = n) : e.value = n, e.updatedAt = r);
}

i(Ce, "runComputation");

function K(e, t, r, n = F, s) {
  let l = {
    fn: e,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: h,
    context: null,
    pure: r
  };

  if (u && u.running && (l.state = 0, l.tState = n), h === null || h !== Ae && (u && u.running && h.pure ? h.tOwned ? h.tOwned.push(l) : h.tOwned = [l] : h.owned ? h.owned.push(l) : h.owned = [l]), H) {
    let [o, c] = E(void 0, {
      equals: !1
    }),
        f = H(l.fn, c);
    z(() => f.dispose());
    let d = i(() => Fe(c).then(() => a.dispose()), "triggerInTransition"),
        a = H(l.fn, d);

    l.fn = y => (o(), u && u.running ? a.track(y) : f.track(y));
  }

  return l;
}

i(K, "createComputation");

function Z(e) {
  let t = u && u.running;
  if (!t && e.state === 0 || t && e.tState === 0) return;
  if (!t && e.state === U || t && e.tState === U) return ce(e);
  if (e.suspense && T(e.suspense.inFallback)) return e.suspense.effects.push(e);
  let r = [e];

  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < xe);) {
    if (t && u.disposed.has(e)) return;
    (!t && e.state || t && e.tState) && r.push(e);
  }

  for (let n = r.length - 1; n >= 0; n--) {
    if (e = r[n], t) {
      let s = e,
          l = r[n + 1];

      for (; (s = s.owner) && s !== l;) if (u.disposed.has(s)) return;
    }

    if (!t && e.state === F || t && e.tState === F) D(e);else if (!t && e.state === U || t && e.tState === U) {
      let s = v;
      v = null, ce(e, r[0]), v = s;
    }
  }
}

i(Z, "runTop");

function Y(e, t) {
  if (v) return e();
  let r = !1;
  t || (v = []), S ? r = !0 : S = [], xe++;

  try {
    let n = e();
    return it(r), n;
  } catch (n) {
    Re(n);
  } finally {
    v = null, r || (S = null);
  }
}

i(Y, "runUpdates");

function it(e) {
  if (v && (B && u && u.running ? ut(v) : je(v), v = null), e) return;
  let t;

  if (u && u.running) {
    if (u.promises.size || u.queue.size) {
      u.running = !1, u.effects.push.apply(u.effects, S), S = null, ve(!0);
      return;
    }

    let r = u.sources;
    t = u.resolve, S.forEach(n => {
      "tState" in n && (n.state = n.tState), delete n.tState;
    }), u = null, se(() => {
      r.forEach(n => {
        if (n.value = n.tValue, n.owned) for (let s = 0, l = n.owned.length; s < l; s++) le(n.owned[s]);
        n.tOwned && (n.owned = n.tOwned), delete n.tValue, delete n.tOwned, n.tState = 0;
      }), ve(!1);
    });
  }

  S.length ? se(() => {
    Pe(S), S = null;
  }) : S = null, t && t();
}

i(it, "completeUpdates");

function je(e) {
  for (let t = 0; t < e.length; t++) Z(e[t]);
}

i(je, "runQueue");

function ut(e) {
  for (let t = 0; t < e.length; t++) {
    let r = e[t],
        n = u.queue;
    n.has(r) || (n.add(r), B(() => {
      n.delete(r), Y(() => {
        u.running = !0, Z(r), n.size || (S.push.apply(S, u.effects), u.effects = []);
      }, !1), u && (u.running = !1);
    }));
  }
}

i(ut, "scheduleQueue");

function ot(e) {
  let t,
      r = 0;

  for (t = 0; t < e.length; t++) {
    let s = e[t];
    s.user ? e[r++] = s : Z(s);
  }

  b.context && q();
  let n = e.length;

  for (t = 0; t < r; t++) Z(e[t]);

  for (t = n; t < e.length; t++) Z(e[t]);
}

i(ot, "runUserEffects");

function ce(e, t) {
  let r = u && u.running;
  r ? e.tState = 0 : e.state = 0;

  for (let n = 0; n < e.sources.length; n += 1) {
    let s = e.sources[n];
    s.sources && (!r && s.state === F || r && s.tState === F ? s !== t && Z(s) : (!r && s.state === U || r && s.tState === U) && ce(s, t));
  }
}

i(ce, "lookUpstream");

function Le(e) {
  let t = u && u.running;

  for (let r = 0; r < e.observers.length; r += 1) {
    let n = e.observers[r];
    (!t && !n.state || t && !n.tState) && (t ? n.tState = U : n.state = U, n.pure ? v.push(n) : S.push(n), n.observers && Le(n));
  }
}

i(Le, "markDownstream");

function le(e) {
  let t;
  if (e.sources) for (; e.sources.length;) {
    let r = e.sources.pop(),
        n = e.sourceSlots.pop(),
        s = r.observers;

    if (s && s.length) {
      let l = s.pop(),
          o = r.observerSlots.pop();
      n < s.length && (l.sourceSlots[o] = n, s[n] = l, r.observerSlots[n] = o);
    }
  }

  if (u && u.running && e.pure) {
    if (e.tOwned) {
      for (t = 0; t < e.tOwned.length; t++) le(e.tOwned[t]);

      delete e.tOwned;
    }

    $e(e, !0);
  } else if (e.owned) {
    for (t = 0; t < e.owned.length; t++) le(e.owned[t]);

    e.owned = null;
  }

  if (e.cleanups) {
    for (t = 0; t < e.cleanups.length; t++) e.cleanups[t]();

    e.cleanups = null;
  }

  u && u.running ? e.tState = 0 : e.state = 0, e.context = null;
}

i(le, "cleanNode");

function $e(e, t) {
  if (t || (e.tState = 0, u.disposed.add(e)), e.owned) for (let r = 0; r < e.owned.length; r++) $e(e.owned[r]);
}

i($e, "reset");

function Re(e) {
  let t = N && _(h, N);

  if (!t) throw e;
  t.forEach(r => r(e));
}

i(Re, "handleError");

function _(e, t) {
  return e ? e.context && e.context[t] !== void 0 ? e.context[t] : _(e.owner, t) : void 0;
}

i(_, "lookup");

function me(e) {
  if (typeof e == "function" && !e.length) return me(e());

  if (Array.isArray(e)) {
    let t = [];

    for (let r = 0; r < e.length; r++) {
      let n = me(e[r]);
      Array.isArray(n) ? t.push.apply(t, n) : t.push(n);
    }

    return t;
  }

  return e;
}

i(me, "resolveChildren");

function ct(e) {
  return i(function (r) {
    let n;
    return re(() => n = T(() => (h.context = {
      [e]: r.value
    }, Ve(() => r.children)))), n;
  }, "provider");
}

i(ct, "createProvider");

function ft() {
  return Symbol.observable || "@@observable";
}

i(ft, "getSymbol");

function Pt(e) {
  let t = ft();
  return {
    subscribe(r) {
      if (!(r instanceof Object) || r == null) throw new TypeError("Expected the observer to be an object.");
      let n = "next" in r ? r.next.bind(r) : r,
          s = !1;
      return re(() => {
        if (s) return;
        let l = e();
        T(() => n(l));
      }), {
        unsubscribe() {
          s = !0;
        }

      };
    },

    [t]() {
      return this;
    }

  };
}

i(Pt, "observable");

function At(e) {
  let [t, r] = E(void 0, {
    equals: !1
  });

  if ("subscribe" in e) {
    let n = e.subscribe(s => r(() => s));
    z(() => "unsubscribe" in n ? n.unsubscribe() : n());
  } else {
    let n = e(r);
    z(n);
  }

  return t;
}

i(At, "from");
var ye = Symbol("fallback");

function fe(e) {
  for (let t = 0; t < e.length; t++) e[t]();
}

i(fe, "dispose");

function at(e, t, r = {}) {
  let n = [],
      s = [],
      l = [],
      o = 0,
      c = t.length > 1 ? [] : null;
  return z(() => fe(l)), () => {
    let f = e() || [],
        d,
        a;
    return f[Oe], T(() => {
      let g = f.length,
          p,
          w,
          k,
          C,
          O,
          x,
          P,
          I,
          $;
      if (g === 0) o !== 0 && (fe(l), l = [], n = [], s = [], o = 0, c && (c = [])), r.fallback && (n = [ye], s[0] = J(ee => (l[0] = ee, r.fallback())), o = 1);else if (o === 0) {
        for (s = new Array(g), a = 0; a < g; a++) n[a] = f[a], s[a] = J(y);

        o = g;
      } else {
        for (k = new Array(g), C = new Array(g), c && (O = new Array(g)), x = 0, P = Math.min(o, g); x < P && n[x] === f[x]; x++);

        for (P = o - 1, I = g - 1; P >= x && I >= x && n[P] === f[I]; P--, I--) k[I] = s[P], C[I] = l[P], c && (O[I] = c[P]);

        for (p = new Map(), w = new Array(I + 1), a = I; a >= x; a--) $ = f[a], d = p.get($), w[a] = d === void 0 ? -1 : d, p.set($, a);

        for (d = x; d <= P; d++) $ = n[d], a = p.get($), a !== void 0 && a !== -1 ? (k[a] = s[d], C[a] = l[d], c && (O[a] = c[d]), a = w[a], p.set($, a)) : l[d]();

        for (a = x; a < g; a++) a in k ? (s[a] = k[a], l[a] = C[a], c && (c[a] = O[a], c[a](a))) : s[a] = J(y);

        s = s.slice(0, o = g), n = f.slice(0);
      }
      return s;
    });

    function y(g) {
      if (l[a] = g, c) {
        let [p, w] = E(a);
        return c[a] = w, t(f[a], p);
      }

      return t(f[a]);
    }

    i(y, "mapper");
  };
}

i(at, "mapArray");

function dt(e, t, r = {}) {
  let n = [],
      s = [],
      l = [],
      o = [],
      c = 0,
      f;
  return z(() => fe(l)), () => {
    let d = e() || [];
    return d[Oe], T(() => {
      if (d.length === 0) return c !== 0 && (fe(l), l = [], n = [], s = [], c = 0, o = []), r.fallback && (n = [ye], s[0] = J(y => (l[0] = y, r.fallback())), c = 1), s;

      for (n[0] === ye && (l[0](), l = [], n = [], s = [], c = 0), f = 0; f < d.length; f++) f < n.length && n[f] !== d[f] ? o[f](() => d[f]) : f >= n.length && (s[f] = J(a));

      for (; f < n.length; f++) l[f]();

      return c = o.length = l.length = d.length, n = d.slice(0), s = s.slice(0, c);
    });

    function a(y) {
      l[f] = y;
      let [g, p] = E(d[f]);
      return o[f] = p, t(g, f);
    }

    i(a, "mapper");
  };
}

i(dt, "indexArray");
var De = !1;

function Ft() {
  De = !0;
}

i(Ft, "enableHydration");

function Ne(e, t) {
  if (De && b.context) {
    let r = b.context;
    q(Je());
    let n = T(() => e(t || {}));
    return q(r), n;
  }

  return T(() => e(t || {}));
}

i(Ne, "createComponent");

function ie() {
  return !0;
}

i(ie, "trueFn");
var Ue = {
  get(e, t, r) {
    return t === Ze ? r : e.get(t);
  },

  has(e, t) {
    return e.has(t);
  },

  set: ie,
  deleteProperty: ie,

  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,

      get() {
        return e.get(t);
      },

      set: ie,
      deleteProperty: ie
    };
  },

  ownKeys(e) {
    return e.keys();
  }

};

function he(e) {
  return (e = typeof e == "function" ? e() : e) == null ? {} : e;
}

i(he, "resolveSource");

function It(...e) {
  return new Proxy({
    get(t) {
      for (let r = e.length - 1; r >= 0; r--) {
        let n = he(e[r])[t];
        if (n !== void 0) return n;
      }
    },

    has(t) {
      for (let r = e.length - 1; r >= 0; r--) if (t in he(e[r])) return !0;

      return !1;
    },

    keys() {
      let t = [];

      for (let r = 0; r < e.length; r++) t.push(...Object.keys(he(e[r])));

      return [...new Set(t)];
    }

  }, Ue);
}

i(It, "mergeProps");

function Mt(e, ...t) {
  let r = new Set(t.flat()),
      n = Object.getOwnPropertyDescriptors(e),
      s = t.map(l => {
    let o = {};

    for (let c = 0; c < l.length; c++) {
      let f = l[c];
      Object.defineProperty(o, f, n[f] ? n[f] : {
        get() {
          return e[f];
        },

        set() {
          return !0;
        }

      });
    }

    return o;
  });
  return s.push(new Proxy({
    get(l) {
      return r.has(l) ? void 0 : e[l];
    },

    has(l) {
      return r.has(l) ? !1 : l in e;
    },

    keys() {
      return Object.keys(e).filter(l => !r.has(l));
    }

  }, Ue)), s;
}

i(Mt, "splitProps");

function Vt(e) {
  let t,
      r,
      n = i(s => {
    let l = b.context;

    if (l) {
      let [c, f] = E();
      (r || (r = e())).then(d => {
        q(l), f(() => d.default), q();
      }), t = c;
    } else if (t) {
      let c = t();
      if (c) return c(s);
    } else {
      let [c] = tt(() => (r || (r = e())).then(f => f.default));
      t = c;
    }

    let o;
    return V(() => (o = t()) && T(() => {
      if (!l) return o(s);
      let c = b.context;
      q(l);
      let f = o(s);
      return q(c), f;
    }));
  }, "wrap");
  return n.preload = () => r || ((r = e()).then(s => t = i(() => s.default, "comp")), r), n;
}

i(Vt, "lazy");
var ht = 0;

function qt() {
  let e = b.context;
  return e ? `${e.id}${e.count++}` : `cl-${ht++}`;
}

i(qt, "createUniqueId");

function jt(e) {
  let t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return V(at(() => e.each, e.children, t || void 0));
}

i(jt, "For");

function Lt(e) {
  let t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return V(dt(() => e.each, e.children, t || void 0));
}

i(Lt, "Index");

function $t(e) {
  let t = !1,
      r = V(() => e.when, void 0, {
    equals: (n, s) => t ? n === s : !n == !s
  });
  return V(() => {
    let n = r();

    if (n) {
      let s = e.children;
      return (t = typeof s == "function" && s.length > 0) ? T(() => s(n)) : s;
    }

    return e.fallback;
  });
}

i($t, "Show");

function Rt(e) {
  let t = !1,
      r = Ve(() => e.children),
      n = V(() => {
    let s = r();
    Array.isArray(s) || (s = [s]);

    for (let l = 0; l < s.length; l++) {
      let o = s[l].when;
      if (o) return [l, o, s[l]];
    }

    return [-1];
  }, void 0, {
    equals: (s, l) => s[0] === l[0] && (t ? s[1] === l[1] : !s[1] == !l[1]) && s[2] === l[2]
  });
  return V(() => {
    let [s, l, o] = n();
    if (s < 0) return e.fallback;
    let c = o.children;
    return (t = typeof c == "function" && c.length > 0) ? T(() => c(l)) : c;
  });
}

i(Rt, "Switch");

function Dt(e) {
  return e;
}

i(Dt, "Match");
var X,
    te = {};

function Nt() {
  X && [...X].forEach(e => e(te));
}

i(Nt, "resetErrorBoundaries");

function Ut(e) {
  let t = te;
  b.context && b.load && (t = b.load(b.context.id + b.context.count) || te);
  let [r, n] = E(t);
  return X || (X = new Set()), X.add(n), z(() => X.delete(n)), V(() => {
    let s;

    if ((s = r()) !== te) {
      let l = e.fallback;
      return typeof l == "function" && l.length ? T(() => l(s, () => n(te))) : l;
    }

    return nt(n), e.children;
  });
}

i(Ut, "ErrorBoundary");
var ke = Ie();

function zt(e) {
  let t = 0,
      r,
      n,
      s,
      l = Me(ke);

  if (l) {
    let [f, d] = E(!1);
    r = d, [n, s] = l.register(f);
  }

  let o = [],
      c = Ne(ke.Provider, {
    value: {
      register: f => {
        let [d, a] = E(!1),
            [y, g] = E(!1);
        return o[t++] = {
          inFallback: f,
          showContent: a,
          showFallback: g
        }, [d, y];
      }
    },

    get children() {
      return e.children;
    }

  });
  return re(() => {
    let f = e.revealOrder,
        d = e.tail,
        a = n ? n() : !0,
        y = s ? s() : !0,
        g = f === "backwards";

    if (f === "together") {
      let w = o.every(k => !k.inFallback());
      r && r(!w), o.forEach(k => {
        k.showContent(w && a), k.showFallback(y);
      });
      return;
    }

    let p = !1;

    for (let w = 0, k = o.length; w < k; w++) {
      let C = g ? k - w - 1 : w,
          O = o[C].inFallback();
      if (!p && !O) o[C].showContent(a), o[C].showFallback(y);else {
        let x = !p;
        x && r && r(!0), !d || x && d === "collapsed" ? o[C].showFallback(y) : o[C].showFallback(!1), p = !0, o[C].showContent(x);
      }
    }

    !p && r && r(!1);
  }), c;
}

i(zt, "SuspenseList");

function Ht(e) {
  let t = 0,
      r,
      n,
      s,
      l,
      o,
      c,
      [f, d] = E(!1),
      a = lt(),
      y = {
    increment: () => {
      ++t === 1 && d(!0);
    },
    decrement: () => {
      --t === 0 && d(!1);
    },
    inFallback: f,
    effects: [],
    resolved: !1
  },
      g = rt();

  if (b.context) {
    let k = b.context.id + b.context.count;

    if (l = b.load(k), l) {
      (typeof l != "object" || !("then" in l)) && (l = Promise.resolve(l));
      let [C, O] = E(void 0, {
        equals: !1
      });
      o = C, l.then(x => {
        if ((c = x) || b.done) return O();
        b.gather(k), q(s), O(), q();
      });
    }
  }

  let p = Me(ke);
  p && ([r, n] = p.register(y.inFallback));
  let w;
  return z(() => w && w()), Ne(a.Provider, {
    value: y,

    get children() {
      return V(() => {
        if (c) throw c;
        if (s = b.context, o) return o(), o = void 0;
        s && l === void 0 && q();
        let k = T(() => e.children);
        return V(() => {
          let C = y.inFallback(),
              O = r ? r() : !0,
              x = n ? n() : !0;
          if (w && w(), (!C || l !== void 0) && O) return y.resolved = !0, s = l = void 0, st(y.effects), k;
          if (!!x) return J(P => (w = P, s && (q({
            id: s.id + "f",
            count: 0
          }), s = void 0), e.fallback), g);
        });
      });
    }

  });
}

i(Ht, "Suspense");
var Wt;
export { bt as $DEVCOMP, Ze as $PROXY, Oe as $TRACK, Wt as DEV, Ut as ErrorBoundary, jt as For, Lt as Index, Dt as Match, $t as Show, Ht as Suspense, zt as SuspenseList, Rt as Switch, se as batch, pt as cancelCallback, Ve as children, Ne as createComponent, re as createComputed, Ie as createContext, yt as createDeferred, et as createEffect, V as createMemo, mt as createReaction, wt as createRenderEffect, tt as createResource, J as createRoot, kt as createSelector, E as createSignal, qt as createUniqueId, Ot as enableExternalSource, Ft as enableHydration, Et as enableScheduling, Te as equalFn, At as from, vt as getListener, rt as getOwner, dt as indexArray, Vt as lazy, at as mapArray, It as mergeProps, Pt as observable, xt as on, z as onCleanup, nt as onError, St as onMount, Ee as requestCallback, Nt as resetErrorBoundaries, Ct as runWithOwner, b as sharedConfig, Mt as splitProps, Fe as startTransition, T as untrack, Me as useContext, Tt as useTransition };