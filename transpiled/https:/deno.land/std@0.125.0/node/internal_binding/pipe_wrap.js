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
// - https://github.com/nodejs/node/blob/master/src/pipe_wrap.cc
// - https://github.com/nodejs/node/blob/master/src/pipe_wrap.h
import { notImplemented } from "/transpiled/https://deno.land/std@0.125.0/node/_utils.js";
import { unreachable } from "/transpiled/https://deno.land/std@0.125.0/testing/asserts.js";
import { ConnectionWrap } from "/transpiled/https://deno.land/std@0.125.0/node/internal_binding/connection_wrap.js";
import { AsyncWrap, providerType } from "/transpiled/https://deno.land/std@0.125.0/node/internal_binding/async_wrap.js";
export var socketType;
(function (socketType) {
    socketType[socketType["SOCKET"] = 0] = "SOCKET";
    socketType[socketType["SERVER"] = 1] = "SERVER";
    socketType[socketType["IPC"] = 2] = "IPC";
})(socketType || (socketType = {}));
export class Pipe extends ConnectionWrap {
    reading = false;
    ipc;
    constructor(type) {
        let provider;
        let ipc;
        switch (type) {
            case socketType.SOCKET: {
                provider = providerType.PIPEWRAP;
                ipc = false;
                break;
            }
            case socketType.SERVER: {
                provider = providerType.PIPESERVERWRAP;
                ipc = false;
                break;
            }
            case socketType.IPC: {
                provider = providerType.PIPEWRAP;
                ipc = true;
                break;
            }
            default: {
                unreachable();
            }
        }
        super(provider);
        this.ipc = ipc;
    }
    bind() {
        notImplemented();
    }
    listen() {
        notImplemented();
    }
    connect(_req, _address, _afterConnect) {
        notImplemented();
    }
    open(_fd) {
        // REF: https://github.com/denoland/deno/issues/6529
        notImplemented();
    }
    // Windows only
    setPendingInstances(_instances) {
        notImplemented();
    }
    fchmod() {
        notImplemented();
    }
}
export class PipeConnectWrap extends AsyncWrap {
    oncomplete;
    address;
    constructor() {
        super(providerType.PIPECONNECTWRAP);
    }
}
export var constants;
(function (constants) {
    constants[constants["SOCKET"] = 0] = "SOCKET";
    constants[constants["SERVER"] = 1] = "SERVER";
    constants[constants["IPC"] = 2] = "IPC";
    constants[constants["UV_READABLE"] = 3] = "UV_READABLE";
    constants[constants["UV_WRITABLE"] = 4] = "UV_WRITABLE";
})(constants || (constants = {}));
