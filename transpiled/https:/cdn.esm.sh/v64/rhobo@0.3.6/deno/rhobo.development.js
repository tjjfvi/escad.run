/* esm.sh - esbuild bundle(rhobo@0.3.6) deno development */
import __tsee$ from "/transpiled/https://cdn.esm.sh/v64/tsee@1.3.2/deno/tsee.development.js";
import __react$ from "/transpiled/https://cdn.esm.sh/v64/react@17.0.2/deno/react.development.js";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function (x) {
    if (typeof require !== "undefined")
        return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
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
// esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/MultiSet.js
var require_MultiSet = __commonJS({
    "esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/MultiSet.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        var MultiSet = function () {
            function MultiSet2() {
                this.map = /* @__PURE__ */ new Map();
            }
            MultiSet2.prototype.add = function (v) {
                var _a;
                this.map.set(v, ((_a = this.map.get(v)) !== null && _a !== void 0 ? _a : 0) + 1);
                return this;
            };
            MultiSet2.prototype.remove = function (v) {
                this.map.set(v, (this.map.get(v) || 1) - 1);
                return this;
            };
            MultiSet2.prototype.has = function (v) {
                var _a;
                return (_a = this.map.get(v)) !== null && _a !== void 0 ? _a : 0;
            };
            return MultiSet2;
        }();
        exports.MultiSet = MultiSet;
    }
});
// esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/Callable.js
var require_Callable = __commonJS({
    "esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/Callable.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        var _Class = function () {
            function _Class2() {
            }
            return _Class2;
        }();
        exports.Callable = function (Class) {
            return function () {
                function class_1() {
                    var _newTarget = this.constructor;
                    var _this = this;
                    var f = function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return _this.__f.apply(f, a);
                    };
                    Class.call(f);
                    return Object.setPrototypeOf(f, _newTarget.prototype);
                }
                return class_1;
            }();
        };
    }
});
// esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/useValue.js
var require_useValue = __commonJS({
    "esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/useValue.js"(exports) {
        "use strict";
        var __importDefault = exports && exports.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : { "default": mod };
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        var react_1 = __importDefault(__react$);
        exports.useValue = function (v) {
            return react_1.default.useState(v)[0];
        };
    }
});
// esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/use_.js
var require_use = __commonJS({
    "esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/use_.js"(exports) {
        "use strict";
        var __read = exports && exports.__read || function (o, n) {
            var m = typeof Symbol === "function" && o[Symbol.iterator];
            if (!m)
                return o;
            var i = m.call(o), r, ar = [], e;
            try {
                while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                    ar.push(r.value);
            }
            catch (error) {
                e = { error };
            }
            finally {
                try {
                    if (r && !r.done && (m = i["return"]))
                        m.call(i);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
            return ar;
        };
        var __spread = exports && exports.__spread || function () {
            for (var ar = [], i = 0; i < arguments.length; i++)
                ar = ar.concat(__read(arguments[i]));
            return ar;
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        var useValue_1 = require_useValue();
        var react_1 = __react$;
        exports.use_ = function (f) {
            var core = function (clear) {
                return function () {
                    var a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        a[_i] = arguments[_i];
                    }
                    var r = useValue_1.useValue(function () {
                        return f.apply(void 0, __spread(a));
                    });
                    if (clear)
                        react_1.useEffect(function () {
                            return function () {
                                r.kill();
                            };
                        }, []);
                    return r;
                };
            };
            return Object.assign(core(true), {
                use: function () {
                    var a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        a[_i] = arguments[_i];
                    }
                    return core(true).apply(void 0, __spread(a)).use();
                },
                preserve: Object.assign(core(false), { use: function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return core(false).apply(void 0, __spread(a)).use();
                    } })
            });
        };
    }
});
// esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/readable.js
var require_readable = __commonJS({
    "esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/readable.js"(exports) {
        "use strict";
        var __extends = exports && exports.__extends || function () {
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d2, b2) {
                    d2.__proto__ = b2;
                } || function (d2, b2) {
                    for (var p in b2)
                        if (b2.hasOwnProperty(p))
                            d2[p] = b2[p];
                };
                return extendStatics(d, b);
            };
            return function (d, b) {
                extendStatics(d, b);
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        }();
        var __generator = exports && exports.__generator || function (thisArg, body) {
            var _ = { label: 0, sent: function () {
                    if (t[0] & 1)
                        throw t[1];
                    return t[1];
                }, trys: [], ops: [] }, f, y, t, g;
            return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
                return this;
            }), g;
            function verb(n) {
                return function (v) {
                    return step([n, v]);
                };
            }
            function step(op) {
                if (f)
                    throw new TypeError("Generator is already executing.");
                while (_)
                    try {
                        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                            return t;
                        if (y = 0, t)
                            op = [op[0] & 2, t.value];
                        switch (op[0]) {
                            case 0:
                            case 1:
                                t = op;
                                break;
                            case 4:
                                _.label++;
                                return { value: op[1], done: false };
                            case 5:
                                _.label++;
                                y = op[1];
                                op = [0];
                                continue;
                            case 7:
                                op = _.ops.pop();
                                _.trys.pop();
                                continue;
                            default:
                                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                    _ = 0;
                                    continue;
                                }
                                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                                    _.label = op[1];
                                    break;
                                }
                                if (op[0] === 6 && _.label < t[1]) {
                                    _.label = t[1];
                                    t = op;
                                    break;
                                }
                                if (t && _.label < t[2]) {
                                    _.label = t[2];
                                    _.ops.push(op);
                                    break;
                                }
                                if (t[2])
                                    _.ops.pop();
                                _.trys.pop();
                                continue;
                        }
                        op = body.call(thisArg, _);
                    }
                    catch (e) {
                        op = [6, e];
                        y = 0;
                    }
                    finally {
                        f = t = 0;
                    }
                if (op[0] & 5)
                    throw op[1];
                return { value: op[0] ? op[1] : void 0, done: true };
            }
        };
        var __values = exports && exports.__values || function (o) {
            var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
            if (m)
                return m.call(o);
            if (o && typeof o.length === "number")
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        var __read = exports && exports.__read || function (o, n) {
            var m = typeof Symbol === "function" && o[Symbol.iterator];
            if (!m)
                return o;
            var i = m.call(o), r, ar = [], e;
            try {
                while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                    ar.push(r.value);
            }
            catch (error) {
                e = { error };
            }
            finally {
                try {
                    if (r && !r.done && (m = i["return"]))
                        m.call(i);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
            return ar;
        };
        var __importDefault = exports && exports.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : { "default": mod };
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        var react_1 = __importDefault(__react$);
        var tsee_1 = __tsee$;
        var MultiSet_1 = require_MultiSet();
        var Callable_1 = require_Callable();
        var use_1 = require_use();
        var cur;
        var EE = function (_super) {
            __extends(EE2, _super);
            function EE2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return EE2;
        }(tsee_1.EventEmitter);
        var Readable = function (_super) {
            __extends(Readable2, _super);
            function Readable2(func) {
                var _this = _super.call(this) || this;
                _this.alive = true;
                _this.deps = /* @__PURE__ */ new Set();
                _this.dependents = /* @__PURE__ */ new Set();
                _this.get = function () {
                    if (!_this.alive)
                        throw new Error("Called .get on dead Readable");
                    if (cur)
                        cur.addDep(_this);
                    return _this.value;
                };
                _this.func = func;
                Readable2.update(_this);
                return _this;
            }
            Readable2.prototype.addDep = function (readable2) {
                this.deps.add(readable2);
                readable2.addDependent(this);
            };
            Readable2.prototype.clearDeps = function () {
                var e_1, _a;
                try {
                    for (var _b = __values(this.deps), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var dep = _c.value;
                        dep.removeDependent(this);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                this.deps.clear();
            };
            Readable2.prototype.addDependent = function (readable2) {
                this.dependents.add(readable2);
            };
            Readable2.prototype.removeDependent = function (readable2) {
                this.dependents.delete(readable2);
            };
            Readable2.prototype.update = function (tbu, uip) {
                var _this = this;
                if (tbu === void 0) {
                    tbu = new MultiSet_1.MultiSet();
                }
                if (uip === void 0) {
                    uip = /* @__PURE__ */ new Set();
                }
                if (!this.alive)
                    throw new Error("Called .update on dead Readable");
                if (uip.has(this)) {
                    console.warn("Circular dependency; using old value");
                    return {
                        readable: this,
                        register: function () {
                            return void 0;
                        },
                        update: function () {
                            return void 0;
                        }
                    };
                }
                var uip2 = new Set(uip);
                uip2.add(this);
                var dependents = this.dependents;
                var subs = new Set(function () {
                    var _a, _b, dependent, e_2_1;
                    var e_2, _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                _d.trys.push([0, 5, 6, 7]);
                                _a = __values(new Set(dependents)), _b = _a.next();
                                _d.label = 1;
                            case 1:
                                if (!!_b.done)
                                    return [3, 4];
                                dependent = _b.value;
                                return [4, dependent.update(tbu, uip2)];
                            case 2:
                                _d.sent();
                                _d.label = 3;
                            case 3:
                                _b = _a.next();
                                return [3, 1];
                            case 4:
                                return [3, 7];
                            case 5:
                                e_2_1 = _d.sent();
                                e_2 = { error: e_2_1 };
                                return [3, 7];
                            case 6:
                                try {
                                    if (_b && !_b.done && (_c = _a.return))
                                        _c.call(_a);
                                }
                                finally {
                                    if (e_2)
                                        throw e_2.error;
                                }
                                return [7];
                            case 7:
                                return [2];
                        }
                    });
                }());
                return {
                    readable: this,
                    register: function () {
                        var e_3, _a;
                        tbu.add(_this);
                        if (tbu.has(_this) === 1)
                            try {
                                for (var subs_1 = __values(subs), subs_1_1 = subs_1.next(); !subs_1_1.done; subs_1_1 = subs_1.next()) {
                                    var sub = subs_1_1.value;
                                    sub.register();
                                }
                            }
                            catch (e_3_1) {
                                e_3 = { error: e_3_1 };
                            }
                            finally {
                                try {
                                    if (subs_1_1 && !subs_1_1.done && (_a = subs_1.return))
                                        _a.call(subs_1);
                                }
                                finally {
                                    if (e_3)
                                        throw e_3.error;
                                }
                            }
                    },
                    update: function () {
                        var e_4, _a;
                        _this.clearDeps();
                        var lastCur = cur;
                        cur = _this;
                        _this.value = _this.func();
                        _this.symb = Symbol();
                        cur = lastCur;
                        _this.emit("update");
                        try {
                            for (var _b = __values(new Set(subs)), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var sub = _c.value;
                                tbu.remove(sub.readable);
                                if (!tbu.has(sub.readable))
                                    sub.update();
                            }
                        }
                        catch (e_4_1) {
                            e_4 = { error: e_4_1 };
                        }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return))
                                    _a.call(_b);
                            }
                            finally {
                                if (e_4)
                                    throw e_4.error;
                            }
                        }
                    }
                };
            };
            Readable2.update = function (r) {
                var obj = r.update();
                obj.register();
                obj.update();
            };
            Readable2.prototype.inn = function (f) {
                if (!this.alive)
                    throw new Error("Called .inn on dead Readable");
                if (this.value)
                    f(this.value);
                return this;
            };
            Readable2.prototype.tap = function (f) {
                if (!this.alive)
                    throw new Error("Called .tap on dead Readable");
                f(this.value);
                return this;
            };
            Readable2.prototype.use = function () {
                var _this = this;
                var _a = __read(react_1.default.useState({}), 2), setState = _a[1];
                var lastSymb = react_1.default.useRef(this.symb);
                lastSymb.current = this.symb;
                var handler = function () {
                    if (lastSymb.current !== _this.symb)
                        setTimeout(function () {
                            return setState({});
                        }, 0);
                };
                react_1.default.useEffect(function () {
                    _this.on("update", handler);
                    return function () {
                        return void _this.removeListener("update", handler);
                    };
                }, []);
                return this;
            };
            Readable2.prototype.kill = function () {
                this.clearDeps();
                this.alive = false;
                delete this.value;
            };
            Readable2.prototype.__f = function () {
                var a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    a[_i] = arguments[_i];
                }
                a;
                return this.get();
            };
            Object.defineProperty(Readable2.prototype, "obs", {
                get: function () {
                    var _this = this;
                    return this._obs = this._obs || new Proxy({}, {
                        get: function (t, k) {
                            return k in t ? t[k] : t[k] = new Readable2(function () {
                                var _a;
                                return (_a = _this.get()) === null || _a === void 0 ? void 0 : _a[k];
                            });
                        }
                    });
                },
                enumerable: true,
                configurable: true
            });
            Readable2.setCur = function (r) {
                r.clearDeps();
                var oldCur = cur;
                cur = r;
                return function () {
                    cur = oldCur;
                };
            };
            return Readable2;
        }(Callable_1.Callable(tsee_1.EventEmitter));
        exports.Readable = Readable;
        function readable(func) {
            return new Readable(func);
        }
        exports.readable = readable;
        exports.useReadable = use_1.use_(readable);
    }
});
// esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/writeable.js
var require_writeable = __commonJS({
    "esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/writeable.js"(exports) {
        "use strict";
        var __extends = exports && exports.__extends || function () {
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d2, b2) {
                    d2.__proto__ = b2;
                } || function (d2, b2) {
                    for (var p in b2)
                        if (b2.hasOwnProperty(p))
                            d2[p] = b2[p];
                };
                return extendStatics(d, b);
            };
            return function (d, b) {
                extendStatics(d, b);
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        }();
        Object.defineProperty(exports, "__esModule", { value: true });
        var readable_1 = require_readable();
        var use_1 = require_use();
        var Writeable = function (_super) {
            __extends(Writeable2, _super);
            function Writeable2(get, set) {
                var _this = _super.call(this, get) || this;
                _this.set = function (value) {
                    if (!_this.alive)
                        throw new Error("Called .set on dead writeable");
                    _this.setFunc(value);
                    return value;
                };
                _this.setFunc = set;
                return _this;
            }
            Writeable2.prototype.__f = function () {
                var x = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    x[_i] = arguments[_i];
                }
                if (x.length)
                    return this.set(x[0]);
                return this.get();
            };
            Object.defineProperty(Writeable2.prototype, "obs", {
                get: function () {
                    var _this = this;
                    return this._obsW = this._obsW || new Proxy({}, {
                        get: function (t, k) {
                            return k in t ? t[k] : t[k] = new Writeable2(function () {
                                var _a;
                                return (_a = _this.get()) === null || _a === void 0 ? void 0 : _a[k];
                            }, function (v) {
                                _this.value[k] = v;
                                readable_1.Readable.update(t[k]);
                            });
                        }
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Writeable2;
        }(readable_1.Readable);
        exports.Writeable = Writeable;
        function writeable(get, set) {
            return new Writeable(get, set);
        }
        exports.writeable = writeable;
        exports.useWriteable = use_1.use_(writeable);
    }
});
// esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/computed.js
var require_computed = __commonJS({
    "esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/computed.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        var readable_1 = require_readable();
        var writeable_1 = require_writeable();
        var use_1 = require_use();
        function computed(get, set) {
            if (set)
                return writeable_1.writeable(get, set);
            return readable_1.readable(get);
        }
        exports.computed = computed;
        exports.comp = computed;
        exports.c = exports.comp;
        exports.useComputed = use_1.use_(computed);
        exports.useComp = exports.useComputed;
        exports.useC = exports.useComp;
    }
});
// esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/fromPromise.js
var require_fromPromise = __commonJS({
    "esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/fromPromise.js"(exports) {
        "use strict";
        var __extends = exports && exports.__extends || function () {
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d2, b2) {
                    d2.__proto__ = b2;
                } || function (d2, b2) {
                    for (var p in b2)
                        if (b2.hasOwnProperty(p))
                            d2[p] = b2[p];
                };
                return extendStatics(d, b);
            };
            return function (d, b) {
                extendStatics(d, b);
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        }();
        Object.defineProperty(exports, "__esModule", { value: true });
        var readable_1 = require_readable();
        var use_1 = require_use();
        var FromPromise = function (_super) {
            __extends(FromPromise2, _super);
            function FromPromise2(prom, initialValue) {
                var _this = this;
                var fv = false;
                _this = _super.call(this, function () {
                    return fv ? _this.value : initialValue;
                }) || this;
                fv = true;
                _this.prom = prom;
                _this.then = prom.then.bind(prom);
                _this.catch = prom.catch.bind(prom);
                _this.finally = prom.finally.bind(prom);
                prom.then(function (v) {
                    _this.value = v;
                    readable_1.Readable.update(_this);
                });
                return _this;
            }
            return FromPromise2;
        }(readable_1.Readable);
        function fromPromise(prom, initialValue) {
            if (initialValue === void 0) {
                initialValue = null;
            }
            return new FromPromise(typeof prom === "function" ? prom() : prom, initialValue);
        }
        exports.fromPromise = fromPromise;
        exports.fromProm = fromPromise;
        exports.fp = exports.fromProm;
        exports.useFromPromise = use_1.use_(fromPromise);
        exports.useFromProm = exports.useFromPromise;
        exports.useFp = exports.useFromProm;
    }
});
// esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/observable.js
var require_observable = __commonJS({
    "esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/observable.js"(exports) {
        "use strict";
        var __extends = exports && exports.__extends || function () {
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d2, b2) {
                    d2.__proto__ = b2;
                } || function (d2, b2) {
                    for (var p in b2)
                        if (b2.hasOwnProperty(p))
                            d2[p] = b2[p];
                };
                return extendStatics(d, b);
            };
            return function (d, b) {
                extendStatics(d, b);
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        }();
        Object.defineProperty(exports, "__esModule", { value: true });
        var writeable_1 = require_writeable();
        var readable_1 = require_readable();
        var use_1 = require_use();
        var Observable = function (_super) {
            __extends(Observable2, _super);
            function Observable2(initialValue) {
                var _this = this;
                var v = function () {
                    return initialValue;
                };
                _this = _super.call(this, function () {
                    return v();
                }, function (value) {
                    _this.value = value;
                    readable_1.Readable.update(_this);
                }) || this;
                _this.value = initialValue;
                v = function () {
                    return _this.value;
                };
                return _this;
            }
            return Observable2;
        }(writeable_1.Writeable);
        exports.Observable = Observable;
        function observable(value) {
            if (value === void 0) {
                value = null;
            }
            return new Observable(value);
        }
        exports.observable = observable;
        exports.obs = observable;
        exports.o = exports.obs;
        exports.useObservable = use_1.use_(observable);
        exports.useObs = exports.useObservable;
        exports.useO = exports.useObs;
    }
});
// esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/observer.js
var require_observer = __commonJS({
    "esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/observer.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        var readable_1 = require_readable();
        exports.observer = function (component) {
            return function (i) {
                var c = readable_1.useReadable.use(function () {
                    return null;
                });
                var d = readable_1.Readable.setCur(c);
                var result = component(i);
                d();
                return result;
            };
        };
    }
});
// esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/index.js
var require_src = __commonJS({
    "esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/node_modules/rhobo/dist/src/index.js"(exports) {
        "use strict";
        function __export(m) {
            for (var p in m)
                if (!exports.hasOwnProperty(p))
                    exports[p] = m[p];
        }
        Object.defineProperty(exports, "__esModule", { value: true });
        __export(require_computed());
        __export(require_fromPromise());
        __export(require_observable());
        __export(require_observer());
        __export(require_readable());
        __export(require_useValue());
        __export(require_use());
        __export(require_writeable());
    }
});
// esm-build-b54513128fe1240e2bc4bac2fc00d4e6d184709d-53746ca3/mod.js
var import_rhobo = __toESM(require_src());
var $module = __toESM(require_src());
var { default: $def, ...$rest } = $module;
var mod_default = import_rhobo.default ?? $def ?? $rest;
export { mod_default as default };
