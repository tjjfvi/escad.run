/* esm.sh - esbuild bundle(@jridgewell/resolve-uri@3.0.7) esnext production */
var v = Object.defineProperty;

var i = (t, r) => v(t, "name", {
  value: r,
  configurable: !0
});

var P = /^[\w+.-]+:\/\//,
    d = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?/,
    x = /^file:(?:\/\/((?![a-z]:)[^/]*)?)?(\/?.*)/i;

function U(t) {
  return P.test(t);
}

i(U, "isAbsoluteUrl");

function W(t) {
  return t.startsWith("//");
}

i(W, "isSchemeRelativeUrl");

function u(t) {
  return t.startsWith("/");
}

i(u, "isAbsolutePath");

function g(t) {
  return t.startsWith("file:");
}

i(g, "isFileUrl");

function l(t) {
  let r = d.exec(t);
  return p(r[1], r[2] || "", r[3], r[4] || "", r[5] || "/");
}

i(l, "parseAbsoluteUrl");

function R(t) {
  let r = x.exec(t),
      e = r[2];
  return p("file:", "", r[1] || "", "", u(e) ? e : "/" + e);
}

i(R, "parseFileUrl");

function p(t, r, e, s, o) {
  return {
    scheme: t,
    user: r,
    host: e,
    port: s,
    path: o,
    relativePath: !1
  };
}

i(p, "makeUrl");

function f(t) {
  if (W(t)) {
    let e = l("http:" + t);
    return e.scheme = "", e;
  }

  if (u(t)) {
    let e = l("http://foo.com" + t);
    return e.scheme = "", e.host = "", e;
  }

  if (g(t)) return R(t);
  if (U(t)) return l(t);
  let r = l("http://foo.com/" + t);
  return r.scheme = "", r.host = "", r.relativePath = !0, r;
}

i(f, "parseUrl");

function $(t) {
  if (t.endsWith("/..")) return t;
  let r = t.lastIndexOf("/");
  return t.slice(0, r + 1);
}

i($, "stripPathFilename");

function k(t, r) {
  !t.relativePath || (m(r), t.path === "/" ? t.path = r.path : t.path = $(r.path) + t.path, t.relativePath = r.relativePath);
}

i(k, "mergePaths");

function m(t) {
  let {
    relativePath: r
  } = t,
      e = t.path.split("/"),
      s = 1,
      o = 0,
      a = !1;

  for (let n = 1; n < e.length; n++) {
    let c = e[n];

    if (!c) {
      a = !0;
      continue;
    }

    if (a = !1, c !== ".") {
      if (c === "..") {
        o ? (a = !0, o--, s--) : r && (e[s++] = c);
        continue;
      }

      e[s++] = c, o++;
    }
  }

  let h = "";

  for (let n = 1; n < s; n++) h += "/" + e[n];

  (!h || a && !h.endsWith("/..")) && (h += "/"), t.path = h;
}

i(m, "normalizePath");

function F(t, r) {
  if (!t && !r) return "";
  let e = f(t);

  if (r && !e.scheme) {
    let s = f(r);
    e.scheme = s.scheme, e.host || (e.user = s.user, e.host = s.host, e.port = s.port), k(e, s);
  }

  if (m(e), e.relativePath) {
    let s = e.path.slice(1);
    return s ? !(r || t).startsWith(".") || s.startsWith(".") ? s : "./" + s : ".";
  }

  return !e.scheme && !e.host ? e.path : `${e.scheme}//${e.user}${e.host}${e.port}${e.path}`;
}

i(F, "resolve");
export { F as default };