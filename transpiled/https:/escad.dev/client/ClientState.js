import { computed, observable } from "/transpiled/https://escad.dev/deps/rhobo.js";
import { $wrappedValue, } from "/transpiled/https://escad.dev/core/mod.js";
import React from "/transpiled/https://escad.dev/deps/react.js";
import { createConnectionPair, createMessenger, logConnection, serializeConnection, } from "/transpiled/https://escad.dev/messages/mod.js";
import { resolveHierarchySelection, } from "/transpiled/https://escad.dev/client/HierarchySelection.js";
import { Loading } from "/transpiled/https://escad.dev/client/Loading.js";
import { mdi } from "/transpiled/https://escad.dev/client/Icon.js";
import { Sha256 } from "/transpiled/https://escad.dev/deps/sha256.js";
const lookupRawRetryTimer = 500;
const _ClientStateContext = React.createContext(null);
export class ClientState {
    connection;
    artifactManager;
    hashToUrl;
    static Context = _ClientStateContext;
    bundleHash = fetch("/bundle.hash").then((r) => r.text()).catch(() => null);
    serverStatus = observable("disconnected");
    clientStatus = observable("current");
    renderJobsPending = observable(0);
    rendererStatus = observable("unknown");
    viewerStatus = observable("displayed");
    statuses = observable([
        {
            name: "Renderer",
            icon: mdi.cubeOutline,
            statuses: {
                rendered: {
                    className: "good",
                    name: "Rendered",
                    icon: mdi.check,
                },
                rendering: {
                    className: "active",
                    name: "Rendering",
                    icon: Loading,
                },
                awaiting: {
                    className: "inactive",
                    name: "Awaiting",
                    icon: Loading,
                },
                unknown: {
                    className: "inactive",
                    name: "Unknown",
                    icon: mdi.help,
                },
            },
            state: computed(() => {
                if (this.serverStatus() !== "connected") {
                    return this.renderJobsPending() ? "awaiting" : "unknown";
                }
                return this.renderJobsPending() ? "rendering" : "rendered";
            }),
        },
        {
            name: "Connection",
            icon: mdi.arrowUpDown,
            statuses: {
                connected: {
                    className: "good",
                    name: "Connected",
                    icon: mdi.check,
                },
                disconnected: {
                    className: "bad",
                    name: "Disconnected",
                    icon: mdi.close,
                },
                connecting: {
                    className: "unknown",
                    name: "Connecting",
                    icon: Loading,
                },
            },
            state: this.serverStatus,
        },
        {
            name: "Client",
            icon: mdi.account,
            statuses: {
                current: {
                    className: "good",
                    name: "Up to Date",
                    icon: mdi.check,
                },
                bundling: {
                    className: "unknown",
                    name: "Bundling",
                    icon: Loading,
                },
                reload: {
                    className: "attention",
                    name: "Reload",
                    icon: mdi.refresh,
                    onClick: () => window.location.reload(),
                },
                unknown: {
                    className: "inactive",
                    name: "Unknown",
                    icon: mdi.help,
                },
            },
            state: computed(() => {
                if (this.serverStatus() !== "connected")
                    return "unknown";
                return this.clientStatus();
            }),
        },
        {
            name: "Viewer",
            icon: mdi.axisArrow,
            statuses: {
                displayed: {
                    className: "good",
                    name: "Displayed",
                    icon: mdi.check,
                },
                converting: {
                    className: "active",
                    name: "Converting",
                    icon: Loading,
                },
                awaiting: {
                    className: "inactive",
                    name: "Awaiting",
                    icon: Loading,
                },
            },
            state: computed(() => {
                if (this.viewerStatus() === "displayed" ||
                    this.serverStatus() === "connected") {
                    return this.viewerStatus();
                }
                return "awaiting";
            }),
        },
    ]);
    sentProductHashes = observable([]);
    selection = observable();
    products = observable([]);
    exportTypes = observable([]);
    paramDef = observable();
    params = observable({});
    hierarchy = observable();
    logs = observable([]);
    sendParams = false;
    resolvedSelection = computed(() => {
        const selection = this.selection();
        if (!selection)
            return null;
        const hierarchy = this.hierarchy();
        if (!hierarchy)
            return null;
        return resolveHierarchySelection(selection, hierarchy);
    });
    productHashes = computed(() => this.selection()
        ? [...this.resolvedSelection()?.entries() ?? []].filter(([, v]) => v === true).map(([k]) => k)
        : this.sentProductHashes());
    clientServerMessenger;
    constructor(connection, artifactManager, hashToUrl) {
        this.connection = connection;
        this.artifactManager = artifactManager;
        this.hashToUrl = hashToUrl;
        const excludeStores = new Set([this]);
        this.clientServerMessenger = createMessenger({
            impl: {
                lookupRaw: async (hash) => {
                    const result = await this.artifactManager.lookupRawWrapped(hash, excludeStores);
                    if (!result)
                        return null;
                    return [...$wrappedValue.serialize(result)];
                },
            },
            connection: logConnection(this.connection),
        });
        this.artifactManager.artifactStores.unshift(this);
        this.productHashes.on("update", async () => {
            this.products(await Promise.all(this.productHashes().map(async (hash) => {
                const product = await this.artifactManager.lookupRaw(hash);
                if (!product) {
                    throw new Error("Could not find Product under hash of " + hash);
                }
                return product;
            })));
        });
        this.clientServerMessenger.on("changeObserved", async () => {
            this.wrapRendering(async () => {
                const runParams = this.sendParams ? this.params() : null;
                console.log("Run with params:", { runParams });
                this.clientServerMessenger.run(runParams);
                await this.clientServerMessenger.once("info");
            });
        });
        this.clientServerMessenger.on("reload", async () => {
            window.location.reload();
        });
        this.clientServerMessenger.on("info", (info) => {
            this.handleProducts(info.products);
            this.handleParamDef(info.paramDef);
            this.handleHierarchy(info.hierarchy);
            this.handleExportTypes(info.exportTypes);
        });
        this.clientServerMessenger.on("log", (logHash) => {
            if (!logHash) {
                this.logs([]);
            }
            else {
                this.logs([...this.logs(), this.lookupLog(logHash)]);
            }
        });
    }
    async lookupLog(logHash) {
        const log = await this.artifactManager.lookupRaw(logHash);
        if (!log) {
            throw new Error(`Could not find log under hash of ${logHash}`);
        }
        return log;
    }
    removeStatusSet(name) {
        this.statuses(this.statuses().filter((statusSet) => statusSet.name !== name));
    }
    addStatusSet(statusSet) {
        this.statuses([...this.statuses(), statusSet]);
    }
    connect() {
        this.logs([]);
        this.clientServerMessenger.retryAll();
        this.clientServerMessenger.emit("changeObserved");
    }
    async handleProducts(productHashes) {
        this.sentProductHashes(productHashes);
    }
    async handleExportTypes(exportTypes) {
        if (exportTypes) {
            this.exportTypes(exportTypes);
        }
    }
    async handleParamDef(paramDefHash) {
        this.paramDef(paramDefHash ? await this.artifactManager.lookupRaw(paramDefHash) : null);
    }
    async handleHierarchy(hierarchyHash) {
        this.hierarchy(hierarchyHash
            ? await this.artifactManager.lookupRaw(hierarchyHash)
            : null);
    }
    async lookupRaw(hash) {
        return this.wrapRendering(async () => {
            console.log("lookupRaw", hash);
            const stream = fetchStream(this.hashToUrl(hash));
            const hasher = new Sha256();
            const wrappedStream = (async function* () {
                for await (const part of stream) {
                    hasher.update(part);
                    yield part;
                }
            })();
            const result = $wrappedValue.deserializeAsync(wrappedStream);
            return result.catch(async () => {
                for await (const {} of wrappedStream)
                    ; // Finish hashing the stream
                if (hasher.hex() === hash)
                    return null;
                await new Promise((r) => setTimeout(r, lookupRawRetryTimer));
                return this.lookupRaw(hash); // Try again
            });
        });
    }
    lookupRefHash(loc) {
        return this.wrapRendering(async () => this.clientServerMessenger.lookupRef(await Promise.all(loc.map((x) => this.artifactManager.storeRaw(x)))));
    }
    async lookupRef(loc) {
        return this.wrapRendering(async () => {
            const hash = await this.lookupRefHash(loc);
            return this.lookupRaw(hash);
        });
    }
    async wrapRendering(fn) {
        this.renderJobsPending(this.renderJobsPending.value + 1);
        const result = await fn();
        this.renderJobsPending(this.renderJobsPending.value - 1);
        return result;
    }
    triggerParamsUpdate = () => {
        this.sendParams = true;
        this.clientServerMessenger.emit("changeObserved");
    };
}
export class WebSocketClientState extends ClientState {
    emit;
    curWs;
    disconnectTimeout;
    url;
    constructor(url, artifactManager, hashToUrl) {
        const [a, b] = createConnectionPair();
        b.onMsg((message) => this.curWs?.send(message));
        const connection = serializeConnection(a);
        super(connection, artifactManager, hashToUrl);
        this.emit = b.send;
        this.url = url;
        this.initWs();
    }
    async initWs() {
        if (this.curWs)
            return;
        if (this.disconnectTimeout)
            clearTimeout(this.disconnectTimeout);
        this.serverStatus("connecting");
        await new Promise((r) => setTimeout(r, 1000));
        const ws = this.curWs = new WebSocket(this.url);
        ws.addEventListener("open", () => {
            if (this.curWs !== ws) {
                return ws.close();
            }
            this.serverStatus("connected");
            this.connect();
        });
        ws.binaryType = "arraybuffer";
        ws.addEventListener("close", () => this.disconnect(ws));
        ws.addEventListener("error", () => this.disconnect(ws));
        ws.addEventListener("message", async ({ data }) => {
            this.emit(new Uint8Array(data));
        });
    }
    disconnect(ws) {
        ws.close();
        if (ws !== this.curWs) {
            return;
        }
        this.serverStatus("disconnected");
        this.curWs = undefined;
        setTimeout(() => this.initWs(), 5000);
    }
}
async function* fetchStream(input, init) {
    const response = await fetch(input, init);
    if (!response.ok)
        throw new Error(`${response.status}`);
    if (!response.body)
        throw new Error("Missing body");
    const reader = response.body.getReader();
    while (true) {
        const result = await reader.read();
        if (result.value)
            yield result.value;
        if (result.done)
            return;
    }
}
