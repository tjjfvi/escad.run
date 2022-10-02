/* esm.sh - esbuild bundle(@jridgewell/resolve-uri@3.1.0) esnext production */
var R = /^[\w+.-]+:\/\//,
    A = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/,
    y = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i,
    a;

(function (t) {
  t[t.Empty = 1] = "Empty", t[t.Hash = 2] = "Hash", t[t.Query = 3] = "Query", t[t.RelativePath = 4] = "RelativePath", t[t.AbsolutePath = 5] = "AbsolutePath", t[t.SchemeRelative = 6] = "SchemeRelative", t[t.Absolute = 7] = "Absolute";
})(a || (a = {}));

function d(t) {
  return R.test(t);
}

function b(t) {
  return t.startsWith("//");
}

function p(t) {
  return t.startsWith("/");
}

function x(t) {
  return t.startsWith("file:");
}

function f(t) {
  return /^[.?#]/.test(t);
}

function l(t) {
  let s = A.exec(t);
  return v(s[1], s[2] || "", s[3], s[4] || "", s[5] || "/", s[6] || "", s[7] || "");
}

function W(t) {
  let s = y.exec(t),
      e = s[2];
  return v("file:", "", s[1] || "", "", p(e) ? e : "/" + e, s[3] || "", s[4] || "");
}

function v(t, s, e, h, i, r, n) {
  return {
    scheme: t,
    user: s,
    host: e,
    port: h,
    path: i,
    query: r,
    hash: n,
    type: a.Absolute
  };
}

function m(t) {
  if (b(t)) {
    let e = l("http:" + t);
    return e.scheme = "", e.type = a.SchemeRelative, e;
  }

  if (p(t)) {
    let e = l("http://foo.com" + t);
    return e.scheme = "", e.host = "", e.type = a.AbsolutePath, e;
  }

  if (x(t)) return W(t);
  if (d(t)) return l(t);
  let s = l("http://foo.com/" + t);
  return s.scheme = "", s.host = "", s.type = t ? t.startsWith("?") ? a.Query : t.startsWith("#") ? a.Hash : a.RelativePath : a.Empty, s;
}

function g(t) {
  if (t.endsWith("/..")) return t;
  let s = t.lastIndexOf("/");
  return t.slice(0, s + 1);
}

function H(t, s) {
  P(s, s.type), t.path === "/" ? t.path = s.path : t.path = g(s.path) + t.path;
}

function P(t, s) {
  let e = s <= a.RelativePath,
      h = t.path.split("/"),
      i = 1,
      r = 0,
      n = !1;

  for (let c = 1; c < h.length; c++) {
    let u = h[c];

    if (!u) {
      n = !0;
      continue;
    }

    if (n = !1, u !== ".") {
      if (u === "..") {
        r ? (n = !0, r--, i--) : e && (h[i++] = u);
        continue;
      }

      h[i++] = u, r++;
    }
  }

  let o = "";

  for (let c = 1; c < i; c++) o += "/" + h[c];

  (!o || n && !o.endsWith("/..")) && (o += "/"), t.path = o;
}

function S(t, s) {
  if (!t && !s) return "";
  let e = m(t),
      h = e.type;

  if (s && h !== a.Absolute) {
    let r = m(s),
        n = r.type;

    switch (h) {
      case a.Empty:
        e.hash = r.hash;

      case a.Hash:
        e.query = r.query;

      case a.Query:
      case a.RelativePath:
        H(e, r);

      case a.AbsolutePath:
        e.user = r.user, e.host = r.host, e.port = r.port;

      case a.SchemeRelative:
        e.scheme = r.scheme;
    }

    n > h && (h = n);
  }

  P(e, h);
  let i = e.query + e.hash;

  switch (h) {
    case a.Hash:
    case a.Query:
      return i;

    case a.RelativePath:
      {
        let r = e.path.slice(1);
        return r ? f(s || t) && !f(r) ? "./" + r + i : r + i : i || ".";
      }

    case a.AbsolutePath:
      return e.path + i;

    default:
      return e.scheme + "//" + e.user + e.host + e.port + e.path + i;
  }
}

export { S as default };