/* esm.sh - esbuild bundle(convert-source-map@1.8.0) esnext production */
import __safe_buffer$ from "/transpiled/https://esm.sh/v96/safe-buffer@5.1.2/esnext/safe-buffer.js";
import __path$ from "/transpiled/https://esm.sh/v96/path-browserify@1.0.1/esnext/path-browserify.bundle.js";
import __fs$ from "/transpiled/https://esm.sh/v96/node_fs.js";
var g = Object.create;
var u = Object.defineProperty;
var d = Object.getOwnPropertyDescriptor;
var C = Object.getOwnPropertyNames;
var h = Object.getPrototypeOf,
    F = Object.prototype.hasOwnProperty;

var a = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (t, n) => (typeof require < "u" ? require : t)[n]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var S = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var y = (e, t, n, m) => {
  if (t && typeof t == "object" || typeof t == "function") for (let i of C(t)) !F.call(e, i) && i !== n && u(e, i, {
    get: () => t[i],
    enumerable: !(m = d(t, i)) || m.enumerable
  });
  return e;
};

var v = (e, t, n) => (n = e != null ? g(h(e)) : {}, y(t || !e || !e.__esModule ? u(n, "default", {
  value: e,
  enumerable: !0
}) : n, e));

var c = S(r => {
  "use strict";

  var O = __fs$,
      x = __path$,
      p = __safe_buffer$;
  Object.defineProperty(r, "commentRegex", {
    get: function () {
      return /^\s*\/(?:\/|\*)[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/mg;
    }
  });
  Object.defineProperty(r, "mapFileCommentRegex", {
    get: function () {
      return /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"`]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^\*]+?)[ \t]*(?:\*\/){1}[ \t]*$)/mg;
    }
  });

  function M(e) {
    return (p.Buffer.from(e, "base64") || "").toString();
  }

  function R(e) {
    return e.split(",").pop();
  }

  function w(e, t) {
    var n = r.mapFileCommentRegex.exec(e),
        m = n[1] || n[2],
        i = x.resolve(t, m);

    try {
      return O.readFileSync(i, "utf8");
    } catch (l) {
      throw new Error("An error occurred while trying to read the map file at " + i + `
` + l);
    }
  }

  function o(e, t) {
    t = t || {}, t.isFileComment && (e = w(e, t.commentFileDir)), t.hasComment && (e = R(e)), t.isEncoded && (e = M(e)), (t.isJSON || t.isEncoded) && (e = JSON.parse(e)), this.sourcemap = e;
  }

  o.prototype.toJSON = function (e) {
    return JSON.stringify(this.sourcemap, null, e);
  };

  o.prototype.toBase64 = function () {
    var e = this.toJSON();
    return (p.Buffer.from(e, "utf8") || "").toString("base64");
  };

  o.prototype.toComment = function (e) {
    var t = this.toBase64(),
        n = "sourceMappingURL=data:application/json;charset=utf-8;base64," + t;
    return e && e.multiline ? "/*# " + n + " */" : "//# " + n;
  };

  o.prototype.toObject = function () {
    return JSON.parse(this.toJSON());
  };

  o.prototype.addProperty = function (e, t) {
    if (this.sourcemap.hasOwnProperty(e)) throw new Error('property "' + e + '" already exists on the sourcemap, use set property instead');
    return this.setProperty(e, t);
  };

  o.prototype.setProperty = function (e, t) {
    return this.sourcemap[e] = t, this;
  };

  o.prototype.getProperty = function (e) {
    return this.sourcemap[e];
  };

  r.fromObject = function (e) {
    return new o(e);
  };

  r.fromJSON = function (e) {
    return new o(e, {
      isJSON: !0
    });
  };

  r.fromBase64 = function (e) {
    return new o(e, {
      isEncoded: !0
    });
  };

  r.fromComment = function (e) {
    return e = e.replace(/^\/\*/g, "//").replace(/\*\/$/g, ""), new o(e, {
      isEncoded: !0,
      hasComment: !0
    });
  };

  r.fromMapFileComment = function (e, t) {
    return new o(e, {
      commentFileDir: t,
      isFileComment: !0,
      isJSON: !0
    });
  };

  r.fromSource = function (e) {
    var t = e.match(r.commentRegex);
    return t ? r.fromComment(t.pop()) : null;
  };

  r.fromMapFileSource = function (e, t) {
    var n = e.match(r.mapFileCommentRegex);
    return n ? r.fromMapFileComment(n.pop(), t) : null;
  };

  r.removeComments = function (e) {
    return e.replace(r.commentRegex, "");
  };

  r.removeMapFileComments = function (e) {
    return e.replace(r.mapFileCommentRegex, "");
  };

  r.generateMapFileComment = function (e, t) {
    var n = "sourceMappingURL=" + e;
    return t && t.multiline ? "/*# " + n + " */" : "//# " + n;
  };
});
var s = v(c()),
    {
  commentRegex: j,
  mapFileCommentRegex: B,
  fromObject: P,
  fromJSON: E,
  fromBase64: _,
  fromComment: L,
  fromMapFileComment: U,
  fromSource: $,
  fromMapFileSource: q,
  removeComments: D,
  removeMapFileComments: A,
  generateMapFileComment: z
} = s,
    {
  default: f,
  ...J
} = s,
    G = f !== void 0 ? f : J;
export { j as commentRegex, G as default, _ as fromBase64, L as fromComment, E as fromJSON, U as fromMapFileComment, q as fromMapFileSource, P as fromObject, $ as fromSource, z as generateMapFileComment, B as mapFileCommentRegex, D as removeComments, A as removeMapFileComments };