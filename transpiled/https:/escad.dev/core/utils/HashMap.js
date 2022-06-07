import { Hash } from "/transpiled/https://escad.dev/core/utils/Hash.js";
export class HashMap {
  map = new Map();

  set(key, value) {
    this.map.set(Hash.create(key), value);
    return this;
  }

  get(key) {
    return this.map.get(Hash.create(key));
  }

  has(key) {
    return this.map.has(Hash.create(key));
  }

  clear() {
    this.map.clear();
    return this;
  }

  delete(key) {
    return this.map.delete(Hash.create(key));
  }

  get size() {
    return this.map.size;
  }

  values() {
    return this.map.values();
  }

}