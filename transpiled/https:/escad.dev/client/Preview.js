import "/transpiled/https://escad.dev/client/stylus/Preview.styl.js";
import React from "/transpiled/https://escad.dev/deps/react.js";
import { viewerRegistry } from "/transpiled/https://escad.dev/client/ViewerRegistry.js";
import { observer, useObservable } from "/transpiled/https://escad.dev/deps/rhobo.js";
import { Product } from "/transpiled/https://escad.dev/core/mod.js";
import { Export } from "/transpiled/https://escad.dev/client/Export.js";
import { ClientState } from "/transpiled/https://escad.dev/client/ClientState.js";
import { Loading } from "/transpiled/https://escad.dev/client/Loading.js";
import { usePromise } from "/transpiled/https://escad.dev/client/usePromise.js";
export const Preview = observer(() => {
    const state = React.useContext(ClientState.Context);
    const products = state.products.use()();
    const viewerObs = useObservable.use();
    const viewers = usePromise(async () => {
        const productTypes = products.map(Product.getProductType);
        state.viewerStatus("converting");
        const unsortedViewers = await viewerRegistry.getContextsForAll(productTypes);
        return unsortedViewers?.sort((a, b) => b.weight - a.weight);
    }, [products]);
    React.useEffect(() => {
    }, [products]);
    if (!products.length) {
        state.viewerStatus("displayed");
        return (React.createElement("div", { className: "Preview none" },
            React.createElement("span", { className: "header" }, "No products to display.")));
    }
    if (!viewers) {
        return (React.createElement("div", { className: "Preview loading" },
            React.createElement(Loading, null)));
    }
    const selectedViewer = viewerObs();
    const viewer = selectedViewer && viewers.includes(selectedViewer)
        ? selectedViewer
        : viewers[0] ?? null;
    if (!viewer) {
        return (React.createElement("div", { className: "Preview none" },
            React.createElement("span", { className: "header" }, "No viewers found for these products.")));
    }
    state.viewerStatus("converting");
    const inputs = products.map((product) => viewerRegistry.mapProduct(viewer, product));
    Promise.all(inputs).then(() => state.viewerStatus("displayed"));
    return (React.createElement("div", { className: "Preview " + (viewer.className ?? "") },
        React.createElement(viewer.component, { inputs: inputs }),
        React.createElement("div", { className: "menubar" },
            React.createElement("div", null,
                viewers.map((v, i) => (React.createElement("span", { key: i, onClick: () => viewerObs(v) }, v.name))),
                React.createElement("span", null, "Viewer")),
            React.createElement(Export, null))));
});
