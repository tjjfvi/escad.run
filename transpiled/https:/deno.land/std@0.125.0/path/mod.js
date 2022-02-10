// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
// Copyright the Browserify authors. MIT License.
// Ported mostly from https://github.com/browserify/path-browserify/
// This module is browser compatible.
import { isWindows } from "/transpiled/https://deno.land/std@0.125.0/_util/os.js";
import * as _win32 from "/transpiled/https://deno.land/std@0.125.0/path/win32.js";
import * as _posix from "/transpiled/https://deno.land/std@0.125.0/path/posix.js";
const path = isWindows ? _win32 : _posix;
export const win32 = _win32;
export const posix = _posix;
export const { basename, delimiter, dirname, extname, format, fromFileUrl, isAbsolute, join, normalize, parse, relative, resolve, sep, toFileUrl, toNamespacedPath, } = path;
export * from "/transpiled/https://deno.land/std@0.125.0/path/common.js";
export { SEP, SEP_PATTERN } from "/transpiled/https://deno.land/std@0.125.0/path/separator.js";
export * from "/transpiled/https://deno.land/std@0.125.0/path/_interface.js";
export * from "/transpiled/https://deno.land/std@0.125.0/path/glob.js";
