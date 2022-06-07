/* esm.sh - esbuild bundle(js-tokens@4.0.0) esnext production */
var p = Object.create;
var l = Object.defineProperty;
var F = Object.getOwnPropertyDescriptor;
var y = Object.getOwnPropertyNames;
var $ = Object.getPrototypeOf,
    a = Object.prototype.hasOwnProperty;

var b = (e, s) => () => (s || e((s = {
  exports: {}
}).exports, s), s.exports);

var g = (e, s, o, f) => {
  if (s && typeof s == "object" || typeof s == "function") for (let u of y(s)) !a.call(e, u) && u !== o && l(e, u, {
    get: () => s[u],
    enumerable: !(f = F(s, u)) || f.enumerable
  });
  return e;
};

var n = (e, s, o) => (o = e != null ? p($(e)) : {}, g(s || !e || !e.__esModule ? l(o, "default", {
  value: e,
  enumerable: !0
}) : o, e));

var t = b(d => {
  Object.defineProperty(d, "__esModule", {
    value: !0
  });
  d.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g;

  d.matchToToken = function (e) {
    var s = {
      type: "invalid",
      value: e[0],
      closed: void 0
    };
    return e[1] ? (s.type = "string", s.closed = !!(e[3] || e[4])) : e[5] ? s.type = "comment" : e[6] ? (s.type = "comment", s.closed = !!e[7]) : e[8] ? s.type = "regex" : e[9] ? s.type = "number" : e[10] ? s.type = "name" : e[11] ? s.type = "punctuator" : e[12] && (s.type = "whitespace"), s;
  };
});
var i = n(t()),
    r = n(t()),
    {
  __esModule: k,
  matchToToken: m
} = r,
    {
  default: v,
  ...x
} = r,
    A = i.default ?? v ?? x;
export { k as __esModule, A as default, m as matchToToken };