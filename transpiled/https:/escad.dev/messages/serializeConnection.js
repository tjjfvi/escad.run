import { createEventEmitter } from "/transpiled/https://escad.dev/messages/EventEmitter.js";
import { $unknown } from "/transpiled/https://escad.dev/serial/mod.js";
import { transformConnection } from "/transpiled/https://escad.dev/messages/transformConnection.js";
export const serializeConnection = (_connection) => {
    const connection = transformConnection(_connection, (x) => x, (v) => {
        if (v instanceof Uint8Array)
            return v;
        if (v instanceof ArrayBuffer)
            return new Uint8Array(v);
        if (typeof v === "object" && v && !("length" in v)) {
            return new Uint8Array({ ...v, length: Object.keys(v).length });
        }
        return new Uint8Array(v);
    });
    const ee = createEventEmitter();
    ee.on("_send", connection.send);
    ee.emit("_send", wrap($unknown.serializeStreamAsync(unwrap(ee.on("send")))));
    connection.onMsg((value) => ee.emit("_recv", value));
    ee.emit("recv", wrap($unknown.deserializeStreamAsync(unwrap(ee.on("_recv")))));
    return {
        send: (v) => ee.emit("send", v),
        onMsg: (origCb) => ee.on("recv", (x) => origCb(x)),
        destroy: () => {
            connection.destroy?.();
            ee.destroy();
        },
    };
};
async function* unwrap(iterable) {
    for await (const [value] of iterable) {
        yield value;
    }
}
async function* wrap(iterable) {
    for await (const value of iterable) {
        yield [value];
    }
}
