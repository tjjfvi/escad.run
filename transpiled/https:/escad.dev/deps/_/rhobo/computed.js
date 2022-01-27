import { readable } from "/transpiled/https://escad.dev/deps/_/rhobo/readable.js";
import { writeable } from "/transpiled/https://escad.dev/deps/_/rhobo/writeable.js";
import { use_ } from "/transpiled/https://escad.dev/deps/_/rhobo/use_.js";
export function computed(get, set) {
    if (set) {
        return writeable(get, set);
    }
    return readable(get);
}
export const comp = computed;
export const c = comp;
export const useComputed = use_(computed);
export const useComp = useComputed;
export const useC = useComp;
