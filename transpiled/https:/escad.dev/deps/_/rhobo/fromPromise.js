import { Readable } from "/transpiled/https://escad.dev/deps/_/rhobo/readable.js";
import { use_ } from "/transpiled/https://escad.dev/deps/_/rhobo/use_.js";
class FromPromise extends Readable {
    prom;
    constructor(prom, initialValue) {
        let fv = false;
        super(() => fv ? this.value : initialValue);
        fv = true;
        this.prom = prom;
        this.then = prom.then.bind(prom);
        this.catch = prom.catch.bind(prom);
        this.finally = prom.finally.bind(prom);
        prom.then((v) => {
            this.value = v;
            Readable.update(this);
        });
    }
    then;
    catch;
    finally;
}
export function fromPromise(prom, initialValue = null) {
    return new FromPromise(typeof prom === "function" ? prom() : prom, initialValue);
}
export const fromProm = fromPromise;
export const fp = fromProm;
export const useFromPromise = use_(fromPromise);
export const useFromProm = useFromPromise;
export const useFp = useFromProm;
