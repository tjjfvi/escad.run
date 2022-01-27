// Copyright Joyent and Node contributors. All rights reserved. MIT license.
import { isIterable, isNodeStream } from "/transpiled/https://deno.land/std@0.122.0/node/internal/streams/utils.js";
import { pipelineImpl as pl } from "/transpiled/https://deno.land/std@0.122.0/node/internal/streams/pipeline.js";
import eos from "/transpiled/https://deno.land/std@0.122.0/node/internal/streams/end-of-stream.js";
function pipeline(...streams) {
    return new Promise((resolve, reject) => {
        let signal;
        let end;
        const lastArg = streams[streams.length - 1];
        if (lastArg && typeof lastArg === "object" &&
            !isNodeStream(lastArg) && !isIterable(lastArg)) {
            const options = streams.pop();
            signal = options.signal;
            end = options.end;
        }
        pl(streams, (err, value) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(value);
            }
        }, { signal, end });
    });
}
function finished(stream, opts) {
    return new Promise((resolve, reject) => {
        eos(stream, opts, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
}
export default {
    finished,
    pipeline,
};
export { finished, pipeline };
