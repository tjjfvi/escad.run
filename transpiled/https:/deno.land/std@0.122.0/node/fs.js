// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
import { access, accessSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_access.js";
import { appendFile, appendFileSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_appendFile.js";
import { chmod, chmodSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_chmod.js";
import { chown, chownSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_chown.js";
import { close, closeSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_close.js";
import * as constants from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_constants.js";
import { copyFile, copyFileSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_copy.js";
import Dir from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_dir.js";
import Dirent from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_dirent.js";
import { exists, existsSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_exists.js";
import { fdatasync, fdatasyncSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_fdatasync.js";
import { fstat, fstatSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_fstat.js";
import { fsync, fsyncSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_fsync.js";
import { ftruncate, ftruncateSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_ftruncate.js";
import { futimes, futimesSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_futimes.js";
import { link, linkSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_link.js";
import { lstat, lstatSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_lstat.js";
import { mkdir, mkdirSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_mkdir.js";
import { mkdtemp, mkdtempSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_mkdtemp.js";
import { open, openSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_open.js";
import { read, readSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_read.js";
import { readdir, readdirSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_readdir.js";
import { readFile, readFileSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_readFile.js";
import { readlink, readlinkSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_readlink.js";
import { realpath, realpathSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_realpath.js";
import { rename, renameSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_rename.js";
import { rmdir, rmdirSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_rmdir.js";
import { rm, rmSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_rm.js";
import { stat, statSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_stat.js";
import { symlink, symlinkSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_symlink.js";
import { truncate, truncateSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_truncate.js";
import { unlink, unlinkSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_unlink.js";
import { utimes, utimesSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_utimes.js";
import { watch, watchFile } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_watch.js";
// @deno-types="./_fs/_fs_write.d.ts"
import { write, writeSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_write.js";
import { writeFile, writeFileSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_writeFile.js";
import { Stats } from "/transpiled/https://deno.land/std@0.122.0/node/internal/fs/utils.js";
import * as promises from "/transpiled/https://deno.land/std@0.122.0/node/fs/promises.js";
const { F_OK, R_OK, W_OK, X_OK, } = constants;
export default {
    access,
    accessSync,
    appendFile,
    appendFileSync,
    chmod,
    chmodSync,
    chown,
    chownSync,
    close,
    closeSync,
    constants,
    copyFile,
    copyFileSync,
    Dir,
    Dirent,
    exists,
    existsSync,
    F_OK,
    fdatasync,
    fdatasyncSync,
    fstat,
    fstatSync,
    fsync,
    fsyncSync,
    ftruncate,
    ftruncateSync,
    futimes,
    futimesSync,
    link,
    linkSync,
    lstat,
    lstatSync,
    mkdir,
    mkdirSync,
    mkdtemp,
    mkdtempSync,
    open,
    openSync,
    read,
    readSync,
    promises,
    R_OK,
    readdir,
    readdirSync,
    readFile,
    readFileSync,
    readlink,
    readlinkSync,
    realpath,
    realpathSync,
    rename,
    renameSync,
    rmdir,
    rmdirSync,
    rm,
    rmSync,
    stat,
    Stats,
    statSync,
    symlink,
    symlinkSync,
    truncate,
    truncateSync,
    unlink,
    unlinkSync,
    utimes,
    utimesSync,
    W_OK,
    watch,
    watchFile,
    write,
    writeSync,
    writeFile,
    writeFileSync,
    X_OK,
};
export { access, accessSync, appendFile, appendFileSync, chmod, chmodSync, chown, chownSync, close, closeSync, constants, copyFile, copyFileSync, Dir, Dirent, exists, existsSync, F_OK, fdatasync, fdatasyncSync, fstat, fstatSync, fsync, fsyncSync, ftruncate, ftruncateSync, futimes, futimesSync, link, linkSync, lstat, lstatSync, mkdir, mkdirSync, mkdtemp, mkdtempSync, open, openSync, promises, R_OK, read, readdir, readdirSync, readFile, readFileSync, readlink, readlinkSync, readSync, realpath, realpathSync, rename, renameSync, rm, rmdir, rmdirSync, rmSync, stat, Stats, statSync, symlink, symlinkSync, truncate, truncateSync, unlink, unlinkSync, utimes, utimesSync, W_OK, watch, watchFile, write, writeFile, writeFileSync, writeSync, X_OK, };
