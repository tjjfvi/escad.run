import { fromFileUrl } from "/transpiled/https://deno.land/std@0.122.0/node/path.js";
import { Buffer } from "/transpiled/https://deno.land/std@0.122.0/node/buffer.js";
import { writeAllSync } from "/transpiled/https://deno.land/std@0.122.0/streams/conversion.js";
import { checkEncoding, getEncoding, getOpenOptions, isFileOptions, } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_common.js";
import { isWindows } from "/transpiled/https://deno.land/std@0.122.0/_util/os.js";
import { AbortError, denoErrorToNodeError } from "/transpiled/https://deno.land/std@0.122.0/node/_errors.js";
import { validateStringAfterArrayBufferView } from "/transpiled/https://deno.land/std@0.122.0/node/internal/fs/utils.js";
export function writeFile(pathOrRid, 
// deno-lint-ignore ban-types
data, optOrCallback, callback) {
    const callbackFn = optOrCallback instanceof Function ? optOrCallback : callback;
    const options = optOrCallback instanceof Function ? undefined : optOrCallback;
    if (!callbackFn) {
        throw new TypeError("Callback must be a function.");
    }
    pathOrRid = pathOrRid instanceof URL ? fromFileUrl(pathOrRid) : pathOrRid;
    const flag = isFileOptions(options)
        ? options.flag
        : undefined;
    const mode = isFileOptions(options)
        ? options.mode
        : undefined;
    const encoding = checkEncoding(getEncoding(options)) || "utf8";
    const openOptions = getOpenOptions(flag || "w");
    if (!ArrayBuffer.isView(data)) {
        validateStringAfterArrayBufferView(data, "data");
        data = Buffer.from(String(data), encoding);
    }
    const isRid = typeof pathOrRid === "number";
    let file;
    let error = null;
    (async () => {
        try {
            file = isRid
                ? new Deno.File(pathOrRid)
                : await Deno.open(pathOrRid, openOptions);
            // ignore mode because it's not supported on windows
            // TODO: remove `!isWindows` when `Deno.chmod` is supported
            if (!isRid && mode && !isWindows) {
                await Deno.chmod(pathOrRid, mode);
            }
            const signal = isFileOptions(options)
                ? options.signal
                : undefined;
            await writeAll(file, data, { signal });
        }
        catch (e) {
            error = e instanceof Error
                ? denoErrorToNodeError(e, { syscall: "write" })
                : new Error("[non-error thrown]");
        }
        finally {
            // Make sure to close resource
            if (!isRid && file)
                file.close();
            callbackFn(error);
        }
    })();
}
export function writeFileSync(pathOrRid, 
// deno-lint-ignore ban-types
data, options) {
    pathOrRid = pathOrRid instanceof URL ? fromFileUrl(pathOrRid) : pathOrRid;
    const flag = isFileOptions(options)
        ? options.flag
        : undefined;
    const mode = isFileOptions(options)
        ? options.mode
        : undefined;
    const encoding = checkEncoding(getEncoding(options)) || "utf8";
    const openOptions = getOpenOptions(flag || "w");
    if (!ArrayBuffer.isView(data)) {
        validateStringAfterArrayBufferView(data, "data");
        data = Buffer.from(String(data), encoding);
    }
    const isRid = typeof pathOrRid === "number";
    let file;
    let error = null;
    try {
        file = isRid
            ? new Deno.File(pathOrRid)
            : Deno.openSync(pathOrRid, openOptions);
        // ignore mode because it's not supported on windows
        // TODO: remove `!isWindows` when `Deno.chmod` is supported
        if (!isRid && mode && !isWindows) {
            Deno.chmodSync(pathOrRid, mode);
        }
        writeAllSync(file, data);
    }
    catch (e) {
        error = e instanceof Error
            ? denoErrorToNodeError(e, { syscall: "write" })
            : new Error("[non-error thrown]");
    }
    finally {
        // Make sure to close resource
        if (!isRid && file)
            file.close();
    }
    if (error)
        throw error;
}
async function writeAll(w, arr, options = {}) {
    const { offset = 0, length = arr.byteLength, signal } = options;
    checkAborted(signal);
    const written = await w.write(arr.subarray(offset, offset + length));
    if (written === length) {
        return;
    }
    await writeAll(w, arr, {
        offset: offset + written,
        length: length - written,
        signal,
    });
}
function checkAborted(signal) {
    if (signal?.aborted) {
        throw new AbortError();
    }
}
