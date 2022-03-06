import "/transpiled/https://escad.dev/playground/stylus/ClientFrame.styl.js";
import { brandConnection, createMessenger, filterConnection, logConnection, transformConnection, } from "/transpiled/https://escad.dev/messaging/mod.js";
import React from "/transpiled/https://escad.dev/deps/react.js";
import { observer } from "/transpiled/https://escad.dev/deps/rhobo.js";
export const ClientFrame = observer(({ clientUrl, server, share }) => {
    const lastWindow = React.useRef();
    const onNewWindow = React.useRef();
    return (React.createElement("iframe", { src: clientUrl, className: "ClientFrame", ref: (iframe) => {
            if (!iframe)
                return;
            const childWindow = iframe.contentWindow;
            if (childWindow !== lastWindow.current) {
                onNewWindow.current?.();
                lastWindow.current = childWindow;
                const baseConnection = transformConnection(filterConnection({
                    send: (msg) => childWindow.postMessage(msg, "*"),
                    onMsg: (cb) => {
                        window.addEventListener("message", cb);
                        return () => window.removeEventListener("message", cb);
                    },
                }, (ev) => ev.origin === location.origin), (x) => x, (ev) => ev.data);
                const client = server.addClient(logConnection(brandConnection(baseConnection, "client")));
                const shareMessenger = createMessenger({
                    impl: {
                        share,
                    },
                    connection: brandConnection(baseConnection, "share"),
                });
                onNewWindow.current = () => {
                    client.destroy();
                    shareMessenger.destroy();
                };
            }
            // childWindow.addEventListener("mousemove", origEvent => {
            //   console.log("move")
            //   const newEvent = new CustomEvent("mousemove", { bubbles: true, cancelable: true });
            //   const { isTrusted: _, ...origEventRedacted } = origEvent;
            //   Object.assign(newEvent, origEventRedacted);
            //   iframe.dispatchEvent(newEvent)
            // })
        } }));
});
