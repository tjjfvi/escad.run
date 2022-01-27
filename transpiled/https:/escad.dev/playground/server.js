import { createServer as _createServer } from "/transpiled/https://escad.dev/server/mod.js";
import { brandConnection, serializeConnection, workerConnection, } from "/transpiled/https://escad.dev/messages/mod.js";
import { clientId } from "/transpiled/https://escad.dev/playground/swApi.js";
import { put } from "/transpiled/https://escad.dev/playground/swApi.js";
import { getRendererWorkerUrl } from "/transpiled/https://escad.dev/playground/renderer.js";
import { transpiler, transpilerConnection } from "/transpiled/https://escad.dev/playground/transpiler.js";
import { getTranspiledUrl } from "/transpiled/https://escad.dev/playground/getTranspiledUrl.js";
import { escadLocation } from "/transpiled/https://escad.dev/playground/escadLocation.js";
import "/transpiled/https://escad.dev/playground/code.js";
const rendererWorkerUrl = await getRendererWorkerUrl();
export const server = await _createServer({
    createRendererConnection: () => serializeConnection(workerConnection(worker(rendererWorkerUrl))),
    transpilerConnection: brandConnection(transpilerConnection, "b"),
    coreClientUrl: escadLocation + "/playground/client.tsx",
    writeClientRoot: async (content) => {
        console.log("clientroot");
        await put(`${clientId}/client.js`, content);
    },
    mapClientPlugins: (url) => {
        if (url.startsWith(location.origin + "/transpiled/")) {
            return url.slice((location.origin + "/transpiled/").length);
        }
        return url;
    },
    getTranspiledUrl,
});
server.events.emit("changeObserved", transpiler.on("transpileFinish"));
function worker(relativePath) {
    let url = new URL(relativePath, import.meta.url).toString();
    return new Worker(url, { type: "module" });
}
