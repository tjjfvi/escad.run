/* esm.sh - esbuild bundle(object-assign@4.1.1) deno development */
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
// esm-build-11f6948453ffead490d8d5aa5d14fe8b03065cd0-86127a2a/node_modules/object-assign/index.js
var require_object_assign = __commonJS({
    "esm-build-11f6948453ffead490d8d5aa5d14fe8b03065cd0-86127a2a/node_modules/object-assign/index.js"(exports, module) {
        "use strict";
        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var propIsEnumerable = Object.prototype.propertyIsEnumerable;
        function toObject(val) {
            if (val === null || val === void 0) {
                throw new TypeError("Object.assign cannot be called with null or undefined");
            }
            return Object(val);
        }
        function shouldUseNative() {
            try {
                if (!Object.assign) {
                    return false;
                }
                var test1 = new String("abc");
                test1[5] = "de";
                if (Object.getOwnPropertyNames(test1)[0] === "5") {
                    return false;
                }
                var test2 = {};
                for (var i = 0; i < 10; i++) {
                    test2["_" + String.fromCharCode(i)] = i;
                }
                var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
                    return test2[n];
                });
                if (order2.join("") !== "0123456789") {
                    return false;
                }
                var test3 = {};
                "abcdefghijklmnopqrst".split("").forEach(function (letter) {
                    test3[letter] = letter;
                });
                if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
                    return false;
                }
                return true;
            }
            catch (err) {
                return false;
            }
        }
        module.exports = shouldUseNative() ? Object.assign : function (target, source) {
            var from;
            var to = toObject(target);
            var symbols;
            for (var s = 1; s < arguments.length; s++) {
                from = Object(arguments[s]);
                for (var key in from) {
                    if (hasOwnProperty.call(from, key)) {
                        to[key] = from[key];
                    }
                }
                if (getOwnPropertySymbols) {
                    symbols = getOwnPropertySymbols(from);
                    for (var i = 0; i < symbols.length; i++) {
                        if (propIsEnumerable.call(from, symbols[i])) {
                            to[symbols[i]] = from[symbols[i]];
                        }
                    }
                }
            }
            return to;
        };
    }
});
// esm-build-11f6948453ffead490d8d5aa5d14fe8b03065cd0-86127a2a/mod.js
var import_object_assign = __toESM(require_object_assign());
var $module = __toESM(require_object_assign());
var { default: $def, ...$rest } = $module;
var mod_default = import_object_assign.default ?? $def ?? $rest;
export { mod_default as default };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
