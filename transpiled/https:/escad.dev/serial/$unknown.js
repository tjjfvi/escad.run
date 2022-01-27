import { Serializer } from "/transpiled/https://escad.dev/serial/Serializer.js";
import { $string } from "/transpiled/https://escad.dev/serial/$string.js";
import { registeredTypes } from "/transpiled/https://escad.dev/serial/typeRegistration.js";
const primitiveProtos = new Set([
    Object.prototype,
    Function.prototype,
    Object.getPrototypeOf(async () => { }),
    Object.getPrototypeOf(function* () { }),
    Object.getPrototypeOf(async function* () { }),
]);
export const $unknown = new Serializer({
    *s(value) {
        const type = getType(value);
        const $value = registeredTypes[type];
        if (!$value) {
            throw new Error(`Cannot serialize value of type ${type}`);
        }
        yield* $string.s(type);
        yield* $value.s(value);
        function getType(value) {
            if (typeof value !== "object" && typeof value !== "function") {
                return typeof value;
            }
            if (value === null) {
                return "null";
            }
            if ("type" in value) {
                const type = value["type"];
                if (typeof type === "string" && type in registeredTypes) {
                    return type;
                }
            }
            const proto = Object.getPrototypeOf(value);
            if (!proto?.constructor?.name || primitiveProtos.has(proto)) {
                return "object";
            }
            return proto.constructor.name;
        }
    },
    *d() {
        const type = yield* $string.d();
        const $value = registeredTypes[type];
        if (!$value) {
            throw new Error(`Cannot deserialize value of type ${type}`);
        }
        const value = yield* $value.d();
        return value;
    },
});
