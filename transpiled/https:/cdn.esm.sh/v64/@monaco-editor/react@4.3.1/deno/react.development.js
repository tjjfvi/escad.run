/* esm.sh - esbuild bundle(@monaco-editor/react@4.3.1) deno development */
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/index.js
import { default as default2 } from "/transpiled/https://cdn.esm.sh/v64/@monaco-editor/loader@1.2.0/deno/loader.development.js";
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/DiffEditor/index.js
import { memo as memo2 } from "/transpiled/https://cdn.esm.sh/v64/react@17.0.2/deno/react.development.js";
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/DiffEditor/DiffEditor.js
import loader from "/transpiled/https://cdn.esm.sh/v64/@monaco-editor/loader@1.2.0/deno/loader.development.js";
import React3, { useState, useRef as useRef2, useCallback, useEffect as useEffect3 } from "/transpiled/https://cdn.esm.sh/v64/react@17.0.2/deno/react.development.js";
import PropTypes2 from "/transpiled/https://cdn.esm.sh/v64/prop-types@15.8.1/deno/prop-types.development.js";
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/MonacoContainer/index.js
import { memo } from "/transpiled/https://cdn.esm.sh/v64/react@17.0.2/deno/react.development.js";
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/MonacoContainer/MonacoContainer.js
import React2 from "/transpiled/https://cdn.esm.sh/v64/react@17.0.2/deno/react.development.js";
import PropTypes from "/transpiled/https://cdn.esm.sh/v64/prop-types@15.8.1/deno/prop-types.development.js";
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/_virtual/_rollupPluginBabelHelpers.js
function _extends() {
    _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/Loading/Loading.js
import React from "/transpiled/https://cdn.esm.sh/v64/react@17.0.2/deno/react.development.js";
var loadingStyles = {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
};
function Loading({ content }) {
    return /* @__PURE__ */ React.createElement("div", {
        style: loadingStyles
    }, content);
}
var Loading_default = Loading;
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/MonacoContainer/styles.js
var styles = {
    wrapper: {
        display: "flex",
        position: "relative",
        textAlign: "initial"
    },
    fullWidth: {
        width: "100%"
    },
    hide: {
        display: "none"
    }
};
var styles_default = styles;
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/MonacoContainer/MonacoContainer.js
function MonacoContainer({ width, height, isEditorReady, loading, _ref, className, wrapperProps }) {
    return /* @__PURE__ */ React2.createElement("section", _extends({
        style: {
            ...styles_default.wrapper,
            width,
            height
        }
    }, wrapperProps), !isEditorReady && /* @__PURE__ */ React2.createElement(Loading_default, {
        content: loading
    }), /* @__PURE__ */ React2.createElement("div", {
        ref: _ref,
        style: {
            ...styles_default.fullWidth,
            ...!isEditorReady && styles_default.hide
        },
        className
    }));
}
MonacoContainer.propTypes = {
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    isEditorReady: PropTypes.bool.isRequired,
    className: PropTypes.string,
    wrapperProps: PropTypes.object
};
var MonacoContainer_default = MonacoContainer;
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/MonacoContainer/index.js
var MonacoContainer2 = /* @__PURE__ */ memo(MonacoContainer_default);
var MonacoContainer_default2 = MonacoContainer2;
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js
import { useEffect } from "/transpiled/https://cdn.esm.sh/v64/react@17.0.2/deno/react.development.js";
function useMount(effect) {
    useEffect(effect, []);
}
var useMount_default = useMount;
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/hooks/useUpdate/index.js
import { useRef, useEffect as useEffect2 } from "/transpiled/https://cdn.esm.sh/v64/react@17.0.2/deno/react.development.js";
function useUpdate(effect, deps, applyChanges = true) {
    const isInitialMount = useRef(true);
    useEffect2(isInitialMount.current || !applyChanges ? () => {
        isInitialMount.current = false;
    } : effect, deps);
}
var useUpdate_default = useUpdate;
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/utils/index.js
function noop() {
}
function getOrCreateModel(monaco, value, language, path) {
    return getModel(monaco, path) || createModel(monaco, value, language, path);
}
function getModel(monaco, path) {
    return monaco.editor.getModel(createModelUri(monaco, path));
}
function createModel(monaco, value, language, path) {
    return monaco.editor.createModel(value, language, path && createModelUri(monaco, path));
}
function createModelUri(monaco, path) {
    return monaco.Uri.parse(path);
}
function isUndefined(input) {
    return input === void 0;
}
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/DiffEditor/DiffEditor.js
function DiffEditor({ original, modified, language, originalLanguage, modifiedLanguage, originalModelPath, modifiedModelPath, keepCurrentOriginalModel, keepCurrentModifiedModel, theme, loading, options, height, width, className, wrapperProps, beforeMount, onMount }) {
    const [isEditorReady, setIsEditorReady] = useState(false);
    const [isMonacoMounting, setIsMonacoMounting] = useState(true);
    const editorRef = useRef2(null);
    const monacoRef = useRef2(null);
    const containerRef = useRef2(null);
    const onMountRef = useRef2(onMount);
    const beforeMountRef = useRef2(beforeMount);
    useMount_default(() => {
        const cancelable = loader.init();
        cancelable.then((monaco) => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch((error) => (error === null || error === void 0 ? void 0 : error.type) !== "cancelation" && console.error("Monaco initialization: error:", error));
        return () => editorRef.current ? disposeEditor() : cancelable.cancel();
    });
    useUpdate_default(() => {
        const modifiedEditor = editorRef.current.getModifiedEditor();
        if (modifiedEditor.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
            modifiedEditor.setValue(modified);
        }
        else {
            if (modified !== modifiedEditor.getValue()) {
                modifiedEditor.executeEdits("", [{
                        range: modifiedEditor.getModel().getFullModelRange(),
                        text: modified,
                        forceMoveMarkers: true
                    }]);
                modifiedEditor.pushUndoStop();
            }
        }
    }, [modified], isEditorReady);
    useUpdate_default(() => {
        editorRef.current.getModel().original.setValue(original);
    }, [original], isEditorReady);
    useUpdate_default(() => {
        const { original: original2, modified: modified2 } = editorRef.current.getModel();
        monacoRef.current.editor.setModelLanguage(original2, originalLanguage || language);
        monacoRef.current.editor.setModelLanguage(modified2, modifiedLanguage || language);
    }, [language, originalLanguage, modifiedLanguage], isEditorReady);
    useUpdate_default(() => {
        monacoRef.current.editor.setTheme(theme);
    }, [theme], isEditorReady);
    useUpdate_default(() => {
        editorRef.current.updateOptions(options);
    }, [options], isEditorReady);
    const setModels = useCallback(() => {
        beforeMountRef.current(monacoRef.current);
        const originalModel = getOrCreateModel(monacoRef.current, original, originalLanguage || language, originalModelPath);
        const modifiedModel = getOrCreateModel(monacoRef.current, modified, modifiedLanguage || language, modifiedModelPath);
        editorRef.current.setModel({
            original: originalModel,
            modified: modifiedModel
        });
    }, [language, modified, modifiedLanguage, original, originalLanguage, originalModelPath, modifiedModelPath]);
    const createEditor = useCallback(() => {
        editorRef.current = monacoRef.current.editor.createDiffEditor(containerRef.current, {
            automaticLayout: true,
            ...options
        });
        setModels();
        monacoRef.current.editor.setTheme(theme);
        setIsEditorReady(true);
    }, [options, theme, setModels]);
    useEffect3(() => {
        if (isEditorReady) {
            onMountRef.current(editorRef.current, monacoRef.current);
        }
    }, [isEditorReady]);
    useEffect3(() => {
        !isMonacoMounting && !isEditorReady && createEditor();
    }, [isMonacoMounting, isEditorReady, createEditor]);
    function disposeEditor() {
        const models = editorRef.current.getModel();
        if (!keepCurrentOriginalModel) {
            var _models$original;
            (_models$original = models.original) === null || _models$original === void 0 ? void 0 : _models$original.dispose();
        }
        if (!keepCurrentModifiedModel) {
            var _models$modified;
            (_models$modified = models.modified) === null || _models$modified === void 0 ? void 0 : _models$modified.dispose();
        }
        editorRef.current.dispose();
    }
    return /* @__PURE__ */ React3.createElement(MonacoContainer_default2, {
        width,
        height,
        isEditorReady,
        loading,
        _ref: containerRef,
        className,
        wrapperProps
    });
}
DiffEditor.propTypes = {
    original: PropTypes2.string,
    modified: PropTypes2.string,
    language: PropTypes2.string,
    originalLanguage: PropTypes2.string,
    modifiedLanguage: PropTypes2.string,
    originalModelPath: PropTypes2.string,
    modifiedModelPath: PropTypes2.string,
    keepCurrentOriginalModel: PropTypes2.bool,
    keepCurrentModifiedModel: PropTypes2.bool,
    theme: PropTypes2.string,
    loading: PropTypes2.oneOfType([PropTypes2.element, PropTypes2.string]),
    options: PropTypes2.object,
    width: PropTypes2.oneOfType([PropTypes2.number, PropTypes2.string]),
    height: PropTypes2.oneOfType([PropTypes2.number, PropTypes2.string]),
    className: PropTypes2.string,
    wrapperProps: PropTypes2.object,
    beforeMount: PropTypes2.func,
    onMount: PropTypes2.func
};
DiffEditor.defaultProps = {
    theme: "light",
    loading: "Loading...",
    options: {},
    keepCurrentOriginalModel: false,
    keepCurrentModifiedModel: false,
    width: "100%",
    height: "100%",
    wrapperProps: {},
    beforeMount: noop,
    onMount: noop
};
var DiffEditor_default = DiffEditor;
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/DiffEditor/index.js
var index = /* @__PURE__ */ memo2(DiffEditor_default);
var DiffEditor_default2 = index;
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/hooks/useMonaco/index.js
import loader2 from "/transpiled/https://cdn.esm.sh/v64/@monaco-editor/loader@1.2.0/deno/loader.development.js";
import { useState as useState2 } from "/transpiled/https://cdn.esm.sh/v64/react@17.0.2/deno/react.development.js";
function useMonaco() {
    const [monaco, setMonaco] = useState2(loader2.__getMonacoInstance());
    useMount_default(() => {
        let cancelable;
        if (!monaco) {
            cancelable = loader2.init();
            cancelable.then((monaco2) => {
                setMonaco(monaco2);
            });
        }
        return () => {
            var _cancelable;
            return (_cancelable = cancelable) === null || _cancelable === void 0 ? void 0 : _cancelable.cancel();
        };
    });
    return monaco;
}
var useMonaco_default = useMonaco;
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/Editor/index.js
import { memo as memo3 } from "/transpiled/https://cdn.esm.sh/v64/react@17.0.2/deno/react.development.js";
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/Editor/Editor.js
import loader3 from "/transpiled/https://cdn.esm.sh/v64/@monaco-editor/loader@1.2.0/deno/loader.development.js";
import React4, { useState as useState3, useRef as useRef4, useCallback as useCallback2, useEffect as useEffect5 } from "/transpiled/https://cdn.esm.sh/v64/react@17.0.2/deno/react.development.js";
import PropTypes3 from "/transpiled/https://cdn.esm.sh/v64/prop-types@15.8.1/deno/prop-types.development.js";
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/hooks/usePrevious/index.js
import { useRef as useRef3, useEffect as useEffect4 } from "/transpiled/https://cdn.esm.sh/v64/react@17.0.2/deno/react.development.js";
function usePrevious(value) {
    const ref = useRef3();
    useEffect4(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}
var usePrevious_default = usePrevious;
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/Editor/Editor.js
var viewStates = /* @__PURE__ */ new Map();
function Editor({ defaultValue, defaultLanguage, defaultPath, value, language, path, theme, line, loading, options, overrideServices, saveViewState, keepCurrentModel, width, height, className, wrapperProps, beforeMount, onMount, onChange, onValidate }) {
    const [isEditorReady, setIsEditorReady] = useState3(false);
    const [isMonacoMounting, setIsMonacoMounting] = useState3(true);
    const monacoRef = useRef4(null);
    const editorRef = useRef4(null);
    const containerRef = useRef4(null);
    const onMountRef = useRef4(onMount);
    const beforeMountRef = useRef4(beforeMount);
    const subscriptionRef = useRef4(null);
    const valueRef = useRef4(value);
    const previousPath = usePrevious_default(path);
    useMount_default(() => {
        const cancelable = loader3.init();
        cancelable.then((monaco) => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch((error) => (error === null || error === void 0 ? void 0 : error.type) !== "cancelation" && console.error("Monaco initialization: error:", error));
        return () => editorRef.current ? disposeEditor() : cancelable.cancel();
    });
    useUpdate_default(() => {
        const model = getOrCreateModel(monacoRef.current, defaultValue || value, defaultLanguage || language, path);
        if (model !== editorRef.current.getModel()) {
            saveViewState && viewStates.set(previousPath, editorRef.current.saveViewState());
            editorRef.current.setModel(model);
            saveViewState && editorRef.current.restoreViewState(viewStates.get(path));
        }
    }, [path], isEditorReady);
    useUpdate_default(() => {
        editorRef.current.updateOptions(options);
    }, [options], isEditorReady);
    useUpdate_default(() => {
        if (editorRef.current.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
            editorRef.current.setValue(value);
        }
        else {
            if (value !== editorRef.current.getValue()) {
                editorRef.current.executeEdits("", [{
                        range: editorRef.current.getModel().getFullModelRange(),
                        text: value,
                        forceMoveMarkers: true
                    }]);
                editorRef.current.pushUndoStop();
            }
        }
    }, [value], isEditorReady);
    useUpdate_default(() => {
        monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), language);
    }, [language], isEditorReady);
    useUpdate_default(() => {
        if (!isUndefined(line)) {
            editorRef.current.revealLine(line);
        }
    }, [line], isEditorReady);
    useUpdate_default(() => {
        monacoRef.current.editor.setTheme(theme);
    }, [theme], isEditorReady);
    const createEditor = useCallback2(() => {
        beforeMountRef.current(monacoRef.current);
        const autoCreatedModelPath = path || defaultPath;
        const defaultModel = getOrCreateModel(monacoRef.current, value || defaultValue, defaultLanguage || language, autoCreatedModelPath);
        editorRef.current = monacoRef.current.editor.create(containerRef.current, {
            model: defaultModel,
            automaticLayout: true,
            ...options
        }, overrideServices);
        saveViewState && editorRef.current.restoreViewState(viewStates.get(autoCreatedModelPath));
        monacoRef.current.editor.setTheme(theme);
        setIsEditorReady(true);
    }, [defaultValue, defaultLanguage, defaultPath, value, language, path, options, overrideServices, saveViewState, theme]);
    useEffect5(() => {
        if (isEditorReady) {
            onMountRef.current(editorRef.current, monacoRef.current);
        }
    }, [isEditorReady]);
    useEffect5(() => {
        !isMonacoMounting && !isEditorReady && createEditor();
    }, [isMonacoMounting, isEditorReady, createEditor]);
    valueRef.current = value;
    useEffect5(() => {
        if (isEditorReady && onChange) {
            var _subscriptionRef$curr, _editorRef$current;
            (_subscriptionRef$curr = subscriptionRef.current) === null || _subscriptionRef$curr === void 0 ? void 0 : _subscriptionRef$curr.dispose();
            subscriptionRef.current = (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.onDidChangeModelContent((event) => {
                const editorValue = editorRef.current.getValue();
                if (valueRef.current !== editorValue) {
                    onChange(editorValue, event);
                }
            });
        }
    }, [isEditorReady, onChange]);
    useEffect5(() => {
        if (isEditorReady) {
            const changeMarkersListener = monacoRef.current.editor.onDidChangeMarkers((uris) => {
                var _editorRef$current$ge;
                const editorUri = (_editorRef$current$ge = editorRef.current.getModel()) === null || _editorRef$current$ge === void 0 ? void 0 : _editorRef$current$ge.uri;
                if (editorUri) {
                    const currentEditorHasMarkerChanges = uris.find((uri) => uri.path === editorUri.path);
                    if (currentEditorHasMarkerChanges) {
                        const markers = monacoRef.current.editor.getModelMarkers({
                            resource: editorUri
                        });
                        onValidate === null || onValidate === void 0 ? void 0 : onValidate(markers);
                    }
                }
            });
            return () => {
                changeMarkersListener === null || changeMarkersListener === void 0 ? void 0 : changeMarkersListener.dispose();
            };
        }
    }, [isEditorReady, onValidate]);
    function disposeEditor() {
        var _subscriptionRef$curr2;
        (_subscriptionRef$curr2 = subscriptionRef.current) === null || _subscriptionRef$curr2 === void 0 ? void 0 : _subscriptionRef$curr2.dispose();
        if (keepCurrentModel) {
            saveViewState && viewStates.set(path, editorRef.current.saveViewState());
        }
        else {
            var _editorRef$current$ge2;
            (_editorRef$current$ge2 = editorRef.current.getModel()) === null || _editorRef$current$ge2 === void 0 ? void 0 : _editorRef$current$ge2.dispose();
        }
        editorRef.current.dispose();
    }
    return /* @__PURE__ */ React4.createElement(MonacoContainer_default2, {
        width,
        height,
        isEditorReady,
        loading,
        _ref: containerRef,
        className,
        wrapperProps
    });
}
Editor.propTypes = {
    defaultValue: PropTypes3.string,
    defaultPath: PropTypes3.string,
    defaultLanguage: PropTypes3.string,
    value: PropTypes3.string,
    language: PropTypes3.string,
    path: PropTypes3.string,
    theme: PropTypes3.string,
    line: PropTypes3.number,
    loading: PropTypes3.oneOfType([PropTypes3.element, PropTypes3.string]),
    options: PropTypes3.object,
    overrideServices: PropTypes3.object,
    saveViewState: PropTypes3.bool,
    keepCurrentModel: PropTypes3.bool,
    width: PropTypes3.oneOfType([PropTypes3.number, PropTypes3.string]),
    height: PropTypes3.oneOfType([PropTypes3.number, PropTypes3.string]),
    className: PropTypes3.string,
    wrapperProps: PropTypes3.object,
    beforeMount: PropTypes3.func,
    onMount: PropTypes3.func,
    onChange: PropTypes3.func,
    onValidate: PropTypes3.func
};
Editor.defaultProps = {
    theme: "light",
    loading: "Loading...",
    options: {},
    overrideServices: {},
    saveViewState: true,
    keepCurrentModel: false,
    width: "100%",
    height: "100%",
    wrapperProps: {},
    beforeMount: noop,
    onMount: noop,
    onValidate: noop
};
var Editor_default = Editor;
// esm-build-e81ea98026d5e4b99470ab3fdf4ec97ba5249ca0-69635334/node_modules/@monaco-editor/react/lib/es/Editor/index.js
var index2 = /* @__PURE__ */ memo3(Editor_default);
var Editor_default2 = index2;
export { DiffEditor_default2 as DiffEditor, Editor_default2 as default, default2 as loader, useMonaco_default as useMonaco };
