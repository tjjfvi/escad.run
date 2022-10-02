/* esm.sh - esbuild bundle(solid-js@1.4.3) esnext production */
var Ue = 1,
    he = !1,
    ge = !1,
    G = [],
    j = null,
    pe = null,
    ze = 5,
    ae = 0,
    He = 300,
    be = null,
    ie = null,
    We = 1073741823;

function Be() {
  let e = new MessageChannel(),
      t = e.port2;

  if (be = () => t.postMessage(null), e.port1.onmessage = () => {
    if (ie !== null) {
      let r = performance.now();
      ae = r + ze;
      let n = !0;

      try {
        ie(n, r) ? t.postMessage(null) : ie = null;
      } catch (s) {
        throw t.postMessage(null), s;
      }
    }
  }, navigator && navigator.scheduling && navigator.scheduling.isInputPending) {
    let r = navigator.scheduling;

    pe = () => {
      let n = performance.now();
      return n >= ae ? r.isInputPending() ? !0 : n >= He : !1;
    };
  } else pe = () => performance.now() >= ae;
}

function Ke(e, t) {
  function r() {
    let n = 0,
        s = e.length - 1;

    for (; n <= s;) {
      let l = s + n >> 1,
          u = t.expirationTime - e[l].expirationTime;
      if (u > 0) n = l + 1;else if (u < 0) s = l - 1;else return l;
    }

    return n;
  }

  e.splice(r(), 0, t);
}

function Ce(e, t) {
  be || Be();
  let r = performance.now(),
      n = We;
  t && t.timeout && (n = t.timeout);
  let s = {
    id: Ue++,
    fn: e,
    startTime: r,
    expirationTime: r + n
  };
  return Ke(G, s), !he && !ge && (he = !0, ie = Ye, be()), s;
}

function dt(e) {
  e.fn = null;
}

function Ye(e, t) {
  he = !1, ge = !0;

  try {
    return Ge(e, t);
  } finally {
    j = null, ge = !1;
  }
}

function Ge(e, t) {
  let r = t;

  for (j = G[0] || null; j !== null && !(j.expirationTime > r && (!e || pe()));) {
    let n = j.fn;

    if (n !== null) {
      j.fn = null;
      let s = j.expirationTime <= r;
      n(s), r = performance.now(), j === G[0] && G.shift();
    } else G.shift();

    j = G[0] || null;
  }

  return j !== null;
}

var p = {};

function V(e) {
  p.context = e;
}

function Qe() {
  return { ...p.context,
    id: `${p.context.id}${p.context.count++}-`,
    count: 0
  };
}

var Ee = (e, t) => e === t,
    Xe = Symbol("solid-proxy"),
    Te = Symbol("solid-track"),
    ht = Symbol("solid-dev-component"),
    ue = {
  equals: Ee
},
    D = null,
    Oe = qe,
    H = {},
    A = 1,
    N = 2,
    Pe = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
},
    [Je, Se] = C(!1),
    d = null,
    i = null,
    W = null,
    z = null,
    w = null,
    te = null,
    S = null,
    x = null,
    ke = 0;

function X(e, t) {
  let r = w,
      n = d,
      s = e.length === 0 ? Pe : {
    owned: null,
    cleanups: null,
    context: null,
    owner: t || n
  };
  d = s, w = null;

  try {
    return K(() => e(() => se(s)), !0);
  } finally {
    w = r, d = n;
  }
}

function C(e, t) {
  t = t ? Object.assign({}, ue, t) : ue;

  let r = {
    value: e,
    observers: null,
    observerSlots: null,
    pending: H,
    comparator: t.equals || void 0
  },
      n = s => (typeof s == "function" && (i && i.running && i.sources.has(r) ? s = s(r.pending !== H ? r.pending : r.tValue) : s = s(r.pending !== H ? r.pending : r.value)), xe(r, s));

  return [Ve.bind(r), n];
}

function ne(e, t, r) {
  let n = B(e, t, !0, A);
  W && i && i.running ? S.push(n) : R(n);
}

function gt(e, t, r) {
  let n = B(e, t, !1, A);
  W && i && i.running ? S.push(n) : R(n);
}

function Ze(e, t, r) {
  Oe = it;
  let n = B(e, t, !1, A),
      s = $ && Z(d, $.id);
  s && (n.suspense = s), n.user = !0, x ? x.push(n) : R(n);
}

function pt(e, t) {
  let r,
      n = B(() => {
    r ? r() : E(e), r = void 0;
  }, void 0, !1, 0),
      s = $ && Z(d, $.id);
  return s && (n.suspense = s), n.user = !0, l => {
    r = l, R(n);
  };
}

function M(e, t, r) {
  r = r ? Object.assign({}, ue, r) : ue;
  let n = B(e, t, !0, 0);
  return n.pending = H, n.observers = null, n.observerSlots = null, n.comparator = r.equals || void 0, W && i && i.running ? (n.tState = A, S.push(n)) : R(n), Ve.bind(n);
}

function _e(e, t, r) {
  arguments.length === 2 ? typeof t == "object" && (r = t, t = e, e = !0) : arguments.length === 1 && (t = e, e = !0), r || (r = {});
  let n = new Set(),
      [s, l] = C(r.initialValue),
      [u, o] = C(void 0, {
    equals: !1
  }),
      [c, a] = C(!1),
      [f, m] = C(),
      h,
      g = null,
      b = null,
      y = null,
      v = !1,
      T = !1,
      k = ("initialValue" in r),
      O = typeof e == "function" && M(e);
  p.context && (y = `${p.context.id}${p.context.count++}`, p.load && (b = p.load(y)));

  function F(P, I, q, Y) {
    return g === P && (g = null, k = !0, b && (P === b || I === b) && r.onHydrated && queueMicrotask(() => r.onHydrated(Y, {
      value: I
    })), b = null, m(h = q), i && P && v ? (i.promises.delete(P), v = !1, K(() => {
      i.running = !0, i.promises.size || (x.push.apply(x, i.effects), i.effects = []), L(I);
    }, !1)) : L(I)), I;
  }

  function L(P) {
    re(() => {
      l(() => P), a(!1);

      for (let I of n.keys()) I.decrement();

      n.clear();
    });
  }

  function _() {
    let P = $ && Z(d, $.id),
        I = s();
    if (h) throw h;
    return w && !w.user && P && ne(() => {
      u(), g && (P.resolved && i ? i.promises.add(g) : n.has(P) || (P.increment(), n.add(P)));
    }), I;
  }

  function fe(P = !0) {
    if (P && T) return;
    T = !1, m(h = void 0);
    let I = O ? O() : e;

    if (v = i && i.running, I == null || I === !1) {
      F(g, E(s));
      return;
    }

    i && g && i.promises.delete(g);
    let q = b || E(() => t(I, {
      value: s(),
      refetching: P
    }));
    return typeof q != "object" || !("then" in q) ? (F(g, q), q) : (g = q, T = !0, queueMicrotask(() => T = !1), re(() => {
      a(!0), o();
    }), q.then(Y => F(q, Y, void 0, I), Y => F(q, Y, Y)));
  }

  return Object.defineProperties(_, {
    loading: {
      get() {
        return c();
      }

    },
    error: {
      get() {
        return f();
      }

    },
    latest: {
      get() {
        if (!k) return _();
        if (h) throw h;
        return s();
      }

    }
  }), O ? ne(() => fe(!1)) : fe(!1), [_, {
    refetch: fe,
    mutate: l
  }];
}

function bt(e, t) {
  let r,
      n = t ? t.timeoutMs : void 0,
      s = B(() => ((!r || !r.fn) && (r = Ce(() => u(() => s.value), n !== void 0 ? {
    timeout: n
  } : void 0)), e()), void 0, !0),
      [l, u] = C(s.value, t);
  return R(s), u(() => s.value), l;
}

function wt(e, t = Ee, r) {
  let n = new Map(),
      s = B(l => {
    let u = e();

    for (let o of n.keys()) if (t(o, u) !== t(o, l)) {
      let c = n.get(o);

      for (let a of c.values()) a.state = A, a.pure ? S.push(a) : x.push(a);
    }

    return u;
  }, void 0, !0, A);
  return R(s), l => {
    let u;

    if (u = w) {
      let o;
      (o = n.get(l)) ? o.add(u) : n.set(l, o = new Set([u])), U(() => {
        o.delete(u), !o.size && n.delete(l);
      });
    }

    return t(l, i && i.running && i.sources.has(s) ? s.tValue : s.value);
  };
}

function re(e) {
  if (te) return e();
  let t,
      r = te = [];

  try {
    t = e();
  } finally {
    te = null;
  }

  return K(() => {
    for (let n = 0; n < r.length; n += 1) {
      let s = r[n];

      if (s.pending !== H) {
        let l = s.pending;
        s.pending = H, xe(s, l);
      }
    }
  }, !1), t;
}

function E(e) {
  let t,
      r = w;
  return w = null, t = e(), w = r, t;
}

function mt(e, t, r) {
  let n = Array.isArray(e),
      s,
      l = r && r.defer;
  return u => {
    let o;

    if (n) {
      o = Array(e.length);

      for (let a = 0; a < e.length; a++) o[a] = e[a]();
    } else o = e();

    if (l) {
      l = !1;
      return;
    }

    let c = E(() => t(o, s, u));
    return s = o, c;
  };
}

function yt(e) {
  Ze(() => E(e));
}

function U(e) {
  return d === null || (d.cleanups === null ? d.cleanups = [e] : d.cleanups.push(e)), e;
}

function et(e) {
  D || (D = Symbol("error")), d === null || (d.context === null ? d.context = {
    [D]: [e]
  } : d.context[D] ? d.context[D].push(e) : d.context[D] = [e]);
}

function kt() {
  return w;
}

function tt() {
  return d;
}

function xt(e, t) {
  let r = d;
  d = e;

  try {
    return K(t, !0);
  } finally {
    d = r;
  }
}

function St(e = Ce) {
  W = e;
}

function Ae(e) {
  if (i && i.running) return e(), i.done;
  let t = w,
      r = d;
  return Promise.resolve().then(() => {
    w = t, d = r;
    let n;
    return (W || $) && (n = i || (i = {
      sources: new Set(),
      effects: [],
      promises: new Set(),
      disposed: new Set(),
      queue: new Set(),
      running: !0
    }), n.done || (n.done = new Promise(s => n.resolve = s)), n.running = !0), re(e), w = d = null, n ? n.done : void 0;
  });
}

function vt() {
  return [Je, Ae];
}

function nt(e) {
  x.push.apply(x, e), e.length = 0;
}

function Fe(e) {
  let t = Symbol("context");
  return {
    id: t,
    Provider: ut(t),
    defaultValue: e
  };
}

function Ie(e) {
  let t;
  return (t = Z(d, e.id)) !== void 0 ? t : e.defaultValue;
}

function Me(e) {
  let t = M(e);
  return M(() => we(t()));
}

var $;

function rt() {
  return $ || ($ = Fe({}));
}

function Ct(e) {
  if (z) {
    let t = z;

    z = (r, n) => {
      let s = t(r, n),
          l = e(u => s.track(u), n);
      return {
        track: u => l.track(u),

        dispose() {
          l.dispose(), s.dispose();
        }

      };
    };
  } else z = e;
}

function Ve() {
  let e = i && i.running;

  if (this.sources && (!e && this.state || e && this.tState)) {
    let t = S;
    S = null, !e && this.state === A || e && this.tState === A ? R(this) : oe(this), S = t;
  }

  if (w) {
    let t = this.observers ? this.observers.length : 0;
    w.sources ? (w.sources.push(this), w.sourceSlots.push(t)) : (w.sources = [this], w.sourceSlots = [t]), this.observers ? (this.observers.push(w), this.observerSlots.push(w.sources.length - 1)) : (this.observers = [w], this.observerSlots = [w.sources.length - 1]);
  }

  return e && i.sources.has(this) ? this.tValue : this.value;
}

function xe(e, t, r) {
  if (te) return e.pending === H && te.push(e), e.pending = t, t;

  if (e.comparator) {
    if (i && i.running && i.sources.has(e)) {
      if (e.comparator(e.tValue, t)) return t;
    } else if (e.comparator(e.value, t)) return t;
  }

  let n = !1;
  return i ? (n = i.running, (n || !r && i.sources.has(e)) && (i.sources.add(e), e.tValue = t), n || (e.value = t)) : e.value = t, e.observers && e.observers.length && K(() => {
    for (let s = 0; s < e.observers.length; s += 1) {
      let l = e.observers[s];
      n && i.disposed.has(l) || ((n && !l.tState || !n && !l.state) && (l.pure ? S.push(l) : x.push(l), l.observers && je(l)), n ? l.tState = A : l.state = A);
    }

    if (S.length > 1e6) throw S = [], new Error();
  }, !1), t;
}

function R(e) {
  if (!e.fn) return;
  se(e);
  let t = d,
      r = w,
      n = ke;
  w = d = e, ve(e, i && i.running && i.sources.has(e) ? e.tValue : e.value, n), i && !i.running && i.sources.has(e) && queueMicrotask(() => {
    K(() => {
      i && (i.running = !0), ve(e, e.tValue, n);
    }, !1);
  }), w = r, d = t;
}

function ve(e, t, r) {
  let n;

  try {
    n = e.fn(t);
  } catch (s) {
    $e(s);
  }

  (!e.updatedAt || e.updatedAt <= r) && (e.observers && e.observers.length ? xe(e, n, !0) : i && i.running && e.pure ? (i.sources.add(e), e.tValue = n) : e.value = n, e.updatedAt = r);
}

function B(e, t, r, n = A, s) {
  let l = {
    fn: e,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: d,
    context: null,
    pure: r
  };

  if (i && i.running && (l.state = 0, l.tState = n), d === null || d !== Pe && (i && i.running && d.pure ? d.tOwned ? d.tOwned.push(l) : d.tOwned = [l] : d.owned ? d.owned.push(l) : d.owned = [l]), z) {
    let [u, o] = C(void 0, {
      equals: !1
    }),
        c = z(l.fn, o);
    U(() => c.dispose());

    let a = () => Ae(o).then(() => f.dispose()),
        f = z(l.fn, a);

    l.fn = m => (u(), i && i.running ? f.track(m) : c.track(m));
  }

  return l;
}

function J(e) {
  let t = i && i.running;
  if (!t && e.state === 0 || t && e.tState === 0) return;
  if (!t && e.state === N || t && e.tState === N) return oe(e);
  if (e.suspense && E(e.suspense.inFallback)) return e.suspense.effects.push(e);
  let r = [e];

  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < ke);) {
    if (t && i.disposed.has(e)) return;
    (!t && e.state || t && e.tState) && r.push(e);
  }

  for (let n = r.length - 1; n >= 0; n--) {
    if (e = r[n], t) {
      let s = e,
          l = r[n + 1];

      for (; (s = s.owner) && s !== l;) if (i.disposed.has(s)) return;
    }

    if (!t && e.state === A || t && e.tState === A) R(e);else if (!t && e.state === N || t && e.tState === N) {
      let s = S;
      S = null, oe(e, r[0]), S = s;
    }
  }
}

function K(e, t) {
  if (S) return e();
  let r = !1;
  t || (S = []), x ? r = !0 : x = [], ke++;

  try {
    let n = e();
    return st(r), n;
  } catch (n) {
    $e(n);
  } finally {
    S = null, r || (x = null);
  }
}

function st(e) {
  if (S && (W && i && i.running ? lt(S) : qe(S), S = null), e) return;
  let t;

  if (i && i.running) {
    if (i.promises.size || i.queue.size) {
      i.running = !1, i.effects.push.apply(i.effects, x), x = null, Se(!0);
      return;
    }

    let r = i.sources;
    t = i.resolve, x.forEach(n => {
      "tState" in n && (n.state = n.tState), delete n.tState;
    }), i = null, re(() => {
      r.forEach(n => {
        if (n.value = n.tValue, n.owned) for (let s = 0, l = n.owned.length; s < l; s++) se(n.owned[s]);
        n.tOwned && (n.owned = n.tOwned), delete n.tValue, delete n.tOwned, n.tState = 0;
      }), Se(!1);
    });
  }

  x.length ? re(() => {
    Oe(x), x = null;
  }) : x = null, t && t();
}

function qe(e) {
  for (let t = 0; t < e.length; t++) J(e[t]);
}

function lt(e) {
  for (let t = 0; t < e.length; t++) {
    let r = e[t],
        n = i.queue;
    n.has(r) || (n.add(r), W(() => {
      n.delete(r), K(() => {
        i.running = !0, J(r), n.size || (x.push.apply(x, i.effects), i.effects = []);
      }, !1), i && (i.running = !1);
    }));
  }
}

function it(e) {
  let t,
      r = 0;

  for (t = 0; t < e.length; t++) {
    let s = e[t];
    s.user ? e[r++] = s : J(s);
  }

  p.context && V();
  let n = e.length;

  for (t = 0; t < r; t++) J(e[t]);

  for (t = n; t < e.length; t++) J(e[t]);
}

function oe(e, t) {
  let r = i && i.running;
  r ? e.tState = 0 : e.state = 0;

  for (let n = 0; n < e.sources.length; n += 1) {
    let s = e.sources[n];
    s.sources && (!r && s.state === A || r && s.tState === A ? s !== t && J(s) : (!r && s.state === N || r && s.tState === N) && oe(s, t));
  }
}

function je(e) {
  let t = i && i.running;

  for (let r = 0; r < e.observers.length; r += 1) {
    let n = e.observers[r];
    (!t && !n.state || t && !n.tState) && (t ? n.tState = N : n.state = N, n.pure ? S.push(n) : x.push(n), n.observers && je(n));
  }
}

function se(e) {
  let t;
  if (e.sources) for (; e.sources.length;) {
    let r = e.sources.pop(),
        n = e.sourceSlots.pop(),
        s = r.observers;

    if (s && s.length) {
      let l = s.pop(),
          u = r.observerSlots.pop();
      n < s.length && (l.sourceSlots[u] = n, s[n] = l, r.observerSlots[n] = u);
    }
  }

  if (i && i.running && e.pure) {
    if (e.tOwned) {
      for (t = 0; t < e.tOwned.length; t++) se(e.tOwned[t]);

      delete e.tOwned;
    }

    Le(e, !0);
  } else if (e.owned) {
    for (t = 0; t < e.owned.length; t++) se(e.owned[t]);

    e.owned = null;
  }

  if (e.cleanups) {
    for (t = 0; t < e.cleanups.length; t++) e.cleanups[t]();

    e.cleanups = null;
  }

  i && i.running ? e.tState = 0 : e.state = 0, e.context = null;
}

function Le(e, t) {
  if (t || (e.tState = 0, i.disposed.add(e)), e.owned) for (let r = 0; r < e.owned.length; r++) Le(e.owned[r]);
}

function $e(e) {
  let t = D && Z(d, D);
  if (!t) throw e;
  t.forEach(r => r(e));
}

function Z(e, t) {
  return e ? e.context && e.context[t] !== void 0 ? e.context[t] : Z(e.owner, t) : void 0;
}

function we(e) {
  if (typeof e == "function" && !e.length) return we(e());

  if (Array.isArray(e)) {
    let t = [];

    for (let r = 0; r < e.length; r++) {
      let n = we(e[r]);
      Array.isArray(n) ? t.push.apply(t, n) : t.push(n);
    }

    return t;
  }

  return e;
}

function ut(e) {
  return function (r) {
    let n;
    return ne(() => n = E(() => (d.context = {
      [e]: r.value
    }, Me(() => r.children)))), n;
  };
}

function ot() {
  return Symbol.observable || "@@observable";
}

function Et(e) {
  let t = ot();
  return {
    subscribe(r) {
      if (!(r instanceof Object) || r == null) throw new TypeError("Expected the observer to be an object.");
      let n = "next" in r ? r.next.bind(r) : r,
          s = !1;
      return ne(() => {
        if (s) return;
        let l = e();
        E(() => n(l));
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

function Tt(e) {
  let [t, r] = C(void 0, {
    equals: !1
  });

  if ("subscribe" in e) {
    let n = e.subscribe(s => r(() => s));
    U(() => "unsubscribe" in n ? n.unsubscribe() : n());
  } else {
    let n = e(r);
    U(n);
  }

  return t;
}

var me = Symbol("fallback");

function ce(e) {
  for (let t = 0; t < e.length; t++) e[t]();
}

function ct(e, t, r = {}) {
  let n = [],
      s = [],
      l = [],
      u = 0,
      o = t.length > 1 ? [] : null;
  return U(() => ce(l)), () => {
    let c = e() || [],
        a,
        f;
    return c[Te], E(() => {
      let h = c.length,
          g,
          b,
          y,
          v,
          T,
          k,
          O,
          F,
          L;
      if (h === 0) u !== 0 && (ce(l), l = [], n = [], s = [], u = 0, o && (o = [])), r.fallback && (n = [me], s[0] = X(_ => (l[0] = _, r.fallback())), u = 1);else if (u === 0) {
        for (s = new Array(h), f = 0; f < h; f++) n[f] = c[f], s[f] = X(m);

        u = h;
      } else {
        for (y = new Array(h), v = new Array(h), o && (T = new Array(h)), k = 0, O = Math.min(u, h); k < O && n[k] === c[k]; k++);

        for (O = u - 1, F = h - 1; O >= k && F >= k && n[O] === c[F]; O--, F--) y[F] = s[O], v[F] = l[O], o && (T[F] = o[O]);

        for (g = new Map(), b = new Array(F + 1), f = F; f >= k; f--) L = c[f], a = g.get(L), b[f] = a === void 0 ? -1 : a, g.set(L, f);

        for (a = k; a <= O; a++) L = n[a], f = g.get(L), f !== void 0 && f !== -1 ? (y[f] = s[a], v[f] = l[a], o && (T[f] = o[a]), f = b[f], g.set(L, f)) : l[a]();

        for (f = k; f < h; f++) f in y ? (s[f] = y[f], l[f] = v[f], o && (o[f] = T[f], o[f](f))) : s[f] = X(m);

        s = s.slice(0, u = h), n = c.slice(0);
      }
      return s;
    });

    function m(h) {
      if (l[f] = h, o) {
        let [g, b] = C(f);
        return o[f] = b, t(c[f], g);
      }

      return t(c[f]);
    }
  };
}

function ft(e, t, r = {}) {
  let n = [],
      s = [],
      l = [],
      u = [],
      o = 0,
      c;
  return U(() => ce(l)), () => {
    let a = e() || [];
    return a[Te], E(() => {
      if (a.length === 0) return o !== 0 && (ce(l), l = [], n = [], s = [], o = 0, u = []), r.fallback && (n = [me], s[0] = X(m => (l[0] = m, r.fallback())), o = 1), s;

      for (n[0] === me && (l[0](), l = [], n = [], s = [], o = 0), c = 0; c < a.length; c++) c < n.length && n[c] !== a[c] ? u[c](() => a[c]) : c >= n.length && (s[c] = X(f));

      for (; c < n.length; c++) l[c]();

      return o = u.length = l.length = a.length, n = a.slice(0), s = s.slice(0, o);
    });

    function f(m) {
      l[c] = m;
      let [h, g] = C(a[c]);
      return u[c] = g, t(h, c);
    }
  };
}

var Re = !1;

function Ot() {
  Re = !0;
}

function De(e, t) {
  if (Re && p.context) {
    let r = p.context;
    V(Qe());
    let n = E(() => e(t || {}));
    return V(r), n;
  }

  return E(() => e(t || {}));
}

function le() {
  return !0;
}

var Ne = {
  get(e, t, r) {
    return t === Xe ? r : e.get(t);
  },

  has(e, t) {
    return e.has(t);
  },

  set: le,
  deleteProperty: le,

  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,

      get() {
        return e.get(t);
      },

      set: le,
      deleteProperty: le
    };
  },

  ownKeys(e) {
    return e.keys();
  }

};

function de(e) {
  return (e = typeof e == "function" ? e() : e) == null ? {} : e;
}

function Pt(...e) {
  return new Proxy({
    get(t) {
      for (let r = e.length - 1; r >= 0; r--) {
        let n = de(e[r])[t];
        if (n !== void 0) return n;
      }
    },

    has(t) {
      for (let r = e.length - 1; r >= 0; r--) if (t in de(e[r])) return !0;

      return !1;
    },

    keys() {
      let t = [];

      for (let r = 0; r < e.length; r++) t.push(...Object.keys(de(e[r])));

      return [...new Set(t)];
    }

  }, Ne);
}

function At(e, ...t) {
  let r = new Set(t.flat()),
      n = Object.getOwnPropertyDescriptors(e),
      s = t.map(l => {
    let u = {};

    for (let o = 0; o < l.length; o++) {
      let c = l[o];
      Object.defineProperty(u, c, n[c] ? n[c] : {
        get() {
          return e[c];
        },

        set() {
          return !0;
        }

      });
    }

    return u;
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

  }, Ne)), s;
}

function Ft(e) {
  let t,
      r,
      n = s => {
    let l = p.context;

    if (l) {
      let [o, c] = C();
      (r || (r = e())).then(a => {
        V(l), c(() => a.default), V();
      }), t = o;
    } else if (t) {
      let o = t();
      if (o) return o(s);
    } else {
      let [o] = _e(() => (r || (r = e())).then(c => c.default));

      t = o;
    }

    let u;
    return M(() => (u = t()) && E(() => {
      if (!l) return u(s);
      let o = p.context;
      V(l);
      let c = u(s);
      return V(o), c;
    }));
  };

  return n.preload = () => r || ((r = e()).then(s => t = () => s.default), r), n;
}

var at = 0;

function It() {
  let e = p.context;
  return e ? `${e.id}${e.count++}` : `cl-${at++}`;
}

function Mt(e) {
  let t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return M(ct(() => e.each, e.children, t || void 0));
}

function Vt(e) {
  let t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return M(ft(() => e.each, e.children, t || void 0));
}

function qt(e) {
  let t = !1,
      r = M(() => e.when, void 0, {
    equals: (n, s) => t ? n === s : !n == !s
  });
  return M(() => {
    let n = r();

    if (n) {
      let s = e.children;
      return (t = typeof s == "function" && s.length > 0) ? E(() => s(n)) : s;
    }

    return e.fallback;
  });
}

function jt(e) {
  let t = !1,
      r = Me(() => e.children),
      n = M(() => {
    let s = r();
    Array.isArray(s) || (s = [s]);

    for (let l = 0; l < s.length; l++) {
      let u = s[l].when;
      if (u) return [l, u, s[l]];
    }

    return [-1];
  }, void 0, {
    equals: (s, l) => s[0] === l[0] && (t ? s[1] === l[1] : !s[1] == !l[1]) && s[2] === l[2]
  });
  return M(() => {
    let [s, l, u] = n();
    if (s < 0) return e.fallback;
    let o = u.children;
    return (t = typeof o == "function" && o.length > 0) ? E(() => o(l)) : o;
  });
}

function Lt(e) {
  return e;
}

var Q,
    ee = {};

function $t() {
  Q && [...Q].forEach(e => e(ee));
}

function Rt(e) {
  let t = ee;
  p.context && p.load && (t = p.load(p.context.id + p.context.count) || ee);
  let [r, n] = C(t);
  return Q || (Q = new Set()), Q.add(n), U(() => Q.delete(n)), M(() => {
    let s;

    if ((s = r()) !== ee) {
      let l = e.fallback;
      return typeof l == "function" && l.length ? E(() => l(s, () => n(ee))) : l;
    }

    return et(n), e.children;
  });
}

var ye = Fe();

function Dt(e) {
  let t = 0,
      r,
      n,
      s,
      l = Ie(ye);

  if (l) {
    let [c, a] = C(!1);
    r = a, [n, s] = l.register(c);
  }

  let u = [],
      o = De(ye.Provider, {
    value: {
      register: c => {
        let [a, f] = C(!1),
            [m, h] = C(!1);
        return u[t++] = {
          inFallback: c,
          showContent: f,
          showFallback: h
        }, [a, m];
      }
    },

    get children() {
      return e.children;
    }

  });
  return ne(() => {
    let c = e.revealOrder,
        a = e.tail,
        f = n ? n() : !0,
        m = s ? s() : !0,
        h = c === "backwards";

    if (c === "together") {
      let b = u.every(y => !y.inFallback());
      r && r(!b), u.forEach(y => {
        y.showContent(b && f), y.showFallback(m);
      });
      return;
    }

    let g = !1;

    for (let b = 0, y = u.length; b < y; b++) {
      let v = h ? y - b - 1 : b,
          T = u[v].inFallback();
      if (!g && !T) u[v].showContent(f), u[v].showFallback(m);else {
        let k = !g;
        k && r && r(!0), !a || k && a === "collapsed" ? u[v].showFallback(m) : u[v].showFallback(!1), g = !0, u[v].showContent(k);
      }
    }

    !g && r && r(!1);
  }), o;
}

function Nt(e) {
  let t = 0,
      r,
      n,
      s,
      l,
      u,
      o,
      [c, a] = C(!1),
      f = rt(),
      m = {
    increment: () => {
      ++t === 1 && a(!0);
    },
    decrement: () => {
      --t === 0 && a(!1);
    },
    inFallback: c,
    effects: [],
    resolved: !1
  },
      h = tt();

  if (p.context) {
    let y = p.context.id + p.context.count;

    if (l = p.load(y), l) {
      (typeof l != "object" || !("then" in l)) && (l = Promise.resolve(l));
      let [v, T] = C(void 0, {
        equals: !1
      });
      u = v, l.then(k => {
        if ((o = k) || p.done) return T();
        p.gather(y), V(s), T(), V();
      });
    }
  }

  let g = Ie(ye);
  g && ([r, n] = g.register(m.inFallback));
  let b;
  return U(() => b && b()), De(f.Provider, {
    value: m,

    get children() {
      return M(() => {
        if (o) throw o;
        if (s = p.context, u) return u(), u = void 0;
        s && l === void 0 && V();
        let y = E(() => e.children);
        return M(() => {
          let v = m.inFallback(),
              T = r ? r() : !0,
              k = n ? n() : !0;
          if (b && b(), (!v || l !== void 0) && T) return m.resolved = !0, s = l = void 0, nt(m.effects), y;
          if (!!k) return X(O => (b = O, s && (V({
            id: s.id + "f",
            count: 0
          }), s = void 0), e.fallback), h);
        });
      });
    }

  });
}

var Ut;
export { ht as $DEVCOMP, Xe as $PROXY, Te as $TRACK, Ut as DEV, Rt as ErrorBoundary, Mt as For, Vt as Index, Lt as Match, qt as Show, Nt as Suspense, Dt as SuspenseList, jt as Switch, re as batch, dt as cancelCallback, Me as children, De as createComponent, ne as createComputed, Fe as createContext, bt as createDeferred, Ze as createEffect, M as createMemo, pt as createReaction, gt as createRenderEffect, _e as createResource, X as createRoot, wt as createSelector, C as createSignal, It as createUniqueId, Ct as enableExternalSource, Ot as enableHydration, St as enableScheduling, Ee as equalFn, Tt as from, kt as getListener, tt as getOwner, ft as indexArray, Ft as lazy, ct as mapArray, Pt as mergeProps, Et as observable, mt as on, U as onCleanup, et as onError, yt as onMount, Ce as requestCallback, $t as resetErrorBoundaries, xt as runWithOwner, p as sharedConfig, At as splitProps, Ae as startTransition, E as untrack, Ie as useContext, vt as useTransition };