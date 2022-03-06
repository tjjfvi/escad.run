import { brandConnection, createMessenger, filterConnection, transformConnection, } from "/transpiled/https://escad.dev/messaging/mod.js";
import React from "/transpiled/https://escad.dev/deps/react.js";
import ReactDOM from "/transpiled/https://escad.dev/deps/react-dom.js";
import { App, ClientState, Loading, mdi } from "/transpiled/https://escad.dev/client/mod.js";
import { artifactManager } from "/transpiled/https://escad.dev/core/mod.js";
import { VfsArtifactStore } from "/transpiled/https://escad.dev/playground/VfsArtifactStore.js";
import { observable } from "/transpiled/https://escad.dev/deps/rhobo.js";
artifactManager.artifactStores.unshift(new VfsArtifactStore());
const baseConnection = transformConnection(filterConnection({
    send: (msg) => window.parent.postMessage(msg, "*"),
    onMsg: (cb) => {
        window.addEventListener("message", cb);
        return () => window.removeEventListener("message", cb);
    },
}, (ev) => ev.origin === location.origin), (x) => x, (ev) => ev.data);
const clientState = new ClientState(brandConnection(baseConnection, "client"), artifactManager, (hash) => "/artifacts/raw/" + hash);
const shareMessenger = createMessenger({
    impl: {},
    connection: brandConnection(baseConnection, "share"),
});
clientState.removeStatusSet("Connection");
let shareState = observable("share");
let shareIcon = (props) => shareState.use()() === "share" ? null : React.createElement(mdi.share, { ...props });
let shareResult;
clientState.addStatusSet({
    name: "Save",
    state: shareState,
    icon: shareIcon,
    statuses: {
        share: {
            icon: mdi.share,
            name: "Share",
            className: "inactive",
            onClick: async () => {
                shareState("sharing");
                shareResult = await shareMessenger.share();
                if (shareResult) {
                    await navigator.clipboard.writeText(shareResult);
                    shareState("shared");
                    await clientState.clientServerMessenger.once("changeObserved");
                    shareState("share");
                }
                else {
                    shareState("error");
                }
            },
        },
        sharing: {
            icon: Loading,
            name: "Creating URL",
            className: "active",
        },
        shared: {
            icon: mdi.check,
            name: "Copied URL",
            className: "good",
            onClick: () => navigator.clipboard.writeText(shareResult),
        },
        error: {
            icon: mdi.close,
            name: "Error",
            className: "bad",
        },
    },
});
clientState.connect();
clientState.serverStatus("connected");
ReactDOM.render(React.createElement(App, { state: clientState }), document.getElementById("root"));
