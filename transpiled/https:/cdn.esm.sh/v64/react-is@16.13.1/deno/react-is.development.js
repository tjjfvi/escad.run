/* esm.sh - esbuild bundle(react-is@16.13.1) deno development */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
        for (let key of __getOwnPropNames(module))
            if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
                __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
};
var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};
// esm-build-02aade17aa542f86e3a45cd893920b53a10da4f8-97cec6a7/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
    "esm-build-02aade17aa542f86e3a45cd893920b53a10da4f8-97cec6a7/node_modules/react-is/cjs/react-is.development.js"(exports) {
        "use strict";
        if (true) {
            (function () {
                "use strict";
                var hasSymbol = typeof Symbol === "function" && Symbol.for;
                var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
                var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
                var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
                var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
                var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
                var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
                var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
                var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
                var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
                var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
                var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
                var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
                var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
                var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
                var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
                var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
                var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
                var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
                function isValidElementType2(type) {
                    return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
                }
                function typeOf2(object) {
                    if (typeof object === "object" && object !== null) {
                        var $$typeof = object.$$typeof;
                        switch ($$typeof) {
                            case REACT_ELEMENT_TYPE:
                                var type = object.type;
                                switch (type) {
                                    case REACT_ASYNC_MODE_TYPE:
                                    case REACT_CONCURRENT_MODE_TYPE:
                                    case REACT_FRAGMENT_TYPE:
                                    case REACT_PROFILER_TYPE:
                                    case REACT_STRICT_MODE_TYPE:
                                    case REACT_SUSPENSE_TYPE:
                                        return type;
                                    default:
                                        var $$typeofType = type && type.$$typeof;
                                        switch ($$typeofType) {
                                            case REACT_CONTEXT_TYPE:
                                            case REACT_FORWARD_REF_TYPE:
                                            case REACT_LAZY_TYPE:
                                            case REACT_MEMO_TYPE:
                                            case REACT_PROVIDER_TYPE:
                                                return $$typeofType;
                                            default:
                                                return $$typeof;
                                        }
                                }
                            case REACT_PORTAL_TYPE:
                                return $$typeof;
                        }
                    }
                    return void 0;
                }
                var AsyncMode2 = REACT_ASYNC_MODE_TYPE;
                var ConcurrentMode2 = REACT_CONCURRENT_MODE_TYPE;
                var ContextConsumer2 = REACT_CONTEXT_TYPE;
                var ContextProvider2 = REACT_PROVIDER_TYPE;
                var Element2 = REACT_ELEMENT_TYPE;
                var ForwardRef2 = REACT_FORWARD_REF_TYPE;
                var Fragment2 = REACT_FRAGMENT_TYPE;
                var Lazy2 = REACT_LAZY_TYPE;
                var Memo2 = REACT_MEMO_TYPE;
                var Portal2 = REACT_PORTAL_TYPE;
                var Profiler2 = REACT_PROFILER_TYPE;
                var StrictMode2 = REACT_STRICT_MODE_TYPE;
                var Suspense2 = REACT_SUSPENSE_TYPE;
                var hasWarnedAboutDeprecatedIsAsyncMode = false;
                function isAsyncMode2(object) {
                    {
                        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                            hasWarnedAboutDeprecatedIsAsyncMode = true;
                            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
                        }
                    }
                    return isConcurrentMode2(object) || typeOf2(object) === REACT_ASYNC_MODE_TYPE;
                }
                function isConcurrentMode2(object) {
                    return typeOf2(object) === REACT_CONCURRENT_MODE_TYPE;
                }
                function isContextConsumer2(object) {
                    return typeOf2(object) === REACT_CONTEXT_TYPE;
                }
                function isContextProvider2(object) {
                    return typeOf2(object) === REACT_PROVIDER_TYPE;
                }
                function isElement2(object) {
                    return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
                }
                function isForwardRef2(object) {
                    return typeOf2(object) === REACT_FORWARD_REF_TYPE;
                }
                function isFragment2(object) {
                    return typeOf2(object) === REACT_FRAGMENT_TYPE;
                }
                function isLazy2(object) {
                    return typeOf2(object) === REACT_LAZY_TYPE;
                }
                function isMemo2(object) {
                    return typeOf2(object) === REACT_MEMO_TYPE;
                }
                function isPortal2(object) {
                    return typeOf2(object) === REACT_PORTAL_TYPE;
                }
                function isProfiler2(object) {
                    return typeOf2(object) === REACT_PROFILER_TYPE;
                }
                function isStrictMode2(object) {
                    return typeOf2(object) === REACT_STRICT_MODE_TYPE;
                }
                function isSuspense2(object) {
                    return typeOf2(object) === REACT_SUSPENSE_TYPE;
                }
                exports.AsyncMode = AsyncMode2;
                exports.ConcurrentMode = ConcurrentMode2;
                exports.ContextConsumer = ContextConsumer2;
                exports.ContextProvider = ContextProvider2;
                exports.Element = Element2;
                exports.ForwardRef = ForwardRef2;
                exports.Fragment = Fragment2;
                exports.Lazy = Lazy2;
                exports.Memo = Memo2;
                exports.Portal = Portal2;
                exports.Profiler = Profiler2;
                exports.StrictMode = StrictMode2;
                exports.Suspense = Suspense2;
                exports.isAsyncMode = isAsyncMode2;
                exports.isConcurrentMode = isConcurrentMode2;
                exports.isContextConsumer = isContextConsumer2;
                exports.isContextProvider = isContextProvider2;
                exports.isElement = isElement2;
                exports.isForwardRef = isForwardRef2;
                exports.isFragment = isFragment2;
                exports.isLazy = isLazy2;
                exports.isMemo = isMemo2;
                exports.isPortal = isPortal2;
                exports.isProfiler = isProfiler2;
                exports.isStrictMode = isStrictMode2;
                exports.isSuspense = isSuspense2;
                exports.isValidElementType = isValidElementType2;
                exports.typeOf = typeOf2;
            })();
        }
    }
});
// esm-build-02aade17aa542f86e3a45cd893920b53a10da4f8-97cec6a7/node_modules/react-is/index.js
var require_react_is = __commonJS({
    "esm-build-02aade17aa542f86e3a45cd893920b53a10da4f8-97cec6a7/node_modules/react-is/index.js"(exports, module) {
        "use strict";
        if (false) {
            module.exports = null;
        }
        else {
            module.exports = require_react_is_development();
        }
    }
});
// esm-build-02aade17aa542f86e3a45cd893920b53a10da4f8-97cec6a7/mod.js
var import_react_is = __toESM(require_react_is());
var $module = __toESM(require_react_is());
var { AsyncMode, ConcurrentMode, ContextConsumer, ContextProvider, Element, ForwardRef, Fragment, Lazy, Memo, Portal, Profiler, StrictMode, Suspense, isAsyncMode, isConcurrentMode, isContextConsumer, isContextProvider, isElement, isForwardRef, isFragment, isLazy, isMemo, isPortal, isProfiler, isStrictMode, isSuspense, isValidElementType, typeOf } = $module;
var { default: $def, ...$rest } = $module;
var mod_default = import_react_is.default ?? $def ?? $rest;
export { AsyncMode, ConcurrentMode, ContextConsumer, ContextProvider, Element, ForwardRef, Fragment, Lazy, Memo, Portal, Profiler, StrictMode, Suspense, mod_default as default, isAsyncMode, isConcurrentMode, isContextConsumer, isContextProvider, isElement, isForwardRef, isFragment, isLazy, isMemo, isPortal, isProfiler, isStrictMode, isSuspense, isValidElementType, typeOf };
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
