export class MultiSet {
    map = new Map();
    add(v) {
        this.map.set(v, (this.map.get(v) ?? 0) + 1);
        return this;
    }
    remove(v) {
        this.map.set(v, (this.map.get(v) || 1) - 1);
        return this;
    }
    has(v) {
        return this.map.get(v) ?? 0;
    }
}
