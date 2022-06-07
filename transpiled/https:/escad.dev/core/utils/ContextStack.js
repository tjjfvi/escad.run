export class ContextStack {
  root = Object.create(null);
  contextMap = this.root;

  wrap(fn) {
    const orig = this.contextMap;
    this.contextMap = Object.create(this.contextMap);
    const result = fn();
    this.contextMap = orig;
    return result;
  }

  get(id) {
    return this.contextMap[id];
  }

  set(id, value) {
    this.contextMap[id] = value;
  }

}
export const contextStack = new ContextStack();