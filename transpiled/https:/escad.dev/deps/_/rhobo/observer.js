import { Readable, useReadable } from "/transpiled/https://escad.dev/deps/_/rhobo/readable.js";
export const observer = (component) => (i) => {
    let c = useReadable.use(() => null);
    let d = Readable.setCur(c);
    let result = component(i);
    d();
    return result;
};
