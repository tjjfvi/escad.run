import { ts } from "/transpiled/https://escad.dev/deps/tsc.js";
import { stylus } from "/transpiled/https://escad.dev/deps/stylus.js";
import { createMessenger } from "/transpiled/https://escad.dev/messages/mod.js";
import { transformUrl } from "/transpiled/https://escad.dev/transpiler/transformUrl.js";
export function createTranspiler(ctx) {
    const memo = new Map();
    return { ...ctx, memo, transpile, transpileAll };
    async function transpile(url, force = false) {
        return transpileAll([url], force);
    }
    async function transpileAll(urls, force = false) {
        const done = new Set(urls);
        const waiting = urls.map((url) => _transpile(url, force));
        while (waiting.length) {
            for (let dep of await waiting.pop()) {
                if (done.has(dep))
                    continue;
                done.add(dep);
                waiting.push(_transpile(dep));
            }
        }
    }
    async function _transpile(url, force = false) {
        if (!force) {
            let running = memo.get(url);
            if (running) {
                return running;
            }
        }
        console.log("transpiling", url);
        let prom = (async () => {
            if (!force && await ctx.cache.has(url)) {
                return [];
            }
            let [result, deps] = await __transpile(url);
            deps.map((x) => transpile(x));
            await ctx.cache.set(transformUrl(url), result);
            return deps;
        })();
        memo.set(url, prom);
        return prom;
    }
    async function __transpile(url) {
        let response = await fetch(url);
        if (!response.ok) {
            let error = new Error(`Error fetching ${url} for transpilation`);
            // @ts-ignore
            error.response = response;
            throw error;
        }
        let content = await response.text();
        const transpileFn = url.endsWith(".css")
            ? _transpileCss
            : url.endsWith(".styl")
                ? _transpileStyl
                : _transpileTs;
        return await transpileFn(url, content);
    }
    async function _transpileStyl(url, content) {
        content = [
            await stylusStdlib,
            stylusGlobals,
            content,
        ].join("\n\n\n\n\n");
        let renderer = stylus.default(content);
        renderer.options.imports = [];
        let css = renderer.render();
        return _transpileCss(url, css);
    }
    async function _transpileCss(url, content) {
        let jsUrl = url + ".js";
        let jsContent = `
let el = document.createElement("link");
el.type = "text/css";
el.rel = "stylesheet";
el.href = ${JSON.stringify(ctx.transformUrl(transformUrl(url)))};
document.head.appendChild(el);
await new Promise(r => el.onload = r)
  `;
        await ctx.cache.set(transformUrl(jsUrl), jsContent);
        return [content, []];
    }
    async function _transpileTs(url, content) {
        let deps = [];
        let result = ts.transpileModule(content, {
            fileName: url,
            compilerOptions: {
                target: ts.ScriptTarget.ESNext,
                allowJs: true,
                jsx: url.endsWith(".tsx") || url.endsWith(".jsx")
                    ? ts.JsxEmit.React
                    : ts.JsxEmit.None,
            },
            transformers: {
                after: [
                    (context) => (sourceFile) => {
                        function visitor(node) {
                            if (node.kind === ts.SyntaxKind.StringLiteral &&
                                [
                                    ts.SyntaxKind.ImportDeclaration,
                                    ts.SyntaxKind.ImportSpecifier,
                                    ts.SyntaxKind.ExportDeclaration,
                                ].includes(node.parent?.kind)) {
                                let str = JSON.parse(`"${node.getText(sourceFile).slice(1, -1)}"`);
                                let resolved = (new URL(str, url)).toString();
                                deps.push(resolved);
                                return ts.factory.createStringLiteral(ctx.transformUrl(transformDepUrl(resolved)));
                            }
                            return ts.visitEachChild(node, visitor, context);
                        }
                        return ts.visitNode(sourceFile, visitor);
                    },
                ],
            },
        });
        return [result.outputText, deps];
    }
}
let stylusStdlib = fetch("https://unpkg.com/stylus@0.56.0/lib/functions/index.styl").then((r) => r.text());
let stylusGlobals = `
$black = #151820
$darkgrey = #252830
$grey = #454850
$lightgrey = #656870
$white = #bdc3c7
$red = #c0392b
$orange = #d35400
$yellow = #f1c40f
$green = #2ecc71
$blue = #0984e3
$purple = #8e44ad

prefix(prop)
  -webkit-{prop} slice(arguments, 1)
  -moz-{prop} slice(arguments, 1)
  -ms-{prop} slice(arguments, 1)
  {prop} slice(arguments, 1)
`;
function transformDepUrl(url) {
    if (url.endsWith(".css") || url.endsWith(".styl")) {
        url += ".js";
    }
    return transformUrl(url);
}
export function createTranspilerServerMessenger(transpiler, connection) {
    let runningCount = 0;
    const messenger = createMessenger({
        impl: {
            transpile: async (url, force) => {
                console.log("++", url);
                runningCount++;
                await transpiler.transpile(url, force);
                runningCount--;
                console.log("--", url);
                if (runningCount === 0) {
                    messenger.emit("transpileFinish");
                }
            },
            transpileAll: async (urls, force) => {
                console.log("++");
                runningCount++;
                await transpiler.transpileAll(urls, force);
                runningCount--;
                console.log("--");
                if (runningCount === 0) {
                    messenger.emit("transpileFinish");
                }
            },
        },
        connection,
    });
    return messenger;
}
