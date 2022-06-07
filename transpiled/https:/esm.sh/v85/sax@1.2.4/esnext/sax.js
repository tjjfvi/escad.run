/* esm.sh - esbuild bundle(sax@1.2.4) esnext production */
import { Buffer as __Buffer$ } from "/transpiled/https://esm.sh/v85/node_buffer.js";
import __string_decoder$ from "/transpiled/https://esm.sh/v85/string_decoder@1.3.0/esnext/string_decoder.bundle.js";
import __stream$ from "/transpiled/https://esm.sh/v85/stream-browserify@3.0.0/esnext/stream-browserify.bundle.js";
var ft = Object.create;
var V = Object.defineProperty;
var Tt = Object.getOwnPropertyDescriptor;
var Et = Object.getOwnPropertyNames;
var mt = Object.getPrototypeOf,
    Nt = Object.prototype.hasOwnProperty;

var c = (o, l) => V(o, "name", {
  value: l,
  configurable: !0
}),
    z = (o => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(o, {
  get: (l, m) => (typeof require != "undefined" ? require : l)[m]
}) : o)(function (o) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + o + '" is not supported');
});

var _t = (o, l) => () => (l || o((l = {
  exports: {}
}).exports, l), l.exports);

var At = (o, l, m, v) => {
  if (l && typeof l == "object" || typeof l == "function") for (let D of Et(l)) !Nt.call(o, D) && D !== m && V(o, D, {
    get: () => l[D],
    enumerable: !(v = Tt(l, D)) || v.enumerable
  });
  return o;
};

var Z = (o, l, m) => (m = o != null ? ft(mt(o)) : {}, At(l || !o || !o.__esModule ? V(m, "default", {
  value: o,
  enumerable: !0
}) : m, o));

var x = _t(L => {
  (function (o) {
    o.parser = function (e, t) {
      return new m(e, t);
    }, o.SAXParser = m, o.SAXStream = d, o.createStream = J, o.MAX_BUFFER_LENGTH = 64 * 1024;
    var l = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];
    o.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"];

    function m(e, t) {
      if (!(this instanceof m)) return new m(e, t);
      var n = this;
      D(n), n.q = n.c = "", n.bufferCheckPosition = o.MAX_BUFFER_LENGTH, n.opt = t || {}, n.opt.lowercase = n.opt.lowercase || n.opt.lowercasetags, n.looseCase = n.opt.lowercase ? "toLowerCase" : "toUpperCase", n.tags = [], n.closed = n.closedRoot = n.sawRoot = !1, n.tag = n.error = null, n.strict = !!e, n.noscript = !!(e || n.opt.noscript), n.state = a.BEGIN, n.strictEntities = n.opt.strictEntities, n.ENTITIES = n.strictEntities ? Object.create(o.XML_ENTITIES) : Object.create(o.ENTITIES), n.attribList = [], n.opt.xmlns && (n.ns = Object.create(it)), n.trackPosition = n.opt.position !== !1, n.trackPosition && (n.position = n.line = n.column = 0), F(n, "onready");
    }

    c(m, "SAXParser"), Object.create || (Object.create = function (e) {
      function t() {}

      c(t, "F"), t.prototype = e;
      var n = new t();
      return n;
    }), Object.keys || (Object.keys = function (e) {
      var t = [];

      for (var n in e) e.hasOwnProperty(n) && t.push(n);

      return t;
    });

    function v(e) {
      for (var t = Math.max(o.MAX_BUFFER_LENGTH, 10), n = 0, i = 0, u = l.length; i < u; i++) {
        var f = e[l[i]].length;
        if (f > t) switch (l[i]) {
          case "textNode":
            S(e);
            break;

          case "cdata":
            r(e, "oncdata", e.cdata), e.cdata = "";
            break;

          case "script":
            r(e, "onscript", e.script), e.script = "";
            break;

          default:
            R(e, "Max buffer length exceeded: " + l[i]);
        }
        n = Math.max(n, f);
      }

      var T = o.MAX_BUFFER_LENGTH - n;
      e.bufferCheckPosition = T + e.position;
    }

    c(v, "checkBufferLength");

    function D(e) {
      for (var t = 0, n = l.length; t < n; t++) e[l[t]] = "";
    }

    c(D, "clearBuffers");

    function $(e) {
      S(e), e.cdata !== "" && (r(e, "oncdata", e.cdata), e.cdata = ""), e.script !== "" && (r(e, "onscript", e.script), e.script = "");
    }

    c($, "flushBuffers"), m.prototype = {
      end: function () {
        W(this);
      },
      write: lt,
      resume: function () {
        return this.error = null, this;
      },
      close: function () {
        return this.write(null);
      },
      flush: function () {
        $(this);
      }
    };
    var h;

    try {
      h = __stream$.Stream;
    } catch {
      h = c(function () {}, "Stream");
    }

    var Y = o.EVENTS.filter(function (e) {
      return e !== "error" && e !== "end";
    });

    function J(e, t) {
      return new d(e, t);
    }

    c(J, "createStream");

    function d(e, t) {
      if (!(this instanceof d)) return new d(e, t);
      h.apply(this), this._parser = new m(e, t), this.writable = !0, this.readable = !0;
      var n = this;
      this._parser.onend = function () {
        n.emit("end");
      }, this._parser.onerror = function (i) {
        n.emit("error", i), n._parser.error = null;
      }, this._decoder = null, Y.forEach(function (i) {
        Object.defineProperty(n, "on" + i, {
          get: function () {
            return n._parser["on" + i];
          },
          set: function (u) {
            if (!u) return n.removeAllListeners(i), n._parser["on" + i] = u, u;
            n.on(i, u);
          },
          enumerable: !0,
          configurable: !1
        });
      });
    }

    c(d, "SAXStream"), d.prototype = Object.create(h.prototype, {
      constructor: {
        value: d
      }
    }), d.prototype.write = function (e) {
      if (typeof __Buffer$ == "function" && typeof __Buffer$.isBuffer == "function" && __Buffer$.isBuffer(e)) {
        if (!this._decoder) {
          var t = __string_decoder$.StringDecoder;
          this._decoder = new t("utf8");
        }

        e = this._decoder.write(e);
      }

      return this._parser.write(e.toString()), this.emit("data", e), !0;
    }, d.prototype.end = function (e) {
      return e && e.length && this.write(e), this._parser.end(), !0;
    }, d.prototype.on = function (e, t) {
      var n = this;
      return !n._parser["on" + e] && Y.indexOf(e) !== -1 && (n._parser["on" + e] = function () {
        var i = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
        i.splice(0, 0, e), n.emit.apply(n, i);
      }), h.prototype.on.call(n, e, t);
    };
    var tt = "[CDATA[",
        et = "DOCTYPE",
        w = "http://www.w3.org/XML/1998/namespace",
        B = "http://www.w3.org/2000/xmlns/",
        it = {
      xml: w,
      xmlns: B
    },
        O = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
        P = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
        at = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
        nt = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;

    function N(e) {
      return e === " " || e === `
` || e === "\r" || e === "	";
    }

    c(N, "isWhitespace");

    function y(e) {
      return e === '"' || e === "'";
    }

    c(y, "isQuote");

    function ot(e) {
      return e === ">" || N(e);
    }

    c(ot, "isAttribEnd");

    function g(e, t) {
      return e.test(t);
    }

    c(g, "isMatch");

    function ct(e, t) {
      return !g(e, t);
    }

    c(ct, "notMatch");
    var a = 0;
    o.STATE = {
      BEGIN: a++,
      BEGIN_WHITESPACE: a++,
      TEXT: a++,
      TEXT_ENTITY: a++,
      OPEN_WAKA: a++,
      SGML_DECL: a++,
      SGML_DECL_QUOTED: a++,
      DOCTYPE: a++,
      DOCTYPE_QUOTED: a++,
      DOCTYPE_DTD: a++,
      DOCTYPE_DTD_QUOTED: a++,
      COMMENT_STARTING: a++,
      COMMENT: a++,
      COMMENT_ENDING: a++,
      COMMENT_ENDED: a++,
      CDATA: a++,
      CDATA_ENDING: a++,
      CDATA_ENDING_2: a++,
      PROC_INST: a++,
      PROC_INST_BODY: a++,
      PROC_INST_ENDING: a++,
      OPEN_TAG: a++,
      OPEN_TAG_SLASH: a++,
      ATTRIB: a++,
      ATTRIB_NAME: a++,
      ATTRIB_NAME_SAW_WHITE: a++,
      ATTRIB_VALUE: a++,
      ATTRIB_VALUE_QUOTED: a++,
      ATTRIB_VALUE_CLOSED: a++,
      ATTRIB_VALUE_UNQUOTED: a++,
      ATTRIB_VALUE_ENTITY_Q: a++,
      ATTRIB_VALUE_ENTITY_U: a++,
      CLOSE_TAG: a++,
      CLOSE_TAG_SAW_WHITE: a++,
      SCRIPT: a++,
      SCRIPT_ENDING: a++
    }, o.XML_ENTITIES = {
      amp: "&",
      gt: ">",
      lt: "<",
      quot: '"',
      apos: "'"
    }, o.ENTITIES = {
      amp: "&",
      gt: ">",
      lt: "<",
      quot: '"',
      apos: "'",
      AElig: 198,
      Aacute: 193,
      Acirc: 194,
      Agrave: 192,
      Aring: 197,
      Atilde: 195,
      Auml: 196,
      Ccedil: 199,
      ETH: 208,
      Eacute: 201,
      Ecirc: 202,
      Egrave: 200,
      Euml: 203,
      Iacute: 205,
      Icirc: 206,
      Igrave: 204,
      Iuml: 207,
      Ntilde: 209,
      Oacute: 211,
      Ocirc: 212,
      Ograve: 210,
      Oslash: 216,
      Otilde: 213,
      Ouml: 214,
      THORN: 222,
      Uacute: 218,
      Ucirc: 219,
      Ugrave: 217,
      Uuml: 220,
      Yacute: 221,
      aacute: 225,
      acirc: 226,
      aelig: 230,
      agrave: 224,
      aring: 229,
      atilde: 227,
      auml: 228,
      ccedil: 231,
      eacute: 233,
      ecirc: 234,
      egrave: 232,
      eth: 240,
      euml: 235,
      iacute: 237,
      icirc: 238,
      igrave: 236,
      iuml: 239,
      ntilde: 241,
      oacute: 243,
      ocirc: 244,
      ograve: 242,
      oslash: 248,
      otilde: 245,
      ouml: 246,
      szlig: 223,
      thorn: 254,
      uacute: 250,
      ucirc: 251,
      ugrave: 249,
      uuml: 252,
      yacute: 253,
      yuml: 255,
      copy: 169,
      reg: 174,
      nbsp: 160,
      iexcl: 161,
      cent: 162,
      pound: 163,
      curren: 164,
      yen: 165,
      brvbar: 166,
      sect: 167,
      uml: 168,
      ordf: 170,
      laquo: 171,
      not: 172,
      shy: 173,
      macr: 175,
      deg: 176,
      plusmn: 177,
      sup1: 185,
      sup2: 178,
      sup3: 179,
      acute: 180,
      micro: 181,
      para: 182,
      middot: 183,
      cedil: 184,
      ordm: 186,
      raquo: 187,
      frac14: 188,
      frac12: 189,
      frac34: 190,
      iquest: 191,
      times: 215,
      divide: 247,
      OElig: 338,
      oelig: 339,
      Scaron: 352,
      scaron: 353,
      Yuml: 376,
      fnof: 402,
      circ: 710,
      tilde: 732,
      Alpha: 913,
      Beta: 914,
      Gamma: 915,
      Delta: 916,
      Epsilon: 917,
      Zeta: 918,
      Eta: 919,
      Theta: 920,
      Iota: 921,
      Kappa: 922,
      Lambda: 923,
      Mu: 924,
      Nu: 925,
      Xi: 926,
      Omicron: 927,
      Pi: 928,
      Rho: 929,
      Sigma: 931,
      Tau: 932,
      Upsilon: 933,
      Phi: 934,
      Chi: 935,
      Psi: 936,
      Omega: 937,
      alpha: 945,
      beta: 946,
      gamma: 947,
      delta: 948,
      epsilon: 949,
      zeta: 950,
      eta: 951,
      theta: 952,
      iota: 953,
      kappa: 954,
      lambda: 955,
      mu: 956,
      nu: 957,
      xi: 958,
      omicron: 959,
      pi: 960,
      rho: 961,
      sigmaf: 962,
      sigma: 963,
      tau: 964,
      upsilon: 965,
      phi: 966,
      chi: 967,
      psi: 968,
      omega: 969,
      thetasym: 977,
      upsih: 978,
      piv: 982,
      ensp: 8194,
      emsp: 8195,
      thinsp: 8201,
      zwnj: 8204,
      zwj: 8205,
      lrm: 8206,
      rlm: 8207,
      ndash: 8211,
      mdash: 8212,
      lsquo: 8216,
      rsquo: 8217,
      sbquo: 8218,
      ldquo: 8220,
      rdquo: 8221,
      bdquo: 8222,
      dagger: 8224,
      Dagger: 8225,
      bull: 8226,
      hellip: 8230,
      permil: 8240,
      prime: 8242,
      Prime: 8243,
      lsaquo: 8249,
      rsaquo: 8250,
      oline: 8254,
      frasl: 8260,
      euro: 8364,
      image: 8465,
      weierp: 8472,
      real: 8476,
      trade: 8482,
      alefsym: 8501,
      larr: 8592,
      uarr: 8593,
      rarr: 8594,
      darr: 8595,
      harr: 8596,
      crarr: 8629,
      lArr: 8656,
      uArr: 8657,
      rArr: 8658,
      dArr: 8659,
      hArr: 8660,
      forall: 8704,
      part: 8706,
      exist: 8707,
      empty: 8709,
      nabla: 8711,
      isin: 8712,
      notin: 8713,
      ni: 8715,
      prod: 8719,
      sum: 8721,
      minus: 8722,
      lowast: 8727,
      radic: 8730,
      prop: 8733,
      infin: 8734,
      ang: 8736,
      and: 8743,
      or: 8744,
      cap: 8745,
      cup: 8746,
      int: 8747,
      there4: 8756,
      sim: 8764,
      cong: 8773,
      asymp: 8776,
      ne: 8800,
      equiv: 8801,
      le: 8804,
      ge: 8805,
      sub: 8834,
      sup: 8835,
      nsub: 8836,
      sube: 8838,
      supe: 8839,
      oplus: 8853,
      otimes: 8855,
      perp: 8869,
      sdot: 8901,
      lceil: 8968,
      rceil: 8969,
      lfloor: 8970,
      rfloor: 8971,
      lang: 9001,
      rang: 9002,
      loz: 9674,
      spades: 9824,
      clubs: 9827,
      hearts: 9829,
      diams: 9830
    }, Object.keys(o.ENTITIES).forEach(function (e) {
      var t = o.ENTITIES[e],
          n = typeof t == "number" ? String.fromCharCode(t) : t;
      o.ENTITIES[e] = n;
    });

    for (var X in o.STATE) o.STATE[o.STATE[X]] = X;

    a = o.STATE;

    function F(e, t, n) {
      e[t] && e[t](n);
    }

    c(F, "emit");

    function r(e, t, n) {
      e.textNode && S(e), F(e, t, n);
    }

    c(r, "emitNode");

    function S(e) {
      e.textNode = q(e.opt, e.textNode), e.textNode && F(e, "ontext", e.textNode), e.textNode = "";
    }

    c(S, "closeText");

    function q(e, t) {
      return e.trim && (t = t.trim()), e.normalize && (t = t.replace(/\s+/g, " ")), t;
    }

    c(q, "textopts");

    function R(e, t) {
      return S(e), e.trackPosition && (t += `
Line: ` + e.line + `
Column: ` + e.column + `
Char: ` + e.c), t = new Error(t), e.error = t, F(e, "onerror", t), e;
    }

    c(R, "error");

    function W(e) {
      return e.sawRoot && !e.closedRoot && s(e, "Unclosed root tag"), e.state !== a.BEGIN && e.state !== a.BEGIN_WHITESPACE && e.state !== a.TEXT && R(e, "Unexpected end"), S(e), e.c = "", e.closed = !0, F(e, "onend"), m.call(e, e.strict, e.opt), e;
    }

    c(W, "end");

    function s(e, t) {
      if (typeof e != "object" || !(e instanceof m)) throw new Error("bad call to strictFail");
      e.strict && R(e, t);
    }

    c(s, "strictFail");

    function ut(e) {
      e.strict || (e.tagName = e.tagName[e.looseCase]());
      var t = e.tags[e.tags.length - 1] || e,
          n = e.tag = {
        name: e.tagName,
        attributes: {}
      };
      e.opt.xmlns && (n.ns = t.ns), e.attribList.length = 0, r(e, "onopentagstart", n);
    }

    c(ut, "newTag");

    function U(e, t) {
      var n = e.indexOf(":"),
          i = n < 0 ? ["", e] : e.split(":"),
          u = i[0],
          f = i[1];
      return t && e === "xmlns" && (u = "xmlns", f = ""), {
        prefix: u,
        local: f
      };
    }

    c(U, "qname");

    function M(e) {
      if (e.strict || (e.attribName = e.attribName[e.looseCase]()), e.attribList.indexOf(e.attribName) !== -1 || e.tag.attributes.hasOwnProperty(e.attribName)) {
        e.attribName = e.attribValue = "";
        return;
      }

      if (e.opt.xmlns) {
        var t = U(e.attribName, !0),
            n = t.prefix,
            i = t.local;
        if (n === "xmlns") if (i === "xml" && e.attribValue !== w) s(e, "xml: prefix must be bound to " + w + `
Actual: ` + e.attribValue);else if (i === "xmlns" && e.attribValue !== B) s(e, "xmlns: prefix must be bound to " + B + `
Actual: ` + e.attribValue);else {
          var u = e.tag,
              f = e.tags[e.tags.length - 1] || e;
          u.ns === f.ns && (u.ns = Object.create(f.ns)), u.ns[i] = e.attribValue;
        }
        e.attribList.push([e.attribName, e.attribValue]);
      } else e.tag.attributes[e.attribName] = e.attribValue, r(e, "onattribute", {
        name: e.attribName,
        value: e.attribValue
      });

      e.attribName = e.attribValue = "";
    }

    c(M, "attrib");

    function C(e, t) {
      if (e.opt.xmlns) {
        var n = e.tag,
            i = U(e.tagName);
        n.prefix = i.prefix, n.local = i.local, n.uri = n.ns[i.prefix] || "", n.prefix && !n.uri && (s(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)), n.uri = i.prefix);
        var u = e.tags[e.tags.length - 1] || e;
        n.ns && u.ns !== n.ns && Object.keys(n.ns).forEach(function (k) {
          r(e, "onopennamespace", {
            prefix: k,
            uri: n.ns[k]
          });
        });

        for (var f = 0, T = e.attribList.length; f < T; f++) {
          var _ = e.attribList[f],
              A = _[0],
              b = _[1],
              E = U(A, !0),
              I = E.prefix,
              rt = E.local,
              j = I === "" ? "" : n.ns[I] || "",
              G = {
            name: A,
            value: b,
            prefix: I,
            local: rt,
            uri: j
          };
          I && I !== "xmlns" && !j && (s(e, "Unbound namespace prefix: " + JSON.stringify(I)), G.uri = I), e.tag.attributes[A] = G, r(e, "onattribute", G);
        }

        e.attribList.length = 0;
      }

      e.tag.isSelfClosing = !!t, e.sawRoot = !0, e.tags.push(e.tag), r(e, "onopentag", e.tag), t || (!e.noscript && e.tagName.toLowerCase() === "script" ? e.state = a.SCRIPT : e.state = a.TEXT, e.tag = null, e.tagName = ""), e.attribName = e.attribValue = "", e.attribList.length = 0;
    }

    c(C, "openTag");

    function p(e) {
      if (!e.tagName) {
        s(e, "Weird empty close tag."), e.textNode += "</>", e.state = a.TEXT;
        return;
      }

      if (e.script) {
        if (e.tagName !== "script") {
          e.script += "</" + e.tagName + ">", e.tagName = "", e.state = a.SCRIPT;
          return;
        }

        r(e, "onscript", e.script), e.script = "";
      }

      var t = e.tags.length,
          n = e.tagName;
      e.strict || (n = n[e.looseCase]());

      for (var i = n; t--;) {
        var u = e.tags[t];
        if (u.name !== i) s(e, "Unexpected close tag");else break;
      }

      if (t < 0) {
        s(e, "Unmatched closing tag: " + e.tagName), e.textNode += "</" + e.tagName + ">", e.state = a.TEXT;
        return;
      }

      e.tagName = n;

      for (var f = e.tags.length; f-- > t;) {
        var T = e.tag = e.tags.pop();
        e.tagName = e.tag.name, r(e, "onclosetag", e.tagName);
        var _ = {};

        for (var A in T.ns) _[A] = T.ns[A];

        var b = e.tags[e.tags.length - 1] || e;
        e.opt.xmlns && T.ns !== b.ns && Object.keys(T.ns).forEach(function (E) {
          var I = T.ns[E];
          r(e, "onclosenamespace", {
            prefix: E,
            uri: I
          });
        });
      }

      t === 0 && (e.closedRoot = !0), e.tagName = e.attribValue = e.attribName = "", e.attribList.length = 0, e.state = a.TEXT;
    }

    c(p, "closeTag");

    function st(e) {
      var t = e.entity,
          n = t.toLowerCase(),
          i,
          u = "";
      return e.ENTITIES[t] ? e.ENTITIES[t] : e.ENTITIES[n] ? e.ENTITIES[n] : (t = n, t.charAt(0) === "#" && (t.charAt(1) === "x" ? (t = t.slice(2), i = parseInt(t, 16), u = i.toString(16)) : (t = t.slice(1), i = parseInt(t, 10), u = i.toString(10))), t = t.replace(/^0+/, ""), isNaN(i) || u.toLowerCase() !== t ? (s(e, "Invalid character entity"), "&" + e.entity + ";") : String.fromCodePoint(i));
    }

    c(st, "parseEntity");

    function Q(e, t) {
      t === "<" ? (e.state = a.OPEN_WAKA, e.startTagPosition = e.position) : N(t) || (s(e, "Non-whitespace before first tag."), e.textNode = t, e.state = a.TEXT);
    }

    c(Q, "beginWhiteSpace");

    function H(e, t) {
      var n = "";
      return t < e.length && (n = e.charAt(t)), n;
    }

    c(H, "charAt");

    function lt(e) {
      var t = this;
      if (this.error) throw this.error;
      if (t.closed) return R(t, "Cannot write after close. Assign an onready handler.");
      if (e === null) return W(t);
      typeof e == "object" && (e = e.toString());

      for (var n = 0, i = ""; i = H(e, n++), t.c = i, !!i;) switch (t.trackPosition && (t.position++, i === `
` ? (t.line++, t.column = 0) : t.column++), t.state) {
        case a.BEGIN:
          if (t.state = a.BEGIN_WHITESPACE, i === "\uFEFF") continue;
          Q(t, i);
          continue;

        case a.BEGIN_WHITESPACE:
          Q(t, i);
          continue;

        case a.TEXT:
          if (t.sawRoot && !t.closedRoot) {
            for (var u = n - 1; i && i !== "<" && i !== "&";) i = H(e, n++), i && t.trackPosition && (t.position++, i === `
` ? (t.line++, t.column = 0) : t.column++);

            t.textNode += e.substring(u, n - 1);
          }

          i === "<" && !(t.sawRoot && t.closedRoot && !t.strict) ? (t.state = a.OPEN_WAKA, t.startTagPosition = t.position) : (!N(i) && (!t.sawRoot || t.closedRoot) && s(t, "Text data outside of root node."), i === "&" ? t.state = a.TEXT_ENTITY : t.textNode += i);
          continue;

        case a.SCRIPT:
          i === "<" ? t.state = a.SCRIPT_ENDING : t.script += i;
          continue;

        case a.SCRIPT_ENDING:
          i === "/" ? t.state = a.CLOSE_TAG : (t.script += "<" + i, t.state = a.SCRIPT);
          continue;

        case a.OPEN_WAKA:
          if (i === "!") t.state = a.SGML_DECL, t.sgmlDecl = "";else if (!N(i)) if (g(O, i)) t.state = a.OPEN_TAG, t.tagName = i;else if (i === "/") t.state = a.CLOSE_TAG, t.tagName = "";else if (i === "?") t.state = a.PROC_INST, t.procInstName = t.procInstBody = "";else {
            if (s(t, "Unencoded <"), t.startTagPosition + 1 < t.position) {
              var f = t.position - t.startTagPosition;
              i = new Array(f).join(" ") + i;
            }

            t.textNode += "<" + i, t.state = a.TEXT;
          }
          continue;

        case a.SGML_DECL:
          (t.sgmlDecl + i).toUpperCase() === tt ? (r(t, "onopencdata"), t.state = a.CDATA, t.sgmlDecl = "", t.cdata = "") : t.sgmlDecl + i === "--" ? (t.state = a.COMMENT, t.comment = "", t.sgmlDecl = "") : (t.sgmlDecl + i).toUpperCase() === et ? (t.state = a.DOCTYPE, (t.doctype || t.sawRoot) && s(t, "Inappropriately located doctype declaration"), t.doctype = "", t.sgmlDecl = "") : i === ">" ? (r(t, "onsgmldeclaration", t.sgmlDecl), t.sgmlDecl = "", t.state = a.TEXT) : (y(i) && (t.state = a.SGML_DECL_QUOTED), t.sgmlDecl += i);
          continue;

        case a.SGML_DECL_QUOTED:
          i === t.q && (t.state = a.SGML_DECL, t.q = ""), t.sgmlDecl += i;
          continue;

        case a.DOCTYPE:
          i === ">" ? (t.state = a.TEXT, r(t, "ondoctype", t.doctype), t.doctype = !0) : (t.doctype += i, i === "[" ? t.state = a.DOCTYPE_DTD : y(i) && (t.state = a.DOCTYPE_QUOTED, t.q = i));
          continue;

        case a.DOCTYPE_QUOTED:
          t.doctype += i, i === t.q && (t.q = "", t.state = a.DOCTYPE);
          continue;

        case a.DOCTYPE_DTD:
          t.doctype += i, i === "]" ? t.state = a.DOCTYPE : y(i) && (t.state = a.DOCTYPE_DTD_QUOTED, t.q = i);
          continue;

        case a.DOCTYPE_DTD_QUOTED:
          t.doctype += i, i === t.q && (t.state = a.DOCTYPE_DTD, t.q = "");
          continue;

        case a.COMMENT:
          i === "-" ? t.state = a.COMMENT_ENDING : t.comment += i;
          continue;

        case a.COMMENT_ENDING:
          i === "-" ? (t.state = a.COMMENT_ENDED, t.comment = q(t.opt, t.comment), t.comment && r(t, "oncomment", t.comment), t.comment = "") : (t.comment += "-" + i, t.state = a.COMMENT);
          continue;

        case a.COMMENT_ENDED:
          i !== ">" ? (s(t, "Malformed comment"), t.comment += "--" + i, t.state = a.COMMENT) : t.state = a.TEXT;
          continue;

        case a.CDATA:
          i === "]" ? t.state = a.CDATA_ENDING : t.cdata += i;
          continue;

        case a.CDATA_ENDING:
          i === "]" ? t.state = a.CDATA_ENDING_2 : (t.cdata += "]" + i, t.state = a.CDATA);
          continue;

        case a.CDATA_ENDING_2:
          i === ">" ? (t.cdata && r(t, "oncdata", t.cdata), r(t, "onclosecdata"), t.cdata = "", t.state = a.TEXT) : i === "]" ? t.cdata += "]" : (t.cdata += "]]" + i, t.state = a.CDATA);
          continue;

        case a.PROC_INST:
          i === "?" ? t.state = a.PROC_INST_ENDING : N(i) ? t.state = a.PROC_INST_BODY : t.procInstName += i;
          continue;

        case a.PROC_INST_BODY:
          if (!t.procInstBody && N(i)) continue;
          i === "?" ? t.state = a.PROC_INST_ENDING : t.procInstBody += i;
          continue;

        case a.PROC_INST_ENDING:
          i === ">" ? (r(t, "onprocessinginstruction", {
            name: t.procInstName,
            body: t.procInstBody
          }), t.procInstName = t.procInstBody = "", t.state = a.TEXT) : (t.procInstBody += "?" + i, t.state = a.PROC_INST_BODY);
          continue;

        case a.OPEN_TAG:
          g(P, i) ? t.tagName += i : (ut(t), i === ">" ? C(t) : i === "/" ? t.state = a.OPEN_TAG_SLASH : (N(i) || s(t, "Invalid character in tag name"), t.state = a.ATTRIB));
          continue;

        case a.OPEN_TAG_SLASH:
          i === ">" ? (C(t, !0), p(t)) : (s(t, "Forward-slash in opening tag not followed by >"), t.state = a.ATTRIB);
          continue;

        case a.ATTRIB:
          if (N(i)) continue;
          i === ">" ? C(t) : i === "/" ? t.state = a.OPEN_TAG_SLASH : g(O, i) ? (t.attribName = i, t.attribValue = "", t.state = a.ATTRIB_NAME) : s(t, "Invalid attribute name");
          continue;

        case a.ATTRIB_NAME:
          i === "=" ? t.state = a.ATTRIB_VALUE : i === ">" ? (s(t, "Attribute without value"), t.attribValue = t.attribName, M(t), C(t)) : N(i) ? t.state = a.ATTRIB_NAME_SAW_WHITE : g(P, i) ? t.attribName += i : s(t, "Invalid attribute name");
          continue;

        case a.ATTRIB_NAME_SAW_WHITE:
          if (i === "=") t.state = a.ATTRIB_VALUE;else {
            if (N(i)) continue;
            s(t, "Attribute without value"), t.tag.attributes[t.attribName] = "", t.attribValue = "", r(t, "onattribute", {
              name: t.attribName,
              value: ""
            }), t.attribName = "", i === ">" ? C(t) : g(O, i) ? (t.attribName = i, t.state = a.ATTRIB_NAME) : (s(t, "Invalid attribute name"), t.state = a.ATTRIB);
          }
          continue;

        case a.ATTRIB_VALUE:
          if (N(i)) continue;
          y(i) ? (t.q = i, t.state = a.ATTRIB_VALUE_QUOTED) : (s(t, "Unquoted attribute value"), t.state = a.ATTRIB_VALUE_UNQUOTED, t.attribValue = i);
          continue;

        case a.ATTRIB_VALUE_QUOTED:
          if (i !== t.q) {
            i === "&" ? t.state = a.ATTRIB_VALUE_ENTITY_Q : t.attribValue += i;
            continue;
          }

          M(t), t.q = "", t.state = a.ATTRIB_VALUE_CLOSED;
          continue;

        case a.ATTRIB_VALUE_CLOSED:
          N(i) ? t.state = a.ATTRIB : i === ">" ? C(t) : i === "/" ? t.state = a.OPEN_TAG_SLASH : g(O, i) ? (s(t, "No whitespace between attributes"), t.attribName = i, t.attribValue = "", t.state = a.ATTRIB_NAME) : s(t, "Invalid attribute name");
          continue;

        case a.ATTRIB_VALUE_UNQUOTED:
          if (!ot(i)) {
            i === "&" ? t.state = a.ATTRIB_VALUE_ENTITY_U : t.attribValue += i;
            continue;
          }

          M(t), i === ">" ? C(t) : t.state = a.ATTRIB;
          continue;

        case a.CLOSE_TAG:
          if (t.tagName) i === ">" ? p(t) : g(P, i) ? t.tagName += i : t.script ? (t.script += "</" + t.tagName, t.tagName = "", t.state = a.SCRIPT) : (N(i) || s(t, "Invalid tagname in closing tag"), t.state = a.CLOSE_TAG_SAW_WHITE);else {
            if (N(i)) continue;
            ct(O, i) ? t.script ? (t.script += "</" + i, t.state = a.SCRIPT) : s(t, "Invalid tagname in closing tag.") : t.tagName = i;
          }
          continue;

        case a.CLOSE_TAG_SAW_WHITE:
          if (N(i)) continue;
          i === ">" ? p(t) : s(t, "Invalid characters in closing tag");
          continue;

        case a.TEXT_ENTITY:
        case a.ATTRIB_VALUE_ENTITY_Q:
        case a.ATTRIB_VALUE_ENTITY_U:
          var T, _;

          switch (t.state) {
            case a.TEXT_ENTITY:
              T = a.TEXT, _ = "textNode";
              break;

            case a.ATTRIB_VALUE_ENTITY_Q:
              T = a.ATTRIB_VALUE_QUOTED, _ = "attribValue";
              break;

            case a.ATTRIB_VALUE_ENTITY_U:
              T = a.ATTRIB_VALUE_UNQUOTED, _ = "attribValue";
              break;
          }

          i === ";" ? (t[_] += st(t), t.entity = "", t.state = T) : g(t.entity.length ? nt : at, i) ? t.entity += i : (s(t, "Invalid character in entity name"), t[_] += "&" + t.entity + i, t.entity = "", t.state = T);
          continue;

        default:
          throw new Error(t, "Unknown state: " + t.state);
      }

      return t.position >= t.bufferCheckPosition && v(t), t;
    }

    c(lt, "write");
    String.fromCodePoint || function () {
      var e = String.fromCharCode,
          t = Math.floor,
          n = c(function () {
        var i = 16384,
            u = [],
            f,
            T,
            _ = -1,
            A = arguments.length;

        if (!A) return "";

        for (var b = ""; ++_ < A;) {
          var E = Number(arguments[_]);
          if (!isFinite(E) || E < 0 || E > 1114111 || t(E) !== E) throw RangeError("Invalid code point: " + E);
          E <= 65535 ? u.push(E) : (E -= 65536, f = (E >> 10) + 55296, T = E % 1024 + 56320, u.push(f, T)), (_ + 1 === A || u.length > i) && (b += e.apply(null, u), u.length = 0);
        }

        return b;
      }, "fromCodePoint");
      Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
        value: n,
        configurable: !0,
        writable: !0
      }) : String.fromCodePoint = n;
    }();
  })(typeof L > "u" ? L.sax = {} : L);
});

var K = Z(x()),
    dt = Z(x()),
    {
  default: gt,
  ...It
} = dt,
    bt = K.default ?? gt ?? It;
export { bt as default };
/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */