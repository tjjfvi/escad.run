import { HashMap } from "/transpiled/https://escad.dev/core/utils/HashMap.js";
import { HashSet } from "/transpiled/https://escad.dev/core/utils/HashSet.js";
export class MultiHashMap {
    map = new HashMap();
    clear() {
        this.map.clear();
    }
    add(key, value) {
        this.getSet(key).add(value);
        return this;
    }
    deleteAll(key) {
        return this.map.delete(key);
    }
    delete(key, value) {
        return this.getSet(key).delete(value);
    }
    has(key, value) {
        return this.getSet(key).has(value);
    }
    hasAny(key) {
        return !!this.getSet(key).size;
    }
    getAll(key) {
        return this.getSet(key);
    }
    getSet(key) {
        const existingSet = this.map.get(key);
        if (existingSet) {
            return existingSet;
        }
        const newSet = new HashSet();
        this.map.set(key, newSet);
        return newSet;
    }
    *values() {
        for (const set of this.map.values()) {
            yield* set;
        }
    }
}
