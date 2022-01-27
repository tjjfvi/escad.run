import { Product, ProductType, } from "/transpiled/https://escad.dev/core/mod.js";
export class ProductConsumerRegistry {
    conversionRegistry;
    constructor(conversionRegistry) {
        this.conversionRegistry = conversionRegistry;
    }
    registrations = new Set();
    findConsumers(productType) {
        return [...this.registrations.values()].map(async (viewerRegistration) => await this.conversionRegistry.has(productType, ProductType.fromProductTypeish(viewerRegistration.type))
            ? viewerRegistration
            : null);
    }
    async mapProduct(context, product) {
        const consumers = await Promise.all(this.findConsumers(Product.getProductType(product)));
        const consumer = consumers.find((consumer) => consumer?.context === context);
        if (!consumer)
            return null;
        return await consumer.map(await this.conversionRegistry.convertProduct(ProductType.fromProductTypeish(consumer.type), product));
    }
    async getContextsForAll(types) {
        const contextss = await Promise.all([...types].map(async (t) => new Set(await Promise.all(this.findConsumers(t).map(async (x) => (await x)?.context)))));
        const results = [];
        for (const context of contextss.pop() ?? []) {
            if (context && contextss.every((set) => set.has(context))) {
                results.push(context);
            }
        }
        return results;
    }
}
