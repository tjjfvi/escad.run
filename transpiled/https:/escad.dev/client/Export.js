import { conversionRegistry, ExportTypeRegistry, Product, } from "/transpiled/https://escad.dev/core/mod.js";
import React from "/transpiled/https://escad.dev/deps/react.js";
import { observer } from "/transpiled/https://escad.dev/deps/rhobo.js";
import { ClientState } from "/transpiled/https://escad.dev/client/ClientState.js";
import { ProductConsumerRegistry } from "/transpiled/https://escad.dev/client/ProductConsumerRegistry.js";
import { usePromise } from "/transpiled/https://escad.dev/client/usePromise.js";
export const Export = observer(() => {
    const state = React.useContext(ClientState.Context);
    const consumerRegistry = new ProductConsumerRegistry(conversionRegistry);
    consumerRegistry.registrations = new Set(state.exportTypes().map((e) => ({
        type: e.productType,
        context: e,
        map: (x) => x,
    })));
    const products = state.products();
    const exportTypes = usePromise(async () => {
        const productTypes = products.map(Product.getProductType);
        return await consumerRegistry.getContextsForAll(productTypes);
    }, [products]);
    if (exportTypes?.length) {
        return (React.createElement("div", null,
            exportTypes.map((exportType) => (React.createElement("span", { key: exportType.id, onClick: () => exportProducts(state, exportType) }, exportType.name))),
            React.createElement("span", null, "Export")));
    }
    return null;
});
async function exportProducts(state, exportType) {
    const url = state.hashToUrl(await state.lookupRefHash([
        ExportTypeRegistry.artifactStoreId,
        exportType.id,
        state.products.value,
    ]));
    console.log(url);
    download(url, "export" + exportType.extension);
}
function download(url, filename) {
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", filename);
    a.click();
}
