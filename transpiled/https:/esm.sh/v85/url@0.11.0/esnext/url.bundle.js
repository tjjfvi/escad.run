/* esm.sh - esbuild bundle(url@0.11.0) esnext production */
import __querystring$ from "/transpiled/https://esm.sh/v85/querystring-es3@0.2.1/esnext/querystring-es3.bundle.js";
import __punycode$ from "/transpiled/https://esm.sh/v85/punycode@1.3.2/esnext/punycode.bundle.js";
var st = Object.create;
var _ = Object.defineProperty;
var ht = Object.getOwnPropertyDescriptor;
var et = Object.getOwnPropertyNames;
var rt = Object.getPrototypeOf,
    ot = Object.prototype.hasOwnProperty;

var C = (t, e) => _(t, "name", {
  value: e,
  configurable: !0
}),
    G = (t => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(t, {
  get: (e, s) => (typeof require != "undefined" ? require : e)[s]
}) : t)(function (t) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});

var J = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);

var at = (t, e, s, i) => {
  if (e && typeof e == "object" || typeof e == "function") for (let o of et(e)) !ot.call(t, o) && o !== s && _(t, o, {
    get: () => e[o],
    enumerable: !(i = ht(e, o)) || i.enumerable
  });
  return t;
};

var K = (t, e, s) => (s = t != null ? st(rt(t)) : {}, at(e || !t || !t.__esModule ? _(s, "default", {
  value: t,
  enumerable: !0
}) : s, t));

var W = J((jt, V) => {
  "use strict";

  V.exports = {
    isString: function (t) {
      return typeof t == "string";
    },
    isObject: function (t) {
      return typeof t == "object" && t !== null;
    },
    isNull: function (t) {
      return t === null;
    },
    isNullOrUndefined: function (t) {
      return t == null;
    }
  };
});
var D = J(U => {
  "use strict";

  var nt = __punycode$,
      b = W();
  U.parse = w;
  U.resolve = qt;
  U.resolveObject = Ot;
  U.format = yt;
  U.Url = p;

  function p() {
    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
  }

  C(p, "Url");
  var it = /^([a-z0-9.+-]+:)/i,
      ft = /:[0-9]*$/,
      ut = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
      ct = ["<", ">", '"', "`", " ", "\r", `
`, "	"],
      lt = ["{", "}", "|", "\\", "^", "`"].concat(ct),
      F = ["'"].concat(lt),
      X = ["%", "/", "?", ";", "#"].concat(F),
      Y = ["/", "?", "#"],
      pt = 255,
      H = /^[+a-z0-9A-Z_-]{0,63}$/,
      mt = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
      gt = {
    javascript: !0,
    "javascript:": !0
  },
      M = {
    javascript: !0,
    "javascript:": !0
  },
      P = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0
  },
      B = __querystring$;

  function w(t, e, s) {
    if (t && b.isObject(t) && t instanceof p) return t;
    var i = new p();
    return i.parse(t, e, s), i;
  }

  C(w, "urlParse");

  p.prototype.parse = function (t, e, s) {
    if (!b.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
    var i = t.indexOf("?"),
        o = i !== -1 && i < t.indexOf("#") ? "?" : "#",
        y = t.split(o),
        l = /\\/g;
    y[0] = y[0].replace(l, "/"), t = y.join(o);
    var h = t;

    if (h = h.trim(), !s && t.split("#").length === 1) {
      var d = ut.exec(h);
      if (d) return this.path = h, this.href = h, this.pathname = d[1], d[2] ? (this.search = d[2], e ? this.query = B.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : e && (this.search = "", this.query = {}), this;
    }

    var u = it.exec(h);

    if (u) {
      u = u[0];
      var A = u.toLowerCase();
      this.protocol = A, h = h.substr(u.length);
    }

    if (s || u || h.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var I = h.substr(0, 2) === "//";
      I && !(u && M[u]) && (h = h.substr(2), this.slashes = !0);
    }

    if (!M[u] && (I || u && !P[u])) {
      for (var f = -1, a = 0; a < Y.length; a++) {
        var x = h.indexOf(Y[a]);
        x !== -1 && (f === -1 || x < f) && (f = x);
      }

      var R, c;
      f === -1 ? c = h.lastIndexOf("@") : c = h.lastIndexOf("@", f), c !== -1 && (R = h.slice(0, c), h = h.slice(c + 1), this.auth = decodeURIComponent(R)), f = -1;

      for (var a = 0; a < X.length; a++) {
        var x = h.indexOf(X[a]);
        x !== -1 && (f === -1 || x < f) && (f = x);
      }

      f === -1 && (f = h.length), this.host = h.slice(0, f), h = h.slice(f), this.parseHost(), this.hostname = this.hostname || "";
      var $ = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!$) for (var r = this.hostname.split(/\./), a = 0, n = r.length; a < n; a++) {
        var q = r[a];

        if (!!q && !q.match(H)) {
          for (var m = "", g = 0, L = q.length; g < L; g++) q.charCodeAt(g) > 127 ? m += "x" : m += q[g];

          if (!m.match(H)) {
            var j = r.slice(0, a),
                O = r.slice(a + 1),
                v = q.match(mt);
            v && (j.push(v[1]), O.unshift(v[2])), O.length && (h = "/" + O.join(".") + h), this.hostname = j.join(".");
            break;
          }
        }
      }
      this.hostname.length > pt ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), $ || (this.hostname = nt.toASCII(this.hostname));
      var S = this.port ? ":" + this.port : "",
          E = this.hostname || "";
      this.host = E + S, this.href += this.host, $ && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), h[0] !== "/" && (h = "/" + h));
    }

    if (!gt[A]) for (var a = 0, n = F.length; a < n; a++) {
      var N = F[a];

      if (h.indexOf(N) !== -1) {
        var T = encodeURIComponent(N);
        T === N && (T = escape(N)), h = h.split(N).join(T);
      }
    }
    var Z = h.indexOf("#");
    Z !== -1 && (this.hash = h.substr(Z), h = h.slice(0, Z));
    var z = h.indexOf("?");

    if (z !== -1 ? (this.search = h.substr(z), this.query = h.substr(z + 1), e && (this.query = B.parse(this.query)), h = h.slice(0, z)) : e && (this.search = "", this.query = {}), h && (this.pathname = h), P[A] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
      var S = this.pathname || "",
          tt = this.search || "";
      this.path = S + tt;
    }

    return this.href = this.format(), this;
  };

  function yt(t) {
    return b.isString(t) && (t = w(t)), t instanceof p ? t.format() : p.prototype.format.call(t);
  }

  C(yt, "urlFormat");

  p.prototype.format = function () {
    var t = this.auth || "";
    t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
    var e = this.protocol || "",
        s = this.pathname || "",
        i = this.hash || "",
        o = !1,
        y = "";
    this.host ? o = t + this.host : this.hostname && (o = t + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && b.isObject(this.query) && Object.keys(this.query).length && (y = B.stringify(this.query));
    var l = this.search || y && "?" + y || "";
    return e && e.substr(-1) !== ":" && (e += ":"), this.slashes || (!e || P[e]) && o !== !1 ? (o = "//" + (o || ""), s && s.charAt(0) !== "/" && (s = "/" + s)) : o || (o = ""), i && i.charAt(0) !== "#" && (i = "#" + i), l && l.charAt(0) !== "?" && (l = "?" + l), s = s.replace(/[?#]/g, function (h) {
      return encodeURIComponent(h);
    }), l = l.replace("#", "%23"), e + o + s + l + i;
  };

  function qt(t, e) {
    return w(t, !1, !0).resolve(e);
  }

  C(qt, "urlResolve");

  p.prototype.resolve = function (t) {
    return this.resolveObject(w(t, !1, !0)).format();
  };

  function Ot(t, e) {
    return t ? w(t, !1, !0).resolveObject(e) : e;
  }

  C(Ot, "urlResolveObject");

  p.prototype.resolveObject = function (t) {
    if (b.isString(t)) {
      var e = new p();
      e.parse(t, !1, !0), t = e;
    }

    for (var s = new p(), i = Object.keys(this), o = 0; o < i.length; o++) {
      var y = i[o];
      s[y] = this[y];
    }

    if (s.hash = t.hash, t.href === "") return s.href = s.format(), s;

    if (t.slashes && !t.protocol) {
      for (var l = Object.keys(t), h = 0; h < l.length; h++) {
        var d = l[h];
        d !== "protocol" && (s[d] = t[d]);
      }

      return P[s.protocol] && s.hostname && !s.pathname && (s.path = s.pathname = "/"), s.href = s.format(), s;
    }

    if (t.protocol && t.protocol !== s.protocol) {
      if (!P[t.protocol]) {
        for (var u = Object.keys(t), A = 0; A < u.length; A++) {
          var I = u[A];
          s[I] = t[I];
        }

        return s.href = s.format(), s;
      }

      if (s.protocol = t.protocol, !t.host && !M[t.protocol]) {
        for (var n = (t.pathname || "").split("/"); n.length && !(t.host = n.shift()););

        t.host || (t.host = ""), t.hostname || (t.hostname = ""), n[0] !== "" && n.unshift(""), n.length < 2 && n.unshift(""), s.pathname = n.join("/");
      } else s.pathname = t.pathname;

      if (s.search = t.search, s.query = t.query, s.host = t.host || "", s.auth = t.auth, s.hostname = t.hostname || t.host, s.port = t.port, s.pathname || s.search) {
        var f = s.pathname || "",
            a = s.search || "";
        s.path = f + a;
      }

      return s.slashes = s.slashes || t.slashes, s.href = s.format(), s;
    }

    var x = s.pathname && s.pathname.charAt(0) === "/",
        R = t.host || t.pathname && t.pathname.charAt(0) === "/",
        c = R || x || s.host && t.pathname,
        $ = c,
        r = s.pathname && s.pathname.split("/") || [],
        n = t.pathname && t.pathname.split("/") || [],
        q = s.protocol && !P[s.protocol];
    if (q && (s.hostname = "", s.port = null, s.host && (r[0] === "" ? r[0] = s.host : r.unshift(s.host)), s.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && (n[0] === "" ? n[0] = t.host : n.unshift(t.host)), t.host = null), c = c && (n[0] === "" || r[0] === "")), R) s.host = t.host || t.host === "" ? t.host : s.host, s.hostname = t.hostname || t.hostname === "" ? t.hostname : s.hostname, s.search = t.search, s.query = t.query, r = n;else if (n.length) r || (r = []), r.pop(), r = r.concat(n), s.search = t.search, s.query = t.query;else if (!b.isNullOrUndefined(t.search)) {
      if (q) {
        s.hostname = s.host = r.shift();
        var m = s.host && s.host.indexOf("@") > 0 ? s.host.split("@") : !1;
        m && (s.auth = m.shift(), s.host = s.hostname = m.shift());
      }

      return s.search = t.search, s.query = t.query, (!b.isNull(s.pathname) || !b.isNull(s.search)) && (s.path = (s.pathname ? s.pathname : "") + (s.search ? s.search : "")), s.href = s.format(), s;
    }
    if (!r.length) return s.pathname = null, s.search ? s.path = "/" + s.search : s.path = null, s.href = s.format(), s;

    for (var g = r.slice(-1)[0], L = (s.host || t.host || r.length > 1) && (g === "." || g === "..") || g === "", j = 0, O = r.length; O >= 0; O--) g = r[O], g === "." ? r.splice(O, 1) : g === ".." ? (r.splice(O, 1), j++) : j && (r.splice(O, 1), j--);

    if (!c && !$) for (; j--; j) r.unshift("..");
    c && r[0] !== "" && (!r[0] || r[0].charAt(0) !== "/") && r.unshift(""), L && r.join("/").substr(-1) !== "/" && r.push("");
    var v = r[0] === "" || r[0] && r[0].charAt(0) === "/";

    if (q) {
      s.hostname = s.host = v ? "" : r.length ? r.shift() : "";
      var m = s.host && s.host.indexOf("@") > 0 ? s.host.split("@") : !1;
      m && (s.auth = m.shift(), s.host = s.hostname = m.shift());
    }

    return c = c || s.host && r.length, c && !v && r.unshift(""), r.length ? s.pathname = r.join("/") : (s.pathname = null, s.path = null), (!b.isNull(s.pathname) || !b.isNull(s.search)) && (s.path = (s.pathname ? s.pathname : "") + (s.search ? s.search : "")), s.auth = t.auth || s.auth, s.slashes = s.slashes || t.slashes, s.href = s.format(), s;
  };

  p.prototype.parseHost = function () {
    var t = this.host,
        e = ft.exec(t);
    e && (e = e[0], e !== ":" && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
  };
});
var Q = K(D()),
    k = K(D()),
    {
  parse: vt,
  resolve: Ct,
  resolveObject: Pt,
  format: Ut,
  Url: It
} = k,
    {
  default: bt,
  ...xt
} = k,
    Rt = Q.default ?? bt ?? xt;
export { It as Url, Rt as default, Ut as format, vt as parse, Ct as resolve, Pt as resolveObject };