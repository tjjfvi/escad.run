/* esm.sh - esbuild bundle(convert-source-map@1.8.0) esnext production */
import __safe_buffer$ from "/transpiled/https://esm.sh/v85/safe-buffer@5.1.2/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/safe-buffer.js";
import __path$ from "/transpiled/https://esm.sh/v85/path-browserify@1.0.1/esnext/path-browserify.bundle.js";
import __fs$ from "/transpiled/https://esm.sh/v85/node_fs.js";
var C = Object.create;
var u = Object.defineProperty;
var h = Object.getOwnPropertyDescriptor;
var F = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf,
    y = Object.prototype.hasOwnProperty;

var m = (e, r) => u(e, "name", {
  value: r,
  configurable: !0
}),
    p = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (r, o) => (typeof require != "undefined" ? require : r)[o]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var v = (e, r) => () => (r || e((r = {
  exports: {}
}).exports, r), r.exports);

var O = (e, r, o, a) => {
  if (r && typeof r == "object" || typeof r == "function") for (let i of F(r)) !y.call(e, i) && i !== o && u(e, i, {
    get: () => r[i],
    enumerable: !(a = h(r, i)) || a.enumerable
  });
  return e;
};

var f = (e, r, o) => (o = e != null ? C(S(e)) : {}, O(r || !e || !e.__esModule ? u(o, "default", {
  value: e,
  enumerable: !0
}) : o, e));

var c = v(t => {
  "use strict";

  var x = __fs$,
      M = __path$,
      s = __safe_buffer$;
  Object.defineProperty(t, "commentRegex", {
    get: m(function () {
      return /^\s*\/(?:\/|\*)[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/mg;
    }, "getCommentRegex")
  });
  Object.defineProperty(t, "mapFileCommentRegex", {
    get: m(function () {
      return /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"`]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^\*]+?)[ \t]*(?:\*\/){1}[ \t]*$)/mg;
    }, "getMapFileCommentRegex")
  });

  function R(e) {
    return (s.Buffer.from(e, "base64") || "").toString();
  }

  m(R, "decodeBase64");

  function w(e) {
    return e.split(",").pop();
  }

  m(w, "stripComment");

  function J(e, r) {
    var o = t.mapFileCommentRegex.exec(e),
        a = o[1] || o[2],
        i = M.resolve(r, a);

    try {
      return x.readFileSync(i, "utf8");
    } catch (d) {
      throw new Error("An error occurred while trying to read the map file at " + i + `
` + d);
    }
  }

  m(J, "readFromFileMap");

  function n(e, r) {
    r = r || {}, r.isFileComment && (e = J(e, r.commentFileDir)), r.hasComment && (e = w(e)), r.isEncoded && (e = R(e)), (r.isJSON || r.isEncoded) && (e = JSON.parse(e)), this.sourcemap = e;
  }

  m(n, "Converter");

  n.prototype.toJSON = function (e) {
    return JSON.stringify(this.sourcemap, null, e);
  };

  n.prototype.toBase64 = function () {
    var e = this.toJSON();
    return (s.Buffer.from(e, "utf8") || "").toString("base64");
  };

  n.prototype.toComment = function (e) {
    var r = this.toBase64(),
        o = "sourceMappingURL=data:application/json;charset=utf-8;base64," + r;
    return e && e.multiline ? "/*# " + o + " */" : "//# " + o;
  };

  n.prototype.toObject = function () {
    return JSON.parse(this.toJSON());
  };

  n.prototype.addProperty = function (e, r) {
    if (this.sourcemap.hasOwnProperty(e)) throw new Error('property "' + e + '" already exists on the sourcemap, use set property instead');
    return this.setProperty(e, r);
  };

  n.prototype.setProperty = function (e, r) {
    return this.sourcemap[e] = r, this;
  };

  n.prototype.getProperty = function (e) {
    return this.sourcemap[e];
  };

  t.fromObject = function (e) {
    return new n(e);
  };

  t.fromJSON = function (e) {
    return new n(e, {
      isJSON: !0
    });
  };

  t.fromBase64 = function (e) {
    return new n(e, {
      isEncoded: !0
    });
  };

  t.fromComment = function (e) {
    return e = e.replace(/^\/\*/g, "//").replace(/\*\/$/g, ""), new n(e, {
      isEncoded: !0,
      hasComment: !0
    });
  };

  t.fromMapFileComment = function (e, r) {
    return new n(e, {
      commentFileDir: r,
      isFileComment: !0,
      isJSON: !0
    });
  };

  t.fromSource = function (e) {
    var r = e.match(t.commentRegex);
    return r ? t.fromComment(r.pop()) : null;
  };

  t.fromMapFileSource = function (e, r) {
    var o = e.match(t.mapFileCommentRegex);
    return o ? t.fromMapFileComment(o.pop(), r) : null;
  };

  t.removeComments = function (e) {
    return e.replace(t.commentRegex, "");
  };

  t.removeMapFileComments = function (e) {
    return e.replace(t.mapFileCommentRegex, "");
  };

  t.generateMapFileComment = function (e, r) {
    var o = "sourceMappingURL=" + e;
    return r && r.multiline ? "/*# " + o + " */" : "//# " + o;
  };
});
var l = f(c()),
    g = f(c()),
    {
  commentRegex: $,
  mapFileCommentRegex: P,
  fromObject: E,
  fromJSON: L,
  fromBase64: U,
  fromComment: q,
  fromMapFileComment: D,
  fromSource: A,
  fromMapFileSource: z,
  removeComments: G,
  removeMapFileComments: H,
  generateMapFileComment: I
} = g,
    {
  default: N,
  ...b
} = g,
    K = l.default ?? N ?? b;
export { $ as commentRegex, K as default, U as fromBase64, q as fromComment, L as fromJSON, D as fromMapFileComment, z as fromMapFileSource, E as fromObject, A as fromSource, I as generateMapFileComment, P as mapFileCommentRegex, G as removeComments, H as removeMapFileComments };