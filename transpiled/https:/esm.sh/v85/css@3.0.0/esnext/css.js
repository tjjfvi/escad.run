/* esm.sh - esbuild bundle(css@3.0.0) esnext production */
import __path$ from "/transpiled/https://esm.sh/v85/path-browserify@1.0.1/esnext/path-browserify.bundle.js";
import __fs$ from "/transpiled/https://esm.sh/v85/node_fs.js";
import __source_map_resolve$ from "/transpiled/https://esm.sh/v85/source-map-resolve@0.6.0/esnext/source-map-resolve.js";
import { SourceMapGenerator as __source_map$SourceMapGenerator } from "/transpiled/https://esm.sh/v85/source-map@0.6.1/esnext/source-map.js";
import { SourceMapConsumer as __source_map$SourceMapConsumer } from "/transpiled/https://esm.sh/v85/source-map@0.6.1/esnext/source-map.js";
import __inherits$ from "/transpiled/https://esm.sh/v85/inherits@2.0.4/esnext/inherits.js";
var wt = Object.create;
var O = Object.defineProperty;
var Vt = Object.getOwnPropertyDescriptor;
var kt = Object.getOwnPropertyNames;
var qt = Object.getPrototypeOf,
    xt = Object.prototype.hasOwnProperty;

var s = (t, e) => O(t, "name", {
  value: e,
  configurable: !0
}),
    k = (t => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(t, {
  get: (e, n) => (typeof require != "undefined" ? require : e)[n]
}) : t)(function (t) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});

var q = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);

var St = (t, e, n, a) => {
  if (e && typeof e == "object" || typeof e == "function") for (let l of kt(e)) !xt.call(t, l) && l !== n && O(t, l, {
    get: () => e[l],
    enumerable: !(a = Vt(e, l)) || a.enumerable
  });
  return t;
};

var L = (t, e, n) => (n = t != null ? wt(qt(t)) : {}, St(e || !t || !t.__esModule ? O(n, "default", {
  value: t,
  enumerable: !0
}) : n, t));

var N = q((It, B) => {
  var b = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

  B.exports = function (t, e) {
    e = e || {};
    var n = 1,
        a = 1;

    function l(r) {
      var i = r.match(/\n/g);
      i && (n += i.length);
      var o = r.lastIndexOf(`
`);
      a = ~o ? r.length - o : a + r.length;
    }

    s(l, "updatePosition");

    function u() {
      var r = {
        line: n,
        column: a
      };
      return function (i) {
        return i.position = new S(r), z(), i;
      };
    }

    s(u, "position");

    function S(r) {
      this.start = r, this.end = {
        line: n,
        column: a
      }, this.source = e.source;
    }

    s(S, "Position"), S.prototype.content = t;
    var _ = [];

    function p(r) {
      var i = new Error(e.source + ":" + n + ":" + a + ": " + r);
      if (i.reason = r, i.filename = e.source, i.line = n, i.column = a, i.source = t, e.silent) _.push(i);else throw i;
    }

    s(p, "error");

    function rt() {
      var r = x();
      return {
        type: "stylesheet",
        stylesheet: {
          source: e.source,
          rules: r,
          parsingErrors: _
        }
      };
    }

    s(rt, "stylesheet");

    function g() {
      return m(/^{\s*/);
    }

    s(g, "open");

    function w() {
      return m(/^}/);
    }

    s(w, "close");

    function x() {
      var r,
          i = [];

      for (z(), v(i); t.length && t.charAt(0) != "}" && (r = dt() || gt());) r !== !1 && (i.push(r), v(i));

      return i;
    }

    s(x, "rules");

    function m(r) {
      var i = r.exec(t);

      if (!!i) {
        var o = i[0];
        return l(o), t = t.slice(o.length), i;
      }
    }

    s(m, "match");

    function z() {
      m(/^\s*/);
    }

    s(z, "whitespace");

    function v(r) {
      var i;

      for (r = r || []; i = nt();) i !== !1 && r.push(i);

      return r;
    }

    s(v, "comments");

    function nt() {
      var r = u();

      if (!(t.charAt(0) != "/" || t.charAt(1) != "*")) {
        for (var i = 2; t.charAt(i) != "" && (t.charAt(i) != "*" || t.charAt(i + 1) != "/");) ++i;

        if (i += 2, t.charAt(i - 1) === "") return p("End of comment missing");
        var o = t.slice(2, i - 2);
        return a += 2, l(o), t = t.slice(i), a += 2, r({
          type: "comment",
          comment: o
        });
      }
    }

    s(nt, "comment");

    function F() {
      var r = m(/^([^{]+)/);
      if (!!r) return d(r[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (i) {
        return i.replace(/,/g, "\u200C");
      }).split(/\s*(?![^(]*\)),\s*/).map(function (i) {
        return i.replace(/\u200C/g, ",");
      });
    }

    s(F, "selector");

    function M() {
      var r = u(),
          i = m(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);

      if (!!i) {
        if (i = d(i[0]), !m(/^:\s*/)) return p("property missing ':'");
        var o = m(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/),
            c = r({
          type: "declaration",
          property: i.replace(b, ""),
          value: o ? d(o[0]).replace(b, "") : ""
        });
        return m(/^[;\s]*/), c;
      }
    }

    s(M, "declaration");

    function I() {
      var r = [];
      if (!g()) return p("missing '{'");
      v(r);

      for (var i; i = M();) i !== !1 && (r.push(i), v(r));

      return w() ? r : p("missing '}'");
    }

    s(I, "declarations");

    function st() {
      for (var r, i = [], o = u(); r = m(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);) i.push(r[1]), m(/^,\s*/);

      if (!!i.length) return o({
        type: "keyframe",
        values: i,
        declarations: I()
      });
    }

    s(st, "keyframe");

    function ot() {
      var r = u(),
          o = m(/^@([-\w]+)?keyframes\s*/);

      if (!!o) {
        var i = o[1],
            o = m(/^([-\w]+)\s*/);
        if (!o) return p("@keyframes missing name");
        var c = o[1];
        if (!g()) return p("@keyframes missing '{'");

        for (var y, A = v(); y = st();) A.push(y), A = A.concat(v());

        return w() ? r({
          type: "keyframes",
          name: c,
          vendor: i,
          keyframes: A
        }) : p("@keyframes missing '}'");
      }
    }

    s(ot, "atkeyframes");

    function at() {
      var r = u(),
          i = m(/^@supports *([^{]+)/);

      if (!!i) {
        var o = d(i[1]);
        if (!g()) return p("@supports missing '{'");
        var c = v().concat(x());
        return w() ? r({
          type: "supports",
          supports: o,
          rules: c
        }) : p("@supports missing '}'");
      }
    }

    s(at, "atsupports");

    function ut() {
      var r = u(),
          i = m(/^@host\s*/);

      if (!!i) {
        if (!g()) return p("@host missing '{'");
        var o = v().concat(x());
        return w() ? r({
          type: "host",
          rules: o
        }) : p("@host missing '}'");
      }
    }

    s(ut, "athost");

    function pt() {
      var r = u(),
          i = m(/^@media *([^{]+)/);

      if (!!i) {
        var o = d(i[1]);
        if (!g()) return p("@media missing '{'");
        var c = v().concat(x());
        return w() ? r({
          type: "media",
          media: o,
          rules: c
        }) : p("@media missing '}'");
      }
    }

    s(pt, "atmedia");

    function mt() {
      var r = u(),
          i = m(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
      if (!!i) return r({
        type: "custom-media",
        name: d(i[1]),
        media: d(i[2])
      });
    }

    s(mt, "atcustommedia");

    function ct() {
      var r = u(),
          i = m(/^@page */);

      if (!!i) {
        var o = F() || [];
        if (!g()) return p("@page missing '{'");

        for (var c = v(), y; y = M();) c.push(y), c = c.concat(v());

        return w() ? r({
          type: "page",
          selectors: o,
          declarations: c
        }) : p("@page missing '}'");
      }
    }

    s(ct, "atpage");

    function ht() {
      var r = u(),
          i = m(/^@([-\w]+)?document *([^{]+)/);

      if (!!i) {
        var o = d(i[1]),
            c = d(i[2]);
        if (!g()) return p("@document missing '{'");
        var y = v().concat(x());
        return w() ? r({
          type: "document",
          document: c,
          vendor: o,
          rules: y
        }) : p("@document missing '}'");
      }
    }

    s(ht, "atdocument");

    function ft() {
      var r = u(),
          i = m(/^@font-face\s*/);

      if (!!i) {
        if (!g()) return p("@font-face missing '{'");

        for (var o = v(), c; c = M();) o.push(c), o = o.concat(v());

        return w() ? r({
          type: "font-face",
          declarations: o
        }) : p("@font-face missing '}'");
      }
    }

    s(ft, "atfontface");
    var lt = P("import"),
        vt = P("charset"),
        yt = P("namespace");

    function P(r) {
      var i = new RegExp("^@" + r + "\\s*([^;]+);");
      return function () {
        var o = u(),
            c = m(i);

        if (!!c) {
          var y = {
            type: r
          };
          return y[r] = c[1].trim(), o(y);
        }
      };
    }

    s(P, "_compileAtrule");

    function dt() {
      if (t[0] == "@") return ot() || pt() || mt() || at() || lt() || vt() || yt() || ht() || ct() || ut() || ft();
    }

    s(dt, "atrule");

    function gt() {
      var r = u(),
          i = F();
      return i ? (v(), r({
        type: "rule",
        selectors: i,
        declarations: I()
      })) : p("selector missing");
    }

    return s(gt, "rule"), j(rt());
  };

  function d(t) {
    return t ? t.replace(/^\s+|\s+$/g, "") : "";
  }

  s(d, "trim");

  function j(t, e) {
    var n = t && typeof t.type == "string",
        a = n ? t : e;

    for (var l in t) {
      var u = t[l];
      Array.isArray(u) ? u.forEach(function (S) {
        j(S, a);
      }) : u && typeof u == "object" && j(u, a);
    }

    return n && Object.defineProperty(t, "parent", {
      configurable: !0,
      writable: !0,
      enumerable: !1,
      value: e || null
    }), t;
  }

  s(j, "addParent");
});
var E = q((Lt, G) => {
  G.exports = C;

  function C(t) {
    this.options = t || {};
  }

  s(C, "Compiler");

  C.prototype.emit = function (t) {
    return t;
  };

  C.prototype.visit = function (t) {
    return this[t.type](t);
  };

  C.prototype.mapVisit = function (t, e) {
    var n = "";
    e = e || "";

    for (var a = 0, l = t.length; a < l; a++) n += this.visit(t[a]), e && a < l - 1 && (n += this.emit(e));

    return n;
  };
});
var U = q((bt, T) => {
  var J = E(),
      At = __inherits$;
  T.exports = f;

  function f(t) {
    J.call(this, t);
  }

  s(f, "Compiler");
  At(f, J);

  f.prototype.compile = function (t) {
    return t.stylesheet.rules.map(this.visit, this).join("");
  };

  f.prototype.comment = function (t) {
    return this.emit("", t.position);
  };

  f.prototype.import = function (t) {
    return this.emit("@import " + t.import + ";", t.position);
  };

  f.prototype.media = function (t) {
    return this.emit("@media " + t.media, t.position) + this.emit("{") + this.mapVisit(t.rules) + this.emit("}");
  };

  f.prototype.document = function (t) {
    var e = "@" + (t.vendor || "") + "document " + t.document;
    return this.emit(e, t.position) + this.emit("{") + this.mapVisit(t.rules) + this.emit("}");
  };

  f.prototype.charset = function (t) {
    return this.emit("@charset " + t.charset + ";", t.position);
  };

  f.prototype.namespace = function (t) {
    return this.emit("@namespace " + t.namespace + ";", t.position);
  };

  f.prototype.supports = function (t) {
    return this.emit("@supports " + t.supports, t.position) + this.emit("{") + this.mapVisit(t.rules) + this.emit("}");
  };

  f.prototype.keyframes = function (t) {
    return this.emit("@" + (t.vendor || "") + "keyframes " + t.name, t.position) + this.emit("{") + this.mapVisit(t.keyframes) + this.emit("}");
  };

  f.prototype.keyframe = function (t) {
    var e = t.declarations;
    return this.emit(t.values.join(","), t.position) + this.emit("{") + this.mapVisit(e) + this.emit("}");
  };

  f.prototype.page = function (t) {
    var e = t.selectors.length ? t.selectors.join(", ") : "";
    return this.emit("@page " + e, t.position) + this.emit("{") + this.mapVisit(t.declarations) + this.emit("}");
  };

  f.prototype["font-face"] = function (t) {
    return this.emit("@font-face", t.position) + this.emit("{") + this.mapVisit(t.declarations) + this.emit("}");
  };

  f.prototype.host = function (t) {
    return this.emit("@host", t.position) + this.emit("{") + this.mapVisit(t.rules) + this.emit("}");
  };

  f.prototype["custom-media"] = function (t) {
    return this.emit("@custom-media " + t.name + " " + t.media + ";", t.position);
  };

  f.prototype.rule = function (t) {
    var e = t.declarations;
    return e.length ? this.emit(t.selectors.join(","), t.position) + this.emit("{") + this.mapVisit(e) + this.emit("}") : "";
  };

  f.prototype.declaration = function (t) {
    return this.emit(t.property + ":" + t.value, t.position) + this.emit(";");
  };
});
var K = q((Bt, H) => {
  var D = E(),
      Ct = __inherits$;
  H.exports = h;

  function h(t) {
    t = t || {}, D.call(this, t), this.indentation = t.indent;
  }

  s(h, "Compiler");
  Ct(h, D);

  h.prototype.compile = function (t) {
    return this.stylesheet(t);
  };

  h.prototype.stylesheet = function (t) {
    return this.mapVisit(t.stylesheet.rules, `

`);
  };

  h.prototype.comment = function (t) {
    return this.emit(this.indent() + "/*" + t.comment + "*/", t.position);
  };

  h.prototype.import = function (t) {
    return this.emit("@import " + t.import + ";", t.position);
  };

  h.prototype.media = function (t) {
    return this.emit("@media " + t.media, t.position) + this.emit(` {
` + this.indent(1)) + this.mapVisit(t.rules, `

`) + this.emit(this.indent(-1) + `
}`);
  };

  h.prototype.document = function (t) {
    var e = "@" + (t.vendor || "") + "document " + t.document;
    return this.emit(e, t.position) + this.emit(`  {
` + this.indent(1)) + this.mapVisit(t.rules, `

`) + this.emit(this.indent(-1) + `
}`);
  };

  h.prototype.charset = function (t) {
    return this.emit("@charset " + t.charset + ";", t.position);
  };

  h.prototype.namespace = function (t) {
    return this.emit("@namespace " + t.namespace + ";", t.position);
  };

  h.prototype.supports = function (t) {
    return this.emit("@supports " + t.supports, t.position) + this.emit(` {
` + this.indent(1)) + this.mapVisit(t.rules, `

`) + this.emit(this.indent(-1) + `
}`);
  };

  h.prototype.keyframes = function (t) {
    return this.emit("@" + (t.vendor || "") + "keyframes " + t.name, t.position) + this.emit(` {
` + this.indent(1)) + this.mapVisit(t.keyframes, `
`) + this.emit(this.indent(-1) + "}");
  };

  h.prototype.keyframe = function (t) {
    var e = t.declarations;
    return this.emit(this.indent()) + this.emit(t.values.join(", "), t.position) + this.emit(` {
` + this.indent(1)) + this.mapVisit(e, `
`) + this.emit(this.indent(-1) + `
` + this.indent() + `}
`);
  };

  h.prototype.page = function (t) {
    var e = t.selectors.length ? t.selectors.join(", ") + " " : "";
    return this.emit("@page " + e, t.position) + this.emit(`{
`) + this.emit(this.indent(1)) + this.mapVisit(t.declarations, `
`) + this.emit(this.indent(-1)) + this.emit(`
}`);
  };

  h.prototype["font-face"] = function (t) {
    return this.emit("@font-face ", t.position) + this.emit(`{
`) + this.emit(this.indent(1)) + this.mapVisit(t.declarations, `
`) + this.emit(this.indent(-1)) + this.emit(`
}`);
  };

  h.prototype.host = function (t) {
    return this.emit("@host", t.position) + this.emit(` {
` + this.indent(1)) + this.mapVisit(t.rules, `

`) + this.emit(this.indent(-1) + `
}`);
  };

  h.prototype["custom-media"] = function (t) {
    return this.emit("@custom-media " + t.name + " " + t.media + ";", t.position);
  };

  h.prototype.rule = function (t) {
    var e = this.indent(),
        n = t.declarations;
    return n.length ? this.emit(t.selectors.map(function (a) {
      return e + a;
    }).join(`,
`), t.position) + this.emit(` {
`) + this.emit(this.indent(1)) + this.mapVisit(n, `
`) + this.emit(this.indent(-1)) + this.emit(`
` + this.indent() + "}") : "";
  };

  h.prototype.declaration = function (t) {
    return this.emit(this.indent()) + this.emit(t.property + ": " + t.value, t.position) + this.emit(";");
  };

  h.prototype.indent = function (t) {
    return this.level = this.level || 1, t != null ? (this.level += t, "") : Array(this.level).join(this.indentation || "  ");
  };
});
var Y = q((V, X) => {
  var Mt = __source_map$SourceMapGenerator,
      Pt = __source_map$SourceMapConsumer,
      Ot = __source_map_resolve$,
      jt = __fs$,
      Q = __path$;
  X.exports = Et;
  var W = s(function (t) {
    return Q.sep === "\\" ? t.replace(/\\/g, "/").replace(/^[a-z]:\/?/i, "/") : t;
  }, "makeFriendlyPath");

  function Et(t) {
    t._comment = t.comment, t.map = new Mt(), t.position = {
      line: 1,
      column: 1
    }, t.files = {};

    for (var e in V) t[e] = V[e];
  }

  s(Et, "mixin");

  V.updatePosition = function (t) {
    var e = t.match(/\n/g);
    e && (this.position.line += e.length);
    var n = t.lastIndexOf(`
`);
    this.position.column = ~n ? t.length - n : this.position.column + t.length;
  };

  V.emit = function (t, e) {
    if (e) {
      var n = W(e.source || "source.css");
      this.map.addMapping({
        source: n,
        generated: {
          line: this.position.line,
          column: Math.max(this.position.column - 1, 0)
        },
        original: {
          line: e.start.line,
          column: e.start.column - 1
        }
      }), this.addFile(n, e);
    }

    return this.updatePosition(t), t;
  };

  V.addFile = function (t, e) {
    typeof e.content == "string" && (Object.prototype.hasOwnProperty.call(this.files, t) || (this.files[t] = e.content));
  };

  V.applySourceMaps = function () {
    Object.keys(this.files).forEach(function (t) {
      var e = this.files[t];

      if (this.map.setSourceContent(t, e), this.options.inputSourcemaps !== !1) {
        var n = Ot.resolveSync(e, t, jt.readFileSync);

        if (n) {
          var a = new Pt(n.map),
              l = n.sourcesRelativeTo;
          this.map.applySourceMap(a, t, W(Q.dirname(l)));
        }
      }
    }, this);
  };

  V.comment = function (t) {
    return /^# sourceMappingURL=/.test(t.comment) ? this.emit("", t.position) : this._comment(t);
  };
});
var tt = q((Nt, Z) => {
  var $t = U(),
      Rt = K();

  Z.exports = function (t, e) {
    e = e || {};
    var n = e.compress ? new $t(e) : new Rt(e);

    if (e.sourcemap) {
      var a = Y();
      a(n);
      var u = n.compile(t);
      n.applySourceMaps();
      var l = e.sourcemap === "generator" ? n.map : n.map.toJSON();
      return {
        code: u,
        map: l
      };
    }

    var u = n.compile(t);
    return u;
  };
});
var R = q($ => {
  $.parse = N();
  $.stringify = tt();
});
var it = L(R()),
    et = L(R()),
    {
  parse: Jt,
  stringify: Tt
} = et,
    {
  default: _t,
  ...zt
} = et,
    Ut = it.default ?? _t ?? zt;
export { Ut as default, Jt as parse, Tt as stringify };