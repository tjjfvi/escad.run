/* esm.sh - esbuild bundle(@mdi/react@1.5.0) deno development */
import __react$ from "/transpiled/https://cdn.esm.sh/v64/react@17.0.2/deno/react.development.js";
import __prop_types$ from "/transpiled/https://cdn.esm.sh/v64/prop-types@15.8.1/deno/prop-types.development.js";
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
// esm-build-47edbcbcdba19f978d3764ebc6a3d85c85a30f10-01257e8c/node_modules/@mdi/react/Icon.js
var require_Icon = __commonJS({
    "esm-build-47edbcbcdba19f978d3764ebc6a3d85c85a30f10-01257e8c/node_modules/@mdi/react/Icon.js"(exports, module) {
        module.exports = function (e) {
            var t = {};
            function r(n) {
                if (t[n])
                    return t[n].exports;
                var o = t[n] = { i: n, l: false, exports: {} };
                return e[n].call(o.exports, o, o.exports, r), o.l = true, o.exports;
            }
            return r.m = e, r.c = t, r.d = function (e2, t2, n) {
                r.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: n });
            }, r.r = function (e2) {
                typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
            }, r.t = function (e2, t2) {
                if (1 & t2 && (e2 = r(e2)), 8 & t2)
                    return e2;
                if (4 & t2 && typeof e2 == "object" && e2 && e2.__esModule)
                    return e2;
                var n = /* @__PURE__ */ Object.create(null);
                if (r.r(n), Object.defineProperty(n, "default", { enumerable: true, value: e2 }), 2 & t2 && typeof e2 != "string")
                    for (var o in e2)
                        r.d(n, o, function (t3) {
                            return e2[t3];
                        }.bind(null, o));
                return n;
            }, r.n = function (e2) {
                var t2 = e2 && e2.__esModule ? function () {
                    return e2.default;
                } : function () {
                    return e2;
                };
                return r.d(t2, "a", t2), t2;
            }, r.o = function (e2, t2) {
                return Object.prototype.hasOwnProperty.call(e2, t2);
            }, r.p = "", r(r.s = 2);
        }([function (e, t) {
                e.exports = __prop_types$;
            }, function (e, t) {
                e.exports = __react$;
            }, function (e, t, r) {
                "use strict";
                r.r(t);
                var n = r(1), o = r(0), l = function () {
                    return (l = Object.assign || function (e2) {
                        for (var t2, r2 = 1, n2 = arguments.length; r2 < n2; r2++)
                            for (var o2 in t2 = arguments[r2])
                                Object.prototype.hasOwnProperty.call(t2, o2) && (e2[o2] = t2[o2]);
                        return e2;
                    }).apply(this, arguments);
                }, i = function (e2, t2) {
                    var r2 = {};
                    for (var n2 in e2)
                        Object.prototype.hasOwnProperty.call(e2, n2) && t2.indexOf(n2) < 0 && (r2[n2] = e2[n2]);
                    if (e2 != null && typeof Object.getOwnPropertySymbols == "function") {
                        var o2 = 0;
                        for (n2 = Object.getOwnPropertySymbols(e2); o2 < n2.length; o2++)
                            t2.indexOf(n2[o2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, n2[o2]) && (r2[n2[o2]] = e2[n2[o2]]);
                    }
                    return r2;
                }, a = 0, s = n.forwardRef(function (e2, t2) {
                    var r2 = e2.title, o2 = r2 === void 0 ? null : r2, s2 = e2.description, c2 = s2 === void 0 ? null : s2, u2 = e2.size, p2 = u2 === void 0 ? null : u2, f2 = e2.color, d2 = f2 === void 0 ? "currentColor" : f2, y = e2.horizontal, v = y === void 0 ? null : y, b = e2.vertical, m = b === void 0 ? null : b, h = e2.rotate, g = h === void 0 ? null : h, O = e2.spin, w = O === void 0 ? null : O, j = e2.style, z = j === void 0 ? {} : j, E = e2.children, P = i(e2, ["title", "description", "size", "color", "horizontal", "vertical", "rotate", "spin", "style", "children"]);
                    a++;
                    var S, x = w !== null && w, _ = n.Children.map(E, function (e3) {
                        var t3 = e3;
                        x !== true && (x = (w === null ? t3.props.spin : w) === true);
                        var r3 = t3.props.size;
                        typeof p2 == "number" && typeof t3.props.size == "number" && (r3 = t3.props.size / p2);
                        var o3 = { size: r3, color: d2 === null ? t3.props.color : d2, horizontal: v === null ? t3.props.horizontal : v, vertical: m === null ? t3.props.vertical : m, rotate: g === null ? t3.props.rotate : g, spin: w === null ? t3.props.spin : w, inStack: true };
                        return n.cloneElement(t3, o3);
                    });
                    p2 !== null && (z.width = typeof p2 == "string" ? p2 : 1.5 * p2 + "rem");
                    var k, T = "stack_labelledby_" + a, q = "stack_describedby_" + a;
                    if (o2)
                        S = c2 ? T + " " + q : T;
                    else if (k = "presentation", c2)
                        throw new Error("title attribute required when description is set");
                    return n.createElement("svg", l({ ref: t2, viewBox: "0 0 24 24", style: z, role: k, "aria-labelledby": S }, P), o2 && n.createElement("title", { id: T }, o2), c2 && n.createElement("desc", { id: q }, c2), x && n.createElement("style", null, "@keyframes spin { to { transform: rotate(360deg) } }", "@keyframes spin-inverse { to { transform: rotate(-360deg) } }"), _);
                });
                s.displayName = "Stack", s.propTypes = { size: o.oneOfType([o.number, o.string]), color: o.string, horizontal: o.bool, vertical: o.bool, rotate: o.number, spin: o.oneOfType([o.bool, o.number]), children: o.oneOfType([o.arrayOf(o.node), o.node]).isRequired, className: o.string, style: o.object }, s.defaultProps = { size: null, color: null, horizontal: null, vertical: null, rotate: null, spin: null };
                var c = s;
                r.d(t, "Icon", function () {
                    return d;
                }), r.d(t, "Stack", function () {
                    return c;
                });
                var u = function () {
                    return (u = Object.assign || function (e2) {
                        for (var t2, r2 = 1, n2 = arguments.length; r2 < n2; r2++)
                            for (var o2 in t2 = arguments[r2])
                                Object.prototype.hasOwnProperty.call(t2, o2) && (e2[o2] = t2[o2]);
                        return e2;
                    }).apply(this, arguments);
                }, p = function (e2, t2) {
                    var r2 = {};
                    for (var n2 in e2)
                        Object.prototype.hasOwnProperty.call(e2, n2) && t2.indexOf(n2) < 0 && (r2[n2] = e2[n2]);
                    if (e2 != null && typeof Object.getOwnPropertySymbols == "function") {
                        var o2 = 0;
                        for (n2 = Object.getOwnPropertySymbols(e2); o2 < n2.length; o2++)
                            t2.indexOf(n2[o2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, n2[o2]) && (r2[n2[o2]] = e2[n2[o2]]);
                    }
                    return r2;
                }, f = 0, d = n.forwardRef(function (e2, t2) {
                    var r2 = e2.path, o2 = e2.id, l2 = o2 === void 0 ? ++f : o2, i2 = e2.title, a2 = i2 === void 0 ? null : i2, s2 = e2.description, c2 = s2 === void 0 ? null : s2, d2 = e2.size, y = d2 === void 0 ? null : d2, v = e2.color, b = v === void 0 ? "currentColor" : v, m = e2.horizontal, h = m !== void 0 && m, g = e2.vertical, O = g !== void 0 && g, w = e2.rotate, j = w === void 0 ? 0 : w, z = e2.spin, E = z !== void 0 && z, P = e2.style, S = P === void 0 ? {} : P, x = e2.inStack, _ = x !== void 0 && x, k = p(e2, ["path", "id", "title", "description", "size", "color", "horizontal", "vertical", "rotate", "spin", "style", "inStack"]), T = {}, q = [];
                    y !== null && (_ ? q.push("scale(" + y + ")") : (S.width = typeof y == "string" ? y : 1.5 * y + "rem", S.height = S.width)), h && q.push("scaleX(-1)"), O && q.push("scaleY(-1)"), j !== 0 && q.push("rotate(" + j + "deg)"), b !== null && (T.fill = b);
                    var M = n.createElement("path", u({ d: r2, style: T }, _ ? k : {})), C = M;
                    q.length > 0 && (S.transform = q.join(" "), S.transformOrigin = "center", _ && (C = n.createElement("g", { style: S }, M, n.createElement("rect", { width: "24", height: "24", fill: "transparent" }))));
                    var I, N = C, R = E === true || typeof E != "number" ? 2 : E, B = !_ && (h || O);
                    if (R < 0 && (B = !B), E && (N = n.createElement("g", { style: { animation: "spin" + (B ? "-inverse" : "") + " linear " + Math.abs(R) + "s infinite", transformOrigin: "center" } }, C, !(h || O || j !== 0) && n.createElement("rect", { width: "24", height: "24", fill: "transparent" }))), _)
                        return N;
                    var X, Y = "icon_labelledby_" + l2, A = "icon_describedby_" + l2;
                    if (a2)
                        I = c2 ? Y + " " + A : Y;
                    else if (X = "presentation", c2)
                        throw new Error("title attribute required when description is set");
                    return n.createElement("svg", u({ ref: t2, viewBox: "0 0 24 24", style: S, role: X, "aria-labelledby": I }, k), a2 && n.createElement("title", { id: Y }, a2), c2 && n.createElement("desc", { id: A }, c2), !_ && E && (B ? n.createElement("style", null, "@keyframes spin-inverse { to { transform: rotate(-360deg) } }") : n.createElement("style", null, "@keyframes spin { to { transform: rotate(360deg) } }")), N);
                });
                d.displayName = "Icon", d.propTypes = { path: o.string.isRequired, size: o.oneOfType([o.number, o.string]), color: o.string, horizontal: o.bool, vertical: o.bool, rotate: o.number, spin: o.oneOfType([o.bool, o.number]), style: o.object, inStack: o.bool, className: o.string }, d.defaultProps = { size: null, color: "currentColor", horizontal: false, vertical: false, rotate: 0, spin: false };
                t.default = d;
            }]);
    }
});
// esm-build-47edbcbcdba19f978d3764ebc6a3d85c85a30f10-01257e8c/mod.js
var import_react = __toESM(require_Icon());
var $module = __toESM(require_Icon());
var { default: $def, ...$rest } = $module;
var mod_default = import_react.default ?? $def ?? $rest;
export { mod_default as default };
