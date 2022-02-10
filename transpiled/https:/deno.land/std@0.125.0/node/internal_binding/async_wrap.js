// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
// Copyright Joyent, Inc. and other Node contributors.
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
// This module ports:
// - https://github.com/nodejs/node/blob/master/src/async_wrap-inl.h
// - https://github.com/nodejs/node/blob/master/src/async_wrap.cc
// - https://github.com/nodejs/node/blob/master/src/async_wrap.h
export function registerDestroyHook(
// deno-lint-ignore no-explicit-any
_target, _asyncId, _prop) {
    // TODO(kt3k): implement actual procedures
}
export var constants;
(function (constants) {
    constants[constants["kInit"] = 0] = "kInit";
    constants[constants["kBefore"] = 1] = "kBefore";
    constants[constants["kAfter"] = 2] = "kAfter";
    constants[constants["kDestroy"] = 3] = "kDestroy";
    constants[constants["kPromiseResolve"] = 4] = "kPromiseResolve";
    constants[constants["kTotals"] = 5] = "kTotals";
    constants[constants["kCheck"] = 6] = "kCheck";
    constants[constants["kExecutionAsyncId"] = 7] = "kExecutionAsyncId";
    constants[constants["kTriggerAsyncId"] = 8] = "kTriggerAsyncId";
    constants[constants["kAsyncIdCounter"] = 9] = "kAsyncIdCounter";
    constants[constants["kDefaultTriggerAsyncId"] = 10] = "kDefaultTriggerAsyncId";
    constants[constants["kUsesExecutionAsyncResource"] = 11] = "kUsesExecutionAsyncResource";
    constants[constants["kStackLength"] = 12] = "kStackLength";
})(constants || (constants = {}));
const asyncHookFields = new Uint32Array(Object.keys(constants).length);
export { asyncHookFields as async_hook_fields };
// Increment the internal id counter and return the value.
export function newAsyncId() {
    return ++asyncIdFields[constants.kAsyncIdCounter];
}
export var UidFields;
(function (UidFields) {
    UidFields[UidFields["kExecutionAsyncId"] = 0] = "kExecutionAsyncId";
    UidFields[UidFields["kTriggerAsyncId"] = 1] = "kTriggerAsyncId";
    UidFields[UidFields["kAsyncIdCounter"] = 2] = "kAsyncIdCounter";
    UidFields[UidFields["kDefaultTriggerAsyncId"] = 3] = "kDefaultTriggerAsyncId";
    UidFields[UidFields["kUidFieldsCount"] = 4] = "kUidFieldsCount";
})(UidFields || (UidFields = {}));
const asyncIdFields = new Float64Array(Object.keys(UidFields).length);
// `kAsyncIdCounter` should start at `1` because that'll be the id the execution
// context during bootstrap.
asyncIdFields[UidFields.kAsyncIdCounter] = 1;
// `kDefaultTriggerAsyncId` should be `-1`, this indicates that there is no
// specified default value and it should fallback to the executionAsyncId.
// 0 is not used as the magic value, because that indicates a missing
// context which is different from a default context.
asyncIdFields[UidFields.kDefaultTriggerAsyncId] = -1;
export { asyncIdFields };
export var providerType;
(function (providerType) {
    providerType[providerType["NONE"] = 0] = "NONE";
    providerType[providerType["GETADDRINFOREQWRAP"] = 1] = "GETADDRINFOREQWRAP";
    providerType[providerType["PIPECONNECTWRAP"] = 2] = "PIPECONNECTWRAP";
    providerType[providerType["PIPESERVERWRAP"] = 3] = "PIPESERVERWRAP";
    providerType[providerType["PIPEWRAP"] = 4] = "PIPEWRAP";
    providerType[providerType["SHUTDOWNWRAP"] = 5] = "SHUTDOWNWRAP";
    providerType[providerType["TCPCONNECTWRAP"] = 6] = "TCPCONNECTWRAP";
    providerType[providerType["TCPSERVERWRAP"] = 7] = "TCPSERVERWRAP";
    providerType[providerType["TCPWRAP"] = 8] = "TCPWRAP";
    providerType[providerType["WRITEWRAP"] = 9] = "WRITEWRAP";
})(providerType || (providerType = {}));
const kInvalidAsyncId = -1;
export class AsyncWrap {
    provider = providerType.NONE;
    asyncId = kInvalidAsyncId;
    constructor(provider) {
        this.provider = provider;
        this.getAsyncId();
    }
    getAsyncId() {
        this.asyncId = this.asyncId === kInvalidAsyncId
            ? newAsyncId()
            : this.asyncId;
        return this.asyncId;
    }
    getProviderType() {
        return this.provider;
    }
}
