import monacoLoader from "/transpiled/https://esm.sh/@monaco-editor/loader@1.2.0_dev.js";
monacoLoader.config({
    paths: { vs: "https://typescript.azureedge.net/cdn/4.5.4/monaco/min/vs" },
});
export const monaco = await monacoLoader.init();
export { default as Editor } from "/transpiled/https://esm.sh/@monaco-editor/react@4.3.1_dev.js";
