/* esm.sh - esbuild bundle(js-tokens@4.0.0) esnext production */
var r = Object.create;
var n = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var F = Object.getOwnPropertyNames;
var y = Object.getPrototypeOf,
    _ = Object.prototype.hasOwnProperty;

var $ = (e, s) => () => (s || e((s = {
  exports: {}
}).exports, s), s.exports);

var a = (e, s, u, t) => {
  if (s && typeof s == "object" || typeof s == "function") for (let d of F(s)) !_.call(e, d) && d !== u && n(e, d, {
    get: () => s[d],
    enumerable: !(t = p(s, d)) || t.enumerable
  });
  return e;
};

var b = (e, s, u) => (u = e != null ? r(y(e)) : {}, a(s || !e || !e.__esModule ? n(u, "default", {
  value: e,
  enumerable: !0
}) : u, e));

var f = $(o => {
  Object.defineProperty(o, "__esModule", {
    value: !0
  });
  o.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g;

  o.matchToToken = function (e) {
    var s = {
      type: "invalid",
      value: e[0],
      closed: void 0
    };
    return e[1] ? (s.type = "string", s.closed = !!(e[3] || e[4])) : e[5] ? s.type = "comment" : e[6] ? (s.type = "comment", s.closed = !!e[7]) : e[8] ? s.type = "regex" : e[9] ? s.type = "number" : e[10] ? s.type = "name" : e[11] ? s.type = "punctuator" : e[12] && (s.type = "whitespace"), s;
  };
});
var i = b(f()),
    T = !0,
    {
  matchToToken: c
} = i,
    {
  default: l,
  ...x
} = i,
    k = l !== void 0 ? l : x;
export { T as __esModule, k as default, c as matchToToken };