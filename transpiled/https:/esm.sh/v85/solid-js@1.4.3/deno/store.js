/* esm.sh - esbuild bundle(solid-js@1.4.3/store) deno production */
var V = Object.defineProperty;

var u = (n, e) => V(n, "name", {
  value: e,
  configurable: !0
});

import { $PROXY as A, $TRACK as F, getListener as T, batch as a, createSignal as X } from "/transpiled/https://esm.sh/v85/solid-js@1.4.3/deno/solid-js.js";
var N = Symbol("store-raw"),
    S = Symbol("store-node"),
    Y = Symbol("store-name");

function W(n, e) {
  let t = n[A];

  if (!t) {
    Object.defineProperty(n, A, {
      value: t = new Proxy(n, B)
    });
    let i = Object.keys(n),
        r = Object.getOwnPropertyDescriptors(n);

    for (let o = 0, c = i.length; o < c; o++) {
      let l = i[o];

      if (r[l].get) {
        let f = r[l].get.bind(t);
        Object.defineProperty(n, l, {
          get: f
        });
      }
    }
  }

  return t;
}

u(W, "wrap$1");

function w(n) {
  return n != null && typeof n == "object" && (n[A] || !n.__proto__ || n.__proto__ === Object.prototype || Array.isArray(n));
}

u(w, "isWrappable");

function b(n, e = new Set()) {
  let t, i, r, o;
  if (t = n != null && n[N]) return t;
  if (!w(n) || e.has(n)) return n;

  if (Array.isArray(n)) {
    Object.isFrozen(n) ? n = n.slice(0) : e.add(n);

    for (let c = 0, l = n.length; c < l; c++) r = n[c], (i = b(r, e)) !== r && (n[c] = i);
  } else {
    Object.isFrozen(n) ? n = Object.assign({}, n) : e.add(n);
    let c = Object.keys(n),
        l = Object.getOwnPropertyDescriptors(n);

    for (let f = 0, s = c.length; f < s; f++) o = c[f], !l[o].get && (r = n[o], (i = b(r, e)) !== r && (n[o] = i));
  }

  return n;
}

u(b, "unwrap");

function M(n) {
  let e = n[S];
  return e || Object.defineProperty(n, S, {
    value: e = {}
  }), e;
}

u(M, "getDataNodes");

function $(n, e, t) {
  return n[e] || (n[e] = I(t, !0));
}

u($, "getDataNode");

function x(n, e) {
  let t = Reflect.getOwnPropertyDescriptor(n, e);
  return !t || t.get || !t.configurable || e === A || e === S || e === Y || (delete t.value, delete t.writable, t.get = () => n[A][e]), t;
}

u(x, "proxyDescriptor");

function E(n) {
  if (T()) {
    let e = M(n);
    (e._ || (e._ = I()))();
  }
}

u(E, "trackSelf");

function z(n) {
  return E(n), Reflect.ownKeys(n);
}

u(z, "ownKeys");

function I(n, e) {
  let [t, i] = X(n, e ? {
    internal: !0
  } : {
    equals: !1,
    internal: !0
  });
  return t.$ = i, t;
}

u(I, "createDataNode");
var B = {
  get(n, e, t) {
    if (e === N) return n;
    if (e === A) return t;
    if (e === F) return E(n);
    let i = M(n),
        r = i[e],
        o = r ? i[e]() : n[e];
    if (e === S || e === "__proto__") return o;

    if (!r) {
      let c = Object.getOwnPropertyDescriptor(n, e);
      T() && (typeof o != "function" || n.hasOwnProperty(e)) && !(c && c.get) && (o = $(i, e, o)());
    }

    return w(o) ? W(o) : o;
  },

  set() {
    return !0;
  },

  deleteProperty() {
    return !0;
  },

  ownKeys: z,
  getOwnPropertyDescriptor: x
};

function y(n, e, t) {
  if (n[e] === t) return;
  let i = n[e],
      r = n.length;
  t === void 0 ? delete n[e] : n[e] = t;
  let o = M(n),
      c;
  (c = $(o, e, i)) && c.$(() => t), Array.isArray(n) && n.length !== r && (c = $(o, "length", r)) && c.$(n.length), (c = o._) && c.$();
}

u(y, "setProperty");

function q(n, e) {
  let t = Object.keys(e);

  for (let i = 0; i < t.length; i += 1) {
    let r = t[i];
    y(n, r, e[r]);
  }
}

u(q, "mergeStoreNode");

function G(n, e) {
  if (typeof e == "function" && (e = e(n)), e = b(e), Array.isArray(e)) {
    if (n === e) return;
    let t = 0,
        i = e.length;

    for (; t < i; t++) {
      let r = e[t];
      n[t] !== r && y(n, t, r);
    }

    y(n, "length", i);
  } else q(n, e);
}

u(G, "updateArray");

function _(n, e, t = []) {
  let i,
      r = n;

  if (e.length > 1) {
    i = e.shift();
    let c = typeof i,
        l = Array.isArray(n);

    if (Array.isArray(i)) {
      for (let f = 0; f < i.length; f++) _(n, [i[f]].concat(e), t);

      return;
    } else if (l && c === "function") {
      for (let f = 0; f < n.length; f++) i(n[f], f) && _(n, [f].concat(e), t);

      return;
    } else if (l && c === "object") {
      let {
        from: f = 0,
        to: s = n.length - 1,
        by: d = 1
      } = i;

      for (let h = f; h <= s; h += d) _(n, [h].concat(e), t);

      return;
    } else if (e.length > 1) {
      _(n[i], e, [i].concat(t));

      return;
    }

    r = n[i], t = [i].concat(t);
  }

  let o = e[0];
  typeof o == "function" && (o = o(r, t), o === r) || i === void 0 && o == null || (o = b(o), i === void 0 || w(r) && w(o) && !Array.isArray(o) ? q(r, o) : y(n, i, o));
}

u(_, "updatePath");

function U(n, e) {
  let t = b(n || {}),
      i = Array.isArray(t),
      r = W(t);

  function o(...c) {
    a(() => {
      i && c.length === 1 ? G(t, c[0]) : _(t, c);
    });
  }

  return u(o, "setStore"), [r, o];
}

u(U, "createStore");
var H = {
  get(n, e, t) {
    if (e === N) return n;
    if (e === A) return t;
    if (e === F) return E(n);
    let i = M(n),
        r = i[e],
        o = r ? i[e]() : n[e];
    if (e === S || e === "__proto__") return o;

    if (!r) {
      let c = Object.getOwnPropertyDescriptor(n, e),
          l = typeof o == "function";
      if (T() && (!l || n.hasOwnProperty(e)) && !(c && c.get)) o = $(i, e, o)();else if (o != null && l && o === Array.prototype[e]) return (...f) => a(() => Array.prototype[e].apply(t, f));
    }

    return w(o) ? C(o) : o;
  },

  set(n, e, t) {
    return y(n, e, b(t)), !0;
  },

  deleteProperty(n, e) {
    return y(n, e, void 0), !0;
  },

  ownKeys: z,
  getOwnPropertyDescriptor: x
};

function C(n, e) {
  let t = n[A];

  if (!t) {
    Object.defineProperty(n, A, {
      value: t = new Proxy(n, H)
    });
    let i = Object.keys(n),
        r = Object.getOwnPropertyDescriptors(n);

    for (let o = 0, c = i.length; o < c; o++) {
      let l = i[o];

      if (r[l].get) {
        let f = r[l].get.bind(t);
        Object.defineProperty(n, l, {
          get: f
        });
      }

      if (r[l].set) {
        let f = r[l].set;
        Object.defineProperty(n, l, {
          set: u(d => a(() => f.call(t, d)), "set")
        });
      }
    }
  }

  return t;
}

u(C, "wrap");

function Z(n, e) {
  let t = b(n || {});
  return C(t);
}

u(Z, "createMutable");

function k(n, e) {
  a(() => e(b(n)));
}

u(k, "modifyMutable");

function g(n, e, t, i, r) {
  let o = e[t];
  if (n === o) return;

  if (!w(n) || !w(o) || r && n[r] !== o[r]) {
    n !== o && y(e, t, n);
    return;
  }

  if (Array.isArray(n)) {
    if (n.length && o.length && (!i || r && n[0][r] != null)) {
      let f, s, d, h, O, p, R, P;

      for (d = 0, h = Math.min(o.length, n.length); d < h && (o[d] === n[d] || r && o[d][r] === n[d][r]); d++) g(n[d], o, d, i, r);

      let j = new Array(n.length),
          D = new Map();

      for (h = o.length - 1, O = n.length - 1; h >= d && O >= d && (o[h] === n[O] || r && o[h][r] === n[O][r]); h--, O--) j[O] = o[h];

      if (d > O || d > h) {
        for (s = d; s <= O; s++) y(o, s, n[s]);

        for (; s < n.length; s++) y(o, s, j[s]), g(n[s], o, s, i, r);

        o.length > n.length && y(o, "length", n.length);
        return;
      }

      for (R = new Array(O + 1), s = O; s >= d; s--) p = n[s], P = r ? p[r] : p, f = D.get(P), R[s] = f === void 0 ? -1 : f, D.set(P, s);

      for (f = d; f <= h; f++) p = o[f], P = r ? p[r] : p, s = D.get(P), s !== void 0 && s !== -1 && (j[s] = o[f], s = R[s], D.set(P, s));

      for (s = d; s < n.length; s++) s in j ? (y(o, s, j[s]), g(n[s], o, s, i, r)) : y(o, s, n[s]);
    } else for (let f = 0, s = n.length; f < s; f++) g(n[f], o, f, i, r);

    o.length > n.length && y(o, "length", n.length);
    return;
  }

  let c = Object.keys(n);

  for (let f = 0, s = c.length; f < s; f++) g(n[c[f]], o, c[f], i, r);

  let l = Object.keys(o);

  for (let f = 0, s = l.length; f < s; f++) n[l[f]] === void 0 && y(o, l[f], void 0);
}

u(g, "applyState");

function v(n, e = {}) {
  let {
    merge: t,
    key: i = "id"
  } = e,
      r = b(n);
  return o => !w(o) || !w(r) ? r : (a(() => g(r, {
    state: o
  }, "state", t, i)), o);
}

u(v, "reconcile");
var K = new WeakMap(),
    L = {
  get(n, e) {
    if (e === N) return n;
    let t = n[e],
        i;
    return w(t) ? K.get(t) || (K.set(t, i = new Proxy(t, L)), i) : t;
  },

  set(n, e, t) {
    return y(n, e, b(t)), !0;
  },

  deleteProperty(n, e) {
    return y(n, e, void 0), !0;
  }

};

function m(n) {
  return e => {
    if (w(e)) {
      let t;
      (t = K.get(e)) || K.set(e, t = new Proxy(e, L)), n(t);
    }

    return e;
  };
}

u(m, "produce");
export { N as $RAW, Z as createMutable, U as createStore, k as modifyMutable, m as produce, v as reconcile, b as unwrap };