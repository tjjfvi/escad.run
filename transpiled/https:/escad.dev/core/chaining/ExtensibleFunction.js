const map = new WeakMap();
export class ExtensibleFunction extends Function {
  // eslint-disable
  // @ts-ignore
  constructor(func, handler = {}, name = "") {
    const that = Object.setPrototypeOf({
      [name]: function (...a) {
        return func.call(this, ...a);
      }
    }[name], new Proxy(new.target.prototype, handler));
    map.set(that, new.target);
    return that;
  }

}
Object.defineProperty(ExtensibleFunction, Symbol.hasInstance, {
  value: function (inst) {
    let Class = map.get(inst);
    if (!Class) return false;
    return Class.prototype === this.prototype;
  }
});