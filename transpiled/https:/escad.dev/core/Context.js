import { contextStack as defaultContextStack, } from "/transpiled/https://escad.dev/core/ContextStack.js";
export class Context {
    id;
    defaultValue;
    contextStack;
    constructor(id, defaultValue, contextStack = defaultContextStack) {
        this.id = id;
        this.defaultValue = defaultValue;
        this.contextStack = contextStack;
    }
    get() {
        return this.contextStack.get(this.id) ?? this.defaultValue;
    }
    set(value) {
        this.contextStack.set(this.id, value);
    }
    wrap(value, fn) {
        return this.contextStack.wrap(() => {
            this.set(value);
            return fn();
        });
    }
}
