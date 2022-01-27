import { ensureDir, ensureDirSync } from "/transpiled/https://deno.land/std@0.106.0/fs/ensure_dir.js";
import { expandGlob, expandGlobSync } from "/transpiled/https://deno.land/std@0.106.0/fs/expand_glob.js";
import * as stdPath from "/transpiled/https://deno.land/std@0.106.0/path/mod.js";
export class DenoRuntime {
    fs = new DenoRuntimeFileSystem();
    path = new DenoRuntimePath();
    getEnvVar(name) {
        return Deno.env.get(name);
    }
    getEndOfLine() {
        return Deno.build.os === "windows" ? "\r\n" : "\n";
    }
    getPathMatchesPattern(path, pattern) {
        return stdPath.globToRegExp(pattern, {
            extended: true,
            globstar: true,
            os: "linux", // use the same behaviour across all operating systems
        }).test(path);
    }
}
class DenoRuntimePath {
    join(...paths) {
        return stdPath.join(...paths);
    }
    normalize(path) {
        return stdPath.normalize(path);
    }
    relative(from, to) {
        return stdPath.relative(from, to);
    }
}
class DenoRuntimeFileSystem {
    delete(path) {
        return Deno.remove(path);
    }
    deleteSync(path) {
        Deno.removeSync(path);
    }
    readDirSync(dirPath) {
        return Array.from(Deno.readDirSync(dirPath));
    }
    readFile(filePath, _encoding = "utf-8") {
        return Deno.readTextFile(filePath);
    }
    readFileSync(filePath, _encoding = "utf-8") {
        return Deno.readTextFileSync(filePath);
    }
    writeFile(filePath, fileText) {
        return Deno.writeTextFile(filePath, fileText);
    }
    writeFileSync(filePath, fileText) {
        return Deno.writeTextFileSync(filePath, fileText);
    }
    async mkdir(dirPath) {
        await ensureDir(dirPath);
    }
    mkdirSync(dirPath) {
        ensureDirSync(dirPath);
    }
    move(srcPath, destPath) {
        return Deno.rename(srcPath, destPath);
    }
    moveSync(srcPath, destPath) {
        Deno.renameSync(srcPath, destPath);
    }
    copy(srcPath, destPath) {
        return Deno.copyFile(srcPath, destPath);
    }
    copySync(srcPath, destPath) {
        return Deno.copyFileSync(srcPath, destPath);
    }
    async fileExists(filePath) {
        try {
            const stat = await Deno.stat(filePath);
            return stat.isFile;
        }
        catch {
            return false;
        }
    }
    fileExistsSync(filePath) {
        try {
            return Deno.statSync(filePath).isFile;
        }
        catch {
            return false;
        }
    }
    async directoryExists(dirPath) {
        try {
            const stat = await Deno.stat(dirPath);
            return stat.isDirectory;
        }
        catch {
            return false;
        }
    }
    directoryExistsSync(dirPath) {
        try {
            return Deno.statSync(dirPath).isDirectory;
        }
        catch (err) {
            return false;
        }
    }
    realpathSync(path) {
        return Deno.realPathSync(path);
    }
    getCurrentDirectory() {
        return Deno.cwd();
    }
    async glob(patterns) {
        const { excludePatterns, pattern } = globPatternsToPattern(patterns);
        const result = [];
        const globEntries = expandGlob(pattern, {
            root: this.getCurrentDirectory(),
            extended: true,
            globstar: true,
            exclude: excludePatterns,
        });
        for await (const globEntry of globEntries) {
            if (globEntry.isFile)
                result.push(globEntry.path);
        }
        return result;
    }
    globSync(patterns) {
        const { excludePatterns, pattern } = globPatternsToPattern(patterns);
        const result = [];
        const globEntries = expandGlobSync(pattern, {
            root: this.getCurrentDirectory(),
            extended: true,
            globstar: true,
            exclude: excludePatterns,
        });
        for (const globEntry of globEntries) {
            if (globEntry.isFile)
                result.push(globEntry.path);
        }
        return result;
    }
    isCaseSensitive() {
        const platform = Deno.build.os;
        return platform !== "windows" && platform !== "darwin";
    }
}
function globPatternsToPattern(patterns) {
    const excludePatterns = [];
    const includePatterns = [];
    for (const pattern of patterns) {
        if (isNegatedGlob(pattern))
            excludePatterns.push(pattern);
        else
            includePatterns.push(pattern);
    }
    return {
        excludePatterns,
        pattern: includePatterns.length === 0 ? "." : includePatterns.length === 1 ? includePatterns[0] : `{${includePatterns.join(",")}}`,
    };
    function isNegatedGlob(glob) {
        // https://github.com/micromatch/is-negated-glob/blob/master/index.js
        return glob[0] === "!" && glob[1] !== "(";
    }
}
