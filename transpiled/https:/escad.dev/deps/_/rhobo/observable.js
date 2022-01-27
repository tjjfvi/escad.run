import { Writeable } from "/transpiled/https://escad.dev/deps/_/rhobo/writeable.js";
import { Readable } from "/transpiled/https://escad.dev/deps/_/rhobo/readable.js";
import { use_ } from "/transpiled/https://escad.dev/deps/_/rhobo/use_.js";
export class Observable extends Writeable {
    constructor(initialValue) {
        let v = () => initialValue;
        super(() => v(), (value) => {
            this.value = value;
            Readable.update(this);
        });
        this.value = initialValue;
        v = () => this.value;
    }
}
export function observable(value = null) {
    return new Observable(value);
}
export const obs = observable;
export const o = obs;
export const useObservable = use_(observable);
export const useObs = useObservable;
export const useO = useObs;
