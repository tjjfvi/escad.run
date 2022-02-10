/* esm.sh - esbuild bundle(sax@1.2.4) deno production */
import { Buffer as __Buffer$ } from "/transpiled/https://deno.land/std@0.125.0/node/buffer.js";
import __string_decoder$ from "/transpiled/https://deno.land/std@0.125.0/node/string_decoder.js";
import __stream$ from "/transpiled/https://deno.land/std@0.125.0/node/stream.js";
var rt = Object.create;
var G = Object.defineProperty;
var ft = Object.getOwnPropertyDescriptor;
var Tt = Object.getOwnPropertyNames;
var Et = Object.getPrototypeOf, mt = Object.prototype.hasOwnProperty;
var Nt = o => G(o, "__esModule", { value: !0 });
var k = (o => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(o, { get: (s, N) => (typeof require != "undefined" ? require : s)[N] }) : o)(function (o) { if (typeof require != "undefined")
    return require.apply(this, arguments); throw new Error('Dynamic require of "' + o + '" is not supported'); });
var _t = (o, s) => () => (s || o((s = { exports: {} }).exports, s), s.exports);
var At = (o, s, N, S) => { if (s && typeof s == "object" || typeof s == "function")
    for (let I of Tt(s))
        !mt.call(o, I) && (N || I !== "default") && G(o, I, { get: () => s[I], enumerable: !(S = ft(s, I)) || S.enumerable }); return o; }, z = (o, s) => At(Nt(G(o != null ? rt(Et(o)) : {}, "default", !s && o && o.__esModule ? { get: () => o.default, enumerable: !0 } : { value: o, enumerable: !0 })), o);
var V = _t(R => {
    (function (o) {
        o.parser = function (e, t) { return new N(e, t); }, o.SAXParser = N, o.SAXStream = A, o.createStream = $, o.MAX_BUFFER_LENGTH = 64 * 1024;
        var s = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];
        o.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"];
        function N(e, t) { if (!(this instanceof N))
            return new N(e, t); var n = this; I(n), n.q = n.c = "", n.bufferCheckPosition = o.MAX_BUFFER_LENGTH, n.opt = t || {}, n.opt.lowercase = n.opt.lowercase || n.opt.lowercasetags, n.looseCase = n.opt.lowercase ? "toLowerCase" : "toUpperCase", n.tags = [], n.closed = n.closedRoot = n.sawRoot = !1, n.tag = n.error = null, n.strict = !!e, n.noscript = !!(e || n.opt.noscript), n.state = a.BEGIN, n.strictEntities = n.opt.strictEntities, n.ENTITIES = n.strictEntities ? Object.create(o.XML_ENTITIES) : Object.create(o.ENTITIES), n.attribList = [], n.opt.xmlns && (n.ns = Object.create(et)), n.trackPosition = n.opt.position !== !1, n.trackPosition && (n.position = n.line = n.column = 0), O(n, "onready"); }
        Object.create || (Object.create = function (e) { function t() { } t.prototype = e; var n = new t; return n; }), Object.keys || (Object.keys = function (e) { var t = []; for (var n in e)
            e.hasOwnProperty(n) && t.push(n); return t; });
        function S(e) { for (var t = Math.max(o.MAX_BUFFER_LENGTH, 10), n = 0, i = 0, c = s.length; i < c; i++) {
            var r = e[s[i]].length;
            if (r > t)
                switch (s[i]) {
                    case "textNode":
                        F(e);
                        break;
                    case "cdata":
                        l(e, "oncdata", e.cdata), e.cdata = "";
                        break;
                    case "script":
                        l(e, "onscript", e.script), e.script = "";
                        break;
                    default: y(e, "Max buffer length exceeded: " + s[i]);
                }
            n = Math.max(n, r);
        } var f = o.MAX_BUFFER_LENGTH - n; e.bufferCheckPosition = f + e.position; }
        function I(e) { for (var t = 0, n = s.length; t < n; t++)
            e[s[t]] = ""; }
        function K(e) { F(e), e.cdata !== "" && (l(e, "oncdata", e.cdata), e.cdata = ""), e.script !== "" && (l(e, "onscript", e.script), e.script = ""); }
        N.prototype = { end: function () { q(this); }, write: st, resume: function () { return this.error = null, this; }, close: function () { return this.write(null); }, flush: function () { K(this); } };
        var b;
        try {
            b = __stream$.Stream;
        }
        catch {
            b = function () { };
        }
        var x = o.EVENTS.filter(function (e) { return e !== "error" && e !== "end"; });
        function $(e, t) { return new A(e, t); }
        function A(e, t) { if (!(this instanceof A))
            return new A(e, t); b.apply(this), this._parser = new N(e, t), this.writable = !0, this.readable = !0; var n = this; this._parser.onend = function () { n.emit("end"); }, this._parser.onerror = function (i) { n.emit("error", i), n._parser.error = null; }, this._decoder = null, x.forEach(function (i) { Object.defineProperty(n, "on" + i, { get: function () { return n._parser["on" + i]; }, set: function (c) { if (!c)
                return n.removeAllListeners(i), n._parser["on" + i] = c, c; n.on(i, c); }, enumerable: !0, configurable: !1 }); }); }
        A.prototype = Object.create(b.prototype, { constructor: { value: A } }), A.prototype.write = function (e) { if (typeof __Buffer$ == "function" && typeof __Buffer$.isBuffer == "function" && __Buffer$.isBuffer(e)) {
            if (!this._decoder) {
                var t = __string_decoder$.StringDecoder;
                this._decoder = new t("utf8");
            }
            e = this._decoder.write(e);
        } return this._parser.write(e.toString()), this.emit("data", e), !0; }, A.prototype.end = function (e) { return e && e.length && this.write(e), this._parser.end(), !0; }, A.prototype.on = function (e, t) { var n = this; return !n._parser["on" + e] && x.indexOf(e) !== -1 && (n._parser["on" + e] = function () { var i = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments); i.splice(0, 0, e), n.emit.apply(n, i); }), b.prototype.on.call(n, e, t); };
        var J = "[CDATA[", tt = "DOCTYPE", L = "http://www.w3.org/XML/1998/namespace", w = "http://www.w3.org/2000/xmlns/", et = { xml: L, xmlns: w }, h = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, B = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, it = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, at = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
        function E(e) {
            return e === " " || e === `
` || e === "\r" || e === "	";
        }
        function v(e) { return e === '"' || e === "'"; }
        function nt(e) { return e === ">" || E(e); }
        function d(e, t) { return e.test(t); }
        function ot(e, t) { return !d(e, t); }
        var a = 0;
        o.STATE = { BEGIN: a++, BEGIN_WHITESPACE: a++, TEXT: a++, TEXT_ENTITY: a++, OPEN_WAKA: a++, SGML_DECL: a++, SGML_DECL_QUOTED: a++, DOCTYPE: a++, DOCTYPE_QUOTED: a++, DOCTYPE_DTD: a++, DOCTYPE_DTD_QUOTED: a++, COMMENT_STARTING: a++, COMMENT: a++, COMMENT_ENDING: a++, COMMENT_ENDED: a++, CDATA: a++, CDATA_ENDING: a++, CDATA_ENDING_2: a++, PROC_INST: a++, PROC_INST_BODY: a++, PROC_INST_ENDING: a++, OPEN_TAG: a++, OPEN_TAG_SLASH: a++, ATTRIB: a++, ATTRIB_NAME: a++, ATTRIB_NAME_SAW_WHITE: a++, ATTRIB_VALUE: a++, ATTRIB_VALUE_QUOTED: a++, ATTRIB_VALUE_CLOSED: a++, ATTRIB_VALUE_UNQUOTED: a++, ATTRIB_VALUE_ENTITY_Q: a++, ATTRIB_VALUE_ENTITY_U: a++, CLOSE_TAG: a++, CLOSE_TAG_SAW_WHITE: a++, SCRIPT: a++, SCRIPT_ENDING: a++ }, o.XML_ENTITIES = { amp: "&", gt: ">", lt: "<", quot: '"', apos: "'" }, o.ENTITIES = { amp: "&", gt: ">", lt: "<", quot: '"', apos: "'", AElig: 198, Aacute: 193, Acirc: 194, Agrave: 192, Aring: 197, Atilde: 195, Auml: 196, Ccedil: 199, ETH: 208, Eacute: 201, Ecirc: 202, Egrave: 200, Euml: 203, Iacute: 205, Icirc: 206, Igrave: 204, Iuml: 207, Ntilde: 209, Oacute: 211, Ocirc: 212, Ograve: 210, Oslash: 216, Otilde: 213, Ouml: 214, THORN: 222, Uacute: 218, Ucirc: 219, Ugrave: 217, Uuml: 220, Yacute: 221, aacute: 225, acirc: 226, aelig: 230, agrave: 224, aring: 229, atilde: 227, auml: 228, ccedil: 231, eacute: 233, ecirc: 234, egrave: 232, eth: 240, euml: 235, iacute: 237, icirc: 238, igrave: 236, iuml: 239, ntilde: 241, oacute: 243, ocirc: 244, ograve: 242, oslash: 248, otilde: 245, ouml: 246, szlig: 223, thorn: 254, uacute: 250, ucirc: 251, ugrave: 249, uuml: 252, yacute: 253, yuml: 255, copy: 169, reg: 174, nbsp: 160, iexcl: 161, cent: 162, pound: 163, curren: 164, yen: 165, brvbar: 166, sect: 167, uml: 168, ordf: 170, laquo: 171, not: 172, shy: 173, macr: 175, deg: 176, plusmn: 177, sup1: 185, sup2: 178, sup3: 179, acute: 180, micro: 181, para: 182, middot: 183, cedil: 184, ordm: 186, raquo: 187, frac14: 188, frac12: 189, frac34: 190, iquest: 191, times: 215, divide: 247, OElig: 338, oelig: 339, Scaron: 352, scaron: 353, Yuml: 376, fnof: 402, circ: 710, tilde: 732, Alpha: 913, Beta: 914, Gamma: 915, Delta: 916, Epsilon: 917, Zeta: 918, Eta: 919, Theta: 920, Iota: 921, Kappa: 922, Lambda: 923, Mu: 924, Nu: 925, Xi: 926, Omicron: 927, Pi: 928, Rho: 929, Sigma: 931, Tau: 932, Upsilon: 933, Phi: 934, Chi: 935, Psi: 936, Omega: 937, alpha: 945, beta: 946, gamma: 947, delta: 948, epsilon: 949, zeta: 950, eta: 951, theta: 952, iota: 953, kappa: 954, lambda: 955, mu: 956, nu: 957, xi: 958, omicron: 959, pi: 960, rho: 961, sigmaf: 962, sigma: 963, tau: 964, upsilon: 965, phi: 966, chi: 967, psi: 968, omega: 969, thetasym: 977, upsih: 978, piv: 982, ensp: 8194, emsp: 8195, thinsp: 8201, zwnj: 8204, zwj: 8205, lrm: 8206, rlm: 8207, ndash: 8211, mdash: 8212, lsquo: 8216, rsquo: 8217, sbquo: 8218, ldquo: 8220, rdquo: 8221, bdquo: 8222, dagger: 8224, Dagger: 8225, bull: 8226, hellip: 8230, permil: 8240, prime: 8242, Prime: 8243, lsaquo: 8249, rsaquo: 8250, oline: 8254, frasl: 8260, euro: 8364, image: 8465, weierp: 8472, real: 8476, trade: 8482, alefsym: 8501, larr: 8592, uarr: 8593, rarr: 8594, darr: 8595, harr: 8596, crarr: 8629, lArr: 8656, uArr: 8657, rArr: 8658, dArr: 8659, hArr: 8660, forall: 8704, part: 8706, exist: 8707, empty: 8709, nabla: 8711, isin: 8712, notin: 8713, ni: 8715, prod: 8719, sum: 8721, minus: 8722, lowast: 8727, radic: 8730, prop: 8733, infin: 8734, ang: 8736, and: 8743, or: 8744, cap: 8745, cup: 8746, int: 8747, there4: 8756, sim: 8764, cong: 8773, asymp: 8776, ne: 8800, equiv: 8801, le: 8804, ge: 8805, sub: 8834, sup: 8835, nsub: 8836, sube: 8838, supe: 8839, oplus: 8853, otimes: 8855, perp: 8869, sdot: 8901, lceil: 8968, rceil: 8969, lfloor: 8970, rfloor: 8971, lang: 9001, rang: 9002, loz: 9674, spades: 9824, clubs: 9827, hearts: 9829, diams: 9830 }, Object.keys(o.ENTITIES).forEach(function (e) { var t = o.ENTITIES[e], n = typeof t == "number" ? String.fromCharCode(t) : t; o.ENTITIES[e] = n; });
        for (var Y in o.STATE)
            o.STATE[o.STATE[Y]] = Y;
        a = o.STATE;
        function O(e, t, n) { e[t] && e[t](n); }
        function l(e, t, n) { e.textNode && F(e), O(e, t, n); }
        function F(e) { e.textNode = X(e.opt, e.textNode), e.textNode && O(e, "ontext", e.textNode), e.textNode = ""; }
        function X(e, t) { return e.trim && (t = t.trim()), e.normalize && (t = t.replace(/\s+/g, " ")), t; }
        function y(e, t) {
            return F(e), e.trackPosition && (t += `
Line: ` + e.line + `
Column: ` + e.column + `
Char: ` + e.c), t = new Error(t), e.error = t, O(e, "onerror", t), e;
        }
        function q(e) { return e.sawRoot && !e.closedRoot && u(e, "Unclosed root tag"), e.state !== a.BEGIN && e.state !== a.BEGIN_WHITESPACE && e.state !== a.TEXT && y(e, "Unexpected end"), F(e), e.c = "", e.closed = !0, O(e, "onend"), N.call(e, e.strict, e.opt), e; }
        function u(e, t) { if (typeof e != "object" || !(e instanceof N))
            throw new Error("bad call to strictFail"); e.strict && y(e, t); }
        function ct(e) { e.strict || (e.tagName = e.tagName[e.looseCase]()); var t = e.tags[e.tags.length - 1] || e, n = e.tag = { name: e.tagName, attributes: {} }; e.opt.xmlns && (n.ns = t.ns), e.attribList.length = 0, l(e, "onopentagstart", n); }
        function P(e, t) { var n = e.indexOf(":"), i = n < 0 ? ["", e] : e.split(":"), c = i[0], r = i[1]; return t && e === "xmlns" && (c = "xmlns", r = ""), { prefix: c, local: r }; }
        function U(e) {
            if (e.strict || (e.attribName = e.attribName[e.looseCase]()), e.attribList.indexOf(e.attribName) !== -1 || e.tag.attributes.hasOwnProperty(e.attribName)) {
                e.attribName = e.attribValue = "";
                return;
            }
            if (e.opt.xmlns) {
                var t = P(e.attribName, !0), n = t.prefix, i = t.local;
                if (n === "xmlns")
                    if (i === "xml" && e.attribValue !== L)
                        u(e, "xml: prefix must be bound to " + L + `
Actual: ` + e.attribValue);
                    else if (i === "xmlns" && e.attribValue !== w)
                        u(e, "xmlns: prefix must be bound to " + w + `
Actual: ` + e.attribValue);
                    else {
                        var c = e.tag, r = e.tags[e.tags.length - 1] || e;
                        c.ns === r.ns && (c.ns = Object.create(r.ns)), c.ns[i] = e.attribValue;
                    }
                e.attribList.push([e.attribName, e.attribValue]);
            }
            else
                e.tag.attributes[e.attribName] = e.attribValue, l(e, "onattribute", { name: e.attribName, value: e.attribValue });
            e.attribName = e.attribValue = "";
        }
        function D(e, t) { if (e.opt.xmlns) {
            var n = e.tag, i = P(e.tagName);
            n.prefix = i.prefix, n.local = i.local, n.uri = n.ns[i.prefix] || "", n.prefix && !n.uri && (u(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)), n.uri = i.prefix);
            var c = e.tags[e.tags.length - 1] || e;
            n.ns && c.ns !== n.ns && Object.keys(n.ns).forEach(function (j) { l(e, "onopennamespace", { prefix: j, uri: n.ns[j] }); });
            for (var r = 0, f = e.attribList.length; r < f; r++) {
                var m = e.attribList[r], _ = m[0], C = m[1], T = P(_, !0), g = T.prefix, lt = T.local, H = g === "" ? "" : n.ns[g] || "", p = { name: _, value: C, prefix: g, local: lt, uri: H };
                g && g !== "xmlns" && !H && (u(e, "Unbound namespace prefix: " + JSON.stringify(g)), p.uri = g), e.tag.attributes[_] = p, l(e, "onattribute", p);
            }
            e.attribList.length = 0;
        } e.tag.isSelfClosing = !!t, e.sawRoot = !0, e.tags.push(e.tag), l(e, "onopentag", e.tag), t || (!e.noscript && e.tagName.toLowerCase() === "script" ? e.state = a.SCRIPT : e.state = a.TEXT, e.tag = null, e.tagName = ""), e.attribName = e.attribValue = "", e.attribList.length = 0; }
        function M(e) { if (!e.tagName) {
            u(e, "Weird empty close tag."), e.textNode += "</>", e.state = a.TEXT;
            return;
        } if (e.script) {
            if (e.tagName !== "script") {
                e.script += "</" + e.tagName + ">", e.tagName = "", e.state = a.SCRIPT;
                return;
            }
            l(e, "onscript", e.script), e.script = "";
        } var t = e.tags.length, n = e.tagName; e.strict || (n = n[e.looseCase]()); for (var i = n; t--;) {
            var c = e.tags[t];
            if (c.name !== i)
                u(e, "Unexpected close tag");
            else
                break;
        } if (t < 0) {
            u(e, "Unmatched closing tag: " + e.tagName), e.textNode += "</" + e.tagName + ">", e.state = a.TEXT;
            return;
        } e.tagName = n; for (var r = e.tags.length; r-- > t;) {
            var f = e.tag = e.tags.pop();
            e.tagName = e.tag.name, l(e, "onclosetag", e.tagName);
            var m = {};
            for (var _ in f.ns)
                m[_] = f.ns[_];
            var C = e.tags[e.tags.length - 1] || e;
            e.opt.xmlns && f.ns !== C.ns && Object.keys(f.ns).forEach(function (T) { var g = f.ns[T]; l(e, "onclosenamespace", { prefix: T, uri: g }); });
        } t === 0 && (e.closedRoot = !0), e.tagName = e.attribValue = e.attribName = "", e.attribList.length = 0, e.state = a.TEXT; }
        function ut(e) { var t = e.entity, n = t.toLowerCase(), i, c = ""; return e.ENTITIES[t] ? e.ENTITIES[t] : e.ENTITIES[n] ? e.ENTITIES[n] : (t = n, t.charAt(0) === "#" && (t.charAt(1) === "x" ? (t = t.slice(2), i = parseInt(t, 16), c = i.toString(16)) : (t = t.slice(1), i = parseInt(t, 10), c = i.toString(10))), t = t.replace(/^0+/, ""), isNaN(i) || c.toLowerCase() !== t ? (u(e, "Invalid character entity"), "&" + e.entity + ";") : String.fromCodePoint(i)); }
        function W(e, t) { t === "<" ? (e.state = a.OPEN_WAKA, e.startTagPosition = e.position) : E(t) || (u(e, "Non-whitespace before first tag."), e.textNode = t, e.state = a.TEXT); }
        function Q(e, t) { var n = ""; return t < e.length && (n = e.charAt(t)), n; }
        function st(e) {
            var t = this;
            if (this.error)
                throw this.error;
            if (t.closed)
                return y(t, "Cannot write after close. Assign an onready handler.");
            if (e === null)
                return q(t);
            typeof e == "object" && (e = e.toString());
            for (var n = 0, i = ""; i = Q(e, n++), t.c = i, !!i;)
                switch (t.trackPosition && (t.position++, i === `
` ? (t.line++, t.column = 0) : t.column++), t.state) {
                    case a.BEGIN:
                        if (t.state = a.BEGIN_WHITESPACE, i === "\uFEFF")
                            continue;
                        W(t, i);
                        continue;
                    case a.BEGIN_WHITESPACE:
                        W(t, i);
                        continue;
                    case a.TEXT:
                        if (t.sawRoot && !t.closedRoot) {
                            for (var c = n - 1; i && i !== "<" && i !== "&";)
                                i = Q(e, n++), i && t.trackPosition && (t.position++, i === `
` ? (t.line++, t.column = 0) : t.column++);
                            t.textNode += e.substring(c, n - 1);
                        }
                        i === "<" && !(t.sawRoot && t.closedRoot && !t.strict) ? (t.state = a.OPEN_WAKA, t.startTagPosition = t.position) : (!E(i) && (!t.sawRoot || t.closedRoot) && u(t, "Text data outside of root node."), i === "&" ? t.state = a.TEXT_ENTITY : t.textNode += i);
                        continue;
                    case a.SCRIPT:
                        i === "<" ? t.state = a.SCRIPT_ENDING : t.script += i;
                        continue;
                    case a.SCRIPT_ENDING:
                        i === "/" ? t.state = a.CLOSE_TAG : (t.script += "<" + i, t.state = a.SCRIPT);
                        continue;
                    case a.OPEN_WAKA:
                        if (i === "!")
                            t.state = a.SGML_DECL, t.sgmlDecl = "";
                        else if (!E(i))
                            if (d(h, i))
                                t.state = a.OPEN_TAG, t.tagName = i;
                            else if (i === "/")
                                t.state = a.CLOSE_TAG, t.tagName = "";
                            else if (i === "?")
                                t.state = a.PROC_INST, t.procInstName = t.procInstBody = "";
                            else {
                                if (u(t, "Unencoded <"), t.startTagPosition + 1 < t.position) {
                                    var r = t.position - t.startTagPosition;
                                    i = new Array(r).join(" ") + i;
                                }
                                t.textNode += "<" + i, t.state = a.TEXT;
                            }
                        continue;
                    case a.SGML_DECL:
                        (t.sgmlDecl + i).toUpperCase() === J ? (l(t, "onopencdata"), t.state = a.CDATA, t.sgmlDecl = "", t.cdata = "") : t.sgmlDecl + i === "--" ? (t.state = a.COMMENT, t.comment = "", t.sgmlDecl = "") : (t.sgmlDecl + i).toUpperCase() === tt ? (t.state = a.DOCTYPE, (t.doctype || t.sawRoot) && u(t, "Inappropriately located doctype declaration"), t.doctype = "", t.sgmlDecl = "") : i === ">" ? (l(t, "onsgmldeclaration", t.sgmlDecl), t.sgmlDecl = "", t.state = a.TEXT) : (v(i) && (t.state = a.SGML_DECL_QUOTED), t.sgmlDecl += i);
                        continue;
                    case a.SGML_DECL_QUOTED:
                        i === t.q && (t.state = a.SGML_DECL, t.q = ""), t.sgmlDecl += i;
                        continue;
                    case a.DOCTYPE:
                        i === ">" ? (t.state = a.TEXT, l(t, "ondoctype", t.doctype), t.doctype = !0) : (t.doctype += i, i === "[" ? t.state = a.DOCTYPE_DTD : v(i) && (t.state = a.DOCTYPE_QUOTED, t.q = i));
                        continue;
                    case a.DOCTYPE_QUOTED:
                        t.doctype += i, i === t.q && (t.q = "", t.state = a.DOCTYPE);
                        continue;
                    case a.DOCTYPE_DTD:
                        t.doctype += i, i === "]" ? t.state = a.DOCTYPE : v(i) && (t.state = a.DOCTYPE_DTD_QUOTED, t.q = i);
                        continue;
                    case a.DOCTYPE_DTD_QUOTED:
                        t.doctype += i, i === t.q && (t.state = a.DOCTYPE_DTD, t.q = "");
                        continue;
                    case a.COMMENT:
                        i === "-" ? t.state = a.COMMENT_ENDING : t.comment += i;
                        continue;
                    case a.COMMENT_ENDING:
                        i === "-" ? (t.state = a.COMMENT_ENDED, t.comment = X(t.opt, t.comment), t.comment && l(t, "oncomment", t.comment), t.comment = "") : (t.comment += "-" + i, t.state = a.COMMENT);
                        continue;
                    case a.COMMENT_ENDED:
                        i !== ">" ? (u(t, "Malformed comment"), t.comment += "--" + i, t.state = a.COMMENT) : t.state = a.TEXT;
                        continue;
                    case a.CDATA:
                        i === "]" ? t.state = a.CDATA_ENDING : t.cdata += i;
                        continue;
                    case a.CDATA_ENDING:
                        i === "]" ? t.state = a.CDATA_ENDING_2 : (t.cdata += "]" + i, t.state = a.CDATA);
                        continue;
                    case a.CDATA_ENDING_2:
                        i === ">" ? (t.cdata && l(t, "oncdata", t.cdata), l(t, "onclosecdata"), t.cdata = "", t.state = a.TEXT) : i === "]" ? t.cdata += "]" : (t.cdata += "]]" + i, t.state = a.CDATA);
                        continue;
                    case a.PROC_INST:
                        i === "?" ? t.state = a.PROC_INST_ENDING : E(i) ? t.state = a.PROC_INST_BODY : t.procInstName += i;
                        continue;
                    case a.PROC_INST_BODY:
                        if (!t.procInstBody && E(i))
                            continue;
                        i === "?" ? t.state = a.PROC_INST_ENDING : t.procInstBody += i;
                        continue;
                    case a.PROC_INST_ENDING:
                        i === ">" ? (l(t, "onprocessinginstruction", { name: t.procInstName, body: t.procInstBody }), t.procInstName = t.procInstBody = "", t.state = a.TEXT) : (t.procInstBody += "?" + i, t.state = a.PROC_INST_BODY);
                        continue;
                    case a.OPEN_TAG:
                        d(B, i) ? t.tagName += i : (ct(t), i === ">" ? D(t) : i === "/" ? t.state = a.OPEN_TAG_SLASH : (E(i) || u(t, "Invalid character in tag name"), t.state = a.ATTRIB));
                        continue;
                    case a.OPEN_TAG_SLASH:
                        i === ">" ? (D(t, !0), M(t)) : (u(t, "Forward-slash in opening tag not followed by >"), t.state = a.ATTRIB);
                        continue;
                    case a.ATTRIB:
                        if (E(i))
                            continue;
                        i === ">" ? D(t) : i === "/" ? t.state = a.OPEN_TAG_SLASH : d(h, i) ? (t.attribName = i, t.attribValue = "", t.state = a.ATTRIB_NAME) : u(t, "Invalid attribute name");
                        continue;
                    case a.ATTRIB_NAME:
                        i === "=" ? t.state = a.ATTRIB_VALUE : i === ">" ? (u(t, "Attribute without value"), t.attribValue = t.attribName, U(t), D(t)) : E(i) ? t.state = a.ATTRIB_NAME_SAW_WHITE : d(B, i) ? t.attribName += i : u(t, "Invalid attribute name");
                        continue;
                    case a.ATTRIB_NAME_SAW_WHITE:
                        if (i === "=")
                            t.state = a.ATTRIB_VALUE;
                        else {
                            if (E(i))
                                continue;
                            u(t, "Attribute without value"), t.tag.attributes[t.attribName] = "", t.attribValue = "", l(t, "onattribute", { name: t.attribName, value: "" }), t.attribName = "", i === ">" ? D(t) : d(h, i) ? (t.attribName = i, t.state = a.ATTRIB_NAME) : (u(t, "Invalid attribute name"), t.state = a.ATTRIB);
                        }
                        continue;
                    case a.ATTRIB_VALUE:
                        if (E(i))
                            continue;
                        v(i) ? (t.q = i, t.state = a.ATTRIB_VALUE_QUOTED) : (u(t, "Unquoted attribute value"), t.state = a.ATTRIB_VALUE_UNQUOTED, t.attribValue = i);
                        continue;
                    case a.ATTRIB_VALUE_QUOTED:
                        if (i !== t.q) {
                            i === "&" ? t.state = a.ATTRIB_VALUE_ENTITY_Q : t.attribValue += i;
                            continue;
                        }
                        U(t), t.q = "", t.state = a.ATTRIB_VALUE_CLOSED;
                        continue;
                    case a.ATTRIB_VALUE_CLOSED:
                        E(i) ? t.state = a.ATTRIB : i === ">" ? D(t) : i === "/" ? t.state = a.OPEN_TAG_SLASH : d(h, i) ? (u(t, "No whitespace between attributes"), t.attribName = i, t.attribValue = "", t.state = a.ATTRIB_NAME) : u(t, "Invalid attribute name");
                        continue;
                    case a.ATTRIB_VALUE_UNQUOTED:
                        if (!nt(i)) {
                            i === "&" ? t.state = a.ATTRIB_VALUE_ENTITY_U : t.attribValue += i;
                            continue;
                        }
                        U(t), i === ">" ? D(t) : t.state = a.ATTRIB;
                        continue;
                    case a.CLOSE_TAG:
                        if (t.tagName)
                            i === ">" ? M(t) : d(B, i) ? t.tagName += i : t.script ? (t.script += "</" + t.tagName, t.tagName = "", t.state = a.SCRIPT) : (E(i) || u(t, "Invalid tagname in closing tag"), t.state = a.CLOSE_TAG_SAW_WHITE);
                        else {
                            if (E(i))
                                continue;
                            ot(h, i) ? t.script ? (t.script += "</" + i, t.state = a.SCRIPT) : u(t, "Invalid tagname in closing tag.") : t.tagName = i;
                        }
                        continue;
                    case a.CLOSE_TAG_SAW_WHITE:
                        if (E(i))
                            continue;
                        i === ">" ? M(t) : u(t, "Invalid characters in closing tag");
                        continue;
                    case a.TEXT_ENTITY:
                    case a.ATTRIB_VALUE_ENTITY_Q:
                    case a.ATTRIB_VALUE_ENTITY_U:
                        var f, m;
                        switch (t.state) {
                            case a.TEXT_ENTITY:
                                f = a.TEXT, m = "textNode";
                                break;
                            case a.ATTRIB_VALUE_ENTITY_Q:
                                f = a.ATTRIB_VALUE_QUOTED, m = "attribValue";
                                break;
                            case a.ATTRIB_VALUE_ENTITY_U:
                                f = a.ATTRIB_VALUE_UNQUOTED, m = "attribValue";
                                break;
                        }
                        i === ";" ? (t[m] += ut(t), t.entity = "", t.state = f) : d(t.entity.length ? at : it, i) ? t.entity += i : (u(t, "Invalid character in entity name"), t[m] += "&" + t.entity + i, t.entity = "", t.state = f);
                        continue;
                    default: throw new Error(t, "Unknown state: " + t.state);
                }
            return t.position >= t.bufferCheckPosition && S(t), t;
        }
        String.fromCodePoint || function () { var e = String.fromCharCode, t = Math.floor, n = function () { var i = 16384, c = [], r, f, m = -1, _ = arguments.length; if (!_)
            return ""; for (var C = ""; ++m < _;) {
            var T = Number(arguments[m]);
            if (!isFinite(T) || T < 0 || T > 1114111 || t(T) !== T)
                throw RangeError("Invalid code point: " + T);
            T <= 65535 ? c.push(T) : (T -= 65536, r = (T >> 10) + 55296, f = T % 1024 + 56320, c.push(r, f)), (m + 1 === _ || c.length > i) && (C += e.apply(null, c), c.length = 0);
        } return C; }; Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", { value: n, configurable: !0, writable: !0 }) : String.fromCodePoint = n; }();
    })(typeof R > "u" ? R.sax = {} : R);
});
var Z = z(V()), dt = z(V()), { default: gt, ...It } = dt, bt = Z.default ?? gt ?? It;
export { bt as default };
/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
