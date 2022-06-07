import { HashMap } from "/transpiled/https://escad.dev/core/utils/HashMap.js";
export class HashSet {
  map = new HashMap();

  add(value) {
    this.map.set(value, value);
    return this;
  }

  has(value) {
    return this.map.has(value);
  }

  clear() {
    this.map.clear();
    return this;
  }

  delete(value) {
    return this.map.delete(value);
  }

  get size() {
    return this.map.size;
  }

  values() {
    return this.map.values();
  }

  [Symbol.iterator]() {
    return this.map.values();
  }

}