/* esm.sh - esbuild bundle(solid-js@1.4.3/store) esnext production */
import { $PROXY as b, $TRACK as E, getListener as R, batch as S, createSignal as L } from "/transpiled/https://esm.sh/v96/solid-js@1.4.3/esnext/solid-js.js";

var K = Symbol("store-raw"),
    _ = Symbol("store-node"),
    V = Symbol("store-name");

function F(n, e) {
  let t = n[b];

  if (!t) {
    Object.defineProperty(n, b, {
      value: t = new Proxy(n, X)
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

function h(n) {
  return n != null && typeof n == "object" && (n[b] || !n.__proto__ || n.__proto__ === Object.prototype || Array.isArray(n));
}

function O(n, e = new Set()) {
  let t, i, r, o;
  if (t = n != null && n[K]) return t;
  if (!h(n) || e.has(n)) return n;

  if (Array.isArray(n)) {
    Object.isFrozen(n) ? n = n.slice(0) : e.add(n);

    for (let c = 0, l = n.length; c < l; c++) r = n[c], (i = O(r, e)) !== r && (n[c] = i);
  } else {
    Object.isFrozen(n) ? n = Object.assign({}, n) : e.add(n);
    let c = Object.keys(n),
        l = Object.getOwnPropertyDescriptors(n);

    for (let f = 0, s = c.length; f < s; f++) o = c[f], !l[o].get && (r = n[o], (i = O(r, e)) !== r && (n[o] = i));
  }

  return n;
}

function N(n) {
  let e = n[_];
  return e || Object.defineProperty(n, _, {
    value: e = {}
  }), e;
}

function D(n, e, t) {
  return n[e] || (n[e] = z(t, !0));
}

function W(n, e) {
  let t = Reflect.getOwnPropertyDescriptor(n, e);
  return !t || t.get || !t.configurable || e === b || e === _ || e === V || (delete t.value, delete t.writable, t.get = () => n[b][e]), t;
}

function T(n) {
  if (R()) {
    let e = N(n);
    (e._ || (e._ = z()))();
  }
}

function x(n) {
  return T(n), Reflect.ownKeys(n);
}

function z(n, e) {
  let [t, i] = L(n, e ? {
    internal: !0
  } : {
    equals: !1,
    internal: !0
  });
  return t.$ = i, t;
}

var X = {
  get(n, e, t) {
    if (e === K) return n;
    if (e === b) return t;
    if (e === E) return T(n);
    let i = N(n),
        r = i[e],
        o = r ? i[e]() : n[e];
    if (e === _ || e === "__proto__") return o;

    if (!r) {
      let c = Object.getOwnPropertyDescriptor(n, e);
      R() && (typeof o != "function" || n.hasOwnProperty(e)) && !(c && c.get) && (o = D(i, e, o)());
    }

    return h(o) ? F(o) : o;
  },

  set() {
    return !0;
  },

  deleteProperty() {
    return !0;
  },

  ownKeys: x,
  getOwnPropertyDescriptor: W
};

function d(n, e, t) {
  if (n[e] === t) return;
  let i = n[e],
      r = n.length;
  t === void 0 ? delete n[e] : n[e] = t;
  let o = N(n),
      c;
  (c = D(o, e, i)) && c.$(() => t), Array.isArray(n) && n.length !== r && (c = D(o, "length", r)) && c.$(n.length), (c = o._) && c.$();
}

function I(n, e) {
  let t = Object.keys(e);

  for (let i = 0; i < t.length; i += 1) {
    let r = t[i];
    d(n, r, e[r]);
  }
}

function Y(n, e) {
  if (typeof e == "function" && (e = e(n)), e = O(e), Array.isArray(e)) {
    if (n === e) return;
    let t = 0,
        i = e.length;

    for (; t < i; t++) {
      let r = e[t];
      n[t] !== r && d(n, t, r);
    }

    d(n, "length", i);
  } else I(n, e);
}

function j(n, e, t = []) {
  let i,
      r = n;

  if (e.length > 1) {
    i = e.shift();
    let c = typeof i,
        l = Array.isArray(n);

    if (Array.isArray(i)) {
      for (let f = 0; f < i.length; f++) j(n, [i[f]].concat(e), t);

      return;
    } else if (l && c === "function") {
      for (let f = 0; f < n.length; f++) i(n[f], f) && j(n, [f].concat(e), t);

      return;
    } else if (l && c === "object") {
      let {
        from: f = 0,
        to: s = n.length - 1,
        by: u = 1
      } = i;

      for (let y = f; y <= s; y += u) j(n, [y].concat(e), t);

      return;
    } else if (e.length > 1) {
      j(n[i], e, [i].concat(t));
      return;
    }

    r = n[i], t = [i].concat(t);
  }

  let o = e[0];
  typeof o == "function" && (o = o(r, t), o === r) || i === void 0 && o == null || (o = O(o), i === void 0 || h(r) && h(o) && !Array.isArray(o) ? I(r, o) : d(n, i, o));
}

function H(n, e) {
  let t = O(n || {}),
      i = Array.isArray(t),
      r = F(t);

  function o(...c) {
    S(() => {
      i && c.length === 1 ? Y(t, c[0]) : j(t, c);
    });
  }

  return [r, o];
}

var B = {
  get(n, e, t) {
    if (e === K) return n;
    if (e === b) return t;
    if (e === E) return T(n);
    let i = N(n),
        r = i[e],
        o = r ? i[e]() : n[e];
    if (e === _ || e === "__proto__") return o;

    if (!r) {
      let c = Object.getOwnPropertyDescriptor(n, e),
          l = typeof o == "function";
      if (R() && (!l || n.hasOwnProperty(e)) && !(c && c.get)) o = D(i, e, o)();else if (o != null && l && o === Array.prototype[e]) return (...f) => S(() => Array.prototype[e].apply(t, f));
    }

    return h(o) ? q(o) : o;
  },

  set(n, e, t) {
    return d(n, e, O(t)), !0;
  },

  deleteProperty(n, e) {
    return d(n, e, void 0), !0;
  },

  ownKeys: x,
  getOwnPropertyDescriptor: W
};

function q(n, e) {
  let t = n[b];

  if (!t) {
    Object.defineProperty(n, b, {
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

      if (r[l].set) {
        let f = r[l].set;
        Object.defineProperty(n, l, {
          set: u => S(() => f.call(t, u))
        });
      }
    }
  }

  return t;
}

function J(n, e) {
  let t = O(n || {});
  return q(t);
}

function Q(n, e) {
  S(() => e(O(n)));
}

function P(n, e, t, i, r) {
  let o = e[t];
  if (n === o) return;

  if (!h(n) || !h(o) || r && n[r] !== o[r]) {
    n !== o && d(e, t, n);
    return;
  }

  if (Array.isArray(n)) {
    if (n.length && o.length && (!i || r && n[0][r] != null)) {
      let f, s, u, y, w, A, M, p;

      for (u = 0, y = Math.min(o.length, n.length); u < y && (o[u] === n[u] || r && o[u][r] === n[u][r]); u++) P(n[u], o, u, i, r);

      let g = new Array(n.length),
          a = new Map();

      for (y = o.length - 1, w = n.length - 1; y >= u && w >= u && (o[y] === n[w] || r && o[y][r] === n[w][r]); y--, w--) g[w] = o[y];

      if (u > w || u > y) {
        for (s = u; s <= w; s++) d(o, s, n[s]);

        for (; s < n.length; s++) d(o, s, g[s]), P(n[s], o, s, i, r);

        o.length > n.length && d(o, "length", n.length);
        return;
      }

      for (M = new Array(w + 1), s = w; s >= u; s--) A = n[s], p = r ? A[r] : A, f = a.get(p), M[s] = f === void 0 ? -1 : f, a.set(p, s);

      for (f = u; f <= y; f++) A = o[f], p = r ? A[r] : A, s = a.get(p), s !== void 0 && s !== -1 && (g[s] = o[f], s = M[s], a.set(p, s));

      for (s = u; s < n.length; s++) s in g ? (d(o, s, g[s]), P(n[s], o, s, i, r)) : d(o, s, n[s]);
    } else for (let f = 0, s = n.length; f < s; f++) P(n[f], o, f, i, r);

    o.length > n.length && d(o, "length", n.length);
    return;
  }

  let c = Object.keys(n);

  for (let f = 0, s = c.length; f < s; f++) P(n[c[f]], o, c[f], i, r);

  let l = Object.keys(o);

  for (let f = 0, s = l.length; f < s; f++) n[l[f]] === void 0 && d(o, l[f], void 0);
}

function U(n, e = {}) {
  let {
    merge: t,
    key: i = "id"
  } = e,
      r = O(n);
  return o => !h(o) || !h(r) ? r : (S(() => P(r, {
    state: o
  }, "state", t, i)), o);
}

var $ = new WeakMap(),
    C = {
  get(n, e) {
    if (e === K) return n;
    let t = n[e],
        i;
    return h(t) ? $.get(t) || ($.set(t, i = new Proxy(t, C)), i) : t;
  },

  set(n, e, t) {
    return d(n, e, O(t)), !0;
  },

  deleteProperty(n, e) {
    return d(n, e, void 0), !0;
  }

};

function Z(n) {
  return e => {
    if (h(e)) {
      let t;
      (t = $.get(e)) || $.set(e, t = new Proxy(e, C)), n(t);
    }

    return e;
  };
}

export { K as $RAW, J as createMutable, H as createStore, Q as modifyMutable, Z as produce, U as reconcile, O as unwrap };