import React from "/transpiled/https://escad.dev/deps/react.js";
import { tsee } from "/transpiled/https://escad.dev/deps/tsee.js";
import { MultiSet } from "/transpiled/https://escad.dev/deps/_/rhobo/MultiSet.js";
import { Callable } from "/transpiled/https://escad.dev/deps/_/rhobo/Callable.js";
import { use_ } from "/transpiled/https://escad.dev/deps/_/rhobo/use_.js";
let cur;
class EE extends tsee.EventEmitter {
}
export class Readable extends Callable(tsee.EventEmitter) {
    value;
    alive = true;
    symb;
    func;
    deps = new Set();
    dependents = new Set();
    constructor(func) {
        super();
        this.func = func;
        Readable.update(this);
    }
    addDep(readable) {
        this.deps.add(readable);
        readable.addDependent(this);
    }
    clearDeps() {
        for (let dep of this.deps) {
            dep.removeDependent(this);
        }
        this.deps.clear();
    }
    addDependent(readable) {
        this.dependents.add(readable);
    }
    removeDependent(readable) {
        this.dependents.delete(readable);
    }
    update(tbu = new MultiSet(), uip = new Set()) {
        if (!this.alive) {
            throw new Error("Called .update on dead Readable");
        }
        if (uip.has(this)) {
            console.warn("Circular dependency; using old value");
            return {
                readable: this,
                register: () => void 0,
                update: () => void 0,
            };
        }
        let uip2 = new Set(uip);
        uip2.add(this);
        let { dependents } = this;
        let subs = new Set(function* () {
            for (let dependent of new Set(dependents)) {
                yield dependent.update(tbu, uip2);
            }
        }());
        return {
            readable: this,
            register: () => {
                tbu.add(this);
                if (tbu.has(this) === 1) {
                    for (let sub of subs) {
                        sub.register();
                    }
                }
            },
            update: () => {
                this.clearDeps();
                let lastCur = cur;
                cur = this;
                this.value = this.func();
                this.symb = Symbol();
                cur = lastCur;
                this.emit("update");
                for (let sub of new Set(subs)) {
                    tbu.remove(sub.readable);
                    if (!tbu.has(sub.readable)) {
                        sub.update();
                    }
                }
            },
        };
    }
    static update(r) {
        let obj = r.update();
        obj.register();
        obj.update();
    }
    get = () => {
        if (!this.alive) {
            throw new Error("Called .get on dead Readable");
        }
        if (cur) {
            cur.addDep(this);
        }
        return this.value;
    };
    inn(f) {
        if (!this.alive) {
            throw new Error("Called .inn on dead Readable");
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (this.value)
            f(this.value);
        return this;
    }
    tap(f) {
        if (!this.alive) {
            throw new Error("Called .tap on dead Readable");
        }
        f(this.value);
        return this;
    }
    use() {
        const [, setState] = React.useState({});
        const lastSymb = React.useRef(this.symb);
        lastSymb.current = this.symb;
        const handler = () => {
            if (lastSymb.current !== this.symb) {
                setTimeout(() => setState({}), 0);
            }
        };
        React.useEffect(() => {
            this.on("update", handler);
            return () => void this.removeListener("update", handler);
        }, []);
        return this;
    }
    kill() {
        this.clearDeps();
        this.alive = false;
        // @ts-ignore
        delete this.value;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __f(...a) {
        a;
        return this.get();
    }
    _obs;
    get obs() {
        return this._obs = this._obs || new Proxy({}, {
            // @ts-ignore
            get: (t, k) => k in t ? t[k] : t[k] = new Readable(() => this.get()?.[k]),
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static setCur(r) {
        r.clearDeps();
        let oldCur = cur;
        cur = r;
        return () => {
            cur = oldCur;
        };
    }
}
export function readable(func) {
    return new Readable(func);
}
export const useReadable = use_(readable);
