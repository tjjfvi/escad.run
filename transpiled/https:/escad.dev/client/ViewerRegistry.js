import { conversionRegistry } from "/transpiled/https://escad.dev/core/mod.js";
import { ProductConsumerRegistry, } from "/transpiled/https://escad.dev/client/ProductConsumerRegistry.js";
export class ViewerRegistry extends ProductConsumerRegistry {
    register(registration) {
        this.registrations.add(registration);
    }
}
export const viewerRegistry = new ViewerRegistry(conversionRegistry);
