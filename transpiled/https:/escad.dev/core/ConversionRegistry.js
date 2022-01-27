/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Product, ProductType } from "/transpiled/https://escad.dev/core/Product.js";
import { Hash } from "/transpiled/https://escad.dev/core/Hash.js";
import { artifactManager } from "/transpiled/https://escad.dev/core/ArtifactManager.js";
import { Id } from "/transpiled/https://escad.dev/core/Id.js";
import { TupleProduct, TupleProductType } from "/transpiled/https://escad.dev/core/TupleProduct.js";
import { ArrayProduct, ArrayProductType } from "/transpiled/https://escad.dev/core/ArrayProduct.js";
import { UnknownProduct, UnknownProductType } from "/transpiled/https://escad.dev/core/UnknownProduct.js";
import { MarkedProduct, MarkedProductType } from "/transpiled/https://escad.dev/core/MarkedProduct.js";
import { HashProduct, HashProductType } from "/transpiled/https://escad.dev/core/HashProduct.js";
import { WrappedValue } from "/transpiled/https://escad.dev/core/WrappedValue.js";
export class ConversionRegistry {
    artifactManager;
    constructor(artifactManager) {
        this.artifactManager = artifactManager;
        this.artifactManager.artifactStores.push(this.artifactStore);
    }
    static artifactStoreId = Id.create(import.meta.url, "@escad/core", "ArtifactStore", "ConversionRegistry");
    artifactStore = {
        lookupRef: async ([id, toType, from]) => {
            if (id !== ConversionRegistry.artifactStoreId)
                return null;
            if (!ProductType.isProductType(toType))
                return null;
            if (Product.isProduct(from)) {
                return WrappedValue.create(this.convertProduct(toType, from));
            }
            if (ProductType.isProductType(from)) {
                return WrappedValue.create(this.compose(from, toType));
            }
            return null;
        },
    };
    excludeStores = new Set([
        this.artifactStore,
    ]);
    registered = new Map();
    register(conversion) {
        this.registered.set(conversion.id, {
            ...conversion,
            fromType: ProductType.fromProductTypeish(conversion.fromType),
            toType: ProductType.fromProductTypeish(conversion.toType),
        });
    }
    async has(a, b) {
        return !!(await this.compose(a, b));
    }
    async compose(fromType, toType) {
        const result = await this.artifactManager.computeRef([ConversionRegistry.artifactStoreId, toType, fromType], async () => {
            let bestPath = null;
            const promises = [];
            const tasks = [{
                    type: fromType,
                    prior: [],
                }];
            while (tasks.length) {
                const { type, prior } = tasks.pop();
                if (prior.some((c) => Hash.equal(c.fromType, type))) {
                    continue;
                }
                if (this.maybeImplicitlyConvertibleTo(type, toType)) {
                    promises.push(this.finishPath(fromType, prior, toType).then((path) => {
                        if (!bestPath ||
                            path && this.weight(path) <= this.weight(bestPath)) {
                            bestPath = path;
                        }
                    }));
                }
                else {
                    for (const conversion of this.registered.values()) {
                        if (this.maybeImplicitlyConvertibleTo(type, conversion.fromType)) {
                            tasks.push({
                                type: conversion.toType,
                                prior: [...prior, conversion],
                            });
                        }
                    }
                }
            }
            await Promise.all(promises);
            return bestPath;
        }, this.excludeStores);
        if (!result)
            return null;
        return this.rehydrateConversionPath(result);
    }
    async finishPath(initialFromType, path, finalToType) {
        if (!path) {
            return null;
        }
        for (let i = 0; i <= path.length; i++) {
            const fromType = path[i - 1]?.toType ?? initialFromType;
            const toType = path[i]?.fromType ?? finalToType;
            if (Hash.equal(fromType, toType)) {
                continue;
            }
            const part = await this.finishPathSegment(fromType, toType);
            if (!part)
                return null;
            path.splice(i, 0, part);
            i--;
        }
        return path;
    }
    maybeImplicitlyConvertibleTo(fromType, toType) {
        return false ||
            Hash.equal(fromType, toType) ||
            HashProductType.isHashProductType(fromType) ||
            HashProductType.isHashProductType(toType) ||
            UnknownProductType.isUnknownProductType(toType) ||
            true &&
                MarkedProductType.isMarkedProductType(fromType) &&
                MarkedProductType.isMarkedProductType(toType) &&
                fromType.marker === toType.marker ||
            true &&
                TupleProductType.isTupleProductType(fromType) &&
                ArrayProductType.isArrayProductType(toType) ||
            true &&
                ArrayProductType.isArrayProductType(fromType) &&
                ArrayProductType.isArrayProductType(toType) ||
            true &&
                TupleProductType.isTupleProductType(fromType) &&
                TupleProductType.isTupleProductType(toType) &&
                fromType.elementTypes.length === toType.elementTypes.length;
    }
    async finishPathSegment(fromType, toType) {
        if (HashProductType.isHashProductType(fromType)) {
            const resolvedFromType = await this.artifactManager.lookupRaw(fromType.productType);
            if (!resolvedFromType) {
                throw new Error("Could not resolve HashProductType");
            }
            const subPath = await this.compose(resolvedFromType, toType);
            return subPath && {
                fromType,
                toType,
                convert: async ({ hash }) => {
                    const product = await this.artifactManager.lookupRaw(hash);
                    if (!product) {
                        throw new Error("Could not resolve HashProduct " + hash);
                    }
                    return await this.executeConversionPath(product, subPath);
                },
                weight: this.weight(subPath),
            };
        }
        if (HashProductType.isHashProductType(toType)) {
            const resolvedToType = await this.artifactManager.lookupRaw(toType.productType);
            if (!resolvedToType)
                throw new Error("Could not resolve HashProductType");
            const subPath = await this.compose(fromType, resolvedToType);
            return subPath && {
                fromType: resolvedToType,
                toType,
                convert: async (product) => HashProduct.fromProduct(await this.executeConversionPath(product, subPath), this.artifactManager),
                weight: this.weight(subPath),
            };
        }
        if (UnknownProductType.isUnknownProductType(toType)) {
            return {
                fromType,
                toType,
                convert: async (product) => UnknownProduct.create(product),
                weight: 0,
            };
        }
        if (MarkedProductType.isMarkedProductType(fromType) &&
            MarkedProductType.isMarkedProductType(toType) &&
            fromType.marker === toType.marker) {
            const subPath = await this.compose(fromType.child, toType.child);
            return subPath && {
                fromType,
                toType,
                convert: async (product) => MarkedProduct.create(product.marker, await this.executeConversionPath(product.child, subPath)),
                weight: this.weight(subPath),
            };
        }
        if (TupleProductType.isTupleProductType(fromType) &&
            ArrayProductType.isArrayProductType(toType)) {
            return {
                fromType: TupleProductType.create(Array(fromType.elementTypes.length).fill(toType.elementType)),
                toType,
                convert: async (product) => ArrayProduct.create(product.children),
                weight: 0,
            };
        }
        if (ArrayProductType.isArrayProductType(fromType) &&
            ArrayProductType.isArrayProductType(toType)) {
            const subPath = await this.compose(fromType.elementType, toType.elementType);
            return subPath && {
                fromType,
                toType,
                convert: async (product) => ArrayProduct.create(await Promise.all(product.children.map((child) => this.executeConversionPath(child, subPath)))),
                weight: this.weight(subPath),
            };
        }
        if (TupleProductType.isTupleProductType(fromType) &&
            TupleProductType.isTupleProductType(toType) &&
            fromType.elementTypes.length === toType.elementTypes.length) {
            const subPaths = await Promise.all(fromType.elementTypes.map((subFromType, i) => this.compose(subFromType, toType.elementTypes[i])));
            if (subPaths.some((subPath) => subPath === null)) {
                return null;
            }
            return {
                fromType,
                toType,
                convert: async (product) => TupleProduct.create(await Promise.all(product.children.map((child, i) => this.executeConversionPath(child, subPaths[i])))),
                weight: subPaths.map((subPath) => this.weight(subPath)).reduce((a, b) => a + b),
            };
        }
        return null;
    }
    weight(path) {
        return path.reduce((a, b) => a + b.weight, 0);
    }
    async executeConversionPath(product, conversions) {
        if (!conversions.length)
            return product;
        return await this.artifactManager.computeRef([
            ConversionRegistry.artifactStoreId,
            conversions[conversions.length - 1].toType,
            product,
        ], async () => {
            let currentProduct = product;
            for (const conversion of conversions) {
                currentProduct = await artifactManager.computeRef([
                    ConversionRegistry.artifactStoreId,
                    conversion.toType,
                    currentProduct,
                ], async () => conversion.convert(currentProduct), this.excludeStores);
            }
            return currentProduct;
        }, this.excludeStores);
    }
    async convertProduct(toType, from) {
        const fromType = Product.getProductType(from);
        const conversions = await this.compose(fromType, toType);
        if (!conversions) {
            throw new Error(`Could not find path to convert product type ${Hash.create(fromType)} to ${Hash.create(toType)}`);
        }
        return await this.executeConversionPath(from, conversions);
    }
    rehydrateConversionPath(path) {
        return path.map((part) => this.rehydrateConversion(part));
    }
    rehydrateConversionMemo = new WeakMap();
    rehydrateConversion(conversion) {
        if (typeof conversion["convert"] === "function") {
            return conversion;
        }
        const existing = this.rehydrateConversionMemo.get(conversion);
        if (existing)
            return existing;
        const rehydrated = {
            ...conversion,
            // This function will get replaced when called
            convert: async (product) => {
                const { fromType, toType, id } = rehydrated;
                if (id) {
                    const registered = this.registered.get(id);
                    if (!registered) {
                        throw new Error(`Could not find conversion with id ${id}`);
                    }
                    Object.assign(rehydrated, registered);
                }
                else {
                    const computed = await this.finishPathSegment(rehydrated.fromType, rehydrated.toType);
                    if (!computed || !Hash.equal(fromType, computed.fromType) ||
                        !Hash.equal(toType, computed.toType)) {
                        throw new Error(`Could not create conversion from ${Hash.create(fromType)} to ${Hash.create(toType)}`);
                    }
                    Object.assign(rehydrated, computed);
                }
                if (rehydrated.convert === origConvert) {
                    throw new Error("Could not rehydrate conversion part");
                }
                return rehydrated.convert(product);
            },
        };
        const origConvert = rehydrated.convert;
        this.rehydrateConversionMemo.set(conversion, rehydrated);
        return rehydrated;
    }
}
export const conversionRegistry = new ConversionRegistry(artifactManager);
