import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { setAttribute as _$setAttribute } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { effect as _$effect } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";

const _tmpl$ = /*#__PURE__*/_$template(`<iframe class="ClientFrame"></iframe>`, 2);

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/playground/stylus/ClientFrame.styl.js";
import { brandConnection, createMessenger, filterConnection, logConnection, transformConnection } from "/transpiled/https://escad.dev/messaging/mod.js";
export const ClientFrame = props => {
  let lastWindow;

  let onNewWindow = () => {};

  const iframe = (() => {
    const _el$ = _tmpl$.cloneNode(true);

    _el$.addEventListener("load", foo);

    _$effect(() => _$setAttribute(_el$, "src", props.clientUrl));

    return _el$;
  })();

  function foo() {
    console.log("foo called");
    const childWindow = iframe.contentWindow;
    if (lastWindow === childWindow) return;
    lastWindow = childWindow;
    onNewWindow();
    const baseConnection = logConnection(transformConnection(filterConnection({
      send: msg => childWindow.postMessage(msg, "*"),
      onMsg: cb => {
        window.addEventListener("message", cb);
        return () => window.removeEventListener("message", cb);
      }
    }, ev => ev.origin === location.origin), x => x, ev => ev.data), "ClientFrame");
    const client = props.server.addClient(logConnection(brandConnection(baseConnection, "client"), "clientframe client"));
    const shareMessenger = createMessenger({
      impl: {
        share: props.share
      },
      connection: brandConnection(baseConnection, "share")
    });

    onNewWindow = () => {
      client.destroy();
      shareMessenger.destroy();
    };
  }

  return iframe;
};