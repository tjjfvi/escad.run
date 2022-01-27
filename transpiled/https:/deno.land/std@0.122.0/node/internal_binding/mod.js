import * as asyncWrap from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/async_wrap.js";
import * as buffer from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/buffer.js";
import * as config from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/config.js";
import * as caresWrap from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/cares_wrap.js";
import * as constants from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/constants.js";
import * as contextify from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/contextify.js";
import * as crypto from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/crypto.js";
import * as credentials from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/credentials.js";
import * as errors from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/errors.js";
import * as fs from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/fs.js";
import * as fsDir from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/fs_dir.js";
import * as fsEventWrap from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/fs_event_wrap.js";
import * as heapUtils from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/heap_utils.js";
import * as httpParser from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/http_parser.js";
import * as icu from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/icu.js";
import * as inspector from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/inspector.js";
import * as jsStream from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/js_stream.js";
import * as messaging from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/messaging.js";
import * as moduleWrap from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/module_wrap.js";
import * as nativeModule from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/native_module.js";
import * as natives from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/natives.js";
import * as options from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/options.js";
import * as os from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/os.js";
import * as pipeWrap from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/pipe_wrap.js";
import * as performance from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/performance.js";
import * as processMethods from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/process_methods.js";
import * as report from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/report.js";
import * as serdes from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/serdes.js";
import * as signalWrap from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/signal_wrap.js";
import * as spawnSync from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/spawn_sync.js";
import * as streamWrap from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/stream_wrap.js";
import * as stringDecoder from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/string_decoder.js";
import * as symbols from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/symbols.js";
import * as taskQueue from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/task_queue.js";
import * as tcpWrap from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/tcp_wrap.js";
import * as timers from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/timers.js";
import * as tlsWrap from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/tls_wrap.js";
import * as traceEvents from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/trace_events.js";
import * as ttyWrap from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/tty_wrap.js";
import * as types from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/types.js";
import * as udpWrap from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/udp_wrap.js";
import * as url from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/url.js";
import * as util from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/util.js";
import * as uv from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/uv.js";
import * as v8 from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/v8.js";
import * as worker from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/worker.js";
import * as zlib from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/zlib.js";
const modules = {
    "async_wrap": asyncWrap,
    buffer,
    "cares_wrap": caresWrap,
    config,
    constants,
    contextify,
    credentials,
    crypto,
    errors,
    fs,
    "fs_dir": fsDir,
    "fs_event_wrap": fsEventWrap,
    "heap_utils": heapUtils,
    "http_parser": httpParser,
    icu,
    inspector,
    "js_stream": jsStream,
    messaging,
    "module_wrap": moduleWrap,
    "native_module": nativeModule,
    natives,
    options,
    os,
    performance,
    "pipe_wrap": pipeWrap,
    "process_methods": processMethods,
    report,
    serdes,
    "signal_wrap": signalWrap,
    "spawn_sync": spawnSync,
    "stream_wrap": streamWrap,
    "string_decoder": stringDecoder,
    symbols,
    "task_queue": taskQueue,
    "tcp_wrap": tcpWrap,
    timers,
    "tls_wrap": tlsWrap,
    "trace_events": traceEvents,
    "tty_wrap": ttyWrap,
    types,
    "udp_wrap": udpWrap,
    url,
    util,
    uv,
    v8,
    worker,
    zlib,
};
export function getBinding(name) {
    const mod = modules[name];
    if (!mod) {
        throw new Error(`No such module: ${name}`);
    }
    return mod;
}
