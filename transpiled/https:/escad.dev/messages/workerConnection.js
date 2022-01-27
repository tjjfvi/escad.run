import { transformConnection } from "/transpiled/https://escad.dev/messages/transformConnection.js";
/* istanbul ignore next: covered by types, difficult to test */
export const workerConnection = (worker) => transformConnection({
    send: (msg) => worker.postMessage(msg),
    onMsg: (cb) => {
        worker.addEventListener("message", cb);
        return () => worker.removeEventListener("message", cb);
    },
    destroy: () => worker.terminate(),
}, (msg) => msg, (e) => e.data);
export const parentWorkerConnection = () => workerConnection(self);
