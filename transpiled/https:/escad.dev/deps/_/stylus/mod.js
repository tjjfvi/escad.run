import "/transpiled/https://escad.dev/deps/_/stylus/_polyfills.js";
import { restore } from "/transpiled/https://escad.dev/deps/_/stylus/_redefineProto.js";
import * as stylus from "/transpiled/https://esm.sh/stylus/lib/stylus.js";
export { stylus };
restore();
for (let x in stylus.nodes) {
    // @ts-ignore
    if (typeof stylus.nodes[x] === "function") {
        // @ts-ignore
        Object.defineProperty(stylus.nodes[x], "name", { value: x });
    }
}
