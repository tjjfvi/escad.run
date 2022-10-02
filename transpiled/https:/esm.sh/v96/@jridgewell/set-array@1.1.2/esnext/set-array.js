/* esm.sh - esbuild bundle(@jridgewell/set-array@1.1.2) esnext production */
var i,
    r,
    u,
    d = class {
  constructor() {
    this._indexes = {
      __proto__: null
    }, this.array = [];
  }

};
i = (n, e) => n._indexes[e], r = (n, e) => {
  let t = i(n, e);
  if (t !== void 0) return t;
  let {
    array: s,
    _indexes: o
  } = n;
  return o[e] = s.push(e) - 1;
}, u = n => {
  let {
    array: e,
    _indexes: t
  } = n;
  if (e.length === 0) return;
  let s = e.pop();
  t[s] = void 0;
};
export { d as SetArray, i as get, u as pop, r as put };