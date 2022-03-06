import "/transpiled/https://escad.dev/core/mod.js"; // register serializers, needed for talking to renderer
import { createEventEmitter, createMessenger, logConnection, } from "/transpiled/https://escad.dev/messaging/mod.js";
import { transformUrl } from "/transpiled/https://escad.dev/server/transformUrl.js";
export const createServer = async ({ createRendererConnection, transpilerConnection, coreClientUrl, writeClientRoot, getTranspiledUrl, mapClientPlugins = (x) => x, initialPump = true, }) => {
    const createRendererMessenger = (lookupRaw) => createMessenger({
        impl: { lookupRaw },
        connection: logConnection(createRendererConnection()),
    });
    const transpiler = createMessenger({
        impl: {},
        connection: transpilerConnection,
    });
    let events = createEventEmitter();
    let lastClientPlugins = ["_"];
    if (initialPump) {
        const rootRenderer = createRendererMessenger(async () => null);
        const loadInfo = await rootRenderer.loadFile();
        rootRenderer.destroy();
        await updateClientPlugins(loadInfo.clientPlugins);
    }
    else {
        await updateClientPlugins([]);
    }
    return {
        addClient(connection) {
            const messenger = createServerClientMessenger(connection);
            return { destroy: () => messenger.destroy() };
        },
        transpiler,
        events,
    };
    async function updateClientPlugins(clientPlugins) {
        if (clientPlugins + "" === lastClientPlugins + "")
            return;
        lastClientPlugins = clientPlugins;
        let files = [coreClientUrl, ...clientPlugins.map(mapClientPlugins)];
        let content = files.map((x) => `import ${JSON.stringify(getTranspiledUrl(transformUrl(x)))}`).join("\n");
        await writeClientRoot(content);
        await transpiler.transpileAll(files);
    }
    function createServerClientMessenger(connection) {
        let renderer;
        const messenger = createMessenger({
            impl: {
                async lookupRef(loc) {
                    const hash = await renderer.lookupRef(loc);
                    return hash;
                },
                async run(params) {
                    reloadRenderer();
                    const info = await renderer.run(params);
                    updateClientPlugins(info.clientPlugins);
                    messenger.emit("info", info);
                    return info;
                },
            },
            connection,
        });
        reloadRenderer();
        messenger.emit("reload", transpiler.on("transpileFinish"));
        messenger.emit("changeObserved", events.on("changeObserved"));
        return messenger;
        function reloadRenderer() {
            console.log("Reloading renderer");
            renderer = createRendererMessenger(messenger.lookupRaw);
            messenger.emit("log", renderer.on("log"));
            renderer.on("renderStart", () => console.log("Render started"));
            renderer.on("renderFinish", () => console.log("Render finished"));
            return renderer;
        }
    }
};
