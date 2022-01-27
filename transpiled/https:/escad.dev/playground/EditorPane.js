import { debounce } from "/transpiled/https://escad.dev/playground/debounce.js";
import { code, setCode } from "/transpiled/https://escad.dev/playground/code.js";
import React from "/transpiled/https://escad.dev/deps/react.js";
import { Pane } from "/transpiled/https://escad.dev/client/Pane.js";
import { Editor, monaco } from "/transpiled/https://escad.dev/deps/monaco.js";
export const EditorPane = () => (React.createElement(Pane, { name: "Editor", left: true, defaultWidth: 600, minWidth: 200, defaultOpen: true },
    React.createElement(Editor, { onMount: (editor) => {
            augmentMonacoEditor(editor);
        }, options: {
            minimap: {
                enabled: false,
            },
            scrollbar: {
                useShadows: false,
            },
            guides: {
                indentation: false,
            },
            tabSize: 2,
        }, defaultLanguage: "typescript", theme: "escad" })));
monaco.editor.defineTheme("escad", {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
        "editor.background": "#151820",
    },
});
const depsRegex = /(from\s*|import\s*)(["'])(.+?)\2/g;
export const augmentMonacoEditor = (editor) => {
    const mainModel = monaco.editor.createModel("", "typescript", monaco.Uri.parse("/project/index.ts"));
    editor.setModel(mainModel);
    mainModel.onDidChangeContent(debounce(onChange, 1000));
    mainModel.setValue(code);
    const files = new Set();
    const bannedCharacters = /[^\w/.-]/g;
    let aliasesUri = monaco.Uri.parse("file:///aliases");
    let aliasesContent = "";
    onChange().then(() => mainModel.setValue(mainModel.getValue()));
    async function addFile(url) {
        if (files.has(url))
            return;
        files.add(url);
        const fileName = url
            .replace("://", "/")
            .replace(bannedCharacters, "_");
        const response = await fetch(url);
        if (!response.ok) {
            return console.error(`Could not add dependency ${url} to monaco`);
        }
        let content = await response.text();
        let children = [];
        content = content.replace(depsRegex, (...match) => {
            children.push(addFile(new URL(match[3], url).toString()));
            if (match[3].match(/^\w+:\/\//)) {
                return match[0];
            }
            else {
                return match[1] + match[2] + match[3].replace(bannedCharacters, "_") +
                    match[2];
            }
        });
        addLib(monaco.Uri.file(fileName + ".ts"), content);
        addLib(aliasesUri, aliasesContent +=
            `declare module "${url}" { export * from "${fileName}"; export { default } from "${fileName}" }\n`);
        console.log(`Added dependency ${url} to monaco (${fileName})`);
        await Promise.all(children);
        function addLib(uri, content) {
            (monaco.editor.getModel(uri) ??
                monaco.editor.createModel("", "typescript", uri)).setValue(content);
            monaco.languages.typescript.typescriptDefaults.addExtraLib(content, uri.toString());
        }
    }
    function addDeps(url, content) {
        return content.replace(/(from\s*|import\s*)(["'])(.+?)\2/g, (...match) => {
            addFile(new URL(match[3], url).toString());
            if (match[3].match(/^\w+:\/\//)) {
                return match[0];
            }
            else {
                return match[1] + match[2] + match[3].replace(bannedCharacters, "_") +
                    match[2];
            }
        });
    }
    async function onChange() {
        setCode(mainModel.getValue());
        await Promise.all([...code.matchAll(depsRegex)].map((x) => addFile(x[3])));
    }
    return editor;
};
