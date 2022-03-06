import { Thing } from "/transpiled/https://escad.dev/core/chaining/Thing.js";
export function pickChainables(obj) {
    let chainables = {};
    for (let key in obj) {
        if (Thing.isThing(obj[key]))
            chainables[key] = obj[key];
    }
    return chainables;
}
