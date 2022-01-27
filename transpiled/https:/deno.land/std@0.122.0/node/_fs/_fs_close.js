export function close(fd, callback) {
    setTimeout(() => {
        let error = null;
        try {
            Deno.close(fd);
        }
        catch (err) {
            error = err instanceof Error ? err : new Error("[non-error thrown]");
        }
        callback(error);
    }, 0);
}
export function closeSync(fd) {
    Deno.close(fd);
}
