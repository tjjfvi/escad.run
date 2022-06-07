import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";

const _tmpl$ = /*#__PURE__*/_$template(`<div style="width: 100%; height: 100%"></div>`, 2);

/** @jsxImportSource solid */
import { Pane } from "/transpiled/https://escad.dev/client/Pane.js";
import { monaco } from "/transpiled/https://escad.dev/deps/monaco.js";
import { createEffect } from "/transpiled/https://escad.dev/deps/solid.js";
export const EditorPane = props => {
  const container = _tmpl$.cloneNode(true);

  const editor = monaco.editor.create(container, {
    model: monaco.editor.createModel("", "typescript", monaco.Uri.parse("/project/index.ts")),
    theme: "escad",
    minimap: {
      enabled: false
    },
    scrollbar: {
      useShadows: false
    },
    guides: {
      indentation: false
    },
    tabSize: 2,
    automaticLayout: true
  });
  createEffect(() => {
    augmentMonacoEditor(editor, props.projectManager);
  });
  return _$createComponent(Pane, {
    name: "Editor",
    side: "left",
    defaultWidth: 600,
    minWidth: 200,
    defaultOpen: true,
    children: container
  });
};
monaco.editor.defineTheme("escad", {
  base: "vs-dark",
  inherit: true,
  rules: [],
  colors: {
    "editor.background": "#151820"
  }
});
const depsRegex = /(from\s*|import\s*)(["'])(.+?)\2/g;
export const augmentMonacoEditor = (editor, projectManager) => {
  const mainModel = editor.getModel();
  mainModel.onDidChangeContent(debounce(onChange, 1000));
  mainModel.setValue(projectManager.getCode());
  const files = new Set();
  const bannedCharacters = /[^\w/.-]/g;
  let aliasesUri = monaco.Uri.parse("file:///aliases");
  let aliasesContent = "";
  onChange().then(() => mainModel.setValue(mainModel.getValue()));

  async function addFile(url) {
    if (files.has(url)) return;
    files.add(url);
    const fileName = url.replace("://", "/").replace(bannedCharacters, "_");
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
      } else {
        return match[1] + match[2] + match[3].replace(bannedCharacters, "_") + match[2];
      }
    });
    addLib(monaco.Uri.file(fileName + ".ts"), content);
    addLib(aliasesUri, aliasesContent += `declare module "${url}" { export * from "${fileName}"; export { default } from "${fileName}" }\n`);
    console.log(`Added dependency ${url} to monaco (${fileName})`);
    await Promise.all(children);

    function addLib(uri, content) {
      (monaco.editor.getModel(uri) ?? monaco.editor.createModel("", "typescript", uri)).setValue(content);
      monaco.languages.typescript.typescriptDefaults.addExtraLib(content, uri.toString());
    }
  }

  function addDeps(url, content) {
    return content.replace(/(from\s*|import\s*)(["'])(.+?)\2/g, (...match) => {
      addFile(new URL(match[3], url).toString());

      if (match[3].match(/^\w+:\/\//)) {
        return match[0];
      } else {
        return match[1] + match[2] + match[3].replace(bannedCharacters, "_") + match[2];
      }
    });
  }

  projectManager.events.on("codeChange", value => {
    if (value !== mainModel.getValue()) {
      mainModel.setValue(value);
    }
  });

  async function onChange() {
    const value = mainModel.getValue();

    if (value !== projectManager.getCode()) {
      projectManager.setCode(value);
    }

    await Promise.all([...value.matchAll(depsRegex)].map(x => addFile(x[3])));
  }

  return editor;
};

const debounce = (fn, amount) => {
  let timer = null;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn, amount);
  };
};