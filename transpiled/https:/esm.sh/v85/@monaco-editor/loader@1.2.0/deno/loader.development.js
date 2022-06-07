/* esm.sh - esbuild bundle(@monaco-editor/loader@1.2.0) deno development */
var __defProp = Object.defineProperty;

var __name = (target, value) => __defProp(target, "name", {
  value,
  configurable: true
}); // esm-build-1b1572c347305fa97b3c2faa1830a30253ceba77-3c14969d/node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

__name(_defineProperty, "_defineProperty");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

__name(ownKeys, "ownKeys");

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

__name(_objectSpread2, "_objectSpread2");

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

__name(_slicedToArray, "_slicedToArray");

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

__name(_arrayWithHoles, "_arrayWithHoles");

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _e = void 0;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

__name(_iterableToArrayLimit, "_iterableToArrayLimit");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

__name(_unsupportedIterableToArray, "_unsupportedIterableToArray");

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

__name(_arrayLikeToArray, "_arrayLikeToArray");

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

__name(_nonIterableRest, "_nonIterableRest"); // esm-build-1b1572c347305fa97b3c2faa1830a30253ceba77-3c14969d/node_modules/@monaco-editor/loader/lib/es/loader/index.js


import state from "/transpiled/https://esm.sh/v85/state-local@1.0.7/deno/state-local.development.js"; // esm-build-1b1572c347305fa97b3c2faa1830a30253ceba77-3c14969d/node_modules/@monaco-editor/loader/lib/es/config/index.js

var config = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.28.1/min/vs"
  }
};
var config_default = config; // esm-build-1b1572c347305fa97b3c2faa1830a30253ceba77-3c14969d/node_modules/@monaco-editor/loader/lib/es/utils/curry.js

function curry(fn) {
  return /* @__PURE__ */__name(function curried() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  }, "curried");
}

__name(curry, "curry");

var curry_default = curry; // esm-build-1b1572c347305fa97b3c2faa1830a30253ceba77-3c14969d/node_modules/@monaco-editor/loader/lib/es/utils/isObject.js

function isObject(value) {
  return {}.toString.call(value).includes("Object");
}

__name(isObject, "isObject");

var isObject_default = isObject; // esm-build-1b1572c347305fa97b3c2faa1830a30253ceba77-3c14969d/node_modules/@monaco-editor/loader/lib/es/validators/index.js

function validateConfig(config3) {
  if (!config3) errorHandler("configIsRequired");
  if (!isObject_default(config3)) errorHandler("configType");

  if (config3.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config3.urls.monacoBase
      }
    };
  }

  return config3;
}

__name(validateConfig, "validateConfig");

function informAboutDeprecation() {
  console.warn(errorMessages.deprecation);
}

__name(informAboutDeprecation, "informAboutDeprecation");

function throwError(errorMessages2, type) {
  throw new Error(errorMessages2[type] || errorMessages2["default"]);
}

__name(throwError, "throwError");

var errorMessages = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  "default": "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler = curry_default(throwError)(errorMessages);
var validators = {
  config: validateConfig
};
var validators_default = validators; // esm-build-1b1572c347305fa97b3c2faa1830a30253ceba77-3c14969d/node_modules/@monaco-editor/loader/lib/es/utils/compose.js

var compose = /* @__PURE__ */__name(function compose2() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
}, "compose");

var compose_default = compose; // esm-build-1b1572c347305fa97b3c2faa1830a30253ceba77-3c14969d/node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js

function merge(target, source) {
  Object.keys(source).forEach(function (key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return _objectSpread2(_objectSpread2({}, target), source);
}

__name(merge, "merge");

var deepMerge_default = merge; // esm-build-1b1572c347305fa97b3c2faa1830a30253ceba77-3c14969d/node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js

var CANCELATION_MESSAGE = {
  type: "cancelation",
  msg: "operation is manually canceled"
};

function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function () {
    return hasCanceled_ = true;
  }, wrappedPromise;
}

__name(makeCancelable, "makeCancelable");

var makeCancelable_default = makeCancelable; // esm-build-1b1572c347305fa97b3c2faa1830a30253ceba77-3c14969d/node_modules/@monaco-editor/loader/lib/es/loader/index.js

var _state$create = state.create({
  config: config_default,
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
});

var _state$create2 = _slicedToArray(_state$create, 2);

var getState = _state$create2[0];
var setState = _state$create2[1];

function config2(config3) {
  setState(function (state2) {
    return {
      config: deepMerge_default(state2.config, validators_default.config(config3))
    };
  });
}

__name(config2, "config");

function init() {
  var state2 = getState(function (_ref) {
    var isInitialized = _ref.isInitialized;
    return {
      isInitialized
    };
  });

  if (!state2.isInitialized) {
    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      return makeCancelable_default(Promise.resolve(window.monaco));
    }

    compose_default(injectScripts, getMonacoLoaderScript)(configureLoader);
    setState({
      isInitialized: true
    });
  }

  return makeCancelable_default(wrapperPromise);
}

__name(init, "init");

function injectScripts(script) {
  return document.body.appendChild(script);
}

__name(injectScripts, "injectScripts");

function createScript(src) {
  var script = document.createElement("script");
  return src && (script.src = src), script;
}

__name(createScript, "createScript");

function getMonacoLoaderScript(configureLoader2) {
  var state2 = getState(function (_ref2) {
    var config3 = _ref2.config,
        reject = _ref2.reject;
    return {
      config: config3,
      reject
    };
  });
  var loaderScript = createScript("".concat(state2.config.paths.vs, "/loader.js"));

  loaderScript.onload = function () {
    return configureLoader2();
  };

  loaderScript.onerror = state2.reject;
  return loaderScript;
}

__name(getMonacoLoaderScript, "getMonacoLoaderScript");

function configureLoader() {
  var state2 = getState(function (_ref3) {
    var config3 = _ref3.config,
        resolve = _ref3.resolve,
        reject = _ref3.reject;
    return {
      config: config3,
      resolve,
      reject
    };
  });
  var require2 = window.require;
  require2.config(state2.config);
  require2(["vs/editor/editor.main"], function (monaco) {
    storeMonacoInstance(monaco);
    state2.resolve(monaco);
  }, function (error) {
    state2.reject(error);
  });
}

__name(configureLoader, "configureLoader");

function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco
    });
  }
}

__name(storeMonacoInstance, "storeMonacoInstance");

function __getMonacoInstance() {
  return getState(function (_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}

__name(__getMonacoInstance, "__getMonacoInstance");

var wrapperPromise = new Promise(function (resolve, reject) {
  return setState({
    resolve,
    reject
  });
});
var loader = {
  config: config2,
  init,
  __getMonacoInstance
};
var loader_default = loader;
export { loader_default as default };