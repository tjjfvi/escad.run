/* esm.sh - esbuild bundle(tsee@1.3.2) deno development */
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
// esm-build-550139a453fdf06a889ca2eef531dea2fb7b58dc-6e940245/node_modules/tsee/lib/types.js
var require_types = __commonJS({
    "esm-build-550139a453fdf06a889ca2eef531dea2fb7b58dc-6e940245/node_modules/tsee/lib/types.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.asTypedEventEmitter = void 0;
        function asTypedEventEmitter(x) {
            return x;
        }
        exports.asTypedEventEmitter = asTypedEventEmitter;
    }
});
// esm-build-550139a453fdf06a889ca2eef531dea2fb7b58dc-6e940245/node_modules/tsee/lib/ee.js
var require_ee = __commonJS({
    "esm-build-550139a453fdf06a889ca2eef531dea2fb7b58dc-6e940245/node_modules/tsee/lib/ee.js"(exports) {
        "use strict";
        var __spreadArrays = exports && exports.__spreadArrays || function () {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                s += arguments[i].length;
            for (var r = Array(s), k = 0, i = 0; i < il; i++)
                for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                    r[k] = a[j];
            return r;
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.EventEmitter = void 0;
        var EventEmitter = function () {
            function EventEmitter2() {
                var _this = this;
                this.events = {};
                this.maxListeners = Infinity;
                this.emit = function (event) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    if (_this.events[event]) {
                        var len = _this.events[event].length;
                        for (var _a = 0, _b = _this.events[event]; _a < _b.length; _a++) {
                            var e = _b[_a];
                            e.apply(void 0, args);
                        }
                        return !!len;
                    }
                    return false;
                };
                this.on = function (event, listener) {
                    _this.addListener(event, listener);
                    return _this;
                };
                this.once = function (event, listener) {
                    var onceListener = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        listener.apply(void 0, args);
                        _this.removeListener(event, onceListener);
                    };
                    _this.addListener(event, onceListener);
                    return _this;
                };
                this.addListener = function (event, listener) {
                    if (!(event in _this.events))
                        _this.events[event] = [listener];
                    else
                        _this.events[event].push(listener);
                    if (_this.maxListeners !== Infinity && _this.maxListeners <= _this.events[event].length)
                        console.warn('Maximum event listeners for "' + event + '" event!');
                    return _this;
                };
                this.removeListener = function (event, listener) {
                    if (event in _this.events) {
                        var i = _this.events[event].indexOf(listener);
                        if (i !== -1)
                            _this.events[event].splice(i, 1);
                    }
                    return _this;
                };
                this.hasListeners = function (event) {
                    return _this.events[event] && !!_this.events[event].length;
                };
                this.prependListener = function (event, listener) {
                    if (!(event in _this.events))
                        _this.events[event] = [listener];
                    else
                        _this.events[event].unshift(listener);
                    return _this;
                };
                this.prependOnceListener = function (event, listener) {
                    var onceListener = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        listener.apply(void 0, args);
                        _this.removeListener(event, onceListener);
                    };
                    _this.prependListener(event, onceListener);
                    return _this;
                };
                this.off = function (event, listener) {
                    return _this.removeListener(event, listener);
                };
                this.removeAllListeners = function (event) {
                    delete _this.events[event];
                    return _this;
                };
                this.setMaxListeners = function (n) {
                    _this.maxListeners = n;
                    return _this;
                };
                this.getMaxListeners = function () {
                    return _this.maxListeners;
                };
                this.listeners = function (event) {
                    return __spreadArrays(_this.events[event]);
                };
                this.rawListeners = function (event) {
                    return _this.events[event];
                };
                this.eventNames = function () {
                    return Object.keys(_this.events);
                };
                this.listenerCount = function (type) {
                    return _this.events[type] && _this.events[type].length || 0;
                };
            }
            return EventEmitter2;
        }();
        exports.EventEmitter = EventEmitter;
    }
});
// esm-build-550139a453fdf06a889ca2eef531dea2fb7b58dc-6e940245/node_modules/tsee/lib/index.js
var require_lib = __commonJS({
    "esm-build-550139a453fdf06a889ca2eef531dea2fb7b58dc-6e940245/node_modules/tsee/lib/index.js"(exports) {
        "use strict";
        var __createBinding = exports && exports.__createBinding || (Object.create ? function (o, m, k, k2) {
            if (k2 === void 0)
                k2 = k;
            Object.defineProperty(o, k2, { enumerable: true, get: function () {
                    return m[k];
                } });
        } : function (o, m, k, k2) {
            if (k2 === void 0)
                k2 = k;
            o[k2] = m[k];
        });
        var __exportStar = exports && exports.__exportStar || function (m, exports2) {
            for (var p in m)
                if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
                    __createBinding(exports2, m, p);
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        __exportStar(require_types(), exports);
        __exportStar(require_ee(), exports);
    }
});
// esm-build-550139a453fdf06a889ca2eef531dea2fb7b58dc-6e940245/mod.js
var import_tsee = __toESM(require_lib());
var $module = __toESM(require_lib());
var { default: $def, ...$rest } = $module;
var mod_default = import_tsee.default ?? $def ?? $rest;
export { mod_default as default };
