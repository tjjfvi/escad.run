//
// Adapted from Node.js. Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const _toString = Object.prototype.toString;
const _isObjectLike = (value) => value !== null && typeof value === "object";
const _isFunctionLike = (value) => value !== null && typeof value === "function";
export function isAnyArrayBuffer(value) {
    return (_isObjectLike(value) &&
        (_toString.call(value) === "[object ArrayBuffer]" ||
            _toString.call(value) === "[object SharedArrayBuffer]"));
}
export function isArgumentsObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Arguments]";
}
export function isArrayBuffer(value) {
    return (_isObjectLike(value) && _toString.call(value) === "[object ArrayBuffer]");
}
export function isAsyncFunction(value) {
    return (_isFunctionLike(value) && _toString.call(value) === "[object AsyncFunction]");
}
export function isBooleanObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Boolean]";
}
export function isBoxedPrimitive(value) {
    return (isBooleanObject(value) ||
        isStringObject(value) ||
        isNumberObject(value) ||
        isSymbolObject(value) ||
        isBigIntObject(value));
}
export function isDataView(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object DataView]";
}
export function isDate(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Date]";
}
export function isGeneratorFunction(value) {
    return (_isFunctionLike(value) &&
        _toString.call(value) === "[object GeneratorFunction]");
}
export function isGeneratorObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Generator]";
}
export function isMap(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Map]";
}
export function isMapIterator(value) {
    return (_isObjectLike(value) && _toString.call(value) === "[object Map Iterator]");
}
export function isModuleNamespaceObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Module]";
}
export function isNativeError(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Error]";
}
export function isNumberObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Number]";
}
export function isBigIntObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object BigInt]";
}
export function isPromise(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Promise]";
}
export function isRegExp(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object RegExp]";
}
export function isSet(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Set]";
}
export function isSetIterator(value) {
    return (_isObjectLike(value) && _toString.call(value) === "[object Set Iterator]");
}
export function isSharedArrayBuffer(value) {
    return (_isObjectLike(value) &&
        _toString.call(value) === "[object SharedArrayBuffer]");
}
export function isStringObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object String]";
}
export function isSymbolObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Symbol]";
}
export function isWeakMap(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object WeakMap]";
}
export function isWeakSet(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object WeakSet]";
}
export default {
    isAsyncFunction,
    isGeneratorFunction,
    isAnyArrayBuffer,
    isArrayBuffer,
    isArgumentsObject,
    isBoxedPrimitive,
    isDataView,
    // isExternal,
    isMap,
    isMapIterator,
    isModuleNamespaceObject,
    isNativeError,
    isPromise,
    isSet,
    isSetIterator,
    isWeakMap,
    isWeakSet,
    isRegExp,
    isDate,
    isStringObject,
    isNumberObject,
    isBooleanObject,
    isBigIntObject,
};
