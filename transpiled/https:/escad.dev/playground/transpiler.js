import { brandConnection, createMessenger, workerConnection, } from "/transpiled/https://escad.dev/messages/mod.js";
export const transpilerConnection = workerConnection(worker("./transpilerWorker.js"));
export const transpiler = createMessenger({
    impl: {},
    connection: brandConnection(transpilerConnection, "a"),
});
function worker(relativePath) {
    let url = new URL(relativePath, import.meta.url).toString();
    return new Worker(url, { type: "module" });
}
