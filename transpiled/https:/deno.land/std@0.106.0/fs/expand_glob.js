// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
import { globToRegExp, isAbsolute, isGlob, joinGlobs, normalize, SEP_PATTERN, } from "/transpiled/https://deno.land/std@0.106.0/path/mod.js";
import { _createWalkEntry, _createWalkEntrySync, walk, walkSync, } from "/transpiled/https://deno.land/std@0.106.0/fs/walk.js";
import { assert } from "/transpiled/https://deno.land/std@0.106.0/_util/assert.js";
import { isWindows } from "/transpiled/https://deno.land/std@0.106.0/_util/os.js";
function split(path) {
    const s = SEP_PATTERN.source;
    const segments = path
        .replace(new RegExp(`^${s}|${s}$`, "g"), "")
        .split(SEP_PATTERN);
    const isAbsolute_ = isAbsolute(path);
    return {
        segments,
        isAbsolute: isAbsolute_,
        hasTrailingSep: !!path.match(new RegExp(`${s}$`)),
        winRoot: isWindows && isAbsolute_ ? segments.shift() : undefined,
    };
}
function throwUnlessNotFound(error) {
    if (!(error instanceof Deno.errors.NotFound)) {
        throw error;
    }
}
function comparePath(a, b) {
    if (a.path < b.path)
        return -1;
    if (a.path > b.path)
        return 1;
    return 0;
}
/** Expand the glob string from the specified `root` directory and yield each
 * result as a `WalkEntry` object.
 *
 * See [`globToRegExp()`](../path/glob.ts#globToRegExp) for details on supported
 * syntax.
 *
 * Example:
 *
 *      for await (const file of expandGlob("**\/*.ts")) {
 *        console.log(file);
 *      }
 */
export async function* expandGlob(glob, { root = Deno.cwd(), exclude = [], includeDirs = true, extended = false, globstar = false, caseInsensitive, } = {}) {
    const globOptions = { extended, globstar, caseInsensitive };
    const absRoot = isAbsolute(root)
        ? normalize(root)
        : joinGlobs([Deno.cwd(), root], globOptions);
    const resolveFromRoot = (path) => isAbsolute(path)
        ? normalize(path)
        : joinGlobs([absRoot, path], globOptions);
    const excludePatterns = exclude
        .map(resolveFromRoot)
        .map((s) => globToRegExp(s, globOptions));
    const shouldInclude = (path) => !excludePatterns.some((p) => !!path.match(p));
    const { segments, hasTrailingSep, winRoot } = split(resolveFromRoot(glob));
    let fixedRoot = winRoot != undefined ? winRoot : "/";
    while (segments.length > 0 && !isGlob(segments[0])) {
        const seg = segments.shift();
        assert(seg != null);
        fixedRoot = joinGlobs([fixedRoot, seg], globOptions);
    }
    let fixedRootInfo;
    try {
        fixedRootInfo = await _createWalkEntry(fixedRoot);
    }
    catch (error) {
        return throwUnlessNotFound(error);
    }
    async function* advanceMatch(walkInfo, globSegment) {
        if (!walkInfo.isDirectory) {
            return;
        }
        else if (globSegment == "..") {
            const parentPath = joinGlobs([walkInfo.path, ".."], globOptions);
            try {
                if (shouldInclude(parentPath)) {
                    return yield await _createWalkEntry(parentPath);
                }
            }
            catch (error) {
                throwUnlessNotFound(error);
            }
            return;
        }
        else if (globSegment == "**") {
            return yield* walk(walkInfo.path, {
                includeFiles: false,
                skip: excludePatterns,
            });
        }
        yield* walk(walkInfo.path, {
            maxDepth: 1,
            match: [
                globToRegExp(joinGlobs([walkInfo.path, globSegment], globOptions), globOptions),
            ],
            skip: excludePatterns,
        });
    }
    let currentMatches = [fixedRootInfo];
    for (const segment of segments) {
        // Advancing the list of current matches may introduce duplicates, so we
        // pass everything through this Map.
        const nextMatchMap = new Map();
        for (const currentMatch of currentMatches) {
            for await (const nextMatch of advanceMatch(currentMatch, segment)) {
                nextMatchMap.set(nextMatch.path, nextMatch);
            }
        }
        currentMatches = [...nextMatchMap.values()].sort(comparePath);
    }
    if (hasTrailingSep) {
        currentMatches = currentMatches.filter((entry) => entry.isDirectory);
    }
    if (!includeDirs) {
        currentMatches = currentMatches.filter((entry) => !entry.isDirectory);
    }
    yield* currentMatches;
}
/** Synchronous version of `expandGlob()`.
 *
 * Example:
 *
 *      for (const file of expandGlobSync("**\/*.ts")) {
 *        console.log(file);
 *      }
 */
export function* expandGlobSync(glob, { root = Deno.cwd(), exclude = [], includeDirs = true, extended = false, globstar = false, caseInsensitive, } = {}) {
    const globOptions = { extended, globstar, caseInsensitive };
    const absRoot = isAbsolute(root)
        ? normalize(root)
        : joinGlobs([Deno.cwd(), root], globOptions);
    const resolveFromRoot = (path) => isAbsolute(path)
        ? normalize(path)
        : joinGlobs([absRoot, path], globOptions);
    const excludePatterns = exclude
        .map(resolveFromRoot)
        .map((s) => globToRegExp(s, globOptions));
    const shouldInclude = (path) => !excludePatterns.some((p) => !!path.match(p));
    const { segments, hasTrailingSep, winRoot } = split(resolveFromRoot(glob));
    let fixedRoot = winRoot != undefined ? winRoot : "/";
    while (segments.length > 0 && !isGlob(segments[0])) {
        const seg = segments.shift();
        assert(seg != null);
        fixedRoot = joinGlobs([fixedRoot, seg], globOptions);
    }
    let fixedRootInfo;
    try {
        fixedRootInfo = _createWalkEntrySync(fixedRoot);
    }
    catch (error) {
        return throwUnlessNotFound(error);
    }
    function* advanceMatch(walkInfo, globSegment) {
        if (!walkInfo.isDirectory) {
            return;
        }
        else if (globSegment == "..") {
            const parentPath = joinGlobs([walkInfo.path, ".."], globOptions);
            try {
                if (shouldInclude(parentPath)) {
                    return yield _createWalkEntrySync(parentPath);
                }
            }
            catch (error) {
                throwUnlessNotFound(error);
            }
            return;
        }
        else if (globSegment == "**") {
            return yield* walkSync(walkInfo.path, {
                includeFiles: false,
                skip: excludePatterns,
            });
        }
        yield* walkSync(walkInfo.path, {
            maxDepth: 1,
            match: [
                globToRegExp(joinGlobs([walkInfo.path, globSegment], globOptions), globOptions),
            ],
            skip: excludePatterns,
        });
    }
    let currentMatches = [fixedRootInfo];
    for (const segment of segments) {
        // Advancing the list of current matches may introduce duplicates, so we
        // pass everything through this Map.
        const nextMatchMap = new Map();
        for (const currentMatch of currentMatches) {
            for (const nextMatch of advanceMatch(currentMatch, segment)) {
                nextMatchMap.set(nextMatch.path, nextMatch);
            }
        }
        currentMatches = [...nextMatchMap.values()].sort(comparePath);
    }
    if (hasTrailingSep) {
        currentMatches = currentMatches.filter((entry) => entry.isDirectory);
    }
    if (!includeDirs) {
        currentMatches = currentMatches.filter((entry) => !entry.isDirectory);
    }
    yield* currentMatches;
}
