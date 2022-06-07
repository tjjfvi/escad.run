/* esm.sh - esbuild bundle(@jridgewell/set-array@1.1.1) esnext production */
var u = Object.defineProperty;

var t = (n, e) => u(n, "name", {
  value: e,
  configurable: !0
});

var o,
    l,
    p,
    d = class {
  constructor() {
    this._indexes = {
      __proto__: null
    }, this.array = [];
  }

};
t(d, "SetArray");
o = t((n, e) => n._indexes[e], "get"), l = t((n, e) => {
  let s = o(n, e);
  if (s !== void 0) return s;
  let {
    array: i,
    _indexes: r
  } = n;
  return r[e] = i.push(e) - 1;
}, "put"), p = t(n => {
  let {
    array: e,
    _indexes: s
  } = n;
  if (e.length === 0) return;
  let i = e.pop();
  s[i] = void 0;
}, "pop");
export { d as SetArray, o as get, p as pop, l as put };