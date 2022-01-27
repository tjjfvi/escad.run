// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
import Dirent from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_dirent.js";
import { assert } from "/transpiled/https://deno.land/std@0.122.0/_util/assert.js";
export default class Dir {
    dirPath;
    syncIterator;
    asyncIterator;
    constructor(path) {
        this.dirPath = path;
    }
    get path() {
        if (this.dirPath instanceof Uint8Array) {
            return new TextDecoder().decode(this.dirPath);
        }
        return this.dirPath;
    }
    // deno-lint-ignore no-explicit-any
    read(callback) {
        return new Promise((resolve, reject) => {
            if (!this.asyncIterator) {
                this.asyncIterator = Deno.readDir(this.path)[Symbol.asyncIterator]();
            }
            assert(this.asyncIterator);
            this.asyncIterator
                .next()
                .then(({ value }) => {
                resolve(value ? value : null);
                if (callback) {
                    callback(null, value ? value : null);
                }
            }, (err) => {
                if (callback) {
                    callback(err);
                }
                reject(err);
            });
        });
    }
    readSync() {
        if (!this.syncIterator) {
            this.syncIterator = Deno.readDirSync(this.path)[Symbol.iterator]();
        }
        const file = this.syncIterator.next().value;
        return file ? new Dirent(file) : null;
    }
    /**
     * Unlike Node, Deno does not require managing resource ids for reading
     * directories, and therefore does not need to close directories when
     * finished reading.
     */
    // deno-lint-ignore no-explicit-any
    close(callback) {
        return new Promise((resolve) => {
            if (callback) {
                callback(null);
            }
            resolve();
        });
    }
    /**
     * Unlike Node, Deno does not require managing resource ids for reading
     * directories, and therefore does not need to close directories when
     * finished reading
     */
    closeSync() {
        //No op
    }
    async *[Symbol.asyncIterator]() {
        try {
            while (true) {
                const dirent = await this.read();
                if (dirent === null) {
                    break;
                }
                yield dirent;
            }
        }
        finally {
            await this.close();
        }
    }
}
