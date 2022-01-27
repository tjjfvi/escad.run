import { Readable } from "/transpiled/https://escad.dev/deps/_/rhobo/readable.js";
import { use_ } from "/transpiled/https://escad.dev/deps/_/rhobo/use_.js";
export class Writeable extends Readable {
    setFunc;
    constructor(get, set) {
        super(get);
        this.setFunc = set;
    }
    set = (value) => {
        if (!this.alive) {
            throw new Error("Called .set on dead writeable");
        }
        this.setFunc(value);
        return value;
    };
    __f(...x) {
        if (x.length) {
            return this.set(x[0]);
        }
        return this.get();
    }
    _obsW;
    get obs() {
        return this._obsW = this._obsW || new Proxy({}, {
            get: (t, k) => 
            // @ts-ignore
            k in t ? t[k] : t[k] = new Writeable(() => this.get()?.[k], (v) => {
                // @ts-ignore
                this.value[k] = v;
                // @ts-ignore
                Readable.update(t[k]);
            }),
        });
    }
}
export function writeable(get, set) {
    return new Writeable(get, set);
}
export const useWriteable = use_(writeable);
