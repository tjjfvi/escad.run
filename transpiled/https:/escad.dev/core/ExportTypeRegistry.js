import { artifactManager } from "/transpiled/https://escad.dev/core/ArtifactManager.js";
import { Id } from "/transpiled/https://escad.dev/core/Id.js";
import { Product, ProductType } from "/transpiled/https://escad.dev/core/Product.js";
import { conversionRegistry, } from "/transpiled/https://escad.dev/core/ConversionRegistry.js";
import { WrappedValue } from "/transpiled/https://escad.dev/core/WrappedValue.js";
export class ExportTypeRegistry {
    artifactManager;
    conversionRegistry;
    constructor(artifactManager, conversionRegistry) {
        this.artifactManager = artifactManager;
        this.conversionRegistry = conversionRegistry;
        this.artifactManager.artifactStores.push(this.artifactStore);
    }
    registered = new Map();
    static artifactStoreId = Id.create(import.meta.url, "@escad/core", "ArtifactStore", "ExportTypeRegistry");
    artifactStore = {
        lookupRef: async ([id, exportTypeId, products], artifactManager) => {
            if (id !== ExportTypeRegistry.artifactStoreId)
                return null;
            const exportType = this.registered.get(exportTypeId);
            if (!exportType)
                return null;
            if (!(products instanceof Array) || !products.every(Product.isProduct)) {
                return null;
            }
            const convertedProducts = await Promise.all(products.map((p) => this.conversionRegistry.convertProduct(ProductType.fromProductTypeish(exportType.productType), p)));
            const exported = await exportType.export(convertedProducts);
            await artifactManager.storeRef([id, exportTypeId, products], exported);
            return WrappedValue.create(exported);
        },
    };
    register(exportType) {
        this.registered.set(exportType.id, exportType);
    }
    listRegistered() {
        return this.registered.values();
    }
}
export const exportTypeRegistry = new ExportTypeRegistry(artifactManager, conversionRegistry);
